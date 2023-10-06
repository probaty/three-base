import { Entity } from "./Entity";
export declare class EntityController {
    private _entities;
    private _entityMap;
    private _ids;
    private generateNames;
    /**
     * Add a new entity to the controller
     */
    Add(entity: Entity, name?: string): void;
    /**
     * Get an entity by name
     */
    Get(name: string): Entity | undefined;
    /**
     * Remove an entity
     */
    Remove(name: string): void;
    /**
     * Filter all entities
     */
    Filter(callback: (entity: Entity) => boolean): void;
    /**
     * Update all entities
     */
    Update(timeElapsed: number): void;
}
