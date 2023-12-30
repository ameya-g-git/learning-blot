const WIDTH = 125;
const HEIGHT = 125;

function pointCoord(angle, radius) { // returns the coords of a point provided a radius and an angle to subtend around a circle of that radius
  return [
    (Math.cos(angle) * radius) - radius,
    Math.sin(angle) * radius
  ]
};

function arc(angle, radius, points) { // yeahhhhh the main function
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

const arc1 = arc(625, 21, 1583); // example, feel free to plug in whatever values you want !
let arc2 = createTurtle()
const arc3 = arc2.arc(109, 11)

drawTurtles([arc1, arc3]); // draw it