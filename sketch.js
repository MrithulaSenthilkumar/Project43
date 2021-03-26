var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr % 12,0,12,0,360);
//drawing 2nd hand.
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minute hand.
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  //drawing hour hand.
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke("white");
  strokeWeight(7);
  point(0,0);

  //drawing arcs.
  strokeWeight(10);
  noFill();
  //second
  stroke("red");
  //arc(x, y, w, h, start, stop, [mode], [detail])
  arc(0,0,300,300,0,scAngle);
  
  //drawing arcs minutes.
  stroke("green");
  arc(0,0,280,280,0,mnAngle);

  //drawing arcs for hour.
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);


}