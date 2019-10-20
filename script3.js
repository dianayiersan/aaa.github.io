var section = {
  start: 1,
  end: 50
};

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player(
    'player',
    {
      height: '360',
      width: '640',
      videoId: 'zeI-JD6RO0k',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  );
}

function onPlayerReady(event) {
  player.seekTo(section.start);
  player.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
 // player.seekTo(section.start);
}


	function myFunction1() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
section.end = 10;
  player.seekTo(5);
player.playVideo();
setTimeout(pauseVideoSection , 3000);

  
}

function pauseVideoSection() {
player.pauseVideo();
}
