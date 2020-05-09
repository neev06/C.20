var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(300, 200, 80, 50);
  rect1.shapeColor="yellow";
 
rect2=createSprite(500,200,50,80);
rect2.shapeColor="yellow";
}

function draw() {
  background(255,255,255);
  
  rect2.y=mouseY;
  rect2.x=mouseX;  

  if((rect1.x-rect2.x)<(rect1.width/2+rect2.width/2)
  &&(rect2.x-rect1.x)<(rect1.width/2+rect2.width/2)
  &&(rect2.y-rect1.y)<(rect1.height/2+rect2.height/2)
  &&(rect1.y-rect2.y)<(rect2.height/2+rect1.height/2)){
rect1.shapeColor="blue";
rect2.shapeColor="blue";
}
  
else{
rect1.shapeColor="yellow";
rect2.shapeColor="yellow";

}
  drawSprites();
}