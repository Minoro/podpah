<template>
	<div class="volume">
		<span class="icon" v-if="volume != 0" @click="mute">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
			<path fill="#444444" d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path>
			<path fill="#444444" d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path>
			<path fill="#444444" d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path>
			<path fill="#444444" d="M4 5h-4v6h4l5 4v-14z"></path>
			</svg>
		</span>
		<span v-else @click="unmute">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
			<path fill="#444444" d="M4 5h-4v6h4l5 4v-14z"></path>
			<path fill="#444444" d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path>
			</svg>
		</span>

		<input 
			type="range" 
			min="0" 
			max="1" 
			step="0.1"
			class="volume__input"
			v-model="volume"
			@change="onChange">
	</div>
</template>
<script>
export default {
	props: {
		initialVolume: {
			required: false,
			default: 1
		}
	},
	data() {
		return {
			volume: this.initialVolume,
			oldVolume: 0,
		}
	},
	methods: {
		onChange(){
			this.$emit('change', this.volume);
		},
		mute(){
			this.oldVolume = this.volume;
			this.volume = 0;

			this.$emit('muted');
			this.$emit('change', 0);
		},
		unmute(){
			this.volume = this.oldVolume;
			
			this.$emit('unmuted');
			this.$emit('change', this.volume);
		}
	}

}
</script>

<style lang="scss" scoped>

.volume {
	display: flex;
	align-items: center;
	width: 50%;
	margin: 0 auto;

	&__input {
		&[type=range] {
			-webkit-appearance: none;
			margin: 0 .5rem;
			width: 100%;
			height: .4rem;

			&:focus {
				outline: none;
				
				&::-webkit-slider-runnable-track {
					background: $primary-light;
				}

				&::-moz-range-track {
					box-shadow: 0px 2px 7px -1px $primary-color;
				}
			}

			//linha de busca
			&::-moz-range-track {
				width: 100%;
				height: .4rem;
				border: 1px solid $primary-light;
				border-radius: .23rem;
				background-color: $primary-light;
			}
			
			//bolinha de busca
			&::-moz-range-thumb {
				width: .8rem;
				height: .8rem;
				background: $primary-color;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
			}
			
			//abaixo do picker
			&::-moz-range-progress {
				height: 100%;
				background-color: $primary-light;
			}

			//acima do picker
			&::-moz-range-track { 
				height: 100%; 
				background-color: transparent;
			}

			//Chrome
			&::-webkit-slider-thumb {
				width: .8rem;
				height: .8rem;
				background: $primary-color;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
				-webkit-appearance: none;
			}

			&::-webkit-slider-runnable-track {
				cursor: pointer;
				animate: 0.2s;
				position: relative;
				width: 100%;
				height: .4rem;
				border: 1px solid $primary-light;
				border-radius: .23rem;
				background-color: $primary-light;
			}

			//IE
			&::-ms-fill-lower {
				width: 100%;
				height: 100%;
				background-color: $primary-light;
			}

			&::-ms-fill-upper {
				width: 100%;
				height: 100%; 
				background-color: transparent;
			}

			&::-ms-thumb {
				width: .8rem;
				height: .8rem;
				background: $primary-color;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
			}

			&::-ms-track {
				cursor: pointer;
				animate: 0.2s;
				position: relative;
				width: 100%;
				height: .4rem;
				border: 1px solid $primary-light;
				border-radius: .23rem;
				background-color: $primary-light;
			}
		}
	}
}

</style>