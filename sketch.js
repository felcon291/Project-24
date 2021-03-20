const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 10);

  ground = new Ground(400, 680, 1200, 20);
  
  leftSide = new Dustbin(710, 620, 20, 100);
  bottom = new Dustbin(810, 660, 180, 20);
  rightSide = new Dustbin(910, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}