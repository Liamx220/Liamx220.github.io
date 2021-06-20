import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const loader = new GLTFLoader();
let laptop;
loader.load( 'Laptop_01.gltf', function (gltf) {
  laptop = gltf.scene.children[0];
  
	scene.add( gltf.scene );
  laptop.scale.set(0.05,0.05,0.05);
  laptop.position.z = 17;
  laptop.position.setX(-9);
  laptop.position.setY(-0.2);

});

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(650).fill().forEach(addStar);


const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avatar

const liamTexture = new THREE.TextureLoader().load('astro.png');

const liam = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: liamTexture }));

scene.add(liam);

// earth

const earthTexture = new THREE.TextureLoader().load('earth.jpeg');


const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture
    
  })
);

scene.add(earth);

earth.position.z = 2;
earth.position.setX(-10);



//baseball
const baseballTexture = new THREE.TextureLoader().load('baseball.jpg');


const baseball = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: baseballTexture
    
  })
);

scene.add(baseball);

baseball.position.z = 28;
baseball.position.setX(-10);

//mercury


liam.position.z = -5;
liam.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  //earth.rotation.x += 0.05;
  earth.rotation.y += 0.01;
  //earth.rotation.z += 0.05;

  liam.rotation.y += 0.01;
  //liam.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

 
  
  earth.rotation.y += 0.005;
  
  baseball.rotation.y += 0.005;
 
  laptop.rotation.y += 0.005;
  //laptop.rotation.x += 0.005;
  // controls.update();

  renderer.render(scene, camera);
}

animate();
