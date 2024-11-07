(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[529], {
 
    
    5529: function(e, s, t) {
        "use strict";
        t.r(s),
        t.d(s, {
            __N_SSG: function() {
                return T
            },
            default: function() {
                return H
            }
        });
        var n = t(1527)
          , r = t(1912)
          , a = t(5420)
          , i = t(5924)
          , l = t(3361)
          , c = t.n(l)
          , o = t(959)
          , u = t(7484)
          , d = t.n(u);
        function h(e) {
            let {url: s, height: t, width: a, description: i, sizes: l} = e;
            return s.includes(".mp4") || s.includes(".webm") || s.includes(".mov") ? (0,
            n.jsx)("video", {
                src: s,
                alt: i,
                style: {
                    position: "absolute",
                    width: "100%",
                    objectFit: "cover",
                    height: "100%"
                },
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                loop: !0
            }) : (0,
            n.jsx)(r.o, {
                ratio: a / t,
                children: (0,
                n.jsx)(c(), {
                    quality: "90",
                    src: s,
                    loading: "eager",
                    alt: i,
                    layout: "fill",
                    sizes: l
                })
            })
        }
        function m(e) {
            let {mosaics: s} = e
              , [t,r] = (0,
            o.useState)(0);
            (0,
            o.useEffect)(()=>{
                let e = setInterval(()=>{
                    r(e=>(e + 1) % s.length)
                }
                , 5e3);
                return ()=>clearInterval(e)
            }
            , [t]);
            let l = (0,
            a.YQ)();
            return (0,
            n.jsx)("div", {
                className: d().mosaic,
                children: s.map((e,s)=>{
                    let r = e.assetGroupCollection.items;
                    return (0,
                    n.jsxs)("div", {
                        className: d().inner,
                        children: [(0,
                        n.jsxs)("div", {
                            className: d().column,
                            ...!1 === l && {
                                "data-scroll": !0,
                                "data-scroll-speed": "2"
                            },
                            children: [(0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 0,
                                    alignSelf: "end"
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[0],
                                    sizes: "24vw"
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 1,
                                    alignSelf: "end"
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[1],
                                    sizes: "24vw"
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 4
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[4],
                                    sizes: "64vw"
                                })
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: d().column,
                            ...!1 === l && {
                                "data-scroll": !0,
                                "data-scroll-speed": "6"
                            },
                            children: [(0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 2,
                                    alignSelf: "end"
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[2],
                                    sizes: "30vw"
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 5
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[5],
                                    sizes: "30vw"
                                })
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: d().column,
                            ...!1 === l && {
                                "data-scroll": !0,
                                "data-scroll-speed": "4"
                            },
                            children: [(0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 3,
                                    alignSelf: "end"
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[3],
                                    sizes: "60vw"
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: (0,
                                i.Z)(d().asset, t === s && d().current),
                                style: {
                                    "--i": 6
                                },
                                children: (0,
                                n.jsx)(h, {
                                    ...r[6],
                                    sizes: "45vw"
                                })
                            })]
                        })]
                    }, s)
                }
                )
            })
        }
        var _ = t(9680)
          , p = t(9523)
          , f = t(8178)
          , x = t(9978)
          , v = t(4883)
          , j = t(461)
          , g = t(8386)
          , N = t(4651)
          , b = t(2144)
          , y = t(7634)
          , w = t(6950)
          , Z = t(1415)
          , k = t(4038)
          , S = t(2715)
          , C = t(7256)
          , q = t(9470)
          , z = t.n(q)
          , E = t(7527)
          , R = t.n(E);
        let A = z()(()=>Promise.resolve().then(t.bind(t, 6174)).then(e=>{
            let {AnimatedGradient: s} = e;
            return s
        }
        ), {
            loadableGenerated: {
                webpack: ()=>[6174]
            },
            ssr: !1
        })
          , D = z()(()=>Promise.resolve().then(t.bind(t, 7587)).then(e=>{
            let {Orb: s} = e;
            return s
        }
        ), {
            loadableGenerated: {
                webpack: ()=>[7587]
            },
            ssr: !1
        })
          , L = e=>{
            let {title: s, subtitle: t, cta: r, featured: l} = e
              , [u,d] = (0,
            o.useState)(0);
            (0,
            o.useEffect)(()=>{
                let e = setInterval(()=>{
                    d(e=>(e + 1) % l.length)
                }
                , 5e3);
                return ()=>clearInterval(e)
            }
            , [u, l]);
            let[h,m] = (0,
            o.useState)(!1)
              , [_,f] = (0,
            o.useState)(!1)
              , x = (0,
            a.h7)();
            return (0,
            o.useEffect)(()=>{
                ("interactive" === x || "complete" === x) && setTimeout(()=>{
                    m(!0)
                }
                , 1e3)
            }
            , [x]),
            (0,
            n.jsxs)("section", {
                className: (0,
                i.Z)(R().hero, _ && h && R().visible),
                children: [(0,
                n.jsx)(A, {
                    className: R().background
                }), (0,
                n.jsx)("h1", {
                    className: (0,
                    i.Z)(R().title, "h2-alt layout-block"),
                    children: (0,
                    n.jsx)(k.C, {
                        by: "chars",
                        onReady: ()=>f(!0),
                        children: s
                    })
                }), (0,
                n.jsxs)("div", {
                    className: (0,
                    i.Z)(R().overlay, "layout-grid"),
                    children: [(0,
                    n.jsxs)("div", {
                        className: R().head,
                        children: [t && (0,
                        n.jsx)("p", {
                            className: (0,
                            i.Z)(R().subtitle, "p book"),
                            children: t
                        }), r && (0,
                        n.jsx)(p.z, {
                            href: r.url,
                            className: "p",
                            children: r.text
                        })]
                    }), (0,
                    n.jsx)(v.UU, {
                        className: R().orb,
                        children: (0,
                        n.jsxs)(v.Ev, {
                            speed: 100,
                            children: [(0,
                            n.jsx)(D, {
                                className: R().canvas
                            }), (0,
                            n.jsx)(D, {
                                className: R().canvas
                            }), (0,
                            n.jsx)(D, {
                                className: R().canvas
                            }), (0,
                            n.jsx)("div", {
                                className: R().icons,
                                children: l.map((e,s)=>{
                                    let {productImage: t} = e;
                                    return t && (0,
                                    n.jsx)("div", {
                                        className: R().image,
                                        style: {
                                            opacity: u === s ? 1 : 0
                                        },
                                        children: (0,
                                        n.jsx)(c(), {
                                            quality: "90",
                                            src: t.url,
                                            alt: "",
                                            layout: "fill",
                                            loading: "eager",
                                            sizes: "(min-width: 800px) 32vw, 55vw"
                                        }, s)
                                    }, s)
                                }
                                )
                            })]
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: R().cases,
                        children: [(0,
                        n.jsx)("div", {
                            className: R().steps,
                            children: l.map((e,s)=>(0,
                            n.jsx)("button", {
                                title: "change case study image",
                                className: (0,
                                i.Z)(R().step, u === s && R().current),
                                onClick(e) {
                                    d(s)
                                }
                            }, s))
                        }), (0,
                        n.jsx)("div", {
                            className: R().logos,
                            children: l.map((e,s)=>{
                                let {brandLogo: t} = e;
                                return t && (0,
                                n.jsx)("img", {
                                    src: t.url,
                                    alt: t.description || "",
                                    className: (0,
                                    i.Z)(R().logo, u === s && R().current)
                                }, s)
                            }
                            )
                        })]
                    })]
                })]
            })
        }
        ;
        var T = !0;
        function H(e) {
            let {content: s} = e
              , {seo: t, title: a, subtitle: l, cta: o, featuredBrandCollection: u, mosaicsHeader: d, mosaicsText: h, mosaicsLink: v, mosaicAssetsCollection: k, taglines: q, benefitsSectionTitle: z, benefitsSectionDescription: E, benefitsList: D, benefitsCta: T, benefitsCaseStudiesCollection: H, steppedCard: I, quotesCollection: O, prefooter: F, pushButtonsTitle: P, pushButtonsSubtitle: B, pushButtonsCollection: G, prefooterMarquee: M} = s
              , U = O.items
              , Y = G.items
              , W = u.items
              , K = k.items
              , V = H.items;
            return I.slidesCollection.items,
            (0,
            n.jsxs)(C.A, {
                theme: "dark",
                seo: t,
                children: [(0,
                n.jsx)(L, {
                    title: a,
                    subtitle: l,
                    cta: o,
                    featured: W
                }), K.length > 0 && (0,
                n.jsxs)("section", {
                    className: R().mosaic,
                    children: [(0,
                    n.jsx)(x.q, {
                        children: (0,
                        n.jsx)(A, {
                            className: R().background
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: R().head,
                        children: [(0,
                        n.jsx)("h2", {
                            children: d
                        }), (0,
                        n.jsx)("p", {
                            className: "p book",
                            children: h
                        }), v && (0,
                        n.jsx)(p.z, {
                            className: "p",
                            href: v.url,
                            children: v.text
                        })]
                    }), (0,
                    n.jsx)(m, {
                        mosaics: K,
                        className: R().assets
                    })]
                }), q && (0,
                n.jsxs)("section", {
                    className: R().taglines,
                    children: [(0,
                    n.jsx)(x.q, {
                        children: (0,
                        n.jsx)(A, {
                            className: R().background
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: (0,
                        i.Z)(R().line, "h4-alt layout-block"),
                        children: (0,
                        n.jsx)(N.D, {
                            children: q.reduce((e,s)=>e + s + " ◘ ", "")
                        })
                    })]
                }), (0,
                n.jsx)("section", {
                    className: R().stepped,
                    children: (0,
                    n.jsx)("div", {
                        className: (0,
                        i.Z)(R().stepped__cards),
                        children: (0,
                        n.jsx)(S.C, {
                            card: I
                        })
                    })
                }), V.length > 0 && (0,
                n.jsxs)("section", {
                    className: R().cases,
                    children: [(0,
                    n.jsxs)("div", {
                        className: (0,
                        i.Z)(R().head, "layout-grid"),
                        children: [(0,
                        n.jsx)("h2", {
                            className: (0,
                            i.Z)(R().title, "h4"),
                            children: z
                        }), (0,
                        n.jsxs)("div", {
                            children: [(0,
                            n.jsx)("p", {
                                className: (0,
                                i.Z)(R().text, "p book"),
                                children: E
                            }), (0,
                            n.jsxs)(j.r, {
                                className: "p link",
                                href: T.url,
                                children: [T.text, " ↗"]
                            })]
                        })]
                    }), D && (0,
                    n.jsx)(_.f, {
                        className: R().benefits,
                        list: D
                    }), (0,
                    n.jsx)(w.v, {
                        className: (0,
                        i.Z)("layout-block", R().cards),
                        children: V.map((e,s)=>{
                            let {clientLogo: t, title: a, description: l, thumbnail: o, urlSlug: u} = e;
                            return (0,
                            n.jsxs)("div", {
                                className: (0,
                                i.Z)(R().card, "rounded box-shadow"),
                                children: [(0,
                                n.jsxs)("div", {
                                    className: R().content,
                                    children: [(0,
                                    n.jsx)("img", {
                                        className: R().logo,
                                        src: t.url,
                                        alt: ""
                                    }), (0,
                                    n.jsx)("p", {
                                        className: (0,
                                        i.Z)(R().text, "p book"),
                                        children: a
                                    }), (0,
                                    n.jsx)(p.z, {
                                        className: (0,
                                        i.Z)(R().cta, "p"),
                                        href: "/case-study/".concat(u),
                                        children: "View Case Study"
                                    })]
                                }), o && (0,
                                n.jsx)(r.o, {
                                    ratio: 1.6375,
                                    className: "rounded",
                                    children: (0,
                                    n.jsx)(c(), {
                                        quality: "90",
                                        src: o.url,
                                        alt: o.description || "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        loading: "eager",
                                        sizes: "(min-width: 800px) 38vw, 83vw"
                                    })
                                })]
                            }, s)
                        }
                        )
                    })]
                }), U.length > 0 && (0,
                n.jsx)("section", {
                    className: (0,
                    i.Z)(R().quotes),
                    children: (0,
                    n.jsx)(y.w, {
                        quotes: U
                    })
                }), F && (0,
                n.jsxs)("section", {
                    className: R().prefooter,
                    children: [(0,
                    n.jsx)(x.q, {
                        children: (0,
                        n.jsx)(A, {
                            className: R().background
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "layout-block",
                        children: (0,
                        n.jsx)(f.f, {
                            ...F
                        })
                    })]
                }), Y.length > 0 && (0,
                n.jsx)("section", {
                    className: R().pushButtons,
                    children: (0,
                    n.jsx)(b.r, {
                        title: P,
                        subtitle: B,
                        links: Y
                    })
                }), M && (0,
                n.jsx)("section", {
                    children: (0,
                    n.jsx)(Z.g, {
                        children: (0,
                        n.jsx)(g.Z, {
                            href: M.url,
                            children: M.text
                        })
                    })
                })]
            })
        }
    },
    7484: function(e) {
        e.exports = {
            mosaic: "assets-mosaic_mosaic__oiuL8",
            inner: "assets-mosaic_inner__RSOAC",
            column: "assets-mosaic_column__1Z6jD",
            asset: "assets-mosaic_asset__4SO9R",
            current: "assets-mosaic_current__3uCMi"
        }
    },
    5465: function(e) {
        e.exports = {
            item: "benefits_item__FqZIy",
            icon: "benefits_icon__oORxq"
        }
    },
    3628: function(e) {
        e.exports = {
            prefooter: "prefooter_prefooter__qjgZv",
            image: "prefooter_image__XmZK5",
            content: "prefooter_content___kBvL",
            button: "prefooter_button__Ff7AY"
        }
    },
    4145: function(e) {
        e.exports = {
            text: "progress-text_text__Ewoyg",
            word: "progress-text_word__XQaH2",
            tab: "progress-text_tab__B1aUr",
            steps: "progress-text_steps__6djRD"
        }
    },
    5931: function(e) {
        e.exports = {
            header: "push-buttons_header__T2VPi",
            title: "push-buttons_title__kLWzA",
            button: "push-buttons_button__yTHBE"
        }
    },
    155: function(e) {
        e.exports = {
            element: "rotating-cards_element__jpreT",
            wrapper: "rotating-cards_wrapper__aWGx2",
            background: "rotating-cards_background__3_4qt"
        }
    },
    7527: function(e) {
        e.exports = {
            hero: "home_hero__RYBFn",
            background: "home_background__zqWhr",
            title: "home_title__U0Uwb",
            overlay: "home_overlay__RwSH4",
            head: "home_head__IDkmY",
            subtitle: "home_subtitle__1Ye3y",
            orb: "home_orb__nHa9t",
            canvas: "home_canvas__hEIDz",
            icons: "home_icons__sO03b",
            image: "home_image__1PHjd",
            cases: "home_cases__iszOg",
            steps: "home_steps__3_Vvg",
            step: "home_step__k0gOt",
            current: "home_current__IqYxU",
            logos: "home_logos__i2gKm",
            logo: "home_logo__3aSjG",
            visible: "home_visible__quuZY",
            mosaic: "home_mosaic__hn2rS",
            taglines: "home_taglines__WPiyu",
            line: "home_line__0_l2D",
            text: "home_text__uALHd",
            benefits: "home_benefits__m_ari",
            cards: "home_cards__sSSCs",
            card: "home_card__R74_e",
            content: "home_content__CAOAv",
            cta: "home_cta__G_htL",
            stepped: "home_stepped__8JTz7",
            quotes: "home_quotes__Q7RIi",
            pushButtons: "home_pushButtons__jJ9vf",
            prefooter: "home_prefooter__WrHUi"
        }
    }
}]);
