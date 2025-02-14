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


    box = Bodies.rectangle(100, 100, 16, 80);

    box.render.strokeStyle = 'black';
    box.render.lineWidth = 10;


    Composite.add(engine.world, box);


    circle1 = Bodies.circle(220, 100, 75, {
        density: 0.042,
        friction: 0.1,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'red',
            strokeStyle: 'black',
            strokeWidth: '5px'
        }
    });

    //Composite.add(engine.world, circle1);

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
            // Composite.add(engine.world, circle1);
            // Composite.remove(engine.world, circle2);
            Composite.remove(engine.world, circle2);
            addFiveBooks();
        }, 2000);
    }, 3000);

    // delay 6 seconds then add a remove the circles and box
    setTimeout(() => {
        Composite.remove(engine.world, box);
        Composite.remove(engine.world, circle1);
    }, 5000);

}

function addFiveBooks() {
    let width = 20 + (Math.floor(Math.random() * 8) - Math.floor(Math.random() * 8))
    let currentX = 100;
    for (let i = 0; i < 21; i++) {
        createBooks(width, 100 + Math.floor(Math.random() * 8), currentX, 100);
        currentX += width + 4;
    }
}

function createBooks(width, height, x, y) {
    let book = Bodies.rectangle(x, y, width, height);
    book.render.lineWidth = 2;
    book.render.outline = true;
    Composite.add(engine.world, book);
}

window.addEventListener('load', function() {
    setup();
});