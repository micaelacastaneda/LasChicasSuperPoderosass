class Juego {
    constructor(imgArray, creditosArray) {
        this.imgArray = imgArray;
        this.creditos = creditosArray;
        this.b = new Burbuja();
        this.m = new Monstruo(40, 150, 4);
        this.estado = "inicio";

        this.haOcurridoColision = false;
        this.tiempoCreditos = 0;
    }


    cambioP(keyCode) {
        // Implementar lo que se debe hacer cuando se presiona una tecla
        if (keyCode === 32) { // Ejemplo: Si presiona la barra espaciadora
            // Cambia el estado del juego o realiza alguna acción
            console.log('Tecla espacio presionada');
        }
    }

actualizar() {
    if (this.estado === "juego1") {
        this.m.actualizar();
        this.b.actualizar();
        this.colisionConAtaques();  // colisiones entre la bala de B y M
        this.colisionConPoder();    // colisiones entre los poderes de M y B


        if (this.b.vida === 0) {
            this.estado = "perdiste";
            this.tiempoCreditos = millis();  
        } else if (this.m.vida === 0) {
            this.estado = "ganaste";
            this.tiempoCreditos = millis(); 
        }
    }

    // 8 segs previos a pasar a la pantalla de creditos
    if ((this.estado === "perdiste" || this.estado === "ganaste") && millis() - this.tiempoCreditos >= 8000) {
        this.estado = "creditos"; 
    }
}




    dibujar() {
        if (this.estado === "inicio") {
            if (this.imgArray[0]) {
                image(this.imgArray[0], width / 2, height / 2);
            }
            if (key === ' ') {
                this.estado = "juego1";
            }
        } else if (this.estado === "juego1") {
            image(this.imgArray[3], width / 2, height / 2);
            this.b.dibujar();
            this.m.dibujar();

            fill(255);
            textSize(20);
            text(this.m.vida, 262, 45);
            text(this.b.vida, 445, 45);
        } else if (this.estado === "perdiste") {
            image(this.imgArray[2], width / 2, height / 2);
        } else if (this.estado === "ganaste") {
            image(this.imgArray[1], width / 2, height / 2);
        } else if (this.estado === "creditos") {
            image(this.imgArray[8], width / 2, height / 2);
            textSize(32);
            text(this.creditos[0], width /  2 - 180, height / 2 - 100);
            textSize(13);
            fill(60,75,157);
            text(this.creditos[1], width / 2 - 180, height / 2 - 30);
            text(this.creditos[2], width / 2- 190, height / 2 - 5);
            
            if (keyIsPressed && keyCode === ENTER) {
                this.resetearJuego();
            }
        }
    }

    moverB(keyCode) {
        if (this.estado === "juego1") {
            this.b.moverB(keyCode);
        }
    }

colisionConAtaques() {
  if (this.haOcurridoColision && dist(this.m.posX, this.m.posY, this.b.bala.posX, this.b.bala.posY) >= 25) {
    this.haOcurridoColision = false;
  }
  if (!this.haOcurridoColision && dist(this.m.posX, this.m.posY, this.b.bala.posX, this.b.bala.posY) < (this.m.r + this.b.bala.radio)) {
    this.m.colisionDisparo();  // resta vida a M
    this.haOcurridoColision = true; //ocurre colision
  }
}



colisionConPoder() {
  if (this.m && this.b) {
    for (let i = 0; i < this.m.Poderes.length; i++) {
      const poder = this.m.Poderes[i];
      
      // verific la distancia entre el centro de burbuja y el centro de un poder
      let distancia = dist(this.b.posX, this.b.posY, poder.posX, poder.posY);
      
      // sumar los radios de la Burbuja y el Poder
      let sumaRadios = (this.b.tam / 2) + poder.radio;
      
      if (distancia < sumaRadios) {
        this.b.colisionDisparo();  // resta vida
        this.m.Poderes.splice(i, 1);  //elmina poder i1
        break; // parar el bucle si ya ocurrió una colisión
      }
    }
  }
}

    resetearJuego() {
        this.b = new Burbuja();
        this.m = new Monstruo(40, 150, 4);
        this.estado = "inicio";
        this.contador = 0;
        this.haOcurridoColision = false;
    }
}
