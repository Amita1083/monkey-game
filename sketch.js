
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(100,360,20,30);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(50,390,600,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

    
}


function draw() {
  background("white");
 text("score ="+score,300,50)  ;
  score=score+Math.round(getFrameRate()/60);

  if(keyDown("space")){
    
    monkey.velocityY = -6;
    
  }
monkey.velocityY =monkey.velocityY + 0.8;

  if(ground.x<0){
    
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
   Bananas();
    Obstacles(); 
        
  drawSprites();
}

function Bananas(){
  
  
  if(frameCount%60===0){
    
  banana = createSprite(550,30,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.y = Math.round(random(120,300));
  banana.lifetime=120;  
    banana.depth=monkey.depth;
    monkey.depth=banana.depth+1;
    FoodGroup.add(banana);
  }
}

function Obstacles() {
  
  if(frameCount%200===0){
    
  obstacle = createSprite(500,350,20,20);
  obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
  obstacle.velocityX=-5;
  //obstacle.y = Math.round(random(150,250));
  obstacle.lifetime=120;  
    obstacleGroup.add(obstacle);
  
  
  
}

}

