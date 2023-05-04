let backgroundImage, personnageImage, personnageY, personnageL;
let obstacleImage, obstacleX, obstacleY, randomY;
let vie, score;

function setup() {
  createCanvas(1500, 800)
  backgroundImage = loadImage("fond d'ecran.jpg")
  backgroundImage.resize(width, height)
  personnageImage = loadImage("squelette.jpg")
  personnageY = 670
  obstacleImage = loadImage("mario bombe.jpg")
  obstacleX = width
  obstacleY = 650
  vie = 3
  score = 0
}


function draw() {
  background(backgroundImage)
  joueur()
  obstacle()
}


function joueur() {
  image(personnageImage, 100, personnageY, personnageImage.width / 5, personnageImage.height / 5)
  if (keyIsPressed && key == " ") {
    personnageY = 500
  } else {
    personnageY = 650
  }
  fill(255);
  textSize(48);
  text("Life : " + vie, 80, 80);
  text("Score : " + score, width- 350, 80);

  if (vie == 0) {
    fill(255);
    textSize(78);
    text("GAME OVER", 250, 250);
    noLoop();
    textSize(32);
    text("Click for restart", 300, 300);
    noLoop();
  }
}

function obstacle() {
  // ce commentaire c'est pour faire une rotation
  /* push();
  translate(obstacleX, obstacleY);
  rotate(radians( obstacleX -= 10));
  image(obstacleImage, 0, 0,obstacleImage.width / 4, obstacleImage.height / 4);
  pop();
  */
  image(obstacleImage, obstacleX, obstacleY, obstacleImage.width / 3, obstacleImage.height / 3)
  obstacleX -= 15;

  if (obstacleX < 0) {
    obstacleX = width
    randomY = int(random(2))
    score += 1;
  }
  if (randomY == 0) {
    obstacleY = 500;
  }
  if (randomY == 1) {
    obstacleY = 650
  }
  if (obstacleX < 100 + personnageImage.width / 4 && obstacleX + obstacleImage.width / 4 > 100 && personnageY == obstacleY) {
    obstacleX = width
    randomY = int(random(2))
    vie -= 1
  }
}

function mousePressed() {
  vie = 3;
  score = 0
  loop();
}