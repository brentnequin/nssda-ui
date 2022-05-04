<template>
    <b-container class="footer-wrapper">
        <b-row class="footer-top-sections">
            <b-col class="contact">
                <h4 class="contact-header">Contact</h4>
                <p v-for="item in contact" v-bind:key="item">{{item}}</p>
            </b-col>
            <b-col class="email-list">
                <h4></h4>
            </b-col>
        </b-row>
        <divider />
        <b-row>
            <b-col>
                &copy; 2021 North Shore SDA Church. All rights reserved.
            </b-col>
            <b-col class="social-icon-group text-right">
                <SocialIcon icon="facebook" to="https://www.facebook.com/northshoresda" />
                <SocialIcon icon="youtube" to="https://www.youtube.com/channel/UCF7qdJAGi1I7OKp7MSMQ7Bg" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            contact: [
                "North Shore SDA Church",
                "5220 N California Ave",
                "Chicago, IL 60625-3502",
                "773-561-0282"
            ]
        }
    },
}
</script>

<style scoped>
.footer-wrapper {
    margin-top: 2em;
    margin-bottom: 1em;
}

.contact > * {
    border: none;
    padding: 0;
    margin: 0;
}
</style>