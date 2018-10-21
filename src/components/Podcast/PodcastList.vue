<template>
	<div>
		<div class="podcasts" v-if="podcasts.length > 0">
			<div class="podcast" v-for="podcast in podcasts">
				<div class="podcast__image">
					<img :src="podcast.logo_url">
				</div>
				<div class="podcast__text">
					<h2>{{ podcast.title }}</h2>
					<div>{{ podcast.description }}</div>
					<div class="buttons">
						<a class="button" href="">Episódios</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		podcasts: {
			type: Array,
			default: () => { return []; }
		}
	}
}	

</script>

<style lang="scss" scoped>
.podcasts {
	display: grid;
	gap: 2rem;
	margin-top: 2rem;

	@media (min-width: 798px){
		grid-template-columns: repeat(2, 1fr);
	}
}

.podcast {

	border: 1px solid $primary-light;
	border-radius: $border-radius;
	padding: 1.2rem;
	display: flex;
	background: #f9f9f9;

	&__image {
		width: 25%;
		display: inline-block;
		overflow: hidden;

		img {
			max-width: 100%;
		}
	}

	&__text {
		width: 75%;
		padding-left: 2rem;
		text-align: left;
		line-height: 1.2;

		h2 {
			margin-bottom: .5rem;
		}
	}
}

.buttons {
	margin-top: 1.2rem;
}
</style>