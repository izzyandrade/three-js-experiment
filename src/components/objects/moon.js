import {
  TextureLoader,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  Sphere,
} from "three";
import { scene } from "../scene/scene";

const moonTexture = new TextureLoader().load("textures/moon.jpeg");
const moonNormalTexture = new TextureLoader().load("textures/moon-normal.jpeg");
const moon = new Mesh(
  new SphereGeometry(5, 32, 32),
  new MeshStandardMaterial({ map: moonTexture, normalMap: moonNormalTexture })
);

export function loadMoon() {
  scene.add(moon);
}

export function animateMoon() {
  moon.rotation.y += 0.005;
}
