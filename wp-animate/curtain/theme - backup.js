;(function ($) {

    $(window).on('load', function () {
        mrittik_webgl_effects();
    });

    $(document).ready(function () {
        
        /* Custom Effects */
        $('a, input, button, .pxl-transtion').on('mouseover', function() {
            $(this).addClass('pxl-hover-transition');
        });

    });


    /* Custom WebGL Effects */
    function mrittik_webgl_effects() {
        var WebGL_vs = `#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 texture0Matrix;
        uniform mat4 texture1Matrix;
        uniform mat4 mapMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoordMap = (mapMatrix * vec4(aTextureCoord, 0., 1.)).xy;
            vVertexPosition = vertexPosition;
        }`;

        var WebGL_fs = `#ifdef GL_ES
        precision mediump float;
        #endif

        #define PI2 6.28318530718
        #define PI 3.14159265359
        #define S(a,b,n) smoothstep(a,b,n)

        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uReso;
        uniform vec2 uMouse;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D map;

        float exponentialEasing (float x, float a){

            float epsilon = 0.00001;
            float min_param_a = 0.0 + epsilon;
            float max_param_a = 1.0 - epsilon;
            a = max(min_param_a, min(max_param_a, a));

            if (a < 0.5){
                a = 2.0 * a;
                float y = pow(x, a);
                return y;
            } else {
                a = 2.0 * (a-0.5);
                float y = pow(x, 1.0 / (1.-a));
                return y;
            }
        }

        vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.411764705882353) * direction;
            vec2 off2 = vec2(3.2941176470588234) * direction;
            vec2 off3 = vec2(5.176470588235294) * direction;
            color += texture2D(image, uv) * 0.1964825501511404;
            color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
            color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
            return color;
        }

        void main(){
            vec2 uv0 = vTextureCoord0;
            vec2 uv1 = vTextureCoord1;

            float progress0 = uProgress;
            float progress1 = 1. - uProgress;

            vec4 map = blur13(map, vTextureCoordMap, uReso, vec2(2.)) + 0.5;

            uv0.x += progress0 * map.r;
            uv1.x -= progress1 * map.r;

            vec4 color = texture2D( texture0, uv0 );
            vec4 color1 = texture2D( texture1, uv1 );

            gl_FragColor = mix(color, color1, progress0 );
        }`;
        class WebglHover {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebGL_vs,
                    fragmentShader: WebGL_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        mousepos: {
                            name: "uMouse",
                            type: "2f",
                            value: [0, 0]
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        },
                        progress: {
                            name: "uProgress",
                            type: "1f",
                            value: 0
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);
                // this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.time.value += 0.01;
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                this.planeElement.addEventListener("mouseenter", e => {
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 1
                    });
                });

                this.planeElement.addEventListener("mouseout", e => {
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 0
                    });
                });
            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {
            $('.pxl-image-box1.normal, .pxl-image-box3').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new WebglHover({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }

        // Effect Expo
        var WebExpo_vs = `#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec2 vTextureCoord;

        void main() {
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
        }`;

        var WebExpo_fs = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        uniform sampler2D planeTexture;

        void main() {
            vec2 textureCoord = vTextureCoord;

            const float PI = 3.141592;

            textureCoord.x += (
            sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.0)) * 0.031))
            + sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))
            ) * 0.0075;

            textureCoord.y += (
            sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.023)) * 0.023))
            + sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))
            ) * 0.0125;

            gl_FragColor = texture2D(planeTexture, textureCoord);
        }
        `;

        class WebGLExpo {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebExpo_vs,
                    fragmentShader: WebExpo_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        mousepos: {
                            name: "uMouse",
                            type: "2f",
                            value: [0, 0]
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        },
                        progress: {
                            name: "uProgress",
                            type: "1f",
                            value: 0
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);
                // this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                let isHovered = false;

                this.planeElement.addEventListener("mouseenter", e => {
                    isHovered = true;
                });

                this.planeElement.addEventListener("mouseout", e => {
                    isHovered = false;
                });

                this.plane.onRender(() => {
                    if (isHovered) {
                        this.plane.uniforms.time.value++;
                    }
                });

            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {
            $('.pxl-image-box1.expo').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new WebGLExpo({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }

        // Effect Wave
        const WebWave_vs = `
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            float waveCoords = ((uTime / 45.0) * 3.5) - 1.75;

            float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

            vertexPosition.z -= (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592) + (2.0 * sin(3.141592 * uTime / 90.0))) * 0.025;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
            vVertexPosition = vertexPosition;
        }
        `;

        const WebWave_fs = `precision mediump float;

        uniform float uTime;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uExample;


        void main() {

            vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
            vec4 finalColor = texture2D(uExample, textureCoords);

            gl_FragColor = finalColor;
        }`;

        class ImgCurtain {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebWave_vs,
                    fragmentShader: WebWave_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.time.value += 0.01;
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                let isHovered = false;

                this.planeElement.addEventListener("mouseenter", e => {
                    isHovered = true;
                });

                this.planeElement.addEventListener("mouseout", e => {
                    isHovered = false;
                });

                this.plane.onRender(() => {
                    if (isHovered) {
                        this.plane.uniforms.time.value += (45 - this.plane.uniforms.time.value) * 0.0375;
                    } else {
                        this.plane.uniforms.time.value += (0 - this.plane.uniforms.time.value) * 0.0375;
                    }
                });
            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {
            $('.pxl-image-box1.wave').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new ImgCurtain({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }


        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            $('.pxl-image-box1 .image-front, .pxl-image-box3 .image-front').css('opacity', '1');
        }

    }

   
})(jQuery);
