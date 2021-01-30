var bg,background,groundImage,ground,mario,mario_running
var enemy,enemy_running,coin,coinImage
var obstacleImage,obstacle
var brick,brickImage
var coinGroup,obstaclesGroup,bricksGroup


function preload(){
  
  bg=loadImage("background.jpg")
  groundImage=loadImage("ground.png")
  mario_running=loadAnimation("mario1.png","mario2.png")
  coinImage=loadImage("coin.png") 
  obstacleImage=loadAnimation("obstacle1.png","obstacle2.png","obst  acle3.png")

  brickImage=loadImage("brick.png")

}


function setup(){
  createCanvas(600,550)
  
   background=createSprite(300,200,1,1)
   background.addImage(bg)
   background.velocityX=-6
   background.scale=1.5
  
   ground=createSprite(10,450,20,500)
   ground.addImage(groundImage)
   ground.velocityX=-6

   mario=createSprite(25,390,10,10)
   mario.addAnimation("running",mario_running)
   mario.scale=0.3

   coinGroup=new Group();
   bricksGroup=new Group();
   obstaclesGroup=new Group();
  
 
   
}

function draw(){
  
  if(background.x<190){
     background.x=background.width/1.5;
    
  }
  
  if(ground.x<0){
     ground.x=450
    
 }
  if(keyDown("space")){
     mario.velocityY=-7
  }
 
  if(mario.isTouching(coin)){
     score=score+5
}
  
  if(mario.isTouching(brick)){
     score=score-10
}
  
  
  
  mario.velocityY=mario.velocityY+0.5
  
  mario.collide(ground)
  
  spawnBricks()
  spawnCoins()
  spawnObstacles()
  drawSprites()
}
function spawnCoins(){
if (frameCount % 60 === 0){
  coin=createSprite(400,270,10,10)
  coin.y=Math.round(random(150,300))
  coin.addImage(coinImage)
  coin.velocityX=-6
  coinGroup.add(coin)
  coin.lifetime=200

}
}
function spawnObstacles(){
if (frameCount % 80 === 0){
 obstacle=createSprite(350,390,10,10)
 obstacle.addAnimation("moving",obstacleImage)
 obstacle.velocityX=-6
 obstaclesGroup.add(obstacle)  
 obstacle.lifetime=100
}
}
function spawnBricks(){
if (frameCount % 120 === 0){
 brick=createSprite(380,300,30,30)  
 brick.addImage(brickImage)
 brick.velocityX=-6
 brick.y=Math.round(random(100,300))
 bricksGroup.add(brick)
 brick.lifetime=150 
} 
}