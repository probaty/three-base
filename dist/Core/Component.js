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
    }
    /**
     * InitComponent
     */
    InitComponent() { }
}
exports.Component = Component;
