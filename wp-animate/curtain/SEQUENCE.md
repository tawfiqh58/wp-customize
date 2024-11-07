Curtain CDN; head p=1
<script src="/wp-content/themes/hello-elementor/assets/js/curtain.js"></script>

Hover GL CSS ; head p=1
<style>
.pxl-image-box1 .pxl-item--inner {
    position: relative;
}

.pxl-image-box1 .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.pxl-image-box1 .item--image img {
    opacity: 0;
    object-fit: cover;
	  height: 100%;
    display: flex;
}
.pxl-image-box1 .image-back,
.pxl-image-box1 .map {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>

Hover GL; body/end always load jQuery p=1
<script>;(function ($) {

    $(window).on('load', function () {
        mrittik_webgl_effects();
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

        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            $('.pxl-image-box1 .image-front, .pxl-image-box3 .image-front').css('opacity', '1');
        }

    }

   
})(jQuery);
</script>

EM Setup; head p=10
<style>
body {
  font-size: 1.25vw !important;
}

@media screen and (max-width: 767px) {
  body {
    font-size: 4.26666666667vw !important;
  }
}
</style>

GSAP CDN; head p=10

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollToPlugin.min.js"></script>

GSAP ScrollTrigger; body/end p=10
<script>
;( function() {

  // wait until gsap & ScrollTrigger available
  let chck_if_gsap_loaded = setInterval( function() {
    
    if( window.gsap && window.ScrollTrigger ) {
      
      // register scrolTrigger
      gsap.registerPlugin( ScrollTrigger );

      // ... do your thing
      my_stuff();

      // clear interval
      clearInterval( chck_if_gsap_loaded ); 
      
    }
    
  }, 300 );
  
  function my_stuff() {
  
    // My CODE
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    let sections = gsap.utils.toArray(".panel");

    function goToSection(i) {
      gsap.to(window, {
        scrollTo: {
          y: i * innerHeight,
          autoKill: false,
          ease: "Power3.easeInOut",
        },
        duration: 0.85,
      });
    }

    ScrollTrigger.defaults({
      // markers: true
    });

    sections.forEach((eachPanel, i) => {
      // const mainAnim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i),
      });

			let isScrolling = false;
			
      ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => {
				if (!isScrolling) {
        isScrolling = true;
        goToSection(i);
        setTimeout(() => {
          isScrolling = false;
        }, 1000); // Adjust the delay based on your needs
      }
				},
      });
    });
  	

  	
  }
  
} )();
</script>

