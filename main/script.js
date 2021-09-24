
window.onload=function(){
        document.getElementById('load').style.width=0.7*windowWidth;
        document.getElementById('circle').style.display = 'none';
          var birdSound = new Audio('imgs/music.wav');
        // birdSound.loop = false;
        birdSound.play();

        // document.getElementsByClassName('buttons').classList.toggle('reset');
        document.getElementById('btn_two').classList.toggle('select');

}



let img;
let vid;
let theta = 0;
let cam;
var fat_start = false;
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

window.onload = music();

var bgSound;
bgSound = new Audio('imgs/peekaboo.mp3');
var thin_aud;

var fat_aud ;

// fat_aud.play();

var small_aud;


var tall_aud;
// tall_aud.play();
// small_aud.play();

var funny_aud;
// funny_aud.play();

var two_aud;
// two_aud.play();


function music() {
  var sd = new Audio('imgs/music.wav');
  // birdSound.loop = false;
  sd.play();


    if (fat_start){
      fat_aud = new Audio('imgs/mm2.mp3');
      fat_aud.loop = false;
      fat_aud.play();
      // var fat_aud = new Audio('imgs/mm2.mp3');
      // fat_aud.loop = false;
        // birdSound = new Audio('imgs/mm2.mp3');
        // fat.play();
      }


    if (thin_start){
        // birdSound = new Audio('imgs/thin.mp3');
        thin_aud = new Audio('imgs/thin.mp3');
        thin_aud.loop = false;
        thin_aud.play();
      }
      
      if (small_start){
        // var birdSound = new Audio('imgs/small.mp3');
        small_aud = new Audio('imgs/small.mp3');
        small_aud.loop = false;

        small_aud.play();
      }
      
      if (tall_start){
        // birdSound = new Audio('imgs/tall.mp3');
        tall_aud = new Audio('imgs/tall.mp3');
        tall_aud.loop = false;
        tall_aud.play();
      }
      if (funny_start){
        // birdSound = new Audio('imgs/funny.mp3');
        funny_aud = new Audio('imgs/funny.mp3');
        funny_aud.loop=false;
        funny_aud.play();
      }
      if (two_start){
        // birdSound = new Audio('imgs/two.mp3');
        two_aud = new Audio('imgs/two.mp3');
        two_aud.loop = false;
        two_aud.play();
      }



    // document.getElementById("tah_audio").play();
  }

function music_pause(){
  if (fat_start){
    fat_aud.pause();
  }
  if (thin_start){
    thin_aud.pause();
  }
  if (small_start){
    small_aud.pause();
  }
  if (tall_start){
    tall_aud.pause();
  }
  if (funny_start){
    funny_aud.pause();
  }
  if (two_start){
    two_aud.pause();
  }
}


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

function rhyme_disappear(){
  document.getElementById("rhyme_fat").style.opacity=0;
  document.getElementById("rhyme_thin").style.opacity=0;
  document.getElementById("rhyme_small").style.opacity=0;
  document.getElementById("rhyme_tall").style.opacity=0;
  document.getElementById("rhyme_funny").style.opacity=0;
  document.getElementById("rhyme_two").style.opacity=0;
}

function animation_disappear(){
  document.getElementById("hat").style.opacity=0;
  document.getElementById("click").style.opacity=0;
  document.getElementById("ball").style.opacity=0;
  document.getElementById("gir").style.opacity=0;
  document.getElementById("bunny").style.opacity=0;
  document.getElementById("wipe").style.opacity=0;
  // document.getElementById("wipe").classList.toggle("active");
  // document.getElementById("ball").classList.toggle("active");
}

function reset_btn(){
  document.getElementById('btn_two').style.opacity=1;
  document.getElementById('btn_fat').style.opacity=0;
  document.getElementById('btn_thin').style.opacity=1;
  document.getElementById('btn_tall').style.opacity=1;
  document.getElementById('btn_small').style.opacity=1;
  document.getElementById('btn_funny').style.opacity=1;
}


function next_fun(){
  // pause_voice();
  console.log("clicked");
  document.getElementById('arrow').style.opacity=0;
  bgSound = new Audio('imgs/peekaboo.mp3');
  bgSound.loop = false;
  bgSound.play();

  if (fat_start){
    fat_aud.pause();
    work_fat();
  }
  else if (thin_start){
    thin_aud.pause();
    work_thin();
  }
  
  else if (small_start){
    small_aud.pause();
    work_small();
  }
  
  else if (tall_start){
    tall_aud.pause();
    work_tall();
  }
  else if (funny_start){
    funny_aud.pause();
    work_funny();
  }
  else if (two_start){
    two_aud.pause();
    work_two();
  }
  
  // setTimeout(star, 500);
}

function two(){
  music_pause();
  document.getElementById('arrow').style.opacity=1;
  all_false();
  rhyme_disappear();
  reset_btn();
  document.getElementById('btn_two').style.opacity=0;
  two_start=true;
  music();
  bgSound.pause();
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_two").style.opacity=1;
  animation_disappear()
  document.getElementById("wipe").classList.toggle("active");
  document.getElementById("wipe").style.opacity=1;
}

function work_two(){
  two_start = true;
  // loop();
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_two").style.opacity=0;
}

function work_fat(){
  fat_start=true;
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_fat").style.opacity=0;
  document.getElementById('arrow').style.opacity=0;
  // document.getElementById("text").classList.toggle("fade");
  document.getElementById("hat").style.animation = "shake 0.8s ease-in";
  // document.getElementById("star").style.opacity=1;

  // document.getElementById("rhyme_fat").style.animation = "shake 0.8s ease-in";
}


  function fat(){
    music_pause();
    document.getElementById('arrow').style.opacity=1;
    all_false();
    rhyme_disappear();
    reset_btn();
    bgSound.pause();
    document.getElementById('btn_fat').style.opacity=1;
    fat_start=true;
    music();
    document.getElementById("text").style.opacity=0;
    document.getElementById("rhyme_fat").style.opacity=1;
    animation_disappear();
    document.getElementById("hat").style.opacity=1;
  }

function star(){
    document.getElementById("star").style.opacity=0;
}


console.log(windowWidth);

function small(){
  music_pause();
  document.getElementById('arrow').style.opacity=1;
  all_false();
  rhyme_disappear();
  bgSound.pause();
  small_start=true;
  reset_btn();
  document.getElementById('btn_small').style.opacity=0;
  music();
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_small").style.opacity=1;
  animation_disappear()
  document.getElementById("ball").style.opacity=1;
  document.getElementById("ball").classList.toggle("active");
  

}

function work_small(){
  small_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_small").style.opacity=0;


}

function thin(){
  music_pause();
  // birdSound.play();
  document.getElementById('arrow').style.opacity=1;
  all_false();
  rhyme_disappear();
  reset_btn();
  bgSound.pause();
  document.getElementById('btn_thin').style.opacity=0;
  thin_start=true;
  music();
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_thin").style.opacity=1;
  animation_disappear()
  document.getElementById("click").style.opacity=1;
  // normal();

  setTimeout(star, 5500);
}


function work_thin(){
  // birdSound = new Audio('imgs/thin.mp3');
  // birdSound.pause();

  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_thin").style.opacity=0;


}

function tall(){
  music_pause();
  document.getElementById('arrow').style.opacity=1;
  all_false();
  rhyme_disappear();
  tall_start=true;
  bgSound.pause();
  reset_btn();
  document.getElementById('btn_tall').style.opacity=0;
  music();
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_tall").style.opacity=1;
  animation_disappear()
  document.getElementById("gir").style.opacity=1;
}

function work_tall(){
  tall_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_tall").style.opacity=0;
}

function funny(){
  music_pause();
  document.getElementById('arrow').style.opacity=1;
  all_false();
  rhyme_disappear();
  funny_start=true;
  bgSound.pause();
  reset_btn();
  document.getElementById('btn_funny').style.opacity=0;
  music();
  document.getElementById("text").style.opacity=0;
  document.getElementById("rhyme_funny").style.opacity=1;
  animation_disappear()
  document.getElementById("bunny").style.opacity=1;
}

function work_funny(){
  funny_start = true;
  
  document.getElementById("text").style.opacity=1;
  document.getElementById("rhyme_funny").style.opacity=0;
}

function change_bg(){
  // document.getElementById("btn").classList.toggle("mouseover");
  document.getElementById('btn_two').style.opacity=0;
  // document.getElementById('btn_two').classList.toggle('select');

}

function restore_bg(){
  document.getElementById("btn").classList.toggle("mouseout");
}


function windowResized() {
  resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
  draw();
}

function hint_hide(){
  document.getElementById("hint-screen").style.display='none';
  fat_start=true;
  music();
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