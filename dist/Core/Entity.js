"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Component_1 = require("./Component");
const THREE = __importStar(require("three"));
class Entity extends Component_1.ComponentBase {
    constructor() {
        super();
        this._children = [];
        this._name = null;
        this._handlers = {};
        this._position = new THREE.Vector3();
        this._rotation = new THREE.Euler();
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
    get Position() {
        return this._position;
    }
    set Position(position) {
        this._position.copy(position);
        this.Emit("update.position", this._position);
    }
    set Rotation(rotation) {
        this._rotation.copy(rotation);
        this.Emit("update.rotation", this._rotation);
    }
    get Rotation() {
        return this._rotation;
    }
}
exports.Entity = Entity;
