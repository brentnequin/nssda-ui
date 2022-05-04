// import axios from 'axios';

// export default {
//     data() {
//         return {
//             is_live: false,
//             channel_id: "UCF7qdJAGi1I7OKp7MSMQ7Bg",
//             youtube_api_key: this.$config.youtubeApiKey
//         }
//     },
//     methods: {
//         isChannelLive() {
//             axios.get(
//                 "https://www.googleapis.com/youtube/v3/search?part=snippet"
//                 + "&channelId=" + channel_id
//                 + "&type=video"
//                 + "&eventType=live"
//                 + "&key=" + youtube_api_key
//             ).then((response) => {
//                 try {
//                     this.is_live = response.data.items[0].snippet.liveBroadcastContent === "live"
//                 } catch (err) { this.is_live = false }
//             });
//         }
//     }
// }

