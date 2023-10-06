"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityController = void 0;
class EntityController {
    constructor() {
        this._entities = [];
        this._entityMap = new Map();
        this._ids = 0;
    }
    generateNames() {
        this._ids++;
        return `entity-${this._ids}`;
    }
    /**
     * Add a new entity to the controller
     */
    Add(entity, name) {
        if (!name) {
            name = this.generateNames();
        }
        this._entities.push(entity);
        this._entityMap.set(name, entity);
        entity.Parent = this;
    }
    /**
     * Get an entity by name
     */
    Get(name) {
        return this._entityMap.get(name);
    }
    /**
     * Remove an entity
     */
    Remove(name) {
        const entity = this._entityMap.get(name);
        if (entity) {
            this._entities.splice(this._entities.indexOf(entity), 1);
            this._entityMap.delete(name);
        }
    }
    /**
     * Filter all entities
     */
    Filter(callback) {
        this._entities = this._entities.filter(callback);
    }
    /**
     * Update all entities
     */
    Update(timeElapsed) {
        for (const entity of this._entities) {
            entity.Update(timeElapsed);
        }
    }
}
exports.EntityController = EntityController;
