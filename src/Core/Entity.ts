import { EntityEvent } from "../types/eventsTypes";
import { ComponentBase } from "./Component";
import * as THREE from "three";

export class Entity extends ComponentBase {
  private _children: ComponentBase[] = [];
  private _name: string | null = null;
  private _handlers: { [name: string]: EntityEvent[] } = {};
  private _position: THREE.Vector3 = new THREE.Vector3();
  private _rotation: THREE.Euler = new THREE.Euler();
  private _updateCallbacks: ((delta: number) => void)[] = [];

  constructor() {
    super();
  }

  public AddChild(child: ComponentBase) {
    child.Parent = this;
    this._children.push(child);
  }

  public RemoveChild(child: ComponentBase) {
    const index = this._children.indexOf(child);
    if (index !== -1) {
      this._children.splice(index, 1);
    }
  }

  public Update(delta: number) {
    for (const cb of this._updateCallbacks) {
      cb(delta);
    }
    for (const child of this._children) {
      child.Update(delta);
    }
  }

  /**
   * AddUpdateCB
   */
  public AddUpdateCB(cb: (delta: number) => void) {
    this._updateCallbacks.push(cb);
  }

  /**
   * ClearUpdateCB
   */
  public ClearUpdateCB() {
    this._updateCallbacks = [];
  }

  /**
   * Emit
   */
  public Emit(type: string, details?: any) {
    if (!(type in this._handlers)) {
      return;
    }
    for (const handler of this._handlers[type]) {
      handler({ type, details });
    }
  }

  public AddHandler(type: string, handler: EntityEvent) {
    if (!this._handlers[type]) {
      this._handlers[type] = [];
    }
    this._handlers[type].push(handler);
  }

  get Name(): string | null {
    return this._name;
  }

  set Name(name: string) {
    this._name = name;
  }

  get Position(): THREE.Vector3 {
    return this._position;
  }

  set Position(position: THREE.Vector3) {
    this._position.copy(position);
    this.Emit("update.position", this._position);
  }

  set Rotation(rotation: THREE.Euler) {
    this._rotation.copy(rotation);
    this.Emit("update.rotation", this._rotation);
  }

  get Rotation(): THREE.Euler {
    return this._rotation;
  }
}
