var score=0
var startI
var gameState="play"
var invisibleg
var pokeball,pbImage,pokeballgroup;
var score=0
var coin,coinI,coing

var p,pI,p_out;

var ground,bgI,gif;
var si1,si2,si3,si4

function preload(){
pI=loadAnimation("Screenshot__84_-removebg-preview.png","Screenshot__85_-removebg-preview.png","Screenshot__86_-removebg-preview.png","Screenshot__87_-removebg-preview.png")
  pbImage = loadImage("pokeball.png.png");
  bgI=loadImage("982a383ae37e16db881431081ba5a390.jpg")
  si1=loadImage("apple.png")
  si2=loadImage("banana.jpg")
  si3=loadImage("water-removebg-preview.png")
  startI=loadImage("Screenshot (114).png")
pokeballgroup=new Group()
  gi=loadImage("forest.jpg")
  p_out=loadImage("Pikachu-1.png")
  gif=loadImage("tenor.gif")
  coinI=loadImage("Coin-Game-Icon-PNG-Image-Jpeg-715x715-removebg-preview.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  ground=createSprite(200,100,400,400)
  ground.addImage(bgI)
  ground.scale=4

 p=createSprite(200,300,10,10)
  p.addAnimation("run",pI)
  p.scale=0.4

invisibleg=createSprite(100,450,windowWidth,48)
  invisibleg.visible=false
  
  edges=createEdgeSprites()
  p.debug=true
  p.setCollider("circle",8,0,70)
  
  coingroup=new Group()
  
 }

function draw() {
 if(gameState==="play"){
   p.collide(invisibleg)
  ground .velocityX=-10
  p.velocityX=-4
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& p.y >= 330) {
        p.velocityY = -15;
    }
   p.velocityY = p.velocityY + 0.8
   p.collide(edges)
obstacles()
   coins()
   if(p.isTouching(pokeballgroup)){
     gameState="end"
   }
    if(p.isTouching(coingroup)){
      score=score+1
      coingroup.destroyEach()
    }
 }
  else if(gameState==="end"){
background("pink")
    textSize(30)
    text("gameOver.Press ctrl+r to restart",100,200)
pokeballgroup.destroyEach();
    ground.velocityX=0
    p.destroy()
ground.visible=false
   

  }
  drawSprites();
  
  text("score:"+score,450,50)
  
}
function reset(){
  gameState="play"
pokeballgroup.destroyEach()
  score=0

}
function obstacles() {
  
  if (frameCount % 200 === 0) {
    var pokeball = createSprite(600,120,40,10);
    pokeball.y = Math.round(random(400,450));
   pokeball.addImage(pbImage);
    pokeball.scale = 0.1;
    pokeball.velocityX = -4;
    
    pokeball.lifetime = 150;
    
    pokeball.depth = p.depth;
    p.depth = p.depth + 1;
    
    //add each cloud to the group
    pokeballgroup.add(pokeball);
  }
}
function coins(){
  if (frameCount % 150 === 0) {
    var coin = createSprite(600,120,40,10);
    coin.y = Math.round(random(250,200));
    
   coin.addImage(coinI);
    coin.scale=1.5
    coin.scale = 0.1;
    coin.velocityX = -4;
    
    coin.lifetime = 150;
    
    coin.depth = p.depth;
    p.depth = p.depth + 1;
    
    //add each cloud to the group
    coingroup.add(coin);
    
   
  }
  }

