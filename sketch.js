
var speed, weight, thickness;

var Bullet, wall;

function setup() {
  createCanvas(1600,400);

 Bullet =  createSprite(50,200,30,10);

 thickness=random(22,83);
 wall = createSprite(1500,200,thickness,height/2);
 wall.shapeColor = (80,80,80);

 speed=random(223,321);
  weight=random(400,1500);
  Bullet.velocityX = speed;
}

function draw() {
  background(4,6,7);  

  if (hasColided(Bullet, wall))  {
    Bullet.velocityX = 0;
    var Damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if  (Damage>10) {
      wall.shapeColor = "red";
    }

    if  (Damage<10) {
      wall.shapeColor = "green";
    }
  }

  /*if (wall.x-car.x < (car.width+wall.width)/2)  {

    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;

     if (deformation>180) {
       //bad
       console.log(deformation);
      car.shapeColor = "red";
      }

        if (deformation<180 && deformation>100) {
        //ok
        console.log(deformation);
        car.shapeColor = "yellow";
        }

          if (deformation<100 ) {
          //great
          console.log(deformation);
          car.shapeColor = "green";
          }

  }*/

  drawSprites();
}

function hasColided(Lbullet,Lwall) {

  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}
