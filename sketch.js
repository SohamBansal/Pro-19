var bananaImage,stoneImage,jungleImage,monkeyImage;
var jungle;
var score = 0;
function preload() {
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  jungleImage = loadImage("jungle.jpg");
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  
  createCanvas(600, 400);
  jungle = createSprite(0,0,20,20);
  jungle.addImage(jungleImage);
  jungle.scale = 1.5;
  
  monkey = createSprite(40,360,10,10);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1222222;
  
  invisibleGround = createSprite(300,395,600,10);
  invisibleGround.visible = false;
  
  jungle.velocityX = -4;
  jungle.x = jungle.width/2;
  
  invisibleGround = createSprite(300,400,600,10);
  invisibleGround.visible = false;
  
  ObstaclesGroup = new Group();
  FruitGroup = new Group();
}

function draw() {
  background(220);
    if (jungle.x<0) {
jungle.x = jungle.width/2;
}
  
  if(keyDown("space")){
    monkey.velocityY  =-10;
    
  }
  
  monkey.velocityY = monkey.velocityY+0.5;
  
  if(FruitGroup.isTouching(monkey)){
    monkey.scale = 0.15;
    score = score+2;
  }
  
  if(ObstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.1;
  }
    
  spawnObstacles();
  spawnFruits();
  
  monkey.collide(invisibleGround );
  
  drawSprites();
  
  text ("SCORE:"+score,500,50);
}
function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = -6;
    
    stone.addImage("stone",stoneImage);
    stone.scale = 0.2;
    stone.lifetime = 100;
    //add each obstacle to the group
    ObstaclesGroup.add(stone);
  }
}
function spawnFruits() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,300,10,10);
    var rand = Math.round(random(150,280));
    banana.y = rand;
    banana.addImage("banana",bananaImage);
    banana.velocityX = -5;
    
    banana.scale = 0.05;
    banana.lifetime = 150;
    
    FruitGroup.add(banana);
  }
  
}