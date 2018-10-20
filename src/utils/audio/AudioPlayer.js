export default class AudioPlayer {

	constructor(audio) {
		this._audio = audio;
		this._isPaying = false;
		this._loadedData = false;
		this._currentTime = 0;

		//listener para alterar a propriedade
		//A alteração altera a propriedade do vue
		this._audio.onloadeddata = () => {
			this._loadedData = true;
		};

		this._audio.ontimeupdate = () => {
			this._currentTime = this._audio.currentTime;
		}
	}

	set audio(audio){
		this._audio = audio;
		this._isPaying = false;
	}

	isPlaying(){
		if(!this._audio){
			return false;
		}

		return !this._audio.paused;
	}

	isReady(){
		return this._audio ? this._audio.readyState == 4 : false;
	}

	play(){
		this._audio.play();
		this._isPaying = true;
	}

	pause(){
		this._audio.pause();
		this._isPaying = false;
	}

	getDuration(){
		if(!this._audio || !this._audio.duration){
			return 0;
		}
	
		return Math.floor(this._audio.duration);
	}

	getCurrentTime(){
		if(!this._audio){
			return 0;
		}

		return this._currentTime;
	}

	seek(time) {
		this._audio.currentTime = time; 
	}

	setVolume(volume){
		this._audio.volume = parseFloat(volume);
	}

}