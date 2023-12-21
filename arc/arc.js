const WIDTH = 125;
const HEIGHT = 125;

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ]
};

function arc(radius, points, angle, origin) { // yeahhhhh the main function
  const arc = createTurtle();
  const angleRad = angle * (Math.PI / 180);

  let arcAngle = 0;

  for (let i = 1; i <= points; i++) {
    arcAngle += angleRad / points;    
    arc.goTo(pointCoord(arcAngle, radius));
  };
  
  arc.translate(
    [WIDTH / 2 + radius, HEIGHT / 2],
    origin
  );

  return arc
};

const arc1 = arc(47, 74, 139, [0,0]); // example, feel free to plug in whatever values you want !

drawTurtles([arc1]); // draw it