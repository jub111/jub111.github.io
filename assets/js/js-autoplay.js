var videos = document.getElementsByClassName('js-autoplay');
var mediaQuery = window.matchMedia("(min-width: 639px)");

function isVisible(ele) {
	var rect = ele.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function checkAutoplay() {
	if(mediaQuery.matches) {
		for (var i = videos.length - 1; i >= 0; i--) {
			var video = videos[i];

			if(isVisible(video)) {
				video.play();

			} else {
				video.pause();
			}
		}
	}
}

window.addEventListener('scroll', checkAutoplay, false);
window.addEventListener('resize', checkAutoplay, false);