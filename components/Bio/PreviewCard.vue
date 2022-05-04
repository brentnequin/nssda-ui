<template>
<b-card 
    :img-src="imgSrc"
    :title="title"
    :sub-title="subtitle"
>
    <b-card-text v-if="text">{{truncateText(text)}}</b-card-text>
    <b-button :href="buttonTo">
        {{buttonLabel}}
    </b-button>
</b-card>
</template>

<script>
export default {

    props: {
        buttonLabel: String,
        buttonTo: String,
        title: String,
        subtitle: String,
        imgSrc: String,
        text: String,
    },

    methods: {
        truncateText(text, length=100) {
            const new_test = text.substring(0, length-3) + "..."
            return new_test
        }
    }
    
}
</script>
