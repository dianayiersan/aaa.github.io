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

$( document ).ready(function() {
  $( ".js-click" ).click(function() {
    $( ".js-click" ).css('background', 'green');
  });
});

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
setTimeout(pauseVideoSection , 5000);
('button1').css('background', '#4CAF50');
}
 function myFunction2() {
  player.seekTo(27);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction3() {
  player.seekTo(31);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction4() {
  player.seekTo(34);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction5() {
  player.seekTo(38);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction6() {
  player.seekTo(44);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction7() {
  player.seekTo(50);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction8() {
  player.seekTo(55);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction9() {
  player.seekTo(61);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction10() {
  player.seekTo(64);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction11() {
  player.seekTo(70);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction12() {
  player.seekTo(74);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction13() {
  player.seekTo(76);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction14() {
  player.seekTo(79);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction15() {
  player.seekTo(83);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction16() {
  player.seekTo(83);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction17() {
  player.seekTo(92);
player.playVideo();
setTimeout(pauseVideoSection , 2000);
}
 function myFunction18() {
  player.seekTo(98);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction19() {
  player.seekTo(112);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction20() {
  player.seekTo(118);
player.playVideo();
setTimeout(pauseVideoSection , 6000);
}
 function myFunction21() {
  player.seekTo(123);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction22() {
  player.seekTo(126);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction23() {
  player.seekTo(136);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction24() {
  player.seekTo(142);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction25() {
  player.seekTo(145);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction26() {
  player.seekTo(165);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction27() {
  player.seekTo(169);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction28() {
  player.seekTo(181);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction29() {
  player.seekTo(185);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction30() {
  player.seekTo(190);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction31() {
  player.seekTo(202);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction32() {
  player.seekTo(208);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction33() {
  player.seekTo(214);
player.playVideo();
setTimeout(pauseVideoSection , 7000);
}
 function myFunction34() {
  player.seekTo(220);
player.playVideo();
setTimeout(pauseVideoSection , 3000);
}
 function myFunction35() {
  player.seekTo(223);
player.playVideo();
setTimeout(pauseVideoSection , 10000);
}
 function myFunction36() {
  player.seekTo(251);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}
 function myFunction37() {
  player.seekTo(255);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction38() {
  player.seekTo(260);
player.playVideo();
setTimeout(pauseVideoSection , 4000);
}
 function myFunction39() {
  player.seekTo(251);
player.playVideo();
setTimeout(pauseVideoSection , 5000);
}







/*******************************************************************/

/*******************************************************************/

/*******************************************************************/

/*******************************************************************/

function pauseVideoSection() {
player.pauseVideo();
}
