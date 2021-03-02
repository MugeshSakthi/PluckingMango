const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var boy,boy_img;
var ground1;
var treeObj,tree_img;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mang1,mang2,mang3,mang4,mang5,mang6;
var mangoimg;
var thread;


function preload()
{
  boy_img=loadImage("images/boy.png");
  mangoimg=loadImage("images/mango.png");
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  boy=Matter.Bodies.rectangle(260,350,10,10);
  
  mango1=new mango(550,200,25);
  mango2=new mango(570,120,25);
  mango3=new mango(610,150,25);
  mango4=new mango(640,90,25);
  mango5=new mango(660,180,25);
  mango6=new mango(690,110,25);
  mango7=new mango(735,155,25);
  mango8=new mango(765,200,25);

  treeObj=new tree(650,400);

  ground1=new ground(400,390,800,10);

  stone1=new stone(150,300,20,20);

  

  thread=new string(stone1.body,{x:230,y:315});
  
}

function draw() {
  background("skyblue");  

  Engine.update(engine);
 
  imageMode(CENTER);
  image(boy_img,boy.position.x,boy.position.y,100,150);

  ground1.display();

  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  thread.display();
  
  stone1.display();

 

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  
  fill("gold")
  textSize(15);
  text("Press Space to get a second chance to play",40,40);


}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  thread.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    thread.attacher(stone1.body);
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}


