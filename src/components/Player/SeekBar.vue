<template>
	<div class="seek-bar">
		<span class="seek-bar__time">{{ currentTimeFormated }}</span>
		<input 
			type="range" 
			class="seek-bar__input"
			min="0"
			:max="duration"
			:value="currentTime"
			@mousedown="seekPosition"
			@change="moveToPosition">
		<span class="seek-bar__time">{{ durationFormated }}</span>
	</div>
</template>

<script>

export default {
	props : {
		duration: {
			required: true,
			default: 0,
		},
		currentTime: {
			required: true,
			default: 0,
		}
	},
	data(){
		return {

		}
	},
	computed: {
		currentTimeFormated(){
			return this.secondsToMinutes(this.currentTime);
		},
		durationFormated(){
			return this.secondsToMinutes(this.duration);
		}
	},
	methods: {
		secondsToMinutes(seconds){
			if(!seconds || typeof seconds === 'NaN'){
				return '0:00';
			}

			let minutes = Math.round(seconds) / 60;
			seconds = (minutes % 1) * 60 ;
			
			seconds = Math.round(seconds);
			minutes = parseInt(minutes);

			seconds = seconds.toString().padStart(2, '0');
			return minutes + ':' + seconds;
		},
		seekPosition(){
			this.$emit('seeking');
		},
		moveToPosition(event){
			this.$emit('sought', event.target.value);
		}
	}
}

</script>
<style lang="scss" scoped>

.seek-bar {
	display: flex;
	align-items: center;

	&__input {
		&[type=range] {
			-webkit-appearance: none;
			margin: 0 .5rem;
			width: 100%;

			&:focus {
				outline: none;

				&::-webkit-slider-runnable-track {
					background: $primary-color;
				}
			}

			//linha de busca
			&::-moz-range-track {
				width: 100%;
				height: 1px;
				background-color: $primary-color;
			}
			
			//bolinha de busca
			&::-moz-range-thumb {
				width: 1.5rem;
				height: 1.5rem;
				background: $primary-color;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
			}

			//Chrome
			&::-webkit-slider-thumb {
				width: 1.5rem;
				height: 1.5rem;
				background: $primary-color;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
				cursor: pointer;
				-webkit-appearance: none;
			}

			&::-webkit-slider-runnable-track {
				cursor: pointer;
				animate: 0.2s;
				position: relative;
				width: 100%;
				height: 1px;
				background-color: $primary-color;
			}

			//IE
			&::-ms-fill-lower {
				width: 100%;
				height: 1px;
				background-color: $primary-color;
			}

			&::-ms-fill-upper {
				width: 100%;
				height: 1px;
				background-color: $primary-color;
			}

			&::-ms-thumb {
				width: 1.5rem;
				height: 1.5rem;
				background: $primary-color;
				border-radius: 50%;
				cursor: pointer;
			}

			&::-ms-track {
				cursor: pointer;
				animate: 0.2s;
				position: relative;
				width: 100%;
				height: 1px;
				background-color: $primary-color;
			}
		}
	}
}
</style>