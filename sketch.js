let backgroundImage, personnageImage, personnageY
let obstacleImage, obstacleX, obstacleY

function setup() {
  createCanvas(1500, 800)
  backgroundImage = loadImage("fond d'ecran.jpg")
  backgroundImage.resize(width, height)
  personnageImage = loadImage("squelette.jpg")
  personnageY = 650
  obstacleImage = loadImage("mario bombe.jpg")
  obstacleX = width
  obstacleY = 650
}


function draw() {
  background(backgroundImage)
  joueur()
  obstacle()
}


function joueur() {
  image(personnageImage, 100, personnageY, personnageImage.width / 5, personnageImage.height / 5)
  if (keyIsPressed && key == " ") {
    personnageY = 350
  } else {
    personnageY = 650
  }
}

function obstacle() {
  image(obstacleImage, obstacleX, obstacleY, personnageImage.width / 4, personnageImage.height / 4)
  obstacleX -= 5;
  if(obstacleX < 0){
    obstacleX = width
  }
}



