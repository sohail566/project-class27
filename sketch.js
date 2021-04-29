
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground	
var world;
var paper;

function preload(){
	paperImage = loadImage("sprites/paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new ground(width/2,670,width,20);
	dustbin=new dustbin(1200,650);
	paper = new paper(150,420,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  dustbin.display();
paper.display();  
}







function keyPressed(){
	if(keycode=== up_arrow) {
		
	}
}









