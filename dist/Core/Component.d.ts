import { EntityEvent } from "../types/eventsTypes";
import { Entity } from "./Entity";
import { EntityController } from "./EntityController";
export declare abstract class ComponentBase {
    protected _parent: Entity | EntityController | null;
    /**
     * Update
     */
    Update(timeElapsed: number): void;
    Emit(type: string, details?: any): void;
    AddHandler(type: string, handler: EntityEvent): void;
    set Parent(parent: Entity | EntityController);
    get Parent(): Entity | EntityController | null;
}
export declare class Component extends ComponentBase {
    protected _parent: Entity | null;
    constructor();
    AddHandler(type: string, handler: EntityEvent): void;
    Emit(type: string, details?: any): void;
    /**
     * InitComponent
     */
    InitComponent(): void;
}
