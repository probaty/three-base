import { ComponentBase } from "./Component";
export declare class Entity extends ComponentBase {
    private _children;
    private _name;
    constructor();
    AddChild(child: ComponentBase): void;
    RemoveChild(child: ComponentBase): void;
    Update(delta: number): void;
    get Name(): string | null;
    set Name(name: string);
}
