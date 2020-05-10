const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tanker;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(340,200,400,200);
    
}

function draw(){
    background(280,280,280);
    Engine.update(engine);
    tanker.display();
}