import { TextureLoader, Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { scene } from "../scene/scene";

const izzyTexture = new TextureLoader().load("textures/izzy.jpeg");
const photoCube = new Mesh(
  new BoxGeometry(3, 3, 3),
  new MeshBasicMaterial({ map: izzyTexture })
);

export function loadPhotoCube() {
  photoCube.position.setZ(20);
  photoCube.position.setX(-15);
  photoCube.position.setY(15);
  scene.add(photoCube);
}

export function animatePhotoCube() {
  photoCube.rotation.y += 0.005;
}
