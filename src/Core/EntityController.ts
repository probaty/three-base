import { Entity } from "./Entity";

export class EntityController {
  private _entities: Entity[] = [];
  private _entityMap: Map<string, Entity> = new Map();
  private _ids = 0;

  private generateNames() {
    this._ids++;
    return `entity-${this._ids}`;
  }

  /**
   * Add a new entity to the controller
   */
  public Add(entity: Entity, name?: string) {
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
  public Get(name: string) {
    return this._entityMap.get(name);
  }

  /**
   * Remove an entity
   */
  public Remove(name: string) {
    const entity = this._entityMap.get(name);
    if (entity) {
      this._entities.splice(this._entities.indexOf(entity), 1);
      this._entityMap.delete(name);
    }
  }

  /**
   * Filter all entities
   */
  public Filter(callback: (entity: Entity) => boolean) {
    this._entities = this._entities.filter(callback);
  }

  /**
   * Update all entities
   */
  public Update(timeElapsed: number) {
    for (const entity of this._entities) {
      entity.Update(timeElapsed);
    }
  }
}
