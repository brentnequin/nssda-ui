<template>
    <section :id="name" v-bind:style="style" class="section">
        <template v-if="noContainer">
            <div class="section-wrapper">
                <slot></slot>
            </div>
        </template>
        <template v-else>
            <b-container>
                <div class="section-wrapper">
                    <slot></slot>
                </div>
            </b-container>
        </template>
    </section>
</template>

<script>
export default {
    props: {
        name: String,
        bgColor: String,
        bgImage: String,
        noContainer: Boolean
    },

    data() {
        return {
            style: {
                'background-color': this.bgColor || 'white',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover',
            }
        }
    },

    created() {
        if (this.bgImage) {
            this.style = Object.assign(this.style, {'background-image': 'url(' + this.bgImage + ')'})
        }
    }
}
</script>

<style>
.section-wrapper {
    padding: 3em 0;
}
</style>