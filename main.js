function loadJs(){

	setInterval(function(){updateProgressiveBar();}, 1000);
	function updateProgressiveBar(){    		
		var video = document.getElementById("video");
		if(video.currentTime==video.duration){
			clearInterval(updateProgressiveBar);
		}
		var width = (video.currentTime*100/video.duration);
		var currentProgress = document.getElementById("currentProgress");
		currentProgress.style.width = width + "%"
	}

	var video = document.getElementById("video");
	var playButton = document.getElementById("play");
	var backButton = document.getElementById("goBackword");
	var forwardButton = document.getElementById("goForward");
	var muteButton = document.getElementById("mute");
	var volumeButton = document.getElementById("volume");
	var restartButton = document.getElementById("restart");
	playButton.addEventListener('click', videoPlay, false);
	backButton.addEventListener('click', skip);
	forwardButton.addEventListener('click', skip);
	muteButton.addEventListener('click', mute, false);
	volumeButton.addEventListener('change', changeVolume, false);
	restartButton.addEventListener('click', restart, false);

	function videoPlay(){
		var video = document.getElementById("video");
		var playButton = document.getElementById("play");
		console.log(playButton);
		if(video.paused){
			video.play();
			playButton.textContent = ">";
		}else{
			video.pause();
			playButton.textContent = "||"

		}
	}

	function skip(){
		if(this.id == "goForward"){
			var skipTime = 10;	
		}else{
			var skipTime = -10;
		}
		var video = document.getElementById("video");
		video.currentTime += skipTime;
	}

	function mute(){
		var video = document.getElementById("video");
		var mute = document.getElementById("mute");
		var volume = document.getElementById("volume");
		if(video.volume == 0){
			video.volume = 0.3;
			volume.value = 3;
			mute.style.textDecoration = "none"

		}else{
			video.volume = 0;	
			volume.value = 0;
			mute.style.textDecoration = "line-through"
		}
	}

	function changeVolume(){
		var volume = document.getElementById("volume");
		var video = document.getElementById("video");

		video.volume = volume.value/10;
	}

	function restart(){
		var video = document.getElementById("video");
		video.currentTime = 0;
	}

};

