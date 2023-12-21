/* important consts */
const WIDTH = 125;
const HEIGHT = 125;

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ]
};
                                                // some default values here, feel free to assign them in the function call and create some crazy stuff
function drawStar(radius, points, angle, origin, angleVar = 28, radiusVar = 0.0) { // yeahhhhh the main function
  const star = createTurtle();
  angle = angle / (2 * Math.PI)
  star.jump(pointCoord(angle, radius));

  angleVar = angleVar / (2 * Math.PI)

  for (let i = 1; i <= points; i++) {
    angle += (2 * Math.PI) / points;

    
    star.goTo(pointCoord(angle + (angleVar * i), radius));
    radius += radiusVar

  };
  
  star.translate(
    [WIDTH / 2 + origin[0], HEIGHT / 2 + origin[1]],
    star.cc
  );

  return star
};

// const star = drawStar(57, 190, -2, [1, 0]) // example, feel free to plug in whatever values you want !
// const star2 = drawStar(33, 104, 3.2, [3,-1], 49, 0)

drawTurtles([star, star2]); // draw it