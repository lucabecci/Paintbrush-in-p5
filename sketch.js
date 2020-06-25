function setup() {
  createCanvas(400, 400);
    //BG
  background(250, 250, 100);
}

function draw() {
  //ELLIPSE
  noStroke();
  fill(250,200,200);
  ellipse(mouseX,mouseY,25,25);
}

function mousePressed(){
  //BG
  background(250, 250, 100);
}  