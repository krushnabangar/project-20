var car, wall;
var speed , weight;

function setup() {
  //creating canvas
  createCanvas(1600,400);
  //giving random no  to speed and weight
  speed = random(55,90);
  weight = random(400,1500);
  //creating car and giving it velocity, color and velocity
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "white";
//creating wall and giving it a color
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  //giving background a black color
  background(0);  
  //checking if car touches wall and  stopping the car and deforming the speed and weight
if(wall.x - car.x <car.width/2 + wall.width/2 ){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / 22500;

  if(deformation > 180){
    car.shapeColor = color(255,0,0);

  }
  if(deformation > 100){
    car.shapeColor = color(0,255,0);
    
  }
  if(deformation > 100  && deformation < 180){
    car.shapeColor = color(230,230,0);
    
  }
}

  drawSprites();
}