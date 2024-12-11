class Ataques {
  
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
    this.radio = 2; 
  }
  
  dibujar(){
    if(this.disparada){
      fill(255);
      ellipse(this.posX, this.posY, 5, 5);
      image(img[7], this.posX, this.posY); 
      this.moverBala();
    }
  }
  
  moverBala(){
    this.posY -= 10;
  }
  
  disparar(){
    this.disparada = true;
  }
}
