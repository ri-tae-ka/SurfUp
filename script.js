//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key){
  blahajanime();  
  switch (key) {
    case "q":
      var bq = new Audio("audio/0.mp3");
      bq.play();
      break;

    case "w":
      var bw = new Audio("audio/1.mp3");
      bw.play();
      break;

    case "e":
      var be = new Audio("audio/2.mp3");
      be.play();
      break;

    case "r":
      var br = new Audio("audio/3.mp3");
      br.play();
      break;

    case "t":
      var bt = new Audio("audio/4.mp3");
      bt.play();
      break;

    case "y":
      var bv = new Audio("audio/5.mp3");
      bv.play();
      break;

    case "u":
      var bu = new Audio("audio/6.mp3");
      bu.play();
      break;

    case "i":
      var bi = new Audio("audio/7.mp3");
      bi.play();
      break;

    case "o":
        var bo = new Audio("audio/8.mp3");
        bo.play();
        break;

    case "p":
      var bp = new Audio("audio/9.mp3");
      bp.play();
      break;

    case "[":
        var bbracket = new Audio("audio/10.mp3");
        bbracket.play();
        break;

    case "a":
      var ba = new Audio("audio/-1.mp3");
      ba.play();
      break;

    case "s":
        var bs = new Audio("audio/-2.mp3");
        bs.play();
        break;

    case "d":
          var bd = new Audio("audio/-3.mp3");
          bd.play();
          break;

    case "f":
      var bf = new Audio("audio/-4.mp3");
      bf.play();
      break;

    case "g":
        var bg = new Audio("audio/-5.mp3");
        bg.play();
        break;

    case "h":
          var bh = new Audio("audio/-6.mp3");
          bh.play();
          break;

    case "j":
      var bj = new Audio("audio/-7.mp3");
      bj.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}

function blahajwarudo(){
	image = document.getElementById("blahaj");
	image.src = 'images/blahaj2.png';
}

function blahajreverse(){
	image = document.getElementById("blahaj");
	image.src = 'images/blahaj1.png';
}


function blahajanime(){
	blahajwarudo();
	setTimeout(blahajreverse, 333);
}
