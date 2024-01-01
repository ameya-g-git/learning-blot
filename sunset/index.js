// important consts

const WIDTH = 125; 
const HEIGHT = 125;
const WINDOWSIZE = 3; // width and height of building windows
const WINDOWGAP = WINDOWSIZE / 3
const HORIZON = 45; // holds the y-val of the horizon

// functions

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function SDFCircle(pt, x, y, radius) {
  let ptVal = 0; // holds the SDF value of the point, will be returned at end of fn

  const ptX = pt[0];
  const ptY = pt[1];

  const length = Math.sqrt( ((ptX - x)**2) + ((ptY - y)**2) )

  ptVal = length - radius;

  return ptVal
}

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ];
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
  tempBuilding.jump([x, y]);
  tempBuilding.setAngle(90);

  tempBuilding.forward(height);
  tempBuilding.right(90);
  tempBuilding.forward(width);
  tempBuilding.right(90);
  tempBuilding.forward(height);

  let windows = createTurtle();

  for (let tempX = x; tempX < x + width - (2 * WINDOWSIZE); tempX += (WINDOWGAP + WINDOWSIZE)) { 
    // generates windows in a grid, the loop settings iterate the position of each window
    for (let tempY = y + 10; tempY < y + height - (2 * WINDOWSIZE); tempY += (WINDOWGAP + WINDOWSIZE)) {
      windows.jump([tempX, tempY]);
      windows.setAngle(90)
      
      for (let i = 0; i < 4; i++) { // draws the square for the window
        windows.forward(WINDOWSIZE);
        windows.right(90);
      }

      // TODO: may add shine on the windows using random numbers
      
    }
  }

  windows.translate( // centers the windows on the building
    tempBuilding.cc,
    windows.cc
  )

  tempBuilding.join(windows)
  
  return tempBuilding
}

let buildings = createTurtle();
const maxWidth = 35;

for (let i = 0; i < 2; i++) {
  let x = (70 * i) + 6;
  let buildingsWidth = 0;

  while (buildingsWidth < maxWidth) {
    let tempWidth = randInt(6, 14);
    let tempHeight = randInt(20, 49);

    let tempBuilding = building(x, HORIZON, tempWidth, tempHeight);
    buildings.join(tempBuilding);

    x += tempWidth;
    buildingsWidth += tempWidth;
  }
}

drawTurtles([buildings]);


// build1.iteratePath( // basic SDF implementation, adjust as needed
//   (pt, tValue) => {
//     if (SDFCircle(pt, 41, 47, 18) < 0) {
//       return "REMOVE";
//     }
//   }
// )

// drawTurtles([build1]);
