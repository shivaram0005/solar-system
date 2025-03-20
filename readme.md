### How to run the file
 - Download the zip file from the github.
- open the project in Vscode.
 - install the live-server extension if you haven't already.
 - Right-click index.html and select open with live server.






 ### Sun & Planets Creation:

- The sun is modeled using SphereGeometry and emits light using PointLight.

- Planets are also created with SphereGeometry, each assigned a unique size, color, and distance from the sun.

### Orbital Motion (Revolution):

- Each planet follows a circular orbit calculated with:

- The angle (planet.angle) increases based on the planet’s speed, making each planet orbit at a unique rate.

### Planet Rotation:

- Each planet rotates on its axis while orbiting:

- Camera & User Controls:

- The camera is placed at a distance for an optimal view.

- OrbitControls allows users to rotate, zoom, and pan around the scene.

### Lighting Effects:

- A PointLight at the sun's position simulates sunlight.

- An AmbientLight ensures planets remain visible from all angles.