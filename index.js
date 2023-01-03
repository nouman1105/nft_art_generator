const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const drawLayer = async () => {
    const image = await loadImage('eye_ball.png');
    ctx.drawImage(image, 0, 0, 1000, 1000);
}

drawLayer();
