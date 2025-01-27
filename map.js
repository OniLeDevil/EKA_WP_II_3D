const size = 100,
  xPosition = -100,
  yPosition = -100,
  zPosition = -500; // Center position of the cube

var map = [
    [0, 0, 1000, 0, 180, 0, 2000, 600, "url('textures/1.jpg')", "ff0000"],
    [0, 0, -1000, 0, 0, 0, 2000, 600, "url('textures/1.jpg')", "ff0000"],
    [1000, 0, 0, 0, -90, 0, 2000, 600, "url('textures/1.jpg')", "ff0000"],
    [-1000, 0, 0, 0, 90, 0, 2000, 600, "url('textures/1.jpg')", "ff0000"],
    [0, 100, 0, 90, 0, 0, 2000, 2000, "url('textures/2.jpg')", "00ff00"],
    //Patric's wall
    [500, 0, 580, 0, 0, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [500, 0, 600, 0, 0, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [0, 0, 590, 0, 90, 0, 20, 600, "url('textures/1.jpg')", "ff0000"],
    //Altyshka's wall
    [-500, 0, 500, 0, 90, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [-480, 0, 500, 0, 90, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [-490, 0, 0, 0, 0, 0, 20, 600, "url('textures/1.jpg')", "ff0000"],
    //Antelz's wall
    [680,0,-500, 0, 90, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [700, 0,-500, 0, 90, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [690, 0,0, 0, 0, 0, 20, 600, "url('textures/1.jpg')", "ff0000"],
    //Adheeksha's wall
    [-500, 0, -580, 0, 0, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [-500, 0, -600, 0, 0, 0, 1000, 600, "url('textures/1.jpg')", "ff0000"],
    [0, 0, -590, 0, 90, 0, 20, 600, "url('textures/1.jpg')", "ff0000"],
  
    // Top Face
    [xPosition, yPosition - 50, zPosition, 90, 0, 0, size, size, null, "#FF0000"],
    // Bottom Face
    [
      xPosition,
      yPosition + 50,
      zPosition,
      -90,
      0,
      0,
      size,
      size,
      null,
      "#00FF00",
    ],
    // Front Face
    [xPosition, yPosition, zPosition - 50, 0, 0, 0, size, size, null, "#4d0000"],
    // Back Face
    [
      xPosition,
      yPosition,
      zPosition + 50,
      0,
      180,
      0,
      size,
      size,
      null,
      "#FFFFFF",
    ],
    // Right Face
    [xPosition + 50, yPosition, zPosition, 0, 90, 0, size, size, null, "#00FFFF"],
    // Left Face
    [
      xPosition - 50,
      yPosition,
      zPosition,
      0,
      -90,
      0,
      size,
      size,
      null,
      "#0F7209",
    ],
  ];

  function CreateNewWorld() {
    for (let i = 0; i < map.length; i++) {
      let newElement = document.createElement("div");
      newElement.className = "square";
      newElement.id = "square" + i;
      newElement.style.width = map[i][6] + "px";
      newElement.style.height = map[i][7] + "px";
  
      if (map[i][8] == null) {
        newElement.style.background = map[i][9];
      } else {
        newElement.style.backgroundImage = map[i][8];
      }
  
      newElement.style.transform =
        "translate3d(" +
        (600 - map[i][6] / 2 + map[i][0]) +
        "px," +
        (400 - map[i][7] / 2 + map[i][1]) +
        "px," +
        map[i][2] +
        "px)" +
        "rotateX(" +
        map[i][3] +
        "deg)" +
        "rotateY(" +
        map[i][4] +
        "deg)" +
        "rotateZ(" +
        map[i][5] +
        "deg)";
  
      world.append(newElement);
    }
  }