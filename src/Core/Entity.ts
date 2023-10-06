import { Component, ComponentBase } from "./Component";
import { EntityController } from "./EntityController";

export class Entity extends ComponentBase {
  private _children: ComponentBase[] = [];
  private _name: string | null = null;

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
    for (const child of this._children) {
      child.Update(delta);
    }
  }

  get Name(): string | null {
    return this._name;
  }

  set Name(name: string) {
    this._name = name;
  }
}
