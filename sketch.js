

let walls = [];
let ray;
let particle;

function setup () {
    createCanvas(400, 400)
    for (let i = 0; i < 5; i++) {
        const x1 = random(width)
        const x2 = random(width)
        const y1 = random(height)
        const y2 = random(height)
        walls.push(new Boundary(x1 ,y1, x2, y2))
    }

    walls.push(new Boundary(0, 0, width, 0))
    walls.push(new Boundary(width, 0, width, height))
    walls.push(new Boundary(width, height, 0, height))
    walls.push(new Boundary(0,height, 0, 0))

    particle = new Particle()
}

function draw () {
    background(0)
    for (let wall of walls) {
        wall.show()
    }
    particle.update(mouseX, mouseY)
    particle.show()
    particle.look(walls)
}