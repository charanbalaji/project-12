var path, pathImg
var jack,jackRunning
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  jackRunning=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,100,400)
  jack=createSprite(200,300,20,20)
  jack.scale = 0.05 ;
}

function draw() {
  background(0);
if(path.y>400){
  path.y=path.height/2
  path.velocityY=15
}
path.velocityY=15


path.addImage("path",pathImg)
jack.addAnimation("Running",jackRunning)

drawSprites()
}
