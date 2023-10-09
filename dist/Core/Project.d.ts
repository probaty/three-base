import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "./Entity";
import { EntityController } from "./EntityController";
export interface ProjectOptions {
    useOrbitControls?: boolean;
}
export declare class Project {
    options: ProjectOptions;
    protected _rootElement: HTMLElement;
    protected _renderer: THREE.WebGLRenderer;
    protected _scene: THREE.Scene;
    protected _camera: THREE.PerspectiveCamera;
    protected _orbitControls: OrbitControls | null;
    protected _entityController: EntityController;
    protected _prevTime: number | null;
    constructor(rootElement: HTMLElement | string, options?: ProjectOptions);
    private createRenderer;
    private createCamera;
    private createScene;
    private onWindowResize;
    AddChild(child: Entity, name?: string): void;
    private removeChild;
    private update;
    private step;
    get Camera(): THREE.PerspectiveCamera;
}
