
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var rand

function preload(){
  
  
monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
ground = createSprite(200,350,400,10);
ground.velocityX = -6;
  
monkey = createSprite(50,315,10,10);
monkey.addAnimation("run",monkey_running);
monkey.scale = 0.1
  
score = 0;

foodGroup = new Group();
obstacleGroup = new Group();

  
}


function draw() {
background(180);
  
if(ground.x<195){
ground.x = ground.width/2;
}

stroke("black");
textSize(20);
fill("black");
score = Math.round(frameCount/frameRate());
text("Survival Time:" + score,125,50);

if(keyDown("space") && monkey.y >= 300) {
monkey.velocityY = -17;
}
  
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);

createBanana();
createObstacles();
drawSprites();
  
}

function createBanana(){
  if(frameCount % 80 ===1){
  rand = Math.round(random(120,200));
  banana = createSprite(400,rand,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -6;
  banana.lifetime = 69;
  foodGroup.add(banana);
  }
}

function createObstacles(){
  if(frameCount % 300 ===1){
  obstacle = createSprite(400,326,10,10);
  obstacle.velocityX = -6;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.lifetime = 69;
  obstacleGroup.add(obstacle);
  
  }
}


