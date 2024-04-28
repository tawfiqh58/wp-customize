(window.webpackJsonp = window.webpackJsonp || []).push([[47, 15], {
    449: function(e, t, r) {
        "use strict";
        var n = r(2)
          , component = Object(n.a)({}, (function() {
            var e = this
              , t = e._self._c;
            return t("svg", e._g({
                attrs: {
                    width: "123",
                    height: "96",
                    viewBox: "0 0 123 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, e.$listeners), [t("path", {
                attrs: {
                    d: "M1 32.437v31.098h63.211L30.916 94.972h43.098L121 47.986 74.014 1H30.916L64.21 32.437H1z",
                    fill: "transparent"
                }
            })])
        }
        ), [], !1, null, null, null);
        t.a = component.exports
    },
    485: function(e, t, r) {
        "use strict";
        var n = r(452)
          , o = r(445);
        function l() {
            return l = Object.assign || function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var t in source)
                        Object.prototype.hasOwnProperty.call(source, t) && (e[t] = source[t])
                }
                return e
            }
            ,
            l.apply(this, arguments)
        }
        var c = {
            toggleEl: function(e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
                e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function() {
                var e = this
                  , t = e.params.navigation
                  , r = e.navigation.toggleEl;
                if (!e.params.loop) {
                    var n = e.navigation
                      , o = n.$nextEl
                      , l = n.$prevEl;
                    l && l.length > 0 && (e.isBeginning ? r(l, !0) : r(l, !1),
                    e.params.watchOverflow && e.enabled && l[e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                    o && o.length > 0 && (e.isEnd ? r(o, !0) : r(o, !1),
                    e.params.watchOverflow && e.enabled && o[e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                var t = this;
                e.preventDefault(),
                t.isBeginning && !t.params.loop || t.slidePrev()
            },
            onNextClick: function(e) {
                var t = this;
                e.preventDefault(),
                t.isEnd && !t.params.loop || t.slideNext()
            },
            init: function() {
                var e, t, r = this, l = r.params.navigation;
                (r.params.navigation = Object(o.b)(r.$el, r.params.navigation, r.params.createElements, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }),
                l.nextEl || l.prevEl) && (l.nextEl && (e = Object(n.a)(l.nextEl),
                r.params.uniqueNavElements && "string" == typeof l.nextEl && e.length > 1 && 1 === r.$el.find(l.nextEl).length && (e = r.$el.find(l.nextEl))),
                l.prevEl && (t = Object(n.a)(l.prevEl),
                r.params.uniqueNavElements && "string" == typeof l.prevEl && t.length > 1 && 1 === r.$el.find(l.prevEl).length && (t = r.$el.find(l.prevEl))),
                e && e.length > 0 && e.on("click", r.navigation.onNextClick),
                t && t.length > 0 && t.on("click", r.navigation.onPrevClick),
                Object(o.d)(r.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }),
                r.enabled || (e && e.addClass(l.lockClass),
                t && t.addClass(l.lockClass)))
            },
            destroy: function() {
                var e = this
                  , t = e.navigation
                  , r = t.$nextEl
                  , n = t.$prevEl;
                r && r.length && (r.off("click", e.navigation.onNextClick),
                r.removeClass(e.params.navigation.disabledClass)),
                n && n.length && (n.off("click", e.navigation.onPrevClick),
                n.removeClass(e.params.navigation.disabledClass))
            }
        };
        t.a = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                Object(o.a)(this, {
                    navigation: l({}, c)
                })
            },
            on: {
                init: function(e) {
                    e.navigation.init(),
                    e.navigation.update()
                },
                toEdge: function(e) {
                    e.navigation.update()
                },
                fromEdge: function(e) {
                    e.navigation.update()
                },
                destroy: function(e) {
                    e.navigation.destroy()
                },
                "enable disable": function(e) {
                    var t = e.navigation
                      , r = t.$nextEl
                      , n = t.$prevEl;
                    r && r[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
                    n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                },
                click: function(e, t) {
                    var r = e.navigation
                      , o = r.$nextEl
                      , l = r.$prevEl
                      , c = t.target;
                    if (e.params.navigation.hideOnClick && !Object(n.a)(c).is(l) && !Object(n.a)(c).is(o)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === c || e.pagination.el.contains(c)))
                            return;
                        var d;
                        o ? d = o.hasClass(e.params.navigation.hiddenClass) : l && (d = l.hasClass(e.params.navigation.hiddenClass)),
                        !0 === d ? e.emit("navigationShow") : e.emit("navigationHide"),
                        o && o.toggleClass(e.params.navigation.hiddenClass),
                        l && l.toggleClass(e.params.navigation.hiddenClass)
                    }
                }
            }
        }
    },
    487: function(e, t, r) {
        var content = r(534);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        r(30).default)("ca99db5e", content, !0, {
            sourceMap: !1
        })
    },
    533: function(e, t, r) {
        "use strict";
        r(487)
    },
    534: function(e, t, r) {
        var n = r(29)(!1);
        n.push([e.i, '.featured-projects-block[data-v-59afdd91]{margin-bottom:12.5vw;margin-top:12.5vw;text-transform:uppercase;overflow-x:hidden}.featured-projects-block.rows .title-navigation-cell[data-v-59afdd91]{text-align:center;margin-bottom:6.25vw}.featured-projects-block.rows h2[data-v-59afdd91]{margin-bottom:0}.featured-projects-block.rows .link-btn[data-v-59afdd91]{margin-top:3.125vw}.featured-projects-block.rows .swiper-container .swiper-slide[data-v-59afdd91]{width:28.57%}.featured-projects-block h2[data-v-59afdd91]{font-weight:900;font-size:3.6458333333vw;line-height:3.125vw;-webkit-text-stroke-width:.0520833333vw;margin-bottom:1.8229166667vw}.featured-projects-block .swiper-container[data-v-59afdd91]{position:relative;margin-right:-1.5625vw}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]{width:40%;user-select:none}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]:first-child{margin-left:-.78125vw}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]:last-child{padding-right:.78125vw}.featured-projects-block .swiper-container .swiper-slide:hover .thumbnail-type img[data-v-59afdd91]{transform:scale(1.1)}.featured-projects-block .swiper-container .swiper-slide .project-link[data-v-59afdd91]{display:block;padding:0 .78125vw;cursor:none}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type[data-v-59afdd91]{overflow:hidden;margin-bottom:2.34375vw;position:relative}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type[data-v-59afdd91]:before{content:"";display:block;padding-top:140%}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type img[data-v-59afdd91]{position:absolute;top:0;left:0;height:100%;object-fit:cover}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type .type[data-v-59afdd91]{position:absolute;top:.78125vw;left:.78125vw;padding:.4166666667vw .78125vw .3645833333vw;font-weight:900;font-size:.625vw;background-color:#fff;color:#000;line-height:.78125vw;text-transform:uppercase}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type img[data-v-59afdd91]{width:100%;transition:transform .9s cubic-bezier(.19,1,.22,1)}.featured-projects-block .swiper-container .swiper-slide .page-title[data-v-59afdd91]{font-weight:300;font-size:.6770833333vw;line-height:.78125vw;margin-bottom:1.5625vw}.featured-projects-block .swiper-container .swiper-slide h3[data-v-59afdd91]{font-weight:900;font-size:1.5625vw;margin-bottom:1.5625vw}.featured-projects-block .swiper-container .swiper-slide .categories[data-v-59afdd91]{margin:-.390625vw;padding-left:.78125vw;padding-right:6.5104166667vw}.featured-projects-block .swiper-container .swiper-slide .categories li[data-v-59afdd91]{display:inline-block;margin:.390625vw}.featured-projects-block .swiper-container .next[data-v-59afdd91],.featured-projects-block .swiper-container .prev[data-v-59afdd91]{position:absolute;top:0;z-index:999;left:0;width:14.0625vw;cursor:none;height:100%}.featured-projects-block .swiper-container .next[data-v-59afdd91]{right:0;left:auto}.featured-projects-block .cursor[data-v-59afdd91]{pointer-events:none;z-index:999;position:fixed;transition:transform .9s cubic-bezier(.19,1,.22,1);transform:translate(-50%,-50%);stroke:#fff}.featured-projects-block .cursor.v-enter-active[data-v-59afdd91],.featured-projects-block .cursor.v-leave-active[data-v-59afdd91]{transition:transform .1s,opacity .1s}.featured-projects-block .cursor.v-enter[data-v-59afdd91],.featured-projects-block .cursor.v-leave-to[data-v-59afdd91]{opacity:0;transform:translate(-50%,-50%) scale(0)}.featured-projects-block .cursor.type-go[data-v-59afdd91]{transform:translate(-50%,-50%) rotate(-45deg)}.featured-projects-block .cursor.type-go.v-enter[data-v-59afdd91],.featured-projects-block .cursor.type-go.v-leave-to[data-v-59afdd91]{transform:translate(-50%,-50%) rotate(-45deg) scale(0)}.featured-projects-block .cursor.type-prev[data-v-59afdd91]{transform:translate(-50%,-50%) rotate(-180deg)}.featured-projects-block .cursor.type-prev.v-enter[data-v-59afdd91],.featured-projects-block .cursor.type-prev.v-leave-to[data-v-59afdd91]{transform:translate(-50%,-50%) rotate(-180deg) scale(0)}@media screen and (max-width:63.99875em){.featured-projects-block[data-v-59afdd91]{margin-bottom:64vw;margin-top:64vw}.featured-projects-block.rows h2[data-v-59afdd91]{margin-bottom:16vw;-webkit-text-stroke-width:.1333333333vw}.featured-projects-block.rows .swiper-container .swiper-slide[data-v-59afdd91]{width:calc(100% - 16vw)}.featured-projects-block h2[data-v-59afdd91]{font-size:10.6666666667vw;line-height:9.3333333333vw;margin-bottom:12vw;-webkit-text-stroke-width:.2vw}.featured-projects-block .swiper-container[data-v-59afdd91]{margin:16vw -15px 0}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]{width:calc(100% - 16vw);margin-left:4vw}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]:first-child{padding-left:15px}.featured-projects-block .swiper-container .swiper-slide[data-v-59afdd91]:last-child{padding-right:15px}.featured-projects-block .swiper-container .swiper-slide .project-link[data-v-59afdd91]{padding:0}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type[data-v-59afdd91]{margin-bottom:8vw}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type .type[data-v-59afdd91]{top:4vw;left:4vw;padding:2.1333333333vw 4vw 1.8666666667vw;font-size:3.2vw;line-height:4vw}.featured-projects-block .swiper-container .swiper-slide .thumbnail-type img[data-v-59afdd91]{margin-bottom:8vw}.featured-projects-block .swiper-container .swiper-slide .page-title[data-v-59afdd91]{font-size:3.2vw;margin-bottom:8vw;line-height:4vw}.featured-projects-block .swiper-container .swiper-slide h3[data-v-59afdd91]{font-size:6.6666666667vw;margin-bottom:8vw;line-height:6.6666666667vw}.featured-projects-block .swiper-container .swiper-slide .categories[data-v-59afdd91]{margin:-2vw;padding:0}.featured-projects-block .swiper-container .swiper-slide .categories li[data-v-59afdd91]{padding:2vw}}', ""]),
        e.exports = n
    },
    580: function(e, t, r) {
        var content = r(673);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        r(30).default)("12ec5bfd", content, !0, {
            sourceMap: !1
        })
    },
    602: function(e, t, r) {
        "use strict";
        r.r(t);
        r(19),
        r(76),
        r(38);
        var n = r(704)
          , o = r(485)
          , l = r(449)
          , c = r(18)
          , d = {
            name: "FeaturedProjectsBlock",
            components: {
                ArrowOutlineRightSvg: l.a
            },
            props: {
                title: {
                    type: String,
                    required: !0
                },
                projects: Array,
                rows: Boolean,
                cta: Object | String,
                homepage: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    swiperInstance: null,
                    cursor: {
                        x: 0,
                        y: 0,
                        visible: !1,
                        type: "go",
                        dragging: !1,
                        definitelyVisible: !1
                    }
                }
            },
            computed: {
                cursorType: function() {
                    if (this.swiperInstance) {
                        if (this.swiperInstance.isBeginning)
                            return "next";
                        if (this.swiperInstance.isEnd)
                            return "prev"
                    }
                    return this.cursor.type
                }
            },
            watch: {
                "cursor.visible": function(e) {
                    var t = this;
                    setTimeout((function() {
                        t.cursor.definitelyVisible !== t.cursor.visible && (t.cursor.definitelyVisible = e,
                        t.$store.commit("toggleCursor", !t.cursor.visible))
                    }
                    ))
                }
            },
            methods: {
                enterViewHandler: function(e) {
                    e.style.visibility = null,
                    c.a.from(e.querySelectorAll(".swiper-slide"), {
                        stagger: .1,
                        transform: "translateY(100%)",
                        duration: 1.2,
                        opacity: 0,
                        ease: ".19, 1, .22, 1"
                    })
                },
                mouseenterShowCursor: function(e) {
                    this.cursor.visible = !0,
                    this.cursor.x = e.clientX,
                    this.cursor.y = e.clientY
                },
                swiperMousemove: function(e) {
                    this.cursor.x = e.clientX,
                    this.cursor.y = e.clientY
                },
                mousedown: function() {
                    this.isMousedown = !0
                },
                mouseup: function() {
                    this.isMousedown = !1,
                    this.cursor.dragging = !1
                },
                mousemove: function() {
                    this.isMousedown && (this.cursor.dragging = !0)
                }
            },
            mounted: function() {
                window.addEventListener("mousedown", this.mousedown),
                window.addEventListener("mouseup", this.mouseup),
                window.addEventListener("mousemove", this.mousemove),
                n.a.use([o.a]),
                this.swiperInstance = new n.a(this.$refs.swiperContainer,{
                    slidesPerView: "auto",
                    touchStartPreventDefault: !1,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
            },
            beforeDestroy: function() {
                window.removeEventListener("mousedown", this.mousedown),
                window.removeEventListener("mouseup", this.mouseup),
                window.removeEventListener("mousemove", this.mousemove),
                this.swiperInstance.destroy()
            }
        }
          , v = (r(533),
        r(2))
          , component = Object(v.a)(d, (function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                class: ["featured-projects-block", e.rows ? "rows" : null]
            }, [t("div", {
                staticClass: "grid-x grid-margin-x"
            }, [e.homepage ? e._e() : t("div", {
                class: ["cell", "tablet-landscape-".concat(e.rows ? 14 : 4), "title-navigation-cell"]
            }, [t("h2", {
                directives: [{
                    name: "slide-text",
                    rawName: "v-slide-text"
                }],
                staticClass: "outlined-text"
            }, [e._v(e._s(e.title))]), e._v(" "), e.cta ? t("Link", {
                staticClass: "link-btn",
                attrs: {
                    to: e.cta
                }
            }) : e._e()], 1), e._v(" "), t("div", {
                class: ["cell", "tablet-landscape-".concat(e.rows ? 14 : 10)]
            }, [t("div", {
                ref: "swiperContainer",
                staticClass: "swiper-container",
                on: {
                    mousemove: e.swiperMousemove
                }
            }, [t("div", {
                directives: [{
                    name: "slide-text",
                    rawName: "v-slide-text",
                    value: {
                        handler: e.enterViewHandler,
                        duration: 1.2
                    },
                    expression: "{\n          handler: enterViewHandler,\n          duration: 1.2\n        }"
                }],
                staticClass: "swiper-wrapper",
                on: {
                    mouseenter: function(t) {
                        e.cursor.type = "go"
                    }
                }
            }, e._l(e.projects, (function(r) {
                return t("div", {
                    staticClass: "swiper-slide"
                }, [t("NuxtLink", {
                    staticClass: "project-link",
                    attrs: {
                        to: r.path
                    },
                    nativeOn: {
                        dragstart: function(e) {
                            e.preventDefault()
                        },
                        mouseleave: function(t) {
                            e.cursor.visible = !1
                        },
                        mouseenter: function(t) {
                            e.cursor.visible = !1
                        }
                    }
                }, [t("div", {
                    staticClass: "thumbnail-type"
                }, [r.thumbnail ? t("LazyLoadedImage", e._b({
                    attrs: {
                        draggable: "false"
                    }
                }, "LazyLoadedImage", r.thumbnail["1200w"], !1)) : e._e(), e._v(" "), e.homepage ? e._e() : t("div", {
                    directives: [{
                        name: "slide-text",
                        rawName: "v-slide-text"
                    }],
                    staticClass: "type"
                }, [e._v(e._s(r.type))])], 1), e._v(" "), t("div", {
                    directives: [{
                        name: "slide-text",
                        rawName: "v-slide-text"
                    }],
                    staticClass: "page-title"
                }, [e._v(e._s(r.page_title))]), e._v(" "), t("h3", {
                    directives: [{
                        name: "slide-text",
                        rawName: "v-slide-text"
                    }]
                }, [e._v(e._s(r.title))])]), e._v(" "), e.homepage ? e._e() : t("ul", {
                    staticClass: "categories"
                }, e._l(r.categories, (function(r) {
                    return t("li", [t("NuxtLink", {
                        directives: [{
                            name: "slide-text",
                            rawName: "v-slide-text",
                            value: {
                                inline: !0
                            },
                            expression: "{\n                            inline: true\n                          }"
                        }],
                        class: ["pill", "hover-background-color-".concat(r.toLowerCase())],
                        attrs: {
                            to: "/projects?types=".concat(encodeURIComponent(r.replace(" ", "-")))
                        },
                        nativeOn: {
                            dragstart: function(e) {
                                e.preventDefault()
                            }
                        }
                    }, [e._v("\n                  " + e._s(r) + "\n                ")])], 1)
                }
                )), 0)], 1)
            }
            )), 0), e._v(" "), t("div", {
                staticClass: "prev show-for-tablet-landscape",
                on: {
                    click: function(t) {
                        e.swiperInstance[e.swiperInstance.isBeginning ? "slideNext" : "slidePrev"]()
                    },
                    mouseenter: function(t) {
                        return (e.cursor.type = "prev") && e.mouseenterShowCursor(t)
                    },
                    mouseleave: function(t) {
                        e.cursor.visible = !1
                    }
                }
            }), e._v(" "), t("div", {
                staticClass: "next show-for-tablet-landscape",
                on: {
                    click: function(t) {
                        e.swiperInstance[e.swiperInstance.isEnd ? "slidePrev" : "slideNext"]()
                    },
                    mouseenter: function(t) {
                        return (e.cursor.type = "next") && e.mouseenterShowCursor(t)
                    },
                    mouseleave: function(t) {
                        e.cursor.visible = !1
                    }
                }
            }), e._v(" "), t("transition", [t("ArrowOutlineRightSvg", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.cursor.definitelyVisible && !e.cursor.dragging,
                    expression: "cursor.definitelyVisible && !cursor.dragging"
                }],
                class: ["cursor", "type-".concat(e.cursorType), "show-for-tablet-landscape"],
                style: {
                    top: "".concat(e.cursor.y, "px"),
                    left: "".concat(e.cursor.x, "px")
                }
            })], 1)], 1)])])])
        }
        ), [], !1, null, "59afdd91", null);
        t.default = component.exports;
        installComponents(component, {
            Link: r(101).default,
            LazyLoadedImage: r(183).default
        })
    },
    672: function(e, t, r) {
        "use strict";
        r(580)
    },
    673: function(e, t, r) {
        var n = r(29)(!1);
        n.push([e.i, '.side-scrolling-projects-container[data-v-7a8bfa95]{overflow:hidden;margin:12.5vw 0}.side-scrolling-projects-container .side-scrolling-projects[data-v-7a8bfa95]{overflow:hidden;display:flex;align-items:flex-end}.side-scrolling-projects-container .side-scrolling-projects ul[data-v-7a8bfa95]{box-sizing:border-box;margin:0 15px;display:flex;height:100%;padding:0 0 1.5625vw}.side-scrolling-projects-container .side-scrolling-projects ul li[data-v-7a8bfa95]{margin:0 .78125vw;height:100%;flex-shrink:0;width:calc(71.42857vh - 14.88095vw)}.side-scrolling-projects-container .side-scrolling-projects ul li .image-container[data-v-7a8bfa95]{position:relative;height:calc(100vh - 20.83333vw);width:100%;overflow:hidden}.side-scrolling-projects-container .side-scrolling-projects ul li[data-v-7a8bfa95]:last-child{width:100%;display:flex;align-items:center}.side-scrolling-projects-container .side-scrolling-projects ul li .closing-remark[data-v-7a8bfa95]{font-size:6.7708333333vw;max-width:100vw;font-weight:900;line-height:.9230769231}@media screen and (max-width:63.99875em){.side-scrolling-projects-container .side-scrolling-projects[data-v-7a8bfa95]{height:auto}.side-scrolling-projects-container .side-scrolling-projects ul[data-v-7a8bfa95]{margin:0 15px;flex-direction:column;height:auto;width:100%}.side-scrolling-projects-container .side-scrolling-projects ul li[data-v-7a8bfa95]{width:auto;margin:0;overflow:hidden}.side-scrolling-projects-container .side-scrolling-projects ul li[data-v-7a8bfa95]:not(:last-child){height:51.7333333333vw;margin-bottom:4vw}}@media screen and (max-width:63.99875em){.side-scrolling-projects-container[data-v-7a8bfa95]{margin-bottom:-16vw}.side-scrolling-projects-container[data-v-7a8bfa95] .featured-projects-block{margin-top:0}.side-scrolling-projects-container .closing-remark[data-v-7a8bfa95]{font-size:10.6666666667vw;line-height:9.3333333333vw;max-width:none;font-weight:900;margin-top:64vw}}.side-scrolling-projects-project-link[data-v-7a8bfa95]{display:block;height:100%;position:relative;z-index:998}.side-scrolling-projects-project-link>*[data-v-7a8bfa95]{pointer-events:none}.side-scrolling-projects-project-link .type[data-v-7a8bfa95]{display:none;position:absolute;top:.78125vw;left:.78125vw;background-color:#fff;text-transform:uppercase;font-weight:900;font-size:.625vw;line-height:.78125vw;z-index:1;padding:.4166666667vw .78125vw .3645833333vw}.side-scrolling-projects-project-link .thumbnail[data-v-7a8bfa95]{height:100%;object-fit:cover;left:50%;position:absolute;transform:translateX(-50%);width:calc(100% + 10.41667vw)}.side-scrolling-projects-project-link .text[data-v-7a8bfa95]{width:100%;box-sizing:border-box;color:#000}.side-scrolling-projects-project-link .text .location[data-v-7a8bfa95]{font-size:.6770833333vw;line-height:.78125vw;font-weight:300;text-transform:uppercase;letter-spacing:.08em;padding-top:2.34375vw;padding-bottom:1.5625vw}.side-scrolling-projects-project-link .text h2[data-v-7a8bfa95]{font-size:1.5625vw;font-weight:900;line-height:1.5625vw;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;display:-webkit-box;overflow:hidden}.side-scrolling-projects-project-link .text .paragraph-container.v-enter-active[data-v-7a8bfa95],.side-scrolling-projects-project-link .text .paragraph-container.v-leave-active[data-v-7a8bfa95]{overflow:hidden;transition:height .9s cubic-bezier(.19,1,.22,1)}.side-scrolling-projects-project-link .text .paragraph-container p[data-v-7a8bfa95]{margin:1.5625vw auto 0;max-width:14.3229166667vw;font-weight:500;font-size:1.0416666667vw;line-height:1.4583333333vw}@media screen and (max-width:63.99875em){.side-scrolling-projects-project-link[data-v-7a8bfa95]{margin-bottom:64vw}.side-scrolling-projects-project-link[data-v-7a8bfa95]:before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.15);z-index:1}.side-scrolling-projects-project-link .type[data-v-7a8bfa95]{display:block;z-index:1;font-size:3.2vw;line-height:4vw;top:4vw;left:4vw;padding:2.1333333333vw 4vw 1.8666666667vw}.side-scrolling-projects-project-link .thumbnail[data-v-7a8bfa95]{transform:translateX(-50%)!important}.side-scrolling-projects-project-link .text[data-v-7a8bfa95]{display:none;position:absolute;top:0;left:0;color:#fff;z-index:1;padding:13.0666666667vw 8.5333333333vw 16vw}.side-scrolling-projects-project-link .text .location[data-v-7a8bfa95]{font-size:3.4666666667vw;line-height:1;letter-spacing:.05em}.side-scrolling-projects-project-link .text h2[data-v-7a8bfa95]{font-size:8vw;line-height:1;letter-spacing:.05em}.side-scrolling-projects-project-link .text .paragraph-container p[data-v-7a8bfa95]{max-width:74.6666666667vw;margin-top:4vw;font-size:4vw;line-height:5.3333333333vw}}', ""]),
        e.exports = n
    },
    732: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(39)
          , o = (r(7),
        r(28),
        r(32),
        r(31),
        r(40),
        r(14),
        r(19),
        r(15),
        r(25),
        r(26),
        r(16),
        r(83))
          , l = r(18)
          , c = r(97)
          , d = r(104)
          , v = r(85);
        function f(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return w(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0, c = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return l = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    o = e
                },
                f: function() {
                    try {
                        l || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, r = new Array(t); i < t; i++)
                r[i] = e[i];
            return r
        }
        var h = {
            name: "SideScrollingProjectsBlock",
            props: {
                outro_text: String,
                projects: Array
            },
            data: function() {
                return {
                    Transition: o,
                    mouseAbilityIndex: -1
                }
            },
            methods: {
                enterViewHandler: function(e) {
                    e.style.visibility = null,
                    l.b.from(e.querySelectorAll("li"), {
                        stagger: .1,
                        transform: "translateY(100%)",
                        duration: 1.2,
                        opacity: 0,
                        ease: ".19, 1, .22, 1"
                    })
                },
                projectClick: function(e) {
                    this.routeUpdateTriggerEl = e.target
                },
                resize: function() {
                    this.scrollTween && this.scrollTween.scrollTrigger[window.innerWidth < 1024 ? "disable" : "enable"]()
                },
                refreshScrollTriggers: function() {
                    this.scrollTween && this.scrollTween.scrollTrigger.refresh()
                }
            },
            mounted: function() {
                var e = this;
                l.b.registerPlugin(d.a, c.a);
                var t = this.$refs.projects
                  , r = t.querySelectorAll("li");
                this.scrollTween = l.b.timeline({
                    scrollTrigger: {
                        pin: !0,
                        end: function() {
                            return "+=".concat(Math.max(0, (r[0].offsetWidth + window.innerWidth / 100 * (30 * .0520832857)) * r.length) - window.innerWidth + 1e3)
                        },
                        scrub: .5,
                        trigger: this.$refs.el,
                        start: function() {
                            return "top ".concat(window.innerWidth / 100 * 9.01040843)
                        },
                        invalidateOnRefresh: !0
                    }
                }).fromTo(t, {
                    x: 0
                }, {
                    x: function() {
                        return -(Object(n.a)(r).map((function(e) {
                            return e.offsetWidth + window.innerWidth / 100 * (30 * .0520832857)
                        }
                        )).reduce((function(e, t) {
                            return e + t
                        }
                        )) - t.offsetWidth)
                    },
                    ease: c.a.create("custom", "M0,0,C0,0,0.3,0,0.3,0,0.3,0,0.818,1.001,1,1")
                });
                var o, w = f(this.$refs.projectThumbnails);
                try {
                    var h = function() {
                        var t = o.value;
                        e.scrollTween.fromTo(t, {
                            transform: function() {
                                return "translateX(".concat(-t.offsetWidth / 2 - 50, "px)")
                            }
                        }, {
                            transform: function() {
                                return "translateX(".concat(-t.offsetWidth / 2 + 50, "px)")
                            },
                            ease: c.a.create("custom", "M0,0,C0,0,0.3,0,0.3,0,0.3,0,0.818,1.001,1,1")
                        }, 0)
                    };
                    for (w.s(); !(o = w.n()).done; )
                        h()
                } catch (e) {
                    w.e(e)
                } finally {
                    w.f()
                }
                this.resize(),
                window.addEventListener("resize", this.resize),
                v.a.$on("refreshScrollTriggers", this.refreshScrollTriggers)
            },
            beforeDestroy: function() {
                v.a.$off("refreshScrollTriggers", this.refreshScrollTriggers),
                window.removeEventListener("resize", this.resize),
                this.scrollTween && this.scrollTween.scrollTrigger && this.scrollTween.scrollTrigger.kill(!1)
            }
        }
          , m = (r(672),
        r(2))
          , component = Object(m.a)(h, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "side-scrolling-projects-container"
            }, [t("section", {
                ref: "el",
                staticClass: "side-scrolling-projects show-for-tablet-landscape"
            }, [t("ul", {
                directives: [{
                    name: "slide-text",
                    rawName: "v-slide-text",
                    value: {
                        handler: e.enterViewHandler,
                        duration: 1.2
                    },
                    expression: "{\n        handler: enterViewHandler,\n        duration: 1.2\n      }"
                }],
                ref: "projects",
                staticClass: "projects"
            }, [e._l(e.projects, (function(r, i) {
                return t("li", {
                    on: {
                        mouseenter: function(t) {
                            e.mouseAbilityIndex = i
                        },
                        mouseleave: function(t) {
                            e.mouseAbilityIndex = -1
                        }
                    }
                }, [t("NuxtLink", {
                    staticClass: "side-scrolling-projects-project-link",
                    attrs: {
                        to: r.path
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.projectClick.apply(null, arguments)
                        }
                    }
                }, [t("div", {
                    staticClass: "type"
                }, [e._v(e._s(r.type))]), e._v(" "), t("div", {
                    staticClass: "image-container"
                }, [t("img", e._b({
                    ref: "projectThumbnails",
                    refInFor: !0,
                    staticClass: "thumbnail",
                    attrs: {
                        alt: "",
                        draggable: "false"
                    }
                }, "img", r.thumbnail["345w"], !1))]), e._v(" "), t("div", {
                    staticClass: "text"
                }, [t("div", {
                    staticClass: "location"
                }, [e._v(e._s(r.page_title))]), e._v(" "), t("h2", {
                    staticClass: "project-title"
                }, [e._v(e._s(r.title))])])])], 1)
            }
            )), e._v(" "), t("li", [t("div", {
                directives: [{
                    name: "slide-text",
                    rawName: "v-slide-text"
                }],
                staticClass: "gutters closing-remark outlined-text"
            }, [e._v(e._s(e.outro_text))])])], 2)]), e._v(" "), t("FeaturedProjectsBlock", {
                staticClass: "hide-for-tablet-landscape",
                attrs: {
                    projects: e.projects,
                    title: "Featured",
                    homepage: !0
                }
            }), e._v(" "), t("div", {
                directives: [{
                    name: "slide-text",
                    rawName: "v-slide-text"
                }],
                staticClass: "gutters closing-remark outlined-text hide-for-tablet-landscape"
            }, [e._v(e._s(e.outro_text))])], 1)
        }
        ), [], !1, null, "7a8bfa95", null);
        t.default = component.exports;
        installComponents(component, {
            FeaturedProjectsBlock: r(602).default
        })
    }
}]);
