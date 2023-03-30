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
import {
  animatePhotoCube,
  loadPhotoCube,
} from "./src/components/objects/photoCube";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { populateStars } from "./src/components/objects/star";
import { loadMoon, animateMoon } from "./src/components/objects/moon";

renderer.render(scene, camera);

//enable mouse controls over scene
const controls = new OrbitControls(camera, renderer.domElement);

//////
// TODO make background work
loadBackground();

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(torus);
scene.add(ambientLight, pointLight);
scene.add(pointLightHelper, gridHelper);

loadPhotoCube();
loadMoon();
populateStars(200);

function animate() {
  requestAnimationFrame(animate);
  animateTorus();
  animatePhotoCube();
  animateMoon();
  renderer.render(scene, camera);
}

animate();
