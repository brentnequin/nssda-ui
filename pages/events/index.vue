<template>
    <Section name="events-list">
        <h2>Events</h2>
        <ul>
            <b-media tag="li" class="my-4" v-for="(event, index) in events" v-bind:key="index">
                <template #aside>
                    <b-img v-if="event.featured_image.data" :src="event.featured_image.data.attributes.url" width="120" alt="placeholder" />
                    <b-img v-else blank width="120" alt="placeholder" />
                </template>
                <h5 class="mt-0 mb-1">{{event.title}}</h5>
                <p>{{event.description}}</p>
                <b-button variant="primary" :to="`/events/${event.slug}`">Learn More</b-button>
            </b-media>
        </ul>
    </Section>
</template>

<script>
import EventsQuery from "~/apollo/queries/events/events.gql";
export default {
    data() {
        return {
        };
    },
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient;
        const response = await client.query({ query: EventsQuery });
        // console.log(response.data.events.data.map(({attributes}) => attributes))
        // console.log(response.data.events.data[1].attributes.featured_image.data)
        return {
            events: response.data.events.data.map(({attributes}) => attributes)
        };
    },
}
</script>