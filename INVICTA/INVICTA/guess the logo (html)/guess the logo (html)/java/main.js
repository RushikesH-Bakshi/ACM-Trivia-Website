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

//const history = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
//var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png','f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png','aa.jpg', 'h.jpg','k.jpg','m.jpg', 'n.jpg', 'o.jpg','r.jpg', 'x.jpg', 'y.jpg', 'z.jpg', 'p.webp','u.webp'];
//var answer = ["angular","opel","blackberry","vuescript","webpack","redux","purescript","rust","dart","elm","lisp","morris garages","capgemini","wipro","cisco","perl","nbc","atlassian","unilever","toyota","audi","redbull","emporio armani","target","olay"];

const history = [0,1,2,3,4,5,6,7];
var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png','f.png', 'g.png', 'h.png'];
var answer = ["angular","opel","blackberry","vuescript","webpack","redux","purescript","rust"];

window.addEventListener('load', () => {
    next();
 });


var i = 0;




function next(){

	// if(i >= images.length-1) i = -1;
	// i++;
    if(history.length == 0){
        //alert("all images over");
        location.href = "file:///D:/Invicta/INVICTA/INVICTA/home%20trivia.html";
        document.getElementById('signup').addEventListener('click',
            (e) => {
              fetch("http://localhost:3000/logos-scores", {
                method: "POST",
                body: JSON.stringify({
                  email: "xyz@gmail.com",
                  score: document.getElementById("score").value
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
                .then((response) => response.json())
                .then((data) => console.log(data));
                e.preventDefault();  
              }
              
            )
    }
    const sel = Math.floor(Math.random() * history.length);
    console.log(sel);
    console.log(history);
    i = history[sel];
    history.splice(sel,1);
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}


submit_btn.addEventListener("click", () => {

  var set_answer = answer_input.value;
  var final_answer = set_answer.toLowerCase();
  if(answer[i]==final_answer)
  {
    //alert("Correct");
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    answer_input.value = "";
    setTimeout(getQuestion(),1000);
    next();
    return score;
  }

  else{
    //alert("Wrong");
    answer_input.value = "";
    setTimeout(getQuestion(),1000);
    next();
  }

});


function getQuestion()
         {
              for (let i = images.length - 1; i > 0; i--) {
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
