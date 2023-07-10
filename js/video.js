const btnPlay = document.querySelector('.video__btn');
const wrapperVideo = document.getElementById('video-frame');

let videoStart = false;

btnPlay.addEventListener('click',function(){
    if (videoStart == false) {
        wrapperVideo.play();
        videoStart = true
    } else {
        wrapperVideo.pause();
        videoStart = false
    }
});