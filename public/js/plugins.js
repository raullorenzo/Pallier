/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ĂÂŠ 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ĂÂŠ 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    }, easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    }, easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    }, easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    }, easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    }, easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    }, easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    }, easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    }, easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    }, easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    }, easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    }, easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    }, easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    }, easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    }, easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    }, easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    }, easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    }, easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    }, easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    }, easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    }, easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    }, easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    }, easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }, easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    }, easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    }, easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    }, easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    }, easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    }, easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    }, easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    }, easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});


/*!
 * fullPage 2.7.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (d, h) {
    "function" === typeof define && define.amd ? define(["jquery"], function (m) {
        return h(m, d, d.document, d.Math)
    }) : "undefined" !== typeof exports ? module.exports = h(require("jquery"), d, d.document, d.Math) : h(jQuery, d, d.document, d.Math)
})("undefined" !== typeof window ? window : this, function (d, h, m, n, E) {
    var p = d(h), u = d(m), ma;
    d.fn.fullpage = function (c) {
        function v() {
            c.css3 && (c.css3 = Na());
            c.anchors.length || (c.anchors = d(c.sectionSelector + "[data-anchor]").map(function () {
                return d(this).data("anchor").toString()
            }).get());
            Oa();
            e.setAllowScrolling(!0);
            r = p.height();
            e.setAutoScrolling(c.autoScrolling, "internal");
            var a = d(".fp-section.active").find(".fp-slide.active");
            a.length && (0 !== d(".fp-section.active").index(".fp-section") || 0 === d(".fp-section.active").index(".fp-section") && 0 !== a.index()) && U(a);
            na();
            oa();
            p.on("load", function () {
                var a = h.location.hash.replace("#", "").split("/"), d = a[0], a = a[1];
                d && (c.animateAnchor ? V(d, a) : e.silentMoveTo(d, a))
            })
        }

        function Oa() {
            k.css({height: "100%", position: "relative"});
            k.addClass("fullpage-wrapper");
            d("html").addClass("fp-enabled");
            k.removeClass("fp-destroyed");
            Pa();
            d(".fp-section").each(function (a) {
                var b = d(this), g = b.find(".fp-slide"), f = g.length;
                a || 0 !== d(".fp-section.active").length || b.addClass("active");
                b.css("height", r + "px");
                c.paddingTop && b.css("padding-top", c.paddingTop);
                c.paddingBottom && b.css("padding-bottom", c.paddingBottom);
                "undefined" !== typeof c.sectionsColor[a] && b.css("background-color", c.sectionsColor[a]);
                "undefined" !== typeof c.anchors[a] && b.attr("data-anchor", c.anchors[a]);
                "undefined" !== typeof c.anchors[a] && b.hasClass("active") && W(c.anchors[a], a);
                c.menu && c.css3 && d(c.menu).closest(".fullpage-wrapper").length && d(c.menu).appendTo(q);
                0 < f ? Qa(b, g, f) : c.verticalCentered && pa(b)
            });
            c.fixedElements && c.css3 && d(c.fixedElements).appendTo(q);
            c.navigation && Ra();
            c.scrollOverflow ? ("complete" === m.readyState && qa(), p.on("load", qa)) : ra()
        }

        function Qa(a, b, g) {
            var f = 100 * g, e = 100 / g;
            b.wrapAll('<div class="fp-slidesContainer" />');
            b.parent().wrap('<div class="fp-slides" />');
            a.find(".fp-slidesContainer").css("width",
                f + "%");
            1 < g && (c.controlArrows && Sa(a), c.slidesNavigation && Ta(a, g));
            b.each(function (a) {
                d(this).css("width", e + "%");
                c.verticalCentered && pa(d(this))
            });
            a = a.find(".fp-slide.active");
            a.length && (0 !== d(".fp-section.active").index(".fp-section") || 0 === d(".fp-section.active").index(".fp-section") && 0 !== a.index()) ? U(a) : b.eq(0).addClass("active")
        }

        function Pa() {
            d(c.sectionSelector).each(function () {
                d(this).addClass("fp-section")
            });
            d(c.slideSelector).each(function () {
                d(this).addClass("fp-slide")
            })
        }

        function Sa(a) {
            a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
            "#fff" != c.controlArrowColor && (a.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + c.controlArrowColor), a.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + c.controlArrowColor + " transparent transparent"));
            c.loopHorizontal || a.find(".fp-controlArrow.fp-prev").hide()
        }

        function Ra() {
            q.append('<div id="fp-nav"><ul></ul></div>');
            var a = d("#fp-nav");
            a.addClass(function () {
                return c.showActiveTooltip ? "fp-show-active " + c.navigationPosition : c.navigationPosition
            });
            for (var b = 0; b < d(".fp-section").length; b++) {
                var g = "";
                c.anchors.length && (g = c.anchors[b]);
                var g = '<li><a href="#' + g + '"><span></span></a>', f = c.navigationTooltips[b];
                "undefined" !== typeof f && "" !== f && (g += '<div class="fp-tooltip ' + c.navigationPosition + '">' + f + "</div>");
                g += "</li>";
                a.find("ul").append(g)
            }
            d("#fp-nav").css("margin-top", "-" + d("#fp-nav").height() / 2 + "px");
            d("#fp-nav").find("li").eq(d(".fp-section.active").index(".fp-section")).find("a").addClass("active")
        }

        function qa() {
            d(".fp-section").each(function () {
                var a =
                    d(this).find(".fp-slide");
                a.length ? a.each(function () {
                    J(d(this))
                }) : J(d(this))
            });
            ra()
        }

        function ra() {
            var a = d(".fp-section.active");
            c.scrollOverflowHandler.afterRender && c.scrollOverflowHandler.afterRender(a);
            K(a);
            X(a);
            d.isFunction(c.afterLoad) && c.afterLoad.call(a, a.data("anchor"), a.index(".fp-section") + 1);
            d.isFunction(c.afterRender) && c.afterRender.call(k)
        }

        function sa() {
            var a;
            if (!c.autoScrolling || c.scrollBar) {
                for (var b = p.scrollTop(), g = 0, f = n.abs(b - m.querySelectorAll(".fp-section")[0].offsetTop), e = m.querySelectorAll(".fp-section"),
                         h = 0; h < e.length; ++h) {
                    var k = n.abs(b - e[h].offsetTop);
                    k < f && (g = h, f = k)
                }
                a = d(e).eq(g);
                if (!a.hasClass("active") && !a.hasClass("fp-auto-height")) {
                    Y = !0;
                    b = d(".fp-section.active");
                    g = b.index(".fp-section") + 1;
                    f = Z(a);
                    e = a.data("anchor");
                    h = a.index(".fp-section") + 1;
                    k = a.find(".fp-slide.active");
                    if (k.length)var l = k.data("anchor"), v = k.index();
                    w && (a.addClass("active").siblings().removeClass("active"), d.isFunction(c.onLeave) && c.onLeave.call(b, g, h, f), d.isFunction(c.afterLoad) && c.afterLoad.call(a, e, h), K(a), W(e, h - 1), c.anchors.length &&
                    (z = e, aa(v, l, e, h)));
                    clearTimeout(ba);
                    ba = setTimeout(function () {
                        Y = !1
                    }, 100)
                }
                c.fitToSection && (clearTimeout(ca), ca = setTimeout(function () {
                    w && c.fitToSection && (d(".fp-section.active").is(a) && requestAnimFrame(function () {
                        t = !0
                    }), A(a), requestAnimFrame(function () {
                        t = !1
                    }))
                }, c.fitToSectionDelay))
            }
        }

        function L(a, b) {
            if (l.m[a]) {
                var d, f;
                "down" == a ? (d = "bottom", f = e.moveSectionDown) : (d = "top", f = e.moveSectionUp);
                if (0 < b.length)if (c.scrollOverflowHandler.isScrolled(d, b))f(); else return !0; else f()
            }
        }

        function Ua(a) {
            var b = a.originalEvent;
            if (!ta(a.target) && da(b)) {
                c.autoScrolling && a.preventDefault();
                a = d(".fp-section.active");
                var g = c.scrollOverflowHandler.scrollable(a);
                w && !x && (b = ua(b), F = b.y, M = b.x, a.find(".fp-slides").length && n.abs(N - M) > n.abs(G - F) ? n.abs(N - M) > h.outerWidth / 100 * c.touchSensitivity && (N > M ? l.m.right && e.moveSlideRight() : l.m.left && e.moveSlideLeft()) : c.autoScrolling && n.abs(G - F) > p.height() / 100 * c.touchSensitivity && (G > F ? L("down", g) : F > G && L("up", g)))
            }
        }

        function ta(a, b) {
            b = b || 0;
            var g = d(a).parent();
            return b < c.normalScrollElementTouchThreshold &&
            g.is(c.normalScrollElements) ? !0 : b == c.normalScrollElementTouchThreshold ? !1 : ta(g, ++b)
        }

        function da(a) {
            return "undefined" === typeof a.pointerType || "mouse" != a.pointerType
        }

        function Va(a) {
            a = a.originalEvent;
            c.fitToSection && y.stop();
            da(a) && (a = ua(a), G = a.y, N = a.x)
        }

        function va(a, b) {
            for (var c = 0, d = a.slice(n.max(a.length - b, 1)), e = 0; e < d.length; e++)c += d[e];
            return n.ceil(c / b)
        }

        function B(a) {
            var b = (new Date).getTime();
            if (c.autoScrolling && !O) {
                a = a || h.event;
                var g = a.wheelDelta || -a.deltaY || -a.detail, f = n.max(-1, n.min(1, g)), e =
                    "undefined" !== typeof a.wheelDeltaX || "undefined" !== typeof a.deltaX, e = n.abs(a.wheelDeltaX) < n.abs(a.wheelDelta) || n.abs(a.deltaX) < n.abs(a.deltaY) || !e;
                149 < C.length && C.shift();
                C.push(n.abs(g));
                c.scrollBar && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                a = d(".fp-section.active");
                a = c.scrollOverflowHandler.scrollable(a);
                g = b - wa;
                wa = b;
                200 < g && (C = []);
                w && (b = va(C, 10), g = va(C, 70), b >= g && e && (0 > f ? L("down", a) : L("up", a)));
                return !1
            }
            c.fitToSection && y.stop()
        }

        function xa(a, b) {
            var g = ("undefined" === typeof b ? d(".fp-section.active") :
                b).find(".fp-slides"), f = g.find(".fp-slide").length;
            if (!(!g.length || x || 2 > f)) {
                var f = g.find(".fp-slide.active"), e = null, e = "prev" === a ? f.prev(".fp-slide") : f.next(".fp-slide");
                if (!e.length) {
                    if (!c.loopHorizontal)return;
                    e = "prev" === a ? f.siblings(":last") : f.siblings(":first")
                }
                x = !0;
                H(g, e)
            }
        }

        function ya() {
            d(".fp-slide.active").each(function () {
                U(d(this), "internal")
            })
        }

        function A(a, b, g) {
            requestAnimFrame(function () {
                var f = a.position();
                if ("undefined" !== typeof f) {
                    var e = a.hasClass("fp-auto-height") && f.top ? f.top - r + a.height() :
                        f.top, f = {
                        element: a,
                        callback: b,
                        isMovementUp: g,
                        dest: f,
                        dtop: e,
                        yMovement: Z(a),
                        anchorLink: a.data("anchor"),
                        sectionIndex: a.index(".fp-section"),
                        activeSlide: a.find(".fp-slide.active"),
                        activeSection: d(".fp-section.active"),
                        leavingSection: d(".fp-section.active").index(".fp-section") + 1,
                        localIsResizing: t
                    };
                    if (!(f.activeSection.is(a) && !t || c.scrollBar && p.scrollTop() === f.dtop && !a.hasClass("fp-auto-height"))) {
                        if (f.activeSlide.length)var h = f.activeSlide.data("anchor"), k = f.activeSlide.index();
                        c.autoScrolling && c.continuousVertical &&
                        "undefined" !== typeof f.isMovementUp && (!f.isMovementUp && "up" == f.yMovement || f.isMovementUp && "down" == f.yMovement) && (f.isMovementUp ? d(".fp-section.active").before(f.activeSection.nextAll(".fp-section")) : d(".fp-section.active").after(f.activeSection.prevAll(".fp-section").get().reverse()), I(d(".fp-section.active").position().top), ya(), f.wrapAroundElements = f.activeSection, f.dest = f.element.position(), f.dtop = f.dest.top, f.yMovement = Z(f.element));
                        if (!d.isFunction(c.onLeave) || f.localIsResizing || !1 !== c.onLeave.call(f.activeSection,
                                f.leavingSection, f.sectionIndex + 1, f.yMovement))za(f.activeSection), a.addClass("active").siblings().removeClass("active"), K(a), w = !1, aa(k, h, f.anchorLink, f.sectionIndex), Wa(f), z = f.anchorLink, W(f.anchorLink, f.sectionIndex)
                    }
                }
            })
        }

        function Wa(a) {
            if (c.css3 && c.autoScrolling && !c.scrollBar)Aa("translate3d(0px, -" + a.dtop + "px, 0px)", !0), c.scrollingSpeed ? ea = setTimeout(function () {
                fa(a)
            }, c.scrollingSpeed) : fa(a); else {
                var b = Xa(a);
                d(b.element).animate(b.options, c.scrollingSpeed, c.easing).promise().done(function () {
                    fa(a)
                })
            }
        }

        function Xa(a) {
            var b = {};
            c.autoScrolling && !c.scrollBar ? (b.options = {top: -a.dtop}, b.element = ".fullpage-wrapper") : (b.options = {scrollTop: a.dtop}, b.element = "html, body");
            return b
        }

        function fa(a) {
            a.wrapAroundElements && a.wrapAroundElements.length && (a.isMovementUp ? d(".fp-section:first").before(a.wrapAroundElements) : d(".fp-section:last").after(a.wrapAroundElements), I(d(".fp-section.active").position().top), ya());
            a.element.find(".fp-scrollable").mouseover();
            d.isFunction(c.afterLoad) && !a.localIsResizing && c.afterLoad.call(a.element,
                a.anchorLink, a.sectionIndex + 1);
            X(a.element);
            w = !0;
            d.isFunction(a.callback) && a.callback.call(this)
        }

        function K(a) {
            a = ga(a);
            a.find("img[data-src], source[data-src], audio[data-src]").each(function () {
                d(this).attr("src", d(this).data("src"));
                d(this).removeAttr("data-src");
                d(this).is("source") && d(this).closest("video").get(0).load()
            })
        }

        function X(a) {
            a = ga(a);
            a.find("video, audio").each(function () {
                var a = d(this).get(0);
                a.hasAttribute("autoplay") && "function" === typeof a.play && a.play()
            })
        }

        function za(a) {
            a = ga(a);
            a.find("video, audio").each(function () {
                var a =
                    d(this).get(0);
                a.hasAttribute("data-ignore") || "function" !== typeof a.pause || a.pause()
            })
        }

        function ga(a) {
            var b = a.find(".fp-slide.active");
            b.length && (a = d(b));
            return a
        }

        function Ba() {
            if (!Y && !c.lockAnchors) {
                var a = h.location.hash.replace("#", "").split("/"), b = a[0], a = a[1], d = "undefined" === typeof z, f = "undefined" === typeof z && "undefined" === typeof a && !x;
                b.length && (b && b !== z && !d || f || !x && ha != a) && V(b, a)
            }
        }

        function Ya(a) {
            w && (a.pageY < P ? e.moveSectionUp() : a.pageY > P && e.moveSectionDown());
            P = a.pageY
        }

        function H(a, b) {
            var g = b.position(),
                f = b.index(), e = a.closest(".fp-section"), h = e.index(".fp-section"), k = e.data("anchor"), l = e.find(".fp-slidesNav"), m = ia(b), v = e.find(".fp-slide.active"), p = t;
            if (c.onSlideLeave) {
                var q = v.index(), r;
                r = q == f ? "none" : q > f ? "left" : "right";
                if (!p && "none" !== r && d.isFunction(c.onSlideLeave) && !1 === c.onSlideLeave.call(v, k, h + 1, q, r, f)) {
                    x = !1;
                    return
                }
            }
            za(v);
            b.addClass("active").siblings().removeClass("active");
            p || K(b);
            !c.loopHorizontal && c.controlArrows && (e.find(".fp-controlArrow.fp-prev").toggle(0 !== f), e.find(".fp-controlArrow.fp-next").toggle(!b.is(":last-child")));
            e.hasClass("active") && aa(f, m, k, h);
            var u = function () {
                p || d.isFunction(c.afterSlideLoad) && c.afterSlideLoad.call(b, k, h + 1, m, f);
                X(b);
                x = !1
            };
            c.css3 ? (g = "translate3d(-" + n.round(g.left) + "px, 0px, 0px)", Ca(a.find(".fp-slidesContainer"), 0 < c.scrollingSpeed).css(Da(g)), ja = setTimeout(function () {
                u()
            }, c.scrollingSpeed, c.easing)) : a.animate({scrollLeft: n.round(g.left)}, c.scrollingSpeed, c.easing, function () {
                u()
            });
            l.find(".active").removeClass("active");
            l.find("li").eq(f).find("a").addClass("active")
        }

        function Ea() {
            na();
            if (Q) {
                var a = d(m.activeElement);
                a.is("textarea") || a.is("input") || a.is("select") || (a = p.height(), n.abs(a - ka) > 20 * n.max(ka, a) / 100 && (e.reBuild(!0), ka = a))
            } else clearTimeout(la), la = setTimeout(function () {
                e.reBuild(!0)
            }, 350)
        }

        function na() {
            var a = c.responsive || c.responsiveWidth, b = c.responsiveHeight, d = a && h.outerWidth < a, f = b && p.height() < b;
            a && b ? e.setResponsive(d || f) : a ? e.setResponsive(d) : b && e.setResponsive(f)
        }

        function Ca(a) {
            var b = "all " + c.scrollingSpeed + "ms " + c.easingcss3;
            a.removeClass("fp-notransition");
            return a.css({
                "-webkit-transition": b,
                transition: b
            })
        }

        function Za(a, b) {
            if (825 > a || 900 > b) {
                var c = n.min(100 * a / 825, 100 * b / 900).toFixed(2);
                q.css("font-size", c + "%")
            } else q.css("font-size", "100%")
        }

        function W(a, b) {
            c.menu && (d(c.menu).find(".active").removeClass("active"), d(c.menu).find('[data-menuanchor="' + a + '"]').addClass("active"));
            c.navigation && (d("#fp-nav").find(".active").removeClass("active"), a ? d("#fp-nav").find('a[href="#' + a + '"]').addClass("active") : d("#fp-nav").find("li").eq(b).find("a").addClass("active"))
        }

        function Z(a) {
            var b = d(".fp-section.active").index(".fp-section");
            a = a.index(".fp-section");
            return b == a ? "none" : b > a ? "up" : "down"
        }

        function J(a) {
            a.css("overflow", "hidden");
            var b = c.scrollOverflowHandler, d = b.wrapContent(), f = a.closest(".fp-section"), e = b.scrollable(a), h;
            e.length ? h = b.scrollHeight(a) : (h = a.get(0).scrollHeight, c.verticalCentered && (h = a.find(".fp-tableCell").get(0).scrollHeight));
            f = r - parseInt(f.css("padding-bottom")) - parseInt(f.css("padding-top"));
            h > f ? e.length ? b.update(a, f) : (c.verticalCentered ? a.find(".fp-tableCell").wrapInner(d) : a.wrapInner(d), b.create(a, f)) :
                b.remove(a);
            a.css("overflow", "")
        }

        function pa(a) {
            a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + Fa(a) + 'px;" />')
        }

        function Fa(a) {
            var b = r;
            if (c.paddingTop || c.paddingBottom)b = a, b.hasClass("fp-section") || (b = a.closest(".fp-section")), a = parseInt(b.css("padding-top")) + parseInt(b.css("padding-bottom")), b = r - a;
            return b
        }

        function Aa(a, b) {
            b ? Ca(k) : k.addClass("fp-notransition");
            k.css(Da(a));
            setTimeout(function () {
                k.removeClass("fp-notransition")
            }, 10)
        }

        function Ga(a) {
            var b = k.find('.fp-section[data-anchor="' +
                a + '"]');
            b.length || (b = d(".fp-section").eq(a - 1));
            return b
        }

        function V(a, b) {
            var c = Ga(a);
            "undefined" === typeof b && (b = 0);
            a === z || c.hasClass("active") ? Ha(c, b) : A(c, function () {
                Ha(c, b)
            })
        }

        function Ha(a, b) {
            if ("undefined" !== typeof b) {
                var c = a.find(".fp-slides"), d;
                d = a.find(".fp-slides");
                var e = d.find('.fp-slide[data-anchor="' + b + '"]');
                e.length || (e = d.find(".fp-slide").eq(b));
                d = e;
                d.length && H(c, d)
            }
        }

        function Ta(a, b) {
            a.append('<div class="fp-slidesNav"><ul></ul></div>');
            var d = a.find(".fp-slidesNav");
            d.addClass(c.slidesNavPosition);
            for (var f = 0; f < b; f++)d.find("ul").append('<li><a href="#"><span></span></a></li>');
            d.css("margin-left", "-" + d.width() / 2 + "px");
            d.find("li").first().find("a").addClass("active")
        }

        function aa(a, b, d, f) {
            f = "";
            c.anchors.length && !c.lockAnchors && (a ? ("undefined" !== typeof d && (f = d), "undefined" === typeof b && (b = a), ha = b, Ia(f + "/" + b)) : ("undefined" !== typeof a && (ha = b), Ia(d)));
            oa()
        }

        function Ia(a) {
            if (c.recordHistory)location.hash = a; else if (Q || R)history.replaceState(E, E, "#" + a); else {
                var b = h.location.href.split("#")[0];
                h.location.replace(b +
                    "#" + a)
            }
        }

        function ia(a) {
            var b = a.data("anchor");
            a = a.index();
            "undefined" === typeof b && (b = a);
            return b
        }

        function oa() {
            var a = d(".fp-section.active"), b = a.find(".fp-slide.active"), c = ia(a), f = ia(b);
            a.index(".fp-section");
            a = String(c);
            b.length && (a = a + "-" + f);
            a = a.replace("/", "-").replace("#", "");
            q[0].className = q[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"), "");
            q.addClass("fp-viewing-" + a)
        }

        function Na() {
            var a = m.createElement("p"), b, c = {
                webkitTransform: "-webkit-transform", OTransform: "-o-transform",
                msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform"
            };
            m.body.insertBefore(a, null);
            for (var d in c)a.style[d] !== E && (a.style[d] = "translate3d(1px,1px,1px)", b = h.getComputedStyle(a).getPropertyValue(c[d]));
            m.body.removeChild(a);
            return b !== E && 0 < b.length && "none" !== b
        }

        function $a() {
            if (Q || R) {
                var a = Ja();
                d(".fullpage-wrapper").off("touchstart " + a.down).on("touchstart " + a.down, Va);
                d(".fullpage-wrapper").off("touchmove " + a.move).on("touchmove " + a.move, Ua)
            }
        }

        function ab() {
            if (Q || R) {
                var a =
                    Ja();
                d(".fullpage-wrapper").off("touchstart " + a.down);
                d(".fullpage-wrapper").off("touchmove " + a.move)
            }
        }

        function Ja() {
            return h.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function ua(a) {
            var b = [];
            b.y = "undefined" !== typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY;
            b.x = "undefined" !== typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX;
            R && da(a) && c.scrollBar && (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX);
            return b
        }

        function U(a, b) {
            e.setScrollingSpeed(0,
                "internal");
            "undefined" !== typeof b && (t = !0);
            H(a.closest(".fp-slides"), a);
            "undefined" !== typeof b && (t = !1);
            e.setScrollingSpeed(D.scrollingSpeed, "internal")
        }

        function I(a) {
            c.scrollBar ? k.scrollTop(a) : c.css3 ? Aa("translate3d(0px, -" + a + "px, 0px)", !1) : k.css("top", -a)
        }

        function Da(a) {
            return {"-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, transform: a}
        }

        function Ka(a, b, c) {
            switch (b) {
                case "up":
                    l[c].up = a;
                    break;
                case "down":
                    l[c].down = a;
                    break;
                case "left":
                    l[c].left = a;
                    break;
                case "right":
                    l[c].right = a;
                    break;
                case "all":
                    "m" ==
                    c ? e.setAllowScrolling(a) : e.setKeyboardScrolling(a)
            }
        }

        function bb() {
            I(0);
            d("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();
            d(".fp-section").css({height: "", "background-color": "", padding: ""});
            d(".fp-slide").css({width: ""});
            k.css({height: "", position: "", "-ms-touch-action": "", "touch-action": ""});
            y.css({overflow: "", height: ""});
            d("html").removeClass("fp-enabled");
            d.each(q.get(0).className.split(/\s+/), function (a, b) {
                0 === b.indexOf("fp-viewing") && q.removeClass(b)
            });
            d(".fp-section, .fp-slide").each(function () {
                c.scrollOverflowHandler.remove(d(this));
                d(this).removeClass("fp-table active")
            });
            k.addClass("fp-notransition");
            k.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function () {
                d(this).replaceWith(this.childNodes)
            });
            y.scrollTop(0);
            d.each(["fp-section", "fp-slide", "fp-slidesContainer"], function (a, b) {
                d("." + b).removeClass(b)
            })
        }

        function S(a, b, d) {
            c[a] = b;
            "internal" !== d && (D[a] = b)
        }

        function T(a, b) {
            console && console[a] && console[a]("fullPage: " + b)
        }

        var y = d("html, body"), q = d("body"), e = d.fn.fullpage;
        c = d.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1E3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowHandler: ma,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, c);
        (function () {
            c.continuousVertical && (c.loopTop || c.loopBottom) && (c.continuousVertical = !1, T("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
            c.scrollBar && c.scrollOverflow && T("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox");
            c.continuousVertical && c.scrollBar && (c.continuousVertical = !1, T("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
            d.each(c.anchors, function (a, b) {
                (d("#" + b).length || d('[name="' + b + '"]').length) && T("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        })();
        d.extend(d.easing, {
            easeInOutCubic: function (a, b, c, d, e) {
                return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
            }
        });
        d.extend(d.easing, {
            easeInQuart: function (a, b, c, d, e) {
                return d * (b /= e) * b * b * b + c
            }
        });
        e.setAutoScrolling = function (a, b) {
            S("autoScrolling", a, b);
            var g = d(".fp-section.active");
            c.autoScrolling && !c.scrollBar ? (y.css({
                overflow: "hidden",
                height: "100%"
            }), e.setRecordHistory(D.recordHistory, "internal"), k.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), g.length && I(g.position().top)) : (y.css({
                overflow: "visible",
                height: "initial"
            }), e.setRecordHistory(!1, "internal"), k.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), I(0), g.length && y.scrollTop(g.position().top))
        };
        e.setRecordHistory = function (a, b) {
            S("recordHistory", a, b)
        };
        e.setScrollingSpeed = function (a, b) {
            S("scrollingSpeed", a, b)
        };
        e.setFitToSection = function (a, b) {
            S("fitToSection", a, b)
        };
        e.setLockAnchors = function (a) {
            c.lockAnchors = a
        };
        e.setMouseWheelScrolling = function (a) {
            if (a) {
                a = "";
                var b;
                h.addEventListener ? b = "addEventListener" : (b = "attachEvent", a = "on");
                var c = "onwheel" in
                m.createElement("div") ? "wheel" : m.onmousewheel !== E ? "mousewheel" : "DOMMouseScroll";
                if ("DOMMouseScroll" == c)m[b](a + "MozMousePixelScroll", B, !1); else m[b](a + c, B, !1)
            } else m.addEventListener ? (m.removeEventListener("mousewheel", B, !1), m.removeEventListener("wheel", B, !1), m.removeEventListener("MozMousePixelScroll", B, !1)) : m.detachEvent("onmousewheel", B)
        };
        e.setAllowScrolling = function (a, b) {
            "undefined" !== typeof b ? (b = b.replace(/ /g, "").split(","), d.each(b, function (b, c) {
                Ka(a, c, "m")
            })) : a ? (e.setMouseWheelScrolling(!0),
                $a()) : (e.setMouseWheelScrolling(!1), ab())
        };
        e.setKeyboardScrolling = function (a, b) {
            "undefined" !== typeof b ? (b = b.replace(/ /g, "").split(","), d.each(b, function (b, c) {
                Ka(a, c, "k")
            })) : c.keyboardScrolling = a
        };
        e.moveSectionUp = function () {
            var a = d(".fp-section.active").prev(".fp-section");
            a.length || !c.loopTop && !c.continuousVertical || (a = d(".fp-section").last());
            a.length && A(a, null, !0)
        };
        e.moveSectionDown = function () {
            var a = d(".fp-section.active").next(".fp-section");
            a.length || !c.loopBottom && !c.continuousVertical || (a =
                d(".fp-section").first());
            a.length && A(a, null, !1)
        };
        e.silentMoveTo = function (a, b) {
            requestAnimFrame(function () {
                e.setScrollingSpeed(0, "internal")
            });
            e.moveTo(a, b);
            requestAnimFrame(function () {
                e.setScrollingSpeed(D.scrollingSpeed, "internal")
            })
        };
        e.moveTo = function (a, b) {
            var c = Ga(a);
            "undefined" !== typeof b ? V(a, b) : 0 < c.length && A(c)
        };
        e.moveSlideRight = function (a) {
            xa("next", a)
        };
        e.moveSlideLeft = function (a) {
            xa("prev", a)
        };
        e.reBuild = function (a) {
            if (!k.hasClass("fp-destroyed")) {
                t = !0;
                requestAnimFrame(function () {
                    t = !0
                });
                var b =
                    h.outerWidth;
                r = p.height();
                c.resize && Za(r, b);
                d(".fp-section").each(function () {
                    var a = d(this).find(".fp-slides"), b = d(this).find(".fp-slide");
                    c.verticalCentered && d(this).find(".fp-tableCell").css("height", Fa(d(this)) + "px");
                    d(this).css("height", r + "px");
                    c.scrollOverflow && (b.length ? b.each(function () {
                        J(d(this))
                    }) : J(d(this)));
                    1 < b.length && H(a, a.find(".fp-slide.active"))
                });
                (b = d(".fp-section.active").index(".fp-section")) && e.silentMoveTo(b + 1);
                t = !1;
                requestAnimFrame(function () {
                    t = !1
                });
                d.isFunction(c.afterResize) &&
                a && c.afterResize.call(k);
                d.isFunction(c.afterReBuild) && !a && c.afterReBuild.call(k)
            }
        };
        e.setResponsive = function (a) {
            var b = q.hasClass("fp-responsive");
            a ? b || (e.setAutoScrolling(!1, "internal"), e.setFitToSection(!1, "internal"), d("#fp-nav").hide(), q.addClass("fp-responsive")) : b && (e.setAutoScrolling(D.autoScrolling, "internal"), e.setFitToSection(D.autoScrolling, "internal"), d("#fp-nav").show(), q.removeClass("fp-responsive"))
        };
        var x = !1, Q = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            R = "ontouchstart" in h || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, k = d(this), r = p.height(), t = !1, La = !0, z, ha, w = !0, C = [], O, l = {
                m: {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                }
            };
        l.k = d.extend(!0, {}, l.m);
        var D = d.extend(!0, {}, c), la, ea, ja, ba, ca, Ma;
        d(this).length && v();
        var Y = !1;
        p.on("scroll", sa);
        var G = 0, N = 0, F = 0, M = 0, wa = (new Date).getTime();
        h.requestAnimFrame = function () {
            return h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame || function (a) {
                    a()
                }
        }();
        p.on("hashchange", Ba);
        u.keydown(function (a) {
            clearTimeout(Ma);
            var b = d(":focus");
            b.is("textarea") || b.is("input") || b.is("select") || !c.keyboardScrolling || !c.autoScrolling || (-1 < d.inArray(a.which, [40, 38, 32, 33, 34]) && a.preventDefault(), O = a.ctrlKey, Ma = setTimeout(function () {
                var b = a.shiftKey;
                switch (a.which) {
                    case 38:
                    case 33:
                        l.k.up && e.moveSectionUp();
                        break;
                    case 32:
                        if (b && l.k.up) {
                            e.moveSectionUp();
                            break
                        }
                    case 40:
                    case 34:
                        l.k.down && e.moveSectionDown();
                        break;
                    case 36:
                        l.k.up && e.moveTo(1);
                        break;
                    case 35:
                        l.k.down && e.moveTo(d(".fp-section").length);
                        break;
                    case 37:
                        l.k.left && e.moveSlideLeft();
                        break;
                    case 39:
                        l.k.right && e.moveSlideRight()
                }
            }, 150))
        });
        u.keyup(function (a) {
            La && (O = a.ctrlKey)
        });
        d(h).blur(function () {
            O = La = !1
        });
        k.mousedown(function (a) {
            2 == a.which && (P = a.pageY, k.on("mousemove", Ya))
        });
        k.mouseup(function (a) {
            2 == a.which && k.off("mousemove")
        });
        var P = 0;
        u.on("click touchstart", "#fp-nav a", function (a) {
            a.preventDefault();
            a = d(this).parent().index();
            A(d(".fp-section").eq(a))
        });
        u.on("click touchstart", ".fp-slidesNav a", function (a) {
            a.preventDefault();
            a = d(this).closest(".fp-section").find(".fp-slides");
            var b = a.find(".fp-slide").eq(d(this).closest("li").index());
            H(a, b)
        });
        c.normalScrollElements && (u.on("mouseenter", c.normalScrollElements, function () {
            e.setMouseWheelScrolling(!1)
        }), u.on("mouseleave", c.normalScrollElements, function () {
            e.setMouseWheelScrolling(!0)
        }));
        d(".fp-section").on("click touchstart", ".fp-controlArrow", function () {
            var a = d(this).closest(".fp-section");
            d(this).hasClass("fp-prev") ? l.m.left && e.moveSlideLeft(a) : l.m.right && e.moveSlideRight(a)
        });
        p.resize(Ea);
        var ka = r;
        e.destroy = function (a) {
            e.setAutoScrolling(!1,
                "internal");
            e.setAllowScrolling(!1);
            e.setKeyboardScrolling(!1);
            k.addClass("fp-destroyed");
            clearTimeout(ja);
            clearTimeout(ea);
            clearTimeout(la);
            clearTimeout(ba);
            clearTimeout(ca);
            p.off("scroll", sa).off("hashchange", Ba).off("resize", Ea);
            u.off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", c.normalScrollElements).off("mouseout", c.normalScrollElements);
            d(".fp-section").off("click", ".fp-controlArrow");
            clearTimeout(ja);
            clearTimeout(ea);
            a && bb()
        }
    };
    ma = {
        afterRender: function (c) {
            var d = c.find("fp-slides");
            c = c.find(".fp-scrollable");
            d.length && (c = d.find(".fp-slide.active"));
            c.mouseover()
        }, create: function (c, d) {
            c.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: d + "px",
                size: "10px",
                alwaysVisible: !0
            })
        }, isScrolled: function (c, d) {
            if ("top" === c)return !d.scrollTop();
            if ("bottom" === c)return d.scrollTop() + 1 + d.innerHeight() >= d[0].scrollHeight
        }, scrollable: function (c) {
            return c.find(".fp-slides").length ? c.find(".fp-slide.active").find(".fp-scrollable") :
                c.find(".fp-scrollable")
        }, scrollHeight: function (c) {
            return c.find(".fp-scrollable").get(0).scrollHeight
        }, remove: function (c) {
            c.find(".fp-scrollable").children().first().unwrap().unwrap();
            c.find(".slimScrollBar").remove();
            c.find(".slimScrollRail").remove()
        }, update: function (c, d) {
            c.find(".fp-scrollable").css("height", d + "px").parent().css("height", d + "px")
        }, wrapContent: function () {
            return '<div class="fp-scrollable"></div>'
        }
    }
});


/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
    function a() {
    }

    function b(a) {
        return f.retinaImageSuffix + a
    }

    function c(a, c) {
        if (this.path = a || "", "undefined" != typeof c && null !== c)this.at_2x_path = c, this.perform_check = !1; else {
            if (void 0 !== document.createElement) {
                var d = document.createElement("a");
                d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
            } else {
                var e = this.path.split("?");
                e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
            }
            this.perform_check = !0
        }
    }

    function d(a) {
        this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var b = this;
        this.path.check_2x_variant(function (a) {
            a && b.swap()
        })
    }

    var e = "undefined" == typeof exports ? window : exports, f = {
        retinaImageSuffix: "@2x",
        check_mime_type: !0,
        force_original_dimensions: !0
    };
    e.Retina = a, a.configure = function (a) {
        null === a && (a = {});
        for (var b in a)a.hasOwnProperty(b) && (f[b] = a[b])
    }, a.init = function (a) {
        null === a && (a = e);
        var b = a.onload || function () {
            };
        a.onload = function () {
            var a, c, e = document.getElementsByTagName("img"), f = [];
            for (a = 0; a < e.length; a += 1)c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
            b()
        }
    }, a.isRetina = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
    };
    var g = /\.\w+$/;
    e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, c.prototype.check_2x_variant = function (a) {
        var b, d = this;
        return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
            if (4 !== b.readyState)return a(!1);
            if (b.status >= 200 && b.status <= 399) {
                if (f.check_mime_type) {
                    var e = b.getResponseHeader("Content-Type");
                    if (null === e || !e.match(/^image/i))return a(!1)
                }
                return c.confirmed_paths.push(d.at_2x_path), a(!0)
            }
            return a(!1)
        }, b.send(), void 0) : a(!0)
    }, e.RetinaImage = d, d.prototype.swap = function (a) {
        function b() {
            c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
        }

        "undefined" == typeof a && (a = this.path.at_2x_path);
        var c = this;
        b()
    }, a.isRetina() && a.init(e)
}();


/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function ($) {
    var selectors = [];

    var check_binded = false;
    var check_lock = false;
    var defaults = {
        interval: 250,
        force_process: false
    };
    var $window = $(window);

    var $prior_appeared = [];

    function process() {
        check_lock = false;
        for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
            var $appeared = $(selectors[index]).filter(function () {
                return $(this).is(':appeared');
            });

            $appeared.trigger('appear', [$appeared]);

            if ($prior_appeared[index]) {
                var $disappeared = $prior_appeared[index].not($appeared);
                $disappeared.trigger('disappear', [$disappeared]);
            }
            $prior_appeared[index] = $appeared;
        }
    };

    function add_selector(selector) {
        selectors.push(selector);
        $prior_appeared.push();
    }

    // "appeared" custom filter
    $.expr[':']['appeared'] = function (element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;

        if (top + $element.height() >= window_top &&
            top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
            left + $element.width() >= window_left &&
            left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
            return true;
        } else {
            return false;
        }
    };

    $.fn.extend({
        // watching for element's appearance in browser viewport
        appear: function (options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function () {
                    if (check_lock) {
                        return;
                    }
                    check_lock = true;

                    setTimeout(process, opts.interval);
                };

                $(window).scroll(on_check).resize(on_check);
                check_binded = true;
            }

            if (opts.force_process) {
                setTimeout(process, opts.interval);
            }
            add_selector(selector);
            return $(selector);
        }
    });

    $.extend({
        // force elements's appearance check
        force_appear: function () {
            if (check_binded) {
                process();
                return true;
            }
            return false;
        }
    });
})(function () {
    if (typeof module !== 'undefined') {
        // Node
        return require('jquery');
    } else {
        return jQuery;
    }
}());


/*!
 Waypoints - 4.0.0
 Copyright © 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
 */
!function () {
    "use strict";
    function t(o) {
        if (!o)throw new Error("No options passed to Waypoint constructor");
        if (!o.element)throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i)e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++)e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, o = {}, n = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal), e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s], l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t)t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)for (var i in this.waypoints[e])t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++)t[o].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0, g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function () {
            for (var t in o)o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in o)o[t].refresh()
    }, e.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(), function () {
    "use strict";
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    "use strict";
    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";
    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, {element: this});
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function (f) {
    "use strict";
    "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function ($) {
    "use strict";
    function n(a) {
        return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function h(a) {
        return $.isFunction(a) || $.isPlainObject(a) ? a : {top: a, left: a}
    }

    var p = $.scrollTo = function (a, d, b) {
        return $(window).scrollTo(a, d, b)
    };
    p.defaults = {axis: "xy", duration: 0, limit: !0};
    $.fn.scrollTo = function (a, d, b) {
        "object" === typeof d && (b = d, d = 0);
        "function" === typeof b && (b = {onAfter: b});
        "max" === a && (a = 9E9);
        b = $.extend({}, p.defaults, b);
        d = d || b.duration;
        var u = b.queue && 1 < b.axis.length;
        u && (d /= 2);
        b.offset = h(b.offset);
        b.over = h(b.over);
        return this.each(function () {
            function k(a) {
                var k = $.extend({}, b, {
                    queue: !0, duration: d, complete: a && function () {
                        a.call(q, e, b)
                    }
                });
                r.animate(f, k)
            }

            if (null !== a) {
                var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t;
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = h(e);
                            break
                        }
                        e = l ? $(e) : $(e, q);
                    case "object":
                        if (e.length === 0)return;
                        if (e.is || e.style)t = (e = $(e)).offset()
                }
                var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                $.each(b.axis.split(""), function (a, c) {
                    var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c);
                    t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                    b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                    !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
                });
                k(b.onAfter)
            }
        })
    };
    p.max = function (a, d) {
        var b = "x" === d ? "Width" : "Height", h = "scroll" + b;
        if (!n(a))return a[h] - $(a)[b.toLowerCase()]();
        var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body;
        return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
    };
    $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function (a) {
            return $(a.elem)[a.prop]()
        }, set: function (a) {
            var d = this.get(a);
            if (a.options.interrupt && a._last && a._last !== d)return $(a.elem).stop();
            var b = Math.round(a.now);
            d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
        }
    };
    return p
});


/*!
 * fitVids - 1.1.0
 **/
!function ($) {
    "use strict";
    $.fn.fitVids = function (options) {
        var settings = {customSelector: null};
        if (!document.getElementById("fit-vids-style")) {
            var head = document.head || document.getElementsByTagName("head")[0], css = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>", head.appendChild(div.childNodes[1])
        }
        return options && $.extend(settings, options), this.each(function () {
            var selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            settings.customSelector && selectors.push(settings.customSelector);
            var $allVideos = $(this).find(selectors.join(","));
            $allVideos = $allVideos.not("object object"), $allVideos.each(function () {
                var $this = $(this);
                if (!("embed" === this.tagName.toLowerCase() && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length)) {
                    $this.css("height") || $this.css("width") || !isNaN($this.attr("height")) && !isNaN($this.attr("width")) || ($this.attr("height", 9), $this.attr("width", 16));
                    var height = "object" === this.tagName.toLowerCase() || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height(), width = isNaN(parseInt($this.attr("width"), 10)) ? $this.width() : parseInt($this.attr("width"), 10), aspectRatio = height / width;
                    if (!$this.attr("id")) {
                        var videoID = "fitvid" + Math.floor(999999 * Math.random());
                        $this.attr("id", videoID)
                    }
                    $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * aspectRatio + "%"), $this.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);


/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (a) {
    function b(b) {
        var c = {}, d = /^jQuery\d+$/;
        return a.each(b.attributes, function (a, b) {
            b.specified && !d.test(b.name) && (c[b.name] = b.value)
        }), c
    }

    function c(b, c) {
        var d = this, f = a(this);
        if (d.value === f.attr(h ? "placeholder-x" : "placeholder") && f.hasClass(n.customClass))if (d.value = "", f.removeClass(n.customClass), f.data("placeholder-password")) {
            if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0)return f[0].value = c, c;
            f.focus()
        } else d == e() && d.select()
    }

    function d(d) {
        var e, f = this, g = a(this), i = f.id;
        if (!d || "blur" !== d.type || !g.hasClass(n.customClass))if ("" === f.value) {
            if ("password" === f.type) {
                if (!g.data("placeholder-textinput")) {
                    try {
                        e = g.clone().prop({type: "text"})
                    } catch (j) {
                        e = a("<input>").attr(a.extend(b(this), {type: "text"}))
                    }
                    e.removeAttr("name").data({
                        "placeholder-enabled": !0,
                        "placeholder-password": g,
                        "placeholder-id": i
                    }).bind("focus.placeholder", c), g.data({"placeholder-textinput": e, "placeholder-id": i}).before(e)
                }
                f.value = "", g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
            } else {
                var k = g.data("placeholder-password");
                k && (k[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            g.addClass(n.customClass), g[0].value = g.attr(h ? "placeholder-x" : "placeholder")
        } else g.removeClass(n.customClass)
    }

    function e() {
        try {
            return document.activeElement
        } catch (a) {
        }
    }

    var f, g, h = !1, i = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), j = "placeholder" in document.createElement("input") && !i && !h, k = "placeholder" in document.createElement("textarea") && !i && !h, l = a.valHooks, m = a.propHooks, n = {};
    j && k ? (g = a.fn.placeholder = function () {
        return this
    }, g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function (b) {
        var e = {customClass: "placeholder"};
        return n = a.extend({}, e, b), this.filter((j ? "textarea" : ":input") + "[" + (h ? "placeholder-x" : "placeholder") + "]").not("." + n.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": c,
            "blur.placeholder": d
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, g.input = j, g.textarea = k, f = {
        get: function (b) {
            var c = a(b), d = c.data("placeholder-password");
            return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(n.customClass) ? "" : b.value
        }, set: function (b, f) {
            var g, h, i = a(b);
            return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)), i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(n.customClass) && c.call(b), b.value = f), i) : (b.value = f, i)
        }
    }, j || (l.input = f, m.value = f), k || (l.textarea = f, m.value = f), a(function () {
        a(document).delegate("form", "submit.placeholder", function () {
            var b = a("." + n.customClass, this).each(function () {
                c.call(this, !0, "")
            });
            setTimeout(function () {
                b.each(d)
            }, 10)
        })
    }), a(window).bind("beforeunload.placeholder", function () {
        var b = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (b = !1)
        } catch (c) {
        }
        b && a("." + n.customClass).each(function () {
            this.value = ""
        })
    }))
});


/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)return a;
        if (String(a).match(g))return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)for (var f = 0, g = d.length; g > f; ++f) {
                var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), j = c(h[0]), k = h[1] || "", l = h[3] || "", m = null;
                h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
            }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s", d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
    }

    var f = [], g = [], h = {precision: 100, elapse: !1};
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        w: "weeks",
        d: "daysToWeek",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    }, j = function (b, c, d) {
        this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
    };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function () {
                a.update.call(a)
            }, this.options.precision)
        }, stop: function () {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        }, toggle: function () {
            this.interval ? this.stop() : this.start()
        }, pause: function () {
            this.stop()
        }, resume: function () {
            this.start()
        }, remove: function () {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        }, setFinalDate: function (a) {
            this.finalDate = b(a)
        }, update: function () {
            if (0 === this.$el.closest("html").length)return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"), d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        }, dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function () {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c], e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});


/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function ($) {
    var e = !0;
    $.flexslider = function (t, a) {
        var n = $(t);
        n.vars = $.extend({}, $.flexslider.defaults, a);
        var i = n.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, o = "click touchend MSPointerUp keyup", l = "", c, d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, m = "" !== n.vars.asNavFor, f = {};
        $.data(t, "flexslider", n), f = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
                        var e = document.createElement("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var a in t)if (void 0 !== e.style[t[a]])return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                        return !1
                    }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
                    e.preventDefault();
                    var s = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(s, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), r && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            }, asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), s ? (t._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var t = $(this), a = t.index();
                            $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(o, function (e) {
                        e.preventDefault();
                        var t = $(this), a = t.index(), s = t.offset().left - $(n).scrollLeft();
                        0 >= s && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                }, setupPaging: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", t = 1, a, s;
                    if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1)for (var r = 0; r < n.pagingCount; r++) {
                        if (s = n.slides.eq(r), void 0 === s.attr("data-thumb-alt") && s.attr("data-thumb-alt", ""), altText = "" !== s.attr("data-thumb-alt") ? altText = ' alt="' + s.attr("data-thumb-alt") + '"' : "", a = "thumbnails" === n.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                            var c = s.attr("data-thumbcaption");
                            "" !== c && void 0 !== c && (a += '<span class="' + i + 'caption">' + c + "</span>")
                        }
                        n.controlNavScaffold.append("<li>" + a + "</li>"), t++
                    }
                    n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this), a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this), a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                }, active: function () {
                    n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                }, update: function (e, t) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
                        e.preventDefault();
                        var t;
                        ("" === l || l === e.type) && (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var e = i + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
                        e.preventDefault(), ("" === l || l === e.type) && ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, update: function (e) {
                    "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                }
            }, touch: function () {
                function e(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
                }

                function a(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX, i = -e.translationY;
                        return T += d ? i : n, m = T, x = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            t._gesture.stop()
                        }) : void((!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = T / (0 === a.currentSlide && 0 > T || a.currentSlide === a.last && T > 0 ? Math.abs(T) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
                    }
                }

                function i(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !x && null !== m) {
                            var a = u ? -m : m, n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = null, o = null, m = null, l = null, T = 0
                    }
                }

                var r, o, l, c, m, f, g, h, S, x = !1, y = 0, b = 0, T = 0;
                s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function (e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, r = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
                }, h = function (e) {
                    y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? r - b : r - y, x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!x || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
                }, S = function (e) {
                    if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
                        var a = u ? -m : m, i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
                }, t.addEventListener("touchstart", g, !1))
            }, resize: function () {
                !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            }, smoothHeight: function (e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({height: n.slides.eq(n.animatingTo).height()}, e) : t.height(n.slides.eq(n.animatingTo).height())
                }
            }, sync: function (e) {
                var t = $(n.vars.sync).data("flexslider"), a = n.animatingTo;
                switch (e) {
                    case"animate":
                        t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        t.playing || t.asNav || t.play();
                        break;
                    case"pause":
                        t.pause()
                }
            }, uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function () {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                }, isHidden: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1
                }, getHiddenProp: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)return "hidden";
                    for (var t = 0; t < e.length; t++)if (e[t] + "Hidden" in document)return e[t] + "Hidden";
                    return null
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(c), c = setTimeout(function () {
                    l = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, t, a, s, o) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
                if (m && s) {
                    var l = $(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e)return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)r ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
                    var c = d ? n.slides.filter(":first").height() : n.computedW, g, h, S;
                    v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(c)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(c)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (e) {
            p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && e && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function (e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (e, t, a) {
            var i = function () {
                var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, i = function () {
                    if (v)return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                    switch (t) {
                        case"setTotal":
                            return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                        case"setTouch":
                            return u ? e : e;
                        case"jumpEnd":
                            return u ? e : n.count * e;
                        case"jumpStart":
                            return u ? n.count * e : e;
                        default:
                            return e
                    }
                }();
                return -1 * i + "px"
            }();
            n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function (e) {
            if (p)n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight(); else {
                var t, a;
                "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
        }, n.update = function (e, t) {
            n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function (e, t) {
            var a = $(e);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var t = isNaN(e) ? n.slides.index($(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, $(window).blur(function (t) {
        e = !1
    }).focus(function (t) {
        e = !0
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        }
    }, $.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e)return this.each(function () {
            var t = $(this), a = e.selector ? e.selector : ".slides > li", n = t.find(a);
            1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
        });
        var t = $(this).data("flexslider");
        switch (e) {
            case"play":
                t.play();
                break;
            case"pause":
                t.pause();
                break;
            case"stop":
                t.stop();
                break;
            case"next":
                t.flexAnimate(t.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                t.flexAnimate(t.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && t.flexAnimate(e, !0)
        }
    }
}(jQuery);


/*!
 * AjaxChimp - 1.3.0
 **/
/*!
 Mailchimp Ajax Submit
 jQuery Plugin
 Author: Siddharth Doshi

 Use:
 ===
 $('#form_id').ajaxchimp(options);

 - Form should have one <input> element with attribute 'type=email'
 - Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
 - All options are optional.

 Options:
 =======
 options = {
 language: 'en',
 callback: callbackFunction,
 url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
 }

 Notes:
 =====
 To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
 For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
 */
!(function ($) {
    'use strict';

    $.ajaxChimp = {
        responses: {
            'We have sent you a confirmation email': 0,
            'Please enter a value': 1,
            'An email address must contain a single @': 2,
            'The domain portion of the email address is invalid (the portion after the @: )': 3,
            'The username portion of the email address is invalid (the portion before the @: )': 4,
            'This email address looks fake or invalid. Please enter a real email address': 5
        },
        translations: {
            'en': null
        },
        init: function (selector, options) {
            $(selector).ajaxChimp(options);
        }
    };

    $.fn.ajaxChimp = function (options) {
        $(this).each(function (i, elem) {
            var form = $(elem);
            var email = form.find('input[type=email]');
            var label = form.find('label[for=' + email.attr('id') + ']');

            var settings = $.extend({
                'url': form.attr('action'),
                'language': 'en'
            }, options);

            var url = settings.url.replace('/post?', '/post-json?').concat('&c=?');

            form.attr('novalidate', 'true');
            email.attr('name', 'EMAIL');

            form.submit(function () {
                var msg;

                function successCallback(resp) {
                    if (resp.result === 'success') {
                        msg = 'We have sent you a confirmation email';
                        label.removeClass('error').addClass('valid');
                        email.removeClass('error').addClass('valid');
                    } else {
                        email.removeClass('valid').addClass('error');
                        label.removeClass('valid').addClass('error');
                        var index = -1;
                        try {
                            var parts = resp.msg.split(' - ', 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg;
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1];
                                } else {
                                    index = -1;
                                    msg = resp.msg;
                                }
                            }
                        }
                        catch (e) {
                            index = -1;
                            msg = resp.msg;
                        }
                    }

                    // Translate and display message
                    if (
                        settings.language !== 'en'
                        && $.ajaxChimp.responses[msg] !== undefined
                        && $.ajaxChimp.translations
                        && $.ajaxChimp.translations[settings.language]
                        && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    ) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]];
                    }
                    label.html(msg);

                    label.show(2000);
                    if (settings.callback) {
                        settings.callback(resp);
                    }
                }

                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function (index, item) {
                    data[item.name] = item.value;
                });

                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: 'jsonp',
                    error: function (resp, text) {
                        console.log('mailchimp ajax submit error: ' + text);
                    }
                });

                // Translate and display submit message
                var submitMsg = 'Submitting...';
                if (
                    settings.language !== 'en'
                    && $.ajaxChimp.translations
                    && $.ajaxChimp.translations[settings.language]
                    && $.ajaxChimp.translations[settings.language]['submit']
                ) {
                    submitMsg = $.ajaxChimp.translations[settings.language]['submit'];
                }
                label.html(submitMsg).show(2000);

                return false;
            });
        });
        return this;
    };
})(jQuery);


/*! Backstretch - v2.0.4 - 2013-06-19
 * http://srobbin.com/jquery-plugins/backstretch/
 * Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function (a, d, p) {
    a.fn.backstretch = function (c, b) {
        (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch");
        0 === a(d).scrollTop() && d.scrollTo(0, 0);
        return this.each(function () {
            var d = a(this), g = d.data("backstretch");
            if (g) {
                if ("string" == typeof c && "function" == typeof g[c]) {
                    g[c](b);
                    return
                }
                b = a.extend(g.options, b);
                g.destroy(!0)
            }
            g = new q(this, c, b);
            d.data("backstretch", g)
        })
    };
    a.backstretch = function (c, b) {
        return a("body").backstretch(c, b).data("backstretch")
    };
    a.expr[":"].backstretch = function (c) {
        return a(c).data("backstretch") !== p
    };
    a.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5E3, fade: 0};
    var r = {
        left: 0,
        top: 0,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        zIndex: -999999
    }, s = {
        position: "absolute",
        display: "none",
        margin: 0,
        padding: 0,
        border: "none",
        width: "auto",
        height: "auto",
        maxHeight: "none",
        maxWidth: "none",
        zIndex: -999999
    }, q = function (c, b, e) {
        this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
        this.images = a.isArray(b) ? b : [b];
        a.each(this.images, function () {
            a("<img />")[0].src = this
        });
        this.isBody = c === document.body;
        this.$container = a(c);
        this.$root = this.isBody ? l ? a(d) : a(document) : this.$container;
        c = this.$container.children(".backstretch").first();
        this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
        this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
            position: "static" === c ? "relative" : c,
            zIndex: "auto" === b ? 0 : b,
            background: "none"
        }), this.$wrap.css({zIndex: -999998}));
        this.$wrap.css({position: this.isBody && l ? "fixed" : "absolute"});
        this.index = 0;
        this.show(this.index);
        a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
            this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize())
        }, this))
    };
    q.prototype = {
        resize: function () {
            try {
                var a = {
                    left: 0,
                    top: 0
                }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), e = b, g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(), j = e / this.$img.data("ratio"), f;
                j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
                this.$wrap.css({width: b, height: g}).find("img:not(.deleteable)").css({width: e, height: j}).css(a)
            } catch (h) {
            }
            return this
        }, show: function (c) {
            if (!(Math.abs(c) > this.images.length - 1)) {
                var b = this, e = b.$wrap.find("img").addClass("deleteable"), d = {relatedTarget: b.$container[0]};
                b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
                this.index = c;
                clearInterval(b.interval);
                b.$img = a("<img />").css(s).bind("load", function (f) {
                    var h = this.width || a(f.target).width();
                    f = this.height || a(f.target).height();
                    a(this).data("ratio", h / f);
                    a(this).fadeIn(b.options.speed || b.options.fade, function () {
                        e.remove();
                        b.paused || b.cycle();
                        a(["after", "show"]).each(function () {
                            b.$container.trigger(a.Event("backstretch." + this, d), [b, c])
                        })
                    });
                    b.resize()
                }).appendTo(b.$wrap);
                b.$img.attr("src", b.images[c]);
                return b
            }
        }, next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        }, prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        }, pause: function () {
            this.paused = !0;
            return this
        }, resume: function () {
            this.paused = !1;
            this.next();
            return this
        }, cycle: function () {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        }, destroy: function (c) {
            a(d).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            c || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var l, f = navigator.userAgent, m = navigator.platform, e = f.match(/AppleWebKit\/([0-9]+)/), e = !!e && e[1], h = f.match(/Fennec\/([0-9]+)/), h = !!h && h[1], n = f.match(/Opera Mobi\/([0-9]+)/), t = !!n && n[1], k = f.match(/MSIE ([0-9]+)/), k = !!k && k[1];
    l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
})(jQuery, window);


/*jquery.mb.YTPlayer 09-01-2016
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
function uncamel(a) {
    return a.replace(/([A-Z])/g, function (a) {
        return "-" + a.toLowerCase()
    })
}
function setUnit(a, b) {
    return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}
function setFilter(a, b, c) {
    var d = uncamel(b), e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b]
}
var ytp = ytp || {}, getYTPVideoID = function (a) {
    var b, c;
    return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
        videoID: b,
        playlistID: c
    }
};
!function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.11",
        build: "5806",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function (a) {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        locationProtocol: "https:",
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {value: 0, unit: "deg"},
                    invert: {value: 0, unit: "%"},
                    opacity: {value: 0, unit: "%"},
                    saturate: {value: 0, unit: "%"},
                    sepia: {value: 0, unit: "%"},
                    brightness: {value: 0, unit: "%"},
                    contrast: {value: 0, unit: "%"},
                    blur: {value: 0, unit: "px"}
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function () {
                    var a = !1;
                    try {
                        self.location.href != top.location.href && (a = !0)
                    } catch (b) {
                        a = !0
                    }
                    return a
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({boxSizing: "border-box"}), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady)setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100); else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({maxWidth: "100%"});
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({maxHeight: h})
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function (a) {
                                                YTPlayer.player = a.target, playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: 1})
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function (a) {
                                            YTPlayer.player = a.target, YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP").on("resize.YTP", function () {
                                                $YTPlayer.optimizeDisplay()
                                            }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        }, onStateChange: function (event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    if (YTPlayer.preventTrigger)return void(YTPlayer.preventTrigger = !1);
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case-1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPPlay", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPEvent = jQuery.Event(eventType);
                                                    YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                }
                                            }
                                        }, onPlaybackQualityChange: function (a) {
                                            var b = a.target.getPlaybackQuality(), c = jQuery.Event("YTPQualityChange");
                                            c.quality = b, jQuery(YTPlayer).trigger(c)
                                        }, onError: function (a) {
                                            150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function (a) {
            if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                    if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
                        var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium;
                        a.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                            backgroundSize: "cover"
                        }), a.opt.backgroundUrl = b
                    }
                }), a.videoData)setTimeout(function () {
                a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.dataReceived = !0, jQuery(a).trigger("YTPChanged");
                var b = jQuery.Event("YTPData");
                b.prop = {};
                for (var c in a.videoData)b.prop[c] = a.videoData[c];
                jQuery(a).trigger(b)
            }, 500), a.hasData = !0; else if (jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (b) {
                function c(b) {
                    a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.aspectratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.opt.ratio = a.videoData.aspectratio, a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
                }

                a.dataReceived = !0, jQuery(a).trigger("YTPChanged"), c(b.items[0].snippet), a.hasData = !0;
                var d = jQuery.Event("YTPData");
                d.prop = {};
                for (var e in a.videoData)d.prop[e] = a.videoData[e];
                jQuery(a).trigger(d)
            }); else {
                if (setTimeout(function () {
                        jQuery(a).trigger("YTPChanged")
                    }, 50), a.isPlayer && !a.opt.autoPlay) {
                    var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/hqdefault.jpg";
                    a.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                        backgroundSize: "cover"
                    }), a.opt.backgroundUrl = b
                }
                a.videoData = null, a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio
            }
            a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
        },
        removeStoredData: function () {
            jQuery.mbStorage.remove()
        },
        getVideoData: function () {
            var a = this.get(0);
            return a.videoData
        },
        getVideoID: function () {
            var a = this.get(0);
            return a.videoID || !1
        },
        setVideoQuality: function (a) {
            var b = this.get(0);
            b.player.setPlaybackQuality(a)
        },
        playlist: function (a, b, c) {
            var d = this, e = d.get(0);
            return e.isPlayList = !0, b && (a = jQuery.shuffle(a)), e.videoID || (e.videos = a, e.videoCounter = 0, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).mb_YTPlayer()), "function" == typeof c && jQuery(e).one("YTPChanged", function () {
                c(e)
            }), jQuery(e).on("YTPEnd", function () {
                jQuery(e).playNext()
            }), d
        },
        playNext: function () {
            var a = this.get(0);
            return a.videoCounter++, a.videoCounter >= a.videoLength && (a.videoCounter = 0), jQuery(a).changeMovie(a.videos[a.videoCounter]), this
        },
        playPrev: function () {
            var a = this.get(0);
            return a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a).changeMovie(a.videos[a.videoCounter]), this
        },
        changeMovie: function (a) {
            var b = this.get(0);
            b.opt.startAt = 0, b.opt.stopAt = 0, b.opt.mute = !0, b.hasData = !1, b.hasChanged = !0, b.player.loopTime = void 0, a && jQuery.extend(b.opt, b.defaultOpt, a), b.videoID = getYTPVideoID(b.opt.videoURL).videoID, "true" == b.opt.loop && (b.opt.loop = 9999), jQuery(b.playerEl).CSSAnimate({opacity: 0}, 200, function () {
                var a = jQuery.Event("YTPChangeMovie");
                return a.time = b.player.time, a.videoId = b.videoID, jQuery(b).trigger(a), jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + b.videoID), 1, b.opt.quality), jQuery(b).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(b), jQuery.mbYTPlayer.getDataFromAPI(b), this
            })
        },
        getPlayer: function () {
            return jQuery(this).get(0).player
        },
        playerDestroy: function () {
            var a = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null;
            var b = a.wrapper;
            return b.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this
        },
        fullscreen: function (real) {
            function hideMouse() {
                YTPlayer.overlay.css({cursor: "none"})
            }

            function RunPrefixMethod(a, b) {
                for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
                    if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d)return e = [e[f]], "function" == d ? a[c]() : a[c];
                    f++
                }
            }

            function launchFullscreen(a) {
                RunPrefixMethod(a, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({cursor: "auto"}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (a) {
                YTPlayer.overlay.css({cursor: "auto"}), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                videoWrapper.CSSAnimate({opacity: 1}, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function () {
            var a = this.get(0), b = a.opt;
            return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this
        },
        play: function () {
            var a = this.get(0);
            if (a.isReady)return a.player.playVideo(), a.wrapper.CSSAnimate({opacity: a.isAlone ? 1 : a.opt.opacity}, 2e3), jQuery(a.playerEl).CSSAnimate({opacity: 1}, 1e3), jQuery(a).css("background-image", "none"), this
        },
        togglePlay: function (a) {
            var b = this.get(0);
            return 1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this
        },
        stop: function () {
            var a = this.get(0), b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPPlaypause");
            return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
        },
        pause: function () {
            var a = this.get(0);
            return a.player.pauseVideo(), this
        },
        seekTo: function (a) {
            var b = this.get(0);
            return b.player.seekTo(a, !0), this
        },
        setVolume: function (a) {
            var b = this.get(0);
            return a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.opt.vol == a ? b.isMute ? jQuery(b).YTPUnmute() : jQuery(b).YTPMute() : (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a)) : jQuery(b).YTPUnmute(), this
        },
        mute: function () {
            var a = this.get(0);
            if (!a.isMute) {
                a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
                var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute");
                c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
                var d = jQuery.Event("YTPMuted");
                return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this
            }
        },
        unmute: function () {
            var a = this.get(0);
            if (a.isMute) {
                a.player.unMute(), a.isMute = !1, a.player.setVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
                var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute");
                c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
                var d = jQuery.Event("YTPUnmuted");
                return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this
            }
        },
        applyFilter: function (a, b) {
            var c = this.get(0);
            return c.filters[a].value = b, c.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function (a) {
            var b = this.get(0);
            return this.on("YTPReady", function () {
                for (var c in a)b.filters[c].value = a[c], jQuery(b).YTPApplyFilter(c, a[c]);
                jQuery(b).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function (a, b) {
            return this.each(function () {
                var c = this;
                c.filters[a].value ? c.filters[a].value = 0 : c.filters[a].value = b, c.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function (a) {
            return this.each(function () {
                var b = this;
                b.filtersEnabled ? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters()) : (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")), "function" == typeof a && a(b.filtersEnabled)
            })
        },
        disableFilters: function () {
            return this.each(function () {
                var a = this, b = jQuery(a.playerEl);
                b.css("-webkit-filter", ""), b.css("filter", ""), a.filtersEnabled = !1
            })
        },
        enableFilters: function () {
            return this.each(function () {
                var a = this, b = jQuery(a.playerEl), c = "";
                for (var d in a.filters)a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") ");
                b.css("-webkit-filter", c), b.css("filter", c), a.filtersEnabled = !0
            })
        },
        removeFilter: function (a, b) {
            return this.each(function () {
                "function" == typeof a && (b = a, a = null);
                var c = this;
                if (a)jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a); else for (var d in c.filters)jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d)
            })
        },
        manageProgress: function () {
            var a = this.get(0), b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPProgress"), d = b.find(".mb_YTPLoaded"), e = b.find(".mb_YTPseekbar"), f = c.outerWidth(), g = Math.floor(a.player.getCurrentTime()), h = Math.floor(a.player.getDuration()), i = g * f / h, j = 0, k = 100 * a.player.getVideoLoadedFraction();
            return d.css({left: j, width: k + "%"}), e.css({left: 0, width: i}), {totalTime: h, currentTime: g}
        },
        buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                }), MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"), vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                    jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                }), progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (a) {
                    timeBar.css({width: a.clientX - timeBar.offset().left}), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
                    var b = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
                }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (a) {
                        0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
                    }
                })
            }
        },
        checkForState: function (YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
                var prog = jQuery(YTPlayer).YTPManageProgress(), $YTPlayer = jQuery(YTPlayer), data = YTPlayer.opt, startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0, stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded)return;
                    if (YTPlayer.isEnded = !0, setTimeout(function () {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEnd), void(YTPlayer.state = 0)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, jQuery(YTPlayer).YTPPause(), YTPlayer.state = 0, void YTPlayer.wrapper.CSSAnimate({opacity: 0}, 500, function () {
                        YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var a = jQuery.Event("YTPEnd");
                        a.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        })
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 0, YTPlayer.preventTrigger = !0, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function (a) {
            var b = jQuery(a);
            if (!jQuery.contains(document, a))return void jQuery(a).YTPPlayerDestroy();
            if (a.preventTrigger = !0, jQuery(a).YTPPause(), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.opt.addRaster) {
                var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
                a.overlay.addClass(a.isRetina ? c + " retina" : c)
            } else a.overlay.removeClass(function (a, b) {
                var c = b.split(" "), d = [];
                return jQuery.each(c, function (a, b) {
                    /raster.*/.test(b) && d.push(b)
                }), d.push("retina"), d.join(" ")
            });
            var d = a.opt.startAt ? a.opt.startAt : 0;
            a.player.playVideo(), a.player.seekTo(d, !0), a.checkForStartAt = setInterval(function () {
                jQuery(a).YTPMute();
                var c = a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
                if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= d && c) {
                    clearInterval(a.checkForStartAt), a.isReady = !0, "function" == typeof a.opt.onReady && a.opt.onReady(a);
                    var e = jQuery.Event("YTPReady");
                    if (e.time = a.player.time, jQuery(a).trigger(e), a.preventTrigger = !0, jQuery(a).YTPPause(), a.opt.mute || jQuery(a).YTPUnmute(), a.canTrigger = !0, a.opt.autoPlay) {
                        b.YTPPlay();
                        var f = jQuery.Event("YTPStart");
                        f.time = a.player.time, jQuery(a).trigger(f), b.css("background-image", "none"), jQuery(a.playerEl).CSSAnimate({opacity: 1}, 1e3), a.wrapper.CSSAnimate({opacity: a.isAlone ? 1 : a.opt.opacity}, 1e3)
                    } else b.YTPPause(), a.isPlayer || (jQuery(a.playerEl).CSSAnimate({opacity: 1}, 500), a.wrapper.CSSAnimate({opacity: a.isAlone ? 1 : a.opt.opacity}, 500));
                    a.isPlayer && !a.opt.autoPlay && (a.loading.html("Ready"), setTimeout(function () {
                        a.loading.fadeOut()
                    }, 100)), a.controlBar && a.controlBar.slideDown(1e3)
                } else jQuery.browser.safari
            }, 1)
        },
        formatTime: function (a) {
            var b = Math.floor(a / 60), c = Math.floor(a - 60 * b);
            return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
        }
    }, jQuery.fn.toggleVolume = function () {
        var a = this.get(0);
        if (a)return a.player.isMuted() ? (jQuery(a).YTPUnmute(), !0) : (jQuery(a).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function () {
        var a = this.get(0), b = a.opt, c = jQuery(a.playerEl), d = {}, e = a.wrapper;
        d.width = e.outerWidth(), d.height = e.outerHeight();
        var f = 24, g = 100, h = {};
        b.optimizeDisplay ? (h.width = d.width + d.width * f / 100, h.height = "16/9" == b.ratio ? Math.ceil(9 * d.width / 16) : Math.ceil(3 * d.width / 4), h.marginTop = -((h.height - d.height) / 2), h.marginLeft = -(d.width * (f / 2) / 100), h.height < d.height && (h.height = d.height + d.height * f / 100, h.width = "16/9" == b.ratio ? Math.floor(16 * d.height / 9) : Math.floor(4 * d.height / 3), h.marginTop = -(d.height * (f / 2) / 100), h.marginLeft = -((h.width - d.width) / 2)), h.width += g, h.height += g, h.marginTop -= g / 2, h.marginLeft -= g / 2) : (h.width = "100%", h.height = "100%", h.marginTop = 0, h.marginLeft = 0), c.css({
            width: h.width,
            height: h.height,
            marginTop: h.marginTop,
            marginLeft: h.marginLeft
        })
    }, jQuery.shuffle = function (a) {
        for (var b = a.slice(), c = b.length, d = c; d--;) {
            var e = parseInt(Math.random() * c), f = b[d];
            b[d] = b[e], b[e] = f
        }
        return b
    }, jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function () {
    var a = document.body || document.documentElement, b = a.style;
    return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {min: 0, max: 100, unit: "px"},
        brightness: {min: 0, max: 400, unit: "%"},
        contrast: {min: 0, max: 400, unit: "%"},
        grayscale: {min: 0, max: 100, unit: "%"},
        hueRotate: {min: 0, max: 360, unit: "deg"},
        invert: {
            min: 0,
            max: 100, unit: "%"
        },
        saturate: {min: 0, max: 400, unit: "%"},
        sepia: {min: 0, max: 100, unit: "%"}
    },
    normalizeCss: function (a) {
        var b = jQuery.extend(!0, {}, a);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var c in b) {
            "transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]), "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]);
            var d = "";
            "x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]), "y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
        }
        return b
    },
    getProp: function (a) {
        var b = [];
        for (var c in a)b.indexOf(c) < 0 && b.push(uncamel(c));
        return b.join(",")
    },
    animate: function (a, b, c, d, e) {
        return this.each(function () {
            function f() {
                g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
            }

            var g = this, h = jQuery(this);
            g.id = g.id || "CSSA_" + (new Date).getTime();
            var i = i || {type: "noEvent"};
            if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9)return void(g.CSSqueue = function () {
                h.CSSAnimate(a, b, c, d, e)
            });
            if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
                if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)for (var j in jQuery.fx.speeds) {
                    if (b == j) {
                        b = jQuery.fx.speeds[j];
                        break
                    }
                    b = jQuery.fx.speeds._default
                }
                if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
                    for (var k in a) {
                        if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) {
                            var l = a[k], m = "left";
                            a[m] = l, delete a[k]
                        }
                        if ("y" === k) {
                            var l = a[k], m = "top";
                            a[m] = l, delete a[k]
                        }
                        ("-ms-transform" === k || "-ms-filter" === k) && delete a[k]
                    }
                    return void h.delay(c).animate(a, b, e)
                }
                var n = {
                    "default": "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
                var o = jQuery.CSS.getProp(a), p = {};
                jQuery.extend(p, a), p[jQuery.CSS.sfx + "transition-property"] = o, p[jQuery.CSS.sfx + "transition-duration"] = b + "ms", p[jQuery.CSS.sfx + "transition-delay"] = c + "ms", p[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function () {
                    h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p)
                }, 1), g.timeout = setTimeout(function () {
                    return g.called || !e ? (g.called = !1, void(g.CSSAIsRunning = !1)) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)))
                }, b + c + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) {
    return this.each(function () {
        var b = jQuery(this), c = jQuery.normalizeCss(a);
        b.css(c)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3, end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
    -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), !function (a) {
    /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
    var b = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
    a.simpleSlider = {
        defaults: {initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1},
        events: {
            start: b ? "touchstart" : "mousedown",
            end: b ? "touchend" : "mouseup",
            move: b ? "touchmove" : "mousemove"
        },
        init: function (c) {
            return this.each(function () {
                var d = this, e = a(d);
                e.addClass("simpleSlider"), d.opt = {}, a.extend(d.opt, a.simpleSlider.defaults, c), a.extend(d.opt, e.data());
                var f = "h" == d.opt.orientation ? "horizontal" : "vertical", g = a("<div/>").addClass("level").addClass(f);
                e.prepend(g), d.level = g, e.css({cursor: "default"}), "auto" == d.opt.scale && (d.opt.scale = a(d).outerWidth()), e.updateSliderVal(), d.opt.readonly || (e.on(a.simpleSlider.events.start, function (a) {
                    b && (a = a.changedTouches[0]), d.canSlide = !0, e.updateSliderVal(a), e.css({cursor: "col-resize"}), a.preventDefault(), a.stopPropagation()
                }), a(document).on(a.simpleSlider.events.move, function (c) {
                    b && (c = c.changedTouches[0]), d.canSlide && (a(document).css({cursor: "default"}), e.updateSliderVal(c), c.preventDefault(), c.stopPropagation())
                }).on(a.simpleSlider.events.end, function () {
                    a(document).css({cursor: "auto"}), d.canSlide = !1, e.css({cursor: "auto"})
                }))
            })
        },
        updateSliderVal: function (b) {
            function c(a, b) {
                return Math.floor(100 * a / b)
            }

            var d = this, e = d.get(0);
            e.opt.initialval = "number" == typeof e.opt.initialval ? e.opt.initialval : e.opt.initialval(e);
            var f = a(e).outerWidth(), g = a(e).outerHeight();
            e.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - d.offset().left : "number" == typeof b ? b * f / e.opt.scale : e.opt.initialval * f / e.opt.scale, e.y = "object" == typeof b ? b.clientY + document.body.scrollTop - d.offset().top : "number" == typeof b ? (e.opt.scale - e.opt.initialval - b) * g / e.opt.scale : e.opt.initialval * g / e.opt.scale, e.y = d.outerHeight() - e.y, e.scaleX = e.x * e.opt.scale / f, e.scaleY = e.y * e.opt.scale / g, e.outOfRangeX = e.scaleX > e.opt.scale ? e.scaleX - e.opt.scale : e.scaleX < 0 ? e.scaleX : 0, e.outOfRangeY = e.scaleY > e.opt.scale ? e.scaleY - e.opt.scale : e.scaleY < 0 ? e.scaleY : 0, e.outOfRange = "h" == e.opt.orientation ? e.outOfRangeX : e.outOfRangeY, e.value = "undefined" != typeof b ? "h" == e.opt.orientation ? e.x >= d.outerWidth() ? e.opt.scale : e.x <= 0 ? 0 : e.scaleX : e.y >= d.outerHeight() ? e.opt.scale : e.y <= 0 ? 0 : e.scaleY : "h" == e.opt.orientation ? e.scaleX : e.scaleY, "h" == e.opt.orientation ? e.level.width(c(e.x, f) + "%") : e.level.height(c(e.y, g)), "function" == typeof e.opt.callback && e.opt.callback(e)
        }
    }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery), !function (a) {
    a.mbCookie = {
        set: function (a, b, c, d) {
            b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : "";
            var e, f = new Date;
            f.setTime(f.getTime() + 864e5 * c), e = "; expires=" + f.toGMTString(), document.cookie = a + "=" + b + e + "; path=/" + d
        }, get: function (a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d]; " " == e.charAt(0);)e = e.substring(1, e.length);
                if (0 == e.indexOf(b))return JSON.parse(e.substring(b.length, e.length))
            }
            return null
        }, remove: function (b) {
            a.mbCookie.set(b, "", -1)
        }
    }, a.mbStorage = {
        set: function (a, b) {
            b = JSON.stringify(b), localStorage.setItem(a, b)
        }, get: function (a) {
            return localStorage[a] ? JSON.parse(localStorage[a]) : null
        }, remove: function (a) {
            a ? localStorage.removeItem(a) : localStorage.clear()
        }
    }
}(jQuery);

