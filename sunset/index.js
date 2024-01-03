// important consts

const WIDTH = 125; 
const HEIGHT = 125;
const WINDOWSIZE = 3; // width and height of building windows
const WINDOWGAP = WINDOWSIZE / 3
const HORIZON = 45; // holds the y-val of the horizon

// functions

function SDFCircle(pt, x, y, radius) {
  let ptVal = 0; // holds the SDF value of the point, will be returned at end of fn

  const ptX = pt[0];
  const ptY = pt[1];

  const length = Math.sqrt( ((ptX - x)**2) + ((ptY - y)**2) )

  ptVal = length - radius;

  return ptVal
}

function SDFRect(pt, x, y, width, height) {
  let ptVal = 0;
  
  const ptX = pt[0];
  const ptY = pt[1];

  const maxX = width + x;
  const maxY = height + y;

  if (( (ptX > x) && (ptX < maxX) ) && ( (ptY > y) && (ptY < maxY) )) {
    ptVal = 0;
  }
  else {
    ptVal = 1;
  }


  // const distX = () => {
  //   if (ptX < x) {
  //     return x - ptX;
  //   }
  //   else if (ptX > (width + x)) {
  //     return ((width + x) - ptX);
  //   }
  //   else {
  //     return 0;
  //   }
  // }

  // const distY = () => {
  //   if (ptY < y) {
  //     return y - ptY;
  //   }
  //   else if (ptY > (height + y)) {
  //     return ((height + y) - ptY);
  //   }
  //   else {
  //     return 0;
  //   }
  // }

  // const length = Math.sqrt( ((Math.max(distX, 0))**2) + ((Math.max(distY, 0))**2) )

  // const length = Math.sqrt( distX**2 + distY**2 );
  
  // ptVal = length;
    
  // const rectWidth = ptX - x - (width / 2);
  // const rectHeight = ptY - y - (height / 2);

  // const innerDist = Math.min(Math.max(rectWidth, rectHeight), 0);
  // const outerDist = Math.sqrt( (Math.max(rectWidth, 0))**2 + (Math.max(rectHeight, 0))**2 );

  // ptVal = innerDist + outerDist;

  return ptVal;
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

// building gen

let buildings = createTurtle();
const maxWidth = 45;

for (let i = 0; i < 2; i++) {
  let x = 80 * i
  let buildingsWidth = 0;

  while (buildingsWidth < maxWidth) {
    let tempWidth = randInRange(6, 14);
    let tempHeight = randInRange(20, 49);

    if ((buildingsWidth + tempWidth) > maxWidth) {
      break;
    }
  
    let tempBuilding = building(x, HORIZON, tempWidth, tempHeight);
    buildings.join(tempBuilding);

    x += tempWidth;
    buildingsWidth += tempWidth
  }

  if (buildingsWidth != maxWidth) {
    const leftoverWidth = maxWidth - buildingsWidth;
    const tempHeight = randInRange(20, 49);
    const tempBuilding = building(x, HORIZON, leftoverWidth, randInRange(20,49));
    buildings.join(tempBuilding);
  }
}


buildings.resample(0.01);


// buildings.iteratePath( // basic SDF implementation, adjust as needed
//   (pt, tValue) => {
//     if (SDFRect(pt, 0, 48, 31, 13) == 0) {
//       return "REMOVE";
//     }
//   }
// )

drawTurtles([buildings]);


// drawTurtles([build1]);
