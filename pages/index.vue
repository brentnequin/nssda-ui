<template>
  <div>
    <Section name="welcome-hero" :bgImage="hero_image_url">
      <Hero
        :title="hero.title"
        :text="hero.text"
        :buttons="hero.buttons"
      />
    </Section>
    <Section name="announcements" v-if="true/*announcements.length > 0*/">
        <b-row align-h="between">
          <h2>Announcements</h2>
          <b-button variant="outline-primary">View More</b-button>
        </b-row>
    </Section>
    <Section name="email-list" bgColor="grey">
      <EmailList />
    </Section>
  </div>
</template>

<script>
import HomePageQuery from "~/apollo/queries/homepage/homepage.gql";
export default {
    data() {
        return {
            hero: {
                title: "Welcome!",
                text: "Worship with us online through our Livestream or in-person",
                buttons: [
                    { label: "Livestream", to: "/livestream" },
                    { label: "Our Location", to: "/#" }
                ]
            }
        };
    },
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient;
        const response = await client.query({ query: HomePageQuery });
        // console.log(response.data.homepage.data.attributes.background_image);
        return {
          announcements: [],
          hero_image_url: response.data.homepage.data.attributes.background_image.data.attributes.url,
          hero_image_height: response.data.homepage.data.attributes.background_image.data.attributes.height,
          service_times: response.data.homepage.data.attributes.service_times
        };
    },
}
</script>
