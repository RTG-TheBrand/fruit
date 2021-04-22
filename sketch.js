var m=180,f=60;

var PLAY = 1;
var END = 0;
var gameState=PLAY;

var knife,knifeimage,enemy,enemyMoving;
    
var mgroup,fgroup;

var fruit,fruitimage,fruit2,fruit2image,fruit3,fruit3image,fruit4,fruit4image;

var score=0;

var gameimage;

var gsound,ksound;

var restarti,restart;

var x=width/2;

function preload(){
  
  
  restarti=loadImage("restart.png");
  
  knifeimage=loadImage("sword.png");
  
  
  gameimage=loadImage("gameover.png");
  
ksound=loadSound("knifeSwooshSound.mp3");
  
  gsound=loadSound("gameover.mp3");
  
  enemyMoving=loadAnimation("alien1.png","alien2.png");
  
  
  fruitimage=loadImage("fruit1.png");
  fruit2image=loadImage("fruit2.png");
  fruit3image=loadImage("fruit3.png");
  fruit4image=loadImage("fruit4.png");
  
  
 
}

function setup(){
  
 createCanvas(windowWidth,windowHeight);
  
   knife=createSprite(200,200,3,3);
   knife.addImage("image",knifeimage);
  
  
  restart=createSprite(200,250,8,8);
  restart.addImage("image",restarti);
  restart.visible=false;
  
  
 mgroup=new Group();
 fgroup=new Group(); 
  
}

function draw(){

 background("lightblue");
  
  if(gameState===PLAY){
    
     knife.y=mouseY;
  knife.x=mouseX;

  x=width/2
    
  if(knife.isTouching(fgroup)){
    
    ksound.play();
  score=score+1;
    fgroup.destroyEach();
    knife.setCollider("rectangle",10,-15,60,60);
  }
    
    
    
}
  
  if(mgroup.isTouching(knife )){
             
    gsound.play();
   gameState=END;
  }
  
  createEdgeSprites();
  

  if(gameState===END){
    
     knife.addImage("image",gameimage);
    knife.x=width/2;
    knife.y=height/3;
    mgroup.destroyEach();
    fgroup.destroyEach();
    x=1000000000;
 
m=10000000000000000000000000000000000;
f=10000000000000000000000000000000000;

    mgroup.x=1000000;
    fgroup.x=1000000;

    fgroup.setVelocityXEach(-12);
    mgroup.setVelocityXEach(-12);

    restart.visible=true;
    restart.y=height/2;
    restart.x=width/2;

    if(touches.length>0){

      score=0;
      knife.visible=false;
      gameState=PLAY;
      restart.visible=false;
      restart.y=60000;
         knife=createSprite(200,200,3,3);
   knife.addImage("image",knifeimage);
        knife.visible=true;
       knife.y=mouseY;
  knife.x=mouseX;
       Menemy();
  Sfruit();

touches=[];

    }
    
    restart.onMousePressed = function(){
      
      score=0;
      knife.visible=false;
      gameState=PLAY;
      restart.visible=false;
      restart.y=60000;
         knife=createSprite(200,200,3,3);
   knife.addImage("image",knifeimage);
        knife.visible=true;
       knife.y=mouseY;
  knife.x=mouseX;
       Menemy();
  Sfruit();
      
    }
   
  
  }
  
  
  Menemy();
  Sfruit();
  
  drawSprites();
  
  text("score:"+score,x,height-340);
  
}

function Menemy(){
  
  if(World.frameCount%m===0){
  enemy=createSprite(1700,300,2,2);
    
  enemy.addAnimation("Moving",enemyMoving);
    enemy.y=Math.round(random(100,300));
    
    
    g=Math.round(random(1,2));
    
    if(g===1){
      
       enemy.x=800;
       enemy.velocityX=-(9+(score/10));
       enemy.lifetime=95;
    }
    
    if(g===2){
 
       enemy.x=-100;
       enemy.velocityX=(9+(score/10));
       enemy.lifetime=120;
    } 
    
    mgroup.add(enemy);
  }
   
}

function Sfruit(){
  
  if(World.frameCount%f===0){
 fruit=createSprite(1700,200,2,2);
 
    
    
   position=Math.round(random(1,2));
     
     if(position===1){
       
       fruit.x=800;
       fruit.velocityX=-(8+(score/4));
       fruit.lifetime=115;
     } else if(position===2){
       
       fruit.x=-100;
       fruit.velocityX=(8+(score/4));
       fruit.lifetime=120;
     }
     
 fruit.y=Math.round(random(20,250));
    
    vg=Math.round(random(1,4));
    
   if(vg==1){
    fruit.addImage("image",fruitimage);
   fruit.scale=0.3;
   }else if(vg==2){
    fruit.addImage("image",fruit2image);
   fruit.scale=0.3;
   }else if(vg==3){
    fruit.addImage("image",fruit3image);
     fruit.scale=0.3;
   }else if(vg==4){
    fruit.addImage("image",fruit4image);
     fruit.scale=0.3;
   }
    
    
    fgroup.add(fruit);
    
    
    
  }
}










