import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "./Entity";
interface ProjectOptions {
    useOrbitControls?: boolean;
}
export declare class Project {
    options: ProjectOptions;
    _rootElement: HTMLElement;
    _renderer: THREE.WebGLRenderer;
    _scene: THREE.Scene;
    _camera: THREE.PerspectiveCamera;
    _orbitControls: OrbitControls | null;
    _children: Entity[];
    constructor(rootElement: HTMLElement | string, options?: ProjectOptions);
    private createRenderer;
    private createCamera;
    private createScene;
    AddChild(child: Entity): void;
    private removeChild;
    private update;
    get Camera(): THREE.PerspectiveCamera;
}
export {};