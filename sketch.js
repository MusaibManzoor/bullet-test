var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1500,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet=createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX=speed;
bullet.shapeColor="black"
wall.shapeColor="orange"
}

function draw() {
  background("white"); 
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var deformation=0.5 * weight *speed*speed/(thickness*thickness*thickness);
if (deformation>180){
bullet.shapeColor=color(255,0,0);
}
  

if (deformation<100){
bullet.shapeColor=color(0,255,0)
}
 } 
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}


