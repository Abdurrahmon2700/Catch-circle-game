let elGamingZone = document.querySelector('.gamezone');
let gameBox = document.querySelector("#game");
let refresh = document.querySelector(".refresh");
let elM1 = document.querySelector("#m1");
let elM2 = document.querySelector("#m2");
let elM3 = document.querySelector("#m3");
let elM4 = document.querySelector("#m4");
let elM5 = document.querySelector("#m5");
let elfail = document.querySelector("#fail");
let elscore = document.querySelector("#score");
let paragraph = document.createElement("p")

function putElement(el) {
  el.style.top = `${Math.floor(Math.random() * (450 - 0) + 0)}px`;
  el.style.left = `${Math.floor(Math.random() * (950 - 0) + 0)}px`;
}
function interval() {
  putElement(elM1);
  putElement(elM2);
  putElement(elM3);
  putElement(elM4);
  putElement(elM5);
}

setInterval(interval, 1000);

elGamingZone.addEventListener('click', (e) => {
  let elClick = e.target;
  if (elClick == elGamingZone) {
    elfail.textContent = parseInt(elfail.textContent, 10) +1;
    if(elfail.textContent == 5){
      gameOver()
      refresh.style.display = "block"
      gameBox.style.display = "none"
    }

  } 
  else {
    let score = elClick.id;
    score = score.slice(1);
    score = parseInt(score, 10);
    elscore.textContent = parseInt(elscore.textContent, 10) + score; 
  }
})

function gameOver () {
  paragraph.textContent = "Game over!!!";
  paragraph.style.textAlign = "center";
  paragraph.style.fontSize = "40px";
  document.body.append(paragraph)
  document.body.style.backgroundColor = "red"
}

refresh.addEventListener("click", (e) => {
  refresh.style.display = "none"
  gameBox.style.display = "flex"
  document.body.style.backgroundColor = "white"
  paragraph.style.display = "none"
  elfail.textContent = 0;
  elscore.textContent = 0;
}) 

