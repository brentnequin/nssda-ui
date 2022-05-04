<template>
    <Section name="our-pastors">
        <h1>Our Pastors</h1>
        <p>Read more about our pastors.</p>
        <b-card-group deck class="pastor-cards">
            <BioPreviewCard 
                class="pastor-card"
                v-for="pastor in pastors"
                v-bind:key="pastor.name"
                :imgSrc="pastor.image.data.attributes.url"
                :title="pastor.name"
                :subtitle="pastor.title"
                :text="pastor.bio"
                buttonLabel="Read More"
                :buttonTo="'/our-pastors/' + pastor.name_id"
            />
        </b-card-group>
    </Section>
</template>

<script>
import OurPastorsQuery from "~/apollo/queries/our-pastors/our-pastors";
export default {
    data() {
        return {
        };
    },
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient;
        const response = await client.query({ query: OurPastorsQuery });
        // console.log(response.data.pastors.data.map(({attributes}) => attributes))
        return {
            pastors: response.data.pastors.data.map(({attributes}) => attributes)
        };
    },
}
</script>

<style>
.pastor-cards {
    display: flex;
    justify-content: center;
}

.pastor-card {
    max-width: 20em;
}
.pastor-card:not(:last-child) {
    /* margin-right: 3em; */
}
</style>