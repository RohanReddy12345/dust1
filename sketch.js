var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1100,200,60,height/2)
  speed=random(223,321)
  weight=random(30,83)
  thickness=random(22,83)
  bullet.velocityX=speed;
}


function draw() {
  background(0,0,0); 
if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage =0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      bullet.shapeColor=color(255,0,0)
    }
  if(damage<100)
  {
    bullet.shapeColor=color(0,255,0)
  }
}
  drawSprites();
}