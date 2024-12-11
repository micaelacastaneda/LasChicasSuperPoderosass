
class Monstruo {
    constructor(posX, posY, velX) {
        this.posX = posX;
        this.posY = posY;
        this.tam = 20;
        this.velM = 40;
        this.tiempo = 0;
        this.r = this.tam / 2;
        this.velX = velX;
        this.direccion = 1;
        this.Poderes = [];
        this.vida = 5;
        this.img = img[5];
    }

    actualizar() {
        this.tiempo++;
        this.posX += this.velX * this.direccion;
        if (this.posX > width - this.r || this.posX < this.r) {
            this.direccion = -this.direccion;
        }
        if (this.tiempo >= this.velM) {
            this.tirarPoderes();
            this.tiempo = 0;
        }
    }

    dibujar() {
        fill(255);
        ellipse(this.posX, this.posY, this.tam); //posicion monstruo
        image(this.img, this.posX, this.posY, 80, 70);
        for (let i = 0; i < this.Poderes.length; i++) {
            this.Poderes[i].dibujar();
        }
    }

    tirarPoderes() {
        let poder = new Poderes(this.posX, this.posY);
        poder.disparar();
        this.Poderes.push(poder); //dibujar proyectil en poder arreglo
    }

colisionDisparo() {
  this.vida--; // resta vida a M
  if (this.vida <= 0) {
    this.vida = 0;

  }
}

}
