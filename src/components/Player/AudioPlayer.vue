<template>
	<div class="player">
		
		<audio controls="controls">
			<source src="../../../song/test.mp3" type="audio/mpeg" />
		</audio>
		<div class="player__buttons">
			<span class="player__button player__button--play" @click="play" v-if="!isPlaying">
				<play-icon></play-icon>
			</span>
			<span class="player__button player__button--pause" @click="pause" v-if="isPlaying">
				<pause-icon></pause-icon>
			</span>
		</div>
		<!-- <div class="player__duration">
			<span class="player__duration-text">{{ currentTime }}</span>
			<span class="player__duration-bar">
				<span class="player__duration-current"></span>
			</span>
			<span class="player__duration-text">{{ duration }}</span>
		</div> -->

		<div class="seek-bar">
			<span class="seek-bar__time">{{ currentTime }}</span>
			<input 
				type="range" 
				class="seek-bar__input"
				min="0"
				:max="totalTime"
				:value="seek"
				@mousedown="seekPosition"
				@change="moveToPosition">
			<span class="seek-bar__time">{{ duration }}</span>
		</div>
	</div>
</template>

<script>

import AudioPlayer from '../../utils/audio/AudioPlayer.js';
import Play from '../Icons/Play';
import Pause from '../Icons/Pause';
export default {
	components: {
		'play-icon': Play,
		'pause-icon': Pause
	},
	data() {
		return {
			player: null,
			isPlaying: false,
			isReady: false,
			totalTime: 0,
			seek: 0,
		}
	},
	watch: {
		player: {
			handler(value) {
				this.isReady = value != null && value.isReady();
				if(this.isReady){
					this.seek = this.player.getCurrentTime();
				}
			},
			deep: true
		},
		isReady: {
			handler(value){
				if(value){
					this.totalTime = this.player.getDuration();
				}
			}
		}
	},
	mounted(){
		this.player = new AudioPlayer(this.$el.querySelector('audio'));
	},
	computed: {
		duration() {
			if(!this.isReady){
				return '0:00'
			}

			return this.secondsToMinutes(this.player.getDuration());
			// return this.player.getDuration();
		},
		currentTime(){
			if(!this.isReady){
				return '0:00'
			}

			let seconds = this.player.getCurrentTime(); 
			return this.secondsToMinutes(seconds);

		}
	},
	methods: {
		play() {
			this.player.play();

			this.isPlaying = true;
		},
		pause(){
			this.player.pause();
			this.isPlaying = false;
		},
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
			this.pause();
		},
		moveToPosition(event){
			this.player.seek(event.target.value);
			this.play();
		}

	}
}

</script>

<style lang="scss">
.icons {
	display:none;
}

.player {
	max-width: 500px;
	margin: 0 auto;
}

.player__duration-current {
	display: block;
	position: absolute;
	width: 20px;
	height: 20px;
	top: 0;
	left: 0;
	background: #333;
	border-radius: 50%;
	transform: translateY(-50%);
	transition: left 1s ease;
}


.seek-bar {
	display: flex;

	&__input {
		&[type=range] {
			-webkit-appearance: none;
			margin: 0 .5rem;
			width: 100%;

			&:focus {
				outline: none;

				&::-webkit-slider-runnable-track {
					background: #333;
				}
			}

			//linha de busca
			&::-moz-range-track {
				width: 100%;
				height: 1px;
				background-color: #333;
			}
			
			//bolinha de busca
			&::-moz-range-thumb {
				width: 20px;
				height: 20px;
				background: #333;
				border-radius: 50%;
				border-color: transparent;
				cursor: pointer;
			}

			//Chrome
			&::-webkit-slider-thumb {
				width: 20px;
				height: 20px;
				background: #333;
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
				background-color: #333;
			}

			//IE
			&::-ms-fill-lower {
				width: 100%;
				height: 1px;
				background-color: #333;
			}

			&::-ms-fill-upper {
				width: 100%;
				height: 1px;
				background-color: #333;
			}

			&::-ms-thumb {
				width: 20px;
				height: 20px;
				background: #333;
				border-radius: 50%;
				cursor: pointer;
			}

			&::-ms-track {
				cursor: pointer;
				animate: 0.2s;
				position: relative;
				width: 100%;
				height: 1px;
				background-color: #333;
			}
		}
	}
}


</style>