<template v-if="isLive">
    <Section name="livestream-live">
        <b-embed type="iframe" :src="'https://www.youtube.com/embed/live_stream?channel=' + youtubeChannelID" allowfullscreen />
    </Section>
</template>
<template v-else>
    <div>
        <Section name="livestream-not-live">
            <h2>We are currently not live.</h2>
            <p>Check out our recent livestreams by visiting our <a href="/livestream/archives">Archives</a> page.</p>
        </Section>
        <Section name="featured-livestream">
            <b-row align-v="center">
                <b-col class="mr-3">
                    <a href="/livestream/#" class="float-right">
                        <b-img src="https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg" width="300"></b-img>
                    </a>
                </b-col>
                <b-col>
                    <h4>Title of video</h4>
                    <p class="text-muted">Date streamed</p>
                    <b-button>Watch Now</b-button>
                </b-col>
            </b-row>
        </Section>
        <Section name="recent-livestreams">
            <b-row align-h="between">
                <h2>Recent Livestreams</h2>
                <b-button variant="outline-primary">View More</b-button>
            </b-row>
        </Section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            youtubeAPIKey: this.$config.youtubeApiKey,
            youtubeChannelID: "UCF7qdJAGi1I7OKp7MSMQ7Bg",
            isLive: false,
        }
    },

    async fetch() {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet'
            + "&channelId=" + this.youtubeChannelID
            + "&type=video"
            + "&eventType=live"
            + "&key=" + this.youtubeAPIKey
        ).then((res) => res.json())
        // console.log(response)
        if (response.items[0])
            this.isLive = true
    }
}
</script>