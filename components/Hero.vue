<template>
    <b-jumbotron v-bind:style="backgroundStyle" bg-variant="transparent">
        <b-container v-bind:style="bodyStyle">
            <h1 class="display-3">{{title}}</h1>
            <p>{{text}}</p>
            <b-button class="hero-button" variant="info" v-for="button in buttons" v-bind:key="button.label" :href="button.to">
                {{button.label}}
            </b-button>
            <slot></slot>
        </b-container>
    </b-jumbotron>
</template>

<script>
export default {

    props: {
        // img_src: String,
        title: String,
        text: String,
        buttons: Array
    },
    
    data() {
        return {
            backgroundStyle: {
                // backgroundImage: 'url(' + this.img_src + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: 0,
                height: '50rem',
                marginBottom: 0
            },
            bodyStyle: {
                color: 'white',
                marginTop: "20rem",
            }
        }
    }
}
</script>

<style>
.hero-button:not(:last-child) {
    margin-right: 1rem;
}
</style>