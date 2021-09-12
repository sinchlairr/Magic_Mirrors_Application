const video = document.getElementById('video');
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

window.onload = function() {
  var birdSound = new Audio('imgs/front.mp3');
  birdSound.loop = false;
  birdSound.play();
  // document.getElementById("tah_audio").play();
}



function startVid(){
    navigator.getUserMedia({video: {}}, stream => video.srcObject = stream, 
        err => console.error(err))
}

const detectFaces = async() =>{
    const prediction = await model.estimateFaces(video, false);

    // console.log(prediction);
    ctx.drawImage(video, 0 ,0 , 300, 300);
    base_image = new Image();
    base_image.src = 'hats.png';
    
    prediction.forEach((pred) => {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "blue";
        ctx.drawImage(base_image,pred.topLeft[0]-120,pred.topLeft[1]-160, 100, 80);
        // ctx.rect(
        //     pred.topLeft[0],
        //     pred.topLeft[1],
        //     5,5
        //     // pred.bottomRight[0] - pred.topLeft[0],
        //     // pred.bottomRight[1] - pred.topLeft[1],

        // );
        // ctx.stroke();

        // ctx.fillStyle = "red";
        // pred.landmarks.forEach((landmark)=>{
        //     ctx.fillRect(landmark[0],landmark[1],5,5);
        // })
    });
};

startVid();

video.addEventListener("loadeddata", async () => {
    model = await blazeface.load();
    setInterval(detectFaces, 100);
})



function windowResized() {
    resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
    draw();
  }