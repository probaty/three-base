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
exports.Project = void 0;
const THREE = __importStar(require("three"));
const OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
class Project {
    constructor(rootElement, options = {}) {
        this.options = options;
        this._orbitControls = null;
        this._children = [];
        if (typeof rootElement === "string") {
            const element = document.querySelector(rootElement);
            if (!element) {
                throw new Error("Could not find root element");
            }
            this._rootElement = element;
        }
        else {
            this._rootElement = rootElement;
        }
        this.createCamera();
        this.createRenderer();
        this.createScene();
        requestAnimationFrame((time) => {
            this.update(time);
        });
    }
    createRenderer() {
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._camera.aspect = window.innerWidth / window.innerHeight;
            this._camera.updateProjectionMatrix();
            if (this._orbitControls) {
                this._orbitControls.update();
            }
        });
    }
    createCamera() {
        this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        if (this.options.useOrbitControls) {
            this._orbitControls = new OrbitControls_1.OrbitControls(this._camera, this._renderer.domElement);
        }
    }
    createScene() {
        this._scene = new THREE.Scene();
    }
    AddChild(child) {
        this._children.push(child);
    }
    removeChild(child) {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
        }
    }
    update(delta) {
        for (const child of this._children) {
            child.Update(delta);
        }
        this._renderer.render(this._scene, this._camera);
        requestAnimationFrame((time) => {
            this.update(time);
        });
    }
    get Camera() {
        return this._camera;
    }
}
exports.Project = Project;
