const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spreiteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameframe = 0; 
let staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    }, 
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    }, 
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    }, 
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    }, 
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    }, 
    {
        name: 'getHit',
        frames: 4
    }
];
// state is the var/arg used to loop thru objects.
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j=0; j<state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spreiteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames; 
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        //First 4 values describes we cut from the original sprite sheet.
        // The last 4 values dictats where we want to place the cut out part on the canvas.
    let position = Math.floor(gameframe / staggerFrames) % spriteAnimations['fall'].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations['idle'].loc[position].y;
    ctx.drawImage(playerImage, 0, 0, frameX * spriteWidth, frameY * spreiteHeight, 0, 0, spriteWidth, spreiteHeight);

    gameframe++;
    requestAnimationFrame(animate);
};
animate();
