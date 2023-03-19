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

// const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
// var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'aa.jpg', 'h.jpg', 'k.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'r.jpg', 'x.jpg', 'y.jpg', 'z.jpg', 'p.webp', 'u.webp', 'chevron.jpg', 'versace.jpg', 'unesco.jpg', 'dropbox.jpg', 'IEE.jpg'];
var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'aa.jpg', 'h.jpg', 'k.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'r.jpg', 'x.jpg', 'y.jpg', 'z.jpg', 'p.webp', 'u.webp', 'chevron.jpg', 'versace.jpg', 'unesco.jpg'];
// var answer = ["angular","opel","blackberry","vue","webpack","redux","purescript","rust","dart","elm","lisp","morris garages","capgemini","wipro","cisco","perl","nbc","atlassian","unilever","toyota","audi","red bull","emporio armani","target","olay","dior","accenture","chevron","versace","unesco","dropbox","IEE"];
var answer = ["angular","opel","blackberry","vue","webpack","redux","purescript","rust","dart","elm","lisp","morris garages","capgemini","wipro","cisco","perl","nbc","atlassian","unilever","toyota","audi","red bull","emporio armani","target","olay","dior","accenture","chevron","versace","unesco"];
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