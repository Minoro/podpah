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
	
		<seekbar 
			:duration="duration" 
			:currentTime="currentTime" 
			@seeking="pause"
			@sought="moveToTime">	
		</seekbar>

	</div>
</template>

<script>

import AudioPlayer from '../../utils/audio/AudioPlayer.js';
import SeekBar from './SeekBar';
import Play from '../Icons/Play';
import Pause from '../Icons/Pause';
export default {
	components: {
		'play-icon': Play,
		'pause-icon': Pause,
		'seekbar': SeekBar,
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
				return 0
			}

			return this.player.getDuration();
		},
		currentTime(){
			if(!this.isReady){
				return 0
			}

			return this.player.getCurrentTime();
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
			if(this.isPlaying){
				this.player.pause();
			}
		},
		moveToTime(time){
			this.player.seek(time);
			if(!this.isPlaying){
				this.play();
			}
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

</style>