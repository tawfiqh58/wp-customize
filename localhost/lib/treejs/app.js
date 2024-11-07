// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create airplane model
const airplaneGeometry = new THREE.BoxGeometry(1, 0.2, 0.2);
const airplaneMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const airplane = new THREE.Mesh(airplaneGeometry, airplaneMaterial);
scene.add(airplane);

// Set initial camera position
camera.position.z = 5;

// Handle scroll animation
function animateAirplaneOnScroll() {
    const scrollY = window.scrollY;

    // Adjust airplane position based on scroll
    airplane.position.x = scrollY * 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Listen for scroll events
window.addEventListener('scroll', animateAirplaneOnScroll);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    animateAirplaneOnScroll();
}

// Start the animation loop
animate();
