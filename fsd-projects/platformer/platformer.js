$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
createPlatform(200,650,100,50, "red");
createPlatform(400,600,100,50, "blue", true,350,600,1);
createPlatform(535,485,100,50, "green");
createPlatform(700,100,100,350, "teal");
createPlatform(700,550,100,100,"yellow");
createPlatform(900,600,50,25, "magenta");
createPlatform(1050,461,100,50,"brown");

createPlatform(50, 400, 80, 20, "purple", true, 200, 200, 600);
   
    // TODO 3 - Create Collectables
createCollectable("steve",535,50,1,1);
createCollectable("diamond",850,50,1,1);
createCollectable("max",1050,50,1,1);


    
    // TODO 4 - Create Cannons
createCannon("right", 800,0);
createCannon("top", 400,800);
createCannon("top",800,800);
createCannon("bottom",950,650)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
