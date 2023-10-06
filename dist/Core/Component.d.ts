import { Entity } from "./Entity";
import { EntityController } from "./EntityController";
export declare abstract class ComponentBase {
    protected _parent: Entity | EntityController | null;
    /**
     * Update
     */
    Update(timeElapsed: number): void;
    set Parent(parent: Entity | EntityController);
    get Parent(): Entity | EntityController | null;
}
export declare abstract class Component extends ComponentBase {
    constructor();
    /**
     * InitComponent
     */
    InitComponent(): void;
}
