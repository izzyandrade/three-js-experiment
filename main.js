import "./style.css";
import * as THREE from "three";
import { renderer } from "./src/components/scene/renderer";
import { scene } from "./src/components/scene/scene";
import { camera } from "./src/components/scene/camera.js";
import { loadBackground } from "./src/components/scene/background";
import { torus, animateTorus } from "./src/components/objects/torus";
import {
  pointLight,
  pointLightHelper,
} from "./src/components/lights/pointLight";
import { ambientLight } from "./src/components/lights/ambientLight";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { populateStars, addStar } from "./src/components/objects/star";

renderer.render(scene, camera);

//////
// TODO make background work
// loadBackground();
// const spaceTexture = THREE.TextureLoader().load("./src/assets/space.jpeg");
// scene.background = spaceTexture;

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(torus);
scene.add(ambientLight, pointLight);
scene.add(pointLightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

populateStars(200);

function animate() {
  requestAnimationFrame(animate);
  animateTorus();
  renderer.render(scene, camera);
}

animate();
