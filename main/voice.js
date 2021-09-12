// var a;
if (annyang) {
  // Let's define a command.
  const commands = {
    'peekaboo': () => { 
      document.getElementById("star").style.opacity=1;
      if (fat_start){
        fat_show=true;
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      }
      else if (thin_start){
        thin_show=true;
        // work_thin();
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      }
      
      else if (small_start){
        small_show=true;
        // work_thin();
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      }
      
      else if (tall_start){
        tall_show=true;
        // work_thin();
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      } 
      
      else if (funny_start){
        funny_show=true;
        // work_thin();
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      }      
      else if (two_start){
        two_show=true;
        // work_thin();
        document.getElementById("star").style.opacity=1;
        setTimeout(star, 500);
        
      }
     }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}