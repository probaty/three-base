"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.ComponentBase = void 0;
class ComponentBase {
    constructor() {
        this._parent = null;
    }
    /**
     * Update
     */
    Update(timeElapsed) { }
    Emit(type, details) { }
    AddHandler(type, handler) { }
    set Parent(parent) {
        this._parent = parent;
    }
    get Parent() {
        return this._parent;
    }
}
exports.ComponentBase = ComponentBase;
class Component extends ComponentBase {
    constructor() {
        super();
        this._parent = null;
    }
    AddHandler(type, handler) {
        if (!this._parent) {
            return;
        }
        this._parent.AddHandler(type, handler);
    }
    Emit(type, details) {
        if (!this._parent) {
            return;
        }
        this._parent.Emit(type, details);
    }
    /**
     * InitComponent
     */
    InitComponent() { }
}
exports.Component = Component;
