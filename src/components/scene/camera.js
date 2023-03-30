import * as THREE from "three";

export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01 - 30;
  // camera.position.y = t * -0.01;
  camera.position.x = t * 0.005;
}

camera.position.setZ(-30);

document.body.onscroll = moveCamera;
