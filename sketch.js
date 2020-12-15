

var number = 23;  //integer
console.log (number);
number = 46;
var string = "Samir is smart";
//String: A combination of characters

console.log (string);
var bool = true;

// array is a collection of multiple data types
var array  = [12,34,45,"Samir", true, 1234, [23,43,"Anjulika", 12,67]];
console.log(array[6][2]);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig1 = new Pig(900, 40);
    pig2 = new Pig(700, 20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,240,70,70);
    box3 = new Box(700,160,70,70);
    box4 = new Box(700,90,70,70);
    box6 = new Box(800,320,70,70);
    box7 = new Box(800,240,70,70);
    box8 = new Box(1000,320,70,70);
    box9 = new Box(1000,240,70,70);
    box10 = new Box(900,120, 70, 70);
    log1 = new Log(900,150,180, PI/2);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    box1.display();
    box2.display();
   
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
   // log3.display();

    
   /* log4.display();
    log5.display();*/
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode === 32){
    slingshot.attach(bird.body);
}
}