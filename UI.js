export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Creepster";
        this.livesImage = document.getElementById("lives");
    }

    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "white";
        context.shadowBlur = 0;
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText("Score: " + this.game.score, 20, 50);
        // timer
        context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
        context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
        // player lives
        for (let i = 0; i<this.game.lives; i++) {
            context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);
        };
        // game over message
        if (this.game.gameOver) {
            context.textAlign = "center";
            context.font = this.fontSize * 2 + "px " + this.fontFamily;
            if (this.game.score > 5) {
                context.fillText("Boo-yah", this.game.width * 0.5, this.game.height * 0.5 - 20); 
                context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
                context.fillText("What are the creatures of the night afraid of? YOU!!", this.game.width * 0.7, this.game.height * 0.5 + 20);
            } else {
                context.font = this.fontSize * 1.5 + "px " + this.fontFamily;
                context.fillText("Love at first bite?? XD", this.game.width * 0.5, this.game.height * 0.5 - 20); 
                context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
                context.fillText("Nope, better luck next time! ;-)", this.game.width * 0.7, this.game.height * 0.5 + 20);
            }
        }
        context.restore();
    }
}