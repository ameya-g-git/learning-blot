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
function drawStar(radius, points, angle, origin, angleVar = 4, radiusVar = -0.3) { // yeahhhhh the main function
  const star = createTurtle();
  star.jump(pointCoord(angle, radius));

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

const star = drawStar(60, 122, 0, [1, 0]) // example, feel free to plug in whatever values you want !

drawTurtles([star]); // draw it