"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(_parent, _scene) {
        this._parent = _parent;
        this._scene = _scene;
        this._children = [];
        this._name = null;
    }
    AddChild(child) {
        this._children.push(child);
    }
    RemoveChild(child) {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
        }
    }
    Update(delta) {
        for (const child of this._children) {
            child.Update(delta);
        }
    }
    get Parent() {
        return this._parent;
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
}
exports.Entity = Entity;
