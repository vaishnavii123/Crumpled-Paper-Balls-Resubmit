
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftside;
var rightside;



function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
	
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
	//Create the Bodies Here.
	ball=Bodies.circle(150,545,25,ball_option);
	World.add(world,ball);

	ground=new Ground(0,550,2500,20);
	leftside=new Ground(600,460,17,160);
	rightside=new Ground(800,460,17,160);

	rectMode(CENTER);
  ellipseMode(RADIUS);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftside.show();
  rightside.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

 
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-90})
	}
}
