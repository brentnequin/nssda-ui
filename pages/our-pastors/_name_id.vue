<template>
	<div>
		<Section :name="name">
			<h1>Pastor {{name}}</h1>
			<b-row>
				<b-col cols="6">
					<p class="text-muted">{{title}}</p>
					<div v-html="$md.render(text)" />
				</b-col>
				<b-col cols="6">
					<b-img class="float-right" :src="img" fluid />
				</b-col>
			</b-row>
		</Section>
		<Section :name="name + '-blog-posts'" bgColor="grey">
			<h2>Read Blog Posts By Pastor {{name}}</h2>
		</Section>
		<Section :name="name + '-call-to-action'" bgColor="white">
			<h2>Follow Pastor {{name}}</h2>
		</Section>
	</div>
</template>

<script>
import PastorQuery from "~/apollo/queries/our-pastors/pastor.gql";

export default {
	async asyncData(context) {
		const client = context.app.apolloProvider.defaultClient;
		const response = await client.query({ query: PastorQuery, variables: {name_id: context.route.params.name_id} });
		// console.log(response.data.pastors.data[0]);
		return {
			name: response.data.pastors.data[0].attributes.name,
			title: response.data.pastors.data[0].attributes.title,
			text: response.data.pastors.data[0].attributes.bio,
			img: response.data.pastors.data[0].attributes.image.data.attributes.url,
		};
	},
}
</script>