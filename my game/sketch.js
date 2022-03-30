var ground,football,player1,player2;
var player1Img,player2Img;
var bgImg,footballImg;
var edges;
var player1Score = 0;
var player2Score = 0;
var gameState = "start"


function preload(){
    bgImg = loadImage("bg.jpg");
    footballImg = loadImage("ball.png");
    //player1Img = loadAnimation("player1.jng","player1b.jng","player1c.jng","player1d.jng","player1e.jng","player1f.jng","player1g.jng","player1h.jng");


}

function setup(){
  createCanvas(800,500);
  ground = createSprite(400,250,10,10);
  ground.addImage(bgImg);

  football = createSprite(400,250,10,10);
  football.addImage(footballImg);
  football.scale = 0.1;
 
  player1 = createSprite(700,250,10,70);
  //player1.addAnimation("running",player1Img);
  //player1.scale = 0.2;
  player2 = createSprite(100,250,10,70);
  //player2.addAnimation("running", player2Img);
  //player2.scale = 0.2;

  edges =  createEdgeSprites();
  //createEdgeSprites();

  centreline = createSprite(400,250,5,500);
  centreline.visible = false


}

function draw(){  

  if(gameState === "start"){
    if(keyDown("SPACE")){
      football.velocityY = -5;
      football.velocityX = 5;
      gameState = "play"
  }
  }

    background("green");
     console.log(gameState);
   //if(gameState==="play"){
      if(keyDown("UP")){
        player1.y = player1.y -5;
    }

    if(keyDown("DOWN")){
      player1.y = player1.y +5;
  }

  if(keyDown("LEFT")){
    player1.x = player1.x -5;
  
}
  if(keyDown("RIGHT")){
    player1.x = player1.x +5;
}

if(keyDown("W")){
  player2.y = player2.y -5;
}

if(keyDown("S")){
player2.y = player2.y +5;
}

if(keyDown("A")){
player2.x = player2.x -5;

}
if(keyDown("D")){
player2.x = player2.x +5;
}

if(football.x<0){
   football.x =400;
   football.y = 250;
    
   gameState = "start"

   player1Score = player1Score +1
  
}

  if(football.x>800){
    football.x = 400;
    football.y = 250;

    gameState = "start"
    player2Score = player2Score +1

  }

    //}

  player1.bounceOff(edges[0]);
  player1.bounceOff(edges[1]);
  player1.bounceOff(edges[2]);
  player1.bounceOff(edges[3]);

  player2.bounceOff(edges[0]);
  player2.bounceOff(edges[1]);
  player2.bounceOff(edges[2]);
  player2.bounceOff(edges[3]);

  player1.bounceOff(centreline);
  player2.bounceOff(centreline);

  //football.bounceOff(edges[0]);
  //football.bounceOff(edges[1]);
  football.bounceOff(edges[2]); //top
  football.bounceOff(edges[3]); //down

  football.bounceOff(player1);
  football.bounceOff(player2);


  
 drawSprites();
 textSize(20);
 stroke(3);
 fill("black")
 text(" : "+ player1Score,390,50);

 textSize(20);
 stroke(3);
 fill("black")
 text(""+ player2Score,380,50);

}
