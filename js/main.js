

const {Engine, Body, Bodies, World, Composite, Render, Runner} = Matter;

let engine;
let render;

function setuo() {
    noCanvas();
    engine = Engine.create();
    render = Render.create({
        element: document.body,
        engine: engine
    });
}

