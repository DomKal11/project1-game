// start button behavior and actions
document.getElementById("start-button").onclick = () => {
  var audio = new Audio(
    "https://www.myinstants.com/media/sounds/goodbadugly-whistle-long.mp3"
  );
  audio.play();
  audio.loop = true;
  startGame();
  document.getElementById("start-button").style.display = "none";
  document.getElementById("canvas").style.display = "block";
};

// selecting canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// images initialization
const sand = new Image();
sand.src = "../img/sand.svg";
const playerImg = new Image();
playerImg.src = "../img/cowboy1.png"; //130x130
const goldImg = new Image();
goldImg.src = "../img/gold.png";
const enemyImg = new Image();
enemyImg.src = "../img/enemy1.png";

// global variables
let startBulletX = 0; // actual player X position when space pressed
let startBulletY = 0; // actual player Y position when space pressed
let bulletAlreadyExist = 0; // if 0 - there is no bullet on the canvas. If 1 - bullet is shooted
let gold = 6;

// stats
document.querySelector("#stats ul li:nth-child(2)").innerHTML = gold;

const backgroundImage = {
  img: sand,
  change: function () {},
  draw: function () {},
  clear: function () {
    ctx.clearRect(0, 0, 1000, 600);
  },
};

// function get i from player.shoot() for cycle and delay the bullet
function delayBullet(i) {
  setTimeout(function () {
    /* if i (count of the cycles of bullet drawing) is bigger then X position where bullet was shooted -> means bullet is already out of the canvas */
    if (i > startBulletX) {
      bulletAlreadyExist = 0;
    } else {
      bulletAlreadyExist = 1;
    }
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(startBulletX - i, startBulletY, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    ctx.clearRect(startBulletX - i + 4, startBulletY - 5, 10, 10);
  }, 1 * i);
}

// const for player - every player-related functions are in there
const player = {
  img: playerImg,
  x: 700,
  y: 250,
  goldSum: gold,
  imgGold: goldImg,
  shoot: function () {
    const gunshot = new Audio("../audio/gunshot.mp3");
    gunshot.play();
    const reload = new Audio("../audio/reload.mp3");
    setTimeout(function () {
      reload.play();
    }, 1000);
    startBulletX = this.x + 3;
    startBulletY = this.y + 35;
    ctx.fillStyle = "black";
    for (let i = 0; i < startBulletX + 2; i++) {
      delayBullet(i);
    }
  },
  drawGold: function () {
    for (let i = 0; i < this.goldSum; i++) {
      ctx.drawImage(this.imgGold, 935, (i * 100) + 20);
    }
  },
  drawPlayer: function () {
    ctx.clearRect(0, 0, 1000, 700);
    ctx.drawImage(this.img, this.x, this.y);
  },
};

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      if (player.y > 0) {
        player.y -= 10;
      }
      break;
    case 40: // down arrow
      if (player.y < 470) {
        player.y += 10;
      }
      break;
    case 37: // left arrow
      if (player.x > 0) {
        player.x -= 10;
      }
      break;
    case 39: // right arrow
      if (player.x < 815) {
        player.x += 10;
      }
      break;
    case 32: // space - shooting
      // if bullet does not exist, user can shoot
      if (bulletAlreadyExist === 0) {
        player.shoot();
      }
      break;
  }
};
//
function updateGameArea() {
  backgroundImage.draw();
  // update the player's position before drawing
  player.drawPlayer();
  player.drawGold();
}

// startGame is called by clicking start button
function startGame() {
  // refreshing whole content each 20ms
  this.interval = setInterval(updateGameArea, 20);
  updateGameArea();
}
