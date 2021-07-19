var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, leafImg;
var appleGroup, leafGroup;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
leafGroup = new Group();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){
  if(frameCount % 60 ==0){
    var apple = createSprite(200,0);
    apple.scale = 0.07;  
    apple.addImage(appleImg);
    var randomNum = Math.round(random (10,390));
    apple.x = randomNum;
    apple.velocityY=2;
    apple.lifetime = 200;
    appleGroup.add(apple);
  }
}

function createLeaves(){
  if(frameCount % 60 ==0){
    var leaf = createSprite(200,0);
    leaf.scale=0.07;
    leaf.addImage(leafImg);
    var randomNum = Math.round(random (10,390));
    leaf.x = randomNum;
    leaf.velocityY=2;
    leaf.lifetime = 200;
    leafGroup.add(leaf);
  }
}