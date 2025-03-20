// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls (Ensure the CDN is Loaded)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2, 100);
scene.add(sunLight);

// Create Sun
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Planets Data
const planetsData = [
  { name: "Mercury", radius: 0.5, distance: 8, color: 0xaaaaaa, speed: 0.04 },
  { name: "Venus", radius: 1.2, distance: 12, color: 0xffcc88, speed: 0.03 },
  { name: "Earth", radius: 1.3, distance: 16, color: 0x3399ff, speed: 0.02 },
  { name: "Mars", radius: 0.8, distance: 20, color: 0xff4422, speed: 0.015 },
  { name: "Jupiter", radius: 3, distance: 30, color: 0xffaa77, speed: 0.01 },
  { name: "Saturn", radius: 2.7, distance: 40, color: 0xffdd99, speed: 0.008 },
  { name: "Uranus", radius: 2, distance: 50, color: 0x66ccff, speed: 0.005 },
  { name: "Neptune", radius: 1.9, distance: 60, color: 0x3366cc, speed: 0.004 },
];

// Create Planets
const planets = [];
planetsData.forEach((data) => {
  const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: data.color });
  const planet = new THREE.Mesh(geometry, material);
  planet.position.set(data.distance, 0, 0);
  scene.add(planet);
  planets.push({ mesh: planet, ...data, angle: Math.random() * Math.PI * 2 });
});

// Position Camera
camera.position.set(0, 20, 80);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Update planets movement
  planets.forEach((planet) => {
    planet.angle += planet.speed;
    planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
    planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
    planet.mesh.rotation.y += 0.01; // Planet rotation
  });

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
