
let img;
let vid;
let theta = 0;
let cam;
var fat_start = true;
var fat_show = false;
var small_start = false;
var small_show = false;
var thin_start = false;
var thin_show = false;
var tall_start = false;
var tall_show = false;
var funny_start = false;
var funny_show = false;
var two_start = false;
var two_show = false;



function all_false(){

  fat_start = false;
fat_show = false;
small_start = false;
small_show = false;
thin_start = false;
thin_show = false;
tall_start = false;
tall_show = false;
funny_start = false;
funny_show = false;
two_start = false;
two_show = false;


}

function all_disappear(){
  document.getElementById("rhyme_fat").style.opacity=0;
  document.getElementById("rhyme_thin").style.opacity=0;
  document.getElementById("rhyme_small").style.opacity=0;
  document.getElementById("rhyme_tall").style.opacity=0;
  document.getElementById("rhyme_funny").style.opacity=0;
  document.getElementById("rhyme_two").style.opacity=0;
}


function next_fun(){

  if (fat_start){
    work_fat();
  }
  else if (thin_start){
    work_thin();
  }
  
  else if (small_start){
    work_small();
  }
  
  else if (tall_start){
    work_tall();
  }
  else if (funny_start){
    work_funny();
  }
  else if (two_start){
    work_two();
  }
  
  // setTimeout(star, 500);
}

function two(){
  all_false();
  all_disappear();
  two_start=true;

  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_two").style.opacity=1;
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=0;
  document.getElementById("ball").style.opacity=0;
  document.getElementById("gir").style.opacity=0;
  document.getElementById("bunny").style.opacity=0;
  document.getElementById("wipe").style.opacity=1;
}

function work_two(){
  two_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_two").style.opacity=0;
}

function work_fat(){
  fat_start=true;
  // document.getElementById("text").classList.toggle("fade");
  document.getElementById("hat").style.animation = "shake 0.8s ease-in";
  // document.getElementById("star").style.opacity=1;
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_fat").style.opacity=0;
  // document.getElementById("rhyme_fat").style.animation = "shake 0.8s ease-in";

}
function star(){
    document.getElementById("star").style.opacity=0;
}


console.log(windowWidth);

function small(){
  all_false();
  all_disappear();
  small_start=true;

  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_small").style.opacity=1;
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=0;
  document.getElementById("ball").style.opacity=1;
  document.getElementById("ball").classList.toggle("active");
  

}

function work_small(){
  small_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_small").style.opacity=0;


}

function thin(){
  all_false();
  all_disappear();
  thin_start=true;
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_thin").style.opacity=1;
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=1;
  // normal();

  setTimeout(star, 5500);
}


function work_thin(){

  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_thin").style.opacity=0;


}

function tall(){
  all_false();
  all_disappear();
  tall_start=true;

  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_tall").style.opacity=1;
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=0;
  document.getElementById("ball").style.opacity=0;
  document.getElementById("gir").style.opacity=1;
}

function work_tall(){
  tall_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_tall").style.opacity=0;
}

function funny(){
  all_false();
  all_disappear();
  funny_start=true;

  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_funny").style.opacity=1;
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=0;
  document.getElementById("ball").style.opacity=0;
  document.getElementById("gir").style.opacity=0;
  document.getElementById("bunny").style.opacity=1;
}

function work_funny(){
  funny_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_funny").style.opacity=0;
}




function windowResized() {
  resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
  draw();
}


// function fadeIn() {
//     setTimeout(work_fat, 5000);
//     // setTimeout(hat, 5000);
//     // setTimeout(star, 5500);
// }


// function startm(){
//   fat_start= true;
//   loop();
//   document.getElementById("hidebtn").style.display="none";
//   document.getElementById("hat").style.opacity=0;
//   document.getElementById("flap").style.display="none";
//   // document.getElementById("rhyme").style.display="none";
//   document.getElementById("peekaboo").style.display="none";
//   document.getElementById("peek").style.display="none";

//   }