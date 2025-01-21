const {Engine, Body, Bodies, World, Composite, Render, Runner} = Matter;

let engine;
let world;
let render;
let runner;
let box;
let circle1;

// const canvasEl = document.getElementById('world')

function setup() {
   // noCanvas();
    engine = Matter.Engine.create();
    world = engine.world;
    render = Matter.Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 600,
            height: 600,
            outline: true,
            wireframes: false,
            background: 'transparent',
            showAngleIndicator: false,
            // canvas: canvasEl,
        },
    });


    box = Bodies.rectangle(100, 100, 80, 80);

    Composite.add(engine.world, box);

    circle1 = Bodies.circle(220, 100, 75, {
        density: 0.042,
        friction: 0.1,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'red',
            strokeStyle: 'black',
            lineWidth: 1
        }
    });

    Composite.add(engine.world, circle1);


    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, engine);
}

window.addEventListener('load', function() {
    setup();
});