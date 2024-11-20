import * as THREE from 'three';
import { OrbitControls} from 'three/addons/controls/OrbitConrols.js';

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );



// init
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
camera.position.set(2, 2, 2,)
camera.lookAt(0, 0, 0)


const controls = new OrbitControls(camera, render.domElement);


const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00d000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//render loop
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(Window.innerWidth, window.innerHeight);
});

