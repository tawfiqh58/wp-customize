document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
        window.innerWidth / -2, window.innerWidth / 2,
        window.innerHeight / 2, window.innerHeight / -2, 1, 1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('animated-gradient').appendChild(renderer.domElement);

    const geometry = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
            vec3 color = vec3(vUv, 0.5 + 0.5 * sin(uTime));
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const uniforms = {
        uTime: { value: 0.0 }
    };

    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    function animate(time) {
        uniforms.uTime.value = time * 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
});
