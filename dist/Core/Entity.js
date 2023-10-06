"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Component_1 = require("./Component");
class Entity extends Component_1.ComponentBase {
    constructor() {
        super();
        this._children = [];
        this._name = null;
        this._handlers = {};
    }
    AddChild(child) {
        child.Parent = this;
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
    /**
     * Emit
     */
    Emit(type, details) {
        if (!(type in this._handlers)) {
            return;
        }
        for (const handler of this._handlers[type]) {
            handler({ type, details });
        }
    }
    AddHandler(type, handler) {
        if (!this._handlers[type]) {
            this._handlers[type] = [];
        }
        this._handlers[type].push(handler);
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
}
exports.Entity = Entity;
