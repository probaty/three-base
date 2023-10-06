import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "./Entity";
import { EntityController } from "./EntityController";

interface ProjectOptions {
  useOrbitControls?: boolean;
}

export class Project {
  _rootElement!: HTMLElement;
  _renderer!: THREE.WebGLRenderer;
  _scene!: THREE.Scene;
  _camera!: THREE.PerspectiveCamera;
  _orbitControls: OrbitControls | null = null;
  _entityController: EntityController = new EntityController();
  _prevTime: number | null = null;

  constructor(
    rootElement: HTMLElement | string,
    public options: ProjectOptions = {}
  ) {
    if (typeof rootElement === "string") {
      const element = document.querySelector(rootElement) as HTMLElement;
      if (!element) {
        throw new Error("Could not find root element");
      }
      this._rootElement = element;
    } else {
      this._rootElement = rootElement;
    }

    this.createCamera();
    this.createRenderer();
    this.createScene();

    this.update();
  }

  private createRenderer() {
    this._renderer = new THREE.WebGLRenderer();
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    this._renderer.outputColorSpace = THREE.SRGBColorSpace;
    this._renderer.shadowMap.enabled = true;
    this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    window.addEventListener("resize", () => {
      this._renderer.setSize(window.innerWidth, window.innerHeight);
      this._camera.aspect = window.innerWidth / window.innerHeight;
      this._camera.updateProjectionMatrix();
      if (this._orbitControls) {
        this._orbitControls.update();
      }
    });
  }

  private createCamera() {
    this._camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    if (this.options.useOrbitControls) {
      this._orbitControls = new OrbitControls(
        this._camera,
        this._renderer.domElement
      );
    }
  }

  private createScene() {
    this._scene = new THREE.Scene();
  }

  public AddChild(child: Entity, name?: string) {
    this._entityController.Add(child, name);
  }

  private removeChild(name: string) {
    this._entityController.Remove(name);
  }

  private update() {
    requestAnimationFrame((time) => {
      if (!this._prevTime) {
        this._prevTime = time;
      }
      this.update();
      this.step(time - this._prevTime);
      this._renderer.render(this._scene, this._camera);
      this._prevTime = time;
    });
  }

  private step(timeElapsed: number) {
    const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);
    this._entityController.Update(timeElapsedS);
  }
  get Camera(): THREE.PerspectiveCamera {
    return this._camera;
  }
}
