import { Project } from "./Project";
export declare class Entity {
    private _parent;
    private _scene;
    private _children;
    private _name;
    constructor(_parent: Entity | Project, _scene: THREE.Scene);
    AddChild(child: Entity): void;
    RemoveChild(child: Entity): void;
    Update(delta: number): void;
    get Parent(): Entity | Project;
    get Name(): string | null;
    set Name(name: string);
}
