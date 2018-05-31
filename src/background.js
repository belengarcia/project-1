/*
1. Crear el constructor del bk (posición e imagen)
2. Prototipos del bk:
    - draw(): para que se pinte
    - move(): para que se mueva por siempre. 

*En un futuro: que el bk cambie según 
    -tiempo?
    -monedas conseguidas?
    

*/

function Background(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 9000;
    this.height = this.ctx.canvas.height;

    this.vBk = -5;

    this.img = new Image();
    this.img.src = 'img/bk2.png'
    }

Background.prototype.draw = function() {
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
    )
}

Background.prototype.moveForward = function() {
    this.x += this.vBk;
    if (this.x + this.ctx.canvas.width === this.ctx.canvas.width){
        debugger;
    }
}
Background.prototype.moveBackwards = function() {
    this.x -= this.vBk;
}