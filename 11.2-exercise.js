// 11.2-exercise.js
//
// Constructs a line pattern using iteration
// and four looped functions which are (sort of)
// inverses of one another
//

// set up some starting variables and constants
let linestartX = 1;
let linestartY = 1;
let lineendX = 400;
let lineendY = 1;

// setup
function setup() {
	createCanvas(800, 600);
    background(0);
// this loop iteration makes green lines
    stroke(0, 255, 0)
// stroke weight will be same for all four loop iterations
    strokeWeight(3)
// first loop iteration
    for (x = 0; x <= 50; x = x + 1) {
        line(linestartX, linestartY, lineendX, lineendY);
        linestartX = linestartX + 5;
        linestartY = linestartY + 15;
//      For this loop lineendX stays stationary
        lineendY = lineendY + 30;
    }

// reset our starting points
    linestartX = 401;
    linestartY = 1;
    lineendX = 800;
    lineendY = 1;
// this loop iteration makes yellow lines
    stroke(240, 240, 0)
// second loop iteration
    for (x = 0; x <= 50; x = x + 1) {
        line(linestartX, linestartY, lineendX, lineendY);
        linestartY = linestartY + 30;
        lineendX = lineendX - 5;
        lineendY = lineendY + 15;
    }

// reset our starting points again
    linestartX = 1;
    linestartY = 599;
    lineendX = 198;
    lineendY = 599;
// this loop iteration makes red lines
    stroke(255, 0, 0)
// third loop iteration
    for (x = 0; x <= 50; x = x + 1) {
        line(linestartX, linestartY, lineendX, lineendY);
//      For this loop linestartX stays stationary
        linestartY = linestartY - 5;
        lineendX = lineendX - 5;
        lineendY = lineendY - 15;
    }

// reset our starting points for the last time
    linestartX = 603;
    linestartY = 599;
    lineendX = 800;
    lineendY = 599;
// this loop iteration makes blue lines
    stroke(0, 0, 255)
// fourth and final loop iteration
    for (x = 0; x <= 50; x = x + 1) {
        line(linestartX, linestartY, lineendX, lineendY);
        linestartX = linestartX + 5;
        linestartY = linestartY - 15;
//      For this loop lineendX stays stationary
        lineendY = lineendY - 5;
    }
}
