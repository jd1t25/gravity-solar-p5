let sun;
let planets = [];
let G = 0.1;
let speed = 4;
let addRadius = 100;

class Planet {
  constructor(x, y, radius, color, mass, velocity) {
    this.pos = createVector(x, y);
    this.mass = mass;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity || createVector(0, 0);
    this.trail = [];
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.pos.x, this.pos.y, this.radius);

    stroke(this.color);
    strokeWeight(1);
    for (let i = 0; i < this.trail.length - 1; i++) {
      line(
        this.trail[i].x,
        this.trail[i].y,
        this.trail[i + 1].x,
        this.trail[i + 1].y,
      );
    }
    strokeWeight(1);
  }

  update(planets) {
    this.trail.push(this.pos.copy());

    // Limit the length of the trail
    if (this.trail.length > 1000) {
      this.trail.shift(); // Remove the oldest position
    }

    // Only affecting with sun

    // let force = this.gravity(sun);

    // Planet affecting each other
    let force = createVector(0, 0);
    for (let planet of planets) {
      if (planet !== this) {
        let planetForce = this.gravity(planet);
        force.add(planetForce);
      }
    }

    this.velocity.add(force.mult(1 / this.mass));
    this.pos.add(this.velocity);
  }

  gravity(other) {
    let distance = p5.Vector.sub(other.pos, this.pos);
    let distanceSQ = constrain(distance.magSq(), 100, 10000);
    let forceMag = (G * this.mass * other.mass) / distanceSQ;

    let force = distance.copy().normalize().mult(forceMag);
    return force;
  }
}

// setip Function

function setup() {
  createCanvas(600, 600);
  sun = new Planet(width / 2, height / 2, 50, color(255, 204, 0), 100); // Scaled mass for the sun

  let distanceFromSun = 200; // You can adjust this value

  // Create planets with different starting angles
  for (let i = 0; i < 4; i++) {
    let radius = random(5, 15); // Random radius for the planet
    let mass = random(0.005, 3.2); // Random mass for the planet

    // Random angle for the initial position (in radians)
    let angle = random(TWO_PI); // Random angle between 0 and 2π
    let x = width / 2 + cos(angle) * distanceFromSun;
    let y = height / 2 + sin(angle) * distanceFromSun;

    let velocity = createVector(
      0,
      1.5 * sqrt((G * sun.mass) / distanceFromSun),
    ); // Initial velocity

    planets.push(
      new Planet(
        x,
        y,
        radius,
        color(random(255), random(255), random(255)),
        mass,
        velocity,
      ),
    );
  }
  // planets with scaled-down masses and velocities
  // planets.push(
  //   new Planet(
  //     width / 2 + 200,
  //     height / 2,
  //     5,
  //     color(150, 150, 150),
  //     0.05,
  //     createVector(0, speed * sqrt((G * sun.mass) / 200)),
  //   ),
  // );
  // planets.push(
  //   new Planet(
  //     width / 2 + 300,
  //     height / 2,
  //     10,
  //     color(0, 0, 255),
  //     1,
  //     createVector(0, speed * sqrt((G * sun.mass) / 300)),
  //   ),
  // );
  // planets.push(
  //   new Planet(
  //     width / 2 + 400,
  //     height / 2,
  //     15,
  //     color(255, 0, 0),
  //     3.2,
  //     createVector(0, speed * sqrt((G * sun.mass) / 400)),
  //   ),
  // );
  // planets.push(
  //   new Planet(
  //     width / 2 + 500,
  //     height / 2,
  //     3,
  //     color(255, 255, 255),
  //     0.005,
  //     createVector(0, speed * sqrt((G * sun.mass) / 500)),
  //   ),
  // );
  frameRate(30);
  createLoop({
    duration: 1,
    gif: {
      download: true,
      filename: "test.gif",
    },
  });
}

// Draw Function
function draw() {
  background(0);
  sun.display();

  for (let i = 0; i < speed; i++) {
    for (let planet of planets) {
      planet.update([sun, ...planets]);
    }
  }

  for (let planet of planets) {
    planet.display();
  }
}
