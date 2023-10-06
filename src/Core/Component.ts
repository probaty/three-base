import { Entity } from "./Entity";
import { EntityController } from "./EntityController";

export abstract class ComponentBase {
  protected _parent: Entity | EntityController | null = null;

  /**
   * Update
   */
  public Update(timeElapsed: number) {}

  set Parent(parent: Entity | EntityController) {
    this._parent = parent;
  }

  get Parent(): Entity | EntityController | null {
    return this._parent;
  }
}

export abstract class Component extends ComponentBase {
  constructor() {
    super();
  }

  /**
   * InitComponent
   */
  public InitComponent() {}
}
