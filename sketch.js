//creating variables .
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;
var wall26;
var wall27;
var wall28;
var wall29;
var wall30;
var wall31;
var wall32;
var wall33;
var wall34;
var wall35;
var wall36;
var wall37;
var wall38;
var wall39;
var wall40;
var wall41;
var wall42;
var wall43;
var wall44;
var wall45;
var wall46;
var wall47;
var wall48;
var wall49;
var wall50;
var prince, princess;


function preload() {
  //adding images .


  princeimage = loadAnimation("images/prince1.png", "images/prince2.png");
  princessimage = loadImage("images/princess.png");
  backgroundimage = loadImage("images/background.jpg");


}



function setup() {
  createCanvas(2000, 1000);

  //creating walls .

  wall1 = createSprite(100, 500, 30, 800);
  wall1.shapeColor = "#228B22"
  wall2 = createSprite(1000, 100, 1830, 30);
  wall2.shapeColor = "#228B22"
  wall3 = createSprite(1900, 485, 30, 800);
  wall3.shapeColor = "#228B22"
  wall4 = createSprite(1000, 900, 1830, 30);
  wall4.shapeColor = "#228B22"
  wall5 = createSprite(260, 230, 300, 30);
  wall5.shapeColor = "#228B22"
  wall6 = createSprite(420, 415, 30, 400);
  wall6.shapeColor = "#228B22"
  wall7 = createSprite(200, 100, 600, 30);
  wall7.shapeColor = "#228B22"
  wall8 = createSprite(360, 600, 100, 30);
  wall8.shapeColor = "#228B22"
  wall9 = createSprite(295, 540, 30, 150);
  wall9.shapeColor = "#228B22"
  wall10 = createSprite(200, 590, 30, 250);
  wall10.shapeColor = "#228B22"
  wall11 = createSprite(400, 700, 400, 30);
  wall11.shapeColor = "#228B22"
  wall12 = createSprite(530, 540, 30, 300);
  wall12.shapeColor = "#228B22"
  wall13 = createSprite(585, 750, 30, 110);
  wall13.shapeColor = "#228B22"
  wall14 = createSprite(280, 800, 360, 30);
  wall14.shapeColor = "#228B22"
  wall15 = createSprite(475, 835, 30, 100);
  wall15.shapeColor = "#228B22"
  wall16 = createSprite(670, 800, 200, 30);
  wall16.shapeColor = "#228B22"
  wall17 = createSprite(970, 655, 30, 500);
  wall17.shapeColor = "#228B22"
  wall18 = createSprite(755, 560, 30, 500);
  wall18.shapeColor = "#228B22"
  wall19 = createSprite(790, 760, 100, 30);
  wall19.shapeColor = "#228B22"
  wall20 = createSprite(930, 650, 80, 30);
  wall20.shapeColor = "#228B22"
  wall21 = createSprite(800, 540, 80, 30);
  wall21.shapeColor = "#228B22"
  wall22 = createSprite(925, 420, 80, 30);
  wall22.shapeColor = "#228B22"
  wall23 = createSprite(927, 320, 375, 30);
  wall23.shapeColor = "#228B22"
  wall24 = createSprite(1100, 555, 30, 480);
  wall24.shapeColor = "#228B22"
  wall25 = createSprite(1175, 800, 180, 30);
  wall25.shapeColor = "#228B22"
  wall26 = createSprite(1250, 650, 30, 300);
  wall26.shapeColor = "#228B22"
  wall27 = createSprite(1385, 515, 250, 30);
  wall27.shapeColor = "#228B22"
  wall28 = createSprite(1380, 750, 30, 280);
  wall28.shapeColor = "#228B22"
  wall29 = createSprite(1495, 650, 30, 280);
  wall29.shapeColor = "#228B22"
  wall30 = createSprite(1560, 800, 160, 30);
  wall30.shapeColor = "#228B22"
  wall31 = createSprite(1650, 765, 30, 100);
  wall31.shapeColor = "#228B22"
  wall32 = createSprite(1760, 700, 250, 30);
  wall32.shapeColor = "#228B22"
  wall33 = createSprite(530, 320, 30, 200);
  wall33.shapeColor = "#228B22"
  wall34 = createSprite(580, 500, 100, 30);
  wall34.shapeColor = "#228B22"
  wall35 = createSprite(640, 560, 30, 150);
  wall35.shapeColor = "#228B22"
  wall36 = createSprite(690, 620, 130, 30);
  wall36.shapeColor = "#228B22"
  wall37 = createSprite(1790, 600, 30, 200);
  wall37.shapeColor = "#228B22"
  wall38 = createSprite(1700, 515, 380, 30);
  wall38.shapeColor = "#228B22"
  wall39 = createSprite(1680, 600, 220, 30);
  wall39.shapeColor = "#228B22"
  wall40 = createSprite(1560, 685, 30, 200);
  wall40.shapeColor = "#228B22"
  wall41 = createSprite(1420, 320, 700, 30);
  wall41.shapeColor = "#228B22"
  wall42 = createSprite(1755, 360, 30, 80);
  wall42.shapeColor = "#228B22"
  wall43 = createSprite(1500, 400, 540, 30);
  wall43.shapeColor = "#228B22"
  wall44 = createSprite(1300, 200, 1200, 30);
  wall44.shapeColor = "#228B22"
  wall45 = createSprite(250, 340, 120, 30);
  wall45.shapeColor = "#228B22"
  wall46 = createSprite(200, 300, 30, 110);
  wall46.shapeColor = "#228B22"
  wall47 = createSprite(300, 300, 30, 110);
  wall47.shapeColor = "#228B22"
  wall48 = createSprite(565, 300, 100, 30);
  wall48.shapeColor = "#228B22"
  wall49 = createSprite(1200, 150, 30, 100);
  wall49.shapeColor = "#228B22"
  wall50 = createSprite(700, 400, 80, 30);
  wall50.shapeColor = "#228B22"

  //creating prince .

  prince = createSprite(150, 180, 30, 30);
  prince.scale = 0.13;
  prince.addAnimation("prince", princeimage);

  //creating princess .

  princess = createSprite(1800, 800, 30, 30);
  princess.scale = 0.13;
  princess.addImage(princessimage);
  prince.bounceOff


}

function draw() {

  background(backgroundimage);

  //making the prince move .


  if (keyDown("left")) {

    prince.x = prince.x - 9;

  }
  if (keyDown("right")) {

    prince.x = prince.x + 9;

  }
  if (keyDown("up")) {

    prince.y = prince.y - 9;


  }
  if (keyDown("down")) {

    prince.y = prince.y + 9;


  }


  //bouncing off from walls .  


  prince.bounceOff(wall1)
  prince.bounceOff(wall2)
  prince.bounceOff(wall3)
  prince.bounceOff(wall4)
  prince.bounceOff(wall5)
  prince.bounceOff(wall6)
  prince.bounceOff(wall7)
  prince.bounceOff(wall8)
  prince.bounceOff(wall9)
  prince.bounceOff(wall10)
  prince.bounceOff(wall11)
  prince.bounceOff(wall12)
  prince.bounceOff(wall13)
  prince.bounceOff(wall14)
  prince.bounceOff(wall15)
  prince.bounceOff(wall16)
  prince.bounceOff(wall17)
  prince.bounceOff(wall18)
  prince.bounceOff(wall19)
  prince.bounceOff(wall20)
  prince.bounceOff(wall21)
  prince.bounceOff(wall22)
  prince.bounceOff(wall23)
  prince.bounceOff(wall24)
  prince.bounceOff(wall25)
  prince.bounceOff(wall26)
  prince.bounceOff(wall27)
  prince.bounceOff(wall28)
  prince.bounceOff(wall29)
  prince.bounceOff(wall30)
  prince.bounceOff(wall31)
  prince.bounceOff(wall32)
  prince.bounceOff(wall33)
  prince.bounceOff(wall34)
  prince.bounceOff(wall35)
  prince.bounceOff(wall36)
  prince.bounceOff(wall37)
  prince.bounceOff(wall38)
  prince.bounceOff(wall39)
  prince.bounceOff(wall40)
  prince.bounceOff(wall41)
  prince.bounceOff(wall42)
  prince.bounceOff(wall43)
  prince.bounceOff(wall44)
  prince.bounceOff(wall45)
  prince.bounceOff(wall46)
  prince.bounceOff(wall47)
  prince.bounceOff(wall48)
  prince.bounceOff(wall49)
  prince.bounceOff(wall50)


  drawSprites();


}


