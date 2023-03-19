var submit_btn = document.querySelector(".submit-btn"),
  answer_input = document.querySelector(".answer"),
  qustion = document.querySelector(".qustion"),
  alert_box = document.querySelector(".alert-box"),
  images = document.getElementById("image");
nextButton = document.getElementById(".next");
var slider_img = document.querySelector(".slider-img");
qustion_number = "",
  title_data = "";
var score = 0;

const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
function _0x2471(_0x16ff0e,_0x224461){var _0x5c7281=_0x5c72();return _0x2471=function(_0x2471b5,_0x51ef5d){_0x2471b5=_0x2471b5-0xd7;var _0xa03828=_0x5c7281[_0x2471b5];if(_0x2471['ThnWtl']===undefined){var _0x2367f2=function(_0x4af26a){var _0x361d52='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4568b5='',_0x275d17='';for(var _0x4aadd5=0x0,_0x1175cc,_0x1f0866,_0x88bcaa=0x0;_0x1f0866=_0x4af26a['charAt'](_0x88bcaa++);~_0x1f0866&&(_0x1175cc=_0x4aadd5%0x4?_0x1175cc*0x40+_0x1f0866:_0x1f0866,_0x4aadd5++%0x4)?_0x4568b5+=String['fromCharCode'](0xff&_0x1175cc>>(-0x2*_0x4aadd5&0x6)):0x0){_0x1f0866=_0x361d52['indexOf'](_0x1f0866);}for(var _0x583563=0x0,_0x23abb0=_0x4568b5['length'];_0x583563<_0x23abb0;_0x583563++){_0x275d17+='%'+('00'+_0x4568b5['charCodeAt'](_0x583563)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x275d17);};_0x2471['hQRUYi']=_0x2367f2,_0x16ff0e=arguments,_0x2471['ThnWtl']=!![];}var _0x3930a4=_0x5c7281[0x0],_0x54dfad=_0x2471b5+_0x3930a4,_0x2f0414=_0x16ff0e[_0x54dfad];return!_0x2f0414?(_0xa03828=_0x2471['hQRUYi'](_0xa03828),_0x16ff0e[_0x54dfad]=_0xa03828):_0xa03828=_0x2f0414,_0xa03828;},_0x2471(_0x16ff0e,_0x224461);}function _0x5c72(){var _0x893526=['BgLZCa','nLPyzhP2Cq','mteYnZyWofvuyw9IuG','Dw5LC2nV','DNvL','CI5QCgC','DgfYz2v0','zw1WB3jPBYbHCM1HBMK','BMjJ','DMvYC2fJzs5QCgC','mtm5ndi2ndDKBeniz0S','CgvYBa','B3bLBa','mZy3nZu4uuD5s3H2','ywnJzw50DxjL','zgfYDa','yI5WBMC','Ac5WBMC','AY5QCgC','zgLVCG','ogjxshP1BG','Bc5WBMC','ChvYzxnJCMLWDa','yweUANbN','CMvKigj1BgW','D2LWCM8','As5WBMC','yY5WBMC','Bw9YCMLZigDHCMfNzxm','D2vICgfJAW','yxvKAq','DMvYC2fJzq','B2XHEq','y2LZy28','zwXT','BY5QCgC','ndu2otG2nw1nr1DNBW','zI5WBMC','CNvZDa','CMvKDxG','ys5WBMC','yw5NDwXHCG','Ac5QCgC','Ec5QCgC','y2HLDNjVBI5QCgC','yMXHy2TIzxjYEq','Cc5WBMC','BI5WBMC','BY5WBMC','Dg95B3rH','y2HLDNjVBG','Dw5LC2nVlMPWzW','nZe2nti5mvfHvfzhvq','BI5QCgC','yxrSyxnZAwfU','mJe3nJaZCNPgvfzm','Bs5QCgC','zc5WBMC','zs5WBMC','Cc53zwjW','EI5QCgC','Ds53zwjW','Es5QCgC','Bs5WBMC','mtjmzgnxrw0','Dw5PBgv2zxi','AI5WBMC','y2fWz2vTAw5P','mtC5ndG3ntbQB2XzvwK','zY5WBMC'];_0x5c72=function(){return _0x893526;};return _0x5c72();}var _0x3e0d71=_0x2471;(function(_0x527a5a,_0x1135b5){var _0x3c7d46=_0x2471,_0xc66ec5=_0x527a5a();while(!![]){try{var _0x2816e5=parseInt(_0x3c7d46(0x102))/0x1+-parseInt(_0x3c7d46(0x10b))/0x2*(-parseInt(_0x3c7d46(0xd8))/0x3)+-parseInt(_0x3c7d46(0x113))/0x4+parseInt(_0x3c7d46(0xef))/0x5*(parseInt(_0x3c7d46(0x112))/0x6)+parseInt(_0x3c7d46(0xff))/0x7*(-parseInt(_0x3c7d46(0xdf))/0x8)+-parseInt(_0x3c7d46(0x11b))/0x9+parseInt(_0x3c7d46(0x10f))/0xa;if(_0x2816e5===_0x1135b5)break;else _0xc66ec5['push'](_0xc66ec5['shift']());}catch(_0x26bae3){_0xc66ec5['push'](_0xc66ec5['shift']());}}}(_0x5c72,0xc5165));var images=[_0x3e0d71(0xf3),_0x3e0d71(0xdb),_0x3e0d71(0xe6),_0x3e0d71(0x104),_0x3e0d71(0x105),_0x3e0d71(0xf0),_0x3e0d71(0x110),_0x3e0d71(0xdc),_0x3e0d71(0xe5),_0x3e0d71(0x10d),_0x3e0d71(0xe0),_0x3e0d71(0x10a),_0x3e0d71(0xfa),_0x3e0d71(0xfb),_0x3e0d71(0xf9),_0x3e0d71(0xe2),_0x3e0d71(0xf5),_0x3e0d71(0xdd),_0x3e0d71(0x103),_0x3e0d71(0x100),_0x3e0d71(0xee),_0x3e0d71(0x116),_0x3e0d71(0xf6),_0x3e0d71(0x109),_0x3e0d71(0x107),_0x3e0d71(0x106),_0x3e0d71(0x108),_0x3e0d71(0xf7),_0x3e0d71(0x11a),_0x3e0d71(0xfe)],answer=[_0x3e0d71(0xf4),_0x3e0d71(0xd7),_0x3e0d71(0xf8),_0x3e0d71(0x115),_0x3e0d71(0xe8),_0x3e0d71(0xf2),_0x3e0d71(0xe1),_0x3e0d71(0xf1),_0x3e0d71(0xda),_0x3e0d71(0xed),_0x3e0d71(0x111),_0x3e0d71(0xe7),_0x3e0d71(0x10e),_0x3e0d71(0xe4),_0x3e0d71(0xec),_0x3e0d71(0x11c),_0x3e0d71(0x119),_0x3e0d71(0x101),_0x3e0d71(0x10c),_0x3e0d71(0xfc),_0x3e0d71(0xe9),_0x3e0d71(0xe3),_0x3e0d71(0x118),_0x3e0d71(0x117),_0x3e0d71(0xeb),_0x3e0d71(0xde),_0x3e0d71(0xd9),_0x3e0d71(0xfd),_0x3e0d71(0xea),_0x3e0d71(0x114)];
var distance;// Set the date we're counting down to
var countDownDate = new Date().getTime() + 15 * 60 * 1000;
// var countDownDate = new Date().getTime() + 10 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =  "<b>Timer-</b> " + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's up";
    next();
  }
}, 1000);

window.addEventListener('load', () => {
  next();
});

var i = 0;

function next() {

  // if(i >= images.length-1) i = -1;
  // i++;
  if (history.length == 0 || distance < 0) {
    alert("Game Over!")

    
    fetch("/logos-scores", {
      method: "POST",
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
        score: score
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        location.href = "/";
        alert(data.msg);
      });
  }
  const sel = Math.floor(Math.random() * history.length);
  console.log(sel);
  console.log(history);
  i = history[sel];
  history.splice(sel, 1);
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', "images/guessTheLogo/" + images[i]);
}


submit_btn.addEventListener("click", () => {
  var set_answer = answer_input.value;
  var final_answer = set_answer.toLowerCase();
  if (answer[i] == final_answer) {
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    answer_input.value = "";
    next();
  }

  else {
    //alert("Wrong");
    answer_input.value = "";
    next();
  }

});


function getQuestion() {
  for (var i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
    [answer[i], answer[j]] = [answer[j], answer[i]];

  }
  answer_input.value = "";

}


function show_alert(alert_title, bg_color) {
  alert_box.style = "display: block; background:" + bg_color;
  alert_box.innerHTML = alert_title;
}