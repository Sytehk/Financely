!function (e, t) {
    function s(e) {
        return !!("" === e || e && e.charCodeAt && e.substr)
    }

    function I(e) {
        return n ? n(e) : "[object Array]" === r.call(e)
    }

    function M(e) {
        return "[object Object]" === r.call(e)
    }

    function u(e, t) {
        var i;
        e = e || {}, t = t || {};
        for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
        return e
    }

    function g(e, t, i) {
        var n, r, o = [];
        if (!e) return o;
        if (a && e.map === a) return e.map(t, i);
        for (n = 0, r = e.length; n < r; n++) o[n] = t.call(i, e[n], n, e);
        return o
    }

    function y(e, t) {
        return e = Math.round(Math.abs(e)), isNaN(e) ? t : e
    }

    function m(e) {
        var t = p.settings.currency.format;
        return "function" == typeof e && (e = e()), s(e) && e.match("%v") ? {
            pos: e,
            neg: e.replace("-", "").replace("%v", "-%v"),
            zero: e
        } : e && e.pos && e.pos.match("%v") ? e : s(t) ? p.settings.currency.format = {
            pos: t,
            neg: t.replace("%v", "-%v"),
            zero: t
        } : t
    }

    var i, p = {
            version: "0.4.1",
            settings: {
                currency: {symbol: "$", format: "%s%v", decimal: ".", thousand: ",", precision: 2, grouping: 3},
                number: {precision: 0, grouping: 3, thousand: ",", decimal: "."}
            }
        }, a = Array.prototype.map, n = Array.isArray, r = Object.prototype.toString,
        j = p.unformat = p.parse = function (e, t) {
            if (I(e)) return g(e, function (e) {
                return j(e, t)
            });
            if ("number" == typeof (e = e || 0)) return e;
            t = t || ".";
            var i = RegExp("[^0-9-" + t + "]", ["g"]);
            i = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(i, "").replace(t, "."));
            return isNaN(i) ? 0 : i
        }, c = p.toFixed = function (e, t) {
            t = y(t, p.settings.number.precision);
            var i = Math.pow(10, t);
            return (Math.round(p.unformat(e) * i) / i).toFixed(t)
        }, T = p.formatNumber = p.format = function (e, t, i, n) {
            if (I(e)) return g(e, function (e) {
                return T(e, t, i, n)
            });
            e = j(e);
            var r = u(M(t) ? t : {precision: t, thousand: i, decimal: n}, p.settings.number), o = y(r.precision),
                a = e < 0 ? "-" : "", l = parseInt(c(Math.abs(e || 0), o), 10) + "", d = 3 < l.length ? l.length % 3 : 0;
            return a + (d ? l.substr(0, d) + r.thousand : "") + l.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + r.thousand) + (o ? r.decimal + c(Math.abs(e), o).split(".")[1] : "")
        }, d = p.formatMoney = function (e, t, i, n, r, o) {
            if (I(e)) return g(e, function (e) {
                return d(e, t, i, n, r, o)
            });
            e = j(e);
            var a = u(M(t) ? t : {symbol: t, precision: i, thousand: n, decimal: r, format: o}, p.settings.currency),
                l = m(a.format);
            return (0 < e ? l.pos : e < 0 ? l.neg : l.zero).replace("%s", a.symbol).replace("%v", T(Math.abs(e), y(a.precision), a.thousand, a.decimal))
        };
    p.formatColumn = function (e, t, i, n, r, o) {
        if (!e) return [];
        var a = u(M(t) ? t : {symbol: t, precision: i, thousand: n, decimal: r, format: o}, p.settings.currency),
            l = m(a.format), d = l.pos.indexOf("%s") < l.pos.indexOf("%v"), c = 0;
        return g(e = g(e, function (e) {
            return I(e) ? p.formatColumn(e, a) : ((e = (0 < (e = j(e)) ? l.pos : e < 0 ? l.neg : l.zero).replace("%s", a.symbol).replace("%v", T(Math.abs(e), y(a.precision), a.thousand, a.decimal))).length > c && (c = e.length), e)
        }), function (e) {
            return s(e) && e.length < c ? d ? e.replace(a.symbol, a.symbol + Array(c - e.length + 1).join(" ")) : Array(c - e.length + 1).join(" ") + e : e
        })
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports.accounting = p) : "function" == typeof define && define.amd ? define([], function () {
        return p
    }) : (p.noConflict = (i = e.accounting, function () {
        return e.accounting = i, p.noConflict = void 0, p
    }), e.accounting = p)
}(this), function (e) {
    var t = "currentScript", n = e.getElementsByTagName("script");
    t in e || Object.defineProperty(e, t, {
        get: function () {
            try {
                throw new Error
            } catch (e) {
                var t, i = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(e.stack) || [!1])[1];
                for (t in n) if (n[t].src == i || "interactive" == n[t].readyState) return n[t];
                return null
            }
        }
    })
}(document);
var crCryptocoinPriceWidget = {
    init: function (e) {
        var t = {
            items: ["BTC", "BCH", "ETH", "LTC", "XRP"],
            base: ["USD", "EUR", "CNY", "GBP"],
            iconsCollection: {
                "BTC": "/media/37746251/btc.png",
                "ETH": "/media/37746238/eth.png",
                "BNB": "/media/37746880/bnb.png",
                "DOGE": "/media/37746339/doge.png",
                "LTC": "/media/37746243/ltc.png",
                "DASH": "/media/37746893/dash.png"
            },
            coincapAssets: {
                "bitcoin": "BTC",
                "ethereum": "ETH",
                "binance-coin": "BNB",
                "dogecoin": "DOGE",
                "litecoin": "LTC",
                "dash": "DASH"
            },
            backgroundColor: "fff",
            streaming: 0,
            boxShadow: 0,
            striped: 0,
            rounded: 0,
            border: 0
        }, m = {};
        if (void 0 === e) m = t; else for (var i in t) null === e[i] || void 0 === e[i] || 0 === e[i].length ? m[i] = t[i] : m[i] = e[i];
        m.backgroundColor = "#" + m.backgroundColor;
        var M = function (e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, function () {
                    return i.call(e, window.event)
                })
            }, n = function (e, t) {
                var i, n, r,
                    o = (i = "GET", n = e, "withCredentials" in (r = new XMLHttpRequest) ? r.open(i, n, !0) : "undefined" != typeof XDomainRequest ? (r = new XDomainRequest).open(i, n) : r = null, r);
                o.onload = function () {
                    if (void 0 !== o.status) if (200 <= o.status && o.status < 400) {
                        var e = o.responseText;
                        t(JSON.parse(e))
                    } else t({
                        Response: "Error",
                        Message: "Status code: " + o.status
                    }); else e = o.responseText, t(JSON.parse(e))
                }, o.onerror = function (e) {
                    t({Response: "Error", Message: "Can't connect with API."})
                }, setTimeout(function () {
                    o.send()
                }, 0)
            }, r = "com", o = "crypto", a = "api", l = "min", d = "https", c = "compare", u = "latest", g = "png",
            s = "price", I = "multifull", y = "currency", p = "rate", j = "today", T = "#cccccc", N = "#777777",
            S = "#343a40", b = "#f8f9fa", D = "#208537", C = "#bee4c7", L = "#212529", h = "#ffffff", A = "#6c757d",
            z = "#e8f2eb", f = "#165d26", x = "#b02a37", E = "#f1aeb4", v = "#f7e9eb", P = "#7b1d26",
            w = function (e, t, i) {
                return 1 <= e ? window.accounting.formatMoney(e, t, i, ",", ".") : t + function (e) {
                    if (0 < e) {
                        var t = 4 - Math.log(e) / Math.LN10;
                        t < 0 && (t = 0), e = parseFloat(e).toFixed(t)
                    }
                    return e
                }(e)
            }, O = function (e) {
                if (/rgb\(/.test(e)) {
                    var t = e.match(/rgb\((\d+), (\d+), (\d+)\)/);
                    this.opacity = 1
                } else /rgba\(/.test(e) && (t = e.match(/rgba\((\d+), (\d+), (\d+), (\d+(\.\d+)?)\)/), this.opacity = t[4]);
                this.red = t[1], this.green = t[2], this.blue = t[3]
            };
        O.prototype.toString = function () {
            return "rgba(" + [this.red, this.green, this.blue, this.opacity].join(", ") + ")"
        }, O.prototype.fade = function () {
            return this.opacity = this.opacity - .1, null
        };
        var R = function (t) {
                this.fade = function () {
                    var e = new O(t.style.backgroundColor);
                    0 == e.opacity ? clearInterval(this.timer) : (e.fade(), t.style.backgroundColor = e.toString())
                }, this.timer = setInterval(this.fade, 100)
            }, W = function (e, t) {
                var i = function (e) {
                    if ("#" === e.charAt(0) && (e = e.substr(1)), e.length < 2 || 6 < e.length) return !1;
                    var t, i, n, r = e.split("");
                    if (2 === e.length) n = i = t = parseInt(r[0].toString() + r[1].toString(), 16); else if (3 === e.length) t = parseInt(r[0].toString() + r[0].toString(), 16), i = parseInt(r[1].toString() + r[1].toString(), 16), n = parseInt(r[2].toString() + r[2].toString(), 16); else {
                        if (6 !== e.length) return !1;
                        t = parseInt(r[0].toString() + r[1].toString(), 16), i = parseInt(r[2].toString() + r[3].toString(), 16), n = parseInt(r[4].toString() + r[5].toString(), 16)
                    }
                    return [t, i, n]
                }(e);
                return 125 < Math.round((299 * parseInt(i[0]) + 587 * parseInt(i[1]) + 114 * parseInt(i[2])) / 1e3) ? t[0] : t[1]
            }, Z = function (e, t) {
                for (var i = e.querySelectorAll("div[data-tab-id]"), n = e.querySelectorAll("a[data-tab-id]"), r = 0; r < i.length; r++) i[r].style.display = "none";
                for (r = 0; r < n.length; r++) n[r].style.color = W(m.backgroundColor, [N, T]), n[r].style.backgroundColor = "rgba(0, 0, 0, .05)";
                var o = e.querySelector('a[data-tab-id="' + t + '"]');
                o.style.color = W(m.backgroundColor, [S, b]), o.style.backgroundColor = "transparent", e.querySelector('div[data-tab-id="' + t + '"]').style.display = "block"
            }, k = d + "://www." + o + c + "." + r, G = d + "://images." + o + c + "." + r + "/sparkchart",
            Y = encodeURIComponent(window.location.hostname),
            U = d + "://" + l + "-" + a + "." + o + c + "." + r + "/data/" + s + I + "?fsyms=" + m.items + "&tsyms=" + (-1 === m.base.indexOf("USD") ? "USD," + m.base : m.base) + "&app=" + ("" == Y ? "local" : Y),
            H = [], B = {
                USD: "$",
                EUR: "€",
                GBP: "£",
                AUD: "$",
                CAD: "$",
                CHF: "₣",
                CNY: "¥",
                JPY: "¥",
                SGD: "$",
                NZD: "$",
                PKR: "₨",
                HKD: "$",
                KRW: "₩",
                MXN: "$",
                NOK: "kr",
                EGP: "LE",
                CLP: "$",
                NGN: "₦",
                BRL: "R$",
                RUB: "₽",
                UAH: "₴",
                THB: "฿",
                PLN: "zł",
                INR: "₹",
                AED: "Dh",
                AFN: "؋",
                ALL: "L",
                AMD: "֏",
                ANG: "ƒ",
                AOA: "Kz",
                ARS: "$",
                AWG: "ƒ",
                AZN: "₼",
                BAM: "KM",
                BBD: "$",
                BDT: "৳",
                BGN: "лв",
                BHD: ".د.ب",
                BIF: "₣",
                BMD: "$",
                BND: "$",
                BOB: "Bs.",
                BSD: "$",
                BTN: "Nu.",
                BWP: "P",
                BYN: "Br",
                BZD: "$",
                CDF: "₣",
                CLF: "CLF",
                CNH: "¥",
                COP: "$",
                CRC: "₡",
                CUC: "$",
                CUP: "₱",
                CVE: "$",
                CZK: "Kc",
                DJF: "₣",
                DKK: "kr",
                DOP: "$",
                DZD: "د.ج",
                ERN: "Nfk",
                ETB: "Br",
                FJD: "$",
                FKP: "£",
                GEL: "ლ",
                GGP: "£",
                GHS: "₵",
                GIP: "£",
                GMD: "D",
                GNF: "₣",
                GTQ: "Q",
                GYD: "$",
                HNL: "L",
                HRK: "kn",
                HTG: "G",
                HUF: "Ft",
                IDR: "Rp",
                ILS: "₪",
                IMP: "£",
                IQD: "ع.د",
                IRR: "﷼",
                ISK: "kr",
                JEP: "£",
                JMD: "$",
                JOD: "د.ا",
                KES: "Sh",
                KGS: "лв",
                KHR: "៛",
                KMF: "₣",
                KPW: "₩",
                KWD: "د.ك",
                KYD: "$",
                KZT: "₸",
                LAK: "₭",
                LBP: "ل.ل",
                LKR: "රු",
                LRD: "$",
                LSL: "L",
                LYD: "ل.د",
                MAD: "د.م.",
                MDL: "L",
                MGA: "Ar",
                MKD: "ден",
                MMK: "Ks",
                MNT: "₮",
                MOP: "P",
                MRO: "UM",
                MUR: "₨",
                MVR: "Rf",
                MWK: "MK",
                MYR: "RM",
                MZN: "MT",
                NAD: "$",
                NIO: "C$",
                NPR: "₨",
                OMR: "ر.ع.",
                PAB: "B/.",
                PEN: "S/.",
                PGK: "K",
                PHP: "₱",
                PYG: "₲",
                QAR: "ر.ق",
                RON: "lei",
                RSD: "din",
                RWF: "₣",
                SAR: "ر.س",
                SBD: "$",
                SCR: "₨",
                SDG: "£",
                SEK: "kr",
                SHP: "£",
                SLL: "Le",
                SOS: "Sh",
                SRD: "$",
                SSP: "£",
                STD: "Db",
                STN: "nDb",
                SVC: "$",
                SYP: "ل.س",
                SZL: "L",
                TJS: "ЅМ",
                TMT: "m",
                TND: "د.ت",
                TOP: "T$",
                TRY: "TRY",
                TTD: "$",
                TWD: "$",
                TZS: "Sh",
                UGX: "Sh",
                UYU: "$",
                UZS: "лв",
                VEF: "Bs F",
                VND: "₫",
                VUV: "Vt",
                WST: "T",
                XAF: "₣",
                XCD: "$",
                XOF: "₣",
                XPF: "₣",
                YER: "﷼",
                ZAR: "R",
                ZMW: "K",
                ZWL: "Z$"
            }, Q = {
                BTC: "₿",
                ETH: "Ξ",
                USDT: "₮",
                XRP: "✕",
                BCH: "Ƀ",
                BSV: "Ɓ",
                LTC: "Ł",
                EOS: "ε",
                ADA: "₳",
                XTZ: "ꜩ",
                XMR: "ɱ",
                ETC: "ξ",
                MKR: "Μ",
                ZEC: "ⓩ",
                DOGE: "Ð",
                REP: "Ɍ",
                DAI: "◈",
                STEEM: "ȿ"
            }, V = {
                price: function (e, t, i, n) {
                    var r = document.createElement("a"), o = document.createElement("div"),
                        a = document.createElement("div"), l = document.createElement("div"),
                        d = document.createElement("div"), c = document.createElement("span"),
                        s = document.createElement("span");
                    r.href = "#", r.style.outline = "none", r.setAttribute("data-created", 0), void 0 === B[t] ? M(r, "click", function (e) {
                        e.preventDefault(), "0" == e.currentTarget.getAttribute("data-created") ? V.details(e, t, i, n) : "1" == e.currentTarget.getAttribute("data-details-opened") ? (e.currentTarget.setAttribute("data-details-opened", "0"), e.currentTarget.children[1].style.display = "none") : (e.currentTarget.setAttribute("data-details-opened", "1"), e.currentTarget.children[1].style.display = "block")
                    }) : (M(r, "click", function (e) {
                        e.preventDefault()
                    }), r.style.cursor = "default");
                    var I = "";
                    void 0 !== B[n] ? I = B[n] : void 0 !== Q[n] && (I = Q[n]), s.textContent = null != i.CHANGEPCT24HOUR ? "(" + i.CHANGEPCT24HOUR.toFixed(2) + "%)" : "", o.textContent = t, c.textContent = w(i.PRICE, I, 2), c.style.paddingRight = ".25rem", c.style.fontSize = "90%", c.setAttribute("data-price", i.PRICE), a.appendChild(c), d.style.display = "block", d.style.overflow = "hidden", s.style.color = 1 == (0 < i.CHANGEPCT24HOUR ? 1 : -1) ? W(m.backgroundColor, [D, C]) : W(m.backgroundColor, [x, E]), s.style.fontSize = "80%", s.setAttribute("data-changepct24hour", i.CHANGEPCT24HOUR), r.style.position = "relative", r.style.display = "block", r.style.padding = ".5rem", r.style.borderBottom = "1px solid rgba(0, 0, 0, .125)", r.style.overflow = "hidden", r.style.lineHeight = "1.34rem", r.style.textDecoration = "none", r.style.color = W(m.backgroundColor, [L, h]), r.setAttribute("data-item-id", t), r.setAttribute("data-code-id", n), o.style.float = "left", o.style.fontWeight = "bold", o.style.paddingRight = ".25rem", o.style.position = "relative", a.style.float = "right", l.style.float = "left", l.style.fontWeight = "bold", l.style.paddingRight = ".25rem", a.appendChild(s), d.appendChild(l), d.appendChild(o), d.appendChild(a), r.appendChild(d), e.appendChild(r)
                }, nthChild: function (e) {
                    for (var t = e.querySelectorAll("a[data-item-id]"), i = 0, n = t.length; i < n; i++) i % 2 == 0 && (t[i].style.backgroundColor = "rgba(0, 0, 0, .025)")
                }, footerHtml: function (e) {
                    var t = document.createElement("div"), i = document.createElement("a"), n = document.createElement("a"),
                        r = document.createElement("img"), o = document.createElement("span");
                    i.textContent = "Financely", i.style.fontWeight = "bold", i.href = "javascript:void()", i.rel = "noopener", i.style.outline = "none", i.style.float = "right", i.style.color = "#7367f0", i.style.backgroundColor = h, i.style.padding = "0 0.25rem", i.style.display = "inline-block", i.style.textAlign = "center", i.style.whiteSpace = "nowrap", i.style.verticalAlign = "middle", i.style.fontSize = "16px", i.style.textDecoration = "none", i.style.borderRadius = ".25rem", i.style.borderBottomLeftRadius = "0", i.style.borderTopLeftRadius = "0", i.style.height = "22px", t.style.padding = ".5rem .5rem", 1 == m.rounded && (t.style.borderBottomLeftRadius = ".25rem", t.style.borderBottomRightRadius = ".25rem"), t.style.backgroundColor = "rgba(0, 0, 0, .05)", t.style.borderTop = "1px solid rgba(0, 0, 0, .125)", t.style.color = W(m.backgroundColor, [A, T]), t.style.overflow = "auto", t.style.fontSize = "12px", t.style.lineHeight = "1.4rem", 1 == m.streaming && (o.textContent = "⚡Live from Financely"), r.style.width = "20px", r.src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgICB3aWR0aD0iMjQuMDAwMDAwcHQiIGhlaWdodD0iMjUuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNC4wMDAwMDAgMjUuMDAwMDAwIgogICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyNS4wMDAwMDApIHNjYWxlKDAuMDAzMDAwLC0wLjAwMjc3OCkiCiAgIGZpbGw9IiM3MzY5ZjciIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik00NDY1IDg5MTQgYy01NTMgLTcyIC05NTYgLTE2OSAtMTMyMCAtMzE5IC00NCAtMTggLTkxIC0zNiAtMTA1IC00MAotMzYgLTExIC0zMTkgLTE0MSAtMzgyIC0xNzUgLTE0NiAtODAgLTIyNiAtMTI2IC0yNDAgLTEzOCAtOSAtOCAtMjEgLTExIC0yNgotOCAtNiAzIC0xMyAtMSAtMTYgLTkgLTMgLTkgLTE0IC0xOSAtMjMgLTIzIC00OSAtMjAgLTM2NiAtMjQ1IC01MDEgLTM1NCAtNDUKLTM3IC03NiAtNTYgLTg2IC01MiAtOSAzIC0xNiAxIC0xNiAtNiAwIC02IDUgLTggMTAgLTUgNiAzIDEwIDMgMTAgLTIgLTEgLTExCi04MyAtNjggLTkzIC02NSAtNSAxIC02IC0yIC0zIC03IDggLTEyIC0xOCAtMzMgLTI5IC0yMyAtNSA0IC01IDIgLTIgLTQgOAotMTQgLTQxIC01NyAtNTUgLTQ4IC03IDQgLTggMyAtNCAtNSA5IC0xMyAtNjIgLTg0IC03NSAtNzUgLTUgMyAtOCAwIC03IC04IDIKLTcgLTMgLTEyIC0xMCAtMTAgLTggMSAtMTEgLTIgLTcgLTggMTAgLTE3IC01NiAtNzQgLTY3IC01OCAtNyAxMCAtOCA5IC03IC0yCjMgLTI5IC0xIC0zOCAtMjEgLTQzIC0xMSAtMyAtMTkgLTkgLTE4IC0xNCAyIC01IC0yNSAtNDAgLTU4IC03OSAtODkgLTEwMAotMTQ1IC0xNjYgLTE3NyAtMjA4IC0xNiAtMjEgLTMzIC0zMyAtMzkgLTMwIC03IDUgLTkgMSAtNSAtOSAzIC0xMCAyIC0xNyAtMwotMTcgLTYgMCAtMTAgLTQgLTEwIC0xMCAwIC0xMyAtODggLTEyOSAtMTE4IC0xNTYgLTE0IC0xMiAtMjIgLTI2IC0xOCAtMzIgMwotNSAtNSAtMjEgLTE5IC0zNiAtMTMgLTE0IC0yMSAtMjYgLTE4IC0yNiAzIDAgMSAtNiAtNSAtMTIgLTEyIC0xNSAtMTMxIC0yMTIKLTE1MSAtMjUxIC0xMSAtMjAgLTE3IC0yNCAtMjQgLTE1IC02IDkgLTcgNyAtMyAtNSAzIC0xMSAtNiAtNDAgLTIzIC03MCAtNjkKLTEyNiAtMTQ1IC0yODcgLTE0MyAtMjk5IDEgLTUgLTMgLTggLTggLTggLTYgMCAtMTAgLTcgLTEwIC0xNiAwIC04IC05IC0zNgotMjEgLTYyIC00NCAtMTAwIC03OSAtMTk1IC03OSAtMjExIDAgLTcgLTYgLTI3IC0xNCAtNDQgLTggLTE4IC0yMiAtNTkgLTMxCi05MiAtOSAtMzMgLTIxIC03MyAtMjcgLTkwIC0xMiAtMzcgLTQ4IC0xNzMgLTU0IC0yMDAgLTIgLTExIC02IC0zMSAtOSAtNDUKLTkgLTQyIC0yNSAtMTIyIC0yNSAtMTI3IDAgLTIgLTQgLTEgLTEwIDIgLTUgMyAtMTAgMSAtMTAgLTQgMCAtNiA1IC0xMSAxMQotMTEgNSAwIDggLTQgNSAtOCAtOCAtMTMgLTQ0IC0yNTcgLTU3IC0zODcgLTE1IC0xNDQgLTE5IC01NzIgLTYgLTcwNiA1IC01OQo4IC0xMTMgNSAtMTIwIC04IC0yMSAtNyAtMzQgMyAtMzEgNSAxIDkgLTIgOSAtNiAwIC00NSAzNyAtMjcxIDc2IC00NjIgNSAtMjIKMjcgLTExMCA2OSAtMjYzIDggLTMyIDIwIC02OCAyNiAtNzkgNiAtMTEgOCAtMzIgNSAtNDYgLTQgLTE4IC0zIC0yMiAyIC0xNCA3CjExIDEwIDEwIDE2IC0zIDMgLTkgNiAtMjcgNiAtNDAgMCAtMTMgNCAtMjUgOSAtMjcgNCAtMSAyMyAtNDYgNDEgLTk4IDE4IC01MgozNiAtMTAwIDQxIC0xMDYgNSAtNiAxNSAtMjkgMjMgLTUyIDggLTIzIDI5IC03MCA0NSAtMTA0IDE3IC0zNSAzMSAtNjggMzEKLTc1IDAgLTcgNCAtMTMgOSAtMTMgNSAwIDEyIC0xMSAxNSAtMjUgMyAtMTMgMTcgLTQxIDMxIC02MSAxNCAtMjAgMjIgLTQwIDE5Ci00NSAtMyAtNSAtMSAtOSA1IC05IDggMCAyMyAtMzEgMjQgLTUwIDAgLTMgNyAtMTEgMTQgLTE4IDcgLTcgMTMgLTE5IDEzIC0yNwowIC03IDMgLTE1IDggLTE3IDQgLTEgNDEgLTU3IDgyIC0xMjMgNDAgLTY2IDg0IC0xMzQgOTcgLTE1MSAxMyAtMTcgMjMgLTM0CjIzIC0zOCAwIC00IDE4IC0yOSA0MCAtNTcgMjIgLTI4IDM3IC01NSAzNCAtNjAgLTMgLTUgLTEgLTggNCAtNyAxNCA1IDExNAotMTMxIDEwNiAtMTQ0IC00IC02IC0zIC04IDQgLTQgMTMgOCA4OCAtODAgODQgLTk5IC0xIC03IDIgLTE2IDggLTIwIDYgLTQgNwoxIDQgMTIgLTQgMTQgLTEgMTIgMTUgLTYgMTIgLTEyIDE4IC0yOCAxNCAtMzQgLTMgLTUgLTEgLTcgNCAtNCA2IDQgNDEgLTI2Cjc3IC02NyA0OCAtNTQgNjQgLTc5IDYwIC05MyAtNSAtMTQgLTQgLTE1IDQgLTMgOSAxMSAyNiAtMSA5MSAtNjQgNTMgLTUzIDc4Ci04NCA3NCAtOTUgLTQgLTE0IC0zIC0xNCA2IC0xIDEwIDE0IDE2IDcgMTIgLTEzIC0xIC01IDMgLTYgNyAtMyAxMSA3IDQ0IC0yOAozNyAtMzcgLTMgLTQgLTIgLTUgMSAtMiA3IDQgNDUgLTI0IDExMSAtODIgMzUgLTMxIDUwIC00NCAxMTAgLTkyIDIzIC0xOSA0MAotMzcgMzggLTQxIC0zIC00IDMgLTcgMTMgLTYgOSAwIDE2IC01IDE0IC0xMiAtMSAtOCAyIC0xMSA3IC04IDUgMyA0MCAtMTggNzgKLTQ3IDgwIC02MSAzMjggLTIyNyA0MjUgLTI4MiAzNyAtMjEgNjUgLTQyIDYzIC00NSAtMiAtNCAyIC03IDkgLTcgOCAwIDk5Ci00MiAyMDMgLTk0IDIxMCAtMTA0IDMzMiAtMTU5IDM1MSAtMTU5IDMwIDAgNiAxOSAtNzAgNTYgLTE1MCA3MiAtMjY3IDEzNwotMjYyIDE0NSAzIDUgLTEgNiAtOSAzIC04IC0zIC00MSAxMiAtNzQgMzMgLTMzIDIxIC04MiA1MiAtMTA5IDY4IC05MCA1NQotMTEyIDcwIC0xOTEgMTIzIC0xNTAgMTAzIC0yODIgMjA3IC0yNzggMjE5IDIgNyAtMSAxMCAtOCA3IC0zMSAtMTEgLTUyNyA0NjEKLTUxMSA0ODcgNCA3IDMgMTAgLTMgNiAtNiAtNCAtMjggMTMgLTQ5IDM4IC04NiA5OSAtMTIwIDE0MCAtMTQzIDE3NCAtMTQgMjAKLTI5IDM5IC0zNCA0MiAtNSA0IC02IDEyIC0yIDE5IDUgOCA0IDExIC0yIDcgLTExIC03IC02MCA0OSAtNjUgNzQgLTIgOCAtMTEKMjAgLTIwIDI2IC05IDcgLTI3IDMwIC0zOSA1MCAtMTMgMjEgLTMxIDQ3IC00MSA1NyAtMTAgMTEgLTE4IDIzIC0xOCAyNyAwIDQKLTE3IDM0IC0zOCA2NiAtOTIgMTM4IC0yNjIgNDYxIC0yNjIgNDk2IDAgMTAgLTQgMTcgLTEwIDE3IC01IDAgLTEwIDcgLTEwIDE1CjAgOCAtMTEgMzUgLTI1IDYwIC0xNCAyNSAtMjMgNDUgLTIwIDQ1IDMgMCAtMiAxMSAtMTAgMjQgLTkgMTQgLTE3IDM4IC0xNyA1NQotMSAxNyAtNCAyOCAtOCAyNiAtMTMgLTggLTEwNCAyNTkgLTEwMiAyOTggMCA5IC0zIDE3IC04IDE3IC00IDAgLTExIDE3IC0xNQozOCAtNSAyMCAtOSA0MiAtMTEgNDcgLTU3IDIxNiAtMTAzIDQ3MCAtMTI1IDY4NSAtMTYgMTU2IC0xNiA1ODYgLTEgNzQwIDE2CjE1NiA1MiAzOTMgNzYgNDk1IDU4IDI1MyA4NSAzNDcgOTkgMzM4IDYgLTMgNyAtMSAzIDUgLTggMTQgNDIgMTg0IDU3IDE5MyA1CjQgNyAxMSA0IDE2IC0zIDUgMCAyMiA4IDM4IDcgMTcgMjEgNDggMzAgNzAgOSAyMiAyMiA1NCAyOSA3MCA3IDE3IDE4IDQxIDI0CjU1IDIzIDU1IDE1NCAzMjAgMTkyIDM4OSA1NiAxMDEgODUgMTQyIDk1IDEzMyA1IC00IDUgLTIgMSA1IC0xMSAyMCAxNjkgMjg3CjE4NyAyNzYgNiAtMyA3IC0xIDMgNSAtMTEgMTggMTI4IDE5NyAxNDQgMTg3IDQgLTMgNyAzIDYgMTMgMCA5IDUgMTYgMTEgMTUgNwotMiAxMiAxIDEwIDYgLTEgNCAyOSA0NSA2NyA5MCA1MiA2MiA3MSA3OSA3OCA2OSA4IC0xMCA5IC05IDUgNCAtNyAyMSAxODEKMjExIDIwMSAyMDMgOSAtMyAxMiAwIDkgOSAtNyAxOCA0OSA3MiAyMzggMjI3IDEwNiA4NiAxMzcgMTA3IDE1NSAxMDIgMTIgLTQKMTIgLTMgMiA1IC0xNCAxMCAtNSAxNyAyMDMgMTU1IDE4MiAxMjIgMjE2IDE0MSAyMjcgMTI1IDggLTEwIDkgLTkgNCA0IC00IDEzCjExIDI2IDYyIDU0IDEyMSA2NyAxNjIgODUgMTc0IDc4IDYgLTQgOCAtMyA1IDMgLTMgNSAyNiAyNiA2NiA0NiAxMDMgNTIgMjQ1CjExNyAyNTYgMTE3IDUgMCAzOCAxMyA3MyAyOCAxMDQgNDcgMTY4IDY2IDE4MSA1MyA2IC02IDE1IC0xMSAyMSAtMTEgNSAwIDIgNgotOCAxMyAtMTYgMTIgLTEgMTkgMTI1IDYwIDI2NSA4NiA0MDYgMTE4IDc5OSAxODIgMjQxIDQwIDM5NCA0OCA3ODAgNDIgMzc1Ci01IDQzMSAtMTAgNzUyIC02NiAyMjUgLTQwIDMxNiAtNjAgMzMxIC03NiA3IC02IDMyIC0yNCA1NSAtMzkgMjQgLTE1IDQwIC0zMQozNyAtMzYgLTMgLTUgMCAtMTIgNiAtMTYgOCAtNCA5IC0zIDUgNCAtMTQgMjMgNiAxMSA3NyAtNDUgMTA2IC04NCAzMDAgLTI4MgoyOTMgLTMwMCAtMyAtOCAtMiAtMTIgMyAtOCAxMiA3IDUzIC01MCA0MyAtNTkgLTQgLTQgLTIgLTYgNSAtNCAxMCAzIDczIC03Mwo3MyAtODggMCAtMyA5IC0xOSAyMCAtMzQgMjMgLTMyIDgxIC0xNDcgODQgLTE2NiAxIC02IDcgLTE4IDEzIC0yNSA2IC04IDE5Ci00MSAyOCAtNzQgMTAgLTMzIDIxIC03MSAyNyAtODQgMjEgLTU1IDMyIC0yMjcgMjAgLTMxOCAtNiAtNDggLTE2IC04OSAtMjIKLTkxIC01IC0yIC0xMCAtMTMgLTEwIC0yNSAwIC02MCAtODMgLTE4NiAtMTY4IC0yNTkgLTU0IC00NiAtMTkwIC0xMTggLTI1NwotMTM2IC0xNTcgLTQyIC0xMjkgLTQyIC0yNDEzIC00MiBsLTIxNzIgMCAwIC05MzkgMCAtOTM4IC0xMDIgLTYgYy0xNzEgLTkKLTMyOCAtNTQgLTQ2NSAtMTMyIC00MiAtMjQgLTgxIC00MSAtODYgLTM4IC02IDMgLTcgMiAtNCAtNCAzIC01IC0xOCAtMjggLTQ3Ci01MiAtMjkgLTIzIC03NyAtNjkgLTEwNiAtMTAxIC0yOCAtMzMgLTU3IC01NyAtNjIgLTUzIC03IDMgLTggMSAtNCAtNSA2IC0xMAotMjggLTY3IC01NCAtOTIgLTUgLTUgLTkzIC0xODAgLTk1IC0xOTAgLTEgLTMgLTcgLTE4IC0xMyAtMzMgLTcgLTE2IC0xMiAtMzQKLTEyIC00MSAwIC02IC00IC0xNiAtOSAtMjEgLTcgLTggLTI0IC02OSAtNDggLTE2OSAtMiAtMTIgLTExIC03MyAtMjAgLTEzNgotMzEgLTIzNyAwIC02MzcgNjUgLTg0OCA2IC0xOCAxMSAtMzYgMTIgLTQwIDEgLTE0IDIxIC04NyAyNyAtMTAyIDMgLTggNyAtMTkKOCAtMjUgMiAtNSAxNCAtNDAgMjggLTc3IDE0IC0zNiAyMyAtNjkgMjAgLTcyIC00IC0zIC0yIC02IDMgLTYgMTkgMCAzNiAtNjcKMjQgLTkxIC03IC0xMSAtOSAtMjMgLTcgLTI2IDMgLTIgOCA1IDEyIDE3IDUgMTcgMjIgLTEwIDg0IC0xMzIgNDMgLTg0IDk2Ci0xODQgMTE5IC0yMjIgMjMgLTM3IDQyIC03MCA0MiAtNzEgMCAtNSAxNDkgLTIyNSAxNjUgLTI0NSA3IC04IDEwIC0yMSA3IC0yOQotMiAtOCAwIC0xMSA2IC03IDUgMyA0NCAtMzcgODYgLTg4IDczIC05MiAyOTYgLTMzOSAzMTYgLTM1MSA2IC00IDcgLTExIDQKLTE3IC00IC02IC0zIC04IDMgLTUgNiA0IDM3IC0xOSA2OSAtNTEgNjAgLTU3IDEzNCAtMTI0IDE3MCAtMTUyIDI3IC0yMSAxMzgKLTExNCAxNDQgLTEyMCAzIC0zIDIwIC0xNiAzOCAtMjkgMTggLTEyIDI5IC0yNyAyNiAtMzMgLTUgLTcgLTIgLTggNSAtMyA4IDQKMjcgLTUgNDkgLTIyIDQyIC0zMyA4MiAtNTcgODggLTUxIDIgMiAtMTcgMjYgLTQxIDU0IC0yNSAyNyAtNDMgNTQgLTQxIDYxIDMKNyAtMSAxMCAtOCA3IC0xMyAtNSAtMTEzIDExMiAtMTA4IDEyNyAxIDUgLTIgOCAtNyA3IC0xNCAtNCAtMTExIDExMyAtMTA0CjEyNSAzIDYgMSA3IC00IDQgLTYgLTQgLTIzIDEwIC0zOSAzMSAtMTYgMjAgLTMzIDQyIC0zOSA0OCAtNSA2IC0yMSAyNiAtMzUKNDQgLTE0IDE5IC0zNSA0NiAtNDcgNjEgLTM2IDQzIC0xMzEgMTc1IC0yMDMgMjg0IC0xNDUgMjE3IC0xOTQgMzAxIC0xODUgMzE1CjQgNiAxIDkgLTYgOCAtNyAtMiAtMTUgNiAtMTcgMTcgLTIgMTEgLTggMjIgLTEyIDI1IC04IDYgLTEwMCAxOTIgLTEwMCAyMDQgMAo0IC0xMSAzMSAtMjQgNTkgLTEzIDI5IC0yOSA3MCAtMzUgOTIgLTcgMjIgLTE2IDQ5IC0yMSA2MCAtNSAxMSAtMTYgNTQgLTI1Cjk1IC05IDQxIC0xOSA4NCAtMjEgOTUgLTMxIDEzMiAtMzEgMjgzIDAgNDEwIDEgNiA2IDI2IDEwIDQ1IDIxIDkwIDEyMiAyNTgKMTkzIDMyMCAxMTEgOTggMjAwIDE1MSAzNDEgMjA0IGw5MiAzNCAwIC04ODcgYzAgLTQ4NyAzIC05MTYgNyAtOTU0IDUgLTU4IDQKLTY3IC0xMSAtNjcgLTkgMCAtMTYgLTUgLTE2IC0xMSAwIC02IDkgLTkgMTkgLTYgMjAgNSAzMSAtMTAgMzEgLTQxIDAgLTE4IDQ0Ci0xMjkgODAgLTIwMCAxMSAtMjMgMTggLTQ4IDE0IC01NCAtNCAtNyAtMyAtOCA0IC00IDcgNCAxOCAtNyAyOCAtMjYgOSAtMTgKMzAgLTUzIDQ3IC03NyAxNyAtMjUgMzAgLTUwIDMwIC01NyAwIC03IDMgLTExIDcgLTkgOSA2IDE0MyAtMTU1IDE0MyAtMTcyIDAKLTYgNSAtMTEgMTEgLTEwIDYgMSAxMCAtNCA4IC0xMSAtMSAtOCAxIC0xMSA2IC04IDUgMyA0OCAtMzMgOTYgLTc5IDQ4IC00NQo4MyAtODUgNzkgLTg3IC00IC0zIC0zIC0zIDQgLTIgNiAyIDMxIC0xNCA1NSAtMzQgMTE5IC0xMDIgMTkwIC0xNTUgMzg4IC0yODgKMTM5IC05MyAzOTMgLTI0NiA0OTYgLTI5NyAyNyAtMTMgMTEzIC01NiAxOTIgLTk2IDE0OSAtNzUgMzIyIC0xNTEgMzQxIC0xNTEKMTggMCAxMyAxMCAtMTkgMzcgLTE3IDEzIC0yOCAyOSAtMjUgMzQgNCA1IDAgNiAtOCAzIC0yMCAtNyAtMjUxIDIyMiAtMzQ4CjM0NiAtMTE0IDE0NCAtMjUyIDM2MCAtMjMxIDM2MCA0IDAgMiA0IC00IDggLTE1IDkgLTc0IDEyNyAtNzQgMTQ3IDAgOCAtNCAxNQotOSAxNSAtNSAwIC0xMyAxNSAtMTYgMzIgLTQgMTggLTExIDM4IC0xNSA0MyAtNyAxMCAtMzcgOTkgLTYxIDE4NSAtNyAyNSAtMTMKNDcgLTE0IDUwIC02IDE5IC0zMyAxNTAgLTQxIDE5NCAtMiAxMiAtOCA1MCAtMTUgODYgLTggNDYgLTE0IDM3NyAtMTggMTExMgpsLTYgMTA0OCAxMTMzIDIgMTEzMyAzIDAgNTI1IDAgNTI1IC0xMTMzIDMgLTExMzMgMiAzIDQxMCAyIDQxMCAxOTM4IDIgMTkzNwozIDgwIDIzIGMxOTMgNTUgMjk2IDExNSA0MTYgMjM5IDQ1IDQ3IDc4IDc5IDc0IDczIC01IC05IC00IC0xMSA0IC02IDYgNCA5CjExIDYgMTYgLTMgNSA1IDI0IDE3IDQyIDEzIDE5IDM0IDU2IDQ4IDgzIDE0IDI4IDMwIDUzIDM1IDU3IDYgNCA3IDggMyA4IC00CjAgMCAxNyA5IDM4IDI2IDY0IDYyIDIxMyA2OSAyOTUgNCA0MiAxMCA3NyAxNSA3NyAxMSAwIDEwIDI0OCAtMSAyNjkgLTUgOQotMTQgNjMgLTIwIDEyMCAtMTAgOTEgLTQ5IDI3OCAtNjcgMzIxIC0zIDggLTcgMjAgLTggMjUgMCA2IC01IDE5IC05IDMwIC01CjExIC0yNiA2NCAtNDcgMTE3IC0yMiA1MyAtNDQgMTEwIC01MSAxMjUgLTYgMTUgLTExIDMxIC0xMCAzNiAxIDQgLTIgNyAtNiA3Ci01IDAgLTE3IDE5IC0yOCA0MyAtMTAgMjMgLTI4IDU5IC00MSA3OSAtMTIgMjAgLTI0IDQzIC0yNSA1MCAtMiA3IC04IDE3IC0xNAoyMyAtNSA1IC0zNiA0OCAtNjcgOTUgLTI3MCA0MDggLTY3NiA3MjQgLTExNTAgODk0IC0xMzIgNDggLTE1NyA1NSAtMjkyIDg3Ci0yNDkgNTggLTI5NiA2MiAtOTE1IDY0IC0zMTYgMiAtNTg4IDEgLTYwNSAtMXoiLz4KPC9nPgo8L3N2Zz4=", r.style.display = "inline-block", r.style.verticalAlign = "middle", r.style.boxShadow = "none", r.alt = " ", n.style.outline = "none", n.style.float = "right", n.style.height = "22px", n.style.backgroundColor = h, n.style.padding = "0 0 0 0.25rem", n.style.display = "inline-block", n.style.textDecoration = "none", n.style.borderRadius = ".25rem", n.style.borderBottomRightRadius = "0", n.style.borderTopRightRadius = "0", n.href = "javascript:void()", n.rel = "noopener", n.appendChild(r), t.appendChild(o), t.appendChild(i), t.appendChild(n), e.appendChild(t)
                }, icons: function (e) {
                    for (var t = 0; t < e.querySelectorAll("a[data-item-id]").length; t++) {
                        var i = e.querySelectorAll("a[data-item-id]")[t], n = i.getAttribute("data-item-id");
                        if (void 0 !== m.iconsCollection[n]) {
                            var r = document.createElement("img");
                            r.alt = n;
                            var o = "https://co-in.io/assets/icons" + m.iconsCollection[n],
                                a = k + m.iconsCollection[n] + "?width=16";
                            r.style.height = void 0 === B[n] ? (r.style.top = "2px", r.src = a, "16px") : (r.style.top = "4px", r.src = o, "12px"), r.style.position = "relative", r.style.width = "16px", r.style.display = "table-cell", r.style.verticalAlign = "middle", i.getElementsByTagName("div")[0].getElementsByTagName("div")[0].appendChild(r)
                        } else {
                            var l = document.createElement("span");
                            l.style.position = "relative", l.style.verticalAlign = "middle", l.style.display = "inline-block", l.style.width = "16px", l.style.height = "16px", l.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04MzIgMTE1MmgzODR2LTk2aC0xMjh2LTQ0OGgtMTE0bC0xNDggMTM3IDc3IDgwcTQyLTM3IDU1LTU3aDJ2Mjg4aC0xMjh2OTZ6bTUxMi0yNTZxMCA3MC0yMSAxNDJ0LTU5LjUgMTM0LTEwMS41IDEwMS0xMzggMzktMTM4LTM5LTEwMS41LTEwMS01OS41LTEzNC0yMS0xNDIgMjEtMTQyIDU5LjUtMTM0IDEwMS41LTEwMSAxMzgtMzkgMTM4IDM5IDEwMS41IDEwMSA1OS41IDEzNCAyMSAxNDJ6bTUxMiAyNTZ2LTUxMnEtMTA2IDAtMTgxLTc1dC03NS0xODFoLTExNTJxMCAxMDYtNzUgMTgxdC0xODEgNzV2NTEycTEwNiAwIDE4MSA3NXQ3NSAxODFoMTE1MnEwLTEwNiA3NS0xODF0MTgxLTc1em0xMjgtODMydjExNTJxMCAyNi0xOSA0NXQtNDUgMTloLTE3OTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMTUycTAtMjYgMTktNDV0NDUtMTloMTc5MnEyNiAwIDQ1IDE5dDE5IDQ1eiIgZmlsbD0iIzI4YTc0NSIvPjwvc3ZnPg==)", l.style.backgroundRepeat = "no-repeat", i.getElementsByTagName("div")[0].getElementsByTagName("div")[0].appendChild(l)
                        }
                    }
                }, parentDiv: function (e) {
                    var t = document.createElement("div");
                    return t.style.clear = "both", 1 == m.boxShadow && (t.style.boxShadow = "0 .125rem .25rem rgba(0, 0, 0, .075)"), t.style.backgroundColor = m.backgroundColor, t.style.position = "relative", t.style.minWidth = "0", t.style.backgroundClip = "border-box", 1 == m.border && (t.style.border = "1px solid rgba(0, 0, 0, .125)"), 1 == m.rounded && (t.style.borderRadius = ".25rem"), document.body.appendChild(t), t
                }, bodyHtml: function (e) {
                    var t = document.createElement("div"), i = document.createElement("div");
                    return i.style.display = "table", i.style.width = "64px", i.style.height = "64px", i.style.margin = "0 auto", i.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLXNwaW5uZXIiIHdpZHRoPSI2NHB4IiAgaGVpZ2h0PSI2NHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4gIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjkuNCIgcnk9IjQuOCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM5OTkiPiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPiAgPC9yZWN0PjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMCA1MCA1MCkiPiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzk5OSI+ICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC43NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC42NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTUwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjQwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4yNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzk5OSI+ICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMTY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPiAgPC9yZWN0PjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDAgNTAgNTApIj4gIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjkuNCIgcnk9IjQuOCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM5OTkiPiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzMwIDUwIDUwKSI+ICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTk5Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PC9zdmc+)", t.appendChild(i), e.appendChild(t), t
                }, tabsNav: function (t, e) {
                    var i = document.createElement("div");
                    i.style.overflow = "auto", i.style.borderBottom = "1px solid rgba(0, 0, 0, .125)", i.style.backgroundColor = "rgba(0, 0, 0, .01)";
                    for (var n = 0, r = 4 < e.length ? 4 : e.length; n < r; n++) {
                        var o = document.createElement("a");
                        o.href = "#" + e[n], o.setAttribute("data-tab-id", e[n]), o.textContent = e[n], o.style.outline = "none", o.style.fontSize = "120%", o.style.overflow = "hidden", o.style.color = W(m.backgroundColor, [S, b]), o.style.textDecoration = "none", o.style.padding = ".5rem .5rem", o.style.float = "left", o.style.width = "25%", o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.borderLeft = "1px solid rgba(0, 0, 0, .125)", o.style.lineHeight = "1.34rem", o.style.backgroundColor = "rgba(0, 0, 0, .05)", o.style.boxSizing = "border-box", 0 === n && (o.style.borderLeft = "none"), i.appendChild(o), M(o, "click", function (e) {
                            e.preventDefault(), Z(t, this.getAttribute("data-tab-id"))
                        })
                    }
                    t.appendChild(i)
                }, tabs: function (e, t) {
                    for (var i = 0, n = 4 < t.length ? 4 : t.length; i < n; i++) {
                        var r = document.createElement("div");
                        r.setAttribute("data-tab-id", t[i]), e.appendChild(r)
                    }
                }, details: function (e, t, i, n) {
                    var r = document.createElement("div"), o = document.createElement("ul"),
                        a = document.createElement("li"), l = document.createElement("li"), d = "";
                    void 0 !== B[n] ? d = B[n] : void 0 !== Q[n] && (d = Q[n]), o.style.padding = "0", o.style.marginTop = ".5rem", o.style.marginBottom = "0", a.textContent = "Volume (24h): " + w(i.VOLUME24HOUR, d, 2), l.textContent = "Marketcap: " + w(i.MKTCAP, d, 2), a.style.listStyleType = "none", a.style.padding = "0", a.style.border = "none", l.style.listStyleType = "none", l.style.padding = "0", l.style.border = "none", r.style.textAlign = "center", r.style.margin = "0 auto", o.appendChild(a), o.appendChild(l), r.appendChild(o);
                    var c = document.createElement("img"), s = document.createElement("figure");
                    s.style.maxWidth = "150px", s.style.margin = "0 auto", s.style.paddingTop = ".5rem;";
                    var I = document.createElement("figcaption");
                    I.style.color = W(m.backgroundColor, [A, T]), I.style.textAlign = "center", I.style.paddingTop = ".5rem", c.src = G + "/" + t + "/USD/" + u + "." + g, c.style.border = "none", c.style.maxWidth = "100%", c.style.height = "auto", c.style.display = "block", c.style.boxShadow = "none", I.textContent = "Graph (7d)", s.appendChild(c), s.appendChild(I), r.appendChild(s), e.currentTarget.setAttribute("data-details-opened", "1"), e.currentTarget.setAttribute("data-created", "1"), e.currentTarget.appendChild(r)
                }, streaming: function (g, y) {
                    window.WebSocket ? function t() {
                        var i = new WebSocket("wss://ws.coincap.io/prices?assets=" + function (e) {
                            var t = [];
                            for (var i in e) t.push(i);
                            return t.join(",")
                        }(m.coincapAssets));
                        i.onopen = function () {
                            console.log("Streaming: opened")
                        }, i.onmessage = function (e) {
                            var t, i = JSON.parse(e.data);
                            for (var n in i) for (var r = g.querySelectorAll('a[data-item-id="' + m.coincapAssets[n] + '"]'), o = 0, a = r.length; o < a; o++) {
                                var l, d = r[o],
                                    c = (d.querySelectorAll("span[data-changepct24hour]")[0], d.querySelectorAll("span[data-price]")[0]),
                                    s = d.getAttribute("data-code-id"), I = "";
                                void 0 !== B[s] ? I = B[s] : void 0 !== Q[s] && (I = Q[s]), l = w("USD" != s ? y[s] * i[n] : i[n], I, 2), c.textContent = l;
                                var M = c.getAttribute("data-price"),
                                    u = 1 == (t = i[n], Number(M || 0) > Number(t || 0) ? -1 : 1);
                                c.setAttribute("data-price", i[n]), c.style.color = W(m.backgroundColor, u ? [D, C] : [x, E]), c.parentNode.parentNode.parentNode.style.backgroundColor = W(m.backgroundColor, u ? [z, f] : [v, P]), R(c.parentNode.parentNode.parentNode)
                            }
                        }, i.onclose = function (e) {
                            console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason), setTimeout(function () {
                                t()
                            }, 1e3)
                        }, i.onerror = function (e) {
                            console.error("Socket encountered error: ", e.message, "Closing socket"), i.close()
                        }
                    }() : console.log("Your browser not supported WebSocket!")
                }, error: function (e, t, i) {
                    var n = document.createElement("div"), r = document.createElement("p");
                    if (n.style.padding = ".5rem .5rem", "undefined" !== t) {
                        var o = document.createElement("p");
                        o.textContent = t, o.style.margin = "0", n.appendChild(o)
                    }
                    r.innerHTML = i, r.style.margin = "0", n.appendChild(r), e.appendChild(n)
                }
            }, F = V.parentDiv(m.base), J = V.bodyHtml(F);
        return V.footerHtml(F), setTimeout(function () {
            n(U, function (e) {
                
                    var t = e.RAW, i = Object.keys(t[Object.keys(t)[0]]),
                        n = "object" != typeof m.base ? m.base.split(",") : m.base, r = [];
                    for (var o in i) {
                        var a = i[i.indexOf(n[o])];
                        void 0 !== a && r.push(a)
                    }
                    var l = t[Object.keys(t)[0]], d = l.USD.PRICE;
                    for (var c in l) H[c] = l[c].PRICE / d;
                    1 < r.length && V.tabsNav(J, r), V.tabs(J, r), c = 0;
                    for (var s = 4 < r.length ? 4 : r.length; c < s; c++) {
                        var I = J.querySelector('div[data-tab-id="' + r[c] + '"]');
                        for (var M in t) {
                            var u = t[M][r[c]];
                            void 0 !== u && V.price(I, M, u, r[c])
                        }
                        I.lastChild.style.borderBottom = "0", 1 == m.striped && V.nthChild(I)
                    }
                    1 < r.length && Z(J, r[0]), V.icons(J)

                var g, y;
                1 == m.streaming && (console.log("Streaming: on"), V.streaming(J, H))
            })
        }, 1), F
    }
};
!function (e, t, i, n, r, o, a) {
    e[i] = e[i] || function () {
        (e[i].q = e[i].q || []).push(arguments)
    }, o = t.createElement("script"), a = t.getElementsByTagName("script")[0], o.async = !0, o.src = "https://cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js", a.parentNode.insertBefore(o, a)
}(window, document, "galite"), galite("create", "UA-125429811-1", "auto"), galite("set", "anonymizeIp", !0), galite("send", "pageview");