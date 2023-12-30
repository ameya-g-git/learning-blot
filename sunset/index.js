// important consts

const WIDTH = 125; 
const HEIGHT = 125;
const WINDOWSIZE = 6; // width and height of building windows
const WINDOWGAP = WINDOWSIZE / 3

// functions

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ]
};

function arc(angle, radius, points = 250) { // arc generation but good and precise
  const arc = createTurtle();
  const angleRad = angle * (Math.PI / 180);

  let arcAngle = 0;

  for (let i = 1; i <= points; i++) {
    arcAngle += angleRad / points;    
    arc.goTo(pointCoord(arcAngle, radius));
  };
  
  arc.translate(
    [WIDTH / 2, HEIGHT / 2],
    [-radius, 0]
  );

  return arc
};

function building(x, y, width, height) {
  let tempBuilding = createTurtle();
  tempBuilding.goTo([x, y]);
  tempBuilding.setAngle(90);

  tempBuilding.forward(height);
  tempBuilding.right(90);
  tempBuilding.forward(width);
  tempBuilding.right(90);
  tempBuilding.forward(height);

  let windows = createTurtle();
  // TODO: may add shine on the windows using random numbers

  for (let tempX = x; tempX < x + width - WINDOWSIZE; tempX += (WINDOWGAP + WINDOWSIZE)) { 
    // generates windows in a grid, the loop settings iterate the position of each window
    for (let tempY = y; tempY < y + height - WINDOWSIZE; tempY += (WINDOWGAP + WINDOWSIZE)) {
      windows.jump([tempX, tempY]);
      windows.setAngle(90)
      
      for (let i = 0; i < 4; i++) {
        windows.forward(WINDOWSIZE);
        windows.right(90);
      }
    }
  }

  windows.translate( // centers the windows on the building
    tempBuilding.cc,
    windows.cc
  )

  tempBuilding.join(windows)
  
  return tempBuilding
}

const build1 = building(15,0,20,65);

drawTurtles([build1]);
