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
      videoId: 'R4P0Cxc95HY',
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






 function myFunction1() {
  player.seekTo(23);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction2() {
  player.seekTo(27);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction3() {
  player.seekTo(31);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction4() {
  player.seekTo(34);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction5() {
  player.seekTo(38);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction6() {
  player.seekTo(44);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction7() {
  player.seekTo(50);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction8() {
  player.seekTo(55);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction9() {
  player.seekTo(61);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction10() {
  player.seekTo(64);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction11() {
  player.seekTo(70);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction11() {
  player.seekTo(74);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction12() {
  player.seekTo(76);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction13() {
  player.seekTo(79);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction14() {
  player.seekTo(83);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction14() {
  player.seekTo(83);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction15() {
  player.seekTo(92);
player.playVideo();
setTimeout(pauseVideoSection , 1000);
}
 function myFunction16() {
  player.seekTo(98);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction17() {
  player.seekTo(112);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction18() {
  player.seekTo(118);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction19() {
  player.seekTo(0);
player.playVideo();
setTimeout(pauseVideoSection , 0);
}












/*******************************************************************/




function pauseVideoSection() {
player.pauseVideo();
}
