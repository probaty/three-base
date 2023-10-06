import { EntityEvent } from "../types/eventsTypes";
import { Entity } from "./Entity";
import { EntityController } from "./EntityController";

export abstract class ComponentBase {
  protected _parent: Entity | EntityController | null = null;

  /**
   * Update
   */
  public Update(timeElapsed: number) {}

  public Emit(type: string, details?: any) {}
  public AddHandler(type: string, handler: EntityEvent) {}

  set Parent(parent: Entity | EntityController) {
    this._parent = parent;
  }

  get Parent(): Entity | EntityController | null {
    return this._parent;
  }
}

export class Component extends ComponentBase {
  protected _parent: Entity | null = null;
  constructor() {
    super();
  }

  public AddHandler(type: string, handler: EntityEvent): void {
    if (!this._parent) {
      return;
    }
    this._parent.AddHandler(type, handler);
  }

  public Emit(type: string, details?: any): void {
    if (!this._parent) {
      return;
    }
    this._parent.Emit(type, details);
  }

  /**
   * InitComponent
   */
  public InitComponent(): void {}
}
