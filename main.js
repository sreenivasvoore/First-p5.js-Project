function preload() {
    
}

function setup() {
    
}

function draw() {
    canvas = createCanvas(1792,881);
    fill('#222222');
    rect(889, 140, 150, 400)
    rect(935, 540, 55, 75);

    fill('red');
    ellipse(965, 208, 100, 100);
    fill('orange');
    ellipse(965, 318, 100, 100);
    fill('green');
    ellipse(965, 428, 100, 100);
    
    fill('black')
    rect(0, 665, 1792, 665);

    fill('white')
    rect(60, 750, 200, 55);
    rect(360, 750, 200, 55);
    rect(660, 750, 200, 55);
    rect(960, 750, 200, 55);
    rect(1260, 750, 200, 55);
    rect(1560, 750, 200, 55);
}