import { Project } from "./Project";

export class Entity {
  private _children: Entity[] = [];
  private _name: string | null = null;
  constructor(private _parent: Entity | Project, private _scene: THREE.Scene) {}

  public AddChild(child: Entity) {
    this._children.push(child);
  }

  public RemoveChild(child: Entity) {
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

  get Parent() {
    return this._parent;
  }

  get Name(): string | null {
    return this._name;
  }

  set Name(name: string) {
    this._name = name;
  }
}
