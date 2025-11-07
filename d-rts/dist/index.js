import { jsx as w, Fragment as Zt, jsxs as W } from "react/jsx-runtime";
import * as m from "react";
import Pt, { forwardRef as De, createElement as ta, useState as Ke, useLayoutEffect as ur, isValidElement as Ut, useContext as er, createContext as Rt, PureComponent as ba, useCallback as ve, useMemo as Dr, useRef as me, useImperativeHandle as Lw, useEffect as Be, cloneElement as wa, Children as e_, Component as t_ } from "react";
import * as xa from "react-dom";
import r_, { createPortal as Fw } from "react-dom";
import { useLocation as Bw, Navigate as n_, useNavigate as zw, useSearchParams as o_ } from "react-router-dom";
function _m(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Vs(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = _m(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : _m(e[o], null);
        }
      };
  };
}
function se(...e) {
  return m.useCallback(Vs(...e), e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  const t = /* @__PURE__ */ i_(e), r = m.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = m.Children.toArray(a), c = s.find(c_);
    if (c) {
      const u = c.props.children, l = s.map((d) => d === c ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ w(t, { ...i, ref: o, children: m.isValidElement(u) ? m.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ w(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var a_ = /* @__PURE__ */ An("Slot");
// @__NO_SIDE_EFFECTS__
function i_(e) {
  const t = m.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (m.isValidElement(o)) {
      const i = u_(o), s = l_(a, o.props);
      return o.type !== m.Fragment && (s.ref = n ? Vs(n, i) : i), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Uw = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function s_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ w(Zt, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Uw, t;
}
function c_(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Uw;
}
function l_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function u_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Ww(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ww(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function le() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ww(e)) && (n && (n += " "), n += t);
  return n;
}
const km = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Nm = le, Ea = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return Nm(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((u) => {
    const l = r?.[u], d = a?.[u];
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
        ...a,
        ...s
      }[f]) : {
        ...a,
        ...s
      }[f] === g;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return Nm(e, i, c, r?.class, r?.className);
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Im = (e) => {
  const t = f_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Kw = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), p_ = (e) => {
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
var h_ = {
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
const m_ = De(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => ta(
    "svg",
    {
      ref: c,
      ...h_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Kw("lucide", o),
      ...!a && !p_(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([u, l]) => ta(u, l)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (e, t) => {
  const r = De(
    ({ className: n, ...o }, a) => ta(m_, {
      ref: a,
      iconNode: t,
      className: Kw(
        `lucide-${d_(Im(e))}`,
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
const v_ = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], g_ = je("bell", v_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], oo = je("check", y_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lf = je("chevron-down", b_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], x_ = je("chevron-left", w_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ff = je("chevron-right", E_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], P_ = je("chevron-up", S_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], A_ = je("circle-alert", O_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Vw = je("circle", C_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T_ = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], __ = je("languages", T_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], N_ = je("loader-circle", k_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I_ = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], qw = je("log-out", I_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R_ = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], M_ = je("moon", R_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D_ = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Hw = je("palette", D_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], $_ = je("plus", j_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L_ = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], F_ = je("refresh-cw", L_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], z_ = je("search", B_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], W_ = je("square-pen", U_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K_ = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], V_ = je("sun", K_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q_ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], H_ = je("trash-2", q_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Y_ = je("user", G_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X_ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Bf = je("x", X_), zf = "-", Z_ = (e) => {
  const t = Q_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(zf);
      return s[0] === "" && s.length !== 1 && s.shift(), Gw(s, t) || J_(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, Gw = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Gw(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(zf);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, Rm = /^\[(.+)\]$/, J_ = (e) => {
  if (Rm.test(e)) {
    const t = Rm.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Q_ = (e) => {
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
      const a = o === "" ? t : Mm(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ek(o)) {
        md(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      md(i, Mm(t, a), r, n);
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
}, ek = (e) => e.isThemeGetter, tk = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : o(a, i);
    }
  };
}, vd = "!", gd = ":", rk = gd.length, nk = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, u;
    for (let v = 0; v < o.length; v++) {
      let f = o[v];
      if (i === 0 && s === 0) {
        if (f === gd) {
          a.push(o.slice(c, v)), c = v + rk;
          continue;
        }
        if (f === "/") {
          u = v;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" ? i-- : f === "(" ? s++ : f === ")" && s--;
    }
    const l = a.length === 0 ? o : o.substring(c), d = ok(l), p = d !== l, h = u && u > c ? u - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + gd, a = n;
    n = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, ok = (e) => e.endsWith(vd) ? e.substring(0, e.length - 1) : e.startsWith(vd) ? e.substring(1) : e, ak = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let a = [];
    return n.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, ik = (e) => ({
  cache: tk(e.cacheSize),
  parseClassName: nk(e),
  sortModifiers: ak(e),
  ...Z_(e)
}), sk = /\s+/, ck = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(sk);
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
    const x = a(p).join(":"), b = h ? x + vd : x, E = b + y;
    if (i.includes(E))
      continue;
    i.push(E);
    const S = o(y, g);
    for (let P = 0; P < S.length; ++P) {
      const O = S[P];
      i.push(b + O);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function lk() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Yw(t)) && (n && (n += " "), n += r);
  return n;
}
const Yw = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Yw(e[n])) && (r && (r += " "), r += t);
  return r;
};
function uk(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const u = t.reduce((l, d) => d(l), e());
    return r = ik(u), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const l = ck(c, r);
    return o(c, l), l;
  }
  return function() {
    return a(lk.apply(null, arguments));
  };
}
const Ue = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Xw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zw = /^\((?:(\w[\w-]*):)?(.+)\)$/i, dk = /^\d+\/\d+$/, fk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, mk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => dk.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), Wr = (e) => !!e && Number.isInteger(Number(e)), xl = (e) => e.endsWith("%") && ie(e.slice(0, -1)), yr = (e) => fk.test(e), gk = () => !0, yk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pk.test(e) && !hk.test(e)
), Jw = () => !1, bk = (e) => mk.test(e), wk = (e) => vk.test(e), xk = (e) => !G(e) && !Y(e), Ek = (e) => vo(e, t0, Jw), G = (e) => Xw.test(e), dn = (e) => vo(e, r0, yk), El = (e) => vo(e, Ck, ie), Dm = (e) => vo(e, Qw, Jw), Sk = (e) => vo(e, e0, wk), oi = (e) => vo(e, n0, bk), Y = (e) => Zw.test(e), Lo = (e) => go(e, r0), Pk = (e) => go(e, Tk), jm = (e) => go(e, Qw), Ok = (e) => go(e, t0), Ak = (e) => go(e, e0), ai = (e) => go(e, n0, !0), vo = (e, t, r) => {
  const n = Xw.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, go = (e, t, r = !1) => {
  const n = Zw.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Qw = (e) => e === "position" || e === "percentage", e0 = (e) => e === "image" || e === "url", t0 = (e) => e === "length" || e === "size" || e === "bg-size", r0 = (e) => e === "length", Ck = (e) => e === "number", Tk = (e) => e === "family-name", n0 = (e) => e === "shadow", _k = () => {
  const e = Ue("color"), t = Ue("font"), r = Ue("text"), n = Ue("font-weight"), o = Ue("tracking"), a = Ue("leading"), i = Ue("breakpoint"), s = Ue("container"), c = Ue("spacing"), u = Ue("radius"), l = Ue("shadow"), d = Ue("inset-shadow"), p = Ue("text-shadow"), h = Ue("drop-shadow"), v = Ue("blur"), f = Ue("perspective"), g = Ue("aspect"), y = Ue("ease"), x = Ue("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  }, Wr, Y, G], M = () => [Wr, "auto", Y, G], D = () => ["auto", "min", "max", "fr", Y, G], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...A()], B = () => [qn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], R = () => [e, Y, G], F = () => [...E(), jm, Dm, {
    position: [Y, G]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ae = () => ["auto", "cover", "contain", Ok, Ek, {
    size: [Y, G]
  }], ne = () => [xl, Lo, dn], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Y,
    G
  ], oe = () => ["", ie, Lo, dn], ue = () => ["solid", "dashed", "dotted", "double"], $e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ie, xl, jm, Dm], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    Y,
    G
  ], j = () => ["none", ie, Y, G], q = () => ["none", ie, Y, G], J = () => [ie, Y, G], $ = () => [qn, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [yr],
      breakpoint: [yr],
      color: [gk],
      container: [yr],
      "drop-shadow": [yr],
      ease: ["in", "out", "in-out"],
      font: [xk],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [yr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [yr],
      shadow: [yr],
      spacing: ["px", ie],
      text: [yr],
      "text-shadow": [yr],
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
        columns: [ie, G, Y, s]
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
        flex: [ie, qn, "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, Y, G]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, Y, G]
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
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
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
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
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
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
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
            screen: [i]
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
        text: ["base", r, Lo, dn]
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
        font: [Pk, G, t]
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
        "line-clamp": [ie, "none", Y, El]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
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
        decoration: [ie, "from-font", "auto", Y, dn]
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
        "underline-offset": [ie, "auto", Y, G]
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
        bg: ae()
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
        }, Ak, Sk]
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
        "outline-offset": [ie, Y, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, Lo, dn]
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
          ai,
          oi
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
        "inset-shadow": ["none", d, ai, oi]
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
        "ring-offset": [ie, dn]
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
        "text-shadow": ["none", p, ai, oi]
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
        opacity: [ie, Y, G]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$e(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $e()
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
        "mask-linear": [ie]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
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
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
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
        "mask-conic": [ie]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
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
        mask: ae()
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
        brightness: [ie, Y, G]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, Y, G]
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
          ai,
          oi
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
        grayscale: ["", ie, Y, G]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, Y, G]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, Y, G]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, Y, G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, Y, G]
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
        "backdrop-brightness": [ie, Y, G]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, Y, G]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, Y, G]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, Y, G]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, Y, G]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, Y, G]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, Y, G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, Y, G]
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
        duration: [ie, "initial", Y, G]
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
        delay: [ie, Y, G]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, Y, G]
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
        stroke: [ie, Lo, dn, El]
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
}, kk = /* @__PURE__ */ uk(_k);
class H7 {
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
      (a) => `contains(tolower(${a}), '${n}')`
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
    const o = Array.isArray(t) ? t : this.extractData(t), a = n ? o.map(n) : o, i = Array.isArray(t) ? t.length : this.extractCount(t);
    return {
      data: a,
      total: i,
      page: r?.page,
      pageSize: r?.pageSize
    };
  }
}
function z(...e) {
  return kk(le(e));
}
const Nk = Ea(
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
), Gi = m.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, loading: o = !1, fullWidth: a = !1, icon: i, iconPosition: s = "left", children: c, disabled: u, ...l }, d) => {
    const p = n ? a_ : "button", h = u || o;
    return /* @__PURE__ */ W(
      p,
      {
        className: z(
          Nk({ variant: t, size: r, className: e }),
          a && "w-full"
        ),
        ref: d,
        disabled: h,
        ...l,
        children: [
          o && /* @__PURE__ */ w(N_, { className: "animate-spin" }),
          !o && i && s === "left" && i,
          c,
          !o && i && s === "right" && i
        ]
      }
    );
  }
);
Gi.displayName = "Button";
const Di = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "div",
  {
    ref: r,
    className: z(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Di.displayName = "Card";
const Ik = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "div",
  {
    ref: r,
    className: z("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Ik.displayName = "CardHeader";
const Rk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "div",
  {
    ref: r,
    className: z(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Rk.displayName = "CardTitle";
const Mk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "div",
  {
    ref: r,
    className: z("text-sm text-muted-foreground", e),
    ...t
  }
));
Mk.displayName = "CardDescription";
const Dk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w("div", { ref: r, className: z("p-6 pt-0", e), ...t }));
Dk.displayName = "CardContent";
const jk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "div",
  {
    ref: r,
    className: z("flex items-center p-6 pt-0", e),
    ...t
  }
));
jk.displayName = "CardFooter";
const o0 = m.forwardRef(
  ({ className: e, type: t, error: r, helperText: n, ...o }, a) => /* @__PURE__ */ W("div", { className: "w-full", children: [
    /* @__PURE__ */ w(
      "input",
      {
        type: t,
        className: z(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          r && "border-destructive focus-visible:ring-destructive",
          e
        ),
        ref: a,
        ...o
      }
    ),
    n && /* @__PURE__ */ w("p", { className: z(
      "mt-1 text-xs",
      r ? "text-destructive" : "text-muted-foreground"
    ), children: n })
  ] })
);
o0.displayName = "Input";
const $k = Ea(
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
function G7({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ w("div", { className: z($k({ variant: t }), e), ...r });
}
function Lk(e, t) {
  const r = m.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ w(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = m.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function xt(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = m.createContext(i), c = r.length;
    r = [...r, i];
    const u = (d) => {
      const { scope: p, children: h, ...v } = d, f = p?.[e]?.[c] || s, g = m.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w(f.Provider, { value: g, children: h });
    };
    u.displayName = a + "Provider";
    function l(d, p) {
      const h = p?.[e]?.[c] || s, v = m.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [u, l];
  }
  const o = () => {
    const a = r.map((i) => m.createContext(i));
    return function(s) {
      const c = s?.[e] || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, Fk(o, ...t)];
}
function Fk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((s, { useScope: c, scopeName: u }) => {
        const d = c(a)[`__scope${u}`];
        return { ...s, ...d };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function V(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var nt = globalThis?.document ? m.useLayoutEffect : () => {
}, Bk = m[" useInsertionEffect ".trim().toString()] || nt;
function Kt({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = zk({
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
        const d = Uk(l) ? l(e) : l;
        d !== e && i.current?.(d);
      } else
        a(l);
    },
    [s, e, a, i]
  );
  return [c, u];
}
function zk({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), o = m.useRef(r), a = m.useRef(t);
  return Bk(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function Uk(e) {
  return typeof e == "function";
}
function qs(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Hs(e) {
  const [t, r] = m.useState(void 0);
  return nt(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, s = u.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        r({ width: i, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function Wk(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var Mt = (e) => {
  const { present: t, children: r } = e, n = Kk(t), o = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), a = se(n.ref, Vk(o));
  return typeof r == "function" || n.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
Mt.displayName = "Presence";
function Kk(e) {
  const [t, r] = m.useState(), n = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = Wk(i, {
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
    const u = ii(n.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), nt(() => {
    const u = n.current, l = o.current;
    if (l !== e) {
      const p = a.current, h = ii(u);
      e ? c("MOUNT") : h === "none" || u?.display === "none" ? c("UNMOUNT") : c(l && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), nt(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const f = ii(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && f && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = ii(n.current));
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
function ii(e) {
  return e?.animationName || "none";
}
function Vk(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var qk = [
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
], Q = qk.reduce((e, t) => {
  const r = /* @__PURE__ */ An(`Primitive.${t}`), n = m.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Uf(e, t) {
  e && xa.flushSync(() => e.dispatchEvent(t));
}
var Gs = "Checkbox", [Hk] = xt(Gs), [Gk, Wf] = Hk(Gs);
function Yk(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: a,
    form: i,
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
  }), [v, f] = m.useState(null), [g, y] = m.useState(null), x = m.useRef(!1), b = v ? !!i || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: a,
    setChecked: h,
    control: v,
    setControl: f,
    name: s,
    form: i,
    value: l,
    hasConsumerStoppedPropagationRef: x,
    required: u,
    defaultChecked: Yr(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ w(
    Gk,
    {
      scope: t,
      ...E,
      children: Xk(d) ? d(E) : n
    }
  );
}
var a0 = "CheckboxTrigger", i0 = m.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: c,
      required: u,
      setControl: l,
      setChecked: d,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: v
    } = Wf(a0, e), f = se(o, l), g = m.useRef(c);
    return m.useEffect(() => {
      const y = a?.form;
      if (y) {
        const x = () => d(g.current);
        return y.addEventListener("reset", x), () => y.removeEventListener("reset", x);
      }
    }, [a, d]), /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Yr(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": d0(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...n,
        ref: f,
        onKeyDown: V(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: V(r, (y) => {
          d((x) => Yr(x) ? !0 : !x), v && h && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
i0.displayName = a0;
var Kf = m.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: l,
      ...d
    } = e;
    return /* @__PURE__ */ w(
      Yk,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: u,
        name: n,
        form: l,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ W(Zt, { children: [
          /* @__PURE__ */ w(
            i0,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ w(
            u0,
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
var s0 = "CheckboxIndicator", c0 = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = Wf(s0, r);
    return /* @__PURE__ */ w(
      Mt,
      {
        present: n || Yr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ w(
          Q.span,
          {
            "data-state": d0(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
c0.displayName = s0;
var l0 = "CheckboxBubbleInput", u0 = m.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      name: u,
      value: l,
      form: d,
      bubbleInput: p,
      setBubbleInput: h
    } = Wf(l0, e), v = se(r, h), f = qs(a), g = Hs(n);
    m.useEffect(() => {
      const x = p;
      if (!x) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, P = !o.current;
      if (f !== a && S) {
        const O = new Event("click", { bubbles: P });
        x.indeterminate = Yr(a), S.call(x, Yr(a) ? !1 : a), x.dispatchEvent(O);
      }
    }, [p, f, a, o]);
    const y = m.useRef(Yr(a) ? !1 : a);
    return /* @__PURE__ */ w(
      Q.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
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
u0.displayName = l0;
function Xk(e) {
  return typeof e == "function";
}
function Yr(e) {
  return e === "indeterminate";
}
function d0(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Zk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  Kf,
  {
    ref: r,
    className: z(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ w(
      c0,
      {
        className: z("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ w(oo, { className: "h-4 w-4" })
      }
    )
  }
));
Zk.displayName = Kf.displayName;
var Jk = m[" useId ".trim().toString()] || (() => {
}), Qk = 0;
function _t(e) {
  const [t, r] = m.useState(Jk());
  return nt(() => {
    r((n) => n ?? String(Qk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function pt(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...r) => t.current?.(...r), []);
}
function eN(e, t = globalThis?.document) {
  const r = pt(e);
  m.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var tN = "DismissableLayer", yd = "dismissableLayer.update", rN = "dismissableLayer.pointerDownOutside", nN = "dismissableLayer.focusOutside", $m, f0 = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yo = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, u = m.useContext(f0), [l, d] = m.useState(null), p = l?.ownerDocument ?? globalThis?.document, [, h] = m.useState({}), v = se(t, (O) => d(O)), f = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = f.indexOf(g), x = l ? f.indexOf(l) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, E = x >= y, S = aN((O) => {
      const A = O.target, _ = [...u.branches].some((I) => I.contains(A));
      !E || _ || (o?.(O), i?.(O), O.defaultPrevented || s?.());
    }, p), P = iN((O) => {
      const A = O.target;
      [...u.branches].some((I) => I.contains(A)) || (a?.(O), i?.(O), O.defaultPrevented || s?.());
    }, p);
    return eN((O) => {
      x === u.layers.size - 1 && (n?.(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
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
    }, []), /* @__PURE__ */ w(
      Q.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: b ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: V(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: V(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: V(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
yo.displayName = tN;
var oN = "DismissableLayerBranch", p0 = m.forwardRef((e, t) => {
  const r = m.useContext(f0), n = m.useRef(null), o = se(t, n);
  return m.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ w(Q.div, { ...e, ref: o });
});
p0.displayName = oN;
function aN(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          h0(
            rN,
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
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function iN(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && h0(nN, r, { originalEvent: a }, {
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
function h0(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, a) : o.dispatchEvent(a);
}
var sN = yo, cN = p0, Sl = "focusScope.autoFocusOnMount", Pl = "focusScope.autoFocusOnUnmount", Fm = { bubbles: !1, cancelable: !0 }, lN = "FocusScope", Ys = m.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = m.useState(null), u = pt(o), l = pt(a), d = m.useRef(null), p = se(t, (f) => c(f)), h = m.useRef({
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
      const x = new MutationObserver(y);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", g), x.disconnect();
      };
    }
  }, [n, s, h.paused]), m.useEffect(() => {
    if (s) {
      zm.add(h);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const y = new CustomEvent(Sl, Fm);
        s.addEventListener(Sl, u), s.dispatchEvent(y), y.defaultPrevented || (uN(mN(m0(s)), { select: !0 }), document.activeElement === f && Kr(s));
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
        const x = f.currentTarget, [b, E] = dN(x);
        b && E ? !f.shiftKey && y === E ? (f.preventDefault(), r && Kr(b, { select: !0 })) : f.shiftKey && y === b && (f.preventDefault(), r && Kr(E, { select: !0 })) : y === x && f.preventDefault();
      }
    },
    [r, n, h.paused]
  );
  return /* @__PURE__ */ w(Q.div, { tabIndex: -1, ...i, ref: p, onKeyDown: v });
});
Ys.displayName = lN;
function uN(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Kr(n, { select: t }), document.activeElement !== r) return;
}
function dN(e) {
  const t = m0(e), r = Bm(t, e), n = Bm(t.reverse(), e);
  return [r, n];
}
function m0(e) {
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
    if (!fN(r, { upTo: t })) return r;
}
function fN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && pN(e) && t && e.select();
  }
}
var zm = hN();
function hN() {
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
function mN(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vN = "Portal", Sa = m.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = m.useState(!1);
  nt(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? r_.createPortal(/* @__PURE__ */ w(Q.div, { ...n, ref: t }), i) : null;
});
Sa.displayName = vN;
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
var ar = function() {
  return ar = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ar.apply(this, arguments);
};
function v0(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function gN(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ji = "right-scroll-bar-position", $i = "width-before-scroll-bar", yN = "with-scroll-bars-hidden", bN = "--removed-body-scroll-bar-size";
function Al(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wN(e, t) {
  var r = Ke(function() {
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
var xN = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Km = /* @__PURE__ */ new WeakMap();
function EN(e, t) {
  var r = wN(null, function(n) {
    return e.forEach(function(o) {
      return Al(o, n);
    });
  });
  return xN(function() {
    var n = Km.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Al(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Al(s, i);
      });
    }
    Km.set(r, e);
  }, [e]), r;
}
function SN(e) {
  return e;
}
function PN(e, t) {
  t === void 0 && (t = SN);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var c = function() {
        var l = i;
        i = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), r = {
        push: function(l) {
          i.push(l), u();
        },
        filter: function(l) {
          return i = i.filter(l), r;
        }
      };
    }
  };
  return o;
}
function ON(e) {
  e === void 0 && (e = {});
  var t = PN(null);
  return t.options = ar({ async: !0, ssr: !1 }, e), t;
}
var g0 = function(e) {
  var t = e.sideCar, r = v0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, ar({}, r));
};
g0.isSideCarExport = !0;
function AN(e, t) {
  return e.useMedium(t), g0;
}
var y0 = ON(), Cl = function() {
}, Xs = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: Cl,
    onWheelCapture: Cl,
    onTouchMoveCapture: Cl
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, v = e.noIsolation, f = e.inert, g = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, b = e.gapMode, E = v0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = p, P = EN([r, t]), O = ar(ar({}, E), o);
  return m.createElement(
    m.Fragment,
    null,
    l && m.createElement(S, { sideCar: y0, removeScrollBar: u, shards: d, noRelative: h, noIsolation: v, inert: f, setCallbacks: a, allowPinchZoom: !!g, lockRef: r, gapMode: b }),
    i ? m.cloneElement(m.Children.only(s), ar(ar({}, O), { ref: P })) : m.createElement(x, ar({}, O, { className: c, ref: P }), s)
  );
});
Xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xs.classNames = {
  fullWidth: $i,
  zeroRight: ji
};
var CN = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function TN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = CN();
  return t && e.setAttribute("nonce", t), e;
}
function _N(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function kN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var NN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = TN()) && (_N(t, r), kN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, IN = function() {
  var e = NN();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, b0 = function() {
  var e = IN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, RN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tl = function(e) {
  return parseInt(e || "", 10) || 0;
}, MN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tl(r), Tl(n), Tl(o)];
}, DN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return RN;
  var t = MN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, jN = b0(), Qn = "data-scroll-locked", $N = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(yN, ` {
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
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ji, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat($i, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat($i, " .").concat($i, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Qn, `] {
    `).concat(bN, ": ").concat(s, `px;
  }
`);
}, Vm = function() {
  var e = parseInt(document.body.getAttribute(Qn) || "0", 10);
  return isFinite(e) ? e : 0;
}, LN = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Qn, (Vm() + 1).toString()), function() {
      var e = Vm() - 1;
      e <= 0 ? document.body.removeAttribute(Qn) : document.body.setAttribute(Qn, e.toString());
    };
  }, []);
}, FN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  LN();
  var a = m.useMemo(function() {
    return DN(o);
  }, [o]);
  return m.createElement(jN, { styles: $N(a, !t, o, r ? "" : "!important") });
}, bd = !1;
if (typeof window < "u")
  try {
    var si = Object.defineProperty({}, "passive", {
      get: function() {
        return bd = !0, !0;
      }
    });
    window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
  } catch {
    bd = !1;
  }
var Hn = bd ? { passive: !1 } : !1, BN = function(e) {
  return e.tagName === "TEXTAREA";
}, w0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !BN(e) && r[t] === "visible")
  );
}, zN = function(e) {
  return w0(e, "overflowY");
}, UN = function(e) {
  return w0(e, "overflowX");
}, qm = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = x0(e, n);
    if (o) {
      var a = E0(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, WN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, KN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, x0 = function(e, t) {
  return e === "v" ? zN(t) : UN(t);
}, E0 = function(e, t) {
  return e === "v" ? WN(t) : KN(t);
}, VN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, qN = function(e, t, r, n, o) {
  var a = VN(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), u = !1, l = i > 0, d = 0, p = 0;
  do {
    if (!s)
      break;
    var h = E0(e, s), v = h[0], f = h[1], g = h[2], y = f - g - a * v;
    (v || y) && x0(e, s) && (d += y, p += v);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(p) < 1) && (u = !0), u;
}, ci = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hm = function(e) {
  return [e.deltaX, e.deltaY];
}, Gm = function(e) {
  return e && "current" in e ? e.current : e;
}, HN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, GN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, YN = 0, Gn = [];
function XN(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), o = m.useState(YN++)[0], a = m.useState(b0)[0], i = m.useRef(e);
  m.useEffect(function() {
    i.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = gN([e.lockRef.current], (e.shards || []).map(Gm), !0).filter(Boolean);
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
      return !i.current.allowPinchZoom;
    var y = ci(f), x = r.current, b = "deltaX" in f ? f.deltaX : x[0] - y[0], E = "deltaY" in f ? f.deltaY : x[1] - y[1], S, P = f.target, O = Math.abs(b) > Math.abs(E) ? "h" : "v";
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
    return qN(_, g, f, _ === "h" ? b : E);
  }, []), c = m.useCallback(function(f) {
    var g = f;
    if (!(!Gn.length || Gn[Gn.length - 1] !== a)) {
      var y = "deltaY" in g ? Hm(g) : ci(g), x = t.current.filter(function(S) {
        return S.name === g.type && (S.target === g.target || g.target === S.shadowParent) && HN(S.delta, y);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var b = (i.current.shards || []).map(Gm).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
        }), E = b.length > 0 ? s(g, b[0]) : !i.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(f, g, y, x) {
    var b = { name: f, delta: g, target: y, should: x, shadowParent: ZN(y) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== b;
      });
    }, 1);
  }, []), l = m.useCallback(function(f) {
    r.current = ci(f), n.current = void 0;
  }, []), d = m.useCallback(function(f) {
    u(f.type, Hm(f), f.target, s(f, e.lockRef.current));
  }, []), p = m.useCallback(function(f) {
    u(f.type, ci(f), f.target, s(f, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Gn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Hn), document.addEventListener("touchmove", c, Hn), document.addEventListener("touchstart", l, Hn), function() {
      Gn = Gn.filter(function(f) {
        return f !== a;
      }), document.removeEventListener("wheel", c, Hn), document.removeEventListener("touchmove", c, Hn), document.removeEventListener("touchstart", l, Hn);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    v ? m.createElement(a, { styles: GN(o) }) : null,
    h ? m.createElement(FN, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ZN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const JN = AN(y0, XN);
var Zs = m.forwardRef(function(e, t) {
  return m.createElement(Xs, ar({}, e, { ref: t, sideCar: JN }));
});
Zs.classNames = Xs.classNames;
var QN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yn = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), ui = {}, _l = 0, S0 = function(e) {
  return e && (e.host || S0(e.parentNode));
}, eI = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = S0(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, tI = function(e, t, r, n) {
  var o = eI(t, Array.isArray(e) ? e : [e]);
  ui[r] || (ui[r] = /* @__PURE__ */ new WeakMap());
  var a = ui[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        l(p);
      else
        try {
          var h = p.getAttribute(n), v = h !== null && h !== "false", f = (Yn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Yn.set(p, f), a.set(p, g), i.push(p), f === 1 && v && li.set(p, !0), g === 1 && p.setAttribute(r, "true"), v || p.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return l(t), s.clear(), _l++, function() {
    i.forEach(function(d) {
      var p = Yn.get(d) - 1, h = a.get(d) - 1;
      Yn.set(d, p), a.set(d, h), p || (li.has(d) || d.removeAttribute(n), li.delete(d)), h || d.removeAttribute(r);
    }), _l--, _l || (Yn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), ui = {});
  };
}, qf = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = QN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), tI(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Js = "Dialog", [P0] = xt(Js), [rI, tr] = P0(Js), O0 = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u, l] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Js
  });
  return /* @__PURE__ */ w(
    rI,
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
      modal: i,
      children: r
    }
  );
};
O0.displayName = Js;
var A0 = "DialogTrigger", C0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(A0, r), a = se(t, o.triggerRef);
    return /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yf(o.open),
        ...n,
        ref: a,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
C0.displayName = A0;
var Hf = "DialogPortal", [nI, T0] = P0(Hf, {
  forceMount: void 0
}), _0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = tr(Hf, t);
  return /* @__PURE__ */ w(nI, { scope: t, forceMount: r, children: m.Children.map(n, (i) => /* @__PURE__ */ w(Mt, { present: r || a.open, children: /* @__PURE__ */ w(Sa, { asChild: !0, container: o, children: i }) })) });
};
_0.displayName = Hf;
var Yi = "DialogOverlay", k0 = m.forwardRef(
  (e, t) => {
    const r = T0(Yi, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = tr(Yi, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ w(Mt, { present: n || a.open, children: /* @__PURE__ */ w(aI, { ...o, ref: t }) }) : null;
  }
);
k0.displayName = Yi;
var oI = /* @__PURE__ */ An("DialogOverlay.RemoveScroll"), aI = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(Yi, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ w(Zs, { as: oI, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ w(
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
), Cn = "DialogContent", N0 = m.forwardRef(
  (e, t) => {
    const r = T0(Cn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = tr(Cn, e.__scopeDialog);
    return /* @__PURE__ */ w(Mt, { present: n || a.open, children: a.modal ? /* @__PURE__ */ w(iI, { ...o, ref: t }) : /* @__PURE__ */ w(sI, { ...o, ref: t }) });
  }
);
N0.displayName = Cn;
var iI = m.forwardRef(
  (e, t) => {
    const r = tr(Cn, e.__scopeDialog), n = m.useRef(null), o = se(t, r.contentRef, n);
    return m.useEffect(() => {
      const a = n.current;
      if (a) return qf(a);
    }, []), /* @__PURE__ */ w(
      I0,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: V(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), sI = m.forwardRef(
  (e, t) => {
    const r = tr(Cn, e.__scopeDialog), n = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ w(
      I0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (n.current || r.triggerRef.current?.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), I0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = tr(Cn, r), c = m.useRef(null), u = se(t, c);
    return Vf(), /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ w(
        Ys,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ w(
            yo,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Yf(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ W(Zt, { children: [
        /* @__PURE__ */ w(cI, { titleId: s.titleId }),
        /* @__PURE__ */ w(uI, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Gf = "DialogTitle", R0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(Gf, r);
    return /* @__PURE__ */ w(Q.h2, { id: o.titleId, ...n, ref: t });
  }
);
R0.displayName = Gf;
var M0 = "DialogDescription", D0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(M0, r);
    return /* @__PURE__ */ w(Q.p, { id: o.descriptionId, ...n, ref: t });
  }
);
D0.displayName = M0;
var j0 = "DialogClose", $0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(j0, r);
    return /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
$0.displayName = j0;
function Yf(e) {
  return e ? "open" : "closed";
}
var L0 = "DialogTitleWarning", [Y7, F0] = Lk(L0, {
  contentName: Cn,
  titleName: Gf,
  docsSlug: "dialog"
}), cI = ({ titleId: e }) => {
  const t = F0(L0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, lI = "DialogDescriptionWarning", uI = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${F0(lI).contentName}}.`;
  return m.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, B0 = O0, z0 = C0, U0 = _0, Qs = k0, ec = N0, tc = R0, rc = D0, nc = $0;
const dI = B0, X7 = z0, fI = U0, Z7 = nc, W0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  Qs,
  {
    ref: r,
    className: z(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
W0.displayName = Qs.displayName;
const pI = Ea(
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
), K0 = m.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ W(fI, { children: [
  /* @__PURE__ */ w(W0, {}),
  /* @__PURE__ */ W(
    ec,
    {
      ref: o,
      className: z(pI({ size: r }), e),
      ...n,
      children: [
        t,
        /* @__PURE__ */ W(nc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ w(Bf, { className: "h-4 w-4" }),
          /* @__PURE__ */ w("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
K0.displayName = ec.displayName;
const V0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: z(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
V0.displayName = "ModalHeader";
const q0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: z(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
q0.displayName = "ModalFooter";
const H0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  tc,
  {
    ref: r,
    className: z(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
H0.displayName = tc.displayName;
const G0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  rc,
  {
    ref: r,
    className: z("text-sm text-muted-foreground", e),
    ...t
  }
));
G0.displayName = rc.displayName;
const hI = m.forwardRef(
  ({
    open: e,
    onOpenChange: t,
    title: r = "Confirmar ação",
    description: n = "Tem certeza que deseja continuar?",
    confirmText: o = "Confirmar",
    cancelText: a = "Cancelar",
    onConfirm: i,
    onCancel: s,
    variant: c = "primary",
    loading: u = !1
  }, l) => /* @__PURE__ */ w(dI, { open: e, onOpenChange: t, children: /* @__PURE__ */ W(K0, { ref: l, children: [
    /* @__PURE__ */ W(V0, { children: [
      /* @__PURE__ */ w(H0, { children: r }),
      n && /* @__PURE__ */ w(G0, { children: n })
    ] }),
    /* @__PURE__ */ W(q0, { children: [
      /* @__PURE__ */ w(Gi, { variant: "outline", onClick: () => {
        s?.(), t?.(!1);
      }, disabled: u, children: a }),
      /* @__PURE__ */ w(Gi, { variant: c, onClick: () => {
        i?.();
      }, loading: u, children: o })
    ] })
  ] }) })
);
hI.displayName = "ConfirmModal";
function oc(e) {
  const t = e + "CollectionProvider", [r, n] = xt(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (f) => {
    const { scope: g, children: y } = f, x = Pt.useRef(null), b = Pt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w(o, { scope: g, itemMap: b, collectionRef: x, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ An(s), u = Pt.forwardRef(
    (f, g) => {
      const { scope: y, children: x } = f, b = a(s, y), E = se(g, b.collectionRef);
      return /* @__PURE__ */ w(c, { ref: E, children: x });
    }
  );
  u.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ An(l), h = Pt.forwardRef(
    (f, g) => {
      const { scope: y, children: x, ...b } = f, E = Pt.useRef(null), S = se(g, E), P = a(l, y);
      return Pt.useEffect(() => (P.itemMap.set(E, { ref: E, ...b }), () => void P.itemMap.delete(E))), /* @__PURE__ */ w(p, { [d]: "", ref: S, children: x });
    }
  );
  h.displayName = l;
  function v(f) {
    const g = a(e + "CollectionConsumer", f);
    return Pt.useCallback(() => {
      const x = g.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, O) => b.indexOf(P.ref.current) - b.indexOf(O.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: h },
    v,
    n
  ];
}
var mI = m.createContext(void 0);
function Pa(e) {
  const t = m.useContext(mI);
  return e || t || "ltr";
}
const vI = ["top", "right", "bottom", "left"], Zr = Math.min, At = Math.max, Xi = Math.round, di = Math.floor, cr = (e) => ({
  x: e,
  y: e
}), gI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yI = {
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
function bo(e) {
  return e.split("-")[1];
}
function Xf(e) {
  return e === "x" ? "y" : "x";
}
function Zf(e) {
  return e === "y" ? "height" : "width";
}
const bI = /* @__PURE__ */ new Set(["top", "bottom"]);
function ir(e) {
  return bI.has(_r(e)) ? "y" : "x";
}
function Jf(e) {
  return Xf(ir(e));
}
function wI(e, t, r) {
  r === void 0 && (r = !1);
  const n = bo(e), o = Jf(e), a = Zf(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Zi(i)), [i, Zi(i)];
}
function xI(e) {
  const t = Zi(e);
  return [xd(e), t, xd(t)];
}
function xd(e) {
  return e.replace(/start|end/g, (t) => yI[t]);
}
const Ym = ["left", "right"], Xm = ["right", "left"], EI = ["top", "bottom"], SI = ["bottom", "top"];
function PI(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Xm : Ym : t ? Ym : Xm;
    case "left":
    case "right":
      return t ? EI : SI;
    default:
      return [];
  }
}
function OI(e, t, r, n) {
  const o = bo(e);
  let a = PI(_r(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(xd)))), a;
}
function Zi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gI[t]);
}
function AI(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Y0(e) {
  return typeof e != "number" ? AI(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ji(e) {
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
  const a = ir(t), i = Jf(t), s = Zf(i), c = _r(t), u = a === "y", l = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, p = n[s] / 2 - o[s] / 2;
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
  switch (bo(t)) {
    case "start":
      h[i] -= p * (r && u ? -1 : 1);
      break;
    case "end":
      h[i] += p * (r && u ? -1 : 1);
      break;
  }
  return h;
}
const CI = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = r, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
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
      x,
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
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = x ?? l, d = b ?? d, h = {
      ...h,
      [g]: {
        ...h[g],
        ...E
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
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
async function ra(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Tr(t, e), v = Y0(h), g = s[p ? d === "floating" ? "reference" : "floating" : d], y = Ji(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), x = d === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ji(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: b,
    strategy: c
  }) : x);
  return {
    top: (y.top - S.top + v.top) / E.y,
    bottom: (S.bottom - y.bottom + v.bottom) / E.y,
    left: (y.left - S.left + v.left) / E.x,
    right: (S.right - y.right + v.right) / E.x
  };
}
const TI = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: l = 0
    } = Tr(e, t) || {};
    if (u == null)
      return {};
    const d = Y0(l), p = {
      x: r,
      y: n
    }, h = Jf(o), v = Zf(h), f = await i.getDimensions(u), g = h === "y", y = g ? "top" : "left", x = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", E = a.reference[v] + a.reference[h] - p[h] - a.floating[v], S = p[h] - a.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let O = P ? P[b] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(P))) && (O = s.floating[b] || a.floating[v]);
    const A = E / 2 - S / 2, _ = O / 2 - f[v] / 2 - 1, I = Zr(d[y], _), T = Zr(d[x], _), M = I, D = O - f[v] - T, N = O / 2 - f[v] / 2 + A, U = wd(M, N, D), L = !c.arrow && bo(o) != null && N !== U && a.reference[v] / 2 - (N < M ? I : T) - f[v] / 2 < 0, B = L ? N < M ? N - M : N - D : 0;
    return {
      [h]: p[h] + B,
      data: {
        [h]: U,
        centerOffset: N - U - B,
        ...L && {
          alignmentOffset: B
        }
      },
      reset: L
    };
  }
}), _I = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
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
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = _r(o), x = ir(s), b = _r(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = p || (b || !f ? [Zi(s)] : xI(s)), P = v !== "none";
      !p && P && S.push(...OI(s, f, v, E));
      const O = [s, ...S], A = await ra(t, g), _ = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (l && _.push(A[y]), d) {
        const N = wI(o, i, E);
        _.push(A[N[0]], A[N[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: _
      }], !_.every((N) => N <= 0)) {
        var T, M;
        const N = (((T = a.flip) == null ? void 0 : T.index) || 0) + 1, U = O[N];
        if (U && (!(d === "alignment" ? x !== ir(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((R) => ir(R.placement) === x ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: U
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
                  return F === x || // Create a bias to the `y` side axis due to horizontal
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
  return vI.some((t) => e[t] >= 0);
}
const kI = function(e) {
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
          const a = await ra(t, {
            ...o,
            elementContext: "reference"
          }), i = Jm(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Qm(i)
            }
          };
        }
        case "escaped": {
          const a = await ra(t, {
            ...o,
            altBoundary: !0
          }), i = Jm(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Qm(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, X0 = /* @__PURE__ */ new Set(["left", "top"]);
async function NI(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = _r(r), s = bo(r), c = ir(r) === "y", u = X0.has(i) ? -1 : 1, l = a && c ? -1 : 1, d = Tr(t, e);
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
const II = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await NI(t, e);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, RI = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: x
            } = g;
            return {
              x: y,
              y: x
            };
          }
        },
        ...c
      } = Tr(e, t), u = {
        x: r,
        y: n
      }, l = await ra(t, c), d = ir(_r(o)), p = Xf(d);
      let h = u[p], v = u[d];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = h + l[g], b = h - l[y];
        h = wd(x, h, b);
      }
      if (i) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", x = v + l[g], b = v - l[y];
        v = wd(x, v, b);
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
            [p]: a,
            [d]: i
          }
        }
      };
    }
  };
}, MI = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: a,
        middlewareData: i
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
        const b = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[b] + g.mainAxis, S = a.reference[p] + a.reference[b] - g.mainAxis;
        h < E ? h = E : h > S && (h = S);
      }
      if (u) {
        var y, x;
        const b = p === "y" ? "width" : "height", E = X0.has(_r(o)), S = a.reference[d] - a.floating[b] + (E && ((y = i.offset) == null ? void 0 : y[d]) || 0) + (E ? 0 : g.crossAxis), P = a.reference[d] + a.reference[b] + (E ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (E ? g.crossAxis : 0);
        v < S ? v = S : v > P && (v = P);
      }
      return {
        [p]: h,
        [d]: v
      };
    }
  };
}, DI = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Tr(e, t), l = await ra(t, u), d = _r(o), p = bo(o), h = ir(o) === "y", {
        width: v,
        height: f
      } = a.floating;
      let g, y;
      d === "top" || d === "bottom" ? (g = d, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = p === "end" ? "top" : "bottom");
      const x = f - l.top - l.bottom, b = v - l.left - l.right, E = Zr(f - l[g], x), S = Zr(v - l[y], b), P = !t.middlewareData.shift;
      let O = E, A = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = b), (n = t.middlewareData.shift) != null && n.enabled.y && (O = x), P && !p) {
        const I = At(l.left, 0), T = At(l.right, 0), M = At(l.top, 0), D = At(l.bottom, 0);
        h ? A = v - 2 * (I !== 0 || T !== 0 ? I + T : At(l.left, l.right)) : O = f - 2 * (M !== 0 || D !== 0 ? M + D : At(l.top, l.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: O
      });
      const _ = await i.getDimensions(s.floating);
      return v !== _.width || f !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ac() {
  return typeof window < "u";
}
function wo(e) {
  return Z0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vr(e) {
  var t;
  return (t = (Z0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Z0(e) {
  return ac() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function Jt(e) {
  return ac() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function dr(e) {
  return ac() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function ev(e) {
  return !ac() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
const jI = /* @__PURE__ */ new Set(["inline", "contents"]);
function Oa(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !jI.has(o);
}
const $I = /* @__PURE__ */ new Set(["table", "td", "th"]);
function LI(e) {
  return $I.has(wo(e));
}
const FI = [":popover-open", ":modal"];
function ic(e) {
  return FI.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const BI = ["transform", "translate", "scale", "rotate", "perspective"], zI = ["transform", "translate", "scale", "rotate", "perspective", "filter"], UI = ["paint", "layout", "strict", "content"];
function Qf(e) {
  const t = ep(), r = Jt(e) ? Qt(e) : e;
  return BI.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || zI.some((n) => (r.willChange || "").includes(n)) || UI.some((n) => (r.contain || "").includes(n));
}
function WI(e) {
  let t = Jr(e);
  for (; dr(t) && !ao(t); ) {
    if (Qf(t))
      return t;
    if (ic(t))
      return null;
    t = Jr(t);
  }
  return null;
}
function ep() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const KI = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ao(e) {
  return KI.has(wo(e));
}
function Qt(e) {
  return kt(e).getComputedStyle(e);
}
function sc(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jr(e) {
  if (wo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ev(e) && e.host || // Fallback.
    vr(e)
  );
  return ev(t) ? t.host : t;
}
function J0(e) {
  const t = Jr(e);
  return ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dr(t) && Oa(t) ? t : J0(t);
}
function na(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = J0(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = kt(o);
  if (a) {
    const s = Ed(i);
    return t.concat(i, i.visualViewport || [], Oa(o) ? o : [], s && r ? na(s) : []);
  }
  return t.concat(o, na(o, [], r));
}
function Ed(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Q0(e) {
  const t = Qt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = dr(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Xi(r) !== a || Xi(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function tp(e) {
  return Jt(e) ? e : e.contextElement;
}
function eo(e) {
  const t = tp(e);
  if (!dr(t))
    return cr(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Q0(t);
  let i = (a ? Xi(r.width) : r.width) / n, s = (a ? Xi(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const VI = /* @__PURE__ */ cr(0);
function ex(e) {
  const t = kt(e);
  return !ep() || !t.visualViewport ? VI : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qI(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== kt(e) ? !1 : t;
}
function Tn(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = tp(e);
  let i = cr(1);
  t && (n ? Jt(n) && (i = eo(n)) : i = eo(e));
  const s = qI(a, r, n) ? ex(a) : cr(0);
  let c = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, l = o.width / i.x, d = o.height / i.y;
  if (a) {
    const p = kt(a), h = n && Jt(n) ? kt(n) : n;
    let v = p, f = Ed(v);
    for (; f && n && h !== v; ) {
      const g = eo(f), y = f.getBoundingClientRect(), x = Qt(f), b = y.left + (f.clientLeft + parseFloat(x.paddingLeft)) * g.x, E = y.top + (f.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, u *= g.y, l *= g.x, d *= g.y, c += b, u += E, v = kt(f), f = Ed(v);
    }
  }
  return Ji({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function cc(e, t) {
  const r = sc(e).scrollLeft;
  return t ? t.left + r : Tn(vr(e)).left + r;
}
function tx(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - cc(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function HI(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = vr(n), s = t ? ic(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cr(1);
  const l = cr(0), d = dr(n);
  if ((d || !d && !a) && ((wo(n) !== "body" || Oa(i)) && (c = sc(n)), dr(n))) {
    const h = Tn(n);
    u = eo(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const p = i && !d && !a ? tx(i, c) : cr(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + l.x + p.x,
    y: r.y * u.y - c.scrollTop * u.y + l.y + p.y
  };
}
function GI(e) {
  return Array.from(e.getClientRects());
}
function YI(e) {
  const t = vr(e), r = sc(e), n = e.ownerDocument.body, o = At(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = At(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + cc(e);
  const s = -r.scrollTop;
  return Qt(n).direction === "rtl" && (i += At(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const tv = 25;
function XI(e, t) {
  const r = kt(e), n = vr(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = ep();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = cc(n);
  if (u <= 0) {
    const l = n.ownerDocument, d = l.body, p = getComputedStyle(d), h = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(n.clientWidth - d.clientWidth - h);
    v <= tv && (a -= v);
  } else u <= tv && (a += u);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const ZI = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function JI(e, t) {
  const r = Tn(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = dr(e) ? eo(e) : cr(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, u = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function rv(e, t, r) {
  let n;
  if (t === "viewport")
    n = XI(e, r);
  else if (t === "document")
    n = YI(vr(e));
  else if (Jt(t))
    n = JI(t, r);
  else {
    const o = ex(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ji(n);
}
function rx(e, t) {
  const r = Jr(e);
  return r === t || !Jt(r) || ao(r) ? !1 : Qt(r).position === "fixed" || rx(r, t);
}
function QI(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = na(e, [], !1).filter((s) => Jt(s) && wo(s) !== "body"), o = null;
  const a = Qt(e).position === "fixed";
  let i = a ? Jr(e) : e;
  for (; Jt(i) && !ao(i); ) {
    const s = Qt(i), c = Qf(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ZI.has(o.position) || Oa(i) && !c && rx(e, i)) ? n = n.filter((l) => l !== i) : o = s, i = Jr(i);
  }
  return t.set(e, n), n;
}
function eR(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? ic(t) ? [] : QI(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((u, l) => {
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
function tR(e) {
  const {
    width: t,
    height: r
  } = Q0(e);
  return {
    width: t,
    height: r
  };
}
function rR(e, t, r) {
  const n = dr(t), o = vr(t), a = r === "fixed", i = Tn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = cr(0);
  function u() {
    c.x = cc(o);
  }
  if (n || !n && !a)
    if ((wo(t) !== "body" || Oa(o)) && (s = sc(t)), n) {
      const h = Tn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && u();
  a && !n && o && u();
  const l = o && !n && !a ? tx(o, s) : cr(0), d = i.left + s.scrollLeft - c.x - l.x, p = i.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function kl(e) {
  return Qt(e).position === "static";
}
function nv(e, t) {
  if (!dr(e) || Qt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return vr(e) === r && (r = r.ownerDocument.body), r;
}
function nx(e, t) {
  const r = kt(e);
  if (ic(e))
    return r;
  if (!dr(e)) {
    let o = Jr(e);
    for (; o && !ao(o); ) {
      if (Jt(o) && !kl(o))
        return o;
      o = Jr(o);
    }
    return r;
  }
  let n = nv(e, t);
  for (; n && LI(n) && kl(n); )
    n = nv(n, t);
  return n && ao(n) && kl(n) && !Qf(n) ? r : n || WI(e) || r;
}
const nR = async function(e) {
  const t = this.getOffsetParent || nx, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: rR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function oR(e) {
  return Qt(e).direction === "rtl";
}
const aR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HI,
  getDocumentElement: vr,
  getClippingRect: eR,
  getOffsetParent: nx,
  getElementRects: nR,
  getClientRects: GI,
  getDimensions: tR,
  getScale: eo,
  isElement: Jt,
  isRTL: oR
};
function ox(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function iR(e, t) {
  let r = null, n;
  const o = vr(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const u = e.getBoundingClientRect(), {
      left: l,
      top: d,
      width: p,
      height: h
    } = u;
    if (s || t(), !p || !h)
      return;
    const v = di(d), f = di(o.clientWidth - (l + p)), g = di(o.clientHeight - (d + h)), y = di(l), b = {
      rootMargin: -v + "px " + -f + "px " + -g + "px " + -y + "px",
      threshold: At(0, Zr(1, c)) || 1
    };
    let E = !0;
    function S(P) {
      const O = P[0].intersectionRatio;
      if (O !== c) {
        if (!E)
          return i();
        O ? i(!1, O) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !ox(u, e.getBoundingClientRect()) && i(), E = !1;
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
  return i(!0), a;
}
function sR(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, u = tp(e), l = o || a ? [...u ? na(u) : [], ...na(t)] : [];
  l.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const d = u && s ? iR(u, r) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), r();
  }), u && !c && h.observe(u), h.observe(t));
  let v, f = c ? Tn(e) : null;
  c && g();
  function g() {
    const y = Tn(e);
    f && !ox(f, y) && r(), f = y, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var y;
    l.forEach((x) => {
      o && x.removeEventListener("scroll", r), a && x.removeEventListener("resize", r);
    }), d?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const cR = II, lR = RI, uR = _I, dR = DI, fR = kI, ov = TI, pR = MI, hR = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: aR,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return CI(e, t, {
    ...o,
    platform: a
  });
};
var mR = typeof document < "u", vR = function() {
}, Li = mR ? ur : vR;
function Qi(e, t) {
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
        if (!Qi(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !Qi(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ax(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function av(e, t) {
  const r = ax(e);
  return Math.round(t * r) / r;
}
function Nl(e) {
  const t = m.useRef(e);
  return Li(() => {
    t.current = e;
  }), t;
}
function gR(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
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
  Qi(p, n) || h(n);
  const [v, f] = m.useState(null), [g, y] = m.useState(null), x = m.useCallback((R) => {
    R !== P.current && (P.current = R, f(R));
  }, []), b = m.useCallback((R) => {
    R !== O.current && (O.current = R, y(R));
  }, []), E = a || v, S = i || g, P = m.useRef(null), O = m.useRef(null), A = m.useRef(l), _ = c != null, I = Nl(c), T = Nl(o), M = Nl(u), D = m.useCallback(() => {
    if (!P.current || !O.current)
      return;
    const R = {
      placement: t,
      strategy: r,
      middleware: p
    };
    T.current && (R.platform = T.current), hR(P.current, O.current, R).then((F) => {
      const ee = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      N.current && !Qi(A.current, ee) && (A.current = ee, xa.flushSync(() => {
        d(ee);
      }));
    });
  }, [p, t, r, T, M]);
  Li(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const N = m.useRef(!1);
  Li(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Li(() => {
    if (E && (P.current = E), S && (O.current = S), E && S) {
      if (I.current)
        return I.current(E, S, D);
      D();
    }
  }, [E, S, D, I, _]);
  const U = m.useMemo(() => ({
    reference: P,
    floating: O,
    setReference: x,
    setFloating: b
  }), [x, b]), L = m.useMemo(() => ({
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
    const F = av(L.floating, l.x), ee = av(L.floating, l.y);
    return s ? {
      ...R,
      transform: "translate(" + F + "px, " + ee + "px)",
      ...ax(L.floating) >= 1.5 && {
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
    refs: U,
    elements: L,
    floatingStyles: B
  }), [l, D, U, L, B]);
}
const yR = (e) => {
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
}, bR = (e, t) => ({
  ...cR(e),
  options: [e, t]
}), wR = (e, t) => ({
  ...lR(e),
  options: [e, t]
}), xR = (e, t) => ({
  ...pR(e),
  options: [e, t]
}), ER = (e, t) => ({
  ...uR(e),
  options: [e, t]
}), SR = (e, t) => ({
  ...dR(e),
  options: [e, t]
}), PR = (e, t) => ({
  ...fR(e),
  options: [e, t]
}), OR = (e, t) => ({
  ...yR(e),
  options: [e, t]
});
var AR = "Arrow", ix = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ w(
    Q.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ w("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ix.displayName = AR;
var CR = ix, rp = "Popper", [sx, xo] = xt(rp), [TR, cx] = sx(rp), lx = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = m.useState(null);
  return /* @__PURE__ */ w(TR, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
lx.displayName = rp;
var ux = "PopperAnchor", dx = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = cx(ux, r), i = m.useRef(null), s = se(t, i), c = m.useRef(null);
    return m.useEffect(() => {
      const u = c.current;
      c.current = n?.current || i.current, u !== c.current && a.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ w(Q.div, { ...o, ref: s });
  }
);
dx.displayName = ux;
var np = "PopperContent", [_R, kR] = sx(np), fx = m.forwardRef(
  (e, t) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: l = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...f
    } = e, g = cx(np, r), [y, x] = m.useState(null), b = se(t, (K) => x(K)), [E, S] = m.useState(null), P = Hs(E), O = P?.width ?? 0, A = P?.height ?? 0, _ = n + (a !== "center" ? "-" + a : ""), I = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, T = Array.isArray(u) ? u : [u], M = T.length > 0, D = {
      padding: I,
      boundary: T.filter(IR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: N, floatingStyles: U, placement: L, isPositioned: B, middlewareData: R } = gR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...K) => sR(...K, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        bR({ mainAxis: o + A, alignmentAxis: i }),
        c && wR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? xR() : void 0,
          ...D
        }),
        c && ER({ ...D }),
        SR({
          ...D,
          apply: ({ elements: K, rects: fe, availableWidth: j, availableHeight: q }) => {
            const { width: J, height: $ } = fe.reference, Ee = K.floating.style;
            Ee.setProperty("--radix-popper-available-width", `${j}px`), Ee.setProperty("--radix-popper-available-height", `${q}px`), Ee.setProperty("--radix-popper-anchor-width", `${J}px`), Ee.setProperty("--radix-popper-anchor-height", `${$}px`);
          }
        }),
        E && OR({ element: E, padding: s }),
        RR({ arrowWidth: O, arrowHeight: A }),
        p && PR({ strategy: "referenceHidden", ...D })
      ]
    }), [F, ee] = mx(L), ae = pt(v);
    nt(() => {
      B && ae?.();
    }, [B, ae]);
    const ne = R.arrow?.x, te = R.arrow?.y, oe = R.arrow?.centerOffset !== 0, [ue, $e] = m.useState();
    return nt(() => {
      y && $e(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ w(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: B ? U.transform : "translate(0, -200%)",
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
        children: /* @__PURE__ */ w(
          _R,
          {
            scope: r,
            placedSide: F,
            onArrowChange: S,
            arrowX: ne,
            arrowY: te,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ w(
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
fx.displayName = np;
var px = "PopperArrow", NR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, hx = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = kR(px, n), i = NR[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ w(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ w(
          CR,
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
hx.displayName = px;
function IR(e) {
  return e !== null;
}
var RR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, l] = mx(r), d = { start: "0%", center: "50%", end: "100%" }[l], p = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", f = "";
    return u === "bottom" ? (v = i ? d : `${p}px`, f = `${-c}px`) : u === "top" ? (v = i ? d : `${p}px`, f = `${n.floating.height + c}px`) : u === "right" ? (v = `${-c}px`, f = i ? d : `${h}px`) : u === "left" && (v = `${n.floating.width + c}px`, f = i ? d : `${h}px`), { data: { x: v, y: f } };
  }
});
function mx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var lc = lx, op = dx, ap = fx, ip = hx, Il = "rovingFocusGroup.onEntryFocus", MR = { bubbles: !1, cancelable: !0 }, Aa = "RovingFocusGroup", [Sd, vx, DR] = oc(Aa), [jR, Eo] = xt(
  Aa,
  [DR]
), [$R, LR] = jR(Aa), gx = m.forwardRef(
  (e, t) => /* @__PURE__ */ w(Sd.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w(Sd.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w(FR, { ...e, ref: t }) }) })
);
gx.displayName = Aa;
var FR = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: l = !1,
    ...d
  } = e, p = m.useRef(null), h = se(t, p), v = Pa(a), [f, g] = Kt({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: Aa
  }), [y, x] = m.useState(!1), b = pt(u), E = vx(r), S = m.useRef(!1), [P, O] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(Il, b), () => A.removeEventListener(Il, b);
  }, [b]), /* @__PURE__ */ w(
    $R,
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
      onItemShiftTab: m.useCallback(() => x(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => O((A) => A + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => O((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ w(
        Q.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": n,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: V(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: V(e.onFocus, (A) => {
            const _ = !S.current;
            if (A.target === A.currentTarget && _ && !y) {
              const I = new CustomEvent(Il, MR);
              if (A.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const T = E().filter((L) => L.focusable), M = T.find((L) => L.active), D = T.find((L) => L.id === f), U = [M, D, ...T].filter(
                  Boolean
                ).map((L) => L.ref.current);
                wx(U, l);
              }
            }
            S.current = !1;
          }),
          onBlur: V(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), yx = "RovingFocusGroupItem", bx = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = _t(), u = a || c, l = LR(yx, r), d = l.currentTabStopId === u, p = vx(r), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: f } = l;
    return m.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ w(
      Sd.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ w(
          Q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": l.orientation,
            ...s,
            ref: t,
            onMouseDown: V(e.onMouseDown, (g) => {
              n ? l.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: V(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: V(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = UR(g, l.orientation, l.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let b = p().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") b.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && b.reverse();
                  const E = b.indexOf(g.currentTarget);
                  b = l.loop ? WR(b, E + 1) : b.slice(E + 1);
                }
                setTimeout(() => wx(b));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: f != null }) : i
          }
        )
      }
    );
  }
);
bx.displayName = yx;
var BR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function UR(e, t, r) {
  const n = zR(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return BR[n];
}
function wx(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function WR(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var sp = gx, cp = bx, Pd = ["Enter", " "], KR = ["ArrowDown", "PageUp", "Home"], xx = ["ArrowUp", "PageDown", "End"], VR = [...KR, ...xx], qR = {
  ltr: [...Pd, "ArrowRight"],
  rtl: [...Pd, "ArrowLeft"]
}, HR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ca = "Menu", [oa, GR, YR] = oc(Ca), [Un, Ex] = xt(Ca, [
  YR,
  xo,
  Eo
]), Ta = xo(), Sx = Eo(), [Px, rn] = Un(Ca), [XR, _a] = Un(Ca), Ox = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Ta(t), [c, u] = m.useState(null), l = m.useRef(!1), d = pt(a), p = Pa(o);
  return m.useEffect(() => {
    const h = () => {
      l.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => l.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ w(lc, { ...s, children: /* @__PURE__ */ w(
    Px,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ w(
        XR,
        {
          scope: t,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: l,
          dir: p,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
Ox.displayName = Ca;
var ZR = "MenuAnchor", lp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ta(r);
    return /* @__PURE__ */ w(op, { ...o, ...n, ref: t });
  }
);
lp.displayName = ZR;
var up = "MenuPortal", [JR, Ax] = Un(up, {
  forceMount: void 0
}), Cx = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = rn(up, t);
  return /* @__PURE__ */ w(JR, { scope: t, forceMount: r, children: /* @__PURE__ */ w(Mt, { present: r || a.open, children: /* @__PURE__ */ w(Sa, { asChild: !0, container: o, children: n }) }) });
};
Cx.displayName = up;
var Wt = "MenuContent", [QR, dp] = Un(Wt), Tx = m.forwardRef(
  (e, t) => {
    const r = Ax(Wt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rn(Wt, e.__scopeMenu), i = _a(Wt, e.__scopeMenu);
    return /* @__PURE__ */ w(oa.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ w(Mt, { present: n || a.open, children: /* @__PURE__ */ w(oa.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ w(eM, { ...o, ref: t }) : /* @__PURE__ */ w(tM, { ...o, ref: t }) }) }) });
  }
), eM = m.forwardRef(
  (e, t) => {
    const r = rn(Wt, e.__scopeMenu), n = m.useRef(null), o = se(t, n);
    return m.useEffect(() => {
      const a = n.current;
      if (a) return qf(a);
    }, []), /* @__PURE__ */ w(
      fp,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: V(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), tM = m.forwardRef((e, t) => {
  const r = rn(Wt, e.__scopeMenu);
  return /* @__PURE__ */ w(
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
}), rM = /* @__PURE__ */ An("MenuContent.ScrollLock"), fp = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: v,
      ...f
    } = e, g = rn(Wt, r), y = _a(Wt, r), x = Ta(r), b = Sx(r), E = GR(r), [S, P] = m.useState(null), O = m.useRef(null), A = se(t, O, g.onContentChange), _ = m.useRef(0), I = m.useRef(""), T = m.useRef(0), M = m.useRef(null), D = m.useRef("right"), N = m.useRef(0), U = v ? Zs : m.Fragment, L = v ? { as: rM, allowPinchZoom: !0 } : void 0, B = (F) => {
      const ee = I.current + F, ae = E().filter((K) => !K.disabled), ne = document.activeElement, te = ae.find((K) => K.ref.current === ne)?.textValue, oe = ae.map((K) => K.textValue), ue = hM(oe, ee, te), $e = ae.find((K) => K.textValue === ue)?.ref.current;
      (function K(fe) {
        I.current = fe, window.clearTimeout(_.current), fe !== "" && (_.current = window.setTimeout(() => K(""), 1e3));
      })(ee), $e && setTimeout(() => $e.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), Vf();
    const R = m.useCallback((F) => D.current === M.current?.side && vM(F, M.current?.area), []);
    return /* @__PURE__ */ w(
      QR,
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
        children: /* @__PURE__ */ w(U, { ...L, children: /* @__PURE__ */ w(
          Ys,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: V(a, (F) => {
              F.preventDefault(), O.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ w(
              yo,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ w(
                  sp,
                  {
                    asChild: !0,
                    ...b,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: V(c, (F) => {
                      y.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ w(
                      ap,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Vx(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...x,
                        ...f,
                        ref: A,
                        style: { outline: "none", ...f.style },
                        onKeyDown: V(f.onKeyDown, (F) => {
                          const ae = F.target.closest("[data-radix-menu-content]") === F.currentTarget, ne = F.ctrlKey || F.altKey || F.metaKey, te = F.key.length === 1;
                          ae && (F.key === "Tab" && F.preventDefault(), !ne && te && B(F.key));
                          const oe = O.current;
                          if (F.target !== oe || !VR.includes(F.key)) return;
                          F.preventDefault();
                          const $e = E().filter((K) => !K.disabled).map((K) => K.ref.current);
                          xx.includes(F.key) && $e.reverse(), fM($e);
                        }),
                        onBlur: V(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(_.current), I.current = "");
                        }),
                        onPointerMove: V(
                          e.onPointerMove,
                          aa((F) => {
                            const ee = F.target, ae = N.current !== F.clientX;
                            if (F.currentTarget.contains(ee) && ae) {
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
Tx.displayName = Wt;
var nM = "MenuGroup", pp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ w(Q.div, { role: "group", ...n, ref: t });
  }
);
pp.displayName = nM;
var oM = "MenuLabel", _x = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ w(Q.div, { ...n, ref: t });
  }
);
_x.displayName = oM;
var es = "MenuItem", iv = "menu.itemSelect", uc = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = m.useRef(null), i = _a(es, e.__scopeMenu), s = dp(es, e.__scopeMenu), c = se(t, a), u = m.useRef(!1), l = () => {
      const d = a.current;
      if (!r && d) {
        const p = new CustomEvent(iv, { bubbles: !0, cancelable: !0 });
        d.addEventListener(iv, (h) => n?.(h), { once: !0 }), Uf(d, p), p.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ w(
      kx,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: V(e.onClick, l),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), u.current = !0;
        },
        onPointerUp: V(e.onPointerUp, (d) => {
          u.current || d.currentTarget?.click();
        }),
        onKeyDown: V(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          r || p && d.key === " " || Pd.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
uc.displayName = es;
var kx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = dp(es, r), s = Sx(r), c = m.useRef(null), u = se(t, c), [l, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const v = c.current;
      v && h((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ w(
      oa.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? p,
        children: /* @__PURE__ */ w(cp, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ w(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: V(
              e.onPointerMove,
              aa((v) => {
                n ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: V(
              e.onPointerLeave,
              aa((v) => i.onItemLeave(v))
            ),
            onFocus: V(e.onFocus, () => d(!0)),
            onBlur: V(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), aM = "MenuCheckboxItem", Nx = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ w(jx, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ w(
      uc,
      {
        role: "menuitemcheckbox",
        "aria-checked": ts(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": vp(r),
        onSelect: V(
          o.onSelect,
          () => n?.(ts(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nx.displayName = aM;
var Ix = "MenuRadioGroup", [iM, sM] = Un(
  Ix,
  { value: void 0, onValueChange: () => {
  } }
), Rx = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = pt(n);
    return /* @__PURE__ */ w(iM, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ w(pp, { ...o, ref: t }) });
  }
);
Rx.displayName = Ix;
var Mx = "MenuRadioItem", Dx = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = sM(Mx, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ w(jx, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ w(
      uc,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": vp(a),
        onSelect: V(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Dx.displayName = Mx;
var hp = "MenuItemIndicator", [jx, cM] = Un(
  hp,
  { checked: !1 }
), $x = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = cM(hp, r);
    return /* @__PURE__ */ w(
      Mt,
      {
        present: n || ts(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ w(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": vp(a.checked)
          }
        )
      }
    );
  }
);
$x.displayName = hp;
var lM = "MenuSeparator", Lx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ w(
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
Lx.displayName = lM;
var uM = "MenuArrow", Fx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ta(r);
    return /* @__PURE__ */ w(ip, { ...o, ...n, ref: t });
  }
);
Fx.displayName = uM;
var mp = "MenuSub", [dM, Bx] = Un(mp), zx = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = rn(mp, t), i = Ta(t), [s, c] = m.useState(null), [u, l] = m.useState(null), d = pt(o);
  return m.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ w(lc, { ...i, children: /* @__PURE__ */ w(
    Px,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: u,
      onContentChange: l,
      children: /* @__PURE__ */ w(
        dM,
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
zx.displayName = mp;
var Go = "MenuSubTrigger", Ux = m.forwardRef(
  (e, t) => {
    const r = rn(Go, e.__scopeMenu), n = _a(Go, e.__scopeMenu), o = Bx(Go, e.__scopeMenu), a = dp(Go, e.__scopeMenu), i = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, u = { __scopeMenu: e.__scopeMenu }, l = m.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return m.useEffect(() => l, [l]), m.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ w(lp, { asChild: !0, ...u, children: /* @__PURE__ */ w(
      kx,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Vx(r.open),
        ...e,
        ref: Vs(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: V(
          e.onPointerMove,
          aa((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: V(
          e.onPointerLeave,
          aa((d) => {
            l();
            const p = r.content?.getBoundingClientRect();
            if (p) {
              const h = r.content?.dataset.side, v = h === "right", f = v ? -5 : 5, g = p[v ? "left" : "right"], y = p[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
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
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: V(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          e.disabled || p && d.key === " " || qR[n.dir].includes(d.key) && (r.onOpenChange(!0), r.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Ux.displayName = Go;
var Wx = "MenuSubContent", Kx = m.forwardRef(
  (e, t) => {
    const r = Ax(Wt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rn(Wt, e.__scopeMenu), i = _a(Wt, e.__scopeMenu), s = Bx(Wx, e.__scopeMenu), c = m.useRef(null), u = se(t, c);
    return /* @__PURE__ */ w(oa.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ w(Mt, { present: n || a.open, children: /* @__PURE__ */ w(oa.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ w(
      fp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          i.isUsingKeyboardRef.current && c.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: V(e.onFocusOutside, (l) => {
          l.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: V(e.onEscapeKeyDown, (l) => {
          i.onClose(), l.preventDefault();
        }),
        onKeyDown: V(e.onKeyDown, (l) => {
          const d = l.currentTarget.contains(l.target), p = HR[i.dir].includes(l.key);
          d && p && (a.onOpenChange(!1), s.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Kx.displayName = Wx;
function Vx(e) {
  return e ? "open" : "closed";
}
function ts(e) {
  return e === "indeterminate";
}
function vp(e) {
  return ts(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fM(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function pM(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function hM(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = pM(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const c = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function mM(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function vM(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return mM(r, t);
}
function aa(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var gM = Ox, yM = lp, bM = Cx, wM = Tx, xM = pp, EM = _x, SM = uc, PM = Nx, OM = Rx, AM = Dx, CM = $x, TM = Lx, _M = Fx, kM = zx, NM = Ux, IM = Kx, dc = "DropdownMenu", [RM] = xt(
  dc,
  [Ex]
), lt = Ex(), [MM, qx] = RM(dc), Hx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = lt(t), u = m.useRef(null), [l, d] = Kt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: dc
  });
  return /* @__PURE__ */ w(
    MM,
    {
      scope: t,
      triggerId: _t(),
      triggerRef: u,
      contentId: _t(),
      open: l,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ w(gM, { ...c, open: l, onOpenChange: d, dir: n, modal: s, children: r })
    }
  );
};
Hx.displayName = dc;
var Gx = "DropdownMenuTrigger", Yx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = qx(Gx, r), i = lt(r);
    return /* @__PURE__ */ w(yM, { asChild: !0, ...i, children: /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: Vs(t, a.triggerRef),
        onPointerDown: V(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: V(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Yx.displayName = Gx;
var DM = "DropdownMenuPortal", Xx = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = lt(t);
  return /* @__PURE__ */ w(bM, { ...n, ...r });
};
Xx.displayName = DM;
var Zx = "DropdownMenuContent", Jx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = qx(Zx, r), a = lt(r), i = m.useRef(!1);
    return /* @__PURE__ */ w(
      wM,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: V(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || u;
          (!o.modal || l) && (i.current = !0);
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
Jx.displayName = Zx;
var jM = "DropdownMenuGroup", Qx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ w(xM, { ...o, ...n, ref: t });
  }
);
Qx.displayName = jM;
var $M = "DropdownMenuLabel", eE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ w(EM, { ...o, ...n, ref: t });
  }
);
eE.displayName = $M;
var LM = "DropdownMenuItem", tE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ w(SM, { ...o, ...n, ref: t });
  }
);
tE.displayName = LM;
var FM = "DropdownMenuCheckboxItem", rE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(PM, { ...o, ...n, ref: t });
});
rE.displayName = FM;
var BM = "DropdownMenuRadioGroup", nE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(OM, { ...o, ...n, ref: t });
});
nE.displayName = BM;
var zM = "DropdownMenuRadioItem", oE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(AM, { ...o, ...n, ref: t });
});
oE.displayName = zM;
var UM = "DropdownMenuItemIndicator", aE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(CM, { ...o, ...n, ref: t });
});
aE.displayName = UM;
var WM = "DropdownMenuSeparator", iE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(TM, { ...o, ...n, ref: t });
});
iE.displayName = WM;
var KM = "DropdownMenuArrow", VM = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ w(_M, { ...o, ...n, ref: t });
  }
);
VM.displayName = KM;
var qM = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = lt(t), [s, c] = Kt({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ w(kM, { ...i, open: s, onOpenChange: c, children: r });
}, HM = "DropdownMenuSubTrigger", sE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(NM, { ...o, ...n, ref: t });
});
sE.displayName = HM;
var GM = "DropdownMenuSubContent", cE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ w(
    IM,
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
cE.displayName = GM;
var YM = Hx, XM = Yx, lE = Xx, uE = Jx, ZM = Qx, dE = eE, fE = tE, pE = rE, JM = nE, hE = oE, mE = aE, vE = iE, QM = qM, gE = sE, yE = cE;
const J7 = YM, Q7 = XM, eX = ZM, tX = lE, rX = QM, nX = JM, eD = m.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ W(
  gE,
  {
    ref: o,
    className: z(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ w(Ff, { className: "ml-auto h-4 w-4" })
    ]
  }
));
eD.displayName = gE.displayName;
const tD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  yE,
  {
    ref: r,
    className: z(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
tD.displayName = yE.displayName;
const rD = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ w(lE, { children: /* @__PURE__ */ w(
  uE,
  {
    ref: n,
    sideOffset: t,
    className: z(
      "z-[110] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
rD.displayName = uE.displayName;
const nD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ w(
  fE,
  {
    ref: n,
    className: z(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
nD.displayName = fE.displayName;
const oD = m.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ W(
  pE,
  {
    ref: o,
    className: z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ w("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w(mE, { children: /* @__PURE__ */ w(oo, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
oD.displayName = pE.displayName;
const aD = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ W(
  hE,
  {
    ref: n,
    className: z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ w("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w(mE, { children: /* @__PURE__ */ w(Vw, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
aD.displayName = hE.displayName;
const iD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ w(
  dE,
  {
    ref: n,
    className: z(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
iD.displayName = dE.displayName;
const sD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  vE,
  {
    ref: r,
    className: z("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
sD.displayName = vE.displayName;
const cD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w(
  "span",
  {
    className: z("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
cD.displayName = "DropdownShortcut";
function sv(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var bE = Object.freeze({
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
}), lD = "VisuallyHidden", fc = m.forwardRef(
  (e, t) => /* @__PURE__ */ w(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...bE, ...e.style }
    }
  )
);
fc.displayName = lD;
var uD = fc, dD = [" ", "Enter", "ArrowUp", "ArrowDown"], fD = [" ", "Enter"], _n = "Select", [pc, hc, pD] = oc(_n), [So] = xt(_n, [
  pD,
  xo
]), mc = xo(), [hD, nn] = So(_n), [mD, vD] = So(_n), wE = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: l,
    autoComplete: d,
    disabled: p,
    required: h,
    form: v
  } = e, f = mc(t), [g, y] = m.useState(null), [x, b] = m.useState(null), [E, S] = m.useState(!1), P = Pa(u), [O, A] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: _n
  }), [_, I] = Kt({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: _n
  }), T = m.useRef(null), M = g ? v || !!g.closest("form") : !0, [D, N] = m.useState(/* @__PURE__ */ new Set()), U = Array.from(D).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ w(lc, { ...f, children: /* @__PURE__ */ W(
    hD,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: x,
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
        /* @__PURE__ */ w(pc.Provider, { scope: t, children: /* @__PURE__ */ w(
          mD,
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
        M ? /* @__PURE__ */ W(
          VE,
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
              _ === void 0 ? /* @__PURE__ */ w("option", { value: "" }) : null,
              Array.from(D)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
wE.displayName = _n;
var xE = "SelectTrigger", EE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = mc(r), i = nn(xE, r), s = i.disabled || n, c = se(t, i.onTriggerChange), u = hc(r), l = m.useRef("touch"), [d, p, h] = HE((f) => {
      const g = u().filter((b) => !b.disabled), y = g.find((b) => b.value === i.value), x = GE(g, f, y);
      x !== void 0 && i.onValueChange(x.value);
    }), v = (f) => {
      s || (i.onOpenChange(!0), h()), f && (i.triggerPointerDownPosRef.current = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      });
    };
    return /* @__PURE__ */ w(op, { asChild: !0, ...a, children: /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": qE(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: V(o.onClick, (f) => {
          f.currentTarget.focus(), l.current !== "mouse" && v(f);
        }),
        onPointerDown: V(o.onPointerDown, (f) => {
          l.current = f.pointerType;
          const g = f.target;
          g.hasPointerCapture(f.pointerId) && g.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (v(f), f.preventDefault());
        }),
        onKeyDown: V(o.onKeyDown, (f) => {
          const g = d.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && p(f.key), !(g && f.key === " ") && dD.includes(f.key) && (v(), f.preventDefault());
        })
      }
    ) });
  }
);
EE.displayName = xE;
var SE = "SelectValue", PE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = nn(SE, r), { onValueNodeHasChildrenChange: u } = c, l = a !== void 0, d = se(t, c.onValueNodeChange);
    return nt(() => {
      u(l);
    }, [u, l]), /* @__PURE__ */ w(
      Q.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: qE(c.value) ? /* @__PURE__ */ w(Zt, { children: i }) : a
      }
    );
  }
);
PE.displayName = SE;
var gD = "SelectIcon", OE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ w(Q.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
OE.displayName = gD;
var yD = "SelectPortal", AE = (e) => /* @__PURE__ */ w(Sa, { asChild: !0, ...e });
AE.displayName = yD;
var kn = "SelectContent", CE = m.forwardRef(
  (e, t) => {
    const r = nn(kn, e.__scopeSelect), [n, o] = m.useState();
    if (nt(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? xa.createPortal(
        /* @__PURE__ */ w(TE, { scope: e.__scopeSelect, children: /* @__PURE__ */ w(pc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ w("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ w(_E, { ...e, ref: t });
  }
);
CE.displayName = kn;
var Yt = 10, [TE, on] = So(kn), bD = "SelectContentImpl", wD = /* @__PURE__ */ An("SelectContent.RemoveScroll"), _E = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
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
    } = e, x = nn(kn, r), [b, E] = m.useState(null), [S, P] = m.useState(null), O = se(t, (K) => E(K)), [A, _] = m.useState(null), [I, T] = m.useState(
      null
    ), M = hc(r), [D, N] = m.useState(!1), U = m.useRef(!1);
    m.useEffect(() => {
      if (b) return qf(b);
    }, [b]), Vf();
    const L = m.useCallback(
      (K) => {
        const [fe, ...j] = M().map(($) => $.ref.current), [q] = j.slice(-1), J = document.activeElement;
        for (const $ of K)
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
    const { onOpenChange: R, triggerPointerDownPosRef: F } = x;
    m.useEffect(() => {
      if (b) {
        let K = { x: 0, y: 0 };
        const fe = (q) => {
          K = {
            x: Math.abs(Math.round(q.pageX) - (F.current?.x ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (F.current?.y ?? 0))
          };
        }, j = (q) => {
          K.x <= 10 && K.y <= 10 ? q.preventDefault() : b.contains(q.target) || R(!1), document.removeEventListener("pointermove", fe), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", fe), document.addEventListener("pointerup", j, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", fe), document.removeEventListener("pointerup", j, { capture: !0 });
        };
      }
    }, [b, R, F]), m.useEffect(() => {
      const K = () => R(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [R]);
    const [ee, ae] = HE((K) => {
      const fe = M().filter((J) => !J.disabled), j = fe.find((J) => J.ref.current === document.activeElement), q = GE(fe, K, j);
      q && setTimeout(() => q.ref.current.focus());
    }), ne = m.useCallback(
      (K, fe, j) => {
        const q = !U.current && !j;
        (x.value !== void 0 && x.value === fe || q) && (_(K), q && (U.current = !0));
      },
      [x.value]
    ), te = m.useCallback(() => b?.focus(), [b]), oe = m.useCallback(
      (K, fe, j) => {
        const q = !U.current && !j;
        (x.value !== void 0 && x.value === fe || q) && T(K);
      },
      [x.value]
    ), ue = n === "popper" ? Od : kE, $e = ue === Od ? {
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
    return /* @__PURE__ */ w(
      TE,
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
        children: /* @__PURE__ */ w(Zs, { as: wD, allowPinchZoom: !0, children: /* @__PURE__ */ w(
          Ys,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: V(o, (K) => {
              x.trigger?.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ w(
              yo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ w(
                  ue,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ...y,
                    ...$e,
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
                    onKeyDown: V(y.onKeyDown, (K) => {
                      const fe = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !fe && K.key.length === 1 && ae(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let q = M().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const J = K.target, $ = q.indexOf(J);
                          q = q.slice($ + 1);
                        }
                        setTimeout(() => L(q)), K.preventDefault();
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
_E.displayName = bD;
var xD = "SelectItemAlignedPosition", kE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = nn(kn, r), i = on(kn, r), [s, c] = m.useState(null), [u, l] = m.useState(null), d = se(t, (O) => l(O)), p = hc(r), h = m.useRef(!1), v = m.useRef(!0), { viewport: f, selectedItem: g, selectedItemText: y, focusSelectedItem: x } = i, b = m.useCallback(() => {
    if (a.trigger && a.valueNode && s && u && f && g && y) {
      const O = a.trigger.getBoundingClientRect(), A = u.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), I = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const J = I.left - A.left, $ = _.left - J, Ee = O.left - $, de = O.width + Ee, Qe = Math.max(de, A.width), et = window.innerWidth - Yt, Gt = sv($, [
          Yt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Yt, et - Qe)
        ]);
        s.style.minWidth = de + "px", s.style.left = Gt + "px";
      } else {
        const J = A.right - I.right, $ = window.innerWidth - _.right - J, Ee = window.innerWidth - O.right - $, de = O.width + Ee, Qe = Math.max(de, A.width), et = window.innerWidth - Yt, Gt = sv($, [
          Yt,
          Math.max(Yt, et - Qe)
        ]);
        s.style.minWidth = de + "px", s.style.right = Gt + "px";
      }
      const T = p(), M = window.innerHeight - Yt * 2, D = f.scrollHeight, N = window.getComputedStyle(u), U = parseInt(N.borderTopWidth, 10), L = parseInt(N.paddingTop, 10), B = parseInt(N.borderBottomWidth, 10), R = parseInt(N.paddingBottom, 10), F = U + L + D + R + B, ee = Math.min(g.offsetHeight * 5, F), ae = window.getComputedStyle(f), ne = parseInt(ae.paddingTop, 10), te = parseInt(ae.paddingBottom, 10), oe = O.top + O.height / 2 - Yt, ue = M - oe, $e = g.offsetHeight / 2, K = g.offsetTop + $e, fe = U + L + K, j = F - fe;
      if (fe <= oe) {
        const J = T.length > 0 && g === T[T.length - 1].ref.current;
        s.style.bottom = "0px";
        const $ = u.clientHeight - f.offsetTop - f.offsetHeight, Ee = Math.max(
          ue,
          $e + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? te : 0) + $ + B
        ), de = fe + Ee;
        s.style.height = de + "px";
      } else {
        const J = T.length > 0 && g === T[0].ref.current;
        s.style.top = "0px";
        const Ee = Math.max(
          oe,
          U + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? ne : 0) + $e
        ) + j;
        s.style.height = Ee + "px", f.scrollTop = fe - oe + f.offsetTop;
      }
      s.style.margin = `${Yt}px 0`, s.style.minHeight = ee + "px", s.style.maxHeight = M + "px", n?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    s,
    u,
    f,
    g,
    y,
    a.dir,
    n
  ]);
  nt(() => b(), [b]);
  const [E, S] = m.useState();
  nt(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = m.useCallback(
    (O) => {
      O && v.current === !0 && (b(), x?.(), v.current = !1);
    },
    [b, x]
  );
  return /* @__PURE__ */ w(
    SD,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ w(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ w(
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
kE.displayName = xD;
var ED = "SelectPopperPosition", Od = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Yt,
    ...a
  } = e, i = mc(r);
  return /* @__PURE__ */ w(
    ap,
    {
      ...i,
      ...a,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Od.displayName = ED;
var [SD, gp] = So(kn, {}), Ad = "SelectViewport", NE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = on(Ad, r), i = gp(Ad, r), s = se(t, a.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ w(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ w(pc.Slot, { scope: r, children: /* @__PURE__ */ w(
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
          onScroll: V(o.onScroll, (u) => {
            const l = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p?.current && d) {
              const h = Math.abs(c.current - l.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - Yt * 2, f = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(f, g);
                if (y < v) {
                  const x = y + h, b = Math.min(v, x), E = x - b;
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
NE.displayName = Ad;
var IE = "SelectGroup", [PD, OD] = So(IE), RE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = _t();
    return /* @__PURE__ */ w(PD, { scope: r, id: o, children: /* @__PURE__ */ w(Q.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
RE.displayName = IE;
var ME = "SelectLabel", DE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = OD(ME, r);
    return /* @__PURE__ */ w(Q.div, { id: o.id, ...n, ref: t });
  }
);
DE.displayName = ME;
var rs = "SelectItem", [AD, jE] = So(rs), $E = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = nn(rs, r), c = on(rs, r), u = s.value === n, [l, d] = m.useState(a ?? ""), [p, h] = m.useState(!1), v = se(
      t,
      (x) => c.itemRefCallback?.(x, n, o)
    ), f = _t(), g = m.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ w(
      AD,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: f,
        isSelected: u,
        onItemTextChange: m.useCallback((x) => {
          d((b) => b || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ w(
          pc.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: l,
            children: /* @__PURE__ */ w(
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
                ...i,
                ref: v,
                onFocus: V(i.onFocus, () => h(!0)),
                onBlur: V(i.onBlur, () => h(!1)),
                onClick: V(i.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: V(i.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: V(i.onPointerDown, (x) => {
                  g.current = x.pointerType;
                }),
                onPointerMove: V(i.onPointerMove, (x) => {
                  g.current = x.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: V(i.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: V(i.onKeyDown, (x) => {
                  c.searchRef?.current !== "" && x.key === " " || (fD.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
$E.displayName = rs;
var Yo = "SelectItemText", LE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = nn(Yo, r), s = on(Yo, r), c = jE(Yo, r), u = vD(Yo, r), [l, d] = m.useState(null), p = se(
      t,
      (y) => d(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = l?.textContent, v = m.useMemo(
      () => /* @__PURE__ */ w("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: g } = u;
    return nt(() => (f(v), () => g(v)), [f, g, v]), /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ w(Q.span, { id: c.textId, ...a, ref: p }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? xa.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
LE.displayName = Yo;
var FE = "SelectItemIndicator", BE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return jE(FE, r).isSelected ? /* @__PURE__ */ w(Q.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
BE.displayName = FE;
var Cd = "SelectScrollUpButton", zE = m.forwardRef((e, t) => {
  const r = on(Cd, e.__scopeSelect), n = gp(Cd, e.__scopeSelect), [o, a] = m.useState(!1), i = se(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        a(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ w(
    WE,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
zE.displayName = Cd;
var Td = "SelectScrollDownButton", UE = m.forwardRef((e, t) => {
  const r = on(Td, e.__scopeSelect), n = gp(Td, e.__scopeSelect), [o, a] = m.useState(!1), i = se(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, l = Math.ceil(c.scrollTop) < u;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ w(
    WE,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
UE.displayName = Td;
var WE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = on("SelectScrollButton", r), i = m.useRef(null), s = hc(r), c = m.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), nt(() => {
    s().find((l) => l.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ w(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: V(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: V(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: V(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), CD = "SelectSeparator", KE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ w(Q.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
KE.displayName = CD;
var _d = "SelectArrow", TD = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = mc(r), a = nn(_d, r), i = on(_d, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ w(ip, { ...o, ...n, ref: t }) : null;
  }
);
TD.displayName = _d;
var _D = "SelectBubbleInput", VE = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = m.useRef(null), a = se(n, o), i = qs(t);
    return m.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, l = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && l) {
        const d = new Event("change", { bubbles: !0 });
        l.call(s, t), s.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ w(
      Q.select,
      {
        ...r,
        style: { ...bE, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
VE.displayName = _D;
function qE(e) {
  return e === "" || e === void 0;
}
function HE(e) {
  const t = pt(e), r = m.useRef(""), n = m.useRef(0), o = m.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), (function c(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [t]
  ), a = m.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function GE(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = kD(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function kD(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var ND = wE, YE = EE, ID = PE, RD = OE, MD = AE, XE = CE, DD = NE, jD = RE, ZE = DE, JE = $E, $D = LE, LD = BE, QE = zE, eS = UE, tS = KE;
const FD = ND, oX = jD, BD = ID, rS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ W(
  YE,
  {
    ref: n,
    className: z(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ w(RD, { asChild: !0, children: /* @__PURE__ */ w(Lf, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
rS.displayName = YE.displayName;
const nS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  QE,
  {
    ref: r,
    className: z(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ w(P_, { className: "h-4 w-4" })
  }
));
nS.displayName = QE.displayName;
const oS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  eS,
  {
    ref: r,
    className: z(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ w(Lf, { className: "h-4 w-4" })
  }
));
oS.displayName = eS.displayName;
const aS = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ w(MD, { children: /* @__PURE__ */ W(
  XE,
  {
    ref: o,
    className: z(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ w(nS, {}),
      /* @__PURE__ */ w(
        DD,
        {
          className: z(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ w(oS, {})
    ]
  }
) }));
aS.displayName = XE.displayName;
const zD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  ZE,
  {
    ref: r,
    className: z("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
zD.displayName = ZE.displayName;
const iS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ W(
  JE,
  {
    ref: n,
    className: z(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ w("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w(LD, { children: /* @__PURE__ */ w(oo, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ w($D, { children: t })
    ]
  }
));
iS.displayName = JE.displayName;
const UD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  tS,
  {
    ref: r,
    className: z("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
UD.displayName = tS.displayName;
const WD = m.forwardRef(
  ({
    options: e,
    value: t,
    onValueChange: r,
    placeholder: n = "Selecione uma opção",
    searchPlaceholder: o = "Pesquisar...",
    disabled: a,
    className: i,
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
    }, [d]), /* @__PURE__ */ W(
      FD,
      {
        value: t,
        onValueChange: r,
        disabled: a,
        open: d,
        onOpenChange: p,
        children: [
          /* @__PURE__ */ w(rS, { ref: c, className: i, children: /* @__PURE__ */ w(BD, { placeholder: n }) }),
          /* @__PURE__ */ W(aS, { children: [
            /* @__PURE__ */ W("div", { className: "flex items-center border-b px-3 pb-2", children: [
              /* @__PURE__ */ w(z_, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
              /* @__PURE__ */ w(
                o0,
                {
                  placeholder: o,
                  value: u,
                  onChange: (v) => l(v.target.value),
                  className: "h-8 border-0 shadow-none focus-visible:ring-0 px-0 bg-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ w("div", { className: "max-h-[300px] overflow-auto", children: h.length === 0 ? /* @__PURE__ */ w("div", { className: "py-6 text-center text-sm text-muted-foreground", children: s }) : h.map((v) => /* @__PURE__ */ w(iS, { value: v.value, children: v.label }, v.value)) })
          ] })
        ]
      }
    );
  }
);
WD.displayName = "SearchableSelect";
var yp = "Radio", [KD, sS] = xt(yp), [VD, qD] = KD(yp), cS = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: c,
      form: u,
      ...l
    } = e, [d, p] = m.useState(null), h = se(t, (g) => p(g)), v = m.useRef(!1), f = d ? u || !!d.closest("form") : !0;
    return /* @__PURE__ */ W(VD, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ w(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": fS(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...l,
          ref: h,
          onClick: V(e.onClick, (g) => {
            o || c?.(), f && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      f && /* @__PURE__ */ w(
        dS,
        {
          control: d,
          bubbles: !v.current,
          name: n,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cS.displayName = yp;
var lS = "RadioIndicator", uS = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = qD(lS, r);
    return /* @__PURE__ */ w(Mt, { present: n || a.checked, children: /* @__PURE__ */ w(
      Q.span,
      {
        "data-state": fS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
uS.displayName = lS;
var HD = "RadioBubbleInput", dS = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = m.useRef(null), s = se(i, a), c = qs(r), u = Hs(t);
    return m.useEffect(() => {
      const l = i.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(l, r), l.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ w(
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
dS.displayName = HD;
function fS(e) {
  return e ? "checked" : "unchecked";
}
var GD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], vc = "RadioGroup", [YD] = xt(vc, [
  Eo,
  sS
]), pS = Eo(), hS = sS(), [XD, ZD] = YD(vc), mS = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: c,
      dir: u,
      loop: l = !0,
      onValueChange: d,
      ...p
    } = e, h = pS(r), v = Pa(u), [f, g] = Kt({
      prop: a,
      defaultProp: o ?? null,
      onChange: d,
      caller: vc
    });
    return /* @__PURE__ */ w(
      XD,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: f,
        onValueChange: g,
        children: /* @__PURE__ */ w(
          sp,
          {
            asChild: !0,
            ...h,
            orientation: c,
            dir: v,
            loop: l,
            children: /* @__PURE__ */ w(
              Q.div,
              {
                role: "radiogroup",
                "aria-required": i,
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
mS.displayName = vc;
var vS = "RadioGroupItem", gS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = ZD(vS, r), i = a.disabled || n, s = pS(r), c = hS(r), u = m.useRef(null), l = se(t, u), d = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (f) => {
        GD.includes(f.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ w(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: d,
        children: /* @__PURE__ */ w(
          cS,
          {
            disabled: i,
            required: a.required,
            checked: d,
            ...c,
            ...o,
            name: a.name,
            ref: l,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: V((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: V(o.onFocus, () => {
              p.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
gS.displayName = vS;
var JD = "RadioGroupIndicator", yS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = hS(r);
    return /* @__PURE__ */ w(uS, { ...o, ...n, ref: t });
  }
);
yS.displayName = JD;
var bS = mS, wS = gS, QD = yS;
const ej = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  bS,
  {
    className: z("grid gap-2", e),
    ...t,
    ref: r
  }
));
ej.displayName = bS.displayName;
const tj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  wS,
  {
    ref: r,
    className: z(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ w(QD, { className: "flex items-center justify-center", children: /* @__PURE__ */ w(Vw, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
tj.displayName = wS.displayName;
var gc = "Switch", [rj] = xt(gc), [nj, oj] = rj(gc), xS = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: u,
      form: l,
      ...d
    } = e, [p, h] = m.useState(null), v = se(t, (b) => h(b)), f = m.useRef(!1), g = p ? l || !!p.closest("form") : !0, [y, x] = Kt({
      prop: o,
      defaultProp: a ?? !1,
      onChange: u,
      caller: gc
    });
    return /* @__PURE__ */ W(nj, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ w(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": OS(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: v,
          onClick: V(e.onClick, (b) => {
            x((E) => !E), g && (f.current = b.isPropagationStopped(), f.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ w(
        PS,
        {
          control: p,
          bubbles: !f.current,
          name: n,
          value: c,
          checked: y,
          required: i,
          disabled: s,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
xS.displayName = gc;
var ES = "SwitchThumb", SS = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = oj(ES, r);
    return /* @__PURE__ */ w(
      Q.span,
      {
        "data-state": OS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
SS.displayName = ES;
var aj = "SwitchBubbleInput", PS = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = m.useRef(null), s = se(i, a), c = qs(r), u = Hs(t);
    return m.useEffect(() => {
      const l = i.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(l, r), l.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ w(
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
PS.displayName = aj;
function OS(e) {
  return e ? "checked" : "unchecked";
}
var AS = xS, ij = SS;
const sj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  AS,
  {
    className: z(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ w(
      ij,
      {
        className: z(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
sj.displayName = AS.displayName;
var yc = "Tabs", [cj] = xt(yc, [
  Eo
]), CS = Eo(), [lj, bp] = cj(yc), TS = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...u
    } = e, l = Pa(s), [d, p] = Kt({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: yc
    });
    return /* @__PURE__ */ w(
      lj,
      {
        scope: r,
        baseId: _t(),
        value: d,
        onValueChange: p,
        orientation: i,
        dir: l,
        activationMode: c,
        children: /* @__PURE__ */ w(
          Q.div,
          {
            dir: l,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
TS.displayName = yc;
var _S = "TabsList", kS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = bp(_S, r), i = CS(r);
    return /* @__PURE__ */ w(
      sp,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ w(
          Q.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
kS.displayName = _S;
var NS = "TabsTrigger", IS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = bp(NS, r), s = CS(r), c = DS(i.baseId, n), u = jS(i.baseId, n), l = n === i.value;
    return /* @__PURE__ */ w(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: l,
        children: /* @__PURE__ */ w(
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
            ...a,
            ref: t,
            onMouseDown: V(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(n) : d.preventDefault();
            }),
            onKeyDown: V(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(n);
            }),
            onFocus: V(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !l && !o && d && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
IS.displayName = NS;
var RS = "TabsContent", MS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = bp(RS, r), c = DS(s.baseId, n), u = jS(s.baseId, n), l = n === s.value, d = m.useRef(l);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ w(Mt, { present: o || l, children: ({ present: p }) => /* @__PURE__ */ w(
      Q.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !p,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
MS.displayName = RS;
function DS(e, t) {
  return `${e}-trigger-${t}`;
}
function jS(e, t) {
  return `${e}-content-${t}`;
}
var uj = TS, $S = kS, LS = IS, FS = MS;
const aX = uj, dj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  $S,
  {
    ref: r,
    className: z(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
dj.displayName = $S.displayName;
const fj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  LS,
  {
    ref: r,
    className: z(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
fj.displayName = LS.displayName;
const pj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  FS,
  {
    ref: r,
    className: z(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
pj.displayName = FS.displayName;
var wp = "ToastProvider", [xp, hj, mj] = oc("Toast"), [BS] = xt("Toast", [mj]), [vj, bc] = BS(wp), zS = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = m.useState(null), [u, l] = m.useState(0), d = m.useRef(!1), p = m.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${wp}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ w(xp.Provider, { scope: t, children: /* @__PURE__ */ w(
    vj,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: u,
      viewport: s,
      onViewportChange: c,
      onToastAdd: m.useCallback(() => l((h) => h + 1), []),
      onToastRemove: m.useCallback(() => l((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: p,
      children: i
    }
  ) });
};
zS.displayName = wp;
var US = "ToastViewport", gj = ["F8"], kd = "toast.viewportPause", Nd = "toast.viewportResume", WS = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = gj,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = bc(US, r), s = hj(r), c = m.useRef(null), u = m.useRef(null), l = m.useRef(null), d = m.useRef(null), p = se(t, d, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
    m.useEffect(() => {
      const g = (y) => {
        n.length !== 0 && n.every((b) => y[b] || y.code === b) && d.current?.focus();
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), m.useEffect(() => {
      const g = c.current, y = d.current;
      if (v && g && y) {
        const x = () => {
          if (!i.isClosePausedRef.current) {
            const P = new CustomEvent(kd);
            y.dispatchEvent(P), i.isClosePausedRef.current = !0;
          }
        }, b = () => {
          if (i.isClosePausedRef.current) {
            const P = new CustomEvent(Nd);
            y.dispatchEvent(P), i.isClosePausedRef.current = !1;
          }
        }, E = (P) => {
          !g.contains(P.relatedTarget) && b();
        }, S = () => {
          g.contains(document.activeElement) || b();
        };
        return g.addEventListener("focusin", x), g.addEventListener("focusout", E), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", S), window.addEventListener("blur", x), window.addEventListener("focus", b), () => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", E), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", S), window.removeEventListener("blur", x), window.removeEventListener("focus", b);
        };
      }
    }, [v, i.isClosePausedRef]);
    const f = m.useCallback(
      ({ tabbingDirection: g }) => {
        const x = s().map((b) => {
          const E = b.ref.current, S = [E, ...kj(E)];
          return g === "forwards" ? S : S.reverse();
        });
        return (g === "forwards" ? x.reverse() : x).flat();
      },
      [s]
    );
    return m.useEffect(() => {
      const g = d.current;
      if (g) {
        const y = (x) => {
          const b = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !b) {
            const S = document.activeElement, P = x.shiftKey;
            if (x.target === g && P) {
              u.current?.focus();
              return;
            }
            const _ = f({ tabbingDirection: P ? "backwards" : "forwards" }), I = _.findIndex((T) => T === S);
            Rl(_.slice(I + 1)) ? x.preventDefault() : P ? u.current?.focus() : l.current?.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, f]), /* @__PURE__ */ W(
      cN,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ w(
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
          /* @__PURE__ */ w(xp.Slot, { scope: r, children: /* @__PURE__ */ w(Q.ol, { tabIndex: -1, ...a, ref: p }) }),
          v && /* @__PURE__ */ w(
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
WS.displayName = US;
var KS = "ToastFocusProxy", Id = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = bc(KS, r);
    return /* @__PURE__ */ w(
      fc,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          const s = i.relatedTarget;
          !a.viewport?.contains(s) && n();
        }
      }
    );
  }
);
Id.displayName = KS;
var ka = "Toast", yj = "toast.swipeStart", bj = "toast.swipeMove", wj = "toast.swipeCancel", xj = "toast.swipeEnd", VS = m.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = Kt({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: ka
    });
    return /* @__PURE__ */ w(Mt, { present: r || s, children: /* @__PURE__ */ w(
      Pj,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: pt(e.onPause),
        onResume: pt(e.onResume),
        onSwipeStart: V(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: V(e.onSwipeMove, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: V(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: V(e.onSwipeEnd, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
VS.displayName = ka;
var [Ej, Sj] = BS(ka, {
  onClose() {
  }
}), Pj = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: u,
      onSwipeStart: l,
      onSwipeMove: d,
      onSwipeCancel: p,
      onSwipeEnd: h,
      ...v
    } = e, f = bc(ka, r), [g, y] = m.useState(null), x = se(t, (N) => y(N)), b = m.useRef(null), E = m.useRef(null), S = o || f.duration, P = m.useRef(0), O = m.useRef(S), A = m.useRef(0), { onToastAdd: _, onToastRemove: I } = f, T = pt(() => {
      g?.contains(document.activeElement) && f.viewport?.focus(), i();
    }), M = m.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(A.current), P.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(T, N));
      },
      [T]
    );
    m.useEffect(() => {
      const N = f.viewport;
      if (N) {
        const U = () => {
          M(O.current), u?.();
        }, L = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - P.current;
          O.current = O.current - B, window.clearTimeout(A.current), c?.();
        };
        return N.addEventListener(kd, L), N.addEventListener(Nd, U), () => {
          N.removeEventListener(kd, L), N.removeEventListener(Nd, U);
        };
      }
    }, [f.viewport, S, c, u, M]), m.useEffect(() => {
      a && !f.isClosePausedRef.current && M(S);
    }, [a, S, f.isClosePausedRef, M]), m.useEffect(() => (_(), () => I()), [_, I]);
    const D = m.useMemo(() => g ? JS(g) : null, [g]);
    return f.viewport ? /* @__PURE__ */ W(Zt, { children: [
      D && /* @__PURE__ */ w(
        Oj,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: D
        }
      ),
      /* @__PURE__ */ w(Ej, { scope: r, onClose: T, children: xa.createPortal(
        /* @__PURE__ */ w(xp.ItemSlot, { scope: r, children: /* @__PURE__ */ w(
          sN,
          {
            asChild: !0,
            onEscapeKeyDown: V(s, () => {
              f.isFocusedToastEscapeKeyDownRef.current || T(), f.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ w(
              Q.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": f.swipeDirection,
                ...v,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: V(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s?.(N.nativeEvent), N.nativeEvent.defaultPrevented || (f.isFocusedToastEscapeKeyDownRef.current = !0, T()));
                }),
                onPointerDown: V(e.onPointerDown, (N) => {
                  N.button === 0 && (b.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: V(e.onPointerMove, (N) => {
                  if (!b.current) return;
                  const U = N.clientX - b.current.x, L = N.clientY - b.current.y, B = !!E.current, R = ["left", "right"].includes(f.swipeDirection), F = ["left", "up"].includes(f.swipeDirection) ? Math.min : Math.max, ee = R ? F(0, U) : 0, ae = R ? 0 : F(0, L), ne = N.pointerType === "touch" ? 10 : 2, te = { x: ee, y: ae }, oe = { originalEvent: N, delta: te };
                  B ? (E.current = te, fi(bj, d, oe, {
                    discrete: !1
                  })) : cv(te, f.swipeDirection, ne) ? (E.current = te, fi(yj, l, oe, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(U) > ne || Math.abs(L) > ne) && (b.current = null);
                }),
                onPointerUp: V(e.onPointerUp, (N) => {
                  const U = E.current, L = N.target;
                  if (L.hasPointerCapture(N.pointerId) && L.releasePointerCapture(N.pointerId), E.current = null, b.current = null, U) {
                    const B = N.currentTarget, R = { originalEvent: N, delta: U };
                    cv(U, f.swipeDirection, f.swipeThreshold) ? fi(xj, h, R, {
                      discrete: !0
                    }) : fi(
                      wj,
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
), Oj = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = bc(ka, t), [a, i] = m.useState(!1), [s, c] = m.useState(!1);
  return Tj(() => i(!0)), m.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ w(Sa, { asChild: !0, children: /* @__PURE__ */ w(fc, { ...n, children: a && /* @__PURE__ */ W(Zt, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, Aj = "ToastTitle", qS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ w(Q.div, { ...n, ref: t });
  }
);
qS.displayName = Aj;
var Cj = "ToastDescription", HS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ w(Q.div, { ...n, ref: t });
  }
);
HS.displayName = Cj;
var GS = "ToastAction", YS = m.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ w(ZS, { altText: r, asChild: !0, children: /* @__PURE__ */ w(Ep, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${GS}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
YS.displayName = GS;
var XS = "ToastClose", Ep = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = Sj(XS, r);
    return /* @__PURE__ */ w(ZS, { asChild: !0, children: /* @__PURE__ */ w(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
Ep.displayName = XS;
var ZS = m.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ w(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function JS(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), _j(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...JS(n));
    }
  }), t;
}
function fi(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, a) : o.dispatchEvent(a);
}
var cv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function Tj(e = () => {
}) {
  const t = pt(e);
  nt(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function _j(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function kj(e) {
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
var Nj = zS, QS = WS, eP = VS, tP = qS, rP = HS, nP = YS, oP = Ep;
const Ij = Nj, aP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  QS,
  {
    ref: r,
    className: z(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
aP.displayName = QS.displayName;
const Rj = Ea(
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
), iP = m.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ w(
  eP,
  {
    ref: n,
    className: z(Rj({ variant: t }), e),
    ...r
  }
));
iP.displayName = eP.displayName;
const Mj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  nP,
  {
    ref: r,
    className: z(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
Mj.displayName = nP.displayName;
const sP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  oP,
  {
    ref: r,
    className: z(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ w(Bf, { className: "h-4 w-4" })
  }
));
sP.displayName = oP.displayName;
const cP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  tP,
  {
    ref: r,
    className: z("text-sm font-semibold [&+div]:text-xs", e),
    ...t
  }
));
cP.displayName = tP.displayName;
const lP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  rP,
  {
    ref: r,
    className: z("text-sm opacity-90", e),
    ...t
  }
));
lP.displayName = rP.displayName;
const Dj = 1, jj = 1e6;
let Ml = 0;
function $j() {
  return Ml = (Ml + 1) % Number.MAX_SAFE_INTEGER, Ml.toString();
}
const Dl = /* @__PURE__ */ new Map(), lv = (e) => {
  if (Dl.has(e))
    return;
  const t = setTimeout(() => {
    Dl.delete(e), Qo({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, jj);
  Dl.set(e, t);
}, Lj = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Dj)
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
}, Fi = [];
let Bi = { toasts: [] };
function Qo(e) {
  Bi = Lj(Bi, e), Fi.forEach((t) => {
    t(Bi);
  });
}
function Rd({ ...e }) {
  const t = $j(), r = (o) => Qo({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => Qo({ type: "DISMISS_TOAST", toastId: t });
  return Qo({
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
function Fj() {
  const [e, t] = m.useState(Bi);
  return m.useEffect(() => (Fi.push(t), () => {
    const r = Fi.indexOf(t);
    r > -1 && Fi.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Rd,
    dismiss: (r) => Qo({ type: "DISMISS_TOAST", toastId: r })
  };
}
function iX() {
  const { toasts: e } = Fj();
  return /* @__PURE__ */ W(Ij, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ W(iP, { ...a, children: [
        /* @__PURE__ */ W("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ w(cP, { children: r }),
          n && /* @__PURE__ */ w(lP, { children: n })
        ] }),
        o,
        /* @__PURE__ */ w(sP, {})
      ] }, t);
    }),
    /* @__PURE__ */ w(aP, {})
  ] });
}
var [wc] = xt("Tooltip", [
  xo
]), xc = xo(), uP = "TooltipProvider", Bj = 700, Md = "tooltip.open", [zj, Sp] = wc(uP), dP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Bj,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = m.useRef(!0), s = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(
    zj,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: r,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: m.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
dP.displayName = uP;
var ia = "Tooltip", [Uj, Ec] = wc(ia), fP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = Sp(ia, e.__scopeTooltip), u = xc(t), [l, d] = m.useState(null), p = _t(), h = m.useRef(0), v = i ?? c.disableHoverableContent, f = s ?? c.delayDuration, g = m.useRef(!1), [y, x] = Kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Md))) : c.onClose(), a?.(O);
    },
    caller: ia
  }), b = m.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), E = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, x(!0);
  }, [x]), S = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, x(!1);
  }, [x]), P = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, x(!0), h.current = 0;
    }, f);
  }, [f, x]);
  return m.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ w(lc, { ...u, children: /* @__PURE__ */ w(
    Uj,
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
fP.displayName = ia;
var Dd = "TooltipTrigger", pP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ec(Dd, r), a = Sp(Dd, r), i = xc(r), s = m.useRef(null), c = se(t, s, o.onTriggerChange), u = m.useRef(!1), l = m.useRef(!1), d = m.useCallback(() => u.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ w(op, { asChild: !0, ...i, children: /* @__PURE__ */ w(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: V(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !l.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: V(e.onPointerLeave, () => {
          o.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: V(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: V(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: V(e.onBlur, o.onClose),
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
pP.displayName = Dd;
var Wj = "TooltipPortal", [sX, Kj] = wc(Wj, {
  forceMount: void 0
}), io = "TooltipContent", hP = m.forwardRef(
  (e, t) => {
    const r = Kj(io, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Ec(io, e.__scopeTooltip);
    return /* @__PURE__ */ w(Mt, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ w(mP, { side: o, ...a, ref: t }) : /* @__PURE__ */ w(Vj, { side: o, ...a, ref: t }) });
  }
), Vj = m.forwardRef((e, t) => {
  const r = Ec(io, e.__scopeTooltip), n = Sp(io, e.__scopeTooltip), o = m.useRef(null), a = se(t, o), [i, s] = m.useState(null), { trigger: c, onClose: u } = r, l = o.current, { onPointerInTransitChange: d } = n, p = m.useCallback(() => {
    s(null), d(!1);
  }, [d]), h = m.useCallback(
    (v, f) => {
      const g = v.currentTarget, y = { x: v.clientX, y: v.clientY }, x = Xj(y, g.getBoundingClientRect()), b = Zj(y, x), E = Jj(f.getBoundingClientRect()), S = e2([...b, ...E]);
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
    if (i) {
      const v = (f) => {
        const g = f.target, y = { x: f.clientX, y: f.clientY }, x = c?.contains(g) || l?.contains(g), b = !Qj(y, i);
        x ? p() : b && (p(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, l, i, u, p]), /* @__PURE__ */ w(mP, { ...e, ref: a });
}), [qj, Hj] = wc(ia, { isInside: !1 }), Gj = /* @__PURE__ */ s_("TooltipContent"), mP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Ec(io, r), u = xc(r), { onClose: l } = c;
    return m.useEffect(() => (document.addEventListener(Md, l), () => document.removeEventListener(Md, l)), [l]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          p.target?.contains(c.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, l]), /* @__PURE__ */ w(
      yo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ W(
          ap,
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
              /* @__PURE__ */ w(Gj, { children: n }),
              /* @__PURE__ */ w(qj, { scope: r, isInside: !0, children: /* @__PURE__ */ w(uD, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
hP.displayName = io;
var vP = "TooltipArrow", Yj = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = xc(r);
    return Hj(
      vP,
      r
    ).isInside ? null : /* @__PURE__ */ w(ip, { ...o, ...n, ref: t });
  }
);
Yj.displayName = vP;
function Xj(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, a)) {
    case a:
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
function Zj(e, t, r = 5) {
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
function Jj(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function Qj(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function e2(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), t2(t);
}
function t2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var r2 = dP, n2 = fP, o2 = pP, gP = hP;
const cX = r2, lX = n2, uX = o2, a2 = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ w(
  gP,
  {
    ref: n,
    sideOffset: t,
    className: z(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
a2.displayName = gP.displayName;
const yP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ w(
  "table",
  {
    ref: r,
    className: z("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
yP.displayName = "Table";
const bP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w("thead", { ref: r, className: z("[&_tr]:border-b", e), ...t }));
bP.displayName = "TableHeader";
const wP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "tbody",
  {
    ref: r,
    className: z("[&_tr:last-child]:border-0", e),
    ...t
  }
));
wP.displayName = "TableBody";
const i2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "tfoot",
  {
    ref: r,
    className: z(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
i2.displayName = "TableFooter";
const Xo = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "tr",
  {
    ref: r,
    className: z(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Xo.displayName = "TableRow";
const xP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "th",
  {
    ref: r,
    className: z(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
xP.displayName = "TableHead";
const zi = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "td",
  {
    ref: r,
    className: z(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
zi.displayName = "TableCell";
const s2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  "caption",
  {
    ref: r,
    className: z("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
s2.displayName = "TableCaption";
const EP = m.forwardRef(
  ({
    className: e,
    title: t,
    subtitle: r,
    logo: n,
    items: o = [],
    groups: a = [],
    isCollapsed: i = !1,
    onToggleCollapse: s,
    width: c = 260,
    collapsedWidth: u = 80,
    showCollapseButton: l = !0,
    onLogout: d,
    ...p
  }, h) => {
    const [v, f] = m.useState(!1), g = s ? i : v, y = s || (() => f(!v)), x = (b) => b.map((E) => /* @__PURE__ */ W(
      "div",
      {
        onClick: E.onClick,
        className: z(
          "relative flex items-center cursor-pointer transition-all my-0.5 font-medium text-muted-foreground",
          g ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
          E.active && "bg-primary/5 text-primary font-semibold",
          "hover:bg-accent hover:text-primary",
          E.active && "hover:bg-primary/10"
        ),
        children: [
          E.active && /* @__PURE__ */ w("div", { className: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary" }),
          E.icon && /* @__PURE__ */ w("div", { className: z("flex items-center justify-center w-5 h-5", !g && "mr-3"), children: E.icon }),
          !g && /* @__PURE__ */ w("span", { className: "text-sm whitespace-nowrap overflow-hidden text-ellipsis", children: E.label })
        ]
      },
      E.key
    ));
    return /* @__PURE__ */ W(
      "aside",
      {
        ref: h,
        className: z("fixed left-0 top-0 h-screen bg-card flex flex-col z-40 transition-all duration-300 overflow-visible shadow-sm", e),
        style: {
          width: g ? `${u}px` : `${c}px`
        },
        ...p,
        children: [
          (t || r || n) && /* @__PURE__ */ W(
            "div",
            {
              className: z(
                "flex items-center min-h-[72px] bg-card mb-1",
                g ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5"
              ),
              children: [
                n,
                !g && /* @__PURE__ */ W("div", { className: "flex-1 overflow-hidden ml-3", children: [
                  t && /* @__PURE__ */ w("div", { className: "font-bold text-base text-foreground leading-tight tracking-tight", children: t }),
                  r && /* @__PURE__ */ w("div", { className: "text-xs text-secondary font-medium leading-tight mt-1", children: r })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ W("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4", children: [
            o.length > 0 && x(o),
            a.map((b) => /* @__PURE__ */ W("div", { className: "mb-6", children: [
              !g && /* @__PURE__ */ w("div", { className: "px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1", children: b.label }),
              x(b.items)
            ] }, b.label))
          ] }),
          d && /* @__PURE__ */ w("div", { className: z("mt-auto", g ? "p-2" : "p-4"), children: /* @__PURE__ */ W(
            "div",
            {
              onClick: d,
              className: z(
                "flex items-center cursor-pointer rounded-md p-3 text-destructive text-sm font-medium transition-colors hover:bg-destructive/10",
                g ? "justify-center" : "justify-start gap-3"
              ),
              children: [
                /* @__PURE__ */ w(qw, { className: "h-4 w-4" }),
                !g && /* @__PURE__ */ w("span", { children: "Sair" })
              ]
            }
          ) }),
          l && /* @__PURE__ */ w(
            "button",
            {
              onClick: y,
              className: "absolute bottom-4 -right-3.5 bg-card border border-border rounded-sm p-1.5 cursor-pointer flex items-center justify-center transition-all w-7 h-7 shadow-sm hover:bg-accent hover:shadow-md active:scale-95",
              children: /* @__PURE__ */ w("div", { className: "w-4 h-4 text-muted-foreground flex items-center justify-center", children: g ? /* @__PURE__ */ w(Ff, { className: "w-4 h-4" }) : /* @__PURE__ */ w(x_, { className: "w-4 h-4" }) })
            }
          )
        ]
      }
    );
  }
);
EP.displayName = "Sidebar";
const c2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ w("div", { ref: r, className: z("flex items-center border-b p-4", e), ...t })
);
c2.displayName = "SidebarHeader";
const l2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ w("div", { ref: r, className: z("flex-1 overflow-y-auto p-4", e), ...t })
);
l2.displayName = "SidebarContent";
const u2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ w("div", { ref: r, className: z("border-t p-4", e), ...t })
);
u2.displayName = "SidebarFooter";
const d2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ w("nav", { ref: r, className: z("flex flex-col space-y-1", e), ...t })
);
d2.displayName = "SidebarNav";
const f2 = m.forwardRef(
  ({ className: e, active: t, icon: r, children: n, ...o }, a) => /* @__PURE__ */ W(
    "a",
    {
      ref: a,
      className: z(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        t && "bg-accent text-accent-foreground",
        e
      ),
      ...o,
      children: [
        r && /* @__PURE__ */ w("span", { className: "flex-shrink-0", children: r }),
        /* @__PURE__ */ w("span", { className: "flex-1", children: n })
      ]
    }
  )
);
f2.displayName = "SidebarNavItem";
const SP = m.forwardRef(
  ({ className: e, items: t, separator: r, ...n }, o) => t.length === 0 ? null : /* @__PURE__ */ w(
    "nav",
    {
      ref: o,
      className: z("flex items-center gap-2 text-sm", e),
      "aria-label": "Breadcrumb",
      ...n,
      children: t.map((a, i) => /* @__PURE__ */ W(m.Fragment, { children: [
        /* @__PURE__ */ w(
          "span",
          {
            className: z(
              "font-medium transition-colors",
              i === 0 && "text-primary",
              i === 1 && "text-secondary",
              i === t.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground",
              a.onClick && "cursor-pointer hover:text-primary"
            ),
            onClick: a.onClick,
            children: a.label
          }
        ),
        i < t.length - 1 && /* @__PURE__ */ w("span", { className: "text-border flex items-center select-none", children: r || /* @__PURE__ */ w(Ff, { className: "h-3.5 w-3.5" }) })
      ] }, i))
    }
  )
);
SP.displayName = "Breadcrumb";
const PP = m.createContext(null), OP = () => {
  const e = m.useContext(PP);
  if (!e)
    throw new Error("useTheme must be used within ThemeProvider");
  return e;
}, dX = ({
  children: e,
  defaultTheme: t = "default",
  defaultDark: r = !1
}) => {
  const [n, o] = m.useState(() => localStorage.getItem("drts-theme") || t), [a, i] = m.useState(() => {
    const u = localStorage.getItem("drts-dark-mode");
    return u ? u === "true" : r;
  });
  m.useEffect(() => {
    const u = document.documentElement;
    u.setAttribute("data-theme", n), localStorage.setItem("drts-theme", n), a ? u.classList.add("dark") : u.classList.remove("dark"), localStorage.setItem("drts-dark-mode", String(a));
  }, [n, a]);
  const s = m.useCallback((u) => {
    o(u);
  }, []), c = m.useCallback(() => {
    i((u) => !u);
  }, []);
  return /* @__PURE__ */ w(PP.Provider, { value: { theme: n, setTheme: s, isDark: a, toggleDark: c }, children: e });
}, uv = [
  { value: "default", label: "Graphite", color: "bg-slate-600" },
  { value: "ocean", label: "Ocean", color: "bg-cyan-600" },
  { value: "forest", label: "Forest", color: "bg-green-600" },
  { value: "twilight", label: "Twilight", color: "bg-purple-600" },
  { value: "sunset", label: "Sunset", color: "bg-orange-600" },
  { value: "flamingo", label: "Flamingo", color: "bg-pink-500" }
], dv = [
  { value: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "en-US", label: "English (US)", flag: "🇺🇸" }
], AP = m.forwardRef(
  ({
    className: e,
    isCollapsed: t = !1,
    breadcrumbs: r = [],
    user: n,
    onNotificationClick: o,
    hasNotifications: a = !1,
    userMenuTrigger: i,
    actions: s,
    ...c
  }, u) => {
    const { theme: l, setTheme: d, isDark: p, toggleDark: h } = OP(), [v, f] = m.useState(!1), [g, y] = m.useState(!1), [x, b] = m.useState(!1), [E, S] = m.useState("pt-BR");
    return /* @__PURE__ */ W(
      "nav",
      {
        ref: u,
        className: z(
          "fixed top-0 right-0 h-[60px] bg-card flex items-center justify-between px-6 transition-all duration-300 z-[100] shadow-sm",
          e
        ),
        style: {
          left: t ? "80px" : "260px"
        },
        ...c,
        children: [
          /* @__PURE__ */ w("div", { className: "flex items-center gap-4", children: r && r.length > 0 && /* @__PURE__ */ w(SP, { items: r }) }),
          /* @__PURE__ */ W("div", { className: "flex items-center gap-4", children: [
            s,
            o && /* @__PURE__ */ W(
              "button",
              {
                onClick: o,
                className: "relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
                children: [
                  /* @__PURE__ */ w(g_, { className: "h-5 w-5" }),
                  a && /* @__PURE__ */ w("span", { className: "absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" })
                ]
              }
            ),
            i,
            n && !i && /* @__PURE__ */ W("div", { className: "relative", children: [
              /* @__PURE__ */ W(
                "button",
                {
                  onClick: () => f(!v),
                  className: "flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]",
                  children: [
                    /* @__PURE__ */ w("div", { className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: n.avatar || n.name.charAt(0).toUpperCase() }),
                    /* @__PURE__ */ W("div", { className: "hidden md:flex flex-col items-start", children: [
                      /* @__PURE__ */ w("span", { className: "text-sm font-semibold text-foreground leading-tight", children: n.name }),
                      /* @__PURE__ */ w("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: n.role })
                    ] }),
                    /* @__PURE__ */ w(Lf, { className: "h-4 w-4 text-muted-foreground" })
                  ]
                }
              ),
              v && /* @__PURE__ */ W(Zt, { children: [
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => {
                      f(!1), y(!1), b(!1);
                    }
                  }
                ),
                /* @__PURE__ */ W("div", { className: "absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-md shadow-lg z-50 py-2", children: [
                  /* @__PURE__ */ W("div", { className: "px-4 py-3 border-b border-border", children: [
                    /* @__PURE__ */ w("p", { className: "text-sm font-semibold", children: n.name }),
                    /* @__PURE__ */ w("p", { className: "text-xs text-muted-foreground", children: n.role })
                  ] }),
                  /* @__PURE__ */ W("div", { className: "py-1", children: [
                    /* @__PURE__ */ W("button", { className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent", children: [
                      /* @__PURE__ */ w(Y_, { className: "h-4 w-4" }),
                      "Meu Perfil"
                    ] }),
                    /* @__PURE__ */ W("div", { className: "relative", children: [
                      /* @__PURE__ */ W(
                        "button",
                        {
                          onClick: (P) => {
                            P.stopPropagation(), b(!x), y(!1);
                          },
                          className: "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                          children: [
                            /* @__PURE__ */ W("div", { className: "flex items-center gap-3", children: [
                              /* @__PURE__ */ w(__, { className: "h-4 w-4" }),
                              "Idioma"
                            ] }),
                            /* @__PURE__ */ w("span", { className: "text-lg", children: dv.find((P) => P.value === E)?.flag })
                          ]
                        }
                      ),
                      x && /* @__PURE__ */ w("div", { className: "absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1", children: dv.map((P) => /* @__PURE__ */ W(
                        "button",
                        {
                          onClick: (O) => {
                            O.stopPropagation(), S(P.value), b(!1), f(!1);
                          },
                          className: z(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                            E === P.value && "bg-accent"
                          ),
                          children: [
                            /* @__PURE__ */ w("span", { className: "text-xl", children: P.flag }),
                            /* @__PURE__ */ w("span", { className: "flex-1 text-left", children: P.label }),
                            E === P.value && /* @__PURE__ */ w(oo, { className: "h-4 w-4 text-primary" })
                          ]
                        },
                        P.value
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ w("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ W("div", { className: "relative", children: [
                    /* @__PURE__ */ W(
                      "button",
                      {
                        onClick: (P) => {
                          P.stopPropagation(), y(!g), b(!1);
                        },
                        className: "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                        children: [
                          /* @__PURE__ */ W("div", { className: "flex items-center gap-3", children: [
                            /* @__PURE__ */ w(Hw, { className: "h-4 w-4" }),
                            "Tema"
                          ] }),
                          /* @__PURE__ */ w("span", { className: "text-xs text-muted-foreground", children: uv.find((P) => P.value === l)?.label })
                        ]
                      }
                    ),
                    g && /* @__PURE__ */ W("div", { className: "absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1", children: [
                      /* @__PURE__ */ w("div", { className: "px-3 py-2 border-b border-border", children: /* @__PURE__ */ W(
                        "button",
                        {
                          onClick: (P) => {
                            P.stopPropagation(), h();
                          },
                          className: "w-full flex items-center justify-between gap-3 py-1.5 text-sm transition-colors hover:text-primary",
                          children: [
                            /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
                              p ? /* @__PURE__ */ w(M_, { className: "h-4 w-4" }) : /* @__PURE__ */ w(V_, { className: "h-4 w-4" }),
                              /* @__PURE__ */ W("span", { children: [
                                "Modo ",
                                p ? "Escuro" : "Claro"
                              ] })
                            ] }),
                            /* @__PURE__ */ w("div", { className: z(
                              "relative w-9 h-5 rounded-full transition-colors",
                              p ? "bg-primary" : "bg-muted"
                            ), children: /* @__PURE__ */ w("div", { className: z(
                              "absolute top-0.5 w-4 h-4 rounded-full bg-background transition-transform",
                              p ? "left-[18px]" : "left-0.5"
                            ) }) })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ w("div", { className: "py-1", children: uv.map((P) => /* @__PURE__ */ W(
                        "button",
                        {
                          onClick: (O) => {
                            O.stopPropagation(), d(P.value), y(!1), f(!1);
                          },
                          className: z(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                            l === P.value && "bg-accent"
                          ),
                          children: [
                            /* @__PURE__ */ w(
                              "div",
                              {
                                className: z(
                                  "w-4 h-4 rounded-full",
                                  P.color
                                )
                              }
                            ),
                            /* @__PURE__ */ w("span", { className: "flex-1 text-left", children: P.label }),
                            l === P.value && /* @__PURE__ */ w(oo, { className: "h-4 w-4 text-primary" })
                          ]
                        },
                        P.value
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ w("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ w("div", { className: "py-1", children: /* @__PURE__ */ W("button", { className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent text-destructive", children: [
                    /* @__PURE__ */ w(qw, { className: "h-4 w-4" }),
                    "Sair"
                  ] }) })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    );
  }
);
AP.displayName = "Navbar";
const CP = ({ isVisible: e, className: t }) => e ? /* @__PURE__ */ w(
  "div",
  {
    className: z(
      "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]",
      t
    ),
    children: /* @__PURE__ */ w("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ w("div", { className: "relative w-[200px] h-[200px] rounded-full border-[12px] border-border border-t-primary animate-spin" }) })
  }
) : null;
CP.displayName = "GlobalLoader";
const TP = m.createContext(null), fX = () => {
  const e = m.useContext(TP);
  if (!e)
    throw new Error("useGlobalLoader must be used within GlobalLoaderProvider");
  return e;
}, pX = ({ children: e }) => {
  const [t, r] = m.useState(0), n = m.useCallback(() => {
    r((i) => i + 1);
  }, []), o = m.useCallback(() => {
    r((i) => Math.max(0, i - 1));
  }, []), a = t > 0;
  return /* @__PURE__ */ W(TP.Provider, { value: { isLoading: a, showLoader: n, hideLoader: o }, children: [
    e,
    /* @__PURE__ */ w(CP, { isVisible: a })
  ] });
}, p2 = m.forwardRef(
  ({ title: e, icon: t, children: r, emptyMessage: n = "Nenhum dado disponível", isEmpty: o = !1, height: a = 400, className: i }, s) => /* @__PURE__ */ W("div", { ref: s, className: z("bg-card rounded-lg border shadow-sm", i), children: [
    e && /* @__PURE__ */ w("div", { className: "border-b px-6 py-4", children: /* @__PURE__ */ W("h3", { className: "text-lg font-semibold flex items-center gap-2", children: [
      t && /* @__PURE__ */ w("span", { className: "flex items-center", children: t }),
      e
    ] }) }),
    /* @__PURE__ */ w(
      "div",
      {
        className: "p-6",
        style: { height: typeof a == "number" ? `${a}px` : a },
        children: o ? /* @__PURE__ */ w("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: n }) : r
      }
    )
  ] })
);
p2.displayName = "ChartContainer";
var h2 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Pp(e) {
  if (typeof e != "string")
    return !1;
  var t = h2;
  return t.includes(e);
}
var m2 = [
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
function _P(e) {
  if (typeof e != "string")
    return !1;
  var t = m2;
  return t.includes(e);
}
function kP(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function ht(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return _P(n) || kP(n);
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
    return _P(n) || kP(n) || Pp(n);
  });
  return Object.fromEntries(t);
}
function NP(e) {
  return e == null ? null : /* @__PURE__ */ Ut(e) ? mt(e.props) : typeof e == "object" && !Array.isArray(e) ? mt(e) : null;
}
var v2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function jd() {
  return jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jd.apply(null, arguments);
}
function g2(e, t) {
  if (e == null) return {};
  var r, n, o = y2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function y2(e, t) {
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
    viewBox: a,
    className: i,
    style: s,
    title: c,
    desc: u
  } = e, l = g2(e, v2), d = a || {
    width: n,
    height: o,
    x: 0,
    y: 0
  }, p = le("recharts-surface", i);
  return /* @__PURE__ */ m.createElement("svg", jd({}, mt(l), {
    className: p,
    width: n,
    height: o,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ m.createElement("title", null, c), /* @__PURE__ */ m.createElement("desc", null, u), r);
}), b2 = ["children", "className"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $d.apply(null, arguments);
}
function w2(e, t) {
  if (e == null) return {};
  var r, n, o = x2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function x2(e, t) {
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
  } = e, o = w2(e, b2), a = le("recharts-layer", n);
  return /* @__PURE__ */ m.createElement("g", $d({
    className: a
  }, mt(o), {
    ref: t
  }), r);
}), IP = /* @__PURE__ */ Rt(null), E2 = () => er(IP);
function Pe(e) {
  return function() {
    return e;
  };
}
const RP = Math.cos, ns = Math.sin, rr = Math.sqrt, os = Math.PI, Sc = 2 * os, Ld = Math.PI, Fd = 2 * Ld, fn = 1e-6, S2 = Fd - fn;
function MP(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function P2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return MP;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class O2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? MP : P2(t);
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
  bezierCurveTo(t, r, n, o, a, i) {
    this._append`C${+t},${+r},${+n},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, r, n, o, a) {
    if (t = +t, r = +r, n = +n, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, c = n - t, u = o - r, l = i - t, d = s - r, p = l * l + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > fn) if (!(Math.abs(d * c - u * l) > fn) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - i, v = o - s, f = c * c + u * u, g = h * h + v * v, y = Math.sqrt(f), x = Math.sqrt(p), b = a * Math.tan((Ld - Math.acos((f + p - g) / (2 * y * x))) / 2), E = b / x, S = b / y;
      Math.abs(E - 1) > fn && this._append`L${t + E * l},${r + E * d}`, this._append`A${a},${a},0,0,${+(d * h > l * v)},${this._x1 = t + S * c},${this._y1 = r + S * u}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), u = t + s, l = r + c, d = 1 ^ i, p = i ? o - a : a - o;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > fn || Math.abs(this._y1 - l) > fn) && this._append`L${u},${l}`, n && (p < 0 && (p = p % Fd + Fd), p > S2 ? this._append`A${n},${n},0,1,${d},${t - s},${r - c}A${n},${n},0,1,${d},${this._x1 = u},${this._y1 = l}` : p > fn && this._append`A${n},${n},0,${+(p >= Ld)},${d},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
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
  }, () => new O2(t);
}
function Cp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function DP(e) {
  this._context = e;
}
DP.prototype = {
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
  return new DP(e);
}
function jP(e) {
  return e[0];
}
function $P(e) {
  return e[1];
}
function LP(e, t) {
  var r = Pe(!0), n = null, o = Pc, a = null, i = Ap(s);
  e = typeof e == "function" ? e : e === void 0 ? jP : Pe(e), t = typeof t == "function" ? t : t === void 0 ? $P : Pe(t);
  function s(c) {
    var u, l = (c = Cp(c)).length, d, p = !1, h;
    for (n == null && (a = o(h = i())), u = 0; u <= l; ++u)
      !(u < l && r(d = c[u], u, c)) === p && ((p = !p) ? a.lineStart() : a.lineEnd()), p && a.point(+e(d, u, c), +t(d, u, c));
    if (h) return a = null, h + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Pe(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Pe(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (o = c, n != null && (a = o(n)), s) : o;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = o(n = c), s) : n;
  }, s;
}
function pi(e, t, r) {
  var n = null, o = Pe(!0), a = null, i = Pc, s = null, c = Ap(u);
  e = typeof e == "function" ? e : e === void 0 ? jP : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? $P : Pe(+r);
  function u(d) {
    var p, h, v, f = (d = Cp(d)).length, g, y = !1, x, b = new Array(f), E = new Array(f);
    for (a == null && (s = i(x = c())), p = 0; p <= f; ++p) {
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
    if (x) return s = null, x + "" || null;
  }
  function l() {
    return LP().defined(o).curve(i).context(a);
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
    return arguments.length ? (i = d, a != null && (s = i(a)), u) : i;
  }, u.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = i(a = d), u) : a;
  }, u;
}
class FP {
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
function A2(e) {
  return new FP(e, !0);
}
function C2(e) {
  return new FP(e, !1);
}
const Tp = {
  draw(e, t) {
    const r = rr(t / os);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Sc);
  }
}, T2 = {
  draw(e, t) {
    const r = rr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, BP = rr(1 / 3), _2 = BP * 2, k2 = {
  draw(e, t) {
    const r = rr(t / _2), n = r * BP;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, N2 = {
  draw(e, t) {
    const r = rr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, I2 = 0.8908130915292852, zP = ns(os / 10) / ns(7 * os / 10), R2 = ns(Sc / 10) * zP, M2 = -RP(Sc / 10) * zP, D2 = {
  draw(e, t) {
    const r = rr(t * I2), n = R2 * r, o = M2 * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Sc * a / 5, s = RP(i), c = ns(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, jl = rr(3), j2 = {
  draw(e, t) {
    const r = -rr(t / (jl * 3));
    e.moveTo(0, r * 2), e.lineTo(-jl * r, -r), e.lineTo(jl * r, -r), e.closePath();
  }
}, jt = -0.5, $t = rr(3) / 2, Bd = 1 / rr(12), $2 = (Bd / 2 + 1) * 3, L2 = {
  draw(e, t) {
    const r = rr(t / $2), n = r / 2, o = r * Bd, a = n, i = r * Bd + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(jt * n - $t * o, $t * n + jt * o), e.lineTo(jt * a - $t * i, $t * a + jt * i), e.lineTo(jt * s - $t * c, $t * s + jt * c), e.lineTo(jt * n + $t * o, jt * o - $t * n), e.lineTo(jt * a + $t * i, jt * i - $t * a), e.lineTo(jt * s + $t * c, jt * c - $t * s), e.closePath();
  }
};
function F2(e, t) {
  let r = null, n = Ap(o);
  e = typeof e == "function" ? e : Pe(e || Tp), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Pe(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Pe(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function as() {
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
function UP(e) {
  this._context = e;
}
UP.prototype = {
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
function B2(e) {
  return new UP(e);
}
function WP(e) {
  this._context = e;
}
WP.prototype = {
  areaStart: as,
  areaEnd: as,
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
function z2(e) {
  return new WP(e);
}
function KP(e) {
  this._context = e;
}
KP.prototype = {
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
function U2(e) {
  return new KP(e);
}
function VP(e) {
  this._context = e;
}
VP.prototype = {
  areaStart: as,
  areaEnd: as,
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
function W2(e) {
  return new VP(e);
}
function fv(e) {
  return e < 0 ? -1 : 1;
}
function pv(e, t, r) {
  var n = e._x1 - e._x0, o = t - e._x1, a = (e._y1 - e._y0) / (n || o < 0 && -0), i = (r - e._y1) / (o || n < 0 && -0), s = (a * o + i * n) / (n + o);
  return (fv(a) + fv(i)) * Math.min(Math.abs(a), Math.abs(i), 0.5 * Math.abs(s)) || 0;
}
function hv(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function $l(e, t, r) {
  var n = e._x0, o = e._y0, a = e._x1, i = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, o + s * t, a - s, i - s * r, a, i);
}
function ss(e) {
  this._context = e;
}
ss.prototype = {
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
        $l(this, this._t0, hv(this, this._t0));
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
          this._point = 3, $l(this, hv(this, r = pv(this, e, t)), r);
          break;
        default:
          $l(this, this._t0, r = pv(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function qP(e) {
  this._context = new HP(e);
}
(qP.prototype = Object.create(ss.prototype)).point = function(e, t) {
  ss.prototype.point.call(this, t, e);
};
function HP(e) {
  this._context = e;
}
HP.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, o, a) {
    this._context.bezierCurveTo(t, e, n, r, a, o);
  }
};
function K2(e) {
  return new ss(e);
}
function V2(e) {
  return new qP(e);
}
function GP(e) {
  this._context = e;
}
GP.prototype = {
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
        for (var n = mv(e), o = mv(t), a = 0, i = 1; i < r; ++a, ++i)
          this._context.bezierCurveTo(n[0][a], o[0][a], n[1][a], o[1][a], e[i], t[i]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function mv(e) {
  var t, r = e.length - 1, n, o = new Array(r), a = new Array(r), i = new Array(r);
  for (o[0] = 0, a[0] = 2, i[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, a[t] = 4, i[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, a[r - 1] = 7, i[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = o[t] / a[t - 1], a[t] -= n, i[t] -= n * i[t - 1];
  for (o[r - 1] = i[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) o[t] = (i[t] - o[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - o[t + 1];
  return [o, a];
}
function q2(e) {
  return new GP(e);
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
function H2(e) {
  return new Oc(e, 0.5);
}
function G2(e) {
  return new Oc(e, 0);
}
function Y2(e) {
  return new Oc(e, 1);
}
function so(e, t) {
  if ((i = e.length) > 1)
    for (var r = 1, n, o, a = e[t[0]], i, s = a.length; r < i; ++r)
      for (o = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function zd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function X2(e, t) {
  return e[t];
}
function Z2(e) {
  const t = [];
  return t.key = e, t;
}
function J2() {
  var e = Pe([]), t = zd, r = so, n = X2;
  function o(a) {
    var i = Array.from(e.apply(this, arguments), Z2), s, c = i.length, u = -1, l;
    for (const d of a)
      for (s = 0, ++u; s < c; ++s)
        (i[s][u] = [0, +n(d, i[s].key, u, a)]).data = d;
    for (s = 0, l = Cp(t(i)); s < c; ++s)
      i[l[s]].index = s;
    return r(i, l), i;
  }
  return o.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Pe(Array.from(a)), o) : e;
  }, o.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Pe(+a), o) : n;
  }, o.order = function(a) {
    return arguments.length ? (t = a == null ? zd : typeof a == "function" ? a : Pe(Array.from(a)), o) : t;
  }, o.offset = function(a) {
    return arguments.length ? (r = a ?? so, o) : r;
  }, o;
}
function Q2(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, a = e[0].length, i; o < a; ++o) {
      for (i = r = 0; r < n; ++r) i += e[r][o][1] || 0;
      if (i) for (r = 0; r < n; ++r) e[r][o][1] /= i;
    }
    so(e, t);
  }
}
function e$(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, a = n.length; r < a; ++r) {
      for (var i = 0, s = 0; i < o; ++i) s += e[i][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    so(e, t);
  }
}
function t$(e, t) {
  if (!(!((i = e.length) > 0) || !((a = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, o, a, i; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < i; ++s) {
        for (var l = e[t[s]], d = l[n][1] || 0, p = l[n - 1][1] || 0, h = (d - p) / 2, v = 0; v < s; ++v) {
          var f = e[t[v]], g = f[n][1] || 0, y = f[n - 1][1] || 0;
          h += g - y;
        }
        c += d, u += h * d;
      }
      o[n - 1][1] += o[n - 1][0] = r, c && (r -= u / c);
    }
    o[n - 1][1] += o[n - 1][0] = r, so(e, t);
  }
}
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ll = {}, Fl = {}, vv;
function r$() {
  return vv || (vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Fl)), Fl;
}
var Bl = {}, gv;
function YP() {
  return gv || (gv = 1, (function(e) {
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
var zl = {}, yv;
function _p() {
  return yv || (yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(zl)), zl;
}
var Ul = {}, Wl = {}, bv;
function n$() {
  return bv || (bv = 1, (function(e) {
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
var wv;
function kp() {
  return wv || (wv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ n$(), r = /* @__PURE__ */ _p();
    function n(o) {
      if (Array.isArray(o))
        return o.map(r.toKey);
      if (typeof o == "symbol")
        return [o];
      o = t.toString(o);
      const a = [], i = o.length;
      if (i === 0)
        return a;
      let s = 0, c = "", u = "", l = !1;
      for (o.charCodeAt(0) === 46 && (a.push(""), s++); s < i; ) {
        const d = o[s];
        u ? d === "\\" && s + 1 < i ? (s++, c += o[s]) : d === u ? u = "" : c += d : l ? d === '"' || d === "'" ? u = d : d === "]" ? (l = !1, a.push(c), c = "") : c += d : d === "[" ? (l = !0, c && (a.push(c), c = "")) : d === "." ? c && (a.push(c), c = "") : c += d, s++;
      }
      return c && a.push(c), a;
    }
    e.toPath = n;
  })(Ul)), Ul;
}
var xv;
function Np() {
  return xv || (xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ r$(), r = /* @__PURE__ */ YP(), n = /* @__PURE__ */ _p(), o = /* @__PURE__ */ kp();
    function a(s, c, u) {
      if (s == null)
        return u;
      switch (typeof c) {
        case "string": {
          if (t.isUnsafeProperty(c))
            return u;
          const l = s[c];
          return l === void 0 ? r.isDeepKey(c) ? a(s, o.toPath(c), u) : u : l;
        }
        case "number":
        case "symbol": {
          typeof c == "number" && (c = n.toKey(c));
          const l = s[c];
          return l === void 0 ? u : l;
        }
        default: {
          if (Array.isArray(c))
            return i(s, c, u);
          if (Object.is(c?.valueOf(), -0) ? c = "-0" : c = String(c), t.isUnsafeProperty(c))
            return u;
          const l = s[c];
          return l === void 0 ? u : l;
        }
      }
    }
    function i(s, c, u) {
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
    e.get = a;
  })(Ll)), Ll;
}
var Kl, Ev;
function o$() {
  return Ev || (Ev = 1, Kl = Np().get), Kl;
}
var a$ = /* @__PURE__ */ o$();
const In = /* @__PURE__ */ an(a$);
var Ze = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Nt = (e) => typeof e == "number" && e != +e, kr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, X = (e) => (typeof e == "number" || e instanceof Number) && !Nt(e), fr = (e) => X(e) || typeof e == "string", i$ = 0, sa = (e) => {
  var t = ++i$;
  return "".concat(e || "").concat(t);
}, ct = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!X(t) && typeof t != "string")
    return n;
  var a;
  if (kr(t)) {
    if (r == null)
      return n;
    var i = t.indexOf("%");
    a = r * parseFloat(t.slice(0, i)) / 100;
  } else
    a = +t;
  return Nt(a) && (a = n), o && r != null && a > r && (a = r), a;
}, XP = (e) => {
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
function ZP(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : In(n, t)) === r);
}
var Ae = (e) => e === null || typeof e > "u", Na = (e) => Ae(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), s$ = ["type", "size", "sizeType"];
function Ud() {
  return Ud = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ud.apply(null, arguments);
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
function Pv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sv(Object(r), !0).forEach(function(n) {
      c$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c$(e, t, r) {
  return (t = l$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l$(e) {
  var t = u$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d$(e, t) {
  if (e == null) return {};
  var r, n, o = f$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function f$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var JP = {
  symbolCircle: Tp,
  symbolCross: T2,
  symbolDiamond: k2,
  symbolSquare: N2,
  symbolStar: D2,
  symbolTriangle: j2,
  symbolWye: L2
}, p$ = Math.PI / 180, h$ = (e) => {
  var t = "symbol".concat(Na(e));
  return JP[t] || Tp;
}, m$ = (e, t, r) => {
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
      var n = 18 * p$;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, v$ = (e, t) => {
  JP["symbol".concat(Na(e))] = t;
}, Ip = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, o = d$(e, s$), a = Pv(Pv({}, o), {}, {
    type: t,
    size: r,
    sizeType: n
  }), i = "circle";
  typeof t == "string" && (i = t);
  var s = () => {
    var p = h$(i), h = F2().type(p).size(m$(r, n, i)), v = h();
    if (v !== null)
      return v;
  }, {
    className: c,
    cx: u,
    cy: l
  } = a, d = mt(a);
  return u === +u && l === +l && r === +r ? /* @__PURE__ */ m.createElement("path", Ud({}, d, {
    className: le("recharts-symbols", c),
    transform: "translate(".concat(u, ", ").concat(l, ")"),
    d: s()
  })) : null;
};
Ip.registerSymbol = v$;
var Rp = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Ut(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((o) => {
    Pp(o) && (n[o] = ((a) => r[o](r, a)));
  }), n;
}, g$ = (e, t, r) => (n) => (e(t, r, n), null), Ia = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((o) => {
    var a = e[o];
    Pp(o) && typeof a == "function" && (n || (n = {}), n[o] = g$(a, t, r));
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
function Ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function y$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(r), !0).forEach(function(n) {
      Mp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mp(e, t, r) {
  return (t = b$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b$(e) {
  var t = w$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w$(e, t) {
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
class Dp extends ba {
  /**
   * Render the path of icon
   * @param data Data of each legend item
   * @param iconType if defined, it will always render this icon. If undefined then it uses icon from data.type
   * @return Path element
   */
  renderIcon(t, r) {
    var {
      inactiveColor: n
    } = this.props, o = Lt / 2, a = Lt / 6, i = Lt / 3, s = t.inactive ? n : t.color, c = r ?? t.type;
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
        d: "M0,".concat(o, "h").concat(i, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(2 * i, ",").concat(o, `
            H`).concat(Lt, "M").concat(2 * i, ",").concat(o, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(i, ",").concat(o),
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
      var u = y$({}, t);
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
      inactiveColor: a,
      iconType: i
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
      var v = l.inactive ? a : l.color, f = p ? p(l.value, l, d) : l.value;
      return /* @__PURE__ */ m.createElement("li", Wd({
        className: h,
        style: c,
        key: "legend-item-".concat(d)
      }, Ia(this.props, l, d)), /* @__PURE__ */ m.createElement(Op, {
        width: r,
        height: r,
        viewBox: s,
        style: u,
        "aria-label": "".concat(f, " legend icon")
      }, this.renderIcon(l, i)), /* @__PURE__ */ m.createElement("span", {
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
var Vl = {}, ql = {}, Av;
function x$() {
  return Av || (Av = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const o = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const i = r[a], s = n(i);
        o.has(s) || o.set(s, i);
      }
      return Array.from(o.values());
    }
    e.uniqBy = t;
  })(ql)), ql;
}
var Hl = {}, Cv;
function QP() {
  return Cv || (Cv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Hl)), Hl;
}
var Gl = {}, Yl = {}, Xl = {}, Tv;
function E$() {
  return Tv || (Tv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Xl)), Xl;
}
var _v;
function jp() {
  return _v || (_v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ E$();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(Yl)), Yl;
}
var Zl = {}, kv;
function S$() {
  return kv || (kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Zl)), Zl;
}
var Nv;
function P$() {
  return Nv || (Nv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jp(), r = /* @__PURE__ */ S$();
    function n(o) {
      return r.isObjectLike(o) && t.isArrayLike(o);
    }
    e.isArrayLikeObject = n;
  })(Gl)), Gl;
}
var Jl = {}, Ql = {}, Iv;
function O$() {
  return Iv || (Iv = 1, (function(e) {
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
var eu = {}, tu = {}, ru = {}, nu = {}, Rv;
function eO() {
  return Rv || (Rv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(nu)), nu;
}
var ou = {}, Mv;
function tO() {
  return Mv || (Mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(ou)), ou;
}
var au = {}, Dv;
function rO() {
  return Dv || (Dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(au)), au;
}
var jv;
function A$() {
  return jv || (jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eO(), r = /* @__PURE__ */ tO(), n = /* @__PURE__ */ rO();
    function o(l, d, p) {
      return typeof p != "function" ? o(l, d, () => {
      }) : a(l, d, function h(v, f, g, y, x, b) {
        const E = p(v, f, g, y, x, b);
        return E !== void 0 ? !!E : a(v, f, h, b);
      }, /* @__PURE__ */ new Map());
    }
    function a(l, d, p, h) {
      if (d === l)
        return !0;
      switch (typeof d) {
        case "object":
          return i(l, d, p, h);
        case "function":
          return Object.keys(d).length > 0 ? a(l, { ...d }, p, h) : n.eq(l, d);
        default:
          return t.isObject(l) ? typeof d == "string" ? d === "" : !0 : n.eq(l, d);
      }
    }
    function i(l, d, p, h) {
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
        for (let x = 0; x < l.length; x++) {
          if (v.has(x))
            continue;
          const b = l[x];
          let E = !1;
          if (p(b, g, f, l, d, h) && (E = !0), E) {
            v.add(x), y = !0;
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
var $v;
function nO() {
  return $v || ($v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ A$();
    function r(n, o) {
      return t.isMatchWith(n, o, () => {
      });
    }
    e.isMatch = r;
  })(tu)), tu;
}
var iu = {}, su = {}, cu = {}, Lv;
function C$() {
  return Lv || (Lv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(cu)), cu;
}
var lu = {}, Fv;
function oO() {
  return Fv || (Fv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(lu)), lu;
}
var uu = {}, Bv;
function aO() {
  return Bv || (Bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", o = "[object Boolean]", a = "[object Arguments]", i = "[object Symbol]", s = "[object Date]", c = "[object Map]", u = "[object Set]", l = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", v = "[object Error]", f = "[object DataView]", g = "[object Uint8Array]", y = "[object Uint8ClampedArray]", x = "[object Uint16Array]", b = "[object Uint32Array]", E = "[object BigUint64Array]", S = "[object Int8Array]", P = "[object Int16Array]", O = "[object Int32Array]", A = "[object BigInt64Array]", _ = "[object Float32Array]", I = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = p, e.arrayTag = l, e.bigInt64ArrayTag = A, e.bigUint64ArrayTag = E, e.booleanTag = o, e.dataViewTag = f, e.dateTag = s, e.errorTag = v, e.float32ArrayTag = _, e.float64ArrayTag = I, e.functionTag = d, e.int16ArrayTag = P, e.int32ArrayTag = O, e.int8ArrayTag = S, e.mapTag = c, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = u, e.stringTag = r, e.symbolTag = i, e.uint16ArrayTag = x, e.uint32ArrayTag = b, e.uint8ArrayTag = g, e.uint8ClampedArrayTag = y;
  })(uu)), uu;
}
var du = {}, zv;
function T$() {
  return zv || (zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(du)), du;
}
var Uv;
function iO() {
  return Uv || (Uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ C$(), r = /* @__PURE__ */ oO(), n = /* @__PURE__ */ aO(), o = /* @__PURE__ */ tO(), a = /* @__PURE__ */ T$();
    function i(l, d) {
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
        for (const [y, x] of l)
          g.set(y, s(x, y, p, h, v));
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
      if (a.isTypedArray(l)) {
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
        const y = f[g], x = Object.getOwnPropertyDescriptor(l, y);
        (x == null || x.writable) && (l[y] = s(d[y], y, p, h, v));
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
    e.cloneDeepWith = i, e.cloneDeepWithImpl = s, e.copyProperties = c;
  })(su)), su;
}
var Wv;
function _$() {
  return Wv || (Wv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iO();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(iu)), iu;
}
var Kv;
function k$() {
  return Kv || (Kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nO(), r = /* @__PURE__ */ _$();
    function n(o) {
      return o = r.cloneDeep(o), (a) => t.isMatch(a, o);
    }
    e.matches = n;
  })(eu)), eu;
}
var fu = {}, pu = {}, hu = {}, Vv;
function N$() {
  return Vv || (Vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iO(), r = /* @__PURE__ */ aO();
    function n(o, a) {
      return t.cloneDeepWith(o, (i, s, c, u) => {
        const l = a?.(i, s, c, u);
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
var qv;
function I$() {
  return qv || (qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ N$();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(pu)), pu;
}
var mu = {}, vu = {}, Hv;
function sO() {
  return Hv || (Hv = 1, (function(e) {
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
var gu = {}, Gv;
function R$() {
  return Gv || (Gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oO();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(gu)), gu;
}
var Yv;
function M$() {
  return Yv || (Yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ YP(), r = /* @__PURE__ */ sO(), n = /* @__PURE__ */ R$(), o = /* @__PURE__ */ kp();
    function a(i, s) {
      let c;
      if (Array.isArray(s) ? c = s : typeof s == "string" && t.isDeepKey(s) && i?.[s] == null ? c = o.toPath(s) : c = [s], c.length === 0)
        return !1;
      let u = i;
      for (let l = 0; l < c.length; l++) {
        const d = c[l];
        if ((u == null || !Object.hasOwn(u, d)) && !((Array.isArray(u) || n.isArguments(u)) && r.isIndex(d) && d < u.length))
          return !1;
        u = u[d];
      }
      return !0;
    }
    e.has = a;
  })(mu)), mu;
}
var Xv;
function D$() {
  return Xv || (Xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nO(), r = /* @__PURE__ */ _p(), n = /* @__PURE__ */ I$(), o = /* @__PURE__ */ Np(), a = /* @__PURE__ */ M$();
    function i(s, c) {
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
        return l === void 0 ? a.has(u, s) : c === void 0 ? l === void 0 : t.isMatch(l, c);
      };
    }
    e.matchesProperty = i;
  })(fu)), fu;
}
var Zv;
function j$() {
  return Zv || (Zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ QP(), r = /* @__PURE__ */ O$(), n = /* @__PURE__ */ k$(), o = /* @__PURE__ */ D$();
    function a(i) {
      if (i == null)
        return t.identity;
      switch (typeof i) {
        case "function":
          return i;
        case "object":
          return Array.isArray(i) && i.length === 2 ? o.matchesProperty(i[0], i[1]) : n.matches(i);
        case "string":
        case "symbol":
        case "number":
          return r.property(i);
      }
    }
    e.iteratee = a;
  })(Jl)), Jl;
}
var Jv;
function $$() {
  return Jv || (Jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ x$(), r = /* @__PURE__ */ QP(), n = /* @__PURE__ */ P$(), o = /* @__PURE__ */ j$();
    function a(i, s = r.identity) {
      return n.isArrayLikeObject(i) ? t.uniqBy(Array.from(i), o.iteratee(s)) : [];
    }
    e.uniqBy = a;
  })(Vl)), Vl;
}
var yu, Qv;
function L$() {
  return Qv || (Qv = 1, yu = $$().uniqBy), yu;
}
var F$ = /* @__PURE__ */ L$();
const eg = /* @__PURE__ */ an(F$);
function cO(e, t, r) {
  return t === !0 ? eg(e, r) : typeof t == "function" ? eg(e, t) : e;
}
var hi = { exports: {} }, bu = {}, mi = { exports: {} }, wu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function B$() {
  if (tg) return wu;
  tg = 1;
  var e = Pt;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(d, p) {
    var h = p(), v = n({ inst: { value: h, getSnapshot: p } }), f = v[0].inst, g = v[1];
    return a(
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
    ), i(h), h;
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
var rg;
function z$() {
  return rg || (rg = 1, process.env.NODE_ENV !== "production" && (function() {
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
        a(f, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      g = i({
        inst: { value: f, getSnapshot: v }
      });
      var y = g[0].inst, x = g[1];
      return c(
        function() {
          y.value = f, y.getSnapshot = v, r(y) && x({ inst: y });
        },
        [h, f, v]
      ), s(
        function() {
          return r(y) && x({ inst: y }), h(function() {
            r(y) && x({ inst: y });
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
        return !a(h, f);
      } catch {
        return !0;
      }
    }
    function n(h, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Pt, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, l = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    xu.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), xu;
}
var ng;
function lO() {
  return ng || (ng = 1, process.env.NODE_ENV === "production" ? mi.exports = B$() : mi.exports = z$()), mi.exports;
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
var og;
function U$() {
  if (og) return bu;
  og = 1;
  var e = Pt, t = lO();
  function r(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, a = e.useRef, i = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return bu.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
    var v = a(null);
    if (v.current === null) {
      var f = { hasValue: !1, value: null };
      v.current = f;
    } else f = v.current;
    v = s(
      function() {
        function y(P) {
          if (!x) {
            if (x = !0, b = P, P = p(P), h !== void 0 && f.hasValue) {
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
        var x = !1, b, E, S = d === void 0 ? null : d;
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
    return i(
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
var ag;
function W$() {
  return ag || (ag = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, l) {
      return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Pt, r = lO(), n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, a = t.useRef, i = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Eu.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
      var v = a(null);
      if (v.current === null) {
        var f = { hasValue: !1, value: null };
        v.current = f;
      } else f = v.current;
      v = s(
        function() {
          function y(P) {
            if (!x) {
              if (x = !0, b = P, P = p(P), h !== void 0 && f.hasValue) {
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
          var x = !1, b, E, S = d === void 0 ? null : d;
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
      return i(
        function() {
          f.hasValue = !0, f.value = g;
        },
        [g]
      ), c(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Eu;
}
var ig;
function K$() {
  return ig || (ig = 1, process.env.NODE_ENV === "production" ? hi.exports = U$() : hi.exports = W$()), hi.exports;
}
var V$ = K$(), $p = /* @__PURE__ */ Rt(null), q$ = (e) => e, _e = () => {
  var e = er($p);
  return e ? e.store.dispatch : q$;
}, Ui = () => {
}, H$ = () => Ui, G$ = (e, t) => e === t;
function Z(e) {
  var t = er($p);
  return V$.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : H$, t ? t.store.getState : Ui, t ? t.store.getState : Ui, t ? e : Ui, G$);
}
var Y$ = (e, t, r) => {
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
      } catch (a) {
        ({ stack: o } = a);
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
}, X$ = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: a, inputSelectorResultsCopy: i } = e, s = n(() => ({}), ...o);
  if (!(s.apply(null, a) === s.apply(null, i))) {
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
        firstInputs: a,
        secondInputs: i,
        stack: u
      }
    );
  }
}, Z$ = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function J$(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Q$(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function eL(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var sg = (e) => Array.isArray(e) ? e : [e];
function tL(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return eL(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function cg(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var rL = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...Z$,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Y$
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: X$
    }
  };
}, nL = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, oL = typeof WeakRef < "u" ? WeakRef : nL, aL = 0, lg = 1;
function vi() {
  return {
    s: aL,
    v: void 0,
    o: null,
    p: null
  };
}
function uO(e, t = {}) {
  let r = vi();
  const { resultEqualityCheck: n } = t;
  let o, a = 0;
  function i() {
    let s = r;
    const { length: c } = arguments;
    for (let d = 0, p = c; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let v = s.o;
        v === null && (s.o = v = /* @__PURE__ */ new WeakMap());
        const f = v.get(h);
        f === void 0 ? (s = vi(), v.set(h, s)) : s = f;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const f = v.get(h);
        f === void 0 ? (s = vi(), v.set(h, s)) : s = f;
      }
    }
    const u = s;
    let l;
    if (s.s === lg)
      l = s.v;
    else if (l = e.apply(null, arguments), a++, n) {
      const d = o?.deref?.() ?? o;
      d != null && n(d, l) && (l = d, a !== 0 && a--), o = typeof l == "object" && l !== null || typeof l == "function" ? new oL(l) : l;
    }
    return u.s = lg, u.v = l, l;
  }
  return i.clearCache = () => {
    r = vi(), i.resetResultsCount();
  }, i.resultsCount = () => a, i.resetResultsCount = () => {
    a = 0;
  }, i;
}
function iL(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let a = 0, i = 0, s, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), J$(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const l = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: h = uO,
      argsMemoizeOptions: v = [],
      devModeChecks: f = {}
    } = l, g = sg(p), y = sg(v), x = tL(o), b = d(function() {
      return a++, u.apply(
        null,
        arguments
      );
    }, ...g);
    let E = !0;
    const S = h(function() {
      i++;
      const O = cg(
        x,
        arguments
      );
      if (s = b.apply(null, O), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: _ } = rL(E, f);
        if (A.shouldRun && A.run(
          u,
          O,
          s
        ), _.shouldRun) {
          const I = cg(
            x,
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
      dependencies: x,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => s,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var C = /* @__PURE__ */ iL(uO), sL = Object.assign(
  (e, t = C) => {
    Q$(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((i, s, c) => (i[r[c]] = s, i), {})
    );
  },
  { withTypes: () => sL }
), Su = {}, Pu = {}, Ou = {}, ug;
function cL() {
  return ug || (ug = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, o, a) => {
      if (n !== o) {
        const i = t(n), s = t(o);
        if (i === s && i === 0) {
          if (n < o)
            return a === "desc" ? 1 : -1;
          if (n > o)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? s - i : i - s;
      }
      return 0;
    };
    e.compareValues = r;
  })(Ou)), Ou;
}
var Au = {}, Cu = {}, dg;
function dO() {
  return dg || (dg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Cu)), Cu;
}
var fg;
function lL() {
  return fg || (fg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ dO(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function o(a, i) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || i != null && Object.hasOwn(i, a);
    }
    e.isKey = o;
  })(Au)), Au;
}
var pg;
function uL() {
  return pg || (pg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cL(), r = /* @__PURE__ */ lL(), n = /* @__PURE__ */ kp();
    function o(a, i, s, c) {
      if (a == null)
        return [];
      s = c ? void 0 : s, Array.isArray(a) || (a = Object.values(a)), Array.isArray(i) || (i = i == null ? [null] : [i]), i.length === 0 && (i = [null]), Array.isArray(s) || (s = s == null ? [] : [s]), s = s.map((h) => String(h));
      const u = (h, v) => {
        let f = h;
        for (let g = 0; g < v.length && f != null; ++g)
          f = f[v[g]];
        return f;
      }, l = (h, v) => v == null || h == null ? v : typeof h == "object" && "key" in h ? Object.hasOwn(v, h.key) ? v[h.key] : u(v, h.path) : typeof h == "function" ? h(v) : Array.isArray(h) ? u(v, h) : typeof v == "object" ? v[h] : v, d = i.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return a.map((h) => ({
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
var Tu = {}, hg;
function dL() {
  return hg || (hg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const o = [], a = Math.floor(n), i = (s, c) => {
        for (let u = 0; u < s.length; u++) {
          const l = s[u];
          Array.isArray(l) && c < a ? i(l, c + 1) : o.push(l);
        }
      };
      return i(r, 0), o;
    }
    e.flatten = t;
  })(Tu)), Tu;
}
var _u = {}, mg;
function fO() {
  return mg || (mg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sO(), r = /* @__PURE__ */ jp(), n = /* @__PURE__ */ eO(), o = /* @__PURE__ */ rO();
    function a(i, s, c) {
      return n.isObject(c) && (typeof s == "number" && r.isArrayLike(c) && t.isIndex(s) && s < c.length || typeof s == "string" && s in c) ? o.eq(c[s], i) : !1;
    }
    e.isIterateeCall = a;
  })(_u)), _u;
}
var vg;
function fL() {
  return vg || (vg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ uL(), r = /* @__PURE__ */ dL(), n = /* @__PURE__ */ fO();
    function o(a, ...i) {
      const s = i.length;
      return s > 1 && n.isIterateeCall(a, i[0], i[1]) ? i = [] : s > 2 && n.isIterateeCall(i[0], i[1], i[2]) && (i = [i[0]]), t.orderBy(a, r.flatten(i), ["asc"]);
    }
    e.sortBy = o;
  })(Su)), Su;
}
var ku, gg;
function pL() {
  return gg || (gg = 1, ku = fL().sortBy), ku;
}
var hL = /* @__PURE__ */ pL();
const Ac = /* @__PURE__ */ an(hL);
var pO = (e) => e.legend.settings, mL = (e) => e.legend.size, vL = (e) => e.legend.payload, gL = C([vL, pO], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ac(n, r) : n;
});
function yL() {
  return Z(gL);
}
var gi = 1;
function hO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = Ke({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = ve(
    (o) => {
      if (o != null) {
        var a = o.getBoundingClientRect(), i = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(i.height - t.height) > gi || Math.abs(i.left - t.left) > gi || Math.abs(i.top - t.top) > gi || Math.abs(i.width - t.width) > gi) && r({
          height: i.height,
          left: i.left,
          top: i.top,
          width: i.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function tt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bL = typeof Symbol == "function" && Symbol.observable || "@@observable", yg = bL, Nu = () => Math.random().toString(36).substring(7).split("").join("."), wL = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Nu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Nu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Nu()}`
}, wn = wL;
function Ra(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function xL(e) {
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
  if (PL(e))
    return "date";
  if (SL(e))
    return "error";
  const r = EL(e);
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
function EL(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function SL(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function PL(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Vr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = xL(e)), t;
}
function mO(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(2) : `Expected the root reducer to be a function. Instead, received: '${Vr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(1) : `Expected the enhancer to be a function. Instead, received: '${Vr(r)}'`);
    return r(mO)(e, t);
  }
  let n = e, o = t, a = /* @__PURE__ */ new Map(), i = a, s = 0, c = !1;
  function u() {
    i === a && (i = /* @__PURE__ */ new Map(), a.forEach((g, y) => {
      i.set(y, g);
    }));
  }
  function l() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? tt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(4) : `Expected the listener to be a function. Instead, received: '${Vr(g)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? tt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    u();
    const x = s++;
    return i.set(x, g), function() {
      if (y) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? tt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, u(), i.delete(x), a = null;
      }
    };
  }
  function p(g) {
    if (!Ra(g))
      throw new Error(process.env.NODE_ENV === "production" ? tt(7) : `Actions must be plain objects. Instead, the actual type was: '${Vr(g)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof g.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? tt(17) : `Action "type" property must be a string. Instead, the actual type was: '${Vr(g.type)}'. Value was: '${g.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? tt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = n(o, g);
    } finally {
      c = !1;
    }
    return (a = i).forEach((x) => {
      x();
    }), g;
  }
  function h(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(10) : `Expected the nextReducer to be a function. Instead, received: '${Vr(g)}`);
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
          throw new Error(process.env.NODE_ENV === "production" ? tt(11) : `Expected the observer to be an object. Instead, received: '${Vr(y)}'`);
        function x() {
          const E = y;
          E.next && E.next(l());
        }
        return x(), {
          unsubscribe: g(x)
        };
      },
      [yg]() {
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
    [yg]: v
  };
}
function bg(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function OL(e, t, r, n) {
  const o = Object.keys(t), a = r && r.type === wn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ra(e))
    return `The ${a} has unexpected type of "${Vr(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const i = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !n[s]);
  if (i.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === wn.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function AL(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: wn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: wn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${wn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function vO(e) {
  const t = Object.keys(e), r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && bg(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let a;
  try {
    AL(r);
  } catch (i) {
    a = i;
  }
  return function(s = {}, c) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const d = OL(s, r, c, o);
      d && bg(d);
    }
    let u = !1;
    const l = {};
    for (let d = 0; d < n.length; d++) {
      const p = n[d], h = r[p], v = s[p], f = h(v, c);
      if (typeof f > "u") {
        const g = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? tt(14) : `When called with an action of type ${g ? `"${String(g)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[p] = f, u = u || f !== v;
    }
    return u = u || n.length !== Object.keys(s).length, u ? l : s;
  };
}
function cs(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function CL(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? tt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: o.getState,
      dispatch: (c, ...u) => a(c, ...u)
    }, s = e.map((c) => c(i));
    return a = cs(...s)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function Lp(e) {
  return Ra(e) && "type" in e && typeof e.type == "string";
}
var gO = Symbol.for("immer-nothing"), wg = Symbol.for("immer-draftable"), It = Symbol.for("immer-state"), TL = process.env.NODE_ENV !== "production" ? [
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
    const r = TL[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ca = Object.getPrototypeOf;
function Rn(e) {
  return !!e && !!e[It];
}
function Nr(e) {
  return e ? yO(e) || Array.isArray(e) || !!e[wg] || !!e.constructor?.[wg] || Ma(e) || Tc(e) : !1;
}
var _L = Object.prototype.constructor.toString(), xg = /* @__PURE__ */ new WeakMap();
function yO(e) {
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
  let n = xg.get(r);
  return n === void 0 && (n = Function.toString.call(r), xg.set(r, n)), n === _L;
}
function ls(e, t, r = !0) {
  Cc(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Cc(e) {
  const t = e[It];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ma(e) ? 2 : Tc(e) ? 3 : 0;
}
function Kd(e, t) {
  return Cc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function bO(e, t, r) {
  const n = Cc(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function kL(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ma(e) {
  return e instanceof Map;
}
function Tc(e) {
  return e instanceof Set;
}
function pn(e) {
  return e.copy_ || e.base_;
}
function Vd(e, t) {
  if (Ma(e))
    return new Map(e);
  if (Tc(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = yO(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[It];
    let o = Reflect.ownKeys(n);
    for (let a = 0; a < o.length; a++) {
      const i = o[a], s = n[i];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[i]
      });
    }
    return Object.create(ca(e), n);
  } else {
    const n = ca(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Fp(e, t = !1) {
  return _c(e) || Rn(e) || !Nr(e) || (Cc(e) > 1 && Object.defineProperties(e, {
    set: yi,
    add: yi,
    clear: yi,
    delete: yi
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Fp(r, !0))), e;
}
function NL() {
  gt(2);
}
var yi = {
  value: NL
};
function _c(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var IL = {};
function Mn(e) {
  const t = IL[e];
  return t || gt(0, e), t;
}
var la;
function wO() {
  return la;
}
function RL(e, t) {
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
function Eg(e, t) {
  t && (Mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function qd(e) {
  Hd(e), e.drafts_.forEach(ML), e.drafts_ = null;
}
function Hd(e) {
  e === la && (la = e.parent_);
}
function Sg(e) {
  return la = RL(la, e);
}
function ML(e) {
  const t = e[It];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Pg(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[It].modified_ && (qd(t), gt(4)), Nr(e) && (e = us(t, e), t.parent_ || ds(t, e)), t.patches_ && Mn("Patches").generateReplacementPatches_(
    r[It].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = us(t, r, []), qd(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== gO ? e : void 0;
}
function us(e, t, r) {
  if (_c(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), o = t[It];
  if (!o)
    return ls(
      t,
      (a, i) => Og(e, o, t, a, i, r),
      n
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return ds(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const a = o.copy_;
    let i = a, s = !1;
    o.type_ === 3 && (i = new Set(a), a.clear(), s = !0), ls(
      i,
      (c, u) => Og(
        e,
        o,
        a,
        c,
        u,
        r,
        s
      ),
      n
    ), ds(e, a, !1), r && e.patches_ && Mn("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Og(e, t, r, n, o, a, i) {
  if (o == null || typeof o != "object" && !i)
    return;
  const s = _c(o);
  if (!(s && !i)) {
    if (process.env.NODE_ENV !== "production" && o === r && gt(5), Rn(o)) {
      const c = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Kd(t.assigned_, n) ? a.concat(n) : void 0, u = us(e, o, c);
      if (bO(r, n, u), Rn(u))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else i && r.add(o);
    if (Nr(o) && !s) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === o && s)
        return;
      us(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Ma(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ds(e, o);
    }
  }
}
function ds(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Fp(t, r);
}
function DL(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : wO(),
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
  let o = n, a = Bp;
  r && (o = [n], a = ua);
  const { revoke: i, proxy: s } = Proxy.revocable(o, a);
  return n.draft_ = s, n.revoke_ = i, s;
}
var Bp = {
  get(e, t) {
    if (t === It)
      return e;
    const r = pn(e);
    if (!Kd(r, t))
      return jL(e, r, t);
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
    const n = xO(pn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Iu(pn(e), t), a = o?.[It];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (kL(r, o) && (r !== void 0 || Kd(e.base_, t)))
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
    return ca(e.base_);
  },
  setPrototypeOf() {
    gt(12);
  }
}, ua = {};
ls(Bp, (e, t) => {
  ua[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ua.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && gt(13), ua.set.call(this, e, t, void 0);
};
ua.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && gt(14), Bp.set.call(this, e[0], t, r, e[0]);
};
function Iu(e, t) {
  const r = e[It];
  return (r ? pn(r) : e)[t];
}
function jL(e, t, r) {
  const n = xO(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function xO(e, t) {
  if (!(t in e))
    return;
  let r = ca(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ca(r);
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
var $L = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const i = this;
        return function(c = a, ...u) {
          return i.produce(c, (l) => r.call(this, l, ...u));
        };
      }
      typeof r != "function" && gt(6), n !== void 0 && typeof n != "function" && gt(7);
      let o;
      if (Nr(t)) {
        const a = Sg(this), i = Yd(t, void 0);
        let s = !0;
        try {
          o = r(i), s = !1;
        } finally {
          s ? qd(a) : Hd(a);
        }
        return Eg(a, n), Pg(o, a);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === gO && (o = void 0), this.autoFreeze_ && Fp(o, !0), n) {
          const a = [], i = [];
          Mn("Patches").generateReplacementPatches_(t, o, a, i), n(a, i);
        }
        return o;
      } else
        gt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (c) => t(c, ...s));
      let n, o;
      return [this.produce(t, r, (i, s) => {
        n = i, o = s;
      }), n, o];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Nr(e) || gt(8), Rn(e) && (e = Or(e));
    const t = Sg(this), r = Yd(e, void 0);
    return r[It].isManual_ = !0, Hd(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[It];
    (!r || !r.isManual_) && gt(9);
    const { scope_: n } = r;
    return Eg(n, t), Pg(void 0, n);
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
  const r = Ma(e) ? Mn("MapSet").proxyMap_(e, t) : Tc(e) ? Mn("MapSet").proxySet_(e, t) : DL(e, t);
  return (t ? t.scope_ : wO()).drafts_.push(r), r;
}
function Or(e) {
  return Rn(e) || gt(10, e), EO(e);
}
function EO(e) {
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
  return ls(
    r,
    (o, a) => {
      bO(r, o, EO(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var Xd = new $L(), SO = Xd.produce, LL = /* @__PURE__ */ Xd.setUseStrictIteration.bind(
  Xd
);
function PO(e) {
  return ({ dispatch: r, getState: n }) => (o) => (a) => typeof a == "function" ? a(r, n, e) : o(a);
}
var FL = PO(), BL = PO, zL = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? cs : cs.apply(null, arguments);
}, UL = (e) => e && typeof e.match == "function";
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
function WL(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  UL(e);
}
function KL(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function VL(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = WL
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(KL(n.type)), r(n));
}
function OO(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var AO = class Zo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Zo.prototype);
  }
  static get [Symbol.species]() {
    return Zo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Zo(...t[0].concat(this)) : new Zo(...t.concat(this));
  }
};
function Ag(e) {
  return Nr(e) ? SO(e, () => {
  }) : e;
}
function bi(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function qL(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function HL(e, t, r) {
  const n = CO(e, t, r);
  return {
    detectMutations() {
      return TO(e, t, n, r);
    }
  };
}
function CO(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), a.children = {};
    for (const i in r) {
      const s = n ? n + "." + i : i;
      t.length && t.indexOf(s) !== -1 || (a.children[i] = CO(e, t, r[i], s));
    }
  }
  return a;
}
function TO(e, t = [], r, n, o = !1, a = "") {
  const i = r ? r.value : void 0, s = i === n;
  if (o && !s && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(i) || e(n))
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
    const d = a ? a + "." + l : l;
    if (u && t.some((v) => v instanceof RegExp ? v.test(d) : d === v))
      continue;
    const p = TO(e, t, r.children[l], n[l], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function GL(e = {}) {
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
      isImmutable: n = qL,
      ignoredPaths: o,
      warnAfter: a = 32
    } = e;
    const i = HL.bind(null, n, o);
    return ({
      getState: s
    }) => {
      let c = s(), u = i(c), l;
      return (d) => (p) => {
        const h = OO(a, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = i(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const v = d(p);
        return h.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = i(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? he(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), v;
      };
    };
  }
}
function _O(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ra(e);
}
function Zd(e, t = "", r = _O, n, o = [], a) {
  let i;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a?.has(e)) return !1;
  const s = n != null ? n(e) : Object.entries(e), c = o.length > 0;
  for (const [u, l] of s) {
    const d = t ? t + "." + u : u;
    if (!(c && o.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!r(l))
        return {
          keyPath: d,
          value: l
        };
      if (typeof l == "object" && (i = Zd(l, d, r, n, o, a), i))
        return i;
    }
  }
  return a && kO(e) && a.add(e), !1;
}
function kO(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !kO(t))
      return !1;
  return !0;
}
function YL(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = _O,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: i = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: u = !1
    } = e, l = !u && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!Lp(h))
        return p(h);
      const v = p(h), f = OO(i, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(h.type) !== -1) && f.measureTime(() => {
        const g = Zd(h, "", t, r, o, l);
        if (g) {
          const {
            keyPath: y,
            value: x
          } = g;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, x, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (f.measureTime(() => {
        const g = d.getState(), y = Zd(g, "", t, r, a, l);
        if (y) {
          const {
            keyPath: x,
            value: b
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${x}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), f.warnIfExceeded()), v;
    };
  }
}
function wi(e) {
  return typeof e == "boolean";
}
var XL = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let i = new AO();
  if (r && (wi(r) ? i.push(FL) : i.push(BL(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let s = {};
      wi(n) || (s = n), i.unshift(GL(s));
    }
    if (o) {
      let s = {};
      wi(o) || (s = o), i.push(YL(s));
    }
    if (a) {
      let s = {};
      wi(a) || (s = a), i.unshift(VL(s));
    }
  }
  return i;
}, NO = "RTK_autoBatch", ut = () => (e) => ({
  payload: e,
  meta: {
    [NO]: !0
  }
}), Cg = (e) => (t) => {
  setTimeout(t, e);
}, IO = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, a = !1, i = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Cg(10)
  ) : e.type === "callback" ? e.queueNotification : Cg(e.timeout), u = () => {
    i = !1, a && (a = !1, s.forEach((l) => l()));
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
        return o = !l?.meta?.[NO], a = !o, a && (i || (i = !0, c(u))), n.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, ZL = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new AO(e);
  return n && o.push(IO(typeof n == "object" ? n : void 0)), o;
};
function JL(e) {
  const t = XL(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let c;
  if (typeof r == "function")
    c = r;
  else if (Ra(r))
    c = vO(r);
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
  if (process.env.NODE_ENV !== "production" && a) {
    let f = /* @__PURE__ */ new Set();
    u.forEach((g) => {
      if (f.has(g))
        throw new Error(process.env.NODE_ENV === "production" ? he(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      f.add(g);
    });
  }
  let l = cs;
  o && (l = zL({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = CL(...u), p = ZL(d);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(5) : "`enhancers` field must be a callback");
  let h = typeof s == "function" ? s(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? he(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((f) => typeof f != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && u.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = l(...h);
  return mO(c, i, v);
}
function RO(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(a, i) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? he(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? he(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof a == "string" ? a : a.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? he(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? he(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = i, o;
    },
    addAsyncThunk(a, i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return i.pending && (t[a.pending.type] = i.pending), i.rejected && (t[a.rejected.type] = i.rejected), i.fulfilled && (t[a.fulfilled.type] = i.fulfilled), i.settled && r.push({
        matcher: a.settled,
        reducer: i.settled
      }), o;
    },
    addMatcher(a, i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: i
      }), o;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? he(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, o;
    }
  };
  return e(o), [t, r, n];
}
LL(!1);
function QL(e) {
  return typeof e == "function";
}
function eF(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? he(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = RO(t), a;
  if (QL(e))
    a = () => Ag(e());
  else {
    const s = Ag(e);
    a = () => s;
  }
  function i(s = a(), c) {
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
            return SO(l, (p) => d(p, c));
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
  return i.getInitialState = a, i;
}
var tF = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", rF = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += tF[Math.random() * 64 | 0];
  return t;
}, nF = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function oF(e, t) {
  return `${e}/${t}`;
}
function aF({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[nF];
  return function(n) {
    const {
      name: o,
      reducerPath: a = o
    } = n;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? he(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const i = (typeof n.reducers == "function" ? n.reducers(sF()) : n.reducers) || {}, s = Object.keys(i), c = {
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
      const E = i[b], S = {
        reducerName: b,
        type: oF(o, b),
        createNotation: typeof n.reducers == "function"
      };
      lF(E) ? dF(S, E, u, t) : cF(S, E, u);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? he(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, E = [], S = void 0] = typeof n.extraReducers == "function" ? RO(n.extraReducers) : [n.extraReducers], P = {
        ...b,
        ...c.sliceCaseReducersByType
      };
      return eF(n.initialState, (O) => {
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
            A = bi(h, S, g);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? he(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function P(O = d) {
        const A = bi(p, E, () => /* @__PURE__ */ new WeakMap());
        return bi(A, O, () => {
          const _ = {};
          for (const [I, T] of Object.entries(n.selectors ?? {}))
            _[I] = iF(T, O, () => bi(h, O, g), E);
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
    const x = {
      name: o,
      reducer: f,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: g,
      ...y(a),
      injectInto(b, {
        reducerPath: E,
        ...S
      } = {}) {
        const P = E ?? a;
        return b.inject({
          reducerPath: P,
          reducer: f
        }, S), {
          ...x,
          ...y(P, !0)
        };
      }
    };
    return x;
  };
}
function iF(e, t, r, n) {
  function o(a, ...i) {
    let s = t(a);
    if (typeof s > "u") {
      if (n)
        s = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? he(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...i);
  }
  return o.unwrapped = e, o;
}
var Dt = /* @__PURE__ */ aF();
function sF() {
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
function cF({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let a, i;
  if ("reducer" in n) {
    if (r && !uF(n))
      throw new Error(process.env.NODE_ENV === "production" ? he(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, i = n.prepare;
  } else
    a = n;
  o.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, i ? Vt(e, i) : Vt(e));
}
function lF(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function uF(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function dF({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? he(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: i,
    pending: s,
    rejected: c,
    settled: u,
    options: l
  } = r, d = o(e, a, l);
  n.exposeAction(t, d), i && n.addCase(d.fulfilled, i), s && n.addCase(d.pending, s), c && n.addCase(d.rejected, c), u && n.addMatcher(d.settled, u), n.exposeCaseReducer(t, {
    fulfilled: i || xi,
    pending: s || xi,
    rejected: c || xi,
    settled: u || xi
  });
}
function xi() {
}
var fF = "task", MO = "listener", DO = "completed", zp = "cancelled", pF = `task-${zp}`, hF = `task-${DO}`, Jd = `${MO}-${zp}`, mF = `${MO}-${DO}`, kc = class {
  constructor(e) {
    this.code = e, this.message = `${fF} ${zp} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Up = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? he(32) : `${t} is not a function`);
}, fs = () => {
}, jO = (e, t = fs) => (e.catch(t), e), $O = (e, t) => (e.addEventListener("abort", t, {
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
function LO(e, t) {
  let r = fs;
  return new Promise((n, o) => {
    const a = () => o(new kc(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = $O(e, a), t.finally(() => r()).then(n, o);
  }).finally(() => {
    r = fs;
  });
}
var vF = async (e, t) => {
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
}, ps = (e) => (t) => jO(LO(e, t).then((r) => (En(e), r))), FO = (e) => {
  const t = ps(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: to
} = Object, Tg = {}, Da = "listenerMiddleware", gF = (e, t) => {
  const r = (n) => $O(e, () => xn(n, e.reason));
  return (n, o) => {
    Up(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const i = vF(async () => {
      En(e), En(a.signal);
      const s = await n({
        pause: ps(a.signal),
        delay: FO(a.signal),
        signal: a.signal
      });
      return En(a.signal), s;
    }, () => xn(a, hF));
    return o?.autoJoin && t.push(i.catch(fs)), {
      result: ps(e)(i),
      cancel() {
        xn(a, pF);
      }
    };
  };
}, yF = (e, t) => {
  const r = async (n, o) => {
    En(t);
    let a = () => {
    };
    const s = [new Promise((c, u) => {
      let l = e({
        predicate: n,
        effect: (d, p) => {
          p.unsubscribe(), c([d, p.getState(), p.getOriginalState()]);
        }
      });
      a = () => {
        l(), u();
      };
    })];
    o != null && s.push(new Promise((c) => setTimeout(c, o, null)));
    try {
      const c = await LO(t, Promise.race(s));
      return En(t), c;
    } finally {
      a();
    }
  };
  return (n, o) => jO(r(n, o));
}, BO = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: a
  } = e;
  if (t)
    o = Vt(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o) throw new Error(process.env.NODE_ENV === "production" ? he(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Up(a, "options.listener"), {
    predicate: o,
    type: t,
    effect: a
  };
}, zO = /* @__PURE__ */ to((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = BO(e);
  return {
    id: rF(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? he(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => zO
}), _g = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: o
  } = BO(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === o) && a.effect === n);
}, Qd = (e) => {
  e.pending.forEach((t) => {
    xn(t, Jd);
  });
}, bF = (e, t) => () => {
  for (const r of t.keys())
    Qd(r);
  e.clear();
}, kg = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, UO = /* @__PURE__ */ to(/* @__PURE__ */ Vt(`${Da}/add`), {
  withTypes: () => UO
}), wF = /* @__PURE__ */ Vt(`${Da}/removeAll`), WO = /* @__PURE__ */ to(/* @__PURE__ */ Vt(`${Da}/remove`), {
  withTypes: () => WO
}), xF = (...e) => {
  console.error(`${Da}/error`, ...e);
}, ja = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const v = r.get(h) ?? 0;
    r.set(h, v + 1);
  }, o = (h) => {
    const v = r.get(h) ?? 1;
    v === 1 ? r.delete(h) : r.set(h, v - 1);
  }, {
    extra: a,
    onError: i = xF
  } = e;
  Up(i, "onError");
  const s = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (v) => {
    h.unsubscribe(), v?.cancelActive && Qd(h);
  }), c = (h) => {
    const v = _g(t, h) ?? zO(h);
    return s(v);
  };
  to(c, {
    withTypes: () => c
  });
  const u = (h) => {
    const v = _g(t, h);
    return v && (v.unsubscribe(), h.cancelActive && Qd(v)), !!v;
  };
  to(u, {
    withTypes: () => u
  });
  const l = async (h, v, f, g) => {
    const y = new AbortController(), x = yF(c, y.signal), b = [];
    try {
      h.pending.add(y), n(h), await Promise.resolve(h.effect(
        v,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        to({}, f, {
          getOriginalState: g,
          condition: (E, S) => x(E, S).then(Boolean),
          take: x,
          delay: FO(y.signal),
          pause: ps(y.signal),
          extra: a,
          signal: y.signal,
          fork: gF(y.signal, b),
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
      E instanceof kc || kg(i, E, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(b), xn(y, mF), o(h), h.pending.delete(y);
    }
  }, d = bF(t, r);
  return {
    middleware: (h) => (v) => (f) => {
      if (!Lp(f))
        return v(f);
      if (UO.match(f))
        return c(f.payload);
      if (wF.match(f)) {
        d();
        return;
      }
      if (WO.match(f))
        return u(f.payload);
      let g = h.getState();
      const y = () => {
        if (g === Tg)
          throw new Error(process.env.NODE_ENV === "production" ? he(23) : `${Da}: getOriginalState can only be called synchronously`);
        return g;
      };
      let x;
      try {
        if (x = v(f), t.size > 0) {
          const b = h.getState(), E = Array.from(t.values());
          for (const S of E) {
            let P = !1;
            try {
              P = S.predicate(f, b, g);
            } catch (O) {
              P = !1, kg(i, O, {
                raisedBy: "predicate"
              });
            }
            P && l(S, f, h, y);
          }
        }
      } finally {
        g = Tg;
      }
      return x;
    },
    startListening: c,
    stopListening: u,
    clearListeners: d
  };
};
function he(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var EF = {
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
}, KO = Dt({
  name: "chartLayout",
  initialState: EF,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, o, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (o = t.payload.bottom) !== null && o !== void 0 ? o : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: SF,
  setLayout: PF,
  setChartSize: OF,
  setScale: AF
} = KO.actions, CF = KO.reducer;
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
function Ig(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), !0).forEach(function(n) {
      TF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TF(e, t, r) {
  return (t = _F(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _F(e) {
  var t = kF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hs = Math.PI / 180, NF = (e) => e * 180 / Math.PI, Le = (e, t, r, n) => ({
  x: e + Math.cos(-hs * n) * r,
  y: t + Math.sin(-hs * n) * r
}), VO = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, IF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: o,
    y: a
  } = t;
  return Math.sqrt((r - o) ** 2 + (n - a) ** 2);
}, RF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: o,
    cy: a
  } = t, i = IF({
    x: r,
    y: n
  }, {
    x: o,
    y: a
  });
  if (i <= 0)
    return {
      radius: i,
      angle: 0
    };
  var s = (r - o) / i, c = Math.acos(s);
  return n > a && (c = 2 * Math.PI - c), {
    radius: i,
    angle: NF(c),
    angleInRadian: c
  };
}, MF = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), o = Math.floor(r / 360), a = Math.min(n, o);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, DF = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, o = Math.floor(r / 360), a = Math.floor(n / 360), i = Math.min(o, a);
  return e + i * 360;
}, jF = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: o,
    angle: a
  } = RF({
    x: r,
    y: n
  }, t), {
    innerRadius: i,
    outerRadius: s
  } = t;
  if (o < i || o > s || o === 0)
    return null;
  var {
    startAngle: c,
    endAngle: u
  } = MF(t), l = a, d;
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
  return d ? Ig(Ig({}, t), {}, {
    radius: o,
    angle: DF(l, t)
  }) : null;
};
function qO(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function Rg(e, t) {
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
    t % 2 ? Rg(Object(r), !0).forEach(function(n) {
      $F(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $F(e, t, r) {
  return (t = LF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LF(e) {
  var t = FF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FF(e, t) {
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
  return Ae(e) || Ae(t) ? r : fr(t) ? In(e, t, r) : typeof t == "function" ? t(e) : r;
}
var BF = (e, t, r, n, o) => {
  var a, i = -1, s = (a = t?.length) !== null && a !== void 0 ? a : 0;
  if (s <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && o != null && Math.abs(Math.abs(o[1] - o[0]) - 360) <= 1e-6)
    for (var c = 0; c < s; c++) {
      var u = c > 0 ? r[c - 1].coordinate : r[s - 1].coordinate, l = r[c].coordinate, d = c >= s - 1 ? r[0].coordinate : r[c + 1].coordinate, p = void 0;
      if (Ze(l - u) !== Ze(d - l)) {
        var h = [];
        if (Ze(d - l) === Ze(o[1] - o[0])) {
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
            index: i
          } = r[c]);
          break;
        }
      } else {
        var y = Math.min(u, d), x = Math.max(u, d);
        if (e > (y + l) / 2 && e <= (x + l) / 2) {
          ({
            index: i
          } = r[c]);
          break;
        }
      }
    }
  else if (t) {
    for (var b = 0; b < s; b++)
      if (b === 0 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b > 0 && b < s - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b === s - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2) {
        ({
          index: i
        } = t[b]);
        break;
      }
  }
  return i;
}, zF = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: o
    } = r, {
      align: a,
      verticalAlign: i,
      layout: s
    } = t;
    if ((s === "vertical" || s === "horizontal" && i === "middle") && a !== "center" && X(e[a]))
      return Bt(Bt({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((s === "horizontal" || s === "vertical" && a === "center") && i !== "middle" && X(e[i]))
      return Bt(Bt({}, e), {}, {
        [i]: e[i] + (o || 0)
      });
  }
  return e;
}, gr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", HO = (e, t, r, n) => {
  if (n)
    return e.map((s) => s.coordinate);
  var o, a, i = e.map((s) => (s.coordinate === t && (o = !0), s.coordinate === r && (a = !0), s.coordinate));
  return o || i.push(t), a || i.push(r), i;
}, GO = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: o,
    range: a,
    scale: i,
    realScaleType: s,
    isCategorical: c,
    categoricalDomain: u,
    tickCount: l,
    ticks: d,
    niceTicks: p,
    axisType: h
  } = e;
  if (!i)
    return null;
  var v = s === "scaleBand" && i.bandwidth ? i.bandwidth() / 2 : 2, f = o === "category" && i.bandwidth ? i.bandwidth() / v : 0;
  if (f = h === "angleAxis" && a && a.length >= 2 ? Ze(a[0] - a[1]) * 2 * f : f, d || p) {
    var g = (d || p || []).map((y, x) => {
      var b = n ? n.indexOf(y) : y;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(b) + f,
        value: y,
        offset: f,
        index: x
      };
    });
    return g.filter((y) => !Nt(y.coordinate));
  }
  return c && u ? u.map((y, x) => ({
    coordinate: i(y) + f,
    value: y,
    index: x,
    offset: f
  })) : i.ticks && l != null ? i.ticks(l).map((y, x) => ({
    coordinate: i(y) + f,
    value: y,
    offset: f,
    index: x
  })) : i.domain().map((y, x) => ({
    coordinate: i(y) + f,
    value: n ? n[y] : y,
    index: x,
    offset: f
  }));
}, Mg = 1e-4, UF = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), o = Math.min(n[0], n[1]) - Mg, a = Math.max(n[0], n[1]) + Mg, i = e(t[0]), s = e(t[r - 1]);
    (i < o || i > a || s < o || s > a) && e.domain([t[0], t[r - 1]]);
  }
}, WF = (e, t) => {
  if (!t || t.length !== 2 || !X(t[0]) || !X(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), o = [e[0], e[1]];
  return (!X(e[0]) || e[0] < r) && (o[0] = r), (!X(e[1]) || e[1] > n) && (o[1] = n), o[0] > n && (o[0] = n), o[1] < r && (o[1] = r), o;
}, KF = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, a = 0, i = 0; i < t; ++i) {
        var s = Nt(e[i][r][1]) ? e[i][r][0] : e[i][r][1];
        s >= 0 ? (e[i][r][0] = o, e[i][r][1] = o + s, o = e[i][r][1]) : (e[i][r][0] = a, e[i][r][1] = a + s, a = e[i][r][1]);
      }
}, VF = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, a = 0; a < t; ++a) {
        var i = Nt(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        i >= 0 ? (e[a][r][0] = o, e[a][r][1] = o + i, o = e[a][r][1]) : (e[a][r][0] = 0, e[a][r][1] = 0);
      }
}, qF = {
  sign: KF,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Q2,
  // @ts-expect-error definitelytyped types are incorrect
  none: so,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: e$,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: t$,
  positive: VF
}, HF = (e, t, r) => {
  var n = qF[r], o = J2().keys(t).value((a, i) => +xe(a, i, 0)).order(zd).offset(n);
  return o(e);
};
function YO(e) {
  return e == null ? void 0 : String(e);
}
function ms(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: o,
    index: a,
    dataKey: i
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ae(o[t.dataKey])) {
      var s = ZP(r, "value", o[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = xe(o, Ae(i) ? t.dataKey : i);
  return Ae(c) ? null : t.scale(c);
}
var Dg = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: o,
    entry: a,
    index: i
  } = e;
  if (t.type === "category")
    return r[i] ? r[i].coordinate + n : null;
  var s = xe(a, t.dataKey, t.scale.domain()[i]);
  return Ae(s) ? null : t.scale(s) - o / 2 + n;
}, GF = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), o = Math.max(r[0], r[1]);
    return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
  }
  return r[0];
}, YF = (e) => {
  var t = e.flat(2).filter(X);
  return [Math.min(...t), Math.max(...t)];
}, XF = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], ZF = (e, t, r) => {
  if (e != null)
    return XF(Object.keys(e).reduce((n, o) => {
      var a = e[o], {
        stackedData: i
      } = a, s = i.reduce((c, u) => {
        var l = qO(u, t, r), d = YF(l);
        return [Math.min(c[0], d[0]), Math.max(c[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(s[0], n[0]), Math.max(s[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, jg = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, $g = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dn = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var o = Ac(t, (l) => l.coordinate), a = 1 / 0, i = 1, s = o.length; i < s; i++) {
      var c = o[i], u = o[i - 1];
      a = Math.min((c.coordinate || 0) - (u.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function Lg(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: o,
    name: a
  } = e;
  return Bt(Bt({}, t), {}, {
    dataKey: r,
    payload: n,
    value: o,
    name: a
  });
}
function sn(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
function JF(e, t, r, n, o) {
  if (r === "horizontal" || r === "vertical") {
    var a = e >= o.left && e <= o.left + o.width && t >= o.top && t <= o.top + o.height;
    return a ? {
      x: e,
      y: t
    } : null;
  }
  return n ? jF({
    x: e,
    y: t
  }, n) : null;
}
var QF = (e, t, r, n) => {
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
      var a = o.coordinate, {
        radius: i
      } = n;
      return Bt(Bt(Bt({}, n), Le(n.cx, n.cy, i, a)), {}, {
        angle: a,
        radius: i
      });
    }
    var s = o.coordinate, {
      angle: c
    } = n;
    return Bt(Bt(Bt({}, n), Le(n.cx, n.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return {
    x: 0,
    y: 0
  };
}, eB = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, jr = (e) => e.layout.width, $r = (e) => e.layout.height, tB = (e) => e.layout.scale, XO = (e) => e.layout.margin, Nc = C((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Ic = C((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), ZO = "data-recharts-item-index", JO = "data-recharts-item-data-key", $a = 60;
function Fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), !0).forEach(function(n) {
      rB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rB(e, t, r) {
  return (t = nB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nB(e) {
  var t = oB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aB = (e) => e.brush.height;
function iB(e) {
  var t = Ic(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : $a;
      return r + o;
    }
    return r;
  }, 0);
}
function sB(e) {
  var t = Ic(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : $a;
      return r + o;
    }
    return r;
  }, 0);
}
function cB(e) {
  var t = Nc(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function lB(e) {
  var t = Nc(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Ve = C([jr, $r, XO, aB, iB, sB, cB, lB, pO, mL], (e, t, r, n, o, a, i, s, c, u) => {
  var l = {
    left: (r.left || 0) + o,
    right: (r.right || 0) + a
  }, d = {
    top: (r.top || 0) + i,
    bottom: (r.bottom || 0) + s
  }, p = Ei(Ei({}, d), l), h = p.bottom;
  p.bottom += n, p = zF(p, c, u);
  var v = e - p.left - p.right, f = t - p.top - p.bottom;
  return Ei(Ei({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(v, 0),
    height: Math.max(f, 0)
  });
}), uB = C(Ve, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Wp = C(jr, $r, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), dB = /* @__PURE__ */ Rt(null), ot = () => er(dB) != null, Rc = (e) => e.brush, Mc = C([Rc, Ve, XO], (e, t, r) => ({
  height: e.height,
  x: X(e.x) ? e.x : t.left,
  y: X(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: X(e.width) ? e.width : t.width
})), Mu = {}, Du = {}, ju = {}, Bg;
function fB() {
  return Bg || (Bg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: o, edges: a } = {}) {
      let i, s = null;
      const c = a != null && a.includes("leading"), u = a == null || a.includes("trailing"), l = () => {
        s !== null && (r.apply(i, s), i = void 0, s = null);
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
        v(), i = void 0, s = null;
      }, g = () => {
        l();
      }, y = function(...x) {
        if (o?.aborted)
          return;
        i = this, s = x;
        const b = p == null;
        h(), c && b && l();
      };
      return y.schedule = h, y.cancel = f, y.flush = g, o?.addEventListener("abort", f, { once: !0 }), y;
    }
    e.debounce = t;
  })(ju)), ju;
}
var zg;
function pB() {
  return zg || (zg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fB();
    function r(n, o = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: i = !1, trailing: s = !0, maxWait: c } = a, u = Array(2);
      i && (u[0] = "leading"), s && (u[1] = "trailing");
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
var Ug;
function hB() {
  return Ug || (Ug = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ pB();
    function r(n, o = 0, a = {}) {
      const { leading: i = !0, trailing: s = !0 } = a;
      return t.debounce(n, o, {
        leading: i,
        maxWait: o,
        trailing: s
      });
    }
    e.throttle = r;
  })(Mu)), Mu;
}
var $u, Wg;
function mB() {
  return Wg || (Wg = 1, $u = hB().throttle), $u;
}
var vB = /* @__PURE__ */ mB();
const gB = /* @__PURE__ */ an(vB);
var yB = process.env.NODE_ENV !== "production", vs = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (yB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, () => o[i++]));
    }
}, QO = (e, t, r) => {
  var {
    width: n = "100%",
    height: o = "100%",
    aspect: a,
    maxHeight: i
  } = r, s = kr(n) ? e : Number(n), c = kr(o) ? t : Number(o);
  return a && a > 0 && (s ? c = s / a : c && (s = c * a), i && c > i && (c = i)), {
    calculatedWidth: s,
    calculatedHeight: c
  };
}, bB = {
  width: 0,
  height: 0,
  overflow: "visible"
}, wB = {
  width: 0,
  overflowX: "visible"
}, xB = {
  height: 0,
  overflowY: "visible"
}, EB = {}, SB = (e) => {
  var {
    width: t,
    height: r
  } = e, n = kr(t), o = kr(r);
  return n && o ? bB : n ? wB : o ? xB : EB;
};
function PB(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, o = t, a = r;
  return o === void 0 && a === void 0 ? (o = "100%", a = "100%") : o === void 0 ? o = n && n > 0 ? void 0 : "100%" : a === void 0 && (a = n && n > 0 ? void 0 : "100%"), {
    width: o,
    height: a
  };
}
function ze(e) {
  return Number.isFinite(e);
}
function co(e) {
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
function Kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(r), !0).forEach(function(n) {
      OB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OB(e, t, r) {
  return (t = AB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AB(e) {
  var t = CB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var e1 = /* @__PURE__ */ Rt({
  width: -1,
  height: -1
});
function t1(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, o = Dr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return r <= 0 || n <= 0 ? null : /* @__PURE__ */ m.createElement(e1.Provider, {
    value: o
  }, t);
}
var Kp = () => er(e1), TB = /* @__PURE__ */ De((e, t) => {
  var {
    aspect: r,
    initialDimension: n = {
      width: -1,
      height: -1
    },
    width: o,
    height: a,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: i = 0,
    minHeight: s,
    maxHeight: c,
    children: u,
    debounce: l = 0,
    id: d,
    className: p,
    onResize: h,
    style: v = {}
  } = e, f = me(null), g = me();
  g.current = h, Lw(t, () => f.current);
  var [y, x] = Ke({
    containerWidth: n.width,
    containerHeight: n.height
  }), b = ve((A, _) => {
    x((I) => {
      var T = Math.round(A), M = Math.round(_);
      return I.containerWidth === T && I.containerHeight === M ? I : {
        containerWidth: T,
        containerHeight: M
      };
    });
  }, []);
  Be(() => {
    var A = (M) => {
      var D, {
        width: N,
        height: U
      } = M[0].contentRect;
      b(N, U), (D = g.current) === null || D === void 0 || D.call(g, N, U);
    };
    l > 0 && (A = gB(A, l, {
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
  vs(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: O
  } = QO(E, S, {
    width: o,
    height: a,
    aspect: r,
    maxHeight: c
  });
  return vs(P > 0 || O > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, O, o, a, i, s, r), /* @__PURE__ */ m.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: le("recharts-responsive-container", p),
    style: Vg(Vg({}, v), {}, {
      width: o,
      height: a,
      minWidth: i,
      minHeight: s,
      maxHeight: c
    }),
    ref: f
  }, /* @__PURE__ */ m.createElement("div", {
    style: SB({
      width: o,
      height: a
    })
  }, /* @__PURE__ */ m.createElement(t1, {
    width: P,
    height: O
  }, u)));
}), Dc = /* @__PURE__ */ De((e, t) => {
  var r = Kp();
  if (co(r.width) && co(r.height))
    return e.children;
  var {
    width: n,
    height: o
  } = PB({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: i
  } = QO(void 0, void 0, {
    width: n,
    height: o,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return X(a) && X(i) ? /* @__PURE__ */ m.createElement(t1, {
    width: a,
    height: i
  }, e.children) : /* @__PURE__ */ m.createElement(TB, ef({}, e, {
    width: n,
    height: o,
    ref: t
  }));
}), jc = () => {
  var e, t = ot(), r = Z(uB), n = Z(Mc), o = (e = Z(Rc)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !o ? r : {
    width: n.width - o.left - o.right,
    height: n.height - o.top - o.bottom,
    x: o.left,
    y: o.top
  };
}, _B = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, r1 = () => {
  var e;
  return (e = Z(Ve)) !== null && e !== void 0 ? e : _B;
}, Vp = () => Z(jr), qp = () => Z($r), kB = () => Z((e) => e.layout.margin), ce = (e) => e.layout.layoutType, La = () => Z(ce), $c = (e) => {
  var t = _e(), r = ot(), {
    width: n,
    height: o
  } = e, a = Kp(), i = n, s = o;
  return a && (i = a.width > 0 ? a.width : n, s = a.height > 0 ? a.height : o), Be(() => {
    !r && co(i) && co(s) && t(OF({
      width: i,
      height: s
    }));
  }, [t, r, i, s]), null;
}, NB = {
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
}, n1 = Dt({
  name: "legend",
  initialState: NB,
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
        var r = Or(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  setLegendSize: qg,
  setLegendSettings: IB,
  addLegendPayload: o1,
  removeLegendPayload: a1
} = n1.actions, RB = n1.reducer, MB = ["contextPayload"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tf.apply(null, arguments);
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), !0).forEach(function(n) {
      Hp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hp(e, t, r) {
  return (t = DB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DB(e) {
  var t = jB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $B(e, t) {
  if (e == null) return {};
  var r, n, o = LB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function LB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function FB(e) {
  return e.value;
}
function BB(e) {
  var {
    contextPayload: t
  } = e, r = $B(e, MB), n = cO(t, e.payloadUniqBy, FB), o = lo(lo({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ m.isValidElement(e.content) ? /* @__PURE__ */ m.cloneElement(e.content, o) : typeof e.content == "function" ? /* @__PURE__ */ m.createElement(e.content, o) : /* @__PURE__ */ m.createElement(Dp, o);
}
function zB(e, t, r, n, o, a) {
  var {
    layout: i,
    align: s,
    verticalAlign: c
  } = t, u, l;
  return (!e || (e.left === void 0 || e.left === null) && (e.right === void 0 || e.right === null)) && (s === "center" && i === "vertical" ? u = {
    left: ((n || 0) - a.width) / 2
  } : u = s === "right" ? {
    right: r && r.right || 0
  } : {
    left: r && r.left || 0
  }), (!e || (e.top === void 0 || e.top === null) && (e.bottom === void 0 || e.bottom === null)) && (c === "middle" ? l = {
    top: ((o || 0) - a.height) / 2
  } : l = c === "bottom" ? {
    bottom: r && r.bottom || 0
  } : {
    top: r && r.top || 0
  }), lo(lo({}, u), l);
}
function UB(e) {
  var t = _e();
  return Be(() => {
    t(IB(e));
  }, [t, e]), null;
}
function WB(e) {
  var t = _e();
  return Be(() => (t(qg(e)), () => {
    t(qg({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function KB(e) {
  var t = yL(), r = E2(), n = kB(), {
    width: o,
    height: a,
    wrapperStyle: i,
    portal: s
  } = e, [c, u] = hO([t]), l = Vp(), d = qp();
  if (l == null || d == null)
    return null;
  var p = l - (n.left || 0) - (n.right || 0), h = Wn.getWidthOrHeight(e.layout, a, o, p), v = s ? i : lo(lo({
    position: "absolute",
    width: h?.width || o || "auto",
    height: h?.height || a || "auto"
  }, zB(i, e, n, l, d, c)), i), f = s ?? r;
  if (f == null)
    return null;
  var g = /* @__PURE__ */ m.createElement("div", {
    className: "recharts-legend-wrapper",
    style: v,
    ref: u
  }, /* @__PURE__ */ m.createElement(UB, {
    layout: e.layout,
    align: e.align,
    verticalAlign: e.verticalAlign,
    itemSorter: e.itemSorter
  }), /* @__PURE__ */ m.createElement(WB, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ m.createElement(BB, tf({}, e, h, {
    margin: n,
    chartWidth: l,
    chartHeight: d,
    contextPayload: t
  })));
  return /* @__PURE__ */ Fw(g, f);
}
class Wn extends ba {
  static getWidthOrHeight(t, r, n, o) {
    return t === "vertical" && X(r) ? {
      height: r
    } : t === "horizontal" ? {
      width: n || o
    } : null;
  }
  render() {
    return /* @__PURE__ */ m.createElement(KB, this.props);
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
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(r), !0).forEach(function(n) {
      VB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VB(e, t, r) {
  return (t = qB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qB(e) {
  var t = HB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GB(e) {
  return Array.isArray(e) && fr(e[0]) && fr(e[1]) ? e.join(" ~ ") : e;
}
var YB = (e) => {
  var {
    separator: t = " : ",
    contentStyle: r = {},
    itemStyle: n = {},
    labelStyle: o = {},
    payload: a,
    formatter: i,
    itemSorter: s,
    wrapperClassName: c,
    labelClassName: u,
    label: l,
    labelFormatter: d,
    accessibilityLayer: p = !1
  } = e, h = () => {
    if (a && a.length) {
      var S = {
        padding: 0,
        margin: 0
      }, P = (s ? Ac(a, s) : a).map((O, A) => {
        if (O.type === "none")
          return null;
        var _ = O.formatter || i || GB, {
          value: I,
          name: T
        } = O, M = I, D = T;
        if (_) {
          var N = _(I, T, O, A, a);
          if (Array.isArray(N))
            [M, D] = N;
          else if (N != null)
            M = N;
          else
            return null;
        }
        var U = Lu({
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
            style: U
          }, fr(D) ? /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, D) : null, fr(D) ? /* @__PURE__ */ m.createElement("span", {
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
  }, o), g = !Ae(l), y = g ? l : "", x = le("recharts-default-tooltip", c), b = le("recharts-tooltip-label", u);
  g && d && a !== void 0 && a !== null && (y = d(l, a));
  var E = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ m.createElement("div", rf({
    className: x,
    style: v
  }, E), /* @__PURE__ */ m.createElement("p", {
    className: b,
    style: f
  }, /* @__PURE__ */ m.isValidElement(y) ? y : "".concat(y)), h());
}, Fo = "recharts-tooltip-wrapper", XB = {
  visibility: "hidden"
};
function ZB(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return le(Fo, {
    ["".concat(Fo, "-right")]: X(r) && t && X(t.x) && r >= t.x,
    ["".concat(Fo, "-left")]: X(r) && t && X(t.x) && r < t.x,
    ["".concat(Fo, "-bottom")]: X(n) && t && X(t.y) && n >= t.y,
    ["".concat(Fo, "-top")]: X(n) && t && X(t.y) && n < t.y
  });
}
function Yg(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: o,
    position: a,
    reverseDirection: i,
    tooltipDimension: s,
    viewBox: c,
    viewBoxDimension: u
  } = e;
  if (a && X(a[n]))
    return a[n];
  var l = r[n] - s - (o > 0 ? o : 0), d = r[n] + o;
  if (t[n])
    return i[n] ? l : d;
  var p = c[n];
  if (p == null)
    return 0;
  if (i[n]) {
    var h = l, v = p;
    return h < v ? Math.max(d, p) : Math.max(l, p);
  }
  if (u == null)
    return 0;
  var f = d + s, g = p + u;
  return f > g ? Math.max(l, p) : Math.max(d, p);
}
function JB(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function QB(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipBox: i,
    useTranslate3d: s,
    viewBox: c
  } = e, u, l, d;
  return i.height > 0 && i.width > 0 && r ? (l = Yg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Yg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = JB({
    translateX: l,
    translateY: d,
    useTranslate3d: s
  })) : u = XB, {
    cssProperties: u,
    cssClasses: ZB({
      translateX: l,
      translateY: d,
      coordinate: r
    })
  };
}
function Xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xg(Object(r), !0).forEach(function(n) {
      nf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nf(e, t, r) {
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
class rz extends ba {
  constructor() {
    super(...arguments), nf(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), nf(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, o, a;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (o = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : 0
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
      children: a,
      coordinate: i,
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
      cssClasses: x,
      cssProperties: b
    } = QB({
      allowEscapeViewBox: r,
      coordinate: i,
      offsetTopLeft: u,
      position: l,
      reverseDirection: d,
      tooltipBox: {
        height: f.height,
        width: f.width
      },
      useTranslate3d: p,
      viewBox: h
    }), E = y ? {} : Si(Si({
      transition: c && t ? "transform ".concat(n, "ms ").concat(o) : void 0
    }, b), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), S = Si(Si({}, E), {}, {
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden"
    }, v);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ m.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: x,
        style: S,
        ref: g
      }, a)
    );
  }
}
var nz = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Lr = {
  devToolsEnabled: !1,
  isSsr: nz()
}, i1 = () => Z((e) => e.rootProps.accessibilityLayer);
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, of.apply(null, arguments);
}
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zg(Object(r), !0).forEach(function(n) {
      oz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oz(e, t, r) {
  return (t = az(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function az(e) {
  var t = iz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qg = {
  curveBasisClosed: z2,
  curveBasisOpen: U2,
  curveBasis: B2,
  curveBumpX: A2,
  curveBumpY: C2,
  curveLinearClosed: W2,
  curveLinear: Pc,
  curveMonotoneX: K2,
  curveMonotoneY: V2,
  curveNatural: q2,
  curveStep: H2,
  curveStepAfter: Y2,
  curveStepBefore: G2
}, Pi = (e) => ze(e.x) && ze(e.y), Bo = (e) => e.x, zo = (e) => e.y, sz = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Na(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? Qg["".concat(r).concat(t === "vertical" ? "Y" : "X")] : Qg[r] || Pc;
}, cz = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: o,
    connectNulls: a = !1
  } = e, i = sz(t, o), s = a ? r.filter(Pi) : r, c;
  if (Array.isArray(n)) {
    var u = a ? n.filter((d) => Pi(d)) : n, l = s.map((d, p) => Jg(Jg({}, d), {}, {
      base: u[p]
    }));
    return o === "vertical" ? c = pi().y(zo).x1(Bo).x0((d) => d.base.x) : c = pi().x(Bo).y1(zo).y0((d) => d.base.y), c.defined(Pi).curve(i), c(l);
  }
  return o === "vertical" && X(n) ? c = pi().y(zo).x1(Bo).x0(n) : X(n) ? c = pi().x(Bo).y1(zo).y0(n) : c = LP().x(Bo).y(zo), c.defined(Pi).curve(i), c(s);
}, ro = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: o
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var a = r && r.length ? cz(e) : n;
  return /* @__PURE__ */ m.createElement("path", of({}, ht(e), Rp(e), {
    className: le("recharts-curve", t),
    d: a === null ? void 0 : a,
    ref: o
  }));
}, lz = ["x", "y", "top", "left", "width", "height", "className"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, af.apply(null, arguments);
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
function uz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      dz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dz(e, t, r) {
  return (t = fz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fz(e) {
  var t = pz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hz(e, t) {
  if (e == null) return {};
  var r, n, o = mz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function mz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var vz = (e, t, r, n, o, a) => "M".concat(e, ",").concat(o, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), gz = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: o = 0,
    width: a = 0,
    height: i = 0,
    className: s
  } = e, c = hz(e, lz), u = uz({
    x: t,
    y: r,
    top: n,
    left: o,
    width: a,
    height: i
  }, c);
  return !X(t) || !X(r) || !X(a) || !X(i) || !X(n) || !X(o) ? null : /* @__PURE__ */ m.createElement("path", af({}, mt(u), {
    className: le("recharts-cross", s),
    d: vz(t, r, a, i, n, o)
  }));
};
function yz(e, t, r, n) {
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
function ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ty(Object(r), !0).forEach(function(n) {
      wz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wz(e, t, r) {
  return (t = xz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xz(e) {
  var t = Ez(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ez(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qe(e, t) {
  var r = bz({}, e), n = t, o = Object.keys(t), a = o.reduce((i, s) => (i[s] === void 0 && n[s] !== void 0 && (i[s] = n[s]), i), r);
  return a;
}
function Sz() {
}
function Pz(e) {
  return e != null;
}
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
function ny(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      Oz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Oz(e, t, r) {
  return (t = Az(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Az(e) {
  var t = Cz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tz = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), s1 = (e, t, r) => e.map((n) => "".concat(Tz(n), " ").concat(t, "ms ").concat(r)).join(","), _z = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((o) => n.includes(o))), da = (e, t) => Object.keys(t).reduce((r, n) => ny(ny({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function oy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oy(Object(r), !0).forEach(function(n) {
      kz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kz(e, t, r) {
  return (t = Nz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nz(e) {
  var t = Iz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Iz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gs = (e, t, r) => e + (t - e) * r, sf = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, c1 = (e, t, r) => {
  var n = da((o, a) => {
    if (sf(a)) {
      var [i, s] = e(a.from, a.to, a.velocity);
      return rt(rt({}, a), {}, {
        from: i,
        velocity: s
      });
    }
    return a;
  }, t);
  return r < 1 ? da((o, a) => sf(a) ? rt(rt({}, a), {}, {
    velocity: gs(a.velocity, n[o].velocity, r),
    from: gs(a.from, n[o].from, r)
  }) : a, t) : c1(e, n, r - 1);
};
function Rz(e, t, r, n, o, a) {
  var i, s = n.reduce((p, h) => rt(rt({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), c = () => da((p, h) => h.from, s), u = () => !Object.values(s).filter(sf).length, l = null, d = (p) => {
    i || (i = p);
    var h = p - i, v = h / r.dt;
    s = c1(r, s, v), o(rt(rt(rt({}, e), t), c())), i = p, u() || (l = a.setTimeout(d));
  };
  return () => (l = a.setTimeout(d), () => {
    l();
  });
}
function Mz(e, t, r, n, o, a, i) {
  var s = null, c = o.reduce((d, p) => rt(rt({}, d), {}, {
    [p]: [e[p], t[p]]
  }), {}), u, l = (d) => {
    u || (u = d);
    var p = (d - u) / n, h = da((f, g) => gs(...g, r(p)), c);
    if (a(rt(rt(rt({}, e), t), h)), p < 1)
      s = i.setTimeout(l);
    else {
      var v = da((f, g) => gs(...g, r(1)), c);
      a(rt(rt(rt({}, e), t), v));
    }
  };
  return () => (s = i.setTimeout(l), () => {
    s();
  });
}
const Dz = (e, t, r, n, o, a) => {
  var i = _z(e, t);
  return r.isStepper === !0 ? Rz(e, t, r, i, o, a) : Mz(e, t, r, n, i, o, a);
};
var ys = 1e-4, l1 = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], u1 = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), ay = (e, t) => (r) => {
  var n = l1(e, t);
  return u1(n, r);
}, jz = (e, t) => (r) => {
  var n = l1(e, t), o = [...n.map((a, i) => a * i).slice(1), 0];
  return u1(o, r);
}, iy = function() {
  for (var t, r, n, o, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
    i[s] = arguments[s];
  if (i.length === 1)
    switch (i[0]) {
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
        var c = i[0].split("(");
        c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4 && ([t, n, r, o] = c[1].split(")")[0].split(",").map((v) => parseFloat(v)));
      }
    }
  else i.length === 4 && ([t, n, r, o] = i);
  var u = ay(t, r), l = ay(n, o), d = jz(t, r), p = (v) => v > 1 ? 1 : v < 0 ? 0 : v, h = (v) => {
    for (var f = v > 1 ? 1 : v, g = f, y = 0; y < 8; ++y) {
      var x = u(g) - f, b = d(g);
      if (Math.abs(x - f) < ys || b < ys)
        return l(g);
      g = p(g - x / b);
    }
    return l(g);
  };
  return h.isStepper = !1, h;
}, $z = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: o = 17
  } = t, a = (i, s, c) => {
    var u = -(i - s) * r, l = c * n, d = c + (u - l) * o / 1e3, p = c * o / 1e3 + i;
    return Math.abs(p - s) < ys && Math.abs(d) < ys ? [s, 0] : [p, d];
  };
  return a.isStepper = !0, a.dt = o, a;
}, Lz = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return iy(e);
      case "spring":
        return $z();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return iy(e);
    }
  return typeof e == "function" ? e : null;
};
function Fz(e) {
  var t, r = () => null, n = !1, o = null, a = (i) => {
    if (!n) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var s = i, [c, ...u] = s;
        if (typeof c == "number") {
          o = e.setTimeout(a.bind(null, u), c);
          return;
        }
        a(c), o = e.setTimeout(a.bind(null, u));
        return;
      }
      typeof i == "string" && (t = i, r(t)), typeof i == "object" && (t = i, r(t)), typeof i == "function" && i();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (i) => {
      n = !1, o && (o(), o = null), a(i);
    },
    subscribe: (i) => (r = i, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class Bz {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), o = null, a = (i) => {
      i - n >= r ? t(i) : typeof requestAnimationFrame == "function" && (o = requestAnimationFrame(a));
    };
    return o = requestAnimationFrame(a), () => {
      cancelAnimationFrame(o);
    };
  }
}
function zz() {
  return Fz(new Bz());
}
var Uz = /* @__PURE__ */ Rt(zz);
function Wz(e, t) {
  var r = er(Uz);
  return Dr(() => t ?? r(e), [e, t, r]);
}
var Kz = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, sy = {
  t: 0
}, Fu = {
  t: 1
};
function Po(e) {
  var t = qe(e, Kz), {
    isActive: r,
    canBegin: n,
    duration: o,
    easing: a,
    begin: i,
    onAnimationEnd: s,
    onAnimationStart: c,
    children: u
  } = t, l = Wz(t.animationId, t.animationManager), [d, p] = Ke(r ? sy : Fu), h = me(null);
  return Be(() => {
    r || p(Fu);
  }, [r]), Be(() => {
    if (!r || !n)
      return Sz;
    var v = Dz(sy, Fu, Lz(a), o, p, l.getTimeoutController()), f = () => {
      h.current = v();
    };
    return l.start([c, i, f, o, s]), () => {
      l.stop(), h.current && h.current(), s();
    };
  }, [r, n, o, a, i, c, s, l]), u(d.t);
}
function Oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = me(sa(t)), n = me(e);
  return n.current !== e && (r.current = sa(t), n.current = e), r.current;
}
var Vz = ["radius"], qz = ["radius"];
function cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ly(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cy(Object(r), !0).forEach(function(n) {
      Hz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hz(e, t, r) {
  return (t = Gz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gz(e) {
  var t = Yz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Yz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bs.apply(null, arguments);
}
function uy(e, t) {
  if (e == null) return {};
  var r, n, o = Xz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Xz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var dy = (e, t, r, n, o) => {
  var a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2), i = n >= 0 ? 1 : -1, s = r >= 0 ? 1 : -1, c = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0, u;
  if (a > 0 && o instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = o[d] > a ? a : o[d];
    u = "M".concat(e, ",").concat(t + i * l[0]), l[0] > 0 && (u += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(e + s * l[0], ",").concat(t)), u += "L ".concat(e + r - s * l[1], ",").concat(t), l[1] > 0 && (u += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(e + r, ",").concat(t + i * l[1])), u += "L ".concat(e + r, ",").concat(t + n - i * l[2]), l[2] > 0 && (u += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(e + r - s * l[2], ",").concat(t + n)), u += "L ".concat(e + s * l[3], ",").concat(t + n), l[3] > 0 && (u += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(e, ",").concat(t + n - i * l[3])), u += "Z";
  } else if (a > 0 && o === +o && o > 0) {
    var h = Math.min(a, o);
    u = "M ".concat(e, ",").concat(t + i * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + s * h, ",").concat(t, `
            L `).concat(e + r - s * h, ",").concat(t, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + r, ",").concat(t + i * h, `
            L `).concat(e + r, ",").concat(t + n - i * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e + r - s * h, ",").concat(t + n, `
            L `).concat(e + s * h, ",").concat(t + n, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(e, ",").concat(t + n - i * h, " Z");
  } else
    u = "M ".concat(e, ",").concat(t, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
  return u;
}, Zz = {
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
}, d1 = (e) => {
  var t = qe(e, Zz), r = me(null), [n, o] = Ke(-1);
  Be(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var B = r.current.getTotalLength();
        B && o(B);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: i,
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
  } = t, g = me(s), y = me(c), x = me(a), b = me(i), E = Dr(() => ({
    x: a,
    y: i,
    width: s,
    height: c,
    radius: u
  }), [a, i, s, c, u]), S = Oo(E, "rectangle-");
  if (a !== +a || i !== +i || s !== +s || c !== +c || s === 0 || c === 0)
    return null;
  var P = le("recharts-rectangle", l);
  if (!f) {
    var O = mt(t), {
      radius: A
    } = O, _ = uy(O, Vz);
    return /* @__PURE__ */ m.createElement("path", bs({}, _, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: dy(a, i, s, c, u)
    }));
  }
  var I = g.current, T = y.current, M = x.current, D = b.current, N = "0px ".concat(n === -1 ? 1 : n, "px"), U = "".concat(n, "px 0px"), L = s1(["strokeDasharray"], p, typeof d == "string" ? d : void 0);
  return /* @__PURE__ */ m.createElement(Po, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: f,
    begin: h
  }, (B) => {
    var R = we(I, s, B), F = we(T, c, B), ee = we(M, a, B), ae = we(D, i, B);
    r.current && (g.current = R, y.current = F, x.current = ee, b.current = ae);
    var ne;
    v ? B > 0 ? ne = {
      transition: L,
      strokeDasharray: U
    } : ne = {
      strokeDasharray: N
    } : ne = {
      strokeDasharray: U
    };
    var te = mt(t), {
      radius: oe
    } = te, ue = uy(te, qz);
    return /* @__PURE__ */ m.createElement("path", bs({}, ue, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: dy(ee, ae, R, F, u),
      ref: r,
      style: ly(ly({}, ne), t.style)
    }));
  });
};
function f1(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: a
  } = e, i = Le(t, r, n, o), s = Le(t, r, n, a);
  return {
    points: [i, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: a
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
var Jz = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Oi = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: o,
    sign: a,
    isExternal: i,
    cornerRadius: s,
    cornerIsExternal: c
  } = e, u = s * (i ? 1 : -1) + n, l = Math.asin(s / u) / hs, d = c ? o : o + a * l, p = Le(t, r, u, d), h = Le(t, r, n, d), v = c ? o - a * l : o, f = Le(t, r, u * Math.cos(l * hs), v);
  return {
    center: p,
    circleTangency: h,
    lineTangency: f,
    theta: l
  };
}, p1 = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    startAngle: a,
    endAngle: i
  } = e, s = Jz(a, i), c = a + s, u = Le(t, r, o, a), l = Le(t, r, o, c), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(o, ",").concat(o, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(a > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var p = Le(t, r, n, a), h = Le(t, r, n, c);
    d += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(n, ",").concat(n, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(a <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(t, ",").concat(r, " Z");
  return d;
}, Qz = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    cornerRadius: a,
    forceCornerRadius: i,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u
  } = e, l = Ze(u - c), {
    circleTangency: d,
    lineTangency: p,
    theta: h
  } = Oi({
    cx: t,
    cy: r,
    radius: o,
    angle: c,
    sign: l,
    cornerRadius: a,
    cornerIsExternal: s
  }), {
    circleTangency: v,
    lineTangency: f,
    theta: g
  } = Oi({
    cx: t,
    cy: r,
    radius: o,
    angle: u,
    sign: -l,
    cornerRadius: a,
    cornerIsExternal: s
  }), y = s ? Math.abs(c - u) : Math.abs(c - u) - h - g;
  if (y < 0)
    return i ? "M ".concat(p.x, ",").concat(p.y, `
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(a * 2, `,0
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(-a * 2, `,0
      `) : p1({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: o,
      startAngle: c,
      endAngle: u
    });
  var x = "M ".concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(o, ",").concat(o, ",0,").concat(+(y > 180), ",").concat(+(l < 0), ",").concat(v.x, ",").concat(v.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(f.x, ",").concat(f.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: b,
      lineTangency: E,
      theta: S
    } = Oi({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: s
    }), {
      circleTangency: P,
      lineTangency: O,
      theta: A
    } = Oi({
      cx: t,
      cy: r,
      radius: n,
      angle: u,
      sign: -l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: s
    }), _ = s ? Math.abs(c - u) : Math.abs(c - u) - S - A;
    if (_ < 0 && a === 0)
      return "".concat(x, "L").concat(t, ",").concat(r, "Z");
    x += "L".concat(O.x, ",").concat(O.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(_ > 180), ",").concat(+(l > 0), ",").concat(b.x, ",").concat(b.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(E.x, ",").concat(E.y, "Z");
  } else
    x += "L".concat(t, ",").concat(r, "Z");
  return x;
}, eU = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, h1 = (e) => {
  var t = qe(e, eU), {
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: a,
    cornerRadius: i,
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: l,
    className: d
  } = t;
  if (a < o || u === l)
    return null;
  var p = le("recharts-sector", d), h = a - o, v = ct(i, h, 0, !0), f;
  return v > 0 && Math.abs(u - l) < 360 ? f = Qz({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: a,
    cornerRadius: Math.min(v, h / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: l
  }) : f = p1({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: a,
    startAngle: u,
    endAngle: l
  }), /* @__PURE__ */ m.createElement("path", cf({}, mt(t), {
    className: p,
    d: f
  }));
};
function tU(e, t, r) {
  var n, o, a, i;
  if (e === "horizontal")
    n = t.x, a = n, o = r.top, i = r.top + r.height;
  else if (e === "vertical")
    o = t.y, i = o, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var {
        cx: s,
        cy: c,
        innerRadius: u,
        outerRadius: l,
        angle: d
      } = t, p = Le(s, c, u, d), h = Le(s, c, l, d);
      n = p.x, o = p.y, a = h.x, i = h.y;
    } else
      return f1(t);
  return [{
    x: n,
    y: o
  }, {
    x: a,
    y: i
  }];
}
var Bu = {}, zu = {}, Uu = {}, fy;
function rU() {
  return fy || (fy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ dO();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Uu)), Uu;
}
var py;
function nU() {
  return py || (py = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rU();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(zu)), zu;
}
var hy;
function oU() {
  return hy || (hy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fO(), r = /* @__PURE__ */ nU();
    function n(o, a, i) {
      i && typeof i != "number" && t.isIterateeCall(o, a, i) && (a = i = void 0), o = r.toFinite(o), a === void 0 ? (a = o, o = 0) : a = r.toFinite(a), i = i === void 0 ? o < a ? 1 : -1 : r.toFinite(i);
      const s = Math.max(Math.ceil((a - o) / (i || 1)), 0), c = new Array(s);
      for (let u = 0; u < s; u++)
        c[u] = o, o += i;
      return c;
    }
    e.range = n;
  })(Bu)), Bu;
}
var Wu, my;
function aU() {
  return my || (my = 1, Wu = oU().range), Wu;
}
var iU = /* @__PURE__ */ aU();
const m1 = /* @__PURE__ */ an(iU);
function Xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sU(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Gp(e) {
  let t, r, n;
  e.length !== 2 ? (t = Xr, r = (s, c) => Xr(e(s), c), n = (s, c) => e(s) - c) : (t = e === Xr || e === sU ? e : cU, r = e, n = e);
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
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const d = u + l >>> 1;
        r(s[d], c) <= 0 ? u = d + 1 : l = d;
      } while (u < l);
    }
    return u;
  }
  function i(s, c, u = 0, l = s.length) {
    const d = o(s, c, u, l - 1);
    return d > u && n(s[d - 1], c) > -n(s[d], c) ? d - 1 : d;
  }
  return { left: o, center: i, right: a };
}
function cU() {
  return 0;
}
function v1(e) {
  return e === null ? NaN : +e;
}
function* lU(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const uU = Gp(Xr), Fa = uU.right;
Gp(v1).center;
class vy extends Map {
  constructor(t, r = pU) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(gy(this, t));
  }
  has(t) {
    return super.has(gy(this, t));
  }
  set(t, r) {
    return super.set(dU(this, t), r);
  }
  delete(t) {
    return super.delete(fU(this, t));
  }
}
function gy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function dU({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function fU({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function pU(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function hU(e = Xr) {
  if (e === Xr) return g1;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function g1(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const mU = Math.sqrt(50), vU = Math.sqrt(10), gU = Math.sqrt(2);
function ws(e, t, r) {
  const n = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(n)), a = n / Math.pow(10, o), i = a >= mU ? 10 : a >= vU ? 5 : a >= gU ? 2 : 1;
  let s, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? ws(e, t, r * 2) : [s, c, u];
}
function lf(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [o, a, i] = n ? ws(t, e, r) : ws(e, t, r);
  if (!(a >= o)) return [];
  const s = a - o + 1, c = new Array(s);
  if (n)
    if (i < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -i;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * i;
  else if (i < 0) for (let u = 0; u < s; ++u) c[u] = (o + u) / -i;
  else for (let u = 0; u < s; ++u) c[u] = (o + u) * i;
  return c;
}
function uf(e, t, r) {
  return t = +t, e = +e, r = +r, ws(e, t, r)[2];
}
function df(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, o = n ? uf(t, e, r) : uf(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function yy(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function by(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function y1(e, t, r = 0, n = 1 / 0, o) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (o = o === void 0 ? g1 : hU(o); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), d = 0.5 * Math.exp(2 * l / 3), p = 0.5 * Math.sqrt(l * d * (c - d) / c) * (u - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - u * d / c + p)), v = Math.min(n, Math.floor(t + (c - u) * d / c + p));
      y1(e, t, h, v, o);
    }
    const a = e[t];
    let i = r, s = n;
    for (Uo(e, r, t), o(e[n], a) > 0 && Uo(e, r, n); i < s; ) {
      for (Uo(e, i, s), ++i, --s; o(e[i], a) < 0; ) ++i;
      for (; o(e[s], a) > 0; ) --s;
    }
    o(e[r], a) === 0 ? Uo(e, r, s) : (++s, Uo(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Uo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function yU(e, t, r) {
  if (e = Float64Array.from(lU(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return by(e);
    if (t >= 1) return yy(e);
    var n, o = (n - 1) * t, a = Math.floor(o), i = yy(y1(e, a).subarray(0, a + 1)), s = by(e.subarray(a + 1));
    return i + (s - i) * (o - a);
  }
}
function bU(e, t, r = v1) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, o = (n - 1) * t, a = Math.floor(o), i = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return i + (s - i) * (o - a);
  }
}
function wU(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(o); ++n < o; )
    a[n] = e + n * r;
  return a;
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
  var e = new vy(), t = [], r = [], n = ff;
  function o(a) {
    let i = e.get(a);
    if (i === void 0) {
      if (n !== ff) return n;
      e.set(a, i = t.push(a) - 1);
    }
    return r[i % r.length];
  }
  return o.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new vy();
    for (const i of a)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (r = Array.from(a), o) : r.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.copy = function() {
    return Yp(t, r).unknown(n);
  }, Ht.apply(o, arguments), o;
}
function Xp() {
  var e = Yp().unknown(void 0), t = e.domain, r = e.range, n = 0, o = 1, a, i, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, h = o < n, v = h ? o : n, f = h ? n : o;
    a = (f - v) / Math.max(1, p - c + u * 2), s && (a = Math.floor(a)), v += (f - v - a * (p - c)) * l, i = a * (1 - c), s && (v = Math.round(v), i = Math.round(i));
    var g = wU(p).map(function(y) {
      return v + a * y;
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
    return i;
  }, e.step = function() {
    return a;
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
function b1(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return b1(t());
  }, e;
}
function xU() {
  return b1(Xp.apply(null, arguments).paddingInner(1));
}
function Zp(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function w1(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ba() {
}
var fa = 0.7, xs = 1 / fa, no = "\\s*([+-]?\\d+)\\s*", pa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", EU = /^#([0-9a-f]{3,8})$/, SU = new RegExp(`^rgb\\(${no},${no},${no}\\)$`), PU = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), OU = new RegExp(`^rgba\\(${no},${no},${no},${pa}\\)$`), AU = new RegExp(`^rgba\\(${lr},${lr},${lr},${pa}\\)$`), CU = new RegExp(`^hsl\\(${pa},${lr},${lr}\\)$`), TU = new RegExp(`^hsla\\(${pa},${lr},${lr},${pa}\\)$`), wy = {
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
Zp(Ba, ha, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xy,
  // Deprecated! Use color.formatHex.
  formatHex: xy,
  formatHex8: _U,
  formatHsl: kU,
  formatRgb: Ey,
  toString: Ey
});
function xy() {
  return this.rgb().formatHex();
}
function _U() {
  return this.rgb().formatHex8();
}
function kU() {
  return x1(this).formatHsl();
}
function Ey() {
  return this.rgb().formatRgb();
}
function ha(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = EU.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Sy(t) : r === 3 ? new yt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ai(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ai(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = SU.exec(e)) ? new yt(t[1], t[2], t[3], 1) : (t = PU.exec(e)) ? new yt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = OU.exec(e)) ? Ai(t[1], t[2], t[3], t[4]) : (t = AU.exec(e)) ? Ai(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = CU.exec(e)) ? Ay(t[1], t[2] / 100, t[3] / 100, 1) : (t = TU.exec(e)) ? Ay(t[1], t[2] / 100, t[3] / 100, t[4]) : wy.hasOwnProperty(e) ? Sy(wy[e]) : e === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function Sy(e) {
  return new yt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ai(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new yt(e, t, r, n);
}
function NU(e) {
  return e instanceof Ba || (e = ha(e)), e ? (e = e.rgb(), new yt(e.r, e.g, e.b, e.opacity)) : new yt();
}
function pf(e, t, r, n) {
  return arguments.length === 1 ? NU(e) : new yt(e, t, r, n ?? 1);
}
function yt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Zp(yt, pf, w1(Ba, {
  brighter(e) {
    return e = e == null ? xs : Math.pow(xs, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fa : Math.pow(fa, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(Sn(this.r), Sn(this.g), Sn(this.b), Es(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Py,
  // Deprecated! Use color.formatHex.
  formatHex: Py,
  formatHex8: IU,
  formatRgb: Oy,
  toString: Oy
}));
function Py() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}`;
}
function IU() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}${vn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Oy() {
  const e = Es(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sn(this.r)}, ${Sn(this.g)}, ${Sn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Es(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vn(e) {
  return e = Sn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ay(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, r, n);
}
function x1(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ba || (e = ha(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, o = Math.min(t, r, n), a = Math.max(t, r, n), i = NaN, s = a - o, c = (a + o) / 2;
  return s ? (t === a ? i = (r - n) / s + (r < n) * 6 : r === a ? i = (n - t) / s + 2 : i = (t - r) / s + 4, s /= c < 0.5 ? a + o : 2 - a - o, i *= 60) : s = c > 0 && c < 1 ? 0 : i, new Xt(i, s, c, e.opacity);
}
function RU(e, t, r, n) {
  return arguments.length === 1 ? x1(e) : new Xt(e, t, r, n ?? 1);
}
function Xt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Zp(Xt, RU, w1(Ba, {
  brighter(e) {
    return e = e == null ? xs : Math.pow(xs, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fa : Math.pow(fa, e), new Xt(this.h, this.s, this.l * e, this.opacity);
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
    return new Xt(Cy(this.h), Ci(this.s), Ci(this.l), Es(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Es(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Cy(this.h)}, ${Ci(this.s) * 100}%, ${Ci(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Cy(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ci(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ku(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Jp = (e) => () => e;
function MU(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function DU(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function jU(e) {
  return (e = +e) == 1 ? E1 : function(t, r) {
    return r - t ? DU(t, r, e) : Jp(isNaN(t) ? r : t);
  };
}
function E1(e, t) {
  var r = t - e;
  return r ? MU(e, r) : Jp(isNaN(e) ? t : e);
}
const Ty = (function e(t) {
  var r = jU(t);
  function n(o, a) {
    var i = r((o = pf(o)).r, (a = pf(a)).r), s = r(o.g, a.g), c = r(o.b, a.b), u = E1(o.opacity, a.opacity);
    return function(l) {
      return o.r = i(l), o.g = s(l), o.b = c(l), o.opacity = u(l), o + "";
    };
  }
  return n.gamma = e, n;
})(1);
function $U(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - a) + t[o] * a;
    return n;
  };
}
function LU(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function FU(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, o = new Array(n), a = new Array(r), i;
  for (i = 0; i < n; ++i) o[i] = Ao(e[i], t[i]);
  for (; i < r; ++i) a[i] = t[i];
  return function(s) {
    for (i = 0; i < n; ++i) a[i] = o[i](s);
    return a;
  };
}
function BU(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ss(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function zU(e, t) {
  var r = {}, n = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Ao(e[o], t[o]) : n[o] = t[o];
  return function(a) {
    for (o in r) n[o] = r[o](a);
    return n;
  };
}
var hf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vu = new RegExp(hf.source, "g");
function UU(e) {
  return function() {
    return e;
  };
}
function WU(e) {
  return function(t) {
    return e(t) + "";
  };
}
function KU(e, t) {
  var r = hf.lastIndex = Vu.lastIndex = 0, n, o, a, i = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = hf.exec(e)) && (o = Vu.exec(t)); )
    (a = o.index) > r && (a = t.slice(r, a), s[i] ? s[i] += a : s[++i] = a), (n = n[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, c.push({ i, x: Ss(n, o) })), r = Vu.lastIndex;
  return r < t.length && (a = t.slice(r), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? c[0] ? WU(c[0].x) : UU(t) : (t = c.length, function(u) {
    for (var l = 0, d; l < t; ++l) s[(d = c[l]).i] = d.x(u);
    return s.join("");
  });
}
function Ao(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Jp(t) : (r === "number" ? Ss : r === "string" ? (n = ha(t)) ? (t = n, Ty) : KU : t instanceof ha ? Ty : t instanceof Date ? BU : LU(t) ? $U : Array.isArray(t) ? FU : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zU : Ss)(e, t);
}
function Qp(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function VU(e, t) {
  t === void 0 && (t = e, e = Ao);
  for (var r = 0, n = t.length - 1, o = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(o, o = t[++r]);
  return function(i) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(i *= n)));
    return a[s](i - s);
  };
}
function qU(e) {
  return function() {
    return e;
  };
}
function Ps(e) {
  return +e;
}
var _y = [0, 1];
function ft(e) {
  return e;
}
function mf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : qU(isNaN(t) ? NaN : 0.5);
}
function HU(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function GU(e, t, r) {
  var n = e[0], o = e[1], a = t[0], i = t[1];
  return o < n ? (n = mf(o, n), a = r(i, a)) : (n = mf(n, o), a = r(a, i)), function(s) {
    return a(n(s));
  };
}
function YU(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, o = new Array(n), a = new Array(n), i = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < n; )
    o[i] = mf(e[i], e[i + 1]), a[i] = r(t[i], t[i + 1]);
  return function(s) {
    var c = Fa(e, s, 1, n) - 1;
    return a[c](o[c](s));
  };
}
function za(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Lc() {
  var e = _y, t = _y, r = Ao, n, o, a, i = ft, s, c, u;
  function l() {
    var p = Math.min(e.length, t.length);
    return i !== ft && (i = HU(e[0], e[p - 1])), s = p > 2 ? YU : GU, c = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? a : (c || (c = s(e.map(n), t, r)))(n(i(p)));
  }
  return d.invert = function(p) {
    return i(o((u || (u = s(t, e.map(n), Ss)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ps), l()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), l()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), r = Qp, l();
  }, d.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : ft, l()) : i !== ft;
  }, d.interpolate = function(p) {
    return arguments.length ? (r = p, l()) : r;
  }, d.unknown = function(p) {
    return arguments.length ? (a = p, d) : a;
  }, function(p, h) {
    return n = p, o = h, l();
  };
}
function eh() {
  return Lc()(ft, ft);
}
function XU(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Os(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function uo(e) {
  return e = Os(Math.abs(e)), e ? e[1] : NaN;
}
function ZU(e, t) {
  return function(r, n) {
    for (var o = r.length, a = [], i = 0, s = e[0], c = 0; o > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(o -= s, o + s)), !((c += s + 1) > n)); )
      s = e[i = (i + 1) % e.length];
    return a.reverse().join(t);
  };
}
function JU(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var QU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ma(e) {
  if (!(t = QU.exec(e))) throw new Error("invalid format: " + e);
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
ma.prototype = th.prototype;
function th(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
th.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function eW(e) {
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
var S1;
function tW(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1], a = o - (S1 = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = n.length;
  return a === i ? n : a > i ? n + new Array(a - i + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Os(e, Math.max(0, t + a - 1))[0];
}
function ky(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}
const Ny = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: XU,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ky(e * 100, t),
  r: ky,
  s: tW,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Iy(e) {
  return e;
}
var Ry = Array.prototype.map, My = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rW(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Iy : ZU(Ry.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Iy : JU(Ry.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d) {
    d = ma(d);
    var p = d.fill, h = d.align, v = d.sign, f = d.symbol, g = d.zero, y = d.width, x = d.comma, b = d.precision, E = d.trim, S = d.type;
    S === "n" ? (x = !0, S = "g") : Ny[S] || (b === void 0 && (b = 12), E = !0, S = "g"), (g || p === "0" && h === "=") && (g = !0, p = "0", h = "=");
    var P = f === "$" ? r : f === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", O = f === "$" ? n : /[%p]/.test(S) ? i : "", A = Ny[S], _ = /[defgprs%]/.test(S);
    b = b === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function I(T) {
      var M = P, D = O, N, U, L;
      if (S === "c")
        D = A(T) + D, T = "";
      else {
        T = +T;
        var B = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : A(Math.abs(T), b), E && (T = eW(T)), B && +T == 0 && v !== "+" && (B = !1), M = (B ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + M, D = (S === "s" ? My[8 + S1 / 3] : "") + D + (B && v === "(" ? ")" : ""), _) {
          for (N = -1, U = T.length; ++N < U; )
            if (L = T.charCodeAt(N), 48 > L || L > 57) {
              D = (L === 46 ? o + T.slice(N + 1) : T.slice(N)) + D, T = T.slice(0, N);
              break;
            }
        }
      }
      x && !g && (T = t(T, 1 / 0));
      var R = M.length + T.length + D.length, F = R < y ? new Array(y - R + 1).join(p) : "";
      switch (x && g && (T = t(F + T, F.length ? y - D.length : 1 / 0), F = ""), h) {
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
      return a(T);
    }
    return I.toString = function() {
      return d + "";
    }, I;
  }
  function l(d, p) {
    var h = u((d = ma(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(uo(p) / 3))) * 3, f = Math.pow(10, -v), g = My[8 + v / 3];
    return function(y) {
      return h(f * y) + g;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Ti, rh, P1;
nW({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function nW(e) {
  return Ti = rW(e), rh = Ti.format, P1 = Ti.formatPrefix, Ti;
}
function oW(e) {
  return Math.max(0, -uo(Math.abs(e)));
}
function aW(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(uo(t) / 3))) * 3 - uo(Math.abs(e)));
}
function iW(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, uo(t) - uo(e)) + 1;
}
function O1(e, t, r, n) {
  var o = df(e, t, r), a;
  switch (n = ma(n ?? ",f"), n.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = aW(o, i)) && (n.precision = a), P1(n, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = iW(o, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = oW(o)) && (n.precision = a - (n.type === "%") * 2);
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
    return O1(o[0], o[o.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), o = 0, a = n.length - 1, i = n[o], s = n[a], c, u, l = 10;
    for (s < i && (u = i, i = s, s = u, u = o, o = a, a = u); l-- > 0; ) {
      if (u = uf(i, s, r), u === c)
        return n[o] = i, n[a] = s, t(n);
      if (u > 0)
        i = Math.floor(i / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        i = Math.ceil(i * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function A1() {
  var e = eh();
  return e.copy = function() {
    return za(e, A1());
  }, Ht.apply(e, arguments), cn(e);
}
function C1(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ps), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return C1(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ps) : [0, 1], cn(r);
}
function T1(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, o = e[r], a = e[n], i;
  return a < o && (i = r, r = n, n = i, i = o, o = a, a = i), e[r] = t.floor(o), e[n] = t.ceil(a), e;
}
function Dy(e) {
  return Math.log(e);
}
function jy(e) {
  return Math.exp(e);
}
function sW(e) {
  return -Math.log(-e);
}
function cW(e) {
  return -Math.exp(-e);
}
function lW(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function uW(e) {
  return e === 10 ? lW : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function dW(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function $y(e) {
  return (t, r) => -e(-t, r);
}
function nh(e) {
  const t = e(Dy, jy), r = t.domain;
  let n = 10, o, a;
  function i() {
    return o = dW(n), a = uW(n), r()[0] < 0 ? (o = $y(o), a = $y(a), e(sW, cW)) : e(Dy, jy), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, i()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), i()) : r();
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
            if (f = p < 0 ? v / a(-p) : v * a(p), !(f < u)) {
              if (f > l) break;
              y.push(f);
            }
      } else for (; p <= h; ++p)
        for (v = n - 1; v >= 1; --v)
          if (f = p > 0 ? v / a(-p) : v * a(p), !(f < u)) {
            if (f > l) break;
            y.push(f);
          }
      y.length * 2 < g && (y = lf(u, l, g));
    } else
      y = lf(p, h, Math.min(h - p, g)).map(a);
    return d ? y.reverse() : y;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = ma(c)).precision == null && (c.trim = !0), c = rh(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let d = l / a(Math.round(o(l)));
      return d * n < n - 0.5 && (d *= n), d <= u ? c(l) : "";
    };
  }, t.nice = () => r(T1(r(), {
    floor: (s) => a(Math.floor(o(s))),
    ceil: (s) => a(Math.ceil(o(s)))
  })), t;
}
function _1() {
  const e = nh(Lc()).domain([1, 10]);
  return e.copy = () => za(e, _1()).base(e.base()), Ht.apply(e, arguments), e;
}
function Ly(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Fy(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function oh(e) {
  var t = 1, r = e(Ly(t), Fy(t));
  return r.constant = function(n) {
    return arguments.length ? e(Ly(t = +n), Fy(t)) : t;
  }, cn(r);
}
function k1() {
  var e = oh(Lc());
  return e.copy = function() {
    return za(e, k1()).constant(e.constant());
  }, Ht.apply(e, arguments);
}
function By(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function fW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function pW(e) {
  return e < 0 ? -e * e : e * e;
}
function ah(e) {
  var t = e(ft, ft), r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(fW, pW) : e(By(r), By(1 / r));
  }
  return t.exponent = function(o) {
    return arguments.length ? (r = +o, n()) : r;
  }, cn(t);
}
function ih() {
  var e = ah(Lc());
  return e.copy = function() {
    return za(e, ih()).exponent(e.exponent());
  }, Ht.apply(e, arguments), e;
}
function hW() {
  return ih.apply(null, arguments).exponent(0.5);
}
function zy(e) {
  return Math.sign(e) * e * e;
}
function mW(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function N1() {
  var e = eh(), t = [0, 1], r = !1, n;
  function o(a) {
    var i = mW(e(a));
    return isNaN(i) ? n : r ? Math.round(i) : i;
  }
  return o.invert = function(a) {
    return e.invert(zy(a));
  }, o.domain = function(a) {
    return arguments.length ? (e.domain(a), o) : e.domain();
  }, o.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Ps)).map(zy)), o) : t.slice();
  }, o.rangeRound = function(a) {
    return o.range(a).round(!0);
  }, o.round = function(a) {
    return arguments.length ? (r = !!a, o) : r;
  }, o.clamp = function(a) {
    return arguments.length ? (e.clamp(a), o) : e.clamp();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.copy = function() {
    return N1(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ht.apply(o, arguments), cn(o);
}
function I1() {
  var e = [], t = [], r = [], n;
  function o() {
    var i = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++i < s; ) r[i - 1] = bU(e, i / s);
    return a;
  }
  function a(i) {
    return i == null || isNaN(i = +i) ? n : t[Fa(r, i)];
  }
  return a.invertExtent = function(i) {
    var s = t.indexOf(i);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(i) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of i) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Xr), o();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), o()) : t.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return I1().domain(e).range(t).unknown(n);
  }, Ht.apply(a, arguments);
}
function R1() {
  var e = 0, t = 1, r = 1, n = [0.5], o = [0, 1], a;
  function i(c) {
    return c != null && c <= c ? o[Fa(n, c, 0, r)] : a;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return i;
  }
  return i.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, s()) : [e, t];
  }, i.range = function(c) {
    return arguments.length ? (r = (o = Array.from(c)).length - 1, s()) : o.slice();
  }, i.invertExtent = function(c) {
    var u = o.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, i.unknown = function(c) {
    return arguments.length && (a = c), i;
  }, i.thresholds = function() {
    return n.slice();
  }, i.copy = function() {
    return R1().domain([e, t]).range(o).unknown(a);
  }, Ht.apply(cn(i), arguments);
}
function M1() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function o(a) {
    return a != null && a <= a ? t[Fa(e, a, 0, n)] : r;
  }
  return o.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(a) {
    var i = t.indexOf(a);
    return [e[i - 1], e[i]];
  }, o.unknown = function(a) {
    return arguments.length ? (r = a, o) : r;
  }, o.copy = function() {
    return M1().domain(e).range(t).unknown(r);
  }, Ht.apply(o, arguments);
}
const qu = /* @__PURE__ */ new Date(), Hu = /* @__PURE__ */ new Date();
function He(e, t, r, n) {
  function o(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return o.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), o.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), o.round = (a) => {
    const i = o(a), s = o.ceil(a);
    return a - i < s - a ? i : s;
  }, o.offset = (a, i) => (t(a = /* @__PURE__ */ new Date(+a), i == null ? 1 : Math.floor(i)), a), o.range = (a, i, s) => {
    const c = [];
    if (a = o.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < i) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (u < a && a < i);
    return c;
  }, o.filter = (a) => He((i) => {
    if (i >= i) for (; e(i), !a(i); ) i.setTime(i - 1);
  }, (i, s) => {
    if (i >= i)
      if (s < 0) for (; ++s <= 0; )
        for (; t(i, -1), !a(i); )
          ;
      else for (; --s >= 0; )
        for (; t(i, 1), !a(i); )
          ;
  }), r && (o.count = (a, i) => (qu.setTime(+a), Hu.setTime(+i), e(qu), e(Hu), Math.floor(r(qu, Hu))), o.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? o.filter(n ? (i) => n(i) % a === 0 : (i) => o.count(0, i) % a === 0) : o)), o;
}
const As = He(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
As.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? He((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : As);
As.range;
const Er = 1e3, zt = Er * 60, Sr = zt * 60, Ir = Sr * 24, sh = Ir * 7, Uy = Ir * 30, Gu = Ir * 365, gn = He((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getUTCSeconds());
gn.range;
const ch = He((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Er);
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getMinutes());
ch.range;
const lh = He((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getUTCMinutes());
lh.range;
const uh = He((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Er - e.getMinutes() * zt);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getHours());
uh.range;
const dh = He((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCHours());
dh.range;
const Ua = He(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * zt) / Ir,
  (e) => e.getDate() - 1
);
Ua.range;
const Fc = He((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCDate() - 1);
Fc.range;
const D1 = He((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => Math.floor(e / Ir));
D1.range;
function Kn(e) {
  return He((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / sh);
}
const Bc = Kn(0), Cs = Kn(1), vW = Kn(2), gW = Kn(3), fo = Kn(4), yW = Kn(5), bW = Kn(6);
Bc.range;
Cs.range;
vW.range;
gW.range;
fo.range;
yW.range;
bW.range;
function Vn(e) {
  return He((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / sh);
}
const zc = Vn(0), Ts = Vn(1), wW = Vn(2), xW = Vn(3), po = Vn(4), EW = Vn(5), SW = Vn(6);
zc.range;
Ts.range;
wW.range;
xW.range;
po.range;
EW.range;
SW.range;
const fh = He((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
fh.range;
const ph = He((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ph.range;
const Rr = He((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : He((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Rr.range;
const Mr = He((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Mr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : He((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Mr.range;
function j1(e, t, r, n, o, a) {
  const i = [
    [gn, 1, Er],
    [gn, 5, 5 * Er],
    [gn, 15, 15 * Er],
    [gn, 30, 30 * Er],
    [a, 1, zt],
    [a, 5, 5 * zt],
    [a, 15, 15 * zt],
    [a, 30, 30 * zt],
    [o, 1, Sr],
    [o, 3, 3 * Sr],
    [o, 6, 6 * Sr],
    [o, 12, 12 * Sr],
    [n, 1, Ir],
    [n, 2, 2 * Ir],
    [r, 1, sh],
    [t, 1, Uy],
    [t, 3, 3 * Uy],
    [e, 1, Gu]
  ];
  function s(u, l, d) {
    const p = l < u;
    p && ([u, l] = [l, u]);
    const h = d && typeof d.range == "function" ? d : c(u, l, d), v = h ? h.range(u, +l + 1) : [];
    return p ? v.reverse() : v;
  }
  function c(u, l, d) {
    const p = Math.abs(l - u) / d, h = Gp(([, , g]) => g).right(i, p);
    if (h === i.length) return e.every(df(u / Gu, l / Gu, d));
    if (h === 0) return As.every(Math.max(df(u, l, d), 1));
    const [v, f] = i[p / i[h - 1][2] < i[h][2] / p ? h - 1 : h];
    return v.every(f);
  }
  return [s, c];
}
const [PW, OW] = j1(Mr, ph, zc, D1, dh, lh), [AW, CW] = j1(Rr, fh, Bc, Ua, uh, ch);
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
function Wo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function TW(e) {
  var t = e.dateTime, r = e.date, n = e.time, o = e.periods, a = e.days, i = e.shortDays, s = e.months, c = e.shortMonths, u = Ko(o), l = Vo(o), d = Ko(a), p = Vo(a), h = Ko(i), v = Vo(i), f = Ko(s), g = Vo(s), y = Ko(c), x = Vo(c), b = {
    a: B,
    A: R,
    b: F,
    B: ee,
    c: null,
    d: Gy,
    e: Gy,
    f: ZW,
    g: sK,
    G: lK,
    H: GW,
    I: YW,
    j: XW,
    L: $1,
    m: JW,
    M: QW,
    p: ae,
    q: ne,
    Q: Zy,
    s: Jy,
    S: eK,
    u: tK,
    U: rK,
    V: nK,
    w: oK,
    W: aK,
    x: null,
    X: null,
    y: iK,
    Y: cK,
    Z: uK,
    "%": Xy
  }, E = {
    a: te,
    A: oe,
    b: ue,
    B: $e,
    c: null,
    d: Yy,
    e: Yy,
    f: hK,
    g: PK,
    G: AK,
    H: dK,
    I: fK,
    j: pK,
    L: F1,
    m: mK,
    M: vK,
    p: K,
    q: fe,
    Q: Zy,
    s: Jy,
    S: gK,
    u: yK,
    U: bK,
    V: wK,
    w: xK,
    W: EK,
    x: null,
    X: null,
    y: SK,
    Y: OK,
    Z: CK,
    "%": Xy
  }, S = {
    a: I,
    A: T,
    b: M,
    B: D,
    c: N,
    d: qy,
    e: qy,
    f: KW,
    g: Vy,
    G: Ky,
    H: Hy,
    I: Hy,
    j: BW,
    L: WW,
    m: FW,
    M: zW,
    p: _,
    q: LW,
    Q: qW,
    s: HW,
    S: UW,
    u: RW,
    U: MW,
    V: DW,
    w: IW,
    W: jW,
    x: U,
    X: L,
    y: Vy,
    Y: Ky,
    Z: $W,
    "%": VW
  };
  b.x = P(r, b), b.X = P(n, b), b.c = P(t, b), E.x = P(r, E), E.X = P(n, E), E.c = P(t, E);
  function P(j, q) {
    return function(J) {
      var $ = [], Ee = -1, de = 0, Qe = j.length, et, Gt, Tm;
      for (J instanceof Date || (J = /* @__PURE__ */ new Date(+J)); ++Ee < Qe; )
        j.charCodeAt(Ee) === 37 && ($.push(j.slice(de, Ee)), (Gt = Wy[et = j.charAt(++Ee)]) != null ? et = j.charAt(++Ee) : Gt = et === "e" ? " " : "0", (Tm = q[et]) && (et = Tm(J, Gt)), $.push(et), de = Ee + 1);
      return $.push(j.slice(de, Ee)), $.join("");
    };
  }
  function O(j, q) {
    return function(J) {
      var $ = Wo(1900, void 0, 1), Ee = A($, j, J += "", 0), de, Qe;
      if (Ee != J.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (q && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (de = Xu(Wo($.y, 0, 1)), Qe = de.getUTCDay(), de = Qe > 4 || Qe === 0 ? Ts.ceil(de) : Ts(de), de = Fc.offset(de, ($.V - 1) * 7), $.y = de.getUTCFullYear(), $.m = de.getUTCMonth(), $.d = de.getUTCDate() + ($.w + 6) % 7) : (de = Yu(Wo($.y, 0, 1)), Qe = de.getDay(), de = Qe > 4 || Qe === 0 ? Cs.ceil(de) : Cs(de), de = Ua.offset(de, ($.V - 1) * 7), $.y = de.getFullYear(), $.m = de.getMonth(), $.d = de.getDate() + ($.w + 6) % 7);
      } else ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), Qe = "Z" in $ ? Xu(Wo($.y, 0, 1)).getUTCDay() : Yu(Wo($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (Qe + 5) % 7 : $.w + $.U * 7 - (Qe + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, Xu($)) : Yu($);
    };
  }
  function A(j, q, J, $) {
    for (var Ee = 0, de = q.length, Qe = J.length, et, Gt; Ee < de; ) {
      if ($ >= Qe) return -1;
      if (et = q.charCodeAt(Ee++), et === 37) {
        if (et = q.charAt(Ee++), Gt = S[et in Wy ? q.charAt(Ee++) : et], !Gt || ($ = Gt(j, J, $)) < 0) return -1;
      } else if (et != J.charCodeAt($++))
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
    return $ ? (j.m = x.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function D(j, q, J) {
    var $ = f.exec(q.slice(J));
    return $ ? (j.m = g.get($[0].toLowerCase()), J + $[0].length) : -1;
  }
  function N(j, q, J) {
    return A(j, t, q, J);
  }
  function U(j, q, J) {
    return A(j, r, q, J);
  }
  function L(j, q, J) {
    return A(j, n, q, J);
  }
  function B(j) {
    return i[j.getDay()];
  }
  function R(j) {
    return a[j.getDay()];
  }
  function F(j) {
    return c[j.getMonth()];
  }
  function ee(j) {
    return s[j.getMonth()];
  }
  function ae(j) {
    return o[+(j.getHours() >= 12)];
  }
  function ne(j) {
    return 1 + ~~(j.getMonth() / 3);
  }
  function te(j) {
    return i[j.getUTCDay()];
  }
  function oe(j) {
    return a[j.getUTCDay()];
  }
  function ue(j) {
    return c[j.getUTCMonth()];
  }
  function $e(j) {
    return s[j.getUTCMonth()];
  }
  function K(j) {
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
var Wy = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, _W = /^%/, kW = /[\\^$*+?|[\]().{}]/g;
function pe(e, t, r) {
  var n = e < 0 ? "-" : "", o = (n ? -e : e) + "", a = o.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + o : o);
}
function NW(e) {
  return e.replace(kW, "\\$&");
}
function Ko(e) {
  return new RegExp("^(?:" + e.map(NW).join("|") + ")", "i");
}
function Vo(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function IW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function RW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function MW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function DW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function jW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Ky(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Vy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function $W(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function LW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function FW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function qy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function BW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Hy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function zW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function UW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function WW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function KW(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function VW(e, t, r) {
  var n = _W.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function qW(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function HW(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Gy(e, t) {
  return pe(e.getDate(), t, 2);
}
function GW(e, t) {
  return pe(e.getHours(), t, 2);
}
function YW(e, t) {
  return pe(e.getHours() % 12 || 12, t, 2);
}
function XW(e, t) {
  return pe(1 + Ua.count(Rr(e), e), t, 3);
}
function $1(e, t) {
  return pe(e.getMilliseconds(), t, 3);
}
function ZW(e, t) {
  return $1(e, t) + "000";
}
function JW(e, t) {
  return pe(e.getMonth() + 1, t, 2);
}
function QW(e, t) {
  return pe(e.getMinutes(), t, 2);
}
function eK(e, t) {
  return pe(e.getSeconds(), t, 2);
}
function tK(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function rK(e, t) {
  return pe(Bc.count(Rr(e) - 1, e), t, 2);
}
function L1(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? fo(e) : fo.ceil(e);
}
function nK(e, t) {
  return e = L1(e), pe(fo.count(Rr(e), e) + (Rr(e).getDay() === 4), t, 2);
}
function oK(e) {
  return e.getDay();
}
function aK(e, t) {
  return pe(Cs.count(Rr(e) - 1, e), t, 2);
}
function iK(e, t) {
  return pe(e.getFullYear() % 100, t, 2);
}
function sK(e, t) {
  return e = L1(e), pe(e.getFullYear() % 100, t, 2);
}
function cK(e, t) {
  return pe(e.getFullYear() % 1e4, t, 4);
}
function lK(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? fo(e) : fo.ceil(e), pe(e.getFullYear() % 1e4, t, 4);
}
function uK(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + pe(t / 60 | 0, "0", 2) + pe(t % 60, "0", 2);
}
function Yy(e, t) {
  return pe(e.getUTCDate(), t, 2);
}
function dK(e, t) {
  return pe(e.getUTCHours(), t, 2);
}
function fK(e, t) {
  return pe(e.getUTCHours() % 12 || 12, t, 2);
}
function pK(e, t) {
  return pe(1 + Fc.count(Mr(e), e), t, 3);
}
function F1(e, t) {
  return pe(e.getUTCMilliseconds(), t, 3);
}
function hK(e, t) {
  return F1(e, t) + "000";
}
function mK(e, t) {
  return pe(e.getUTCMonth() + 1, t, 2);
}
function vK(e, t) {
  return pe(e.getUTCMinutes(), t, 2);
}
function gK(e, t) {
  return pe(e.getUTCSeconds(), t, 2);
}
function yK(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bK(e, t) {
  return pe(zc.count(Mr(e) - 1, e), t, 2);
}
function B1(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? po(e) : po.ceil(e);
}
function wK(e, t) {
  return e = B1(e), pe(po.count(Mr(e), e) + (Mr(e).getUTCDay() === 4), t, 2);
}
function xK(e) {
  return e.getUTCDay();
}
function EK(e, t) {
  return pe(Ts.count(Mr(e) - 1, e), t, 2);
}
function SK(e, t) {
  return pe(e.getUTCFullYear() % 100, t, 2);
}
function PK(e, t) {
  return e = B1(e), pe(e.getUTCFullYear() % 100, t, 2);
}
function OK(e, t) {
  return pe(e.getUTCFullYear() % 1e4, t, 4);
}
function AK(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? po(e) : po.ceil(e), pe(e.getUTCFullYear() % 1e4, t, 4);
}
function CK() {
  return "+0000";
}
function Xy() {
  return "%";
}
function Zy(e) {
  return +e;
}
function Jy(e) {
  return Math.floor(+e / 1e3);
}
var Xn, z1, U1;
TK({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function TK(e) {
  return Xn = TW(e), z1 = Xn.format, Xn.parse, U1 = Xn.utcFormat, Xn.utcParse, Xn;
}
function _K(e) {
  return new Date(e);
}
function kK(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function hh(e, t, r, n, o, a, i, s, c, u) {
  var l = eh(), d = l.invert, p = l.domain, h = u(".%L"), v = u(":%S"), f = u("%I:%M"), g = u("%I %p"), y = u("%a %d"), x = u("%b %d"), b = u("%B"), E = u("%Y");
  function S(P) {
    return (c(P) < P ? h : s(P) < P ? v : i(P) < P ? f : a(P) < P ? g : n(P) < P ? o(P) < P ? y : x : r(P) < P ? b : E)(P);
  }
  return l.invert = function(P) {
    return new Date(d(P));
  }, l.domain = function(P) {
    return arguments.length ? p(Array.from(P, kK)) : p().map(_K);
  }, l.ticks = function(P) {
    var O = p();
    return e(O[0], O[O.length - 1], P ?? 10);
  }, l.tickFormat = function(P, O) {
    return O == null ? S : u(O);
  }, l.nice = function(P) {
    var O = p();
    return (!P || typeof P.range != "function") && (P = t(O[0], O[O.length - 1], P ?? 10)), P ? p(T1(O, P)) : l;
  }, l.copy = function() {
    return za(l, hh(e, t, r, n, o, a, i, s, c, u));
  }, l;
}
function NK() {
  return Ht.apply(hh(AW, CW, Rr, fh, Bc, Ua, uh, ch, gn, z1).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function IK() {
  return Ht.apply(hh(PW, OW, Mr, ph, zc, Fc, dh, lh, gn, U1).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Uc() {
  var e = 0, t = 1, r, n, o, a, i = ft, s = !1, c;
  function u(d) {
    return d == null || isNaN(d = +d) ? c : i(o === 0 ? 0.5 : (d = (a(d) - r) * o, s ? Math.max(0, Math.min(1, d)) : d));
  }
  u.domain = function(d) {
    return arguments.length ? ([e, t] = d, r = a(e = +e), n = a(t = +t), o = r === n ? 0 : 1 / (n - r), u) : [e, t];
  }, u.clamp = function(d) {
    return arguments.length ? (s = !!d, u) : s;
  }, u.interpolator = function(d) {
    return arguments.length ? (i = d, u) : i;
  };
  function l(d) {
    return function(p) {
      var h, v;
      return arguments.length ? ([h, v] = p, i = d(h, v), u) : [i(0), i(1)];
    };
  }
  return u.range = l(Ao), u.rangeRound = l(Qp), u.unknown = function(d) {
    return arguments.length ? (c = d, u) : c;
  }, function(d) {
    return a = d, r = d(e), n = d(t), o = r === n ? 0 : 1 / (n - r), u;
  };
}
function ln(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function W1() {
  var e = cn(Uc()(ft));
  return e.copy = function() {
    return ln(e, W1());
  }, Fr.apply(e, arguments);
}
function K1() {
  var e = nh(Uc()).domain([1, 10]);
  return e.copy = function() {
    return ln(e, K1()).base(e.base());
  }, Fr.apply(e, arguments);
}
function V1() {
  var e = oh(Uc());
  return e.copy = function() {
    return ln(e, V1()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function mh() {
  var e = ah(Uc());
  return e.copy = function() {
    return ln(e, mh()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function RK() {
  return mh.apply(null, arguments).exponent(0.5);
}
function q1() {
  var e = [], t = ft;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Fa(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (o, a) => yU(e, a / n));
  }, r.copy = function() {
    return q1(t).domain(e);
  }, Fr.apply(r, arguments);
}
function Wc() {
  var e = 0, t = 0.5, r = 1, n = 1, o, a, i, s, c, u = ft, l, d = !1, p;
  function h(f) {
    return isNaN(f = +f) ? p : (f = 0.5 + ((f = +l(f)) - a) * (n * f < n * a ? s : c), u(d ? Math.max(0, Math.min(1, f)) : f));
  }
  h.domain = function(f) {
    return arguments.length ? ([e, t, r] = f, o = l(e = +e), a = l(t = +t), i = l(r = +r), s = o === a ? 0 : 0.5 / (a - o), c = a === i ? 0 : 0.5 / (i - a), n = a < o ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(f) {
    return arguments.length ? (d = !!f, h) : d;
  }, h.interpolator = function(f) {
    return arguments.length ? (u = f, h) : u;
  };
  function v(f) {
    return function(g) {
      var y, x, b;
      return arguments.length ? ([y, x, b] = g, u = VU(f, [y, x, b]), h) : [u(0), u(0.5), u(1)];
    };
  }
  return h.range = v(Ao), h.rangeRound = v(Qp), h.unknown = function(f) {
    return arguments.length ? (p = f, h) : p;
  }, function(f) {
    return l = f, o = f(e), a = f(t), i = f(r), s = o === a ? 0 : 0.5 / (a - o), c = a === i ? 0 : 0.5 / (i - a), n = a < o ? -1 : 1, h;
  };
}
function H1() {
  var e = cn(Wc()(ft));
  return e.copy = function() {
    return ln(e, H1());
  }, Fr.apply(e, arguments);
}
function G1() {
  var e = nh(Wc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ln(e, G1()).base(e.base());
  }, Fr.apply(e, arguments);
}
function Y1() {
  var e = oh(Wc());
  return e.copy = function() {
    return ln(e, Y1()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function vh() {
  var e = ah(Wc());
  return e.copy = function() {
    return ln(e, vh()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function MK() {
  return vh.apply(null, arguments).exponent(0.5);
}
const Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Xp,
  scaleDiverging: H1,
  scaleDivergingLog: G1,
  scaleDivergingPow: vh,
  scaleDivergingSqrt: MK,
  scaleDivergingSymlog: Y1,
  scaleIdentity: C1,
  scaleImplicit: ff,
  scaleLinear: A1,
  scaleLog: _1,
  scaleOrdinal: Yp,
  scalePoint: xU,
  scalePow: ih,
  scaleQuantile: I1,
  scaleQuantize: R1,
  scaleRadial: N1,
  scaleSequential: W1,
  scaleSequentialLog: K1,
  scaleSequentialPow: mh,
  scaleSequentialQuantile: q1,
  scaleSequentialSqrt: RK,
  scaleSequentialSymlog: V1,
  scaleSqrt: hW,
  scaleSymlog: k1,
  scaleThreshold: M1,
  scaleTime: NK,
  scaleUtc: IK,
  tickFormat: O1
}, Symbol.toStringTag, { value: "Module" }));
var un = (e) => e.chartData, gh = C([un], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Wa = (e, t, r, n) => n ? gh(e) : un(e);
function jn(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (ze(t) && ze(r))
      return !0;
  }
  return !1;
}
function Qy(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function X1(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, o, a;
    if (ze(r))
      o = r;
    else if (typeof r == "function")
      return;
    if (ze(n))
      a = n;
    else if (typeof n == "function")
      return;
    var i = [o, a];
    if (jn(i))
      return i;
  }
}
function DK(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (jn(n))
          return Qy(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [o, a] = e, i, s;
      if (o === "auto")
        t != null && (i = Math.min(...t));
      else if (X(o))
        i = o;
      else if (typeof o == "function")
        try {
          t != null && (i = o(t?.[0]));
        } catch {
        }
      else if (typeof o == "string" && jg.test(o)) {
        var c = jg.exec(o);
        if (c == null || t == null)
          i = void 0;
        else {
          var u = +c[1];
          i = t[0] - u;
        }
      } else
        i = t?.[0];
      if (a === "auto")
        t != null && (s = Math.max(...t));
      else if (X(a))
        s = a;
      else if (typeof a == "function")
        try {
          t != null && (s = a(t?.[1]));
        } catch {
        }
      else if (typeof a == "string" && $g.test(a)) {
        var l = $g.exec(a);
        if (l == null || t == null)
          s = void 0;
        else {
          var d = +l[1];
          s = t[1] + d;
        }
      } else
        s = t?.[1];
      var p = [i, s];
      if (jn(p))
        return t == null ? p : Qy(p, t, r);
    }
  }
}
var Co = 1e9, jK = {
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
}, bh, Te = !0, qt = "[DecimalError] ", Pn = qt + "Invalid argument: ", yh = qt + "Exponent out of range: ", To = Math.floor, hn = Math.pow, $K = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tt, Xe = 1e7, Oe = 7, Z1 = 9007199254740991, _s = To(Z1 / Oe), H = {};
H.absoluteValue = H.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
H.comparedTo = H.cmp = function(e) {
  var t, r, n, o, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === o ? 0 : n > o ^ a.s < 0 ? 1 : -1;
};
H.decimalPlaces = H.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Oe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
H.dividedBy = H.div = function(e) {
  return Ar(this, new this.constructor(e));
};
H.dividedToIntegerBy = H.idiv = function(e) {
  var t = this, r = t.constructor;
  return Se(Ar(t, new r(e), 0, 1), r.precision);
};
H.equals = H.eq = function(e) {
  return !this.cmp(e);
};
H.exponent = function() {
  return Fe(this);
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
  var t, r = this, n = r.constructor, o = n.precision, a = o + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Tt)) throw Error(qt + "NaN");
  if (r.s < 1) throw Error(qt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Tt) ? new n(0) : (Te = !1, t = Ar(va(r, a), va(e, a), a), Te = !0, Se(t, o));
};
H.minus = H.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? eA(t, e) : J1(t, (e.s = -e.s, e));
};
H.modulo = H.mod = function(e) {
  var t, r = this, n = r.constructor, o = n.precision;
  if (e = new n(e), !e.s) throw Error(qt + "NaN");
  return r.s ? (Te = !1, t = Ar(r, e, 0, 1).times(e), Te = !0, r.minus(t)) : Se(new n(r), o);
};
H.naturalExponential = H.exp = function() {
  return Q1(this);
};
H.naturalLogarithm = H.ln = function() {
  return va(this);
};
H.negated = H.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
H.plus = H.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? J1(t, e) : eA(t, (e.s = -e.s, e));
};
H.precision = H.sd = function(e) {
  var t, r, n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Pn + e);
  if (t = Fe(o) + 1, n = o.d.length - 1, r = n * Oe + 1, n = o.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = o.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
H.squareRoot = H.sqrt = function() {
  var e, t, r, n, o, a, i, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(qt + "NaN");
  }
  for (e = Fe(s), Te = !1, o = Math.sqrt(+s), o == 0 || o == 1 / 0 ? (t = sr(s.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = To((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(o.toString()), r = c.precision, o = i = r + 3; ; )
    if (a = n, n = a.plus(Ar(s, a, i + 2)).times(0.5), sr(a.d).slice(0, i) === (t = sr(n.d)).slice(0, i)) {
      if (t = t.slice(i - 3, i + 1), o == i && t == "4999") {
        if (Se(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      i += 4;
    }
  return Te = !0, Se(n, r);
};
H.times = H.mul = function(e) {
  var t, r, n, o, a, i, s, c, u, l = this, d = l.constructor, p = l.d, h = (e = new d(e)).d;
  if (!l.s || !e.s) return new d(0);
  for (e.s *= l.s, r = l.e + e.e, c = p.length, u = h.length, c < u && (a = p, p = h, h = a, i = c, c = u, u = i), a = [], i = c + u, n = i; n--; ) a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, o = c + n; o > n; )
      s = a[o] + h[n] * p[o - n - 1] + t, a[o--] = s % Xe | 0, t = s / Xe | 0;
    a[o] = (a[o] + t) % Xe | 0;
  }
  for (; !a[--i]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Te ? Se(e, d.precision) : e;
};
H.toDecimalPlaces = H.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (pr(e, 0, Co), t === void 0 ? t = n.rounding : pr(t, 0, 8), Se(r, e + Fe(r) + 1, t));
};
H.toExponential = function(e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0 ? r = $n(n, !0) : (pr(e, 0, Co), t === void 0 ? t = o.rounding : pr(t, 0, 8), n = Se(new o(n), e + 1, t), r = $n(n, !0, e + 1)), r;
};
H.toFixed = function(e, t) {
  var r, n, o = this, a = o.constructor;
  return e === void 0 ? $n(o) : (pr(e, 0, Co), t === void 0 ? t = a.rounding : pr(t, 0, 8), n = Se(new a(o), e + Fe(o) + 1, t), r = $n(n.abs(), !1, e + Fe(n) + 1), o.isneg() && !o.isZero() ? "-" + r : r);
};
H.toInteger = H.toint = function() {
  var e = this, t = e.constructor;
  return Se(new t(e), Fe(e) + 1, t.rounding);
};
H.toNumber = function() {
  return +this;
};
H.toPower = H.pow = function(e) {
  var t, r, n, o, a, i, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(Tt);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(qt + "Infinity");
    return s;
  }
  if (s.eq(Tt)) return s;
  if (n = c.precision, e.eq(Tt)) return Se(s, n);
  if (t = e.e, r = e.d.length - 1, i = t >= r, a = s.s, i) {
    if ((r = l < 0 ? -l : l) <= Z1) {
      for (o = new c(Tt), t = Math.ceil(n / Oe + 4), Te = !1; r % 2 && (o = o.times(s), tb(o.d, t)), r = To(r / 2), r !== 0; )
        s = s.times(s), tb(s.d, t);
      return Te = !0, e.s < 0 ? new c(Tt).div(o) : Se(o, n);
    }
  } else if (a < 0) throw Error(qt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Te = !1, o = e.times(va(s, n + u)), Te = !0, o = Q1(o), o.s = a, o;
};
H.toPrecision = function(e, t) {
  var r, n, o = this, a = o.constructor;
  return e === void 0 ? (r = Fe(o), n = $n(o, r <= a.toExpNeg || r >= a.toExpPos)) : (pr(e, 1, Co), t === void 0 ? t = a.rounding : pr(t, 0, 8), o = Se(new a(o), e, t), r = Fe(o), n = $n(o, e <= r || r <= a.toExpNeg, e)), n;
};
H.toSignificantDigits = H.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (pr(e, 1, Co), t === void 0 ? t = n.rounding : pr(t, 0, 8)), Se(new n(r), e, t);
};
H.toString = H.valueOf = H.val = H.toJSON = H[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Fe(e), r = e.constructor;
  return $n(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function J1(e, t) {
  var r, n, o, a, i, s, c, u, l = e.constructor, d = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Te ? Se(t, d) : t;
  if (c = e.d, u = t.d, i = e.e, o = t.e, c = c.slice(), a = i - o, a) {
    for (a < 0 ? (n = c, a = -a, s = u.length) : (n = u, o = i, s = c.length), i = Math.ceil(d / Oe), s = i > s ? i + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, a = u.length, s - a < 0 && (a = s, n = u, u = c, c = n), r = 0; a; )
    r = (c[--a] = c[a] + u[a] + r) / Xe | 0, c[a] %= Xe;
  for (r && (c.unshift(r), ++o), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = o, Te ? Se(t, d) : t;
}
function pr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Pn + e);
}
function sr(e) {
  var t, r, n, o = e.length - 1, a = "", i = e[0];
  if (o > 0) {
    for (a += i, t = 1; t < o; t++)
      n = e[t] + "", r = Oe - n.length, r && (a += qr(r)), a += n;
    i = e[t], n = i + "", r = Oe - n.length, r && (a += qr(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
var Ar = /* @__PURE__ */ (function() {
  function e(n, o) {
    var a, i = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * o + i, n[s] = a % Xe | 0, i = a / Xe | 0;
    return i && n.unshift(i), n;
  }
  function t(n, o, a, i) {
    var s, c;
    if (a != i)
      c = a > i ? 1 : -1;
    else
      for (s = c = 0; s < a; s++)
        if (n[s] != o[s]) {
          c = n[s] > o[s] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, o, a) {
    for (var i = 0; a--; )
      n[a] -= i, i = n[a] < o[a] ? 1 : 0, n[a] = i * Xe + n[a] - o[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, o, a, i) {
    var s, c, u, l, d, p, h, v, f, g, y, x, b, E, S, P, O, A, _ = n.constructor, I = n.s == o.s ? 1 : -1, T = n.d, M = o.d;
    if (!n.s) return new _(n);
    if (!o.s) throw Error(qt + "Division by zero");
    for (c = n.e - o.e, O = M.length, S = T.length, h = new _(I), v = h.d = [], u = 0; M[u] == (T[u] || 0); ) ++u;
    if (M[u] > (T[u] || 0) && --c, a == null ? x = a = _.precision : i ? x = a + (Fe(n) - Fe(o)) + 1 : x = a, x < 0) return new _(0);
    if (x = x / Oe + 2 | 0, u = 0, O == 1)
      for (l = 0, M = M[0], x++; (u < S || l) && x--; u++)
        b = l * Xe + (T[u] || 0), v[u] = b / M | 0, l = b % M | 0;
    else {
      for (l = Xe / (M[0] + 1) | 0, l > 1 && (M = e(M, l), T = e(T, l), O = M.length, S = T.length), E = O, f = T.slice(0, O), g = f.length; g < O; ) f[g++] = 0;
      A = M.slice(), A.unshift(0), P = M[0], M[1] >= Xe / 2 && ++P;
      do
        l = 0, s = t(M, f, O, g), s < 0 ? (y = f[0], O != g && (y = y * Xe + (f[1] || 0)), l = y / P | 0, l > 1 ? (l >= Xe && (l = Xe - 1), d = e(M, l), p = d.length, g = f.length, s = t(d, f, p, g), s == 1 && (l--, r(d, O < p ? A : M, p))) : (l == 0 && (s = l = 1), d = M.slice()), p = d.length, p < g && d.unshift(0), r(f, d, g), s == -1 && (g = f.length, s = t(M, f, O, g), s < 1 && (l++, r(f, O < g ? A : M, g))), g = f.length) : s === 0 && (l++, f = [0]), v[u++] = l, s && f[0] ? f[g++] = T[E] || 0 : (f = [T[E]], g = 1);
      while ((E++ < S || f[0] !== void 0) && x--);
    }
    return v[0] || v.shift(), h.e = c, Se(h, i ? a + Fe(h) + 1 : a);
  };
})();
function Q1(e, t) {
  var r, n, o, a, i, s, c = 0, u = 0, l = e.constructor, d = l.precision;
  if (Fe(e) > 16) throw Error(yh + Fe(e));
  if (!e.s) return new l(Tt);
  for (Te = !1, s = d, i = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(i), u += 5;
  for (n = Math.log(hn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = o = a = new l(Tt), l.precision = s; ; ) {
    if (o = Se(o.times(e), s), r = r.times(++c), i = a.plus(Ar(o, r, s)), sr(i.d).slice(0, s) === sr(a.d).slice(0, s)) {
      for (; u--; ) a = Se(a.times(a), s);
      return l.precision = d, t == null ? (Te = !0, Se(a, d)) : a;
    }
    a = i;
  }
}
function Fe(e) {
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
function va(e, t) {
  var r, n, o, a, i, s, c, u, l, d = 1, p = 10, h = e, v = h.d, f = h.constructor, g = f.precision;
  if (h.s < 1) throw Error(qt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Tt)) return new f(0);
  if (t == null ? (Te = !1, u = g) : u = t, h.eq(10))
    return t == null && (Te = !0), Zu(f, u);
  if (u += p, f.precision = u, r = sr(v), n = r.charAt(0), a = Fe(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = sr(h.d), n = r.charAt(0), d++;
    a = Fe(h), n > 1 ? (h = new f("0." + r), a++) : h = new f(n + "." + r.slice(1));
  } else
    return c = Zu(f, u + 2, g).times(a + ""), h = va(new f(n + "." + r.slice(1)), u - p).plus(c), f.precision = g, t == null ? (Te = !0, Se(h, g)) : h;
  for (s = i = h = Ar(h.minus(Tt), h.plus(Tt), u), l = Se(h.times(h), u), o = 3; ; ) {
    if (i = Se(i.times(l), u), c = s.plus(Ar(i, new f(o), u)), sr(c.d).slice(0, u) === sr(s.d).slice(0, u))
      return s = s.times(2), a !== 0 && (s = s.plus(Zu(f, u + 2, g).times(a + ""))), s = Ar(s, new f(d), u), f.precision = g, t == null ? (Te = !0, Se(s, g)) : s;
    s = c, o += 2;
  }
}
function eb(e, t) {
  var r, n, o;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (t = t.slice(n, o), t) {
    if (o -= n, r = r - n - 1, e.e = To(r / Oe), e.d = [], n = (r + 1) % Oe, r < 0 && (n += Oe), n < o) {
      for (n && e.d.push(+t.slice(0, n)), o -= Oe; n < o; ) e.d.push(+t.slice(n, n += Oe));
      t = t.slice(n), n = Oe - t.length;
    } else
      n -= o;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Te && (e.e > _s || e.e < -_s)) throw Error(yh + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Se(e, t, r) {
  var n, o, a, i, s, c, u, l, d = e.d;
  for (i = 1, a = d[0]; a >= 10; a /= 10) i++;
  if (n = t - i, n < 0)
    n += Oe, o = t, u = d[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Oe), a = d.length, l >= a) return e;
    for (u = a = d[l], i = 1; a >= 10; a /= 10) i++;
    n %= Oe, o = n - Oe + i;
  }
  if (r !== void 0 && (a = hn(10, i - o - 1), s = u / a % 10 | 0, c = t < 0 || d[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? o > 0 ? u / hn(10, i - o) : 0 : d[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return c ? (a = Fe(e), d.length = 1, t = t - a - 1, d[0] = hn(10, (Oe - t % Oe) % Oe), e.e = To(-t / Oe) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = l, a = 1, l--) : (d.length = l + 1, a = hn(10, Oe - n), d[l] = o > 0 ? (u / hn(10, i - o) % hn(10, o) | 0) * a : 0), c)
    for (; ; )
      if (l == 0) {
        (d[0] += a) == Xe && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[l] += a, d[l] != Xe) break;
        d[l--] = 0, a = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (Te && (e.e > _s || e.e < -_s))
    throw Error(yh + Fe(e));
  return e;
}
function eA(e, t) {
  var r, n, o, a, i, s, c, u, l, d, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Te ? Se(t, h) : t;
  if (c = e.d, d = t.d, n = t.e, u = e.e, c = c.slice(), i = u - n, i) {
    for (l = i < 0, l ? (r = c, i = -i, s = d.length) : (r = d, n = u, s = c.length), o = Math.max(Math.ceil(h / Oe), s) + 2, i > o && (i = o, r.length = 1), r.reverse(), o = i; o--; ) r.push(0);
    r.reverse();
  } else {
    for (o = c.length, s = d.length, l = o < s, l && (s = o), o = 0; o < s; o++)
      if (c[o] != d[o]) {
        l = c[o] < d[o];
        break;
      }
    i = 0;
  }
  for (l && (r = c, c = d, d = r, t.s = -t.s), s = c.length, o = d.length - s; o > 0; --o) c[s++] = 0;
  for (o = d.length; o > i; ) {
    if (c[--o] < d[o]) {
      for (a = o; a && c[--a] === 0; ) c[a] = Xe - 1;
      --c[a], c[o] += Xe;
    }
    c[o] -= d[o];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Te ? Se(t, h) : t) : new p(0);
}
function $n(e, t, r) {
  var n, o = Fe(e), a = sr(e.d), i = a.length;
  return t ? (r && (n = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + qr(n) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (o < 0 ? "e" : "e+") + o) : o < 0 ? (a = "0." + qr(-o - 1) + a, r && (n = r - i) > 0 && (a += qr(n))) : o >= i ? (a += qr(o + 1 - i), r && (n = r - o - 1) > 0 && (a = a + "." + qr(n))) : ((n = o + 1) < i && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - i) > 0 && (o + 1 === i && (a += "."), a += qr(n))), e.s < 0 ? "-" + a : a;
}
function tb(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function tA(e) {
  var t, r, n;
  function o(a) {
    var i = this;
    if (!(i instanceof o)) return new o(a);
    if (i.constructor = o, a instanceof o) {
      i.s = a.s, i.e = a.e, i.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Pn + a);
      if (a > 0)
        i.s = 1;
      else if (a < 0)
        a = -a, i.s = -1;
      else {
        i.s = 0, i.e = 0, i.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        i.e = 0, i.d = [a];
        return;
      }
      return eb(i, a.toString());
    } else if (typeof a != "string")
      throw Error(Pn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), i.s = -1) : i.s = 1, $K.test(a)) eb(i, a);
    else throw Error(Pn + a);
  }
  if (o.prototype = H, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = tA, o.config = o.set = LK, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return o.config(e), o;
}
function LK(e) {
  if (!e || typeof e != "object")
    throw Error(qt + "Object expected");
  var t, r, n, o = [
    "precision",
    1,
    Co,
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
      if (To(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Pn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Pn + r + ": " + n);
  return this;
}
var bh = tA(jK);
Tt = new bh(1);
const ge = bh;
var FK = (e) => e, rA = {}, nA = (e) => e === rA, rb = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && nA(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, oA = (e, t) => e === 1 ? t : rb(function() {
  for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  var a = n.filter((i) => i !== rA).length;
  return a >= e ? t(...n) : oA(e - a, rb(function() {
    for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
      s[c] = arguments[c];
    var u = n.map((l) => nA(l) ? s.shift() : l);
    return t(...u, ...s);
  }));
}), Kc = (e) => oA(e.length, e), vf = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, BK = Kc((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), zK = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return FK;
  var o = r.reverse(), a = o[0], i = o.slice(1);
  return function() {
    return i.reduce((s, c) => c(s), a(...arguments));
  };
}, gf = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), aA = (e) => {
  var t = null, r = null;
  return function() {
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return t && o.every((i, s) => {
      var c;
      return i === ((c = t) === null || c === void 0 ? void 0 : c[s]);
    }) || (t = o, r = e(...o)), r;
  };
};
function iA(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ge(e).abs().log(10).toNumber()) + 1, t;
}
function sA(e, t, r) {
  for (var n = new ge(e), o = 0, a = []; n.lt(t) && o < 1e5; )
    a.push(n.toNumber()), n = n.add(r), o++;
  return a;
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
var cA = (e) => {
  var [t, r] = e, [n, o] = [t, r];
  return t > r && ([n, o] = [r, t]), [n, o];
}, lA = (e, t, r) => {
  if (e.lte(0))
    return new ge(0);
  var n = iA(e.toNumber()), o = new ge(10).pow(n), a = e.div(o), i = n !== 1 ? 0.05 : 0.1, s = new ge(Math.ceil(a.div(i).toNumber())).add(r).mul(i), c = s.mul(o);
  return t ? new ge(c.toNumber()) : new ge(Math.ceil(c.toNumber()));
}, UK = (e, t, r) => {
  var n = new ge(1), o = new ge(e);
  if (!o.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ge(10).pow(iA(e) - 1), o = new ge(Math.floor(o.div(n).toNumber())).mul(n)) : a > 1 && (o = new ge(Math.floor(e)));
  } else e === 0 ? o = new ge(Math.floor((t - 1) / 2)) : r || (o = new ge(Math.floor(e)));
  var i = Math.floor((t - 1) / 2), s = zK(BK((c) => o.add(new ge(c - i).mul(n)).toNumber()), vf);
  return s(0, t);
}, uA = function(t, r, n, o) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ge(0),
      tickMin: new ge(0),
      tickMax: new ge(0)
    };
  var i = lA(new ge(r).sub(t).div(n - 1), o, a), s;
  t <= 0 && r >= 0 ? s = new ge(0) : (s = new ge(t).add(r).div(2), s = s.sub(new ge(s).mod(i)));
  var c = Math.ceil(s.sub(t).div(i).toNumber()), u = Math.ceil(new ge(r).sub(s).div(i).toNumber()), l = c + u + 1;
  return l > n ? uA(t, r, n, o, a + 1) : (l < n && (u = r > 0 ? u + (n - l) : u, c = r > 0 ? c : c + (n - l)), {
    step: i,
    tickMin: s.sub(new ge(c).mul(i)),
    tickMax: s.add(new ge(u).mul(i))
  });
};
function WK(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = Math.max(n, 2), [i, s] = cA([t, r]);
  if (i === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [i, ...vf(0, n - 1).map(() => 1 / 0)] : [...vf(0, n - 1).map(() => -1 / 0), s];
    return t > r ? gf(c) : c;
  }
  if (i === s)
    return UK(i, n, o);
  var {
    step: u,
    tickMin: l,
    tickMax: d
  } = uA(i, s, a, o, 0), p = sA(l, d.add(new ge(0.1).mul(u)), u);
  return t > r ? gf(p) : p;
}
function KK(e, t) {
  var [r, n] = e, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [a, i] = cA([r, n]);
  if (a === -1 / 0 || i === 1 / 0)
    return [r, n];
  if (a === i)
    return [a];
  var s = Math.max(t, 2), c = lA(new ge(i).sub(a).div(s - 1), o, 0), u = [...sA(new ge(a), new ge(i), c), i];
  return o === !1 && (u = u.map((l) => Math.round(l))), r > n ? gf(u) : u;
}
var VK = aA(WK), qK = aA(KK), dA = (e) => e.rootProps.maxBarSize, HK = (e) => e.rootProps.barGap, fA = (e) => e.rootProps.barCategoryGap, GK = (e) => e.rootProps.barSize, Ka = (e) => e.rootProps.stackOffset, wh = (e) => e.options.chartName, xh = (e) => e.rootProps.syncId, pA = (e) => e.rootProps.syncMethod, Eh = (e) => e.options.eventEmitter, wr = {
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
}, YK = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: wr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: wr.reversed,
  scale: wr.scale,
  tick: wr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: wr.type,
  unit: void 0
}, XK = {
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
}, ZK = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: wr.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: wr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: wr.scale,
  tick: wr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, JK = {
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
}, Sh = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? ZK : YK, Ph = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? JK : XK, qc = (e) => e.polarOptions, Oh = C([jr, $r, Ve], VO), hA = C([qc, Oh], (e, t) => {
  if (e != null)
    return ct(e.innerRadius, t, 0);
}), mA = C([qc, Oh], (e, t) => {
  if (e != null)
    return ct(e.outerRadius, t, t * 0.8);
}), QK = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, vA = C([qc], QK);
C([Sh, vA], Vc);
var gA = C([Oh, hA, mA], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
C([Ph, gA], Vc);
var yA = C([ce, qc, hA, mA, jr, $r], (e, t, r, n, o, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: i,
      cy: s,
      startAngle: c,
      endAngle: u
    } = t;
    return {
      cx: ct(i, o, o / 2),
      cy: ct(s, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: c,
      endAngle: u,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), ke = (e, t) => t, Va = (e, t, r) => r;
function Hc(e) {
  return e?.id;
}
var Ge = (e) => {
  var t = ce(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, _o = (e) => e.tooltip.settings.axisId, Ye = (e) => {
  var t = Ge(e), r = _o(e);
  return qa(e, t, r);
}, bA = C([Ye], (e) => e?.dataKey);
function wA(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: o,
    dataKey: a
  } = r, i = /* @__PURE__ */ new Map();
  return e.forEach((s) => {
    var c, u = (c = s.data) !== null && c !== void 0 ? c : n;
    if (!(u == null || u.length === 0)) {
      var l = Hc(s);
      u.forEach((d, p) => {
        var h = a == null || o ? p : String(xe(d, a, null)), v = xe(d, s.dataKey, 0), f;
        i.has(h) ? f = i.get(h) : f = {}, Object.assign(f, {
          [l]: v
        }), i.set(h, f);
      });
    }
  }), Array.from(i.values());
}
function Gc(e) {
  return e.stackId != null && e.dataKey != null;
}
var Yc = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Xc(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nb(Object(r), !0).forEach(function(n) {
      e4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e4(e, t, r) {
  return (t = t4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t4(e) {
  var t = r4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r4(e, t) {
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
}, xA = (e, t) => e.cartesianAxis.xAxis[t], Br = (e, t) => {
  var r = xA(e, t);
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
  width: $a
}, EA = (e, t) => e.cartesianAxis.yAxis[t], zr = (e, t) => {
  var r = EA(e, t);
  return r ?? St;
}, n4 = {
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
  return r ?? n4;
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
}, o4 = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Br(e, r);
    case "yAxis":
      return zr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, qa = (e, t, r) => {
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
}, SA = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
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
var Ha = (e) => e.graphicalItems.cartesianItems, a4 = C([ke, Va], Ch), Th = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), Ga = C([Ha, Ne, a4], Th, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), PA = C([Ga], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Gc)), OA = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), i4 = C([Ga], OA), _h = (e) => e.map((t) => t.data).filter(Boolean).flat(1), s4 = C([Ga], _h, {
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
}, Nh = C([s4, Wa], kh), Ih = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: xe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((o) => ({
  value: xe(o, n)
}))) : e.map((n) => ({
  value: n
})), Zc = C([Nh, Ne, Ga], Ih);
function AA(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function Wi(e) {
  if (fr(e) || e instanceof Date) {
    var t = Number(e);
    if (ze(t))
      return t;
  }
}
function ob(e) {
  if (Array.isArray(e)) {
    var t = [Wi(e[0]), Wi(e[1])];
    return jn(t) ? t : void 0;
  }
  var r = Wi(e);
  if (r != null)
    return [r, r];
}
function ko(e) {
  return e.map(Wi).filter(Pz);
}
function c4(e, t, r) {
  return !r || typeof t != "number" || Nt(t) ? [] : r.length ? ko(r.flatMap((n) => {
    var o = xe(e, n.dataKey), a, i;
    if (Array.isArray(o) ? [a, i] = o : a = i = o, !(!ze(a) || !ze(i)))
      return [t - a, t + i];
  })) : [];
}
var l4 = C([PA, Wa, Ye], wA), CA = (e, t, r) => {
  var n = {}, o = t.reduce((a, i) => (i.stackId == null || (a[i.stackId] == null && (a[i.stackId] = []), a[i.stackId].push(i)), a), n);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [i, s] = a, c = s.map(Hc);
    return [i, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: HF(e, c, r),
      graphicalItems: s
    }];
  }));
}, ga = C([l4, PA, Ka], CA), TA = (e, t, r, n) => {
  var {
    dataStartIndex: o,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var i = ZF(e, o, a);
    if (!(i != null && i[0] === 0 && i[1] === 0))
      return i;
  }
}, u4 = C([Ne], (e) => e.allowDataOverflow), Rh = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return yf;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = ko(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : yf;
}, Mh = C([Ne], Rh), Dh = C([Mh, u4], X1), d4 = C([ga, un, ke, Dh], TA, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), Jc = (e) => e.errorBars, f4 = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => AA(r, n)), Ns = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  if (o.length !== 0) {
    var a = o.flat(), i = Math.min(...a), s = Math.max(...a);
    return [i, s];
  }
}, jh = (e, t, r, n, o) => {
  var a, i;
  if (r.length > 0 && e.forEach((s) => {
    r.forEach((c) => {
      var u, l, d = (u = n[c.id]) === null || u === void 0 ? void 0 : u.filter((y) => AA(o, y)), p = xe(s, (l = t.dataKey) !== null && l !== void 0 ? l : c.dataKey), h = c4(s, p, d);
      if (h.length >= 2) {
        var v = Math.min(...h), f = Math.max(...h);
        (a == null || v < a) && (a = v), (i == null || f > i) && (i = f);
      }
      var g = ob(p);
      g != null && (a = a == null ? g[0] : Math.min(a, g[0]), i = i == null ? g[1] : Math.max(i, g[1]));
    });
  }), t?.dataKey != null && e.forEach((s) => {
    var c = ob(xe(s, t.dataKey));
    c != null && (a = a == null ? c[0] : Math.min(a, c[0]), i = i == null ? c[1] : Math.max(i, c[1]));
  }), ze(a) && ze(i))
    return [a, i];
}, p4 = C([Nh, Ne, i4, Jc, ke], jh, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
});
function h4(e) {
  var {
    value: t
  } = e;
  if (fr(t) || t instanceof Date)
    return t;
}
var m4 = (e, t, r) => {
  var n = e.map(h4).filter((o) => o != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && XP(n)) ? m1(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, _A = (e) => e.referenceElements.dots, No = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), v4 = C([_A, ke, Va], No), kA = (e) => e.referenceElements.areas, g4 = C([kA, ke, Va], No), NA = (e) => e.referenceElements.lines, y4 = C([NA, ke, Va], No), IA = (e, t) => {
  var r = ko(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, b4 = C(v4, ke, IA), RA = (e, t) => {
  var r = ko(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, w4 = C([g4, ke], RA), MA = (e, t) => {
  var r = ko(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, x4 = C(y4, ke, MA), E4 = C(b4, x4, w4, (e, t, r) => Ns(e, r, t)), $h = (e, t, r, n, o, a, i, s) => {
  if (r != null)
    return r;
  var c = i === "vertical" && s === "xAxis" || i === "horizontal" && s === "yAxis", u = c ? Ns(n, a, o) : Ns(a, o);
  return DK(t, u, e.allowDataOverflow);
}, S4 = C([Ne, Mh, Dh, d4, p4, E4, ce, ke], $h, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), P4 = [0, 1], Lh = (e, t, r, n, o, a, i) => {
  if (!((e == null || r == null || r.length === 0) && i === void 0)) {
    var {
      dataKey: s,
      type: c
    } = e, u = gr(t, a);
    return u && s == null ? m1(0, r.length) : c === "category" ? m4(n, e, u) : o === "expand" ? P4 : i;
  }
}, Fh = C([Ne, ce, Nh, Zc, Ka, ke, S4], Lh), DA = (e, t, r, n, o) => {
  if (e != null) {
    var {
      scale: a,
      type: i
    } = e;
    if (a === "auto")
      return t === "radial" && o === "radiusAxis" ? "band" : t === "radial" && o === "angleAxis" ? "linear" : i === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : i === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var s = "scale".concat(Na(a));
      return s in Jo ? s : "point";
    }
  }
}, Io = C([Ne, ce, SA, wh, ke], DA);
function O4(e) {
  if (e != null) {
    if (e in Jo)
      return Jo[e]();
    var t = "scale".concat(Na(e));
    if (t in Jo)
      return Jo[t]();
  }
}
function Bh(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var o = O4(t);
    if (o != null) {
      var a = o.domain(r).range(n);
      return UF(a), a;
    }
  }
}
var zh = (e, t, r) => {
  var n = Rh(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && jn(e))
      return VK(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && jn(e))
      return qK(e, t.tickCount, t.allowDecimals);
  }
}, Uh = C([Fh, qa, Io], zh), Wh = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && jn(t) && Array.isArray(r) && r.length > 0
  ) {
    var o = t[0], a = r[0], i = t[1], s = r[r.length - 1];
    return [Math.min(o, a), Math.max(i, s)];
  }
  return t;
}, A4 = C([Ne, Fh, Uh, ke], Wh), C4 = C(Zc, Ne, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(ko(e.map((s) => s.value))).sort((s, c) => s - c);
    if (n.length < 2)
      return 1 / 0;
    var o = n[n.length - 1] - n[0];
    if (o === 0)
      return 1 / 0;
    for (var a = 0; a < n.length - 1; a++) {
      var i = n[a + 1] - n[a];
      r = Math.min(r, i);
    }
    return r / o;
  }
}), jA = C(C4, ce, fA, Ve, (e, t, r, n) => n, (e, t, r, n, o) => {
  if (!ze(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (o === "gap")
    return e * a / 2;
  if (o === "no-gap") {
    var i = ct(r, e * a), s = e * a / 2;
    return s - i - (s - i) / a * i;
  }
  return 0;
}), T4 = (e, t) => {
  var r = Br(e, t);
  return r == null || typeof r.padding != "string" ? 0 : jA(e, "xAxis", t, r.padding);
}, _4 = (e, t) => {
  var r = zr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : jA(e, "yAxis", t, r.padding);
}, k4 = C(Br, T4, (e, t) => {
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
}), N4 = C(zr, _4, (e, t) => {
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
}), I4 = C([Ve, k4, Mc, Rc, (e, t, r) => r], (e, t, r, n, o) => {
  var {
    padding: a
  } = n;
  return o ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), R4 = C([Ve, ce, N4, Mc, Rc, (e, t, r) => r], (e, t, r, n, o, a) => {
  var {
    padding: i
  } = o;
  return a ? [n.height - i.bottom, i.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), Ya = (e, t, r, n) => {
  var o;
  switch (t) {
    case "xAxis":
      return I4(e, r, n);
    case "yAxis":
      return R4(e, r, n);
    case "zAxis":
      return (o = Ah(e, r)) === null || o === void 0 ? void 0 : o.range;
    case "angleAxis":
      return vA(e);
    case "radiusAxis":
      return gA(e, r);
    default:
      return;
  }
}, $A = C([Ne, Ya], Vc), Ro = C([Ne, Io, A4, $A], Bh);
C([Ga, Jc, ke], f4);
function LA(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Qc = (e, t) => t, el = (e, t, r) => r, M4 = C(Nc, Qc, el, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(LA)), D4 = C(Ic, Qc, el, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(LA)), FA = (e, t) => ({
  width: e.width,
  height: t.height
}), j4 = (e, t) => {
  var r = typeof t.width == "number" ? t.width : $a;
  return {
    width: r,
    height: e.height
  };
}, BA = C(Ve, Br, FA), $4 = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, L4 = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, F4 = C($r, Ve, M4, Qc, el, (e, t, r, n, o) => {
  var a = {}, i;
  return r.forEach((s) => {
    var c = FA(t, s);
    i == null && (i = $4(t, n, e));
    var u = n === "top" && !o || n === "bottom" && o;
    a[s.id] = i - Number(u) * c.height, i += (u ? -1 : 1) * c.height;
  }), a;
}), B4 = C(jr, Ve, D4, Qc, el, (e, t, r, n, o) => {
  var a = {}, i;
  return r.forEach((s) => {
    var c = j4(t, s);
    i == null && (i = L4(t, n, e));
    var u = n === "left" && !o || n === "right" && o;
    a[s.id] = i - Number(u) * c.width, i += (u ? -1 : 1) * c.width;
  }), a;
}), z4 = (e, t) => {
  var r = Br(e, t);
  if (r != null)
    return F4(e, r.orientation, r.mirror);
}, U4 = C([Ve, Br, z4, (e, t) => t], (e, t, r, n) => {
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
}), W4 = (e, t) => {
  var r = zr(e, t);
  if (r != null)
    return B4(e, r.orientation, r.mirror);
}, K4 = C([Ve, zr, W4, (e, t) => t], (e, t, r, n) => {
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
}), zA = C(Ve, zr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : $a;
  return {
    width: r,
    height: e.height
  };
}), ab = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return BA(e, r).width;
    case "yAxis":
      return zA(e, r).height;
    default:
      return;
  }
}, UA = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: o,
      type: a,
      dataKey: i
    } = r, s = gr(e, n), c = t.map((u) => u.value);
    if (i && s && a === "category" && o && XP(c))
      return c;
  }
}, Kh = C([ce, Zc, Ne, ke], UA), WA = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: o,
      scale: a
    } = r, i = gr(e, n);
    if (i && (o === "number" || a !== "auto"))
      return t.map((s) => s.value);
  }
}, Vh = C([ce, Zc, qa, ke], WA), ib = C([ce, o4, Io, Ro, Kh, Vh, Ya, Uh, ke], (e, t, r, n, o, a, i, s, c) => {
  if (t == null)
    return null;
  var u = gr(e, c);
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
    categoricalDomain: a,
    duplicateDomain: o,
    isCategorical: u,
    niceTicks: s,
    range: i,
    realScaleType: r,
    scale: n
  };
}), V4 = (e, t, r, n, o, a, i, s, c) => {
  if (!(t == null || n == null)) {
    var u = gr(e, c), {
      type: l,
      ticks: d,
      tickCount: p
    } = t, h = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = l === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    v = c === "angleAxis" && a != null && a.length >= 2 ? Ze(a[0] - a[1]) * 2 * v : v;
    var f = d || o;
    if (f) {
      var g = f.map((y, x) => {
        var b = i ? i.indexOf(y) : y;
        return {
          index: x,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(b) + v,
          value: y,
          offset: v
        };
      });
      return g.filter((y) => !Nt(y.coordinate));
    }
    return u && s ? s.map((y, x) => ({
      coordinate: n(y) + v,
      value: y,
      index: x,
      offset: v
    })) : n.ticks ? n.ticks(p).map((y) => ({
      coordinate: n(y) + v,
      value: y,
      offset: v
    })) : n.domain().map((y, x) => ({
      coordinate: n(y) + v,
      value: i ? i[y] : y,
      index: x,
      offset: v
    }));
  }
}, KA = C([ce, qa, Io, Ro, Uh, Ya, Kh, Vh, ke], V4), q4 = (e, t, r, n, o, a, i) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var s = gr(e, i), {
      tickCount: c
    } = t, u = 0;
    return u = i === "angleAxis" && n?.length >= 2 ? Ze(n[0] - n[1]) * 2 * u : u, s && a ? a.map((l, d) => ({
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
}, hr = C([ce, qa, Ro, Ya, Kh, Vh, ke], q4), mr = C(Ne, Ro, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
}), H4 = C([Ne, Io, Fh, $A], Bh);
C((e, t, r) => Ah(e, r), H4, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
});
var G4 = C([ce, Nc, Ic], (e, t, r) => {
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
}), VA = (e) => e.options.defaultTooltipEventType, qA = (e) => e.options.validateTooltipEventTypes;
function HA(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function qh(e, t) {
  var r = VA(e), n = qA(e);
  return HA(t, r, n);
}
function Y4(e) {
  return Z((t) => qh(t, e));
}
var GA = (e, t) => {
  var r, n = Number(t);
  if (!(Nt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, X4 = (e) => e.tooltip.settings, Gr = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, Z4 = {
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
}, YA = Dt({
  name: "tooltip",
  initialState: Z4,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ut()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Or(e).tooltipItemPayloads.indexOf(t.payload);
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
  addTooltipEntrySettings: J4,
  removeTooltipEntrySettings: Q4,
  setTooltipSettingsState: eV,
  setActiveMouseOverItemIndex: XA,
  mouseLeaveItem: tV,
  mouseLeaveChart: ZA,
  setActiveClickItemIndex: rV,
  setMouseOverAxisIndex: JA,
  setMouseClickAxisIndex: nV,
  setSyncInteraction: bf,
  setKeyboardInteraction: wf
} = YA.actions, oV = YA.reducer;
function sb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sb(Object(r), !0).forEach(function(n) {
      aV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aV(e, t, r) {
  return (t = iV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iV(e) {
  var t = sV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cV(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function lV(e) {
  return e.index != null;
}
var QA = (e, t, r, n) => {
  if (t == null)
    return Gr;
  var o = cV(e, t, r);
  if (o == null)
    return Gr;
  if (o.active)
    return o;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (lV(o)) {
    if (a)
      return _i(_i({}, o), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return _i(_i({}, Gr), {}, {
    coordinate: o.coordinate
  });
}, Hh = (e, t) => {
  var r = e?.index;
  if (r == null)
    return null;
  var n = Number(r);
  if (!ze(n))
    return r;
  var o = 0, a = 1 / 0;
  return t.length > 0 && (a = t.length - 1), String(Math.max(o, Math.min(n, a)));
}, eC = (e, t, r, n, o, a, i, s) => {
  if (!(a == null || s == null)) {
    var c = i[0], u = c == null ? void 0 : s(c.positions, a);
    if (u != null)
      return u;
    var l = o?.[Number(a)];
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
}, tC = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var o;
  return r === "hover" ? o = e.itemInteraction.hover.dataKey : o = e.itemInteraction.click.dataKey, o == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((a) => {
    var i;
    return ((i = a.settings) === null || i === void 0 ? void 0 : i.dataKey) === o;
  });
}, Xa = (e) => e.options.tooltipPayloadSearcher, Mo = (e) => e.tooltip;
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
      uV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uV(e, t, r) {
  return (t = dV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dV(e) {
  var t = fV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pV(e, t) {
  return e ?? t;
}
var rC = (e, t, r, n, o, a, i) => {
  if (!(t == null || a == null)) {
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
      } = h, y = pV(f, s), x = Array.isArray(y) ? qO(y, u, l) : y, b = (v = g?.dataKey) !== null && v !== void 0 ? v : n, E = g?.nameKey, S;
      if (n && Array.isArray(x) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(x[0]) && /*
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
      i === "axis" ? S = ZP(x, n, o) : S = a(x, t, c, E), Array.isArray(S))
        S.forEach((O) => {
          var A = lb(lb({}, g), {}, {
            name: O.name,
            unit: O.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          p.push(Lg({
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
        p.push(Lg({
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
}, Gh = C([Ye, ce, SA, wh, Ge], DA), hV = C([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), mV = C([Ge, _o], Ch), Za = C([hV, Ye, mV], Th, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), vV = C([Za], (e) => e.filter(Gc)), gV = C([Za], _h, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), Do = C([gV, un], kh), yV = C([vV, un, Ye], wA), Yh = C([Do, Ye, Za], Ih), nC = C([Ye], Rh), bV = C([Ye], (e) => e.allowDataOverflow), oC = C([nC, bV], X1), wV = C([Za], (e) => e.filter(Gc)), xV = C([yV, wV, Ka], CA), EV = C([xV, un, Ge, oC], TA), SV = C([Za], OA), PV = C([Do, Ye, SV, Jc, Ge], jh, {
  memoizeOptions: {
    resultEqualityCheck: Yc
  }
}), OV = C([_A, Ge, _o], No), AV = C([OV, Ge], IA), CV = C([kA, Ge, _o], No), TV = C([CV, Ge], RA), _V = C([NA, Ge, _o], No), kV = C([_V, Ge], MA), NV = C([AV, kV, TV], Ns), IV = C([Ye, nC, oC, EV, PV, NV, ce, Ge], $h), aC = C([Ye, ce, Do, Yh, Ka, Ge, IV], Lh), RV = C([aC, Ye, Gh], zh), MV = C([Ye, aC, RV, Ge], Wh), iC = (e) => {
  var t = Ge(e), r = _o(e), n = !1;
  return Ya(e, t, r, n);
}, sC = C([Ye, iC], Vc), cC = C([Ye, Gh, MV, sC], Bh), DV = C([ce, Yh, Ye, Ge], UA), jV = C([ce, Yh, Ye, Ge], WA), $V = (e, t, r, n, o, a, i, s) => {
  if (t) {
    var {
      type: c
    } = t, u = gr(e, s);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, d = c === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return d = s === "angleAxis" && o != null && o?.length >= 2 ? Ze(o[0] - o[1]) * 2 * d : d, u && i ? i.map((p, h) => ({
        coordinate: n(p) + d,
        value: p,
        index: h,
        offset: d
      })) : n.domain().map((p, h) => ({
        coordinate: n(p) + d,
        value: a ? a[p] : p,
        index: h,
        offset: d
      }));
    }
  }
}, Ur = C([ce, Ye, Gh, cC, iC, DV, jV, Ge], $V), Xh = C([VA, qA, X4], (e, t, r) => HA(r.shared, e, t)), lC = (e) => e.tooltip.settings.trigger, Zh = (e) => e.tooltip.settings.defaultIndex, tl = C([Mo, Xh, lC, Zh], QA), Qr = C([tl, Do], Hh), uC = C([Ur, Qr], GA), dC = C([tl], (e) => {
  if (e)
    return e.dataKey;
}), fC = C([Mo, Xh, lC, Zh], tC), LV = C([jr, $r, ce, Ve, Ur, Zh, fC, Xa], eC), FV = C([tl, LV], (e, t) => e != null && e.coordinate ? e.coordinate : t), BV = C([tl], (e) => e.active), zV = C([fC, Qr, un, bA, uC, Xa, Xh], rC), UV = C([zV], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
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
function db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ub(Object(r), !0).forEach(function(n) {
      WV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WV(e, t, r) {
  return (t = KV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KV(e) {
  var t = VV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qV = () => Z(Ye), HV = () => {
  var e = qV(), t = Z(Ur), r = Z(cC);
  return Dn(db(db({}, e), {}, {
    scale: r
  }), t);
}, pC = () => Z(wh), Jh = (e, t) => t, hC = (e, t, r) => r, Qh = (e, t, r, n) => n, GV = C(Ur, (e) => Ac(e, (t) => t.coordinate)), em = C([Mo, Jh, hC, Qh], QA), mC = C([em, Do], Hh), YV = (e, t, r) => {
  if (t != null) {
    var n = Mo(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, vC = C([Mo, Jh, hC, Qh], tC), Is = C([jr, $r, ce, Ve, Ur, Qh, vC, Xa], eC), XV = C([em, Is], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), gC = C(Ur, mC, GA), ZV = C([vC, mC, un, bA, gC, Xa, Jh], rC), JV = C([em], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), QV = (e, t, r, n, o, a, i, s) => {
  if (!(!e || !t || !n || !o || !a)) {
    var c = JF(e.chartX, e.chartY, t, r, s);
    if (c) {
      var u = eB(c, t), l = BF(u, i, a, n, o), d = QF(t, a, l, c);
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
function fb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fb(Object(r), !0).forEach(function(n) {
      e5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e5(e, t, r) {
  return (t = t5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t5(e) {
  var t = r5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n5(e) {
  var {
    coordinate: t,
    payload: r,
    index: n,
    offset: o,
    tooltipAxisBandSize: a,
    layout: i,
    cursor: s,
    tooltipEventType: c,
    chartName: u
  } = e, l = t, d = r, p = n;
  if (!s || !l || u !== "ScatterChart" && c !== "axis")
    return null;
  var h, v;
  if (u === "ScatterChart")
    h = l, v = gz;
  else if (u === "BarChart")
    h = yz(i, l, o, a), v = d1;
  else if (i === "radial") {
    var {
      cx: f,
      cy: g,
      radius: y,
      startAngle: x,
      endAngle: b
    } = f1(l);
    h = {
      cx: f,
      cy: g,
      startAngle: x,
      endAngle: b,
      innerRadius: y,
      outerRadius: y
    }, v = h1;
  } else
    h = {
      points: tU(i, l, o)
    }, v = ro;
  var E = typeof s == "object" && "className" in s ? s.className : void 0, S = ki(ki(ki(ki({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), h), Nn(s)), {}, {
    payload: d,
    payloadIndex: p,
    className: le("recharts-tooltip-cursor", E)
  });
  return /* @__PURE__ */ Ut(s) ? /* @__PURE__ */ wa(s, S) : /* @__PURE__ */ ta(v, S);
}
function o5(e) {
  var t = HV(), r = r1(), n = La(), o = pC();
  return /* @__PURE__ */ m.createElement(n5, xf({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: o
  }));
}
var yC = /* @__PURE__ */ Rt(null), a5 = () => er(yC), Ju = { exports: {} }, pb;
function i5() {
  return pb || (pb = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function o(c, u, l) {
      this.fn = c, this.context = u, this.once = l || !1;
    }
    function a(c, u, l, d, p) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var h = new o(l, d || c, p), v = r ? r + u : u;
      return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], h] : c._events[v].push(h) : (c._events[v] = h, c._eventsCount++), c;
    }
    function i(c, u) {
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
      var g = this._events[f], y = arguments.length, x, b;
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
        for (b = 1, x = new Array(y - 1); b < y; b++)
          x[b - 1] = arguments[b];
        g.fn.apply(g.context, x);
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
              if (!x) for (S = 1, x = new Array(y - 1); S < y; S++)
                x[S - 1] = arguments[S];
              g[b].fn.apply(g[b].context, x);
          }
      }
      return !0;
    }, s.prototype.on = function(u, l, d) {
      return a(this, u, l, d, !1);
    }, s.prototype.once = function(u, l, d) {
      return a(this, u, l, d, !0);
    }, s.prototype.removeListener = function(u, l, d, p) {
      var h = r ? r + u : u;
      if (!this._events[h]) return this;
      if (!l)
        return i(this, h), this;
      var v = this._events[h];
      if (v.fn)
        v.fn === l && (!p || v.once) && (!d || v.context === d) && i(this, h);
      else {
        for (var f = 0, g = [], y = v.length; f < y; f++)
          (v[f].fn !== l || p && !v[f].once || d && v[f].context !== d) && g.push(v[f]);
        g.length ? this._events[h] = g.length === 1 ? g[0] : g : i(this, h);
      }
      return this;
    }, s.prototype.removeAllListeners = function(u) {
      var l;
      return u ? (l = r ? r + u : u, this._events[l] && i(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  })(Ju)), Ju.exports;
}
var s5 = i5();
const c5 = /* @__PURE__ */ an(s5);
var ya = new c5(), Ef = "recharts.syncEvent.tooltip", hb = "recharts.syncEvent.brush";
function rl(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!Nt(r))
      return e?.[r];
  }
}
var l5 = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, bC = Dt({
  name: "options",
  initialState: l5,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), u5 = bC.reducer, {
  createEventEmitter: d5
} = bC.actions;
function f5(e) {
  return e.tooltip.syncInteraction;
}
var p5 = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, wC = Dt({
  name: "chartData",
  initialState: p5,
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
  setChartData: mb,
  setDataStartEndIndexes: h5,
  setComputedData: hX
} = wC.actions, m5 = wC.reducer, v5 = ["x", "y"];
function vb(e, t) {
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
    t % 2 ? vb(Object(r), !0).forEach(function(n) {
      g5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g5(e, t, r) {
  return (t = y5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y5(e) {
  var t = b5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function b5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w5(e, t) {
  if (e == null) return {};
  var r, n, o = x5(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function x5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var xC = () => {
};
function E5() {
  var e = Z(xh), t = Z(Eh), r = _e(), n = Z(pA), o = Z(Ur), a = La(), i = jc(), s = Z((c) => c.rootProps.className);
  Be(() => {
    if (e == null)
      return xC;
    var c = (u, l, d) => {
      if (t !== d && e === u) {
        if (n === "index") {
          var p;
          if (i && l !== null && l !== void 0 && (p = l.payload) !== null && p !== void 0 && p.coordinate && l.payload.sourceViewBox) {
            var h = l.payload.coordinate, {
              x: v,
              y: f
            } = h, g = w5(h, v5), {
              x: y,
              y: x,
              width: b,
              height: E
            } = l.payload.sourceViewBox, S = Zn(Zn({}, g), {}, {
              x: i.x + (b ? (v - y) / b : 0) * i.width,
              y: i.y + (E ? (f - x) / E : 0) * i.height
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
          if (P == null || l.payload.active === !1 || _ == null || i == null) {
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
          } = _, M = Math.min(I, i.x + i.width), D = Math.min(T, i.y + i.height), N = {
            x: a === "horizontal" ? P.coordinate : M,
            y: a === "horizontal" ? D : P.coordinate
          }, U = bf({
            active: l.payload.active,
            coordinate: N,
            dataKey: l.payload.dataKey,
            index: String(P.index),
            label: l.payload.label,
            sourceViewBox: l.payload.sourceViewBox
          });
          r(U);
        }
      }
    };
    return ya.on(Ef, c), () => {
      ya.off(Ef, c);
    };
  }, [s, r, t, e, n, o, a, i]);
}
function S5() {
  var e = Z(xh), t = Z(Eh), r = _e();
  Be(() => {
    if (e == null)
      return xC;
    var n = (o, a, i) => {
      t !== i && e === o && r(h5(a));
    };
    return ya.on(hb, n), () => {
      ya.off(hb, n);
    };
  }, [r, t, e]);
}
function P5() {
  var e = _e();
  Be(() => {
    e(d5());
  }, [e]), E5(), S5();
}
function O5(e, t, r, n, o, a) {
  var i = Z((h) => YV(h, e, t)), s = Z(Eh), c = Z(xh), u = Z(pA), l = Z(f5), d = l?.active, p = jc();
  Be(() => {
    if (!d && c != null && s != null) {
      var h = bf({
        active: a,
        coordinate: r,
        dataKey: i,
        index: o,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: p
      });
      ya.emit(Ef, c, h, s);
    }
  }, [d, r, i, o, n, s, c, u, a, p]);
}
function gb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gb(Object(r), !0).forEach(function(n) {
      A5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A5(e, t, r) {
  return (t = C5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C5(e) {
  var t = T5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function T5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _5(e) {
  return e.dataKey;
}
function k5(e, t) {
  return /* @__PURE__ */ m.isValidElement(e) ? /* @__PURE__ */ m.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ m.createElement(e, t) : /* @__PURE__ */ m.createElement(YB, t);
}
var bb = [], N5 = {
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
  var t = qe(e, N5), {
    active: r,
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: a,
    content: i,
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
    defaultIndex: x,
    portal: b,
    axisId: E
  } = t, S = _e(), P = typeof x == "number" ? String(x) : x;
  Be(() => {
    S(eV({
      shared: g,
      trigger: y,
      axisId: E,
      active: r,
      defaultIndex: P
    }));
  }, [S, g, y, E, r, P]);
  var O = jc(), A = i1(), _ = Y4(g), {
    activeIndex: I,
    isActive: T
  } = Z((ue) => JV(ue, _, y, P)), M = Z((ue) => ZV(ue, _, y, P)), D = Z((ue) => gC(ue, _, y, P)), N = Z((ue) => XV(ue, _, y, P)), U = M, L = a5(), B = r ?? T, [R, F] = hO([U, B]), ee = _ === "axis" ? D : void 0;
  O5(_, y, N, ee, I, B);
  var ae = b ?? L;
  if (ae == null)
    return null;
  var ne = U ?? bb;
  B || (ne = bb), s && ne.length && (ne = cO(U.filter((ue) => ue.value != null && (ue.hide !== !0 || t.includeHidden)), l, _5));
  var te = ne.length > 0, oe = /* @__PURE__ */ m.createElement(rz, {
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: a,
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
  }, k5(i, yb(yb({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: ne,
    label: ee,
    active: B,
    coordinate: N,
    accessibilityLayer: A
  })));
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ Fw(oe, ae), B && /* @__PURE__ */ m.createElement(o5, {
    cursor: f,
    tooltipEventType: _,
    coordinate: N,
    payload: U,
    index: I
  }));
}
var Ja = (e) => null;
Ja.displayName = "Cell";
function I5(e, t, r) {
  return (t = R5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R5(e) {
  var t = M5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function M5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class D5 {
  constructor(t) {
    I5(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function wb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function j5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wb(Object(r), !0).forEach(function(n) {
      $5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $5(e, t, r) {
  return (t = L5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L5(e) {
  var t = F5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B5 = {
  cacheSize: 2e3,
  enableCache: !0
}, EC = j5({}, B5), xb = new D5(EC.cacheSize), z5 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Eb = "recharts_measurement_span";
function U5(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", o = t.fontWeight || "", a = t.fontStyle || "", i = t.letterSpacing || "", s = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(o, "|").concat(a, "|").concat(i, "|").concat(s);
}
var Sb = (e, t) => {
  try {
    var r = document.getElementById(Eb);
    r || (r = document.createElement("span"), r.setAttribute("id", Eb), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, z5, t), r.textContent = "".concat(e);
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
}, ea = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Lr.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!EC.enableCache)
    return Sb(t, r);
  var n = U5(t, r), o = xb.get(n);
  if (o)
    return o;
  var a = Sb(t, r);
  return xb.set(n, a), a;
}, Pb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Ob = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, W5 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, K5 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, SC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, V5 = Object.keys(SC), Jn = "NaN";
function q5(e, t) {
  return e * SC[t];
}
class vt {
  static parse(t) {
    var r, [, n, o] = (r = K5.exec(t)) !== null && r !== void 0 ? r : [];
    return new vt(parseFloat(n), o ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Nt(t) && (this.unit = ""), r !== "" && !W5.test(r) && (this.num = NaN, this.unit = ""), V5.includes(r) && (this.num = q5(t, r), this.unit = "px");
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
function PC(e) {
  if (e.includes(Jn))
    return Jn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, o, a] = (r = Pb.exec(t)) !== null && r !== void 0 ? r : [], i = vt.parse(n ?? ""), s = vt.parse(a ?? ""), c = o === "*" ? i.multiply(s) : i.divide(s);
    if (c.isNaN())
      return Jn;
    t = t.replace(Pb, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, l, d, p] = (u = Ob.exec(t)) !== null && u !== void 0 ? u : [], h = vt.parse(l ?? ""), v = vt.parse(p ?? ""), f = d === "+" ? h.add(v) : h.subtract(v);
    if (f.isNaN())
      return Jn;
    t = t.replace(Ob, f.toString());
  }
  return t;
}
var Ab = /\(([^()]*)\)/;
function H5(e) {
  for (var t = e, r; (r = Ab.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Ab, PC(n));
  }
  return t;
}
function G5(e) {
  var t = e.replace(/\s+/g, "");
  return t = H5(t), t = PC(t), t;
}
function Y5(e) {
  try {
    return G5(e);
  } catch {
    return Jn;
  }
}
function Qu(e) {
  var t = Y5(e.slice(5, -1));
  return t === Jn ? "" : t;
}
var X5 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], Z5 = ["dx", "dy", "angle", "className", "breakAll"];
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sf.apply(null, arguments);
}
function Cb(e, t) {
  if (e == null) return {};
  var r, n, o = J5(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function J5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var OC = /[ \f\n\r\t\v\u2028\u2029]+/, AC = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var o = [];
    Ae(t) || (r ? o = t.toString().split("") : o = t.toString().split(OC));
    var a = o.map((s) => ({
      word: s,
      width: ea(s, n).width
    })), i = r ? 0 : ea(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: i
    };
  } catch {
    return null;
  }
}, Q5 = (e, t, r, n, o) => {
  var {
    maxLines: a,
    children: i,
    style: s,
    breakAll: c
  } = e, u = X(a), l = i, d = function() {
    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return T.reduce((M, D) => {
      var {
        word: N,
        width: U
      } = D, L = M[M.length - 1];
      if (L && (n == null || o || L.width + U + r < Number(n)))
        L.words.push(N), L.width += U + r;
      else {
        var B = {
          words: [N],
          width: U
        };
        M.push(B);
      }
      return M;
    }, []);
  }, p = d(t), h = (I) => I.reduce((T, M) => T.width > M.width ? T : M);
  if (!u || o)
    return p;
  var v = p.length > a || h(p).width > Number(n);
  if (!v)
    return p;
  for (var f = "…", g = (I) => {
    var T = l.slice(0, I), M = AC({
      breakAll: c,
      style: s,
      children: T + f
    }).wordsWithComputedWidth, D = d(M), N = D.length > a || h(D).width > Number(n);
    return [N, D];
  }, y = 0, x = l.length - 1, b = 0, E; y <= x && b <= l.length - 1; ) {
    var S = Math.floor((y + x) / 2), P = S - 1, [O, A] = g(P), [_] = g(S);
    if (!O && !_ && (y = S + 1), O && _ && (x = S - 1), !O && _) {
      E = A;
      break;
    }
    b++;
  }
  return E || p;
}, Tb = (e) => {
  var t = Ae(e) ? [] : e.toString().split(OC);
  return [{
    words: t
  }];
}, e3 = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: o,
    breakAll: a,
    maxLines: i
  } = e;
  if ((t || r) && !Lr.isSsr) {
    var s, c, u = AC({
      breakAll: a,
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
      return Tb(n);
    return Q5({
      breakAll: a,
      children: n,
      maxLines: i,
      style: o
    }, s, c, t, r);
  }
  return Tb(n);
}, _b = "#808080", ol = /* @__PURE__ */ De((e, t) => {
  var {
    x: r = 0,
    y: n = 0,
    lineHeight: o = "1em",
    // Magic number from d3
    capHeight: a = "0.71em",
    scaleToFit: i = !1,
    textAnchor: s = "start",
    // Maintain compat with existing charts / default SVG behavior
    verticalAnchor: c = "end",
    fill: u = _b
  } = e, l = Cb(e, X5), d = Dr(() => e3({
    breakAll: l.breakAll,
    children: l.children,
    maxLines: l.maxLines,
    scaleToFit: i,
    style: l.style,
    width: l.width
  }), [l.breakAll, l.children, l.maxLines, i, l.style, l.width]), {
    dx: p,
    dy: h,
    angle: v,
    className: f,
    breakAll: g
  } = l, y = Cb(l, Z5);
  if (!fr(r) || !fr(n) || d.length === 0)
    return null;
  var x = r + (X(p) ? p : 0), b = n + (X(h) ? h : 0), E;
  switch (c) {
    case "start":
      E = Qu("calc(".concat(a, ")"));
      break;
    case "middle":
      E = Qu("calc(".concat((d.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      E = Qu("calc(".concat(d.length - 1, " * -").concat(o, ")"));
      break;
  }
  var S = [];
  if (i) {
    var P = d[0].width, {
      width: O
    } = l;
    S.push("scale(".concat(X(O) ? O / P : 1, ")"));
  }
  return v && S.push("rotate(".concat(v, ", ").concat(x, ", ").concat(b, ")")), S.length && (y.transform = S.join(" ")), /* @__PURE__ */ m.createElement("text", Sf({}, mt(y), {
    ref: t,
    x,
    y: b,
    className: le("recharts-text", f),
    textAnchor: s,
    fill: u.includes("url") ? _b : u
  }), d.map((A, _) => {
    var I = A.words.join(g ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement("tspan", {
        x,
        dy: _ === 0 ? E : o,
        key: "".concat(I, "-").concat(_)
      }, I)
    );
  }));
});
ol.displayName = "Text";
var t3 = ["labelRef"];
function r3(e, t) {
  if (e == null) return {};
  var r, n, o = n3(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function n3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function kb(e, t) {
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
    t % 2 ? kb(Object(r), !0).forEach(function(n) {
      o3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o3(e, t, r) {
  return (t = a3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a3(e) {
  var t = i3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function i3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xr.apply(null, arguments);
}
var CC = /* @__PURE__ */ Rt(null), s3 = (e) => {
  var {
    x: t,
    y: r,
    width: n,
    height: o,
    children: a
  } = e, i = Dr(() => ({
    x: t,
    y: r,
    width: n,
    height: o
  }), [t, r, n, o]);
  return /* @__PURE__ */ m.createElement(CC.Provider, {
    value: i
  }, a);
}, TC = () => {
  var e = er(CC), t = jc();
  return e || t;
}, c3 = /* @__PURE__ */ Rt(null), l3 = () => {
  var e = er(c3), t = Z(yA);
  return e || t;
}, u3 = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Ae(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, tm = (e) => e != null && typeof e == "function", d3 = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, f3 = (e, t, r, n, o) => {
  var {
    offset: a,
    className: i
  } = e, {
    cx: s,
    cy: c,
    innerRadius: u,
    outerRadius: l,
    startAngle: d,
    endAngle: p,
    clockWise: h
  } = o, v = (u + l) / 2, f = d3(d, p), g = f >= 0 ? 1 : -1, y, x;
  switch (t) {
    case "insideStart":
      y = d + g * a, x = h;
      break;
    case "insideEnd":
      y = p - g * a, x = !h;
      break;
    case "end":
      y = p + g * a, x = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  x = f <= 0 ? x : !x;
  var b = Le(s, c, v, y), E = Le(s, c, v, y + (x ? 1 : -1) * 359), S = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(x ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), P = Ae(e.id) ? sa("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ m.createElement("text", xr({}, n, {
    dominantBaseline: "central",
    className: le("recharts-radial-bar-label", i)
  }), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("path", {
    id: P,
    d: S
  })), /* @__PURE__ */ m.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, p3 = (e, t, r) => {
  var {
    cx: n,
    cy: o,
    innerRadius: a,
    outerRadius: i,
    startAngle: s,
    endAngle: c
  } = e, u = (s + c) / 2;
  if (r === "outside") {
    var {
      x: l,
      y: d
    } = Le(n, o, i + t, u);
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
  var p = (a + i) / 2, {
    x: h,
    y: v
  } = Le(n, o, p, u);
  return {
    x: h,
    y: v,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, _C = (e) => "cx" in e && X(e.cx), h3 = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: o
  } = e, a;
  r != null && !_C(r) && (a = r);
  var {
    x: i,
    y: s,
    width: c,
    height: u
  } = t, l = u >= 0 ? 1 : -1, d = l * n, p = l > 0 ? "end" : "start", h = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, f = v * n, g = v > 0 ? "end" : "start", y = v > 0 ? "start" : "end";
  if (o === "top") {
    var x = {
      x: i + c / 2,
      y: s - l * n,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Me(Me({}, x), a ? {
      height: Math.max(s - a.y, 0),
      width: c
    } : {});
  }
  if (o === "bottom") {
    var b = {
      x: i + c / 2,
      y: s + u + d,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Me(Me({}, b), a ? {
      height: Math.max(a.y + a.height - (s + u), 0),
      width: c
    } : {});
  }
  if (o === "left") {
    var E = {
      x: i - f,
      y: s + u / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Me(Me({}, E), a ? {
      width: Math.max(E.x - a.x, 0),
      height: u
    } : {});
  }
  if (o === "right") {
    var S = {
      x: i + c + f,
      y: s + u / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return Me(Me({}, S), a ? {
      width: Math.max(a.x + a.width - S.x, 0),
      height: u
    } : {});
  }
  var P = a ? {
    width: c,
    height: u
  } : {};
  return o === "insideLeft" ? Me({
    x: i + f,
    y: s + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, P) : o === "insideRight" ? Me({
    x: i + c - f,
    y: s + u / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, P) : o === "insideTop" ? Me({
    x: i + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: h
  }, P) : o === "insideBottom" ? Me({
    x: i + c / 2,
    y: s + u - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, P) : o === "insideTopLeft" ? Me({
    x: i + f,
    y: s + d,
    textAnchor: y,
    verticalAnchor: h
  }, P) : o === "insideTopRight" ? Me({
    x: i + c - f,
    y: s + d,
    textAnchor: g,
    verticalAnchor: h
  }, P) : o === "insideBottomLeft" ? Me({
    x: i + f,
    y: s + u - d,
    textAnchor: y,
    verticalAnchor: p
  }, P) : o === "insideBottomRight" ? Me({
    x: i + c - f,
    y: s + u - d,
    textAnchor: g,
    verticalAnchor: p
  }, P) : o && typeof o == "object" && (X(o.x) || kr(o.x)) && (X(o.y) || kr(o.y)) ? Me({
    x: i + ct(o.x, c),
    y: s + ct(o.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, P) : Me({
    x: i + c / 2,
    y: s + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, P);
}, m3 = {
  offset: 5
};
function Hr(e) {
  var t = qe(e, m3), {
    viewBox: r,
    position: n,
    value: o,
    children: a,
    content: i,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, l = l3(), d = TC(), p = n === "center" ? d : l ?? d, h = r || p;
  if (!h || Ae(o) && Ae(a) && !/* @__PURE__ */ Ut(i) && typeof i != "function")
    return null;
  var v = Me(Me({}, t), {}, {
    viewBox: h
  });
  if (/* @__PURE__ */ Ut(i)) {
    var {
      labelRef: f
    } = v, g = r3(v, t3);
    return /* @__PURE__ */ wa(i, g);
  }
  var y;
  if (typeof i == "function") {
    if (y = /* @__PURE__ */ ta(i, v), /* @__PURE__ */ Ut(y))
      return y;
  } else
    y = u3(t);
  var x = _C(h), b = mt(t);
  if (x && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return f3(t, n, y, b, h);
  var E = x ? p3(h, t.offset, t.position) : h3(t, h);
  return /* @__PURE__ */ m.createElement(ol, xr({
    ref: u,
    className: le("recharts-label", s)
  }, b, E, {
    breakAll: c
  }), y);
}
Hr.displayName = "Label";
var v3 = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ m.createElement(Hr, xr({
    key: "label-implicit"
  }, n)) : fr(e) ? /* @__PURE__ */ m.createElement(Hr, xr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Ut(e) ? e.type === Hr ? /* @__PURE__ */ wa(e, Me({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ m.createElement(Hr, xr({
    key: "label-implicit",
    content: e
  }, n)) : tm(e) ? /* @__PURE__ */ m.createElement(Hr, xr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ m.createElement(Hr, xr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function g3(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = TC();
  return v3(t, n, r) || null;
}
var ed = {}, td = {}, Nb;
function y3() {
  return Nb || (Nb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(td)), td;
}
var rd = {}, Ib;
function b3() {
  return Ib || (Ib = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(rd)), rd;
}
var Rb;
function w3() {
  return Rb || (Rb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ y3(), r = /* @__PURE__ */ b3(), n = /* @__PURE__ */ jp();
    function o(a) {
      if (n.isArrayLike(a))
        return t.last(r.toArray(a));
    }
    e.last = o;
  })(ed)), ed;
}
var nd, Mb;
function x3() {
  return Mb || (Mb = 1, nd = w3().last), nd;
}
var E3 = /* @__PURE__ */ x3();
const S3 = /* @__PURE__ */ an(E3);
var P3 = ["valueAccessor"], O3 = ["dataKey", "clockWise", "id", "textBreakAll"];
function Rs() {
  return Rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rs.apply(null, arguments);
}
function Db(e, t) {
  if (e == null) return {};
  var r, n, o = A3(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function A3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var C3 = (e) => Array.isArray(e.value) ? S3(e.value) : e.value, kC = /* @__PURE__ */ Rt(void 0), rm = kC.Provider, NC = /* @__PURE__ */ Rt(void 0), T3 = NC.Provider;
function _3() {
  return er(kC);
}
function k3() {
  return er(NC);
}
function Ki(e) {
  var {
    valueAccessor: t = C3
  } = e, r = Db(e, P3), {
    dataKey: n,
    clockWise: o,
    id: a,
    textBreakAll: i
  } = r, s = Db(r, O3), c = _3(), u = k3(), l = c || u;
  return !l || !l.length ? null : /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-label-list"
  }, l.map((d, p) => {
    var h, v = Ae(n) ? t(d, p) : xe(d && d.payload, n), f = Ae(a) ? {} : {
      id: "".concat(a, "-").concat(p)
    };
    return /* @__PURE__ */ m.createElement(Hr, Rs({
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
      textBreakAll: i,
      viewBox: d.viewBox,
      index: p
    }));
  }));
}
Ki.displayName = "LabelList";
function al(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ m.createElement(Ki, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ m.isValidElement(t) || tm(t) ? /* @__PURE__ */ m.createElement(Ki, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ m.createElement(Ki, Rs({
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
  } = e, a = le("recharts-dot", o);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ m.createElement("circle", Pf({}, ht(e), Rp(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, IC = (e) => e.graphicalItems.polarItems, N3 = C([ke, Va], Ch), il = C([IC, Ne, N3], Th), I3 = C([il], _h), sl = C([I3, gh], kh), R3 = C([sl, Ne, il], Ih);
C([sl, Ne, il], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((o) => {
  var a, i = xe(n, (a = t.dataKey) !== null && a !== void 0 ? a : o.dataKey);
  return {
    value: i,
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
var jb = () => {
}, M3 = C([sl, Ne, il, Jc, ke], jh), D3 = C([Ne, Mh, Dh, jb, M3, jb, ce, ke], $h), RC = C([Ne, ce, sl, R3, Ka, ke, D3], Lh), j3 = C([RC, Ne, Io], zh);
C([Ne, RC, j3, ke], Wh);
var $3 = {
  radiusAxis: {},
  angleAxis: {}
}, MC = Dt({
  name: "polarAxis",
  initialState: $3,
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
  addRadiusAxis: mX,
  removeRadiusAxis: vX,
  addAngleAxis: gX,
  removeAngleAxis: yX
} = MC.actions, L3 = MC.reducer;
function $b(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $b(Object(r), !0).forEach(function(n) {
      F3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $b(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F3(e, t, r) {
  return (t = B3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B3(e) {
  var t = z3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var U3 = (e, t) => t, om = C([IC, U3], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), W3 = [], am = (e, t, r) => r?.length === 0 ? W3 : r, DC = C([gh, om, am], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var o;
    if (t?.data != null && t.data.length > 0 ? o = t.data : o = n, (!o || !o.length) && r != null && (o = r.map((a) => Lb(Lb({}, t.presentationProps), a.props))), o != null)
      return o;
  }
}), K3 = C([DC, om, am], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, o) => {
      var a, i = xe(n, t.nameKey, t.name), s;
      return r != null && (a = r[o]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? s = r[o].props.fill : typeof n == "object" && n != null && "fill" in n ? s = n.fill : s = t.fill, {
        value: sn(i, t.dataKey),
        color: s,
        payload: n,
        type: t.legendType
      };
    });
}), V3 = C([DC, om, am, Ve], (e, t, r, n) => {
  if (!(t == null || e == null))
    return qq({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Ni = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fb;
function q3() {
  if (Fb) return ye;
  Fb = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
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
                case i:
                case s:
                case d:
                case l:
                  return f;
                case a:
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
  return ye.ContextConsumer = a, ye.ContextProvider = i, ye.Element = e, ye.ForwardRef = s, ye.Fragment = r, ye.Lazy = d, ye.Memo = l, ye.Portal = t, ye.Profiler = o, ye.StrictMode = n, ye.Suspense = c, ye.SuspenseList = u, ye.isContextConsumer = function(f) {
    return v(f) === a;
  }, ye.isContextProvider = function(f) {
    return v(f) === i;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === l || f.$$typeof === i || f.$$typeof === a || f.$$typeof === s || f.$$typeof === h || f.getModuleId !== void 0);
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
var Bb;
function H3() {
  return Bb || (Bb = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var g = f.$$typeof;
        switch (g) {
          case t:
            switch (f = f.type, f) {
              case n:
              case a:
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
                  case i:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    be.ContextConsumer = i, be.ContextProvider = s, be.Element = t, be.ForwardRef = c, be.Fragment = n, be.Lazy = p, be.Memo = d, be.Portal = r, be.Profiler = a, be.StrictMode = o, be.Suspense = u, be.SuspenseList = l, be.isContextConsumer = function(f) {
      return e(f) === i;
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
      return e(f) === a;
    }, be.isStrictMode = function(f) {
      return e(f) === o;
    }, be.isSuspense = function(f) {
      return e(f) === u;
    }, be.isSuspenseList = function(f) {
      return e(f) === l;
    }, be.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === a || f === o || f === u || f === l || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
    }, be.typeOf = e;
  })()), be;
}
var zb;
function G3() {
  return zb || (zb = 1, process.env.NODE_ENV === "production" ? Ni.exports = /* @__PURE__ */ q3() : Ni.exports = /* @__PURE__ */ H3()), Ni.exports;
}
var Y3 = /* @__PURE__ */ G3(), Ub = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Wb = null, od = null, jC = (e) => {
  if (e === Wb && Array.isArray(od))
    return od;
  var t = [];
  return e_.forEach(e, (r) => {
    Ae(r) || (Y3.isFragment(r) ? t = t.concat(jC(r.props.children)) : t.push(r));
  }), od = t, Wb = e, t;
};
function im(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((o) => Ub(o)) : n = [Ub(t)], jC(e).forEach((o) => {
    var a = In(o, "type.displayName") || In(o, "type.name");
    n.indexOf(a) !== -1 && r.push(o);
  }), r;
}
var cl = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, ad = {}, Kb;
function X3() {
  return Kb || (Kb = 1, (function(e) {
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
  })(ad)), ad;
}
var id, Vb;
function Z3() {
  return Vb || (Vb = 1, id = X3().isPlainObject), id;
}
var J3 = /* @__PURE__ */ Z3();
const Q3 = /* @__PURE__ */ an(J3);
function qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qb(Object(r), !0).forEach(function(n) {
      eq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eq(e, t, r) {
  return (t = tq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tq(e) {
  var t = rq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ms.apply(null, arguments);
}
var Gb = (e, t, r, n, o) => {
  var a = r - n, i;
  return i = "M ".concat(e, ",").concat(t), i += "L ".concat(e + r, ",").concat(t), i += "L ".concat(e + r - a / 2, ",").concat(t + o), i += "L ".concat(e + r - a / 2 - n, ",").concat(t + o), i += "L ".concat(e, ",").concat(t, " Z"), i;
}, nq = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, oq = (e) => {
  var t = qe(e, nq), {
    x: r,
    y: n,
    upperWidth: o,
    lowerWidth: a,
    height: i,
    className: s
  } = t, {
    animationEasing: c,
    animationDuration: u,
    animationBegin: l,
    isUpdateAnimationActive: d
  } = t, p = me(null), [h, v] = Ke(-1), f = me(o), g = me(a), y = me(i), x = me(r), b = me(n), E = Oo(e, "trapezoid-");
  if (Be(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var N = p.current.getTotalLength();
        N && v(N);
      } catch {
      }
  }, []), r !== +r || n !== +n || o !== +o || a !== +a || i !== +i || o === 0 && a === 0 || i === 0)
    return null;
  var S = le("recharts-trapezoid", s);
  if (!d)
    return /* @__PURE__ */ m.createElement("g", null, /* @__PURE__ */ m.createElement("path", Ms({}, mt(t), {
      className: S,
      d: Gb(r, n, o, a, i)
    })));
  var P = f.current, O = g.current, A = y.current, _ = x.current, I = b.current, T = "0px ".concat(h === -1 ? 1 : h, "px"), M = "".concat(h, "px 0px"), D = s1(["strokeDasharray"], u, c);
  return /* @__PURE__ */ m.createElement(Po, {
    animationId: E,
    key: E,
    canBegin: h > 0,
    duration: u,
    easing: c,
    isActive: d,
    begin: l
  }, (N) => {
    var U = we(P, o, N), L = we(O, a, N), B = we(A, i, N), R = we(_, r, N), F = we(I, n, N);
    p.current && (f.current = U, g.current = L, y.current = B, x.current = R, b.current = F);
    var ee = N > 0 ? {
      transition: D,
      strokeDasharray: M
    } : {
      strokeDasharray: T
    };
    return /* @__PURE__ */ m.createElement("path", Ms({}, mt(t), {
      className: S,
      d: Gb(R, F, U, L, B),
      ref: p,
      style: Hb(Hb({}, ee), t.style)
    }));
  });
}, aq = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function iq(e, t) {
  if (e == null) return {};
  var r, n, o = sq(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function sq(e, t) {
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
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yb(Object(r), !0).forEach(function(n) {
      cq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cq(e, t, r) {
  return (t = lq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lq(e) {
  var t = uq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dq(e, t) {
  return Ds(Ds({}, t), e);
}
function fq(e, t) {
  return e === "symbols";
}
function Xb(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ m.createElement(d1, r);
    case "trapezoid":
      return /* @__PURE__ */ m.createElement(oq, r);
    case "sector":
      return /* @__PURE__ */ m.createElement(h1, r);
    case "symbols":
      if (fq(t))
        return /* @__PURE__ */ m.createElement(Ip, r);
      break;
    default:
      return null;
  }
}
function pq(e) {
  return /* @__PURE__ */ Ut(e) ? e.props : e;
}
function $C(e) {
  var {
    option: t,
    shapeType: r,
    propTransformer: n = dq,
    activeClassName: o = "recharts-active-shape",
    isActive: a
  } = e, i = iq(e, aq), s;
  if (/* @__PURE__ */ Ut(t))
    s = /* @__PURE__ */ wa(t, Ds(Ds({}, i), pq(t)));
  else if (typeof t == "function")
    s = t(i);
  else if (Q3(t) && typeof t != "boolean") {
    var c = n(t, i);
    s = /* @__PURE__ */ m.createElement(Xb, {
      shapeType: r,
      elementProps: c
    });
  } else {
    var u = i;
    s = /* @__PURE__ */ m.createElement(Xb, {
      shapeType: r,
      elementProps: u
    });
  }
  return a ? /* @__PURE__ */ m.createElement(Ie, {
    className: o
  }, s) : s;
}
var sm = (e, t) => {
  var r = _e();
  return (n, o) => (a) => {
    e?.(n, o, a), r(XA({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
}, cm = (e) => {
  var t = _e();
  return (r, n) => (o) => {
    e?.(r, n, o), t(tV());
  };
}, lm = (e, t) => {
  var r = _e();
  return (n, o) => (a) => {
    e?.(n, o, a), r(rV({
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
  } = e, n = _e(), o = ot();
  return ur(() => {
    if (!o) {
      var a = t(r);
      return n(J4(a)), () => {
        n(Q4(a));
      };
    }
  }, [t, r, n, o]), null;
}
var LC = () => {
};
function um(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = ot();
  return ur(() => n ? LC : (r(o1(t)), () => {
    r(a1(t));
  }), [r, n, t]), null;
}
function hq(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = Z(ce);
  return ur(() => n !== "centric" && n !== "radial" ? LC : (r(o1(t)), () => {
    r(a1(t));
  }), [r, n, t]), null;
}
var sd, mq = () => {
  var [e] = m.useState(() => sa("uid-"));
  return e;
}, vq = (sd = m.useId) !== null && sd !== void 0 ? sd : mq;
function gq(e, t) {
  var r = vq();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var yq = /* @__PURE__ */ Rt(void 0), ul = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, o = gq("recharts-".concat(r), t);
  return /* @__PURE__ */ m.createElement(yq.Provider, {
    value: o
  }, n(o));
}, bq = {
  cartesianItems: [],
  polarItems: []
}, FC = Dt({
  name: "graphicalItems",
  initialState: bq,
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
        } = t.payload, o = Or(e).cartesianItems.indexOf(r);
        o > -1 && (e.cartesianItems[o] = n);
      },
      prepare: ut()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Or(e).cartesianItems.indexOf(t.payload);
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
        var r = Or(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  addCartesianGraphicalItem: wq,
  replaceCartesianGraphicalItem: xq,
  removeCartesianGraphicalItem: Eq,
  addPolarGraphicalItem: Sq,
  removePolarGraphicalItem: Pq
} = FC.actions, Oq = FC.reducer;
function dm(e) {
  var t = _e(), r = me(null);
  return ur(() => {
    r.current === null ? t(wq(e)) : r.current !== e && t(xq({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), ur(() => () => {
    r.current && (t(Eq(r.current)), r.current = null);
  }, [t]), null;
}
function Aq(e) {
  var t = _e();
  return ur(() => (t(Sq(e)), () => {
    t(Pq(e));
  }), [t, e]), null;
}
var Cq = ["onMouseEnter", "onClick", "onMouseLeave"], Tq = ["id"], _q = ["id"];
function fm(e, t) {
  if (e == null) return {};
  var r, n, o = kq(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function kq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Zb(e, t) {
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
    t % 2 ? Zb(Object(r), !0).forEach(function(n) {
      Nq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nq(e, t, r) {
  return (t = Iq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Iq(e) {
  var t = Rq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Rq(e, t) {
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
function Mq(e) {
  var t = Dr(() => im(e.children, Ja), [e.children]), r = Z((n) => K3(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ m.createElement(hq, {
    legendPayload: r
  });
}
function Dq(e) {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: o,
    strokeWidth: a,
    fill: i,
    name: s,
    hide: c,
    tooltipType: u
  } = e;
  return {
    dataDefinedOnItem: n.map((l) => l.tooltipPayload),
    positions: n.map((l) => l.tooltipPosition),
    settings: {
      stroke: o,
      strokeWidth: a,
      fill: i,
      dataKey: t,
      nameKey: r,
      name: sn(s, t),
      hide: c,
      type: u,
      color: i,
      unit: ""
      // why doesn't Pie support unit?
    }
  };
}
var jq = (e, t) => e > t ? "start" : e < t ? "end" : "middle", $q = (e, t, r) => ct(typeof t == "function" ? t(e) : t, r, r * 0.8), Lq = (e, t, r) => {
  var {
    top: n,
    left: o,
    width: a,
    height: i
  } = t, s = VO(a, i), c = o + ct(e.cx, a, a / 2), u = n + ct(e.cy, i, i / 2), l = ct(e.innerRadius, s, 0), d = $q(r, e.outerRadius, s), p = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: c,
    cy: u,
    innerRadius: l,
    outerRadius: d,
    maxRadius: p
  };
}, Fq = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function Bq(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var zq = (e, t) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = le("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
  return /* @__PURE__ */ m.createElement(ro, en({}, t, {
    type: "linear",
    className: r
  }));
}, Uq = (e, t, r) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ m.isValidElement(n)))
    return n;
  var o = le("recharts-pie-label-text", Bq(e));
  return /* @__PURE__ */ m.createElement(ol, en({}, t, {
    alignmentBaseline: "middle",
    className: o
  }), n);
};
function Wq(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: o,
    labelLine: a,
    dataKey: i
  } = r;
  if (!n || !o || !t)
    return null;
  var s = ht(r), c = Nn(o), u = Nn(a), l = typeof o == "object" && "offsetRadius" in o && typeof o.offsetRadius == "number" && o.offsetRadius || 20, d = t.map((p, h) => {
    var v = (p.startAngle + p.endAngle) / 2, f = Le(p.cx, p.cy, p.outerRadius + l, v), g = Ce(Ce(Ce(Ce({}, s), p), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, c), {}, {
      index: h,
      textAnchor: jq(f.x, p.cx)
    }, f), y = Ce(Ce(Ce(Ce({}, s), p), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: p.fill
    }, u), {}, {
      index: h,
      points: [Le(p.cx, p.cy, p.outerRadius, v), f],
      key: "line"
    });
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement(Ie, {
        key: "label-".concat(p.startAngle, "-").concat(p.endAngle, "-").concat(p.midAngle, "-").concat(h)
      }, a && zq(a, y), Uq(o, g, xe(p, i)))
    );
  });
  return /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-pie-labels"
  }, d);
}
function Kq(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: o
  } = r;
  return typeof o == "object" && o != null && "position" in o ? /* @__PURE__ */ m.createElement(al, {
    label: o
  }) : /* @__PURE__ */ m.createElement(Wq, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function Vq(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: o
  } = e, a = Z(Qr), {
    onMouseEnter: i,
    onClick: s,
    onMouseLeave: c
  } = o, u = fm(o, Cq), l = sm(i, o.dataKey), d = cm(c), p = lm(s, o.dataKey);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((h, v) => {
    if (h?.startAngle === 0 && h?.endAngle === 0 && t.length !== 1) return null;
    var f = r && String(v) === a, g = a ? n : null, y = f ? r : g, x = Ce(Ce({}, h), {}, {
      stroke: h.stroke,
      tabIndex: -1,
      [ZO]: v,
      [JO]: o.dataKey
    });
    return /* @__PURE__ */ m.createElement(
      Ie,
      en({
        key: "sector-".concat(h?.startAngle, "-").concat(h?.endAngle, "-").concat(h.midAngle, "-").concat(v),
        tabIndex: -1,
        className: "recharts-pie-sector"
      }, Ia(u, h, v), {
        // @ts-expect-error the types need a bit of attention
        onMouseEnter: l(h, v),
        onMouseLeave: d(h, v),
        onClick: p(h, v)
      }),
      /* @__PURE__ */ m.createElement($C, en({
        option: y,
        isActive: f,
        shapeType: "sector"
      }, x))
    );
  }));
}
function qq(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: o,
    offset: a
  } = e, {
    cornerRadius: i,
    startAngle: s,
    endAngle: c,
    dataKey: u,
    nameKey: l,
    tooltipType: d
  } = r, p = Math.abs(r.minAngle), h = Fq(s, c), v = Math.abs(h), f = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, g = n.filter((P) => xe(P, u, 0) !== 0).length, y = (v >= 360 ? g : g - 1) * f, x = v - g * p - y, b = n.reduce((P, O) => {
    var A = xe(O, u, 0);
    return P + (X(A) ? A : 0);
  }, 0), E;
  if (b > 0) {
    var S;
    E = n.map((P, O) => {
      var A = xe(P, u, 0), _ = xe(P, l, O), I = Lq(r, a, P), T = (X(A) ? A : 0) / b, M, D = Ce(Ce({}, P), o && o[O] && o[O].props);
      O ? M = S.endAngle + Ze(h) * f * (A !== 0 ? 1 : 0) : M = s;
      var N = M + Ze(h) * ((A !== 0 ? p : 0) + T * x), U = (M + N) / 2, L = (I.innerRadius + I.outerRadius) / 2, B = [{
        name: _,
        value: A,
        payload: D,
        dataKey: u,
        type: d
      }], R = Le(I.cx, I.cy, L, U);
      return S = Ce(Ce(Ce(Ce({}, r.presentationProps), {}, {
        percent: T,
        cornerRadius: i,
        name: _,
        tooltipPayload: B,
        midAngle: U,
        middleRadius: L,
        tooltipPosition: R
      }, D), I), {}, {
        value: A,
        startAngle: M,
        endAngle: N,
        payload: D,
        paddingAngle: Ze(h) * f
      }), S;
    });
  }
  return E;
}
function Hq(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, o = Dr(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ m.createElement(T3, {
    value: t ? o : void 0
  }, n);
}
function Gq(e) {
  var {
    props: t,
    previousSectorsRef: r
  } = e, {
    sectors: n,
    isAnimationActive: o,
    animationBegin: a,
    animationDuration: i,
    animationEasing: s,
    activeShape: c,
    inactiveShape: u,
    onAnimationStart: l,
    onAnimationEnd: d
  } = t, p = Oo(t, "recharts-pie-"), h = r.current, [v, f] = Ke(!1), g = ve(() => {
    typeof d == "function" && d(), f(!1);
  }, [d]), y = ve(() => {
    typeof l == "function" && l(), f(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(Hq, {
    showLabels: !v,
    sectors: n
  }, /* @__PURE__ */ m.createElement(Po, {
    animationId: p,
    begin: a,
    duration: i,
    isActive: o,
    easing: s,
    onAnimationStart: y,
    onAnimationEnd: g,
    key: p
  }, (x) => {
    var b = [], E = n && n[0], S = E?.startAngle;
    return n?.forEach((P, O) => {
      var A = h && h[O], _ = O > 0 ? In(P, "paddingAngle", 0) : 0;
      if (A) {
        var I = we(A.endAngle - A.startAngle, P.endAngle - P.startAngle, x), T = Ce(Ce({}, P), {}, {
          startAngle: S + _,
          endAngle: S + I + _
        });
        b.push(T), S = T.endAngle;
      } else {
        var {
          endAngle: M,
          startAngle: D
        } = P, N = we(0, M - D, x), U = Ce(Ce({}, P), {}, {
          startAngle: S + _,
          endAngle: S + N + _
        });
        b.push(U), S = U.endAngle;
      }
    }), r.current = b, /* @__PURE__ */ m.createElement(Ie, null, /* @__PURE__ */ m.createElement(Vq, {
      sectors: b,
      activeShape: c,
      inactiveShape: u,
      allOtherPieProps: t
    }));
  }), /* @__PURE__ */ m.createElement(Kq, {
    showLabels: !v,
    sectors: n,
    props: t
  }), t.children);
}
var Yq = {
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
function Xq(e) {
  var {
    id: t
  } = e, r = fm(e, Tq), {
    hide: n,
    className: o,
    rootTabIndex: a
  } = e, i = Dr(() => im(e.children, Ja), [e.children]), s = Z((l) => V3(l, t, i)), c = me(null), u = le("recharts-pie", o);
  return n || s == null ? (c.current = null, /* @__PURE__ */ m.createElement(Ie, {
    tabIndex: a,
    className: u
  })) : /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ll, {
    fn: Dq,
    args: Ce(Ce({}, e), {}, {
      sectors: s
    })
  }), /* @__PURE__ */ m.createElement(Ie, {
    tabIndex: a,
    className: u
  }, /* @__PURE__ */ m.createElement(Gq, {
    props: Ce(Ce({}, r), {}, {
      sectors: s
    }),
    previousSectorsRef: c
  })));
}
function BC(e) {
  var t = qe(e, Yq), {
    id: r
  } = t, n = fm(t, _q), o = ht(n);
  return /* @__PURE__ */ m.createElement(ul, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Aq, {
    type: "pie",
    id: a,
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
  }), /* @__PURE__ */ m.createElement(Mq, en({}, n, {
    id: a
  })), /* @__PURE__ */ m.createElement(Xq, en({}, n, {
    id: a
  }))));
}
BC.displayName = "Pie";
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
      Zq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zq(e, t, r) {
  return (t = Jq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Jq(e) {
  var t = Qq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eH = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, zC = Dt({
  name: "cartesianAxis",
  initialState: eH,
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
        var a = o.widthHistory || [];
        if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== o.width && Math.abs(n - a[0]) <= 1)
          return;
        var i = [...a, n].slice(-3);
        e.yAxis[r] = Qb(Qb({}, e.yAxis[r]), {}, {
          width: n,
          widthHistory: i
        });
      }
    }
  }
}), {
  addXAxis: tH,
  removeXAxis: rH,
  addYAxis: nH,
  removeYAxis: oH,
  addZAxis: bX,
  removeZAxis: wX,
  updateYAxisWidth: aH
} = zC.actions, iH = zC.reducer, sH = C([Ve], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), cH = C([sH, jr, $r], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), dl = () => Z(cH), lH = () => Z(UV);
function ew(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ew(Object(r), !0).forEach(function(n) {
      uH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uH(e, t, r) {
  return (t = dH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dH(e) {
  var t = fH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pH = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: o,
    dataKey: a
  } = e;
  if (o === !1 || t.x == null || t.y == null)
    return null;
  var i = tw(tw({
    index: r,
    dataKey: a,
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
  return /* @__PURE__ */ Ut(o) ? s = /* @__PURE__ */ wa(o, i) : typeof o == "function" ? s = o(i) : s = /* @__PURE__ */ m.createElement(nm, i), /* @__PURE__ */ m.createElement(Ie, {
    className: "recharts-active-dot"
  }, s);
};
function Of(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: o
  } = e, a = Z(Qr), i = lH();
  if (t == null || i == null)
    return null;
  var s = t.find((c) => i.includes(c.payload));
  return Ae(s) ? null : pH({
    point: s,
    childIndex: Number(a),
    mainColor: r,
    dataKey: o,
    activeDot: n
  });
}
var hH = process.env.NODE_ENV === "production", cd = "Invariant failed";
function rw(e, t) {
  if (hH)
    throw new Error(cd);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(cd, ": ").concat(r) : cd;
  throw new Error(n);
}
var mH = ["x", "y"];
function Af() {
  return Af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Af.apply(null, arguments);
}
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
function qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nw(Object(r), !0).forEach(function(n) {
      vH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vH(e, t, r) {
  return (t = gH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gH(e) {
  var t = yH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bH(e, t) {
  if (e == null) return {};
  var r, n, o = wH(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function wH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function xH(e, t) {
  var {
    x: r,
    y: n
  } = e, o = bH(e, mH), a = "".concat(r), i = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || o.height), l = parseInt(u, 10), d = "".concat(t.width || o.width), p = parseInt(d, 10);
  return qo(qo(qo(qo(qo({}, t), o), i ? {
    x: i
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
  return /* @__PURE__ */ m.createElement($C, Af({
    shapeType: "rectangle",
    propTransformer: xH,
    activeClassName: "recharts-active-bar"
  }, e));
}
var EH = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, o) => {
    if (X(t)) return t;
    var a = X(n) || Ae(n);
    return a ? t(n, o) : (a || (process.env.NODE_ENV !== "production" ? rw(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")) : rw()), r);
  };
}, SH = {}, UC = Dt({
  name: "errorBars",
  initialState: SH,
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
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? o : a));
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
  addErrorBar: xX,
  replaceErrorBar: EX,
  removeErrorBar: SX
} = UC.actions, PH = UC.reducer, OH = ["children"];
function AH(e, t) {
  if (e == null) return {};
  var r, n, o = CH(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function CH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var TH = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, _H = /* @__PURE__ */ Rt(TH);
function WC(e) {
  var {
    children: t
  } = e, r = AH(e, OH);
  return /* @__PURE__ */ m.createElement(_H.Provider, {
    value: r
  }, t);
}
function fl(e, t) {
  var r, n, o = Z((u) => Br(u, e)), a = Z((u) => zr(u, t)), i = (r = o?.allowDataOverflow) !== null && r !== void 0 ? r : Et.allowDataOverflow, s = (n = a?.allowDataOverflow) !== null && n !== void 0 ? n : St.allowDataOverflow, c = i || s;
  return {
    needClip: c,
    needClipX: i,
    needClipY: s
  };
}
function hm(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, o = dl(), {
    needClipX: a,
    needClipY: i,
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
    x: a ? c : c - l / 2,
    y: i ? u : u - d / 2,
    width: a ? l : l * 2,
    height: i ? d : d * 2
  }));
}
var kH = ["onMouseEnter", "onMouseLeave", "onClick"], NH = ["value", "background", "tooltipPosition"], IH = ["id"], RH = ["onMouseEnter", "onClick", "onMouseLeave"];
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tn.apply(null, arguments);
}
function ow(e, t) {
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
    t % 2 ? ow(Object(r), !0).forEach(function(n) {
      MH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ow(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MH(e, t, r) {
  return (t = DH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DH(e) {
  var t = jH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function js(e, t) {
  if (e == null) return {};
  var r, n, o = $H(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function $H(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var LH = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: o,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: o,
    color: n,
    value: sn(r, t),
    payload: e
  }];
};
function FH(e) {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: o,
    name: a,
    hide: i,
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
      name: sn(a, t),
      hide: i,
      type: e.tooltipType,
      color: e.fill,
      unit: s
    }
  };
}
function BH(e) {
  var t = Z(Qr), {
    data: r,
    dataKey: n,
    background: o,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: i,
    onMouseLeave: s,
    onClick: c
  } = a, u = js(a, kH), l = sm(i, n), d = cm(s), p = lm(c, n);
  if (!o || r == null)
    return null;
  var h = Nn(o);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, r.map((v, f) => {
    var {
      value: g,
      background: y,
      tooltipPosition: x
    } = v, b = js(v, NH);
    if (!y)
      return null;
    var E = l(v, f), S = d(v, f), P = p(v, f), O = dt(dt(dt(dt(dt({
      option: o,
      isActive: String(f) === t
    }, b), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), h), Ia(u, v, f)), {}, {
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
function zH(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, o = n?.map((a) => {
    var i = {
      x: a.x,
      y: a.y,
      width: a.width,
      height: a.height
    };
    return dt(dt({}, i), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: a.parentViewBox,
      viewBox: i,
      fill: a.fill
    });
  });
  return /* @__PURE__ */ m.createElement(rm, {
    value: t ? o : void 0
  }, r);
}
function UH(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: o,
    index: a,
    dataKey: i
  } = e, s = Z(Qr), c = Z(dC), u = r && String(a) === s && (c == null || i === c), l = u ? r : t;
  return /* @__PURE__ */ m.createElement(pm, tn({}, n, {
    name: String(n.name)
  }, o, {
    isActive: u,
    option: l,
    index: a,
    dataKey: i
  }));
}
function WH(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: o,
    dataKey: a
  } = e;
  return /* @__PURE__ */ m.createElement(pm, tn({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: o,
    dataKey: a
  }));
}
function KH(e) {
  var {
    data: t,
    props: r
  } = e, n = ht(r), {
    id: o
  } = n, a = js(n, IH), {
    shape: i,
    dataKey: s,
    activeBar: c
  } = r, {
    onMouseEnter: u,
    onClick: l,
    onMouseLeave: d
  } = r, p = js(r, RH), h = sm(u, s), v = cm(d), f = lm(l, s);
  return t ? /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((g, y) => /* @__PURE__ */ m.createElement(
    Ie,
    tn({
      key: "rectangle-".concat(g?.x, "-").concat(g?.y, "-").concat(g?.value, "-").concat(y),
      className: "recharts-bar-rectangle"
    }, Ia(p, g, y), {
      // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
      onMouseEnter: h(g, y),
      onMouseLeave: v(g, y),
      onClick: f(g, y)
    }),
    c ? /* @__PURE__ */ m.createElement(UH, {
      shape: i,
      activeBar: c,
      baseProps: a,
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
      /* @__PURE__ */ m.createElement(WH, {
        shape: i,
        baseProps: a,
        entry: g,
        index: y,
        dataKey: s
      })
    )
  ))) : null;
}
function VH(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: o,
    isAnimationActive: a,
    animationBegin: i,
    animationDuration: s,
    animationEasing: c,
    onAnimationEnd: u,
    onAnimationStart: l
  } = t, d = r.current, p = Oo(t, "recharts-bar-"), [h, v] = Ke(!1), f = !h, g = ve(() => {
    typeof u == "function" && u(), v(!1);
  }, [u]), y = ve(() => {
    typeof l == "function" && l(), v(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(zH, {
    showLabels: f,
    rects: n
  }, /* @__PURE__ */ m.createElement(Po, {
    animationId: p,
    begin: i,
    duration: s,
    isActive: a,
    easing: c,
    onAnimationEnd: g,
    onAnimationStart: y,
    key: p
  }, (x) => {
    var b = x === 1 ? n : n?.map((E, S) => {
      var P = d && d[S];
      if (P)
        return dt(dt({}, E), {}, {
          x: we(P.x, E.x, x),
          y: we(P.y, E.y, x),
          width: we(P.width, E.width, x),
          height: we(P.height, E.height, x)
        });
      if (o === "horizontal") {
        var O = we(0, E.height, x);
        return dt(dt({}, E), {}, {
          y: E.y + E.height - O,
          height: O
        });
      }
      var A = we(0, E.width, x);
      return dt(dt({}, E), {}, {
        width: A
      });
    });
    return x > 0 && (r.current = b ?? null), b == null ? null : /* @__PURE__ */ m.createElement(Ie, null, /* @__PURE__ */ m.createElement(KH, {
      props: t,
      data: b
    }));
  }), /* @__PURE__ */ m.createElement(al, {
    label: t.label
  }), t.children);
}
function qH(e) {
  var t = me(null);
  return /* @__PURE__ */ m.createElement(VH, {
    previousRectanglesRef: t,
    props: e
  });
}
var KC = 0, HH = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: xe(e, t)
  };
};
class GH extends ba {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: o,
      xAxisId: a,
      yAxisId: i,
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
      xAxisId: a,
      yAxisId: i
    })), /* @__PURE__ */ m.createElement(Ie, {
      className: "recharts-bar-rectangles",
      clipPath: s ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ m.createElement(BH, {
      data: r,
      dataKey: n,
      background: c,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ m.createElement(qH, this.props)));
  }
}
var YH = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  hide: !1,
  isAnimationActive: !Lr.isSsr,
  legendType: "rect",
  minPointSize: KC,
  xAxisId: 0,
  yAxisId: 0
};
function XH(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: o,
    minPointSize: a,
    activeBar: i,
    animationBegin: s,
    animationDuration: c,
    animationEasing: u,
    isAnimationActive: l
  } = e, {
    needClip: d
  } = fl(t, r), p = La(), h = ot(), v = im(e.children, Ja), f = Z((x) => PG(x, t, r, h, e.id, v));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var g, y = f?.[0];
  return y == null || y.height == null || y.width == null ? g = 0 : g = p === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ m.createElement(WC, {
    xAxisId: t,
    yAxisId: r,
    data: f,
    dataPointFormatter: HH,
    errorBarOffset: g
  }, /* @__PURE__ */ m.createElement(GH, tn({}, e, {
    layout: p,
    needClip: d,
    data: f,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: o,
    minPointSize: a,
    activeBar: i,
    animationBegin: s,
    animationDuration: c,
    animationEasing: u,
    isAnimationActive: l
  })));
}
function ZH(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n
    },
    pos: o,
    bandSize: a,
    xAxis: i,
    yAxis: s,
    xAxisTicks: c,
    yAxisTicks: u,
    stackedData: l,
    displayedData: d,
    offset: p,
    cells: h,
    parentViewBox: v
  } = e, f = t === "horizontal" ? s : i, g = l ? f.scale.domain() : null, y = GF({
    numericAxis: f
  });
  return d.map((x, b) => {
    var E, S, P, O, A, _;
    l ? E = WF(l[b], g) : (E = xe(x, r), Array.isArray(E) || (E = [y, E]));
    var I = EH(n, KC)(E[1], b);
    if (t === "horizontal") {
      var T, [M, D] = [s.scale(E[0]), s.scale(E[1])];
      S = Dg({
        axis: i,
        ticks: c,
        bandSize: a,
        offset: o.offset,
        entry: x,
        index: b
      }), P = (T = D ?? M) !== null && T !== void 0 ? T : void 0, O = o.size;
      var N = M - D;
      if (A = Nt(N) ? 0 : N, _ = {
        x: S,
        y: p.top,
        width: O,
        height: p.height
      }, Math.abs(I) > 0 && Math.abs(A) < Math.abs(I)) {
        var U = Ze(A || I) * (Math.abs(I) - Math.abs(A));
        P -= U, A += U;
      }
    } else {
      var [L, B] = [i.scale(E[0]), i.scale(E[1])];
      if (S = L, P = Dg({
        axis: s,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: x,
        index: b
      }), O = B - L, A = o.size, _ = {
        x: p.left,
        y: P,
        width: p.width,
        height: A
      }, Math.abs(I) > 0 && Math.abs(O) < Math.abs(I)) {
        var R = Ze(O || I) * (Math.abs(I) - Math.abs(O));
        O += R;
      }
    }
    if (S == null || P == null || O == null || A == null)
      return null;
    var F = dt(dt({}, x), {}, {
      x: S,
      y: P,
      width: O,
      height: A,
      value: l ? E : E[1],
      payload: x,
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
function JH(e) {
  var t = qe(e, YH), r = ot();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "bar"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: LH(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: FH,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "bar",
    id: n,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: YO(t.stackId),
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(XH, tn({}, t, {
    id: n
  }))));
}
var VC = /* @__PURE__ */ m.memo(JH);
VC.displayName = "Bar";
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
function Ii(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aw(Object(r), !0).forEach(function(n) {
      QH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QH(e, t, r) {
  return (t = eG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eG(e) {
  var t = tG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rG = (e, t) => t, nG = (e, t, r) => r, oG = (e, t, r, n) => n, aG = (e, t, r, n, o) => o, Qa = C([Ha, aG], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), iG = C([Qa], (e) => e?.maxBarSize), sG = (e, t, r, n, o, a) => a, iw = (e, t, r) => {
  var n = r ?? e;
  if (!Ae(n))
    return ct(n, t, 0);
}, cG = C([ce, Ha, rG, nG, oG], (e, t, r, n, o) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === o).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), lG = (e, t, r, n) => {
  var o = ce(e);
  return o === "horizontal" ? ga(e, "yAxis", r, n) : ga(e, "xAxis", t, n);
}, uG = (e, t, r) => {
  var n = ce(e);
  return n === "horizontal" ? ab(e, "xAxis", t) : ab(e, "yAxis", r);
}, dG = (e, t, r) => {
  var n = {}, o = e.filter(Gc), a = e.filter((u) => u.stackId == null), i = o.reduce((u, l) => (u[l.stackId] || (u[l.stackId] = []), u[l.stackId].push(l), u), n), s = Object.entries(i).map((u) => {
    var [l, d] = u, p = d.map((v) => v.dataKey), h = iw(t, r, d[0].barSize);
    return {
      stackId: l,
      dataKeys: p,
      barSize: h
    };
  }), c = a.map((u) => {
    var l = [u.dataKey].filter((p) => p != null), d = iw(t, r, u.barSize);
    return {
      stackId: void 0,
      dataKeys: l,
      barSize: d
    };
  });
  return [...s, ...c];
}, fG = C([cG, GK, uG], dG), pG = (e, t, r, n, o) => {
  var a, i, s = Qa(e, t, r, n, o);
  if (s != null) {
    var c = ce(e), u = dA(e), {
      maxBarSize: l
    } = s, d = Ae(l) ? u : l, p, h;
    return c === "horizontal" ? (p = mr(e, "xAxis", t, n), h = hr(e, "xAxis", t, n)) : (p = mr(e, "yAxis", r, n), h = hr(e, "yAxis", r, n)), (a = (i = Dn(p, h, !0)) !== null && i !== void 0 ? i : d) !== null && a !== void 0 ? a : 0;
  }
}, qC = (e, t, r, n) => {
  var o = ce(e), a, i;
  return o === "horizontal" ? (a = mr(e, "xAxis", t, n), i = hr(e, "xAxis", t, n)) : (a = mr(e, "yAxis", r, n), i = hr(e, "yAxis", r, n)), Dn(a, i);
};
function hG(e, t, r, n, o) {
  var a = n.length;
  if (!(a < 1)) {
    var i = ct(e, r, 0, !0), s, c = [];
    if (ze(n[0].barSize)) {
      var u = !1, l = r / a, d = n.reduce((y, x) => y + (x.barSize || 0), 0);
      d += (a - 1) * i, d >= r && (d -= (a - 1) * i, i = 0), d >= r && l > 0 && (u = !0, l *= 0.9, d = a * l);
      var p = (r - d) / 2 >> 0, h = {
        offset: p - i,
        size: 0
      };
      s = n.reduce((y, x) => {
        var b, E = {
          stackId: x.stackId,
          dataKeys: x.dataKeys,
          position: {
            offset: h.offset + h.size + i,
            size: u ? l : (b = x.barSize) !== null && b !== void 0 ? b : 0
          }
        }, S = [...y, E];
        return h = S[S.length - 1].position, S;
      }, c);
    } else {
      var v = ct(t, r, 0, !0);
      r - 2 * v - (a - 1) * i <= 0 && (i = 0);
      var f = (r - 2 * v - (a - 1) * i) / a;
      f > 1 && (f >>= 0);
      var g = ze(o) ? Math.min(f, o) : f;
      s = n.reduce((y, x, b) => [...y, {
        stackId: x.stackId,
        dataKeys: x.dataKeys,
        position: {
          offset: v + (f + i) * b + (f - g) / 2,
          size: g
        }
      }], c);
    }
    return s;
  }
}
var mG = (e, t, r, n, o, a, i) => {
  var s = Ae(i) ? t : i, c = hG(r, n, o !== a ? o : a, e, s);
  return o !== a && c != null && (c = c.map((u) => Ii(Ii({}, u), {}, {
    position: Ii(Ii({}, u.position), {}, {
      offset: u.position.offset - o / 2
    })
  }))), c;
}, vG = C([fG, dA, HK, fA, pG, qC, iG], mG), gG = (e, t, r, n) => mr(e, "xAxis", t, n), yG = (e, t, r, n) => mr(e, "yAxis", r, n), bG = (e, t, r, n) => hr(e, "xAxis", t, n), wG = (e, t, r, n) => hr(e, "yAxis", r, n), xG = C([vG, Qa], (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
}), EG = (e, t) => {
  var r = Hc(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var o = e[n];
      if (o) {
        var {
          stackedData: a
        } = o;
        if (a)
          return a.find((i) => i.key === r);
      }
    }
  }
}, SG = C([lG, Qa], EG), PG = C([Ve, Wp, gG, yG, bG, wG, xG, ce, Wa, qC, SG, Qa, sG], (e, t, r, n, o, a, i, s, c, u, l, d, p) => {
  var {
    chartData: h,
    dataStartIndex: v,
    dataEndIndex: f
  } = c;
  if (!(d == null || i == null || t == null || s !== "horizontal" && s !== "vertical" || r == null || n == null || o == null || a == null || u == null)) {
    var {
      data: g
    } = d, y;
    if (g != null && g.length > 0 ? y = g : y = h?.slice(v, f + 1), y != null)
      return ZH({
        layout: s,
        barSettings: d,
        pos: i,
        parentViewBox: t,
        bandSize: u,
        xAxis: r,
        yAxis: n,
        xAxisTicks: o,
        yAxisTicks: a,
        stackedData: l,
        displayedData: y,
        offset: e,
        cells: p
      });
  }
}), HC = (e) => {
  var {
    chartData: t
  } = e, r = _e(), n = ot();
  return Be(() => n ? () => {
  } : (r(mb(t)), () => {
    r(mb(void 0));
  }), [t, r, n]), null;
}, sw = {
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
}, GC = Dt({
  name: "brush",
  initialState: sw,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? sw : t.payload;
    }
  }
}), {
  setBrushSettings: PX
} = GC.actions, OG = GC.reducer;
function AG(e, t, r) {
  return (t = CG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CG(e) {
  var t = TG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TG(e, t) {
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
            var a = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + a;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var i = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + i;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(), n = r[0], o = r[r.length - 1];
    return n <= o ? t >= n && t <= o : t >= o && t <= n;
  }
}
AG(mm, "EPS", 1e-4);
function _G(e) {
  return (e % 180 + 180) % 180;
}
var kG = function(t) {
  var {
    width: r,
    height: n
  } = t, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = _G(o), i = a * Math.PI / 180, s = Math.atan(n / r), c = i > s && i < Math.PI - s ? n / Math.sin(i) : r / Math.cos(i);
  return Math.abs(c);
}, NG = {
  dots: [],
  areas: [],
  lines: []
}, YC = Dt({
  name: "referenceElements",
  initialState: NG,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Or(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Or(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Or(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: OX,
  removeDot: AX,
  addArea: CX,
  removeArea: TX,
  addLine: _X,
  removeLine: kX
} = YC.actions, IG = YC.reducer, RG = /* @__PURE__ */ Rt(void 0), MG = (e) => {
  var {
    children: t
  } = e, [r] = Ke("".concat(sa("recharts"), "-clip")), n = dl();
  if (n == null)
    return null;
  var {
    x: o,
    y: a,
    width: i,
    height: s
  } = n;
  return /* @__PURE__ */ m.createElement(RG.Provider, {
    value: r
  }, /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ m.createElement("rect", {
    x: o,
    y: a,
    height: s,
    width: i
  }))), t);
};
function ho(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function XC(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], o = 0; o < e.length; o += t)
    n.push(e[o]);
  return n;
}
function DG(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return kG(n, r);
}
function jG(e, t, r) {
  var n = r === "width", {
    x: o,
    y: a,
    width: i,
    height: s
  } = e;
  return t === 1 ? {
    start: n ? o : a,
    end: n ? o + i : a + s
  } : {
    start: n ? o + i : a + s,
    end: n ? o : a
  };
}
function $s(e, t, r, n, o) {
  if (e * t < e * n || e * t > e * o)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - o) <= 0;
}
function $G(e, t) {
  return XC(e, t + 1);
}
function LG(e, t, r, n, o) {
  for (var a = (n || []).slice(), {
    start: i,
    end: s
  } = t, c = 0, u = 1, l = i, d = function() {
    var v = n?.[c];
    if (v === void 0)
      return {
        v: XC(n, u)
      };
    var f = c, g, y = () => (g === void 0 && (g = r(v, f)), g), x = v.coordinate, b = c === 0 || $s(e, x, y, l, s);
    b || (c = 0, l = i, u += 1), b && (l = x + e * (y() / 2 + o), c += u);
  }, p; u <= a.length; )
    if (p = d(), p) return p.v;
  return [];
}
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
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cw(Object(r), !0).forEach(function(n) {
      FG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FG(e, t, r) {
  return (t = BG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BG(e) {
  var t = zG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UG(e, t, r, n, o) {
  for (var a = (n || []).slice(), i = a.length, {
    start: s
  } = t, {
    end: c
  } = t, u = function(p) {
    var h = a[p], v, f = () => (v === void 0 && (v = r(h, p)), v);
    if (p === i - 1) {
      var g = e * (h.coordinate + e * f() / 2 - c);
      a[p] = h = at(at({}, h), {}, {
        tickCoord: g > 0 ? h.coordinate - g * e : h.coordinate
      });
    } else
      a[p] = h = at(at({}, h), {}, {
        tickCoord: h.coordinate
      });
    var y = $s(e, h.tickCoord, f, s, c);
    y && (c = h.tickCoord - e * (f() / 2 + o), a[p] = at(at({}, h), {}, {
      isShow: !0
    }));
  }, l = i - 1; l >= 0; l--)
    u(l);
  return a;
}
function WG(e, t, r, n, o, a) {
  var i = (n || []).slice(), s = i.length, {
    start: c,
    end: u
  } = t;
  if (a) {
    var l = n[s - 1], d = r(l, s - 1), p = e * (l.coordinate + e * d / 2 - u);
    i[s - 1] = l = at(at({}, l), {}, {
      tickCoord: p > 0 ? l.coordinate - p * e : l.coordinate
    });
    var h = $s(e, l.tickCoord, () => d, c, u);
    h && (u = l.tickCoord - e * (d / 2 + o), i[s - 1] = at(at({}, l), {}, {
      isShow: !0
    }));
  }
  for (var v = a ? s - 1 : s, f = function(x) {
    var b = i[x], E, S = () => (E === void 0 && (E = r(b, x)), E);
    if (x === 0) {
      var P = e * (b.coordinate - e * S() / 2 - c);
      i[x] = b = at(at({}, b), {}, {
        tickCoord: P < 0 ? b.coordinate - P * e : b.coordinate
      });
    } else
      i[x] = b = at(at({}, b), {}, {
        tickCoord: b.coordinate
      });
    var O = $s(e, b.tickCoord, S, c, u);
    O && (c = b.tickCoord + e * (S() / 2 + o), i[x] = at(at({}, b), {}, {
      isShow: !0
    }));
  }, g = 0; g < v; g++)
    f(g);
  return i;
}
function vm(e, t, r) {
  var {
    tick: n,
    ticks: o,
    viewBox: a,
    minTickGap: i,
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
    return (p = $G(o, X(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], v = s === "top" || s === "bottom" ? "width" : "height", f = l && v === "width" ? ea(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, g = (b, E) => {
    var S = typeof u == "function" ? u(b.value, E) : b.value;
    return v === "width" ? DG(ea(S, {
      fontSize: t,
      letterSpacing: r
    }), f, d) : ea(S, {
      fontSize: t,
      letterSpacing: r
    })[v];
  }, y = o.length >= 2 ? Ze(o[1].coordinate - o[0].coordinate) : 1, x = jG(a, y, v);
  return c === "equidistantPreserveStart" ? LG(y, x, g, o, i) : (c === "preserveStart" || c === "preserveStartEnd" ? h = WG(y, x, g, o, i, c === "preserveStartEnd") : h = UG(y, x, g, o, i), h.filter((b) => b.isShow));
}
var KG = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: o = 0,
    tickMargin: a = 0
  } = e, i = 0;
  if (t) {
    Array.from(t).forEach((l) => {
      if (l) {
        var d = l.getBoundingClientRect();
        d.width > i && (i = d.width);
      }
    });
    var s = r ? r.getBoundingClientRect().width : 0, c = o + a, u = i + c + s + (r ? n : 0);
    return Math.round(u);
  }
  return 0;
}, VG = ["axisLine", "width", "height", "className", "hide", "ticks"], qG = ["viewBox"], HG = ["viewBox"];
function Cf(e, t) {
  if (e == null) return {};
  var r, n, o = GG(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function GG(e, t) {
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
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lw(Object(r), !0).forEach(function(n) {
      YG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YG(e, t, r) {
  return (t = XG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XG(e) {
  var t = ZG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZG(e, t) {
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
function JG(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: o,
    orientation: a,
    mirror: i,
    axisLine: s,
    otherSvgProps: c
  } = e;
  if (!s)
    return null;
  var u = We(We(We({}, c), ht(s)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var l = +(a === "top" && !i || a === "bottom" && i);
    u = We(We({}, u), {}, {
      x1: t,
      y1: r + l * o,
      x2: t + n,
      y2: r + l * o
    });
  } else {
    var d = +(a === "left" && !i || a === "right" && i);
    u = We(We({}, u), {}, {
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
function QG(e, t, r, n, o, a, i, s, c) {
  var u, l, d, p, h, v, f = s ? -1 : 1, g = e.tickSize || i, y = X(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
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
function e6(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function t6(e, t) {
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
function r6(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, o, a = le(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ m.isValidElement(t))
    o = /* @__PURE__ */ m.cloneElement(t, We(We({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    o = t(We(We({}, r), {}, {
      className: a
    }));
  else {
    var i = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (i = le(i, t?.className)), o = /* @__PURE__ */ m.createElement(ol, Ln({}, r, {
      className: i
    }), n);
  }
  return o;
}
function n6(e) {
  var {
    ticks: t = [],
    tick: r,
    tickLine: n,
    stroke: o,
    tickFormatter: a,
    unit: i,
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
    letterSpacing: x,
    getTicksConfig: b,
    events: E
  } = e, S = vm(We(We({}, b), {}, {
    ticks: t
  }), y, x), P = e6(u, l), O = t6(u, l), A = ht(b), _ = Nn(r), I = {};
  typeof n == "object" && (I = n);
  var T = We(We({}, A), {}, {
    fill: "none"
  }, I), M = S.map((D, N) => {
    var {
      line: U,
      tick: L
    } = QG(D, d, p, h, v, u, f, l, g), B = We(We(We(We({
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
      tickFormatter: a,
      padding: s
    }, c);
    return /* @__PURE__ */ m.createElement(Ie, Ln({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(D.value, "-").concat(D.coordinate, "-").concat(D.tickCoord)
    }, Ia(E, D, N)), n && /* @__PURE__ */ m.createElement("line", Ln({}, T, U, {
      className: le("recharts-cartesian-axis-tick-line", In(n, "className"))
    })), r && /* @__PURE__ */ m.createElement(r6, {
      option: r,
      tickProps: B,
      value: "".concat(typeof a == "function" ? a(D.value, N) : D.value).concat(i || "")
    }));
  });
  return M.length > 0 ? /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, M) : null;
}
var o6 = /* @__PURE__ */ De((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: o,
    className: a,
    hide: i,
    ticks: s
  } = e, c = Cf(e, VG), [u, l] = Ke(""), [d, p] = Ke(""), h = me(null);
  Lw(t, () => ({
    getCalculatedWidth: () => {
      var f;
      return KG({
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
        var x = window.getComputedStyle(y), b = x.fontSize, E = x.letterSpacing;
        (b !== u || E !== d) && (l(b), p(E));
      }
    }
  }, [u, d]);
  return i || n != null && n <= 0 || o != null && o <= 0 ? null : /* @__PURE__ */ m.createElement(Ie, {
    className: le("recharts-cartesian-axis", a),
    ref: v
  }, /* @__PURE__ */ m.createElement(JG, {
    x: e.x,
    y: e.y,
    width: n,
    height: o,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: ht(e)
  }), /* @__PURE__ */ m.createElement(n6, {
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
  }), /* @__PURE__ */ m.createElement(s3, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ m.createElement(g3, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children));
}), a6 = /* @__PURE__ */ m.memo(o6, (e, t) => {
  var {
    viewBox: r
  } = e, n = Cf(e, qG), {
    viewBox: o
  } = t, a = Cf(t, HG);
  return ho(r, o) && ho(n, a);
}), ym = /* @__PURE__ */ m.forwardRef((e, t) => {
  var r = qe(e, gm);
  return /* @__PURE__ */ m.createElement(a6, Ln({}, r, {
    ref: t
  }));
});
ym.displayName = "CartesianAxis";
var i6 = ["x1", "y1", "x2", "y2", "key"], s6 = ["offset"], c6 = ["xAxisId", "yAxisId"], l6 = ["xAxisId", "yAxisId"];
function uw(e, t) {
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
    t % 2 ? uw(Object(r), !0).forEach(function(n) {
      u6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u6(e, t, r) {
  return (t = d6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d6(e) {
  var t = f6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f6(e, t) {
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
function Ls(e, t) {
  if (e == null) return {};
  var r, n, o = p6(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function p6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var h6 = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: o,
    width: a,
    height: i,
    ry: s
  } = e;
  return /* @__PURE__ */ m.createElement("rect", {
    x: n,
    y: o,
    ry: s,
    width: a,
    height: i,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function ZC(e, t) {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var {
      x1: n,
      y1: o,
      x2: a,
      y2: i,
      key: s
    } = t, c = Ls(t, i6), u = ht(c), {
      offset: l
    } = u, d = Ls(u, s6);
    r = /* @__PURE__ */ m.createElement("line", yn({}, d, {
      x1: n,
      y1: o,
      x2: a,
      y2: i,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function m6(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: o
  } = e;
  if (!n || !o || !o.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: i
  } = e, s = Ls(e, c6), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(l),
      index: l
    });
    return ZC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function v6(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: o
  } = e;
  if (!n || !o || !o.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: i
  } = e, s = Ls(e, l6), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return ZC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function g6(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: o,
    width: a,
    height: i,
    horizontalPoints: s,
    horizontal: c = !0
  } = e;
  if (!c || !t || !t.length)
    return null;
  var u = s.map((d) => Math.round(d + o - o)).sort((d, p) => d - p);
  o !== u[0] && u.unshift(0);
  var l = u.map((d, p) => {
    var h = !u[p + 1], v = h ? o + i - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var f = p % t.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: v,
      width: a,
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
function y6(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: o,
    y: a,
    width: i,
    height: s,
    verticalPoints: c
  } = e;
  if (!t || !r || !r.length)
    return null;
  var u = c.map((d) => Math.round(d + o - o)).sort((d, p) => d - p);
  o !== u[0] && u.unshift(0);
  var l = u.map((d, p) => {
    var h = !u[p + 1], v = h ? o + i - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var f = p % r.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: a,
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
var b6 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: o,
    offset: a
  } = e;
  return HO(vm(it(it(it({}, gm), r), {}, {
    ticks: GO(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), a.left, a.left + a.width, t);
}, w6 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: o,
    offset: a
  } = e;
  return HO(vm(it(it(it({}, gm), r), {}, {
    ticks: GO(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), a.top, a.top + a.height, t);
}, x6 = {
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
  var t = Vp(), r = qp(), n = r1(), o = it(it({}, qe(e, x6)), {}, {
    x: X(e.x) ? e.x : n.left,
    y: X(e.y) ? e.y : n.top,
    width: X(e.width) ? e.width : n.width,
    height: X(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: i,
    x: s,
    y: c,
    width: u,
    height: l,
    syncWithTicks: d,
    horizontalValues: p,
    verticalValues: h
  } = o, v = ot(), f = Z((_) => ib(_, "xAxis", a, v)), g = Z((_) => ib(_, "yAxis", i, v));
  if (!X(u) || u <= 0 || !X(l) || l <= 0 || !X(s) || s !== +s || !X(c) || c !== +c)
    return null;
  var y = o.verticalCoordinatesGenerator || b6, x = o.horizontalCoordinatesGenerator || w6, {
    horizontalPoints: b,
    verticalPoints: E
  } = o;
  if ((!b || !b.length) && typeof x == "function") {
    var S = p && p.length, P = x({
      yAxis: g ? it(it({}, g), {}, {
        ticks: S ? p : g.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, S ? !0 : d);
    vs(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (b = P);
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
    vs(Array.isArray(A), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A, "]")), Array.isArray(A) && (E = A);
  }
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ m.createElement(h6, {
    fill: o.fill,
    fillOpacity: o.fillOpacity,
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height,
    ry: o.ry
  }), /* @__PURE__ */ m.createElement(g6, yn({}, o, {
    horizontalPoints: b
  })), /* @__PURE__ */ m.createElement(y6, yn({}, o, {
    verticalPoints: E
  })), /* @__PURE__ */ m.createElement(m6, yn({}, o, {
    offset: n,
    horizontalPoints: b,
    xAxis: f,
    yAxis: g
  })), /* @__PURE__ */ m.createElement(v6, yn({}, o, {
    offset: n,
    verticalPoints: E,
    xAxis: f,
    yAxis: g
  })));
}
pl.displayName = "CartesianGrid";
var JC = (e, t, r, n) => mr(e, "xAxis", t, n), QC = (e, t, r, n) => hr(e, "xAxis", t, n), eT = (e, t, r, n) => mr(e, "yAxis", r, n), tT = (e, t, r, n) => hr(e, "yAxis", r, n), E6 = C([ce, JC, eT, QC, tT], (e, t, r, n, o) => gr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), S6 = (e, t, r, n, o) => o;
function P6(e) {
  return e.type === "line";
}
var O6 = C([Ha, S6], (e, t) => e.filter(P6).find((r) => r.id === t)), A6 = C([ce, JC, eT, QC, tT, O6, E6, Wa], (e, t, r, n, o, a, i, s) => {
  var {
    chartData: c,
    dataStartIndex: u,
    dataEndIndex: l
  } = s;
  if (!(a == null || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || i == null)) {
    var {
      dataKey: d,
      data: p
    } = a, h;
    if (p != null && p.length > 0 ? h = p : h = c?.slice(u, l + 1), h != null)
      return G6({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataKey: d,
        bandSize: i,
        displayedData: h
      });
  }
});
function rT(e) {
  var t = Nn(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: o,
      strokeWidth: a
    } = t, i = Number(o), s = Number(a);
    return (Number.isNaN(i) || i < 0) && (i = r), (Number.isNaN(s) || s < 0) && (s = n), {
      r: i,
      strokeWidth: s
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
var C6 = ["id"], T6 = ["type", "layout", "connectNulls", "needClip"], _6 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
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
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      k6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k6(e, t, r) {
  return (t = N6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N6(e) {
  var t = I6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I6(e, t) {
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
  var r, n, o = R6(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function R6(e, t) {
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
var M6 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: o,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: o,
    color: n,
    value: sn(r, t),
    payload: e
  }];
};
function D6(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: o,
    fill: a,
    name: i,
    hide: s,
    unit: c
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: o,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: sn(i, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c
    }
  };
}
var nT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function j6(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], o = 0; o < t; ++o)
    n = [...n, ...r];
  return n;
}
var $6 = (e, t, r) => {
  var n = r.reduce((d, p) => d + p);
  if (!n)
    return nT(t, e);
  for (var o = Math.floor(e / n), a = e % n, i = t - e, s = [], c = 0, u = 0; c < r.length; u += r[c], ++c)
    if (u + r[c] > a) {
      s = [...r.slice(0, c), a - u];
      break;
    }
  var l = s.length % 2 === 0 ? [0, i] : [i];
  return [...j6(r, o), ...s, ...l].map((d) => "".concat(d, "px")).join(", ");
};
function L6(e, t) {
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
function F6(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function B6(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: o,
    dataKey: a,
    needClip: i
  } = n;
  if (!F6(r, o))
    return null;
  var {
    id: s
  } = n, c = bm(n, C6), u = cl(o), l = ht(c), d = NP(o), p = r.map((v, f) => {
    var g = Ct(Ct(Ct({
      key: "dot-".concat(f),
      r: 3
    }, l), d), {}, {
      index: f,
      cx: v.x,
      cy: v.y,
      dataKey: a,
      value: v.value,
      payload: v.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return L6(o, g);
  }), h = {
    clipPath: i ? "url(#clipPath-".concat(u ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Ie, Fn({
    className: "recharts-line-dots",
    key: "dots"
  }, h), p);
}
function z6(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, o = Dr(() => n?.map((a) => {
    var i = {
      x: a.x,
      y: a.y,
      width: 0,
      height: 0
    };
    return Ct(Ct({}, i), {}, {
      value: a.value,
      payload: a.payload,
      viewBox: i,
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
function fw(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: o,
    props: a
  } = e, {
    type: i,
    layout: s,
    connectNulls: c,
    needClip: u
  } = a, l = bm(a, T6), d = Ct(Ct({}, mt(l)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: i,
    layout: s,
    connectNulls: c,
    strokeDasharray: o ?? a.strokeDasharray
  });
  return /* @__PURE__ */ m.createElement(m.Fragment, null, n?.length > 1 && /* @__PURE__ */ m.createElement(ro, Fn({}, d, {
    pathRef: r
  })), /* @__PURE__ */ m.createElement(B6, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function U6(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function W6(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: o,
    longestAnimatedLengthRef: a
  } = e, {
    points: i,
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
  } = r, y = o.current, x = Oo(r, "recharts-line-"), [b, E] = Ke(!1), S = !b, P = ve(() => {
    typeof f == "function" && f(), E(!1);
  }, [f]), O = ve(() => {
    typeof g == "function" && g(), E(!0);
  }, [g]), A = U6(n.current), _ = a.current;
  return /* @__PURE__ */ m.createElement(z6, {
    points: i,
    showLabels: S
  }, r.children, /* @__PURE__ */ m.createElement(Po, {
    animationId: x,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: P,
    onAnimationStart: O,
    key: x
  }, (I) => {
    var T = we(_, A + _, I), M = Math.min(T, A), D;
    if (c)
      if (s) {
        var N = "".concat(s).split(/[,\s]+/gim).map((B) => parseFloat(B));
        D = $6(M, A, N);
      } else
        D = nT(A, M);
    else
      D = s == null ? void 0 : String(s);
    if (y) {
      var U = y.length / i.length, L = I === 1 ? i : i.map((B, R) => {
        var F = Math.floor(R * U);
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
      return o.current = L, /* @__PURE__ */ m.createElement(fw, {
        props: r,
        points: L,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: D
      });
    }
    return I > 0 && A > 0 && (o.current = i, a.current = M), /* @__PURE__ */ m.createElement(fw, {
      props: r,
      points: i,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: D
    });
  }), /* @__PURE__ */ m.createElement(al, {
    label: r.label
  }));
}
function K6(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = me(null), o = me(0), a = me(null);
  return /* @__PURE__ */ m.createElement(W6, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: o,
    pathRef: a
  });
}
var V6 = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: xe(e.payload, t)
});
class q6 extends t_ {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: o,
      xAxisId: a,
      yAxisId: i,
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
    } = rT(r), y = cl(r), x = f * 2 + g;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ie, {
      className: h
    }, p && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: v,
      xAxisId: a,
      yAxisId: i
    }), !y && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(v)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: c - x / 2,
      y: s - x / 2,
      width: u + x,
      height: l + x
    }))), /* @__PURE__ */ m.createElement(WC, {
      xAxisId: a,
      yAxisId: i,
      data: n,
      dataPointFormatter: V6,
      errorBarOffset: 0
    }, /* @__PURE__ */ m.createElement(K6, {
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
var oT = {
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
function H6(e) {
  var t = qe(e, oT), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: o,
    animationDuration: a,
    animationEasing: i,
    connectNulls: s,
    dot: c,
    hide: u,
    isAnimationActive: l,
    label: d,
    legendType: p,
    xAxisId: h,
    yAxisId: v,
    id: f
  } = t, g = bm(t, _6), {
    needClip: y
  } = fl(h, v), x = dl(), b = La(), E = ot(), S = Z((I) => A6(I, h, v, E, f));
  if (b !== "horizontal" && b !== "vertical" || S == null || x == null)
    return null;
  var {
    height: P,
    width: O,
    x: A,
    y: _
  } = x;
  return /* @__PURE__ */ m.createElement(q6, Fn({}, g, {
    id: f,
    connectNulls: s,
    dot: c,
    activeDot: r,
    animateNewValues: n,
    animationBegin: o,
    animationDuration: a,
    animationEasing: i,
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
function G6(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: o,
    yAxisTicks: a,
    dataKey: i,
    bandSize: s,
    displayedData: c
  } = e;
  return c.map((u, l) => {
    var d = xe(u, i);
    if (t === "horizontal") {
      var p = ms({
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
    var v = Ae(d) ? null : r.scale(d), f = ms({
      axis: n,
      ticks: a,
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
function Y6(e) {
  var t = qe(e, oT), r = ot();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: M6(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: D6,
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
  }), /* @__PURE__ */ m.createElement(H6, Fn({}, t, {
    id: n
  }))));
}
var aT = /* @__PURE__ */ m.memo(Y6);
aT.displayName = "Line";
var iT = (e, t, r, n) => mr(e, "xAxis", t, n), sT = (e, t, r, n) => hr(e, "xAxis", t, n), cT = (e, t, r, n) => mr(e, "yAxis", r, n), lT = (e, t, r, n) => hr(e, "yAxis", r, n), X6 = C([ce, iT, cT, sT, lT], (e, t, r, n, o) => gr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), Z6 = (e, t, r, n, o) => o, uT = C([Ha, Z6], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), J6 = (e, t, r, n, o) => {
  var a, i = uT(e, t, r, n, o);
  if (i != null) {
    var s = ce(e), c = gr(s, "xAxis"), u;
    if (c ? u = ga(e, "yAxis", r, n) : u = ga(e, "xAxis", t, n), u != null) {
      var {
        stackId: l
      } = i, d = Hc(i);
      if (!(l == null || d == null)) {
        var p = (a = u[l]) === null || a === void 0 ? void 0 : a.stackedData;
        return p?.find((h) => h.key === d);
      }
    }
  }
}, Q6 = C([ce, iT, cT, sT, lT, J6, Wa, X6, uT], (e, t, r, n, o, a, i, s, c) => {
  var {
    chartData: u,
    dataStartIndex: l,
    dataEndIndex: d
  } = i;
  if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || s == null)) {
    var {
      data: p
    } = c, h;
    if (p && p.length > 0 ? h = p : h = u?.slice(l, d + 1), h != null) {
      var v = void 0;
      return w8({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataStartIndex: l,
        areaSettings: c,
        stackedData: a,
        displayedData: h,
        chartBaseValue: v,
        bandSize: s
      });
    }
  }
}), e8 = ["id"], t8 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function dT(e, t) {
  if (e == null) return {};
  var r, n, o = r8(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function r8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function pw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pw(Object(r), !0).forEach(function(n) {
      n8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n8(e, t, r) {
  return (t = o8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o8(e) {
  var t = a8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function a8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cr.apply(null, arguments);
}
function Fs(e, t) {
  return e && e !== "none" ? e : t;
}
var i8 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    fill: o,
    legendType: a,
    hide: i
  } = e;
  return [{
    inactive: i,
    dataKey: t,
    type: a,
    color: Fs(n, o),
    value: sn(r, t),
    payload: e
  }];
};
function s8(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: o,
    fill: a,
    name: i,
    hide: s,
    unit: c
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: o,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: sn(i, t),
      hide: s,
      type: e.tooltipType,
      color: Fs(n, a),
      unit: c
    }
  };
}
var c8 = (e, t) => {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = le("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(nm, Cr({}, t, {
      className: n
    }));
  }
  return r;
};
function l8(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function u8(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: o,
    dot: a,
    dataKey: i
  } = n;
  if (!l8(r, a))
    return null;
  var s = cl(a), c = ht(n), u = NP(a), l = r.map((p, h) => {
    var v = Pr(Pr(Pr({
      key: "dot-".concat(h),
      r: 3
    }, c), u), {}, {
      index: h,
      cx: p.x,
      cy: p.y,
      dataKey: i,
      value: p.value,
      payload: p.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return c8(a, v);
  }), d = {
    clipPath: o ? "url(#clipPath-".concat(s ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Ie, Cr({
    className: "recharts-area-dots"
  }, d), l);
}
function d8(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, o = n.map((a) => {
    var i = {
      x: a.x,
      y: a.y,
      width: 0,
      height: 0
    };
    return Pr(Pr({}, i), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: void 0,
      viewBox: i,
      fill: void 0
    });
  });
  return /* @__PURE__ */ m.createElement(rm, {
    value: t ? o : null
  }, r);
}
function hw(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: o,
    props: a
  } = e, {
    layout: i,
    type: s,
    stroke: c,
    connectNulls: u,
    isRange: l
  } = a, {
    id: d
  } = a, p = dT(a, e8), h = ht(p);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, t?.length > 1 && /* @__PURE__ */ m.createElement(Ie, {
    clipPath: n ? "url(#clipPath-".concat(o, ")") : void 0
  }, /* @__PURE__ */ m.createElement(ro, Cr({}, h, {
    id: d,
    points: t,
    connectNulls: u,
    type: s,
    baseLine: r,
    layout: i,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ m.createElement(ro, Cr({}, h, {
    className: "recharts-area-curve",
    layout: i,
    type: s,
    connectNulls: u,
    fill: "none",
    points: t
  })), c !== "none" && l && /* @__PURE__ */ m.createElement(ro, Cr({}, h, {
    className: "recharts-area-curve",
    layout: i,
    type: s,
    connectNulls: u,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ m.createElement(u8, {
    points: t,
    props: p,
    clipPathId: o
  }));
}
function f8(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, a = n[0].y, i = n[n.length - 1].y;
  if (!ze(a) || !ze(i))
    return null;
  var s = t * Math.abs(a - i), c = Math.max(...n.map((u) => u.x || 0));
  return X(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.x || 0), c)), X(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: 0,
    y: a < i ? a : a - s,
    width: c + (o ? parseInt("".concat(o), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function p8(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, a = n[0].x, i = n[n.length - 1].x;
  if (!ze(a) || !ze(i))
    return null;
  var s = t * Math.abs(a - i), c = Math.max(...n.map((u) => u.y || 0));
  return X(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.y || 0), c)), X(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: a < i ? a : a - s,
    y: 0,
    width: s,
    height: Math.floor(c + (o ? parseInt("".concat(o), 10) : 1))
  }) : null;
}
function h8(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: o,
    strokeWidth: a
  } = e;
  return r === "vertical" ? /* @__PURE__ */ m.createElement(f8, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: a
  }) : /* @__PURE__ */ m.createElement(p8, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: a
  });
}
function m8(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: a
  } = e, {
    points: i,
    baseLine: s,
    isAnimationActive: c,
    animationBegin: u,
    animationDuration: l,
    animationEasing: d,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, v = Oo(n, "recharts-area-"), [f, g] = Ke(!1), y = !f, x = ve(() => {
    typeof h == "function" && h(), g(!1);
  }, [h]), b = ve(() => {
    typeof p == "function" && p(), g(!0);
  }, [p]), E = o.current, S = a.current;
  return /* @__PURE__ */ m.createElement(d8, {
    showLabels: y,
    points: i
  }, n.children, /* @__PURE__ */ m.createElement(Po, {
    animationId: v,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: x,
    onAnimationStart: b,
    key: v
  }, (P) => {
    if (E) {
      var O = E.length / i.length, A = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        P === 1 ? i : i.map((I, T) => {
          var M = Math.floor(T * O);
          if (E[M]) {
            var D = E[M];
            return Pr(Pr({}, I), {}, {
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
          return Pr(Pr({}, I), {}, {
            x: we(D.x, I.x, P),
            y: we(D.y, I.y, P)
          });
        }
        return I;
      }), P > 0 && (o.current = A, a.current = _), /* @__PURE__ */ m.createElement(hw, {
        points: A,
        baseLine: _,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return P > 0 && (o.current = i, a.current = s), /* @__PURE__ */ m.createElement(Ie, null, c && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ m.createElement(h8, {
      alpha: P,
      points: i,
      baseLine: s,
      layout: n.layout,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ m.createElement(Ie, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ m.createElement(hw, {
      points: i,
      baseLine: s,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ m.createElement(al, {
    label: n.label
  }));
}
function v8(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, o = me(null), a = me();
  return /* @__PURE__ */ m.createElement(m8, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: a
  });
}
class g8 extends ba {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: o,
      top: a,
      left: i,
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
    } = rT(r), x = cl(r), b = g * 2 + y;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ie, {
      className: v
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: f,
      xAxisId: c,
      yAxisId: u
    }), !x && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(f)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: i - b / 2,
      y: a - b / 2,
      width: l + b,
      height: d + b
    }))), /* @__PURE__ */ m.createElement(v8, {
      needClip: s,
      clipPathId: f,
      props: this.props
    })), /* @__PURE__ */ m.createElement(Of, {
      points: n,
      mainColor: Fs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ m.createElement(Of, {
      points: h,
      mainColor: Fs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }));
  }
}
var fT = {
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
function y8(e) {
  var t, r = qe(e, fT), {
    activeDot: n,
    animationBegin: o,
    animationDuration: a,
    animationEasing: i,
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
  } = r, y = dT(r, t8), x = La(), b = pC(), {
    needClip: E
  } = fl(f, g), S = ot(), {
    points: P,
    isRange: O,
    baseLine: A
  } = (t = Z((N) => Q6(N, f, g, S, e.id))) !== null && t !== void 0 ? t : {}, _ = dl();
  if (x !== "horizontal" && x !== "vertical" || _ == null || b !== "AreaChart" && b !== "ComposedChart")
    return null;
  var {
    height: I,
    width: T,
    x: M,
    y: D
  } = _;
  return !P || !P.length ? null : /* @__PURE__ */ m.createElement(g8, Cr({}, y, {
    activeDot: n,
    animationBegin: o,
    animationDuration: a,
    animationEasing: i,
    baseLine: A,
    connectNulls: s,
    dot: c,
    fill: u,
    fillOpacity: l,
    height: I,
    hide: d,
    layout: x,
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
var b8 = (e, t, r, n, o) => {
  var a = r ?? t;
  if (X(a))
    return a;
  var i = e === "horizontal" ? o : n, s = i.scale.domain();
  if (i.type === "number") {
    var c = Math.max(s[0], s[1]), u = Math.min(s[0], s[1]);
    return a === "dataMin" ? u : a === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
  }
  return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0];
};
function w8(e) {
  var {
    areaSettings: {
      connectNulls: t,
      baseValue: r,
      dataKey: n
    },
    stackedData: o,
    layout: a,
    chartBaseValue: i,
    xAxis: s,
    yAxis: c,
    displayedData: u,
    dataStartIndex: l,
    xAxisTicks: d,
    yAxisTicks: p,
    bandSize: h
  } = e, v = o && o.length, f = b8(a, i, r, s, c), g = a === "horizontal", y = !1, x = u.map((E, S) => {
    var P;
    v ? P = o[l + S] : (P = xe(E, n), Array.isArray(P) ? y = !0 : P = [f, P]);
    var O = P[1] == null || v && !t && xe(E, n) == null;
    return g ? {
      x: ms({
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
      y: ms({
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
  return v || y ? b = x.map((E) => {
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
    points: x,
    baseLine: b,
    isRange: y
  };
}
function x8(e) {
  var t = qe(e, fT), r = ot();
  return /* @__PURE__ */ m.createElement(ul, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: i8(t)
  }), /* @__PURE__ */ m.createElement(ll, {
    fn: s8,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: YO(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ m.createElement(y8, Cr({}, t, {
    id: n
  }))));
}
var pT = /* @__PURE__ */ m.memo(x8);
pT.displayName = "Area";
var E8 = ["dangerouslySetInnerHTML", "ticks"], S8 = ["id"], P8 = ["domain"], O8 = ["domain"];
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(null, arguments);
}
function Bs(e, t) {
  if (e == null) return {};
  var r, n, o = A8(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function A8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function C8(e) {
  var t = _e();
  return ur(() => (t(tH(e)), () => {
    t(rH(e));
  }), [e, t]), null;
}
var T8 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = Z(Wp), o = ot(), a = "xAxis", i = Z((g) => Ro(g, a, t, o)), s = Z((g) => KA(g, a, t, o)), c = Z((g) => BA(g, t)), u = Z((g) => U4(g, t)), l = Z((g) => xA(g, t));
  if (c == null || u == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: d,
    ticks: p
  } = e, h = Bs(e, E8), {
    id: v
  } = l, f = Bs(l, S8);
  return /* @__PURE__ */ m.createElement(ym, Tf({}, h, f, {
    scale: i,
    x: u.x,
    y: u.y,
    width: c.width,
    height: c.height,
    className: le("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: s
  }));
}, _8 = {
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
}, k8 = (e) => {
  var t, r, n, o, a, i = qe(e, _8);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(C8, {
    interval: (t = i.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: i.xAxisId,
    scale: i.scale,
    type: i.type,
    padding: i.padding,
    allowDataOverflow: i.allowDataOverflow,
    domain: i.domain,
    dataKey: i.dataKey,
    allowDuplicatedCategory: i.allowDuplicatedCategory,
    allowDecimals: i.allowDecimals,
    tickCount: i.tickCount,
    includeHidden: (r = i.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: i.reversed,
    ticks: i.ticks,
    height: i.height,
    orientation: i.orientation,
    mirror: i.mirror,
    hide: i.hide,
    unit: i.unit,
    name: i.name,
    angle: (n = i.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (o = i.minTickGap) !== null && o !== void 0 ? o : 5,
    tick: (a = i.tick) !== null && a !== void 0 ? a : !0,
    tickFormatter: i.tickFormatter
  }), /* @__PURE__ */ m.createElement(T8, i));
}, N8 = (e, t) => {
  var {
    domain: r
  } = e, n = Bs(e, P8), {
    domain: o
  } = t, a = Bs(t, O8);
  return ho(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : ho({
    domain: r
  }, {
    domain: o
  }) : !1;
}, hl = /* @__PURE__ */ m.memo(k8, N8);
hl.displayName = "XAxis";
var I8 = ["dangerouslySetInnerHTML", "ticks"], R8 = ["id"], M8 = ["domain"], D8 = ["domain"];
function _f() {
  return _f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _f.apply(null, arguments);
}
function zs(e, t) {
  if (e == null) return {};
  var r, n, o = j8(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function j8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $8(e) {
  var t = _e();
  return ur(() => (t(nH(e)), () => {
    t(oH(e));
  }), [e, t]), null;
}
var L8 = (e) => {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: o
  } = e, a = me(null), i = me(null), s = Z(Wp), c = ot(), u = _e(), l = "yAxis", d = Z((S) => Ro(S, l, t, c)), p = Z((S) => zA(S, t)), h = Z((S) => K4(S, t)), v = Z((S) => KA(S, l, t, c)), f = Z((S) => EA(S, t));
  if (ur(() => {
    if (!(n !== "auto" || !p || tm(o) || /* @__PURE__ */ Ut(o) || f == null)) {
      var S = a.current;
      if (S) {
        var P = S.getCalculatedWidth();
        Math.round(p.width) !== Math.round(P) && u(aH({
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
  } = e, x = zs(e, I8), {
    id: b
  } = f, E = zs(f, R8);
  return /* @__PURE__ */ m.createElement(ym, _f({}, x, E, {
    ref: a,
    labelRef: i,
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
}, F8 = {
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
}, B8 = (e) => {
  var t, r, n, o, a, i = qe(e, F8);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($8, {
    interval: (t = i.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: i.yAxisId,
    scale: i.scale,
    type: i.type,
    domain: i.domain,
    allowDataOverflow: i.allowDataOverflow,
    dataKey: i.dataKey,
    allowDuplicatedCategory: i.allowDuplicatedCategory,
    allowDecimals: i.allowDecimals,
    tickCount: i.tickCount,
    padding: i.padding,
    includeHidden: (r = i.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: i.reversed,
    ticks: i.ticks,
    width: i.width,
    orientation: i.orientation,
    mirror: i.mirror,
    hide: i.hide,
    unit: i.unit,
    name: i.name,
    angle: (n = i.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (o = i.minTickGap) !== null && o !== void 0 ? o : 5,
    tick: (a = i.tick) !== null && a !== void 0 ? a : !0,
    tickFormatter: i.tickFormatter
  }), /* @__PURE__ */ m.createElement(L8, i));
}, z8 = (e, t) => {
  var {
    domain: r
  } = e, n = zs(e, M8), {
    domain: o
  } = t, a = zs(t, D8);
  return ho(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : ho({
    domain: r
  }, {
    domain: o
  }) : !1;
}, ml = /* @__PURE__ */ m.memo(B8, z8);
ml.displayName = "YAxis";
var Ri = { exports: {} }, ld = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mw;
function U8() {
  if (mw) return ld;
  mw = 1;
  var e = Pt;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, s = e.useDebugValue;
  return ld.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
    var h = o(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else v = h.current;
    h = i(
      function() {
        function g(S) {
          if (!y) {
            if (y = !0, x = S, S = d(S), p !== void 0 && v.hasValue) {
              var P = v.value;
              if (p(P, S))
                return b = P;
            }
            return b = S;
          }
          if (P = b, r(x, S)) return P;
          var O = d(S);
          return p !== void 0 && p(P, O) ? (x = S, P) : (x = S, b = O);
        }
        var y = !1, x, b, E = l === void 0 ? null : l;
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
    return a(
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
var vw;
function W8() {
  return vw || (vw = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Pt, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, a = t.useEffect, i = t.useMemo, s = t.useDebugValue;
    ud.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
      var h = o(null);
      if (h.current === null) {
        var v = { hasValue: !1, value: null };
        h.current = v;
      } else v = h.current;
      h = i(
        function() {
          function g(S) {
            if (!y) {
              if (y = !0, x = S, S = d(S), p !== void 0 && v.hasValue) {
                var P = v.value;
                if (p(P, S))
                  return b = P;
              }
              return b = S;
            }
            if (P = b, r(x, S))
              return P;
            var O = d(S);
            return p !== void 0 && p(P, O) ? (x = S, P) : (x = S, b = O);
          }
          var y = !1, x, b, E = l === void 0 ? null : l;
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
      return a(
        function() {
          v.hasValue = !0, v.value = f;
        },
        [f]
      ), s(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ud;
}
var gw;
function K8() {
  return gw || (gw = 1, process.env.NODE_ENV === "production" ? Ri.exports = U8() : Ri.exports = W8()), Ri.exports;
}
K8();
function V8(e) {
  e();
}
function q8() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      V8(() => {
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
var yw = {
  notify() {
  },
  get: () => []
};
function H8(e, t) {
  let r, n = yw, o = 0, a = !1;
  function i(f) {
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
    return a;
  }
  function l() {
    o++, r || (r = e.subscribe(c), n = q8());
  }
  function d() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = yw);
  }
  function p() {
    a || (a = !0, l());
  }
  function h() {
    a && (a = !1, d());
  }
  const v = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return v;
}
var G8 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Y8 = /* @__PURE__ */ G8(), X8 = () => typeof navigator < "u" && navigator.product === "ReactNative", Z8 = /* @__PURE__ */ X8(), J8 = () => Y8 || Z8 ? m.useLayoutEffect : m.useEffect, Q8 = /* @__PURE__ */ J8(), eY = /* @__PURE__ */ Symbol.for("react-redux-context"), tY = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function rY() {
  if (!m.createContext) return {};
  const e = tY[eY] ??= /* @__PURE__ */ new Map();
  let t = e.get(m.createContext);
  return t || (t = m.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(m.createContext, t)), t;
}
var nY = /* @__PURE__ */ rY();
function oY(e) {
  const { children: t, context: r, serverState: n, store: o } = e, a = m.useMemo(() => {
    const c = H8(o), u = {
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
  }, [o, n]), i = m.useMemo(() => o.getState(), [o]);
  Q8(() => {
    const { subscription: c } = a;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), i !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [a, i]);
  const s = r || nY;
  return /* @__PURE__ */ m.createElement(s.Provider, { value: a }, t);
}
var aY = oY, iY = (e, t) => t, wm = C([iY, ce, yA, Ge, sC, Ur, GV, Ve], QV), xm = (e) => {
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
}, hT = Vt("mouseClick"), mT = ja();
mT.startListening({
  actionCreator: hT,
  effect: (e, t) => {
    var r = e.payload, n = wm(t.getState(), xm(r));
    n?.activeIndex != null && t.dispatch(nV({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var kf = Vt("mouseMove"), vT = ja();
vT.startListening({
  actionCreator: kf,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared), a = wm(n, xm(r));
    o === "axis" && (a?.activeIndex != null ? t.dispatch(JA({
      activeIndex: a.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: a.activeCoordinate
    })) : t.dispatch(ZA()));
  }
});
var bw = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, gT = Dt({
  name: "rootProps",
  initialState: bw,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : bw.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), sY = gT.reducer, {
  updateOptions: cY
} = gT.actions, yT = Dt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: lY
} = yT.actions, uY = yT.reducer, bT = Vt("keyDown"), wT = Vt("focus"), Em = ja();
Em.startListening({
  actionCreator: bT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var i = Number(Hh(o, Do(r))), s = Ur(r);
        if (a === "Enter") {
          var c = Is(r, "axis", "hover", String(o.index));
          t.dispatch(wf({
            active: !o.active,
            activeIndex: o.index,
            activeDataKey: o.dataKey,
            activeCoordinate: c
          }));
          return;
        }
        var u = G4(r), l = u === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, p = i + d * l;
        if (!(s == null || p >= s.length || p < 0)) {
          var h = Is(r, "axis", "hover", String(p));
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
  actionCreator: wT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip;
      if (!o.active && o.index == null) {
        var a = "0", i = Is(r, "axis", "hover", String(a));
        t.dispatch(wf({
          activeDataKey: void 0,
          active: !0,
          activeIndex: a,
          activeCoordinate: i
        }));
      }
    }
  }
});
var Ft = Vt("externalEvent"), xT = ja();
xT.startListening({
  actionCreator: Ft,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: FV(r),
        activeDataKey: dC(r),
        activeIndex: Qr(r),
        activeLabel: uC(r),
        activeTooltipIndex: Qr(r),
        isTooltipActive: BV(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var dY = C([Mo], (e) => e.tooltipItemPayloads), fY = C([dY, Xa, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
  var o = e.find((s) => s.settings.dataKey === n);
  if (o != null) {
    var {
      positions: a
    } = o;
    if (a != null) {
      var i = t(a, r);
      return i;
    }
  }
}), ET = Vt("touchMove"), ST = ja();
ST.startListening({
  actionCreator: ET,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared);
    if (o === "axis") {
      var a = wm(n, xm({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      a?.activeIndex != null && t.dispatch(JA({
        activeIndex: a.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: a.activeCoordinate
      }));
    } else if (o === "item") {
      var i, s = r.touches[0], c = document.elementFromPoint(s.clientX, s.clientY);
      if (!c || !c.getAttribute)
        return;
      var u = c.getAttribute(ZO), l = (i = c.getAttribute(JO)) !== null && i !== void 0 ? i : void 0, d = fY(t.getState(), u, l);
      t.dispatch(XA({
        activeDataKey: l,
        activeIndex: u,
        activeCoordinate: d
      }));
    }
  }
});
var pY = vO({
  brush: OG,
  cartesianAxis: iH,
  chartData: m5,
  errorBars: PH,
  graphicalItems: Oq,
  layout: CF,
  legend: RB,
  options: u5,
  polarAxis: L3,
  polarOptions: uY,
  referenceElements: IG,
  rootProps: sY,
  tooltip: oV
}), hY = function(t) {
  return JL({
    reducer: pY,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([mT.middleware, vT.middleware, Em.middleware, xT.middleware, ST.middleware]),
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
      return typeof r == "function" && (n = r()), n.concat(IO({
        type: "raf"
      }));
    },
    devTools: Lr.devToolsEnabled
  });
};
function PT(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, o = ot(), a = me(null);
  if (o)
    return r;
  a.current == null && (a.current = hY(t));
  var i = $p;
  return /* @__PURE__ */ m.createElement(aY, {
    context: i,
    store: a.current
  }, r);
}
function OT(e) {
  var {
    layout: t,
    margin: r
  } = e, n = _e(), o = ot();
  return Be(() => {
    o || (n(PF(t)), n(SF(r)));
  }, [n, o, t, r]), null;
}
function AT(e) {
  var t = _e();
  return Be(() => {
    t(cY(e));
  }, [t, e]), null;
}
var mY = ["children"];
function vY(e, t) {
  if (e == null) return {};
  var r, n, o = gY(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function gY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Us() {
  return Us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Us.apply(null, arguments);
}
var yY = {
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
}, bY = /* @__PURE__ */ De((e, t) => {
  var r = Vp(), n = qp(), o = i1();
  if (!co(r) || !co(n))
    return null;
  var {
    children: a,
    otherAttributes: i,
    title: s,
    desc: c
  } = e, u, l;
  return typeof i.tabIndex == "number" ? u = i.tabIndex : u = o ? 0 : void 0, typeof i.role == "string" ? l = i.role : l = o ? "application" : void 0, /* @__PURE__ */ m.createElement(Op, Us({}, i, {
    title: s,
    desc: c,
    role: l,
    tabIndex: u,
    width: r,
    height: n,
    style: yY,
    ref: t
  }), a);
}), wY = (e) => {
  var {
    children: t
  } = e, r = Z(Mc);
  if (!r)
    return null;
  var {
    width: n,
    height: o,
    y: a,
    x: i
  } = r;
  return /* @__PURE__ */ m.createElement(Op, {
    width: n,
    height: o,
    x: i,
    y: a
  }, t);
}, ww = /* @__PURE__ */ De((e, t) => {
  var {
    children: r
  } = e, n = vY(e, mY), o = ot();
  return o ? /* @__PURE__ */ m.createElement(wY, null, r) : /* @__PURE__ */ m.createElement(bY, Us({
    ref: t
  }, n), r);
});
function xY() {
  var e = _e(), [t, r] = Ke(null), n = Z(tB);
  return Be(() => {
    if (t != null) {
      var o = t.getBoundingClientRect(), a = o.width / t.offsetWidth;
      ze(a) && a !== n && e(AF(a));
    }
  }, [t, e, n]), r;
}
function xw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      SY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SY(e, t, r) {
  return (t = PY(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PY(e) {
  var t = OY(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function OY(e, t) {
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
var AY = () => (P5(), null);
function Ws(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var CY = /* @__PURE__ */ De((e, t) => {
  var r, n, o = me(null), [a, i] = Ke({
    containerWidth: Ws((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ws((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), s = ve((u, l) => {
    i((d) => {
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
  return Be(() => () => {
    var u = o.current;
    u?.disconnect();
  }, [s]), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Bn({
    ref: c
  }, e)));
}), TY = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n
  } = e, [o, a] = Ke({
    containerWidth: Ws(r),
    containerHeight: Ws(n)
  }), i = ve((c, u) => {
    a((l) => {
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
      i(u, l);
    }
  }, [t, i]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Bn({
    ref: s
  }, e)));
}), _Y = /* @__PURE__ */ De((e, t) => {
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
}), kY = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return kr(r) || kr(n) ? /* @__PURE__ */ m.createElement(TY, Bn({}, e, {
    ref: t
  })) : /* @__PURE__ */ m.createElement(_Y, Bn({}, e, {
    ref: t
  }));
});
function NY(e) {
  return e === !0 ? CY : kY;
}
var IY = /* @__PURE__ */ De((e, t) => {
  var {
    children: r,
    className: n,
    height: o,
    onClick: a,
    onContextMenu: i,
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
    responsive: x,
    dispatchTouchEvents: b = !0
  } = e, E = me(null), S = _e(), [P, O] = Ke(null), [A, _] = Ke(null), I = xY(), T = Kp(), M = T?.width > 0 ? T.width : y, D = T?.height > 0 ? T.height : o, N = ve((j) => {
    I(j), typeof t == "function" && t(j), O(j), _(j), j != null && (E.current = j);
  }, [I, t, O, _]), U = ve((j) => {
    S(hT(j)), S(Ft({
      handler: a,
      reactEvent: j
    }));
  }, [S, a]), L = ve((j) => {
    S(kf(j)), S(Ft({
      handler: u,
      reactEvent: j
    }));
  }, [S, u]), B = ve((j) => {
    S(ZA()), S(Ft({
      handler: l,
      reactEvent: j
    }));
  }, [S, l]), R = ve((j) => {
    S(kf(j)), S(Ft({
      handler: d,
      reactEvent: j
    }));
  }, [S, d]), F = ve(() => {
    S(wT());
  }, [S]), ee = ve((j) => {
    S(bT(j.key));
  }, [S]), ae = ve((j) => {
    S(Ft({
      handler: i,
      reactEvent: j
    }));
  }, [S, i]), ne = ve((j) => {
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
  }, [S, f]), $e = ve((j) => {
    b && S(ET(j)), S(Ft({
      handler: v,
      reactEvent: j
    }));
  }, [S, b, v]), K = ve((j) => {
    S(Ft({
      handler: h,
      reactEvent: j
    }));
  }, [S, h]), fe = NY(x);
  return /* @__PURE__ */ m.createElement(yC.Provider, {
    value: P
  }, /* @__PURE__ */ m.createElement(IP.Provider, {
    value: A
  }, /* @__PURE__ */ m.createElement(fe, {
    width: M ?? g?.width,
    height: D ?? g?.height,
    className: le("recharts-wrapper", n),
    style: EY({
      position: "relative",
      cursor: "default",
      width: M,
      height: D
    }, g),
    onClick: U,
    onContextMenu: ae,
    onDoubleClick: ne,
    onFocus: F,
    onKeyDown: ee,
    onMouseDown: te,
    onMouseEnter: L,
    onMouseLeave: B,
    onMouseMove: R,
    onMouseUp: oe,
    onTouchEnd: K,
    onTouchMove: $e,
    onTouchStart: ue,
    ref: N
  }, /* @__PURE__ */ m.createElement(AY, null), r)));
}), RY = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function MY(e, t) {
  if (e == null) return {};
  var r, n, o = DY(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function DY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var CT = /* @__PURE__ */ De((e, t) => {
  var {
    width: r,
    height: n,
    responsive: o,
    children: a,
    className: i,
    style: s,
    compact: c,
    title: u,
    desc: l
  } = e, d = MY(e, RY), p = ht(d);
  return c ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement(ww, {
    otherAttributes: p,
    title: u,
    desc: l
  }, a)) : /* @__PURE__ */ m.createElement(IY, {
    className: i,
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
  }, /* @__PURE__ */ m.createElement(ww, {
    otherAttributes: p,
    title: u,
    desc: l,
    ref: t
  }, /* @__PURE__ */ m.createElement(MG, null, a)));
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
var jY = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, $Y = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: jY,
  reverseStackOrder: !1,
  syncMethod: "index",
  responsive: !1
}, Sm = /* @__PURE__ */ De(function(t, r) {
  var n, o = qe(t.categoricalChartProps, $Y), {
    chartName: a,
    defaultTooltipEventType: i,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c,
    categoricalChartProps: u
  } = t, l = {
    chartName: a,
    defaultTooltipEventType: i,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ m.createElement(PT, {
    preloadedState: {
      options: l
    },
    reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : a
  }, /* @__PURE__ */ m.createElement(HC, {
    chartData: u.data
  }), /* @__PURE__ */ m.createElement(OT, {
    layout: o.layout,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(AT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(CT, Nf({}, o, {
    ref: r
  })));
}), LY = ["axis"], FY = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: LY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
})), BY = ["axis", "item"], zY = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: BY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
}));
function UY(e) {
  var t = _e();
  return Be(() => {
    t(lY(e));
  }, [t, e]), null;
}
var WY = ["layout"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(null, arguments);
}
function KY(e, t) {
  if (e == null) return {};
  var r, n, o = VY(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function VY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var qY = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, HY = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: qY,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1
}, GY = /* @__PURE__ */ De(function(t, r) {
  var n, o = qe(t.categoricalChartProps, HY), {
    layout: a
  } = o, i = KY(o, WY), {
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
  return /* @__PURE__ */ m.createElement(PT, {
    preloadedState: {
      options: d
    },
    reduxStoreName: (n = o.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ m.createElement(HC, {
    chartData: o.data
  }), /* @__PURE__ */ m.createElement(OT, {
    layout: a,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(AT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(UY, {
    cx: o.cx,
    cy: o.cy,
    startAngle: o.startAngle,
    endAngle: o.endAngle,
    innerRadius: o.innerRadius,
    outerRadius: o.outerRadius
  }), /* @__PURE__ */ m.createElement(CT, If({}, i, {
    ref: r
  })));
}), YY = ["item"], XY = {
  layout: "centric",
  startAngle: 0,
  endAngle: 360,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, ZY = /* @__PURE__ */ De((e, t) => {
  var r = qe(e, XY);
  return /* @__PURE__ */ m.createElement(GY, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: YY,
    tooltipPayloadSearcher: rl,
    categoricalChartProps: r,
    ref: t
  });
}), JY = ["axis"], QY = /* @__PURE__ */ De((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: JY,
  tooltipPayloadSearcher: rl,
  categoricalChartProps: e,
  ref: t
}));
const e9 = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: a = !0,
    showTooltip: i = !0,
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
    return /* @__PURE__ */ w("div", { ref: p, className: u, children: /* @__PURE__ */ w(Dc, { width: s, height: c, children: /* @__PURE__ */ W(zY, { data: e, layout: d, children: [
      o && /* @__PURE__ */ w(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ w(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ w(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ w(nl, {}),
      a && /* @__PURE__ */ w(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ w(
        VC,
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
e9.displayName = "BarChart";
const t9 = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: a = !0,
    showTooltip: i = !0,
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
    return /* @__PURE__ */ w("div", { ref: p, className: l, children: /* @__PURE__ */ w(Dc, { width: c, height: u, children: /* @__PURE__ */ W(FY, { data: e, children: [
      o && /* @__PURE__ */ w(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ w(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ w(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ w(nl, {}),
      a && /* @__PURE__ */ w(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ w(
        aT,
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
t9.displayName = "LineChart";
const r9 = m.forwardRef(
  ({
    data: e,
    dataKeys: t,
    xAxisKey: r = "name",
    colors: n,
    showGrid: o = !0,
    showLegend: a = !0,
    showTooltip: i = !0,
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
    return /* @__PURE__ */ w("div", { ref: p, className: u, children: /* @__PURE__ */ w(Dc, { width: s, height: c, children: /* @__PURE__ */ W(QY, { data: e, children: [
      o && /* @__PURE__ */ w(pl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ w(
        hl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ w(
        ml,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ w(nl, {}),
      a && /* @__PURE__ */ w(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ w(
        pT,
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
r9.displayName = "AreaChart";
const n9 = m.forwardRef(
  ({
    data: e,
    dataKey: t = "value",
    nameKey: r = "name",
    colors: n,
    showLabels: o = !0,
    showLegend: a = !0,
    showTooltip: i = !0,
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
    return /* @__PURE__ */ w("div", { ref: h, className: p, children: /* @__PURE__ */ w(Dc, { width: l, height: d, children: /* @__PURE__ */ W(ZY, { children: [
      /* @__PURE__ */ w(
        BC,
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
          children: e.map((y, x) => /* @__PURE__ */ w(Ja, { fill: f[x % f.length] }, `cell-${x}`))
        }
      ),
      i && /* @__PURE__ */ w(nl, {}),
      a && /* @__PURE__ */ w(Wn, {})
    ] }) }) });
  }
);
n9.displayName = "PieChart";
const NX = ({
  title: e,
  subtitle: t,
  logo: r,
  user: n,
  menuItems: o = [],
  menuGroups: a = [],
  initialCollapsed: i = !0,
  onLogout: s,
  onNotificationClick: c,
  hasNotifications: u = !1,
  breadcrumbs: l = [],
  children: d
}) => {
  const [p, h] = m.useState(i);
  return /* @__PURE__ */ W("div", { className: "relative min-h-screen bg-background", children: [
    /* @__PURE__ */ w(
      EP,
      {
        title: e,
        subtitle: t,
        logo: r,
        items: o,
        groups: a,
        isCollapsed: p,
        onToggleCollapse: () => h(!p),
        onLogout: s
      }
    ),
    /* @__PURE__ */ w(
      AP,
      {
        isCollapsed: p,
        breadcrumbs: l,
        user: {
          name: n.name,
          role: n.role,
          avatar: n.avatar
        },
        onNotificationClick: c,
        hasNotifications: u
      }
    ),
    /* @__PURE__ */ w(
      "main",
      {
        className: z(
          "transition-all duration-300 pt-[60px] min-h-screen",
          p ? "ml-[80px]" : "ml-[260px]"
        ),
        children: /* @__PURE__ */ w("div", { className: "w-full h-full p-6", children: d })
      }
    )
  ] });
}, IX = ({
  title: e,
  icon: t,
  actions: r = [],
  showDefaultActions: n = !0,
  onAdd: o,
  onEdit: a,
  onDelete: i,
  onRefresh: s,
  children: c,
  className: u
}) => {
  const l = [];
  n && (o && l.push({
    key: "add",
    label: "Incluir",
    icon: /* @__PURE__ */ w($_, { className: "h-4 w-4" }),
    variant: "primary",
    onClick: o
  }), a && l.push({
    key: "edit",
    label: "Editar",
    icon: /* @__PURE__ */ w(W_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: a
  }), i && l.push({
    key: "delete",
    label: "Excluir",
    icon: /* @__PURE__ */ w(H_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: i
  }));
  const d = [...l, ...r];
  return /* @__PURE__ */ W("div", { className: z("flex flex-col h-full w-full", u), children: [
    /* @__PURE__ */ W("div", { className: "flex items-center justify-between mb-6 pb-4 border-b", children: [
      /* @__PURE__ */ W("div", { className: "flex items-center gap-3", children: [
        t && /* @__PURE__ */ w("div", { className: "flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary", children: t }),
        /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ w("h1", { className: "text-2xl font-bold text-foreground tracking-tight", children: e }),
          s && /* @__PURE__ */ w(
            "button",
            {
              onClick: s,
              className: "p-1.5 rounded-md transition-colors hover:bg-accent text-muted-foreground hover:text-foreground",
              title: "Atualizar",
              children: /* @__PURE__ */ w(F_, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      d.length > 0 && /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: d.map((p) => /* @__PURE__ */ W(
        Gi,
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
    /* @__PURE__ */ w("div", { className: "flex-1 overflow-auto", children: c })
  ] });
};
function RX({
  columns: e,
  data: t,
  loading: r = !1,
  rowKey: n,
  selectable: o,
  selectedRows: a = [],
  onSelectionChange: i,
  onRowClick: s,
  className: c,
  emptyText: u = "Nenhum registro encontrado"
}) {
  const l = o !== void 0 ? o : !!i, d = (f) => typeof n == "function" ? n(f) : f[n], p = (f) => {
    const g = d(f);
    return a.some((y) => d(y) === g);
  }, h = (f, g) => {
    if (!l || !i) return;
    const y = d(f), x = p(f);
    if (g.ctrlKey || g.metaKey)
      i(x ? a.filter((b) => d(b) !== y) : [...a, f]);
    else if (g.shiftKey && a.length > 0) {
      const b = d(a[a.length - 1]), E = t.findIndex((I) => d(I) === y), S = t.findIndex((I) => d(I) === b), P = Math.min(E, S), O = Math.max(E, S), A = t.slice(P, O + 1), _ = [...a];
      A.forEach((I) => {
        const T = d(I);
        _.some((M) => d(M) === T) || _.push(I);
      }), i(_);
    } else
      i(x ? [] : [f]);
  }, v = (f) => {
    f.target === f.currentTarget && l && i && i([]);
  };
  return /* @__PURE__ */ w(
    "div",
    {
      className: z("rounded-md border", c),
      onClick: v,
      children: /* @__PURE__ */ W(yP, { children: [
        /* @__PURE__ */ w(bP, { children: /* @__PURE__ */ w(Xo, { children: e.map((f) => /* @__PURE__ */ w(
          xP,
          {
            style: f.width ? { width: f.width } : void 0,
            children: f.title
          },
          f.key
        )) }) }),
        /* @__PURE__ */ w(wP, { children: r ? /* @__PURE__ */ w(Xo, { children: /* @__PURE__ */ w(
          zi,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground",
            children: "Carregando..."
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ w(Xo, { children: /* @__PURE__ */ w(
          zi,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground",
            children: u
          }
        ) }) : t.map((f, g) => {
          const y = d(f), x = p(f);
          return /* @__PURE__ */ w(
            Xo,
            {
              "data-state": x ? "selected" : "",
              onClick: (b) => {
                l ? h(f, b) : s?.(f);
              },
              className: z(
                l || s ? "cursor-pointer" : "",
                l && "select-none",
                x && "!bg-secondary/20"
              ),
              children: e.map((b) => {
                const E = b.dataIndex ? f[b.dataIndex] : void 0;
                return /* @__PURE__ */ w(zi, { children: b.render ? b.render(E, f, g) : E || "-" }, b.key);
              })
            },
            y
          );
        }) })
      ] })
    }
  );
}
function MX({
  columns: e,
  data: t,
  rowKey: r,
  selectedRow: n,
  onRowSelect: o,
  renderDetail: a,
  renderPagination: i,
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
  return /* @__PURE__ */ W("div", { className: z("grid grid-cols-1 lg:grid-cols-12 gap-6", u), children: [
    /* @__PURE__ */ w(
      "div",
      {
        className: z("lg:col-span-7", l),
        style: { gridColumn: `span ${p[0]} / span ${p[0]}` },
        children: /* @__PURE__ */ W(Di, { className: "overflow-hidden", children: [
          /* @__PURE__ */ w("div", { className: "overflow-x-auto", children: /* @__PURE__ */ W("table", { className: "w-full", children: [
            /* @__PURE__ */ w("thead", { children: /* @__PURE__ */ w("tr", { className: "border-b bg-muted/50", children: e.map((f) => /* @__PURE__ */ w(
              "th",
              {
                className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground text-sm",
                style: f.width ? { width: f.width } : void 0,
                children: f.title
              },
              f.key
            )) }) }),
            /* @__PURE__ */ w("tbody", { children: t.length === 0 ? /* @__PURE__ */ w("tr", { children: /* @__PURE__ */ w(
              "td",
              {
                colSpan: e.length,
                className: "text-center py-8 text-muted-foreground text-sm",
                children: "Nenhum registro encontrado"
              }
            ) }) : t.map((f) => {
              const g = h(f), y = n && h(n) === g;
              return /* @__PURE__ */ w(
                "tr",
                {
                  onClick: () => v(f),
                  className: z(
                    "border-b transition-colors cursor-pointer",
                    y ? "bg-secondary/20" : "hover:bg-muted/50"
                  ),
                  children: e.map((x) => {
                    const b = x.dataIndex ? f[x.dataIndex] : void 0;
                    return /* @__PURE__ */ w("td", { className: "px-4 py-2 align-middle", children: x.render ? x.render(b, f) : b || "-" }, x.key);
                  })
                },
                g
              );
            }) })
          ] }) }),
          i && /* @__PURE__ */ w("div", { className: "border-t", children: i() })
        ] })
      }
    ),
    /* @__PURE__ */ w(
      "div",
      {
        className: z("lg:col-span-5", d),
        style: { gridColumn: `span ${p[1]} / span ${p[1]}` },
        children: n && a ? /* @__PURE__ */ w(Di, { className: "sticky top-6", children: a(n) }) : /* @__PURE__ */ W(Di, { className: "p-12 flex flex-col items-center justify-center text-center min-h-[400px]", children: [
          /* @__PURE__ */ w(A_, { className: "h-12 w-12 text-muted-foreground mb-4" }),
          /* @__PURE__ */ w("h4", { className: "text-lg font-semibold mb-2", children: s }),
          /* @__PURE__ */ w("p", { className: "text-sm text-muted-foreground max-w-sm", children: c })
        ] })
      }
    )
  ] });
}
const DX = B0, jX = z0, $X = nc, o9 = U0, TT = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  Qs,
  {
    className: z(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
TT.displayName = Qs.displayName;
const a9 = Ea(
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
), i9 = m.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ W(o9, { children: [
  /* @__PURE__ */ w(TT, {}),
  /* @__PURE__ */ W(
    ec,
    {
      ref: o,
      className: z(a9({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ W(nc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ w(Bf, { className: "h-4 w-4" }),
          /* @__PURE__ */ w("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
i9.displayName = ec.displayName;
const s9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: z(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
s9.displayName = "SheetHeader";
const c9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: z(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
c9.displayName = "SheetFooter";
const l9 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  tc,
  {
    ref: r,
    className: z("text-lg font-semibold text-foreground", e),
    ...t
  }
));
l9.displayName = tc.displayName;
const u9 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ w(
  rc,
  {
    ref: r,
    className: z("text-sm text-muted-foreground", e),
    ...t
  }
));
u9.displayName = rc.displayName;
const d9 = [
  { value: "default", label: "Graphite", color: "bg-slate-600" },
  { value: "ocean", label: "Ocean", color: "bg-cyan-600" },
  { value: "forest", label: "Forest", color: "bg-green-600" },
  { value: "twilight", label: "Twilight", color: "bg-purple-600" },
  { value: "sunset", label: "Sunset", color: "bg-orange-600" },
  { value: "flamingo", label: "Flamingo", color: "bg-pink-500" }
];
function LX() {
  const { theme: e, setTheme: t } = OP(), [r, n] = m.useState(!1);
  return /* @__PURE__ */ W("div", { className: "relative", children: [
    /* @__PURE__ */ w(
      "button",
      {
        onClick: () => n(!r),
        className: "p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
        title: "Trocar tema",
        children: /* @__PURE__ */ w(Hw, { className: "h-5 w-5" })
      }
    ),
    r && /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ w(
        "div",
        {
          className: "fixed inset-0 z-40",
          onClick: () => n(!1)
        }
      ),
      /* @__PURE__ */ W("div", { className: "absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-md shadow-lg z-50 p-2", children: [
        /* @__PURE__ */ w("div", { className: "text-xs font-semibold text-muted-foreground px-2 py-1 mb-1", children: "Temas" }),
        d9.map((o) => /* @__PURE__ */ W(
          "button",
          {
            onClick: () => {
              t(o.value), n(!1);
            },
            className: z(
              "w-full flex items-center gap-3 px-2 py-2 rounded-sm transition-colors hover:bg-accent text-sm",
              e === o.value && "bg-accent"
            ),
            children: [
              /* @__PURE__ */ w(
                "div",
                {
                  className: z(
                    "w-4 h-4 rounded-full",
                    o.color
                  )
                }
              ),
              /* @__PURE__ */ w("span", { className: "flex-1 text-left", children: o.label }),
              e === o.value && /* @__PURE__ */ w(oo, { className: "h-4 w-4 text-primary" })
            ]
          },
          o.value
        ))
      ] })
    ] })
  ] });
}
const FX = ({
  children: e,
  isAuthenticated: t,
  redirectTo: r = "/"
}) => {
  const n = Bw();
  return t ? e : /* @__PURE__ */ w(n_, { to: r, state: { from: n }, replace: !0 });
};
function _T(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: f9 } = Object.prototype, { getPrototypeOf: Pm } = Object, { iterator: vl, toStringTag: kT } = Symbol, gl = /* @__PURE__ */ ((e) => (t) => {
  const r = f9.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nr = (e) => (e = e.toLowerCase(), (t) => gl(t) === e), yl = (e) => (t) => typeof t === e, { isArray: jo } = Array, mo = yl("undefined");
function ei(e) {
  return e !== null && !mo(e) && e.constructor !== null && !mo(e.constructor) && bt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const NT = nr("ArrayBuffer");
function p9(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && NT(e.buffer), t;
}
const h9 = yl("string"), bt = yl("function"), IT = yl("number"), ti = (e) => e !== null && typeof e == "object", m9 = (e) => e === !0 || e === !1, Vi = (e) => {
  if (gl(e) !== "object")
    return !1;
  const t = Pm(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(kT in e) && !(vl in e);
}, v9 = (e) => {
  if (!ti(e) || ei(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, g9 = nr("Date"), y9 = nr("File"), b9 = nr("Blob"), w9 = nr("FileList"), x9 = (e) => ti(e) && bt(e.pipe), E9 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || bt(e.append) && ((t = gl(e)) === "formdata" || // detect form-data instance
  t === "object" && bt(e.toString) && e.toString() === "[object FormData]"));
}, S9 = nr("URLSearchParams"), [P9, O9, A9, C9] = ["ReadableStream", "Request", "Response", "Headers"].map(nr), T9 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ri(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), jo(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (ei(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (n = 0; n < i; n++)
      s = a[n], t.call(null, e[s], s, e);
  }
}
function RT(e, t) {
  if (ei(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, MT = (e) => !mo(e) && e !== bn;
function Rf() {
  const { caseless: e, skipUndefined: t } = MT(this) && this || {}, r = {}, n = (o, a) => {
    const i = e && RT(r, a) || a;
    Vi(r[i]) && Vi(o) ? r[i] = Rf(r[i], o) : Vi(o) ? r[i] = Rf({}, o) : jo(o) ? r[i] = o.slice() : (!t || !mo(o)) && (r[i] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ri(arguments[o], n);
  return r;
}
const _9 = (e, t, r, { allOwnKeys: n } = {}) => (ri(t, (o, a) => {
  r && bt(o) ? e[a] = _T(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), k9 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), N9 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, I9 = (e, t, r, n) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = r !== !1 && Pm(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, R9 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, M9 = (e) => {
  if (!e) return null;
  if (jo(e)) return e;
  let t = e.length;
  if (!IT(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, D9 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pm(Uint8Array)), j9 = (e, t) => {
  const n = (e && e[vl]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, $9 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, L9 = nr("HTMLFormElement"), F9 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Ew = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), B9 = nr("RegExp"), DT = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ri(r, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(e, n);
}, z9 = (e) => {
  DT(e, (t, r) => {
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
}, U9 = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return jo(e) ? n(e) : n(String(e).split(t)), r;
}, W9 = () => {
}, K9 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function V9(e) {
  return !!(e && bt(e.append) && e[kT] === "FormData" && e[vl]);
}
const q9 = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ti(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (ei(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = jo(n) ? [] : {};
        return ri(n, (i, s) => {
          const c = r(i, o + 1);
          !mo(c) && (a[s] = c);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, H9 = nr("AsyncFunction"), G9 = (e) => e && (ti(e) || bt(e)) && bt(e.then) && bt(e.catch), jT = ((e, t) => e ? setImmediate : t ? ((r, n) => (bn.addEventListener("message", ({ source: o, data: a }) => {
  o === bn && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), bn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  bt(bn.postMessage)
), Y9 = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || jT, X9 = (e) => e != null && bt(e[vl]), k = {
  isArray: jo,
  isArrayBuffer: NT,
  isBuffer: ei,
  isFormData: E9,
  isArrayBufferView: p9,
  isString: h9,
  isNumber: IT,
  isBoolean: m9,
  isObject: ti,
  isPlainObject: Vi,
  isEmptyObject: v9,
  isReadableStream: P9,
  isRequest: O9,
  isResponse: A9,
  isHeaders: C9,
  isUndefined: mo,
  isDate: g9,
  isFile: y9,
  isBlob: b9,
  isRegExp: B9,
  isFunction: bt,
  isStream: x9,
  isURLSearchParams: S9,
  isTypedArray: D9,
  isFileList: w9,
  forEach: ri,
  merge: Rf,
  extend: _9,
  trim: T9,
  stripBOM: k9,
  inherits: N9,
  toFlatObject: I9,
  kindOf: gl,
  kindOfTest: nr,
  endsWith: R9,
  toArray: M9,
  forEachEntry: j9,
  matchAll: $9,
  isHTMLForm: L9,
  hasOwnProperty: Ew,
  hasOwnProp: Ew,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: DT,
  freezeMethods: z9,
  toObjectSet: U9,
  toCamelCase: F9,
  noop: W9,
  toFiniteNumber: K9,
  findKey: RT,
  global: bn,
  isContextDefined: MT,
  isSpecCompliantForm: V9,
  toJSONObject: q9,
  isAsyncFn: H9,
  isThenable: G9,
  setImmediate: jT,
  asap: Y9,
  isIterable: X9
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
const $T = re.prototype, LT = {};
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
  LT[e] = { value: e };
});
Object.defineProperties(re, LT);
Object.defineProperty($T, "isAxiosError", { value: !0 });
re.from = (e, t, r, n, o, a) => {
  const i = Object.create($T);
  k.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return re.call(i, s, c, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", a && Object.assign(i, a), i;
};
const Z9 = null;
function Mf(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function FT(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sw(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = FT(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function J9(e) {
  return k.isArray(e) && !e.some(Mf);
}
const Q9 = k.toFlatObject(k, {}, null, function(t) {
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
  const n = r.metaTokens, o = r.visitor || l, a = r.dots, i = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
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
      else if (k.isArray(v) && J9(v) || (k.isFileList(v) || k.endsWith(f, "[]")) && (y = k.toArray(v)))
        return f = FT(f), y.forEach(function(b, E) {
          !(k.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Sw([f], E, a) : i === null ? f : f + "[]",
            u(b)
          );
        }), !1;
    }
    return Mf(v) ? !0 : (t.append(Sw(g, f, a), u(v)), !1);
  }
  const d = [], p = Object.assign(Q9, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Mf
  });
  function h(v, f) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      d.push(v), k.forEach(v, function(y, x) {
        (!(k.isUndefined(y) || y === null) && o.call(
          t,
          y,
          k.isString(x) ? x.trim() : x,
          f,
          p
        )) === !0 && h(y, f ? f.concat(x) : [x]);
      }), d.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Pw(e) {
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
const BT = Om.prototype;
BT.append = function(t, r) {
  this._pairs.push([t, r]);
};
BT.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Pw);
  } : Pw;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function e7(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function zT(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || e7;
  k.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = k.isURLSearchParams(t) ? t.toString() : new Om(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ow {
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
const UT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, t7 = typeof URLSearchParams < "u" ? URLSearchParams : Om, r7 = typeof FormData < "u" ? FormData : null, n7 = typeof Blob < "u" ? Blob : null, o7 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: t7,
    FormData: r7,
    Blob: n7
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Am = typeof window < "u" && typeof document < "u", Df = typeof navigator == "object" && navigator || void 0, a7 = Am && (!Df || ["ReactNative", "NativeScript", "NS"].indexOf(Df.product) < 0), i7 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", s7 = Am && window.location.href || "http://localhost", c7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Am,
  hasStandardBrowserEnv: a7,
  hasStandardBrowserWebWorkerEnv: i7,
  navigator: Df,
  origin: s7
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...c7,
  ...o7
};
function l7(e, t) {
  return bl(e, new st.classes.URLSearchParams(), {
    visitor: function(r, n, o, a) {
      return st.isNode && k.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function u7(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function d7(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function WT(e) {
  function t(r, n, o, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= r.length;
    return i = !i && k.isArray(o) ? o.length : i, c ? (k.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !k.isObject(o[i])) && (o[i] = []), t(r, n, o[i], a) && k.isArray(o[i]) && (o[i] = d7(o[i])), !s);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const r = {};
    return k.forEachEntry(e, (n, o) => {
      t(u7(n), o, r, 0);
    }), r;
  }
  return null;
}
function f7(e, t, r) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ni = {
  transitional: UT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = k.isObject(t);
    if (a && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return o ? JSON.stringify(WT(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return l7(t, this.formSerializer).toString();
      if ((s = k.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return bl(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), f7(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ni.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (s) {
        if (i)
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
    FormData: st.classes.FormData,
    Blob: st.classes.Blob
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
  ni.headers[e] = {};
});
const p7 = k.toObjectSet([
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
]), h7 = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && p7[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Aw = Symbol("internals");
function Ho(e) {
  return e && String(e).trim().toLowerCase();
}
function qi(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(qi) : String(e);
}
function m7(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const v7 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function g7(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function y7(e, t) {
  const r = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, a, i) {
        return this[n].call(this, t, o, a, i);
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
    function a(s, c, u) {
      const l = Ho(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = k.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = qi(s));
    }
    const i = (s, c) => k.forEach(s, (u, l) => a(u, l, c));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (k.isString(t) && (t = t.trim()) && !v7(t))
      i(h7(t), r);
    else if (k.isObject(t) && k.isIterable(t)) {
      let s = {}, c, u;
      for (const l of t) {
        if (!k.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = l[0]] = (c = s[u]) ? k.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(s, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ho(t), t) {
      const n = k.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return m7(o);
        if (k.isFunction(r))
          return r.call(this, o, n);
        if (k.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ho(t), t) {
      const n = k.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || dd(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = Ho(i), i) {
        const s = k.findKey(n, i);
        s && (!r || dd(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return k.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || dd(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return k.forEach(this, (o, a) => {
      const i = k.findKey(n, a);
      if (i) {
        r[i] = qi(o), delete r[a];
        return;
      }
      const s = t ? g7(a) : String(a).trim();
      s !== a && delete r[a], r[s] = qi(o), n[s] = !0;
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
    const n = (this[Aw] = this[Aw] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = Ho(i);
      n[s] || (y7(o, i), n[s] = !0);
    }
    return k.isArray(t) ? t.forEach(a) : a(t), this;
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
  const r = this || ni, n = t || r, o = wt.from(n.headers);
  let a = n.data;
  return k.forEach(e, function(s) {
    a = s.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function KT(e) {
  return !!(e && e.__CANCEL__);
}
function $o(e, t, r) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
k.inherits($o, re, {
  __CANCEL__: !0
});
function VT(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new re(
    "Request failed with status code " + r.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function b7(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function w7(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = n[a];
    i || (i = u), r[o] = c, n[o] = u;
    let d = a, p = 0;
    for (; d !== o; )
      p += r[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - i < t)
      return;
    const h = l && u - l;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function x7(e, t) {
  let r = 0, n = 1e3 / t, o, a;
  const i = (u, l = Date.now()) => {
    r = l, o = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - r;
    d >= n ? i(u, l) : (o = u, a || (a = setTimeout(() => {
      a = null, i(o);
    }, n - d)));
  }, () => o && i(o)];
}
const Ks = (e, t, r = 3) => {
  let n = 0;
  const o = w7(50, 250);
  return x7((a) => {
    const i = a.loaded, s = a.lengthComputable ? a.total : void 0, c = i - n, u = o(c), l = i <= s;
    n = i;
    const d = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s && l ? (s - i) / u : void 0,
      event: a,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, Cw = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Tw = (e) => (...t) => k.asap(() => e(...t)), E7 = st.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, st.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(st.origin),
  st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)
) : () => !0, S7 = st.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, a, i) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      k.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), k.isString(n) && s.push(`path=${n}`), k.isString(o) && s.push(`domain=${o}`), a === !0 && s.push("secure"), k.isString(i) && s.push(`SameSite=${i}`), document.cookie = s.join("; ");
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
function P7(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function O7(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function qT(e, t, r) {
  let n = !P7(t);
  return e && (n || r == !1) ? O7(e, t) : t;
}
const _w = (e) => e instanceof wt ? { ...e } : e;
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
  function a(u, l) {
    if (!k.isUndefined(l))
      return n(void 0, l);
  }
  function i(u, l) {
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
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (u, l, d) => o(_w(u), _w(l), d, !0)
  };
  return k.forEach(Object.keys({ ...e, ...t }), function(l) {
    const d = c[l] || o, p = d(e[l], t[l], l);
    k.isUndefined(p) && d !== s || (r[l] = p);
  }), r;
}
const HT = (e) => {
  const t = zn({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  if (t.headers = i = wt.from(i), t.url = zT(qT(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), k.isFormData(r)) {
    if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (k.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, d]) => {
        u.includes(l.toLowerCase()) && i.set(l, d);
      });
    }
  }
  if (st.hasStandardBrowserEnv && (n && k.isFunction(n) && (n = n(t)), n || n !== !1 && E7(t.url))) {
    const c = o && a && S7.read(a);
    c && i.set(o, c);
  }
  return t;
}, A7 = typeof XMLHttpRequest < "u", C7 = A7 && function(e) {
  return new Promise(function(r, n) {
    const o = HT(e);
    let a = o.data;
    const i = wt.from(o.headers).normalize();
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
      VT(function(O) {
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
      const S = o.transitional || UT;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), n(new re(
        E,
        S.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in g && k.forEach(i.toJSON(), function(E, S) {
      g.setRequestHeader(S, E);
    }), k.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), u && ([p, v] = Ks(u, !0), g.addEventListener("progress", p)), c && g.upload && ([d, h] = Ks(c), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (b) => {
      g && (n(!b || b.type ? new $o(null, e, g) : b), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const x = b7(o.url);
    if (x && st.protocols.indexOf(x) === -1) {
      n(new re("Unsupported protocol " + x + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, T7 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, s();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof re ? l : new $o(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: c } = n;
    return c.unsubscribe = () => k.asap(s), c;
  }
}, _7 = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, k7 = async function* (e, t) {
  for await (const r of N7(e))
    yield* _7(r, t);
}, N7 = async function* (e) {
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
}, kw = (e, t, r, n) => {
  const o = k7(e, t);
  let a = 0, i, s = (c) => {
    i || (i = !0, n && n(c));
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
          let p = a += d;
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
}, Nw = 64 * 1024, { isFunction: Mi } = k, I7 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(k.global), {
  ReadableStream: Iw,
  TextEncoder: Rw
} = k.global, Mw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, R7 = (e) => {
  e = k.merge.call({
    skipUndefined: !0
  }, I7, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Mi(t) : typeof fetch == "function", a = Mi(r), i = Mi(n);
  if (!o)
    return !1;
  const s = o && Mi(Iw), c = o && (typeof Rw == "function" ? /* @__PURE__ */ ((v) => (f) => v.encode(f))(new Rw()) : async (v) => new Uint8Array(await new r(v).arrayBuffer())), u = a && s && Mw(() => {
    let v = !1;
    const f = new r(st.origin, {
      body: new Iw(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }).headers.has("Content-Type");
    return v && !f;
  }), l = i && s && Mw(() => k.isReadableStream(new n("").body)), d = {
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
      return (await new r(st.origin, {
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
      signal: x,
      cancelToken: b,
      timeout: E,
      onDownloadProgress: S,
      onUploadProgress: P,
      responseType: O,
      headers: A,
      withCredentials: _ = "same-origin",
      fetchOptions: I
    } = HT(v), T = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let M = T7([x, b && b.toAbortSignal()], E), D = null;
    const N = M && M.unsubscribe && (() => {
      M.unsubscribe();
    });
    let U;
    try {
      if (P && u && g !== "get" && g !== "head" && (U = await h(A, y)) !== 0) {
        let ae = new r(f, {
          method: "POST",
          body: y,
          duplex: "half"
        }), ne;
        if (k.isFormData(y) && (ne = ae.headers.get("content-type")) && A.setContentType(ne), ae.body) {
          const [te, oe] = Cw(
            U,
            Ks(Tw(P))
          );
          y = kw(ae.body, Nw, te, oe);
        }
      }
      k.isString(_) || (_ = _ ? "include" : "omit");
      const L = a && "credentials" in r.prototype, B = {
        ...I,
        signal: M,
        method: g.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: L ? _ : void 0
      };
      D = a && new r(f, B);
      let R = await (a ? T(D, I) : T(f, B));
      const F = l && (O === "stream" || O === "response");
      if (l && (S || F && N)) {
        const ae = {};
        ["status", "statusText", "headers"].forEach((ue) => {
          ae[ue] = R[ue];
        });
        const ne = k.toFiniteNumber(R.headers.get("content-length")), [te, oe] = S && Cw(
          ne,
          Ks(Tw(S), !0)
        ) || [];
        R = new n(
          kw(R.body, Nw, te, () => {
            oe && oe(), N && N();
          }),
          ae
        );
      }
      O = O || "text";
      let ee = await d[k.findKey(d, O) || "text"](R, v);
      return !F && N && N(), await new Promise((ae, ne) => {
        VT(ae, ne, {
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
}, M7 = /* @__PURE__ */ new Map(), GT = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, a = [
    n,
    o,
    r
  ];
  let i = a.length, s = i, c, u, l = M7;
  for (; s--; )
    c = a[s], u = l.get(c), u === void 0 && l.set(c, u = s ? /* @__PURE__ */ new Map() : R7(t)), l = u;
  return u;
};
GT();
const Cm = {
  http: Z9,
  xhr: C7,
  fetch: {
    get: GT
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
const Dw = (e) => `- ${e}`, D7 = (e) => k.isFunction(e) || e === null || e === !1;
function j7(e, t) {
  e = k.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const a = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let s;
    if (o = n, !D7(n) && (o = Cm[(s = String(n)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${s}'`);
    if (o && (k.isFunction(o) || (o = o.get(t))))
      break;
    a[s || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? i.length > 1 ? `since :
` + i.map(Dw).join(`
`) : " " + Dw(i[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const YT = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: j7,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cm
};
function pd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $o(null, e);
}
function jw(e) {
  return pd(e), e.headers = wt.from(e.headers), e.data = fd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), YT.getAdapter(e.adapter || ni.adapter, e)(e).then(function(n) {
    return pd(e), n.data = fd.call(
      e,
      e.transformResponse,
      n
    ), n.headers = wt.from(n.headers), n;
  }, function(n) {
    return KT(n) || (pd(e), n && n.response && (n.response.data = fd.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = wt.from(n.response.headers))), Promise.reject(n);
  });
}
const XT = "1.13.1", wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $w = {};
wl.transitional = function(t, r, n) {
  function o(a, i) {
    return "[Axios v" + XT + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new re(
        o(i, " has been removed" + (r ? " in " + r : "")),
        re.ERR_DEPRECATED
      );
    return r && !$w[i] && ($w[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
wl.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function $7(e, t, r) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = t[a];
    if (i) {
      const s = e[a], c = s === void 0 || i(s, a, e);
      if (c !== !0)
        throw new re("option " + a + " must be " + c, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new re("Unknown option " + a, re.ERR_BAD_OPTION);
  }
}
const Hi = {
  assertOptions: $7,
  validators: wl
}, or = Hi.validators;
let On = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ow(),
      response: new Ow()
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
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = zn(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Hi.assertOptions(n, {
      silentJSONParsing: or.transitional(or.boolean),
      forcedJSONParsing: or.transitional(or.boolean),
      clarifyTimeoutError: or.transitional(or.boolean)
    }, !1), o != null && (k.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Hi.assertOptions(o, {
      encode: or.function,
      serialize: or.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Hi.assertOptions(r, {
      baseUrl: or.spelling("baseURL"),
      withXsrfToken: or.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && k.merge(
      a.common,
      a[r.method]
    );
    a && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete a[v];
      }
    ), r.headers = wt.concat(i, a);
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
      const v = [jw.bind(this), void 0];
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
      l = jw.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = u.length; d < p; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = zn(this.defaults, t);
    const r = qT(t.baseURL, t.url, t.allowAbsoluteUrls);
    return zT(r, t.params, t.paramsSerializer);
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
    return function(a, i, s) {
      return this.request(zn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  On.prototype[t] = r(), On.prototype[t + "Form"] = r(!0);
});
let L7 = class ZT {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, s) {
      n.reason || (n.reason = new $o(a, i, s), r(n.reason));
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
      token: new ZT(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function F7(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function B7(e) {
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
function JT(e) {
  const t = new On(e), r = _T(On.prototype.request, t);
  return k.extend(r, On.prototype, t, { allOwnKeys: !0 }), k.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return JT(zn(e, o));
  }, r;
}
const Re = JT(ni);
Re.Axios = On;
Re.CanceledError = $o;
Re.CancelToken = L7;
Re.isCancel = KT;
Re.VERSION = XT;
Re.toFormData = bl;
Re.AxiosError = re;
Re.Cancel = Re.CanceledError;
Re.all = function(t) {
  return Promise.all(t);
};
Re.spread = F7;
Re.isAxiosError = B7;
Re.mergeConfig = zn;
Re.AxiosHeaders = wt;
Re.formToJSON = (e) => WT(k.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = YT.getAdapter;
Re.HttpStatusCode = jf;
Re.default = Re;
const {
  Axios: UX,
  AxiosError: WX,
  CanceledError: KX,
  isCancel: VX,
  CancelToken: qX,
  VERSION: HX,
  all: GX,
  Cancel: YX,
  isAxiosError: XX,
  spread: ZX,
  toFormData: JX,
  AxiosHeaders: QX,
  HttpStatusCode: eZ,
  formToJSON: tZ,
  getAdapter: rZ,
  mergeConfig: nZ
} = Re;
let mn = null, $f = "";
const oZ = (e) => {
  mn = e;
}, aZ = (e) => {
  $f = e, br.updateBaseURL(e);
};
class z7 {
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
              const a = await Re.post(
                `${$f}/auth/RefreshToken`,
                { refreshToken: o },
                {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ), { accessToken: i, refreshToken: s } = a.data;
              return localStorage.setItem("@IdentityProvider:accessToken", i), s && localStorage.setItem("@IdentityProvider:refreshToken", s), r.headers.Authorization = `Bearer ${i}`, this.instance(r);
            } catch (a) {
              return localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), Promise.reject(a);
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
      let o = n.message || n.title, a = n.errors;
      if (!a && typeof n == "object" && !o) {
        const i = Object.keys(n);
        if (i.length > 0 && i.every((c) => Array.isArray(n[c]))) {
          a = n;
          const c = i.length;
          o = c === 1 ? "Erro de validação no formulário" : `${c} erros de validação no formulário`;
        }
      }
      if (!o && a) {
        const i = Object.keys(a).length;
        o = i === 1 ? "Erro de validação no formulário" : `${i} erros de validação no formulário`;
      }
      return o || (o = "Erro na requisição"), {
        message: o,
        status: r,
        errors: a,
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
const br = new z7();
class hd {
  static async identify(t) {
    return (await br.post("/auth/IdentifyUser", {
      username: t.username,
      password: t.password
    })).data;
  }
  static async loginWithContract(t) {
    const n = (await br.post("/auth/LoginWithContract", t)).data, { accessToken: o, refreshToken: a, user: i, contract: s } = n;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", a), localStorage.setItem("@IdentityProvider:user", JSON.stringify(i)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(s)), n;
  }
  static async login(t) {
    const n = (await br.post("/auth/login", {
      username: t.username,
      password: t.password
    })).data, { accessToken: o, refreshToken: a, user: i } = n;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", a), localStorage.setItem("@IdentityProvider:user", JSON.stringify(i)), n;
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
      await br.post("/auth/Logout");
    } finally {
      this.logout();
    }
  }
  static async logoutAllDevices() {
    try {
      await br.post("/auth/LogoutAllDevices");
    } finally {
      this.logout();
    }
  }
  static async refreshAccessToken() {
    const t = this.getRefreshToken();
    if (!t)
      throw new Error("Refresh token não encontrado");
    try {
      const n = (await br.post("/auth/RefreshToken", {
        refreshToken: t
      })).data, { accessToken: o, refreshToken: a } = n;
      return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", a), n;
    } catch (r) {
      throw this.logout(), r;
    }
  }
  static async revokeRefreshToken(t) {
    const r = t || this.getRefreshToken();
    r && await br.post("/auth/RevokeRefreshToken", {
      refreshToken: r
    });
  }
  static async getActiveSessions() {
    return (await br.get("/auth/GetActiveSessions")).data;
  }
  static isTokenExpiringSoon(t, r = 5) {
    try {
      const o = JSON.parse(atob(t.split(".")[1])).exp * 1e3, a = Date.now();
      return (o - a) / (1e3 * 60) <= r;
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
const QT = m.createContext(null), U7 = () => {
  const e = m.useContext(QT);
  if (!e)
    throw new Error("useAuth must be used within AuthProvider");
  return e;
}, iZ = ({ children: e, onLogout: t }) => {
  const [r, n] = m.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:user");
    return y ? JSON.parse(y) : null;
  }), [o, a] = m.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:contract");
    return y ? JSON.parse(y) : null;
  }), [i, s] = m.useState(() => localStorage.getItem("@IdentityProvider:accessToken")), [c, u] = m.useState(() => localStorage.getItem("@IdentityProvider:refreshToken")), l = m.useCallback((y) => {
    n(y.user), a(y.contract), s(y.accessToken), u(y.refreshToken), localStorage.setItem("@IdentityProvider:user", JSON.stringify(y.user)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(y.contract)), localStorage.setItem("@IdentityProvider:accessToken", y.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", y.refreshToken);
  }, []), d = m.useCallback(() => {
    n(null), a(null), s(null), u(null), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), t?.();
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
        const x = { ...r, ...y };
        n(x), localStorage.setItem("@IdentityProvider:user", JSON.stringify(x));
      }
    },
    [r]
  ), g = !!r && !!i;
  return /* @__PURE__ */ w(
    QT.Provider,
    {
      value: {
        user: r,
        contract: o,
        accessToken: i,
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
}, sZ = ({
  redirectTo: e = "/",
  identityProviderUrl: t,
  onSuccess: r,
  onError: n
}) => {
  const o = zw(), [a] = o_(), { login: i } = U7();
  return Be(() => {
    (async () => {
      try {
        const c = a.get("accessToken"), u = a.get("refreshToken");
        if (!c || !u)
          throw new Error("Tokens não encontrados na URL");
        i({
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
  }, [a, i, o, e, t, r, n]), /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background gap-6", children: /* @__PURE__ */ w("div", { className: "w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" }) });
}, cZ = () => {
  const [e, t] = m.useState({});
  return {
    fieldErrors: e,
    setErrors: (a) => {
      if (a.errors) {
        const i = {};
        Object.keys(a.errors).forEach((s) => {
          const c = s.charAt(0).toLowerCase() + s.slice(1);
          i[c] = a.errors[s][0];
        }), t(i);
      }
    },
    clearErrors: () => {
      t({});
    },
    getError: (a) => e[a] || ""
  };
};
function lZ(e = {}) {
  const [t, r] = Ke({
    data: null,
    loading: !1,
    error: null
  });
  return {
    ...t,
    execute: async (a) => {
      r((i) => ({ ...i, loading: !0, error: null }));
      try {
        const i = await a(), s = i && typeof i == "object" && ("total" in i || "page" in i) ? i : i.data || i;
        return r({
          data: s,
          loading: !1,
          error: null
        }), e.onSuccess && e.onSuccess(s), e.showSuccessMessage && i.message && Rd({
          title: "Sucesso",
          description: i.message
        }), s;
      } catch (i) {
        const s = i.isApiError ? i : {
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
const uZ = (e) => {
  const t = zw(), r = Bw(), n = e.basePath || "", o = (c) => {
    const u = n + c;
    return r.pathname === u || c !== "/" && r.pathname.startsWith(u);
  }, a = (c) => {
    t(n + c);
  }, i = (c, u, l, d) => ({
    key: c,
    label: u,
    icon: d,
    active: o(l),
    onClick: () => a(l)
  });
  return {
    isActive: o,
    handleNavigate: a,
    createMenuItem: i,
    createMenuGroup: (c, u) => ({
      label: c,
      items: u.map((l) => i(l.key, l.label, l.path, l.icon))
    }),
    currentPath: r.pathname
  };
};
export {
  NX as AppLayout,
  r9 as AreaChart,
  iZ as AuthProvider,
  hd as AuthService,
  G7 as Badge,
  e9 as BarChart,
  SP as Breadcrumb,
  Gi as Button,
  sZ as Callback,
  Di as Card,
  Dk as CardContent,
  Mk as CardDescription,
  jk as CardFooter,
  Ik as CardHeader,
  Rk as CardTitle,
  p2 as ChartContainer,
  Zk as Checkbox,
  hI as ConfirmModal,
  RX as DataTable,
  MX as DataTableWithDetail,
  J7 as Dropdown,
  oD as DropdownCheckboxItem,
  rD as DropdownContent,
  eX as DropdownGroup,
  nD as DropdownItem,
  iD as DropdownLabel,
  tX as DropdownPortal,
  nX as DropdownRadioGroup,
  aD as DropdownRadioItem,
  sD as DropdownSeparator,
  cD as DropdownShortcut,
  rX as DropdownSub,
  tD as DropdownSubContent,
  eD as DropdownSubTrigger,
  Q7 as DropdownTrigger,
  CP as GlobalLoader,
  pX as GlobalLoaderProvider,
  o0 as Input,
  t9 as LineChart,
  dI as Modal,
  Z7 as ModalClose,
  K0 as ModalContent,
  G0 as ModalDescription,
  q0 as ModalFooter,
  V0 as ModalHeader,
  W0 as ModalOverlay,
  fI as ModalPortal,
  H0 as ModalTitle,
  X7 as ModalTrigger,
  AP as Navbar,
  H7 as ODataHelper,
  IX as PageLayout,
  n9 as PieChart,
  FX as ProtectedRoute,
  ej as RadioGroup,
  tj as RadioGroupItem,
  WD as SearchableSelect,
  FD as Select,
  aS as SelectContent,
  oX as SelectGroup,
  iS as SelectItem,
  zD as SelectLabel,
  oS as SelectScrollDownButton,
  nS as SelectScrollUpButton,
  UD as SelectSeparator,
  rS as SelectTrigger,
  BD as SelectValue,
  DX as Sheet,
  $X as SheetClose,
  i9 as SheetContent,
  u9 as SheetDescription,
  c9 as SheetFooter,
  s9 as SheetHeader,
  TT as SheetOverlay,
  o9 as SheetPortal,
  l9 as SheetTitle,
  jX as SheetTrigger,
  EP as Sidebar,
  l2 as SidebarContent,
  u2 as SidebarFooter,
  c2 as SidebarHeader,
  d2 as SidebarNav,
  f2 as SidebarNavItem,
  sj as Switch,
  yP as Table,
  wP as TableBody,
  s2 as TableCaption,
  zi as TableCell,
  i2 as TableFooter,
  xP as TableHead,
  bP as TableHeader,
  Xo as TableRow,
  aX as Tabs,
  pj as TabsContent,
  dj as TabsList,
  fj as TabsTrigger,
  dX as ThemeProvider,
  LX as ThemeSelector,
  iP as Toast,
  Mj as ToastAction,
  sP as ToastClose,
  lP as ToastDescription,
  Ij as ToastProvider,
  cP as ToastTitle,
  aP as ToastViewport,
  iX as Toaster,
  lX as Tooltip,
  a2 as TooltipContent,
  cX as TooltipProvider,
  uX as TooltipTrigger,
  $k as badgeVariants,
  Nk as buttonVariants,
  z as cn,
  br as httpClient,
  Lj as reducer,
  aZ as setApiBaseURL,
  oZ as setGlobalLoaderContext,
  Rd as toast,
  lZ as useApi,
  uZ as useAppNavigation,
  U7 as useAuth,
  cZ as useFormErrors,
  fX as useGlobalLoader,
  OP as useTheme,
  Fj as useToast
};
