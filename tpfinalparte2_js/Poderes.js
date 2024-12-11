class Poderes {
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.velY = 6;
    this.disparada = false;
    this.radio = 30; //radiodel poder de M
  }
  
  dibujar(){
    if(this.disparada){ //pantalla
      fill(0);
      ellipse(this.posX, this.posY, 15, 15); //diametro
      image(img[6], this.posX, this.posY);
      this.mover();
    }
  }
  
  mover(){
    this.posY += this.velY; //mover vertical
  }
  
  disparar(){
    this.disparada = true; //es true y debe ser dibujado
  }
}
