function Obstacle(ctx, x, y, width, height) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    
    this.width = width;
    this.height = height;
}

//  Obstacle.prototype.draw = function() {
//     this.ctx.fillRect(
//         this.x,
//         this.y,
//         this.width, 
//         this.height);
//  };

Obstacle.prototype.collide = function(mario) {

    return !(
        this.x + this.width  < mario.x || 
        mario.x + mario.width < this.x ||
        this.y + this.height < mario.y ||
        mario.y + mario.height < this.y
    );
 };

