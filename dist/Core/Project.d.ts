import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "./Entity";
import { EntityController } from "./EntityController";
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
    _entityController: EntityController;
    _prevTime: number | null;
    constructor(rootElement: HTMLElement | string, options?: ProjectOptions);
    private createRenderer;
    private createCamera;
    private createScene;
    AddChild(child: Entity, name?: string): void;
    private removeChild;
    private update;
    private step;
    get Camera(): THREE.PerspectiveCamera;
}
export {};
