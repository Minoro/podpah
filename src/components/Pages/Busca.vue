<template>

	<div class="search">
		<h1>Busca</h1>
		<form class="form" @submit.prevent="onSubmit">
			<input type="text" name="search" class="form__input" v-model="search">
			<button class="form__button button">Buscar</button>
		</form>

		<podcast-list :podcasts="results"></podcast-list>
	</div>

</template>
<script>

import PodcastClient from '../../utils/podcast/PodcastClient.js';
import PodcastList from '../Podcast/PodcastList';
export default {
	components: {
		'podcast-list': PodcastList,
	},
	data() {
		return {
			search: '',
			results: [],
			client: new PodcastClient(),
		}
	},
	methods: {
		onSubmit(){
			this.client.search(this.search)
				.then(podcasts => {
					this.results = podcasts;
				}).catch(error => {
					console.log(error);
				})
		}
	}
}

</script>

<style lang="scss" scoped>

.search {
	padding: 0 2rem;
}

</style>