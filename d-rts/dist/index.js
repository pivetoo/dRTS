import { jsx as b, Fragment as gt, jsxs as j } from "react/jsx-runtime";
import * as m from "react";
import Ot, { forwardRef as je, createElement as ta, useState as Ke, useLayoutEffect as ur, isValidElement as Wt, useContext as er, createContext as Mt, PureComponent as wa, useCallback as ve, useMemo as Dr, useRef as me, useImperativeHandle as Bw, useEffect as Fe, cloneElement as xa, Children as t_, Component as r_ } from "react";
import * as Ea from "react-dom";
import n_, { createPortal as Fw } from "react-dom";
import { useLocation as zw, Navigate as o_, useNavigate as Uw, useSearchParams as a_ } from "react-router-dom";
function _m(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qs(...e) {
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
  return m.useCallback(qs(...e), e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  const t = /* @__PURE__ */ s_(e), r = m.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = m.Children.toArray(a), c = s.find(l_);
    if (c) {
      const u = c.props.children, l = s.map((d) => d === c ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ b(t, { ...i, ref: o, children: m.isValidElement(u) ? m.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ b(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var i_ = /* @__PURE__ */ An("Slot");
// @__NO_SIDE_EFFECTS__
function s_(e) {
  const t = m.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (m.isValidElement(o)) {
      const i = d_(o), s = u_(a, o.props);
      return o.type !== m.Fragment && (s.ref = n ? qs(n, i) : i), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ww = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function c_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ b(gt, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ww, t;
}
function l_(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ww;
}
function u_(e, t) {
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
function d_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Kw(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Kw(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ue() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Kw(e)) && (n && (n += " "), n += t);
  return n;
}
const Nm = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, km = ue, Sa = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return km(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((u) => {
    const l = r?.[u], d = a?.[u];
    if (l === null) return null;
    const p = Nm(l) || Nm(d);
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
  return km(e, i, c, r?.class, r?.className);
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), p_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Im = (e) => {
  const t = p_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Vw = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), h_ = (e) => {
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
var m_ = {
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
const v_ = je(
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
      ...m_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Vw("lucide", o),
      ...!a && !h_(s) && { "aria-hidden": "true" },
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
const Le = (e, t) => {
  const r = je(
    ({ className: n, ...o }, a) => ta(v_, {
      ref: a,
      iconNode: t,
      className: Vw(
        `lucide-${f_(Im(e))}`,
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
const g_ = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Rm = Le("bell", g_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Qn = Le("check", y_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ra = Le("chevron-down", b_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], x_ = Le("chevron-left", w_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Bf = Le("chevron-right", E_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], qw = Le("chevron-up", S_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], O_ = Le("circle-alert", P_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Hw = Le("circle", A_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], T_ = Le("languages", C_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], N_ = Le("loader-circle", __);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], I_ = Le("log-out", k_);
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
], M_ = Le("moon", R_);
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
], Gw = Le("palette", D_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], L_ = Le("plus", j_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $_ = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], B_ = Le("refresh-cw", $_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], z_ = Le("search", F_);
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
], W_ = Le("square-pen", U_);
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
], V_ = Le("sun", K_);
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
], H_ = Le("trash-2", q_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Y_ = Le("user", G_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X_ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ff = Le("x", X_), zf = "-", Z_ = (e) => {
  const t = Q_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(zf);
      return s[0] === "" && s.length !== 1 && s.shift(), Yw(s, t) || J_(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, Yw = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Yw(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(zf);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, Mm = /^\[(.+)\]$/, J_ = (e) => {
  if (Mm.test(e)) {
    const t = Mm.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
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
    vd(r[o], n, o, t);
  return n;
}, vd = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Dm(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (eN(o)) {
        vd(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      vd(i, Dm(t, a), r, n);
    });
  });
}, Dm = (e, t) => {
  let r = e;
  return t.split(zf).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, eN = (e) => e.isThemeGetter, tN = (e) => {
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
}, gd = "!", yd = ":", rN = yd.length, nN = (e) => {
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
        if (f === yd) {
          a.push(o.slice(c, v)), c = v + rN;
          continue;
        }
        if (f === "/") {
          u = v;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" ? i-- : f === "(" ? s++ : f === ")" && s--;
    }
    const l = a.length === 0 ? o : o.substring(c), d = oN(l), p = d !== l, h = u && u > c ? u - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + yd, a = n;
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
}, oN = (e) => e.endsWith(gd) ? e.substring(0, e.length - 1) : e.startsWith(gd) ? e.substring(1) : e, aN = (e) => {
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
}, iN = (e) => ({
  cache: tN(e.cacheSize),
  parseClassName: nN(e),
  sortModifiers: aN(e),
  ...Z_(e)
}), sN = /\s+/, cN = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(sN);
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
    const w = a(p).join(":"), x = h ? w + gd : w, E = x + y;
    if (i.includes(E))
      continue;
    i.push(E);
    const S = o(y, g);
    for (let P = 0; P < S.length; ++P) {
      const O = S[P];
      i.push(x + O);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function lN() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Xw(t)) && (n && (n += " "), n += r);
  return n;
}
const Xw = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Xw(e[n])) && (r && (r += " "), r += t);
  return r;
};
function uN(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const u = t.reduce((l, d) => d(l), e());
    return r = iN(u), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const l = cN(c, r);
    return o(c, l), l;
  }
  return function() {
    return a(lN.apply(null, arguments));
  };
}
const Ue = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Zw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jw = /^\((?:(\w[\w-]*):)?(.+)\)$/i, dN = /^\d+\/\d+$/, fN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, mN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => dN.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), Wr = (e) => !!e && Number.isInteger(Number(e)), El = (e) => e.endsWith("%") && ie(e.slice(0, -1)), yr = (e) => fN.test(e), gN = () => !0, yN = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pN.test(e) && !hN.test(e)
), Qw = () => !1, bN = (e) => mN.test(e), wN = (e) => vN.test(e), xN = (e) => !Y(e) && !X(e), EN = (e) => vo(e, r0, Qw), Y = (e) => Zw.test(e), dn = (e) => vo(e, n0, yN), Sl = (e) => vo(e, CN, ie), jm = (e) => vo(e, e0, Qw), SN = (e) => vo(e, t0, wN), ai = (e) => vo(e, o0, bN), X = (e) => Jw.test(e), $o = (e) => go(e, n0), PN = (e) => go(e, TN), Lm = (e) => go(e, e0), ON = (e) => go(e, r0), AN = (e) => go(e, t0), ii = (e) => go(e, o0, !0), vo = (e, t, r) => {
  const n = Zw.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, go = (e, t, r = !1) => {
  const n = Jw.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, e0 = (e) => e === "position" || e === "percentage", t0 = (e) => e === "image" || e === "url", r0 = (e) => e === "length" || e === "size" || e === "bg-size", n0 = (e) => e === "length", CN = (e) => e === "number", TN = (e) => e === "family-name", o0 = (e) => e === "shadow", _N = () => {
  const e = Ue("color"), t = Ue("font"), r = Ue("text"), n = Ue("font-weight"), o = Ue("tracking"), a = Ue("leading"), i = Ue("breakpoint"), s = Ue("container"), c = Ue("spacing"), u = Ue("radius"), l = Ue("shadow"), d = Ue("inset-shadow"), p = Ue("text-shadow"), h = Ue("drop-shadow"), v = Ue("blur"), f = Ue("perspective"), g = Ue("aspect"), y = Ue("ease"), w = Ue("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], S = () => [...E(), X, Y], P = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], A = () => [X, Y, c], C = () => [qn, "full", "auto", ...A()], N = () => [Wr, "none", "subgrid", X, Y], _ = () => ["auto", {
    span: ["full", Wr, X, Y]
  }, Wr, X, Y], R = () => [Wr, "auto", X, Y], D = () => ["auto", "min", "max", "fr", X, Y], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...A()], F = () => [qn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], M = () => [e, X, Y], z = () => [...E(), Lm, jm, {
    position: [X, Y]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], W = () => ["auto", "cover", "contain", ON, EN, {
    size: [X, Y]
  }], re = () => [El, $o, dn], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    X,
    Y
  ], oe = () => ["", ie, $o, dn], ce = () => ["solid", "dashed", "dotted", "double"], ke = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [ie, El, Lm, jm], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    Y
  ], L = () => ["none", ie, X, Y], H = () => ["none", ie, X, Y], Q = () => [ie, X, Y], $ = () => [qn, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [yr],
      breakpoint: [yr],
      color: [gN],
      container: [yr],
      "drop-shadow": [yr],
      ease: ["in", "out", "in-out"],
      font: [xN],
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
        aspect: ["auto", "square", qn, Y, X, g]
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
        columns: [ie, Y, X, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        inset: C()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": C()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": C()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: C()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: C()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: C()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: C()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: C()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: C()
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
        z: [Wr, "auto", X, Y]
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
        flex: [ie, qn, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, X, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, X, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Wr, "first", "last", "none", X, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": R()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": R()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": N()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": R()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": R()
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
        justify: [...k(), "normal"]
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
        content: ["normal", ...k()]
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
        "place-content": k()
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
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
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
        size: F()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...F()]
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
          ...F()
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
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...F()]
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
        font: [n, X, Sl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", El, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [PN, Y, t]
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
        tracking: [o, X, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ie, "none", X, Sl]
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
        "list-image": ["none", X, Y]
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
        list: ["disc", "decimal", "none", X, Y]
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
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
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
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ie, "from-font", "auto", X, dn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ie, "auto", X, Y]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, Y]
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
        content: ["none", X, Y]
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
        bg: z()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ne()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: W()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Wr, X, Y],
          radial: ["", X, Y],
          conic: [Wr, X, Y]
        }, AN, SN]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: re()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: re()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: re()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
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
        border: [...ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ce(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ce(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ie, X, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, $o, dn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
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
          ii,
          ai
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, ii, ai]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
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
        ring: M()
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
        "ring-offset": M()
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
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, ii, ai]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ie, X, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ke(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ke()
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
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
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
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
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
        mask: z()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ne()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: W()
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
        mask: ["none", X, Y]
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
          X,
          Y
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
        brightness: [ie, X, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, X, Y]
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
          ii,
          ai
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ie, X, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, X, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, X, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, X, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, X, Y]
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
          X,
          Y
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
        "backdrop-brightness": [ie, X, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, X, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, X, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, X, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, X, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, X, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, X, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, X, Y]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, Y]
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
        duration: [ie, "initial", X, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, X, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ie, X, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, X, Y]
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
        perspective: [f, X, Y]
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
        rotate: L()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": L()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": L()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": L()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: H()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": H()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": H()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": H()
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
        skew: Q()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Q()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Q()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, Y, "", "none", "gpu", "cpu"]
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
        accent: M()
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
        caret: M()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, Y]
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
        "will-change": ["auto", "scroll", "contents", "transform", X, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ie, $o, dn, Sl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
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
}, NN = /* @__PURE__ */ uN(_N);
class q7 {
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
function K(...e) {
  return NN(ue(e));
}
const kN = Sa(
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
), Yi = m.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, loading: o = !1, fullWidth: a = !1, icon: i, iconPosition: s = "left", children: c, disabled: u, ...l }, d) => {
    const p = n ? i_ : "button", h = u || o;
    return /* @__PURE__ */ j(
      p,
      {
        className: K(
          kN({ variant: t, size: r, className: e }),
          a && "w-full"
        ),
        ref: d,
        disabled: h,
        ...l,
        children: [
          o && /* @__PURE__ */ b(N_, { className: "animate-spin" }),
          !o && i && s === "left" && i,
          c,
          !o && i && s === "right" && i
        ]
      }
    );
  }
);
Yi.displayName = "Button";
const ji = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: K(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
ji.displayName = "Card";
const IN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: K("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
IN.displayName = "CardHeader";
const RN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: K(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
RN.displayName = "CardTitle";
const MN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
MN.displayName = "CardDescription";
const DN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: K("p-6 pt-0", e), ...t }));
DN.displayName = "CardContent";
const jN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: K("flex items-center p-6 pt-0", e),
    ...t
  }
));
jN.displayName = "CardFooter";
const a0 = m.forwardRef(
  ({ className: e, type: t, error: r, helperText: n, ...o }, a) => /* @__PURE__ */ j("div", { className: "w-full", children: [
    /* @__PURE__ */ b(
      "input",
      {
        type: t,
        className: K(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          r && "border-destructive focus-visible:ring-destructive",
          e
        ),
        ref: a,
        ...o
      }
    ),
    n && /* @__PURE__ */ b("p", { className: K(
      "mt-1 text-xs",
      r ? "text-destructive" : "text-muted-foreground"
    ), children: n })
  ] })
);
a0.displayName = "Input";
const LN = Sa(
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
function H7({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ b("div", { className: K(LN({ variant: t }), e), ...r });
}
function $N(e, t) {
  const r = m.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ b(r.Provider, { value: c, children: i });
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
function Et(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = m.createContext(i), c = r.length;
    r = [...r, i];
    const u = (d) => {
      const { scope: p, children: h, ...v } = d, f = p?.[e]?.[c] || s, g = m.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ b(f.Provider, { value: g, children: h });
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
  return o.scopeName = e, [n, BN(o, ...t)];
}
function BN(...e) {
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
function q(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var nt = globalThis?.document ? m.useLayoutEffect : () => {
}, FN = m[" useInsertionEffect ".trim().toString()] || nt;
function Vt({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = zN({
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
        const d = UN(l) ? l(e) : l;
        d !== e && i.current?.(d);
      } else
        a(l);
    },
    [s, e, a, i]
  );
  return [c, u];
}
function zN({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), o = m.useRef(r), a = m.useRef(t);
  return FN(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function UN(e) {
  return typeof e == "function";
}
function Hs(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Gs(e) {
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
function WN(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var Dt = (e) => {
  const { present: t, children: r } = e, n = KN(t), o = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), a = se(n.ref, VN(o));
  return typeof r == "function" || n.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
Dt.displayName = "Presence";
function KN(e) {
  const [t, r] = m.useState(), n = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = WN(i, {
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
    const u = si(n.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), nt(() => {
    const u = n.current, l = o.current;
    if (l !== e) {
      const p = a.current, h = si(u);
      e ? c("MOUNT") : h === "none" || u?.display === "none" ? c("UNMOUNT") : c(l && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), nt(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const f = si(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && f && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = si(n.current));
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
function si(e) {
  return e?.animationName || "none";
}
function VN(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var qN = [
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
], ee = qN.reduce((e, t) => {
  const r = /* @__PURE__ */ An(`Primitive.${t}`), n = m.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ b(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Uf(e, t) {
  e && Ea.flushSync(() => e.dispatchEvent(t));
}
var Ys = "Checkbox", [HN] = Et(Ys), [GN, Wf] = HN(Ys);
function YN(e) {
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
  } = e, [p, h] = Vt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Ys
  }), [v, f] = m.useState(null), [g, y] = m.useState(null), w = m.useRef(!1), x = v ? !!i || !!v.closest("form") : (
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
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: Yr(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ b(
    GN,
    {
      scope: t,
      ...E,
      children: XN(d) ? d(E) : n
    }
  );
}
var i0 = "CheckboxTrigger", s0 = m.forwardRef(
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
    } = Wf(i0, e), f = se(o, l), g = m.useRef(c);
    return m.useEffect(() => {
      const y = a?.form;
      if (y) {
        const w = () => d(g.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, d]), /* @__PURE__ */ b(
      ee.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Yr(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": f0(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...n,
        ref: f,
        onKeyDown: q(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: q(r, (y) => {
          d((w) => Yr(w) ? !0 : !w), v && h && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
s0.displayName = i0;
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
    return /* @__PURE__ */ b(
      YN,
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
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ b(
            s0,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ b(
            d0,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Kf.displayName = Ys;
var c0 = "CheckboxIndicator", l0 = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = Wf(c0, r);
    return /* @__PURE__ */ b(
      Dt,
      {
        present: n || Yr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ b(
          ee.span,
          {
            "data-state": f0(a.checked),
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
l0.displayName = c0;
var u0 = "CheckboxBubbleInput", d0 = m.forwardRef(
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
    } = Wf(u0, e), v = se(r, h), f = Hs(a), g = Gs(n);
    m.useEffect(() => {
      const w = p;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, P = !o.current;
      if (f !== a && S) {
        const O = new Event("click", { bubbles: P });
        w.indeterminate = Yr(a), S.call(w, Yr(a) ? !1 : a), w.dispatchEvent(O);
      }
    }, [p, f, a, o]);
    const y = m.useRef(Yr(a) ? !1 : a);
    return /* @__PURE__ */ b(
      ee.input,
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
d0.displayName = u0;
function XN(e) {
  return typeof e == "function";
}
function Yr(e) {
  return e === "indeterminate";
}
function f0(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ZN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  Kf,
  {
    ref: r,
    className: K(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(
      l0,
      {
        className: K("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ b(Qn, { className: "h-4 w-4" })
      }
    )
  }
));
ZN.displayName = Kf.displayName;
var JN = m[" useId ".trim().toString()] || (() => {
}), QN = 0;
function Nt(e) {
  const [t, r] = m.useState(JN());
  return nt(() => {
    r((n) => n ?? String(QN++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function pt(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...r) => t.current?.(...r), []);
}
function ek(e, t = globalThis?.document) {
  const r = pt(e);
  m.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var tk = "DismissableLayer", bd = "dismissableLayer.update", rk = "dismissableLayer.pointerDownOutside", nk = "dismissableLayer.focusOutside", $m, p0 = m.createContext({
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
    } = e, u = m.useContext(p0), [l, d] = m.useState(null), p = l?.ownerDocument ?? globalThis?.document, [, h] = m.useState({}), v = se(t, (O) => d(O)), f = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = f.indexOf(g), w = l ? f.indexOf(l) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = ak((O) => {
      const A = O.target, C = [...u.branches].some((N) => N.contains(A));
      !E || C || (o?.(O), i?.(O), O.defaultPrevented || s?.());
    }, p), P = ik((O) => {
      const A = O.target;
      [...u.branches].some((N) => N.contains(A)) || (a?.(O), i?.(O), O.defaultPrevented || s?.());
    }, p);
    return ek((O) => {
      w === u.layers.size - 1 && (n?.(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
    }, p), m.useEffect(() => {
      if (l)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($m = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Bm(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $m);
        };
    }, [l, p, r, u]), m.useEffect(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Bm());
    }, [l, u]), m.useEffect(() => {
      const O = () => h({});
      return document.addEventListener(bd, O), () => document.removeEventListener(bd, O);
    }, []), /* @__PURE__ */ b(
      ee.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: x ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
yo.displayName = tk;
var ok = "DismissableLayerBranch", h0 = m.forwardRef((e, t) => {
  const r = m.useContext(p0), n = m.useRef(null), o = se(t, n);
  return m.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ b(ee.div, { ...e, ref: o });
});
h0.displayName = ok;
function ak(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          m0(
            rk,
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
function ik(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && m0(nk, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Bm() {
  const e = new CustomEvent(bd);
  document.dispatchEvent(e);
}
function m0(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, a) : o.dispatchEvent(a);
}
var sk = yo, ck = h0, Pl = "focusScope.autoFocusOnMount", Ol = "focusScope.autoFocusOnUnmount", Fm = { bubbles: !1, cancelable: !0 }, lk = "FocusScope", Xs = m.forwardRef((e, t) => {
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
      let f = function(x) {
        if (h.paused || !s) return;
        const E = x.target;
        s.contains(E) ? d.current = E : Kr(d.current, { select: !0 });
      }, g = function(x) {
        if (h.paused || !s) return;
        const E = x.relatedTarget;
        E !== null && (s.contains(E) || Kr(d.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const S of x)
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
      Um.add(h);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const y = new CustomEvent(Pl, Fm);
        s.addEventListener(Pl, u), s.dispatchEvent(y), y.defaultPrevented || (uk(mk(v0(s)), { select: !0 }), document.activeElement === f && Kr(s));
      }
      return () => {
        s.removeEventListener(Pl, u), setTimeout(() => {
          const y = new CustomEvent(Ol, Fm);
          s.addEventListener(Ol, l), s.dispatchEvent(y), y.defaultPrevented || Kr(f ?? document.body, { select: !0 }), s.removeEventListener(Ol, l), Um.remove(h);
        }, 0);
      };
    }
  }, [s, u, l, h]);
  const v = m.useCallback(
    (f) => {
      if (!r && !n || h.paused) return;
      const g = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, y = document.activeElement;
      if (g && y) {
        const w = f.currentTarget, [x, E] = dk(w);
        x && E ? !f.shiftKey && y === E ? (f.preventDefault(), r && Kr(x, { select: !0 })) : f.shiftKey && y === x && (f.preventDefault(), r && Kr(E, { select: !0 })) : y === w && f.preventDefault();
      }
    },
    [r, n, h.paused]
  );
  return /* @__PURE__ */ b(ee.div, { tabIndex: -1, ...i, ref: p, onKeyDown: v });
});
Xs.displayName = lk;
function uk(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Kr(n, { select: t }), document.activeElement !== r) return;
}
function dk(e) {
  const t = v0(e), r = zm(t, e), n = zm(t.reverse(), e);
  return [r, n];
}
function v0(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function zm(e, t) {
  for (const r of e)
    if (!fk(r, { upTo: t })) return r;
}
function fk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && pk(e) && t && e.select();
  }
}
var Um = hk();
function hk() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Wm(e, t), e.unshift(t);
    },
    remove(t) {
      e = Wm(e, t), e[0]?.resume();
    }
  };
}
function Wm(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function mk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vk = "Portal", Pa = m.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = m.useState(!1);
  nt(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? n_.createPortal(/* @__PURE__ */ b(ee.div, { ...n, ref: t }), i) : null;
});
Pa.displayName = vk;
var Al = 0;
function Vf() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Km()), document.body.insertAdjacentElement("beforeend", e[1] ?? Km()), Al++, () => {
      Al === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Al--;
    };
  }, []);
}
function Km() {
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
function g0(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function gk(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Li = "right-scroll-bar-position", $i = "width-before-scroll-bar", yk = "with-scroll-bars-hidden", bk = "--removed-body-scroll-bar-size";
function Cl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wk(e, t) {
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
var xk = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Vm = /* @__PURE__ */ new WeakMap();
function Ek(e, t) {
  var r = wk(null, function(n) {
    return e.forEach(function(o) {
      return Cl(o, n);
    });
  });
  return xk(function() {
    var n = Vm.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Cl(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Cl(s, i);
      });
    }
    Vm.set(r, e);
  }, [e]), r;
}
function Sk(e) {
  return e;
}
function Pk(e, t) {
  t === void 0 && (t = Sk);
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
function Ok(e) {
  e === void 0 && (e = {});
  var t = Pk(null);
  return t.options = ar({ async: !0, ssr: !1 }, e), t;
}
var y0 = function(e) {
  var t = e.sideCar, r = g0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, ar({}, r));
};
y0.isSideCarExport = !0;
function Ak(e, t) {
  return e.useMedium(t), y0;
}
var b0 = Ok(), Tl = function() {
}, Zs = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: Tl,
    onWheelCapture: Tl,
    onTouchMoveCapture: Tl
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, v = e.noIsolation, f = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, E = g0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = p, P = Ek([r, t]), O = ar(ar({}, E), o);
  return m.createElement(
    m.Fragment,
    null,
    l && m.createElement(S, { sideCar: b0, removeScrollBar: u, shards: d, noRelative: h, noIsolation: v, inert: f, setCallbacks: a, allowPinchZoom: !!g, lockRef: r, gapMode: x }),
    i ? m.cloneElement(m.Children.only(s), ar(ar({}, O), { ref: P })) : m.createElement(w, ar({}, O, { className: c, ref: P }), s)
  );
});
Zs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zs.classNames = {
  fullWidth: $i,
  zeroRight: Li
};
var Ck = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tk() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ck();
  return t && e.setAttribute("nonce", t), e;
}
function _k(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Nk(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var kk = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Tk()) && (_k(t, r), Nk(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ik = function() {
  var e = kk();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, w0 = function() {
  var e = Ik(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Rk = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _l = function(e) {
  return parseInt(e || "", 10) || 0;
}, Mk = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_l(r), _l(n), _l(o)];
}, Dk = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Rk;
  var t = Mk(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, jk = w0(), eo = "data-scroll-locked", Lk = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(yk, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(eo, `] {
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
  
  .`).concat(Li, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat($i, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Li, " .").concat(Li, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat($i, " .").concat($i, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(eo, `] {
    `).concat(bk, ": ").concat(s, `px;
  }
`);
}, qm = function() {
  var e = parseInt(document.body.getAttribute(eo) || "0", 10);
  return isFinite(e) ? e : 0;
}, $k = function() {
  m.useEffect(function() {
    return document.body.setAttribute(eo, (qm() + 1).toString()), function() {
      var e = qm() - 1;
      e <= 0 ? document.body.removeAttribute(eo) : document.body.setAttribute(eo, e.toString());
    };
  }, []);
}, Bk = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  $k();
  var a = m.useMemo(function() {
    return Dk(o);
  }, [o]);
  return m.createElement(jk, { styles: Lk(a, !t, o, r ? "" : "!important") });
}, wd = !1;
if (typeof window < "u")
  try {
    var ci = Object.defineProperty({}, "passive", {
      get: function() {
        return wd = !0, !0;
      }
    });
    window.addEventListener("test", ci, ci), window.removeEventListener("test", ci, ci);
  } catch {
    wd = !1;
  }
var Hn = wd ? { passive: !1 } : !1, Fk = function(e) {
  return e.tagName === "TEXTAREA";
}, x0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Fk(e) && r[t] === "visible")
  );
}, zk = function(e) {
  return x0(e, "overflowY");
}, Uk = function(e) {
  return x0(e, "overflowX");
}, Hm = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = E0(e, n);
    if (o) {
      var a = S0(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Wk = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Kk = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, E0 = function(e, t) {
  return e === "v" ? zk(t) : Uk(t);
}, S0 = function(e, t) {
  return e === "v" ? Wk(t) : Kk(t);
}, Vk = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, qk = function(e, t, r, n, o) {
  var a = Vk(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), u = !1, l = i > 0, d = 0, p = 0;
  do {
    if (!s)
      break;
    var h = S0(e, s), v = h[0], f = h[1], g = h[2], y = f - g - a * v;
    (v || y) && E0(e, s) && (d += y, p += v);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(p) < 1) && (u = !0), u;
}, li = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gm = function(e) {
  return [e.deltaX, e.deltaY];
}, Ym = function(e) {
  return e && "current" in e ? e.current : e;
}, Hk = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Gk = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Yk = 0, Gn = [];
function Xk(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), o = m.useState(Yk++)[0], a = m.useState(w0)[0], i = m.useRef(e);
  m.useEffect(function() {
    i.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = gk([e.lockRef.current], (e.shards || []).map(Ym), !0).filter(Boolean);
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
    var y = li(f), w = r.current, x = "deltaX" in f ? f.deltaX : w[0] - y[0], E = "deltaY" in f ? f.deltaY : w[1] - y[1], S, P = f.target, O = Math.abs(x) > Math.abs(E) ? "h" : "v";
    if ("touches" in f && O === "h" && P.type === "range")
      return !1;
    var A = Hm(O, P);
    if (!A)
      return !0;
    if (A ? S = O : (S = O === "v" ? "h" : "v", A = Hm(O, P)), !A)
      return !1;
    if (!n.current && "changedTouches" in f && (x || E) && (n.current = S), !S)
      return !0;
    var C = n.current || S;
    return qk(C, g, f, C === "h" ? x : E);
  }, []), c = m.useCallback(function(f) {
    var g = f;
    if (!(!Gn.length || Gn[Gn.length - 1] !== a)) {
      var y = "deltaY" in g ? Gm(g) : li(g), w = t.current.filter(function(S) {
        return S.name === g.type && (S.target === g.target || g.target === S.shadowParent) && Hk(S.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(Ym).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
        }), E = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(f, g, y, w) {
    var x = { name: f, delta: g, target: y, should: w, shadowParent: Zk(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== x;
      });
    }, 1);
  }, []), l = m.useCallback(function(f) {
    r.current = li(f), n.current = void 0;
  }, []), d = m.useCallback(function(f) {
    u(f.type, Gm(f), f.target, s(f, e.lockRef.current));
  }, []), p = m.useCallback(function(f) {
    u(f.type, li(f), f.target, s(f, e.lockRef.current));
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
    v ? m.createElement(a, { styles: Gk(o) }) : null,
    h ? m.createElement(Bk, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Zk(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Jk = Ak(b0, Xk);
var Js = m.forwardRef(function(e, t) {
  return m.createElement(Zs, ar({}, e, { ref: t, sideCar: Jk }));
});
Js.classNames = Zs.classNames;
var Qk = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yn = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {}, Nl = 0, P0 = function(e) {
  return e && (e.host || P0(e.parentNode));
}, eI = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = P0(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, tI = function(e, t, r, n) {
  var o = eI(t, Array.isArray(e) ? e : [e]);
  di[r] || (di[r] = /* @__PURE__ */ new WeakMap());
  var a = di[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
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
          Yn.set(p, f), a.set(p, g), i.push(p), f === 1 && v && ui.set(p, !0), g === 1 && p.setAttribute(r, "true"), v || p.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return l(t), s.clear(), Nl++, function() {
    i.forEach(function(d) {
      var p = Yn.get(d) - 1, h = a.get(d) - 1;
      Yn.set(d, p), a.set(d, h), p || (ui.has(d) || d.removeAttribute(n), ui.delete(d)), h || d.removeAttribute(r);
    }), Nl--, Nl || (Yn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {});
  };
}, qf = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Qk(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), tI(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Qs = "Dialog", [O0] = Et(Qs), [rI, tr] = O0(Qs), A0 = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u, l] = Vt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Qs
  });
  return /* @__PURE__ */ b(
    rI,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Nt(),
      titleId: Nt(),
      descriptionId: Nt(),
      open: u,
      onOpenChange: l,
      onOpenToggle: m.useCallback(() => l((d) => !d), [l]),
      modal: i,
      children: r
    }
  );
};
A0.displayName = Qs;
var C0 = "DialogTrigger", T0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(C0, r), a = se(t, o.triggerRef);
    return /* @__PURE__ */ b(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yf(o.open),
        ...n,
        ref: a,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
T0.displayName = C0;
var Hf = "DialogPortal", [nI, _0] = O0(Hf, {
  forceMount: void 0
}), N0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = tr(Hf, t);
  return /* @__PURE__ */ b(nI, { scope: t, forceMount: r, children: m.Children.map(n, (i) => /* @__PURE__ */ b(Dt, { present: r || a.open, children: /* @__PURE__ */ b(Pa, { asChild: !0, container: o, children: i }) })) });
};
N0.displayName = Hf;
var Xi = "DialogOverlay", k0 = m.forwardRef(
  (e, t) => {
    const r = _0(Xi, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = tr(Xi, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ b(Dt, { present: n || a.open, children: /* @__PURE__ */ b(aI, { ...o, ref: t }) }) : null;
  }
);
k0.displayName = Xi;
var oI = /* @__PURE__ */ An("DialogOverlay.RemoveScroll"), aI = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(Xi, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ b(Js, { as: oI, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ b(
        ee.div,
        {
          "data-state": Yf(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Cn = "DialogContent", I0 = m.forwardRef(
  (e, t) => {
    const r = _0(Cn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = tr(Cn, e.__scopeDialog);
    return /* @__PURE__ */ b(Dt, { present: n || a.open, children: a.modal ? /* @__PURE__ */ b(iI, { ...o, ref: t }) : /* @__PURE__ */ b(sI, { ...o, ref: t }) });
  }
);
I0.displayName = Cn;
var iI = m.forwardRef(
  (e, t) => {
    const r = tr(Cn, e.__scopeDialog), n = m.useRef(null), o = se(t, r.contentRef, n);
    return m.useEffect(() => {
      const a = n.current;
      if (a) return qf(a);
    }, []), /* @__PURE__ */ b(
      R0,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), sI = m.forwardRef(
  (e, t) => {
    const r = tr(Cn, e.__scopeDialog), n = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ b(
      R0,
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
), R0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = tr(Cn, r), c = m.useRef(null), u = se(t, c);
    return Vf(), /* @__PURE__ */ j(gt, { children: [
      /* @__PURE__ */ b(
        Xs,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ b(
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
      /* @__PURE__ */ j(gt, { children: [
        /* @__PURE__ */ b(cI, { titleId: s.titleId }),
        /* @__PURE__ */ b(uI, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Gf = "DialogTitle", M0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(Gf, r);
    return /* @__PURE__ */ b(ee.h2, { id: o.titleId, ...n, ref: t });
  }
);
M0.displayName = Gf;
var D0 = "DialogDescription", j0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(D0, r);
    return /* @__PURE__ */ b(ee.p, { id: o.descriptionId, ...n, ref: t });
  }
);
j0.displayName = D0;
var L0 = "DialogClose", $0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = tr(L0, r);
    return /* @__PURE__ */ b(
      ee.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
$0.displayName = L0;
function Yf(e) {
  return e ? "open" : "closed";
}
var B0 = "DialogTitleWarning", [G7, F0] = $N(B0, {
  contentName: Cn,
  titleName: Gf,
  docsSlug: "dialog"
}), cI = ({ titleId: e }) => {
  const t = F0(B0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

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
}, z0 = A0, U0 = T0, W0 = N0, ec = k0, tc = I0, rc = M0, nc = j0, oc = $0;
const dI = z0, Y7 = U0, fI = W0, X7 = oc, K0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  ec,
  {
    ref: r,
    className: K(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
K0.displayName = ec.displayName;
const pI = Sa(
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
), V0 = m.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ j(fI, { children: [
  /* @__PURE__ */ b(K0, {}),
  /* @__PURE__ */ j(
    tc,
    {
      ref: o,
      className: K(pI({ size: r }), e),
      ...n,
      children: [
        t,
        /* @__PURE__ */ j(oc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b(Ff, { className: "h-4 w-4" }),
          /* @__PURE__ */ b("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
V0.displayName = tc.displayName;
const q0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: K(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
q0.displayName = "ModalHeader";
const H0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: K(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
H0.displayName = "ModalFooter";
const G0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rc,
  {
    ref: r,
    className: K(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
G0.displayName = rc.displayName;
const Y0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nc,
  {
    ref: r,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
Y0.displayName = nc.displayName;
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
  }, l) => /* @__PURE__ */ b(dI, { open: e, onOpenChange: t, children: /* @__PURE__ */ j(V0, { ref: l, children: [
    /* @__PURE__ */ j(q0, { children: [
      /* @__PURE__ */ b(G0, { children: r }),
      n && /* @__PURE__ */ b(Y0, { children: n })
    ] }),
    /* @__PURE__ */ j(H0, { children: [
      /* @__PURE__ */ b(Yi, { variant: "outline", onClick: () => {
        s?.(), t?.(!1);
      }, disabled: u, children: a }),
      /* @__PURE__ */ b(Yi, { variant: c, onClick: () => {
        i?.();
      }, loading: u, children: o })
    ] })
  ] }) })
);
hI.displayName = "ConfirmModal";
function ac(e) {
  const t = e + "CollectionProvider", [r, n] = Et(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (f) => {
    const { scope: g, children: y } = f, w = Ot.useRef(null), x = Ot.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b(o, { scope: g, itemMap: x, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ An(s), u = Ot.forwardRef(
    (f, g) => {
      const { scope: y, children: w } = f, x = a(s, y), E = se(g, x.collectionRef);
      return /* @__PURE__ */ b(c, { ref: E, children: w });
    }
  );
  u.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ An(l), h = Ot.forwardRef(
    (f, g) => {
      const { scope: y, children: w, ...x } = f, E = Ot.useRef(null), S = se(g, E), P = a(l, y);
      return Ot.useEffect(() => (P.itemMap.set(E, { ref: E, ...x }), () => void P.itemMap.delete(E))), /* @__PURE__ */ b(p, { [d]: "", ref: S, children: w });
    }
  );
  h.displayName = l;
  function v(f) {
    const g = a(e + "CollectionConsumer", f);
    return Ot.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, O) => x.indexOf(P.ref.current) - x.indexOf(O.ref.current)
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
function Oa(e) {
  const t = m.useContext(mI);
  return e || t || "ltr";
}
const vI = ["top", "right", "bottom", "left"], Zr = Math.min, Ct = Math.max, Zi = Math.round, fi = Math.floor, cr = (e) => ({
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
function xd(e, t, r) {
  return Ct(e, Zr(t, r));
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
  return t.reference[a] > t.floating[a] && (i = Ji(i)), [i, Ji(i)];
}
function xI(e) {
  const t = Ji(e);
  return [Ed(e), t, Ed(t)];
}
function Ed(e) {
  return e.replace(/start|end/g, (t) => yI[t]);
}
const Xm = ["left", "right"], Zm = ["right", "left"], EI = ["top", "bottom"], SI = ["bottom", "top"];
function PI(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Zm : Xm : t ? Xm : Zm;
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
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ed)))), a;
}
function Ji(e) {
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
function X0(e) {
  return typeof e != "number" ? AI(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qi(e) {
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
function Jm(e, t, r) {
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
  } = Jm(u, n, c), p = n, h = {}, v = 0;
  for (let f = 0; f < s.length; f++) {
    const {
      name: g,
      fn: y
    } = s[f], {
      x: w,
      y: x,
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
    l = w ?? l, d = x ?? d, h = {
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
    } = Jm(u, p, c)), f = -1);
  }
  return {
    x: l,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function na(e, t) {
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
  } = Tr(t, e), v = X0(h), g = s[p ? d === "floating" ? "reference" : "floating" : d], y = Qi(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), w = d === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Qi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
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
    const d = X0(l), p = {
      x: r,
      y: n
    }, h = Jf(o), v = Zf(h), f = await i.getDimensions(u), g = h === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", E = a.reference[v] + a.reference[h] - p[h] - a.floating[v], S = p[h] - a.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let O = P ? P[x] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(P))) && (O = s.floating[x] || a.floating[v]);
    const A = E / 2 - S / 2, C = O / 2 - f[v] / 2 - 1, N = Zr(d[y], C), _ = Zr(d[w], C), R = N, D = O - f[v] - _, k = O / 2 - f[v] / 2 + A, U = xd(R, k, D), B = !c.arrow && bo(o) != null && k !== U && a.reference[v] / 2 - (k < R ? N : _) - f[v] / 2 < 0, F = B ? k < R ? k - R : k - D : 0;
    return {
      [h]: p[h] + F,
      data: {
        [h]: U,
        centerOffset: k - U - F,
        ...B && {
          alignmentOffset: F
        }
      },
      reset: B
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
      const y = _r(o), w = ir(s), x = _r(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = p || (x || !f ? [Ji(s)] : xI(s)), P = v !== "none";
      !p && P && S.push(...OI(s, f, v, E));
      const O = [s, ...S], A = await na(t, g), C = [];
      let N = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (l && C.push(A[y]), d) {
        const k = wI(o, i, E);
        C.push(A[k[0]], A[k[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: C
      }], !C.every((k) => k <= 0)) {
        var _, R;
        const k = (((_ = a.flip) == null ? void 0 : _.index) || 0) + 1, U = O[k];
        if (U && (!(d === "alignment" ? w !== ir(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((M) => ir(M.placement) === w ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: N
            },
            reset: {
              placement: U
            }
          };
        let B = (R = N.filter((F) => F.overflows[0] <= 0).sort((F, M) => F.overflows[1] - M.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!B)
          switch (h) {
            case "bestFit": {
              var D;
              const F = (D = N.filter((M) => {
                if (P) {
                  const z = ir(M.placement);
                  return z === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, ne) => z + ne, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : D[0];
              F && (B = F);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Qm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ev(e) {
  return vI.some((t) => e[t] >= 0);
}
const NI = function(e) {
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
          const a = await na(t, {
            ...o,
            elementContext: "reference"
          }), i = Qm(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ev(i)
            }
          };
        }
        case "escaped": {
          const a = await na(t, {
            ...o,
            altBoundary: !0
          }), i = Qm(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ev(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Z0 = /* @__PURE__ */ new Set(["left", "top"]);
async function kI(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = _r(r), s = bo(r), c = ir(r) === "y", u = Z0.has(i) ? -1 : 1, l = a && c ? -1 : 1, d = Tr(t, e);
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
      } = t, c = await kI(t, e);
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
      }, l = await na(t, c), d = ir(_r(o)), p = Xf(d);
      let h = u[p], v = u[d];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = h + l[g], x = h - l[y];
        h = xd(w, h, x);
      }
      if (i) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = v + l[g], x = v - l[y];
        v = xd(w, v, x);
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
        const x = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[x] + g.mainAxis, S = a.reference[p] + a.reference[x] - g.mainAxis;
        h < E ? h = E : h > S && (h = S);
      }
      if (u) {
        var y, w;
        const x = p === "y" ? "width" : "height", E = Z0.has(_r(o)), S = a.reference[d] - a.floating[x] + (E && ((y = i.offset) == null ? void 0 : y[d]) || 0) + (E ? 0 : g.crossAxis), P = a.reference[d] + a.reference[x] + (E ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (E ? g.crossAxis : 0);
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
      } = Tr(e, t), l = await na(t, u), d = _r(o), p = bo(o), h = ir(o) === "y", {
        width: v,
        height: f
      } = a.floating;
      let g, y;
      d === "top" || d === "bottom" ? (g = d, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = p === "end" ? "top" : "bottom");
      const w = f - l.top - l.bottom, x = v - l.left - l.right, E = Zr(f - l[g], w), S = Zr(v - l[y], x), P = !t.middlewareData.shift;
      let O = E, A = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = x), (n = t.middlewareData.shift) != null && n.enabled.y && (O = w), P && !p) {
        const N = Ct(l.left, 0), _ = Ct(l.right, 0), R = Ct(l.top, 0), D = Ct(l.bottom, 0);
        h ? A = v - 2 * (N !== 0 || _ !== 0 ? N + _ : Ct(l.left, l.right)) : O = f - 2 * (R !== 0 || D !== 0 ? R + D : Ct(l.top, l.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: O
      });
      const C = await i.getDimensions(s.floating);
      return v !== C.width || f !== C.height ? {
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
function wo(e) {
  return J0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vr(e) {
  var t;
  return (t = (J0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function J0(e) {
  return ic() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function Jt(e) {
  return ic() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function dr(e) {
  return ic() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function tv(e) {
  return !ic() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
const jI = /* @__PURE__ */ new Set(["inline", "contents"]);
function Aa(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !jI.has(o);
}
const LI = /* @__PURE__ */ new Set(["table", "td", "th"]);
function $I(e) {
  return LI.has(wo(e));
}
const BI = [":popover-open", ":modal"];
function sc(e) {
  return BI.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const FI = ["transform", "translate", "scale", "rotate", "perspective"], zI = ["transform", "translate", "scale", "rotate", "perspective", "filter"], UI = ["paint", "layout", "strict", "content"];
function Qf(e) {
  const t = ep(), r = Jt(e) ? Qt(e) : e;
  return FI.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || zI.some((n) => (r.willChange || "").includes(n)) || UI.some((n) => (r.contain || "").includes(n));
}
function WI(e) {
  let t = Jr(e);
  for (; dr(t) && !ao(t); ) {
    if (Qf(t))
      return t;
    if (sc(t))
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
function cc(e) {
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
    tv(e) && e.host || // Fallback.
    vr(e)
  );
  return tv(t) ? t.host : t;
}
function Q0(e) {
  const t = Jr(e);
  return ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dr(t) && Aa(t) ? t : Q0(t);
}
function oa(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Q0(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = kt(o);
  if (a) {
    const s = Sd(i);
    return t.concat(i, i.visualViewport || [], Aa(o) ? o : [], s && r ? oa(s) : []);
  }
  return t.concat(o, oa(o, [], r));
}
function Sd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ex(e) {
  const t = Qt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = dr(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Zi(r) !== a || Zi(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function tp(e) {
  return Jt(e) ? e : e.contextElement;
}
function to(e) {
  const t = tp(e);
  if (!dr(t))
    return cr(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = ex(t);
  let i = (a ? Zi(r.width) : r.width) / n, s = (a ? Zi(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const VI = /* @__PURE__ */ cr(0);
function tx(e) {
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
  t && (n ? Jt(n) && (i = to(n)) : i = to(e));
  const s = qI(a, r, n) ? tx(a) : cr(0);
  let c = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, l = o.width / i.x, d = o.height / i.y;
  if (a) {
    const p = kt(a), h = n && Jt(n) ? kt(n) : n;
    let v = p, f = Sd(v);
    for (; f && n && h !== v; ) {
      const g = to(f), y = f.getBoundingClientRect(), w = Qt(f), x = y.left + (f.clientLeft + parseFloat(w.paddingLeft)) * g.x, E = y.top + (f.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, u *= g.y, l *= g.x, d *= g.y, c += x, u += E, v = kt(f), f = Sd(v);
    }
  }
  return Qi({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function lc(e, t) {
  const r = cc(e).scrollLeft;
  return t ? t.left + r : Tn(vr(e)).left + r;
}
function rx(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - lc(e, r), o = r.top + t.scrollTop;
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
  const a = o === "fixed", i = vr(n), s = t ? sc(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cr(1);
  const l = cr(0), d = dr(n);
  if ((d || !d && !a) && ((wo(n) !== "body" || Aa(i)) && (c = cc(n)), dr(n))) {
    const h = Tn(n);
    u = to(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const p = i && !d && !a ? rx(i, c) : cr(0);
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
  const t = vr(e), r = cc(e), n = e.ownerDocument.body, o = Ct(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ct(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + lc(e);
  const s = -r.scrollTop;
  return Qt(n).direction === "rtl" && (i += Ct(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const rv = 25;
function XI(e, t) {
  const r = kt(e), n = vr(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = ep();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = lc(n);
  if (u <= 0) {
    const l = n.ownerDocument, d = l.body, p = getComputedStyle(d), h = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(n.clientWidth - d.clientWidth - h);
    v <= rv && (a -= v);
  } else u <= rv && (a += u);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const ZI = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function JI(e, t) {
  const r = Tn(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = dr(e) ? to(e) : cr(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, u = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function nv(e, t, r) {
  let n;
  if (t === "viewport")
    n = XI(e, r);
  else if (t === "document")
    n = YI(vr(e));
  else if (Jt(t))
    n = JI(t, r);
  else {
    const o = tx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Qi(n);
}
function nx(e, t) {
  const r = Jr(e);
  return r === t || !Jt(r) || ao(r) ? !1 : Qt(r).position === "fixed" || nx(r, t);
}
function QI(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = oa(e, [], !1).filter((s) => Jt(s) && wo(s) !== "body"), o = null;
  const a = Qt(e).position === "fixed";
  let i = a ? Jr(e) : e;
  for (; Jt(i) && !ao(i); ) {
    const s = Qt(i), c = Qf(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ZI.has(o.position) || Aa(i) && !c && nx(e, i)) ? n = n.filter((l) => l !== i) : o = s, i = Jr(i);
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
  const i = [...r === "clippingAncestors" ? sc(t) ? [] : QI(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((u, l) => {
    const d = nv(t, l, o);
    return u.top = Ct(d.top, u.top), u.right = Zr(d.right, u.right), u.bottom = Zr(d.bottom, u.bottom), u.left = Ct(d.left, u.left), u;
  }, nv(t, s, o));
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
  } = ex(e);
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
    c.x = lc(o);
  }
  if (n || !n && !a)
    if ((wo(t) !== "body" || Aa(o)) && (s = cc(t)), n) {
      const h = Tn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && u();
  a && !n && o && u();
  const l = o && !n && !a ? rx(o, s) : cr(0), d = i.left + s.scrollLeft - c.x - l.x, p = i.top + s.scrollTop - c.y - l.y;
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
function ov(e, t) {
  if (!dr(e) || Qt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return vr(e) === r && (r = r.ownerDocument.body), r;
}
function ox(e, t) {
  const r = kt(e);
  if (sc(e))
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
  let n = ov(e, t);
  for (; n && $I(n) && kl(n); )
    n = ov(n, t);
  return n && ao(n) && kl(n) && !Qf(n) ? r : n || WI(e) || r;
}
const nR = async function(e) {
  const t = this.getOffsetParent || ox, r = this.getDimensions, n = await r(e.floating);
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
  getOffsetParent: ox,
  getElementRects: nR,
  getClientRects: GI,
  getDimensions: tR,
  getScale: to,
  isElement: Jt,
  isRTL: oR
};
function ax(e, t) {
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
    const v = fi(d), f = fi(o.clientWidth - (l + p)), g = fi(o.clientHeight - (d + h)), y = fi(l), x = {
      rootMargin: -v + "px " + -f + "px " + -g + "px " + -y + "px",
      threshold: Ct(0, Zr(1, c)) || 1
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
      O === 1 && !ax(u, e.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, x);
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
  } = n, u = tp(e), l = o || a ? [...u ? oa(u) : [], ...oa(t)] : [];
  l.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const d = u && s ? iR(u, r) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), r();
  }), u && !c && h.observe(u), h.observe(t));
  let v, f = c ? Tn(e) : null;
  c && g();
  function g() {
    const y = Tn(e);
    f && !ax(f, y) && r(), f = y, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var y;
    l.forEach((w) => {
      o && w.removeEventListener("scroll", r), a && w.removeEventListener("resize", r);
    }), d?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const cR = II, lR = RI, uR = _I, dR = DI, fR = NI, av = TI, pR = MI, hR = (e, t, r) => {
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
}, Bi = mR ? ur : vR;
function es(e, t) {
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
        if (!es(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !es(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ix(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function iv(e, t) {
  const r = ix(e);
  return Math.round(t * r) / r;
}
function Il(e) {
  const t = m.useRef(e);
  return Bi(() => {
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
  es(p, n) || h(n);
  const [v, f] = m.useState(null), [g, y] = m.useState(null), w = m.useCallback((M) => {
    M !== P.current && (P.current = M, f(M));
  }, []), x = m.useCallback((M) => {
    M !== O.current && (O.current = M, y(M));
  }, []), E = a || v, S = i || g, P = m.useRef(null), O = m.useRef(null), A = m.useRef(l), C = c != null, N = Il(c), _ = Il(o), R = Il(u), D = m.useCallback(() => {
    if (!P.current || !O.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: p
    };
    _.current && (M.platform = _.current), hR(P.current, O.current, M).then((z) => {
      const ne = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      k.current && !es(A.current, ne) && (A.current = ne, Ea.flushSync(() => {
        d(ne);
      }));
    });
  }, [p, t, r, _, R]);
  Bi(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [u]);
  const k = m.useRef(!1);
  Bi(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Bi(() => {
    if (E && (P.current = E), S && (O.current = S), E && S) {
      if (N.current)
        return N.current(E, S, D);
      D();
    }
  }, [E, S, D, N, C]);
  const U = m.useMemo(() => ({
    reference: P,
    floating: O,
    setReference: w,
    setFloating: x
  }), [w, x]), B = m.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), F = m.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return M;
    const z = iv(B.floating, l.x), ne = iv(B.floating, l.y);
    return s ? {
      ...M,
      transform: "translate(" + z + "px, " + ne + "px)",
      ...ix(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: z,
      top: ne
    };
  }, [r, s, B.floating, l.x, l.y]);
  return m.useMemo(() => ({
    ...l,
    update: D,
    refs: U,
    elements: B,
    floatingStyles: F
  }), [l, D, U, B, F]);
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
      return n && t(n) ? n.current != null ? av({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? av({
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
var AR = "Arrow", sx = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ b(
    ee.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ b("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
sx.displayName = AR;
var CR = sx, rp = "Popper", [cx, xo] = Et(rp), [TR, lx] = cx(rp), ux = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = m.useState(null);
  return /* @__PURE__ */ b(TR, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ux.displayName = rp;
var dx = "PopperAnchor", fx = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = lx(dx, r), i = m.useRef(null), s = se(t, i), c = m.useRef(null);
    return m.useEffect(() => {
      const u = c.current;
      c.current = n?.current || i.current, u !== c.current && a.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ b(ee.div, { ...o, ref: s });
  }
);
fx.displayName = dx;
var np = "PopperContent", [_R, NR] = cx(np), px = m.forwardRef(
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
    } = e, g = lx(np, r), [y, w] = m.useState(null), x = se(t, (V) => w(V)), [E, S] = m.useState(null), P = Gs(E), O = P?.width ?? 0, A = P?.height ?? 0, C = n + (a !== "center" ? "-" + a : ""), N = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, _ = Array.isArray(u) ? u : [u], R = _.length > 0, D = {
      padding: N,
      boundary: _.filter(IR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: k, floatingStyles: U, placement: B, isPositioned: F, middlewareData: M } = gR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: C,
      whileElementsMounted: (...V) => sR(...V, {
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
          apply: ({ elements: V, rects: fe, availableWidth: L, availableHeight: H }) => {
            const { width: Q, height: $ } = fe.reference, Ee = V.floating.style;
            Ee.setProperty("--radix-popper-available-width", `${L}px`), Ee.setProperty("--radix-popper-available-height", `${H}px`), Ee.setProperty("--radix-popper-anchor-width", `${Q}px`), Ee.setProperty("--radix-popper-anchor-height", `${$}px`);
          }
        }),
        E && OR({ element: E, padding: s }),
        RR({ arrowWidth: O, arrowHeight: A }),
        p && PR({ strategy: "referenceHidden", ...D })
      ]
    }), [z, ne] = vx(B), W = pt(v);
    nt(() => {
      F && W?.();
    }, [F, W]);
    const re = M.arrow?.x, te = M.arrow?.y, oe = M.arrow?.centerOffset !== 0, [ce, ke] = m.useState();
    return nt(() => {
      y && ke(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ b(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: F ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            M.transformOrigin?.x,
            M.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...M.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ b(
          _R,
          {
            scope: r,
            placedSide: z,
            onArrowChange: S,
            arrowX: re,
            arrowY: te,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ b(
              ee.div,
              {
                "data-side": z,
                "data-align": ne,
                ...f,
                ref: x,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
px.displayName = np;
var hx = "PopperArrow", kR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, mx = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = NR(hx, n), i = kR[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ b(
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
        children: /* @__PURE__ */ b(
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
mx.displayName = hx;
function IR(e) {
  return e !== null;
}
var RR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, l] = vx(r), d = { start: "0%", center: "50%", end: "100%" }[l], p = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", f = "";
    return u === "bottom" ? (v = i ? d : `${p}px`, f = `${-c}px`) : u === "top" ? (v = i ? d : `${p}px`, f = `${n.floating.height + c}px`) : u === "right" ? (v = `${-c}px`, f = i ? d : `${h}px`) : u === "left" && (v = `${n.floating.width + c}px`, f = i ? d : `${h}px`), { data: { x: v, y: f } };
  }
});
function vx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var uc = ux, op = fx, ap = px, ip = mx, Rl = "rovingFocusGroup.onEntryFocus", MR = { bubbles: !1, cancelable: !0 }, Ca = "RovingFocusGroup", [Pd, gx, DR] = ac(Ca), [jR, Eo] = Et(
  Ca,
  [DR]
), [LR, $R] = jR(Ca), yx = m.forwardRef(
  (e, t) => /* @__PURE__ */ b(Pd.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ b(Pd.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ b(BR, { ...e, ref: t }) }) })
);
yx.displayName = Ca;
var BR = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = se(t, p), v = Oa(a), [f, g] = Vt({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: Ca
  }), [y, w] = m.useState(!1), x = pt(u), E = gx(r), S = m.useRef(!1), [P, O] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(Rl, x), () => A.removeEventListener(Rl, x);
  }, [x]), /* @__PURE__ */ b(
    LR,
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
      children: /* @__PURE__ */ b(
        ee.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": n,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: q(e.onFocus, (A) => {
            const C = !S.current;
            if (A.target === A.currentTarget && C && !y) {
              const N = new CustomEvent(Rl, MR);
              if (A.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const _ = E().filter((B) => B.focusable), R = _.find((B) => B.active), D = _.find((B) => B.id === f), U = [R, D, ..._].filter(
                  Boolean
                ).map((B) => B.ref.current);
                xx(U, l);
              }
            }
            S.current = !1;
          }),
          onBlur: q(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), bx = "RovingFocusGroupItem", wx = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = Nt(), u = a || c, l = $R(bx, r), d = l.currentTabStopId === u, p = gx(r), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: f } = l;
    return m.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ b(
      Pd.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ b(
          ee.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": l.orientation,
            ...s,
            ref: t,
            onMouseDown: q(e.onMouseDown, (g) => {
              n ? l.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: q(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: q(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = UR(g, l.orientation, l.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let x = p().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const E = x.indexOf(g.currentTarget);
                  x = l.loop ? WR(x, E + 1) : x.slice(E + 1);
                }
                setTimeout(() => xx(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: f != null }) : i
          }
        )
      }
    );
  }
);
wx.displayName = bx;
var FR = {
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
    return FR[n];
}
function xx(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function WR(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var sp = yx, cp = wx, Od = ["Enter", " "], KR = ["ArrowDown", "PageUp", "Home"], Ex = ["ArrowUp", "PageDown", "End"], VR = [...KR, ...Ex], qR = {
  ltr: [...Od, "ArrowRight"],
  rtl: [...Od, "ArrowLeft"]
}, HR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ta = "Menu", [aa, GR, YR] = ac(Ta), [Un, Sx] = Et(Ta, [
  YR,
  xo,
  Eo
]), _a = xo(), Px = Eo(), [Ox, rn] = Un(Ta), [XR, Na] = Un(Ta), Ax = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = _a(t), [c, u] = m.useState(null), l = m.useRef(!1), d = pt(a), p = Oa(o);
  return m.useEffect(() => {
    const h = () => {
      l.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => l.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ b(uc, { ...s, children: /* @__PURE__ */ b(
    Ox,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ b(
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
Ax.displayName = Ta;
var ZR = "MenuAnchor", lp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = _a(r);
    return /* @__PURE__ */ b(op, { ...o, ...n, ref: t });
  }
);
lp.displayName = ZR;
var up = "MenuPortal", [JR, Cx] = Un(up, {
  forceMount: void 0
}), Tx = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = rn(up, t);
  return /* @__PURE__ */ b(JR, { scope: t, forceMount: r, children: /* @__PURE__ */ b(Dt, { present: r || a.open, children: /* @__PURE__ */ b(Pa, { asChild: !0, container: o, children: n }) }) });
};
Tx.displayName = up;
var Kt = "MenuContent", [QR, dp] = Un(Kt), _x = m.forwardRef(
  (e, t) => {
    const r = Cx(Kt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rn(Kt, e.__scopeMenu), i = Na(Kt, e.__scopeMenu);
    return /* @__PURE__ */ b(aa.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(Dt, { present: n || a.open, children: /* @__PURE__ */ b(aa.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ b(eM, { ...o, ref: t }) : /* @__PURE__ */ b(tM, { ...o, ref: t }) }) }) });
  }
), eM = m.forwardRef(
  (e, t) => {
    const r = rn(Kt, e.__scopeMenu), n = m.useRef(null), o = se(t, n);
    return m.useEffect(() => {
      const a = n.current;
      if (a) return qf(a);
    }, []), /* @__PURE__ */ b(
      fp,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), tM = m.forwardRef((e, t) => {
  const r = rn(Kt, e.__scopeMenu);
  return /* @__PURE__ */ b(
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
    } = e, g = rn(Kt, r), y = Na(Kt, r), w = _a(r), x = Px(r), E = GR(r), [S, P] = m.useState(null), O = m.useRef(null), A = se(t, O, g.onContentChange), C = m.useRef(0), N = m.useRef(""), _ = m.useRef(0), R = m.useRef(null), D = m.useRef("right"), k = m.useRef(0), U = v ? Js : m.Fragment, B = v ? { as: rM, allowPinchZoom: !0 } : void 0, F = (z) => {
      const ne = N.current + z, W = E().filter((V) => !V.disabled), re = document.activeElement, te = W.find((V) => V.ref.current === re)?.textValue, oe = W.map((V) => V.textValue), ce = hM(oe, ne, te), ke = W.find((V) => V.textValue === ce)?.ref.current;
      (function V(fe) {
        N.current = fe, window.clearTimeout(C.current), fe !== "" && (C.current = window.setTimeout(() => V(""), 1e3));
      })(ne), ke && setTimeout(() => ke.focus());
    };
    m.useEffect(() => () => window.clearTimeout(C.current), []), Vf();
    const M = m.useCallback((z) => D.current === R.current?.side && vM(z, R.current?.area), []);
    return /* @__PURE__ */ b(
      QR,
      {
        scope: r,
        searchRef: N,
        onItemEnter: m.useCallback(
          (z) => {
            M(z) && z.preventDefault();
          },
          [M]
        ),
        onItemLeave: m.useCallback(
          (z) => {
            M(z) || (O.current?.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: m.useCallback(
          (z) => {
            M(z) && z.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: m.useCallback((z) => {
          R.current = z;
        }, []),
        children: /* @__PURE__ */ b(U, { ...B, children: /* @__PURE__ */ b(
          Xs,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(a, (z) => {
              z.preventDefault(), O.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ b(
              yo,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ b(
                  sp,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: q(c, (z) => {
                      y.isUsingKeyboardRef.current || z.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ b(
                      ap,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": qx(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...f,
                        ref: A,
                        style: { outline: "none", ...f.style },
                        onKeyDown: q(f.onKeyDown, (z) => {
                          const W = z.target.closest("[data-radix-menu-content]") === z.currentTarget, re = z.ctrlKey || z.altKey || z.metaKey, te = z.key.length === 1;
                          W && (z.key === "Tab" && z.preventDefault(), !re && te && F(z.key));
                          const oe = O.current;
                          if (z.target !== oe || !VR.includes(z.key)) return;
                          z.preventDefault();
                          const ke = E().filter((V) => !V.disabled).map((V) => V.ref.current);
                          Ex.includes(z.key) && ke.reverse(), fM(ke);
                        }),
                        onBlur: q(e.onBlur, (z) => {
                          z.currentTarget.contains(z.target) || (window.clearTimeout(C.current), N.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          ia((z) => {
                            const ne = z.target, W = k.current !== z.clientX;
                            if (z.currentTarget.contains(ne) && W) {
                              const re = z.clientX > k.current ? "right" : "left";
                              D.current = re, k.current = z.clientX;
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
_x.displayName = Kt;
var nM = "MenuGroup", pp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(ee.div, { role: "group", ...n, ref: t });
  }
);
pp.displayName = nM;
var oM = "MenuLabel", Nx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(ee.div, { ...n, ref: t });
  }
);
Nx.displayName = oM;
var ts = "MenuItem", sv = "menu.itemSelect", dc = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = m.useRef(null), i = Na(ts, e.__scopeMenu), s = dp(ts, e.__scopeMenu), c = se(t, a), u = m.useRef(!1), l = () => {
      const d = a.current;
      if (!r && d) {
        const p = new CustomEvent(sv, { bubbles: !0, cancelable: !0 });
        d.addEventListener(sv, (h) => n?.(h), { once: !0 }), Uf(d, p), p.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ b(
      kx,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: q(e.onClick, l),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), u.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (d) => {
          u.current || d.currentTarget?.click();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          r || p && d.key === " " || Od.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
dc.displayName = ts;
var kx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = dp(ts, r), s = Px(r), c = m.useRef(null), u = se(t, c), [l, d] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const v = c.current;
      v && h((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ b(
      aa.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? p,
        children: /* @__PURE__ */ b(cp, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ b(
          ee.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: q(
              e.onPointerMove,
              ia((v) => {
                n ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              ia((v) => i.onItemLeave(v))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), aM = "MenuCheckboxItem", Ix = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ b(Lx, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ b(
      dc,
      {
        role: "menuitemcheckbox",
        "aria-checked": rs(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": vp(r),
        onSelect: q(
          o.onSelect,
          () => n?.(rs(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ix.displayName = aM;
var Rx = "MenuRadioGroup", [iM, sM] = Un(
  Rx,
  { value: void 0, onValueChange: () => {
  } }
), Mx = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = pt(n);
    return /* @__PURE__ */ b(iM, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ b(pp, { ...o, ref: t }) });
  }
);
Mx.displayName = Rx;
var Dx = "MenuRadioItem", jx = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = sM(Dx, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ b(Lx, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ b(
      dc,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": vp(a),
        onSelect: q(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jx.displayName = Dx;
var hp = "MenuItemIndicator", [Lx, cM] = Un(
  hp,
  { checked: !1 }
), $x = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = cM(hp, r);
    return /* @__PURE__ */ b(
      Dt,
      {
        present: n || rs(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ b(
          ee.span,
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
var lM = "MenuSeparator", Bx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(
      ee.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Bx.displayName = lM;
var uM = "MenuArrow", Fx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = _a(r);
    return /* @__PURE__ */ b(ip, { ...o, ...n, ref: t });
  }
);
Fx.displayName = uM;
var mp = "MenuSub", [dM, zx] = Un(mp), Ux = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = rn(mp, t), i = _a(t), [s, c] = m.useState(null), [u, l] = m.useState(null), d = pt(o);
  return m.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ b(uc, { ...i, children: /* @__PURE__ */ b(
    Ox,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: u,
      onContentChange: l,
      children: /* @__PURE__ */ b(
        dM,
        {
          scope: t,
          contentId: Nt(),
          triggerId: Nt(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
Ux.displayName = mp;
var Go = "MenuSubTrigger", Wx = m.forwardRef(
  (e, t) => {
    const r = rn(Go, e.__scopeMenu), n = Na(Go, e.__scopeMenu), o = zx(Go, e.__scopeMenu), a = dp(Go, e.__scopeMenu), i = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, u = { __scopeMenu: e.__scopeMenu }, l = m.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return m.useEffect(() => l, [l]), m.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ b(lp, { asChild: !0, ...u, children: /* @__PURE__ */ b(
      kx,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": qx(r.open),
        ...e,
        ref: qs(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          ia((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          ia((d) => {
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
        onKeyDown: q(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          e.disabled || p && d.key === " " || qR[n.dir].includes(d.key) && (r.onOpenChange(!0), r.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Wx.displayName = Go;
var Kx = "MenuSubContent", Vx = m.forwardRef(
  (e, t) => {
    const r = Cx(Kt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rn(Kt, e.__scopeMenu), i = Na(Kt, e.__scopeMenu), s = zx(Kx, e.__scopeMenu), c = m.useRef(null), u = se(t, c);
    return /* @__PURE__ */ b(aa.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(Dt, { present: n || a.open, children: /* @__PURE__ */ b(aa.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(
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
        onFocusOutside: q(e.onFocusOutside, (l) => {
          l.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (l) => {
          i.onClose(), l.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (l) => {
          const d = l.currentTarget.contains(l.target), p = HR[i.dir].includes(l.key);
          d && p && (a.onOpenChange(!1), s.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Vx.displayName = Kx;
function qx(e) {
  return e ? "open" : "closed";
}
function rs(e) {
  return e === "indeterminate";
}
function vp(e) {
  return rs(e) ? "indeterminate" : e ? "checked" : "unchecked";
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
function ia(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var gM = Ax, yM = lp, bM = Tx, wM = _x, xM = pp, EM = Nx, SM = dc, PM = Ix, OM = Mx, AM = jx, CM = $x, TM = Bx, _M = Fx, NM = Ux, kM = Wx, IM = Vx, fc = "DropdownMenu", [RM] = Et(
  fc,
  [Sx]
), lt = Sx(), [MM, Hx] = RM(fc), Gx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = lt(t), u = m.useRef(null), [l, d] = Vt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: fc
  });
  return /* @__PURE__ */ b(
    MM,
    {
      scope: t,
      triggerId: Nt(),
      triggerRef: u,
      contentId: Nt(),
      open: l,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ b(gM, { ...c, open: l, onOpenChange: d, dir: n, modal: s, children: r })
    }
  );
};
Gx.displayName = fc;
var Yx = "DropdownMenuTrigger", Xx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Hx(Yx, r), i = lt(r);
    return /* @__PURE__ */ b(yM, { asChild: !0, ...i, children: /* @__PURE__ */ b(
      ee.button,
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
        ref: qs(t, a.triggerRef),
        onPointerDown: q(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Xx.displayName = Yx;
var DM = "DropdownMenuPortal", Zx = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = lt(t);
  return /* @__PURE__ */ b(bM, { ...n, ...r });
};
Zx.displayName = DM;
var Jx = "DropdownMenuContent", Qx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Hx(Jx, r), a = lt(r), i = m.useRef(!1);
    return /* @__PURE__ */ b(
      wM,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
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
Qx.displayName = Jx;
var jM = "DropdownMenuGroup", eE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(xM, { ...o, ...n, ref: t });
  }
);
eE.displayName = jM;
var LM = "DropdownMenuLabel", tE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(EM, { ...o, ...n, ref: t });
  }
);
tE.displayName = LM;
var $M = "DropdownMenuItem", rE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(SM, { ...o, ...n, ref: t });
  }
);
rE.displayName = $M;
var BM = "DropdownMenuCheckboxItem", nE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(PM, { ...o, ...n, ref: t });
});
nE.displayName = BM;
var FM = "DropdownMenuRadioGroup", oE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(OM, { ...o, ...n, ref: t });
});
oE.displayName = FM;
var zM = "DropdownMenuRadioItem", aE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(AM, { ...o, ...n, ref: t });
});
aE.displayName = zM;
var UM = "DropdownMenuItemIndicator", iE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(CM, { ...o, ...n, ref: t });
});
iE.displayName = UM;
var WM = "DropdownMenuSeparator", sE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(TM, { ...o, ...n, ref: t });
});
sE.displayName = WM;
var KM = "DropdownMenuArrow", VM = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(_M, { ...o, ...n, ref: t });
  }
);
VM.displayName = KM;
var qM = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = lt(t), [s, c] = Vt({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ b(NM, { ...i, open: s, onOpenChange: c, children: r });
}, HM = "DropdownMenuSubTrigger", cE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(kM, { ...o, ...n, ref: t });
});
cE.displayName = HM;
var GM = "DropdownMenuSubContent", lE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(
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
lE.displayName = GM;
var YM = Gx, XM = Xx, uE = Zx, dE = Qx, ZM = eE, fE = tE, pE = rE, hE = nE, JM = oE, mE = aE, vE = iE, gE = sE, QM = qM, yE = cE, bE = lE;
const Z7 = YM, J7 = XM, Q7 = ZM, eX = uE, tX = QM, rX = JM, eD = m.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ j(
  yE,
  {
    ref: o,
    className: K(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ b(Bf, { className: "ml-auto h-4 w-4" })
    ]
  }
));
eD.displayName = yE.displayName;
const tD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  bE,
  {
    ref: r,
    className: K(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
tD.displayName = bE.displayName;
const rD = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ b(uE, { children: /* @__PURE__ */ b(
  dE,
  {
    ref: n,
    sideOffset: t,
    className: K(
      "z-[110] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
rD.displayName = dE.displayName;
const nD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ b(
  pE,
  {
    ref: n,
    className: K(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
nD.displayName = pE.displayName;
const oD = m.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ j(
  hE,
  {
    ref: o,
    className: K(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(vE, { children: /* @__PURE__ */ b(Qn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
oD.displayName = hE.displayName;
const aD = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ j(
  mE,
  {
    ref: n,
    className: K(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(vE, { children: /* @__PURE__ */ b(Hw, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
aD.displayName = mE.displayName;
const iD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ b(
  fE,
  {
    ref: n,
    className: K(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
iD.displayName = fE.displayName;
const sD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  gE,
  {
    ref: r,
    className: K("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
sD.displayName = gE.displayName;
const cD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: K("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
cD.displayName = "DropdownShortcut";
function cv(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var wE = Object.freeze({
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
}), lD = "VisuallyHidden", pc = m.forwardRef(
  (e, t) => /* @__PURE__ */ b(
    ee.span,
    {
      ...e,
      ref: t,
      style: { ...wE, ...e.style }
    }
  )
);
pc.displayName = lD;
var uD = pc, dD = [" ", "Enter", "ArrowUp", "ArrowDown"], fD = [" ", "Enter"], _n = "Select", [hc, mc, pD] = ac(_n), [So] = Et(_n, [
  pD,
  xo
]), vc = xo(), [hD, nn] = So(_n), [mD, vD] = So(_n), xE = (e) => {
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
  } = e, f = vc(t), [g, y] = m.useState(null), [w, x] = m.useState(null), [E, S] = m.useState(!1), P = Oa(u), [O, A] = Vt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: _n
  }), [C, N] = Vt({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: _n
  }), _ = m.useRef(null), R = g ? v || !!g.closest("form") : !0, [D, k] = m.useState(/* @__PURE__ */ new Set()), U = Array.from(D).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ b(uc, { ...f, children: /* @__PURE__ */ j(
    hD,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: S,
      contentId: Nt(),
      value: C,
      onValueChange: N,
      open: O,
      onOpenChange: A,
      dir: P,
      triggerPointerDownPosRef: _,
      disabled: p,
      children: [
        /* @__PURE__ */ b(hc.Provider, { scope: t, children: /* @__PURE__ */ b(
          mD,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((B) => {
              k((F) => new Set(F).add(B));
            }, []),
            onNativeOptionRemove: m.useCallback((B) => {
              k((F) => {
                const M = new Set(F);
                return M.delete(B), M;
              });
            }, []),
            children: r
          }
        ) }),
        R ? /* @__PURE__ */ j(
          qE,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: l,
            autoComplete: d,
            value: C,
            onChange: (B) => N(B.target.value),
            disabled: p,
            form: v,
            children: [
              C === void 0 ? /* @__PURE__ */ b("option", { value: "" }) : null,
              Array.from(D)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
xE.displayName = _n;
var EE = "SelectTrigger", SE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = vc(r), i = nn(EE, r), s = i.disabled || n, c = se(t, i.onTriggerChange), u = mc(r), l = m.useRef("touch"), [d, p, h] = GE((f) => {
      const g = u().filter((x) => !x.disabled), y = g.find((x) => x.value === i.value), w = YE(g, f, y);
      w !== void 0 && i.onValueChange(w.value);
    }), v = (f) => {
      s || (i.onOpenChange(!0), h()), f && (i.triggerPointerDownPosRef.current = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      });
    };
    return /* @__PURE__ */ b(op, { asChild: !0, ...a, children: /* @__PURE__ */ b(
      ee.button,
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
        "data-placeholder": HE(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (f) => {
          f.currentTarget.focus(), l.current !== "mouse" && v(f);
        }),
        onPointerDown: q(o.onPointerDown, (f) => {
          l.current = f.pointerType;
          const g = f.target;
          g.hasPointerCapture(f.pointerId) && g.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (v(f), f.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (f) => {
          const g = d.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && p(f.key), !(g && f.key === " ") && dD.includes(f.key) && (v(), f.preventDefault());
        })
      }
    ) });
  }
);
SE.displayName = EE;
var PE = "SelectValue", OE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = nn(PE, r), { onValueNodeHasChildrenChange: u } = c, l = a !== void 0, d = se(t, c.onValueNodeChange);
    return nt(() => {
      u(l);
    }, [u, l]), /* @__PURE__ */ b(
      ee.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: HE(c.value) ? /* @__PURE__ */ b(gt, { children: i }) : a
      }
    );
  }
);
OE.displayName = PE;
var gD = "SelectIcon", AE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ b(ee.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
AE.displayName = gD;
var yD = "SelectPortal", CE = (e) => /* @__PURE__ */ b(Pa, { asChild: !0, ...e });
CE.displayName = yD;
var Nn = "SelectContent", TE = m.forwardRef(
  (e, t) => {
    const r = nn(Nn, e.__scopeSelect), [n, o] = m.useState();
    if (nt(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Ea.createPortal(
        /* @__PURE__ */ b(_E, { scope: e.__scopeSelect, children: /* @__PURE__ */ b(hc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ b("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ b(NE, { ...e, ref: t });
  }
);
TE.displayName = Nn;
var Xt = 10, [_E, on] = So(Nn), bD = "SelectContentImpl", wD = /* @__PURE__ */ An("SelectContent.RemoveScroll"), NE = m.forwardRef(
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
    } = e, w = nn(Nn, r), [x, E] = m.useState(null), [S, P] = m.useState(null), O = se(t, (V) => E(V)), [A, C] = m.useState(null), [N, _] = m.useState(
      null
    ), R = mc(r), [D, k] = m.useState(!1), U = m.useRef(!1);
    m.useEffect(() => {
      if (x) return qf(x);
    }, [x]), Vf();
    const B = m.useCallback(
      (V) => {
        const [fe, ...L] = R().map(($) => $.ref.current), [H] = L.slice(-1), Q = document.activeElement;
        for (const $ of V)
          if ($ === Q || ($?.scrollIntoView({ block: "nearest" }), $ === fe && S && (S.scrollTop = 0), $ === H && S && (S.scrollTop = S.scrollHeight), $?.focus(), document.activeElement !== Q)) return;
      },
      [R, S]
    ), F = m.useCallback(
      () => B([A, x]),
      [B, A, x]
    );
    m.useEffect(() => {
      D && F();
    }, [D, F]);
    const { onOpenChange: M, triggerPointerDownPosRef: z } = w;
    m.useEffect(() => {
      if (x) {
        let V = { x: 0, y: 0 };
        const fe = (H) => {
          V = {
            x: Math.abs(Math.round(H.pageX) - (z.current?.x ?? 0)),
            y: Math.abs(Math.round(H.pageY) - (z.current?.y ?? 0))
          };
        }, L = (H) => {
          V.x <= 10 && V.y <= 10 ? H.preventDefault() : x.contains(H.target) || M(!1), document.removeEventListener("pointermove", fe), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", fe), document.addEventListener("pointerup", L, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", fe), document.removeEventListener("pointerup", L, { capture: !0 });
        };
      }
    }, [x, M, z]), m.useEffect(() => {
      const V = () => M(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [M]);
    const [ne, W] = GE((V) => {
      const fe = R().filter((Q) => !Q.disabled), L = fe.find((Q) => Q.ref.current === document.activeElement), H = YE(fe, V, L);
      H && setTimeout(() => H.ref.current.focus());
    }), re = m.useCallback(
      (V, fe, L) => {
        const H = !U.current && !L;
        (w.value !== void 0 && w.value === fe || H) && (C(V), H && (U.current = !0));
      },
      [w.value]
    ), te = m.useCallback(() => x?.focus(), [x]), oe = m.useCallback(
      (V, fe, L) => {
        const H = !U.current && !L;
        (w.value !== void 0 && w.value === fe || H) && _(V);
      },
      [w.value]
    ), ce = n === "popper" ? Ad : kE, ke = ce === Ad ? {
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
    return /* @__PURE__ */ b(
      _E,
      {
        scope: r,
        content: x,
        viewport: S,
        onViewportChange: P,
        itemRefCallback: re,
        selectedItem: A,
        onItemLeave: te,
        itemTextRefCallback: oe,
        focusSelectedItem: F,
        selectedItemText: N,
        position: n,
        isPositioned: D,
        searchRef: ne,
        children: /* @__PURE__ */ b(Js, { as: wD, allowPinchZoom: !0, children: /* @__PURE__ */ b(
          Xs,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: q(o, (V) => {
              w.trigger?.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ b(
              yo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ b(
                  ce,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...y,
                    ...ke,
                    onPlaced: () => k(!0),
                    ref: O,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: q(y.onKeyDown, (V) => {
                      const fe = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !fe && V.key.length === 1 && W(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let H = R().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (H = H.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const Q = V.target, $ = H.indexOf(Q);
                          H = H.slice($ + 1);
                        }
                        setTimeout(() => B(H)), V.preventDefault();
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
NE.displayName = bD;
var xD = "SelectItemAlignedPosition", kE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = nn(Nn, r), i = on(Nn, r), [s, c] = m.useState(null), [u, l] = m.useState(null), d = se(t, (O) => l(O)), p = mc(r), h = m.useRef(!1), v = m.useRef(!0), { viewport: f, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = i, x = m.useCallback(() => {
    if (a.trigger && a.valueNode && s && u && f && g && y) {
      const O = a.trigger.getBoundingClientRect(), A = u.getBoundingClientRect(), C = a.valueNode.getBoundingClientRect(), N = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const Q = N.left - A.left, $ = C.left - Q, Ee = O.left - $, de = O.width + Ee, Qe = Math.max(de, A.width), et = window.innerWidth - Xt, Yt = cv($, [
          Xt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xt, et - Qe)
        ]);
        s.style.minWidth = de + "px", s.style.left = Yt + "px";
      } else {
        const Q = A.right - N.right, $ = window.innerWidth - C.right - Q, Ee = window.innerWidth - O.right - $, de = O.width + Ee, Qe = Math.max(de, A.width), et = window.innerWidth - Xt, Yt = cv($, [
          Xt,
          Math.max(Xt, et - Qe)
        ]);
        s.style.minWidth = de + "px", s.style.right = Yt + "px";
      }
      const _ = p(), R = window.innerHeight - Xt * 2, D = f.scrollHeight, k = window.getComputedStyle(u), U = parseInt(k.borderTopWidth, 10), B = parseInt(k.paddingTop, 10), F = parseInt(k.borderBottomWidth, 10), M = parseInt(k.paddingBottom, 10), z = U + B + D + M + F, ne = Math.min(g.offsetHeight * 5, z), W = window.getComputedStyle(f), re = parseInt(W.paddingTop, 10), te = parseInt(W.paddingBottom, 10), oe = O.top + O.height / 2 - Xt, ce = R - oe, ke = g.offsetHeight / 2, V = g.offsetTop + ke, fe = U + B + V, L = z - fe;
      if (fe <= oe) {
        const Q = _.length > 0 && g === _[_.length - 1].ref.current;
        s.style.bottom = "0px";
        const $ = u.clientHeight - f.offsetTop - f.offsetHeight, Ee = Math.max(
          ce,
          ke + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? te : 0) + $ + F
        ), de = fe + Ee;
        s.style.height = de + "px";
      } else {
        const Q = _.length > 0 && g === _[0].ref.current;
        s.style.top = "0px";
        const Ee = Math.max(
          oe,
          U + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? re : 0) + ke
        ) + L;
        s.style.height = Ee + "px", f.scrollTop = fe - oe + f.offsetTop;
      }
      s.style.margin = `${Xt}px 0`, s.style.minHeight = ne + "px", s.style.maxHeight = R + "px", n?.(), requestAnimationFrame(() => h.current = !0);
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
  nt(() => x(), [x]);
  const [E, S] = m.useState();
  nt(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = m.useCallback(
    (O) => {
      O && v.current === !0 && (x(), w?.(), v.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ b(
    SD,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ b(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ b(
            ee.div,
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
var ED = "SelectPopperPosition", Ad = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Xt,
    ...a
  } = e, i = vc(r);
  return /* @__PURE__ */ b(
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
Ad.displayName = ED;
var [SD, gp] = So(Nn, {}), Cd = "SelectViewport", IE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = on(Cd, r), i = gp(Cd, r), s = se(t, a.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ j(gt, { children: [
      /* @__PURE__ */ b(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ b(hc.Slot, { scope: r, children: /* @__PURE__ */ b(
        ee.div,
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
          onScroll: q(o.onScroll, (u) => {
            const l = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p?.current && d) {
              const h = Math.abs(c.current - l.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - Xt * 2, f = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(f, g);
                if (y < v) {
                  const w = y + h, x = Math.min(v, w), E = w - x;
                  d.style.height = x + "px", d.style.bottom === "0px" && (l.scrollTop = E > 0 ? E : 0, d.style.justifyContent = "flex-end");
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
IE.displayName = Cd;
var RE = "SelectGroup", [PD, OD] = So(RE), ME = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Nt();
    return /* @__PURE__ */ b(PD, { scope: r, id: o, children: /* @__PURE__ */ b(ee.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
ME.displayName = RE;
var DE = "SelectLabel", jE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = OD(DE, r);
    return /* @__PURE__ */ b(ee.div, { id: o.id, ...n, ref: t });
  }
);
jE.displayName = DE;
var ns = "SelectItem", [AD, LE] = So(ns), $E = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = nn(ns, r), c = on(ns, r), u = s.value === n, [l, d] = m.useState(a ?? ""), [p, h] = m.useState(!1), v = se(
      t,
      (w) => c.itemRefCallback?.(w, n, o)
    ), f = Nt(), g = m.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ b(
      AD,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: f,
        isSelected: u,
        onItemTextChange: m.useCallback((w) => {
          d((x) => x || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ b(
          hc.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: l,
            children: /* @__PURE__ */ b(
              ee.div,
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
                onFocus: q(i.onFocus, () => h(!0)),
                onBlur: q(i.onBlur, () => h(!1)),
                onClick: q(i.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: q(i.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (w) => {
                  g.current = w.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: q(i.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (fD.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
$E.displayName = ns;
var Yo = "SelectItemText", BE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = nn(Yo, r), s = on(Yo, r), c = LE(Yo, r), u = vD(Yo, r), [l, d] = m.useState(null), p = se(
      t,
      (y) => d(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = l?.textContent, v = m.useMemo(
      () => /* @__PURE__ */ b("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: g } = u;
    return nt(() => (f(v), () => g(v)), [f, g, v]), /* @__PURE__ */ j(gt, { children: [
      /* @__PURE__ */ b(ee.span, { id: c.textId, ...a, ref: p }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ea.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
BE.displayName = Yo;
var FE = "SelectItemIndicator", zE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return LE(FE, r).isSelected ? /* @__PURE__ */ b(ee.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
zE.displayName = FE;
var Td = "SelectScrollUpButton", UE = m.forwardRef((e, t) => {
  const r = on(Td, e.__scopeSelect), n = gp(Td, e.__scopeSelect), [o, a] = m.useState(!1), i = se(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        a(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ b(
    KE,
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
UE.displayName = Td;
var _d = "SelectScrollDownButton", WE = m.forwardRef((e, t) => {
  const r = on(_d, e.__scopeSelect), n = gp(_d, e.__scopeSelect), [o, a] = m.useState(!1), i = se(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, l = Math.ceil(c.scrollTop) < u;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ b(
    KE,
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
WE.displayName = _d;
var KE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = on("SelectScrollButton", r), i = m.useRef(null), s = mc(r), c = m.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), nt(() => {
    s().find((l) => l.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ b(
    ee.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), CD = "SelectSeparator", VE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ b(ee.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
VE.displayName = CD;
var Nd = "SelectArrow", TD = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = vc(r), a = nn(Nd, r), i = on(Nd, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ b(ip, { ...o, ...n, ref: t }) : null;
  }
);
TD.displayName = Nd;
var _D = "SelectBubbleInput", qE = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = m.useRef(null), a = se(n, o), i = Hs(t);
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
    }, [i, t]), /* @__PURE__ */ b(
      ee.select,
      {
        ...r,
        style: { ...wE, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
qE.displayName = _D;
function HE(e) {
  return e === "" || e === void 0;
}
function GE(e) {
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
function YE(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = ND(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function ND(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var kD = xE, XE = SE, ID = OE, RD = AE, MD = CE, ZE = TE, DD = IE, jD = ME, JE = jE, QE = $E, LD = BE, $D = zE, eS = UE, tS = WE, rS = VE;
const BD = kD, nX = jD, FD = ID, nS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ j(
  XE,
  {
    ref: n,
    className: K(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ b(RD, { asChild: !0, children: /* @__PURE__ */ b(ra, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nS.displayName = XE.displayName;
const oS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  eS,
  {
    ref: r,
    className: K(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(qw, { className: "h-4 w-4" })
  }
));
oS.displayName = eS.displayName;
const aS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  tS,
  {
    ref: r,
    className: K(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(ra, { className: "h-4 w-4" })
  }
));
aS.displayName = tS.displayName;
const iS = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ b(MD, { children: /* @__PURE__ */ j(
  ZE,
  {
    ref: o,
    className: K(
      "relative z-[250] max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ b(oS, {}),
      /* @__PURE__ */ b(
        DD,
        {
          className: K(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ b(aS, {})
    ]
  }
) }));
iS.displayName = ZE.displayName;
const zD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  JE,
  {
    ref: r,
    className: K("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
zD.displayName = JE.displayName;
const sS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ j(
  QE,
  {
    ref: n,
    className: K(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b($D, { children: /* @__PURE__ */ b(Qn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b(LD, { children: t })
    ]
  }
));
sS.displayName = QE.displayName;
const UD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rS,
  {
    ref: r,
    className: K("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
UD.displayName = rS.displayName;
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
    }, [d]), /* @__PURE__ */ j(
      BD,
      {
        value: t,
        onValueChange: r,
        disabled: a,
        open: d,
        onOpenChange: p,
        children: [
          /* @__PURE__ */ b(nS, { ref: c, className: i, children: /* @__PURE__ */ b(FD, { placeholder: n }) }),
          /* @__PURE__ */ j(iS, { children: [
            /* @__PURE__ */ j("div", { className: "flex items-center border-b px-3 pb-2", children: [
              /* @__PURE__ */ b(z_, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
              /* @__PURE__ */ b(
                a0,
                {
                  placeholder: o,
                  value: u,
                  onChange: (v) => l(v.target.value),
                  className: "h-8 border-0 shadow-none focus-visible:ring-0 px-0 bg-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "max-h-[300px] overflow-auto", children: h.length === 0 ? /* @__PURE__ */ b("div", { className: "py-6 text-center text-sm text-muted-foreground", children: s }) : h.map((v) => /* @__PURE__ */ b(sS, { value: v.value, children: v.label }, v.value)) })
          ] })
        ]
      }
    );
  }
);
WD.displayName = "SearchableSelect";
var yp = "Radio", [KD, cS] = Et(yp), [VD, qD] = KD(yp), lS = m.forwardRef(
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
    return /* @__PURE__ */ j(VD, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ b(
        ee.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": pS(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...l,
          ref: h,
          onClick: q(e.onClick, (g) => {
            o || c?.(), f && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      f && /* @__PURE__ */ b(
        fS,
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
lS.displayName = yp;
var uS = "RadioIndicator", dS = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = qD(uS, r);
    return /* @__PURE__ */ b(Dt, { present: n || a.checked, children: /* @__PURE__ */ b(
      ee.span,
      {
        "data-state": pS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
dS.displayName = uS;
var HD = "RadioBubbleInput", fS = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = m.useRef(null), s = se(i, a), c = Hs(r), u = Gs(t);
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
    }, [c, r, n]), /* @__PURE__ */ b(
      ee.input,
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
fS.displayName = HD;
function pS(e) {
  return e ? "checked" : "unchecked";
}
var GD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], gc = "RadioGroup", [YD] = Et(gc, [
  Eo,
  cS
]), hS = Eo(), mS = cS(), [XD, ZD] = YD(gc), vS = m.forwardRef(
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
    } = e, h = hS(r), v = Oa(u), [f, g] = Vt({
      prop: a,
      defaultProp: o ?? null,
      onChange: d,
      caller: gc
    });
    return /* @__PURE__ */ b(
      XD,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: f,
        onValueChange: g,
        children: /* @__PURE__ */ b(
          sp,
          {
            asChild: !0,
            ...h,
            orientation: c,
            dir: v,
            loop: l,
            children: /* @__PURE__ */ b(
              ee.div,
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
vS.displayName = gc;
var gS = "RadioGroupItem", yS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = ZD(gS, r), i = a.disabled || n, s = hS(r), c = mS(r), u = m.useRef(null), l = se(t, u), d = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (f) => {
        GD.includes(f.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ b(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: d,
        children: /* @__PURE__ */ b(
          lS,
          {
            disabled: i,
            required: a.required,
            checked: d,
            ...c,
            ...o,
            name: a.name,
            ref: l,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: q((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: q(o.onFocus, () => {
              p.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
yS.displayName = gS;
var JD = "RadioGroupIndicator", bS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = mS(r);
    return /* @__PURE__ */ b(dS, { ...o, ...n, ref: t });
  }
);
bS.displayName = JD;
var wS = vS, xS = yS, QD = bS;
const e2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  wS,
  {
    className: K("grid gap-2", e),
    ...t,
    ref: r
  }
));
e2.displayName = wS.displayName;
const t2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  xS,
  {
    ref: r,
    className: K(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(QD, { className: "flex items-center justify-center", children: /* @__PURE__ */ b(Hw, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
t2.displayName = xS.displayName;
var yc = "Switch", [r2] = Et(yc), [n2, o2] = r2(yc), ES = m.forwardRef(
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
    } = e, [p, h] = m.useState(null), v = se(t, (x) => h(x)), f = m.useRef(!1), g = p ? l || !!p.closest("form") : !0, [y, w] = Vt({
      prop: o,
      defaultProp: a ?? !1,
      onChange: u,
      caller: yc
    });
    return /* @__PURE__ */ j(n2, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ b(
        ee.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": AS(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: v,
          onClick: q(e.onClick, (x) => {
            w((E) => !E), g && (f.current = x.isPropagationStopped(), f.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ b(
        OS,
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
ES.displayName = yc;
var SS = "SwitchThumb", PS = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = o2(SS, r);
    return /* @__PURE__ */ b(
      ee.span,
      {
        "data-state": AS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
PS.displayName = SS;
var a2 = "SwitchBubbleInput", OS = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = m.useRef(null), s = se(i, a), c = Hs(r), u = Gs(t);
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
    }, [c, r, n]), /* @__PURE__ */ b(
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
OS.displayName = a2;
function AS(e) {
  return e ? "checked" : "unchecked";
}
var CS = ES, i2 = PS;
const s2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  CS,
  {
    className: K(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ b(
      i2,
      {
        className: K(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
s2.displayName = CS.displayName;
var bc = "Tabs", [c2] = Et(bc, [
  Eo
]), TS = Eo(), [l2, bp] = c2(bc), _S = m.forwardRef(
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
    } = e, l = Oa(s), [d, p] = Vt({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: bc
    });
    return /* @__PURE__ */ b(
      l2,
      {
        scope: r,
        baseId: Nt(),
        value: d,
        onValueChange: p,
        orientation: i,
        dir: l,
        activationMode: c,
        children: /* @__PURE__ */ b(
          ee.div,
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
_S.displayName = bc;
var NS = "TabsList", kS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = bp(NS, r), i = TS(r);
    return /* @__PURE__ */ b(
      sp,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ b(
          ee.div,
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
kS.displayName = NS;
var IS = "TabsTrigger", RS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = bp(IS, r), s = TS(r), c = jS(i.baseId, n), u = LS(i.baseId, n), l = n === i.value;
    return /* @__PURE__ */ b(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: l,
        children: /* @__PURE__ */ b(
          ee.button,
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
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(n) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(n);
            }),
            onFocus: q(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !l && !o && d && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
RS.displayName = IS;
var MS = "TabsContent", DS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = bp(MS, r), c = jS(s.baseId, n), u = LS(s.baseId, n), l = n === s.value, d = m.useRef(l);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ b(Dt, { present: o || l, children: ({ present: p }) => /* @__PURE__ */ b(
      ee.div,
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
DS.displayName = MS;
function jS(e, t) {
  return `${e}-trigger-${t}`;
}
function LS(e, t) {
  return `${e}-content-${t}`;
}
var u2 = _S, $S = kS, BS = RS, FS = DS;
const oX = u2, d2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  $S,
  {
    ref: r,
    className: K(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
d2.displayName = $S.displayName;
const f2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  BS,
  {
    ref: r,
    className: K(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
f2.displayName = BS.displayName;
const p2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  FS,
  {
    ref: r,
    className: K(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
p2.displayName = FS.displayName;
var wp = "ToastProvider", [xp, h2, m2] = ac("Toast"), [zS] = Et("Toast", [m2]), [v2, wc] = zS(wp), US = (e) => {
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
  ), /* @__PURE__ */ b(xp.Provider, { scope: t, children: /* @__PURE__ */ b(
    v2,
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
US.displayName = wp;
var WS = "ToastViewport", g2 = ["F8"], kd = "toast.viewportPause", Id = "toast.viewportResume", KS = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = g2,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = wc(WS, r), s = h2(r), c = m.useRef(null), u = m.useRef(null), l = m.useRef(null), d = m.useRef(null), p = se(t, d, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
    m.useEffect(() => {
      const g = (y) => {
        n.length !== 0 && n.every((x) => y[x] || y.code === x) && d.current?.focus();
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), m.useEffect(() => {
      const g = c.current, y = d.current;
      if (v && g && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const P = new CustomEvent(kd);
            y.dispatchEvent(P), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const P = new CustomEvent(Id);
            y.dispatchEvent(P), i.isClosePausedRef.current = !1;
          }
        }, E = (P) => {
          !g.contains(P.relatedTarget) && x();
        }, S = () => {
          g.contains(document.activeElement) || x();
        };
        return g.addEventListener("focusin", w), g.addEventListener("focusout", E), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", E), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [v, i.isClosePausedRef]);
    const f = m.useCallback(
      ({ tabbingDirection: g }) => {
        const w = s().map((x) => {
          const E = x.ref.current, S = [E, ...N2(E)];
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
          const x = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !x) {
            const S = document.activeElement, P = w.shiftKey;
            if (w.target === g && P) {
              u.current?.focus();
              return;
            }
            const C = f({ tabbingDirection: P ? "backwards" : "forwards" }), N = C.findIndex((_) => _ === S);
            Ml(C.slice(N + 1)) ? w.preventDefault() : P ? u.current?.focus() : l.current?.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, f]), /* @__PURE__ */ j(
      ck,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ b(
            Rd,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = f({
                  tabbingDirection: "forwards"
                });
                Ml(g);
              }
            }
          ),
          /* @__PURE__ */ b(xp.Slot, { scope: r, children: /* @__PURE__ */ b(ee.ol, { tabIndex: -1, ...a, ref: p }) }),
          v && /* @__PURE__ */ b(
            Rd,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = f({
                  tabbingDirection: "backwards"
                });
                Ml(g);
              }
            }
          )
        ]
      }
    );
  }
);
KS.displayName = WS;
var VS = "ToastFocusProxy", Rd = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = wc(VS, r);
    return /* @__PURE__ */ b(
      pc,
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
Rd.displayName = VS;
var ka = "Toast", y2 = "toast.swipeStart", b2 = "toast.swipeMove", w2 = "toast.swipeCancel", x2 = "toast.swipeEnd", qS = m.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = Vt({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: ka
    });
    return /* @__PURE__ */ b(Dt, { present: r || s, children: /* @__PURE__ */ b(
      P2,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: pt(e.onPause),
        onResume: pt(e.onResume),
        onSwipeStart: q(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: q(e.onSwipeMove, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: q(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: q(e.onSwipeEnd, (u) => {
          const { x: l, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${l}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
qS.displayName = ka;
var [E2, S2] = zS(ka, {
  onClose() {
  }
}), P2 = m.forwardRef(
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
    } = e, f = wc(ka, r), [g, y] = m.useState(null), w = se(t, (k) => y(k)), x = m.useRef(null), E = m.useRef(null), S = o || f.duration, P = m.useRef(0), O = m.useRef(S), A = m.useRef(0), { onToastAdd: C, onToastRemove: N } = f, _ = pt(() => {
      g?.contains(document.activeElement) && f.viewport?.focus(), i();
    }), R = m.useCallback(
      (k) => {
        !k || k === 1 / 0 || (window.clearTimeout(A.current), P.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(_, k));
      },
      [_]
    );
    m.useEffect(() => {
      const k = f.viewport;
      if (k) {
        const U = () => {
          R(O.current), u?.();
        }, B = () => {
          const F = (/* @__PURE__ */ new Date()).getTime() - P.current;
          O.current = O.current - F, window.clearTimeout(A.current), c?.();
        };
        return k.addEventListener(kd, B), k.addEventListener(Id, U), () => {
          k.removeEventListener(kd, B), k.removeEventListener(Id, U);
        };
      }
    }, [f.viewport, S, c, u, R]), m.useEffect(() => {
      a && !f.isClosePausedRef.current && R(S);
    }, [a, S, f.isClosePausedRef, R]), m.useEffect(() => (C(), () => N()), [C, N]);
    const D = m.useMemo(() => g ? QS(g) : null, [g]);
    return f.viewport ? /* @__PURE__ */ j(gt, { children: [
      D && /* @__PURE__ */ b(
        O2,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: D
        }
      ),
      /* @__PURE__ */ b(E2, { scope: r, onClose: _, children: Ea.createPortal(
        /* @__PURE__ */ b(xp.ItemSlot, { scope: r, children: /* @__PURE__ */ b(
          sk,
          {
            asChild: !0,
            onEscapeKeyDown: q(s, () => {
              f.isFocusedToastEscapeKeyDownRef.current || _(), f.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ b(
              ee.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": f.swipeDirection,
                ...v,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: q(e.onKeyDown, (k) => {
                  k.key === "Escape" && (s?.(k.nativeEvent), k.nativeEvent.defaultPrevented || (f.isFocusedToastEscapeKeyDownRef.current = !0, _()));
                }),
                onPointerDown: q(e.onPointerDown, (k) => {
                  k.button === 0 && (x.current = { x: k.clientX, y: k.clientY });
                }),
                onPointerMove: q(e.onPointerMove, (k) => {
                  if (!x.current) return;
                  const U = k.clientX - x.current.x, B = k.clientY - x.current.y, F = !!E.current, M = ["left", "right"].includes(f.swipeDirection), z = ["left", "up"].includes(f.swipeDirection) ? Math.min : Math.max, ne = M ? z(0, U) : 0, W = M ? 0 : z(0, B), re = k.pointerType === "touch" ? 10 : 2, te = { x: ne, y: W }, oe = { originalEvent: k, delta: te };
                  F ? (E.current = te, pi(b2, d, oe, {
                    discrete: !1
                  })) : lv(te, f.swipeDirection, re) ? (E.current = te, pi(y2, l, oe, {
                    discrete: !1
                  }), k.target.setPointerCapture(k.pointerId)) : (Math.abs(U) > re || Math.abs(B) > re) && (x.current = null);
                }),
                onPointerUp: q(e.onPointerUp, (k) => {
                  const U = E.current, B = k.target;
                  if (B.hasPointerCapture(k.pointerId) && B.releasePointerCapture(k.pointerId), E.current = null, x.current = null, U) {
                    const F = k.currentTarget, M = { originalEvent: k, delta: U };
                    lv(U, f.swipeDirection, f.swipeThreshold) ? pi(x2, h, M, {
                      discrete: !0
                    }) : pi(
                      w2,
                      p,
                      M,
                      {
                        discrete: !0
                      }
                    ), F.addEventListener("click", (z) => z.preventDefault(), {
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
), O2 = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = wc(ka, t), [a, i] = m.useState(!1), [s, c] = m.useState(!1);
  return T2(() => i(!0)), m.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ b(Pa, { asChild: !0, children: /* @__PURE__ */ b(pc, { ...n, children: a && /* @__PURE__ */ j(gt, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, A2 = "ToastTitle", HS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ b(ee.div, { ...n, ref: t });
  }
);
HS.displayName = A2;
var C2 = "ToastDescription", GS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ b(ee.div, { ...n, ref: t });
  }
);
GS.displayName = C2;
var YS = "ToastAction", XS = m.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ b(JS, { altText: r, asChild: !0, children: /* @__PURE__ */ b(Ep, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${YS}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
XS.displayName = YS;
var ZS = "ToastClose", Ep = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = S2(ZS, r);
    return /* @__PURE__ */ b(JS, { asChild: !0, children: /* @__PURE__ */ b(
      ee.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
Ep.displayName = ZS;
var JS = m.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ b(
    ee.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function QS(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), _2(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...QS(n));
    }
  }), t;
}
function pi(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, a) : o.dispatchEvent(a);
}
var lv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function T2(e = () => {
}) {
  const t = pt(e);
  nt(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function _2(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function N2(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ml(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var k2 = US, eP = KS, tP = qS, rP = HS, nP = GS, oP = XS, aP = Ep;
const I2 = k2, iP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  eP,
  {
    ref: r,
    className: K(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
iP.displayName = eP.displayName;
const R2 = Sa(
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
), sP = m.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ b(
  tP,
  {
    ref: n,
    className: K(R2({ variant: t }), e),
    ...r
  }
));
sP.displayName = tP.displayName;
const M2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  oP,
  {
    ref: r,
    className: K(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
M2.displayName = oP.displayName;
const cP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  aP,
  {
    ref: r,
    className: K(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ b(Ff, { className: "h-4 w-4" })
  }
));
cP.displayName = aP.displayName;
const lP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rP,
  {
    ref: r,
    className: K("text-sm font-semibold [&+div]:text-xs", e),
    ...t
  }
));
lP.displayName = rP.displayName;
const uP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nP,
  {
    ref: r,
    className: K("text-sm opacity-90", e),
    ...t
  }
));
uP.displayName = nP.displayName;
const D2 = 1, j2 = 1e6;
let Dl = 0;
function L2() {
  return Dl = (Dl + 1) % Number.MAX_SAFE_INTEGER, Dl.toString();
}
const jl = /* @__PURE__ */ new Map(), uv = (e) => {
  if (jl.has(e))
    return;
  const t = setTimeout(() => {
    jl.delete(e), Qo({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, j2);
  jl.set(e, t);
}, $2 = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, D2)
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
      return r ? uv(r) : e.toasts.forEach((n) => {
        uv(n.id);
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
let zi = { toasts: [] };
function Qo(e) {
  zi = $2(zi, e), Fi.forEach((t) => {
    t(zi);
  });
}
function Md({ ...e }) {
  const t = L2(), r = (o) => Qo({
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
function dP() {
  const [e, t] = m.useState(zi);
  return m.useEffect(() => (Fi.push(t), () => {
    const r = Fi.indexOf(t);
    r > -1 && Fi.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Md,
    dismiss: (r) => Qo({ type: "DISMISS_TOAST", toastId: r })
  };
}
function aX() {
  const { toasts: e } = dP();
  return /* @__PURE__ */ j(I2, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ j(sP, { ...a, children: [
        /* @__PURE__ */ j("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ b(lP, { children: r }),
          n && /* @__PURE__ */ b(uP, { children: n })
        ] }),
        o,
        /* @__PURE__ */ b(cP, {})
      ] }, t);
    }),
    /* @__PURE__ */ b(iP, {})
  ] });
}
var [xc] = Et("Tooltip", [
  xo
]), Ec = xo(), fP = "TooltipProvider", B2 = 700, Dd = "tooltip.open", [F2, Sp] = xc(fP), pP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = B2,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = m.useRef(!0), s = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ b(
    F2,
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
pP.displayName = fP;
var sa = "Tooltip", [z2, Sc] = xc(sa), hP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = Sp(sa, e.__scopeTooltip), u = Ec(t), [l, d] = m.useState(null), p = Nt(), h = m.useRef(0), v = i ?? c.disableHoverableContent, f = s ?? c.delayDuration, g = m.useRef(!1), [y, w] = Vt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Dd))) : c.onClose(), a?.(O);
    },
    caller: sa
  }), x = m.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), E = m.useCallback(() => {
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
  }, []), /* @__PURE__ */ b(uc, { ...u, children: /* @__PURE__ */ b(
    z2,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: x,
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
hP.displayName = sa;
var jd = "TooltipTrigger", mP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Sc(jd, r), a = Sp(jd, r), i = Ec(r), s = m.useRef(null), c = se(t, s, o.onTriggerChange), u = m.useRef(!1), l = m.useRef(!1), d = m.useCallback(() => u.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ b(op, { asChild: !0, ...i, children: /* @__PURE__ */ b(
      ee.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: q(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !l.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
mP.displayName = jd;
var U2 = "TooltipPortal", [iX, W2] = xc(U2, {
  forceMount: void 0
}), io = "TooltipContent", vP = m.forwardRef(
  (e, t) => {
    const r = W2(io, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Sc(io, e.__scopeTooltip);
    return /* @__PURE__ */ b(Dt, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ b(gP, { side: o, ...a, ref: t }) : /* @__PURE__ */ b(K2, { side: o, ...a, ref: t }) });
  }
), K2 = m.forwardRef((e, t) => {
  const r = Sc(io, e.__scopeTooltip), n = Sp(io, e.__scopeTooltip), o = m.useRef(null), a = se(t, o), [i, s] = m.useState(null), { trigger: c, onClose: u } = r, l = o.current, { onPointerInTransitChange: d } = n, p = m.useCallback(() => {
    s(null), d(!1);
  }, [d]), h = m.useCallback(
    (v, f) => {
      const g = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = Y2(y, g.getBoundingClientRect()), x = X2(y, w), E = Z2(f.getBoundingClientRect()), S = Q2([...x, ...E]);
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
        const g = f.target, y = { x: f.clientX, y: f.clientY }, w = c?.contains(g) || l?.contains(g), x = !J2(y, i);
        w ? p() : x && (p(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, l, i, u, p]), /* @__PURE__ */ b(gP, { ...e, ref: a });
}), [V2, q2] = xc(sa, { isInside: !1 }), H2 = /* @__PURE__ */ c_("TooltipContent"), gP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Sc(io, r), u = Ec(r), { onClose: l } = c;
    return m.useEffect(() => (document.addEventListener(Dd, l), () => document.removeEventListener(Dd, l)), [l]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          p.target?.contains(c.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, l]), /* @__PURE__ */ b(
      yo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ j(
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
              /* @__PURE__ */ b(H2, { children: n }),
              /* @__PURE__ */ b(V2, { scope: r, isInside: !0, children: /* @__PURE__ */ b(uD, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
vP.displayName = io;
var yP = "TooltipArrow", G2 = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ec(r);
    return q2(
      yP,
      r
    ).isInside ? null : /* @__PURE__ */ b(ip, { ...o, ...n, ref: t });
  }
);
G2.displayName = yP;
function Y2(e, t) {
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
function X2(e, t, r = 5) {
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
function Z2(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function J2(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function Q2(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), ej(t);
}
function ej(e) {
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
var tj = pP, rj = hP, nj = mP, bP = vP;
const sX = tj, cX = rj, lX = nj, oj = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ b(
  bP,
  {
    ref: n,
    sideOffset: t,
    className: K(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
oj.displayName = bP.displayName;
const wP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ b(
  "table",
  {
    ref: r,
    className: K("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
wP.displayName = "Table";
const xP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("thead", { ref: r, className: K("[&_tr]:border-b", e), ...t }));
xP.displayName = "TableHeader";
const EP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tbody",
  {
    ref: r,
    className: K("[&_tr:last-child]:border-0", e),
    ...t
  }
));
EP.displayName = "TableBody";
const aj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tfoot",
  {
    ref: r,
    className: K(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
aj.displayName = "TableFooter";
const Xo = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tr",
  {
    ref: r,
    className: K(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Xo.displayName = "TableRow";
const SP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "th",
  {
    ref: r,
    className: K(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
SP.displayName = "TableHead";
const Ui = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "td",
  {
    ref: r,
    className: K(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Ui.displayName = "TableCell";
const ij = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "caption",
  {
    ref: r,
    className: K("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
ij.displayName = "TableCaption";
const PP = m.forwardRef(
  ({
    className: e,
    title: t,
    subtitle: r,
    logo: n,
    items: o = [],
    groups: a = [],
    isCollapsed: i = !1,
    onToggleCollapse: s,
    width: c = 220,
    collapsedWidth: u = 64,
    showCollapseButton: l = !0,
    onLogout: d,
    onLogoClick: p,
    companyLogo: h,
    ...v
  }, f) => {
    const [g, y] = m.useState(!1), [w, x] = m.useState({});
    m.useEffect(() => {
      const A = {};
      a.forEach((C) => {
        A[C.label] = C.defaultExpanded !== !1;
      }), x(A);
    }, [a]);
    const E = s ? i : g, S = s || (() => y(!g)), P = (A) => {
      x((C) => ({
        ...C,
        [A]: !C[A]
      }));
    }, O = (A) => A.map((C) => /* @__PURE__ */ j(
      "div",
      {
        onClick: C.onClick,
        className: K(
          "relative flex items-center cursor-pointer transition-all my-0.5 font-medium text-muted-foreground",
          E ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
          C.active && "bg-primary/5 text-primary font-semibold",
          "hover:bg-accent hover:text-primary",
          C.active && "hover:bg-primary/10"
        ),
        children: [
          C.active && /* @__PURE__ */ b("div", { className: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary" }),
          C.icon && /* @__PURE__ */ b("div", { className: K("flex items-center justify-center w-5 h-5", !E && "mr-3"), children: C.icon }),
          !E && /* @__PURE__ */ b("span", { className: "text-sm whitespace-nowrap overflow-hidden text-ellipsis", children: C.label })
        ]
      },
      C.key
    ));
    return /* @__PURE__ */ j(
      "aside",
      {
        ref: f,
        className: K("fixed left-0 top-0 h-screen bg-card flex flex-col z-40 transition-all duration-300 overflow-visible shadow-sm", e),
        style: {
          width: E ? `${u}px` : `${c}px`
        },
        ...v,
        children: [
          (t || r || n) && /* @__PURE__ */ j(
            "div",
            {
              onClick: p,
              className: K(
                "flex items-center min-h-[60px] bg-card mb-1",
                E ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5",
                p && "cursor-pointer hover:bg-accent transition-colors"
              ),
              children: [
                n,
                !E && /* @__PURE__ */ j("div", { className: "flex-1 overflow-hidden ml-3", children: [
                  t && /* @__PURE__ */ b("div", { className: "font-bold text-base text-foreground leading-tight tracking-tight", children: t }),
                  r && /* @__PURE__ */ b("div", { className: "text-xs text-secondary font-medium leading-tight mt-1", children: r })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ j("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4 scrollbar-hide", children: [
            o.length > 0 && O(o),
            a.map((A) => {
              const C = w[A.label], N = A.collapsible !== !1;
              return /* @__PURE__ */ j("div", { className: "mb-6", children: [
                !E && /* @__PURE__ */ j(
                  "div",
                  {
                    onClick: () => N && P(A.label),
                    className: K(
                      "px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center justify-between",
                      N && "cursor-pointer hover:text-foreground transition-colors"
                    ),
                    children: [
                      /* @__PURE__ */ b("span", { children: A.label }),
                      N && /* @__PURE__ */ b("div", { className: "w-3 h-3", children: C ? /* @__PURE__ */ b(qw, { className: "w-3 h-3" }) : /* @__PURE__ */ b(ra, { className: "w-3 h-3" }) })
                    ]
                  }
                ),
                C && O(A.items)
              ] }, A.label);
            })
          ] }),
          h && !E && /* @__PURE__ */ b("div", { className: "mt-auto p-4 flex justify-center", children: /* @__PURE__ */ b(
            "img",
            {
              src: h,
              alt: "Logo da Empresa",
              className: "h-14 opacity-80 hover:opacity-100 transition-opacity"
            }
          ) }),
          l && /* @__PURE__ */ b(
            "button",
            {
              onClick: S,
              className: "absolute bottom-20 -right-3 bg-card border border-border rounded-sm p-1 cursor-pointer flex items-center justify-center transition-all w-6 h-6 shadow-sm hover:bg-accent hover:shadow-md active:scale-95",
              children: /* @__PURE__ */ b("div", { className: "w-3.5 h-3.5 text-muted-foreground flex items-center justify-center", children: E ? /* @__PURE__ */ b(Bf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ b(x_, { className: "w-3.5 h-3.5" }) })
            }
          )
        ]
      }
    );
  }
);
PP.displayName = "Sidebar";
const sj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: K("flex items-center border-b p-4", e), ...t })
);
sj.displayName = "SidebarHeader";
const cj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: K("flex-1 overflow-y-auto p-4", e), ...t })
);
cj.displayName = "SidebarContent";
const lj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: K("border-t p-4", e), ...t })
);
lj.displayName = "SidebarFooter";
const uj = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("nav", { ref: r, className: K("flex flex-col space-y-1", e), ...t })
);
uj.displayName = "SidebarNav";
const dj = m.forwardRef(
  ({ className: e, active: t, icon: r, children: n, ...o }, a) => /* @__PURE__ */ j(
    "a",
    {
      ref: a,
      className: K(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        t && "bg-accent text-accent-foreground",
        e
      ),
      ...o,
      children: [
        r && /* @__PURE__ */ b("span", { className: "flex-shrink-0", children: r }),
        /* @__PURE__ */ b("span", { className: "flex-1", children: n })
      ]
    }
  )
);
dj.displayName = "SidebarNavItem";
const OP = m.forwardRef(
  ({ className: e, items: t, separator: r, ...n }, o) => t.length === 0 ? null : /* @__PURE__ */ b(
    "nav",
    {
      ref: o,
      className: K("flex items-center gap-2 text-sm", e),
      "aria-label": "Breadcrumb",
      ...n,
      children: t.map((a, i) => /* @__PURE__ */ j(m.Fragment, { children: [
        /* @__PURE__ */ b(
          "span",
          {
            className: K(
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
        i < t.length - 1 && /* @__PURE__ */ b("span", { className: "text-border flex items-center select-none", children: r || /* @__PURE__ */ b(Bf, { className: "h-3.5 w-3.5" }) })
      ] }, i))
    }
  )
);
OP.displayName = "Breadcrumb";
const AP = m.createContext(null), fj = () => {
  const e = m.useContext(AP);
  if (!e)
    throw new Error("useTheme must be used within ThemeProvider");
  return e;
}, uX = ({
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
  return /* @__PURE__ */ b(AP.Provider, { value: { theme: n, setTheme: s, isDark: a, toggleDark: c }, children: e });
}, dv = [
  { value: "default", label: "Padrão", color: "bg-orange-600" }
], fv = [
  { value: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "en-US", label: "English (US)", flag: "🇺🇸" }
], CP = m.forwardRef(
  ({
    className: e,
    isCollapsed: t = !1,
    breadcrumbs: r = [],
    user: n,
    notifications: o = [],
    onNotificationRead: a,
    onMarkAllAsRead: i,
    onViewAllNotifications: s,
    userMenuTrigger: c,
    actions: u,
    modules: l,
    currentModule: d,
    onModuleChange: p,
    ...h
  }, v) => {
    const { theme: f, setTheme: g, isDark: y, toggleDark: w } = fj(), [x, E] = m.useState(!1), [S, P] = m.useState(!1), [O, A] = m.useState(!1), [C, N] = m.useState("pt-BR"), [_, R] = m.useState(!1), [D, k] = m.useState(!1), [U, B] = m.useState(!1), F = o.filter((W) => !W.read).length, M = F > 0, z = (W) => {
      switch (W) {
        case "success":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-success", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
        case "warning":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-warning", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) });
        case "error":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-destructive", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
        default:
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-info", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
      }
    }, ne = (W) => {
      const te = (/* @__PURE__ */ new Date()).getTime() - W.getTime(), oe = Math.floor(te / 6e4), ce = Math.floor(te / 36e5), ke = Math.floor(te / 864e5);
      return oe < 1 ? "Agora" : oe < 60 ? `${oe}m atrás` : ce < 24 ? `${ce}h atrás` : ke < 7 ? `${ke}d atrás` : W.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    };
    return /* @__PURE__ */ j(
      "nav",
      {
        ref: v,
        className: K(
          "fixed top-0 right-0 h-[52px] bg-card flex items-center justify-between px-5 transition-all duration-300 z-[100] shadow-sm",
          e
        ),
        style: {
          left: t ? "64px" : "220px"
        },
        ...h,
        children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-4", children: [
            l && l.length > 0 && p && /* @__PURE__ */ j("div", { className: "relative", children: [
              /* @__PURE__ */ j(
                "button",
                {
                  onClick: () => B(!U),
                  className: "flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent transition-colors",
                  children: [
                    l.find((W) => W.id === d)?.icon && /* @__PURE__ */ b("span", { className: "text-lg", children: l.find((W) => W.id === d)?.icon }),
                    /* @__PURE__ */ b("span", { className: "font-semibold text-sm text-foreground", children: l.find((W) => W.id === d)?.name || "Selecione" }),
                    /* @__PURE__ */ b(ra, { className: "h-4 w-4 text-muted-foreground" })
                  ]
                }
              ),
              U && /* @__PURE__ */ j(gt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => B(!1)
                  }
                ),
                /* @__PURE__ */ j("div", { className: "absolute left-0 top-full mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg z-50 py-2", children: [
                  /* @__PURE__ */ b("div", { className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase", children: "Módulos" }),
                  l.map((W) => /* @__PURE__ */ j(
                    "button",
                    {
                      onClick: () => {
                        p(W.id), B(!1);
                      },
                      className: K(
                        "w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-accent",
                        d === W.id && "bg-primary/5 text-primary font-medium"
                      ),
                      children: [
                        W.icon && /* @__PURE__ */ b("span", { className: "text-lg", children: W.icon }),
                        /* @__PURE__ */ b("span", { className: "flex-1 text-left", children: W.name }),
                        d === W.id && /* @__PURE__ */ b(Qn, { className: "h-4 w-4 text-primary" })
                      ]
                    },
                    W.id
                  ))
                ] })
              ] })
            ] }),
            r && r.length > 0 && /* @__PURE__ */ b(OP, { items: r })
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-4", children: [
            u,
            o && o.length >= 0 && /* @__PURE__ */ j("div", { className: "relative", children: [
              /* @__PURE__ */ j(
                "button",
                {
                  onClick: () => k(!D),
                  className: "relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
                  children: [
                    /* @__PURE__ */ b(Rm, { className: "h-5 w-5" }),
                    M && /* @__PURE__ */ j(gt, { children: [
                      /* @__PURE__ */ b("span", { className: "absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" }),
                      F > 0 && /* @__PURE__ */ b("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1", children: F > 9 ? "9+" : F })
                    ] })
                  ]
                }
              ),
              D && /* @__PURE__ */ j(gt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => k(!1)
                  }
                ),
                /* @__PURE__ */ j("div", { className: "absolute right-0 top-full mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[32rem] flex flex-col", children: [
                  /* @__PURE__ */ j("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
                    /* @__PURE__ */ j("div", { children: [
                      /* @__PURE__ */ b("h3", { className: "text-sm font-semibold text-foreground", children: "Notificações" }),
                      F > 0 && /* @__PURE__ */ j("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        F,
                        " não ",
                        F === 1 ? "lida" : "lidas"
                      ] })
                    ] }),
                    i && F > 0 && /* @__PURE__ */ b(
                      "button",
                      {
                        onClick: () => {
                          i();
                        },
                        className: "text-xs text-primary hover:text-primary/80 font-medium transition-colors",
                        children: "Marcar todas como lidas"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ b("div", { className: "overflow-y-auto flex-1 scrollbar-hide", children: o.length === 0 ? /* @__PURE__ */ j("div", { className: "flex flex-col items-center justify-center py-12 px-4", children: [
                    /* @__PURE__ */ b("div", { className: "w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-3", children: /* @__PURE__ */ b(Rm, { className: "h-8 w-8 text-muted-foreground/50" }) }),
                    /* @__PURE__ */ b("p", { className: "text-sm font-medium text-foreground", children: "Nenhuma notificação" }),
                    /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground mt-1", children: "Você está em dia!" })
                  ] }) : o.map((W) => /* @__PURE__ */ j(
                    "button",
                    {
                      onClick: () => {
                        a && !W.read && a(W.id);
                      },
                      className: K(
                        "w-full flex items-start gap-3 px-4 py-3 transition-colors hover:bg-accent border-b border-border/50 last:border-0 text-left",
                        !W.read && "bg-primary/5"
                      ),
                      children: [
                        z(W.type),
                        /* @__PURE__ */ j("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ j("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
                            /* @__PURE__ */ b("h4", { className: K(
                              "text-sm font-medium text-foreground line-clamp-1",
                              !W.read && "font-semibold"
                            ), children: W.title }),
                            !W.read && /* @__PURE__ */ b("div", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
                          ] }),
                          /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-1", children: W.message }),
                          /* @__PURE__ */ b("span", { className: "text-xs text-muted-foreground/70", children: ne(W.timestamp) })
                        ] })
                      ]
                    },
                    W.id
                  )) }),
                  s && o.length > 0 && /* @__PURE__ */ b("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ b(
                    "button",
                    {
                      onClick: () => {
                        s(), k(!1);
                      },
                      className: "w-full text-center py-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors hover:bg-accent rounded-md",
                      children: "Ver todas as notificações"
                    }
                  ) })
                ] })
              ] })
            ] }),
            c,
            n && !c && /* @__PURE__ */ j("div", { className: "relative", children: [
              /* @__PURE__ */ j(
                "button",
                {
                  onClick: () => E(!x),
                  className: "flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]",
                  children: [
                    /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: n.avatar || n.name.charAt(0).toUpperCase() }),
                    /* @__PURE__ */ j("div", { className: "hidden md:flex flex-col items-start", children: [
                      /* @__PURE__ */ b("span", { className: "text-sm font-semibold text-foreground leading-tight", children: n.name }),
                      /* @__PURE__ */ b("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: n.role })
                    ] }),
                    /* @__PURE__ */ b(ra, { className: "h-4 w-4 text-muted-foreground" })
                  ]
                }
              ),
              x && /* @__PURE__ */ j(gt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => {
                      E(!1), P(!1), A(!1);
                    }
                  }
                ),
                /* @__PURE__ */ j("div", { className: "absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-md shadow-lg z-50 py-2", children: [
                  /* @__PURE__ */ j("div", { className: "px-4 py-3 border-b border-border", children: [
                    /* @__PURE__ */ b("p", { className: "text-sm font-semibold", children: n.name }),
                    /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: n.role })
                  ] }),
                  /* @__PURE__ */ j("div", { className: "py-1", children: [
                    /* @__PURE__ */ j("button", { className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent", children: [
                      /* @__PURE__ */ b(Y_, { className: "h-4 w-4" }),
                      "Meu Perfil"
                    ] }),
                    /* @__PURE__ */ j(
                      "button",
                      {
                        onClick: () => {
                          R(!0), E(!1);
                        },
                        className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                        children: [
                          /* @__PURE__ */ b("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                          "Sobre"
                        ]
                      }
                    ),
                    /* @__PURE__ */ j("div", { className: "relative", children: [
                      /* @__PURE__ */ j(
                        "button",
                        {
                          onClick: (W) => {
                            W.stopPropagation(), A(!O), P(!1);
                          },
                          className: "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                          children: [
                            /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
                              /* @__PURE__ */ b(T_, { className: "h-4 w-4" }),
                              "Idioma"
                            ] }),
                            /* @__PURE__ */ b("span", { className: "text-lg", children: fv.find((W) => W.value === C)?.flag })
                          ]
                        }
                      ),
                      O && /* @__PURE__ */ b("div", { className: "absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1", children: fv.map((W) => /* @__PURE__ */ j(
                        "button",
                        {
                          onClick: (re) => {
                            re.stopPropagation(), N(W.value), A(!1), E(!1);
                          },
                          className: K(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                            C === W.value && "bg-accent"
                          ),
                          children: [
                            /* @__PURE__ */ b("span", { className: "text-xl", children: W.flag }),
                            /* @__PURE__ */ b("span", { className: "flex-1 text-left", children: W.label }),
                            C === W.value && /* @__PURE__ */ b(Qn, { className: "h-4 w-4 text-primary" })
                          ]
                        },
                        W.value
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ b("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ j("div", { className: "relative", children: [
                    /* @__PURE__ */ j(
                      "button",
                      {
                        onClick: (W) => {
                          W.stopPropagation(), P(!S), A(!1);
                        },
                        className: "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                        children: [
                          /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
                            /* @__PURE__ */ b(Gw, { className: "h-4 w-4" }),
                            "Tema"
                          ] }),
                          /* @__PURE__ */ b("span", { className: "text-xs text-muted-foreground", children: dv.find((W) => W.value === f)?.label })
                        ]
                      }
                    ),
                    S && /* @__PURE__ */ j("div", { className: "absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1", children: [
                      /* @__PURE__ */ b("div", { className: "px-3 py-2 border-b border-border", children: /* @__PURE__ */ j(
                        "button",
                        {
                          onClick: (W) => {
                            W.stopPropagation(), w();
                          },
                          className: "w-full flex items-center justify-between gap-3 py-1.5 text-sm transition-colors hover:text-primary",
                          children: [
                            /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
                              y ? /* @__PURE__ */ b(M_, { className: "h-4 w-4" }) : /* @__PURE__ */ b(V_, { className: "h-4 w-4" }),
                              /* @__PURE__ */ j("span", { children: [
                                "Modo ",
                                y ? "Escuro" : "Claro"
                              ] })
                            ] }),
                            /* @__PURE__ */ b("div", { className: K(
                              "relative w-9 h-5 rounded-full transition-colors",
                              y ? "bg-primary" : "bg-muted"
                            ), children: /* @__PURE__ */ b("div", { className: K(
                              "absolute top-0.5 w-4 h-4 rounded-full bg-background transition-transform",
                              y ? "left-[18px]" : "left-0.5"
                            ) }) })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ b("div", { className: "py-1", children: dv.map((W) => /* @__PURE__ */ j(
                        "button",
                        {
                          onClick: (re) => {
                            re.stopPropagation(), g(W.value), P(!1), E(!1);
                          },
                          className: K(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                            f === W.value && "bg-accent"
                          ),
                          children: [
                            /* @__PURE__ */ b(
                              "div",
                              {
                                className: K(
                                  "w-4 h-4 rounded-full",
                                  W.color
                                )
                              }
                            ),
                            /* @__PURE__ */ b("span", { className: "flex-1 text-left", children: W.label }),
                            f === W.value && /* @__PURE__ */ b(Qn, { className: "h-4 w-4 text-primary" })
                          ]
                        },
                        W.value
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ b("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ b("div", { className: "py-1", children: /* @__PURE__ */ j("button", { className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent text-destructive", children: [
                    /* @__PURE__ */ b(I_, { className: "h-4 w-4" }),
                    "Sair"
                  ] }) })
                ] })
              ] })
            ] })
          ] }),
          _ && /* @__PURE__ */ j(gt, { children: [
            /* @__PURE__ */ b(
              "div",
              {
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] animate-in fade-in duration-200",
                onClick: () => R(!1)
              }
            ),
            /* @__PURE__ */ j("div", { className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl z-[201] animate-in zoom-in-95 fade-in duration-200", children: [
              /* @__PURE__ */ b("div", { className: "relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border p-6", children: /* @__PURE__ */ j("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ b("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ b("svg", { className: "h-6 w-6 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
                  /* @__PURE__ */ j("div", { children: [
                    /* @__PURE__ */ b("h2", { className: "text-2xl font-bold text-foreground", children: "Sobre Nós" }),
                    /* @__PURE__ */ b("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Conheça nossa empresa e soluções" })
                  ] })
                ] }),
                /* @__PURE__ */ b(
                  "button",
                  {
                    onClick: () => R(!1),
                    className: "text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-accent rounded-md",
                    children: /* @__PURE__ */ b("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ j("div", { className: "p-6 space-y-6", children: [
                /* @__PURE__ */ j("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ j("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-md bg-success/10 flex items-center justify-center", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-success", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
                    /* @__PURE__ */ b("h3", { className: "text-lg font-semibold text-foreground", children: "Nossa Missão" })
                  ] }),
                  /* @__PURE__ */ b("p", { className: "text-sm text-muted-foreground leading-relaxed pl-10", children: "Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras e eficientes, transformando desafios complexos em oportunidades de crescimento para nossos clientes." })
                ] }),
                /* @__PURE__ */ j("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ j("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-md bg-info/10 flex items-center justify-center", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-info", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" }) }) }),
                    /* @__PURE__ */ b("h3", { className: "text-lg font-semibold text-foreground", children: "Nossos Sistemas" })
                  ] }),
                  /* @__PURE__ */ b("p", { className: "text-sm text-muted-foreground leading-relaxed pl-10", children: "Desenvolvidos com as melhores práticas de mercado, nossos sistemas garantem qualidade, segurança e performance excepcional. Utilizamos tecnologias modernas e metodologias ágeis para entregar soluções robustas e escaláveis." })
                ] }),
                /* @__PURE__ */ j("div", { className: "bg-muted/30 rounded-lg p-4 border border-border/50", children: [
                  /* @__PURE__ */ j("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }),
                    /* @__PURE__ */ b("h4", { className: "text-sm font-semibold text-foreground", children: "Tecnologias" })
                  ] }),
                  /* @__PURE__ */ j("div", { className: "flex flex-wrap gap-2 pl-6", children: [
                    /* @__PURE__ */ b("span", { className: "px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground", children: "C#" }),
                    /* @__PURE__ */ b("span", { className: "px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground", children: "PostgreSQL" }),
                    /* @__PURE__ */ b("span", { className: "px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground", children: "TypeScript" }),
                    /* @__PURE__ */ b("span", { className: "px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground", children: "React" }),
                    /* @__PURE__ */ b("span", { className: "px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground", children: ".NET" })
                  ] })
                ] }),
                /* @__PURE__ */ b("div", { className: "bg-primary/5 border border-primary/20 rounded-lg p-4", children: /* @__PURE__ */ j("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ j("div", { children: [
                    /* @__PURE__ */ b("p", { className: "text-sm font-medium text-foreground mb-1", children: "Saiba mais sobre nossas soluções" }),
                    /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: "Visite nosso site para conhecer todos os nossos produtos e serviços" })
                  ] }),
                  /* @__PURE__ */ j(
                    "a",
                    {
                      href: "https://teste.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-all font-medium text-sm shadow-sm hover:shadow-md",
                      children: [
                        "Visitar Site",
                        /* @__PURE__ */ b("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
                      ]
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ b("div", { className: "bg-muted/20 border-t border-border p-4 rounded-b-xl", children: /* @__PURE__ */ b("div", { className: "flex items-center justify-center text-xs text-muted-foreground", children: /* @__PURE__ */ b("span", { children: "© 2025 Todos os direitos reservados" }) }) })
            ] })
          ] })
        ]
      }
    );
  }
);
CP.displayName = "Navbar";
const TP = ({ isVisible: e, className: t }) => e ? /* @__PURE__ */ b(
  "div",
  {
    className: K(
      "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]",
      t
    ),
    children: /* @__PURE__ */ b("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ b("div", { className: "relative w-[200px] h-[200px] rounded-full border-[12px] border-border border-t-foreground animate-spin" }) })
  }
) : null;
TP.displayName = "GlobalLoader";
const _P = m.createContext(null), dX = () => {
  const e = m.useContext(_P);
  if (!e)
    throw new Error("useGlobalLoader must be used within GlobalLoaderProvider");
  return e;
}, fX = ({ children: e }) => {
  const [t, r] = m.useState(0), n = m.useCallback(() => {
    r((i) => i + 1);
  }, []), o = m.useCallback(() => {
    r((i) => Math.max(0, i - 1));
  }, []), a = t > 0;
  return /* @__PURE__ */ j(_P.Provider, { value: { isLoading: a, showLoader: n, hideLoader: o }, children: [
    e,
    /* @__PURE__ */ b(TP, { isVisible: a })
  ] });
}, pj = m.forwardRef(
  ({ title: e, icon: t, children: r, emptyMessage: n = "Nenhum dado disponível", isEmpty: o = !1, height: a = 400, className: i }, s) => /* @__PURE__ */ j("div", { ref: s, className: K("bg-card rounded-lg border shadow-sm", i), children: [
    e && /* @__PURE__ */ b("div", { className: "border-b px-6 py-4", children: /* @__PURE__ */ j("h3", { className: "text-lg font-semibold flex items-center gap-2", children: [
      t && /* @__PURE__ */ b("span", { className: "flex items-center", children: t }),
      e
    ] }) }),
    /* @__PURE__ */ b(
      "div",
      {
        className: "p-6",
        style: { height: typeof a == "number" ? `${a}px` : a },
        children: o ? /* @__PURE__ */ b("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: n }) : r
      }
    )
  ] })
);
pj.displayName = "ChartContainer";
var hj = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Pp(e) {
  if (typeof e != "string")
    return !1;
  var t = hj;
  return t.includes(e);
}
var mj = [
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
function NP(e) {
  if (typeof e != "string")
    return !1;
  var t = mj;
  return t.includes(e);
}
function kP(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function ht(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return NP(n) || kP(n);
  });
  return Object.fromEntries(t);
}
function kn(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Wt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return ht(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? ht(e) : null;
}
function mt(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return NP(n) || kP(n) || Pp(n);
  });
  return Object.fromEntries(t);
}
function IP(e) {
  return e == null ? null : /* @__PURE__ */ Wt(e) ? mt(e.props) : typeof e == "object" && !Array.isArray(e) ? mt(e) : null;
}
var vj = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ld() {
  return Ld = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ld.apply(null, arguments);
}
function gj(e, t) {
  if (e == null) return {};
  var r, n, o = yj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function yj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Op = /* @__PURE__ */ je((e, t) => {
  var {
    children: r,
    width: n,
    height: o,
    viewBox: a,
    className: i,
    style: s,
    title: c,
    desc: u
  } = e, l = gj(e, vj), d = a || {
    width: n,
    height: o,
    x: 0,
    y: 0
  }, p = ue("recharts-surface", i);
  return /* @__PURE__ */ m.createElement("svg", Ld({}, mt(l), {
    className: p,
    width: n,
    height: o,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ m.createElement("title", null, c), /* @__PURE__ */ m.createElement("desc", null, u), r);
}), bj = ["children", "className"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $d.apply(null, arguments);
}
function wj(e, t) {
  if (e == null) return {};
  var r, n, o = xj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function xj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Re = /* @__PURE__ */ m.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, o = wj(e, bj), a = ue("recharts-layer", n);
  return /* @__PURE__ */ m.createElement("g", $d({
    className: a
  }, mt(o), {
    ref: t
  }), r);
}), RP = /* @__PURE__ */ Mt(null), Ej = () => er(RP);
function Pe(e) {
  return function() {
    return e;
  };
}
const MP = Math.cos, os = Math.sin, rr = Math.sqrt, as = Math.PI, Pc = 2 * as, Bd = Math.PI, Fd = 2 * Bd, fn = 1e-6, Sj = Fd - fn;
function DP(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Pj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return DP;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class Oj {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? DP : Pj(t);
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
      let h = n - i, v = o - s, f = c * c + u * u, g = h * h + v * v, y = Math.sqrt(f), w = Math.sqrt(p), x = a * Math.tan((Bd - Math.acos((f + p - g) / (2 * y * w))) / 2), E = x / w, S = x / y;
      Math.abs(E - 1) > fn && this._append`L${t + E * l},${r + E * d}`, this._append`A${a},${a},0,0,${+(d * h > l * v)},${this._x1 = t + S * c},${this._y1 = r + S * u}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), u = t + s, l = r + c, d = 1 ^ i, p = i ? o - a : a - o;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > fn || Math.abs(this._y1 - l) > fn) && this._append`L${u},${l}`, n && (p < 0 && (p = p % Fd + Fd), p > Sj ? this._append`A${n},${n},0,1,${d},${t - s},${r - c}A${n},${n},0,1,${d},${this._x1 = u},${this._y1 = l}` : p > fn && this._append`A${n},${n},0,${+(p >= Bd)},${d},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
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
  }, () => new Oj(t);
}
function Cp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function jP(e) {
  this._context = e;
}
jP.prototype = {
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
function Oc(e) {
  return new jP(e);
}
function LP(e) {
  return e[0];
}
function $P(e) {
  return e[1];
}
function BP(e, t) {
  var r = Pe(!0), n = null, o = Oc, a = null, i = Ap(s);
  e = typeof e == "function" ? e : e === void 0 ? LP : Pe(e), t = typeof t == "function" ? t : t === void 0 ? $P : Pe(t);
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
function hi(e, t, r) {
  var n = null, o = Pe(!0), a = null, i = Oc, s = null, c = Ap(u);
  e = typeof e == "function" ? e : e === void 0 ? LP : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? $P : Pe(+r);
  function u(d) {
    var p, h, v, f = (d = Cp(d)).length, g, y = !1, w, x = new Array(f), E = new Array(f);
    for (a == null && (s = i(w = c())), p = 0; p <= f; ++p) {
      if (!(p < f && o(g = d[p], p, d)) === y)
        if (y = !y)
          h = p, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), v = p - 1; v >= h; --v)
            s.point(x[v], E[v]);
          s.lineEnd(), s.areaEnd();
        }
      y && (x[p] = +e(g, p, d), E[p] = +t(g, p, d), s.point(n ? +n(g, p, d) : x[p], r ? +r(g, p, d) : E[p]));
    }
    if (w) return s = null, w + "" || null;
  }
  function l() {
    return BP().defined(o).curve(i).context(a);
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
function Aj(e) {
  return new FP(e, !0);
}
function Cj(e) {
  return new FP(e, !1);
}
const Tp = {
  draw(e, t) {
    const r = rr(t / as);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Pc);
  }
}, Tj = {
  draw(e, t) {
    const r = rr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, zP = rr(1 / 3), _j = zP * 2, Nj = {
  draw(e, t) {
    const r = rr(t / _j), n = r * zP;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, kj = {
  draw(e, t) {
    const r = rr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Ij = 0.8908130915292852, UP = os(as / 10) / os(7 * as / 10), Rj = os(Pc / 10) * UP, Mj = -MP(Pc / 10) * UP, Dj = {
  draw(e, t) {
    const r = rr(t * Ij), n = Rj * r, o = Mj * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Pc * a / 5, s = MP(i), c = os(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Ll = rr(3), jj = {
  draw(e, t) {
    const r = -rr(t / (Ll * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ll * r, -r), e.lineTo(Ll * r, -r), e.closePath();
  }
}, Lt = -0.5, $t = rr(3) / 2, zd = 1 / rr(12), Lj = (zd / 2 + 1) * 3, $j = {
  draw(e, t) {
    const r = rr(t / Lj), n = r / 2, o = r * zd, a = n, i = r * zd + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Lt * n - $t * o, $t * n + Lt * o), e.lineTo(Lt * a - $t * i, $t * a + Lt * i), e.lineTo(Lt * s - $t * c, $t * s + Lt * c), e.lineTo(Lt * n + $t * o, Lt * o - $t * n), e.lineTo(Lt * a + $t * i, Lt * i - $t * a), e.lineTo(Lt * s + $t * c, Lt * c - $t * s), e.closePath();
  }
};
function Bj(e, t) {
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
function is() {
}
function ss(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function WP(e) {
  this._context = e;
}
WP.prototype = {
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
        ss(this, this._x1, this._y1);
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Fj(e) {
  return new WP(e);
}
function KP(e) {
  this._context = e;
}
KP.prototype = {
  areaStart: is,
  areaEnd: is,
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function zj(e) {
  return new KP(e);
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Uj(e) {
  return new VP(e);
}
function qP(e) {
  this._context = e;
}
qP.prototype = {
  areaStart: is,
  areaEnd: is,
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
function Wj(e) {
  return new qP(e);
}
function pv(e) {
  return e < 0 ? -1 : 1;
}
function hv(e, t, r) {
  var n = e._x1 - e._x0, o = t - e._x1, a = (e._y1 - e._y0) / (n || o < 0 && -0), i = (r - e._y1) / (o || n < 0 && -0), s = (a * o + i * n) / (n + o);
  return (pv(a) + pv(i)) * Math.min(Math.abs(a), Math.abs(i), 0.5 * Math.abs(s)) || 0;
}
function mv(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function $l(e, t, r) {
  var n = e._x0, o = e._y0, a = e._x1, i = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, o + s * t, a - s, i - s * r, a, i);
}
function cs(e) {
  this._context = e;
}
cs.prototype = {
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
        $l(this, this._t0, mv(this, this._t0));
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
          this._point = 3, $l(this, mv(this, r = hv(this, e, t)), r);
          break;
        default:
          $l(this, this._t0, r = hv(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function HP(e) {
  this._context = new GP(e);
}
(HP.prototype = Object.create(cs.prototype)).point = function(e, t) {
  cs.prototype.point.call(this, t, e);
};
function GP(e) {
  this._context = e;
}
GP.prototype = {
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
function Kj(e) {
  return new cs(e);
}
function Vj(e) {
  return new HP(e);
}
function YP(e) {
  this._context = e;
}
YP.prototype = {
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
        for (var n = vv(e), o = vv(t), a = 0, i = 1; i < r; ++a, ++i)
          this._context.bezierCurveTo(n[0][a], o[0][a], n[1][a], o[1][a], e[i], t[i]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function vv(e) {
  var t, r = e.length - 1, n, o = new Array(r), a = new Array(r), i = new Array(r);
  for (o[0] = 0, a[0] = 2, i[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, a[t] = 4, i[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, a[r - 1] = 7, i[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = o[t] / a[t - 1], a[t] -= n, i[t] -= n * i[t - 1];
  for (o[r - 1] = i[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) o[t] = (i[t] - o[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - o[t + 1];
  return [o, a];
}
function qj(e) {
  return new YP(e);
}
function Ac(e, t) {
  this._context = e, this._t = t;
}
Ac.prototype = {
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
function Hj(e) {
  return new Ac(e, 0.5);
}
function Gj(e) {
  return new Ac(e, 0);
}
function Yj(e) {
  return new Ac(e, 1);
}
function so(e, t) {
  if ((i = e.length) > 1)
    for (var r = 1, n, o, a = e[t[0]], i, s = a.length; r < i; ++r)
      for (o = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function Ud(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Xj(e, t) {
  return e[t];
}
function Zj(e) {
  const t = [];
  return t.key = e, t;
}
function Jj() {
  var e = Pe([]), t = Ud, r = so, n = Xj;
  function o(a) {
    var i = Array.from(e.apply(this, arguments), Zj), s, c = i.length, u = -1, l;
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
    return arguments.length ? (t = a == null ? Ud : typeof a == "function" ? a : Pe(Array.from(a)), o) : t;
  }, o.offset = function(a) {
    return arguments.length ? (r = a ?? so, o) : r;
  }, o;
}
function Qj(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, a = e[0].length, i; o < a; ++o) {
      for (i = r = 0; r < n; ++r) i += e[r][o][1] || 0;
      if (i) for (r = 0; r < n; ++r) e[r][o][1] /= i;
    }
    so(e, t);
  }
}
function eL(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, a = n.length; r < a; ++r) {
      for (var i = 0, s = 0; i < o; ++i) s += e[i][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    so(e, t);
  }
}
function tL(e, t) {
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
var Bl = {}, Fl = {}, gv;
function rL() {
  return gv || (gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Fl)), Fl;
}
var zl = {}, yv;
function XP() {
  return yv || (yv = 1, (function(e) {
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
  })(zl)), zl;
}
var Ul = {}, bv;
function _p() {
  return bv || (bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Ul)), Ul;
}
var Wl = {}, Kl = {}, wv;
function nL() {
  return wv || (wv = 1, (function(e) {
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
  })(Kl)), Kl;
}
var xv;
function Np() {
  return xv || (xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nL(), r = /* @__PURE__ */ _p();
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
  })(Wl)), Wl;
}
var Ev;
function kp() {
  return Ev || (Ev = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rL(), r = /* @__PURE__ */ XP(), n = /* @__PURE__ */ _p(), o = /* @__PURE__ */ Np();
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
  })(Bl)), Bl;
}
var Vl, Sv;
function oL() {
  return Sv || (Sv = 1, Vl = kp().get), Vl;
}
var aL = /* @__PURE__ */ oL();
const In = /* @__PURE__ */ an(aL);
var Ze = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, It = (e) => typeof e == "number" && e != +e, Nr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, Z = (e) => (typeof e == "number" || e instanceof Number) && !It(e), fr = (e) => Z(e) || typeof e == "string", iL = 0, ca = (e) => {
  var t = ++iL;
  return "".concat(e || "").concat(t);
}, ct = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!Z(t) && typeof t != "string")
    return n;
  var a;
  if (Nr(t)) {
    if (r == null)
      return n;
    var i = t.indexOf("%");
    a = r * parseFloat(t.slice(0, i)) / 100;
  } else
    a = +t;
  return It(a) && (a = n), o && r != null && a > r && (a = r), a;
}, ZP = (e) => {
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
  return Z(e) && Z(t) ? e + r * (t - e) : t;
}
function JP(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : In(n, t)) === r);
}
var Ae = (e) => e === null || typeof e > "u", Ia = (e) => Ae(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), sL = ["type", "size", "sizeType"];
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wd.apply(null, arguments);
}
function Pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(r), !0).forEach(function(n) {
      cL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cL(e, t, r) {
  return (t = lL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lL(e) {
  var t = uL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dL(e, t) {
  if (e == null) return {};
  var r, n, o = fL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function fL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var QP = {
  symbolCircle: Tp,
  symbolCross: Tj,
  symbolDiamond: Nj,
  symbolSquare: kj,
  symbolStar: Dj,
  symbolTriangle: jj,
  symbolWye: $j
}, pL = Math.PI / 180, hL = (e) => {
  var t = "symbol".concat(Ia(e));
  return QP[t] || Tp;
}, mL = (e, t, r) => {
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
      var n = 18 * pL;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, vL = (e, t) => {
  QP["symbol".concat(Ia(e))] = t;
}, Ip = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, o = dL(e, sL), a = Ov(Ov({}, o), {}, {
    type: t,
    size: r,
    sizeType: n
  }), i = "circle";
  typeof t == "string" && (i = t);
  var s = () => {
    var p = hL(i), h = Bj().type(p).size(mL(r, n, i)), v = h();
    if (v !== null)
      return v;
  }, {
    className: c,
    cx: u,
    cy: l
  } = a, d = mt(a);
  return u === +u && l === +l && r === +r ? /* @__PURE__ */ m.createElement("path", Wd({}, d, {
    className: ue("recharts-symbols", c),
    transform: "translate(".concat(u, ", ").concat(l, ")"),
    d: s()
  })) : null;
};
Ip.registerSymbol = vL;
var Rp = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Wt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((o) => {
    Pp(o) && (n[o] = ((a) => r[o](r, a)));
  }), n;
}, gL = (e, t, r) => (n) => (e(t, r, n), null), Ra = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((o) => {
    var a = e[o];
    Pp(o) && typeof a == "function" && (n || (n = {}), n[o] = gL(a, t, r));
  }), n;
};
function Kd() {
  return Kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kd.apply(null, arguments);
}
function Av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Av(Object(r), !0).forEach(function(n) {
      Mp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mp(e, t, r) {
  return (t = bL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bL(e) {
  var t = wL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bt = 32;
class Dp extends wa {
  /**
   * Render the path of icon
   * @param data Data of each legend item
   * @param iconType if defined, it will always render this icon. If undefined then it uses icon from data.type
   * @return Path element
   */
  renderIcon(t, r) {
    var {
      inactiveColor: n
    } = this.props, o = Bt / 2, a = Bt / 6, i = Bt / 3, s = t.inactive ? n : t.color, c = r ?? t.type;
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
        x2: Bt,
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
            H`).concat(Bt, "M").concat(2 * i, ",").concat(o, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(i, ",").concat(o),
        className: "recharts-legend-icon"
      });
    if (c === "rect")
      return /* @__PURE__ */ m.createElement("path", {
        stroke: "none",
        fill: s,
        d: "M0,".concat(Bt / 8, "h").concat(Bt, "v").concat(Bt * 3 / 4, "h").concat(-Bt, "z"),
        className: "recharts-legend-icon"
      });
    if (/* @__PURE__ */ m.isValidElement(t.legendIcon)) {
      var u = yL({}, t);
      return delete u.legendIcon, /* @__PURE__ */ m.cloneElement(t.legendIcon, u);
    }
    return /* @__PURE__ */ m.createElement(Ip, {
      fill: s,
      cx: o,
      cy: o,
      size: Bt,
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
      width: Bt,
      height: Bt
    }, c = {
      display: n === "horizontal" ? "inline-block" : "block",
      marginRight: 10
    }, u = {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: 4
    };
    return t.map((l, d) => {
      var p = l.formatter || o, h = ue({
        "recharts-legend-item": !0,
        ["legend-item-".concat(d)]: !0,
        inactive: l.inactive
      });
      if (l.type === "none")
        return null;
      var v = l.inactive ? a : l.color, f = p ? p(l.value, l, d) : l.value;
      return /* @__PURE__ */ m.createElement("li", Kd({
        className: h,
        style: c,
        key: "legend-item-".concat(d)
      }, Ra(this.props, l, d)), /* @__PURE__ */ m.createElement(Op, {
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
var ql = {}, Hl = {}, Cv;
function xL() {
  return Cv || (Cv = 1, (function(e) {
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
  })(Hl)), Hl;
}
var Gl = {}, Tv;
function e1() {
  return Tv || (Tv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Gl)), Gl;
}
var Yl = {}, Xl = {}, Zl = {}, _v;
function EL() {
  return _v || (_v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Zl)), Zl;
}
var Nv;
function jp() {
  return Nv || (Nv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ EL();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(Xl)), Xl;
}
var Jl = {}, kv;
function SL() {
  return kv || (kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Jl)), Jl;
}
var Iv;
function PL() {
  return Iv || (Iv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jp(), r = /* @__PURE__ */ SL();
    function n(o) {
      return r.isObjectLike(o) && t.isArrayLike(o);
    }
    e.isArrayLikeObject = n;
  })(Yl)), Yl;
}
var Ql = {}, eu = {}, Rv;
function OL() {
  return Rv || (Rv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kp();
    function r(n) {
      return function(o) {
        return t.get(o, n);
      };
    }
    e.property = r;
  })(eu)), eu;
}
var tu = {}, ru = {}, nu = {}, ou = {}, Mv;
function t1() {
  return Mv || (Mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(ou)), ou;
}
var au = {}, Dv;
function r1() {
  return Dv || (Dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(au)), au;
}
var iu = {}, jv;
function n1() {
  return jv || (jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(iu)), iu;
}
var Lv;
function AL() {
  return Lv || (Lv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ t1(), r = /* @__PURE__ */ r1(), n = /* @__PURE__ */ n1();
    function o(l, d, p) {
      return typeof p != "function" ? o(l, d, () => {
      }) : a(l, d, function h(v, f, g, y, w, x) {
        const E = p(v, f, g, y, w, x);
        return E !== void 0 ? !!E : a(v, f, h, x);
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
        for (let w = 0; w < l.length; w++) {
          if (v.has(w))
            continue;
          const x = l[w];
          let E = !1;
          if (p(x, g, f, l, d, h) && (E = !0), E) {
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
  })(nu)), nu;
}
var $v;
function o1() {
  return $v || ($v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ AL();
    function r(n, o) {
      return t.isMatchWith(n, o, () => {
      });
    }
    e.isMatch = r;
  })(ru)), ru;
}
var su = {}, cu = {}, lu = {}, Bv;
function CL() {
  return Bv || (Bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(lu)), lu;
}
var uu = {}, Fv;
function a1() {
  return Fv || (Fv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(uu)), uu;
}
var du = {}, zv;
function i1() {
  return zv || (zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", o = "[object Boolean]", a = "[object Arguments]", i = "[object Symbol]", s = "[object Date]", c = "[object Map]", u = "[object Set]", l = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", v = "[object Error]", f = "[object DataView]", g = "[object Uint8Array]", y = "[object Uint8ClampedArray]", w = "[object Uint16Array]", x = "[object Uint32Array]", E = "[object BigUint64Array]", S = "[object Int8Array]", P = "[object Int16Array]", O = "[object Int32Array]", A = "[object BigInt64Array]", C = "[object Float32Array]", N = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = p, e.arrayTag = l, e.bigInt64ArrayTag = A, e.bigUint64ArrayTag = E, e.booleanTag = o, e.dataViewTag = f, e.dateTag = s, e.errorTag = v, e.float32ArrayTag = C, e.float64ArrayTag = N, e.functionTag = d, e.int16ArrayTag = P, e.int32ArrayTag = O, e.int8ArrayTag = S, e.mapTag = c, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = u, e.stringTag = r, e.symbolTag = i, e.uint16ArrayTag = w, e.uint32ArrayTag = x, e.uint8ArrayTag = g, e.uint8ClampedArrayTag = y;
  })(du)), du;
}
var fu = {}, Uv;
function TL() {
  return Uv || (Uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(fu)), fu;
}
var Wv;
function s1() {
  return Wv || (Wv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ CL(), r = /* @__PURE__ */ a1(), n = /* @__PURE__ */ i1(), o = /* @__PURE__ */ r1(), a = /* @__PURE__ */ TL();
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
    e.cloneDeepWith = i, e.cloneDeepWithImpl = s, e.copyProperties = c;
  })(cu)), cu;
}
var Kv;
function _L() {
  return Kv || (Kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ s1();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(su)), su;
}
var Vv;
function NL() {
  return Vv || (Vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ o1(), r = /* @__PURE__ */ _L();
    function n(o) {
      return o = r.cloneDeep(o), (a) => t.isMatch(a, o);
    }
    e.matches = n;
  })(tu)), tu;
}
var pu = {}, hu = {}, mu = {}, qv;
function kL() {
  return qv || (qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ s1(), r = /* @__PURE__ */ i1();
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
  })(mu)), mu;
}
var Hv;
function IL() {
  return Hv || (Hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kL();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(hu)), hu;
}
var vu = {}, gu = {}, Gv;
function c1() {
  return Gv || (Gv = 1, (function(e) {
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
  })(gu)), gu;
}
var yu = {}, Yv;
function RL() {
  return Yv || (Yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ a1();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(yu)), yu;
}
var Xv;
function ML() {
  return Xv || (Xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ XP(), r = /* @__PURE__ */ c1(), n = /* @__PURE__ */ RL(), o = /* @__PURE__ */ Np();
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
  })(vu)), vu;
}
var Zv;
function DL() {
  return Zv || (Zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ o1(), r = /* @__PURE__ */ _p(), n = /* @__PURE__ */ IL(), o = /* @__PURE__ */ kp(), a = /* @__PURE__ */ ML();
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
  })(pu)), pu;
}
var Jv;
function jL() {
  return Jv || (Jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ e1(), r = /* @__PURE__ */ OL(), n = /* @__PURE__ */ NL(), o = /* @__PURE__ */ DL();
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
  })(Ql)), Ql;
}
var Qv;
function LL() {
  return Qv || (Qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xL(), r = /* @__PURE__ */ e1(), n = /* @__PURE__ */ PL(), o = /* @__PURE__ */ jL();
    function a(i, s = r.identity) {
      return n.isArrayLikeObject(i) ? t.uniqBy(Array.from(i), o.iteratee(s)) : [];
    }
    e.uniqBy = a;
  })(ql)), ql;
}
var bu, eg;
function $L() {
  return eg || (eg = 1, bu = LL().uniqBy), bu;
}
var BL = /* @__PURE__ */ $L();
const tg = /* @__PURE__ */ an(BL);
function l1(e, t, r) {
  return t === !0 ? tg(e, r) : typeof t == "function" ? tg(e, t) : e;
}
var mi = { exports: {} }, wu = {}, vi = { exports: {} }, xu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function FL() {
  if (rg) return xu;
  rg = 1;
  var e = Ot;
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
  return xu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, xu;
}
var Eu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;
function zL() {
  return ng || (ng = 1, process.env.NODE_ENV !== "production" && (function() {
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
        return !a(h, f);
      } catch {
        return !0;
      }
    }
    function n(h, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Ot, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, l = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Eu.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Eu;
}
var og;
function u1() {
  return og || (og = 1, process.env.NODE_ENV === "production" ? vi.exports = FL() : vi.exports = zL()), vi.exports;
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
var ag;
function UL() {
  if (ag) return wu;
  ag = 1;
  var e = Ot, t = u1();
  function r(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, a = e.useRef, i = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return wu.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
    var v = a(null);
    if (v.current === null) {
      var f = { hasValue: !1, value: null };
      v.current = f;
    } else f = v.current;
    v = s(
      function() {
        function y(P) {
          if (!w) {
            if (w = !0, x = P, P = p(P), h !== void 0 && f.hasValue) {
              var O = f.value;
              if (h(O, P))
                return E = O;
            }
            return E = P;
          }
          if (O = E, n(x, P)) return O;
          var A = p(P);
          return h !== void 0 && h(O, A) ? (x = P, O) : (x = P, E = A);
        }
        var w = !1, x, E, S = d === void 0 ? null : d;
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
  }, wu;
}
var Su = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ig;
function WL() {
  return ig || (ig = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, l) {
      return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ot, r = u1(), n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, a = t.useRef, i = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Su.useSyncExternalStoreWithSelector = function(u, l, d, p, h) {
      var v = a(null);
      if (v.current === null) {
        var f = { hasValue: !1, value: null };
        v.current = f;
      } else f = v.current;
      v = s(
        function() {
          function y(P) {
            if (!w) {
              if (w = !0, x = P, P = p(P), h !== void 0 && f.hasValue) {
                var O = f.value;
                if (h(O, P))
                  return E = O;
              }
              return E = P;
            }
            if (O = E, n(x, P))
              return O;
            var A = p(P);
            return h !== void 0 && h(O, A) ? (x = P, O) : (x = P, E = A);
          }
          var w = !1, x, E, S = d === void 0 ? null : d;
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
  })()), Su;
}
var sg;
function KL() {
  return sg || (sg = 1, process.env.NODE_ENV === "production" ? mi.exports = UL() : mi.exports = WL()), mi.exports;
}
var VL = KL(), Lp = /* @__PURE__ */ Mt(null), qL = (e) => e, _e = () => {
  var e = er(Lp);
  return e ? e.store.dispatch : qL;
}, Wi = () => {
}, HL = () => Wi, GL = (e, t) => e === t;
function J(e) {
  var t = er(Lp);
  return VL.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : HL, t ? t.store.getState : Wi, t ? t.store.getState : Wi, t ? e : Wi, GL);
}
var YL = (e, t, r) => {
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
}, XL = (e, t, r) => {
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
}, ZL = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function JL(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function QL(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function e$(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var cg = (e) => Array.isArray(e) ? e : [e];
function t$(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return e$(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function lg(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var r$ = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...ZL,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: YL
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: XL
    }
  };
}, n$ = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, o$ = typeof WeakRef < "u" ? WeakRef : n$, a$ = 0, ug = 1;
function gi() {
  return {
    s: a$,
    v: void 0,
    o: null,
    p: null
  };
}
function d1(e, t = {}) {
  let r = gi();
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
        f === void 0 ? (s = gi(), v.set(h, s)) : s = f;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const f = v.get(h);
        f === void 0 ? (s = gi(), v.set(h, s)) : s = f;
      }
    }
    const u = s;
    let l;
    if (s.s === ug)
      l = s.v;
    else if (l = e.apply(null, arguments), a++, n) {
      const d = o?.deref?.() ?? o;
      d != null && n(d, l) && (l = d, a !== 0 && a--), o = typeof l == "object" && l !== null || typeof l == "function" ? new o$(l) : l;
    }
    return u.s = ug, u.v = l, l;
  }
  return i.clearCache = () => {
    r = gi(), i.resetResultsCount();
  }, i.resultsCount = () => a, i.resetResultsCount = () => {
    a = 0;
  }, i;
}
function i$(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let a = 0, i = 0, s, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), JL(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const l = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: h = d1,
      argsMemoizeOptions: v = [],
      devModeChecks: f = {}
    } = l, g = cg(p), y = cg(v), w = t$(o), x = d(function() {
      return a++, u.apply(
        null,
        arguments
      );
    }, ...g);
    let E = !0;
    const S = h(function() {
      i++;
      const O = lg(
        w,
        arguments
      );
      if (s = x.apply(null, O), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: C } = r$(E, f);
        if (A.shouldRun && A.run(
          u,
          O,
          s
        ), C.shouldRun) {
          const N = lg(
            w,
            arguments
          );
          C.run(
            { inputSelectorResults: O, inputSelectorResultsCopy: N },
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
      memoizedResultFunc: x,
      dependencies: w,
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
var T = /* @__PURE__ */ i$(d1), s$ = Object.assign(
  (e, t = T) => {
    QL(
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
  { withTypes: () => s$ }
), Pu = {}, Ou = {}, Au = {}, dg;
function c$() {
  return dg || (dg = 1, (function(e) {
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
  })(Au)), Au;
}
var Cu = {}, Tu = {}, fg;
function f1() {
  return fg || (fg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Tu)), Tu;
}
var pg;
function l$() {
  return pg || (pg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ f1(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function o(a, i) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || i != null && Object.hasOwn(i, a);
    }
    e.isKey = o;
  })(Cu)), Cu;
}
var hg;
function u$() {
  return hg || (hg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ c$(), r = /* @__PURE__ */ l$(), n = /* @__PURE__ */ Np();
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
  })(Ou)), Ou;
}
var _u = {}, mg;
function d$() {
  return mg || (mg = 1, (function(e) {
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
  })(_u)), _u;
}
var Nu = {}, vg;
function p1() {
  return vg || (vg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ c1(), r = /* @__PURE__ */ jp(), n = /* @__PURE__ */ t1(), o = /* @__PURE__ */ n1();
    function a(i, s, c) {
      return n.isObject(c) && (typeof s == "number" && r.isArrayLike(c) && t.isIndex(s) && s < c.length || typeof s == "string" && s in c) ? o.eq(c[s], i) : !1;
    }
    e.isIterateeCall = a;
  })(Nu)), Nu;
}
var gg;
function f$() {
  return gg || (gg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ u$(), r = /* @__PURE__ */ d$(), n = /* @__PURE__ */ p1();
    function o(a, ...i) {
      const s = i.length;
      return s > 1 && n.isIterateeCall(a, i[0], i[1]) ? i = [] : s > 2 && n.isIterateeCall(i[0], i[1], i[2]) && (i = [i[0]]), t.orderBy(a, r.flatten(i), ["asc"]);
    }
    e.sortBy = o;
  })(Pu)), Pu;
}
var ku, yg;
function p$() {
  return yg || (yg = 1, ku = f$().sortBy), ku;
}
var h$ = /* @__PURE__ */ p$();
const Cc = /* @__PURE__ */ an(h$);
var h1 = (e) => e.legend.settings, m$ = (e) => e.legend.size, v$ = (e) => e.legend.payload, g$ = T([v$, h1], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Cc(n, r) : n;
});
function y$() {
  return J(g$);
}
var yi = 1;
function m1() {
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
        (Math.abs(i.height - t.height) > yi || Math.abs(i.left - t.left) > yi || Math.abs(i.top - t.top) > yi || Math.abs(i.width - t.width) > yi) && r({
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
var b$ = typeof Symbol == "function" && Symbol.observable || "@@observable", bg = b$, Iu = () => Math.random().toString(36).substring(7).split("").join("."), w$ = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Iu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Iu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Iu()}`
}, wn = w$;
function Ma(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function x$(e) {
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
  if (P$(e))
    return "date";
  if (S$(e))
    return "error";
  const r = E$(e);
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
function E$(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function S$(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function P$(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Vr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = x$(e)), t;
}
function v1(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(2) : `Expected the root reducer to be a function. Instead, received: '${Vr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(1) : `Expected the enhancer to be a function. Instead, received: '${Vr(r)}'`);
    return r(v1)(e, t);
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
    const w = s++;
    return i.set(w, g), function() {
      if (y) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? tt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, u(), i.delete(w), a = null;
      }
    };
  }
  function p(g) {
    if (!Ma(g))
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
    return (a = i).forEach((w) => {
      w();
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
        function w() {
          const E = y;
          E.next && E.next(l());
        }
        return w(), {
          unsubscribe: g(w)
        };
      },
      [bg]() {
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
    [bg]: v
  };
}
function wg(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function O$(e, t, r, n) {
  const o = Object.keys(t), a = r && r.type === wn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ma(e))
    return `The ${a} has unexpected type of "${Vr(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const i = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !n[s]);
  if (i.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === wn.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function A$(e) {
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
function g1(e) {
  const t = Object.keys(e), r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && wg(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let a;
  try {
    A$(r);
  } catch (i) {
    a = i;
  }
  return function(s = {}, c) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const d = O$(s, r, c, o);
      d && wg(d);
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
function ls(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function C$(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? tt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: o.getState,
      dispatch: (c, ...u) => a(c, ...u)
    }, s = e.map((c) => c(i));
    return a = ls(...s)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function $p(e) {
  return Ma(e) && "type" in e && typeof e.type == "string";
}
var y1 = Symbol.for("immer-nothing"), xg = Symbol.for("immer-draftable"), Rt = Symbol.for("immer-state"), T$ = process.env.NODE_ENV !== "production" ? [
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
function yt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = T$[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var la = Object.getPrototypeOf;
function Rn(e) {
  return !!e && !!e[Rt];
}
function kr(e) {
  return e ? b1(e) || Array.isArray(e) || !!e[xg] || !!e.constructor?.[xg] || Da(e) || _c(e) : !1;
}
var _$ = Object.prototype.constructor.toString(), Eg = /* @__PURE__ */ new WeakMap();
function b1(e) {
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
  let n = Eg.get(r);
  return n === void 0 && (n = Function.toString.call(r), Eg.set(r, n)), n === _$;
}
function us(e, t, r = !0) {
  Tc(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Tc(e) {
  const t = e[Rt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Da(e) ? 2 : _c(e) ? 3 : 0;
}
function Vd(e, t) {
  return Tc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function w1(e, t, r) {
  const n = Tc(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function N$(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Da(e) {
  return e instanceof Map;
}
function _c(e) {
  return e instanceof Set;
}
function pn(e) {
  return e.copy_ || e.base_;
}
function qd(e, t) {
  if (Da(e))
    return new Map(e);
  if (_c(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = b1(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Rt];
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
    return Object.create(la(e), n);
  } else {
    const n = la(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Bp(e, t = !1) {
  return Nc(e) || Rn(e) || !kr(e) || (Tc(e) > 1 && Object.defineProperties(e, {
    set: bi,
    add: bi,
    clear: bi,
    delete: bi
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Bp(r, !0))), e;
}
function k$() {
  yt(2);
}
var bi = {
  value: k$
};
function Nc(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var I$ = {};
function Mn(e) {
  const t = I$[e];
  return t || yt(0, e), t;
}
var ua;
function x1() {
  return ua;
}
function R$(e, t) {
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
function Sg(e, t) {
  t && (Mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Hd(e) {
  Gd(e), e.drafts_.forEach(M$), e.drafts_ = null;
}
function Gd(e) {
  e === ua && (ua = e.parent_);
}
function Pg(e) {
  return ua = R$(ua, e);
}
function M$(e) {
  const t = e[Rt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Og(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Rt].modified_ && (Hd(t), yt(4)), kr(e) && (e = ds(t, e), t.parent_ || fs(t, e)), t.patches_ && Mn("Patches").generateReplacementPatches_(
    r[Rt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ds(t, r, []), Hd(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== y1 ? e : void 0;
}
function ds(e, t, r) {
  if (Nc(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), o = t[Rt];
  if (!o)
    return us(
      t,
      (a, i) => Ag(e, o, t, a, i, r),
      n
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return fs(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const a = o.copy_;
    let i = a, s = !1;
    o.type_ === 3 && (i = new Set(a), a.clear(), s = !0), us(
      i,
      (c, u) => Ag(
        e,
        o,
        a,
        c,
        u,
        r,
        s
      ),
      n
    ), fs(e, a, !1), r && e.patches_ && Mn("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Ag(e, t, r, n, o, a, i) {
  if (o == null || typeof o != "object" && !i)
    return;
  const s = Nc(o);
  if (!(s && !i)) {
    if (process.env.NODE_ENV !== "production" && o === r && yt(5), Rn(o)) {
      const c = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Vd(t.assigned_, n) ? a.concat(n) : void 0, u = ds(e, o, c);
      if (w1(r, n, u), Rn(u))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else i && r.add(o);
    if (kr(o) && !s) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === o && s)
        return;
      ds(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Da(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && fs(e, o);
    }
  }
}
function fs(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Bp(t, r);
}
function D$(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : x1(),
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
  let o = n, a = Fp;
  r && (o = [n], a = da);
  const { revoke: i, proxy: s } = Proxy.revocable(o, a);
  return n.draft_ = s, n.revoke_ = i, s;
}
var Fp = {
  get(e, t) {
    if (t === Rt)
      return e;
    const r = pn(e);
    if (!Vd(r, t))
      return j$(e, r, t);
    const n = r[t];
    return e.finalized_ || !kr(n) ? n : n === Ru(e.base_, t) ? (Mu(e), e.copy_[t] = Xd(n, e)) : n;
  },
  has(e, t) {
    return t in pn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(pn(e));
  },
  set(e, t, r) {
    const n = E1(pn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Ru(pn(e), t), a = o?.[Rt];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (N$(r, o) && (r !== void 0 || Vd(e.base_, t)))
        return !0;
      Mu(e), Yd(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ru(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Mu(e), Yd(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    yt(11);
  },
  getPrototypeOf(e) {
    return la(e.base_);
  },
  setPrototypeOf() {
    yt(12);
  }
}, da = {};
us(Fp, (e, t) => {
  da[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
da.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && yt(13), da.set.call(this, e, t, void 0);
};
da.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && yt(14), Fp.set.call(this, e[0], t, r, e[0]);
};
function Ru(e, t) {
  const r = e[Rt];
  return (r ? pn(r) : e)[t];
}
function j$(e, t, r) {
  const n = E1(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function E1(e, t) {
  if (!(t in e))
    return;
  let r = la(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = la(r);
  }
}
function Yd(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Yd(e.parent_));
}
function Mu(e) {
  e.copy_ || (e.copy_ = qd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var L$ = class {
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
      typeof r != "function" && yt(6), n !== void 0 && typeof n != "function" && yt(7);
      let o;
      if (kr(t)) {
        const a = Pg(this), i = Xd(t, void 0);
        let s = !0;
        try {
          o = r(i), s = !1;
        } finally {
          s ? Hd(a) : Gd(a);
        }
        return Sg(a, n), Og(o, a);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === y1 && (o = void 0), this.autoFreeze_ && Bp(o, !0), n) {
          const a = [], i = [];
          Mn("Patches").generateReplacementPatches_(t, o, a, i), n(a, i);
        }
        return o;
      } else
        yt(1, t);
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
    kr(e) || yt(8), Rn(e) && (e = Or(e));
    const t = Pg(this), r = Xd(e, void 0);
    return r[Rt].isManual_ = !0, Gd(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Rt];
    (!r || !r.isManual_) && yt(9);
    const { scope_: n } = r;
    return Sg(n, t), Og(void 0, n);
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
function Xd(e, t) {
  const r = Da(e) ? Mn("MapSet").proxyMap_(e, t) : _c(e) ? Mn("MapSet").proxySet_(e, t) : D$(e, t);
  return (t ? t.scope_ : x1()).drafts_.push(r), r;
}
function Or(e) {
  return Rn(e) || yt(10, e), S1(e);
}
function S1(e) {
  if (!kr(e) || Nc(e))
    return e;
  const t = e[Rt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = qd(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = qd(e, !0);
  return us(
    r,
    (o, a) => {
      w1(r, o, S1(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var Zd = new L$(), P1 = Zd.produce, $$ = /* @__PURE__ */ Zd.setUseStrictIteration.bind(
  Zd
);
function O1(e) {
  return ({ dispatch: r, getState: n }) => (o) => (a) => typeof a == "function" ? a(r, n, e) : o(a);
}
var B$ = O1(), F$ = O1, z$ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ls : ls.apply(null, arguments);
}, U$ = (e) => e && typeof e.match == "function";
function qt(e, t) {
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => $p(n) && n.type === e, r;
}
function W$(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  U$(e);
}
function K$(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function V$(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = W$
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(K$(n.type)), r(n));
}
function A1(e, t) {
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
var C1 = class Zo extends Array {
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
function Cg(e) {
  return kr(e) ? P1(e, () => {
  }) : e;
}
function wi(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function q$(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function H$(e, t, r) {
  const n = T1(e, t, r);
  return {
    detectMutations() {
      return _1(e, t, n, r);
    }
  };
}
function T1(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), a.children = {};
    for (const i in r) {
      const s = n ? n + "." + i : i;
      t.length && t.indexOf(s) !== -1 || (a.children[i] = T1(e, t, r[i], s));
    }
  }
  return a;
}
function _1(e, t = [], r, n, o = !1, a = "") {
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
    const p = _1(e, t, r.children[l], n[l], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function G$(e = {}) {
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
      isImmutable: n = q$,
      ignoredPaths: o,
      warnAfter: a = 32
    } = e;
    const i = H$.bind(null, n, o);
    return ({
      getState: s
    }) => {
      let c = s(), u = i(c), l;
      return (d) => (p) => {
        const h = A1(a, "ImmutableStateInvariantMiddleware");
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
function N1(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ma(e);
}
function Jd(e, t = "", r = N1, n, o = [], a) {
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
      if (typeof l == "object" && (i = Jd(l, d, r, n, o, a), i))
        return i;
    }
  }
  return a && k1(e) && a.add(e), !1;
}
function k1(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !k1(t))
      return !1;
  return !0;
}
function Y$(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = N1,
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
      if (!$p(h))
        return p(h);
      const v = p(h), f = A1(i, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(h.type) !== -1) && f.measureTime(() => {
        const g = Jd(h, "", t, r, o, l);
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
        const g = d.getState(), y = Jd(g, "", t, r, a, l);
        if (y) {
          const {
            keyPath: w,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), f.warnIfExceeded()), v;
    };
  }
}
function xi(e) {
  return typeof e == "boolean";
}
var X$ = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let i = new C1();
  if (r && (xi(r) ? i.push(B$) : i.push(F$(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let s = {};
      xi(n) || (s = n), i.unshift(G$(s));
    }
    if (o) {
      let s = {};
      xi(o) || (s = o), i.push(Y$(s));
    }
    if (a) {
      let s = {};
      xi(a) || (s = a), i.unshift(V$(s));
    }
  }
  return i;
}, I1 = "RTK_autoBatch", ut = () => (e) => ({
  payload: e,
  meta: {
    [I1]: !0
  }
}), Tg = (e) => (t) => {
  setTimeout(t, e);
}, R1 = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, a = !1, i = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Tg(10)
  ) : e.type === "callback" ? e.queueNotification : Tg(e.timeout), u = () => {
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
        return o = !l?.meta?.[I1], a = !o, a && (i || (i = !0, c(u))), n.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, Z$ = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new C1(e);
  return n && o.push(R1(typeof n == "object" ? n : void 0)), o;
};
function J$(e) {
  const t = X$(), {
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
  else if (Ma(r))
    c = g1(r);
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
  let l = ls;
  o && (l = z$({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = C$(...u), p = Z$(d);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? he(5) : "`enhancers` field must be a callback");
  let h = typeof s == "function" ? s(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? he(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((f) => typeof f != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? he(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && u.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = l(...h);
  return v1(c, i, v);
}
function M1(e) {
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
$$(!1);
function Q$(e) {
  return typeof e == "function";
}
function eB(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? he(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = M1(t), a;
  if (Q$(e))
    a = () => Cg(e());
  else {
    const s = Cg(e);
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
          if (kr(l))
            return P1(l, (p) => d(p, c));
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
var tB = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", rB = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += tB[Math.random() * 64 | 0];
  return t;
}, nB = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function oB(e, t) {
  return `${e}/${t}`;
}
function aB({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[nB];
  return function(n) {
    const {
      name: o,
      reducerPath: a = o
    } = n;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? he(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const i = (typeof n.reducers == "function" ? n.reducers(sB()) : n.reducers) || {}, s = Object.keys(i), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(x, E) {
        const S = typeof x == "string" ? x : x.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? he(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? he(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return c.sliceCaseReducersByType[S] = E, u;
      },
      addMatcher(x, E) {
        return c.sliceMatchers.push({
          matcher: x,
          reducer: E
        }), u;
      },
      exposeAction(x, E) {
        return c.actionCreators[x] = E, u;
      },
      exposeCaseReducer(x, E) {
        return c.sliceCaseReducersByName[x] = E, u;
      }
    };
    s.forEach((x) => {
      const E = i[x], S = {
        reducerName: x,
        type: oB(o, x),
        createNotation: typeof n.reducers == "function"
      };
      lB(E) ? dB(S, E, u, t) : cB(S, E, u);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? he(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [x = {}, E = [], S = void 0] = typeof n.extraReducers == "function" ? M1(n.extraReducers) : [n.extraReducers], P = {
        ...x,
        ...c.sliceCaseReducersByType
      };
      return eB(n.initialState, (O) => {
        for (let A in P)
          O.addCase(A, P[A]);
        for (let A of c.sliceMatchers)
          O.addMatcher(A.matcher, A.reducer);
        for (let A of E)
          O.addMatcher(A.matcher, A.reducer);
        S && O.addDefaultCase(S);
      });
    }
    const d = (x) => x, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let v;
    function f(x, E) {
      return v || (v = l()), v(x, E);
    }
    function g() {
      return v || (v = l()), v.getInitialState();
    }
    function y(x, E = !1) {
      function S(O) {
        let A = O[x];
        if (typeof A > "u") {
          if (E)
            A = wi(h, S, g);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? he(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function P(O = d) {
        const A = wi(p, E, () => /* @__PURE__ */ new WeakMap());
        return wi(A, O, () => {
          const C = {};
          for (const [N, _] of Object.entries(n.selectors ?? {}))
            C[N] = iB(_, O, () => wi(h, O, g), E);
          return C;
        });
      }
      return {
        reducerPath: x,
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
      ...y(a),
      injectInto(x, {
        reducerPath: E,
        ...S
      } = {}) {
        const P = E ?? a;
        return x.inject({
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
function iB(e, t, r, n) {
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
var jt = /* @__PURE__ */ aB();
function sB() {
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
function cB({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let a, i;
  if ("reducer" in n) {
    if (r && !uB(n))
      throw new Error(process.env.NODE_ENV === "production" ? he(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, i = n.prepare;
  } else
    a = n;
  o.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, i ? qt(e, i) : qt(e));
}
function lB(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function uB(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function dB({
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
    fulfilled: i || Ei,
    pending: s || Ei,
    rejected: c || Ei,
    settled: u || Ei
  });
}
function Ei() {
}
var fB = "task", D1 = "listener", j1 = "completed", zp = "cancelled", pB = `task-${zp}`, hB = `task-${j1}`, Qd = `${D1}-${zp}`, mB = `${D1}-${j1}`, kc = class {
  constructor(e) {
    this.code = e, this.message = `${fB} ${zp} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Up = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? he(32) : `${t} is not a function`);
}, ps = () => {
}, L1 = (e, t = ps) => (e.catch(t), e), $1 = (e, t) => (e.addEventListener("abort", t, {
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
function B1(e, t) {
  let r = ps;
  return new Promise((n, o) => {
    const a = () => o(new kc(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = $1(e, a), t.finally(() => r()).then(n, o);
  }).finally(() => {
    r = ps;
  });
}
var vB = async (e, t) => {
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
}, hs = (e) => (t) => L1(B1(e, t).then((r) => (En(e), r))), F1 = (e) => {
  const t = hs(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: ro
} = Object, _g = {}, ja = "listenerMiddleware", gB = (e, t) => {
  const r = (n) => $1(e, () => xn(n, e.reason));
  return (n, o) => {
    Up(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const i = vB(async () => {
      En(e), En(a.signal);
      const s = await n({
        pause: hs(a.signal),
        delay: F1(a.signal),
        signal: a.signal
      });
      return En(a.signal), s;
    }, () => xn(a, hB));
    return o?.autoJoin && t.push(i.catch(ps)), {
      result: hs(e)(i),
      cancel() {
        xn(a, pB);
      }
    };
  };
}, yB = (e, t) => {
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
      const c = await B1(t, Promise.race(s));
      return En(t), c;
    } finally {
      a();
    }
  };
  return (n, o) => L1(r(n, o));
}, z1 = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: a
  } = e;
  if (t)
    o = qt(t).match;
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
}, U1 = /* @__PURE__ */ ro((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = z1(e);
  return {
    id: rB(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? he(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => U1
}), Ng = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: o
  } = z1(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === o) && a.effect === n);
}, ef = (e) => {
  e.pending.forEach((t) => {
    xn(t, Qd);
  });
}, bB = (e, t) => () => {
  for (const r of t.keys())
    ef(r);
  e.clear();
}, kg = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, W1 = /* @__PURE__ */ ro(/* @__PURE__ */ qt(`${ja}/add`), {
  withTypes: () => W1
}), wB = /* @__PURE__ */ qt(`${ja}/removeAll`), K1 = /* @__PURE__ */ ro(/* @__PURE__ */ qt(`${ja}/remove`), {
  withTypes: () => K1
}), xB = (...e) => {
  console.error(`${ja}/error`, ...e);
}, La = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const v = r.get(h) ?? 0;
    r.set(h, v + 1);
  }, o = (h) => {
    const v = r.get(h) ?? 1;
    v === 1 ? r.delete(h) : r.set(h, v - 1);
  }, {
    extra: a,
    onError: i = xB
  } = e;
  Up(i, "onError");
  const s = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (v) => {
    h.unsubscribe(), v?.cancelActive && ef(h);
  }), c = (h) => {
    const v = Ng(t, h) ?? U1(h);
    return s(v);
  };
  ro(c, {
    withTypes: () => c
  });
  const u = (h) => {
    const v = Ng(t, h);
    return v && (v.unsubscribe(), h.cancelActive && ef(v)), !!v;
  };
  ro(u, {
    withTypes: () => u
  });
  const l = async (h, v, f, g) => {
    const y = new AbortController(), w = yB(c, y.signal), x = [];
    try {
      h.pending.add(y), n(h), await Promise.resolve(h.effect(
        v,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        ro({}, f, {
          getOriginalState: g,
          condition: (E, S) => w(E, S).then(Boolean),
          take: w,
          delay: F1(y.signal),
          pause: hs(y.signal),
          extra: a,
          signal: y.signal,
          fork: gB(y.signal, x),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((E, S, P) => {
              E !== y && (xn(E, Qd), P.delete(E));
            });
          },
          cancel: () => {
            xn(y, Qd), h.pending.delete(y);
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
      await Promise.all(x), xn(y, mB), o(h), h.pending.delete(y);
    }
  }, d = bB(t, r);
  return {
    middleware: (h) => (v) => (f) => {
      if (!$p(f))
        return v(f);
      if (W1.match(f))
        return c(f.payload);
      if (wB.match(f)) {
        d();
        return;
      }
      if (K1.match(f))
        return u(f.payload);
      let g = h.getState();
      const y = () => {
        if (g === _g)
          throw new Error(process.env.NODE_ENV === "production" ? he(23) : `${ja}: getOriginalState can only be called synchronously`);
        return g;
      };
      let w;
      try {
        if (w = v(f), t.size > 0) {
          const x = h.getState(), E = Array.from(t.values());
          for (const S of E) {
            let P = !1;
            try {
              P = S.predicate(f, x, g);
            } catch (O) {
              P = !1, kg(i, O, {
                raisedBy: "predicate"
              });
            }
            P && l(S, f, h, y);
          }
        }
      } finally {
        g = _g;
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
var EB = {
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
}, V1 = jt({
  name: "chartLayout",
  initialState: EB,
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
  setMargin: SB,
  setLayout: PB,
  setChartSize: OB,
  setScale: AB
} = V1.actions, CB = V1.reducer;
function Ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), !0).forEach(function(n) {
      TB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TB(e, t, r) {
  return (t = _B(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _B(e) {
  var t = NB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ms = Math.PI / 180, kB = (e) => e * 180 / Math.PI, $e = (e, t, r, n) => ({
  x: e + Math.cos(-ms * n) * r,
  y: t + Math.sin(-ms * n) * r
}), q1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, IB = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: o,
    y: a
  } = t;
  return Math.sqrt((r - o) ** 2 + (n - a) ** 2);
}, RB = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: o,
    cy: a
  } = t, i = IB({
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
    angle: kB(c),
    angleInRadian: c
  };
}, MB = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), o = Math.floor(r / 360), a = Math.min(n, o);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, DB = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, o = Math.floor(r / 360), a = Math.floor(n / 360), i = Math.min(o, a);
  return e + i * 360;
}, jB = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: o,
    angle: a
  } = RB({
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
  } = MB(t), l = a, d;
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
  return d ? Rg(Rg({}, t), {}, {
    radius: o,
    angle: DB(l, t)
  }) : null;
};
function H1(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function Mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), !0).forEach(function(n) {
      LB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LB(e, t, r) {
  return (t = $B(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $B(e) {
  var t = BB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BB(e, t) {
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
var FB = (e, t, r, n, o) => {
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
        var y = Math.min(u, d), w = Math.max(u, d);
        if (e > (y + l) / 2 && e <= (w + l) / 2) {
          ({
            index: i
          } = r[c]);
          break;
        }
      }
    }
  else if (t) {
    for (var x = 0; x < s; x++)
      if (x === 0 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x > 0 && x < s - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x === s - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2) {
        ({
          index: i
        } = t[x]);
        break;
      }
  }
  return i;
}, zB = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: o
    } = r, {
      align: a,
      verticalAlign: i,
      layout: s
    } = t;
    if ((s === "vertical" || s === "horizontal" && i === "middle") && a !== "center" && Z(e[a]))
      return zt(zt({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((s === "horizontal" || s === "vertical" && a === "center") && i !== "middle" && Z(e[i]))
      return zt(zt({}, e), {}, {
        [i]: e[i] + (o || 0)
      });
  }
  return e;
}, gr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", G1 = (e, t, r, n) => {
  if (n)
    return e.map((s) => s.coordinate);
  var o, a, i = e.map((s) => (s.coordinate === t && (o = !0), s.coordinate === r && (a = !0), s.coordinate));
  return o || i.push(t), a || i.push(r), i;
}, Y1 = (e, t, r) => {
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
    var g = (d || p || []).map((y, w) => {
      var x = n ? n.indexOf(y) : y;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(x) + f,
        value: y,
        offset: f,
        index: w
      };
    });
    return g.filter((y) => !It(y.coordinate));
  }
  return c && u ? u.map((y, w) => ({
    coordinate: i(y) + f,
    value: y,
    index: w,
    offset: f
  })) : i.ticks && l != null ? i.ticks(l).map((y, w) => ({
    coordinate: i(y) + f,
    value: y,
    offset: f,
    index: w
  })) : i.domain().map((y, w) => ({
    coordinate: i(y) + f,
    value: n ? n[y] : y,
    index: w,
    offset: f
  }));
}, Dg = 1e-4, UB = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), o = Math.min(n[0], n[1]) - Dg, a = Math.max(n[0], n[1]) + Dg, i = e(t[0]), s = e(t[r - 1]);
    (i < o || i > a || s < o || s > a) && e.domain([t[0], t[r - 1]]);
  }
}, WB = (e, t) => {
  if (!t || t.length !== 2 || !Z(t[0]) || !Z(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), o = [e[0], e[1]];
  return (!Z(e[0]) || e[0] < r) && (o[0] = r), (!Z(e[1]) || e[1] > n) && (o[1] = n), o[0] > n && (o[0] = n), o[1] < r && (o[1] = r), o;
}, KB = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, a = 0, i = 0; i < t; ++i) {
        var s = It(e[i][r][1]) ? e[i][r][0] : e[i][r][1];
        s >= 0 ? (e[i][r][0] = o, e[i][r][1] = o + s, o = e[i][r][1]) : (e[i][r][0] = a, e[i][r][1] = a + s, a = e[i][r][1]);
      }
}, VB = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, a = 0; a < t; ++a) {
        var i = It(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        i >= 0 ? (e[a][r][0] = o, e[a][r][1] = o + i, o = e[a][r][1]) : (e[a][r][0] = 0, e[a][r][1] = 0);
      }
}, qB = {
  sign: KB,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Qj,
  // @ts-expect-error definitelytyped types are incorrect
  none: so,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: eL,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: tL,
  positive: VB
}, HB = (e, t, r) => {
  var n = qB[r], o = Jj().keys(t).value((a, i) => +xe(a, i, 0)).order(Ud).offset(n);
  return o(e);
};
function X1(e) {
  return e == null ? void 0 : String(e);
}
function vs(e) {
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
      var s = JP(r, "value", o[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = xe(o, Ae(i) ? t.dataKey : i);
  return Ae(c) ? null : t.scale(c);
}
var jg = (e) => {
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
}, GB = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), o = Math.max(r[0], r[1]);
    return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
  }
  return r[0];
}, YB = (e) => {
  var t = e.flat(2).filter(Z);
  return [Math.min(...t), Math.max(...t)];
}, XB = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], ZB = (e, t, r) => {
  if (e != null)
    return XB(Object.keys(e).reduce((n, o) => {
      var a = e[o], {
        stackedData: i
      } = a, s = i.reduce((c, u) => {
        var l = H1(u, t, r), d = YB(l);
        return [Math.min(c[0], d[0]), Math.max(c[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(s[0], n[0]), Math.max(s[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, Lg = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, $g = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dn = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var o = Cc(t, (l) => l.coordinate), a = 1 / 0, i = 1, s = o.length; i < s; i++) {
      var c = o[i], u = o[i - 1];
      a = Math.min((c.coordinate || 0) - (u.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function Bg(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: o,
    name: a
  } = e;
  return zt(zt({}, t), {}, {
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
function JB(e, t, r, n, o) {
  if (r === "horizontal" || r === "vertical") {
    var a = e >= o.left && e <= o.left + o.width && t >= o.top && t <= o.top + o.height;
    return a ? {
      x: e,
      y: t
    } : null;
  }
  return n ? jB({
    x: e,
    y: t
  }, n) : null;
}
var QB = (e, t, r, n) => {
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
      return zt(zt(zt({}, n), $e(n.cx, n.cy, i, a)), {}, {
        angle: a,
        radius: i
      });
    }
    var s = o.coordinate, {
      angle: c
    } = n;
    return zt(zt(zt({}, n), $e(n.cx, n.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return {
    x: 0,
    y: 0
  };
}, eF = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, jr = (e) => e.layout.width, Lr = (e) => e.layout.height, tF = (e) => e.layout.scale, Z1 = (e) => e.layout.margin, Ic = T((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Rc = T((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), J1 = "data-recharts-item-index", Q1 = "data-recharts-item-data-key", $a = 60;
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
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), !0).forEach(function(n) {
      rF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rF(e, t, r) {
  return (t = nF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nF(e) {
  var t = oF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aF = (e) => e.brush.height;
function iF(e) {
  var t = Rc(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : $a;
      return r + o;
    }
    return r;
  }, 0);
}
function sF(e) {
  var t = Rc(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : $a;
      return r + o;
    }
    return r;
  }, 0);
}
function cF(e) {
  var t = Ic(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function lF(e) {
  var t = Ic(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Ve = T([jr, Lr, Z1, aF, iF, sF, cF, lF, h1, m$], (e, t, r, n, o, a, i, s, c, u) => {
  var l = {
    left: (r.left || 0) + o,
    right: (r.right || 0) + a
  }, d = {
    top: (r.top || 0) + i,
    bottom: (r.bottom || 0) + s
  }, p = Si(Si({}, d), l), h = p.bottom;
  p.bottom += n, p = zB(p, c, u);
  var v = e - p.left - p.right, f = t - p.top - p.bottom;
  return Si(Si({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(v, 0),
    height: Math.max(f, 0)
  });
}), uF = T(Ve, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Wp = T(jr, Lr, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), dF = /* @__PURE__ */ Mt(null), ot = () => er(dF) != null, Mc = (e) => e.brush, Dc = T([Mc, Ve, Z1], (e, t, r) => ({
  height: e.height,
  x: Z(e.x) ? e.x : t.left,
  y: Z(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: Z(e.width) ? e.width : t.width
})), Du = {}, ju = {}, Lu = {}, zg;
function fF() {
  return zg || (zg = 1, (function(e) {
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
      }, y = function(...w) {
        if (o?.aborted)
          return;
        i = this, s = w;
        const x = p == null;
        h(), c && x && l();
      };
      return y.schedule = h, y.cancel = f, y.flush = g, o?.addEventListener("abort", f, { once: !0 }), y;
    }
    e.debounce = t;
  })(Lu)), Lu;
}
var Ug;
function pF() {
  return Ug || (Ug = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fF();
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
  })(ju)), ju;
}
var Wg;
function hF() {
  return Wg || (Wg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ pF();
    function r(n, o = 0, a = {}) {
      const { leading: i = !0, trailing: s = !0 } = a;
      return t.debounce(n, o, {
        leading: i,
        maxWait: o,
        trailing: s
      });
    }
    e.throttle = r;
  })(Du)), Du;
}
var $u, Kg;
function mF() {
  return Kg || (Kg = 1, $u = hF().throttle), $u;
}
var vF = /* @__PURE__ */ mF();
const gF = /* @__PURE__ */ an(vF);
var yF = process.env.NODE_ENV !== "production", gs = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (yF && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, () => o[i++]));
    }
}, eO = (e, t, r) => {
  var {
    width: n = "100%",
    height: o = "100%",
    aspect: a,
    maxHeight: i
  } = r, s = Nr(n) ? e : Number(n), c = Nr(o) ? t : Number(o);
  return a && a > 0 && (s ? c = s / a : c && (s = c * a), i && c > i && (c = i)), {
    calculatedWidth: s,
    calculatedHeight: c
  };
}, bF = {
  width: 0,
  height: 0,
  overflow: "visible"
}, wF = {
  width: 0,
  overflowX: "visible"
}, xF = {
  height: 0,
  overflowY: "visible"
}, EF = {}, SF = (e) => {
  var {
    width: t,
    height: r
  } = e, n = Nr(t), o = Nr(r);
  return n && o ? bF : n ? wF : o ? xF : EF;
};
function PF(e) {
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
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), !0).forEach(function(n) {
      OF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
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
var tO = /* @__PURE__ */ Mt({
  width: -1,
  height: -1
});
function rO(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, o = Dr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return r <= 0 || n <= 0 ? null : /* @__PURE__ */ m.createElement(tO.Provider, {
    value: o
  }, t);
}
var Kp = () => er(tO), TF = /* @__PURE__ */ je((e, t) => {
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
  g.current = h, Bw(t, () => f.current);
  var [y, w] = Ke({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = ve((A, C) => {
    w((N) => {
      var _ = Math.round(A), R = Math.round(C);
      return N.containerWidth === _ && N.containerHeight === R ? N : {
        containerWidth: _,
        containerHeight: R
      };
    });
  }, []);
  Fe(() => {
    var A = (R) => {
      var D, {
        width: k,
        height: U
      } = R[0].contentRect;
      x(k, U), (D = g.current) === null || D === void 0 || D.call(g, k, U);
    };
    l > 0 && (A = gF(A, l, {
      trailing: !0,
      leading: !1
    }));
    var C = new ResizeObserver(A), {
      width: N,
      height: _
    } = f.current.getBoundingClientRect();
    return x(N, _), C.observe(f.current), () => {
      C.disconnect();
    };
  }, [x, l]);
  var {
    containerWidth: E,
    containerHeight: S
  } = y;
  gs(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: O
  } = eO(E, S, {
    width: o,
    height: a,
    aspect: r,
    maxHeight: c
  });
  return gs(P > 0 || O > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, O, o, a, i, s, r), /* @__PURE__ */ m.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: ue("recharts-responsive-container", p),
    style: qg(qg({}, v), {}, {
      width: o,
      height: a,
      minWidth: i,
      minHeight: s,
      maxHeight: c
    }),
    ref: f
  }, /* @__PURE__ */ m.createElement("div", {
    style: SF({
      width: o,
      height: a
    })
  }, /* @__PURE__ */ m.createElement(rO, {
    width: P,
    height: O
  }, u)));
}), jc = /* @__PURE__ */ je((e, t) => {
  var r = Kp();
  if (co(r.width) && co(r.height))
    return e.children;
  var {
    width: n,
    height: o
  } = PF({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: i
  } = eO(void 0, void 0, {
    width: n,
    height: o,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return Z(a) && Z(i) ? /* @__PURE__ */ m.createElement(rO, {
    width: a,
    height: i
  }, e.children) : /* @__PURE__ */ m.createElement(TF, tf({}, e, {
    width: n,
    height: o,
    ref: t
  }));
}), Lc = () => {
  var e, t = ot(), r = J(uF), n = J(Dc), o = (e = J(Mc)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !o ? r : {
    width: n.width - o.left - o.right,
    height: n.height - o.top - o.bottom,
    x: o.left,
    y: o.top
  };
}, _F = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, nO = () => {
  var e;
  return (e = J(Ve)) !== null && e !== void 0 ? e : _F;
}, Vp = () => J(jr), qp = () => J(Lr), NF = () => J((e) => e.layout.margin), le = (e) => e.layout.layoutType, Ba = () => J(le), $c = (e) => {
  var t = _e(), r = ot(), {
    width: n,
    height: o
  } = e, a = Kp(), i = n, s = o;
  return a && (i = a.width > 0 ? a.width : n, s = a.height > 0 ? a.height : o), Fe(() => {
    !r && co(i) && co(s) && t(OB({
      width: i,
      height: s
    }));
  }, [t, r, i, s]), null;
}, kF = {
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
}, oO = jt({
  name: "legend",
  initialState: kF,
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
  setLegendSize: Hg,
  setLegendSettings: IF,
  addLegendPayload: aO,
  removeLegendPayload: iO
} = oO.actions, RF = oO.reducer, MF = ["contextPayload"];
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
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(r), !0).forEach(function(n) {
      Hp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hp(e, t, r) {
  return (t = DF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DF(e) {
  var t = jF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LF(e, t) {
  if (e == null) return {};
  var r, n, o = $F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function $F(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function BF(e) {
  return e.value;
}
function FF(e) {
  var {
    contextPayload: t
  } = e, r = LF(e, MF), n = l1(t, e.payloadUniqBy, BF), o = lo(lo({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ m.isValidElement(e.content) ? /* @__PURE__ */ m.cloneElement(e.content, o) : typeof e.content == "function" ? /* @__PURE__ */ m.createElement(e.content, o) : /* @__PURE__ */ m.createElement(Dp, o);
}
function zF(e, t, r, n, o, a) {
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
function UF(e) {
  var t = _e();
  return Fe(() => {
    t(IF(e));
  }, [t, e]), null;
}
function WF(e) {
  var t = _e();
  return Fe(() => (t(Hg(e)), () => {
    t(Hg({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function KF(e) {
  var t = y$(), r = Ej(), n = NF(), {
    width: o,
    height: a,
    wrapperStyle: i,
    portal: s
  } = e, [c, u] = m1([t]), l = Vp(), d = qp();
  if (l == null || d == null)
    return null;
  var p = l - (n.left || 0) - (n.right || 0), h = Wn.getWidthOrHeight(e.layout, a, o, p), v = s ? i : lo(lo({
    position: "absolute",
    width: h?.width || o || "auto",
    height: h?.height || a || "auto"
  }, zF(i, e, n, l, d, c)), i), f = s ?? r;
  if (f == null)
    return null;
  var g = /* @__PURE__ */ m.createElement("div", {
    className: "recharts-legend-wrapper",
    style: v,
    ref: u
  }, /* @__PURE__ */ m.createElement(UF, {
    layout: e.layout,
    align: e.align,
    verticalAlign: e.verticalAlign,
    itemSorter: e.itemSorter
  }), /* @__PURE__ */ m.createElement(WF, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ m.createElement(FF, rf({}, e, h, {
    margin: n,
    chartWidth: l,
    chartHeight: d,
    contextPayload: t
  })));
  return /* @__PURE__ */ Fw(g, f);
}
class Wn extends wa {
  static getWidthOrHeight(t, r, n, o) {
    return t === "vertical" && Z(r) ? {
      height: r
    } : t === "horizontal" ? {
      width: n || o
    } : null;
  }
  render() {
    return /* @__PURE__ */ m.createElement(KF, this.props);
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
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nf.apply(null, arguments);
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
function Bu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), !0).forEach(function(n) {
      VF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VF(e, t, r) {
  return (t = qF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qF(e) {
  var t = HF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GF(e) {
  return Array.isArray(e) && fr(e[0]) && fr(e[1]) ? e.join(" ~ ") : e;
}
var YF = (e) => {
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
      }, P = (s ? Cc(a, s) : a).map((O, A) => {
        if (O.type === "none")
          return null;
        var C = O.formatter || i || GF, {
          value: N,
          name: _
        } = O, R = N, D = _;
        if (C) {
          var k = C(N, _, O, A, a);
          if (Array.isArray(k))
            [R, D] = k;
          else if (k != null)
            R = k;
          else
            return null;
        }
        var U = Bu({
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
          }, R), /* @__PURE__ */ m.createElement("span", {
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
  }, v = Bu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), f = Bu({
    margin: 0
  }, o), g = !Ae(l), y = g ? l : "", w = ue("recharts-default-tooltip", c), x = ue("recharts-tooltip-label", u);
  g && d && a !== void 0 && a !== null && (y = d(l, a));
  var E = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ m.createElement("div", nf({
    className: w,
    style: v
  }, E), /* @__PURE__ */ m.createElement("p", {
    className: x,
    style: f
  }, /* @__PURE__ */ m.isValidElement(y) ? y : "".concat(y)), h());
}, Bo = "recharts-tooltip-wrapper", XF = {
  visibility: "hidden"
};
function ZF(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return ue(Bo, {
    ["".concat(Bo, "-right")]: Z(r) && t && Z(t.x) && r >= t.x,
    ["".concat(Bo, "-left")]: Z(r) && t && Z(t.x) && r < t.x,
    ["".concat(Bo, "-bottom")]: Z(n) && t && Z(t.y) && n >= t.y,
    ["".concat(Bo, "-top")]: Z(n) && t && Z(t.y) && n < t.y
  });
}
function Xg(e) {
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
  if (a && Z(a[n]))
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
function JF(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function QF(e) {
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
  return i.height > 0 && i.width > 0 && r ? (l = Xg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Xg({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = JF({
    translateX: l,
    translateY: d,
    useTranslate3d: s
  })) : u = XF, {
    cssProperties: u,
    cssClasses: ZF({
      translateX: l,
      translateY: d,
      coordinate: r
    })
  };
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
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zg(Object(r), !0).forEach(function(n) {
      of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function of(e, t, r) {
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
class rz extends wa {
  constructor() {
    super(...arguments), of(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), of(this, "handleKeyDown", (t) => {
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
      cssClasses: w,
      cssProperties: x
    } = QF({
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
    }), E = y ? {} : Pi(Pi({
      transition: c && t ? "transform ".concat(n, "ms ").concat(o) : void 0
    }, x), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), S = Pi(Pi({}, E), {}, {
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
      }, a)
    );
  }
}
var nz = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), $r = {
  devToolsEnabled: !1,
  isSsr: nz()
}, sO = () => J((e) => e.rootProps.accessibilityLayer);
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
function Qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jg(Object(r), !0).forEach(function(n) {
      oz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jg(Object(r)).forEach(function(n) {
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
var ey = {
  curveBasisClosed: zj,
  curveBasisOpen: Uj,
  curveBasis: Fj,
  curveBumpX: Aj,
  curveBumpY: Cj,
  curveLinearClosed: Wj,
  curveLinear: Oc,
  curveMonotoneX: Kj,
  curveMonotoneY: Vj,
  curveNatural: qj,
  curveStep: Hj,
  curveStepAfter: Yj,
  curveStepBefore: Gj
}, Oi = (e) => ze(e.x) && ze(e.y), Fo = (e) => e.x, zo = (e) => e.y, sz = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Ia(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? ey["".concat(r).concat(t === "vertical" ? "Y" : "X")] : ey[r] || Oc;
}, cz = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: o,
    connectNulls: a = !1
  } = e, i = sz(t, o), s = a ? r.filter(Oi) : r, c;
  if (Array.isArray(n)) {
    var u = a ? n.filter((d) => Oi(d)) : n, l = s.map((d, p) => Qg(Qg({}, d), {}, {
      base: u[p]
    }));
    return o === "vertical" ? c = hi().y(zo).x1(Fo).x0((d) => d.base.x) : c = hi().x(Fo).y1(zo).y0((d) => d.base.y), c.defined(Oi).curve(i), c(l);
  }
  return o === "vertical" && Z(n) ? c = hi().y(zo).x1(Fo).x0(n) : Z(n) ? c = hi().x(Fo).y1(zo).y0(n) : c = BP().x(Fo).y(zo), c.defined(Oi).curve(i), c(s);
}, no = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: o
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var a = r && r.length ? cz(e) : n;
  return /* @__PURE__ */ m.createElement("path", af({}, ht(e), Rp(e), {
    className: ue("recharts-curve", t),
    d: a === null ? void 0 : a,
    ref: o
  }));
}, lz = ["x", "y", "top", "left", "width", "height", "className"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sf.apply(null, arguments);
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
function uz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ty(Object(r), !0).forEach(function(n) {
      dz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(n) {
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
  return !Z(t) || !Z(r) || !Z(a) || !Z(i) || !Z(n) || !Z(o) ? null : /* @__PURE__ */ m.createElement("path", sf({}, mt(u), {
    className: ue("recharts-cross", s),
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
function bz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      wz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
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
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      Oz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
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
var Tz = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), cO = (e, t, r) => e.map((n) => "".concat(Tz(n), " ").concat(t, "ms ").concat(r)).join(","), _z = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((o) => n.includes(o))), fa = (e, t) => Object.keys(t).reduce((r, n) => oy(oy({}, r), {}, {
  [n]: e(n, t[n])
}), {});
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
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      Nz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nz(e, t, r) {
  return (t = kz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kz(e) {
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
var ys = (e, t, r) => e + (t - e) * r, cf = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, lO = (e, t, r) => {
  var n = fa((o, a) => {
    if (cf(a)) {
      var [i, s] = e(a.from, a.to, a.velocity);
      return rt(rt({}, a), {}, {
        from: i,
        velocity: s
      });
    }
    return a;
  }, t);
  return r < 1 ? fa((o, a) => cf(a) ? rt(rt({}, a), {}, {
    velocity: ys(a.velocity, n[o].velocity, r),
    from: ys(a.from, n[o].from, r)
  }) : a, t) : lO(e, n, r - 1);
};
function Rz(e, t, r, n, o, a) {
  var i, s = n.reduce((p, h) => rt(rt({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), c = () => fa((p, h) => h.from, s), u = () => !Object.values(s).filter(cf).length, l = null, d = (p) => {
    i || (i = p);
    var h = p - i, v = h / r.dt;
    s = lO(r, s, v), o(rt(rt(rt({}, e), t), c())), i = p, u() || (l = a.setTimeout(d));
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
    var p = (d - u) / n, h = fa((f, g) => ys(...g, r(p)), c);
    if (a(rt(rt(rt({}, e), t), h)), p < 1)
      s = i.setTimeout(l);
    else {
      var v = fa((f, g) => ys(...g, r(1)), c);
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
var bs = 1e-4, uO = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], dO = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), iy = (e, t) => (r) => {
  var n = uO(e, t);
  return dO(n, r);
}, jz = (e, t) => (r) => {
  var n = uO(e, t), o = [...n.map((a, i) => a * i).slice(1), 0];
  return dO(o, r);
}, sy = function() {
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
  var u = iy(t, r), l = iy(n, o), d = jz(t, r), p = (v) => v > 1 ? 1 : v < 0 ? 0 : v, h = (v) => {
    for (var f = v > 1 ? 1 : v, g = f, y = 0; y < 8; ++y) {
      var w = u(g) - f, x = d(g);
      if (Math.abs(w - f) < bs || x < bs)
        return l(g);
      g = p(g - w / x);
    }
    return l(g);
  };
  return h.isStepper = !1, h;
}, Lz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: o = 17
  } = t, a = (i, s, c) => {
    var u = -(i - s) * r, l = c * n, d = c + (u - l) * o / 1e3, p = c * o / 1e3 + i;
    return Math.abs(p - s) < bs && Math.abs(d) < bs ? [s, 0] : [p, d];
  };
  return a.isStepper = !0, a.dt = o, a;
}, $z = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return sy(e);
      case "spring":
        return Lz();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return sy(e);
    }
  return typeof e == "function" ? e : null;
};
function Bz(e) {
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
class Fz {
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
  return Bz(new Fz());
}
var Uz = /* @__PURE__ */ Mt(zz);
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
}, cy = {
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
  } = t, l = Wz(t.animationId, t.animationManager), [d, p] = Ke(r ? cy : Fu), h = me(null);
  return Fe(() => {
    r || p(Fu);
  }, [r]), Fe(() => {
    if (!r || !n)
      return Sz;
    var v = Dz(cy, Fu, $z(a), o, p, l.getTimeoutController()), f = () => {
      h.current = v();
    };
    return l.start([c, i, f, o, s]), () => {
      l.stop(), h.current && h.current(), s();
    };
  }, [r, n, o, a, i, c, s, l]), u(d.t);
}
function Oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = me(ca(t)), n = me(e);
  return n.current !== e && (r.current = ca(t), n.current = e), r.current;
}
var Vz = ["radius"], qz = ["radius"];
function ly(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ly(Object(r), !0).forEach(function(n) {
      Hz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ly(Object(r)).forEach(function(n) {
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
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(null, arguments);
}
function dy(e, t) {
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
var fy = (e, t, r, n, o) => {
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
}, fO = (e) => {
  var t = qe(e, Zz), r = me(null), [n, o] = Ke(-1);
  Fe(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var F = r.current.getTotalLength();
        F && o(F);
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
  } = t, g = me(s), y = me(c), w = me(a), x = me(i), E = Dr(() => ({
    x: a,
    y: i,
    width: s,
    height: c,
    radius: u
  }), [a, i, s, c, u]), S = Oo(E, "rectangle-");
  if (a !== +a || i !== +i || s !== +s || c !== +c || s === 0 || c === 0)
    return null;
  var P = ue("recharts-rectangle", l);
  if (!f) {
    var O = mt(t), {
      radius: A
    } = O, C = dy(O, Vz);
    return /* @__PURE__ */ m.createElement("path", ws({}, C, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: fy(a, i, s, c, u)
    }));
  }
  var N = g.current, _ = y.current, R = w.current, D = x.current, k = "0px ".concat(n === -1 ? 1 : n, "px"), U = "".concat(n, "px 0px"), B = cO(["strokeDasharray"], p, typeof d == "string" ? d : void 0);
  return /* @__PURE__ */ m.createElement(Po, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: f,
    begin: h
  }, (F) => {
    var M = we(N, s, F), z = we(_, c, F), ne = we(R, a, F), W = we(D, i, F);
    r.current && (g.current = M, y.current = z, w.current = ne, x.current = W);
    var re;
    v ? F > 0 ? re = {
      transition: B,
      strokeDasharray: U
    } : re = {
      strokeDasharray: k
    } : re = {
      strokeDasharray: U
    };
    var te = mt(t), {
      radius: oe
    } = te, ce = dy(te, qz);
    return /* @__PURE__ */ m.createElement("path", ws({}, ce, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: fy(ne, W, M, z, u),
      ref: r,
      style: uy(uy({}, re), t.style)
    }));
  });
};
function pO(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: a
  } = e, i = $e(t, r, n, o), s = $e(t, r, n, a);
  return {
    points: [i, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: a
  };
}
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lf.apply(null, arguments);
}
var Jz = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Ai = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: o,
    sign: a,
    isExternal: i,
    cornerRadius: s,
    cornerIsExternal: c
  } = e, u = s * (i ? 1 : -1) + n, l = Math.asin(s / u) / ms, d = c ? o : o + a * l, p = $e(t, r, u, d), h = $e(t, r, n, d), v = c ? o - a * l : o, f = $e(t, r, u * Math.cos(l * ms), v);
  return {
    center: p,
    circleTangency: h,
    lineTangency: f,
    theta: l
  };
}, hO = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    startAngle: a,
    endAngle: i
  } = e, s = Jz(a, i), c = a + s, u = $e(t, r, o, a), l = $e(t, r, o, c), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(o, ",").concat(o, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(a > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var p = $e(t, r, n, a), h = $e(t, r, n, c);
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
  } = Ai({
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
  } = Ai({
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
      `) : hO({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: o,
      startAngle: c,
      endAngle: u
    });
  var w = "M ".concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(o, ",").concat(o, ",0,").concat(+(y > 180), ",").concat(+(l < 0), ",").concat(v.x, ",").concat(v.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(f.x, ",").concat(f.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: E,
      theta: S
    } = Ai({
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
    } = Ai({
      cx: t,
      cy: r,
      radius: n,
      angle: u,
      sign: -l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: s
    }), C = s ? Math.abs(c - u) : Math.abs(c - u) - S - A;
    if (C < 0 && a === 0)
      return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += "L".concat(O.x, ",").concat(O.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(C > 180), ",").concat(+(l > 0), ",").concat(x.x, ",").concat(x.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(E.x, ",").concat(E.y, "Z");
  } else
    w += "L".concat(t, ",").concat(r, "Z");
  return w;
}, e4 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, mO = (e) => {
  var t = qe(e, e4), {
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
  var p = ue("recharts-sector", d), h = a - o, v = ct(i, h, 0, !0), f;
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
  }) : f = hO({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: a,
    startAngle: u,
    endAngle: l
  }), /* @__PURE__ */ m.createElement("path", lf({}, mt(t), {
    className: p,
    d: f
  }));
};
function t4(e, t, r) {
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
      } = t, p = $e(s, c, u, d), h = $e(s, c, l, d);
      n = p.x, o = p.y, a = h.x, i = h.y;
    } else
      return pO(t);
  return [{
    x: n,
    y: o
  }, {
    x: a,
    y: i
  }];
}
var zu = {}, Uu = {}, Wu = {}, py;
function r4() {
  return py || (py = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ f1();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Wu)), Wu;
}
var hy;
function n4() {
  return hy || (hy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ r4();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Uu)), Uu;
}
var my;
function o4() {
  return my || (my = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ p1(), r = /* @__PURE__ */ n4();
    function n(o, a, i) {
      i && typeof i != "number" && t.isIterateeCall(o, a, i) && (a = i = void 0), o = r.toFinite(o), a === void 0 ? (a = o, o = 0) : a = r.toFinite(a), i = i === void 0 ? o < a ? 1 : -1 : r.toFinite(i);
      const s = Math.max(Math.ceil((a - o) / (i || 1)), 0), c = new Array(s);
      for (let u = 0; u < s; u++)
        c[u] = o, o += i;
      return c;
    }
    e.range = n;
  })(zu)), zu;
}
var Ku, vy;
function a4() {
  return vy || (vy = 1, Ku = o4().range), Ku;
}
var i4 = /* @__PURE__ */ a4();
const vO = /* @__PURE__ */ an(i4);
function Xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function s4(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Gp(e) {
  let t, r, n;
  e.length !== 2 ? (t = Xr, r = (s, c) => Xr(e(s), c), n = (s, c) => e(s) - c) : (t = e === Xr || e === s4 ? e : c4, r = e, n = e);
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
function c4() {
  return 0;
}
function gO(e) {
  return e === null ? NaN : +e;
}
function* l4(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const u4 = Gp(Xr), Fa = u4.right;
Gp(gO).center;
class gy extends Map {
  constructor(t, r = p4) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(yy(this, t));
  }
  has(t) {
    return super.has(yy(this, t));
  }
  set(t, r) {
    return super.set(d4(this, t), r);
  }
  delete(t) {
    return super.delete(f4(this, t));
  }
}
function yy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function d4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function f4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function p4(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function h4(e = Xr) {
  if (e === Xr) return yO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function yO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const m4 = Math.sqrt(50), v4 = Math.sqrt(10), g4 = Math.sqrt(2);
function xs(e, t, r) {
  const n = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(n)), a = n / Math.pow(10, o), i = a >= m4 ? 10 : a >= v4 ? 5 : a >= g4 ? 2 : 1;
  let s, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? xs(e, t, r * 2) : [s, c, u];
}
function uf(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [o, a, i] = n ? xs(t, e, r) : xs(e, t, r);
  if (!(a >= o)) return [];
  const s = a - o + 1, c = new Array(s);
  if (n)
    if (i < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -i;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * i;
  else if (i < 0) for (let u = 0; u < s; ++u) c[u] = (o + u) / -i;
  else for (let u = 0; u < s; ++u) c[u] = (o + u) * i;
  return c;
}
function df(e, t, r) {
  return t = +t, e = +e, r = +r, xs(e, t, r)[2];
}
function ff(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, o = n ? df(t, e, r) : df(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function by(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function wy(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function bO(e, t, r = 0, n = 1 / 0, o) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (o = o === void 0 ? yO : h4(o); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), d = 0.5 * Math.exp(2 * l / 3), p = 0.5 * Math.sqrt(l * d * (c - d) / c) * (u - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - u * d / c + p)), v = Math.min(n, Math.floor(t + (c - u) * d / c + p));
      bO(e, t, h, v, o);
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
function y4(e, t, r) {
  if (e = Float64Array.from(l4(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return wy(e);
    if (t >= 1) return by(e);
    var n, o = (n - 1) * t, a = Math.floor(o), i = by(bO(e, a).subarray(0, a + 1)), s = wy(e.subarray(a + 1));
    return i + (s - i) * (o - a);
  }
}
function b4(e, t, r = gO) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, o = (n - 1) * t, a = Math.floor(o), i = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return i + (s - i) * (o - a);
  }
}
function w4(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(o); ++n < o; )
    a[n] = e + n * r;
  return a;
}
function Gt(e, t) {
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
function Br(e, t) {
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
const pf = Symbol("implicit");
function Yp() {
  var e = new gy(), t = [], r = [], n = pf;
  function o(a) {
    let i = e.get(a);
    if (i === void 0) {
      if (n !== pf) return n;
      e.set(a, i = t.push(a) - 1);
    }
    return r[i % r.length];
  }
  return o.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new gy();
    for (const i of a)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (r = Array.from(a), o) : r.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.copy = function() {
    return Yp(t, r).unknown(n);
  }, Gt.apply(o, arguments), o;
}
function Xp() {
  var e = Yp().unknown(void 0), t = e.domain, r = e.range, n = 0, o = 1, a, i, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, h = o < n, v = h ? o : n, f = h ? n : o;
    a = (f - v) / Math.max(1, p - c + u * 2), s && (a = Math.floor(a)), v += (f - v - a * (p - c)) * l, i = a * (1 - c), s && (v = Math.round(v), i = Math.round(i));
    var g = w4(p).map(function(y) {
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
  }, Gt.apply(d(), arguments);
}
function wO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return wO(t());
  }, e;
}
function x4() {
  return wO(Xp.apply(null, arguments).paddingInner(1));
}
function Zp(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function xO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function za() {
}
var pa = 0.7, Es = 1 / pa, oo = "\\s*([+-]?\\d+)\\s*", ha = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", E4 = /^#([0-9a-f]{3,8})$/, S4 = new RegExp(`^rgb\\(${oo},${oo},${oo}\\)$`), P4 = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), O4 = new RegExp(`^rgba\\(${oo},${oo},${oo},${ha}\\)$`), A4 = new RegExp(`^rgba\\(${lr},${lr},${lr},${ha}\\)$`), C4 = new RegExp(`^hsl\\(${ha},${lr},${lr}\\)$`), T4 = new RegExp(`^hsla\\(${ha},${lr},${lr},${ha}\\)$`), xy = {
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
Zp(za, ma, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ey,
  // Deprecated! Use color.formatHex.
  formatHex: Ey,
  formatHex8: _4,
  formatHsl: N4,
  formatRgb: Sy,
  toString: Sy
});
function Ey() {
  return this.rgb().formatHex();
}
function _4() {
  return this.rgb().formatHex8();
}
function N4() {
  return EO(this).formatHsl();
}
function Sy() {
  return this.rgb().formatRgb();
}
function ma(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = E4.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Py(t) : r === 3 ? new bt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ci(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ci(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = S4.exec(e)) ? new bt(t[1], t[2], t[3], 1) : (t = P4.exec(e)) ? new bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = O4.exec(e)) ? Ci(t[1], t[2], t[3], t[4]) : (t = A4.exec(e)) ? Ci(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = C4.exec(e)) ? Cy(t[1], t[2] / 100, t[3] / 100, 1) : (t = T4.exec(e)) ? Cy(t[1], t[2] / 100, t[3] / 100, t[4]) : xy.hasOwnProperty(e) ? Py(xy[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function Py(e) {
  return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ci(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new bt(e, t, r, n);
}
function k4(e) {
  return e instanceof za || (e = ma(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
}
function hf(e, t, r, n) {
  return arguments.length === 1 ? k4(e) : new bt(e, t, r, n ?? 1);
}
function bt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Zp(bt, hf, xO(za, {
  brighter(e) {
    return e = e == null ? Es : Math.pow(Es, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? pa : Math.pow(pa, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(Sn(this.r), Sn(this.g), Sn(this.b), Ss(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Oy,
  // Deprecated! Use color.formatHex.
  formatHex: Oy,
  formatHex8: I4,
  formatRgb: Ay,
  toString: Ay
}));
function Oy() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}`;
}
function I4() {
  return `#${vn(this.r)}${vn(this.g)}${vn(this.b)}${vn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ay() {
  const e = Ss(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sn(this.r)}, ${Sn(this.g)}, ${Sn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ss(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vn(e) {
  return e = Sn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Cy(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Zt(e, t, r, n);
}
function EO(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof za || (e = ma(e)), !e) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, o = Math.min(t, r, n), a = Math.max(t, r, n), i = NaN, s = a - o, c = (a + o) / 2;
  return s ? (t === a ? i = (r - n) / s + (r < n) * 6 : r === a ? i = (n - t) / s + 2 : i = (t - r) / s + 4, s /= c < 0.5 ? a + o : 2 - a - o, i *= 60) : s = c > 0 && c < 1 ? 0 : i, new Zt(i, s, c, e.opacity);
}
function R4(e, t, r, n) {
  return arguments.length === 1 ? EO(e) : new Zt(e, t, r, n ?? 1);
}
function Zt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Zp(Zt, R4, xO(za, {
  brighter(e) {
    return e = e == null ? Es : Math.pow(Es, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? pa : Math.pow(pa, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - n;
    return new bt(
      Vu(e >= 240 ? e - 240 : e + 120, o, n),
      Vu(e, o, n),
      Vu(e < 120 ? e + 240 : e - 120, o, n),
      this.opacity
    );
  },
  clamp() {
    return new Zt(Ty(this.h), Ti(this.s), Ti(this.l), Ss(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ss(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ty(this.h)}, ${Ti(this.s) * 100}%, ${Ti(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ty(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ti(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Vu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Jp = (e) => () => e;
function M4(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function D4(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function j4(e) {
  return (e = +e) == 1 ? SO : function(t, r) {
    return r - t ? D4(t, r, e) : Jp(isNaN(t) ? r : t);
  };
}
function SO(e, t) {
  var r = t - e;
  return r ? M4(e, r) : Jp(isNaN(e) ? t : e);
}
const _y = (function e(t) {
  var r = j4(t);
  function n(o, a) {
    var i = r((o = hf(o)).r, (a = hf(a)).r), s = r(o.g, a.g), c = r(o.b, a.b), u = SO(o.opacity, a.opacity);
    return function(l) {
      return o.r = i(l), o.g = s(l), o.b = c(l), o.opacity = u(l), o + "";
    };
  }
  return n.gamma = e, n;
})(1);
function L4(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - a) + t[o] * a;
    return n;
  };
}
function $4(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function B4(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, o = new Array(n), a = new Array(r), i;
  for (i = 0; i < n; ++i) o[i] = Ao(e[i], t[i]);
  for (; i < r; ++i) a[i] = t[i];
  return function(s) {
    for (i = 0; i < n; ++i) a[i] = o[i](s);
    return a;
  };
}
function F4(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ps(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function z4(e, t) {
  var r = {}, n = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Ao(e[o], t[o]) : n[o] = t[o];
  return function(a) {
    for (o in r) n[o] = r[o](a);
    return n;
  };
}
var mf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qu = new RegExp(mf.source, "g");
function U4(e) {
  return function() {
    return e;
  };
}
function W4(e) {
  return function(t) {
    return e(t) + "";
  };
}
function K4(e, t) {
  var r = mf.lastIndex = qu.lastIndex = 0, n, o, a, i = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = mf.exec(e)) && (o = qu.exec(t)); )
    (a = o.index) > r && (a = t.slice(r, a), s[i] ? s[i] += a : s[++i] = a), (n = n[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, c.push({ i, x: Ps(n, o) })), r = qu.lastIndex;
  return r < t.length && (a = t.slice(r), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? c[0] ? W4(c[0].x) : U4(t) : (t = c.length, function(u) {
    for (var l = 0, d; l < t; ++l) s[(d = c[l]).i] = d.x(u);
    return s.join("");
  });
}
function Ao(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Jp(t) : (r === "number" ? Ps : r === "string" ? (n = ma(t)) ? (t = n, _y) : K4 : t instanceof ma ? _y : t instanceof Date ? F4 : $4(t) ? L4 : Array.isArray(t) ? B4 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? z4 : Ps)(e, t);
}
function Qp(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function V4(e, t) {
  t === void 0 && (t = e, e = Ao);
  for (var r = 0, n = t.length - 1, o = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(o, o = t[++r]);
  return function(i) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(i *= n)));
    return a[s](i - s);
  };
}
function q4(e) {
  return function() {
    return e;
  };
}
function Os(e) {
  return +e;
}
var Ny = [0, 1];
function ft(e) {
  return e;
}
function vf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : q4(isNaN(t) ? NaN : 0.5);
}
function H4(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function G4(e, t, r) {
  var n = e[0], o = e[1], a = t[0], i = t[1];
  return o < n ? (n = vf(o, n), a = r(i, a)) : (n = vf(n, o), a = r(a, i)), function(s) {
    return a(n(s));
  };
}
function Y4(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, o = new Array(n), a = new Array(n), i = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < n; )
    o[i] = vf(e[i], e[i + 1]), a[i] = r(t[i], t[i + 1]);
  return function(s) {
    var c = Fa(e, s, 1, n) - 1;
    return a[c](o[c](s));
  };
}
function Ua(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Bc() {
  var e = Ny, t = Ny, r = Ao, n, o, a, i = ft, s, c, u;
  function l() {
    var p = Math.min(e.length, t.length);
    return i !== ft && (i = H4(e[0], e[p - 1])), s = p > 2 ? Y4 : G4, c = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? a : (c || (c = s(e.map(n), t, r)))(n(i(p)));
  }
  return d.invert = function(p) {
    return i(o((u || (u = s(t, e.map(n), Ps)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Os), l()) : e.slice();
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
  return Bc()(ft, ft);
}
function X4(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function As(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function uo(e) {
  return e = As(Math.abs(e)), e ? e[1] : NaN;
}
function Z4(e, t) {
  return function(r, n) {
    for (var o = r.length, a = [], i = 0, s = e[0], c = 0; o > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(o -= s, o + s)), !((c += s + 1) > n)); )
      s = e[i = (i + 1) % e.length];
    return a.reverse().join(t);
  };
}
function J4(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Q4 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function va(e) {
  if (!(t = Q4.exec(e))) throw new Error("invalid format: " + e);
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
va.prototype = th.prototype;
function th(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
th.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function eU(e) {
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
var PO;
function tU(e, t) {
  var r = As(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1], a = o - (PO = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = n.length;
  return a === i ? n : a > i ? n + new Array(a - i + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + As(e, Math.max(0, t + a - 1))[0];
}
function ky(e, t) {
  var r = As(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}
const Iy = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: X4,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ky(e * 100, t),
  r: ky,
  s: tU,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ry(e) {
  return e;
}
var My = Array.prototype.map, Dy = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rU(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ry : Z4(My.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ry : J4(My.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d) {
    d = va(d);
    var p = d.fill, h = d.align, v = d.sign, f = d.symbol, g = d.zero, y = d.width, w = d.comma, x = d.precision, E = d.trim, S = d.type;
    S === "n" ? (w = !0, S = "g") : Iy[S] || (x === void 0 && (x = 12), E = !0, S = "g"), (g || p === "0" && h === "=") && (g = !0, p = "0", h = "=");
    var P = f === "$" ? r : f === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", O = f === "$" ? n : /[%p]/.test(S) ? i : "", A = Iy[S], C = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function N(_) {
      var R = P, D = O, k, U, B;
      if (S === "c")
        D = A(_) + D, _ = "";
      else {
        _ = +_;
        var F = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : A(Math.abs(_), x), E && (_ = eU(_)), F && +_ == 0 && v !== "+" && (F = !1), R = (F ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + R, D = (S === "s" ? Dy[8 + PO / 3] : "") + D + (F && v === "(" ? ")" : ""), C) {
          for (k = -1, U = _.length; ++k < U; )
            if (B = _.charCodeAt(k), 48 > B || B > 57) {
              D = (B === 46 ? o + _.slice(k + 1) : _.slice(k)) + D, _ = _.slice(0, k);
              break;
            }
        }
      }
      w && !g && (_ = t(_, 1 / 0));
      var M = R.length + _.length + D.length, z = M < y ? new Array(y - M + 1).join(p) : "";
      switch (w && g && (_ = t(z + _, z.length ? y - D.length : 1 / 0), z = ""), h) {
        case "<":
          _ = R + _ + D + z;
          break;
        case "=":
          _ = R + z + _ + D;
          break;
        case "^":
          _ = z.slice(0, M = z.length >> 1) + R + _ + D + z.slice(M);
          break;
        default:
          _ = z + R + _ + D;
          break;
      }
      return a(_);
    }
    return N.toString = function() {
      return d + "";
    }, N;
  }
  function l(d, p) {
    var h = u((d = va(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(uo(p) / 3))) * 3, f = Math.pow(10, -v), g = Dy[8 + v / 3];
    return function(y) {
      return h(f * y) + g;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var _i, rh, OO;
nU({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function nU(e) {
  return _i = rU(e), rh = _i.format, OO = _i.formatPrefix, _i;
}
function oU(e) {
  return Math.max(0, -uo(Math.abs(e)));
}
function aU(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(uo(t) / 3))) * 3 - uo(Math.abs(e)));
}
function iU(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, uo(t) - uo(e)) + 1;
}
function AO(e, t, r, n) {
  var o = ff(e, t, r), a;
  switch (n = va(n ?? ",f"), n.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = aU(o, i)) && (n.precision = a), OO(n, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = iU(o, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = oU(o)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return rh(n);
}
function cn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return uf(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var o = t();
    return AO(o[0], o[o.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), o = 0, a = n.length - 1, i = n[o], s = n[a], c, u, l = 10;
    for (s < i && (u = i, i = s, s = u, u = o, o = a, a = u); l-- > 0; ) {
      if (u = df(i, s, r), u === c)
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
function CO() {
  var e = eh();
  return e.copy = function() {
    return Ua(e, CO());
  }, Gt.apply(e, arguments), cn(e);
}
function TO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Os), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return TO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Os) : [0, 1], cn(r);
}
function _O(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, o = e[r], a = e[n], i;
  return a < o && (i = r, r = n, n = i, i = o, o = a, a = i), e[r] = t.floor(o), e[n] = t.ceil(a), e;
}
function jy(e) {
  return Math.log(e);
}
function Ly(e) {
  return Math.exp(e);
}
function sU(e) {
  return -Math.log(-e);
}
function cU(e) {
  return -Math.exp(-e);
}
function lU(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function uU(e) {
  return e === 10 ? lU : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function dU(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function $y(e) {
  return (t, r) => -e(-t, r);
}
function nh(e) {
  const t = e(jy, Ly), r = t.domain;
  let n = 10, o, a;
  function i() {
    return o = dU(n), a = uU(n), r()[0] < 0 ? (o = $y(o), a = $y(a), e(sU, cU)) : e(jy, Ly), t;
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
      y.length * 2 < g && (y = uf(u, l, g));
    } else
      y = uf(p, h, Math.min(h - p, g)).map(a);
    return d ? y.reverse() : y;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = va(c)).precision == null && (c.trim = !0), c = rh(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let d = l / a(Math.round(o(l)));
      return d * n < n - 0.5 && (d *= n), d <= u ? c(l) : "";
    };
  }, t.nice = () => r(_O(r(), {
    floor: (s) => a(Math.floor(o(s))),
    ceil: (s) => a(Math.ceil(o(s)))
  })), t;
}
function NO() {
  const e = nh(Bc()).domain([1, 10]);
  return e.copy = () => Ua(e, NO()).base(e.base()), Gt.apply(e, arguments), e;
}
function By(e) {
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
  var t = 1, r = e(By(t), Fy(t));
  return r.constant = function(n) {
    return arguments.length ? e(By(t = +n), Fy(t)) : t;
  }, cn(r);
}
function kO() {
  var e = oh(Bc());
  return e.copy = function() {
    return Ua(e, kO()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function zy(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function fU(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function pU(e) {
  return e < 0 ? -e * e : e * e;
}
function ah(e) {
  var t = e(ft, ft), r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(fU, pU) : e(zy(r), zy(1 / r));
  }
  return t.exponent = function(o) {
    return arguments.length ? (r = +o, n()) : r;
  }, cn(t);
}
function ih() {
  var e = ah(Bc());
  return e.copy = function() {
    return Ua(e, ih()).exponent(e.exponent());
  }, Gt.apply(e, arguments), e;
}
function hU() {
  return ih.apply(null, arguments).exponent(0.5);
}
function Uy(e) {
  return Math.sign(e) * e * e;
}
function mU(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function IO() {
  var e = eh(), t = [0, 1], r = !1, n;
  function o(a) {
    var i = mU(e(a));
    return isNaN(i) ? n : r ? Math.round(i) : i;
  }
  return o.invert = function(a) {
    return e.invert(Uy(a));
  }, o.domain = function(a) {
    return arguments.length ? (e.domain(a), o) : e.domain();
  }, o.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Os)).map(Uy)), o) : t.slice();
  }, o.rangeRound = function(a) {
    return o.range(a).round(!0);
  }, o.round = function(a) {
    return arguments.length ? (r = !!a, o) : r;
  }, o.clamp = function(a) {
    return arguments.length ? (e.clamp(a), o) : e.clamp();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.copy = function() {
    return IO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Gt.apply(o, arguments), cn(o);
}
function RO() {
  var e = [], t = [], r = [], n;
  function o() {
    var i = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++i < s; ) r[i - 1] = b4(e, i / s);
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
    return RO().domain(e).range(t).unknown(n);
  }, Gt.apply(a, arguments);
}
function MO() {
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
    return MO().domain([e, t]).range(o).unknown(a);
  }, Gt.apply(cn(i), arguments);
}
function DO() {
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
    return DO().domain(e).range(t).unknown(r);
  }, Gt.apply(o, arguments);
}
const Hu = /* @__PURE__ */ new Date(), Gu = /* @__PURE__ */ new Date();
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
  }), r && (o.count = (a, i) => (Hu.setTime(+a), Gu.setTime(+i), e(Hu), e(Gu), Math.floor(r(Hu, Gu))), o.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? o.filter(n ? (i) => n(i) % a === 0 : (i) => o.count(0, i) % a === 0) : o)), o;
}
const Cs = He(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Cs.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? He((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Cs);
Cs.range;
const Er = 1e3, Ut = Er * 60, Sr = Ut * 60, Ir = Sr * 24, sh = Ir * 7, Wy = Ir * 30, Yu = Ir * 365, gn = He((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getUTCSeconds());
gn.range;
const ch = He((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Er);
}, (e, t) => {
  e.setTime(+e + t * Ut);
}, (e, t) => (t - e) / Ut, (e) => e.getMinutes());
ch.range;
const lh = He((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ut);
}, (e, t) => (t - e) / Ut, (e) => e.getUTCMinutes());
lh.range;
const uh = He((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Er - e.getMinutes() * Ut);
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
const Wa = He(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ut) / Ir,
  (e) => e.getDate() - 1
);
Wa.range;
const Fc = He((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCDate() - 1);
Fc.range;
const jO = He((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ir, (e) => Math.floor(e / Ir));
jO.range;
function Kn(e) {
  return He((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ut) / sh);
}
const zc = Kn(0), Ts = Kn(1), vU = Kn(2), gU = Kn(3), fo = Kn(4), yU = Kn(5), bU = Kn(6);
zc.range;
Ts.range;
vU.range;
gU.range;
fo.range;
yU.range;
bU.range;
function Vn(e) {
  return He((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / sh);
}
const Uc = Vn(0), _s = Vn(1), wU = Vn(2), xU = Vn(3), po = Vn(4), EU = Vn(5), SU = Vn(6);
Uc.range;
_s.range;
wU.range;
xU.range;
po.range;
EU.range;
SU.range;
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
function LO(e, t, r, n, o, a) {
  const i = [
    [gn, 1, Er],
    [gn, 5, 5 * Er],
    [gn, 15, 15 * Er],
    [gn, 30, 30 * Er],
    [a, 1, Ut],
    [a, 5, 5 * Ut],
    [a, 15, 15 * Ut],
    [a, 30, 30 * Ut],
    [o, 1, Sr],
    [o, 3, 3 * Sr],
    [o, 6, 6 * Sr],
    [o, 12, 12 * Sr],
    [n, 1, Ir],
    [n, 2, 2 * Ir],
    [r, 1, sh],
    [t, 1, Wy],
    [t, 3, 3 * Wy],
    [e, 1, Yu]
  ];
  function s(u, l, d) {
    const p = l < u;
    p && ([u, l] = [l, u]);
    const h = d && typeof d.range == "function" ? d : c(u, l, d), v = h ? h.range(u, +l + 1) : [];
    return p ? v.reverse() : v;
  }
  function c(u, l, d) {
    const p = Math.abs(l - u) / d, h = Gp(([, , g]) => g).right(i, p);
    if (h === i.length) return e.every(ff(u / Yu, l / Yu, d));
    if (h === 0) return Cs.every(Math.max(ff(u, l, d), 1));
    const [v, f] = i[p / i[h - 1][2] < i[h][2] / p ? h - 1 : h];
    return v.every(f);
  }
  return [s, c];
}
const [PU, OU] = LO(Mr, ph, Uc, jO, dh, lh), [AU, CU] = LO(Rr, fh, zc, Wa, uh, ch);
function Xu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Zu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Wo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function TU(e) {
  var t = e.dateTime, r = e.date, n = e.time, o = e.periods, a = e.days, i = e.shortDays, s = e.months, c = e.shortMonths, u = Ko(o), l = Vo(o), d = Ko(a), p = Vo(a), h = Ko(i), v = Vo(i), f = Ko(s), g = Vo(s), y = Ko(c), w = Vo(c), x = {
    a: F,
    A: M,
    b: z,
    B: ne,
    c: null,
    d: Yy,
    e: Yy,
    f: ZU,
    g: sW,
    G: lW,
    H: GU,
    I: YU,
    j: XU,
    L: $O,
    m: JU,
    M: QU,
    p: W,
    q: re,
    Q: Jy,
    s: Qy,
    S: eW,
    u: tW,
    U: rW,
    V: nW,
    w: oW,
    W: aW,
    x: null,
    X: null,
    y: iW,
    Y: cW,
    Z: uW,
    "%": Zy
  }, E = {
    a: te,
    A: oe,
    b: ce,
    B: ke,
    c: null,
    d: Xy,
    e: Xy,
    f: hW,
    g: PW,
    G: AW,
    H: dW,
    I: fW,
    j: pW,
    L: FO,
    m: mW,
    M: vW,
    p: V,
    q: fe,
    Q: Jy,
    s: Qy,
    S: gW,
    u: yW,
    U: bW,
    V: wW,
    w: xW,
    W: EW,
    x: null,
    X: null,
    y: SW,
    Y: OW,
    Z: CW,
    "%": Zy
  }, S = {
    a: N,
    A: _,
    b: R,
    B: D,
    c: k,
    d: Hy,
    e: Hy,
    f: KU,
    g: qy,
    G: Vy,
    H: Gy,
    I: Gy,
    j: FU,
    L: WU,
    m: BU,
    M: zU,
    p: C,
    q: $U,
    Q: qU,
    s: HU,
    S: UU,
    u: RU,
    U: MU,
    V: DU,
    w: IU,
    W: jU,
    x: U,
    X: B,
    y: qy,
    Y: Vy,
    Z: LU,
    "%": VU
  };
  x.x = P(r, x), x.X = P(n, x), x.c = P(t, x), E.x = P(r, E), E.X = P(n, E), E.c = P(t, E);
  function P(L, H) {
    return function(Q) {
      var $ = [], Ee = -1, de = 0, Qe = L.length, et, Yt, Tm;
      for (Q instanceof Date || (Q = /* @__PURE__ */ new Date(+Q)); ++Ee < Qe; )
        L.charCodeAt(Ee) === 37 && ($.push(L.slice(de, Ee)), (Yt = Ky[et = L.charAt(++Ee)]) != null ? et = L.charAt(++Ee) : Yt = et === "e" ? " " : "0", (Tm = H[et]) && (et = Tm(Q, Yt)), $.push(et), de = Ee + 1);
      return $.push(L.slice(de, Ee)), $.join("");
    };
  }
  function O(L, H) {
    return function(Q) {
      var $ = Wo(1900, void 0, 1), Ee = A($, L, Q += "", 0), de, Qe;
      if (Ee != Q.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (H && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (de = Zu(Wo($.y, 0, 1)), Qe = de.getUTCDay(), de = Qe > 4 || Qe === 0 ? _s.ceil(de) : _s(de), de = Fc.offset(de, ($.V - 1) * 7), $.y = de.getUTCFullYear(), $.m = de.getUTCMonth(), $.d = de.getUTCDate() + ($.w + 6) % 7) : (de = Xu(Wo($.y, 0, 1)), Qe = de.getDay(), de = Qe > 4 || Qe === 0 ? Ts.ceil(de) : Ts(de), de = Wa.offset(de, ($.V - 1) * 7), $.y = de.getFullYear(), $.m = de.getMonth(), $.d = de.getDate() + ($.w + 6) % 7);
      } else ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), Qe = "Z" in $ ? Zu(Wo($.y, 0, 1)).getUTCDay() : Xu(Wo($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (Qe + 5) % 7 : $.w + $.U * 7 - (Qe + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, Zu($)) : Xu($);
    };
  }
  function A(L, H, Q, $) {
    for (var Ee = 0, de = H.length, Qe = Q.length, et, Yt; Ee < de; ) {
      if ($ >= Qe) return -1;
      if (et = H.charCodeAt(Ee++), et === 37) {
        if (et = H.charAt(Ee++), Yt = S[et in Ky ? H.charAt(Ee++) : et], !Yt || ($ = Yt(L, Q, $)) < 0) return -1;
      } else if (et != Q.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function C(L, H, Q) {
    var $ = u.exec(H.slice(Q));
    return $ ? (L.p = l.get($[0].toLowerCase()), Q + $[0].length) : -1;
  }
  function N(L, H, Q) {
    var $ = h.exec(H.slice(Q));
    return $ ? (L.w = v.get($[0].toLowerCase()), Q + $[0].length) : -1;
  }
  function _(L, H, Q) {
    var $ = d.exec(H.slice(Q));
    return $ ? (L.w = p.get($[0].toLowerCase()), Q + $[0].length) : -1;
  }
  function R(L, H, Q) {
    var $ = y.exec(H.slice(Q));
    return $ ? (L.m = w.get($[0].toLowerCase()), Q + $[0].length) : -1;
  }
  function D(L, H, Q) {
    var $ = f.exec(H.slice(Q));
    return $ ? (L.m = g.get($[0].toLowerCase()), Q + $[0].length) : -1;
  }
  function k(L, H, Q) {
    return A(L, t, H, Q);
  }
  function U(L, H, Q) {
    return A(L, r, H, Q);
  }
  function B(L, H, Q) {
    return A(L, n, H, Q);
  }
  function F(L) {
    return i[L.getDay()];
  }
  function M(L) {
    return a[L.getDay()];
  }
  function z(L) {
    return c[L.getMonth()];
  }
  function ne(L) {
    return s[L.getMonth()];
  }
  function W(L) {
    return o[+(L.getHours() >= 12)];
  }
  function re(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function te(L) {
    return i[L.getUTCDay()];
  }
  function oe(L) {
    return a[L.getUTCDay()];
  }
  function ce(L) {
    return c[L.getUTCMonth()];
  }
  function ke(L) {
    return s[L.getUTCMonth()];
  }
  function V(L) {
    return o[+(L.getUTCHours() >= 12)];
  }
  function fe(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var H = P(L += "", x);
      return H.toString = function() {
        return L;
      }, H;
    },
    parse: function(L) {
      var H = O(L += "", !1);
      return H.toString = function() {
        return L;
      }, H;
    },
    utcFormat: function(L) {
      var H = P(L += "", E);
      return H.toString = function() {
        return L;
      }, H;
    },
    utcParse: function(L) {
      var H = O(L += "", !0);
      return H.toString = function() {
        return L;
      }, H;
    }
  };
}
var Ky = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, _U = /^%/, NU = /[\\^$*+?|[\]().{}]/g;
function pe(e, t, r) {
  var n = e < 0 ? "-" : "", o = (n ? -e : e) + "", a = o.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + o : o);
}
function kU(e) {
  return e.replace(NU, "\\$&");
}
function Ko(e) {
  return new RegExp("^(?:" + e.map(kU).join("|") + ")", "i");
}
function Vo(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function IU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function RU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function MU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function DU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function jU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Vy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function qy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function LU(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function $U(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function BU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Hy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function FU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Gy(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function zU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function UU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function WU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function KU(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function VU(e, t, r) {
  var n = _U.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function qU(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function HU(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Yy(e, t) {
  return pe(e.getDate(), t, 2);
}
function GU(e, t) {
  return pe(e.getHours(), t, 2);
}
function YU(e, t) {
  return pe(e.getHours() % 12 || 12, t, 2);
}
function XU(e, t) {
  return pe(1 + Wa.count(Rr(e), e), t, 3);
}
function $O(e, t) {
  return pe(e.getMilliseconds(), t, 3);
}
function ZU(e, t) {
  return $O(e, t) + "000";
}
function JU(e, t) {
  return pe(e.getMonth() + 1, t, 2);
}
function QU(e, t) {
  return pe(e.getMinutes(), t, 2);
}
function eW(e, t) {
  return pe(e.getSeconds(), t, 2);
}
function tW(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function rW(e, t) {
  return pe(zc.count(Rr(e) - 1, e), t, 2);
}
function BO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? fo(e) : fo.ceil(e);
}
function nW(e, t) {
  return e = BO(e), pe(fo.count(Rr(e), e) + (Rr(e).getDay() === 4), t, 2);
}
function oW(e) {
  return e.getDay();
}
function aW(e, t) {
  return pe(Ts.count(Rr(e) - 1, e), t, 2);
}
function iW(e, t) {
  return pe(e.getFullYear() % 100, t, 2);
}
function sW(e, t) {
  return e = BO(e), pe(e.getFullYear() % 100, t, 2);
}
function cW(e, t) {
  return pe(e.getFullYear() % 1e4, t, 4);
}
function lW(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? fo(e) : fo.ceil(e), pe(e.getFullYear() % 1e4, t, 4);
}
function uW(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + pe(t / 60 | 0, "0", 2) + pe(t % 60, "0", 2);
}
function Xy(e, t) {
  return pe(e.getUTCDate(), t, 2);
}
function dW(e, t) {
  return pe(e.getUTCHours(), t, 2);
}
function fW(e, t) {
  return pe(e.getUTCHours() % 12 || 12, t, 2);
}
function pW(e, t) {
  return pe(1 + Fc.count(Mr(e), e), t, 3);
}
function FO(e, t) {
  return pe(e.getUTCMilliseconds(), t, 3);
}
function hW(e, t) {
  return FO(e, t) + "000";
}
function mW(e, t) {
  return pe(e.getUTCMonth() + 1, t, 2);
}
function vW(e, t) {
  return pe(e.getUTCMinutes(), t, 2);
}
function gW(e, t) {
  return pe(e.getUTCSeconds(), t, 2);
}
function yW(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bW(e, t) {
  return pe(Uc.count(Mr(e) - 1, e), t, 2);
}
function zO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? po(e) : po.ceil(e);
}
function wW(e, t) {
  return e = zO(e), pe(po.count(Mr(e), e) + (Mr(e).getUTCDay() === 4), t, 2);
}
function xW(e) {
  return e.getUTCDay();
}
function EW(e, t) {
  return pe(_s.count(Mr(e) - 1, e), t, 2);
}
function SW(e, t) {
  return pe(e.getUTCFullYear() % 100, t, 2);
}
function PW(e, t) {
  return e = zO(e), pe(e.getUTCFullYear() % 100, t, 2);
}
function OW(e, t) {
  return pe(e.getUTCFullYear() % 1e4, t, 4);
}
function AW(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? po(e) : po.ceil(e), pe(e.getUTCFullYear() % 1e4, t, 4);
}
function CW() {
  return "+0000";
}
function Zy() {
  return "%";
}
function Jy(e) {
  return +e;
}
function Qy(e) {
  return Math.floor(+e / 1e3);
}
var Xn, UO, WO;
TW({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function TW(e) {
  return Xn = TU(e), UO = Xn.format, Xn.parse, WO = Xn.utcFormat, Xn.utcParse, Xn;
}
function _W(e) {
  return new Date(e);
}
function NW(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function hh(e, t, r, n, o, a, i, s, c, u) {
  var l = eh(), d = l.invert, p = l.domain, h = u(".%L"), v = u(":%S"), f = u("%I:%M"), g = u("%I %p"), y = u("%a %d"), w = u("%b %d"), x = u("%B"), E = u("%Y");
  function S(P) {
    return (c(P) < P ? h : s(P) < P ? v : i(P) < P ? f : a(P) < P ? g : n(P) < P ? o(P) < P ? y : w : r(P) < P ? x : E)(P);
  }
  return l.invert = function(P) {
    return new Date(d(P));
  }, l.domain = function(P) {
    return arguments.length ? p(Array.from(P, NW)) : p().map(_W);
  }, l.ticks = function(P) {
    var O = p();
    return e(O[0], O[O.length - 1], P ?? 10);
  }, l.tickFormat = function(P, O) {
    return O == null ? S : u(O);
  }, l.nice = function(P) {
    var O = p();
    return (!P || typeof P.range != "function") && (P = t(O[0], O[O.length - 1], P ?? 10)), P ? p(_O(O, P)) : l;
  }, l.copy = function() {
    return Ua(l, hh(e, t, r, n, o, a, i, s, c, u));
  }, l;
}
function kW() {
  return Gt.apply(hh(AU, CU, Rr, fh, zc, Wa, uh, ch, gn, UO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function IW() {
  return Gt.apply(hh(PU, OU, Mr, ph, Uc, Fc, dh, lh, gn, WO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Wc() {
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
function KO() {
  var e = cn(Wc()(ft));
  return e.copy = function() {
    return ln(e, KO());
  }, Br.apply(e, arguments);
}
function VO() {
  var e = nh(Wc()).domain([1, 10]);
  return e.copy = function() {
    return ln(e, VO()).base(e.base());
  }, Br.apply(e, arguments);
}
function qO() {
  var e = oh(Wc());
  return e.copy = function() {
    return ln(e, qO()).constant(e.constant());
  }, Br.apply(e, arguments);
}
function mh() {
  var e = ah(Wc());
  return e.copy = function() {
    return ln(e, mh()).exponent(e.exponent());
  }, Br.apply(e, arguments);
}
function RW() {
  return mh.apply(null, arguments).exponent(0.5);
}
function HO() {
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
    return Array.from({ length: n + 1 }, (o, a) => y4(e, a / n));
  }, r.copy = function() {
    return HO(t).domain(e);
  }, Br.apply(r, arguments);
}
function Kc() {
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
      var y, w, x;
      return arguments.length ? ([y, w, x] = g, u = V4(f, [y, w, x]), h) : [u(0), u(0.5), u(1)];
    };
  }
  return h.range = v(Ao), h.rangeRound = v(Qp), h.unknown = function(f) {
    return arguments.length ? (p = f, h) : p;
  }, function(f) {
    return l = f, o = f(e), a = f(t), i = f(r), s = o === a ? 0 : 0.5 / (a - o), c = a === i ? 0 : 0.5 / (i - a), n = a < o ? -1 : 1, h;
  };
}
function GO() {
  var e = cn(Kc()(ft));
  return e.copy = function() {
    return ln(e, GO());
  }, Br.apply(e, arguments);
}
function YO() {
  var e = nh(Kc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ln(e, YO()).base(e.base());
  }, Br.apply(e, arguments);
}
function XO() {
  var e = oh(Kc());
  return e.copy = function() {
    return ln(e, XO()).constant(e.constant());
  }, Br.apply(e, arguments);
}
function vh() {
  var e = ah(Kc());
  return e.copy = function() {
    return ln(e, vh()).exponent(e.exponent());
  }, Br.apply(e, arguments);
}
function MW() {
  return vh.apply(null, arguments).exponent(0.5);
}
const Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Xp,
  scaleDiverging: GO,
  scaleDivergingLog: YO,
  scaleDivergingPow: vh,
  scaleDivergingSqrt: MW,
  scaleDivergingSymlog: XO,
  scaleIdentity: TO,
  scaleImplicit: pf,
  scaleLinear: CO,
  scaleLog: NO,
  scaleOrdinal: Yp,
  scalePoint: x4,
  scalePow: ih,
  scaleQuantile: RO,
  scaleQuantize: MO,
  scaleRadial: IO,
  scaleSequential: KO,
  scaleSequentialLog: VO,
  scaleSequentialPow: mh,
  scaleSequentialQuantile: HO,
  scaleSequentialSqrt: RW,
  scaleSequentialSymlog: qO,
  scaleSqrt: hU,
  scaleSymlog: kO,
  scaleThreshold: DO,
  scaleTime: kW,
  scaleUtc: IW,
  tickFormat: AO
}, Symbol.toStringTag, { value: "Module" }));
var un = (e) => e.chartData, gh = T([un], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Ka = (e, t, r, n) => n ? gh(e) : un(e);
function jn(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (ze(t) && ze(r))
      return !0;
  }
  return !1;
}
function eb(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function ZO(e, t) {
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
function DW(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (jn(n))
          return eb(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [o, a] = e, i, s;
      if (o === "auto")
        t != null && (i = Math.min(...t));
      else if (Z(o))
        i = o;
      else if (typeof o == "function")
        try {
          t != null && (i = o(t?.[0]));
        } catch {
        }
      else if (typeof o == "string" && Lg.test(o)) {
        var c = Lg.exec(o);
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
      else if (Z(a))
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
        return t == null ? p : eb(p, t, r);
    }
  }
}
var Co = 1e9, jW = {
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
}, bh, Te = !0, Ht = "[DecimalError] ", Pn = Ht + "Invalid argument: ", yh = Ht + "Exponent out of range: ", To = Math.floor, hn = Math.pow, LW = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, _t, Xe = 1e7, Oe = 7, JO = 9007199254740991, Ns = To(JO / Oe), G = {};
G.absoluteValue = G.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
G.comparedTo = G.cmp = function(e) {
  var t, r, n, o, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === o ? 0 : n > o ^ a.s < 0 ? 1 : -1;
};
G.decimalPlaces = G.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Oe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
G.dividedBy = G.div = function(e) {
  return Ar(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.idiv = function(e) {
  var t = this, r = t.constructor;
  return Se(Ar(t, new r(e), 0, 1), r.precision);
};
G.equals = G.eq = function(e) {
  return !this.cmp(e);
};
G.exponent = function() {
  return Be(this);
};
G.greaterThan = G.gt = function(e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function(e) {
  return this.cmp(e) >= 0;
};
G.isInteger = G.isint = function() {
  return this.e > this.d.length - 2;
};
G.isNegative = G.isneg = function() {
  return this.s < 0;
};
G.isPositive = G.ispos = function() {
  return this.s > 0;
};
G.isZero = function() {
  return this.s === 0;
};
G.lessThan = G.lt = function(e) {
  return this.cmp(e) < 0;
};
G.lessThanOrEqualTo = G.lte = function(e) {
  return this.cmp(e) < 1;
};
G.logarithm = G.log = function(e) {
  var t, r = this, n = r.constructor, o = n.precision, a = o + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(_t)) throw Error(Ht + "NaN");
  if (r.s < 1) throw Error(Ht + (r.s ? "NaN" : "-Infinity"));
  return r.eq(_t) ? new n(0) : (Te = !1, t = Ar(ga(r, a), ga(e, a), a), Te = !0, Se(t, o));
};
G.minus = G.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? tA(t, e) : QO(t, (e.s = -e.s, e));
};
G.modulo = G.mod = function(e) {
  var t, r = this, n = r.constructor, o = n.precision;
  if (e = new n(e), !e.s) throw Error(Ht + "NaN");
  return r.s ? (Te = !1, t = Ar(r, e, 0, 1).times(e), Te = !0, r.minus(t)) : Se(new n(r), o);
};
G.naturalExponential = G.exp = function() {
  return eA(this);
};
G.naturalLogarithm = G.ln = function() {
  return ga(this);
};
G.negated = G.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
G.plus = G.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? QO(t, e) : tA(t, (e.s = -e.s, e));
};
G.precision = G.sd = function(e) {
  var t, r, n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Pn + e);
  if (t = Be(o) + 1, n = o.d.length - 1, r = n * Oe + 1, n = o.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = o.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
G.squareRoot = G.sqrt = function() {
  var e, t, r, n, o, a, i, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Ht + "NaN");
  }
  for (e = Be(s), Te = !1, o = Math.sqrt(+s), o == 0 || o == 1 / 0 ? (t = sr(s.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = To((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(o.toString()), r = c.precision, o = i = r + 3; ; )
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
G.times = G.mul = function(e) {
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
G.toDecimalPlaces = G.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (pr(e, 0, Co), t === void 0 ? t = n.rounding : pr(t, 0, 8), Se(r, e + Be(r) + 1, t));
};
G.toExponential = function(e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0 ? r = Ln(n, !0) : (pr(e, 0, Co), t === void 0 ? t = o.rounding : pr(t, 0, 8), n = Se(new o(n), e + 1, t), r = Ln(n, !0, e + 1)), r;
};
G.toFixed = function(e, t) {
  var r, n, o = this, a = o.constructor;
  return e === void 0 ? Ln(o) : (pr(e, 0, Co), t === void 0 ? t = a.rounding : pr(t, 0, 8), n = Se(new a(o), e + Be(o) + 1, t), r = Ln(n.abs(), !1, e + Be(n) + 1), o.isneg() && !o.isZero() ? "-" + r : r);
};
G.toInteger = G.toint = function() {
  var e = this, t = e.constructor;
  return Se(new t(e), Be(e) + 1, t.rounding);
};
G.toNumber = function() {
  return +this;
};
G.toPower = G.pow = function(e) {
  var t, r, n, o, a, i, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(_t);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(Ht + "Infinity");
    return s;
  }
  if (s.eq(_t)) return s;
  if (n = c.precision, e.eq(_t)) return Se(s, n);
  if (t = e.e, r = e.d.length - 1, i = t >= r, a = s.s, i) {
    if ((r = l < 0 ? -l : l) <= JO) {
      for (o = new c(_t), t = Math.ceil(n / Oe + 4), Te = !1; r % 2 && (o = o.times(s), rb(o.d, t)), r = To(r / 2), r !== 0; )
        s = s.times(s), rb(s.d, t);
      return Te = !0, e.s < 0 ? new c(_t).div(o) : Se(o, n);
    }
  } else if (a < 0) throw Error(Ht + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Te = !1, o = e.times(ga(s, n + u)), Te = !0, o = eA(o), o.s = a, o;
};
G.toPrecision = function(e, t) {
  var r, n, o = this, a = o.constructor;
  return e === void 0 ? (r = Be(o), n = Ln(o, r <= a.toExpNeg || r >= a.toExpPos)) : (pr(e, 1, Co), t === void 0 ? t = a.rounding : pr(t, 0, 8), o = Se(new a(o), e, t), r = Be(o), n = Ln(o, e <= r || r <= a.toExpNeg, e)), n;
};
G.toSignificantDigits = G.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (pr(e, 1, Co), t === void 0 ? t = n.rounding : pr(t, 0, 8)), Se(new n(r), e, t);
};
G.toString = G.valueOf = G.val = G.toJSON = G[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Be(e), r = e.constructor;
  return Ln(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function QO(e, t) {
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
    var s, c, u, l, d, p, h, v, f, g, y, w, x, E, S, P, O, A, C = n.constructor, N = n.s == o.s ? 1 : -1, _ = n.d, R = o.d;
    if (!n.s) return new C(n);
    if (!o.s) throw Error(Ht + "Division by zero");
    for (c = n.e - o.e, O = R.length, S = _.length, h = new C(N), v = h.d = [], u = 0; R[u] == (_[u] || 0); ) ++u;
    if (R[u] > (_[u] || 0) && --c, a == null ? w = a = C.precision : i ? w = a + (Be(n) - Be(o)) + 1 : w = a, w < 0) return new C(0);
    if (w = w / Oe + 2 | 0, u = 0, O == 1)
      for (l = 0, R = R[0], w++; (u < S || l) && w--; u++)
        x = l * Xe + (_[u] || 0), v[u] = x / R | 0, l = x % R | 0;
    else {
      for (l = Xe / (R[0] + 1) | 0, l > 1 && (R = e(R, l), _ = e(_, l), O = R.length, S = _.length), E = O, f = _.slice(0, O), g = f.length; g < O; ) f[g++] = 0;
      A = R.slice(), A.unshift(0), P = R[0], R[1] >= Xe / 2 && ++P;
      do
        l = 0, s = t(R, f, O, g), s < 0 ? (y = f[0], O != g && (y = y * Xe + (f[1] || 0)), l = y / P | 0, l > 1 ? (l >= Xe && (l = Xe - 1), d = e(R, l), p = d.length, g = f.length, s = t(d, f, p, g), s == 1 && (l--, r(d, O < p ? A : R, p))) : (l == 0 && (s = l = 1), d = R.slice()), p = d.length, p < g && d.unshift(0), r(f, d, g), s == -1 && (g = f.length, s = t(R, f, O, g), s < 1 && (l++, r(f, O < g ? A : R, g))), g = f.length) : s === 0 && (l++, f = [0]), v[u++] = l, s && f[0] ? f[g++] = _[E] || 0 : (f = [_[E]], g = 1);
      while ((E++ < S || f[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), h.e = c, Se(h, i ? a + Be(h) + 1 : a);
  };
})();
function eA(e, t) {
  var r, n, o, a, i, s, c = 0, u = 0, l = e.constructor, d = l.precision;
  if (Be(e) > 16) throw Error(yh + Be(e));
  if (!e.s) return new l(_t);
  for (Te = !1, s = d, i = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(i), u += 5;
  for (n = Math.log(hn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = o = a = new l(_t), l.precision = s; ; ) {
    if (o = Se(o.times(e), s), r = r.times(++c), i = a.plus(Ar(o, r, s)), sr(i.d).slice(0, s) === sr(a.d).slice(0, s)) {
      for (; u--; ) a = Se(a.times(a), s);
      return l.precision = d, t == null ? (Te = !0, Se(a, d)) : a;
    }
    a = i;
  }
}
function Be(e) {
  for (var t = e.e * Oe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Ju(e, t, r) {
  if (t > e.LN10.sd())
    throw Te = !0, r && (e.precision = r), Error(Ht + "LN10 precision limit exceeded");
  return Se(new e(e.LN10), t);
}
function qr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ga(e, t) {
  var r, n, o, a, i, s, c, u, l, d = 1, p = 10, h = e, v = h.d, f = h.constructor, g = f.precision;
  if (h.s < 1) throw Error(Ht + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(_t)) return new f(0);
  if (t == null ? (Te = !1, u = g) : u = t, h.eq(10))
    return t == null && (Te = !0), Ju(f, u);
  if (u += p, f.precision = u, r = sr(v), n = r.charAt(0), a = Be(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = sr(h.d), n = r.charAt(0), d++;
    a = Be(h), n > 1 ? (h = new f("0." + r), a++) : h = new f(n + "." + r.slice(1));
  } else
    return c = Ju(f, u + 2, g).times(a + ""), h = ga(new f(n + "." + r.slice(1)), u - p).plus(c), f.precision = g, t == null ? (Te = !0, Se(h, g)) : h;
  for (s = i = h = Ar(h.minus(_t), h.plus(_t), u), l = Se(h.times(h), u), o = 3; ; ) {
    if (i = Se(i.times(l), u), c = s.plus(Ar(i, new f(o), u)), sr(c.d).slice(0, u) === sr(s.d).slice(0, u))
      return s = s.times(2), a !== 0 && (s = s.plus(Ju(f, u + 2, g).times(a + ""))), s = Ar(s, new f(d), u), f.precision = g, t == null ? (Te = !0, Se(s, g)) : s;
    s = c, o += 2;
  }
}
function tb(e, t) {
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
    if (e.d.push(+t), Te && (e.e > Ns || e.e < -Ns)) throw Error(yh + r);
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
    return c ? (a = Be(e), d.length = 1, t = t - a - 1, d[0] = hn(10, (Oe - t % Oe) % Oe), e.e = To(-t / Oe) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
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
  if (Te && (e.e > Ns || e.e < -Ns))
    throw Error(yh + Be(e));
  return e;
}
function tA(e, t) {
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
function Ln(e, t, r) {
  var n, o = Be(e), a = sr(e.d), i = a.length;
  return t ? (r && (n = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + qr(n) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (o < 0 ? "e" : "e+") + o) : o < 0 ? (a = "0." + qr(-o - 1) + a, r && (n = r - i) > 0 && (a += qr(n))) : o >= i ? (a += qr(o + 1 - i), r && (n = r - o - 1) > 0 && (a = a + "." + qr(n))) : ((n = o + 1) < i && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - i) > 0 && (o + 1 === i && (a += "."), a += qr(n))), e.s < 0 ? "-" + a : a;
}
function rb(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function rA(e) {
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
      return tb(i, a.toString());
    } else if (typeof a != "string")
      throw Error(Pn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), i.s = -1) : i.s = 1, LW.test(a)) tb(i, a);
    else throw Error(Pn + a);
  }
  if (o.prototype = G, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = rA, o.config = o.set = $W, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return o.config(e), o;
}
function $W(e) {
  if (!e || typeof e != "object")
    throw Error(Ht + "Object expected");
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
var bh = rA(jW);
_t = new bh(1);
const ge = bh;
var BW = (e) => e, nA = {}, oA = (e) => e === nA, nb = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && oA(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, aA = (e, t) => e === 1 ? t : nb(function() {
  for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  var a = n.filter((i) => i !== nA).length;
  return a >= e ? t(...n) : aA(e - a, nb(function() {
    for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
      s[c] = arguments[c];
    var u = n.map((l) => oA(l) ? s.shift() : l);
    return t(...u, ...s);
  }));
}), Vc = (e) => aA(e.length, e), gf = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, FW = Vc((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), zW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return BW;
  var o = r.reverse(), a = o[0], i = o.slice(1);
  return function() {
    return i.reduce((s, c) => c(s), a(...arguments));
  };
}, yf = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), iA = (e) => {
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
function sA(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ge(e).abs().log(10).toNumber()) + 1, t;
}
function cA(e, t, r) {
  for (var n = new ge(e), o = 0, a = []; n.lt(t) && o < 1e5; )
    a.push(n.toNumber()), n = n.add(r), o++;
  return a;
}
Vc((e, t, r) => {
  var n = +e, o = +t;
  return n + r * (o - n);
});
Vc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
});
Vc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
var lA = (e) => {
  var [t, r] = e, [n, o] = [t, r];
  return t > r && ([n, o] = [r, t]), [n, o];
}, uA = (e, t, r) => {
  if (e.lte(0))
    return new ge(0);
  var n = sA(e.toNumber()), o = new ge(10).pow(n), a = e.div(o), i = n !== 1 ? 0.05 : 0.1, s = new ge(Math.ceil(a.div(i).toNumber())).add(r).mul(i), c = s.mul(o);
  return t ? new ge(c.toNumber()) : new ge(Math.ceil(c.toNumber()));
}, UW = (e, t, r) => {
  var n = new ge(1), o = new ge(e);
  if (!o.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ge(10).pow(sA(e) - 1), o = new ge(Math.floor(o.div(n).toNumber())).mul(n)) : a > 1 && (o = new ge(Math.floor(e)));
  } else e === 0 ? o = new ge(Math.floor((t - 1) / 2)) : r || (o = new ge(Math.floor(e)));
  var i = Math.floor((t - 1) / 2), s = zW(FW((c) => o.add(new ge(c - i).mul(n)).toNumber()), gf);
  return s(0, t);
}, dA = function(t, r, n, o) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ge(0),
      tickMin: new ge(0),
      tickMax: new ge(0)
    };
  var i = uA(new ge(r).sub(t).div(n - 1), o, a), s;
  t <= 0 && r >= 0 ? s = new ge(0) : (s = new ge(t).add(r).div(2), s = s.sub(new ge(s).mod(i)));
  var c = Math.ceil(s.sub(t).div(i).toNumber()), u = Math.ceil(new ge(r).sub(s).div(i).toNumber()), l = c + u + 1;
  return l > n ? dA(t, r, n, o, a + 1) : (l < n && (u = r > 0 ? u + (n - l) : u, c = r > 0 ? c : c + (n - l)), {
    step: i,
    tickMin: s.sub(new ge(c).mul(i)),
    tickMax: s.add(new ge(u).mul(i))
  });
};
function WW(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = Math.max(n, 2), [i, s] = lA([t, r]);
  if (i === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [i, ...gf(0, n - 1).map(() => 1 / 0)] : [...gf(0, n - 1).map(() => -1 / 0), s];
    return t > r ? yf(c) : c;
  }
  if (i === s)
    return UW(i, n, o);
  var {
    step: u,
    tickMin: l,
    tickMax: d
  } = dA(i, s, a, o, 0), p = cA(l, d.add(new ge(0.1).mul(u)), u);
  return t > r ? yf(p) : p;
}
function KW(e, t) {
  var [r, n] = e, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [a, i] = lA([r, n]);
  if (a === -1 / 0 || i === 1 / 0)
    return [r, n];
  if (a === i)
    return [a];
  var s = Math.max(t, 2), c = uA(new ge(i).sub(a).div(s - 1), o, 0), u = [...cA(new ge(a), new ge(i), c), i];
  return o === !1 && (u = u.map((l) => Math.round(l))), r > n ? yf(u) : u;
}
var VW = iA(WW), qW = iA(KW), fA = (e) => e.rootProps.maxBarSize, HW = (e) => e.rootProps.barGap, pA = (e) => e.rootProps.barCategoryGap, GW = (e) => e.rootProps.barSize, Va = (e) => e.rootProps.stackOffset, wh = (e) => e.options.chartName, xh = (e) => e.rootProps.syncId, hA = (e) => e.rootProps.syncMethod, Eh = (e) => e.options.eventEmitter, wr = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, At = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, qc = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, YW = {
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
}, XW = {
  allowDataOverflow: At.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: At.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: At.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: At.scale,
  tick: At.tick,
  tickCount: At.tickCount,
  ticks: void 0,
  type: At.type,
  unit: void 0
}, ZW = {
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
}, JW = {
  allowDataOverflow: At.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: At.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: At.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: At.scale,
  tick: At.tick,
  tickCount: At.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Sh = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? ZW : YW, Ph = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? JW : XW, Hc = (e) => e.polarOptions, Oh = T([jr, Lr, Ve], q1), mA = T([Hc, Oh], (e, t) => {
  if (e != null)
    return ct(e.innerRadius, t, 0);
}), vA = T([Hc, Oh], (e, t) => {
  if (e != null)
    return ct(e.outerRadius, t, t * 0.8);
}), QW = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, gA = T([Hc], QW);
T([Sh, gA], qc);
var yA = T([Oh, mA, vA], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
T([Ph, yA], qc);
var bA = T([le, Hc, mA, vA, jr, Lr], (e, t, r, n, o, a) => {
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
}), Ne = (e, t) => t, qa = (e, t, r) => r;
function Gc(e) {
  return e?.id;
}
var Ge = (e) => {
  var t = le(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, _o = (e) => e.tooltip.settings.axisId, Ye = (e) => {
  var t = Ge(e), r = _o(e);
  return Ha(e, t, r);
}, wA = T([Ye], (e) => e?.dataKey);
function xA(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: o,
    dataKey: a
  } = r, i = /* @__PURE__ */ new Map();
  return e.forEach((s) => {
    var c, u = (c = s.data) !== null && c !== void 0 ? c : n;
    if (!(u == null || u.length === 0)) {
      var l = Gc(s);
      u.forEach((d, p) => {
        var h = a == null || o ? p : String(xe(d, a, null)), v = xe(d, s.dataKey, 0), f;
        i.has(h) ? f = i.get(h) : f = {}, Object.assign(f, {
          [l]: v
        }), i.set(h, f);
      });
    }
  }), Array.from(i.values());
}
function Yc(e) {
  return e.stackId != null && e.dataKey != null;
}
var Xc = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Zc(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function ob(e, t) {
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
    t % 2 ? ob(Object(r), !0).forEach(function(n) {
      e3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ob(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e3(e, t, r) {
  return (t = t3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t3(e) {
  var t = r3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bf = [0, "auto"], St = {
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
}, EA = (e, t) => e.cartesianAxis.xAxis[t], Fr = (e, t) => {
  var r = EA(e, t);
  return r ?? St;
}, Pt = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: bf,
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
}, SA = (e, t) => e.cartesianAxis.yAxis[t], zr = (e, t) => {
  var r = SA(e, t);
  return r ?? Pt;
}, n3 = {
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
  return r ?? n3;
}, Ie = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
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
}, o3 = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
    case "yAxis":
      return zr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Ha = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
    case "yAxis":
      return zr(e, r);
    case "angleAxis":
      return Sh(e, r);
    case "radiusAxis":
      return Ph(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, PA = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
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
var Ga = (e) => e.graphicalItems.cartesianItems, a3 = T([Ne, qa], Ch), Th = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), Ya = T([Ga, Ie, a3], Th, {
  memoizeOptions: {
    resultEqualityCheck: Zc
  }
}), OA = T([Ya], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Yc)), AA = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), i3 = T([Ya], AA), _h = (e) => e.map((t) => t.data).filter(Boolean).flat(1), s3 = T([Ya], _h, {
  memoizeOptions: {
    resultEqualityCheck: Zc
  }
}), Nh = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: o
  } = t;
  return e.length > 0 ? e : r.slice(n, o + 1);
}, kh = T([s3, Ka], Nh), Ih = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: xe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((o) => ({
  value: xe(o, n)
}))) : e.map((n) => ({
  value: n
})), Jc = T([kh, Ie, Ya], Ih);
function CA(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function Ki(e) {
  if (fr(e) || e instanceof Date) {
    var t = Number(e);
    if (ze(t))
      return t;
  }
}
function ab(e) {
  if (Array.isArray(e)) {
    var t = [Ki(e[0]), Ki(e[1])];
    return jn(t) ? t : void 0;
  }
  var r = Ki(e);
  if (r != null)
    return [r, r];
}
function No(e) {
  return e.map(Ki).filter(Pz);
}
function c3(e, t, r) {
  return !r || typeof t != "number" || It(t) ? [] : r.length ? No(r.flatMap((n) => {
    var o = xe(e, n.dataKey), a, i;
    if (Array.isArray(o) ? [a, i] = o : a = i = o, !(!ze(a) || !ze(i)))
      return [t - a, t + i];
  })) : [];
}
var l3 = T([OA, Ka, Ye], xA), TA = (e, t, r) => {
  var n = {}, o = t.reduce((a, i) => (i.stackId == null || (a[i.stackId] == null && (a[i.stackId] = []), a[i.stackId].push(i)), a), n);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [i, s] = a, c = s.map(Gc);
    return [i, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: HB(e, c, r),
      graphicalItems: s
    }];
  }));
}, ya = T([l3, OA, Va], TA), _A = (e, t, r, n) => {
  var {
    dataStartIndex: o,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var i = ZB(e, o, a);
    if (!(i != null && i[0] === 0 && i[1] === 0))
      return i;
  }
}, u3 = T([Ie], (e) => e.allowDataOverflow), Rh = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return bf;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = No(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : bf;
}, Mh = T([Ie], Rh), Dh = T([Mh, u3], ZO), d3 = T([ya, un, Ne, Dh], _A, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), Qc = (e) => e.errorBars, f3 = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => CA(r, n)), Is = function() {
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
      var u, l, d = (u = n[c.id]) === null || u === void 0 ? void 0 : u.filter((y) => CA(o, y)), p = xe(s, (l = t.dataKey) !== null && l !== void 0 ? l : c.dataKey), h = c3(s, p, d);
      if (h.length >= 2) {
        var v = Math.min(...h), f = Math.max(...h);
        (a == null || v < a) && (a = v), (i == null || f > i) && (i = f);
      }
      var g = ab(p);
      g != null && (a = a == null ? g[0] : Math.min(a, g[0]), i = i == null ? g[1] : Math.max(i, g[1]));
    });
  }), t?.dataKey != null && e.forEach((s) => {
    var c = ab(xe(s, t.dataKey));
    c != null && (a = a == null ? c[0] : Math.min(a, c[0]), i = i == null ? c[1] : Math.max(i, c[1]));
  }), ze(a) && ze(i))
    return [a, i];
}, p3 = T([kh, Ie, i3, Qc, Ne], jh, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
});
function h3(e) {
  var {
    value: t
  } = e;
  if (fr(t) || t instanceof Date)
    return t;
}
var m3 = (e, t, r) => {
  var n = e.map(h3).filter((o) => o != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && ZP(n)) ? vO(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, NA = (e) => e.referenceElements.dots, ko = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), v3 = T([NA, Ne, qa], ko), kA = (e) => e.referenceElements.areas, g3 = T([kA, Ne, qa], ko), IA = (e) => e.referenceElements.lines, y3 = T([IA, Ne, qa], ko), RA = (e, t) => {
  var r = No(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, b3 = T(v3, Ne, RA), MA = (e, t) => {
  var r = No(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, w3 = T([g3, Ne], MA), DA = (e, t) => {
  var r = No(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, x3 = T(y3, Ne, DA), E3 = T(b3, x3, w3, (e, t, r) => Is(e, r, t)), Lh = (e, t, r, n, o, a, i, s) => {
  if (r != null)
    return r;
  var c = i === "vertical" && s === "xAxis" || i === "horizontal" && s === "yAxis", u = c ? Is(n, a, o) : Is(a, o);
  return DW(t, u, e.allowDataOverflow);
}, S3 = T([Ie, Mh, Dh, d3, p3, E3, le, Ne], Lh, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), P3 = [0, 1], $h = (e, t, r, n, o, a, i) => {
  if (!((e == null || r == null || r.length === 0) && i === void 0)) {
    var {
      dataKey: s,
      type: c
    } = e, u = gr(t, a);
    return u && s == null ? vO(0, r.length) : c === "category" ? m3(n, e, u) : o === "expand" ? P3 : i;
  }
}, Bh = T([Ie, le, kh, Jc, Va, Ne, S3], $h), jA = (e, t, r, n, o) => {
  if (e != null) {
    var {
      scale: a,
      type: i
    } = e;
    if (a === "auto")
      return t === "radial" && o === "radiusAxis" ? "band" : t === "radial" && o === "angleAxis" ? "linear" : i === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : i === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var s = "scale".concat(Ia(a));
      return s in Jo ? s : "point";
    }
  }
}, Io = T([Ie, le, PA, wh, Ne], jA);
function O3(e) {
  if (e != null) {
    if (e in Jo)
      return Jo[e]();
    var t = "scale".concat(Ia(e));
    if (t in Jo)
      return Jo[t]();
  }
}
function Fh(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var o = O3(t);
    if (o != null) {
      var a = o.domain(r).range(n);
      return UB(a), a;
    }
  }
}
var zh = (e, t, r) => {
  var n = Rh(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && jn(e))
      return VW(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && jn(e))
      return qW(e, t.tickCount, t.allowDecimals);
  }
}, Uh = T([Bh, Ha, Io], zh), Wh = (e, t, r, n) => {
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
}, A3 = T([Ie, Bh, Uh, Ne], Wh), C3 = T(Jc, Ie, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(No(e.map((s) => s.value))).sort((s, c) => s - c);
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
}), LA = T(C3, le, pA, Ve, (e, t, r, n) => n, (e, t, r, n, o) => {
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
}), T3 = (e, t) => {
  var r = Fr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : LA(e, "xAxis", t, r.padding);
}, _3 = (e, t) => {
  var r = zr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : LA(e, "yAxis", t, r.padding);
}, N3 = T(Fr, T3, (e, t) => {
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
}), k3 = T(zr, _3, (e, t) => {
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
}), I3 = T([Ve, N3, Dc, Mc, (e, t, r) => r], (e, t, r, n, o) => {
  var {
    padding: a
  } = n;
  return o ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), R3 = T([Ve, le, k3, Dc, Mc, (e, t, r) => r], (e, t, r, n, o, a) => {
  var {
    padding: i
  } = o;
  return a ? [n.height - i.bottom, i.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), Xa = (e, t, r, n) => {
  var o;
  switch (t) {
    case "xAxis":
      return I3(e, r, n);
    case "yAxis":
      return R3(e, r, n);
    case "zAxis":
      return (o = Ah(e, r)) === null || o === void 0 ? void 0 : o.range;
    case "angleAxis":
      return gA(e);
    case "radiusAxis":
      return yA(e, r);
    default:
      return;
  }
}, $A = T([Ie, Xa], qc), Ro = T([Ie, Io, A3, $A], Fh);
T([Ya, Qc, Ne], f3);
function BA(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var el = (e, t) => t, tl = (e, t, r) => r, M3 = T(Ic, el, tl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(BA)), D3 = T(Rc, el, tl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(BA)), FA = (e, t) => ({
  width: e.width,
  height: t.height
}), j3 = (e, t) => {
  var r = typeof t.width == "number" ? t.width : $a;
  return {
    width: r,
    height: e.height
  };
}, zA = T(Ve, Fr, FA), L3 = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, $3 = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, B3 = T(Lr, Ve, M3, el, tl, (e, t, r, n, o) => {
  var a = {}, i;
  return r.forEach((s) => {
    var c = FA(t, s);
    i == null && (i = L3(t, n, e));
    var u = n === "top" && !o || n === "bottom" && o;
    a[s.id] = i - Number(u) * c.height, i += (u ? -1 : 1) * c.height;
  }), a;
}), F3 = T(jr, Ve, D3, el, tl, (e, t, r, n, o) => {
  var a = {}, i;
  return r.forEach((s) => {
    var c = j3(t, s);
    i == null && (i = $3(t, n, e));
    var u = n === "left" && !o || n === "right" && o;
    a[s.id] = i - Number(u) * c.width, i += (u ? -1 : 1) * c.width;
  }), a;
}), z3 = (e, t) => {
  var r = Fr(e, t);
  if (r != null)
    return B3(e, r.orientation, r.mirror);
}, U3 = T([Ve, Fr, z3, (e, t) => t], (e, t, r, n) => {
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
}), W3 = (e, t) => {
  var r = zr(e, t);
  if (r != null)
    return F3(e, r.orientation, r.mirror);
}, K3 = T([Ve, zr, W3, (e, t) => t], (e, t, r, n) => {
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
}), UA = T(Ve, zr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : $a;
  return {
    width: r,
    height: e.height
  };
}), ib = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return zA(e, r).width;
    case "yAxis":
      return UA(e, r).height;
    default:
      return;
  }
}, WA = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: o,
      type: a,
      dataKey: i
    } = r, s = gr(e, n), c = t.map((u) => u.value);
    if (i && s && a === "category" && o && ZP(c))
      return c;
  }
}, Kh = T([le, Jc, Ie, Ne], WA), KA = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: o,
      scale: a
    } = r, i = gr(e, n);
    if (i && (o === "number" || a !== "auto"))
      return t.map((s) => s.value);
  }
}, Vh = T([le, Jc, Ha, Ne], KA), sb = T([le, o3, Io, Ro, Kh, Vh, Xa, Uh, Ne], (e, t, r, n, o, a, i, s, c) => {
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
}), V3 = (e, t, r, n, o, a, i, s, c) => {
  if (!(t == null || n == null)) {
    var u = gr(e, c), {
      type: l,
      ticks: d,
      tickCount: p
    } = t, h = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = l === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    v = c === "angleAxis" && a != null && a.length >= 2 ? Ze(a[0] - a[1]) * 2 * v : v;
    var f = d || o;
    if (f) {
      var g = f.map((y, w) => {
        var x = i ? i.indexOf(y) : y;
        return {
          index: w,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(x) + v,
          value: y,
          offset: v
        };
      });
      return g.filter((y) => !It(y.coordinate));
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
      value: i ? i[y] : y,
      index: w,
      offset: v
    }));
  }
}, VA = T([le, Ha, Io, Ro, Uh, Xa, Kh, Vh, Ne], V3), q3 = (e, t, r, n, o, a, i) => {
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
}, hr = T([le, Ha, Ro, Xa, Kh, Vh, Ne], q3), mr = T(Ie, Ro, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
}), H3 = T([Ie, Io, Bh, $A], Fh);
T((e, t, r) => Ah(e, r), H3, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
});
var G3 = T([le, Ic, Rc], (e, t, r) => {
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
}), qA = (e) => e.options.defaultTooltipEventType, HA = (e) => e.options.validateTooltipEventTypes;
function GA(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function qh(e, t) {
  var r = qA(e), n = HA(e);
  return GA(t, r, n);
}
function Y3(e) {
  return J((t) => qh(t, e));
}
var YA = (e, t) => {
  var r, n = Number(t);
  if (!(It(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, X3 = (e) => e.tooltip.settings, Gr = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, Z3 = {
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
}, XA = jt({
  name: "tooltip",
  initialState: Z3,
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
  addTooltipEntrySettings: J3,
  removeTooltipEntrySettings: Q3,
  setTooltipSettingsState: e5,
  setActiveMouseOverItemIndex: ZA,
  mouseLeaveItem: t5,
  mouseLeaveChart: JA,
  setActiveClickItemIndex: r5,
  setMouseOverAxisIndex: QA,
  setMouseClickAxisIndex: n5,
  setSyncInteraction: wf,
  setKeyboardInteraction: xf
} = XA.actions, o5 = XA.reducer;
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
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), !0).forEach(function(n) {
      a5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a5(e, t, r) {
  return (t = i5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i5(e) {
  var t = s5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c5(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function l5(e) {
  return e.index != null;
}
var eC = (e, t, r, n) => {
  if (t == null)
    return Gr;
  var o = c5(e, t, r);
  if (o == null)
    return Gr;
  if (o.active)
    return o;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (l5(o)) {
    if (a)
      return Ni(Ni({}, o), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return Ni(Ni({}, Gr), {}, {
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
}, tC = (e, t, r, n, o, a, i, s) => {
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
}, rC = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var o;
  return r === "hover" ? o = e.itemInteraction.hover.dataKey : o = e.itemInteraction.click.dataKey, o == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((a) => {
    var i;
    return ((i = a.settings) === null || i === void 0 ? void 0 : i.dataKey) === o;
  });
}, Za = (e) => e.options.tooltipPayloadSearcher, Mo = (e) => e.tooltip;
function lb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ub(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lb(Object(r), !0).forEach(function(n) {
      u5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u5(e, t, r) {
  return (t = d5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d5(e) {
  var t = f5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p5(e, t) {
  return e ?? t;
}
var nC = (e, t, r, n, o, a, i) => {
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
      } = h, y = p5(f, s), w = Array.isArray(y) ? H1(y, u, l) : y, x = (v = g?.dataKey) !== null && v !== void 0 ? v : n, E = g?.nameKey, S;
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
      i === "axis" ? S = JP(w, n, o) : S = a(w, t, c, E), Array.isArray(S))
        S.forEach((O) => {
          var A = ub(ub({}, g), {}, {
            name: O.name,
            unit: O.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          p.push(Bg({
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
        p.push(Bg({
          tooltipEntrySettings: g,
          dataKey: x,
          payload: S,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: xe(S, x),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (P = xe(S, E)) !== null && P !== void 0 ? P : g?.name
        }));
      }
      return p;
    }, d);
  }
}, Gh = T([Ye, le, PA, wh, Ge], jA), h5 = T([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), m5 = T([Ge, _o], Ch), Ja = T([h5, Ye, m5], Th, {
  memoizeOptions: {
    resultEqualityCheck: Zc
  }
}), v5 = T([Ja], (e) => e.filter(Yc)), g5 = T([Ja], _h, {
  memoizeOptions: {
    resultEqualityCheck: Zc
  }
}), Do = T([g5, un], Nh), y5 = T([v5, un, Ye], xA), Yh = T([Do, Ye, Ja], Ih), oC = T([Ye], Rh), b5 = T([Ye], (e) => e.allowDataOverflow), aC = T([oC, b5], ZO), w5 = T([Ja], (e) => e.filter(Yc)), x5 = T([y5, w5, Va], TA), E5 = T([x5, un, Ge, aC], _A), S5 = T([Ja], AA), P5 = T([Do, Ye, S5, Qc, Ge], jh, {
  memoizeOptions: {
    resultEqualityCheck: Xc
  }
}), O5 = T([NA, Ge, _o], ko), A5 = T([O5, Ge], RA), C5 = T([kA, Ge, _o], ko), T5 = T([C5, Ge], MA), _5 = T([IA, Ge, _o], ko), N5 = T([_5, Ge], DA), k5 = T([A5, N5, T5], Is), I5 = T([Ye, oC, aC, E5, P5, k5, le, Ge], Lh), iC = T([Ye, le, Do, Yh, Va, Ge, I5], $h), R5 = T([iC, Ye, Gh], zh), M5 = T([Ye, iC, R5, Ge], Wh), sC = (e) => {
  var t = Ge(e), r = _o(e), n = !1;
  return Xa(e, t, r, n);
}, cC = T([Ye, sC], qc), lC = T([Ye, Gh, M5, cC], Fh), D5 = T([le, Yh, Ye, Ge], WA), j5 = T([le, Yh, Ye, Ge], KA), L5 = (e, t, r, n, o, a, i, s) => {
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
}, Ur = T([le, Ye, Gh, lC, sC, D5, j5, Ge], L5), Xh = T([qA, HA, X3], (e, t, r) => GA(r.shared, e, t)), uC = (e) => e.tooltip.settings.trigger, Zh = (e) => e.tooltip.settings.defaultIndex, rl = T([Mo, Xh, uC, Zh], eC), Qr = T([rl, Do], Hh), dC = T([Ur, Qr], YA), fC = T([rl], (e) => {
  if (e)
    return e.dataKey;
}), pC = T([Mo, Xh, uC, Zh], rC), $5 = T([jr, Lr, le, Ve, Ur, Zh, pC, Za], tC), B5 = T([rl, $5], (e, t) => e != null && e.coordinate ? e.coordinate : t), F5 = T([rl], (e) => e.active), z5 = T([pC, Qr, un, wA, dC, Za, Xh], nC), U5 = T([z5], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? db(Object(r), !0).forEach(function(n) {
      W5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : db(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W5(e, t, r) {
  return (t = K5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K5(e) {
  var t = V5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var q5 = () => J(Ye), H5 = () => {
  var e = q5(), t = J(Ur), r = J(lC);
  return Dn(fb(fb({}, e), {}, {
    scale: r
  }), t);
}, hC = () => J(wh), Jh = (e, t) => t, mC = (e, t, r) => r, Qh = (e, t, r, n) => n, G5 = T(Ur, (e) => Cc(e, (t) => t.coordinate)), em = T([Mo, Jh, mC, Qh], eC), vC = T([em, Do], Hh), Y5 = (e, t, r) => {
  if (t != null) {
    var n = Mo(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, gC = T([Mo, Jh, mC, Qh], rC), Rs = T([jr, Lr, le, Ve, Ur, Qh, gC, Za], tC), X5 = T([em, Rs], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), yC = T(Ur, vC, YA), Z5 = T([gC, vC, un, wA, yC, Za, Jh], nC), J5 = T([em], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), Q5 = (e, t, r, n, o, a, i, s) => {
  if (!(!e || !t || !n || !o || !a)) {
    var c = JB(e.chartX, e.chartY, t, r, s);
    if (c) {
      var u = eF(c, t), l = FB(u, i, a, n, o), d = QB(t, a, l, c);
      return {
        activeIndex: String(l),
        activeCoordinate: d
      };
    }
  }
};
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ef.apply(null, arguments);
}
function pb(e, t) {
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
    t % 2 ? pb(Object(r), !0).forEach(function(n) {
      eK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eK(e, t, r) {
  return (t = tK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tK(e) {
  var t = rK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nK(e) {
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
    h = yz(i, l, o, a), v = fO;
  else if (i === "radial") {
    var {
      cx: f,
      cy: g,
      radius: y,
      startAngle: w,
      endAngle: x
    } = pO(l);
    h = {
      cx: f,
      cy: g,
      startAngle: w,
      endAngle: x,
      innerRadius: y,
      outerRadius: y
    }, v = mO;
  } else
    h = {
      points: t4(i, l, o)
    }, v = no;
  var E = typeof s == "object" && "className" in s ? s.className : void 0, S = ki(ki(ki(ki({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), h), kn(s)), {}, {
    payload: d,
    payloadIndex: p,
    className: ue("recharts-tooltip-cursor", E)
  });
  return /* @__PURE__ */ Wt(s) ? /* @__PURE__ */ xa(s, S) : /* @__PURE__ */ ta(v, S);
}
function oK(e) {
  var t = H5(), r = nO(), n = Ba(), o = hC();
  return /* @__PURE__ */ m.createElement(nK, Ef({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: o
  }));
}
var bC = /* @__PURE__ */ Mt(null), aK = () => er(bC), Qu = { exports: {} }, hb;
function iK() {
  return hb || (hb = 1, (function(e) {
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
      var g = this._events[f], y = arguments.length, w, x;
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
        for (x = 1, w = new Array(y - 1); x < y; x++)
          w[x - 1] = arguments[x];
        g.fn.apply(g.context, w);
      } else {
        var E = g.length, S;
        for (x = 0; x < E; x++)
          switch (g[x].once && this.removeListener(u, g[x].fn, void 0, !0), y) {
            case 1:
              g[x].fn.call(g[x].context);
              break;
            case 2:
              g[x].fn.call(g[x].context, l);
              break;
            case 3:
              g[x].fn.call(g[x].context, l, d);
              break;
            case 4:
              g[x].fn.call(g[x].context, l, d, p);
              break;
            default:
              if (!w) for (S = 1, w = new Array(y - 1); S < y; S++)
                w[S - 1] = arguments[S];
              g[x].fn.apply(g[x].context, w);
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
  })(Qu)), Qu.exports;
}
var sK = iK();
const cK = /* @__PURE__ */ an(sK);
var ba = new cK(), Sf = "recharts.syncEvent.tooltip", mb = "recharts.syncEvent.brush";
function nl(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!It(r))
      return e?.[r];
  }
}
var lK = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, wC = jt({
  name: "options",
  initialState: lK,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), uK = wC.reducer, {
  createEventEmitter: dK
} = wC.actions;
function fK(e) {
  return e.tooltip.syncInteraction;
}
var pK = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, xC = jt({
  name: "chartData",
  initialState: pK,
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
  setChartData: vb,
  setDataStartEndIndexes: hK,
  setComputedData: pX
} = xC.actions, mK = xC.reducer, vK = ["x", "y"];
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
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gb(Object(r), !0).forEach(function(n) {
      gK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gK(e, t, r) {
  return (t = yK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yK(e) {
  var t = bK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wK(e, t) {
  if (e == null) return {};
  var r, n, o = xK(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function xK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var EC = () => {
};
function EK() {
  var e = J(xh), t = J(Eh), r = _e(), n = J(hA), o = J(Ur), a = Ba(), i = Lc(), s = J((c) => c.rootProps.className);
  Fe(() => {
    if (e == null)
      return EC;
    var c = (u, l, d) => {
      if (t !== d && e === u) {
        if (n === "index") {
          var p;
          if (i && l !== null && l !== void 0 && (p = l.payload) !== null && p !== void 0 && p.coordinate && l.payload.sourceViewBox) {
            var h = l.payload.coordinate, {
              x: v,
              y: f
            } = h, g = wK(h, vK), {
              x: y,
              y: w,
              width: x,
              height: E
            } = l.payload.sourceViewBox, S = Zn(Zn({}, g), {}, {
              x: i.x + (x ? (v - y) / x : 0) * i.width,
              y: i.y + (E ? (f - w) / E : 0) * i.height
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
          } else n === "value" && (P = o.find((B) => String(B.value) === l.payload.label));
          var {
            coordinate: C
          } = l.payload;
          if (P == null || l.payload.active === !1 || C == null || i == null) {
            r(wf({
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
            x: N,
            y: _
          } = C, R = Math.min(N, i.x + i.width), D = Math.min(_, i.y + i.height), k = {
            x: a === "horizontal" ? P.coordinate : R,
            y: a === "horizontal" ? D : P.coordinate
          }, U = wf({
            active: l.payload.active,
            coordinate: k,
            dataKey: l.payload.dataKey,
            index: String(P.index),
            label: l.payload.label,
            sourceViewBox: l.payload.sourceViewBox
          });
          r(U);
        }
      }
    };
    return ba.on(Sf, c), () => {
      ba.off(Sf, c);
    };
  }, [s, r, t, e, n, o, a, i]);
}
function SK() {
  var e = J(xh), t = J(Eh), r = _e();
  Fe(() => {
    if (e == null)
      return EC;
    var n = (o, a, i) => {
      t !== i && e === o && r(hK(a));
    };
    return ba.on(mb, n), () => {
      ba.off(mb, n);
    };
  }, [r, t, e]);
}
function PK() {
  var e = _e();
  Fe(() => {
    e(dK());
  }, [e]), EK(), SK();
}
function OK(e, t, r, n, o, a) {
  var i = J((h) => Y5(h, e, t)), s = J(Eh), c = J(xh), u = J(hA), l = J(fK), d = l?.active, p = Lc();
  Fe(() => {
    if (!d && c != null && s != null) {
      var h = wf({
        active: a,
        coordinate: r,
        dataKey: i,
        index: o,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: p
      });
      ba.emit(Sf, c, h, s);
    }
  }, [d, r, i, o, n, s, c, u, a, p]);
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
function bb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yb(Object(r), !0).forEach(function(n) {
      AK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AK(e, t, r) {
  return (t = CK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CK(e) {
  var t = TK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _K(e) {
  return e.dataKey;
}
function NK(e, t) {
  return /* @__PURE__ */ m.isValidElement(e) ? /* @__PURE__ */ m.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ m.createElement(e, t) : /* @__PURE__ */ m.createElement(YF, t);
}
var wb = [], kK = {
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
  isAnimationActive: !$r.isSsr,
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
function ol(e) {
  var t = qe(e, kK), {
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
    defaultIndex: w,
    portal: x,
    axisId: E
  } = t, S = _e(), P = typeof w == "number" ? String(w) : w;
  Fe(() => {
    S(e5({
      shared: g,
      trigger: y,
      axisId: E,
      active: r,
      defaultIndex: P
    }));
  }, [S, g, y, E, r, P]);
  var O = Lc(), A = sO(), C = Y3(g), {
    activeIndex: N,
    isActive: _
  } = J((ce) => J5(ce, C, y, P)), R = J((ce) => Z5(ce, C, y, P)), D = J((ce) => yC(ce, C, y, P)), k = J((ce) => X5(ce, C, y, P)), U = R, B = aK(), F = r ?? _, [M, z] = m1([U, F]), ne = C === "axis" ? D : void 0;
  OK(C, y, k, ne, N, F);
  var W = x ?? B;
  if (W == null)
    return null;
  var re = U ?? wb;
  F || (re = wb), s && re.length && (re = l1(U.filter((ce) => ce.value != null && (ce.hide !== !0 || t.includeHidden)), l, _K));
  var te = re.length > 0, oe = /* @__PURE__ */ m.createElement(rz, {
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: a,
    isAnimationActive: c,
    active: F,
    coordinate: k,
    hasPayload: te,
    offset: u,
    position: d,
    reverseDirection: p,
    useTranslate3d: h,
    viewBox: O,
    wrapperStyle: v,
    lastBoundingBox: M,
    innerRef: z,
    hasPortalFromProps: !!x
  }, NK(i, bb(bb({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: re,
    label: ne,
    active: F,
    coordinate: k,
    accessibilityLayer: A
  })));
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ Fw(oe, W), F && /* @__PURE__ */ m.createElement(oK, {
    cursor: f,
    tooltipEventType: C,
    coordinate: k,
    payload: U,
    index: N
  }));
}
var Qa = (e) => null;
Qa.displayName = "Cell";
function IK(e, t, r) {
  return (t = RK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RK(e) {
  var t = MK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class DK {
  constructor(t) {
    IK(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function xb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jK(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xb(Object(r), !0).forEach(function(n) {
      LK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LK(e, t, r) {
  return (t = $K(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $K(e) {
  var t = BK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FK = {
  cacheSize: 2e3,
  enableCache: !0
}, SC = jK({}, FK), Eb = new DK(SC.cacheSize), zK = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Sb = "recharts_measurement_span";
function UK(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", o = t.fontWeight || "", a = t.fontStyle || "", i = t.letterSpacing || "", s = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(o, "|").concat(a, "|").concat(i, "|").concat(s);
}
var Pb = (e, t) => {
  try {
    var r = document.getElementById(Sb);
    r || (r = document.createElement("span"), r.setAttribute("id", Sb), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, zK, t), r.textContent = "".concat(e);
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
  if (t == null || $r.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!SC.enableCache)
    return Pb(t, r);
  var n = UK(t, r), o = Eb.get(n);
  if (o)
    return o;
  var a = Pb(t, r);
  return Eb.set(n, a), a;
}, Ob = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Ab = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, WK = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, KK = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, PC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, VK = Object.keys(PC), Jn = "NaN";
function qK(e, t) {
  return e * PC[t];
}
class vt {
  static parse(t) {
    var r, [, n, o] = (r = KK.exec(t)) !== null && r !== void 0 ? r : [];
    return new vt(parseFloat(n), o ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, It(t) && (this.unit = ""), r !== "" && !WK.test(r) && (this.num = NaN, this.unit = ""), VK.includes(r) && (this.num = qK(t, r), this.unit = "px");
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
    return It(this.num);
  }
}
function OC(e) {
  if (e.includes(Jn))
    return Jn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, o, a] = (r = Ob.exec(t)) !== null && r !== void 0 ? r : [], i = vt.parse(n ?? ""), s = vt.parse(a ?? ""), c = o === "*" ? i.multiply(s) : i.divide(s);
    if (c.isNaN())
      return Jn;
    t = t.replace(Ob, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, l, d, p] = (u = Ab.exec(t)) !== null && u !== void 0 ? u : [], h = vt.parse(l ?? ""), v = vt.parse(p ?? ""), f = d === "+" ? h.add(v) : h.subtract(v);
    if (f.isNaN())
      return Jn;
    t = t.replace(Ab, f.toString());
  }
  return t;
}
var Cb = /\(([^()]*)\)/;
function HK(e) {
  for (var t = e, r; (r = Cb.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Cb, OC(n));
  }
  return t;
}
function GK(e) {
  var t = e.replace(/\s+/g, "");
  return t = HK(t), t = OC(t), t;
}
function YK(e) {
  try {
    return GK(e);
  } catch {
    return Jn;
  }
}
function ed(e) {
  var t = YK(e.slice(5, -1));
  return t === Jn ? "" : t;
}
var XK = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], ZK = ["dx", "dy", "angle", "className", "breakAll"];
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pf.apply(null, arguments);
}
function Tb(e, t) {
  if (e == null) return {};
  var r, n, o = JK(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function JK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var AC = /[ \f\n\r\t\v\u2028\u2029]+/, CC = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var o = [];
    Ae(t) || (r ? o = t.toString().split("") : o = t.toString().split(AC));
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
}, QK = (e, t, r, n, o) => {
  var {
    maxLines: a,
    children: i,
    style: s,
    breakAll: c
  } = e, u = Z(a), l = i, d = function() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return _.reduce((R, D) => {
      var {
        word: k,
        width: U
      } = D, B = R[R.length - 1];
      if (B && (n == null || o || B.width + U + r < Number(n)))
        B.words.push(k), B.width += U + r;
      else {
        var F = {
          words: [k],
          width: U
        };
        R.push(F);
      }
      return R;
    }, []);
  }, p = d(t), h = (N) => N.reduce((_, R) => _.width > R.width ? _ : R);
  if (!u || o)
    return p;
  var v = p.length > a || h(p).width > Number(n);
  if (!v)
    return p;
  for (var f = "…", g = (N) => {
    var _ = l.slice(0, N), R = CC({
      breakAll: c,
      style: s,
      children: _ + f
    }).wordsWithComputedWidth, D = d(R), k = D.length > a || h(D).width > Number(n);
    return [k, D];
  }, y = 0, w = l.length - 1, x = 0, E; y <= w && x <= l.length - 1; ) {
    var S = Math.floor((y + w) / 2), P = S - 1, [O, A] = g(P), [C] = g(S);
    if (!O && !C && (y = S + 1), O && C && (w = S - 1), !O && C) {
      E = A;
      break;
    }
    x++;
  }
  return E || p;
}, _b = (e) => {
  var t = Ae(e) ? [] : e.toString().split(AC);
  return [{
    words: t
  }];
}, eV = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: o,
    breakAll: a,
    maxLines: i
  } = e;
  if ((t || r) && !$r.isSsr) {
    var s, c, u = CC({
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
      return _b(n);
    return QK({
      breakAll: a,
      children: n,
      maxLines: i,
      style: o
    }, s, c, t, r);
  }
  return _b(n);
}, Nb = "#808080", al = /* @__PURE__ */ je((e, t) => {
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
    fill: u = Nb
  } = e, l = Tb(e, XK), d = Dr(() => eV({
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
  } = l, y = Tb(l, ZK);
  if (!fr(r) || !fr(n) || d.length === 0)
    return null;
  var w = r + (Z(p) ? p : 0), x = n + (Z(h) ? h : 0), E;
  switch (c) {
    case "start":
      E = ed("calc(".concat(a, ")"));
      break;
    case "middle":
      E = ed("calc(".concat((d.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      E = ed("calc(".concat(d.length - 1, " * -").concat(o, ")"));
      break;
  }
  var S = [];
  if (i) {
    var P = d[0].width, {
      width: O
    } = l;
    S.push("scale(".concat(Z(O) ? O / P : 1, ")"));
  }
  return v && S.push("rotate(".concat(v, ", ").concat(w, ", ").concat(x, ")")), S.length && (y.transform = S.join(" ")), /* @__PURE__ */ m.createElement("text", Pf({}, mt(y), {
    ref: t,
    x: w,
    y: x,
    className: ue("recharts-text", f),
    textAnchor: s,
    fill: u.includes("url") ? Nb : u
  }), d.map((A, C) => {
    var N = A.words.join(g ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement("tspan", {
        x: w,
        dy: C === 0 ? E : o,
        key: "".concat(N, "-").concat(C)
      }, N)
    );
  }));
});
al.displayName = "Text";
var tV = ["labelRef"];
function rV(e, t) {
  if (e == null) return {};
  var r, n, o = nV(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function nV(e, t) {
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
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kb(Object(r), !0).forEach(function(n) {
      oV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oV(e, t, r) {
  return (t = aV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aV(e) {
  var t = iV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iV(e, t) {
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
var TC = /* @__PURE__ */ Mt(null), sV = (e) => {
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
  return /* @__PURE__ */ m.createElement(TC.Provider, {
    value: i
  }, a);
}, _C = () => {
  var e = er(TC), t = Lc();
  return e || t;
}, cV = /* @__PURE__ */ Mt(null), lV = () => {
  var e = er(cV), t = J(bA);
  return e || t;
}, uV = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Ae(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, tm = (e) => e != null && typeof e == "function", dV = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, fV = (e, t, r, n, o) => {
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
  } = o, v = (u + l) / 2, f = dV(d, p), g = f >= 0 ? 1 : -1, y, w;
  switch (t) {
    case "insideStart":
      y = d + g * a, w = h;
      break;
    case "insideEnd":
      y = p - g * a, w = !h;
      break;
    case "end":
      y = p + g * a, w = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = f <= 0 ? w : !w;
  var x = $e(s, c, v, y), E = $e(s, c, v, y + (w ? 1 : -1) * 359), S = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), P = Ae(e.id) ? ca("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ m.createElement("text", xr({}, n, {
    dominantBaseline: "central",
    className: ue("recharts-radial-bar-label", i)
  }), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("path", {
    id: P,
    d: S
  })), /* @__PURE__ */ m.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, pV = (e, t, r) => {
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
    } = $e(n, o, i + t, u);
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
  } = $e(n, o, p, u);
  return {
    x: h,
    y: v,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, NC = (e) => "cx" in e && Z(e.cx), hV = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: o
  } = e, a;
  r != null && !NC(r) && (a = r);
  var {
    x: i,
    y: s,
    width: c,
    height: u
  } = t, l = u >= 0 ? 1 : -1, d = l * n, p = l > 0 ? "end" : "start", h = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, f = v * n, g = v > 0 ? "end" : "start", y = v > 0 ? "start" : "end";
  if (o === "top") {
    var w = {
      x: i + c / 2,
      y: s - l * n,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return De(De({}, w), a ? {
      height: Math.max(s - a.y, 0),
      width: c
    } : {});
  }
  if (o === "bottom") {
    var x = {
      x: i + c / 2,
      y: s + u + d,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return De(De({}, x), a ? {
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
    return De(De({}, E), a ? {
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
    return De(De({}, S), a ? {
      width: Math.max(a.x + a.width - S.x, 0),
      height: u
    } : {});
  }
  var P = a ? {
    width: c,
    height: u
  } : {};
  return o === "insideLeft" ? De({
    x: i + f,
    y: s + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, P) : o === "insideRight" ? De({
    x: i + c - f,
    y: s + u / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, P) : o === "insideTop" ? De({
    x: i + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: h
  }, P) : o === "insideBottom" ? De({
    x: i + c / 2,
    y: s + u - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, P) : o === "insideTopLeft" ? De({
    x: i + f,
    y: s + d,
    textAnchor: y,
    verticalAnchor: h
  }, P) : o === "insideTopRight" ? De({
    x: i + c - f,
    y: s + d,
    textAnchor: g,
    verticalAnchor: h
  }, P) : o === "insideBottomLeft" ? De({
    x: i + f,
    y: s + u - d,
    textAnchor: y,
    verticalAnchor: p
  }, P) : o === "insideBottomRight" ? De({
    x: i + c - f,
    y: s + u - d,
    textAnchor: g,
    verticalAnchor: p
  }, P) : o && typeof o == "object" && (Z(o.x) || Nr(o.x)) && (Z(o.y) || Nr(o.y)) ? De({
    x: i + ct(o.x, c),
    y: s + ct(o.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, P) : De({
    x: i + c / 2,
    y: s + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, P);
}, mV = {
  offset: 5
};
function Hr(e) {
  var t = qe(e, mV), {
    viewBox: r,
    position: n,
    value: o,
    children: a,
    content: i,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, l = lV(), d = _C(), p = n === "center" ? d : l ?? d, h = r || p;
  if (!h || Ae(o) && Ae(a) && !/* @__PURE__ */ Wt(i) && typeof i != "function")
    return null;
  var v = De(De({}, t), {}, {
    viewBox: h
  });
  if (/* @__PURE__ */ Wt(i)) {
    var {
      labelRef: f
    } = v, g = rV(v, tV);
    return /* @__PURE__ */ xa(i, g);
  }
  var y;
  if (typeof i == "function") {
    if (y = /* @__PURE__ */ ta(i, v), /* @__PURE__ */ Wt(y))
      return y;
  } else
    y = uV(t);
  var w = NC(h), x = mt(t);
  if (w && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return fV(t, n, y, x, h);
  var E = w ? pV(h, t.offset, t.position) : hV(t, h);
  return /* @__PURE__ */ m.createElement(al, xr({
    ref: u,
    className: ue("recharts-label", s)
  }, x, E, {
    breakAll: c
  }), y);
}
Hr.displayName = "Label";
var vV = (e, t, r) => {
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
  }, n)) : /* @__PURE__ */ Wt(e) ? e.type === Hr ? /* @__PURE__ */ xa(e, De({
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
function gV(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = _C();
  return vV(t, n, r) || null;
}
var td = {}, rd = {}, Ib;
function yV() {
  return Ib || (Ib = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(rd)), rd;
}
var nd = {}, Rb;
function bV() {
  return Rb || (Rb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(nd)), nd;
}
var Mb;
function wV() {
  return Mb || (Mb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ yV(), r = /* @__PURE__ */ bV(), n = /* @__PURE__ */ jp();
    function o(a) {
      if (n.isArrayLike(a))
        return t.last(r.toArray(a));
    }
    e.last = o;
  })(td)), td;
}
var od, Db;
function xV() {
  return Db || (Db = 1, od = wV().last), od;
}
var EV = /* @__PURE__ */ xV();
const SV = /* @__PURE__ */ an(EV);
var PV = ["valueAccessor"], OV = ["dataKey", "clockWise", "id", "textBreakAll"];
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ms.apply(null, arguments);
}
function jb(e, t) {
  if (e == null) return {};
  var r, n, o = AV(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function AV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var CV = (e) => Array.isArray(e.value) ? SV(e.value) : e.value, kC = /* @__PURE__ */ Mt(void 0), rm = kC.Provider, IC = /* @__PURE__ */ Mt(void 0), TV = IC.Provider;
function _V() {
  return er(kC);
}
function NV() {
  return er(IC);
}
function Vi(e) {
  var {
    valueAccessor: t = CV
  } = e, r = jb(e, PV), {
    dataKey: n,
    clockWise: o,
    id: a,
    textBreakAll: i
  } = r, s = jb(r, OV), c = _V(), u = NV(), l = c || u;
  return !l || !l.length ? null : /* @__PURE__ */ m.createElement(Re, {
    className: "recharts-label-list"
  }, l.map((d, p) => {
    var h, v = Ae(n) ? t(d, p) : xe(d && d.payload, n), f = Ae(a) ? {} : {
      id: "".concat(a, "-").concat(p)
    };
    return /* @__PURE__ */ m.createElement(Hr, Ms({
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
Vi.displayName = "LabelList";
function il(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ m.createElement(Vi, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ m.isValidElement(t) || tm(t) ? /* @__PURE__ */ m.createElement(Vi, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ m.createElement(Vi, Ms({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Of.apply(null, arguments);
}
var nm = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: o
  } = e, a = ue("recharts-dot", o);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ m.createElement("circle", Of({}, ht(e), Rp(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, RC = (e) => e.graphicalItems.polarItems, kV = T([Ne, qa], Ch), sl = T([RC, Ie, kV], Th), IV = T([sl], _h), cl = T([IV, gh], Nh), RV = T([cl, Ie, sl], Ih);
T([cl, Ie, sl], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((o) => {
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
var Lb = () => {
}, MV = T([cl, Ie, sl, Qc, Ne], jh), DV = T([Ie, Mh, Dh, Lb, MV, Lb, le, Ne], Lh), MC = T([Ie, le, cl, RV, Va, Ne, DV], $h), jV = T([MC, Ie, Io], zh);
T([Ie, MC, jV, Ne], Wh);
var LV = {
  radiusAxis: {},
  angleAxis: {}
}, DC = jt({
  name: "polarAxis",
  initialState: LV,
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
  addRadiusAxis: hX,
  removeRadiusAxis: mX,
  addAngleAxis: vX,
  removeAngleAxis: gX
} = DC.actions, $V = DC.reducer;
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
function Bb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $b(Object(r), !0).forEach(function(n) {
      BV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $b(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BV(e, t, r) {
  return (t = FV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FV(e) {
  var t = zV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var UV = (e, t) => t, om = T([RC, UV], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), WV = [], am = (e, t, r) => r?.length === 0 ? WV : r, jC = T([gh, om, am], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var o;
    if (t?.data != null && t.data.length > 0 ? o = t.data : o = n, (!o || !o.length) && r != null && (o = r.map((a) => Bb(Bb({}, t.presentationProps), a.props))), o != null)
      return o;
  }
}), KV = T([jC, om, am], (e, t, r) => {
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
}), VV = T([jC, om, am, Ve], (e, t, r, n) => {
  if (!(t == null || e == null))
    return qq({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Ii = { exports: {} }, ye = {};
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
function qV() {
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
var zb;
function HV() {
  return zb || (zb = 1, process.env.NODE_ENV !== "production" && (function() {
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
var Ub;
function GV() {
  return Ub || (Ub = 1, process.env.NODE_ENV === "production" ? Ii.exports = /* @__PURE__ */ qV() : Ii.exports = /* @__PURE__ */ HV()), Ii.exports;
}
var YV = /* @__PURE__ */ GV(), Wb = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Kb = null, ad = null, LC = (e) => {
  if (e === Kb && Array.isArray(ad))
    return ad;
  var t = [];
  return t_.forEach(e, (r) => {
    Ae(r) || (YV.isFragment(r) ? t = t.concat(LC(r.props.children)) : t.push(r));
  }), ad = t, Kb = e, t;
};
function im(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((o) => Wb(o)) : n = [Wb(t)], LC(e).forEach((o) => {
    var a = In(o, "type.displayName") || In(o, "type.name");
    n.indexOf(a) !== -1 && r.push(o);
  }), r;
}
var ll = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, id = {}, Vb;
function XV() {
  return Vb || (Vb = 1, (function(e) {
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
var sd, qb;
function ZV() {
  return qb || (qb = 1, sd = XV().isPlainObject), sd;
}
var JV = /* @__PURE__ */ ZV();
const QV = /* @__PURE__ */ an(JV);
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
function Gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hb(Object(r), !0).forEach(function(n) {
      eq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hb(Object(r)).forEach(function(n) {
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
function Ds() {
  return Ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ds.apply(null, arguments);
}
var Yb = (e, t, r, n, o) => {
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
  } = t, p = me(null), [h, v] = Ke(-1), f = me(o), g = me(a), y = me(i), w = me(r), x = me(n), E = Oo(e, "trapezoid-");
  if (Fe(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var k = p.current.getTotalLength();
        k && v(k);
      } catch {
      }
  }, []), r !== +r || n !== +n || o !== +o || a !== +a || i !== +i || o === 0 && a === 0 || i === 0)
    return null;
  var S = ue("recharts-trapezoid", s);
  if (!d)
    return /* @__PURE__ */ m.createElement("g", null, /* @__PURE__ */ m.createElement("path", Ds({}, mt(t), {
      className: S,
      d: Yb(r, n, o, a, i)
    })));
  var P = f.current, O = g.current, A = y.current, C = w.current, N = x.current, _ = "0px ".concat(h === -1 ? 1 : h, "px"), R = "".concat(h, "px 0px"), D = cO(["strokeDasharray"], u, c);
  return /* @__PURE__ */ m.createElement(Po, {
    animationId: E,
    key: E,
    canBegin: h > 0,
    duration: u,
    easing: c,
    isActive: d,
    begin: l
  }, (k) => {
    var U = we(P, o, k), B = we(O, a, k), F = we(A, i, k), M = we(C, r, k), z = we(N, n, k);
    p.current && (f.current = U, g.current = B, y.current = F, w.current = M, x.current = z);
    var ne = k > 0 ? {
      transition: D,
      strokeDasharray: R
    } : {
      strokeDasharray: _
    };
    return /* @__PURE__ */ m.createElement("path", Ds({}, mt(t), {
      className: S,
      d: Yb(M, z, U, B, F),
      ref: p,
      style: Gb(Gb({}, ne), t.style)
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
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xb(Object(r), !0).forEach(function(n) {
      cq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xb(Object(r)).forEach(function(n) {
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
  return js(js({}, t), e);
}
function fq(e, t) {
  return e === "symbols";
}
function Zb(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ m.createElement(fO, r);
    case "trapezoid":
      return /* @__PURE__ */ m.createElement(oq, r);
    case "sector":
      return /* @__PURE__ */ m.createElement(mO, r);
    case "symbols":
      if (fq(t))
        return /* @__PURE__ */ m.createElement(Ip, r);
      break;
    default:
      return null;
  }
}
function pq(e) {
  return /* @__PURE__ */ Wt(e) ? e.props : e;
}
function $C(e) {
  var {
    option: t,
    shapeType: r,
    propTransformer: n = dq,
    activeClassName: o = "recharts-active-shape",
    isActive: a
  } = e, i = iq(e, aq), s;
  if (/* @__PURE__ */ Wt(t))
    s = /* @__PURE__ */ xa(t, js(js({}, i), pq(t)));
  else if (typeof t == "function")
    s = t(i);
  else if (QV(t) && typeof t != "boolean") {
    var c = n(t, i);
    s = /* @__PURE__ */ m.createElement(Zb, {
      shapeType: r,
      elementProps: c
    });
  } else {
    var u = i;
    s = /* @__PURE__ */ m.createElement(Zb, {
      shapeType: r,
      elementProps: u
    });
  }
  return a ? /* @__PURE__ */ m.createElement(Re, {
    className: o
  }, s) : s;
}
var sm = (e, t) => {
  var r = _e();
  return (n, o) => (a) => {
    e?.(n, o, a), r(ZA({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
}, cm = (e) => {
  var t = _e();
  return (r, n) => (o) => {
    e?.(r, n, o), t(t5());
  };
}, lm = (e, t) => {
  var r = _e();
  return (n, o) => (a) => {
    e?.(n, o, a), r(r5({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
};
function ul(e) {
  var {
    fn: t,
    args: r
  } = e, n = _e(), o = ot();
  return ur(() => {
    if (!o) {
      var a = t(r);
      return n(J3(a)), () => {
        n(Q3(a));
      };
    }
  }, [t, r, n, o]), null;
}
var BC = () => {
};
function um(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = ot();
  return ur(() => n ? BC : (r(aO(t)), () => {
    r(iO(t));
  }), [r, n, t]), null;
}
function hq(e) {
  var {
    legendPayload: t
  } = e, r = _e(), n = J(le);
  return ur(() => n !== "centric" && n !== "radial" ? BC : (r(aO(t)), () => {
    r(iO(t));
  }), [r, n, t]), null;
}
var cd, mq = () => {
  var [e] = m.useState(() => ca("uid-"));
  return e;
}, vq = (cd = m.useId) !== null && cd !== void 0 ? cd : mq;
function gq(e, t) {
  var r = vq();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var yq = /* @__PURE__ */ Mt(void 0), dl = (e) => {
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
}, FC = jt({
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
  var r, n, o = Nq(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Nq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
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
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jb(Object(r), !0).forEach(function(n) {
      kq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kq(e, t, r) {
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
  var t = Dr(() => im(e.children, Qa), [e.children]), r = J((n) => KV(n, e.id, t));
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
var jq = (e, t) => e > t ? "start" : e < t ? "end" : "middle", Lq = (e, t, r) => ct(typeof t == "function" ? t(e) : t, r, r * 0.8), $q = (e, t, r) => {
  var {
    top: n,
    left: o,
    width: a,
    height: i
  } = t, s = q1(a, i), c = o + ct(e.cx, a, a / 2), u = n + ct(e.cy, i, i / 2), l = ct(e.innerRadius, s, 0), d = Lq(r, e.outerRadius, s), p = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: c,
    cy: u,
    innerRadius: l,
    outerRadius: d,
    maxRadius: p
  };
}, Bq = (e, t) => {
  var r = Ze(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function Fq(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var zq = (e, t) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = ue("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
  return /* @__PURE__ */ m.createElement(no, en({}, t, {
    type: "linear",
    className: r
  }));
}, Uq = (e, t, r) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ m.isValidElement(n)))
    return n;
  var o = ue("recharts-pie-label-text", Fq(e));
  return /* @__PURE__ */ m.createElement(al, en({}, t, {
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
  var s = ht(r), c = kn(o), u = kn(a), l = typeof o == "object" && "offsetRadius" in o && typeof o.offsetRadius == "number" && o.offsetRadius || 20, d = t.map((p, h) => {
    var v = (p.startAngle + p.endAngle) / 2, f = $e(p.cx, p.cy, p.outerRadius + l, v), g = Ce(Ce(Ce(Ce({}, s), p), {}, {
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
      points: [$e(p.cx, p.cy, p.outerRadius, v), f],
      key: "line"
    });
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement(Re, {
        key: "label-".concat(p.startAngle, "-").concat(p.endAngle, "-").concat(p.midAngle, "-").concat(h)
      }, a && zq(a, y), Uq(o, g, xe(p, i)))
    );
  });
  return /* @__PURE__ */ m.createElement(Re, {
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
  return typeof o == "object" && o != null && "position" in o ? /* @__PURE__ */ m.createElement(il, {
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
  } = e, a = J(Qr), {
    onMouseEnter: i,
    onClick: s,
    onMouseLeave: c
  } = o, u = fm(o, Cq), l = sm(i, o.dataKey), d = cm(c), p = lm(s, o.dataKey);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((h, v) => {
    if (h?.startAngle === 0 && h?.endAngle === 0 && t.length !== 1) return null;
    var f = r && String(v) === a, g = a ? n : null, y = f ? r : g, w = Ce(Ce({}, h), {}, {
      stroke: h.stroke,
      tabIndex: -1,
      [J1]: v,
      [Q1]: o.dataKey
    });
    return /* @__PURE__ */ m.createElement(
      Re,
      en({
        key: "sector-".concat(h?.startAngle, "-").concat(h?.endAngle, "-").concat(h.midAngle, "-").concat(v),
        tabIndex: -1,
        className: "recharts-pie-sector"
      }, Ra(u, h, v), {
        // @ts-expect-error the types need a bit of attention
        onMouseEnter: l(h, v),
        onMouseLeave: d(h, v),
        onClick: p(h, v)
      }),
      /* @__PURE__ */ m.createElement($C, en({
        option: y,
        isActive: f,
        shapeType: "sector"
      }, w))
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
  } = r, p = Math.abs(r.minAngle), h = Bq(s, c), v = Math.abs(h), f = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, g = n.filter((P) => xe(P, u, 0) !== 0).length, y = (v >= 360 ? g : g - 1) * f, w = v - g * p - y, x = n.reduce((P, O) => {
    var A = xe(O, u, 0);
    return P + (Z(A) ? A : 0);
  }, 0), E;
  if (x > 0) {
    var S;
    E = n.map((P, O) => {
      var A = xe(P, u, 0), C = xe(P, l, O), N = $q(r, a, P), _ = (Z(A) ? A : 0) / x, R, D = Ce(Ce({}, P), o && o[O] && o[O].props);
      O ? R = S.endAngle + Ze(h) * f * (A !== 0 ? 1 : 0) : R = s;
      var k = R + Ze(h) * ((A !== 0 ? p : 0) + _ * w), U = (R + k) / 2, B = (N.innerRadius + N.outerRadius) / 2, F = [{
        name: C,
        value: A,
        payload: D,
        dataKey: u,
        type: d
      }], M = $e(N.cx, N.cy, B, U);
      return S = Ce(Ce(Ce(Ce({}, r.presentationProps), {}, {
        percent: _,
        cornerRadius: i,
        name: C,
        tooltipPayload: F,
        midAngle: U,
        middleRadius: B,
        tooltipPosition: M
      }, D), N), {}, {
        value: A,
        startAngle: R,
        endAngle: k,
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
  return /* @__PURE__ */ m.createElement(TV, {
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
  }, (w) => {
    var x = [], E = n && n[0], S = E?.startAngle;
    return n?.forEach((P, O) => {
      var A = h && h[O], C = O > 0 ? In(P, "paddingAngle", 0) : 0;
      if (A) {
        var N = we(A.endAngle - A.startAngle, P.endAngle - P.startAngle, w), _ = Ce(Ce({}, P), {}, {
          startAngle: S + C,
          endAngle: S + N + C
        });
        x.push(_), S = _.endAngle;
      } else {
        var {
          endAngle: R,
          startAngle: D
        } = P, k = we(0, R - D, w), U = Ce(Ce({}, P), {}, {
          startAngle: S + C,
          endAngle: S + k + C
        });
        x.push(U), S = U.endAngle;
      }
    }), r.current = x, /* @__PURE__ */ m.createElement(Re, null, /* @__PURE__ */ m.createElement(Vq, {
      sectors: x,
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
  isAnimationActive: !$r.isSsr,
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
  } = e, i = Dr(() => im(e.children, Qa), [e.children]), s = J((l) => VV(l, t, i)), c = me(null), u = ue("recharts-pie", o);
  return n || s == null ? (c.current = null, /* @__PURE__ */ m.createElement(Re, {
    tabIndex: a,
    className: u
  })) : /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ul, {
    fn: Dq,
    args: Ce(Ce({}, e), {}, {
      sectors: s
    })
  }), /* @__PURE__ */ m.createElement(Re, {
    tabIndex: a,
    className: u
  }, /* @__PURE__ */ m.createElement(Gq, {
    props: Ce(Ce({}, r), {}, {
      sectors: s
    }),
    previousSectorsRef: c
  })));
}
function zC(e) {
  var t = qe(e, Yq), {
    id: r
  } = t, n = fm(t, _q), o = ht(n);
  return /* @__PURE__ */ m.createElement(dl, {
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
zC.displayName = "Pie";
function Qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qb(Object(r), !0).forEach(function(n) {
      Zq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qb(Object(r)).forEach(function(n) {
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
}, UC = jt({
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
        e.yAxis[r] = ew(ew({}, e.yAxis[r]), {}, {
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
  addZAxis: yX,
  removeZAxis: bX,
  updateYAxisWidth: aH
} = UC.actions, iH = UC.reducer, sH = T([Ve], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), cH = T([sH, jr, Lr], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), fl = () => J(cH), lH = () => J(U5);
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
function rw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tw(Object(r), !0).forEach(function(n) {
      uH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(n) {
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
  var i = rw(rw({
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
  }, kn(o)), Rp(o)), s;
  return /* @__PURE__ */ Wt(o) ? s = /* @__PURE__ */ xa(o, i) : typeof o == "function" ? s = o(i) : s = /* @__PURE__ */ m.createElement(nm, i), /* @__PURE__ */ m.createElement(Re, {
    className: "recharts-active-dot"
  }, s);
};
function Af(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: o
  } = e, a = J(Qr), i = lH();
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
var hH = process.env.NODE_ENV === "production", ld = "Invariant failed";
function nw(e, t) {
  if (hH)
    throw new Error(ld);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ld, ": ").concat(r) : ld;
  throw new Error(n);
}
var mH = ["x", "y"];
function Cf() {
  return Cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cf.apply(null, arguments);
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
function qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ow(Object(r), !0).forEach(function(n) {
      vH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ow(Object(r)).forEach(function(n) {
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
  return /* @__PURE__ */ m.createElement($C, Cf({
    shapeType: "rectangle",
    propTransformer: xH,
    activeClassName: "recharts-active-bar"
  }, e));
}
var EH = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, o) => {
    if (Z(t)) return t;
    var a = Z(n) || Ae(n);
    return a ? t(n, o) : (a || (process.env.NODE_ENV !== "production" ? nw(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")) : nw()), r);
  };
}, SH = {}, WC = jt({
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
  addErrorBar: wX,
  replaceErrorBar: xX,
  removeErrorBar: EX
} = WC.actions, PH = WC.reducer, OH = ["children"];
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
}, _H = /* @__PURE__ */ Mt(TH);
function KC(e) {
  var {
    children: t
  } = e, r = AH(e, OH);
  return /* @__PURE__ */ m.createElement(_H.Provider, {
    value: r
  }, t);
}
function pl(e, t) {
  var r, n, o = J((u) => Fr(u, e)), a = J((u) => zr(u, t)), i = (r = o?.allowDataOverflow) !== null && r !== void 0 ? r : St.allowDataOverflow, s = (n = a?.allowDataOverflow) !== null && n !== void 0 ? n : Pt.allowDataOverflow, c = i || s;
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
  } = e, o = fl(), {
    needClipX: a,
    needClipY: i,
    needClip: s
  } = pl(t, r);
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
var NH = ["onMouseEnter", "onMouseLeave", "onClick"], kH = ["value", "background", "tooltipPosition"], IH = ["id"], RH = ["onMouseEnter", "onClick", "onMouseLeave"];
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tn.apply(null, arguments);
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
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aw(Object(r), !0).forEach(function(n) {
      MH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
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
function Ls(e, t) {
  if (e == null) return {};
  var r, n, o = LH(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function LH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var $H = (e) => {
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
function BH(e) {
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
function FH(e) {
  var t = J(Qr), {
    data: r,
    dataKey: n,
    background: o,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: i,
    onMouseLeave: s,
    onClick: c
  } = a, u = Ls(a, NH), l = sm(i, n), d = cm(s), p = lm(c, n);
  if (!o || r == null)
    return null;
  var h = kn(o);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, r.map((v, f) => {
    var {
      value: g,
      background: y,
      tooltipPosition: w
    } = v, x = Ls(v, kH);
    if (!y)
      return null;
    var E = l(v, f), S = d(v, f), P = p(v, f), O = dt(dt(dt(dt(dt({
      option: o,
      isActive: String(f) === t
    }, x), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), h), Ra(u, v, f)), {}, {
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
  } = e, s = J(Qr), c = J(fC), u = r && String(a) === s && (c == null || i === c), l = u ? r : t;
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
  } = n, a = Ls(n, IH), {
    shape: i,
    dataKey: s,
    activeBar: c
  } = r, {
    onMouseEnter: u,
    onClick: l,
    onMouseLeave: d
  } = r, p = Ls(r, RH), h = sm(u, s), v = cm(d), f = lm(l, s);
  return t ? /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((g, y) => /* @__PURE__ */ m.createElement(
    Re,
    tn({
      key: "rectangle-".concat(g?.x, "-").concat(g?.y, "-").concat(g?.value, "-").concat(y),
      className: "recharts-bar-rectangle"
    }, Ra(p, g, y), {
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
  }, (w) => {
    var x = w === 1 ? n : n?.map((E, S) => {
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
    return w > 0 && (r.current = x ?? null), x == null ? null : /* @__PURE__ */ m.createElement(Re, null, /* @__PURE__ */ m.createElement(KH, {
      props: t,
      data: x
    }));
  }), /* @__PURE__ */ m.createElement(il, {
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
var VC = 0, HH = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: xe(e, t)
  };
};
class GH extends wa {
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
    var l = ue("recharts-bar", o), d = u;
    return /* @__PURE__ */ m.createElement(Re, {
      className: l,
      id: u
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: d,
      xAxisId: a,
      yAxisId: i
    })), /* @__PURE__ */ m.createElement(Re, {
      className: "recharts-bar-rectangles",
      clipPath: s ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ m.createElement(FH, {
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
  isAnimationActive: !$r.isSsr,
  legendType: "rect",
  minPointSize: VC,
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
  } = pl(t, r), p = Ba(), h = ot(), v = im(e.children, Qa), f = J((w) => P6(w, t, r, h, e.id, v));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var g, y = f?.[0];
  return y == null || y.height == null || y.width == null ? g = 0 : g = p === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ m.createElement(KC, {
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
  } = e, f = t === "horizontal" ? s : i, g = l ? f.scale.domain() : null, y = GB({
    numericAxis: f
  });
  return d.map((w, x) => {
    var E, S, P, O, A, C;
    l ? E = WB(l[x], g) : (E = xe(w, r), Array.isArray(E) || (E = [y, E]));
    var N = EH(n, VC)(E[1], x);
    if (t === "horizontal") {
      var _, [R, D] = [s.scale(E[0]), s.scale(E[1])];
      S = jg({
        axis: i,
        ticks: c,
        bandSize: a,
        offset: o.offset,
        entry: w,
        index: x
      }), P = (_ = D ?? R) !== null && _ !== void 0 ? _ : void 0, O = o.size;
      var k = R - D;
      if (A = It(k) ? 0 : k, C = {
        x: S,
        y: p.top,
        width: O,
        height: p.height
      }, Math.abs(N) > 0 && Math.abs(A) < Math.abs(N)) {
        var U = Ze(A || N) * (Math.abs(N) - Math.abs(A));
        P -= U, A += U;
      }
    } else {
      var [B, F] = [i.scale(E[0]), i.scale(E[1])];
      if (S = B, P = jg({
        axis: s,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: w,
        index: x
      }), O = F - B, A = o.size, C = {
        x: p.left,
        y: P,
        width: p.width,
        height: A
      }, Math.abs(N) > 0 && Math.abs(O) < Math.abs(N)) {
        var M = Ze(O || N) * (Math.abs(N) - Math.abs(O));
        O += M;
      }
    }
    if (S == null || P == null || O == null || A == null)
      return null;
    var z = dt(dt({}, w), {}, {
      x: S,
      y: P,
      width: O,
      height: A,
      value: l ? E : E[1],
      payload: w,
      background: C,
      tooltipPosition: {
        x: S + O / 2,
        y: P + A / 2
      },
      parentViewBox: v
    }, h && h[x] && h[x].props);
    return z;
  }).filter(Boolean);
}
function JH(e) {
  var t = qe(e, YH), r = ot();
  return /* @__PURE__ */ m.createElement(dl, {
    id: t.id,
    type: "bar"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: $H(t)
  }), /* @__PURE__ */ m.createElement(ul, {
    fn: BH,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "bar",
    id: n,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: X1(t.stackId),
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(XH, tn({}, t, {
    id: n
  }))));
}
var qC = /* @__PURE__ */ m.memo(JH);
qC.displayName = "Bar";
function iw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iw(Object(r), !0).forEach(function(n) {
      QH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QH(e, t, r) {
  return (t = e6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e6(e) {
  var t = t6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function t6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var r6 = (e, t) => t, n6 = (e, t, r) => r, o6 = (e, t, r, n) => n, a6 = (e, t, r, n, o) => o, ei = T([Ga, a6], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), i6 = T([ei], (e) => e?.maxBarSize), s6 = (e, t, r, n, o, a) => a, sw = (e, t, r) => {
  var n = r ?? e;
  if (!Ae(n))
    return ct(n, t, 0);
}, c6 = T([le, Ga, r6, n6, o6], (e, t, r, n, o) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === o).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), l6 = (e, t, r, n) => {
  var o = le(e);
  return o === "horizontal" ? ya(e, "yAxis", r, n) : ya(e, "xAxis", t, n);
}, u6 = (e, t, r) => {
  var n = le(e);
  return n === "horizontal" ? ib(e, "xAxis", t) : ib(e, "yAxis", r);
}, d6 = (e, t, r) => {
  var n = {}, o = e.filter(Yc), a = e.filter((u) => u.stackId == null), i = o.reduce((u, l) => (u[l.stackId] || (u[l.stackId] = []), u[l.stackId].push(l), u), n), s = Object.entries(i).map((u) => {
    var [l, d] = u, p = d.map((v) => v.dataKey), h = sw(t, r, d[0].barSize);
    return {
      stackId: l,
      dataKeys: p,
      barSize: h
    };
  }), c = a.map((u) => {
    var l = [u.dataKey].filter((p) => p != null), d = sw(t, r, u.barSize);
    return {
      stackId: void 0,
      dataKeys: l,
      barSize: d
    };
  });
  return [...s, ...c];
}, f6 = T([c6, GW, u6], d6), p6 = (e, t, r, n, o) => {
  var a, i, s = ei(e, t, r, n, o);
  if (s != null) {
    var c = le(e), u = fA(e), {
      maxBarSize: l
    } = s, d = Ae(l) ? u : l, p, h;
    return c === "horizontal" ? (p = mr(e, "xAxis", t, n), h = hr(e, "xAxis", t, n)) : (p = mr(e, "yAxis", r, n), h = hr(e, "yAxis", r, n)), (a = (i = Dn(p, h, !0)) !== null && i !== void 0 ? i : d) !== null && a !== void 0 ? a : 0;
  }
}, HC = (e, t, r, n) => {
  var o = le(e), a, i;
  return o === "horizontal" ? (a = mr(e, "xAxis", t, n), i = hr(e, "xAxis", t, n)) : (a = mr(e, "yAxis", r, n), i = hr(e, "yAxis", r, n)), Dn(a, i);
};
function h6(e, t, r, n, o) {
  var a = n.length;
  if (!(a < 1)) {
    var i = ct(e, r, 0, !0), s, c = [];
    if (ze(n[0].barSize)) {
      var u = !1, l = r / a, d = n.reduce((y, w) => y + (w.barSize || 0), 0);
      d += (a - 1) * i, d >= r && (d -= (a - 1) * i, i = 0), d >= r && l > 0 && (u = !0, l *= 0.9, d = a * l);
      var p = (r - d) / 2 >> 0, h = {
        offset: p - i,
        size: 0
      };
      s = n.reduce((y, w) => {
        var x, E = {
          stackId: w.stackId,
          dataKeys: w.dataKeys,
          position: {
            offset: h.offset + h.size + i,
            size: u ? l : (x = w.barSize) !== null && x !== void 0 ? x : 0
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
      s = n.reduce((y, w, x) => [...y, {
        stackId: w.stackId,
        dataKeys: w.dataKeys,
        position: {
          offset: v + (f + i) * x + (f - g) / 2,
          size: g
        }
      }], c);
    }
    return s;
  }
}
var m6 = (e, t, r, n, o, a, i) => {
  var s = Ae(i) ? t : i, c = h6(r, n, o !== a ? o : a, e, s);
  return o !== a && c != null && (c = c.map((u) => Ri(Ri({}, u), {}, {
    position: Ri(Ri({}, u.position), {}, {
      offset: u.position.offset - o / 2
    })
  }))), c;
}, v6 = T([f6, fA, HW, pA, p6, HC, i6], m6), g6 = (e, t, r, n) => mr(e, "xAxis", t, n), y6 = (e, t, r, n) => mr(e, "yAxis", r, n), b6 = (e, t, r, n) => hr(e, "xAxis", t, n), w6 = (e, t, r, n) => hr(e, "yAxis", r, n), x6 = T([v6, ei], (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
}), E6 = (e, t) => {
  var r = Gc(t);
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
}, S6 = T([l6, ei], E6), P6 = T([Ve, Wp, g6, y6, b6, w6, x6, le, Ka, HC, S6, ei, s6], (e, t, r, n, o, a, i, s, c, u, l, d, p) => {
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
}), GC = (e) => {
  var {
    chartData: t
  } = e, r = _e(), n = ot();
  return Fe(() => n ? () => {
  } : (r(vb(t)), () => {
    r(vb(void 0));
  }), [t, r, n]), null;
}, cw = {
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
}, YC = jt({
  name: "brush",
  initialState: cw,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? cw : t.payload;
    }
  }
}), {
  setBrushSettings: SX
} = YC.actions, O6 = YC.reducer;
function A6(e, t, r) {
  return (t = C6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C6(e) {
  var t = T6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function T6(e, t) {
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
A6(mm, "EPS", 1e-4);
function _6(e) {
  return (e % 180 + 180) % 180;
}
var N6 = function(t) {
  var {
    width: r,
    height: n
  } = t, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = _6(o), i = a * Math.PI / 180, s = Math.atan(n / r), c = i > s && i < Math.PI - s ? n / Math.sin(i) : r / Math.cos(i);
  return Math.abs(c);
}, k6 = {
  dots: [],
  areas: [],
  lines: []
}, XC = jt({
  name: "referenceElements",
  initialState: k6,
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
  addDot: PX,
  removeDot: OX,
  addArea: AX,
  removeArea: CX,
  addLine: TX,
  removeLine: _X
} = XC.actions, I6 = XC.reducer, R6 = /* @__PURE__ */ Mt(void 0), M6 = (e) => {
  var {
    children: t
  } = e, [r] = Ke("".concat(ca("recharts"), "-clip")), n = fl();
  if (n == null)
    return null;
  var {
    x: o,
    y: a,
    width: i,
    height: s
  } = n;
  return /* @__PURE__ */ m.createElement(R6.Provider, {
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
function ZC(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], o = 0; o < e.length; o += t)
    n.push(e[o]);
  return n;
}
function D6(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return N6(n, r);
}
function j6(e, t, r) {
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
function L6(e, t) {
  return ZC(e, t + 1);
}
function $6(e, t, r, n, o) {
  for (var a = (n || []).slice(), {
    start: i,
    end: s
  } = t, c = 0, u = 1, l = i, d = function() {
    var v = n?.[c];
    if (v === void 0)
      return {
        v: ZC(n, u)
      };
    var f = c, g, y = () => (g === void 0 && (g = r(v, f)), g), w = v.coordinate, x = c === 0 || $s(e, w, y, l, s);
    x || (c = 0, l = i, u += 1), x && (l = w + e * (y() / 2 + o), c += u);
  }, p; u <= a.length; )
    if (p = d(), p) return p.v;
  return [];
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
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lw(Object(r), !0).forEach(function(n) {
      B6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B6(e, t, r) {
  return (t = F6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F6(e) {
  var t = z6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U6(e, t, r, n, o) {
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
function W6(e, t, r, n, o, a) {
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
  for (var v = a ? s - 1 : s, f = function(w) {
    var x = i[w], E, S = () => (E === void 0 && (E = r(x, w)), E);
    if (w === 0) {
      var P = e * (x.coordinate - e * S() / 2 - c);
      i[w] = x = at(at({}, x), {}, {
        tickCoord: P < 0 ? x.coordinate - P * e : x.coordinate
      });
    } else
      i[w] = x = at(at({}, x), {}, {
        tickCoord: x.coordinate
      });
    var O = $s(e, x.tickCoord, S, c, u);
    O && (c = x.tickCoord + e * (S() / 2 + o), i[w] = at(at({}, x), {}, {
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
  if (Z(c) || $r.isSsr) {
    var p;
    return (p = L6(o, Z(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], v = s === "top" || s === "bottom" ? "width" : "height", f = l && v === "width" ? ea(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, g = (x, E) => {
    var S = typeof u == "function" ? u(x.value, E) : x.value;
    return v === "width" ? D6(ea(S, {
      fontSize: t,
      letterSpacing: r
    }), f, d) : ea(S, {
      fontSize: t,
      letterSpacing: r
    })[v];
  }, y = o.length >= 2 ? Ze(o[1].coordinate - o[0].coordinate) : 1, w = j6(a, y, v);
  return c === "equidistantPreserveStart" ? $6(y, w, g, o, i) : (c === "preserveStart" || c === "preserveStartEnd" ? h = W6(y, w, g, o, i, c === "preserveStartEnd") : h = U6(y, w, g, o, i), h.filter((x) => x.isShow));
}
var K6 = (e) => {
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
}, V6 = ["axisLine", "width", "height", "className", "hide", "ticks"], q6 = ["viewBox"], H6 = ["viewBox"];
function Tf(e, t) {
  if (e == null) return {};
  var r, n, o = G6(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function G6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $n.apply(null, arguments);
}
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
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uw(Object(r), !0).forEach(function(n) {
      Y6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y6(e, t, r) {
  return (t = X6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X6(e) {
  var t = Z6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z6(e, t) {
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
function J6(e) {
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
  return /* @__PURE__ */ m.createElement("line", $n({}, u, {
    className: ue("recharts-cartesian-axis-line", In(s, "className"))
  }));
}
function Q6(e, t, r, n, o, a, i, s, c) {
  var u, l, d, p, h, v, f = s ? -1 : 1, g = e.tickSize || i, y = Z(e.tickCoord) ? e.tickCoord : e.coordinate;
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
function e8(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function t8(e, t) {
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
function r8(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, o, a = ue(r.className, "recharts-cartesian-axis-tick-value");
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
    typeof t != "boolean" && (i = ue(i, t?.className)), o = /* @__PURE__ */ m.createElement(al, $n({}, r, {
      className: i
    }), n);
  }
  return o;
}
function n8(e) {
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
    letterSpacing: w,
    getTicksConfig: x,
    events: E
  } = e, S = vm(We(We({}, x), {}, {
    ticks: t
  }), y, w), P = e8(u, l), O = t8(u, l), A = ht(x), C = kn(r), N = {};
  typeof n == "object" && (N = n);
  var _ = We(We({}, A), {}, {
    fill: "none"
  }, N), R = S.map((D, k) => {
    var {
      line: U,
      tick: B
    } = Q6(D, d, p, h, v, u, f, l, g), F = We(We(We(We({
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor: P,
      verticalAnchor: O
    }, A), {}, {
      // @ts-expect-error customTickProps is contributing unknown props
      stroke: "none",
      // @ts-expect-error customTickProps is contributing unknown props
      fill: o
    }, C), B), {}, {
      index: k,
      payload: D,
      visibleTicksCount: S.length,
      tickFormatter: a,
      padding: s
    }, c);
    return /* @__PURE__ */ m.createElement(Re, $n({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(D.value, "-").concat(D.coordinate, "-").concat(D.tickCoord)
    }, Ra(E, D, k)), n && /* @__PURE__ */ m.createElement("line", $n({}, _, U, {
      className: ue("recharts-cartesian-axis-tick-line", In(n, "className"))
    })), r && /* @__PURE__ */ m.createElement(r8, {
      option: r,
      tickProps: F,
      value: "".concat(typeof a == "function" ? a(D.value, k) : D.value).concat(i || "")
    }));
  });
  return R.length > 0 ? /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, R) : null;
}
var o8 = /* @__PURE__ */ je((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: o,
    className: a,
    hide: i,
    ticks: s
  } = e, c = Tf(e, V6), [u, l] = Ke(""), [d, p] = Ke(""), h = me(null);
  Bw(t, () => ({
    getCalculatedWidth: () => {
      var f;
      return K6({
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
        var w = window.getComputedStyle(y), x = w.fontSize, E = w.letterSpacing;
        (x !== u || E !== d) && (l(x), p(E));
      }
    }
  }, [u, d]);
  return i || n != null && n <= 0 || o != null && o <= 0 ? null : /* @__PURE__ */ m.createElement(Re, {
    className: ue("recharts-cartesian-axis", a),
    ref: v
  }, /* @__PURE__ */ m.createElement(J6, {
    x: e.x,
    y: e.y,
    width: n,
    height: o,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: ht(e)
  }), /* @__PURE__ */ m.createElement(n8, {
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
  }), /* @__PURE__ */ m.createElement(sV, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ m.createElement(gV, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children));
}), a8 = /* @__PURE__ */ m.memo(o8, (e, t) => {
  var {
    viewBox: r
  } = e, n = Tf(e, q6), {
    viewBox: o
  } = t, a = Tf(t, H6);
  return ho(r, o) && ho(n, a);
}), ym = /* @__PURE__ */ m.forwardRef((e, t) => {
  var r = qe(e, gm);
  return /* @__PURE__ */ m.createElement(a8, $n({}, r, {
    ref: t
  }));
});
ym.displayName = "CartesianAxis";
var i8 = ["x1", "y1", "x2", "y2", "key"], s8 = ["offset"], c8 = ["xAxisId", "yAxisId"], l8 = ["xAxisId", "yAxisId"];
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
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      u8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u8(e, t, r) {
  return (t = d8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d8(e) {
  var t = f8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f8(e, t) {
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
function Bs(e, t) {
  if (e == null) return {};
  var r, n, o = p8(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function p8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var h8 = (e) => {
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
function JC(e, t) {
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
    } = t, c = Bs(t, i8), u = ht(c), {
      offset: l
    } = u, d = Bs(u, s8);
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
function m8(e) {
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
  } = e, s = Bs(e, c8), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(l),
      index: l
    });
    return JC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function v8(e) {
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
  } = e, s = Bs(e, l8), c = o.map((u, l) => {
    var d = it(it({}, s), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return JC(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function g8(e) {
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
function y8(e) {
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
var b8 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: o,
    offset: a
  } = e;
  return G1(vm(it(it(it({}, gm), r), {}, {
    ticks: Y1(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), a.left, a.left + a.width, t);
}, w8 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: o,
    offset: a
  } = e;
  return G1(vm(it(it(it({}, gm), r), {}, {
    ticks: Y1(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), a.top, a.top + a.height, t);
}, x8 = {
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
function hl(e) {
  var t = Vp(), r = qp(), n = nO(), o = it(it({}, qe(e, x8)), {}, {
    x: Z(e.x) ? e.x : n.left,
    y: Z(e.y) ? e.y : n.top,
    width: Z(e.width) ? e.width : n.width,
    height: Z(e.height) ? e.height : n.height
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
  } = o, v = ot(), f = J((C) => sb(C, "xAxis", a, v)), g = J((C) => sb(C, "yAxis", i, v));
  if (!Z(u) || u <= 0 || !Z(l) || l <= 0 || !Z(s) || s !== +s || !Z(c) || c !== +c)
    return null;
  var y = o.verticalCoordinatesGenerator || b8, w = o.horizontalCoordinatesGenerator || w8, {
    horizontalPoints: x,
    verticalPoints: E
  } = o;
  if ((!x || !x.length) && typeof w == "function") {
    var S = p && p.length, P = w({
      yAxis: g ? it(it({}, g), {}, {
        ticks: S ? p : g.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, S ? !0 : d);
    gs(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (x = P);
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
    gs(Array.isArray(A), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A, "]")), Array.isArray(A) && (E = A);
  }
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ m.createElement(h8, {
    fill: o.fill,
    fillOpacity: o.fillOpacity,
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height,
    ry: o.ry
  }), /* @__PURE__ */ m.createElement(g8, yn({}, o, {
    horizontalPoints: x
  })), /* @__PURE__ */ m.createElement(y8, yn({}, o, {
    verticalPoints: E
  })), /* @__PURE__ */ m.createElement(m8, yn({}, o, {
    offset: n,
    horizontalPoints: x,
    xAxis: f,
    yAxis: g
  })), /* @__PURE__ */ m.createElement(v8, yn({}, o, {
    offset: n,
    verticalPoints: E,
    xAxis: f,
    yAxis: g
  })));
}
hl.displayName = "CartesianGrid";
var QC = (e, t, r, n) => mr(e, "xAxis", t, n), eT = (e, t, r, n) => hr(e, "xAxis", t, n), tT = (e, t, r, n) => mr(e, "yAxis", r, n), rT = (e, t, r, n) => hr(e, "yAxis", r, n), E8 = T([le, QC, tT, eT, rT], (e, t, r, n, o) => gr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), S8 = (e, t, r, n, o) => o;
function P8(e) {
  return e.type === "line";
}
var O8 = T([Ga, S8], (e, t) => e.filter(P8).find((r) => r.id === t)), A8 = T([le, QC, tT, eT, rT, O8, E8, Ka], (e, t, r, n, o, a, i, s) => {
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
      return G8({
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
function nT(e) {
  var t = kn(e), r = 3, n = 2;
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
var C8 = ["id"], T8 = ["type", "layout", "connectNulls", "needClip"], _8 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function fw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fw(Object(r), !0).forEach(function(n) {
      N8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N8(e, t, r) {
  return (t = k8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k8(e) {
  var t = I8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I8(e, t) {
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
  var r, n, o = R8(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function R8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
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
var M8 = (e) => {
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
function D8(e) {
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
var oT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function j8(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], o = 0; o < t; ++o)
    n = [...n, ...r];
  return n;
}
var L8 = (e, t, r) => {
  var n = r.reduce((d, p) => d + p);
  if (!n)
    return oT(t, e);
  for (var o = Math.floor(e / n), a = e % n, i = t - e, s = [], c = 0, u = 0; c < r.length; u += r[c], ++c)
    if (u + r[c] > a) {
      s = [...r.slice(0, c), a - u];
      break;
    }
  var l = s.length % 2 === 0 ? [0, i] : [i];
  return [...j8(r, o), ...s, ...l].map((d) => "".concat(d, "px")).join(", ");
};
function $8(e, t) {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = ue("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(nm, Bn({}, t, {
      className: n
    }));
  }
  return r;
}
function B8(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function F8(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: o,
    dataKey: a,
    needClip: i
  } = n;
  if (!B8(r, o))
    return null;
  var {
    id: s
  } = n, c = bm(n, C8), u = ll(o), l = ht(c), d = IP(o), p = r.map((v, f) => {
    var g = Tt(Tt(Tt({
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
    return $8(o, g);
  }), h = {
    clipPath: i ? "url(#clipPath-".concat(u ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Re, Bn({
    className: "recharts-line-dots",
    key: "dots"
  }, h), p);
}
function z8(e) {
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
    return Tt(Tt({}, i), {}, {
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
function pw(e) {
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
  } = a, l = bm(a, T8), d = Tt(Tt({}, mt(l)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: i,
    layout: s,
    connectNulls: c,
    strokeDasharray: o ?? a.strokeDasharray
  });
  return /* @__PURE__ */ m.createElement(m.Fragment, null, n?.length > 1 && /* @__PURE__ */ m.createElement(no, Bn({}, d, {
    pathRef: r
  })), /* @__PURE__ */ m.createElement(F8, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function U8(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function W8(e) {
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
  } = r, y = o.current, w = Oo(r, "recharts-line-"), [x, E] = Ke(!1), S = !x, P = ve(() => {
    typeof f == "function" && f(), E(!1);
  }, [f]), O = ve(() => {
    typeof g == "function" && g(), E(!0);
  }, [g]), A = U8(n.current), C = a.current;
  return /* @__PURE__ */ m.createElement(z8, {
    points: i,
    showLabels: S
  }, r.children, /* @__PURE__ */ m.createElement(Po, {
    animationId: w,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: P,
    onAnimationStart: O,
    key: w
  }, (N) => {
    var _ = we(C, A + C, N), R = Math.min(_, A), D;
    if (c)
      if (s) {
        var k = "".concat(s).split(/[,\s]+/gim).map((F) => parseFloat(F));
        D = L8(R, A, k);
      } else
        D = oT(A, R);
    else
      D = s == null ? void 0 : String(s);
    if (y) {
      var U = y.length / i.length, B = N === 1 ? i : i.map((F, M) => {
        var z = Math.floor(M * U);
        if (y[z]) {
          var ne = y[z];
          return Tt(Tt({}, F), {}, {
            x: we(ne.x, F.x, N),
            y: we(ne.y, F.y, N)
          });
        }
        return p ? Tt(Tt({}, F), {}, {
          x: we(h * 2, F.x, N),
          y: we(v / 2, F.y, N)
        }) : Tt(Tt({}, F), {}, {
          x: F.x,
          y: F.y
        });
      });
      return o.current = B, /* @__PURE__ */ m.createElement(pw, {
        props: r,
        points: B,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: D
      });
    }
    return N > 0 && A > 0 && (o.current = i, a.current = R), /* @__PURE__ */ m.createElement(pw, {
      props: r,
      points: i,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: D
    });
  }), /* @__PURE__ */ m.createElement(il, {
    label: r.label
  }));
}
function K8(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = me(null), o = me(0), a = me(null);
  return /* @__PURE__ */ m.createElement(W8, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: o,
    pathRef: a
  });
}
var V8 = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: xe(e.payload, t)
});
class q8 extends r_ {
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
    var h = ue("recharts-line", o), v = d, {
      r: f,
      strokeWidth: g
    } = nT(r), y = ll(r), w = f * 2 + g;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Re, {
      className: h
    }, p && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: v,
      xAxisId: a,
      yAxisId: i
    }), !y && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(v)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: c - w / 2,
      y: s - w / 2,
      width: u + w,
      height: l + w
    }))), /* @__PURE__ */ m.createElement(KC, {
      xAxisId: a,
      yAxisId: i,
      data: n,
      dataPointFormatter: V8,
      errorBarOffset: 0
    }, /* @__PURE__ */ m.createElement(K8, {
      props: this.props,
      clipPathId: v
    }))), /* @__PURE__ */ m.createElement(Af, {
      activeDot: this.props.activeDot,
      points: n,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey
    }));
  }
}
var aT = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !$r.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0
};
function H8(e) {
  var t = qe(e, aT), {
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
  } = t, g = bm(t, _8), {
    needClip: y
  } = pl(h, v), w = fl(), x = Ba(), E = ot(), S = J((N) => A8(N, h, v, E, f));
  if (x !== "horizontal" && x !== "vertical" || S == null || w == null)
    return null;
  var {
    height: P,
    width: O,
    x: A,
    y: C
  } = w;
  return /* @__PURE__ */ m.createElement(q8, Bn({}, g, {
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
    layout: x,
    height: P,
    width: O,
    left: A,
    top: C,
    needClip: y
  }));
}
function G8(e) {
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
      var p = vs({
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
    var v = Ae(d) ? null : r.scale(d), f = vs({
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
function Y8(e) {
  var t = qe(e, aT), r = ot();
  return /* @__PURE__ */ m.createElement(dl, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: M8(t)
  }), /* @__PURE__ */ m.createElement(ul, {
    fn: D8,
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
  }), /* @__PURE__ */ m.createElement(H8, Bn({}, t, {
    id: n
  }))));
}
var iT = /* @__PURE__ */ m.memo(Y8);
iT.displayName = "Line";
var sT = (e, t, r, n) => mr(e, "xAxis", t, n), cT = (e, t, r, n) => hr(e, "xAxis", t, n), lT = (e, t, r, n) => mr(e, "yAxis", r, n), uT = (e, t, r, n) => hr(e, "yAxis", r, n), X8 = T([le, sT, lT, cT, uT], (e, t, r, n, o) => gr(e, "xAxis") ? Dn(t, n, !1) : Dn(r, o, !1)), Z8 = (e, t, r, n, o) => o, dT = T([Ga, Z8], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), J8 = (e, t, r, n, o) => {
  var a, i = dT(e, t, r, n, o);
  if (i != null) {
    var s = le(e), c = gr(s, "xAxis"), u;
    if (c ? u = ya(e, "yAxis", r, n) : u = ya(e, "xAxis", t, n), u != null) {
      var {
        stackId: l
      } = i, d = Gc(i);
      if (!(l == null || d == null)) {
        var p = (a = u[l]) === null || a === void 0 ? void 0 : a.stackedData;
        return p?.find((h) => h.key === d);
      }
    }
  }
}, Q8 = T([le, sT, lT, cT, uT, J8, Ka, X8, dT], (e, t, r, n, o, a, i, s, c) => {
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
      return wG({
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
}), eG = ["id"], tG = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function fT(e, t) {
  if (e == null) return {};
  var r, n, o = rG(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function rG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function hw(e, t) {
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
    t % 2 ? hw(Object(r), !0).forEach(function(n) {
      nG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nG(e, t, r) {
  return (t = oG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oG(e) {
  var t = aG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aG(e, t) {
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
var iG = (e) => {
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
function sG(e) {
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
var cG = (e, t) => {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = ue("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(nm, Cr({}, t, {
      className: n
    }));
  }
  return r;
};
function lG(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function uG(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: o,
    dot: a,
    dataKey: i
  } = n;
  if (!lG(r, a))
    return null;
  var s = ll(a), c = ht(n), u = IP(a), l = r.map((p, h) => {
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
    return cG(a, v);
  }), d = {
    clipPath: o ? "url(#clipPath-".concat(s ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement(Re, Cr({
    className: "recharts-area-dots"
  }, d), l);
}
function dG(e) {
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
function mw(e) {
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
  } = a, p = fT(a, eG), h = ht(p);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, t?.length > 1 && /* @__PURE__ */ m.createElement(Re, {
    clipPath: n ? "url(#clipPath-".concat(o, ")") : void 0
  }, /* @__PURE__ */ m.createElement(no, Cr({}, h, {
    id: d,
    points: t,
    connectNulls: u,
    type: s,
    baseLine: r,
    layout: i,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ m.createElement(no, Cr({}, h, {
    className: "recharts-area-curve",
    layout: i,
    type: s,
    connectNulls: u,
    fill: "none",
    points: t
  })), c !== "none" && l && /* @__PURE__ */ m.createElement(no, Cr({}, h, {
    className: "recharts-area-curve",
    layout: i,
    type: s,
    connectNulls: u,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ m.createElement(uG, {
    points: t,
    props: p,
    clipPathId: o
  }));
}
function fG(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, a = n[0].y, i = n[n.length - 1].y;
  if (!ze(a) || !ze(i))
    return null;
  var s = t * Math.abs(a - i), c = Math.max(...n.map((u) => u.x || 0));
  return Z(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.x || 0), c)), Z(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: 0,
    y: a < i ? a : a - s,
    width: c + (o ? parseInt("".concat(o), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function pG(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, a = n[0].x, i = n[n.length - 1].x;
  if (!ze(a) || !ze(i))
    return null;
  var s = t * Math.abs(a - i), c = Math.max(...n.map((u) => u.y || 0));
  return Z(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.y || 0), c)), Z(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: a < i ? a : a - s,
    y: 0,
    width: s,
    height: Math.floor(c + (o ? parseInt("".concat(o), 10) : 1))
  }) : null;
}
function hG(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: o,
    strokeWidth: a
  } = e;
  return r === "vertical" ? /* @__PURE__ */ m.createElement(fG, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: a
  }) : /* @__PURE__ */ m.createElement(pG, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: a
  });
}
function mG(e) {
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
  } = n, v = Oo(n, "recharts-area-"), [f, g] = Ke(!1), y = !f, w = ve(() => {
    typeof h == "function" && h(), g(!1);
  }, [h]), x = ve(() => {
    typeof p == "function" && p(), g(!0);
  }, [p]), E = o.current, S = a.current;
  return /* @__PURE__ */ m.createElement(dG, {
    showLabels: y,
    points: i
  }, n.children, /* @__PURE__ */ m.createElement(Po, {
    animationId: v,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: w,
    onAnimationStart: x,
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
        P === 1 ? i : i.map((N, _) => {
          var R = Math.floor(_ * O);
          if (E[R]) {
            var D = E[R];
            return Pr(Pr({}, N), {}, {
              x: we(D.x, N.x, P),
              y: we(D.y, N.y, P)
            });
          }
          return N;
        })
      ), C;
      return Z(s) ? C = we(S, s, P) : Ae(s) || It(s) ? C = we(S, 0, P) : C = s.map((N, _) => {
        var R = Math.floor(_ * O);
        if (Array.isArray(S) && S[R]) {
          var D = S[R];
          return Pr(Pr({}, N), {}, {
            x: we(D.x, N.x, P),
            y: we(D.y, N.y, P)
          });
        }
        return N;
      }), P > 0 && (o.current = A, a.current = C), /* @__PURE__ */ m.createElement(mw, {
        points: A,
        baseLine: C,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return P > 0 && (o.current = i, a.current = s), /* @__PURE__ */ m.createElement(Re, null, c && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ m.createElement(hG, {
      alpha: P,
      points: i,
      baseLine: s,
      layout: n.layout,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ m.createElement(Re, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ m.createElement(mw, {
      points: i,
      baseLine: s,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ m.createElement(il, {
    label: n.label
  }));
}
function vG(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, o = me(null), a = me();
  return /* @__PURE__ */ m.createElement(mG, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: a
  });
}
class gG extends wa {
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
    var v = ue("recharts-area", o), f = p, {
      r: g,
      strokeWidth: y
    } = nT(r), w = ll(r), x = g * 2 + y;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Re, {
      className: v
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(hm, {
      clipPathId: f,
      xAxisId: c,
      yAxisId: u
    }), !w && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(f)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: i - x / 2,
      y: a - x / 2,
      width: l + x,
      height: d + x
    }))), /* @__PURE__ */ m.createElement(vG, {
      needClip: s,
      clipPathId: f,
      props: this.props
    })), /* @__PURE__ */ m.createElement(Af, {
      points: n,
      mainColor: Fs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ m.createElement(Af, {
      points: h,
      mainColor: Fs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }));
  }
}
var pT = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: !$r.isSsr,
  legendType: "line",
  stroke: "#3182bd",
  xAxisId: 0,
  yAxisId: 0
};
function yG(e) {
  var t, r = qe(e, pT), {
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
  } = r, y = fT(r, tG), w = Ba(), x = hC(), {
    needClip: E
  } = pl(f, g), S = ot(), {
    points: P,
    isRange: O,
    baseLine: A
  } = (t = J((k) => Q8(k, f, g, S, e.id))) !== null && t !== void 0 ? t : {}, C = fl();
  if (w !== "horizontal" && w !== "vertical" || C == null || x !== "AreaChart" && x !== "ComposedChart")
    return null;
  var {
    height: N,
    width: _,
    x: R,
    y: D
  } = C;
  return !P || !P.length ? null : /* @__PURE__ */ m.createElement(gG, Cr({}, y, {
    activeDot: n,
    animationBegin: o,
    animationDuration: a,
    animationEasing: i,
    baseLine: A,
    connectNulls: s,
    dot: c,
    fill: u,
    fillOpacity: l,
    height: N,
    hide: d,
    layout: w,
    isAnimationActive: p,
    isRange: O,
    legendType: h,
    needClip: E,
    points: P,
    stroke: v,
    width: _,
    left: R,
    top: D,
    xAxisId: f,
    yAxisId: g
  }));
}
var bG = (e, t, r, n, o) => {
  var a = r ?? t;
  if (Z(a))
    return a;
  var i = e === "horizontal" ? o : n, s = i.scale.domain();
  if (i.type === "number") {
    var c = Math.max(s[0], s[1]), u = Math.min(s[0], s[1]);
    return a === "dataMin" ? u : a === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
  }
  return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0];
};
function wG(e) {
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
  } = e, v = o && o.length, f = bG(a, i, r, s, c), g = a === "horizontal", y = !1, w = u.map((E, S) => {
    var P;
    v ? P = o[l + S] : (P = xe(E, n), Array.isArray(P) ? y = !0 : P = [f, P]);
    var O = P[1] == null || v && !t && xe(E, n) == null;
    return g ? {
      x: vs({
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
      y: vs({
        axis: c,
        ticks: p,
        bandSize: h,
        entry: E,
        index: S
      }),
      value: P,
      payload: E
    };
  }), x;
  return v || y ? x = w.map((E) => {
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
  }) : x = g ? c.scale(f) : s.scale(f), {
    points: w,
    baseLine: x,
    isRange: y
  };
}
function xG(e) {
  var t = qe(e, pT), r = ot();
  return /* @__PURE__ */ m.createElement(dl, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(um, {
    legendPayload: iG(t)
  }), /* @__PURE__ */ m.createElement(ul, {
    fn: sG,
    args: t
  }), /* @__PURE__ */ m.createElement(dm, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: X1(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ m.createElement(yG, Cr({}, t, {
    id: n
  }))));
}
var hT = /* @__PURE__ */ m.memo(xG);
hT.displayName = "Area";
var EG = ["dangerouslySetInnerHTML", "ticks"], SG = ["id"], PG = ["domain"], OG = ["domain"];
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
  var r, n, o = AG(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function AG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function CG(e) {
  var t = _e();
  return ur(() => (t(tH(e)), () => {
    t(rH(e));
  }), [e, t]), null;
}
var TG = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = J(Wp), o = ot(), a = "xAxis", i = J((g) => Ro(g, a, t, o)), s = J((g) => VA(g, a, t, o)), c = J((g) => zA(g, t)), u = J((g) => U3(g, t)), l = J((g) => EA(g, t));
  if (c == null || u == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: d,
    ticks: p
  } = e, h = zs(e, EG), {
    id: v
  } = l, f = zs(l, SG);
  return /* @__PURE__ */ m.createElement(ym, _f({}, h, f, {
    scale: i,
    x: u.x,
    y: u.y,
    width: c.width,
    height: c.height,
    className: ue("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: s
  }));
}, _G = {
  allowDataOverflow: St.allowDataOverflow,
  allowDecimals: St.allowDecimals,
  allowDuplicatedCategory: St.allowDuplicatedCategory,
  height: St.height,
  hide: !1,
  mirror: St.mirror,
  orientation: St.orientation,
  padding: St.padding,
  reversed: St.reversed,
  scale: St.scale,
  tickCount: St.tickCount,
  type: St.type,
  xAxisId: 0
}, NG = (e) => {
  var t, r, n, o, a, i = qe(e, _G);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(CG, {
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
  }), /* @__PURE__ */ m.createElement(TG, i));
}, kG = (e, t) => {
  var {
    domain: r
  } = e, n = zs(e, PG), {
    domain: o
  } = t, a = zs(t, OG);
  return ho(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : ho({
    domain: r
  }, {
    domain: o
  }) : !1;
}, ml = /* @__PURE__ */ m.memo(NG, kG);
ml.displayName = "XAxis";
var IG = ["dangerouslySetInnerHTML", "ticks"], RG = ["id"], MG = ["domain"], DG = ["domain"];
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nf.apply(null, arguments);
}
function Us(e, t) {
  if (e == null) return {};
  var r, n, o = jG(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
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
function LG(e) {
  var t = _e();
  return ur(() => (t(nH(e)), () => {
    t(oH(e));
  }), [e, t]), null;
}
var $G = (e) => {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: o
  } = e, a = me(null), i = me(null), s = J(Wp), c = ot(), u = _e(), l = "yAxis", d = J((S) => Ro(S, l, t, c)), p = J((S) => UA(S, t)), h = J((S) => K3(S, t)), v = J((S) => VA(S, l, t, c)), f = J((S) => SA(S, t));
  if (ur(() => {
    if (!(n !== "auto" || !p || tm(o) || /* @__PURE__ */ Wt(o) || f == null)) {
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
  } = e, w = Us(e, IG), {
    id: x
  } = f, E = Us(f, RG);
  return /* @__PURE__ */ m.createElement(ym, Nf({}, w, E, {
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
    className: ue("recharts-".concat(l, " ").concat(l), r),
    viewBox: s,
    ticks: v
  }));
}, BG = {
  allowDataOverflow: Pt.allowDataOverflow,
  allowDecimals: Pt.allowDecimals,
  allowDuplicatedCategory: Pt.allowDuplicatedCategory,
  hide: !1,
  mirror: Pt.mirror,
  orientation: Pt.orientation,
  padding: Pt.padding,
  reversed: Pt.reversed,
  scale: Pt.scale,
  tickCount: Pt.tickCount,
  type: Pt.type,
  width: Pt.width,
  yAxisId: 0
}, FG = (e) => {
  var t, r, n, o, a, i = qe(e, BG);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(LG, {
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
  }), /* @__PURE__ */ m.createElement($G, i));
}, zG = (e, t) => {
  var {
    domain: r
  } = e, n = Us(e, MG), {
    domain: o
  } = t, a = Us(t, DG);
  return ho(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : ho({
    domain: r
  }, {
    domain: o
  }) : !1;
}, vl = /* @__PURE__ */ m.memo(FG, zG);
vl.displayName = "YAxis";
var Mi = { exports: {} }, ud = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vw;
function UG() {
  if (vw) return ud;
  vw = 1;
  var e = Ot;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, s = e.useDebugValue;
  return ud.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
    var h = o(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else v = h.current;
    h = i(
      function() {
        function g(S) {
          if (!y) {
            if (y = !0, w = S, S = d(S), p !== void 0 && v.hasValue) {
              var P = v.value;
              if (p(P, S))
                return x = P;
            }
            return x = S;
          }
          if (P = x, r(w, S)) return P;
          var O = d(S);
          return p !== void 0 && p(P, O) ? (w = S, P) : (w = S, x = O);
        }
        var y = !1, w, x, E = l === void 0 ? null : l;
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
  }, ud;
}
var dd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gw;
function WG() {
  return gw || (gw = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ot, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, a = t.useEffect, i = t.useMemo, s = t.useDebugValue;
    dd.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
      var h = o(null);
      if (h.current === null) {
        var v = { hasValue: !1, value: null };
        h.current = v;
      } else v = h.current;
      h = i(
        function() {
          function g(S) {
            if (!y) {
              if (y = !0, w = S, S = d(S), p !== void 0 && v.hasValue) {
                var P = v.value;
                if (p(P, S))
                  return x = P;
              }
              return x = S;
            }
            if (P = x, r(w, S))
              return P;
            var O = d(S);
            return p !== void 0 && p(P, O) ? (w = S, P) : (w = S, x = O);
          }
          var y = !1, w, x, E = l === void 0 ? null : l;
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
  })()), dd;
}
var yw;
function KG() {
  return yw || (yw = 1, process.env.NODE_ENV === "production" ? Mi.exports = UG() : Mi.exports = WG()), Mi.exports;
}
KG();
function VG(e) {
  e();
}
function qG() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      VG(() => {
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
var bw = {
  notify() {
  },
  get: () => []
};
function HG(e, t) {
  let r, n = bw, o = 0, a = !1;
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
    o++, r || (r = e.subscribe(c), n = qG());
  }
  function d() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = bw);
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
var GG = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", YG = /* @__PURE__ */ GG(), XG = () => typeof navigator < "u" && navigator.product === "ReactNative", ZG = /* @__PURE__ */ XG(), JG = () => YG || ZG ? m.useLayoutEffect : m.useEffect, QG = /* @__PURE__ */ JG(), e9 = /* @__PURE__ */ Symbol.for("react-redux-context"), t9 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function r9() {
  if (!m.createContext) return {};
  const e = t9[e9] ??= /* @__PURE__ */ new Map();
  let t = e.get(m.createContext);
  return t || (t = m.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(m.createContext, t)), t;
}
var n9 = /* @__PURE__ */ r9();
function o9(e) {
  const { children: t, context: r, serverState: n, store: o } = e, a = m.useMemo(() => {
    const c = HG(o), u = {
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
  QG(() => {
    const { subscription: c } = a;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), i !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [a, i]);
  const s = r || n9;
  return /* @__PURE__ */ m.createElement(s.Provider, { value: a }, t);
}
var a9 = o9, i9 = (e, t) => t, wm = T([i9, le, bA, Ge, cC, Ur, G5, Ve], Q5), xm = (e) => {
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
}, mT = qt("mouseClick"), vT = La();
vT.startListening({
  actionCreator: mT,
  effect: (e, t) => {
    var r = e.payload, n = wm(t.getState(), xm(r));
    n?.activeIndex != null && t.dispatch(n5({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var kf = qt("mouseMove"), gT = La();
gT.startListening({
  actionCreator: kf,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared), a = wm(n, xm(r));
    o === "axis" && (a?.activeIndex != null ? t.dispatch(QA({
      activeIndex: a.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: a.activeCoordinate
    })) : t.dispatch(JA()));
  }
});
var ww = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, yT = jt({
  name: "rootProps",
  initialState: ww,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : ww.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), s9 = yT.reducer, {
  updateOptions: c9
} = yT.actions, bT = jt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: l9
} = bT.actions, u9 = bT.reducer, wT = qt("keyDown"), xT = qt("focus"), Em = La();
Em.startListening({
  actionCreator: wT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var i = Number(Hh(o, Do(r))), s = Ur(r);
        if (a === "Enter") {
          var c = Rs(r, "axis", "hover", String(o.index));
          t.dispatch(xf({
            active: !o.active,
            activeIndex: o.index,
            activeDataKey: o.dataKey,
            activeCoordinate: c
          }));
          return;
        }
        var u = G3(r), l = u === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, p = i + d * l;
        if (!(s == null || p >= s.length || p < 0)) {
          var h = Rs(r, "axis", "hover", String(p));
          t.dispatch(xf({
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
  actionCreator: xT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip;
      if (!o.active && o.index == null) {
        var a = "0", i = Rs(r, "axis", "hover", String(a));
        t.dispatch(xf({
          activeDataKey: void 0,
          active: !0,
          activeIndex: a,
          activeCoordinate: i
        }));
      }
    }
  }
});
var Ft = qt("externalEvent"), ET = La();
ET.startListening({
  actionCreator: Ft,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: B5(r),
        activeDataKey: fC(r),
        activeIndex: Qr(r),
        activeLabel: dC(r),
        activeTooltipIndex: Qr(r),
        isTooltipActive: F5(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var d9 = T([Mo], (e) => e.tooltipItemPayloads), f9 = T([d9, Za, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
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
}), ST = qt("touchMove"), PT = La();
PT.startListening({
  actionCreator: ST,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = qh(n, n.tooltip.settings.shared);
    if (o === "axis") {
      var a = wm(n, xm({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      a?.activeIndex != null && t.dispatch(QA({
        activeIndex: a.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: a.activeCoordinate
      }));
    } else if (o === "item") {
      var i, s = r.touches[0], c = document.elementFromPoint(s.clientX, s.clientY);
      if (!c || !c.getAttribute)
        return;
      var u = c.getAttribute(J1), l = (i = c.getAttribute(Q1)) !== null && i !== void 0 ? i : void 0, d = f9(t.getState(), u, l);
      t.dispatch(ZA({
        activeDataKey: l,
        activeIndex: u,
        activeCoordinate: d
      }));
    }
  }
});
var p9 = g1({
  brush: O6,
  cartesianAxis: iH,
  chartData: mK,
  errorBars: PH,
  graphicalItems: Oq,
  layout: CB,
  legend: RF,
  options: uK,
  polarAxis: $V,
  polarOptions: u9,
  referenceElements: I6,
  rootProps: s9,
  tooltip: o5
}), h9 = function(t) {
  return J$({
    reducer: p9,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([vT.middleware, gT.middleware, Em.middleware, ET.middleware, PT.middleware]),
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
      return typeof r == "function" && (n = r()), n.concat(R1({
        type: "raf"
      }));
    },
    devTools: $r.devToolsEnabled
  });
};
function OT(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, o = ot(), a = me(null);
  if (o)
    return r;
  a.current == null && (a.current = h9(t));
  var i = Lp;
  return /* @__PURE__ */ m.createElement(a9, {
    context: i,
    store: a.current
  }, r);
}
function AT(e) {
  var {
    layout: t,
    margin: r
  } = e, n = _e(), o = ot();
  return Fe(() => {
    o || (n(PB(t)), n(SB(r)));
  }, [n, o, t, r]), null;
}
function CT(e) {
  var t = _e();
  return Fe(() => {
    t(c9(e));
  }, [t, e]), null;
}
var m9 = ["children"];
function v9(e, t) {
  if (e == null) return {};
  var r, n, o = g9(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function g9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ws() {
  return Ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ws.apply(null, arguments);
}
var y9 = {
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
}, b9 = /* @__PURE__ */ je((e, t) => {
  var r = Vp(), n = qp(), o = sO();
  if (!co(r) || !co(n))
    return null;
  var {
    children: a,
    otherAttributes: i,
    title: s,
    desc: c
  } = e, u, l;
  return typeof i.tabIndex == "number" ? u = i.tabIndex : u = o ? 0 : void 0, typeof i.role == "string" ? l = i.role : l = o ? "application" : void 0, /* @__PURE__ */ m.createElement(Op, Ws({}, i, {
    title: s,
    desc: c,
    role: l,
    tabIndex: u,
    width: r,
    height: n,
    style: y9,
    ref: t
  }), a);
}), w9 = (e) => {
  var {
    children: t
  } = e, r = J(Dc);
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
}, xw = /* @__PURE__ */ je((e, t) => {
  var {
    children: r
  } = e, n = v9(e, m9), o = ot();
  return o ? /* @__PURE__ */ m.createElement(w9, null, r) : /* @__PURE__ */ m.createElement(b9, Ws({
    ref: t
  }, n), r);
});
function x9() {
  var e = _e(), [t, r] = Ke(null), n = J(tF);
  return Fe(() => {
    if (t != null) {
      var o = t.getBoundingClientRect(), a = o.width / t.offsetWidth;
      ze(a) && a !== n && e(AB(a));
    }
  }, [t, e, n]), r;
}
function Ew(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ew(Object(r), !0).forEach(function(n) {
      S9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S9(e, t, r) {
  return (t = P9(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P9(e) {
  var t = O9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function O9(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
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
var A9 = () => (PK(), null);
function Ks(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var C9 = /* @__PURE__ */ je((e, t) => {
  var r, n, o = me(null), [a, i] = Ke({
    containerWidth: Ks((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ks((n = e.style) === null || n === void 0 ? void 0 : n.height)
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
  return Fe(() => () => {
    var u = o.current;
    u?.disconnect();
  }, [s]), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Fn({
    ref: c
  }, e)));
}), T9 = /* @__PURE__ */ je((e, t) => {
  var {
    width: r,
    height: n
  } = e, [o, a] = Ke({
    containerWidth: Ks(r),
    containerHeight: Ks(n)
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
  }), /* @__PURE__ */ m.createElement("div", Fn({
    ref: s
  }, e)));
}), _9 = /* @__PURE__ */ je((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement("div", Fn({
    ref: t
  }, e)));
}), N9 = /* @__PURE__ */ je((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return Nr(r) || Nr(n) ? /* @__PURE__ */ m.createElement(T9, Fn({}, e, {
    ref: t
  })) : /* @__PURE__ */ m.createElement(_9, Fn({}, e, {
    ref: t
  }));
});
function k9(e) {
  return e === !0 ? C9 : N9;
}
var I9 = /* @__PURE__ */ je((e, t) => {
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
    responsive: w,
    dispatchTouchEvents: x = !0
  } = e, E = me(null), S = _e(), [P, O] = Ke(null), [A, C] = Ke(null), N = x9(), _ = Kp(), R = _?.width > 0 ? _.width : y, D = _?.height > 0 ? _.height : o, k = ve((L) => {
    N(L), typeof t == "function" && t(L), O(L), C(L), L != null && (E.current = L);
  }, [N, t, O, C]), U = ve((L) => {
    S(mT(L)), S(Ft({
      handler: a,
      reactEvent: L
    }));
  }, [S, a]), B = ve((L) => {
    S(kf(L)), S(Ft({
      handler: u,
      reactEvent: L
    }));
  }, [S, u]), F = ve((L) => {
    S(JA()), S(Ft({
      handler: l,
      reactEvent: L
    }));
  }, [S, l]), M = ve((L) => {
    S(kf(L)), S(Ft({
      handler: d,
      reactEvent: L
    }));
  }, [S, d]), z = ve(() => {
    S(xT());
  }, [S]), ne = ve((L) => {
    S(wT(L.key));
  }, [S]), W = ve((L) => {
    S(Ft({
      handler: i,
      reactEvent: L
    }));
  }, [S, i]), re = ve((L) => {
    S(Ft({
      handler: s,
      reactEvent: L
    }));
  }, [S, s]), te = ve((L) => {
    S(Ft({
      handler: c,
      reactEvent: L
    }));
  }, [S, c]), oe = ve((L) => {
    S(Ft({
      handler: p,
      reactEvent: L
    }));
  }, [S, p]), ce = ve((L) => {
    S(Ft({
      handler: f,
      reactEvent: L
    }));
  }, [S, f]), ke = ve((L) => {
    x && S(ST(L)), S(Ft({
      handler: v,
      reactEvent: L
    }));
  }, [S, x, v]), V = ve((L) => {
    S(Ft({
      handler: h,
      reactEvent: L
    }));
  }, [S, h]), fe = k9(w);
  return /* @__PURE__ */ m.createElement(bC.Provider, {
    value: P
  }, /* @__PURE__ */ m.createElement(RP.Provider, {
    value: A
  }, /* @__PURE__ */ m.createElement(fe, {
    width: R ?? g?.width,
    height: D ?? g?.height,
    className: ue("recharts-wrapper", n),
    style: E9({
      position: "relative",
      cursor: "default",
      width: R,
      height: D
    }, g),
    onClick: U,
    onContextMenu: W,
    onDoubleClick: re,
    onFocus: z,
    onKeyDown: ne,
    onMouseDown: te,
    onMouseEnter: B,
    onMouseLeave: F,
    onMouseMove: M,
    onMouseUp: oe,
    onTouchEnd: V,
    onTouchMove: ke,
    onTouchStart: ce,
    ref: k
  }, /* @__PURE__ */ m.createElement(A9, null), r)));
}), R9 = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function M9(e, t) {
  if (e == null) return {};
  var r, n, o = D9(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function D9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var TT = /* @__PURE__ */ je((e, t) => {
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
  } = e, d = M9(e, R9), p = ht(d);
  return c ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($c, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement(xw, {
    otherAttributes: p,
    title: u,
    desc: l
  }, a)) : /* @__PURE__ */ m.createElement(I9, {
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
  }, /* @__PURE__ */ m.createElement(xw, {
    otherAttributes: p,
    title: u,
    desc: l,
    ref: t
  }, /* @__PURE__ */ m.createElement(M6, null, a)));
});
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(null, arguments);
}
var j9 = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, L9 = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: j9,
  reverseStackOrder: !1,
  syncMethod: "index",
  responsive: !1
}, Sm = /* @__PURE__ */ je(function(t, r) {
  var n, o = qe(t.categoricalChartProps, L9), {
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
  return /* @__PURE__ */ m.createElement(OT, {
    preloadedState: {
      options: l
    },
    reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : a
  }, /* @__PURE__ */ m.createElement(GC, {
    chartData: u.data
  }), /* @__PURE__ */ m.createElement(AT, {
    layout: o.layout,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(CT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(TT, If({}, o, {
    ref: r
  })));
}), $9 = ["axis"], B9 = /* @__PURE__ */ je((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: $9,
  tooltipPayloadSearcher: nl,
  categoricalChartProps: e,
  ref: t
})), F9 = ["axis", "item"], z9 = /* @__PURE__ */ je((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: F9,
  tooltipPayloadSearcher: nl,
  categoricalChartProps: e,
  ref: t
}));
function U9(e) {
  var t = _e();
  return Fe(() => {
    t(l9(e));
  }, [t, e]), null;
}
var W9 = ["layout"];
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rf.apply(null, arguments);
}
function K9(e, t) {
  if (e == null) return {};
  var r, n, o = V9(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function V9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var q9 = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, H9 = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: q9,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1
}, G9 = /* @__PURE__ */ je(function(t, r) {
  var n, o = qe(t.categoricalChartProps, H9), {
    layout: a
  } = o, i = K9(o, W9), {
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
  return /* @__PURE__ */ m.createElement(OT, {
    preloadedState: {
      options: d
    },
    reduxStoreName: (n = o.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ m.createElement(GC, {
    chartData: o.data
  }), /* @__PURE__ */ m.createElement(AT, {
    layout: a,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(CT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(U9, {
    cx: o.cx,
    cy: o.cy,
    startAngle: o.startAngle,
    endAngle: o.endAngle,
    innerRadius: o.innerRadius,
    outerRadius: o.outerRadius
  }), /* @__PURE__ */ m.createElement(TT, Rf({}, i, {
    ref: r
  })));
}), Y9 = ["item"], X9 = {
  layout: "centric",
  startAngle: 0,
  endAngle: 360,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, Z9 = /* @__PURE__ */ je((e, t) => {
  var r = qe(e, X9);
  return /* @__PURE__ */ m.createElement(G9, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: Y9,
    tooltipPayloadSearcher: nl,
    categoricalChartProps: r,
    ref: t
  });
}), J9 = ["axis"], Q9 = /* @__PURE__ */ je((e, t) => /* @__PURE__ */ m.createElement(Sm, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: J9,
  tooltipPayloadSearcher: nl,
  categoricalChartProps: e,
  ref: t
}));
const eY = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: u, children: /* @__PURE__ */ b(jc, { width: s, height: c, children: /* @__PURE__ */ j(z9, { data: e, layout: d, children: [
      o && /* @__PURE__ */ b(hl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        ml,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        vl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ b(ol, {}),
      a && /* @__PURE__ */ b(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ b(
        qC,
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
eY.displayName = "BarChart";
const tY = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: l, children: /* @__PURE__ */ b(jc, { width: c, height: u, children: /* @__PURE__ */ j(B9, { data: e, children: [
      o && /* @__PURE__ */ b(hl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        ml,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        vl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ b(ol, {}),
      a && /* @__PURE__ */ b(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ b(
        iT,
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
tY.displayName = "LineChart";
const rY = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: u, children: /* @__PURE__ */ b(jc, { width: s, height: c, children: /* @__PURE__ */ j(Q9, { data: e, children: [
      o && /* @__PURE__ */ b(hl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        ml,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        vl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      i && /* @__PURE__ */ b(ol, {}),
      a && /* @__PURE__ */ b(Wn, {}),
      t.map((f, g) => /* @__PURE__ */ b(
        hT,
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
rY.displayName = "AreaChart";
const nY = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: h, className: p, children: /* @__PURE__ */ b(jc, { width: l, height: d, children: /* @__PURE__ */ j(Z9, { children: [
      /* @__PURE__ */ b(
        zC,
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
          children: e.map((y, w) => /* @__PURE__ */ b(Qa, { fill: f[w % f.length] }, `cell-${w}`))
        }
      ),
      i && /* @__PURE__ */ b(ol, {}),
      a && /* @__PURE__ */ b(Wn, {})
    ] }) }) });
  }
);
nY.displayName = "PieChart";
const NX = ({
  title: e,
  subtitle: t,
  logo: r,
  user: n,
  menuItems: o = [],
  menuGroups: a = [],
  initialCollapsed: i = !0,
  onLogout: s,
  notifications: c,
  onNotificationRead: u,
  onMarkAllAsRead: l,
  onViewAllNotifications: d,
  breadcrumbs: p = [],
  modules: h,
  currentModule: v,
  onModuleChange: f,
  onLogoClick: g,
  companyLogo: y,
  children: w
}) => {
  const [x, E] = m.useState(i);
  return /* @__PURE__ */ j("div", { className: "relative min-h-screen bg-background", children: [
    /* @__PURE__ */ b(
      PP,
      {
        title: e,
        subtitle: t,
        logo: r,
        items: o,
        groups: a,
        isCollapsed: x,
        onToggleCollapse: () => E(!x),
        onLogout: s,
        onLogoClick: g,
        companyLogo: y
      }
    ),
    /* @__PURE__ */ b(
      CP,
      {
        isCollapsed: x,
        breadcrumbs: p,
        user: {
          name: n.name,
          role: n.role,
          avatar: n.avatar
        },
        notifications: c,
        onNotificationRead: u,
        onMarkAllAsRead: l,
        onViewAllNotifications: d,
        modules: h,
        currentModule: v,
        onModuleChange: f
      }
    ),
    /* @__PURE__ */ b(
      "main",
      {
        className: K(
          "transition-all duration-300 pt-[52px] min-h-screen",
          x ? "ml-[64px]" : "ml-[220px]"
        ),
        children: /* @__PURE__ */ b("div", { className: "w-full h-full p-6", children: w })
      }
    )
  ] });
}, kX = ({
  title: e,
  icon: t,
  actions: r = [],
  showDefaultActions: n = !0,
  onAdd: o,
  onEdit: a,
  onDelete: i,
  onRefresh: s,
  selectedRowsCount: c = 0,
  children: u,
  className: l
}) => {
  const { toast: d } = dP(), p = () => {
    if (c === 0) {
      d({
        title: "Atenção",
        description: "Selecione um registro para editar.",
        variant: "warning"
      });
      return;
    }
    if (c > 1) {
      d({
        title: "Atenção",
        description: "Selecione apenas um registro para editar.",
        variant: "warning"
      });
      return;
    }
    a?.();
  }, h = () => {
    if (c === 0) {
      d({
        title: "Atenção",
        description: "Selecione ao menos um registro para excluir.",
        variant: "warning"
      });
      return;
    }
    i?.();
  }, v = [];
  n && (o && v.push({
    key: "add",
    label: "Incluir",
    icon: /* @__PURE__ */ b(L_, { className: "h-4 w-4" }),
    variant: "primary",
    onClick: o
  }), a && v.push({
    key: "edit",
    label: "Editar",
    icon: /* @__PURE__ */ b(W_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: p
  }), i && v.push({
    key: "delete",
    label: "Excluir",
    icon: /* @__PURE__ */ b(H_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: h
  }));
  const f = [...v, ...r];
  return /* @__PURE__ */ j("div", { className: K("flex flex-col h-full w-full", l), children: [
    /* @__PURE__ */ j("div", { className: "flex items-center justify-between mb-6 pb-4 border-b", children: [
      /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
        t && /* @__PURE__ */ b("div", { className: "flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary", children: t }),
        /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ b("h1", { className: "text-2xl font-bold text-foreground tracking-tight", children: e }),
          s && /* @__PURE__ */ b(
            "button",
            {
              onClick: s,
              className: "p-1.5 rounded-md transition-colors hover:bg-accent text-muted-foreground hover:text-foreground",
              title: "Atualizar",
              children: /* @__PURE__ */ b(B_, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      f.length > 0 && /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: f.map((g) => /* @__PURE__ */ j(
        Yi,
        {
          variant: g.variant || "outline",
          size: "sm",
          onClick: g.onClick,
          disabled: g.disabled,
          className: "gap-2",
          children: [
            g.icon,
            g.label
          ]
        },
        g.key
      )) })
    ] }),
    /* @__PURE__ */ b("div", { className: "flex-1 overflow-auto", children: u })
  ] });
};
function IX({
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
    const y = d(f), w = p(f);
    if (g.ctrlKey || g.metaKey)
      i(w ? a.filter((x) => d(x) !== y) : [...a, f]);
    else if (g.shiftKey && a.length > 0) {
      const x = d(a[a.length - 1]), E = t.findIndex((N) => d(N) === y), S = t.findIndex((N) => d(N) === x), P = Math.min(E, S), O = Math.max(E, S), A = t.slice(P, O + 1), C = [...a];
      A.forEach((N) => {
        const _ = d(N);
        C.some((R) => d(R) === _) || C.push(N);
      }), i(C);
    } else
      i(w ? [] : [f]);
  }, v = (f) => {
    f.target === f.currentTarget && l && i && i([]);
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: K("rounded-md border", c),
      onClick: v,
      children: /* @__PURE__ */ j(wP, { children: [
        /* @__PURE__ */ b(xP, { children: /* @__PURE__ */ b(Xo, { children: e.map((f) => /* @__PURE__ */ b(
          SP,
          {
            style: f.width ? { width: f.width } : void 0,
            children: f.title
          },
          f.key
        )) }) }),
        /* @__PURE__ */ b(EP, { children: r ? /* @__PURE__ */ b(Xo, { children: /* @__PURE__ */ b(
          Ui,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground"
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ b(Xo, { children: /* @__PURE__ */ b(
          Ui,
          {
            colSpan: e.length + (l ? 1 : 0),
            className: "text-center py-8 text-muted-foreground",
            children: u
          }
        ) }) : t.map((f, g) => {
          const y = d(f), w = p(f);
          return /* @__PURE__ */ b(
            Xo,
            {
              "data-state": w ? "selected" : "",
              onClick: (x) => {
                l ? h(f, x) : s?.(f);
              },
              className: K(
                l || s ? "cursor-pointer" : "",
                l && "select-none",
                w && "!bg-secondary/20"
              ),
              children: e.map((x) => {
                const E = x.dataIndex ? f[x.dataIndex] : void 0;
                return /* @__PURE__ */ b(Ui, { children: x.render ? x.render(E, f, g) : E || "-" }, x.key);
              })
            },
            y
          );
        }) })
      ] })
    }
  );
}
function RX({
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
  return /* @__PURE__ */ j("div", { className: K("grid grid-cols-1 lg:grid-cols-12 gap-6", u), children: [
    /* @__PURE__ */ b(
      "div",
      {
        className: K("lg:col-span-7", l),
        style: { gridColumn: `span ${p[0]} / span ${p[0]}` },
        children: /* @__PURE__ */ j(ji, { className: "overflow-hidden", children: [
          /* @__PURE__ */ b("div", { className: "overflow-x-auto", children: /* @__PURE__ */ j("table", { className: "w-full", children: [
            /* @__PURE__ */ b("thead", { children: /* @__PURE__ */ b("tr", { className: "border-b bg-muted/50", children: e.map((f) => /* @__PURE__ */ b(
              "th",
              {
                className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground text-sm",
                style: f.width ? { width: f.width } : void 0,
                children: f.title
              },
              f.key
            )) }) }),
            /* @__PURE__ */ b("tbody", { children: t.length === 0 ? /* @__PURE__ */ b("tr", { children: /* @__PURE__ */ b(
              "td",
              {
                colSpan: e.length,
                className: "text-center py-8 text-muted-foreground text-sm",
                children: "Nenhum registro encontrado"
              }
            ) }) : t.map((f) => {
              const g = h(f), y = n && h(n) === g;
              return /* @__PURE__ */ b(
                "tr",
                {
                  onClick: () => v(f),
                  className: K(
                    "border-b transition-colors cursor-pointer",
                    y ? "bg-secondary/20" : "hover:bg-muted/50"
                  ),
                  children: e.map((w) => {
                    const x = w.dataIndex ? f[w.dataIndex] : void 0;
                    return /* @__PURE__ */ b("td", { className: "px-4 py-2 align-middle", children: w.render ? w.render(x, f) : x || "-" }, w.key);
                  })
                },
                g
              );
            }) })
          ] }) }),
          i && /* @__PURE__ */ b("div", { className: "border-t", children: i() })
        ] })
      }
    ),
    /* @__PURE__ */ b(
      "div",
      {
        className: K("lg:col-span-5", d),
        style: { gridColumn: `span ${p[1]} / span ${p[1]}` },
        children: n && a ? /* @__PURE__ */ b(ji, { className: "sticky top-6", children: a(n) }) : /* @__PURE__ */ j(ji, { className: "p-12 flex flex-col items-center justify-center text-center min-h-[400px]", children: [
          /* @__PURE__ */ b(O_, { className: "h-12 w-12 text-muted-foreground mb-4" }),
          /* @__PURE__ */ b("h4", { className: "text-lg font-semibold mb-2", children: s }),
          /* @__PURE__ */ b("p", { className: "text-sm text-muted-foreground max-w-sm", children: c })
        ] })
      }
    )
  ] });
}
const MX = z0, DX = U0, jX = oc, oY = W0, _T = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  ec,
  {
    className: K(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
_T.displayName = ec.displayName;
const aY = Sa(
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
), iY = m.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ j(oY, { children: [
  /* @__PURE__ */ b(_T, {}),
  /* @__PURE__ */ j(
    tc,
    {
      ref: o,
      className: K(aY({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ j(oc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b(Ff, { className: "h-4 w-4" }),
          /* @__PURE__ */ b("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
iY.displayName = tc.displayName;
const sY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: K(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
sY.displayName = "SheetHeader";
const cY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: K(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
cY.displayName = "SheetFooter";
const lY = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rc,
  {
    ref: r,
    className: K("text-lg font-semibold text-foreground", e),
    ...t
  }
));
lY.displayName = rc.displayName;
const uY = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nc,
  {
    ref: r,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
uY.displayName = nc.displayName;
function LX() {
  return /* @__PURE__ */ b("div", { className: "relative", children: /* @__PURE__ */ b(
    "button",
    {
      className: "p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
      title: "Temas",
      children: /* @__PURE__ */ b(Gw, { className: "h-5 w-5" })
    }
  ) });
}
const $X = ({
  children: e,
  isAuthenticated: t,
  redirectTo: r = "/",
  externalRedirect: n = !1
}) => {
  const o = zw();
  return t ? e : n && r ? (window.location.href = r, null) : /* @__PURE__ */ b(o_, { to: r, state: { from: o }, replace: !0 });
};
function NT(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: dY } = Object.prototype, { getPrototypeOf: Pm } = Object, { iterator: gl, toStringTag: kT } = Symbol, yl = /* @__PURE__ */ ((e) => (t) => {
  const r = dY.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nr = (e) => (e = e.toLowerCase(), (t) => yl(t) === e), bl = (e) => (t) => typeof t === e, { isArray: jo } = Array, mo = bl("undefined");
function ti(e) {
  return e !== null && !mo(e) && e.constructor !== null && !mo(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const IT = nr("ArrayBuffer");
function fY(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && IT(e.buffer), t;
}
const pY = bl("string"), wt = bl("function"), RT = bl("number"), ri = (e) => e !== null && typeof e == "object", hY = (e) => e === !0 || e === !1, qi = (e) => {
  if (yl(e) !== "object")
    return !1;
  const t = Pm(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(kT in e) && !(gl in e);
}, mY = (e) => {
  if (!ri(e) || ti(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, vY = nr("Date"), gY = nr("File"), yY = nr("Blob"), bY = nr("FileList"), wY = (e) => ri(e) && wt(e.pipe), xY = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = yl(e)) === "formdata" || // detect form-data instance
  t === "object" && wt(e.toString) && e.toString() === "[object FormData]"));
}, EY = nr("URLSearchParams"), [SY, PY, OY, AY] = ["ReadableStream", "Request", "Response", "Headers"].map(nr), CY = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ni(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), jo(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (ti(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (n = 0; n < i; n++)
      s = a[n], t.call(null, e[s], s, e);
  }
}
function MT(e, t) {
  if (ti(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, DT = (e) => !mo(e) && e !== bn;
function Mf() {
  const { caseless: e, skipUndefined: t } = DT(this) && this || {}, r = {}, n = (o, a) => {
    const i = e && MT(r, a) || a;
    qi(r[i]) && qi(o) ? r[i] = Mf(r[i], o) : qi(o) ? r[i] = Mf({}, o) : jo(o) ? r[i] = o.slice() : (!t || !mo(o)) && (r[i] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ni(arguments[o], n);
  return r;
}
const TY = (e, t, r, { allOwnKeys: n } = {}) => (ni(t, (o, a) => {
  r && wt(o) ? e[a] = NT(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), _Y = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), NY = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kY = (e, t, r, n) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = r !== !1 && Pm(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, IY = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, RY = (e) => {
  if (!e) return null;
  if (jo(e)) return e;
  let t = e.length;
  if (!RT(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, MY = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pm(Uint8Array)), DY = (e, t) => {
  const n = (e && e[gl]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, jY = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, LY = nr("HTMLFormElement"), $Y = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Sw = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), BY = nr("RegExp"), jT = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ni(r, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(e, n);
}, FY = (e) => {
  jT(e, (t, r) => {
    if (wt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (wt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, zY = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return jo(e) ? n(e) : n(String(e).split(t)), r;
}, UY = () => {
}, WY = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function KY(e) {
  return !!(e && wt(e.append) && e[kT] === "FormData" && e[gl]);
}
const VY = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ri(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (ti(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = jo(n) ? [] : {};
        return ni(n, (i, s) => {
          const c = r(i, o + 1);
          !mo(c) && (a[s] = c);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, qY = nr("AsyncFunction"), HY = (e) => e && (ri(e) || wt(e)) && wt(e.then) && wt(e.catch), LT = ((e, t) => e ? setImmediate : t ? ((r, n) => (bn.addEventListener("message", ({ source: o, data: a }) => {
  o === bn && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), bn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  wt(bn.postMessage)
), GY = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || LT, YY = (e) => e != null && wt(e[gl]), I = {
  isArray: jo,
  isArrayBuffer: IT,
  isBuffer: ti,
  isFormData: xY,
  isArrayBufferView: fY,
  isString: pY,
  isNumber: RT,
  isBoolean: hY,
  isObject: ri,
  isPlainObject: qi,
  isEmptyObject: mY,
  isReadableStream: SY,
  isRequest: PY,
  isResponse: OY,
  isHeaders: AY,
  isUndefined: mo,
  isDate: vY,
  isFile: gY,
  isBlob: yY,
  isRegExp: BY,
  isFunction: wt,
  isStream: wY,
  isURLSearchParams: EY,
  isTypedArray: MY,
  isFileList: bY,
  forEach: ni,
  merge: Mf,
  extend: TY,
  trim: CY,
  stripBOM: _Y,
  inherits: NY,
  toFlatObject: kY,
  kindOf: yl,
  kindOfTest: nr,
  endsWith: IY,
  toArray: RY,
  forEachEntry: DY,
  matchAll: jY,
  isHTMLForm: LY,
  hasOwnProperty: Sw,
  hasOwnProp: Sw,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jT,
  freezeMethods: FY,
  toObjectSet: zY,
  toCamelCase: $Y,
  noop: UY,
  toFiniteNumber: WY,
  findKey: MT,
  global: bn,
  isContextDefined: DT,
  isSpecCompliantForm: KY,
  toJSONObject: VY,
  isAsyncFn: qY,
  isThenable: HY,
  setImmediate: LT,
  asap: GY,
  isIterable: YY
};
function ae(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(ae, Error, {
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
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const $T = ae.prototype, BT = {};
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
  BT[e] = { value: e };
});
Object.defineProperties(ae, BT);
Object.defineProperty($T, "isAxiosError", { value: !0 });
ae.from = (e, t, r, n, o, a) => {
  const i = Object.create($T);
  I.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return ae.call(i, s, c, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", a && Object.assign(i, a), i;
};
const XY = null;
function Df(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function FT(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pw(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = FT(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ZY(e) {
  return I.isArray(e) && !e.some(Df);
}
const JY = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function wl(e, t, r) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = I.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, g) {
    return !I.isUndefined(g[f]);
  });
  const n = r.metaTokens, o = r.visitor || l, a = r.dots, i = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (I.isDate(v))
      return v.toISOString();
    if (I.isBoolean(v))
      return v.toString();
    if (!c && I.isBlob(v))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(v) || I.isTypedArray(v) ? c && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, f, g) {
    let y = v;
    if (v && !g && typeof v == "object") {
      if (I.endsWith(f, "{}"))
        f = n ? f : f.slice(0, -2), v = JSON.stringify(v);
      else if (I.isArray(v) && ZY(v) || (I.isFileList(v) || I.endsWith(f, "[]")) && (y = I.toArray(v)))
        return f = FT(f), y.forEach(function(x, E) {
          !(I.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Pw([f], E, a) : i === null ? f : f + "[]",
            u(x)
          );
        }), !1;
    }
    return Df(v) ? !0 : (t.append(Pw(g, f, a), u(v)), !1);
  }
  const d = [], p = Object.assign(JY, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Df
  });
  function h(v, f) {
    if (!I.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      d.push(v), I.forEach(v, function(y, w) {
        (!(I.isUndefined(y) || y === null) && o.call(
          t,
          y,
          I.isString(w) ? w.trim() : w,
          f,
          p
        )) === !0 && h(y, f ? f.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Ow(e) {
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
  this._pairs = [], e && wl(e, this, t);
}
const zT = Om.prototype;
zT.append = function(t, r) {
  this._pairs.push([t, r]);
};
zT.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ow);
  } : Ow;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function QY(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function UT(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || QY;
  I.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = I.isURLSearchParams(t) ? t.toString() : new Om(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Aw {
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
    I.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const WT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, e7 = typeof URLSearchParams < "u" ? URLSearchParams : Om, t7 = typeof FormData < "u" ? FormData : null, r7 = typeof Blob < "u" ? Blob : null, n7 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: e7,
    FormData: t7,
    Blob: r7
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Am = typeof window < "u" && typeof document < "u", jf = typeof navigator == "object" && navigator || void 0, o7 = Am && (!jf || ["ReactNative", "NativeScript", "NS"].indexOf(jf.product) < 0), a7 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", i7 = Am && window.location.href || "http://localhost", s7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Am,
  hasStandardBrowserEnv: o7,
  hasStandardBrowserWebWorkerEnv: a7,
  navigator: jf,
  origin: i7
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...s7,
  ...n7
};
function c7(e, t) {
  return wl(e, new st.classes.URLSearchParams(), {
    visitor: function(r, n, o, a) {
      return st.isNode && I.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function l7(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function u7(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function KT(e) {
  function t(r, n, o, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= r.length;
    return i = !i && I.isArray(o) ? o.length : i, c ? (I.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !I.isObject(o[i])) && (o[i] = []), t(r, n, o[i], a) && I.isArray(o[i]) && (o[i] = u7(o[i])), !s);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const r = {};
    return I.forEachEntry(e, (n, o) => {
      t(l7(n), o, r, 0);
    }), r;
  }
  return null;
}
function d7(e, t, r) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const oi = {
  transitional: WT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = I.isObject(t);
    if (a && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(KT(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return c7(t, this.formSerializer).toString();
      if ((s = I.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return wl(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), d7(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || oi.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? ae.from(s, ae.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  oi.headers[e] = {};
});
const f7 = I.toObjectSet([
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
]), p7 = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && f7[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Cw = Symbol("internals");
function Ho(e) {
  return e && String(e).trim().toLowerCase();
}
function Hi(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Hi) : String(e);
}
function h7(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const m7 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fd(e, t, r, n, o) {
  if (I.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!I.isString(t)) {
    if (I.isString(n))
      return t.indexOf(n) !== -1;
    if (I.isRegExp(n))
      return n.test(t);
  }
}
function v7(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function g7(e, t) {
  const r = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, a, i) {
        return this[n].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
let xt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(s, c, u) {
      const l = Ho(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = Hi(s));
    }
    const i = (s, c) => I.forEach(s, (u, l) => a(u, l, c));
    if (I.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (I.isString(t) && (t = t.trim()) && !m7(t))
      i(p7(t), r);
    else if (I.isObject(t) && I.isIterable(t)) {
      let s = {}, c, u;
      for (const l of t) {
        if (!I.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = l[0]] = (c = s[u]) ? I.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(s, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ho(t), t) {
      const n = I.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return h7(o);
        if (I.isFunction(r))
          return r.call(this, o, n);
        if (I.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ho(t), t) {
      const n = I.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || fd(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = Ho(i), i) {
        const s = I.findKey(n, i);
        s && (!r || fd(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return I.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || fd(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return I.forEach(this, (o, a) => {
      const i = I.findKey(n, a);
      if (i) {
        r[i] = Hi(o), delete r[a];
        return;
      }
      const s = t ? v7(a) : String(a).trim();
      s !== a && delete r[a], r[s] = Hi(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && I.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Cw] = this[Cw] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = Ho(i);
      n[s] || (g7(o, i), n[s] = !0);
    }
    return I.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(xt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
I.freezeMethods(xt);
function pd(e, t) {
  const r = this || oi, n = t || r, o = xt.from(n.headers);
  let a = n.data;
  return I.forEach(e, function(s) {
    a = s.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function VT(e) {
  return !!(e && e.__CANCEL__);
}
function Lo(e, t, r) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, r), this.name = "CanceledError";
}
I.inherits(Lo, ae, {
  __CANCEL__: !0
});
function qT(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ae(
    "Request failed with status code " + r.status,
    [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function y7(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function b7(e, t) {
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
function w7(e, t) {
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
const Vs = (e, t, r = 3) => {
  let n = 0;
  const o = b7(50, 250);
  return w7((a) => {
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
}, Tw = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, _w = (e) => (...t) => I.asap(() => e(...t)), x7 = st.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, st.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(st.origin),
  st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)
) : () => !0, E7 = st.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, a, i) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      I.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), I.isString(n) && s.push(`path=${n}`), I.isString(o) && s.push(`domain=${o}`), a === !0 && s.push("secure"), I.isString(i) && s.push(`SameSite=${i}`), document.cookie = s.join("; ");
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
function S7(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function P7(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function HT(e, t, r) {
  let n = !S7(t);
  return e && (n || r == !1) ? P7(e, t) : t;
}
const Nw = (e) => e instanceof xt ? { ...e } : e;
function zn(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, d, p) {
    return I.isPlainObject(u) && I.isPlainObject(l) ? I.merge.call({ caseless: p }, u, l) : I.isPlainObject(l) ? I.merge({}, l) : I.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d, p) {
    if (I.isUndefined(l)) {
      if (!I.isUndefined(u))
        return n(void 0, u, d, p);
    } else return n(u, l, d, p);
  }
  function a(u, l) {
    if (!I.isUndefined(l))
      return n(void 0, l);
  }
  function i(u, l) {
    if (I.isUndefined(l)) {
      if (!I.isUndefined(u))
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
    headers: (u, l, d) => o(Nw(u), Nw(l), d, !0)
  };
  return I.forEach(Object.keys({ ...e, ...t }), function(l) {
    const d = c[l] || o, p = d(e[l], t[l], l);
    I.isUndefined(p) && d !== s || (r[l] = p);
  }), r;
}
const GT = (e) => {
  const t = zn({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  if (t.headers = i = xt.from(i), t.url = UT(HT(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), I.isFormData(r)) {
    if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (I.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, d]) => {
        u.includes(l.toLowerCase()) && i.set(l, d);
      });
    }
  }
  if (st.hasStandardBrowserEnv && (n && I.isFunction(n) && (n = n(t)), n || n !== !1 && x7(t.url))) {
    const c = o && a && E7.read(a);
    c && i.set(o, c);
  }
  return t;
}, O7 = typeof XMLHttpRequest < "u", A7 = O7 && function(e) {
  return new Promise(function(r, n) {
    const o = GT(e);
    let a = o.data;
    const i = xt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, l, d, p, h, v;
    function f() {
      h && h(), v && v(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function y() {
      if (!g)
        return;
      const x = xt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      qT(function(O) {
        r(O), f();
      }, function(O) {
        n(O), f();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (n(new ae("Request aborted", ae.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(E) {
      const S = E && E.message ? E.message : "Network Error", P = new ae(S, ae.ERR_NETWORK, e, g);
      P.event = E || null, n(P), g = null;
    }, g.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || WT;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), n(new ae(
        E,
        S.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in g && I.forEach(i.toJSON(), function(E, S) {
      g.setRequestHeader(S, E);
    }), I.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), u && ([p, v] = Vs(u, !0), g.addEventListener("progress", p)), c && g.upload && ([d, h] = Vs(c), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (x) => {
      g && (n(!x || x.type ? new Lo(null, e, g) : x), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = y7(o.url);
    if (w && st.protocols.indexOf(w) === -1) {
      n(new ae("Unsupported protocol " + w + ":", ae.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, C7 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, s();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof ae ? l : new Lo(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new ae(`timeout ${t} of ms exceeded`, ae.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: c } = n;
    return c.unsubscribe = () => I.asap(s), c;
  }
}, T7 = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, _7 = async function* (e, t) {
  for await (const r of N7(e))
    yield* T7(r, t);
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
  const o = _7(e, t);
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
}, Iw = 64 * 1024, { isFunction: Di } = I, k7 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(I.global), {
  ReadableStream: Rw,
  TextEncoder: Mw
} = I.global, Dw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, I7 = (e) => {
  e = I.merge.call({
    skipUndefined: !0
  }, k7, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Di(t) : typeof fetch == "function", a = Di(r), i = Di(n);
  if (!o)
    return !1;
  const s = o && Di(Rw), c = o && (typeof Mw == "function" ? /* @__PURE__ */ ((v) => (f) => v.encode(f))(new Mw()) : async (v) => new Uint8Array(await new r(v).arrayBuffer())), u = a && s && Dw(() => {
    let v = !1;
    const f = new r(st.origin, {
      body: new Rw(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }).headers.has("Content-Type");
    return v && !f;
  }), l = i && s && Dw(() => I.isReadableStream(new n("").body)), d = {
    stream: l && ((v) => v.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !d[v] && (d[v] = (f, g) => {
      let y = f && f[v];
      if (y)
        return y.call(f);
      throw new ae(`Response type '${v}' is not supported`, ae.ERR_NOT_SUPPORT, g);
    });
  });
  const p = async (v) => {
    if (v == null)
      return 0;
    if (I.isBlob(v))
      return v.size;
    if (I.isSpecCompliantForm(v))
      return (await new r(st.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (I.isArrayBufferView(v) || I.isArrayBuffer(v))
      return v.byteLength;
    if (I.isURLSearchParams(v) && (v = v + ""), I.isString(v))
      return (await c(v)).byteLength;
  }, h = async (v, f) => {
    const g = I.toFiniteNumber(v.getContentLength());
    return g ?? p(f);
  };
  return async (v) => {
    let {
      url: f,
      method: g,
      data: y,
      signal: w,
      cancelToken: x,
      timeout: E,
      onDownloadProgress: S,
      onUploadProgress: P,
      responseType: O,
      headers: A,
      withCredentials: C = "same-origin",
      fetchOptions: N
    } = GT(v), _ = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let R = C7([w, x && x.toAbortSignal()], E), D = null;
    const k = R && R.unsubscribe && (() => {
      R.unsubscribe();
    });
    let U;
    try {
      if (P && u && g !== "get" && g !== "head" && (U = await h(A, y)) !== 0) {
        let W = new r(f, {
          method: "POST",
          body: y,
          duplex: "half"
        }), re;
        if (I.isFormData(y) && (re = W.headers.get("content-type")) && A.setContentType(re), W.body) {
          const [te, oe] = Tw(
            U,
            Vs(_w(P))
          );
          y = kw(W.body, Iw, te, oe);
        }
      }
      I.isString(C) || (C = C ? "include" : "omit");
      const B = a && "credentials" in r.prototype, F = {
        ...N,
        signal: R,
        method: g.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: B ? C : void 0
      };
      D = a && new r(f, F);
      let M = await (a ? _(D, N) : _(f, F));
      const z = l && (O === "stream" || O === "response");
      if (l && (S || z && k)) {
        const W = {};
        ["status", "statusText", "headers"].forEach((ce) => {
          W[ce] = M[ce];
        });
        const re = I.toFiniteNumber(M.headers.get("content-length")), [te, oe] = S && Tw(
          re,
          Vs(_w(S), !0)
        ) || [];
        M = new n(
          kw(M.body, Iw, te, () => {
            oe && oe(), k && k();
          }),
          W
        );
      }
      O = O || "text";
      let ne = await d[I.findKey(d, O) || "text"](M, v);
      return !z && k && k(), await new Promise((W, re) => {
        qT(W, re, {
          data: ne,
          headers: xt.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: v,
          request: D
        });
      });
    } catch (B) {
      throw k && k(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new ae("Network Error", ae.ERR_NETWORK, v, D),
        {
          cause: B.cause || B
        }
      ) : ae.from(B, B && B.code, v, D);
    }
  };
}, R7 = /* @__PURE__ */ new Map(), YT = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, a = [
    n,
    o,
    r
  ];
  let i = a.length, s = i, c, u, l = R7;
  for (; s--; )
    c = a[s], u = l.get(c), u === void 0 && l.set(c, u = s ? /* @__PURE__ */ new Map() : I7(t)), l = u;
  return u;
};
YT();
const Cm = {
  http: XY,
  xhr: A7,
  fetch: {
    get: YT
  }
};
I.forEach(Cm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jw = (e) => `- ${e}`, M7 = (e) => I.isFunction(e) || e === null || e === !1;
function D7(e, t) {
  e = I.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const a = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let s;
    if (o = n, !M7(n) && (o = Cm[(s = String(n)).toLowerCase()], o === void 0))
      throw new ae(`Unknown adapter '${s}'`);
    if (o && (I.isFunction(o) || (o = o.get(t))))
      break;
    a[s || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? i.length > 1 ? `since :
` + i.map(jw).join(`
`) : " " + jw(i[0]) : "as no adapter specified";
    throw new ae(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const XT = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: D7,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cm
};
function hd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lo(null, e);
}
function Lw(e) {
  return hd(e), e.headers = xt.from(e.headers), e.data = pd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), XT.getAdapter(e.adapter || oi.adapter, e)(e).then(function(n) {
    return hd(e), n.data = pd.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xt.from(n.headers), n;
  }, function(n) {
    return VT(n) || (hd(e), n && n.response && (n.response.data = pd.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xt.from(n.response.headers))), Promise.reject(n);
  });
}
const ZT = "1.13.1", xl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $w = {};
xl.transitional = function(t, r, n) {
  function o(a, i) {
    return "[Axios v" + ZT + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new ae(
        o(i, " has been removed" + (r ? " in " + r : "")),
        ae.ERR_DEPRECATED
      );
    return r && !$w[i] && ($w[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
xl.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function j7(e, t, r) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = t[a];
    if (i) {
      const s = e[a], c = s === void 0 || i(s, a, e);
      if (c !== !0)
        throw new ae("option " + a + " must be " + c, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ae("Unknown option " + a, ae.ERR_BAD_OPTION);
  }
}
const Gi = {
  assertOptions: j7,
  validators: xl
}, or = Gi.validators;
let On = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Aw(),
      response: new Aw()
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
    n !== void 0 && Gi.assertOptions(n, {
      silentJSONParsing: or.transitional(or.boolean),
      forcedJSONParsing: or.transitional(or.boolean),
      clarifyTimeoutError: or.transitional(or.boolean)
    }, !1), o != null && (I.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Gi.assertOptions(o, {
      encode: or.function,
      serialize: or.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Gi.assertOptions(r, {
      baseUrl: or.spelling("baseURL"),
      withXsrfToken: or.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && I.merge(
      a.common,
      a[r.method]
    );
    a && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete a[v];
      }
    ), r.headers = xt.concat(i, a);
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
      const v = [Lw.bind(this), void 0];
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
      l = Lw.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = u.length; d < p; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = zn(this.defaults, t);
    const r = HT(t.baseURL, t.url, t.allowAbsoluteUrls);
    return UT(r, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(t) {
  On.prototype[t] = function(r, n) {
    return this.request(zn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
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
let L7 = class JT {
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
      n.reason || (n.reason = new Lo(a, i, s), r(n.reason));
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
      token: new JT(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function $7(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function B7(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const Lf = {
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
Object.entries(Lf).forEach(([e, t]) => {
  Lf[t] = e;
});
function QT(e) {
  const t = new On(e), r = NT(On.prototype.request, t);
  return I.extend(r, On.prototype, t, { allOwnKeys: !0 }), I.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return QT(zn(e, o));
  }, r;
}
const Me = QT(oi);
Me.Axios = On;
Me.CanceledError = Lo;
Me.CancelToken = L7;
Me.isCancel = VT;
Me.VERSION = ZT;
Me.toFormData = wl;
Me.AxiosError = ae;
Me.Cancel = Me.CanceledError;
Me.all = function(t) {
  return Promise.all(t);
};
Me.spread = $7;
Me.isAxiosError = B7;
Me.mergeConfig = zn;
Me.AxiosHeaders = xt;
Me.formToJSON = (e) => KT(I.isHTMLForm(e) ? new FormData(e) : e);
Me.getAdapter = XT.getAdapter;
Me.HttpStatusCode = Lf;
Me.default = Me;
const {
  Axios: zX,
  AxiosError: UX,
  CanceledError: WX,
  isCancel: KX,
  CancelToken: VX,
  VERSION: qX,
  all: HX,
  Cancel: GX,
  isAxiosError: YX,
  spread: XX,
  toFormData: ZX,
  AxiosHeaders: JX,
  HttpStatusCode: QX,
  formToJSON: eZ,
  getAdapter: tZ,
  mergeConfig: rZ
} = Me;
let mn = null, $f = "";
const nZ = (e) => {
  mn = e;
}, oZ = (e) => {
  $f = e, br.updateBaseURL(e);
};
class F7 {
  instance;
  constructor() {
    this.instance = Me.create({
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
              const a = await Me.post(
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
const br = new F7();
class md {
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
const e_ = m.createContext(null), z7 = () => {
  const e = m.useContext(e_);
  if (!e)
    throw new Error("useAuth must be used within AuthProvider");
  return e;
}, aZ = ({ children: e, onLogout: t }) => {
  const [r, n] = m.useState(() => {
    const w = localStorage.getItem("@IdentityProvider:user");
    return w ? JSON.parse(w) : null;
  }), [o, a] = m.useState(() => {
    const w = localStorage.getItem("@IdentityProvider:contract");
    return w ? JSON.parse(w) : null;
  }), [i, s] = m.useState(() => localStorage.getItem("@IdentityProvider:accessToken")), [c, u] = m.useState(() => localStorage.getItem("@IdentityProvider:refreshToken")), l = m.useCallback((w) => {
    n(w.user), a(w.contract), s(w.accessToken), u(w.refreshToken), localStorage.setItem("@IdentityProvider:user", JSON.stringify(w.user)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(w.contract)), localStorage.setItem("@IdentityProvider:accessToken", w.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", w.refreshToken);
  }, []), d = m.useCallback(() => {
    n(null), a(null), s(null), u(null), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), t?.();
  }, [t]), p = m.useCallback(async () => {
    await md.logoutAllDevices(), d();
  }, [d]), h = m.useCallback(async () => {
    try {
      const w = await md.refreshAccessToken();
      w && (s(w.accessToken), u(w.refreshToken), localStorage.setItem("@IdentityProvider:accessToken", w.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", w.refreshToken));
    } catch {
      d();
    }
  }, [d]), v = m.useCallback(async () => {
    try {
      return await md.getActiveSessions();
    } catch {
      return [];
    }
  }, []), f = m.useCallback(
    (w) => {
      if (r) {
        const x = { ...r, ...w };
        n(x), localStorage.setItem("@IdentityProvider:user", JSON.stringify(x));
      }
    },
    [r]
  ), g = !!r && !!i, y = m.useMemo(
    () => ({
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
    }),
    [
      r,
      o,
      i,
      c,
      g,
      l,
      d,
      p,
      h,
      v,
      f
    ]
  );
  return /* @__PURE__ */ b(e_.Provider, { value: y, children: e });
}, iZ = ({
  redirectTo: e = "/",
  identityProviderUrl: t,
  onSuccess: r,
  onError: n
}) => {
  const o = Uw(), [a] = a_(), { login: i } = z7();
  return Fe(() => {
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
  }, [a, i, o, e, t, r, n]), /* @__PURE__ */ b("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background gap-6", children: /* @__PURE__ */ b("div", { className: "w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" }) });
}, sZ = () => {
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
function cZ(e = {}) {
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
        }), e.onSuccess && e.onSuccess(s), e.showSuccessMessage && i.message && Md({
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
        }), e.onError && e.onError(s), e.showErrorMessage !== !1 && Md({
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
const lZ = (e) => {
  const t = Uw(), r = zw(), n = e.basePath || "", o = (c) => {
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
  rY as AreaChart,
  aZ as AuthProvider,
  md as AuthService,
  H7 as Badge,
  eY as BarChart,
  OP as Breadcrumb,
  Yi as Button,
  iZ as Callback,
  ji as Card,
  DN as CardContent,
  MN as CardDescription,
  jN as CardFooter,
  IN as CardHeader,
  RN as CardTitle,
  pj as ChartContainer,
  ZN as Checkbox,
  hI as ConfirmModal,
  IX as DataTable,
  RX as DataTableWithDetail,
  Z7 as Dropdown,
  oD as DropdownCheckboxItem,
  rD as DropdownContent,
  Q7 as DropdownGroup,
  nD as DropdownItem,
  iD as DropdownLabel,
  eX as DropdownPortal,
  rX as DropdownRadioGroup,
  aD as DropdownRadioItem,
  sD as DropdownSeparator,
  cD as DropdownShortcut,
  tX as DropdownSub,
  tD as DropdownSubContent,
  eD as DropdownSubTrigger,
  J7 as DropdownTrigger,
  TP as GlobalLoader,
  fX as GlobalLoaderProvider,
  a0 as Input,
  tY as LineChart,
  dI as Modal,
  X7 as ModalClose,
  V0 as ModalContent,
  Y0 as ModalDescription,
  H0 as ModalFooter,
  q0 as ModalHeader,
  K0 as ModalOverlay,
  fI as ModalPortal,
  G0 as ModalTitle,
  Y7 as ModalTrigger,
  CP as Navbar,
  q7 as ODataHelper,
  kX as PageLayout,
  nY as PieChart,
  $X as ProtectedRoute,
  e2 as RadioGroup,
  t2 as RadioGroupItem,
  WD as SearchableSelect,
  BD as Select,
  iS as SelectContent,
  nX as SelectGroup,
  sS as SelectItem,
  zD as SelectLabel,
  aS as SelectScrollDownButton,
  oS as SelectScrollUpButton,
  UD as SelectSeparator,
  nS as SelectTrigger,
  FD as SelectValue,
  MX as Sheet,
  jX as SheetClose,
  iY as SheetContent,
  uY as SheetDescription,
  cY as SheetFooter,
  sY as SheetHeader,
  _T as SheetOverlay,
  oY as SheetPortal,
  lY as SheetTitle,
  DX as SheetTrigger,
  PP as Sidebar,
  cj as SidebarContent,
  lj as SidebarFooter,
  sj as SidebarHeader,
  uj as SidebarNav,
  dj as SidebarNavItem,
  s2 as Switch,
  wP as Table,
  EP as TableBody,
  ij as TableCaption,
  Ui as TableCell,
  aj as TableFooter,
  SP as TableHead,
  xP as TableHeader,
  Xo as TableRow,
  oX as Tabs,
  p2 as TabsContent,
  d2 as TabsList,
  f2 as TabsTrigger,
  uX as ThemeProvider,
  LX as ThemeSelector,
  sP as Toast,
  M2 as ToastAction,
  cP as ToastClose,
  uP as ToastDescription,
  I2 as ToastProvider,
  lP as ToastTitle,
  iP as ToastViewport,
  aX as Toaster,
  cX as Tooltip,
  oj as TooltipContent,
  sX as TooltipProvider,
  lX as TooltipTrigger,
  LN as badgeVariants,
  kN as buttonVariants,
  K as cn,
  br as httpClient,
  $2 as reducer,
  oZ as setApiBaseURL,
  nZ as setGlobalLoaderContext,
  Md as toast,
  cZ as useApi,
  lZ as useAppNavigation,
  z7 as useAuth,
  sZ as useFormErrors,
  dX as useGlobalLoader,
  fj as useTheme,
  dP as useToast
};
