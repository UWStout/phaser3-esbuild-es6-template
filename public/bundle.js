(() => {
  // node_modules/@phaserjs/phaser/GameInstance.js
  let instance;
  let frame = 0;
  let elapsed = 0;
  const GameInstance2 = {
    get: () => {
      return instance;
    },
    set: (game) => {
      instance = game;
    },
    getFrame: () => {
      return frame;
    },
    setFrame: (current) => {
      frame = current;
    },
    getElapsed: () => {
      return elapsed;
    },
    setElapsed: (current) => {
      elapsed = current;
    }
  };

  // node_modules/@phaserjs/phaser/utils/base64/Base64ToArrayBuffer.js
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const lookup = new Uint8Array(256);
  for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  // node_modules/@phaserjs/phaser/utils/NOOP.js
  function NOOP77() {
  }

  // node_modules/@phaserjs/phaser/math/mat4/Matrix4.js
  class Matrix42 {
    constructor(src) {
      const data = new Float32Array(16);
      this.data = data;
      this.onChange = NOOP77;
      if (src) {
        if (Array.isArray(src)) {
          this.fromArray(src);
        } else {
          this.fromArray(src.data);
        }
      } else {
        data[0] = 1;
        data[5] = 1;
        data[10] = 1;
        data[15] = 1;
      }
    }
    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      const data = this.data;
      data[0] = m00;
      data[1] = m01;
      data[2] = m02;
      data[3] = m03;
      data[4] = m10;
      data[5] = m11;
      data[6] = m12;
      data[7] = m13;
      data[8] = m20;
      data[9] = m21;
      data[10] = m22;
      data[11] = m23;
      data[12] = m30;
      data[13] = m31;
      data[14] = m32;
      data[15] = m33;
      this.onChange(this);
      return this;
    }
    toArray(dst = [], index69 = 0) {
      const data = this.data;
      for (let i = 0; i < 16; i++) {
        dst[index69 + i] = data[i];
      }
      return dst;
    }
    fromArray(src, index69 = 0) {
      const data = this.data;
      for (let i = 0; i < 16; i++) {
        data[i] = src[index69 + i];
      }
      this.onChange(this);
      return this;
    }
    toString() {
      return "[ mat4=" + this.data.join(", ") + " ]";
    }
    destroy() {
      this.onChange = NOOP77;
      this.data = null;
    }
  }

  // node_modules/@phaserjs/phaser/math/mat4/Identity.js
  function Identity3(matrix2 = new Matrix42()) {
    return matrix2.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Ortho.js
  function Ortho4(left, right, bottom, top, near, far, out = new Matrix42()) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    return out.set(-2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Matrix2D.js
  class Matrix2D2 {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
      this.set(a, b, c, d, tx, ty);
    }
    set(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
      return this;
    }
    identity() {
      return this.set();
    }
    toArray() {
      const {a, b, c, d, tx, ty} = this;
      return [a, b, c, d, tx, ty];
    }
    fromArray(src) {
      return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleContains.js
  function RectangleContains29(rect, x, y) {
    if (rect.width <= 0 || rect.height <= 0) {
      return false;
    }
    return rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/Rectangle.js
  class Rectangle2 {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
    contains(x, y) {
      return RectangleContains29(this, x, y);
    }
    set right(value) {
      if (value <= this.x) {
        this.width = 0;
      } else {
        this.width = value - this.x;
      }
    }
    get right() {
      return this.x + this.width;
    }
    set bottom(value) {
      if (value <= this.y) {
        this.height = 0;
      } else {
        this.height = value - this.y;
      }
    }
    get bottom() {
      return this.y + this.height;
    }
  }

  // node_modules/@phaserjs/phaser/camera/StaticCamera.js
  class StaticCamera {
    constructor() {
      this.type = "StaticCamera";
      this.dirtyRender = true;
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.matrix = Identity3();
      this.bounds = new Rectangle2();
      this.worldTransform = new Matrix2D2();
      this.reset();
    }
    reset() {
      const renderer = this.renderer;
      if (renderer) {
        const width = renderer.width;
        const height = renderer.height;
        this.width = width;
        this.height = height;
      }
      this.bounds.set(0, 0, this.width, this.height);
    }
    destroy() {
      this.world = null;
      this.worldTransform = null;
      this.renderer = null;
      this.matrix = null;
      this.bounds = null;
    }
  }

  // node_modules/@phaserjs/phaser/math/pow2/IsSizePowerOfTwo.js
  function IsSizePowerOfTwo8(width, height) {
    if (width < 1 || height < 1) {
      return false;
    }
    return (width & width - 1) === 0 && (height & height - 1) === 0;
  }

  // node_modules/@phaserjs/phaser/config/const.js
  const CONFIG_DEFAULTS = {
    BACKGROUND_COLOR: "BackgroundColor",
    BATCH_SIZE: "BatchSize",
    DEFAULT_ORIGIN: "DefaultOrigin",
    MAX_TEXTURES: "MaxTextures",
    PARENT: "Parent",
    SIZE: "Size",
    SCENES: "Scenes",
    RENDERER: "Renderer",
    AUTO: "Auto",
    WEBGL: "WebGL",
    CANVAS: "Canvas",
    WEBGL_CONTEXT: "WebGLContext",
    CANVAS_CONTEXT: "CanvasContext",
    BANNER: "Banner"
  };

  // node_modules/@phaserjs/phaser/config/ConfigStore.js
  const ConfigStore2 = new Map();

  // node_modules/@phaserjs/phaser/config/backgroundcolor/SetBackgroundColor.js
  function SetBackgroundColor3(color) {
    ConfigStore2.set(CONFIG_DEFAULTS.BACKGROUND_COLOR, color);
  }

  // node_modules/@phaserjs/phaser/config/backgroundcolor/BackgroundColor.js
  function BackgroundColor(color) {
    return () => {
      SetBackgroundColor3(color);
    };
  }

  // node_modules/@phaserjs/phaser/config/backgroundcolor/GetBackgroundColor.js
  function GetBackgroundColor() {
    return ConfigStore2.get(CONFIG_DEFAULTS.BACKGROUND_COLOR);
  }

  // node_modules/@phaserjs/phaser/config/banner/SetBanner.js
  function SetBanner3(title = "", version = "", url = "", color = "#fff", background = "linear-gradient(#3e0081 40%, #00bcc3)") {
    ConfigStore2.set(CONFIG_DEFAULTS.BANNER, {title, version, url, color, background});
  }

  // node_modules/@phaserjs/phaser/config/banner/Banner.js
  function Banner(title, version, url, color, background) {
    return () => {
      SetBanner3(title, version, url, color, background);
    };
  }

  // node_modules/@phaserjs/phaser/config/batchsize/SetBatchSize.js
  function SetBatchSize3(size) {
    ConfigStore2.set(CONFIG_DEFAULTS.BATCH_SIZE, size);
  }

  // node_modules/@phaserjs/phaser/config/batchsize/BatchSize.js
  function BatchSize(size) {
    return () => {
      SetBatchSize3(size);
    };
  }

  // node_modules/@phaserjs/phaser/config/batchsize/GetBatchSize.js
  function GetBatchSize() {
    return ConfigStore2.get(CONFIG_DEFAULTS.BATCH_SIZE);
  }

  // node_modules/@phaserjs/phaser/config/size/GetHeight.js
  function GetHeight3() {
    return ConfigStore2.get(CONFIG_DEFAULTS.SIZE).height;
  }

  // node_modules/@phaserjs/phaser/config/size/GetResolution.js
  function GetResolution3() {
    return ConfigStore2.get(CONFIG_DEFAULTS.SIZE).resolution;
  }

  // node_modules/@phaserjs/phaser/config/size/GetWidth.js
  function GetWidth3() {
    return ConfigStore2.get(CONFIG_DEFAULTS.SIZE).width;
  }

  // node_modules/@phaserjs/phaser/config/size/SetSize.js
  function SetSize3(width = 800, height = 600, resolution = 1) {
    if (resolution === 0) {
      resolution = window.devicePixelRatio;
    }
    ConfigStore2.set(CONFIG_DEFAULTS.SIZE, {width, height, resolution});
  }

  // node_modules/@phaserjs/phaser/config/size/Size.js
  function Size2(width = 800, height = 600, resolution = 1) {
    return () => {
      SetSize3(width, height, resolution);
    };
  }

  // node_modules/@phaserjs/phaser/renderer/BindingQueue.js
  const queue = [];
  const BindingQueue21 = {
    add: (texture, glConfig) => {
      queue.push({texture, glConfig});
    },
    get: () => {
      return queue;
    },
    clear: () => {
      queue.length = 0;
    }
  };

  // node_modules/@phaserjs/phaser/config/canvascontext/GetCanvasContext.js
  function GetCanvasContext2() {
    return ConfigStore2.get(CONFIG_DEFAULTS.CANVAS_CONTEXT);
  }

  // node_modules/@phaserjs/phaser/renderer/canvas/CanvasRenderer.js
  class CanvasRenderer2 {
    constructor() {
      this.clearBeforeRender = true;
      this.optimizeRedraw = true;
      this.autoResize = true;
      this.width = GetWidth3();
      this.height = GetHeight3();
      this.resolution = GetResolution3();
      this.setBackgroundColor(GetBackgroundColor());
      const canvas = document.createElement("canvas");
      this.canvas = canvas;
      this.initContext();
    }
    initContext() {
      const ctx = this.canvas.getContext("2d", GetCanvasContext2());
      this.ctx = ctx;
      this.resize(this.width, this.height, this.resolution);
    }
    resize(width, height, resolution = 1) {
      this.width = width * resolution;
      this.height = height * resolution;
      this.resolution = resolution;
      const canvas = this.canvas;
      canvas.width = this.width;
      canvas.height = this.height;
      if (this.autoResize) {
        canvas.style.width = (this.width / resolution).toString() + "px";
        canvas.style.height = (this.height / resolution).toString() + "px";
      }
    }
    setBackgroundColor(color) {
      const r = color >> 16 & 255;
      const g = color >> 8 & 255;
      const b = color & 255;
      const a = color > 16777215 ? color >>> 24 : 255;
      this.clearColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      return this;
    }
    reset() {
      const ctx = this.ctx;
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    render(renderData) {
      BindingQueue21.clear();
      const ctx = this.ctx;
      if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
        return;
      }
      this.reset();
      if (this.clearBeforeRender) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = this.clearColor;
        ctx.fillRect(0, 0, this.width, this.height);
      }
    }
    destroy() {
    }
  }

  // node_modules/@phaserjs/phaser/config/renderer/SetRenderer.js
  function SetRenderer2(renderer) {
    ConfigStore2.set(CONFIG_DEFAULTS.RENDERER, renderer);
  }

  // node_modules/@phaserjs/phaser/config/canvas/Canvas.js
  function Canvas() {
    return () => {
      SetRenderer2(CanvasRenderer2);
    };
  }

  // node_modules/@phaserjs/phaser/config/canvascontext/SetCanvasContext.js
  function SetCanvasContext2(contextAttributes) {
    ConfigStore2.set(CONFIG_DEFAULTS.CANVAS_CONTEXT, contextAttributes);
  }

  // node_modules/@phaserjs/phaser/config/canvascontext/CanvasContext.js
  function CanvasContext(contextAttributes) {
    return () => {
      SetCanvasContext2(contextAttributes);
    };
  }

  // node_modules/@phaserjs/phaser/config/defaultorigin/SetDefaultOrigin.js
  function SetDefaultOrigin3(x = 0.5, y = x) {
    ConfigStore2.set(CONFIG_DEFAULTS.DEFAULT_ORIGIN, {x, y});
  }

  // node_modules/@phaserjs/phaser/config/defaultorigin/DefaultOrigin.js
  function DefaultOrigin(x = 0.5, y = x) {
    return () => {
      SetDefaultOrigin3(x, y);
    };
  }

  // node_modules/@phaserjs/phaser/config/maxtextures/SetMaxTextures.js
  function SetMaxTextures3(max) {
    ConfigStore2.set(CONFIG_DEFAULTS.MAX_TEXTURES, max);
  }

  // node_modules/@phaserjs/phaser/config/maxtextures/MaxTextures.js
  function MaxTextures2(max = 0) {
    return () => {
      SetMaxTextures3(max);
    };
  }

  // node_modules/@phaserjs/phaser/dom/GetElement.js
  function GetElement5(target) {
    let element;
    if (target) {
      if (typeof target === "string") {
        element = document.getElementById(target);
      } else if (typeof target === "object" && target.nodeType === 1) {
        element = target;
      }
    }
    if (!element) {
      element = document.body;
    }
    return element;
  }

  // node_modules/@phaserjs/phaser/config/parent/SetParent.js
  function SetParent3(parentElement) {
    if (parentElement) {
      ConfigStore2.set(CONFIG_DEFAULTS.PARENT, GetElement5(parentElement));
    }
  }

  // node_modules/@phaserjs/phaser/config/parent/Parent.js
  function Parent2(parentElement) {
    return () => {
      SetParent3(parentElement);
    };
  }

  // node_modules/@phaserjs/phaser/config/scenes/SetScenes.js
  function SetScenes3(scenes) {
    ConfigStore2.set(CONFIG_DEFAULTS.SCENES, [].concat(scenes));
  }

  // node_modules/@phaserjs/phaser/config/scenes/Scenes.js
  function Scenes2(scenes) {
    return () => {
      SetScenes3(scenes);
    };
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/AddViewport.js
  function AddViewport20(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const viewport = new Rectangle2(x, y, width, height);
    renderPass.viewportStack.push(viewport);
    return viewport;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/GL.js
  let gl;
  const GL20 = {
    get: () => {
      return gl;
    },
    set: (context) => {
      gl = context;
    }
  };

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindViewport.js
  function BindViewport21(renderPass, viewport) {
    if (!viewport) {
      viewport = renderPass.currentViewport;
      if (!viewport) {
        return;
      }
    }
    const glv = gl.getParameter(gl.VIEWPORT);
    if (glv[0] !== viewport.x || glv[1] !== viewport.y || glv[2] !== viewport.width || glv[3] !== viewport.height) {
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetViewport.js
  function SetViewport21(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const entry = AddViewport20(renderPass, x, y, width, height);
    BindViewport21(renderPass, entry);
    renderPass.currentViewport = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindFramebuffer.js
  function BindFramebuffer20(renderPass, clear = true, entry) {
    if (!entry) {
      entry = renderPass.currentFramebuffer;
    }
    const {framebuffer, viewport} = entry;
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    if (clear) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    if (viewport) {
      SetViewport21(renderPass, viewport.x, viewport.y, viewport.width, viewport.height);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/PopViewport.js
  function PopViewport26(renderPass) {
    const stack = renderPass.viewportStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentViewport = stack[stack.length - 1];
    BindViewport21(renderPass);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/PopFramebuffer.js
  function PopFramebuffer8(renderPass) {
    const stack = renderPass.framebufferStack;
    if (stack.length > 1) {
      if (renderPass.currentFramebuffer.viewport) {
        PopViewport26(renderPass);
      }
      stack.pop();
    }
    renderPass.currentFramebuffer = stack[stack.length - 1];
    BindFramebuffer20(renderPass, false);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/AddFramebuffer.js
  function AddFramebuffer20(renderPass, framebuffer, viewport) {
    const entry = {framebuffer, viewport};
    renderPass.framebufferStack.push(entry);
    return entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetFramebuffer.js
  function SetFramebuffer8(renderPass, framebuffer, clear = true, viewport) {
    const entry = AddFramebuffer20(renderPass, framebuffer, viewport);
    BindFramebuffer20(renderPass, clear, entry);
    renderPass.currentFramebuffer = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/Draw.js
  function Draw20(renderPass) {
    const count = renderPass.count;
    if (count === 0) {
      return;
    }
    const currentBuffer = renderPass.currentVertexBuffer;
    const currentShader = renderPass.currentShader;
    const renderToFramebuffer = currentShader.shader.renderToFramebuffer;
    if (renderToFramebuffer) {
      SetFramebuffer8(renderPass, currentShader.shader.framebuffer, true);
    }
    if (count === currentBuffer.batchSize) {
      const type = currentBuffer.isDynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
      gl.bufferData(gl.ARRAY_BUFFER, currentBuffer.data, type);
    } else {
      const subsize = currentBuffer.indexed ? count * currentBuffer.entryElementSize : count * currentBuffer.vertexElementSize;
      const view = currentBuffer.vertexViewF32.subarray(0, subsize);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }
    if (currentBuffer.indexed) {
      gl.drawElements(gl.TRIANGLES, count * currentBuffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
    } else {
      gl.drawArrays(gl.TRIANGLES, 0, count);
    }
    if (renderToFramebuffer) {
      PopFramebuffer8(renderPass);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/Flush.js
  function Flush8(renderPass, forceCount) {
    if (forceCount) {
      renderPass.count = forceCount;
    }
    const count = renderPass.count;
    if (count === 0) {
      return false;
    }
    Draw20(renderPass);
    renderPass.prevCount = count;
    renderPass.count = 0;
    renderPass.flushTotal++;
    return true;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/End.js
  function End5(renderPass) {
    Flush8(renderPass);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/colors/GetRGBArray.js
  function GetRGBArray5(color, output = []) {
    const r = color >> 16 & 255;
    const g = color >> 8 & 255;
    const b = color & 255;
    const a = color > 16777215 ? color >>> 24 : 255;
    output[0] = r / 255;
    output[1] = g / 255;
    output[2] = b / 255;
    output[3] = a / 255;
    return output;
  }

  // node_modules/@phaserjs/phaser/config/webglcontext/GetWebGLContext.js
  function GetWebGLContext3() {
    return ConfigStore2.get(CONFIG_DEFAULTS.WEBGL_CONTEXT);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/textures/CreateGLTexture.js
  function CreateGLTexture8(binding) {
    const {parent, flipY, unpackPremultiplyAlpha, minFilter, magFilter, wrapS, wrapT, generateMipmap, isPOT} = binding;
    const source = parent.image;
    let width = parent.width;
    let height = parent.height;
    const glTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiplyAlpha);
    if (source) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      width = source.width;
      height = source.height;
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
    if (generateMipmap && isPOT) {
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    binding.texture = glTexture;
    return glTexture;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/fbo/DeleteFramebuffer.js
  function DeleteFramebuffer8(framebuffer) {
    if (gl && gl.isFramebuffer(framebuffer)) {
      gl.deleteFramebuffer(framebuffer);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/textures/DeleteGLTexture.js
  function DeleteGLTexture8(texture) {
    if (gl.isTexture(texture)) {
      gl.deleteTexture(texture);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/textures/SetGLTextureFilterMode.js
  function SetGLTextureFilterMode8(texture, linear = true) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const mode = linear ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/textures/UpdateGLTexture.js
  function UpdateGLTexture8(binding) {
    const source = binding.parent.image;
    const width = source.width;
    const height = source.height;
    if (width > 0 && height > 0) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, binding.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, binding.flipY);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }
    return binding.texture;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/textures/GLTextureBinding.js
  class GLTextureBinding4 {
    constructor(parent, config2 = {}) {
      this.index = 0;
      this.indexCounter = -1;
      this.dirtyIndex = true;
      this.unpackPremultiplyAlpha = true;
      this.flipY = false;
      this.isPOT = false;
      this.generateMipmap = false;
      this.parent = parent;
      this.isPOT = IsSizePowerOfTwo8(parent.width, parent.height);
      const {texture = null, framebuffer = null, depthbuffer = null, unpackPremultiplyAlpha = true, minFilter = this.isPOT ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR, magFilter = gl.LINEAR, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, generateMipmap = this.isPOT, flipY = false} = config2;
      this.minFilter = minFilter;
      this.magFilter = magFilter;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.generateMipmap = generateMipmap;
      this.flipY = flipY;
      this.unpackPremultiplyAlpha = unpackPremultiplyAlpha;
      if (framebuffer) {
        this.framebuffer = framebuffer;
      }
      if (depthbuffer) {
        this.depthbuffer = depthbuffer;
      }
      if (texture) {
        this.texture = texture;
      } else {
        CreateGLTexture8(this);
      }
    }
    setFilter(linear) {
      if (this.texture) {
        SetGLTextureFilterMode8(this.texture, linear);
      }
    }
    create() {
      const texture = this.texture;
      if (texture) {
        DeleteGLTexture8(texture);
      }
      return CreateGLTexture8(this);
    }
    update() {
      const texture = this.texture;
      if (!texture) {
        return CreateGLTexture8(this);
      } else {
        return UpdateGLTexture8(this);
      }
    }
    setIndex(index69) {
      this.dirtyIndex = index69 !== this.index;
      this.index = index69;
    }
    destroy() {
      DeleteGLTexture8(this.texture);
      DeleteFramebuffer8(this.framebuffer);
      this.parent = null;
      this.texture = null;
      this.framebuffer = null;
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/ProcessBindingQueue.js
  function ProcessBindingQueue5() {
    const queue2 = BindingQueue21.get();
    queue2.forEach((entry) => {
      const {texture, glConfig} = entry;
      if (!texture.binding) {
        texture.binding = new GLTextureBinding4(texture, glConfig);
      }
    });
    BindingQueue21.clear();
  }

  // node_modules/@phaserjs/phaser/config/maxtextures/GetMaxTextures.js
  function GetMaxTextures2() {
    return ConfigStore2.get(CONFIG_DEFAULTS.MAX_TEXTURES);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CheckShaderMaxIfStatements.js
  const fragTemplate = [
    "precision mediump float;",
    "void main(void){",
    "float test = 0.1;",
    "%forloop%",
    "gl_FragColor = vec4(0.0);",
    "}"
  ].join("\n");
  function GenerateSrc(maxIfs) {
    let src = "";
    for (let i = 0; i < maxIfs; ++i) {
      if (i > 0) {
        src += "\nelse ";
      }
      if (i < maxIfs - 1) {
        src += `if(test == ${i}.0){}`;
      }
    }
    return src;
  }
  function CheckShaderMaxIfStatements6(maxIfs) {
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    while (true) {
      const fragmentSrc = fragTemplate.replace(/%forloop%/gi, GenerateSrc(maxIfs));
      gl.shaderSource(shader, fragmentSrc);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        maxIfs = maxIfs / 2 | 0;
      } else {
        break;
      }
    }
    return maxIfs;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/CreateTempTextures.js
  function CreateTempTextures5(renderPass) {
    let maxGPUTextures = CheckShaderMaxIfStatements6(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
    const maxConfigTextures = GetMaxTextures2();
    if (maxConfigTextures === 0 || maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures) {
      SetMaxTextures3(maxGPUTextures);
    } else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
      maxGPUTextures = Math.max(8, maxConfigTextures);
    }
    const tempTextures = renderPass.tempTextures;
    if (tempTextures.length) {
      tempTextures.forEach((texture) => {
        gl.deleteTexture(texture);
      });
    }
    const index69 = [];
    for (let texturesIndex = 0; texturesIndex < maxGPUTextures; texturesIndex++) {
      const tempTexture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + texturesIndex);
      gl.bindTexture(gl.TEXTURE_2D, tempTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
      tempTextures[texturesIndex] = tempTexture;
      index69.push(texturesIndex);
    }
    renderPass.maxTextures = maxGPUTextures;
    renderPass.textureIndex = index69;
    renderPass.currentActiveTexture = 1;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/buffers/DeleteGLBuffer.js
  function DeleteGLBuffer11(buffer) {
    if (gl.isBuffer(buffer)) {
      gl.deleteBuffer(buffer);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/buffers/VertexBuffer.js
  class VertexBuffer7 {
    constructor(config2 = {}) {
      this.indexed = false;
      this.isDynamic = false;
      this.count = 0;
      this.offset = 0;
      const {batchSize = 1, dataSize = 4, isDynamic = true, elementsPerEntry = 4, vertexElementSize = 6} = config2;
      this.batchSize = batchSize;
      this.dataSize = dataSize;
      this.vertexElementSize = vertexElementSize;
      this.isDynamic = isDynamic;
      this.elementsPerEntry = elementsPerEntry;
      this.vertexByteSize = vertexElementSize * dataSize;
      this.entryByteSize = this.vertexByteSize * elementsPerEntry;
      this.bufferByteSize = batchSize * this.entryByteSize;
      this.create();
    }
    resize(batchSize) {
      this.batchSize = batchSize;
      this.bufferByteSize = batchSize * this.entryByteSize;
      if (this.vertexBuffer) {
        DeleteGLBuffer11(this.vertexBuffer);
      }
      this.create();
    }
    create() {
      const data = new ArrayBuffer(this.bufferByteSize);
      this.data = data;
      this.vertexViewF32 = new Float32Array(data);
      this.vertexViewU32 = new Uint32Array(data);
      this.vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      const type = this.isDynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
      gl.bufferData(gl.ARRAY_BUFFER, data, type);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    add(count) {
      this.count += count;
      this.offset += this.vertexElementSize * count;
    }
    reset() {
      this.count = 0;
      this.offset = 0;
    }
    canContain(count) {
      return this.count + count <= this.batchSize;
    }
    free() {
      return Math.max(0, 1 - this.count / this.batchSize);
    }
    bind() {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    }
    destroy() {
      DeleteGLBuffer11(this.vertexBuffer);
      this.data = null;
      this.vertexViewF32 = null;
      this.vertexViewU32 = null;
      this.vertexBuffer = null;
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/buffers/IndexedVertexBuffer.js
  class IndexedVertexBuffer5 extends VertexBuffer7 {
    constructor(config2 = {}) {
      super(config2);
      const {indexSize = 4, entryIndexSize = 6, indexLayout = null} = config2;
      this.indexed = true;
      this.indexSize = indexSize;
      this.entryIndexSize = entryIndexSize;
      this.entryElementSize = this.vertexElementSize * this.elementsPerEntry;
      const seededIndexBuffer = [];
      if (indexLayout) {
        this.indexLayout = indexLayout;
        for (let i = 0; i < this.batchSize * indexSize; i += indexSize) {
          for (let c = 0; c < indexLayout.length; c++) {
            seededIndexBuffer.push(i + indexLayout[c]);
          }
        }
      }
      this.create();
      this.createIndexBuffer(seededIndexBuffer);
    }
    createIndexBuffer(seededIndex) {
      this.index = new Uint16Array(seededIndex);
      this.indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      seededIndex = [];
    }
    bind() {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    }
    destroy() {
      super.destroy();
      DeleteGLBuffer11(this.indexBuffer);
      this.index = null;
      this.indexLayout = null;
      this.indexBuffer = null;
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CreateAttributes.js
  function CreateAttributes7(program, config2) {
    const attributes = new Map();
    const defaultSettings = {
      size: 1,
      type: gl.FLOAT,
      normalized: false,
      stride: 0,
      offset: 0
    };
    const total = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < total; i++) {
      const attrib = gl.getActiveAttrib(program, i);
      if (!attrib) {
        break;
      }
      const name = attrib.name;
      const index69 = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(index69);
      const setting = config2.hasOwnProperty(name) ? config2[name] : {};
      const {size = defaultSettings.size, type = defaultSettings.type, normalized = defaultSettings.normalized, stride = defaultSettings.stride, offset = defaultSettings.offset} = setting;
      attributes.set(name, {index: index69, size, type, normalized, stride, offset});
    }
    return attributes;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/DeleteShaders.js
  function DeleteShaders8(...shaders) {
    shaders.forEach((shader) => {
      gl.deleteShader(shader);
    });
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CreateProgram.js
  function CreateProgram7(...shaders) {
    const program = gl.createProgram();
    shaders.forEach((shader) => {
      gl.attachShader(program, shader);
    });
    gl.linkProgram(program);
    const status = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!status) {
      const info = gl.getProgramInfoLog(program);
      console.error(`Error linking program: ${info}`);
      gl.deleteProgram(program);
      DeleteShaders8(...shaders);
      return null;
    }
    return program;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CreateShader.js
  function CreateShader7(source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!status) {
      const info = gl.getShaderInfoLog(shader);
      const sourceLines = source.split("\n").map((line, index69) => {
        return `${index69}: ${line}`;
      });
      console.error(`Error compiling shader: ${info}`, sourceLines.join("\n"));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CreateUniformSetter.js
  function CreateUniformSetter7(uniform, location, isArray = false) {
    switch (uniform.type) {
      case gl.INT:
      case gl.BOOL: {
        if (isArray) {
          return (v) => {
            gl.uniform1iv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1i(location, v);
          };
        }
      }
      case gl.INT_VEC2:
      case gl.BOOL_VEC2: {
        return (v) => {
          gl.uniform2iv(location, v);
        };
      }
      case gl.INT_VEC3:
      case gl.BOOL_VEC3: {
        return (v) => {
          gl.uniform3iv(location, v);
        };
      }
      case gl.INT_VEC4:
      case gl.BOOL_VEC4: {
        return (v) => {
          gl.uniform4iv(location, v);
        };
      }
      case gl.FLOAT: {
        if (isArray) {
          return (v) => {
            gl.uniform1fv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1f(location, v);
          };
        }
      }
      case gl.FLOAT_VEC2: {
        return (v) => {
          gl.uniform2fv(location, v);
        };
      }
      case gl.FLOAT_VEC3: {
        return (v) => {
          gl.uniform3fv(location, v);
        };
      }
      case gl.FLOAT_VEC4: {
        return (v) => {
          gl.uniform4fv(location, v);
        };
      }
      case gl.FLOAT_MAT2: {
        return (v) => {
          gl.uniformMatrix2fv(location, false, v);
        };
      }
      case gl.FLOAT_MAT3: {
        return (v) => {
          gl.uniformMatrix3fv(location, false, v);
        };
      }
      case gl.FLOAT_MAT4: {
        return (v) => {
          gl.uniformMatrix4fv(location, false, v);
        };
      }
      case gl.SAMPLER_2D:
      case gl.SAMPLER_CUBE: {
        if (uniform.size > 1) {
          return (v) => {
            gl.uniform1iv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1i(location, v);
          };
        }
      }
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/CreateUniforms.js
  function CreateUniforms7(program) {
    const uniforms = new Map();
    const total = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < total; i++) {
      const uniform = gl.getActiveUniform(program, i);
      let name = uniform.name;
      if (name.startsWith("gl_") || name.startsWith("webgl_")) {
        continue;
      }
      const location = gl.getUniformLocation(program, uniform.name);
      if (location) {
        let isArray = false;
        if (name.substr(-3) === "[0]") {
          name = name.substr(0, name.length - 3);
          isArray = uniform.size > 1;
        }
        uniforms.set(name, CreateUniformSetter7(uniform, location, isArray));
      }
    }
    return uniforms;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/GL_CONST.js
  const UNSIGNED_BYTE = 5121;
  const FLOAT = 5126;

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/DefaultQuadAttributes.js
  const DefaultQuadAttributes7 = {
    aVertexPosition: {size: 2, type: FLOAT, normalized: false, offset: 0},
    aTextureCoord: {size: 2, type: FLOAT, normalized: false, offset: 8},
    aTextureId: {size: 1, type: FLOAT, normalized: false, offset: 16},
    aTintColor: {size: 4, type: UNSIGNED_BYTE, normalized: true, offset: 20}
  };

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/DefaultQuadUniforms.js
  const DefaultQuadUniforms7 = {
    uProjectionMatrix: new Float32Array(),
    uCameraMatrix: new Float32Array(),
    uTexture: 0
  };

  // node_modules/@phaserjs/phaser/renderer/webgl1/fbo/CreateDepthBuffer.js
  function CreateDepthBuffer4(framebuffer, textureWidth, textureHeight) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    const depthBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, textureWidth, textureHeight);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return depthBuffer;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/fbo/CreateFramebuffer.js
  function CreateFramebuffer4(texture, attachment) {
    if (!attachment) {
      attachment = gl.COLOR_ATTACHMENT0;
    }
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return framebuffer;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/glsl/SINGLE_QUAD_FRAG.js
  const SINGLE_QUAD_FRAG5 = `#define SHADER_NAME SINGLE_QUAD_FRAG\r
\r
precision highp float;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
uniform sampler2D uTexture;\r
\r
void main (void)\r
{\r
    vec4 color = texture2D(uTexture, vTextureCoord);\r
\r
    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);\r
}`;

  // node_modules/@phaserjs/phaser/renderer/webgl1/glsl/SINGLE_QUAD_VERT.js
  const SINGLE_QUAD_VERT5 = `#define SHADER_NAME SINGLE_QUAD_VERT\r
\r
precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
attribute float aTextureId;\r
attribute vec4 aTintColor;\r
\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uCameraMatrix;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
void main (void)\r
{\r
    vTextureCoord = aTextureCoord;\r
    vTextureId = aTextureId;\r
    vTintColor = aTintColor;\r
\r
    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 0.0, 1.0);\r
}`;

  // node_modules/@phaserjs/phaser/textures/Frame.js
  class Frame20 {
    constructor(texture, key, x, y, width, height) {
      this.trimmed = false;
      this.texture = texture;
      this.key = key;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.updateUVs();
    }
    setPivot(x, y) {
      this.pivot = {x, y};
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.updateUVs();
    }
    setSourceSize(width, height) {
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
    }
    setTrim(width, height, x, y, w, h) {
      this.trimmed = true;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.spriteSourceSizeX = x;
      this.spriteSourceSizeY = y;
      this.spriteSourceSizeWidth = w;
      this.spriteSourceSizeHeight = h;
    }
    getExtent(originX, originY) {
      const sourceSizeWidth = this.sourceSizeWidth;
      const sourceSizeHeight = this.sourceSizeHeight;
      let left;
      let right;
      let top;
      let bottom;
      if (this.trimmed) {
        left = this.spriteSourceSizeX - originX * sourceSizeWidth;
        right = left + this.spriteSourceSizeWidth;
        top = this.spriteSourceSizeY - originY * sourceSizeHeight;
        bottom = top + this.spriteSourceSizeHeight;
      } else {
        left = -originX * sourceSizeWidth;
        right = left + sourceSizeWidth;
        top = -originY * sourceSizeHeight;
        bottom = top + sourceSizeHeight;
      }
      return {left, right, top, bottom};
    }
    setExtent(child) {
      const transform = child.transform;
      const originX = transform.origin.x;
      const originY = transform.origin.y;
      const sourceSizeWidth = this.sourceSizeWidth;
      const sourceSizeHeight = this.sourceSizeHeight;
      let x;
      let y;
      let width;
      let height;
      if (this.trimmed) {
        x = this.spriteSourceSizeX - originX * sourceSizeWidth;
        y = this.spriteSourceSizeY - originY * sourceSizeHeight;
        width = this.spriteSourceSizeWidth;
        height = this.spriteSourceSizeHeight;
      } else {
        x = -originX * sourceSizeWidth;
        y = -originY * sourceSizeHeight;
        width = sourceSizeWidth;
        height = sourceSizeHeight;
      }
      transform.setExtent(x, y, width, height);
    }
    updateUVs() {
      const {x, y, width, height} = this;
      const baseTextureWidth = this.texture.width;
      const baseTextureHeight = this.texture.height;
      this.u0 = x / baseTextureWidth;
      this.v0 = y / baseTextureHeight;
      this.u1 = (x + width) / baseTextureWidth;
      this.v1 = (y + height) / baseTextureHeight;
    }
  }

  // node_modules/@phaserjs/phaser/textures/Texture.js
  class Texture8 {
    constructor(image, width, height, glConfig) {
      this.key = "";
      if (image) {
        width = image.width;
        height = image.height;
      }
      this.image = image;
      this.width = width;
      this.height = height;
      this.frames = new Map();
      this.data = {};
      this.addFrame("__BASE", 0, 0, width, height);
      BindingQueue21.add(this, glConfig);
    }
    addFrame(key, x, y, width, height) {
      if (this.frames.has(key)) {
        return null;
      }
      const frame2 = new Frame20(this, key, x, y, width, height);
      this.frames.set(key, frame2);
      if (!this.firstFrame || this.firstFrame.key === "__BASE") {
        this.firstFrame = frame2;
      }
      return frame2;
    }
    getFrame(key) {
      if (!key) {
        return this.firstFrame;
      }
      if (key instanceof Frame20) {
        key = key.key;
      }
      let frame2 = this.frames.get(key);
      if (!frame2) {
        console.warn(`Frame missing: ${key}`);
        frame2 = this.firstFrame;
      }
      return frame2;
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      const frame2 = this.frames.get("__BASE");
      frame2.setSize(width, height);
    }
    destroy() {
      if (this.binding) {
        this.binding.destroy();
      }
      this.frames.clear();
      this.data = null;
      this.image = null;
      this.firstFrame = null;
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/Shader.js
  class Shader7 {
    constructor(config2) {
      this.renderToFramebuffer = false;
      this.renderToDepthbuffer = false;
      if (config2) {
        this.fromConfig(config2);
      }
    }
    fromConfig(config2) {
      const {attributes = DefaultQuadAttributes7, fragmentShader = SINGLE_QUAD_FRAG5, height = GetHeight3(), renderToFramebuffer = false, renderToDepthbuffer = false, resolution = GetResolution3(), vertexShader = SINGLE_QUAD_VERT5, width = GetWidth3(), uniforms = DefaultQuadUniforms7} = config2;
      this.create(fragmentShader, vertexShader, uniforms, attributes);
      if (renderToFramebuffer) {
        this.renderToFramebuffer = true;
        const texture = new Texture8(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding4(texture);
        texture.binding = binding;
        binding.framebuffer = CreateFramebuffer4(binding.texture);
        if (renderToDepthbuffer) {
          this.renderToDepthbuffer = true;
          binding.depthbuffer = CreateDepthBuffer4(binding.framebuffer, texture.width, texture.height);
        }
        this.texture = texture;
        this.framebuffer = binding.framebuffer;
      }
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
      const fragmentShader = CreateShader7(fragmentShaderSource, gl.FRAGMENT_SHADER);
      const vertexShader = CreateShader7(vertexShaderSource, gl.VERTEX_SHADER);
      if (!fragmentShader || !vertexShader) {
        return;
      }
      const program = CreateProgram7(fragmentShader, vertexShader);
      if (!program) {
        return;
      }
      const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
      gl.useProgram(program);
      this.program = program;
      this.uniformSetters = CreateUniforms7(program);
      this.uniforms = new Map();
      for (const [key, value] of Object.entries(uniforms)) {
        this.uniforms.set(key, value);
      }
      this.attributes = CreateAttributes7(program, attribs);
      gl.useProgram(currentProgram);
    }
    updateUniforms(renderPass) {
    }
    bind(renderPass) {
      this.updateUniforms(renderPass);
      return this.setUniforms(renderPass);
    }
    setUniform(key, value) {
      const uniforms = this.uniforms;
      if (uniforms.has(key)) {
        uniforms.set(key, value);
        const setter = this.uniformSetters.get(key);
        setter(value);
      }
    }
    setUniforms(renderPass) {
      if (!this.program) {
        return false;
      }
      gl.useProgram(this.program);
      const uniforms = this.uniforms;
      for (const [name, setter] of this.uniformSetters.entries()) {
        setter(uniforms.get(name));
      }
      return true;
    }
    setAttributes(renderPass) {
      if (this.program) {
        const stride = renderPass.currentVertexBuffer.vertexByteSize;
        this.attributes.forEach((attrib) => {
          gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });
      }
    }
    destroy() {
      DeleteShaders8(this.program);
      DeleteGLTexture8(this.texture);
      DeleteFramebuffer8(this.framebuffer);
      this.uniforms.clear();
      this.uniformSetters.clear();
      this.attributes.clear();
      this.program = null;
      this.texture = null;
      this.framebuffer = null;
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/QuadShader.js
  class QuadShader6 extends Shader7 {
    constructor(config2 = {}) {
      const shaderConfig = config2;
      shaderConfig.attributes = !shaderConfig.attributes ? DefaultQuadAttributes7 : shaderConfig.attributes;
      super(shaderConfig);
    }
    bind(renderPass) {
      const uniforms = this.uniforms;
      uniforms.set("uProjectionMatrix", renderPass.projectionMatrix.data);
      uniforms.set("uCameraMatrix", renderPass.cameraMatrix.data);
      return super.bind(renderPass);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/glsl/MULTI_QUAD_FRAG.js
  const MULTI_QUAD_FRAG5 = `#define SHADER_NAME MULTI_QUAD_FRAG\r
\r
precision highp float;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
uniform sampler2D uTexture[%count%];\r
\r
void main (void)\r
{\r
    vec4 color;\r
\r
    %forloop%\r
\r
    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);\r
}`;

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/MultiTextureQuadShader.js
  class MultiTextureQuadShader6 extends QuadShader6 {
    constructor(config2 = {}) {
      if (!config2.fragmentShader) {
        config2.fragmentShader = MULTI_QUAD_FRAG5;
      }
      super(config2);
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
      const maxTextures = GetMaxTextures2();
      let src = "";
      for (let i = 1; i < maxTextures; i++) {
        if (i > 1) {
          src += "\n	else ";
        }
        if (i < maxTextures - 1) {
          src += `if (vTextureId < ${i}.5)`;
        }
        src += "\n	{";
        src += `
		color = texture2D(uTexture[${i}], vTextureCoord);`;
        src += "\n	}";
      }
      fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
      fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
      super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
    }
    bind(renderPass) {
      this.uniforms.set("uTexture", renderPass.textureIndex);
      return super.bind(renderPass);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetDefaultBlendMode.js
  function SetDefaultBlendMode6(renderPass, enable, sfactor, dfactor) {
    const entry = {enable, sfactor, dfactor};
    renderPass.blendModeStack[0] = entry;
    renderPass.currentBlendMode = entry;
    renderPass.defaultBlendMode = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetDefaultFramebuffer.js
  function SetDefaultFramebuffer6(renderPass, framebuffer = null, viewport) {
    const entry = {framebuffer, viewport};
    renderPass.framebufferStack[0] = entry;
    renderPass.currentFramebuffer = entry;
    renderPass.defaultFramebuffer = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetDefaultShader.js
  function SetDefaultShader6(renderPass, shader, textureID) {
    const entry = {shader, textureID};
    renderPass.shaderStack[0] = entry;
    renderPass.currentShader = entry;
    renderPass.defaultShader = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetDefaultVertexBuffer.js
  function SetDefaultVertexBuffer6(renderPass, buffer) {
    renderPass.vertexBufferStack[0] = buffer;
    renderPass.currentVertexBuffer = buffer;
    renderPass.defaultVertexBuffer = buffer;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetDefaultViewport.js
  function SetDefaultViewport6(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const entry = new Rectangle2(x, y, width, height);
    renderPass.viewportStack[0] = entry;
    renderPass.currentViewport = entry;
    renderPass.defaultViewport = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/RenderPass.js
  class RenderPass5 {
    constructor(renderer) {
      this.count = 0;
      this.prevCount = 0;
      this.flushTotal = 0;
      this.maxTextures = 0;
      this.currentActiveTexture = 0;
      this.startActiveTexture = 0;
      this.tempTextures = [];
      this.textureIndex = [];
      this.framebufferStack = [];
      this.currentFramebuffer = null;
      this.defaultFramebuffer = null;
      this.vertexBufferStack = [];
      this.currentVertexBuffer = null;
      this.defaultVertexBuffer = null;
      this.shaderStack = [];
      this.currentShader = null;
      this.defaultShader = null;
      this.viewportStack = [];
      this.currentViewport = null;
      this.defaultViewport = null;
      this.blendModeStack = [];
      this.currentBlendMode = null;
      this.defaultBlendMode = null;
      this.renderer = renderer;
      this.projectionMatrix = new Matrix42();
      this.reset();
    }
    reset() {
      const gl2 = this.renderer.gl;
      const indexLayout = [0, 1, 2, 2, 3, 0];
      this.quadShader = new QuadShader6();
      this.quadBuffer = new IndexedVertexBuffer5({isDynamic: false, indexLayout});
      this.quadCamera = new StaticCamera();
      CreateTempTextures5(this);
      SetDefaultFramebuffer6(this);
      SetDefaultBlendMode6(this, true, gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA);
      SetDefaultVertexBuffer6(this, new IndexedVertexBuffer5({batchSize: GetBatchSize(), indexLayout}));
      SetDefaultShader6(this, new MultiTextureQuadShader6());
    }
    resize(width, height) {
      Ortho4(0, width, height, 0, -1e3, 1e3, this.projectionMatrix);
      this.quadCamera.reset();
      SetDefaultViewport6(this, 0, 0, width, height);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindBlendMode.js
  function BindBlendMode5(renderPass, entry) {
    if (!entry) {
      entry = renderPass.currentBlendMode;
    }
    if (entry.enable) {
      gl.enable(gl.BLEND);
      gl.blendFunc(entry.sfactor, entry.dfactor);
    } else {
      gl.disable(gl.BLEND);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindVertexBuffer.js
  function BindVertexBuffer15(renderPass, buffer) {
    if (!buffer) {
      buffer = renderPass.currentVertexBuffer;
    }
    const indexBuffer = buffer.indexed ? buffer.indexBuffer : null;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/Start.js
  function Start5(renderPass) {
    renderPass.current2DCamera = renderPass.quadCamera;
    renderPass.cameraMatrix = renderPass.quadCamera.matrix;
    renderPass.count = 0;
    renderPass.flushTotal = 0;
    BindFramebuffer20(renderPass, false, renderPass.defaultFramebuffer);
    BindBlendMode5(renderPass, renderPass.defaultBlendMode);
    BindViewport21(renderPass, renderPass.defaultViewport);
    BindVertexBuffer15(renderPass, renderPass.defaultVertexBuffer);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/WebGLRendererInstance.js
  let instance2;
  const WebGLRendererInstance5 = {
    get: () => {
      return instance2;
    },
    set: (renderer) => {
      instance2 = renderer;
    }
  };

  // node_modules/@phaserjs/phaser/renderer/webgl1/WebGLRenderer.js
  class WebGLRenderer3 {
    constructor() {
      this.clearColor = [0, 0, 0, 1];
      this.clearBeforeRender = true;
      this.optimizeRedraw = false;
      this.autoResize = true;
      this.contextLost = false;
      this.width = GetWidth3();
      this.height = GetHeight3();
      this.resolution = GetResolution3();
      this.setBackgroundColor(GetBackgroundColor());
      const canvas = document.createElement("canvas");
      canvas.addEventListener("webglcontextlost", (event) => this.onContextLost(event), false);
      canvas.addEventListener("webglcontextrestored", () => this.onContextRestored(), false);
      this.canvas = canvas;
      this.initContext();
      WebGLRendererInstance5.set(this);
      this.renderPass = new RenderPass5(this);
      this.resize(this.width, this.height, this.resolution);
    }
    initContext() {
      const gl2 = this.canvas.getContext("webgl", GetWebGLContext3());
      GL20.set(gl2);
      this.gl = gl2;
      gl2.disable(gl2.DEPTH_TEST);
      gl2.disable(gl2.CULL_FACE);
    }
    resize(width, height, resolution = 1) {
      const calcWidth = width * resolution;
      const calcHeight = height * resolution;
      this.width = calcWidth;
      this.height = calcHeight;
      this.resolution = resolution;
      const canvas = this.canvas;
      canvas.width = calcWidth;
      canvas.height = calcHeight;
      if (this.autoResize) {
        canvas.style.width = width.toString() + "px";
        canvas.style.height = height.toString() + "px";
      }
      this.renderPass.resize(calcWidth, calcHeight);
    }
    onContextLost(event) {
      event.preventDefault();
      this.contextLost = true;
    }
    onContextRestored() {
      this.contextLost = false;
      this.initContext();
    }
    setBackgroundColor(color) {
      GetRGBArray5(color, this.clearColor);
      return this;
    }
    reset() {
    }
    render(renderData) {
      if (this.contextLost) {
        return;
      }
      const gl2 = this.gl;
      const renderPass = this.renderPass;
      ProcessBindingQueue5();
      if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
        return;
      }
      if (this.clearBeforeRender) {
        const cls = this.clearColor;
        gl2.clearColor(cls[0], cls[1], cls[2], cls[3]);
        gl2.clear(gl2.COLOR_BUFFER_BIT);
      }
      const worlds = renderData.worldData;
      Start5(renderPass);
      for (let i = 0; i < worlds.length; i++) {
        const {world: world2} = worlds[i];
        world2.renderGL(renderPass);
        world2.postRenderGL(renderPass);
      }
      End5(renderPass);
    }
    destroy() {
      WebGLRendererInstance5.set(void 0);
    }
  }

  // node_modules/@phaserjs/phaser/config/webgl/WebGL.js
  function WebGL2() {
    return () => {
      SetRenderer2(WebGLRenderer3);
    };
  }

  // node_modules/@phaserjs/phaser/config/webglcontext/SetWebGLContext.js
  function SetWebGLContext2(contextAttributes) {
    ConfigStore2.set(CONFIG_DEFAULTS.WEBGL_CONTEXT, contextAttributes);
  }

  // node_modules/@phaserjs/phaser/config/webglcontext/WebGLContext.js
  function WebGLContext2(contextAttributes) {
    return () => {
      SetWebGLContext2(contextAttributes);
    };
  }

  // node_modules/@phaserjs/phaser/config/index.js

  // node_modules/@phaserjs/phaser/cache/Cache.js
  const caches = new Map();
  const Cache = {
    get: (type) => {
      if (!caches.has(type)) {
        caches.set(type, new Map());
      }
      return caches.get(type);
    },
    getEntry: (cache, entry) => {
      if (caches.has(cache)) {
        return caches.get(cache).get(entry);
      }
    }
  };

  // node_modules/@phaserjs/phaser/math/RoundAwayFromZero.js
  function RoundAwayFromZero2(value) {
    return value > 0 ? Math.ceil(value) : Math.floor(value);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Add.js
  function Add6(a, b, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 + b00, a01 + b01, a02 + b02, a03 + b03, a10 + b10, a11 + b11, a12 + b12, a13 + b13, a20 + b20, a21 + b21, a22 + b22, a23 + b23, a30 + b30, a31 + b31, a32 + b32, a33 + b33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/AddTranslationFromFloats.js
  function AddTranslationFromFloats2(matrix2, x, y, z) {
    const data = matrix2.data;
    data[12] += x;
    data[13] += y;
    data[14] += z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Adjoint.js
  function Adjoint2(matrix2, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;
    return out.set(a11 * b11 - a12 * b10 + a13 * b09, a02 * b10 - a01 * b11 - a03 * b09, a31 * b05 - a32 * b04 + a33 * b03, a22 * b04 - a21 * b05 - a23 * b03, a12 * b08 - a10 * b11 - a13 * b07, a00 * b11 - a02 * b08 + a03 * b07, a32 * b02 - a30 * b05 - a33 * b01, a20 * b05 - a22 * b02 + a23 * b01, a10 * b10 - a11 * b08 + a13 * b06, a01 * b08 - a00 * b10 - a03 * b06, a30 * b04 - a31 * b02 + a33 * b00, a21 * b02 - a20 * b04 - a23 * b00, a11 * b07 - a10 * b09 - a12 * b06, a00 * b09 - a01 * b07 + a02 * b06, a31 * b01 - a30 * b03 - a32 * b00, a20 * b03 - a21 * b01 + a22 * b00);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Clone.js
  function Clone4(src) {
    return new Matrix42(src);
  }

  // node_modules/@phaserjs/phaser/math/mat4/CopyFrom.js
  function CopyFrom18(src, dest) {
    return dest.fromArray(src.data);
  }

  // node_modules/@phaserjs/phaser/math/mat4/CopyPosition.js
  function CopyPosition2(src, dest) {
    const srcData = src.data;
    const destData = dest.data;
    destData[12] = srcData[12];
    destData[13] = srcData[13];
    destData[14] = srcData[14];
    dest.onChange(dest);
    return dest;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Determinant.js
  function Determinant2(matrix2) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const det22x33 = m22 * m33 - m32 * m23;
    const det21x33 = m21 * m33 - m31 * m23;
    const det21x32 = m21 * m32 - m31 * m22;
    const det20x33 = m20 * m33 - m30 * m23;
    const det20x32 = m20 * m32 - m22 * m30;
    const det20x31 = m20 * m31 - m30 * m21;
    const cofact00 = +(m11 * det22x33 - m12 * det21x33 + m13 * det21x32);
    const cofact01 = -(m10 * det22x33 - m12 * det20x33 + m13 * det20x32);
    const cofact02 = +(m10 * det21x33 - m11 * det20x33 + m13 * det20x31);
    const cofact03 = -(m10 * det21x32 - m11 * det20x32 + m12 * det20x31);
    return m00 * cofact00 + m01 * cofact01 + m02 * cofact02 + m03 * cofact03;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Equals.js
  function Equals4(a, b) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return a00 === b00 && a01 === b01 && a02 === b02 && a03 === b03 && a10 === b10 && a11 === b11 && a12 === b12 && a13 === b13 && a20 === b20 && a21 === b21 && a22 === b22 && a23 === b23 && a30 === b30 && a31 === b31 && a32 === b32 && a33 === b33;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Frobenius.js
  function Frobenius2(matrix2) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    return Math.hypot(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromQuat.js
  function FromQuat2(q, out = new Matrix42()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    return out.set(1 - yy - zz, yx + wz, zx - wy, 0, yx - wz, 1 - xx - zz, zy + wx, 0, zx + wy, zy - wx, 1 - xx - yy, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromRotation.js
  function FromRotation2(angle, axis, out = new Matrix42()) {
    let {x, y, z} = axis;
    let len = Math.hypot(x, y, z);
    if (len < 1e-5) {
      return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const t = 1 - c;
    return out.set(x * x * t + c, y * x * t + z * s, z * x * t - y * s, 0, x * y * t - z * s, y * y * t + c, z * y * t + x * s, 0, x * z * t + y * s, y * z * t - x * s, z * z * t + c, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromRotationTranslation.js
  function FromRotationTranslation2(q, v, out = new Matrix42()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: vx, y: vy, z: vz} = v;
    return out.set(1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, vx, vy, vz, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromRotationTranslationScale.js
  function FromRotationTranslationScale4(q, v, s, out = new Matrix42()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: sx, y: sy, z: sz} = s;
    const {x: vx, y: vy, z: vz} = v;
    return out.set((1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, vx, vy, vz, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromRotationTranslationScaleOrigin.js
  function FromRotationTranslationScaleOrigin2(q, v, s, o, out = new Matrix42()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: sx, y: sy, z: sz} = s;
    const {x: ox, y: oy, z: oz} = o;
    const {x: vx, y: vy, z: vz} = v;
    const out0 = (1 - (yy + zz)) * sx;
    const out1 = (xy + wz) * sx;
    const out2 = (xz - wy) * sx;
    const out4 = (xy - wz) * sy;
    const out5 = (1 - (xx + zz)) * sy;
    const out6 = (yz + wx) * sy;
    const out8 = (xz + wy) * sz;
    const out9 = (yz - wx) * sz;
    const out10 = (1 - (xx + yy)) * sz;
    return out.set(out0, out1, out2, 0, out4, out5, out6, 0, out8, out9, out10, 0, vx + ox - (out0 * ox + out4 * oy + out8 * oz), vy + oy - (out1 * ox + out5 * oy + out9 * oz), vz + oz - (out2 * ox + out6 * oy + out10 * oz), 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromRotationXYTranslation.js
  function FromRotationXYTranslation2(rotation, position, translateFirst = true, out = new Matrix42()) {
    const {x, y, z} = position;
    const sx = Math.sin(rotation.x);
    const cx = Math.cos(rotation.x);
    const sy = Math.sin(rotation.y);
    const cy = Math.cos(rotation.y);
    let a30 = x;
    let a31 = y;
    let a32 = z;
    const b21 = -sx;
    const c01 = 0 - b21 * sy;
    const c02 = 0 - cx * sy;
    const c21 = b21 * cy;
    const c22 = cx * cy;
    if (!translateFirst) {
      a30 = cy * x + sy * z;
      a31 = c01 * x + cx * y + c21 * z;
      a32 = c02 * x + sx * y + c22 * z;
    }
    return out.set(cy, c01, c02, 0, 0, cx, sx, 0, sy, c21, c22, 0, a30, a31, a32, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromScaling.js
  function FromScaling2(vec3, out = new Matrix42()) {
    const {x, y, z} = vec3;
    return out.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromTranslation.js
  function FromTranslation2(vec3, out = new Matrix42()) {
    const {x, y, z} = vec3;
    return out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromXRotation.js
  function FromXRotation2(angle, out = new Matrix42()) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return out.set(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromYRotation.js
  function FromYRotation2(angle, out = new Matrix42()) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return out.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/FromZRotation.js
  function FromZRotation2(angle, out = new Matrix42()) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return out.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Frustum.js
  function Frustum2(left, right, bottom, top, near, far, out = new Matrix42()) {
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const nf = 1 / (near - far);
    return out.set(near * 2 * rl, 0, 0, 0, 0, near * 2 * tb, 0, 0, (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1, 0, 0, far * near * 2 * nf, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Vec3.js
  class Vec32 {
    constructor(x = 0, y = 0, z = 0) {
      this.set(x, y, z);
    }
    set(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    toArray(dst = [], index69 = 0) {
      const {x, y, z} = this;
      dst[index69] = x;
      dst[index69 + 1] = y;
      dst[index69 + 2] = z;
      return dst;
    }
    fromArray(src, index69 = 0) {
      return this.set(src[index69], src[index69 + 1], src[index69 + 2]);
    }
    toString() {
      const {x, y, z} = this;
      return `{ x=${x}, y=${y}, z=${z} }`;
    }
  }

  // node_modules/@phaserjs/phaser/math/mat4/GetScaling.js
  function GetScaling2(matrix2, out = new Vec32()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix2.data;
    return out.set(Math.hypot(m00, m01, m02), Math.hypot(m10, m11, m12), Math.hypot(m20, m21, m22));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Quaternion.js
  class Quaternion2 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      this.onChange = NOOP77;
    }
    set(x = 0, y = 0, z = 0, w = 1) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      this.onChange(this);
      return this;
    }
    set x(value) {
      const prev = this._x;
      this._x = value;
      if (value !== prev) {
        this.onChange(this);
      }
    }
    get x() {
      return this._x;
    }
    set y(value) {
      const prev = this._y;
      this._y = value;
      if (value !== prev) {
        this.onChange(this);
      }
    }
    get y() {
      return this._y;
    }
    set z(value) {
      const prev = this._z;
      this._z = value;
      if (value !== prev) {
        this.onChange(this);
      }
    }
    get z() {
      return this._z;
    }
    set w(value) {
      const prev = this._w;
      this._w = value;
      if (value !== prev) {
        this.onChange(this);
      }
    }
    get w() {
      return this._w;
    }
    toArray(dst = [], index69 = 0) {
      const {x, y, z, w} = this;
      dst[index69] = x;
      dst[index69 + 1] = y;
      dst[index69 + 2] = z;
      dst[index69 + 3] = w;
      return dst;
    }
    fromArray(src, index69 = 0) {
      return this.set(src[index69], src[index69 + 1], src[index69 + 2], src[index69 + 3]);
    }
    destroy() {
      this.onChange = NOOP77;
    }
    toString() {
      const {x, y, z, w} = this;
      return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
  }

  // node_modules/@phaserjs/phaser/math/mat4/GetRotation.js
  function GetRotation2(matrix2, out = new Quaternion2()) {
    const scaling = GetScaling2(matrix2);
    const is1 = 1 / scaling.x;
    const is2 = 1 / scaling.y;
    const is3 = 1 / scaling.z;
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix2.data;
    const sm11 = m00 * is1;
    const sm12 = m01 * is2;
    const sm13 = m02 * is3;
    const sm21 = m10 * is1;
    const sm22 = m11 * is2;
    const sm23 = m12 * is3;
    const sm31 = m20 * is1;
    const sm32 = m21 * is2;
    const sm33 = m22 * is3;
    const trace = sm11 + sm22 + sm33;
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      return out.set((sm23 - sm32) / S, (sm31 - sm13) / S, (sm12 - sm21) / S, 0.25 * S);
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      return out.set(0.25 * S, (sm12 + sm21) / S, (sm31 + sm13) / S, (sm23 - sm32) / S);
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      return out.set((sm12 + sm21) / S, 0.25 * S, (sm23 + sm32) / S, (sm31 - sm13) / S);
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      return out.set((sm31 + sm13) / S, (sm23 + sm32) / S, 0.25 * S, (sm12 - sm21) / S);
    }
  }

  // node_modules/@phaserjs/phaser/math/mat4/GetTranslation.js
  function GetTranslation2(matrix2, out = new Vec32()) {
    const data = matrix2.data;
    return out.set(data[12], data[13], data[14]);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Invert.js
  function Invert3(matrix2, out = new Matrix42()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const det22x33 = m22 * m33 - m32 * m23;
    const det21x33 = m21 * m33 - m31 * m23;
    const det21x32 = m21 * m32 - m31 * m22;
    const det20x33 = m20 * m33 - m30 * m23;
    const det20x32 = m20 * m32 - m22 * m30;
    const det20x31 = m20 * m31 - m30 * m21;
    const cofact00 = +(m11 * det22x33 - m12 * det21x33 + m13 * det21x32);
    const cofact01 = -(m10 * det22x33 - m12 * det20x33 + m13 * det20x32);
    const cofact02 = +(m10 * det21x33 - m11 * det20x33 + m13 * det20x31);
    const cofact03 = -(m10 * det21x32 - m11 * det20x32 + m12 * det20x31);
    const det = m00 * cofact00 + m01 * cofact01 + m02 * cofact02 + m03 * cofact03;
    if (det === 0) {
      return out;
    }
    const detInv = 1 / det;
    const det12x33 = m12 * m33 - m32 * m13;
    const det11x33 = m11 * m33 - m31 * m13;
    const det11x32 = m11 * m32 - m31 * m12;
    const det10x33 = m10 * m33 - m30 * m13;
    const det10x32 = m10 * m32 - m30 * m12;
    const det10x31 = m10 * m31 - m30 * m11;
    const det12x23 = m12 * m23 - m22 * m13;
    const det11x23 = m11 * m23 - m21 * m13;
    const det11x22 = m11 * m22 - m21 * m12;
    const det10x23 = m10 * m23 - m20 * m13;
    const det10x22 = m10 * m22 - m20 * m12;
    const det10x21 = m10 * m21 - m20 * m11;
    const cofact10 = -(m01 * det22x33 - m02 * det21x33 + m03 * det21x32);
    const cofact11 = +(m00 * det22x33 - m02 * det20x33 + m03 * det20x32);
    const cofact12 = -(m00 * det21x33 - m01 * det20x33 + m03 * det20x31);
    const cofact13 = +(m00 * det21x32 - m01 * det20x32 + m02 * det20x31);
    const cofact20 = +(m01 * det12x33 - m02 * det11x33 + m03 * det11x32);
    const cofact21 = -(m00 * det12x33 - m02 * det10x33 + m03 * det10x32);
    const cofact22 = +(m00 * det11x33 - m01 * det10x33 + m03 * det10x31);
    const cofact23 = -(m00 * det11x32 - m01 * det10x32 + m02 * det10x31);
    const cofact30 = -(m01 * det12x23 - m02 * det11x23 + m03 * det11x22);
    const cofact31 = +(m00 * det12x23 - m02 * det10x23 + m03 * det10x22);
    const cofact32 = -(m00 * det11x23 - m01 * det10x23 + m03 * det10x21);
    const cofact33 = +(m00 * det11x22 - m01 * det10x22 + m02 * det10x21);
    return out.set(cofact00 * detInv, cofact10 * detInv, cofact20 * detInv, cofact30 * detInv, cofact01 * detInv, cofact11 * detInv, cofact21 * detInv, cofact31 * detInv, cofact02 * detInv, cofact12 * detInv, cofact22 * detInv, cofact32 * detInv, cofact03 * detInv, cofact13 * detInv, cofact23 * detInv, cofact33 * detInv);
  }

  // node_modules/@phaserjs/phaser/math/mat4/LookAt.js
  function LookAt2(eye, center, up, out = new Matrix42()) {
    const {x: eyex, y: eyey, z: eyez} = eye;
    const {x: upx, y: upy, z: upz} = up;
    const {x: centerx, y: centery, z: centerz} = center;
    if (Math.abs(eyex - centerx) < 1e-5 && Math.abs(eyey - centery) < 1e-5 && Math.abs(eyez - centerz) < 1e-5) {
      return Identity3(out);
    }
    let z0 = eyex - centerx;
    let z1 = eyey - centery;
    let z2 = eyez - centerz;
    let len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    let y0 = z1 * x2 - z2 * x1;
    let y1 = z2 * x0 - z0 * x2;
    let y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }
    return out.set(x0, y0, z0, 0, x1, y1, z1, 0, x2, y2, z2, 0, -(x0 * eyex + x1 * eyey + x2 * eyez), -(y0 * eyex + y1 * eyey + y2 * eyez), -(z0 * eyex + z1 * eyey + z2 * eyez), 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Multiply.js
  function Multiply3(a, b, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b01 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b02 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b03 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/MultiplyScalar.js
  function MultiplyScalar2(matrix2, scalar, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * scalar, a01 * scalar, a02 * scalar, a03 * scalar, a10 * scalar, a11 * scalar, a12 * scalar, a13 * scalar, a20 * scalar, a21 * scalar, a22 * scalar, a23 * scalar, a30 * scalar, a31 * scalar, a32 * scalar, a33 * scalar);
  }

  // node_modules/@phaserjs/phaser/math/mat4/MultiplyScalarAndAdd.js
  function MultiplyScalarAndAdd2(a, b, scalar, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 + b00 * scalar, a01 + b01 * scalar, a02 + b02 * scalar, a03 + b03 * scalar, a10 + b10 * scalar, a11 + b11 * scalar, a12 + b12 * scalar, a13 + b13 * scalar, a20 + b20 * scalar, a21 + b21 * scalar, a22 + b22 * scalar, a23 + b23 * scalar, a30 + b30 * scalar, a31 + b31 * scalar, a32 + b32 * scalar, a33 + b33 * scalar);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Perspective.js
  function Perspective2(fovY, aspect, near, far, out = new Matrix42()) {
    const f = 1 / Math.tan(fovY / 2);
    let m22 = -1;
    let m32 = -2 * near;
    if (far !== null && far !== Infinity) {
      const nf = 1 / (near - far);
      m22 = (far + near) * nf;
      m32 = 2 * far * near * nf;
    }
    return out.set(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, m22, -1, 0, 0, m32, 0);
  }

  // node_modules/@phaserjs/phaser/math/mat4/PerspectiveFromFieldOfView.js
  function PerspectiveFromFieldOfView2(fov, near, far, out = new Matrix42()) {
    const upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    const downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    const xScale = 2 / (leftTan + rightTan);
    const yScale = 2 / (upTan + downTan);
    return out.set(xScale, 0, 0, 0, 0, yScale, 0, 0, -((leftTan - rightTan) * xScale * 0.5), (upTan - downTan) * yScale * 0.5, far / (near - far), -1, 0, 0, far * near / (near - far), 0);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Rotate.js
  function Rotate2(matrix2, angle, axis, out = new Matrix42()) {
    let {x, y, z} = axis;
    let len = Math.hypot(x, y, z);
    if (len < 1e-5) {
      return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const t = 1 - c;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    const b00 = x * x * t + c;
    const b01 = y * x * t + z * s;
    const b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s;
    const b11 = y * y * t + c;
    const b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s;
    const b21 = y * z * t - x * s;
    const b22 = z * z * t + c;
    return out.set(a00 * b00 + a10 * b01 + a20 * b02, a01 * b00 + a11 * b01 + a21 * b02, a02 * b00 + a12 * b01 + a22 * b02, a03 * b00 + a13 * b01 + a23 * b02, a00 * b10 + a10 * b11 + a20 * b12, a01 * b10 + a11 * b11 + a21 * b12, a02 * b10 + a12 * b11 + a22 * b12, a03 * b10 + a13 * b11 + a23 * b12, a00 * b20 + a10 * b21 + a20 * b22, a01 * b20 + a11 * b21 + a21 * b22, a02 * b20 + a12 * b21 + a22 * b22, a03 * b20 + a13 * b21 + a23 * b22, a30, a31, a32, a33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/RotateX.js
  function RotateX10(matrix2, angle, out = new Matrix42()) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00, a01, a02, a03, a10 * c + a20 * s, a11 * c + a21 * s, a12 * c + a22 * s, a13 * c + a23 * s, a20 * c - a10 * s, a21 * c - a11 * s, a22 * c - a12 * s, a23 * c - a13 * s, a30, a31, a32, a33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/RotateY.js
  function RotateY10(matrix2, angle, out = new Matrix42()) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * c - a20 * s, a01 * c - a21 * s, a02 * c - a22 * s, a03 * c - a23 * s, a10, a11, a12, a13, a00 * s + a20 * c, a01 * s + a21 * c, a02 * s + a22 * c, a03 * s + a23 * c, a30, a31, a32, a33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/RotateZ.js
  function RotateZ10(matrix2, angle, out = new Matrix42()) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * c + a10 * s, a01 * c + a11 * s, a02 * c + a12 * s, a03 * c + a13 * s, a10 * c - a00 * s, a11 * c - a01 * s, a12 * c - a02 * s, a13 * c - a03 * s, a20, a21, a22, a23, a30, a31, a32, a33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Scale.js
  function Scale16(matrix2, v, out = new Matrix42()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const {x, y, z} = v;
    return out.set(m00 * x, m01 * x, m02 * x, m03 * x, m10 * y, m11 * y, m12 * y, m13 * y, m20 * z, m21 * z, m22 * z, m23 * z, m30, m31, m32, m33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/SetTranslation.js
  function SetTranslation2(matrix2, vec3) {
    const data = matrix2.data;
    const {x, y, z} = vec3;
    data[12] = x;
    data[13] = y;
    data[14] = z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // node_modules/@phaserjs/phaser/math/mat4/SetTranslationFromFloats.js
  function SetTranslationFromFloats2(matrix2, x, y, z) {
    const data = matrix2.data;
    data[12] = x;
    data[13] = y;
    data[14] = z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Subtract.js
  function Subtract7(a, b, out = new Matrix42()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 - b00, a01 - b01, a02 - b02, a03 - b03, a10 - b10, a11 - b11, a12 - b12, a13 - b13, a20 - b20, a21 - b21, a22 - b22, a23 - b23, a30 - b30, a31 - b31, a32 - b32, a33 - b33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/TargetTo.js
  function TargetTo2(eye, target, up, out = new Matrix42()) {
    const {x: eyex, y: eyey, z: eyez} = eye;
    const {x: upx, y: upy, z: upz} = up;
    const {x: targetx, y: targety, z: targetz} = target;
    let z0 = eyex - targetx;
    let z1 = eyey - targety;
    let z2 = eyez - targetz;
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      z0 *= len;
      z1 *= len;
      z2 *= len;
    }
    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    return out.set(x0, x1, x2, 0, z1 * x2 - z2 * x1, z2 * x0 - z0 * x2, z0 * x1 - z1 * x0, 0, z0, z1, z2, 0, eyex, eyey, eyez, 1);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Translate.js
  function Translate2(matrix2, vec3, out = new Matrix42()) {
    const {x, y, z} = vec3;
    const data = matrix2.data;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
    if (matrix2 === out) {
      data[12] = a00 * x + a10 * y + a20 * z + a30;
      data[13] = a01 * x + a11 * y + a21 * z + a31;
      data[14] = a02 * x + a12 * y + a22 * z + a32;
      data[15] = a03 * x + a13 * y + a23 * z + a33;
    } else {
      out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/math/mat4/TranslateFromFloats.js
  function TranslateFromFloats2(matrix2, x, y, z, out = new Matrix42()) {
    const data = matrix2.data;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
    if (matrix2 === out) {
      data[12] = a00 * x + a10 * y + a20 * z + a30;
      data[13] = a01 * x + a11 * y + a21 * z + a31;
      data[14] = a02 * x + a12 * y + a22 * z + a32;
      data[15] = a03 * x + a13 * y + a23 * z + a33;
    } else {
      out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/math/mat4/Transpose.js
  function Transpose4(matrix2, out = new Matrix42()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    return out.set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33);
  }

  // node_modules/@phaserjs/phaser/math/mat4/Zero.js
  function Zero16(matrix2) {
    return matrix2.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  // node_modules/@phaserjs/phaser/index-7ab78917.js
  var index41 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Add: Add6,
    AddTranslationFromFloats: AddTranslationFromFloats2,
    Adjoint: Adjoint2,
    Clone: Clone4,
    CopyFrom: CopyFrom18,
    CopyPosition: CopyPosition2,
    Determinant: Determinant2,
    Equals: Equals4,
    Frobenius: Frobenius2,
    FromQuat: FromQuat2,
    FromRotation: FromRotation2,
    FromRotationTranslation: FromRotationTranslation2,
    FromRotationTranslationScale: FromRotationTranslationScale4,
    FromRotationTranslationScaleOrigin: FromRotationTranslationScaleOrigin2,
    FromRotationXYTranslation: FromRotationXYTranslation2,
    FromScaling: FromScaling2,
    FromTranslation: FromTranslation2,
    FromXRotation: FromXRotation2,
    FromYRotation: FromYRotation2,
    FromZRotation: FromZRotation2,
    Frustum: Frustum2,
    GetRotation: GetRotation2,
    GetScaling: GetScaling2,
    GetTranslation: GetTranslation2,
    Identity: Identity3,
    Invert: Invert3,
    LookAt: LookAt2,
    Matrix4: Matrix42,
    Multiply: Multiply3,
    MultiplyScalar: MultiplyScalar2,
    MultiplyScalarAndAdd: MultiplyScalarAndAdd2,
    Ortho: Ortho4,
    Perspective: Perspective2,
    PerspectiveFromFieldOfView: PerspectiveFromFieldOfView2,
    Rotate: Rotate2,
    RotateX: RotateX10,
    RotateY: RotateY10,
    RotateZ: RotateZ10,
    Scale: Scale16,
    SetTranslation: SetTranslation2,
    SetTranslationFromFloats: SetTranslationFromFloats2,
    Subtract: Subtract7,
    TargetTo: TargetTo2,
    Translate: Translate2,
    TranslateFromFloats: TranslateFromFloats2,
    Transpose: Transpose4,
    Zero: Zero16
  });

  // node_modules/@phaserjs/phaser/math/vec2/Vec2.js
  class Vec27 {
    constructor(x = 0, y = 0) {
      this.set(x, y);
    }
    set(x = 0, y = 0) {
      this.x = x;
      this.y = y;
      return this;
    }
    toArray(dst = [], index69 = 0) {
      const {x, y} = this;
      dst[index69] = x;
      dst[index69 + 1] = y;
      return dst;
    }
    fromArray(src, index69 = 0) {
      return this.set(src[index69], src[index69 + 1]);
    }
    toString() {
      const {x, y} = this;
      return `{ x=${x}, y=${y} }`;
    }
  }

  // node_modules/@phaserjs/phaser/math/vec2/Vec2Callback.js
  class Vec2Callback2 extends Vec27 {
    constructor(onChange, x = 0, y = 0) {
      super(x, y);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP77;
    }
    set(x = 0, y = 0) {
      this._x = x;
      this._y = y;
      if (this.onChange) {
        this.onChange(this);
      }
      return this;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      const prev = this._x;
      this._x = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get y() {
      return this._y;
    }
    set y(value) {
      const prev = this._y;
      this._y = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
  }

  // node_modules/@phaserjs/phaser/math/angle/AngleBetween.js
  function AngleBetween2(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  }

  // node_modules/@phaserjs/phaser/math/angle/AngleBetweenY.js
  function AngleBetweenY2(x1, y1, x2, y2) {
    return Math.atan2(x2 - x1, y2 - y1);
  }

  // node_modules/@phaserjs/phaser/math/const.js
  const MATH_CONST = {
    PI2: Math.PI * 2,
    HALF_PI: Math.PI * 0.5,
    EPSILON: 1e-6,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -9007199254740991,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991
  };

  // node_modules/@phaserjs/phaser/math/angle/CounterClockwise.js
  function CounterClockwise2(angle) {
    if (angle > Math.PI) {
      angle -= MATH_CONST.PI2;
    }
    return Math.abs(((angle + MATH_CONST.HALF_PI) % MATH_CONST.PI2 - MATH_CONST.PI2) % MATH_CONST.PI2);
  }

  // node_modules/@phaserjs/phaser/math/angle/NormalizeAngle.js
  function NormalizeAngle2(angle) {
    angle = angle % MATH_CONST.PI2;
    if (angle >= 0) {
      return angle;
    } else {
      return angle + MATH_CONST.PI2;
    }
  }

  // node_modules/@phaserjs/phaser/math/angle/ReverseAngle.js
  function ReverseAngle2(angle) {
    return NormalizeAngle2(angle + Math.PI);
  }

  // node_modules/@phaserjs/phaser/math/angle/RotateAngleTo.js
  function RotateAngleTo2(currentAngle, targetAngle, lerp = 0.05) {
    if (currentAngle === targetAngle) {
      return currentAngle;
    }
    if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= MATH_CONST.PI2 - lerp) {
      currentAngle = targetAngle;
    } else {
      if (Math.abs(targetAngle - currentAngle) > Math.PI) {
        if (targetAngle < currentAngle) {
          targetAngle += MATH_CONST.PI2;
        } else {
          targetAngle -= MATH_CONST.PI2;
        }
      }
      if (targetAngle > currentAngle) {
        currentAngle += lerp;
      } else if (targetAngle < currentAngle) {
        currentAngle -= lerp;
      }
    }
    return currentAngle;
  }

  // node_modules/@phaserjs/phaser/math/angle/ShortestAngleBetween.js
  function ShortestAngleBetween2(angle1, angle2) {
    const difference = angle2 - angle1;
    if (difference === 0) {
      return 0;
    }
    const times = Math.floor((difference - -180) / 360);
    return difference - times * 360;
  }

  // node_modules/@phaserjs/phaser/math/Wrap.js
  function Wrap3(value, min, max) {
    const range = max - min;
    return min + ((value - min) % range + range) % range;
  }

  // node_modules/@phaserjs/phaser/math/angle/WrapAngle.js
  function WrapAngle2(angle) {
    return Wrap3(angle, -Math.PI, Math.PI);
  }

  // node_modules/@phaserjs/phaser/math/angle/WrapAngleDegrees.js
  function WrapAngleDegrees2(angle) {
    return Wrap3(angle, -180, 180);
  }

  // node_modules/@phaserjs/phaser/index-e54c7a92.js
  var index42 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AngleBetween: AngleBetween2,
    AngleBetweenY: AngleBetweenY2,
    CounterClockwise: CounterClockwise2,
    NormalizeAngle: NormalizeAngle2,
    ReverseAngle: ReverseAngle2,
    RotateAngleTo: RotateAngleTo2,
    ShortestAngleBetween: ShortestAngleBetween2,
    WrapAngle: WrapAngle2,
    WrapAngleDegrees: WrapAngleDegrees2
  });

  // node_modules/@phaserjs/phaser/camera/Camera.js
  class Camera {
    constructor() {
      this._rotation = 0;
      this.type = "Camera";
      this.dirtyRender = true;
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.matrix = Identity3();
      this.bounds = new Rectangle2();
      this.worldTransform = new Matrix2D2();
      this.position = new Vec2Callback2(() => this.updateTransform(), 0, 0);
      this.scale = new Vec2Callback2(() => this.updateTransform(), 1, 1);
      this.origin = new Vec2Callback2(() => this.updateTransform(), 0.5, 0.5);
      this.reset();
    }
    updateTransform() {
      const matrix2 = this.matrix.data;
      const px = this.position.x;
      const py = this.position.y;
      const sx = this.scale.x;
      const sy = this.scale.y;
      const ox = -px + this.width * this.origin.x;
      const oy = -py + this.height * this.origin.y;
      const z = Math.sin(this.rotation);
      const w = Math.cos(this.rotation);
      const z2 = z + z;
      const zz = z * z2;
      const wz = w * z2;
      const out0 = (1 - zz) * sx;
      const out1 = wz * sx;
      const out4 = -wz * sy;
      const out5 = (1 - zz) * sy;
      matrix2[0] = out0;
      matrix2[1] = out1;
      matrix2[4] = out4;
      matrix2[5] = out5;
      matrix2[12] = px + ox - (out0 * ox + out4 * oy);
      matrix2[13] = py + oy - (out1 * ox + out5 * oy);
      this.worldTransform.set(w * sx, z * sx, -z * sy, w * sy, -px, -py);
      const bw = this.width * (1 / sx);
      const bh = this.height * (1 / sy);
      this.bounds.set(ox - bw / 2, oy - bh / 2, bw, bh);
      this.dirtyRender = true;
    }
    reset() {
      const width = this.renderer.width;
      const height = this.renderer.height;
      this.width = width;
      this.height = height;
      this.bounds.set(0, 0, width, height);
    }
    set rotation(value) {
      if (value !== this._rotation) {
        this._rotation = WrapAngle2(value);
        this.updateTransform();
      }
    }
    get rotation() {
      return this._rotation;
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.origin.destroy();
      this.world = null;
      this.worldTransform = null;
      this.renderer = null;
      this.matrix = null;
      this.bounds = null;
    }
  }

  // node_modules/@phaserjs/phaser/index-bf57ce5d.js
  var index62 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Camera,
    StaticCamera
  });

  // node_modules/@phaserjs/phaser/math/vec3/Backward.js
  function Backward14() {
    return new Vec32(0, 0, -1);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Down.js
  function Down14() {
    return new Vec32(0, -1, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Forward.js
  function Forward3() {
    return new Vec32(0, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Left.js
  function Left2() {
    return new Vec32(-1, 0, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Right.js
  function Right3() {
    return new Vec32(1, 0, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Up.js
  function Up2() {
    return new Vec32(0, 1, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Zero.js
  function Zero18() {
    return new Vec32(0, 0, 0);
  }

  // node_modules/@phaserjs/phaser/math/vec3/const.js
  const UP = Up2();
  const DOWN = Down14();
  const LEFT = Left2();
  const RIGHT = Right3();
  const FORWARD = Forward3();
  const BACKWARD = Backward14();
  const ZERO = Zero18();

  // node_modules/@phaserjs/phaser/math/vec3/Abs.js
  function Abs4(a, out = new Vec32()) {
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Add.js
  function Add2(a, b, out = new Vec32()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/AddScalar.js
  function AddScalar4(a, scalar, out = new Vec32()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Dot.js
  function Dot4(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Angle.js
  function Angle2(a, b) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
    const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
    const mag = mag1 * mag2;
    const c = mag && Dot4(a, b) / mag;
    return Math.acos(Math.min(Math.max(c, -1), 1));
  }

  // node_modules/@phaserjs/phaser/math/Bezier.js
  function Bezier4(a, b, c, d, t) {
    const inverseFactor = 1 - t;
    const inverseFactorTimesTwo = inverseFactor * inverseFactor;
    const factorTimes2 = t * t;
    const factor1 = inverseFactorTimesTwo * inverseFactor;
    const factor2 = 3 * t * inverseFactorTimesTwo;
    const factor3 = 3 * factorTimes2 * inverseFactor;
    const factor4 = factorTimes2 * t;
    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Bezier.js
  function Bezier6(a, b, c, d, t, out = new Vec32()) {
    return out.set(Bezier4(t, a.x, b.x, c.x, d.x), Bezier4(t, a.y, b.y, c.y, d.y), Bezier4(t, a.z, b.z, c.z, d.z));
  }

  // node_modules/@phaserjs/phaser/math/CatmullRom.js
  function CatmullRom4(t, p0, p1, p2, p3) {
    const v0 = (p2 - p0) * 0.5;
    const v1 = (p3 - p1) * 0.5;
    const t2 = t * t;
    const t3 = t * t2;
    return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
  }

  // node_modules/@phaserjs/phaser/math/vec3/CatmullRom.js
  function CatmullRom6(p1, p2, p3, p4, t, out = new Vec32()) {
    return out.set(CatmullRom4(t, p1.x, p2.x, p3.x, p4.x), CatmullRom4(t, p1.y, p2.y, p3.y, p4.y), CatmullRom4(t, p1.z, p2.z, p3.z, p4.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Ceil.js
  function Ceil4(a, out = new Vec32()) {
    return out.set(Math.ceil(a.x), Math.ceil(a.y), Math.ceil(a.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Scale.js
  function Scale18(a, scalar, out = new Vec32()) {
    return out.set(a.x * scalar, a.y * scalar, a.z * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Center.js
  function Center4(a, b, out = new Vec32()) {
    Add2(a, b, out);
    return Scale18(out, 0.5, out);
  }

  // node_modules/@phaserjs/phaser/math/Clamp.js
  function Clamp2(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Clamp.js
  function Clamp19(a, min, max, out = new Vec32()) {
    return out.set(Clamp2(a.x, min.x, max.x), Clamp2(a.y, min.y, max.y), Clamp2(a.z, min.z, max.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/DivideScalar.js
  function DivideScalar4(a, scalar, out = new Vec32()) {
    const {x, y, z} = a;
    return out.set(x / scalar, y / scalar, z / scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Length.js
  function Length4(a) {
    const {x, y, z} = a;
    return Math.sqrt(x * x + y * y + z * z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/ClampLength.js
  function ClampLength4(a, min, max, out = new Vec32()) {
    const length = Length4(a);
    DivideScalar4(a, length || 1, out);
    return Scale18(out, Clamp2(min, max, length), out);
  }

  // node_modules/@phaserjs/phaser/math/vec3/ClampScalar.js
  function ClampScalar4(a, min, max, out = new Vec32()) {
    return out.set(Clamp2(a.x, min, max), Clamp2(a.y, min, max), Clamp2(a.z, min, max));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Clone.js
  function Clone6(source) {
    const {x, y, z} = source;
    return new Vec32(x, y, z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/CopyFrom.js
  function CopyFrom20(source, dest) {
    const {x, y, z} = source;
    return dest.set(x, y, z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Cross.js
  function Cross4(a, b, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
  }

  // node_modules/@phaserjs/phaser/math/vec3/CrossNormalize.js
  function CrossNormalize2(a, b, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    const x = ay * bz - az * by;
    const y = az * bx - ax * bz;
    const z = ax * by - ay * bx;
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    return out.set(x * len, y * len, z * len);
  }

  // node_modules/@phaserjs/phaser/math/vec3/DistanceSquared.js
  function DistanceSquared9(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    return x * x + y * y + z * z;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Distance.js
  function Distance10(a, b) {
    return Math.sqrt(DistanceSquared9(a, b));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Divide.js
  function Divide4(a, b, out = new Vec32()) {
    return out.set(a.x / b.x, a.y / b.y, a.z / b.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Equals.js
  function Equals6(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Floor.js
  function Floor4(a, out = new Vec32()) {
    return out.set(Math.floor(a.x), Math.floor(a.y), Math.floor(a.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Fract.js
  function Fract4(a, out = new Vec32()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z));
  }

  // node_modules/@phaserjs/phaser/math/fuzzy/FuzzyEqual.js
  function FuzzyEqual2(a, b, epsilon = 1e-4) {
    return Math.abs(a - b) < epsilon;
  }

  // node_modules/@phaserjs/phaser/math/vec3/FuzzyEquals.js
  function FuzzyEquals4(a, b, epsilon = 1e-4) {
    return FuzzyEqual2(a.x, b.x, epsilon) && FuzzyEqual2(a.y, b.y, epsilon) && FuzzyEqual2(a.z, b.z, epsilon);
  }

  // node_modules/@phaserjs/phaser/math/Hermite.js
  function Hermite4(a, b, c, d, t) {
    const squared = t * t;
    const factor1 = squared * (2 * t - 3) + 1;
    const factor2 = squared * (t - 2) + t;
    const factor3 = squared * (t - 1);
    const factor4 = squared * (3 - 2 * t);
    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Hermite.js
  function Hermite6(a, b, c, d, t, out = new Vec32()) {
    return out.set(Hermite4(t, a.x, b.x, c.x, d.x), Hermite4(t, a.y, b.y, c.y, d.y), Hermite4(t, a.z, b.z, c.z, d.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Inverse.js
  function Inverse2(a, out = new Vec32()) {
    return out.set(1 / a.x, 1 / a.y, 1 / a.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/IsNonUniform.js
  function IsNonUniform2(a) {
    const absX = Math.abs(a.x);
    const absY = Math.abs(a.y);
    const absZ = Math.abs(a.z);
    return absX !== absY || absX !== absZ || absY !== absZ;
  }

  // node_modules/@phaserjs/phaser/math/vec3/LengthSquared.js
  function LengthSquared4(a) {
    const {x, y, z} = a;
    return x * x + y * y + z * z;
  }

  // node_modules/@phaserjs/phaser/math/vec3/Lerp.js
  function Lerp4(a, b, t, out = new Vec32()) {
    const {x, y, z} = a;
    return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/ManhattanDistance.js
  function ManhattanDistance4(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/ManhattanLength.js
  function ManhattanLength4(a) {
    return Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Max.js
  function Max4(a, b, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Min.js
  function Min4(a, b, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz));
  }

  // node_modules/@phaserjs/phaser/math/vec3/Multiply.js
  function Multiply18(a, b, out = new Vec32()) {
    return out.set(a.x * b.x, a.y * b.y, a.z * b.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/MultiplyByFloats.js
  function MultiplyByFloats4(a, x, y, z, out = new Vec32()) {
    return out.set(a.x * x, a.y * y, a.z * z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Negate.js
  function Negate4(a, out = new Vec32()) {
    return out.set(-a.x, -a.y, -a.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Normalize.js
  function Normalize2(a, out = new Vec32()) {
    const {x, y, z} = a;
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    return out.set(x * len, y * len, z * len);
  }

  // node_modules/@phaserjs/phaser/math/vec3/One.js
  function One4() {
    return new Vec32(1, 1, 1);
  }

  // node_modules/@phaserjs/phaser/math/vec3/TransformMat4.js
  function TransformMat416(a, m, out = new Vec32()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
    const {x, y, z} = a;
    let w = m03 * x + m13 * y + m23 * z + m33;
    w = w || 1;
    return out.set((m00 * x + m10 * y + m20 * z + m30) / w, (m01 * x + m11 * y + m21 * z + m31) / w, (m02 * x + m12 * y + m22 * z + m32) / w);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Project.js
  const tempMatrix1 = new Matrix42();
  const tempMatrix2 = new Matrix42();
  function Project14(v, world2, transform, viewport, out = new Vec32()) {
    const {x, y, width, height} = viewport;
    tempMatrix1.set(width / 2, 0, 0, 0, 0, -height / 2, 0, 0, 0, 0, 0.5, 0, x + width / 2, height / 2 + y, 0.5, 1);
    Multiply3(world2, transform, tempMatrix2);
    Multiply3(tempMatrix2, tempMatrix1, tempMatrix2);
    return TransformMat416(v, tempMatrix2, out);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Vec3Callback.js
  class Vec3Callback2 extends Vec32 {
    constructor(onChange, x = 0, y = 0, z = 0) {
      super(x, y, z);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP77;
    }
    set(x = 0, y = 0, z = 0) {
      this._x = x;
      this._y = y;
      this._z = z;
      if (this.onChange) {
        this.onChange(this);
      }
      return this;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      const prev = this._x;
      this._x = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get y() {
      return this._y;
    }
    set y(value) {
      const prev = this._y;
      this._y = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get z() {
      return this._z;
    }
    set z(value) {
      const prev = this._z;
      this._z = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
  }

  // node_modules/@phaserjs/phaser/math/vec3/RGBCallback.js
  class RGBCallback4 extends Vec3Callback2 {
    constructor(onChange, r = 0, g = 0, b = 0) {
      super(onChange, r, g, b);
    }
    set r(value) {
      this.x = value;
    }
    get r() {
      return this.x;
    }
    set g(value) {
      this.y = value;
    }
    get g() {
      return this.y;
    }
    set b(value) {
      this.z = value;
    }
    get b() {
      return this.z;
    }
    toString() {
      const {x, y, z} = this;
      return `[ r=${x}, g=${y}, b=${z} ]`;
    }
  }

  // node_modules/@phaserjs/phaser/math/vec3/Random.js
  function Random4(a, scale = 1, out = new Vec32()) {
    const r = Math.random() * 2 * Math.PI;
    const z = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z * z) * scale;
    return out.set(Math.cos(r) * zScale, Math.sin(r) * zScale, z * scale);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Subtract.js
  function Subtract2(a, b, out = new Vec32()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Reflect.js
  function Reflect2(a, normal, out = new Vec32()) {
    Scale18(normal, 2 * Dot4(a, normal), out);
    return Subtract2(a, out, out);
  }

  // node_modules/@phaserjs/phaser/math/vec3/RotateX.js
  function RotateX12(a, origin, angle, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = px;
    const ry = py * Math.cos(angle) - pz * Math.sin(angle);
    const rz = py * Math.sin(angle) + pz * Math.cos(angle);
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // node_modules/@phaserjs/phaser/math/vec3/RotateY.js
  function RotateY12(a, origin, angle, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = pz * Math.sin(angle) + px * Math.cos(angle);
    const ry = py;
    const rz = pz * Math.cos(angle) - px * Math.sin(angle);
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // node_modules/@phaserjs/phaser/math/vec3/RotateZ.js
  function RotateZ12(a, origin, angle, out = new Vec32()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = px * Math.cos(angle) - py * Math.sin(angle);
    const ry = px * Math.sin(angle) + py * Math.cos(angle);
    const rz = pz;
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Round.js
  function Round4(a, out = new Vec32()) {
    return out.set(Math.round(a.x), Math.round(a.y), Math.round(a.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/RoundToZero.js
  function RoundToZero4(a, out = new Vec32()) {
    return out.set(a.x < 0 ? Math.ceil(a.x) : Math.floor(a.x), a.y < 0 ? Math.ceil(a.y) : Math.floor(a.y), a.z < 0 ? Math.ceil(a.z) : Math.floor(a.z));
  }

  // node_modules/@phaserjs/phaser/math/vec3/ScaleAndAdd.js
  function ScaleAndAdd2(a, b, scalar, out = new Vec32()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec3/SetFromCylindricalCoords.js
  function SetFromCylindricalCoords2(radius, theta, y, out = new Vec32()) {
    return out.set(radius * Math.sin(theta), y, radius * Math.cos(theta));
  }

  // node_modules/@phaserjs/phaser/math/vec3/SetFromSphericalCoords.js
  function SetFromSphericalCoords2(radius, phi, theta, out = new Vec32()) {
    const sinPhiRadius = Math.sin(phi) * radius;
    return out.set(sinPhiRadius * Math.sin(theta), Math.cos(phi) * radius, sinPhiRadius * Math.cos(theta));
  }

  // node_modules/@phaserjs/phaser/math/vec3/SetLength.js
  function SetLength4(a, length, out = new Vec32()) {
    Normalize2(a, out);
    return Scale18(out, length, out);
  }

  // node_modules/@phaserjs/phaser/math/vec3/SubtractScalar.js
  function SubtractScalar4(a, scalar, out = new Vec32()) {
    return out.set(a.x - scalar, a.y - scalar, a.z - scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec3/TransformMat4Zero.js
  function TransformMat4Zero2(a, m, out = new Vec32()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = m.data;
    const {x, y, z} = a;
    return out.set(m00 * x + m10 * y + m20 * z, m01 * x + m11 * y + m21 * z, m02 * x + m12 * y + m22 * z);
  }

  // node_modules/@phaserjs/phaser/math/vec3/TransformQuat.js
  function TransformQuat2(a, q, out = new Vec32()) {
    const {x: qx, y: qy, z: qz, w: qw} = q;
    const {x, y, z} = a;
    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;
    const w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    return out.set(x + uvx + uuvx, y + uvy + uuvy, z + uvz + uuvz);
  }

  // node_modules/@phaserjs/phaser/math/vec3/Unproject.js
  const matrix = new Matrix42();
  const screenSource = new Vec32();
  function Unproject14(v, viewportWidth, viewportHeight, world2, view, projection, out = new Vec32()) {
    Multiply3(world2, view, matrix);
    Multiply3(matrix, projection, matrix);
    Invert3(matrix, matrix);
    const {x, y, z} = v;
    screenSource.set(x / viewportWidth * 2 - 1, -(y / viewportHeight * 2 - 1), 2 * z - 1);
    TransformMat416(screenSource, matrix, out);
    const data = matrix.data;
    const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];
    return Scale18(out, 1 / num, out);
  }

  // node_modules/@phaserjs/phaser/index-7c7c7ec0.js
  var index43 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Abs: Abs4,
    Add: Add2,
    AddScalar: AddScalar4,
    Angle: Angle2,
    Backward: Backward14,
    Bezier: Bezier6,
    CatmullRom: CatmullRom6,
    Ceil: Ceil4,
    Center: Center4,
    Clamp: Clamp19,
    ClampLength: ClampLength4,
    ClampScalar: ClampScalar4,
    Clone: Clone6,
    CopyFrom: CopyFrom20,
    Cross: Cross4,
    CrossNormalize: CrossNormalize2,
    Distance: Distance10,
    DistanceSquared: DistanceSquared9,
    Divide: Divide4,
    DivideScalar: DivideScalar4,
    Dot: Dot4,
    Down: Down14,
    Equals: Equals6,
    Floor: Floor4,
    Forward: Forward3,
    Fract: Fract4,
    FuzzyEquals: FuzzyEquals4,
    Hermite: Hermite6,
    Inverse: Inverse2,
    IsNonUniform: IsNonUniform2,
    Left: Left2,
    Length: Length4,
    LengthSquared: LengthSquared4,
    Lerp: Lerp4,
    ManhattanDistance: ManhattanDistance4,
    ManhattanLength: ManhattanLength4,
    Max: Max4,
    Min: Min4,
    Multiply: Multiply18,
    MultiplyByFloats: MultiplyByFloats4,
    Negate: Negate4,
    Normalize: Normalize2,
    One: One4,
    Project: Project14,
    Random: Random4,
    Reflect: Reflect2,
    RGBCallback: RGBCallback4,
    Right: Right3,
    RotateX: RotateX12,
    RotateY: RotateY12,
    RotateZ: RotateZ12,
    Round: Round4,
    RoundToZero: RoundToZero4,
    Scale: Scale18,
    ScaleAndAdd: ScaleAndAdd2,
    SetFromCylindricalCoords: SetFromCylindricalCoords2,
    SetFromSphericalCoords: SetFromSphericalCoords2,
    SetLength: SetLength4,
    Subtract: Subtract2,
    SubtractScalar: SubtractScalar4,
    TransformMat4: TransformMat416,
    TransformMat4Zero: TransformMat4Zero2,
    TransformQuat: TransformQuat2,
    Unproject: Unproject14,
    Up: Up2,
    Vec3: Vec32,
    Vec3Callback: Vec3Callback2,
    Zero: Zero18,
    BACKWARD,
    DOWN,
    FORWARD,
    LEFT,
    RIGHT,
    UP,
    ZERO
  });

  // node_modules/@phaserjs/phaser/math/quaternion/Add.js
  function Add13(a, b, out = new Quaternion2()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/AddScalar.js
  function AddScalar8(a, scalar, out = new Quaternion2()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Dot.js
  function Dot8(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  }

  // node_modules/@phaserjs/phaser/math/quaternion/AngleTo.js
  function AngleTo2(a, b) {
    return 2 * Math.acos(Math.abs(Clamp2(Dot8(a, b), -1, 1)));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/AreClose.js
  function AreClose2(a, b) {
    return Dot8(a, b) >= 0;
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Clone.js
  function Clone12(source) {
    const {x, y, z, w} = source;
    return new Quaternion2(x, y, z, w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Conjugate.js
  function Conjugate2(a, out = new Quaternion2()) {
    const {x, y, z, w} = a;
    return out.set(x * -1, y * -1, z * -1, w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/CopyFrom.js
  function CopyFrom25(source, dest) {
    const {x, y, z, w} = source;
    return dest.set(x, y, z, w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Equals.js
  function Equals12(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotationYawPitchRoll.js
  function RotationYawPitchRoll2(yaw, pitch, roll, out = new Quaternion2()) {
    const halfRoll = roll * 0.5;
    const halfPitch = pitch * 0.5;
    const halfYaw = yaw * 0.5;
    const sinRoll = Math.sin(halfRoll);
    const cosRoll = Math.cos(halfRoll);
    const sinPitch = Math.sin(halfPitch);
    const cosPitch = Math.cos(halfPitch);
    const sinYaw = Math.sin(halfYaw);
    const cosYaw = Math.cos(halfYaw);
    return out.set(cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll, sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll, cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll, cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/FromEulerAngles.js
  function FromEulerAngles2(x, y, z, out = new Quaternion2()) {
    return RotationYawPitchRoll2(y, x, z, out);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/FromEulerVector.js
  function FromEulerVector2(v, out = new Quaternion2()) {
    return RotationYawPitchRoll2(v.y, v.x, v.z, out);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/FromRotationAxis.js
  function FromRotationAxis2(axis, angle, out = new Quaternion2()) {
    const sin = Math.sin(angle / 2);
    Normalize2(axis, axis);
    const {x, y, z} = axis;
    return out.set(x * sin, y * sin, z * sin, Math.cos(angle / 2));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/FromRotationMatrix.js
  function FromRotationMatrix2(matrix2, out = new Quaternion2()) {
    const [m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33] = matrix2.data;
    const trace = m11 + m22 + m33;
    let s;
    if (trace > 0) {
      s = 0.5 / Math.sqrt(trace + 1);
      return out.set((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s);
    } else if (m11 > m22 && m11 > m33) {
      s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      return out.set(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s);
    } else if (m22 > m33) {
      s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      return out.set((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s);
    } else {
      s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      return out.set((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
    }
  }

  // node_modules/@phaserjs/phaser/math/quaternion/FuzzyEquals.js
  function FuzzyEquals8(a, b, epsilon = 1e-4) {
    return FuzzyEqual2(a.x, b.x, epsilon) && FuzzyEqual2(a.y, b.y, epsilon) && FuzzyEqual2(a.z, b.z, epsilon) && FuzzyEqual2(a.w, b.w, epsilon);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/GetAngle.js
  function GetAngle2(a, b) {
    const dot = Dot8(a, b);
    return Math.acos(2 * dot * dot - 1);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/GetAxisAngle.js
  function GetAxisAngle2(a, out = new Quaternion2()) {
    const rad = Math.acos(a.w) * 2;
    const s = Math.sin(rad / 2);
    const epsilon = 1e-6;
    if (s > epsilon) {
      out.set(a.x / s, a.y / s, a.z / s);
    } else {
      out.set(1, 0, 0);
    }
    return rad;
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Hermite.js
  function Hermite10(a, b, c, d, t, out = new Quaternion2()) {
    return out.set(Hermite4(t, a.x, b.x, c.x, d.x), Hermite4(t, a.y, b.y, c.y, d.y), Hermite4(t, a.z, b.z, c.z, d.z), Hermite4(t, a.w, b.w, c.w, d.w));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Invert.js
  function Invert18(a, out = new Quaternion2()) {
    const {x, y, z, w} = a;
    const dot = x * x + y * y + z * z + w * w;
    const invDot = dot ? 1 / dot : 0;
    return out.set(-x * invDot, -y * invDot, -z * invDot, w * invDot);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Length.js
  function Length8(a) {
    const {x, y, z, w} = a;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/LengthSquared.js
  function LengthSquared8(a) {
    const {x, y, z, w} = a;
    return x * x + y * y + z * z + w * w;
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Multiply.js
  function Multiply24(a, b, out = new Quaternion2()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx, aw * bw - ax * bx - ay * by - az * bz);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/MultiplyByFloats.js
  function MultiplyByFloats8(a, x, y, z, w, out = new Quaternion2()) {
    return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Scale.js
  function Scale24(a, scalar, out = new Quaternion2()) {
    const {x, y, z, w} = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Normalize.js
  function Normalize15(a, out = new Quaternion2()) {
    const length = Length8(a);
    if (length === 0) {
      return out.set(0, 0, 0, 1);
    } else {
      return Scale24(a, length, out);
    }
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Slerp.js
  function Slerp2(a, b, t, out = new Quaternion2()) {
    if (t === 0) {
      return CopyFrom25(a, out);
    } else if (t === 1) {
      return CopyFrom25(b, out);
    }
    const {x, y, z, w} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    let cosHalfTheta = w * bw + x * bx + y * by + z * bz;
    if (cosHalfTheta < 0) {
      out.set(-bx, -by, -bz, -bw);
      cosHalfTheta = -cosHalfTheta;
    } else {
      CopyFrom25(b, out);
    }
    if (cosHalfTheta >= 1) {
      return out.set(x, y, z, w);
    }
    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      out.set(s * x + t * out.x, s * y + t * out.y, s * z + t * out.z, s * w + t * out.w);
      return Normalize15(out, out);
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
    const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    return out.set(x * ratioA + out.x * ratioB, y * ratioA + out.y * ratioB, z * ratioA + out.z * ratioB, w * ratioA + out.w * ratioB);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotateTowards.js
  function RotateTowards2(a, b, step, out = new Quaternion2()) {
    const angle = GetAngle2(a, b);
    if (angle === 0) {
      return CopyFrom25(a, out);
    }
    const t = Math.min(1, step / angle);
    return Slerp2(a, b, t, out);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotateX.js
  function RotateX4(a, angle, out = new Quaternion2()) {
    angle *= 0.5;
    const {x, y, z, w} = a;
    const bx = Math.sin(angle);
    const bw = Math.cos(angle);
    return out.set(x * bw + w * bx, y * bw + z * bx, z * bw - y * bx, w * bw - x * bx);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotateY.js
  function RotateY4(a, angle, out = new Quaternion2()) {
    angle *= 0.5;
    const {x, y, z, w} = a;
    const by = Math.sin(angle);
    const bw = Math.cos(angle);
    return out.set(x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotateZ.js
  function RotateZ4(a, angle, out = new Quaternion2()) {
    angle *= 0.5;
    const {x, y, z, w} = a;
    const bz = Math.sin(angle);
    const bw = Math.cos(angle);
    return out.set(x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/RotationAlphaBetaGamma.js
  function RotationAlphaBetaGamma2(alpha, beta, gamma, out = new Quaternion2()) {
    const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
    const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
    const halfBeta = beta * 0.5;
    return out.set(Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta), Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/ScaleAndAdd.js
  function ScaleAndAdd9(a, b, scalar, out = new Quaternion2()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/SetAxisAngle.js
  function SetAxisAngle2(axis, angle, out = new Quaternion2()) {
    const {x, y, z} = axis;
    angle *= 0.5;
    const s = Math.sin(angle);
    return out.set(x * s, y * s, z * s, Math.cos(angle));
  }

  // node_modules/@phaserjs/phaser/math/quaternion/SetFromUnitVectors.js
  function SetFromUnitVectors2(a, from, to, out = new Quaternion2()) {
    const {x: fx, y: fy, z: fz} = from;
    const {x: tx, y: ty, z: tz} = to;
    const epsilon = 1e-6;
    let r = Dot4(from, to) + 1;
    if (r < epsilon) {
      r = 0;
      if (Math.abs(fx) > Math.abs(fz)) {
        return out.set(-fy, fx, 0, r);
      } else {
        return out.set(0, -fz, fy, r);
      }
    } else {
      return out.set(fy * tz - fz * ty, fz * tx - fx * tz, fx * ty - fy * tx, r);
    }
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Subtract.js
  function Subtract14(a, b, out = new Quaternion2()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/SubtractScalar.js
  function SubtractScalar8(a, scalar, out = new Quaternion2()) {
    const {x, y, z, w} = a;
    return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
  }

  // node_modules/@phaserjs/phaser/math/quaternion/ToEulerAngles.js
  function ToEulerAngles2(q, out = new Vec32()) {
    const {x, y, z, w} = q;
    const sqw = w * w;
    const sqz = z * z;
    const sqx = x * x;
    const sqy = y * y;
    const zAxisY = y * z - x * w;
    const limit = 0.4999999;
    if (zAxisY < -limit) {
      return out.set(Math.PI / 2, 2 * Math.atan2(y, w), 0);
    } else if (zAxisY > limit) {
      return out.set(-Math.PI / 2, 2 * Math.atan2(y, w), 0);
    } else {
      return out.set(Math.asin(-2 * (z * y - x * w)), Math.atan2(2 * (z * x + y * w), sqz - sqx - sqy + sqw), Math.atan2(2 * (x * y + z * w), -sqz - sqx + sqy + sqw));
    }
  }

  // node_modules/@phaserjs/phaser/math/quaternion/Zero.js
  function Zero24() {
    return new Quaternion2(0, 0, 0, 0);
  }

  // node_modules/@phaserjs/phaser/index-fe35b966.js
  var index44 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Add: Add13,
    AddScalar: AddScalar8,
    AngleTo: AngleTo2,
    AreClose: AreClose2,
    Clone: Clone12,
    Conjugate: Conjugate2,
    CopyFrom: CopyFrom25,
    Dot: Dot8,
    Equals: Equals12,
    FromEulerAngles: FromEulerAngles2,
    FromEulerVector: FromEulerVector2,
    FromRotationAxis: FromRotationAxis2,
    FromRotationMatrix: FromRotationMatrix2,
    FuzzyEquals: FuzzyEquals8,
    GetAngle: GetAngle2,
    GetAxisAngle: GetAxisAngle2,
    Hermite: Hermite10,
    Invert: Invert18,
    Length: Length8,
    LengthSquared: LengthSquared8,
    Multiply: Multiply24,
    MultiplyByFloats: MultiplyByFloats8,
    Normalize: Normalize15,
    Quaternion: Quaternion2,
    RotateTowards: RotateTowards2,
    RotateX: RotateX4,
    RotateY: RotateY4,
    RotateZ: RotateZ4,
    RotationAlphaBetaGamma: RotationAlphaBetaGamma2,
    RotationYawPitchRoll: RotationYawPitchRoll2,
    Scale: Scale24,
    ScaleAndAdd: ScaleAndAdd9,
    SetAxisAngle: SetAxisAngle2,
    SetFromUnitVectors: SetFromUnitVectors2,
    Slerp: Slerp2,
    Subtract: Subtract14,
    SubtractScalar: SubtractScalar8,
    ToEulerAngles: ToEulerAngles2,
    Zero: Zero24
  });

  // node_modules/@phaserjs/phaser/math/easing/back/In.js
  function In2(v, overshoot = 1.70158) {
    return v * v * ((overshoot + 1) * v - overshoot);
  }

  // node_modules/@phaserjs/phaser/math/easing/back/InOut.js
  function InOut2(v, overshoot = 1.70158) {
    const s = overshoot * 1.525;
    if ((v *= 2) < 1) {
      return 0.5 * (v * v * ((s + 1) * v - s));
    } else {
      return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/back/Out.js
  function Out2(v, overshoot = 1.70158) {
    return --v * v * ((overshoot + 1) * v + overshoot) + 1;
  }

  // node_modules/@phaserjs/phaser/index-b50d9d6d.js
  var index2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In2,
    InOut: InOut2,
    Out: Out2
  });

  // node_modules/@phaserjs/phaser/math/easing/bounce/In.js
  function In4(v) {
    v = 1 - v;
    if (v < 1 / 2.75) {
      return 1 - 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      return 1 - (7.5625 * (v -= 1.5 / 2.75) * v + 0.75);
    } else if (v < 2.5 / 2.75) {
      return 1 - (7.5625 * (v -= 2.25 / 2.75) * v + 0.9375);
    } else {
      return 1 - (7.5625 * (v -= 2.625 / 2.75) * v + 0.984375);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/bounce/InOut.js
  function InOut4(v) {
    let reverse = false;
    if (v < 0.5) {
      v = 1 - v * 2;
      reverse = true;
    } else {
      v = v * 2 - 1;
    }
    if (v < 1 / 2.75) {
      v = 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    } else if (v < 2.5 / 2.75) {
      v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    } else {
      v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }
    if (reverse) {
      return (1 - v) * 0.5;
    } else {
      return v * 0.5 + 0.5;
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/bounce/Out.js
  function Out4(v) {
    if (v < 1 / 2.75) {
      return 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    } else if (v < 2.5 / 2.75) {
      return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    } else {
      return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }
  }

  // node_modules/@phaserjs/phaser/index-89c529f7.js
  var index3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In4,
    InOut: InOut4,
    Out: Out4
  });

  // node_modules/@phaserjs/phaser/math/easing/circular/In.js
  function In6(v) {
    return 1 - Math.sqrt(1 - v * v);
  }

  // node_modules/@phaserjs/phaser/math/easing/circular/InOut.js
  function InOut6(v) {
    if ((v *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - v * v) - 1);
    } else {
      return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/circular/Out.js
  function Out6(v) {
    return Math.sqrt(1 - --v * v);
  }

  // node_modules/@phaserjs/phaser/index-eb7c243e.js
  var index4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In6,
    InOut: InOut6,
    Out: Out6
  });

  // node_modules/@phaserjs/phaser/math/easing/cubic/In.js
  function In8(v) {
    return v * v * v;
  }

  // node_modules/@phaserjs/phaser/math/easing/cubic/InOut.js
  function InOut8(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v;
    } else {
      return 0.5 * ((v -= 2) * v * v + 2);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/cubic/Out.js
  function Out8(v) {
    return --v * v * v + 1;
  }

  // node_modules/@phaserjs/phaser/index-556a4ece.js
  var index5 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In8,
    InOut: InOut8,
    Out: Out8
  });

  // node_modules/@phaserjs/phaser/math/easing/elastic/In.js
  function In10(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/elastic/InOut.js
  function InOut10(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      if ((v *= 2) < 1) {
        return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
      } else {
        return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
      }
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/elastic/Out.js
  function Out10(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      return amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1;
    }
  }

  // node_modules/@phaserjs/phaser/index-569da312.js
  var index6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In10,
    InOut: InOut10,
    Out: Out10
  });

  // node_modules/@phaserjs/phaser/math/easing/expo/In.js
  function In12(v) {
    return Math.pow(2, 10 * (v - 1)) - 1e-3;
  }

  // node_modules/@phaserjs/phaser/math/easing/expo/InOut.js
  function InOut12(v) {
    if (v == 0) {
      return 0;
    }
    if (v == 1) {
      return 1;
    }
    if ((v *= 2) < 1) {
      return 0.5 * Math.pow(2, 10 * (v - 1));
    } else {
      return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/expo/Out.js
  function Out12(v) {
    return 1 - Math.pow(2, -10 * v);
  }

  // node_modules/@phaserjs/phaser/index-8db29edb.js
  var index7 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In12,
    InOut: InOut12,
    Out: Out12
  });

  // node_modules/@phaserjs/phaser/math/easing/quadratic/In.js
  function In14(v) {
    return v * v;
  }

  // node_modules/@phaserjs/phaser/math/easing/quadratic/InOut.js
  function InOut14(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v;
    } else {
      return -0.5 * (--v * (v - 2) - 1);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/quadratic/Out.js
  function Out14(v) {
    return v * (2 - v);
  }

  // node_modules/@phaserjs/phaser/index-a7666e92.js
  var index8 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In14,
    InOut: InOut14,
    Out: Out14
  });

  // node_modules/@phaserjs/phaser/math/easing/quartic/In.js
  function In16(v) {
    return v * v * v * v;
  }

  // node_modules/@phaserjs/phaser/math/easing/quartic/InOut.js
  function InOut16(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v * v;
    } else {
      return -0.5 * ((v -= 2) * v * v * v - 2);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/quartic/Out.js
  function Out16(v) {
    return -(--v * v * v * v - 1);
  }

  // node_modules/@phaserjs/phaser/index-3584a5db.js
  var index9 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In16,
    InOut: InOut16,
    Out: Out16
  });

  // node_modules/@phaserjs/phaser/math/easing/quintic/In.js
  function In18(v) {
    return v * v * v * v * v;
  }

  // node_modules/@phaserjs/phaser/math/easing/quintic/InOut.js
  function InOut18(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v * v * v;
    } else {
      return 0.5 * ((v -= 2) * v * v * v * v + 2);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/quintic/Out.js
  function Out18(v) {
    return (v = v - 1) * v * v * v * v + 1;
  }

  // node_modules/@phaserjs/phaser/index-34329f48.js
  var index10 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In18,
    InOut: InOut18,
    Out: Out18
  });

  // node_modules/@phaserjs/phaser/math/easing/sine/In.js
  function In20(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return 1 - Math.cos(v * Math.PI / 2);
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/sine/InOut.js
  function InOut20(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return 0.5 * (1 - Math.cos(Math.PI * v));
    }
  }

  // node_modules/@phaserjs/phaser/math/easing/sine/Out.js
  function Out20(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return Math.sin(v * Math.PI / 2);
    }
  }

  // node_modules/@phaserjs/phaser/index-f0c8ee0d.js
  var index11 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    In: In20,
    InOut: InOut20,
    Out: Out20
  });

  // node_modules/@phaserjs/phaser/Linear-8dd9e56a.js
  function Linear(v) {
    return v;
  }
  var Linear$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Linear
  });

  // node_modules/@phaserjs/phaser/Stepped-b024975a.js
  function Stepped(v, steps = 1) {
    if (v <= 0) {
      return 0;
    } else if (v >= 1) {
      return 1;
    } else {
      return ((steps * v | 0) + 1) * (1 / steps);
    }
  }
  var Stepped$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Stepped
  });

  // node_modules/@phaserjs/phaser/GetEase-ade1c4dd.js
  const EaseMap = new Map([
    ["power0", Linear],
    ["power1", Out14],
    ["power2", Out8],
    ["power3", Out16],
    ["power4", Out18],
    ["linear", Linear],
    ["quad", Out14],
    ["cubic", Out8],
    ["quart", Out16],
    ["quint", Out18],
    ["sine", Out20],
    ["expo", Out12],
    ["circ", Out6],
    ["elastic", Out10],
    ["back", Out2],
    ["bounce", Out4],
    ["stepped", Stepped],
    ["quad.in", In14],
    ["cubic.in", In8],
    ["quart.in", In16],
    ["quint.in", In18],
    ["sine.in", In20],
    ["expo.in", In12],
    ["circ.in", In6],
    ["elastic.in", In10],
    ["back.in", In2],
    ["bounce.in", In4],
    ["quad.out", Out14],
    ["cubic.out", Out8],
    ["quart.out", Out16],
    ["quint.out", Out18],
    ["sine.out", Out20],
    ["expo.out", Out12],
    ["circ.out", Out6],
    ["elastic.out", Out10],
    ["back.out", Out2],
    ["bounce.out", Out4],
    ["quad.inout", InOut14],
    ["cubic.inout", InOut8],
    ["quart.inout", InOut16],
    ["quint.inout", InOut18],
    ["sine.inout", InOut20],
    ["expo.inout", InOut12],
    ["circ.inout", InOut6],
    ["elastic.inout", InOut10],
    ["back.inout", InOut2],
    ["bounce.inout", InOut4]
  ]);
  function GetEase(name) {
    name = name.toLowerCase();
    name = name.replace("ease", "");
    if (EaseMap.has(name)) {
      return EaseMap.get(name);
    } else {
      return Linear;
    }
  }
  var GetEase$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetEase
  });

  // node_modules/@phaserjs/phaser/index-03493b85.js
  var index12 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Back: index2,
    Bounce: index3,
    Circular: index4,
    Cubic: index5,
    Elastic: index6,
    Expo: index7,
    GetEase: GetEase$1,
    Linear: Linear$1,
    Quadratic: index8,
    Quartic: index9,
    Quintic: index10,
    Sine: index11,
    Stepped: Stepped$1
  });

  // node_modules/@phaserjs/phaser/math/fuzzy/FuzzyCeil.js
  function FuzzyCeil2(value, epsilon = 1e-4) {
    return Math.ceil(value - epsilon);
  }

  // node_modules/@phaserjs/phaser/math/fuzzy/FuzzyFloor.js
  function FuzzyFloor2(value, epsilon = 1e-4) {
    return Math.floor(value + epsilon);
  }

  // node_modules/@phaserjs/phaser/math/fuzzy/FuzzyGreaterThan.js
  function FuzzyGreaterThan2(a, b, epsilon = 1e-4) {
    return a > b - epsilon;
  }

  // node_modules/@phaserjs/phaser/math/fuzzy/FuzzyLessThan.js
  function FuzzyLessThan2(a, b, epsilon = 1e-4) {
    return a < b + epsilon;
  }

  // node_modules/@phaserjs/phaser/index-74123df0.js
  var index45 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    FuzzyCeil: FuzzyCeil2,
    FuzzyEqual: FuzzyEqual2,
    FuzzyFloor: FuzzyFloor2,
    FuzzyGreaterThan: FuzzyGreaterThan2,
    FuzzyLessThan: FuzzyLessThan2
  });

  // node_modules/@phaserjs/phaser/math/Factorial.js
  function Factorial2(value) {
    if (value === 0) {
      return 1;
    }
    let res = value;
    while (--value) {
      res *= value;
    }
    return res;
  }

  // node_modules/@phaserjs/phaser/math/Bernstein.js
  function Bernstein2(n, i) {
    return Factorial2(n) / Factorial2(i) / Factorial2(n - i);
  }

  // node_modules/@phaserjs/phaser/math/interpolation/BezierInterpolation.js
  function BezierInterpolation2(v, k) {
    let b = 0;
    const n = v.length - 1;
    for (let i = 0; i <= n; i++) {
      b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein2(n, i);
    }
    return b;
  }

  // node_modules/@phaserjs/phaser/math/interpolation/CatmullRomInterpolation.js
  function CatmullRomInterpolation2(v, k) {
    const m = v.length - 1;
    let f = m * k;
    let i = Math.floor(f);
    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }
      return CatmullRom4(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
    } else {
      if (k < 0) {
        return v[0] - (CatmullRom4(-f, v[0], v[0], v[1], v[1]) - v[0]);
      }
      if (k > 1) {
        return v[m] - (CatmullRom4(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
      }
      return CatmullRom4(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
    }
  }

  // node_modules/@phaserjs/phaser/math/interpolation/CubicBezierInterpolation.js
  function P0(t, p) {
    const k = 1 - t;
    return k * k * k * p;
  }
  function P1(t, p) {
    const k = 1 - t;
    return 3 * k * k * t * p;
  }
  function P2(t, p) {
    return 3 * (1 - t) * t * t * p;
  }
  function P3(t, p) {
    return t * t * t * p;
  }
  function CubicBezierInterpolation2(t, p0, p1, p2, p3) {
    return P0(t, p0) + P1(t, p1) + P2(t, p2) + P3(t, p3);
  }

  // node_modules/@phaserjs/phaser/math/Linear.js
  function Linear3(p0, p1, t) {
    return (p1 - p0) * t + p0;
  }

  // node_modules/@phaserjs/phaser/math/interpolation/LinearInterpolation.js
  function LinearInterpolation2(v, k) {
    const m = v.length - 1;
    const f = m * k;
    const i = Math.floor(f);
    if (k < 0) {
      return Linear3(v[0], v[1], f);
    } else if (k > 1) {
      return Linear3(v[m], v[m - 1], m - f);
    } else {
      return Linear3(v[i], v[i + 1 > m ? m : i + 1], f - i);
    }
  }

  // node_modules/@phaserjs/phaser/math/interpolation/QuadraticBezierInterpolation.js
  function P02(t, p) {
    const k = 1 - t;
    return k * k * p;
  }
  function P12(t, p) {
    return 2 * (1 - t) * t * p;
  }
  function P22(t, p) {
    return t * t * p;
  }
  function QuadraticBezierInterpolation2(t, p0, p1, p2) {
    return P02(t, p0) + P12(t, p1) + P22(t, p2);
  }

  // node_modules/@phaserjs/phaser/math/SmoothStep.js
  function SmoothStep2(x, min, max) {
    if (x <= min) {
      return 0;
    }
    if (x >= max) {
      return 1;
    }
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  }

  // node_modules/@phaserjs/phaser/math/interpolation/SmoothStepInterpolation.js
  function SmoothStepInterpolation2(t, min, max) {
    return min + (max - min) * SmoothStep2(t, 0, 1);
  }

  // node_modules/@phaserjs/phaser/math/SmootherStep.js
  function SmootherStep2(x, min, max) {
    x = Math.max(0, Math.min(1, (x - min) / (max - min)));
    return x * x * x * (x * (x * 6 - 15) + 10);
  }

  // node_modules/@phaserjs/phaser/math/interpolation/SmootherStepInterpolation.js
  function SmootherStepInterpolation2(t, min, max) {
    return min + (max - min) * SmootherStep2(t, 0, 1);
  }

  // node_modules/@phaserjs/phaser/index-07587fe6.js
  var index14 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BezierInterpolation: BezierInterpolation2,
    CatmullRomInterpolation: CatmullRomInterpolation2,
    CubicBezierInterpolation: CubicBezierInterpolation2,
    LinearInterpolation: LinearInterpolation2,
    QuadraticBezierInterpolation: QuadraticBezierInterpolation2,
    SmoothStepInterpolation: SmoothStepInterpolation2,
    SmootherStepInterpolation: SmootherStepInterpolation2
  });

  // node_modules/@phaserjs/phaser/math/matrix2d/Add.js
  function Add11(a, b, out = new Matrix2D2()) {
    return out.set(a.a + b.a, a.b + b.b, a.c + b.c, a.d + b.d, a.tx + b.tx, a.ty + b.ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Append.js
  function Append2(mat1, mat2, out = new Matrix2D2()) {
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = mat1;
    const {a: a2, b: b2, c: c2, d: d2, tx: tx2, ty: ty2} = mat2;
    return out.set(a2 * a1 + b2 * c1, a2 * b1 + b2 * d1, c2 * a1 + d2 * c1, c2 * b1 + d2 * d1, tx2 * a1 + ty2 * c1 + tx1, tx2 * b1 + ty2 * d1 + ty1);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Clone.js
  function Clone10(src) {
    return new Matrix2D2(src.a, src.b, src.c, src.d, src.tx, src.ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/CopyFrom.js
  function CopyFrom6(src, target) {
    const {a, b, c, d, tx, ty} = src;
    return target.set(a, b, c, d, tx, ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/CopyToContext.js
  function CopyToContext2(src, context) {
    const {a, b, c, d, tx, ty} = src;
    context.transform(a, b, c, d, tx, ty);
    return context;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Determinant.js
  function Determinant4(src) {
    const {a, b, c, d} = src;
    return a * d - b * c;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Equals.js
  function Equals10(a, b, epsilon = 1e-6) {
    const {a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0} = a;
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = b;
    return Math.abs(a0 - a1) <= epsilon * Math.max(1, Math.abs(a0), Math.abs(a1)) && Math.abs(b0 - b1) <= epsilon * Math.max(1, Math.abs(b0), Math.abs(b1)) && Math.abs(c0 - c1) <= epsilon * Math.max(1, Math.abs(c0), Math.abs(c1)) && Math.abs(d0 - d1) <= epsilon * Math.max(1, Math.abs(d0), Math.abs(d1)) && Math.abs(tx0 - tx1) <= epsilon * Math.max(1, Math.abs(tx0), Math.abs(tx1)) && Math.abs(ty0 - ty1) <= epsilon * Math.max(1, Math.abs(ty0), Math.abs(ty1));
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/ExactEquals.js
  function ExactEquals2(a, b) {
    return a.a === b.a && a.b === b.b && a.c === b.c && a.d === b.d && a.tx === b.tx && a.ty === b.ty;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Frobenius.js
  function Frobenius4(src) {
    return Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Rotate.js
  function Rotate6(target, angle, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return out.set(a * cos + c * sin, b * cos + d * sin, a * -sin + c * cos, b * -sin + d * cos, tx, ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/FromRotation.js
  function FromRotation4(angle) {
    const target = new Matrix2D2();
    return Rotate6(target, angle, target);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Scale.js
  function Scale22(target, scaleX, scaleY, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a * scaleX, b * scaleX, c * scaleY, d * scaleY, tx, ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/FromScaling.js
  function FromScaling4(scaleX, scaleY = scaleX) {
    const target = new Matrix2D2();
    return Scale22(target, scaleX, scaleY, target);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Translate.js
  function Translate4(target, x, y, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    out.tx = a * x + c * y + tx;
    out.ty = b * x + d * y + ty;
    return out;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/FromTranslation.js
  function FromTranslation4(x, y) {
    const target = new Matrix2D2();
    return Translate4(target, x, y, target);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/GlobalToLocal.js
  function GlobalToLocal2(mat, x, y, out = new Vec27()) {
    const {a, b, c, d, tx, ty} = mat;
    const id = 1 / (a * d + c * -b);
    return out.set(d * id * x + -c * id * y + (ty * c - tx * d) * id, a * id * y + -b * id * x + (-ty * a + tx * b) * id);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/ITRS.js
  function ITRS2(target, x, y, angle, scaleX, scaleY) {
    if (angle === 0) {
      return target.set(1, 0, 0, 1, x, y);
    } else {
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);
      return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/ITRSS.js
  function ITRSS2(target, x, y, angle = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    if (angle === 0) {
      return target.set(1, 0, 0, 1, x, y);
    } else {
      return target.set(Math.cos(angle + skewY) * scaleX, Math.sin(angle + skewY) * scaleX, -Math.sin(angle - skewX) * scaleY, Math.cos(angle - skewX) * scaleY, x, y);
    }
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Identity.js
  function Identity9() {
    return new Matrix2D2();
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Invert.js
  function Invert16(target, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    let determinant = a * d - b * c;
    if (determinant) {
      determinant = 1 / determinant;
      out.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/LocalToGlobal.js
  function LocalToGlobal2(mat, x, y, out = new Vec27()) {
    const {a, b, c, d, tx, ty} = mat;
    return out.set(a * x + c * y + tx, b * x + d * y + ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Multiply.js
  function Multiply22(target, src, out = new Matrix2D2()) {
    const {a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0} = target;
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = src;
    return out.set(a0 * a1 + c0 * b1, b0 * a1 + d0 * b1, a0 * c1 + c0 * d1, b0 * c1 + d0 * d1, a0 * tx1 + c0 * ty1 + tx0, b0 * tx1 + d0 * ty1 + ty0);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/MultiplyScalar.js
  function MultiplyScalar4(target, scalar, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a * scalar, b * scalar, c * scalar, d * scalar, tx * scalar, ty * scalar);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/MultiplyScalarAndAdd.js
  function MultiplyScalarAndAdd4(target, src, scalar, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = src;
    const {a: ta, b: tb, c: tc, d: td, tx: ttx, ty: tty} = target;
    return out.set(ta + a * scalar, tb + b * scalar, tc + c * scalar, td + d * scalar, ttx + tx * scalar, tty + ty * scalar);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/SetToContext.js
  function SetToContext2(src, context) {
    const {a, b, c, d, tx, ty} = src;
    context.setTransform(a, b, c, d, tx, ty);
    return context;
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Skew.js
  function Skew2(target, angleX, angleY, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a, b + Math.tan(angleX), c + Math.tan(angleY), d, tx, ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Subtract.js
  function Subtract12(a, b, out = new Matrix2D2()) {
    return out.set(a.a - b.a, a.b - b.b, a.c - b.c, a.d - b.d, a.tx - b.tx, a.ty - b.ty);
  }

  // node_modules/@phaserjs/phaser/math/matrix2d/Zero.js
  function Zero22(target) {
    return target.set(0, 0, 0, 0, 0, 0);
  }

  // node_modules/@phaserjs/phaser/index-c234a8d0.js
  var index46 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Add: Add11,
    Append: Append2,
    Clone: Clone10,
    CopyFrom: CopyFrom6,
    CopyToContext: CopyToContext2,
    Determinant: Determinant4,
    Equals: Equals10,
    ExactEquals: ExactEquals2,
    Frobenius: Frobenius4,
    FromRotation: FromRotation4,
    FromScaling: FromScaling4,
    FromTranslation: FromTranslation4,
    GlobalToLocal: GlobalToLocal2,
    Identity: Identity9,
    Invert: Invert16,
    ITRS: ITRS2,
    ITRSS: ITRSS2,
    LocalToGlobal: LocalToGlobal2,
    Matrix2D: Matrix2D2,
    Multiply: Multiply22,
    MultiplyScalar: MultiplyScalar4,
    MultiplyScalarAndAdd: MultiplyScalarAndAdd4,
    Rotate: Rotate6,
    Scale: Scale22,
    SetToContext: SetToContext2,
    Skew: Skew2,
    Subtract: Subtract12,
    Translate: Translate4,
    Zero: Zero22
  });

  // node_modules/@phaserjs/phaser/math/pow2/GetPowerOfTwo.js
  function GetPowerOfTwo2(value) {
    const index69 = Math.log(value) / 0.6931471805599453;
    return 1 << Math.ceil(index69);
  }

  // node_modules/@phaserjs/phaser/math/pow2/IsValuePowerOfTwo.js
  function IsValuePowerOfTwo2(value) {
    return value > 0 && (value & value - 1) === 0;
  }

  // node_modules/@phaserjs/phaser/index-d7a4c518.js
  var index47 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetPowerOfTwo: GetPowerOfTwo2,
    IsSizePowerOfTwo: IsSizePowerOfTwo8,
    IsValuePowerOfTwo: IsValuePowerOfTwo2
  });

  // node_modules/@phaserjs/phaser/math/snap/SnapCeil.js
  function SnapCeil2(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.ceil(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // node_modules/@phaserjs/phaser/math/snap/SnapFloor.js
  function SnapFloor2(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.floor(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // node_modules/@phaserjs/phaser/math/snap/SnapTo.js
  function SnapTo2(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.round(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // node_modules/@phaserjs/phaser/index-202e3bc4.js
  var index27 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    SnapCeil: SnapCeil2,
    SnapFloor: SnapFloor2,
    SnapTo: SnapTo2
  });

  // node_modules/@phaserjs/phaser/math/vec2/Abs.js
  function Abs6(a, out = new Vec27()) {
    return out.set(Math.abs(a.x), Math.abs(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Add.js
  function Add9(a, b, out = new Vec27()) {
    return out.set(a.x + b.x, a.y + b.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/AddScalar.js
  function AddScalar6(a, scalar, out = new Vec27()) {
    return out.set(a.x + scalar, a.y + scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Angle.js
  function Angle4(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
  }

  // node_modules/@phaserjs/phaser/math/vec2/AngleY.js
  function AngleY2(a, b) {
    return Math.atan2(b.x - a.x, b.y - a.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Bezier.js
  function Bezier8(a, b, c, d, t, out = new Vec27()) {
    return out.set(Bezier4(t, a.x, b.x, c.x, d.x), Bezier4(t, a.y, b.y, c.y, d.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/CatmullRom.js
  function CatmullRom8(p1, p2, p3, p4, t, out = new Vec27()) {
    return out.set(CatmullRom4(t, p1.x, p2.x, p3.x, p4.x), CatmullRom4(t, p1.y, p2.y, p3.y, p4.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Ceil.js
  function Ceil6(a, out = new Vec27()) {
    return out.set(Math.ceil(a.x), Math.ceil(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Scale.js
  function Scale20(a, scalar, out = new Vec27()) {
    return out.set(a.x * scalar, a.y * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Center.js
  function Center6(a, b, out = new Vec27()) {
    Add9(a, b, out);
    return Scale20(out, 0.5, out);
  }

  // node_modules/@phaserjs/phaser/math/vec2/ChebyshevDistance.js
  function ChebyshevDistance2(a, b) {
    return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Clamp.js
  function Clamp21(a, min, max, out = new Vec27()) {
    return out.set(Clamp2(a.x, min.x, max.x), Clamp2(a.y, min.y, max.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/ClampScalar.js
  function ClampScalar6(a, min, max, out = new Vec27()) {
    return out.set(Clamp2(a.x, min, max), Clamp2(a.y, min, max));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Clone.js
  function Clone8(source) {
    return new Vec27(source.x, source.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/CopyFrom.js
  function CopyFrom22(source, dest) {
    return dest.set(source.x, source.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Cross.js
  function Cross6(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  // node_modules/@phaserjs/phaser/math/vec2/DistanceSquared.js
  function DistanceSquared11(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return x * x + y * y;
  }

  // node_modules/@phaserjs/phaser/math/vec2/Distance.js
  function Distance2(a, b) {
    return Math.sqrt(DistanceSquared11(a, b));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Dot.js
  function Dot6(a, b) {
    return a.x * b.x + a.y * b.y;
  }

  // node_modules/@phaserjs/phaser/math/vec2/MultiplyByFloats.js
  function MultiplyByFloats6(a, x, y, out = new Vec27()) {
    return out.set(a.x * x, a.y * y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Subtract.js
  function Subtract10(a, b, out = new Vec27()) {
    return out.set(a.x - b.x, a.y - b.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/DistanceFromSegment.js
  function DistanceFromSegment2(p, a, b) {
    const d = DistanceSquared11(a, b);
    if (d === 0) {
      return Distance2(p, a);
    }
    const v = Subtract10(b, a);
    Subtract10(p, a, p);
    const t = Math.max(0, Math.min(1, Dot6(p, v) / 12));
    const proj = Add9(a, MultiplyByFloats6(v, t, t, v));
    return Distance2(p, proj);
  }

  // node_modules/@phaserjs/phaser/math/vec2/DistancePower.js
  function DistancePower2(a, b, pow = 2) {
    return Math.sqrt(Math.pow(b.x - a.x, pow) + Math.pow(b.y - a.y, pow));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Divide.js
  function Divide6(a, b, out = new Vec27()) {
    return out.set(a.x / b.x, a.y / b.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/DivideScalar.js
  function DivideScalar6(a, scalar, out = new Vec27()) {
    return out.set(a.x / scalar, a.y / scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Equals.js
  function Equals8(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  // node_modules/@phaserjs/phaser/math/vec2/Floor.js
  function Floor6(a, out = new Vec27()) {
    return out.set(Math.floor(a.x), Math.floor(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Fract.js
  function Fract6(a, out = new Vec27()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/FromGridIndex.js
  function FromGridIndex2(index69, width, height, out = new Vec27()) {
    let x = 0;
    let y = 0;
    const total = width * height;
    if (index69 > 0 && index69 <= total) {
      if (index69 > width - 1) {
        y = Math.floor(index69 / width);
        x = index69 - y * width;
      } else {
        x = index69;
      }
      out.set(x, y);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/math/vec2/FromTransform.js
  function FromTransform2(x, y, positionX, positionY, rotation, scaleX, scaleY, out = new Vec27()) {
    const sin = Math.sin(rotation);
    const cos = Math.cos(rotation);
    const a = cos * scaleX;
    const b = sin * scaleX;
    const c = -sin * scaleY;
    const d = cos * scaleY;
    const id = 1 / (a * d + c * -b);
    return out.set(d * id * x + -c * id * y + (positionY * c - positionX * d) * id, a * id * y + -b * id * x + (-positionY * a + positionX * b) * id);
  }

  // node_modules/@phaserjs/phaser/math/vec2/FuzzyEquals.js
  function FuzzyEquals6(a, b, epsilon = 1e-4) {
    return FuzzyEqual2(a.x, b.x, epsilon) && FuzzyEqual2(a.y, b.y, epsilon);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Hermite.js
  function Hermite8(a, b, c, d, t, out = new Vec27()) {
    return out.set(Hermite4(t, a.x, b.x, c.x, d.x), Hermite4(t, a.y, b.y, c.y, d.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Inverse.js
  function Inverse4(a, out = new Vec27()) {
    return out.set(1 / a.x, 1 / a.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Length.js
  function Length6(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/LengthSquared.js
  function LengthSquared6(a) {
    return a.x * a.x + a.y * a.y;
  }

  // node_modules/@phaserjs/phaser/math/vec2/Lerp.js
  function Lerp6(a, b, t, out = new Vec27()) {
    const x = a.x;
    const y = a.y;
    return out.set(x + t * (b.x - x), y + t * (b.y - y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/ManhattanDistance.js
  function ManhattanDistance6(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/ManhattanLength.js
  function ManhattanLength6(a) {
    return Math.abs(a.x) + Math.abs(a.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Max.js
  function Max6(a, b, out = new Vec27()) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Min.js
  function Min6(a, b, out = new Vec27()) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by));
  }

  // node_modules/@phaserjs/phaser/math/vec2/Multiply.js
  function Multiply20(a, b, out = new Vec27()) {
    return out.set(a.x * b.x, a.y * b.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Negate.js
  function Negate6(a, out = new Vec27()) {
    return out.set(-a.x, -a.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Normalize.js
  function Normalize13(a, out = new Vec27()) {
    return DivideScalar6(a, Length6(a) || 1, out);
  }

  // node_modules/@phaserjs/phaser/math/vec2/One.js
  function One6() {
    return new Vec27(1, 1);
  }

  // node_modules/@phaserjs/phaser/math/vec2/PerpDot.js
  function PerpDot2(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  // node_modules/@phaserjs/phaser/math/vec2/Random.js
  function Random6(a, scale = 1, out = new Vec27()) {
    const r = Math.random() * 2 * Math.PI;
    return out.set(Math.cos(r) * scale, Math.sin(r) * scale);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Rotate.js
  function Rotate4(a, origin, angle, out = new Vec27()) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const x = a.x - origin.x;
    const y = a.y - origin.y;
    return out.set(x * c - y * s + origin.x, x * s + y * c + origin.y);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Round.js
  function Round6(a, out = new Vec27()) {
    return out.set(Math.round(a.x), Math.round(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/RoundToZero.js
  function RoundToZero6(a, out = new Vec27()) {
    return out.set(a.x < 0 ? Math.ceil(a.x) : Math.floor(a.x), a.y < 0 ? Math.ceil(a.y) : Math.floor(a.y));
  }

  // node_modules/@phaserjs/phaser/math/vec2/ScaleAndAdd.js
  function ScaleAndAdd7(a, b, scalar, out = new Vec27()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec2/SetLength.js
  function SetLength6(a, length, out = new Vec27()) {
    Normalize13(a, out);
    return Scale20(out, length, out);
  }

  // node_modules/@phaserjs/phaser/math/vec2/SubtractScalar.js
  function SubtractScalar6(a, scalar, out = new Vec27()) {
    return out.set(a.x - scalar, a.y - scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Transform.js
  function Transform2(v, positionX, positionY, rotation, scaleX, scaleY, out = new Vec27()) {
    return FromTransform2(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
  }

  // node_modules/@phaserjs/phaser/math/vec2/TransformMat2d.js
  function TransformMat2d2(v, m, out = new Vec27()) {
    const {a, b, c, d, tx, ty} = m;
    return out.set(a * v.x + c * v.y + tx, b * v.x + d * v.y + ty);
  }

  // node_modules/@phaserjs/phaser/math/vec2/TransformMat4.js
  function TransformMat418(v, m, out = new Vec27()) {
    const data = m.data;
    return out.set(data[0] * v.x + data[4] * v.y + data[12], data[1] * v.x + data[5] * v.y + data[13]);
  }

  // node_modules/@phaserjs/phaser/math/vec2/Zero.js
  function Zero20() {
    return new Vec27(0, 0);
  }

  // node_modules/@phaserjs/phaser/index-7fd08172.js
  var index48 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Abs: Abs6,
    Add: Add9,
    AddScalar: AddScalar6,
    Angle: Angle4,
    AngleY: AngleY2,
    Bezier: Bezier8,
    CatmullRom: CatmullRom8,
    Ceil: Ceil6,
    Center: Center6,
    ChebyshevDistance: ChebyshevDistance2,
    Clamp: Clamp21,
    ClampScalar: ClampScalar6,
    Clone: Clone8,
    CopyFrom: CopyFrom22,
    Cross: Cross6,
    Distance: Distance2,
    DistanceFromSegment: DistanceFromSegment2,
    DistancePower: DistancePower2,
    DistanceSquared: DistanceSquared11,
    Divide: Divide6,
    DivideScalar: DivideScalar6,
    Dot: Dot6,
    Equals: Equals8,
    Floor: Floor6,
    Fract: Fract6,
    FromGridIndex: FromGridIndex2,
    FromTransform: FromTransform2,
    FuzzyEquals: FuzzyEquals6,
    Hermite: Hermite8,
    Inverse: Inverse4,
    Length: Length6,
    LengthSquared: LengthSquared6,
    Lerp: Lerp6,
    ManhattanDistance: ManhattanDistance6,
    ManhattanLength: ManhattanLength6,
    Max: Max6,
    Min: Min6,
    Multiply: Multiply20,
    MultiplyByFloats: MultiplyByFloats6,
    Negate: Negate6,
    Normalize: Normalize13,
    One: One6,
    PerpDot: PerpDot2,
    Random: Random6,
    Rotate: Rotate4,
    Round: Round6,
    RoundToZero: RoundToZero6,
    Scale: Scale20,
    ScaleAndAdd: ScaleAndAdd7,
    SetLength: SetLength6,
    Subtract: Subtract10,
    SubtractScalar: SubtractScalar6,
    Transform: Transform2,
    TransformMat2d: TransformMat2d2,
    TransformMat4: TransformMat418,
    Vec2: Vec27,
    Vec2Callback: Vec2Callback2,
    Zero: Zero20
  });

  // node_modules/@phaserjs/phaser/math/vec4/Vec4.js
  class Vec42 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.set(x, y, z, w);
    }
    set(x = 0, y = 0, z = 0, w = 1) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    }
    toArray(dst = [], index69 = 0) {
      const {x, y, z, w} = this;
      dst[index69] = x;
      dst[index69 + 1] = y;
      dst[index69 + 2] = z;
      dst[index69 + 3] = w;
      return dst;
    }
    fromArray(src, index69 = 0) {
      return this.set(src[index69], src[index69 + 1], src[index69 + 2], src[index69 + 3]);
    }
    toString() {
      const {x, y, z, w} = this;
      return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
  }

  // node_modules/@phaserjs/phaser/math/vec4/Abs.js
  function Abs2(a, out = new Vec42()) {
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z), Math.abs(a.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Add.js
  function Add4(a, b, out = new Vec42()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/AddScalar.js
  function AddScalar2(a, scalar, out = new Vec42()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Bezier.js
  function Bezier2(a, b, c, d, t, out = new Vec42()) {
    return out.set(Bezier4(t, a.x, b.x, c.x, d.x), Bezier4(t, a.y, b.y, c.y, d.y), Bezier4(t, a.z, b.z, c.z, d.z), Bezier4(t, a.w, b.w, c.w, d.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/CatmullRom.js
  function CatmullRom2(p1, p2, p3, p4, t, out = new Vec42()) {
    return out.set(CatmullRom4(t, p1.x, p2.x, p3.x, p4.x), CatmullRom4(t, p1.y, p2.y, p3.y, p4.y), CatmullRom4(t, p1.z, p2.z, p3.z, p4.z), CatmullRom4(t, p1.w, p2.w, p3.w, p4.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Ceil.js
  function Ceil2(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.ceil(x), Math.ceil(y), Math.ceil(z), Math.ceil(w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Scale.js
  function Scale14(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Center.js
  function Center2(a, b, out = new Vec42()) {
    Add4(a, b, out);
    return Scale14(out, 0.5, out);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Clamp.js
  function Clamp16(a, min, max, out = new Vec42()) {
    return out.set(Clamp2(a.x, min.x, max.x), Clamp2(a.y, min.y, max.y), Clamp2(a.z, min.z, max.z), Clamp2(a.w, min.w, max.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/DivideScalar.js
  function DivideScalar2(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x / scalar, y / scalar, z / scalar, w / scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Length.js
  function Length2(a) {
    const {x, y, z, w} = a;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/ClampLength.js
  function ClampLength2(a, min, max, out = new Vec42()) {
    const length = Length2(a);
    DivideScalar2(a, length || 1, out);
    return Scale14(out, Clamp2(min, max, length), out);
  }

  // node_modules/@phaserjs/phaser/math/vec4/ClampScalar.js
  function ClampScalar2(a, min, max, out = new Vec42()) {
    return out.set(Clamp2(a.x, min, max), Clamp2(a.y, min, max), Clamp2(a.z, min, max), Clamp2(a.w, min, max));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Clone.js
  function Clone2(source) {
    const {x, y, z, w} = source;
    return new Vec42(x, y, z, w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/CopyFrom.js
  function CopyFrom16(source, dest) {
    const {x, y, z, w} = source;
    return dest.set(x, y, z, w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Cross.js
  function Cross2(u, v, w, out = new Vec42()) {
    const {x: ux, y: uy, z: uz, w: uw} = u;
    const {x: vx, y: vy, z: vz, w: vw} = v;
    const {x: wx, y: wy, z: wz, w: ww} = w;
    const A = vx * wy - vy * wx;
    const B = vx * wz - vz * wx;
    const C = vx * ww - vw * wx;
    const D = vy * wz - vz * wy;
    const E = vy * ww - vw * wy;
    const F = vz * ww - vw * wz;
    const G = ux;
    const H = uy;
    const I = uz;
    const J = uw;
    return out.set(H * F - I * E + J * D, -(G * F) + I * C - J * B, G * E - H * C + J * A, -(G * D) + H * B - I * A);
  }

  // node_modules/@phaserjs/phaser/math/vec4/DistanceSquared.js
  function DistanceSquared7(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    const w = a.w - b.w;
    return x * x + y * y + z * z + w * w;
  }

  // node_modules/@phaserjs/phaser/math/vec4/Distance.js
  function Distance8(a, b) {
    return Math.sqrt(DistanceSquared7(a, b));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Divide.js
  function Divide2(a, b, out = new Vec42()) {
    return out.set(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Dot.js
  function Dot2(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  }

  // node_modules/@phaserjs/phaser/math/vec4/Equals.js
  function Equals2(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
  }

  // node_modules/@phaserjs/phaser/math/vec4/Floor.js
  function Floor2(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Fract.js
  function Fract2(a, out = new Vec42()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z), a.w - Math.floor(a.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/FuzzyEquals.js
  function FuzzyEquals2(a, b, epsilon = 1e-4) {
    return FuzzyEqual2(a.x, b.x, epsilon) && FuzzyEqual2(a.y, b.y, epsilon) && FuzzyEqual2(a.z, b.z, epsilon) && FuzzyEqual2(a.w, b.w, epsilon);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Hermite.js
  function Hermite2(a, b, c, d, t, out = new Vec42()) {
    return out.set(Hermite4(t, a.x, b.x, c.x, d.x), Hermite4(t, a.y, b.y, c.y, d.y), Hermite4(t, a.z, b.z, c.z, d.z), Hermite4(t, a.w, b.w, c.w, d.w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/LengthSquared.js
  function LengthSquared2(a) {
    const {x, y, z, w} = a;
    return x * x + y * y + z * z + w * w;
  }

  // node_modules/@phaserjs/phaser/math/vec4/Lerp.js
  function Lerp2(a, b, t, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z), w + t * (b.w - w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/ManhattanDistance.js
  function ManhattanDistance2(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/ManhattanLength.js
  function ManhattanLength2(a) {
    const {x, y, z, w} = a;
    return Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Max.js
  function Max2(a, b, out = new Vec42()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz), Math.max(aw, bw));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Min.js
  function Min2(a, b, out = new Vec42()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz), Math.min(aw, bw));
  }

  // node_modules/@phaserjs/phaser/math/vec4/Multiply.js
  function Multiply15(a, b, out = new Vec42()) {
    return out.set(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/MultiplyByFloats.js
  function MultiplyByFloats2(a, x, y, z, w, out = new Vec42()) {
    return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Negate.js
  function Negate2(a, out = new Vec42()) {
    return out.set(-a.x, -a.y, -a.z, -a.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Normalize.js
  function Normalize10(a, out = new Vec42()) {
    return DivideScalar2(a, Length2(a) || 1, out);
  }

  // node_modules/@phaserjs/phaser/math/vec4/One.js
  function One2() {
    return new Vec42(1, 1, 1, 1);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Vec4Callback.js
  class Vec4Callback2 extends Vec42 {
    constructor(onChange, x = 0, y = 0, z = 0, w = 0) {
      super(x, y, z, w);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP77;
    }
    set(x = 0, y = 0, z = 0, w = 0) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      if (this.onChange) {
        this.onChange(this);
      }
      return this;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      const prev = this._x;
      this._x = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get y() {
      return this._y;
    }
    set y(value) {
      const prev = this._y;
      this._y = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get z() {
      return this._z;
    }
    set z(value) {
      const prev = this._z;
      this._z = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
    get w() {
      return this._w;
    }
    set w(value) {
      const prev = this._w;
      this._w = value;
      if (prev !== value) {
        this.onChange(this);
      }
    }
  }

  // node_modules/@phaserjs/phaser/math/vec4/RGBACallback.js
  class RGBACallback2 extends Vec4Callback2 {
    constructor(onChange, r = 0, g = 0, b = 0, a = 1) {
      super(onChange, r, g, b, a);
    }
    set r(value) {
      this.x = value;
    }
    get r() {
      return this.x;
    }
    set g(value) {
      this.y = value;
    }
    get g() {
      return this.y;
    }
    set b(value) {
      this.z = value;
    }
    get b() {
      return this.z;
    }
    set a(value) {
      this.w = value;
    }
    get a() {
      return this.w;
    }
    toString() {
      const {x, y, z, w} = this;
      return `[ r=${x}, g=${y}, b=${z}, a=${w} ]`;
    }
  }

  // node_modules/@phaserjs/phaser/math/vec4/Random.js
  function Random2(a, scale = 1, out = new Vec42()) {
    let v1;
    let v2;
    let v3;
    let v4;
    let s1;
    let s2;
    do {
      v1 = Math.random() * 2 - 1;
      v2 = Math.random() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
      v3 = Math.random() * 2 - 1;
      v4 = Math.random() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
    const d = Math.sqrt((1 - s1) / s2);
    return out.set(scale * v1, scale * v2, scale * v3 * d, scale * v4 * d);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Round.js
  function Round2(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.round(x), Math.round(y), Math.round(z), Math.round(w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/RoundToZero.js
  function RoundToZero2(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x < 0 ? Math.ceil(x) : Math.floor(x), y < 0 ? Math.ceil(y) : Math.floor(y), z < 0 ? Math.ceil(z) : Math.floor(z), w < 0 ? Math.ceil(w) : Math.floor(w));
  }

  // node_modules/@phaserjs/phaser/math/vec4/ScaleAndAdd.js
  function ScaleAndAdd4(a, b, scalar, out = new Vec42()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec4/SetLength.js
  function SetLength2(a, length, out = new Vec42()) {
    Normalize10(a, out);
    return Scale14(out, length, out);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Subtract.js
  function Subtract5(a, b, out = new Vec42()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/SubtractScalar.js
  function SubtractScalar2(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
  }

  // node_modules/@phaserjs/phaser/math/vec4/TransformMat4.js
  function TransformMat414(a, m, out = new Vec42()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
    const {x, y, z, w} = a;
    return out.set(m00 * x + m10 * y + m20 * z + m30 * w, m01 * x + m11 * y + m21 * z + m31 * w, m02 * x + m12 * y + m22 * z + m32 * w, m03 * x + m13 * y + m23 * z + m33 * w);
  }

  // node_modules/@phaserjs/phaser/math/vec4/Zero.js
  function Zero14() {
    return new Vec42(0, 0, 0, 0);
  }

  // node_modules/@phaserjs/phaser/index-102d9c62.js
  var index17 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Abs: Abs2,
    Add: Add4,
    AddScalar: AddScalar2,
    Bezier: Bezier2,
    CatmullRom: CatmullRom2,
    Ceil: Ceil2,
    Center: Center2,
    Clamp: Clamp16,
    ClampLength: ClampLength2,
    ClampScalar: ClampScalar2,
    Clone: Clone2,
    CopyFrom: CopyFrom16,
    Cross: Cross2,
    Distance: Distance8,
    DistanceSquared: DistanceSquared7,
    Divide: Divide2,
    DivideScalar: DivideScalar2,
    Dot: Dot2,
    Equals: Equals2,
    Floor: Floor2,
    Fract: Fract2,
    FuzzyEquals: FuzzyEquals2,
    Hermite: Hermite2,
    Length: Length2,
    LengthSquared: LengthSquared2,
    Lerp: Lerp2,
    ManhattanDistance: ManhattanDistance2,
    ManhattanLength: ManhattanLength2,
    Max: Max2,
    Min: Min2,
    Multiply: Multiply15,
    MultiplyByFloats: MultiplyByFloats2,
    Negate: Negate2,
    Normalize: Normalize10,
    One: One2,
    RGBACallback: RGBACallback2,
    Random: Random2,
    Round: Round2,
    RoundToZero: RoundToZero2,
    Scale: Scale14,
    ScaleAndAdd: ScaleAndAdd4,
    SetLength: SetLength2,
    Subtract: Subtract5,
    SubtractScalar: SubtractScalar2,
    TransformMat4: TransformMat414,
    Vec4: Vec42,
    Vec4Callback: Vec4Callback2,
    Zero: Zero14
  });

  // node_modules/@phaserjs/phaser/math/Average.js
  function Average2(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += +values[i];
    }
    return sum / values.length;
  }

  // node_modules/@phaserjs/phaser/math/Between.js
  function Between2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // node_modules/@phaserjs/phaser/math/CeilTo.js
  function CeilTo2(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.ceil(value * p) / p;
  }

  // node_modules/@phaserjs/phaser/math/DegToRad.js
  function DegToRad2(degrees) {
    return degrees * MATH_CONST.DEG_TO_RAD;
  }

  // node_modules/@phaserjs/phaser/math/Difference.js
  function Difference2(a, b) {
    return Math.abs(a - b);
  }

  // node_modules/@phaserjs/phaser/math/FloatBetween.js
  function FloatBetween2(min, max) {
    return Math.random() * (max - min) + min;
  }

  // node_modules/@phaserjs/phaser/math/FloorTo.js
  function FloorTo2(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.floor(value * p) / p;
  }

  // node_modules/@phaserjs/phaser/math/FromPercent.js
  function FromPercent2(percent, min, max) {
    percent = Clamp2(percent, 0, 1);
    return (max - min) * percent;
  }

  // node_modules/@phaserjs/phaser/math/GetSpeed.js
  function GetSpeed2(distance, time) {
    return distance / time / 1e3;
  }

  // node_modules/@phaserjs/phaser/math/MaxAdd.js
  function MaxAdd2(value, amount, max) {
    return Math.min(value + amount, max);
  }

  // node_modules/@phaserjs/phaser/math/MinSub.js
  function MinSub2(value, amount, min) {
    return Math.max(value - amount, min);
  }

  // node_modules/@phaserjs/phaser/math/Percent.js
  function Percent2(value, min, max, upperMax) {
    if (max === void 0) {
      max = min + 1;
    }
    let percentage = (value - min) / (max - min);
    if (percentage > 1) {
      if (upperMax !== void 0) {
        percentage = (upperMax - value) / (upperMax - max);
        if (percentage < 0) {
          percentage = 0;
        }
      } else {
        percentage = 1;
      }
    } else if (percentage < 0) {
      percentage = 0;
    }
    return percentage;
  }

  // node_modules/@phaserjs/phaser/math/RadToDeg.js
  function RadToDeg2(radians) {
    return radians * MATH_CONST.RAD_TO_DEG;
  }

  // node_modules/@phaserjs/phaser/math/RoundTo.js
  function RoundTo2(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.round(value * p) / p;
  }

  // node_modules/@phaserjs/phaser/math/SinCosTableGenerator.js
  function SinCosTableGenerator2(length, sinAmp = 1, cosAmp = 1, frequency = 1) {
    frequency *= Math.PI / length;
    const cos = [];
    const sin = [];
    for (let c = 0; c < length; c++) {
      cosAmp -= sinAmp * frequency;
      sinAmp += cosAmp * frequency;
      cos[c] = cosAmp;
      sin[c] = sinAmp;
    }
    return {
      sin,
      cos,
      length
    };
  }

  // node_modules/@phaserjs/phaser/math/Within.js
  function Within2(a, b, tolerance) {
    return Math.abs(a - b) <= tolerance;
  }

  // node_modules/@phaserjs/phaser/index-68ebd9d5.js
  var index49 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Angle: index42,
    Easing: index12,
    Average: Average2,
    Bernstein: Bernstein2,
    Between: Between2,
    Bezier: Bezier4,
    CatmullRom: CatmullRom4,
    CeilTo: CeilTo2,
    Clamp: Clamp2,
    DegToRad: DegToRad2,
    Difference: Difference2,
    Factorial: Factorial2,
    FloatBetween: FloatBetween2,
    FloorTo: FloorTo2,
    FromPercent: FromPercent2,
    Fuzzy: index45,
    GetSpeed: GetSpeed2,
    Hermite: Hermite4,
    Interpolation: index14,
    Linear: Linear3,
    MATH_CONST,
    Matrix2D: index46,
    Matrix4: index41,
    MaxAdd: MaxAdd2,
    MinSub: MinSub2,
    Percent: Percent2,
    Pow2: index47,
    Quaternion: index44,
    RadToDeg: RadToDeg2,
    RoundAwayFromZero: RoundAwayFromZero2,
    RoundTo: RoundTo2,
    SinCosTableGenerator: SinCosTableGenerator2,
    SmootherStep: SmootherStep2,
    SmoothStep: SmoothStep2,
    Snap: index27,
    Vec2: index48,
    Vec3: index43,
    Vec4: index17,
    Within: Within2,
    Wrap: Wrap3
  });

  // node_modules/@phaserjs/phaser/camera3d/Camera3D.js
  class Camera3D {
    constructor(x = 0, y = 0, z = 0, fov = 45, near = 0.1, far = 1e3) {
      this.dirtyRender = true;
      this.type = "Camera3D";
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.position = new Vec3Callback2(() => this.update(), x, y, z);
      this.direction = new Vec3Callback2(() => this.update(), 0, 1, 0);
      this._lookAtPosition = new Vec32();
      this._lookAtView = new Matrix42();
      this._axis = new Quaternion2();
      this.up = Up2();
      this.left = Left2();
      this._fov = fov;
      this._near = near;
      this._far = far;
      this.aspectRatio = this.renderer.width / this.renderer.height;
      this.viewMatrix = new Matrix42();
      this.projectionMatrix = Perspective2(DegToRad2(fov), this.aspectRatio, near, far);
      this.lookAt(new Vec32());
    }
    updateProjectionMatrix() {
      Perspective2(DegToRad2(this._fov), this.aspectRatio, this._near, this._far, this.projectionMatrix);
      return this;
    }
    lookAt(point) {
      const pos = this.position;
      const dir = this.direction;
      const left = this.left;
      Subtract2(point, pos, dir);
      Normalize2(dir, dir);
      CrossNormalize2(UP, dir, left);
      CrossNormalize2(dir, left, this.up);
      return this.update();
    }
    rotateOnAxis(axisVec, angle) {
      const dir = this.direction;
      const left = this.left;
      const up = this.up;
      const q = SetAxisAngle2(axisVec, angle, this._axis);
      TransformQuat2(dir, q, dir);
      TransformQuat2(left, q, left);
      TransformQuat2(up, q, up);
      Normalize2(up, up);
      Normalize2(left, left);
      Normalize2(dir, dir);
      return this.update();
    }
    yaw(angle) {
      return this.rotateOnAxis(this.up, angle);
    }
    pitch(angle) {
      return this.rotateOnAxis(this.left, angle);
    }
    roll(angle) {
      return this.rotateOnAxis(this.direction, angle);
    }
    forward(s) {
      const pos = this.position;
      const {x: px, y: py, z: pz} = pos;
      const {x: dx, y: dy, z: dz} = this.direction;
      pos.set(px - s * dx, py - s * dy, pz - s * dz);
      return this.update();
    }
    update() {
      const lookPosition = this._lookAtPosition;
      const lookView = this._lookAtView;
      const pos = this.position;
      Add2(pos, this.direction, lookPosition);
      LookAt2(pos, lookPosition, this.up, lookView);
      TranslateFromFloats2(lookView, -pos.x, -pos.y, -pos.z, this.viewMatrix);
      return this;
    }
    reset() {
    }
    destroy() {
      this.position.destroy();
      this.direction.destroy();
      this.up = null;
      this.left = null;
      this.viewMatrix = null;
      this.projectionMatrix = null;
      this._lookAtPosition = null;
      this._lookAtView = null;
      this._axis = null;
    }
    get fov() {
      return this._fov;
    }
    set fov(value) {
      if (value > 0 && value < 180) {
        this._fov = value;
        this.updateProjectionMatrix();
      }
    }
    get near() {
      return this._near;
    }
    set near(value) {
      if (value > 0) {
        this._near = value;
        this.updateProjectionMatrix();
      }
    }
    get far() {
      return this._far;
    }
    set far(value) {
      if (value > 0) {
        this._far = value;
        this.updateProjectionMatrix();
      }
    }
  }

  // node_modules/@phaserjs/phaser/index-4a4aef33.js
  var index33 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Camera3D
  });

  // node_modules/@phaserjs/phaser/geom/rectangle/CeilRectangle.js
  function CeilRectangle(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    rect.width = Math.ceil(rect.width);
    rect.height = Math.ceil(rect.height);
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/CeilRectanglePosition.js
  function CeilRectanglePosition(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/CenterRectangleOn.js
  function CenterRectangleOn(rect, x, y) {
    rect.x = x - rect.width / 2;
    rect.y = y - rect.height / 2;
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/CloneRectangle.js
  function CloneRectangle(source) {
    return new Rectangle2(source.x, source.y, source.width, source.height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/CopyRectangleFrom.js
  function CopyRectangleFrom(source, dest) {
    return dest.set(source.x, source.y, source.width, source.height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/DecomposeRectangle.js
  function DecomposeRectangle3(rect, out = []) {
    out.push(new Vec27(rect.x, rect.y), new Vec27(rect.right, rect.y), new Vec27(rect.right, rect.bottom), new Vec27(rect.x, rect.bottom));
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleAspectRatio.js
  function GetRectangleAspectRatio2(rect) {
    return rect.height === 0 ? NaN : rect.width / rect.height;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleCenterX.js
  function GetRectangleCenterX2(rect) {
    return rect.x + rect.width / 2;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleCenterY.js
  function GetRectangleCenterY2(rect) {
    return rect.y + rect.height / 2;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FitRectangleInside.js
  function FitRectangleInside(target, source) {
    const ratio = GetRectangleAspectRatio2(target);
    let width = source.width;
    let height = source.height;
    if (ratio < GetRectangleAspectRatio2(source)) {
      width = source.height * ratio;
    } else {
      height = source.width / ratio;
    }
    return target.set(GetRectangleCenterX2(source) - target.width / 2, GetRectangleCenterY2(source) - target.height / 2, width, height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FitRectangleOutside.js
  function FitRectangleOutside(target, source) {
    const ratio = GetRectangleAspectRatio2(target);
    let width = source.width;
    let height = source.height;
    if (ratio > GetRectangleAspectRatio2(source)) {
      width = source.height * ratio;
    } else {
      height = source.width / ratio;
    }
    return target.set(GetRectangleCenterX2(source) - target.width / 2, GetRectangleCenterY2(source) - target.height / 2, width, height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FitRectangleToPoint.js
  function FitRectangleToPoint(target, x, y) {
    const minX = Math.min(target.x, x);
    const maxX = Math.max(target.right, x);
    const minY = Math.min(target.y, y);
    const maxY = Math.max(target.bottom, y);
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FitRectangleToPoints.js
  function FitRectangleToPoints(target, points) {
    let minX = target.x;
    let maxX = target.right;
    let minY = target.y;
    let maxY = target.bottom;
    for (let i = 0; i < points.length; i++) {
      minX = Math.min(minX, points[i].x);
      maxX = Math.max(maxX, points[i].x);
      minY = Math.min(minY, points[i].y);
      maxY = Math.max(maxY, points[i].y);
    }
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FloorRectangle.js
  function FloorRectangle(rect) {
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    rect.width = Math.floor(rect.width);
    rect.height = Math.floor(rect.height);
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/FloorRectanglePosition.js
  function FloorRectanglePosition(rect) {
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleArea.js
  function GetRectangleArea(rect) {
    return rect.width * rect.height;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleCenter.js
  function GetRectangleCenter(rect, out = new Vec27()) {
    return out.set(GetRectangleCenterX2(rect), GetRectangleCenterY2(rect));
  }

  // node_modules/@phaserjs/phaser/geom/line/Line.js
  class Line13 {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
      this.set(x1, y1, x2, y2);
    }
    set(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      return this;
    }
    get left() {
      return Math.min(this.x1, this.x2);
    }
    set left(value) {
      if (this.x1 <= this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
    get right() {
      return Math.max(this.x1, this.x2);
    }
    set right(value) {
      if (this.x1 > this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
    get top() {
      return Math.min(this.y1, this.y2);
    }
    set top(value) {
      if (this.y1 <= this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
    get bottom() {
      return Math.max(this.y1, this.y2);
    }
    set bottom(value) {
      if (this.y1 > this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleEdges.js
  function GetRectangleEdges2(rectangle) {
    const {x, y, right, bottom} = rectangle;
    const line1 = new Line13(x, y, right, y);
    const line2 = new Line13(right, y, right, bottom);
    const line3 = new Line13(right, bottom, x, bottom);
    const line4 = new Line13(x, bottom, x, y);
    return [line1, line2, line3, line4];
  }

  // node_modules/@phaserjs/phaser/geom/intersects/RectangleToRectangle.js
  function RectangleToRectangle2(rectA, rectB) {
    if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
      return false;
    }
    return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleIntersection.js
  function GetRectangleIntersection2(rectA, rectB, out = new Rectangle2()) {
    if (RectangleToRectangle2(rectA, rectB)) {
      out.set(Math.max(rectA.x, rectB.x), Math.max(rectA.y, rectB.y), Math.min(rectA.right, rectB.right) - out.x, Math.min(rectA.bottom, rectB.bottom) - out.y);
    } else {
      out.set();
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectanglePerimeter.js
  function GetRectanglePerimeter2(rect) {
    return 2 * (rect.width + rect.height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleMarchingAnts.js
  function GetRectangleMarchingAnts(rect, step, quantity, out = []) {
    if (!step && !quantity) {
      return out;
    }
    if (!step) {
      step = GetRectanglePerimeter2(rect) / quantity;
    } else {
      quantity = Math.round(GetRectanglePerimeter2(rect) / step);
    }
    let x = rect.x;
    let y = rect.y;
    let face = 0;
    for (let i = 0; i < quantity; i++) {
      out.push(new Vec27(x, y));
      switch (face) {
        case 0:
          x += step;
          if (x >= rect.right) {
            face = 1;
            y += x - rect.right;
            x = rect.right;
          }
          break;
        case 1:
          y += step;
          if (y >= rect.bottom) {
            face = 2;
            x -= y - rect.bottom;
            y = rect.bottom;
          }
          break;
        case 2:
          x -= step;
          if (x <= rect.x) {
            face = 3;
            y -= rect.x - x;
            x = rect.x;
          }
          break;
        case 3:
          y -= step;
          if (y <= rect.y) {
            face = 0;
            y = rect.y;
          }
          break;
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleOverlap.js
  function GetRectangleOverlap(rectA, rectB) {
    return rectA.x < rectB.right && rectA.right > rectB.x && rectA.y < rectB.bottom && rectA.bottom > rectB.y;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectanglePerimeterPoint.js
  function GetRectanglePerimeterPoint(rectangle, angle, out = new Vec27()) {
    angle = DegToRad2(angle);
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    let dx = c > 0 ? rectangle.width / 2 : rectangle.width / -2;
    let dy = s > 0 ? rectangle.height / 2 : rectangle.height / -2;
    if (Math.abs(dx * s) < Math.abs(dy * c)) {
      dy = dx * s / c;
    } else {
      dx = dy * c / s;
    }
    return out.set(dx + GetRectangleCenterX2(rectangle), dy + GetRectangleCenterY2(rectangle));
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectanglePoint.js
  function GetRectanglePoint(rectangle, position, out = new Vec27()) {
    if (position <= 0 || position >= 1) {
      return out.set(rectangle.x, rectangle.y);
    }
    let p = GetRectanglePerimeter2(rectangle) * position;
    if (position > 0.5) {
      p -= rectangle.width + rectangle.height;
      if (p <= rectangle.width) {
        return out.set(rectangle.right - p, rectangle.bottom);
      } else {
        return out.set(rectangle.x, rectangle.bottom - (p - rectangle.width));
      }
    } else if (p <= rectangle.width) {
      return out.set(rectangle.x + p, rectangle.y);
    } else {
      return out.set(rectangle.right, rectangle.y + (p - rectangle.width));
    }
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectanglePoints.js
  function GetRectanglePoints(rectangle, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = GetRectanglePerimeter2(rectangle) / step;
    }
    for (let i = 0; i < quantity; i++) {
      out.push(GetRectanglePoint(rectangle, i / quantity));
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleRandomPoint.js
  function GetRectangleRandomPoint(rect, out = new Vec27()) {
    return out.set(rect.x + Math.random() * rect.width, rect.y + Math.random() * rect.height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleContainsRectangle.js
  function RectangleContainsRectangle2(rectA, rectB) {
    if (rectB.width * rectB.height > rectA.width * rectA.height) {
      return false;
    }
    return rectB.x > rectA.x && rectB.x < rectA.right && (rectB.right > rectA.x && rectB.right < rectA.right) && (rectB.y > rectA.y && rectB.y < rectA.bottom) && (rectB.bottom > rectA.y && rectB.bottom < rectA.bottom);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleRandomPointOutside.js
  function GetRectangleRandomPointOutside(outer, inner, out = new Vec27()) {
    if (RectangleContainsRectangle2(outer, inner)) {
      switch (Between2(0, 3)) {
        case 0:
          out.x = outer.x + Math.random() * (inner.right - outer.x);
          out.y = outer.y + Math.random() * (inner.y - outer.y);
          break;
        case 1:
          out.x = inner.x + Math.random() * (outer.right - inner.x);
          out.y = inner.bottom + Math.random() * (outer.bottom - inner.bottom);
          break;
        case 2:
          out.x = outer.x + Math.random() * (inner.x - outer.x);
          out.y = inner.y + Math.random() * (outer.bottom - inner.y);
          break;
        case 3:
          out.x = inner.right + Math.random() * (outer.right - inner.right);
          out.y = outer.y + Math.random() * (inner.bottom - outer.y);
          break;
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleSize.js
  function GetRectangleSize(rect, out = new Vec27()) {
    return out.set(rect.width, rect.height);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/GetRectangleUnion.js
  function GetRectangleUnion(rectA, rectB, out = new Rectangle2()) {
    const x = Math.min(rectA.x, rectB.x);
    const y = Math.min(rectA.y, rectB.y);
    const w = Math.max(rectA.right, rectB.right) - x;
    const h = Math.max(rectA.bottom, rectB.bottom) - y;
    return out.set(x, y, w, h);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/InflateRectangle.js
  function InflateRectangle(rect, x, y) {
    const cx = GetRectangleCenterX2(rect);
    const cy = GetRectangleCenterY2(rect);
    rect.width = rect.width + x * 2;
    rect.height = rect.height + y * 2;
    return CenterRectangleOn(rect, cx, cy);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/MergeRectangle.js
  function MergeRectangle(target, source) {
    const minX = Math.min(target.x, source.x);
    const maxX = Math.max(target.right, source.right);
    const minY = Math.min(target.y, source.y);
    const maxY = Math.max(target.bottom, source.bottom);
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleContainsPoint.js
  function RectangleContainsPoint(rect, point) {
    return RectangleContains29(rect, point.x, point.y);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleEquals.js
  function RectangleEquals(rect, toCompare) {
    return rect.x === toCompare.x && rect.y === toCompare.y && rect.width === toCompare.width && rect.height === toCompare.height;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleFromPoints.js
  function RectangleFromPoints(points, out = new Rectangle2()) {
    if (points.length === 0) {
      return out;
    }
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = MATH_CONST.MIN_SAFE_INTEGER;
    let maxY = MATH_CONST.MIN_SAFE_INTEGER;
    for (let i = 0; i < points.length; i++) {
      const px = points[i].x;
      const py = points[i].y;
      minX = Math.min(minX, px);
      minY = Math.min(minY, py);
      maxX = Math.max(maxX, px);
      maxY = Math.max(maxY, py);
    }
    return out.set(minX, minY, maxX - minX, maxY - minY);
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/RectangleSizeEquals.js
  function RectangleSizeEquals(rect, toCompare) {
    return rect.width === toCompare.width && rect.height === toCompare.height;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/ScaleRectangle.js
  function ScaleRectangle(rect, x, y = x) {
    rect.width *= x;
    rect.height *= y;
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/TranslateRectangle.js
  function TranslateRectangle(rect, x, y) {
    rect.x += x;
    rect.y += y;
    return rect;
  }

  // node_modules/@phaserjs/phaser/geom/rectangle/TranslateRectanglePoint.js
  function TranslateRectanglePoint(rect, point) {
    rect.x += point.x;
    rect.y += point.y;
    return rect;
  }

  // node_modules/@phaserjs/phaser/index-cbda9a65.js
  var index63 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CeilRectangle,
    CeilRectanglePosition,
    CenterRectangleOn,
    CloneRectangle,
    CopyRectangleFrom,
    DecomposeRectangle: DecomposeRectangle3,
    FitRectangleInside,
    FitRectangleOutside,
    FitRectangleToPoint,
    FitRectangleToPoints,
    FloorRectangle,
    FloorRectanglePosition,
    GetRectangleArea,
    GetRectangleAspectRatio: GetRectangleAspectRatio2,
    GetRectangleCenter,
    GetRectangleCenterX: GetRectangleCenterX2,
    GetRectangleCenterY: GetRectangleCenterY2,
    GetRectangleEdges: GetRectangleEdges2,
    GetRectangleIntersection: GetRectangleIntersection2,
    GetRectangleMarchingAnts,
    GetRectangleOverlap,
    GetRectanglePerimeter: GetRectanglePerimeter2,
    GetRectanglePerimeterPoint,
    GetRectanglePoint,
    GetRectanglePoints,
    GetRectangleRandomPoint,
    GetRectangleRandomPointOutside,
    GetRectangleSize,
    GetRectangleUnion,
    InflateRectangle,
    MergeRectangle,
    Rectangle: Rectangle2,
    RectangleContains: RectangleContains29,
    RectangleContainsPoint,
    RectangleContainsRectangle: RectangleContainsRectangle2,
    RectangleEquals,
    RectangleFromPoints,
    RectangleSizeEquals,
    ScaleRectangle,
    TranslateRectangle,
    TranslateRectanglePoint
  });

  // node_modules/@phaserjs/phaser/camera3d/NewCamera3D.js
  class NewCamera3D {
    constructor(fov = 45, near = 0.1, far = 1e3) {
      this.isOrbit = false;
      this.minDistance = 0;
      this.maxDistance = Infinity;
      this.minPolarAngle = 0;
      this.maxPolarAngle = Math.PI;
      this.minAzimuthAngle = -Infinity;
      this.maxAzimuthAngle = Infinity;
      this.dirtyRender = true;
      this.panRate = 5;
      this.zoomRate = 200;
      this.rotateRate = -3;
      this._yaw = 0;
      this._pitch = 0;
      this._roll = 0;
      this.type = "Camera3D";
      this._fov = fov;
      this._near = near;
      this._far = far;
      this.matrix = new Matrix42();
      this.viewMatrix = new Matrix42();
      this.projectionMatrix = new Matrix42();
      this.viewProjectionMatrix = new Matrix42();
      this.position = new Vec3Callback2(() => this.update());
      this.rotation = new Quaternion2();
      const game = GameInstance2.get();
      const renderer = game.renderer;
      this.viewport = new Rectangle2(0, 0, renderer.width, renderer.height);
      this.renderer = renderer;
      this.forward = Forward3();
      this.up = Up2();
      this.right = Right3();
      this.start = new Vec32();
      this.setAspectRatio();
    }
    update() {
      const matrix2 = this.matrix;
      const view = this.viewMatrix;
      FromRotationXYTranslation2(this.rotation, this.position, !this.isOrbit, matrix2);
      TransformMat4Zero2(FORWARD, matrix2, this.forward);
      TransformMat4Zero2(UP, matrix2, this.up);
      TransformMat4Zero2(RIGHT, matrix2, this.right);
      Invert3(matrix2, view);
      Multiply3(this.projectionMatrix, view, this.viewProjectionMatrix);
      return this;
    }
    panX(amount) {
      const pos = this.position;
      if (!this.isOrbit) {
        ScaleAndAdd2(pos, this.right, amount, pos);
      }
      return this;
    }
    panY(amount) {
      const pos = this.position;
      const up = this.up;
      if (this.isOrbit) {
        pos.y += up.y * amount;
      } else {
        ScaleAndAdd2(pos, up, amount, pos);
      }
      return this;
    }
    panZ(amount) {
      const pos = this.position;
      if (this.isOrbit) {
        pos.z += amount;
      } else {
        ScaleAndAdd2(pos, this.forward, amount, pos);
      }
      return this;
    }
    begin(x, y) {
      this.start.set(x, y);
    }
    pan(x, y) {
      const dx = x - this.start.x;
      const dy = y - this.start.y;
      const viewport = this.viewport;
      this.panX(-dx * (this.panRate / viewport.width));
      this.panY(dy * (this.panRate / viewport.height));
      this.start.set(x, y);
    }
    rotate(x, y) {
      const dx = x - this.start.x;
      const dy = y - this.start.y;
      const viewport = this.viewport;
      this.rotation.x += dy * (this.rotateRate / viewport.height);
      this.rotation.y += dx * (this.rotateRate / viewport.width);
      this.start.set(x, y);
      this.update();
    }
    zoom(delta) {
      this.panZ(Clamp2(delta, -1, 1) * (this.zoomRate / this.viewport.height));
    }
    setAspectRatio(value) {
      if (!value) {
        const renderer = this.renderer;
        value = renderer.width / renderer.height;
      }
      this.aspect = value;
      return this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      Perspective2(DegToRad2(this._fov), this.aspect, this._near, this._far, this.projectionMatrix);
      return this;
    }
    get fov() {
      return this._fov;
    }
    set fov(value) {
      this._fov = Clamp2(value, 0, 180);
      this.updateProjectionMatrix();
    }
    get near() {
      return this._near;
    }
    set near(value) {
      if (value > 0) {
        this._near = value;
        this.updateProjectionMatrix();
      }
    }
    get far() {
      return this._far;
    }
    set far(value) {
      if (value > 0) {
        this._far = value;
        this.updateProjectionMatrix();
      }
    }
    get yaw() {
      return this._yaw;
    }
    set yaw(value) {
      this._yaw = value;
      RotationYawPitchRoll2(value, this._pitch, this._roll, this.rotation);
    }
    get pitch() {
      return this._pitch;
    }
    set pitch(value) {
      this._pitch = value;
      RotationYawPitchRoll2(this._yaw, value, this._roll, this.rotation);
    }
    get roll() {
      return this._roll;
    }
    set roll(value) {
      this._roll = value;
      RotationYawPitchRoll2(this._yaw, this._pitch, value, this.rotation);
    }
  }

  // node_modules/@phaserjs/phaser/config/banner/GetBanner.js
  function GetBanner2() {
    const {title, version, url, color, background} = ConfigStore2.get(CONFIG_DEFAULTS.BANNER);
    if (title !== "") {
      const str = version !== "" ? title + " " + version : title;
      console.log(`%c${str}%c ${url}`, `padding: 4px 16px; color: ${color}; background: ${background}`, "");
    }
  }

  // node_modules/@phaserjs/phaser/config/defaultorigin/GetDefaultOriginX.js
  function GetDefaultOriginX() {
    return ConfigStore2.get(CONFIG_DEFAULTS.DEFAULT_ORIGIN).x;
  }

  // node_modules/@phaserjs/phaser/config/defaultorigin/GetDefaultOriginY.js
  function GetDefaultOriginY() {
    return ConfigStore2.get(CONFIG_DEFAULTS.DEFAULT_ORIGIN).y;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/AddShader.js
  function AddShader7(renderPass, shader, textureID) {
    const stackEntry = {shader, textureID};
    renderPass.shaderStack.push(stackEntry);
    return stackEntry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/AddVertexBuffer.js
  function AddVertexBuffer12(renderPass, buffer) {
    renderPass.vertexBufferStack.push(buffer);
    return buffer;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindShader.js
  function BindShader8(renderPass, entry) {
    if (!entry) {
      entry = renderPass.currentShader;
    }
    const success = entry.shader.bind(renderPass, entry.textureID);
    if (success) {
      entry.shader.setAttributes(renderPass);
    }
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/Begin.js
  function Begin2(renderPass, camera2D) {
    renderPass.current2DCamera = camera2D;
    renderPass.cameraMatrix = camera2D.matrix;
    BindShader8(renderPass);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/BindTexture.js
  function BindTexture7(texture, index69 = 0) {
    const binding = texture.binding;
    binding.setIndex(index69);
    gl.activeTexture(gl.TEXTURE0 + index69);
    gl.bindTexture(gl.TEXTURE_2D, binding.texture);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/PopVertexBuffer.js
  function PopVertexBuffer12(renderPass) {
    const stack = renderPass.vertexBufferStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentVertexBuffer = stack[stack.length - 1];
    BindVertexBuffer15(renderPass);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetVertexBuffer.js
  function SetVertexBuffer12(renderPass, buffer) {
    const entry = AddVertexBuffer12(renderPass, buffer);
    BindVertexBuffer15(renderPass, entry);
    renderPass.currentVertexBuffer = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/FlushBuffer.js
  function FlushBuffer4(renderPass, buffer) {
    SetVertexBuffer12(renderPass, buffer);
    renderPass.currentShader.shader.setAttributes(renderPass);
    const result = Flush8(renderPass, buffer.count);
    PopVertexBuffer12(renderPass);
    return result;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/GetVertexBufferEntry.js
  function GetVertexBufferEntry10(renderPass, addToCount = 0) {
    const buffer = renderPass.currentVertexBuffer;
    if (renderPass.count + addToCount >= buffer.batchSize) {
      Flush8(renderPass);
    }
    const offset = buffer.indexed ? renderPass.count * buffer.entryElementSize : renderPass.count * buffer.vertexElementSize;
    renderPass.count += addToCount;
    return {
      buffer,
      F32: buffer.vertexViewF32,
      U32: buffer.vertexViewU32,
      offset
    };
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/PopShader.js
  function PopShader7(renderPass) {
    const stack = renderPass.shaderStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentShader = stack[stack.length - 1];
    BindShader8(renderPass);
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetShader.js
  function SetShader7(renderPass, shader, textureID) {
    const entry = AddShader7(renderPass, shader, textureID);
    BindShader8(renderPass, entry);
    renderPass.currentShader = entry;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/SetTexture.js
  function SetTexture6(renderPass, texture) {
    const binding = texture.binding;
    const currentActiveTexture = renderPass.currentActiveTexture;
    if (binding.indexCounter < renderPass.startActiveTexture) {
      binding.indexCounter = renderPass.startActiveTexture;
      if (currentActiveTexture < renderPass.maxTextures) {
        binding.setIndex(currentActiveTexture);
        gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
        renderPass.currentActiveTexture++;
      } else {
        Flush8(renderPass);
        renderPass.startActiveTexture++;
        binding.indexCounter = renderPass.startActiveTexture;
        binding.setIndex(1);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
        renderPass.currentActiveTexture = 2;
      }
    }
    return binding.index;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/renderpass/UnbindTexture.js
  function UnbindTexture7(renderPass, index69 = 0) {
    gl.activeTexture(gl.TEXTURE0 + index69);
    gl.bindTexture(gl.TEXTURE_2D, renderPass.tempTextures[index69]);
    if (index69 > 0) {
      renderPass.startActiveTexture++;
    }
  }

  // node_modules/@phaserjs/phaser/index-cc9cda58.js
  var index64 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BackgroundColor,
    Banner,
    BatchSize,
    Canvas,
    CanvasContext,
    DefaultOrigin,
    MaxTextures: MaxTextures2,
    Parent: Parent2,
    Scenes: Scenes2,
    Size: Size2,
    WebGL: WebGL2,
    WebGLContext: WebGLContext2
  });

  // node_modules/@phaserjs/phaser/config/parent/GetParent.js
  function GetParent2() {
    return ConfigStore2.get(CONFIG_DEFAULTS.PARENT);
  }

  // node_modules/@phaserjs/phaser/config/renderer/GetRenderer.js
  function GetRenderer2() {
    return ConfigStore2.get(CONFIG_DEFAULTS.RENDERER);
  }

  // node_modules/@phaserjs/phaser/config/scenes/GetScenes.js
  function GetScenes2() {
    return ConfigStore2.get(CONFIG_DEFAULTS.SCENES);
  }

  // node_modules/@phaserjs/phaser/config/SetConfigDefaults.js
  function SetConfigDefaults2() {
    SetBackgroundColor3(0);
    SetBatchSize3(4096);
    SetBanner3("Phaser", "4.0.0", "https://phaser4.io");
    SetMaxTextures3(0);
    SetDefaultOrigin3(0.5, 0.5);
    SetSize3(800, 600, 1);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayAudioType.js
  let _audioElement;
  function CanPlayAudioType(type, audioElement) {
    if (!audioElement) {
      if (!_audioElement) {
        _audioElement = document.createElement("audio");
      }
      audioElement = _audioElement;
    }
    return audioElement && audioElement.canPlayType(type) !== "";
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayM4A.js
  function CanPlayM4A(audioElement) {
    return CanPlayAudioType("audio/x-m4a", audioElement) || CanPlayAudioType("audio/aac", audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayMP3.js
  function CanPlayMP3(audioElement) {
    return CanPlayAudioType('audio/mpeg; codecs="mp3"', audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayOGG.js
  function CanPlayOGG(audioElement) {
    return CanPlayAudioType('audio/ogg; codecs="vorbis"', audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayOpus.js
  function CanPlayOpus(audioElement) {
    return CanPlayAudioType('audio/ogg; codecs="opus"', audioElement) || CanPlayAudioType('audio/webm; codecs="opus"', audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayWAV.js
  function CanPlayWAV(audioElement) {
    return CanPlayAudioType('audio/wav; codecs="1"', audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/CanPlayWebM.js
  function CanPlayWebM(audioElement) {
    return CanPlayAudioType('audio/webm; codecs="vorbis"', audioElement);
  }

  // node_modules/@phaserjs/phaser/device/audio/HasAudio.js
  function HasAudio2() {
    return window && window.hasOwnProperty("Audio");
  }

  // node_modules/@phaserjs/phaser/device/audio/HasWebAudio.js
  function HasWebAudio2() {
    return window && (window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext"));
  }

  // node_modules/@phaserjs/phaser/device/audio/GetAudio.js
  function GetAudio() {
    const result = {
      audioData: HasAudio2(),
      m4a: false,
      mp3: false,
      ogg: false,
      opus: false,
      wav: false,
      webAudio: HasWebAudio2(),
      webm: false
    };
    if (result.audioData) {
      result.m4a = CanPlayM4A();
      result.mp3 = CanPlayMP3();
      result.ogg = CanPlayOGG();
      result.opus = CanPlayOpus();
      result.wav = CanPlayWAV();
      result.webm = CanPlayWebM();
    }
    return result;
  }

  // node_modules/@phaserjs/phaser/index-67843a33.js
  var index40 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CanPlayAudioType,
    CanPlayM4A,
    CanPlayMP3,
    CanPlayOGG,
    CanPlayOpus,
    CanPlayWAV,
    CanPlayWebM,
    GetAudio,
    HasAudio: HasAudio2,
    HasWebAudio: HasWebAudio2
  });

  // node_modules/@phaserjs/phaser/device/browser/IsChrome.js
  function IsChrome2() {
    const chrome = /Chrome\/(\d+)/.test(navigator.userAgent);
    const chromeVersion = chrome ? parseInt(RegExp.$1, 10) : 0;
    return {
      chrome,
      chromeVersion
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsEdge.js
  function IsEdge2() {
    const edge = /Edge\/\d+/.test(navigator.userAgent);
    return {
      edge
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsFirefox.js
  function IsFirefox2() {
    const firefox = /Firefox\D+(\d+)/.test(navigator.userAgent);
    const firefoxVersion = firefox ? parseInt(RegExp.$1, 10) : 0;
    return {
      firefox,
      firefoxVersion
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsMSIE.js
  function IsMSIE2() {
    const ie = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    const ieVersion = ie ? parseInt(RegExp.$1, 10) : 0;
    return {
      ie,
      ieVersion
    };
  }

  // node_modules/@phaserjs/phaser/device/os/IsiOS.js
  function IsiOS3() {
    const ua = navigator.userAgent;
    const result = {
      iOS: false,
      iOSVersion: 0,
      iPhone: false,
      iPad: false
    };
    if (/iP[ao]d|iPhone/i.test(ua)) {
      const match = /OS (\d+)/.exec(navigator.appVersion);
      result.iOS = true;
      result.iOSVersion = parseInt(match[0], 10);
      result.iPhone = ua.toLowerCase().includes("iphone");
      result.iPad = ua.toLowerCase().includes("ipad");
    }
    return result;
  }

  // node_modules/@phaserjs/phaser/device/browser/IsMobileSafari.js
  function IsMobileSafari2() {
    const {iOS} = IsiOS3();
    const mobileSafari = navigator.userAgent.includes("AppleWebKit") && iOS;
    return {
      mobileSafari
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsOpera.js
  function IsOpera2() {
    const opera = navigator.userAgent.includes("Opera");
    return {
      opera
    };
  }

  // node_modules/@phaserjs/phaser/device/os/IsWindowsPhone.js
  function IsWindowsPhone3() {
    const ua = navigator.userAgent;
    return /Windows Phone/i.test(ua) || /IEMobile/i.test(ua);
  }

  // node_modules/@phaserjs/phaser/device/browser/IsSafari.js
  function IsSafari2() {
    const ua = navigator.userAgent;
    const safari = ua.includes("Safari") && !IsWindowsPhone3();
    const safariVersion = /Version\/(\d+)\./.test(ua) ? parseInt(RegExp.$1, 10) : 0;
    return {
      safari,
      safariVersion
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsSilk.js
  function IsSilk2() {
    const silk = navigator.userAgent.includes("Silk");
    return {
      silk
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/IsTrident.js
  function IsTrident2() {
    const trident = /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(navigator.userAgent);
    const tridentVersion = trident ? parseInt(RegExp.$1, 10) : 0;
    const tridentIEVersion = trident ? parseInt(RegExp.$3, 10) : 0;
    return {
      trident,
      tridentVersion,
      tridentIEVersion
    };
  }

  // node_modules/@phaserjs/phaser/device/browser/GetBrowser.js
  function GetBrowser() {
    const {chrome, chromeVersion} = IsChrome2();
    const {edge} = IsEdge2();
    const {firefox, firefoxVersion} = IsFirefox2();
    let {ie, ieVersion} = IsMSIE2();
    const {mobileSafari} = IsMobileSafari2();
    const {opera} = IsOpera2();
    const {safari, safariVersion} = IsSafari2();
    const {silk} = IsSilk2();
    const {trident, tridentVersion, tridentIEVersion} = IsTrident2();
    if (trident) {
      ie = true;
      ieVersion = tridentIEVersion;
    }
    const result = {
      chrome,
      chromeVersion,
      edge,
      firefox,
      firefoxVersion,
      ie,
      ieVersion,
      mobileSafari,
      opera,
      safari,
      safariVersion,
      silk,
      trident,
      tridentVersion
    };
    return result;
  }

  // node_modules/@phaserjs/phaser/index-b01a7f87.js
  var index57 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetBrowser,
    IsChrome: IsChrome2,
    IsEdge: IsEdge2,
    IsFirefox: IsFirefox2,
    IsMobileSafari: IsMobileSafari2,
    IsMSIE: IsMSIE2,
    IsOpera: IsOpera2,
    IsSafari: IsSafari2,
    IsSilk: IsSilk2,
    IsTrident: IsTrident2
  });

  // node_modules/@phaserjs/phaser/device/os/IsAndroid.js
  function IsAndroid2() {
    return navigator.userAgent.includes("Android");
  }

  // node_modules/@phaserjs/phaser/device/os/IsChromeOS.js
  function IsChromeOS2() {
    return navigator.userAgent.includes("CrOS");
  }

  // node_modules/@phaserjs/phaser/device/os/IsCordova.js
  function IsCordova2() {
    return window.hasOwnProperty("cordova");
  }

  // node_modules/@phaserjs/phaser/device/os/IsCrosswalk.js
  function IsCrosswalk2() {
    return navigator.userAgent.includes("Crosswalk");
  }

  // node_modules/@phaserjs/phaser/device/os/IsEjecta.js
  function IsEjecta2() {
    return window.hasOwnProperty("ejecta");
  }

  // node_modules/@phaserjs/phaser/device/os/IsKindle.js
  function IsKindle2() {
    const ua = navigator.userAgent;
    return ua.includes("Kindle") || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua);
  }

  // node_modules/@phaserjs/phaser/device/os/IsLinux.js
  function IsLinux2() {
    return navigator.userAgent.includes("Linux");
  }

  // node_modules/@phaserjs/phaser/device/os/IsMacOS.js
  function IsMacOS2() {
    const ua = navigator.userAgent;
    return ua.includes("Mac OS") && !ua.includes("like Mac OS");
  }

  // node_modules/@phaserjs/phaser/device/os/IsNode.js
  function IsNode2() {
    return typeof process !== "undefined" && typeof process.versions === "object" && process.versions.hasOwnProperty("node");
  }

  // node_modules/@phaserjs/phaser/device/os/IsNodeWebkit.js
  function IsNodeWebkit2() {
    return IsNode2() && !!process.versions.hasOwnProperty("node-webkit");
  }

  // node_modules/@phaserjs/phaser/device/os/IsWebApp.js
  function IsWebApp2() {
    return navigator.hasOwnProperty("standalone");
  }

  // node_modules/@phaserjs/phaser/device/os/IsWindows.js
  function IsWindows2() {
    return navigator.userAgent.includes("Windows");
  }

  // node_modules/@phaserjs/phaser/device/os/GetOS.js
  function GetOS() {
    const ua = navigator.userAgent;
    const {iOS, iOSVersion, iPad, iPhone} = IsiOS3();
    const result = {
      android: IsAndroid2(),
      chromeOS: IsChromeOS2(),
      cordova: IsCordova2(),
      crosswalk: IsCrosswalk2(),
      desktop: false,
      ejecta: IsEjecta2(),
      iOS,
      iOSVersion,
      iPad,
      iPhone,
      kindle: IsKindle2(),
      linux: IsLinux2(),
      macOS: IsMacOS2(),
      node: IsNode2(),
      nodeWebkit: IsNodeWebkit2(),
      pixelRatio: 1,
      webApp: IsWebApp2(),
      windows: IsWindows2(),
      windowsPhone: IsWindowsPhone3()
    };
    if (result.windowsPhone) {
      result.android = false;
      result.iOS = false;
      result.macOS = false;
      result.windows = true;
    }
    const silk = ua.includes("Silk");
    if (result.windows || result.macOS || result.linux && !silk || result.chromeOS) {
      result.desktop = true;
    }
    if (result.windowsPhone || /Windows NT/i.test(ua) && /Touch/i.test(ua)) {
      result.desktop = false;
    }
    return result;
  }

  // node_modules/@phaserjs/phaser/index-06f68cc0.js
  var index13 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetOS,
    IsAndroid: IsAndroid2,
    IsChromeOS: IsChromeOS2,
    IsCordova: IsCordova2,
    IsCrosswalk: IsCrosswalk2,
    IsEjecta: IsEjecta2,
    IsiOS: IsiOS3,
    IsKindle: IsKindle2,
    IsLinux: IsLinux2,
    IsMacOS: IsMacOS2,
    IsNode: IsNode2,
    IsNodeWebkit: IsNodeWebkit2,
    IsWebApp: IsWebApp2,
    IsWindows: IsWindows2,
    IsWindowsPhone: IsWindowsPhone3
  });

  // node_modules/@phaserjs/phaser/device/video/CanPlayVideoType.js
  let _videoElement;
  function CanPlayVideoType2(type, videoElement) {
    if (!videoElement) {
      if (!_videoElement) {
        _videoElement = document.createElement("video");
      }
      videoElement = _videoElement;
    }
    return videoElement && videoElement.canPlayType(type) !== "";
  }

  // node_modules/@phaserjs/phaser/device/video/CanPlayH264Video.js
  function CanPlayH264Video(videoElement) {
    return CanPlayVideoType2('video/mp4; codecs="avc1.42E01E"', videoElement);
  }

  // node_modules/@phaserjs/phaser/device/video/CanPlayHLSVideo.js
  function CanPlayHLSVideo(videoElement) {
    return CanPlayVideoType2('application/x-mpegURL; codecs="avc1.42E01E"', videoElement);
  }

  // node_modules/@phaserjs/phaser/device/video/CanPlayOGGVideo.js
  function CanPlayOGGVideo(videoElement) {
    return CanPlayVideoType2('video/ogg; codecs="theora"', videoElement);
  }

  // node_modules/@phaserjs/phaser/device/video/CanPlayVP9Video.js
  function CanPlayVP9Video(videoElement) {
    return CanPlayVideoType2('video/webm; codecs="vp9"', videoElement);
  }

  // node_modules/@phaserjs/phaser/device/video/CanPlayWebMVideo.js
  function CanPlayWebMVideo(videoElement) {
    return CanPlayVideoType2('video/webm; codecs="vp8, vorbis"', videoElement);
  }

  // node_modules/@phaserjs/phaser/device/video/GetVideo.js
  function GetVideo() {
    return {
      h264Video: CanPlayH264Video(),
      hlsVideo: CanPlayHLSVideo(),
      oggVideo: CanPlayOGGVideo(),
      vp9Video: CanPlayVP9Video(),
      webmVideo: CanPlayWebMVideo()
    };
  }

  // node_modules/@phaserjs/phaser/index-5e32b133.js
  var index38 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CanPlayH264Video,
    CanPlayHLSVideo,
    CanPlayOGGVideo,
    CanPlayVP9Video,
    CanPlayVideoType: CanPlayVideoType2,
    CanPlayWebMVideo,
    GetVideo
  });

  // node_modules/@phaserjs/phaser/index-a2efeaed.js
  var index58 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Audio: index40,
    Browser: index57,
    OS: index13,
    Video: index38,
    CanPlayAudioType,
    CanPlayM4A,
    CanPlayMP3,
    CanPlayOGG,
    CanPlayOpus,
    CanPlayWAV,
    CanPlayWebM,
    GetAudio,
    HasAudio: HasAudio2,
    HasWebAudio: HasWebAudio2,
    GetBrowser,
    IsChrome: IsChrome2,
    IsEdge: IsEdge2,
    IsFirefox: IsFirefox2,
    IsMobileSafari: IsMobileSafari2,
    IsMSIE: IsMSIE2,
    IsOpera: IsOpera2,
    IsSafari: IsSafari2,
    IsSilk: IsSilk2,
    IsTrident: IsTrident2,
    GetOS,
    IsAndroid: IsAndroid2,
    IsChromeOS: IsChromeOS2,
    IsCordova: IsCordova2,
    IsCrosswalk: IsCrosswalk2,
    IsEjecta: IsEjecta2,
    IsiOS: IsiOS3,
    IsKindle: IsKindle2,
    IsLinux: IsLinux2,
    IsMacOS: IsMacOS2,
    IsNode: IsNode2,
    IsNodeWebkit: IsNodeWebkit2,
    IsWebApp: IsWebApp2,
    IsWindows: IsWindows2,
    IsWindowsPhone: IsWindowsPhone3,
    CanPlayH264Video,
    CanPlayHLSVideo,
    CanPlayOGGVideo,
    CanPlayVP9Video,
    CanPlayVideoType: CanPlayVideoType2,
    CanPlayWebMVideo,
    GetVideo
  });

  // node_modules/@phaserjs/phaser/display/DepthFirstSearch.js
  function DepthFirstSearch5(parent) {
    const stack = [parent];
    const output = [];
    while (stack.length > 0) {
      const node = stack.shift();
      output.push(node);
      const numChildren = node.numChildren;
      if (numChildren > 0) {
        for (let i = numChildren - 1; i >= 0; i--) {
          stack.unshift(node.children[i]);
        }
      }
    }
    output.shift();
    return output;
  }

  // node_modules/@phaserjs/phaser/display/GetChildIndex.js
  function GetChildIndex6(parent, child) {
    return parent.children.indexOf(child);
  }

  // node_modules/@phaserjs/phaser/display/RemoveChildAt.js
  function RemoveChildAt6(parent, index69) {
    const children = parent.children;
    let child;
    if (index69 >= 0 && index69 < children.length) {
      const removed = children.splice(index69, 1);
      if (removed[0]) {
        child = removed[0];
        child.parent = null;
      }
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/RemoveChild.js
  function RemoveChild5(parent, child) {
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex > -1) {
      RemoveChildAt6(parent, currentIndex);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/gameobjects/events/AddedToWorldEvent.js
  const AddedToWorldEvent9 = "addedtoworld";

  // node_modules/@phaserjs/phaser/gameobjects/events/DestroyEvent.js
  const DestroyEvent2 = "destroy";

  // node_modules/@phaserjs/phaser/gameobjects/events/PostUpdateEvent.js
  const PostUpdateEvent = "postupdate";

  // node_modules/@phaserjs/phaser/gameobjects/events/RemovedFromWorldEvent.js
  const RemovedFromWorldEvent9 = "removedfromworld";

  // node_modules/@phaserjs/phaser/gameobjects/events/UpdateEvent.js
  const UpdateEvent = "update";

  // node_modules/@phaserjs/phaser/events/Emit.js
  function Emit2(emitter, event, ...args) {
    if (emitter.events.size === 0 || !emitter.events.has(event)) {
      return false;
    }
    const listeners = emitter.events.get(event);
    for (const ee of listeners) {
      ee.callback.apply(ee.context, args);
      if (ee.once) {
        listeners.delete(ee);
      }
    }
    if (listeners.size === 0) {
      emitter.events.delete(event);
    }
    return true;
  }

  // node_modules/@phaserjs/phaser/display/SetWorld.js
  function SetWorld7(world2, ...children) {
    children.forEach((child) => {
      if (child.world) {
        Emit2(child.world, RemovedFromWorldEvent9, child, child.world);
        Emit2(child, RemovedFromWorldEvent9, child, child.world);
      }
      child.world = world2;
      Emit2(world2, AddedToWorldEvent9, child, world2);
      Emit2(child, AddedToWorldEvent9, child, world2);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetParent.js
  function SetParent5(parent, ...children) {
    children.forEach((child) => {
      if (child.parent) {
        RemoveChild5(child.parent, child);
      }
      child.parent = parent;
    });
    const parentWorld = parent.world;
    if (parentWorld) {
      SetWorld7(parentWorld, ...DepthFirstSearch5(parent));
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddChild.js
  function AddChild(parent, child) {
    parent.children.push(child);
    SetParent5(parent, child);
    child.transform.updateWorld();
    return child;
  }

  // node_modules/@phaserjs/phaser/display/AddChildAt.js
  function AddChildAt(parent, index69, child) {
    const children = parent.children;
    if (index69 >= 0 && index69 <= children.length) {
      SetParent5(parent, child);
      children.splice(index69, 0, child);
      child.transform.updateWorld();
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/AddChildren.js
  function AddChildren(parent, ...children) {
    children.forEach((child) => {
      AddChild(parent, child);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddChildrenAt.js
  function AddChildrenAt(parent, index69, ...children) {
    const parentChildren = parent.children;
    if (index69 >= 0 && index69 <= parentChildren.length) {
      children.reverse().forEach((child) => {
        children.splice(index69, 0, child);
        SetParent5(parent, child);
        child.transform.updateWorld();
      });
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddPosition.js
  function AddPosition(x, y, ...children) {
    children.forEach((child) => {
      child.x += x;
      child.y += y;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddRotation.js
  function AddRotation(rotation, ...children) {
    children.forEach((child) => {
      child.rotation += rotation;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddScale.js
  function AddScale(scaleX, scaleY, ...children) {
    children.forEach((child) => {
      child.scaleX += scaleX;
      child.scaleY += scaleY;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/AddSkew.js
  function AddSkew(skewX, skewY, ...children) {
    children.forEach((child) => {
      child.skewX += skewX;
      child.skewY += skewY;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/gameobjects/DIRTY_CONST.js
  const DIRTY_CONST2 = {
    CLEAR: 0,
    TRANSFORM: 1,
    UPDATE: 2,
    CHILD_CACHE: 4,
    POST_RENDER: 8,
    COLORS: 16,
    BOUNDS: 32,
    TEXTURE: 64,
    FRAME: 128,
    ALPHA: 256,
    CHILD: 512,
    DEFAULT: 1 + 2 + 16 + 32,
    USER1: 536870912,
    USER2: 1073741824,
    USER3: 2147483648,
    USER4: 4294967296
  };

  // node_modules/@phaserjs/phaser/display/BringChildToTop.js
  function BringChildToTop(parent, child) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex !== -1 && currentIndex < parentChildren.length) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.push(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/DepthFirstSearchRecursiveNested.js
  function DepthFirstSearchRecursiveNested2(parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const node = parent.children[i];
      const children = [];
      output.push({node, children});
      if (node.numChildren > 0) {
        DepthFirstSearchRecursiveNested2(node, children);
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/display/ConsoleTreeChildren.js
  function GetInfo2(entry) {
    const legend = entry.numChildren > 0 ? "Parent" : "Child";
    return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
  }
  function LogChildren2(entry) {
    console.group(GetInfo2(entry.node));
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        LogChildren2(child);
      } else {
        console.log(GetInfo2(child.node));
      }
    });
    console.groupEnd();
  }
  function ConsoleTreeChildren(parent) {
    const entries = DepthFirstSearchRecursiveNested2(parent);
    if (parent.world === parent) {
      console.group("World");
    } else {
      console.group(GetInfo2(parent));
    }
    entries.forEach((entry) => {
      if (entry.children.length) {
        LogChildren2(entry);
      } else {
        console.log(GetInfo2(entry.node));
      }
    });
    console.groupEnd();
  }

  // node_modules/@phaserjs/phaser/display/CountMatchingChildren.js
  function CountMatchingChildren(parent, property, value) {
    const children = parent.children;
    let total = 0;
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        total++;
      }
    });
    return total;
  }

  // node_modules/@phaserjs/phaser/display/DepthFirstSearchRecursive.js
  function DepthFirstSearchRecursive(parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const child = parent.children[i];
      output.push(child);
      if (child.numChildren > 0) {
        DepthFirstSearchRecursive(child, output);
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/display/RemoveChildrenBetween.js
  function RemoveChildrenBetween2(parent, beginIndex = 0, endIndex) {
    const children = parent.children;
    if (endIndex === void 0) {
      endIndex = children.length;
    }
    const range = endIndex - beginIndex;
    if (range > 0 && range <= endIndex) {
      const removed = children.splice(beginIndex, range);
      removed.forEach((child) => {
        child.parent = null;
      });
      return removed;
    } else {
      return [];
    }
  }

  // node_modules/@phaserjs/phaser/display/DestroyChildren.js
  function DestroyChildren(parent, beginIndex = 0, endIndex) {
    const removed = RemoveChildrenBetween2(parent, beginIndex, endIndex);
    removed.forEach((child) => {
      child.destroy();
    });
  }

  // node_modules/@phaserjs/phaser/display/FindChildByName.js
  function FindChildByName(parent, searchString) {
    const children = DepthFirstSearch5(parent);
    const regex = RegExp(searchString);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (regex.test(child.name)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display/FindChildrenByName.js
  function FindChildrenByName(parent, searchString) {
    const children = DepthFirstSearch5(parent);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach((child) => {
      if (regex.test(child.name)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display/GetAllChildren.js
  function GetAllChildren(parent, property, value) {
    const children = DepthFirstSearch5(parent);
    if (!property) {
      return children;
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display/GetChildAt.js
  function GetChildAt(parent, index69) {
    const children = parent.children;
    if (index69 < 0 || index69 > children.length) {
      throw new Error(`Index out of bounds: ${index69}`);
    }
    return children[index69];
  }

  // node_modules/@phaserjs/phaser/display/GetChildren.js
  function GetChildren(parent, property, value) {
    const children = parent.children;
    if (!property) {
      return [...children];
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display/GetClosestChild.js
  function GetClosestChild(parent, point) {
    const children = parent.children;
    let closest = null;
    let distance = 0;
    children.forEach((child) => {
      const childDistance = Distance2(point, child.transform.position);
      if (!closest || childDistance < distance) {
        closest = child;
        distance = childDistance;
      }
    });
    return closest;
  }

  // node_modules/@phaserjs/phaser/display/GetFirstChild.js
  function GetFirstChild(parent, property, value) {
    const children = parent.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display/GetFurthestChild.js
  function GetFurthestChild(parent, point) {
    const children = parent.children;
    let furthest = null;
    let distance = 0;
    children.forEach((child) => {
      const childDistance = Distance2(point, child.transform.position);
      if (!furthest || childDistance > distance) {
        furthest = child;
        distance = childDistance;
      }
    });
    return furthest;
  }

  // node_modules/@phaserjs/phaser/display/GetLastChild.js
  function GetLastChild(parent, property, value) {
    const children = parent.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display/GetParents.js
  function GetParents(child) {
    const parents = [];
    while (child.parent) {
      parents.push(child.parent);
      child = child.parent;
    }
    return parents;
  }

  // node_modules/@phaserjs/phaser/display/GetRandomChild.js
  function GetRandomChild(parent, startIndex = 0, length) {
    const children = parent.children;
    if (!length) {
      length = children.length;
    }
    const randomIndex = startIndex + Math.floor(Math.random() * length);
    return children[randomIndex];
  }

  // node_modules/@phaserjs/phaser/display/MoveChildDown.js
  function MoveChildDown(parent, child) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex > 0) {
      const child2 = parentChildren[currentIndex - 1];
      const index210 = parentChildren.indexOf(child2);
      parentChildren[currentIndex] = child2;
      parentChildren[index210] = child;
      child.setDirty(DIRTY_CONST2.TRANSFORM);
      child2.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/MoveChildTo.js
  function MoveChildTo(parent, child, index69) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex === -1 || index69 < 0 || index69 >= parentChildren.length) {
      throw new Error("Index out of bounds");
    }
    if (currentIndex !== index69) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.splice(index69, 0, child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/MoveChildUp.js
  function MoveChildUp(parent, child) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex !== -1 && currentIndex > 0) {
      const child2 = parentChildren[currentIndex + 1];
      const index210 = parentChildren.indexOf(child2);
      parentChildren[currentIndex] = child2;
      parentChildren[index210] = child;
      child.setDirty(DIRTY_CONST2.TRANSFORM);
      child2.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/Overlap.js
  function Overlap(source, ...targets) {
    const sourceBounds = source.bounds.get();
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      const targetBounds = target.bounds.get();
      if (RectangleToRectangle2(sourceBounds, targetBounds)) {
        return true;
      }
    }
    return false;
  }

  // node_modules/@phaserjs/phaser/display/RemoveChildren.js
  function RemoveChildren(parent, ...children) {
    children.forEach((child) => {
      RemoveChild5(parent, child);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/RemoveChildrenAt.js
  function RemoveChildrenAt(parent, ...index69) {
    const removed = [];
    index69.sort((a, b) => a - b);
    index69.reverse().forEach((i) => {
      const child = RemoveChildAt6(parent, i);
      if (child) {
        removed.push(child);
      }
    });
    return removed;
  }

  // node_modules/@phaserjs/phaser/display/ReparentChildren.js
  function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildrenBetween2(parent, beginIndex, endIndex);
    SetParent5(newParent, ...moved);
    moved.forEach((child) => {
      child.transform.updateWorld();
    });
    return moved;
  }

  // node_modules/@phaserjs/phaser/display/RotateChildrenLeft.js
  function RotateChildrenLeft(parent, total = 1) {
    const parentChildren = parent.children;
    let child = null;
    for (let i = 0; i < total; i++) {
      child = parentChildren.shift();
      parentChildren.push(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/RotateChildrenRight.js
  function RotateChildrenRight(parent, total = 1) {
    const parentChildren = parent.children;
    let child = null;
    for (let i = 0; i < total; i++) {
      child = parentChildren.pop();
      parentChildren.unshift(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/SendChildToBack.js
  function SendChildToBack(parent, child) {
    const parentChildren = parent.children;
    const currentIndex = GetChildIndex6(parent, child);
    if (currentIndex !== -1 && currentIndex > 0) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.unshift(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display/SetBounds.js
  function SetBounds(x, y, width, height, ...children) {
    children.forEach((child) => {
      child.bounds.set(x, y, width, height);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetChildrenValue.js
  function SetChildrenValue(parent, property, value) {
    const children = DepthFirstSearch5(parent);
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetName.js
  function SetName(name, ...children) {
    children.forEach((child) => {
      child.name = name;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetOrigin.js
  function SetOrigin(originX, originY, ...children) {
    children.forEach((child) => {
      child.setOrigin(originX, originY);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetPosition.js
  function SetPosition(x, y, ...children) {
    children.forEach((child) => {
      child.setPosition(x, y);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetRotation.js
  function SetRotation(rotation, ...children) {
    children.forEach((child) => {
      child.rotation = rotation;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetScale.js
  function SetScale(scaleX, scaleY, ...children) {
    children.forEach((child) => {
      child.setScale(scaleX, scaleY);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetSize.js
  function SetSize6(width, height, ...children) {
    children.forEach((child) => {
      child.setSize(width, height);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetSkew.js
  function SetSkew(skewX, skewY, ...children) {
    children.forEach((child) => {
      child.setSkew(skewX, skewY);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetType.js
  function SetType(type, ...children) {
    children.forEach((child) => {
      child.type = type;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetValue.js
  function SetValue(property, value, ...children) {
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SetVisible.js
  function SetVisible(visible, ...children) {
    children.forEach((child) => {
      child.visible = visible;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display/ShuffleChildren.js
  function ShuffleChildren(parent) {
    const children = parent.children;
    for (let i = children.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = children[i];
      children[i] = children[j];
      children[j] = temp;
      temp.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/display/SwapChildren.js
  function SwapChildren(child1, child2) {
    if (child1.parent === child2.parent) {
      const children = child1.parent.children;
      const index1 = GetChildIndex6(child1.parent, child1);
      const index210 = GetChildIndex6(child2.parent, child2);
      if (index1 !== index210) {
        children[index1] = child2;
        children[index210] = child1;
      }
    }
  }

  // node_modules/@phaserjs/phaser/index-ceef6b3b.js
  var index65 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AddChild,
    AddChildAt,
    AddChildren,
    AddChildrenAt,
    AddPosition,
    AddRotation,
    AddScale,
    AddSkew,
    BringChildToTop,
    ConsoleTreeChildren,
    CountMatchingChildren,
    DepthFirstSearch: DepthFirstSearch5,
    DepthFirstSearchRecursive,
    DepthFirstSearchRecursiveNested: DepthFirstSearchRecursiveNested2,
    DestroyChildren,
    FindChildByName,
    FindChildrenByName,
    GetAllChildren,
    GetChildAt,
    GetChildIndex: GetChildIndex6,
    GetChildren,
    GetClosestChild,
    GetFirstChild,
    GetFurthestChild,
    GetLastChild,
    GetParents,
    GetRandomChild,
    MoveChildDown,
    MoveChildTo,
    MoveChildUp,
    Overlap,
    RemoveChild: RemoveChild5,
    RemoveChildAt: RemoveChildAt6,
    RemoveChildren,
    RemoveChildrenAt,
    RemoveChildrenBetween: RemoveChildrenBetween2,
    ReparentChildren,
    RotateChildrenLeft,
    RotateChildrenRight,
    SendChildToBack,
    SetBounds,
    SetChildrenValue,
    SetName,
    SetOrigin,
    SetParent: SetParent5,
    SetPosition,
    SetRotation,
    SetScale,
    SetSize: SetSize6,
    SetSkew,
    SetType,
    SetValue,
    SetVisible,
    SetWorld: SetWorld7,
    ShuffleChildren,
    SwapChildren
  });

  // node_modules/@phaserjs/phaser/display3d/DepthFirstSearch3D.js
  function DepthFirstSearch3D5(parent) {
    const stack = [parent];
    const output = [];
    while (stack.length > 0) {
      const node = stack.shift();
      output.push(node);
      const numChildren = node.numChildren;
      if (numChildren > 0) {
        for (let i = numChildren - 1; i >= 0; i--) {
          stack.unshift(node.children[i]);
        }
      }
    }
    output.shift();
    return output;
  }

  // node_modules/@phaserjs/phaser/display3d/GetChild3DIndex.js
  function GetChild3DIndex5(parent, child) {
    return parent.children.indexOf(child);
  }

  // node_modules/@phaserjs/phaser/display3d/RemoveChild3DAt.js
  function RemoveChild3DAt6(parent, index69) {
    const children = parent.children;
    let child;
    if (index69 >= 0 && index69 < children.length) {
      const removed = children.splice(index69, 1);
      if (removed[0]) {
        child = removed[0];
        child.parent = null;
      }
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display3d/RemoveChild3D.js
  function RemoveChild3D5(parent, child) {
    const currentIndex = GetChild3DIndex5(parent, child);
    if (currentIndex > -1) {
      RemoveChild3DAt6(parent, currentIndex);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display3d/SetWorld3D.js
  function SetWorld3D8(world2, ...children) {
    children.forEach((child) => {
      if (child.world) {
        Emit2(child.world, RemovedFromWorldEvent9, child, child.world);
        Emit2(child, RemovedFromWorldEvent9, child, child.world);
      }
      child.world = world2;
      Emit2(world2, AddedToWorldEvent9, child, world2);
      Emit2(child, AddedToWorldEvent9, child, world2);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/SetParent3D.js
  function SetParent3D2(parent, ...children) {
    children.forEach((child) => {
      if (child.parent) {
        RemoveChild3D5(child.parent, child);
      }
      child.parent = parent;
    });
    const parentWorld = parent.world;
    if (parentWorld) {
      SetWorld3D8(parentWorld, ...DepthFirstSearch3D5(parent));
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/AddChild3D.js
  function AddChild3D(parent, child) {
    parent.children.push(child);
    SetParent3D2(parent, child);
    return child;
  }

  // node_modules/@phaserjs/phaser/display3d/AddChild3DAt.js
  function AddChild3DAt(parent, index69, child) {
    const children = parent.children;
    if (index69 >= 0 && index69 <= children.length) {
      SetParent3D2(parent, child);
      children.splice(index69, 0, child);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display3d/AddChildren3D.js
  function AddChildren3D(parent, ...children) {
    children.forEach((child) => {
      AddChild3D(parent, child);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/AddChildren3DAt.js
  function AddChildren3DAt(parent, index69, ...children) {
    const parentChildren = parent.children;
    if (index69 >= 0 && index69 <= parentChildren.length) {
      children.reverse().forEach((child) => {
        children.splice(index69, 0, child);
        SetParent3D2(parent, child);
      });
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/DepthFirstSearchRecursiveNested3D.js
  function DepthFirstSearchRecursiveNested3D2(parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const node = parent.children[i];
      const children = [];
      output.push({node, children});
      if (node.numChildren > 0) {
        DepthFirstSearchRecursiveNested3D2(node, children);
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/display3d/ConsoleTreeChildren3D.js
  function GetInfo(entry) {
    const legend = entry.numChildren > 0 ? "Parent" : "Child";
    return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
  }
  function LogChildren(entry) {
    console.group(GetInfo(entry.node));
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        LogChildren(child);
      } else {
        console.log(GetInfo(child.node));
      }
    });
    console.groupEnd();
  }
  function ConsoleTreeChildren3D(parent) {
    const entries = DepthFirstSearchRecursiveNested3D2(parent);
    if (parent.world === parent) {
      console.group("World");
    } else {
      console.group(GetInfo(parent));
    }
    entries.forEach((entry) => {
      if (entry.children.length) {
        LogChildren(entry);
      } else {
        console.log(GetInfo(entry.node));
      }
    });
    console.groupEnd();
  }

  // node_modules/@phaserjs/phaser/display3d/CountMatchingChildren3D.js
  function CountMatchingChildren3D(parent, property, value) {
    const children = parent.children;
    let total = 0;
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        total++;
      }
    });
    return total;
  }

  // node_modules/@phaserjs/phaser/display3d/DepthFirstSearchRecursive3D.js
  function DepthFirstSearchRecursive3D(parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const child = parent.children[i];
      output.push(child);
      if (child.numChildren > 0) {
        DepthFirstSearchRecursive3D(child, output);
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/display3d/RemoveChildren3DBetween.js
  function RemoveChildren3DBetween2(parent, beginIndex = 0, endIndex) {
    const children = parent.children;
    if (endIndex === void 0) {
      endIndex = children.length;
    }
    const range = endIndex - beginIndex;
    if (range > 0 && range <= endIndex) {
      const removed = children.splice(beginIndex, range);
      removed.forEach((child) => {
        child.parent = null;
      });
      return removed;
    } else {
      return [];
    }
  }

  // node_modules/@phaserjs/phaser/display3d/DestroyChildren3D.js
  function DestroyChildren3D(parent, beginIndex = 0, endIndex) {
    const removed = RemoveChildren3DBetween2(parent, beginIndex, endIndex);
    removed.forEach((child) => {
      child.destroy();
    });
  }

  // node_modules/@phaserjs/phaser/display3d/FindChild3DByName.js
  function FindChild3DByName(parent, searchString) {
    const children = DepthFirstSearch3D5(parent);
    const regex = RegExp(searchString);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (regex.test(child.name)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display3d/FindChildren3DByName.js
  function FindChildren3DByName(parent, searchString) {
    const children = DepthFirstSearch3D5(parent);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach((child) => {
      if (regex.test(child.name)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display3d/GetAllChildren3D.js
  function GetAllChildren3D(parent, property, value) {
    const children = DepthFirstSearch3D5(parent);
    if (!property) {
      return children;
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display3d/GetChild3DAt.js
  function GetChild3DAt(parent, index69) {
    const children = parent.children;
    if (index69 < 0 || index69 > children.length) {
      throw new Error(`Index out of bounds: ${index69}`);
    }
    return children[index69];
  }

  // node_modules/@phaserjs/phaser/display3d/GetChildren3D.js
  function GetChildren3D(parent, property, value) {
    const children = parent.children;
    if (!property) {
      return [...children];
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // node_modules/@phaserjs/phaser/display3d/GetFirstChild3D.js
  function GetFirstChild3D(parent, property, value) {
    const children = parent.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display3d/GetLastChild3D.js
  function GetLastChild3D(parent, property, value) {
    const children = parent.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // node_modules/@phaserjs/phaser/display3d/GetParents3D.js
  function GetParents3D(child) {
    const parents = [];
    while (child.parent) {
      parents.push(child.parent);
      child = child.parent;
    }
    return parents;
  }

  // node_modules/@phaserjs/phaser/display3d/GetRandomChild3D.js
  function GetRandomChild3D(parent, startIndex = 0, length) {
    const children = parent.children;
    if (!length) {
      length = children.length;
    }
    const randomIndex = startIndex + Math.floor(Math.random() * length);
    return children[randomIndex];
  }

  // node_modules/@phaserjs/phaser/display3d/MoveChild3DTo.js
  function MoveChild3DTo(parent, child, index69) {
    const parentChildren = parent.children;
    const currentIndex = GetChild3DIndex5(parent, child);
    if (currentIndex === -1 || index69 < 0 || index69 >= parentChildren.length) {
      throw new Error("Index out of bounds");
    }
    if (currentIndex !== index69) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.splice(index69, 0, child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // node_modules/@phaserjs/phaser/display3d/RemoveChildren3D.js
  function RemoveChildren3D(parent, ...children) {
    children.forEach((child) => {
      RemoveChild3D5(parent, child);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/RemoveChildren3DAt.js
  function RemoveChildren3DAt(parent, ...index69) {
    const removed = [];
    index69.sort((a, b) => a - b);
    index69.reverse().forEach((i) => {
      const child = RemoveChild3DAt6(parent, i);
      if (child) {
        removed.push(child);
      }
    });
    return removed;
  }

  // node_modules/@phaserjs/phaser/display3d/ReparentChildren3D.js
  function ReparentChildren3D(parent, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildren3DBetween2(parent, beginIndex, endIndex);
    SetParent3D2(newParent, ...moved);
    moved.forEach((child) => {
    });
    return moved;
  }

  // node_modules/@phaserjs/phaser/display3d/ReplaceChild3D.js
  function ReplaceChild3D(target, source) {
    const targetParent = target.parent;
    const sourceParent = source.parent;
    const targetIndex = GetChild3DIndex5(targetParent, target);
    if (targetParent === sourceParent) {
      MoveChild3DTo(targetParent, source, targetIndex);
      RemoveChild3D5(targetParent, target);
    } else {
      RemoveChild3D5(targetParent, target);
      RemoveChild3D5(sourceParent, source);
      AddChild3DAt(targetParent, targetIndex, source);
    }
    return target;
  }

  // node_modules/@phaserjs/phaser/display3d/SetChildren3DValue.js
  function SetChildren3DValue(parent, property, value) {
    const children = DepthFirstSearch3D5(parent);
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/display3d/SwapChildren3D.js
  function SwapChildren3D(child1, child2) {
    if (child1.parent === child2.parent) {
      const children = child1.parent.children;
      const index1 = GetChild3DIndex5(child1.parent, child1);
      const index210 = GetChild3DIndex5(child2.parent, child2);
      if (index1 !== index210) {
        children[index1] = child2;
        children[index210] = child1;
      }
    }
  }

  // node_modules/@phaserjs/phaser/index-5b48e731.js
  var index37 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AddChild3D,
    AddChild3DAt,
    AddChildren3D,
    AddChildren3DAt,
    ConsoleTreeChildren3D,
    CountMatchingChildren3D,
    DepthFirstSearch3D: DepthFirstSearch3D5,
    DepthFirstSearchRecursive3D,
    DepthFirstSearchRecursiveNested3D: DepthFirstSearchRecursiveNested3D2,
    DestroyChildren3D,
    FindChild3DByName,
    FindChildren3DByName,
    GetAllChildren3D,
    GetChild3DAt,
    GetChild3DIndex: GetChild3DIndex5,
    GetChildren3D,
    GetFirstChild3D,
    GetLastChild3D,
    GetParents3D,
    GetRandomChild3D,
    MoveChild3DTo,
    RemoveChild3D: RemoveChild3D5,
    RemoveChild3DAt: RemoveChild3DAt6,
    RemoveChildren3D,
    RemoveChildren3DAt,
    RemoveChildren3DBetween: RemoveChildren3DBetween2,
    ReparentChildren3D,
    ReplaceChild3D,
    SetChildren3DValue,
    SetParent3D: SetParent3D2,
    SetWorld3D: SetWorld3D8,
    SwapChildren3D
  });

  // node_modules/@phaserjs/phaser/dom/AddToDOM.js
  function AddToDOM2(element, parent) {
    const target = GetElement5(parent);
    target.appendChild(element);
    return element;
  }

  // node_modules/@phaserjs/phaser/dom/DOMContentLoaded.js
  function DOMContentLoaded2(callback) {
    const readyState = document.readyState;
    if (readyState === "complete" || readyState === "interactive") {
      callback();
      return;
    }
    const check = () => {
      document.removeEventListener("deviceready", check, true);
      document.removeEventListener("DOMContentLoaded", check, true);
      window.removeEventListener("load", check, true);
      callback();
    };
    if (!document.body) {
      window.setTimeout(check, 20);
    } else if (window.hasOwnProperty("cordova")) {
      document.addEventListener("deviceready", check, true);
    } else {
      document.addEventListener("DOMContentLoaded", check, true);
      window.addEventListener("load", check, true);
    }
  }

  // node_modules/@phaserjs/phaser/dom/ParseXML.js
  function ParseXML(data) {
    let xml;
    try {
      const parser = new DOMParser();
      xml = parser.parseFromString(data, "text/xml");
      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        return null;
      } else {
        return xml;
      }
    } catch (error) {
      return null;
    }
  }

  // node_modules/@phaserjs/phaser/dom/RemoveFromDOM.js
  function RemoveFromDOM(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  // node_modules/@phaserjs/phaser/index-37005551.js
  var index28 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AddToDOM: AddToDOM2,
    DOMContentLoaded: DOMContentLoaded2,
    GetElement: GetElement5,
    ParseXML,
    RemoveFromDOM
  });

  // node_modules/@phaserjs/phaser/events/ClearEvent.js
  function ClearEvent(emitter, event) {
    emitter.events.delete(event);
    return emitter;
  }

  // node_modules/@phaserjs/phaser/events/EventEmitter.js
  class EventEmitter2 {
    constructor() {
      this.events = new Map();
    }
  }

  // node_modules/@phaserjs/phaser/events/EventInstance.js
  class EventInstance2 {
    constructor(callback, context, once = false) {
      this.callback = callback;
      this.context = context;
      this.once = once;
    }
  }

  // node_modules/@phaserjs/phaser/events/GetEventNames.js
  function GetEventNames(emitter) {
    return [...emitter.events.keys()];
  }

  // node_modules/@phaserjs/phaser/events/GetListenerCount.js
  function GetListenerCount(emitter, event) {
    const listeners = emitter.events.get(event);
    return listeners ? listeners.size : 0;
  }

  // node_modules/@phaserjs/phaser/events/GetListeners.js
  function GetListeners(emitter, event) {
    const out = [];
    const listeners = emitter.events.get(event);
    listeners.forEach((listener) => {
      out.push(listener.callback);
    });
    return out;
  }

  // node_modules/@phaserjs/phaser/events/Off.js
  function Off(emitter, event, callback, context, once) {
    const events = emitter.events;
    const listeners = events.get(event);
    if (!callback) {
      events.delete(event);
    } else if (callback instanceof EventInstance2) {
      listeners.delete(callback);
    } else {
      const hasContext = !context;
      const hasOnce = once !== void 0;
      for (const listener of listeners) {
        if (listener.callback === callback && (hasContext && listener.context === context) && (hasOnce && listener.once === once)) {
          listeners.delete(listener);
        }
      }
    }
    if (listeners.size === 0) {
      events.delete(event);
    }
    return emitter;
  }

  // node_modules/@phaserjs/phaser/events/On.js
  function On2(emitter, event, callback, context = emitter, once = false) {
    if (typeof callback !== "function") {
      throw new TypeError("Listener not a function");
    }
    const listener = new EventInstance2(callback, context, once);
    const listeners = emitter.events.get(event);
    if (!listeners) {
      emitter.events.set(event, new Set([listener]));
    } else {
      listeners.add(listener);
    }
    return listener;
  }

  // node_modules/@phaserjs/phaser/events/Once.js
  function Once2(emitter, event, callback, context = emitter) {
    return On2(emitter, event, callback, context, true);
  }

  // node_modules/@phaserjs/phaser/events/RemoveAllListeners.js
  function RemoveAllListeners(emitter, event) {
    if (!event) {
      emitter.events.clear();
    } else {
      emitter.events.delete(event);
    }
  }

  // node_modules/@phaserjs/phaser/index-7fc2c799.js
  var index50 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ClearEvent,
    Emit: Emit2,
    EventEmitter: EventEmitter2,
    EventInstance: EventInstance2,
    GetEventNames,
    GetListenerCount,
    GetListeners,
    Off,
    On: On2,
    Once: Once2,
    RemoveAllListeners
  });

  // node_modules/@phaserjs/phaser/scenes/CreateSceneRenderData.js
  function CreateSceneRenderData3() {
    return {
      gameFrame: 0,
      numTotalFrames: 0,
      numDirtyFrames: 0,
      numDirtyCameras: 0,
      worldData: []
    };
  }

  // node_modules/@phaserjs/phaser/scenes/ResetSceneRenderData.js
  function ResetSceneRenderData3(renderData, gameFrame = 0) {
    renderData.gameFrame = gameFrame;
    renderData.numTotalFrames = 0;
    renderData.numDirtyFrames = 0;
    renderData.numDirtyCameras = 0;
    renderData.worldData.length = 0;
  }

  // node_modules/@phaserjs/phaser/scenes/SceneManagerInstance.js
  let instance3;
  const SceneManagerInstance4 = {
    get: () => {
      return instance3;
    },
    set: (manager) => {
      instance3 = manager;
    }
  };

  // node_modules/@phaserjs/phaser/scenes/SceneManager.js
  class SceneManager2 {
    constructor() {
      this.scenes = new Map();
      this.sceneIndex = 0;
      this.flush = false;
      this.renderResult = CreateSceneRenderData3();
      this.game = GameInstance2.get();
      SceneManagerInstance4.set(this);
      Once2(this.game, "boot", () => this.boot());
    }
    boot() {
      GetScenes2().forEach((scene) => new scene());
    }
    update(delta, time) {
      for (const scene of this.scenes.values()) {
        Emit2(scene, "update", delta, time);
      }
    }
    render(gameFrame) {
      const results = this.renderResult;
      ResetSceneRenderData3(results, gameFrame);
      for (const scene of this.scenes.values()) {
        Emit2(scene, "render", results);
      }
      if (this.flush) {
        results.numDirtyFrames++;
        this.flush = false;
      }
      return results;
    }
  }

  // node_modules/@phaserjs/phaser/textures/CreateCanvas.js
  function CreateCanvas5(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext("2d");
  }

  // node_modules/@phaserjs/phaser/textures/TextureManagerInstance.js
  let instance4;
  const TextureManagerInstance6 = {
    get: () => {
      return instance4;
    },
    set: (manager) => {
      instance4 = manager;
    }
  };

  // node_modules/@phaserjs/phaser/textures/TextureManager.js
  class TextureManager2 {
    constructor() {
      this.textures = new Map();
      this.createDefaultTextures();
      TextureManagerInstance6.set(this);
    }
    createDefaultTextures() {
      this.add("__BLANK", new Texture8(CreateCanvas5(32, 32).canvas));
      const missing = CreateCanvas5(32, 32);
      missing.strokeStyle = "#0f0";
      missing.moveTo(0, 0);
      missing.lineTo(32, 32);
      missing.stroke();
      missing.strokeRect(0.5, 0.5, 31, 31);
      this.add("__MISSING", new Texture8(missing.canvas));
      const white = CreateCanvas5(32, 32);
      white.fillStyle = "#fff";
      white.fillRect(0, 0, 32, 32);
      this.add("__WHITE", new Texture8(white.canvas));
    }
    get(key) {
      const textures = this.textures;
      if (textures.has(key)) {
        return textures.get(key);
      } else {
        return textures.get("__MISSING");
      }
    }
    has(key) {
      return this.textures.has(key);
    }
    add(key, source, glConfig) {
      let texture;
      const textures = this.textures;
      if (!textures.has(key)) {
        if (source instanceof Texture8) {
          texture = source;
        } else {
          texture = new Texture8(source, 0, 0, glConfig);
        }
        texture.key = key;
        textures.set(key, texture);
      }
      return texture;
    }
  }

  // node_modules/@phaserjs/phaser/Game.js
  class Game extends EventEmitter2 {
    constructor(...settings) {
      super();
      this.VERSION = "4.0.0-beta1";
      this.isBooted = false;
      this.isPaused = false;
      this.willUpdate = true;
      this.willRender = true;
      this.lastTick = 0;
      this.elapsed = 0;
      this.frame = 0;
      GameInstance2.set(this);
      SetConfigDefaults2();
      DOMContentLoaded2(() => this.boot(settings));
    }
    boot(settings) {
      settings.forEach((setting) => setting());
      const renderer = GetRenderer2();
      this.renderer = new renderer();
      this.textureManager = new TextureManager2();
      this.sceneManager = new SceneManager2();
      const parent = GetParent2();
      if (parent) {
        AddToDOM2(this.renderer.canvas, parent);
      }
      this.isBooted = true;
      GetBanner2();
      Emit2(this, "boot");
      this.lastTick = performance.now();
      this.step(this.lastTick);
    }
    pause() {
      this.isPaused = true;
    }
    resume() {
      this.isPaused = false;
      this.lastTick = performance.now();
    }
    step(time) {
      const delta = time - this.lastTick;
      this.lastTick = time;
      this.elapsed += delta;
      if (!this.isPaused) {
        if (this.willUpdate) {
          this.sceneManager.update(delta, time);
          Emit2(this, "update", delta, time);
        }
        if (this.willRender) {
          this.renderer.render(this.sceneManager.render(this.frame));
        }
      }
      this.frame++;
      GameInstance2.setFrame(this.frame);
      GameInstance2.setElapsed(this.elapsed);
      requestAnimationFrame((now) => this.step(now));
    }
    destroy() {
    }
  }

  // node_modules/@phaserjs/phaser/textures/GetFrames.js
  function GetFrames2(texture, frames) {
    const output = [];
    frames.forEach((key) => {
      output.push(texture.getFrame(key));
    });
    return output;
  }

  // node_modules/@phaserjs/phaser/textures/GetFramesInRange.js
  function GetFramesInRange2(texture, config2) {
    const {prefix = "", start = 0, zeroPad = 0, suffix = ""} = config2;
    let end = config2.end;
    const output = [];
    const diff = start < end ? 1 : -1;
    end += diff;
    for (let i = start; i !== end; i += diff) {
      const frameKey = prefix + i.toString().padStart(zeroPad, "0") + suffix;
      output.push(texture.getFrame(frameKey));
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/draw/BatchTexturedQuad.js
  function BatchTexturedQuad4(sprite, renderPass) {
    const {F32, U32, offset} = GetVertexBufferEntry10(renderPass, 1);
    const textureIndex = SetTexture6(renderPass, sprite.texture);
    let vertOffset = offset;
    sprite.vertices.forEach((vertex) => {
      F32[vertOffset + 0] = vertex.x;
      F32[vertOffset + 1] = vertex.y;
      F32[vertOffset + 2] = vertex.u;
      F32[vertOffset + 3] = vertex.v;
      F32[vertOffset + 4] = textureIndex;
      U32[vertOffset + 5] = vertex.color;
      vertOffset += 6;
    });
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/transform/GetVertices.js
  function GetVertices5(transform) {
    const {a, b, c, d, tx, ty} = transform.world;
    const {x, y, right, bottom} = transform.extent;
    const x0 = x * a + y * c + tx;
    const y0 = x * b + y * d + ty;
    const x1 = x * a + bottom * c + tx;
    const y1 = x * b + bottom * d + ty;
    const x2 = right * a + bottom * c + tx;
    const y2 = right * b + bottom * d + ty;
    const x3 = right * a + y * c + tx;
    const y3 = right * b + y * d + ty;
    return {x0, y0, x1, y1, x2, y2, x3, y3};
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/bounds/BoundsComponent.js
  class BoundsComponent3 {
    constructor(entity) {
      this.fixed = false;
      this.includeChildren = true;
      this.visibleOnly = true;
      this.entity = entity;
      this.area = new Rectangle2();
    }
    set(x, y, width, height) {
      this.area.set(x, y, width, height);
    }
    get() {
      if (this.entity.isDirty(DIRTY_CONST2.BOUNDS) && !this.fixed) {
        this.update();
      }
      return this.area;
    }
    updateLocal() {
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVertices5(this.entity.transform);
      const x = Math.min(x0, x1, x2, x3);
      const y = Math.min(y0, y1, y2, y3);
      const right = Math.max(x0, x1, x2, x3);
      const bottom = Math.max(y0, y1, y2, y3);
      return this.area.set(x, y, right - x, bottom - y);
    }
    update() {
      const bounds = this.updateLocal();
      this.entity.clearDirty(DIRTY_CONST2.BOUNDS);
      if (!this.includeChildren || !this.entity.numChildren) {
        return bounds;
      }
      const visibleOnly = this.visibleOnly;
      const children = this.entity.children;
      let x = bounds.x;
      let y = bounds.y;
      let right = bounds.right;
      let bottom = bounds.bottom;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!child || visibleOnly && !child.visible) {
          continue;
        }
        const childBounds = child.bounds.get();
        if (childBounds.x < x) {
          x = childBounds.x;
        }
        if (childBounds.y < y) {
          y = childBounds.y;
        }
        if (childBounds.right > right) {
          right = childBounds.right;
        }
        if (childBounds.bottom > bottom) {
          bottom = childBounds.bottom;
        }
      }
      return bounds.set(x, y, right - x, bottom - y);
    }
    destroy() {
      this.entity = null;
      this.area = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/input/InputComponent.js
  class InputComponent3 {
    constructor(entity) {
      this.enabled = false;
      this.enabledChildren = true;
      this.entity = entity;
    }
    destroy() {
      this.entity = null;
      this.hitArea = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/transform/UpdateLocalTransform.js
  function UpdateLocalTransform5(transform) {
    const local = transform.local;
    const x = transform.position.x;
    const y = transform.position.y;
    const rotation = transform.rotation;
    const scaleX = transform.scale.x;
    const scaleY = transform.scale.y;
    const skewX = transform.skew.x;
    const skewY = transform.skew.y;
    local.set(Math.cos(rotation + skewY) * scaleX, Math.sin(rotation + skewY) * scaleX, -Math.sin(rotation - skewX) * scaleY, Math.cos(rotation - skewX) * scaleY, x, y);
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/transform/UpdateWorldTransform.js
  function UpdateWorldTransform5(gameObject) {
    const parent = gameObject.parent;
    const transform = gameObject.transform;
    const lt = transform.local;
    const wt = transform.world;
    if (!parent) {
      CopyFrom6(lt, wt);
    } else if (transform.passthru) {
      CopyFrom6(parent.transform.world, wt);
    } else {
      const {a, b, c, d, tx, ty} = lt;
      const {a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty} = parent.transform.world;
      wt.set(a * pa + b * pc, a * pb + b * pd, c * pa + d * pc, c * pb + d * pd, tx * pa + ty * pc + ptx, tx * pb + ty * pd + pty);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/transform/TransformComponent.js
  class TransformComponent3 {
    constructor(entity, x = 0, y = 0) {
      this.passthru = false;
      this._rotation = 0;
      this.entity = entity;
      this.local = new Matrix2D2();
      this.world = new Matrix2D2();
      const update = () => this.update();
      const updateExtent = () => this.updateExtent();
      this.position = new Vec2Callback2(update, x, y);
      this.scale = new Vec2Callback2(update, 1, 1);
      this.skew = new Vec2Callback2(update);
      this.origin = new Vec2Callback2(updateExtent, GetDefaultOriginX(), GetDefaultOriginY());
      this.extent = new Rectangle2();
    }
    update() {
      this.updateLocal();
      this.updateWorld();
    }
    updateLocal() {
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      UpdateLocalTransform5(this);
    }
    updateWorld() {
      const entity = this.entity;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      UpdateWorldTransform5(entity);
      if (entity.numChildren) {
        this.updateChildren();
      }
    }
    updateChildren() {
      const children = this.entity.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.transform.updateWorld();
      }
    }
    globalToLocal(x, y, out = new Vec27()) {
      const {a, b, c, d, tx, ty} = this.world;
      const id = 1 / (a * d + c * -b);
      out.x = d * id * x + -c * id * y + (ty * c - tx * d) * id;
      out.y = a * id * y + -b * id * x + (-ty * a + tx * b) * id;
      return out;
    }
    localToGlobal(x, y, out = new Vec27()) {
      const {a, b, c, d, tx, ty} = this.world;
      out.x = a * x + c * y + tx;
      out.y = b * x + d * y + ty;
      return out;
    }
    setExtent(x, y, width, height) {
      this.extent.set(x, y, width, height);
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    updateExtent(width, height) {
      const extent = this.extent;
      const entity = this.entity;
      if (width !== void 0) {
        extent.width = width;
      }
      if (height !== void 0) {
        extent.height = height;
      }
      extent.x = -this.origin.x * extent.width;
      extent.y = -this.origin.y * extent.height;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    set rotation(value) {
      if (value !== this._rotation) {
        this._rotation = value;
        this.update();
      }
    }
    get rotation() {
      return this._rotation;
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.skew.destroy();
      this.origin.destroy();
      this.entity = null;
      this.local = null;
      this.world = null;
      this.position = null;
      this.scale = null;
      this.skew = null;
      this.origin = null;
      this.extent = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/GameObject.js
  class GameObject2 {
    constructor(x = 0, y = 0) {
      this.type = "GameObject";
      this.name = "";
      this.willUpdate = true;
      this.willUpdateChildren = true;
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = false;
      this.dirty = 0;
      this.dirtyFrame = 0;
      this.visible = true;
      this.children = [];
      this.events = new Map();
      this.transform = new TransformComponent3(this, x, y);
      this.bounds = new BoundsComponent3(this);
      this.input = new InputComponent3(this);
      this.dirty = DIRTY_CONST2.DEFAULT;
      this.transform.update();
    }
    isRenderable() {
      return this.visible && this.willRender;
    }
    isDirty(flag) {
      return (this.dirty & flag) !== 0;
    }
    clearDirty(flag) {
      if (this.isDirty(flag)) {
        this.dirty ^= flag;
      }
      return this;
    }
    setDirty(flag, flag2) {
      if (!this.isDirty(flag)) {
        this.dirty ^= flag;
        this.dirtyFrame = GameInstance2.getFrame();
      }
      if (!this.isDirty(flag2)) {
        this.dirty ^= flag2;
      }
      return this;
    }
    update(delta, time) {
      if (this.willUpdateChildren) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child && child.willUpdate) {
            child.update(delta, time);
          }
        }
      }
      this.postUpdate(delta, time);
    }
    postUpdate(delta, time) {
    }
    renderGL(renderPass) {
    }
    renderCanvas(renderer) {
    }
    postRenderGL(renderPass) {
    }
    postRenderCanvas(renderer) {
    }
    get numChildren() {
      return this.children.length;
    }
    destroy(reparentChildren) {
      if (reparentChildren) {
        ReparentChildren(this, reparentChildren);
      } else {
        DestroyChildren(this);
      }
      Emit2(this, DestroyEvent2, this);
      this.transform.destroy();
      this.bounds.destroy();
      this.input.destroy();
      this.events.clear();
      this.world = null;
      this.parent = null;
      this.children = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/container/Container.js
  class Container2 extends GameObject2 {
    constructor(x = 0, y = 0) {
      super(x, y);
      this._alpha = 1;
      this.type = "Container";
    }
    setSize(width, height = width) {
      this.transform.updateExtent(width, height);
      return this;
    }
    setPosition(x, y) {
      this.transform.position.set(x, y);
      return this;
    }
    setOrigin(x, y = x) {
      this.transform.origin.set(x, y);
      return this;
    }
    setSkew(x, y = x) {
      this.transform.skew.set(x, y);
      return this;
    }
    setScale(x, y = x) {
      this.transform.scale.set(x, y);
      return this;
    }
    setRotation(value) {
      this.transform.rotation = value;
      return this;
    }
    set width(value) {
      this.transform.updateExtent(value);
    }
    get width() {
      return this.transform.extent.width;
    }
    set height(value) {
      this.transform.updateExtent(void 0, value);
    }
    get height() {
      return this.transform.extent.height;
    }
    set x(value) {
      this.transform.position.x = value;
    }
    get x() {
      return this.transform.position.x;
    }
    set y(value) {
      this.transform.position.y = value;
    }
    get y() {
      return this.transform.position.y;
    }
    set originX(value) {
      this.transform.origin.x = value;
    }
    get originX() {
      return this.transform.origin.x;
    }
    set originY(value) {
      this.transform.origin.y = value;
    }
    get originY() {
      return this.transform.origin.y;
    }
    set skewX(value) {
      this.transform.skew.x = value;
    }
    get skewX() {
      return this.transform.skew.x;
    }
    set skewY(value) {
      this.transform.skew.y = value;
    }
    get skewY() {
      return this.transform.skew.y;
    }
    set scaleX(value) {
      this.transform.scale.x = value;
    }
    get scaleX() {
      return this.transform.scale.x;
    }
    set scaleY(value) {
      this.transform.scale.y = value;
    }
    get scaleY() {
      return this.transform.scale.y;
    }
    set rotation(value) {
      this.transform.rotation = value;
    }
    get rotation() {
      return this.transform.rotation;
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(value) {
      if (value !== this._alpha) {
        this._alpha = value;
        this.setDirty(DIRTY_CONST2.TRANSFORM);
      }
    }
  }

  // node_modules/@phaserjs/phaser/renderer/canvas/draw/DrawTexturedQuad.js
  function DrawTexturedQuad9(sprite, renderer) {
    const frame2 = sprite.frame;
    if (!frame2) {
      return;
    }
    const ctx = renderer.ctx;
    const transform = sprite.transform;
    const {a, b, c, d, tx, ty} = transform.world;
    const {x, y} = transform.extent;
    ctx.save();
    ctx.setTransform(a, b, c, d, tx, ty);
    ctx.globalAlpha = sprite.alpha;
    ctx.drawImage(frame2.texture.image, frame2.x, frame2.y, frame2.width, frame2.height, x, y, frame2.width, frame2.height);
    ctx.restore();
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/colors/PackColors.js
  function PackColors4(sprite) {
    sprite.vertices.forEach((vertex) => {
      vertex.packColor();
    });
    return sprite;
  }

  // node_modules/@phaserjs/phaser/gameobjects/sprite/SetFrame.js
  function SetFrame10(texture, key, ...children) {
    const frame2 = texture.getFrame(key);
    const {u0, u1, v0, v1, pivot} = frame2;
    children.forEach((child) => {
      if (!child || frame2 === child.frame) {
        return;
      }
      child.frame = frame2;
      if (pivot) {
        child.setOrigin(pivot.x, pivot.y);
      }
      child.frame.setExtent(child);
      child.hasTexture = true;
      const vertices = child.vertices;
      vertices[0].setUV(u0, v0);
      vertices[1].setUV(u0, v1);
      vertices[2].setUV(u1, v1);
      vertices[3].setUV(u1, v0);
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/gameobjects/sprite/SetTexture.js
  function SetTexture17(key, frame2, ...children) {
    if (!key) {
      children.forEach((child) => {
        child.texture = null;
        child.frame = null;
        child.hasTexture = false;
      });
    } else {
      let texture;
      if (key instanceof Texture8) {
        texture = key;
      } else {
        texture = TextureManagerInstance6.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        children.forEach((child) => {
          child.texture = texture;
        });
        SetFrame10(texture, frame2, ...children);
      }
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/gameobjects/sprite/UpdateVertices.js
  function UpdateVertices4(sprite) {
    const vertices = sprite.vertices;
    const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVertices5(sprite.transform);
    vertices[0].setPosition(x0, y0);
    vertices[1].setPosition(x1, y1);
    vertices[2].setPosition(x2, y2);
    vertices[3].setPosition(x3, y3);
    return sprite;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/colors/PackColor.js
  function PackColor2(rgb, alpha) {
    const ua = (alpha * 255 | 0) & 255;
    return (ua << 24 | rgb) >>> 0;
  }

  // node_modules/@phaserjs/phaser/gameobjects/components/Vertex.js
  class Vertex2 {
    constructor(x = 0, y = 0, z = 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.u = 0;
      this.v = 0;
      this.texture = 0;
      this.tint = 16777215;
      this.alpha = 1;
      this.color = 4294967295;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    setPosition(x, y, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    setUV(u, v) {
      this.u = u;
      this.v = v;
      return this;
    }
    setColor(color, alpha = 1) {
      this.tint = color;
      this.alpha = alpha;
      this.packColor();
      return this;
    }
    setAlpha(value) {
      this.alpha = value;
      return this;
    }
    setTint(value) {
      this.tint = value;
      return this;
    }
    packColor() {
      this.color = PackColor2(this.tint, this.alpha);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/sprite/Sprite.js
  class Sprite2 extends Container2 {
    constructor(x, y, texture, frame2) {
      super(x, y);
      this.hasTexture = false;
      this._tint = 16777215;
      this.type = "Sprite";
      this.vertices = [new Vertex2(), new Vertex2(), new Vertex2(), new Vertex2()];
      this.setTexture(texture, frame2);
    }
    setTexture(key, frame2) {
      SetTexture17(key, frame2, this);
      return this;
    }
    setFrame(key) {
      SetFrame10(this.texture, key, this);
      return this;
    }
    isRenderable() {
      return this.visible && this.willRender && this.hasTexture && this.alpha > 0;
    }
    preRender() {
      if (this.isDirty(DIRTY_CONST2.COLORS)) {
        PackColors4(this);
        this.clearDirty(DIRTY_CONST2.COLORS);
      }
      if (this.isDirty(DIRTY_CONST2.TRANSFORM)) {
        UpdateVertices4(this);
        this.clearDirty(DIRTY_CONST2.TRANSFORM);
      }
    }
    renderGL(renderPass) {
      this.preRender();
      BatchTexturedQuad4(this, renderPass);
    }
    renderCanvas(renderer) {
      this.preRender();
      DrawTexturedQuad9(this, renderer);
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(value) {
      if (value !== this._alpha) {
        this._alpha = value;
        this.vertices.forEach((vertex) => {
          vertex.setAlpha(value);
        });
        this.setDirty(DIRTY_CONST2.COLORS);
      }
    }
    get tint() {
      return this._tint;
    }
    set tint(value) {
      if (value !== this._tint) {
        this._tint = value;
        this.vertices.forEach((vertex) => {
          vertex.setTint(value);
        });
        this.setDirty(DIRTY_CONST2.COLORS);
      }
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.texture = null;
      this.frame = null;
      this.hasTexture = false;
      this.vertices = [];
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/animatedsprite/AnimatedSprite.js
  class AnimatedSprite extends Sprite2 {
    constructor(x, y, texture, frame2) {
      super(x, y, texture, frame2);
      this.type = "AnimatedSprite";
      this.anims = new Map();
      this.animData = {
        currentAnim: "",
        currentFrames: [],
        frameIndex: 0,
        animSpeed: 0,
        nextFrameTime: 0,
        repeatCount: 0,
        isPlaying: false,
        yoyo: false,
        pendingStart: false,
        playingForward: true,
        delay: 0,
        repeatDelay: 0,
        onStart: null,
        onRepeat: null,
        onComplete: null
      };
    }
    stop() {
      const data = this.animData;
      data.isPlaying = false;
      data.currentAnim = "";
      if (data.onComplete) {
        data.onComplete(this, data.currentAnim);
      }
    }
    nextFrame() {
      const data = this.animData;
      data.frameIndex++;
      if (data.frameIndex === data.currentFrames.length) {
        if (data.yoyo) {
          data.frameIndex--;
          data.playingForward = false;
        } else if (data.repeatCount === -1 || data.repeatCount > 0) {
          data.frameIndex = 0;
          if (data.repeatCount !== -1) {
            data.repeatCount--;
          }
          if (data.onRepeat) {
            data.onRepeat(this, data.currentAnim);
          }
          data.nextFrameTime += data.repeatDelay;
        } else {
          data.frameIndex--;
          return this.stop();
        }
      }
      this.setFrame(data.currentFrames[data.frameIndex]);
      data.nextFrameTime += data.animSpeed;
    }
    prevFrame() {
      const data = this.animData;
      data.frameIndex--;
      if (data.frameIndex === -1) {
        if (data.repeatCount === -1 || data.repeatCount > 0) {
          data.frameIndex = 0;
          data.playingForward = true;
          if (data.repeatCount !== -1) {
            data.repeatCount--;
          }
          if (data.onRepeat) {
            data.onRepeat(this, data.currentAnim);
          }
          data.nextFrameTime += data.repeatDelay;
        } else {
          data.frameIndex = 0;
          return this.stop();
        }
      }
      this.setFrame(data.currentFrames[data.frameIndex]);
      data.nextFrameTime += data.animSpeed;
    }
    update(delta, now) {
      super.update(delta, now);
      const data = this.animData;
      if (!data.isPlaying) {
        return;
      }
      data.nextFrameTime -= delta * 1e3;
      data.nextFrameTime = Math.max(data.nextFrameTime, 0);
      if (data.nextFrameTime === 0) {
        if (data.pendingStart) {
          if (data.onStart) {
            data.onStart(this, data.currentAnim);
          }
          data.pendingStart = false;
          data.nextFrameTime = data.animSpeed;
        } else if (data.playingForward) {
          this.nextFrame();
        } else {
          this.prevFrame();
        }
      }
    }
    get isPlaying() {
      return this.animData.isPlaying;
    }
    get isPlayingForward() {
      return this.animData.isPlaying && this.animData.playingForward;
    }
    get currentAnimation() {
      return this.animData.currentAnim;
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.anims.clear();
      this.animData = null;
    }
  }

  // node_modules/@phaserjs/phaser/index-55718145.js
  var index36 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BoundsComponent: BoundsComponent3
  });

  // node_modules/@phaserjs/phaser/index-90d2e37b.js
  var index56 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    InputComponent: InputComponent3
  });

  // node_modules/@phaserjs/phaser/index-87f3d285.js
  var index52 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetVertices: GetVertices5,
    TransformComponent: TransformComponent3,
    UpdateLocalTransform: UpdateLocalTransform5,
    UpdateWorldTransform: UpdateWorldTransform5
  });

  // node_modules/@phaserjs/phaser/index-935951b1.js
  var index = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Bounds: index36,
    Input: index56,
    Transform: index52,
    Vertex: Vertex2
  });

  // node_modules/@phaserjs/phaser/gameobjects/components/transform/GetVerticesFromValues.js
  function GetVerticesFromValues(left, right, top, bottom, x, y, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    const a = Math.cos(rotation + skewY) * scaleX;
    const b = Math.sin(rotation + skewY) * scaleX;
    const c = -Math.sin(rotation - skewX) * scaleY;
    const d = Math.cos(rotation - skewX) * scaleY;
    const x0 = left * a + top * c + x;
    const y0 = left * b + top * d + y;
    const x1 = left * a + bottom * c + x;
    const y1 = left * b + bottom * d + y;
    const x2 = right * a + bottom * c + x;
    const y2 = right * b + bottom * d + y;
    const x3 = right * a + top * c + x;
    const y3 = right * b + top * d + y;
    return {x0, y0, x1, y1, x2, y2, x3, y3};
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/draw/BatchSingleQuad.js
  function BatchSingleQuad6(renderPass, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
    const {F32, U32, offset} = GetVertexBufferEntry10(renderPass, 1);
    F32[offset + 0] = x;
    F32[offset + 1] = y;
    F32[offset + 2] = u0;
    F32[offset + 3] = v1;
    F32[offset + 4] = textureIndex;
    U32[offset + 5] = packedColor;
    F32[offset + 6] = x;
    F32[offset + 7] = y + height;
    F32[offset + 8] = u0;
    F32[offset + 9] = v0;
    F32[offset + 10] = textureIndex;
    U32[offset + 11] = packedColor;
    F32[offset + 12] = x + width;
    F32[offset + 13] = y + height;
    F32[offset + 14] = u1;
    F32[offset + 15] = v0;
    F32[offset + 16] = textureIndex;
    U32[offset + 17] = packedColor;
    F32[offset + 18] = x + width;
    F32[offset + 19] = y;
    F32[offset + 20] = u1;
    F32[offset + 21] = v1;
    F32[offset + 22] = textureIndex;
    U32[offset + 23] = packedColor;
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/draw/DrawTexturedQuad.js
  function DrawTexturedQuad2(renderPass, texture, shader) {
    if (!shader) {
      shader = renderPass.quadShader;
    }
    const {u0, v0, u1, v1} = texture.firstFrame;
    BindTexture7(texture, 0);
    SetVertexBuffer12(renderPass, renderPass.quadBuffer);
    SetShader7(renderPass, shader, 0);
    BatchSingleQuad6(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1, 0);
    Flush8(renderPass);
    PopVertexBuffer12(renderPass);
    PopShader7(renderPass);
    UnbindTexture7(renderPass);
  }

  // node_modules/@phaserjs/phaser/gameobjects/layer/Layer.js
  class Layer2 extends GameObject2 {
    constructor() {
      super();
      this.type = "Layer";
      this.transform.passthru = true;
      this.willRender = false;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/renderlayer/RenderLayer.js
  class RenderLayer2 extends Layer2 {
    constructor() {
      super();
      this.type = "RenderLayer";
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = true;
      this.setDirty(DIRTY_CONST2.CHILD_CACHE);
      const width = GetWidth3();
      const height = GetHeight3();
      const resolution = GetResolution3();
      const texture = new Texture8(null, width * resolution, height * resolution);
      const binding = new GLTextureBinding4(texture);
      texture.binding = binding;
      binding.framebuffer = CreateFramebuffer4(binding.texture);
      this.texture = texture;
      this.framebuffer = binding.framebuffer;
    }
    renderGL(renderPass) {
      if (this.numChildren > 0) {
        Flush8(renderPass);
        if (!this.willCacheChildren || this.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
          SetFramebuffer8(renderPass, this.framebuffer, true);
          this.clearDirty(DIRTY_CONST2.CHILD_CACHE);
        } else {
          SetFramebuffer8(renderPass, this.framebuffer, false);
          this.postRenderGL(renderPass);
        }
      }
    }
    postRenderGL(renderPass) {
      Flush8(renderPass);
      PopFramebuffer8(renderPass);
      DrawTexturedQuad2(renderPass, this.texture);
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/effectlayer/EffectLayer.js
  class EffectLayer extends RenderLayer2 {
    constructor(...shaders) {
      super();
      this.shaders = [];
      this.type = "EffectLayer";
      if (Array.isArray(shaders)) {
        this.shaders = shaders;
      }
    }
    postRenderGL(renderPass) {
      const shaders = this.shaders;
      const texture = this.texture;
      Flush8(renderPass);
      PopFramebuffer8(renderPass);
      if (shaders.length === 0) {
        DrawTexturedQuad2(renderPass, texture);
      } else {
        let prevTexture = texture;
        for (let i = 0; i < shaders.length; i++) {
          const shader = shaders[i];
          DrawTexturedQuad2(renderPass, prevTexture, shader);
          prevTexture = shader.texture;
        }
        DrawTexturedQuad2(renderPass, prevTexture);
      }
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects/spritebatch/SpriteBatch.js
  class SpriteBatch2 extends Layer2 {
    constructor(maxSize, texture) {
      super();
      this.glTextureIndex = 0;
      this.hasTexture = false;
      this.type = "SpriteBatch";
      this.willRender = true;
      this.setTexture(texture);
      this.setMaxSize(maxSize);
    }
    resetBuffers() {
      let ibo = [];
      for (let i = 0; i < this.maxSize * 4; i += 4) {
        ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
      }
      this.data = new ArrayBuffer(this.maxSize * 96);
      this.index = new Uint16Array(ibo);
      this.vertexViewF32 = new Float32Array(this.data);
      this.vertexViewU32 = new Uint32Array(this.data);
      if (gl) {
        DeleteFramebuffer8(this.vertexBuffer);
        DeleteFramebuffer8(this.indexBuffer);
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
      }
      ibo = [];
      this.count = 0;
    }
    setMaxSize(value) {
      this.maxSize = Clamp2(value, 0, 65535);
      this.resetBuffers();
      return this;
    }
    setTexture(key) {
      let texture;
      if (key instanceof Texture8) {
        texture = key;
      } else {
        texture = TextureManagerInstance6.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        this.texture = texture;
        this.hasTexture = true;
        this.glTextureIndex = -1;
      }
      return this;
    }
    isRenderable() {
      return this.visible && this.willRender && this.hasTexture && this.count > 0;
    }
    clear() {
      this.count = 0;
      return this;
    }
    addToBatch(frame2, color, x0, y0, x1, y1, x2, y2, x3, y3) {
      if (this.count >= this.maxSize) {
        console.warn("SpriteBatch full");
        return this;
      }
      const {u0, u1, v0, v1} = frame2;
      const F32 = this.vertexViewF32;
      const U32 = this.vertexViewU32;
      const offset = this.count * 24;
      const textureIndex = this.texture.binding ? this.texture.binding.index : 0;
      F32[offset + 0] = x0;
      F32[offset + 1] = y0;
      F32[offset + 2] = u0;
      F32[offset + 3] = v0;
      F32[offset + 4] = textureIndex;
      U32[offset + 5] = color;
      F32[offset + 6] = x1;
      F32[offset + 7] = y1;
      F32[offset + 8] = u0;
      F32[offset + 9] = v1;
      F32[offset + 10] = textureIndex;
      U32[offset + 11] = color;
      F32[offset + 12] = x2;
      F32[offset + 13] = y2;
      F32[offset + 14] = u1;
      F32[offset + 15] = v1;
      F32[offset + 16] = textureIndex;
      U32[offset + 17] = color;
      F32[offset + 18] = x3;
      F32[offset + 19] = y3;
      F32[offset + 20] = u1;
      F32[offset + 21] = v0;
      F32[offset + 22] = textureIndex;
      U32[offset + 23] = color;
      this.setDirty(DIRTY_CONST2.TRANSFORM);
      this.count++;
      return this;
    }
    add(config2) {
      const {frame: frame2 = null, x = 0, y = 0, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0, originX = 0, originY = 0, alpha = 1, tint = 16777215} = config2;
      const textureFrame = this.texture.getFrame(frame2);
      const {left, right, top, bottom} = textureFrame.getExtent(originX, originY);
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVerticesFromValues(left, right, top, bottom, x, y, rotation, scaleX, scaleY, skewX, skewY);
      const packedColor = PackColor2(tint, alpha);
      return this.addToBatch(textureFrame, packedColor, x0, y0, x1, y1, x2, y2, x3, y3);
    }
    addXY(x, y, frame2) {
      const textureFrame = this.texture.getFrame(frame2);
      const {left, right, top, bottom} = textureFrame.getExtent(0, 0);
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVerticesFromValues(left, right, top, bottom, x, y);
      return this.addToBatch(textureFrame, 4294967295, x0, y0, x1, y1, x2, y2, x3, y3);
    }
    updateTextureIndex() {
      const textureIndex = this.texture.binding.index;
      if (textureIndex === this.glTextureIndex) {
        return;
      }
      const F32 = this.vertexViewF32;
      this.glTextureIndex = textureIndex;
      for (let i = 0; i < this.count; i++) {
        F32[i * 24 + 4] = textureIndex;
        F32[i * 24 + 10] = textureIndex;
        F32[i * 24 + 16] = textureIndex;
        F32[i * 24 + 22] = textureIndex;
      }
    }
    renderGL(renderPass) {
    }
    destroy() {
      super.destroy();
      DeleteFramebuffer8(this.vertexBuffer);
      DeleteFramebuffer8(this.indexBuffer);
      this.data = null;
      this.vertexViewF32 = null;
      this.vertexViewU32 = null;
      this.index = null;
      this.texture = null;
      this.hasTexture = false;
    }
  }

  // node_modules/@phaserjs/phaser/textures/types/CanvasTexture.js
  function CanvasTexture3(width = 32, height = 32) {
    const ctx = CreateCanvas5(width, height);
    return new Texture8(ctx.canvas);
  }

  // node_modules/@phaserjs/phaser/gameobjects/text/Text.js
  class Text2 extends Sprite2 {
    constructor(x, y, text = "", font, fillStyle) {
      super(x, y, CanvasTexture3());
      this.splitRegExp = /(?:\r\n|\r|\n)/;
      this.padding = {left: 0, right: 0, top: 0, bottom: 0};
      this.verticalAlign = "ascent";
      this.lineSpacing = 0;
      this.font = "16px monospace";
      this.fillStyle = "#fff";
      this.strokeStyle = "";
      this.backgroundStyle = "";
      this.cornerRadius = 0;
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.lineWidth = 0;
      this.lineDash = [];
      this.antialias = false;
      this.type = "Text";
      const game = GameInstance2.get();
      this.resolution = game.renderer.resolution;
      this.canvas = this.texture.image;
      this.context = this.canvas.getContext("2d");
      if (font) {
        this.font = font;
      }
      if (fillStyle) {
        this.fillStyle = fillStyle;
      }
      this.setText(text);
    }
    syncContext(canvas, ctx) {
      if (this.preRenderCallback) {
        this.preRenderCallback(canvas, ctx);
      }
      ctx.font = this.font;
      ctx.textBaseline = this.textBaseline;
      ctx.textAlign = this.textAlign;
      ctx.fillStyle = this.fillStyle;
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.setLineDash(this.lineDash);
      ctx.imageSmoothingEnabled = this.antialias;
    }
    updateText() {
      const canvas = this.canvas;
      const ctx = this.context;
      const resolution = this.resolution;
      const lines = this._text.split(this.splitRegExp);
      const padding = this.padding;
      const fillStyle = this.fillStyle;
      const strokeStyle = this.strokeStyle;
      const strokeWidth = this.lineWidth;
      const lineSpacing = this.lineSpacing;
      const strokeWidthHalf = strokeWidth > 0 ? strokeWidth / 2 : 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.syncContext(canvas, ctx);
      ctx.textAlign = "start";
      let maxWidth = 0;
      let maxHeight = 0;
      let y = 0;
      const lineMetrics = [];
      const vAlignAscent = this.verticalAlign === "ascent";
      const metrics = ctx.measureText("|MÉq");
      const averageLineHeight = Math.ceil(Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent)) + strokeWidth;
      for (let i = 0; i < lines.length; i++) {
        const metrics2 = ctx.measureText(lines[i]);
        const left = metrics2.actualBoundingBoxLeft;
        const right = metrics2.actualBoundingBoxRight;
        let ascent = metrics2.actualBoundingBoxAscent;
        let descent = metrics2.actualBoundingBoxDescent;
        if (!ascent && !descent || lines[i] === "") {
          ascent = averageLineHeight;
          descent = 0;
        }
        const lineWidth = Math.ceil(Math.abs(left) + Math.abs(right)) + strokeWidth;
        const lineHeight = Math.ceil(Math.abs(ascent) + Math.abs(descent)) + strokeWidth;
        if (vAlignAscent) {
          y += ascent + strokeWidthHalf;
          if (i > 0) {
            y += lineSpacing + strokeWidthHalf;
          }
          maxHeight = y + descent + strokeWidthHalf;
        } else {
          y = maxHeight + (lineHeight - descent - strokeWidthHalf);
          maxHeight += lineHeight;
          if (i < lines.length - 1) {
            maxHeight += lineSpacing;
          }
        }
        maxWidth = Math.max(maxWidth, lineWidth);
        lineMetrics.push({lineWidth, lineHeight, ascent, descent, left, right, y});
      }
      maxWidth += padding.left + padding.right;
      maxHeight += padding.top + padding.bottom;
      const displayWidth = this.fixedWidth ? this.fixedWidth : maxWidth;
      const displayHeight = this.fixedHeight ? this.fixedHeight : maxHeight;
      const canvasWidth = Math.ceil(displayWidth * resolution);
      const canvasHeight = Math.ceil(displayHeight * resolution);
      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.texture.setSize(displayWidth, displayHeight);
        this.setSize(displayWidth, displayHeight);
      }
      ctx.save();
      ctx.scale(resolution, resolution);
      this.syncContext(canvas, ctx);
      const backgroundStyle = this.backgroundStyle;
      if (backgroundStyle) {
        ctx.save();
        ctx.fillStyle = backgroundStyle;
        ctx.strokeStyle = backgroundStyle;
        const cornerRadius = this.cornerRadius;
        const halfRadius = cornerRadius > 0 ? cornerRadius / 2 : 0;
        if (cornerRadius) {
          ctx.lineWidth = cornerRadius;
          ctx.strokeRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
        }
        ctx.fillRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
        ctx.restore();
      }
      const textAlign = this.textAlign;
      const isCenter = textAlign === "center";
      const isRight = textAlign === "right" || textAlign === "end";
      const yOffset = (displayHeight - maxHeight) / 2 + padding.top;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const metrics2 = lineMetrics[i];
        let tx = padding.left + metrics2.left + strokeWidthHalf;
        const ty = yOffset + metrics2.y;
        if (isCenter) {
          tx = displayWidth / 2;
        } else if (isRight) {
          tx = displayWidth - strokeWidthHalf;
        }
        if (strokeStyle) {
          ctx.strokeText(line, tx, ty);
        }
        if (fillStyle) {
          ctx.fillText(line, tx, ty);
        }
      }
      ctx.restore();
      if (this.texture.binding) {
        this.texture.binding.update();
      }
      this.setDirty(DIRTY_CONST2.TEXTURE);
      return this;
    }
    get text() {
      return this._text;
    }
    set text(value) {
      this.setText(value);
    }
    setText(value = "") {
      if (Array.isArray(value)) {
        value = value.join("\n");
      }
      if (value !== this._text) {
        this._text = value.toString();
        this.updateText();
      }
      return this;
    }
    destroy(reparentChildren) {
      this.texture.destroy();
      this.fillStyle = null;
      this.strokeStyle = null;
      this.backgroundStyle = null;
      this.canvas = null;
      this.context = null;
      super.destroy(reparentChildren);
    }
  }

  // node_modules/@phaserjs/phaser/index-efaa8246.js
  var index68 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AnimatedSprite,
    Components: index,
    Container: Container2,
    EffectLayer,
    Layer: Layer2,
    RenderLayer: RenderLayer2,
    GameObject: GameObject2,
    Sprite: Sprite2,
    SpriteBatch: SpriteBatch2,
    Text: Text2
  });

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/CreateVertexSet.js
  function CreateVertexSet3() {
    return {
      vertices: [],
      normals: [],
      uvs: [],
      indices: [],
      numberOfVertices: 0
    };
  }

  // node_modules/@phaserjs/phaser/geom3d/PlaneGeometry.js
  function PlaneGeometry3(data, x = 0, y = 0, z = 0, u = 0, v = 1, w = 2, udir = 1, vdir = -1, width = 1, height = 1, depth = 1, gridX = 1, gridY = 1) {
    if (!data) {
      data = CreateVertexSet3();
    }
    const {vertices, normals, uvs, indices, numberOfVertices} = data;
    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;
    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    let vertexCounter = 0;
    const vector = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const by = iy * segmentHeight - heightHalf;
      for (let ix = 0; ix < gridX1; ix++) {
        const bx = ix * segmentWidth - widthHalf;
        vector[u] = bx * udir;
        vector[v] = by * vdir;
        vector[w] = depthHalf;
        vertices.push(x + vector[0], y + vector[1], z + vector[2]);
        vector[u] = 0;
        vector[v] = 0;
        vector[w] = depth > 0 ? 1 : -1;
        normals.push(vector[0], vector[1], vector[2]);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
        vertexCounter += 1;
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = numberOfVertices + ix + gridX1 * iy;
        const b = numberOfVertices + ix + gridX1 * (iy + 1);
        const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
        const d = numberOfVertices + (ix + 1) + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    data.numberOfVertices += vertexCounter;
    return data;
  }

  // node_modules/@phaserjs/phaser/geom3d/BoxGeometry.js
  function BoxGeometry2(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    const data = CreateVertexSet3();
    PlaneGeometry3(data, x, y, z, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments);
    PlaneGeometry3(data, x, y, z, 2, 1, 0, 1, -1, depth, height, -width, depthSegments, heightSegments);
    PlaneGeometry3(data, x, y, z, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments);
    PlaneGeometry3(data, x, y, z, 0, 2, 1, 1, -1, width, depth, -height, widthSegments, depthSegments);
    PlaneGeometry3(data, x, y, z, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments);
    PlaneGeometry3(data, x, y, z, 0, 1, 2, -1, -1, width, height, -depth, widthSegments, heightSegments);
    return data;
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/GetBufferFromVertexSet.js
  function GetVec3(data, index69) {
    const x = data[index69 * 3 + 0];
    const y = data[index69 * 3 + 1];
    const z = data[index69 * 3 + 2];
    return [x, y, z];
  }
  function GetVec2(data, index69) {
    const x = data[index69 * 2 + 0];
    const y = data[index69 * 2 + 1];
    return [x, y];
  }
  function CreateNonIndexedVertexBuffer(data) {
    const {vertices, normals, uvs} = data;
    const total = vertices.length;
    const count = total / 3;
    const batchSize = count / 3;
    const buffer = new VertexBuffer7({batchSize, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
    const F32 = buffer.vertexViewF32;
    let offset = 0;
    let uvIndex = 0;
    for (let i = 0; i < total; i += 3) {
      F32[offset++] = vertices[i + 0];
      F32[offset++] = vertices[i + 1];
      F32[offset++] = vertices[i + 2];
      F32[offset++] = normals[i + 0];
      F32[offset++] = normals[i + 1];
      F32[offset++] = normals[i + 2];
      F32[offset++] = uvs[uvIndex + 0];
      F32[offset++] = uvs[uvIndex + 1];
      uvIndex += 2;
    }
    buffer.count = count;
    return buffer;
  }
  function CreateVertexBuffer(data) {
    const {vertices, normals, uvs, indices} = data;
    const buffer = new VertexBuffer7({batchSize: indices.length / 3, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
    const F32 = buffer.vertexViewF32;
    let offset = 0;
    for (let i = 0; i < indices.length; i += 3) {
      const i1 = indices[i + 0];
      const i2 = indices[i + 1];
      const i3 = indices[i + 2];
      const v1 = GetVec3(vertices, i1);
      const v2 = GetVec3(vertices, i2);
      const v3 = GetVec3(vertices, i3);
      const n1 = GetVec3(normals, i1);
      const n2 = GetVec3(normals, i2);
      const n3 = GetVec3(normals, i3);
      const uv1 = GetVec2(uvs, i1);
      const uv2 = GetVec2(uvs, i2);
      const uv3 = GetVec2(uvs, i3);
      F32[offset++] = v1[0];
      F32[offset++] = v1[1];
      F32[offset++] = v1[2];
      F32[offset++] = n1[0];
      F32[offset++] = n1[1];
      F32[offset++] = n1[2];
      F32[offset++] = uv1[0];
      F32[offset++] = uv1[1];
      F32[offset++] = v2[0];
      F32[offset++] = v2[1];
      F32[offset++] = v2[2];
      F32[offset++] = n2[0];
      F32[offset++] = n2[1];
      F32[offset++] = n2[2];
      F32[offset++] = uv2[0];
      F32[offset++] = uv2[1];
      F32[offset++] = v3[0];
      F32[offset++] = v3[1];
      F32[offset++] = v3[2];
      F32[offset++] = n3[0];
      F32[offset++] = n3[1];
      F32[offset++] = n3[2];
      F32[offset++] = uv3[0];
      F32[offset++] = uv3[1];
    }
    buffer.count = indices.length;
    return buffer;
  }
  function GetBufferFromVertexSet4(data) {
    if (data.indices && data.indices.length > 0) {
      return CreateVertexBuffer(data);
    } else {
      return CreateNonIndexedVertexBuffer(data);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/Geometry.js
  class Geometry2 {
    constructor(data) {
      if (data) {
        if (data.hasOwnProperty("vertices")) {
          this.buffer = GetBufferFromVertexSet4(data);
        } else {
          this.buffer = data;
        }
      }
    }
    destroy() {
      this.buffer.destroy();
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/components/transform3d/Transform3DComponent.js
  class Transform3DComponent2 {
    constructor(entity, x = 0, y = 0, z = 0) {
      this.passthru = false;
      this.entity = entity;
      this.local = new Matrix42();
      this.world = new Matrix42();
      this.normal = new Matrix42();
      this.position = new Vec3Callback2(() => this.update(), x, y, z);
      this.scale = new Vec3Callback2(() => this.update(), 1, 1, 1);
      this.origin = new Vec3Callback2(() => this.update());
      this.rotation = new Quaternion2();
      this.rotation.onChange = () => this.update();
      this.forward = Forward3();
      this.up = Up2();
      this.right = Right3();
      this.update();
    }
    rotateX(angle) {
      RotateX4(this.rotation, angle, this.rotation);
    }
    rotateY(angle) {
      RotateY4(this.rotation, angle, this.rotation);
    }
    rotateZ(angle) {
      RotateZ4(this.rotation, angle, this.rotation);
    }
    update() {
      const model = this.local;
      const normal = this.normal;
      FromRotationTranslationScale4(this.rotation, this.position, this.scale, model);
      Invert3(model, normal);
      Transpose4(normal, normal);
    }
    updateLocal() {
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    updateWorld() {
      const entity = this.entity;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      if (entity.numChildren) {
        this.updateChildren();
      }
    }
    updateChildren() {
      const children = this.entity.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
      }
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.origin.destroy();
      this.rotation.destroy();
      this.entity = null;
      this.local = null;
      this.world = null;
      this.position = null;
      this.scale = null;
      this.origin = null;
      this.rotation = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/GameObject3D.js
  class GameObject3D {
    constructor(x = 0, y = 0, z = 0) {
      this.type = "GameObject3D";
      this.name = "";
      this.willUpdate = true;
      this.willUpdateChildren = true;
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = false;
      this.dirty = 0;
      this.dirtyFrame = 0;
      this.visible = true;
      this.children = [];
      this.events = new Map();
      this.transform = new Transform3DComponent2(this, x, y, z);
      this.dirty = DIRTY_CONST2.DEFAULT;
    }
    isRenderable() {
      return this.visible && this.willRender;
    }
    isDirty(flag) {
      return (this.dirty & flag) !== 0;
    }
    clearDirty(flag) {
      if (this.isDirty(flag)) {
        this.dirty ^= flag;
      }
      return this;
    }
    setDirty(flag, flag2) {
      if (!this.isDirty(flag)) {
        this.dirty ^= flag;
        this.dirtyFrame = GameInstance2.getFrame();
      }
      if (!this.isDirty(flag2)) {
        this.dirty ^= flag2;
      }
      return this;
    }
    update(delta, time) {
      if (this.willUpdateChildren) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child && child.willUpdate) {
            child.update(delta, time);
          }
        }
      }
      this.postUpdate(delta, time);
    }
    postUpdate(delta, time) {
    }
    renderGL(renderPass) {
    }
    postRenderGL(renderPass) {
    }
    get numChildren() {
      return this.children.length;
    }
    destroy(reparentChildren) {
      Emit2(this, DestroyEvent2, this);
      this.transform.destroy();
      this.events.clear();
      this.world = null;
      this.parent = null;
      this.children = null;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/material/Material.js
  class Material3 {
    constructor(config2 = {}) {
      this.isDirty = false;
      const {ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1], shine = 0.25} = config2;
      const onChange = () => this.update();
      this.ambient = new RGBCallback4(onChange).fromArray(ambient);
      this.diffuse = new RGBCallback4(onChange).fromArray(diffuse);
      this.specular = new RGBCallback4(onChange).fromArray(specular);
      this._shine = shine;
    }
    get shine() {
      return this._shine;
    }
    set shine(value) {
      this._shine = Clamp2(value, 0, 1);
      this.isDirty = true;
    }
    update() {
      this.isDirty = true;
    }
    setUniforms(shader) {
      shader.setUniform("uMaterialAmbient", this.ambient.toArray());
      shader.setUniform("uMaterialDiffuse", this.diffuse.toArray());
      shader.setUniform("uMaterialSpecular", this.specular.toArray());
      shader.setUniform("uMaterialShine", this._shine * 256);
    }
    destroy() {
      this.ambient.destroy();
      this.diffuse.destroy();
      this.specular.destroy();
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/mesh/SetFrame.js
  function SetFrame4(texture, key, ...children) {
    const frame2 = texture.getFrame(key);
    children.forEach((child) => {
      if (!child || frame2 === child.frame) {
        return;
      }
      child.frame = frame2;
      child.hasTexture = true;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/mesh/SetTexture.js
  function SetTexture8(key, frame2, ...children) {
    if (!key) {
      children.forEach((child) => {
        child.texture = null;
        child.frame = null;
        child.hasTexture = false;
      });
    } else {
      let texture;
      if (key instanceof Texture8) {
        texture = key;
      } else {
        texture = TextureManagerInstance6.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        children.forEach((child) => {
          child.texture = texture;
        });
        SetFrame4(texture, frame2, ...children);
      }
    }
    return children;
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/mesh/Mesh.js
  class Mesh2 extends GameObject3D {
    constructor(x = 0, y = 0, z = 0, geometry, material = new Material3()) {
      super(x, y, z);
      this.hasTexture = false;
      this.cullFaces = true;
      this.geometry = geometry;
      this.material = material;
      this.setTexture("__WHITE");
    }
    setTexture(key, frame2) {
      SetTexture8(key, frame2, this);
      return this;
    }
    setFrame(key) {
      SetFrame4(this.texture, key, this);
      return this;
    }
    setMaterial(material) {
      this.material = material;
      return this;
    }
    renderGL(renderPass) {
      const shader = renderPass.currentShader.shader;
      shader.setUniform("uModelMatrix", this.transform.local.data);
      shader.setUniform("uNormalMatrix", this.transform.normal.data);
      if (this.hasTexture) {
        const textureIndex = SetTexture6(renderPass, this.texture);
        shader.setUniform("uTexture", textureIndex);
      }
      this.material.setUniforms(shader);
      FlushBuffer4(renderPass, this.geometry.buffer);
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.geometry = null;
      this.material = null;
      this.texture = null;
      this.frame = null;
      this.hasTexture = false;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/box/Box.js
  class Box extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
      const data = BoxGeometry2(0, 0, 0, width, height, depth, widthSegments, heightSegments, depthSegments);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // node_modules/@phaserjs/phaser/index-23a1f6f6.js
  var index23 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Transform3DComponent: Transform3DComponent2
  });

  // node_modules/@phaserjs/phaser/geom3d/CylinderGeometry.js
  function GenerateCap(top, data, index69, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength) {
    const {vertices, normals, uvs, indices} = data;
    const uv = new Vec27();
    const vertex = new Vec32();
    const radius = top === true ? radiusTop : radiusBottom;
    const sign = top === true ? 1 : -1;
    const centerIndexStart = index69;
    for (let x = 1; x <= radialSegments; x++) {
      vertices.push(0, halfHeight * sign, 0);
      normals.push(0, sign, 0);
      uvs.push(0.5, 0.5);
      index69++;
    }
    const centerIndexEnd = index69;
    for (let x = 0; x <= radialSegments; x++) {
      const u = x / radialSegments;
      const theta = u * thetaLength + thetaStart;
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      vertex.x = radius * sinTheta;
      vertex.y = halfHeight * sign;
      vertex.z = radius * cosTheta;
      vertices.push(vertex.x, vertex.y, vertex.z);
      normals.push(0, sign, 0);
      uv.x = cosTheta * 0.5 + 0.5;
      uv.y = sinTheta * 0.5 * sign + 0.5;
      uvs.push(uv.x, uv.y);
      index69++;
    }
    for (let x = 0; x < radialSegments; x++) {
      const c = centerIndexStart + x;
      const i = centerIndexEnd + x;
      if (top) {
        indices.push(i, i + 1, c);
      } else {
        indices.push(i + 1, i, c);
      }
    }
    return index69;
  }
  function CylinderGeometry3(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    const data = CreateVertexSet3();
    const {vertices, normals, uvs, indices} = data;
    let index69 = 0;
    const indexArray = [];
    const halfHeight = height / 2;
    const normal = new Vec32();
    const vertex = new Vec32();
    const slope = (radiusBottom - radiusTop) / height;
    for (let y = 0; y <= heightSegments; y++) {
      const indexRow = [];
      const v = y / heightSegments;
      const radius = v * (radiusBottom - radiusTop) + radiusTop;
      for (let x = 0; x <= radialSegments; x++) {
        const u = x / radialSegments;
        const theta = u * thetaLength + thetaStart;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        vertex.x = radius * sinTheta;
        vertex.y = -v * height + halfHeight;
        vertex.z = radius * cosTheta;
        vertices.push(vertex.x, vertex.y, vertex.z);
        normal.set(sinTheta, slope, cosTheta);
        Normalize2(normal, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(u, 1 - v);
        indexRow.push(index69++);
      }
      indexArray.push(indexRow);
    }
    for (let x = 0; x < radialSegments; x++) {
      for (let y = 0; y < heightSegments; y++) {
        const a = indexArray[y][x];
        const b = indexArray[y + 1][x];
        const c = indexArray[y + 1][x + 1];
        const d = indexArray[y][x + 1];
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    if (!openEnded) {
      if (radiusTop > 0) {
        index69 = GenerateCap(true, data, index69, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength);
      }
      if (radiusBottom > 0) {
        GenerateCap(false, data, index69, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength);
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // node_modules/@phaserjs/phaser/geom3d/ConeGeometry.js
  function ConeGeometry2(radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    return CylinderGeometry3(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/cone/Cone.js
  class Cone extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
      const data = ConeGeometry2(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // node_modules/@phaserjs/phaser/index-0f127f65.js
  var index16 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CreateFramebuffer: CreateFramebuffer4,
    CreateGLTexture: CreateGLTexture8,
    DeleteFramebuffer: DeleteFramebuffer8,
    DeleteGLBuffer: DeleteGLBuffer11,
    DeleteGLTexture: DeleteGLTexture8,
    GL: GL20,
    PackColor: PackColor2,
    PackColors: PackColors4,
    SetGLTextureFilterMode: SetGLTextureFilterMode8,
    UpdateGLTexture: UpdateGLTexture8,
    WebGLRenderer: WebGLRenderer3
  });

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/FaceUVNormalTexture.js
  class FaceUVNormalTexture {
    constructor(v1, v2, v3, n1, n2, n3, uv1, uv2, uv3, scale = 1) {
      this.color = 16777215;
      this.alpha = 1;
      this.size = 30;
      this.vertex1 = new Vertex2(v1.x * scale, v1.y * scale, v1.z * scale);
      this.vertex2 = new Vertex2(v2.x * scale, v2.y * scale, v2.z * scale);
      this.vertex3 = new Vertex2(v3.x * scale, v3.y * scale, v3.z * scale);
      this.vertex1.setUV(uv1.x, uv1.y);
      this.vertex2.setUV(uv2.x, uv2.y);
      this.vertex3.setUV(uv3.x, uv3.y);
      this.normal1 = n1;
      this.normal2 = n2;
      this.normal3 = n3;
      this._packedColor = PackColor2(this.color, this.alpha);
    }
    setColor(color, alpha = 1) {
      this.color = color;
      this.alpha = alpha;
      this._packedColor = PackColor2(color, alpha);
    }
    addToBuffer(F32, U32, textureID, offset) {
      const v1 = this.vertex1;
      const v2 = this.vertex2;
      const v3 = this.vertex3;
      const n1 = this.normal1;
      const n2 = this.normal2;
      const n3 = this.normal3;
      const color = this._packedColor;
      F32[offset++] = v1.x;
      F32[offset++] = v1.y;
      F32[offset++] = v1.z;
      F32[offset++] = n1.x;
      F32[offset++] = n1.y;
      F32[offset++] = n1.z;
      F32[offset++] = v1.u;
      F32[offset++] = v1.v;
      F32[offset++] = textureID;
      U32[offset++] = color;
      F32[offset++] = v2.x;
      F32[offset++] = v2.y;
      F32[offset++] = v2.z;
      F32[offset++] = n2.x;
      F32[offset++] = n2.y;
      F32[offset++] = n2.z;
      F32[offset++] = v2.u;
      F32[offset++] = v2.v;
      F32[offset++] = textureID;
      U32[offset++] = color;
      F32[offset++] = v3.x;
      F32[offset++] = v3.y;
      F32[offset++] = v3.z;
      F32[offset++] = n3.x;
      F32[offset++] = n3.y;
      F32[offset++] = n3.z;
      F32[offset++] = v3.u;
      F32[offset++] = v3.v;
      F32[offset++] = textureID;
      U32[offset++] = color;
      return offset;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/ParseObj.js
  class ParseObj2 {
    constructor(fileContents, flipUVs = true, defaultModelName = "untitled") {
      this.currentMaterial = "";
      this.currentGroup = "";
      this.smoothingGroup = 0;
      this.result = {
        materialLibraries: [],
        models: []
      };
      this.fileContents = fileContents;
      this.defaultModelName = defaultModelName;
      this.flipUVs = flipUVs;
    }
    parseAsync() {
      return new Promise((resolve, reject) => {
        try {
          resolve(this.parse());
        } catch (theError) {
          reject(theError);
        }
      });
    }
    parse() {
      const stripComments = (line) => {
        const commentIndex = line.indexOf("#");
        if (commentIndex > -1) {
          return line.substring(0, commentIndex);
        }
        return line;
      };
      const lines = this.fileContents.split("\n");
      for (const line of lines) {
        const strippedline = stripComments(line);
        const lineItems = strippedline.replace(/\s\s+/g, " ").trim().split(" ");
        switch (lineItems[0].toLowerCase()) {
          case "o":
            this.parseObject(lineItems);
            break;
          case "g":
            this.parseGroup(lineItems);
            break;
          case "v":
            this.parseVertexCoords(lineItems);
            break;
          case "vt":
            this.parseTextureCoords(lineItems);
            break;
          case "vn":
            this.parseVertexNormal(lineItems);
            break;
          case "s":
            this.parseSmoothShadingStatement(lineItems);
            break;
          case "f":
            this.parsePolygon(lineItems);
            break;
          case "mtllib":
            this.parseMtlLib(lineItems);
            break;
          case "usemtl":
            this.parseUseMtl(lineItems);
            break;
        }
      }
      this.fileContents = "";
      return this.result;
    }
    currentModel() {
      if (this.result.models.length === 0) {
        this.result.models.push({
          faces: [],
          name: this.defaultModelName,
          textureCoords: [],
          vertexNormals: [],
          vertices: []
        });
        this.currentGroup = "";
        this.smoothingGroup = 0;
      }
      return this.result.models[this.result.models.length - 1];
    }
    parseObject(lineItems) {
      const modelName = lineItems.length >= 2 ? lineItems[1] : this.defaultModelName;
      this.result.models.push({
        faces: [],
        name: modelName,
        textureCoords: [],
        vertexNormals: [],
        vertices: []
      });
      this.currentGroup = "";
      this.smoothingGroup = 0;
    }
    parseGroup(lineItems) {
      if (lineItems.length !== 2) {
        throw "Group statements must have exactly 1 argument (eg. g group_1)";
      }
      this.currentGroup = lineItems[1];
    }
    parseVertexCoords(lineItems) {
      const len = lineItems.length;
      const x = len >= 2 ? parseFloat(lineItems[1]) : 0;
      const y = len >= 3 ? parseFloat(lineItems[2]) : 0;
      const z = len >= 4 ? parseFloat(lineItems[3]) : 0;
      this.currentModel().vertices.push({x, y, z});
    }
    parseTextureCoords(lineItems) {
      const len = lineItems.length;
      let u = len >= 2 ? parseFloat(lineItems[1]) : 0;
      let v = len >= 3 ? parseFloat(lineItems[2]) : 0;
      let w = len >= 4 ? parseFloat(lineItems[3]) : 0;
      if (isNaN(u)) {
        u = 0;
      }
      if (isNaN(v)) {
        v = 0;
      }
      if (isNaN(w)) {
        w = 0;
      }
      if (this.flipUVs) {
        v = 1 - v;
      }
      this.currentModel().textureCoords.push({u, v, w});
    }
    parseVertexNormal(lineItems) {
      const len = lineItems.length;
      const x = len >= 2 ? parseFloat(lineItems[1]) : 0;
      const y = len >= 3 ? parseFloat(lineItems[2]) : 0;
      const z = len >= 4 ? parseFloat(lineItems[3]) : 0;
      this.currentModel().vertexNormals.push({x, y, z});
    }
    parsePolygon(lineItems) {
      const totalVertices = lineItems.length - 1;
      if (totalVertices < 3) {
        throw "Face < 3 vertices";
      }
      const face = {
        group: this.currentGroup,
        material: this.currentMaterial,
        smoothingGroup: this.smoothingGroup,
        vertices: []
      };
      for (let i = 0; i < totalVertices; i++) {
        const vertexString = lineItems[i + 1];
        const vertexValues = vertexString.split("/");
        const vvLen = vertexValues.length;
        if (vvLen < 1 || vvLen > 3) {
          throw "Too many / values for single vertex";
        }
        let vertexIndex = 0;
        let textureCoordsIndex = 0;
        let vertexNormalIndex = 0;
        vertexIndex = parseInt(vertexValues[0], 10);
        if (vvLen > 1 && vertexValues[1] !== "") {
          textureCoordsIndex = parseInt(vertexValues[1], 10);
        }
        if (vvLen > 2) {
          vertexNormalIndex = parseInt(vertexValues[2], 10);
        }
        if (vertexIndex === 0) {
          throw "Faces uses invalid vertex index of 0";
        }
        if (vertexIndex < 0) {
          vertexIndex = this.currentModel().vertices.length + 1 + vertexIndex;
        }
        textureCoordsIndex -= 1;
        vertexIndex -= 1;
        vertexNormalIndex -= 1;
        face.vertices.push({
          textureCoordsIndex,
          vertexIndex,
          vertexNormalIndex
        });
      }
      this.currentModel().faces.push(face);
    }
    parseMtlLib(lineItems) {
      if (lineItems.length >= 2) {
        this.result.materialLibraries.push(lineItems[1]);
      }
    }
    parseUseMtl(lineItems) {
      if (lineItems.length >= 2) {
        this.currentMaterial = lineItems[1];
      }
    }
    parseSmoothShadingStatement(lineItems) {
      if (lineItems.length !== 2) {
        throw "Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";
      }
      const groupNumber = lineItems[1].toLowerCase() === "off" ? 0 : parseInt(lineItems[1], 10);
      this.smoothingGroup = groupNumber;
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/GetBufferFromObj.js
  function GetBufferFromObj(data, flipUVs = true) {
    const parser = new ParseObj2(data, flipUVs);
    const result = parser.parse();
    const output = [];
    result.models.forEach((model) => {
      const {faces, textureCoords, vertexNormals, vertices} = model;
      let totalFaces = 0;
      for (let i = 0; i < faces.length; i++) {
        totalFaces += faces[i].vertices.length === 4 ? 6 : 3;
      }
      const buffer = new VertexBuffer7({batchSize: totalFaces, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
      const F32 = buffer.vertexViewF32;
      let offset = 0;
      for (let i = 0; i < faces.length; i++) {
        const face = faces[i];
        const i1 = face.vertices[0];
        const i2 = face.vertices[1];
        const i3 = face.vertices[2];
        const v1 = vertices[i1.vertexIndex];
        const v2 = vertices[i2.vertexIndex];
        const v3 = vertices[i3.vertexIndex];
        const n1 = vertexNormals[i1.vertexNormalIndex];
        const n2 = vertexNormals[i2.vertexNormalIndex];
        const n3 = vertexNormals[i3.vertexNormalIndex];
        const uv1 = textureCoords[i1.textureCoordsIndex];
        const uv2 = textureCoords[i2.textureCoordsIndex];
        const uv3 = textureCoords[i3.textureCoordsIndex];
        F32[offset++] = v1.x;
        F32[offset++] = v1.y;
        F32[offset++] = v1.z;
        F32[offset++] = n1.x;
        F32[offset++] = n1.y;
        F32[offset++] = n1.z;
        F32[offset++] = uv1.u;
        F32[offset++] = uv1.v;
        F32[offset++] = v2.x;
        F32[offset++] = v2.y;
        F32[offset++] = v2.z;
        F32[offset++] = n2.x;
        F32[offset++] = n2.y;
        F32[offset++] = n2.z;
        F32[offset++] = uv2.u;
        F32[offset++] = uv2.v;
        F32[offset++] = v3.x;
        F32[offset++] = v3.y;
        F32[offset++] = v3.z;
        F32[offset++] = n3.x;
        F32[offset++] = n3.y;
        F32[offset++] = n3.z;
        F32[offset++] = uv3.u;
        F32[offset++] = uv3.v;
        buffer.count += 3;
        if (face.vertices.length === 4) {
          const i4 = face.vertices[3];
          const v4 = vertices[i4.vertexIndex];
          const n4 = vertexNormals[i4.vertexNormalIndex];
          const uv4 = textureCoords[i4.textureCoordsIndex];
          F32[offset++] = v1.x;
          F32[offset++] = v1.y;
          F32[offset++] = v1.z;
          F32[offset++] = n1.x;
          F32[offset++] = n1.y;
          F32[offset++] = n1.z;
          F32[offset++] = uv1.u;
          F32[offset++] = uv1.v;
          F32[offset++] = v3.x;
          F32[offset++] = v3.y;
          F32[offset++] = v3.z;
          F32[offset++] = n3.x;
          F32[offset++] = n3.y;
          F32[offset++] = n3.z;
          F32[offset++] = uv3.u;
          F32[offset++] = uv3.v;
          F32[offset++] = v4.x;
          F32[offset++] = v4.y;
          F32[offset++] = v4.z;
          F32[offset++] = n4.x;
          F32[offset++] = n4.y;
          F32[offset++] = n4.z;
          F32[offset++] = uv4.u;
          F32[offset++] = uv4.v;
          buffer.count += 3;
        }
      }
      output.push({name: model.name, buffer});
    });
    return output;
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/geometry/GetFacesFromVertexSet.js
  function GetVec32(data, index69) {
    const x = data[index69 * 3 + 0];
    const y = data[index69 * 3 + 1];
    const z = data[index69 * 3 + 2];
    return [x, y, z];
  }
  function GetVec22(data, index69) {
    const x = data[index69 * 2 + 0];
    const y = data[index69 * 2 + 1];
    return [x, y];
  }
  function GetFacesFromVertexSet(data) {
    const {vertices, normals, uvs, indices} = data;
    const faces = [];
    for (let i = 0; i < indices.length; i += 3) {
      const i1 = indices[i + 0];
      const i2 = indices[i + 1];
      const i3 = indices[i + 2];
      const v1 = GetVec32(vertices, i1);
      const v2 = GetVec32(vertices, i2);
      const v3 = GetVec32(vertices, i3);
      const n1 = GetVec32(normals, i1);
      const n2 = GetVec32(normals, i2);
      const n3 = GetVec32(normals, i3);
      const uv1 = GetVec22(uvs, i1);
      const uv2 = GetVec22(uvs, i2);
      const uv3 = GetVec22(uvs, i3);
      const f = new FaceUVNormalTexture({x: v1[0], y: v1[1], z: v1[2]}, {x: v2[0], y: v2[1], z: v2[2]}, {x: v3[0], y: v3[1], z: v3[2]}, {x: n1[0], y: n1[1], z: n1[2]}, {x: n2[0], y: n2[1], z: n2[2]}, {x: n3[0], y: n3[1], z: n3[2]}, {x: uv1[0], y: uv1[1]}, {x: uv2[0], y: uv2[1]}, {x: uv3[0], y: uv3[1]}, 1);
      faces.push(f);
    }
    return faces;
  }

  // node_modules/@phaserjs/phaser/index-93deb41c.js
  var index24 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CreateVertexSet: CreateVertexSet3,
    FaceUVNormalTexture,
    Geometry: Geometry2,
    GetBufferFromObj,
    GetBufferFromVertexSet: GetBufferFromVertexSet4,
    GetFacesFromVertexSet,
    ParseObj: ParseObj2
  });

  // node_modules/@phaserjs/phaser/gameobjects3d/light/Light.js
  class Light {
    constructor(config2 = {}) {
      this.isDirty = false;
      const {x = 0, y = 0, z = 0.1, ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1]} = config2;
      const onChange = () => this.update();
      this.position = new Vec3Callback2(onChange, x, y, z);
      this.ambient = new RGBCallback4(onChange).fromArray(ambient);
      this.diffuse = new RGBCallback4(onChange).fromArray(diffuse);
      this.specular = new RGBCallback4(onChange).fromArray(specular);
    }
    setUniforms(shader) {
      shader.setUniform("uLightPosition", this.position.toArray());
      shader.setUniform("uLightAmbient", this.ambient.toArray());
      shader.setUniform("uLightDiffuse", this.diffuse.toArray());
      shader.setUniform("uLightSpecular", this.specular.toArray());
    }
    update() {
      this.isDirty = true;
    }
    destroy() {
      this.position.destroy();
      this.ambient.destroy();
      this.diffuse.destroy();
      this.specular.destroy();
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/plane/Plane.js
  class Plane extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
      const data = PlaneGeometry3(null, 0, 0, 0, 0, 1, 2, 1, -1, width, height, 1, widthSegments, heightSegments);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/renderlayer3d/RenderLayer3D.js
  class RenderLayer3D extends Layer2 {
    constructor() {
      super();
      this.type = "RenderLayer";
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = true;
      this.setDirty(DIRTY_CONST2.CHILD_CACHE);
      const width = GetWidth3();
      const height = GetHeight3();
      const resolution = GetResolution3();
      const texture = new Texture8(null, width * resolution, height * resolution);
      const binding = new GLTextureBinding4(texture);
      texture.binding = binding;
      binding.framebuffer = CreateFramebuffer4(binding.texture);
      binding.depthbuffer = CreateDepthBuffer4(binding.framebuffer, texture.width, texture.height);
      this.texture = texture;
      this.framebuffer = binding.framebuffer;
    }
    renderGL(renderPass) {
      if (this.numChildren > 0) {
        Flush8(renderPass);
        if (!this.willCacheChildren || this.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
          SetFramebuffer8(renderPass, this.framebuffer, true);
          this.clearDirty(DIRTY_CONST2.CHILD_CACHE);
        } else {
          SetFramebuffer8(renderPass, this.framebuffer, false);
          this.postRenderGL(renderPass);
        }
      }
    }
    postRenderGL(renderPass) {
      Flush8(renderPass);
      PopFramebuffer8(renderPass);
      DrawTexturedQuad2(renderPass, this.texture);
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // node_modules/@phaserjs/phaser/geom3d/SphereGeometry.js
  function SphereGeometry2(radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
    widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
    heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
    const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
    const data = CreateVertexSet3();
    const {vertices, normals, uvs, indices} = data;
    let index69 = 0;
    const grid = [];
    const vertex = new Vec32();
    const normal = new Vec32();
    for (let iy = 0; iy <= heightSegments; iy++) {
      const verticesRow = [];
      const v = iy / heightSegments;
      let uOffset = 0;
      if (iy === 0 && thetaStart === 0) {
        uOffset = 0.5 / widthSegments;
      } else if (iy === heightSegments && thetaEnd == Math.PI) {
        uOffset = -0.5 / widthSegments;
      }
      for (let ix = 0; ix <= widthSegments; ix++) {
        const u = ix / widthSegments;
        vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
        vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertices.push(vertex.x, vertex.y, vertex.z);
        Normalize2(vertex, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(u + uOffset, 1 - v);
        verticesRow.push(index69++);
      }
      grid.push(verticesRow);
    }
    for (let iy = 0; iy < heightSegments; iy++) {
      for (let ix = 0; ix < widthSegments; ix++) {
        const a = grid[iy][ix + 1];
        const b = grid[iy][ix];
        const c = grid[iy + 1][ix];
        const d = grid[iy + 1][ix + 1];
        if (iy !== 0 || thetaStart > 0) {
          indices.push(a, b, d);
        }
        if (iy !== heightSegments - 1 || thetaEnd < Math.PI) {
          indices.push(b, c, d);
        }
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // node_modules/@phaserjs/phaser/gameobjects3d/sphere/Sphere.js
  class Sphere extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
      const data = SphereGeometry2(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // node_modules/@phaserjs/phaser/index-1db1fb58.js
  var index25 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Components: index23,
    Geometry: index24,
    Box,
    Cone,
    Light,
    Material: Material3,
    Mesh: Mesh2,
    Plane,
    RenderLayer3D,
    Sphere,
    GameObject3D
  });

  // node_modules/@phaserjs/phaser/geom/circle/CircleContains.js
  function CircleContains2(circle, x, y) {
    if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
      const dx = (circle.x - x) * (circle.x - x);
      const dy = (circle.y - y) * (circle.y - y);
      return dx + dy <= circle.radius * circle.radius;
    } else {
      return false;
    }
  }

  // node_modules/@phaserjs/phaser/geom/circle/Circle.js
  class Circle {
    constructor(x = 0, y = 0, radius = 0) {
      this.set(x, y, radius);
    }
    set(x = 0, y = 0, radius = 0) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      return this;
    }
    contains(x, y) {
      return CircleContains2(this, x, y);
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
      this._diameter = value * 2;
    }
    get diameter() {
      return this._diameter;
    }
    set diameter(value) {
      this._diameter = value;
      this._radius = value * 0.5;
    }
    get left() {
      return this.x - this._radius;
    }
    set left(value) {
      this.x = value + this._radius;
    }
    get right() {
      return this.x + this._radius;
    }
    set right(value) {
      this.x = value - this._radius;
    }
    get top() {
      return this.y - this._radius;
    }
    set top(value) {
      this.y = value + this._radius;
    }
    get bottom() {
      return this.y + this._radius;
    }
    set bottom(value) {
      this.y = value - this._radius;
    }
  }

  // node_modules/@phaserjs/phaser/geom/circle/CircleContainsPoint.js
  function CircleContainsPoint(circle, point) {
    return CircleContains2(circle, point.x, point.y);
  }

  // node_modules/@phaserjs/phaser/geom/circle/CircleContainsRect.js
  function CircleContainsRect(circle, rect) {
    return CircleContains2(circle, rect.x, rect.y) && CircleContains2(circle, rect.right, rect.y) && CircleContains2(circle, rect.x, rect.bottom) && CircleContains2(circle, rect.right, rect.bottom);
  }

  // node_modules/@phaserjs/phaser/geom/circle/CircleEquals.js
  function CircleEquals(circle, toCompare) {
    return circle.x === toCompare.x && circle.y === toCompare.y && circle.radius === toCompare.radius;
  }

  // node_modules/@phaserjs/phaser/geom/circle/CloneCircle.js
  function CloneCircle(source) {
    return new Circle(source.x, source.y, source.radius);
  }

  // node_modules/@phaserjs/phaser/geom/circle/CopyCircleFrom.js
  function CopyCircleFrom(source, dest) {
    return dest.set(source.x, source.y, source.radius);
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCircleArea.js
  function GetCircleArea(circle) {
    return circle.radius > 0 ? Math.PI * circle.radius * circle.radius : 0;
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCircleBounds.js
  function GetCircleBounds(circle, out = new Rectangle2()) {
    return out.set(circle.left, circle.top, circle.diameter, circle.diameter);
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCircleCircumference.js
  function GetCircleCircumference(circle) {
    return 2 * (Math.PI * circle.radius);
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCircleCircumferencePoint.js
  function GetCircleCircumferencePoint(circle, angle, out = new Vec27()) {
    return out.set(circle.x + circle.radius * Math.cos(angle), circle.y + circle.radius * Math.sin(angle));
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCirclePoint.js
  function GetCirclePoint(circle, position, out = new Vec27()) {
    const angle = FromPercent2(position, 0, MATH_CONST.PI2);
    return GetCircleCircumferencePoint(circle, angle, out);
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCirclePoints.js
  function GetCirclePoints(circle, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = GetCircleCircumference(circle) / step;
    }
    for (let i = 0; i < quantity; i++) {
      const angle = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
      out.push(GetCircleCircumferencePoint(circle, angle));
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/circle/GetCircleRandomPoint.js
  function GetCircleRandomPoint(circle, out = new Vec27()) {
    const t = 2 * Math.PI * Math.random();
    const u = Math.random() + Math.random();
    const r = u > 1 ? 2 - u : u;
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);
    return out.set(circle.x + x * circle.radius, circle.y + y * circle.radius);
  }

  // node_modules/@phaserjs/phaser/geom/circle/TranslateCircle.js
  function TranslateCircle(circle, x, y) {
    circle.x += x;
    circle.y += y;
    return circle;
  }

  // node_modules/@phaserjs/phaser/geom/circle/TranslateCirclePoint.js
  function TranslateCirclePoint(circle, point) {
    circle.x += point.x;
    circle.y += point.y;
    return circle;
  }

  // node_modules/@phaserjs/phaser/index-545c3d78.js
  var index35 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Circle,
    CircleContains: CircleContains2,
    CircleContainsPoint,
    CircleContainsRect,
    CircleEquals,
    GetCircleRandomPoint,
    CloneCircle,
    CopyCircleFrom,
    GetCircleArea,
    GetCircleBounds,
    GetCircleCircumference,
    GetCircleCircumferencePoint,
    GetCirclePoint,
    GetCirclePoints,
    TranslateCircle,
    TranslateCirclePoint
  });

  // node_modules/@phaserjs/phaser/geom/ellipse/EllipseContains.js
  function EllipseContains3(ellipse, x, y) {
    if (ellipse.width <= 0 || ellipse.height <= 0) {
      return false;
    }
    let normx = (x - ellipse.x) / ellipse.width;
    let normy = (y - ellipse.y) / ellipse.height;
    normx *= normx;
    normy *= normy;
    return normx + normy < 0.25;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/Ellipse.js
  class Ellipse2 {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
    contains(x, y) {
      return EllipseContains3(this, x, y);
    }
    getMinorRadius() {
      return Math.min(this.width, this.height) / 2;
    }
    getMajorRadius() {
      return Math.max(this.width, this.height) / 2;
    }
    get left() {
      return this.x - this.width / 2;
    }
    set left(value) {
      this.x = value + this.width / 2;
    }
    get right() {
      return this.x + this.width / 2;
    }
    set right(value) {
      this.x = value - this.width / 2;
    }
    get top() {
      return this.y - this.height / 2;
    }
    set top(value) {
      this.y = value + this.height / 2;
    }
    get bottom() {
      return this.y + this.height / 2;
    }
    set bottom(value) {
      this.y = value - this.height / 2;
    }
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/CloneEllipse.js
  function CloneEllipse(source) {
    return new Ellipse2(source.x, source.y, source.width, source.height);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/CopyEllipseFrom.js
  function CopyEllipseFrom(source, dest) {
    return dest.set(source.x, source.y, source.width, source.height);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/EllipseContainsPoint.js
  function EllipseContainsPoint(ellipse, point) {
    return EllipseContains3(ellipse, point.x, point.y);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/EllipseContainsRect.js
  function EllipseContainsRect(ellipse, rect) {
    return EllipseContains3(ellipse, rect.x, rect.y) && EllipseContains3(ellipse, rect.right, rect.y) && EllipseContains3(ellipse, rect.x, rect.bottom) && EllipseContains3(ellipse, rect.right, rect.bottom);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/EllipseEquals.js
  function EllipseEquals(ellipse, toCompare) {
    return ellipse.x === toCompare.x && ellipse.y === toCompare.y && ellipse.width === toCompare.width && ellipse.height === toCompare.height;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipseArea.js
  function GetEllipseArea(ellipse) {
    if (ellipse.width <= 0 || ellipse.height <= 0) {
      return 0;
    }
    return ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipseBounds.js
  function GetEllipseBounds(ellipse, out = new Rectangle2()) {
    return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipseCircumference.js
  function GetEllipseCircumference(ellipse) {
    const rx = ellipse.width / 2;
    const ry = ellipse.height / 2;
    const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    return Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipseCircumferencePoint.js
  function GetEllipseCircumferencePoint(ellipse, angle, out = new Vec27()) {
    const halfWidth = ellipse.width / 2;
    const halfHeight = ellipse.height / 2;
    return out.set(ellipse.x + halfWidth * Math.cos(angle), ellipse.y + halfHeight * Math.sin(angle));
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipsePoint.js
  function GetEllipsePoint(ellipse, position, out = new Vec27()) {
    const angle = FromPercent2(position, 0, MATH_CONST.PI2);
    return GetEllipseCircumferencePoint(ellipse, angle, out);
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipsePoints.js
  function GetEllipsePoints(ellipse, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = GetEllipseCircumference(ellipse) / step;
    }
    for (let i = 0; i < quantity; i++) {
      const angle = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
      out.push(GetEllipseCircumferencePoint(ellipse, angle));
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/GetEllipseRandomPoint.js
  function GetEllipseRandomPoint(ellipse, out = new Vec27()) {
    const p = Math.random() * Math.PI * 2;
    const s = Math.sqrt(Math.random());
    out.x = ellipse.x + s * Math.cos(p) * ellipse.width / 2;
    out.y = ellipse.y + s * Math.sin(p) * ellipse.height / 2;
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/TranslateEllipse.js
  function TranslateEllipse(ellipse, x, y) {
    ellipse.x += x;
    ellipse.y += y;
    return ellipse;
  }

  // node_modules/@phaserjs/phaser/geom/ellipse/TranslateEllipsePoint.js
  function TranslateEllipsePoint(ellipse, point) {
    ellipse.x += point.x;
    ellipse.y += point.y;
    return ellipse;
  }

  // node_modules/@phaserjs/phaser/index-403cdcad.js
  var index30 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CloneEllipse,
    CopyEllipseFrom,
    Ellipse: Ellipse2,
    EllipseContains: EllipseContains3,
    EllipseContainsPoint,
    EllipseContainsRect,
    EllipseEquals,
    GetEllipseRandomPoint,
    GetEllipseArea,
    GetEllipseBounds,
    GetEllipseCircumference,
    GetEllipseCircumferencePoint,
    GetEllipsePoint,
    GetEllipsePoints,
    TranslateEllipse,
    TranslateEllipsePoint
  });

  // node_modules/@phaserjs/phaser/geom/intersects/CircleToCircle.js
  function CircleToCircle(circleA, circleB) {
    return Distance2(circleA, circleB) <= circleA.radius + circleB.radius;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/CircleToRectangle.js
  function CircleToRectangle(circle, rect) {
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const cx = Math.abs(circle.x - rect.x - halfWidth);
    const cy = Math.abs(circle.y - rect.y - halfHeight);
    const xDist = halfWidth + circle.radius;
    const yDist = halfHeight + circle.radius;
    if (cx > xDist || cy > yDist) {
      return false;
    } else if (cx <= halfWidth || cy <= halfHeight) {
      return true;
    } else {
      const xCornerDist = cx - halfWidth;
      const yCornerDist = cy - halfHeight;
      const xCornerDistSq = xCornerDist * xCornerDist;
      const yCornerDistSq = yCornerDist * yCornerDist;
      const maxCornerDistSq = circle.radius * circle.radius;
      return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
    }
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetCircleToCircle.js
  function GetCircleToCircle(circleA, circleB, out = []) {
    if (CircleToCircle(circleA, circleB)) {
      const x0 = circleA.x;
      const y0 = circleA.y;
      const r0 = circleA.radius;
      const x1 = circleB.x;
      const y1 = circleB.y;
      const r1 = circleB.radius;
      let coefficientA;
      let coefficientB;
      let coefficientC;
      let lambda;
      let x;
      if (y0 === y1) {
        x = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0) / (2 * (x0 - x1));
        coefficientA = 1;
        coefficientB = -2 * y1;
        coefficientC = x1 * x1 + x * x - 2 * x1 * x + y1 * y1 - r1 * r1;
        lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
        if (lambda === 0) {
          out.push(new Vec27(x, -coefficientB / (2 * coefficientA)));
        } else if (lambda > 0) {
          out.push(new Vec27(x, (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA)));
          out.push(new Vec27(x, (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA)));
        }
      } else {
        const v1 = (x0 - x1) / (y0 - y1);
        const n = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0 - y1 * y1 + y0 * y0) / (2 * (y0 - y1));
        coefficientA = v1 * v1 + 1;
        coefficientB = 2 * y0 * v1 - 2 * n * v1 - 2 * x0;
        coefficientC = x0 * x0 + y0 * y0 + n * n - r0 * r0 - 2 * y0 * n;
        lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
        if (lambda === 0) {
          x = -coefficientB / (2 * coefficientA);
          out.push(new Vec27(x, n - x * v1));
        } else if (lambda > 0) {
          x = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
          out.push(new Vec27(x, n - x * v1));
          x = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
          out.push(new Vec27(x, n - x * v1));
        }
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/LineToCircle.js
  const tmp = new Vec27();
  function LineToCircle3(line, circle, nearest) {
    if (!nearest) {
      nearest = tmp;
    }
    const {x1, y1, x2, y2} = line;
    if (CircleContains2(circle, x1, y1)) {
      nearest.set(x1, y1);
      return true;
    }
    if (CircleContains2(circle, x2, y2)) {
      nearest.set(x2, y2);
      return true;
    }
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lcx = circle.x - x1;
    const lcy = circle.y - y1;
    const dLen2 = dx * dx + dy * dy;
    let px = dx;
    let py = dy;
    if (dLen2 > 0) {
      const dp = (lcx * dx + lcy * dy) / dLen2;
      px *= dp;
      py *= dp;
    }
    nearest.set(x1 + px, y1 + py);
    const pLen2 = px * px + py * py;
    return pLen2 <= dLen2 && px * dx + py * dy >= 0 && CircleContains2(circle, nearest.x, nearest.y);
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetLineToCircle.js
  function GetLineToCircle2(line, circle, out = []) {
    if (LineToCircle3(line, circle)) {
      const {x1, y1, x2, y2} = line;
      const cr = circle.radius;
      const lDirX = x2 - x1;
      const lDirY = y2 - y1;
      const oDirX = x1 - circle.x;
      const oDirY = y1 - circle.y;
      const coefficientA = lDirX * lDirX + lDirY * lDirY;
      const coefficientB = 2 * (lDirX * oDirX + lDirY * oDirY);
      const coefficientC = oDirX * oDirX + oDirY * oDirY - cr * cr;
      const lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
      let x;
      let y;
      if (lambda === 0) {
        const root = -coefficientB / (2 * coefficientA);
        x = x1 + root * lDirX;
        y = y1 + root * lDirY;
        if (root >= 0 && root <= 1) {
          out.push(new Vec27(x, y));
        }
      } else if (lambda > 0) {
        const root1 = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
        x = x1 + root1 * lDirX;
        y = y1 + root1 * lDirY;
        if (root1 >= 0 && root1 <= 1) {
          out.push(new Vec27(x, y));
        }
        const root2 = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
        x = x1 + root2 * lDirX;
        y = y1 + root2 * lDirY;
        if (root2 >= 0 && root2 <= 1) {
          out.push(new Vec27(x, y));
        }
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetCircleToRectangle.js
  function GetCircleToRectangle(circle, rect, out = []) {
    if (CircleToRectangle(circle, rect)) {
      const [line1, line2, line3, line4] = GetRectangleEdges2(rect);
      GetLineToCircle2(line1, circle, out);
      GetLineToCircle2(line2, circle, out);
      GetLineToCircle2(line3, circle, out);
      GetLineToCircle2(line4, circle, out);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/LineToLine.js
  function LineToLine2(line1, line2, out) {
    const {x1, y1, x2, y2} = line1;
    const {x1: x3, y1: y3, x2: x4, y2: y4} = line2;
    const numA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    const deNom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (deNom === 0) {
      return false;
    }
    const uA = numA / deNom;
    const uB = numB / deNom;
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      if (out) {
        out.set(x1 + uA * (x2 - x1), y1 + uA * (y2 - y1));
      }
      return true;
    }
    return false;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/LineToRectangle.js
  function LineToRectangle2(line, rect) {
    const {x1, y1, x2, y2} = line;
    const {x, y, right, bottom} = rect;
    let t = 0;
    if (x1 >= x && x1 <= right && y1 >= y && y1 <= bottom || x2 >= x && x2 <= right && y2 >= y && y2 <= bottom) {
      return true;
    }
    if (x1 < x && x2 >= x) {
      t = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
      if (t > y && t <= bottom) {
        return true;
      }
    } else if (x1 > right && x2 <= right) {
      t = y1 + (y2 - y1) * (right - x1) / (x2 - x1);
      if (t >= y && t <= bottom) {
        return true;
      }
    }
    if (y1 < y && y2 >= y) {
      t = x1 + (x2 - x1) * (y - y1) / (y2 - y1);
      if (t >= x && t <= right) {
        return true;
      }
    } else if (y1 > bottom && y2 <= bottom) {
      t = x1 + (x2 - x1) * (bottom - y1) / (y2 - y1);
      if (t >= x && t <= right) {
        return true;
      }
    }
    return false;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetLineToRectangle.js
  function GetLineToRectangle(line, rect, out = []) {
    if (LineToRectangle2(line, rect)) {
      const [lineA, lineB, lineC, lineD] = GetRectangleEdges2(rect);
      const points = [new Vec27(), new Vec27(), new Vec27(), new Vec27()];
      const results = [
        LineToLine2(lineA, line, points[0]),
        LineToLine2(lineB, line, points[1]),
        LineToLine2(lineC, line, points[2]),
        LineToLine2(lineD, line, points[3])
      ];
      for (let i = 0; i < results.length; i++) {
        if (results[i]) {
          out.push(points[i]);
        }
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetRectangleIntersection.js
  function GetRectangleIntersection(rectA, rectB, out = new Rectangle2()) {
    if (RectangleToRectangle2(rectA, rectB)) {
      const x = Math.max(rectA.x, rectB.x);
      const y = Math.max(rectA.y, rectB.y);
      return out.set(x, y, Math.min(rectA.right, rectB.right) - x, Math.min(rectA.bottom, rectB.bottom) - y);
    }
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetRectangleToRectangle.js
  function GetRectangleToRectangle(rectA, rectB, out = []) {
    if (RectangleToRectangle2(rectA, rectB)) {
      const [lineA, lineB, lineC, lineD] = GetRectangleEdges2(rectA);
      GetLineToRectangle(lineA, rectB, out);
      GetLineToRectangle(lineB, rectB, out);
      GetLineToRectangle(lineC, rectB, out);
      GetLineToRectangle(lineD, rectB, out);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleEdges.js
  function GetTriangleEdges2(triangle) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const edge1 = new Line13(x1, y1, x2, y2);
    const edge2 = new Line13(x2, y2, x3, y3);
    const edge3 = new Line13(x3, y3, x1, y1);
    return [edge1, edge2, edge3];
  }

  // node_modules/@phaserjs/phaser/geom/triangle/TriangleContains.js
  function TriangleContains7(triangle, x, y) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const v0x = x3 - x1;
    const v0y = y3 - y1;
    const v1x = x2 - x1;
    const v1y = y2 - y1;
    const v2x = x - x1;
    const v2y = y - y1;
    const dot00 = v0x * v0x + v0y * v0y;
    const dot01 = v0x * v1x + v0y * v1y;
    const dot02 = v0x * v2x + v0y * v2y;
    const dot11 = v1x * v1x + v1y * v1y;
    const dot12 = v1x * v2x + v1y * v2y;
    const b = dot00 * dot11 - dot01 * dot01;
    const inv = b === 0 ? 0 : 1 / b;
    const u = (dot11 * dot02 - dot01 * dot12) * inv;
    const v = (dot00 * dot12 - dot01 * dot02) * inv;
    return u >= 0 && v >= 0 && u + v < 1;
  }

  // node_modules/@phaserjs/phaser/geom/triangle/TriangleContainsPoints.js
  function TriangleContainsPoints4(triangle, points, returnFirst = false, out = []) {
    let skip = false;
    points.forEach((point) => {
      if (skip) {
        return;
      }
      const {x, y} = point;
      if (TriangleContains7(triangle, x, y)) {
        out.push(new Vec27(x, y));
        if (returnFirst) {
          skip = true;
        }
      }
    });
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/RectangleToTriangle.js
  function RectangleToTriangle2(rect, triangle) {
    if (triangle.left > rect.right || triangle.right < rect.x || triangle.top > rect.bottom || triangle.bottom < rect.y) {
      return false;
    }
    const [triA, triB, triC] = GetTriangleEdges2(triangle);
    if (RectangleContains29(rect, triA.x1, triA.y1) || RectangleContains29(rect, triA.x2, triA.y2)) {
      return true;
    }
    if (RectangleContains29(rect, triB.x1, triB.y1) || RectangleContains29(rect, triB.x2, triB.y2)) {
      return true;
    }
    if (RectangleContains29(rect, triC.x1, triC.y1) || RectangleContains29(rect, triC.x2, triC.y2)) {
      return true;
    }
    const [rectA, rectB, rectC, rectD] = GetRectangleEdges2(rect);
    if (LineToLine2(triA, rectA) || LineToLine2(triA, rectB) || LineToLine2(triA, rectC) || LineToLine2(triA, rectD)) {
      return true;
    }
    if (LineToLine2(triB, rectA) || LineToLine2(triB, rectB) || LineToLine2(triB, rectC) || LineToLine2(triB, rectD)) {
      return true;
    }
    if (LineToLine2(triC, rectA) || LineToLine2(triC, rectB) || LineToLine2(triC, rectC) || LineToLine2(triC, rectD)) {
      return true;
    }
    const within = TriangleContainsPoints4(triangle, DecomposeRectangle3(rect), true);
    return within.length > 0;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetRectangleToTriangle.js
  function GetRectangleToTriangle(rect, triangle, out = []) {
    if (RectangleToTriangle2(rect, triangle)) {
      const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
      GetLineToRectangle(lineA, rect, out);
      GetLineToRectangle(lineB, rect, out);
      GetLineToRectangle(lineC, rect, out);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/TriangleToCircle.js
  function TriangleToCircle2(triangle, circle) {
    if (triangle.left > circle.right || triangle.right < circle.left || triangle.top > circle.bottom || triangle.bottom < circle.top) {
      return false;
    }
    if (TriangleContains7(triangle, circle.x, circle.y)) {
      return true;
    }
    const [line1, line2, line3] = GetTriangleEdges2(triangle);
    return LineToCircle3(line1, circle) || LineToCircle3(line2, circle) || LineToCircle3(line3, circle);
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetTriangleToCircle.js
  function GetTriangleToCircle(triangle, circle, out = []) {
    if (TriangleToCircle2(triangle, circle)) {
      const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
      GetLineToCircle2(lineA, circle, out);
      GetLineToCircle2(lineB, circle, out);
      GetLineToCircle2(lineC, circle, out);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/TriangleToLine.js
  function TriangleToLine2(triangle, line) {
    const {x1, y1, x2, y2} = line;
    if (TriangleContains7(triangle, x1, y1) || TriangleContains7(triangle, x2, y2)) {
      return true;
    }
    const [line1, line2, line3] = GetTriangleEdges2(triangle);
    return LineToLine2(line1, line) || LineToLine2(line2, line) || LineToLine2(line3, line);
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetTriangleToLine.js
  function GetTriangleToLine(triangle, line, out = []) {
    if (TriangleToLine2(triangle, line)) {
      const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
      const points = [new Vec27(), new Vec27(), new Vec27()];
      const results = [
        LineToLine2(lineA, line, points[0]),
        LineToLine2(lineB, line, points[1]),
        LineToLine2(lineC, line, points[2])
      ];
      for (let i = 0; i < results.length; i++) {
        if (results[i]) {
          out.push(points[i]);
        }
      }
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/triangle/DecomposeTriangle.js
  function DecomposeTriangle3(triangle, out = []) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    out.push(new Vec27(x1, y1), new Vec27(x2, y2), new Vec27(x3, y3));
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/TriangleToTriangle.js
  function TriangleToTriangle2(triangleA, triangleB) {
    if (triangleA.left > triangleB.right || triangleA.right < triangleB.left || triangleA.top > triangleB.bottom || triangleA.bottom < triangleB.top) {
      return false;
    }
    const [lineAA, lineAB, lineAC] = GetTriangleEdges2(triangleA);
    const [lineBA, lineBB, lineBC] = GetTriangleEdges2(triangleB);
    if (LineToLine2(lineAA, lineBA) || LineToLine2(lineAA, lineBB) || LineToLine2(lineAA, lineBC) || LineToLine2(lineAB, lineBA) || LineToLine2(lineAB, lineBB) || LineToLine2(lineAB, lineBC) || LineToLine2(lineAC, lineBA) || LineToLine2(lineAC, lineBB) || LineToLine2(lineAC, lineBC)) {
      return true;
    }
    const withinA = TriangleContainsPoints4(triangleB, DecomposeTriangle3(triangleA), true);
    if (withinA.length > 0) {
      return true;
    }
    const withinB = TriangleContainsPoints4(triangleA, DecomposeTriangle3(triangleB), true);
    return withinB.length > 0;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/GetTriangleToTriangle.js
  function GetTriangleToTriangle(triangleA, triangleB, out = []) {
    if (TriangleToTriangle2(triangleA, triangleB)) {
      const [lineA, lineB, lineC] = GetTriangleEdges2(triangleB);
      GetTriangleToLine(triangleA, lineA, out);
      GetTriangleToLine(triangleA, lineB, out);
      GetTriangleToLine(triangleA, lineC, out);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/intersects/PointToLine.js
  function PointToLine(point, line, lineThickness = 1) {
    const {x1, y1, x2, y2} = line;
    const {x: px, y: py} = point;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return false;
    }
    const r = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / L2;
    if (r < 0) {
      return Math.sqrt((x1 - px) * (x1 - px) + (y1 - py) * (y1 - py)) <= lineThickness;
    } else if (r >= 0 && r <= 1) {
      const s = ((y1 - py) * (x2 - x1) - (x1 - px) * (y2 - y1)) / L2;
      return Math.abs(s) * Math.sqrt(L2) <= lineThickness;
    } else {
      return Math.sqrt((x2 - px) * (x2 - px) + (y2 - py) * (y2 - py)) <= lineThickness;
    }
  }

  // node_modules/@phaserjs/phaser/geom/intersects/PointToLineSegment.js
  function PointToLineSegment(point, line) {
    if (!PointToLine(point, line)) {
      return false;
    }
    const {x1, y1, x2, y2} = line;
    const {x, y} = point;
    const xMin = Math.min(x1, x2);
    const xMax = Math.max(x1, x2);
    const yMin = Math.min(y1, y2);
    const yMax = Math.max(y1, y2);
    return x >= xMin && x <= xMax && (y >= yMin && y <= yMax);
  }

  // node_modules/@phaserjs/phaser/index-4d9160fb.js
  var index34 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CircleToCircle,
    CircleToRectangle,
    GetCircleToCircle,
    GetCircleToRectangle,
    GetLineToCircle: GetLineToCircle2,
    GetLineToRectangle,
    GetRectangleIntersection,
    GetRectangleToRectangle,
    GetRectangleToTriangle,
    GetTriangleToCircle,
    GetTriangleToLine,
    GetTriangleToTriangle,
    LineToCircle: LineToCircle3,
    LineToLine: LineToLine2,
    LineToRectangle: LineToRectangle2,
    PointToLine,
    PointToLineSegment,
    RectangleToRectangle: RectangleToRectangle2,
    RectangleToTriangle: RectangleToTriangle2,
    TriangleToCircle: TriangleToCircle2,
    TriangleToLine: TriangleToLine2,
    TriangleToTriangle: TriangleToTriangle2
  });

  // node_modules/@phaserjs/phaser/geom/line/CenterLineOn.js
  function CenterLineOn(line, x, y) {
    const tx = x - (line.x1 + line.x2) / 2;
    const ty = y - (line.y1 + line.y2) / 2;
    line.x1 += tx;
    line.y1 += ty;
    line.x2 += tx;
    line.y2 += ty;
    return line;
  }

  // node_modules/@phaserjs/phaser/geom/line/CloneLine.js
  function CloneLine(source) {
    return new Line13(source.x1, source.y1, source.x2, source.y2);
  }

  // node_modules/@phaserjs/phaser/geom/line/CopyLineFrom.js
  function CopyLineFrom(source, dest) {
    return dest.set(source.x1, source.y1, source.x2, source.y2);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineLength.js
  function GetLineLength2(line) {
    const {x1, y1, x2, y2} = line;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  // node_modules/@phaserjs/phaser/geom/line/ExtendLine.js
  function ExtendLine(line, left, right = left) {
    const length = GetLineLength2(line);
    const slopX = line.x2 - line.x1;
    const slopY = line.y2 - line.y1;
    if (left) {
      line.x1 = line.x1 - slopX / length * left;
      line.y1 = line.y1 - slopY / length * left;
    }
    if (right) {
      line.x2 = line.x2 + slopX / length * right;
      line.y2 = line.y2 + slopY / length * right;
    }
    return line;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineAngle.js
  function GetLineAngle(line) {
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineBresenhamPoints.js
  function GetLineBresenhamPoints(line, stepRate = 1, results = []) {
    let x1 = Math.round(line.x1);
    let y1 = Math.round(line.y1);
    const x2 = Math.round(line.x2);
    const y2 = Math.round(line.y2);
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;
    results.push(new Vec27(x1, y1));
    let i = 1;
    while (!(x1 === x2 && y1 === y2)) {
      const e2 = err << 1;
      if (e2 > -dy) {
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
      if (i % stepRate === 0) {
        results.push(new Vec27(x1, y1));
      }
      i++;
    }
    return results;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineHeight.js
  function GetLineHeight(line) {
    return Math.abs(line.y1 - line.y2);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineMidPoint.js
  function GetLineMidPoint(line, out = new Vec27()) {
    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineNearestPoint.js
  function GetLineNearestPoint(line, point, out = new Vec27()) {
    const {x1, y1, x2, y2} = line;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return out;
    }
    const r = ((point.x - x1) * (x2 - x1) + (point.y - y1) * (y2 - y1)) / L2;
    out.x = x1 + r * (x2 - x1);
    out.y = y1 + r * (y2 - y1);
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineNormal.js
  function GetLineNormal(line, out = new Vec27()) {
    const a = GetLineAngle(line) - MATH_CONST.HALF_PI;
    out.x = Math.cos(a);
    out.y = Math.sin(a);
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineNormalAngle.js
  function GetLineNormalAngle(line) {
    const angle = GetLineAngle(line) - MATH_CONST.HALF_PI;
    return Wrap3(angle, -Math.PI, Math.PI);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineNormalX.js
  function GetLineNormalX(line) {
    return Math.cos(GetLineAngle(line) - MATH_CONST.HALF_PI);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineNormalY.js
  function GetLineNormalY(line) {
    return Math.sin(GetLineAngle(line) - MATH_CONST.HALF_PI);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLinePerpSlope.js
  function GetLinePerpSlope(line) {
    const {x1, y1, x2, y2} = line;
    return -((x2 - x1) / (y2 - y1));
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLinePoint.js
  function GetLinePoint(line, position, out = new Vec27()) {
    out.x = line.x1 + (line.x2 - line.x1) * position;
    out.y = line.y1 + (line.y2 - line.y1) * position;
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLinePoints.js
  function GetLinePoints(line, quantity, stepRate = 0, out = []) {
    if (!quantity) {
      quantity = GetLineLength2(line) / stepRate;
    }
    const {x1, y1, x2, y2} = line;
    for (let i = 0; i < quantity; i++) {
      const position = i / quantity;
      const x = x1 + (x2 - x1) * position;
      const y = y1 + (y2 - y1) * position;
      out.push(new Vec27(x, y));
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineRandomPoint.js
  function GetLineRandomPoint(line, out = new Vec27()) {
    const t = Math.random();
    out.x = line.x1 + t * (line.x2 - line.x1);
    out.y = line.y1 + t * (line.y2 - line.y1);
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineReflectAngle.js
  function GetLineReflectAngle(lineA, lineB) {
    return 2 * GetLineNormalAngle(lineB) - Math.PI - GetLineAngle(lineA);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineSlope.js
  function GetLineSlope(line) {
    const {x1, y1, x2, y2} = line;
    return (y2 - y1) / (x2 - x1);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetLineWidth.js
  function GetLineWidth(line) {
    return Math.abs(line.x1 - line.x2);
  }

  // node_modules/@phaserjs/phaser/geom/line/GetShortestLineDistance.js
  function GetShortestLineDistance(line, point) {
    const {x1, y1, x2, y2} = line;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return 0;
    }
    const s = ((y1 - point.y) * (x2 - x1) - (x1 - point.x) * (y2 - y1)) / L2;
    return Math.abs(s) * Math.sqrt(L2);
  }

  // node_modules/@phaserjs/phaser/geom/line/LineEquals.js
  function LineEquals(line, toCompare) {
    return line.x1 === toCompare.x1 && line.y1 === toCompare.y1 && line.x2 === toCompare.x2 && line.y2 === toCompare.y2;
  }

  // node_modules/@phaserjs/phaser/geom/line/SetLineToAngle.js
  function LineSetToAngle(line, x, y, angle, length) {
    line.x1 = x;
    line.y1 = y;
    line.x2 = x + Math.cos(angle) * length;
    line.y2 = y + Math.sin(angle) * length;
    return line;
  }

  // node_modules/@phaserjs/phaser/geom/line/RotateLineAround.js
  function RotateLineAround2(line, x, y, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    let tx = line.x1 - x;
    let ty = line.y1 - y;
    line.x1 = tx * c - ty * s + x;
    line.y1 = tx * s + ty * c + y;
    tx = line.x2 - x;
    ty = line.y2 - y;
    line.x2 = tx * c - ty * s + x;
    line.y2 = tx * s + ty * c + y;
    return line;
  }

  // node_modules/@phaserjs/phaser/geom/line/RotateLine.js
  function RotateLine(line, angle) {
    const x = (line.x1 + line.x2) / 2;
    const y = (line.y1 + line.y2) / 2;
    return RotateLineAround2(line, x, y, angle);
  }

  // node_modules/@phaserjs/phaser/geom/line/RotateLineAroundPoint.js
  function RotateLineAroundPoint(line, point, angle) {
    return RotateLineAround2(line, point.x, point.y, angle);
  }

  // node_modules/@phaserjs/phaser/geom/line/TranslateLine.js
  function TranslateLine(line, x, y) {
    line.x1 += x;
    line.y1 += y;
    line.x2 += x;
    line.y2 += y;
    return line;
  }

  // node_modules/@phaserjs/phaser/geom/line/TranslateLinePoint.js
  function TranslateLinePoint(line, v) {
    return TranslateLine(line, v.x, v.y);
  }

  // node_modules/@phaserjs/phaser/index-abbcec82.js
  var index59 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CenterLineOn,
    CloneLine,
    CopyLineFrom,
    ExtendLine,
    GetLineAngle,
    GetLineBresenhamPoints,
    GetLineHeight,
    GetLineLength: GetLineLength2,
    GetLineMidPoint,
    GetLineNearestPoint,
    GetLineNormal,
    GetLineNormalAngle,
    GetLineNormalX,
    GetLineNormalY,
    GetLinePerpSlope,
    GetLinePoint,
    GetLinePoints,
    GetLineReflectAngle,
    GetLineSlope,
    GetLineWidth,
    GetLineRandomPoint,
    GetShortestLineDistance,
    Line: Line13,
    LineEquals,
    LineSetToAngle,
    RotateLine,
    RotateLineAround: RotateLineAround2,
    RotateLineAroundPoint,
    TranslateLine,
    TranslateLinePoint
  });

  // node_modules/@phaserjs/phaser/geom/triangle/Triangle.js
  class Triangle2 {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
      this.set(x1, y1, x2, y2, x3, y3);
    }
    set(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      return this;
    }
    contains(x, y) {
      return TriangleContains7(this, x, y);
    }
    get left() {
      return Math.min(this.x1, this.x2, this.x3);
    }
    set left(value) {
      let diff = 0;
      if (this.x1 <= this.x2 && this.x1 <= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 <= this.x1 && this.x2 <= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }
      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
    get right() {
      return Math.max(this.x1, this.x2, this.x3);
    }
    set right(value) {
      let diff = 0;
      if (this.x1 >= this.x2 && this.x1 >= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 >= this.x1 && this.x2 >= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }
      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
    get top() {
      return Math.min(this.y1, this.y2, this.y3);
    }
    set top(value) {
      let diff = 0;
      if (this.y1 <= this.y2 && this.y1 <= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 <= this.y1 && this.y2 <= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }
      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
    get bottom() {
      return Math.max(this.y1, this.y2, this.y3);
    }
    set bottom(value) {
      let diff = 0;
      if (this.y1 >= this.y2 && this.y1 >= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 >= this.y1 && this.y2 >= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }
      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
  }

  // node_modules/@phaserjs/phaser/geom/triangle/BuildEquilateralTriangle.js
  function BuildEquilateralTriangle(x, y, length) {
    const height = length * (Math.sqrt(3) / 2);
    const x1 = x;
    const y1 = y;
    const x2 = x + length / 2;
    const y2 = y + height;
    const x3 = x - length / 2;
    const y3 = y + height;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/BuildRightTriangle.js
  function BuildRightTriangle(x, y, width, height = width) {
    const x1 = x;
    const y1 = y;
    const x2 = x;
    const y2 = y - height;
    const x3 = x + width;
    const y3 = y;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleCentroid.js
  function GetTriangleCentroid2(triangle, out = new Vec27()) {
    return out.set((triangle.x1 + triangle.x2 + triangle.x3) / 3, (triangle.y1 + triangle.y2 + triangle.y3) / 3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/TranslateTriangle.js
  function TranslateTriangle2(triangle, x, y) {
    triangle.x1 += x;
    triangle.y1 += y;
    triangle.x2 += x;
    triangle.y2 += y;
    triangle.x3 += x;
    triangle.y3 += y;
    return triangle;
  }

  // node_modules/@phaserjs/phaser/geom/triangle/CenterTriangleOn.js
  function CenterTriangleOn(triangle, x, y, centerFunc = GetTriangleCentroid2) {
    const center = centerFunc(triangle);
    const diffX = x - center.x;
    const diffY = y - center.y;
    return TranslateTriangle2(triangle, diffX, diffY);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/CloneTriangle.js
  function CloneTriangle(source) {
    const {x1, y1, x2, y2, x3, y3} = source;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/CopyTriangleFrom.js
  function CopyTriangleFrom(source, dest) {
    const {x1, y1, x2, y2, x3, y3} = source;
    return dest.set(x1, y1, x2, y2, x3, y3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleArea.js
  function GetTriangleArea(triangle) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    return Math.abs(((x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1)) / 2);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleCircumCenter.js
  function Det(m00, m01, m10, m11) {
    return m00 * m11 - m01 * m10;
  }
  function GetTriangleCircumCenter(triangle, out = new Vec27()) {
    const cx = triangle.x3;
    const cy = triangle.y3;
    const ax = triangle.x1 - cx;
    const ay = triangle.y1 - cy;
    const bx = triangle.x2 - cx;
    const by = triangle.y2 - cy;
    const denom = 2 * Det(ax, ay, bx, by);
    const numx = Det(ay, ax * ax + ay * ay, by, bx * bx + by * by);
    const numy = Det(ax, ax * ax + ay * ay, bx, bx * bx + by * by);
    return out.set(cx - numx / denom, cy + numy / denom);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleCircumCircle.js
  function CircleContains11(circle, x, y) {
    if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
      const dx = (circle.x - x) * (circle.x - x);
      const dy = (circle.y - y) * (circle.y - y);
      return dx + dy <= circle.radius * circle.radius;
    } else {
      return false;
    }
  }
  class Circle3 {
    constructor(x = 0, y = 0, radius = 0) {
      this.set(x, y, radius);
    }
    set(x = 0, y = 0, radius = 0) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      return this;
    }
    contains(x, y) {
      return CircleContains11(this, x, y);
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
      this._diameter = value * 2;
    }
    get diameter() {
      return this._diameter;
    }
    set diameter(value) {
      this._diameter = value;
      this._radius = value * 0.5;
    }
    get left() {
      return this.x - this._radius;
    }
    set left(value) {
      this.x = value + this._radius;
    }
    get right() {
      return this.x + this._radius;
    }
    set right(value) {
      this.x = value - this._radius;
    }
    get top() {
      return this.y - this._radius;
    }
    set top(value) {
      this.y = value + this._radius;
    }
    get bottom() {
      return this.y + this._radius;
    }
    set bottom(value) {
      this.y = value - this._radius;
    }
  }
  function GetTriangleCircumCircle(triangle, out = new Circle3()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const A = x2 - x1;
    const B = y2 - y1;
    const C = x3 - x1;
    const D = y3 - y1;
    const E = A * (x1 + x2) + B * (y1 + y2);
    const F = C * (x1 + x3) + D * (y1 + y3);
    const G = 2 * (A * (y3 - y2) - B * (x3 - x2));
    if (Math.abs(G) < 1e-6) {
      const minX = Math.min(x1, x2, x3);
      const minY = Math.min(y1, y2, y3);
      const dx = (Math.max(x1, x2, x3) - minX) * 0.5;
      const dy = (Math.max(y1, y2, y3) - minY) * 0.5;
      return out.set(minX + dx, minY + dy, Math.sqrt(dx * dx + dy * dy));
    } else {
      const cx = (D * E - B * F) / G;
      const cy = (A * F - C * E) / G;
      const dx = cx - x1;
      const dy = cy - y1;
      return out.set(cx, cy, Math.sqrt(dx * dx + dy * dy));
    }
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleInCenter.js
  function GetLength(x1, y1, x2, y2) {
    const x = x1 - x2;
    const y = y1 - y2;
    return Math.sqrt(x * x + y * y);
  }
  function GetTriangleInCenter(triangle, out = new Vec27()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const d1 = GetLength(x3, y3, x2, y2);
    const d2 = GetLength(x1, y1, x3, y3);
    const d3 = GetLength(x2, y2, x1, y1);
    const p = d1 + d2 + d3;
    return out.set((x1 * d1 + x2 * d2 + x3 * d3) / p, (y1 * d1 + y2 * d2 + y3 * d3) / p);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTrianglePerimeter.js
  function GetTrianglePerimeter(triangle) {
    const [line1, line2, line3] = GetTriangleEdges2(triangle);
    return GetLineLength2(line1) + GetLineLength2(line2) + GetLineLength2(line3);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTrianglePoint.js
  function GetTrianglePoint(triangle, position, out = new Vec27()) {
    const [line1, line2, line3] = GetTriangleEdges2(triangle);
    if (position <= 0 || position >= 1) {
      return out.set(line1.x1, line1.y1);
    }
    const length1 = GetLineLength2(line1);
    const length2 = GetLineLength2(line2);
    const length3 = GetLineLength2(line3);
    const perimeter = length1 + length2 + length3;
    let p = perimeter * position;
    let localPosition = 0;
    if (p < length1) {
      localPosition = p / length1;
      const {x1, y1, x2, y2} = line1;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    } else if (p > length1 + length2) {
      p -= length1 + length2;
      localPosition = p / length3;
      const {x1, y1, x2, y2} = line3;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    } else {
      p -= length1;
      localPosition = p / length2;
      const {x1, y1, x2, y2} = line2;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    }
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTrianglePoints.js
  function GetTrianglePoints(triangle, quantity, stepRate, out = []) {
    const [line1, line2, line3] = GetTriangleEdges2(triangle);
    const length1 = GetLineLength2(line1);
    const length2 = GetLineLength2(line2);
    const length3 = GetLineLength2(line3);
    const perimeter = length1 + length2 + length3;
    if (!quantity) {
      quantity = perimeter / stepRate;
    }
    for (let i = 0; i < quantity; i++) {
      let p = perimeter * (i / quantity);
      let localPosition = 0;
      let point;
      if (p < length1) {
        localPosition = p / length1;
        const {x1, y1, x2, y2} = line1;
        point = new Vec27(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      } else if (p > length1 + length2) {
        p -= length1 + length2;
        localPosition = p / length3;
        const {x1, y1, x2, y2} = line3;
        point = new Vec27(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      } else {
        p -= length1;
        localPosition = p / length2;
        const {x1, y1, x2, y2} = line2;
        point = new Vec27(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      }
      out.push(point);
    }
    return out;
  }

  // node_modules/@phaserjs/phaser/geom/triangle/GetTriangleRandomPoint.js
  function GetTriangleRandomPoint(triangle, out = new Vec27()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const ux = x2 - x1;
    const uy = y2 - y1;
    const vx = x3 - x1;
    const vy = y3 - y1;
    let r = Math.random();
    let s = Math.random();
    if (r + s >= 1) {
      r = 1 - r;
      s = 1 - s;
    }
    return out.set(x1 + (ux * r + vx * s), y1 + (uy * r + vy * s));
  }

  // node_modules/@phaserjs/phaser/geom/triangle/RotateTriangleAround.js
  function RotateTriangleAround2(triangle, x, y, angle) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return triangle.set((x1 - x) * c - (y1 - y) * s + x, (x1 - x) * s + (y1 - y) * c + y, (x2 - x) * c - (y2 - y) * s + x, (x2 - x) * s + (y2 - y) * c + y, (x3 - x) * c - (y3 - y) * s + x, (x3 - x) * s + (y3 - y) * c + y);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/RotateTriangle.js
  function RotateTriangle(triangle, angle) {
    const point = GetTriangleInCenter(triangle);
    return RotateTriangleAround2(triangle, point.x, point.y, angle);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/RotateTriangleAroundPoint.js
  function RotateTriangleAroundPoint(triangle, point, angle) {
    return RotateTriangleAround2(triangle, point.x, point.y, angle);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/TriangleContainsPoint.js
  function TriangleContainsPoint(triangle, point) {
    return TriangleContains7(triangle, point.x, point.y);
  }

  // node_modules/@phaserjs/phaser/geom/triangle/TriangleEquals.js
  function TriangleEquals(src, dest) {
    return src.x1 === dest.x1 && src.y1 === dest.y1 && src.x2 === dest.x2 && src.y2 === dest.y2 && src.x3 === dest.x3 && src.y3 === dest.y3;
  }

  // node_modules/@phaserjs/phaser/index-19ec947a.js
  var index19 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BuildEquilateralTriangle,
    BuildRightTriangle,
    CenterTriangleOn,
    CloneTriangle,
    CopyTriangleFrom,
    DecomposeTriangle: DecomposeTriangle3,
    GetTriangleArea,
    GetTriangleCentroid: GetTriangleCentroid2,
    GetTriangleCircumCenter,
    GetTriangleCircumCircle,
    GetTriangleEdges: GetTriangleEdges2,
    GetTriangleInCenter,
    GetTrianglePerimeter,
    GetTrianglePoint,
    GetTrianglePoints,
    GetTriangleRandomPoint,
    RotateTriangle,
    RotateTriangleAround: RotateTriangleAround2,
    RotateTriangleAroundPoint,
    TranslateTriangle: TranslateTriangle2,
    Triangle: Triangle2,
    TriangleContains: TriangleContains7,
    TriangleContainsPoint,
    TriangleContainsPoints: TriangleContainsPoints4,
    TriangleEquals
  });

  // node_modules/@phaserjs/phaser/index-d9d8a1ce.js
  var index66 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Circle: index35,
    Ellipse: index30,
    Intersects: index34,
    Line: index59,
    Rectangle: index63,
    Triangle: index19
  });

  // node_modules/@phaserjs/phaser/geom3d/TorusGeometry.js
  function TorusGeometry(radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2) {
    const data = CreateVertexSet3();
    const {vertices, normals, uvs, indices} = data;
    const center = new Vec32();
    const vertex = new Vec32();
    const normal = new Vec32();
    for (let j = 0; j <= radialSegments; j++) {
      for (let i = 0; i <= tubularSegments; i++) {
        const u = i / tubularSegments * arc;
        const v = j / radialSegments * Math.PI * 2;
        vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
        vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
        vertex.z = tube * Math.sin(v);
        vertices.push(vertex.x, vertex.y, vertex.z);
        center.x = radius * Math.cos(u);
        center.y = radius * Math.sin(u);
        Subtract2(vertex, center, normal);
        Normalize2(normal, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(i / tubularSegments);
        uvs.push(j / radialSegments);
      }
    }
    for (let j = 1; j <= radialSegments; j++) {
      for (let i = 1; i <= tubularSegments; i++) {
        const a = (tubularSegments + 1) * j + i - 1;
        const b = (tubularSegments + 1) * (j - 1) + i - 1;
        const c = (tubularSegments + 1) * (j - 1) + i;
        const d = (tubularSegments + 1) * j + i;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // node_modules/@phaserjs/phaser/index-87c8238b.js
  var index51 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BoxGeometry: BoxGeometry2,
    ConeGeometry: ConeGeometry2,
    CylinderGeometry: CylinderGeometry3,
    PlaneGeometry: PlaneGeometry3,
    SphereGeometry: SphereGeometry2,
    TorusGeometry
  });

  // node_modules/@phaserjs/phaser/input/keyboard/Key.js
  class Key2 {
    constructor(value) {
      this.capture = true;
      this.isDown = false;
      this.enabled = true;
      this.repeatRate = 0;
      this.canRepeat = true;
      this.timeDown = 0;
      this.timeUpdated = 0;
      this.timeUp = 0;
      this.value = value;
      this.events = new Map();
    }
    getValue() {
      return this.value;
    }
    down(event) {
      if (!this.enabled) {
        return;
      }
      if (this.capture) {
        event.preventDefault();
      }
      this.shiftKey = event.shiftKey;
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      if (this.isDown && this.canRepeat) {
        this.timeUpdated = event.timeStamp;
        const delay = this.timeUpdated - this.timeDown;
        if (delay >= this.repeatRate) {
          Emit2(this, "keydown", this);
          if (this.downCallback) {
            this.downCallback(this);
          }
        }
      } else {
        this.isDown = true;
        this.timeDown = event.timeStamp;
        this.timeUpdated = event.timeStamp;
        Emit2(this, "keydown", this);
        if (this.downCallback) {
          this.downCallback(this);
        }
      }
    }
    up(event) {
      if (!this.enabled) {
        return;
      }
      if (this.capture) {
        event.preventDefault();
      }
      this.shiftKey = event.shiftKey;
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      if (this.isDown) {
        this.isDown = false;
        this.timeUp = event.timeStamp;
        this.timeUpdated = event.timeStamp;
        Emit2(this, "keyup", this);
        if (this.upCallback) {
          this.upCallback(this);
        }
      }
    }
    reset() {
      this.isDown = false;
      this.timeUpdated = this.timeDown;
      this.timeUp = this.timeDown;
    }
    destroy() {
      this.downCallback = null;
      this.upCallback = null;
      this.events.clear();
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/AKey.js
  class AKey2 extends Key2 {
    constructor() {
      super("a");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/ArrowKeys.js
  class ArrowKeys2 {
    constructor(keyboardManager, config2) {
      const {left = true, right = true, up = true, down = true, space = true} = config2;
      const keys = keyboardManager.keys;
      if (left) {
        this.left = new Key2("ArrowLeft");
        keys.set(this.left.value, this.left);
      }
      if (right) {
        this.right = new Key2("ArrowRight");
        keys.set(this.right.value, this.right);
      }
      if (up) {
        this.up = new Key2("ArrowUp");
        keys.set(this.up.value, this.up);
      }
      if (down) {
        this.down = new Key2("ArrowDown");
        keys.set(this.down.value, this.down);
      }
      if (space) {
        this.space = new Key2(" ");
        keys.set(this.space.value, this.space);
      }
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/BKey.js
  class BKey2 extends Key2 {
    constructor() {
      super("b");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/CKey.js
  class CKey2 extends Key2 {
    constructor() {
      super("c");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/DKey.js
  class DKey2 extends Key2 {
    constructor() {
      super("d");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/DownKey.js
  class DownKey2 extends Key2 {
    constructor() {
      super("ArrowDown");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/EKey.js
  class EKey2 extends Key2 {
    constructor() {
      super("e");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/FKey.js
  class FKey2 extends Key2 {
    constructor() {
      super("f");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/GKey.js
  class GKey2 extends Key2 {
    constructor() {
      super("g");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/HKey.js
  class HKey2 extends Key2 {
    constructor() {
      super("h");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/IKey.js
  class IKey2 extends Key2 {
    constructor() {
      super("i");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/JKey.js
  class JKey2 extends Key2 {
    constructor() {
      super("j");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/KKey.js
  class KKey2 extends Key2 {
    constructor() {
      super("k");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/LKey.js
  class LKey2 extends Key2 {
    constructor() {
      super("l");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/LeftKey.js
  class LeftKey2 extends Key2 {
    constructor() {
      super("ArrowLeft");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/MKey.js
  class MKey2 extends Key2 {
    constructor() {
      super("m");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/NKey.js
  class NKey2 extends Key2 {
    constructor() {
      super("n");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/OKey.js
  class OKey2 extends Key2 {
    constructor() {
      super("o");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/PKey.js
  class PKey2 extends Key2 {
    constructor() {
      super("p");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/QKey.js
  class QKey2 extends Key2 {
    constructor() {
      super("q");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/RKey.js
  class RKey2 extends Key2 {
    constructor() {
      super("r");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/RightKey.js
  class RightKey2 extends Key2 {
    constructor() {
      super("ArrowRight");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/SKey.js
  class SKey2 extends Key2 {
    constructor() {
      super("s");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/SpaceKey.js
  class SpaceKey2 extends Key2 {
    constructor() {
      super(" ");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/TKey.js
  class TKey2 extends Key2 {
    constructor() {
      super("t");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/UKey.js
  class UKey2 extends Key2 {
    constructor() {
      super("u");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/UpKey.js
  class UpKey2 extends Key2 {
    constructor() {
      super("ArrowUp");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/VKey.js
  class VKey2 extends Key2 {
    constructor() {
      super("v");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/WASDKeys.js
  class WASDKeys2 {
    constructor(keyboardManager, config2) {
      const {W = true, A = true, S = true, D = true, space = true} = config2;
      const keys = keyboardManager.keys;
      if (W) {
        this.W = new Key2("w");
        keys.set(this.W.value, this.W);
      }
      if (A) {
        this.A = new Key2("a");
        keys.set(this.A.value, this.A);
      }
      if (S) {
        this.S = new Key2("s");
        keys.set(this.S.value, this.S);
      }
      if (D) {
        this.D = new Key2("d");
        keys.set(this.D.value, this.D);
      }
      if (space) {
        this.space = new Key2(" ");
        keys.set(this.space.value, this.space);
      }
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/WKey.js
  class WKey2 extends Key2 {
    constructor() {
      super("w");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/XKey.js
  class XKey2 extends Key2 {
    constructor() {
      super("x");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/YKey.js
  class YKey2 extends Key2 {
    constructor() {
      super("y");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/keys/ZKey.js
  class ZKey2 extends Key2 {
    constructor() {
      super("z");
    }
  }

  // node_modules/@phaserjs/phaser/index-157cb84a.js
  var index18 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AKey: AKey2,
    BKey: BKey2,
    CKey: CKey2,
    DKey: DKey2,
    EKey: EKey2,
    FKey: FKey2,
    GKey: GKey2,
    HKey: HKey2,
    IKey: IKey2,
    JKey: JKey2,
    KKey: KKey2,
    LKey: LKey2,
    MKey: MKey2,
    NKey: NKey2,
    OKey: OKey2,
    PKey: PKey2,
    QKey: QKey2,
    RKey: RKey2,
    SKey: SKey2,
    TKey: TKey2,
    UKey: UKey2,
    VKey: VKey2,
    WKey: WKey2,
    XKey: XKey2,
    YKey: YKey2,
    ZKey: ZKey2,
    ArrowKeys: ArrowKeys2,
    DownKey: DownKey2,
    LeftKey: LeftKey2,
    RightKey: RightKey2,
    SpaceKey: SpaceKey2,
    UpKey: UpKey2,
    WASDKeys: WASDKeys2
  });

  // node_modules/@phaserjs/phaser/input/keyboard/GetKeyDownDuration.js
  function GetKeyDownDuration2(key) {
    if (key.isDown) {
      return key.timeUpdated - key.timeDown;
    } else {
      return key.timeUp - key.timeDown;
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/Keyboard.js
  class Keyboard2 extends EventEmitter2 {
    constructor() {
      super();
      this.keyConversion = {
        Up: "ArrowUp",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Spacebar: " ",
        Win: "Meta",
        Scroll: "ScrollLock",
        Del: "Delete",
        Apps: "ContextMenu",
        Esc: "Escape",
        Add: "+",
        Subtract: "-",
        Multiply: "*",
        Decimal: ".",
        Divide: "/"
      };
      this.keydownHandler = (event) => this.onKeyDown(event);
      this.keyupHandler = (event) => this.onKeyUp(event);
      this.blurHandler = () => this.onBlur();
      window.addEventListener("keydown", this.keydownHandler);
      window.addEventListener("keyup", this.keyupHandler);
      window.addEventListener("blur", this.blurHandler);
      this.keys = new Map();
    }
    addKeys(...keys) {
      keys.forEach((key) => {
        this.keys.set(key.getValue(), key);
      });
    }
    clearKeys() {
      this.keys.clear();
    }
    onBlur() {
      this.keys.forEach((key) => {
        key.reset();
      });
    }
    getKeyValue(key) {
      if (this.keyConversion.hasOwnProperty(key)) {
        return this.keyConversion[key];
      } else {
        return key;
      }
    }
    onKeyDown(event) {
      const value = this.getKeyValue(event.key);
      if (this.keys.has(value)) {
        const key = this.keys.get(value);
        key.down(event);
      }
      Emit2(this, "keydown-" + value, event);
      Emit2(this, "keydown", event);
    }
    onKeyUp(event) {
      const value = this.getKeyValue(event.key);
      if (this.keys.has(value)) {
        const key = this.keys.get(value);
        key.up(event);
      }
      Emit2(this, "keyup-" + value, event);
      Emit2(this, "keyup", event);
    }
    destroy() {
      window.removeEventListener("keydown", this.keydownHandler);
      window.removeEventListener("keyup", this.keyupHandler);
      window.removeEventListener("blur", this.blurHandler);
      Emit2(this, "destroy");
    }
  }

  // node_modules/@phaserjs/phaser/input/keyboard/SetKeyRepeatRate.js
  function SetKeyRepeatRate2(rate, ...keys) {
    keys.forEach((key) => {
      key.repeatRate = rate;
    });
    return keys;
  }

  // node_modules/@phaserjs/phaser/index-1ef26683.js
  var index20 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    GetKeyDownDuration: GetKeyDownDuration2,
    Key: Key2,
    Keys: index18,
    Keyboard: Keyboard2,
    SetKeyRepeatRate: SetKeyRepeatRate2
  });

  // node_modules/@phaserjs/phaser/input/mouse/Mouse.js
  class Mouse2 extends EventEmitter2 {
    constructor(target) {
      super();
      this.primaryDown = false;
      this.auxDown = false;
      this.secondaryDown = false;
      this.blockContextMenu = true;
      this.resolution = 1;
      this.mousedownHandler = (event) => this.onMouseDown(event);
      this.mouseupHandler = (event) => this.onMouseUp(event);
      this.mousemoveHandler = (event) => this.onMouseMove(event);
      this.mousewheelHandler = (event) => this.onMouseWheel(event);
      this.contextmenuHandler = (event) => this.onContextMenuEvent(event);
      this.blurHandler = () => this.onBlur();
      this.localPoint = new Vec27();
      this.hitPoint = new Vec27();
      this.transPoint = new Vec27();
      if (!target) {
        target = GameInstance2.get().renderer.canvas;
      }
      target.addEventListener("mousedown", this.mousedownHandler);
      target.addEventListener("mouseup", this.mouseupHandler);
      target.addEventListener("wheel", this.mousewheelHandler, {passive: false});
      target.addEventListener("contextmenu", this.contextmenuHandler);
      window.addEventListener("mouseup", this.mouseupHandler);
      window.addEventListener("mousemove", this.mousemoveHandler);
      window.addEventListener("blur", this.blurHandler);
      this.target = target;
    }
    onBlur() {
    }
    onMouseDown(event) {
      this.positionToPoint(event);
      this.primaryDown = event.button === 0;
      this.auxDown = event.button === 1;
      this.secondaryDown = event.button === 2;
      Emit2(this, "pointerdown", this.localPoint.x, this.localPoint.y, event.button, event);
    }
    onMouseUp(event) {
      this.positionToPoint(event);
      this.primaryDown = !(event.button === 0);
      this.auxDown = !(event.button === 1);
      this.secondaryDown = !(event.button === 2);
      Emit2(this, "pointerup", this.localPoint.x, this.localPoint.y, event.button, event);
    }
    onMouseMove(event) {
      this.positionToPoint(event);
      Emit2(this, "pointermove", this.localPoint.x, this.localPoint.y, event);
    }
    onMouseWheel(event) {
      Emit2(this, "wheel", event.deltaX, event.deltaY, event.deltaZ, event);
    }
    onContextMenuEvent(event) {
      if (this.blockContextMenu) {
        event.preventDefault();
      }
      Emit2(this, "contextmenu", event);
    }
    positionToPoint(event) {
      return this.localPoint.set(event.offsetX, event.offsetY);
    }
    getInteractiveChildren(parent, results) {
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!child.visible || !child.input.enabled) {
          continue;
        }
        results.push(child);
        if (child.input.enabledChildren && child.numChildren) {
          this.getInteractiveChildren(child, results);
        }
      }
    }
    checkHitArea(entity, px, py) {
      if (entity.input.hitArea) {
        if (entity.input.hitArea.contains(px, py)) {
          return true;
        }
      } else {
        return entity.transform.extent.contains(px, py);
      }
      return false;
    }
    hitTest(...entities) {
      const localX = this.localPoint.x;
      const localY = this.localPoint.y;
      const point = this.transPoint;
      for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (!entity.world) {
          continue;
        }
        const mat = Append2(entity.world.camera.worldTransform, entity.transform.world);
        GlobalToLocal2(mat, localX, localY, point);
        if (this.checkHitArea(entity, point.x, point.y)) {
          this.hitPoint.set(point.x, point.y);
          return true;
        }
      }
      return false;
    }
    hitTestChildren(parent, topOnly = true) {
      const output = [];
      if (!parent.visible) {
        return output;
      }
      const candidates = [];
      const parentInput = parent.input;
      if (parentInput && parentInput.enabled) {
        candidates.push(parent);
      }
      if (parentInput.enabledChildren && parent.numChildren) {
        this.getInteractiveChildren(parent, candidates);
      }
      for (let i = candidates.length - 1; i >= 0; i--) {
        const entity = candidates[i];
        if (this.hitTest(entity)) {
          output.push(entity);
          if (topOnly) {
            break;
          }
        }
      }
      return output;
    }
    shutdown() {
      const target = this.target;
      target.removeEventListener("mousedown", this.mousedownHandler);
      target.removeEventListener("mouseup", this.mouseupHandler);
      target.removeEventListener("wheel", this.mousewheelHandler);
      target.removeEventListener("contextmenu", this.contextmenuHandler);
      window.removeEventListener("mouseup", this.mouseupHandler);
      window.removeEventListener("mousemove", this.mousemoveHandler);
      window.removeEventListener("blur", this.blurHandler);
    }
  }

  // node_modules/@phaserjs/phaser/index-a84ac3fd.js
  var index21 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Mouse: Mouse2
  });

  // node_modules/@phaserjs/phaser/input/SetInteractive.js
  function SetInteractive2(...children) {
    children.forEach((child) => {
      child.input.enabled = true;
    });
    return children;
  }

  // node_modules/@phaserjs/phaser/index-1bdf9a98.js
  var index22 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Keyboard: index20,
    Mouse: index21,
    SetInteractive: SetInteractive2
  });

  // node_modules/@phaserjs/phaser/textures/parsers/AtlasParser.js
  function AtlasParser2(texture, data) {
    let frames;
    if (Array.isArray(data.textures)) {
      frames = data.textures[0].frames;
    } else if (Array.isArray(data.frames)) {
      frames = data.frames;
    } else if (data.hasOwnProperty("frames")) {
      frames = Object.values(data.frames);
    } else {
      console.warn("Invalid Texture Atlas JSON");
    }
    if (frames) {
      let newFrame;
      for (let i = 0; i < frames.length; i++) {
        const src = frames[i];
        newFrame = texture.addFrame(src.filename, src.frame.x, src.frame.y, src.frame.w, src.frame.h);
        if (src.trimmed) {
          newFrame.setTrim(src.sourceSize.w, src.sourceSize.h, src.spriteSourceSize.x, src.spriteSourceSize.y, src.spriteSourceSize.w, src.spriteSourceSize.h);
        } else {
          newFrame.setSourceSize(src.sourceSize.w, src.sourceSize.h);
        }
        if (src.rotated)
          ;
        if (src.anchor) {
          newFrame.setPivot(src.anchor.x, src.anchor.y);
        }
      }
    }
  }

  // node_modules/@phaserjs/phaser/loader/File.js
  class File2 {
    constructor(key, url, config2) {
      this.responseType = "text";
      this.crossOrigin = void 0;
      this.skipCache = false;
      this.hasLoaded = false;
      this.key = key;
      this.url = url;
      this.config = config2;
    }
  }

  // node_modules/@phaserjs/phaser/loader/GetURL.js
  function GetURL2(key, url, extension, loader) {
    if (!url) {
      url = key + extension;
    }
    if (/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/.exec(url)) {
      return url;
    } else if (loader) {
      return loader.baseURL + loader.path + url;
    } else {
      return url;
    }
  }

  // node_modules/@phaserjs/phaser/loader/ImageTagLoader.js
  function ImageTagLoader2(file) {
    file.data = new Image();
    if (file.crossOrigin) {
      file.data.crossOrigin = file.crossOrigin;
    }
    return new Promise((resolve, reject) => {
      file.data.onload = () => {
        if (file.data.onload) {
          file.data.onload = null;
          file.data.onerror = null;
          resolve(file);
        }
      };
      file.data.onerror = (event) => {
        if (file.data.onload) {
          file.data.onload = null;
          file.data.onerror = null;
          file.error = event;
          reject(file);
        }
      };
      file.data.src = file.url;
      if (file.data.complete && file.data.width && file.data.height) {
        file.data.onload = null;
        file.data.onerror = null;
        resolve(file);
      }
    });
  }

  // node_modules/@phaserjs/phaser/loader/files/ImageFile.js
  function ImageFile2(key, url, glConfig) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".png", file.loader);
      if (file.loader) {
        file.crossOrigin = file.loader.crossOrigin;
      }
      return new Promise((resolve, reject) => {
        const textureManager = TextureManagerInstance6.get();
        if (textureManager.has(file.key)) {
          resolve(file);
        } else {
          ImageTagLoader2(file).then((file2) => {
            textureManager.add(file2.key, file2.data, glConfig);
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/XHRLoader.js
  function XHRLoader2(file) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file.url, true);
    xhr.responseType = file.responseType;
    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        file.data = xhr.responseText;
        file.hasLoaded = true;
        resolve(file);
      };
      xhr.onerror = () => {
        file.hasLoaded = true;
        reject(file);
      };
      xhr.send();
    });
  }

  // node_modules/@phaserjs/phaser/loader/files/JSONFile.js
  function JSONFile2(key, url) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".json", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("JSON");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            file2.data = JSON.parse(file2.data);
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/AtlasFile.js
  function AtlasFile2(key, textureURL, atlasURL, glConfig) {
    const json = JSONFile2(key, atlasURL);
    const image = ImageFile2(key, textureURL, glConfig);
    const file = new File2(key, "");
    file.load = () => {
      json.url = GetURL2(json.key, json.url, ".json", file.loader);
      image.url = GetURL2(image.key, image.url, ".png", file.loader);
      return new Promise((resolve, reject) => {
        json.skipCache = true;
        json.load().then(() => {
          image.load().then(() => {
            AtlasParser2(TextureManagerInstance6.get().get(key), json.data);
            resolve(file);
          }).catch(() => {
            reject(file);
          });
        }).catch(() => {
          reject(file);
        });
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/textures/parsers/BitmapTextParser.js
  function GetValue(node, attribute) {
    return parseInt(node.getAttribute(attribute), 10);
  }
  function BitmapTextParser2(texture, xml, frame2) {
    const xSpacing = 0;
    const ySpacing = 0;
    const info = xml.getElementsByTagName("info")[0];
    const common = xml.getElementsByTagName("common")[0];
    const data = {
      font: info.getAttribute("face"),
      size: GetValue(info, "size"),
      lineHeight: GetValue(common, "lineHeight") + ySpacing,
      chars: {}
    };
    const letters = xml.getElementsByTagName("char");
    for (let i = 0; i < letters.length; i++) {
      const node = letters[i];
      const charCode = GetValue(node, "id");
      const x = GetValue(node, "x");
      const y = GetValue(node, "y");
      const width = GetValue(node, "width");
      const height = GetValue(node, "height");
      data.chars[charCode] = {
        x,
        y,
        width,
        height,
        xOffset: GetValue(node, "xoffset"),
        yOffset: GetValue(node, "yoffset"),
        xAdvance: GetValue(node, "xadvance") + xSpacing,
        kerning: {}
      };
      texture.addFrame(charCode, x, y, width, height);
    }
    const kernings = xml.getElementsByTagName("kerning");
    for (let i = 0; i < kernings.length; i++) {
      const kern = kernings[i];
      const first = GetValue(kern, "first");
      const second = GetValue(kern, "second");
      const amount = GetValue(kern, "amount");
      data.chars[second].kerning[first] = amount;
    }
    return data;
  }

  // node_modules/@phaserjs/phaser/loader/files/XMLFile.js
  function XMLFile2(key, url) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".xml", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("XML");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            const xml = ParseXML(file2.data);
            if (xml !== null) {
              file2.data = xml;
              if (!file2.skipCache) {
                cache.set(file2.key, xml);
              }
              resolve(file2);
            } else {
              reject(file2);
            }
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/BitmapTextFile.js
  function BitmapTextFile2(key, textureURL, fontDataURL, glConfig) {
    const xml = XMLFile2(key, fontDataURL);
    const image = ImageFile2(key, textureURL, glConfig);
    const file = new File2(key, "");
    file.load = () => {
      xml.url = GetURL2(xml.key, xml.url, ".xml", file.loader);
      image.url = GetURL2(image.key, image.url, ".png", file.loader);
      return new Promise((resolve, reject) => {
        xml.skipCache = true;
        xml.load().then(() => {
          image.load().then(() => {
            const texture = TextureManagerInstance6.get().get(key);
            const fontData = BitmapTextParser2(texture, xml.data);
            texture.data = fontData;
            resolve(file);
          }).catch(() => {
            reject(file);
          });
        }).catch(() => {
          reject(file);
        });
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/CSVFile.js
  function CSVFile2(key, url) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".csv", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("CSV");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/JSONGeometryFile.js
  function JSONGeometryFile2(key, url, mappingConfig) {
    const file = new File2(key, url);
    const {vertices = "verts", normals = "normals", uvs = "uvs", numberOfVertices = 0} = mappingConfig;
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".json", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Geometry");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            const data = JSON.parse(file2.data);
            const geom = new Geometry2({
              vertices: data[vertices],
              normals: data[normals],
              uvs: data[uvs],
              numberOfVertices
            });
            file2.data = geom;
            if (!file2.skipCache) {
              cache.set(file2.key, geom);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/OBJFile.js
  function OBJFile2(key, url) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".obj", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Obj");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/loader/files/OBJGeometryFile.js
  function OBJGeometryFile2(key, url, flipUVs = true) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".obj", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Geometry");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader2(file).then((file2) => {
            const models = GetBufferFromObj(file2.data, flipUVs);
            file2.data = models;
            if (!file2.skipCache) {
              let key2 = file2.key;
              models.forEach((model, index69) => {
                if (index69 > 0) {
                  key2 = file2.key + index69.toString();
                }
                const geom = new Geometry2(model.buffer);
                cache.set(key2, geom);
              });
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/textures/parsers/SpriteSheetParser.js
  function SpriteSheetParser2(texture, x, y, width, height, frameConfig) {
    const {frameWidth = null, endFrame = -1, margin = 0, spacing = 0} = frameConfig;
    let {frameHeight = null, startFrame = 0} = frameConfig;
    if (!frameHeight) {
      frameHeight = frameWidth;
    }
    if (frameWidth === null) {
      throw new Error("SpriteSheetParser: Invalid frameWidth");
    }
    const row = Math.floor((width - margin + spacing) / (frameWidth + spacing));
    const column = Math.floor((height - margin + spacing) / (frameHeight + spacing));
    let total = row * column;
    if (total === 0) {
      console.warn("SpriteSheetParser: Frame config will result in zero frames");
    }
    if (startFrame > total || startFrame < -total) {
      startFrame = 0;
    }
    if (startFrame < 0) {
      startFrame = total + startFrame;
    }
    if (endFrame !== -1) {
      total = startFrame + (endFrame + 1);
    }
    let fx = margin;
    let fy = margin;
    let ax = 0;
    let ay = 0;
    for (let i = 0; i < total; i++) {
      ax = 0;
      ay = 0;
      const w = fx + frameWidth;
      const h = fy + frameHeight;
      if (w > width) {
        ax = w - width;
      }
      if (h > height) {
        ay = h - height;
      }
      texture.addFrame(i, x + fx, y + fy, frameWidth - ax, frameHeight - ay);
      fx += frameWidth + spacing;
      if (fx + frameWidth > width) {
        fx = margin;
        fy += frameHeight + spacing;
      }
    }
  }

  // node_modules/@phaserjs/phaser/loader/files/SpriteSheetFile.js
  function SpriteSheetFile2(key, url, frameConfig, glConfig) {
    const file = new File2(key, url);
    file.load = () => {
      file.url = GetURL2(file.key, file.url, ".png", file.loader);
      if (file.loader) {
        file.crossOrigin = file.loader.crossOrigin;
      }
      return new Promise((resolve, reject) => {
        const textureManager = TextureManagerInstance6.get();
        if (textureManager.has(file.key)) {
          resolve(file);
        } else {
          ImageTagLoader2(file).then((file2) => {
            const texture = textureManager.add(file2.key, file2.data, glConfig);
            if (texture) {
              SpriteSheetParser2(texture, 0, 0, texture.width, texture.height, frameConfig);
              resolve(file2);
            } else {
              reject(file2);
            }
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // node_modules/@phaserjs/phaser/index-c2aaf521.js
  var index60 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AtlasFile: AtlasFile2,
    BitmapTextFile: BitmapTextFile2,
    CSVFile: CSVFile2,
    ImageFile: ImageFile2,
    JSONFile: JSONFile2,
    JSONGeometryFile: JSONGeometryFile2,
    OBJFile: OBJFile2,
    OBJGeometryFile: OBJGeometryFile2,
    SpriteSheetFile: SpriteSheetFile2,
    XMLFile: XMLFile2
  });

  // node_modules/@phaserjs/phaser/loader/Loader.js
  class Loader2 extends EventEmitter2 {
    constructor() {
      super();
      this.baseURL = "";
      this.path = "";
      this.crossOrigin = "anonymous";
      this.maxParallelDownloads = -1;
      this.isLoading = false;
      this.reset();
    }
    reset() {
      this.isLoading = false;
      this.queue = new Set();
      this.inflight = new Set();
      this.completed = new Set();
      this.progress = 0;
    }
    add(...file) {
      file.forEach((entity) => {
        entity.loader = this;
        this.queue.add(entity);
      });
      return this;
    }
    start() {
      if (this.isLoading) {
        return null;
      }
      return new Promise((resolve, reject) => {
        this.completed.clear();
        this.progress = 0;
        if (this.queue.size > 0) {
          this.isLoading = true;
          this.onComplete = resolve;
          this.onError = reject;
          Emit2(this, "start");
          this.nextFile();
        } else {
          this.progress = 1;
          Emit2(this, "complete");
          resolve();
        }
      });
    }
    nextFile() {
      let limit = this.queue.size;
      if (this.maxParallelDownloads !== -1) {
        limit = Math.min(limit, this.maxParallelDownloads) - this.inflight.size;
      }
      if (limit) {
        const iterator = this.queue.values();
        while (limit > 0) {
          const file = iterator.next().value;
          this.inflight.add(file);
          this.queue.delete(file);
          file.load().then((file2) => this.fileComplete(file2)).catch((file2) => this.fileError(file2));
          limit--;
        }
      } else if (this.inflight.size === 0) {
        this.stop();
      }
    }
    stop() {
      if (!this.isLoading) {
        return;
      }
      this.isLoading = false;
      Emit2(this, "complete", this.completed);
      this.onComplete();
      this.completed.clear();
    }
    updateProgress(file) {
      this.inflight.delete(file);
      this.completed.add(file);
      const totalCompleted = this.completed.size;
      const totalQueued = this.queue.size + this.inflight.size;
      if (totalCompleted > 0) {
        this.progress = totalCompleted / (totalCompleted + totalQueued);
      }
      Emit2(this, "progress", this.progress, totalCompleted, totalQueued);
      this.nextFile();
    }
    fileComplete(file) {
      Emit2(this, "filecomplete", file);
      this.updateProgress(file);
    }
    fileError(file) {
      Emit2(this, "fileerror", file);
      this.updateProgress(file);
    }
    totalFilesToLoad() {
      return this.queue.size + this.inflight.size;
    }
    setBaseURL(url = "") {
      if (url !== "" && url.substr(-1) !== "/") {
        url = url.concat("/");
      }
      this.baseURL = url;
      return this;
    }
    setPath(path = "") {
      if (path !== "" && path.substr(-1) !== "/") {
        path = path.concat("/");
      }
      this.path = path;
      return this;
    }
    setCORS(crossOrigin) {
      this.crossOrigin = crossOrigin;
      return this;
    }
    setMaxParallelDownloads(max) {
      this.maxParallelDownloads = max;
      return this;
    }
  }

  // node_modules/@phaserjs/phaser/index-b8bee4bd.js
  var index61 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    File: File2,
    Files: index60,
    Loader: Loader2
  });

  // node_modules/@phaserjs/phaser/materials3d/BlackPlastic.js
  const BlackPlastic2 = new Material3({
    ambient: [0, 0, 0],
    diffuse: [0.01, 0.01, 0.01],
    specular: [0.5, 0.5, 0.5],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/BlackRubber.js
  const BlackRubber2 = new Material3({
    ambient: [0.02, 0.02, 0.02],
    diffuse: [0.01, 0.01, 0.01],
    specular: [0.4, 0.4, 0.4],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/materials3d/Brass.js
  const Brass2 = new Material3({
    ambient: [0.329412, 0.223529, 0.027451],
    diffuse: [0.780392, 0.568627, 0.113725],
    specular: [0.992157, 0.941176, 0.807843],
    shine: 0.21794872
  });

  // node_modules/@phaserjs/phaser/materials3d/Bronze.js
  const Bronze2 = new Material3({
    ambient: [0.2125, 0.1275, 0.054],
    diffuse: [0.714, 0.4284, 0.18144],
    specular: [0.393548, 0.271906, 0.166721],
    shine: 0.2
  });

  // node_modules/@phaserjs/phaser/materials3d/Chrome.js
  const Chrome2 = new Material3({
    ambient: [0.25, 0.25, 0.25],
    diffuse: [0.4, 0.4, 0.4],
    specular: [0.774597, 0.774597, 0.774597],
    shine: 0.6
  });

  // node_modules/@phaserjs/phaser/materials3d/Copper.js
  const Copper2 = new Material3({
    ambient: [0.19125, 0.0735, 0.0225],
    diffuse: [0.7038, 0.27048, 0.0828],
    specular: [0.256777, 0.137622, 0.086014],
    shine: 0.1
  });

  // node_modules/@phaserjs/phaser/materials3d/CyanPlastic.js
  const CyanPlastic2 = new Material3({
    ambient: [0, 0.1, 0.06],
    diffuse: [0, 0.50980392, 0.50980392],
    specular: [0.50196078, 0.50196078, 0.50196078],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/CyanRubber.js
  const CyanRubber2 = new Material3({
    ambient: [0, 0.05, 0.05],
    diffuse: [0.4, 0.5, 0.5],
    specular: [0.04, 0.7, 0.7],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/materials3d/Emerald.js
  const Emerald2 = new Material3({
    ambient: [0.0215, 0.1745, 0.0215],
    diffuse: [0.07568, 0.61424, 0.07568],
    specular: [0.633, 0.727811, 0.633],
    shine: 0.6
  });

  // node_modules/@phaserjs/phaser/materials3d/Gold.js
  const Gold2 = new Material3({
    ambient: [0.24725, 0.1995, 0.0745],
    diffuse: [0.75164, 0.60648, 0.22648],
    specular: [0.628281, 0.555802, 0.366065],
    shine: 0.4
  });

  // node_modules/@phaserjs/phaser/materials3d/GreenPlastic.js
  const GreenPlastic2 = new Material3({
    ambient: [0, 0, 0],
    diffuse: [0.1, 0.35, 0.1],
    specular: [0.45, 0.55, 0.45],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/GreenRubber.js
  const GreenRubber2 = new Material3({
    ambient: [0, 0.05, 0],
    diffuse: [0.4, 0.5, 0.4],
    specular: [0.04, 0.7, 0.04],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/materials3d/Jade.js
  const Jade2 = new Material3({
    ambient: [0.135, 0.2225, 0.1575],
    diffuse: [0.54, 0.89, 0.63],
    specular: [0.316228, 0.316228, 0.316228],
    shine: 0.1
  });

  // node_modules/@phaserjs/phaser/materials3d/Obsidian.js
  const Obsidian2 = new Material3({
    ambient: [0.05375, 0.05, 0.06625],
    diffuse: [0.18275, 0.17, 0.22525],
    specular: [0.332741, 0.328634, 0.346435],
    shine: 0.3
  });

  // node_modules/@phaserjs/phaser/materials3d/Pearl.js
  const Pearl2 = new Material3({
    ambient: [0.25, 0.20725, 0.20725],
    diffuse: [1, 0.829, 0.829],
    specular: [0.296648, 0.296648, 0.296648],
    shine: 0.088
  });

  // node_modules/@phaserjs/phaser/materials3d/RedPlastic.js
  const RedPlastic2 = new Material3({
    ambient: [0, 0, 0],
    diffuse: [0.5, 0, 0],
    specular: [0.7, 0.6, 0.6],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/RedRubber.js
  const RedRubber2 = new Material3({
    ambient: [0.05, 0, 0],
    diffuse: [0.5, 0.4, 0.4],
    specular: [0.7, 0.04, 0.04],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/materials3d/Ruby.js
  const Ruby2 = new Material3({
    ambient: [0.1745, 0.01175, 0.01175],
    diffuse: [0.61424, 0.04136, 0.04136],
    specular: [0.727811, 0.626959, 0.626959],
    shine: 0.6
  });

  // node_modules/@phaserjs/phaser/materials3d/Silver.js
  const Silver2 = new Material3({
    ambient: [0.19225, 0.19225, 0.19225],
    diffuse: [0.50754, 0.50754, 0.50754],
    specular: [0.508273, 0.508273, 0.508273],
    shine: 0.4
  });

  // node_modules/@phaserjs/phaser/materials3d/Turquoise.js
  const Turquoise2 = new Material3({
    ambient: [0.1, 0.18725, 0.1745],
    diffuse: [0.396, 0.74151, 0.69102],
    specular: [0.297254, 0.30829, 0.306678],
    shine: 0.1
  });

  // node_modules/@phaserjs/phaser/materials3d/WhitePlastic.js
  const WhitePlastic2 = new Material3({
    ambient: [0, 0, 0],
    diffuse: [0.55, 0.55, 0.55],
    specular: [0.7, 0.7, 0.7],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/WhiteRubber.js
  const WhiteRubber2 = new Material3({
    ambient: [0.05, 0.05, 0.05],
    diffuse: [0.5, 0.5, 0.5],
    specular: [0.7, 0.7, 0.7],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/materials3d/YellowPlastic.js
  const YellowPlastic2 = new Material3({
    ambient: [0, 0, 0],
    diffuse: [0.5, 0.5, 0],
    specular: [0.6, 0.6, 0.5],
    shine: 0.25
  });

  // node_modules/@phaserjs/phaser/materials3d/YellowRubber.js
  const YellowRubber2 = new Material3({
    ambient: [0.05, 0.05, 0],
    diffuse: [0.5, 0.5, 0.4],
    specular: [0.7, 0.7, 0.04],
    shine: 0.078125
  });

  // node_modules/@phaserjs/phaser/index-3f5abcd1.js
  var index29 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BlackPlastic: BlackPlastic2,
    BlackRubber: BlackRubber2,
    Brass: Brass2,
    Bronze: Bronze2,
    Chrome: Chrome2,
    Copper: Copper2,
    CyanPlastic: CyanPlastic2,
    CyanRubber: CyanRubber2,
    Emerald: Emerald2,
    Gold: Gold2,
    GreenPlastic: GreenPlastic2,
    GreenRubber: GreenRubber2,
    Jade: Jade2,
    Obsidian: Obsidian2,
    Pearl: Pearl2,
    RedPlastic: RedPlastic2,
    RedRubber: RedRubber2,
    Ruby: Ruby2,
    Silver: Silver2,
    Turquoise: Turquoise2,
    WhitePlastic: WhitePlastic2,
    WhiteRubber: WhiteRubber2,
    YellowPlastic: YellowPlastic2,
    YellowRubber: YellowRubber2
  });

  // node_modules/@phaserjs/phaser/textures/palettes/Arne16.js
  const Arne162 = [
    "#000",
    "#9D9D9D",
    "#FFF",
    "#BE2633",
    "#E06F8B",
    "#493C2B",
    "#A46422",
    "#EB8931",
    "#F7E26B",
    "#2F484E",
    "#44891A",
    "#A3CE27",
    "#1B2632",
    "#005784",
    "#31A2F2",
    "#B2DCEF"
  ];

  // node_modules/@phaserjs/phaser/textures/palettes/C64.js
  const C642 = [
    "#000",
    "#fff",
    "#8b4131",
    "#7bbdc5",
    "#8b41ac",
    "#6aac41",
    "#3931a4",
    "#d5de73",
    "#945a20",
    "#5a4100",
    "#bd736a",
    "#525252",
    "#838383",
    "#acee8b",
    "#7b73de",
    "#acacac"
  ];

  // node_modules/@phaserjs/phaser/textures/palettes/CGA.js
  const CGA2 = [
    "#000",
    "#2234d1",
    "#0c7e45",
    "#44aacc",
    "#8a3622",
    "#5c2e78",
    "#aa5c3d",
    "#b5b5b5",
    "#5e606e",
    "#4c81fb",
    "#6cd947",
    "#7be2f9",
    "#eb8a60",
    "#e23d69",
    "#ffd93f",
    "#fff"
  ];

  // node_modules/@phaserjs/phaser/textures/palettes/JMP.js
  const JMP2 = [
    "#000",
    "#191028",
    "#46af45",
    "#a1d685",
    "#453e78",
    "#7664fe",
    "#833129",
    "#9ec2e8",
    "#dc534b",
    "#e18d79",
    "#d6b97b",
    "#e9d8a1",
    "#216c4b",
    "#d365c8",
    "#afaab9",
    "#f5f4eb"
  ];

  // node_modules/@phaserjs/phaser/textures/palettes/MSX.js
  const MSX2 = [
    "#000",
    "#191028",
    "#46af45",
    "#a1d685",
    "#453e78",
    "#7664fe",
    "#833129",
    "#9ec2e8",
    "#dc534b",
    "#e18d79",
    "#d6b97b",
    "#e9d8a1",
    "#216c4b",
    "#d365c8",
    "#afaab9",
    "#fff"
  ];

  // node_modules/@phaserjs/phaser/textures/palettes/PICO8.js
  const PICO82 = [
    "#000",
    "#1D2B53",
    "#7E2553",
    "#008751",
    "#AB5236",
    "#5F574F",
    "#C2C3C7",
    "#FFF1E8",
    "#FF004D",
    "#FFA300",
    "#FFEC27",
    "#00E436",
    "#29ADFF",
    "#83769C",
    "#FF77A8",
    "#FFCCAA"
  ];

  // node_modules/@phaserjs/phaser/index-d9658fe5.js
  var index53 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Arne16: Arne162,
    C64: C642,
    CGA: CGA2,
    JMP: JMP2,
    MSX: MSX2,
    PICO8: PICO82
  });

  // node_modules/@phaserjs/phaser/index-e94515c0.js
  var index54 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AtlasParser: AtlasParser2,
    BitmapTextParser: BitmapTextParser2,
    SpriteSheetParser: SpriteSheetParser2
  });

  // node_modules/@phaserjs/phaser/textures/types/GridTexture.js
  function GridTexture2(color1, color2, width = 32, height = 32, cols = 2, rows = 2) {
    const ctx = CreateCanvas5(width, height);
    const colWidth = width / cols;
    const rowHeight = height / rows;
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = color2;
    for (let y = 0; y < rows; y++) {
      for (let x = y % 2; x < cols; x += 2) {
        ctx.fillRect(x * colWidth, y * rowHeight, colWidth, rowHeight);
      }
    }
    return new Texture8(ctx.canvas);
  }

  // node_modules/@phaserjs/phaser/textures/types/PixelTexture.js
  function PixelTexture2(config2) {
    const {data = [], palette = Arne162, pixelWidth = 1, pixelHeight = pixelWidth, preRender = null, postRender = null} = config2;
    let {canvas = null, resizeCanvas = true, clearCanvas = true} = config2;
    const width = Math.floor(Math.abs(data[0].length * pixelWidth));
    const height = Math.floor(Math.abs(data.length * pixelHeight));
    if (!canvas) {
      canvas = CreateCanvas5(width, height).canvas;
      resizeCanvas = false;
      clearCanvas = false;
    }
    if (resizeCanvas) {
      canvas.width = width;
      canvas.height = height;
    }
    const ctx = canvas.getContext("2d");
    if (clearCanvas) {
      ctx.clearRect(0, 0, width, height);
    }
    if (preRender) {
      preRender(canvas, ctx);
    }
    for (let y = 0; y < data.length; y++) {
      const row = data[y];
      for (let x = 0; x < row.length; x++) {
        const d = row[x];
        if (d !== "." && d !== " ") {
          ctx.fillStyle = palette[parseInt("0x" + d.toUpperCase())];
          ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
        }
      }
    }
    if (postRender) {
      postRender(canvas, ctx);
    }
    return new Texture8(canvas);
  }

  // node_modules/@phaserjs/phaser/textures/types/RenderTexture.js
  class RenderTexture2 extends Texture8 {
    constructor(renderer, width = 256, height = width) {
      super(null, width, height);
      this.renderer = renderer;
    }
    cls() {
      return this;
    }
    batchStart() {
      return this;
    }
    batchDraw(sprites) {
      for (let i = 0, len = sprites.length; i < len; i++) {
      }
      return this;
    }
    batchEnd() {
      const renderer = this.renderer;
      renderer.reset();
      return this;
    }
    draw(...sprites) {
      this.batchStart();
      this.batchDraw(sprites);
      this.batchEnd();
      return this;
    }
  }

  // node_modules/@phaserjs/phaser/textures/types/SolidColorTexture.js
  function SolidColorTexture2(color = "rgba(0,0,0,0)", width = 32, height = 32) {
    const ctx = CreateCanvas5(width, height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    return new Texture8(ctx.canvas);
  }

  // node_modules/@phaserjs/phaser/index-1f794340.js
  var index26 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CanvasTexture: CanvasTexture3,
    GridTexture: GridTexture2,
    PixelTexture: PixelTexture2,
    RenderTexture: RenderTexture2,
    SolidColorTexture: SolidColorTexture2
  });

  // node_modules/@phaserjs/phaser/textures/SetFilter.js
  function SetFilter2(linear, ...textures) {
    textures.forEach((texture) => {
      if (texture.binding) {
        texture.binding.setFilter(linear);
      }
    });
    return textures;
  }

  // node_modules/@phaserjs/phaser/index-8b6ea70d.js
  var index55 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CreateCanvas: CreateCanvas5,
    Frame: Frame20,
    GetFrames: GetFrames2,
    GetFramesInRange: GetFramesInRange2,
    SetFilter: SetFilter2,
    Palettes: index53,
    Parsers: index54,
    Types: index26,
    Texture: Texture8,
    TextureManager: TextureManager2
  });

  // node_modules/@phaserjs/phaser/time/NOOP.js
  function NOOP30() {
  }

  // node_modules/@phaserjs/phaser/time/AddTimer.js
  function AddTimer2(clock, config2) {
    const {duration = 0, repeat = 0, delay = -1, onStart = NOOP30, onUpdate = NOOP30, onRepeat = NOOP30, onComplete = NOOP30} = config2;
    const timer = {
      elapsed: duration,
      duration,
      repeat,
      delay,
      update: null,
      onStart,
      onUpdate,
      onRepeat,
      onComplete
    };
    timer.update = (delta) => {
      if (timer.delay > 0) {
        timer.delay -= delta;
        if (timer.delay < 0) {
          timer.delay = 0;
        } else {
          return false;
        }
      }
      if (timer.delay === 0) {
        timer.onStart();
        timer.delay = -1;
      }
      if (timer.delay === -1) {
        timer.elapsed -= delta;
        timer.onUpdate(delta, timer.elapsed / timer.duration);
        if (timer.elapsed <= 0) {
          if (timer.repeat > 0) {
            timer.repeat--;
            timer.elapsed = timer.duration;
            timer.onRepeat(timer.repeat);
          } else {
            timer.elapsed = 0;
            timer.onComplete();
          }
        }
      }
      return timer.elapsed === 0;
    };
    clock.events.add(timer);
  }

  // node_modules/@phaserjs/phaser/time/AddDelayedCall.js
  function AddDelayedCall2(clock, delay, callback) {
    AddTimer2(clock, {
      duration: 0,
      delay,
      onComplete: callback
    });
  }

  // node_modules/@phaserjs/phaser/time/Clock.js
  class Clock2 {
    constructor(world2) {
      this.world = world2;
      this.timeScale = 1;
      this.events = new Set();
    }
    update(delta, time) {
      this.now = time;
      delta *= this.timeScale;
      this.events.forEach((timer) => {
        if (timer.update(delta)) {
          this.events.delete(timer);
        }
      });
    }
  }

  // node_modules/@phaserjs/phaser/index-092e3dae.js
  var index15 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    AddDelayedCall: AddDelayedCall2,
    AddTimer: AddTimer2,
    Clock: Clock2,
    NOOP: NOOP30
  });

  // node_modules/@phaserjs/phaser/world/events/WorldRenderEvent.js
  const WorldRenderEvent2 = "worldrender";

  // node_modules/@phaserjs/phaser/world/events/WorldShutdownEvent.js
  const WorldShutdownEvent2 = "worldshutdown";

  // node_modules/@phaserjs/phaser/index-664c5328.js
  var index39 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    WorldRenderEvent: WorldRenderEvent2,
    WorldShutdownEvent: WorldShutdownEvent2
  });

  // node_modules/@phaserjs/phaser/world/CalculateTotalRenderable.js
  function CalculateTotalRenderable4(entry, renderData) {
    renderData.numRendered++;
    renderData.numRenderable++;
    if (entry.node.dirtyFrame >= renderData.gameFrame) {
      renderData.dirtyFrame++;
    }
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        CalculateTotalRenderable4(child, renderData);
      }
    });
  }

  // node_modules/@phaserjs/phaser/world/HasDirtyChildren.js
  function HasDirtyChildren4(parent) {
    if (parent.node.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
      return true;
    }
    const stack = [parent];
    while (stack.length > 0) {
      const entry = stack.pop();
      if (entry.node.isDirty(DIRTY_CONST2.TRANSFORM)) {
        return true;
      }
      const numChildren = entry.children.length;
      if (numChildren > 0) {
        for (let i = 0; i < numChildren; i++) {
          stack.push(entry.children[i]);
        }
      }
    }
    stack.length = 0;
    return false;
  }

  // node_modules/@phaserjs/phaser/world/UpdateCachedLayers.js
  function UpdateCachedLayers4(cachedLayers, dirtyCamera) {
    cachedLayers.forEach((layer) => {
      if (dirtyCamera || HasDirtyChildren4(layer)) {
        layer.node.setDirty(DIRTY_CONST2.CHILD_CACHE);
      } else {
        layer.children.length = 0;
      }
    });
  }

  // node_modules/@phaserjs/phaser/world/WorldDepthFirstSearch.js
  function WorldDepthFirstSearch4(cachedLayers, parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const node = parent.children[i];
      if (node.isRenderable()) {
        const children = [];
        const entry = {node, children};
        output.push(entry);
        if (node.willRenderChildren && node.numChildren > 0) {
          if (node.willCacheChildren) {
            cachedLayers.push(entry);
          }
          WorldDepthFirstSearch4(cachedLayers, node, children);
        }
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/world/BuildRenderList.js
  function BuildRenderList4(world2) {
    const cachedLayers = [];
    const stack = [];
    const entries = WorldDepthFirstSearch4(cachedLayers, world2, stack);
    const renderData = world2.renderData;
    if (cachedLayers.length > 0) {
      UpdateCachedLayers4(cachedLayers, world2.camera.dirtyRender);
    }
    entries.forEach((entry) => {
      if (entry.children.length > 0) {
        CalculateTotalRenderable4(entry, renderData);
      } else {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
          renderData.dirtyFrame++;
        }
      }
    });
    world2.renderList = entries;
    if (world2.forceRefresh) {
      renderData.dirtyFrame++;
      world2.forceRefresh = false;
    }
  }

  // node_modules/@phaserjs/phaser/world/MergeRenderData.js
  function MergeRenderData4(sceneRenderData, worldRenderData) {
    sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
    sceneRenderData.numTotalFrames += worldRenderData.numRendered;
    if (worldRenderData.camera.dirtyRender) {
      sceneRenderData.numDirtyCameras++;
    }
    sceneRenderData.worldData.push(worldRenderData);
  }

  // node_modules/@phaserjs/phaser/world/ResetWorldRenderData.js
  function ResetWorldRenderData2(renderData, gameFrame) {
    renderData.gameFrame = gameFrame;
    renderData.dirtyFrame = 0;
    renderData.numRendered = 0;
    renderData.numRenderable = 0;
  }

  // node_modules/@phaserjs/phaser/world/BaseWorld.js
  class BaseWorld2 extends GameObject2 {
    constructor(scene) {
      super();
      this.forceRefresh = false;
      this.is3D = false;
      this.type = "BaseWorld";
      this.scene = scene;
      this.world = this;
      this.events = new Map();
      this.renderList = [];
      this._updateListener = On2(scene, "update", (delta, time) => this.update(delta, time));
      this._renderListener = On2(scene, "render", (renderData) => this.render(renderData));
      this._shutdownListener = On2(scene, "shutdown", () => this.shutdown());
      Once2(scene, "destroy", () => this.destroy());
    }
    update(delta, time) {
      if (!this.willUpdate) {
        return;
      }
      Emit2(this, UpdateEvent, delta, time, this);
      super.update(delta, time);
    }
    postUpdate(delta, time) {
      Emit2(this, PostUpdateEvent, delta, time, this);
    }
    render(sceneRenderData) {
      const renderData = this.renderData;
      ResetWorldRenderData2(renderData, sceneRenderData.gameFrame);
      if (!this.willRender || !this.visible) {
        return;
      }
      BuildRenderList4(this);
      Emit2(this, WorldRenderEvent2, renderData, this);
      MergeRenderData4(sceneRenderData, renderData);
      this.camera.dirtyRender = false;
    }
    renderGL(renderPass) {
      const currentCamera = renderPass.current2DCamera;
      const camera = this.camera;
      if (!currentCamera || !ExactEquals2(camera.worldTransform, currentCamera.worldTransform)) {
        Flush8(renderPass);
      }
      Begin2(renderPass, camera);
      this.renderList.forEach((entry) => {
        if (entry.children.length > 0) {
          this.renderNode(entry, renderPass);
        } else {
          entry.node.renderGL(renderPass);
        }
      });
    }
    renderNode(entry, renderPass) {
      entry.node.renderGL(renderPass);
      entry.children.forEach((child) => {
        if (child.children.length > 0) {
          this.renderNode(child, renderPass);
        } else {
          child.node.renderGL(renderPass);
        }
      });
      entry.node.postRenderGL(renderPass);
    }
    postRenderGL(renderPass) {
    }
    shutdown() {
      const scene = this.scene;
      Off(scene, "update", this._updateListener);
      Off(scene, "render", this._renderListener);
      Off(scene, "shutdown", this._shutdownListener);
      RemoveChildren(this);
      Emit2(this, WorldShutdownEvent2, this);
      ResetWorldRenderData2(this.renderData, 0);
      if (this.camera) {
        this.camera.reset();
      }
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      Emit2(this, DestroyEvent2, this);
      ResetWorldRenderData2(this.renderData, 0);
      if (this.camera) {
        this.camera.destroy();
      }
      this.events.clear();
      this.camera = null;
      this.renderData = null;
      this.events = null;
    }
  }

  // node_modules/@phaserjs/phaser/world/CreateWorldRenderData.js
  function CreateWorldRenderData2(world2, camera) {
    return {
      world: world2,
      camera,
      gameFrame: 0,
      dirtyFrame: 0,
      numRendered: 0,
      numRenderable: 0
    };
  }

  // node_modules/@phaserjs/phaser/world/StaticWorld.js
  class StaticWorld2 extends BaseWorld2 {
    constructor(scene) {
      super(scene);
      this.type = "StaticWorld";
      this.camera = new StaticCamera();
      this.renderData = CreateWorldRenderData2(this, this.camera);
    }
  }

  // node_modules/@phaserjs/phaser/world/World.js
  class World2 extends BaseWorld2 {
    constructor(scene) {
      super(scene);
      this.enableCameraCull = true;
      this.type = "World";
      this.camera = new Camera();
      this.renderData = CreateWorldRenderData2(this, this.camera);
    }
  }

  // node_modules/@phaserjs/phaser/index-e93b342f.js
  var index67 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BaseWorld: BaseWorld2,
    BuildRenderList: BuildRenderList4,
    CalculateTotalRenderable: CalculateTotalRenderable4,
    CreateWorldRenderData: CreateWorldRenderData2,
    Events: index39,
    HasDirtyChildren: HasDirtyChildren4,
    MergeRenderData: MergeRenderData4,
    ResetWorldRenderData: ResetWorldRenderData2,
    StaticWorld: StaticWorld2,
    UpdateCachedLayers: UpdateCachedLayers4,
    World: World2,
    WorldDepthFirstSearch: WorldDepthFirstSearch4
  });

  // node_modules/@phaserjs/phaser/world3d/events/World3DRenderEvent.js
  const World3DRenderEvent2 = "worldrender";

  // node_modules/@phaserjs/phaser/world3d/events/World3DShutdownEvent.js
  const World3DShutdownEvent2 = "worldshutdown";

  // node_modules/@phaserjs/phaser/index-55bcac39.js
  var index31 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    World3DRenderEvent: World3DRenderEvent2,
    World3DShutdownEvent: World3DShutdownEvent2
  });

  // node_modules/@phaserjs/phaser/world3d/CalculateTotalRenderable.js
  function CalculateTotalRenderable2(entry, renderData) {
    renderData.numRendered++;
    renderData.numRenderable++;
    if (entry.node.dirtyFrame >= renderData.gameFrame) {
      renderData.dirtyFrame++;
    }
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        CalculateTotalRenderable2(child, renderData);
      }
    });
  }

  // node_modules/@phaserjs/phaser/world3d/HasDirtyChildren.js
  function HasDirtyChildren2(parent) {
    if (parent.node.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
      return true;
    }
    const stack = [parent];
    while (stack.length > 0) {
      const entry = stack.pop();
      if (entry.node.isDirty(DIRTY_CONST2.TRANSFORM)) {
        return true;
      }
      const numChildren = entry.children.length;
      if (numChildren > 0) {
        for (let i = 0; i < numChildren; i++) {
          stack.push(entry.children[i]);
        }
      }
    }
    stack.length = 0;
    return false;
  }

  // node_modules/@phaserjs/phaser/world3d/UpdateCachedLayers.js
  function UpdateCachedLayers2(cachedLayers, dirtyCamera) {
    cachedLayers.forEach((layer) => {
      if (dirtyCamera || HasDirtyChildren2(layer)) {
        layer.node.setDirty(DIRTY_CONST2.CHILD_CACHE);
      } else {
        layer.children.length = 0;
      }
    });
  }

  // node_modules/@phaserjs/phaser/world3d/WorldDepthFirstSearch.js
  function WorldDepthFirstSearch2(cachedLayers, parent, output = []) {
    for (let i = 0; i < parent.numChildren; i++) {
      const node = parent.children[i];
      if (node.isRenderable()) {
        const children = [];
        const entry = {node, children};
        output.push(entry);
        if (node.willRenderChildren && node.numChildren > 0) {
          if (node.willCacheChildren) {
            cachedLayers.push(entry);
          }
          WorldDepthFirstSearch2(cachedLayers, node, children);
        }
      }
    }
    return output;
  }

  // node_modules/@phaserjs/phaser/world3d/BuildRenderList.js
  function BuildRenderList2(world2) {
    const cachedLayers = [];
    const stack = [];
    const entries = WorldDepthFirstSearch2(cachedLayers, world2, stack);
    const renderData = world2.renderData;
    if (cachedLayers.length > 0) {
      UpdateCachedLayers2(cachedLayers, world2.camera.dirtyRender);
    }
    entries.forEach((entry) => {
      if (entry.children.length > 0) {
        CalculateTotalRenderable2(entry, renderData);
      } else {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
          renderData.dirtyFrame++;
        }
      }
    });
    world2.renderList = entries;
    if (world2.forceRefresh) {
      renderData.dirtyFrame++;
      world2.forceRefresh = false;
    }
  }

  // node_modules/@phaserjs/phaser/world3d/MergeRenderData.js
  function MergeRenderData2(sceneRenderData, worldRenderData) {
    sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
    sceneRenderData.numTotalFrames += worldRenderData.numRendered;
    if (worldRenderData.camera.dirtyRender) {
      sceneRenderData.numDirtyCameras++;
    }
    sceneRenderData.worldData.push(worldRenderData);
  }

  // node_modules/@phaserjs/phaser/world3d/ResetWorld3DRenderData.js
  function ResetWorld3DRenderData2(renderData, gameFrame) {
    renderData.gameFrame = gameFrame;
    renderData.dirtyFrame = 0;
    renderData.numRendered = 0;
    renderData.numRenderable = 0;
  }

  // node_modules/@phaserjs/phaser/world3d/BaseWorld3D.js
  class BaseWorld3D2 extends GameObject3D {
    constructor(scene) {
      super();
      this.forceRefresh = false;
      this.is3D = true;
      this.type = "BaseWorld";
      this.scene = scene;
      this.world = this;
      this.events = new Map();
      this.renderList = [];
      this._updateListener = On2(scene, "update", (delta, time) => this.update(delta, time));
      this._renderListener = On2(scene, "render", (renderData) => this.render(renderData));
      this._shutdownListener = On2(scene, "shutdown", () => this.shutdown());
      Once2(scene, "destroy", () => this.destroy());
    }
    update(delta, time) {
      if (!this.willUpdate) {
        return;
      }
      Emit2(this, UpdateEvent, delta, time, this);
      super.update(delta, time);
    }
    postUpdate(delta, time) {
      Emit2(this, PostUpdateEvent, delta, time, this);
    }
    render(sceneRenderData) {
      const renderData = this.renderData;
      ResetWorld3DRenderData2(renderData, sceneRenderData.gameFrame);
      if (!this.willRender || !this.visible) {
        return;
      }
      BuildRenderList2(this);
      Emit2(this, World3DRenderEvent2, renderData, this);
      MergeRenderData2(sceneRenderData, renderData);
    }
    renderNode(entry, renderPass) {
      entry.node.renderGL(renderPass);
      entry.children.forEach((child) => {
        if (child.children.length > 0) {
          this.renderNode(child, renderPass);
        } else {
          child.node.renderGL(renderPass);
        }
      });
      entry.node.postRenderGL(renderPass);
    }
    shutdown() {
      const scene = this.scene;
      Off(scene, "update", this._updateListener);
      Off(scene, "render", this._renderListener);
      Off(scene, "shutdown", this._shutdownListener);
      RemoveChildren3D(this);
      Emit2(this, World3DShutdownEvent2, this);
      ResetWorld3DRenderData2(this.renderData, 0);
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      Emit2(this, DestroyEvent2, this);
      ResetWorld3DRenderData2(this.renderData, 0);
      this.events.clear();
      this.camera = null;
      this.renderData = null;
      this.events = null;
    }
  }

  // node_modules/@phaserjs/phaser/world3d/CreateWorld3DRenderData.js
  function CreateWorld3DRenderData2(world2, camera) {
    return {
      world: world2,
      camera,
      gameFrame: 0,
      dirtyFrame: 0,
      numRendered: 0,
      numRenderable: 0
    };
  }

  // node_modules/@phaserjs/phaser/renderer/webgl1/glsl/AMBIENT_LIGHT_FRAG.js
  const AMBIENT_LIGHT_FRAG2 = `#define SHADER_NAME AMBIENT_LIGHT_FRAG\r
\r
precision highp float;\r
\r
uniform vec3 uLightPosition;\r
uniform vec3 uLightAmbient;\r
uniform vec3 uLightDiffuse;\r
uniform vec3 uLightSpecular;\r
\r
uniform vec3 uMaterialAmbient;\r
uniform vec3 uMaterialDiffuse;\r
uniform vec3 uMaterialSpecular;\r
uniform float uMaterialShine;\r
\r
uniform vec3 uCameraPosition;\r
\r
uniform sampler2D uTexture;\r
\r
varying vec2 vTextureCoord;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
\r
void main (void)\r
{\r
    vec4 color = texture2D(uTexture, vTextureCoord);\r
\r
    vec3 ambient = uLightAmbient * uMaterialAmbient;\r
\r
    vec3 norm = normalize(vNormal);\r
    vec3 lightDir = normalize(uLightPosition - vPosition);\r
    float diff = max(dot(norm, lightDir), 0.0);\r
    vec3 diffuse = uLightDiffuse * (diff * uMaterialDiffuse);\r
\r
    vec3 viewDir = normalize(uCameraPosition - vPosition);\r
    vec3 reflectDir = reflect(-lightDir, norm);\r
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), uMaterialShine);\r
    vec3 specular = uLightSpecular * (spec * uMaterialSpecular);\r
\r
    vec3 result = (ambient + diffuse + specular) * color.rgb;\r
\r
    gl_FragColor = vec4(result, color.a);\r
}`;

  // node_modules/@phaserjs/phaser/renderer/webgl1/glsl/AMBIENT_LIGHT_VERT.js
  const AMBIENT_LIGHT_VERT2 = `\r
#define SHADER_NAME AMBIENT_LIGHT_VERT\r
\r
precision highp float;\r
\r
attribute vec3 aVertexPosition;\r
attribute vec3 aVertexNormal;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat4 uViewProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
uniform mat4 uNormalMatrix;\r
\r
varying vec2 vTextureCoord;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
\r
void main(void)\r
{\r
    vTextureCoord = aTextureCoord;\r
\r
    vPosition = vec3(uModelMatrix * vec4(aVertexPosition, 1.0));\r
\r
    vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));\r
\r
    gl_Position = uViewProjectionMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\r
}\r
`;

  // node_modules/@phaserjs/phaser/renderer/webgl1/shaders/AmbientLightShader.js
  class AmbientLightShader2 extends Shader7 {
    constructor() {
      super();
      const tempMat4 = new Float32Array(16).fill(0);
      const tempVec3 = [0, 0, 0];
      const config2 = {
        fragmentShader: AMBIENT_LIGHT_FRAG2,
        vertexShader: AMBIENT_LIGHT_VERT2,
        attributes: {
          aVertexPosition: {size: 3, type: FLOAT, normalized: false, offset: 0},
          aVertexNormal: {size: 3, type: FLOAT, normalized: false, offset: 12},
          aTextureCoord: {size: 2, type: FLOAT, normalized: false, offset: 24}
        },
        uniforms: {
          uViewProjectionMatrix: tempMat4,
          uNormalMatrix: tempMat4,
          uModelMatrix: tempMat4,
          uCameraPosition: tempVec3,
          uTexture: 0,
          uLightPosition: tempVec3,
          uLightAmbient: tempVec3,
          uLightDiffuse: tempVec3,
          uLightSpecular: tempVec3,
          uMaterialAmbient: tempVec3,
          uMaterialDiffuse: tempVec3,
          uMaterialSpecular: tempVec3,
          uMaterialShine: 0
        }
      };
      this.fromConfig(config2);
    }
  }

  // node_modules/@phaserjs/phaser/world3d/World3D.js
  class World3D2 extends BaseWorld3D2 {
    constructor(scene, x = 0, y = 0, z = 0, lightConfig) {
      super(scene);
      this.enableCameraCull = true;
      this.type = "World3D";
      this.camera = new NewCamera3D();
      this.camera.position.set(x, y, z);
      this.light = new Light(lightConfig);
      this.shader = new AmbientLightShader2();
      this.renderData = CreateWorld3DRenderData2(this, this.camera);
    }
    renderGL(renderPass) {
      Flush8(renderPass);
      const shader = this.shader;
      const camera = this.camera;
      const gl2 = renderPass.renderer.gl;
      SetShader7(renderPass, shader, 0);
      shader.setUniform("uViewProjectionMatrix", camera.viewProjectionMatrix.data);
      shader.setUniform("uCameraPosition", camera.position.toArray());
      this.light.setUniforms(shader);
      gl2.enable(gl2.DEPTH_TEST);
      this.renderList.forEach((entry) => {
        if (entry.children.length > 0) {
          this.renderNode(entry, renderPass);
        } else {
          entry.node.renderGL(renderPass);
        }
      });
    }
    postRenderGL(renderPass) {
      const gl2 = renderPass.renderer.gl;
      gl2.disable(gl2.DEPTH_TEST);
      gl2.disable(gl2.CULL_FACE);
      PopShader7(renderPass);
    }
  }

  // node_modules/@phaserjs/phaser/index-404a9706.js
  var index32 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BaseWorld3D: BaseWorld3D2,
    BuildRenderList: BuildRenderList2,
    CalculateTotalRenderable: CalculateTotalRenderable2,
    CreateWorld3DRenderData: CreateWorld3DRenderData2,
    Events: index31,
    HasDirtyChildren: HasDirtyChildren2,
    MergeRenderData: MergeRenderData2,
    ResetWorld3DRenderData: ResetWorld3DRenderData2,
    UpdateCachedLayers: UpdateCachedLayers2,
    World3D: World3D2,
    WorldDepthFirstSearch: WorldDepthFirstSearch2
  });

  // node_modules/@phaserjs/phaser/scenes/GetConfigValue.js
  function GetConfigValue2(config2, property, defaultValue) {
    if (Object.prototype.hasOwnProperty.call(config2, property)) {
      return config2[property];
    } else {
      return defaultValue;
    }
  }

  // node_modules/@phaserjs/phaser/scenes/Install.js
  function Install2(scene, config2 = {}) {
    const sceneManager = SceneManagerInstance4.get();
    const size = sceneManager.scenes.size;
    const sceneIndex = sceneManager.sceneIndex;
    const firstScene = size === 0;
    if (typeof config2 === "string") {
      scene.key = config2;
    } else if (config2 || !config2 && firstScene) {
      scene.key = GetConfigValue2(config2, "key", "scene" + sceneIndex.toString());
    }
    if (sceneManager.scenes.has(scene.key)) {
      console.warn("Scene key already in use: " + scene.key);
    } else {
      sceneManager.scenes.set(scene.key, scene);
      sceneManager.flush = true;
      sceneManager.sceneIndex++;
    }
  }

  // node_modules/@phaserjs/phaser/scenes/Scene.js
  class Scene2 {
    constructor(config2) {
      this.game = GameInstance2.get();
      this.events = new Map();
      Install2(this, config2);
    }
  }

  // node_modules/@phaserjs/phaser/index.js

  // node_modules/@phaserjs/phaser/display/index.js

  // node_modules/@phaserjs/phaser/loader/files/index.js

  // node_modules/@phaserjs/phaser/gameobjects/index.js

  // node_modules/@phaserjs/phaser/world/index.js

  // src/main.ts
  class Demo extends Scene2 {
    constructor() {
      super();
      ImageFile2("logo", "assets/logo.png").load().then(() => {
        const world2 = new StaticWorld2(this);
        const logo = new Sprite2(400, 300, "logo");
        const logo2 = new Sprite2(450, 350, "logo");
        const logo3 = new Sprite2(500, 400, "logo");
        AddChild(world2, logo);
        AddChild(world2, logo2);
        AddChild(world2, logo3);
      });
    }
  }
  new Game(WebGL2(), Size2(800, 600), Parent2("game"), BackgroundColor(2960685), Scenes2(Demo));
})();
//# sourceMappingURL=bundle.js.map
