function setup() {
    // var cnv = creaFteCanvas(0.4*windowWidth, 0.83*windowHeight, WEBGL);
    var cnv = createCanvas(0.39*windowWidth, 0.78*windowHeight, WEBGL);
    // var cnv = createCanvas(0.42*window.innerWidth, 0.5*window.innerHeight, WEBGL);
  //   cnv.parent('p5Div');
  
    img = loadImage('assets/cat.jpg');
    // vid = createVideo(['assets/360video_256crop_v2.mp4']);
    vid = createCapture(VIDEO);
    // vid.size(200, 400);
    // vid.elt.muted = true;
    // vid.loop();
    vid.hide();
    // noLoop();
  }
  
  function draw() {
    if (fat_show){
  
    background(250);
    noStroke();
    translate(2, 0, -0.05 * windowWidth);
    push();
    rotateY(22);
    scale(-1, 1);
    // rotateX(2.7);
    // rotateZ(1.7);
  
    //pass image as texture
    texture(vid);
    // cone(280, 800,500);
    cylinder(350,900);}
  
  
    else if (thin_show){
  
   // scale(height);
   scale(height);
   // translate(0,1);
  
   texture(vid);
  
   beginShape();
      
  
   
   //ye
   vertex(-0.5, -0.5, 0, 0, 0);
   vertex(1.5, -0.5, 0, 1200, 0);
   vertex(1.5, 1.5, 0, 1200, 520);
  
   vertex(1.5, 1.5, 0, 1200, 520);
   vertex(-0.5, 1.5, 0, 0, 520);
   vertex(-0.5, -0.5, 0, 0, 0); 
  //ye
  
  
   endShape();}
    
  else if (small_show){
  
  
    scale(width);
    // translate(0,1);
  
    texture(vid);
  
    beginShape();
  
  //ye
  
    vertex(-1.8,-0.6,0,0,0);
  
    vertex(1.3,-0.6,0,500,0);
  
    vertex(1.3,30,0,500,13000);
  
    vertex(-1.8,30,0,0,13000);
  
    
    endShape();
  }

  else if (tall_show){
  
  
    background(250);
    noStroke();
    translate(0, 0, 20);
    push();
    rotateY(16);
    
    rotateX(-0.8);
    rotateZ(-0.25);
  
    //pass image as texture
    texture(vid);
    cone(560, 1350,900);
  }


  else if (funny_show){
    console.log(windowWidth);
    background(250);
    noStroke();
    // translate(-0.01*windowWidth, 0, 10);
    // translate(0.005*windowWidth, -50, 0.1*windowWidth);
    translate(0.005*windowWidth, -50,0.2*windowWidth);
    push();
    rotateY(16);
    rotateX(2);
    rotateZ(0.5);
  
    //pass image as texture
    texture(vid);
    cone(280, 800,500);
  }  
  
  else if (two_show){
    // vid.size(320,240);
    // vid.position(8,8);
    // vid.hide();
    push();
    // translate(-100,-100);
    // scale(-1, 1);
    image(vid, -0.18*windowWidth, -0.29*windowWidth, 0.4*windowWidth/2,windowHeight);
    // image(vid, -280, -280, 0.39*windowWidth/2,0.8*windowHeight);
    pop();
    push();
    translate(width,0);
    scale(-1, 1);
    image(vid, 0.17*windowWidth, -0.29*windowWidth, 0.4*windowWidth/2, windowHeight);
    // image(vid, 280, -280, 0.39*windowWidth/2, 0.8*windowHeight);
    pop();
  }
  
  
  else{
    background(250);
    noStroke();
    texture(vid);
    plane(0.4*windowWidth, 0.83*windowHeight);
  }
  
    //pass image as texture
    
  }