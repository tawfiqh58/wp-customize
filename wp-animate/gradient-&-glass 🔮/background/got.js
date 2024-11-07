(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    
    6174: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            AnimatedGradient: function() {
                return E
            },
            AnimatedGradientGenerator: function() {
                return _
            }
        });
        var i = n(1527)
          , r = n(5420)
          , s = n(5924)
          , a = n(9013)
          , o = n(2686)
          , u = n(2861)
          , l = n(558)
          , h = n(9151)
          , c = n(8007);
        class d extends c.Z {
            constructor(e, {attributes: t={}}={}) {
                Object.assign(t, {
                    position: {
                        size: 2,
                        data: new Float32Array([-1, -1, 3, -1, -1, 3])
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array([0, 0, 2, 0, 0, 2])
                    }
                }),
                super(e, t)
            }
        }
        var p = n(8724)
          , f = n(3472)
          , m = n(959)
          , v = n(2590)
          , g = n(4440)
          , y = n(9168)
          , b = n(4509)
          , x = n.n(b);
        class w extends o.x {
            load(e) {
                let t = new Image;
                return t.crossOrigin = "anonymous",
                t.onload = ()=>this.image = t,
                t.src = e,
                this
            }
        }
        let _ = ()=>{
            let e = (0,
            a.o)(e=>e.setAnimatedGradient)
              , t = (0,
            m.useMemo)(()=>new u.S(100 * Math.random(),100 * Math.random()), [])
              , n = (0,
            m.useMemo)(()=>new l.T({
                alpha: !0,
                dpr: .2,
                premultipliedAlpha: !1,
                depth: !1
            }), [])
              , i = (0,
            m.useMemo)(()=>n.gl, [n]);
            (0,
            r.bt)(()=>{
                e(i)
            }
            , [i]);
            let s = (0,
            m.useMemo)(()=>new h.w, [])
              , o = (0,
            m.useMemo)(()=>new d(i), [i])
              , c = (0,
            m.useMemo)(()=>{
                let e = new p.$(i,{
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uGradient: {
                            value: new w(i).load("/images/gradient.jpg")
                        },
                        uOffset: {
                            value: t
                        }
                    },
                    vertex: "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0., 1.);\n}",
                    fragment: "precision highp float;\n#define GLSLIFY 1\n\n\n            //	Simplex 3D Noise \n            //	by Ian McEwan, Ashima Arts\n            //\nvec4 permute(vec4 x) {\n  return mod(((x * 34.0) + 1.0) * x, 289.0);\n}\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v) {\n  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n            // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n            // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n            //  x0 = x0 - 0. + 0.0 * C \n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n            // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n            // Gradients\n            // ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0 / 7.0; // N=7\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)\n\n  vec4 x = x_ * ns.x + ns.yyyy;\n  vec4 y = y_ * ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4(x.xy, y.xy);\n  vec4 b1 = vec4(x.zw, y.zw);\n\n  vec4 s0 = floor(b0) * 2.0 + 1.0;\n  vec4 s1 = floor(b1) * 2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n\n  vec3 p0 = vec3(a0.xy, h.x);\n  vec3 p1 = vec3(a0.zw, h.y);\n  vec3 p2 = vec3(a1.xy, h.z);\n  vec3 p3 = vec3(a1.zw, h.w);\n\n            //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n            // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}\n\nuniform float uTime;\nuniform vec2 uOffset;\nuniform sampler2D uGradient;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n\n  float noise = snoise(vec3(uv, uTime));\n  float noise1 = snoise(vec3(uv + uOffset, uTime));\n  float noise2 = snoise(vec3(uv - uOffset, uTime));\n\n  float alpha = noise + noise1 + noise2;\n\n  float x = 1. - noise;\n  vec3 color = texture2D(uGradient, vec2(x, 0.5)).rgb;\n\n  gl_FragColor.rgb = color;\n  gl_FragColor.a = clamp(0., alpha, 1.);\n}",
                    transparent: !0
                });
                return i.enable(i.BLEND),
                e.setBlendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA),
                e
            }
            , [])
              , g = (0,
            m.useMemo)(()=>new f.K(i,{
                geometry: o,
                program: c
            }), [i, o, c]);
            function y() {
                n.render({
                    scene: g
                })
            }
            (0,
            r.bt)(()=>{
                g.setParent(s)
            }
            , [g, s]),
            (0,
            r.xQ)(e=>{
                c.uniforms.uTime.value = 1e-4 * e,
                y()
            }
            );
            let {width: b, height: x} = (0,
            v.Z)();
            return (0,
            r.bt)(()=>{
                n.setSize(b, x),
                y()
            }
            , [b, x, n]),
            null
        }
          , E = e=>{
            let {className: t, render: n} = e
              , o = (0,
            a.o)(e=>e.animatedGradient)
              , l = (0,
            m.useRef)()
              , h = (0,
            m.useMemo)(()=>document.createElement("canvas"), [])
              , c = (0,
            m.useMemo)(()=>h.getContext("2d"), [h]);
            (0,
            r.bt)(()=>(l.current.appendChild(h),
            ()=>{
                h.remove()
            }
            ), [h]);
            let d = (0,
            m.useMemo)(()=>new u.S(Math.random(),Math.random()), []);
            function p() {
                if (o) {
                    c.clearRect(0, 0, E, A);
                    let e = o.renderer
                      , t = o.canvas;
                    if (E > e.width || A > e.height)
                        c.drawImage(t, 0, 0, t.width, t.height, 0, 0, E, A);
                    else {
                        let n = e.width / E
                          , i = e.height / A
                          , r = t.width / n
                          , s = t.height / i
                          , a = (t.width - r) * d.x
                          , u = (t.height - s) * d.y;
                        r > 0 && s > 0 && c.drawImage(t, Math.floor(a), Math.floor(u), Math.floor(r), Math.floor(s), 0, 0, E, A)
                    }
                }
            }
            let f = (0,
            m.useMemo)(()=>(0,
            y.Z)(), [])
              , v = (0,
            a.o)(e=>e.locomotive)
              , [b,w] = (0,
            m.useState)(void 0);
            (0,
            r.bt)(()=>{
                let e = (e,t,n)=>{
                    let {inView: i} = n;
                    e === f && w(i)
                }
                ;
                return null == v || v.on("call", e),
                ()=>{
                    null == v || v.off("call", e)
                }
            }
            , [v, f]),
            (0,
            r.xQ)(e=>{
                (b || n) && p()
            }
            , 1);
            let[_,{width: E, height: A}] = (0,
            g.Z)();
            return (0,
            r.bt)(()=>{
                h.width = E,
                h.height = A;
                let e = 1;
                d.x > .5 && (e = -1),
                d.y > .5 && (e = -1),
                1 != e && (h.style.transform = "scale(".concat(e, ",").concat(1, ")")),
                p()
            }
            , [E, A, h, d]),
            (0,
            i.jsx)("div", {
                ref(e) {
                    _(e),
                    l.current = e
                },
                className: (0,
                s.Z)(x()["animated-gradient"], t),
                "data-scroll": !0,
                "data-scroll-call": f,
                "data-scroll-repeat": !0
            })
        }
    },
    
    
    7587: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Orb: function() {
                return D
            },
            OrbGenerator: function() {
                return C
            }
        });
        var i = n(1527)
          , r = n(5420)
          , s = n(4883)
          , a = n(9013)
          , o = n(2686)
          , u = n(558)
          , l = n(9151)
          , h = n(7005)
          , c = n(8915);
        let d = new h.y
          , p = new c.A
          , f = new c.A;
        class m extends l.w {
            constructor(e, {near: t=.1, far: n=100, fov: i=45, aspect: r=1, left: s, right: a, bottom: o, top: u, zoom: l=1}={}) {
                super(),
                Object.assign(this, {
                    near: t,
                    far: n,
                    fov: i,
                    aspect: r,
                    left: s,
                    right: a,
                    bottom: o,
                    top: u,
                    zoom: l
                }),
                this.projectionMatrix = new h.y,
                this.viewMatrix = new h.y,
                this.projectionViewMatrix = new h.y,
                this.worldPosition = new c.A,
                this.type = s || a ? "orthographic" : "perspective",
                "orthographic" === this.type ? this.orthographic() : this.perspective()
            }
            perspective({near: e=this.near, far: t=this.far, fov: n=this.fov, aspect: i=this.aspect}={}) {
                return Object.assign(this, {
                    near: e,
                    far: t,
                    fov: n,
                    aspect: i
                }),
                this.projectionMatrix.fromPerspective({
                    fov: n * (Math.PI / 180),
                    aspect: i,
                    near: e,
                    far: t
                }),
                this.type = "perspective",
                this
            }
            orthographic({near: e=this.near, far: t=this.far, left: n=this.left, right: i=this.right, bottom: r=this.bottom, top: s=this.top, zoom: a=this.zoom}={}) {
                return Object.assign(this, {
                    near: e,
                    far: t,
                    left: n,
                    right: i,
                    bottom: r,
                    top: s,
                    zoom: a
                }),
                n /= a,
                i /= a,
                r /= a,
                s /= a,
                this.projectionMatrix.fromOrthogonal({
                    left: n,
                    right: i,
                    bottom: r,
                    top: s,
                    near: e,
                    far: t
                }),
                this.type = "orthographic",
                this
            }
            updateMatrixWorld() {
                return super.updateMatrixWorld(),
                this.viewMatrix.inverse(this.worldMatrix),
                this.worldMatrix.getTranslation(this.worldPosition),
                this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
                this
            }
            lookAt(e) {
                return super.lookAt(e, !0),
                this
            }
            project(e) {
                return e.applyMatrix4(this.viewMatrix),
                e.applyMatrix4(this.projectionMatrix),
                this
            }
            unproject(e) {
                return e.applyMatrix4(d.inverse(this.projectionMatrix)),
                e.applyMatrix4(this.worldMatrix),
                this
            }
            updateFrustum() {
                this.frustum || (this.frustum = [new c.A, new c.A, new c.A, new c.A, new c.A, new c.A]);
                let e = this.projectionViewMatrix;
                this.frustum[0].set(e[3] - e[0], e[7] - e[4], e[11] - e[8]).constant = e[15] - e[12],
                this.frustum[1].set(e[3] + e[0], e[7] + e[4], e[11] + e[8]).constant = e[15] + e[12],
                this.frustum[2].set(e[3] + e[1], e[7] + e[5], e[11] + e[9]).constant = e[15] + e[13],
                this.frustum[3].set(e[3] - e[1], e[7] - e[5], e[11] - e[9]).constant = e[15] - e[13],
                this.frustum[4].set(e[3] - e[2], e[7] - e[6], e[11] - e[10]).constant = e[15] - e[14],
                this.frustum[5].set(e[3] + e[2], e[7] + e[6], e[11] + e[10]).constant = e[15] + e[14];
                for (let t = 0; t < 6; t++) {
                    let n = 1 / this.frustum[t].distance();
                    this.frustum[t].multiply(n),
                    this.frustum[t].constant *= n
                }
            }
            frustumIntersectsMesh(e, t=e.worldMatrix) {
                if (!e.geometry.attributes.position || (e.geometry.bounds && e.geometry.bounds.radius !== 1 / 0 || e.geometry.computeBoundingSphere(),
                !e.geometry.bounds))
                    return !0;
                p.copy(e.geometry.bounds.center),
                p.applyMatrix4(t);
                let n = e.geometry.bounds.radius * t.getMaxScaleOnAxis();
                return this.frustumIntersectsSphere(p, n)
            }
            frustumIntersectsSphere(e, t) {
                for (let n = 0; n < 6; n++) {
                    let i = this.frustum[n]
                      , r = f.copy(i).dot(e) + i.constant;
                    if (r < -t)
                        return !1
                }
                return !0
            }
        }
        var v = n(8007);
        class g extends v.Z {
            constructor(e, {radius: t=.5, widthSegments: n=16, heightSegments: i=Math.ceil(.5 * n), phiStart: r=0, phiLength: s=2 * Math.PI, thetaStart: a=0, thetaLength: o=Math.PI, attributes: u={}}={}) {
                let l = (n + 1) * (i + 1)
                  , h = n * i * 6
                  , d = new Float32Array(3 * l)
                  , p = new Float32Array(3 * l)
                  , f = new Float32Array(2 * l)
                  , m = l > 65536 ? new Uint32Array(h) : new Uint16Array(h)
                  , v = 0
                  , g = 0
                  , y = 0
                  , b = a + o
                  , x = []
                  , w = new c.A;
                for (let _ = 0; _ <= i; _++) {
                    let E = []
                      , A = _ / i;
                    for (let T = 0; T <= n; T++,
                    v++) {
                        let S = T / n
                          , O = -t * Math.cos(r + S * s) * Math.sin(a + A * o)
                          , k = t * Math.cos(a + A * o)
                          , N = t * Math.sin(r + S * s) * Math.sin(a + A * o);
                        d[3 * v] = O,
                        d[3 * v + 1] = k,
                        d[3 * v + 2] = N,
                        w.set(O, k, N).normalize(),
                        p[3 * v] = w.x,
                        p[3 * v + 1] = w.y,
                        p[3 * v + 2] = w.z,
                        f[2 * v] = S,
                        f[2 * v + 1] = 1 - A,
                        E.push(g++)
                    }
                    x.push(E)
                }
                for (let I = 0; I < i; I++)
                    for (let M = 0; M < n; M++) {
                        let C = x[I][M + 1]
                          , D = x[I][M]
                          , R = x[I + 1][M]
                          , F = x[I + 1][M + 1];
                        (0 !== I || a > 0) && (m[3 * y] = C,
                        m[3 * y + 1] = D,
                        m[3 * y + 2] = F,
                        y++),
                        (I !== i - 1 || b < Math.PI) && (m[3 * y] = D,
                        m[3 * y + 1] = R,
                        m[3 * y + 2] = F,
                        y++)
                    }
                Object.assign(u, {
                    position: {
                        size: 3,
                        data: d
                    },
                    normal: {
                        size: 3,
                        data: p
                    },
                    uv: {
                        size: 2,
                        data: f
                    },
                    index: {
                        data: m
                    }
                }),
                super(e, u)
            }
        }
        var y = n(8724)
          , b = n(2861);
        let x = {
            black: "#000000",
            white: "#ffffff",
            red: "#ff0000",
            green: "#00ff00",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            cyan: "#00ffff",
            yellow: "#ffff00",
            orange: "#ff8000"
        };
        function w(e) {
            4 === e.length && (e = e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
            let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t || console.warn(`Unable to convert hex string ${e} to rgb values`),
            [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255]
        }
        function _(e) {
            if (void 0 === e)
                return [0, 0, 0];
            if (3 == arguments.length)
                return arguments;
            if (!isNaN(e)) {
                var t;
                return [((t = parseInt(t = e)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
            }
            return "#" === e[0] ? w(e) : x[e.toLowerCase()] ? w(x[e.toLowerCase()]) : (console.warn("Color format not recognised"),
            [0, 0, 0])
        }
        class E extends Array {
            constructor(e) {
                if (Array.isArray(e))
                    return super(...e);
                return super(..._(...arguments))
            }
            get r() {
                return this[0]
            }
            get g() {
                return this[1]
            }
            get b() {
                return this[2]
            }
            set r(e) {
                this[0] = e
            }
            set g(e) {
                this[1] = e
            }
            set b(e) {
                this[2] = e
            }
            set(e) {
                return Array.isArray(e) ? this.copy(e) : this.copy(_(...arguments))
            }
            copy(e) {
                return this[0] = e[0],
                this[1] = e[1],
                this[2] = e[2],
                this
            }
        }
        var A = n(3472)
          , T = n(959)
          , S = n(2590)
          , O = n(4440)
          , k = n(9168)
          , N = n(114);
        class I extends o.x {
            load(e) {
                let t = new Image;
                return t.crossOrigin = "anonymous",
                t.onload = ()=>this.image = t,
                t.src = e,
                this
            }
        }
        let M = (0,
        N.ZP)(e=>({
            counter: 0,
            increaseCounter: t=>e(e=>{
                let {counter: t} = e;
                return {
                    counter: t + 1
                }
            }
            ),
            decreaseCounter: t=>e(e=>{
                let {counter: t} = e;
                return {
                    counter: Math.max(t - 1, 0)
                }
            }
            ),
            orb: null,
            setOrb: t=>e(e=>({
                orb: t
            }))
        }));
        function C(e) {
            let {className: t} = e
              , n = M(e=>e.setOrb)
              , i = M(e=>e.counter)
              , a = (0,
            T.useMemo)(()=>new u.T({
                dpr: window.devicePixelRatio,
                alpha: !0,
                antialias: !0,
                premultipliedAlpha: !1,
                depth: !1
            }), [])
              , h = (0,
            T.useMemo)(()=>a.gl, [a])
              , [c,d] = (0,
            T.useMemo)(()=>{
                let e = document.createElement("canvas")
                  , t = e.getContext("2d");
                return [e, t]
            }
            , []);
            (0,
            r.bt)(()=>{
                n(c)
            }
            , [c]);
            let p = (0,
            T.useMemo)(()=>new m(h), [h])
              , {width: f, height: v} = (0,
            S.Z)();
            (0,
            r.bt)(()=>{
                p.position.z = 1.55
            }
            , [p]),
            (0,
            r.bt)(()=>{
                let e = Math.round(f > 800 ? Math.min(1024, .457 * f) : .9 * f);
                c.width = e,
                c.height = e,
                a.setSize(e, e),
                p.perspective({
                    aspect: 1
                })
            }
            , [a, p, c, f]);
            let x = (0,
            T.useMemo)(()=>new l.w, [])
              , w = (0,
            T.useMemo)(()=>new g(h,{
                widthSegments: 80,
                heightSegments: 80
            }), [h])
              , _ = (0,
            T.useMemo)(()=>new o.x(h), [h])
              , O = (0,
            T.useMemo)(()=>[100 * Math.random(), 100 * Math.random()], [])
              , k = (0,
            T.useMemo)(()=>{
                let e = new y.$(h,{
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uFresnelPower: {
                            value: 1.5
                        },
                        uOffset: {
                            value: new b.S(O[0],O[1])
                        },
                        uGradient: {
                            value: new I(h).load("/images/gradient.jpg")
                        },
                        uColor3: {
                            value: new E("#E193DE")
                        },
                        uTexture: {
                            value: _
                        }
                    },
                    vertex: "\n            precision highp float;\n\n            ".concat("\n            //	Simplex 4D Noise \n            //	by Ian McEwan, Ashima Arts\n            //\n            vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n            float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\n            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n            float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n            vec4 grad4(float j, vec4 ip){\n            const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n            vec4 p,s;\n\n            p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n            p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n            s = vec4(lessThan(p, vec4(0.0)));\n            p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n            return p;\n            }\n\n            float snoise(vec4 v){\n            const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4\n                                    0.309016994374947451); // (sqrt(5) - 1)/4   F4\n            // First corner\n            vec4 i  = floor(v + dot(v, C.yyyy) );\n            vec4 x0 = v -   i + dot(i, C.xxxx);\n\n            // Other corners\n\n            // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n            vec4 i0;\n\n            vec3 isX = step( x0.yzw, x0.xxx );\n            vec3 isYZ = step( x0.zww, x0.yyz );\n            //  i0.x = dot( isX, vec3( 1.0 ) );\n            i0.x = isX.x + isX.y + isX.z;\n            i0.yzw = 1.0 - isX;\n\n            //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n            i0.y += isYZ.x + isYZ.y;\n            i0.zw += 1.0 - isYZ.xy;\n\n            i0.z += isYZ.z;\n            i0.w += 1.0 - isYZ.z;\n\n            // i0 now contains the unique values 0,1,2,3 in each channel\n            vec4 i3 = clamp( i0, 0.0, 1.0 );\n            vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n            vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n            //  x0 = x0 - 0.0 + 0.0 * C \n            vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\n            vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\n            vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\n            vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;\n\n            // Permutations\n            i = mod(i, 289.0); \n            float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n            vec4 j1 = permute( permute( permute( permute (\n                        i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n                    + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n                    + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n                    + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n            // Gradients\n            // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)\n            // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n\n            vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n            vec4 p0 = grad4(j0,   ip);\n            vec4 p1 = grad4(j1.x, ip);\n            vec4 p2 = grad4(j1.y, ip);\n            vec4 p3 = grad4(j1.z, ip);\n            vec4 p4 = grad4(j1.w, ip);\n\n            // Normalise gradients\n            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n            p0 *= norm.x;\n            p1 *= norm.y;\n            p2 *= norm.z;\n            p3 *= norm.w;\n            p4 *= taylorInvSqrt(dot(p4,p4));\n\n            // Mix contributions from the five corners\n            vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n            vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n            m0 = m0 * m0;\n            m1 = m1 * m1;\n            return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                        + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n            }\n", "\n            \n            attribute vec3 position;\n            attribute vec3 normal;\n            attribute vec2 uv;\n\n            uniform mat4 modelMatrix;\n            uniform mat4 modelViewMatrix;\n            uniform mat4 projectionMatrix;\n            uniform vec3 cameraPosition;\n\n            varying vec3 vWorldNormal;\n            varying vec3 vViewDirection;\n            varying vec3 vNormal;\n            varying vec2 vUv;\n            varying vec3 vPosition;\n\n            uniform vec2 uOffset;\n            uniform float uTime;\n            uniform float uFresnelPower;\n\n            void main() {\n                vUv = uv;\n                vPosition = position;\n\n                vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n                vWorldNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;\n                vViewDirection = normalize(cameraPosition - worldPosition.xyz);\n\n                float noise = snoise(vec4(position * 2. + vec3(uOffset,0.) , uTime));\n\n                vec3 transformed = position * (1. + noise * 0.1);\n\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n            }\n        "),
                    fragment: "\n            precision highp float;\n\n            //	Simplex 3D Noise \n            //	by Ian McEwan, Ashima Arts\n            //\n            vec4 permute(vec4 x) {\n              return mod(((x * 34.0) + 1.0) * x, 289.0);\n            }\n            vec4 taylorInvSqrt(vec4 r) {\n              return 1.79284291400159 - 0.85373472095314 * r;\n            }\n\n            float snoise(vec3 v) {\n              const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\n              const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n                        // First corner\n              vec3 i = floor(v + dot(v, C.yyy));\n              vec3 x0 = v - i + dot(i, C.xxx);\n\n                        // Other corners\n              vec3 g = step(x0.yzx, x0.xyz);\n              vec3 l = 1.0 - g;\n              vec3 i1 = min(g.xyz, l.zxy);\n              vec3 i2 = max(g.xyz, l.zxy);\n\n                        //  x0 = x0 - 0. + 0.0 * C \n              vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n              vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n              vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n                        // Permutations\n              i = mod(i, 289.0);\n              vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n                        // Gradients\n                        // ( N*N points uniformly over a square, mapped onto an octahedron.)\n              float n_ = 1.0 / 7.0; // N=7\n              vec3 ns = n_ * D.wyz - D.xzx;\n\n              vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)\n\n              vec4 x_ = floor(j * ns.z);\n              vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)\n\n              vec4 x = x_ * ns.x + ns.yyyy;\n              vec4 y = y_ * ns.x + ns.yyyy;\n              vec4 h = 1.0 - abs(x) - abs(y);\n\n              vec4 b0 = vec4(x.xy, y.xy);\n              vec4 b1 = vec4(x.zw, y.zw);\n\n              vec4 s0 = floor(b0) * 2.0 + 1.0;\n              vec4 s1 = floor(b1) * 2.0 + 1.0;\n              vec4 sh = -step(h, vec4(0.0));\n\n              vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n              vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n\n              vec3 p0 = vec3(a0.xy, h.x);\n              vec3 p1 = vec3(a0.zw, h.y);\n              vec3 p2 = vec3(a1.xy, h.z);\n              vec3 p3 = vec3(a1.zw, h.w);\n\n                        //Normalise gradients\n              vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n              p0 *= norm.x;\n              p1 *= norm.y;\n              p2 *= norm.z;\n              p3 *= norm.w;\n\n                        // Mix final noise value\n              vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n              m = m * m;\n              return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n            }\n                    \n            uniform float uFresnelPower;\n            uniform float uTime;\n            uniform vec2 uOffset;\n            uniform vec3 uColor3;\n            uniform sampler2D uGradient;\n\n            varying vec3 vWorldNormal;\n            varying vec3 vViewDirection;\n            varying vec3 vNormal;\n            varying vec2 vUv;\n            varying vec3 vPosition;\n\n            void main() {\n                float fresnelFactor = abs(dot(vViewDirection, vWorldNormal));\n                float inversefresnelFactor = 1.0 - fresnelFactor;\n                // Shaping function\n                fresnelFactor = pow(fresnelFactor, uFresnelPower);\n                inversefresnelFactor = pow(inversefresnelFactor, uFresnelPower);\n\n                vec2 uv = vUv;\n\n                float noise = snoise(vec3(uv, uTime));\n                float noise1 = snoise(vec3(uv + uOffset, uTime));\n\n                float alpha = noise + noise1;\n\n                float x = 1. - noise;\n                vec3 color = texture2D(uGradient, vec2(x, 0.5)).rgb;\n\n                vec3 baseColor = mix(uColor3, color, noise);\n\n                gl_FragColor.rgb = max(baseColor,color);\n                gl_FragColor.a = clamp(0.,inversefresnelFactor + max(0.,alpha * 0.25),1.0);\n              }\n        ",
                    transparent: !0
                });
                return e
            }
            , [h])
              , N = (0,
            T.useMemo)(()=>new A.K(h,{
                geometry: w,
                program: k
            }), [h]);
            (0,
            r.bt)(()=>(x.addChild(N),
            ()=>{
                x.removeChild(N)
            }
            ), [N, x]),
            (0,
            r.xQ)(e=>{
                k.uniforms.uTime.value = 2e-4 * e,
                i > 0 && (a.render({
                    scene: x,
                    camera: p
                }),
                d.clearRect(0, 0, c.width, c.height),
                d.drawImage(h.canvas, 0, 0, h.canvas.width, h.canvas.height, 0, 0, c.width, c.height))
            }
            , 0);
            let C = (0,
            T.useContext)(s.NU);
            return (0,
            r.xQ)(()=>{
                let {x: e, y: t} = C();
                k.uniforms.uOffset.value.x = O[0] + .4 * e,
                k.uniforms.uOffset.value.y = O[1] + .4 * t
            }
            ),
            null
        }
        function D(e) {
            let {className: t} = e
              , n = M(e=>e.orb)
              , s = M(e=>e.increaseCounter)
              , o = M(e=>e.decreaseCounter)
              , u = (0,
            T.useRef)()
              , l = (0,
            T.useMemo)(()=>document.createElement("canvas"), [])
              , h = (0,
            T.useMemo)(()=>l.getContext("2d"), [l]);
            (0,
            r.bt)(()=>(u.current.appendChild(l),
            ()=>{
                l.remove()
            }
            ), [l]);
            let c = (0,
            T.useMemo)(()=>new b.S(Math.random(),Math.random()), []);
            function d() {
                n && (h.clearRect(0, 0, y, x),
                h.drawImage(n, 0, 0, n.width, n.height, 0, 0, y, x))
            }
            let p = (0,
            T.useMemo)(()=>(0,
            k.Z)(), [])
              , f = (0,
            a.o)(e=>e.locomotive)
              , [m,v] = (0,
            T.useState)(void 0);
            (0,
            r.bt)(()=>{
                !0 === m ? s() : !1 === m && o()
            }
            , [m]),
            (0,
            r.bt)(()=>()=>{
                o()
            }
            , []),
            (0,
            r.bt)(()=>{
                let e = (e,t,n)=>{
                    let {inView: i} = n;
                    e === p && v(i)
                }
                ;
                return null == f || f.on("call", e),
                ()=>{
                    null == f || f.off("call", e)
                }
            }
            , [f, p]),
            (0,
            r.xQ)(e=>{
                m && d()
            }
            , 1);
            let[g,{width: y, height: x}] = (0,
            O.Z)();
            return (0,
            r.bt)(()=>{
                l.width = y,
                l.height = x,
                l.style.transform = "rotate(".concat(360 * Math.random(), "deg)"),
                d()
            }
            , [y, x, l, c]),
            (0,
            i.jsx)("div", {
                ref(e) {
                    g(e),
                    u.current = e
                },
                className: t,
                "data-scroll": !0,
                "data-scroll-call": p,
                "data-scroll-repeat": !0,
                "data-scroll-offset": "-50%,-50%"
            })
        }
    },
    9013: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return r
            }
        });
        var i = n(114);
        let r = (0,
        i.ZP)((e,t)=>({
            previousPage: void 0,
            setPreviousPage: t=>e(e=>({
                previousPage: t
            })),
            headerContent: void 0,
            setHeaderContent: t=>e(e=>({
                headerContent: t
            })),
            footerContent: void 0,
            setFooterContent: t=>e(e=>({
                footerContent: t
            })),
            navIsOpen: !1,
            setNavIsOpen: t=>e(e=>{
                document.documentElement.classList.toggle("nav", t);
                let n = e.locomotive;
                return t ? null == n || n.stop() : null == n || n.start(),
                {
                    navIsOpen: t
                }
            }
            ),
            locomotive: void 0,
            setLocomotive: t=>e(e=>({
                locomotive: t
            })),
            footerHeight: 0,
            setFooterHeight: t=>e(e=>(document.documentElement.style.setProperty("--footer-height", t + "px"),
            {
                footerHeight: t
            })),
            animatedGradient: null,
            setAnimatedGradient: t=>e(e=>({
                animatedGradient: t
            }))
        }))
    },
    3787: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            let n = s.default
              , r = (null == t ? void 0 : t.suspense) ? {} : {
                loading(e) {
                    let {error: t, isLoading: n, pastDelay: i} = e;
                    return null
                }
            };
            if (e instanceof Promise ? r.loader = ()=>e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = i({}, r, e)),
            (r = i({}, r, t)).suspense && (delete r.ssr,
            delete r.loading),
            r.loadableGenerated && delete (r = i({}, r, r.loadableGenerated)).loadableGenerated,
            "boolean" == typeof r.ssr && !r.suspense) {
                if (!r.ssr)
                    return delete r.ssr,
                    a(n, r);
                delete r.ssr
            }
            return n(r)
        }
        ,
        t.noSSR = a;
        var i = n(5321).Z
          , r = n(1322).Z
          , s = (r(n(959)),
        r(n(6453)));
        function a(e, t) {
            return delete t.webpack,
            delete t.modules,
            e(t)
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    3344: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LoadableContext = void 0;
        var i = (0,
        n(1322).Z)(n(959));
        let r = i.default.createContext(null);
        t.LoadableContext = r
    },
    6453: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = n(5321).Z
          , r = (0,
        n(6687).Z)(n(959))
          , s = n(3344);
        let a = []
          , o = []
          , u = !1;
        function l(e) {
            let t = e()
              , n = {
                loading: !0,
                loaded: null,
                error: null
            };
            return n.promise = t.then(e=>(n.loading = !1,
            n.loaded = e,
            e)).catch(e=>{
                throw n.loading = !1,
                n.error = e,
                e
            }
            ),
            n
        }
        class h {
            promise() {
                return this._res.promise
            }
            retry() {
                this._clearTimeouts(),
                this._res = this._loadFn(this._opts.loader),
                this._state = {
                    pastDelay: !1,
                    timedOut: !1
                };
                let {_res: e, _opts: t} = this;
                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(()=>{
                    this._update({
                        pastDelay: !0
                    })
                }
                , t.delay)),
                "number" == typeof t.timeout && (this._timeout = setTimeout(()=>{
                    this._update({
                        timedOut: !0
                    })
                }
                , t.timeout))),
                this._res.promise.then(()=>{
                    this._update({}),
                    this._clearTimeouts()
                }
                ).catch(e=>{
                    this._update({}),
                    this._clearTimeouts()
                }
                ),
                this._update({})
            }
            _update(e) {
                this._state = i({}, this._state, {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading
                }, e),
                this._callbacks.forEach(e=>e())
            }
            _clearTimeouts() {
                clearTimeout(this._delay),
                clearTimeout(this._timeout)
            }
            getCurrentValue() {
                return this._state
            }
            subscribe(e) {
                return this._callbacks.add(e),
                ()=>{
                    this._callbacks.delete(e)
                }
            }
            constructor(e, t) {
                this._loadFn = e,
                this._opts = t,
                this._callbacks = new Set,
                this._delay = null,
                this._timeout = null,
                this.retry()
            }
        }
        function c(e) {
            return function(e, t) {
                let n = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null,
                    suspense: !1
                }, t);
                n.suspense && (n.lazy = r.default.lazy(n.loader));
                let a = null;
                function l() {
                    if (!a) {
                        let t = new h(e,n);
                        a = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return a.promise()
                }
                if (!u) {
                    let c = n.webpack ? n.webpack() : n.modules;
                    c && o.push(e=>{
                        for (let t of c)
                            if (-1 !== e.indexOf(t))
                                return l()
                    }
                    )
                }
                function d() {
                    l();
                    let e = r.default.useContext(s.LoadableContext);
                    e && Array.isArray(n.modules) && n.modules.forEach(t=>{
                        e(t)
                    }
                    )
                }
                let p = n.suspense ? function(e, t) {
                    return d(),
                    r.default.createElement(n.lazy, i({}, e, {
                        ref: t
                    }))
                }
                : function(e, t) {
                    d();
                    let i = r.useSyncExternalStore(a.subscribe, a.getCurrentValue, a.getCurrentValue);
                    return r.default.useImperativeHandle(t, ()=>({
                        retry: a.retry
                    }), []),
                    r.default.useMemo(()=>{
                        var t;
                        return i.loading || i.error ? r.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: a.retry
                        }) : i.loaded ? r.default.createElement((t = i.loaded) && t.__esModule ? t.default : t, e) : null
                    }
                    , [e, i])
                }
                ;
                return p.preload = ()=>l(),
                p.displayName = "LoadableComponent",
                r.default.forwardRef(p)
            }(l, e)
        }
        function d(e, t) {
            let n = [];
            for (; e.length; ) {
                let i = e.pop();
                n.push(i(t))
            }
            return Promise.all(n).then(()=>{
                if (e.length)
                    return d(e, t)
            }
            )
        }
        c.preloadAll = ()=>new Promise((e,t)=>{
            d(a).then(e, t)
        }
        ),
        c.preloadReady = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return new Promise(t=>{
                let n = ()=>(u = !0,
                t());
                d(o, e).then(n, n)
            }
            )
        }
        ,
        window.__NEXT_PRELOADREADY = c.preloadReady,
        t.default = c
    },
    3257: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return z
            }
        });
        var i = n(1527)
          , r = n(5420)
          , s = n(6174)
          , a = n(9978)
          , o = n(4883)
          , u = n(7587)
          , l = n(2590);
        let h = ()=>{
            let {height: e} = (0,
            l.Z)();
            return (0,
            r.bt)(()=>{
                function e() {
                    document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px")
                }
                return window.addEventListener("resize", e, !1),
                e(),
                ()=>{
                    window.removeEventListener("resize", e, !1)
                }
            }
            , []),
            null
        }
        ;
        var c = n(1345);
        let d = async function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "website"
              , i = {
                website: {
                    spaceId: "08piu91gk050",
                    accessToken: "QX_ndnpCI4MB_DKHltWneBAHRMLn3wVE8UZlwyTXuu0",
                    previewToken: "pd82R9B8dI3IK6hKJo_X60ldJINPUXwGajP_y96erjs"
                },
                blogs: {
                    spaceId: "5vqn43ej3ghk",
                    accessToken: "5jdBt-ADuccBQHEfQEy7irnT-8xO-Y04uJxbwXwG6nE",
                    previewToken: "Oj60Aykl2yKalGOEbcKtqqw3wYb1nbbmSJci6coXGns"
                }
            }[n];
            try {
                let r = "https://graphql.contentful.com/content/v1/spaces/".concat(i.spaceId)
                  , s = new c.GraphQLClient(r,{
                    headers: {
                        authorization: "Bearer ".concat(t.preview ? i.previewToken : i.accessToken)
                    }
                });
                return await s.request(e, t)
            } catch (a) {}
        };
        var p = n(9299)
          , f = n(9013)
          , m = n(9470)
          , v = n.n(m)
          , g = n(319)
          , y = n(581)
          , b = n.n(y)
          , x = n(959)
          , w = function() {
            if ("undefined" != typeof Map)
                return Map;
            function e(e, t) {
                var n = -1;
                return e.some(function(e, i) {
                    return e[0] === t && (n = i,
                    !0)
                }),
                n
            }
            return function() {
                function t() {
                    this.__entries__ = []
                }
                return Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.get = function(t) {
                    var n = e(this.__entries__, t)
                      , i = this.__entries__[n];
                    return i && i[1]
                }
                ,
                t.prototype.set = function(t, n) {
                    var i = e(this.__entries__, t);
                    ~i ? this.__entries__[i][1] = n : this.__entries__.push([t, n])
                }
                ,
                t.prototype.delete = function(t) {
                    var n = this.__entries__
                      , i = e(n, t);
                    ~i && n.splice(i, 1)
                }
                ,
                t.prototype.has = function(t) {
                    return !!~e(this.__entries__, t)
                }
                ,
                t.prototype.clear = function() {
                    this.__entries__.splice(0)
                }
                ,
                t.prototype.forEach = function(e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, i = this.__entries__; n < i.length; n++) {
                        var r = i[n];
                        e.call(t, r[1], r[0])
                    }
                }
                ,
                t
            }()
        }()
          , _ = "undefined" != typeof window && "undefined" != typeof document && window.document === document
          , E = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
          , A = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(E) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        }
          , T = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
          , S = "undefined" != typeof MutationObserver
          , O = function() {
            function e() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = function(e, t) {
                    var n = !1
                      , i = !1
                      , r = 0;
                    function s() {
                        n && (n = !1,
                        e()),
                        i && o()
                    }
                    function a() {
                        A(s)
                    }
                    function o() {
                        var e = Date.now();
                        if (n) {
                            if (e - r < 2)
                                return;
                            i = !0
                        } else
                            n = !0,
                            i = !1,
                            setTimeout(a, 20);
                        r = e
                    }
                    return o
                }(this.refresh.bind(this), 0)
            }
            return e.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_()
            }
            ,
            e.prototype.removeObserver = function(e) {
                var t = this.observers_
                  , n = t.indexOf(e);
                ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_()
            }
            ,
            e.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }
            ,
            e.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                    return e.gatherActive(),
                    e.hasActive()
                });
                return e.forEach(function(e) {
                    return e.broadcastActive()
                }),
                e.length > 0
            }
            ,
            e.prototype.connect_ = function() {
                _ && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
                window.addEventListener("resize", this.refresh),
                S ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                this.mutationEventsAdded_ = !0),
                this.connected_ = !0)
            }
            ,
            e.prototype.disconnect_ = function() {
                _ && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                this.mutationsObserver_ = null,
                this.mutationEventsAdded_ = !1,
                this.connected_ = !1)
            }
            ,
            e.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName
                  , n = void 0 === t ? "" : t;
                T.some(function(e) {
                    return !!~n.indexOf(e)
                }) && this.refresh()
            }
            ,
            e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e),
                this.instance_
            }
            ,
            e.instance_ = null,
            e
        }()
          , k = function(e, t) {
            for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                var r = i[n];
                Object.defineProperty(e, r, {
                    value: t[r],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        }
          , N = function(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView || E
        }
          , I = R(0, 0, 0, 0);
        function M(e) {
            return parseFloat(e) || 0
        }
        function C(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            return t.reduce(function(t, n) {
                return t + M(e["border-" + n + "-width"])
            }, 0)
        }
        var D = "undefined" != typeof SVGGraphicsElement ? function(e) {
            return e instanceof N(e).SVGGraphicsElement
        }
        : function(e) {
            return e instanceof N(e).SVGElement && "function" == typeof e.getBBox
        }
        ;
        function R(e, t, n, i) {
            return {
                x: e,
                y: t,
                width: n,
                height: i
            }
        }
        var F = function() {
            function e(e) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = R(0, 0, 0, 0),
                this.target = e
            }
            return e.prototype.isActive = function() {
                var e = function(e) {
                    if (!_)
                        return I;
                    if (D(e)) {
                        var t;
                        return R(0, 0, (t = e.getBBox()).width, t.height)
                    }
                    return function(e) {
                        var t = e.clientWidth
                          , n = e.clientHeight;
                        if (!t && !n)
                            return I;
                        var i = N(e).getComputedStyle(e)
                          , r = function(e) {
                            for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                                var r = i[n]
                                  , s = e["padding-" + r];
                                t[r] = M(s)
                            }
                            return t
                        }(i)
                          , s = r.left + r.right
                          , a = r.top + r.bottom
                          , o = M(i.width)
                          , u = M(i.height);
                        if ("border-box" === i.boxSizing && (Math.round(o + s) !== t && (o -= C(i, "left", "right") + s),
                        Math.round(u + a) !== n && (u -= C(i, "top", "bottom") + a)),
                        e !== N(e).document.documentElement) {
                            var l = Math.round(o + s) - t
                              , h = Math.round(u + a) - n;
                            1 !== Math.abs(l) && (o -= l),
                            1 !== Math.abs(h) && (u -= h)
                        }
                        return R(r.left, r.top, o, u)
                    }(e)
                }(this.target);
                return this.contentRect_ = e,
                e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }
            ,
            e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width,
                this.broadcastHeight = e.height,
                e
            }
            ,
            e
        }()
          , P = function(e, t) {
            var n, i, r, s, a, o = (n = t.x,
            i = t.y,
            r = t.width,
            s = t.height,
            k(a = Object.create(("undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype), {
                x: n,
                y: i,
                width: r,
                height: s,
                top: i,
                right: n + r,
                bottom: s + i,
                left: n
            }),
            a);
            k(this, {
                target: e,
                contentRect: o
            })
        }
          , L = function() {
            function e(e, t, n) {
                if (this.activeObservations_ = [],
                this.observations_ = new w,
                "function" != typeof e)
                    throw TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e,
                this.controller_ = t,
                this.callbackCtx_ = n
            }
            return e.prototype.observe = function(e) {
                if (!arguments.length)
                    throw TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof N(e).Element))
                        throw TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new F(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh())
                }
            }
            ,
            e.prototype.unobserve = function(e) {
                if (!arguments.length)
                    throw TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof N(e).Element))
                        throw TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) && (t.delete(e),
                    t.size || this.controller_.removeObserver(this))
                }
            }
            ,
            e.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }
            ,
            e.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                this.observations_.forEach(function(t) {
                    t.isActive() && e.activeObservations_.push(t)
                })
            }
            ,
            e.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var e = this.callbackCtx_
                      , t = this.activeObservations_.map(function(e) {
                        return new P(e.target,e.broadcastRect())
                    });
                    this.callback_.call(e, t, e),
                    this.clearActive()
                }
            }
            ,
            e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }
            ,
            e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }
            ,
            e
        }()
          , j = "undefined" != typeof WeakMap ? new WeakMap : new w
          , U = function e(t) {
            if (!(this instanceof e))
                throw TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
            var n = O.getInstance()
              , i = new L(t,n,this);
            j.set(this, i)
        };
        ["observe", "unobserve", "disconnect"].forEach(function(e) {
            U.prototype[e] = function() {
                var t;
                return (t = j.get(this))[e].apply(t, arguments)
            }
        }),
        void 0 !== E.ResizeObserver && E.ResizeObserver,
        n(6945),
        n(8523);
        let B = v()(()=>n.e(685).then(n.bind(n, 3685)).then(e=>{
            let {Stats: t} = e;
            return t
        }
        ), {
            loadableGenerated: {
                webpack: ()=>[3685]
            },
            ssr: !1
        })
          , q = v()(()=>n.e(834).then(n.bind(n, 2834)).then(e=>{
            let {GridDebugger: t} = e;
            return t
        }
        ), {
            loadableGenerated: {
                webpack: ()=>[2834]
            },
            ssr: !1
        });
        function V(e) {
            let {Component: t, pageProps: n, headerContent: l, footerContent: c} = e
              , d = (0,
            f.o)(e=>e.setHeaderContent)
              , p = (0,
            f.o)(e=>e.setFooterContent)
              , m = (0,
            f.o)(e=>e.setPreviousPage)
              , v = (0,
            g.useRouter)()
              , [y,w] = (0,
            x.useState)(!1);
            y || (d(l),
            p(c),
            w(!0));
            let _ = (0,
            r.qi)()
              , E = (0,
            r.h7)();
            return (0,
            x.useEffect)(()=>{
                ("interactive" === E || "complete" === E) && setTimeout(()=>{
                    document.documentElement.classList.add("is-loaded")
                }
                , 200)
            }
            , [E]),
            (0,
            x.useEffect)(()=>{
                let e = e=>{
                    m(window.location.pathname)
                }
                ;
                return v.events.on("routeChangeStart", e),
                ()=>{
                    v.events.off("routeChangeStart", e)
                }
            }
            , [v.events]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [_ && (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)(q, {}), (0,
                    i.jsx)(B, {})]
                }), (0,
                i.jsx)(i.Fragment, {
                    children: (0,
                    i.jsx)(b(), {
                        id: "gtm-base",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: "\n              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','".concat("GTM-MPQGJNK", "');\n          ")
                        }
                    })
                }), (0,
                i.jsx)(h, {}), (0,
                i.jsxs)(a.q, {
                    children: [(0,
                    i.jsx)(s.AnimatedGradientGenerator, {}), (0,
                    i.jsx)(o.UU, {
                        children: (0,
                        i.jsx)(u.OrbGenerator, {})
                    })]
                }), (0,
                i.jsx)(t, {
                    ...n
                })]
            })
        }
        V.getInitialProps = async e=>{
            let {preview: t=!1} = e
              , [n,i] = await Promise.all([d(p.getHeaderById, {
                id: "vtlsZEMGzhmyddRwJj198",
                preview: t
            }), d(p.getFooterById, {
                id: "GyHBIf058XiGAgEysuRzw",
                preview: t
            })])
              , r = n.header
              , s = i.footer;
            return {
                headerContent: r,
                footerContent: s
            }
        }
        ;
        var z = V
    },
    8523: function() {},
    4509: function(e) {
        e.exports = {
            "animated-gradient": "animated-gradient_animated-gradient__UsGIk"
        }
    },
    6945: function() {},
    9470: function(e, t, n) {
        e.exports = n(3787)
    },
    319: function(e, t, n) {
        e.exports = n(4086)
    },
    581: function(e, t, n) {
        e.exports = n(8625)
    },
    4440: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var i = n(959)
          , r = n(1110)
          , s = n.n(r);
        function a(e) {
            var t;
            let {debounce: n, scroll: r, polyfill: a, offsetSize: o} = void 0 === e ? {
                debounce: 0,
                scroll: !1,
                offsetSize: !1
            } : e
              , l = a || ("undefined" == typeof window ? class {
            }
            : window.ResizeObserver);
            if (!l)
                throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
            let[h,c] = (0,
            i.useState)({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0
            })
              , d = (0,
            i.useRef)({
                element: null,
                scrollContainers: null,
                resizeObserver: null,
                lastBounds: h
            })
              , p = n ? "number" == typeof n ? n : n.scroll : null
              , f = n ? "number" == typeof n ? n : n.resize : null
              , m = (0,
            i.useRef)(!1);
            (0,
            i.useEffect)(()=>(m.current = !0,
            ()=>void (m.current = !1)));
            let[v,g,y] = (0,
            i.useMemo)(()=>{
                let e = ()=>{
                    if (!d.current.element)
                        return;
                    let {left: e, top: t, width: n, height: i, bottom: r, right: s, x: a, y: l} = d.current.element.getBoundingClientRect()
                      , h = {
                        left: e,
                        top: t,
                        width: n,
                        height: i,
                        bottom: r,
                        right: s,
                        x: a,
                        y: l
                    };
                    d.current.element instanceof HTMLElement && o && (h.height = d.current.element.offsetHeight,
                    h.width = d.current.element.offsetWidth),
                    Object.freeze(h),
                    m.current && !u(d.current.lastBounds, h) && c(d.current.lastBounds = h)
                }
                ;
                return [e, f ? s()(e, f) : e, p ? s()(e, p) : e]
            }
            , [c, o, p, f]);
            function b() {
                d.current.scrollContainers && (d.current.scrollContainers.forEach(e=>e.removeEventListener("scroll", y, !0)),
                d.current.scrollContainers = null),
                d.current.resizeObserver && (d.current.resizeObserver.disconnect(),
                d.current.resizeObserver = null)
            }
            function x() {
                d.current.element && (d.current.resizeObserver = new l(y),
                d.current.resizeObserver.observe(d.current.element),
                r && d.current.scrollContainers && d.current.scrollContainers.forEach(e=>e.addEventListener("scroll", y, {
                    capture: !0,
                    passive: !0
                })))
            }
            let w = e=>{
                e && e !== d.current.element && (b(),
                d.current.element = e,
                d.current.scrollContainers = function e(t) {
                    let n = [];
                    if (!t || t === document.body)
                        return n;
                    let {overflow: i, overflowX: r, overflowY: s} = window.getComputedStyle(t);
                    return [i, r, s].some(e=>"auto" === e || "scroll" === e) && n.push(t),
                    [...n, ...e(t.parentElement)]
                }(e),
                x())
            }
            ;
            return t = Boolean(r),
            (0,
            i.useEffect)(()=>{
                if (t)
                    return window.addEventListener("scroll", y, {
                        capture: !0,
                        passive: !0
                    }),
                    ()=>void window.removeEventListener("scroll", y, !0)
            }
            , [y, t]),
            (0,
            i.useEffect)(()=>(window.addEventListener("resize", g),
            ()=>void window.removeEventListener("resize", g)), [g]),
            (0,
            i.useEffect)(()=>{
                b(),
                x()
            }
            , [r, y, g]),
            (0,
            i.useEffect)(()=>b, []),
            [w, h, v]
        }
        let o = ["x", "y", "top", "bottom", "left", "right", "width", "height"]
          , u = (e,t)=>o.every(n=>e[n] === t[n])
    },
    2590: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var i = n(959)
          , r = function(e) {
            (0,
            i.useEffect)(e, [])
        }
          , s = function(e) {
            var t = (0,
            i.useRef)(e);
            t.current = e,
            r(function() {
                return function() {
                    return t.current()
                }
            })
        }
          , a = function(e) {
            var t = (0,
            i.useRef)(0)
              , n = (0,
            i.useState)(e)
              , r = n[0]
              , a = n[1]
              , o = (0,
            i.useCallback)(function(e) {
                cancelAnimationFrame(t.current),
                t.current = requestAnimationFrame(function() {
                    a(e)
                })
            }, []);
            return s(function() {
                cancelAnimationFrame(t.current)
            }),
            [r, o]
        }
          , o = "undefined" != typeof window
          , u = function(e, t) {
            void 0 === e && (e = 1 / 0),
            void 0 === t && (t = 1 / 0);
            var n = a({
                width: o ? window.innerWidth : e,
                height: o ? window.innerHeight : t
            })
              , r = n[0]
              , s = n[1];
            return (0,
            i.useEffect)(function() {
                if (o) {
                    var e = function() {
                        s({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                        e && e.addEventListener && e.addEventListener.apply(e, t)
                    }(window, "resize", e),
                    function() {
                        !function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                            e && e.removeEventListener && e.removeEventListener.apply(e, t)
                        }(window, "resize", e)
                    }
                }
            }, []),
            r
        }
    },
    2415: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var i = n(959)
          , r = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , s = i.useState
          , a = i.useEffect
          , o = i.useLayoutEffect
          , u = i.useDebugValue;
        function l(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !r(e, n)
            } catch (i) {
                return !0
            }
        }
        var h = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
            return t()
        }
        : function(e, t) {
            var n = t()
              , i = s({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            })
              , r = i[0].inst
              , h = i[1];
            return o(function() {
                r.value = n,
                r.getSnapshot = t,
                l(r) && h({
                    inst: r
                })
            }, [e, n, t]),
            a(function() {
                return l(r) && h({
                    inst: r
                }),
                e(function() {
                    l(r) && h({
                        inst: r
                    })
                })
            }, [e]),
            u(n),
            n
        }
        ;
        t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h
    },
    2179: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var i = n(959)
          , r = n(4322)
          , s = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , a = r.useSyncExternalStore
          , o = i.useRef
          , u = i.useEffect
          , l = i.useMemo
          , h = i.useDebugValue;
        t.useSyncExternalStoreWithSelector = function(e, t, n, i, r) {
            var c = o(null);
            if (null === c.current) {
                var d = {
                    hasValue: !1,
                    value: null
                };
                c.current = d
            } else
                d = c.current;
            c = l(function() {
                function e(e) {
                    if (!u) {
                        if (u = !0,
                        a = e,
                        e = i(e),
                        void 0 !== r && d.hasValue) {
                            var t = d.value;
                            if (r(t, e))
                                return o = t
                        }
                        return o = e
                    }
                    if (t = o,
                    s(a, e))
                        return t;
                    var n = i(e);
                    return void 0 !== r && r(t, n) ? t : (a = e,
                    o = n)
                }
                var a, o, u = !1, l = void 0 === n ? null : n;
                return [function() {
                    return e(t())
                }
                , null === l ? void 0 : function() {
                    return e(l())
                }
                ]
            }, [t, n, i, r]);
            var p = a(e, c[0], c[1]);
            return u(function() {
                d.hasValue = !0,
                d.value = p
            }, [p]),
            h(p),
            p
        }
    },
    4322: function(e, t, n) {
        "use strict";
        e.exports = n(2415)
    },
    7231: function(e, t, n) {
        "use strict";
        e.exports = n(2179)
    },
    9168: function(e, t, n) {
        "use strict";
        let i;
        n.d(t, {
            Z: function() {
                return h
            }
        });
        let r = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        var s = {
            randomUUID: r
        };
        let a = new Uint8Array(16);
        function o() {
            if (!i && !(i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return i(a)
        }
        let u = [];
        for (let l = 0; l < 256; ++l)
            u.push((l + 256).toString(16).slice(1));
        var h = function(e, t, n) {
            if (s.randomUUID && !t && !e)
                return s.randomUUID();
            e = e || {};
            let i = e.random || (e.rng || o)();
            if (i[6] = 15 & i[6] | 64,
            i[8] = 63 & i[8] | 128,
            t) {
                n = n || 0;
                for (let r = 0; r < 16; ++r)
                    t[n + r] = i[r];
                return t
            }
            return function(e, t=0) {
                return (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase()
            }(i)
        }
    },
    5420: function(e, t, n) {
        "use strict";
        n.d(t, {
            qi: function() {
                return d
            },
            h7: function() {
                return f
            },
            xQ: function() {
                return m
            },
            YQ: function() {
                return v
            },
            bt: function() {
                return p
            },
            ac: function() {
                return g
            },
            Rr: function() {
                return y
            }
        });
        var i = n(959);
        let r = (e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t &= 63) < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_",
        e), "");
        var s = 0;
        function a(e) {
            return "__private_" + s++ + "_" + e
        }
        function o(e, t) {
            if (!Object.prototype.hasOwnProperty.call(e, t))
                throw TypeError("attempted to use private field on non-instance");
            return e
        }
        var u = a("isClient")
          , l = a("callbacks")
          , h = a("raf");
        let c = new class {
            constructor() {
                Object.defineProperty(this, u, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, l, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, h, {
                    writable: !0,
                    value: e=>{
                        requestAnimationFrame(o(this, h)[h]);
                        let t = e - this.now;
                        this.now = e,
                        o(this, l)[l].forEach(({callback: n})=>{
                            n(e, t)
                        }
                        )
                    }
                }),
                o(this, u)[u] = "undefined" != typeof window,
                o(this, l)[l] = [],
                this.now = o(this, u)[u] ? performance.now() : 0,
                o(this, u)[u] && requestAnimationFrame(o(this, h)[h])
            }
            add(e, t=0) {
                let n = r();
                return o(this, l)[l].push({
                    id: n,
                    callback: e,
                    priority: t
                }),
                o(this, l)[l].sort((e,t)=>e.priority - t.priority),
                n
            }
            remove(e) {
                let t = o(this, l)[l].findIndex(t=>e === t.id);
                o(this, l)[l].splice(t, 1)
            }
        }
          , d = ()=>(0,
        i.useMemo)(()=>"undefined" != typeof window && (window.location.href.includes("#debug") || !1), [])
          , p = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect
          , f = "undefined" != typeof window ? function() {
            let[e,t] = (0,
            i.useState)(document.readyState);
            return p(()=>{
                function e() {
                    t(document.readyState)
                }
                return t(document.readyState),
                document.addEventListener("readystatechange", e, !1),
                ()=>document.removeEventListener("readystatechange", e, !1)
            }
            , []),
            e
        }
        : ()=>{}
        ;
        function m(e, t=0) {
            (0,
            i.useEffect)(()=>{
                if (e) {
                    let n = c.add(e, t);
                    return ()=>{
                        c.remove(n)
                    }
                }
            }
            , [e, t])
        }
        let v = ()=>{
            let[e,t] = (0,
            i.useState)(void 0)
              , n = (0,
            i.useCallback)(()=>{
                t("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)
            }
            , []);
            return p(()=>(n(),
            window.addEventListener("resize", n, !1),
            ()=>{
                window.removeEventListener("resize", n, !1)
            }
            ), []),
            e
        }
          , g = e=>{
            let[t,n] = (0,
            i.useState)(void 0)
              , r = (0,
            i.useCallback)(e=>{
                n(e.matches)
            }
            , []);
            return p(()=>{
                let t = window.matchMedia(e);
                return r(t),
                t.addEventListener("change", r),
                ()=>{
                    t.removeEventListener("change", r)
                }
            }
            ),
            t
        }
          , y = (e=[],t=[])=>{
            let n = (0,
            i.useMemo)(()=>t && [t].flat(), [t])
              , r = (0,
            i.useMemo)(()=>e && [e].flat(), [e])
              , s = (0,
            i.useMemo)(()=>n && r && r.map(e=>{
                var t;
                return null == (t = n.find(t=>t.type === e)) ? void 0 : t.props.children
            }
            ), [n, r]);
            return e[0] ? s : s[0]
        }
    },
    6847: function(e, t, n) {
        "use strict";
        function i(e, t) {
            let n = Boolean(e);
            if (!n)
                throw Error(t)
        }
        n.d(t, {
            a: function() {
                return i
            }
        })
    },
    343: function(e, t, n) {
        "use strict";
        function i(e) {
            return function e(t, n) {
                switch (typeof t) {
                case "string":
                    return JSON.stringify(t);
                case "function":
                    return t.name ? `[function ${t.name}]` : "[function]";
                case "object":
                    return function(t, n) {
                        if (null === t)
                            return "null";
                        if (n.includes(t))
                            return "[Circular]";
                        let i = [...n, t];
                        if ("function" == typeof t.toJSON) {
                            let r = t.toJSON();
                            if (r !== t)
                                return "string" == typeof r ? r : e(r, i)
                        } else if (Array.isArray(t))
                            return function(t, n) {
                                if (0 === t.length)
                                    return "[]";
                                if (n.length > 2)
                                    return "[Array]";
                                let i = Math.min(10, t.length)
                                  , r = t.length - i
                                  , s = [];
                                for (let a = 0; a < i; ++a)
                                    s.push(e(t[a], n));
                                return 1 === r ? s.push("... 1 more item") : r > 1 && s.push(`... ${r} more items`),
                                "[" + s.join(", ") + "]"
                            }(t, i);
                        return function(t, n) {
                            let i = Object.entries(t);
                            if (0 === i.length)
                                return "{}";
                            if (n.length > 2)
                                return "[" + function(e) {
                                    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                    if ("Object" === t && "function" == typeof e.constructor) {
                                        let n = e.constructor.name;
                                        if ("string" == typeof n && "" !== n)
                                            return n
                                    }
                                    return t
                                }(t) + "]";
                            let r = i.map(([t,i])=>t + ": " + e(i, n));
                            return "{ " + r.join(", ") + " }"
                        }(t, i)
                    }(t, n);
                default:
                    return String(t)
                }
            }(e, [])
        }
        n.d(t, {
            X: function() {
                return i
            }
        })
    },
    4129: function(e, t, n) {
        "use strict";
        var i, r;
        n.d(t, {
            UG: function() {
                return l
            },
            WU: function() {
                return a
            },
            Ye: function() {
                return s
            },
            h8: function() {
                return o
            },
            ku: function() {
                return i
            }
        });
        class s {
            constructor(e, t, n) {
                this.start = e.start,
                this.end = t.end,
                this.startToken = e,
                this.endToken = t,
                this.source = n
            }
            get[Symbol.toStringTag]() {
                return "Location"
            }
            toJSON() {
                return {
                    start: this.start,
                    end: this.end
                }
            }
        }
        class a {
            constructor(e, t, n, i, r, s) {
                this.kind = e,
                this.start = t,
                this.end = n,
                this.line = i,
                this.column = r,
                this.value = s,
                this.prev = null,
                this.next = null
            }
            get[Symbol.toStringTag]() {
                return "Token"
            }
            toJSON() {
                return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column
                }
            }
        }
        let o = {
            Name: [],
            Document: ["definitions"],
            OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
            VariableDefinition: ["variable", "type", "defaultValue", "directives"],
            Variable: ["name"],
            SelectionSet: ["selections"],
            Field: ["alias", "name", "arguments", "directives", "selectionSet"],
            Argument: ["name", "value"],
            FragmentSpread: ["name", "directives"],
            InlineFragment: ["typeCondition", "directives", "selectionSet"],
            FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
            IntValue: [],
            FloatValue: [],
            StringValue: [],
            BooleanValue: [],
            NullValue: [],
            EnumValue: [],
            ListValue: ["values"],
            ObjectValue: ["fields"],
            ObjectField: ["name", "value"],
            Directive: ["name", "arguments"],
            NamedType: ["name"],
            ListType: ["type"],
            NonNullType: ["type"],
            SchemaDefinition: ["description", "directives", "operationTypes"],
            OperationTypeDefinition: ["type"],
            ScalarTypeDefinition: ["description", "name", "directives"],
            ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
            FieldDefinition: ["description", "name", "arguments", "type", "directives"],
            InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
            InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
            UnionTypeDefinition: ["description", "name", "directives", "types"],
            EnumTypeDefinition: ["description", "name", "directives", "values"],
            EnumValueDefinition: ["description", "name", "directives"],
            InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
            DirectiveDefinition: ["description", "name", "arguments", "locations"],
            SchemaExtension: ["directives", "operationTypes"],
            ScalarTypeExtension: ["name", "directives"],
            ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
            InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
            UnionTypeExtension: ["name", "directives", "types"],
            EnumTypeExtension: ["name", "directives", "values"],
            InputObjectTypeExtension: ["name", "directives", "fields"]
        }
          , u = new Set(Object.keys(o));
        function l(e) {
            let t = null == e ? void 0 : e.kind;
            return "string" == typeof t && u.has(t)
        }
        (r = i || (i = {})).QUERY = "query",
        r.MUTATION = "mutation",
        r.SUBSCRIPTION = "subscription"
    },
    5186: function(e, t, n) {
        "use strict";
        n.d(t, {
            LZ: function() {
                return s
            },
            wv: function() {
                return r
            }
        });
        var i = n(5318);
        function r(e) {
            var t, n;
            let r = Number.MAX_SAFE_INTEGER
              , s = null
              , a = -1;
            for (let o = 0; o < e.length; ++o) {
                let u = e[o]
                  , l = function(e) {
                    let t = 0;
                    for (; t < e.length && (0,
                    i.FD)(e.charCodeAt(t)); )
                        ++t;
                    return t
                }(u);
                l !== u.length && (s = null !== (n = s) && void 0 !== n ? n : o,
                a = o,
                0 !== o && l < r && (r = l))
            }
            return e.map((e,t)=>0 === t ? e : e.slice(r)).slice(null !== (t = s) && void 0 !== t ? t : 0, a + 1)
        }
        function s(e, t) {
            let n = e.replace(/"""/g, '\\"""')
              , r = n.split(/\r\n|[\n\r]/g)
              , s = 1 === r.length
              , a = r.length > 1 && r.slice(1).every(e=>0 === e.length || (0,
            i.FD)(e.charCodeAt(0)))
              , o = n.endsWith('\\"""')
              , u = e.endsWith('"') && !o
              , l = e.endsWith("\\")
              , h = u || l
              , c = !(null != t && t.minimize) && (!s || e.length > 70 || h || a || o)
              , d = ""
              , p = s && (0,
            i.FD)(e.charCodeAt(0));
            return (c && !p || a) && (d += "\n"),
            d += n,
            (c || h) && (d += "\n"),
            '"""' + d + '"""'
        }
    },
    5318: function(e, t, n) {
        "use strict";
        function i(e) {
            return 9 === e || 32 === e
        }
        function r(e) {
            return e >= 48 && e <= 57
        }
        function s(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }
        function a(e) {
            return s(e) || 95 === e
        }
        function o(e) {
            return s(e) || r(e) || 95 === e
        }
        n.d(t, {
            FD: function() {
                return i
            },
            HQ: function() {
                return o
            },
            LQ: function() {
                return a
            },
            X1: function() {
                return r
            }
        })
    },
    3511: function(e, t, n) {
        "use strict";
        var i, r;
        n.d(t, {
            h: function() {
                return i
            }
        }),
        (r = i || (i = {})).NAME = "Name",
        r.DOCUMENT = "Document",
        r.OPERATION_DEFINITION = "OperationDefinition",
        r.VARIABLE_DEFINITION = "VariableDefinition",
        r.SELECTION_SET = "SelectionSet",
        r.FIELD = "Field",
        r.ARGUMENT = "Argument",
        r.FRAGMENT_SPREAD = "FragmentSpread",
        r.INLINE_FRAGMENT = "InlineFragment",
        r.FRAGMENT_DEFINITION = "FragmentDefinition",
        r.VARIABLE = "Variable",
        r.INT = "IntValue",
        r.FLOAT = "FloatValue",
        r.STRING = "StringValue",
        r.BOOLEAN = "BooleanValue",
        r.NULL = "NullValue",
        r.ENUM = "EnumValue",
        r.LIST = "ListValue",
        r.OBJECT = "ObjectValue",
        r.OBJECT_FIELD = "ObjectField",
        r.DIRECTIVE = "Directive",
        r.NAMED_TYPE = "NamedType",
        r.LIST_TYPE = "ListType",
        r.NON_NULL_TYPE = "NonNullType",
        r.SCHEMA_DEFINITION = "SchemaDefinition",
        r.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition",
        r.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition",
        r.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition",
        r.FIELD_DEFINITION = "FieldDefinition",
        r.INPUT_VALUE_DEFINITION = "InputValueDefinition",
        r.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition",
        r.UNION_TYPE_DEFINITION = "UnionTypeDefinition",
        r.ENUM_TYPE_DEFINITION = "EnumTypeDefinition",
        r.ENUM_VALUE_DEFINITION = "EnumValueDefinition",
        r.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition",
        r.DIRECTIVE_DEFINITION = "DirectiveDefinition",
        r.SCHEMA_EXTENSION = "SchemaExtension",
        r.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension",
        r.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension",
        r.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension",
        r.UNION_TYPE_EXTENSION = "UnionTypeExtension",
        r.ENUM_TYPE_EXTENSION = "EnumTypeExtension",
        r.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
    },
    7468: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Parser: function() {
                return F
            },
            parse: function() {
                return M
            },
            parseConstValue: function() {
                return D
            },
            parseType: function() {
                return R
            },
            parseValue: function() {
                return C
            }
        });
        let i = /\r\n|[\n\r]/g;
        function r(e, t) {
            let n = 0
              , r = 1;
            for (let s of e.body.matchAll(i)) {
                if ("number" == typeof s.index || function(e, t) {
                    let n = Boolean(e);
                    if (!n)
                        throw Error(null != t ? t : "Unexpected invariant triggered.")
                }(!1),
                s.index >= t)
                    break;
                n = s.index + s[0].length,
                r += 1
            }
            return {
                line: r,
                column: t + 1 - n
            }
        }
        function s(e, t) {
            let n = e.locationOffset.column - 1
              , i = "".padStart(n) + e.body
              , r = t.line - 1
              , s = e.locationOffset.line - 1
              , o = t.line + s
              , u = 1 === t.line ? n : 0
              , l = t.column + u
              , h = `${e.name}:${o}:${l}
`
              , c = i.split(/\r\n|[\n\r]/g)
              , d = c[r];
            if (d.length > 120) {
                let p = Math.floor(l / 80)
                  , f = [];
                for (let m = 0; m < d.length; m += 80)
                    f.push(d.slice(m, m + 80));
                return h + a([[`${o} |`, f[0]], ...f.slice(1, p + 1).map(e=>["|", e]), ["|", "^".padStart(l % 80)], ["|", f[p + 1]]])
            }
            return h + a([[`${o - 1} |`, c[r - 1]], [`${o} |`, d], ["|", "^".padStart(l)], [`${o + 1} |`, c[r + 1]]])
        }
        function a(e) {
            let t = e.filter(([e,t])=>void 0 !== t)
              , n = Math.max(...t.map(([e])=>e.length));
            return t.map(([e,t])=>e.padStart(n) + (t ? " " + t : "")).join("\n")
        }
        class o extends Error {
            constructor(e, ...t) {
                var n, i, s, a;
                let {nodes: l, source: h, positions: c, path: d, originalError: p, extensions: f} = function(e) {
                    let t = e[0];
                    return null == t || "kind"in t || "length"in t ? {
                        nodes: t,
                        source: e[1],
                        positions: e[2],
                        path: e[3],
                        originalError: e[4],
                        extensions: e[5]
                    } : t
                }(t);
                super(e),
                this.name = "GraphQLError",
                this.path = null != d ? d : void 0,
                this.originalError = null != p ? p : void 0,
                this.nodes = u(Array.isArray(l) ? l : l ? [l] : void 0);
                let m = u(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e=>e.loc).filter(e=>null != e));
                this.source = null != h ? h : null == m ? void 0 : null === (i = m[0]) || void 0 === i ? void 0 : i.source,
                this.positions = null != c ? c : null == m ? void 0 : m.map(e=>e.start),
                this.locations = c && h ? c.map(e=>r(h, e)) : null == m ? void 0 : m.map(e=>r(e.source, e.start));
                let v = "object" == typeof (a = null == p ? void 0 : p.extensions) && null !== a ? null == p ? void 0 : p.extensions : void 0;
                this.extensions = null !== (s = null != f ? f : v) && void 0 !== s ? s : Object.create(null),
                Object.defineProperties(this, {
                    message: {
                        writable: !0,
                        enumerable: !0
                    },
                    name: {
                        enumerable: !1
                    },
                    nodes: {
                        enumerable: !1
                    },
                    source: {
                        enumerable: !1
                    },
                    positions: {
                        enumerable: !1
                    },
                    originalError: {
                        enumerable: !1
                    }
                }),
                null != p && p.stack ? Object.defineProperty(this, "stack", {
                    value: p.stack,
                    writable: !0,
                    configurable: !0
                }) : Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0
                })
            }
            get[Symbol.toStringTag]() {
                return "GraphQLError"
            }
            toString() {
                let e = this.message;
                if (this.nodes) {
                    for (let t of this.nodes)
                        if (t.loc) {
                            var n;
                            e += "\n\n" + s((n = t.loc).source, r(n.source, n.start))
                        }
                } else if (this.source && this.locations)
                    for (let i of this.locations)
                        e += "\n\n" + s(this.source, i);
                return e
            }
            toJSON() {
                let e = {
                    message: this.message
                };
                return null != this.locations && (e.locations = this.locations),
                null != this.path && (e.path = this.path),
                null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions),
                e
            }
        }
        function u(e) {
            return void 0 === e || 0 === e.length ? void 0 : e
        }
        function l(e, t, n) {
            return new o(`Syntax Error: ${n}`,{
                source: e,
                positions: [t]
            })
        }
        var h, c, d, p, f = n(4129);
        (h = d || (d = {})).QUERY = "QUERY",
        h.MUTATION = "MUTATION",
        h.SUBSCRIPTION = "SUBSCRIPTION",
        h.FIELD = "FIELD",
        h.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
        h.FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
        h.INLINE_FRAGMENT = "INLINE_FRAGMENT",
        h.VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
        h.SCHEMA = "SCHEMA",
        h.SCALAR = "SCALAR",
        h.OBJECT = "OBJECT",
        h.FIELD_DEFINITION = "FIELD_DEFINITION",
        h.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
        h.INTERFACE = "INTERFACE",
        h.UNION = "UNION",
        h.ENUM = "ENUM",
        h.ENUM_VALUE = "ENUM_VALUE",
        h.INPUT_OBJECT = "INPUT_OBJECT",
        h.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
        var m = n(3511)
          , v = n(5186)
          , g = n(5318);
        (c = p || (p = {})).SOF = "<SOF>",
        c.EOF = "<EOF>",
        c.BANG = "!",
        c.DOLLAR = "$",
        c.AMP = "&",
        c.PAREN_L = "(",
        c.PAREN_R = ")",
        c.SPREAD = "...",
        c.COLON = ":",
        c.EQUALS = "=",
        c.AT = "@",
        c.BRACKET_L = "[",
        c.BRACKET_R = "]",
        c.BRACE_L = "{",
        c.PIPE = "|",
        c.BRACE_R = "}",
        c.NAME = "Name",
        c.INT = "Int",
        c.FLOAT = "Float",
        c.STRING = "String",
        c.BLOCK_STRING = "BlockString",
        c.COMMENT = "Comment";
        class y {
            constructor(e) {
                let t = new f.WU(p.SOF,0,0,0,0);
                this.source = e,
                this.lastToken = t,
                this.token = t,
                this.line = 1,
                this.lineStart = 0
            }
            get[Symbol.toStringTag]() {
                return "Lexer"
            }
            advance() {
                this.lastToken = this.token;
                let e = this.token = this.lookahead();
                return e
            }
            lookahead() {
                let e = this.token;
                if (e.kind !== p.EOF)
                    do
                        if (e.next)
                            e = e.next;
                        else {
                            let t = function(e, t) {
                                let n = e.source.body
                                  , i = n.length
                                  , r = t;
                                for (; r < i; ) {
                                    let s = n.charCodeAt(r);
                                    switch (s) {
                                    case 65279:
                                    case 9:
                                    case 32:
                                    case 44:
                                        ++r;
                                        continue;
                                    case 10:
                                        ++r,
                                        ++e.line,
                                        e.lineStart = r;
                                        continue;
                                    case 13:
                                        10 === n.charCodeAt(r + 1) ? r += 2 : ++r,
                                        ++e.line,
                                        e.lineStart = r;
                                        continue;
                                    case 35:
                                        return function(e, t) {
                                            let n = e.source.body
                                              , i = n.length
                                              , r = t + 1;
                                            for (; r < i; ) {
                                                let s = n.charCodeAt(r);
                                                if (10 === s || 13 === s)
                                                    break;
                                                if (b(s))
                                                    ++r;
                                                else if (x(n, r))
                                                    r += 2;
                                                else
                                                    break
                                            }
                                            return A(e, p.COMMENT, t, r, n.slice(t + 1, r))
                                        }(e, r);
                                    case 33:
                                        return A(e, p.BANG, r, r + 1);
                                    case 36:
                                        return A(e, p.DOLLAR, r, r + 1);
                                    case 38:
                                        return A(e, p.AMP, r, r + 1);
                                    case 40:
                                        return A(e, p.PAREN_L, r, r + 1);
                                    case 41:
                                        return A(e, p.PAREN_R, r, r + 1);
                                    case 46:
                                        if (46 === n.charCodeAt(r + 1) && 46 === n.charCodeAt(r + 2))
                                            return A(e, p.SPREAD, r, r + 3);
                                        break;
                                    case 58:
                                        return A(e, p.COLON, r, r + 1);
                                    case 61:
                                        return A(e, p.EQUALS, r, r + 1);
                                    case 64:
                                        return A(e, p.AT, r, r + 1);
                                    case 91:
                                        return A(e, p.BRACKET_L, r, r + 1);
                                    case 93:
                                        return A(e, p.BRACKET_R, r, r + 1);
                                    case 123:
                                        return A(e, p.BRACE_L, r, r + 1);
                                    case 124:
                                        return A(e, p.PIPE, r, r + 1);
                                    case 125:
                                        return A(e, p.BRACE_R, r, r + 1);
                                    case 34:
                                        if (34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2))
                                            return function(e, t) {
                                                let n = e.source.body
                                                  , i = n.length
                                                  , r = e.lineStart
                                                  , s = t + 3
                                                  , a = s
                                                  , o = ""
                                                  , u = [];
                                                for (; s < i; ) {
                                                    let h = n.charCodeAt(s);
                                                    if (34 === h && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)) {
                                                        o += n.slice(a, s),
                                                        u.push(o);
                                                        let c = A(e, p.BLOCK_STRING, t, s + 3, (0,
                                                        v.wv)(u).join("\n"));
                                                        return e.line += u.length - 1,
                                                        e.lineStart = r,
                                                        c
                                                    }
                                                    if (92 === h && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) && 34 === n.charCodeAt(s + 3)) {
                                                        o += n.slice(a, s),
                                                        a = s + 1,
                                                        s += 4;
                                                        continue
                                                    }
                                                    if (10 === h || 13 === h) {
                                                        o += n.slice(a, s),
                                                        u.push(o),
                                                        13 === h && 10 === n.charCodeAt(s + 1) ? s += 2 : ++s,
                                                        o = "",
                                                        a = s,
                                                        r = s;
                                                        continue
                                                    }
                                                    if (b(h))
                                                        ++s;
                                                    else if (x(n, s))
                                                        s += 2;
                                                    else
                                                        throw l(e.source, s, `Invalid character within String: ${E(e, s)}.`)
                                                }
                                                throw l(e.source, s, "Unterminated string.")
                                            }(e, r);
                                        return function(e, t) {
                                            let n = e.source.body
                                              , i = n.length
                                              , r = t + 1
                                              , s = r
                                              , a = "";
                                            for (; r < i; ) {
                                                let o = n.charCodeAt(r);
                                                if (34 === o)
                                                    return a += n.slice(s, r),
                                                    A(e, p.STRING, t, r + 1, a);
                                                if (92 === o) {
                                                    a += n.slice(s, r);
                                                    let u = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? function(e, t) {
                                                        let n = e.source.body
                                                          , i = 0
                                                          , r = 3;
                                                        for (; r < 12; ) {
                                                            let s = n.charCodeAt(t + r++);
                                                            if (125 === s) {
                                                                if (r < 5 || !b(i))
                                                                    break;
                                                                return {
                                                                    value: String.fromCodePoint(i),
                                                                    size: r
                                                                }
                                                            }
                                                            if ((i = i << 4 | O(s)) < 0)
                                                                break
                                                        }
                                                        throw l(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + r)}".`)
                                                    }(e, r) : function(e, t) {
                                                        let n = e.source.body
                                                          , i = S(n, t + 2);
                                                        if (b(i))
                                                            return {
                                                                value: String.fromCodePoint(i),
                                                                size: 6
                                                            };
                                                        if (w(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
                                                            let r = S(n, t + 8);
                                                            if (_(r))
                                                                return {
                                                                    value: String.fromCodePoint(i, r),
                                                                    size: 12
                                                                }
                                                        }
                                                        throw l(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
                                                    }(e, r) : function(e, t) {
                                                        let n = e.source.body
                                                          , i = n.charCodeAt(t + 1);
                                                        switch (i) {
                                                        case 34:
                                                            return {
                                                                value: '"',
                                                                size: 2
                                                            };
                                                        case 92:
                                                            return {
                                                                value: "\\",
                                                                size: 2
                                                            };
                                                        case 47:
                                                            return {
                                                                value: "/",
                                                                size: 2
                                                            };
                                                        case 98:
                                                            return {
                                                                value: "\b",
                                                                size: 2
                                                            };
                                                        case 102:
                                                            return {
                                                                value: "\f",
                                                                size: 2
                                                            };
                                                        case 110:
                                                            return {
                                                                value: "\n",
                                                                size: 2
                                                            };
                                                        case 114:
                                                            return {
                                                                value: "\r",
                                                                size: 2
                                                            };
                                                        case 116:
                                                            return {
                                                                value: "	",
                                                                size: 2
                                                            }
                                                        }
                                                        throw l(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
                                                    }(e, r);
                                                    a += u.value,
                                                    r += u.size,
                                                    s = r;
                                                    continue
                                                }
                                                if (10 === o || 13 === o)
                                                    break;
                                                if (b(o))
                                                    ++r;
                                                else if (x(n, r))
                                                    r += 2;
                                                else
                                                    throw l(e.source, r, `Invalid character within String: ${E(e, r)}.`)
                                            }
                                            throw l(e.source, r, "Unterminated string.")
                                        }(e, r)
                                    }
                                    if ((0,
                                    g.X1)(s) || 45 === s)
                                        return function(e, t, n) {
                                            let i = e.source.body
                                              , r = t
                                              , s = n
                                              , a = !1;
                                            if (45 === s && (s = i.charCodeAt(++r)),
                                            48 === s) {
                                                if (s = i.charCodeAt(++r),
                                                (0,
                                                g.X1)(s))
                                                    throw l(e.source, r, `Invalid number, unexpected digit after 0: ${E(e, r)}.`)
                                            } else
                                                r = T(e, r, s),
                                                s = i.charCodeAt(r);
                                            if (46 === s && (a = !0,
                                            s = i.charCodeAt(++r),
                                            r = T(e, r, s),
                                            s = i.charCodeAt(r)),
                                            (69 === s || 101 === s) && (a = !0,
                                            (43 === (s = i.charCodeAt(++r)) || 45 === s) && (s = i.charCodeAt(++r)),
                                            r = T(e, r, s),
                                            s = i.charCodeAt(r)),
                                            46 === s || (0,
                                            g.LQ)(s))
                                                throw l(e.source, r, `Invalid number, expected digit but got: ${E(e, r)}.`);
                                            return A(e, a ? p.FLOAT : p.INT, t, r, i.slice(t, r))
                                        }(e, r, s);
                                    if ((0,
                                    g.LQ)(s))
                                        return function(e, t) {
                                            let n = e.source.body
                                              , i = n.length
                                              , r = t + 1;
                                            for (; r < i; ) {
                                                let s = n.charCodeAt(r);
                                                if ((0,
                                                g.HQ)(s))
                                                    ++r;
                                                else
                                                    break
                                            }
                                            return A(e, p.NAME, t, r, n.slice(t, r))
                                        }(e, r);
                                    throw l(e.source, r, 39 === s ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : b(s) || x(n, r) ? `Unexpected character: ${E(e, r)}.` : `Invalid character: ${E(e, r)}.`)
                                }
                                return A(e, p.EOF, i, i)
                            }(this, e.end);
                            e.next = t,
                            t.prev = e,
                            e = t
                        }
                    while (e.kind === p.COMMENT);
                return e
            }
        }
        function b(e) {
            return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
        }
        function x(e, t) {
            return w(e.charCodeAt(t)) && _(e.charCodeAt(t + 1))
        }
        function w(e) {
            return e >= 55296 && e <= 56319
        }
        function _(e) {
            return e >= 56320 && e <= 57343
        }
        function E(e, t) {
            let n = e.source.body.codePointAt(t);
            if (void 0 === n)
                return p.EOF;
            if (n >= 32 && n <= 126) {
                let i = String.fromCodePoint(n);
                return '"' === i ? "'\"'" : `"${i}"`
            }
            return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
        }
        function A(e, t, n, i, r) {
            let s = e.line
              , a = 1 + n - e.lineStart;
            return new f.WU(t,n,i,s,a,r)
        }
        function T(e, t, n) {
            if (!(0,
            g.X1)(n))
                throw l(e.source, t, `Invalid number, expected digit but got: ${E(e, t)}.`);
            let i = e.source.body
              , r = t + 1;
            for (; (0,
            g.X1)(i.charCodeAt(r)); )
                ++r;
            return r
        }
        function S(e, t) {
            return O(e.charCodeAt(t)) << 12 | O(e.charCodeAt(t + 1)) << 8 | O(e.charCodeAt(t + 2)) << 4 | O(e.charCodeAt(t + 3))
        }
        function O(e) {
            return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
        }
        var k = n(6847)
          , N = n(343);
        class I {
            constructor(e, t="GraphQL request", n={
                line: 1,
                column: 1
            }) {
                "string" == typeof e || (0,
                k.a)(!1, `Body must be a string. Received: ${(0,
                N.X)(e)}.`),
                this.body = e,
                this.name = t,
                this.locationOffset = n,
                this.locationOffset.line > 0 || (0,
                k.a)(!1, "line in locationOffset is 1-indexed and must be positive."),
                this.locationOffset.column > 0 || (0,
                k.a)(!1, "column in locationOffset is 1-indexed and must be positive.")
            }
            get[Symbol.toStringTag]() {
                return "Source"
            }
        }
        function M(e, t) {
            let n = new F(e,t);
            return n.parseDocument()
        }
        function C(e, t) {
            let n = new F(e,t);
            n.expectToken(p.SOF);
            let i = n.parseValueLiteral(!1);
            return n.expectToken(p.EOF),
            i
        }
        function D(e, t) {
            let n = new F(e,t);
            n.expectToken(p.SOF);
            let i = n.parseConstValueLiteral();
            return n.expectToken(p.EOF),
            i
        }
        function R(e, t) {
            let n = new F(e,t);
            n.expectToken(p.SOF);
            let i = n.parseTypeReference();
            return n.expectToken(p.EOF),
            i
        }
        class F {
            constructor(e, t={}) {
                let n = e instanceof I ? e : new I(e);
                this._lexer = new y(n),
                this._options = t,
                this._tokenCounter = 0
            }
            parseName() {
                let e = this.expectToken(p.NAME);
                return this.node(e, {
                    kind: m.h.NAME,
                    value: e.value
                })
            }
            parseDocument() {
                return this.node(this._lexer.token, {
                    kind: m.h.DOCUMENT,
                    definitions: this.many(p.SOF, this.parseDefinition, p.EOF)
                })
            }
            parseDefinition() {
                if (this.peek(p.BRACE_L))
                    return this.parseOperationDefinition();
                let e = this.peekDescription()
                  , t = e ? this._lexer.lookahead() : this._lexer.token;
                if (t.kind === p.NAME) {
                    switch (t.value) {
                    case "schema":
                        return this.parseSchemaDefinition();
                    case "scalar":
                        return this.parseScalarTypeDefinition();
                    case "type":
                        return this.parseObjectTypeDefinition();
                    case "interface":
                        return this.parseInterfaceTypeDefinition();
                    case "union":
                        return this.parseUnionTypeDefinition();
                    case "enum":
                        return this.parseEnumTypeDefinition();
                    case "input":
                        return this.parseInputObjectTypeDefinition();
                    case "directive":
                        return this.parseDirectiveDefinition()
                    }
                    if (e)
                        throw l(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
                    switch (t.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                        return this.parseOperationDefinition();
                    case "fragment":
                        return this.parseFragmentDefinition();
                    case "extend":
                        return this.parseTypeSystemExtension()
                    }
                }
                throw this.unexpected(t)
            }
            parseOperationDefinition() {
                let e;
                let t = this._lexer.token;
                if (this.peek(p.BRACE_L))
                    return this.node(t, {
                        kind: m.h.OPERATION_DEFINITION,
                        operation: f.ku.QUERY,
                        name: void 0,
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: this.parseSelectionSet()
                    });
                let n = this.parseOperationType();
                return this.peek(p.NAME) && (e = this.parseName()),
                this.node(t, {
                    kind: m.h.OPERATION_DEFINITION,
                    operation: n,
                    name: e,
                    variableDefinitions: this.parseVariableDefinitions(),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseOperationType() {
                let e = this.expectToken(p.NAME);
                switch (e.value) {
                case "query":
                    return f.ku.QUERY;
                case "mutation":
                    return f.ku.MUTATION;
                case "subscription":
                    return f.ku.SUBSCRIPTION
                }
                throw this.unexpected(e)
            }
            parseVariableDefinitions() {
                return this.optionalMany(p.PAREN_L, this.parseVariableDefinition, p.PAREN_R)
            }
            parseVariableDefinition() {
                return this.node(this._lexer.token, {
                    kind: m.h.VARIABLE_DEFINITION,
                    variable: this.parseVariable(),
                    type: (this.expectToken(p.COLON),
                    this.parseTypeReference()),
                    defaultValue: this.expectOptionalToken(p.EQUALS) ? this.parseConstValueLiteral() : void 0,
                    directives: this.parseConstDirectives()
                })
            }
            parseVariable() {
                let e = this._lexer.token;
                return this.expectToken(p.DOLLAR),
                this.node(e, {
                    kind: m.h.VARIABLE,
                    name: this.parseName()
                })
            }
            parseSelectionSet() {
                return this.node(this._lexer.token, {
                    kind: m.h.SELECTION_SET,
                    selections: this.many(p.BRACE_L, this.parseSelection, p.BRACE_R)
                })
            }
            parseSelection() {
                return this.peek(p.SPREAD) ? this.parseFragment() : this.parseField()
            }
            parseField() {
                let e, t;
                let n = this._lexer.token
                  , i = this.parseName();
                return this.expectOptionalToken(p.COLON) ? (e = i,
                t = this.parseName()) : t = i,
                this.node(n, {
                    kind: m.h.FIELD,
                    alias: e,
                    name: t,
                    arguments: this.parseArguments(!1),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.peek(p.BRACE_L) ? this.parseSelectionSet() : void 0
                })
            }
            parseArguments(e) {
                let t = e ? this.parseConstArgument : this.parseArgument;
                return this.optionalMany(p.PAREN_L, t, p.PAREN_R)
            }
            parseArgument(e=!1) {
                let t = this._lexer.token
                  , n = this.parseName();
                return this.expectToken(p.COLON),
                this.node(t, {
                    kind: m.h.ARGUMENT,
                    name: n,
                    value: this.parseValueLiteral(e)
                })
            }
            parseConstArgument() {
                return this.parseArgument(!0)
            }
            parseFragment() {
                let e = this._lexer.token;
                this.expectToken(p.SPREAD);
                let t = this.expectOptionalKeyword("on");
                return !t && this.peek(p.NAME) ? this.node(e, {
                    kind: m.h.FRAGMENT_SPREAD,
                    name: this.parseFragmentName(),
                    directives: this.parseDirectives(!1)
                }) : this.node(e, {
                    kind: m.h.INLINE_FRAGMENT,
                    typeCondition: t ? this.parseNamedType() : void 0,
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseFragmentDefinition() {
                let e = this._lexer.token;
                return (this.expectKeyword("fragment"),
                !0 === this._options.allowLegacyFragmentVariables) ? this.node(e, {
                    kind: m.h.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    variableDefinitions: this.parseVariableDefinitions(),
                    typeCondition: (this.expectKeyword("on"),
                    this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                }) : this.node(e, {
                    kind: m.h.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    typeCondition: (this.expectKeyword("on"),
                    this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseFragmentName() {
                if ("on" === this._lexer.token.value)
                    throw this.unexpected();
                return this.parseName()
            }
            parseValueLiteral(e) {
                let t = this._lexer.token;
                switch (t.kind) {
                case p.BRACKET_L:
                    return this.parseList(e);
                case p.BRACE_L:
                    return this.parseObject(e);
                case p.INT:
                    return this.advanceLexer(),
                    this.node(t, {
                        kind: m.h.INT,
                        value: t.value
                    });
                case p.FLOAT:
                    return this.advanceLexer(),
                    this.node(t, {
                        kind: m.h.FLOAT,
                        value: t.value
                    });
                case p.STRING:
                case p.BLOCK_STRING:
                    return this.parseStringLiteral();
                case p.NAME:
                    switch (this.advanceLexer(),
                    t.value) {
                    case "true":
                        return this.node(t, {
                            kind: m.h.BOOLEAN,
                            value: !0
                        });
                    case "false":
                        return this.node(t, {
                            kind: m.h.BOOLEAN,
                            value: !1
                        });
                    case "null":
                        return this.node(t, {
                            kind: m.h.NULL
                        });
                    default:
                        return this.node(t, {
                            kind: m.h.ENUM,
                            value: t.value
                        })
                    }
                case p.DOLLAR:
                    if (e) {
                        if (this.expectToken(p.DOLLAR),
                        this._lexer.token.kind === p.NAME) {
                            let n = this._lexer.token.value;
                            throw l(this._lexer.source, t.start, `Unexpected variable "$${n}" in constant value.`)
                        }
                        throw this.unexpected(t)
                    }
                    return this.parseVariable();
                default:
                    throw this.unexpected()
                }
            }
            parseConstValueLiteral() {
                return this.parseValueLiteral(!0)
            }
            parseStringLiteral() {
                let e = this._lexer.token;
                return this.advanceLexer(),
                this.node(e, {
                    kind: m.h.STRING,
                    value: e.value,
                    block: e.kind === p.BLOCK_STRING
                })
            }
            parseList(e) {
                let t = ()=>this.parseValueLiteral(e);
                return this.node(this._lexer.token, {
                    kind: m.h.LIST,
                    values: this.any(p.BRACKET_L, t, p.BRACKET_R)
                })
            }
            parseObject(e) {
                let t = ()=>this.parseObjectField(e);
                return this.node(this._lexer.token, {
                    kind: m.h.OBJECT,
                    fields: this.any(p.BRACE_L, t, p.BRACE_R)
                })
            }
            parseObjectField(e) {
                let t = this._lexer.token
                  , n = this.parseName();
                return this.expectToken(p.COLON),
                this.node(t, {
                    kind: m.h.OBJECT_FIELD,
                    name: n,
                    value: this.parseValueLiteral(e)
                })
            }
            parseDirectives(e) {
                let t = [];
                for (; this.peek(p.AT); )
                    t.push(this.parseDirective(e));
                return t
            }
            parseConstDirectives() {
                return this.parseDirectives(!0)
            }
            parseDirective(e) {
                let t = this._lexer.token;
                return this.expectToken(p.AT),
                this.node(t, {
                    kind: m.h.DIRECTIVE,
                    name: this.parseName(),
                    arguments: this.parseArguments(e)
                })
            }
            parseTypeReference() {
                let e;
                let t = this._lexer.token;
                if (this.expectOptionalToken(p.BRACKET_L)) {
                    let n = this.parseTypeReference();
                    this.expectToken(p.BRACKET_R),
                    e = this.node(t, {
                        kind: m.h.LIST_TYPE,
                        type: n
                    })
                } else
                    e = this.parseNamedType();
                return this.expectOptionalToken(p.BANG) ? this.node(t, {
                    kind: m.h.NON_NULL_TYPE,
                    type: e
                }) : e
            }
            parseNamedType() {
                return this.node(this._lexer.token, {
                    kind: m.h.NAMED_TYPE,
                    name: this.parseName()
                })
            }
            peekDescription() {
                return this.peek(p.STRING) || this.peek(p.BLOCK_STRING)
            }
            parseDescription() {
                if (this.peekDescription())
                    return this.parseStringLiteral()
            }
            parseSchemaDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("schema");
                let n = this.parseConstDirectives()
                  , i = this.many(p.BRACE_L, this.parseOperationTypeDefinition, p.BRACE_R);
                return this.node(e, {
                    kind: m.h.SCHEMA_DEFINITION,
                    description: t,
                    directives: n,
                    operationTypes: i
                })
            }
            parseOperationTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseOperationType();
                this.expectToken(p.COLON);
                let n = this.parseNamedType();
                return this.node(e, {
                    kind: m.h.OPERATION_TYPE_DEFINITION,
                    operation: t,
                    type: n
                })
            }
            parseScalarTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("scalar");
                let n = this.parseName()
                  , i = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.SCALAR_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    directives: i
                })
            }
            parseObjectTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("type");
                let n = this.parseName()
                  , i = this.parseImplementsInterfaces()
                  , r = this.parseConstDirectives()
                  , s = this.parseFieldsDefinition();
                return this.node(e, {
                    kind: m.h.OBJECT_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    interfaces: i,
                    directives: r,
                    fields: s
                })
            }
            parseImplementsInterfaces() {
                return this.expectOptionalKeyword("implements") ? this.delimitedMany(p.AMP, this.parseNamedType) : []
            }
            parseFieldsDefinition() {
                return this.optionalMany(p.BRACE_L, this.parseFieldDefinition, p.BRACE_R)
            }
            parseFieldDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription()
                  , n = this.parseName()
                  , i = this.parseArgumentDefs();
                this.expectToken(p.COLON);
                let r = this.parseTypeReference()
                  , s = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.FIELD_DEFINITION,
                    description: t,
                    name: n,
                    arguments: i,
                    type: r,
                    directives: s
                })
            }
            parseArgumentDefs() {
                return this.optionalMany(p.PAREN_L, this.parseInputValueDef, p.PAREN_R)
            }
            parseInputValueDef() {
                let e;
                let t = this._lexer.token
                  , n = this.parseDescription()
                  , i = this.parseName();
                this.expectToken(p.COLON);
                let r = this.parseTypeReference();
                this.expectOptionalToken(p.EQUALS) && (e = this.parseConstValueLiteral());
                let s = this.parseConstDirectives();
                return this.node(t, {
                    kind: m.h.INPUT_VALUE_DEFINITION,
                    description: n,
                    name: i,
                    type: r,
                    defaultValue: e,
                    directives: s
                })
            }
            parseInterfaceTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("interface");
                let n = this.parseName()
                  , i = this.parseImplementsInterfaces()
                  , r = this.parseConstDirectives()
                  , s = this.parseFieldsDefinition();
                return this.node(e, {
                    kind: m.h.INTERFACE_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    interfaces: i,
                    directives: r,
                    fields: s
                })
            }
            parseUnionTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("union");
                let n = this.parseName()
                  , i = this.parseConstDirectives()
                  , r = this.parseUnionMemberTypes();
                return this.node(e, {
                    kind: m.h.UNION_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    directives: i,
                    types: r
                })
            }
            parseUnionMemberTypes() {
                return this.expectOptionalToken(p.EQUALS) ? this.delimitedMany(p.PIPE, this.parseNamedType) : []
            }
            parseEnumTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("enum");
                let n = this.parseName()
                  , i = this.parseConstDirectives()
                  , r = this.parseEnumValuesDefinition();
                return this.node(e, {
                    kind: m.h.ENUM_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    directives: i,
                    values: r
                })
            }
            parseEnumValuesDefinition() {
                return this.optionalMany(p.BRACE_L, this.parseEnumValueDefinition, p.BRACE_R)
            }
            parseEnumValueDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription()
                  , n = this.parseEnumValueName()
                  , i = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.ENUM_VALUE_DEFINITION,
                    description: t,
                    name: n,
                    directives: i
                })
            }
            parseEnumValueName() {
                if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value)
                    throw l(this._lexer.source, this._lexer.token.start, `${P(this._lexer.token)} is reserved and cannot be used for an enum value.`);
                return this.parseName()
            }
            parseInputObjectTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("input");
                let n = this.parseName()
                  , i = this.parseConstDirectives()
                  , r = this.parseInputFieldsDefinition();
                return this.node(e, {
                    kind: m.h.INPUT_OBJECT_TYPE_DEFINITION,
                    description: t,
                    name: n,
                    directives: i,
                    fields: r
                })
            }
            parseInputFieldsDefinition() {
                return this.optionalMany(p.BRACE_L, this.parseInputValueDef, p.BRACE_R)
            }
            parseTypeSystemExtension() {
                let e = this._lexer.lookahead();
                if (e.kind === p.NAME)
                    switch (e.value) {
                    case "schema":
                        return this.parseSchemaExtension();
                    case "scalar":
                        return this.parseScalarTypeExtension();
                    case "type":
                        return this.parseObjectTypeExtension();
                    case "interface":
                        return this.parseInterfaceTypeExtension();
                    case "union":
                        return this.parseUnionTypeExtension();
                    case "enum":
                        return this.parseEnumTypeExtension();
                    case "input":
                        return this.parseInputObjectTypeExtension()
                    }
                throw this.unexpected(e)
            }
            parseSchemaExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("schema");
                let t = this.parseConstDirectives()
                  , n = this.optionalMany(p.BRACE_L, this.parseOperationTypeDefinition, p.BRACE_R);
                if (0 === t.length && 0 === n.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.SCHEMA_EXTENSION,
                    directives: t,
                    operationTypes: n
                })
            }
            parseScalarTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("scalar");
                let t = this.parseName()
                  , n = this.parseConstDirectives();
                if (0 === n.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.SCALAR_TYPE_EXTENSION,
                    name: t,
                    directives: n
                })
            }
            parseObjectTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("type");
                let t = this.parseName()
                  , n = this.parseImplementsInterfaces()
                  , i = this.parseConstDirectives()
                  , r = this.parseFieldsDefinition();
                if (0 === n.length && 0 === i.length && 0 === r.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.OBJECT_TYPE_EXTENSION,
                    name: t,
                    interfaces: n,
                    directives: i,
                    fields: r
                })
            }
            parseInterfaceTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("interface");
                let t = this.parseName()
                  , n = this.parseImplementsInterfaces()
                  , i = this.parseConstDirectives()
                  , r = this.parseFieldsDefinition();
                if (0 === n.length && 0 === i.length && 0 === r.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.INTERFACE_TYPE_EXTENSION,
                    name: t,
                    interfaces: n,
                    directives: i,
                    fields: r
                })
            }
            parseUnionTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("union");
                let t = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseUnionMemberTypes();
                if (0 === n.length && 0 === i.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.UNION_TYPE_EXTENSION,
                    name: t,
                    directives: n,
                    types: i
                })
            }
            parseEnumTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("enum");
                let t = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseEnumValuesDefinition();
                if (0 === n.length && 0 === i.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.ENUM_TYPE_EXTENSION,
                    name: t,
                    directives: n,
                    values: i
                })
            }
            parseInputObjectTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("input");
                let t = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseInputFieldsDefinition();
                if (0 === n.length && 0 === i.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.INPUT_OBJECT_TYPE_EXTENSION,
                    name: t,
                    directives: n,
                    fields: i
                })
            }
            parseDirectiveDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("directive"),
                this.expectToken(p.AT);
                let n = this.parseName()
                  , i = this.parseArgumentDefs()
                  , r = this.expectOptionalKeyword("repeatable");
                this.expectKeyword("on");
                let s = this.parseDirectiveLocations();
                return this.node(e, {
                    kind: m.h.DIRECTIVE_DEFINITION,
                    description: t,
                    name: n,
                    arguments: i,
                    repeatable: r,
                    locations: s
                })
            }
            parseDirectiveLocations() {
                return this.delimitedMany(p.PIPE, this.parseDirectiveLocation)
            }
            parseDirectiveLocation() {
                let e = this._lexer.token
                  , t = this.parseName();
                if (Object.prototype.hasOwnProperty.call(d, t.value))
                    return t;
                throw this.unexpected(e)
            }
            node(e, t) {
                return !0 !== this._options.noLocation && (t.loc = new f.Ye(e,this._lexer.lastToken,this._lexer.source)),
                t
            }
            peek(e) {
                return this._lexer.token.kind === e
            }
            expectToken(e) {
                let t = this._lexer.token;
                if (t.kind === e)
                    return this.advanceLexer(),
                    t;
                throw l(this._lexer.source, t.start, `Expected ${L(e)}, found ${P(t)}.`)
            }
            expectOptionalToken(e) {
                let t = this._lexer.token;
                return t.kind === e && (this.advanceLexer(),
                !0)
            }
            expectKeyword(e) {
                let t = this._lexer.token;
                if (t.kind === p.NAME && t.value === e)
                    this.advanceLexer();
                else
                    throw l(this._lexer.source, t.start, `Expected "${e}", found ${P(t)}.`)
            }
            expectOptionalKeyword(e) {
                let t = this._lexer.token;
                return t.kind === p.NAME && t.value === e && (this.advanceLexer(),
                !0)
            }
            unexpected(e) {
                let t = null != e ? e : this._lexer.token;
                return l(this._lexer.source, t.start, `Unexpected ${P(t)}.`)
            }
            any(e, t, n) {
                this.expectToken(e);
                let i = [];
                for (; !this.expectOptionalToken(n); )
                    i.push(t.call(this));
                return i
            }
            optionalMany(e, t, n) {
                if (this.expectOptionalToken(e)) {
                    let i = [];
                    do
                        i.push(t.call(this));
                    while (!this.expectOptionalToken(n));
                    return i
                }
                return []
            }
            many(e, t, n) {
                this.expectToken(e);
                let i = [];
                do
                    i.push(t.call(this));
                while (!this.expectOptionalToken(n));
                return i
            }
            delimitedMany(e, t) {
                this.expectOptionalToken(e);
                let n = [];
                do
                    n.push(t.call(this));
                while (this.expectOptionalToken(e));
                return n
            }
            advanceLexer() {
                let {maxTokens: e} = this._options
                  , t = this._lexer.advance();
                if (void 0 !== e && t.kind !== p.EOF && (++this._tokenCounter,
                this._tokenCounter > e))
                    throw l(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
            }
        }
        function P(e) {
            let t = e.value;
            return L(e.kind) + (null != t ? ` "${t}"` : "")
        }
        function L(e) {
            return e === p.BANG || e === p.DOLLAR || e === p.AMP || e === p.PAREN_L || e === p.PAREN_R || e === p.SPREAD || e === p.COLON || e === p.EQUALS || e === p.AT || e === p.BRACKET_L || e === p.BRACKET_R || e === p.BRACE_L || e === p.PIPE || e === p.BRACE_R ? `"${e}"` : e
        }
    },
    6487: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            print: function() {
                return d
            }
        });
        var i = n(5186);
        let r = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
        function s(e) {
            return a[e.charCodeAt(0)]
        }
        let a = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
        var o = n(6847)
          , u = n(343)
          , l = n(4129)
          , h = n(3511);
        let c = Object.freeze({});
        function d(e) {
            return function(e, t, n=l.h8) {
                let i, r, s;
                let a = new Map;
                for (let d of Object.values(h.h))
                    a.set(d, function(e, t) {
                        let n = e[t];
                        return "object" == typeof n ? n : "function" == typeof n ? {
                            enter: n,
                            leave: void 0
                        } : {
                            enter: e.enter,
                            leave: e.leave
                        }
                    }(t, d));
                let p = Array.isArray(e)
                  , f = [e]
                  , m = -1
                  , v = []
                  , g = e
                  , y = []
                  , b = [];
                do {
                    var x, w, _;
                    let E;
                    m++;
                    let A = m === f.length
                      , T = A && 0 !== v.length;
                    if (A) {
                        if (r = 0 === b.length ? void 0 : y[y.length - 1],
                        g = s,
                        s = b.pop(),
                        T) {
                            if (p) {
                                g = g.slice();
                                let S = 0;
                                for (let[O,k] of v) {
                                    let N = O - S;
                                    null === k ? (g.splice(N, 1),
                                    S++) : g[N] = k
                                }
                            } else
                                for (let[I,M] of (g = Object.defineProperties({}, Object.getOwnPropertyDescriptors(g)),
                                v))
                                    g[I] = M
                        }
                        m = i.index,
                        f = i.keys,
                        v = i.edits,
                        p = i.inArray,
                        i = i.prev
                    } else if (s) {
                        if (null == (g = s[r = p ? m : f[m]]))
                            continue;
                        y.push(r)
                    }
                    if (!Array.isArray(g)) {
                        (0,
                        l.UG)(g) || (0,
                        o.a)(!1, `Invalid AST Node: ${(0,
                        u.X)(g)}.`);
                        let C = A ? null === (x = a.get(g.kind)) || void 0 === x ? void 0 : x.leave : null === (w = a.get(g.kind)) || void 0 === w ? void 0 : w.enter;
                        if ((E = null == C ? void 0 : C.call(t, g, r, s, y, b)) === c)
                            break;
                        if (!1 === E) {
                            if (!A) {
                                y.pop();
                                continue
                            }
                        } else if (void 0 !== E && (v.push([r, E]),
                        !A)) {
                            if ((0,
                            l.UG)(E))
                                g = E;
                            else {
                                y.pop();
                                continue
                            }
                        }
                    }
                    void 0 === E && T && v.push([r, g]),
                    A ? y.pop() : (i = {
                        inArray: p,
                        index: m,
                        keys: f,
                        edits: v,
                        prev: i
                    },
                    f = (p = Array.isArray(g)) ? g : null !== (_ = n[g.kind]) && void 0 !== _ ? _ : [],
                    m = -1,
                    v = [],
                    s && b.push(s),
                    s = g)
                } while (void 0 !== i);
                return 0 !== v.length ? v[v.length - 1][1] : e
            }(e, p)
        }
        let p = {
            Name: {
                leave: e=>e.value
            },
            Variable: {
                leave: e=>"$" + e.name
            },
            Document: {
                leave: e=>f(e.definitions, "\n\n")
            },
            OperationDefinition: {
                leave(e) {
                    let t = v("(", f(e.variableDefinitions, ", "), ")")
                      , n = f([e.operation, f([e.name, t]), f(e.directives, " ")], " ");
                    return ("query" === n ? "" : n + " ") + e.selectionSet
                }
            },
            VariableDefinition: {
                leave: ({variable: e, type: t, defaultValue: n, directives: i})=>e + ": " + t + v(" = ", n) + v(" ", f(i, " "))
            },
            SelectionSet: {
                leave: ({selections: e})=>m(e)
            },
            Field: {
                leave({alias: e, name: t, arguments: n, directives: i, selectionSet: r}) {
                    let s = v("", e, ": ") + t
                      , a = s + v("(", f(n, ", "), ")");
                    return a.length > 80 && (a = s + v("(\n", g(f(n, "\n")), "\n)")),
                    f([a, f(i, " "), r], " ")
                }
            },
            Argument: {
                leave: ({name: e, value: t})=>e + ": " + t
            },
            FragmentSpread: {
                leave: ({name: e, directives: t})=>"..." + e + v(" ", f(t, " "))
            },
            InlineFragment: {
                leave: ({typeCondition: e, directives: t, selectionSet: n})=>f(["...", v("on ", e), f(t, " "), n], " ")
            },
            FragmentDefinition: {
                leave: ({name: e, typeCondition: t, variableDefinitions: n, directives: i, selectionSet: r})=>`fragment ${e}${v("(", f(n, ", "), ")")} on ${t} ${v("", f(i, " "), " ")}` + r
            },
            IntValue: {
                leave: ({value: e})=>e
            },
            FloatValue: {
                leave: ({value: e})=>e
            },
            StringValue: {
                leave: ({value: e, block: t})=>t ? (0,
                i.LZ)(e) : `"${e.replace(r, s)}"`
            },
            BooleanValue: {
                leave: ({value: e})=>e ? "true" : "false"
            },
            NullValue: {
                leave: ()=>"null"
            },
            EnumValue: {
                leave: ({value: e})=>e
            },
            ListValue: {
                leave: ({values: e})=>"[" + f(e, ", ") + "]"
            },
            ObjectValue: {
                leave: ({fields: e})=>"{" + f(e, ", ") + "}"
            },
            ObjectField: {
                leave: ({name: e, value: t})=>e + ": " + t
            },
            Directive: {
                leave: ({name: e, arguments: t})=>"@" + e + v("(", f(t, ", "), ")")
            },
            NamedType: {
                leave: ({name: e})=>e
            },
            ListType: {
                leave: ({type: e})=>"[" + e + "]"
            },
            NonNullType: {
                leave: ({type: e})=>e + "!"
            },
            SchemaDefinition: {
                leave: ({description: e, directives: t, operationTypes: n})=>v("", e, "\n") + f(["schema", f(t, " "), m(n)], " ")
            },
            OperationTypeDefinition: {
                leave: ({operation: e, type: t})=>e + ": " + t
            },
            ScalarTypeDefinition: {
                leave: ({description: e, name: t, directives: n})=>v("", e, "\n") + f(["scalar", t, f(n, " ")], " ")
            },
            ObjectTypeDefinition: {
                leave: ({description: e, name: t, interfaces: n, directives: i, fields: r})=>v("", e, "\n") + f(["type", t, v("implements ", f(n, " & ")), f(i, " "), m(r)], " ")
            },
            FieldDefinition: {
                leave: ({description: e, name: t, arguments: n, type: i, directives: r})=>v("", e, "\n") + t + (y(n) ? v("(\n", g(f(n, "\n")), "\n)") : v("(", f(n, ", "), ")")) + ": " + i + v(" ", f(r, " "))
            },
            InputValueDefinition: {
                leave: ({description: e, name: t, type: n, defaultValue: i, directives: r})=>v("", e, "\n") + f([t + ": " + n, v("= ", i), f(r, " ")], " ")
            },
            InterfaceTypeDefinition: {
                leave: ({description: e, name: t, interfaces: n, directives: i, fields: r})=>v("", e, "\n") + f(["interface", t, v("implements ", f(n, " & ")), f(i, " "), m(r)], " ")
            },
            UnionTypeDefinition: {
                leave: ({description: e, name: t, directives: n, types: i})=>v("", e, "\n") + f(["union", t, f(n, " "), v("= ", f(i, " | "))], " ")
            },
            EnumTypeDefinition: {
                leave: ({description: e, name: t, directives: n, values: i})=>v("", e, "\n") + f(["enum", t, f(n, " "), m(i)], " ")
            },
            EnumValueDefinition: {
                leave: ({description: e, name: t, directives: n})=>v("", e, "\n") + f([t, f(n, " ")], " ")
            },
            InputObjectTypeDefinition: {
                leave: ({description: e, name: t, directives: n, fields: i})=>v("", e, "\n") + f(["input", t, f(n, " "), m(i)], " ")
            },
            DirectiveDefinition: {
                leave: ({description: e, name: t, arguments: n, repeatable: i, locations: r})=>v("", e, "\n") + "directive @" + t + (y(n) ? v("(\n", g(f(n, "\n")), "\n)") : v("(", f(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + f(r, " | ")
            },
            SchemaExtension: {
                leave: ({directives: e, operationTypes: t})=>f(["extend schema", f(e, " "), m(t)], " ")
            },
            ScalarTypeExtension: {
                leave: ({name: e, directives: t})=>f(["extend scalar", e, f(t, " ")], " ")
            },
            ObjectTypeExtension: {
                leave: ({name: e, interfaces: t, directives: n, fields: i})=>f(["extend type", e, v("implements ", f(t, " & ")), f(n, " "), m(i)], " ")
            },
            InterfaceTypeExtension: {
                leave: ({name: e, interfaces: t, directives: n, fields: i})=>f(["extend interface", e, v("implements ", f(t, " & ")), f(n, " "), m(i)], " ")
            },
            UnionTypeExtension: {
                leave: ({name: e, directives: t, types: n})=>f(["extend union", e, f(t, " "), v("= ", f(n, " | "))], " ")
            },
            EnumTypeExtension: {
                leave: ({name: e, directives: t, values: n})=>f(["extend enum", e, f(t, " "), m(n)], " ")
            },
            InputObjectTypeExtension: {
                leave: ({name: e, directives: t, fields: n})=>f(["extend input", e, f(t, " "), m(n)], " ")
            }
        };
        function f(e, t="") {
            var n;
            return null !== (n = null == e ? void 0 : e.filter(e=>e).join(t)) && void 0 !== n ? n : ""
        }
        function m(e) {
            return v("{\n", g(f(e, "\n")), "\n}")
        }
        function v(e, t, n="") {
            return null != t && "" !== t ? e + t + n : ""
        }
        function g(e) {
            return v("  ", e.replace(/\n/g, "\n  "))
        }
        function y(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.some(e=>e.includes("\n"))) && void 0 !== t && t
        }
    },
    8007: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var i = n(8915);
        let r = new i.A
          , s = 1
          , a = 1
          , o = !1;
        class u {
            constructor(e, t={}) {
                for (let n in e.canvas || console.error("gl not passed as first argument to Geometry"),
                this.gl = e,
                this.attributes = t,
                this.id = s++,
                this.VAOs = {},
                this.drawRange = {
                    start: 0,
                    count: 0
                },
                this.instancedCount = 0,
                this.gl.renderer.bindVertexArray(null),
                this.gl.renderer.currentGeometry = null,
                this.glState = this.gl.renderer.state,
                t)
                    this.addAttribute(n, t[n])
            }
            addAttribute(e, t) {
                if (this.attributes[e] = t,
                t.id = a++,
                t.size = t.size || 1,
                t.type = t.type || (t.data.constructor === Float32Array ? this.gl.FLOAT : t.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
                t.target = "index" === e ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
                t.normalized = t.normalized || !1,
                t.stride = t.stride || 0,
                t.offset = t.offset || 0,
                t.count = t.count || (t.stride ? t.data.byteLength / t.stride : t.data.length / t.size),
                t.divisor = t.instanced || 0,
                t.needsUpdate = !1,
                t.usage = t.usage || this.gl.STATIC_DRAW,
                t.buffer || this.updateAttribute(t),
                t.divisor) {
                    if (this.isInstanced = !0,
                    this.instancedCount && this.instancedCount !== t.count * t.divisor)
                        return console.warn("geometry has multiple instanced buffers of different length"),
                        this.instancedCount = Math.min(this.instancedCount, t.count * t.divisor);
                    this.instancedCount = t.count * t.divisor
                } else
                    "index" === e ? this.drawRange.count = t.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, t.count))
            }
            updateAttribute(e) {
                let t = !e.buffer;
                t && (e.buffer = this.gl.createBuffer()),
                this.glState.boundBuffer !== e.buffer && (this.gl.bindBuffer(e.target, e.buffer),
                this.glState.boundBuffer = e.buffer),
                t ? this.gl.bufferData(e.target, e.data, e.usage) : this.gl.bufferSubData(e.target, 0, e.data),
                e.needsUpdate = !1
            }
            setIndex(e) {
                this.addAttribute("index", e)
            }
            setDrawRange(e, t) {
                this.drawRange.start = e,
                this.drawRange.count = t
            }
            setInstancedCount(e) {
                this.instancedCount = e
            }
            createVAO(e) {
                this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray(),
                this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
                this.bindAttributes(e)
            }
            bindAttributes(e) {
                e.attributeLocations.forEach((e,{name: t, type: n})=>{
                    if (!this.attributes[t]) {
                        console.warn(`active attribute ${t} not being supplied`);
                        return
                    }
                    let i = this.attributes[t];
                    this.gl.bindBuffer(i.target, i.buffer),
                    this.glState.boundBuffer = i.buffer;
                    let r = 1;
                    35674 === n && (r = 2),
                    35675 === n && (r = 3),
                    35676 === n && (r = 4);
                    let s = i.size / r
                      , a = 1 === r ? 0 : r * r * r
                      , o = 1 === r ? 0 : r * r;
                    for (let u = 0; u < r; u++)
                        this.gl.vertexAttribPointer(e + u, s, i.type, i.normalized, i.stride + a, i.offset + u * o),
                        this.gl.enableVertexAttribArray(e + u),
                        this.gl.renderer.vertexAttribDivisor(e + u, i.divisor)
                }
                ),
                this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
            }
            draw({program: e, mode: t=this.gl.TRIANGLES}) {
                this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` && (this.VAOs[e.attributeOrder] || this.createVAO(e),
                this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
                this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`),
                e.attributeLocations.forEach((e,{name: t})=>{
                    let n = this.attributes[t];
                    n.needsUpdate && this.updateAttribute(n)
                }
                ),
                this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(t, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(t, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(t, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start) : this.gl.drawArrays(t, this.drawRange.start, this.drawRange.count)
            }
            getPosition() {
                let e = this.attributes.position;
                return e.data ? e : o ? void 0 : (console.warn("No position buffer data found to compute bounds"),
                o = !0)
            }
            computeBoundingBox(e) {
                e || (e = this.getPosition());
                let t = e.data
                  , n = e.stride ? e.stride / t.BYTES_PER_ELEMENT : e.size;
                this.bounds || (this.bounds = {
                    min: new i.A,
                    max: new i.A,
                    center: new i.A,
                    scale: new i.A,
                    radius: 1 / 0
                });
                let r = this.bounds.min
                  , s = this.bounds.max
                  , a = this.bounds.center
                  , o = this.bounds.scale;
                r.set(Infinity),
                s.set(-1 / 0);
                for (let u = 0, l = t.length; u < l; u += n) {
                    let h = t[u]
                      , c = t[u + 1]
                      , d = t[u + 2];
                    r.x = Math.min(h, r.x),
                    r.y = Math.min(c, r.y),
                    r.z = Math.min(d, r.z),
                    s.x = Math.max(h, s.x),
                    s.y = Math.max(c, s.y),
                    s.z = Math.max(d, s.z)
                }
                o.sub(s, r),
                a.add(r, s).divide(2)
            }
            computeBoundingSphere(e) {
                e || (e = this.getPosition());
                let t = e.data
                  , n = e.stride ? e.stride / t.BYTES_PER_ELEMENT : e.size;
                this.bounds || this.computeBoundingBox(e);
                let i = 0;
                for (let s = 0, a = t.length; s < a; s += n)
                    r.fromArray(t, s),
                    i = Math.max(i, this.bounds.center.squaredDistance(r));
                this.bounds.radius = Math.sqrt(i)
            }
            remove() {
                for (let e in this.VAOs)
                    this.gl.renderer.deleteVertexArray(this.VAOs[e]),
                    delete this.VAOs[e];
                for (let t in this.attributes)
                    this.gl.deleteBuffer(this.attributes[t].buffer),
                    delete this.attributes[t]
            }
        }
    },
    3472: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return u
            }
        });
        var i = n(9151);
        function r(e, t, n) {
            let i = t[0]
              , r = t[1]
              , s = t[2]
              , a = t[3]
              , o = t[4]
              , u = t[5]
              , l = t[6]
              , h = t[7]
              , c = t[8]
              , d = n[0]
              , p = n[1]
              , f = n[2]
              , m = n[3]
              , v = n[4]
              , g = n[5]
              , y = n[6]
              , b = n[7]
              , x = n[8];
            return e[0] = d * i + p * a + f * l,
            e[1] = d * r + p * o + f * h,
            e[2] = d * s + p * u + f * c,
            e[3] = m * i + v * a + g * l,
            e[4] = m * r + v * o + g * h,
            e[5] = m * s + v * u + g * c,
            e[6] = y * i + b * a + x * l,
            e[7] = y * r + b * o + x * h,
            e[8] = y * s + b * u + x * c,
            e
        }
        class s extends Array {
            constructor(e=1, t=0, n=0, i=0, r=1, s=0, a=0, o=0, u=1) {
                return super(e, t, n, i, r, s, a, o, u),
                this
            }
            set(e, t, n, i, r, s, a, o, u) {
                var l;
                return e.length ? this.copy(e) : (l = this,
                l[0] = e,
                l[1] = t,
                l[2] = n,
                l[3] = i,
                l[4] = r,
                l[5] = s,
                l[6] = a,
                l[7] = o,
                l[8] = u,
                this)
            }
            translate(e, t=this) {
                var n;
                let i, r, s, a, o, u, l, h, c, d, p;
                return n = this,
                i = t[0],
                r = t[1],
                s = t[2],
                a = t[3],
                o = t[4],
                u = t[5],
                l = t[6],
                h = t[7],
                c = t[8],
                d = e[0],
                p = e[1],
                n[0] = i,
                n[1] = r,
                n[2] = s,
                n[3] = a,
                n[4] = o,
                n[5] = u,
                n[6] = d * i + p * a + l,
                n[7] = d * r + p * o + h,
                n[8] = d * s + p * u + c,
                this
            }
            rotate(e, t=this) {
                var n;
                let i, r, s, a, o, u, l, h, c, d, p;
                return n = this,
                i = t[0],
                r = t[1],
                s = t[2],
                a = t[3],
                o = t[4],
                u = t[5],
                l = t[6],
                h = t[7],
                c = t[8],
                d = Math.sin(e),
                p = Math.cos(e),
                n[0] = p * i + d * a,
                n[1] = p * r + d * o,
                n[2] = p * s + d * u,
                n[3] = p * a - d * i,
                n[4] = p * o - d * r,
                n[5] = p * u - d * s,
                n[6] = l,
                n[7] = h,
                n[8] = c,
                this
            }
            scale(e, t=this) {
                var n;
                let i, r;
                return n = this,
                i = e[0],
                r = e[1],
                n[0] = i * t[0],
                n[1] = i * t[1],
                n[2] = i * t[2],
                n[3] = r * t[3],
                n[4] = r * t[4],
                n[5] = r * t[5],
                n[6] = t[6],
                n[7] = t[7],
                n[8] = t[8],
                this
            }
            multiply(e, t) {
                return t ? r(this, e, t) : r(this, this, e),
                this
            }
            identity() {
                var e;
                return e = this,
                e[0] = 1,
                e[1] = 0,
                e[2] = 0,
                e[3] = 0,
                e[4] = 1,
                e[5] = 0,
                e[6] = 0,
                e[7] = 0,
                e[8] = 1,
                this
            }
            copy(e) {
                var t;
                return t = this,
                t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8],
                this
            }
            fromMatrix4(e) {
                var t;
                return t = this,
                t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[4],
                t[4] = e[5],
                t[5] = e[6],
                t[6] = e[8],
                t[7] = e[9],
                t[8] = e[10],
                this
            }
            fromQuaternion(e) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f, m, v, g;
                return t = this,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = n + n,
                o = i + i,
                u = r + r,
                l = n * a,
                h = i * a,
                c = i * o,
                d = r * a,
                p = r * o,
                f = r * u,
                m = s * a,
                v = s * o,
                g = s * u,
                t[0] = 1 - c - f,
                t[3] = h - g,
                t[6] = d + v,
                t[1] = h + g,
                t[4] = 1 - l - f,
                t[7] = p - m,
                t[2] = d - v,
                t[5] = p + m,
                t[8] = 1 - l - c,
                this
            }
            fromBasis(e, t, n) {
                return this.set(e[0], e[1], e[2], t[0], t[1], t[2], n[0], n[1], n[2]),
                this
            }
            inverse(e=this) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f;
                return t = this,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                u = e[6],
                l = e[7],
                (f = n * (c = (h = e[8]) * a - o * l) + i * (d = -h * s + o * u) + r * (p = l * s - a * u)) && (f = 1 / f,
                t[0] = c * f,
                t[1] = (-h * i + r * l) * f,
                t[2] = (o * i - r * a) * f,
                t[3] = d * f,
                t[4] = (h * n - r * u) * f,
                t[5] = (-o * n + r * s) * f,
                t[6] = p * f,
                t[7] = (-l * n + i * u) * f,
                t[8] = (a * n - i * s) * f),
                this
            }
            getNormalMatrix(e) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f, m, v, g, y, b, x, w, _, E, A, T, S, O, k, N, I;
                return t = this,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                c = e[9],
                d = e[10],
                p = e[11],
                f = e[12],
                m = e[13],
                v = e[14],
                g = e[15],
                y = n * o - i * a,
                b = n * u - r * a,
                x = n * l - s * a,
                w = i * u - r * o,
                _ = i * l - s * o,
                E = r * l - s * u,
                A = h * m - c * f,
                T = h * v - d * f,
                S = h * g - p * f,
                O = c * v - d * m,
                k = c * g - p * m,
                (I = y * (N = d * g - p * v) - b * k + x * O + w * S - _ * T + E * A) && (I = 1 / I,
                t[0] = (o * N - u * k + l * O) * I,
                t[1] = (u * S - a * N - l * T) * I,
                t[2] = (a * k - o * S + l * A) * I,
                t[3] = (r * k - i * N - s * O) * I,
                t[4] = (n * N - r * S + s * T) * I,
                t[5] = (i * S - n * k - s * A) * I,
                t[6] = (m * E - v * _ + g * w) * I,
                t[7] = (v * x - f * E - g * b) * I,
                t[8] = (f * _ - m * x + g * y) * I),
                this
            }
        }
        var a = n(7005);
        let o = 0;
        class u extends i.w {
            constructor(e, {geometry: t, program: n, mode: i=e.TRIANGLES, frustumCulled: r=!0, renderOrder: u=0}={}) {
                super(),
                e.canvas || console.error("gl not passed as first argument to Mesh"),
                this.gl = e,
                this.id = o++,
                this.geometry = t,
                this.program = n,
                this.mode = i,
                this.frustumCulled = r,
                this.renderOrder = u,
                this.modelViewMatrix = new a.y,
                this.normalMatrix = new s,
                this.beforeRenderCallbacks = [],
                this.afterRenderCallbacks = []
            }
            onBeforeRender(e) {
                return this.beforeRenderCallbacks.push(e),
                this
            }
            onAfterRender(e) {
                return this.afterRenderCallbacks.push(e),
                this
            }
            draw({camera: e}={}) {
                this.beforeRenderCallbacks.forEach(t=>t && t({
                    mesh: this,
                    camera: e
                })),
                e && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                    modelMatrix: {
                        value: null
                    },
                    viewMatrix: {
                        value: null
                    },
                    modelViewMatrix: {
                        value: null
                    },
                    normalMatrix: {
                        value: null
                    },
                    projectionMatrix: {
                        value: null
                    },
                    cameraPosition: {
                        value: null
                    }
                }),
                this.program.uniforms.projectionMatrix.value = e.projectionMatrix,
                this.program.uniforms.cameraPosition.value = e.worldPosition,
                this.program.uniforms.viewMatrix.value = e.viewMatrix,
                this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                this.program.uniforms.modelMatrix.value = this.worldMatrix,
                this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
                this.program.uniforms.normalMatrix.value = this.normalMatrix);
                let t = this.program.cullFace && 0 > this.worldMatrix.determinant();
                this.program.use({
                    flipFaces: t
                }),
                this.geometry.draw({
                    mode: this.mode,
                    program: this.program
                }),
                this.afterRenderCallbacks.forEach(t=>t && t({
                    mesh: this,
                    camera: e
                }))
            }
        }
    },
    8724: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return s
            }
        });
        let i = 1
          , r = {};
        class s {
            constructor(e, {vertex: t, fragment: n, uniforms: r={}, transparent: s=!1, cullFace: a=e.BACK, frontFace: u=e.CCW, depthTest: l=!0, depthWrite: h=!0, depthFunc: c=e.LESS}={}) {
                e.canvas || console.error("gl not passed as first argument to Program"),
                this.gl = e,
                this.uniforms = r,
                this.id = i++,
                t || console.warn("vertex shader not supplied"),
                n || console.warn("fragment shader not supplied"),
                this.transparent = s,
                this.cullFace = a,
                this.frontFace = u,
                this.depthTest = l,
                this.depthWrite = h,
                this.depthFunc = c,
                this.blendFunc = {},
                this.blendEquation = {},
                this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
                let d = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(d, t),
                e.compileShader(d),
                "" !== e.getShaderInfoLog(d) && console.warn(`${e.getShaderInfoLog(d)}
Vertex Shader
${o(t)}`);
                let p = e.createShader(e.FRAGMENT_SHADER);
                if (e.shaderSource(p, n),
                e.compileShader(p),
                "" !== e.getShaderInfoLog(p) && console.warn(`${e.getShaderInfoLog(p)}
Fragment Shader
${o(n)}`),
                this.program = e.createProgram(),
                e.attachShader(this.program, d),
                e.attachShader(this.program, p),
                e.linkProgram(this.program),
                !e.getProgramParameter(this.program, e.LINK_STATUS))
                    return console.warn(e.getProgramInfoLog(this.program));
                e.deleteShader(d),
                e.deleteShader(p),
                this.uniformLocations = new Map;
                let f = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
                for (let m = 0; m < f; m++) {
                    let v = e.getActiveUniform(this.program, m);
                    this.uniformLocations.set(v, e.getUniformLocation(this.program, v.name));
                    let g = v.name.match(/(\w+)/g);
                    v.uniformName = g[0],
                    3 === g.length ? (v.isStructArray = !0,
                    v.structIndex = Number(g[1]),
                    v.structProperty = g[2]) : 2 === g.length && isNaN(Number(g[1])) && (v.isStruct = !0,
                    v.structProperty = g[1])
                }
                this.attributeLocations = new Map;
                let y = []
                  , b = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
                for (let x = 0; x < b; x++) {
                    let w = e.getActiveAttrib(this.program, x)
                      , _ = e.getAttribLocation(this.program, w.name);
                    -1 !== _ && (y[_] = w.name,
                    this.attributeLocations.set(w, _))
                }
                this.attributeOrder = y.join("")
            }
            setBlendFunc(e, t, n, i) {
                this.blendFunc.src = e,
                this.blendFunc.dst = t,
                this.blendFunc.srcAlpha = n,
                this.blendFunc.dstAlpha = i,
                e && (this.transparent = !0)
            }
            setBlendEquation(e, t) {
                this.blendEquation.modeRGB = e,
                this.blendEquation.modeAlpha = t
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                this.gl.renderer.setFrontFace(this.frontFace),
                this.gl.renderer.setDepthMask(this.depthWrite),
                this.gl.renderer.setDepthFunc(this.depthFunc),
                this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
            }
            use({flipFaces: e=!1}={}) {
                let t = -1
                  , n = this.gl.renderer.state.currentProgram === this.id;
                n || (this.gl.useProgram(this.program),
                this.gl.renderer.state.currentProgram = this.id),
                this.uniformLocations.forEach((e,n)=>{
                    let i = n.uniformName
                      , r = this.uniforms[i];
                    if (n.isStruct && (r = r[n.structProperty],
                    i += `.${n.structProperty}`),
                    n.isStructArray && (r = r[n.structIndex][n.structProperty],
                    i += `[${n.structIndex}].${n.structProperty}`),
                    !r)
                        return l(`Active uniform ${i} has not been supplied`);
                    if (r && void 0 === r.value)
                        return l(`${i} uniform is missing a value parameter`);
                    if (r.value.texture)
                        return t += 1,
                        r.value.update(t),
                        a(this.gl, n.type, e, t);
                    if (r.value.length && r.value[0].texture) {
                        let s = [];
                        return r.value.forEach(e=>{
                            t += 1,
                            e.update(t),
                            s.push(t)
                        }
                        ),
                        a(this.gl, n.type, e, s)
                    }
                    a(this.gl, n.type, e, r.value)
                }
                ),
                this.applyState(),
                e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
            }
            remove() {
                this.gl.deleteProgram(this.program)
            }
        }
        function a(e, t, n, i) {
            i = i.length ? function(e) {
                let t = e.length
                  , n = e[0].length;
                if (void 0 === n)
                    return e;
                let i = t * n
                  , s = r[i];
                s || (r[i] = s = new Float32Array(i));
                for (let a = 0; a < t; a++)
                    s.set(e[a], a * n);
                return s
            }(i) : i;
            let s = e.renderer.state.uniformLocations.get(n);
            if (i.length) {
                if (void 0 === s || s.length !== i.length)
                    e.renderer.state.uniformLocations.set(n, i.slice(0));
                else {
                    if (function(e, t) {
                        if (e.length !== t.length)
                            return !1;
                        for (let n = 0, i = e.length; n < i; n++)
                            if (e[n] !== t[n])
                                return !1;
                        return !0
                    }(s, i))
                        return;
                    s.set ? s.set(i) : function(e, t) {
                        for (let n = 0, i = e.length; n < i; n++)
                            e[n] = t[n]
                    }(s, i),
                    e.renderer.state.uniformLocations.set(n, s)
                }
            } else {
                if (s === i)
                    return;
                e.renderer.state.uniformLocations.set(n, i)
            }
            switch (t) {
            case 5126:
                return i.length ? e.uniform1fv(n, i) : e.uniform1f(n, i);
            case 35664:
                return e.uniform2fv(n, i);
            case 35665:
                return e.uniform3fv(n, i);
            case 35666:
                return e.uniform4fv(n, i);
            case 35670:
            case 5124:
            case 35678:
            case 35680:
                return i.length ? e.uniform1iv(n, i) : e.uniform1i(n, i);
            case 35671:
            case 35667:
                return e.uniform2iv(n, i);
            case 35672:
            case 35668:
                return e.uniform3iv(n, i);
            case 35673:
            case 35669:
                return e.uniform4iv(n, i);
            case 35674:
                return e.uniformMatrix2fv(n, !1, i);
            case 35675:
                return e.uniformMatrix3fv(n, !1, i);
            case 35676:
                return e.uniformMatrix4fv(n, !1, i)
            }
        }
        function o(e) {
            let t = e.split("\n");
            for (let n = 0; n < t.length; n++)
                t[n] = n + 1 + ": " + t[n];
            return t.join("\n")
        }
        let u = 0;
        function l(e) {
            !(u > 100) && (console.warn(e),
            ++u > 100 && console.warn("More than 100 program warnings - stopping logs."))
        }
    },
    558: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return a
            }
        });
        var i = n(8915);
        let r = new i.A
          , s = 1;
        class a {
            constructor({canvas: e=document.createElement("canvas"), width: t=300, height: n=150, dpr: i=1, alpha: r=!1, depth: a=!0, stencil: o=!1, antialias: u=!1, premultipliedAlpha: l=!1, preserveDrawingBuffer: h=!1, powerPreference: c="default", autoClear: d=!0, webgl: p=2}={}) {
                let f = {
                    alpha: r,
                    depth: a,
                    stencil: o,
                    antialias: u,
                    premultipliedAlpha: l,
                    preserveDrawingBuffer: h,
                    powerPreference: c
                };
                this.dpr = i,
                this.alpha = r,
                this.color = !0,
                this.depth = a,
                this.stencil = o,
                this.premultipliedAlpha = l,
                this.autoClear = d,
                this.id = s++,
                2 === p && (this.gl = e.getContext("webgl2", f)),
                this.isWebgl2 = !!this.gl,
                this.gl || (this.gl = e.getContext("webgl", f)),
                this.gl || console.error("unable to create webgl context"),
                this.gl.renderer = this,
                this.setSize(t, n),
                this.state = {},
                this.state.blendFunc = {
                    src: this.gl.ONE,
                    dst: this.gl.ZERO
                },
                this.state.blendEquation = {
                    modeRGB: this.gl.FUNC_ADD
                },
                this.state.cullFace = null,
                this.state.frontFace = this.gl.CCW,
                this.state.depthMask = !0,
                this.state.depthFunc = this.gl.LESS,
                this.state.premultiplyAlpha = !1,
                this.state.flipY = !1,
                this.state.unpackAlignment = 4,
                this.state.framebuffer = null,
                this.state.viewport = {
                    x: 0,
                    y: 0,
                    width: null,
                    height: null
                },
                this.state.textureUnits = [],
                this.state.activeTextureUnit = 0,
                this.state.boundBuffer = null,
                this.state.uniformLocations = new Map,
                this.state.currentProgram = null,
                this.extensions = {},
                this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
                this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
                this.getExtension("OES_texture_float_linear"),
                this.getExtension("OES_texture_half_float"),
                this.getExtension("OES_texture_half_float_linear"),
                this.getExtension("OES_element_index_uint"),
                this.getExtension("OES_standard_derivatives"),
                this.getExtension("EXT_sRGB"),
                this.getExtension("WEBGL_depth_texture"),
                this.getExtension("WEBGL_draw_buffers")),
                this.getExtension("WEBGL_compressed_texture_astc"),
                this.getExtension("EXT_texture_compression_bptc"),
                this.getExtension("WEBGL_compressed_texture_s3tc"),
                this.getExtension("WEBGL_compressed_texture_etc1"),
                this.getExtension("WEBGL_compressed_texture_pvrtc"),
                this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
                this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
                this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
                this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
                this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
                this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
                this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
                this.parameters = {},
                this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            setSize(e, t) {
                this.width = e,
                this.height = t,
                this.gl.canvas.width = e * this.dpr,
                this.gl.canvas.height = t * this.dpr,
                Object.assign(this.gl.canvas.style, {
                    width: e + "px",
                    height: t + "px"
                })
            }
            setViewport(e, t, n=0, i=0) {
                (this.state.viewport.width !== e || this.state.viewport.height !== t) && (this.state.viewport.width = e,
                this.state.viewport.height = t,
                this.state.viewport.x = n,
                this.state.viewport.y = i,
                this.gl.viewport(n, i, e, t))
            }
            setScissor(e, t, n=0, i=0) {
                this.gl.scissor(n, i, e, t)
            }
            enable(e) {
                !0 !== this.state[e] && (this.gl.enable(e),
                this.state[e] = !0)
            }
            disable(e) {
                !1 !== this.state[e] && (this.gl.disable(e),
                this.state[e] = !1)
            }
            setBlendFunc(e, t, n, i) {
                (this.state.blendFunc.src !== e || this.state.blendFunc.dst !== t || this.state.blendFunc.srcAlpha !== n || this.state.blendFunc.dstAlpha !== i) && (this.state.blendFunc.src = e,
                this.state.blendFunc.dst = t,
                this.state.blendFunc.srcAlpha = n,
                this.state.blendFunc.dstAlpha = i,
                void 0 !== n ? this.gl.blendFuncSeparate(e, t, n, i) : this.gl.blendFunc(e, t))
            }
            setBlendEquation(e, t) {
                e = e || this.gl.FUNC_ADD,
                (this.state.blendEquation.modeRGB !== e || this.state.blendEquation.modeAlpha !== t) && (this.state.blendEquation.modeRGB = e,
                this.state.blendEquation.modeAlpha = t,
                void 0 !== t ? this.gl.blendEquationSeparate(e, t) : this.gl.blendEquation(e))
            }
            setCullFace(e) {
                this.state.cullFace !== e && (this.state.cullFace = e,
                this.gl.cullFace(e))
            }
            setFrontFace(e) {
                this.state.frontFace !== e && (this.state.frontFace = e,
                this.gl.frontFace(e))
            }
            setDepthMask(e) {
                this.state.depthMask !== e && (this.state.depthMask = e,
                this.gl.depthMask(e))
            }
            setDepthFunc(e) {
                this.state.depthFunc !== e && (this.state.depthFunc = e,
                this.gl.depthFunc(e))
            }
            activeTexture(e) {
                this.state.activeTextureUnit !== e && (this.state.activeTextureUnit = e,
                this.gl.activeTexture(this.gl.TEXTURE0 + e))
            }
            bindFramebuffer({target: e=this.gl.FRAMEBUFFER, buffer: t=null}={}) {
                this.state.framebuffer !== t && (this.state.framebuffer = t,
                this.gl.bindFramebuffer(e, t))
            }
            getExtension(e, t, n) {
                return t && this.gl[t] ? this.gl[t].bind(this.gl) : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
                t) ? this.extensions[e] ? this.extensions[e][n].bind(this.extensions[e]) : null : this.extensions[e]
            }
            sortOpaque(e, t) {
                return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program.id !== t.program.id ? e.program.id - t.program.id : e.zDepth !== t.zDepth ? e.zDepth - t.zDepth : t.id - e.id
            }
            sortTransparent(e, t) {
                return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.zDepth !== t.zDepth ? t.zDepth - e.zDepth : t.id - e.id
            }
            sortUI(e, t) {
                return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program.id !== t.program.id ? e.program.id - t.program.id : t.id - e.id
            }
            getRenderList({scene: e, camera: t, frustumCull: n, sort: i}) {
                let s = [];
                if (t && n && t.updateFrustum(),
                e.traverse(e=>{
                    if (!e.visible)
                        return !0;
                    if (e.draw) {
                        if (n && e.frustumCulled && t && !t.frustumIntersectsMesh(e))
                            return;
                        s.push(e)
                    }
                }
                ),
                i) {
                    let a = []
                      , o = []
                      , u = [];
                    s.forEach(e=>{
                        e.program.transparent ? e.program.depthTest ? o.push(e) : u.push(e) : a.push(e),
                        e.zDepth = 0,
                        0 === e.renderOrder && e.program.depthTest && t && (e.worldMatrix.getTranslation(r),
                        r.applyMatrix4(t.projectionViewMatrix),
                        e.zDepth = r.z)
                    }
                    ),
                    a.sort(this.sortOpaque),
                    o.sort(this.sortTransparent),
                    u.sort(this.sortUI),
                    s = a.concat(o, u)
                }
                return s
            }
            render({scene: e, camera: t, target: n=null, update: i=!0, sort: r=!0, frustumCull: s=!0, clear: a}) {
                null === n ? (this.bindFramebuffer(),
                this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(n),
                this.setViewport(n.width, n.height)),
                (a || this.autoClear && !1 !== a) && (this.depth && (!n || n.depth) && (this.enable(this.gl.DEPTH_TEST),
                this.setDepthMask(!0)),
                this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
                i && e.updateMatrixWorld(),
                t && t.updateMatrixWorld();
                let o = this.getRenderList({
                    scene: e,
                    camera: t,
                    frustumCull: s,
                    sort: r
                });
                o.forEach(e=>{
                    e.draw({
                        camera: t
                    })
                }
                )
            }
        }
    },
    2686: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return s
            }
        });
        let i = new Uint8Array(4)
          , r = 1;
        class s {
            constructor(e, {image: t, target: n=e.TEXTURE_2D, type: i=e.UNSIGNED_BYTE, format: s=e.RGBA, internalFormat: a=s, wrapS: o=e.CLAMP_TO_EDGE, wrapT: u=e.CLAMP_TO_EDGE, generateMipmaps: l=!0, minFilter: h=l ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR, magFilter: c=e.LINEAR, premultiplyAlpha: d=!1, unpackAlignment: p=4, flipY: f=n == e.TEXTURE_2D, anisotropy: m=0, level: v=0, width: g, height: y=g}={}) {
                this.gl = e,
                this.id = r++,
                this.image = t,
                this.target = n,
                this.type = i,
                this.format = s,
                this.internalFormat = a,
                this.minFilter = h,
                this.magFilter = c,
                this.wrapS = o,
                this.wrapT = u,
                this.generateMipmaps = l,
                this.premultiplyAlpha = d,
                this.unpackAlignment = p,
                this.flipY = f,
                this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy),
                this.level = v,
                this.width = g,
                this.height = y,
                this.texture = this.gl.createTexture(),
                this.store = {
                    image: null
                },
                this.glState = this.gl.renderer.state,
                this.state = {},
                this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
                this.state.magFilter = this.gl.LINEAR,
                this.state.wrapS = this.gl.REPEAT,
                this.state.wrapT = this.gl.REPEAT,
                this.state.anisotropy = 0
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
                this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
            }
            update(e=0) {
                let t = !(this.image === this.store.image && !this.needsUpdate);
                if ((t || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e),
                this.bind()),
                t) {
                    if (this.needsUpdate = !1,
                    this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                    this.glState.flipY = this.flipY),
                    this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                    this.glState.premultiplyAlpha = this.premultiplyAlpha),
                    this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                    this.glState.unpackAlignment = this.unpackAlignment),
                    this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                    this.state.minFilter = this.minFilter),
                    this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                    this.state.magFilter = this.magFilter),
                    this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                    this.state.wrapS = this.wrapS),
                    this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                    this.state.wrapT = this.wrapT),
                    this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                    this.state.anisotropy = this.anisotropy),
                    this.image) {
                        if (this.image.width && (this.width = this.image.width,
                        this.height = this.image.height),
                        this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let n = 0; n < 6; n++)
                                this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + n, this.level, this.internalFormat, this.format, this.type, this.image[n]);
                        else if (ArrayBuffer.isView(this.image))
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let r = 0; r < this.image.length; r++)
                                this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
                        else
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        if (this.generateMipmaps) {
                            var s, a;
                            this.gl.renderer.isWebgl2 || ((s = this.image.width) & s - 1) == 0 && ((a = this.image.height) & a - 1) == 0 ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1,
                            this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                            this.minFilter = this.gl.LINEAR)
                        }
                        this.onUpdate && this.onUpdate()
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (let o = 0; o < 6; o++)
                            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, i);
                    else
                        this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, i);
                    this.store.image = this.image
                }
            }
        }
    },
    9151: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return h
            }
        });
        var i = n(8915);
        function r(e, t, n) {
            let i = t[0]
              , r = t[1]
              , s = t[2]
              , a = t[3]
              , o = n[0]
              , u = n[1]
              , l = n[2]
              , h = n[3];
            return e[0] = i * h + a * o + r * l - s * u,
            e[1] = r * h + a * u + s * o - i * l,
            e[2] = s * h + a * l + i * u - r * o,
            e[3] = a * h - i * o - r * u - s * l,
            e
        }
        let s = function(e, t) {
            let n = t[0]
              , i = t[1]
              , r = t[2]
              , s = t[3]
              , a = n * n + i * i + r * r + s * s;
            return a > 0 && (a = 1 / Math.sqrt(a)),
            e[0] = n * a,
            e[1] = i * a,
            e[2] = r * a,
            e[3] = s * a,
            e
        };
        class a extends Array {
            constructor(e=0, t=0, n=0, i=1) {
                return super(e, t, n, i),
                this.onChange = ()=>{}
                ,
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(e) {
                this[0] = e,
                this.onChange()
            }
            set y(e) {
                this[1] = e,
                this.onChange()
            }
            set z(e) {
                this[2] = e,
                this.onChange()
            }
            set w(e) {
                this[3] = e,
                this.onChange()
            }
            identity() {
                var e;
                return e = this,
                e[0] = 0,
                e[1] = 0,
                e[2] = 0,
                e[3] = 1,
                this.onChange(),
                this
            }
            set(e, t, n, i) {
                var r;
                return e.length ? this.copy(e) : (r = this,
                r[0] = e,
                r[1] = t,
                r[2] = n,
                r[3] = i,
                this.onChange(),
                this)
            }
            rotateX(e) {
                var t, n;
                let i, r, s, a, o, u;
                return t = this,
                n = .5 * e,
                i = this[0],
                r = this[1],
                s = this[2],
                a = this[3],
                o = Math.sin(n),
                u = Math.cos(n),
                t[0] = i * u + a * o,
                t[1] = r * u + s * o,
                t[2] = s * u - r * o,
                t[3] = a * u - i * o,
                this.onChange(),
                this
            }
            rotateY(e) {
                var t, n;
                let i, r, s, a, o, u;
                return t = this,
                n = .5 * e,
                i = this[0],
                r = this[1],
                s = this[2],
                a = this[3],
                o = Math.sin(n),
                u = Math.cos(n),
                t[0] = i * u - s * o,
                t[1] = r * u + a * o,
                t[2] = s * u + i * o,
                t[3] = a * u - r * o,
                this.onChange(),
                this
            }
            rotateZ(e) {
                var t, n;
                let i, r, s, a, o, u;
                return t = this,
                n = .5 * e,
                i = this[0],
                r = this[1],
                s = this[2],
                a = this[3],
                o = Math.sin(n),
                u = Math.cos(n),
                t[0] = i * u + r * o,
                t[1] = r * u - i * o,
                t[2] = s * u + a * o,
                t[3] = a * u - s * o,
                this.onChange(),
                this
            }
            inverse(e=this) {
                var t;
                let n, i, r, s, a, o;
                return t = this,
                n = e[0],
                o = (a = n * n + (i = e[1]) * i + (r = e[2]) * r + (s = e[3]) * s) ? 1 / a : 0,
                t[0] = -n * o,
                t[1] = -i * o,
                t[2] = -r * o,
                t[3] = s * o,
                this.onChange(),
                this
            }
            conjugate(e=this) {
                var t;
                return t = this,
                t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                t[3] = e[3],
                this.onChange(),
                this
            }
            copy(e) {
                var t;
                return t = this,
                t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                this.onChange(),
                this
            }
            normalize(e=this) {
                return s(this, e),
                this.onChange(),
                this
            }
            multiply(e, t) {
                return t ? r(this, e, t) : r(this, this, e),
                this.onChange(),
                this
            }
            dot(e) {
                return this[0] * e[0] + this[1] * e[1] + this[2] * e[2] + this[3] * e[3]
            }
            fromMatrix3(e) {
                return !function(e, t) {
                    let n, i = t[0] + t[4] + t[8];
                    if (i > 0)
                        n = Math.sqrt(i + 1),
                        e[3] = .5 * n,
                        n = .5 / n,
                        e[0] = (t[5] - t[7]) * n,
                        e[1] = (t[6] - t[2]) * n,
                        e[2] = (t[1] - t[3]) * n;
                    else {
                        let r = 0;
                        t[4] > t[0] && (r = 1),
                        t[8] > t[3 * r + r] && (r = 2);
                        let s = (r + 1) % 3
                          , a = (r + 2) % 3;
                        n = Math.sqrt(t[3 * r + r] - t[3 * s + s] - t[3 * a + a] + 1),
                        e[r] = .5 * n,
                        n = .5 / n,
                        e[3] = (t[3 * s + a] - t[3 * a + s]) * n,
                        e[s] = (t[3 * s + r] + t[3 * r + s]) * n,
                        e[a] = (t[3 * a + r] + t[3 * r + a]) * n
                    }
                }(this, e),
                this.onChange(),
                this
            }
            fromEuler(e) {
                return !function(e, t, n="YXZ") {
                    let i = Math.sin(.5 * t[0])
                      , r = Math.cos(.5 * t[0])
                      , s = Math.sin(.5 * t[1])
                      , a = Math.cos(.5 * t[1])
                      , o = Math.sin(.5 * t[2])
                      , u = Math.cos(.5 * t[2]);
                    "XYZ" === n ? (e[0] = i * a * u + r * s * o,
                    e[1] = r * s * u - i * a * o,
                    e[2] = r * a * o + i * s * u,
                    e[3] = r * a * u - i * s * o) : "YXZ" === n ? (e[0] = i * a * u + r * s * o,
                    e[1] = r * s * u - i * a * o,
                    e[2] = r * a * o - i * s * u,
                    e[3] = r * a * u + i * s * o) : "ZXY" === n ? (e[0] = i * a * u - r * s * o,
                    e[1] = r * s * u + i * a * o,
                    e[2] = r * a * o + i * s * u,
                    e[3] = r * a * u - i * s * o) : "ZYX" === n ? (e[0] = i * a * u - r * s * o,
                    e[1] = r * s * u + i * a * o,
                    e[2] = r * a * o - i * s * u,
                    e[3] = r * a * u + i * s * o) : "YZX" === n ? (e[0] = i * a * u + r * s * o,
                    e[1] = r * s * u + i * a * o,
                    e[2] = r * a * o - i * s * u,
                    e[3] = r * a * u - i * s * o) : "XZY" === n && (e[0] = i * a * u - r * s * o,
                    e[1] = r * s * u - i * a * o,
                    e[2] = r * a * o + i * s * u,
                    e[3] = r * a * u + i * s * o)
                }(this, e, e.order),
                this
            }
            fromAxisAngle(e, t) {
                var n, i;
                let r;
                return n = this,
                r = Math.sin(i = .5 * t),
                n[0] = r * e[0],
                n[1] = r * e[1],
                n[2] = r * e[2],
                n[3] = Math.cos(i),
                this.onChange(),
                this
            }
            slerp(e, t) {
                var n;
                let i, r, s, a, o, u, l, h, c, d, p, f, m;
                return n = this,
                u = this[0],
                l = this[1],
                h = this[2],
                c = this[3],
                d = e[0],
                (r = u * d + l * (p = e[1]) + h * (f = e[2]) + c * (m = e[3])) < 0 && (r = -r,
                d = -d,
                p = -p,
                f = -f,
                m = -m),
                1 - r > 1e-6 ? (s = Math.sin(i = Math.acos(r)),
                a = Math.sin((1 - t) * i) / s,
                o = Math.sin(t * i) / s) : (a = 1 - t,
                o = t),
                n[0] = a * u + o * d,
                n[1] = a * l + o * p,
                n[2] = a * h + o * f,
                n[3] = a * c + o * m,
                this.onChange(),
                this
            }
            fromArray(e, t=0) {
                return this[0] = e[t],
                this[1] = e[t + 1],
                this[2] = e[t + 2],
                this[3] = e[t + 3],
                this.onChange(),
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this[0],
                e[t + 1] = this[1],
                e[t + 2] = this[2],
                e[t + 3] = this[3],
                e
            }
        }
        var o = n(7005);
        let u = new o.y;
        class l extends Array {
            constructor(e=0, t=e, n=e, i="YXZ") {
                return super(e, t, n),
                this.order = i,
                this.onChange = ()=>{}
                ,
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(e) {
                this[0] = e,
                this.onChange()
            }
            set y(e) {
                this[1] = e,
                this.onChange()
            }
            set z(e) {
                this[2] = e,
                this.onChange()
            }
            set(e, t=e, n=e) {
                return e.length ? this.copy(e) : (this[0] = e,
                this[1] = t,
                this[2] = n,
                this.onChange(),
                this)
            }
            copy(e) {
                return this[0] = e[0],
                this[1] = e[1],
                this[2] = e[2],
                this.onChange(),
                this
            }
            reorder(e) {
                return this.order = e,
                this.onChange(),
                this
            }
            fromRotationMatrix(e, t=this.order) {
                return !function(e, t, n="YXZ") {
                    "XYZ" === n ? (e[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)),
                    .99999 > Math.abs(t[8]) ? (e[0] = Math.atan2(-t[9], t[10]),
                    e[2] = Math.atan2(-t[4], t[0])) : (e[0] = Math.atan2(t[6], t[5]),
                    e[2] = 0)) : "YXZ" === n ? (e[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)),
                    .99999 > Math.abs(t[9]) ? (e[1] = Math.atan2(t[8], t[10]),
                    e[2] = Math.atan2(t[1], t[5])) : (e[1] = Math.atan2(-t[2], t[0]),
                    e[2] = 0)) : "ZXY" === n ? (e[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)),
                    .99999 > Math.abs(t[6]) ? (e[1] = Math.atan2(-t[2], t[10]),
                    e[2] = Math.atan2(-t[4], t[5])) : (e[1] = 0,
                    e[2] = Math.atan2(t[1], t[0]))) : "ZYX" === n ? (e[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)),
                    .99999 > Math.abs(t[2]) ? (e[0] = Math.atan2(t[6], t[10]),
                    e[2] = Math.atan2(t[1], t[0])) : (e[0] = 0,
                    e[2] = Math.atan2(-t[4], t[5]))) : "YZX" === n ? (e[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)),
                    .99999 > Math.abs(t[1]) ? (e[0] = Math.atan2(-t[9], t[5]),
                    e[1] = Math.atan2(-t[2], t[0])) : (e[0] = 0,
                    e[1] = Math.atan2(t[8], t[10]))) : "XZY" === n && (e[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)),
                    .99999 > Math.abs(t[4]) ? (e[0] = Math.atan2(t[6], t[5]),
                    e[1] = Math.atan2(t[8], t[0])) : (e[0] = Math.atan2(-t[9], t[10]),
                    e[1] = 0))
                }(this, e, t),
                this.onChange(),
                this
            }
            fromQuaternion(e, t=this.order) {
                return u.fromQuaternion(e),
                this.fromRotationMatrix(u, t)
            }
            toArray(e=[], t=0) {
                return e[t] = this[0],
                e[t + 1] = this[1],
                e[t + 2] = this[2],
                e
            }
        }
        class h {
            constructor() {
                this.parent = null,
                this.children = [],
                this.visible = !0,
                this.matrix = new o.y,
                this.worldMatrix = new o.y,
                this.matrixAutoUpdate = !0,
                this.position = new i.A,
                this.quaternion = new a,
                this.scale = new i.A(1),
                this.rotation = new l,
                this.up = new i.A(0,1,0),
                this.rotation.onChange = ()=>this.quaternion.fromEuler(this.rotation),
                this.quaternion.onChange = ()=>this.rotation.fromQuaternion(this.quaternion)
            }
            setParent(e, t=!0) {
                this.parent && e !== this.parent && this.parent.removeChild(this, !1),
                this.parent = e,
                t && e && e.addChild(this, !1)
            }
            addChild(e, t=!0) {
                ~this.children.indexOf(e) || this.children.push(e),
                t && e.setParent(this, !1)
            }
            removeChild(e, t=!0) {
                ~this.children.indexOf(e) && this.children.splice(this.children.indexOf(e), 1),
                t && e.setParent(null, !1)
            }
            updateMatrixWorld(e) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.worldMatrixNeedsUpdate || e) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                this.worldMatrixNeedsUpdate = !1,
                e = !0);
                for (let t = 0, n = this.children.length; t < n; t++)
                    this.children[t].updateMatrixWorld(e)
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale),
                this.worldMatrixNeedsUpdate = !0
            }
            traverse(e) {
                if (!e(this))
                    for (let t = 0, n = this.children.length; t < n; t++)
                        this.children[t].traverse(e)
            }
            decompose() {
                this.matrix.getTranslation(this.position),
                this.matrix.getRotation(this.quaternion),
                this.matrix.getScaling(this.scale),
                this.rotation.fromQuaternion(this.quaternion)
            }
            lookAt(e, t=!1) {
                t ? this.matrix.lookAt(this.position, e, this.up) : this.matrix.lookAt(e, this.position, this.up),
                this.matrix.getRotation(this.quaternion),
                this.rotation.fromQuaternion(this.quaternion)
            }
        }
    },
    7005: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            let i = t[0]
              , r = t[1]
              , s = t[2]
              , a = t[3]
              , o = t[4]
              , u = t[5]
              , l = t[6]
              , h = t[7]
              , c = t[8]
              , d = t[9]
              , p = t[10]
              , f = t[11]
              , m = t[12]
              , v = t[13]
              , g = t[14]
              , y = t[15]
              , b = n[0]
              , x = n[1]
              , w = n[2]
              , _ = n[3];
            return e[0] = b * i + x * o + w * c + _ * m,
            e[1] = b * r + x * u + w * d + _ * v,
            e[2] = b * s + x * l + w * p + _ * g,
            e[3] = b * a + x * h + w * f + _ * y,
            b = n[4],
            x = n[5],
            w = n[6],
            _ = n[7],
            e[4] = b * i + x * o + w * c + _ * m,
            e[5] = b * r + x * u + w * d + _ * v,
            e[6] = b * s + x * l + w * p + _ * g,
            e[7] = b * a + x * h + w * f + _ * y,
            b = n[8],
            x = n[9],
            w = n[10],
            _ = n[11],
            e[8] = b * i + x * o + w * c + _ * m,
            e[9] = b * r + x * u + w * d + _ * v,
            e[10] = b * s + x * l + w * p + _ * g,
            e[11] = b * a + x * h + w * f + _ * y,
            b = n[12],
            x = n[13],
            w = n[14],
            _ = n[15],
            e[12] = b * i + x * o + w * c + _ * m,
            e[13] = b * r + x * u + w * d + _ * v,
            e[14] = b * s + x * l + w * p + _ * g,
            e[15] = b * a + x * h + w * f + _ * y,
            e
        }
        function r(e, t) {
            let n = t[0]
              , i = t[1]
              , r = t[2]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , u = t[8]
              , l = t[9]
              , h = t[10];
            return e[0] = Math.hypot(n, i, r),
            e[1] = Math.hypot(s, a, o),
            e[2] = Math.hypot(u, l, h),
            e
        }
        n.d(t, {
            y: function() {
                return a
            }
        });
        let s = function() {
            let e = [0, 0, 0];
            return function(t, n) {
                r(e, n);
                let i = 1 / 0
                  , s = 1 / 0
                  , a = 1 / 0
                  , o = n[0] * i
                  , u = n[1] * s
                  , l = n[2] * a
                  , h = n[4] * i
                  , c = n[5] * s
                  , d = n[6] * a
                  , p = n[8] * i
                  , f = n[9] * s
                  , m = n[10] * a
                  , v = o + c + m
                  , g = 0;
                return v > 0 ? (g = 2 * Math.sqrt(v + 1),
                t[3] = .25 * g,
                t[0] = (d - f) / g,
                t[1] = (p - l) / g,
                t[2] = (u - h) / g) : o > c && o > m ? (g = 2 * Math.sqrt(1 + o - c - m),
                t[3] = (d - f) / g,
                t[0] = .25 * g,
                t[1] = (u + h) / g,
                t[2] = (p + l) / g) : c > m ? (g = 2 * Math.sqrt(1 + c - o - m),
                t[3] = (p - l) / g,
                t[0] = (u + h) / g,
                t[1] = .25 * g,
                t[2] = (d + f) / g) : (g = 2 * Math.sqrt(1 + m - o - c),
                t[3] = (u - h) / g,
                t[0] = (p + l) / g,
                t[1] = (d + f) / g,
                t[2] = .25 * g),
                t
            }
        }();
        class a extends Array {
            constructor(e=1, t=0, n=0, i=0, r=0, s=1, a=0, o=0, u=0, l=0, h=1, c=0, d=0, p=0, f=0, m=1) {
                return super(e, t, n, i, r, s, a, o, u, l, h, c, d, p, f, m),
                this
            }
            get x() {
                return this[12]
            }
            get y() {
                return this[13]
            }
            get z() {
                return this[14]
            }
            get w() {
                return this[15]
            }
            set x(e) {
                this[12] = e
            }
            set y(e) {
                this[13] = e
            }
            set z(e) {
                this[14] = e
            }
            set w(e) {
                this[15] = e
            }
            set(e, t, n, i, r, s, a, o, u, l, h, c, d, p, f, m) {
                var v;
                return e.length ? this.copy(e) : (v = this,
                v[0] = e,
                v[1] = t,
                v[2] = n,
                v[3] = i,
                v[4] = r,
                v[5] = s,
                v[6] = a,
                v[7] = o,
                v[8] = u,
                v[9] = l,
                v[10] = h,
                v[11] = c,
                v[12] = d,
                v[13] = p,
                v[14] = f,
                v[15] = m,
                this)
            }
            translate(e, t=this) {
                var n;
                let i, r, s, a, o, u, l, h, c, d, p, f, m, v, g;
                return n = this,
                m = e[0],
                v = e[1],
                g = e[2],
                t === n ? (n[12] = t[0] * m + t[4] * v + t[8] * g + t[12],
                n[13] = t[1] * m + t[5] * v + t[9] * g + t[13],
                n[14] = t[2] * m + t[6] * v + t[10] * g + t[14],
                n[15] = t[3] * m + t[7] * v + t[11] * g + t[15]) : (i = t[0],
                r = t[1],
                s = t[2],
                a = t[3],
                o = t[4],
                u = t[5],
                l = t[6],
                h = t[7],
                c = t[8],
                d = t[9],
                p = t[10],
                f = t[11],
                n[0] = i,
                n[1] = r,
                n[2] = s,
                n[3] = a,
                n[4] = o,
                n[5] = u,
                n[6] = l,
                n[7] = h,
                n[8] = c,
                n[9] = d,
                n[10] = p,
                n[11] = f,
                n[12] = i * m + o * v + c * g + t[12],
                n[13] = r * m + u * v + d * g + t[13],
                n[14] = s * m + l * v + p * g + t[14],
                n[15] = a * m + h * v + f * g + t[15]),
                this
            }
            rotate(e, t, n=this) {
                var i;
                let r, s, a, o, u, l, h, c, d, p, f, m, v, g, y, b, x, w, _, E, A, T, S, O, k, N, I, M;
                return i = this,
                1e-6 > Math.abs(M = Math.hypot(k = t[0], N = t[1], I = t[2])) || (k *= M = 1 / M,
                N *= M,
                I *= M,
                r = Math.sin(e),
                a = 1 - (s = Math.cos(e)),
                o = n[0],
                u = n[1],
                l = n[2],
                h = n[3],
                c = n[4],
                d = n[5],
                p = n[6],
                f = n[7],
                m = n[8],
                v = n[9],
                g = n[10],
                y = n[11],
                b = k * k * a + s,
                x = N * k * a + I * r,
                w = I * k * a - N * r,
                _ = k * N * a - I * r,
                E = N * N * a + s,
                A = I * N * a + k * r,
                T = k * I * a + N * r,
                S = N * I * a - k * r,
                O = I * I * a + s,
                i[0] = o * b + c * x + m * w,
                i[1] = u * b + d * x + v * w,
                i[2] = l * b + p * x + g * w,
                i[3] = h * b + f * x + y * w,
                i[4] = o * _ + c * E + m * A,
                i[5] = u * _ + d * E + v * A,
                i[6] = l * _ + p * E + g * A,
                i[7] = h * _ + f * E + y * A,
                i[8] = o * T + c * S + m * O,
                i[9] = u * T + d * S + v * O,
                i[10] = l * T + p * S + g * O,
                i[11] = h * T + f * S + y * O,
                n !== i && (i[12] = n[12],
                i[13] = n[13],
                i[14] = n[14],
                i[15] = n[15])),
                this
            }
            scale(e, t=this) {
                var n, i;
                let r, s, a;
                return n = this,
                r = (i = "number" == typeof e ? [e, e, e] : e)[0],
                s = i[1],
                a = i[2],
                n[0] = t[0] * r,
                n[1] = t[1] * r,
                n[2] = t[2] * r,
                n[3] = t[3] * r,
                n[4] = t[4] * s,
                n[5] = t[5] * s,
                n[6] = t[6] * s,
                n[7] = t[7] * s,
                n[8] = t[8] * a,
                n[9] = t[9] * a,
                n[10] = t[10] * a,
                n[11] = t[11] * a,
                n[12] = t[12],
                n[13] = t[13],
                n[14] = t[14],
                n[15] = t[15],
                this
            }
            multiply(e, t) {
                return t ? i(this, e, t) : i(this, this, e),
                this
            }
            identity() {
                var e;
                return e = this,
                e[0] = 1,
                e[1] = 0,
                e[2] = 0,
                e[3] = 0,
                e[4] = 0,
                e[5] = 1,
                e[6] = 0,
                e[7] = 0,
                e[8] = 0,
                e[9] = 0,
                e[10] = 1,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            }
            copy(e) {
                var t;
                return t = this,
                t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                t[3] = e[3],
                t[4] = e[4],
                t[5] = e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8],
                t[9] = e[9],
                t[10] = e[10],
                t[11] = e[11],
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15],
                this
            }
            fromPerspective({fov: e, aspect: t, near: n, far: i}={}) {
                var r;
                let s, a;
                return r = this,
                s = 1 / Math.tan(e / 2),
                a = 1 / (n - i),
                r[0] = s / t,
                r[1] = 0,
                r[2] = 0,
                r[3] = 0,
                r[4] = 0,
                r[5] = s,
                r[6] = 0,
                r[7] = 0,
                r[8] = 0,
                r[9] = 0,
                r[10] = (i + n) * a,
                r[11] = -1,
                r[12] = 0,
                r[13] = 0,
                r[14] = 2 * i * n * a,
                r[15] = 0,
                this
            }
            fromOrthogonal({left: e, right: t, bottom: n, top: i, near: r, far: s}) {
                var a;
                let o, u, l;
                return a = this,
                o = 1 / (e - t),
                u = 1 / (n - i),
                l = 1 / (r - s),
                a[0] = -2 * o,
                a[1] = 0,
                a[2] = 0,
                a[3] = 0,
                a[4] = 0,
                a[5] = -2 * u,
                a[6] = 0,
                a[7] = 0,
                a[8] = 0,
                a[9] = 0,
                a[10] = 2 * l,
                a[11] = 0,
                a[12] = (e + t) * o,
                a[13] = (i + n) * u,
                a[14] = (s + r) * l,
                a[15] = 1,
                this
            }
            fromQuaternion(e) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f, m, v, g;
                return t = this,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = n + n,
                o = i + i,
                u = r + r,
                l = n * a,
                h = i * a,
                c = i * o,
                d = r * a,
                p = r * o,
                f = r * u,
                m = s * a,
                v = s * o,
                g = s * u,
                t[0] = 1 - c - f,
                t[1] = h + g,
                t[2] = d - v,
                t[3] = 0,
                t[4] = h - g,
                t[5] = 1 - l - f,
                t[6] = p + m,
                t[7] = 0,
                t[8] = d + v,
                t[9] = p - m,
                t[10] = 1 - l - c,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1,
                this
            }
            setPosition(e) {
                return this.x = e[0],
                this.y = e[1],
                this.z = e[2],
                this
            }
            inverse(e=this) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f, m, v, g, y, b, x, w, _, E, A, T, S, O, k, N, I;
                return t = this,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                c = e[9],
                d = e[10],
                p = e[11],
                f = e[12],
                m = e[13],
                v = e[14],
                g = e[15],
                y = n * o - i * a,
                b = n * u - r * a,
                x = n * l - s * a,
                w = i * u - r * o,
                _ = i * l - s * o,
                E = r * l - s * u,
                A = h * m - c * f,
                T = h * v - d * f,
                S = h * g - p * f,
                O = c * v - d * m,
                k = c * g - p * m,
                (I = y * (N = d * g - p * v) - b * k + x * O + w * S - _ * T + E * A) && (I = 1 / I,
                t[0] = (o * N - u * k + l * O) * I,
                t[1] = (r * k - i * N - s * O) * I,
                t[2] = (m * E - v * _ + g * w) * I,
                t[3] = (d * _ - c * E - p * w) * I,
                t[4] = (u * S - a * N - l * T) * I,
                t[5] = (n * N - r * S + s * T) * I,
                t[6] = (v * x - f * E - g * b) * I,
                t[7] = (h * E - d * x + p * b) * I,
                t[8] = (a * k - o * S + l * A) * I,
                t[9] = (i * S - n * k - s * A) * I,
                t[10] = (f * _ - m * x + g * y) * I,
                t[11] = (c * x - h * _ - p * y) * I,
                t[12] = (o * T - a * O - u * A) * I,
                t[13] = (n * O - i * T + r * A) * I,
                t[14] = (m * b - f * w - v * y) * I,
                t[15] = (h * w - c * b + d * y) * I),
                this
            }
            compose(e, t, n) {
                var i;
                let r, s, a, o, u, l, h, c, d, p, f, m, v, g, y, b, x, w, _;
                return i = this,
                r = e[0],
                s = e[1],
                a = e[2],
                o = e[3],
                u = r + r,
                l = s + s,
                h = a + a,
                c = r * u,
                d = r * l,
                p = r * h,
                f = s * l,
                m = s * h,
                v = a * h,
                g = o * u,
                y = o * l,
                b = o * h,
                x = n[0],
                w = n[1],
                _ = n[2],
                i[0] = (1 - (f + v)) * x,
                i[1] = (d + b) * x,
                i[2] = (p - y) * x,
                i[3] = 0,
                i[4] = (d - b) * w,
                i[5] = (1 - (c + v)) * w,
                i[6] = (m + g) * w,
                i[7] = 0,
                i[8] = (p + y) * _,
                i[9] = (m - g) * _,
                i[10] = (1 - (c + f)) * _,
                i[11] = 0,
                i[12] = t[0],
                i[13] = t[1],
                i[14] = t[2],
                i[15] = 1,
                this
            }
            getRotation(e) {
                return s(e, this),
                this
            }
            getTranslation(e) {
                var t;
                return (t = e)[0] = this[12],
                t[1] = this[13],
                t[2] = this[14],
                this
            }
            getScaling(e) {
                return r(e, this),
                this
            }
            getMaxScaleOnAxis() {
                let e, t, n, i, r, s, a, o, u;
                return e = this[0],
                t = this[1],
                n = this[2],
                i = this[4],
                r = this[5],
                s = this[6],
                Math.sqrt(Math.max(e * e + t * t + n * n, i * i + r * r + s * s, (a = this[8]) * a + (o = this[9]) * o + (u = this[10]) * u))
            }
            lookAt(e, t, n) {
                var i;
                let r, s, a, o, u, l, h, c, d, p, f, m, v;
                return i = this,
                r = e[0],
                s = e[1],
                a = e[2],
                o = n[0],
                u = n[1],
                l = n[2],
                0 == (p = (h = r - t[0]) * h + (c = s - t[1]) * c + (d = a - t[2]) * d) ? d = 1 : (h *= p = 1 / Math.sqrt(p),
                c *= p,
                d *= p),
                0 == (p = (f = u * d - l * c) * f + (m = l * h - o * d) * m + (v = o * c - u * h) * v) && (l ? o += 1e-6 : u ? l += 1e-6 : u += 1e-6,
                p = (f = u * d - l * c) * f + (m = l * h - o * d) * m + (v = o * c - u * h) * v),
                f *= p = 1 / Math.sqrt(p),
                m *= p,
                v *= p,
                i[0] = f,
                i[1] = m,
                i[2] = v,
                i[3] = 0,
                i[4] = c * v - d * m,
                i[5] = d * f - h * v,
                i[6] = h * m - c * f,
                i[7] = 0,
                i[8] = h,
                i[9] = c,
                i[10] = d,
                i[11] = 0,
                i[12] = r,
                i[13] = s,
                i[14] = a,
                i[15] = 1,
                this
            }
            determinant() {
                let e, t, n, i, r, s, a, o, u, l, h, c, d, p, f, m;
                return e = this[0],
                t = this[1],
                n = this[2],
                i = this[3],
                r = this[4],
                s = this[5],
                a = this[6],
                o = this[7],
                u = this[8],
                l = this[9],
                h = this[10],
                c = this[11],
                d = this[12],
                p = this[13],
                f = this[14],
                (e * s - t * r) * (h * (m = this[15]) - c * f) - (e * a - n * r) * (l * m - c * p) + (e * o - i * r) * (l * f - h * p) + (t * a - n * s) * (u * m - c * d) - (t * o - i * s) * (u * f - h * d) + (n * o - i * a) * (u * p - l * d)
            }
            fromArray(e, t=0) {
                return this[0] = e[t],
                this[1] = e[t + 1],
                this[2] = e[t + 2],
                this[3] = e[t + 3],
                this[4] = e[t + 4],
                this[5] = e[t + 5],
                this[6] = e[t + 6],
                this[7] = e[t + 7],
                this[8] = e[t + 8],
                this[9] = e[t + 9],
                this[10] = e[t + 10],
                this[11] = e[t + 11],
                this[12] = e[t + 12],
                this[13] = e[t + 13],
                this[14] = e[t + 14],
                this[15] = e[t + 15],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this[0],
                e[t + 1] = this[1],
                e[t + 2] = this[2],
                e[t + 3] = this[3],
                e[t + 4] = this[4],
                e[t + 5] = this[5],
                e[t + 6] = this[6],
                e[t + 7] = this[7],
                e[t + 8] = this[8],
                e[t + 9] = this[9],
                e[t + 10] = this[10],
                e[t + 11] = this[11],
                e[t + 12] = this[12],
                e[t + 13] = this[13],
                e[t + 14] = this[14],
                e[t + 15] = this[15],
                e
            }
        }
    },
    2861: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            return e[0] = t[0] + n[0],
            e[1] = t[1] + n[1],
            e
        }
        function r(e, t, n) {
            return e[0] = t[0] - n[0],
            e[1] = t[1] - n[1],
            e
        }
        function s(e, t, n) {
            return e[0] = t[0] * n,
            e[1] = t[1] * n,
            e
        }
        function a(e) {
            var t = e[0]
              , n = e[1];
            return Math.sqrt(t * t + n * n)
        }
        function o(e, t) {
            return e[0] * t[1] - e[1] * t[0]
        }
        n.d(t, {
            S: function() {
                return u
            }
        });
        class u extends Array {
            constructor(e=0, t=e) {
                return super(e, t),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            set x(e) {
                this[0] = e
            }
            set y(e) {
                this[1] = e
            }
            set(e, t=e) {
                var n;
                return e.length ? this.copy(e) : (n = this,
                n[0] = e,
                n[1] = t,
                this)
            }
            copy(e) {
                var t;
                return t = this,
                t[0] = e[0],
                t[1] = e[1],
                this
            }
            add(e, t) {
                return t ? i(this, e, t) : i(this, this, e),
                this
            }
            sub(e, t) {
                return t ? r(this, e, t) : r(this, this, e),
                this
            }
            multiply(e) {
                if (e.length) {
                    var t;
                    t = this,
                    t[0] = this[0] * e[0],
                    t[1] = this[1] * e[1]
                } else
                    s(this, this, e);
                return this
            }
            divide(e) {
                if (e.length) {
                    var t;
                    t = this,
                    t[0] = this[0] / e[0],
                    t[1] = this[1] / e[1]
                } else
                    s(this, this, 1 / e);
                return this
            }
            inverse(e=this) {
                var t;
                return t = this,
                t[0] = 1 / e[0],
                t[1] = 1 / e[1],
                this
            }
            len() {
                return a(this)
            }
            distance(e) {
                var t, n;
                return e ? Math.sqrt((t = e[0] - this[0]) * t + (n = e[1] - this[1]) * n) : a(this)
            }
            squaredLen() {
                return this.squaredDistance()
            }
            squaredDistance(e) {
                var t, n, i, r;
                return e ? (t = e[0] - this[0]) * t + (n = e[1] - this[1]) * n : (i = this[0]) * i + (r = this[1]) * r
            }
            negate(e=this) {
                var t;
                return t = this,
                t[0] = -e[0],
                t[1] = -e[1],
                this
            }
            cross(e, t) {
                return t ? o(e, t) : o(this, e)
            }
            scale(e) {
                return s(this, this, e),
                this
            }
            normalize() {
                var e, t, n, i;
                return e = this,
                (i = (t = this[0]) * t + (n = this[1]) * n) > 0 && (i = 1 / Math.sqrt(i)),
                e[0] = this[0] * i,
                e[1] = this[1] * i,
                this
            }
            dot(e) {
                return this[0] * e[0] + this[1] * e[1]
            }
            equals(e) {
                return this[0] === e[0] && this[1] === e[1]
            }
            applyMatrix3(e) {
                var t, n, i;
                return t = this,
                n = this[0],
                i = this[1],
                t[0] = e[0] * n + e[3] * i + e[6],
                t[1] = e[1] * n + e[4] * i + e[7],
                this
            }
            applyMatrix4(e) {
                var t;
                let n, i;
                return t = this,
                n = this[0],
                i = this[1],
                t[0] = e[0] * n + e[4] * i + e[12],
                t[1] = e[1] * n + e[5] * i + e[13],
                this
            }
            lerp(e, t) {
                var n, i, r;
                return n = this,
                i = this[0],
                r = this[1],
                n[0] = i + t * (e[0] - i),
                n[1] = r + t * (e[1] - r),
                this
            }
            clone() {
                return new u(this[0],this[1])
            }
            fromArray(e, t=0) {
                return this[0] = e[t],
                this[1] = e[t + 1],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this[0],
                e[t + 1] = this[1],
                e
            }
        }
    },
    8915: function(e, t, n) {
        "use strict";
        function i(e) {
            let t = e[0]
              , n = e[1]
              , i = e[2];
            return Math.sqrt(t * t + n * n + i * i)
        }
        function r(e, t) {
            return e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e
        }
        function s(e, t, n) {
            return e[0] = t[0] + n[0],
            e[1] = t[1] + n[1],
            e[2] = t[2] + n[2],
            e
        }
        function a(e, t, n) {
            return e[0] = t[0] - n[0],
            e[1] = t[1] - n[1],
            e[2] = t[2] - n[2],
            e
        }
        function o(e, t, n) {
            return e[0] = t[0] * n,
            e[1] = t[1] * n,
            e[2] = t[2] * n,
            e
        }
        function u(e) {
            let t = e[0]
              , n = e[1]
              , i = e[2];
            return t * t + n * n + i * i
        }
        function l(e, t) {
            let n = t[0]
              , i = t[1]
              , r = t[2]
              , s = n * n + i * i + r * r;
            return s > 0 && (s = 1 / Math.sqrt(s)),
            e[0] = t[0] * s,
            e[1] = t[1] * s,
            e[2] = t[2] * s,
            e
        }
        function h(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }
        function c(e, t, n) {
            let i = t[0]
              , r = t[1]
              , s = t[2]
              , a = n[0]
              , o = n[1]
              , u = n[2];
            return e[0] = r * u - s * o,
            e[1] = s * a - i * u,
            e[2] = i * o - r * a,
            e
        }
        n.d(t, {
            A: function() {
                return p
            }
        });
        let d = function() {
            let e = [0, 0, 0]
              , t = [0, 0, 0];
            return function(n, i) {
                r(e, n),
                r(t, i),
                l(e, e),
                l(t, t);
                let s = h(e, t);
                return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
            }
        }();
        class p extends Array {
            constructor(e=0, t=e, n=e) {
                return super(e, t, n),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(e) {
                this[0] = e
            }
            set y(e) {
                this[1] = e
            }
            set z(e) {
                this[2] = e
            }
            set(e, t=e, n=e) {
                var i;
                return e.length ? this.copy(e) : (i = this,
                i[0] = e,
                i[1] = t,
                i[2] = n,
                this)
            }
            copy(e) {
                return r(this, e),
                this
            }
            add(e, t) {
                return t ? s(this, e, t) : s(this, this, e),
                this
            }
            sub(e, t) {
                return t ? a(this, e, t) : a(this, this, e),
                this
            }
            multiply(e) {
                if (e.length) {
                    var t;
                    t = this,
                    t[0] = this[0] * e[0],
                    t[1] = this[1] * e[1],
                    t[2] = this[2] * e[2]
                } else
                    o(this, this, e);
                return this
            }
            divide(e) {
                if (e.length) {
                    var t;
                    t = this,
                    t[0] = this[0] / e[0],
                    t[1] = this[1] / e[1],
                    t[2] = this[2] / e[2]
                } else
                    o(this, this, 1 / e);
                return this
            }
            inverse(e=this) {
                var t;
                return t = this,
                t[0] = 1 / e[0],
                t[1] = 1 / e[1],
                t[2] = 1 / e[2],
                this
            }
            len() {
                return i(this)
            }
            distance(e) {
                let t, n, r;
                return e ? Math.sqrt((t = e[0] - this[0]) * t + (n = e[1] - this[1]) * n + (r = e[2] - this[2]) * r) : i(this)
            }
            squaredLen() {
                return u(this)
            }
            squaredDistance(e) {
                let t, n, i;
                return e ? (t = e[0] - this[0]) * t + (n = e[1] - this[1]) * n + (i = e[2] - this[2]) * i : u(this)
            }
            negate(e=this) {
                var t;
                return t = this,
                t[0] = -e[0],
                t[1] = -e[1],
                t[2] = -e[2],
                this
            }
            cross(e, t) {
                return t ? c(this, e, t) : c(this, this, e),
                this
            }
            scale(e) {
                return o(this, this, e),
                this
            }
            normalize() {
                return l(this, this),
                this
            }
            dot(e) {
                return h(this, e)
            }
            equals(e) {
                return this[0] === e[0] && this[1] === e[1] && this[2] === e[2]
            }
            applyMatrix3(e) {
                var t;
                let n, i, r;
                return t = this,
                n = this[0],
                i = this[1],
                r = this[2],
                t[0] = n * e[0] + i * e[3] + r * e[6],
                t[1] = n * e[1] + i * e[4] + r * e[7],
                t[2] = n * e[2] + i * e[5] + r * e[8],
                this
            }
            applyMatrix4(e) {
                var t;
                let n, i, r, s;
                return t = this,
                n = this[0],
                i = this[1],
                r = this[2],
                s = (s = e[3] * n + e[7] * i + e[11] * r + e[15]) || 1,
                t[0] = (e[0] * n + e[4] * i + e[8] * r + e[12]) / s,
                t[1] = (e[1] * n + e[5] * i + e[9] * r + e[13]) / s,
                t[2] = (e[2] * n + e[6] * i + e[10] * r + e[14]) / s,
                this
            }
            scaleRotateMatrix4(e) {
                var t;
                let n, i, r, s;
                return t = this,
                n = this[0],
                i = this[1],
                r = this[2],
                s = (s = e[3] * n + e[7] * i + e[11] * r + e[15]) || 1,
                t[0] = (e[0] * n + e[4] * i + e[8] * r) / s,
                t[1] = (e[1] * n + e[5] * i + e[9] * r) / s,
                t[2] = (e[2] * n + e[6] * i + e[10] * r) / s,
                this
            }
            applyQuaternion(e) {
                var t;
                let n, i, r, s, a, o, u, l, h, c, d, p, f, m;
                return t = this,
                n = this[0],
                i = this[1],
                r = this[2],
                s = e[0],
                a = e[1],
                o = e[2],
                u = e[3],
                l = a * r - o * i,
                h = o * n - s * r,
                c = s * i - a * n,
                d = a * c - o * h,
                p = o * l - s * c,
                f = s * h - a * l,
                l *= m = 2 * u,
                h *= m,
                c *= m,
                d *= 2,
                p *= 2,
                f *= 2,
                t[0] = n + l + d,
                t[1] = i + h + p,
                t[2] = r + c + f,
                this
            }
            angle(e) {
                return d(this, e)
            }
            lerp(e, t) {
                var n;
                let i, r, s;
                return n = this,
                i = this[0],
                r = this[1],
                s = this[2],
                n[0] = i + t * (e[0] - i),
                n[1] = r + t * (e[1] - r),
                n[2] = s + t * (e[2] - s),
                this
            }
            clone() {
                return new p(this[0],this[1],this[2])
            }
            fromArray(e, t=0) {
                return this[0] = e[t],
                this[1] = e[t + 1],
                this[2] = e[t + 2],
                this
            }
            toArray(e=[], t=0) {
                return e[t] = this[0],
                e[t + 1] = this[1],
                e[t + 2] = this[2],
                e
            }
            transformDirection(e) {
                let t = this[0]
                  , n = this[1]
                  , i = this[2];
                return this[0] = e[0] * t + e[4] * n + e[8] * i,
                this[1] = e[1] * t + e[5] * n + e[9] * i,
                this[2] = e[2] * t + e[6] * n + e[10] * i,
                this.normalize()
            }
        }
    },
    114: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return l
            }
        });
        let i = e=>{
            let t;
            let n = new Set
              , i = (e,i)=>{
                let r = "function" == typeof e ? e(t) : e;
                if (!Object.is(r, t)) {
                    let s = t;
                    t = (null != i ? i : "object" != typeof r) ? r : Object.assign({}, t, r),
                    n.forEach(e=>e(t, s))
                }
            }
              , r = ()=>t
              , s = e=>(n.add(e),
            ()=>n.delete(e))
              , a = ()=>n.clear()
              , o = {
                setState: i,
                getState: r,
                subscribe: s,
                destroy: a
            };
            return t = e(i, r, o),
            o
        }
          , r = e=>e ? i(e) : i;
        var s = n(959)
          , a = n(7231);
        let {useSyncExternalStoreWithSelector: o} = a
          , u = e=>{
            let t = "function" == typeof e ? r(e) : e
              , n = (e,n)=>(function(e, t=e.getState, n) {
                let i = o(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                return (0,
                s.useDebugValue)(i),
                i
            }
            )(t, e, n);
            return Object.assign(n, t),
            n
        }
          , l = e=>e ? u(e) : u
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(991),
        t(4086)
    }),
    _N_E = e.O()
}
]);
