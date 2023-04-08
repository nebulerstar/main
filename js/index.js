import * as THREE from 'three';
function init() {
    
    let scene = new THREE.Scene();
    
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    
    camera.position.set(0, 0, 10);
    
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    
    document.body.appendChild(renderer.domElement);

    function tick() {
        requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();
}
init();