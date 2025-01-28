const {Engine, Body, Bodies, World, Composite, Render, Runner} = Matter;

let engine;
let world;
let render;
let runner;
let box;
let circle1;
let circle2;
let floor;

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

    let floor = Bodies.rectangle(300, 600, 600, 60, { isStatic: true });
    Composite.add(engine.world, floor);

    let wall_left = Bodies.rectangle(3, 300, 6, 600, { isStatic: true });
    let wall_right = Bodies.rectangle(597, 300, 6, 600, { isStatic: true });
    Composite.add(engine.world, wall_left);
    Composite.add(engine.world, wall_right);


    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, engine);

    // delay 3 seconds then add a new circle
    setTimeout(() => {
        circle2 = Bodies.circle(220, 100, 75, {
            density: 0.042,
            friction: 0.1,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: 'blue',
                strokeStyle: 'black',
                lineWidth: 1
            }
        });
        Composite.add(engine.world, circle2);
        // delay 9 seconds then add a new box
        setTimeout(() => {
            Composite.remove(engine.world, circle2);
        }, 2000);
    }, 3000);

    // delay 6 seconds then add a remove the circles and box
    setTimeout(() => {
        Composite.remove(engine.world, box);
        Composite.remove(engine.world, circle1);
    }, 5000);

}

window.addEventListener('load', function() {
    setup();
});