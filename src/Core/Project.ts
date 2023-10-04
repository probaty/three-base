import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "./Entity";

interface ProjectOptions {
  useOrbitControls?: boolean;
}

export class Project {
  _rootElement!: HTMLElement;
  _renderer!: THREE.WebGLRenderer;
  _scene!: THREE.Scene;
  _camera!: THREE.PerspectiveCamera;
  _orbitControls: OrbitControls | null = null;
  _children: Entity[] = [];

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

    requestAnimationFrame((time) => {
      this.update(time);
    });
  }

  private createRenderer() {
    this._renderer = new THREE.WebGLRenderer();
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(window.innerWidth, window.innerHeight);

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

  public AddChild(child: Entity) {
    this._children.push(child);
  }

  private removeChild(child: Entity) {
    const index = this._children.indexOf(child);
    if (index !== -1) {
      this._children.splice(index, 1);
    }
  }

  private update(delta: number) {
    for (const child of this._children) {
      child.Update(delta);
    }
    this._renderer.render(this._scene, this._camera);
    requestAnimationFrame((time) => {
      this.update(time);
    });
  }

  public get Camera(): THREE.PerspectiveCamera {
    return this._camera;
  }
}
