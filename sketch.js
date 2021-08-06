var cat1, cat2, cat3, cat4;
var mouse1, mouse2, mouse3, mouse4; 
var background;

function preload() {
    //load the images here
    bgImg = loadAnimation("garden.png");
    cat1img = loadAnimation("image/cat1.png");
    cat2img = loadAnimation("image/cat2.png");
    cat3img = loadAnimation("image/cat3.png");
    cat4img = loadAnimation("image/cat4.png");
    mouse1img = loadAnimation("image/mouse1.png");
    mouse2img = loadAnimation("image/mouse2.png");
    mouse3img = loadAnimation("image/mouse3.png");
    mouse4img = loadAnimation("image/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprites(870,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.2;

    mouse = createSprites(200,600);
    mouse = addAnimation("mouseStanding",mouseImg1);
    mouse.scale = 0.15;

       

}

function draw() {

    background(bg);
   
    if(cat.x - mouse.x <(cat.width - mouse.width)/2)
 {
    cat.velocityX = 0 ;
    cat.addAnimation("catlastImg" , catImg4);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImg", mouseImg4);
    mouse.scale = 0.15;
    mouse.changeAnimation("mouseLastImg");
 }
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
      cat.velocityX = -5 ;
      cat.addAnimation("catRunning" , catImg3);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing" , mouseImg4);
      mouse.frameDelay = 25; 
      mouse.changeAnimation("mouseTeasing");
      
  }


}
