/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = r.base ? s[0] + r.base : s[0],
              l = i[u] || 0,
              d = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var f = n(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var s = r(t, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = s;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      420: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r)
                  )
                );
              })(this, r, arguments)
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (s = [
              {
                key: "connectedCallback",
                value: function () {
                  this.innerHTML =
                    '\n      <header>\n        <div class="brand-container">\n          <a href="#">Notes App</a>\n        </div>\n        <div class="add-note">\n          <a href="#" id="add-button">\n            <i class="fa-solid fa-plus"></i> Add note\n          </a>\n        </div>\n      </header>\n    ';
                },
              },
            ]) && e(c.prototype, s),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, s;
        })(r(HTMLElement));
        customElements.define("notes-header", c);
      },
      431: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, o(r.key), r);
          }
        }
        function r(t, e, r) {
          return (
            e && n(t.prototype, e),
            r && n(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function o(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function i(e, n, r) {
          return (
            (n = l(n)),
            (function (e, n) {
              if (n && ("object" == t(n) || "function" == typeof n)) return n;
              if (void 0 !== n)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(e);
            })(
              e,
              s()
                ? Reflect.construct(n, r || [], l(e).constructor)
                : n.apply(e, r)
            )
          );
        }
        function a(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && u(t, e);
        }
        function c(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (c = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (s()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var o = new (t.bind.apply(t, r))();
                  return n && u(o, n.prototype), o;
                })(t, arguments, l(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                u(n, t)
              );
            }),
            c(t)
          );
        }
        function s() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (s = function () {
            return !!t;
          })();
        }
        function u(t, e) {
          return (
            (u = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            u(t, e)
          );
        }
        function l(t) {
          return (
            (l = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            l(t)
          );
        }
        var d = (function (t) {
          function n() {
            var t;
            return (
              e(this, n),
              (t = i(this, n)).attachShadow({ mode: "open" }),
              (t.handleArchive = t.handleArchive.bind(t)),
              (t.handleUnarchive = t.handleUnarchive.bind(t)),
              t
            );
          }
          return (
            a(n, t),
            r(
              n,
              [
                {
                  key: "connectedCallback",
                  value: function () {
                    this.render(), this.attachEventListeners();
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function () {
                    this.render(), this.attachEventListeners();
                  },
                },
                {
                  key: "handleArchive",
                  value: function () {
                    this.setAttribute("archived", "true"),
                      document.querySelector("archive-list").appendChild(this);
                  },
                },
                {
                  key: "handleUnarchive",
                  value: function () {
                    this.setAttribute("archived", "false"),
                      document.querySelector(".note-list").appendChild(this);
                  },
                },
                {
                  key: "attachEventListeners",
                  value: function () {
                    var t = this.shadowRoot.querySelector(".archive-btn"),
                      e = this.shadowRoot.querySelector(".unarchive-btn");
                    t && t.addEventListener("click", this.handleArchive),
                      e && e.addEventListener("click", this.handleUnarchive);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.getAttribute("id") || "",
                      e = this.getAttribute("title") || "Untitled Note",
                      n = this.getAttribute("body") || "",
                      r = this.getAttribute("created-at") || "Unknown Date",
                      o = "true" === this.getAttribute("archived");
                    this.shadowRoot.innerHTML =
                      '\n              <style>\n                  .list-notes {\n                      box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);\n                      border-radius: 10px;\n                      padding: .75em;\n                      transition: all 300ms;\n                      height: 90%;\n                  }\n                  .list-notes:hover {\n                      background-color: #d4d4d4;\n                  }\n                  .title-note {\n                      font-size: 1.2em;\n                      font-weight: bold;\n                      color: #2B2B2B;\n                  }\n                  .date {\n                      font-style: italic;\n                      text-align: end;\n                      color: #919191;\n                      margin-top: 5px;\n                      font-size: .8em;\n                  }\n                  .btn {\n                      display: inline-block;\n                      margin-block: 10px;\n                      padding: 5px 10px;\n                      background-color: #007bff;\n                      color: white;\n                      border: none;\n                      border-radius: 5px;\n                      cursor: pointer;\n                      font-size: 0.9em;\n                  }\n              </style>\n  \n              <div class="list-notes" data-noteid="'
                        .concat(
                          t,
                          '">\n                  <h3 class="title-note">'
                        )
                        .concat(
                          e,
                          '</h3>\n                  <div class="body-note">\n                      <p>'
                        )
                        .concat(
                          n,
                          '</p>\n                      <p class="date">'
                        )
                        .concat(
                          r,
                          "</p>\n                  </div>\n                  "
                        )
                        .concat(
                          o
                            ? '<button class="btn unarchive-btn">Kembalikan</button>'
                            : '<button class="btn archive-btn">Arsipkan</button>',
                          "\n              </div>\n          "
                        );
                  },
                },
              ],
              [
                {
                  key: "observedAttributes",
                  get: function () {
                    return ["id", "title", "body", "created-at", "archived"];
                  },
                },
              ]
            )
          );
        })(c(HTMLElement));
        customElements.define("note-item", d);
        var f = (function (t) {
          function n() {
            var t;
            return (
              e(this, n),
              (t = i(this, n)).attachShadow({ mode: "open" }),
              (t.shadowRoot.innerHTML =
                '\n        <style>\n        :host {\n          display: block;\n          width: 100%;\n          margin-top: 20px;\n        }\n        .archive-container {\n          display: grid;\n          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n          gap: 15px;\n          padding: 15px;\n          border: 2px dashed #007bff;\n          border-radius: 10px;\n          background-color: #f8f9fa;\n        }\n        .archive-title {\n          grid-column: 1 / -1;\n          font-size: 1.5em;\n          font-weight: bold;\n          color: #2B2B2B;\n          text-align: center;\n          margin-bottom: 10px;\n        }\n      </style>\n\n      <div class="archive-container">\n        <p class="archive-title">📂 Arsip Note</p>\n        <slot></slot>\n      </div>\n      '),
              t
            );
          }
          return a(n, t), r(n);
        })(c(HTMLElement));
        customElements.define("archive-list", f);
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      915: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n:root {\n  --color-bg: #f5f5f5;\n  --color-font: #2b2b2b;\n  --font: "Nunito", serif;\n}\nbody {\n  font-family: var(--font);\n  background-color: var(--color-bg);\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: 2em 2.5em;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  display: flex;\n  backdrop-filter: blur(4px);\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader .brand-container a {\n  font-size: 2em;\n  font-weight: 700;\n  color: var(--color-font);\n}\n\nheader .add-note #add-button {\n  background-color: var(--color-font);\n  color: var(--color-bg);\n  padding: 1em;\n  border-radius: 10px;\n}\n\nmain {\n  padding-top: 8em;\n}\n\n.container-modal {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  /* display: flex; */\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.container-modal.active {\n  display: flex;\n}\n\n.container-modal .modal {\n  background-color: var(--color-bg);\n  padding: 1.5em 2em;\n  border-radius: 7px;\n  position: relative;\n  min-width: 15em;\n  width: 25em;\n  max-width: 30em;\n  margin-inline: 0.5em;\n}\n\n.container-modal .modal #close-modal {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.2em 0.6em;\n  border-radius: 50%;\n  color: var(--color-font);\n}\n\n#form-note .form-grup label {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 1.1em;\n}\n\n#form-note .form-grup input,\n#form-note .form-grup textarea {\n  padding: 0.4em 0.75em;\n  letter-spacing: 0.05em;\n  border-radius: 5px;\n  border: 1px solid var(--color-font);\n  width: 100%;\n}\n\n#form-note .form-grup textarea {\n  height: 5em;\n}\n\n#form-note .form-grup p {\n  font-size: 0.9em;\n  margin-block: 3px;\n  color: red;\n}\n\n#form-note button#save-note {\n  background-color: var(--color-font);\n  color: var(--color-bg);\n  border: none;\n  padding: 0.75em 1em;\n  border-radius: 10px;\n  margin-top: 3px;\n  display: flex;\n  justify-content: end;\n}\n\n#form-note button#save-note:hover {\n  cursor: pointer;\n}\n\nmain aside a.btn-add {\n  background-color: var(--color-font);\n  color: var(--color-bg);\n  padding: 1.2em 1.4em;\n  border-radius: 50%;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-right: 1em;\n  margin-bottom: 1em;\n  z-index: 3;\n  display: none;\n}\n\n.content-container {\n  margin-inline: 1em;\n}\n\n.content-container h2 {\n  text-align: center;\n  margin-block: 1em;\n}\n\n.content-container .note-list,\narticle.note-api {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1em;\n  align-items: stretch;\n}\n\n.content-container .note-list .list-notes:hover {\n  background-color: #d4d4d4;\n}\n\n.content-container .archive {\n  padding-top: 2em;\n}\n\narticle.note-api .list-notes {\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  padding: 1em;\n  transition: all 300ms;\n  height: 90%;\n}\narticle.note-api .list-notes .list-notes:hover {\n  background-color: #d4d4d4;\n}\narticle.note-api .list-notes .title-note {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #2b2b2b;\n}\narticle.note-api .list-notes .date {\n  font-style: italic;\n  text-align: end;\n  color: #919191;\n  margin-top: 5px;\n  font-size: 0.8em;\n}\narticle.note-api .list-notes .btn {\n  display: inline-block;\n  margin-block: 10px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.9em;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  z-index: 9999;\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #ccc;\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.notification {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #28a745;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 16px;\n  opacity: 0;\n  animation: fadeInOut 3s forwards;\n}\n\n.notification.error {\n  background-color: #dc3545;\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(10px);\n  }\n  10% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\nfooter {\n  padding: 2em 1em;\n  margin-top: 1em;\n  text-align: center;\n  font-size: 1.2em;\n  color: #5a5a5a;\n}\n\n@media screen and (max-width: 500px) {\n  header .brand-container a {\n    font-size: 1.5em;\n  }\n  header .add-note #add-button {\n    display: none;\n  }\n\n  main aside a.btn-add {\n    display: block;\n  }\n  footer {\n    padding: 1.5em 0.75em;\n    font-size: 0.9em;\n  }\n}\n',
          "",
        ]);
        const c = a;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        s = n.n(c),
        u = n(540),
        l = n.n(u),
        d = n(113),
        f = n.n(d),
        p = n(915),
        h = {};
      (h.styleTagTransform = f()),
        (h.setAttributes = s()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(p.A, h),
        p.A && p.A.locals && p.A.locals;
      var y = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      function v(t) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          v(t)
        );
      }
      function m() {
        m = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new _(r || []);
          return o(a, "_invoke", { value: O(t, n, c) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          y = "completed",
          b = {};
        function g() {}
        function x() {}
        function w() {}
        var k = {};
        u(k, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          T = E && E(E(M([])));
        T && T !== n && r.call(T, a) && (k = T);
        var L = (w.prototype = g.prototype = Object.create(k));
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, c) {
            var s = d(t[o], t, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                l = u.value;
              return l && "object" == v(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function O(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === h) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var s = A(c, r);
                if (s) {
                  if (s === b) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var u = d(e, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? y : p), u.arg === b)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = y), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function A(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                A(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              b
            );
          var i = d(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                b)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              b);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function C(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function M(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(v(e) + " is not iterable");
        }
        return (
          (x.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: x, configurable: !0 }),
          (x.displayName = u(w, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === x || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          j(S.prototype),
          u(S.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          j(L),
          u(L, s, "Generator"),
          u(L, a, function () {
            return this;
          }),
          u(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = M),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (s && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), C(n), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    C(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: M(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          e
        );
      }
      function b(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(s) : Promise.resolve(s).then(r, o);
      }
      function g(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              b(i, r, o, a, c, "next", t);
            }
            function c(t) {
              b(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      console.log(y);
      var x = "https://notes-api.dicoding.dev/v2",
        w = (function () {
          var t = g(
            m().mark(function t() {
              var e, n, r;
              return m().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          ((e =
                            document.querySelector(
                              ".loading-container"
                            )).style.display = "flex"),
                          (t.prev = 2),
                          (t.next = 5),
                          fetch("".concat(x, "/notes"))
                        );
                      case 5:
                        return (n = t.sent), (t.next = 8), n.json();
                      case 8:
                        (r = t.sent).error
                          ? console.log("Terjadi error saat mengambil data")
                          : setTimeout(function () {
                              T(r.data);
                            }, 500),
                          (t.next = 16);
                        break;
                      case 12:
                        (t.prev = 12),
                          (t.t0 = t.catch(2)),
                          t.t0.message.includes("Failed to fetch")
                            ? L(
                                "⚠️ Gagal terhubung ke server. Periksa koneksi internet Anda.",
                                "error"
                              )
                            : L(
                                "🛑 Terjadi kesalahan! Silakan coba lagi nanti.",
                                "error"
                              ),
                          console.error("Error:", t.t0);
                      case 16:
                        return (
                          (t.prev = 16),
                          setTimeout(function () {
                            e.style.display = "none";
                          }, 500),
                          t.finish(16)
                        );
                      case 19:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 12, 16, 19]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        k = (function () {
          var t = g(
            m().mark(function t(e) {
              var n, r, o;
              return m().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          }),
                          (t.next = 4),
                          fetch("".concat(x, "/notes"), n)
                        );
                      case 4:
                        return (r = t.sent), (t.next = 7), r.json();
                      case 7:
                        (o = t.sent),
                          r.ok
                            ? (L("Catatan berhasil ditambahkan!", "success"),
                              w())
                            : L(
                                "Gagal menambahkan catatan: ".concat(o.message),
                                "error"
                              ),
                          (t.next = 14);
                        break;
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(0)),
                          L(
                            "Terjadi kesalahan! Periksa koneksi internet.",
                            "error"
                          );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        E = (function () {
          var t = g(
            m().mark(function t(e) {
              var n, r, o;
              return m().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                          }),
                          (t.next = 4),
                          fetch("".concat(x, "/notes/").concat(e), n)
                        );
                      case 4:
                        return (r = t.sent), (t.next = 7), r.json();
                      case 7:
                        (o = t.sent),
                          r.ok
                            ? (L("Catatan berhasil dihapus!", "success"), w())
                            : L(
                                "Gagal menghapus catatan: ".concat(o.message),
                                "error"
                              ),
                          (t.next = 14);
                        break;
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(0)),
                          L(
                            "Terjadi kesalahan saat menghapus catatan.",
                            "error"
                          );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        T = function (t) {
          var e = document.querySelector("article.note-api"),
            n = document.querySelector("archive-list");
          (e.innerHTML = ""),
            (n.innerHTML = ""),
            t.forEach(function (t) {
              var r = document.createElement("div");
              r.classList.add("list-notes"),
                (r.dataset.noteid = t.id),
                (r.innerHTML = '\n          <h3 class="title-note">'
                  .concat(
                    t.title,
                    '</h3>\n          <div class="body-note">\n              <p>'
                  )
                  .concat(t.body, '</p> \n              <p class="date">')
                  .concat(
                    t.createdAt,
                    '</p>   \n          </div>\n          <button class="btn btn-delete" id="'
                  )
                  .concat(t.id, '">Hapus</button>\n      ')),
                t.archived ? n.appendChild(r) : e.appendChild(r);
            }),
            document.querySelectorAll(".btn-delete").forEach(function (t) {
              t.addEventListener("click", function (t) {
                var e = t.target.id;
                E(e);
              });
            });
        },
        L = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "success",
            n = document.createElement("div");
          n.classList.add("notification", e),
            (n.textContent = t),
            document.body.appendChild(n),
            setTimeout(function () {
              n.remove();
            }, 3e3);
        };
      document.addEventListener("DOMContentLoaded", function () {
        w();
      }),
        n(431),
        n(420);
      var j = document.querySelector(".note-list"),
        S = document.querySelector(".container-modal"),
        O = S.querySelector("#form-note"),
        A = O.elements.title,
        P = O.elements.descriptionContent;
      function C() {
        S.classList.toggle("active"),
          S.classList.contains("active") &&
            S.querySelector("#close-modal").addEventListener(
              "click",
              function (t) {
                t.preventDefault(), S.classList.remove("active");
              }
            );
      }
      var _ = function (t) {
        t.target.setCustomValidity(""),
          t.target.validity.valueMissing
            ? t.target.setCustomValidity("Wajib diisi.")
            : t.target.validity.tooShort
            ? t.target.setCustomValidity("Minimal panjang adalah 3 karakter.")
            : t.target.validity.patternMismatch &&
              t.target.setCustomValidity(
                "Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($)."
              );
      };
      O.addEventListener("submit", function (t) {
        var e = A.value,
          n = P.value;
        k({ title: e, body: n }),
          O.reset(),
          t.preventDefault(),
          S.classList.remove("active");
      }),
        A.addEventListener("change", _),
        A.addEventListener("invalid", _),
        A.addEventListener("blur", function (t) {
          var e = t.target.validity.valid,
            n = t.target.validationMessage,
            r = t.target.getAttribute("aria-describedby"),
            o = r ? document.getElementById(r) : null;
          o.innerText = o && n && !e ? n : "";
        }),
        y.forEach(function (t) {
          var e = t.id,
            n = t.title,
            r = t.body,
            o = t.createdAt,
            i = t.archived,
            a = document.createElement("note-item");
          a.setAttribute("id", e),
            a.setAttribute("title", n),
            a.setAttribute("body", r),
            a.setAttribute("created-at", o),
            a.setAttribute("archived", i),
            j.append(a);
        }),
        document
          .querySelector("#add-button")
          .addEventListener("click", function () {
            C();
          }),
        document
          .querySelector(".btn-add")
          .addEventListener("click", function () {
            C();
          }),
        (document.querySelector("footer p span.date").innerText =
          new Date().getFullYear());
    })();
})();
