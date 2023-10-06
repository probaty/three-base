import { EntityEvent } from "../types/eventsTypes";
import { ComponentBase } from "./Component";
export declare class Entity extends ComponentBase {
    private _children;
    private _name;
    private _handlers;
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
}
