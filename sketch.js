var hypnoticBall, database;
var position;
var pc
var ground
var flyGround, flyGroundGroup
var mush, mush_img, mushGroup
function preload(){
  mario_img = loadAnimation("images/marioR.png", "images/marioL.png")
  bg_img = loadImage("images/bg.jpg")
  fly_img = loadImage("images/fly.jpg")
  mush_img = loadImage("images/mush.png")
}
function setup(){
  canvas = createCanvas(1000, 500);
  ground = createSprite(0, 0)
  ground.addImage("ground", bg_img)
  ground.scale=1.4
  ground.velocityX = -3
  pc = createSprite(50, 355, 20, 20);
  pc.addAnimation("mario", mario_img)
  pc.scale=0.25
  invisibleGround = createSprite(0, 360, 2000, 5)
  invisibleGround.visible = false
  flyGroundGroup = new Group();
  
}

function draw(){
 background("lightblue")
 if(ground.x < 0){
  ground.x = ground.width/2
 }
 pc.collide(invisibleGround)
 spawnFlyGround()
 
 if (keyDown("D")){
  pc.x += 5

}
if (keyDown("A")){
  pc.x -= 5

}
if (keyDown("W")){
  pc.velocityY = -7

}
pc.velocityY += 0.5
 drawSprites(); 
}

function spawnFlyGround(){
  if (frameCount%200 === 0){
    flyGround = createSprite(800, 180, 20, 5)
    flyGround.y = Math.round(random(150, 200))
    mush = createSprite(800, 155, 10,5)
    mush.addImage(mush_img)
    mush.scale = 0.1
    mush.velocityX = -5
    mush.y = flyGround.y - 40
    flyGround.scale = 0.25
    flyGround.addImage(fly_img)
    flyGround.velocityX = -5
    flyGroundGroup.add(flyGround);
  }
}

