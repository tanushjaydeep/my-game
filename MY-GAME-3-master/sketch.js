var score = 0;
var zombieGroup,bulletGroup;
var gameState = 0;
//var zombies,bullet;

function preload() {
   buildingImg = loadImage("sprites/background.jpg");
   zombiesImg = loadImage("sprites/zombie.png");
   manImg = loadImage("sprites/man.png");
   bulletImg = loadImage("sprites/bullet.png");
}

function setup() {
  createCanvas(1200,600);
  building = createSprite(100,400,100,400);
 
 building.addImage("building",buildingImg);
 building.scale = 2;

  zombieGroup = new Group();
  bulletGroup = new Group();

 man = createSprite(50,540,30,70);
 man.addImage("man",manImg);  
 // slingshot = new SlingShot(50,100,50,50);
}

function draw() {
  background(0); 


        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
/*
  if(bulletGroup.isTouching(zombies)){
    gameState = 1;
  }
*/

 spawnZombies(); 

  for(var i = 0 ; i< (zombieGroup).length ;i++){

  
 var temp = (zombieGroup).get(i) ;

if (temp.collide(bulletGroup)) {
    temp.destroy();
    bulletGroup.destroyEach()
    score = score + 0;
  }
    
}

/*
 for(var i = 0 ; i< (zombieGroup).length ;i++){
    for(var j= 0 ; j< (bulletGroup).length ;j++){
 var temp = (zombieGroup).get(i) ;
 var tem=(bulletGroup).get(j);

if (temp.collide(tem)) {
    temp.destroy();
    tem.destroy();
   // bulletGroup.destroyEach();
    score = score + 0;
  }
}
}
*/
/*
  for(var i = 0 ; i< (bulletGroup).length ;i++){
 var temp1 = (bulletGroup).get(i) ;

if (temp1.collide(zombieGroup)) {
    temp1.destroy();
    bulletGroup.destroyEach()
    score = score + 0;
  }
    
}

  if(gameState === 1){
    zombies.destroy();
  }
  */  
 if(keyDown("space")){
   spawnBullets();
 }
  
  drawSprites();
}

 function spawnZombies(){
   if(World.frameCount % 200 === 0) {
       var zombies = createSprite(1150,550,10,50);
         zombies.addImage("zombie",zombiesImg);
         zombies.scale = 0.2;
         zombies.velocityX = -2;
         zombies.lifetime = 540;
         drawSprites();
          zombieGroup.add(zombies);
     }
}

function spawnBullets(){
   var bullet = createSprite(100,530,10,5);
        bullet.addImage("bullet",bulletImg);
        bullet.scale = 0.1;
         bullet.velocityX = 5;
         bullet.lifetime = 250;
          bulletGroup.add(bullet);
}