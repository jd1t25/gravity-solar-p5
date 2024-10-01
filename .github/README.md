# gravity-solar-p5

2D gravity nearly correct simulation using p5js

Just some fun project in free time where i wanted to learn p5js and wanted to create this {}.
_Mass and Gravity is tone down_

_If i made a mistake or want to know anything, feel free to open an issue_

# Solar System Simulation

_Only Sun Excerting Gravity (Fixed Position of Planets)_
![Only Sun Excerting Gravity (Fixed Position of Planets)](./assets/only_sun.gif)

_Gravity Exerting by Planets as well (Random Position of Planets)_
![Gravity Exerting by Planets as well (Random Position of Planets)](./assets/planets.gif)

## Overview

This project is a 2D simulation of a solar system using p5.js.

- Planets are initialized at random angles and distances.
- A trailing effect for planets to visualize their paths.
- The simulation speed can be adjusted for a faster or slower experience.

## Physics Concepts

Just if anyone wants to recreate this.
This simulation is based on fundamental concepts of classical mechanics, particularly Newton's Law of Universal Gravitation and the principles of orbital motion.

### Key Concepts

1. **Gravitational Force**:
   \[
   F = \frac{G \cdot m_1 \cdot m_2}{r^2}
   \]

   Where:

   - \( F \) is the gravitational force,
   - \( G \) is the gravitational constant,
   - \( m_1 \) and \( m_2 \) are the masses of the objects,
   - \( r \) is the distance between the centers of the two masses.

2. **Velocity and Orbital Motion**:
   The velocity required for a planet to maintain its orbit can be derived from the gravitational force equation. For a circular orbit, the gravitational force provides the necessary centripetal force:

   \[
   v = \sqrt{\frac{G \cdot M}{r}}
   \]

   Where:

   - \( v \) is the orbital velocity,
   - \( M \) is the mass of the central body (sun),
   - \( r \) is the distance from the center of the mass to the orbiting planet.

## Code Explanation

- **Planet Class**: Represents each planet with properties for position, mass, radius, color, velocity, and a trail of previous positions. The `update` method calculates the new position based on gravitational forces.
- **Gravity Calculation**: The `gravity` method computes the gravitational force exerted on the planet by another mass, adjusting its velocity accordingly.

- **Setup and Draw Functions**:
  - The `setup` function initializes the canvas and creates the sun and planets.
  - The `draw` function updates and displays the planets in each frame, allowing for smooth animation.

## Getting Started

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Adjust the speed and observe the planets' movements! (_Wow_ ...in the voice of Owen Wilson)

## License

This project is licensed under the MIT License. Feel free to modify and use the code as you wish.
