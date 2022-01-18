// start button behavior and actions
document.getElementById("start-button").onclick = () => {
  var audio = new Audio("./audio/theme.mp3");
  audio.volume = 0.5;
  audio.play();
  audio.loop = true;
  startGame();
  document.getElementById("start-button").style.display = "none";
  document.getElementById("canvas").style.display = "block";
};

// selecting canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// random number generator (from min to max)
function randomNum(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// images initialization
const sand = new Image();
sand.src = "./img/sand.svg";
const playerImg = new Image();
playerImg.src = "./img/cowboy1.png"; //130x130
const goldImg = new Image();
goldImg.src = "./img/gold.png";
const enemyImg = new Image();
enemyImg.src = "./img/enemy1.png";

var ohno = new Audio("./audio/ohno.mp3");

// global variables
let startBulletX = 0; // actual player X position when space pressed
let startBulletY = 0; // actual player Y position when space pressed
let bulletAlreadyExist = 0; // if 0 - there is no bullet on the canvas. If 1 - bullet is shooted
let bulletPosition = [0, 0]; // actual position of the bullet
let gold = [1, 1, 1, 1]; // count of gold player have
const reducer = (accumulator, curr) => accumulator + curr; // reducer for counting gold from gold array
let goldSum = 4;
let enemy1 = {};
let enemy2 = {};
let enemy3 = {};
let enemy4 = {};

// stats

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
    bulletPosition = [startBulletX - i, startBulletY];
  }, 1 * i);
}

function moveEnemy(i, speed, killed, x, y, enemyNum) {
  // i - counter from class enemy .draw() function, j - row from updateGameArea()
  setTimeout(function () {
    if (killed === 1) {
    }
    if (i < 999) {
    } else {
      if (enemyNum === 1) {
        enemy1.killed = 0;
        if (enemy1.speed > 4) {
          enemy1.speed = enemy1.speed - 0.3;
        }
      }
      if (enemyNum === 2) {
        enemy2.killed = 0;
        if (enemy2.speed > 4) {
          enemy2.speed = enemy2.speed - 0.3;
        }
      }
      if (enemyNum === 3) {
        enemy3.killed = 0;
        if (enemy3.speed > 4) {
          enemy3.speed = enemy3.speed - 0.3;
        }
      }
      if (enemyNum === 4) {
        enemy4.killed = 0;
        if (enemy4.speed > 4) {
          enemy4.speed = enemy4.speed - 0.3;
        }
      }
      drawEnemy(enemyNum);
    }
    // enemy stealing gold
    if (enemyNum === 1 && enemy1.killed === 0 && i === 870) {
      if (gold[0] === 1) {
        ohno.play();
      }
      gold[enemyNum - 1] = 0;
    }
    if (enemyNum === 2 && enemy2.killed === 0 && i === 870) {
      if (gold[1] === 1) {
        ohno.play();
      }
      gold[enemyNum - 1] = 0;
    }
    if (enemyNum === 3 && enemy3.killed === 0 && i === 870) {
      if (gold[2] === 1) {
        ohno.play();
      }
      gold[enemyNum - 1] = 0;
    }
    if (enemyNum === 4 && enemy4.killed === 0 && i === 870) {
      if (gold[3] === 1) {
        ohno.play();
      }
      gold[enemyNum - 1] = 0;
    }
    // counting sum of gold from gold array
    goldSum = gold.reduce(reducer);
    // changing the gold stats
    document.querySelector("#stats ul li:nth-child(3)").innerHTML = goldSum;

    // sound when bullet hit enemy
    if (
      bulletPosition[1] > y * 155 &&
      bulletPosition[1] < y * 155 + 130 &&
      bulletPosition[0] < x + i &&
      bulletPosition[0] < x + i &&
      bulletPosition[0] > x + i - 20 &&
      x + i > 20
    ) {
      var ouch = new Audio("./audio/ouch.mp3");
      ouch.loop = false;
      ouch.play();
    }
    // behavior when bullet hit the enemy
    if (
      bulletPosition[1] > y * 155 &&
      bulletPosition[1] < y * 155 + 130 &&
      bulletPosition[0] < x + i &&
      bulletPosition[0] < x + i
    ) {
      ctx.clearRect(x + i, y * 155, 130, 130);
      if (enemyNum === 1) {
        enemy1.killed = 1;
      }
      if (enemyNum === 2) {
        enemy2.killed = 1;
      }
      if (enemyNum === 3) {
        enemy3.killed = 1;
      }
      if (enemyNum === 4) {
        enemy4.killed = 1;
      }
      return 0;
    }
    ctx.clearRect(x + i, y * 155, 130, 130);
    if (enemyNum === 1 && enemy1.killed === 0) {
      ctx.drawImage(enemyImg, x + i, y * 155);
    }
    if (enemyNum === 2 && enemy2.killed === 0) {
      ctx.drawImage(enemyImg, x + i, y * 155);
    }
    if (enemyNum === 3 && enemy3.killed === 0) {
      ctx.drawImage(enemyImg, x + i, y * 155);
    }
    if (enemyNum === 4 && enemy4.killed === 0) {
      ctx.drawImage(enemyImg, x + i, y * 155);
    }
  }, speed * i);
}

// class for enemy
class Enemy {
  //gettin row from generateEnemies
  constructor(row) {
    this.killed = 0;
    this.x = 0;
    this.y = row;
    this.speed = randomNum(8, 12);
    this.delay = randomNum(100, 500);
  }
  draw(enemyNum) {
    //
    for (let i = 0; i < 1000; i++) {
      moveEnemy(i, this.speed, this.killed, this.x, this.y, enemyNum);
    }
  }
}

// generating 4 enemies (4 rows)
function generateEnemies(kill) {
  enemy1 = new Enemy(0);
  enemy2 = new Enemy(1);
  enemy3 = new Enemy(2);
  enemy4 = new Enemy(3);
}

// drawing enemies on the canvas
function drawEnemy(enemyNum) {
  if (enemyNum === 1) {
    enemy1.draw(1);
  }
  if (enemyNum === 2) {
    enemy2.draw(2);
  }
  if (enemyNum === 3) {
    enemy3.draw(3);
  }
  if (enemyNum === 4) {
    enemy4.draw(4);
  }
}

// const for player - every player-related functions are in there
const player = {
  img: playerImg,
  x: 700,
  y: 250,
  imgGold: goldImg,
  shoot: function () {
    const gunshot = new Audio("./audio/gunshot.mp3");
    gunshot.volume = 0.7;
    gunshot.play();
    const reload = new Audio("./audio/reload.mp3");
    setTimeout(function () {
      reload.play();
    }, 1000);
    startBulletX = this.x + 3;
    startBulletY = this.y + 35;
    ctx.fillStyle = "black";
    for (let i = 0; i < startBulletX + 5; i++) {
      delayBullet(i);
    }
  },
  drawGold: function () {
    for (let i = 0; i < 4; i++) {
      if (gold[i] === 1) {
        ctx.clearRect(935, i * 150 + 40, 60, 60);
        ctx.drawImage(this.imgGold, 935, i * 150 + 40);
      }
    }
  },
  drawPlayer: function () {
    ctx.clearRect(player.x, player.y, 130, 130);
    ctx.drawImage(this.img, this.x, this.y);
    window.requestAnimationFrame(updateGameArea);
  },
};

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      if (player.y > 0) {
        ctx.clearRect(player.x, player.y + 10, 130, 130);
        player.y -= 10;
      }
      break;
    case 40: // down arrow
      if (player.y < 470) {
        ctx.clearRect(player.x, player.y - 10, 130, 130);
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
  generateEnemies();
  drawEnemy(1);
  drawEnemy(2);
  drawEnemy(3);
  drawEnemy(4);
  updateGameArea();
  window.requestAnimationFrame(updateGameArea);
}
