var road
var runner,running;
function preload(){
  //pre-load images
  loadImage("path.png");
runner.loadImage("runner-1.png,runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(road);
  path.velocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);

  if(path.y>400){
    path.y=hight/2;
  }

}
