import * as THREE from "three";

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xf73be1,
});
export const torus = new THREE.Mesh(geometry, material);

export function animateTorus() {
  torus.rotation.y += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.z += 0;
}
