window.onload = pageLoad;
function pageLoad() {
  var btnStart = document.getElementById("start");
  btnStart.onclick = startGame;
}

function startGame() {
  alert("Ready");
  addBox();
  timeStart();
}

function timeStart() {
  var TIMER_TICK = 1000;
  var timer = null;
  var min = 0.5;
  var second = min * 60;
  var x = document.getElementById("clock");
  timer = setInterval(timeCount, TIMER_TICK);

  function timeCount() {
    second = second - 1;
    x.innerHTML = second;
    var allbox = document.querySelectorAll("#squares-layer div");
    if (allbox.length <= 0) {
      alert("You Win!");
      clearScreen();
      clearInterval(timer);
    } else if (second == 0) {
      alert("You Lose");
      clearInterval(timer);
      clearScreen();
    }
  }
}

function addBox() {
  var numbox = document.getElementById("numbox").value;
  var parseIntNumber = parseInt(numbox);
  var squaresLayer = document.getElementById("squares-layer");
  var colorDrop = document.getElementById("color").value;
  for (var i = 0; i < parseIntNumber; i++) {
    var tempbox = document.createElement("div");
    tempbox.className = "square";
    tempbox.id = "box" + i;
    tempbox.style.backgroundColor = colorDrop;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    squaresLayer.appendChild(tempbox);
    bindBox(tempbox);
  }
}

function bindBox(box) {
  currentBoxInContainer = document.getElementById("squares-layer");
  box.onclick = function() {
    currentBoxInContainer.removeChild(box);
  };
}

function clearScreen() {
  var allbox = document.querySelectorAll("#squares-layer div");
  var containerBox = document.getElementById("squares-layer");

  for (var i = 0; i < allbox.length; i++) {
    containerBox.removeChild(allbox[i]);
  }
}
