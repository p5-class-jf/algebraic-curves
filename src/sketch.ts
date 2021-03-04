// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    y: 0.559,
    Download_Image: () => save(),
}
gui.add(params, "y", 0, 10, 0.001)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background(240)
    translate(width/2, height/2)
    strokeWeight(5)
    noFill()
    beginShape()
    for (let a = 0; a < TWO_PI; a += 0.01) {
        const y = sin(2 * a)
        const x = cos(5 * a) * tan(y*params.y)
        vertex(x * height * 0.3, y * height * 0.3)
    }
    endShape(CLOSE)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}