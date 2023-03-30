import * as THREE from "three";
import { scene } from "./scene";

export function loadBackground() {
  const spaceTexture = new THREE.TextureLoader().load("textures/space.jpeg");
  scene.background = spaceTexture;
}
