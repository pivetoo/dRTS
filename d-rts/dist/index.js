import { jsx as x, Fragment as Cr, jsxs as V } from "react/jsx-runtime";
import * as m from "react";
import Pt, { forwardRef as De, createElement as ei, useState as We, useLayoutEffect as lr, isValidElement as Ut, useContext as Qt, createContext as Rt, PureComponent as yi, useCallback as ve, useMemo as Dr, useRef as me, useImperativeHandle as jw, useEffect as Fe, cloneElement as bi, Children as ZT, Component as JT } from "react";
import * as wi from "react-dom";
import QT, { createPortal as $w } from "react-dom";
import { useLocation as Lw, Navigate as e_, useNavigate as Fw, useSearchParams as t_ } from "react-router-dom";
function _m(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ks(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = _m(o, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : _m(e[o], null);
        }
      };
  };
}
function se(...e) {
  return m.useCallback(Ks(...e), e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  const t = /* @__PURE__ */ n_(e), r = m.forwardRef((n, o) => {
    const { children: i, ...a } = n, s = m.Children.toArray(i), c = s.find(i_);
    if (c) {
      const u = c.props.children, l = s.map((d) => d === c ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ x(t, { ...a, ref: o, children: m.isValidElement(u) ? m.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ x(t, { ...a, ref: o, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var r_ = /* @__PURE__ */ An("Slot");
// @__NO_SIDE_EFFECTS__
function n_(e) {
  const t = m.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (m.isValidElement(o)) {
      const a = s_(o), s = a_(i, o.props);
      return o.type !== m.Fragment && (s.ref = n ? Ks(n, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Bw = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function o_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ x(Cr, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Bw, t;
}
function i_(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Bw;
}
function a_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...i } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function s_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function zw(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = zw(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function le() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = zw(e)) && (n && (n += " "), n += t);
  return n;
}
const km = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Nm = le, xi = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return Nm(e, r?.class, r?.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const l = r?.[u], d = i?.[u];
    if (l === null) return null;
    const p = km(l) || km(d);
    return o[u][p];
  }), s = r && Object.entries(r).reduce((u, l) => {
    let [d, p] = l;
    return p === void 0 || (u[d] = p), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, l) => {
    let { class: d, className: p, ...h } = l;
    return Object.entries(h).every((v) => {
      let [f, g] = v;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...s
      }[f]) : {
        ...i,
        ...s
      }[f] === g;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return Nm(e, a, c, r?.class, r?.className);
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), l_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Im = (e) => {
  const t = l_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Uw = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), u_ = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f_ = De(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => ei(
    "svg",
    {
      ref: c,
      ...d_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Uw("lucide", o),
      ...!i && !u_(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([u, l]) => ei(u, l)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (e, t) => {
  const r = De(
    ({ className: n, ...o }, i) => ei(f_, {
      ref: i,
      iconNode: t,
      className: Uw(
        `lucide-${c_(Im(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Im(e), r;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p_ = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], h_ = ct("bell", p_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lf = ct("check", m_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Vs = ct("chevron-down", v_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], y_ = ct("chevron-left", g_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ff = ct("chevron-right", b_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], x_ = ct("chevron-up", w_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], S_ = ct("circle-alert", E_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ww = ct("circle", P_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], A_ = ct("loader-circle", O_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], T_ = ct("log-out", C_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], k_ = ct("plus", __);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N_ = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], I_ = ct("refresh-cw", N_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R_ = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], M_ = ct("search", R_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D_ = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], j_ = ct("square-pen", D_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $_ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], L_ = ct("trash-2", $_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Bf = ct("x", F_), zf = "-", B_ = (e) => {
  const t = U_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(zf);
      return s[0] === "" && s.length !== 1 && s.shift(), Kw(s, t) || z_(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Kw = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Kw(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(zf);
  return t.validators.find(({
    validator: a
  }) => a(i))?.classGroupId;
}, Rm = /^\[(.+)\]$/, z_ = (e) => {
  if (Rm.test(e)) {
    const t = Rm.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, U_ = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    md(r[o], n, o, t);
  return n;
}, md = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Mm(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (W_(o)) {
        md(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      md(a, Mm(t, i), r, n);
    });
  });
}, Mm = (e, t) => {
  let r = e;
  return t.split(zf).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, W_ = (e) => e.isThemeGetter, K_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}, vd = "!", gd = ":", V_ = gd.length, q_ = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, u;
    for (let v = 0; v < o.length; v++) {
      let f = o[v];
      if (a === 0 && s === 0) {
        if (f === gd) {
          i.push(o.slice(c, v)), c = v + V_;
          continue;
        }
        if (f === "/") {
          u = v;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" ? a-- : f === "(" ? s++ : f === ")" && s--;
    }
    const l = i.length === 0 ? o : o.substring(c), d = H_(l), p = d !== l, h = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + gd, i = n;
    n = (a) => a.startsWith(o) ? i(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, H_ = (e) => e.endsWith(vd) ? e.substring(0, e.length - 1) : e.startsWith(vd) ? e.substring(1) : e, G_ = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let i = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...i.sort(), a), i = []) : i.push(a);
    }), o.push(...i.sort()), o;
  };
}, Y_ = (e) => ({
  cache: K_(e.cacheSize),
  parseClassName: q_(e),
  sortModifiers: G_(e),
  ...B_(e)
}), X_ = /\s+/, Z_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], s = e.trim().split(X_);
  let c = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const l = s[u], {
      isExternal: d,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: f
    } = r(l);
    if (d) {
      c = l + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!f, y = n(g ? v.substring(0, f) : v);
    if (!y) {
      if (!g) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = n(v), !y) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const w = i(p).join(":"), b = h ? w + vd : w, E = b + y;
    if (a.includes(E))
      continue;
    a.push(E);
    const S = o(y, g);
    for (let P = 0; P < S.length; ++P) {
      const O = S[P];
      a.push(b + O);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function J_() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Vw(t)) && (n && (n += " "), n += r);
  return n;
}
const Vw = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Vw(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Q_(e, ...t) {
  let r, n, o, i = a;
  function a(c) {
    const u = t.reduce((l, d) => d(l), e());
    return r = Y_(u), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const l = Z_(c, r);
    return o(c, l), l;
  }
  return function() {
    return i(J_.apply(null, arguments));
  };
}
const ze = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, qw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Hw = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ek = /^\d+\/\d+$/, tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ok = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ik = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => ek.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Wr = (e) => !!e && Number.isInteger(Number(e)), xl = (e) => e.endsWith("%") && ae(e.slice(0, -1)), gr = (e) => tk.test(e), ak = () => !0, sk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rk.test(e) && !nk.test(e)
), Gw = () => !1, ck = (e) => ok.test(e), lk = (e) => ik.test(e), uk = (e) => !G(e) && !Y(e), dk = (e) => mo(e, Zw, Gw), G = (e) => qw.test(e), dn = (e) => mo(e, Jw, sk), El = (e) => mo(e, vk, ae), Dm = (e) => mo(e, Yw, Gw), fk = (e) => mo(e, Xw, lk), na = (e) => mo(e, Qw, ck), Y = (e) => Hw.test(e), $o = (e) => vo(e, Jw), pk = (e) => vo(e, gk), jm = (e) => vo(e, Yw), hk = (e) => vo(e, Zw), mk = (e) => vo(e, Xw), oa = (e) => vo(e, Qw, !0), mo = (e, t, r) => {
  const n = qw.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, vo = (e, t, r = !1) => {
  const n = Hw.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Yw = (e) => e === "position" || e === "percentage", Xw = (e) => e === "image" || e === "url", Zw = (e) => e === "length" || e === "size" || e === "bg-size", Jw = (e) => e === "length", vk = (e) => e === "number", gk = (e) => e === "family-name", Qw = (e) => e === "shadow", yk = () => {
  const e = ze("color"), t = ze("font"), r = ze("text"), n = ze("font-weight"), o = ze("tracking"), i = ze("leading"), a = ze("breakpoint"), s = ze("container"), c = ze("spacing"), u = ze("radius"), l = ze("shadow"), d = ze("inset-shadow"), p = ze("text-shadow"), h = ze("drop-shadow"), v = ze("blur"), f = ze("perspective"), g = ze("aspect"), y = ze("ease"), w = ze("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], S = () => [...E(), Y, G], P = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], A = () => [Y, G, c], _ = () => [qn, "full", "auto", ...A()], I = () => [Wr, "none", "subgrid", Y, G], T = () => ["auto", {
    span: ["full", Wr, Y, G]
  }, Wr, Y, G], M = () => [Wr, "auto", Y, G], D = () => ["auto", "min", "max", "fr", Y, G], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...A()], B = () => [qn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], R = () => [e, Y, G], F = () => [...E(), jm, Dm, {
    position: [Y, G]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ie = () => ["auto", "cover", "contain", hk, dk, {
    size: [Y, G]
  }], ne = () => [xl, $o, dn], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Y,
    G
  ], oe = () => ["", ae, $o, dn], ue = () => ["solid", "dashed", "dotted", "double"], je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [ae, xl, jm, Dm], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    Y,
    G
  ], j = () => ["none", ae, Y, G], q = () => ["none", ae, Y, G], J = () => [ae, Y, G], $ = () => [qn, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [gr],
      breakpoint: [gr],
      color: [ak],
      container: [gr],
      "drop-shadow": [gr],
      ease: ["in", "out", "in-out"],
      font: [uk],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [gr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [gr],
      shadow: [gr],
      spacing: ["px", ae],
      text: [gr],
      "text-shadow": [gr],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", qn, G, Y, g]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, G, Y, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Wr, "auto", Y, G]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qn, "full", "auto", s, ...A()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, qn, "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, Y, G]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, Y, G]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Wr, "first", "last", "none", Y, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": D()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": D()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: A()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": A()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": A()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: A()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: A()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: A()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: A()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: A()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: A()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: A()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: A()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: A()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": A()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": A()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...B()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...B()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, $o, dn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, Y, El]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xl, G]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pk, G, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, Y, G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", Y, El]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...A()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y, G]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Y, G]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ue(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", Y, dn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", Y, G]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, G]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y, G]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ee()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ie()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Wr, Y, G],
          radial: ["", Y, G],
          conic: [Wr, Y, G]
        }, mk, fk]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: te()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": te()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": te()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": te()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": te()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": te()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": te()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": te()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": te()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": te()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": te()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": te()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": te()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": te()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": te()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: oe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": oe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": oe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": oe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": oe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": oe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": oe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": oe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": oe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": oe()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": oe()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ue(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ue(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ue(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, Y, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, $o, dn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          l,
          oa,
          na
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, oa, na]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: oe()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, dn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": oe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, oa, na]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, Y, G]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": je()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [Y, G]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ee()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ie()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Y, G]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          G
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: fe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, Y, G]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, Y, G]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          oa,
          na
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, Y, G]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, Y, G]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, Y, G]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, Y, G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, Y, G]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          G
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": fe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, Y, G]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, Y, G]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, Y, G]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, Y, G]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, Y, G]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, Y, G]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, Y, G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, Y, G]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": A()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": A()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": A()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, G]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", Y, G]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, Y, G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, Y, G]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, Y, G]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, Y, G]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: j()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": j()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": j()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": j()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: q()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": q()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": q()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": q()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: J()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": J()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": J()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Y, G, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: $()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": $()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": $()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": $()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: R()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: R()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, G]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y, G]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, $o, dn, El]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, bk = /* @__PURE__ */ Q_(yk);
class MX {
  static buildQuery(t) {
    const r = [];
    return t.$top !== void 0 && r.push(`$top=${t.$top}`), t.$skip !== void 0 && r.push(`$skip=${t.$skip}`), t.$count !== void 0 && r.push(`$count=${t.$count}`), t.$filter && r.push(`$filter=${encodeURIComponent(t.$filter)}`), t.$orderby && r.push(`$orderby=${encodeURIComponent(t.$orderby)}`), t.$select && r.push(`$select=${t.$select}`), t.$expand && r.push(`$expand=${t.$expand}`), r.length > 0 ? `?${r.join("&")}` : "";
  }
  static fromPaginationParams(t) {
    const r = {};
    return t.pageSize && (r.$top = t.pageSize), t.page && t.pageSize && (r.$skip = (t.page - 1) * t.pageSize), t.orderBy && (r.$orderby = t.orderBy), t.search && (r.$filter = `contains(tolower(nome), '${t.search.toLowerCase()}')`), r.$count = !0, r;
  }
  static createSearchFilter(t, r) {
    if (!t || r.length === 0) return "";
    const n = t.toLowerCase();
    return r.map(
      (i) => `contains(tolower(${i}), '${n}')`
    ).join(" or ");
  }
  static createBooleanFilter(t, r) {
    return `${t} eq ${r}`;
  }
  static createDateFilter(t, r, n) {
    const o = n.toISOString();
    return `${t} ${r} ${o}`;
  }
  static combineFilters(t, r = "and") {
    const n = t.filter((o) => o.trim().length > 0);
    return n.length === 0 ? "" : n.length === 1 ? n[0] : n.map((o) => `(${o})`).join(` ${r} `);
  }
  static extractData(t) {
    return t.d?.results || [];
  }
  static extractCount(t) {
    return t.d?.__count || 0;
  }
  static processResponse(t, r, n) {
    const o = Array.isArray(t) ? t : this.extractData(t), i = n ? o.map(n) : o, a = Array.isArray(t) ? t.length : this.extractCount(t);
    return {
      data: i,
      total: a,
      page: r?.page,
      pageSize: r?.pageSize
    };
  }
}
function U(...e) {
  return bk(le(e));
}
const wk = xi(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90",
        success: "bg-success text-success-foreground shadow hover:bg-success/90",
        error: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        danger: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        warning: "bg-warning text-warning-foreground shadow hover:bg-warning/90",
        info: "bg-info text-info-foreground shadow hover:bg-info/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        text: "hover:underline",
        dark: "bg-foreground text-background shadow hover:bg-foreground/90"
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), Ha = m.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, loading: o = !1, fullWidth: i = !1, icon: a, iconPosition: s = "left", children: c, disabled: u, ...l }, d) => {
    const p = n ? r_ : "button", h = u || o;
    return /* @__PURE__ */ V(
      p,
      {
        className: U(
          wk({ variant: t, size: r, className: e }),
          i && "w-full"
        ),
        ref: d,
        disabled: h,
        ...l,
        children: [
          o && /* @__PURE__ */ x(A_, { className: "animate-spin" }),
          !o && a && s === "left" && a,
          c,
          !o && a && s === "right" && a
        ]
      }
    );
  }
);
Ha.displayName = "Button";
const Ma = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "div",
  {
    ref: r,
    className: U(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ma.displayName = "Card";
const xk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "div",
  {
    ref: r,
    className: U("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
xk.displayName = "CardHeader";
const Ek = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "div",
  {
    ref: r,
    className: U(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ek.displayName = "CardTitle";
const Sk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "div",
  {
    ref: r,
    className: U("text-sm text-muted-foreground", e),
    ...t
  }
));
Sk.displayName = "CardDescription";
const Pk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: U("p-6 pt-0", e), ...t }));
Pk.displayName = "CardContent";
const Ok = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "div",
  {
    ref: r,
    className: U("flex items-center p-6 pt-0", e),
    ...t
  }
));
Ok.displayName = "CardFooter";
const e0 = m.forwardRef(
  ({ className: e, type: t, error: r, helperText: n, ...o }, i) => /* @__PURE__ */ V("div", { className: "w-full", children: [
    /* @__PURE__ */ x(
      "input",
      {
        type: t,
        className: U(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          r && "border-destructive focus-visible:ring-destructive",
          e
        ),
        ref: i,
        ...o
      }
    ),
    n && /* @__PURE__ */ x("p", { className: U(
      "mt-1 text-xs",
      r ? "text-destructive" : "text-muted-foreground"
    ), children: n })
  ] })
);
e0.displayName = "Input";
const Ak = xi(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function DX({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ x("div", { className: U(Ak({ variant: t }), e), ...r });
}
function Ck(e, t) {
  const r = m.createContext(t), n = (i) => {
    const { children: a, ...s } = i, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ x(r.Provider, { value: c, children: a });
  };
  n.displayName = e + "Provider";
  function o(i) {
    const a = m.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function xt(e, t = []) {
  let r = [];
  function n(i, a) {
    const s = m.createContext(a), c = r.length;
    r = [...r, a];
    const u = (d) => {
      const { scope: p, children: h, ...v } = d, f = p?.[e]?.[c] || s, g = m.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ x(f.Provider, { value: g, children: h });
    };
    u.displayName = i + "Provider";
    function l(d, p) {
      const h = p?.[e]?.[c] || s, v = m.useContext(h);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, l];
  }
  const o = () => {
    const i = r.map((a) => m.createContext(a));
    return function(s) {
      const c = s?.[e] || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, Tk(o, ...t)];
}
function Tk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = n.reduce((s, { useScope: c, scopeName: u }) => {
        const d = c(i)[`__scope${u}`];
        return { ...s, ...d };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function K(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var rt = globalThis?.document ? m.useLayoutEffect : () => {
}, _k = m[" useInsertionEffect ".trim().toString()] || rt;
function Kt({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, i, a] = kk({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, c = s ? e : o;
  {
    const l = m.useRef(e !== void 0);
    m.useEffect(() => {
      const d = l.current;
      d !== s && console.warn(
        `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = s;
    }, [s, n]);
  }
  const u = m.useCallback(
    (l) => {
      if (s) {
        const d = Nk(l) ? l(e) : l;
        d !== e && a.current?.(d);
      } else
        i(l);
    },
    [s, e, i, a]
  );
  return [c, u];
}
function kk({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), o = m.useRef(r), i = m.useRef(t);
  return _k(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== r && (i.current?.(r), o.current = r);
  }, [r, o]), [r, n, i];
}
function Nk(e) {
  return typeof e == "function";
}
function qs(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Hs(e) {
  const [t, r] = m.useState(void 0);
  return rt(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          a = u.inlineSize, s = u.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        r({ width: a, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function Ik(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var Mt = (e) => {
  const { present: t, children: r } = e, n = Rk(t), o = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), i = se(n.ref, Mk(o));
  return typeof r == "function" || n.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Mt.displayName = "Presence";
function Rk(e) {
  const [t, r] = m.useState(), n = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = Ik(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const u = ia(n.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), rt(() => {
    const u = n.current, l = o.current;
    if (l !== e) {
      const p = i.current, h = ia(u);
      e ? c("MOUNT") : h === "none" || u?.display === "none" ? c("UNMOUNT") : c(l && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), rt(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const f = ia(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && f && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = ia(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: m.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function ia(e) {
  return e?.animationName || "none";
}
function Mk(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Dk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Q = Dk.reduce((e, t) => {
  const r = /* @__PURE__ */ An(`Primitive.${t}`), n = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(c, { ...s, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Uf(e, t) {
  e && wi.flushSync(() => e.dispatchEvent(t));
}
var Gs = "Checkbox", [jk] = xt(Gs), [$k, Wf] = jk(Gs);
function Lk(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: l = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [p, h] = Kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Gs
  }), [v, f] = m.useState(null), [g, y] = m.useState(null), w = m.useRef(!1), b = v ? !!a || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: i,
    setChecked: h,
    control: v,
    setControl: f,
    name: s,
    form: a,
    value: l,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: Yr(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ x(
    $k,
    {
      scope: t,
      ...E,
      children: Fk(d) ? d(E) : n
    }
  );
}
var t0 = "CheckboxTrigger", r0 = m.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: i,
      value: a,
      disabled: s,
      checked: c,
      required: u,
      setControl: l,
      setChecked: d,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: v
    } = Wf(t0, e), f = se(o, l), g = m.useRef(c);
    return m.useEffect(() => {
      const y = i?.form;
      if (y) {
        const w = () => d(g.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [i, d]), /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Yr(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": s0(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: f,
        onKeyDown: K(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: K(r, (y) => {
          d((w) => Yr(w) ? !0 : !w), v && h && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
r0.displayName = t0;
var Kf = m.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: l,
      ...d
    } = e;
    return /* @__PURE__ */ x(
      Lk,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: a,
        onCheckedChange: u,
        name: n,
        form: l,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ V(Cr, { children: [
          /* @__PURE__ */ x(
            r0,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ x(
            a0,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Kf.displayName = Gs;
var n0 = "CheckboxIndicator", o0 = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = Wf(n0, r);
    return /* @__PURE__ */ x(
      Mt,
      {
        present: n || Yr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ x(
          Q.span,
          {
            "data-state": s0(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
o0.displayName = n0;
var i0 = "CheckboxBubbleInput", a0 = m.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      name: u,
      value: l,
      form: d,
      bubbleInput: p,
      setBubbleInput: h
    } = Wf(i0, e), v = se(r, h), f = qs(i), g = Hs(n);
    m.useEffect(() => {
      const w = p;
      if (!w) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, P = !o.current;
      if (f !== i && S) {
        const O = new Event("click", { bubbles: P });
        w.indeterminate = Yr(i), S.call(w, Yr(i) ? !1 : i), w.dispatchEvent(O);
      }
    }, [p, f, i, o]);
    const y = m.useRef(Yr(i) ? !1 : i);
    return /* @__PURE__ */ x(
      Q.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? y.current,
        required: s,
        disabled: c,
        name: u,
        value: l,
        form: d,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
a0.displayName = i0;
function Fk(e) {
  return typeof e == "function";
}
function Yr(e) {
  return e === "indeterminate";
}
function s0(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Bk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  Kf,
  {
    ref: r,
    className: U(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ x(
      o0,
      {
        className: U("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ x(Lf, { className: "h-4 w-4" })
      }
    )
  }
));
Bk.displayName = Kf.displayName;
var zk = m[" useId ".trim().toString()] || (() => {
}), Uk = 0;
function _t(e) {
  const [t, r] = m.useState(zk());
  return rt(() => {
    r((n) => n ?? String(Uk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function pt(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...r) => t.current?.(...r), []);
}
function Wk(e, t = globalThis?.document) {
  const r = pt(e);
  m.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Kk = "DismissableLayer", yd = "dismissableLayer.update", Vk = "dismissableLayer.pointerDownOutside", qk = "dismissableLayer.focusOutside", $m, c0 = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), go = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, u = m.useContext(c0), [l, d] = m.useState(null), p = l?.ownerDocument ?? globalThis?.document, [, h] = m.useState({}), v = se(t, (O) => d(O)), f = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = f.indexOf(g), w = l ? f.indexOf(l) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = Gk((O) => {
      const A = O.target, _ = [...u.branches].some((I) => I.contains(A));
      !E || _ || (o?.(O), a?.(O), O.defaultPrevented || s?.());
    }, p), P = Yk((O) => {
      const A = O.target;
      [...u.branches].some((I) => I.contains(A)) || (i?.(O), a?.(O), O.defaultPrevented || s?.());
    }, p);
    return Wk((O) => {
      w === u.layers.size - 1 && (n?.(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
    }, p), m.useEffect(() => {
      if (l)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($m = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Lm(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $m);
        };
    }, [l, p, r, u]), m.useEffect(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Lm());
    }, [l, u]), m.useEffect(() => {
      const O = () => h({});
      return document.addEventListener(yd, O), () => document.removeEventListener(yd, O);
    }, []), /* @__PURE__ */ x(
      Q.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: b ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: K(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: K(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
go.displayName = Kk;
var Hk = "DismissableLayerBranch", l0 = m.forwardRef((e, t) => {
  const r = m.useContext(c0), n = m.useRef(null), o = se(t, n);
  return m.useEffect(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ x(Q.div, { ...e, ref: o });
});
l0.displayName = Hk;
function Gk(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          u0(
            Vk,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Yk(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !n.current && u0(qk, r, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Lm() {
  const e = new CustomEvent(yd);
  document.dispatchEvent(e);
}
function u0(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, i) : o.dispatchEvent(i);
}
var Xk = go, Zk = l0, Sl = "focusScope.autoFocusOnMount", Pl = "focusScope.autoFocusOnUnmount", Fm = { bubbles: !1, cancelable: !0 }, Jk = "FocusScope", Ys = m.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = m.useState(null), u = pt(o), l = pt(i), d = m.useRef(null), p = se(t, (f) => c(f)), h = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (n) {
      let f = function(b) {
        if (h.paused || !s) return;
        const E = b.target;
        s.contains(E) ? d.current = E : Kr(d.current, { select: !0 });
      }, g = function(b) {
        if (h.paused || !s) return;
        const E = b.relatedTarget;
        E !== null && (s.contains(E) || Kr(d.current, { select: !0 }));
      }, y = function(b) {
        if (document.activeElement === document.body)
          for (const S of b)
            S.removedNodes.length > 0 && Kr(s);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", g);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [n, s, h.paused]), m.useEffect(() => {
    if (s) {
      zm.add(h);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const y = new CustomEvent(Sl, Fm);
        s.addEventListener(Sl, u), s.dispatchEvent(y), y.defaultPrevented || (Qk(oN(d0(s)), { select: !0 }), document.activeElement === f && Kr(s));
      }
      return () => {
        s.removeEventListener(Sl, u), setTimeout(() => {
          const y = new CustomEvent(Pl, Fm);
          s.addEventListener(Pl, l), s.dispatchEvent(y), y.defaultPrevented || Kr(f ?? document.body, { select: !0 }), s.removeEventListener(Pl, l), zm.remove(h);
        }, 0);
      };
    }
  }, [s, u, l, h]);
  const v = m.useCallback(
    (f) => {
      if (!r && !n || h.paused) return;
      const g = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, y = document.activeElement;
      if (g && y) {
        const w = f.currentTarget, [b, E] = eN(w);
        b && E ? !f.shiftKey && y === E ? (f.preventDefault(), r && Kr(b, { select: !0 })) : f.shiftKey && y === b && (f.preventDefault(), r && Kr(E, { select: !0 })) : y === w && f.preventDefault();
      }
    },
    [r, n, h.paused]
  );
  return /* @__PURE__ */ x(Q.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
});
Ys.displayName = Jk;
function Qk(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Kr(n, { select: t }), document.activeElement !== r) return;
}
function eN(e) {
  const t = d0(e), r = Bm(t, e), n = Bm(t.reverse(), e);
  return [r, n];
}
function d0(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Bm(e, t) {
  for (const r of e)
    if (!tN(r, { upTo: t })) return r;
}
function tN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && rN(e) && t && e.select();
  }
}
var zm = nN();
function nN() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Um(e, t), e.unshift(t);
    },
    remove(t) {
      e = Um(e, t), e[0]?.resume();
    }
  };
}
function Um(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function oN(e) {
  return e.filter((t) => t.tagName !== "A");
}
var iN = "Portal", Ei = m.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, i] = m.useState(!1);
  rt(() => i(!0), []);
  const a = r || o && globalThis?.document?.body;
  return a ? QT.createPortal(/* @__PURE__ */ x(Q.div, { ...n, ref: t }), a) : null;
});
Ei.displayName = iN;
var Ol = 0;
function Vf() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Wm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Wm()), Ol++, () => {
      Ol === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ol--;
    };
  }, []);
}
function Wm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var or = function() {
  return or = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, or.apply(this, arguments);
};
function f0(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function aN(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Da = "right-scroll-bar-position", ja = "width-before-scroll-bar", sN = "with-scroll-bars-hidden", cN = "--removed-body-scroll-bar-size";
function Al(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function lN(e, t) {
  var r = We(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var uN = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Km = /* @__PURE__ */ new WeakMap();
function dN(e, t) {
  var r = lN(null, function(n) {
    return e.forEach(function(o) {
      return Al(o, n);
    });
  });
  return uN(function() {
    var n = Km.get(r);
    if (n) {
      var o = new Set(n), i = new Set(e), a = r.current;
      o.forEach(function(s) {
        i.has(s) || Al(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Al(s, a);
      });
    }
    Km.set(r, e);
  }, [e]), r;
}
function fN(e) {
  return e;
}
function pN(e, t) {
  t === void 0 && (t = fN);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, n);
      return r.push(a), function() {
        r = r.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(i);
      }
      r = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var a = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(i), a = r;
      }
      var c = function() {
        var l = a;
        a = [], l.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), r = {
        push: function(l) {
          a.push(l), u();
        },
        filter: function(l) {
          return a = a.filter(l), r;
        }
      };
    }
  };
  return o;
}
function hN(e) {
  e === void 0 && (e = {});
  var t = pN(null);
  return t.options = or({ async: !0, ssr: !1 }, e), t;
}
var p0 = function(e) {
  var t = e.sideCar, r = f0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, or({}, r));
};
p0.isSideCarExport = !0;
function mN(e, t) {
  return e.useMedium(t), p0;
}
var h0 = hN(), Cl = function() {
}, Xs = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: Cl,
    onWheelCapture: Cl,
    onTouchMoveCapture: Cl
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, v = e.noIsolation, f = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, b = e.gapMode, E = f0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = p, P = dN([r, t]), O = or(or({}, E), o);
  return m.createElement(
    m.Fragment,
    null,
    l && m.createElement(S, { sideCar: h0, removeScrollBar: u, shards: d, noRelative: h, noIsolation: v, inert: f, setCallbacks: i, allowPinchZoom: !!g, lockRef: r, gapMode: b }),
    a ? m.cloneElement(m.Children.only(s), or(or({}, O), { ref: P })) : m.createElement(w, or({}, O, { className: c, ref: P }), s)
  );
});
Xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xs.classNames = {
  fullWidth: ja,
  zeroRight: Da
};
var vN = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vN();
  return t && e.setAttribute("nonce", t), e;
}
function yN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = gN()) && (yN(t, r), bN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, xN = function() {
  var e = wN();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, m0 = function() {
  var e = xN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, EN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tl = function(e) {
  return parseInt(e || "", 10) || 0;
}, SN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tl(r), Tl(n), Tl(o)];
}, PN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return EN;
  var t = SN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, ON = m0(), Qn = "data-scroll-locked", AN = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(sN, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Qn, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Da, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ja, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Da, " .").concat(Da, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ja, " .").concat(ja, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Qn, `] {
    `).concat(cN, ": ").concat(s, `px;
  }
`);
}, Vm = function() {
  var e = parseInt(document.body.getAttribute(Qn) || "0", 10);
  return isFinite(e) ? e : 0;
}, CN = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Qn, (Vm() + 1).toString()), function() {
      var e = Vm() - 1;
      e <= 0 ? document.body.removeAttribute(Qn) : document.body.setAttribute(Qn, e.toString());
    };
  }, []);
}, TN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  CN();
  var i = m.useMemo(function() {
    return PN(o);
  }, [o]);
  return m.createElement(ON, { styles: AN(i, !t, o, r ? "" : "!important") });
}, bd = !1;
if (typeof window < "u")
  try {
    var aa = Object.defineProperty({}, "passive", {
      get: function() {
        return bd = !0, !0;
      }
    });
    window.addEventListener("test", aa, aa), window.removeEventListener("test", aa, aa);
  } catch {
    bd = !1;
  }
var Hn = bd ? { passive: !1 } : !1, _N = function(e) {
  return e.tagName === "TEXTAREA";
}, v0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !_N(e) && r[t] === "visible")
  );
}, kN = function(e) {
  return v0(e, "overflowY");
}, NN = function(e) {
  return v0(e, "overflowX");
}, qm = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = g0(e, n);
    if (o) {
      var i = y0(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, IN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, RN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, g0 = function(e, t) {
  return e === "v" ? kN(t) : NN(t);
}, y0 = function(e, t) {
  return e === "v" ? IN(t) : RN(t);
}, MN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, DN = function(e, t, r, n, o) {
  var i = MN(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, c = t.contains(s), u = !1, l = a > 0, d = 0, p = 0;
  do {
    if (!s)
      break;
    var h = y0(e, s), v = h[0], f = h[1], g = h[2], y = f - g - i * v;
    (v || y) && g0(e, s) && (d += y, p += v);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(p) < 1) && (u = !0), u;
}, sa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hm = function(e) {
  return [e.deltaX, e.deltaY];
}, Gm = function(e) {
  return e && "current" in e ? e.current : e;
}, jN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $N = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, LN = 0, Gn = [];
function FN(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), o = m.useState(LN++)[0], i = m.useState(m0)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = aN([e.lockRef.current], (e.shards || []).map(Gm), !0).filter(Boolean);
      return f.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(f, g) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = sa(f), w = r.current, b = "deltaX" in f ? f.deltaX : w[0] - y[0], E = "deltaY" in f ? f.deltaY : w[1] - y[1], S, P = f.target, O = Math.abs(b) > Math.abs(E) ? "h" : "v";
    if ("touches" in f && O === "h" && P.type === "range")
      return !1;
    var A = qm(O, P);
    if (!A)
      return !0;
    if (A ? S = O : (S = O === "v" ? "h" : "v", A = qm(O, P)), !A)
      return !1;
    if (!n.current && "changedTouches" in f && (b || E) && (n.current = S), !S)
      return !0;
    var _ = n.current || S;
    return DN(_, g, f, _ === "h" ? b : E);
  }, []), c = m.useCallback(function(f) {
    var g = f;
    if (!(!Gn.length || Gn[Gn.length - 1] !== i)) {
      var y = "deltaY" in g ? Hm(g) : sa(g), w = t.current.filter(function(S) {
        return S.name === g.type && (S.target === g.target || g.target === S.shadowParent) && jN(S.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var b = (a.current.shards || []).map(Gm).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
        }), E = b.length > 0 ? s(g, b[0]) : !a.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(f, g, y, w) {
    var b = { name: f, delta: g, target: y, should: w, shadowParent: BN(y) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== b;
      });
    }, 1);
  }, []), l = m.useCallback(function(f) {
    r.current = sa(f), n.current = void 0;
  }, []), d = m.useCallback(function(f) {
    u(f.type, Hm(f), f.target, s(f, e.lockRef.current));
  }, []), p = m.useCallback(function(f) {
    u(f.type, sa(f), f.target, s(f, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Gn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Hn), document.addEventListener("touchmove", c, Hn), document.addEventListener("touchstart", l, Hn), function() {
      Gn = Gn.filter(function(f) {
        return f !== i;
      }), document.removeEventListener("wheel", c, Hn), document.removeEventListener("touchmove", c, Hn), document.removeEventListener("touchstart", l, Hn);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    v ? m.createElement(i, { styles: $N(o) }) : null,
    h ? m.createElement(TN, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function BN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zN = mN(h0, FN);
var Zs = m.forwardRef(function(e, t) {
  return m.createElement(Xs, or({}, e, { ref: t, sideCar: zN }));
});
Zs.classNames = Xs.classNames;
var UN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yn = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), la = {}, _l = 0, b0 = function(e) {
  return e && (e.host || b0(e.parentNode));
}, WN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = b0(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, KN = function(e, t, r, n) {
  var o = WN(t, Array.isArray(e) ? e : [e]);
  la[r] || (la[r] = /* @__PURE__ */ new WeakMap());
  var i = la[r], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        l(p);
      else
        try {
          var h = p.getAttribute(n), v = h !== null && h !== "false", f = (Yn.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          Yn.set(p, f), i.set(p, g), a.push(p), f === 1 && v && ca.set(p, !0), g === 1 && p.setAttribute(r, "true"), v || p.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return l(t), s.clear(), _l++, function() {
    a.forEach(function(d) {
      var p = Yn.get(d) - 1, h = i.get(d) - 1;
      Yn.set(d, p), i.set(d, h), p || (ca.has(d) || d.removeAttribute(n), ca.delete(d)), h || d.removeAttribute(r);
    }), _l--, _l || (Yn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), la = {});
  };
}, qf = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = UN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), KN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Js = "Dialog", [w0] = xt(Js), [VN, er] = w0(Js), x0 = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u, l] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Js
  });
  return /* @__PURE__ */ x(
    VN,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: _t(),
      titleId: _t(),
      descriptionId: _t(),
      open: u,
      onOpenChange: l,
      onOpenToggle: m.useCallback(() => l((d) => !d), [l]),
      modal: a,
      children: r
    }
  );
};
x0.displayName = Js;
var E0 = "DialogTrigger", S0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = er(E0, r), i = se(t, o.triggerRef);
    return /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yf(o.open),
        ...n,
        ref: i,
        onClick: K(e.onClick, o.onOpenToggle)
      }
    );
  }
);
S0.displayName = E0;
var Hf = "DialogPortal", [qN, P0] = w0(Hf, {
  forceMount: void 0
}), O0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, i = er(Hf, t);
  return /* @__PURE__ */ x(qN, { scope: t, forceMount: r, children: m.Children.map(n, (a) => /* @__PURE__ */ x(Mt, { present: r || i.open, children: /* @__PURE__ */ x(Ei, { asChild: !0, container: o, children: a }) })) });
};
O0.displayName = Hf;
var Ga = "DialogOverlay", A0 = m.forwardRef(
  (e, t) => {
    const r = P0(Ga, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = er(Ga, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ x(Mt, { present: n || i.open, children: /* @__PURE__ */ x(GN, { ...o, ref: t }) }) : null;
  }
);
A0.displayName = Ga;
var HN = /* @__PURE__ */ An("DialogOverlay.RemoveScroll"), GN = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = er(Ga, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ x(Zs, { as: HN, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ x(
        Q.div,
        {
          "data-state": Yf(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Cn = "DialogContent", C0 = m.forwardRef(
  (e, t) => {
    const r = P0(Cn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = er(Cn, e.__scopeDialog);
    return /* @__PURE__ */ x(Mt, { present: n || i.open, children: i.modal ? /* @__PURE__ */ x(YN, { ...o, ref: t }) : /* @__PURE__ */ x(XN, { ...o, ref: t }) });
  }
);
C0.displayName = Cn;
var YN = m.forwardRef(
  (e, t) => {
    const r = er(Cn, e.__scopeDialog), n = m.useRef(null), o = se(t, r.contentRef, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return qf(i);
    }, []), /* @__PURE__ */ x(
      T0,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: K(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: K(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: K(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), XN = m.forwardRef(
  (e, t) => {
    const r = er(Cn, e.__scopeDialog), n = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ x(
      T0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (n.current || r.triggerRef.current?.focus(), i.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          r.triggerRef.current?.contains(a) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), T0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = er(Cn, r), c = m.useRef(null), u = se(t, c);
    return Vf(), /* @__PURE__ */ V(Cr, { children: [
      /* @__PURE__ */ x(
        Ys,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ x(
            go,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Yf(s.open),
              ...a,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ V(Cr, { children: [
        /* @__PURE__ */ x(ZN, { titleId: s.titleId }),
        /* @__PURE__ */ x(QN, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Gf = "DialogTitle", _0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = er(Gf, r);
    return /* @__PURE__ */ x(Q.h2, { id: o.titleId, ...n, ref: t });
  }
);
_0.displayName = Gf;
var k0 = "DialogDescription", N0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = er(k0, r);
    return /* @__PURE__ */ x(Q.p, { id: o.descriptionId, ...n, ref: t });
  }
);
N0.displayName = k0;
var I0 = "DialogClose", R0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = er(I0, r);
    return /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: K(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
R0.displayName = I0;
function Yf(e) {
  return e ? "open" : "closed";
}
var M0 = "DialogTitleWarning", [jX, D0] = Ck(M0, {
  contentName: Cn,
  titleName: Gf,
  docsSlug: "dialog"
}), ZN = ({ titleId: e }) => {
  const t = D0(M0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, JN = "DialogDescriptionWarning", QN = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${D0(JN).contentName}}.`;
  return m.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, j0 = x0, $0 = S0, L0 = O0, Qs = A0, ec = C0, tc = _0, rc = N0, nc = R0;
const eI = j0, $X = $0, tI = L0, LX = nc, F0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  Qs,
  {
    ref: r,
    className: U(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
F0.displayName = Qs.displayName;
const rI = xi(
  "fixed left-[50%] top-[50%] z-[201] grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        full: "max-w-[95vw]"
      }
    },
    defaultVariants: {
      size: "lg"
    }
  }
), B0 = m.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ V(tI, { children: [
  /* @__PURE__ */ x(F0, {}),
  /* @__PURE__ */ V(
    ec,
    {
      ref: o,
      className: U(rI({ size: r }), e),
      ...n,
      children: [
        t,
        /* @__PURE__ */ V(nc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ x(Bf, { className: "h-4 w-4" }),
          /* @__PURE__ */ x("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
B0.displayName = ec.displayName;
const z0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: U(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
z0.displayName = "ModalHeader";
const U0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: U(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
U0.displayName = "ModalFooter";
const W0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  tc,
  {
    ref: r,
    className: U(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
W0.displayName = tc.displayName;
const K0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  rc,
  {
    ref: r,
    className: U("text-sm text-muted-foreground", e),
    ...t
  }
));
K0.displayName = rc.displayName;
const nI = m.forwardRef(
  ({
    open: e,
    onOpenChange: t,
    title: r = "Confirmar ação",
    description: n = "Tem certeza que deseja continuar?",
    confirmText: o = "Confirmar",
    cancelText: i = "Cancelar",
    onConfirm: a,
    onCancel: s,
    variant: c = "primary",
    loading: u = !1
  }, l) => /* @__PURE__ */ x(eI, { open: e, onOpenChange: t, children: /* @__PURE__ */ V(B0, { ref: l, children: [
    /* @__PURE__ */ V(z0, { children: [
      /* @__PURE__ */ x(W0, { children: r }),
      n && /* @__PURE__ */ x(K0, { children: n })
    ] }),
    /* @__PURE__ */ V(U0, { children: [
      /* @__PURE__ */ x(Ha, { variant: "outline", onClick: () => {
        s?.(), t?.(!1);
      }, disabled: u, children: i }),
      /* @__PURE__ */ x(Ha, { variant: c, onClick: () => {
        a?.();
      }, loading: u, children: o })
    ] })
  ] }) })
);
nI.displayName = "ConfirmModal";
function oc(e) {
  const t = e + "CollectionProvider", [r, n] = xt(t), [o, i] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (f) => {
    const { scope: g, children: y } = f, w = Pt.useRef(null), b = Pt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x(o, { scope: g, itemMap: b, collectionRef: w, children: y });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ An(s), u = Pt.forwardRef(
    (f, g) => {
      const { scope: y, children: w } = f, b = i(s, y), E = se(g, b.collectionRef);
      return /* @__PURE__ */ x(c, { ref: E, children: w });
    }
  );
  u.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ An(l), h = Pt.forwardRef(
    (f, g) => {
      const { scope: y, children: w, ...b } = f, E = Pt.useRef(null), S = se(g, E), P = i(l, y);
      return Pt.useEffect(() => (P.itemMap.set(E, { ref: E, ...b }), () => void P.itemMap.delete(E))), /* @__PURE__ */ x(p, { [d]: "", ref: S, children: w });
    }
  );
  h.displayName = l;
  function v(f) {
    const g = i(e + "CollectionConsumer", f);
    return Pt.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const b = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, O) => b.indexOf(P.ref.current) - b.indexOf(O.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: h },
    v,
    n
  ];
}
var oI = m.createContext(void 0);
function Si(e) {
  const t = m.useContext(oI);
  return e || t || "ltr";
}
const iI = ["top", "right", "bottom", "left"], Zr = Math.min, At = Math.max, Ya = Math.round, ua = Math.floor, sr = (e) => ({
  x: e,
  y: e
}), aI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sI = {
  start: "end",
  end: "start"
};
function wd(e, t, r) {
  return At(e, Zr(t, r));
}
function Tr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _r(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
function Xf(e) {
  return e === "x" ? "y" : "x";
}
function Zf(e) {
  return e === "y" ? "height" : "width";
}
const cI = /* @__PURE__ */ new Set(["top", "bottom"]);
function ir(e) {
  return cI.has(_r(e)) ? "y" : "x";
}
function Jf(e) {
  return Xf(ir(e));
}
function lI(e, t, r) {
  r === void 0 && (r = !1);
  const n = yo(e), o = Jf(e), i = Zf(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Xa(a)), [a, Xa(a)];
}
function uI(e) {
  const t = Xa(e);
  return [xd(e), t, xd(t)];
}
function xd(e) {
  return e.replace(/start|end/g, (t) => sI[t]);
}
const Ym = ["left", "right"], Xm = ["right", "left"], dI = ["top", "bottom"], fI = ["bottom", "top"];
function pI(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Xm : Ym : t ? Ym : Xm;
    case "left":
    case "right":
      return t ? dI : fI;
    default:
      return [];
  }
}
function hI(e, t, r, n) {
  const o = yo(e);
  let i = pI(_r(e), r === "start", n);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(xd)))), i;
}
function Xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aI[t]);
}
function mI(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function V0(e) {
  return typeof e != "number" ? mI(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Za(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Zm(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = ir(t), a = Jf(t), s = Zf(a), c = _r(t), u = i === "y", l = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, p = n[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: l,
        y: n.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: n.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (yo(t)) {
    case "start":
      h[a] -= p * (r && u ? -1 : 1);
      break;
    case "end":
      h[a] += p * (r && u ? -1 : 1);
      break;
  }
  return h;
}
const vI = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = r, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: d
  } = Zm(u, n, c), p = n, h = {}, v = 0;
  for (let f = 0; f < s.length; f++) {
    const {
      name: g,
      fn: y
    } = s[f], {
      x: w,
      y: b,
      data: E,
      reset: S
    } = await y({
      x: l,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = w ?? l, d = b ?? d, h = {
      ...h,
      [g]: {
        ...h[g],
        ...E
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: l,
      y: d
    } = Zm(u, p, c)), f = -1);
  }
  return {
    x: l,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function ti(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Tr(t, e), v = V0(h), g = s[p ? d === "floating" ? "reference" : "floating" : d], y = Za(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(g))) == null || r ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), w = d === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Za(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: b,
    strategy: c
  }) : w);
  return {
    top: (y.top - S.top + v.top) / E.y,
    bottom: (S.bottom - y.bottom + v.bottom) / E.y,
    left: (y.left - S.left + v.left) / E.x,
    right: (S.right - y.right + v.right) / E.x
  };
}
const gI = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: l = 0
    } = Tr(e, t) || {};
    if (u == null)
      return {};
    const d = V0(l), p = {
      x: r,
      y: n
    }, h = Jf(o), v = Zf(h), f = await a.getDimensions(u), g = h === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", E = i.reference[v] + i.reference[h] - p[h] - i.floating[v], S = p[h] - i.reference[h], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let O = P ? P[b] : 0;
    (!O || !await (a.isElement == null ? void 0 : a.isElement(P))) && (O = s.floating[b] || i.floating[v]);
    const A = E / 2 - S / 2, _ = O / 2 - f[v] / 2 - 1, I = Zr(d[y], _), T = Zr(d[w], _), M = I, D = O - f[v] - T, N = O / 2 - f[v] / 2 + A, z = wd(M, N, D), L = !c.arrow && yo(o) != null && N !== z && i.reference[v] / 2 - (N < M ? I : T) - f[v] / 2 < 0, B = L ? N < M ? N - M : N - D : 0;
    return {
      [h]: p[h] + B,
      data: {
        [h]: z,
        centerOffset: N - z - B,
        ...L && {
          alignmentOffset: B
        }
      },
      reset: L
    };
  }
}), yI = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: f = !0,
        ...g
      } = Tr(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const y = _r(o), w = ir(s), b = _r(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = p || (b || !f ? [Xa(s)] : uI(s)), P = v !== "none";
      !p && P && S.push(...hI(s, f, v, E));
      const O = [s, ...S], A = await ti(t, g), _ = [];
      let I = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (l && _.push(A[y]), d) {
        const N = lI(o, a, E);
        _.push(A[N[0]], A[N[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: _
      }], !_.every((N) => N <= 0)) {
        var T, M;
        const N = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, z = O[N];
        if (z && (!(d === "alignment" ? w !== ir(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((R) => ir(R.placement) === w ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: z
            }
          };
        let L = (M = I.filter((B) => B.overflows[0] <= 0).sort((B, R) => B.overflows[1] - R.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var D;
              const B = (D = I.filter((R) => {
                if (P) {
                  const F = ir(R.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((F) => F > 0).reduce((F, ee) => F + ee, 0)]).sort((R, F) => R[1] - F[1])[0]) == null ? void 0 : D[0];
              B && (L = B);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Jm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Qm(e) {
  return iI.some((t) => e[t] >= 0);
}
const bI = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Tr(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await ti(t, {
            ...o,
            elementContext: "reference"
          }), a = Jm(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Qm(a)
            }
          };
        }
        case "escaped": {
          const i = await ti(t, {
            ...o,
            altBoundary: !0
          }), a = Jm(i, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Qm(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, q0 = /* @__PURE__ */ new Set(["left", "top"]);
async function wI(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = _r(r), s = yo(r), c = ir(r) === "y", u = q0.has(a) ? -1 : 1, l = i && c ? -1 : 1, d = Tr(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), c ? {
    x: h * l,
    y: p * u
  } : {
    x: p * u,
    y: h * l
  };
}
const xI = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, c = await wI(t, e);
      return a === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, EI = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: w
            } = g;
            return {
              x: y,
              y: w
            };
          }
        },
        ...c
      } = Tr(e, t), u = {
        x: r,
        y: n
      }, l = await ti(t, c), d = ir(_r(o)), p = Xf(d);
      let h = u[p], v = u[d];
      if (i) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = h + l[g], b = h - l[y];
        h = wd(w, h, b);
      }
      if (a) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = v + l[g], b = v - l[y];
        v = wd(w, v, b);
      }
      const f = s.fn({
        ...t,
        [p]: h,
        [d]: v
      });
      return {
        ...f,
        data: {
          x: f.x - r,
          y: f.y - n,
          enabled: {
            [p]: i,
            [d]: a
          }
        }
      };
    }
  };
}, SI = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Tr(e, t), l = {
        x: r,
        y: n
      }, d = ir(o), p = Xf(d);
      let h = l[p], v = l[d];
      const f = Tr(s, t), g = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (c) {
        const b = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[b] + g.mainAxis, S = i.reference[p] + i.reference[b] - g.mainAxis;
        h < E ? h = E : h > S && (h = S);
      }
      if (u) {
        var y, w;
        const b = p === "y" ? "width" : "height", E = q0.has(_r(o)), S = i.reference[d] - i.floating[b] + (E && ((y = a.offset) == null ? void 0 : y[d]) || 0) + (E ? 0 : g.crossAxis), P = i.reference[d] + i.reference[b] + (E ? 0 : ((w = a.offset) == null ? void 0 : w[d]) || 0) - (E ? g.crossAxis : 0);
        v < S ? v = S : v > P && (v = P);
      }
      return {
        [p]: h,
        [d]: v
      };
    }
  };
}, PI = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Tr(e, t), l = await ti(t, u), d = _r(o), p = yo(o), h = ir(o) === "y", {
        width: v,
        height: f
      } = i.floating;
      let g, y;
      d === "top" || d === "bottom" ? (g = d, y = p === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = p === "end" ? "top" : "bottom");
      const w = f - l.top - l.bottom, b = v - l.left - l.right, E = Zr(f - l[g], w), S = Zr(v - l[y], b), P = !t.middlewareData.shift;
      let O = E, A = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = b), (n = t.middlewareData.shift) != null && n.enabled.y && (O = w), P && !p) {
        const I = At(l.left, 0), T = At(l.right, 0), M = At(l.top, 0), D = At(l.bottom, 0);
        h ? A = v - 2 * (I !== 0 || T !== 0 ? I + T : At(l.left, l.right)) : O = f - 2 * (M !== 0 || D !== 0 ? M + D : At(l.top, l.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: O
      });
      const _ = await a.getDimensions(s.floating);
      return v !== _.width || f !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ic() {
  return typeof window < "u";
}
function bo(e) {
  return H0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mr(e) {
  var t;
  return (t = (H0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function H0(e) {
  return ic() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function Zt(e) {
  return ic() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function ur(e) {
  return ic() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function ev(e) {
  return !ic() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
const OI = /* @__PURE__ */ new Set(["inline", "contents"]);
function Pi(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !OI.has(o);
}
const AI = /* @__PURE__ */ new Set(["table", "td", "th"]);
function CI(e) {
  return AI.has(bo(e));
}
const TI = [":popover-open", ":modal"];
function ac(e) {
  return TI.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _I = ["transform", "translate", "scale", "rotate", "perspective"], kI = ["transform", "translate", "scale", "rotate", "perspective", "filter"], NI = ["paint", "layout", "strict", "content"];
function Qf(e) {
  const t = ep(), r = Zt(e) ? Jt(e) : e;
  return _I.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || kI.some((n) => (r.willChange || "").includes(n)) || NI.some((n) => (r.contain || "").includes(n));
}
function II(e) {
  let t = Jr(e);
  for (; ur(t) && !oo(t); ) {
    if (Qf(t))
      return t;
    if (ac(t))
      return null;
    t = Jr(t);
  }
  return null;
}
function ep() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const RI = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function oo(e) {
  return RI.has(bo(e));
}
function Jt(e) {
  return kt(e).getComputedStyle(e);
}
function sc(e) {
  return Zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jr(e) {
  if (bo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ev(e) && e.host || // Fallback.
    mr(e)
  );
  return ev(t) ? t.host : t;
}
function G0(e) {
  const t = Jr(e);
  return oo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ur(t) && Pi(t) ? t : G0(t);
}
function ri(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = G0(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(o);
  if (i) {
    const s = Ed(a);
    return t.concat(a, a.visualViewport || [], Pi(o) ? o : [], s && r ? ri(s) : []);
  }
  return t.concat(o, ri(o, [], r));
}
function Ed(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Y0(e) {
  const t = Jt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ur(e), i = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, s = Ya(r) !== i || Ya(n) !== a;
  return s && (r = i, n = a), {
    width: r,
    height: n,
    $: s
  };
}
function tp(e) {
  return Zt(e) ? e : e.contextElement;
}
function eo(e) {
  const t = tp(e);
  if (!ur(t))
    return sr(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Y0(t);
  let a = (i ? Ya(r.width) : r.width) / n, s = (i ? Ya(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const MI = /* @__PURE__ */ sr(0);
function X0(e) {
  const t = kt(e);
  return !ep() || !t.visualViewport ? MI : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function DI(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== kt(e) ? !1 : t;
}
function Tn(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = tp(e);
  let a = sr(1);
  t && (n ? Zt(n) && (a = eo(n)) : a = eo(e));
  const s = DI(i, r, n) ? X0(i) : sr(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, l = o.width / a.x, d = o.height / a.y;
  if (i) {
    const p = kt(i), h = n && Zt(n) ? kt(n) : n;
    let v = p, f = Ed(v);
    for (; f && n && h !== v; ) {
      const g = eo(f), y = f.getBoundingClientRect(), w = Jt(f), b = y.left + (f.clientLeft + parseFloat(w.paddingLeft)) * g.x, E = y.top + (f.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, u *= g.y, l *= g.x, d *= g.y, c += b, u += E, v = kt(f), f = Ed(v);
    }
  }
  return Za({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function cc(e, t) {
  const r = sc(e).scrollLeft;
  return t ? t.left + r : Tn(mr(e)).left + r;
}
function Z0(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - cc(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function jI(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const i = o === "fixed", a = mr(n), s = t ? ac(t.floating) : !1;
  if (n === a || s && i)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = sr(1);
  const l = sr(0), d = ur(n);
  if ((d || !d && !i) && ((bo(n) !== "body" || Pi(a)) && (c = sc(n)), ur(n))) {
    const h = Tn(n);
    u = eo(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const p = a && !d && !i ? Z0(a, c) : sr(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + l.x + p.x,
    y: r.y * u.y - c.scrollTop * u.y + l.y + p.y
  };
}
function $I(e) {
  return Array.from(e.getClientRects());
}
function LI(e) {
  const t = mr(e), r = sc(e), n = e.ownerDocument.body, o = At(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = At(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + cc(e);
  const s = -r.scrollTop;
  return Jt(n).direction === "rtl" && (a += At(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const tv = 25;
function FI(e, t) {
  const r = kt(e), n = mr(e), o = r.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = ep();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = cc(n);
  if (u <= 0) {
    const l = n.ownerDocument, d = l.body, p = getComputedStyle(d), h = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(n.clientWidth - d.clientWidth - h);
    v <= tv && (i -= v);
  } else u <= tv && (i += u);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const BI = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function zI(e, t) {
  const r = Tn(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = ur(e) ? eo(e) : sr(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = n * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function rv(e, t, r) {
  let n;
  if (t === "viewport")
    n = FI(e, r);
  else if (t === "document")
    n = LI(mr(e));
  else if (Zt(t))
    n = zI(t, r);
  else {
    const o = X0(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Za(n);
}
function J0(e, t) {
  const r = Jr(e);
  return r === t || !Zt(r) || oo(r) ? !1 : Jt(r).position === "fixed" || J0(r, t);
}
function UI(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ri(e, [], !1).filter((s) => Zt(s) && bo(s) !== "body"), o = null;
  const i = Jt(e).position === "fixed";
  let a = i ? Jr(e) : e;
  for (; Zt(a) && !oo(a); ) {
    const s = Jt(a), c = Qf(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && BI.has(o.position) || Pi(a) && !c && J0(e, a)) ? n = n.filter((l) => l !== a) : o = s, a = Jr(a);
  }
  return t.set(e, n), n;
}
function WI(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? ac(t) ? [] : UI(t, this._c) : [].concat(r), n], s = a[0], c = a.reduce((u, l) => {
    const d = rv(t, l, o);
    return u.top = At(d.top, u.top), u.right = Zr(d.right, u.right), u.bottom = Zr(d.bottom, u.bottom), u.left = At(d.left, u.left), u;
  }, rv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function KI(e) {
  const {
    width: t,
    height: r
  } = Y0(e);
  return {
    width: t,
    height: r
  };
}
function VI(e, t, r) {
  const n = ur(t), o = mr(t), i = r === "fixed", a = Tn(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = sr(0);
  function u() {
    c.x = cc(o);
  }
  if (n || !n && !i)
    if ((bo(t) !== "body" || Pi(o)) && (s = sc(t)), n) {
      const h = Tn(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && u();
  i && !n && o && u();
  const l = o && !n && !i ? Z0(o, s) : sr(0), d = a.left + s.scrollLeft - c.x - l.x, p = a.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: a.width,
    height: a.height
  };
}
function kl(e) {
  return Jt(e).position === "static";
}
function nv(e, t) {
  if (!ur(e) || Jt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return mr(e) === r && (r = r.ownerDocument.body), r;
}
function Q0(e, t) {
  const r = kt(e);
  if (ac(e))
    return r;
  if (!ur(e)) {
    let o = Jr(e);
    for (; o && !oo(o); ) {
      if (Zt(o) && !kl(o))
        return o;
      o = Jr(o);
    }
    return r;
  }
  let n = nv(e, t);
  for (; n && CI(n) && kl(n); )
    n = nv(n, t);
  return n && oo(n) && kl(n) && !Qf(n) ? r : n || II(e) || r;
}
const qI = async function(e) {
  const t = this.getOffsetParent || Q0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: VI(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function HI(e) {
  return Jt(e).direction === "rtl";
}
const GI = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jI,
  getDocumentElement: mr,
  getClippingRect: WI,
  getOffsetParent: Q0,
  getElementRects: qI,
  getClientRects: $I,
  getDimensions: KI,
  getScale: eo,
  isElement: Zt,
  isRTL: HI
};
function ex(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function YI(e, t) {
  let r = null, n;
  const o = mr(e);
  function i() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const u = e.getBoundingClientRect(), {
      left: l,
      top: d,
      width: p,
      height: h
    } = u;
    if (s || t(), !p || !h)
      return;
    const v = ua(d), f = ua(o.clientWidth - (l + p)), g = ua(o.clientHeight - (d + h)), y = ua(l), b = {
      rootMargin: -v + "px " + -f + "px " + -g + "px " + -y + "px",
      threshold: At(0, Zr(1, c)) || 1
    };
    let E = !0;
    function S(P) {
      const O = P[0].intersectionRatio;
      if (O !== c) {
        if (!E)
          return a();
        O ? a(!1, O) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !ex(u, e.getBoundingClientRect()) && a(), E = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, b);
    }
    r.observe(e);
  }
  return a(!0), i;
}
function XI(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, u = tp(e), l = o || i ? [...u ? ri(u) : [], ...ri(t)] : [];
  l.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), i && y.addEventListener("resize", r);
  });
  const d = u && s ? YI(u, r) : null;
  let p = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), r();
  }), u && !c && h.observe(u), h.observe(t));
  let v, f = c ? Tn(e) : null;
  c && g();
  function g() {
    const y = Tn(e);
    f && !ex(f, y) && r(), f = y, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var y;
    l.forEach((w) => {
      o && w.removeEventListener("scroll", r), i && w.removeEventListener("resize", r);
    }), d?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const ZI = xI, JI = EI, QI = yI, eR = PI, tR = bI, ov = gI, rR = SI, nR = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: GI,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return vI(e, t, {
    ...o,
    platform: i
  });
};
var oR = typeof document < "u", iR = function() {
}, $a = oR ? lr : iR;
function Ja(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Ja(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !Ja(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tx(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function iv(e, t) {
  const r = tx(e);
  return Math.round(t * r) / r;
}
function Nl(e) {
  const t = m.useRef(e);
  return $a(() => {
    t.current = e;
  }), t;
}
function aR(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: u
  } = e, [l, d] = m.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = m.useState(n);
  Ja(p, n) || h(n);
  const [v, f] = m.useState(null), [g, y] = m.useState(null), w = m.useCallback((R) => {
    R !== P.current && (P.current = R, f(R));
  }, []), b = m.useCallback((R) => {
    R !== O.current && (O.current = R, y(R));
  }, []), E = i || v, S = a || g, P = m.useRef(null), O = m.useRef(null), A = m.useRef(l), _ = c != null, I = Nl(c), T = Nl(o), M = Nl(u), D = m.useCallback(() => {
    if (!P.current || !O.current)
      return;
    const R = {
      placement: t,
      strategy: r,
      middleware: p
    };
    T.current && (R.platform = T.current), nR(P.current, O.current, R).then((F) => {
      const ee = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      N.current && !Ja(A.current, ee) && (A.current = ee, wi.flushSync(() => {
        d(ee);
      }));
    });
  }, [p, t, r, T, M]);
  $a(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const N = m.useRef(!1);
  $a(() => (N.current = !0, () => {
    N.current = !1;
  }), []), $a(() => {
    if (E && (P.current = E), S && (O.current = S), E && S) {
      if (I.current)
        return I.current(E, S, D);
      D();
    }
  }, [E, S, D, I, _]);
  const z = m.useMemo(() => ({
    reference: P,
    floating: O,
    setReference: w,
    setFloating: b
  }), [w, b]), L = m.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), B = m.useMemo(() => {
    const R = {
      position: r,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return R;
    const F = iv(L.floating, l.x), ee = iv(L.floating, l.y);
    return s ? {
      ...R,
      transform: "translate(" + F + "px, " + ee + "px)",
      ...tx(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: ee
    };
  }, [r, s, L.floating, l.x, l.y]);
  return m.useMemo(() => ({
    ...l,
    update: D,
    refs: z,
    elements: L,
    floatingStyles: B
  }), [l, D, z, L, B]);
}
const sR = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? ov({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? ov({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, cR = (e, t) => ({
  ...ZI(e),
  options: [e, t]
}), lR = (e, t) => ({
  ...JI(e),
  options: [e, t]
}), uR = (e, t) => ({
  ...rR(e),
  options: [e, t]
}), dR = (e, t) => ({
  ...QI(e),
  options: [e, t]
}), fR = (e, t) => ({
  ...eR(e),
  options: [e, t]
}), pR = (e, t) => ({
  ...tR(e),
  options: [e, t]
}), hR = (e, t) => ({
  ...sR(e),
  options: [e, t]
});
var mR = "Arrow", rx = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ x(
    Q.svg,
    {
      ...i,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ x("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
rx.displayName = mR;
var vR = rx, rp = "Popper", [nx, wo] = xt(rp), [gR, ox] = nx(rp), ix = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = m.useState(null);
  return /* @__PURE__ */ x(gR, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ix.displayName = rp;
var ax = "PopperAnchor", sx = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, i = ox(ax, r), a = m.useRef(null), s = se(t, a), c = m.useRef(null);
    return m.useEffect(() => {
      const u = c.current;
      c.current = n?.current || a.current, u !== c.current && i.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ x(Q.div, { ...o, ref: s });
  }
);
sx.displayName = ax;
var np = "PopperContent", [yR, bR] = nx(np), cx = m.forwardRef(
  (e, t) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: l = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...f
    } = e, g = ox(np, r), [y, w] = m.useState(null), b = se(t, (W) => w(W)), [E, S] = m.useState(null), P = Hs(E), O = P?.width ?? 0, A = P?.height ?? 0, _ = n + (i !== "center" ? "-" + i : ""), I = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, T = Array.isArray(u) ? u : [u], M = T.length > 0, D = {
      padding: I,
      boundary: T.filter(xR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: N, floatingStyles: z, placement: L, isPositioned: B, middlewareData: R } = aR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...W) => XI(...W, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        cR({ mainAxis: o + A, alignmentAxis: a }),
        c && lR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? uR() : void 0,
          ...D
        }),
        c && dR({ ...D }),
        fR({
          ...D,
          apply: ({ elements: W, rects: fe, availableWidth: j, availableHeight: q }) => {
            const { width: J, height: $ } = fe.reference, Ee = W.floating.style;
            Ee.setProperty("--radix-popper-available-width", `${j}px`), Ee.setProperty("--radix-popper-available-height", `${q}px`), Ee.setProperty("--radix-popper-anchor-width", `${J}px`), Ee.setProperty("--radix-popper-anchor-height", `${$}px`);
          }
        }),
        E && hR({ element: E, padding: s }),
        ER({ arrowWidth: O, arrowHeight: A }),
        p && pR({ strategy: "referenceHidden", ...D })
      ]
    }), [F, ee] = dx(L), ie = pt(v);
    rt(() => {
      B && ie?.();
    }, [B, ie]);
    const ne = R.arrow?.x, te = R.arrow?.y, oe = R.arrow?.centerOffset !== 0, [ue, je] = m.useState();
    return rt(() => {
      y && je(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ x(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: B ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x(
          yR,
          {
            scope: r,
            placedSide: F,
            onArrowChange: S,
            arrowX: ne,
            arrowY: te,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ x(
              Q.div,
              {
                "data-side": F,
                "data-align": ee,
                ...f,
                ref: b,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: B ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
cx.displayName = np;
var lx = "PopperArrow", wR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ux = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, i = bR(lx, n), a = wR[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ x(
          vR,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ux.displayName = lx;
function xR(e) {
  return e !== null;
}
var ER = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, l] = dx(r), d = { start: "0%", center: "50%", end: "100%" }[l], p = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", f = "";
    return u === "bottom" ? (v = a ? d : `${p}px`, f = `${-c}px`) : u === "top" ? (v = a ? d : `${p}px`, f = `${n.floating.height + c}px`) : u === "right" ? (v = `${-c}px`, f = a ? d : `${h}px`) : u === "left" && (v = `${n.floating.width + c}px`, f = a ? d : `${h}px`), { data: { x: v, y: f } };
  }
});
function dx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var lc = ix, op = sx, ip = cx, ap = ux, Il = "rovingFocusGroup.onEntryFocus", SR = { bubbles: !1, cancelable: !0 }, Oi = "RovingFocusGroup", [Sd, fx, PR] = oc(Oi), [OR, xo] = xt(
  Oi,
  [PR]
), [AR, CR] = OR(Oi), px = m.forwardRef(
  (e, t) => /* @__PURE__ */ x(Sd.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(Sd.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(TR, { ...e, ref: t }) }) })
);
px.displayName = Oi;
var TR = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: l = !1,
    ...d
  } = e, p = m.useRef(null), h = se(t, p), v = Si(i), [f, g] = Kt({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: Oi
  }), [y, w] = m.useState(!1), b = pt(u), E = fx(r), S = m.useRef(!1), [P, O] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(Il, b), () => A.removeEventListener(Il, b);
  }, [b]), /* @__PURE__ */ x(
    AR,
    {
      scope: r,
      orientation: n,
      dir: v,
      loop: o,
      currentTabStopId: f,
      onItemFocus: m.useCallback(
        (A) => g(A),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => w(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => O((A) => A + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => O((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ x(
        Q.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": n,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: K(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: K(e.onFocus, (A) => {
            const _ = !S.current;
            if (A.target === A.currentTarget && _ && !y) {
              const I = new CustomEvent(Il, SR);
              if (A.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const T = E().filter((L) => L.focusable), M = T.find((L) => L.active), D = T.find((L) => L.id === f), z = [M, D, ...T].filter(
                  Boolean
                ).map((L) => L.ref.current);
                vx(z, l);
              }
            }
            S.current = !1;
          }),
          onBlur: K(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), hx = "RovingFocusGroupItem", mx = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, c = _t(), u = i || c, l = CR(hx, r), d = l.currentTabStopId === u, p = fx(r), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: f } = l;
    return m.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ x(
      Sd.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ x(
          Q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": l.orientation,
            ...s,
            ref: t,
            onMouseDown: K(e.onMouseDown, (g) => {
              n ? l.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: K(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: K(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = NR(g, l.orientation, l.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let b = p().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") b.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && b.reverse();
                  const E = b.indexOf(g.currentTarget);
                  b = l.loop ? IR(b, E + 1) : b.slice(E + 1);
                }
                setTimeout(() => vx(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: f != null }) : a
          }
        )
      }
    );
  }
);
mx.displayName = hx;
var _R = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function kR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function NR(e, t, r) {
  const n = kR(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return _R[n];
}
function vx(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function IR(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var sp = px, cp = mx, Pd = ["Enter", " "], RR = ["ArrowDown", "PageUp", "Home"], gx = ["ArrowUp", "PageDown", "End"], MR = [...RR, ...gx], DR = {
  ltr: [...Pd, "ArrowRight"],
  rtl: [...Pd, "ArrowLeft"]
}, jR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ai = "Menu", [ni, $R, LR] = oc(Ai), [Un, yx] = xt(Ai, [
  LR,
  wo,
  xo
]), Ci = wo(), bx = xo(), [wx, rn] = Un(Ai), [FR, Ti] = Un(Ai), xx = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Ci(t), [c, u] = m.useState(null), l = m.useRef(!1), d = pt(i), p = Si(o);
  return m.useEffect(() => {
    const h = () => {
      l.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => l.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ x(lc, { ...s, children: /* @__PURE__ */ x(
    wx,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ x(
        FR,
        {
          scope: t,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: l,
          dir: p,
          modal: a,
          children: n
        }
      )
    }
  ) });
};
xx.displayName = Ai;
var BR = "MenuAnchor", lp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ci(r);
    return /* @__PURE__ */ x(op, { ...o, ...n, ref: t });
  }
);
lp.displayName = BR;
var up = "MenuPortal", [zR, Ex] = Un(up, {
  forceMount: void 0
}), Sx = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, i = rn(up, t);
  return /* @__PURE__ */ x(zR, { scope: t, forceMount: r, children: /* @__PURE__ */ x(Mt, { present: r || i.open, children: /* @__PURE__ */ x(Ei, { asChild: !0, container: o, children: n }) }) });
};
Sx.displayName = up;
var Wt = "MenuContent", [UR, dp] = Un(Wt), Px = m.forwardRef(
  (e, t) => {
    const r = Ex(Wt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, i = rn(Wt, e.__scopeMenu), a = Ti(Wt, e.__scopeMenu);
    return /* @__PURE__ */ x(ni.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ x(Mt, { present: n || i.open, children: /* @__PURE__ */ x(ni.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ x(WR, { ...o, ref: t }) : /* @__PURE__ */ x(KR, { ...o, ref: t }) }) }) });
  }
), WR = m.forwardRef(
  (e, t) => {
    const r = rn(Wt, e.__scopeMenu), n = m.useRef(null), o = se(t, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return qf(i);
    }, []), /* @__PURE__ */ x(
      fp,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: K(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), KR = m.forwardRef((e, t) => {
  const r = rn(Wt, e.__scopeMenu);
  return /* @__PURE__ */ x(
    fp,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), VR = /* @__PURE__ */ An("MenuContent.ScrollLock"), fp = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: v,
      ...f
    } = e, g = rn(Wt, r), y = Ti(Wt, r), w = Ci(r), b = bx(r), E = $R(r), [S, P] = m.useState(null), O = m.useRef(null), A = se(t, O, g.onContentChange), _ = m.useRef(0), I = m.useRef(""), T = m.useRef(0), M = m.useRef(null), D = m.useRef("right"), N = m.useRef(0), z = v ? Zs : m.Fragment, L = v ? { as: VR, allowPinchZoom: !0 } : void 0, B = (F) => {
      const ee = I.current + F, ie = E().filter((W) => !W.disabled), ne = document.activeElement, te = ie.find((W) => W.ref.current === ne)?.textValue, oe = ie.map((W) => W.textValue), ue = nM(oe, ee, te), je = ie.find((W) => W.textValue === ue)?.ref.current;
      (function W(fe) {
        I.current = fe, window.clearTimeout(_.current), fe !== "" && (_.current = window.setTimeout(() => W(""), 1e3));
      })(ee), je && setTimeout(() => je.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), Vf();
    const R = m.useCallback((F) => D.current === M.current?.side && iM(F, M.current?.area), []);
    return /* @__PURE__ */ x(
      UR,
      {
        scope: r,
        searchRef: I,
        onItemEnter: m.useCallback(
          (F) => {
            R(F) && F.preventDefault();
          },
          [R]
        ),
        onItemLeave: m.useCallback(
          (F) => {
            R(F) || (O.current?.focus(), P(null));
          },
          [R]
        ),
        onTriggerLeave: m.useCallback(
          (F) => {
            R(F) && F.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: m.useCallback((F) => {
          M.current = F;
        }, []),
        children: /* @__PURE__ */ x(z, { ...L, children: /* @__PURE__ */ x(
          Ys,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: K(i, (F) => {
              F.preventDefault(), O.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ x(
              go,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ x(
                  sp,
                  {
                    asChild: !0,
                    ...b,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: K(c, (F) => {
                      y.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ x(
                      ip,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": zx(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...f,
                        ref: A,
                        style: { outline: "none", ...f.style },
                        onKeyDown: K(f.onKeyDown, (F) => {
                          const ie = F.target.closest("[data-radix-menu-content]") === F.currentTarget, ne = F.ctrlKey || F.altKey || F.metaKey, te = F.key.length === 1;
                          ie && (F.key === "Tab" && F.preventDefault(), !ne && te && B(F.key));
                          const oe = O.current;
                          if (F.target !== oe || !MR.includes(F.key)) return;
                          F.preventDefault();
                          const je = E().filter((W) => !W.disabled).map((W) => W.ref.current);
                          gx.includes(F.key) && je.reverse(), tM(je);
                        }),
                        onBlur: K(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(_.current), I.current = "");
                        }),
                        onPointerMove: K(
                          e.onPointerMove,
                          oi((F) => {
                            const ee = F.target, ie = N.current !== F.clientX;
                            if (F.currentTarget.contains(ee) && ie) {
                              const ne = F.clientX > N.current ? "right" : "left";
                              D.current = ne, N.current = F.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Px.displayName = Wt;
var qR = "MenuGroup", pp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ x(Q.div, { role: "group", ...n, ref: t });
  }
);
pp.displayName = qR;
var HR = "MenuLabel", Ox = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ x(Q.div, { ...n, ref: t });
  }
);
Ox.displayName = HR;
var Qa = "MenuItem", av = "menu.itemSelect", uc = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, i = m.useRef(null), a = Ti(Qa, e.__scopeMenu), s = dp(Qa, e.__scopeMenu), c = se(t, i), u = m.useRef(!1), l = () => {
      const d = i.current;
      if (!r && d) {
        const p = new CustomEvent(av, { bubbles: !0, cancelable: !0 });
        d.addEventListener(av, (h) => n?.(h), { once: !0 }), Uf(d, p), p.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ x(
      Ax,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: K(e.onClick, l),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), u.current = !0;
        },
        onPointerUp: K(e.onPointerUp, (d) => {
          u.current || d.currentTarget?.click();
        }),
        onKeyDown: K(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          r || p && d.key === " " || Pd.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
uc.displayName = Qa;
var Ax = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...i } = e, a = dp(Qa, r), s = bx(r), c = m.useRef(null), u = se(t, c), [l, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const v = c.current;
      v && h((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ x(
      ni.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? p,
        children: /* @__PURE__ */ x(cp, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ x(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: K(
              e.onPointerMove,
              oi((v) => {
                n ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: K(
              e.onPointerLeave,
              oi((v) => a.onItemLeave(v))
            ),
            onFocus: K(e.onFocus, () => d(!0)),
            onBlur: K(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), GR = "MenuCheckboxItem", Cx = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ x(Ix, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ x(
      uc,
      {
        role: "menuitemcheckbox",
        "aria-checked": es(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": vp(r),
        onSelect: K(
          o.onSelect,
          () => n?.(es(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Cx.displayName = GR;
var Tx = "MenuRadioGroup", [YR, XR] = Un(
  Tx,
  { value: void 0, onValueChange: () => {
  } }
), _x = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, i = pt(n);
    return /* @__PURE__ */ x(YR, { scope: e.__scopeMenu, value: r, onValueChange: i, children: /* @__PURE__ */ x(pp, { ...o, ref: t }) });
  }
);
_x.displayName = Tx;
var kx = "MenuRadioItem", Nx = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = XR(kx, e.__scopeMenu), i = r === o.value;
    return /* @__PURE__ */ x(Ix, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ x(
      uc,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: t,
        "data-state": vp(i),
        onSelect: K(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nx.displayName = kx;
var hp = "MenuItemIndicator", [Ix, ZR] = Un(
  hp,
  { checked: !1 }
), Rx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, i = ZR(hp, r);
    return /* @__PURE__ */ x(
      Mt,
      {
        present: n || es(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ x(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": vp(i.checked)
          }
        )
      }
    );
  }
);
Rx.displayName = hp;
var JR = "MenuSeparator", Mx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ x(
      Q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Mx.displayName = JR;
var QR = "MenuArrow", Dx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ci(r);
    return /* @__PURE__ */ x(ap, { ...o, ...n, ref: t });
  }
);
Dx.displayName = QR;
var mp = "MenuSub", [eM, jx] = Un(mp), $x = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, i = rn(mp, t), a = Ci(t), [s, c] = m.useState(null), [u, l] = m.useState(null), d = pt(o);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ x(lc, { ...a, children: /* @__PURE__ */ x(
    wx,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: u,
      onContentChange: l,
      children: /* @__PURE__ */ x(
        eM,
        {
          scope: t,
          contentId: _t(),
          triggerId: _t(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
$x.displayName = mp;
var Ho = "MenuSubTrigger", Lx = m.forwardRef(
  (e, t) => {
    const r = rn(Ho, e.__scopeMenu), n = Ti(Ho, e.__scopeMenu), o = jx(Ho, e.__scopeMenu), i = dp(Ho, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, l = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => l, [l]), m.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ x(lp, { asChild: !0, ...u, children: /* @__PURE__ */ x(
      Ax,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": zx(r.open),
        ...e,
        ref: Ks(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: K(
          e.onPointerMove,
          oi((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !r.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: K(
          e.onPointerLeave,
          oi((d) => {
            l();
            const p = r.content?.getBoundingClientRect();
            if (p) {
              const h = r.content?.dataset.side, v = h === "right", f = v ? -5 : 5, g = p[v ? "left" : "right"], y = p[v ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + f, y: d.clientY },
                  { x: g, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: g, y: p.bottom }
                ],
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: K(e.onKeyDown, (d) => {
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || DR[n.dir].includes(d.key) && (r.onOpenChange(!0), r.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Lx.displayName = Ho;
var Fx = "MenuSubContent", Bx = m.forwardRef(
  (e, t) => {
    const r = Ex(Wt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, i = rn(Wt, e.__scopeMenu), a = Ti(Wt, e.__scopeMenu), s = jx(Fx, e.__scopeMenu), c = m.useRef(null), u = se(t, c);
    return /* @__PURE__ */ x(ni.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ x(Mt, { present: n || i.open, children: /* @__PURE__ */ x(ni.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ x(
      fp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: K(e.onFocusOutside, (l) => {
          l.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: K(e.onEscapeKeyDown, (l) => {
          a.onClose(), l.preventDefault();
        }),
        onKeyDown: K(e.onKeyDown, (l) => {
          const d = l.currentTarget.contains(l.target), p = jR[a.dir].includes(l.key);
          d && p && (i.onOpenChange(!1), s.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Bx.displayName = Fx;
function zx(e) {
  return e ? "open" : "closed";
}
function es(e) {
  return e === "indeterminate";
}
function vp(e) {
  return es(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function tM(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function rM(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function nM(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = rM(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== r));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function oM(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function iM(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return oM(r, t);
}
function oi(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var aM = xx, sM = lp, cM = Sx, lM = Px, uM = pp, dM = Ox, fM = uc, pM = Cx, hM = _x, mM = Nx, vM = Rx, gM = Mx, yM = Dx, bM = $x, wM = Lx, xM = Bx, dc = "DropdownMenu", [EM] = xt(
  dc,
  [yx]
), lt = yx(), [SM, Ux] = EM(dc), Wx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = lt(t), u = m.useRef(null), [l, d] = Kt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: dc
  });
  return /* @__PURE__ */ x(
    SM,
    {
      scope: t,
      triggerId: _t(),
      triggerRef: u,
      contentId: _t(),
      open: l,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ x(aM, { ...c, open: l, onOpenChange: d, dir: n, modal: s, children: r })
    }
  );
};
Wx.displayName = dc;
var Kx = "DropdownMenuTrigger", Vx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, i = Ux(Kx, r), a = lt(r);
    return /* @__PURE__ */ x(sM, { asChild: !0, ...a, children: /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: Ks(t, i.triggerRef),
        onPointerDown: K(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: K(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Vx.displayName = Kx;
var PM = "DropdownMenuPortal", qx = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = lt(t);
  return /* @__PURE__ */ x(cM, { ...n, ...r });
};
qx.displayName = PM;
var Hx = "DropdownMenuContent", Gx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Ux(Hx, r), i = lt(r), a = m.useRef(!1);
    return /* @__PURE__ */ x(
      lM,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...n,
        ref: t,
        onCloseAutoFocus: K(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: K(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || u;
          (!o.modal || l) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Gx.displayName = Hx;
var OM = "DropdownMenuGroup", Yx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ x(uM, { ...o, ...n, ref: t });
  }
);
Yx.displayName = OM;
var AM = "DropdownMenuLabel", Xx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ x(dM, { ...o, ...n, ref: t });
  }
);
Xx.displayName = AM;
var CM = "DropdownMenuItem", Zx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ x(fM, { ...o, ...n, ref: t });
  }
);
Zx.displayName = CM;
var TM = "DropdownMenuCheckboxItem", Jx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(pM, { ...o, ...n, ref: t });
});
Jx.displayName = TM;
var _M = "DropdownMenuRadioGroup", Qx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(hM, { ...o, ...n, ref: t });
});
Qx.displayName = _M;
var kM = "DropdownMenuRadioItem", eE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(mM, { ...o, ...n, ref: t });
});
eE.displayName = kM;
var NM = "DropdownMenuItemIndicator", tE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(vM, { ...o, ...n, ref: t });
});
tE.displayName = NM;
var IM = "DropdownMenuSeparator", rE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(gM, { ...o, ...n, ref: t });
});
rE.displayName = IM;
var RM = "DropdownMenuArrow", MM = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ x(yM, { ...o, ...n, ref: t });
  }
);
MM.displayName = RM;
var DM = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: i } = e, a = lt(t), [s, c] = Kt({
    prop: n,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ x(bM, { ...a, open: s, onOpenChange: c, children: r });
}, jM = "DropdownMenuSubTrigger", nE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(wM, { ...o, ...n, ref: t });
});
nE.displayName = jM;
var $M = "DropdownMenuSubContent", oE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ x(
    xM,
    {
      ...o,
      ...n,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
oE.displayName = $M;
var LM = Wx, FM = Vx, iE = qx, aE = Gx, BM = Yx, sE = Xx, cE = Zx, lE = Jx, zM = Qx, uE = eE, dE = tE, fE = rE, UM = DM, pE = nE, hE = oE;
const WM = LM, KM = FM, FX = BM, BX = iE, zX = UM, UX = zM, VM = m.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ V(
  pE,
  {
    ref: o,
    className: U(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ x(Ff, { className: "ml-auto h-4 w-4" })
    ]
  }
));
VM.displayName = pE.displayName;
const qM = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  hE,
  {
    ref: r,
    className: U(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
qM.displayName = hE.displayName;
const mE = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ x(iE, { children: /* @__PURE__ */ x(
  aE,
  {
    ref: n,
    sideOffset: t,
    className: U(
      "z-[110] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
mE.displayName = aE.displayName;
const vE = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ x(
  cE,
  {
    ref: n,
    className: U(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
vE.displayName = cE.displayName;
const HM = m.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ V(
  lE,
  {
    ref: o,
    className: U(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ x("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ x(dE, { children: /* @__PURE__ */ x(Lf, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
HM.displayName = lE.displayName;
const GM = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ V(
  uE,
  {
    ref: n,
    className: U(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ x("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ x(dE, { children: /* @__PURE__ */ x(Ww, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
GM.displayName = uE.displayName;
const YM = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ x(
  sE,
  {
    ref: n,
    className: U(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
YM.displayName = sE.displayName;
const gE = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  fE,
  {
    ref: r,
    className: U("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
gE.displayName = fE.displayName;
const XM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "span",
  {
    className: U("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
XM.displayName = "DropdownShortcut";
function sv(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var yE = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), ZM = "VisuallyHidden", fc = m.forwardRef(
  (e, t) => /* @__PURE__ */ x(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...yE, ...e.style }
    }
  )
);
fc.displayName = ZM;
var JM = fc, QM = [" ", "Enter", "ArrowUp", "ArrowDown"], eD = [" ", "Enter"], _n = "Select", [pc, hc, tD] = oc(_n), [Eo] = xt(_n, [
  tD,
  wo
]), mc = wo(), [rD, nn] = Eo(_n), [nD, oD] = Eo(_n), bE = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: l,
    autoComplete: d,
    disabled: p,
    required: h,
    form: v
  } = e, f = mc(t), [g, y] = m.useState(null), [w, b] = m.useState(null), [E, S] = m.useState(!1), P = Si(u), [O, A] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: i,
    caller: _n
  }), [_, I] = Kt({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: _n
  }), T = m.useRef(null), M = g ? v || !!g.closest("form") : !0, [D, N] = m.useState(/* @__PURE__ */ new Set()), z = Array.from(D).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ x(lc, { ...f, children: /* @__PURE__ */ V(
    rD,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: b,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: S,
      contentId: _t(),
      value: _,
      onValueChange: I,
      open: O,
      onOpenChange: A,
      dir: P,
      triggerPointerDownPosRef: T,
      disabled: p,
      children: [
        /* @__PURE__ */ x(pc.Provider, { scope: t, children: /* @__PURE__ */ x(
          nD,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((L) => {
              N((B) => new Set(B).add(L));
            }, []),
            onNativeOptionRemove: m.useCallback((L) => {
              N((B) => {
                const R = new Set(B);
                return R.delete(L), R;
              });
            }, []),
            children: r
          }
        ) }),
        M ? /* @__PURE__ */ V(
          KE,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: l,
            autoComplete: d,
            value: _,
            onChange: (L) => I(L.target.value),
            disabled: p,
            form: v,
            children: [
              _ === void 0 ? /* @__PURE__ */ x("option", { value: "" }) : null,
              Array.from(D)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
bE.displayName = _n;
var wE = "SelectTrigger", xE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, i = mc(r), a = nn(wE, r), s = a.disabled || n, c = se(t, a.onTriggerChange), u = hc(r), l = m.useRef("touch"), [d, p, h] = qE((f) => {
      const g = u().filter((b) => !b.disabled), y = g.find((b) => b.value === a.value), w = HE(g, f, y);
      w !== void 0 && a.onValueChange(w.value);
    }), v = (f) => {
      s || (a.onOpenChange(!0), h()), f && (a.triggerPointerDownPosRef.current = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      });
    };
    return /* @__PURE__ */ x(op, { asChild: !0, ...i, children: /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": VE(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: K(o.onClick, (f) => {
          f.currentTarget.focus(), l.current !== "mouse" && v(f);
        }),
        onPointerDown: K(o.onPointerDown, (f) => {
          l.current = f.pointerType;
          const g = f.target;
          g.hasPointerCapture(f.pointerId) && g.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (v(f), f.preventDefault());
        }),
        onKeyDown: K(o.onKeyDown, (f) => {
          const g = d.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && p(f.key), !(g && f.key === " ") && QM.includes(f.key) && (v(), f.preventDefault());
        })
      }
    ) });
  }
);
xE.displayName = wE;
var EE = "SelectValue", SE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: i, placeholder: a = "", ...s } = e, c = nn(EE, r), { onValueNodeHasChildrenChange: u } = c, l = i !== void 0, d = se(t, c.onValueNodeChange);
    return rt(() => {
      u(l);
    }, [u, l]), /* @__PURE__ */ x(
      Q.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: VE(c.value) ? /* @__PURE__ */ x(Cr, { children: a }) : i
      }
    );
  }
);
SE.displayName = EE;
var iD = "SelectIcon", PE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ x(Q.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
PE.displayName = iD;
var aD = "SelectPortal", OE = (e) => /* @__PURE__ */ x(Ei, { asChild: !0, ...e });
OE.displayName = aD;
var kn = "SelectContent", AE = m.forwardRef(
  (e, t) => {
    const r = nn(kn, e.__scopeSelect), [n, o] = m.useState();
    if (rt(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const i = n;
      return i ? wi.createPortal(
        /* @__PURE__ */ x(CE, { scope: e.__scopeSelect, children: /* @__PURE__ */ x(pc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ x("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ x(TE, { ...e, ref: t });
  }
);
AE.displayName = kn;
var Yt = 10, [CE, on] = Eo(kn), sD = "SelectContentImpl", cD = /* @__PURE__ */ An("SelectContent.RemoveScroll"), TE = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: l,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: f,
      avoidCollisions: g,
      //
      ...y
    } = e, w = nn(kn, r), [b, E] = m.useState(null), [S, P] = m.useState(null), O = se(t, (W) => E(W)), [A, _] = m.useState(null), [I, T] = m.useState(
      null
    ), M = hc(r), [D, N] = m.useState(!1), z = m.useRef(!1);
    m.useEffect(() => {
      if (b) return qf(b);
    }, [b]), Vf();
    const L = m.useCallback(
      (W) => {
        const [fe, ...j] = M().map(($) => $.ref.current), [q] = j.slice(-1), J = document.activeElement;
        for (const $ of W)
          if ($ === J || ($?.scrollIntoView({ block: "nearest" }), $ === fe && S && (S.scrollTop = 0), $ === q && S && (S.scrollTop = S.scrollHeight), $?.focus(), document.activeElement !== J)) return;
      },
      [M, S]
    ), B = m.useCallback(
      () => L([A, b]),
      [L, A, b]
    );
    m.useEffect(() => {
      D && B();
    }, [D, B]);
    const { onOpenChange: R, triggerPointerDownPosRef: F } = w;
    m.useEffect(() => {
      if (b) {
        let W = { x: 0, y: 0 };
        const fe = (q) => {
          W = {
            x: Math.abs(Math.round(q.pageX) - (F.current?.x ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (F.current?.y ?? 0))
          };
        }, j = (q) => {
          W.x <= 10 && W.y <= 10 ? q.preventDefault() : b.contains(q.target) || R(!1), document.removeEventListener("pointermove", fe), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", fe), document.addEventListener("pointerup", j, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", fe), document.removeEventListener("pointerup", j, { capture: !0 });
        };
      }
    }, [b, R, F]), m.useEffect(() => {
      const W = () => R(!1);
      return window.addEventListener("blur", W), window.addEventListener("resize", W), () => {
        window.removeEventListener("blur", W), window.removeEventListener("resize", W);
      };
    }, [R]);
    const [ee, ie] = qE((W) => {
      const fe = M().filter((J) => !J.disabled), j = fe.find((J) => J.ref.current === document.activeElement), q = HE(fe, W, j);
      q && setTimeout(() => q.ref.current.focus());
    }), ne = m.useCallback(
      (W, fe, j) => {
        const q = !z.current && !j;
        (w.value !== void 0 && w.value === fe || q) && (_(W), q && (z.current = !0));
      },
      [w.value]
    ), te = m.useCallback(() => b?.focus(), [b]), oe = m.useCallback(
      (W, fe, j) => {
        const q = !z.current && !j;
        (w.value !== void 0 && w.value === fe || q) && T(W);
      },
      [w.value]
    ), ue = n === "popper" ? Od : _E, je = ue === Od ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: l,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: f,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ x(
      CE,
      {
        scope: r,
        content: b,
        viewport: S,
        onViewportChange: P,
        itemRefCallback: ne,
        selectedItem: A,
        onItemLeave: te,
        itemTextRefCallback: oe,
        focusSelectedItem: B,
        selectedItemText: I,
        position: n,
        isPositioned: D,
        searchRef: ee,
        children: /* @__PURE__ */ x(Zs, { as: cD, allowPinchZoom: !0, children: /* @__PURE__ */ x(
          Ys,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (W) => {
              W.preventDefault();
            },
            onUnmountAutoFocus: K(o, (W) => {
              w.trigger?.focus({ preventScroll: !0 }), W.preventDefault();
            }),
            children: /* @__PURE__ */ x(
              go,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (W) => W.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ x(
                  ue,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (W) => W.preventDefault(),
                    ...y,
                    ...je,
                    onPlaced: () => N(!0),
                    ref: O,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: K(y.onKeyDown, (W) => {
                      const fe = W.ctrlKey || W.altKey || W.metaKey;
                      if (W.key === "Tab" && W.preventDefault(), !fe && W.key.length === 1 && ie(W.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(W.key)) {
                        let q = M().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(W.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(W.key)) {
                          const J = W.target, $ = q.indexOf(J);
                          q = q.slice($ + 1);
                        }
                        setTimeout(() => L(q)), W.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
TE.displayName = sD;
var lD = "SelectItemAlignedPosition", _E = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, i = nn(kn, r), a = on(kn, r), [s, c] = m.useState(null), [u, l] = m.useState(null), d = se(t, (O) => l(O)), p = hc(r), h = m.useRef(!1), v = m.useRef(!0), { viewport: f, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = a, b = m.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && f && g && y) {
      const O = i.trigger.getBoundingClientRect(), A = u.getBoundingClientRect(), _ = i.valueNode.getBoundingClientRect(), I = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const J = I.left - A.left, $ = _.left - J, Ee = O.left - $, de = O.width + Ee, Je = Math.max(de, A.width), Qe = window.innerWidth - Yt, Gt = sv($, [
          Yt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Yt, Qe - Je)
        ]);
        s.style.minWidth = de + "px", s.style.left = Gt + "px";
      } else {
        const J = A.right - I.right, $ = window.innerWidth - _.right - J, Ee = window.innerWidth - O.right - $, de = O.width + Ee, Je = Math.max(de, A.width), Qe = window.innerWidth - Yt, Gt = sv($, [
          Yt,
          Math.max(Yt, Qe - Je)
        ]);
        s.style.minWidth = de + "px", s.style.right = Gt + "px";
      }
      const T = p(), M = window.innerHeight - Yt * 2, D = f.scrollHeight, N = window.getComputedStyle(u), z = parseInt(N.borderTopWidth, 10), L = parseInt(N.paddingTop, 10), B = parseInt(N.borderBottomWidth, 10), R = parseInt(N.paddingBottom, 10), F = z + L + D + R + B, ee = Math.min(g.offsetHeight * 5, F), ie = window.getComputedStyle(f), ne = parseInt(ie.paddingTop, 10), te = parseInt(ie.paddingBottom, 10), oe = O.top + O.height / 2 - Yt, ue = M - oe, je = g.offsetHeight / 2, W = g.offsetTop + je, fe = z + L + W, j = F - fe;
      if (fe <= oe) {
        const J = T.length > 0 && g === T[T.length - 1].ref.current;
        s.style.bottom = "0px";
        const $ = u.clientHeight - f.offsetTop - f.offsetHeight, Ee = Math.max(
          ue,
          je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? te : 0) + $ + B
        ), de = fe + Ee;
        s.style.height = de + "px";
      } else {
        const J = T.length > 0 && g === T[0].ref.current;
        s.style.top = "0px";
        const Ee = Math.max(
          oe,
          z + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? ne : 0) + je
        ) + j;
        s.style.height = Ee + "px", f.scrollTop = fe - oe + f.offsetTop;
      }
      s.style.margin = `${Yt}px 0`, s.style.minHeight = ee + "px", s.style.maxHeight = M + "px", n?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    s,
    u,
    f,
    g,
    y,
    i.dir,
    n
  ]);
  rt(() => b(), [b]);
  const [E, S] = m.useState();
  rt(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = m.useCallback(
    (O) => {
      O && v.current === !0 && (b(), w?.(), v.current = !1);
    },
    [b, w]
  );
  return /* @__PURE__ */ x(
    dD,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ x(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ x(
            Q.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
_E.displayName = lD;
var uD = "SelectPopperPosition", Od = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Yt,
    ...i
  } = e, a = mc(r);
  return /* @__PURE__ */ x(
    ip,
    {
      ...a,
      ...i,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Od.displayName = uD;
var [dD, gp] = Eo(kn, {}), Ad = "SelectViewport", kE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, i = on(Ad, r), a = gp(Ad, r), s = se(t, i.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ V(Cr, { children: [
      /* @__PURE__ */ x(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ x(pc.Slot, { scope: r, children: /* @__PURE__ */ x(
        Q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: K(o.onScroll, (u) => {
            const l = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = a;
            if (p?.current && d) {
              const h = Math.abs(c.current - l.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - Yt * 2, f = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(f, g);
                if (y < v) {
                  const w = y + h, b = Math.min(v, w), E = w - b;
                  d.style.height = b + "px", d.style.bottom === "0px" && (l.scrollTop = E > 0 ? E : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = l.scrollTop;
          })
        }
      ) })
    ] });
  }
);
kE.displayName = Ad;
var NE = "SelectGroup", [fD, pD] = Eo(NE), IE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = _t();
    return /* @__PURE__ */ x(fD, { scope: r, id: o, children: /* @__PURE__ */ x(Q.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
IE.displayName = NE;
var RE = "SelectLabel", ME = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = pD(RE, r);
    return /* @__PURE__ */ x(Q.div, { id: o.id, ...n, ref: t });
  }
);
ME.displayName = RE;
var ts = "SelectItem", [hD, DE] = Eo(ts), jE = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = nn(ts, r), c = on(ts, r), u = s.value === n, [l, d] = m.useState(i ?? ""), [p, h] = m.useState(!1), v = se(
      t,
      (w) => c.itemRefCallback?.(w, n, o)
    ), f = _t(), g = m.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ x(
      hD,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: f,
        isSelected: u,
        onItemTextChange: m.useCallback((w) => {
          d((b) => b || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ x(
          pc.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: l,
            children: /* @__PURE__ */ x(
              Q.div,
              {
                role: "option",
                "aria-labelledby": f,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: K(a.onFocus, () => h(!0)),
                onBlur: K(a.onBlur, () => h(!1)),
                onClick: K(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: K(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: K(a.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: K(a.onPointerMove, (w) => {
                  g.current = w.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: K(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: K(a.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (eD.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
jE.displayName = ts;
var Go = "SelectItemText", $E = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...i } = e, a = nn(Go, r), s = on(Go, r), c = DE(Go, r), u = oD(Go, r), [l, d] = m.useState(null), p = se(
      t,
      (y) => d(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = l?.textContent, v = m.useMemo(
      () => /* @__PURE__ */ x("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: g } = u;
    return rt(() => (f(v), () => g(v)), [f, g, v]), /* @__PURE__ */ V(Cr, { children: [
      /* @__PURE__ */ x(Q.span, { id: c.textId, ...i, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? wi.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
$E.displayName = Go;
var LE = "SelectItemIndicator", FE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return DE(LE, r).isSelected ? /* @__PURE__ */ x(Q.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
FE.displayName = LE;
var Cd = "SelectScrollUpButton", BE = m.forwardRef((e, t) => {
  const r = on(Cd, e.__scopeSelect), n = gp(Cd, e.__scopeSelect), [o, i] = m.useState(!1), a = se(t, n.onScrollButtonChange);
  return rt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ x(
    UE,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
BE.displayName = Cd;
var Td = "SelectScrollDownButton", zE = m.forwardRef((e, t) => {
  const r = on(Td, e.__scopeSelect), n = gp(Td, e.__scopeSelect), [o, i] = m.useState(!1), a = se(t, n.onScrollButtonChange);
  return rt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, l = Math.ceil(c.scrollTop) < u;
        i(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ x(
    UE,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
zE.displayName = Td;
var UE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, i = on("SelectScrollButton", r), a = m.useRef(null), s = hc(r), c = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), rt(() => {
    s().find((l) => l.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ x(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: K(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: K(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: K(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), mD = "SelectSeparator", WE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ x(Q.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
WE.displayName = mD;
var _d = "SelectArrow", vD = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = mc(r), i = nn(_d, r), a = on(_d, r);
    return i.open && a.position === "popper" ? /* @__PURE__ */ x(ap, { ...o, ...n, ref: t }) : null;
  }
);
vD.displayName = _d;
var gD = "SelectBubbleInput", KE = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = m.useRef(null), i = se(n, o), a = qs(t);
    return m.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, l = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && l) {
        const d = new Event("change", { bubbles: !0 });
        l.call(s, t), s.dispatchEvent(d);
      }
    }, [a, t]), /* @__PURE__ */ x(
      Q.select,
      {
        ...r,
        style: { ...yE, ...r.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
KE.displayName = gD;
function VE(e) {
  return e === "" || e === void 0;
}
function qE(e) {
  const t = pt(e), r = m.useRef(""), n = m.useRef(0), o = m.useCallback(
    (a) => {
      const s = r.current + a;
      t(s), (function c(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [t]
  ), i = m.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i];
}
function HE(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = yD(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== r));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function yD(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var bD = bE, GE = xE, wD = SE, xD = PE, ED = OE, YE = AE, SD = kE, PD = IE, XE = ME, ZE = jE, OD = $E, AD = FE, JE = BE, QE = zE, eS = WE;
const CD = bD, WX = PD, TD = wD, tS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ V(
  GE,
  {
    ref: n,
    className: U(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ x(xD, { asChild: !0, children: /* @__PURE__ */ x(Vs, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
tS.displayName = GE.displayName;
const rS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  JE,
  {
    ref: r,
    className: U(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ x(x_, { className: "h-4 w-4" })
  }
));
rS.displayName = JE.displayName;
const nS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  QE,
  {
    ref: r,
    className: U(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ x(Vs, { className: "h-4 w-4" })
  }
));
nS.displayName = QE.displayName;
const oS = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ x(ED, { children: /* @__PURE__ */ V(
  YE,
  {
    ref: o,
    className: U(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ x(rS, {}),
      /* @__PURE__ */ x(
        SD,
        {
          className: U(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ x(nS, {})
    ]
  }
) }));
oS.displayName = YE.displayName;
const _D = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  XE,
  {
    ref: r,
    className: U("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
_D.displayName = XE.displayName;
const iS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ V(
  ZE,
  {
    ref: n,
    className: U(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ x("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ x(AD, { children: /* @__PURE__ */ x(Lf, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ x(OD, { children: t })
    ]
  }
));
iS.displayName = ZE.displayName;
const kD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  eS,
  {
    ref: r,
    className: U("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kD.displayName = eS.displayName;
const ND = m.forwardRef(
  ({
    options: e,
    value: t,
    onValueChange: r,
    placeholder: n = "Selecione uma opção",
    searchPlaceholder: o = "Pesquisar...",
    disabled: i,
    className: a,
    emptyMessage: s = "Nenhum resultado encontrado"
  }, c) => {
    const [u, l] = m.useState(""), [d, p] = m.useState(!1), h = m.useMemo(() => {
      if (!u) return e;
      const v = u.toLowerCase();
      return e.filter(
        (f) => f.label.toLowerCase().includes(v)
      );
    }, [e, u]);
    return m.useEffect(() => {
      d || l("");
    }, [d]), /* @__PURE__ */ V(
      CD,
      {
        value: t,
        onValueChange: r,
        disabled: i,
        open: d,
        onOpenChange: p,
        children: [
          /* @__PURE__ */ x(tS, { ref: c, className: a, children: /* @__PURE__ */ x(TD, { placeholder: n }) }),
          /* @__PURE__ */ V(oS, { children: [
            /* @__PURE__ */ V("div", { className: "flex items-center border-b px-3 pb-2", children: [
              /* @__PURE__ */ x(M_, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
              /* @__PURE__ */ x(
                e0,
                {
                  placeholder: o,
                  value: u,
                  onChange: (v) => l(v.target.value),
                  className: "h-8 border-0 shadow-none focus-visible:ring-0 px-0 bg-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ x("div", { className: "max-h-[300px] overflow-auto", children: h.length === 0 ? /* @__PURE__ */ x("div", { className: "py-6 text-center text-sm text-muted-foreground", children: s }) : h.map((v) => /* @__PURE__ */ x(iS, { value: v.value, children: v.label }, v.value)) })
          ] })
        ]
      }
    );
  }
);
ND.displayName = "SearchableSelect";
var yp = "Radio", [ID, aS] = xt(yp), [RD, MD] = ID(yp), sS = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: i,
      disabled: a,
      value: s = "on",
      onCheck: c,
      form: u,
      ...l
    } = e, [d, p] = m.useState(null), h = se(t, (g) => p(g)), v = m.useRef(!1), f = d ? u || !!d.closest("form") : !0;
    return /* @__PURE__ */ V(RD, { scope: r, checked: o, disabled: a, children: [
      /* @__PURE__ */ x(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": dS(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: s,
          ...l,
          ref: h,
          onClick: K(e.onClick, (g) => {
            o || c?.(), f && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      f && /* @__PURE__ */ x(
        uS,
        {
          control: d,
          bubbles: !v.current,
          name: n,
          value: s,
          checked: o,
          required: i,
          disabled: a,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
sS.displayName = yp;
var cS = "RadioIndicator", lS = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, i = MD(cS, r);
    return /* @__PURE__ */ x(Mt, { present: n || i.checked, children: /* @__PURE__ */ x(
      Q.span,
      {
        "data-state": dS(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
lS.displayName = cS;
var DD = "RadioBubbleInput", uS = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = se(a, i), c = qs(r), u = Hs(t);
    return m.useEffect(() => {
      const l = a.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(l, r), l.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ x(
      Q.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
uS.displayName = DD;
function dS(e) {
  return e ? "checked" : "unchecked";
}
var jD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], vc = "RadioGroup", [$D] = xt(vc, [
  xo,
  aS
]), fS = xo(), pS = aS(), [LD, FD] = $D(vc), hS = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: i,
      required: a = !1,
      disabled: s = !1,
      orientation: c,
      dir: u,
      loop: l = !0,
      onValueChange: d,
      ...p
    } = e, h = fS(r), v = Si(u), [f, g] = Kt({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: vc
    });
    return /* @__PURE__ */ x(
      LD,
      {
        scope: r,
        name: n,
        required: a,
        disabled: s,
        value: f,
        onValueChange: g,
        children: /* @__PURE__ */ x(
          sp,
          {
            asChild: !0,
            ...h,
            orientation: c,
            dir: v,
            loop: l,
            children: /* @__PURE__ */ x(
              Q.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": s ? "" : void 0,
                dir: v,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
hS.displayName = vc;
var mS = "RadioGroupItem", vS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, i = FD(mS, r), a = i.disabled || n, s = fS(r), c = pS(r), u = m.useRef(null), l = se(t, u), d = i.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (f) => {
        jD.includes(f.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ x(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !a,
        active: d,
        children: /* @__PURE__ */ x(
          sS,
          {
            disabled: a,
            required: i.required,
            checked: d,
            ...c,
            ...o,
            name: i.name,
            ref: l,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: K((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: K(o.onFocus, () => {
              p.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
vS.displayName = mS;
var BD = "RadioGroupIndicator", gS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = pS(r);
    return /* @__PURE__ */ x(lS, { ...o, ...n, ref: t });
  }
);
gS.displayName = BD;
var yS = hS, bS = vS, zD = gS;
const UD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  yS,
  {
    className: U("grid gap-2", e),
    ...t,
    ref: r
  }
));
UD.displayName = yS.displayName;
const WD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  bS,
  {
    ref: r,
    className: U(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ x(zD, { className: "flex items-center justify-center", children: /* @__PURE__ */ x(Ww, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
WD.displayName = bS.displayName;
var gc = "Switch", [KD] = xt(gc), [VD, qD] = KD(gc), wS = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c = "on",
      onCheckedChange: u,
      form: l,
      ...d
    } = e, [p, h] = m.useState(null), v = se(t, (b) => h(b)), f = m.useRef(!1), g = p ? l || !!p.closest("form") : !0, [y, w] = Kt({
      prop: o,
      defaultProp: i ?? !1,
      onChange: u,
      caller: gc
    });
    return /* @__PURE__ */ V(VD, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ x(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": a,
          "data-state": PS(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: v,
          onClick: K(e.onClick, (b) => {
            w((E) => !E), g && (f.current = b.isPropagationStopped(), f.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ x(
        SS,
        {
          control: p,
          bubbles: !f.current,
          name: n,
          value: c,
          checked: y,
          required: a,
          disabled: s,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
wS.displayName = gc;
var xS = "SwitchThumb", ES = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = qD(xS, r);
    return /* @__PURE__ */ x(
      Q.span,
      {
        "data-state": PS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
ES.displayName = xS;
var HD = "SwitchBubbleInput", SS = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = se(a, i), c = qs(r), u = Hs(t);
    return m.useEffect(() => {
      const l = a.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(l, r), l.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ x(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SS.displayName = HD;
function PS(e) {
  return e ? "checked" : "unchecked";
}
var OS = wS, GD = ES;
const YD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  OS,
  {
    className: U(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ x(
      GD,
      {
        className: U(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
YD.displayName = OS.displayName;
var yc = "Tabs", [XD] = xt(yc, [
  xo
]), AS = xo(), [ZD, bp] = XD(yc), CS = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: i,
      orientation: a = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...u
    } = e, l = Si(s), [d, p] = Kt({
      prop: n,
      onChange: o,
      defaultProp: i ?? "",
      caller: yc
    });
    return /* @__PURE__ */ x(
      ZD,
      {
        scope: r,
        baseId: _t(),
        value: d,
        onValueChange: p,
        orientation: a,
        dir: l,
        activationMode: c,
        children: /* @__PURE__ */ x(
          Q.div,
          {
            dir: l,
            "data-orientation": a,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
CS.displayName = yc;
var TS = "TabsList", _S = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, i = bp(TS, r), a = AS(r);
    return /* @__PURE__ */ x(
      sp,
      {
        asChild: !0,
        ...a,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ x(
          Q.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
_S.displayName = TS;
var kS = "TabsTrigger", NS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...i } = e, a = bp(kS, r), s = AS(r), c = MS(a.baseId, n), u = DS(a.baseId, n), l = n === a.value;
    return /* @__PURE__ */ x(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: l,
        children: /* @__PURE__ */ x(
          Q.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": u,
            "data-state": l ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...i,
            ref: t,
            onMouseDown: K(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(n) : d.preventDefault();
            }),
            onKeyDown: K(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && a.onValueChange(n);
            }),
            onFocus: K(e.onFocus, () => {
              const d = a.activationMode !== "manual";
              !l && !o && d && a.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
NS.displayName = kS;
var IS = "TabsContent", RS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: i, ...a } = e, s = bp(IS, r), c = MS(s.baseId, n), u = DS(s.baseId, n), l = n === s.value, d = m.useRef(l);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ x(Mt, { present: o || l, children: ({ present: p }) => /* @__PURE__ */ x(
      Q.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !p,
        id: u,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: p && i
      }
    ) });
  }
);
RS.displayName = IS;
function MS(e, t) {
  return `${e}-trigger-${t}`;
}
function DS(e, t) {
  return `${e}-content-${t}`;
}
var JD = CS, jS = _S, $S = NS, LS = RS;
const KX = JD, QD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  jS,
  {
    ref: r,
    className: U(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
QD.displayName = jS.displayName;
const ej = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  $S,
  {
    ref: r,
    className: U(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
ej.displayName = $S.displayName;
const tj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  LS,
  {
    ref: r,
    className: U(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
tj.displayName = LS.displayName;
var wp = "ToastProvider", [xp, rj, nj] = oc("Toast"), [FS] = xt("Toast", [nj]), [oj, bc] = FS(wp), BS = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: i = 50,
    children: a
  } = e, [s, c] = m.useState(null), [u, l] = m.useState(0), d = m.useRef(!1), p = m.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${wp}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ x(xp.Provider, { scope: t, children: /* @__PURE__ */ x(
    oj,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: i,
      toastCount: u,
      viewport: s,
      onViewportChange: c,
      onToastAdd: m.useCallback(() => l((h) => h + 1), []),
      onToastRemove: m.useCallback(() => l((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: p,
      children: a
    }
  ) });
};
BS.displayName = wp;
var zS = "ToastViewport", ij = ["F8"], kd = "toast.viewportPause", Nd = "toast.viewportResume", US = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = ij,
      label: o = "Notifications ({hotkey})",
      ...i
    } = e, a = bc(zS, r), s = rj(r), c = m.useRef(null), u = m.useRef(null), l = m.useRef(null), d = m.useRef(null), p = se(t, d, a.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
    m.useEffect(() => {
      const g = (y) => {
        n.length !== 0 && n.every((b) => y[b] || y.code === b) && d.current?.focus();
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), m.useEffect(() => {
      const g = c.current, y = d.current;
      if (v && g && y) {
        const w = () => {
          if (!a.isClosePausedRef.current) {
            const P = new CustomEvent(kd);
            y.dispatchEvent(P), a.isClosePausedRef.current = !0;
          }
        }, b = () => {
          if (a.isClosePausedRef.current) {
            const P = new CustomEvent(Nd);
            y.dispatchEvent(P), a.isClosePausedRef.current = !1;
          }
        }, E = (P) => {
          !g.contains(P.relatedTarget) && b();
        }, S = () => {
          g.contains(document.activeElement) || b();
        };
        return g.addEventListener("focusin", w), g.addEventListener("focusout", E), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", b), () => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", E), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", b);
        };
      }
    }, [v, a.isClosePausedRef]);
    const f = m.useCallback(
      ({ tabbingDirection: g }) => {
        const w = s().map((b) => {
          const E = b.ref.current, S = [E, ...yj(E)];
          return g === "forwards" ? S : S.reverse();
        });
        return (g === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return m.useEffect(() => {
      const g = d.current;
      if (g) {
        const y = (w) => {
          const b = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !b) {
            const S = document.activeElement, P = w.shiftKey;
            if (w.target === g && P) {
              u.current?.focus();
              return;
            }
            const _ = f({ tabbingDirection: P ? "backwards" : "forwards" }), I = _.findIndex((T) => T === S);
            Rl(_.slice(I + 1)) ? w.preventDefault() : P ? u.current?.focus() : l.current?.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, f]), /* @__PURE__ */ V(
      Zk,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ x(
            Id,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = f({
                  tabbingDirection: "forwards"
                });
                Rl(g);
              }
            }
          ),
          /* @__PURE__ */ x(xp.Slot, { scope: r, children: /* @__PURE__ */ x(Q.ol, { tabIndex: -1, ...i, ref: p }) }),
          v && /* @__PURE__ */ x(
            Id,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = f({
                  tabbingDirection: "backwards"
                });
                Rl(g);
              }
            }
          )
        ]
      }
    );
  }
);
US.displayName = zS;
var WS = "ToastFocusProxy", Id = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, i = bc(WS, r);
    return /* @__PURE__ */ x(
      fc,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          const s = a.relatedTarget;
          !i.viewport?.contains(s) && n();
        }
      }
    );
  }
);
Id.displayName = WS;
var _i = "Toast", aj = "toast.swipeStart", sj = "toast.swipeMove", cj = "toast.swipeCancel", lj = "toast.swipeEnd", KS = m.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: i, ...a } = e, [s, c] = Kt({
      prop: n,
      defaultProp: o ?? !0,
      onChange: i,
      caller: _i
    });
    return /* @__PURE__ */ x(Mt, { present: r || s, children: /* @__PURE__ */ x(
      fj,
      {
        open: s,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: pt(e.onPause),
        onResume: pt(e.onResume),
        onSwipeStart: K(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: K(e.onSwipeMove, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: K(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: K(e.onSwipeEnd, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
KS.displayName = _i;
var [uj, dj] = FS(_i, {
  onClose() {
  }
}), fj = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: i,
      onClose: a,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: u,
      onSwipeStart: l,
      onSwipeMove: d,
      onSwipeCancel: p,
      onSwipeEnd: h,
      ...v
    } = e, f = bc(_i, r), [g, y] = m.useState(null), w = se(t, (N) => y(N)), b = m.useRef(null), E = m.useRef(null), S = o || f.duration, P = m.useRef(0), O = m.useRef(S), A = m.useRef(0), { onToastAdd: _, onToastRemove: I } = f, T = pt(() => {
      g?.contains(document.activeElement) && f.viewport?.focus(), a();
    }), M = m.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(A.current), P.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(T, N));
      },
      [T]
    );
    m.useEffect(() => {
      const N = f.viewport;
      if (N) {
        const z = () => {
          M(O.current), u?.();
        }, L = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - P.current;
          O.current = O.current - B, window.clearTimeout(A.current), c?.();
        };
        return N.addEventListener(kd, L), N.addEventListener(Nd, z), () => {
          N.removeEventListener(kd, L), N.removeEventListener(Nd, z);
        };
      }
    }, [f.viewport, S, c, u, M]), m.useEffect(() => {
      i && !f.isClosePausedRef.current && M(S);
    }, [i, S, f.isClosePausedRef, M]), m.useEffect(() => (_(), () => I()), [_, I]);
    const D = m.useMemo(() => g ? ZS(g) : null, [g]);
    return f.viewport ? /* @__PURE__ */ V(Cr, { children: [
      D && /* @__PURE__ */ x(
        pj,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: D
        }
      ),
      /* @__PURE__ */ x(uj, { scope: r, onClose: T, children: wi.createPortal(
        /* @__PURE__ */ x(xp.ItemSlot, { scope: r, children: /* @__PURE__ */ x(
          Xk,
          {
            asChild: !0,
            onEscapeKeyDown: K(s, () => {
              f.isFocusedToastEscapeKeyDownRef.current || T(), f.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ x(
              Q.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": f.swipeDirection,
                ...v,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: K(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s?.(N.nativeEvent), N.nativeEvent.defaultPrevented || (f.isFocusedToastEscapeKeyDownRef.current = !0, T()));
                }),
                onPointerDown: K(e.onPointerDown, (N) => {
                  N.button === 0 && (b.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: K(e.onPointerMove, (N) => {
                  if (!b.current) return;
                  const z = N.clientX - b.current.x, L = N.clientY - b.current.y, B = !!E.current, R = ["left", "right"].includes(f.swipeDirection), F = ["left", "up"].includes(f.swipeDirection) ? Math.min : Math.max, ee = R ? F(0, z) : 0, ie = R ? 0 : F(0, L), ne = N.pointerType === "touch" ? 10 : 2, te = { x: ee, y: ie }, oe = { originalEvent: N, delta: te };
                  B ? (E.current = te, da(sj, d, oe, {
                    discrete: !1
                  })) : cv(te, f.swipeDirection, ne) ? (E.current = te, da(aj, l, oe, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(z) > ne || Math.abs(L) > ne) && (b.current = null);
                }),
                onPointerUp: K(e.onPointerUp, (N) => {
                  const z = E.current, L = N.target;
                  if (L.hasPointerCapture(N.pointerId) && L.releasePointerCapture(N.pointerId), E.current = null, b.current = null, z) {
                    const B = N.currentTarget, R = { originalEvent: N, delta: z };
                    cv(z, f.swipeDirection, f.swipeThreshold) ? da(lj, h, R, {
                      discrete: !0
                    }) : da(
                      cj,
                      p,
                      R,
                      {
                        discrete: !0
                      }
                    ), B.addEventListener("click", (F) => F.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        f.viewport
      ) })
    ] }) : null;
  }
), pj = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = bc(_i, t), [i, a] = m.useState(!1), [s, c] = m.useState(!1);
  return vj(() => a(!0)), m.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ x(Ei, { asChild: !0, children: /* @__PURE__ */ x(fc, { ...n, children: i && /* @__PURE__ */ V(Cr, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, hj = "ToastTitle", VS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ x(Q.div, { ...n, ref: t });
  }
);
VS.displayName = hj;
var mj = "ToastDescription", qS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ x(Q.div, { ...n, ref: t });
  }
);
qS.displayName = mj;
var HS = "ToastAction", GS = m.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ x(XS, { altText: r, asChild: !0, children: /* @__PURE__ */ x(Ep, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${HS}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
GS.displayName = HS;
var YS = "ToastClose", Ep = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = dj(YS, r);
    return /* @__PURE__ */ x(XS, { asChild: !0, children: /* @__PURE__ */ x(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: K(e.onClick, o.onClose)
      }
    ) });
  }
);
Ep.displayName = YS;
var XS = m.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ x(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function ZS(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), gj(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", i = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (i) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...ZS(n));
    }
  }), t;
}
function da(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, i) : o.dispatchEvent(i);
}
var cv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), i = n > o;
  return t === "left" || t === "right" ? i && n > r : !i && o > r;
};
function vj(e = () => {
}) {
  const t = pt(e);
  rt(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function gj(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function yj(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Rl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var bj = BS, JS = US, QS = KS, eP = VS, tP = qS, rP = GS, nP = Ep;
const wj = bj, oP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  JS,
  {
    ref: r,
    className: U(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
oP.displayName = JS.displayName;
const xj = xi(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        success: "border-success bg-success text-success-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
        warning: "border-warning bg-warning text-warning-foreground",
        info: "border-info bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), iP = m.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ x(
  QS,
  {
    ref: n,
    className: U(xj({ variant: t }), e),
    ...r
  }
));
iP.displayName = QS.displayName;
const Ej = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  rP,
  {
    ref: r,
    className: U(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
Ej.displayName = rP.displayName;
const aP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  nP,
  {
    ref: r,
    className: U(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ x(Bf, { className: "h-4 w-4" })
  }
));
aP.displayName = nP.displayName;
const sP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  eP,
  {
    ref: r,
    className: U("text-sm font-semibold [&+div]:text-xs", e),
    ...t
  }
));
sP.displayName = eP.displayName;
const cP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  tP,
  {
    ref: r,
    className: U("text-sm opacity-90", e),
    ...t
  }
));
cP.displayName = tP.displayName;
const Sj = 1, Pj = 1e6;
let Ml = 0;
function Oj() {
  return Ml = (Ml + 1) % Number.MAX_SAFE_INTEGER, Ml.toString();
}
const Dl = /* @__PURE__ */ new Map(), lv = (e) => {
  if (Dl.has(e))
    return;
  const t = setTimeout(() => {
    Dl.delete(e), Jo({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Pj);
  Dl.set(e, t);
}, Aj = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Sj)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t.toast.id ? { ...r, ...t.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? lv(r) : e.toasts.forEach((n) => {
        lv(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, La = [];
let Fa = { toasts: [] };
function Jo(e) {
  Fa = Aj(Fa, e), La.forEach((t) => {
    t(Fa);
  });
}
function Rd({ ...e }) {
  const t = Oj(), r = (o) => Jo({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => Jo({ type: "DISMISS_TOAST", toastId: t });
  return Jo({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
function Cj() {
  const [e, t] = m.useState(Fa);
  return m.useEffect(() => (La.push(t), () => {
    const r = La.indexOf(t);
    r > -1 && La.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Rd,
    dismiss: (r) => Jo({ type: "DISMISS_TOAST", toastId: r })
  };
}
function VX() {
  const { toasts: e } = Cj();
  return /* @__PURE__ */ V(wj, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...i }) {
      return /* @__PURE__ */ V(iP, { ...i, children: [
        /* @__PURE__ */ V("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ x(sP, { children: r }),
          n && /* @__PURE__ */ x(cP, { children: n })
        ] }),
        o,
        /* @__PURE__ */ x(aP, {})
      ] }, t);
    }),
    /* @__PURE__ */ x(oP, {})
  ] });
}
var [wc] = xt("Tooltip", [
  wo
]), xc = wo(), lP = "TooltipProvider", Tj = 700, Md = "tooltip.open", [_j, Sp] = wc(lP), uP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Tj,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = m.useRef(!0), s = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(
    _j,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: r,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: m.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
uP.displayName = lP;
var ii = "Tooltip", [kj, Ec] = wc(ii), dP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = e, c = Sp(ii, e.__scopeTooltip), u = xc(t), [l, d] = m.useState(null), p = _t(), h = m.useRef(0), v = a ?? c.disableHoverableContent, f = s ?? c.delayDuration, g = m.useRef(!1), [y, w] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Md))) : c.onClose(), i?.(O);
    },
    caller: ii
  }), b = m.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), E = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, w(!0);
  }, [w]), S = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), P = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, w(!0), h.current = 0;
    }, f);
  }, [f, w]);
  return m.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ x(lc, { ...u, children: /* @__PURE__ */ x(
    kj,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: b,
      trigger: l,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : E();
      }, [c.isOpenDelayedRef, P, E]),
      onTriggerLeave: m.useCallback(() => {
        v ? S() : (window.clearTimeout(h.current), h.current = 0);
      }, [S, v]),
      onOpen: E,
      onClose: S,
      disableHoverableContent: v,
      children: r
    }
  ) });
};
dP.displayName = ii;
var Dd = "TooltipTrigger", fP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ec(Dd, r), i = Sp(Dd, r), a = xc(r), s = m.useRef(null), c = se(t, s, o.onTriggerChange), u = m.useRef(!1), l = m.useRef(!1), d = m.useCallback(() => u.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ x(op, { asChild: !0, ...a, children: /* @__PURE__ */ x(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: K(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !l.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: K(e.onPointerLeave, () => {
          o.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: K(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: K(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: K(e.onBlur, o.onClose),
        onClick: K(e.onClick, o.onClose)
      }
    ) });
  }
);
fP.displayName = Dd;
var Nj = "TooltipPortal", [qX, Ij] = wc(Nj, {
  forceMount: void 0
}), io = "TooltipContent", pP = m.forwardRef(
  (e, t) => {
    const r = Ij(io, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...i } = e, a = Ec(io, e.__scopeTooltip);
    return /* @__PURE__ */ x(Mt, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ x(hP, { side: o, ...i, ref: t }) : /* @__PURE__ */ x(Rj, { side: o, ...i, ref: t }) });
  }
), Rj = m.forwardRef((e, t) => {
  const r = Ec(io, e.__scopeTooltip), n = Sp(io, e.__scopeTooltip), o = m.useRef(null), i = se(t, o), [a, s] = m.useState(null), { trigger: c, onClose: u } = r, l = o.current, { onPointerInTransitChange: d } = n, p = m.useCallback(() => {
    s(null), d(!1);
  }, [d]), h = m.useCallback(
    (v, f) => {
      const g = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = Lj(y, g.getBoundingClientRect()), b = Fj(y, w), E = Bj(f.getBoundingClientRect()), S = Uj([...b, ...E]);
      s(S), d(!0);
    },
    [d]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (c && l) {
      const v = (g) => h(g, l), f = (g) => h(g, c);
      return c.addEventListener("pointerleave", v), l.addEventListener("pointerleave", f), () => {
        c.removeEventListener("pointerleave", v), l.removeEventListener("pointerleave", f);
      };
    }
  }, [c, l, h, p]), m.useEffect(() => {
    if (a) {
      const v = (f) => {
        const g = f.target, y = { x: f.clientX, y: f.clientY }, w = c?.contains(g) || l?.contains(g), b = !zj(y, a);
        w ? p() : b && (p(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, l, a, u, p]), /* @__PURE__ */ x(hP, { ...e, ref: i });
}), [Mj, Dj] = wc(ii, { isInside: !1 }), jj = /* @__PURE__ */ o_("TooltipContent"), hP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...s
    } = e, c = Ec(io, r), u = xc(r), { onClose: l } = c;
    return m.useEffect(() => (document.addEventListener(Md, l), () => document.removeEventListener(Md, l)), [l]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          p.target?.contains(c.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, l]), /* @__PURE__ */ x(
      go,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ V(
          ip,
          {
            "data-state": c.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ x(jj, { children: n }),
              /* @__PURE__ */ x(Mj, { scope: r, isInside: !0, children: /* @__PURE__ */ x(JM, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
pP.displayName = io;
var mP = "TooltipArrow", $j = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = xc(r);
    return Dj(
      mP,
      r
    ).isInside ? null : /* @__PURE__ */ x(ap, { ...o, ...n, ref: t });
  }
);
$j.displayName = mP;
function Lj(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Fj(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function Bj(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function zj(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function Uj(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Wj(t);
}
function Wj(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const i = r[r.length - 1], a = r[r.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Kj = uP, Vj = dP, qj = fP, vP = pP;
const HX = Kj, GX = Vj, YX = qj, Hj = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ x(
  vP,
  {
    ref: n,
    sideOffset: t,
    className: U(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Hj.displayName = vP.displayName;
const gP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ x(
  "table",
  {
    ref: r,
    className: U("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
gP.displayName = "Table";
const yP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x("thead", { ref: r, className: U("[&_tr]:border-b", e), ...t }));
yP.displayName = "TableHeader";
const bP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "tbody",
  {
    ref: r,
    className: U("[&_tr:last-child]:border-0", e),
    ...t
  }
));
bP.displayName = "TableBody";
const Gj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "tfoot",
  {
    ref: r,
    className: U(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
Gj.displayName = "TableFooter";
const Yo = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "tr",
  {
    ref: r,
    className: U(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Yo.displayName = "TableRow";
const wP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "th",
  {
    ref: r,
    className: U(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
wP.displayName = "TableHead";
const Ba = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "td",
  {
    ref: r,
    className: U(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Ba.displayName = "TableCell";
const Yj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  "caption",
  {
    ref: r,
    className: U("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Yj.displayName = "TableCaption";
const xP = m.forwardRef(
  ({
    className: e,
    title: t,
    subtitle: r,
    logo: n,
    items: o = [],
    groups: i = [],
    isCollapsed: a = !1,
    onToggleCollapse: s,
    width: c = 260,
    collapsedWidth: u = 80,
    showCollapseButton: l = !0,
    onLogout: d,
    ...p
  }, h) => {
    const [v, f] = m.useState(!1), g = s ? a : v, y = s || (() => f(!v)), w = (b) => b.map((E) => /* @__PURE__ */ V(
      "div",
      {
        onClick: E.onClick,
        className: U(
          "relative flex items-center cursor-pointer transition-all my-0.5 font-medium text-muted-foreground",
          g ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
          E.active && "bg-primary/5 text-primary font-semibold",
          "hover:bg-accent hover:text-primary",
          E.active && "hover:bg-primary/10"
        ),
        children: [
          E.active && /* @__PURE__ */ x("div", { className: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary" }),
          E.icon && /* @__PURE__ */ x("div", { className: U("flex items-center justify-center w-5 h-5", !g && "mr-3"), children: E.icon }),
          !g && /* @__PURE__ */ x("span", { className: "text-sm whitespace-nowrap overflow-hidden text-ellipsis", children: E.label })
        ]
      },
      E.key
    ));
    return /* @__PURE__ */ V(
      "aside",
      {
        ref: h,
        className: U("fixed left-0 top-0 h-screen bg-card flex flex-col z-40 transition-all duration-300 overflow-visible shadow-sm", e),
        style: {
          width: g ? `${u}px` : `${c}px`
        },
        ...p,
        children: [
          (t || r || n) && /* @__PURE__ */ V(
            "div",
            {
              className: U(
                "flex items-center min-h-[72px] bg-card mb-1",
                g ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5"
              ),
              children: [
                n,
                !g && /* @__PURE__ */ V("div", { className: "flex-1 overflow-hidden ml-3", children: [
                  t && /* @__PURE__ */ x("div", { className: "font-bold text-base text-foreground leading-tight tracking-tight", children: t }),
                  r && /* @__PURE__ */ x("div", { className: "text-xs text-secondary font-medium leading-tight mt-1", children: r })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ V("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4", children: [
            o.length > 0 && w(o),
            i.map((b) => /* @__PURE__ */ V("div", { className: "mb-6", children: [
              !g && /* @__PURE__ */ x("div", { className: "px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1", children: b.label }),
              w(b.items)
            ] }, b.label))
          ] }),
          d && /* @__PURE__ */ x("div", { className: U("mt-auto", g ? "p-2" : "p-4"), children: /* @__PURE__ */ V(
            "div",
            {
              onClick: d,
              className: U(
                "flex items-center cursor-pointer rounded-md p-3 text-destructive text-sm font-medium transition-colors hover:bg-destructive/10",
                g ? "justify-center" : "justify-start gap-3"
              ),
              children: [
                /* @__PURE__ */ x(T_, { className: "h-4 w-4" }),
                !g && /* @__PURE__ */ x("span", { children: "Sair" })
              ]
            }
          ) }),
          l && /* @__PURE__ */ x(
            "button",
            {
              onClick: y,
              className: "absolute bottom-4 -right-3.5 bg-card border border-border rounded-sm p-1.5 cursor-pointer flex items-center justify-center transition-all w-7 h-7 shadow-sm hover:bg-accent hover:shadow-md active:scale-95",
              children: /* @__PURE__ */ x("div", { className: "w-4 h-4 text-muted-foreground flex items-center justify-center", children: g ? /* @__PURE__ */ x(Ff, { className: "w-4 h-4" }) : /* @__PURE__ */ x(y_, { className: "w-4 h-4" }) })
            }
          )
        ]
      }
    );
  }
);
xP.displayName = "Sidebar";
const Xj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: U("flex items-center border-b p-4", e), ...t })
);
Xj.displayName = "SidebarHeader";
const Zj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: U("flex-1 overflow-y-auto p-4", e), ...t })
);
Zj.displayName = "SidebarContent";
const Jj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: U("border-t p-4", e), ...t })
);
Jj.displayName = "SidebarFooter";
const Qj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ x("nav", { ref: r, className: U("flex flex-col space-y-1", e), ...t })
);
Qj.displayName = "SidebarNav";
const e$ = m.forwardRef(
  ({ className: e, active: t, icon: r, children: n, ...o }, i) => /* @__PURE__ */ V(
    "a",
    {
      ref: i,
      className: U(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        t && "bg-accent text-accent-foreground",
        e
      ),
      ...o,
      children: [
        r && /* @__PURE__ */ x("span", { className: "flex-shrink-0", children: r }),
        /* @__PURE__ */ x("span", { className: "flex-1", children: n })
      ]
    }
  )
);
e$.displayName = "SidebarNavItem";
const EP = m.forwardRef(
  ({ className: e, items: t, separator: r, ...n }, o) => t.length === 0 ? null : /* @__PURE__ */ x(
    "nav",
    {
      ref: o,
      className: U("flex items-center gap-2 text-sm", e),
      "aria-label": "Breadcrumb",
      ...n,
      children: t.map((i, a) => /* @__PURE__ */ V(m.Fragment, { children: [
        /* @__PURE__ */ x(
          "span",
          {
            className: U(
              "font-medium transition-colors",
              a === 0 && "text-primary",
              a === 1 && "text-secondary",
              a === t.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground",
              i.onClick && "cursor-pointer hover:text-primary"
            ),
            onClick: i.onClick,
            children: i.label
          }
        ),
        a < t.length - 1 && /* @__PURE__ */ x("span", { className: "text-border flex items-center select-none", children: r || /* @__PURE__ */ x(Ff, { className: "h-3.5 w-3.5" }) })
      ] }, a))
    }
  )
);
EP.displayName = "Breadcrumb";
const SP = m.forwardRef(
  ({
    className: e,
    isCollapsed: t = !1,
    breadcrumbs: r = [],
    user: n,
    onNotificationClick: o,
    hasNotifications: i = !1,
    userMenuTrigger: a,
    actions: s,
    ...c
  }, u) => /* @__PURE__ */ V(
    "nav",
    {
      ref: u,
      className: U(
        "fixed top-0 right-0 h-[60px] bg-card flex items-center justify-between px-6 transition-all duration-300 z-[100] shadow-sm",
        e
      ),
      style: {
        left: t ? "80px" : "260px"
      },
      ...c,
      children: [
        /* @__PURE__ */ x("div", { className: "flex items-center gap-4", children: r && r.length > 0 && /* @__PURE__ */ x(EP, { items: r }) }),
        /* @__PURE__ */ V("div", { className: "flex items-center gap-4", children: [
          s,
          o && /* @__PURE__ */ V(
            "button",
            {
              onClick: o,
              className: "relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
              children: [
                /* @__PURE__ */ x(h_, { className: "h-5 w-5" }),
                i && /* @__PURE__ */ x("span", { className: "absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" })
              ]
            }
          ),
          a,
          n && !a && /* @__PURE__ */ V("button", { className: "flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]", children: [
            /* @__PURE__ */ x("div", { className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: n.avatar || n.name.charAt(0).toUpperCase() }),
            /* @__PURE__ */ V("div", { className: "hidden md:flex flex-col items-start", children: [
              /* @__PURE__ */ x("span", { className: "text-sm font-semibold text-foreground leading-tight", children: n.name }),
              /* @__PURE__ */ x("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: n.role })
            ] }),
            /* @__PURE__ */ x(Vs, { className: "h-4 w-4 text-muted-foreground" })
          ] })
        ] })
      ]
    }
  )
);
SP.displayName = "Navbar";
const PP = ({ isVisible: e, className: t }) => e ? /* @__PURE__ */ x(
  "div",
  {
    className: U(
      "fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]",
      t
    ),
    children: /* @__PURE__ */ x("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ x("div", { className: "relative w-[200px] h-[200px] rounded-full border-[12px] border-border border-t-primary animate-spin" }) })
  }
) : null;
PP.displayName = "GlobalLoader";
const OP = m.createContext(null), XX = () => {
  const e = m.useContext(OP);
  if (!e)
    throw new Error("useGlobalLoader must be used within GlobalLoaderProvider");
  return e;
}, ZX = ({ children: e }) => {
  const [t, r] = m.useState(0), n = m.useCallback(() => {
    r((a) => a + 1);
  }, []), o = m.useCallback(() => {
    r((a) => Math.max(0, a - 1));
  }, []), i = t > 0;
  return /* @__PURE__ */ V(OP.Provider, { value: { isLoading: i, showLoader: n, hideLoader: o }, children: [
    e,
    /* @__PURE__ */ x(PP, { isVisible: i })
  ] });
}, t$ = m.forwardRef(
  ({ title: e, icon: t, children: r, emptyMessage: n = "Nenhum dado disponível", isEmpty: o = !1, height: i = 400, className: a }, s) => /* @__PURE__ */ V("div", { ref: s, className: U("bg-card rounded-lg border shadow-sm", a), children: [
    e && /* @__PURE__ */ x("div", { className: "border-b px-6 py-4", children: /* @__PURE__ */ V("h3", { className: "text-lg font-semibold flex items-center gap-2", children: [
      t && /* @__PURE__ */ x("span", { className: "flex items-center", children: t }),
      e
    ] }) }),
    /* @__PURE__ */ x(
      "div",
      {
        className: "p-6",
        style: { height: typeof i == "number" ? `${i}px` : i },
        children: o ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: n }) : r
      }
    )
  ] })
);
t$.displayName = "ChartContainer";
var r$ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Pp(e) {
  if (typeof e != "string")
    return !1;
  var t = r$;
  return t.includes(e);
}
var n$ = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
];
function AP(e) {
  if (typeof e != "string")
    return !1;
  var t = n$;
  return t.includes(e);
}
function CP(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function ht(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return AP(n) || CP(n);
  });
  return Object.fromEntries(t);
}
function Nn(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Ut(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return ht(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? ht(e) : null;
}
function mt(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return AP(n) || CP(n) || Pp(n);
  });
  return Object.fromEntries(t);
}
function TP(e) {
  return e == null ? null : /* @__PURE__ */ Ut(e) ? mt(e.props) : typeof e == "object" && !Array.isArray(e) ? mt(e) : null;
}
var o$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function jd() {
  return jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jd.apply(null, arguments);
}
function i$(e, t) {
  if (e == null) return {};
  var r, n, o = a$(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function a$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Op = /* @__PURE__ */ De((e, t) => {
  var {
    children: r,
    width: n,
    height: o,
    viewBox: i,
    className: a,
    style: s,
    title: c,
    desc: u
  } = e, l = i$(e, o$), d = i || {
    width: n,
    height: o,
    x: 0,
    y: 0
  }, p = le("recharts-surface", a);
  return /* @__PURE__ */ m.createElement("svg", jd({}, mt(l), {
    className: p,
    width: n,
    height: o,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ m.createElement("title", null, c), /* @__PURE__ */ m.createElement("desc", null, u), r);
}), s$ = ["children", "className"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $d.apply(null, arguments);
}
function c$(e, t) {
  if (e == null) return {};
  var r, n, o = l$(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function l$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ie = /* @__PURE__ */ m.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, o = c$(e, s$), i = le("recharts-layer", n);
  return /* @__PURE__ */ m.createElement("g", $d({
    className: i
  }, mt(o), {
    ref: t
  }), r);
}), _P = /* @__PURE__ */ Rt(null), u$ = () => Qt(_P);
function Pe(e) {
  return function() {
    return e;
  };
}
const kP = Math.cos, rs = Math.sin, tr = Math.sqrt, ns = Math.PI, Sc = 2 * ns, Ld = Math.PI, Fd = 2 * Ld, fn = 1e-6, d$ = Fd - fn;
function NP(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function f$(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return NP;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, i = n.length; o < i; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class p$ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? NP : f$(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, n, o, i, a) {
    this._append`C${+t},${+r},${+n},${+o},${this._x1 = +i},${this._y1 = +a}`;
  }
  arcTo(t, r, n, o, i) {
    if (t = +t, r = +r, n = +n, o = +o, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let a = this._x1, s = this._y1, c = n - t, u = o - r, l = a - t, d = s - r, p = l * l + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > fn) if (!(Math.abs(d * c - u * l) > fn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - a, v = o - s, f = c * c + u * u, g = h * h + v * v, y = Math.sqrt(f), w = Math.sqrt(p), b = i * Math.tan((Ld - Math.acos((f + p - g) / (2 * y * w))) / 2), E = b / w, S = b / y;
      Math.abs(E - 1) > fn && this._append`L${t + E * l},${r + E * d}`, this._append`A${i},${i},0,0,${+(d * h > l * v)},${this._x1 = t + S * c},${this._y1 = r + S * u}`;
    }
  }
  arc(t, r, n, o, i, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), u = t + s, l = r + c, d = 1 ^ a, p = a ? o - i : i - o;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > fn || Math.abs(this._y1 - l) > fn) && this._append`L${u},${l}`, n && (p < 0 && (p = p % Fd + Fd), p > d$ ? this._append`A${n},${n},0,1,${d},${t - s},${r - c}A${n},${n},0,1,${d},${this._x1 = u},${this._y1 = l}` : p > fn && this._append`A${n},${n},0,${+(p >= Ld)},${d},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ap(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new p$(t);
}
function Cp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function IP(e) {
  this._context = e;
}
IP.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Pc(e) {
  return new IP(e);
}
function RP(e) {
  return e[0];
}
function MP(e) {
  return e[1];
}
function DP(e, t) {
  var r = Pe(!0), n = null, o = Pc, i = null, a = Ap(s);
  e = typeof e == "function" ? e : e === void 0 ? RP : Pe(e), t = typeof t == "function" ? t : t === void 0 ? MP : Pe(t);
  function s(c) {
    var u, l = (c = Cp(c)).length, d, p = !1, h;
    for (n == null && (i = o(h = a())), u = 0; u <= l; ++u)
      !(u < l && r(d = c[u], u, c)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+e(d, u, c), +t(d, u, c));
    if (h) return i = null, h + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Pe(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Pe(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (o = c, n != null && (i = o(n)), s) : o;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = i = null : i = o(n = c), s) : n;
  }, s;
}
function fa(e, t, r) {
  var n = null, o = Pe(!0), i = null, a = Pc, s = null, c = Ap(u);
  e = typeof e == "function" ? e : e === void 0 ? RP : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? MP : Pe(+r);
  function u(d) {
    var p, h, v, f = (d = Cp(d)).length, g, y = !1, w, b = new Array(f), E = new Array(f);
    for (i == null && (s = a(w = c())), p = 0; p <= f; ++p) {
      if (!(p < f && o(g = d[p], p, d)) === y)
        if (y = !y)
          h = p, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), v = p - 1; v >= h; --v)
            s.point(b[v], E[v]);
          s.lineEnd(), s.areaEnd();
        }
      y && (b[p] = +e(g, p, d), E[p] = +t(g, p, d), s.point(n ? +n(g, p, d) : b[p], r ? +r(g, p, d) : E[p]));
    }
    if (w) return s = null, w + "" || null;
  }
  function l() {
    return DP().defined(o).curve(a).context(i);
  }
  return u.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Pe(+d), n = null, u) : e;
  }, u.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Pe(+d), u) : e;
  }, u.x1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Pe(+d), u) : n;
  }, u.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Pe(+d), r = null, u) : t;
  }, u.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Pe(+d), u) : t;
  }, u.y1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Pe(+d), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e).y(t);
  }, u.lineY1 = function() {
    return l().x(e).y(r);
  }, u.lineX1 = function() {
    return l().x(n).y(t);
  }, u.defined = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Pe(!!d), u) : o;
  }, u.curve = function(d) {
    return arguments.length ? (a = d, i != null && (s = a(i)), u) : a;
  }, u.context = function(d) {
    return arguments.length ? (d == null ? i = s = null : s = a(i = d), u) : i;
  }, u;
}
class jP {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function h$(e) {
  return new jP(e, !0);
}
function m$(e) {
  return new jP(e, !1);
}
const Tp = {
  draw(e, t) {
    const r = tr(t / ns);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Sc);
  }
}, v$ = {
  draw(e, t) {
    const r = tr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, $P = tr(1 / 3), g$ = $P * 2, y$ = {
  draw(e, t) {
    const r = tr(t / g$), n = r * $P;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, b$ = {
  draw(e, t) {
    const r = tr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, w$ = 0.8908130915292852, LP = rs(ns / 10) / rs(7 * ns / 10), x$ = rs(Sc / 10) * LP, E$ = -kP(Sc / 10) * LP, S$ = {
  draw(e, t) {
    const r = tr(t * w$), n = x$ * r, o = E$ * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let i = 1; i < 5; ++i) {
      const a = Sc * i / 5, s = kP(a), c = rs(a);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, jl = tr(3), P$ = {
  draw(e, t) {
    const r = -tr(t / (jl * 3));
    e.moveTo(0, r * 2), e.lineTo(-jl * r, -r), e.lineTo(jl * r, -r), e.closePath();
  }
}, jt = -0.5, $t = tr(3) / 2, Bd = 1 / tr(12), O$ = (Bd / 2 + 1) * 3, A$ = {
  draw(e, t) {
    const r = tr(t / O$), n = r / 2, o = r * Bd, i = n, a = r * Bd + r, s = -i, c = a;
    e.moveTo(n, o), e.lineTo(i, a), e.lineTo(s, c), e.lineTo(jt * n - $t * o, $t * n + jt * o), e.lineTo(jt * i - $t * a, $t * i + jt * a), e.lineTo(jt * s - $t * c, $t * s + jt * c), e.lineTo(jt * n + $t * o, jt * o - $t * n), e.lineTo(jt * i + $t * a, jt * a - $t * i), e.lineTo(jt * s + $t * c, jt * c - $t * s), e.closePath();
  }
};
function C$(e, t) {
  let r = null, n = Ap(o);
  e = typeof e == "function" ? e : Pe(e || Tp), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);
  function o() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return o.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Pe(i), o) : e;
  }, o.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Pe(+i), o) : t;
  }, o.context = function(i) {
    return arguments.length ? (r = i ?? null, o) : r;
  }, o;
}
function os() {
}
function is(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function FP(e) {
  this._context = e;
}
FP.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        is(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function T$(e) {
  return new FP(e);
}
function BP(e) {
  this._context = e;
}
BP.prototype = {
  areaStart: os,
  areaEnd: os,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _$(e) {
  return new BP(e);
}
function zP(e) {
  this._context = e;
}
zP.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function k$(e) {
  return new zP(e);
}
function UP(e) {
  this._context = e;
}
UP.prototype = {
  areaStart: os,
  areaEnd: os,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function N$(e) {
  return new UP(e);
}
function uv(e) {
  return e < 0 ? -1 : 1;
}
function dv(e, t, r) {
  var n = e._x1 - e._x0, o = t - e._x1, i = (e._y1 - e._y0) / (n || o < 0 && -0), a = (r - e._y1) / (o || n < 0 && -0), s = (i * o + a * n) / (n + o);
  return (uv(i) + uv(a)) * Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(s)) || 0;
}
function fv(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function $l(e, t, r) {
  var n = e._x0, o = e._y0, i = e._x1, a = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, o + s * t, i - s, a - s * r, i, a);
}
function as(e) {
  this._context = e;
}
as.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        $l(this, this._t0, fv(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, $l(this, fv(this, r = dv(this, e, t)), r);
          break;
        default:
          $l(this, this._t0, r = dv(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function WP(e) {
  this._context = new KP(e);
}
(WP.prototype = Object.create(as.prototype)).point = function(e, t) {
  as.prototype.point.call(this, t, e);
};
function KP(e) {
  this._context = e;
}
KP.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, o, i) {
    this._context.bezierCurveTo(t, e, n, r, i, o);
  }
};
function I$(e) {
  return new as(e);
}
function R$(e) {
  return new WP(e);
}
function VP(e) {
  this._context = e;
}
VP.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = pv(e), o = pv(t), i = 0, a = 1; a < r; ++i, ++a)
          this._context.bezierCurveTo(n[0][i], o[0][i], n[1][i], o[1][i], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function pv(e) {
  var t, r = e.length - 1, n, o = new Array(r), i = new Array(r), a = new Array(r);
  for (o[0] = 0, i[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, i[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = o[t] / i[t - 1], i[t] -= n, a[t] -= n * a[t - 1];
  for (o[r - 1] = a[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) o[t] = (a[t] - o[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - o[t + 1];
  return [o, i];
}
function M$(e) {
  return new VP(e);
}
function Oc(e, t) {
  this._context = e, this._t = t;
}
Oc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function D$(e) {
  return new Oc(e, 0.5);
}
function j$(e) {
  return new Oc(e, 0);
}
function $$(e) {
  return new Oc(e, 1);
}
function ao(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, o, i = e[t[0]], a, s = i.length; r < a; ++r)
      for (o = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function zd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function L$(e, t) {
  return e[t];
}
function F$(e) {
  const t = [];
  return t.key = e, t;
}
function B$() {
  var e = Pe([]), t = zd, r = ao, n = L$;
  function o(i) {
    var a = Array.from(e.apply(this, arguments), F$), s, c = a.length, u = -1, l;
    for (const d of i)
      for (s = 0, ++u; s < c; ++s)
        (a[s][u] = [0, +n(d, a[s].key, u, i)]).data = d;
    for (s = 0, l = Cp(t(a)); s < c; ++s)
      a[l[s]].index = s;
    return r(a, l), a;
  }
  return o.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Pe(Array.from(i)), o) : e;
  }, o.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Pe(+i), o) : n;
  }, o.order = function(i) {
    return arguments.length ? (t = i == null ? zd : typeof i == "function" ? i : Pe(Array.from(i)), o) : t;
  }, o.offset = function(i) {
    return arguments.length ? (r = i ?? ao, o) : r;
  }, o;
}
function z$(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, i = e[0].length, a; o < i; ++o) {
      for (a = r = 0; r < n; ++r) a += e[r][o][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][o][1] /= a;
    }
    ao(e, t);
  }
}
function U$(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, i = n.length; r < i; ++r) {
      for (var a = 0, s = 0; a < o; ++a) s += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    ao(e, t);
  }
}
function W$(e, t) {
  if (!(!((a = e.length) > 0) || !((i = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, o, i, a; n < i; ++n) {
      for (var s = 0, c = 0, u = 0; s < a; ++s) {
        for (var l = e[t[s]], d = l[n][1] || 0, p = l[n - 1][1] || 0, h = (d - p) / 2, v = 0; v < s; ++v) {
          var f = e[t[v]], g = f[n][1] || 0, y = f[n - 1][1] || 0;
          h += g - y;
        }
        c += d, u += h * d;
      }
      o[n - 1][1] += o[n - 1][0] = r, c && (r -= u / c);
    }
    o[n - 1][1] += o[n - 1][0] = r, ao(e, t);
  }
}
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ll = {}, Fl = {}, hv;
function K$() {
  return hv || (hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Fl)), Fl;
}
var Bl = {}, mv;
function qP() {
  return mv || (mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(Bl)), Bl;
}
var zl = {}, vv;
function _p() {
  return vv || (vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(zl)), zl;
}
var Ul = {}, Wl = {}, gv;
function V$() {
  return gv || (gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(Wl)), Wl;
}
var yv;
function kp() {
  return yv || (yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ V$(), r = /* @__PURE__ */ _p();
    function n(o) {
      if (Array.isArray(o))
        return o.map(r.toKey);
      if (typeof o == "symbol")
        return [o];
      o = t.toString(o);
      const i = [], a = o.length;
      if (a === 0)
        return i;
      let s = 0, c = "", u = "", l = !1;
      for (o.charCodeAt(0) === 46 && (i.push(""), s++); s < a; ) {
        const d = o[s];
        u ? d === "\\" && s + 1 < a ? (s++, c += o[s]) : d === u ? u = "" : c += d : l ? d === '"' || d === "'" ? u = d : d === "]" ? (l = !1, i.push(c), c = "") : c += d : d === "[" ? (l = !0, c && (i.push(c), c = "")) : d === "." ? c && (i.push(c), c = "") : c += d, s++;
      }
      return c && i.push(c), i;
    }
    e.toPath = n;
  })(Ul)), Ul;
}
var bv;
function Np() {
  return bv || (bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ K$(), r = /* @__PURE__ */ qP(), n = /* @__PURE__ */ _p(), o = /* @__PURE__ */ kp();
    function i(s, c, u) {
      if (s == null)
        return u;
      switch (typeof c) {
        case "string": {
          if (t.isUnsafeProperty(c))
            return u;
          const l = s[c];
          return l === void 0 ? r.isDeepKey(c) ? i(s, o.toPath(c), u) : u : l;
        }
        case "number":
        case "symbol": {
          typeof c == "number" && (c = n.toKey(c));
          const l = s[c];
          return l === void 0 ? u : l;
        }
        default: {
          if (Array.isArray(c))
            return a(s, c, u);
          if (Object.is(c?.valueOf(), -0) ? c = "-0" : c = String(c), t.isUnsafeProperty(c))
            return u;
          const l = s[c];
          return l === void 0 ? u : l;
        }
      }
    }
    function a(s, c, u) {
      if (c.length === 0)
        return u;
      let l = s;
      for (let d = 0; d < c.length; d++) {
        if (l == null || t.isUnsafeProperty(c[d]))
          return u;
        l = l[c[d]];
      }
      return l === void 0 ? u : l;
    }
    e.get = i;
  })(Ll)), Ll;
}
var Kl, wv;
function q$() {
  return wv || (wv = 1, Kl = Np().get), Kl;
}
var H$ = /* @__PURE__ */ q$();
const In = /* @__PURE__ */ an(H$);
var Xe = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Nt = (e) => typeof e == "number" && e != +e, kr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, X = (e) => (typeof e == "number" || e instanceof Number) && !Nt(e), dr = (e) => X(e) || typeof e == "string", G$ = 0, ai = (e) => {
  var t = ++G$;
  return "".concat(e || "").concat(t);
}, st = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!X(t) && typeof t != "string")
    return n;
  var i;
  if (kr(t)) {
    if (r == null)
      return n;
    var a = t.indexOf("%");
    i = r * parseFloat(t.slice(0, a)) / 100;
  } else
    i = +t;
  return Nt(i) && (i = n), o && r != null && i > r && (i = r), i;
}, HP = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[e[n]])
      r[e[n]] = !0;
    else
      return !0;
  return !1;
};
function we(e, t, r) {
  return X(e) && X(t) ? e + r * (t - e) : t;
}
function GP(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : In(n, t)) === r);
}
var Ae = (e) => e === null || typeof e > "u", ki = (e) => Ae(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), Y$ = ["type", "size", "sizeType"];
function Ud() {
  return Ud = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ud.apply(null, arguments);
}
function xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xv(Object(r), !0).forEach(function(n) {
      X$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X$(e, t, r) {
  return (t = Z$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z$(e) {
  var t = J$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q$(e, t) {
  if (e == null) return {};
  var r, n, o = eL(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function eL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var YP = {
  symbolCircle: Tp,
  symbolCross: v$,
  symbolDiamond: y$,
  symbolSquare: b$,
  symbolStar: S$,
  symbolTriangle: P$,
  symbolWye: A$
}, tL = Math.PI / 180, rL = (e) => {
  var t = "symbol".concat(ki(e));
  return YP[t] || Tp;
}, nL = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * tL;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, oL = (e, t) => {
  YP["symbol".concat(ki(e))] = t;
}, Ip = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, o = Q$(e, Y$), i = Ev(Ev({}, o), {}, {
    type: t,
    size: r,
    sizeType: n
  }), a = "circle";
  typeof t == "string" && (a = t);
  var s = () => {
    var p = rL(a), h = C$().type(p).size(nL(r, n, a)), v = h();
    if (v !== null)
      return v;
  }, {
    className: c,
    cx: u,
    cy: l
  } = i, d = mt(i);
  return u === +u && l === +l && r === +r ? /* @__PURE__ */ m.createElement("path", Ud({}, d, {
    className: le("recharts-symbols", c),
    transform: "translate(".concat(u, ", ").concat(l, ")"),
    d: s()
  })) : null;
};
Ip.registerSymbol = oL;
var Rp = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Ut(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((o) => {
    Pp(o) && (n[o] = ((i) => r[o](r, i)));
  }), n;
}, iL = (e, t, r) => (n) => (e(t, r, n), null), Ni = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((o) => {
    var i = e[o];
    Pp(o) && typeof i == "function" && (n || (n = {}), n[o] = iL(i, t, r));
  }), n;
};
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wd.apply(null, arguments);
}
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function aL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sv(Object(r), !0).forEach(function(n) {
      Mp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mp(e, t, r) {
  return (t = sL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sL(e) {
  var t = cL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lt = 32;
class Dp extends yi {
  /**
   * Render the path of icon
   * @param data Data of each legend item
   * @param iconType if defined, it will always render this icon. If undefined then it uses icon from data.type
   * @return Path element
   */
  renderIcon(t, r) {
    var {
      inactiveColor: n
    } = this.props, o = Lt / 2, i = Lt / 6, a = Lt / 3, s = t.inactive ? n : t.color, c = r ?? t.type;
    if (c === "none")
      return null;
    if (c === "plainline")
      return /* @__PURE__ */ m.createElement("line", {
        strokeWidth: 4,
        fill: "none",
        stroke: s,
        strokeDasharray: t.payload.strokeDasharray,
        x1: 0,
        y1: o,
        x2: Lt,
        y2: o,
        className: "recharts-legend-icon"
      });
    if (c === "line")
      return /* @__PURE__ */ m.createElement("path", {
        strokeWidth: 4,
        fill: "none",
        stroke: s,
        d: "M0,".concat(o, "h").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * a, ",").concat(o, `
            H`).concat(Lt, "M").concat(2 * a, ",").concat(o, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(a, ",").concat(o),
        className: "recharts-legend-icon"
      });
    if (c === "rect")
      return /* @__PURE__ */ m.createElement("path", {
        stroke: "none",
        fill: s,
        d: "M0,".concat(Lt / 8, "h").concat(Lt, "v").concat(Lt * 3 / 4, "h").concat(-Lt, "z"),
        className: "recharts-legend-icon"
      });
    if (/* @__PURE__ */ m.isValidElement(t.legendIcon)) {
      var u = aL({}, t);
      return delete u.legendIcon, /* @__PURE__ */ m.cloneElement(t.legendIcon, u);
    }
    return /* @__PURE__ */ m.createElement(Ip, {
      fill: s,
      cx: o,
      cy: o,
      size: Lt,
      sizeType: "diameter",
      type: c
    });
  }
  /**
   * Draw items of legend
   * @return Items
   */
  renderItems() {
    var {
      payload: t,
      iconSize: r,
      layout: n,
      formatter: o,
      inactiveColor: i,
      iconType: a
    } = this.props, s = {
      x: 0,
      y: 0,
      width: Lt,
      height: Lt
    }, c = {
      display: n === "horizontal" ? "inline-block" : "block",
      marginRight: 10
    }, u = {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: 4
    };
    return t.map((l, d) => {
      var p = l.formatter || o, h = le({
        "recharts-legend-item": !0,
        ["legend-item-".concat(d)]: !0,
        inactive: l.inactive
      });
      if (l.type === "none")
        return null;
      var v = l.inactive ? i : l.color, f = p ? p(l.value, l, d) : l.value;
      return /* @__PURE__ */ m.createElement("li", Wd({
        className: h,
        style: c,
        key: "legend-item-".concat(d)
      }, Ni(this.props, l, d)), /* @__PURE__ */ m.createElement(Op, {
        width: r,
        height: r,
        viewBox: s,
        style: u,
        "aria-label": "".concat(f, " legend icon")
      }, this.renderIcon(l, a)), /* @__PURE__ */ m.createElement("span", {
        className: "recharts-legend-item-text",
        style: {
          color: v
        }
      }, f));
    });
  }
  render() {
    var {
      payload: t,
      layout: r,
      align: n
    } = this.props;
    if (!t || !t.length)
      return null;
    var o = {
      padding: 0,
      margin: 0,
      textAlign: r === "horizontal" ? n : "left"
    };
    return /* @__PURE__ */ m.createElement("ul", {
      className: "recharts-default-legend",
      style: o
    }, this.renderItems());
  }
}
Mp(Dp, "displayName", "Legend");
Mp(Dp, "defaultProps", {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle"
});
var Vl = {}, ql = {}, Pv;
function lL() {
  return Pv || (Pv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const o = /* @__PURE__ */ new Map();
      for (let i = 0; i < r.length; i++) {
        const a = r[i], s = n(a);
        o.has(s) || o.set(s, a);
      }
      return Array.from(o.values());
    }
    e.uniqBy = t;
  })(ql)), ql;
}
var Hl = {}, Ov;
function XP() {
  return Ov || (Ov = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Hl)), Hl;
}
var Gl = {}, Yl = {}, Xl = {}, Av;
function uL() {
  return Av || (Av = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Xl)), Xl;
}
var Cv;
function jp() {
  return Cv || (Cv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ uL();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(Yl)), Yl;
}
var Zl = {}, Tv;
function dL() {
  return Tv || (Tv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Zl)), Zl;
}
var _v;
function fL() {
  return _v || (_v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jp(), r = /* @__PURE__ */ dL();
    function n(o) {
      return r.isObjectLike(o) && t.isArrayLike(o);
    }
    e.isArrayLikeObject = n;
  })(Gl)), Gl;
}
var Jl = {}, Ql = {}, kv;
function pL() {
  return kv || (kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Np();
    function r(n) {
      return function(o) {
        return t.get(o, n);
      };
    }
    e.property = r;
  })(Ql)), Ql;
}
var eu = {}, tu = {}, ru = {}, nu = {}, Nv;
function ZP() {
  return Nv || (Nv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(nu)), nu;
}
var ou = {}, Iv;
function JP() {
  return Iv || (Iv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(ou)), ou;
}
var iu = {}, Rv;
function QP() {
  return Rv || (Rv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(iu)), iu;
}
var Mv;
function hL() {
  return Mv || (Mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ZP(), r = /* @__PURE__ */ JP(), n = /* @__PURE__ */ QP();
    function o(l, d, p) {
      return typeof p != "function" ? o(l, d, () => {
      }) : i(l, d, function h(v, f, g, y, w, b) {
        const E = p(v, f, g, y, w, b);
        return E !== void 0 ? !!E : i(v, f, h, b);
      }, /* @__PURE__ */ new Map());
    }
    function i(l, d, p, h) {
      if (d === l)
        return !0;
      switch (typeof d) {
        case "object":
          return a(l, d, p, h);
        case "function":
          return Object.keys(d).length > 0 ? i(l, { ...d }, p, h) : n.eq(l, d);
        default:
          return t.isObject(l) ? typeof d == "string" ? d === "" : !0 : n.eq(l, d);
      }
    }
    function a(l, d, p, h) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return c(l, d, p, h);
      if (d instanceof Map)
        return s(l, d, p, h);
      if (d instanceof Set)
        return u(l, d, p, h);
      const v = Object.keys(d);
      if (l == null)
        return v.length === 0;
      if (v.length === 0)
        return !0;
      if (h?.has(d))
        return h.get(d) === l;
      h?.set(d, l);
      try {
        for (let f = 0; f < v.length; f++) {
          const g = v[f];
          if (!r.isPrimitive(l) && !(g in l) || d[g] === void 0 && l[g] !== void 0 || d[g] === null && l[g] !== null || !p(l[g], d[g], g, l, d, h))
            return !1;
        }
        return !0;
      } finally {
        h?.delete(d);
      }
    }
    function s(l, d, p, h) {
      if (d.size === 0)
        return !0;
      if (!(l instanceof Map))
        return !1;
      for (const [v, f] of d.entries()) {
        const g = l.get(v);
        if (p(g, f, v, l, d, h) === !1)
          return !1;
      }
      return !0;
    }
    function c(l, d, p, h) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(l))
        return !1;
      const v = /* @__PURE__ */ new Set();
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        let y = !1;
        for (let w = 0; w < l.length; w++) {
          if (v.has(w))
            continue;
          const b = l[w];
          let E = !1;
          if (p(b, g, f, l, d, h) && (E = !0), E) {
            v.add(w), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function u(l, d, p, h) {
      return d.size === 0 ? !0 : l instanceof Set ? c([...l], [...d], p, h) : !1;
    }
    e.isMatchWith = o, e.isSetMatch = u;
  })(ru)), ru;
}
var Dv;
function eO() {
  return Dv || (Dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hL();
    function r(n, o) {
      return t.isMatchWith(n, o, () => {
      });
    }
    e.isMatch = r;
  })(tu)), tu;
}
var au = {}, su = {}, cu = {}, jv;
function mL() {
  return jv || (jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(cu)), cu;
}
var lu = {}, $v;
function tO() {
  return $v || ($v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(lu)), lu;
}
var uu = {}, Lv;
function rO() {
  return Lv || (Lv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", o = "[object Boolean]", i = "[object Arguments]", a = "[object Symbol]", s = "[object Date]", c = "[object Map]", u = "[object Set]", l = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", v = "[object Error]", f = "[object DataView]", g = "[object Uint8Array]", y = "[object Uint8ClampedArray]", w = "[object Uint16Array]", b = "[object Uint32Array]", E = "[object BigUint64Array]", S = "[object Int8Array]", P = "[object Int16Array]", O = "[object Int32Array]", A = "[object BigInt64Array]", _ = "[object Float32Array]", I = "[object Float64Array]";
    e.argumentsTag = i, e.arrayBufferTag = p, e.arrayTag = l, e.bigInt64ArrayTag = A, e.bigUint64ArrayTag = E, e.booleanTag = o, e.dataViewTag = f, e.dateTag = s, e.errorTag = v, e.float32ArrayTag = _, e.float64ArrayTag = I, e.functionTag = d, e.int16ArrayTag = P, e.int32ArrayTag = O, e.int8ArrayTag = S, e.mapTag = c, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = u, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = w, e.uint32ArrayTag = b, e.uint8ArrayTag = g, e.uint8ClampedArrayTag = y;
  })(uu)), uu;
}
var du = {}, Fv;
function vL() {
  return Fv || (Fv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(du)), du;
}
var Bv;
function nO() {
  return Bv || (Bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ mL(), r = /* @__PURE__ */ tO(), n = /* @__PURE__ */ rO(), o = /* @__PURE__ */ JP(), i = /* @__PURE__ */ vL();
    function a(l, d) {
      return s(l, void 0, l, /* @__PURE__ */ new Map(), d);
    }
    function s(l, d, p, h = /* @__PURE__ */ new Map(), v = void 0) {
      const f = v?.(l, d, p, h);
      if (f !== void 0)
        return f;
      if (o.isPrimitive(l))
        return l;
      if (h.has(l))
        return h.get(l);
      if (Array.isArray(l)) {
        const g = new Array(l.length);
        h.set(l, g);
        for (let y = 0; y < l.length; y++)
          g[y] = s(l[y], y, p, h, v);
        return Object.hasOwn(l, "index") && (g.index = l.index), Object.hasOwn(l, "input") && (g.input = l.input), g;
      }
      if (l instanceof Date)
        return new Date(l.getTime());
      if (l instanceof RegExp) {
        const g = new RegExp(l.source, l.flags);
        return g.lastIndex = l.lastIndex, g;
      }
      if (l instanceof Map) {
        const g = /* @__PURE__ */ new Map();
        h.set(l, g);
        for (const [y, w] of l)
          g.set(y, s(w, y, p, h, v));
        return g;
      }
      if (l instanceof Set) {
        const g = /* @__PURE__ */ new Set();
        h.set(l, g);
        for (const y of l)
          g.add(s(y, void 0, p, h, v));
        return g;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(l))
        return l.subarray();
      if (i.isTypedArray(l)) {
        const g = new (Object.getPrototypeOf(l)).constructor(l.length);
        h.set(l, g);
        for (let y = 0; y < l.length; y++)
          g[y] = s(l[y], y, p, h, v);
        return g;
      }
      if (l instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && l instanceof SharedArrayBuffer)
        return l.slice(0);
      if (l instanceof DataView) {
        const g = new DataView(l.buffer.slice(0), l.byteOffset, l.byteLength);
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (typeof File < "u" && l instanceof File) {
        const g = new File([l], l.name, {
          type: l.type
        });
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (typeof Blob < "u" && l instanceof Blob) {
        const g = new Blob([l], { type: l.type });
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (l instanceof Error) {
        const g = new l.constructor();
        return h.set(l, g), g.message = l.message, g.name = l.name, g.stack = l.stack, g.cause = l.cause, c(g, l, p, h, v), g;
      }
      if (l instanceof Boolean) {
        const g = new Boolean(l.valueOf());
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (l instanceof Number) {
        const g = new Number(l.valueOf());
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (l instanceof String) {
        const g = new String(l.valueOf());
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      if (typeof l == "object" && u(l)) {
        const g = Object.create(Object.getPrototypeOf(l));
        return h.set(l, g), c(g, l, p, h, v), g;
      }
      return l;
    }
    function c(l, d, p = l, h, v) {
      const f = [...Object.keys(d), ...t.getSymbols(d)];
      for (let g = 0; g < f.length; g++) {
        const y = f[g], w = Object.getOwnPropertyDescriptor(l, y);
        (w == null || w.writable) && (l[y] = s(d[y], y, p, h, v));
      }
    }
    function u(l) {
      switch (r.getTag(l)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = a, e.cloneDeepWithImpl = s, e.copyProperties = c;
  })(su)), su;
}
var zv;
function gL() {
  return zv || (zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nO();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(au)), au;
}
var Uv;
function yL() {
  return Uv || (Uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eO(), r = /* @__PURE__ */ gL();
    function n(o) {
      return o = r.cloneDeep(o), (i) => t.isMatch(i, o);
    }
    e.matches = n;
  })(eu)), eu;
}
var fu = {}, pu = {}, hu = {}, Wv;
function bL() {
  return Wv || (Wv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nO(), r = /* @__PURE__ */ rO();
    function n(o, i) {
      return t.cloneDeepWith(o, (a, s, c, u) => {
        const l = i?.(a, s, c, u);
        if (l !== void 0)
          return l;
        if (typeof o == "object")
          switch (Object.prototype.toString.call(o)) {
            case r.numberTag:
            case r.stringTag:
            case r.booleanTag: {
              const d = new o.constructor(o?.valueOf());
              return t.copyProperties(d, o), d;
            }
            case r.argumentsTag: {
              const d = {};
              return t.copyProperties(d, o), d.length = o.length, d[Symbol.iterator] = o[Symbol.iterator], d;
            }
            default:
              return;
          }
      });
    }
    e.cloneDeepWith = n;
  })(hu)), hu;
}
var Kv;
function wL() {
  return Kv || (Kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bL();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(pu)), pu;
}
var mu = {}, vu = {}, Vv;
function oO() {
  return Vv || (Vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, o = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < o;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(vu)), vu;
}
var gu = {}, qv;
function xL() {
  return qv || (qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ tO();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(gu)), gu;
}
var Hv;
function EL() {
  return Hv || (Hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ qP(), r = /* @__PURE__ */ oO(), n = /* @__PURE__ */ xL(), o = /* @__PURE__ */ kp();
    function i(a, s) {
      let c;
      if (Array.isArray(s) ? c = s : typeof s == "string" && t.isDeepKey(s) && a?.[s] == null ? c = o.toPath(s) : c = [s], c.length === 0)
        return !1;
      let u = a;
      for (let l = 0; l < c.length; l++) {
        const d = c[l];
        if ((u == null || !Object.hasOwn(u, d)) && !((Array.isArray(u) || n.isArguments(u)) && r.isIndex(d) && d < u.length))
          return !1;
        u = u[d];
      }
      return !0;
    }
    e.has = i;
  })(mu)), mu;
}
var Gv;
function SL() {
  return Gv || (Gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eO(), r = /* @__PURE__ */ _p(), n = /* @__PURE__ */ wL(), o = /* @__PURE__ */ Np(), i = /* @__PURE__ */ EL();
    function a(s, c) {
      switch (typeof s) {
        case "object": {
          Object.is(s?.valueOf(), -0) && (s = "-0");
          break;
        }
        case "number": {
          s = r.toKey(s);
          break;
        }
      }
      return c = n.cloneDeep(c), function(u) {
        const l = o.get(u, s);
        return l === void 0 ? i.has(u, s) : c === void 0 ? l === void 0 : t.isMatch(l, c);
      };
    }
    e.matchesProperty = a;
  })(fu)), fu;
}
var Yv;
function PL() {
  return Yv || (Yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ XP(), r = /* @__PURE__ */ pL(), n = /* @__PURE__ */ yL(), o = /* @__PURE__ */ SL();
    function i(a) {
      if (a == null)
        return t.identity;
      switch (typeof a) {
        case "function":
          return a;
        case "object":
          return Array.isArray(a) && a.length === 2 ? o.matchesProperty(a[0], a[1]) : n.matches(a);
        case "string":
        case "symbol":
        case "number":
          return r.property(a);
      }
    }
    e.iteratee = i;
  })(Jl)), Jl;
}
var Xv;
function OL() {
  return Xv || (Xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lL(), r = /* @__PURE__ */ XP(), n = /* @__PURE__ */ fL(), o = /* @__PURE__ */ PL();
    function i(a, s = r.identity) {
      return n.isArrayLikeObject(a) ? t.uniqBy(Array.from(a), o.iteratee(s)) : [];
    }
    e.uniqBy = i;
  })(Vl)), Vl;
}
var yu, Zv;
function AL() {
  return Zv || (Zv = 1, yu = OL().uniqBy), yu;
}
var CL = /* @__PURE__ */ AL();
const Jv = /* @__PURE__ */ an(CL);
function iO(e, t, r) {
  return t === !0 ? Jv(e, r) : typeof t == "function" ? Jv(e, t) : e;
}
var pa = { exports: {} }, bu = {}, ha = { exports: {} }, wu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qv;
function TL() {
  if (Qv) return wu;
  Qv = 1;
  var e = Pt;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(d, p) {
    var h = p(), v = n({ inst: { value: h, getSnapshot: p } }), f = v[0].inst, g = v[1];
    return i(
      function() {
        f.value = h, f.getSnapshot = p, c(f) && g({ inst: f });
      },
      [d, h, p]
    ), o(
      function() {
        return c(f) && g({ inst: f }), d(function() {
          c(f) && g({ inst: f });
        });
      },
      [d]
    ), a(h), h;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var h = p();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function u(d, p) {
    return p();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return wu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, wu;
}
var xu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eg;
function _L() {
  return eg || (eg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, v) {
      return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
    }
    function t(h, v) {
      l || o.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var f = v();
      if (!d) {
        var g = v();
        i(f, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      g = a({
        inst: { value: f, getSnapshot: v }
      });
      var y = g[0].inst, w = g[1];
      return c(
        function() {
          y.value = f, y.getSnapshot = v, r(y) && w({ inst: y });
        },
        [h, f, v]
      ), s(
        function() {
          return r(y) && w({ inst: y }), h(function() {
            r(y) && w({ inst: y });
          });
        },
        [h]
      ), u(f), f;
    }
    function r(h) {
      var v = h.getSnapshot;
      h = h.value;
      try {
        var f = v();
        return !i(h, f);
      } catch {
        return !0;
      }
    }
    function n(h, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Pt, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, l = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    xu.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), xu;
}
var tg;
function aO() {
  return tg || (tg = 1, process.env.NODE_ENV === "production" ? ha.exports = TL() : ha.exports = _L()), ha.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function kL() {
  if (rg) return bu;
  rg = 1;
  var e = Pt, t = aO();
  function r(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return bu.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
    var v = i(null);
    if (v.current === null) {
      var f = { hasValue: !1, value: null };
      v.current = f;
    } else f = v.current;
    v = s(
      function() {
        function y(P) {
          if (!w) {
            if (w = !0, b = P, P = p(P), h !== void 0 && f.hasValue) {
              var O = f.value;
              if (h(O, P))
                return E = O;
            }
            return E = P;
          }
          if (O = E, n(b, P)) return O;
          var A = p(P);
          return h !== void 0 && h(O, A) ? (b = P, O) : (b = P, E = A);
        }
        var w = !1, b, E, S = d === void 0 ? null : d;
        return [
          function() {
            return y(l());
          },
          S === null ? void 0 : function() {
            return y(S());
          }
        ];
      },
      [l, d, p, h]
    );
    var g = o(u, v[0], v[1]);
    return a(
      function() {
        f.hasValue = !0, f.value = g;
      },
      [g]
    ), c(g), g;
  }, bu;
}
var Eu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;
function NL() {
  return ng || (ng = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, l) {
      return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Pt, r = aO(), n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Eu.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
      var v = i(null);
      if (v.current === null) {
        var f = { hasValue: !1, value: null };
        v.current = f;
      } else f = v.current;
      v = s(
        function() {
          function y(P) {
            if (!w) {
              if (w = !0, b = P, P = p(P), h !== void 0 && f.hasValue) {
                var O = f.value;
                if (h(O, P))
                  return E = O;
              }
              return E = P;
            }
            if (O = E, n(b, P))
              return O;
            var A = p(P);
            return h !== void 0 && h(O, A) ? (b = P, O) : (b = P, E = A);
          }
          var w = !1, b, E, S = d === void 0 ? null : d;
          return [
            function() {
              return y(l());
            },
            S === null ? void 0 : function() {
              return y(S());
            }
          ];
        },
        [l, d, p, h]
      );
      var g = o(u, v[0], v[1]);
      return a(
        function() {
          f.hasValue = !0, f.value = g;
        },
        [g]
      ), c(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Eu;
}
var og;
function IL() {
  return og || (og = 1, process.env.NODE_ENV === "production" ? pa.exports = kL() : pa.exports = NL()), pa.exports;
}
var RL = IL(), $p = /* @__PURE__ */ Rt(null), ML = (e) => e, _e = () => {
  var e = Qt($p);
  return e ? e.store.dispatch : ML;
}, za = () => {
}, DL = () => za, jL = (e, t) => e === t;
function Z(e) {
  var t = Qt($p);
  return RL.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : DL, t ? t.store.getState : za, t ? t.store.getState : za, t ? e : za, jL);
}
var $L = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const o = {};
      e(o) === o && (n = !0);
    } catch {
    }
    if (n) {
      let o;
      try {
        throw new Error();
      } catch (i) {
        ({ stack: o } = i);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, LL = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: i, inputSelectorResultsCopy: a } = e, s = n(() => ({}), ...o);
  if (!(s.apply(null, i) === s.apply(null, a))) {
    let u;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: u } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: i,
        secondInputs: a,
        stack: u
      }
    );
  }
}, FL = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function BL(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function zL(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function UL(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var ig = (e) => Array.isArray(e) ? e : [e];
function WL(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return UL(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function ag(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var KL = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...FL,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: $L
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: LL
    }
  };
}, VL = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, qL = typeof WeakRef < "u" ? WeakRef : VL, HL = 0, sg = 1;
function ma() {
  return {
    s: HL,
    v: void 0,
    o: null,
    p: null
  };
}
function sO(e, t = {}) {
  let r = ma();
  const { resultEqualityCheck: n } = t;
  let o, i = 0;
  function a() {
    let s = r;
    const { length: c } = arguments;
    for (let d = 0, p = c; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let v = s.o;
        v === null && (s.o = v = /* @__PURE__ */ new WeakMap());
        const f = v.get(h);
        f === void 0 ? (s = ma(), v.set(h, s)) : s = f;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const f = v.get(h);
        f === void 0 ? (s = ma(), v.set(h, s)) : s = f;
      }
    }
    const u = s;
    let l;
    if (s.s === sg)
      l = s.v;
    else if (l = e.apply(null, arguments), i++, n) {
      const d = o?.deref?.() ?? o;
      d != null && n(d, l) && (l = d, i !== 0 && i--), o = typeof l == "object" && l !== null || typeof l == "function" ? new qL(l) : l;
    }
    return u.s = sg, u.v = l, l;
  }
  return a.clearCache = () => {
    r = ma(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function GL(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let i = 0, a = 0, s, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), BL(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const l = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: h = sO,
      argsMemoizeOptions: v = [],
      devModeChecks: f = {}
    } = l, g = ig(p), y = ig(v), w = WL(o), b = d(function() {
      return i++, u.apply(
        null,
        arguments
      );
    }, ...g);
    let E = !0;
    const S = h(function() {
      a++;
      const O = ag(
        w,
        arguments
      );
      if (s = b.apply(null, O), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: _ } = KL(E, f);
        if (A.shouldRun && A.run(
          u,
          O,
          s
        ), _.shouldRun) {
          const I = ag(
            w,
            arguments
          );
          _.run(
            { inputSelectorResults: O, inputSelectorResultsCopy: I },
            { memoize: d, memoizeOptions: g },
            arguments
          );
        }
        E && (E = !1);
      }
      return s;
    }, ...y);
    return Object.assign(S, {
      resultFunc: u,
      memoizedResultFunc: b,
      dependencies: w,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => s,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var C = /* @__PURE__ */ GL(sO), YL = Object.assign(
  (e, t = C) => {
    zL(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (i) => e[i]
    );
    return t(
      n,
      (...i) => i.reduce((a, s, c) => (a[r[c]] = s, a), {})
    );
  },
  { withTypes: () => YL }
), Su = {}, Pu = {}, Ou = {}, cg;
function XL() {
  return cg || (cg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, o, i) => {
      if (n !== o) {
        const a = t(n), s = t(o);
        if (a === s && a === 0) {
          if (n < o)
            return i === "desc" ? 1 : -1;
          if (n > o)
            return i === "desc" ? -1 : 1;
        }
        return i === "desc" ? s - a : a - s;
      }
      return 0;
    };
    e.compareValues = r;
  })(Ou)), Ou;
}
var Au = {}, Cu = {}, lg;
function cO() {
  return lg || (lg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Cu)), Cu;
}
var ug;
function ZL() {
  return ug || (ug = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cO(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function o(i, a) {
      return Array.isArray(i) ? !1 : typeof i == "number" || typeof i == "boolean" || i == null || t.isSymbol(i) ? !0 : typeof i == "string" && (n.test(i) || !r.test(i)) || a != null && Object.hasOwn(a, i);
    }
    e.isKey = o;
  })(Au)), Au;
}
var dg;
function JL() {
  return dg || (dg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ XL(), r = /* @__PURE__ */ ZL(), n = /* @__PURE__ */ kp();
    function o(i, a, s, c) {
      if (i == null)
        return [];
      s = c ? void 0 : s, Array.isArray(i) || (i = Object.values(i)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(s) || (s = s == null ? [] : [s]), s = s.map((h) => String(h));
      const u = (h, v) => {
        let f = h;
        for (let g = 0; g < v.length && f != null; ++g)
          f = f[v[g]];
        return f;
      }, l = (h, v) => v == null || h == null ? v : typeof h == "object" && "key" in h ? Object.hasOwn(v, h.key) ? v[h.key] : u(v, h.path) : typeof h == "function" ? h(v) : Array.isArray(h) ? u(v, h) : typeof v == "object" ? v[h] : v, d = a.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return i.map((h) => ({
        original: h,
        criteria: d.map((v) => l(v, h))
      })).slice().sort((h, v) => {
        for (let f = 0; f < d.length; f++) {
          const g = t.compareValues(h.criteria[f], v.criteria[f], s[f]);
          if (g !== 0)
            return g;
        }
        return 0;
      }).map((h) => h.original);
    }
    e.orderBy = o;
  })(Pu)), Pu;
}
var Tu = {}, fg;
function QL() {
  return fg || (fg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const o = [], i = Math.floor(n), a = (s, c) => {
        for (let u = 0; u < s.length; u++) {
          const l = s[u];
          Array.isArray(l) && c < i ? a(l, c + 1) : o.push(l);
        }
      };
      return a(r, 0), o;
    }
    e.flatten = t;
  })(Tu)), Tu;
}
var _u = {}, pg;
function lO() {
  return pg || (pg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oO(), r = /* @__PURE__ */ jp(), n = /* @__PURE__ */ ZP(), o = /* @__PURE__ */ QP();
    function i(a, s, c) {
      return n.isObject(c) && (typeof s == "number" && r.isArrayLike(c) && t.isIndex(s) && s < c.length || typeof s == "string" && s in c) ? o.eq(c[s], a) : !1;
    }
    e.isIterateeCall = i;
  })(_u)), _u;
}
var hg;
function e2() {
  return hg || (hg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ JL(), r = /* @__PURE__ */ QL(), n = /* @__PURE__ */ lO();
    function o(i, ...a) {
      const s = a.length;
      return s > 1 && n.isIterateeCall(i, a[0], a[1]) ? a = [] : s > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(i, r.flatten(a), ["asc"]);
    }
    e.sortBy = o;
  })(Su)), Su;
}
var ku, mg;
function t2() {
  return mg || (mg = 1, ku = e2().sortBy), ku;
}
var r2 = /* @__PURE__ */ t2();
const Ac = /* @__PURE__ */ an(r2);
var uO = (e) => e.legend.settings, n2 = (e) => e.legend.size, o2 = (e) => e.legend.payload, i2 = C([o2, uO], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ac(n, r) : n;
});
function a2() {
  return Z(i2);
}
var va = 1;
function dO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = We({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = ve(
    (o) => {
      if (o != null) {
        var i = o.getBoundingClientRect(), a = {
          height: i.height,
          left: i.left,
          top: i.top,
          width: i.width
        };
        (Math.abs(a.height - t.height) > va || Math.abs(a.left - t.left) > va || Math.abs(a.top - t.top) > va || Math.abs(a.width - t.width) > va) && r({
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function et(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var s2 = typeof Symbol == "function" && Symbol.observable || "@@observable", vg = s2, Nu = () => Math.random().toString(36).substring(7).split("").join("."), c2 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Nu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Nu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Nu()}`
}, wn = c2;
function Ii(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function l2(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (f2(e))
    return "date";
  if (d2(e))
    return "error";
  const r = u2(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function u2(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function d2(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function f2(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Vr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = l2(e)), t;
}
function fO(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? et(2) : `Expected the root reducer to be a function. Instead, received: '${Vr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? et(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(1) : `Expected the enhancer to be a function. Instead, received: '${Vr(r)}'`);
    return r(fO)(e, t);
  }
  let n = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function u() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((g, y) => {
      a.set(y, g);
    }));
  }
  function l() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? et(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(4) : `Expected the listener to be a function. Instead, received: '${Vr(g)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? et(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    u();
    const w = s++;
    return a.set(w, g), function() {
      if (y) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? et(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, u(), a.delete(w), i = null;
      }
    };
  }
  function p(g) {
    if (!Ii(g))
      throw new Error(process.env.NODE_ENV === "production" ? et(7) : `Actions must be plain objects. Instead, the actual type was: '${Vr(g)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? et(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof g.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? et(17) : `Action "type" property must be a string. Instead, the actual type was: '${Vr(g.type)}'. Value was: '${g.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? et(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = n(o, g);
    } finally {
      c = !1;
    }
    return (i = a).forEach((w) => {
      w();
    }), g;
  }
  function h(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(10) : `Expected the nextReducer to be a function. Instead, received: '${Vr(g)}`);
    n = g, p({
      type: wn.REPLACE
    });
  }
  function v() {
    const g = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? et(11) : `Expected the observer to be an object. Instead, received: '${Vr(y)}'`);
        function w() {
          const E = y;
          E.next && E.next(l());
        }
        return w(), {
          unsubscribe: g(w)
        };
      },
      [vg]() {
        return this;
      }
    };
  }
  return p({
    type: wn.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: l,
    replaceReducer: h,
    [vg]: v
  };
}
function gg(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function p2(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === wn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ii(e))
    return `The ${i} has unexpected type of "${Vr(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !n[s]);
  if (a.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === wn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function h2(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: wn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? et(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: wn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? et(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${wn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function pO(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && gg(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    h2(r);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const d = p2(s, r, c, o);
      d && gg(d);
    }
    let u = !1;
    const l = {};
    for (let d = 0; d < n.length; d++) {
      const p = n[d], h = r[p], v = s[p], f = h(v, c);
      if (typeof f > "u") {
        const g = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? et(14) : `When called with an action of type ${g ? `"${String(g)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[p] = f, u = u || f !== v;
    }
    return u = u || n.length !== Object.keys(s).length, u ? l : s;
  };
}
function ss(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function m2(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? et(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...u) => i(c, ...u)
    }, s = e.map((c) => c(a));
    return i = ss(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Lp(e) {
  return Ii(e) && "type" in e && typeof e.type == "string";
}
var hO = Symbol.for("immer-nothing"), yg = Symbol.for("immer-draftable"), It = Symbol.for("immer-state"), v2 = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function gt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = v2[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var si = Object.getPrototypeOf;
function Rn(e) {
  return !!e && !!e[It];
}
function Nr(e) {
  return e ? mO(e) || Array.isArray(e) || !!e[yg] || !!e.constructor?.[yg] || Ri(e) || Tc(e) : !1;
}
var g2 = Object.prototype.constructor.toString(), bg = /* @__PURE__ */ new WeakMap();
function mO(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = bg.get(r);
  return n === void 0 && (n = Function.toString.call(r), bg.set(r, n)), n === g2;
}
function cs(e, t, r = !0) {
  Cc(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Cc(e) {
  const t = e[It];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ri(e) ? 2 : Tc(e) ? 3 : 0;
}
function Kd(e, t) {
  return Cc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function vO(e, t, r) {
  const n = Cc(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function y2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ri(e) {
  return e instanceof Map;
}
function Tc(e) {
  return e instanceof Set;
}
function pn(e) {
  return e.copy_ || e.base_;
}
function Vd(e, t) {
  if (Ri(e))
    return new Map(e);
  if (Tc(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = mO(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[It];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const a = o[i], s = n[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[a]
      });
    }
    return Object.create(si(e), n);
  } else {
    const n = si(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Fp(e, t = !1) {
  return _c(e) || Rn(e) || !Nr(e) || (Cc(e) > 1 && Object.defineProperties(e, {
    set: ga,
    add: ga,
    clear: ga,
    delete: ga
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Fp(r, !0))), e;
}
function b2() {
  gt(2);
}
var ga = {
  value: b2
};
function _c(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var w2 = {};
function Mn(e) {
  const t = w2[e];
  return t || gt(0, e), t;
}
var ci;
function gO() {
  return ci;
}
function x2(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function wg(e, t) {
  t && (Mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function qd(e) {
  Hd(e), e.drafts_.forEach(E2), e.drafts_ = null;
}
function Hd(e) {
  e === ci && (ci = e.parent_);
}
function xg(e) {
  return ci = x2(ci, e);
}
function E2(e) {
  const t = e[It];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Eg(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[It].modified_ && (qd(t), gt(4)), Nr(e) && (e = ls(t, e), t.parent_ || us(t, e)), t.patches_ && Mn("Patches").generateReplacementPatches_(
    r[It].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ls(t, r, []), qd(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== hO ? e : void 0;
}
function ls(e, t, r) {
  if (_c(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), o = t[It];
  if (!o)
    return cs(
      t,
      (i, a) => Sg(e, o, t, i, a, r),
      n
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return us(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let a = i, s = !1;
    o.type_ === 3 && (a = new Set(i), i.clear(), s = !0), cs(
      a,
      (c, u) => Sg(
        e,
        o,
        i,
        c,
        u,
        r,
        s
      ),
      n
    ), us(e, i, !1), r && e.patches_ && Mn("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Sg(e, t, r, n, o, i, a) {
  if (o == null || typeof o != "object" && !a)
    return;
  const s = _c(o);
  if (!(s && !a)) {
    if (process.env.NODE_ENV !== "production" && o === r && gt(5), Rn(o)) {
      const c = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Kd(t.assigned_, n) ? i.concat(n) : void 0, u = ls(e, o, c);
      if (vO(r, n, u), Rn(u))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(o);
    if (Nr(o) && !s) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === o && s)
        return;
      ls(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Ri(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && us(e, o);
    }
  }
}
function us(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Fp(t, r);
}
function S2(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : gO(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = Bp;
  r && (o = [n], i = li);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = a, s;
}
var Bp = {
  get(e, t) {
    if (t === It)
      return e;
    const r = pn(e);
    if (!Kd(r, t))
      return P2(e, r, t);
    const n = r[t];
    return e.finalized_ || !Nr(n) ? n : n === Iu(e.base_, t) ? (Ru(e), e.copy_[t] = Yd(n, e)) : n;
  },
  has(e, t) {
    return t in pn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(pn(e));
  },
  set(e, t, r) {
    const n = yO(pn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Iu(pn(e), t), i = o?.[It];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (y2(r, o) && (r !== void 0 || Kd(e.base_, t)))
        return !0;
      Ru(e), Gd(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Iu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ru(e), Gd(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = pn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    gt(11);
  },
  getPrototypeOf(e) {
    return si(e.base_);
  },
  setPrototypeOf() {
    gt(12);
  }
}, li = {};
cs(Bp, (e, t) => {
  li[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
li.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && gt(13), li.set.call(this, e, t, void 0);
};
li.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && gt(14), Bp.set.call(this, e[0], t, r, e[0]);
};
function Iu(e, t) {
  const r = e[It];
  return (r ? pn(r) : e)[t];
}
function P2(e, t, r) {
  const n = yO(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function yO(e, t) {
  if (!(t in e))
    return;
  let r = si(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = si(r);
  }
}
function Gd(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Gd(e.parent_));
}
function Ru(e) {
  e.copy_ || (e.copy_ = Vd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var O2 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const a = this;
        return function(c = i, ...u) {
          return a.produce(c, (l) => r.call(this, l, ...u));
        };
      }
      typeof r != "function" && gt(6), n !== void 0 && typeof n != "function" && gt(7);
      let o;
      if (Nr(t)) {
        const i = xg(this), a = Yd(t, void 0);
        let s = !0;
        try {
          o = r(a), s = !1;
        } finally {
          s ? qd(i) : Hd(i);
        }
        return wg(i, n), Eg(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === hO && (o = void 0), this.autoFreeze_ && Fp(o, !0), n) {
          const i = [], a = [];
          Mn("Patches").generateReplacementPatches_(t, o, i, a), n(i, a);
        }
        return o;
      } else
        gt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => t(c, ...s));
      let n, o;
      return [this.produce(t, r, (a, s) => {
        n = a, o = s;
      }), n, o];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Nr(e) || gt(8), Rn(e) && (e = Pr(e));
    const t = xg(this), r = Yd(e, void 0);
    return r[It].isManual_ = !0, Hd(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[It];
    (!r || !r.isManual_) && gt(9);
    const { scope_: n } = r;
    return wg(n, t), Eg(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Mn("Patches").applyPatches_;
    return Rn(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Yd(e, t) {
  const r = Ri(e) ? Mn("MapSet").proxyMap_(e, t) : Tc(e) ? Mn("MapSet").proxySet_(e, t) : S2(e, t);
  return (t ? t.scope_ : gO()).drafts_.push(r), r;
}
function Pr(e) {
  return Rn(e) || gt(10, e), bO(e);
}
function bO(e) {
  if (!Nr(e) || _c(e))
    return e;
  const t = e[It];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Vd(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Vd(e, !0);
  return cs(
    r,
    (o, i) => {
      vO(r, o, bO(i));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var Xd = new O2(), wO = Xd.produce, A2 = /* @__PURE__ */ Xd.setUseStrictIteration.bind(
  Xd
);
function xO(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var C2 = xO(), T2 = xO, _2 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ss : ss.apply(null, arguments);
}, k2 = (e) => e && typeof e.match == "function";
function Vt(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? he(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Lp(n) && n.type === e, r;
}
function N2(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  k2(e);
}
function I2(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function R2(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = N2
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(I2(n.type)), r(n));
}
function EO(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const i = Date.now();
        r += i - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var SO = class Xo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Xo.prototype);
  }
  static get [Symbol.species]() {
    return Xo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Xo(...t[0].concat(this)) : new Xo(...t.concat(this));
  }
};
function Pg(e) {
  return Nr(e) ? wO(e, () => {
  }) : e;
}
function ya(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function M2(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function D2(e, t, r) {
  const n = PO(e, t, r);
  return {
    detectMutations() {
      return OO(e, t, n, r);
    }
  };
}
function PO(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), i.children = {};
    for (const a in r) {
      const s = n ? n + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = PO(e, t, r[a], s));
    }
  }
  return i;
}
function OO(e, t = [], r, n, o = !1, i = "") {
  const a = r ? r.value : void 0, s = a === n;
  if (o && !s && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(a) || e(n))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let l in r.children)
    c[l] = !0;
  for (let l in n)
    c[l] = !0;
  const u = t.length > 0;
  for (let l in c) {
    const d = i ? i + "." + l : l;
    if (u && t.some((v) => v instanceof RegExp ? v.test(d) : d === v))
      continue;
    const p = OO(e, t, r.children[l], n[l], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function j2(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(s, c, u, l) {
      return JSON.stringify(s, r(c, l), u);
    }, r = function(s, c) {
      let u = [], l = [];
      return c || (c = function(d, p) {
        return u[0] === p ? "[Circular ~]" : "[Circular ~." + l.slice(0, u.indexOf(p)).join(".") + "]";
      }), function(d, p) {
        if (u.length > 0) {
          var h = u.indexOf(this);
          ~h ? u.splice(h + 1) : u.push(this), ~h ? l.splice(h, 1 / 0, d) : l.push(d), ~u.indexOf(p) && (p = c.call(this, d, p));
        } else u.push(p);
        return s == null ? p : s.call(this, d, p);
      };
    }, {
      isImmutable: n = M2,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = D2.bind(null, n, o);
    return ({
      getState: s
    }) => {
      let c = s(), u = a(c), l;
      return (d) => (p) => {
        const h = EO(i, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = a(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const v = d(p);
        return h.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = a(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), v;
      };
    };
  }
}
function AO(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ii(e);
}
function Zd(e, t = "", r = AO, n, o = [], i) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i?.has(e)) return !1;
  const s = n != null ? n(e) : Object.entries(e), c = o.length > 0;
  for (const [u, l] of s) {
    const d = t ? t + "." + u : u;
    if (!(c && o.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!r(l))
        return {
          keyPath: d,
          value: l
        };
      if (typeof l == "object" && (a = Zd(l, d, r, n, o, i), a))
        return a;
    }
  }
  return i && CO(e) && i.add(e), !1;
}
function CO(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !CO(t))
      return !1;
  return !0;
}
function $2(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = AO,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: u = !1
    } = e, l = !u && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!Lp(h))
        return p(h);
      const v = p(h), f = EO(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(h.type) !== -1) && f.measureTime(() => {
        const g = Zd(h, "", t, r, o, l);
        if (g) {
          const {
            keyPath: y,
            value: w
          } = g;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (f.measureTime(() => {
        const g = d.getState(), y = Zd(g, "", t, r, i, l);
        if (y) {
          const {
            keyPath: w,
            value: b
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), f.warnIfExceeded()), v;
    };
  }
}
function ba(e) {
  return typeof e == "boolean";
}
var L2 = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new SO();
  if (r && (ba(r) ? a.push(C2) : a.push(T2(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let s = {};
      ba(n) || (s = n), a.unshift(j2(s));
    }
    if (o) {
      let s = {};
      ba(o) || (s = o), a.push($2(s));
    }
    if (i) {
      let s = {};
      ba(i) || (s = i), a.unshift(R2(s));
    }
  }
  return a;
}, TO = "RTK_autoBatch", ut = () => (e) => ({
  payload: e,
  meta: {
    [TO]: !0
  }
}), Og = (e) => (t) => {
  setTimeout(t, e);
}, _O = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Og(10)
  ) : e.type === "callback" ? e.queueNotification : Og(e.timeout), u = () => {
    a = !1, i && (i = !1, s.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const d = () => o && l(), p = n.subscribe(d);
      return s.add(l), () => {
        p(), s.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      try {
        return o = !l?.meta?.[TO], i = !o, i && (a || (a = !0, c(u))), n.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, F2 = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new SO(e);
  return n && o.push(_O(typeof n == "object" ? n : void 0)), o;
};
function B2(e) {
  const t = L2(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    duplicateMiddlewareCheck: i = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = e || {};
  let c;
  if (typeof r == "function")
    c = r;
  else if (Ii(r))
    c = pO(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? he(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(2) : "`middleware` field must be a callback");
  let u;
  if (typeof n == "function") {
    if (u = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? he(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (process.env.NODE_ENV !== "production" && u.some((f) => typeof f != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && i) {
    let f = /* @__PURE__ */ new Set();
    u.forEach((g) => {
      if (f.has(g))
        throw new Error(process.env.NODE_ENV === "production" ? he(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      f.add(g);
    });
  }
  let l = ss;
  o && (l = _2({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = m2(...u), p = F2(d);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(5) : "`enhancers` field must be a callback");
  let h = typeof s == "function" ? s(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? he(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((f) => typeof f != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && u.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = l(...h);
  return fO(c, a, v);
}
function kO(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(i, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? he(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? he(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? he(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? he(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addAsyncThunk(i, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return a.pending && (t[i.pending.type] = a.pending), a.rejected && (t[i.rejected.type] = a.rejected), a.fulfilled && (t[i.fulfilled.type] = a.fulfilled), a.settled && r.push({
        matcher: i.settled,
        reducer: a.settled
      }), o;
    },
    addMatcher(i, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [t, r, n];
}
A2(!1);
function z2(e) {
  return typeof e == "function";
}
function U2(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? he(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = kO(t), i;
  if (z2(e))
    i = () => Pg(e());
  else {
    const s = Pg(e);
    i = () => s;
  }
  function a(s = i(), c) {
    let u = [r[c.type], ...n.filter(({
      matcher: l
    }) => l(c)).map(({
      reducer: l
    }) => l)];
    return u.filter((l) => !!l).length === 0 && (u = [o]), u.reduce((l, d) => {
      if (d)
        if (Rn(l)) {
          const h = d(l, c);
          return h === void 0 ? l : h;
        } else {
          if (Nr(l))
            return wO(l, (p) => d(p, c));
          {
            const p = d(l, c);
            if (p === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return l;
    }, s);
  }
  return a.getInitialState = i, a;
}
var W2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", K2 = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += W2[Math.random() * 64 | 0];
  return t;
}, V2 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function q2(e, t) {
  return `${e}/${t}`;
}
function H2({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[V2];
  return function(n) {
    const {
      name: o,
      reducerPath: i = o
    } = n;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? he(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof n.reducers == "function" ? n.reducers(Y2()) : n.reducers) || {}, s = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(b, E) {
        const S = typeof b == "string" ? b : b.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? he(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? he(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return c.sliceCaseReducersByType[S] = E, u;
      },
      addMatcher(b, E) {
        return c.sliceMatchers.push({
          matcher: b,
          reducer: E
        }), u;
      },
      exposeAction(b, E) {
        return c.actionCreators[b] = E, u;
      },
      exposeCaseReducer(b, E) {
        return c.sliceCaseReducersByName[b] = E, u;
      }
    };
    s.forEach((b) => {
      const E = a[b], S = {
        reducerName: b,
        type: q2(o, b),
        createNotation: typeof n.reducers == "function"
      };
      Z2(E) ? Q2(S, E, u, t) : X2(S, E, u);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? he(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, E = [], S = void 0] = typeof n.extraReducers == "function" ? kO(n.extraReducers) : [n.extraReducers], P = {
        ...b,
        ...c.sliceCaseReducersByType
      };
      return U2(n.initialState, (O) => {
        for (let A in P)
          O.addCase(A, P[A]);
        for (let A of c.sliceMatchers)
          O.addMatcher(A.matcher, A.reducer);
        for (let A of E)
          O.addMatcher(A.matcher, A.reducer);
        S && O.addDefaultCase(S);
      });
    }
    const d = (b) => b, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let v;
    function f(b, E) {
      return v || (v = l()), v(b, E);
    }
    function g() {
      return v || (v = l()), v.getInitialState();
    }
    function y(b, E = !1) {
      function S(O) {
        let A = O[b];
        if (typeof A > "u") {
          if (E)
            A = ya(h, S, g);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? he(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function P(O = d) {
        const A = ya(p, E, () => /* @__PURE__ */ new WeakMap());
        return ya(A, O, () => {
          const _ = {};
          for (const [I, T] of Object.entries(n.selectors ?? {}))
            _[I] = G2(T, O, () => ya(h, O, g), E);
          return _;
        });
      }
      return {
        reducerPath: b,
        getSelectors: P,
        get selectors() {
          return P(S);
        },
        selectSlice: S
      };
    }
    const w = {
      name: o,
      reducer: f,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: g,
      ...y(i),
      injectInto(b, {
        reducerPath: E,
        ...S
      } = {}) {
        const P = E ?? i;
        return b.inject({
          reducerPath: P,
          reducer: f
        }, S), {
          ...w,
          ...y(P, !0)
        };
      }
    };
    return w;
  };
}
function G2(e, t, r, n) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (n)
        s = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? he(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var Dt = /* @__PURE__ */ H2();
function Y2() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function X2({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, a;
  if ("reducer" in n) {
    if (r && !J2(n))
      throw new Error(process.env.NODE_ENV === "production" ? he(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, a = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Vt(e, a) : Vt(e));
}
function Z2(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function J2(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Q2({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? he(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: u,
    options: l
  } = r, d = o(e, i, l);
  n.exposeAction(t, d), a && n.addCase(d.fulfilled, a), s && n.addCase(d.pending, s), c && n.addCase(d.rejected, c), u && n.addMatcher(d.settled, u), n.exposeCaseReducer(t, {
    fulfilled: a || wa,
    pending: s || wa,
    rejected: c || wa,
    settled: u || wa
  });
}
function wa() {
}
var eF = "task", NO = "listener", IO = "completed", zp = "cancelled", tF = `task-${zp}`, rF = `task-${IO}`, Jd = `${NO}-${zp}`, nF = `${NO}-${IO}`, kc = class {
  constructor(e) {
    this.code = e, this.message = `${eF} ${zp} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Up = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? he(32) : `${t} is not a function`);
}, ds = () => {
}, RO = (e, t = ds) => (e.catch(t), e), MO = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), xn = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, En = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new kc(t);
  }
};
function DO(e, t) {
  let r = ds;
  return new Promise((n, o) => {
    const i = () => o(new kc(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    r = MO(e, i), t.finally(() => r()).then(n, o);
  }).finally(() => {
    r = ds;
  });
}
var oF = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof kc ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, fs = (e) => (t) => RO(DO(e, t).then((r) => (En(e), r))), jO = (e) => {
  const t = fs(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: to
} = Object, Ag = {}, Mi = "listenerMiddleware", iF = (e, t) => {
  const r = (n) => MO(e, () => xn(n, e.reason));
  return (n, o) => {
    Up(n, "taskExecutor");
    const i = new AbortController();
    r(i);
    const a = oF(async () => {
      En(e), En(i.signal);
      const s = await n({
        pause: fs(i.signal),
        delay: jO(i.signal),
        signal: i.signal
      });
      return En(i.signal), s;
    }, () => xn(i, rF));
    return o?.autoJoin && t.push(a.catch(ds)), {
      result: fs(e)(a),
      cancel() {
        xn(i, tF);
      }
    };
  };
}, aF = (e, t) => {
  const r = async (n, o) => {
    En(t);
    let i = () => {
    };
    const s = [new Promise((c, u) => {
      let l = e({
        predicate: n,
        effect: (d, p) => {
          p.unsubscribe(), c([d, p.getState(), p.getOriginalState()]);
        }
      });
      i = () => {
        l(), u();
      };
    })];
    o != null && s.push(new Promise((c) => setTimeout(c, o, null)));
    try {
      const c = await DO(t, Promise.race(s));
      return En(t), c;
    } finally {
      i();
    }
  };
  return (n, o) => RO(r(n, o));
}, $O = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Vt(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o) throw new Error(process.env.NODE_ENV === "production" ? he(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Up(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, LO = /* @__PURE__ */ to((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = $O(e);
  return {
    id: K2(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? he(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => LO
}), Cg = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: o
  } = $O(t);
  return Array.from(e.values()).find((i) => (typeof r == "string" ? i.type === r : i.predicate === o) && i.effect === n);
}, Qd = (e) => {
  e.pending.forEach((t) => {
    xn(t, Jd);
  });
}, sF = (e, t) => () => {
  for (const r of t.keys())
    Qd(r);
  e.clear();
}, Tg = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, FO = /* @__PURE__ */ to(/* @__PURE__ */ Vt(`${Mi}/add`), {
  withTypes: () => FO
}), cF = /* @__PURE__ */ Vt(`${Mi}/removeAll`), BO = /* @__PURE__ */ to(/* @__PURE__ */ Vt(`${Mi}/remove`), {
  withTypes: () => BO
}), lF = (...e) => {
  console.error(`${Mi}/error`, ...e);
}, Di = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const v = r.get(h) ?? 0;
    r.set(h, v + 1);
  }, o = (h) => {
    const v = r.get(h) ?? 1;
    v === 1 ? r.delete(h) : r.set(h, v - 1);
  }, {
    extra: i,
    onError: a = lF
  } = e;
  Up(a, "onError");
  const s = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (v) => {
    h.unsubscribe(), v?.cancelActive && Qd(h);
  }), c = (h) => {
    const v = Cg(t, h) ?? LO(h);
    return s(v);
  };
  to(c, {
    withTypes: () => c
  });
  const u = (h) => {
    const v = Cg(t, h);
    return v && (v.unsubscribe(), h.cancelActive && Qd(v)), !!v;
  };
  to(u, {
    withTypes: () => u
  });
  const l = async (h, v, f, g) => {
    const y = new AbortController(), w = aF(c, y.signal), b = [];
    try {
      h.pending.add(y), n(h), await Promise.resolve(h.effect(
        v,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        to({}, f, {
          getOriginalState: g,
          condition: (E, S) => w(E, S).then(Boolean),
          take: w,
          delay: jO(y.signal),
          pause: fs(y.signal),
          extra: i,
          signal: y.signal,
          fork: iF(y.signal, b),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((E, S, P) => {
              E !== y && (xn(E, Jd), P.delete(E));
            });
          },
          cancel: () => {
            xn(y, Jd), h.pending.delete(y);
          },
          throwIfCancelled: () => {
            En(y.signal);
          }
        })
      ));
    } catch (E) {
      E instanceof kc || Tg(a, E, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(b), xn(y, nF), o(h), h.pending.delete(y);
    }
  }, d = sF(t, r);
  return {
    middleware: (h) => (v) => (f) => {
      if (!Lp(f))
        return v(f);
      if (FO.match(f))
        return c(f.payload);
      if (cF.match(f)) {
        d();
        return;
      }
      if (BO.match(f))
        return u(f.payload);
      let g = h.getState();
      const y = () => {
        if (g === Ag)
          throw new Error(process.env.NODE_ENV === "production" ? he(23) : `${Mi}: getOriginalState can only be called synchronously`);
        return g;
      };
      let w;
      try {
        if (w = v(f), t.size > 0) {
          const b = h.getState(), E = Array.from(t.values());
          for (const S of E) {
            let P = !1;
            try {
              P = S.predicate(f, b, g);
            } catch (O) {
              P = !1, Tg(a, O, {
                raisedBy: "predicate"
              });
            }
            P && l(S, f, h, y);
          }
        }
      } finally {
        g = Ag;
      }
      return w;
    },
    startListening: c,
    stopListening: u,
    clearListeners: d
  };
};
function he(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var uF = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, zO = Dt({
  name: "chartLayout",
  initialState: uF,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, o, i;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (o = t.payload.bottom) !== null && o !== void 0 ? o : 0, e.margin.left = (i = t.payload.left) !== null && i !== void 0 ? i : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: dF,
  setLayout: fF,
  setChartSize: pF,
  setScale: hF
} = zO.actions, mF = zO.reducer;
function _g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _g(Object(r), !0).forEach(function(n) {
      vF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vF(e, t, r) {
  return (t = gF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gF(e) {
  var t = yF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ps = Math.PI / 180, bF = (e) => e * 180 / Math.PI, $e = (e, t, r, n) => ({
  x: e + Math.cos(-ps * n) * r,
  y: t + Math.sin(-ps * n) * r
}), UO = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, wF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: o,
    y: i
  } = t;
  return Math.sqrt((r - o) ** 2 + (n - i) ** 2);
}, xF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: o,
    cy: i
  } = t, a = wF({
    x: r,
    y: n
  }, {
    x: o,
    y: i
  });
  if (a <= 0)
    return {
      radius: a,
      angle: 0
    };
  var s = (r - o) / a, c = Math.acos(s);
  return n > i && (c = 2 * Math.PI - c), {
    radius: a,
    angle: bF(c),
    angleInRadian: c
  };
}, EF = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), o = Math.floor(r / 360), i = Math.min(n, o);
  return {
    startAngle: t - i * 360,
    endAngle: r - i * 360
  };
}, SF = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, o = Math.floor(r / 360), i = Math.floor(n / 360), a = Math.min(o, i);
  return e + a * 360;
}, PF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: o,
    angle: i
  } = xF({
    x: r,
    y: n
  }, t), {
    innerRadius: a,
    outerRadius: s
  } = t;
  if (o < a || o > s || o === 0)
    return null;
  var {
    startAngle: c,
    endAngle: u
  } = EF(t), l = i, d;
  if (c <= u) {
    for (; l > u; )
      l -= 360;
    for (; l < c; )
      l += 360;
    d = l >= c && l <= u;
  } else {
    for (; l > c; )
      l -= 360;
    for (; l < u; )
      l += 360;
    d = l >= u && l <= c;
  }
  return d ? kg(kg({}, t), {}, {
    radius: o,
    angle: SF(l, t)
  }) : null;
};
function WO(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function Ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), !0).forEach(function(n) {
      OF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OF(e, t, r) {
  return (t = AF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AF(e) {
  var t = CF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xe(e, t, r) {
  return Ae(e) || Ae(t) ? r : dr(t) ? In(e, t, r) : typeof t == "function" ? t(e) : r;
}
var TF = (e, t, r, n, o) => {
  var i, a = -1, s = (i = t?.length) !== null && i !== void 0 ? i : 0;
  if (s <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && o != null && Math.abs(Math.abs(o[1] - o[0]) - 360) <= 1e-6)
    for (var c = 0; c < s; c++) {
      var u = c > 0 ? r[c - 1].coordinate : r[s - 1].coordinate, l = r[c].coordinate, d = c >= s - 1 ? r[0].coordinate : r[c + 1].coordinate, p = void 0;
      if (Xe(l - u) !== Xe(d - l)) {
        var h = [];
        if (Xe(d - l) === Xe(o[1] - o[0])) {
          p = d;
          var v = l + o[1] - o[0];
          h[0] = Math.min(v, (v + u) / 2), h[1] = Math.max(v, (v + u) / 2);
        } else {
          p = u;
          var f = d + o[1] - o[0];
          h[0] = Math.min(l, (f + l) / 2), h[1] = Math.max(l, (f + l) / 2);
        }
        var g = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (e > g[0] && e <= g[1] || e >= h[0] && e <= h[1]) {
          ({
            index: a
          } = r[c]);
          break;
        }
      } else {
        var y = Math.min(u, d), w = Math.max(u, d);
        if (e > (y + l) / 2 && e <= (w + l) / 2) {
          ({
            index: a
          } = r[c]);
          break;
        }
      }
    }
  else if (t) {
    for (var b = 0; b < s; b++)
      if (b === 0 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b > 0 && b < s - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b === s - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2) {
        ({
          index: a
        } = t[b]);
        break;
      }
  }
  return a;
}, _F = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: o
    } = r, {
      align: i,
      verticalAlign: a,
      layout: s
    } = t;
    if ((s === "vertical" || s === "horizontal" && a === "middle") && i !== "center" && X(e[i]))
      return Bt(Bt({}, e), {}, {
        [i]: e[i] + (n || 0)
      });
    if ((s === "horizontal" || s === "vertical" && i === "center") && a !== "middle" && X(e[a]))
      return Bt(Bt({}, e), {}, {
        [a]: e[a] + (o || 0)
      });
  }
  return e;
}, vr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", KO = (e, t, r, n) => {
  if (n)
    return e.map((s) => s.coordinate);
  var o, i, a = e.map((s) => (s.coordinate === t && (o = !0), s.coordinate === r && (i = !0), s.coordinate));
  return o || a.push(t), i || a.push(r), a;
}, VO = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: o,
    range: i,
    scale: a,
    realScaleType: s,
    isCategorical: c,
    categoricalDomain: u,
    tickCount: l,
    ticks: d,
    niceTicks: p,
    axisType: h
  } = e;
  if (!a)
    return null;
  var v = s === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, f = o === "category" && a.bandwidth ? a.bandwidth() / v : 0;
  if (f = h === "angleAxis" && i && i.length >= 2 ? Xe(i[0] - i[1]) * 2 * f : f, d || p) {
    var g = (d || p || []).map((y, w) => {
      var b = n ? n.indexOf(y) : y;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(b) + f,
        value: y,
        offset: f,
        index: w
      };
    });
    return g.filter((y) => !Nt(y.coordinate));
  }
  return c && u ? u.map((y, w) => ({
    coordinate: a(y) + f,
    value: y,
    index: w,
    offset: f
  })) : a.ticks && l != null ? a.ticks(l).map((y, w) => ({
    coordinate: a(y) + f,
    value: y,
    offset: f,
    index: w
  })) : a.domain().map((y, w) => ({
    coordinate: a(y) + f,
    value: n ? n[y] : y,
    index: w,
    offset: f
  }));
}, Ig = 1e-4, kF = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), o = Math.min(n[0], n[1]) - Ig, i = Math.max(n[0], n[1]) + Ig, a = e(t[0]), s = e(t[r - 1]);
    (a < o || a > i || s < o || s > i) && e.domain([t[0], t[r - 1]]);
  }
}, NF = (e, t) => {
  if (!t || t.length !== 2 || !X(t[0]) || !X(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), o = [e[0], e[1]];
  return (!X(e[0]) || e[0] < r) && (o[0] = r), (!X(e[1]) || e[1] > n) && (o[1] = n), o[0] > n && (o[0] = n), o[1] < r && (o[1] = r), o;
}, IF = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, i = 0, a = 0; a < t; ++a) {
        var s = Nt(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        s >= 0 ? (e[a][r][0] = o, e[a][r][1] = o + s, o = e[a][r][1]) : (e[a][r][0] = i, e[a][r][1] = i + s, i = e[a][r][1]);
      }
}, RF = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, i = 0; i < t; ++i) {
        var a = Nt(e[i][r][1]) ? e[i][r][0] : e[i][r][1];
        a >= 0 ? (e[i][r][0] = o, e[i][r][1] = o + a, o = e[i][r][1]) : (e[i][r][0] = 0, e[i][r][1] = 0);
      }
}, MF = {
  sign: IF,
  // @ts-expect-error definitelytyped types are incorrect
  expand: z$,
  // @ts-expect-error definitelytyped types are incorrect
  none: ao,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: U$,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: W$,
  positive: RF
}, DF = (e, t, r) => {
  var n = MF[r], o = B$().keys(t).value((i, a) => +xe(i, a, 0)).order(zd).offset(n);
  return o(e);
};
function qO(e) {
  return e == null ? void 0 : String(e);
}
function hs(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: o,
    index: i,
    dataKey: a
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ae(o[t.dataKey])) {
      var s = GP(r, "value", o[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var c = xe(o, Ae(a) ? t.dataKey : a);
  return Ae(c) ? null : t.scale(c);
}
var Rg = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: o,
    entry: i,
    index: a
  } = e;
  if (t.type === "category")
    return r[a] ? r[a].coordinate + n : null;
  var s = xe(i, t.dataKey, t.scale.domain()[a]);
  return Ae(s) ? null : t.scale(s) - o / 2 + n;
}, jF = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), o = Math.max(r[0], r[1]);
    return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
  }
  return r[0];
}, $F = (e) => {
  var t = e.flat(2).filter(X);
  return [Math.min(...t), Math.max(...t)];
}, LF = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], FF = (e, t, r) => {
  if (e != null)
    return LF(Object.keys(e).reduce((n, o) => {
      var i = e[o], {
        stackedData: a
      } = i, s = a.reduce((c, u) => {
        var l = WO(u, t, r), d = $F(l);
        return [Math.min(c[0], d[0]), Math.max(c[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(s[0], n[0]), Math.max(s[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, Mg = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dg = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dn = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var o = Ac(t, (l) => l.coordinate), i = 1 / 0, a = 1, s = o.length; a < s; a++) {
      var c = o[a], u = o[a - 1];
      i = Math.min((c.coordinate || 0) - (u.coordinate || 0), i);
    }
    return i === 1 / 0 ? 0 : i;
  }
  return r ? void 0 : 0;
};
function jg(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: o,
    name: i
  } = e;
  return Bt(Bt({}, t), {}, {
    dataKey: r,
    payload: n,
    value: o,
    name: i
  });
}
function sn(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
function BF(e, t, r, n, o) {
  if (r === "horizontal" || r === "vertical") {
    var i = e >= o.left && e <= o.left + o.width && t >= o.top && t <= o.top + o.height;
    return i ? {
      x: e,
      y: t
    } : null;
  }
  return n ? PF({
    x: e,
    y: t
  }, n) : null;
}
var zF = (e, t, r, n) => {
  var o = t.find((u) => u && u.index === r);
  if (o) {
    if (e === "horizontal")
      return {
        x: o.coordinate,
        y: n.y
      };
    if (e === "vertical")
      return {
        x: n.x,
        y: o.coordinate
      };
    if (e === "centric") {
      var i = o.coordinate, {
        radius: a
      } = n;
      return Bt(Bt(Bt({}, n), $e(n.cx, n.cy, a, i)), {}, {
        angle: i,
        radius: a
      });
    }
    var s = o.coordinate, {
      angle: c
    } = n;
    return Bt(Bt(Bt({}, n), $e(n.cx, n.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return {
    x: 0,
    y: 0
  };
}, UF = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, jr = (e) => e.layout.width, $r = (e) => e.layout.height, WF = (e) => e.layout.scale, HO = (e) => e.layout.margin, Nc = C((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Ic = C((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), GO = "data-recharts-item-index", YO = "data-recharts-item-data-key", ji = 60;
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), !0).forEach(function(n) {
      KF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KF(e, t, r) {
  return (t = VF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VF(e) {
  var t = qF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HF = (e) => e.brush.height;
function GF(e) {
  var t = Ic(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : ji;
      return r + o;
    }
    return r;
  }, 0);
}
function YF(e) {
  var t = Ic(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : ji;
      return r + o;
    }
    return r;
  }, 0);
}
function XF(e) {
  var t = Nc(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function ZF(e) {
  var t = Nc(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Ke = C([jr, $r, HO, HF, GF, YF, XF, ZF, uO, n2], (e, t, r, n, o, i, a, s, c, u) => {
  var l = {
    left: (r.left || 0) + o,
    right: (r.right || 0) + i
  }, d = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + s
  }, p = xa(xa({}, d), l), h = p.bottom;
  p.bottom += n, p = _F(p, c, u);
  var v = e - p.left - p.right, f = t - p.top - p.bottom;
  return xa(xa({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(v, 0),
    height: Math.max(f, 0)
  });
}), JF = C(Ke, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Wp = C(jr, $r, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), QF = /* @__PURE__ */ Rt(null), nt = () => Qt(QF) != null, Rc = (e) => e.brush, Mc = C([Rc, Ke, HO], (e, t, r) => ({
  height: e.height,
  x: X(e.x) ? e.x : t.left,
  y: X(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: X(e.width) ? e.width : t.width
})), Mu = {}, Du = {}, ju = {}, Lg;
function eB() {
  return Lg || (Lg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: o, edges: i } = {}) {
      let a, s = null;
      const c = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), l = () => {
        s !== null && (r.apply(a, s), a = void 0, s = null);
      }, d = () => {
        u && l(), f();
      };
      let p = null;
      const h = () => {
        p != null && clearTimeout(p), p = setTimeout(() => {
          p = null, d();
        }, n);
      }, v = () => {
        p !== null && (clearTimeout(p), p = null);
      }, f = () => {
        v(), a = void 0, s = null;
      }, g = () => {
        l();
      }, y = function(...w) {
        if (o?.aborted)
          return;
        a = this, s = w;
        const b = p == null;
        h(), c && b && l();
      };
      return y.schedule = h, y.cancel = f, y.flush = g, o?.addEventListener("abort", f, { once: !0 }), y;
    }
    e.debounce = t;
  })(ju)), ju;
}
var Fg;
function tB() {
  return Fg || (Fg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eB();
    function r(n, o = 0, i = {}) {
      typeof i != "object" && (i = {});
      const { leading: a = !1, trailing: s = !0, maxWait: c } = i, u = Array(2);
      a && (u[0] = "leading"), s && (u[1] = "trailing");
      let l, d = null;
      const p = t.debounce(function(...f) {
        l = n.apply(this, f), d = null;
      }, o, { edges: u }), h = function(...f) {
        return c != null && (d === null && (d = Date.now()), Date.now() - d >= c) ? (l = n.apply(this, f), d = Date.now(), p.cancel(), p.schedule(), l) : (p.apply(this, f), l);
      }, v = () => (p.flush(), l);
      return h.cancel = p.cancel, h.flush = v, h;
    }
    e.debounce = r;
  })(Du)), Du;
}
var Bg;
function rB() {
  return Bg || (Bg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ tB();
    function r(n, o = 0, i = {}) {
      const { leading: a = !0, trailing: s = !0 } = i;
      return t.debounce(n, o, {
        leading: a,
        maxWait: o,
        trailing: s
      });
    }
    e.throttle = r;
  })(Mu)), Mu;
}
var $u, zg;
function nB() {
  return zg || (zg = 1, $u = rB().throttle), $u;
}
var oB = /* @__PURE__ */ nB();
const iB = /* @__PURE__ */ an(oB);
var aB = process.env.NODE_ENV !== "production", ms = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    o[i - 2] = arguments[i];
  if (aB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      console.warn(r.replace(/%s/g, () => o[a++]));
    }
}, XO = (e, t, r) => {
  var {
    width: n = "100%",
    height: o = "100%",
    aspect: i,
    maxHeight: a
  } = r, s = kr(n) ? e : Number(n), c = kr(o) ? t : Number(o);
  return i && i > 0 && (s ? c = s / i : c && (s = c * i), a && c > a && (c = a)), {
    calculatedWidth: s,
    calculatedHeight: c
  };
}, sB = {
  width: 0,
  height: 0,
  overflow: "visible"
}, cB = {
  width: 0,
  overflowX: "visible"
}, lB = {
  height: 0,
  overflowY: "visible"
}, uB = {}, dB = (e) => {
  var {
    width: t,
    height: r
  } = e, n = kr(t), o = kr(r);
  return n && o ? sB : n ? cB : o ? lB : uB;
};
function fB(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, o = t, i = r;
  return o === void 0 && i === void 0 ? (o = "100%", i = "100%") : o === void 0 ? o = n && n > 0 ? void 0 : "100%" : i === void 0 && (i = n && n > 0 ? void 0 : "100%"), {
    width: o,
    height: i
  };
}
function Be(e) {
  return Number.isFinite(e);
}
function so(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ef.apply(null, arguments);
}
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      pB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pB(e, t, r) {
  return (t = hB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hB(e) {
  var t = mB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ZO = /* @__PURE__ */ Rt({
  width: -1,
  height: -1
});
function JO(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, o = Dr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return r <= 0 || n <= 0 ? null : /* @__PURE__ */ m.createElement(ZO.Provider, {
    value: o
  }, t);
}
var Kp = () => Qt(ZO), vB = /* @__PURE__ */ De((e, t) => {
  var {
    aspect: r,
    initialDimension: n = {
      width: -1,
      height: -1
    },
    width: o,
    height: i,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: a = 0,
    minHeight: s,
    maxHeight: c,
    children: u,
    debounce: l = 0,
    id: d,
    className: p,
    onResize: h,
    style: v = {}
  } = e, f = me(null), g = me();
  g.current = h, jw(t, () => f.current);
  var [y, w] = We({
    containerWidth: n.width,
    containerHeight: n.height
  }), b = ve((A, _) => {
    w((I) => {
      var T = Math.round(A), M = Math.round(_);
      return I.containerWidth === T && I.containerHeight === M ? I : {
        containerWidth: T,
        containerHeight: M
      };
    });
  }, []);
  Fe(() => {
    var A = (M) => {
      var D, {
        width: N,
        height: z
      } = M[0].contentRect;
      b(N, z), (D = g.current) === null || D === void 0 || D.call(g, N, z);
    };
    l > 0 && (A = iB(A, l, {
      trailing: !0,
      leading: !1
    }));
    var _ = new ResizeObserver(A), {
      width: I,
      height: T
    } = f.current.getBoundingClientRect();
    return b(I, T), _.observe(f.current), () => {
      _.disconnect();
    };
  }, [b, l]);
  var {
    containerWidth: E,
    containerHeight: S
  } = y;
  ms(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: O
  } = XO(E, S, {
    width: o,
    height: i,
    aspect: r,
    maxHeight: c
  });
  return ms(P > 0 || O > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, O, o, i, a, s, r), /* @__PURE__ */ m.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: le("recharts-responsive-container", p),
    style: Wg(Wg({}, v), {}, {
      width: o,
      height: i,
      minWidth: a,
      minHeight: s,
      maxHeight: c
    }),
    ref: f
  }, /* @__PURE__ */ m.createElement("div", {
    style: dB({
      width: o,
      height: i
    })
  }, /* @__PURE__ */ m.createElement(JO, {
    width: P,
    height: O
  }, u)));
}), Dc = /* @__PURE__ */ De((e, t) => {
  var r = Kp();
  if (so(r.width) && so(r.height))
    return e.children;
  var {
    width: n,
    height: o
  } = fB({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: i,
    calculatedHeight: a
  } = XO(void 0, void 0, {
    width: n,
    height: o,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return X(i) && X(a) ? /* @__PURE__ */ m.createElement(JO, {
    width: i,
    height: a
  }, e.children) : /* @__PURE__ */ m.createElement(vB, ef({}, e, {
    width: n,
    height: o,
    ref: t
  }));
}), jc = () => {
  var e, t = nt(), r = Z(JF), n = Z(Mc), o = (e = Z(Rc)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !o ? r : {
    width: n.width - o.left - o.right,
    height: n.height - o.top - o.bottom,
    x: o.left,
    y: o.top
  };
}, gB = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, QO = () => {
  var e;
  return (e = Z(Ke)) !== null && e !== void 0 ? e : gB;
}, Vp = () => Z(jr), qp = () => Z($r), yB = () => Z((e) => e.layout.margin), ce = (e) => e.layout.layoutType, $i = () => Z(ce), $c = (e) => {
  var t = _e(), r = nt(), {
    width: n,
    height: o
  } = e, i = Kp(), a = n, s = o;
  return i && (a = i.width > 0 ? i.width : n, s = i.height > 0 ? i.height : o), Fe(() => {
    !r && so(a) && so(s) && t(pF({
      width: a,
      height: s
    }));
  }, [t, r, a, s]), null;
}, bB = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, eA = Dt({
  name: "legend",
  initialState: bB,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: ut()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Pr(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  setLegendSize: Kg,
  setLegendSettings: wB,
  addLegendPayload: tA,
  removeLegendPayload: rA
} = eA.actions, xB = eA.reducer, EB = ["contextPayload"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tf.apply(null, arguments);
}
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), !0).forEach(function(n) {
      Hp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hp(e, t, r) {
  return (t = SB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SB(e) {
  var t = PB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OB(e, t) {
  if (e == null) return {};
  var r, n, o = AB(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function AB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function CB(e) {
  return e.value;
}
function TB(e) {
  var {
    contextPayload: t
  } = e, r = OB(e, EB), n = iO(t, e.payloadUniqBy, CB), o = co(co({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ m.isValidElement(e.content) ? /* @__PURE__ */ m.cloneElement(e.content, o) : typeof e.content == "function" ? /* @__PURE__ */ m.createElement(e.content, o) : /* @__PURE__ */ m.createElement(Dp, o);
}
function _B(e, t, r, n, o, i) {
  var {
    layout: a,
    align: s,
    verticalAlign: c
  } = t, u, l;
  return (!e || (e.left === void 0 || e.left === null) && (e.right === void 0 || e.right === null)) && (s === "center" && a === "vertical" ? u = {
    left: ((n || 0) - i.width) / 2
  } : u = s === "right" ? {
    right: r && r.right || 0
  } : {
    left: r && r.left || 0
  }), (!e || (e.top === void 0 || e.top === null) && (e.bottom === void 0 || e.bottom === null)) && (c === "middle" ? l = {
    top: ((o || 0) - i.height) / 2
  } : l = c === "bottom" ? {
    bottom: r && r.bottom || 0
  } : {
    top: r && r.top || 0
  }), co(co({}, u), l);
}
function kB(e) {
  var t = _e();
  return Fe(() => {
    t(wB(e));
  }, [t, e]), null;
}
function NB(e) {
  var t = _e();
  return Fe(() => (t(Kg(e)), () => {
    t(Kg({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function IB(e) {
  var t = a2(), r = u$(), n = yB(), {
    width: o,
    height: i,
    wrapperStyle: a,
    portal: s
  } = e, [c, u] = dO([t]), l = Vp(), d = qp();
  if (l == null || d == null)
    return null;
  var p = l - (n.left || 0) - (n.right || 0), h = Wn.getWidthOrHeight(e.layout, i, o, p), v = s ? a : co(co({
    position: "absolute",
    width: h?.width || o || "auto",
    height: h?.height || i || "auto"
  }, _B(a, e, n, l, d, c)), a), f = s ?? r;
  if (f == null)
    return null;
  var g = /* @__PURE__ */ m.createElement("div", {
    className: "recharts-legend-wrapper",
    style: v,
    ref: u
  }, /* @__PURE__ */ m.createElement(kB, {
    layout: e.layout,
    align: e.align,
    verticalAlign: e.verticalAlign,
    itemSorter: e.itemSorter
  }), /* @__PURE__ */ m.createElement(NB, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ m.createElement(TB, tf({}, e, h, {
    margin: n,
    chartWidth: l,
    chartHeight: d,
    contextPayload: t
  })));
  return /* @__PURE__ */ $w(g, f);
}
class Wn extends yi {
  static getWidthOrHeight(t, r, n, o) {
    return t === "vertical" && X(r) ? {
      height: r
    } : t === "horizontal" ? {
      width: n || o
    } : null;
  }
  render() {
    return /* @__PURE__ */ m.createElement(IB, this.props);
  }
}
Hp(Wn, "displayName", "Legend");
Hp(Wn, "defaultProps", {
  align: "center",
  iconSize: 14,
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
});
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rf.apply(null, arguments);
}
function qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qg(Object(r), !0).forEach(function(n) {
      RB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RB(e, t, r) {
  return (t = MB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MB(e) {
  var t = DB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function DB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jB(e) {
  return Array.isArray(e) && dr(e[0]) && dr(e[1]) ? e.join(" ~ ") : e;
}
var $B = (e) => {
  var {
    separator: t = " : ",
    contentStyle: r = {},
    itemStyle: n = {},
    labelStyle: o = {},
    payload: i,
    formatter: a,
    itemSorter: s,
    wrapperClassName: c,
    labelClassName: u,
    label: l,
    labelFormatter: d,
    accessibilityLayer: p = !1
  } = e, h = () => {
    if (i && i.length) {
      var S = {
        padding: 0,
        margin: 0
      }, P = (s ? Ac(i, s) : i).map((O, A) => {
        if (O.type === "none")
          return null;
        var _ = O.formatter || a || jB, {
          value: I,
          name: T
        } = O, M = I, D = T;
        if (_) {
          var N = _(I, T, O, A, i);
          if (Array.isArray(N))
            [M, D] = N;
          else if (N != null)
            M = N;
          else
            return null;
        }
        var z = Lu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: O.color || "#000"
        }, n);
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ m.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(A),
            style: z
          }, dr(D) ? /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, D) : null, dr(D) ? /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, t) : null, /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, M), /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, O.unit || ""))
        );
      });
      return /* @__PURE__ */ m.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: S
      }, P);
    }
    return null;
  }, v = Lu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), f = Lu({
    margin: 0
  }, o), g = !Ae(l), y = g ? l : "", w = le("recharts-default-tooltip", c), b = le("recharts-tooltip-label", u);
  g && d && i !== void 0 && i !== null && (y = d(l, i));
  var E = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ m.createElement("div", rf({
    className: w,
    style: v
  }, E), /* @__PURE__ */ m.createElement("p", {
    className: b,
    style: f
  }, /* @__PURE__ */ m.isValidElement(y) ? y : "".concat(y)), h());
}, Lo = "recharts-tooltip-wrapper", LB = {
  visibility: "hidden"
};
function FB(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return le(Lo, {
    ["".concat(Lo, "-right")]: X(r) && t && X(t.x) && r >= t.x,
    ["".concat(Lo, "-left")]: X(r) && t && X(t.x) && r < t.x,
    ["".concat(Lo, "-bottom")]: X(n) && t && X(t.y) && n >= t.y,
    ["".concat(Lo, "-top")]: X(n) && t && X(t.y) && n < t.y
  });
}
function Hg(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: o,
    position: i,
    reverseDirection: a,
    tooltipDimension: s,
    viewBox: c,
    viewBoxDimension: u
  } = e;
  if (i && X(i[n]))
    return i[n];
  var l = r[n] - s - (o > 0 ? o : 0), d = r[n] + o;
  if (t[n])
    return a[n] ? l : d;
  var p = c[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var h = l, v = p;
    return h < v ? Math.max(d, p) : Math.max(l, p);
  }
  if (u == null)
    return 0;
  var f = d + s, g = p + u;
  return f > g ? Math.max(l, p) : Math.max(d, p);
}
function BB(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function zB(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTopLeft: n,
    position: o,
    reverseDirection: i,
    tooltipBox: a,
    useTranslate3d: s,
    viewBox: c
  } = e, u, l, d;
  return a.height > 0 && a.width > 0 && r ? (l = Hg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: i,
    tooltipDimension: a.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Hg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: i,
    tooltipDimension: a.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = BB({
    translateX: l,
    translateY: d,
    useTranslate3d: s
  })) : u = LB, {
    cssProperties: u,
    cssClasses: FB({
      translateX: l,
      translateY: d,
      coordinate: r
    })
  };
}
function Gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(r), !0).forEach(function(n) {
      nf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nf(e, t, r) {
  return (t = UB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UB(e) {
  var t = WB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class KB extends yi {
  constructor() {
    super(...arguments), nf(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), nf(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, o, i;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (o = (i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== null && o !== void 0 ? o : 0
          }
        });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
  }
  render() {
    var {
      active: t,
      allowEscapeViewBox: r,
      animationDuration: n,
      animationEasing: o,
      children: i,
      coordinate: a,
      hasPayload: s,
      isAnimationActive: c,
      offset: u,
      position: l,
      reverseDirection: d,
      useTranslate3d: p,
      viewBox: h,
      wrapperStyle: v,
      lastBoundingBox: f,
      innerRef: g,
      hasPortalFromProps: y
    } = this.props, {
      cssClasses: w,
      cssProperties: b
    } = zB({
      allowEscapeViewBox: r,
      coordinate: a,
      offsetTopLeft: u,
      position: l,
      reverseDirection: d,
      tooltipBox: {
        height: f.height,
        width: f.width
      },
      useTranslate3d: p,
      viewBox: h
    }), E = y ? {} : Ea(Ea({
      transition: c && t ? "transform ".concat(n, "ms ").concat(o) : void 0
    }, b), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), S = Ea(Ea({}, E), {}, {
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden"
    }, v);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ m.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: w,
        style: S,
        ref: g
      }, i)
    );
  }
}
var VB = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Lr = {
  devToolsEnabled: !1,
  isSsr: VB()
}, nA = () => Z((e) => e.rootProps.accessibilityLayer);
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, of.apply(null, arguments);
}
function Yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), !0).forEach(function(n) {
      qB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qB(e, t, r) {
  return (t = HB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HB(e) {
  var t = GB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zg = {
  curveBasisClosed: _$,
  curveBasisOpen: k$,
  curveBasis: T$,
  curveBumpX: h$,
  curveBumpY: m$,
  curveLinearClosed: N$,
  curveLinear: Pc,
  curveMonotoneX: I$,
  curveMonotoneY: R$,
  curveNatural: M$,
  curveStep: D$,
  curveStepAfter: $$,
  curveStepBefore: j$
}, Sa = (e) => Be(e.x) && Be(e.y), Fo = (e) => e.x, Bo = (e) => e.y, YB = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(ki(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? Zg["".concat(r).concat(t === "vertical" ? "Y" : "X")] : Zg[r] || Pc;
}, XB = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: o,
    connectNulls: i = !1
  } = e, a = YB(t, o), s = i ? r.filter(Sa) : r, c;
  if (Array.isArray(n)) {
    var u = i ? n.filter((d) => Sa(d)) : n, l = s.map((d, p) => Xg(Xg({}, d), {}, {
      base: u[p]
    }));
    return o === "vertical" ? c = fa().y(Bo).x1(Fo).x0((d) => d.base.x) : c = fa().x(Fo).y1(Bo).y0((d) => d.base.y), c.defined(Sa).curve(a), c(l);
  }
  return o === "vertical" && X(n) ? c = fa().y(Bo).x1(Fo).x0(n) : X(n) ? c = fa().x(Fo).y1(Bo).y0(n) : c = DP().x(Fo).y(Bo), c.defined(Sa).curve(a), c(s);
}, ro = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: o
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var i = r && r.length ? XB(e) : n;
  return /* @__PURE__ */ m.createElement("path", of({}, ht(e), Rp(e), {
    className: le("recharts-curve", t),
    d: i === null ? void 0 : i,
    ref: o
  }));
}, ZB = ["x", "y", "top", "left", "width", "height", "className"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, af.apply(null, arguments);
}
function Jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jg(Object(r), !0).forEach(function(n) {
      QB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QB(e, t, r) {
  return (t = ez(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ez(e) {
  var t = tz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rz(e, t) {
  if (e == null) return {};
  var r, n, o = nz(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function nz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var oz = (e, t, r, n, o, i) => "M".concat(e, ",").concat(o, "v").concat(n, "M").concat(i, ",").concat(t, "h").concat(r), iz = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: o = 0,
    width: i = 0,
    height: a = 0,
    className: s
  } = e, c = rz(e, ZB), u = JB({
    x: t,
    y: r,
    top: n,
    left: o,
    width: i,
    height: a
  }, c);
  return !X(t) || !X(r) || !X(i) || !X(a) || !X(n) || !X(o) ? null : /* @__PURE__ */ m.createElement("path", af({}, mt(u), {
    className: le("recharts-cross", s),
    d: oz(t, r, i, a, n, o)
  }));
};
function az(e, t, r, n) {
  var o = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - o : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - o,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qg(Object(r), !0).forEach(function(n) {
      cz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cz(e, t, r) {
  return (t = lz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lz(e) {
  var t = uz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ve(e, t) {
  var r = sz({}, e), n = t, o = Object.keys(t), i = o.reduce((a, s) => (a[s] === void 0 && n[s] !== void 0 && (a[s] = n[s]), a), r);
  return i;
}
function dz() {
}
function fz(e) {
  return e != null;
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ty(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      pz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pz(e, t, r) {
  return (t = hz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hz(e) {
  var t = mz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vz = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), oA = (e, t, r) => e.map((n) => "".concat(vz(n), " ").concat(t, "ms ").concat(r)).join(","), gz = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((o) => n.includes(o))), ui = (e, t) => Object.keys(t).reduce((r, n) => ty(ty({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      yz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yz(e, t, r) {
  return (t = bz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bz(e) {
  var t = wz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vs = (e, t, r) => e + (t - e) * r, sf = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, iA = (e, t, r) => {
  var n = ui((o, i) => {
    if (sf(i)) {
      var [a, s] = e(i.from, i.to, i.velocity);
      return tt(tt({}, i), {}, {
        from: a,
        velocity: s
      });
    }
    return i;
  }, t);
  return r < 1 ? ui((o, i) => sf(i) ? tt(tt({}, i), {}, {
    velocity: vs(i.velocity, n[o].velocity, r),
    from: vs(i.from, n[o].from, r)
  }) : i, t) : iA(e, n, r - 1);
};
function xz(e, t, r, n, o, i) {
  var a, s = n.reduce((p, h) => tt(tt({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), c = () => ui((p, h) => h.from, s), u = () => !Object.values(s).filter(sf).length, l = null, d = (p) => {
    a || (a = p);
    var h = p - a, v = h / r.dt;
    s = iA(r, s, v), o(tt(tt(tt({}, e), t), c())), a = p, u() || (l = i.setTimeout(d));
  };
  return () => (l = i.setTimeout(d), () => {
    l();
  });
}
function Ez(e, t, r, n, o, i, a) {
  var s = null, c = o.reduce((d, p) => tt(tt({}, d), {}, {
    [p]: [e[p], t[p]]
  }), {}), u, l = (d) => {
    u || (u = d);
    var p = (d - u) / n, h = ui((f, g) => vs(...g, r(p)), c);
    if (i(tt(tt(tt({}, e), t), h)), p < 1)
      s = a.setTimeout(l);
    else {
      var v = ui((f, g) => vs(...g, r(1)), c);
      i(tt(tt(tt({}, e), t), v));
    }
  };
  return () => (s = a.setTimeout(l), () => {
    s();
  });
}
const Sz = (e, t, r, n, o, i) => {
  var a = gz(e, t);
  return r.isStepper === !0 ? xz(e, t, r, a, o, i) : Ez(e, t, r, n, a, o, i);
};
var gs = 1e-4, aA = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], sA = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), ny = (e, t) => (r) => {
  var n = aA(e, t);
  return sA(n, r);
}, Pz = (e, t) => (r) => {
  var n = aA(e, t), o = [...n.map((i, a) => i * a).slice(1), 0];
  return sA(o, r);
}, oy = function() {
  for (var t, r, n, o, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
    a[s] = arguments[s];
  if (a.length === 1)
    switch (a[0]) {
      case "linear":
        [t, n, r, o] = [0, 0, 1, 1];
        break;
      case "ease":
        [t, n, r, o] = [0.25, 0.1, 0.25, 1];
        break;
      case "ease-in":
        [t, n, r, o] = [0.42, 0, 1, 1];
        break;
      case "ease-out":
        [t, n, r, o] = [0.42, 0, 0.58, 1];
        break;
      case "ease-in-out":
        [t, n, r, o] = [0, 0, 0.58, 1];
        break;
      default: {
        var c = a[0].split("(");
        c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4 && ([t, n, r, o] = c[1].split(")")[0].split(",").map((v) => parseFloat(v)));
      }
    }
  else a.length === 4 && ([t, n, r, o] = a);
  var u = ny(t, r), l = ny(n, o), d = Pz(t, r), p = (v) => v > 1 ? 1 : v < 0 ? 0 : v, h = (v) => {
    for (var f = v > 1 ? 1 : v, g = f, y = 0; y < 8; ++y) {
      var w = u(g) - f, b = d(g);
      if (Math.abs(w - f) < gs || b < gs)
        return l(g);
      g = p(g - w / b);
    }
    return l(g);
  };
  return h.isStepper = !1, h;
}, Oz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: o = 17
  } = t, i = (a, s, c) => {
    var u = -(a - s) * r, l = c * n, d = c + (u - l) * o / 1e3, p = c * o / 1e3 + a;
    return Math.abs(p - s) < gs && Math.abs(d) < gs ? [s, 0] : [p, d];
  };
  return i.isStepper = !0, i.dt = o, i;
}, Az = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return oy(e);
      case "spring":
        return Oz();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return oy(e);
    }
  return typeof e == "function" ? e : null;
};
function Cz(e) {
  var t, r = () => null, n = !1, o = null, i = (a) => {
    if (!n) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var s = a, [c, ...u] = s;
        if (typeof c == "number") {
          o = e.setTimeout(i.bind(null, u), c);
          return;
        }
        i(c), o = e.setTimeout(i.bind(null, u));
        return;
      }
      typeof a == "string" && (t = a, r(t)), typeof a == "object" && (t = a, r(t)), typeof a == "function" && a();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (a) => {
      n = !1, o && (o(), o = null), i(a);
    },
    subscribe: (a) => (r = a, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class Tz {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), o = null, i = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (o = requestAnimationFrame(i));
    };
    return o = requestAnimationFrame(i), () => {
      cancelAnimationFrame(o);
    };
  }
}
function _z() {
  return Cz(new Tz());
}
var kz = /* @__PURE__ */ Rt(_z);
function Nz(e, t) {
  var r = Qt(kz);
  return Dr(() => t ?? r(e), [e, t, r]);
}
var Iz = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, iy = {
  t: 0
}, Fu = {
  t: 1
};
function So(e) {
  var t = Ve(e, Iz), {
    isActive: r,
    canBegin: n,
    duration: o,
    easing: i,
    begin: a,
    onAnimationEnd: s,
    onAnimationStart: c,
    children: u
  } = t, l = Nz(t.animationId, t.animationManager), [d, p] = We(r ? iy : Fu), h = me(null);
  return Fe(() => {
    r || p(Fu);
  }, [r]), Fe(() => {
    if (!r || !n)
      return dz;
    var v = Sz(iy, Fu, Az(i), o, p, l.getTimeoutController()), f = () => {
      h.current = v();
    };
    return l.start([c, a, f, o, s]), () => {
      l.stop(), h.current && h.current(), s();
    };
  }, [r, n, o, i, a, c, s, l]), u(d.t);
}
function Po(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = me(ai(t)), n = me(e);
  return n.current !== e && (r.current = ai(t), n.current = e), r.current;
}
var Rz = ["radius"], Mz = ["radius"];
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      Dz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dz(e, t, r) {
  return (t = jz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jz(e) {
  var t = $z(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $z(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ys.apply(null, arguments);
}
function cy(e, t) {
  if (e == null) return {};
  var r, n, o = Lz(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Lz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ly = (e, t, r, n, o) => {
  var i = Math.min(Math.abs(r) / 2, Math.abs(n) / 2), a = n >= 0 ? 1 : -1, s = r >= 0 ? 1 : -1, c = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0, u;
  if (i > 0 && o instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = o[d] > i ? i : o[d];
    u = "M".concat(e, ",").concat(t + a * l[0]), l[0] > 0 && (u += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(e + s * l[0], ",").concat(t)), u += "L ".concat(e + r - s * l[1], ",").concat(t), l[1] > 0 && (u += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(e + r, ",").concat(t + a * l[1])), u += "L ".concat(e + r, ",").concat(t + n - a * l[2]), l[2] > 0 && (u += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(e + r - s * l[2], ",").concat(t + n)), u += "L ".concat(e + s * l[3], ",").concat(t + n), l[3] > 0 && (u += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(e, ",").concat(t + n - a * l[3])), u += "Z";
  } else if (i > 0 && o === +o && o > 0) {
    var h = Math.min(i, o);
    u = "M ".concat(e, ",").concat(t + a * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + s * h, ",").concat(t, `
            L `).concat(e + r - s * h, ",").concat(t, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + r, ",").concat(t + a * h, `
            L `).concat(e + r, ",").concat(t + n - a * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + r - s * h, ",").concat(t + n, `
            L `).concat(e + s * h, ",").concat(t + n, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e, ",").concat(t + n - a * h, " Z");
  } else
    u = "M ".concat(e, ",").concat(t, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
  return u;
}, Fz = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, cA = (e) => {
  var t = Ve(e, Fz), r = me(null), [n, o] = We(-1);
  Fe(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var B = r.current.getTotalLength();
        B && o(B);
      } catch {
      }
  }, []);
  var {
    x: i,
    y: a,
    width: s,
    height: c,
    radius: u,
    className: l
  } = t, {
    animationEasing: d,
    animationDuration: p,
    animationBegin: h,
    isAnimationActive: v,
    isUpdateAnimationActive: f
  } = t, g = me(s), y = me(c), w = me(i), b = me(a), E = Dr(() => ({
    x: i,
    y: a,
    width: s,
    height: c,
    radius: u
  }), [i, a, s, c, u]), S = Po(E, "rectangle-");
  if (i !== +i || a !== +a || s !== +s || c !== +c || s === 0 || c === 0)
    return null;
  var P = le("recharts-rectangle", l);
  if (!f) {
    var O = mt(t), {
      radius: A
    } = O, _ = cy(O, Rz);
    return /* @__PURE__ */ m.createElement("path", ys({}, _, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: ly(i, a, s, c, u)
    }));
  }
  var I = g.current, T = y.current, M = w.current, D = b.current, N = "0px ".concat(n === -1 ? 1 : n, "px"), z = "".concat(n, "px 0px"), L = oA(["strokeDasharray"], p, typeof d == "string" ? d : void 0);
  return /* @__PURE__ */ m.createElement(So, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: f,
    begin: h
  }, (B) => {
    var R = we(I, s, B), F = we(T, c, B), ee = we(M, i, B), ie = we(D, a, B);
    r.current && (g.current = R, y.current = F, w.current = ee, b.current = ie);
    var ne;
    v ? B > 0 ? ne = {
      transition: L,
      strokeDasharray: z
    } : ne = {
      strokeDasharray: N
    } : ne = {
      strokeDasharray: z
    };
    var te = mt(t), {
      radius: oe
    } = te, ue = cy(te, Mz);
    return /* @__PURE__ */ m.createElement("path", ys({}, ue, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: ly(ee, ie, R, F, u),
      ref: r,
      style: sy(sy({}, ne), t.style)
    }));
  });
};
function lA(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: i
  } = e, a = $e(t, r, n, o), s = $e(t, r, n, i);
  return {
    points: [a, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: i
  };
}
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(null, arguments);
}
var Bz = (e, t) => {
  var r = Xe(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Pa = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: o,
    sign: i,
    isExternal: a,
    cornerRadius: s,
    cornerIsExternal: c
  } = e, u = s * (a ? 1 : -1) + n, l = Math.asin(s / u) / ps, d = c ? o : o + i * l, p = $e(t, r, u, d), h = $e(t, r, n, d), v = c ? o - i * l : o, f = $e(t, r, u * Math.cos(l * ps), v);
  return {
    center: p,
    circleTangency: h,
    lineTangency: f,
    theta: l
  };
}, uA = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    startAngle: i,
    endAngle: a
  } = e, s = Bz(i, a), c = i + s, u = $e(t, r, o, i), l = $e(t, r, o, c), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(o, ",").concat(o, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(i > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var p = $e(t, r, n, i), h = $e(t, r, n, c);
    d += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(n, ",").concat(n, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(i <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(t, ",").concat(r, " Z");
  return d;
}, zz = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    cornerRadius: i,
    forceCornerRadius: a,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u
  } = e, l = Xe(u - c), {
    circleTangency: d,
    lineTangency: p,
    theta: h
  } = Pa({
    cx: t,
    cy: r,
    radius: o,
    angle: c,
    sign: l,
    cornerRadius: i,
    cornerIsExternal: s
  }), {
    circleTangency: v,
    lineTangency: f,
    theta: g
  } = Pa({
    cx: t,
    cy: r,
    radius: o,
    angle: u,
    sign: -l,
    cornerRadius: i,
    cornerIsExternal: s
  }), y = s ? Math.abs(c - u) : Math.abs(c - u) - h - g;
  if (y < 0)
    return a ? "M ".concat(p.x, ",").concat(p.y, `
        a`).concat(i, ",").concat(i, ",0,0,1,").concat(i * 2, `,0
        a`).concat(i, ",").concat(i, ",0,0,1,").concat(-i * 2, `,0
      `) : uA({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: o,
      startAngle: c,
      endAngle: u
    });
  var w = "M ".concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(o, ",").concat(o, ",0,").concat(+(y > 180), ",").concat(+(l < 0), ",").concat(v.x, ",").concat(v.y, `
    A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(f.x, ",").concat(f.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: b,
      lineTangency: E,
      theta: S
    } = Pa({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: i,
      cornerIsExternal: s
    }), {
      circleTangency: P,
      lineTangency: O,
      theta: A
    } = Pa({
      cx: t,
      cy: r,
      radius: n,
      angle: u,
      sign: -l,
      isExternal: !0,
      cornerRadius: i,
      cornerIsExternal: s
    }), _ = s ? Math.abs(c - u) : Math.abs(c - u) - S - A;
    if (_ < 0 && i === 0)
      return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += "L".concat(O.x, ",").concat(O.y, `
      A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(_ > 180), ",").concat(+(l > 0), ",").concat(b.x, ",").concat(b.y, `
      A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(E.x, ",").concat(E.y, "Z");
  } else
    w += "L".concat(t, ",").concat(r, "Z");
  return w;
}, Uz = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, dA = (e) => {
  var t = Ve(e, Uz), {
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: l,
    className: d
  } = t;
  if (i < o || u === l)
    return null;
  var p = le("recharts-sector", d), h = i - o, v = st(a, h, 0, !0), f;
  return v > 0 && Math.abs(u - l) < 360 ? f = zz({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: i,
    cornerRadius: Math.min(v, h / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: l
  }) : f = uA({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: i,
    startAngle: u,
    endAngle: l
  }), /* @__PURE__ */ m.createElement("path", cf({}, mt(t), {
    className: p,
    d: f
  }));
};
function Wz(e, t, r) {
  var n, o, i, a;
  if (e === "horizontal")
    n = t.x, i = n, o = r.top, a = r.top + r.height;
  else if (e === "vertical")
    o = t.y, a = o, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var {
        cx: s,
        cy: c,
        innerRadius: u,
        outerRadius: l,
        angle: d
      } = t, p = $e(s, c, u, d), h = $e(s, c, l, d);
      n = p.x, o = p.y, i = h.x, a = h.y;
    } else
      return lA(t);
  return [{
    x: n,
    y: o
  }, {
    x: i,
    y: a
  }];
}
var Bu = {}, zu = {}, Uu = {}, uy;
function Kz() {
  return uy || (uy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cO();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Uu)), Uu;
}
var dy;
function Vz() {
  return dy || (dy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Kz();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(zu)), zu;
}
var fy;
function qz() {
  return fy || (fy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lO(), r = /* @__PURE__ */ Vz();
    function n(o, i, a) {
      a && typeof a != "number" && t.isIterateeCall(o, i, a) && (i = a = void 0), o = r.toFinite(o), i === void 0 ? (i = o, o = 0) : i = r.toFinite(i), a = a === void 0 ? o < i ? 1 : -1 : r.toFinite(a);
      const s = Math.max(Math.ceil((i - o) / (a || 1)), 0), c = new Array(s);
      for (let u = 0; u < s; u++)
        c[u] = o, o += a;
      return c;
    }
    e.range = n;
  })(Bu)), Bu;
}
var Wu, py;
function Hz() {
  return py || (py = 1, Wu = qz().range), Wu;
}
var Gz = /* @__PURE__ */ Hz();
const fA = /* @__PURE__ */ an(Gz);
function Xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yz(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Gp(e) {
  let t, r, n;
  e.length !== 2 ? (t = Xr, r = (s, c) => Xr(e(s), c), n = (s, c) => e(s) - c) : (t = e === Xr || e === Yz ? e : Xz, r = e, n = e);
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const d = u + l >>> 1;
        r(s[d], c) < 0 ? u = d + 1 : l = d;
      } while (u < l);
    }
    return u;
  }
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const d = u + l >>> 1;
        r(s[d], c) <= 0 ? u = d + 1 : l = d;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    const d = o(s, c, u, l - 1);
    return d > u && n(s[d - 1], c) > -n(s[d], c) ? d - 1 : d;
  }
  return { left: o, center: a, right: i };
}
function Xz() {
  return 0;
}
function pA(e) {
  return e === null ? NaN : +e;
}
function* Zz(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const Jz = Gp(Xr), Li = Jz.right;
Gp(pA).center;
class hy extends Map {
  constructor(t, r = tU) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(my(this, t));
  }
  has(t) {
    return super.has(my(this, t));
  }
  set(t, r) {
    return super.set(Qz(this, t), r);
  }
  delete(t) {
    return super.delete(eU(this, t));
  }
}
function my({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Qz({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function eU({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function tU(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function rU(e = Xr) {
  if (e === Xr) return hA;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function hA(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const nU = Math.sqrt(50), oU = Math.sqrt(10), iU = Math.sqrt(2);
function bs(e, t, r) {
  const n = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(n)), i = n / Math.pow(10, o), a = i >= nU ? 10 : i >= oU ? 5 : i >= iU ? 2 : 1;
  let s, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / a, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * a, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? bs(e, t, r * 2) : [s, c, u];
}
function lf(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [o, i, a] = n ? bs(t, e, r) : bs(e, t, r);
  if (!(i >= o)) return [];
  const s = i - o + 1, c = new Array(s);
  if (n)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (i - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (o + u) * a;
  return c;
}
function uf(e, t, r) {
  return t = +t, e = +e, r = +r, bs(e, t, r)[2];
}
function df(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, o = n ? uf(t, e, r) : uf(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function vy(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function gy(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function mA(e, t, r = 0, n = 1 / 0, o) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (o = o === void 0 ? hA : rU(o); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), d = 0.5 * Math.exp(2 * l / 3), p = 0.5 * Math.sqrt(l * d * (c - d) / c) * (u - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - u * d / c + p)), v = Math.min(n, Math.floor(t + (c - u) * d / c + p));
      mA(e, t, h, v, o);
    }
    const i = e[t];
    let a = r, s = n;
    for (zo(e, r, t), o(e[n], i) > 0 && zo(e, r, n); a < s; ) {
      for (zo(e, a, s), ++a, --s; o(e[a], i) < 0; ) ++a;
      for (; o(e[s], i) > 0; ) --s;
    }
    o(e[r], i) === 0 ? zo(e, r, s) : (++s, zo(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function zo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function aU(e, t, r) {
  if (e = Float64Array.from(Zz(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return gy(e);
    if (t >= 1) return vy(e);
    var n, o = (n - 1) * t, i = Math.floor(o), a = vy(mA(e, i).subarray(0, i + 1)), s = gy(e.subarray(i + 1));
    return a + (s - a) * (o - i);
  }
}
function sU(e, t, r = pA) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, o = (n - 1) * t, i = Math.floor(o), a = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return a + (s - a) * (o - i);
  }
}
function cU(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(o); ++n < o; )
    i[n] = e + n * r;
  return i;
}
function Ht(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Fr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const ff = Symbol("implicit");
function Yp() {
  var e = new hy(), t = [], r = [], n = ff;
  function o(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (n !== ff) return n;
      e.set(i, a = t.push(i) - 1);
    }
    return r[a % r.length];
  }
  return o.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new hy();
    for (const a of i)
      e.has(a) || e.set(a, t.push(a) - 1);
    return o;
  }, o.range = function(i) {
    return arguments.length ? (r = Array.from(i), o) : r.slice();
  }, o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  }, o.copy = function() {
    return Yp(t, r).unknown(n);
  }, Ht.apply(o, arguments), o;
}
function Xp() {
  var e = Yp().unknown(void 0), t = e.domain, r = e.range, n = 0, o = 1, i, a, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, h = o < n, v = h ? o : n, f = h ? n : o;
    i = (f - v) / Math.max(1, p - c + u * 2), s && (i = Math.floor(i)), v += (f - v - i * (p - c)) * l, a = i * (1 - c), s && (v = Math.round(v), a = Math.round(a));
    var g = cU(p).map(function(y) {
      return v + i * y;
    });
    return r(h ? g.reverse() : g);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), d()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([n, o] = p, n = +n, o = +o, d()) : [n, o];
  }, e.rangeRound = function(p) {
    return [n, o] = p, n = +n, o = +o, s = !0, d();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return i;
  }, e.round = function(p) {
    return arguments.length ? (s = !!p, d()) : s;
  }, e.padding = function(p) {
    return arguments.length ? (c = Math.min(1, u = +p), d()) : c;
  }, e.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), d()) : c;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (u = +p, d()) : u;
  }, e.align = function(p) {
    return arguments.length ? (l = Math.max(0, Math.min(1, p)), d()) : l;
  }, e.copy = function() {
    return Xp(t(), [n, o]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, Ht.apply(d(), arguments);
}
function vA(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return vA(t());
  }, e;
}
function lU() {
  return vA(Xp.apply(null, arguments).paddingInner(1));
}
function Zp(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function gA(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Fi() {
}
var di = 0.7, ws = 1 / di, no = "\\s*([+-]?\\d+)\\s*", fi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", uU = /^#([0-9a-f]{3,8})$/, dU = new RegExp(`^rgb\\(${no},${no},${no}\\)$`), fU = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), pU = new RegExp(`^rgba\\(${no},${no},${no},${fi}\\)$`), hU = new RegExp(`^rgba\\(${cr},${cr},${cr},${fi}\\)$`), mU = new RegExp(`^hsl\\(${fi},${cr},${cr}\\)$`), vU = new RegExp(`^hsla\\(${fi},${cr},${cr},${fi}\\)$`), yy = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Zp(Fi, pi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: by,
  // Deprecated! Use color.formatHex.
  formatHex: by,
  formatHex8: gU,
  formatHsl: yU,
  formatRgb: wy,
  toString: wy
});
function by() {
  return this.rgb().formatHex();
}
function gU() {
  return this.rgb().formatHex8();
}
function yU() {
  return yA(this).formatHsl();
}
function wy() {
  return this.rgb().formatRgb();
}
function pi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = uU.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? xy(t) : r === 3 ? new yt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Oa(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Oa(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dU.exec(e)) ? new yt(t[1], t[2], t[3], 1) : (t = fU.exec(e)) ? new yt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = pU.exec(e)) ? Oa(t[1], t[2], t[3], t[4]) : (t = hU.exec(e)) ? Oa(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = mU.exec(e)) ? Py(t[1], t[2] / 100, t[3] / 100, 1) : (t = vU.exec(e)) ? Py(t[1], t[2] / 100, t[3] / 100, t[4]) : yy.hasOwnProperty(e) ? xy(yy[e]) : e === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function xy(e) {
  return new yt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Oa(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new yt(e, t, r, n);
}
function bU(e) {
  return e instanceof Fi || (e = pi(e)), e ? (e = e.rgb(), new yt(e.r, e.g, e.b, e.opacity)) : new yt();
}
function pf(e, t, r, n) {
  return arguments.length === 1 ? bU(e) : new yt(e, t, r, n ?? 1);
}
function yt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Zp(yt, pf, gA(Fi, {
  brighter(e) {
    return e = e == null ? ws : Math.pow(ws, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? di : Math.pow(di, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(Sn(this.r), Sn(this.g), Sn(this.b), xs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ey,
  // Deprecated! Use color.formatHex.
  formatHex: Ey,
  formatHex8: wU,
  formatRgb: Sy,
  toString: Sy
}));
function Ey() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}`;
}
function wU() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}${vn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Sy() {
  const e = xs(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sn(this.r)}, ${Sn(this.g)}, ${Sn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xs(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vn(e) {
  return e = Sn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Py(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, r, n);
}
function yA(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fi || (e = pi(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, o = Math.min(t, r, n), i = Math.max(t, r, n), a = NaN, s = i - o, c = (i + o) / 2;
  return s ? (t === i ? a = (r - n) / s + (r < n) * 6 : r === i ? a = (n - t) / s + 2 : a = (t - r) / s + 4, s /= c < 0.5 ? i + o : 2 - i - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new Xt(a, s, c, e.opacity);
}
function xU(e, t, r, n) {
  return arguments.length === 1 ? yA(e) : new Xt(e, t, r, n ?? 1);
}
function Xt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Zp(Xt, xU, gA(Fi, {
  brighter(e) {
    return e = e == null ? ws : Math.pow(ws, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? di : Math.pow(di, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - n;
    return new yt(
      Ku(e >= 240 ? e - 240 : e + 120, o, n),
      Ku(e, o, n),
      Ku(e < 120 ? e + 240 : e - 120, o, n),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Oy(this.h), Aa(this.s), Aa(this.l), xs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = xs(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Oy(this.h)}, ${Aa(this.s) * 100}%, ${Aa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Oy(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Aa(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ku(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Jp = (e) => () => e;
function EU(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function SU(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function PU(e) {
  return (e = +e) == 1 ? bA : function(t, r) {
    return r - t ? SU(t, r, e) : Jp(isNaN(t) ? r : t);
  };
}
function bA(e, t) {
  var r = t - e;
  return r ? EU(e, r) : Jp(isNaN(e) ? t : e);
}
const Ay = (function e(t) {
  var r = PU(t);
  function n(o, i) {
    var a = r((o = pf(o)).r, (i = pf(i)).r), s = r(o.g, i.g), c = r(o.b, i.b), u = bA(o.opacity, i.opacity);
    return function(l) {
      return o.r = a(l), o.g = s(l), o.b = c(l), o.opacity = u(l), o + "";
    };
  }
  return n.gamma = e, n;
})(1);
function OU(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), o;
  return function(i) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - i) + t[o] * i;
    return n;
  };
}
function AU(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function CU(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, o = new Array(n), i = new Array(r), a;
  for (a = 0; a < n; ++a) o[a] = Oo(e[a], t[a]);
  for (; a < r; ++a) i[a] = t[a];
  return function(s) {
    for (a = 0; a < n; ++a) i[a] = o[a](s);
    return i;
  };
}
function TU(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Es(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function _U(e, t) {
  var r = {}, n = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Oo(e[o], t[o]) : n[o] = t[o];
  return function(i) {
    for (o in r) n[o] = r[o](i);
    return n;
  };
}
var hf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vu = new RegExp(hf.source, "g");
function kU(e) {
  return function() {
    return e;
  };
}
function NU(e) {
  return function(t) {
    return e(t) + "";
  };
}
function IU(e, t) {
  var r = hf.lastIndex = Vu.lastIndex = 0, n, o, i, a = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = hf.exec(e)) && (o = Vu.exec(t)); )
    (i = o.index) > r && (i = t.slice(r, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, c.push({ i: a, x: Es(n, o) })), r = Vu.lastIndex;
  return r < t.length && (i = t.slice(r), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? c[0] ? NU(c[0].x) : kU(t) : (t = c.length, function(u) {
    for (var l = 0, d; l < t; ++l) s[(d = c[l]).i] = d.x(u);
    return s.join("");
  });
}
function Oo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Jp(t) : (r === "number" ? Es : r === "string" ? (n = pi(t)) ? (t = n, Ay) : IU : t instanceof pi ? Ay : t instanceof Date ? TU : AU(t) ? OU : Array.isArray(t) ? CU : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _U : Es)(e, t);
}
function Qp(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function RU(e, t) {
  t === void 0 && (t = e, e = Oo);
  for (var r = 0, n = t.length - 1, o = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(o, o = t[++r]);
  return function(a) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return i[s](a - s);
  };
}
function MU(e) {
  return function() {
    return e;
  };
}
function Ss(e) {
  return +e;
}
var Cy = [0, 1];
function ft(e) {
  return e;
}
function mf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : MU(isNaN(t) ? NaN : 0.5);
}
function DU(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function jU(e, t, r) {
  var n = e[0], o = e[1], i = t[0], a = t[1];
  return o < n ? (n = mf(o, n), i = r(a, i)) : (n = mf(n, o), i = r(i, a)), function(s) {
    return i(n(s));
  };
}
function $U(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, o = new Array(n), i = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    o[a] = mf(e[a], e[a + 1]), i[a] = r(t[a], t[a + 1]);
  return function(s) {
    var c = Li(e, s, 1, n) - 1;
    return i[c](o[c](s));
  };
}
function Bi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Lc() {
  var e = Cy, t = Cy, r = Oo, n, o, i, a = ft, s, c, u;
  function l() {
    var p = Math.min(e.length, t.length);
    return a !== ft && (a = DU(e[0], e[p - 1])), s = p > 2 ? $U : jU, c = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? i : (c || (c = s(e.map(n), t, r)))(n(a(p)));
  }
  return d.invert = function(p) {
    return a(o((u || (u = s(t, e.map(n), Es)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ss), l()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), l()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), r = Qp, l();
  }, d.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : ft, l()) : a !== ft;
  }, d.interpolate = function(p) {
    return arguments.length ? (r = p, l()) : r;
  }, d.unknown = function(p) {
    return arguments.length ? (i = p, d) : i;
  }, function(p, h) {
    return n = p, o = h, l();
  };
}
function eh() {
  return Lc()(ft, ft);
}
function LU(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ps(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function lo(e) {
  return e = Ps(Math.abs(e)), e ? e[1] : NaN;
}
function FU(e, t) {
  return function(r, n) {
    for (var o = r.length, i = [], a = 0, s = e[0], c = 0; o > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), i.push(r.substring(o -= s, o + s)), !((c += s + 1) > n)); )
      s = e[a = (a + 1) % e.length];
    return i.reverse().join(t);
  };
}
function BU(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var zU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function hi(e) {
  if (!(t = zU.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new th({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
hi.prototype = th.prototype;
function th(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
th.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function UU(e) {
  e: for (var t = e.length, r = 1, n = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = o = r;
        break;
      case "0":
        n === 0 && (n = r), o = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(o + 1) : e;
}
var wA;
function WU(e, t) {
  var r = Ps(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1], i = o - (wA = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = n.length;
  return i === a ? n : i > a ? n + new Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Ps(e, Math.max(0, t + i - 1))[0];
}
function Ty(e, t) {
  var r = Ps(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}
const _y = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: LU,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ty(e * 100, t),
  r: Ty,
  s: WU,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ky(e) {
  return e;
}
var Ny = Array.prototype.map, Iy = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function KU(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ky : FU(Ny.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ky : BU(Ny.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d) {
    d = hi(d);
    var p = d.fill, h = d.align, v = d.sign, f = d.symbol, g = d.zero, y = d.width, w = d.comma, b = d.precision, E = d.trim, S = d.type;
    S === "n" ? (w = !0, S = "g") : _y[S] || (b === void 0 && (b = 12), E = !0, S = "g"), (g || p === "0" && h === "=") && (g = !0, p = "0", h = "=");
    var P = f === "$" ? r : f === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", O = f === "$" ? n : /[%p]/.test(S) ? a : "", A = _y[S], _ = /[defgprs%]/.test(S);
    b = b === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function I(T) {
      var M = P, D = O, N, z, L;
      if (S === "c")
        D = A(T) + D, T = "";
      else {
        T = +T;
        var B = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : A(Math.abs(T), b), E && (T = UU(T)), B && +T == 0 && v !== "+" && (B = !1), M = (B ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + M, D = (S === "s" ? Iy[8 + wA / 3] : "") + D + (B && v === "(" ? ")" : ""), _) {
          for (N = -1, z = T.length; ++N < z; )
            if (L = T.charCodeAt(N), 48 > L || L > 57) {
              D = (L === 46 ? o + T.slice(N + 1) : T.slice(N)) + D, T = T.slice(0, N);
              break;
            }
        }
      }
      w && !g && (T = t(T, 1 / 0));
      var R = M.length + T.length + D.length, F = R < y ? new Array(y - R + 1).join(p) : "";
      switch (w && g && (T = t(F + T, F.length ? y - D.length : 1 / 0), F = ""), h) {
        case "<":
          T = M + T + D + F;
          break;
        case "=":
          T = M + F + T + D;
          break;
        case "^":
          T = F.slice(0, R = F.length >> 1) + M + T + D + F.slice(R);
          break;
        default:
          T = F + M + T + D;
          break;
      }
      return i(T);
    }
    return I.toString = function() {
      return d + "";
    }, I;
  }
  function l(d, p) {
    var h = u((d = hi(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(lo(p) / 3))) * 3, f = Math.pow(10, -v), g = Iy[8 + v / 3];
    return function(y) {
      return h(f * y) + g;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Ca, rh, xA;
VU({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function VU(e) {
  return Ca = KU(e), rh = Ca.format, xA = Ca.formatPrefix, Ca;
}
function qU(e) {
  return Math.max(0, -lo(Math.abs(e)));
}
function HU(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(lo(t) / 3))) * 3 - lo(Math.abs(e)));
}
function GU(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, lo(t) - lo(e)) + 1;
}
function EA(e, t, r, n) {
  var o = df(e, t, r), i;
  switch (n = hi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = HU(o, a)) && (n.precision = i), xA(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = GU(o, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = qU(o)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return rh(n);
}
function cn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return lf(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var o = t();
    return EA(o[0], o[o.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), o = 0, i = n.length - 1, a = n[o], s = n[i], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = o, o = i, i = u); l-- > 0; ) {
      if (u = uf(a, s, r), u === c)
        return n[o] = a, n[i] = s, t(n);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function SA() {
  var e = eh();
  return e.copy = function() {
    return Bi(e, SA());
  }, Ht.apply(e, arguments), cn(e);
}
function PA(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ss), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return PA(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ss) : [0, 1], cn(r);
}
function OA(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, o = e[r], i = e[n], a;
  return i < o && (a = r, r = n, n = a, a = o, o = i, i = a), e[r] = t.floor(o), e[n] = t.ceil(i), e;
}
function Ry(e) {
  return Math.log(e);
}
function My(e) {
  return Math.exp(e);
}
function YU(e) {
  return -Math.log(-e);
}
function XU(e) {
  return -Math.exp(-e);
}
function ZU(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function JU(e) {
  return e === 10 ? ZU : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function QU(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Dy(e) {
  return (t, r) => -e(-t, r);
}
function nh(e) {
  const t = e(Ry, My), r = t.domain;
  let n = 10, o, i;
  function a() {
    return o = QU(n), i = JU(n), r()[0] < 0 ? (o = Dy(o), i = Dy(i), e(YU, XU)) : e(Ry, My), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, a()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), a()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let u = c[0], l = c[c.length - 1];
    const d = l < u;
    d && ([u, l] = [l, u]);
    let p = o(u), h = o(l), v, f;
    const g = s == null ? 10 : +s;
    let y = [];
    if (!(n % 1) && h - p < g) {
      if (p = Math.floor(p), h = Math.ceil(h), u > 0) {
        for (; p <= h; ++p)
          for (v = 1; v < n; ++v)
            if (f = p < 0 ? v / i(-p) : v * i(p), !(f < u)) {
              if (f > l) break;
              y.push(f);
            }
      } else for (; p <= h; ++p)
        for (v = n - 1; v >= 1; --v)
          if (f = p > 0 ? v / i(-p) : v * i(p), !(f < u)) {
            if (f > l) break;
            y.push(f);
          }
      y.length * 2 < g && (y = lf(u, l, g));
    } else
      y = lf(p, h, Math.min(h - p, g)).map(i);
    return d ? y.reverse() : y;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = hi(c)).precision == null && (c.trim = !0), c = rh(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let d = l / i(Math.round(o(l)));
      return d * n < n - 0.5 && (d *= n), d <= u ? c(l) : "";
    };
  }, t.nice = () => r(OA(r(), {
    floor: (s) => i(Math.floor(o(s))),
    ceil: (s) => i(Math.ceil(o(s)))
  })), t;
}
function AA() {
  const e = nh(Lc()).domain([1, 10]);
  return e.copy = () => Bi(e, AA()).base(e.base()), Ht.apply(e, arguments), e;
}
function jy(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function $y(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function oh(e) {
  var t = 1, r = e(jy(t), $y(t));
  return r.constant = function(n) {
    return arguments.length ? e(jy(t = +n), $y(t)) : t;
  }, cn(r);
}
function CA() {
  var e = oh(Lc());
  return e.copy = function() {
    return Bi(e, CA()).constant(e.constant());
  }, Ht.apply(e, arguments);
}
function Ly(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function eW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function tW(e) {
  return e < 0 ? -e * e : e * e;
}
function ih(e) {
  var t = e(ft, ft), r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(eW, tW) : e(Ly(r), Ly(1 / r));
  }
  return t.exponent = function(o) {
    return arguments.length ? (r = +o, n()) : r;
  }, cn(t);
}
function ah() {
  var e = ih(Lc());
  return e.copy = function() {
    return Bi(e, ah()).exponent(e.exponent());
  }, Ht.apply(e, arguments), e;
}
function rW() {
  return ah.apply(null, arguments).exponent(0.5);
}
function Fy(e) {
  return Math.sign(e) * e * e;
}
function nW(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function TA() {
  var e = eh(), t = [0, 1], r = !1, n;
  function o(i) {
    var a = nW(e(i));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return o.invert = function(i) {
    return e.invert(Fy(i));
  }, o.domain = function(i) {
    return arguments.length ? (e.domain(i), o) : e.domain();
  }, o.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Ss)).map(Fy)), o) : t.slice();
  }, o.rangeRound = function(i) {
    return o.range(i).round(!0);
  }, o.round = function(i) {
    return arguments.length ? (r = !!i, o) : r;
  }, o.clamp = function(i) {
    return arguments.length ? (e.clamp(i), o) : e.clamp();
  }, o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  }, o.copy = function() {
    return TA(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ht.apply(o, arguments), cn(o);
}
function _A() {
  var e = [], t = [], r = [], n;
  function o() {
    var a = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++a < s; ) r[a - 1] = sU(e, a / s);
    return i;
  }
  function i(a) {
    return a == null || isNaN(a = +a) ? n : t[Li(r, a)];
  }
  return i.invertExtent = function(a) {
    var s = t.indexOf(a);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, i.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of a) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Xr), o();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), o()) : t.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return _A().domain(e).range(t).unknown(n);
  }, Ht.apply(i, arguments);
}
function kA() {
  var e = 0, t = 1, r = 1, n = [0.5], o = [0, 1], i;
  function a(c) {
    return c != null && c <= c ? o[Li(n, c, 0, r)] : i;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return a;
  }
  return a.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, s()) : [e, t];
  }, a.range = function(c) {
    return arguments.length ? (r = (o = Array.from(c)).length - 1, s()) : o.slice();
  }, a.invertExtent = function(c) {
    var u = o.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, a.unknown = function(c) {
    return arguments.length && (i = c), a;
  }, a.thresholds = function() {
    return n.slice();
  }, a.copy = function() {
    return kA().domain([e, t]).range(o).unknown(i);
  }, Ht.apply(cn(a), arguments);
}
function NA() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function o(i) {
    return i != null && i <= i ? t[Li(e, i, 0, n)] : r;
  }
  return o.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(i) {
    var a = t.indexOf(i);
    return [e[a - 1], e[a]];
  }, o.unknown = function(i) {
    return arguments.length ? (r = i, o) : r;
  }, o.copy = function() {
    return NA().domain(e).range(t).unknown(r);
  }, Ht.apply(o, arguments);
}
const qu = /* @__PURE__ */ new Date(), Hu = /* @__PURE__ */ new Date();
function qe(e, t, r, n) {
  function o(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return o.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), o.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), o.round = (i) => {
    const a = o(i), s = o.ceil(i);
    return i - a < s - i ? a : s;
  }, o.offset = (i, a) => (t(i = /* @__PURE__ */ new Date(+i), a == null ? 1 : Math.floor(a)), i), o.range = (i, a, s) => {
    const c = [];
    if (i = o.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < a) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (u < i && i < a);
    return c;
  }, o.filter = (i) => qe((a) => {
    if (a >= a) for (; e(a), !i(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; t(a, -1), !i(a); )
          ;
      else for (; --s >= 0; )
        for (; t(a, 1), !i(a); )
          ;
  }), r && (o.count = (i, a) => (qu.setTime(+i), Hu.setTime(+a), e(qu), e(Hu), Math.floor(r(qu, Hu))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(n ? (a) => n(a) % i === 0 : (a) => o.count(0, a) % i === 0) : o)), o;
}
const Os = qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Os.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Os);
Os.range;
const xr = 1e3, zt = xr * 60, Er = zt * 60, Ir = Er * 24, sh = Ir * 7, By = Ir * 30, Gu = Ir * 365, gn = qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * xr);
}, (e, t) => (t - e) / xr, (e) => e.getUTCSeconds());
gn.range;
const ch = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * xr);
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getMinutes());
ch.range;
const lh = qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getUTCMinutes());
lh.range;
const uh = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * xr - e.getMinutes() * zt);
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getHours());
uh.range;
const dh = qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getUTCHours());
dh.range;
const zi = qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * zt) / Ir,
  (e) => e.getDate() - 1
);
zi.range;
const Fc = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCDate() - 1);
Fc.range;
const IA = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => Math.floor(e / Ir));
IA.range;
function Kn(e) {
  return qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / sh);
}
const Bc = Kn(0), As = Kn(1), oW = Kn(2), iW = Kn(3), uo = Kn(4), aW = Kn(5), sW = Kn(6);
Bc.range;
As.range;
oW.range;
iW.range;
uo.range;
aW.range;
sW.range;
function Vn(e) {
  return qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / sh);
}
const zc = Vn(0), Cs = Vn(1), cW = Vn(2), lW = Vn(3), fo = Vn(4), uW = Vn(5), dW = Vn(6);
zc.range;
Cs.range;
cW.range;
lW.range;
fo.range;
uW.range;
dW.range;
const fh = qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
fh.range;
const ph = qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ph.range;
const Rr = qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Rr.range;
const Mr = qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Mr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Mr.range;
function RA(e, t, r, n, o, i) {
  const a = [
    [gn, 1, xr],
    [gn, 5, 5 * xr],
    [gn, 15, 15 * xr],
    [gn, 30, 30 * xr],
    [i, 1, zt],
    [i, 5, 5 * zt],
    [i, 15, 15 * zt],
    [i, 30, 30 * zt],
    [o, 1, Er],
    [o, 3, 3 * Er],
    [o, 6, 6 * Er],
    [o, 12, 12 * Er],
    [n, 1, Ir],
    [n, 2, 2 * Ir],
    [r, 1, sh],
    [t, 1, By],
    [t, 3, 3 * By],
    [e, 1, Gu]
  ];
  function s(u, l, d) {
    const p = l < u;
    p && ([u, l] = [l, u]);
    const h = d && typeof d.range == "function" ? d : c(u, l, d), v = h ? h.range(u, +l + 1) : [];
    return p ? v.reverse() : v;
  }
  function c(u, l, d) {
    const p = Math.abs(l - u) / d, h = Gp(([, , g]) => g).right(a, p);
    if (h === a.length) return e.every(df(u / Gu, l / Gu, d));
    if (h === 0) return Os.every(Math.max(df(u, l, d), 1));
    const [v, f] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return v.every(f);
  }
  return [s, c];
}
const [fW, pW] = RA(Mr, ph, zc, IA, dh, lh), [hW, mW] = RA(Rr, fh, Bc, zi, uh, ch);
function Yu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Xu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Uo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function vW(e) {
  var t = e.dateTime, r = e.date, n = e.time, o = e.periods, i = e.days, a = e.shortDays, s = e.months, c = e.shortMonths, u = Wo(o), l = Ko(o), d = Wo(i), p = Ko(i), h = Wo(a), v = Ko(a), f = Wo(s), g = Ko(s), y = Wo(c), w = Ko(c), b = {
    a: B,
    A: R,
    b: F,
    B: ee,
    c: null,
    d: qy,
    e: qy,
    f: FW,
    g: YW,
    G: ZW,
    H: jW,
    I: $W,
    j: LW,
    L: MA,
    m: BW,
    M: zW,
    p: ie,
    q: ne,
    Q: Yy,
    s: Xy,
    S: UW,
    u: WW,
    U: KW,
    V: VW,
    w: qW,
    W: HW,
    x: null,
    X: null,
    y: GW,
    Y: XW,
    Z: JW,
    "%": Gy
  }, E = {
    a: te,
    A: oe,
    b: ue,
    B: je,
    c: null,
    d: Hy,
    e: Hy,
    f: rK,
    g: fK,
    G: hK,
    H: QW,
    I: eK,
    j: tK,
    L: jA,
    m: nK,
    M: oK,
    p: W,
    q: fe,
    Q: Yy,
    s: Xy,
    S: iK,
    u: aK,
    U: sK,
    V: cK,
    w: lK,
    W: uK,
    x: null,
    X: null,
    y: dK,
    Y: pK,
    Z: mK,
    "%": Gy
  }, S = {
    a: I,
    A: T,
    b: M,
    B: D,
    c: N,
    d: Ky,
    e: Ky,
    f: IW,
    g: Wy,
    G: Uy,
    H: Vy,
    I: Vy,
    j: TW,
    L: NW,
    m: CW,
    M: _W,
    p: _,
    q: AW,
    Q: MW,
    s: DW,
    S: kW,
    u: xW,
    U: EW,
    V: SW,
    w: wW,
    W: PW,
    x: z,
    X: L,
    y: Wy,
    Y: Uy,
    Z: OW,
    "%": RW
  };
  b.x = P(r, b), b.X = P(n, b), b.c = P(t, b), E.x = P(r, E), E.X = P(n, E), E.c = P(t, E);
  function P(j, q) {
    return function(J) {
      var $ = [], Ee = -1, de = 0, Je = j.length, Qe, Gt, Tm;
      for (J instanceof Date || (J = /* @__PURE__ */ new Date(+J)); ++Ee < Je; )
        j.charCodeAt(Ee) === 37 && ($.push(j.slice(de, Ee)), (Gt = zy[Qe = j.charAt(++Ee)]) != null ? Qe = j.charAt(++Ee) : Gt = Qe === "e" ? " " : "0", (Tm = q[Qe]) && (Qe = Tm(J, Gt)), $.push(Qe), de = Ee + 1);
      return $.push(j.slice(de, Ee)), $.join("");
    };
  }
  function O(j, q) {
    return function(J) {
      var $ = Uo(1900, void 0, 1), Ee = A($, j, J += "", 0), de, Je;
      if (Ee != J.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (q && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (de = Xu(Uo($.y, 0, 1)), Je = de.getUTCDay(), de = Je > 4 || Je === 0 ? Cs.ceil(de) : Cs(de), de = Fc.offset(de, ($.V - 1) * 7), $.y = de.getUTCFullYear(), $.m = de.getUTCMonth(), $.d = de.getUTCDate() + ($.w + 6) % 7) : (de = Yu(Uo($.y, 0, 1)), Je = de.getDay(), de = Je > 4 || Je === 0 ? As.ceil(de) : As(de), de = zi.offset(de, ($.V - 1) * 7), $.y = de.getFullYear(), $.m = de.getMonth(), $.d = de.getDate() + ($.w + 6) % 7);
      } else ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), Je = "Z" in $ ? Xu(Uo($.y, 0, 1)).getUTCDay() : Yu(Uo($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (Je + 5) % 7 : $.w + $.U * 7 - (Je + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, Xu($)) : Yu($);
    };
  }
  function A(j, q, J, $) {
    for (var Ee = 0, de = q.length, Je = J.length, Qe, Gt; Ee < de; ) {
      if ($ >= Je) return -1;
      if (Qe = q.charCodeAt(Ee++), Qe === 37) {
        if (Qe = q.charAt(Ee++), Gt = S[Qe in zy ? q.charAt(Ee++) : Qe], !Gt || ($ = Gt(j, J, $)) < 0) return -1;
      } else if (Qe != J.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function _(j, q, J) {
    var $ = u.exec(q.slice(J));
    return $ ? (j.p = l.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function I(j, q, J) {
    var $ = h.exec(q.slice(J));
    return $ ? (j.w = v.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function T(j, q, J) {
    var $ = d.exec(q.slice(J));
    return $ ? (j.w = p.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function M(j, q, J) {
    var $ = y.exec(q.slice(J));
    return $ ? (j.m = w.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function D(j, q, J) {
    var $ = f.exec(q.slice(J));
    return $ ? (j.m = g.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function N(j, q, J) {
    return A(j, t, q, J);
  }
  function z(j, q, J) {
    return A(j, r, q, J);
  }
  function L(j, q, J) {
    return A(j, n, q, J);
  }
  function B(j) {
    return a[j.getDay()];
  }
  function R(j) {
    return i[j.getDay()];
  }
  function F(j) {
    return c[j.getMonth()];
  }
  function ee(j) {
    return s[j.getMonth()];
  }
  function ie(j) {
    return o[+(j.getHours() >= 12)];
  }
  function ne(j) {
    return 1 + ~~(j.getMonth() / 3);
  }
  function te(j) {
    return a[j.getUTCDay()];
  }
  function oe(j) {
    return i[j.getUTCDay()];
  }
  function ue(j) {
    return c[j.getUTCMonth()];
  }
  function je(j) {
    return s[j.getUTCMonth()];
  }
  function W(j) {
    return o[+(j.getUTCHours() >= 12)];
  }
  function fe(j) {
    return 1 + ~~(j.getUTCMonth() / 3);
  }
  return {
    format: function(j) {
      var q = P(j += "", b);
      return q.toString = function() {
        return j;
      }, q;
    },
    parse: function(j) {
      var q = O(j += "", !1);
      return q.toString = function() {
        return j;
      }, q;
    },
    utcFormat: function(j) {
      var q = P(j += "", E);
      return q.toString = function() {
        return j;
      }, q;
    },
    utcParse: function(j) {
      var q = O(j += "", !0);
      return q.toString = function() {
        return j;
      }, q;
    }
  };
}
var zy = { "-": "", _: " ", 0: "0" }, Ze = /^\s*\d+/, gW = /^%/, yW = /[\\^$*+?|[\]().{}]/g;
function pe(e, t, r) {
  var n = e < 0 ? "-" : "", o = (n ? -e : e) + "", i = o.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + o : o);
}
function bW(e) {
  return e.replace(yW, "\\$&");
}
function Wo(e) {
  return new RegExp("^(?:" + e.map(bW).join("|") + ")", "i");
}
function Ko(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function wW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function xW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function EW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function SW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function PW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Uy(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Wy(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function OW(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function AW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function CW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Ky(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function TW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Vy(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function _W(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function kW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function NW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function IW(e, t, r) {
  var n = Ze.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function RW(e, t, r) {
  var n = gW.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function MW(e, t, r) {
  var n = Ze.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function DW(e, t, r) {
  var n = Ze.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function qy(e, t) {
  return pe(e.getDate(), t, 2);
}
function jW(e, t) {
  return pe(e.getHours(), t, 2);
}
function $W(e, t) {
  return pe(e.getHours() % 12 || 12, t, 2);
}
function LW(e, t) {
  return pe(1 + zi.count(Rr(e), e), t, 3);
}
function MA(e, t) {
  return pe(e.getMilliseconds(), t, 3);
}
function FW(e, t) {
  return MA(e, t) + "000";
}
function BW(e, t) {
  return pe(e.getMonth() + 1, t, 2);
}
function zW(e, t) {
  return pe(e.getMinutes(), t, 2);
}
function UW(e, t) {
  return pe(e.getSeconds(), t, 2);
}
function WW(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function KW(e, t) {
  return pe(Bc.count(Rr(e) - 1, e), t, 2);
}
function DA(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? uo(e) : uo.ceil(e);
}
function VW(e, t) {
  return e = DA(e), pe(uo.count(Rr(e), e) + (Rr(e).getDay() === 4), t, 2);
}
function qW(e) {
  return e.getDay();
}
function HW(e, t) {
  return pe(As.count(Rr(e) - 1, e), t, 2);
}
function GW(e, t) {
  return pe(e.getFullYear() % 100, t, 2);
}
function YW(e, t) {
  return e = DA(e), pe(e.getFullYear() % 100, t, 2);
}
function XW(e, t) {
  return pe(e.getFullYear() % 1e4, t, 4);
}
function ZW(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? uo(e) : uo.ceil(e), pe(e.getFullYear() % 1e4, t, 4);
}
function JW(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + pe(t / 60 | 0, "0", 2) + pe(t % 60, "0", 2);
}
function Hy(e, t) {
  return pe(e.getUTCDate(), t, 2);
}
function QW(e, t) {
  return pe(e.getUTCHours(), t, 2);
}
function eK(e, t) {
  return pe(e.getUTCHours() % 12 || 12, t, 2);
}
function tK(e, t) {
  return pe(1 + Fc.count(Mr(e), e), t, 3);
}
function jA(e, t) {
  return pe(e.getUTCMilliseconds(), t, 3);
}
function rK(e, t) {
  return jA(e, t) + "000";
}
function nK(e, t) {
  return pe(e.getUTCMonth() + 1, t, 2);
}
function oK(e, t) {
  return pe(e.getUTCMinutes(), t, 2);
}
function iK(e, t) {
  return pe(e.getUTCSeconds(), t, 2);
}
function aK(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function sK(e, t) {
  return pe(zc.count(Mr(e) - 1, e), t, 2);
}
function $A(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? fo(e) : fo.ceil(e);
}
function cK(e, t) {
  return e = $A(e), pe(fo.count(Mr(e), e) + (Mr(e).getUTCDay() === 4), t, 2);
}
function lK(e) {
  return e.getUTCDay();
}
function uK(e, t) {
  return pe(Cs.count(Mr(e) - 1, e), t, 2);
}
function dK(e, t) {
  return pe(e.getUTCFullYear() % 100, t, 2);
}
function fK(e, t) {
  return e = $A(e), pe(e.getUTCFullYear() % 100, t, 2);
}
function pK(e, t) {
  return pe(e.getUTCFullYear() % 1e4, t, 4);
}
function hK(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? fo(e) : fo.ceil(e), pe(e.getUTCFullYear() % 1e4, t, 4);
}
function mK() {
  return "+0000";
}
function Gy() {
  return "%";
}
function Yy(e) {
  return +e;
}
function Xy(e) {
  return Math.floor(+e / 1e3);
}
var Xn, LA, FA;
vK({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vK(e) {
  return Xn = vW(e), LA = Xn.format, Xn.parse, FA = Xn.utcFormat, Xn.utcParse, Xn;
}
function gK(e) {
  return new Date(e);
}
function yK(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function hh(e, t, r, n, o, i, a, s, c, u) {
  var l = eh(), d = l.invert, p = l.domain, h = u(".%L"), v = u(":%S"), f = u("%I:%M"), g = u("%I %p"), y = u("%a %d"), w = u("%b %d"), b = u("%B"), E = u("%Y");
  function S(P) {
    return (c(P) < P ? h : s(P) < P ? v : a(P) < P ? f : i(P) < P ? g : n(P) < P ? o(P) < P ? y : w : r(P) < P ? b : E)(P);
  }
  return l.invert = function(P) {
    return new Date(d(P));
  }, l.domain = function(P) {
    return arguments.length ? p(Array.from(P, yK)) : p().map(gK);
  }, l.ticks = function(P) {
    var O = p();
    return e(O[0], O[O.length - 1], P ?? 10);
  }, l.tickFormat = function(P, O) {
    return O == null ? S : u(O);
  }, l.nice = function(P) {
    var O = p();
    return (!P || typeof P.range != "function") && (P = t(O[0], O[O.length - 1], P ?? 10)), P ? p(OA(O, P)) : l;
  }, l.copy = function() {
    return Bi(l, hh(e, t, r, n, o, i, a, s, c, u));
  }, l;
}
function bK() {
  return Ht.apply(hh(hW, mW, Rr, fh, Bc, zi, uh, ch, gn, LA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function wK() {
  return Ht.apply(hh(fW, pW, Mr, ph, zc, Fc, dh, lh, gn, FA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Uc() {
  var e = 0, t = 1, r, n, o, i, a = ft, s = !1, c;
  function u(d) {
    return d == null || isNaN(d = +d) ? c : a(o === 0 ? 0.5 : (d = (i(d) - r) * o, s ? Math.max(0, Math.min(1, d)) : d));
  }
  u.domain = function(d) {
    return arguments.length ? ([e, t] = d, r = i(e = +e), n = i(t = +t), o = r === n ? 0 : 1 / (n - r), u) : [e, t];
  }, u.clamp = function(d) {
    return arguments.length ? (s = !!d, u) : s;
  }, u.interpolator = function(d) {
    return arguments.length ? (a = d, u) : a;
  };
  function l(d) {
    return function(p) {
      var h, v;
      return arguments.length ? ([h, v] = p, a = d(h, v), u) : [a(0), a(1)];
    };
  }
  return u.range = l(Oo), u.rangeRound = l(Qp), u.unknown = function(d) {
    return arguments.length ? (c = d, u) : c;
  }, function(d) {
    return i = d, r = d(e), n = d(t), o = r === n ? 0 : 1 / (n - r), u;
  };
}
function ln(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function BA() {
  var e = cn(Uc()(ft));
  return e.copy = function() {
    return ln(e, BA());
  }, Fr.apply(e, arguments);
}
function zA() {
  var e = nh(Uc()).domain([1, 10]);
  return e.copy = function() {
    return ln(e, zA()).base(e.base());
  }, Fr.apply(e, arguments);
}
function UA() {
  var e = oh(Uc());
  return e.copy = function() {
    return ln(e, UA()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function mh() {
  var e = ih(Uc());
  return e.copy = function() {
    return ln(e, mh()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function xK() {
  return mh.apply(null, arguments).exponent(0.5);
}
function WA() {
  var e = [], t = ft;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Li(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let o of n) o != null && !isNaN(o = +o) && e.push(o);
    return e.sort(Xr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, o) => t(o / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (o, i) => aU(e, i / n));
  }, r.copy = function() {
    return WA(t).domain(e);
  }, Fr.apply(r, arguments);
}
function Wc() {
  var e = 0, t = 0.5, r = 1, n = 1, o, i, a, s, c, u = ft, l, d = !1, p;
  function h(f) {
    return isNaN(f = +f) ? p : (f = 0.5 + ((f = +l(f)) - i) * (n * f < n * i ? s : c), u(d ? Math.max(0, Math.min(1, f)) : f));
  }
  h.domain = function(f) {
    return arguments.length ? ([e, t, r] = f, o = l(e = +e), i = l(t = +t), a = l(r = +r), s = o === i ? 0 : 0.5 / (i - o), c = i === a ? 0 : 0.5 / (a - i), n = i < o ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(f) {
    return arguments.length ? (d = !!f, h) : d;
  }, h.interpolator = function(f) {
    return arguments.length ? (u = f, h) : u;
  };
  function v(f) {
    return function(g) {
      var y, w, b;
      return arguments.length ? ([y, w, b] = g, u = RU(f, [y, w, b]), h) : [u(0), u(0.5), u(1)];
    };
  }
  return h.range = v(Oo), h.rangeRound = v(Qp), h.unknown = function(f) {
    return arguments.length ? (p = f, h) : p;
  }, function(f) {
    return l = f, o = f(e), i = f(t), a = f(r), s = o === i ? 0 : 0.5 / (i - o), c = i === a ? 0 : 0.5 / (a - i), n = i < o ? -1 : 1, h;
  };
}
function KA() {
  var e = cn(Wc()(ft));
  return e.copy = function() {
    return ln(e, KA());
  }, Fr.apply(e, arguments);
}
function VA() {
  var e = nh(Wc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ln(e, VA()).base(e.base());
  }, Fr.apply(e, arguments);
}
function qA() {
  var e = oh(Wc());
  return e.copy = function() {
    return ln(e, qA()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function vh() {
  var e = ih(Wc());
  return e.copy = function() {
    return ln(e, vh()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function EK() {
  return vh.apply(null, arguments).exponent(0.5);
}
const Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Xp,
  scaleDiverging: KA,
  scaleDivergingLog: VA,
  scaleDivergingPow: vh,
  scaleDivergingSqrt: EK,
  scaleDivergingSymlog: qA,
  scaleIdentity: PA,
  scaleImplicit: ff,
  scaleLinear: SA,
  scaleLog: AA,
  scaleOrdinal: Yp,
  scalePoint: lU,
  scalePow: ah,
  scaleQuantile: _A,
  scaleQuantize: kA,
  scaleRadial: TA,
  scaleSequential: BA,
  scaleSequentialLog: zA,
  scaleSequentialPow: mh,
  scaleSequentialQuantile: WA,
  scaleSequentialSqrt: xK,
  scaleSequentialSymlog: UA,
  scaleSqrt: rW,
  scaleSymlog: CA,
  scaleThreshold: NA,
  scaleTime: bK,
  scaleUtc: wK,
  tickFormat: EA
}, Symbol.toStringTag, { value: "Module" }));
var un = (e) => e.chartData, gh = C([un], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Ui = (e, t, r, n) => n ? gh(e) : un(e);
function jn(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (Be(t) && Be(r))
      return !0;
  }
  return !1;
}
function Zy(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function HA(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, o, i;
    if (Be(r))
      o = r;
    else if (typeof r == "function")
      return;
    if (Be(n))
      i = n;
    else if (typeof n == "function")
      return;
    var a = [o, i];
    if (jn(a))
      return a;
  }
}
function SK(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (jn(n))
          return Zy(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [o, i] = e, a, s;
      if (o === "auto")
        t != null && (a = Math.min(...t));
      else if (X(o))
        a = o;
      else if (typeof o == "function")
        try {
          t != null && (a = o(t?.[0]));
        } catch {
        }
      else if (typeof o == "string" && Mg.test(o)) {
        var c = Mg.exec(o);
        if (c == null || t == null)
          a = void 0;
        else {
          var u = +c[1];
          a = t[0] - u;
        }
      } else
        a = t?.[0];
      if (i === "auto")
        t != null && (s = Math.max(...t));
      else if (X(i))
        s = i;
      else if (typeof i == "function")
        try {
          t != null && (s = i(t?.[1]));
        } catch {
        }
      else if (typeof i == "string" && Dg.test(i)) {
        var l = Dg.exec(i);
        if (l == null || t == null)
          s = void 0;
        else {
          var d = +l[1];
          s = t[1] + d;
        }
      } else
        s = t?.[1];
      var p = [a, s];
      if (jn(p))
        return t == null ? p : Zy(p, t, r);
    }
  }
}
var Ao = 1e9, PK = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, bh, Te = !0, qt = "[DecimalError] ", Pn = qt + "Invalid argument: ", yh = qt + "Exponent out of range: ", Co = Math.floor, hn = Math.pow, OK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tt, Ye = 1e7, Oe = 7, GA = 9007199254740991, Ts = Co(GA / Oe), H = {};
H.absoluteValue = H.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
H.comparedTo = H.cmp = function(e) {
  var t, r, n, o, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === o ? 0 : n > o ^ i.s < 0 ? 1 : -1;
};
H.decimalPlaces = H.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Oe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
H.dividedBy = H.div = function(e) {
  return Or(this, new this.constructor(e));
};
H.dividedToIntegerBy = H.idiv = function(e) {
  var t = this, r = t.constructor;
  return Se(Or(t, new r(e), 0, 1), r.precision);
};
H.equals = H.eq = function(e) {
  return !this.cmp(e);
};
H.exponent = function() {
  return Le(this);
};
H.greaterThan = H.gt = function(e) {
  return this.cmp(e) > 0;
};
H.greaterThanOrEqualTo = H.gte = function(e) {
  return this.cmp(e) >= 0;
};
H.isInteger = H.isint = function() {
  return this.e > this.d.length - 2;
};
H.isNegative = H.isneg = function() {
  return this.s < 0;
};
H.isPositive = H.ispos = function() {
  return this.s > 0;
};
H.isZero = function() {
  return this.s === 0;
};
H.lessThan = H.lt = function(e) {
  return this.cmp(e) < 0;
};
H.lessThanOrEqualTo = H.lte = function(e) {
  return this.cmp(e) < 1;
};
H.logarithm = H.log = function(e) {
  var t, r = this, n = r.constructor, o = n.precision, i = o + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Tt)) throw Error(qt + "NaN");
  if (r.s < 1) throw Error(qt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Tt) ? new n(0) : (Te = !1, t = Or(mi(r, i), mi(e, i), i), Te = !0, Se(t, o));
};
H.minus = H.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? ZA(t, e) : YA(t, (e.s = -e.s, e));
};
H.modulo = H.mod = function(e) {
  var t, r = this, n = r.constructor, o = n.precision;
  if (e = new n(e), !e.s) throw Error(qt + "NaN");
  return r.s ? (Te = !1, t = Or(r, e, 0, 1).times(e), Te = !0, r.minus(t)) : Se(new n(r), o);
};
H.naturalExponential = H.exp = function() {
  return XA(this);
};
H.naturalLogarithm = H.ln = function() {
  return mi(this);
};
H.negated = H.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
H.plus = H.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? YA(t, e) : ZA(t, (e.s = -e.s, e));
};
H.precision = H.sd = function(e) {
  var t, r, n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Pn + e);
  if (t = Le(o) + 1, n = o.d.length - 1, r = n * Oe + 1, n = o.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = o.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
H.squareRoot = H.sqrt = function() {
  var e, t, r, n, o, i, a, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(qt + "NaN");
  }
  for (e = Le(s), Te = !1, o = Math.sqrt(+s), o == 0 || o == 1 / 0 ? (t = ar(s.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = Co((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(o.toString()), r = c.precision, o = a = r + 3; ; )
    if (i = n, n = i.plus(Or(s, i, a + 2)).times(0.5), ar(i.d).slice(0, a) === (t = ar(n.d)).slice(0, a)) {
      if (t = t.slice(a - 3, a + 1), o == a && t == "4999") {
        if (Se(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      a += 4;
    }
  return Te = !0, Se(n, r);
};
H.times = H.mul = function(e) {
  var t, r, n, o, i, a, s, c, u, l = this, d = l.constructor, p = l.d, h = (e = new d(e)).d;
  if (!l.s || !e.s) return new d(0);
  for (e.s *= l.s, r = l.e + e.e, c = p.length, u = h.length, c < u && (i = p, p = h, h = i, a = c, c = u, u = a), i = [], a = c + u, n = a; n--; ) i.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, o = c + n; o > n; )
      s = i[o] + h[n] * p[o - n - 1] + t, i[o--] = s % Ye | 0, t = s / Ye | 0;
    i[o] = (i[o] + t) % Ye | 0;
  }
  for (; !i[--a]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Te ? Se(e, d.precision) : e;
};
H.toDecimalPlaces = H.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fr(e, 0, Ao), t === void 0 ? t = n.rounding : fr(t, 0, 8), Se(r, e + Le(r) + 1, t));
};
H.toExponential = function(e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0 ? r = $n(n, !0) : (fr(e, 0, Ao), t === void 0 ? t = o.rounding : fr(t, 0, 8), n = Se(new o(n), e + 1, t), r = $n(n, !0, e + 1)), r;
};
H.toFixed = function(e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0 ? $n(o) : (fr(e, 0, Ao), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = Se(new i(o), e + Le(o) + 1, t), r = $n(n.abs(), !1, e + Le(n) + 1), o.isneg() && !o.isZero() ? "-" + r : r);
};
H.toInteger = H.toint = function() {
  var e = this, t = e.constructor;
  return Se(new t(e), Le(e) + 1, t.rounding);
};
H.toNumber = function() {
  return +this;
};
H.toPower = H.pow = function(e) {
  var t, r, n, o, i, a, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(Tt);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(qt + "Infinity");
    return s;
  }
  if (s.eq(Tt)) return s;
  if (n = c.precision, e.eq(Tt)) return Se(s, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, i = s.s, a) {
    if ((r = l < 0 ? -l : l) <= GA) {
      for (o = new c(Tt), t = Math.ceil(n / Oe + 4), Te = !1; r % 2 && (o = o.times(s), Qy(o.d, t)), r = Co(r / 2), r !== 0; )
        s = s.times(s), Qy(s.d, t);
      return Te = !0, e.s < 0 ? new c(Tt).div(o) : Se(o, n);
    }
  } else if (i < 0) throw Error(qt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Te = !1, o = e.times(mi(s, n + u)), Te = !0, o = XA(o), o.s = i, o;
};
H.toPrecision = function(e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0 ? (r = Le(o), n = $n(o, r <= i.toExpNeg || r >= i.toExpPos)) : (fr(e, 1, Ao), t === void 0 ? t = i.rounding : fr(t, 0, 8), o = Se(new i(o), e, t), r = Le(o), n = $n(o, e <= r || r <= i.toExpNeg, e)), n;
};
H.toSignificantDigits = H.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, Ao), t === void 0 ? t = n.rounding : fr(t, 0, 8)), Se(new n(r), e, t);
};
H.toString = H.valueOf = H.val = H.toJSON = H[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Le(e), r = e.constructor;
  return $n(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function YA(e, t) {
  var r, n, o, i, a, s, c, u, l = e.constructor, d = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Te ? Se(t, d) : t;
  if (c = e.d, u = t.d, a = e.e, o = t.e, c = c.slice(), i = a - o, i) {
    for (i < 0 ? (n = c, i = -i, s = u.length) : (n = u, o = a, s = c.length), a = Math.ceil(d / Oe), s = a > s ? a + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, i = u.length, s - i < 0 && (i = s, n = u, u = c, c = n), r = 0; i; )
    r = (c[--i] = c[i] + u[i] + r) / Ye | 0, c[i] %= Ye;
  for (r && (c.unshift(r), ++o), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = o, Te ? Se(t, d) : t;
}
function fr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Pn + e);
}
function ar(e) {
  var t, r, n, o = e.length - 1, i = "", a = e[0];
  if (o > 0) {
    for (i += a, t = 1; t < o; t++)
      n = e[t] + "", r = Oe - n.length, r && (i += qr(r)), i += n;
    a = e[t], n = a + "", r = Oe - n.length, r && (i += qr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return i + a;
}
var Or = /* @__PURE__ */ (function() {
  function e(n, o) {
    var i, a = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * o + a, n[s] = i % Ye | 0, a = i / Ye | 0;
    return a && n.unshift(a), n;
  }
  function t(n, o, i, a) {
    var s, c;
    if (i != a)
      c = i > a ? 1 : -1;
    else
      for (s = c = 0; s < i; s++)
        if (n[s] != o[s]) {
          c = n[s] > o[s] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, o, i) {
    for (var a = 0; i--; )
      n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * Ye + n[i] - o[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, o, i, a) {
    var s, c, u, l, d, p, h, v, f, g, y, w, b, E, S, P, O, A, _ = n.constructor, I = n.s == o.s ? 1 : -1, T = n.d, M = o.d;
    if (!n.s) return new _(n);
    if (!o.s) throw Error(qt + "Division by zero");
    for (c = n.e - o.e, O = M.length, S = T.length, h = new _(I), v = h.d = [], u = 0; M[u] == (T[u] || 0); ) ++u;
    if (M[u] > (T[u] || 0) && --c, i == null ? w = i = _.precision : a ? w = i + (Le(n) - Le(o)) + 1 : w = i, w < 0) return new _(0);
    if (w = w / Oe + 2 | 0, u = 0, O == 1)
      for (l = 0, M = M[0], w++; (u < S || l) && w--; u++)
        b = l * Ye + (T[u] || 0), v[u] = b / M | 0, l = b % M | 0;
    else {
      for (l = Ye / (M[0] + 1) | 0, l > 1 && (M = e(M, l), T = e(T, l), O = M.length, S = T.length), E = O, f = T.slice(0, O), g = f.length; g < O; ) f[g++] = 0;
      A = M.slice(), A.unshift(0), P = M[0], M[1] >= Ye / 2 && ++P;
      do
        l = 0, s = t(M, f, O, g), s < 0 ? (y = f[0], O != g && (y = y * Ye + (f[1] || 0)), l = y / P | 0, l > 1 ? (l >= Ye && (l = Ye - 1), d = e(M, l), p = d.length, g = f.length, s = t(d, f, p, g), s == 1 && (l--, r(d, O < p ? A : M, p))) : (l == 0 && (s = l = 1), d = M.slice()), p = d.length, p < g && d.unshift(0), r(f, d, g), s == -1 && (g = f.length, s = t(M, f, O, g), s < 1 && (l++, r(f, O < g ? A : M, g))), g = f.length) : s === 0 && (l++, f = [0]), v[u++] = l, s && f[0] ? f[g++] = T[E] || 0 : (f = [T[E]], g = 1);
      while ((E++ < S || f[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), h.e = c, Se(h, a ? i + Le(h) + 1 : i);
  };
})();
function XA(e, t) {
  var r, n, o, i, a, s, c = 0, u = 0, l = e.constructor, d = l.precision;
  if (Le(e) > 16) throw Error(yh + Le(e));
  if (!e.s) return new l(Tt);
  for (Te = !1, s = d, a = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(a), u += 5;
  for (n = Math.log(hn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = o = i = new l(Tt), l.precision = s; ; ) {
    if (o = Se(o.times(e), s), r = r.times(++c), a = i.plus(Or(o, r, s)), ar(a.d).slice(0, s) === ar(i.d).slice(0, s)) {
      for (; u--; ) i = Se(i.times(i), s);
      return l.precision = d, t == null ? (Te = !0, Se(i, d)) : i;
    }
    i = a;
  }
}
function Le(e) {
  for (var t = e.e * Oe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Zu(e, t, r) {
  if (t > e.LN10.sd())
    throw Te = !0, r && (e.precision = r), Error(qt + "LN10 precision limit exceeded");
  return Se(new e(e.LN10), t);
}
function qr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function mi(e, t) {
  var r, n, o, i, a, s, c, u, l, d = 1, p = 10, h = e, v = h.d, f = h.constructor, g = f.precision;
  if (h.s < 1) throw Error(qt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Tt)) return new f(0);
  if (t == null ? (Te = !1, u = g) : u = t, h.eq(10))
    return t == null && (Te = !0), Zu(f, u);
  if (u += p, f.precision = u, r = ar(v), n = r.charAt(0), i = Le(h), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = ar(h.d), n = r.charAt(0), d++;
    i = Le(h), n > 1 ? (h = new f("0." + r), i++) : h = new f(n + "." + r.slice(1));
  } else
    return c = Zu(f, u + 2, g).times(i + ""), h = mi(new f(n + "." + r.slice(1)), u - p).plus(c), f.precision = g, t == null ? (Te = !0, Se(h, g)) : h;
  for (s = a = h = Or(h.minus(Tt), h.plus(Tt), u), l = Se(h.times(h), u), o = 3; ; ) {
    if (a = Se(a.times(l), u), c = s.plus(Or(a, new f(o), u)), ar(c.d).slice(0, u) === ar(s.d).slice(0, u))
      return s = s.times(2), i !== 0 && (s = s.plus(Zu(f, u + 2, g).times(i + ""))), s = Or(s, new f(d), u), f.precision = g, t == null ? (Te = !0, Se(s, g)) : s;
    s = c, o += 2;
  }
}
function Jy(e, t) {
  var r, n, o;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (t = t.slice(n, o), t) {
    if (o -= n, r = r - n - 1, e.e = Co(r / Oe), e.d = [], n = (r + 1) % Oe, r < 0 && (n += Oe), n < o) {
      for (n && e.d.push(+t.slice(0, n)), o -= Oe; n < o; ) e.d.push(+t.slice(n, n += Oe));
      t = t.slice(n), n = Oe - t.length;
    } else
      n -= o;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Te && (e.e > Ts || e.e < -Ts)) throw Error(yh + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Se(e, t, r) {
  var n, o, i, a, s, c, u, l, d = e.d;
  for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
  if (n = t - a, n < 0)
    n += Oe, o = t, u = d[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Oe), i = d.length, l >= i) return e;
    for (u = i = d[l], a = 1; i >= 10; i /= 10) a++;
    n %= Oe, o = n - Oe + a;
  }
  if (r !== void 0 && (i = hn(10, a - o - 1), s = u / i % 10 | 0, c = t < 0 || d[l + 1] !== void 0 || u % i, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? o > 0 ? u / hn(10, a - o) : 0 : d[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return c ? (i = Le(e), d.length = 1, t = t - i - 1, d[0] = hn(10, (Oe - t % Oe) % Oe), e.e = Co(-t / Oe) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = l, i = 1, l--) : (d.length = l + 1, i = hn(10, Oe - n), d[l] = o > 0 ? (u / hn(10, a - o) % hn(10, o) | 0) * i : 0), c)
    for (; ; )
      if (l == 0) {
        (d[0] += i) == Ye && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[l] += i, d[l] != Ye) break;
        d[l--] = 0, i = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (Te && (e.e > Ts || e.e < -Ts))
    throw Error(yh + Le(e));
  return e;
}
function ZA(e, t) {
  var r, n, o, i, a, s, c, u, l, d, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Te ? Se(t, h) : t;
  if (c = e.d, d = t.d, n = t.e, u = e.e, c = c.slice(), a = u - n, a) {
    for (l = a < 0, l ? (r = c, a = -a, s = d.length) : (r = d, n = u, s = c.length), o = Math.max(Math.ceil(h / Oe), s) + 2, a > o && (a = o, r.length = 1), r.reverse(), o = a; o--; ) r.push(0);
    r.reverse();
  } else {
    for (o = c.length, s = d.length, l = o < s, l && (s = o), o = 0; o < s; o++)
      if (c[o] != d[o]) {
        l = c[o] < d[o];
        break;
      }
    a = 0;
  }
  for (l && (r = c, c = d, d = r, t.s = -t.s), s = c.length, o = d.length - s; o > 0; --o) c[s++] = 0;
  for (o = d.length; o > a; ) {
    if (c[--o] < d[o]) {
      for (i = o; i && c[--i] === 0; ) c[i] = Ye - 1;
      --c[i], c[o] += Ye;
    }
    c[o] -= d[o];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Te ? Se(t, h) : t) : new p(0);
}
function $n(e, t, r) {
  var n, o = Le(e), i = ar(e.d), a = i.length;
  return t ? (r && (n = r - a) > 0 ? i = i.charAt(0) + "." + i.slice(1) + qr(n) : a > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (o < 0 ? "e" : "e+") + o) : o < 0 ? (i = "0." + qr(-o - 1) + i, r && (n = r - a) > 0 && (i += qr(n))) : o >= a ? (i += qr(o + 1 - a), r && (n = r - o - 1) > 0 && (i = i + "." + qr(n))) : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - a) > 0 && (o + 1 === a && (i += "."), i += qr(n))), e.s < 0 ? "-" + i : i;
}
function Qy(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function JA(e) {
  var t, r, n;
  function o(i) {
    var a = this;
    if (!(a instanceof o)) return new o(i);
    if (a.constructor = o, i instanceof o) {
      a.s = i.s, a.e = i.e, a.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(Pn + i);
      if (i > 0)
        a.s = 1;
      else if (i < 0)
        i = -i, a.s = -1;
      else {
        a.s = 0, a.e = 0, a.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        a.e = 0, a.d = [i];
        return;
      }
      return Jy(a, i.toString());
    } else if (typeof i != "string")
      throw Error(Pn + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), a.s = -1) : a.s = 1, OK.test(i)) Jy(a, i);
    else throw Error(Pn + i);
  }
  if (o.prototype = H, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = JA, o.config = o.set = AK, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return o.config(e), o;
}
function AK(e) {
  if (!e || typeof e != "object")
    throw Error(qt + "Object expected");
  var t, r, n, o = [
    "precision",
    1,
    Ao,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < o.length; t += 3)
    if ((n = e[r = o[t]]) !== void 0)
      if (Co(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Pn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Pn + r + ": " + n);
  return this;
}
var bh = JA(PK);
Tt = new bh(1);
const ge = bh;
var CK = (e) => e, QA = {}, e1 = (e) => e === QA, eb = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && e1(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, t1 = (e, t) => e === 1 ? t : eb(function() {
  for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  var i = n.filter((a) => a !== QA).length;
  return i >= e ? t(...n) : t1(e - i, eb(function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = n.map((l) => e1(l) ? s.shift() : l);
    return t(...u, ...s);
  }));
}), Kc = (e) => t1(e.length, e), vf = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, TK = Kc((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), _K = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return CK;
  var o = r.reverse(), i = o[0], a = o.slice(1);
  return function() {
    return a.reduce((s, c) => c(s), i(...arguments));
  };
}, gf = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), r1 = (e) => {
  var t = null, r = null;
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return t && o.every((a, s) => {
      var c;
      return a === ((c = t) === null || c === void 0 ? void 0 : c[s]);
    }) || (t = o, r = e(...o)), r;
  };
};
function n1(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ge(e).abs().log(10).toNumber()) + 1, t;
}
function o1(e, t, r) {
  for (var n = new ge(e), o = 0, i = []; n.lt(t) && o < 1e5; )
    i.push(n.toNumber()), n = n.add(r), o++;
  return i;
}
Kc((e, t, r) => {
  var n = +e, o = +t;
  return n + r * (o - n);
});
Kc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
});
Kc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
var i1 = (e) => {
  var [t, r] = e, [n, o] = [t, r];
  return t > r && ([n, o] = [r, t]), [n, o];
}, a1 = (e, t, r) => {
  if (e.lte(0))
    return new ge(0);
  var n = n1(e.toNumber()), o = new ge(10).pow(n), i = e.div(o), a = n !== 1 ? 0.05 : 0.1, s = new ge(Math.ceil(i.div(a).toNumber())).add(r).mul(a), c = s.mul(o);
  return t ? new ge(c.toNumber()) : new ge(Math.ceil(c.toNumber()));
}, kK = (e, t, r) => {
  var n = new ge(1), o = new ge(e);
  if (!o.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new ge(10).pow(n1(e) - 1), o = new ge(Math.floor(o.div(n).toNumber())).mul(n)) : i > 1 && (o = new ge(Math.floor(e)));
  } else e === 0 ? o = new ge(Math.floor((t - 1) / 2)) : r || (o = new ge(Math.floor(e)));
  var a = Math.floor((t - 1) / 2), s = _K(TK((c) => o.add(new ge(c - a).mul(n)).toNumber()), vf);
  return s(0, t);
}, s1 = function(t, r, n, o) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ge(0),
      tickMin: new ge(0),
      tickMax: new ge(0)
    };
  var a = a1(new ge(r).sub(t).div(n - 1), o, i), s;
  t <= 0 && r >= 0 ? s = new ge(0) : (s = new ge(t).add(r).div(2), s = s.sub(new ge(s).mod(a)));
  var c = Math.ceil(s.sub(t).div(a).toNumber()), u = Math.ceil(new ge(r).sub(s).div(a).toNumber()), l = c + u + 1;
  return l > n ? s1(t, r, n, o, i + 1) : (l < n && (u = r > 0 ? u + (n - l) : u, c = r > 0 ? c : c + (n - l)), {
    step: a,
    tickMin: s.sub(new ge(c).mul(a)),
    tickMax: s.add(new ge(u).mul(a))
  });
};
function NK(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, i = Math.max(n, 2), [a, s] = i1([t, r]);
  if (a === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [a, ...vf(0, n - 1).map(() => 1 / 0)] : [...vf(0, n - 1).map(() => -1 / 0), s];
    return t > r ? gf(c) : c;
  }
  if (a === s)
    return kK(a, n, o);
  var {
    step: u,
    tickMin: l,
    tickMax: d
  } = s1(a, s, i, o, 0), p = o1(l, d.add(new ge(0.1).mul(u)), u);
  return t > r ? gf(p) : p;
}
function IK(e, t) {
  var [r, n] = e, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [i, a] = i1([r, n]);
  if (i === -1 / 0 || a === 1 / 0)
    return [r, n];
  if (i === a)
    return [i];
  var s = Math.max(t, 2), c = a1(new ge(a).sub(i).div(s - 1), o, 0), u = [...o1(new ge(i), new ge(a), c), a];
  return o === !1 && (u = u.map((l) => Math.round(l))), r > n ? gf(u) : u;
}
var RK = r1(NK), MK = r1(IK), c1 = (e) => e.rootProps.maxBarSize, DK = (e) => e.rootProps.barGap, l1 = (e) => e.rootProps.barCategoryGap, jK = (e) => e.rootProps.barSize, Wi = (e) => e.rootProps.stackOffset, wh = (e) => e.options.chartName, xh = (e) => e.rootProps.syncId, u1 = (e) => e.rootProps.syncMethod, Eh = (e) => e.options.eventEmitter, br = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, Ot = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, Vc = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, $K = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: br.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: br.reversed,
  scale: br.scale,
  tick: br.tick,
  tickCount: void 0,
  ticks: void 0,
  type: br.type,
  unit: void 0
}, LK = {
  allowDataOverflow: Ot.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ot.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ot.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ot.scale,
  tick: Ot.tick,
  tickCount: Ot.tickCount,
  ticks: void 0,
  type: Ot.type,
  unit: void 0
}, FK = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: br.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: br.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: br.scale,
  tick: br.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, BK = {
  allowDataOverflow: Ot.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ot.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ot.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ot.scale,
  tick: Ot.tick,
  tickCount: Ot.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Sh = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? FK : $K, Ph = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? BK : LK, qc = (e) => e.polarOptions, Oh = C([jr, $r, Ke], UO), d1 = C([qc, Oh], (e, t) => {
  if (e != null)
    return st(e.innerRadius, t, 0);
}), f1 = C([qc, Oh], (e, t) => {
  if (e != null)
    return st(e.outerRadius, t, t * 0.8);
}), zK = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, p1 = C([qc], zK);
C([Sh, p1], Vc);
var h1 = C([Oh, d1, f1], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
C([Ph, h1], Vc);
var m1 = C([ce, qc, d1, f1, jr, $r], (e, t, r, n, o, i) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: s,
      startAngle: c,
      endAngle: u
    } = t;
    return {
      cx: st(a, o, o / 2),
      cy: st(s, i, i / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: c,
      endAngle: u,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), ke = (e, t) => t, Ki = (e, t, r) => r;
function Hc(e) {
  return e?.id;
}
var He = (e) => {
  var t = ce(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, To = (e) => e.tooltip.settings.axisId, Ge = (e) => {
  var t = He(e), r = To(e);
  return Vi(e, t, r);
}, v1 = C([Ge], (e) => e?.dataKey);
function g1(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: o,
    dataKey: i
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((s) => {
    var c, u = (c = s.data) !== null && c !== void 0 ? c : n;
    if (!(u == null || u.length === 0)) {
      var l = Hc(s);
      u.forEach((d, p) => {
        var h = i == null || o ? p : String(xe(d, i, null)), v = xe(d, s.dataKey, 0), f;
        a.has(h) ? f = a.get(h) : f = {}, Object.assign(f, {
          [l]: v
        }), a.set(h, f);
      });
    }
  }), Array.from(a.values());
}
function Gc(e) {
  return e.stackId != null && e.dataKey != null;
}
var Yc = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Xc(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), !0).forEach(function(n) {
      UK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UK(e, t, r) {
  return (t = WK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WK(e) {
  var t = KK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yf = [0, "auto"], Et = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0
}, y1 = (e, t) => e.cartesianAxis.xAxis[t], Br = (e, t) => {
  var r = y1(e, t);
  return r ?? Et;
}, St = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: yf,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  width: ji
}, b1 = (e, t) => e.cartesianAxis.yAxis[t], zr = (e, t) => {
  var r = b1(e, t);
  return r ?? St;
}, VK = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, Ah = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? VK;
}, Ne = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Br(e, r);
    case "yAxis":
      return zr(e, r);
    case "zAxis":
      return Ah(e, r);
    case "angleAxis":
      return Sh(e, r);
    case "radiusAxis":
      return Ph(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, qK = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Br(e, r);
    case "yAxis":
      return zr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Vi = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Br(e, r);
    case "yAxis":
      return zr(e, r);
    case "angleAxis":
      return Sh(e, r);
    case "radiusAxis":
      return Ph(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, w1 = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Ch(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var qi = (e) => e.graphicalItems.cartesianItems, HK = C([ke, Ki], Ch), Th = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), Hi = C([qi, Ne, HK], Th, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), x1 = C([Hi], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Gc)), E1 = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), GK = C([Hi], E1), _h = (e) => e.map((t) => t.data).filter(Boolean).flat(1), YK = C([Hi], _h, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), kh = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: o
  } = t;
  return e.length > 0 ? e : r.slice(n, o + 1);
}, Nh = C([YK, Ui], kh), Ih = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: xe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((o) => ({
  value: xe(o, n)
}))) : e.map((n) => ({
  value: n
})), Zc = C([Nh, Ne, Hi], Ih);
function S1(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function Ua(e) {
  if (dr(e) || e instanceof Date) {
    var t = Number(e);
    if (Be(t))
      return t;
  }
}
function rb(e) {
  if (Array.isArray(e)) {
    var t = [Ua(e[0]), Ua(e[1])];
    return jn(t) ? t : void 0;
  }
  var r = Ua(e);
  if (r != null)
    return [r, r];
}
function _o(e) {
  return e.map(Ua).filter(fz);
}
function XK(e, t, r) {
  return !r || typeof t != "number" || Nt(t) ? [] : r.length ? _o(r.flatMap((n) => {
    var o = xe(e, n.dataKey), i, a;
    if (Array.isArray(o) ? [i, a] = o : i = a = o, !(!Be(i) || !Be(a)))
      return [t - i, t + a];
  })) : [];
}
var ZK = C([x1, Ui, Ge], g1), P1 = (e, t, r) => {
  var n = {}, o = t.reduce((i, a) => (a.stackId == null || (i[a.stackId] == null && (i[a.stackId] = []), i[a.stackId].push(a)), i), n);
  return Object.fromEntries(Object.entries(o).map((i) => {
    var [a, s] = i, c = s.map(Hc);
    return [a, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: DF(e, c, r),
      graphicalItems: s
    }];
  }));
}, vi = C([ZK, x1, Wi], P1), O1 = (e, t, r, n) => {
  var {
    dataStartIndex: o,
    dataEndIndex: i
  } = t;
  if (n == null && r !== "zAxis") {
    var a = FF(e, o, i);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, JK = C([Ne], (e) => e.allowDataOverflow), Rh = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return yf;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = _o(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : yf;
}, Mh = C([Ne], Rh), Dh = C([Mh, JK], HA), QK = C([vi, un, ke, Dh], O1, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), Jc = (e) => e.errorBars, eV = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => S1(r, n)), ks = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  if (o.length !== 0) {
    var i = o.flat(), a = Math.min(...i), s = Math.max(...i);
    return [a, s];
  }
}, jh = (e, t, r, n, o) => {
  var i, a;
  if (r.length > 0 && e.forEach((s) => {
    r.forEach((c) => {
      var u, l, d = (u = n[c.id]) === null || u === void 0 ? void 0 : u.filter((y) => S1(o, y)), p = xe(s, (l = t.dataKey) !== null && l !== void 0 ? l : c.dataKey), h = XK(s, p, d);
      if (h.length >= 2) {
        var v = Math.min(...h), f = Math.max(...h);
        (i == null || v < i) && (i = v), (a == null || f > a) && (a = f);
      }
      var g = rb(p);
      g != null && (i = i == null ? g[0] : Math.min(i, g[0]), a = a == null ? g[1] : Math.max(a, g[1]));
    });
  }), t?.dataKey != null && e.forEach((s) => {
    var c = rb(xe(s, t.dataKey));
    c != null && (i = i == null ? c[0] : Math.min(i, c[0]), a = a == null ? c[1] : Math.max(a, c[1]));
  }), Be(i) && Be(a))
    return [i, a];
}, tV = C([Nh, Ne, GK, Jc, ke], jh, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
});
function rV(e) {
  var {
    value: t
  } = e;
  if (dr(t) || t instanceof Date)
    return t;
}
var nV = (e, t, r) => {
  var n = e.map(rV).filter((o) => o != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && HP(n)) ? fA(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, A1 = (e) => e.referenceElements.dots, ko = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), oV = C([A1, ke, Ki], ko), C1 = (e) => e.referenceElements.areas, iV = C([C1, ke, Ki], ko), T1 = (e) => e.referenceElements.lines, aV = C([T1, ke, Ki], ko), _1 = (e, t) => {
  var r = _o(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, sV = C(oV, ke, _1), k1 = (e, t) => {
  var r = _o(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, cV = C([iV, ke], k1), N1 = (e, t) => {
  var r = _o(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, lV = C(aV, ke, N1), uV = C(sV, lV, cV, (e, t, r) => ks(e, r, t)), $h = (e, t, r, n, o, i, a, s) => {
  if (r != null)
    return r;
  var c = a === "vertical" && s === "xAxis" || a === "horizontal" && s === "yAxis", u = c ? ks(n, i, o) : ks(i, o);
  return SK(t, u, e.allowDataOverflow);
}, dV = C([Ne, Mh, Dh, QK, tV, uV, ce, ke], $h, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), fV = [0, 1], Lh = (e, t, r, n, o, i, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: s,
      type: c
    } = e, u = vr(t, i);
    return u && s == null ? fA(0, r.length) : c === "category" ? nV(n, e, u) : o === "expand" ? fV : a;
  }
}, Fh = C([Ne, ce, Nh, Zc, Wi, ke, dV], Lh), I1 = (e, t, r, n, o) => {
  if (e != null) {
    var {
      scale: i,
      type: a
    } = e;
    if (i === "auto")
      return t === "radial" && o === "radiusAxis" ? "band" : t === "radial" && o === "angleAxis" ? "linear" : a === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : a === "category" ? "band" : "linear";
    if (typeof i == "string") {
      var s = "scale".concat(ki(i));
      return s in Zo ? s : "point";
    }
  }
}, No = C([Ne, ce, w1, wh, ke], I1);
function pV(e) {
  if (e != null) {
    if (e in Zo)
      return Zo[e]();
    var t = "scale".concat(ki(e));
    if (t in Zo)
      return Zo[t]();
  }
}
function Bh(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var o = pV(t);
    if (o != null) {
      var i = o.domain(r).range(n);
      return kF(i), i;
    }
  }
}
var zh = (e, t, r) => {
  var n = Rh(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && jn(e))
      return RK(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && jn(e))
      return MK(e, t.tickCount, t.allowDecimals);
  }
}, Uh = C([Fh, Vi, No], zh), Wh = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && jn(t) && Array.isArray(r) && r.length > 0
  ) {
    var o = t[0], i = r[0], a = t[1], s = r[r.length - 1];
    return [Math.min(o, i), Math.max(a, s)];
  }
  return t;
}, hV = C([Ne, Fh, Uh, ke], Wh), mV = C(Zc, Ne, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(_o(e.map((s) => s.value))).sort((s, c) => s - c);
    if (n.length < 2)
      return 1 / 0;
    var o = n[n.length - 1] - n[0];
    if (o === 0)
      return 1 / 0;
    for (var i = 0; i < n.length - 1; i++) {
      var a = n[i + 1] - n[i];
      r = Math.min(r, a);
    }
    return r / o;
  }
}), R1 = C(mV, ce, l1, Ke, (e, t, r, n) => n, (e, t, r, n, o) => {
  if (!Be(e))
    return 0;
  var i = t === "vertical" ? n.height : n.width;
  if (o === "gap")
    return e * i / 2;
  if (o === "no-gap") {
    var a = st(r, e * i), s = e * i / 2;
    return s - a - (s - a) / i * a;
  }
  return 0;
}), vV = (e, t) => {
  var r = Br(e, t);
  return r == null || typeof r.padding != "string" ? 0 : R1(e, "xAxis", t, r.padding);
}, gV = (e, t) => {
  var r = zr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : R1(e, "yAxis", t, r.padding);
}, yV = C(Br, vV, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: o
  } = e;
  return typeof o == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = o.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = o.right) !== null && n !== void 0 ? n : 0) + t
  };
}), bV = C(zr, gV, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: o
  } = e;
  return typeof o == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = o.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = o.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), wV = C([Ke, yV, Mc, Rc, (e, t, r) => r], (e, t, r, n, o) => {
  var {
    padding: i
  } = n;
  return o ? [i.left, r.width - i.right] : [e.left + t.left, e.left + e.width - t.right];
}), xV = C([Ke, ce, bV, Mc, Rc, (e, t, r) => r], (e, t, r, n, o, i) => {
  var {
    padding: a
  } = o;
  return i ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), Gi = (e, t, r, n) => {
  var o;
  switch (t) {
    case "xAxis":
      return wV(e, r, n);
    case "yAxis":
      return xV(e, r, n);
    case "zAxis":
      return (o = Ah(e, r)) === null || o === void 0 ? void 0 : o.range;
    case "angleAxis":
      return p1(e);
    case "radiusAxis":
      return h1(e, r);
    default:
      return;
  }
}, M1 = C([Ne, Gi], Vc), Io = C([Ne, No, hV, M1], Bh);
C([Hi, Jc, ke], eV);
function D1(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Qc = (e, t) => t, el = (e, t, r) => r, EV = C(Nc, Qc, el, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(D1)), SV = C(Ic, Qc, el, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(D1)), j1 = (e, t) => ({
  width: e.width,
  height: t.height
}), PV = (e, t) => {
  var r = typeof t.width == "number" ? t.width : ji;
  return {
    width: r,
    height: e.height
  };
}, $1 = C(Ke, Br, j1), OV = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, AV = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, CV = C($r, Ke, EV, Qc, el, (e, t, r, n, o) => {
  var i = {}, a;
  return r.forEach((s) => {
    var c = j1(t, s);
    a == null && (a = OV(t, n, e));
    var u = n === "top" && !o || n === "bottom" && o;
    i[s.id] = a - Number(u) * c.height, a += (u ? -1 : 1) * c.height;
  }), i;
}), TV = C(jr, Ke, SV, Qc, el, (e, t, r, n, o) => {
  var i = {}, a;
  return r.forEach((s) => {
    var c = PV(t, s);
    a == null && (a = AV(t, n, e));
    var u = n === "left" && !o || n === "right" && o;
    i[s.id] = a - Number(u) * c.width, a += (u ? -1 : 1) * c.width;
  }), i;
}), _V = (e, t) => {
  var r = Br(e, t);
  if (r != null)
    return CV(e, r.orientation, r.mirror);
}, kV = C([Ke, Br, _V, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var o = r?.[n];
    return o == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: o
    };
  }
}), NV = (e, t) => {
  var r = zr(e, t);
  if (r != null)
    return TV(e, r.orientation, r.mirror);
}, IV = C([Ke, zr, NV, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var o = r?.[n];
    return o == null ? {
      x: 0,
      y: e.top
    } : {
      x: o,
      y: e.top
    };
  }
}), L1 = C(Ke, zr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : ji;
  return {
    width: r,
    height: e.height
  };
}), nb = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return $1(e, r).width;
    case "yAxis":
      return L1(e, r).height;
    default:
      return;
  }
}, F1 = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: o,
      type: i,
      dataKey: a
    } = r, s = vr(e, n), c = t.map((u) => u.value);
    if (a && s && i === "category" && o && HP(c))
      return c;
  }
}, Kh = C([ce, Zc, Ne, ke], F1), B1 = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: o,
      scale: i
    } = r, a = vr(e, n);
    if (a && (o === "number" || i !== "auto"))
      return t.map((s) => s.value);
  }
}, Vh = C([ce, Zc, Vi, ke], B1), ob = C([ce, qK, No, Io, Kh, Vh, Gi, Uh, ke], (e, t, r, n, o, i, a, s, c) => {
  if (t == null)
    return null;
  var u = vr(e, c);
  return {
    angle: t.angle,
    interval: t.interval,
    minTickGap: t.minTickGap,
    orientation: t.orientation,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    axisType: c,
    categoricalDomain: i,
    duplicateDomain: o,
    isCategorical: u,
    niceTicks: s,
    range: a,
    realScaleType: r,
    scale: n
  };
}), RV = (e, t, r, n, o, i, a, s, c) => {
  if (!(t == null || n == null)) {
    var u = vr(e, c), {
      type: l,
      ticks: d,
      tickCount: p
    } = t, h = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = l === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    v = c === "angleAxis" && i != null && i.length >= 2 ? Xe(i[0] - i[1]) * 2 * v : v;
    var f = d || o;
    if (f) {
      var g = f.map((y, w) => {
        var b = a ? a.indexOf(y) : y;
        return {
          index: w,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(b) + v,
          value: y,
          offset: v
        };
      });
      return g.filter((y) => !Nt(y.coordinate));
    }
    return u && s ? s.map((y, w) => ({
      coordinate: n(y) + v,
      value: y,
      index: w,
      offset: v
    })) : n.ticks ? n.ticks(p).map((y) => ({
      coordinate: n(y) + v,
      value: y,
      offset: v
    })) : n.domain().map((y, w) => ({
      coordinate: n(y) + v,
      value: a ? a[y] : y,
      index: w,
      offset: v
    }));
  }
}, z1 = C([ce, Vi, No, Io, Uh, Gi, Kh, Vh, ke], RV), MV = (e, t, r, n, o, i, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var s = vr(e, a), {
      tickCount: c
    } = t, u = 0;
    return u = a === "angleAxis" && n?.length >= 2 ? Xe(n[0] - n[1]) * 2 * u : u, s && i ? i.map((l, d) => ({
      coordinate: r(l) + u,
      value: l,
      index: d,
      offset: u
    })) : r.ticks ? r.ticks(c).map((l) => ({
      coordinate: r(l) + u,
      value: l,
      offset: u
    })) : r.domain().map((l, d) => ({
      coordinate: r(l) + u,
      value: o ? o[l] : l,
      index: d,
      offset: u
    }));
  }
}, pr = C([ce, Vi, Io, Gi, Kh, Vh, ke], MV), hr = C(Ne, Io, (e, t) => {
  if (!(e == null || t == null))
    return _s(_s({}, e), {}, {
      scale: t
    });
}), DV = C([Ne, No, Fh, M1], Bh);
C((e, t, r) => Ah(e, r), DV, (e, t) => {
  if (!(e == null || t == null))
    return _s(_s({}, e), {}, {
      scale: t
    });
});
var jV = C([ce, Nc, Ic], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), U1 = (e) => e.options.defaultTooltipEventType, W1 = (e) => e.options.validateTooltipEventTypes;
function K1(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function qh(e, t) {
  var r = U1(e), n = W1(e);
  return K1(t, r, n);
}
function $V(e) {
  return Z((t) => qh(t, e));
}
var V1 = (e, t) => {
  var r, n = Number(t);
  if (!(Nt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, LV = (e) => e.tooltip.settings, Gr = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, FV = {
  itemInteraction: {
    click: Gr,
    hover: Gr
  },
  axisInteraction: {
    click: Gr,
    hover: Gr
  },
  keyboardInteraction: Gr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, q1 = Dt({
  name: "tooltip",
  initialState: FV,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ut()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Pr(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: ut()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate, e.keyboardInteraction.dataKey = t.payload.activeDataKey;
    }
  }
}), {
  addTooltipEntrySettings: BV,
  removeTooltipEntrySettings: zV,
  setTooltipSettingsState: UV,
  setActiveMouseOverItemIndex: H1,
  mouseLeaveItem: WV,
  mouseLeaveChart: G1,
  setActiveClickItemIndex: KV,
  setMouseOverAxisIndex: Y1,
  setMouseClickAxisIndex: VV,
  setSyncInteraction: bf,
  setKeyboardInteraction: wf
} = q1.actions, qV = q1.reducer;
function ib(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ib(Object(r), !0).forEach(function(n) {
      HV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ib(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HV(e, t, r) {
  return (t = GV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GV(e) {
  var t = YV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XV(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function ZV(e) {
  return e.index != null;
}
var X1 = (e, t, r, n) => {
  if (t == null)
    return Gr;
  var o = XV(e, t, r);
  if (o == null)
    return Gr;
  if (o.active)
    return o;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var i = e.settings.active === !0;
  if (ZV(o)) {
    if (i)
      return Ta(Ta({}, o), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return Ta(Ta({}, Gr), {}, {
    coordinate: o.coordinate
  });
}, Hh = (e, t) => {
  var r = e?.index;
  if (r == null)
    return null;
  var n = Number(r);
  if (!Be(n))
    return r;
  var o = 0, i = 1 / 0;
  return t.length > 0 && (i = t.length - 1), String(Math.max(o, Math.min(n, i)));
}, Z1 = (e, t, r, n, o, i, a, s) => {
  if (!(i == null || s == null)) {
    var c = a[0], u = c == null ? void 0 : s(c.positions, i);
    if (u != null)
      return u;
    var l = o?.[Number(i)];
    if (l)
      switch (r) {
        case "horizontal":
          return {
            x: l.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: l.coordinate
          };
      }
  }
}, J1 = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var o;
  return r === "hover" ? o = e.itemInteraction.hover.dataKey : o = e.itemInteraction.click.dataKey, o == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((i) => {
    var a;
    return ((a = i.settings) === null || a === void 0 ? void 0 : a.dataKey) === o;
  });
}, Yi = (e) => e.options.tooltipPayloadSearcher, Ro = (e) => e.tooltip;
function ab(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ab(Object(r), !0).forEach(function(n) {
      JV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JV(e, t, r) {
  return (t = QV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QV(e) {
  var t = e5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t5(e, t) {
  return e ?? t;
}
var Q1 = (e, t, r, n, o, i, a) => {
  if (!(t == null || i == null)) {
    var {
      chartData: s,
      computedData: c,
      dataStartIndex: u,
      dataEndIndex: l
    } = r, d = [];
    return e.reduce((p, h) => {
      var v, {
        dataDefinedOnItem: f,
        settings: g
      } = h, y = t5(f, s), w = Array.isArray(y) ? WO(y, u, l) : y, b = (v = g?.dataKey) !== null && v !== void 0 ? v : n, E = g?.nameKey, S;
      if (n && Array.isArray(w) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(w[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      a === "axis" ? S = GP(w, n, o) : S = i(w, t, c, E), Array.isArray(S))
        S.forEach((O) => {
          var A = sb(sb({}, g), {}, {
            name: O.name,
            unit: O.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          p.push(jg({
            tooltipEntrySettings: A,
            dataKey: O.dataKey,
            payload: O.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: xe(O.payload, O.dataKey),
            name: O.name
          }));
        });
      else {
        var P;
        p.push(jg({
          tooltipEntrySettings: g,
          dataKey: b,
          payload: S,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: xe(S, b),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (P = xe(S, E)) !== null && P !== void 0 ? P : g?.name
        }));
      }
      return p;
    }, d);
  }
}, Gh = C([Ge, ce, w1, wh, He], I1), r5 = C([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), n5 = C([He, To], Ch), Xi = C([r5, Ge, n5], Th, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), o5 = C([Xi], (e) => e.filter(Gc)), i5 = C([Xi], _h, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), Mo = C([i5, un], kh), a5 = C([o5, un, Ge], g1), Yh = C([Mo, Ge, Xi], Ih), eC = C([Ge], Rh), s5 = C([Ge], (e) => e.allowDataOverflow), tC = C([eC, s5], HA), c5 = C([Xi], (e) => e.filter(Gc)), l5 = C([a5, c5, Wi], P1), u5 = C([l5, un, He, tC], O1), d5 = C([Xi], E1), f5 = C([Mo, Ge, d5, Jc, He], jh, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), p5 = C([A1, He, To], ko), h5 = C([p5, He], _1), m5 = C([C1, He, To], ko), v5 = C([m5, He], k1), g5 = C([T1, He, To], ko), y5 = C([g5, He], N1), b5 = C([h5, y5, v5], ks), w5 = C([Ge, eC, tC, u5, f5, b5, ce, He], $h), rC = C([Ge, ce, Mo, Yh, Wi, He, w5], Lh), x5 = C([rC, Ge, Gh], zh), E5 = C([Ge, rC, x5, He], Wh), nC = (e) => {
  var t = He(e), r = To(e), n = !1;
  return Gi(e, t, r, n);
}, oC = C([Ge, nC], Vc), iC = C([Ge, Gh, E5, oC], Bh), S5 = C([ce, Yh, Ge, He], F1), P5 = C([ce, Yh, Ge, He], B1), O5 = (e, t, r, n, o, i, a, s) => {
  if (t) {
    var {
      type: c
    } = t, u = vr(e, s);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, d = c === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return d = s === "angleAxis" && o != null && o?.length >= 2 ? Xe(o[0] - o[1]) * 2 * d : d, u && a ? a.map((p, h) => ({
        coordinate: n(p) + d,
        value: p,
        index: h,
        offset: d
      })) : n.domain().map((p, h) => ({
        coordinate: n(p) + d,
        value: i ? i[p] : p,
        index: h,
        offset: d
      }));
    }
  }
}, Ur = C([ce, Ge, Gh, iC, nC, S5, P5, He], O5), Xh = C([U1, W1, LV], (e, t, r) => K1(r.shared, e, t)), aC = (e) => e.tooltip.settings.trigger, Zh = (e) => e.tooltip.settings.defaultIndex, tl = C([Ro, Xh, aC, Zh], X1), Qr = C([tl, Mo], Hh), sC = C([Ur, Qr], V1), cC = C([tl], (e) => {
  if (e)
    return e.dataKey;
}), lC = C([Ro, Xh, aC, Zh], J1), A5 = C([jr, $r, ce, Ke, Ur, Zh, lC, Yi], Z1), C5 = C([tl, A5], (e, t) => e != null && e.coordinate ? e.coordinate : t), T5 = C([tl], (e) => e.active), _5 = C([lC, Qr, un, v1, sC, Yi, Xh], Q1), k5 = C([_5], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function cb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), !0).forEach(function(n) {
      N5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N5(e, t, r) {
  return (t = I5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I5(e) {
  var t = R5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function R5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var M5 = () => Z(Ge), D5 = () => {
  var e = M5(), t = Z(Ur), r = Z(iC);
  return Dn(lb(lb({}, e), {}, {
    scale: r
  }), t);
}, uC = () => Z(wh), Jh = (e, t) => t, dC = (e, t, r) => r, Qh = (e, t, r, n) => n, j5 = C(Ur, (e) => Ac(e, (t) => t.coordinate)), em = C([Ro, Jh, dC, Qh], X1), fC = C([em, Mo], Hh), $5 = (e, t, r) => {
  if (t != null) {
    var n = Ro(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, pC = C([Ro, Jh, dC, Qh], J1), Ns = C([jr, $r, ce, Ke, Ur, Qh, pC, Yi], Z1), L5 = C([em, Ns], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), hC = C(Ur, fC, V1), F5 = C([pC, fC, un, v1, hC, Yi, Jh], Q1), B5 = C([em], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), z5 = (e, t, r, n, o, i, a, s) => {
  if (!(!e || !t || !n || !o || !i)) {
    var c = BF(e.chartX, e.chartY, t, r, s);
    if (c) {
      var u = UF(c, t), l = TF(u, a, i, n, o), d = zF(t, i, l, c);
      return {
        activeIndex: String(l),
        activeCoordinate: d
      };
    }
  }
};
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xf.apply(null, arguments);
}
function ub(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ub(Object(r), !0).forEach(function(n) {
      U5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U5(e, t, r) {
  return (t = W5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W5(e) {
  var t = K5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function K5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V5(e) {
  var {
    coordinate: t,
    payload: r,
    index: n,
    offset: o,
    tooltipAxisBandSize: i,
    layout: a,
    cursor: s,
    tooltipEventType: c,
    chartName: u
  } = e, l = t, d = r, p = n;
  if (!s || !l || u !== "ScatterChart" && c !== "axis")
    return null;
  var h, v;
  if (u === "ScatterChart")
    h = l, v = iz;
  else if (u === "BarChart")
    h = az(a, l, o, i), v = cA;
  else if (a === "radial") {
    var {
      cx: f,
      cy: g,
      radius: y,
      startAngle: w,
      endAngle: b
    } = lA(l);
    h = {
      cx: f,
      cy: g,
      startAngle: w,
      endAngle: b,
      innerRadius: y,
      outerRadius: y
    }, v = dA;
  } else
    h = {
      points: Wz(a, l, o)
    }, v = ro;
  var E = typeof s == "object" && "className" in s ? s.className : void 0, S = _a(_a(_a(_a({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), h), Nn(s)), {}, {
    payload: d,
    payloadIndex: p,
    className: le("recharts-tooltip-cursor", E)
  });
  return /* @__PURE__ */ Ut(s) ? /* @__PURE__ */ bi(s, S) : /* @__PURE__ */ ei(v, S);
}
function q5(e) {
  var t = D5(), r = QO(), n = $i(), o = uC();
  return /* @__PURE__ */ m.createElement(V5, xf({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: o
  }));
}
var mC = /* @__PURE__ */ Rt(null), H5 = () => Qt(mC), Ju = { exports: {} }, db;
function G5() {
  return db || (db = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function o(c, u, l) {
      this.fn = c, this.context = u, this.once = l || !1;
    }
    function i(c, u, l, d, p) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var h = new o(l, d || c, p), v = r ? r + u : u;
      return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], h] : c._events[v].push(h) : (c._events[v] = h, c._eventsCount++), c;
    }
    function a(c, u) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[u];
    }
    function s() {
      this._events = new n(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var u = [], l, d;
      if (this._eventsCount === 0) return u;
      for (d in l = this._events)
        t.call(l, d) && u.push(r ? d.slice(1) : d);
      return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
    }, s.prototype.listeners = function(u) {
      var l = r ? r + u : u, d = this._events[l];
      if (!d) return [];
      if (d.fn) return [d.fn];
      for (var p = 0, h = d.length, v = new Array(h); p < h; p++)
        v[p] = d[p].fn;
      return v;
    }, s.prototype.listenerCount = function(u) {
      var l = r ? r + u : u, d = this._events[l];
      return d ? d.fn ? 1 : d.length : 0;
    }, s.prototype.emit = function(u, l, d, p, h, v) {
      var f = r ? r + u : u;
      if (!this._events[f]) return !1;
      var g = this._events[f], y = arguments.length, w, b;
      if (g.fn) {
        switch (g.once && this.removeListener(u, g.fn, void 0, !0), y) {
          case 1:
            return g.fn.call(g.context), !0;
          case 2:
            return g.fn.call(g.context, l), !0;
          case 3:
            return g.fn.call(g.context, l, d), !0;
          case 4:
            return g.fn.call(g.context, l, d, p), !0;
          case 5:
            return g.fn.call(g.context, l, d, p, h), !0;
          case 6:
            return g.fn.call(g.context, l, d, p, h, v), !0;
        }
        for (b = 1, w = new Array(y - 1); b < y; b++)
          w[b - 1] = arguments[b];
        g.fn.apply(g.context, w);
      } else {
        var E = g.length, S;
        for (b = 0; b < E; b++)
          switch (g[b].once && this.removeListener(u, g[b].fn, void 0, !0), y) {
            case 1:
              g[b].fn.call(g[b].context);
              break;
            case 2:
              g[b].fn.call(g[b].context, l);
              break;
            case 3:
              g[b].fn.call(g[b].context, l, d);
              break;
            case 4:
              g[b].fn.call(g[b].context, l, d, p);
              break;
            default:
              if (!w) for (S = 1, w = new Array(y - 1); S < y; S++)
                w[S - 1] = arguments[S];
              g[b].fn.apply(g[b].context, w);
          }
      }
      return !0;
    }, s.prototype.on = function(u, l, d) {
      return i(this, u, l, d, !1);
    }, s.prototype.once = function(u, l, d) {
      return i(this, u, l, d, !0);
    }, s.prototype.removeListener = function(u, l, d, p) {
      var h = r ? r + u : u;
      if (!this._events[h]) return this;
      if (!l)
        return a(this, h), this;
      var v = this._events[h];
      if (v.fn)
        v.fn === l && (!p || v.once) && (!d || v.context === d) && a(this, h);
      else {
        for (var f = 0, g = [], y = v.length; f < y; f++)
          (v[f].fn !== l || p && !v[f].once || d && v[f].context !== d) && g.push(v[f]);
        g.length ? this._events[h] = g.length === 1 ? g[0] : g : a(this, h);
      }
      return this;
    }, s.prototype.removeAllListeners = function(u) {
      var l;
      return u ? (l = r ? r + u : u, this._events[l] && a(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  })(Ju)), Ju.exports;
}
var Y5 = G5();
const X5 = /* @__PURE__ */ an(Y5);
var gi = new X5(), Ef = "recharts.syncEvent.tooltip", fb = "recharts.syncEvent.brush";
function rl(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!Nt(r))
      return e?.[r];
  }
}
var Z5 = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, vC = Dt({
  name: "options",
  initialState: Z5,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), J5 = vC.reducer, {
  createEventEmitter: Q5
} = vC.actions;
function eq(e) {
  return e.tooltip.syncInteraction;
}
var tq = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, gC = Dt({
  name: "chartData",
  initialState: tq,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: pb,
  setDataStartEndIndexes: rq,
  setComputedData: JX
} = gC.actions, nq = gC.reducer, oq = ["x", "y"];
function hb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hb(Object(r), !0).forEach(function(n) {
      iq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iq(e, t, r) {
  return (t = aq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aq(e) {
  var t = sq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cq(e, t) {
  if (e == null) return {};
  var r, n, o = lq(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function lq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var yC = () => {
};
function uq() {
  var e = Z(xh), t = Z(Eh), r = _e(), n = Z(u1), o = Z(Ur), i = $i(), a = jc(), s = Z((c) => c.rootProps.className);
  Fe(() => {
    if (e == null)
      return yC;
    var c = (u, l, d) => {
      if (t !== d && e === u) {
        if (n === "index") {
          var p;
          if (a && l !== null && l !== void 0 && (p = l.payload) !== null && p !== void 0 && p.coordinate && l.payload.sourceViewBox) {
            var h = l.payload.coordinate, {
              x: v,
              y: f
            } = h, g = cq(h, oq), {
              x: y,
              y: w,
              width: b,
              height: E
            } = l.payload.sourceViewBox, S = Zn(Zn({}, g), {}, {
              x: a.x + (b ? (v - y) / b : 0) * a.width,
              y: a.y + (E ? (f - w) / E : 0) * a.height
            });
            r(Zn(Zn({}, l), {}, {
              payload: Zn(Zn({}, l.payload), {}, {
                coordinate: S
              })
            }));
          } else
            r(l);
          return;
        }
        if (o != null) {
          var P;
          if (typeof n == "function") {
            var O = {
              activeTooltipIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              isTooltipActive: l.payload.active,
              activeIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              activeLabel: l.payload.label,
              activeDataKey: l.payload.dataKey,
              activeCoordinate: l.payload.coordinate
            }, A = n(o, O);
            P = o[A];
          } else n === "value" && (P = o.find((L) => String(L.value) === l.payload.label));
          var {
            coordinate: _
          } = l.payload;
          if (P == null || l.payload.active === !1 || _ == null || a == null) {
            r(bf({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0
            }));
            return;
          }
          var {
            x: I,
            y: T
          } = _, M = Math.min(I, a.x + a.width), D = Math.min(T, a.y + a.height), N = {
            x: i === "horizontal" ? P.coordinate : M,
            y: i === "horizontal" ? D : P.coordinate
          }, z = bf({
            active: l.payload.active,
            coordinate: N,
            dataKey: l.payload.dataKey,
            index: String(P.index),
            label: l.payload.label,
            sourceViewBox: l.payload.sourceViewBox
          });
          r(z);
        }
      }
    };
    return gi.on(Ef, c), () => {
      gi.off(Ef, c);
    };
  }, [s, r, t, e, n, o, i, a]);
}
function dq() {
  var e = Z(xh), t = Z(Eh), r = _e();
  Fe(() => {
    if (e == null)
      return yC;
    var n = (o, i, a) => {
      t !== a && e === o && r(rq(i));
    };
    return gi.on(fb, n), () => {
      gi.off(fb, n);
    };
  }, [r, t, e]);
}
function fq() {
  var e = _e();
  Fe(() => {
    e(Q5());
  }, [e]), uq(), dq();
}
function pq(e, t, r, n, o, i) {
  var a = Z((h) => $5(h, e, t)), s = Z(Eh), c = Z(xh), u = Z(u1), l = Z(eq), d = l?.active, p = jc();
  Fe(() => {
    if (!d && c != null && s != null) {
      var h = bf({
        active: i,
        coordinate: r,
        dataKey: a,
        index: o,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: p
      });
      gi.emit(Ef, c, h, s);
    }
  }, [d, r, a, o, n, s, c, u, i, p]);
}
function mb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mb(Object(r), !0).forEach(function(n) {
      hq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hq(e, t, r) {
  return (t = mq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mq(e) {
  var t = vq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gq(e) {
  return e.dataKey;
}
function yq(e, t) {
  return /* @__PURE__ */ m.isValidElement(e) ? /* @__PURE__ */ m.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ m.createElement(e, t) : /* @__PURE__ */ m.createElement($B, t);
}
var gb = [], bq = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  isAnimationActive: !Lr.isSsr,
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function nl(e) {
  var t = Ve(e, bq), {
    active: r,
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: i,
    content: a,
    filterNull: s,
    isAnimationActive: c,
    offset: u,
    payloadUniqBy: l,
    position: d,
    reverseDirection: p,
    useTranslate3d: h,
    wrapperStyle: v,
    cursor: f,
    shared: g,
    trigger: y,
    defaultIndex: w,
    portal: b,
    axisId: E
  } = t, S = _e(), P = typeof w == "number" ? String(w) : w;
  Fe(() => {
    S(UV({
      shared: g,
      trigger: y,
      axisId: E,
      active: r,
      defaultIndex: P
    }));
  }, [S, g, y, E, r, P]);
  var O = jc(), A = nA(), _ = $V(g), {
    activeIndex: I,
    isActive: T
  } = Z((ue) => B5(ue, _, y, P)), M = Z((ue) => F5(ue, _, y, P)), D = Z((ue) => hC(ue, _, y, P)), N = Z((ue) => L5(ue, _, y, P)), z = M, L = H5(), B = r ?? T, [R, F] = dO([z, B]), ee = _ === "axis" ? D : void 0;
  pq(_, y, N, ee, I, B);
  var ie = b ?? L;
  if (ie == null)
    return null;
  var ne = z ?? gb;
  B || (ne = gb), s && ne.length && (ne = iO(z.filter((ue) => ue.value != null && (ue.hide !== !0 || t.includeHidden)), l, gq));
  var te = ne.length > 0, oe = /* @__PURE__ */ m.createElement(KB, {
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: i,
    isAnimationActive: c,
    active: B,
    coordinate: N,
    hasPayload: te,
    offset: u,
    position: d,
    reverseDirection: p,
    useTranslate3d: h,
    viewBox: O,
    wrapperStyle: v,
    lastBoundingBox: R,
    innerRef: F,
    hasPortalFromProps: !!b
  }, yq(a, vb(vb({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: ne,
    label: ee,
    active: B,
    coordinate: N,
    accessibilityLayer: A
  })));
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ $w(oe, ie), B && /* @__PURE__ */ m.createElement(q5, {
    cursor: f,
    tooltipEventType: _,
    coordinate: N,
    payload: z,
    index: I
  }));
}
var Zi = (e) => null;
Zi.displayName = "Cell";
function wq(e, t, r) {
  return (t = xq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xq(e) {
  var t = Eq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Eq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class Sq {
  constructor(t) {
    wq(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function yb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yb(Object(r), !0).forEach(function(n) {
      Oq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Oq(e, t, r) {
  return (t = Aq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Aq(e) {
  var t = Cq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tq = {
  cacheSize: 2e3,
  enableCache: !0
}, bC = Pq({}, Tq), bb = new Sq(bC.cacheSize), _q = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, wb = "recharts_measurement_span";
function kq(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", o = t.fontWeight || "", i = t.fontStyle || "", a = t.letterSpacing || "", s = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(o, "|").concat(i, "|").concat(a, "|").concat(s);
}
var xb = (e, t) => {
  try {
    var r = document.getElementById(wb);
    r || (r = document.createElement("span"), r.setAttribute("id", wb), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, _q, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Qo = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Lr.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!bC.enableCache)
    return xb(t, r);
  var n = kq(t, r), o = bb.get(n);
  if (o)
    return o;
  var i = xb(t, r);
  return bb.set(n, i), i;
}, Eb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Sb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Nq = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, Iq = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, wC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, Rq = Object.keys(wC), Jn = "NaN";
function Mq(e, t) {
  return e * wC[t];
}
class vt {
  static parse(t) {
    var r, [, n, o] = (r = Iq.exec(t)) !== null && r !== void 0 ? r : [];
    return new vt(parseFloat(n), o ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Nt(t) && (this.unit = ""), r !== "" && !Nq.test(r) && (this.num = NaN, this.unit = ""), Rq.includes(r) && (this.num = Mq(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new vt(NaN, "") : new vt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new vt(NaN, "") : new vt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new vt(NaN, "") : new vt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new vt(NaN, "") : new vt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Nt(this.num);
  }
}
function xC(e) {
  if (e.includes(Jn))
    return Jn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, o, i] = (r = Eb.exec(t)) !== null && r !== void 0 ? r : [], a = vt.parse(n ?? ""), s = vt.parse(i ?? ""), c = o === "*" ? a.multiply(s) : a.divide(s);
    if (c.isNaN())
      return Jn;
    t = t.replace(Eb, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, l, d, p] = (u = Sb.exec(t)) !== null && u !== void 0 ? u : [], h = vt.parse(l ?? ""), v = vt.parse(p ?? ""), f = d === "+" ? h.add(v) : h.subtract(v);
    if (f.isNaN())
      return Jn;
    t = t.replace(Sb, f.toString());
  }
  return t;
}
var Pb = /\(([^()]*)\)/;
function Dq(e) {
  for (var t = e, r; (r = Pb.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Pb, xC(n));
  }
  return t;
}
function jq(e) {
  var t = e.replace(/\s+/g, "");
  return t = Dq(t), t = xC(t), t;
}
function $q(e) {
  try {
    return jq(e);
  } catch {
    return Jn;
  }
}
function Qu(e) {
  var t = $q(e.slice(5, -1));
  return t === Jn ? "" : t;
}
var Lq = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], Fq = ["dx", "dy", "angle", "className", "breakAll"];
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sf.apply(null, arguments);
}
function Ob(e, t) {
  if (e == null) return {};
  var r, n, o = Bq(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Bq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var EC = /[ \f\n\r\t\v\u2028\u2029]+/, SC = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var o = [];
    Ae(t) || (r ? o = t.toString().split("") : o = t.toString().split(EC));
    var i = o.map((s) => ({
      word: s,
      width: Qo(s, n).width
    })), a = r ? 0 : Qo(" ", n).width;
    return {
      wordsWithComputedWidth: i,
      spaceWidth: a
    };
  } catch {
    return null;
  }
}, zq = (e, t, r, n, o) => {
  var {
    maxLines: i,
    children: a,
    style: s,
    breakAll: c
  } = e, u = X(i), l = a, d = function() {
    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return T.reduce((M, D) => {
      var {
        word: N,
        width: z
      } = D, L = M[M.length - 1];
      if (L && (n == null || o || L.width + z + r < Number(n)))
        L.words.push(N), L.width += z + r;
      else {
        var B = {
          words: [N],
          width: z
        };
        M.push(B);
      }
      return M;
    }, []);
  }, p = d(t), h = (I) => I.reduce((T, M) => T.width > M.width ? T : M);
  if (!u || o)
    return p;
  var v = p.length > i || h(p).width > Number(n);
  if (!v)
    return p;
  for (var f = "…", g = (I) => {
    var T = l.slice(0, I), M = SC({
      breakAll: c,
      style: s,
      children: T + f
    }).wordsWithComputedWidth, D = d(M), N = D.length > i || h(D).width > Number(n);
    return [N, D];
  }, y = 0, w = l.length - 1, b = 0, E; y <= w && b <= l.length - 1; ) {
    var S = Math.floor((y + w) / 2), P = S - 1, [O, A] = g(P), [_] = g(S);
    if (!O && !_ && (y = S + 1), O && _ && (w = S - 1), !O && _) {
      E = A;
      break;
    }
    b++;
  }
  return E || p;
}, Ab = (e) => {
  var t = Ae(e) ? [] : e.toString().split(EC);
  return [{
    words: t
  }];
}, Uq = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: o,
    breakAll: i,
    maxLines: a
  } = e;
  if ((t || r) && !Lr.isSsr) {
    var s, c, u = SC({
      breakAll: i,
      children: n,
      style: o
    });
    if (u) {
      var {
        wordsWithComputedWidth: l,
        spaceWidth: d
      } = u;
      s = l, c = d;
    } else
      return Ab(n);
    return zq({
      breakAll: i,
      children: n,
      maxLines: a,
      style: o
    }, s, c, t, r);
  }
  return Ab(n);
}, Cb = "#808080", ol = /* @__PURE__ */ De((e, t) => {
  var {
    x: r = 0,
    y: n = 0,
    lineHeight: o = "1em",
    // Magic number from d3
    capHeight: i = "0.71em",
    scaleToFit: a = !1,
    textAnchor: s = "start",
    // Maintain compat with existing charts / default SVG behavior
    verticalAnchor: c = "end",
    fill: u = Cb
  } = e, l = Ob(e, Lq), d = Dr(() => Uq({
    breakAll: l.breakAll,
    children: l.children,
    maxLines: l.maxLines,
    scaleToFit: a,
    style: l.style,
    width: l.width
  }), [l.breakAll, l.children, l.maxLines, a, l.style, l.width]), {
    dx: p,
    dy: h,
    angle: v,
    className: f,
    breakAll: g
  } = l, y = Ob(l, Fq);
  if (!dr(r) || !dr(n) || d.length === 0)
    return null;
  var w = r + (X(p) ? p : 0), b = n + (X(h) ? h : 0), E;
  switch (c) {
    case "start":
      E = Qu("calc(".concat(i, ")"));
      break;
    case "middle":
      E = Qu("calc(".concat((d.length - 1) / 2, " * -").concat(o, " + (").concat(i, " / 2))"));
      break;
    default:
      E = Qu("calc(".concat(d.length - 1, " * -").concat(o, ")"));
      break;
  }
  var S = [];
  if (a) {
    var P = d[0].width, {
      width: O
    } = l;
    S.push("scale(".concat(X(O) ? O / P : 1, ")"));
  }
  return v && S.push("rotate(".concat(v, ", ").concat(w, ", ").concat(b, ")")), S.length && (y.transform = S.join(" ")), /* @__PURE__ */ m.createElement("text", Sf({}, mt(y), {
    ref: t,
    x: w,
    y: b,
    className: le("recharts-text", f),
    textAnchor: s,
    fill: u.includes("url") ? Cb : u
  }), d.map((A, _) => {
    var I = A.words.join(g ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement("tspan", {
        x: w,
        dy: _ === 0 ? E : o,
        key: "".concat(I, "-").concat(_)
      }, I)
    );
  }));
});
ol.displayName = "Text";
var Wq = ["labelRef"];
function Kq(e, t) {
  if (e == null) return {};
  var r, n, o = Vq(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Vq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tb(Object(r), !0).forEach(function(n) {
      qq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qq(e, t, r) {
  return (t = Hq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hq(e) {
  var t = Gq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wr.apply(null, arguments);
}
var PC = /* @__PURE__ */ Rt(null), Yq = (e) => {
  var {
    x: t,
    y: r,
    width: n,
    height: o,
    children: i
  } = e, a = Dr(() => ({
    x: t,
    y: r,
    width: n,
    height: o
  }), [t, r, n, o]);
  return /* @__PURE__ */ m.createElement(PC.Provider, {
    value: a
  }, i);
}, OC = () => {
  var e = Qt(PC), t = jc();
  return e || t;
}, Xq = /* @__PURE__ */ Rt(null), Zq = () => {
  var e = Qt(Xq), t = Z(m1);
  return e || t;
}, Jq = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Ae(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, tm = (e) => e != null && typeof e == "function", Qq = (e, t) => {
  var r = Xe(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, e3 = (e, t, r, n, o) => {
  var {
    offset: i,
    className: a
  } = e, {
    cx: s,
    cy: c,
    innerRadius: u,
    outerRadius: l,
    startAngle: d,
    endAngle: p,
    clockWise: h
  } = o, v = (u + l) / 2, f = Qq(d, p), g = f >= 0 ? 1 : -1, y, w;
  switch (t) {
    case "insideStart":
      y = d + g * i, w = h;
      break;
    case "insideEnd":
      y = p - g * i, w = !h;
      break;
    case "end":
      y = p + g * i, w = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = f <= 0 ? w : !w;
  var b = $e(s, c, v, y), E = $e(s, c, v, y + (w ? 1 : -1) * 359), S = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), P = Ae(e.id) ? ai("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ m.createElement("text", wr({}, n, {
    dominantBaseline: "central",
    className: le("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("path", {
    id: P,
    d: S
  })), /* @__PURE__ */ m.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, t3 = (e, t, r) => {
  var {
    cx: n,
    cy: o,
    innerRadius: i,
    outerRadius: a,
    startAngle: s,
    endAngle: c
  } = e, u = (s + c) / 2;
  if (r === "outside") {
    var {
      x: l,
      y: d
    } = $e(n, o, a + t, u);
    return {
      x: l,
      y: d,
      textAnchor: l >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: o,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: o,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: o,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (i + a) / 2, {
    x: h,
    y: v
  } = $e(n, o, p, u);
  return {
    x: h,
    y: v,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, AC = (e) => "cx" in e && X(e.cx), r3 = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: o
  } = e, i;
  r != null && !AC(r) && (i = r);
  var {
    x: a,
    y: s,
    width: c,
    height: u
  } = t, l = u >= 0 ? 1 : -1, d = l * n, p = l > 0 ? "end" : "start", h = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, f = v * n, g = v > 0 ? "end" : "start", y = v > 0 ? "start" : "end";
  if (o === "top") {
    var w = {
      x: a + c / 2,
      y: s - l * n,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Me(Me({}, w), i ? {
      height: Math.max(s - i.y, 0),
      width: c
    } : {});
  }
  if (o === "bottom") {
    var b = {
      x: a + c / 2,
      y: s + u + d,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Me(Me({}, b), i ? {
      height: Math.max(i.y + i.height - (s + u), 0),
      width: c
    } : {});
  }
  if (o === "left") {
    var E = {
      x: a - f,
      y: s + u / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Me(Me({}, E), i ? {
      width: Math.max(E.x - i.x, 0),
      height: u
    } : {});
  }
  if (o === "right") {
    var S = {
      x: a + c + f,
      y: s + u / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return Me(Me({}, S), i ? {
      width: Math.max(i.x + i.width - S.x, 0),
      height: u
    } : {});
  }
  var P = i ? {
    width: c,
    height: u
  } : {};
  return o === "insideLeft" ? Me({
    x: a + f,
    y: s + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, P) : o === "insideRight" ? Me({
    x: a + c - f,
    y: s + u / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, P) : o === "insideTop" ? Me({
    x: a + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: h
  }, P) : o === "insideBottom" ? Me({
    x: a + c / 2,
    y: s + u - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, P) : o === "insideTopLeft" ? Me({
    x: a + f,
    y: s + d,
    textAnchor: y,
    verticalAnchor: h
  }, P) : o === "insideTopRight" ? Me({
    x: a + c - f,
    y: s + d,
    textAnchor: g,
    verticalAnchor: h
  }, P) : o === "insideBottomLeft" ? Me({
    x: a + f,
    y: s + u - d,
    textAnchor: y,
    verticalAnchor: p
  }, P) : o === "insideBottomRight" ? Me({
    x: a + c - f,
    y: s + u - d,
    textAnchor: g,
    verticalAnchor: p
  }, P) : o && typeof o == "object" && (X(o.x) || kr(o.x)) && (X(o.y) || kr(o.y)) ? Me({
    x: a + st(o.x, c),
    y: s + st(o.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, P) : Me({
    x: a + c / 2,
    y: s + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, P);
}, n3 = {
  offset: 5
};
function Hr(e) {
  var t = Ve(e, n3), {
    viewBox: r,
    position: n,
    value: o,
    children: i,
    content: a,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, l = Zq(), d = OC(), p = n === "center" ? d : l ?? d, h = r || p;
  if (!h || Ae(o) && Ae(i) && !/* @__PURE__ */ Ut(a) && typeof a != "function")
    return null;
  var v = Me(Me({}, t), {}, {
    viewBox: h
  });
  if (/* @__PURE__ */ Ut(a)) {
    var {
      labelRef: f
    } = v, g = Kq(v, Wq);
    return /* @__PURE__ */ bi(a, g);
  }
  var y;
  if (typeof a == "function") {
    if (y = /* @__PURE__ */ ei(a, v), /* @__PURE__ */ Ut(y))
      return y;
  } else
    y = Jq(t);
  var w = AC(h), b = mt(t);
  if (w && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return e3(t, n, y, b, h);
  var E = w ? t3(h, t.offset, t.position) : r3(t, h);
  return /* @__PURE__ */ m.createElement(ol, wr({
    ref: u,
    className: le("recharts-label", s)
  }, b, E, {
    breakAll: c
  }), y);
}
Hr.displayName = "Label";
var o3 = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ m.createElement(Hr, wr({
    key: "label-implicit"
  }, n)) : dr(e) ? /* @__PURE__ */ m.createElement(Hr, wr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Ut(e) ? e.type === Hr ? /* @__PURE__ */ bi(e, Me({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ m.createElement(Hr, wr({
    key: "label-implicit",
    content: e
  }, n)) : tm(e) ? /* @__PURE__ */ m.createElement(Hr, wr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ m.createElement(Hr, wr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function i3(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = OC();
  return o3(t, n, r) || null;
}
var ed = {}, td = {}, _b;
function a3() {
  return _b || (_b = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(td)), td;
}
var rd = {}, kb;
function s3() {
  return kb || (kb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(rd)), rd;
}
var Nb;
function c3() {
  return Nb || (Nb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ a3(), r = /* @__PURE__ */ s3(), n = /* @__PURE__ */ jp();
    function o(i) {
      if (n.isArrayLike(i))
        return t.last(r.toArray(i));
    }
    e.last = o;
  })(ed)), ed;
}
var nd, Ib;
function l3() {
  return Ib || (Ib = 1, nd = c3().last), nd;
}
var u3 = /* @__PURE__ */ l3();
const d3 = /* @__PURE__ */ an(u3);
var f3 = ["valueAccessor"], p3 = ["dataKey", "clockWise", "id", "textBreakAll"];
function Is() {
  return Is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Is.apply(null, arguments);
}
function Rb(e, t) {
  if (e == null) return {};
  var r, n, o = h3(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function h3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var m3 = (e) => Array.isArray(e.value) ? d3(e.value) : e.value, CC = /* @__PURE__ */ Rt(void 0), rm = CC.Provider, TC = /* @__PURE__ */ Rt(void 0), v3 = TC.Provider;
function g3() {
  return Qt(CC);
}
function y3() {
  return Qt(TC);
}
function Wa(e) {
  var {
    valueAccessor: t = m3
  } = e, r = Rb(e, f3), {
    dataKey: n,
    clockWise: o,
    id: i,
    textBreakAll: a
  } = r, s = Rb(r, p3), c = g3(), u = y3(), l = c || u;
  return !l || !l.length ? null : /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-label-list"
  }, l.map((d, p) => {
    var h, v = Ae(n) ? t(d, p) : xe(d && d.payload, n), f = Ae(i) ? {} : {
      id: "".concat(i, "-").concat(p)
    };
    return /* @__PURE__ */ m.createElement(Hr, Is({
      key: "label-".concat(p)
      // eslint-disable-line react/no-array-index-key
    }, mt(d), s, f, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (h = r.fill) !== null && h !== void 0 ? h : d.fill,
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: a,
      viewBox: d.viewBox,
      index: p
    }));
  }));
}
Wa.displayName = "LabelList";
function il(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ m.createElement(Wa, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ m.isValidElement(t) || tm(t) ? /* @__PURE__ */ m.createElement(Wa, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ m.createElement(Wa, Is({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pf.apply(null, arguments);
}
var nm = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: o
  } = e, i = le("recharts-dot", o);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ m.createElement("circle", Pf({}, ht(e), Rp(e), {
    className: i,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, _C = (e) => e.graphicalItems.polarItems, b3 = C([ke, Ki], Ch), al = C([_C, Ne, b3], Th), w3 = C([al], _h), sl = C([w3, gh], kh), x3 = C([sl, Ne, al], Ih);
C([sl, Ne, al], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((o) => {
  var i, a = xe(n, (i = t.dataKey) !== null && i !== void 0 ? i : o.dataKey);
  return {
    value: a,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: xe(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var Mb = () => {
}, E3 = C([sl, Ne, al, Jc, ke], jh), S3 = C([Ne, Mh, Dh, Mb, E3, Mb, ce, ke], $h), kC = C([Ne, ce, sl, x3, Wi, ke, S3], Lh), P3 = C([kC, Ne, No], zh);
C([Ne, kC, P3, ke], Wh);
var O3 = {
  radiusAxis: {},
  angleAxis: {}
}, NC = Dt({
  name: "polarAxis",
  initialState: O3,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: QX,
  removeRadiusAxis: e7,
  addAngleAxis: t7,
  removeAngleAxis: r7
} = NC.actions, A3 = NC.reducer;
function Db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Db(Object(r), !0).forEach(function(n) {
      C3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Db(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C3(e, t, r) {
  return (t = T3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T3(e) {
  var t = _3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k3 = (e, t) => t, om = C([_C, k3], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), N3 = [], im = (e, t, r) => r?.length === 0 ? N3 : r, IC = C([gh, om, im], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var o;
    if (t?.data != null && t.data.length > 0 ? o = t.data : o = n, (!o || !o.length) && r != null && (o = r.map((i) => jb(jb({}, t.presentationProps), i.props))), o != null)
      return o;
  }
}), I3 = C([IC, om, im], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, o) => {
      var i, a = xe(n, t.nameKey, t.name), s;
      return r != null && (i = r[o]) !== null && i !== void 0 && (i = i.props) !== null && i !== void 0 && i.fill ? s = r[o].props.fill : typeof n == "object" && n != null && "fill" in n ? s = n.fill : s = t.fill, {
        value: sn(a, t.dataKey),
        color: s,
        payload: n,
        type: t.legendType
      };
    });
}), R3 = C([IC, om, im, Ke], (e, t, r, n) => {
  if (!(t == null || e == null))
    return M4({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), ka = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $b;
function M3() {
  if ($b) return ye;
  $b = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function v(f) {
    if (typeof f == "object" && f !== null) {
      var g = f.$$typeof;
      switch (g) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case c:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case s:
                case d:
                case l:
                  return f;
                case i:
                  return f;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return ye.ContextConsumer = i, ye.ContextProvider = a, ye.Element = e, ye.ForwardRef = s, ye.Fragment = r, ye.Lazy = d, ye.Memo = l, ye.Portal = t, ye.Profiler = o, ye.StrictMode = n, ye.Suspense = c, ye.SuspenseList = u, ye.isContextConsumer = function(f) {
    return v(f) === i;
  }, ye.isContextProvider = function(f) {
    return v(f) === a;
  }, ye.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ye.isForwardRef = function(f) {
    return v(f) === s;
  }, ye.isFragment = function(f) {
    return v(f) === r;
  }, ye.isLazy = function(f) {
    return v(f) === d;
  }, ye.isMemo = function(f) {
    return v(f) === l;
  }, ye.isPortal = function(f) {
    return v(f) === t;
  }, ye.isProfiler = function(f) {
    return v(f) === o;
  }, ye.isStrictMode = function(f) {
    return v(f) === n;
  }, ye.isSuspense = function(f) {
    return v(f) === c;
  }, ye.isSuspenseList = function(f) {
    return v(f) === u;
  }, ye.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === l || f.$$typeof === a || f.$$typeof === i || f.$$typeof === s || f.$$typeof === h || f.getModuleId !== void 0);
  }, ye.typeOf = v, ye;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function D3() {
  return Lb || (Lb = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var g = f.$$typeof;
        switch (g) {
          case t:
            switch (f = f.type, f) {
              case n:
              case i:
              case o:
              case u:
              case l:
              case h:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case s:
                  case c:
                  case p:
                  case d:
                    return f;
                  case a:
                    return f;
                  default:
                    return g;
                }
            }
          case r:
            return g;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    be.ContextConsumer = a, be.ContextProvider = s, be.Element = t, be.ForwardRef = c, be.Fragment = n, be.Lazy = p, be.Memo = d, be.Portal = r, be.Profiler = i, be.StrictMode = o, be.Suspense = u, be.SuspenseList = l, be.isContextConsumer = function(f) {
      return e(f) === a;
    }, be.isContextProvider = function(f) {
      return e(f) === s;
    }, be.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, be.isForwardRef = function(f) {
      return e(f) === c;
    }, be.isFragment = function(f) {
      return e(f) === n;
    }, be.isLazy = function(f) {
      return e(f) === p;
    }, be.isMemo = function(f) {
      return e(f) === d;
    }, be.isPortal = function(f) {
      return e(f) === r;
    }, be.isProfiler = function(f) {
      return e(f) === i;
    }, be.isStrictMode = function(f) {
      return e(f) === o;
    }, be.isSuspense = function(f) {
      return e(f) === u;
    }, be.isSuspenseList = function(f) {
      return e(f) === l;
    }, be.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === l || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === s || f.$$typeof === a || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
    }, be.typeOf = e;
  })()), be;
}
var Fb;
function j3() {
  return Fb || (Fb = 1, process.env.NODE_ENV === "production" ? ka.exports = /* @__PURE__ */ M3() : ka.exports = /* @__PURE__ */ D3()), ka.exports;
}
var $3 = /* @__PURE__ */ j3(), Bb = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", zb = null, od = null, RC = (e) => {
  if (e === zb && Array.isArray(od))
    return od;
  var t = [];
  return ZT.forEach(e, (r) => {
    Ae(r) || ($3.isFragment(r) ? t = t.concat(RC(r.props.children)) : t.push(r));
  }), od = t, zb = e, t;
};
function am(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((o) => Bb(o)) : n = [Bb(t)], RC(e).forEach((o) => {
    var i = In(o, "type.displayName") || In(o, "type.name");
    n.indexOf(i) !== -1 && r.push(o);
  }), r;
}
var cl = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, id = {}, Ub;
function L3() {
  return Ub || (Ub = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const o = r[Symbol.toStringTag];
        return o == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${o}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(id)), id;
}
var ad, Wb;
function F3() {
  return Wb || (Wb = 1, ad = L3().isPlainObject), ad;
}
var B3 = /* @__PURE__ */ F3();
const z3 = /* @__PURE__ */ an(B3);
function Kb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kb(Object(r), !0).forEach(function(n) {
      U3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U3(e, t, r) {
  return (t = W3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W3(e) {
  var t = K3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function K3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rs() {
  return Rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rs.apply(null, arguments);
}
var qb = (e, t, r, n, o) => {
  var i = r - n, a;
  return a = "M ".concat(e, ",").concat(t), a += "L ".concat(e + r, ",").concat(t), a += "L ".concat(e + r - i / 2, ",").concat(t + o), a += "L ".concat(e + r - i / 2 - n, ",").concat(t + o), a += "L ".concat(e, ",").concat(t, " Z"), a;
}, V3 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, q3 = (e) => {
  var t = Ve(e, V3), {
    x: r,
    y: n,
    upperWidth: o,
    lowerWidth: i,
    height: a,
    className: s
  } = t, {
    animationEasing: c,
    animationDuration: u,
    animationBegin: l,
    isUpdateAnimationActive: d
  } = t, p = me(null), [h, v] = We(-1), f = me(o), g = me(i), y = me(a), w = me(r), b = me(n), E = Po(e, "trapezoid-");
  if (Fe(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var N = p.current.getTotalLength();
        N && v(N);
      } catch {
      }
  }, []), r !== +r || n !== +n || o !== +o || i !== +i || a !== +a || o === 0 && i === 0 || a === 0)
    return null;
  var S = le("recharts-trapezoid", s);
  if (!d)
    return /* @__PURE__ */ m.createElement("g", null, /* @__PURE__ */ m.createElement("path", Rs({}, mt(t), {
      className: S,
      d: qb(r, n, o, i, a)
    })));
  var P = f.current, O = g.current, A = y.current, _ = w.current, I = b.current, T = "0px ".concat(h === -1 ? 1 : h, "px"), M = "".concat(h, "px 0px"), D = oA(["strokeDasharray"], u, c);
  return /* @__PURE__ */ m.createElement(So, {
    animationId: E,
    key: E,
    canBegin: h > 0,
    duration: u,
    easing: c,
    isActive: d,
    begin: l
  }, (N) => {
    var z = we(P, o, N), L = we(O, i, N), B = we(A, a, N), R = we(_, r, N), F = we(I, n, N);
    p.current && (f.current = z, g.current = L, y.current = B, w.current = R, b.current = F);
    var ee = N > 0 ? {
      transition: D,
      strokeDasharray: M
    } : {
      strokeDasharray: T
    };
    return /* @__PURE__ */ m.createElement("path", Rs({}, mt(t), {
      className: S,
      d: qb(R, F, z, L, B),
      ref: p,
      style: Vb(Vb({}, ee), t.style)
    }));
  });
}, H3 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function G3(e, t) {
  if (e == null) return {};
  var r, n, o = Y3(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Y3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Hb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hb(Object(r), !0).forEach(function(n) {
      X3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X3(e, t, r) {
  return (t = Z3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z3(e) {
  var t = J3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q3(e, t) {
  return Ms(Ms({}, t), e);
}
function e4(e, t) {
  return e === "symbols";
}
function Gb(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ m.createElement(cA, r);
    case "trapezoid":
      return /* @__PURE__ */ m.createElement(q3, r);
    case "sector":
      return /* @__PURE__ */ m.createElement(dA, r);
    case "symbols":
      if (e4(t))
        return /* @__PURE__ */ m.createElement(Ip, r);
      break;
    default:
      return null;
  }
}
function t4(e) {
  return /* @__PURE__ */ Ut(e) ? e.props : e;
}
function MC(e) {
  var {
    option: t,
    shapeType: r,
    propTransformer: n = Q3,
    activeClassName: o = "recharts-active-shape",
    isActive: i
  } = e, a = G3(e, H3), s;
  if (/* @__PURE__ */ Ut(t))
    s = /* @__PURE__ */ bi(t, Ms(Ms({}, a), t4(t)));
  else if (typeof t == "function")
    s = t(a);
  else if (z3(t) && typeof t != "boolean") {
    var c = n(t, a);
    s = /* @__PURE__ */ m.createElement(Gb, {
      shapeType: r,
      elementProps: c
    });
  } else {
    var u = a;
    s = /* @__PURE__ */ m.createElement(Gb, {
      shapeType: r,
      elementProps: u
    });
  }
  return i ? /* @__PURE__ */ m.createElement(Ie, {
    className: o
  }, s) : s;
}
var sm = (e, t) => {
  var r = _e();
  return (n, o) => (i) => {
    e?.(n, o, i), r(H1({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
}, cm = (e) => {
  var t = _e();
  return (r, n) => (o) => {
    e?.(r, n, o), t(WV());
  };
}, lm = (e, t) => {
  var r = _e();
  return (n, o) => (i) => {
    e?.(n, o, i), r(KV({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
};
function ll(e) {
  var {
    fn: t,
    args: r
  } = e, n = _e(), o = nt();
  return lr(() => {
    if (!o) {
      var i = t(r);
      return n(BV(i)), () => {
        n(zV(i));
      };
    }
  }, [t, r, n, o]), null;
}
var DC = () => {
};
function um(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = nt();
  return lr(() => n ? DC : (r(tA(t)), () => {
    r(rA(t));
  }), [r, n, t]), null;
}
function r4(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = Z(ce);
  return lr(() => n !== "centric" && n !== "radial" ? DC : (r(tA(t)), () => {
    r(rA(t));
  }), [r, n, t]), null;
}
var sd, n4 = () => {
  var [e] = m.useState(() => ai("uid-"));
  return e;
}, o4 = (sd = m.useId) !== null && sd !== void 0 ? sd : n4;
function i4(e, t) {
  var r = o4();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var a4 = /* @__PURE__ */ Rt(void 0), ul = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, o = i4("recharts-".concat(r), t);
  return /* @__PURE__ */ m.createElement(a4.Provider, {
    value: o
  }, n(o));
}, s4 = {
  cartesianItems: [],
  polarItems: []
}, jC = Dt({
  name: "graphicalItems",
  initialState: s4,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: ut()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, o = Pr(e).cartesianItems.indexOf(r);
        o > -1 && (e.cartesianItems[o] = n);
      },
      prepare: ut()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Pr(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: ut()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: ut()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = Pr(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  addCartesianGraphicalItem: c4,
  replaceCartesianGraphicalItem: l4,
  removeCartesianGraphicalItem: u4,
  addPolarGraphicalItem: d4,
  removePolarGraphicalItem: f4
} = jC.actions, p4 = jC.reducer;
function dm(e) {
  var t = _e(), r = me(null);
  return lr(() => {
    r.current === null ? t(c4(e)) : r.current !== e && t(l4({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), lr(() => () => {
    r.current && (t(u4(r.current)), r.current = null);
  }, [t]), null;
}
function h4(e) {
  var t = _e();
  return lr(() => (t(d4(e)), () => {
    t(f4(e));
  }), [t, e]), null;
}
var m4 = ["onMouseEnter", "onClick", "onMouseLeave"], v4 = ["id"], g4 = ["id"];
function fm(e, t) {
  if (e == null) return {};
  var r, n, o = y4(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function y4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Yb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yb(Object(r), !0).forEach(function(n) {
      b4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b4(e, t, r) {
  return (t = w4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w4(e) {
  var t = x4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, en.apply(null, arguments);
}
function E4(e) {
  var t = Dr(() => am(e.children, Zi), [e.children]), r = Z((n) => I3(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ m.createElement(r4, {
    legendPayload: r
  });
}
function S4(e) {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: o,
    strokeWidth: i,
    fill: a,
    name: s,
    hide: c,
    tooltipType: u
  } = e;
  return {
    dataDefinedOnItem: n.map((l) => l.tooltipPayload),
    positions: n.map((l) => l.tooltipPosition),
    settings: {
      stroke: o,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: r,
      name: sn(s, t),
      hide: c,
      type: u,
      color: a,
      unit: ""
      // why doesn't Pie support unit?
    }
  };
}
var P4 = (e, t) => e > t ? "start" : e < t ? "end" : "middle", O4 = (e, t, r) => st(typeof t == "function" ? t(e) : t, r, r * 0.8), A4 = (e, t, r) => {
  var {
    top: n,
    left: o,
    width: i,
    height: a
  } = t, s = UO(i, a), c = o + st(e.cx, i, i / 2), u = n + st(e.cy, a, a / 2), l = st(e.innerRadius, s, 0), d = O4(r, e.outerRadius, s), p = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: c,
    cy: u,
    innerRadius: l,
    outerRadius: d,
    maxRadius: p
  };
}, C4 = (e, t) => {
  var r = Xe(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function T4(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var _4 = (e, t) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = le("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
  return /* @__PURE__ */ m.createElement(ro, en({}, t, {
    type: "linear",
    className: r
  }));
}, k4 = (e, t, r) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ m.isValidElement(n)))
    return n;
  var o = le("recharts-pie-label-text", T4(e));
  return /* @__PURE__ */ m.createElement(ol, en({}, t, {
    alignmentBaseline: "middle",
    className: o
  }), n);
};
function N4(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: o,
    labelLine: i,
    dataKey: a
  } = r;
  if (!n || !o || !t)
    return null;
  var s = ht(r), c = Nn(o), u = Nn(i), l = typeof o == "object" && "offsetRadius" in o && typeof o.offsetRadius == "number" && o.offsetRadius || 20, d = t.map((p, h) => {
    var v = (p.startAngle + p.endAngle) / 2, f = $e(p.cx, p.cy, p.outerRadius + l, v), g = Ce(Ce(Ce(Ce({}, s), p), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, c), {}, {
      index: h,
      textAnchor: P4(f.x, p.cx)
    }, f), y = Ce(Ce(Ce(Ce({}, s), p), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: p.fill
    }, u), {}, {
      index: h,
      points: [$e(p.cx, p.cy, p.outerRadius, v), f],
      key: "line"
    });
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement(Ie, {
        key: "label-".concat(p.startAngle, "-").concat(p.endAngle, "-").concat(p.midAngle, "-").concat(h)
      }, i && _4(i, y), k4(o, g, xe(p, a)))
    );
  });
  return /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-pie-labels"
  }, d);
}
function I4(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: o
  } = r;
  return typeof o == "object" && o != null && "position" in o ? /* @__PURE__ */ m.createElement(il, {
    label: o
  }) : /* @__PURE__ */ m.createElement(N4, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function R4(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: o
  } = e, i = Z(Qr), {
    onMouseEnter: a,
    onClick: s,
    onMouseLeave: c
  } = o, u = fm(o, m4), l = sm(a, o.dataKey), d = cm(c), p = lm(s, o.dataKey);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((h, v) => {
    if (h?.startAngle === 0 && h?.endAngle === 0 && t.length !== 1) return null;
    var f = r && String(v) === i, g = i ? n : null, y = f ? r : g, w = Ce(Ce({}, h), {}, {
      stroke: h.stroke,
      tabIndex: -1,
      [GO]: v,
      [YO]: o.dataKey
    });
    return /* @__PURE__ */ m.createElement(
      Ie,
      en({
        key: "sector-".concat(h?.startAngle, "-").concat(h?.endAngle, "-").concat(h.midAngle, "-").concat(v),
        tabIndex: -1,
        className: "recharts-pie-sector"
      }, Ni(u, h, v), {
        // @ts-expect-error the types need a bit of attention
        onMouseEnter: l(h, v),
        onMouseLeave: d(h, v),
        onClick: p(h, v)
      }),
      /* @__PURE__ */ m.createElement(MC, en({
        option: y,
        isActive: f,
        shapeType: "sector"
      }, w))
    );
  }));
}
function M4(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: o,
    offset: i
  } = e, {
    cornerRadius: a,
    startAngle: s,
    endAngle: c,
    dataKey: u,
    nameKey: l,
    tooltipType: d
  } = r, p = Math.abs(r.minAngle), h = C4(s, c), v = Math.abs(h), f = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, g = n.filter((P) => xe(P, u, 0) !== 0).length, y = (v >= 360 ? g : g - 1) * f, w = v - g * p - y, b = n.reduce((P, O) => {
    var A = xe(O, u, 0);
    return P + (X(A) ? A : 0);
  }, 0), E;
  if (b > 0) {
    var S;
    E = n.map((P, O) => {
      var A = xe(P, u, 0), _ = xe(P, l, O), I = A4(r, i, P), T = (X(A) ? A : 0) / b, M, D = Ce(Ce({}, P), o && o[O] && o[O].props);
      O ? M = S.endAngle + Xe(h) * f * (A !== 0 ? 1 : 0) : M = s;
      var N = M + Xe(h) * ((A !== 0 ? p : 0) + T * w), z = (M + N) / 2, L = (I.innerRadius + I.outerRadius) / 2, B = [{
        name: _,
        value: A,
        payload: D,
        dataKey: u,
        type: d
      }], R = $e(I.cx, I.cy, L, z);
      return S = Ce(Ce(Ce(Ce({}, r.presentationProps), {}, {
        percent: T,
        cornerRadius: a,
        name: _,
        tooltipPayload: B,
        midAngle: z,
        middleRadius: L,
        tooltipPosition: R
      }, D), I), {}, {
        value: A,
        startAngle: M,
        endAngle: N,
        payload: D,
        paddingAngle: Xe(h) * f
      }), S;
    });
  }
  return E;
}
function D4(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, o = Dr(() => !t || !r ? [] : r.map((i) => ({
    value: i.value,
    payload: i.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: i.cx,
      cy: i.cy,
      innerRadius: i.innerRadius,
      outerRadius: i.outerRadius,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockWise: !1
    },
    fill: i.fill
  })), [r, t]);
  return /* @__PURE__ */ m.createElement(v3, {
    value: t ? o : void 0
  }, n);
}
function j4(e) {
  var {
    props: t,
    previousSectorsRef: r
  } = e, {
    sectors: n,
    isAnimationActive: o,
    animationBegin: i,
    animationDuration: a,
    animationEasing: s,
    activeShape: c,
    inactiveShape: u,
    onAnimationStart: l,
    onAnimationEnd: d
  } = t, p = Po(t, "recharts-pie-"), h = r.current, [v, f] = We(!1), g = ve(() => {
    typeof d == "function" && d(), f(!1);
  }, [d]), y = ve(() => {
    typeof l == "function" && l(), f(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(D4, {
    showLabels: !v,
    sectors: n
  }, /* @__PURE__ */ m.createElement(So, {
    animationId: p,
    begin: i,
    duration: a,
    isActive: o,
    easing: s,
    onAnimationStart: y,
    onAnimationEnd: g,
    key: p
  }, (w) => {
    var b = [], E = n && n[0], S = E?.startAngle;
    return n?.forEach((P, O) => {
      var A = h && h[O], _ = O > 0 ? In(P, "paddingAngle", 0) : 0;
      if (A) {
        var I = we(A.endAngle - A.startAngle, P.endAngle - P.startAngle, w), T = Ce(Ce({}, P), {}, {
          startAngle: S + _,
          endAngle: S + I + _
        });
        b.push(T), S = T.endAngle;
      } else {
        var {
          endAngle: M,
          startAngle: D
        } = P, N = we(0, M - D, w), z = Ce(Ce({}, P), {}, {
          startAngle: S + _,
          endAngle: S + N + _
        });
        b.push(z), S = z.endAngle;
      }
    }), r.current = b, /* @__PURE__ */ m.createElement(Ie, null, /* @__PURE__ */ m.createElement(R4, {
      sectors: b,
      activeShape: c,
      inactiveShape: u,
      allOtherPieProps: t
    }));
  }), /* @__PURE__ */ m.createElement(I4, {
    showLabels: !v,
    sectors: n,
    props: t
  }), t.children);
}
var $4 = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: !Lr.isSsr,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff"
};
function L4(e) {
  var {
    id: t
  } = e, r = fm(e, v4), {
    hide: n,
    className: o,
    rootTabIndex: i
  } = e, a = Dr(() => am(e.children, Zi), [e.children]), s = Z((l) => R3(l, t, a)), c = me(null), u = le("recharts-pie", o);
  return n || s == null ? (c.current = null, /* @__PURE__ */ m.createElement(Ie, {
    tabIndex: i,
    className: u
  })) : /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ll, {
    fn: S4,
    args: Ce(Ce({}, e), {}, {
      sectors: s
    })
  }), /* @__PURE__ */ m.createElement(Ie, {
    tabIndex: i,
    className: u
  }, /* @__PURE__ */ m.createElement(j4, {
    props: Ce(Ce({}, r), {}, {
      sectors: s
    }),
    previousSectorsRef: c
  })));
}
function $C(e) {
  var t = Ve(e, $4), {
    id: r
  } = t, n = fm(t, g4), o = ht(n);
  return /* @__PURE__ */ m.createElement(ul, {
    id: r,
    type: "pie"
  }, (i) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(h4, {
    type: "pie",
    id: i,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: o,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ m.createElement(E4, en({}, n, {
    id: i
  })), /* @__PURE__ */ m.createElement(L4, en({}, n, {
    id: i
  }))));
}
$C.displayName = "Pie";
function Xb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xb(Object(r), !0).forEach(function(n) {
      F4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F4(e, t, r) {
  return (t = B4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B4(e) {
  var t = z4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var U4 = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, LC = Dt({
  name: "cartesianAxis",
  initialState: U4,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: ut()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: ut()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: ut()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: ut()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: ut()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: ut()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, o = e.yAxis[r];
      if (o) {
        var i = o.widthHistory || [];
        if (i.length === 3 && i[0] === i[2] && n === i[1] && n !== o.width && Math.abs(n - i[0]) <= 1)
          return;
        var a = [...i, n].slice(-3);
        e.yAxis[r] = Zb(Zb({}, e.yAxis[r]), {}, {
          width: n,
          widthHistory: a
        });
      }
    }
  }
}), {
  addXAxis: W4,
  removeXAxis: K4,
  addYAxis: V4,
  removeYAxis: q4,
  addZAxis: n7,
  removeZAxis: o7,
  updateYAxisWidth: H4
} = LC.actions, G4 = LC.reducer, Y4 = C([Ke], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), X4 = C([Y4, jr, $r], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), dl = () => Z(X4), Z4 = () => Z(k5);
function Jb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jb(Object(r), !0).forEach(function(n) {
      J4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J4(e, t, r) {
  return (t = Q4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q4(e) {
  var t = eH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tH = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: o,
    dataKey: i
  } = e;
  if (o === !1 || t.x == null || t.y == null)
    return null;
  var a = Qb(Qb({
    index: r,
    dataKey: i,
    // @ts-expect-error activeDot is contributing unknown props
    cx: t.x,
    // @ts-expect-error activeDot is contributing unknown props
    cy: t.y,
    // @ts-expect-error activeDot is contributing unknown props
    r: 4,
    // @ts-expect-error activeDot is contributing unknown props
    fill: n ?? "none",
    // @ts-expect-error activeDot is contributing unknown props
    strokeWidth: 2,
    // @ts-expect-error activeDot is contributing unknown props
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, Nn(o)), Rp(o)), s;
  return /* @__PURE__ */ Ut(o) ? s = /* @__PURE__ */ bi(o, a) : typeof o == "function" ? s = o(a) : s = /* @__PURE__ */ m.createElement(nm, a), /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-active-dot"
  }, s);
};
function Of(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: o
  } = e, i = Z(Qr), a = Z4();
  if (t == null || a == null)
    return null;
  var s = t.find((c) => a.includes(c.payload));
  return Ae(s) ? null : tH({
    point: s,
    childIndex: Number(i),
    mainColor: r,
    dataKey: o,
    activeDot: n
  });
}
var rH = process.env.NODE_ENV === "production", cd = "Invariant failed";
function ew(e, t) {
  if (rH)
    throw new Error(cd);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(cd, ": ").concat(r) : cd;
  throw new Error(n);
}
var nH = ["x", "y"];
function Af() {
  return Af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Af.apply(null, arguments);
}
function tw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tw(Object(r), !0).forEach(function(n) {
      oH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oH(e, t, r) {
  return (t = iH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iH(e) {
  var t = aH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sH(e, t) {
  if (e == null) return {};
  var r, n, o = cH(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function cH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function lH(e, t) {
  var {
    x: r,
    y: n
  } = e, o = sH(e, nH), i = "".concat(r), a = parseInt(i, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || o.height), l = parseInt(u, 10), d = "".concat(t.width || o.width), p = parseInt(d, 10);
  return Vo(Vo(Vo(Vo(Vo({}, t), o), a ? {
    x: a
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: l,
    width: p,
    name: t.name,
    radius: t.radius
  });
}
function pm(e) {
  return /* @__PURE__ */ m.createElement(MC, Af({
    shapeType: "rectangle",
    propTransformer: lH,
    activeClassName: "recharts-active-bar"
  }, e));
}
var uH = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, o) => {
    if (X(t)) return t;
    var i = X(n) || Ae(n);
    return i ? t(n, o) : (i || (process.env.NODE_ENV !== "production" ? ew(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")) : ew()), r);
  };
}, dH = {}, FC = Dt({
  name: "errorBars",
  initialState: dH,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: o
      } = t.payload;
      e[r] && (e[r] = e[r].map((i) => i.dataKey === n.dataKey && i.direction === n.direction ? o : i));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((o) => o.dataKey !== n.dataKey || o.direction !== n.direction));
    }
  }
}), {
  addErrorBar: i7,
  replaceErrorBar: a7,
  removeErrorBar: s7
} = FC.actions, fH = FC.reducer, pH = ["children"];
function hH(e, t) {
  if (e == null) return {};
  var r, n, o = mH(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function mH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var vH = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, gH = /* @__PURE__ */ Rt(vH);
function BC(e) {
  var {
    children: t
  } = e, r = hH(e, pH);
  return /* @__PURE__ */ m.createElement(gH.Provider, {
    value: r
  }, t);
}
function fl(e, t) {
  var r, n, o = Z((u) => Br(u, e)), i = Z((u) => zr(u, t)), a = (r = o?.allowDataOverflow) !== null && r !== void 0 ? r : Et.allowDataOverflow, s = (n = i?.allowDataOverflow) !== null && n !== void 0 ? n : St.allowDataOverflow, c = a || s;
  return {
    needClip: c,
    needClipX: a,
    needClipY: s
  };
}
function hm(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, o = dl(), {
    needClipX: i,
    needClipY: a,
    needClip: s
  } = fl(t, r);
  if (!s)
    return null;
  var {
    x: c,
    y: u,
    width: l,
    height: d
  } = o;
  return /* @__PURE__ */ m.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ m.createElement("rect", {
    x: i ? c : c - l / 2,
    y: a ? u : u - d / 2,
    width: i ? l : l * 2,
    height: a ? d : d * 2
  }));
}
var yH = ["onMouseEnter", "onMouseLeave", "onClick"], bH = ["value", "background", "tooltipPosition"], wH = ["id"], xH = ["onMouseEnter", "onClick", "onMouseLeave"];
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tn.apply(null, arguments);
}
function rw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rw(Object(r), !0).forEach(function(n) {
      EH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EH(e, t, r) {
  return (t = SH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SH(e) {
  var t = PH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ds(e, t) {
  if (e == null) return {};
  var r, n, o = OH(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function OH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var AH = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: o,
    hide: i
  } = e;
  return [{
    inactive: i,
    dataKey: t,
    type: o,
    color: n,
    value: sn(r, t),
    payload: e
  }];
};
function CH(e) {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: o,
    name: i,
    hide: a,
    unit: s
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: sn(i, t),
      hide: a,
      type: e.tooltipType,
      color: e.fill,
      unit: s
    }
  };
}
function TH(e) {
  var t = Z(Qr), {
    data: r,
    dataKey: n,
    background: o,
    allOtherBarProps: i
  } = e, {
    onMouseEnter: a,
    onMouseLeave: s,
    onClick: c
  } = i, u = Ds(i, yH), l = sm(a, n), d = cm(s), p = lm(c, n);
  if (!o || r == null)
    return null;
  var h = Nn(o);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, r.map((v, f) => {
    var {
      value: g,
      background: y,
      tooltipPosition: w
    } = v, b = Ds(v, bH);
    if (!y)
      return null;
    var E = l(v, f), S = d(v, f), P = p(v, f), O = dt(dt(dt(dt(dt({
      option: o,
      isActive: String(f) === t
    }, b), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), h), Ni(u, v, f)), {}, {
      onMouseEnter: E,
      onMouseLeave: S,
      onClick: P,
      dataKey: n,
      index: f,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ m.createElement(pm, tn({
      key: "background-bar-".concat(f)
    }, O));
  }));
}
function _H(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, o = n?.map((i) => {
    var a = {
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height
    };
    return dt(dt({}, a), {}, {
      value: i.value,
      payload: i.payload,
      parentViewBox: i.parentViewBox,
      viewBox: a,
      fill: i.fill
    });
  });
  return /* @__PURE__ */ m.createElement(rm, {
    value: t ? o : void 0
  }, r);
}
function kH(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: o,
    index: i,
    dataKey: a
  } = e, s = Z(Qr), c = Z(cC), u = r && String(i) === s && (c == null || a === c), l = u ? r : t;
  return /* @__PURE__ */ m.createElement(pm, tn({}, n, {
    name: String(n.name)
  }, o, {
    isActive: u,
    option: l,
    index: i,
    dataKey: a
  }));
}
function NH(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: o,
    dataKey: i
  } = e;
  return /* @__PURE__ */ m.createElement(pm, tn({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: o,
    dataKey: i
  }));
}
function IH(e) {
  var {
    data: t,
    props: r
  } = e, n = ht(r), {
    id: o
  } = n, i = Ds(n, wH), {
    shape: a,
    dataKey: s,
    activeBar: c
  } = r, {
    onMouseEnter: u,
    onClick: l,
    onMouseLeave: d
  } = r, p = Ds(r, xH), h = sm(u, s), v = cm(d), f = lm(l, s);
  return t ? /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((g, y) => /* @__PURE__ */ m.createElement(
    Ie,
    tn({
      key: "rectangle-".concat(g?.x, "-").concat(g?.y, "-").concat(g?.value, "-").concat(y),
      className: "recharts-bar-rectangle"
    }, Ni(p, g, y), {
      // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
      onMouseEnter: h(g, y),
      onMouseLeave: v(g, y),
      onClick: f(g, y)
    }),
    c ? /* @__PURE__ */ m.createElement(kH, {
      shape: a,
      activeBar: c,
      baseProps: i,
      entry: g,
      index: y,
      dataKey: s
    }) : (
      /*
       * If the `activeBar` prop is falsy, then let's call the variant without hooks.
       * Using the `selectActiveTooltipIndex` selector is usually fast
       * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
       * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
       * So let's just skip the hooks altogether. That way, React can skip rendering the component,
       * and can skip the tree reconciliation for its children too.
       * Because we can't call hooks conditionally, we need to have a separate component for that.
       */
      /* @__PURE__ */ m.createElement(NH, {
        shape: a,
        baseProps: i,
        entry: g,
        index: y,
        dataKey: s
      })
    )
  ))) : null;
}
function RH(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: o,
    isAnimationActive: i,
    animationBegin: a,
    animationDuration: s,
    animationEasing: c,
    onAnimationEnd: u,
    onAnimationStart: l
  } = t, d = r.current, p = Po(t, "recharts-bar-"), [h, v] = We(!1), f = !h, g = ve(() => {
    typeof u == "function" && u(), v(!1);
  }, [u]), y = ve(() => {
    typeof l == "function" && l(), v(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(_H, {
    showLabels: f,
    rects: n
  }, /* @__PURE__ */ m.createElement(So, {
    animationId: p,
    begin: a,
    duration: s,
    isActive: i,
    easing: c,
    onAnimationEnd: g,
    onAnimationStart: y,
    key: p
  }, (w) => {
    var b = w === 1 ? n : n?.map((E, S) => {
      var P = d && d[S];
      if (P)
        return dt(dt({}, E), {}, {
          x: we(P.x, E.x, w),
          y: we(P.y, E.y, w),
          width: we(P.width, E.width, w),
          height: we(P.height, E.height, w)
        });
      if (o === "horizontal") {
        var O = we(0, E.height, w);
        return dt(dt({}, E), {}, {
          y: E.y + E.height - O,
          height: O
        });
      }
      var A = we(0, E.width, w);
      return dt(dt({}, E), {}, {
        width: A
      });
    });
    return w > 0 && (r.current = b ?? null), b == null ? null : /* @__PURE__ */ m.createElement(Ie, null, /* @__PURE__ */ m.createElement(IH, {
      props: t,
      data: b
    }));
  }), /* @__PURE__ */ m.createElement(il, {
    label: t.label
  }), t.children);
}
function MH(e) {
  var t = me(null);
  return /* @__PURE__ */ m.createElement(RH, {
    previousRectanglesRef: t,
    props: e
  });
}
var zC = 0, DH = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: xe(e, t)
  };
};
class jH extends yi {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: o,
      xAxisId: i,
      yAxisId: a,
      needClip: s,
      background: c,
      id: u
    } = this.props;
    if (t || r == null)
      return null;
    var l = le("recharts-bar", o), d = u;
    return /* @__PURE__ */ m.createElement(Ie, {
      className: l,
      id: u
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: d,
      xAxisId: i,
      yAxisId: a
    })), /* @__PURE__ */ m.createElement(Ie, {
      className: "recharts-bar-rectangles",
      clipPath: s ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ m.createElement(TH, {
      data: r,
      dataKey: n,
      background: c,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ m.createElement(MH, this.props)));
  }
}
var $H = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  hide: !1,
  isAnimationActive: !Lr.isSsr,
  legendType: "rect",
  minPointSize: zC,
  xAxisId: 0,
  yAxisId: 0
};
function LH(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: o,
    minPointSize: i,
    activeBar: a,
    animationBegin: s,
    animationDuration: c,
    animationEasing: u,
    isAnimationActive: l
  } = e, {
    needClip: d
  } = fl(t, r), p = $i(), h = nt(), v = am(e.children, Zi), f = Z((w) => fG(w, t, r, h, e.id, v));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var g, y = f?.[0];
  return y == null || y.height == null || y.width == null ? g = 0 : g = p === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ m.createElement(BC, {
    xAxisId: t,
    yAxisId: r,
    data: f,
    dataPointFormatter: DH,
    errorBarOffset: g
  }, /* @__PURE__ */ m.createElement(jH, tn({}, e, {
    layout: p,
    needClip: d,
    data: f,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: o,
    minPointSize: i,
    activeBar: a,
    animationBegin: s,
    animationDuration: c,
    animationEasing: u,
    isAnimationActive: l
  })));
}
function FH(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n
    },
    pos: o,
    bandSize: i,
    xAxis: a,
    yAxis: s,
    xAxisTicks: c,
    yAxisTicks: u,
    stackedData: l,
    displayedData: d,
    offset: p,
    cells: h,
    parentViewBox: v
  } = e, f = t === "horizontal" ? s : a, g = l ? f.scale.domain() : null, y = jF({
    numericAxis: f
  });
  return d.map((w, b) => {
    var E, S, P, O, A, _;
    l ? E = NF(l[b], g) : (E = xe(w, r), Array.isArray(E) || (E = [y, E]));
    var I = uH(n, zC)(E[1], b);
    if (t === "horizontal") {
      var T, [M, D] = [s.scale(E[0]), s.scale(E[1])];
      S = Rg({
        axis: a,
        ticks: c,
        bandSize: i,
        offset: o.offset,
        entry: w,
        index: b
      }), P = (T = D ?? M) !== null && T !== void 0 ? T : void 0, O = o.size;
      var N = M - D;
      if (A = Nt(N) ? 0 : N, _ = {
        x: S,
        y: p.top,
        width: O,
        height: p.height
      }, Math.abs(I) > 0 && Math.abs(A) < Math.abs(I)) {
        var z = Xe(A || I) * (Math.abs(I) - Math.abs(A));
        P -= z, A += z;
      }
    } else {
      var [L, B] = [a.scale(E[0]), a.scale(E[1])];
      if (S = L, P = Rg({
        axis: s,
        ticks: u,
        bandSize: i,
        offset: o.offset,
        entry: w,
        index: b
      }), O = B - L, A = o.size, _ = {
        x: p.left,
        y: P,
        width: p.width,
        height: A
      }, Math.abs(I) > 0 && Math.abs(O) < Math.abs(I)) {
        var R = Xe(O || I) * (Math.abs(I) - Math.abs(O));
        O += R;
      }
    }
    if (S == null || P == null || O == null || A == null)
      return null;
    var F = dt(dt({}, w), {}, {
      x: S,
      y: P,
      width: O,
      height: A,
      value: l ? E : E[1],
      payload: w,
      background: _,
      tooltipPosition: {
        x: S + O / 2,
        y: P + A / 2
      },
      parentViewBox: v
    }, h && h[b] && h[b].props);
    return F;
  }).filter(Boolean);
}
function BH(e) {
  var t = Ve(e, $H), r = nt();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "bar"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: AH(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: CH,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "bar",
    id: n,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: qO(t.stackId),
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(LH, tn({}, t, {
    id: n
  }))));
}
var UC = /* @__PURE__ */ m.memo(BH);
UC.displayName = "Bar";
function nw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nw(Object(r), !0).forEach(function(n) {
      zH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zH(e, t, r) {
  return (t = UH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UH(e) {
  var t = WH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KH = (e, t) => t, VH = (e, t, r) => r, qH = (e, t, r, n) => n, HH = (e, t, r, n, o) => o, Ji = C([qi, HH], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), GH = C([Ji], (e) => e?.maxBarSize), YH = (e, t, r, n, o, i) => i, ow = (e, t, r) => {
  var n = r ?? e;
  if (!Ae(n))
    return st(n, t, 0);
}, XH = C([ce, qi, KH, VH, qH], (e, t, r, n, o) => t.filter((i) => e === "horizontal" ? i.xAxisId === r : i.yAxisId === n).filter((i) => i.isPanorama === o).filter((i) => i.hide === !1).filter((i) => i.type === "bar")), ZH = (e, t, r, n) => {
  var o = ce(e);
  return o === "horizontal" ? vi(e, "yAxis", r, n) : vi(e, "xAxis", t, n);
}, JH = (e, t, r) => {
  var n = ce(e);
  return n === "horizontal" ? nb(e, "xAxis", t) : nb(e, "yAxis", r);
}, QH = (e, t, r) => {
  var n = {}, o = e.filter(Gc), i = e.filter((u) => u.stackId == null), a = o.reduce((u, l) => (u[l.stackId] || (u[l.stackId] = []), u[l.stackId].push(l), u), n), s = Object.entries(a).map((u) => {
    var [l, d] = u, p = d.map((v) => v.dataKey), h = ow(t, r, d[0].barSize);
    return {
      stackId: l,
      dataKeys: p,
      barSize: h
    };
  }), c = i.map((u) => {
    var l = [u.dataKey].filter((p) => p != null), d = ow(t, r, u.barSize);
    return {
      stackId: void 0,
      dataKeys: l,
      barSize: d
    };
  });
  return [...s, ...c];
}, eG = C([XH, jK, JH], QH), tG = (e, t, r, n, o) => {
  var i, a, s = Ji(e, t, r, n, o);
  if (s != null) {
    var c = ce(e), u = c1(e), {
      maxBarSize: l
    } = s, d = Ae(l) ? u : l, p, h;
    return c === "horizontal" ? (p = hr(e, "xAxis", t, n), h = pr(e, "xAxis", t, n)) : (p = hr(e, "yAxis", r, n), h = pr(e, "yAxis", r, n)), (i = (a = Dn(p, h, !0)) !== null && a !== void 0 ? a : d) !== null && i !== void 0 ? i : 0;
  }
}, WC = (e, t, r, n) => {
  var o = ce(e), i, a;
  return o === "horizontal" ? (i = hr(e, "xAxis", t, n), a = pr(e, "xAxis", t, n)) : (i = hr(e, "yAxis", r, n), a = pr(e, "yAxis", r, n)), Dn(i, a);
};
function rG(e, t, r, n, o) {
  var i = n.length;
  if (!(i < 1)) {
    var a = st(e, r, 0, !0), s, c = [];
    if (Be(n[0].barSize)) {
      var u = !1, l = r / i, d = n.reduce((y, w) => y + (w.barSize || 0), 0);
      d += (i - 1) * a, d >= r && (d -= (i - 1) * a, a = 0), d >= r && l > 0 && (u = !0, l *= 0.9, d = i * l);
      var p = (r - d) / 2 >> 0, h = {
        offset: p - a,
        size: 0
      };
      s = n.reduce((y, w) => {
        var b, E = {
          stackId: w.stackId,
          dataKeys: w.dataKeys,
          position: {
            offset: h.offset + h.size + a,
            size: u ? l : (b = w.barSize) !== null && b !== void 0 ? b : 0
          }
        }, S = [...y, E];
        return h = S[S.length - 1].position, S;
      }, c);
    } else {
      var v = st(t, r, 0, !0);
      r - 2 * v - (i - 1) * a <= 0 && (a = 0);
      var f = (r - 2 * v - (i - 1) * a) / i;
      f > 1 && (f >>= 0);
      var g = Be(o) ? Math.min(f, o) : f;
      s = n.reduce((y, w, b) => [...y, {
        stackId: w.stackId,
        dataKeys: w.dataKeys,
        position: {
          offset: v + (f + a) * b + (f - g) / 2,
          size: g
        }
      }], c);
    }
    return s;
  }
}
var nG = (e, t, r, n, o, i, a) => {
  var s = Ae(a) ? t : a, c = rG(r, n, o !== i ? o : i, e, s);
  return o !== i && c != null && (c = c.map((u) => Na(Na({}, u), {}, {
    position: Na(Na({}, u.position), {}, {
      offset: u.position.offset - o / 2
    })
  }))), c;
}, oG = C([eG, c1, DK, l1, tG, WC, GH], nG), iG = (e, t, r, n) => hr(e, "xAxis", t, n), aG = (e, t, r, n) => hr(e, "yAxis", r, n), sG = (e, t, r, n) => pr(e, "xAxis", t, n), cG = (e, t, r, n) => pr(e, "yAxis", r, n), lG = C([oG, Ji], (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
}), uG = (e, t) => {
  var r = Hc(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var o = e[n];
      if (o) {
        var {
          stackedData: i
        } = o;
        if (i)
          return i.find((a) => a.key === r);
      }
    }
  }
}, dG = C([ZH, Ji], uG), fG = C([Ke, Wp, iG, aG, sG, cG, lG, ce, Ui, WC, dG, Ji, YH], (e, t, r, n, o, i, a, s, c, u, l, d, p) => {
  var {
    chartData: h,
    dataStartIndex: v,
    dataEndIndex: f
  } = c;
  if (!(d == null || a == null || t == null || s !== "horizontal" && s !== "vertical" || r == null || n == null || o == null || i == null || u == null)) {
    var {
      data: g
    } = d, y;
    if (g != null && g.length > 0 ? y = g : y = h?.slice(v, f + 1), y != null)
      return FH({
        layout: s,
        barSettings: d,
        pos: a,
        parentViewBox: t,
        bandSize: u,
        xAxis: r,
        yAxis: n,
        xAxisTicks: o,
        yAxisTicks: i,
        stackedData: l,
        displayedData: y,
        offset: e,
        cells: p
      });
  }
}), KC = (e) => {
  var {
    chartData: t
  } = e, r = _e(), n = nt();
  return Fe(() => n ? () => {
  } : (r(pb(t)), () => {
    r(pb(void 0));
  }), [t, r, n]), null;
}, iw = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, VC = Dt({
  name: "brush",
  initialState: iw,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? iw : t.payload;
    }
  }
}), {
  setBrushSettings: c7
} = VC.actions, pG = VC.reducer;
function hG(e, t, r) {
  return (t = mG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mG(e) {
  var t = vG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class mm {
  static create(t) {
    return new mm(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var {
      bandAware: r,
      position: n
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (n)
        switch (n) {
          case "start":
            return this.scale(t);
          case "middle": {
            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(t) + o;
          }
          case "end": {
            var i = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + i;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var a = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + a;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(), n = r[0], o = r[r.length - 1];
    return n <= o ? t >= n && t <= o : t >= o && t <= n;
  }
}
hG(mm, "EPS", 1e-4);
function gG(e) {
  return (e % 180 + 180) % 180;
}
var yG = function(t) {
  var {
    width: r,
    height: n
  } = t, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = gG(o), a = i * Math.PI / 180, s = Math.atan(n / r), c = a > s && a < Math.PI - s ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(c);
}, bG = {
  dots: [],
  areas: [],
  lines: []
}, qC = Dt({
  name: "referenceElements",
  initialState: bG,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Pr(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Pr(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Pr(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: l7,
  removeDot: u7,
  addArea: d7,
  removeArea: f7,
  addLine: p7,
  removeLine: h7
} = qC.actions, wG = qC.reducer, xG = /* @__PURE__ */ Rt(void 0), EG = (e) => {
  var {
    children: t
  } = e, [r] = We("".concat(ai("recharts"), "-clip")), n = dl();
  if (n == null)
    return null;
  var {
    x: o,
    y: i,
    width: a,
    height: s
  } = n;
  return /* @__PURE__ */ m.createElement(xG.Provider, {
    value: r
  }, /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ m.createElement("rect", {
    x: o,
    y: i,
    height: s,
    width: a
  }))), t);
};
function po(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function HC(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], o = 0; o < e.length; o += t)
    n.push(e[o]);
  return n;
}
function SG(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return yG(n, r);
}
function PG(e, t, r) {
  var n = r === "width", {
    x: o,
    y: i,
    width: a,
    height: s
  } = e;
  return t === 1 ? {
    start: n ? o : i,
    end: n ? o + a : i + s
  } : {
    start: n ? o + a : i + s,
    end: n ? o : i
  };
}
function js(e, t, r, n, o) {
  if (e * t < e * n || e * t > e * o)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - o) <= 0;
}
function OG(e, t) {
  return HC(e, t + 1);
}
function AG(e, t, r, n, o) {
  for (var i = (n || []).slice(), {
    start: a,
    end: s
  } = t, c = 0, u = 1, l = a, d = function() {
    var v = n?.[c];
    if (v === void 0)
      return {
        v: HC(n, u)
      };
    var f = c, g, y = () => (g === void 0 && (g = r(v, f)), g), w = v.coordinate, b = c === 0 || js(e, w, y, l, s);
    b || (c = 0, l = a, u += 1), b && (l = w + e * (y() / 2 + o), c += u);
  }, p; u <= i.length; )
    if (p = d(), p) return p.v;
  return [];
}
function aw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aw(Object(r), !0).forEach(function(n) {
      CG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CG(e, t, r) {
  return (t = TG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TG(e) {
  var t = _G(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _G(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kG(e, t, r, n, o) {
  for (var i = (n || []).slice(), a = i.length, {
    start: s
  } = t, {
    end: c
  } = t, u = function(p) {
    var h = i[p], v, f = () => (v === void 0 && (v = r(h, p)), v);
    if (p === a - 1) {
      var g = e * (h.coordinate + e * f() / 2 - c);
      i[p] = h = ot(ot({}, h), {}, {
        tickCoord: g > 0 ? h.coordinate - g * e : h.coordinate
      });
    } else
      i[p] = h = ot(ot({}, h), {}, {
        tickCoord: h.coordinate
      });
    var y = js(e, h.tickCoord, f, s, c);
    y && (c = h.tickCoord - e * (f() / 2 + o), i[p] = ot(ot({}, h), {}, {
      isShow: !0
    }));
  }, l = a - 1; l >= 0; l--)
    u(l);
  return i;
}
function NG(e, t, r, n, o, i) {
  var a = (n || []).slice(), s = a.length, {
    start: c,
    end: u
  } = t;
  if (i) {
    var l = n[s - 1], d = r(l, s - 1), p = e * (l.coordinate + e * d / 2 - u);
    a[s - 1] = l = ot(ot({}, l), {}, {
      tickCoord: p > 0 ? l.coordinate - p * e : l.coordinate
    });
    var h = js(e, l.tickCoord, () => d, c, u);
    h && (u = l.tickCoord - e * (d / 2 + o), a[s - 1] = ot(ot({}, l), {}, {
      isShow: !0
    }));
  }
  for (var v = i ? s - 1 : s, f = function(w) {
    var b = a[w], E, S = () => (E === void 0 && (E = r(b, w)), E);
    if (w === 0) {
      var P = e * (b.coordinate - e * S() / 2 - c);
      a[w] = b = ot(ot({}, b), {}, {
        tickCoord: P < 0 ? b.coordinate - P * e : b.coordinate
      });
    } else
      a[w] = b = ot(ot({}, b), {}, {
        tickCoord: b.coordinate
      });
    var O = js(e, b.tickCoord, S, c, u);
    O && (c = b.tickCoord + e * (S() / 2 + o), a[w] = ot(ot({}, b), {}, {
      isShow: !0
    }));
  }, g = 0; g < v; g++)
    f(g);
  return a;
}
function vm(e, t, r) {
  var {
    tick: n,
    ticks: o,
    viewBox: i,
    minTickGap: a,
    orientation: s,
    interval: c,
    tickFormatter: u,
    unit: l,
    angle: d
  } = e;
  if (!o || !o.length || !n)
    return [];
  if (X(c) || Lr.isSsr) {
    var p;
    return (p = OG(o, X(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], v = s === "top" || s === "bottom" ? "width" : "height", f = l && v === "width" ? Qo(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, g = (b, E) => {
    var S = typeof u == "function" ? u(b.value, E) : b.value;
    return v === "width" ? SG(Qo(S, {
      fontSize: t,
      letterSpacing: r
    }), f, d) : Qo(S, {
      fontSize: t,
      letterSpacing: r
    })[v];
  }, y = o.length >= 2 ? Xe(o[1].coordinate - o[0].coordinate) : 1, w = PG(i, y, v);
  return c === "equidistantPreserveStart" ? AG(y, w, g, o, a) : (c === "preserveStart" || c === "preserveStartEnd" ? h = NG(y, w, g, o, a, c === "preserveStartEnd") : h = kG(y, w, g, o, a), h.filter((b) => b.isShow));
}
var IG = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: o = 0,
    tickMargin: i = 0
  } = e, a = 0;
  if (t) {
    Array.from(t).forEach((l) => {
      if (l) {
        var d = l.getBoundingClientRect();
        d.width > a && (a = d.width);
      }
    });
    var s = r ? r.getBoundingClientRect().width : 0, c = o + i, u = a + c + s + (r ? n : 0);
    return Math.round(u);
  }
  return 0;
}, RG = ["axisLine", "width", "height", "className", "hide", "ticks"], MG = ["viewBox"], DG = ["viewBox"];
function Cf(e, t) {
  if (e == null) return {};
  var r, n, o = jG(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function jG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ln.apply(null, arguments);
}
function sw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sw(Object(r), !0).forEach(function(n) {
      $G(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $G(e, t, r) {
  return (t = LG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LG(e) {
  var t = FG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gm = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
};
function BG(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: o,
    orientation: i,
    mirror: a,
    axisLine: s,
    otherSvgProps: c
  } = e;
  if (!s)
    return null;
  var u = Ue(Ue(Ue({}, c), ht(s)), {}, {
    fill: "none"
  });
  if (i === "top" || i === "bottom") {
    var l = +(i === "top" && !a || i === "bottom" && a);
    u = Ue(Ue({}, u), {}, {
      x1: t,
      y1: r + l * o,
      x2: t + n,
      y2: r + l * o
    });
  } else {
    var d = +(i === "left" && !a || i === "right" && a);
    u = Ue(Ue({}, u), {}, {
      x1: t + d * n,
      y1: r,
      x2: t + d * n,
      y2: r + o
    });
  }
  return /* @__PURE__ */ m.createElement("line", Ln({}, u, {
    className: le("recharts-cartesian-axis-line", In(s, "className"))
  }));
}
function zG(e, t, r, n, o, i, a, s, c) {
  var u, l, d, p, h, v, f = s ? -1 : 1, g = e.tickSize || a, y = X(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (i) {
    case "top":
      u = l = e.coordinate, p = r + +!s * o, d = p - f * g, v = d - f * c, h = y;
      break;
    case "left":
      d = p = e.coordinate, l = t + +!s * n, u = l - f * g, h = u - f * c, v = y;
      break;
    case "right":
      d = p = e.coordinate, l = t + +s * n, u = l + f * g, h = u + f * c, v = y;
      break;
    default:
      u = l = e.coordinate, p = r + +s * o, d = p + f * g, v = d + f * c, h = y;
      break;
  }
  return {
    line: {
      x1: u,
      y1: d,
      x2: l,
      y2: p
    },
    tick: {
      x: h,
      y: v
    }
  };
}
function UG(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function WG(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function KG(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, o, i = le(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ m.isValidElement(t))
    o = /* @__PURE__ */ m.cloneElement(t, Ue(Ue({}, r), {}, {
      className: i
    }));
  else if (typeof t == "function")
    o = t(Ue(Ue({}, r), {}, {
      className: i
    }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = le(a, t?.className)), o = /* @__PURE__ */ m.createElement(ol, Ln({}, r, {
      className: a
    }), n);
  }
  return o;
}
function VG(e) {
  var {
    ticks: t = [],
    tick: r,
    tickLine: n,
    stroke: o,
    tickFormatter: i,
    unit: a,
    padding: s,
    tickTextProps: c,
    orientation: u,
    mirror: l,
    x: d,
    y: p,
    width: h,
    height: v,
    tickSize: f,
    tickMargin: g,
    fontSize: y,
    letterSpacing: w,
    getTicksConfig: b,
    events: E
  } = e, S = vm(Ue(Ue({}, b), {}, {
    ticks: t
  }), y, w), P = UG(u, l), O = WG(u, l), A = ht(b), _ = Nn(r), I = {};
  typeof n == "object" && (I = n);
  var T = Ue(Ue({}, A), {}, {
    fill: "none"
  }, I), M = S.map((D, N) => {
    var {
      line: z,
      tick: L
    } = zG(D, d, p, h, v, u, f, l, g), B = Ue(Ue(Ue(Ue({
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor: P,
      verticalAnchor: O
    }, A), {}, {
      // @ts-expect-error customTickProps is contributing unknown props
      stroke: "none",
      // @ts-expect-error customTickProps is contributing unknown props
      fill: o
    }, _), L), {}, {
      index: N,
      payload: D,
      visibleTicksCount: S.length,
      tickFormatter: i,
      padding: s
    }, c);
    return /* @__PURE__ */ m.createElement(Ie, Ln({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(D.value, "-").concat(D.coordinate, "-").concat(D.tickCoord)
    }, Ni(E, D, N)), n && /* @__PURE__ */ m.createElement("line", Ln({}, T, z, {
      className: le("recharts-cartesian-axis-tick-line", In(n, "className"))
    })), r && /* @__PURE__ */ m.createElement(KG, {
      option: r,
      tickProps: B,
      value: "".concat(typeof i == "function" ? i(D.value, N) : D.value).concat(a || "")
    }));
  });
  return M.length > 0 ? /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, M) : null;
}
var qG = /* @__PURE__ */ De((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: o,
    className: i,
    hide: a,
    ticks: s
  } = e, c = Cf(e, RG), [u, l] = We(""), [d, p] = We(""), h = me(null);
  jw(t, () => ({
    getCalculatedWidth: () => {
      var f;
      return IG({
        ticks: h.current,
        label: (f = e.labelRef) === null || f === void 0 ? void 0 : f.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var v = ve((f) => {
    if (f) {
      var g = f.getElementsByClassName("recharts-cartesian-axis-tick-value");
      h.current = g;
      var y = g[0];
      if (y) {
        var w = window.getComputedStyle(y), b = w.fontSize, E = w.letterSpacing;
        (b !== u || E !== d) && (l(b), p(E));
      }
    }
  }, [u, d]);
  return a || n != null && n <= 0 || o != null && o <= 0 ? null : /* @__PURE__ */ m.createElement(Ie, {
    className: le("recharts-cartesian-axis", i),
    ref: v
  }, /* @__PURE__ */ m.createElement(BG, {
    x: e.x,
    y: e.y,
    width: n,
    height: o,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: ht(e)
  }), /* @__PURE__ */ m.createElement(VG, {
    ticks: s,
    tick: e.tick,
    tickLine: e.tickLine,
    stroke: e.stroke,
    tickFormatter: e.tickFormatter,
    unit: e.unit,
    padding: e.padding,
    tickTextProps: e.tickTextProps,
    orientation: e.orientation,
    mirror: e.mirror,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    tickSize: e.tickSize,
    tickMargin: e.tickMargin,
    fontSize: u,
    letterSpacing: d,
    getTicksConfig: e,
    events: c
  }), /* @__PURE__ */ m.createElement(Yq, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ m.createElement(i3, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children));
}), HG = /* @__PURE__ */ m.memo(qG, (e, t) => {
  var {
    viewBox: r
  } = e, n = Cf(e, MG), {
    viewBox: o
  } = t, i = Cf(t, DG);
  return po(r, o) && po(n, i);
}), ym = /* @__PURE__ */ m.forwardRef((e, t) => {
  var r = Ve(e, gm);
  return /* @__PURE__ */ m.createElement(HG, Ln({}, r, {
    ref: t
  }));
});
ym.displayName = "CartesianAxis";
var GG = ["x1", "y1", "x2", "y2", "key"], YG = ["offset"], XG = ["xAxisId", "yAxisId"], ZG = ["xAxisId", "yAxisId"];
function cw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cw(Object(r), !0).forEach(function(n) {
      JG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JG(e, t, r) {
  return (t = QG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QG(e) {
  var t = e8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yn.apply(null, arguments);
}
function $s(e, t) {
  if (e == null) return {};
  var r, n, o = t8(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function t8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var r8 = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: o,
    width: i,
    height: a,
    ry: s
  } = e;
  return /* @__PURE__ */ m.createElement("rect", {
    x: n,
    y: o,
    ry: s,
    width: i,
    height: a,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function GC(e, t) {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var {
      x1: n,
      y1: o,
      x2: i,
      y2: a,
      key: s
    } = t, c = $s(t, GG), u = ht(c), {
      offset: l
    } = u, d = $s(u, YG);
    r = /* @__PURE__ */ m.createElement("line", yn({}, d, {
      x1: n,
      y1: o,
      x2: i,
      y2: a,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function n8(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: o
  } = e;
  if (!n || !o || !o.length)
    return null;
  var {
    xAxisId: i,
    yAxisId: a
  } = e, s = $s(e, XG), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(l),
      index: l
    });
    return GC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function o8(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: o
  } = e;
  if (!n || !o || !o.length)
    return null;
  var {
    xAxisId: i,
    yAxisId: a
  } = e, s = $s(e, ZG), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return GC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function i8(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: o,
    width: i,
    height: a,
    horizontalPoints: s,
    horizontal: c = !0
  } = e;
  if (!c || !t || !t.length)
    return null;
  var u = s.map((d) => Math.round(d + o - o)).sort((d, p) => d - p);
  o !== u[0] && u.unshift(0);
  var l = u.map((d, p) => {
    var h = !u[p + 1], v = h ? o + a - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var f = p % t.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: v,
      width: i,
      stroke: "none",
      fill: t[f],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function a8(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: o,
    y: i,
    width: a,
    height: s,
    verticalPoints: c
  } = e;
  if (!t || !r || !r.length)
    return null;
  var u = c.map((d) => Math.round(d + o - o)).sort((d, p) => d - p);
  o !== u[0] && u.unshift(0);
  var l = u.map((d, p) => {
    var h = !u[p + 1], v = h ? o + a - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var f = p % r.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: i,
      width: v,
      height: s,
      stroke: "none",
      fill: r[f],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var s8 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: o,
    offset: i
  } = e;
  return KO(vm(it(it(it({}, gm), r), {}, {
    ticks: VO(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), i.left, i.left + i.width, t);
}, c8 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: o,
    offset: i
  } = e;
  return KO(vm(it(it(it({}, gm), r), {}, {
    ticks: VO(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), i.top, i.top + i.height, t);
}, l8 = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0
};
function pl(e) {
  var t = Vp(), r = qp(), n = QO(), o = it(it({}, Ve(e, l8)), {}, {
    x: X(e.x) ? e.x : n.left,
    y: X(e.y) ? e.y : n.top,
    width: X(e.width) ? e.width : n.width,
    height: X(e.height) ? e.height : n.height
  }), {
    xAxisId: i,
    yAxisId: a,
    x: s,
    y: c,
    width: u,
    height: l,
    syncWithTicks: d,
    horizontalValues: p,
    verticalValues: h
  } = o, v = nt(), f = Z((_) => ob(_, "xAxis", i, v)), g = Z((_) => ob(_, "yAxis", a, v));
  if (!X(u) || u <= 0 || !X(l) || l <= 0 || !X(s) || s !== +s || !X(c) || c !== +c)
    return null;
  var y = o.verticalCoordinatesGenerator || s8, w = o.horizontalCoordinatesGenerator || c8, {
    horizontalPoints: b,
    verticalPoints: E
  } = o;
  if ((!b || !b.length) && typeof w == "function") {
    var S = p && p.length, P = w({
      yAxis: g ? it(it({}, g), {}, {
        ticks: S ? p : g.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, S ? !0 : d);
    ms(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (b = P);
  }
  if ((!E || !E.length) && typeof y == "function") {
    var O = h && h.length, A = y({
      xAxis: f ? it(it({}, f), {}, {
        ticks: O ? h : f.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, O ? !0 : d);
    ms(Array.isArray(A), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A, "]")), Array.isArray(A) && (E = A);
  }
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ m.createElement(r8, {
    fill: o.fill,
    fillOpacity: o.fillOpacity,
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height,
    ry: o.ry
  }), /* @__PURE__ */ m.createElement(i8, yn({}, o, {
    horizontalPoints: b
  })), /* @__PURE__ */ m.createElement(a8, yn({}, o, {
    verticalPoints: E
  })), /* @__PURE__ */ m.createElement(n8, yn({}, o, {
    offset: n,
    horizontalPoints: b,
    xAxis: f,
    yAxis: g
  })), /* @__PURE__ */ m.createElement(o8, yn({}, o, {
    offset: n,
    verticalPoints: E,
    xAxis: f,
    yAxis: g
  })));
}
pl.displayName = "CartesianGrid";
var YC = (e, t, r, n) => hr(e, "xAxis", t, n), XC = (e, t, r, n) => pr(e, "xAxis", t, n), ZC = (e, t, r, n) => hr(e, "yAxis", r, n), JC = (e, t, r, n) => pr(e, "yAxis", r, n), u8 = C([ce, YC, ZC, XC, JC], (e, t, r, n, o) => vr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), d8 = (e, t, r, n, o) => o;
function f8(e) {
  return e.type === "line";
}
var p8 = C([qi, d8], (e, t) => e.filter(f8).find((r) => r.id === t)), h8 = C([ce, YC, ZC, XC, JC, p8, u8, Ui], (e, t, r, n, o, i, a, s) => {
  var {
    chartData: c,
    dataStartIndex: u,
    dataEndIndex: l
  } = s;
  if (!(i == null || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || a == null)) {
    var {
      dataKey: d,
      data: p
    } = i, h;
    if (p != null && p.length > 0 ? h = p : h = c?.slice(u, l + 1), h != null)
      return j8({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataKey: d,
        bandSize: a,
        displayedData: h
      });
  }
});
function QC(e) {
  var t = Nn(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: o,
      strokeWidth: i
    } = t, a = Number(o), s = Number(i);
    return (Number.isNaN(a) || a < 0) && (a = r), (Number.isNaN(s) || s < 0) && (s = n), {
      r: a,
      strokeWidth: s
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
var m8 = ["id"], v8 = ["type", "layout", "connectNulls", "needClip"], g8 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function lw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lw(Object(r), !0).forEach(function(n) {
      y8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y8(e, t, r) {
  return (t = b8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b8(e) {
  var t = w8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bm(e, t) {
  if (e == null) return {};
  var r, n, o = x8(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function x8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fn.apply(null, arguments);
}
var E8 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: o,
    hide: i
  } = e;
  return [{
    inactive: i,
    dataKey: t,
    type: o,
    color: n,
    value: sn(r, t),
    payload: e
  }];
};
function S8(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: o,
    fill: i,
    name: a,
    hide: s,
    unit: c
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: o,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: sn(a, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c
    }
  };
}
var eT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function P8(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], o = 0; o < t; ++o)
    n = [...n, ...r];
  return n;
}
var O8 = (e, t, r) => {
  var n = r.reduce((d, p) => d + p);
  if (!n)
    return eT(t, e);
  for (var o = Math.floor(e / n), i = e % n, a = t - e, s = [], c = 0, u = 0; c < r.length; u += r[c], ++c)
    if (u + r[c] > i) {
      s = [...r.slice(0, c), i - u];
      break;
    }
  var l = s.length % 2 === 0 ? [0, a] : [a];
  return [...P8(r, o), ...s, ...l].map((d) => "".concat(d, "px")).join(", ");
};
function A8(e, t) {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = le("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(nm, Fn({}, t, {
      className: n
    }));
  }
  return r;
}
function C8(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function T8(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: o,
    dataKey: i,
    needClip: a
  } = n;
  if (!C8(r, o))
    return null;
  var {
    id: s
  } = n, c = bm(n, m8), u = cl(o), l = ht(c), d = TP(o), p = r.map((v, f) => {
    var g = Ct(Ct(Ct({
      key: "dot-".concat(f),
      r: 3
    }, l), d), {}, {
      index: f,
      cx: v.x,
      cy: v.y,
      dataKey: i,
      value: v.value,
      payload: v.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return A8(o, g);
  }), h = {
    clipPath: a ? "url(#clipPath-".concat(u ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Ie, Fn({
    className: "recharts-line-dots",
    key: "dots"
  }, h), p);
}
function _8(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, o = Dr(() => n?.map((i) => {
    var a = {
      x: i.x,
      y: i.y,
      width: 0,
      height: 0
    };
    return Ct(Ct({}, a), {}, {
      value: i.value,
      payload: i.payload,
      viewBox: a,
      /*
       * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
       * Or should this just be the root chart viewBox?
       */
      parentViewBox: void 0,
      fill: void 0
    });
  }), [n]);
  return /* @__PURE__ */ m.createElement(rm, {
    value: t ? o : null
  }, r);
}
function uw(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: o,
    props: i
  } = e, {
    type: a,
    layout: s,
    connectNulls: c,
    needClip: u
  } = i, l = bm(i, v8), d = Ct(Ct({}, mt(l)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: a,
    layout: s,
    connectNulls: c,
    strokeDasharray: o ?? i.strokeDasharray
  });
  return /* @__PURE__ */ m.createElement(m.Fragment, null, n?.length > 1 && /* @__PURE__ */ m.createElement(ro, Fn({}, d, {
    pathRef: r
  })), /* @__PURE__ */ m.createElement(T8, {
    points: n,
    clipPathId: t,
    props: i
  }));
}
function k8(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function N8(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: o,
    longestAnimatedLengthRef: i
  } = e, {
    points: a,
    strokeDasharray: s,
    isAnimationActive: c,
    animationBegin: u,
    animationDuration: l,
    animationEasing: d,
    animateNewValues: p,
    width: h,
    height: v,
    onAnimationEnd: f,
    onAnimationStart: g
  } = r, y = o.current, w = Po(r, "recharts-line-"), [b, E] = We(!1), S = !b, P = ve(() => {
    typeof f == "function" && f(), E(!1);
  }, [f]), O = ve(() => {
    typeof g == "function" && g(), E(!0);
  }, [g]), A = k8(n.current), _ = i.current;
  return /* @__PURE__ */ m.createElement(_8, {
    points: a,
    showLabels: S
  }, r.children, /* @__PURE__ */ m.createElement(So, {
    animationId: w,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: P,
    onAnimationStart: O,
    key: w
  }, (I) => {
    var T = we(_, A + _, I), M = Math.min(T, A), D;
    if (c)
      if (s) {
        var N = "".concat(s).split(/[,\s]+/gim).map((B) => parseFloat(B));
        D = O8(M, A, N);
      } else
        D = eT(A, M);
    else
      D = s == null ? void 0 : String(s);
    if (y) {
      var z = y.length / a.length, L = I === 1 ? a : a.map((B, R) => {
        var F = Math.floor(R * z);
        if (y[F]) {
          var ee = y[F];
          return Ct(Ct({}, B), {}, {
            x: we(ee.x, B.x, I),
            y: we(ee.y, B.y, I)
          });
        }
        return p ? Ct(Ct({}, B), {}, {
          x: we(h * 2, B.x, I),
          y: we(v / 2, B.y, I)
        }) : Ct(Ct({}, B), {}, {
          x: B.x,
          y: B.y
        });
      });
      return o.current = L, /* @__PURE__ */ m.createElement(uw, {
        props: r,
        points: L,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: D
      });
    }
    return I > 0 && A > 0 && (o.current = a, i.current = M), /* @__PURE__ */ m.createElement(uw, {
      props: r,
      points: a,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: D
    });
  }), /* @__PURE__ */ m.createElement(il, {
    label: r.label
  }));
}
function I8(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = me(null), o = me(0), i = me(null);
  return /* @__PURE__ */ m.createElement(N8, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: o,
    pathRef: i
  });
}
var R8 = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: xe(e.payload, t)
});
class M8 extends JT {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: o,
      xAxisId: i,
      yAxisId: a,
      top: s,
      left: c,
      width: u,
      height: l,
      id: d,
      needClip: p
    } = this.props;
    if (t)
      return null;
    var h = le("recharts-line", o), v = d, {
      r: f,
      strokeWidth: g
    } = QC(r), y = cl(r), w = f * 2 + g;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ie, {
      className: h
    }, p && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: v,
      xAxisId: i,
      yAxisId: a
    }), !y && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(v)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: c - w / 2,
      y: s - w / 2,
      width: u + w,
      height: l + w
    }))), /* @__PURE__ */ m.createElement(BC, {
      xAxisId: i,
      yAxisId: a,
      data: n,
      dataPointFormatter: R8,
      errorBarOffset: 0
    }, /* @__PURE__ */ m.createElement(I8, {
      props: this.props,
      clipPathId: v
    }))), /* @__PURE__ */ m.createElement(Of, {
      activeDot: this.props.activeDot,
      points: n,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey
    }));
  }
}
var tT = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !Lr.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0
};
function D8(e) {
  var t = Ve(e, tT), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: o,
    animationDuration: i,
    animationEasing: a,
    connectNulls: s,
    dot: c,
    hide: u,
    isAnimationActive: l,
    label: d,
    legendType: p,
    xAxisId: h,
    yAxisId: v,
    id: f
  } = t, g = bm(t, g8), {
    needClip: y
  } = fl(h, v), w = dl(), b = $i(), E = nt(), S = Z((I) => h8(I, h, v, E, f));
  if (b !== "horizontal" && b !== "vertical" || S == null || w == null)
    return null;
  var {
    height: P,
    width: O,
    x: A,
    y: _
  } = w;
  return /* @__PURE__ */ m.createElement(M8, Fn({}, g, {
    id: f,
    connectNulls: s,
    dot: c,
    activeDot: r,
    animateNewValues: n,
    animationBegin: o,
    animationDuration: i,
    animationEasing: a,
    isAnimationActive: l,
    hide: u,
    label: d,
    legendType: p,
    xAxisId: h,
    yAxisId: v,
    points: S,
    layout: b,
    height: P,
    width: O,
    left: A,
    top: _,
    needClip: y
  }));
}
function j8(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: o,
    yAxisTicks: i,
    dataKey: a,
    bandSize: s,
    displayedData: c
  } = e;
  return c.map((u, l) => {
    var d = xe(u, a);
    if (t === "horizontal") {
      var p = hs({
        axis: r,
        ticks: o,
        bandSize: s,
        entry: u,
        index: l
      }), h = Ae(d) ? null : n.scale(d);
      return {
        x: p,
        y: h,
        value: d,
        payload: u
      };
    }
    var v = Ae(d) ? null : r.scale(d), f = hs({
      axis: n,
      ticks: i,
      bandSize: s,
      entry: u,
      index: l
    });
    return v == null || f == null ? null : {
      x: v,
      y: f,
      value: d,
      payload: u
    };
  }).filter(Boolean);
}
function $8(e) {
  var t = Ve(e, tT), r = nt();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: E8(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: S8,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(D8, Fn({}, t, {
    id: n
  }))));
}
var rT = /* @__PURE__ */ m.memo($8);
rT.displayName = "Line";
var nT = (e, t, r, n) => hr(e, "xAxis", t, n), oT = (e, t, r, n) => pr(e, "xAxis", t, n), iT = (e, t, r, n) => hr(e, "yAxis", r, n), aT = (e, t, r, n) => pr(e, "yAxis", r, n), L8 = C([ce, nT, iT, oT, aT], (e, t, r, n, o) => vr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), F8 = (e, t, r, n, o) => o, sT = C([qi, F8], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), B8 = (e, t, r, n, o) => {
  var i, a = sT(e, t, r, n, o);
  if (a != null) {
    var s = ce(e), c = vr(s, "xAxis"), u;
    if (c ? u = vi(e, "yAxis", r, n) : u = vi(e, "xAxis", t, n), u != null) {
      var {
        stackId: l
      } = a, d = Hc(a);
      if (!(l == null || d == null)) {
        var p = (i = u[l]) === null || i === void 0 ? void 0 : i.stackedData;
        return p?.find((h) => h.key === d);
      }
    }
  }
}, z8 = C([ce, nT, iT, oT, aT, B8, Ui, L8, sT], (e, t, r, n, o, i, a, s, c) => {
  var {
    chartData: u,
    dataStartIndex: l,
    dataEndIndex: d
  } = a;
  if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || s == null)) {
    var {
      data: p
    } = c, h;
    if (p && p.length > 0 ? h = p : h = u?.slice(l, d + 1), h != null) {
      var v = void 0;
      return c6({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataStartIndex: l,
        areaSettings: c,
        stackedData: i,
        displayedData: h,
        chartBaseValue: v,
        bandSize: s
      });
    }
  }
}), U8 = ["id"], W8 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function cT(e, t) {
  if (e == null) return {};
  var r, n, o = K8(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function K8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function dw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      V8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V8(e, t, r) {
  return (t = q8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q8(e) {
  var t = H8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function H8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ar.apply(null, arguments);
}
function Ls(e, t) {
  return e && e !== "none" ? e : t;
}
var G8 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    fill: o,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: Ls(n, o),
    value: sn(r, t),
    payload: e
  }];
};
function Y8(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: o,
    fill: i,
    name: a,
    hide: s,
    unit: c
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: o,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: sn(a, t),
      hide: s,
      type: e.tooltipType,
      color: Ls(n, i),
      unit: c
    }
  };
}
var X8 = (e, t) => {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = le("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(nm, Ar({}, t, {
      className: n
    }));
  }
  return r;
};
function Z8(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function J8(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: o,
    dot: i,
    dataKey: a
  } = n;
  if (!Z8(r, i))
    return null;
  var s = cl(i), c = ht(n), u = TP(i), l = r.map((p, h) => {
    var v = Sr(Sr(Sr({
      key: "dot-".concat(h),
      r: 3
    }, c), u), {}, {
      index: h,
      cx: p.x,
      cy: p.y,
      dataKey: a,
      value: p.value,
      payload: p.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return X8(i, v);
  }), d = {
    clipPath: o ? "url(#clipPath-".concat(s ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Ie, Ar({
    className: "recharts-area-dots"
  }, d), l);
}
function Q8(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, o = n.map((i) => {
    var a = {
      x: i.x,
      y: i.y,
      width: 0,
      height: 0
    };
    return Sr(Sr({}, a), {}, {
      value: i.value,
      payload: i.payload,
      parentViewBox: void 0,
      viewBox: a,
      fill: void 0
    });
  });
  return /* @__PURE__ */ m.createElement(rm, {
    value: t ? o : null
  }, r);
}
function fw(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: o,
    props: i
  } = e, {
    layout: a,
    type: s,
    stroke: c,
    connectNulls: u,
    isRange: l
  } = i, {
    id: d
  } = i, p = cT(i, U8), h = ht(p);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, t?.length > 1 && /* @__PURE__ */ m.createElement(Ie, {
    clipPath: n ? "url(#clipPath-".concat(o, ")") : void 0
  }, /* @__PURE__ */ m.createElement(ro, Ar({}, h, {
    id: d,
    points: t,
    connectNulls: u,
    type: s,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ m.createElement(ro, Ar({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: s,
    connectNulls: u,
    fill: "none",
    points: t
  })), c !== "none" && l && /* @__PURE__ */ m.createElement(ro, Ar({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: s,
    connectNulls: u,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ m.createElement(J8, {
    points: t,
    props: p,
    clipPathId: o
  }));
}
function e6(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, i = n[0].y, a = n[n.length - 1].y;
  if (!Be(i) || !Be(a))
    return null;
  var s = t * Math.abs(i - a), c = Math.max(...n.map((u) => u.x || 0));
  return X(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.x || 0), c)), X(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: 0,
    y: i < a ? i : i - s,
    width: c + (o ? parseInt("".concat(o), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function t6(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, i = n[0].x, a = n[n.length - 1].x;
  if (!Be(i) || !Be(a))
    return null;
  var s = t * Math.abs(i - a), c = Math.max(...n.map((u) => u.y || 0));
  return X(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.y || 0), c)), X(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: i < a ? i : i - s,
    y: 0,
    width: s,
    height: Math.floor(c + (o ? parseInt("".concat(o), 10) : 1))
  }) : null;
}
function r6(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: o,
    strokeWidth: i
  } = e;
  return r === "vertical" ? /* @__PURE__ */ m.createElement(e6, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: i
  }) : /* @__PURE__ */ m.createElement(t6, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: i
  });
}
function n6(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: i
  } = e, {
    points: a,
    baseLine: s,
    isAnimationActive: c,
    animationBegin: u,
    animationDuration: l,
    animationEasing: d,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, v = Po(n, "recharts-area-"), [f, g] = We(!1), y = !f, w = ve(() => {
    typeof h == "function" && h(), g(!1);
  }, [h]), b = ve(() => {
    typeof p == "function" && p(), g(!0);
  }, [p]), E = o.current, S = i.current;
  return /* @__PURE__ */ m.createElement(Q8, {
    showLabels: y,
    points: a
  }, n.children, /* @__PURE__ */ m.createElement(So, {
    animationId: v,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: w,
    onAnimationStart: b,
    key: v
  }, (P) => {
    if (E) {
      var O = E.length / a.length, A = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        P === 1 ? a : a.map((I, T) => {
          var M = Math.floor(T * O);
          if (E[M]) {
            var D = E[M];
            return Sr(Sr({}, I), {}, {
              x: we(D.x, I.x, P),
              y: we(D.y, I.y, P)
            });
          }
          return I;
        })
      ), _;
      return X(s) ? _ = we(S, s, P) : Ae(s) || Nt(s) ? _ = we(S, 0, P) : _ = s.map((I, T) => {
        var M = Math.floor(T * O);
        if (Array.isArray(S) && S[M]) {
          var D = S[M];
          return Sr(Sr({}, I), {}, {
            x: we(D.x, I.x, P),
            y: we(D.y, I.y, P)
          });
        }
        return I;
      }), P > 0 && (o.current = A, i.current = _), /* @__PURE__ */ m.createElement(fw, {
        points: A,
        baseLine: _,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return P > 0 && (o.current = a, i.current = s), /* @__PURE__ */ m.createElement(Ie, null, c && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ m.createElement(r6, {
      alpha: P,
      points: a,
      baseLine: s,
      layout: n.layout,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ m.createElement(Ie, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ m.createElement(fw, {
      points: a,
      baseLine: s,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ m.createElement(il, {
    label: n.label
  }));
}
function o6(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, o = me(null), i = me();
  return /* @__PURE__ */ m.createElement(n6, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: i
  });
}
class i6 extends yi {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: o,
      top: i,
      left: a,
      needClip: s,
      xAxisId: c,
      yAxisId: u,
      width: l,
      height: d,
      id: p,
      baseLine: h
    } = this.props;
    if (t)
      return null;
    var v = le("recharts-area", o), f = p, {
      r: g,
      strokeWidth: y
    } = QC(r), w = cl(r), b = g * 2 + y;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ie, {
      className: v
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: f,
      xAxisId: c,
      yAxisId: u
    }), !w && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(f)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: a - b / 2,
      y: i - b / 2,
      width: l + b,
      height: d + b
    }))), /* @__PURE__ */ m.createElement(o6, {
      needClip: s,
      clipPathId: f,
      props: this.props
    })), /* @__PURE__ */ m.createElement(Of, {
      points: n,
      mainColor: Ls(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ m.createElement(Of, {
      points: h,
      mainColor: Ls(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }));
  }
}
var lT = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: !Lr.isSsr,
  legendType: "line",
  stroke: "#3182bd",
  xAxisId: 0,
  yAxisId: 0
};
function a6(e) {
  var t, r = Ve(e, lT), {
    activeDot: n,
    animationBegin: o,
    animationDuration: i,
    animationEasing: a,
    connectNulls: s,
    dot: c,
    fill: u,
    fillOpacity: l,
    hide: d,
    isAnimationActive: p,
    legendType: h,
    stroke: v,
    xAxisId: f,
    yAxisId: g
  } = r, y = cT(r, W8), w = $i(), b = uC(), {
    needClip: E
  } = fl(f, g), S = nt(), {
    points: P,
    isRange: O,
    baseLine: A
  } = (t = Z((N) => z8(N, f, g, S, e.id))) !== null && t !== void 0 ? t : {}, _ = dl();
  if (w !== "horizontal" && w !== "vertical" || _ == null || b !== "AreaChart" && b !== "ComposedChart")
    return null;
  var {
    height: I,
    width: T,
    x: M,
    y: D
  } = _;
  return !P || !P.length ? null : /* @__PURE__ */ m.createElement(i6, Ar({}, y, {
    activeDot: n,
    animationBegin: o,
    animationDuration: i,
    animationEasing: a,
    baseLine: A,
    connectNulls: s,
    dot: c,
    fill: u,
    fillOpacity: l,
    height: I,
    hide: d,
    layout: w,
    isAnimationActive: p,
    isRange: O,
    legendType: h,
    needClip: E,
    points: P,
    stroke: v,
    width: T,
    left: M,
    top: D,
    xAxisId: f,
    yAxisId: g
  }));
}
var s6 = (e, t, r, n, o) => {
  var i = r ?? t;
  if (X(i))
    return i;
  var a = e === "horizontal" ? o : n, s = a.scale.domain();
  if (a.type === "number") {
    var c = Math.max(s[0], s[1]), u = Math.min(s[0], s[1]);
    return i === "dataMin" ? u : i === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
  }
  return i === "dataMin" ? s[0] : i === "dataMax" ? s[1] : s[0];
};
function c6(e) {
  var {
    areaSettings: {
      connectNulls: t,
      baseValue: r,
      dataKey: n
    },
    stackedData: o,
    layout: i,
    chartBaseValue: a,
    xAxis: s,
    yAxis: c,
    displayedData: u,
    dataStartIndex: l,
    xAxisTicks: d,
    yAxisTicks: p,
    bandSize: h
  } = e, v = o && o.length, f = s6(i, a, r, s, c), g = i === "horizontal", y = !1, w = u.map((E, S) => {
    var P;
    v ? P = o[l + S] : (P = xe(E, n), Array.isArray(P) ? y = !0 : P = [f, P]);
    var O = P[1] == null || v && !t && xe(E, n) == null;
    return g ? {
      x: hs({
        axis: s,
        ticks: d,
        bandSize: h,
        entry: E,
        index: S
      }),
      y: O ? null : c.scale(P[1]),
      value: P,
      payload: E
    } : {
      x: O ? null : s.scale(P[1]),
      y: hs({
        axis: c,
        ticks: p,
        bandSize: h,
        entry: E,
        index: S
      }),
      value: P,
      payload: E
    };
  }), b;
  return v || y ? b = w.map((E) => {
    var S = Array.isArray(E.value) ? E.value[0] : null;
    return g ? {
      x: E.x,
      y: S != null && E.y != null ? c.scale(S) : null,
      payload: E.payload
    } : {
      x: S != null ? s.scale(S) : null,
      y: E.y,
      payload: E.payload
    };
  }) : b = g ? c.scale(f) : s.scale(f), {
    points: w,
    baseLine: b,
    isRange: y
  };
}
function l6(e) {
  var t = Ve(e, lT), r = nt();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: G8(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: Y8,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: qO(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ m.createElement(a6, Ar({}, t, {
    id: n
  }))));
}
var uT = /* @__PURE__ */ m.memo(l6);
uT.displayName = "Area";
var u6 = ["dangerouslySetInnerHTML", "ticks"], d6 = ["id"], f6 = ["domain"], p6 = ["domain"];
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(null, arguments);
}
function Fs(e, t) {
  if (e == null) return {};
  var r, n, o = h6(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function h6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function m6(e) {
  var t = _e();
  return lr(() => (t(W4(e)), () => {
    t(K4(e));
  }), [e, t]), null;
}
var v6 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = Z(Wp), o = nt(), i = "xAxis", a = Z((g) => Io(g, i, t, o)), s = Z((g) => z1(g, i, t, o)), c = Z((g) => $1(g, t)), u = Z((g) => kV(g, t)), l = Z((g) => y1(g, t));
  if (c == null || u == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: d,
    ticks: p
  } = e, h = Fs(e, u6), {
    id: v
  } = l, f = Fs(l, d6);
  return /* @__PURE__ */ m.createElement(ym, Tf({}, h, f, {
    scale: a,
    x: u.x,
    y: u.y,
    width: c.width,
    height: c.height,
    className: le("recharts-".concat(i, " ").concat(i), r),
    viewBox: n,
    ticks: s
  }));
}, g6 = {
  allowDataOverflow: Et.allowDataOverflow,
  allowDecimals: Et.allowDecimals,
  allowDuplicatedCategory: Et.allowDuplicatedCategory,
  height: Et.height,
  hide: !1,
  mirror: Et.mirror,
  orientation: Et.orientation,
  padding: Et.padding,
  reversed: Et.reversed,
  scale: Et.scale,
  tickCount: Et.tickCount,
  type: Et.type,
  xAxisId: 0
}, y6 = (e) => {
  var t, r, n, o, i, a = Ve(e, g6);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(m6, {
    interval: (t = a.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: a.xAxisId,
    scale: a.scale,
    type: a.type,
    padding: a.padding,
    allowDataOverflow: a.allowDataOverflow,
    domain: a.domain,
    dataKey: a.dataKey,
    allowDuplicatedCategory: a.allowDuplicatedCategory,
    allowDecimals: a.allowDecimals,
    tickCount: a.tickCount,
    includeHidden: (r = a.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: a.reversed,
    ticks: a.ticks,
    height: a.height,
    orientation: a.orientation,
    mirror: a.mirror,
    hide: a.hide,
    unit: a.unit,
    name: a.name,
    angle: (n = a.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (o = a.minTickGap) !== null && o !== void 0 ? o : 5,
    tick: (i = a.tick) !== null && i !== void 0 ? i : !0,
    tickFormatter: a.tickFormatter
  }), /* @__PURE__ */ m.createElement(v6, a));
}, b6 = (e, t) => {
  var {
    domain: r
  } = e, n = Fs(e, f6), {
    domain: o
  } = t, i = Fs(t, p6);
  return po(n, i) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : po({
    domain: r
  }, {
    domain: o
  }) : !1;
}, hl = /* @__PURE__ */ m.memo(y6, b6);
hl.displayName = "XAxis";
var w6 = ["dangerouslySetInnerHTML", "ticks"], x6 = ["id"], E6 = ["domain"], S6 = ["domain"];
function _f() {
  return _f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _f.apply(null, arguments);
}
function Bs(e, t) {
  if (e == null) return {};
  var r, n, o = P6(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function P6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function O6(e) {
  var t = _e();
  return lr(() => (t(V4(e)), () => {
    t(q4(e));
  }), [e, t]), null;
}
var A6 = (e) => {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: o
  } = e, i = me(null), a = me(null), s = Z(Wp), c = nt(), u = _e(), l = "yAxis", d = Z((S) => Io(S, l, t, c)), p = Z((S) => L1(S, t)), h = Z((S) => IV(S, t)), v = Z((S) => z1(S, l, t, c)), f = Z((S) => b1(S, t));
  if (lr(() => {
    if (!(n !== "auto" || !p || tm(o) || /* @__PURE__ */ Ut(o) || f == null)) {
      var S = i.current;
      if (S) {
        var P = S.getCalculatedWidth();
        Math.round(p.width) !== Math.round(P) && u(H4({
          id: t,
          width: P
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    v,
    p,
    u,
    o,
    t,
    n,
    f
  ]), p == null || h == null || f == null)
    return null;
  var {
    dangerouslySetInnerHTML: g,
    ticks: y
  } = e, w = Bs(e, w6), {
    id: b
  } = f, E = Bs(f, x6);
  return /* @__PURE__ */ m.createElement(ym, _f({}, w, E, {
    ref: i,
    labelRef: a,
    scale: d,
    x: h.x,
    y: h.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: p.width,
    height: p.height,
    className: le("recharts-".concat(l, " ").concat(l), r),
    viewBox: s,
    ticks: v
  }));
}, C6 = {
  allowDataOverflow: St.allowDataOverflow,
  allowDecimals: St.allowDecimals,
  allowDuplicatedCategory: St.allowDuplicatedCategory,
  hide: !1,
  mirror: St.mirror,
  orientation: St.orientation,
  padding: St.padding,
  reversed: St.reversed,
  scale: St.scale,
  tickCount: St.tickCount,
  type: St.type,
  width: St.width,
  yAxisId: 0
}, T6 = (e) => {
  var t, r, n, o, i, a = Ve(e, C6);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(O6, {
    interval: (t = a.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: a.yAxisId,
    scale: a.scale,
    type: a.type,
    domain: a.domain,
    allowDataOverflow: a.allowDataOverflow,
    dataKey: a.dataKey,
    allowDuplicatedCategory: a.allowDuplicatedCategory,
    allowDecimals: a.allowDecimals,
    tickCount: a.tickCount,
    padding: a.padding,
    includeHidden: (r = a.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: a.reversed,
    ticks: a.ticks,
    width: a.width,
    orientation: a.orientation,
    mirror: a.mirror,
    hide: a.hide,
    unit: a.unit,
    name: a.name,
    angle: (n = a.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (o = a.minTickGap) !== null && o !== void 0 ? o : 5,
    tick: (i = a.tick) !== null && i !== void 0 ? i : !0,
    tickFormatter: a.tickFormatter
  }), /* @__PURE__ */ m.createElement(A6, a));
}, _6 = (e, t) => {
  var {
    domain: r
  } = e, n = Bs(e, E6), {
    domain: o
  } = t, i = Bs(t, S6);
  return po(n, i) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : po({
    domain: r
  }, {
    domain: o
  }) : !1;
}, ml = /* @__PURE__ */ m.memo(T6, _6);
ml.displayName = "YAxis";
var Ia = { exports: {} }, ld = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pw;
function k6() {
  if (pw) return ld;
  pw = 1;
  var e = Pt;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ld.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
    var h = o(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else v = h.current;
    h = a(
      function() {
        function g(S) {
          if (!y) {
            if (y = !0, w = S, S = d(S), p !== void 0 && v.hasValue) {
              var P = v.value;
              if (p(P, S))
                return b = P;
            }
            return b = S;
          }
          if (P = b, r(w, S)) return P;
          var O = d(S);
          return p !== void 0 && p(P, O) ? (w = S, P) : (w = S, b = O);
        }
        var y = !1, w, b, E = l === void 0 ? null : l;
        return [
          function() {
            return g(u());
          },
          E === null ? void 0 : function() {
            return g(E());
          }
        ];
      },
      [u, l, d, p]
    );
    var f = n(c, h[0], h[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = f;
      },
      [f]
    ), s(f), f;
  }, ld;
}
var ud = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hw;
function N6() {
  return hw || (hw = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Pt, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    ud.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
      var h = o(null);
      if (h.current === null) {
        var v = { hasValue: !1, value: null };
        h.current = v;
      } else v = h.current;
      h = a(
        function() {
          function g(S) {
            if (!y) {
              if (y = !0, w = S, S = d(S), p !== void 0 && v.hasValue) {
                var P = v.value;
                if (p(P, S))
                  return b = P;
              }
              return b = S;
            }
            if (P = b, r(w, S))
              return P;
            var O = d(S);
            return p !== void 0 && p(P, O) ? (w = S, P) : (w = S, b = O);
          }
          var y = !1, w, b, E = l === void 0 ? null : l;
          return [
            function() {
              return g(u());
            },
            E === null ? void 0 : function() {
              return g(E());
            }
          ];
        },
        [u, l, d, p]
      );
      var f = n(c, h[0], h[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = f;
        },
        [f]
      ), s(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ud;
}
var mw;
function I6() {
  return mw || (mw = 1, process.env.NODE_ENV === "production" ? Ia.exports = k6() : Ia.exports = N6()), Ia.exports;
}
I6();
function R6(e) {
  e();
}
function M6() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      R6(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const o = t = {
        callback: r,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !n || e === null || (n = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var vw = {
  notify() {
  },
  get: () => []
};
function D6(e, t) {
  let r, n = vw, o = 0, i = !1;
  function a(f) {
    l();
    const g = n.subscribe(f);
    let y = !1;
    return () => {
      y || (y = !0, g(), d());
    };
  }
  function s() {
    n.notify();
  }
  function c() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return i;
  }
  function l() {
    o++, r || (r = e.subscribe(c), n = M6());
  }
  function d() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = vw);
  }
  function p() {
    i || (i = !0, l());
  }
  function h() {
    i && (i = !1, d());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return v;
}
var j6 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $6 = /* @__PURE__ */ j6(), L6 = () => typeof navigator < "u" && navigator.product === "ReactNative", F6 = /* @__PURE__ */ L6(), B6 = () => $6 || F6 ? m.useLayoutEffect : m.useEffect, z6 = /* @__PURE__ */ B6(), U6 = /* @__PURE__ */ Symbol.for("react-redux-context"), W6 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function K6() {
  if (!m.createContext) return {};
  const e = W6[U6] ??= /* @__PURE__ */ new Map();
  let t = e.get(m.createContext);
  return t || (t = m.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(m.createContext, t)), t;
}
var V6 = /* @__PURE__ */ K6();
function q6(e) {
  const { children: t, context: r, serverState: n, store: o } = e, i = m.useMemo(() => {
    const c = D6(o), u = {
      store: o,
      subscription: c,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return u;
    {
      const { identityFunctionCheck: l = "once", stabilityCheck: d = "once" } = e;
      return /* @__PURE__ */ Object.assign(u, {
        stabilityCheck: d,
        identityFunctionCheck: l
      });
    }
  }, [o, n]), a = m.useMemo(() => o.getState(), [o]);
  z6(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = r || V6;
  return /* @__PURE__ */ m.createElement(s.Provider, { value: i }, t);
}
var H6 = q6, G6 = (e, t) => t, wm = C([G6, ce, m1, He, oC, Ur, j5, Ke], z5), xm = (e) => {
  var t = e.currentTarget.getBoundingClientRect(), r = t.width / e.currentTarget.offsetWidth, n = t.height / e.currentTarget.offsetHeight;
  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((e.clientX - t.left) / r),
    chartY: Math.round((e.clientY - t.top) / n)
  };
}, dT = Vt("mouseClick"), fT = Di();
fT.startListening({
  actionCreator: dT,
  effect: (e, t) => {
    var r = e.payload, n = wm(t.getState(), xm(r));
    n?.activeIndex != null && t.dispatch(VV({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var kf = Vt("mouseMove"), pT = Di();
pT.startListening({
  actionCreator: kf,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared), i = wm(n, xm(r));
    o === "axis" && (i?.activeIndex != null ? t.dispatch(Y1({
      activeIndex: i.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: i.activeCoordinate
    })) : t.dispatch(G1()));
  }
});
var gw = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, hT = Dt({
  name: "rootProps",
  initialState: gw,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : gw.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), Y6 = hT.reducer, {
  updateOptions: X6
} = hT.actions, mT = Dt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: Z6
} = mT.actions, J6 = mT.reducer, vT = Vt("keyDown"), gT = Vt("focus"), Em = Di();
Em.startListening({
  actionCreator: vT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip, i = e.payload;
      if (!(i !== "ArrowRight" && i !== "ArrowLeft" && i !== "Enter")) {
        var a = Number(Hh(o, Mo(r))), s = Ur(r);
        if (i === "Enter") {
          var c = Ns(r, "axis", "hover", String(o.index));
          t.dispatch(wf({
            active: !o.active,
            activeIndex: o.index,
            activeDataKey: o.dataKey,
            activeCoordinate: c
          }));
          return;
        }
        var u = jV(r), l = u === "left-to-right" ? 1 : -1, d = i === "ArrowRight" ? 1 : -1, p = a + d * l;
        if (!(s == null || p >= s.length || p < 0)) {
          var h = Ns(r, "axis", "hover", String(p));
          t.dispatch(wf({
            active: !0,
            activeIndex: p.toString(),
            activeDataKey: void 0,
            activeCoordinate: h
          }));
        }
      }
    }
  }
});
Em.startListening({
  actionCreator: gT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip;
      if (!o.active && o.index == null) {
        var i = "0", a = Ns(r, "axis", "hover", String(i));
        t.dispatch(wf({
          activeDataKey: void 0,
          active: !0,
          activeIndex: i,
          activeCoordinate: a
        }));
      }
    }
  }
});
var Ft = Vt("externalEvent"), yT = Di();
yT.startListening({
  actionCreator: Ft,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: C5(r),
        activeDataKey: cC(r),
        activeIndex: Qr(r),
        activeLabel: sC(r),
        activeTooltipIndex: Qr(r),
        isTooltipActive: T5(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var Q6 = C([Ro], (e) => e.tooltipItemPayloads), eY = C([Q6, Yi, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
  var o = e.find((s) => s.settings.dataKey === n);
  if (o != null) {
    var {
      positions: i
    } = o;
    if (i != null) {
      var a = t(i, r);
      return a;
    }
  }
}), bT = Vt("touchMove"), wT = Di();
wT.startListening({
  actionCreator: bT,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared);
    if (o === "axis") {
      var i = wm(n, xm({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      i?.activeIndex != null && t.dispatch(Y1({
        activeIndex: i.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: i.activeCoordinate
      }));
    } else if (o === "item") {
      var a, s = r.touches[0], c = document.elementFromPoint(s.clientX, s.clientY);
      if (!c || !c.getAttribute)
        return;
      var u = c.getAttribute(GO), l = (a = c.getAttribute(YO)) !== null && a !== void 0 ? a : void 0, d = eY(t.getState(), u, l);
      t.dispatch(H1({
        activeDataKey: l,
        activeIndex: u,
        activeCoordinate: d
      }));
    }
  }
});
var tY = pO({
  brush: pG,
  cartesianAxis: G4,
  chartData: nq,
  errorBars: fH,
  graphicalItems: p4,
  layout: mF,
  legend: xB,
  options: J5,
  polarAxis: A3,
  polarOptions: J6,
  referenceElements: wG,
  rootProps: Y6,
  tooltip: qV
}), rY = function(t) {
  return B2({
    reducer: tY,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([fT.middleware, pT.middleware, Em.middleware, yT.middleware, wT.middleware]),
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (r) => {
      var n = r;
      return typeof r == "function" && (n = r()), n.concat(_O({
        type: "raf"
      }));
    },
    devTools: Lr.devToolsEnabled
  });
};
function xT(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, o = nt(), i = me(null);
  if (o)
    return r;
  i.current == null && (i.current = rY(t));
  var a = $p;
  return /* @__PURE__ */ m.createElement(H6, {
    context: a,
    store: i.current
  }, r);
}
function ET(e) {
  var {
    layout: t,
    margin: r
  } = e, n = _e(), o = nt();
  return Fe(() => {
    o || (n(fF(t)), n(dF(r)));
  }, [n, o, t, r]), null;
}
function ST(e) {
  var t = _e();
  return Fe(() => {
    t(X6(e));
  }, [t, e]), null;
}
var nY = ["children"];
function oY(e, t) {
  if (e == null) return {};
  var r, n, o = iY(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function iY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function zs() {
  return zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zs.apply(null, arguments);
}
var aY = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, sY = /* @__PURE__ */ De((e, t) => {
  var r = Vp(), n = qp(), o = nA();
  if (!so(r) || !so(n))
    return null;
  var {
    children: i,
    otherAttributes: a,
    title: s,
    desc: c
  } = e, u, l;
  return typeof a.tabIndex == "number" ? u = a.tabIndex : u = o ? 0 : void 0, typeof a.role == "string" ? l = a.role : l = o ? "application" : void 0, /* @__PURE__ */ m.createElement(Op, zs({}, a, {
    title: s,
    desc: c,
    role: l,
    tabIndex: u,
    width: r,
    height: n,
    style: aY,
    ref: t
  }), i);
}), cY = (e) => {
  var {
    children: t
  } = e, r = Z(Mc);
  if (!r)
    return null;
  var {
    width: n,
    height: o,
    y: i,
    x: a
  } = r;
  return /* @__PURE__ */ m.createElement(Op, {
    width: n,
    height: o,
    x: a,
    y: i
  }, t);
}, yw = /* @__PURE__ */ De((e, t) => {
  var {
    children: r
  } = e, n = oY(e, nY), o = nt();
  return o ? /* @__PURE__ */ m.createElement(cY, null, r) : /* @__PURE__ */ m.createElement(sY, zs({
    ref: t
  }, n), r);
});
function lY() {
  var e = _e(), [t, r] = We(null), n = Z(WF);
  return Fe(() => {
    if (t != null) {
      var o = t.getBoundingClientRect(), i = o.width / t.offsetWidth;
      Be(i) && i !== n && e(hF(i));
    }
  }, [t, e, n]), r;
}
function bw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bw(Object(r), !0).forEach(function(n) {
      dY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dY(e, t, r) {
  return (t = fY(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fY(e) {
  var t = pY(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pY(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Bn() {
  return Bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bn.apply(null, arguments);
}
var hY = () => (fq(), null);
function Us(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var mY = /* @__PURE__ */ De((e, t) => {
  var r, n, o = me(null), [i, a] = We({
    containerWidth: Us((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Us((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), s = ve((u, l) => {
    a((d) => {
      var p = Math.round(u), h = Math.round(l);
      return d.containerWidth === p && d.containerHeight === h ? d : {
        containerWidth: p,
        containerHeight: h
      };
    });
  }, []), c = ve((u) => {
    if (typeof t == "function" && t(u), u != null) {
      var {
        width: l,
        height: d
      } = u.getBoundingClientRect();
      s(l, d);
      var p = (v) => {
        var {
          width: f,
          height: g
        } = v[0].contentRect;
        s(f, g);
      }, h = new ResizeObserver(p);
      h.observe(u), o.current = h;
    }
  }, [t, s]);
  return Fe(() => () => {
    var u = o.current;
    u?.disconnect();
  }, [s]), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Bn({
    ref: c
  }, e)));
}), vY = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n
  } = e, [o, i] = We({
    containerWidth: Us(r),
    containerHeight: Us(n)
  }), a = ve((c, u) => {
    i((l) => {
      var d = Math.round(c), p = Math.round(u);
      return l.containerWidth === d && l.containerHeight === p ? l : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), s = ve((c) => {
    if (typeof t == "function" && t(c), c != null) {
      var {
        width: u,
        height: l
      } = c.getBoundingClientRect();
      a(u, l);
    }
  }, [t, a]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Bn({
    ref: s
  }, e)));
}), gY = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement("div", Bn({
    ref: t
  }, e)));
}), yY = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return kr(r) || kr(n) ? /* @__PURE__ */ m.createElement(vY, Bn({}, e, {
    ref: t
  })) : /* @__PURE__ */ m.createElement(gY, Bn({}, e, {
    ref: t
  }));
});
function bY(e) {
  return e === !0 ? mY : yY;
}
var wY = /* @__PURE__ */ De((e, t) => {
  var {
    children: r,
    className: n,
    height: o,
    onClick: i,
    onContextMenu: a,
    onDoubleClick: s,
    onMouseDown: c,
    onMouseEnter: u,
    onMouseLeave: l,
    onMouseMove: d,
    onMouseUp: p,
    onTouchEnd: h,
    onTouchMove: v,
    onTouchStart: f,
    style: g,
    width: y,
    responsive: w,
    dispatchTouchEvents: b = !0
  } = e, E = me(null), S = _e(), [P, O] = We(null), [A, _] = We(null), I = lY(), T = Kp(), M = T?.width > 0 ? T.width : y, D = T?.height > 0 ? T.height : o, N = ve((j) => {
    I(j), typeof t == "function" && t(j), O(j), _(j), j != null && (E.current = j);
  }, [I, t, O, _]), z = ve((j) => {
    S(dT(j)), S(Ft({
      handler: i,
      reactEvent: j
    }));
  }, [S, i]), L = ve((j) => {
    S(kf(j)), S(Ft({
      handler: u,
      reactEvent: j
    }));
  }, [S, u]), B = ve((j) => {
    S(G1()), S(Ft({
      handler: l,
      reactEvent: j
    }));
  }, [S, l]), R = ve((j) => {
    S(kf(j)), S(Ft({
      handler: d,
      reactEvent: j
    }));
  }, [S, d]), F = ve(() => {
    S(gT());
  }, [S]), ee = ve((j) => {
    S(vT(j.key));
  }, [S]), ie = ve((j) => {
    S(Ft({
      handler: a,
      reactEvent: j
    }));
  }, [S, a]), ne = ve((j) => {
    S(Ft({
      handler: s,
      reactEvent: j
    }));
  }, [S, s]), te = ve((j) => {
    S(Ft({
      handler: c,
      reactEvent: j
    }));
  }, [S, c]), oe = ve((j) => {
    S(Ft({
      handler: p,
      reactEvent: j
    }));
  }, [S, p]), ue = ve((j) => {
    S(Ft({
      handler: f,
      reactEvent: j
    }));
  }, [S, f]), je = ve((j) => {
    b && S(bT(j)), S(Ft({
      handler: v,
      reactEvent: j
    }));
  }, [S, b, v]), W = ve((j) => {
    S(Ft({
      handler: h,
      reactEvent: j
    }));
  }, [S, h]), fe = bY(w);
  return /* @__PURE__ */ m.createElement(mC.Provider, {
    value: P
  }, /* @__PURE__ */ m.createElement(_P.Provider, {
    value: A
  }, /* @__PURE__ */ m.createElement(fe, {
    width: M ?? g?.width,
    height: D ?? g?.height,
    className: le("recharts-wrapper", n),
    style: uY({
      position: "relative",
      cursor: "default",
      width: M,
      height: D
    }, g),
    onClick: z,
    onContextMenu: ie,
    onDoubleClick: ne,
    onFocus: F,
    onKeyDown: ee,
    onMouseDown: te,
    onMouseEnter: L,
    onMouseLeave: B,
    onMouseMove: R,
    onMouseUp: oe,
    onTouchEnd: W,
    onTouchMove: je,
    onTouchStart: ue,
    ref: N
  }, /* @__PURE__ */ m.createElement(hY, null), r)));
}), xY = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function EY(e, t) {
  if (e == null) return {};
  var r, n, o = SY(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function SY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var PT = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n,
    responsive: o,
    children: i,
    className: a,
    style: s,
    compact: c,
    title: u,
    desc: l
  } = e, d = EY(e, xY), p = ht(d);
  return c ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement(yw, {
    otherAttributes: p,
    title: u,
    desc: l
  }, i)) : /* @__PURE__ */ m.createElement(wY, {
    className: a,
    style: s,
    width: r,
    height: n,
    responsive: o,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ m.createElement(yw, {
    otherAttributes: p,
    title: u,
    desc: l,
    ref: t
  }, /* @__PURE__ */ m.createElement(EG, null, i)));
});
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nf.apply(null, arguments);
}
var PY = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, OY = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: PY,
  reverseStackOrder: !1,
  syncMethod: "index",
  responsive: !1
}, Sm = /* @__PURE__ */ De(function(t, r) {
  var n, o = Ve(t.categoricalChartProps, OY), {
    chartName: i,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c,
    categoricalChartProps: u
  } = t, l = {
    chartName: i,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ m.createElement(xT, {
    preloadedState: {
      options: l
    },
    reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : i
  }, /* @__PURE__ */ m.createElement(KC, {
    chartData: u.data
  }), /* @__PURE__ */ m.createElement(ET, {
    layout: o.layout,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(ST, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(PT, Nf({}, o, {
    ref: r
  })));
}), AY = ["axis"], CY = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: AY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
})), TY = ["axis", "item"], _Y = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: TY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
}));
function kY(e) {
  var t = _e();
  return Fe(() => {
    t(Z6(e));
  }, [t, e]), null;
}
var NY = ["layout"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(null, arguments);
}
function IY(e, t) {
  if (e == null) return {};
  var r, n, o = RY(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function RY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var MY = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, DY = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: MY,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1
}, jY = /* @__PURE__ */ De(function(t, r) {
  var n, o = Ve(t.categoricalChartProps, DY), {
    layout: i
  } = o, a = IY(o, NY), {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l
  } = t, d = {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ m.createElement(xT, {
    preloadedState: {
      options: d
    },
    reduxStoreName: (n = o.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ m.createElement(KC, {
    chartData: o.data
  }), /* @__PURE__ */ m.createElement(ET, {
    layout: i,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(ST, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(kY, {
    cx: o.cx,
    cy: o.cy,
    startAngle: o.startAngle,
    endAngle: o.endAngle,
    innerRadius: o.innerRadius,
    outerRadius: o.outerRadius
  }), /* @__PURE__ */ m.createElement(PT, If({}, a, {
    ref: r
  })));
}), $Y = ["item"], LY = {
  layout: "centric",
  startAngle: 0,
  endAngle: 360,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, FY = /* @__PURE__ */ De((e, t) => {
  var r = Ve(e, LY);
  return /* @__PURE__ */ m.createElement(jY, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: $Y,
    tooltipPayloadSearcher: rl,
    categoricalChartProps: r,
    ref: t
  });
}), BY = ["axis"], zY = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: BY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
}));
const UY = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: i = !0,
    showTooltip: a = !0,
    width: s = "100%",
    height: c = 400,
    className: u,
    barSize: l = 20,
    layout: d = "horizontal"
  }, p) => {
    const v = n || [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(221.2 83.2% 53.3%)",
      "hsl(204 94% 94%)",
      "hsl(142 71% 45%)",
      "hsl(0 84.2% 60.2%)"
    ];
    return /* @__PURE__ */ x("div", { ref: p, className: u, children: /* @__PURE__ */ x(Dc, { width: s, height: c, children: /* @__PURE__ */ V(_Y, { data: e, layout: d, children: [
      o && /* @__PURE__ */ x(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ x(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ x(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ x(nl, {}),
      i && /* @__PURE__ */ x(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ x(
        UC,
        {
          dataKey: f,
          fill: v[g % v.length],
          barSize: l
        },
        f
      ))
    ] }) }) });
  }
);
UY.displayName = "BarChart";
const WY = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: i = !0,
    showTooltip: a = !0,
    showDots: s = !0,
    width: c = "100%",
    height: u = 400,
    className: l,
    strokeWidth: d = 2
  }, p) => {
    const v = n || [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(221.2 83.2% 53.3%)",
      "hsl(204 94% 94%)",
      "hsl(142 71% 45%)",
      "hsl(0 84.2% 60.2%)"
    ];
    return /* @__PURE__ */ x("div", { ref: p, className: l, children: /* @__PURE__ */ x(Dc, { width: c, height: u, children: /* @__PURE__ */ V(CY, { data: e, children: [
      o && /* @__PURE__ */ x(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ x(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ x(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ x(nl, {}),
      i && /* @__PURE__ */ x(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ x(
        rT,
        {
          type: "monotone",
          dataKey: f,
          stroke: v[g % v.length],
          strokeWidth: d,
          dot: s
        },
        f
      ))
    ] }) }) });
  }
);
WY.displayName = "LineChart";
const KY = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: i = !0,
    showTooltip: a = !0,
    width: s = "100%",
    height: c = 400,
    className: u,
    strokeWidth: l = 2,
    fillOpacity: d = 0.6
  }, p) => {
    const v = n || [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(221.2 83.2% 53.3%)",
      "hsl(204 94% 94%)",
      "hsl(142 71% 45%)",
      "hsl(0 84.2% 60.2%)"
    ];
    return /* @__PURE__ */ x("div", { ref: p, className: u, children: /* @__PURE__ */ x(Dc, { width: s, height: c, children: /* @__PURE__ */ V(zY, { data: e, children: [
      o && /* @__PURE__ */ x(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ x(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ x(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ x(nl, {}),
      i && /* @__PURE__ */ x(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ x(
        uT,
        {
          type: "monotone",
          dataKey: f,
          stroke: v[g % v.length],
          fill: v[g % v.length],
          strokeWidth: l,
          fillOpacity: d
        },
        f
      ))
    ] }) }) });
  }
);
KY.displayName = "AreaChart";
const VY = m.forwardRef(
  ({
    data: e,
    dataKey: t = "value",
    nameKey: r = "name",
    colors: n,
    showLabels: o = !0,
    showLegend: i = !0,
    showTooltip: a = !0,
    innerRadius: s = 0,
    outerRadius: c = 120,
    labelFormatter: u,
    width: l = "100%",
    height: d = 400,
    className: p
  }, h) => {
    const f = n || [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(221.2 83.2% 53.3%)",
      "hsl(204 94% 94%)",
      "hsl(142 71% 45%)",
      "hsl(0 84.2% 60.2%)",
      "hsl(210 40% 96.1%)",
      "hsl(220 14.3% 95.9%)"
    ];
    return /* @__PURE__ */ x("div", { ref: h, className: p, children: /* @__PURE__ */ x(Dc, { width: l, height: d, children: /* @__PURE__ */ V(FY, { children: [
      /* @__PURE__ */ x(
        $C,
        {
          data: e,
          cx: "50%",
          cy: "50%",
          labelLine: !1,
          label: o ? u || ((y) => `${y.value}`) : !1,
          innerRadius: s,
          outerRadius: c,
          dataKey: t,
          nameKey: r,
          children: e.map((y, w) => /* @__PURE__ */ x(Zi, { fill: f[w % f.length] }, `cell-${w}`))
        }
      ),
      a && /* @__PURE__ */ x(nl, {}),
      i && /* @__PURE__ */ x(Wn, {})
    ] }) }) });
  }
);
VY.displayName = "PieChart";
const m7 = ({
  title: e,
  subtitle: t,
  logo: r,
  user: n,
  menuItems: o = [],
  menuGroups: i = [],
  initialCollapsed: a = !0,
  onLogout: s,
  onNotificationClick: c,
  userMenuItems: u = [],
  hasNotifications: l = !1,
  breadcrumbs: d = [],
  children: p
}) => {
  const [h, v] = m.useState(a), f = /* @__PURE__ */ V(WM, { children: [
    /* @__PURE__ */ x(KM, { asChild: !0, children: /* @__PURE__ */ V("button", { className: "flex items-center gap-2 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98] outline-none", children: [
      /* @__PURE__ */ x("div", { className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: n.avatar || n.name.charAt(0).toUpperCase() }),
      /* @__PURE__ */ V("div", { className: "hidden md:flex flex-col items-start", children: [
        /* @__PURE__ */ x("span", { className: "text-sm font-semibold text-foreground leading-tight", children: n.name }),
        /* @__PURE__ */ x("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: n.role })
      ] }),
      /* @__PURE__ */ x(Vs, { className: "h-4 w-4 text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ x(mE, { align: "end", className: "w-56", children: u.map((g, y) => /* @__PURE__ */ x(m.Fragment, { children: g.separator ? /* @__PURE__ */ x(gE, {}) : /* @__PURE__ */ V(
      vE,
      {
        onClick: g.onClick,
        className: "cursor-pointer flex items-center gap-2",
        children: [
          g.icon && /* @__PURE__ */ x("span", { className: "flex-shrink-0", children: g.icon }),
          /* @__PURE__ */ x("span", { children: g.label })
        ]
      }
    ) }, y)) })
  ] });
  return /* @__PURE__ */ V("div", { className: "relative min-h-screen bg-background", children: [
    /* @__PURE__ */ x(
      xP,
      {
        title: e,
        subtitle: t,
        logo: r,
        items: o,
        groups: i,
        isCollapsed: h,
        onToggleCollapse: () => v(!h),
        onLogout: s
      }
    ),
    /* @__PURE__ */ x(
      SP,
      {
        isCollapsed: h,
        breadcrumbs: d,
        user: {
          name: n.name,
          role: n.role,
          avatar: n.avatar
        },
        onNotificationClick: c,
        hasNotifications: l,
        userMenuTrigger: f
      }
    ),
    /* @__PURE__ */ x(
      "main",
      {
        className: U(
          "transition-all duration-300 pt-[60px] min-h-screen",
          h ? "ml-[80px]" : "ml-[260px]"
        ),
        children: /* @__PURE__ */ x("div", { className: "w-full h-full p-6", children: p })
      }
    )
  ] });
}, v7 = ({
  title: e,
  icon: t,
  actions: r = [],
  showDefaultActions: n = !0,
  onAdd: o,
  onEdit: i,
  onDelete: a,
  onRefresh: s,
  children: c,
  className: u
}) => {
  const l = [];
  n && (o && l.push({
    key: "add",
    label: "Incluir",
    icon: /* @__PURE__ */ x(k_, { className: "h-4 w-4" }),
    variant: "primary",
    onClick: o
  }), i && l.push({
    key: "edit",
    label: "Editar",
    icon: /* @__PURE__ */ x(j_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: i
  }), a && l.push({
    key: "delete",
    label: "Excluir",
    icon: /* @__PURE__ */ x(L_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: a
  }));
  const d = [...l, ...r];
  return /* @__PURE__ */ V("div", { className: U("flex flex-col h-full w-full", u), children: [
    /* @__PURE__ */ V("div", { className: "flex items-center justify-between mb-6 pb-4 border-b", children: [
      /* @__PURE__ */ V("div", { className: "flex items-center gap-3", children: [
        t && /* @__PURE__ */ x("div", { className: "flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary", children: t }),
        /* @__PURE__ */ V("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x("h1", { className: "text-2xl font-bold text-foreground tracking-tight", children: e }),
          s && /* @__PURE__ */ x(
            "button",
            {
              onClick: s,
              className: "p-1.5 rounded-md transition-colors hover:bg-accent text-muted-foreground hover:text-foreground",
              title: "Atualizar",
              children: /* @__PURE__ */ x(I_, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      d.length > 0 && /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: d.map((p) => /* @__PURE__ */ V(
        Ha,
        {
          variant: p.variant || "outline",
          size: "sm",
          onClick: p.onClick,
          disabled: p.disabled,
          className: "gap-2",
          children: [
            p.icon,
            p.label
          ]
        },
        p.key
      )) })
    ] }),
    /* @__PURE__ */ x("div", { className: "flex-1 overflow-auto", children: c })
  ] });
};
function g7({
  columns: e,
  data: t,
  loading: r = !1,
  rowKey: n,
  selectable: o,
  selectedRows: i = [],
  onSelectionChange: a,
  onRowClick: s,
  className: c,
  emptyText: u = "Nenhum registro encontrado"
}) {
  const l = o !== void 0 ? o : !!a, d = (f) => typeof n == "function" ? n(f) : f[n], p = (f) => {
    const g = d(f);
    return i.some((y) => d(y) === g);
  }, h = (f, g) => {
    if (!l || !a) return;
    const y = d(f), w = p(f);
    if (g.ctrlKey || g.metaKey)
      a(w ? i.filter((b) => d(b) !== y) : [...i, f]);
    else if (g.shiftKey && i.length > 0) {
      const b = d(i[i.length - 1]), E = t.findIndex((I) => d(I) === y), S = t.findIndex((I) => d(I) === b), P = Math.min(E, S), O = Math.max(E, S), A = t.slice(P, O + 1), _ = [...i];
      A.forEach((I) => {
        const T = d(I);
        _.some((M) => d(M) === T) || _.push(I);
      }), a(_);
    } else
      a(w ? [] : [f]);
  }, v = (f) => {
    f.target === f.currentTarget && l && a && a([]);
  };
  return /* @__PURE__ */ x(
    "div",
    {
      className: U("rounded-md border", c),
      onClick: v,
      children: /* @__PURE__ */ V(gP, { children: [
        /* @__PURE__ */ x(yP, { children: /* @__PURE__ */ x(Yo, { children: e.map((f) => /* @__PURE__ */ x(
          wP,
          {
            style: f.width ? { width: f.width } : void 0,
            children: f.title
          },
          f.key
        )) }) }),
        /* @__PURE__ */ x(bP, { children: r ? /* @__PURE__ */ x(Yo, { children: /* @__PURE__ */ x(
          Ba,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground",
            children: "Carregando..."
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ x(Yo, { children: /* @__PURE__ */ x(
          Ba,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground",
            children: u
          }
        ) }) : t.map((f, g) => {
          const y = d(f), w = p(f);
          return /* @__PURE__ */ x(
            Yo,
            {
              "data-state": w ? "selected" : "",
              onClick: (b) => {
                l ? h(f, b) : s?.(f);
              },
              className: U(
                l || s ? "cursor-pointer" : "",
                l && "select-none",
                w && "!bg-secondary/20"
              ),
              children: e.map((b) => {
                const E = b.dataIndex ? f[b.dataIndex] : void 0;
                return /* @__PURE__ */ x(Ba, { children: b.render ? b.render(E, f, g) : E || "-" }, b.key);
              })
            },
            y
          );
        }) })
      ] })
    }
  );
}
function y7({
  columns: e,
  data: t,
  rowKey: r,
  selectedRow: n,
  onRowSelect: o,
  renderDetail: i,
  renderPagination: a,
  emptyDetailMessage: s = "Nenhum item selecionado",
  emptyDetailDescription: c = "Clique em uma linha da tabela para visualizar os detalhes.",
  className: u,
  tableClassName: l,
  detailClassName: d,
  gridRatio: p = [7, 5]
}) {
  const h = (f) => typeof r == "function" ? r(f) : f[r], v = (f) => {
    if (o) {
      const g = n && h(n) === h(f);
      o(g ? null : f);
    }
  };
  return /* @__PURE__ */ V("div", { className: U("grid grid-cols-1 lg:grid-cols-12 gap-6", u), children: [
    /* @__PURE__ */ x("div", { className: U(`lg:col-span-${p[0]}`, l), children: /* @__PURE__ */ V(Ma, { className: "overflow-hidden", children: [
      /* @__PURE__ */ x("div", { className: "overflow-x-auto", children: /* @__PURE__ */ V("table", { className: "w-full", children: [
        /* @__PURE__ */ x("thead", { children: /* @__PURE__ */ x("tr", { className: "border-b bg-muted/50", children: e.map((f) => /* @__PURE__ */ x(
          "th",
          {
            className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground text-sm",
            style: f.width ? { width: f.width } : void 0,
            children: f.title
          },
          f.key
        )) }) }),
        /* @__PURE__ */ x("tbody", { children: t.length === 0 ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x(
          "td",
          {
            colSpan: e.length,
            className: "text-center py-8 text-muted-foreground text-sm",
            children: "Nenhum registro encontrado"
          }
        ) }) : t.map((f) => {
          const g = h(f), y = n && h(n) === g;
          return /* @__PURE__ */ x(
            "tr",
            {
              onClick: () => v(f),
              className: U(
                "border-b transition-colors cursor-pointer",
                y ? "bg-secondary/20" : "hover:bg-muted/50"
              ),
              children: e.map((w) => {
                const b = w.dataIndex ? f[w.dataIndex] : void 0;
                return /* @__PURE__ */ x("td", { className: "px-4 py-2 align-middle", children: w.render ? w.render(b, f) : b || "-" }, w.key);
              })
            },
            g
          );
        }) })
      ] }) }),
      a && /* @__PURE__ */ x("div", { className: "border-t", children: a() })
    ] }) }),
    /* @__PURE__ */ x("div", { className: U(`lg:col-span-${p[1]}`, d), children: n && i ? /* @__PURE__ */ x(Ma, { className: "sticky top-6", children: i(n) }) : /* @__PURE__ */ V(Ma, { className: "p-12 flex flex-col items-center justify-center text-center min-h-[400px]", children: [
      /* @__PURE__ */ x(S_, { className: "h-12 w-12 text-muted-foreground mb-4" }),
      /* @__PURE__ */ x("h4", { className: "text-lg font-semibold mb-2", children: s }),
      /* @__PURE__ */ x("p", { className: "text-sm text-muted-foreground max-w-sm", children: c })
    ] }) })
  ] });
}
const b7 = j0, w7 = $0, x7 = nc, qY = L0, OT = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  Qs,
  {
    className: U(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
OT.displayName = Qs.displayName;
const HY = xi(
  "fixed z-[201] gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), GY = m.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ V(qY, { children: [
  /* @__PURE__ */ x(OT, {}),
  /* @__PURE__ */ V(
    ec,
    {
      ref: o,
      className: U(HY({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ V(nc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ x(Bf, { className: "h-4 w-4" }),
          /* @__PURE__ */ x("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
GY.displayName = ec.displayName;
const YY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: U(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
YY.displayName = "SheetHeader";
const XY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: U(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
XY.displayName = "SheetFooter";
const ZY = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  tc,
  {
    ref: r,
    className: U("text-lg font-semibold text-foreground", e),
    ...t
  }
));
ZY.displayName = tc.displayName;
const JY = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ x(
  rc,
  {
    ref: r,
    className: U("text-sm text-muted-foreground", e),
    ...t
  }
));
JY.displayName = rc.displayName;
const E7 = ({
  children: e,
  isAuthenticated: t,
  redirectTo: r = "/"
}) => {
  const n = Lw();
  return t ? e : /* @__PURE__ */ x(e_, { to: r, state: { from: n }, replace: !0 });
};
function AT(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: QY } = Object.prototype, { getPrototypeOf: Pm } = Object, { iterator: vl, toStringTag: CT } = Symbol, gl = /* @__PURE__ */ ((e) => (t) => {
  const r = QY.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), rr = (e) => (e = e.toLowerCase(), (t) => gl(t) === e), yl = (e) => (t) => typeof t === e, { isArray: Do } = Array, ho = yl("undefined");
function Qi(e) {
  return e !== null && !ho(e) && e.constructor !== null && !ho(e.constructor) && bt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const TT = rr("ArrayBuffer");
function e9(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && TT(e.buffer), t;
}
const t9 = yl("string"), bt = yl("function"), _T = yl("number"), ea = (e) => e !== null && typeof e == "object", r9 = (e) => e === !0 || e === !1, Ka = (e) => {
  if (gl(e) !== "object")
    return !1;
  const t = Pm(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(CT in e) && !(vl in e);
}, n9 = (e) => {
  if (!ea(e) || Qi(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, o9 = rr("Date"), i9 = rr("File"), a9 = rr("Blob"), s9 = rr("FileList"), c9 = (e) => ea(e) && bt(e.pipe), l9 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || bt(e.append) && ((t = gl(e)) === "formdata" || // detect form-data instance
  t === "object" && bt(e.toString) && e.toString() === "[object FormData]"));
}, u9 = rr("URLSearchParams"), [d9, f9, p9, h9] = ["ReadableStream", "Request", "Response", "Headers"].map(rr), m9 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ta(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Do(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (Qi(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function kT(e, t) {
  if (Qi(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, NT = (e) => !ho(e) && e !== bn;
function Rf() {
  const { caseless: e, skipUndefined: t } = NT(this) && this || {}, r = {}, n = (o, i) => {
    const a = e && kT(r, i) || i;
    Ka(r[a]) && Ka(o) ? r[a] = Rf(r[a], o) : Ka(o) ? r[a] = Rf({}, o) : Do(o) ? r[a] = o.slice() : (!t || !ho(o)) && (r[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && ta(arguments[o], n);
  return r;
}
const v9 = (e, t, r, { allOwnKeys: n } = {}) => (ta(t, (o, i) => {
  r && bt(o) ? e[i] = AT(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), g9 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), y9 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, b9 = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Pm(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, w9 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, x9 = (e) => {
  if (!e) return null;
  if (Do(e)) return e;
  let t = e.length;
  if (!_T(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, E9 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pm(Uint8Array)), S9 = (e, t) => {
  const n = (e && e[vl]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, P9 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, O9 = rr("HTMLFormElement"), A9 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ww = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), C9 = rr("RegExp"), IT = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ta(r, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, T9 = (e) => {
  IT(e, (t, r) => {
    if (bt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (bt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, _9 = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Do(e) ? n(e) : n(String(e).split(t)), r;
}, k9 = () => {
}, N9 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function I9(e) {
  return !!(e && bt(e.append) && e[CT] === "FormData" && e[vl]);
}
const R9 = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ea(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Qi(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Do(n) ? [] : {};
        return ta(n, (a, s) => {
          const c = r(a, o + 1);
          !ho(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, M9 = rr("AsyncFunction"), D9 = (e) => e && (ea(e) || bt(e)) && bt(e.then) && bt(e.catch), RT = ((e, t) => e ? setImmediate : t ? ((r, n) => (bn.addEventListener("message", ({ source: o, data: i }) => {
  o === bn && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), bn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  bt(bn.postMessage)
), j9 = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || RT, $9 = (e) => e != null && bt(e[vl]), k = {
  isArray: Do,
  isArrayBuffer: TT,
  isBuffer: Qi,
  isFormData: l9,
  isArrayBufferView: e9,
  isString: t9,
  isNumber: _T,
  isBoolean: r9,
  isObject: ea,
  isPlainObject: Ka,
  isEmptyObject: n9,
  isReadableStream: d9,
  isRequest: f9,
  isResponse: p9,
  isHeaders: h9,
  isUndefined: ho,
  isDate: o9,
  isFile: i9,
  isBlob: a9,
  isRegExp: C9,
  isFunction: bt,
  isStream: c9,
  isURLSearchParams: u9,
  isTypedArray: E9,
  isFileList: s9,
  forEach: ta,
  merge: Rf,
  extend: v9,
  trim: m9,
  stripBOM: g9,
  inherits: y9,
  toFlatObject: b9,
  kindOf: gl,
  kindOfTest: rr,
  endsWith: w9,
  toArray: x9,
  forEachEntry: S9,
  matchAll: P9,
  isHTMLForm: O9,
  hasOwnProperty: ww,
  hasOwnProp: ww,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: IT,
  freezeMethods: T9,
  toObjectSet: _9,
  toCamelCase: A9,
  noop: k9,
  toFiniteNumber: N9,
  findKey: kT,
  global: bn,
  isContextDefined: NT,
  isSpecCompliantForm: I9,
  toJSONObject: R9,
  isAsyncFn: M9,
  isThenable: D9,
  setImmediate: RT,
  asap: j9,
  isIterable: $9
};
function re(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
k.inherits(re, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const MT = re.prototype, DT = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  DT[e] = { value: e };
});
Object.defineProperties(re, DT);
Object.defineProperty(MT, "isAxiosError", { value: !0 });
re.from = (e, t, r, n, o, i) => {
  const a = Object.create(MT);
  k.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return re.call(a, s, c, r, n, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", i && Object.assign(a, i), a;
};
const L9 = null;
function Mf(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function jT(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xw(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = jT(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function F9(e) {
  return k.isArray(e) && !e.some(Mf);
}
const B9 = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function bl(e, t, r) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = k.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, g) {
    return !k.isUndefined(g[f]);
  });
  const n = r.metaTokens, o = r.visitor || l, i = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (k.isDate(v))
      return v.toISOString();
    if (k.isBoolean(v))
      return v.toString();
    if (!c && k.isBlob(v))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(v) || k.isTypedArray(v) ? c && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, f, g) {
    let y = v;
    if (v && !g && typeof v == "object") {
      if (k.endsWith(f, "{}"))
        f = n ? f : f.slice(0, -2), v = JSON.stringify(v);
      else if (k.isArray(v) && F9(v) || (k.isFileList(v) || k.endsWith(f, "[]")) && (y = k.toArray(v)))
        return f = jT(f), y.forEach(function(b, E) {
          !(k.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? xw([f], E, i) : a === null ? f : f + "[]",
            u(b)
          );
        }), !1;
    }
    return Mf(v) ? !0 : (t.append(xw(g, f, i), u(v)), !1);
  }
  const d = [], p = Object.assign(B9, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Mf
  });
  function h(v, f) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      d.push(v), k.forEach(v, function(y, w) {
        (!(k.isUndefined(y) || y === null) && o.call(
          t,
          y,
          k.isString(w) ? w.trim() : w,
          f,
          p
        )) === !0 && h(y, f ? f.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Ew(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Om(e, t) {
  this._pairs = [], e && bl(e, this, t);
}
const $T = Om.prototype;
$T.append = function(t, r) {
  this._pairs.push([t, r]);
};
$T.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ew);
  } : Ew;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function z9(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function LT(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || z9;
  k.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = k.isURLSearchParams(t) ? t.toString() : new Om(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Sw {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    k.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const FT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, U9 = typeof URLSearchParams < "u" ? URLSearchParams : Om, W9 = typeof FormData < "u" ? FormData : null, K9 = typeof Blob < "u" ? Blob : null, V9 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: U9,
    FormData: W9,
    Blob: K9
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Am = typeof window < "u" && typeof document < "u", Df = typeof navigator == "object" && navigator || void 0, q9 = Am && (!Df || ["ReactNative", "NativeScript", "NS"].indexOf(Df.product) < 0), H9 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", G9 = Am && window.location.href || "http://localhost", Y9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Am,
  hasStandardBrowserEnv: q9,
  hasStandardBrowserWebWorkerEnv: H9,
  navigator: Df,
  origin: G9
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Y9,
  ...V9
};
function X9(e, t) {
  return bl(e, new at.classes.URLSearchParams(), {
    visitor: function(r, n, o, i) {
      return at.isNode && k.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Z9(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function J9(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function BT(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= r.length;
    return a = !a && k.isArray(o) ? o.length : a, c ? (k.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !k.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && k.isArray(o[a]) && (o[a] = J9(o[a])), !s);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const r = {};
    return k.forEachEntry(e, (n, o) => {
      t(Z9(n), o, r, 0);
    }), r;
  }
  return null;
}
function Q9(e, t, r) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ra = {
  transitional: FT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = k.isObject(t);
    if (i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return o ? JSON.stringify(BT(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return X9(t, this.formSerializer).toString();
      if ((s = k.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return bl(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Q9(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ra.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? re.from(s, re.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ra.headers[e] = {};
});
const eX = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), tX = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && eX[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Pw = Symbol("internals");
function qo(e) {
  return e && String(e).trim().toLowerCase();
}
function Va(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Va) : String(e);
}
function rX(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nX = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dd(e, t, r, n, o) {
  if (k.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!k.isString(t)) {
    if (k.isString(n))
      return t.indexOf(n) !== -1;
    if (k.isRegExp(n))
      return n.test(t);
  }
}
function oX(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function iX(e, t) {
  const r = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
let wt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, c, u) {
      const l = qo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = k.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = Va(s));
    }
    const a = (s, c) => k.forEach(s, (u, l) => i(u, l, c));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (k.isString(t) && (t = t.trim()) && !nX(t))
      a(tX(t), r);
    else if (k.isObject(t) && k.isIterable(t)) {
      let s = {}, c, u;
      for (const l of t) {
        if (!k.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = l[0]] = (c = s[u]) ? k.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      a(s, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = qo(t), t) {
      const n = k.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return rX(o);
        if (k.isFunction(r))
          return r.call(this, o, n);
        if (k.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = qo(t), t) {
      const n = k.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || dd(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = qo(a), a) {
        const s = k.findKey(n, a);
        s && (!r || dd(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || dd(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return k.forEach(this, (o, i) => {
      const a = k.findKey(n, i);
      if (a) {
        r[a] = Va(o), delete r[i];
        return;
      }
      const s = t ? oX(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Va(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && k.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Pw] = this[Pw] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = qo(a);
      n[s] || (iX(o, a), n[s] = !0);
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(wt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
k.freezeMethods(wt);
function fd(e, t) {
  const r = this || ra, n = t || r, o = wt.from(n.headers);
  let i = n.data;
  return k.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function zT(e) {
  return !!(e && e.__CANCEL__);
}
function jo(e, t, r) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
k.inherits(jo, re, {
  __CANCEL__: !0
});
function UT(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new re(
    "Request failed with status code " + r.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function aX(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function sX(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = n[i];
    a || (a = u), r[o] = c, n[o] = u;
    let d = i, p = 0;
    for (; d !== o; )
      p += r[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < t)
      return;
    const h = l && u - l;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function cX(e, t) {
  let r = 0, n = 1e3 / t, o, i;
  const a = (u, l = Date.now()) => {
    r = l, o = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - r;
    d >= n ? a(u, l) : (o = u, i || (i = setTimeout(() => {
      i = null, a(o);
    }, n - d)));
  }, () => o && a(o)];
}
const Ws = (e, t, r = 3) => {
  let n = 0;
  const o = sX(50, 250);
  return cX((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, c = a - n, u = o(c), l = a <= s;
    n = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s && l ? (s - a) / u : void 0,
      event: i,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, Ow = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Aw = (e) => (...t) => k.asap(() => e(...t)), lX = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, at.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, uX = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      k.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), k.isString(n) && s.push(`path=${n}`), k.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), k.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function dX(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fX(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function WT(e, t, r) {
  let n = !dX(t);
  return e && (n || r == !1) ? fX(e, t) : t;
}
const Cw = (e) => e instanceof wt ? { ...e } : e;
function zn(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, d, p) {
    return k.isPlainObject(u) && k.isPlainObject(l) ? k.merge.call({ caseless: p }, u, l) : k.isPlainObject(l) ? k.merge({}, l) : k.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d, p) {
    if (k.isUndefined(l)) {
      if (!k.isUndefined(u))
        return n(void 0, u, d, p);
    } else return n(u, l, d, p);
  }
  function i(u, l) {
    if (!k.isUndefined(l))
      return n(void 0, l);
  }
  function a(u, l) {
    if (k.isUndefined(l)) {
      if (!k.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, l);
  }
  function s(u, l, d) {
    if (d in t)
      return n(u, l);
    if (d in e)
      return n(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, l, d) => o(Cw(u), Cw(l), d, !0)
  };
  return k.forEach(Object.keys({ ...e, ...t }), function(l) {
    const d = c[l] || o, p = d(e[l], t[l], l);
    k.isUndefined(p) && d !== s || (r[l] = p);
  }), r;
}
const KT = (e) => {
  const t = zn({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  if (t.headers = a = wt.from(a), t.url = LT(WT(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), k.isFormData(r)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (k.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, d]) => {
        u.includes(l.toLowerCase()) && a.set(l, d);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (n && k.isFunction(n) && (n = n(t)), n || n !== !1 && lX(t.url))) {
    const c = o && i && uX.read(i);
    c && a.set(o, c);
  }
  return t;
}, pX = typeof XMLHttpRequest < "u", hX = pX && function(e) {
  return new Promise(function(r, n) {
    const o = KT(e);
    let i = o.data;
    const a = wt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, l, d, p, h, v;
    function f() {
      h && h(), v && v(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function y() {
      if (!g)
        return;
      const b = wt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: b,
        config: e,
        request: g
      };
      UT(function(O) {
        r(O), f();
      }, function(O) {
        n(O), f();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (n(new re("Request aborted", re.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(E) {
      const S = E && E.message ? E.message : "Network Error", P = new re(S, re.ERR_NETWORK, e, g);
      P.event = E || null, n(P), g = null;
    }, g.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || FT;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), n(new re(
        E,
        S.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in g && k.forEach(a.toJSON(), function(E, S) {
      g.setRequestHeader(S, E);
    }), k.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), u && ([p, v] = Ws(u, !0), g.addEventListener("progress", p)), c && g.upload && ([d, h] = Ws(c), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (b) => {
      g && (n(!b || b.type ? new jo(null, e, g) : b), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = aX(o.url);
    if (w && at.protocols.indexOf(w) === -1) {
      n(new re("Unsupported protocol " + w + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, mX = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, s();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof re ? l : new jo(l instanceof Error ? l.message : l));
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => k.asap(s), c;
  }
}, vX = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, gX = async function* (e, t) {
  for await (const r of yX(e))
    yield* vX(r, t);
}, yX = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Tw = (e, t, r, n) => {
  const o = gX(e, t);
  let i = 0, a, s = (c) => {
    a || (a = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: l } = await o.next();
        if (u) {
          s(), c.close();
          return;
        }
        let d = l.byteLength;
        if (r) {
          let p = i += d;
          r(p);
        }
        c.enqueue(new Uint8Array(l));
      } catch (u) {
        throw s(u), u;
      }
    },
    cancel(c) {
      return s(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, _w = 64 * 1024, { isFunction: Ra } = k, bX = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(k.global), {
  ReadableStream: kw,
  TextEncoder: Nw
} = k.global, Iw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, wX = (e) => {
  e = k.merge.call({
    skipUndefined: !0
  }, bX, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Ra(t) : typeof fetch == "function", i = Ra(r), a = Ra(n);
  if (!o)
    return !1;
  const s = o && Ra(kw), c = o && (typeof Nw == "function" ? /* @__PURE__ */ ((v) => (f) => v.encode(f))(new Nw()) : async (v) => new Uint8Array(await new r(v).arrayBuffer())), u = i && s && Iw(() => {
    let v = !1;
    const f = new r(at.origin, {
      body: new kw(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }).headers.has("Content-Type");
    return v && !f;
  }), l = a && s && Iw(() => k.isReadableStream(new n("").body)), d = {
    stream: l && ((v) => v.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !d[v] && (d[v] = (f, g) => {
      let y = f && f[v];
      if (y)
        return y.call(f);
      throw new re(`Response type '${v}' is not supported`, re.ERR_NOT_SUPPORT, g);
    });
  });
  const p = async (v) => {
    if (v == null)
      return 0;
    if (k.isBlob(v))
      return v.size;
    if (k.isSpecCompliantForm(v))
      return (await new r(at.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (k.isArrayBufferView(v) || k.isArrayBuffer(v))
      return v.byteLength;
    if (k.isURLSearchParams(v) && (v = v + ""), k.isString(v))
      return (await c(v)).byteLength;
  }, h = async (v, f) => {
    const g = k.toFiniteNumber(v.getContentLength());
    return g ?? p(f);
  };
  return async (v) => {
    let {
      url: f,
      method: g,
      data: y,
      signal: w,
      cancelToken: b,
      timeout: E,
      onDownloadProgress: S,
      onUploadProgress: P,
      responseType: O,
      headers: A,
      withCredentials: _ = "same-origin",
      fetchOptions: I
    } = KT(v), T = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let M = mX([w, b && b.toAbortSignal()], E), D = null;
    const N = M && M.unsubscribe && (() => {
      M.unsubscribe();
    });
    let z;
    try {
      if (P && u && g !== "get" && g !== "head" && (z = await h(A, y)) !== 0) {
        let ie = new r(f, {
          method: "POST",
          body: y,
          duplex: "half"
        }), ne;
        if (k.isFormData(y) && (ne = ie.headers.get("content-type")) && A.setContentType(ne), ie.body) {
          const [te, oe] = Ow(
            z,
            Ws(Aw(P))
          );
          y = Tw(ie.body, _w, te, oe);
        }
      }
      k.isString(_) || (_ = _ ? "include" : "omit");
      const L = i && "credentials" in r.prototype, B = {
        ...I,
        signal: M,
        method: g.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: L ? _ : void 0
      };
      D = i && new r(f, B);
      let R = await (i ? T(D, I) : T(f, B));
      const F = l && (O === "stream" || O === "response");
      if (l && (S || F && N)) {
        const ie = {};
        ["status", "statusText", "headers"].forEach((ue) => {
          ie[ue] = R[ue];
        });
        const ne = k.toFiniteNumber(R.headers.get("content-length")), [te, oe] = S && Ow(
          ne,
          Ws(Aw(S), !0)
        ) || [];
        R = new n(
          Tw(R.body, _w, te, () => {
            oe && oe(), N && N();
          }),
          ie
        );
      }
      O = O || "text";
      let ee = await d[k.findKey(d, O) || "text"](R, v);
      return !F && N && N(), await new Promise((ie, ne) => {
        UT(ie, ne, {
          data: ee,
          headers: wt.from(R.headers),
          status: R.status,
          statusText: R.statusText,
          config: v,
          request: D
        });
      });
    } catch (L) {
      throw N && N(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, v, D),
        {
          cause: L.cause || L
        }
      ) : re.from(L, L && L.code, v, D);
    }
  };
}, xX = /* @__PURE__ */ new Map(), VT = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, i = [
    n,
    o,
    r
  ];
  let a = i.length, s = a, c, u, l = xX;
  for (; s--; )
    c = i[s], u = l.get(c), u === void 0 && l.set(c, u = s ? /* @__PURE__ */ new Map() : wX(t)), l = u;
  return u;
};
VT();
const Cm = {
  http: L9,
  xhr: hX,
  fetch: {
    get: VT
  }
};
k.forEach(Cm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Rw = (e) => `- ${e}`, EX = (e) => k.isFunction(e) || e === null || e === !1;
function SX(e, t) {
  e = k.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const i = {};
  for (let a = 0; a < r; a++) {
    n = e[a];
    let s;
    if (o = n, !EX(n) && (o = Cm[(s = String(n)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${s}'`);
    if (o && (k.isFunction(o) || (o = o.get(t))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? a.length > 1 ? `since :
` + a.map(Rw).join(`
`) : " " + Rw(a[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const qT = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: SX,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cm
};
function pd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jo(null, e);
}
function Mw(e) {
  return pd(e), e.headers = wt.from(e.headers), e.data = fd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), qT.getAdapter(e.adapter || ra.adapter, e)(e).then(function(n) {
    return pd(e), n.data = fd.call(
      e,
      e.transformResponse,
      n
    ), n.headers = wt.from(n.headers), n;
  }, function(n) {
    return zT(n) || (pd(e), n && n.response && (n.response.data = fd.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = wt.from(n.response.headers))), Promise.reject(n);
  });
}
const HT = "1.13.1", wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Dw = {};
wl.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + HT + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new re(
        o(a, " has been removed" + (r ? " in " + r : "")),
        re.ERR_DEPRECATED
      );
    return r && !Dw[a] && (Dw[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
wl.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function PX(e, t, r) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new re("option " + i + " must be " + c, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new re("Unknown option " + i, re.ERR_BAD_OPTION);
  }
}
const qa = {
  assertOptions: PX,
  validators: wl
}, nr = qa.validators;
let On = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Sw(),
      response: new Sw()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = zn(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && qa.assertOptions(n, {
      silentJSONParsing: nr.transitional(nr.boolean),
      forcedJSONParsing: nr.transitional(nr.boolean),
      clarifyTimeoutError: nr.transitional(nr.boolean)
    }, !1), o != null && (k.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : qa.assertOptions(o, {
      encode: nr.function,
      serialize: nr.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), qa.assertOptions(r, {
      baseUrl: nr.spelling("baseURL"),
      withXsrfToken: nr.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && k.merge(
      i.common,
      i[r.method]
    );
    i && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = wt.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(r) === !1 || (c = c && f.synchronous, s.unshift(f.fulfilled, f.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(f) {
      u.push(f.fulfilled, f.rejected);
    });
    let l, d = 0, p;
    if (!c) {
      const v = [Mw.bind(this), void 0];
      for (v.unshift(...s), v.push(...u), p = v.length, l = Promise.resolve(r); d < p; )
        l = l.then(v[d++], v[d++]);
      return l;
    }
    p = s.length;
    let h = r;
    for (; d < p; ) {
      const v = s[d++], f = s[d++];
      try {
        h = v(h);
      } catch (g) {
        f.call(this, g);
        break;
      }
    }
    try {
      l = Mw.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = u.length; d < p; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = zn(this.defaults, t);
    const r = WT(t.baseURL, t.url, t.allowAbsoluteUrls);
    return LT(r, t.params, t.paramsSerializer);
  }
};
k.forEach(["delete", "get", "head", "options"], function(t) {
  On.prototype[t] = function(r, n) {
    return this.request(zn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(zn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  On.prototype[t] = r(), On.prototype[t + "Form"] = r(!0);
});
let OX = class GT {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      n.reason || (n.reason = new jo(i, a, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new GT(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function AX(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function CX(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const jf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(jf).forEach(([e, t]) => {
  jf[t] = e;
});
function YT(e) {
  const t = new On(e), r = AT(On.prototype.request, t);
  return k.extend(r, On.prototype, t, { allOwnKeys: !0 }), k.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return YT(zn(e, o));
  }, r;
}
const Re = YT(ra);
Re.Axios = On;
Re.CanceledError = jo;
Re.CancelToken = OX;
Re.isCancel = zT;
Re.VERSION = HT;
Re.toFormData = bl;
Re.AxiosError = re;
Re.Cancel = Re.CanceledError;
Re.all = function(t) {
  return Promise.all(t);
};
Re.spread = AX;
Re.isAxiosError = CX;
Re.mergeConfig = zn;
Re.AxiosHeaders = wt;
Re.formToJSON = (e) => BT(k.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = qT.getAdapter;
Re.HttpStatusCode = jf;
Re.default = Re;
const {
  Axios: O7,
  AxiosError: A7,
  CanceledError: C7,
  isCancel: T7,
  CancelToken: _7,
  VERSION: k7,
  all: N7,
  Cancel: I7,
  isAxiosError: R7,
  spread: M7,
  toFormData: D7,
  AxiosHeaders: j7,
  HttpStatusCode: $7,
  formToJSON: L7,
  getAdapter: F7,
  mergeConfig: B7
} = Re;
let mn = null, $f = "";
const z7 = (e) => {
  mn = e;
}, U7 = (e) => {
  $f = e, yr.updateBaseURL(e);
};
class TX {
  instance;
  constructor() {
    this.instance = Re.create({
      baseURL: $f,
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 6e4
    }), this.setupInterceptors();
  }
  updateBaseURL(t) {
    this.instance.defaults.baseURL = t;
  }
  setupInterceptors() {
    this.instance.interceptors.request.use((t) => {
      const r = localStorage.getItem("@IdentityProvider:accessToken");
      return r && (t.headers.Authorization = `Bearer ${r}`), mn && mn.showLoader(), t;
    }), this.instance.interceptors.response.use(
      (t) => (mn && mn.hideLoader(), t),
      async (t) => {
        mn && mn.hideLoader();
        const r = t.config;
        if (t.response?.status === 401 && !r._retry) {
          r._retry = !0;
          const o = localStorage.getItem("@IdentityProvider:refreshToken");
          if (o)
            try {
              const i = await Re.post(
                `${$f}/auth/RefreshToken`,
                { refreshToken: o },
                {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ), { accessToken: a, refreshToken: s } = i.data;
              return localStorage.setItem("@IdentityProvider:accessToken", a), s && localStorage.setItem("@IdentityProvider:refreshToken", s), r.headers.Authorization = `Bearer ${a}`, this.instance(r);
            } catch (i) {
              return localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), Promise.reject(i);
            }
          else
            r.url?.includes("/auth/") || r.url?.includes("IdentifyUser") || r.url?.includes("LoginWithContract") || (window.location.href = "/");
        }
        const n = this.transformError(t);
        return Promise.reject(n);
      }
    );
  }
  transformError(t) {
    if (t.response) {
      const { status: r, data: n } = t.response;
      let o = n.message || n.title, i = n.errors;
      if (!i && typeof n == "object" && !o) {
        const a = Object.keys(n);
        if (a.length > 0 && a.every((c) => Array.isArray(n[c]))) {
          i = n;
          const c = a.length;
          o = c === 1 ? "Erro de validação no formulário" : `${c} erros de validação no formulário`;
        }
      }
      if (!o && i) {
        const a = Object.keys(i).length;
        o = a === 1 ? "Erro de validação no formulário" : `${a} erros de validação no formulário`;
      }
      return o || (o = "Erro na requisição"), {
        message: o,
        status: r,
        errors: i,
        isApiError: !0
      };
    } else return t.request ? {
      message: "Erro de conexão. Verifique sua internet.",
      status: 0,
      isApiError: !0
    } : {
      message: t.message || "Erro desconhecido",
      status: 500,
      isApiError: !0
    };
  }
  async get(t, r) {
    const n = await this.instance.get(t, r);
    return n.data && typeof n.data == "object" && "data" in n.data ? n.data : {
      data: n.data,
      success: !0,
      statusCode: n.status
    };
  }
  async post(t, r, n) {
    const o = await this.instance.post(t, r, n);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
  async put(t, r, n) {
    const o = await this.instance.put(t, r, n);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
  async delete(t, r) {
    const n = await this.instance.delete(t, r);
    return n.data && typeof n.data == "object" && "data" in n.data ? n.data : {
      data: n.data,
      success: !0,
      statusCode: n.status
    };
  }
  async patch(t, r, n) {
    const o = await this.instance.patch(t, r, n);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
}
const yr = new TX();
class hd {
  static async identify(t) {
    return (await yr.post("/auth/IdentifyUser", {
      username: t.username,
      password: t.password
    })).data;
  }
  static async loginWithContract(t) {
    const n = (await yr.post("/auth/LoginWithContract", t)).data, { accessToken: o, refreshToken: i, user: a, contract: s } = n;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", i), localStorage.setItem("@IdentityProvider:user", JSON.stringify(a)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(s)), n;
  }
  static async login(t) {
    const n = (await yr.post("/auth/login", {
      username: t.username,
      password: t.password
    })).data, { accessToken: o, refreshToken: i, user: a } = n;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", i), localStorage.setItem("@IdentityProvider:user", JSON.stringify(a)), n;
  }
  static logout() {
    localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract");
  }
  static isAuthenticated() {
    return !!localStorage.getItem("@IdentityProvider:accessToken");
  }
  static getCurrentUser() {
    const t = localStorage.getItem("@IdentityProvider:user");
    return t ? JSON.parse(t) : null;
  }
  static getAccessToken() {
    return localStorage.getItem("@IdentityProvider:accessToken");
  }
  static getRefreshToken() {
    return localStorage.getItem("@IdentityProvider:refreshToken");
  }
  static async logoutFromServer() {
    try {
      await yr.post("/auth/Logout");
    } finally {
      this.logout();
    }
  }
  static async logoutAllDevices() {
    try {
      await yr.post("/auth/LogoutAllDevices");
    } finally {
      this.logout();
    }
  }
  static async refreshAccessToken() {
    const t = this.getRefreshToken();
    if (!t)
      throw new Error("Refresh token não encontrado");
    try {
      const n = (await yr.post("/auth/RefreshToken", {
        refreshToken: t
      })).data, { accessToken: o, refreshToken: i } = n;
      return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", i), n;
    } catch (r) {
      throw this.logout(), r;
    }
  }
  static async revokeRefreshToken(t) {
    const r = t || this.getRefreshToken();
    r && await yr.post("/auth/RevokeRefreshToken", {
      refreshToken: r
    });
  }
  static async getActiveSessions() {
    return (await yr.get("/auth/GetActiveSessions")).data;
  }
  static isTokenExpiringSoon(t, r = 5) {
    try {
      const o = JSON.parse(atob(t.split(".")[1])).exp * 1e3, i = Date.now();
      return (o - i) / (1e3 * 60) <= r;
    } catch {
      return !0;
    }
  }
  static async ensureValidToken() {
    const t = this.getAccessToken();
    if (!t)
      return !1;
    if (this.isTokenExpiringSoon(t))
      try {
        return await this.refreshAccessToken(), !0;
      } catch {
        return !1;
      }
    return !0;
  }
}
const XT = m.createContext(null), _X = () => {
  const e = m.useContext(XT);
  if (!e)
    throw new Error("useAuth must be used within AuthProvider");
  return e;
}, W7 = ({ children: e, onLogout: t }) => {
  const [r, n] = m.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:user");
    return y ? JSON.parse(y) : null;
  }), [o, i] = m.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:contract");
    return y ? JSON.parse(y) : null;
  }), [a, s] = m.useState(() => localStorage.getItem("@IdentityProvider:accessToken")), [c, u] = m.useState(() => localStorage.getItem("@IdentityProvider:refreshToken")), l = m.useCallback((y) => {
    n(y.user), i(y.contract), s(y.accessToken), u(y.refreshToken), localStorage.setItem("@IdentityProvider:user", JSON.stringify(y.user)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(y.contract)), localStorage.setItem("@IdentityProvider:accessToken", y.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", y.refreshToken);
  }, []), d = m.useCallback(() => {
    n(null), i(null), s(null), u(null), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), t?.();
  }, [t]), p = m.useCallback(async () => {
    await hd.logoutAllDevices(), d();
  }, [d]), h = m.useCallback(async () => {
    try {
      const y = await hd.refreshAccessToken();
      y && (s(y.accessToken), u(y.refreshToken), localStorage.setItem("@IdentityProvider:accessToken", y.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", y.refreshToken));
    } catch {
      d();
    }
  }, [d]), v = m.useCallback(async () => {
    try {
      return await hd.getActiveSessions();
    } catch {
      return [];
    }
  }, []), f = m.useCallback(
    (y) => {
      if (r) {
        const w = { ...r, ...y };
        n(w), localStorage.setItem("@IdentityProvider:user", JSON.stringify(w));
      }
    },
    [r]
  ), g = !!r && !!a;
  return /* @__PURE__ */ x(
    XT.Provider,
    {
      value: {
        user: r,
        contract: o,
        accessToken: a,
        refreshToken: c,
        isAuthenticated: g,
        login: l,
        logout: d,
        logoutAllDevices: p,
        refreshAccessToken: h,
        getActiveSessions: v,
        updateUser: f
      },
      children: e
    }
  );
}, K7 = ({
  redirectTo: e = "/",
  identityProviderUrl: t,
  onSuccess: r,
  onError: n
}) => {
  const o = Fw(), [i] = t_(), { login: a } = _X();
  return Fe(() => {
    (async () => {
      try {
        const c = i.get("accessToken"), u = i.get("refreshToken");
        if (!c || !u)
          throw new Error("Tokens não encontrados na URL");
        a({
          accessToken: c,
          refreshToken: u,
          user: {
            id: 0,
            username: "",
            email: "",
            name: ""
          },
          contract: {
            contractId: 0,
            clientId: "",
            applicationName: "",
            companyName: "",
            companyDocument: "",
            urlBase: "",
            redirectUris: [],
            maxUsers: 0,
            isIdentityProvider: !1
          }
        }), r && r(), o(e, { replace: !0 });
      } catch (c) {
        console.error("Erro no callback de autenticação:", c), n && n(c);
        const u = t || void 0;
        u ? window.location.href = u : console.error("URL do Identity Provider não configurada");
      }
    })();
  }, [i, a, o, e, t, r, n]), /* @__PURE__ */ x("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background gap-6", children: /* @__PURE__ */ x("div", { className: "w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" }) });
}, V7 = () => {
  const [e, t] = m.useState({});
  return {
    fieldErrors: e,
    setErrors: (i) => {
      if (i.errors) {
        const a = {};
        Object.keys(i.errors).forEach((s) => {
          const c = s.charAt(0).toLowerCase() + s.slice(1);
          a[c] = i.errors[s][0];
        }), t(a);
      }
    },
    clearErrors: () => {
      t({});
    },
    getError: (i) => e[i] || ""
  };
};
function q7(e = {}) {
  const [t, r] = We({
    data: null,
    loading: !1,
    error: null
  });
  return {
    ...t,
    execute: async (i) => {
      r((a) => ({ ...a, loading: !0, error: null }));
      try {
        const a = await i(), s = a && typeof a == "object" && ("total" in a || "page" in a) ? a : a.data || a;
        return r({
          data: s,
          loading: !1,
          error: null
        }), e.onSuccess && e.onSuccess(s), e.showSuccessMessage && a.message && Rd({
          title: "Sucesso",
          description: a.message
        }), s;
      } catch (a) {
        const s = a.isApiError ? a : {
          message: "Erro desconhecido",
          status: 500,
          isApiError: !0
        };
        throw r({
          data: null,
          loading: !1,
          error: s
        }), e.onError && e.onError(s), e.showErrorMessage !== !1 && Rd({
          title: "Erro",
          description: s.message,
          variant: "destructive"
        }), s;
      }
    },
    reset: () => {
      r({
        data: null,
        loading: !1,
        error: null
      });
    },
    isLoading: t.loading,
    hasError: !!t.error,
    hasData: !!t.data
  };
}
const H7 = (e) => {
  const t = Fw(), r = Lw(), n = e.basePath || "", o = (c) => {
    const u = n + c;
    return r.pathname === u || c !== "/" && r.pathname.startsWith(u);
  }, i = (c) => {
    t(n + c);
  }, a = (c, u, l, d) => ({
    key: c,
    label: u,
    icon: d,
    active: o(l),
    onClick: () => i(l)
  });
  return {
    isActive: o,
    handleNavigate: i,
    createMenuItem: a,
    createMenuGroup: (c, u) => ({
      label: c,
      items: u.map((l) => a(l.key, l.label, l.path, l.icon))
    }),
    currentPath: r.pathname
  };
};
export {
  m7 as AppLayout,
  KY as AreaChart,
  W7 as AuthProvider,
  hd as AuthService,
  DX as Badge,
  UY as BarChart,
  EP as Breadcrumb,
  Ha as Button,
  K7 as Callback,
  Ma as Card,
  Pk as CardContent,
  Sk as CardDescription,
  Ok as CardFooter,
  xk as CardHeader,
  Ek as CardTitle,
  t$ as ChartContainer,
  Bk as Checkbox,
  nI as ConfirmModal,
  g7 as DataTable,
  y7 as DataTableWithDetail,
  WM as Dropdown,
  HM as DropdownCheckboxItem,
  mE as DropdownContent,
  FX as DropdownGroup,
  vE as DropdownItem,
  YM as DropdownLabel,
  BX as DropdownPortal,
  UX as DropdownRadioGroup,
  GM as DropdownRadioItem,
  gE as DropdownSeparator,
  XM as DropdownShortcut,
  zX as DropdownSub,
  qM as DropdownSubContent,
  VM as DropdownSubTrigger,
  KM as DropdownTrigger,
  PP as GlobalLoader,
  ZX as GlobalLoaderProvider,
  e0 as Input,
  WY as LineChart,
  eI as Modal,
  LX as ModalClose,
  B0 as ModalContent,
  K0 as ModalDescription,
  U0 as ModalFooter,
  z0 as ModalHeader,
  F0 as ModalOverlay,
  tI as ModalPortal,
  W0 as ModalTitle,
  $X as ModalTrigger,
  SP as Navbar,
  MX as ODataHelper,
  v7 as PageLayout,
  VY as PieChart,
  E7 as ProtectedRoute,
  UD as RadioGroup,
  WD as RadioGroupItem,
  ND as SearchableSelect,
  CD as Select,
  oS as SelectContent,
  WX as SelectGroup,
  iS as SelectItem,
  _D as SelectLabel,
  nS as SelectScrollDownButton,
  rS as SelectScrollUpButton,
  kD as SelectSeparator,
  tS as SelectTrigger,
  TD as SelectValue,
  b7 as Sheet,
  x7 as SheetClose,
  GY as SheetContent,
  JY as SheetDescription,
  XY as SheetFooter,
  YY as SheetHeader,
  OT as SheetOverlay,
  qY as SheetPortal,
  ZY as SheetTitle,
  w7 as SheetTrigger,
  xP as Sidebar,
  Zj as SidebarContent,
  Jj as SidebarFooter,
  Xj as SidebarHeader,
  Qj as SidebarNav,
  e$ as SidebarNavItem,
  YD as Switch,
  gP as Table,
  bP as TableBody,
  Yj as TableCaption,
  Ba as TableCell,
  Gj as TableFooter,
  wP as TableHead,
  yP as TableHeader,
  Yo as TableRow,
  KX as Tabs,
  tj as TabsContent,
  QD as TabsList,
  ej as TabsTrigger,
  iP as Toast,
  Ej as ToastAction,
  aP as ToastClose,
  cP as ToastDescription,
  wj as ToastProvider,
  sP as ToastTitle,
  oP as ToastViewport,
  VX as Toaster,
  GX as Tooltip,
  Hj as TooltipContent,
  HX as TooltipProvider,
  YX as TooltipTrigger,
  Ak as badgeVariants,
  wk as buttonVariants,
  U as cn,
  yr as httpClient,
  Aj as reducer,
  U7 as setApiBaseURL,
  z7 as setGlobalLoaderContext,
  Rd as toast,
  q7 as useApi,
  H7 as useAppNavigation,
  _X as useAuth,
  V7 as useFormErrors,
  XX as useGlobalLoader,
  Cj as useToast
};
