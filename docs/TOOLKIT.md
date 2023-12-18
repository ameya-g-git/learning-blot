# Welcome to Blot

This is Blot's programmatic art IDE. For an introduction to the editor watch this video (coming soon!).

### Turtle

Our main drawing primative is a turtle. It's a collection of polylines with an associated pen that has a location and direction.

```js
const t = createTurtle();

// move turtle up and down
t.up()
t.down()

// draw paths
t.goTo([ x: number, y: number ])
t.forward(distance: number)
t.arc(angle: number, radius: number)

// to move to pt without drawing and end up in drawing position
t.jump([ x: number, y: number ])

// change angle
t.setAngle(theta: number)
t.right(theta: number)
t.left(theta: number)

// transform turtle path
// type pt = [ number, number ]
t.translate(from: pt, to: pt)
t.rotate(angle: number, origin: pt)
t.scale(factor: number, origin: pt)

// import svgs
t.fromSVG(svgString: string)

// Turtle special points and dimensions
/*
You can get 9 points of interest from the turtle as get methods.
l is left, r is right, c is center, b is bottom.
The points are as such.

lt -- ct -- rt
|     |     |
lc -- cc -- rc
|     |     |
lb -- cb -- rb

You can also get the start, end, width, and height
*/

t.lt
t.ct
t.rt
t.lc
t.cc
t.rc
t.lb
t.cb
t.rb
t.start
t.end

t.width
t.height

// to add turtles together
t.join(anotherTurtle)

// to apply a function to all pts in a turtle
// fn takes (pt, tValue) => { ... }
// return [ x, y ] to replace the old point value with the new one
// return "BREAK" to split path at that point
// return "REMOVE" to filter out that point
t.iteratePath(fn)

t.resample(resolution)

// takes value 0 - 1 and returns point that far along paths
t.interpolate(tValue)

// takes value 0 - 1 and returns angle that far along paths
t.getAngle(tValue)
```

<!-- 
displace
warp
bezierEasing
trim 
merge
getNormal
extrema
copy
-->

To render a turtle use `drawTurtles`, it takes a list of turtles to draw.

```js
drawTurtles([ turtles ])
```

You can drag in SVG's, and the interface will generate a turtle for it. Keep in mind that SVG's are often imported far too large, and will need to be scaled and translated.

### Randomness

```js
rand()
setRandSeed(seed: number)
randInRange(min: number, max: number)
randIntInRange(min: number, max: number)
```

### Noise

Noise is one of the most powerful tools for making proceduarally generated natural looking things. It can be thought of as smooth randomness.

```js
// y and z are optional
noise(
  [
    x: number,
    y: number,
    z: number
  ],
  {
    octaves = 4,
    falloff = 0.5
  }
)
```

Can be used like such

```js
noise([2, 3])
```

## Examples

To find examples check out [`/gallery`](/gallery).
