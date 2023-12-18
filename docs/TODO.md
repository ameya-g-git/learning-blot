# So many things TODO

There are many tasks left in the development of our drawing machine which will become one of the best ways to get into digital fabrication. We are rethinking and remaking how hackable these types of machines can be with the [Modular Things project](https://github.com/modular-things/modular-things). Tasks range from [mechanical design](#mechanical), to [low-level firmware](#firmware), and [high-level interfaces](#editor).

Below is a list of various things we are working on, and ways you can engage with the tasks at hand or the associated concepts.

## Hardware

### Mechanical

~~**Design a pen holder.**
We still need to finalize the part that makes this machine a drawing machine, the pen holder!
We put out an open challange to help with this which you can find [here](https://gist.github.com/exu3/e5c1469467667c8790b3f5bda7172f39).~~

**Build your own machine.**
You can already build your own machine if you have access to a 3D printer.
The [bill of materials can be found here](https://github.com/hackclub/drawing-thing/tree/main/drawing-thing-v2).

### Electrical

> The Modular Things hardware repo is at https://github.com/modular-things/modular-things-circuits.

**Remake the circuits in SVG-PCB.**
The [circuits used in the system are designed here](https://github.com/modular-things/modular-things-circuits).
I would love to see people remake the circuit designs in [SVG-PCB](https://leomcelroy.com/svg-pcb-website/#/home).

**Create a board-to-board link layer.**
We don't have anyway to connect boards to each other. Right now they are all connected to the computer through USB.

**Create a [bus](<https://en.wikipedia.org/wiki/Bus_(computing)>).**
Currently our system uses point-to-point connections.
It would be more efficient to design a bus (one-to-many connection) for modular things.
Some thoughts on [bus design for modular things are available here](https://github.com/modular-things/modular-bus).

## Software

> The software can be found at https://github.com/modular-things/modular-things.

### Firmware

**Sequential motor control.**
https://github.com/modular-things/modular-things/blob/main/src/lib/virtualThings/synchronizer.js
We need smoother motion for our machine.
Right now we stop at each corner; it would be better to interpolate between them.

**Klipper Style Motion Planning**

**Clean up OSAP the networking library.**
https://github.com/modular-things/modular-things/tree/main/src/lib/osapjs
Jake and Leo are working on making OSAP more comprehensible.
Leo made a [toy implementaion recreating some of OSAP's functionality](https://github.com/modular-things/nosap).
Making a visualizer for OSAP networks would be a great project.

### Editor

**Add console to the editor.**
Right now when you run a program in the editor it runs everything.
A console would allow you to run select functions and also log outputs.
[@pranavnt](https://github.com/pranavnt) is working on this.

**Create interface to drawing machine in the modular things editor.**
Here is some [skeleton for an interface](https://github.com/modular-things/modular-things/blob/main/examples/machine-interface.js) which isn't hooked up to any machine.

## Engagement (Interaction Mode/Handles)

**Make a parametric art generator.**
You can also get started working on generative design and pen plotting.
[Drawingbots](https://drawingbots.net/) is a good resource.
Specifically the [tool section](https://drawingbots.net/knowledge/tools) has a bunch of programs for making plottable patterns.

**Make some parametric art.**
Make some generative art which could be drawn by a plotter. For some examples of this check out [the blogs linked at the bottom](#general-inspiration).

Last year I made a [basic Turtle drawing editor](https://microworlds.hackclub.dev/?file=turtle) as part of the microworld project at Hack Club. As an aside the idea with this project was to create a series of workshops in the form of [microworlds](<https://en.wikipedia.org/wiki/Mindstorms_(book)>). These workshops integrated a small library for making a specific type of thing, a live-editor and visualizer for that library, documentation, and some easy sharing tools.

The Sprig editor is another microworld and we'll almost certainly make one for this project too.

**Gallery for parametric generators and art.**
_Functional_ designs and generators with coherent and consistent interfaces.
Something like [Printables](https://printables.com) but with the source for the designs available.

### Weekly Updates

Each week or so we post an update to our [`CHANGELOG.md`](./CHANGELOG.md).

## General Inspiration

Here are some blogs about plotting which are worth checking out:

- https://revdancatt.com/
- https://penplotterartwork.com/
- https://greweb.me/
- https://targz.fr/
- https://larswander.com/
- https://www.v3ga.net/
- https://bylr.info/
- http://andymakes.com/#Plotter
- https://www.eyesofpanda.com/
- https://mattdesl.svbtle.com/pen-plotter-1
- https://muffinman.io/art/
