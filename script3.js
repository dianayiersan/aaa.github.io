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


	/*function myFunction1() {
  //var btn = document.createElement("BUTTON");
  // document.body.appendChild(btn);
//section.end = 10;
  player.seekTo(5);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
 
}
*/


" function myFunction1() {
  player.seekTo(21);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction2() {
  player.seekTo(27);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction3() {
  player.seekTo(29);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction4() {
  player.seekTo(32);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction5() {
  player.seekTo(36);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction6() {
  player.seekTo(44);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction7() {
  player.seekTo(49);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction8() {
  player.seekTo(54);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction9() {
  player.seekTo(57);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction10() {
  player.seekTo(60);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction11() {
  player.seekTo(63);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction12() {
  player.seekTo(72);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction13() {
  player.seekTo(76);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction14() {
  player.seekTo(79);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction15() {
  player.seekTo(83);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction16() {
  player.seekTo(91);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction17() {
  player.seekTo(97);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction18() {
  player.seekTo(111);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"
" function myFunction19() {
  player.seekTo(117);
player.playVideo();
setTimeout(pauseVideoSection , N1*1000);
}"





function pauseVideoSection() {
player.pauseVideo();
}
