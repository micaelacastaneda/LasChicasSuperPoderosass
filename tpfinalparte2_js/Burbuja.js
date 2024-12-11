class Burbuja {
    constructor() {
        this.b = img[4];
        this.posX = 300;
        this.posY = 400;
        this.tam = 30;
        this.bala = new Ataques();
        this.vida = 3;
    }


    actualizar() {
        this.moverB(keyCode);


    }

    dibujar() {
        this.bala.dibujar();
        ellipse(this.posX, this.posY, this.tam);
        image(this.b, this.posX, this.posY, 70, 80);
    }

    moverB(keyCode) {
        if (keyCode === 65) { // tecla 'A'
            this.moverIzquierda();
        } else if (keyCode === 68) { // tecla 'D'
            this.moverDerecha();
        } else if (keyCode === ENTER) {
            this.dispararBala();
        }
    }

    moverIzquierda() {
        if (this.posX > this.tam) {
            this.posX -= 15;
        }
    }

    moverDerecha() {
        if (this.posX < width - this.tam) {
            this.posX += 15;
        }
    }

    dispararBala() {
        this.bala = new Ataques(this.posX, this.posY);
        this.bala.disparar();
    }

colisionDisparo() {
  this.vida--; // resta vida a B
  if (this.vida <= 0) {
    this.vida = 0;

  }
}

}
