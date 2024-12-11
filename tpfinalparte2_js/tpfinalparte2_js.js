//castañeda micaela comision 2
//93566/6  explicacion: 

let juego;
let img = [];
let creditos = [];
let sonido = [];

function preload() {
    for (let i = 0; i < 9; i++) {
        img[i] = loadImage('libraries/img' + i + '.png');
    }
    creditos = loadStrings("libraries/creditos.txt");
}

function setup() {
    createCanvas(640, 480);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    imageMode(CENTER);
    juego = new Juego(img, creditos);
}

function draw() { //metodos
    background(220);
    juego.actualizar();
    juego.dibujar();
}

function keyPressed() {
    juego.moverB(keyCode);
    juego.cambioP(keyCode);
}
