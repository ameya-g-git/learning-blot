/* important consts */
const WIDTH = 125;
const HEIGHT = 125;

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ]
};

function drawStar(radius, points, angle, origin) { // yeahhhhh the main function
  const star = createTurtle();
  star.jump(pointCoord(angle, radius));

  for (let i = 1; i <= points; i++) {
    angle += (2 * Math.PI) / points;

    
    star.goTo(pointCoord(angle + (80 * i), radius));
    radius += -1.2

  };
  
  star.translate(
    [WIDTH / 2 + origin[0], HEIGHT / 2 + origin[1]],
    star.cc
  );

  return star
};

const star = drawStar(71, 129, 0, [11, 0]) // example !

drawTurtles([star]); // draw it