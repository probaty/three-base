import { EntityEvent } from "../types/eventsTypes";
import { ComponentBase } from "./Component";
import * as THREE from "three";
export declare class Entity extends ComponentBase {
    private _children;
    private _name;
    private _handlers;
    private _position;
    private _rotation;
    constructor();
    AddChild(child: ComponentBase): void;
    RemoveChild(child: ComponentBase): void;
    Update(delta: number): void;
    /**
     * Emit
     */
    Emit(type: string, details?: any): void;
    AddHandler(type: string, handler: EntityEvent): void;
    get Name(): string | null;
    set Name(name: string);
    get Position(): THREE.Vector3;
    set Position(position: THREE.Vector3);
    set Rotation(rotation: THREE.Euler);
    get Rotation(): THREE.Euler;
}
