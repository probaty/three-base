import * as THREE from "three";
import { Entity } from "./Entity";
interface ProjectOptions {
    useOrbitControls?: boolean;
}
export declare class Project {
    options: ProjectOptions;
    private _rootElement;
    private _renderer;
    private _scene;
    private _camera;
    private _orbitControls;
    private _entityController;
    private _prevTime;
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
export {};
