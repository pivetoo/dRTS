import { jsx as b, Fragment as yt, jsxs as U } from "react/jsx-runtime";
import * as m from "react";
import At, { forwardRef as Fe, createElement as ri, useState as je, useLayoutEffect as fr, isValidElement as Kt, useContext as tr, createContext as Dt, PureComponent as xi, useCallback as he, useMemo as rr, useRef as ye, useImperativeHandle as Fw, useEffect as Le, cloneElement as Ei, Children as t_, Component as r_ } from "react";
import * as Si from "react-dom";
import n_, { createPortal as zw } from "react-dom";
import { useLocation as Uw, Navigate as o_, useNavigate as Ww, useSearchParams as i_ } from "react-router-dom";
function Nm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ks(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = Nm(o, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : Nm(e[o], null);
        }
      };
  };
}
function de(...e) {
  return m.useCallback(Ks(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  const t = /* @__PURE__ */ s_(e), r = m.forwardRef((n, o) => {
    const { children: i, ...a } = n, s = m.Children.toArray(i), c = s.find(l_);
    if (c) {
      const u = c.props.children, l = s.map((d) => d === c ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ b(t, { ...a, ref: o, children: m.isValidElement(u) ? m.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ b(t, { ...a, ref: o, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var a_ = /* @__PURE__ */ Cn("Slot");
// @__NO_SIDE_EFFECTS__
function s_(e) {
  const t = m.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (m.isValidElement(o)) {
      const a = d_(o), s = u_(i, o.props);
      return o.type !== m.Fragment && (s.ref = n ? Ks(n, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Kw = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function c_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ b(yt, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Kw, t;
}
function l_(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Kw;
}
function u_(e, t) {
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
function d_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Vw(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Vw(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function pe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Vw(e)) && (n && (n += " "), n += t);
  return n;
}
const Im = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Rm = pe, vo = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return Rm(e, r?.class, r?.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const l = r?.[u], d = i?.[u];
    if (l === null) return null;
    const p = Im(l) || Im(d);
    return o[u][p];
  }), s = r && Object.entries(r).reduce((u, l) => {
    let [d, p] = l;
    return p === void 0 || (u[d] = p), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, l) => {
    let { class: d, className: p, ...f } = l;
    return Object.entries(f).every((v) => {
      let [h, g] = v;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...s
      }[h]) : {
        ...i,
        ...s
      }[h] === g;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return Rm(e, a, c, r?.class, r?.className);
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
), Mm = (e) => {
  const t = p_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, qw = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), h_ = (e) => {
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
const v_ = Fe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => ri(
    "svg",
    {
      ref: c,
      ...m_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: qw("lucide", o),
      ...!i && !h_(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([u, l]) => ri(u, l)),
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
const Ie = (e, t) => {
  const r = Fe(
    ({ className: n, ...o }, i) => ri(v_, {
      ref: i,
      iconNode: t,
      className: qw(
        `lucide-${f_(Mm(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Mm(e), r;
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
], Dm = Ie("bell", g_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Vs = Ie("check", y_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ni = Ie("chevron-down", b_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Hw = Ie("chevron-left", w_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], qs = Ie("chevron-right", x_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Gw = Ie("chevron-up", E_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], P_ = Ie("chevrons-left", S_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], A_ = Ie("chevrons-right", O_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], T_ = Ie("circle-check", C_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Yw = Ie("circle", __);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], N_ = Ie("circle-x", k_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I_ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], R_ = Ie("info", I_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], D_ = Ie("loader-circle", M_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j_ = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], L_ = Ie("log-out", j_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $_ = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], B_ = Ie("menu", $_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], z_ = Ie("moon", F_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], W_ = Ie("plus", U_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K_ = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], V_ = Ie("refresh-cw", K_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q_ = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], H_ = Ie("search", q_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Y_ = Ie("square-pen", G_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X_ = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Z_ = Ie("sun", X_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J_ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Q_ = Ie("trash-2", J_);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], tk = Ie("triangle-alert", ek);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ff = Ie("x", rk), zf = "-", nk = (e) => {
  const t = ik(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(zf);
      return s[0] === "" && s.length !== 1 && s.shift(), Xw(s, t) || ok(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Xw = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Xw(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(zf);
  return t.validators.find(({
    validator: a
  }) => a(i))?.classGroupId;
}, jm = /^\[(.+)\]$/, ok = (e) => {
  if (jm.test(e)) {
    const t = jm.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ik = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    gd(r[o], n, o, t);
  return n;
}, gd = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Lm(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ak(o)) {
        gd(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      gd(a, Lm(t, i), r, n);
    });
  });
}, Lm = (e, t) => {
  let r = e;
  return t.split(zf).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ak = (e) => e.isThemeGetter, sk = (e) => {
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
}, yd = "!", bd = ":", ck = bd.length, lk = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, u;
    for (let v = 0; v < o.length; v++) {
      let h = o[v];
      if (a === 0 && s === 0) {
        if (h === bd) {
          i.push(o.slice(c, v)), c = v + ck;
          continue;
        }
        if (h === "/") {
          u = v;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? s++ : h === ")" && s--;
    }
    const l = i.length === 0 ? o : o.substring(c), d = uk(l), p = d !== l, f = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const o = t + bd, i = n;
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
}, uk = (e) => e.endsWith(yd) ? e.substring(0, e.length - 1) : e.startsWith(yd) ? e.substring(1) : e, dk = (e) => {
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
}, fk = (e) => ({
  cache: sk(e.cacheSize),
  parseClassName: lk(e),
  sortModifiers: dk(e),
  ...nk(e)
}), pk = /\s+/, hk = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], s = e.trim().split(pk);
  let c = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const l = s[u], {
      isExternal: d,
      modifiers: p,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: h
    } = r(l);
    if (d) {
      c = l + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!h, y = n(g ? v.substring(0, h) : v);
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
    const w = i(p).join(":"), x = f ? w + yd : w, S = x + y;
    if (a.includes(S))
      continue;
    a.push(S);
    const E = o(y, g);
    for (let P = 0; P < E.length; ++P) {
      const O = E[P];
      a.push(x + O);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function mk() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Zw(t)) && (n && (n += " "), n += r);
  return n;
}
const Zw = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Zw(e[n])) && (r && (r += " "), r += t);
  return r;
};
function vk(e, ...t) {
  let r, n, o, i = a;
  function a(c) {
    const u = t.reduce((l, d) => d(l), e());
    return r = fk(u), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const l = hk(c, r);
    return o(c, l), l;
  }
  return function() {
    return i(mk.apply(null, arguments));
  };
}
const Ve = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Jw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qw = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gk = /^\d+\/\d+$/, yk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ek = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Hn = (e) => gk.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), Wr = (e) => !!e && Number.isInteger(Number(e)), El = (e) => e.endsWith("%") && ue(e.slice(0, -1)), wr = (e) => yk.test(e), Sk = () => !0, Pk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bk.test(e) && !wk.test(e)
), e0 = () => !1, Ok = (e) => xk.test(e), Ak = (e) => Ek.test(e), Ck = (e) => !Z(e) && !J(e), Tk = (e) => go(e, n0, e0), Z = (e) => Jw.test(e), fn = (e) => go(e, o0, Pk), Sl = (e) => go(e, Rk, ue), $m = (e) => go(e, t0, e0), _k = (e) => go(e, r0, Ak), ia = (e) => go(e, i0, Ok), J = (e) => Qw.test(e), Bo = (e) => yo(e, o0), kk = (e) => yo(e, Mk), Bm = (e) => yo(e, t0), Nk = (e) => yo(e, n0), Ik = (e) => yo(e, r0), aa = (e) => yo(e, i0, !0), go = (e, t, r) => {
  const n = Jw.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, yo = (e, t, r = !1) => {
  const n = Qw.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, t0 = (e) => e === "position" || e === "percentage", r0 = (e) => e === "image" || e === "url", n0 = (e) => e === "length" || e === "size" || e === "bg-size", o0 = (e) => e === "length", Rk = (e) => e === "number", Mk = (e) => e === "family-name", i0 = (e) => e === "shadow", Dk = () => {
  const e = Ve("color"), t = Ve("font"), r = Ve("text"), n = Ve("font-weight"), o = Ve("tracking"), i = Ve("leading"), a = Ve("breakpoint"), s = Ve("container"), c = Ve("spacing"), u = Ve("radius"), l = Ve("shadow"), d = Ve("inset-shadow"), p = Ve("text-shadow"), f = Ve("drop-shadow"), v = Ve("blur"), h = Ve("perspective"), g = Ve("aspect"), y = Ve("ease"), w = Ve("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], E = () => [...S(), J, Z], P = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], A = () => [J, Z, c], _ = () => [Hn, "full", "auto", ...A()], N = () => [Wr, "none", "subgrid", J, Z], T = () => ["auto", {
    span: ["full", Wr, J, Z]
  }, Wr, J, Z], I = () => [Wr, "auto", J, Z], j = () => ["auto", "min", "max", "fr", J, Z], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...A()], z = () => [Hn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], M = () => [e, J, Z], F = () => [...S(), Bm, $m, {
    position: [J, Z]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", Nk, Tk, {
    size: [J, Z]
  }], ae = () => [El, Bo, fn], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    J,
    Z
  ], W = () => ["", ue, Bo, fn], te = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ue, El, Bm, $m], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    J,
    Z
  ], L = () => ["none", ue, J, Z], G = () => ["none", ue, J, Z], Y = () => [ue, J, Z], B = () => [Hn, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [wr],
      breakpoint: [wr],
      color: [Sk],
      container: [wr],
      "drop-shadow": [wr],
      ease: ["in", "out", "in-out"],
      font: [Ck],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [wr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [wr],
      shadow: [wr],
      spacing: ["px", ue],
      text: [wr],
      "text-shadow": [wr],
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
        aspect: ["auto", "square", Hn, Z, J, g]
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
        columns: [ue, Z, J, s]
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
        object: E()
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
        z: [Wr, "auto", J, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Hn, "full", "auto", s, ...A()]
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
        flex: [ue, Hn, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, J, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, J, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Wr, "first", "last", "none", J, Z]
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
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
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
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
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
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
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
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
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
        size: z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...z()]
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
          ...z()
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
          ...z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Bo, fn]
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
        font: [n, J, Sl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", El, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [kk, Z, t]
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
        tracking: [o, J, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", J, Sl]
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
        "list-image": ["none", J, Z]
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
        list: ["disc", "decimal", "none", J, Z]
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
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ue, "from-font", "auto", J, fn]
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
        "underline-offset": [ue, "auto", J, Z]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, Z]
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
        content: ["none", J, Z]
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
        bg: oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: H()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Wr, J, Z],
          radial: ["", J, Z],
          conic: [Wr, J, Z]
        }, Ik, _k]
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
        from: ae()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ae()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ae()
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
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: W()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
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
        "divide-y": W()
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
        border: [...te(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...te(), "hidden", "none"]
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
        outline: [...te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ue, J, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, Bo, fn]
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
          aa,
          ia
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
        "inset-shadow": ["none", d, aa, ia]
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
        ring: W()
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
        "ring-offset": [ue, fn]
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
        "inset-ring": W()
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
        "text-shadow": ["none", p, aa, ia]
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
        opacity: [ue, J, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "mask-linear": [ue]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ue]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
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
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: H()
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
        mask: ["none", J, Z]
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
          J,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ue, J, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, J, Z]
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
          f,
          aa,
          ia
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
        grayscale: ["", ue, J, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, J, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, J, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, J, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, J, Z]
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
          J,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ue, J, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, J, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, J, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, J, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, J, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, J, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, J, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, J, Z]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, Z]
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
        duration: [ue, "initial", J, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, J, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, J, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, J, Z]
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
        perspective: [h, J, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
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
        scale: G()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": G()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": G()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": G()
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
        skew: Y()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Y()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Y()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [J, Z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
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
        translate: B()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": B()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": B()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": B()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, Z]
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
        "will-change": ["auto", "scroll", "contents", "transform", J, Z]
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
        stroke: [ue, Bo, fn, Sl]
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
}, jk = /* @__PURE__ */ vk(Dk);
class a7 {
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
function V(...e) {
  return jk(pe(e));
}
function Lk(e) {
  if (!e) return "";
  const t = e.trim().split(" ").filter(Boolean);
  return t.length >= 2 ? `${t[0][0]}${t[t.length - 1][0]}`.toUpperCase() : e.substring(0, 2).toUpperCase();
}
const $k = vo(
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
        "outline-secondary": "border border-secondary bg-background text-secondary hover:bg-secondary/10",
        "outline-primary": "border border-primary bg-background text-primary hover:bg-primary/10",
        "outline-warning": "border border-warning bg-background text-warning hover:bg-warning/10",
        "outline-danger": "border border-destructive bg-background text-destructive hover:bg-destructive/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        text: "hover:underline",
        link: "text-primary underline-offset-4 hover:underline",
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
), Yr = m.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, loading: o = !1, fullWidth: i = !1, icon: a, iconPosition: s = "left", children: c, disabled: u, ...l }, d) => {
    const p = n ? a_ : "button", f = u || o;
    return /* @__PURE__ */ U(
      p,
      {
        className: V(
          $k({ variant: t, size: r, className: e }),
          i && "w-full"
        ),
        ref: d,
        disabled: f,
        ...l,
        children: [
          o && /* @__PURE__ */ b(D_, { className: "animate-spin" }),
          !o && a && s === "left" && a,
          c,
          !o && a && s === "right" && a
        ]
      }
    );
  }
);
Yr.displayName = "Button";
const wd = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: V(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
wd.displayName = "Card";
const Bk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: V("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Bk.displayName = "CardHeader";
const Fk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: V(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Fk.displayName = "CardTitle";
const zk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: V("text-sm text-muted-foreground", e),
    ...t
  }
));
zk.displayName = "CardDescription";
const Uk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: V("p-6 pt-0", e), ...t }));
Uk.displayName = "CardContent";
const Wk = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "div",
  {
    ref: r,
    className: V("flex items-center p-6 pt-0", e),
    ...t
  }
));
Wk.displayName = "CardFooter";
const a0 = m.forwardRef(
  ({ className: e, type: t, error: r, helperText: n, ...o }, i) => /* @__PURE__ */ U("div", { className: "w-full", children: [
    /* @__PURE__ */ b(
      "input",
      {
        type: t,
        className: V(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          r && "border-destructive focus-visible:ring-destructive",
          e
        ),
        ref: i,
        ...o
      }
    ),
    n && /* @__PURE__ */ b("p", { className: V(
      "mt-1 text-xs",
      r ? "text-destructive" : "text-muted-foreground"
    ), children: n })
  ] })
);
a0.displayName = "Input";
const Kk = vo(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        error: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
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
function s7({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ b("div", { className: V(Kk({ variant: t }), e), ...r });
}
function Vk(e, t) {
  const r = m.createContext(t), n = (i) => {
    const { children: a, ...s } = i, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ b(r.Provider, { value: c, children: a });
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
function Et(e, t = []) {
  let r = [];
  function n(i, a) {
    const s = m.createContext(a), c = r.length;
    r = [...r, a];
    const u = (d) => {
      const { scope: p, children: f, ...v } = d, h = p?.[e]?.[c] || s, g = m.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ b(h.Provider, { value: g, children: f });
    };
    u.displayName = i + "Provider";
    function l(d, p) {
      const f = p?.[e]?.[c] || s, v = m.useContext(f);
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
  return o.scopeName = e, [n, qk(o, ...t)];
}
function qk(...e) {
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
function q(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var nt = globalThis?.document ? m.useLayoutEffect : () => {
}, Hk = m[" useInsertionEffect ".trim().toString()] || nt;
function qt({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, i, a] = Gk({
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
        const d = Yk(l) ? l(e) : l;
        d !== e && a.current?.(d);
      } else
        i(l);
    },
    [s, e, i, a]
  );
  return [c, u];
}
function Gk({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), o = m.useRef(r), i = m.useRef(t);
  return Hk(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== r && (i.current?.(r), o.current = r);
  }, [r, o]), [r, n, i];
}
function Yk(e) {
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
function Xk(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var jt = (e) => {
  const { present: t, children: r } = e, n = Zk(t), o = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), i = de(n.ref, Jk(o));
  return typeof r == "function" || n.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
jt.displayName = "Presence";
function Zk(e) {
  const [t, r] = m.useState(), n = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = Xk(a, {
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
    const u = sa(n.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), nt(() => {
    const u = n.current, l = o.current;
    if (l !== e) {
      const p = i.current, f = sa(u);
      e ? c("MOUNT") : f === "none" || u?.display === "none" ? c("UNMOUNT") : c(l && p !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), nt(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (f) => {
        const h = sa(n.current).includes(CSS.escape(f.animationName));
        if (f.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (f) => {
        f.target === t && (i.current = sa(n.current));
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
function sa(e) {
  return e?.animationName || "none";
}
function Jk(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Qk = [
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
], ne = Qk.reduce((e, t) => {
  const r = /* @__PURE__ */ Cn(`Primitive.${t}`), n = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ b(c, { ...s, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Uf(e, t) {
  e && Si.flushSync(() => e.dispatchEvent(t));
}
var Ys = "Checkbox", [eN] = Et(Ys), [tN, Wf] = eN(Ys);
function rN(e) {
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
  } = e, [p, f] = qt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Ys
  }), [v, h] = m.useState(null), [g, y] = m.useState(null), w = m.useRef(!1), x = v ? !!a || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    disabled: i,
    setChecked: f,
    control: v,
    setControl: h,
    name: s,
    form: a,
    value: l,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: Xr(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ b(
    tN,
    {
      scope: t,
      ...S,
      children: nN(d) ? d(S) : n
    }
  );
}
var s0 = "CheckboxTrigger", c0 = m.forwardRef(
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
      isFormControl: f,
      bubbleInput: v
    } = Wf(s0, e), h = de(o, l), g = m.useRef(c);
    return m.useEffect(() => {
      const y = i?.form;
      if (y) {
        const w = () => d(g.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [i, d]), /* @__PURE__ */ b(
      ne.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Xr(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": p0(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: h,
        onKeyDown: q(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: q(r, (y) => {
          d((w) => Xr(w) ? !0 : !w), v && f && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
c0.displayName = s0;
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
    return /* @__PURE__ */ b(
      rN,
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
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ U(yt, { children: [
          /* @__PURE__ */ b(
            c0,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ b(
            f0,
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
var l0 = "CheckboxIndicator", u0 = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = Wf(l0, r);
    return /* @__PURE__ */ b(
      jt,
      {
        present: n || Xr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ b(
          ne.span,
          {
            "data-state": p0(i.checked),
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
u0.displayName = l0;
var d0 = "CheckboxBubbleInput", f0 = m.forwardRef(
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
      setBubbleInput: f
    } = Wf(d0, e), v = de(r, f), h = Hs(i), g = Gs(n);
    m.useEffect(() => {
      const w = p;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, P = !o.current;
      if (h !== i && E) {
        const O = new Event("click", { bubbles: P });
        w.indeterminate = Xr(i), E.call(w, Xr(i) ? !1 : i), w.dispatchEvent(O);
      }
    }, [p, h, i, o]);
    const y = m.useRef(Xr(i) ? !1 : i);
    return /* @__PURE__ */ b(
      ne.input,
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
f0.displayName = d0;
function nN(e) {
  return typeof e == "function";
}
function Xr(e) {
  return e === "indeterminate";
}
function p0(e) {
  return Xr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const oN = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  Kf,
  {
    ref: r,
    className: V(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(
      u0,
      {
        className: V("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ b(Vs, { className: "h-4 w-4" })
      }
    )
  }
));
oN.displayName = Kf.displayName;
var iN = m[" useId ".trim().toString()] || (() => {
}), aN = 0;
function Nt(e) {
  const [t, r] = m.useState(iN());
  return nt(() => {
    r((n) => n ?? String(aN++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function pt(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...r) => t.current?.(...r), []);
}
function sN(e, t = globalThis?.document) {
  const r = pt(e);
  m.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var cN = "DismissableLayer", xd = "dismissableLayer.update", lN = "dismissableLayer.pointerDownOutside", uN = "dismissableLayer.focusOutside", Fm, h0 = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bo = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, u = m.useContext(h0), [l, d] = m.useState(null), p = l?.ownerDocument ?? globalThis?.document, [, f] = m.useState({}), v = de(t, (O) => d(O)), h = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g), w = l ? h.indexOf(l) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, E = fN((O) => {
      const A = O.target, _ = [...u.branches].some((N) => N.contains(A));
      !S || _ || (o?.(O), a?.(O), O.defaultPrevented || s?.());
    }, p), P = pN((O) => {
      const A = O.target;
      [...u.branches].some((N) => N.contains(A)) || (i?.(O), a?.(O), O.defaultPrevented || s?.());
    }, p);
    return sN((O) => {
      w === u.layers.size - 1 && (n?.(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
    }, p), m.useEffect(() => {
      if (l)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fm = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), zm(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Fm);
        };
    }, [l, p, r, u]), m.useEffect(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), zm());
    }, [l, u]), m.useEffect(() => {
      const O = () => f({});
      return document.addEventListener(xd, O), () => document.removeEventListener(xd, O);
    }, []), /* @__PURE__ */ b(
      ne.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
bo.displayName = cN;
var dN = "DismissableLayerBranch", m0 = m.forwardRef((e, t) => {
  const r = m.useContext(h0), n = m.useRef(null), o = de(t, n);
  return m.useEffect(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ b(ne.div, { ...e, ref: o });
});
m0.displayName = dN;
function fN(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          v0(
            lN,
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
function pN(e, t = globalThis?.document) {
  const r = pt(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !n.current && v0(uN, r, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function zm() {
  const e = new CustomEvent(xd);
  document.dispatchEvent(e);
}
function v0(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, i) : o.dispatchEvent(i);
}
var hN = bo, mN = m0, Pl = "focusScope.autoFocusOnMount", Ol = "focusScope.autoFocusOnUnmount", Um = { bubbles: !1, cancelable: !0 }, vN = "FocusScope", Xs = m.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = m.useState(null), u = pt(o), l = pt(i), d = m.useRef(null), p = de(t, (h) => c(h)), f = m.useRef({
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
      let h = function(x) {
        if (f.paused || !s) return;
        const S = x.target;
        s.contains(S) ? d.current = S : Kr(d.current, { select: !0 });
      }, g = function(x) {
        if (f.paused || !s) return;
        const S = x.relatedTarget;
        S !== null && (s.contains(S) || Kr(d.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && Kr(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [n, s, f.paused]), m.useEffect(() => {
    if (s) {
      Km.add(f);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const y = new CustomEvent(Pl, Um);
        s.addEventListener(Pl, u), s.dispatchEvent(y), y.defaultPrevented || (gN(EN(g0(s)), { select: !0 }), document.activeElement === h && Kr(s));
      }
      return () => {
        s.removeEventListener(Pl, u), setTimeout(() => {
          const y = new CustomEvent(Ol, Um);
          s.addEventListener(Ol, l), s.dispatchEvent(y), y.defaultPrevented || Kr(h ?? document.body, { select: !0 }), s.removeEventListener(Ol, l), Km.remove(f);
        }, 0);
      };
    }
  }, [s, u, l, f]);
  const v = m.useCallback(
    (h) => {
      if (!r && !n || f.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (g && y) {
        const w = h.currentTarget, [x, S] = yN(w);
        x && S ? !h.shiftKey && y === S ? (h.preventDefault(), r && Kr(x, { select: !0 })) : h.shiftKey && y === x && (h.preventDefault(), r && Kr(S, { select: !0 })) : y === w && h.preventDefault();
      }
    },
    [r, n, f.paused]
  );
  return /* @__PURE__ */ b(ne.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
});
Xs.displayName = vN;
function gN(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Kr(n, { select: t }), document.activeElement !== r) return;
}
function yN(e) {
  const t = g0(e), r = Wm(t, e), n = Wm(t.reverse(), e);
  return [r, n];
}
function g0(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Wm(e, t) {
  for (const r of e)
    if (!bN(r, { upTo: t })) return r;
}
function bN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function wN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && wN(e) && t && e.select();
  }
}
var Km = xN();
function xN() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Vm(e, t), e.unshift(t);
    },
    remove(t) {
      e = Vm(e, t), e[0]?.resume();
    }
  };
}
function Vm(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function EN(e) {
  return e.filter((t) => t.tagName !== "A");
}
var SN = "Portal", Pi = m.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, i] = m.useState(!1);
  nt(() => i(!0), []);
  const a = r || o && globalThis?.document?.body;
  return a ? n_.createPortal(/* @__PURE__ */ b(ne.div, { ...n, ref: t }), a) : null;
});
Pi.displayName = SN;
var Al = 0;
function Vf() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? qm()), document.body.insertAdjacentElement("beforeend", e[1] ?? qm()), Al++, () => {
      Al === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Al--;
    };
  }, []);
}
function qm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var sr = function() {
  return sr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, sr.apply(this, arguments);
};
function y0(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function PN(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ja = "right-scroll-bar-position", La = "width-before-scroll-bar", ON = "with-scroll-bars-hidden", AN = "--removed-body-scroll-bar-size";
function Cl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function CN(e, t) {
  var r = je(function() {
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
var TN = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Hm = /* @__PURE__ */ new WeakMap();
function _N(e, t) {
  var r = CN(null, function(n) {
    return e.forEach(function(o) {
      return Cl(o, n);
    });
  });
  return TN(function() {
    var n = Hm.get(r);
    if (n) {
      var o = new Set(n), i = new Set(e), a = r.current;
      o.forEach(function(s) {
        i.has(s) || Cl(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Cl(s, a);
      });
    }
    Hm.set(r, e);
  }, [e]), r;
}
function kN(e) {
  return e;
}
function NN(e, t) {
  t === void 0 && (t = kN);
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
function IN(e) {
  e === void 0 && (e = {});
  var t = NN(null);
  return t.options = sr({ async: !0, ssr: !1 }, e), t;
}
var b0 = function(e) {
  var t = e.sideCar, r = y0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, sr({}, r));
};
b0.isSideCarExport = !0;
function RN(e, t) {
  return e.useMedium(t), b0;
}
var w0 = IN(), Tl = function() {
}, Zs = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: Tl,
    onWheelCapture: Tl,
    onTouchMoveCapture: Tl
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, p = e.sideCar, f = e.noRelative, v = e.noIsolation, h = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = y0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, P = _N([r, t]), O = sr(sr({}, S), o);
  return m.createElement(
    m.Fragment,
    null,
    l && m.createElement(E, { sideCar: w0, removeScrollBar: u, shards: d, noRelative: f, noIsolation: v, inert: h, setCallbacks: i, allowPinchZoom: !!g, lockRef: r, gapMode: x }),
    a ? m.cloneElement(m.Children.only(s), sr(sr({}, O), { ref: P })) : m.createElement(w, sr({}, O, { className: c, ref: P }), s)
  );
});
Zs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zs.classNames = {
  fullWidth: La,
  zeroRight: ja
};
var MN = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function DN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = MN();
  return t && e.setAttribute("nonce", t), e;
}
function jN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function LN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $N = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = DN()) && (jN(t, r), LN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, BN = function() {
  var e = $N();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, x0 = function() {
  var e = BN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, FN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _l = function(e) {
  return parseInt(e || "", 10) || 0;
}, zN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_l(r), _l(n), _l(o)];
}, UN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return FN;
  var t = zN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, WN = x0(), eo = "data-scroll-locked", KN = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(ON, ` {
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
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ja, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(La, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ja, " .").concat(ja, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(eo, `] {
    `).concat(AN, ": ").concat(s, `px;
  }
`);
}, Gm = function() {
  var e = parseInt(document.body.getAttribute(eo) || "0", 10);
  return isFinite(e) ? e : 0;
}, VN = function() {
  m.useEffect(function() {
    return document.body.setAttribute(eo, (Gm() + 1).toString()), function() {
      var e = Gm() - 1;
      e <= 0 ? document.body.removeAttribute(eo) : document.body.setAttribute(eo, e.toString());
    };
  }, []);
}, qN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  VN();
  var i = m.useMemo(function() {
    return UN(o);
  }, [o]);
  return m.createElement(WN, { styles: KN(i, !t, o, r ? "" : "!important") });
}, Ed = !1;
if (typeof window < "u")
  try {
    var ca = Object.defineProperty({}, "passive", {
      get: function() {
        return Ed = !0, !0;
      }
    });
    window.addEventListener("test", ca, ca), window.removeEventListener("test", ca, ca);
  } catch {
    Ed = !1;
  }
var Gn = Ed ? { passive: !1 } : !1, HN = function(e) {
  return e.tagName === "TEXTAREA";
}, E0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !HN(e) && r[t] === "visible")
  );
}, GN = function(e) {
  return E0(e, "overflowY");
}, YN = function(e) {
  return E0(e, "overflowX");
}, Ym = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = S0(e, n);
    if (o) {
      var i = P0(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, XN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ZN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, S0 = function(e, t) {
  return e === "v" ? GN(t) : YN(t);
}, P0 = function(e, t) {
  return e === "v" ? XN(t) : ZN(t);
}, JN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, QN = function(e, t, r, n, o) {
  var i = JN(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, c = t.contains(s), u = !1, l = a > 0, d = 0, p = 0;
  do {
    if (!s)
      break;
    var f = P0(e, s), v = f[0], h = f[1], g = f[2], y = h - g - i * v;
    (v || y) && S0(e, s) && (d += y, p += v);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(p) < 1) && (u = !0), u;
}, la = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xm = function(e) {
  return [e.deltaX, e.deltaY];
}, Zm = function(e) {
  return e && "current" in e ? e.current : e;
}, eI = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tI = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rI = 0, Yn = [];
function nI(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), o = m.useState(rI++)[0], i = m.useState(x0)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = PN([e.lockRef.current], (e.shards || []).map(Zm), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = la(h), w = r.current, x = "deltaX" in h ? h.deltaX : w[0] - y[0], S = "deltaY" in h ? h.deltaY : w[1] - y[1], E, P = h.target, O = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && O === "h" && P.type === "range")
      return !1;
    var A = Ym(O, P);
    if (!A)
      return !0;
    if (A ? E = O : (E = O === "v" ? "h" : "v", A = Ym(O, P)), !A)
      return !1;
    if (!n.current && "changedTouches" in h && (x || S) && (n.current = E), !E)
      return !0;
    var _ = n.current || E;
    return QN(_, g, h, _ === "h" ? x : S);
  }, []), c = m.useCallback(function(h) {
    var g = h;
    if (!(!Yn.length || Yn[Yn.length - 1] !== i)) {
      var y = "deltaY" in g ? Xm(g) : la(g), w = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && eI(E.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var x = (a.current.shards || []).map(Zm).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), S = x.length > 0 ? s(g, x[0]) : !a.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(h, g, y, w) {
    var x = { name: h, delta: g, target: y, should: w, shadowParent: oI(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), l = m.useCallback(function(h) {
    r.current = la(h), n.current = void 0;
  }, []), d = m.useCallback(function(h) {
    u(h.type, Xm(h), h.target, s(h, e.lockRef.current));
  }, []), p = m.useCallback(function(h) {
    u(h.type, la(h), h.target, s(h, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Yn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Gn), document.addEventListener("touchmove", c, Gn), document.addEventListener("touchstart", l, Gn), function() {
      Yn = Yn.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", c, Gn), document.removeEventListener("touchmove", c, Gn), document.removeEventListener("touchstart", l, Gn);
    };
  }, []);
  var f = e.removeScrollBar, v = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    v ? m.createElement(i, { styles: tI(o) }) : null,
    f ? m.createElement(qN, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function oI(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const iI = RN(w0, nI);
var Js = m.forwardRef(function(e, t) {
  return m.createElement(Zs, sr({}, e, { ref: t, sideCar: iI }));
});
Js.classNames = Zs.classNames;
var aI = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xn = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), da = {}, kl = 0, O0 = function(e) {
  return e && (e.host || O0(e.parentNode));
}, sI = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = O0(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, cI = function(e, t, r, n) {
  var o = sI(t, Array.isArray(e) ? e : [e]);
  da[r] || (da[r] = /* @__PURE__ */ new WeakMap());
  var i = da[r], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        l(p);
      else
        try {
          var f = p.getAttribute(n), v = f !== null && f !== "false", h = (Xn.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
          Xn.set(p, h), i.set(p, g), a.push(p), h === 1 && v && ua.set(p, !0), g === 1 && p.setAttribute(r, "true"), v || p.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return l(t), s.clear(), kl++, function() {
    a.forEach(function(d) {
      var p = Xn.get(d) - 1, f = i.get(d) - 1;
      Xn.set(d, p), i.set(d, f), p || (ua.has(d) || d.removeAttribute(n), ua.delete(d)), f || d.removeAttribute(r);
    }), kl--, kl || (Xn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), da = {});
  };
}, qf = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = aI(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), cI(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Qs = "Dialog", [A0] = Et(Qs), [lI, nr] = A0(Qs), C0 = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u, l] = qt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Qs
  });
  return /* @__PURE__ */ b(
    lI,
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
      modal: a,
      children: r
    }
  );
};
C0.displayName = Qs;
var T0 = "DialogTrigger", _0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nr(T0, r), i = de(t, o.triggerRef);
    return /* @__PURE__ */ b(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yf(o.open),
        ...n,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_0.displayName = T0;
var Hf = "DialogPortal", [uI, k0] = A0(Hf, {
  forceMount: void 0
}), N0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, i = nr(Hf, t);
  return /* @__PURE__ */ b(uI, { scope: t, forceMount: r, children: m.Children.map(n, (a) => /* @__PURE__ */ b(jt, { present: r || i.open, children: /* @__PURE__ */ b(Pi, { asChild: !0, container: o, children: a }) })) });
};
N0.displayName = Hf;
var Ga = "DialogOverlay", I0 = m.forwardRef(
  (e, t) => {
    const r = k0(Ga, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = nr(Ga, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ b(jt, { present: n || i.open, children: /* @__PURE__ */ b(fI, { ...o, ref: t }) }) : null;
  }
);
I0.displayName = Ga;
var dI = /* @__PURE__ */ Cn("DialogOverlay.RemoveScroll"), fI = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nr(Ga, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ b(Js, { as: dI, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ b(
        ne.div,
        {
          "data-state": Yf(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Tn = "DialogContent", R0 = m.forwardRef(
  (e, t) => {
    const r = k0(Tn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, i = nr(Tn, e.__scopeDialog);
    return /* @__PURE__ */ b(jt, { present: n || i.open, children: i.modal ? /* @__PURE__ */ b(pI, { ...o, ref: t }) : /* @__PURE__ */ b(hI, { ...o, ref: t }) });
  }
);
R0.displayName = Tn;
var pI = m.forwardRef(
  (e, t) => {
    const r = nr(Tn, e.__scopeDialog), n = m.useRef(null), o = de(t, r.contentRef, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return qf(i);
    }, []), /* @__PURE__ */ b(
      M0,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), hI = m.forwardRef(
  (e, t) => {
    const r = nr(Tn, e.__scopeDialog), n = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ b(
      M0,
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
), M0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = nr(Tn, r), c = m.useRef(null), u = de(t, c);
    return Vf(), /* @__PURE__ */ U(yt, { children: [
      /* @__PURE__ */ b(
        Xs,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ b(
            bo,
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
      /* @__PURE__ */ U(yt, { children: [
        /* @__PURE__ */ b(mI, { titleId: s.titleId }),
        /* @__PURE__ */ b(gI, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Gf = "DialogTitle", D0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nr(Gf, r);
    return /* @__PURE__ */ b(ne.h2, { id: o.titleId, ...n, ref: t });
  }
);
D0.displayName = Gf;
var j0 = "DialogDescription", L0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nr(j0, r);
    return /* @__PURE__ */ b(ne.p, { id: o.descriptionId, ...n, ref: t });
  }
);
L0.displayName = j0;
var $0 = "DialogClose", B0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nr($0, r);
    return /* @__PURE__ */ b(
      ne.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
B0.displayName = $0;
function Yf(e) {
  return e ? "open" : "closed";
}
var F0 = "DialogTitleWarning", [c7, z0] = Vk(F0, {
  contentName: Tn,
  titleName: Gf,
  docsSlug: "dialog"
}), mI = ({ titleId: e }) => {
  const t = z0(F0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, vI = "DialogDescriptionWarning", gI = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z0(vI).contentName}}.`;
  return m.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, U0 = C0, W0 = _0, K0 = N0, ec = I0, tc = R0, rc = D0, nc = L0, oc = B0;
const yI = U0, l7 = W0, bI = K0, u7 = oc, V0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  ec,
  {
    ref: r,
    className: V(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
V0.displayName = ec.displayName;
const wI = vo(
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
), q0 = m.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ U(bI, { children: [
  /* @__PURE__ */ b(V0, {}),
  /* @__PURE__ */ U(
    tc,
    {
      ref: o,
      className: V(wI({ size: r }), e),
      ...n,
      children: [
        t,
        /* @__PURE__ */ U(oc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b(Ff, { className: "h-4 w-4" }),
          /* @__PURE__ */ b("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
q0.displayName = tc.displayName;
const H0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: V(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
H0.displayName = "ModalHeader";
const G0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: V(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
G0.displayName = "ModalFooter";
const Y0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rc,
  {
    ref: r,
    className: V(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Y0.displayName = rc.displayName;
const X0 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nc,
  {
    ref: r,
    className: V("text-sm text-muted-foreground", e),
    ...t
  }
));
X0.displayName = nc.displayName;
const xI = m.forwardRef(
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
  }, l) => /* @__PURE__ */ b(yI, { open: e, onOpenChange: t, children: /* @__PURE__ */ U(q0, { ref: l, children: [
    /* @__PURE__ */ U(H0, { children: [
      /* @__PURE__ */ b(Y0, { children: r }),
      n && /* @__PURE__ */ b(X0, { children: n })
    ] }),
    /* @__PURE__ */ U(G0, { children: [
      /* @__PURE__ */ b(Yr, { variant: "outline", onClick: () => {
        s?.(), t?.(!1);
      }, disabled: u, children: i }),
      /* @__PURE__ */ b(Yr, { variant: c, onClick: () => {
        a?.();
      }, loading: u, children: o })
    ] })
  ] }) })
);
xI.displayName = "ConfirmModal";
function ic(e) {
  const t = e + "CollectionProvider", [r, n] = Et(t), [o, i] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: g, children: y } = h, w = At.useRef(null), x = At.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b(o, { scope: g, itemMap: x, collectionRef: w, children: y });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Cn(s), u = At.forwardRef(
    (h, g) => {
      const { scope: y, children: w } = h, x = i(s, y), S = de(g, x.collectionRef);
      return /* @__PURE__ */ b(c, { ref: S, children: w });
    }
  );
  u.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Cn(l), f = At.forwardRef(
    (h, g) => {
      const { scope: y, children: w, ...x } = h, S = At.useRef(null), E = de(g, S), P = i(l, y);
      return At.useEffect(() => (P.itemMap.set(S, { ref: S, ...x }), () => void P.itemMap.delete(S))), /* @__PURE__ */ b(p, { [d]: "", ref: E, children: w });
    }
  );
  f.displayName = l;
  function v(h) {
    const g = i(e + "CollectionConsumer", h);
    return At.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, O) => x.indexOf(P.ref.current) - x.indexOf(O.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: f },
    v,
    n
  ];
}
var EI = m.createContext(void 0);
function Oi(e) {
  const t = m.useContext(EI);
  return e || t || "ltr";
}
const SI = ["top", "right", "bottom", "left"], Jr = Math.min, Tt = Math.max, Ya = Math.round, fa = Math.floor, ur = (e) => ({
  x: e,
  y: e
}), PI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, OI = {
  start: "end",
  end: "start"
};
function Sd(e, t, r) {
  return Tt(e, Jr(t, r));
}
function _r(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kr(e) {
  return e.split("-")[0];
}
function wo(e) {
  return e.split("-")[1];
}
function Xf(e) {
  return e === "x" ? "y" : "x";
}
function Zf(e) {
  return e === "y" ? "height" : "width";
}
const AI = /* @__PURE__ */ new Set(["top", "bottom"]);
function cr(e) {
  return AI.has(kr(e)) ? "y" : "x";
}
function Jf(e) {
  return Xf(cr(e));
}
function CI(e, t, r) {
  r === void 0 && (r = !1);
  const n = wo(e), o = Jf(e), i = Zf(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Xa(a)), [a, Xa(a)];
}
function TI(e) {
  const t = Xa(e);
  return [Pd(e), t, Pd(t)];
}
function Pd(e) {
  return e.replace(/start|end/g, (t) => OI[t]);
}
const Jm = ["left", "right"], Qm = ["right", "left"], _I = ["top", "bottom"], kI = ["bottom", "top"];
function NI(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Qm : Jm : t ? Jm : Qm;
    case "left":
    case "right":
      return t ? _I : kI;
    default:
      return [];
  }
}
function II(e, t, r, n) {
  const o = wo(e);
  let i = NI(kr(e), r === "start", n);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Pd)))), i;
}
function Xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => PI[t]);
}
function RI(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Z0(e) {
  return typeof e != "number" ? RI(e) : {
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
function ev(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = cr(t), a = Jf(t), s = Zf(a), c = kr(t), u = i === "y", l = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, p = n[s] / 2 - o[s] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: l,
        y: n.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: n.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (wo(t)) {
    case "start":
      f[a] -= p * (r && u ? -1 : 1);
      break;
    case "end":
      f[a] += p * (r && u ? -1 : 1);
      break;
  }
  return f;
}
const MI = async (e, t, r) => {
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
  } = ev(u, n, c), p = n, f = {}, v = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: g,
      fn: y
    } = s[h], {
      x: w,
      y: x,
      data: S,
      reset: E
    } = await y({
      x: l,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = w ?? l, d = x ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...S
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: l,
      y: d
    } = ev(u, p, c)), h = -1);
  }
  return {
    x: l,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function oi(e, t) {
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
    padding: f = 0
  } = _r(t, e), v = Z0(f), g = s[p ? d === "floating" ? "reference" : "floating" : d], y = Za(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(g))) == null || r ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), w = d === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Za(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return {
    top: (y.top - E.top + v.top) / S.y,
    bottom: (E.bottom - y.bottom + v.bottom) / S.y,
    left: (y.left - E.left + v.left) / S.x,
    right: (E.right - y.right + v.right) / S.x
  };
}
const DI = (e) => ({
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
    } = _r(e, t) || {};
    if (u == null)
      return {};
    const d = Z0(l), p = {
      x: r,
      y: n
    }, f = Jf(o), v = Zf(f), h = await a.getDimensions(u), g = f === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = i.reference[v] + i.reference[f] - p[f] - i.floating[v], E = p[f] - i.reference[f], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let O = P ? P[x] : 0;
    (!O || !await (a.isElement == null ? void 0 : a.isElement(P))) && (O = s.floating[x] || i.floating[v]);
    const A = S / 2 - E / 2, _ = O / 2 - h[v] / 2 - 1, N = Jr(d[y], _), T = Jr(d[w], _), I = N, j = O - h[v] - T, C = O / 2 - h[v] / 2 + A, D = Sd(I, C, j), $ = !c.arrow && wo(o) != null && C !== D && i.reference[v] / 2 - (C < I ? N : T) - h[v] / 2 < 0, z = $ ? C < I ? C - I : C - j : 0;
    return {
      [f]: p[f] + z,
      data: {
        [f]: D,
        centerOffset: C - D - z,
        ...$ && {
          alignmentOffset: z
        }
      },
      reset: $
    };
  }
}), jI = function(e) {
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
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...g
      } = _r(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const y = kr(o), w = cr(s), x = kr(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), E = p || (x || !h ? [Xa(s)] : TI(s)), P = v !== "none";
      !p && P && E.push(...II(s, h, v, S));
      const O = [s, ...E], A = await oi(t, g), _ = [];
      let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (l && _.push(A[y]), d) {
        const C = CI(o, a, S);
        _.push(A[C[0]], A[C[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: _
      }], !_.every((C) => C <= 0)) {
        var T, I;
        const C = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, D = O[C];
        if (D && (!(d === "alignment" ? w !== cr(D) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((M) => cr(M.placement) === w ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: N
            },
            reset: {
              placement: D
            }
          };
        let $ = (I = N.filter((z) => z.overflows[0] <= 0).sort((z, M) => z.overflows[1] - M.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var j;
              const z = (j = N.filter((M) => {
                if (P) {
                  const F = cr(M.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, oe) => F + oe, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : j[0];
              z && ($ = z);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function tv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rv(e) {
  return SI.some((t) => e[t] >= 0);
}
const LI = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = _r(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await oi(t, {
            ...o,
            elementContext: "reference"
          }), a = tv(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: rv(a)
            }
          };
        }
        case "escaped": {
          const i = await oi(t, {
            ...o,
            altBoundary: !0
          }), a = tv(i, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: rv(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, J0 = /* @__PURE__ */ new Set(["left", "top"]);
async function $I(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = kr(r), s = wo(r), c = cr(r) === "y", u = J0.has(a) ? -1 : 1, l = i && c ? -1 : 1, d = _r(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
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
  return s && typeof v == "number" && (f = s === "end" ? v * -1 : v), c ? {
    x: f * l,
    y: p * u
  } : {
    x: p * u,
    y: f * l
  };
}
const BI = function(e) {
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
      } = t, c = await $I(t, e);
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
}, FI = function(e) {
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
      } = _r(e, t), u = {
        x: r,
        y: n
      }, l = await oi(t, c), d = cr(kr(o)), p = Xf(d);
      let f = u[p], v = u[d];
      if (i) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = f + l[g], x = f - l[y];
        f = Sd(w, f, x);
      }
      if (a) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = v + l[g], x = v - l[y];
        v = Sd(w, v, x);
      }
      const h = s.fn({
        ...t,
        [p]: f,
        [d]: v
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [p]: i,
            [d]: a
          }
        }
      };
    }
  };
}, zI = function(e) {
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
      } = _r(e, t), l = {
        x: r,
        y: n
      }, d = cr(o), p = Xf(d);
      let f = l[p], v = l[d];
      const h = _r(s, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const x = p === "y" ? "height" : "width", S = i.reference[p] - i.floating[x] + g.mainAxis, E = i.reference[p] + i.reference[x] - g.mainAxis;
        f < S ? f = S : f > E && (f = E);
      }
      if (u) {
        var y, w;
        const x = p === "y" ? "width" : "height", S = J0.has(kr(o)), E = i.reference[d] - i.floating[x] + (S && ((y = a.offset) == null ? void 0 : y[d]) || 0) + (S ? 0 : g.crossAxis), P = i.reference[d] + i.reference[x] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[d]) || 0) - (S ? g.crossAxis : 0);
        v < E ? v = E : v > P && (v = P);
      }
      return {
        [p]: f,
        [d]: v
      };
    }
  };
}, UI = function(e) {
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
      } = _r(e, t), l = await oi(t, u), d = kr(o), p = wo(o), f = cr(o) === "y", {
        width: v,
        height: h
      } = i.floating;
      let g, y;
      d === "top" || d === "bottom" ? (g = d, y = p === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = p === "end" ? "top" : "bottom");
      const w = h - l.top - l.bottom, x = v - l.left - l.right, S = Jr(h - l[g], w), E = Jr(v - l[y], x), P = !t.middlewareData.shift;
      let O = S, A = E;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = x), (n = t.middlewareData.shift) != null && n.enabled.y && (O = w), P && !p) {
        const N = Tt(l.left, 0), T = Tt(l.right, 0), I = Tt(l.top, 0), j = Tt(l.bottom, 0);
        f ? A = v - 2 * (N !== 0 || T !== 0 ? N + T : Tt(l.left, l.right)) : O = h - 2 * (I !== 0 || j !== 0 ? I + j : Tt(l.top, l.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: O
      });
      const _ = await a.getDimensions(s.floating);
      return v !== _.width || h !== _.height ? {
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
function xo(e) {
  return Q0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function It(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yr(e) {
  var t;
  return (t = (Q0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Q0(e) {
  return ac() ? e instanceof Node || e instanceof It(e).Node : !1;
}
function Qt(e) {
  return ac() ? e instanceof Element || e instanceof It(e).Element : !1;
}
function pr(e) {
  return ac() ? e instanceof HTMLElement || e instanceof It(e).HTMLElement : !1;
}
function nv(e) {
  return !ac() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof It(e).ShadowRoot;
}
const WI = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ai(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = er(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !WI.has(o);
}
const KI = /* @__PURE__ */ new Set(["table", "td", "th"]);
function VI(e) {
  return KI.has(xo(e));
}
const qI = [":popover-open", ":modal"];
function sc(e) {
  return qI.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const HI = ["transform", "translate", "scale", "rotate", "perspective"], GI = ["transform", "translate", "scale", "rotate", "perspective", "filter"], YI = ["paint", "layout", "strict", "content"];
function Qf(e) {
  const t = ep(), r = Qt(e) ? er(e) : e;
  return HI.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || GI.some((n) => (r.willChange || "").includes(n)) || YI.some((n) => (r.contain || "").includes(n));
}
function XI(e) {
  let t = Qr(e);
  for (; pr(t) && !io(t); ) {
    if (Qf(t))
      return t;
    if (sc(t))
      return null;
    t = Qr(t);
  }
  return null;
}
function ep() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ZI = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function io(e) {
  return ZI.has(xo(e));
}
function er(e) {
  return It(e).getComputedStyle(e);
}
function cc(e) {
  return Qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qr(e) {
  if (xo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nv(e) && e.host || // Fallback.
    yr(e)
  );
  return nv(t) ? t.host : t;
}
function ex(e) {
  const t = Qr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pr(t) && Ai(t) ? t : ex(t);
}
function ii(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = ex(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = It(o);
  if (i) {
    const s = Od(a);
    return t.concat(a, a.visualViewport || [], Ai(o) ? o : [], s && r ? ii(s) : []);
  }
  return t.concat(o, ii(o, [], r));
}
function Od(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tx(e) {
  const t = er(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = pr(e), i = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, s = Ya(r) !== i || Ya(n) !== a;
  return s && (r = i, n = a), {
    width: r,
    height: n,
    $: s
  };
}
function tp(e) {
  return Qt(e) ? e : e.contextElement;
}
function to(e) {
  const t = tp(e);
  if (!pr(t))
    return ur(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = tx(t);
  let a = (i ? Ya(r.width) : r.width) / n, s = (i ? Ya(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const JI = /* @__PURE__ */ ur(0);
function rx(e) {
  const t = It(e);
  return !ep() || !t.visualViewport ? JI : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function QI(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== It(e) ? !1 : t;
}
function _n(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = tp(e);
  let a = ur(1);
  t && (n ? Qt(n) && (a = to(n)) : a = to(e));
  const s = QI(i, r, n) ? rx(i) : ur(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, l = o.width / a.x, d = o.height / a.y;
  if (i) {
    const p = It(i), f = n && Qt(n) ? It(n) : n;
    let v = p, h = Od(v);
    for (; h && n && f !== v; ) {
      const g = to(h), y = h.getBoundingClientRect(), w = er(h), x = y.left + (h.clientLeft + parseFloat(w.paddingLeft)) * g.x, S = y.top + (h.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, u *= g.y, l *= g.x, d *= g.y, c += x, u += S, v = It(h), h = Od(v);
    }
  }
  return Za({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function lc(e, t) {
  const r = cc(e).scrollLeft;
  return t ? t.left + r : _n(yr(e)).left + r;
}
function nx(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - lc(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function eR(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const i = o === "fixed", a = yr(n), s = t ? sc(t.floating) : !1;
  if (n === a || s && i)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ur(1);
  const l = ur(0), d = pr(n);
  if ((d || !d && !i) && ((xo(n) !== "body" || Ai(a)) && (c = cc(n)), pr(n))) {
    const f = _n(n);
    u = to(n), l.x = f.x + n.clientLeft, l.y = f.y + n.clientTop;
  }
  const p = a && !d && !i ? nx(a, c) : ur(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + l.x + p.x,
    y: r.y * u.y - c.scrollTop * u.y + l.y + p.y
  };
}
function tR(e) {
  return Array.from(e.getClientRects());
}
function rR(e) {
  const t = yr(e), r = cc(e), n = e.ownerDocument.body, o = Tt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = Tt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + lc(e);
  const s = -r.scrollTop;
  return er(n).direction === "rtl" && (a += Tt(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const ov = 25;
function nR(e, t) {
  const r = It(e), n = yr(e), o = r.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = ep();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = lc(n);
  if (u <= 0) {
    const l = n.ownerDocument, d = l.body, p = getComputedStyle(d), f = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(n.clientWidth - d.clientWidth - f);
    v <= ov && (i -= v);
  } else u <= ov && (i += u);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const oR = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function iR(e, t) {
  const r = _n(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = pr(e) ? to(e) : ur(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = n * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function iv(e, t, r) {
  let n;
  if (t === "viewport")
    n = nR(e, r);
  else if (t === "document")
    n = rR(yr(e));
  else if (Qt(t))
    n = iR(t, r);
  else {
    const o = rx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Za(n);
}
function ox(e, t) {
  const r = Qr(e);
  return r === t || !Qt(r) || io(r) ? !1 : er(r).position === "fixed" || ox(r, t);
}
function aR(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ii(e, [], !1).filter((s) => Qt(s) && xo(s) !== "body"), o = null;
  const i = er(e).position === "fixed";
  let a = i ? Qr(e) : e;
  for (; Qt(a) && !io(a); ) {
    const s = er(a), c = Qf(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && oR.has(o.position) || Ai(a) && !c && ox(e, a)) ? n = n.filter((l) => l !== a) : o = s, a = Qr(a);
  }
  return t.set(e, n), n;
}
function sR(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? sc(t) ? [] : aR(t, this._c) : [].concat(r), n], s = a[0], c = a.reduce((u, l) => {
    const d = iv(t, l, o);
    return u.top = Tt(d.top, u.top), u.right = Jr(d.right, u.right), u.bottom = Jr(d.bottom, u.bottom), u.left = Tt(d.left, u.left), u;
  }, iv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function cR(e) {
  const {
    width: t,
    height: r
  } = tx(e);
  return {
    width: t,
    height: r
  };
}
function lR(e, t, r) {
  const n = pr(t), o = yr(t), i = r === "fixed", a = _n(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ur(0);
  function u() {
    c.x = lc(o);
  }
  if (n || !n && !i)
    if ((xo(t) !== "body" || Ai(o)) && (s = cc(t)), n) {
      const f = _n(t, !0, i, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else o && u();
  i && !n && o && u();
  const l = o && !n && !i ? nx(o, s) : ur(0), d = a.left + s.scrollLeft - c.x - l.x, p = a.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Nl(e) {
  return er(e).position === "static";
}
function av(e, t) {
  if (!pr(e) || er(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return yr(e) === r && (r = r.ownerDocument.body), r;
}
function ix(e, t) {
  const r = It(e);
  if (sc(e))
    return r;
  if (!pr(e)) {
    let o = Qr(e);
    for (; o && !io(o); ) {
      if (Qt(o) && !Nl(o))
        return o;
      o = Qr(o);
    }
    return r;
  }
  let n = av(e, t);
  for (; n && VI(n) && Nl(n); )
    n = av(n, t);
  return n && io(n) && Nl(n) && !Qf(n) ? r : n || XI(e) || r;
}
const uR = async function(e) {
  const t = this.getOffsetParent || ix, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: lR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function dR(e) {
  return er(e).direction === "rtl";
}
const fR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: eR,
  getDocumentElement: yr,
  getClippingRect: sR,
  getOffsetParent: ix,
  getElementRects: uR,
  getClientRects: tR,
  getDimensions: cR,
  getScale: to,
  isElement: Qt,
  isRTL: dR
};
function ax(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pR(e, t) {
  let r = null, n;
  const o = yr(e);
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
      height: f
    } = u;
    if (s || t(), !p || !f)
      return;
    const v = fa(d), h = fa(o.clientWidth - (l + p)), g = fa(o.clientHeight - (d + f)), y = fa(l), x = {
      rootMargin: -v + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: Tt(0, Jr(1, c)) || 1
    };
    let S = !0;
    function E(P) {
      const O = P[0].intersectionRatio;
      if (O !== c) {
        if (!S)
          return a();
        O ? a(!1, O) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !ax(u, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, x);
    }
    r.observe(e);
  }
  return a(!0), i;
}
function hR(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, u = tp(e), l = o || i ? [...u ? ii(u) : [], ...ii(t)] : [];
  l.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), i && y.addEventListener("resize", r);
  });
  const d = u && s ? pR(u, r) : null;
  let p = -1, f = null;
  a && (f = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), r();
  }), u && !c && f.observe(u), f.observe(t));
  let v, h = c ? _n(e) : null;
  c && g();
  function g() {
    const y = _n(e);
    h && !ax(h, y) && r(), h = y, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var y;
    l.forEach((w) => {
      o && w.removeEventListener("scroll", r), i && w.removeEventListener("resize", r);
    }), d?.(), (y = f) == null || y.disconnect(), f = null, c && cancelAnimationFrame(v);
  };
}
const mR = BI, vR = FI, gR = jI, yR = UI, bR = LI, sv = DI, wR = zI, xR = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: fR,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return MI(e, t, {
    ...o,
    platform: i
  });
};
var ER = typeof document < "u", SR = function() {
}, $a = ER ? fr : SR;
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
function sx(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cv(e, t) {
  const r = sx(e);
  return Math.round(t * r) / r;
}
function Il(e) {
  const t = m.useRef(e);
  return $a(() => {
    t.current = e;
  }), t;
}
function PR(e) {
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
  }), [p, f] = m.useState(n);
  Ja(p, n) || f(n);
  const [v, h] = m.useState(null), [g, y] = m.useState(null), w = m.useCallback((M) => {
    M !== P.current && (P.current = M, h(M));
  }, []), x = m.useCallback((M) => {
    M !== O.current && (O.current = M, y(M));
  }, []), S = i || v, E = a || g, P = m.useRef(null), O = m.useRef(null), A = m.useRef(l), _ = c != null, N = Il(c), T = Il(o), I = Il(u), j = m.useCallback(() => {
    if (!P.current || !O.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: p
    };
    T.current && (M.platform = T.current), xR(P.current, O.current, M).then((F) => {
      const oe = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      C.current && !Ja(A.current, oe) && (A.current = oe, Si.flushSync(() => {
        d(oe);
      }));
    });
  }, [p, t, r, T, I]);
  $a(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [u]);
  const C = m.useRef(!1);
  $a(() => (C.current = !0, () => {
    C.current = !1;
  }), []), $a(() => {
    if (S && (P.current = S), E && (O.current = E), S && E) {
      if (N.current)
        return N.current(S, E, j);
      j();
    }
  }, [S, E, j, N, _]);
  const D = m.useMemo(() => ({
    reference: P,
    floating: O,
    setReference: w,
    setFloating: x
  }), [w, x]), $ = m.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), z = m.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return M;
    const F = cv($.floating, l.x), oe = cv($.floating, l.y);
    return s ? {
      ...M,
      transform: "translate(" + F + "px, " + oe + "px)",
      ...sx($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: oe
    };
  }, [r, s, $.floating, l.x, l.y]);
  return m.useMemo(() => ({
    ...l,
    update: j,
    refs: D,
    elements: $,
    floatingStyles: z
  }), [l, j, D, $, z]);
}
const OR = (e) => {
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
      return n && t(n) ? n.current != null ? sv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? sv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, AR = (e, t) => ({
  ...mR(e),
  options: [e, t]
}), CR = (e, t) => ({
  ...vR(e),
  options: [e, t]
}), TR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), _R = (e, t) => ({
  ...gR(e),
  options: [e, t]
}), kR = (e, t) => ({
  ...yR(e),
  options: [e, t]
}), NR = (e, t) => ({
  ...bR(e),
  options: [e, t]
}), IR = (e, t) => ({
  ...OR(e),
  options: [e, t]
});
var RR = "Arrow", cx = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ b(
    ne.svg,
    {
      ...i,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ b("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
cx.displayName = RR;
var MR = cx, rp = "Popper", [lx, Eo] = Et(rp), [DR, ux] = lx(rp), dx = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = m.useState(null);
  return /* @__PURE__ */ b(DR, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
dx.displayName = rp;
var fx = "PopperAnchor", px = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, i = ux(fx, r), a = m.useRef(null), s = de(t, a), c = m.useRef(null);
    return m.useEffect(() => {
      const u = c.current;
      c.current = n?.current || a.current, u !== c.current && i.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ b(ne.div, { ...o, ref: s });
  }
);
px.displayName = fx;
var np = "PopperContent", [jR, LR] = lx(np), hx = m.forwardRef(
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
      updatePositionStrategy: f = "optimized",
      onPlaced: v,
      ...h
    } = e, g = ux(np, r), [y, w] = m.useState(null), x = de(t, (K) => w(K)), [S, E] = m.useState(null), P = Gs(S), O = P?.width ?? 0, A = P?.height ?? 0, _ = n + (i !== "center" ? "-" + i : ""), N = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, T = Array.isArray(u) ? u : [u], I = T.length > 0, j = {
      padding: N,
      boundary: T.filter(BR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: C, floatingStyles: D, placement: $, isPositioned: z, middlewareData: M } = PR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...K) => hR(...K, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        AR({ mainAxis: o + A, alignmentAxis: a }),
        c && CR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? TR() : void 0,
          ...j
        }),
        c && _R({ ...j }),
        kR({
          ...j,
          apply: ({ elements: K, rects: re, availableWidth: L, availableHeight: G }) => {
            const { width: Y, height: B } = re.reference, me = K.floating.style;
            me.setProperty("--radix-popper-available-width", `${L}px`), me.setProperty("--radix-popper-available-height", `${G}px`), me.setProperty("--radix-popper-anchor-width", `${Y}px`), me.setProperty("--radix-popper-anchor-height", `${B}px`);
          }
        }),
        S && IR({ element: S, padding: s }),
        FR({ arrowWidth: O, arrowHeight: A }),
        p && NR({ strategy: "referenceHidden", ...j })
      ]
    }), [F, oe] = gx($), H = pt(v);
    nt(() => {
      z && H?.();
    }, [z, H]);
    const ae = M.arrow?.x, ie = M.arrow?.y, W = M.arrow?.centerOffset !== 0, [te, se] = m.useState();
    return nt(() => {
      y && se(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ b(
      "div",
      {
        ref: C.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...D,
          transform: z ? D.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: te,
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
          jR,
          {
            scope: r,
            placedSide: F,
            onArrowChange: E,
            arrowX: ae,
            arrowY: ie,
            shouldHideArrow: W,
            children: /* @__PURE__ */ b(
              ne.div,
              {
                "data-side": F,
                "data-align": oe,
                ...h,
                ref: x,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
hx.displayName = np;
var mx = "PopperArrow", $R = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vx = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, i = LR(mx, n), a = $R[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ b(
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
        children: /* @__PURE__ */ b(
          MR,
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
vx.displayName = mx;
function BR(e) {
  return e !== null;
}
var FR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, l] = gx(r), d = { start: "0%", center: "50%", end: "100%" }[l], p = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + c / 2;
    let v = "", h = "";
    return u === "bottom" ? (v = a ? d : `${p}px`, h = `${-c}px`) : u === "top" ? (v = a ? d : `${p}px`, h = `${n.floating.height + c}px`) : u === "right" ? (v = `${-c}px`, h = a ? d : `${f}px`) : u === "left" && (v = `${n.floating.width + c}px`, h = a ? d : `${f}px`), { data: { x: v, y: h } };
  }
});
function gx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var uc = dx, op = px, ip = hx, ap = vx, Rl = "rovingFocusGroup.onEntryFocus", zR = { bubbles: !1, cancelable: !0 }, Ci = "RovingFocusGroup", [Ad, yx, UR] = ic(Ci), [WR, So] = Et(
  Ci,
  [UR]
), [KR, VR] = WR(Ci), bx = m.forwardRef(
  (e, t) => /* @__PURE__ */ b(Ad.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ b(Ad.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ b(qR, { ...e, ref: t }) }) })
);
bx.displayName = Ci;
var qR = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), f = de(t, p), v = Oi(i), [h, g] = qt({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: Ci
  }), [y, w] = m.useState(!1), x = pt(u), S = yx(r), E = m.useRef(!1), [P, O] = m.useState(0);
  return m.useEffect(() => {
    const A = p.current;
    if (A)
      return A.addEventListener(Rl, x), () => A.removeEventListener(Rl, x);
  }, [x]), /* @__PURE__ */ b(
    KR,
    {
      scope: r,
      orientation: n,
      dir: v,
      loop: o,
      currentTabStopId: h,
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
        ne.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": n,
          ...d,
          ref: f,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: q(e.onFocus, (A) => {
            const _ = !E.current;
            if (A.target === A.currentTarget && _ && !y) {
              const N = new CustomEvent(Rl, zR);
              if (A.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const T = S().filter(($) => $.focusable), I = T.find(($) => $.active), j = T.find(($) => $.id === h), D = [I, j, ...T].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Ex(D, l);
              }
            }
            E.current = !1;
          }),
          onBlur: q(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), wx = "RovingFocusGroupItem", xx = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, c = Nt(), u = i || c, l = VR(wx, r), d = l.currentTabStopId === u, p = yx(r), { onFocusableItemAdd: f, onFocusableItemRemove: v, currentTabStopId: h } = l;
    return m.useEffect(() => {
      if (n)
        return f(), () => v();
    }, [n, f, v]), /* @__PURE__ */ b(
      Ad.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ b(
          ne.span,
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
              const y = YR(g, l.orientation, l.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let x = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const S = x.indexOf(g.currentTarget);
                  x = l.loop ? XR(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => Ex(x));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
xx.displayName = wx;
var HR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function GR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function YR(e, t, r) {
  const n = GR(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return HR[n];
}
function Ex(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function XR(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var sp = bx, cp = xx, Cd = ["Enter", " "], ZR = ["ArrowDown", "PageUp", "Home"], Sx = ["ArrowUp", "PageDown", "End"], JR = [...ZR, ...Sx], QR = {
  ltr: [...Cd, "ArrowRight"],
  rtl: [...Cd, "ArrowLeft"]
}, eM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ti = "Menu", [ai, tM, rM] = ic(Ti), [Wn, Px] = Et(Ti, [
  rM,
  Eo,
  So
]), _i = Eo(), Ox = So(), [Ax, nn] = Wn(Ti), [nM, ki] = Wn(Ti), Cx = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: i, modal: a = !0 } = e, s = _i(t), [c, u] = m.useState(null), l = m.useRef(!1), d = pt(i), p = Oi(o);
  return m.useEffect(() => {
    const f = () => {
      l.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => l.current = !1;
    return document.addEventListener("keydown", f, { capture: !0 }), () => {
      document.removeEventListener("keydown", f, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ b(uc, { ...s, children: /* @__PURE__ */ b(
    Ax,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ b(
        nM,
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
Cx.displayName = Ti;
var oM = "MenuAnchor", lp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = _i(r);
    return /* @__PURE__ */ b(op, { ...o, ...n, ref: t });
  }
);
lp.displayName = oM;
var up = "MenuPortal", [iM, Tx] = Wn(up, {
  forceMount: void 0
}), _x = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, i = nn(up, t);
  return /* @__PURE__ */ b(iM, { scope: t, forceMount: r, children: /* @__PURE__ */ b(jt, { present: r || i.open, children: /* @__PURE__ */ b(Pi, { asChild: !0, container: o, children: n }) }) });
};
_x.displayName = up;
var Vt = "MenuContent", [aM, dp] = Wn(Vt), kx = m.forwardRef(
  (e, t) => {
    const r = Tx(Vt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, i = nn(Vt, e.__scopeMenu), a = ki(Vt, e.__scopeMenu);
    return /* @__PURE__ */ b(ai.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(jt, { present: n || i.open, children: /* @__PURE__ */ b(ai.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ b(sM, { ...o, ref: t }) : /* @__PURE__ */ b(cM, { ...o, ref: t }) }) }) });
  }
), sM = m.forwardRef(
  (e, t) => {
    const r = nn(Vt, e.__scopeMenu), n = m.useRef(null), o = de(t, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return qf(i);
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
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), cM = m.forwardRef((e, t) => {
  const r = nn(Vt, e.__scopeMenu);
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
}), lM = /* @__PURE__ */ Cn("MenuContent.ScrollLock"), fp = m.forwardRef(
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
      onDismiss: f,
      disableOutsideScroll: v,
      ...h
    } = e, g = nn(Vt, r), y = ki(Vt, r), w = _i(r), x = Ox(r), S = tM(r), [E, P] = m.useState(null), O = m.useRef(null), A = de(t, O, g.onContentChange), _ = m.useRef(0), N = m.useRef(""), T = m.useRef(0), I = m.useRef(null), j = m.useRef("right"), C = m.useRef(0), D = v ? Js : m.Fragment, $ = v ? { as: lM, allowPinchZoom: !0 } : void 0, z = (F) => {
      const oe = N.current + F, H = S().filter((K) => !K.disabled), ae = document.activeElement, ie = H.find((K) => K.ref.current === ae)?.textValue, W = H.map((K) => K.textValue), te = xM(W, oe, ie), se = H.find((K) => K.textValue === te)?.ref.current;
      (function K(re) {
        N.current = re, window.clearTimeout(_.current), re !== "" && (_.current = window.setTimeout(() => K(""), 1e3));
      })(oe), se && setTimeout(() => se.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), Vf();
    const M = m.useCallback((F) => j.current === I.current?.side && SM(F, I.current?.area), []);
    return /* @__PURE__ */ b(
      aM,
      {
        scope: r,
        searchRef: N,
        onItemEnter: m.useCallback(
          (F) => {
            M(F) && F.preventDefault();
          },
          [M]
        ),
        onItemLeave: m.useCallback(
          (F) => {
            M(F) || (O.current?.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: m.useCallback(
          (F) => {
            M(F) && F.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: m.useCallback((F) => {
          I.current = F;
        }, []),
        children: /* @__PURE__ */ b(D, { ...$, children: /* @__PURE__ */ b(
          Xs,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(i, (F) => {
              F.preventDefault(), O.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ b(
              bo,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: f,
                children: /* @__PURE__ */ b(
                  sp,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: q(c, (F) => {
                      y.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ b(
                      ip,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Hx(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...h,
                        ref: A,
                        style: { outline: "none", ...h.style },
                        onKeyDown: q(h.onKeyDown, (F) => {
                          const H = F.target.closest("[data-radix-menu-content]") === F.currentTarget, ae = F.ctrlKey || F.altKey || F.metaKey, ie = F.key.length === 1;
                          H && (F.key === "Tab" && F.preventDefault(), !ae && ie && z(F.key));
                          const W = O.current;
                          if (F.target !== W || !JR.includes(F.key)) return;
                          F.preventDefault();
                          const se = S().filter((K) => !K.disabled).map((K) => K.ref.current);
                          Sx.includes(F.key) && se.reverse(), bM(se);
                        }),
                        onBlur: q(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(_.current), N.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          si((F) => {
                            const oe = F.target, H = C.current !== F.clientX;
                            if (F.currentTarget.contains(oe) && H) {
                              const ae = F.clientX > C.current ? "right" : "left";
                              j.current = ae, C.current = F.clientX;
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
kx.displayName = Vt;
var uM = "MenuGroup", pp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(ne.div, { role: "group", ...n, ref: t });
  }
);
pp.displayName = uM;
var dM = "MenuLabel", Nx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(ne.div, { ...n, ref: t });
  }
);
Nx.displayName = dM;
var Qa = "MenuItem", lv = "menu.itemSelect", dc = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, i = m.useRef(null), a = ki(Qa, e.__scopeMenu), s = dp(Qa, e.__scopeMenu), c = de(t, i), u = m.useRef(!1), l = () => {
      const d = i.current;
      if (!r && d) {
        const p = new CustomEvent(lv, { bubbles: !0, cancelable: !0 });
        d.addEventListener(lv, (f) => n?.(f), { once: !0 }), Uf(d, p), p.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ b(
      Ix,
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
          r || p && d.key === " " || Cd.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
dc.displayName = Qa;
var Ix = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...i } = e, a = dp(Qa, r), s = Ox(r), c = m.useRef(null), u = de(t, c), [l, d] = m.useState(!1), [p, f] = m.useState("");
    return m.useEffect(() => {
      const v = c.current;
      v && f((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ b(
      ai.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? p,
        children: /* @__PURE__ */ b(cp, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ b(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: q(
              e.onPointerMove,
              si((v) => {
                n ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              si((v) => a.onItemLeave(v))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), fM = "MenuCheckboxItem", Rx = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ b($x, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ b(
      dc,
      {
        role: "menuitemcheckbox",
        "aria-checked": es(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": vp(r),
        onSelect: q(
          o.onSelect,
          () => n?.(es(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Rx.displayName = fM;
var Mx = "MenuRadioGroup", [pM, hM] = Wn(
  Mx,
  { value: void 0, onValueChange: () => {
  } }
), Dx = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, i = pt(n);
    return /* @__PURE__ */ b(pM, { scope: e.__scopeMenu, value: r, onValueChange: i, children: /* @__PURE__ */ b(pp, { ...o, ref: t }) });
  }
);
Dx.displayName = Mx;
var jx = "MenuRadioItem", Lx = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = hM(jx, e.__scopeMenu), i = r === o.value;
    return /* @__PURE__ */ b($x, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ b(
      dc,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: t,
        "data-state": vp(i),
        onSelect: q(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Lx.displayName = jx;
var hp = "MenuItemIndicator", [$x, mM] = Wn(
  hp,
  { checked: !1 }
), Bx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, i = mM(hp, r);
    return /* @__PURE__ */ b(
      jt,
      {
        present: n || es(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ b(
          ne.span,
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
Bx.displayName = hp;
var vM = "MenuSeparator", Fx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ b(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Fx.displayName = vM;
var gM = "MenuArrow", zx = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = _i(r);
    return /* @__PURE__ */ b(ap, { ...o, ...n, ref: t });
  }
);
zx.displayName = gM;
var mp = "MenuSub", [yM, Ux] = Wn(mp), Wx = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, i = nn(mp, t), a = _i(t), [s, c] = m.useState(null), [u, l] = m.useState(null), d = pt(o);
  return m.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ b(uc, { ...a, children: /* @__PURE__ */ b(
    Ax,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: u,
      onContentChange: l,
      children: /* @__PURE__ */ b(
        yM,
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
Wx.displayName = mp;
var Yo = "MenuSubTrigger", Kx = m.forwardRef(
  (e, t) => {
    const r = nn(Yo, e.__scopeMenu), n = ki(Yo, e.__scopeMenu), o = Ux(Yo, e.__scopeMenu), i = dp(Yo, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, l = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => l, [l]), m.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ b(lp, { asChild: !0, ...u, children: /* @__PURE__ */ b(
      Ix,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Hx(r.open),
        ...e,
        ref: Ks(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          si((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !r.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          si((d) => {
            l();
            const p = r.content?.getBoundingClientRect();
            if (p) {
              const f = r.content?.dataset.side, v = f === "right", h = v ? -5 : 5, g = p[v ? "left" : "right"], y = p[v ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + h, y: d.clientY },
                  { x: g, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: g, y: p.bottom }
                ],
                side: f
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
        onKeyDown: q(e.onKeyDown, (d) => {
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || QR[n.dir].includes(d.key) && (r.onOpenChange(!0), r.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Kx.displayName = Yo;
var Vx = "MenuSubContent", qx = m.forwardRef(
  (e, t) => {
    const r = Tx(Vt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, i = nn(Vt, e.__scopeMenu), a = ki(Vt, e.__scopeMenu), s = Ux(Vx, e.__scopeMenu), c = m.useRef(null), u = de(t, c);
    return /* @__PURE__ */ b(ai.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(jt, { present: n || i.open, children: /* @__PURE__ */ b(ai.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ b(
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
        onFocusOutside: q(e.onFocusOutside, (l) => {
          l.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (l) => {
          a.onClose(), l.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (l) => {
          const d = l.currentTarget.contains(l.target), p = eM[a.dir].includes(l.key);
          d && p && (i.onOpenChange(!1), s.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
qx.displayName = Vx;
function Hx(e) {
  return e ? "open" : "closed";
}
function es(e) {
  return e === "indeterminate";
}
function vp(e) {
  return es(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function bM(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function wM(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function xM(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = wM(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== r));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function EM(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function SM(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return EM(r, t);
}
function si(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var PM = Cx, OM = lp, AM = _x, CM = kx, TM = pp, _M = Nx, kM = dc, NM = Rx, IM = Dx, RM = Lx, MM = Bx, DM = Fx, jM = zx, LM = Wx, $M = Kx, BM = qx, fc = "DropdownMenu", [FM] = Et(
  fc,
  [Px]
), lt = Px(), [zM, Gx] = FM(fc), Yx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = lt(t), u = m.useRef(null), [l, d] = qt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: fc
  });
  return /* @__PURE__ */ b(
    zM,
    {
      scope: t,
      triggerId: Nt(),
      triggerRef: u,
      contentId: Nt(),
      open: l,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ b(PM, { ...c, open: l, onOpenChange: d, dir: n, modal: s, children: r })
    }
  );
};
Yx.displayName = fc;
var Xx = "DropdownMenuTrigger", Zx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, i = Gx(Xx, r), a = lt(r);
    return /* @__PURE__ */ b(OM, { asChild: !0, ...a, children: /* @__PURE__ */ b(
      ne.button,
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
        onPointerDown: q(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Zx.displayName = Xx;
var UM = "DropdownMenuPortal", Jx = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = lt(t);
  return /* @__PURE__ */ b(AM, { ...n, ...r });
};
Jx.displayName = UM;
var Qx = "DropdownMenuContent", eE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Gx(Qx, r), i = lt(r), a = m.useRef(!1);
    return /* @__PURE__ */ b(
      CM,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...n,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
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
eE.displayName = Qx;
var WM = "DropdownMenuGroup", tE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(TM, { ...o, ...n, ref: t });
  }
);
tE.displayName = WM;
var KM = "DropdownMenuLabel", rE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(_M, { ...o, ...n, ref: t });
  }
);
rE.displayName = KM;
var VM = "DropdownMenuItem", nE = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(kM, { ...o, ...n, ref: t });
  }
);
nE.displayName = VM;
var qM = "DropdownMenuCheckboxItem", oE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(NM, { ...o, ...n, ref: t });
});
oE.displayName = qM;
var HM = "DropdownMenuRadioGroup", iE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(IM, { ...o, ...n, ref: t });
});
iE.displayName = HM;
var GM = "DropdownMenuRadioItem", aE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(RM, { ...o, ...n, ref: t });
});
aE.displayName = GM;
var YM = "DropdownMenuItemIndicator", sE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(MM, { ...o, ...n, ref: t });
});
sE.displayName = YM;
var XM = "DropdownMenuSeparator", cE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(DM, { ...o, ...n, ref: t });
});
cE.displayName = XM;
var ZM = "DropdownMenuArrow", JM = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ b(jM, { ...o, ...n, ref: t });
  }
);
JM.displayName = ZM;
var QM = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: i } = e, a = lt(t), [s, c] = qt({
    prop: n,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ b(LM, { ...a, open: s, onOpenChange: c, children: r });
}, eD = "DropdownMenuSubTrigger", lE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b($M, { ...o, ...n, ref: t });
});
lE.displayName = eD;
var tD = "DropdownMenuSubContent", uE = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ b(
    BM,
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
uE.displayName = tD;
var rD = Yx, nD = Zx, dE = Jx, fE = eE, oD = tE, pE = rE, hE = nE, mE = oE, iD = iE, vE = aE, gE = sE, yE = cE, aD = QM, bE = lE, wE = uE;
const d7 = rD, f7 = nD, p7 = oD, h7 = dE, m7 = aD, v7 = iD, sD = m.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ U(
  bE,
  {
    ref: o,
    className: V(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ b(qs, { className: "ml-auto h-4 w-4" })
    ]
  }
));
sD.displayName = bE.displayName;
const cD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  wE,
  {
    ref: r,
    className: V(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
cD.displayName = wE.displayName;
const lD = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ b(dE, { children: /* @__PURE__ */ b(
  fE,
  {
    ref: n,
    sideOffset: t,
    className: V(
      "z-[110] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
lD.displayName = fE.displayName;
const uD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ b(
  hE,
  {
    ref: n,
    className: V(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
uD.displayName = hE.displayName;
const dD = m.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ U(
  mE,
  {
    ref: o,
    className: V(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(gE, { children: /* @__PURE__ */ b(Vs, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
dD.displayName = mE.displayName;
const fD = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ U(
  vE,
  {
    ref: n,
    className: V(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(gE, { children: /* @__PURE__ */ b(Yw, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
fD.displayName = vE.displayName;
const pD = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ b(
  pE,
  {
    ref: n,
    className: V(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
pD.displayName = pE.displayName;
const hD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  yE,
  {
    ref: r,
    className: V("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
hD.displayName = yE.displayName;
const mD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: V("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
mD.displayName = "DropdownShortcut";
function uv(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var xE = Object.freeze({
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
}), vD = "VisuallyHidden", pc = m.forwardRef(
  (e, t) => /* @__PURE__ */ b(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...xE, ...e.style }
    }
  )
);
pc.displayName = vD;
var gD = pc, yD = [" ", "Enter", "ArrowUp", "ArrowDown"], bD = [" ", "Enter"], kn = "Select", [hc, mc, wD] = ic(kn), [Po] = Et(kn, [
  wD,
  Eo
]), vc = Eo(), [xD, on] = Po(kn), [ED, SD] = Po(kn), EE = (e) => {
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
    required: f,
    form: v
  } = e, h = vc(t), [g, y] = m.useState(null), [w, x] = m.useState(null), [S, E] = m.useState(!1), P = Oi(u), [O, A] = qt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: i,
    caller: kn
  }), [_, N] = qt({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: kn
  }), T = m.useRef(null), I = g ? v || !!g.closest("form") : !0, [j, C] = m.useState(/* @__PURE__ */ new Set()), D = Array.from(j).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ b(uc, { ...h, children: /* @__PURE__ */ U(
    xD,
    {
      required: f,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: Nt(),
      value: _,
      onValueChange: N,
      open: O,
      onOpenChange: A,
      dir: P,
      triggerPointerDownPosRef: T,
      disabled: p,
      children: [
        /* @__PURE__ */ b(hc.Provider, { scope: t, children: /* @__PURE__ */ b(
          ED,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback(($) => {
              C((z) => new Set(z).add($));
            }, []),
            onNativeOptionRemove: m.useCallback(($) => {
              C((z) => {
                const M = new Set(z);
                return M.delete($), M;
              });
            }, []),
            children: r
          }
        ) }),
        I ? /* @__PURE__ */ U(
          HE,
          {
            "aria-hidden": !0,
            required: f,
            tabIndex: -1,
            name: l,
            autoComplete: d,
            value: _,
            onChange: ($) => N($.target.value),
            disabled: p,
            form: v,
            children: [
              _ === void 0 ? /* @__PURE__ */ b("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          D
        ) : null
      ]
    }
  ) });
};
EE.displayName = kn;
var SE = "SelectTrigger", PE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, i = vc(r), a = on(SE, r), s = a.disabled || n, c = de(t, a.onTriggerChange), u = mc(r), l = m.useRef("touch"), [d, p, f] = YE((h) => {
      const g = u().filter((x) => !x.disabled), y = g.find((x) => x.value === a.value), w = XE(g, h, y);
      w !== void 0 && a.onValueChange(w.value);
    }), v = (h) => {
      s || (a.onOpenChange(!0), f()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ b(op, { asChild: !0, ...i, children: /* @__PURE__ */ b(
      ne.button,
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
        "data-placeholder": GE(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (h) => {
          h.currentTarget.focus(), l.current !== "mouse" && v(h);
        }),
        onPointerDown: q(o.onPointerDown, (h) => {
          l.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (h) => {
          const g = d.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && yD.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }
);
PE.displayName = SE;
var OE = "SelectValue", AE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: i, placeholder: a = "", ...s } = e, c = on(OE, r), { onValueNodeHasChildrenChange: u } = c, l = i !== void 0, d = de(t, c.onValueNodeChange);
    return nt(() => {
      u(l);
    }, [u, l]), /* @__PURE__ */ b(
      ne.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: GE(c.value) ? /* @__PURE__ */ b(yt, { children: a }) : i
      }
    );
  }
);
AE.displayName = OE;
var PD = "SelectIcon", CE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ b(ne.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
CE.displayName = PD;
var OD = "SelectPortal", TE = (e) => /* @__PURE__ */ b(Pi, { asChild: !0, ...e });
TE.displayName = OD;
var Nn = "SelectContent", _E = m.forwardRef(
  (e, t) => {
    const r = on(Nn, e.__scopeSelect), [n, o] = m.useState();
    if (nt(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const i = n;
      return i ? Si.createPortal(
        /* @__PURE__ */ b(kE, { scope: e.__scopeSelect, children: /* @__PURE__ */ b(hc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ b("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ b(NE, { ...e, ref: t });
  }
);
_E.displayName = Nn;
var Xt = 10, [kE, an] = Po(Nn), AD = "SelectContentImpl", CD = /* @__PURE__ */ Cn("SelectContent.RemoveScroll"), NE = m.forwardRef(
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
      collisionPadding: f,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...y
    } = e, w = on(Nn, r), [x, S] = m.useState(null), [E, P] = m.useState(null), O = de(t, (K) => S(K)), [A, _] = m.useState(null), [N, T] = m.useState(
      null
    ), I = mc(r), [j, C] = m.useState(!1), D = m.useRef(!1);
    m.useEffect(() => {
      if (x) return qf(x);
    }, [x]), Vf();
    const $ = m.useCallback(
      (K) => {
        const [re, ...L] = I().map((B) => B.ref.current), [G] = L.slice(-1), Y = document.activeElement;
        for (const B of K)
          if (B === Y || (B?.scrollIntoView({ block: "nearest" }), B === re && E && (E.scrollTop = 0), B === G && E && (E.scrollTop = E.scrollHeight), B?.focus(), document.activeElement !== Y)) return;
      },
      [I, E]
    ), z = m.useCallback(
      () => $([A, x]),
      [$, A, x]
    );
    m.useEffect(() => {
      j && z();
    }, [j, z]);
    const { onOpenChange: M, triggerPointerDownPosRef: F } = w;
    m.useEffect(() => {
      if (x) {
        let K = { x: 0, y: 0 };
        const re = (G) => {
          K = {
            x: Math.abs(Math.round(G.pageX) - (F.current?.x ?? 0)),
            y: Math.abs(Math.round(G.pageY) - (F.current?.y ?? 0))
          };
        }, L = (G) => {
          K.x <= 10 && K.y <= 10 ? G.preventDefault() : x.contains(G.target) || M(!1), document.removeEventListener("pointermove", re), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", L, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", L, { capture: !0 });
        };
      }
    }, [x, M, F]), m.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [oe, H] = YE((K) => {
      const re = I().filter((Y) => !Y.disabled), L = re.find((Y) => Y.ref.current === document.activeElement), G = XE(re, K, L);
      G && setTimeout(() => G.ref.current.focus());
    }), ae = m.useCallback(
      (K, re, L) => {
        const G = !D.current && !L;
        (w.value !== void 0 && w.value === re || G) && (_(K), G && (D.current = !0));
      },
      [w.value]
    ), ie = m.useCallback(() => x?.focus(), [x]), W = m.useCallback(
      (K, re, L) => {
        const G = !D.current && !L;
        (w.value !== void 0 && w.value === re || G) && T(K);
      },
      [w.value]
    ), te = n === "popper" ? Td : IE, se = te === Td ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: l,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: f,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ b(
      kE,
      {
        scope: r,
        content: x,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: ae,
        selectedItem: A,
        onItemLeave: ie,
        itemTextRefCallback: W,
        focusSelectedItem: z,
        selectedItemText: N,
        position: n,
        isPositioned: j,
        searchRef: oe,
        children: /* @__PURE__ */ b(Js, { as: CD, allowPinchZoom: !0, children: /* @__PURE__ */ b(
          Xs,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: q(o, (K) => {
              w.trigger?.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ b(
              bo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ b(
                  te,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ...y,
                    ...se,
                    onPlaced: () => C(!0),
                    ref: O,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: q(y.onKeyDown, (K) => {
                      const re = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !re && K.key.length === 1 && H(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let G = I().filter((Y) => !Y.disabled).map((Y) => Y.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (G = G.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const Y = K.target, B = G.indexOf(Y);
                          G = G.slice(B + 1);
                        }
                        setTimeout(() => $(G)), K.preventDefault();
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
NE.displayName = AD;
var TD = "SelectItemAlignedPosition", IE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, i = on(Nn, r), a = an(Nn, r), [s, c] = m.useState(null), [u, l] = m.useState(null), d = de(t, (O) => l(O)), p = mc(r), f = m.useRef(!1), v = m.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = a, x = m.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && h && g && y) {
      const O = i.trigger.getBoundingClientRect(), A = u.getBoundingClientRect(), _ = i.valueNode.getBoundingClientRect(), N = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const Y = N.left - A.left, B = _.left - Y, me = O.left - B, le = O.width + me, Te = Math.max(le, A.width), Ke = window.innerWidth - Xt, St = uv(B, [
          Xt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xt, Ke - Te)
        ]);
        s.style.minWidth = le + "px", s.style.left = St + "px";
      } else {
        const Y = A.right - N.right, B = window.innerWidth - _.right - Y, me = window.innerWidth - O.right - B, le = O.width + me, Te = Math.max(le, A.width), Ke = window.innerWidth - Xt, St = uv(B, [
          Xt,
          Math.max(Xt, Ke - Te)
        ]);
        s.style.minWidth = le + "px", s.style.right = St + "px";
      }
      const T = p(), I = window.innerHeight - Xt * 2, j = h.scrollHeight, C = window.getComputedStyle(u), D = parseInt(C.borderTopWidth, 10), $ = parseInt(C.paddingTop, 10), z = parseInt(C.borderBottomWidth, 10), M = parseInt(C.paddingBottom, 10), F = D + $ + j + M + z, oe = Math.min(g.offsetHeight * 5, F), H = window.getComputedStyle(h), ae = parseInt(H.paddingTop, 10), ie = parseInt(H.paddingBottom, 10), W = O.top + O.height / 2 - Xt, te = I - W, se = g.offsetHeight / 2, K = g.offsetTop + se, re = D + $ + K, L = F - re;
      if (re <= W) {
        const Y = T.length > 0 && g === T[T.length - 1].ref.current;
        s.style.bottom = "0px";
        const B = u.clientHeight - h.offsetTop - h.offsetHeight, me = Math.max(
          te,
          se + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Y ? ie : 0) + B + z
        ), le = re + me;
        s.style.height = le + "px";
      } else {
        const Y = T.length > 0 && g === T[0].ref.current;
        s.style.top = "0px";
        const me = Math.max(
          W,
          D + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Y ? ae : 0) + se
        ) + L;
        s.style.height = me + "px", h.scrollTop = re - W + h.offsetTop;
      }
      s.style.margin = `${Xt}px 0`, s.style.minHeight = oe + "px", s.style.maxHeight = I + "px", n?.(), requestAnimationFrame(() => f.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    s,
    u,
    h,
    g,
    y,
    i.dir,
    n
  ]);
  nt(() => x(), [x]);
  const [S, E] = m.useState();
  nt(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = m.useCallback(
    (O) => {
      O && v.current === !0 && (x(), w?.(), v.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ b(
    kD,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: f,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ b(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ b(
            ne.div,
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
IE.displayName = TD;
var _D = "SelectPopperPosition", Td = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Xt,
    ...i
  } = e, a = vc(r);
  return /* @__PURE__ */ b(
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
Td.displayName = _D;
var [kD, gp] = Po(Nn, {}), _d = "SelectViewport", RE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, i = an(_d, r), a = gp(_d, r), s = de(t, i.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ U(yt, { children: [
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
        ne.div,
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
            const l = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = a;
            if (p?.current && d) {
              const f = Math.abs(c.current - l.scrollTop);
              if (f > 0) {
                const v = window.innerHeight - Xt * 2, h = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(h, g);
                if (y < v) {
                  const w = y + f, x = Math.min(v, w), S = w - x;
                  d.style.height = x + "px", d.style.bottom === "0px" && (l.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
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
RE.displayName = _d;
var ME = "SelectGroup", [ND, ID] = Po(ME), DE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Nt();
    return /* @__PURE__ */ b(ND, { scope: r, id: o, children: /* @__PURE__ */ b(ne.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
DE.displayName = ME;
var jE = "SelectLabel", LE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ID(jE, r);
    return /* @__PURE__ */ b(ne.div, { id: o.id, ...n, ref: t });
  }
);
LE.displayName = jE;
var ts = "SelectItem", [RD, $E] = Po(ts), BE = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = on(ts, r), c = an(ts, r), u = s.value === n, [l, d] = m.useState(i ?? ""), [p, f] = m.useState(!1), v = de(
      t,
      (w) => c.itemRefCallback?.(w, n, o)
    ), h = Nt(), g = m.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ b(
      RD,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
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
              ne.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: q(a.onFocus, () => f(!0)),
                onBlur: q(a.onBlur, () => f(!1)),
                onClick: q(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: q(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: q(a.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: q(a.onPointerMove, (w) => {
                  g.current = w.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: q(a.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (bD.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
BE.displayName = ts;
var Xo = "SelectItemText", FE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...i } = e, a = on(Xo, r), s = an(Xo, r), c = $E(Xo, r), u = SD(Xo, r), [l, d] = m.useState(null), p = de(
      t,
      (y) => d(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), f = l?.textContent, v = m.useMemo(
      () => /* @__PURE__ */ b("option", { value: c.value, disabled: c.disabled, children: f }, c.value),
      [c.disabled, c.value, f]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = u;
    return nt(() => (h(v), () => g(v)), [h, g, v]), /* @__PURE__ */ U(yt, { children: [
      /* @__PURE__ */ b(ne.span, { id: c.textId, ...i, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Si.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
FE.displayName = Xo;
var zE = "SelectItemIndicator", UE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return $E(zE, r).isSelected ? /* @__PURE__ */ b(ne.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
UE.displayName = zE;
var kd = "SelectScrollUpButton", WE = m.forwardRef((e, t) => {
  const r = an(kd, e.__scopeSelect), n = gp(kd, e.__scopeSelect), [o, i] = m.useState(!1), a = de(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ b(
    VE,
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
WE.displayName = kd;
var Nd = "SelectScrollDownButton", KE = m.forwardRef((e, t) => {
  const r = an(Nd, e.__scopeSelect), n = gp(Nd, e.__scopeSelect), [o, i] = m.useState(!1), a = de(t, n.onScrollButtonChange);
  return nt(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, l = Math.ceil(c.scrollTop) < u;
        i(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ b(
    VE,
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
KE.displayName = Nd;
var VE = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, i = an("SelectScrollButton", r), a = m.useRef(null), s = mc(r), c = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), nt(() => {
    s().find((l) => l.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ b(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), MD = "SelectSeparator", qE = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ b(ne.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
qE.displayName = MD;
var Id = "SelectArrow", DD = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = vc(r), i = on(Id, r), a = an(Id, r);
    return i.open && a.position === "popper" ? /* @__PURE__ */ b(ap, { ...o, ...n, ref: t }) : null;
  }
);
DD.displayName = Id;
var jD = "SelectBubbleInput", HE = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = m.useRef(null), i = de(n, o), a = Hs(t);
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
    }, [a, t]), /* @__PURE__ */ b(
      ne.select,
      {
        ...r,
        style: { ...xE, ...r.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
HE.displayName = jD;
function GE(e) {
  return e === "" || e === void 0;
}
function YE(e) {
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
function XE(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = LD(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== r));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function LD(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var $D = EE, ZE = PE, BD = AE, FD = CE, zD = TE, JE = _E, UD = RE, WD = DE, QE = LE, eS = BE, KD = FE, VD = UE, tS = WE, rS = KE, nS = qE;
const qD = $D, g7 = WD, HD = BD, oS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ U(
  ZE,
  {
    ref: n,
    className: V(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ b(FD, { asChild: !0, children: /* @__PURE__ */ b(ni, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
oS.displayName = ZE.displayName;
const iS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  tS,
  {
    ref: r,
    className: V(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(Gw, { className: "h-4 w-4" })
  }
));
iS.displayName = tS.displayName;
const aS = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rS,
  {
    ref: r,
    className: V(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(ni, { className: "h-4 w-4" })
  }
));
aS.displayName = rS.displayName;
const sS = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ b(zD, { children: /* @__PURE__ */ U(
  JE,
  {
    ref: o,
    className: V(
      "relative z-[250] max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ b(iS, {}),
      /* @__PURE__ */ b(
        UD,
        {
          className: V(
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
sS.displayName = JE.displayName;
const GD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  QE,
  {
    ref: r,
    className: V("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
GD.displayName = QE.displayName;
const cS = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ U(
  eS,
  {
    ref: n,
    className: V(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(VD, { children: /* @__PURE__ */ b(Vs, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b(KD, { children: t })
    ]
  }
));
cS.displayName = eS.displayName;
const YD = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nS,
  {
    ref: r,
    className: V("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
YD.displayName = nS.displayName;
const XD = m.forwardRef(
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
    const [u, l] = m.useState(""), [d, p] = m.useState(!1), f = m.useMemo(() => {
      if (!u) return e;
      const v = u.toLowerCase();
      return e.filter(
        (h) => h.label.toLowerCase().includes(v)
      );
    }, [e, u]);
    return m.useEffect(() => {
      d || l("");
    }, [d]), /* @__PURE__ */ U(
      qD,
      {
        value: t,
        onValueChange: r,
        disabled: i,
        open: d,
        onOpenChange: p,
        children: [
          /* @__PURE__ */ b(oS, { ref: c, className: a, children: /* @__PURE__ */ b(HD, { placeholder: n }) }),
          /* @__PURE__ */ U(sS, { children: [
            /* @__PURE__ */ U("div", { className: "flex items-center border-b px-3 pb-2", children: [
              /* @__PURE__ */ b(H_, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
            /* @__PURE__ */ b("div", { className: "max-h-[300px] overflow-auto", children: f.length === 0 ? /* @__PURE__ */ b("div", { className: "py-6 text-center text-sm text-muted-foreground", children: s }) : f.map((v) => /* @__PURE__ */ b(cS, { value: v.value, children: v.label }, v.value)) })
          ] })
        ]
      }
    );
  }
);
XD.displayName = "SearchableSelect";
var yp = "Radio", [ZD, lS] = Et(yp), [JD, QD] = ZD(yp), uS = m.forwardRef(
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
    } = e, [d, p] = m.useState(null), f = de(t, (g) => p(g)), v = m.useRef(!1), h = d ? u || !!d.closest("form") : !0;
    return /* @__PURE__ */ U(JD, { scope: r, checked: o, disabled: a, children: [
      /* @__PURE__ */ b(
        ne.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": hS(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: s,
          ...l,
          ref: f,
          onClick: q(e.onClick, (g) => {
            o || c?.(), h && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ b(
        pS,
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
uS.displayName = yp;
var dS = "RadioIndicator", fS = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, i = QD(dS, r);
    return /* @__PURE__ */ b(jt, { present: n || i.checked, children: /* @__PURE__ */ b(
      ne.span,
      {
        "data-state": hS(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
fS.displayName = dS;
var ej = "RadioBubbleInput", pS = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = de(a, i), c = Hs(r), u = Gs(t);
    return m.useEffect(() => {
      const l = a.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && f) {
        const v = new Event("click", { bubbles: n });
        f.call(l, r), l.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ b(
      ne.input,
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
pS.displayName = ej;
function hS(e) {
  return e ? "checked" : "unchecked";
}
var tj = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], gc = "RadioGroup", [rj] = Et(gc, [
  So,
  lS
]), mS = So(), vS = lS(), [nj, oj] = rj(gc), gS = m.forwardRef(
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
    } = e, f = mS(r), v = Oi(u), [h, g] = qt({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: gc
    });
    return /* @__PURE__ */ b(
      nj,
      {
        scope: r,
        name: n,
        required: a,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ b(
          sp,
          {
            asChild: !0,
            ...f,
            orientation: c,
            dir: v,
            loop: l,
            children: /* @__PURE__ */ b(
              ne.div,
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
gS.displayName = gc;
var yS = "RadioGroupItem", bS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, i = oj(yS, r), a = i.disabled || n, s = mS(r), c = vS(r), u = m.useRef(null), l = de(t, u), d = i.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const f = (h) => {
        tj.includes(h.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", f), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", f), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ b(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !a,
        active: d,
        children: /* @__PURE__ */ b(
          uS,
          {
            disabled: a,
            required: i.required,
            checked: d,
            ...c,
            ...o,
            name: i.name,
            ref: l,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: q((f) => {
              f.key === "Enter" && f.preventDefault();
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
bS.displayName = yS;
var ij = "RadioGroupIndicator", wS = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = vS(r);
    return /* @__PURE__ */ b(fS, { ...o, ...n, ref: t });
  }
);
wS.displayName = ij;
var xS = gS, ES = bS, aj = wS;
const sj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  xS,
  {
    className: V("grid gap-2", e),
    ...t,
    ref: r
  }
));
sj.displayName = xS.displayName;
const cj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  ES,
  {
    ref: r,
    className: V(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(aj, { className: "flex items-center justify-center", children: /* @__PURE__ */ b(Yw, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
cj.displayName = ES.displayName;
var yc = "Switch", [lj] = Et(yc), [uj, dj] = lj(yc), SS = m.forwardRef(
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
    } = e, [p, f] = m.useState(null), v = de(t, (x) => f(x)), h = m.useRef(!1), g = p ? l || !!p.closest("form") : !0, [y, w] = qt({
      prop: o,
      defaultProp: i ?? !1,
      onChange: u,
      caller: yc
    });
    return /* @__PURE__ */ U(uj, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ b(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": a,
          "data-state": CS(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: v,
          onClick: q(e.onClick, (x) => {
            w((S) => !S), g && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ b(
        AS,
        {
          control: p,
          bubbles: !h.current,
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
SS.displayName = yc;
var PS = "SwitchThumb", OS = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = dj(PS, r);
    return /* @__PURE__ */ b(
      ne.span,
      {
        "data-state": CS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
OS.displayName = PS;
var fj = "SwitchBubbleInput", AS = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = de(a, i), c = Hs(r), u = Gs(t);
    return m.useEffect(() => {
      const l = a.current;
      if (!l) return;
      const d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== r && f) {
        const v = new Event("click", { bubbles: n });
        f.call(l, r), l.dispatchEvent(v);
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
AS.displayName = fj;
function CS(e) {
  return e ? "checked" : "unchecked";
}
var TS = SS, pj = OS;
const hj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  TS,
  {
    className: V(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ b(
      pj,
      {
        className: V(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
hj.displayName = TS.displayName;
var bc = "Tabs", [mj] = Et(bc, [
  So
]), _S = So(), [vj, bp] = mj(bc), kS = m.forwardRef(
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
    } = e, l = Oi(s), [d, p] = qt({
      prop: n,
      onChange: o,
      defaultProp: i ?? "",
      caller: bc
    });
    return /* @__PURE__ */ b(
      vj,
      {
        scope: r,
        baseId: Nt(),
        value: d,
        onValueChange: p,
        orientation: a,
        dir: l,
        activationMode: c,
        children: /* @__PURE__ */ b(
          ne.div,
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
kS.displayName = bc;
var NS = "TabsList", IS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, i = bp(NS, r), a = _S(r);
    return /* @__PURE__ */ b(
      sp,
      {
        asChild: !0,
        ...a,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ b(
          ne.div,
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
IS.displayName = NS;
var RS = "TabsTrigger", MS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...i } = e, a = bp(RS, r), s = _S(r), c = LS(a.baseId, n), u = $S(a.baseId, n), l = n === a.value;
    return /* @__PURE__ */ b(
      cp,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: l,
        children: /* @__PURE__ */ b(
          ne.button,
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
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(n) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && a.onValueChange(n);
            }),
            onFocus: q(e.onFocus, () => {
              const d = a.activationMode !== "manual";
              !l && !o && d && a.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
MS.displayName = RS;
var DS = "TabsContent", jS = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: i, ...a } = e, s = bp(DS, r), c = LS(s.baseId, n), u = $S(s.baseId, n), l = n === s.value, d = m.useRef(l);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ b(jt, { present: o || l, children: ({ present: p }) => /* @__PURE__ */ b(
      ne.div,
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
jS.displayName = DS;
function LS(e, t) {
  return `${e}-trigger-${t}`;
}
function $S(e, t) {
  return `${e}-content-${t}`;
}
var gj = kS, BS = IS, FS = MS, zS = jS;
const y7 = gj, yj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  BS,
  {
    ref: r,
    className: V(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
yj.displayName = BS.displayName;
const bj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  FS,
  {
    ref: r,
    className: V(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
bj.displayName = FS.displayName;
const wj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  zS,
  {
    ref: r,
    className: V(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
wj.displayName = zS.displayName;
var wp = "ToastProvider", [xp, xj, Ej] = ic("Toast"), [US] = Et("Toast", [Ej]), [Sj, wc] = US(wp), WS = (e) => {
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
  ), /* @__PURE__ */ b(xp.Provider, { scope: t, children: /* @__PURE__ */ b(
    Sj,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: i,
      toastCount: u,
      viewport: s,
      onViewportChange: c,
      onToastAdd: m.useCallback(() => l((f) => f + 1), []),
      onToastRemove: m.useCallback(() => l((f) => f - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: p,
      children: a
    }
  ) });
};
WS.displayName = wp;
var KS = "ToastViewport", Pj = ["F8"], Rd = "toast.viewportPause", Md = "toast.viewportResume", VS = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = Pj,
      label: o = "Notifications ({hotkey})",
      ...i
    } = e, a = wc(KS, r), s = xj(r), c = m.useRef(null), u = m.useRef(null), l = m.useRef(null), d = m.useRef(null), p = de(t, d, a.onViewportChange), f = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
    m.useEffect(() => {
      const g = (y) => {
        n.length !== 0 && n.every((x) => y[x] || y.code === x) && d.current?.focus();
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), m.useEffect(() => {
      const g = c.current, y = d.current;
      if (v && g && y) {
        const w = () => {
          if (!a.isClosePausedRef.current) {
            const P = new CustomEvent(Rd);
            y.dispatchEvent(P), a.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (a.isClosePausedRef.current) {
            const P = new CustomEvent(Md);
            y.dispatchEvent(P), a.isClosePausedRef.current = !1;
          }
        }, S = (P) => {
          !g.contains(P.relatedTarget) && x();
        }, E = () => {
          g.contains(document.activeElement) || x();
        };
        return g.addEventListener("focusin", w), g.addEventListener("focusout", S), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", E), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", S), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", E), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [v, a.isClosePausedRef]);
    const h = m.useCallback(
      ({ tabbingDirection: g }) => {
        const w = s().map((x) => {
          const S = x.ref.current, E = [S, ...Lj(S)];
          return g === "forwards" ? E : E.reverse();
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
            const E = document.activeElement, P = w.shiftKey;
            if (w.target === g && P) {
              u.current?.focus();
              return;
            }
            const _ = h({ tabbingDirection: P ? "backwards" : "forwards" }), N = _.findIndex((T) => T === E);
            Ml(_.slice(N + 1)) ? w.preventDefault() : P ? u.current?.focus() : l.current?.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, h]), /* @__PURE__ */ U(
      mN,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ b(
            Dd,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                Ml(g);
              }
            }
          ),
          /* @__PURE__ */ b(xp.Slot, { scope: r, children: /* @__PURE__ */ b(ne.ol, { tabIndex: -1, ...i, ref: p }) }),
          v && /* @__PURE__ */ b(
            Dd,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = h({
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
VS.displayName = KS;
var qS = "ToastFocusProxy", Dd = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, i = wc(qS, r);
    return /* @__PURE__ */ b(
      pc,
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
Dd.displayName = qS;
var Ni = "Toast", Oj = "toast.swipeStart", Aj = "toast.swipeMove", Cj = "toast.swipeCancel", Tj = "toast.swipeEnd", HS = m.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: i, ...a } = e, [s, c] = qt({
      prop: n,
      defaultProp: o ?? !0,
      onChange: i,
      caller: Ni
    });
    return /* @__PURE__ */ b(jt, { present: r || s, children: /* @__PURE__ */ b(
      Nj,
      {
        open: s,
        ...a,
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
HS.displayName = Ni;
var [_j, kj] = US(Ni, {
  onClose() {
  }
}), Nj = m.forwardRef(
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
      onSwipeEnd: f,
      ...v
    } = e, h = wc(Ni, r), [g, y] = m.useState(null), w = de(t, (C) => y(C)), x = m.useRef(null), S = m.useRef(null), E = o || h.duration, P = m.useRef(0), O = m.useRef(E), A = m.useRef(0), { onToastAdd: _, onToastRemove: N } = h, T = pt(() => {
      g?.contains(document.activeElement) && h.viewport?.focus(), a();
    }), I = m.useCallback(
      (C) => {
        !C || C === 1 / 0 || (window.clearTimeout(A.current), P.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(T, C));
      },
      [T]
    );
    m.useEffect(() => {
      const C = h.viewport;
      if (C) {
        const D = () => {
          I(O.current), u?.();
        }, $ = () => {
          const z = (/* @__PURE__ */ new Date()).getTime() - P.current;
          O.current = O.current - z, window.clearTimeout(A.current), c?.();
        };
        return C.addEventListener(Rd, $), C.addEventListener(Md, D), () => {
          C.removeEventListener(Rd, $), C.removeEventListener(Md, D);
        };
      }
    }, [h.viewport, E, c, u, I]), m.useEffect(() => {
      i && !h.isClosePausedRef.current && I(E);
    }, [i, E, h.isClosePausedRef, I]), m.useEffect(() => (_(), () => N()), [_, N]);
    const j = m.useMemo(() => g ? eP(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ U(yt, { children: [
      j && /* @__PURE__ */ b(
        Ij,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: j
        }
      ),
      /* @__PURE__ */ b(_j, { scope: r, onClose: T, children: Si.createPortal(
        /* @__PURE__ */ b(xp.ItemSlot, { scope: r, children: /* @__PURE__ */ b(
          hN,
          {
            asChild: !0,
            onEscapeKeyDown: q(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || T(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ b(
              ne.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...v,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: q(e.onKeyDown, (C) => {
                  C.key === "Escape" && (s?.(C.nativeEvent), C.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, T()));
                }),
                onPointerDown: q(e.onPointerDown, (C) => {
                  C.button === 0 && (x.current = { x: C.clientX, y: C.clientY });
                }),
                onPointerMove: q(e.onPointerMove, (C) => {
                  if (!x.current) return;
                  const D = C.clientX - x.current.x, $ = C.clientY - x.current.y, z = !!S.current, M = ["left", "right"].includes(h.swipeDirection), F = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, oe = M ? F(0, D) : 0, H = M ? 0 : F(0, $), ae = C.pointerType === "touch" ? 10 : 2, ie = { x: oe, y: H }, W = { originalEvent: C, delta: ie };
                  z ? (S.current = ie, pa(Aj, d, W, {
                    discrete: !1
                  })) : dv(ie, h.swipeDirection, ae) ? (S.current = ie, pa(Oj, l, W, {
                    discrete: !1
                  }), C.target.setPointerCapture(C.pointerId)) : (Math.abs(D) > ae || Math.abs($) > ae) && (x.current = null);
                }),
                onPointerUp: q(e.onPointerUp, (C) => {
                  const D = S.current, $ = C.target;
                  if ($.hasPointerCapture(C.pointerId) && $.releasePointerCapture(C.pointerId), S.current = null, x.current = null, D) {
                    const z = C.currentTarget, M = { originalEvent: C, delta: D };
                    dv(D, h.swipeDirection, h.swipeThreshold) ? pa(Tj, f, M, {
                      discrete: !0
                    }) : pa(
                      Cj,
                      p,
                      M,
                      {
                        discrete: !0
                      }
                    ), z.addEventListener("click", (F) => F.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }
), Ij = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = wc(Ni, t), [i, a] = m.useState(!1), [s, c] = m.useState(!1);
  return Dj(() => a(!0)), m.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ b(Pi, { asChild: !0, children: /* @__PURE__ */ b(pc, { ...n, children: i && /* @__PURE__ */ U(yt, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, Rj = "ToastTitle", GS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ b(ne.div, { ...n, ref: t });
  }
);
GS.displayName = Rj;
var Mj = "ToastDescription", YS = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ b(ne.div, { ...n, ref: t });
  }
);
YS.displayName = Mj;
var XS = "ToastAction", ZS = m.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ b(QS, { altText: r, asChild: !0, children: /* @__PURE__ */ b(Ep, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${XS}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
ZS.displayName = XS;
var JS = "ToastClose", Ep = m.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = kj(JS, r);
    return /* @__PURE__ */ b(QS, { asChild: !0, children: /* @__PURE__ */ b(
      ne.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
Ep.displayName = JS;
var QS = m.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ b(
    ne.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function eP(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), jj(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", i = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (i) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...eP(n));
    }
  }), t;
}
function pa(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Uf(o, i) : o.dispatchEvent(i);
}
var dv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), i = n > o;
  return t === "left" || t === "right" ? i && n > r : !i && o > r;
};
function Dj(e = () => {
}) {
  const t = pt(e);
  nt(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function jj(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Lj(e) {
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
var $j = WS, tP = VS, rP = HS, nP = GS, oP = YS, iP = ZS, Bj = Ep;
const Fj = {
  default: null,
  success: T_,
  destructive: N_,
  warning: tk,
  info: R_
}, zj = $j, aP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  tP,
  {
    ref: r,
    className: V(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
aP.displayName = tP.displayName;
const Uj = vo(
  "group pointer-events-auto relative flex w-full overflow-hidden rounded-xl shadow-xl transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border border-border",
        success: "bg-success text-success-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Wj = vo(
  "flex shrink-0 items-center justify-center rounded-lg w-10 h-10",
  {
    variants: {
      variant: {
        default: "bg-foreground/10",
        success: "bg-success-foreground/20",
        destructive: "bg-destructive-foreground/20",
        warning: "bg-warning-foreground/20",
        info: "bg-info-foreground/20"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), sP = m.forwardRef(({ className: e, variant: t, showIcon: r = !0, children: n, ...o }, i) => {
  const a = t ? Fj[t] : null;
  return /* @__PURE__ */ b(
    rP,
    {
      ref: i,
      className: V(Uj({ variant: t }), e),
      ...o,
      children: /* @__PURE__ */ U("div", { className: "flex w-full items-start gap-3 p-4", children: [
        r && a && /* @__PURE__ */ b("div", { className: V(Wj({ variant: t })), children: /* @__PURE__ */ b(a, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: n }),
        /* @__PURE__ */ b(Bj, { className: "shrink-0 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring", children: /* @__PURE__ */ b(Ff, { className: "h-4 w-4" }) })
      ] })
    }
  );
});
sP.displayName = rP.displayName;
const Kj = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  iP,
  {
    ref: r,
    className: V(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-current/20 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
Kj.displayName = iP.displayName;
const cP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nP,
  {
    ref: r,
    className: V("text-sm font-bold leading-tight", e),
    ...t
  }
));
cP.displayName = nP.displayName;
const lP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  oP,
  {
    ref: r,
    className: V("text-sm opacity-80 mt-1 leading-snug", e),
    ...t
  }
));
lP.displayName = oP.displayName;
const Vj = 1, qj = 1e6;
let Dl = 0;
function Hj() {
  return Dl = (Dl + 1) % Number.MAX_SAFE_INTEGER, Dl.toString();
}
const jl = /* @__PURE__ */ new Map(), fv = (e) => {
  if (jl.has(e))
    return;
  const t = setTimeout(() => {
    jl.delete(e), ei({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, qj);
  jl.set(e, t);
}, Gj = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Vj)
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
      return r ? fv(r) : e.toasts.forEach((n) => {
        fv(n.id);
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
}, Ba = [];
let Fa = { toasts: [] };
function ei(e) {
  Fa = Gj(Fa, e), Ba.forEach((t) => {
    t(Fa);
  });
}
function jd({ ...e }) {
  const t = Hj(), r = (o) => ei({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => ei({ type: "DISMISS_TOAST", toastId: t });
  return ei({
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
function uP() {
  const [e, t] = m.useState(Fa);
  return m.useEffect(() => (Ba.push(t), () => {
    const r = Ba.indexOf(t);
    r > -1 && Ba.splice(r, 1);
  }), [e]), {
    ...e,
    toast: jd,
    dismiss: (r) => ei({ type: "DISMISS_TOAST", toastId: r })
  };
}
function b7() {
  const { toasts: e } = uP();
  return /* @__PURE__ */ U(zj, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...i }) {
      return /* @__PURE__ */ U(sP, { ...i, children: [
        r && /* @__PURE__ */ b(cP, { children: r }),
        n && /* @__PURE__ */ b(lP, { children: n }),
        o
      ] }, t);
    }),
    /* @__PURE__ */ b(aP, {})
  ] });
}
var [xc] = Et("Tooltip", [
  Eo
]), Ec = Eo(), dP = "TooltipProvider", Yj = 700, Ld = "tooltip.open", [Xj, Sp] = xc(dP), fP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Yj,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = m.useRef(!0), s = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ b(
    Xj,
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
fP.displayName = dP;
var ci = "Tooltip", [Zj, Sc] = xc(ci), pP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = e, c = Sp(ci, e.__scopeTooltip), u = Ec(t), [l, d] = m.useState(null), p = Nt(), f = m.useRef(0), v = a ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = m.useRef(!1), [y, w] = qt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ld))) : c.onClose(), i?.(O);
    },
    caller: ci
  }), x = m.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), S = m.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, g.current = !1, w(!0);
  }, [w]), E = m.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, w(!1);
  }, [w]), P = m.useCallback(() => {
    window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      g.current = !0, w(!0), f.current = 0;
    }, h);
  }, [h, w]);
  return m.useEffect(() => () => {
    f.current && (window.clearTimeout(f.current), f.current = 0);
  }, []), /* @__PURE__ */ b(uc, { ...u, children: /* @__PURE__ */ b(
    Zj,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: x,
      trigger: l,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : S();
      }, [c.isOpenDelayedRef, P, S]),
      onTriggerLeave: m.useCallback(() => {
        v ? E() : (window.clearTimeout(f.current), f.current = 0);
      }, [E, v]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: v,
      children: r
    }
  ) });
};
pP.displayName = ci;
var $d = "TooltipTrigger", hP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Sc($d, r), i = Sp($d, r), a = Ec(r), s = m.useRef(null), c = de(t, s, o.onTriggerChange), u = m.useRef(!1), l = m.useRef(!1), d = m.useCallback(() => u.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ b(op, { asChild: !0, ...a, children: /* @__PURE__ */ b(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: q(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !l.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), l.current = !0);
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
hP.displayName = $d;
var Jj = "TooltipPortal", [w7, Qj] = xc(Jj, {
  forceMount: void 0
}), ao = "TooltipContent", mP = m.forwardRef(
  (e, t) => {
    const r = Qj(ao, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...i } = e, a = Sc(ao, e.__scopeTooltip);
    return /* @__PURE__ */ b(jt, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ b(vP, { side: o, ...i, ref: t }) : /* @__PURE__ */ b(e2, { side: o, ...i, ref: t }) });
  }
), e2 = m.forwardRef((e, t) => {
  const r = Sc(ao, e.__scopeTooltip), n = Sp(ao, e.__scopeTooltip), o = m.useRef(null), i = de(t, o), [a, s] = m.useState(null), { trigger: c, onClose: u } = r, l = o.current, { onPointerInTransitChange: d } = n, p = m.useCallback(() => {
    s(null), d(!1);
  }, [d]), f = m.useCallback(
    (v, h) => {
      const g = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = i2(y, g.getBoundingClientRect()), x = a2(y, w), S = s2(h.getBoundingClientRect()), E = l2([...x, ...S]);
      s(E), d(!0);
    },
    [d]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (c && l) {
      const v = (g) => f(g, l), h = (g) => f(g, c);
      return c.addEventListener("pointerleave", v), l.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", v), l.removeEventListener("pointerleave", h);
      };
    }
  }, [c, l, f, p]), m.useEffect(() => {
    if (a) {
      const v = (h) => {
        const g = h.target, y = { x: h.clientX, y: h.clientY }, w = c?.contains(g) || l?.contains(g), x = !c2(y, a);
        w ? p() : x && (p(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, l, a, u, p]), /* @__PURE__ */ b(vP, { ...e, ref: i });
}), [t2, r2] = xc(ci, { isInside: !1 }), n2 = /* @__PURE__ */ c_("TooltipContent"), vP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...s
    } = e, c = Sc(ao, r), u = Ec(r), { onClose: l } = c;
    return m.useEffect(() => (document.addEventListener(Ld, l), () => document.removeEventListener(Ld, l)), [l]), m.useEffect(() => {
      if (c.trigger) {
        const d = (p) => {
          p.target?.contains(c.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, l]), /* @__PURE__ */ b(
      bo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ U(
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
              /* @__PURE__ */ b(n2, { children: n }),
              /* @__PURE__ */ b(t2, { scope: r, isInside: !0, children: /* @__PURE__ */ b(gD, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
mP.displayName = ao;
var gP = "TooltipArrow", o2 = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ec(r);
    return r2(
      gP,
      r
    ).isInside ? null : /* @__PURE__ */ b(ap, { ...o, ...n, ref: t });
  }
);
o2.displayName = gP;
function i2(e, t) {
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
function a2(e, t, r = 5) {
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
function s2(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function c2(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, l = s.y, d = c.x, p = c.y;
    l > n != p > n && r < (d - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function l2(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), u2(t);
}
function u2(e) {
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
var d2 = fP, f2 = pP, p2 = hP, yP = mP;
const x7 = d2, E7 = f2, S7 = p2, h2 = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ b(
  yP,
  {
    ref: n,
    sideOffset: t,
    className: V(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
h2.displayName = yP.displayName;
const bP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ b(
  "table",
  {
    ref: r,
    className: V("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
bP.displayName = "Table";
const wP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b("thead", { ref: r, className: V("[&_tr]:border-b", e), ...t }));
wP.displayName = "TableHeader";
const xP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tbody",
  {
    ref: r,
    className: V("[&_tr:last-child]:border-0", e),
    ...t
  }
));
xP.displayName = "TableBody";
const m2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tfoot",
  {
    ref: r,
    className: V(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
m2.displayName = "TableFooter";
const Zo = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "tr",
  {
    ref: r,
    className: V(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Zo.displayName = "TableRow";
const EP = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "th",
  {
    ref: r,
    className: V(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
EP.displayName = "TableHead";
const za = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "td",
  {
    ref: r,
    className: V(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
za.displayName = "TableCell";
const v2 = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  "caption",
  {
    ref: r,
    className: V("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
v2.displayName = "TableCaption";
const SP = m.forwardRef(
  ({
    className: e,
    title: t,
    logo: r,
    items: n = [],
    groups: o = [],
    isCollapsed: i = !1,
    onToggleCollapse: a,
    width: s = 220,
    collapsedWidth: c = 64,
    showCollapseButton: u = !0,
    onLogout: l,
    onLogoClick: d,
    companyLogo: p,
    headerMode: f = "default",
    headerLogo: v,
    headerLogoCollapsed: h,
    isMobile: g = !1,
    isMobileOpen: y = !1,
    onMobileClose: w,
    mobileWidth: x = 280,
    ...S
  }, E) => {
    const [P, O] = m.useState(!1), [A, _] = m.useState({});
    m.useEffect(() => {
      const C = {};
      o.forEach((D) => {
        C[D.label] = D.defaultExpanded !== !1;
      }), _(C);
    }, [o]);
    const N = a ? i : P, T = a || (() => O(!P)), I = (C) => {
      _((D) => ({
        ...D,
        [C]: !D[C]
      }));
    }, j = (C) => C.map((D) => /* @__PURE__ */ U(
      "button",
      {
        type: "button",
        onClick: () => {
          D.onClick?.(), g && w?.();
        },
        "aria-current": D.active ? "page" : void 0,
        "aria-label": N ? D.label : void 0,
        className: V(
          "relative flex w-full items-center transition-all my-0.5 font-medium text-muted-foreground",
          N ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
          D.active && "bg-primary/5 text-primary font-semibold",
          "hover:bg-accent dark:hover:bg-accent/80 hover:text-primary",
          D.active && "hover:bg-primary/10 dark:hover:bg-primary/20"
        ),
        children: [
          D.active && /* @__PURE__ */ b("div", { className: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary" }),
          D.icon && /* @__PURE__ */ b("div", { className: V("flex items-center justify-center w-5 h-5", !N && "mr-3"), children: D.icon }),
          !N && /* @__PURE__ */ b("span", { className: "text-sm whitespace-nowrap overflow-hidden text-ellipsis", children: D.label })
        ]
      },
      D.key
    ));
    return /* @__PURE__ */ U(yt, { children: [
      g && y && /* @__PURE__ */ b(
        "div",
        {
          className: "fixed inset-0 z-[110] bg-black/40",
          onClick: w
        }
      ),
      /* @__PURE__ */ U(
        "aside",
        {
          ref: E,
          className: V(
            "fixed left-0 top-0 h-screen bg-card flex flex-col transition-all duration-300 overflow-visible shadow-sm dark:border-r dark:border-border/70",
            g ? "z-[120]" : "z-40",
            g && !y && "-translate-x-full",
            g && y && "translate-x-0",
            e
          ),
          style: {
            width: g ? `${x}px` : N ? `${c}px` : `${s}px`
          },
          ...S,
          children: [
            f === "companyLogo" && v ? /* @__PURE__ */ b(
              "div",
              {
                onClick: d,
                className: V(
                  "flex items-center justify-center min-h-[60px] bg-card mb-1 px-3 py-3",
                  d && "cursor-pointer hover:bg-accent dark:hover:bg-accent/80 transition-colors"
                ),
                children: /* @__PURE__ */ b(
                  "img",
                  {
                    src: N && h ? h : v,
                    alt: "Logo",
                    className: V(
                      "object-contain transition-all",
                      N ? "h-8 w-8" : "h-14 max-w-full"
                    )
                  }
                )
              }
            ) : (t || r) && /* @__PURE__ */ U(
              "div",
              {
                onClick: d,
                className: V(
                  "flex items-center min-h-[60px] bg-card mb-1",
                  N ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5",
                  d && "cursor-pointer hover:bg-accent dark:hover:bg-accent/80 transition-colors"
                ),
                children: [
                  r,
                  !N && /* @__PURE__ */ b("div", { className: "flex-1 overflow-hidden ml-3", children: t && /* @__PURE__ */ b("div", { className: "font-semibold text-base text-foreground leading-tight tracking-tight", children: t }) })
                ]
              }
            ),
            /* @__PURE__ */ U("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4 scrollbar-hide", children: [
              n.length > 0 && j(n),
              o.map((C) => {
                const D = A[C.label], $ = C.collapsible !== !1;
                return /* @__PURE__ */ U("div", { className: "mb-6", children: [
                  !N && /* @__PURE__ */ U(
                    "button",
                    {
                      type: "button",
                      onClick: () => $ && I(C.label),
                      "aria-expanded": D,
                      className: V(
                        "w-full px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center justify-between text-left",
                        $ && "cursor-pointer hover:text-foreground transition-colors"
                      ),
                      children: [
                        /* @__PURE__ */ b("span", { children: C.label }),
                        $ && /* @__PURE__ */ b("div", { className: "w-3 h-3", children: D ? /* @__PURE__ */ b(Gw, { className: "w-3 h-3" }) : /* @__PURE__ */ b(ni, { className: "w-3 h-3" }) })
                      ]
                    }
                  ),
                  D && j(C.items)
                ] }, C.label);
              })
            ] }),
            p && !N && /* @__PURE__ */ b("div", { className: "mt-auto p-4 flex justify-center", children: /* @__PURE__ */ b(
              "img",
              {
                src: p,
                alt: "Logo da Empresa",
                className: "h-14 opacity-80 hover:opacity-100 transition-opacity"
              }
            ) }),
            u && !g && /* @__PURE__ */ b(
              "button",
              {
                onClick: T,
                type: "button",
                "aria-label": N ? "Expandir menu lateral" : "Recolher menu lateral",
                className: "absolute bottom-20 -right-3 bg-card border border-border rounded-sm p-1 cursor-pointer flex items-center justify-center transition-all w-6 h-6 shadow-sm hover:bg-accent dark:hover:bg-accent/80 hover:shadow-md active:scale-95",
                children: /* @__PURE__ */ b("div", { className: "w-3.5 h-3.5 text-muted-foreground flex items-center justify-center", children: N ? /* @__PURE__ */ b(qs, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ b(Hw, { className: "w-3.5 h-3.5" }) })
              }
            )
          ]
        }
      )
    ] });
  }
);
SP.displayName = "Sidebar";
const g2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: V("flex items-center border-b p-4", e), ...t })
);
g2.displayName = "SidebarHeader";
const y2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: V("flex-1 overflow-y-auto p-4", e), ...t })
);
y2.displayName = "SidebarContent";
const b2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("div", { ref: r, className: V("border-t p-4", e), ...t })
);
b2.displayName = "SidebarFooter";
const w2 = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ b("nav", { ref: r, className: V("flex flex-col space-y-1", e), ...t })
);
w2.displayName = "SidebarNav";
const x2 = m.forwardRef(
  ({ className: e, active: t, icon: r, children: n, ...o }, i) => /* @__PURE__ */ U(
    "a",
    {
      ref: i,
      className: V(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent dark:hover:bg-accent/80 hover:text-accent-foreground",
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
x2.displayName = "SidebarNavItem";
const PP = m.forwardRef(
  ({ className: e, items: t, separator: r, ...n }, o) => t.length === 0 ? null : /* @__PURE__ */ b(
    "nav",
    {
      ref: o,
      className: V("flex items-center gap-2 text-sm", e),
      "aria-label": "Breadcrumb",
      ...n,
      children: t.map((i, a) => /* @__PURE__ */ U(m.Fragment, { children: [
        /* @__PURE__ */ b(
          "span",
          {
            className: V(
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
        a < t.length - 1 && /* @__PURE__ */ b("span", { className: "text-border flex items-center select-none", children: r || /* @__PURE__ */ b(qs, { className: "h-3.5 w-3.5" }) })
      ] }, a))
    }
  )
);
PP.displayName = "Breadcrumb";
function OP(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: E2 } = Object.prototype, { getPrototypeOf: Pp } = Object, { iterator: Pc, toStringTag: AP } = Symbol, Oc = /* @__PURE__ */ ((e) => (t) => {
  const r = E2.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), or = (e) => (e = e.toLowerCase(), (t) => Oc(t) === e), Ac = (e) => (t) => typeof t === e, { isArray: Oo } = Array, so = Ac("undefined");
function Ii(e) {
  return e !== null && !so(e) && e.constructor !== null && !so(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const CP = or("ArrayBuffer");
function S2(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && CP(e.buffer), t;
}
const P2 = Ac("string"), wt = Ac("function"), TP = Ac("number"), Ri = (e) => e !== null && typeof e == "object", O2 = (e) => e === !0 || e === !1, Ua = (e) => {
  if (Oc(e) !== "object")
    return !1;
  const t = Pp(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(AP in e) && !(Pc in e);
}, A2 = (e) => {
  if (!Ri(e) || Ii(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, C2 = or("Date"), T2 = or("File"), _2 = or("Blob"), k2 = or("FileList"), N2 = (e) => Ri(e) && wt(e.pipe), I2 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = Oc(e)) === "formdata" || // detect form-data instance
  t === "object" && wt(e.toString) && e.toString() === "[object FormData]"));
}, R2 = or("URLSearchParams"), [M2, D2, j2, L2] = ["ReadableStream", "Request", "Response", "Headers"].map(or), $2 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mi(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Oo(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (Ii(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function _P(e, t) {
  if (Ii(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kP = (e) => !so(e) && e !== gn;
function Bd() {
  const { caseless: e, skipUndefined: t } = kP(this) && this || {}, r = {}, n = (o, i) => {
    const a = e && _P(r, i) || i;
    Ua(r[a]) && Ua(o) ? r[a] = Bd(r[a], o) : Ua(o) ? r[a] = Bd({}, o) : Oo(o) ? r[a] = o.slice() : (!t || !so(o)) && (r[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && Mi(arguments[o], n);
  return r;
}
const B2 = (e, t, r, { allOwnKeys: n } = {}) => (Mi(t, (o, i) => {
  r && wt(o) ? e[i] = OP(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), F2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), z2 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, U2 = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Pp(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, W2 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, K2 = (e) => {
  if (!e) return null;
  if (Oo(e)) return e;
  let t = e.length;
  if (!TP(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, V2 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pp(Uint8Array)), q2 = (e, t) => {
  const n = (e && e[Pc]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, H2 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, G2 = or("HTMLFormElement"), Y2 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), pv = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), X2 = or("RegExp"), NP = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Mi(r, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, Z2 = (e) => {
  NP(e, (t, r) => {
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
}, J2 = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Oo(e) ? n(e) : n(String(e).split(t)), r;
}, Q2 = () => {
}, eL = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function tL(e) {
  return !!(e && wt(e.append) && e[AP] === "FormData" && e[Pc]);
}
const rL = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Ri(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Ii(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Oo(n) ? [] : {};
        return Mi(n, (a, s) => {
          const c = r(a, o + 1);
          !so(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, nL = or("AsyncFunction"), oL = (e) => e && (Ri(e) || wt(e)) && wt(e.then) && wt(e.catch), IP = ((e, t) => e ? setImmediate : t ? ((r, n) => (gn.addEventListener("message", ({ source: o, data: i }) => {
  o === gn && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), gn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  wt(gn.postMessage)
), iL = typeof queueMicrotask < "u" ? queueMicrotask.bind(gn) : typeof process < "u" && process.nextTick || IP, aL = (e) => e != null && wt(e[Pc]), R = {
  isArray: Oo,
  isArrayBuffer: CP,
  isBuffer: Ii,
  isFormData: I2,
  isArrayBufferView: S2,
  isString: P2,
  isNumber: TP,
  isBoolean: O2,
  isObject: Ri,
  isPlainObject: Ua,
  isEmptyObject: A2,
  isReadableStream: M2,
  isRequest: D2,
  isResponse: j2,
  isHeaders: L2,
  isUndefined: so,
  isDate: C2,
  isFile: T2,
  isBlob: _2,
  isRegExp: X2,
  isFunction: wt,
  isStream: N2,
  isURLSearchParams: R2,
  isTypedArray: V2,
  isFileList: k2,
  forEach: Mi,
  merge: Bd,
  extend: B2,
  trim: $2,
  stripBOM: F2,
  inherits: z2,
  toFlatObject: U2,
  kindOf: Oc,
  kindOfTest: or,
  endsWith: W2,
  toArray: K2,
  forEachEntry: q2,
  matchAll: H2,
  isHTMLForm: G2,
  hasOwnProperty: pv,
  hasOwnProp: pv,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: NP,
  freezeMethods: Z2,
  toObjectSet: J2,
  toCamelCase: Y2,
  noop: Q2,
  toFiniteNumber: eL,
  findKey: _P,
  global: gn,
  isContextDefined: kP,
  isSpecCompliantForm: tL,
  toJSONObject: rL,
  isAsyncFn: nL,
  isThenable: oL,
  setImmediate: IP,
  asap: iL,
  isIterable: aL
};
function ce(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
R.inherits(ce, Error, {
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
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const RP = ce.prototype, MP = {};
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
  MP[e] = { value: e };
});
Object.defineProperties(ce, MP);
Object.defineProperty(RP, "isAxiosError", { value: !0 });
ce.from = (e, t, r, n, o, i) => {
  const a = Object.create(RP);
  R.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return ce.call(a, s, c, r, n, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", i && Object.assign(a, i), a;
};
const sL = null;
function Fd(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function DP(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hv(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = DP(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function cL(e) {
  return R.isArray(e) && !e.some(Fd);
}
const lL = R.toFlatObject(R, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Cc(e, t, r) {
  if (!R.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = R.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !R.isUndefined(g[h]);
  });
  const n = r.metaTokens, o = r.visitor || l, i = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(t);
  if (!R.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (R.isDate(v))
      return v.toISOString();
    if (R.isBoolean(v))
      return v.toString();
    if (!c && R.isBlob(v))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(v) || R.isTypedArray(v) ? c && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, h, g) {
    let y = v;
    if (v && !g && typeof v == "object") {
      if (R.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (R.isArray(v) && cL(v) || (R.isFileList(v) || R.endsWith(h, "[]")) && (y = R.toArray(v)))
        return h = DP(h), y.forEach(function(x, S) {
          !(R.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? hv([h], S, i) : a === null ? h : h + "[]",
            u(x)
          );
        }), !1;
    }
    return Fd(v) ? !0 : (t.append(hv(g, h, i), u(v)), !1);
  }
  const d = [], p = Object.assign(lL, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Fd
  });
  function f(v, h) {
    if (!R.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(v), R.forEach(v, function(y, w) {
        (!(R.isUndefined(y) || y === null) && o.call(
          t,
          y,
          R.isString(w) ? w.trim() : w,
          h,
          p
        )) === !0 && f(y, h ? h.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return f(e), t;
}
function mv(e) {
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
function Op(e, t) {
  this._pairs = [], e && Cc(e, this, t);
}
const jP = Op.prototype;
jP.append = function(t, r) {
  this._pairs.push([t, r]);
};
jP.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, mv);
  } : mv;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function uL(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function LP(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || uL;
  R.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = R.isURLSearchParams(t) ? t.toString() : new Op(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class vv {
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
    R.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const $P = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dL = typeof URLSearchParams < "u" ? URLSearchParams : Op, fL = typeof FormData < "u" ? FormData : null, pL = typeof Blob < "u" ? Blob : null, hL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dL,
    FormData: fL,
    Blob: pL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ap = typeof window < "u" && typeof document < "u", zd = typeof navigator == "object" && navigator || void 0, mL = Ap && (!zd || ["ReactNative", "NativeScript", "NS"].indexOf(zd.product) < 0), vL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", gL = Ap && window.location.href || "http://localhost", yL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ap,
  hasStandardBrowserEnv: mL,
  hasStandardBrowserWebWorkerEnv: vL,
  navigator: zd,
  origin: gL
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...yL,
  ...hL
};
function bL(e, t) {
  return Cc(e, new st.classes.URLSearchParams(), {
    visitor: function(r, n, o, i) {
      return st.isNode && R.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function wL(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xL(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function BP(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= r.length;
    return a = !a && R.isArray(o) ? o.length : a, c ? (R.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !R.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && R.isArray(o[a]) && (o[a] = xL(o[a])), !s);
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const r = {};
    return R.forEachEntry(e, (n, o) => {
      t(wL(n), o, r, 0);
    }), r;
  }
  return null;
}
function EL(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Di = {
  transitional: $P,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = R.isObject(t);
    if (i && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t))
      return o ? JSON.stringify(BP(t)) : t;
    if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t) || R.isReadableStream(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return bL(t, this.formSerializer).toString();
      if ((s = R.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Cc(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), EL(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Di.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (R.isResponse(t) || R.isReadableStream(t))
      return t;
    if (t && R.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ce.from(s, ce.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Di.headers[e] = {};
});
const SL = R.toObjectSet([
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
]), PL = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && SL[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, gv = Symbol("internals");
function Fo(e) {
  return e && String(e).trim().toLowerCase();
}
function Wa(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Wa) : String(e);
}
function OL(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const AL = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ll(e, t, r, n, o) {
  if (R.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!R.isString(t)) {
    if (R.isString(n))
      return t.indexOf(n) !== -1;
    if (R.isRegExp(n))
      return n.test(t);
  }
}
function CL(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function TL(e, t) {
  const r = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
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
    function i(s, c, u) {
      const l = Fo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = R.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = Wa(s));
    }
    const a = (s, c) => R.forEach(s, (u, l) => i(u, l, c));
    if (R.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (R.isString(t) && (t = t.trim()) && !AL(t))
      a(PL(t), r);
    else if (R.isObject(t) && R.isIterable(t)) {
      let s = {}, c, u;
      for (const l of t) {
        if (!R.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = l[0]] = (c = s[u]) ? R.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      a(s, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Fo(t), t) {
      const n = R.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return OL(o);
        if (R.isFunction(r))
          return r.call(this, o, n);
        if (R.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Fo(t), t) {
      const n = R.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ll(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Fo(a), a) {
        const s = R.findKey(n, a);
        s && (!r || Ll(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return R.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Ll(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return R.forEach(this, (o, i) => {
      const a = R.findKey(n, i);
      if (a) {
        r[a] = Wa(o), delete r[i];
        return;
      }
      const s = t ? CL(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Wa(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && R.isArray(n) ? n.join(", ") : n);
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
    const n = (this[gv] = this[gv] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Fo(a);
      n[s] || (TL(o, a), n[s] = !0);
    }
    return R.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(xt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
R.freezeMethods(xt);
function $l(e, t) {
  const r = this || Di, n = t || r, o = xt.from(n.headers);
  let i = n.data;
  return R.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function FP(e) {
  return !!(e && e.__CANCEL__);
}
function Ao(e, t, r) {
  ce.call(this, e ?? "canceled", ce.ERR_CANCELED, t, r), this.name = "CanceledError";
}
R.inherits(Ao, ce, {
  __CANCEL__: !0
});
function zP(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ce(
    "Request failed with status code " + r.status,
    [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function _L(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function kL(e, t) {
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
    const f = l && u - l;
    return f ? Math.round(p * 1e3 / f) : void 0;
  };
}
function NL(e, t) {
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
const rs = (e, t, r = 3) => {
  let n = 0;
  const o = kL(50, 250);
  return NL((i) => {
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
}, yv = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, bv = (e) => (...t) => R.asap(() => e(...t)), IL = st.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, st.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(st.origin),
  st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)
) : () => !0, RL = st.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      R.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), R.isString(n) && s.push(`path=${n}`), R.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), R.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function ML(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function DL(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function UP(e, t, r) {
  let n = !ML(t);
  return e && (n || r == !1) ? DL(e, t) : t;
}
const wv = (e) => e instanceof xt ? { ...e } : e;
function In(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, d, p) {
    return R.isPlainObject(u) && R.isPlainObject(l) ? R.merge.call({ caseless: p }, u, l) : R.isPlainObject(l) ? R.merge({}, l) : R.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d, p) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(u))
        return n(void 0, u, d, p);
    } else return n(u, l, d, p);
  }
  function i(u, l) {
    if (!R.isUndefined(l))
      return n(void 0, l);
  }
  function a(u, l) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(u))
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
    headers: (u, l, d) => o(wv(u), wv(l), d, !0)
  };
  return R.forEach(Object.keys({ ...e, ...t }), function(l) {
    const d = c[l] || o, p = d(e[l], t[l], l);
    R.isUndefined(p) && d !== s || (r[l] = p);
  }), r;
}
const WP = (e) => {
  const t = In({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  if (t.headers = a = xt.from(a), t.url = LP(UP(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), R.isFormData(r)) {
    if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (R.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, d]) => {
        u.includes(l.toLowerCase()) && a.set(l, d);
      });
    }
  }
  if (st.hasStandardBrowserEnv && (n && R.isFunction(n) && (n = n(t)), n || n !== !1 && IL(t.url))) {
    const c = o && i && RL.read(i);
    c && a.set(o, c);
  }
  return t;
}, jL = typeof XMLHttpRequest < "u", LL = jL && function(e) {
  return new Promise(function(r, n) {
    const o = WP(e);
    let i = o.data;
    const a = xt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, l, d, p, f, v;
    function h() {
      f && f(), v && v(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function y() {
      if (!g)
        return;
      const x = xt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      zP(function(O) {
        r(O), h();
      }, function(O) {
        n(O), h();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (n(new ce("Request aborted", ce.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(S) {
      const E = S && S.message ? S.message : "Network Error", P = new ce(E, ce.ERR_NETWORK, e, g);
      P.event = S || null, n(P), g = null;
    }, g.ontimeout = function() {
      let S = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const E = o.transitional || $P;
      o.timeoutErrorMessage && (S = o.timeoutErrorMessage), n(new ce(
        S,
        E.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in g && R.forEach(a.toJSON(), function(S, E) {
      g.setRequestHeader(E, S);
    }), R.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), u && ([p, v] = rs(u, !0), g.addEventListener("progress", p)), c && g.upload && ([d, f] = rs(c), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", f)), (o.cancelToken || o.signal) && (l = (x) => {
      g && (n(!x || x.type ? new Ao(null, e, g) : x), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = _L(o.url);
    if (w && st.protocols.indexOf(w) === -1) {
      n(new ce("Unsupported protocol " + w + ":", ce.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, $L = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, s();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof ce ? l : new Ao(l instanceof Error ? l.message : l));
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new ce(`timeout ${t} of ms exceeded`, ce.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => R.asap(s), c;
  }
}, BL = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, FL = async function* (e, t) {
  for await (const r of zL(e))
    yield* BL(r, t);
}, zL = async function* (e) {
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
}, xv = (e, t, r, n) => {
  const o = FL(e, t);
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
}, Ev = 64 * 1024, { isFunction: ha } = R, UL = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(R.global), {
  ReadableStream: Sv,
  TextEncoder: Pv
} = R.global, Ov = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, WL = (e) => {
  e = R.merge.call({
    skipUndefined: !0
  }, UL, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? ha(t) : typeof fetch == "function", i = ha(r), a = ha(n);
  if (!o)
    return !1;
  const s = o && ha(Sv), c = o && (typeof Pv == "function" ? /* @__PURE__ */ ((v) => (h) => v.encode(h))(new Pv()) : async (v) => new Uint8Array(await new r(v).arrayBuffer())), u = i && s && Ov(() => {
    let v = !1;
    const h = new r(st.origin, {
      body: new Sv(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }).headers.has("Content-Type");
    return v && !h;
  }), l = a && s && Ov(() => R.isReadableStream(new n("").body)), d = {
    stream: l && ((v) => v.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !d[v] && (d[v] = (h, g) => {
      let y = h && h[v];
      if (y)
        return y.call(h);
      throw new ce(`Response type '${v}' is not supported`, ce.ERR_NOT_SUPPORT, g);
    });
  });
  const p = async (v) => {
    if (v == null)
      return 0;
    if (R.isBlob(v))
      return v.size;
    if (R.isSpecCompliantForm(v))
      return (await new r(st.origin, {
        method: "POST",
        body: v
      }).arrayBuffer()).byteLength;
    if (R.isArrayBufferView(v) || R.isArrayBuffer(v))
      return v.byteLength;
    if (R.isURLSearchParams(v) && (v = v + ""), R.isString(v))
      return (await c(v)).byteLength;
  }, f = async (v, h) => {
    const g = R.toFiniteNumber(v.getContentLength());
    return g ?? p(h);
  };
  return async (v) => {
    let {
      url: h,
      method: g,
      data: y,
      signal: w,
      cancelToken: x,
      timeout: S,
      onDownloadProgress: E,
      onUploadProgress: P,
      responseType: O,
      headers: A,
      withCredentials: _ = "same-origin",
      fetchOptions: N
    } = WP(v), T = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let I = $L([w, x && x.toAbortSignal()], S), j = null;
    const C = I && I.unsubscribe && (() => {
      I.unsubscribe();
    });
    let D;
    try {
      if (P && u && g !== "get" && g !== "head" && (D = await f(A, y)) !== 0) {
        let H = new r(h, {
          method: "POST",
          body: y,
          duplex: "half"
        }), ae;
        if (R.isFormData(y) && (ae = H.headers.get("content-type")) && A.setContentType(ae), H.body) {
          const [ie, W] = yv(
            D,
            rs(bv(P))
          );
          y = xv(H.body, Ev, ie, W);
        }
      }
      R.isString(_) || (_ = _ ? "include" : "omit");
      const $ = i && "credentials" in r.prototype, z = {
        ...N,
        signal: I,
        method: g.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: $ ? _ : void 0
      };
      j = i && new r(h, z);
      let M = await (i ? T(j, N) : T(h, z));
      const F = l && (O === "stream" || O === "response");
      if (l && (E || F && C)) {
        const H = {};
        ["status", "statusText", "headers"].forEach((te) => {
          H[te] = M[te];
        });
        const ae = R.toFiniteNumber(M.headers.get("content-length")), [ie, W] = E && yv(
          ae,
          rs(bv(E), !0)
        ) || [];
        M = new n(
          xv(M.body, Ev, ie, () => {
            W && W(), C && C();
          }),
          H
        );
      }
      O = O || "text";
      let oe = await d[R.findKey(d, O) || "text"](M, v);
      return !F && C && C(), await new Promise((H, ae) => {
        zP(H, ae, {
          data: oe,
          headers: xt.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: v,
          request: j
        });
      });
    } catch ($) {
      throw C && C(), $ && $.name === "TypeError" && /Load failed|fetch/i.test($.message) ? Object.assign(
        new ce("Network Error", ce.ERR_NETWORK, v, j),
        {
          cause: $.cause || $
        }
      ) : ce.from($, $ && $.code, v, j);
    }
  };
}, KL = /* @__PURE__ */ new Map(), KP = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, i = [
    n,
    o,
    r
  ];
  let a = i.length, s = a, c, u, l = KL;
  for (; s--; )
    c = i[s], u = l.get(c), u === void 0 && l.set(c, u = s ? /* @__PURE__ */ new Map() : WL(t)), l = u;
  return u;
};
KP();
const Cp = {
  http: sL,
  xhr: LL,
  fetch: {
    get: KP
  }
};
R.forEach(Cp, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Av = (e) => `- ${e}`, VL = (e) => R.isFunction(e) || e === null || e === !1;
function qL(e, t) {
  e = R.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const i = {};
  for (let a = 0; a < r; a++) {
    n = e[a];
    let s;
    if (o = n, !VL(n) && (o = Cp[(s = String(n)).toLowerCase()], o === void 0))
      throw new ce(`Unknown adapter '${s}'`);
    if (o && (R.isFunction(o) || (o = o.get(t))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? a.length > 1 ? `since :
` + a.map(Av).join(`
`) : " " + Av(a[0]) : "as no adapter specified";
    throw new ce(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const VP = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: qL,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cp
};
function Bl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ao(null, e);
}
function Cv(e) {
  return Bl(e), e.headers = xt.from(e.headers), e.data = $l.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), VP.getAdapter(e.adapter || Di.adapter, e)(e).then(function(n) {
    return Bl(e), n.data = $l.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xt.from(n.headers), n;
  }, function(n) {
    return FP(n) || (Bl(e), n && n.response && (n.response.data = $l.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xt.from(n.response.headers))), Promise.reject(n);
  });
}
const qP = "1.13.1", Tc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tc[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Tv = {};
Tc.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + qP + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ce(
        o(a, " has been removed" + (r ? " in " + r : "")),
        ce.ERR_DEPRECATED
      );
    return r && !Tv[a] && (Tv[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
Tc.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function HL(e, t, r) {
  if (typeof e != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new ce("option " + i + " must be " + c, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ce("Unknown option " + i, ce.ERR_BAD_OPTION);
  }
}
const Ka = {
  assertOptions: HL,
  validators: Tc
}, ar = Ka.validators;
let xn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new vv(),
      response: new vv()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = In(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Ka.assertOptions(n, {
      silentJSONParsing: ar.transitional(ar.boolean),
      forcedJSONParsing: ar.transitional(ar.boolean),
      clarifyTimeoutError: ar.transitional(ar.boolean)
    }, !1), o != null && (R.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ka.assertOptions(o, {
      encode: ar.function,
      serialize: ar.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ka.assertOptions(r, {
      baseUrl: ar.spelling("baseURL"),
      withXsrfToken: ar.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && R.merge(
      i.common,
      i[r.method]
    );
    i && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = xt.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (c = c && h.synchronous, s.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let l, d = 0, p;
    if (!c) {
      const v = [Cv.bind(this), void 0];
      for (v.unshift(...s), v.push(...u), p = v.length, l = Promise.resolve(r); d < p; )
        l = l.then(v[d++], v[d++]);
      return l;
    }
    p = s.length;
    let f = r;
    for (; d < p; ) {
      const v = s[d++], h = s[d++];
      try {
        f = v(f);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      l = Cv.call(this, f);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = u.length; d < p; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = In(this.defaults, t);
    const r = UP(t.baseURL, t.url, t.allowAbsoluteUrls);
    return LP(r, t.params, t.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function(t) {
  xn.prototype[t] = function(r, n) {
    return this.request(In(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(In(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  xn.prototype[t] = r(), xn.prototype[t + "Form"] = r(!0);
});
let GL = class HP {
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
      n.reason || (n.reason = new Ao(i, a, s), r(n.reason));
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
      token: new HP(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function YL(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function XL(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Ud = {
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
Object.entries(Ud).forEach(([e, t]) => {
  Ud[t] = e;
});
function GP(e) {
  const t = new xn(e), r = OP(xn.prototype.request, t);
  return R.extend(r, xn.prototype, t, { allOwnKeys: !0 }), R.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return GP(In(e, o));
  }, r;
}
const Ne = GP(Di);
Ne.Axios = xn;
Ne.CanceledError = Ao;
Ne.CancelToken = GL;
Ne.isCancel = FP;
Ne.VERSION = qP;
Ne.toFormData = Cc;
Ne.AxiosError = ce;
Ne.Cancel = Ne.CanceledError;
Ne.all = function(t) {
  return Promise.all(t);
};
Ne.spread = YL;
Ne.isAxiosError = XL;
Ne.mergeConfig = In;
Ne.AxiosHeaders = xt;
Ne.formToJSON = (e) => BP(R.isHTMLForm(e) ? new FormData(e) : e);
Ne.getAdapter = VP.getAdapter;
Ne.HttpStatusCode = Ud;
Ne.default = Ne;
const {
  Axios: A7,
  AxiosError: C7,
  CanceledError: T7,
  isCancel: _7,
  CancelToken: k7,
  VERSION: N7,
  all: I7,
  Cancel: R7,
  isAxiosError: M7,
  spread: D7,
  toFormData: j7,
  AxiosHeaders: L7,
  HttpStatusCode: $7,
  formToJSON: B7,
  getAdapter: F7,
  mergeConfig: z7
} = Ne;
let pn = null, Tp = "", _p = "";
const U7 = (e) => {
  pn = e;
}, W7 = (e) => {
  Tp = e, Zt.updateBaseURL(e);
}, ZL = () => Tp, K7 = (e) => {
  _p = e;
}, _v = () => _p;
class JL {
  instance;
  constructor() {
    this.instance = Ne.create({
      baseURL: Tp,
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
      return r && (t.headers.Authorization = `Bearer ${r}`), pn && pn.showLoader(), t;
    }), this.instance.interceptors.response.use(
      (t) => (pn && pn.hideLoader(), t),
      async (t) => {
        pn && pn.hideLoader();
        const r = t.config;
        if (t.response?.status === 401 && !r._retry) {
          r._retry = !0;
          const o = localStorage.getItem("@IdentityProvider:refreshToken");
          if (o)
            try {
              const i = await Ne.post(
                `${_p}/auth/RefreshToken`,
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
const Zt = new JL(), YP = m.createContext(null), QL = () => {
  const e = m.useContext(YP);
  if (!e)
    throw new Error("useTheme must be used within ThemeProvider");
  return e;
}, V7 = ({
  children: e,
  defaultDark: t = !1
}) => {
  const [r, n] = m.useState(() => {
    const i = localStorage.getItem("drts-dark-mode");
    return i ? i === "true" : t;
  });
  m.useEffect(() => {
    const i = document.documentElement;
    r ? i.classList.add("dark") : i.classList.remove("dark"), localStorage.setItem("drts-dark-mode", String(r));
  }, [r]);
  const o = m.useCallback(() => {
    n((i) => !i);
  }, []);
  return /* @__PURE__ */ b(YP.Provider, { value: { isDark: r, toggleDark: o }, children: e });
}, XP = m.forwardRef(
  ({
    className: e,
    isCollapsed: t = !1,
    isMobile: r = !1,
    onMobileMenuToggle: n,
    breadcrumbs: o = [],
    user: i,
    companyName: a,
    notifications: s = [],
    onNotificationRead: c,
    onMarkAllAsRead: u,
    onClearAllNotifications: l,
    onViewAllNotifications: d,
    userMenuTrigger: p,
    actions: f,
    modules: v,
    currentModule: h,
    onModuleChange: g,
    onLogout: y,
    showAboutMenuItem: w = !1,
    renderAboutModal: x,
    ...S
  }, E) => {
    const { isDark: P, toggleDark: O } = QL(), [A, _] = m.useState(!1), [N, T] = m.useState(!1), [I, j] = m.useState(!1), [C, D] = m.useState(!1), $ = () => {
      if (i?.avatarUrl) {
        const H = ZL().replace("/api", ""), ae = i.avatarUrl.startsWith("http") ? i.avatarUrl : `${H}${i.avatarUrl}`;
        return /* @__PURE__ */ b(
          "img",
          {
            src: ae,
            alt: i.name,
            style: { width: "100%", height: "100%", objectFit: "cover" }
          }
        );
      }
      return Lk(i?.name || "");
    }, z = s.filter((H) => !H.read).length, M = z > 0, F = (H) => {
      switch (H) {
        case "success":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-success", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
        case "warning":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-warning", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) });
        case "error":
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-destructive", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
        default:
          return /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ b("svg", { className: "h-4 w-4 text-info", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
      }
    }, oe = (H) => {
      const ie = (/* @__PURE__ */ new Date()).getTime() - H.getTime(), W = Math.floor(ie / 6e4), te = Math.floor(ie / 36e5), se = Math.floor(ie / 864e5);
      return W < 1 ? "Agora" : W < 60 ? `${W}m atrás` : te < 24 ? `${te}h atrás` : se < 7 ? `${se}d atrás` : H.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    };
    return /* @__PURE__ */ U(
      "nav",
      {
        ref: E,
        className: V(
          "fixed top-0 right-0 h-[52px] bg-card flex items-center justify-between px-5 transition-all duration-300 z-[100] shadow-sm dark:bg-card/95 dark:supports-[backdrop-filter]:bg-card/85 dark:backdrop-blur dark:border-b dark:border-border/70",
          e
        ),
        style: {
          left: r ? "0" : t ? "64px" : "220px"
        },
        ...S,
        children: [
          /* @__PURE__ */ U("div", { className: "flex items-center gap-4", children: [
            r && /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                onClick: n,
                "aria-label": "Abrir menu lateral",
                className: "p-2 rounded-sm transition-all hover:bg-accent dark:hover:bg-accent/80 text-muted-foreground hover:text-foreground active:scale-95",
                children: /* @__PURE__ */ b(B_, { className: "h-5 w-5" })
              }
            ),
            v && v.length > 0 && g && /* @__PURE__ */ U("div", { className: "relative", children: [
              /* @__PURE__ */ U(
                "button",
                {
                  onClick: () => D(!C),
                  className: "flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent dark:hover:bg-accent/80 transition-colors",
                  children: [
                    v.find((H) => H.id === h)?.icon && /* @__PURE__ */ b("span", { className: "text-lg", children: v.find((H) => H.id === h)?.icon }),
                    /* @__PURE__ */ b("span", { className: "font-semibold text-sm text-foreground", children: v.find((H) => H.id === h)?.name || "Selecione" }),
                    /* @__PURE__ */ b(ni, { className: "h-4 w-4 text-muted-foreground" })
                  ]
                }
              ),
              C && /* @__PURE__ */ U(yt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => D(!1)
                  }
                ),
                /* @__PURE__ */ U("div", { className: "absolute left-0 top-full mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg z-50 py-2", children: [
                  /* @__PURE__ */ b("div", { className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase", children: "Módulos" }),
                  v.map((H) => /* @__PURE__ */ U(
                    "button",
                    {
                      onClick: () => {
                        g(H.id), D(!1);
                      },
                      className: V(
                        "w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-accent dark:hover:bg-accent/80",
                        h === H.id && "bg-primary/5 text-primary font-medium"
                      ),
                      children: [
                        H.icon && /* @__PURE__ */ b("span", { className: "text-lg", children: H.icon }),
                        /* @__PURE__ */ b("span", { className: "flex-1 text-left", children: H.name }),
                        h === H.id && /* @__PURE__ */ b(Vs, { className: "h-4 w-4 text-primary" })
                      ]
                    },
                    H.id
                  ))
                ] })
              ] })
            ] }),
            o && o.length > 0 && /* @__PURE__ */ b(PP, { items: o })
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-4", children: [
            f,
            a && /* @__PURE__ */ b("span", { className: "text-sm font-medium text-muted-foreground hidden md:block", children: a }),
            s && s.length >= 0 && /* @__PURE__ */ U("div", { className: "relative", children: [
              /* @__PURE__ */ U(
                "button",
                {
                  onClick: () => j(!I),
                  className: "relative p-2 rounded-sm transition-all hover:bg-accent dark:hover:bg-accent/80 text-muted-foreground hover:text-foreground active:scale-95",
                  children: [
                    /* @__PURE__ */ b(Dm, { className: "h-5 w-5" }),
                    M && /* @__PURE__ */ U(yt, { children: [
                      /* @__PURE__ */ b("span", { className: "absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" }),
                      z > 0 && /* @__PURE__ */ b("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1", children: z > 9 ? "9+" : z })
                    ] })
                  ]
                }
              ),
              I && /* @__PURE__ */ U(yt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => j(!1)
                  }
                ),
                /* @__PURE__ */ U("div", { className: "absolute right-0 top-full mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[32rem] flex flex-col", children: [
                  /* @__PURE__ */ U("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
                    /* @__PURE__ */ U("div", { children: [
                      /* @__PURE__ */ b("h3", { className: "text-sm font-semibold text-foreground", children: "Notificações" }),
                      z > 0 && /* @__PURE__ */ U("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        z,
                        " não ",
                        z === 1 ? "lida" : "lidas"
                      ] })
                    ] }),
                    /* @__PURE__ */ U("div", { className: "flex items-center gap-3", children: [
                      u && z > 0 && /* @__PURE__ */ b(
                        "button",
                        {
                          onClick: () => {
                            u();
                          },
                          className: "text-xs text-primary hover:text-primary/80 font-medium transition-colors",
                          children: "Marcar como lidas"
                        }
                      ),
                      l && s.length > 0 && /* @__PURE__ */ b(
                        "button",
                        {
                          onClick: () => {
                            l();
                          },
                          className: "text-xs text-destructive hover:text-destructive/80 font-medium transition-colors",
                          children: "Limpar todas"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ b("div", { className: "overflow-y-auto flex-1 scrollbar-hide", children: s.length === 0 ? /* @__PURE__ */ U("div", { className: "flex flex-col items-center justify-center py-12 px-4", children: [
                    /* @__PURE__ */ b("div", { className: "w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-3", children: /* @__PURE__ */ b(Dm, { className: "h-8 w-8 text-muted-foreground/50" }) }),
                    /* @__PURE__ */ b("p", { className: "text-sm font-medium text-foreground", children: "Nenhuma notificação" }),
                    /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground mt-1", children: "Você está em dia!" })
                  ] }) : s.map((H) => /* @__PURE__ */ U(
                    "button",
                    {
                      onClick: () => {
                        c && !H.read && c(H.id);
                      },
                      className: V(
                        "w-full flex items-start gap-3 px-4 py-3 transition-colors hover:bg-accent dark:hover:bg-accent/80 border-b border-border/50 last:border-0 text-left",
                        !H.read && "bg-primary/5"
                      ),
                      children: [
                        F(H.type),
                        /* @__PURE__ */ U("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ U("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
                            /* @__PURE__ */ b("h4", { className: V(
                              "text-sm font-medium text-foreground line-clamp-1",
                              !H.read && "font-semibold"
                            ), children: H.title }),
                            !H.read && /* @__PURE__ */ b("div", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
                          ] }),
                          /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-1", children: H.message }),
                          /* @__PURE__ */ b("span", { className: "text-xs text-muted-foreground/70", children: oe(H.timestamp) })
                        ] })
                      ]
                    },
                    H.id
                  )) }),
                  d && s.length > 0 && /* @__PURE__ */ b("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ b(
                    "button",
                    {
                      onClick: () => {
                        d(), j(!1);
                      },
                      className: "w-full text-center py-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors hover:bg-accent dark:hover:bg-accent/80 rounded-md",
                      children: "Ver todas as notificações"
                    }
                  ) })
                ] })
              ] })
            ] }),
            p,
            i && !p && /* @__PURE__ */ U("div", { className: "relative", children: [
              /* @__PURE__ */ U(
                "button",
                {
                  onClick: () => _(!A),
                  className: "flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent dark:hover:bg-accent/80 active:scale-[0.98]",
                  children: [
                    /* @__PURE__ */ b("div", { className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: $() }),
                    /* @__PURE__ */ U("div", { className: "hidden md:flex flex-col items-start", children: [
                      /* @__PURE__ */ b("span", { className: "text-sm font-semibold text-foreground leading-tight", children: i.name }),
                      /* @__PURE__ */ b("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: i.role })
                    ] }),
                    /* @__PURE__ */ b(ni, { className: "h-4 w-4 text-muted-foreground" })
                  ]
                }
              ),
              A && /* @__PURE__ */ U(yt, { children: [
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => {
                      _(!1);
                    }
                  }
                ),
                /* @__PURE__ */ U("div", { className: "absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-md shadow-lg z-50 py-2", children: [
                  /* @__PURE__ */ U("div", { className: "px-4 py-3 border-b border-border", children: [
                    /* @__PURE__ */ b("p", { className: "text-sm font-semibold", children: i.name }),
                    /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: i.role })
                  ] }),
                  /* @__PURE__ */ b("div", { className: "py-1", children: w && x && /* @__PURE__ */ U(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        T(!0), _(!1);
                      },
                      className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent dark:hover:bg-accent/80",
                      children: [
                        /* @__PURE__ */ b("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                        "Sobre"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ b("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ U(
                    "button",
                    {
                      onClick: () => {
                        O();
                      },
                      className: "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent dark:hover:bg-accent/80",
                      children: [
                        /* @__PURE__ */ U("div", { className: "flex items-center gap-3", children: [
                          P ? /* @__PURE__ */ b(z_, { className: "h-4 w-4" }) : /* @__PURE__ */ b(Z_, { className: "h-4 w-4" }),
                          /* @__PURE__ */ U("span", { children: [
                            "Modo ",
                            P ? "Escuro" : "Claro"
                          ] })
                        ] }),
                        /* @__PURE__ */ b("div", { className: V(
                          "relative w-9 h-5 rounded-full transition-colors",
                          P ? "bg-primary" : "bg-muted"
                        ), children: /* @__PURE__ */ b("div", { className: V(
                          "absolute top-0.5 w-4 h-4 rounded-full bg-background transition-transform",
                          P ? "left-[18px]" : "left-0.5"
                        ) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ b("div", { className: "border-t border-border my-1" }),
                  /* @__PURE__ */ b("div", { className: "py-1", children: /* @__PURE__ */ U(
                    "button",
                    {
                      onClick: () => {
                        _(!1), y?.();
                      },
                      className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent dark:hover:bg-accent/80 text-destructive",
                      children: [
                        /* @__PURE__ */ b(L_, { className: "h-4 w-4" }),
                        "Sair"
                      ]
                    }
                  ) })
                ] })
              ] })
            ] })
          ] }),
          N && x && x(() => T(!1))
        ]
      }
    );
  }
);
XP.displayName = "Navbar";
const Fl = {
  width: 0,
  height: 0,
  borderLeft: "8px solid transparent",
  borderRight: "8px solid transparent",
  borderBottom: "14px solid currentColor",
  animation: "globalLoaderPulse 1.4s ease-in-out infinite"
}, ZP = ({ isVisible: e, className: t }) => e ? /* @__PURE__ */ U(
  "div",
  {
    className: V(
      "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]",
      t
    ),
    children: [
      /* @__PURE__ */ b("style", { children: `
        @keyframes globalLoaderPulse {
          0%, 80%, 100% { transform: scale(0.4); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      ` }),
      /* @__PURE__ */ U("div", { className: "text-primary", style: { position: "relative", width: 44, height: 38 }, children: [
        /* @__PURE__ */ b("div", { style: { ...Fl, position: "absolute", top: 0, left: 14, animationDelay: "0s" } }),
        /* @__PURE__ */ b("div", { style: { ...Fl, position: "absolute", bottom: 0, left: 0, animationDelay: "0.16s" } }),
        /* @__PURE__ */ b("div", { style: { ...Fl, position: "absolute", bottom: 0, right: 0, animationDelay: "0.32s" } })
      ] })
    ]
  }
) : null;
ZP.displayName = "GlobalLoader";
const JP = m.createContext(null), q7 = () => {
  const e = m.useContext(JP);
  if (!e)
    throw new Error("useGlobalLoader must be used within GlobalLoaderProvider");
  return e;
}, H7 = ({ children: e }) => {
  const [t, r] = m.useState(0), n = m.useCallback(() => {
    r((a) => a + 1);
  }, []), o = m.useCallback(() => {
    r((a) => Math.max(0, a - 1));
  }, []), i = t > 0;
  return /* @__PURE__ */ U(JP.Provider, { value: { isLoading: i, showLoader: n, hideLoader: o }, children: [
    e,
    /* @__PURE__ */ b(ZP, { isVisible: i })
  ] });
}, e$ = m.forwardRef(
  ({ title: e, icon: t, children: r, emptyMessage: n = "Nenhum dado disponível", isEmpty: o = !1, height: i = 400, className: a }, s) => /* @__PURE__ */ U("div", { ref: s, className: V("bg-card rounded-lg border shadow-sm", a), children: [
    e && /* @__PURE__ */ b("div", { className: "border-b px-6 py-4", children: /* @__PURE__ */ U("h3", { className: "text-lg font-semibold flex items-center gap-2", children: [
      t && /* @__PURE__ */ b("span", { className: "flex items-center", children: t }),
      e
    ] }) }),
    /* @__PURE__ */ b(
      "div",
      {
        className: "p-6",
        style: { height: typeof i == "number" ? `${i}px` : i },
        children: o ? /* @__PURE__ */ b("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: n }) : r
      }
    )
  ] })
);
e$.displayName = "ChartContainer";
var t$ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function kp(e) {
  if (typeof e != "string")
    return !1;
  var t = t$;
  return t.includes(e);
}
var r$ = [
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
function QP(e) {
  if (typeof e != "string")
    return !1;
  var t = r$;
  return t.includes(e);
}
function eO(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function ht(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return QP(n) || eO(n);
  });
  return Object.fromEntries(t);
}
function Rn(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Kt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return ht(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? ht(e) : null;
}
function mt(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return QP(n) || eO(n) || kp(n);
  });
  return Object.fromEntries(t);
}
function tO(e) {
  return e == null ? null : /* @__PURE__ */ Kt(e) ? mt(e.props) : typeof e == "object" && !Array.isArray(e) ? mt(e) : null;
}
var n$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wd.apply(null, arguments);
}
function o$(e, t) {
  if (e == null) return {};
  var r, n, o = i$(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function i$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Np = /* @__PURE__ */ Fe((e, t) => {
  var {
    children: r,
    width: n,
    height: o,
    viewBox: i,
    className: a,
    style: s,
    title: c,
    desc: u
  } = e, l = o$(e, n$), d = i || {
    width: n,
    height: o,
    x: 0,
    y: 0
  }, p = pe("recharts-surface", a);
  return /* @__PURE__ */ m.createElement("svg", Wd({}, mt(l), {
    className: p,
    width: n,
    height: o,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ m.createElement("title", null, c), /* @__PURE__ */ m.createElement("desc", null, u), r);
}), a$ = ["children", "className"];
function Kd() {
  return Kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kd.apply(null, arguments);
}
function s$(e, t) {
  if (e == null) return {};
  var r, n, o = c$(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function c$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var $e = /* @__PURE__ */ m.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, o = s$(e, a$), i = pe("recharts-layer", n);
  return /* @__PURE__ */ m.createElement("g", Kd({
    className: i
  }, mt(o), {
    ref: t
  }), r);
}), rO = /* @__PURE__ */ Dt(null), l$ = () => tr(rO);
function Oe(e) {
  return function() {
    return e;
  };
}
const nO = Math.cos, ns = Math.sin, ir = Math.sqrt, os = Math.PI, _c = 2 * os, Vd = Math.PI, qd = 2 * Vd, hn = 1e-6, u$ = qd - hn;
function oO(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function d$(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return oO;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, i = n.length; o < i; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class f$ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? oO : d$(t);
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
    else if (p > hn) if (!(Math.abs(d * c - u * l) > hn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let f = n - a, v = o - s, h = c * c + u * u, g = f * f + v * v, y = Math.sqrt(h), w = Math.sqrt(p), x = i * Math.tan((Vd - Math.acos((h + p - g) / (2 * y * w))) / 2), S = x / w, E = x / y;
      Math.abs(S - 1) > hn && this._append`L${t + S * l},${r + S * d}`, this._append`A${i},${i},0,0,${+(d * f > l * v)},${this._x1 = t + E * c},${this._y1 = r + E * u}`;
    }
  }
  arc(t, r, n, o, i, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), u = t + s, l = r + c, d = 1 ^ a, p = a ? o - i : i - o;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > hn || Math.abs(this._y1 - l) > hn) && this._append`L${u},${l}`, n && (p < 0 && (p = p % qd + qd), p > u$ ? this._append`A${n},${n},0,1,${d},${t - s},${r - c}A${n},${n},0,1,${d},${this._x1 = u},${this._y1 = l}` : p > hn && this._append`A${n},${n},0,${+(p >= Vd)},${d},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ip(e) {
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
  }, () => new f$(t);
}
function Rp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function iO(e) {
  this._context = e;
}
iO.prototype = {
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
function kc(e) {
  return new iO(e);
}
function aO(e) {
  return e[0];
}
function sO(e) {
  return e[1];
}
function cO(e, t) {
  var r = Oe(!0), n = null, o = kc, i = null, a = Ip(s);
  e = typeof e == "function" ? e : e === void 0 ? aO : Oe(e), t = typeof t == "function" ? t : t === void 0 ? sO : Oe(t);
  function s(c) {
    var u, l = (c = Rp(c)).length, d, p = !1, f;
    for (n == null && (i = o(f = a())), u = 0; u <= l; ++u)
      !(u < l && r(d = c[u], u, c)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+e(d, u, c), +t(d, u, c));
    if (f) return i = null, f + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Oe(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Oe(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Oe(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (o = c, n != null && (i = o(n)), s) : o;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = i = null : i = o(n = c), s) : n;
  }, s;
}
function ma(e, t, r) {
  var n = null, o = Oe(!0), i = null, a = kc, s = null, c = Ip(u);
  e = typeof e == "function" ? e : e === void 0 ? aO : Oe(+e), t = typeof t == "function" ? t : Oe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? sO : Oe(+r);
  function u(d) {
    var p, f, v, h = (d = Rp(d)).length, g, y = !1, w, x = new Array(h), S = new Array(h);
    for (i == null && (s = a(w = c())), p = 0; p <= h; ++p) {
      if (!(p < h && o(g = d[p], p, d)) === y)
        if (y = !y)
          f = p, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), v = p - 1; v >= f; --v)
            s.point(x[v], S[v]);
          s.lineEnd(), s.areaEnd();
        }
      y && (x[p] = +e(g, p, d), S[p] = +t(g, p, d), s.point(n ? +n(g, p, d) : x[p], r ? +r(g, p, d) : S[p]));
    }
    if (w) return s = null, w + "" || null;
  }
  function l() {
    return cO().defined(o).curve(a).context(i);
  }
  return u.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Oe(+d), n = null, u) : e;
  }, u.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Oe(+d), u) : e;
  }, u.x1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Oe(+d), u) : n;
  }, u.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Oe(+d), r = null, u) : t;
  }, u.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Oe(+d), u) : t;
  }, u.y1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Oe(+d), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e).y(t);
  }, u.lineY1 = function() {
    return l().x(e).y(r);
  }, u.lineX1 = function() {
    return l().x(n).y(t);
  }, u.defined = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Oe(!!d), u) : o;
  }, u.curve = function(d) {
    return arguments.length ? (a = d, i != null && (s = a(i)), u) : a;
  }, u.context = function(d) {
    return arguments.length ? (d == null ? i = s = null : s = a(i = d), u) : i;
  }, u;
}
class lO {
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
function p$(e) {
  return new lO(e, !0);
}
function h$(e) {
  return new lO(e, !1);
}
const Mp = {
  draw(e, t) {
    const r = ir(t / os);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, _c);
  }
}, m$ = {
  draw(e, t) {
    const r = ir(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, uO = ir(1 / 3), v$ = uO * 2, g$ = {
  draw(e, t) {
    const r = ir(t / v$), n = r * uO;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, y$ = {
  draw(e, t) {
    const r = ir(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, b$ = 0.8908130915292852, dO = ns(os / 10) / ns(7 * os / 10), w$ = ns(_c / 10) * dO, x$ = -nO(_c / 10) * dO, E$ = {
  draw(e, t) {
    const r = ir(t * b$), n = w$ * r, o = x$ * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let i = 1; i < 5; ++i) {
      const a = _c * i / 5, s = nO(a), c = ns(a);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, zl = ir(3), S$ = {
  draw(e, t) {
    const r = -ir(t / (zl * 3));
    e.moveTo(0, r * 2), e.lineTo(-zl * r, -r), e.lineTo(zl * r, -r), e.closePath();
  }
}, $t = -0.5, Bt = ir(3) / 2, Hd = 1 / ir(12), P$ = (Hd / 2 + 1) * 3, O$ = {
  draw(e, t) {
    const r = ir(t / P$), n = r / 2, o = r * Hd, i = n, a = r * Hd + r, s = -i, c = a;
    e.moveTo(n, o), e.lineTo(i, a), e.lineTo(s, c), e.lineTo($t * n - Bt * o, Bt * n + $t * o), e.lineTo($t * i - Bt * a, Bt * i + $t * a), e.lineTo($t * s - Bt * c, Bt * s + $t * c), e.lineTo($t * n + Bt * o, $t * o - Bt * n), e.lineTo($t * i + Bt * a, $t * a - Bt * i), e.lineTo($t * s + Bt * c, $t * c - Bt * s), e.closePath();
  }
};
function A$(e, t) {
  let r = null, n = Ip(o);
  e = typeof e == "function" ? e : Oe(e || Mp), t = typeof t == "function" ? t : Oe(t === void 0 ? 64 : +t);
  function o() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return o.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Oe(i), o) : e;
  }, o.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Oe(+i), o) : t;
  }, o.context = function(i) {
    return arguments.length ? (r = i ?? null, o) : r;
  }, o;
}
function is() {
}
function as(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function fO(e) {
  this._context = e;
}
fO.prototype = {
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
        as(this, this._x1, this._y1);
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
        as(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function C$(e) {
  return new fO(e);
}
function pO(e) {
  this._context = e;
}
pO.prototype = {
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
        as(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function T$(e) {
  return new pO(e);
}
function hO(e) {
  this._context = e;
}
hO.prototype = {
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
        as(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _$(e) {
  return new hO(e);
}
function mO(e) {
  this._context = e;
}
mO.prototype = {
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
function k$(e) {
  return new mO(e);
}
function kv(e) {
  return e < 0 ? -1 : 1;
}
function Nv(e, t, r) {
  var n = e._x1 - e._x0, o = t - e._x1, i = (e._y1 - e._y0) / (n || o < 0 && -0), a = (r - e._y1) / (o || n < 0 && -0), s = (i * o + a * n) / (n + o);
  return (kv(i) + kv(a)) * Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(s)) || 0;
}
function Iv(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ul(e, t, r) {
  var n = e._x0, o = e._y0, i = e._x1, a = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, o + s * t, i - s, a - s * r, i, a);
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
        Ul(this, this._t0, Iv(this, this._t0));
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
          this._point = 3, Ul(this, Iv(this, r = Nv(this, e, t)), r);
          break;
        default:
          Ul(this, this._t0, r = Nv(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function vO(e) {
  this._context = new gO(e);
}
(vO.prototype = Object.create(ss.prototype)).point = function(e, t) {
  ss.prototype.point.call(this, t, e);
};
function gO(e) {
  this._context = e;
}
gO.prototype = {
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
function N$(e) {
  return new ss(e);
}
function I$(e) {
  return new vO(e);
}
function yO(e) {
  this._context = e;
}
yO.prototype = {
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
        for (var n = Rv(e), o = Rv(t), i = 0, a = 1; a < r; ++i, ++a)
          this._context.bezierCurveTo(n[0][i], o[0][i], n[1][i], o[1][i], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Rv(e) {
  var t, r = e.length - 1, n, o = new Array(r), i = new Array(r), a = new Array(r);
  for (o[0] = 0, i[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, i[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = o[t] / i[t - 1], i[t] -= n, a[t] -= n * a[t - 1];
  for (o[r - 1] = a[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) o[t] = (a[t] - o[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - o[t + 1];
  return [o, i];
}
function R$(e) {
  return new yO(e);
}
function Nc(e, t) {
  this._context = e, this._t = t;
}
Nc.prototype = {
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
function M$(e) {
  return new Nc(e, 0.5);
}
function D$(e) {
  return new Nc(e, 0);
}
function j$(e) {
  return new Nc(e, 1);
}
function co(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, o, i = e[t[0]], a, s = i.length; r < a; ++r)
      for (o = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function Gd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function L$(e, t) {
  return e[t];
}
function $$(e) {
  const t = [];
  return t.key = e, t;
}
function B$() {
  var e = Oe([]), t = Gd, r = co, n = L$;
  function o(i) {
    var a = Array.from(e.apply(this, arguments), $$), s, c = a.length, u = -1, l;
    for (const d of i)
      for (s = 0, ++u; s < c; ++s)
        (a[s][u] = [0, +n(d, a[s].key, u, i)]).data = d;
    for (s = 0, l = Rp(t(a)); s < c; ++s)
      a[l[s]].index = s;
    return r(a, l), a;
  }
  return o.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Oe(Array.from(i)), o) : e;
  }, o.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Oe(+i), o) : n;
  }, o.order = function(i) {
    return arguments.length ? (t = i == null ? Gd : typeof i == "function" ? i : Oe(Array.from(i)), o) : t;
  }, o.offset = function(i) {
    return arguments.length ? (r = i ?? co, o) : r;
  }, o;
}
function F$(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, i = e[0].length, a; o < i; ++o) {
      for (a = r = 0; r < n; ++r) a += e[r][o][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][o][1] /= a;
    }
    co(e, t);
  }
}
function z$(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, i = n.length; r < i; ++r) {
      for (var a = 0, s = 0; a < o; ++a) s += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    co(e, t);
  }
}
function U$(e, t) {
  if (!(!((a = e.length) > 0) || !((i = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, o, i, a; n < i; ++n) {
      for (var s = 0, c = 0, u = 0; s < a; ++s) {
        for (var l = e[t[s]], d = l[n][1] || 0, p = l[n - 1][1] || 0, f = (d - p) / 2, v = 0; v < s; ++v) {
          var h = e[t[v]], g = h[n][1] || 0, y = h[n - 1][1] || 0;
          f += g - y;
        }
        c += d, u += f * d;
      }
      o[n - 1][1] += o[n - 1][0] = r, c && (r -= u / c);
    }
    o[n - 1][1] += o[n - 1][0] = r, co(e, t);
  }
}
function sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wl = {}, Kl = {}, Mv;
function W$() {
  return Mv || (Mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Kl)), Kl;
}
var Vl = {}, Dv;
function bO() {
  return Dv || (Dv = 1, (function(e) {
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
  })(Vl)), Vl;
}
var ql = {}, jv;
function Dp() {
  return jv || (jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(ql)), ql;
}
var Hl = {}, Gl = {}, Lv;
function K$() {
  return Lv || (Lv = 1, (function(e) {
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
  })(Gl)), Gl;
}
var $v;
function jp() {
  return $v || ($v = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ K$(), r = /* @__PURE__ */ Dp();
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
  })(Hl)), Hl;
}
var Bv;
function Lp() {
  return Bv || (Bv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ W$(), r = /* @__PURE__ */ bO(), n = /* @__PURE__ */ Dp(), o = /* @__PURE__ */ jp();
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
  })(Wl)), Wl;
}
var Yl, Fv;
function V$() {
  return Fv || (Fv = 1, Yl = Lp().get), Yl;
}
var q$ = /* @__PURE__ */ V$();
const Mn = /* @__PURE__ */ sn(q$);
var Qe = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Rt = (e) => typeof e == "number" && e != +e, Nr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, Q = (e) => (typeof e == "number" || e instanceof Number) && !Rt(e), hr = (e) => Q(e) || typeof e == "string", H$ = 0, li = (e) => {
  var t = ++H$;
  return "".concat(e || "").concat(t);
}, ct = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!Q(t) && typeof t != "string")
    return n;
  var i;
  if (Nr(t)) {
    if (r == null)
      return n;
    var a = t.indexOf("%");
    i = r * parseFloat(t.slice(0, a)) / 100;
  } else
    i = +t;
  return Rt(i) && (i = n), o && r != null && i > r && (i = r), i;
}, wO = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[e[n]])
      r[e[n]] = !0;
    else
      return !0;
  return !1;
};
function Ee(e, t, r) {
  return Q(e) && Q(t) ? e + r * (t - e) : t;
}
function xO(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Mn(n, t)) === r);
}
var Ce = (e) => e === null || typeof e > "u", ji = (e) => Ce(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), G$ = ["type", "size", "sizeType"];
function Yd() {
  return Yd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yd.apply(null, arguments);
}
function zv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zv(Object(r), !0).forEach(function(n) {
      Y$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y$(e, t, r) {
  return (t = X$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X$(e) {
  var t = Z$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J$(e, t) {
  if (e == null) return {};
  var r, n, o = Q$(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Q$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var EO = {
  symbolCircle: Mp,
  symbolCross: m$,
  symbolDiamond: g$,
  symbolSquare: y$,
  symbolStar: E$,
  symbolTriangle: S$,
  symbolWye: O$
}, eB = Math.PI / 180, tB = (e) => {
  var t = "symbol".concat(ji(e));
  return EO[t] || Mp;
}, rB = (e, t, r) => {
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
      var n = 18 * eB;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, nB = (e, t) => {
  EO["symbol".concat(ji(e))] = t;
}, $p = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, o = J$(e, G$), i = Uv(Uv({}, o), {}, {
    type: t,
    size: r,
    sizeType: n
  }), a = "circle";
  typeof t == "string" && (a = t);
  var s = () => {
    var p = tB(a), f = A$().type(p).size(rB(r, n, a)), v = f();
    if (v !== null)
      return v;
  }, {
    className: c,
    cx: u,
    cy: l
  } = i, d = mt(i);
  return u === +u && l === +l && r === +r ? /* @__PURE__ */ m.createElement("path", Yd({}, d, {
    className: pe("recharts-symbols", c),
    transform: "translate(".concat(u, ", ").concat(l, ")"),
    d: s()
  })) : null;
};
$p.registerSymbol = nB;
var Bp = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Kt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((o) => {
    kp(o) && (n[o] = ((i) => r[o](r, i)));
  }), n;
}, oB = (e, t, r) => (n) => (e(t, r, n), null), Li = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((o) => {
    var i = e[o];
    kp(o) && typeof i == "function" && (n || (n = {}), n[o] = oB(i, t, r));
  }), n;
};
function Xd() {
  return Xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xd.apply(null, arguments);
}
function Wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wv(Object(r), !0).forEach(function(n) {
      Fp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fp(e, t, r) {
  return (t = aB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aB(e) {
  var t = sB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ft = 32;
class zp extends xi {
  /**
   * Render the path of icon
   * @param data Data of each legend item
   * @param iconType if defined, it will always render this icon. If undefined then it uses icon from data.type
   * @return Path element
   */
  renderIcon(t, r) {
    var {
      inactiveColor: n
    } = this.props, o = Ft / 2, i = Ft / 6, a = Ft / 3, s = t.inactive ? n : t.color, c = r ?? t.type;
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
        x2: Ft,
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
            H`).concat(Ft, "M").concat(2 * a, ",").concat(o, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(a, ",").concat(o),
        className: "recharts-legend-icon"
      });
    if (c === "rect")
      return /* @__PURE__ */ m.createElement("path", {
        stroke: "none",
        fill: s,
        d: "M0,".concat(Ft / 8, "h").concat(Ft, "v").concat(Ft * 3 / 4, "h").concat(-Ft, "z"),
        className: "recharts-legend-icon"
      });
    if (/* @__PURE__ */ m.isValidElement(t.legendIcon)) {
      var u = iB({}, t);
      return delete u.legendIcon, /* @__PURE__ */ m.cloneElement(t.legendIcon, u);
    }
    return /* @__PURE__ */ m.createElement($p, {
      fill: s,
      cx: o,
      cy: o,
      size: Ft,
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
      width: Ft,
      height: Ft
    }, c = {
      display: n === "horizontal" ? "inline-block" : "block",
      marginRight: 10
    }, u = {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: 4
    };
    return t.map((l, d) => {
      var p = l.formatter || o, f = pe({
        "recharts-legend-item": !0,
        ["legend-item-".concat(d)]: !0,
        inactive: l.inactive
      });
      if (l.type === "none")
        return null;
      var v = l.inactive ? i : l.color, h = p ? p(l.value, l, d) : l.value;
      return /* @__PURE__ */ m.createElement("li", Xd({
        className: f,
        style: c,
        key: "legend-item-".concat(d)
      }, Li(this.props, l, d)), /* @__PURE__ */ m.createElement(Np, {
        width: r,
        height: r,
        viewBox: s,
        style: u,
        "aria-label": "".concat(h, " legend icon")
      }, this.renderIcon(l, a)), /* @__PURE__ */ m.createElement("span", {
        className: "recharts-legend-item-text",
        style: {
          color: v
        }
      }, h));
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
Fp(zp, "displayName", "Legend");
Fp(zp, "defaultProps", {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle"
});
var Xl = {}, Zl = {}, Kv;
function cB() {
  return Kv || (Kv = 1, (function(e) {
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
  })(Zl)), Zl;
}
var Jl = {}, Vv;
function SO() {
  return Vv || (Vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Jl)), Jl;
}
var Ql = {}, eu = {}, tu = {}, qv;
function lB() {
  return qv || (qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(tu)), tu;
}
var Hv;
function Up() {
  return Hv || (Hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lB();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(eu)), eu;
}
var ru = {}, Gv;
function uB() {
  return Gv || (Gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(ru)), ru;
}
var Yv;
function dB() {
  return Yv || (Yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Up(), r = /* @__PURE__ */ uB();
    function n(o) {
      return r.isObjectLike(o) && t.isArrayLike(o);
    }
    e.isArrayLikeObject = n;
  })(Ql)), Ql;
}
var nu = {}, ou = {}, Xv;
function fB() {
  return Xv || (Xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Lp();
    function r(n) {
      return function(o) {
        return t.get(o, n);
      };
    }
    e.property = r;
  })(ou)), ou;
}
var iu = {}, au = {}, su = {}, cu = {}, Zv;
function PO() {
  return Zv || (Zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(cu)), cu;
}
var lu = {}, Jv;
function OO() {
  return Jv || (Jv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(lu)), lu;
}
var uu = {}, Qv;
function AO() {
  return Qv || (Qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(uu)), uu;
}
var eg;
function pB() {
  return eg || (eg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ PO(), r = /* @__PURE__ */ OO(), n = /* @__PURE__ */ AO();
    function o(l, d, p) {
      return typeof p != "function" ? o(l, d, () => {
      }) : i(l, d, function f(v, h, g, y, w, x) {
        const S = p(v, h, g, y, w, x);
        return S !== void 0 ? !!S : i(v, h, f, x);
      }, /* @__PURE__ */ new Map());
    }
    function i(l, d, p, f) {
      if (d === l)
        return !0;
      switch (typeof d) {
        case "object":
          return a(l, d, p, f);
        case "function":
          return Object.keys(d).length > 0 ? i(l, { ...d }, p, f) : n.eq(l, d);
        default:
          return t.isObject(l) ? typeof d == "string" ? d === "" : !0 : n.eq(l, d);
      }
    }
    function a(l, d, p, f) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return c(l, d, p, f);
      if (d instanceof Map)
        return s(l, d, p, f);
      if (d instanceof Set)
        return u(l, d, p, f);
      const v = Object.keys(d);
      if (l == null)
        return v.length === 0;
      if (v.length === 0)
        return !0;
      if (f?.has(d))
        return f.get(d) === l;
      f?.set(d, l);
      try {
        for (let h = 0; h < v.length; h++) {
          const g = v[h];
          if (!r.isPrimitive(l) && !(g in l) || d[g] === void 0 && l[g] !== void 0 || d[g] === null && l[g] !== null || !p(l[g], d[g], g, l, d, f))
            return !1;
        }
        return !0;
      } finally {
        f?.delete(d);
      }
    }
    function s(l, d, p, f) {
      if (d.size === 0)
        return !0;
      if (!(l instanceof Map))
        return !1;
      for (const [v, h] of d.entries()) {
        const g = l.get(v);
        if (p(g, h, v, l, d, f) === !1)
          return !1;
      }
      return !0;
    }
    function c(l, d, p, f) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(l))
        return !1;
      const v = /* @__PURE__ */ new Set();
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        let y = !1;
        for (let w = 0; w < l.length; w++) {
          if (v.has(w))
            continue;
          const x = l[w];
          let S = !1;
          if (p(x, g, h, l, d, f) && (S = !0), S) {
            v.add(w), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function u(l, d, p, f) {
      return d.size === 0 ? !0 : l instanceof Set ? c([...l], [...d], p, f) : !1;
    }
    e.isMatchWith = o, e.isSetMatch = u;
  })(su)), su;
}
var tg;
function CO() {
  return tg || (tg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ pB();
    function r(n, o) {
      return t.isMatchWith(n, o, () => {
      });
    }
    e.isMatch = r;
  })(au)), au;
}
var du = {}, fu = {}, pu = {}, rg;
function hB() {
  return rg || (rg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(pu)), pu;
}
var hu = {}, ng;
function TO() {
  return ng || (ng = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(hu)), hu;
}
var mu = {}, og;
function _O() {
  return og || (og = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", o = "[object Boolean]", i = "[object Arguments]", a = "[object Symbol]", s = "[object Date]", c = "[object Map]", u = "[object Set]", l = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", f = "[object Object]", v = "[object Error]", h = "[object DataView]", g = "[object Uint8Array]", y = "[object Uint8ClampedArray]", w = "[object Uint16Array]", x = "[object Uint32Array]", S = "[object BigUint64Array]", E = "[object Int8Array]", P = "[object Int16Array]", O = "[object Int32Array]", A = "[object BigInt64Array]", _ = "[object Float32Array]", N = "[object Float64Array]";
    e.argumentsTag = i, e.arrayBufferTag = p, e.arrayTag = l, e.bigInt64ArrayTag = A, e.bigUint64ArrayTag = S, e.booleanTag = o, e.dataViewTag = h, e.dateTag = s, e.errorTag = v, e.float32ArrayTag = _, e.float64ArrayTag = N, e.functionTag = d, e.int16ArrayTag = P, e.int32ArrayTag = O, e.int8ArrayTag = E, e.mapTag = c, e.numberTag = n, e.objectTag = f, e.regexpTag = t, e.setTag = u, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = w, e.uint32ArrayTag = x, e.uint8ArrayTag = g, e.uint8ClampedArrayTag = y;
  })(mu)), mu;
}
var vu = {}, ig;
function mB() {
  return ig || (ig = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(vu)), vu;
}
var ag;
function kO() {
  return ag || (ag = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hB(), r = /* @__PURE__ */ TO(), n = /* @__PURE__ */ _O(), o = /* @__PURE__ */ OO(), i = /* @__PURE__ */ mB();
    function a(l, d) {
      return s(l, void 0, l, /* @__PURE__ */ new Map(), d);
    }
    function s(l, d, p, f = /* @__PURE__ */ new Map(), v = void 0) {
      const h = v?.(l, d, p, f);
      if (h !== void 0)
        return h;
      if (o.isPrimitive(l))
        return l;
      if (f.has(l))
        return f.get(l);
      if (Array.isArray(l)) {
        const g = new Array(l.length);
        f.set(l, g);
        for (let y = 0; y < l.length; y++)
          g[y] = s(l[y], y, p, f, v);
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
        f.set(l, g);
        for (const [y, w] of l)
          g.set(y, s(w, y, p, f, v));
        return g;
      }
      if (l instanceof Set) {
        const g = /* @__PURE__ */ new Set();
        f.set(l, g);
        for (const y of l)
          g.add(s(y, void 0, p, f, v));
        return g;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(l))
        return l.subarray();
      if (i.isTypedArray(l)) {
        const g = new (Object.getPrototypeOf(l)).constructor(l.length);
        f.set(l, g);
        for (let y = 0; y < l.length; y++)
          g[y] = s(l[y], y, p, f, v);
        return g;
      }
      if (l instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && l instanceof SharedArrayBuffer)
        return l.slice(0);
      if (l instanceof DataView) {
        const g = new DataView(l.buffer.slice(0), l.byteOffset, l.byteLength);
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (typeof File < "u" && l instanceof File) {
        const g = new File([l], l.name, {
          type: l.type
        });
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (typeof Blob < "u" && l instanceof Blob) {
        const g = new Blob([l], { type: l.type });
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (l instanceof Error) {
        const g = new l.constructor();
        return f.set(l, g), g.message = l.message, g.name = l.name, g.stack = l.stack, g.cause = l.cause, c(g, l, p, f, v), g;
      }
      if (l instanceof Boolean) {
        const g = new Boolean(l.valueOf());
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (l instanceof Number) {
        const g = new Number(l.valueOf());
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (l instanceof String) {
        const g = new String(l.valueOf());
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      if (typeof l == "object" && u(l)) {
        const g = Object.create(Object.getPrototypeOf(l));
        return f.set(l, g), c(g, l, p, f, v), g;
      }
      return l;
    }
    function c(l, d, p = l, f, v) {
      const h = [...Object.keys(d), ...t.getSymbols(d)];
      for (let g = 0; g < h.length; g++) {
        const y = h[g], w = Object.getOwnPropertyDescriptor(l, y);
        (w == null || w.writable) && (l[y] = s(d[y], y, p, f, v));
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
  })(fu)), fu;
}
var sg;
function vB() {
  return sg || (sg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kO();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(du)), du;
}
var cg;
function gB() {
  return cg || (cg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ CO(), r = /* @__PURE__ */ vB();
    function n(o) {
      return o = r.cloneDeep(o), (i) => t.isMatch(i, o);
    }
    e.matches = n;
  })(iu)), iu;
}
var gu = {}, yu = {}, bu = {}, lg;
function yB() {
  return lg || (lg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kO(), r = /* @__PURE__ */ _O();
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
  })(bu)), bu;
}
var ug;
function bB() {
  return ug || (ug = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ yB();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(yu)), yu;
}
var wu = {}, xu = {}, dg;
function NO() {
  return dg || (dg = 1, (function(e) {
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
  })(xu)), xu;
}
var Eu = {}, fg;
function wB() {
  return fg || (fg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ TO();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(Eu)), Eu;
}
var pg;
function xB() {
  return pg || (pg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bO(), r = /* @__PURE__ */ NO(), n = /* @__PURE__ */ wB(), o = /* @__PURE__ */ jp();
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
  })(wu)), wu;
}
var hg;
function EB() {
  return hg || (hg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ CO(), r = /* @__PURE__ */ Dp(), n = /* @__PURE__ */ bB(), o = /* @__PURE__ */ Lp(), i = /* @__PURE__ */ xB();
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
  })(gu)), gu;
}
var mg;
function SB() {
  return mg || (mg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ SO(), r = /* @__PURE__ */ fB(), n = /* @__PURE__ */ gB(), o = /* @__PURE__ */ EB();
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
  })(nu)), nu;
}
var vg;
function PB() {
  return vg || (vg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cB(), r = /* @__PURE__ */ SO(), n = /* @__PURE__ */ dB(), o = /* @__PURE__ */ SB();
    function i(a, s = r.identity) {
      return n.isArrayLikeObject(a) ? t.uniqBy(Array.from(a), o.iteratee(s)) : [];
    }
    e.uniqBy = i;
  })(Xl)), Xl;
}
var Su, gg;
function OB() {
  return gg || (gg = 1, Su = PB().uniqBy), Su;
}
var AB = /* @__PURE__ */ OB();
const yg = /* @__PURE__ */ sn(AB);
function IO(e, t, r) {
  return t === !0 ? yg(e, r) : typeof t == "function" ? yg(e, t) : e;
}
var va = { exports: {} }, Pu = {}, ga = { exports: {} }, Ou = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bg;
function CB() {
  if (bg) return Ou;
  bg = 1;
  var e = At;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(d, p) {
    var f = p(), v = n({ inst: { value: f, getSnapshot: p } }), h = v[0].inst, g = v[1];
    return i(
      function() {
        h.value = f, h.getSnapshot = p, c(h) && g({ inst: h });
      },
      [d, f, p]
    ), o(
      function() {
        return c(h) && g({ inst: h }), d(function() {
          c(h) && g({ inst: h });
        });
      },
      [d]
    ), a(f), f;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var f = p();
      return !r(d, f);
    } catch {
      return !0;
    }
  }
  function u(d, p) {
    return p();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ou.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, Ou;
}
var Au = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;
function TB() {
  return wg || (wg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f, v) {
      return f === v && (f !== 0 || 1 / f === 1 / v) || f !== f && v !== v;
    }
    function t(f, v) {
      l || o.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = v();
      if (!d) {
        var g = v();
        i(h, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      g = a({
        inst: { value: h, getSnapshot: v }
      });
      var y = g[0].inst, w = g[1];
      return c(
        function() {
          y.value = h, y.getSnapshot = v, r(y) && w({ inst: y });
        },
        [f, h, v]
      ), s(
        function() {
          return r(y) && w({ inst: y }), f(function() {
            r(y) && w({ inst: y });
          });
        },
        [f]
      ), u(h), h;
    }
    function r(f) {
      var v = f.getSnapshot;
      f = f.value;
      try {
        var h = v();
        return !i(f, h);
      } catch {
        return !0;
      }
    }
    function n(f, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = At, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, l = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Au.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Au;
}
var xg;
function RO() {
  return xg || (xg = 1, process.env.NODE_ENV === "production" ? ga.exports = CB() : ga.exports = TB()), ga.exports;
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
var Eg;
function _B() {
  if (Eg) return Pu;
  Eg = 1;
  var e = At, t = RO();
  function r(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Pu.useSyncExternalStoreWithSelector = function(u, l, d, p, f) {
    var v = i(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else h = v.current;
    v = s(
      function() {
        function y(P) {
          if (!w) {
            if (w = !0, x = P, P = p(P), f !== void 0 && h.hasValue) {
              var O = h.value;
              if (f(O, P))
                return S = O;
            }
            return S = P;
          }
          if (O = S, n(x, P)) return O;
          var A = p(P);
          return f !== void 0 && f(O, A) ? (x = P, O) : (x = P, S = A);
        }
        var w = !1, x, S, E = d === void 0 ? null : d;
        return [
          function() {
            return y(l());
          },
          E === null ? void 0 : function() {
            return y(E());
          }
        ];
      },
      [l, d, p, f]
    );
    var g = o(u, v[0], v[1]);
    return a(
      function() {
        h.hasValue = !0, h.value = g;
      },
      [g]
    ), c(g), g;
  }, Pu;
}
var Cu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function kB() {
  return Sg || (Sg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, l) {
      return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = At, r = RO(), n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cu.useSyncExternalStoreWithSelector = function(u, l, d, p, f) {
      var v = i(null);
      if (v.current === null) {
        var h = { hasValue: !1, value: null };
        v.current = h;
      } else h = v.current;
      v = s(
        function() {
          function y(P) {
            if (!w) {
              if (w = !0, x = P, P = p(P), f !== void 0 && h.hasValue) {
                var O = h.value;
                if (f(O, P))
                  return S = O;
              }
              return S = P;
            }
            if (O = S, n(x, P))
              return O;
            var A = p(P);
            return f !== void 0 && f(O, A) ? (x = P, O) : (x = P, S = A);
          }
          var w = !1, x, S, E = d === void 0 ? null : d;
          return [
            function() {
              return y(l());
            },
            E === null ? void 0 : function() {
              return y(E());
            }
          ];
        },
        [l, d, p, f]
      );
      var g = o(u, v[0], v[1]);
      return a(
        function() {
          h.hasValue = !0, h.value = g;
        },
        [g]
      ), c(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Cu;
}
var Pg;
function NB() {
  return Pg || (Pg = 1, process.env.NODE_ENV === "production" ? va.exports = _B() : va.exports = kB()), va.exports;
}
var IB = NB(), Wp = /* @__PURE__ */ Dt(null), RB = (e) => e, Re = () => {
  var e = tr(Wp);
  return e ? e.store.dispatch : RB;
}, Va = () => {
}, MB = () => Va, DB = (e, t) => e === t;
function ee(e) {
  var t = tr(Wp);
  return IB.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : MB, t ? t.store.getState : Va, t ? t.store.getState : Va, t ? e : Va, DB);
}
var jB = (e, t, r) => {
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
}, LB = (e, t, r) => {
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
}, $B = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function BB(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function FB(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function zB(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Og = (e) => Array.isArray(e) ? e : [e];
function UB(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return zB(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Ag(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var WB = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...$B,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: jB
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: LB
    }
  };
}, KB = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, VB = typeof WeakRef < "u" ? WeakRef : KB, qB = 0, Cg = 1;
function ya() {
  return {
    s: qB,
    v: void 0,
    o: null,
    p: null
  };
}
function MO(e, t = {}) {
  let r = ya();
  const { resultEqualityCheck: n } = t;
  let o, i = 0;
  function a() {
    let s = r;
    const { length: c } = arguments;
    for (let d = 0, p = c; d < p; d++) {
      const f = arguments[d];
      if (typeof f == "function" || typeof f == "object" && f !== null) {
        let v = s.o;
        v === null && (s.o = v = /* @__PURE__ */ new WeakMap());
        const h = v.get(f);
        h === void 0 ? (s = ya(), v.set(f, s)) : s = h;
      } else {
        let v = s.p;
        v === null && (s.p = v = /* @__PURE__ */ new Map());
        const h = v.get(f);
        h === void 0 ? (s = ya(), v.set(f, s)) : s = h;
      }
    }
    const u = s;
    let l;
    if (s.s === Cg)
      l = s.v;
    else if (l = e.apply(null, arguments), i++, n) {
      const d = o?.deref?.() ?? o;
      d != null && n(d, l) && (l = d, i !== 0 && i--), o = typeof l == "object" && l !== null || typeof l == "function" ? new VB(l) : l;
    }
    return u.s = Cg, u.v = l, l;
  }
  return a.clearCache = () => {
    r = ya(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function HB(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let i = 0, a = 0, s, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), BB(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const l = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: f = MO,
      argsMemoizeOptions: v = [],
      devModeChecks: h = {}
    } = l, g = Og(p), y = Og(v), w = UB(o), x = d(function() {
      return i++, u.apply(
        null,
        arguments
      );
    }, ...g);
    let S = !0;
    const E = f(function() {
      a++;
      const O = Ag(
        w,
        arguments
      );
      if (s = x.apply(null, O), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: _ } = WB(S, h);
        if (A.shouldRun && A.run(
          u,
          O,
          s
        ), _.shouldRun) {
          const N = Ag(
            w,
            arguments
          );
          _.run(
            { inputSelectorResults: O, inputSelectorResultsCopy: N },
            { memoize: d, memoizeOptions: g },
            arguments
          );
        }
        S && (S = !1);
      }
      return s;
    }, ...y);
    return Object.assign(E, {
      resultFunc: u,
      memoizedResultFunc: x,
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
      argsMemoize: f
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var k = /* @__PURE__ */ HB(MO), GB = Object.assign(
  (e, t = k) => {
    FB(
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
  { withTypes: () => GB }
), Tu = {}, _u = {}, ku = {}, Tg;
function YB() {
  return Tg || (Tg = 1, (function(e) {
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
  })(ku)), ku;
}
var Nu = {}, Iu = {}, _g;
function DO() {
  return _g || (_g = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Iu)), Iu;
}
var kg;
function XB() {
  return kg || (kg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ DO(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function o(i, a) {
      return Array.isArray(i) ? !1 : typeof i == "number" || typeof i == "boolean" || i == null || t.isSymbol(i) ? !0 : typeof i == "string" && (n.test(i) || !r.test(i)) || a != null && Object.hasOwn(a, i);
    }
    e.isKey = o;
  })(Nu)), Nu;
}
var Ng;
function ZB() {
  return Ng || (Ng = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ YB(), r = /* @__PURE__ */ XB(), n = /* @__PURE__ */ jp();
    function o(i, a, s, c) {
      if (i == null)
        return [];
      s = c ? void 0 : s, Array.isArray(i) || (i = Object.values(i)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(s) || (s = s == null ? [] : [s]), s = s.map((f) => String(f));
      const u = (f, v) => {
        let h = f;
        for (let g = 0; g < v.length && h != null; ++g)
          h = h[v[g]];
        return h;
      }, l = (f, v) => v == null || f == null ? v : typeof f == "object" && "key" in f ? Object.hasOwn(v, f.key) ? v[f.key] : u(v, f.path) : typeof f == "function" ? f(v) : Array.isArray(f) ? u(v, f) : typeof v == "object" ? v[f] : v, d = a.map((f) => (Array.isArray(f) && f.length === 1 && (f = f[0]), f == null || typeof f == "function" || Array.isArray(f) || r.isKey(f) ? f : { key: f, path: n.toPath(f) }));
      return i.map((f) => ({
        original: f,
        criteria: d.map((v) => l(v, f))
      })).slice().sort((f, v) => {
        for (let h = 0; h < d.length; h++) {
          const g = t.compareValues(f.criteria[h], v.criteria[h], s[h]);
          if (g !== 0)
            return g;
        }
        return 0;
      }).map((f) => f.original);
    }
    e.orderBy = o;
  })(_u)), _u;
}
var Ru = {}, Ig;
function JB() {
  return Ig || (Ig = 1, (function(e) {
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
  })(Ru)), Ru;
}
var Mu = {}, Rg;
function jO() {
  return Rg || (Rg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ NO(), r = /* @__PURE__ */ Up(), n = /* @__PURE__ */ PO(), o = /* @__PURE__ */ AO();
    function i(a, s, c) {
      return n.isObject(c) && (typeof s == "number" && r.isArrayLike(c) && t.isIndex(s) && s < c.length || typeof s == "string" && s in c) ? o.eq(c[s], a) : !1;
    }
    e.isIterateeCall = i;
  })(Mu)), Mu;
}
var Mg;
function QB() {
  return Mg || (Mg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ZB(), r = /* @__PURE__ */ JB(), n = /* @__PURE__ */ jO();
    function o(i, ...a) {
      const s = a.length;
      return s > 1 && n.isIterateeCall(i, a[0], a[1]) ? a = [] : s > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(i, r.flatten(a), ["asc"]);
    }
    e.sortBy = o;
  })(Tu)), Tu;
}
var Du, Dg;
function eF() {
  return Dg || (Dg = 1, Du = QB().sortBy), Du;
}
var tF = /* @__PURE__ */ eF();
const Ic = /* @__PURE__ */ sn(tF);
var LO = (e) => e.legend.settings, rF = (e) => e.legend.size, nF = (e) => e.legend.payload, oF = k([nF, LO], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ic(n, r) : n;
});
function iF() {
  return ee(oF);
}
var ba = 1;
function $O() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = je({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = he(
    (o) => {
      if (o != null) {
        var i = o.getBoundingClientRect(), a = {
          height: i.height,
          left: i.left,
          top: i.top,
          width: i.width
        };
        (Math.abs(a.height - t.height) > ba || Math.abs(a.left - t.left) > ba || Math.abs(a.top - t.top) > ba || Math.abs(a.width - t.width) > ba) && r({
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
function tt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var aF = typeof Symbol == "function" && Symbol.observable || "@@observable", jg = aF, ju = () => Math.random().toString(36).substring(7).split("").join("."), sF = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ju()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ju()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ju()}`
}, En = sF;
function $i(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function cF(e) {
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
  if (dF(e))
    return "date";
  if (uF(e))
    return "error";
  const r = lF(e);
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
function lF(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function uF(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dF(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Vr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = cF(e)), t;
}
function BO(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(2) : `Expected the root reducer to be a function. Instead, received: '${Vr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(1) : `Expected the enhancer to be a function. Instead, received: '${Vr(r)}'`);
    return r(BO)(e, t);
  }
  let n = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function u() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((g, y) => {
      a.set(y, g);
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
    return a.set(w, g), function() {
      if (y) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? tt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, u(), a.delete(w), i = null;
      }
    };
  }
  function p(g) {
    if (!$i(g))
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
    return (i = a).forEach((w) => {
      w();
    }), g;
  }
  function f(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(10) : `Expected the nextReducer to be a function. Instead, received: '${Vr(g)}`);
    n = g, p({
      type: En.REPLACE
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
          const S = y;
          S.next && S.next(l());
        }
        return w(), {
          unsubscribe: g(w)
        };
      },
      [jg]() {
        return this;
      }
    };
  }
  return p({
    type: En.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: l,
    replaceReducer: f,
    [jg]: v
  };
}
function Lg(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function fF(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === En.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!$i(e))
    return `The ${i} has unexpected type of "${Vr(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !n[s]);
  if (a.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === En.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function pF(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: En.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: En.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${En.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function FO(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && Lg(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    pF(r);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const d = fF(s, r, c, o);
      d && Lg(d);
    }
    let u = !1;
    const l = {};
    for (let d = 0; d < n.length; d++) {
      const p = n[d], f = r[p], v = s[p], h = f(v, c);
      if (typeof h > "u") {
        const g = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? tt(14) : `When called with an action of type ${g ? `"${String(g)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[p] = h, u = u || h !== v;
    }
    return u = u || n.length !== Object.keys(s).length, u ? l : s;
  };
}
function cs(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function hF(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? tt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...u) => i(c, ...u)
    }, s = e.map((c) => c(a));
    return i = cs(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Kp(e) {
  return $i(e) && "type" in e && typeof e.type == "string";
}
var zO = Symbol.for("immer-nothing"), $g = Symbol.for("immer-draftable"), Mt = Symbol.for("immer-state"), mF = process.env.NODE_ENV !== "production" ? [
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
    const r = mF[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ui = Object.getPrototypeOf;
function Dn(e) {
  return !!e && !!e[Mt];
}
function Ir(e) {
  return e ? UO(e) || Array.isArray(e) || !!e[$g] || !!e.constructor?.[$g] || Bi(e) || Mc(e) : !1;
}
var vF = Object.prototype.constructor.toString(), Bg = /* @__PURE__ */ new WeakMap();
function UO(e) {
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
  let n = Bg.get(r);
  return n === void 0 && (n = Function.toString.call(r), Bg.set(r, n)), n === vF;
}
function ls(e, t, r = !0) {
  Rc(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((o) => {
    t(o, e[o], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Rc(e) {
  const t = e[Mt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Bi(e) ? 2 : Mc(e) ? 3 : 0;
}
function Zd(e, t) {
  return Rc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function WO(e, t, r) {
  const n = Rc(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function gF(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bi(e) {
  return e instanceof Map;
}
function Mc(e) {
  return e instanceof Set;
}
function mn(e) {
  return e.copy_ || e.base_;
}
function Jd(e, t) {
  if (Bi(e))
    return new Map(e);
  if (Mc(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = UO(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Mt];
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
    return Object.create(ui(e), n);
  } else {
    const n = ui(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Vp(e, t = !1) {
  return Dc(e) || Dn(e) || !Ir(e) || (Rc(e) > 1 && Object.defineProperties(e, {
    set: wa,
    add: wa,
    clear: wa,
    delete: wa
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Vp(r, !0))), e;
}
function yF() {
  gt(2);
}
var wa = {
  value: yF
};
function Dc(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var bF = {};
function jn(e) {
  const t = bF[e];
  return t || gt(0, e), t;
}
var di;
function KO() {
  return di;
}
function wF(e, t) {
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
function Fg(e, t) {
  t && (jn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Qd(e) {
  ef(e), e.drafts_.forEach(xF), e.drafts_ = null;
}
function ef(e) {
  e === di && (di = e.parent_);
}
function zg(e) {
  return di = wF(di, e);
}
function xF(e) {
  const t = e[Mt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ug(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Mt].modified_ && (Qd(t), gt(4)), Ir(e) && (e = us(t, e), t.parent_ || ds(t, e)), t.patches_ && jn("Patches").generateReplacementPatches_(
    r[Mt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = us(t, r, []), Qd(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== zO ? e : void 0;
}
function us(e, t, r) {
  if (Dc(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), o = t[Mt];
  if (!o)
    return ls(
      t,
      (i, a) => Wg(e, o, t, i, a, r),
      n
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return ds(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let a = i, s = !1;
    o.type_ === 3 && (a = new Set(i), i.clear(), s = !0), ls(
      a,
      (c, u) => Wg(
        e,
        o,
        i,
        c,
        u,
        r,
        s
      ),
      n
    ), ds(e, i, !1), r && e.patches_ && jn("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Wg(e, t, r, n, o, i, a) {
  if (o == null || typeof o != "object" && !a)
    return;
  const s = Dc(o);
  if (!(s && !a)) {
    if (process.env.NODE_ENV !== "production" && o === r && gt(5), Dn(o)) {
      const c = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Zd(t.assigned_, n) ? i.concat(n) : void 0, u = us(e, o, c);
      if (WO(r, n, u), Dn(u))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(o);
    if (Ir(o) && !s) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === o && s)
        return;
      us(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Bi(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ds(e, o);
    }
  }
}
function ds(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Vp(t, r);
}
function EF(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : KO(),
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
  let o = n, i = qp;
  r && (o = [n], i = fi);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = a, s;
}
var qp = {
  get(e, t) {
    if (t === Mt)
      return e;
    const r = mn(e);
    if (!Zd(r, t))
      return SF(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ir(n) ? n : n === Lu(e.base_, t) ? ($u(e), e.copy_[t] = rf(n, e)) : n;
  },
  has(e, t) {
    return t in mn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(mn(e));
  },
  set(e, t, r) {
    const n = VO(mn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Lu(mn(e), t), i = o?.[Mt];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (gF(r, o) && (r !== void 0 || Zd(e.base_, t)))
        return !0;
      $u(e), tf(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Lu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, $u(e), tf(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = mn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
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
    return ui(e.base_);
  },
  setPrototypeOf() {
    gt(12);
  }
}, fi = {};
ls(qp, (e, t) => {
  fi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
fi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && gt(13), fi.set.call(this, e, t, void 0);
};
fi.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && gt(14), qp.set.call(this, e[0], t, r, e[0]);
};
function Lu(e, t) {
  const r = e[Mt];
  return (r ? mn(r) : e)[t];
}
function SF(e, t, r) {
  const n = VO(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function VO(e, t) {
  if (!(t in e))
    return;
  let r = ui(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ui(r);
  }
}
function tf(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && tf(e.parent_));
}
function $u(e) {
  e.copy_ || (e.copy_ = Jd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var PF = class {
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
      if (Ir(t)) {
        const i = zg(this), a = rf(t, void 0);
        let s = !0;
        try {
          o = r(a), s = !1;
        } finally {
          s ? Qd(i) : ef(i);
        }
        return Fg(i, n), Ug(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === zO && (o = void 0), this.autoFreeze_ && Vp(o, !0), n) {
          const i = [], a = [];
          jn("Patches").generateReplacementPatches_(t, o, i, a), n(i, a);
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
    Ir(e) || gt(8), Dn(e) && (e = Ar(e));
    const t = zg(this), r = rf(e, void 0);
    return r[Mt].isManual_ = !0, ef(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Mt];
    (!r || !r.isManual_) && gt(9);
    const { scope_: n } = r;
    return Fg(n, t), Ug(void 0, n);
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
    const n = jn("Patches").applyPatches_;
    return Dn(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function rf(e, t) {
  const r = Bi(e) ? jn("MapSet").proxyMap_(e, t) : Mc(e) ? jn("MapSet").proxySet_(e, t) : EF(e, t);
  return (t ? t.scope_ : KO()).drafts_.push(r), r;
}
function Ar(e) {
  return Dn(e) || gt(10, e), qO(e);
}
function qO(e) {
  if (!Ir(e) || Dc(e))
    return e;
  const t = e[Mt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Jd(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Jd(e, !0);
  return ls(
    r,
    (o, i) => {
      WO(r, o, qO(i));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var nf = new PF(), HO = nf.produce, OF = /* @__PURE__ */ nf.setUseStrictIteration.bind(
  nf
);
function GO(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var AF = GO(), CF = GO, TF = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? cs : cs.apply(null, arguments);
}, _F = (e) => e && typeof e.match == "function";
function Ht(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? ge(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Kp(n) && n.type === e, r;
}
function kF(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  _F(e);
}
function NF(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function IF(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = kF
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(NF(n.type)), r(n));
}
function YO(e, t) {
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
var XO = class Jo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Jo.prototype);
  }
  static get [Symbol.species]() {
    return Jo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Jo(...t[0].concat(this)) : new Jo(...t.concat(this));
  }
};
function Kg(e) {
  return Ir(e) ? HO(e, () => {
  }) : e;
}
function xa(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function RF(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function MF(e, t, r) {
  const n = ZO(e, t, r);
  return {
    detectMutations() {
      return JO(e, t, n, r);
    }
  };
}
function ZO(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), i.children = {};
    for (const a in r) {
      const s = n ? n + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = ZO(e, t, r[a], s));
    }
  }
  return i;
}
function JO(e, t = [], r, n, o = !1, i = "") {
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
    const p = JO(e, t, r.children[l], n[l], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function DF(e = {}) {
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
          var f = u.indexOf(this);
          ~f ? u.splice(f + 1) : u.push(this), ~f ? l.splice(f, 1 / 0, d) : l.push(d), ~u.indexOf(p) && (p = c.call(this, d, p));
        } else u.push(p);
        return s == null ? p : s.call(this, d, p);
      };
    }, {
      isImmutable: n = RF,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = MF.bind(null, n, o);
    return ({
      getState: s
    }) => {
      let c = s(), u = a(c), l;
      return (d) => (p) => {
        const f = YO(i, "ImmutableStateInvariantMiddleware");
        f.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = a(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ge(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const v = d(p);
        return f.measureTime(() => {
          if (c = s(), l = u.detectMutations(), u = a(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ge(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), f.warnIfExceeded(), v;
      };
    };
  }
}
function QO(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || $i(e);
}
function of(e, t = "", r = QO, n, o = [], i) {
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
    if (!(c && o.some((f) => f instanceof RegExp ? f.test(d) : d === f))) {
      if (!r(l))
        return {
          keyPath: d,
          value: l
        };
      if (typeof l == "object" && (a = of(l, d, r, n, o, i), a))
        return a;
    }
  }
  return i && e1(e) && i.add(e), !1;
}
function e1(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !e1(t))
      return !1;
  return !0;
}
function jF(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = QO,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: u = !1
    } = e, l = !u && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (f) => {
      if (!Kp(f))
        return p(f);
      const v = p(f), h = YO(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(f.type) !== -1) && h.measureTime(() => {
        const g = of(f, "", t, r, o, l);
        if (g) {
          const {
            keyPath: y,
            value: w
          } = g;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, f, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (h.measureTime(() => {
        const g = d.getState(), y = of(g, "", t, r, i, l);
        if (y) {
          const {
            keyPath: w,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${f.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), h.warnIfExceeded()), v;
    };
  }
}
function Ea(e) {
  return typeof e == "boolean";
}
var LF = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new XO();
  if (r && (Ea(r) ? a.push(AF) : a.push(CF(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let s = {};
      Ea(n) || (s = n), a.unshift(DF(s));
    }
    if (o) {
      let s = {};
      Ea(o) || (s = o), a.push(jF(s));
    }
    if (i) {
      let s = {};
      Ea(i) || (s = i), a.unshift(IF(s));
    }
  }
  return a;
}, t1 = "RTK_autoBatch", ut = () => (e) => ({
  payload: e,
  meta: {
    [t1]: !0
  }
}), Vg = (e) => (t) => {
  setTimeout(t, e);
}, r1 = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Vg(10)
  ) : e.type === "callback" ? e.queueNotification : Vg(e.timeout), u = () => {
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
        return o = !l?.meta?.[t1], i = !o, i && (a || (a = !0, c(u))), n.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, $F = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new XO(e);
  return n && o.push(r1(typeof n == "object" ? n : void 0)), o;
};
function BF(e) {
  const t = LF(), {
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
  else if ($i(r))
    c = FO(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ge(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(2) : "`middleware` field must be a callback");
  let u;
  if (typeof n == "function") {
    if (u = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? ge(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (process.env.NODE_ENV !== "production" && u.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ge(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && i) {
    let h = /* @__PURE__ */ new Set();
    u.forEach((g) => {
      if (h.has(g))
        throw new Error(process.env.NODE_ENV === "production" ? ge(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      h.add(g);
    });
  }
  let l = cs;
  o && (l = TF({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const d = hF(...u), p = $F(d);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(5) : "`enhancers` field must be a callback");
  let f = typeof s == "function" ? s(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(f))
    throw new Error(process.env.NODE_ENV === "production" ? ge(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && f.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ge(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && u.length && !f.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = l(...f);
  return BO(c, a, v);
}
function n1(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(i, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ge(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? ge(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? ge(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? ge(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addAsyncThunk(i, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ge(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return a.pending && (t[i.pending.type] = a.pending), a.rejected && (t[i.rejected.type] = a.rejected), a.fulfilled && (t[i.fulfilled.type] = a.fulfilled), a.settled && r.push({
        matcher: i.settled,
        reducer: a.settled
      }), o;
    },
    addMatcher(i, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ge(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ge(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [t, r, n];
}
OF(!1);
function FF(e) {
  return typeof e == "function";
}
function zF(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ge(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = n1(t), i;
  if (FF(e))
    i = () => Kg(e());
  else {
    const s = Kg(e);
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
        if (Dn(l)) {
          const f = d(l, c);
          return f === void 0 ? l : f;
        } else {
          if (Ir(l))
            return HO(l, (p) => d(p, c));
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
var UF = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", WF = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += UF[Math.random() * 64 | 0];
  return t;
}, KF = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function VF(e, t) {
  return `${e}/${t}`;
}
function qF({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[KF];
  return function(n) {
    const {
      name: o,
      reducerPath: i = o
    } = n;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? ge(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof n.reducers == "function" ? n.reducers(GF()) : n.reducers) || {}, s = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(x, S) {
        const E = typeof x == "string" ? x : x.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? ge(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ge(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return c.sliceCaseReducersByType[E] = S, u;
      },
      addMatcher(x, S) {
        return c.sliceMatchers.push({
          matcher: x,
          reducer: S
        }), u;
      },
      exposeAction(x, S) {
        return c.actionCreators[x] = S, u;
      },
      exposeCaseReducer(x, S) {
        return c.sliceCaseReducersByName[x] = S, u;
      }
    };
    s.forEach((x) => {
      const S = a[x], E = {
        reducerName: x,
        type: VF(o, x),
        createNotation: typeof n.reducers == "function"
      };
      XF(S) ? JF(E, S, u, t) : YF(E, S, u);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ge(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [x = {}, S = [], E = void 0] = typeof n.extraReducers == "function" ? n1(n.extraReducers) : [n.extraReducers], P = {
        ...x,
        ...c.sliceCaseReducersByType
      };
      return zF(n.initialState, (O) => {
        for (let A in P)
          O.addCase(A, P[A]);
        for (let A of c.sliceMatchers)
          O.addMatcher(A.matcher, A.reducer);
        for (let A of S)
          O.addMatcher(A.matcher, A.reducer);
        E && O.addDefaultCase(E);
      });
    }
    const d = (x) => x, p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new WeakMap();
    let v;
    function h(x, S) {
      return v || (v = l()), v(x, S);
    }
    function g() {
      return v || (v = l()), v.getInitialState();
    }
    function y(x, S = !1) {
      function E(O) {
        let A = O[x];
        if (typeof A > "u") {
          if (S)
            A = xa(f, E, g);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ge(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function P(O = d) {
        const A = xa(p, S, () => /* @__PURE__ */ new WeakMap());
        return xa(A, O, () => {
          const _ = {};
          for (const [N, T] of Object.entries(n.selectors ?? {}))
            _[N] = HF(T, O, () => xa(f, O, g), S);
          return _;
        });
      }
      return {
        reducerPath: x,
        getSelectors: P,
        get selectors() {
          return P(E);
        },
        selectSlice: E
      };
    }
    const w = {
      name: o,
      reducer: h,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: g,
      ...y(i),
      injectInto(x, {
        reducerPath: S,
        ...E
      } = {}) {
        const P = S ?? i;
        return x.inject({
          reducerPath: P,
          reducer: h
        }, E), {
          ...w,
          ...y(P, !0)
        };
      }
    };
    return w;
  };
}
function HF(e, t, r, n) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (n)
        s = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ge(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var Lt = /* @__PURE__ */ qF();
function GF() {
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
function YF({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, a;
  if ("reducer" in n) {
    if (r && !ZF(n))
      throw new Error(process.env.NODE_ENV === "production" ? ge(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, a = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Ht(e, a) : Ht(e));
}
function XF(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function ZF(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function JF({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? ge(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: u,
    options: l
  } = r, d = o(e, i, l);
  n.exposeAction(t, d), a && n.addCase(d.fulfilled, a), s && n.addCase(d.pending, s), c && n.addCase(d.rejected, c), u && n.addMatcher(d.settled, u), n.exposeCaseReducer(t, {
    fulfilled: a || Sa,
    pending: s || Sa,
    rejected: c || Sa,
    settled: u || Sa
  });
}
function Sa() {
}
var QF = "task", o1 = "listener", i1 = "completed", Hp = "cancelled", ez = `task-${Hp}`, tz = `task-${i1}`, af = `${o1}-${Hp}`, rz = `${o1}-${i1}`, jc = class {
  constructor(e) {
    this.code = e, this.message = `${QF} ${Hp} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Gp = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? ge(32) : `${t} is not a function`);
}, fs = () => {
}, a1 = (e, t = fs) => (e.catch(t), e), s1 = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Sn = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, Pn = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new jc(t);
  }
};
function c1(e, t) {
  let r = fs;
  return new Promise((n, o) => {
    const i = () => o(new jc(e.reason));
    if (e.aborted) {
      i();
      return;
    }
    r = s1(e, i), t.finally(() => r()).then(n, o);
  }).finally(() => {
    r = fs;
  });
}
var nz = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof jc ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, ps = (e) => (t) => a1(c1(e, t).then((r) => (Pn(e), r))), l1 = (e) => {
  const t = ps(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: ro
} = Object, qg = {}, Fi = "listenerMiddleware", oz = (e, t) => {
  const r = (n) => s1(e, () => Sn(n, e.reason));
  return (n, o) => {
    Gp(n, "taskExecutor");
    const i = new AbortController();
    r(i);
    const a = nz(async () => {
      Pn(e), Pn(i.signal);
      const s = await n({
        pause: ps(i.signal),
        delay: l1(i.signal),
        signal: i.signal
      });
      return Pn(i.signal), s;
    }, () => Sn(i, tz));
    return o?.autoJoin && t.push(a.catch(fs)), {
      result: ps(e)(a),
      cancel() {
        Sn(i, ez);
      }
    };
  };
}, iz = (e, t) => {
  const r = async (n, o) => {
    Pn(t);
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
      const c = await c1(t, Promise.race(s));
      return Pn(t), c;
    } finally {
      i();
    }
  };
  return (n, o) => a1(r(n, o));
}, u1 = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Ht(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o) throw new Error(process.env.NODE_ENV === "production" ? ge(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Gp(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, d1 = /* @__PURE__ */ ro((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = u1(e);
  return {
    id: WF(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? ge(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => d1
}), Hg = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: o
  } = u1(t);
  return Array.from(e.values()).find((i) => (typeof r == "string" ? i.type === r : i.predicate === o) && i.effect === n);
}, sf = (e) => {
  e.pending.forEach((t) => {
    Sn(t, af);
  });
}, az = (e, t) => () => {
  for (const r of t.keys())
    sf(r);
  e.clear();
}, Gg = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, f1 = /* @__PURE__ */ ro(/* @__PURE__ */ Ht(`${Fi}/add`), {
  withTypes: () => f1
}), sz = /* @__PURE__ */ Ht(`${Fi}/removeAll`), p1 = /* @__PURE__ */ ro(/* @__PURE__ */ Ht(`${Fi}/remove`), {
  withTypes: () => p1
}), cz = (...e) => {
  console.error(`${Fi}/error`, ...e);
}, zi = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (f) => {
    const v = r.get(f) ?? 0;
    r.set(f, v + 1);
  }, o = (f) => {
    const v = r.get(f) ?? 1;
    v === 1 ? r.delete(f) : r.set(f, v - 1);
  }, {
    extra: i,
    onError: a = cz
  } = e;
  Gp(a, "onError");
  const s = (f) => (f.unsubscribe = () => t.delete(f.id), t.set(f.id, f), (v) => {
    f.unsubscribe(), v?.cancelActive && sf(f);
  }), c = (f) => {
    const v = Hg(t, f) ?? d1(f);
    return s(v);
  };
  ro(c, {
    withTypes: () => c
  });
  const u = (f) => {
    const v = Hg(t, f);
    return v && (v.unsubscribe(), f.cancelActive && sf(v)), !!v;
  };
  ro(u, {
    withTypes: () => u
  });
  const l = async (f, v, h, g) => {
    const y = new AbortController(), w = iz(c, y.signal), x = [];
    try {
      f.pending.add(y), n(f), await Promise.resolve(f.effect(
        v,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        ro({}, h, {
          getOriginalState: g,
          condition: (S, E) => w(S, E).then(Boolean),
          take: w,
          delay: l1(y.signal),
          pause: ps(y.signal),
          extra: i,
          signal: y.signal,
          fork: oz(y.signal, x),
          unsubscribe: f.unsubscribe,
          subscribe: () => {
            t.set(f.id, f);
          },
          cancelActiveListeners: () => {
            f.pending.forEach((S, E, P) => {
              S !== y && (Sn(S, af), P.delete(S));
            });
          },
          cancel: () => {
            Sn(y, af), f.pending.delete(y);
          },
          throwIfCancelled: () => {
            Pn(y.signal);
          }
        })
      ));
    } catch (S) {
      S instanceof jc || Gg(a, S, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(x), Sn(y, rz), o(f), f.pending.delete(y);
    }
  }, d = az(t, r);
  return {
    middleware: (f) => (v) => (h) => {
      if (!Kp(h))
        return v(h);
      if (f1.match(h))
        return c(h.payload);
      if (sz.match(h)) {
        d();
        return;
      }
      if (p1.match(h))
        return u(h.payload);
      let g = f.getState();
      const y = () => {
        if (g === qg)
          throw new Error(process.env.NODE_ENV === "production" ? ge(23) : `${Fi}: getOriginalState can only be called synchronously`);
        return g;
      };
      let w;
      try {
        if (w = v(h), t.size > 0) {
          const x = f.getState(), S = Array.from(t.values());
          for (const E of S) {
            let P = !1;
            try {
              P = E.predicate(h, x, g);
            } catch (O) {
              P = !1, Gg(a, O, {
                raisedBy: "predicate"
              });
            }
            P && l(E, h, f, y);
          }
        }
      } finally {
        g = qg;
      }
      return w;
    },
    startListening: c,
    stopListening: u,
    clearListeners: d
  };
};
function ge(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var lz = {
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
}, h1 = Lt({
  name: "chartLayout",
  initialState: lz,
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
  setMargin: uz,
  setLayout: dz,
  setChartSize: fz,
  setScale: pz
} = h1.actions, hz = h1.reducer;
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
      mz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mz(e, t, r) {
  return (t = vz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vz(e) {
  var t = gz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hs = Math.PI / 180, yz = (e) => e * 180 / Math.PI, ze = (e, t, r, n) => ({
  x: e + Math.cos(-hs * n) * r,
  y: t + Math.sin(-hs * n) * r
}), m1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, bz = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: o,
    y: i
  } = t;
  return Math.sqrt((r - o) ** 2 + (n - i) ** 2);
}, wz = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: o,
    cy: i
  } = t, a = bz({
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
    angle: yz(c),
    angleInRadian: c
  };
}, xz = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), o = Math.floor(r / 360), i = Math.min(n, o);
  return {
    startAngle: t - i * 360,
    endAngle: r - i * 360
  };
}, Ez = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, o = Math.floor(r / 360), i = Math.floor(n / 360), a = Math.min(o, i);
  return e + a * 360;
}, Sz = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: o,
    angle: i
  } = wz({
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
  } = xz(t), l = i, d;
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
  return d ? Xg(Xg({}, t), {}, {
    radius: o,
    angle: Ez(l, t)
  }) : null;
};
function v1(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
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
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zg(Object(r), !0).forEach(function(n) {
      Pz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pz(e, t, r) {
  return (t = Oz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Oz(e) {
  var t = Az(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Az(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Se(e, t, r) {
  return Ce(e) || Ce(t) ? r : hr(t) ? Mn(e, t, r) : typeof t == "function" ? t(e) : r;
}
var Cz = (e, t, r, n, o) => {
  var i, a = -1, s = (i = t?.length) !== null && i !== void 0 ? i : 0;
  if (s <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && o != null && Math.abs(Math.abs(o[1] - o[0]) - 360) <= 1e-6)
    for (var c = 0; c < s; c++) {
      var u = c > 0 ? r[c - 1].coordinate : r[s - 1].coordinate, l = r[c].coordinate, d = c >= s - 1 ? r[0].coordinate : r[c + 1].coordinate, p = void 0;
      if (Qe(l - u) !== Qe(d - l)) {
        var f = [];
        if (Qe(d - l) === Qe(o[1] - o[0])) {
          p = d;
          var v = l + o[1] - o[0];
          f[0] = Math.min(v, (v + u) / 2), f[1] = Math.max(v, (v + u) / 2);
        } else {
          p = u;
          var h = d + o[1] - o[0];
          f[0] = Math.min(l, (h + l) / 2), f[1] = Math.max(l, (h + l) / 2);
        }
        var g = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (e > g[0] && e <= g[1] || e >= f[0] && e <= f[1]) {
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
    for (var x = 0; x < s; x++)
      if (x === 0 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x > 0 && x < s - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x === s - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2) {
        ({
          index: a
        } = t[x]);
        break;
      }
  }
  return a;
}, Tz = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: o
    } = r, {
      align: i,
      verticalAlign: a,
      layout: s
    } = t;
    if ((s === "vertical" || s === "horizontal" && a === "middle") && i !== "center" && Q(e[i]))
      return Ut(Ut({}, e), {}, {
        [i]: e[i] + (n || 0)
      });
    if ((s === "horizontal" || s === "vertical" && i === "center") && a !== "middle" && Q(e[a]))
      return Ut(Ut({}, e), {}, {
        [a]: e[a] + (o || 0)
      });
  }
  return e;
}, br = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", g1 = (e, t, r, n) => {
  if (n)
    return e.map((s) => s.coordinate);
  var o, i, a = e.map((s) => (s.coordinate === t && (o = !0), s.coordinate === r && (i = !0), s.coordinate));
  return o || a.push(t), i || a.push(r), a;
}, y1 = (e, t, r) => {
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
    axisType: f
  } = e;
  if (!a)
    return null;
  var v = s === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, h = o === "category" && a.bandwidth ? a.bandwidth() / v : 0;
  if (h = f === "angleAxis" && i && i.length >= 2 ? Qe(i[0] - i[1]) * 2 * h : h, d || p) {
    var g = (d || p || []).map((y, w) => {
      var x = n ? n.indexOf(y) : y;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(x) + h,
        value: y,
        offset: h,
        index: w
      };
    });
    return g.filter((y) => !Rt(y.coordinate));
  }
  return c && u ? u.map((y, w) => ({
    coordinate: a(y) + h,
    value: y,
    index: w,
    offset: h
  })) : a.ticks && l != null ? a.ticks(l).map((y, w) => ({
    coordinate: a(y) + h,
    value: y,
    offset: h,
    index: w
  })) : a.domain().map((y, w) => ({
    coordinate: a(y) + h,
    value: n ? n[y] : y,
    index: w,
    offset: h
  }));
}, Jg = 1e-4, _z = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), o = Math.min(n[0], n[1]) - Jg, i = Math.max(n[0], n[1]) + Jg, a = e(t[0]), s = e(t[r - 1]);
    (a < o || a > i || s < o || s > i) && e.domain([t[0], t[r - 1]]);
  }
}, kz = (e, t) => {
  if (!t || t.length !== 2 || !Q(t[0]) || !Q(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), o = [e[0], e[1]];
  return (!Q(e[0]) || e[0] < r) && (o[0] = r), (!Q(e[1]) || e[1] > n) && (o[1] = n), o[0] > n && (o[0] = n), o[1] < r && (o[1] = r), o;
}, Nz = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, i = 0, a = 0; a < t; ++a) {
        var s = Rt(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        s >= 0 ? (e[a][r][0] = o, e[a][r][1] = o + s, o = e[a][r][1]) : (e[a][r][0] = i, e[a][r][1] = i + s, i = e[a][r][1]);
      }
}, Iz = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var o = 0, i = 0; i < t; ++i) {
        var a = Rt(e[i][r][1]) ? e[i][r][0] : e[i][r][1];
        a >= 0 ? (e[i][r][0] = o, e[i][r][1] = o + a, o = e[i][r][1]) : (e[i][r][0] = 0, e[i][r][1] = 0);
      }
}, Rz = {
  sign: Nz,
  // @ts-expect-error definitelytyped types are incorrect
  expand: F$,
  // @ts-expect-error definitelytyped types are incorrect
  none: co,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: z$,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: U$,
  positive: Iz
}, Mz = (e, t, r) => {
  var n = Rz[r], o = B$().keys(t).value((i, a) => +Se(i, a, 0)).order(Gd).offset(n);
  return o(e);
};
function b1(e) {
  return e == null ? void 0 : String(e);
}
function ms(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: o,
    index: i,
    dataKey: a
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ce(o[t.dataKey])) {
      var s = xO(r, "value", o[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var c = Se(o, Ce(a) ? t.dataKey : a);
  return Ce(c) ? null : t.scale(c);
}
var Qg = (e) => {
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
  var s = Se(i, t.dataKey, t.scale.domain()[a]);
  return Ce(s) ? null : t.scale(s) - o / 2 + n;
}, Dz = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), o = Math.max(r[0], r[1]);
    return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
  }
  return r[0];
}, jz = (e) => {
  var t = e.flat(2).filter(Q);
  return [Math.min(...t), Math.max(...t)];
}, Lz = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], $z = (e, t, r) => {
  if (e != null)
    return Lz(Object.keys(e).reduce((n, o) => {
      var i = e[o], {
        stackedData: a
      } = i, s = a.reduce((c, u) => {
        var l = v1(u, t, r), d = jz(l);
        return [Math.min(c[0], d[0]), Math.max(c[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(s[0], n[0]), Math.max(s[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, ey = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ty = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ln = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var o = Ic(t, (l) => l.coordinate), i = 1 / 0, a = 1, s = o.length; a < s; a++) {
      var c = o[a], u = o[a - 1];
      i = Math.min((c.coordinate || 0) - (u.coordinate || 0), i);
    }
    return i === 1 / 0 ? 0 : i;
  }
  return r ? void 0 : 0;
};
function ry(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: o,
    name: i
  } = e;
  return Ut(Ut({}, t), {}, {
    dataKey: r,
    payload: n,
    value: o,
    name: i
  });
}
function cn(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
function Bz(e, t, r, n, o) {
  if (r === "horizontal" || r === "vertical") {
    var i = e >= o.left && e <= o.left + o.width && t >= o.top && t <= o.top + o.height;
    return i ? {
      x: e,
      y: t
    } : null;
  }
  return n ? Sz({
    x: e,
    y: t
  }, n) : null;
}
var Fz = (e, t, r, n) => {
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
      return Ut(Ut(Ut({}, n), ze(n.cx, n.cy, a, i)), {}, {
        angle: i,
        radius: a
      });
    }
    var s = o.coordinate, {
      angle: c
    } = n;
    return Ut(Ut(Ut({}, n), ze(n.cx, n.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return {
    x: 0,
    y: 0
  };
}, zz = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, jr = (e) => e.layout.width, Lr = (e) => e.layout.height, Uz = (e) => e.layout.scale, w1 = (e) => e.layout.margin, Lc = k((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), $c = k((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), x1 = "data-recharts-item-index", E1 = "data-recharts-item-data-key", Ui = 60;
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
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      Wz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wz(e, t, r) {
  return (t = Kz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kz(e) {
  var t = Vz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qz = (e) => e.brush.height;
function Hz(e) {
  var t = $c(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : Ui;
      return r + o;
    }
    return r;
  }, 0);
}
function Gz(e) {
  var t = $c(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var o = typeof n.width == "number" ? n.width : Ui;
      return r + o;
    }
    return r;
  }, 0);
}
function Yz(e) {
  var t = Lc(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function Xz(e) {
  var t = Lc(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var He = k([jr, Lr, w1, qz, Hz, Gz, Yz, Xz, LO, rF], (e, t, r, n, o, i, a, s, c, u) => {
  var l = {
    left: (r.left || 0) + o,
    right: (r.right || 0) + i
  }, d = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + s
  }, p = Pa(Pa({}, d), l), f = p.bottom;
  p.bottom += n, p = Tz(p, c, u);
  var v = e - p.left - p.right, h = t - p.top - p.bottom;
  return Pa(Pa({
    brushBottom: f
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(v, 0),
    height: Math.max(h, 0)
  });
}), Zz = k(He, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Yp = k(jr, Lr, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), Jz = /* @__PURE__ */ Dt(null), ot = () => tr(Jz) != null, Bc = (e) => e.brush, Fc = k([Bc, He, w1], (e, t, r) => ({
  height: e.height,
  x: Q(e.x) ? e.x : t.left,
  y: Q(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: Q(e.width) ? e.width : t.width
})), Bu = {}, Fu = {}, zu = {}, oy;
function Qz() {
  return oy || (oy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: o, edges: i } = {}) {
      let a, s = null;
      const c = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), l = () => {
        s !== null && (r.apply(a, s), a = void 0, s = null);
      }, d = () => {
        u && l(), h();
      };
      let p = null;
      const f = () => {
        p != null && clearTimeout(p), p = setTimeout(() => {
          p = null, d();
        }, n);
      }, v = () => {
        p !== null && (clearTimeout(p), p = null);
      }, h = () => {
        v(), a = void 0, s = null;
      }, g = () => {
        l();
      }, y = function(...w) {
        if (o?.aborted)
          return;
        a = this, s = w;
        const x = p == null;
        f(), c && x && l();
      };
      return y.schedule = f, y.cancel = h, y.flush = g, o?.addEventListener("abort", h, { once: !0 }), y;
    }
    e.debounce = t;
  })(zu)), zu;
}
var iy;
function eU() {
  return iy || (iy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Qz();
    function r(n, o = 0, i = {}) {
      typeof i != "object" && (i = {});
      const { leading: a = !1, trailing: s = !0, maxWait: c } = i, u = Array(2);
      a && (u[0] = "leading"), s && (u[1] = "trailing");
      let l, d = null;
      const p = t.debounce(function(...h) {
        l = n.apply(this, h), d = null;
      }, o, { edges: u }), f = function(...h) {
        return c != null && (d === null && (d = Date.now()), Date.now() - d >= c) ? (l = n.apply(this, h), d = Date.now(), p.cancel(), p.schedule(), l) : (p.apply(this, h), l);
      }, v = () => (p.flush(), l);
      return f.cancel = p.cancel, f.flush = v, f;
    }
    e.debounce = r;
  })(Fu)), Fu;
}
var ay;
function tU() {
  return ay || (ay = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eU();
    function r(n, o = 0, i = {}) {
      const { leading: a = !0, trailing: s = !0 } = i;
      return t.debounce(n, o, {
        leading: a,
        maxWait: o,
        trailing: s
      });
    }
    e.throttle = r;
  })(Bu)), Bu;
}
var Uu, sy;
function rU() {
  return sy || (sy = 1, Uu = tU().throttle), Uu;
}
var nU = /* @__PURE__ */ rU();
const oU = /* @__PURE__ */ sn(nU);
var iU = process.env.NODE_ENV !== "production", vs = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    o[i - 2] = arguments[i];
  if (iU && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      console.warn(r.replace(/%s/g, () => o[a++]));
    }
}, S1 = (e, t, r) => {
  var {
    width: n = "100%",
    height: o = "100%",
    aspect: i,
    maxHeight: a
  } = r, s = Nr(n) ? e : Number(n), c = Nr(o) ? t : Number(o);
  return i && i > 0 && (s ? c = s / i : c && (s = c * i), a && c > a && (c = a)), {
    calculatedWidth: s,
    calculatedHeight: c
  };
}, aU = {
  width: 0,
  height: 0,
  overflow: "visible"
}, sU = {
  width: 0,
  overflowX: "visible"
}, cU = {
  height: 0,
  overflowY: "visible"
}, lU = {}, uU = (e) => {
  var {
    width: t,
    height: r
  } = e, n = Nr(t), o = Nr(r);
  return n && o ? aU : n ? sU : o ? cU : lU;
};
function dU(e) {
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
function We(e) {
  return Number.isFinite(e);
}
function lo(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
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
      fU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fU(e, t, r) {
  return (t = pU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pU(e) {
  var t = hU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var P1 = /* @__PURE__ */ Dt({
  width: -1,
  height: -1
});
function O1(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, o = rr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return r <= 0 || n <= 0 ? null : /* @__PURE__ */ m.createElement(P1.Provider, {
    value: o
  }, t);
}
var Xp = () => tr(P1), mU = /* @__PURE__ */ Fe((e, t) => {
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
    onResize: f,
    style: v = {}
  } = e, h = ye(null), g = ye();
  g.current = f, Fw(t, () => h.current);
  var [y, w] = je({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = he((A, _) => {
    w((N) => {
      var T = Math.round(A), I = Math.round(_);
      return N.containerWidth === T && N.containerHeight === I ? N : {
        containerWidth: T,
        containerHeight: I
      };
    });
  }, []);
  Le(() => {
    var A = (I) => {
      var j, {
        width: C,
        height: D
      } = I[0].contentRect;
      x(C, D), (j = g.current) === null || j === void 0 || j.call(g, C, D);
    };
    l > 0 && (A = oU(A, l, {
      trailing: !0,
      leading: !1
    }));
    var _ = new ResizeObserver(A), {
      width: N,
      height: T
    } = h.current.getBoundingClientRect();
    return x(N, T), _.observe(h.current), () => {
      _.disconnect();
    };
  }, [x, l]);
  var {
    containerWidth: S,
    containerHeight: E
  } = y;
  vs(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: O
  } = S1(S, E, {
    width: o,
    height: i,
    aspect: r,
    maxHeight: c
  });
  return vs(P > 0 || O > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, O, o, i, a, s, r), /* @__PURE__ */ m.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: pe("recharts-responsive-container", p),
    style: ly(ly({}, v), {}, {
      width: o,
      height: i,
      minWidth: a,
      minHeight: s,
      maxHeight: c
    }),
    ref: h
  }, /* @__PURE__ */ m.createElement("div", {
    style: uU({
      width: o,
      height: i
    })
  }, /* @__PURE__ */ m.createElement(O1, {
    width: P,
    height: O
  }, u)));
}), zc = /* @__PURE__ */ Fe((e, t) => {
  var r = Xp();
  if (lo(r.width) && lo(r.height))
    return e.children;
  var {
    width: n,
    height: o
  } = dU({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: i,
    calculatedHeight: a
  } = S1(void 0, void 0, {
    width: n,
    height: o,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return Q(i) && Q(a) ? /* @__PURE__ */ m.createElement(O1, {
    width: i,
    height: a
  }, e.children) : /* @__PURE__ */ m.createElement(mU, cf({}, e, {
    width: n,
    height: o,
    ref: t
  }));
}), Uc = () => {
  var e, t = ot(), r = ee(Zz), n = ee(Fc), o = (e = ee(Bc)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !o ? r : {
    width: n.width - o.left - o.right,
    height: n.height - o.top - o.bottom,
    x: o.left,
    y: o.top
  };
}, vU = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, A1 = () => {
  var e;
  return (e = ee(He)) !== null && e !== void 0 ? e : vU;
}, Zp = () => ee(jr), Jp = () => ee(Lr), gU = () => ee((e) => e.layout.margin), fe = (e) => e.layout.layoutType, Wi = () => ee(fe), Wc = (e) => {
  var t = Re(), r = ot(), {
    width: n,
    height: o
  } = e, i = Xp(), a = n, s = o;
  return i && (a = i.width > 0 ? i.width : n, s = i.height > 0 ? i.height : o), Le(() => {
    !r && lo(a) && lo(s) && t(fz({
      width: a,
      height: s
    }));
  }, [t, r, a, s]), null;
}, yU = {
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
}, C1 = Lt({
  name: "legend",
  initialState: yU,
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
        var r = Ar(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  setLegendSize: uy,
  setLegendSettings: bU,
  addLegendPayload: T1,
  removeLegendPayload: _1
} = C1.actions, wU = C1.reducer, xU = ["contextPayload"];
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lf.apply(null, arguments);
}
function dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dy(Object(r), !0).forEach(function(n) {
      Qp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qp(e, t, r) {
  return (t = EU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EU(e) {
  var t = SU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PU(e, t) {
  if (e == null) return {};
  var r, n, o = OU(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function OU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function AU(e) {
  return e.value;
}
function CU(e) {
  var {
    contextPayload: t
  } = e, r = PU(e, xU), n = IO(t, e.payloadUniqBy, AU), o = uo(uo({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ m.isValidElement(e.content) ? /* @__PURE__ */ m.cloneElement(e.content, o) : typeof e.content == "function" ? /* @__PURE__ */ m.createElement(e.content, o) : /* @__PURE__ */ m.createElement(zp, o);
}
function TU(e, t, r, n, o, i) {
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
  }), uo(uo({}, u), l);
}
function _U(e) {
  var t = Re();
  return Le(() => {
    t(bU(e));
  }, [t, e]), null;
}
function kU(e) {
  var t = Re();
  return Le(() => (t(uy(e)), () => {
    t(uy({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function NU(e) {
  var t = iF(), r = l$(), n = gU(), {
    width: o,
    height: i,
    wrapperStyle: a,
    portal: s
  } = e, [c, u] = $O([t]), l = Zp(), d = Jp();
  if (l == null || d == null)
    return null;
  var p = l - (n.left || 0) - (n.right || 0), f = Kn.getWidthOrHeight(e.layout, i, o, p), v = s ? a : uo(uo({
    position: "absolute",
    width: f?.width || o || "auto",
    height: f?.height || i || "auto"
  }, TU(a, e, n, l, d, c)), a), h = s ?? r;
  if (h == null)
    return null;
  var g = /* @__PURE__ */ m.createElement("div", {
    className: "recharts-legend-wrapper",
    style: v,
    ref: u
  }, /* @__PURE__ */ m.createElement(_U, {
    layout: e.layout,
    align: e.align,
    verticalAlign: e.verticalAlign,
    itemSorter: e.itemSorter
  }), /* @__PURE__ */ m.createElement(kU, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ m.createElement(CU, lf({}, e, f, {
    margin: n,
    chartWidth: l,
    chartHeight: d,
    contextPayload: t
  })));
  return /* @__PURE__ */ zw(g, h);
}
class Kn extends xi {
  static getWidthOrHeight(t, r, n, o) {
    return t === "vertical" && Q(r) ? {
      height: r
    } : t === "horizontal" ? {
      width: n || o
    } : null;
  }
  render() {
    return /* @__PURE__ */ m.createElement(NU, this.props);
  }
}
Qp(Kn, "displayName", "Legend");
Qp(Kn, "defaultProps", {
  align: "center",
  iconSize: 14,
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
});
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uf.apply(null, arguments);
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      IU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IU(e, t, r) {
  return (t = RU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RU(e) {
  var t = MU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DU(e) {
  return Array.isArray(e) && hr(e[0]) && hr(e[1]) ? e.join(" ~ ") : e;
}
var jU = (e) => {
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
  } = e, f = () => {
    if (i && i.length) {
      var E = {
        padding: 0,
        margin: 0
      }, P = (s ? Ic(i, s) : i).map((O, A) => {
        if (O.type === "none")
          return null;
        var _ = O.formatter || a || DU, {
          value: N,
          name: T
        } = O, I = N, j = T;
        if (_) {
          var C = _(N, T, O, A, i);
          if (Array.isArray(C))
            [I, j] = C;
          else if (C != null)
            I = C;
          else
            return null;
        }
        var D = Wu({
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
            style: D
          }, hr(j) ? /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, j) : null, hr(j) ? /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, t) : null, /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, I), /* @__PURE__ */ m.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, O.unit || ""))
        );
      });
      return /* @__PURE__ */ m.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: E
      }, P);
    }
    return null;
  }, v = Wu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), h = Wu({
    margin: 0
  }, o), g = !Ce(l), y = g ? l : "", w = pe("recharts-default-tooltip", c), x = pe("recharts-tooltip-label", u);
  g && d && i !== void 0 && i !== null && (y = d(l, i));
  var S = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ m.createElement("div", uf({
    className: w,
    style: v
  }, S), /* @__PURE__ */ m.createElement("p", {
    className: x,
    style: h
  }, /* @__PURE__ */ m.isValidElement(y) ? y : "".concat(y)), f());
}, zo = "recharts-tooltip-wrapper", LU = {
  visibility: "hidden"
};
function $U(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return pe(zo, {
    ["".concat(zo, "-right")]: Q(r) && t && Q(t.x) && r >= t.x,
    ["".concat(zo, "-left")]: Q(r) && t && Q(t.x) && r < t.x,
    ["".concat(zo, "-bottom")]: Q(n) && t && Q(t.y) && n >= t.y,
    ["".concat(zo, "-top")]: Q(n) && t && Q(t.y) && n < t.y
  });
}
function py(e) {
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
  if (i && Q(i[n]))
    return i[n];
  var l = r[n] - s - (o > 0 ? o : 0), d = r[n] + o;
  if (t[n])
    return a[n] ? l : d;
  var p = c[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var f = l, v = p;
    return f < v ? Math.max(d, p) : Math.max(l, p);
  }
  if (u == null)
    return 0;
  var h = d + s, g = p + u;
  return h > g ? Math.max(l, p) : Math.max(d, p);
}
function BU(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function FU(e) {
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
  return a.height > 0 && a.width > 0 && r ? (l = py({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: i,
    tooltipDimension: a.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = py({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: i,
    tooltipDimension: a.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = BU({
    translateX: l,
    translateY: d,
    useTranslate3d: s
  })) : u = LU, {
    cssProperties: u,
    cssClasses: $U({
      translateX: l,
      translateY: d,
      coordinate: r
    })
  };
}
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      df(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function df(e, t, r) {
  return (t = zU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zU(e) {
  var t = UU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class WU extends xi {
  constructor() {
    super(...arguments), df(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), df(this, "handleKeyDown", (t) => {
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
      viewBox: f,
      wrapperStyle: v,
      lastBoundingBox: h,
      innerRef: g,
      hasPortalFromProps: y
    } = this.props, {
      cssClasses: w,
      cssProperties: x
    } = FU({
      allowEscapeViewBox: r,
      coordinate: a,
      offsetTopLeft: u,
      position: l,
      reverseDirection: d,
      tooltipBox: {
        height: h.height,
        width: h.width
      },
      useTranslate3d: p,
      viewBox: f
    }), S = y ? {} : Oa(Oa({
      transition: c && t ? "transform ".concat(n, "ms ").concat(o) : void 0
    }, x), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), E = Oa(Oa({}, S), {}, {
      visibility: !this.state.dismissed && t && s ? "visible" : "hidden"
    }, v);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ m.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: w,
        style: E,
        ref: g
      }, i)
    );
  }
}
var KU = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), $r = {
  devToolsEnabled: !1,
  isSsr: KU()
}, k1 = () => ee((e) => e.rootProps.accessibilityLayer);
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ff.apply(null, arguments);
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      VU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VU(e, t, r) {
  return (t = qU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qU(e) {
  var t = HU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gy = {
  curveBasisClosed: T$,
  curveBasisOpen: _$,
  curveBasis: C$,
  curveBumpX: p$,
  curveBumpY: h$,
  curveLinearClosed: k$,
  curveLinear: kc,
  curveMonotoneX: N$,
  curveMonotoneY: I$,
  curveNatural: R$,
  curveStep: M$,
  curveStepAfter: j$,
  curveStepBefore: D$
}, Aa = (e) => We(e.x) && We(e.y), Uo = (e) => e.x, Wo = (e) => e.y, GU = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(ji(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? gy["".concat(r).concat(t === "vertical" ? "Y" : "X")] : gy[r] || kc;
}, YU = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: o,
    connectNulls: i = !1
  } = e, a = GU(t, o), s = i ? r.filter(Aa) : r, c;
  if (Array.isArray(n)) {
    var u = i ? n.filter((d) => Aa(d)) : n, l = s.map((d, p) => vy(vy({}, d), {}, {
      base: u[p]
    }));
    return o === "vertical" ? c = ma().y(Wo).x1(Uo).x0((d) => d.base.x) : c = ma().x(Uo).y1(Wo).y0((d) => d.base.y), c.defined(Aa).curve(a), c(l);
  }
  return o === "vertical" && Q(n) ? c = ma().y(Wo).x1(Uo).x0(n) : Q(n) ? c = ma().x(Uo).y1(Wo).y0(n) : c = cO().x(Uo).y(Wo), c.defined(Aa).curve(a), c(s);
}, no = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: o
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var i = r && r.length ? YU(e) : n;
  return /* @__PURE__ */ m.createElement("path", ff({}, ht(e), Bp(e), {
    className: pe("recharts-curve", t),
    d: i === null ? void 0 : i,
    ref: o
  }));
}, XU = ["x", "y", "top", "left", "width", "height", "className"];
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pf.apply(null, arguments);
}
function yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ZU(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yy(Object(r), !0).forEach(function(n) {
      JU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JU(e, t, r) {
  return (t = QU(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QU(e) {
  var t = e4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t4(e, t) {
  if (e == null) return {};
  var r, n, o = r4(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function r4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var n4 = (e, t, r, n, o, i) => "M".concat(e, ",").concat(o, "v").concat(n, "M").concat(i, ",").concat(t, "h").concat(r), o4 = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: o = 0,
    width: i = 0,
    height: a = 0,
    className: s
  } = e, c = t4(e, XU), u = ZU({
    x: t,
    y: r,
    top: n,
    left: o,
    width: i,
    height: a
  }, c);
  return !Q(t) || !Q(r) || !Q(i) || !Q(a) || !Q(n) || !Q(o) ? null : /* @__PURE__ */ m.createElement("path", pf({}, mt(u), {
    className: pe("recharts-cross", s),
    d: n4(t, r, i, a, n, o)
  }));
};
function i4(e, t, r, n) {
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
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function a4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      s4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s4(e, t, r) {
  return (t = c4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c4(e) {
  var t = l4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function l4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ge(e, t) {
  var r = a4({}, e), n = t, o = Object.keys(t), i = o.reduce((a, s) => (a[s] === void 0 && n[s] !== void 0 && (a[s] = n[s]), a), r);
  return i;
}
function u4() {
}
function d4(e) {
  return e != null;
}
function wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wy(Object(r), !0).forEach(function(n) {
      f4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f4(e, t, r) {
  return (t = p4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p4(e) {
  var t = h4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function h4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var m4 = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), N1 = (e, t, r) => e.map((n) => "".concat(m4(n), " ").concat(t, "ms ").concat(r)).join(","), v4 = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((o) => n.includes(o))), pi = (e, t) => Object.keys(t).reduce((r, n) => xy(xy({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Ey(e, t) {
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
    t % 2 ? Ey(Object(r), !0).forEach(function(n) {
      g4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g4(e, t, r) {
  return (t = y4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y4(e) {
  var t = b4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function b4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gs = (e, t, r) => e + (t - e) * r, hf = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, I1 = (e, t, r) => {
  var n = pi((o, i) => {
    if (hf(i)) {
      var [a, s] = e(i.from, i.to, i.velocity);
      return rt(rt({}, i), {}, {
        from: a,
        velocity: s
      });
    }
    return i;
  }, t);
  return r < 1 ? pi((o, i) => hf(i) ? rt(rt({}, i), {}, {
    velocity: gs(i.velocity, n[o].velocity, r),
    from: gs(i.from, n[o].from, r)
  }) : i, t) : I1(e, n, r - 1);
};
function w4(e, t, r, n, o, i) {
  var a, s = n.reduce((p, f) => rt(rt({}, p), {}, {
    [f]: {
      from: e[f],
      velocity: 0,
      to: t[f]
    }
  }), {}), c = () => pi((p, f) => f.from, s), u = () => !Object.values(s).filter(hf).length, l = null, d = (p) => {
    a || (a = p);
    var f = p - a, v = f / r.dt;
    s = I1(r, s, v), o(rt(rt(rt({}, e), t), c())), a = p, u() || (l = i.setTimeout(d));
  };
  return () => (l = i.setTimeout(d), () => {
    l();
  });
}
function x4(e, t, r, n, o, i, a) {
  var s = null, c = o.reduce((d, p) => rt(rt({}, d), {}, {
    [p]: [e[p], t[p]]
  }), {}), u, l = (d) => {
    u || (u = d);
    var p = (d - u) / n, f = pi((h, g) => gs(...g, r(p)), c);
    if (i(rt(rt(rt({}, e), t), f)), p < 1)
      s = a.setTimeout(l);
    else {
      var v = pi((h, g) => gs(...g, r(1)), c);
      i(rt(rt(rt({}, e), t), v));
    }
  };
  return () => (s = a.setTimeout(l), () => {
    s();
  });
}
const E4 = (e, t, r, n, o, i) => {
  var a = v4(e, t);
  return r.isStepper === !0 ? w4(e, t, r, a, o, i) : x4(e, t, r, n, a, o, i);
};
var ys = 1e-4, R1 = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], M1 = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Sy = (e, t) => (r) => {
  var n = R1(e, t);
  return M1(n, r);
}, S4 = (e, t) => (r) => {
  var n = R1(e, t), o = [...n.map((i, a) => i * a).slice(1), 0];
  return M1(o, r);
}, Py = function() {
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
  var u = Sy(t, r), l = Sy(n, o), d = S4(t, r), p = (v) => v > 1 ? 1 : v < 0 ? 0 : v, f = (v) => {
    for (var h = v > 1 ? 1 : v, g = h, y = 0; y < 8; ++y) {
      var w = u(g) - h, x = d(g);
      if (Math.abs(w - h) < ys || x < ys)
        return l(g);
      g = p(g - w / x);
    }
    return l(g);
  };
  return f.isStepper = !1, f;
}, P4 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: o = 17
  } = t, i = (a, s, c) => {
    var u = -(a - s) * r, l = c * n, d = c + (u - l) * o / 1e3, p = c * o / 1e3 + a;
    return Math.abs(p - s) < ys && Math.abs(d) < ys ? [s, 0] : [p, d];
  };
  return i.isStepper = !0, i.dt = o, i;
}, O4 = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Py(e);
      case "spring":
        return P4();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Py(e);
    }
  return typeof e == "function" ? e : null;
};
function A4(e) {
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
class C4 {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), o = null, i = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (o = requestAnimationFrame(i));
    };
    return o = requestAnimationFrame(i), () => {
      cancelAnimationFrame(o);
    };
  }
}
function T4() {
  return A4(new C4());
}
var _4 = /* @__PURE__ */ Dt(T4);
function k4(e, t) {
  var r = tr(_4);
  return rr(() => t ?? r(e), [e, t, r]);
}
var N4 = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, Oy = {
  t: 0
}, Ku = {
  t: 1
};
function Co(e) {
  var t = Ge(e, N4), {
    isActive: r,
    canBegin: n,
    duration: o,
    easing: i,
    begin: a,
    onAnimationEnd: s,
    onAnimationStart: c,
    children: u
  } = t, l = k4(t.animationId, t.animationManager), [d, p] = je(r ? Oy : Ku), f = ye(null);
  return Le(() => {
    r || p(Ku);
  }, [r]), Le(() => {
    if (!r || !n)
      return u4;
    var v = E4(Oy, Ku, O4(i), o, p, l.getTimeoutController()), h = () => {
      f.current = v();
    };
    return l.start([c, a, h, o, s]), () => {
      l.stop(), f.current && f.current(), s();
    };
  }, [r, n, o, i, a, c, s, l]), u(d.t);
}
function To(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ye(li(t)), n = ye(e);
  return n.current !== e && (r.current = li(t), n.current = e), r.current;
}
var I4 = ["radius"], R4 = ["radius"];
function Ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ay(Object(r), !0).forEach(function(n) {
      M4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M4(e, t, r) {
  return (t = D4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D4(e) {
  var t = j4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function j4(e, t) {
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
function Ty(e, t) {
  if (e == null) return {};
  var r, n, o = L4(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function L4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var _y = (e, t, r, n, o) => {
  var i = Math.min(Math.abs(r) / 2, Math.abs(n) / 2), a = n >= 0 ? 1 : -1, s = r >= 0 ? 1 : -1, c = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0, u;
  if (i > 0 && o instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = o[d] > i ? i : o[d];
    u = "M".concat(e, ",").concat(t + a * l[0]), l[0] > 0 && (u += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(e + s * l[0], ",").concat(t)), u += "L ".concat(e + r - s * l[1], ",").concat(t), l[1] > 0 && (u += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(e + r, ",").concat(t + a * l[1])), u += "L ".concat(e + r, ",").concat(t + n - a * l[2]), l[2] > 0 && (u += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(e + r - s * l[2], ",").concat(t + n)), u += "L ".concat(e + s * l[3], ",").concat(t + n), l[3] > 0 && (u += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(e, ",").concat(t + n - a * l[3])), u += "Z";
  } else if (i > 0 && o === +o && o > 0) {
    var f = Math.min(i, o);
    u = "M ".concat(e, ",").concat(t + a * f, `
            A `).concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(e + s * f, ",").concat(t, `
            L `).concat(e + r - s * f, ",").concat(t, `
            A `).concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(e + r, ",").concat(t + a * f, `
            L `).concat(e + r, ",").concat(t + n - a * f, `
            A `).concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(e + r - s * f, ",").concat(t + n, `
            L `).concat(e + s * f, ",").concat(t + n, `
            A `).concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(e, ",").concat(t + n - a * f, " Z");
  } else
    u = "M ".concat(e, ",").concat(t, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
  return u;
}, $4 = {
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
}, D1 = (e) => {
  var t = Ge(e, $4), r = ye(null), [n, o] = je(-1);
  Le(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var z = r.current.getTotalLength();
        z && o(z);
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
    animationBegin: f,
    isAnimationActive: v,
    isUpdateAnimationActive: h
  } = t, g = ye(s), y = ye(c), w = ye(i), x = ye(a), S = rr(() => ({
    x: i,
    y: a,
    width: s,
    height: c,
    radius: u
  }), [i, a, s, c, u]), E = To(S, "rectangle-");
  if (i !== +i || a !== +a || s !== +s || c !== +c || s === 0 || c === 0)
    return null;
  var P = pe("recharts-rectangle", l);
  if (!h) {
    var O = mt(t), {
      radius: A
    } = O, _ = Ty(O, I4);
    return /* @__PURE__ */ m.createElement("path", bs({}, _, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: _y(i, a, s, c, u)
    }));
  }
  var N = g.current, T = y.current, I = w.current, j = x.current, C = "0px ".concat(n === -1 ? 1 : n, "px"), D = "".concat(n, "px 0px"), $ = N1(["strokeDasharray"], p, typeof d == "string" ? d : void 0);
  return /* @__PURE__ */ m.createElement(Co, {
    animationId: E,
    key: E,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: h,
    begin: f
  }, (z) => {
    var M = Ee(N, s, z), F = Ee(T, c, z), oe = Ee(I, i, z), H = Ee(j, a, z);
    r.current && (g.current = M, y.current = F, w.current = oe, x.current = H);
    var ae;
    v ? z > 0 ? ae = {
      transition: $,
      strokeDasharray: D
    } : ae = {
      strokeDasharray: C
    } : ae = {
      strokeDasharray: D
    };
    var ie = mt(t), {
      radius: W
    } = ie, te = Ty(ie, R4);
    return /* @__PURE__ */ m.createElement("path", bs({}, te, {
      radius: typeof u == "number" ? u : void 0,
      className: P,
      d: _y(oe, H, M, F, u),
      ref: r,
      style: Cy(Cy({}, ae), t.style)
    }));
  });
};
function j1(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: i
  } = e, a = ze(t, r, n, o), s = ze(t, r, n, i);
  return {
    points: [a, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: i
  };
}
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mf.apply(null, arguments);
}
var B4 = (e, t) => {
  var r = Qe(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Ca = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: o,
    sign: i,
    isExternal: a,
    cornerRadius: s,
    cornerIsExternal: c
  } = e, u = s * (a ? 1 : -1) + n, l = Math.asin(s / u) / hs, d = c ? o : o + i * l, p = ze(t, r, u, d), f = ze(t, r, n, d), v = c ? o - i * l : o, h = ze(t, r, u * Math.cos(l * hs), v);
  return {
    center: p,
    circleTangency: f,
    lineTangency: h,
    theta: l
  };
}, L1 = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: o,
    startAngle: i,
    endAngle: a
  } = e, s = B4(i, a), c = i + s, u = ze(t, r, o, i), l = ze(t, r, o, c), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(o, ",").concat(o, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(i > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var p = ze(t, r, n, i), f = ze(t, r, n, c);
    d += "L ".concat(f.x, ",").concat(f.y, `
            A `).concat(n, ",").concat(n, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(i <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(t, ",").concat(r, " Z");
  return d;
}, F4 = (e) => {
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
  } = e, l = Qe(u - c), {
    circleTangency: d,
    lineTangency: p,
    theta: f
  } = Ca({
    cx: t,
    cy: r,
    radius: o,
    angle: c,
    sign: l,
    cornerRadius: i,
    cornerIsExternal: s
  }), {
    circleTangency: v,
    lineTangency: h,
    theta: g
  } = Ca({
    cx: t,
    cy: r,
    radius: o,
    angle: u,
    sign: -l,
    cornerRadius: i,
    cornerIsExternal: s
  }), y = s ? Math.abs(c - u) : Math.abs(c - u) - f - g;
  if (y < 0)
    return a ? "M ".concat(p.x, ",").concat(p.y, `
        a`).concat(i, ",").concat(i, ",0,0,1,").concat(i * 2, `,0
        a`).concat(i, ",").concat(i, ",0,0,1,").concat(-i * 2, `,0
      `) : L1({
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
    A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(h.x, ",").concat(h.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: S,
      theta: E
    } = Ca({
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
    } = Ca({
      cx: t,
      cy: r,
      radius: n,
      angle: u,
      sign: -l,
      isExternal: !0,
      cornerRadius: i,
      cornerIsExternal: s
    }), _ = s ? Math.abs(c - u) : Math.abs(c - u) - E - A;
    if (_ < 0 && i === 0)
      return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += "L".concat(O.x, ",").concat(O.y, `
      A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(_ > 180), ",").concat(+(l > 0), ",").concat(x.x, ",").concat(x.y, `
      A`).concat(i, ",").concat(i, ",0,0,").concat(+(l < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    w += "L".concat(t, ",").concat(r, "Z");
  return w;
}, z4 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, $1 = (e) => {
  var t = Ge(e, z4), {
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
  var p = pe("recharts-sector", d), f = i - o, v = ct(a, f, 0, !0), h;
  return v > 0 && Math.abs(u - l) < 360 ? h = F4({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: i,
    cornerRadius: Math.min(v, f / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: l
  }) : h = L1({
    cx: r,
    cy: n,
    innerRadius: o,
    outerRadius: i,
    startAngle: u,
    endAngle: l
  }), /* @__PURE__ */ m.createElement("path", mf({}, mt(t), {
    className: p,
    d: h
  }));
};
function U4(e, t, r) {
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
      } = t, p = ze(s, c, u, d), f = ze(s, c, l, d);
      n = p.x, o = p.y, i = f.x, a = f.y;
    } else
      return j1(t);
  return [{
    x: n,
    y: o
  }, {
    x: i,
    y: a
  }];
}
var Vu = {}, qu = {}, Hu = {}, ky;
function W4() {
  return ky || (ky = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ DO();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Hu)), Hu;
}
var Ny;
function K4() {
  return Ny || (Ny = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ W4();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(qu)), qu;
}
var Iy;
function V4() {
  return Iy || (Iy = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jO(), r = /* @__PURE__ */ K4();
    function n(o, i, a) {
      a && typeof a != "number" && t.isIterateeCall(o, i, a) && (i = a = void 0), o = r.toFinite(o), i === void 0 ? (i = o, o = 0) : i = r.toFinite(i), a = a === void 0 ? o < i ? 1 : -1 : r.toFinite(a);
      const s = Math.max(Math.ceil((i - o) / (a || 1)), 0), c = new Array(s);
      for (let u = 0; u < s; u++)
        c[u] = o, o += a;
      return c;
    }
    e.range = n;
  })(Vu)), Vu;
}
var Gu, Ry;
function q4() {
  return Ry || (Ry = 1, Gu = V4().range), Gu;
}
var H4 = /* @__PURE__ */ q4();
const B1 = /* @__PURE__ */ sn(H4);
function Zr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function G4(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function eh(e) {
  let t, r, n;
  e.length !== 2 ? (t = Zr, r = (s, c) => Zr(e(s), c), n = (s, c) => e(s) - c) : (t = e === Zr || e === G4 ? e : Y4, r = e, n = e);
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
function Y4() {
  return 0;
}
function F1(e) {
  return e === null ? NaN : +e;
}
function* X4(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const Z4 = eh(Zr), Ki = Z4.right;
eh(F1).center;
class My extends Map {
  constructor(t, r = eW) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(Dy(this, t));
  }
  has(t) {
    return super.has(Dy(this, t));
  }
  set(t, r) {
    return super.set(J4(this, t), r);
  }
  delete(t) {
    return super.delete(Q4(this, t));
  }
}
function Dy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function J4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function Q4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function eW(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function tW(e = Zr) {
  if (e === Zr) return z1;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function z1(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const rW = Math.sqrt(50), nW = Math.sqrt(10), oW = Math.sqrt(2);
function ws(e, t, r) {
  const n = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(n)), i = n / Math.pow(10, o), a = i >= rW ? 10 : i >= nW ? 5 : i >= oW ? 2 : 1;
  let s, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / a, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * a, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? ws(e, t, r * 2) : [s, c, u];
}
function vf(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [o, i, a] = n ? ws(t, e, r) : ws(e, t, r);
  if (!(i >= o)) return [];
  const s = i - o + 1, c = new Array(s);
  if (n)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (i - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (o + u) * a;
  return c;
}
function gf(e, t, r) {
  return t = +t, e = +e, r = +r, ws(e, t, r)[2];
}
function yf(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, o = n ? gf(t, e, r) : gf(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function jy(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ly(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function U1(e, t, r = 0, n = 1 / 0, o) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (o = o === void 0 ? z1 : tW(o); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), d = 0.5 * Math.exp(2 * l / 3), p = 0.5 * Math.sqrt(l * d * (c - d) / c) * (u - c / 2 < 0 ? -1 : 1), f = Math.max(r, Math.floor(t - u * d / c + p)), v = Math.min(n, Math.floor(t + (c - u) * d / c + p));
      U1(e, t, f, v, o);
    }
    const i = e[t];
    let a = r, s = n;
    for (Ko(e, r, t), o(e[n], i) > 0 && Ko(e, r, n); a < s; ) {
      for (Ko(e, a, s), ++a, --s; o(e[a], i) < 0; ) ++a;
      for (; o(e[s], i) > 0; ) --s;
    }
    o(e[r], i) === 0 ? Ko(e, r, s) : (++s, Ko(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Ko(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function iW(e, t, r) {
  if (e = Float64Array.from(X4(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Ly(e);
    if (t >= 1) return jy(e);
    var n, o = (n - 1) * t, i = Math.floor(o), a = jy(U1(e, i).subarray(0, i + 1)), s = Ly(e.subarray(i + 1));
    return a + (s - a) * (o - i);
  }
}
function aW(e, t, r = F1) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, o = (n - 1) * t, i = Math.floor(o), a = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return a + (s - a) * (o - i);
  }
}
function sW(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(o); ++n < o; )
    i[n] = e + n * r;
  return i;
}
function Yt(e, t) {
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
const bf = Symbol("implicit");
function th() {
  var e = new My(), t = [], r = [], n = bf;
  function o(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (n !== bf) return n;
      e.set(i, a = t.push(i) - 1);
    }
    return r[a % r.length];
  }
  return o.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new My();
    for (const a of i)
      e.has(a) || e.set(a, t.push(a) - 1);
    return o;
  }, o.range = function(i) {
    return arguments.length ? (r = Array.from(i), o) : r.slice();
  }, o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  }, o.copy = function() {
    return th(t, r).unknown(n);
  }, Yt.apply(o, arguments), o;
}
function rh() {
  var e = th().unknown(void 0), t = e.domain, r = e.range, n = 0, o = 1, i, a, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, f = o < n, v = f ? o : n, h = f ? n : o;
    i = (h - v) / Math.max(1, p - c + u * 2), s && (i = Math.floor(i)), v += (h - v - i * (p - c)) * l, a = i * (1 - c), s && (v = Math.round(v), a = Math.round(a));
    var g = sW(p).map(function(y) {
      return v + i * y;
    });
    return r(f ? g.reverse() : g);
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
    return rh(t(), [n, o]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, Yt.apply(d(), arguments);
}
function W1(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return W1(t());
  }, e;
}
function cW() {
  return W1(rh.apply(null, arguments).paddingInner(1));
}
function nh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function K1(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Vi() {
}
var hi = 0.7, xs = 1 / hi, oo = "\\s*([+-]?\\d+)\\s*", mi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", lW = /^#([0-9a-f]{3,8})$/, uW = new RegExp(`^rgb\\(${oo},${oo},${oo}\\)$`), dW = new RegExp(`^rgb\\(${dr},${dr},${dr}\\)$`), fW = new RegExp(`^rgba\\(${oo},${oo},${oo},${mi}\\)$`), pW = new RegExp(`^rgba\\(${dr},${dr},${dr},${mi}\\)$`), hW = new RegExp(`^hsl\\(${mi},${dr},${dr}\\)$`), mW = new RegExp(`^hsla\\(${mi},${dr},${dr},${mi}\\)$`), $y = {
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
nh(Vi, vi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: By,
  // Deprecated! Use color.formatHex.
  formatHex: By,
  formatHex8: vW,
  formatHsl: gW,
  formatRgb: Fy,
  toString: Fy
});
function By() {
  return this.rgb().formatHex();
}
function vW() {
  return this.rgb().formatHex8();
}
function gW() {
  return V1(this).formatHsl();
}
function Fy() {
  return this.rgb().formatRgb();
}
function vi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = lW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? zy(t) : r === 3 ? new bt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ta(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ta(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uW.exec(e)) ? new bt(t[1], t[2], t[3], 1) : (t = dW.exec(e)) ? new bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fW.exec(e)) ? Ta(t[1], t[2], t[3], t[4]) : (t = pW.exec(e)) ? Ta(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hW.exec(e)) ? Ky(t[1], t[2] / 100, t[3] / 100, 1) : (t = mW.exec(e)) ? Ky(t[1], t[2] / 100, t[3] / 100, t[4]) : $y.hasOwnProperty(e) ? zy($y[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function zy(e) {
  return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ta(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new bt(e, t, r, n);
}
function yW(e) {
  return e instanceof Vi || (e = vi(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
}
function wf(e, t, r, n) {
  return arguments.length === 1 ? yW(e) : new bt(e, t, r, n ?? 1);
}
function bt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
nh(bt, wf, K1(Vi, {
  brighter(e) {
    return e = e == null ? xs : Math.pow(xs, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? hi : Math.pow(hi, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(On(this.r), On(this.g), On(this.b), Es(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Uy,
  // Deprecated! Use color.formatHex.
  formatHex: Uy,
  formatHex8: bW,
  formatRgb: Wy,
  toString: Wy
}));
function Uy() {
  return `#${yn(this.r)}${yn(this.g)}${yn(this.b)}`;
}
function bW() {
  return `#${yn(this.r)}${yn(this.g)}${yn(this.b)}${yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wy() {
  const e = Es(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${On(this.r)}, ${On(this.g)}, ${On(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Es(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function On(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function yn(e) {
  return e = On(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ky(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Jt(e, t, r, n);
}
function V1(e) {
  if (e instanceof Jt) return new Jt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vi || (e = vi(e)), !e) return new Jt();
  if (e instanceof Jt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, o = Math.min(t, r, n), i = Math.max(t, r, n), a = NaN, s = i - o, c = (i + o) / 2;
  return s ? (t === i ? a = (r - n) / s + (r < n) * 6 : r === i ? a = (n - t) / s + 2 : a = (t - r) / s + 4, s /= c < 0.5 ? i + o : 2 - i - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new Jt(a, s, c, e.opacity);
}
function wW(e, t, r, n) {
  return arguments.length === 1 ? V1(e) : new Jt(e, t, r, n ?? 1);
}
function Jt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
nh(Jt, wW, K1(Vi, {
  brighter(e) {
    return e = e == null ? xs : Math.pow(xs, e), new Jt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? hi : Math.pow(hi, e), new Jt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - n;
    return new bt(
      Yu(e >= 240 ? e - 240 : e + 120, o, n),
      Yu(e, o, n),
      Yu(e < 120 ? e + 240 : e - 120, o, n),
      this.opacity
    );
  },
  clamp() {
    return new Jt(Vy(this.h), _a(this.s), _a(this.l), Es(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Es(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Vy(this.h)}, ${_a(this.s) * 100}%, ${_a(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Vy(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _a(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Yu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const oh = (e) => () => e;
function xW(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function EW(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function SW(e) {
  return (e = +e) == 1 ? q1 : function(t, r) {
    return r - t ? EW(t, r, e) : oh(isNaN(t) ? r : t);
  };
}
function q1(e, t) {
  var r = t - e;
  return r ? xW(e, r) : oh(isNaN(e) ? t : e);
}
const qy = (function e(t) {
  var r = SW(t);
  function n(o, i) {
    var a = r((o = wf(o)).r, (i = wf(i)).r), s = r(o.g, i.g), c = r(o.b, i.b), u = q1(o.opacity, i.opacity);
    return function(l) {
      return o.r = a(l), o.g = s(l), o.b = c(l), o.opacity = u(l), o + "";
    };
  }
  return n.gamma = e, n;
})(1);
function PW(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), o;
  return function(i) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - i) + t[o] * i;
    return n;
  };
}
function OW(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AW(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, o = new Array(n), i = new Array(r), a;
  for (a = 0; a < n; ++a) o[a] = _o(e[a], t[a]);
  for (; a < r; ++a) i[a] = t[a];
  return function(s) {
    for (a = 0; a < n; ++a) i[a] = o[a](s);
    return i;
  };
}
function CW(e, t) {
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
function TW(e, t) {
  var r = {}, n = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = _o(e[o], t[o]) : n[o] = t[o];
  return function(i) {
    for (o in r) n[o] = r[o](i);
    return n;
  };
}
var xf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xu = new RegExp(xf.source, "g");
function _W(e) {
  return function() {
    return e;
  };
}
function kW(e) {
  return function(t) {
    return e(t) + "";
  };
}
function NW(e, t) {
  var r = xf.lastIndex = Xu.lastIndex = 0, n, o, i, a = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = xf.exec(e)) && (o = Xu.exec(t)); )
    (i = o.index) > r && (i = t.slice(r, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, c.push({ i: a, x: Ss(n, o) })), r = Xu.lastIndex;
  return r < t.length && (i = t.slice(r), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? c[0] ? kW(c[0].x) : _W(t) : (t = c.length, function(u) {
    for (var l = 0, d; l < t; ++l) s[(d = c[l]).i] = d.x(u);
    return s.join("");
  });
}
function _o(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? oh(t) : (r === "number" ? Ss : r === "string" ? (n = vi(t)) ? (t = n, qy) : NW : t instanceof vi ? qy : t instanceof Date ? CW : OW(t) ? PW : Array.isArray(t) ? AW : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? TW : Ss)(e, t);
}
function ih(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function IW(e, t) {
  t === void 0 && (t = e, e = _o);
  for (var r = 0, n = t.length - 1, o = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(o, o = t[++r]);
  return function(a) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return i[s](a - s);
  };
}
function RW(e) {
  return function() {
    return e;
  };
}
function Ps(e) {
  return +e;
}
var Hy = [0, 1];
function ft(e) {
  return e;
}
function Ef(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : RW(isNaN(t) ? NaN : 0.5);
}
function MW(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function DW(e, t, r) {
  var n = e[0], o = e[1], i = t[0], a = t[1];
  return o < n ? (n = Ef(o, n), i = r(a, i)) : (n = Ef(n, o), i = r(i, a)), function(s) {
    return i(n(s));
  };
}
function jW(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, o = new Array(n), i = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    o[a] = Ef(e[a], e[a + 1]), i[a] = r(t[a], t[a + 1]);
  return function(s) {
    var c = Ki(e, s, 1, n) - 1;
    return i[c](o[c](s));
  };
}
function qi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Kc() {
  var e = Hy, t = Hy, r = _o, n, o, i, a = ft, s, c, u;
  function l() {
    var p = Math.min(e.length, t.length);
    return a !== ft && (a = MW(e[0], e[p - 1])), s = p > 2 ? jW : DW, c = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? i : (c || (c = s(e.map(n), t, r)))(n(a(p)));
  }
  return d.invert = function(p) {
    return a(o((u || (u = s(t, e.map(n), Ss)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ps), l()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), l()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), r = ih, l();
  }, d.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : ft, l()) : a !== ft;
  }, d.interpolate = function(p) {
    return arguments.length ? (r = p, l()) : r;
  }, d.unknown = function(p) {
    return arguments.length ? (i = p, d) : i;
  }, function(p, f) {
    return n = p, o = f, l();
  };
}
function ah() {
  return Kc()(ft, ft);
}
function LW(e) {
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
function fo(e) {
  return e = Os(Math.abs(e)), e ? e[1] : NaN;
}
function $W(e, t) {
  return function(r, n) {
    for (var o = r.length, i = [], a = 0, s = e[0], c = 0; o > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), i.push(r.substring(o -= s, o + s)), !((c += s + 1) > n)); )
      s = e[a = (a + 1) % e.length];
    return i.reverse().join(t);
  };
}
function BW(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var FW = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gi(e) {
  if (!(t = FW.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new sh({
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
gi.prototype = sh.prototype;
function sh(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
sh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zW(e) {
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
var H1;
function UW(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1], i = o - (H1 = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = n.length;
  return i === a ? n : i > a ? n + new Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Os(e, Math.max(0, t + i - 1))[0];
}
function Gy(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}
const Yy = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: LW,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Gy(e * 100, t),
  r: Gy,
  s: UW,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Xy(e) {
  return e;
}
var Zy = Array.prototype.map, Jy = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function WW(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Xy : $W(Zy.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Xy : BW(Zy.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d) {
    d = gi(d);
    var p = d.fill, f = d.align, v = d.sign, h = d.symbol, g = d.zero, y = d.width, w = d.comma, x = d.precision, S = d.trim, E = d.type;
    E === "n" ? (w = !0, E = "g") : Yy[E] || (x === void 0 && (x = 12), S = !0, E = "g"), (g || p === "0" && f === "=") && (g = !0, p = "0", f = "=");
    var P = h === "$" ? r : h === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", O = h === "$" ? n : /[%p]/.test(E) ? a : "", A = Yy[E], _ = /[defgprs%]/.test(E);
    x = x === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function N(T) {
      var I = P, j = O, C, D, $;
      if (E === "c")
        j = A(T) + j, T = "";
      else {
        T = +T;
        var z = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : A(Math.abs(T), x), S && (T = zW(T)), z && +T == 0 && v !== "+" && (z = !1), I = (z ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + I, j = (E === "s" ? Jy[8 + H1 / 3] : "") + j + (z && v === "(" ? ")" : ""), _) {
          for (C = -1, D = T.length; ++C < D; )
            if ($ = T.charCodeAt(C), 48 > $ || $ > 57) {
              j = ($ === 46 ? o + T.slice(C + 1) : T.slice(C)) + j, T = T.slice(0, C);
              break;
            }
        }
      }
      w && !g && (T = t(T, 1 / 0));
      var M = I.length + T.length + j.length, F = M < y ? new Array(y - M + 1).join(p) : "";
      switch (w && g && (T = t(F + T, F.length ? y - j.length : 1 / 0), F = ""), f) {
        case "<":
          T = I + T + j + F;
          break;
        case "=":
          T = I + F + T + j;
          break;
        case "^":
          T = F.slice(0, M = F.length >> 1) + I + T + j + F.slice(M);
          break;
        default:
          T = F + I + T + j;
          break;
      }
      return i(T);
    }
    return N.toString = function() {
      return d + "";
    }, N;
  }
  function l(d, p) {
    var f = u((d = gi(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(fo(p) / 3))) * 3, h = Math.pow(10, -v), g = Jy[8 + v / 3];
    return function(y) {
      return f(h * y) + g;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var ka, ch, G1;
KW({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function KW(e) {
  return ka = WW(e), ch = ka.format, G1 = ka.formatPrefix, ka;
}
function VW(e) {
  return Math.max(0, -fo(Math.abs(e)));
}
function qW(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(fo(t) / 3))) * 3 - fo(Math.abs(e)));
}
function HW(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, fo(t) - fo(e)) + 1;
}
function Y1(e, t, r, n) {
  var o = yf(e, t, r), i;
  switch (n = gi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = qW(o, a)) && (n.precision = i), G1(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = HW(o, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = VW(o)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return ch(n);
}
function ln(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return vf(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var o = t();
    return Y1(o[0], o[o.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), o = 0, i = n.length - 1, a = n[o], s = n[i], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = o, o = i, i = u); l-- > 0; ) {
      if (u = gf(a, s, r), u === c)
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
function X1() {
  var e = ah();
  return e.copy = function() {
    return qi(e, X1());
  }, Yt.apply(e, arguments), ln(e);
}
function Z1(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ps), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Z1(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ps) : [0, 1], ln(r);
}
function J1(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, o = e[r], i = e[n], a;
  return i < o && (a = r, r = n, n = a, a = o, o = i, i = a), e[r] = t.floor(o), e[n] = t.ceil(i), e;
}
function Qy(e) {
  return Math.log(e);
}
function eb(e) {
  return Math.exp(e);
}
function GW(e) {
  return -Math.log(-e);
}
function YW(e) {
  return -Math.exp(-e);
}
function XW(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ZW(e) {
  return e === 10 ? XW : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function JW(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function tb(e) {
  return (t, r) => -e(-t, r);
}
function lh(e) {
  const t = e(Qy, eb), r = t.domain;
  let n = 10, o, i;
  function a() {
    return o = JW(n), i = ZW(n), r()[0] < 0 ? (o = tb(o), i = tb(i), e(GW, YW)) : e(Qy, eb), t;
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
    let p = o(u), f = o(l), v, h;
    const g = s == null ? 10 : +s;
    let y = [];
    if (!(n % 1) && f - p < g) {
      if (p = Math.floor(p), f = Math.ceil(f), u > 0) {
        for (; p <= f; ++p)
          for (v = 1; v < n; ++v)
            if (h = p < 0 ? v / i(-p) : v * i(p), !(h < u)) {
              if (h > l) break;
              y.push(h);
            }
      } else for (; p <= f; ++p)
        for (v = n - 1; v >= 1; --v)
          if (h = p > 0 ? v / i(-p) : v * i(p), !(h < u)) {
            if (h > l) break;
            y.push(h);
          }
      y.length * 2 < g && (y = vf(u, l, g));
    } else
      y = vf(p, f, Math.min(f - p, g)).map(i);
    return d ? y.reverse() : y;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = gi(c)).precision == null && (c.trim = !0), c = ch(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let d = l / i(Math.round(o(l)));
      return d * n < n - 0.5 && (d *= n), d <= u ? c(l) : "";
    };
  }, t.nice = () => r(J1(r(), {
    floor: (s) => i(Math.floor(o(s))),
    ceil: (s) => i(Math.ceil(o(s)))
  })), t;
}
function Q1() {
  const e = lh(Kc()).domain([1, 10]);
  return e.copy = () => qi(e, Q1()).base(e.base()), Yt.apply(e, arguments), e;
}
function rb(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function nb(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function uh(e) {
  var t = 1, r = e(rb(t), nb(t));
  return r.constant = function(n) {
    return arguments.length ? e(rb(t = +n), nb(t)) : t;
  }, ln(r);
}
function eA() {
  var e = uh(Kc());
  return e.copy = function() {
    return qi(e, eA()).constant(e.constant());
  }, Yt.apply(e, arguments);
}
function ob(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function QW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function e3(e) {
  return e < 0 ? -e * e : e * e;
}
function dh(e) {
  var t = e(ft, ft), r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(QW, e3) : e(ob(r), ob(1 / r));
  }
  return t.exponent = function(o) {
    return arguments.length ? (r = +o, n()) : r;
  }, ln(t);
}
function fh() {
  var e = dh(Kc());
  return e.copy = function() {
    return qi(e, fh()).exponent(e.exponent());
  }, Yt.apply(e, arguments), e;
}
function t3() {
  return fh.apply(null, arguments).exponent(0.5);
}
function ib(e) {
  return Math.sign(e) * e * e;
}
function r3(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function tA() {
  var e = ah(), t = [0, 1], r = !1, n;
  function o(i) {
    var a = r3(e(i));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return o.invert = function(i) {
    return e.invert(ib(i));
  }, o.domain = function(i) {
    return arguments.length ? (e.domain(i), o) : e.domain();
  }, o.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Ps)).map(ib)), o) : t.slice();
  }, o.rangeRound = function(i) {
    return o.range(i).round(!0);
  }, o.round = function(i) {
    return arguments.length ? (r = !!i, o) : r;
  }, o.clamp = function(i) {
    return arguments.length ? (e.clamp(i), o) : e.clamp();
  }, o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  }, o.copy = function() {
    return tA(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Yt.apply(o, arguments), ln(o);
}
function rA() {
  var e = [], t = [], r = [], n;
  function o() {
    var a = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++a < s; ) r[a - 1] = aW(e, a / s);
    return i;
  }
  function i(a) {
    return a == null || isNaN(a = +a) ? n : t[Ki(r, a)];
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
    return e.sort(Zr), o();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), o()) : t.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return rA().domain(e).range(t).unknown(n);
  }, Yt.apply(i, arguments);
}
function nA() {
  var e = 0, t = 1, r = 1, n = [0.5], o = [0, 1], i;
  function a(c) {
    return c != null && c <= c ? o[Ki(n, c, 0, r)] : i;
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
    return nA().domain([e, t]).range(o).unknown(i);
  }, Yt.apply(ln(a), arguments);
}
function oA() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function o(i) {
    return i != null && i <= i ? t[Ki(e, i, 0, n)] : r;
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
    return oA().domain(e).range(t).unknown(r);
  }, Yt.apply(o, arguments);
}
const Zu = /* @__PURE__ */ new Date(), Ju = /* @__PURE__ */ new Date();
function Ye(e, t, r, n) {
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
  }, o.filter = (i) => Ye((a) => {
    if (a >= a) for (; e(a), !i(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; t(a, -1), !i(a); )
          ;
      else for (; --s >= 0; )
        for (; t(a, 1), !i(a); )
          ;
  }), r && (o.count = (i, a) => (Zu.setTime(+i), Ju.setTime(+a), e(Zu), e(Ju), Math.floor(r(Zu, Ju))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(n ? (a) => n(a) % i === 0 : (a) => o.count(0, a) % i === 0) : o)), o;
}
const As = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
As.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : As);
As.range;
const Sr = 1e3, Wt = Sr * 60, Pr = Wt * 60, Rr = Pr * 24, ph = Rr * 7, ab = Rr * 30, Qu = Rr * 365, bn = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCSeconds());
bn.range;
const hh = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Sr);
}, (e, t) => {
  e.setTime(+e + t * Wt);
}, (e, t) => (t - e) / Wt, (e) => e.getMinutes());
hh.range;
const mh = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Wt);
}, (e, t) => (t - e) / Wt, (e) => e.getUTCMinutes());
mh.range;
const vh = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Sr - e.getMinutes() * Wt);
}, (e, t) => {
  e.setTime(+e + t * Pr);
}, (e, t) => (t - e) / Pr, (e) => e.getHours());
vh.range;
const gh = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pr);
}, (e, t) => (t - e) / Pr, (e) => e.getUTCHours());
gh.range;
const Hi = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Wt) / Rr,
  (e) => e.getDate() - 1
);
Hi.range;
const Vc = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Rr, (e) => e.getUTCDate() - 1);
Vc.range;
const iA = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Rr, (e) => Math.floor(e / Rr));
iA.range;
function Vn(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Wt) / ph);
}
const qc = Vn(0), Cs = Vn(1), n3 = Vn(2), o3 = Vn(3), po = Vn(4), i3 = Vn(5), a3 = Vn(6);
qc.range;
Cs.range;
n3.range;
o3.range;
po.range;
i3.range;
a3.range;
function qn(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ph);
}
const Hc = qn(0), Ts = qn(1), s3 = qn(2), c3 = qn(3), ho = qn(4), l3 = qn(5), u3 = qn(6);
Hc.range;
Ts.range;
s3.range;
c3.range;
ho.range;
l3.range;
u3.range;
const yh = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
yh.range;
const bh = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
bh.range;
const Mr = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Mr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Mr.range;
const Dr = Ye((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Dr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Dr.range;
function aA(e, t, r, n, o, i) {
  const a = [
    [bn, 1, Sr],
    [bn, 5, 5 * Sr],
    [bn, 15, 15 * Sr],
    [bn, 30, 30 * Sr],
    [i, 1, Wt],
    [i, 5, 5 * Wt],
    [i, 15, 15 * Wt],
    [i, 30, 30 * Wt],
    [o, 1, Pr],
    [o, 3, 3 * Pr],
    [o, 6, 6 * Pr],
    [o, 12, 12 * Pr],
    [n, 1, Rr],
    [n, 2, 2 * Rr],
    [r, 1, ph],
    [t, 1, ab],
    [t, 3, 3 * ab],
    [e, 1, Qu]
  ];
  function s(u, l, d) {
    const p = l < u;
    p && ([u, l] = [l, u]);
    const f = d && typeof d.range == "function" ? d : c(u, l, d), v = f ? f.range(u, +l + 1) : [];
    return p ? v.reverse() : v;
  }
  function c(u, l, d) {
    const p = Math.abs(l - u) / d, f = eh(([, , g]) => g).right(a, p);
    if (f === a.length) return e.every(yf(u / Qu, l / Qu, d));
    if (f === 0) return As.every(Math.max(yf(u, l, d), 1));
    const [v, h] = a[p / a[f - 1][2] < a[f][2] / p ? f - 1 : f];
    return v.every(h);
  }
  return [s, c];
}
const [d3, f3] = aA(Dr, bh, Hc, iA, gh, mh), [p3, h3] = aA(Mr, yh, qc, Hi, vh, hh);
function ed(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function td(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Vo(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function m3(e) {
  var t = e.dateTime, r = e.date, n = e.time, o = e.periods, i = e.days, a = e.shortDays, s = e.months, c = e.shortMonths, u = qo(o), l = Ho(o), d = qo(i), p = Ho(i), f = qo(a), v = Ho(a), h = qo(s), g = Ho(s), y = qo(c), w = Ho(c), x = {
    a: z,
    A: M,
    b: F,
    B: oe,
    c: null,
    d: fb,
    e: fb,
    f: $3,
    g: G3,
    G: X3,
    H: D3,
    I: j3,
    j: L3,
    L: sA,
    m: B3,
    M: F3,
    p: H,
    q: ae,
    Q: mb,
    s: vb,
    S: z3,
    u: U3,
    U: W3,
    V: K3,
    w: V3,
    W: q3,
    x: null,
    X: null,
    y: H3,
    Y: Y3,
    Z: Z3,
    "%": hb
  }, S = {
    a: ie,
    A: W,
    b: te,
    B: se,
    c: null,
    d: pb,
    e: pb,
    f: tK,
    g: dK,
    G: pK,
    H: J3,
    I: Q3,
    j: eK,
    L: lA,
    m: rK,
    M: nK,
    p: K,
    q: re,
    Q: mb,
    s: vb,
    S: oK,
    u: iK,
    U: aK,
    V: sK,
    w: cK,
    W: lK,
    x: null,
    X: null,
    y: uK,
    Y: fK,
    Z: hK,
    "%": hb
  }, E = {
    a: N,
    A: T,
    b: I,
    B: j,
    c: C,
    d: ub,
    e: ub,
    f: N3,
    g: lb,
    G: cb,
    H: db,
    I: db,
    j: C3,
    L: k3,
    m: A3,
    M: T3,
    p: _,
    q: O3,
    Q: R3,
    s: M3,
    S: _3,
    u: w3,
    U: x3,
    V: E3,
    w: b3,
    W: S3,
    x: D,
    X: $,
    y: lb,
    Y: cb,
    Z: P3,
    "%": I3
  };
  x.x = P(r, x), x.X = P(n, x), x.c = P(t, x), S.x = P(r, S), S.X = P(n, S), S.c = P(t, S);
  function P(L, G) {
    return function(Y) {
      var B = [], me = -1, le = 0, Te = L.length, Ke, St, km;
      for (Y instanceof Date || (Y = /* @__PURE__ */ new Date(+Y)); ++me < Te; )
        L.charCodeAt(me) === 37 && (B.push(L.slice(le, me)), (St = sb[Ke = L.charAt(++me)]) != null ? Ke = L.charAt(++me) : St = Ke === "e" ? " " : "0", (km = G[Ke]) && (Ke = km(Y, St)), B.push(Ke), le = me + 1);
      return B.push(L.slice(le, me)), B.join("");
    };
  }
  function O(L, G) {
    return function(Y) {
      var B = Vo(1900, void 0, 1), me = A(B, L, Y += "", 0), le, Te;
      if (me != Y.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (G && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1), "Z" in B ? (le = td(Vo(B.y, 0, 1)), Te = le.getUTCDay(), le = Te > 4 || Te === 0 ? Ts.ceil(le) : Ts(le), le = Vc.offset(le, (B.V - 1) * 7), B.y = le.getUTCFullYear(), B.m = le.getUTCMonth(), B.d = le.getUTCDate() + (B.w + 6) % 7) : (le = ed(Vo(B.y, 0, 1)), Te = le.getDay(), le = Te > 4 || Te === 0 ? Cs.ceil(le) : Cs(le), le = Hi.offset(le, (B.V - 1) * 7), B.y = le.getFullYear(), B.m = le.getMonth(), B.d = le.getDate() + (B.w + 6) % 7);
      } else ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), Te = "Z" in B ? td(Vo(B.y, 0, 1)).getUTCDay() : ed(Vo(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (Te + 5) % 7 : B.w + B.U * 7 - (Te + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, td(B)) : ed(B);
    };
  }
  function A(L, G, Y, B) {
    for (var me = 0, le = G.length, Te = Y.length, Ke, St; me < le; ) {
      if (B >= Te) return -1;
      if (Ke = G.charCodeAt(me++), Ke === 37) {
        if (Ke = G.charAt(me++), St = E[Ke in sb ? G.charAt(me++) : Ke], !St || (B = St(L, Y, B)) < 0) return -1;
      } else if (Ke != Y.charCodeAt(B++))
        return -1;
    }
    return B;
  }
  function _(L, G, Y) {
    var B = u.exec(G.slice(Y));
    return B ? (L.p = l.get(B[0].toLowerCase()), Y + B[0].length) : -1;
  }
  function N(L, G, Y) {
    var B = f.exec(G.slice(Y));
    return B ? (L.w = v.get(B[0].toLowerCase()), Y + B[0].length) : -1;
  }
  function T(L, G, Y) {
    var B = d.exec(G.slice(Y));
    return B ? (L.w = p.get(B[0].toLowerCase()), Y + B[0].length) : -1;
  }
  function I(L, G, Y) {
    var B = y.exec(G.slice(Y));
    return B ? (L.m = w.get(B[0].toLowerCase()), Y + B[0].length) : -1;
  }
  function j(L, G, Y) {
    var B = h.exec(G.slice(Y));
    return B ? (L.m = g.get(B[0].toLowerCase()), Y + B[0].length) : -1;
  }
  function C(L, G, Y) {
    return A(L, t, G, Y);
  }
  function D(L, G, Y) {
    return A(L, r, G, Y);
  }
  function $(L, G, Y) {
    return A(L, n, G, Y);
  }
  function z(L) {
    return a[L.getDay()];
  }
  function M(L) {
    return i[L.getDay()];
  }
  function F(L) {
    return c[L.getMonth()];
  }
  function oe(L) {
    return s[L.getMonth()];
  }
  function H(L) {
    return o[+(L.getHours() >= 12)];
  }
  function ae(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function ie(L) {
    return a[L.getUTCDay()];
  }
  function W(L) {
    return i[L.getUTCDay()];
  }
  function te(L) {
    return c[L.getUTCMonth()];
  }
  function se(L) {
    return s[L.getUTCMonth()];
  }
  function K(L) {
    return o[+(L.getUTCHours() >= 12)];
  }
  function re(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var G = P(L += "", x);
      return G.toString = function() {
        return L;
      }, G;
    },
    parse: function(L) {
      var G = O(L += "", !1);
      return G.toString = function() {
        return L;
      }, G;
    },
    utcFormat: function(L) {
      var G = P(L += "", S);
      return G.toString = function() {
        return L;
      }, G;
    },
    utcParse: function(L) {
      var G = O(L += "", !0);
      return G.toString = function() {
        return L;
      }, G;
    }
  };
}
var sb = { "-": "", _: " ", 0: "0" }, et = /^\s*\d+/, v3 = /^%/, g3 = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", o = (n ? -e : e) + "", i = o.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + o : o);
}
function y3(e) {
  return e.replace(g3, "\\$&");
}
function qo(e) {
  return new RegExp("^(?:" + e.map(y3).join("|") + ")", "i");
}
function Ho(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function b3(e, t, r) {
  var n = et.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function w3(e, t, r) {
  var n = et.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function x3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function E3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function S3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function cb(e, t, r) {
  var n = et.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function lb(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function P3(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function O3(e, t, r) {
  var n = et.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function A3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function ub(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function C3(e, t, r) {
  var n = et.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function db(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function T3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function _3(e, t, r) {
  var n = et.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function k3(e, t, r) {
  var n = et.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function N3(e, t, r) {
  var n = et.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function I3(e, t, r) {
  var n = v3.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function R3(e, t, r) {
  var n = et.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function M3(e, t, r) {
  var n = et.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function fb(e, t) {
  return ve(e.getDate(), t, 2);
}
function D3(e, t) {
  return ve(e.getHours(), t, 2);
}
function j3(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function L3(e, t) {
  return ve(1 + Hi.count(Mr(e), e), t, 3);
}
function sA(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function $3(e, t) {
  return sA(e, t) + "000";
}
function B3(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function F3(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function z3(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function U3(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function W3(e, t) {
  return ve(qc.count(Mr(e) - 1, e), t, 2);
}
function cA(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? po(e) : po.ceil(e);
}
function K3(e, t) {
  return e = cA(e), ve(po.count(Mr(e), e) + (Mr(e).getDay() === 4), t, 2);
}
function V3(e) {
  return e.getDay();
}
function q3(e, t) {
  return ve(Cs.count(Mr(e) - 1, e), t, 2);
}
function H3(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function G3(e, t) {
  return e = cA(e), ve(e.getFullYear() % 100, t, 2);
}
function Y3(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function X3(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? po(e) : po.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function Z3(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function pb(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function J3(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function Q3(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function eK(e, t) {
  return ve(1 + Vc.count(Dr(e), e), t, 3);
}
function lA(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function tK(e, t) {
  return lA(e, t) + "000";
}
function rK(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function nK(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function oK(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function iK(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function aK(e, t) {
  return ve(Hc.count(Dr(e) - 1, e), t, 2);
}
function uA(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ho(e) : ho.ceil(e);
}
function sK(e, t) {
  return e = uA(e), ve(ho.count(Dr(e), e) + (Dr(e).getUTCDay() === 4), t, 2);
}
function cK(e) {
  return e.getUTCDay();
}
function lK(e, t) {
  return ve(Ts.count(Dr(e) - 1, e), t, 2);
}
function uK(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function dK(e, t) {
  return e = uA(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function fK(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function pK(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ho(e) : ho.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function hK() {
  return "+0000";
}
function hb() {
  return "%";
}
function mb(e) {
  return +e;
}
function vb(e) {
  return Math.floor(+e / 1e3);
}
var Zn, dA, fA;
mK({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mK(e) {
  return Zn = m3(e), dA = Zn.format, Zn.parse, fA = Zn.utcFormat, Zn.utcParse, Zn;
}
function vK(e) {
  return new Date(e);
}
function gK(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function wh(e, t, r, n, o, i, a, s, c, u) {
  var l = ah(), d = l.invert, p = l.domain, f = u(".%L"), v = u(":%S"), h = u("%I:%M"), g = u("%I %p"), y = u("%a %d"), w = u("%b %d"), x = u("%B"), S = u("%Y");
  function E(P) {
    return (c(P) < P ? f : s(P) < P ? v : a(P) < P ? h : i(P) < P ? g : n(P) < P ? o(P) < P ? y : w : r(P) < P ? x : S)(P);
  }
  return l.invert = function(P) {
    return new Date(d(P));
  }, l.domain = function(P) {
    return arguments.length ? p(Array.from(P, gK)) : p().map(vK);
  }, l.ticks = function(P) {
    var O = p();
    return e(O[0], O[O.length - 1], P ?? 10);
  }, l.tickFormat = function(P, O) {
    return O == null ? E : u(O);
  }, l.nice = function(P) {
    var O = p();
    return (!P || typeof P.range != "function") && (P = t(O[0], O[O.length - 1], P ?? 10)), P ? p(J1(O, P)) : l;
  }, l.copy = function() {
    return qi(l, wh(e, t, r, n, o, i, a, s, c, u));
  }, l;
}
function yK() {
  return Yt.apply(wh(p3, h3, Mr, yh, qc, Hi, vh, hh, bn, dA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function bK() {
  return Yt.apply(wh(d3, f3, Dr, bh, Hc, Vc, gh, mh, bn, fA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Gc() {
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
      var f, v;
      return arguments.length ? ([f, v] = p, a = d(f, v), u) : [a(0), a(1)];
    };
  }
  return u.range = l(_o), u.rangeRound = l(ih), u.unknown = function(d) {
    return arguments.length ? (c = d, u) : c;
  }, function(d) {
    return i = d, r = d(e), n = d(t), o = r === n ? 0 : 1 / (n - r), u;
  };
}
function un(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function pA() {
  var e = ln(Gc()(ft));
  return e.copy = function() {
    return un(e, pA());
  }, Br.apply(e, arguments);
}
function hA() {
  var e = lh(Gc()).domain([1, 10]);
  return e.copy = function() {
    return un(e, hA()).base(e.base());
  }, Br.apply(e, arguments);
}
function mA() {
  var e = uh(Gc());
  return e.copy = function() {
    return un(e, mA()).constant(e.constant());
  }, Br.apply(e, arguments);
}
function xh() {
  var e = dh(Gc());
  return e.copy = function() {
    return un(e, xh()).exponent(e.exponent());
  }, Br.apply(e, arguments);
}
function wK() {
  return xh.apply(null, arguments).exponent(0.5);
}
function vA() {
  var e = [], t = ft;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Ki(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let o of n) o != null && !isNaN(o = +o) && e.push(o);
    return e.sort(Zr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, o) => t(o / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (o, i) => iW(e, i / n));
  }, r.copy = function() {
    return vA(t).domain(e);
  }, Br.apply(r, arguments);
}
function Yc() {
  var e = 0, t = 0.5, r = 1, n = 1, o, i, a, s, c, u = ft, l, d = !1, p;
  function f(h) {
    return isNaN(h = +h) ? p : (h = 0.5 + ((h = +l(h)) - i) * (n * h < n * i ? s : c), u(d ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, o = l(e = +e), i = l(t = +t), a = l(r = +r), s = o === i ? 0 : 0.5 / (i - o), c = i === a ? 0 : 0.5 / (a - i), n = i < o ? -1 : 1, f) : [e, t, r];
  }, f.clamp = function(h) {
    return arguments.length ? (d = !!h, f) : d;
  }, f.interpolator = function(h) {
    return arguments.length ? (u = h, f) : u;
  };
  function v(h) {
    return function(g) {
      var y, w, x;
      return arguments.length ? ([y, w, x] = g, u = IW(h, [y, w, x]), f) : [u(0), u(0.5), u(1)];
    };
  }
  return f.range = v(_o), f.rangeRound = v(ih), f.unknown = function(h) {
    return arguments.length ? (p = h, f) : p;
  }, function(h) {
    return l = h, o = h(e), i = h(t), a = h(r), s = o === i ? 0 : 0.5 / (i - o), c = i === a ? 0 : 0.5 / (a - i), n = i < o ? -1 : 1, f;
  };
}
function gA() {
  var e = ln(Yc()(ft));
  return e.copy = function() {
    return un(e, gA());
  }, Br.apply(e, arguments);
}
function yA() {
  var e = lh(Yc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return un(e, yA()).base(e.base());
  }, Br.apply(e, arguments);
}
function bA() {
  var e = uh(Yc());
  return e.copy = function() {
    return un(e, bA()).constant(e.constant());
  }, Br.apply(e, arguments);
}
function Eh() {
  var e = dh(Yc());
  return e.copy = function() {
    return un(e, Eh()).exponent(e.exponent());
  }, Br.apply(e, arguments);
}
function xK() {
  return Eh.apply(null, arguments).exponent(0.5);
}
const Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: rh,
  scaleDiverging: gA,
  scaleDivergingLog: yA,
  scaleDivergingPow: Eh,
  scaleDivergingSqrt: xK,
  scaleDivergingSymlog: bA,
  scaleIdentity: Z1,
  scaleImplicit: bf,
  scaleLinear: X1,
  scaleLog: Q1,
  scaleOrdinal: th,
  scalePoint: cW,
  scalePow: fh,
  scaleQuantile: rA,
  scaleQuantize: nA,
  scaleRadial: tA,
  scaleSequential: pA,
  scaleSequentialLog: hA,
  scaleSequentialPow: xh,
  scaleSequentialQuantile: vA,
  scaleSequentialSqrt: wK,
  scaleSequentialSymlog: mA,
  scaleSqrt: t3,
  scaleSymlog: eA,
  scaleThreshold: oA,
  scaleTime: yK,
  scaleUtc: bK,
  tickFormat: Y1
}, Symbol.toStringTag, { value: "Module" }));
var dn = (e) => e.chartData, Sh = k([dn], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Gi = (e, t, r, n) => n ? Sh(e) : dn(e);
function $n(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (We(t) && We(r))
      return !0;
  }
  return !1;
}
function gb(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function wA(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, o, i;
    if (We(r))
      o = r;
    else if (typeof r == "function")
      return;
    if (We(n))
      i = n;
    else if (typeof n == "function")
      return;
    var a = [o, i];
    if ($n(a))
      return a;
  }
}
function EK(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if ($n(n))
          return gb(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [o, i] = e, a, s;
      if (o === "auto")
        t != null && (a = Math.min(...t));
      else if (Q(o))
        a = o;
      else if (typeof o == "function")
        try {
          t != null && (a = o(t?.[0]));
        } catch {
        }
      else if (typeof o == "string" && ey.test(o)) {
        var c = ey.exec(o);
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
      else if (Q(i))
        s = i;
      else if (typeof i == "function")
        try {
          t != null && (s = i(t?.[1]));
        } catch {
        }
      else if (typeof i == "string" && ty.test(i)) {
        var l = ty.exec(i);
        if (l == null || t == null)
          s = void 0;
        else {
          var d = +l[1];
          s = t[1] + d;
        }
      } else
        s = t?.[1];
      var p = [a, s];
      if ($n(p))
        return t == null ? p : gb(p, t, r);
    }
  }
}
var ko = 1e9, SK = {
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
}, Oh, ke = !0, Gt = "[DecimalError] ", An = Gt + "Invalid argument: ", Ph = Gt + "Exponent out of range: ", No = Math.floor, vn = Math.pow, PK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kt, Je = 1e7, Ae = 7, xA = 9007199254740991, _s = No(xA / Ae), X = {};
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
X.comparedTo = X.cmp = function(e) {
  var t, r, n, o, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === o ? 0 : n > o ^ i.s < 0 ? 1 : -1;
};
X.decimalPlaces = X.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Ae;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
X.dividedBy = X.div = function(e) {
  return Cr(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.idiv = function(e) {
  var t = this, r = t.constructor;
  return Pe(Cr(t, new r(e), 0, 1), r.precision);
};
X.equals = X.eq = function(e) {
  return !this.cmp(e);
};
X.exponent = function() {
  return Ue(this);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  return this.cmp(e) >= 0;
};
X.isInteger = X.isint = function() {
  return this.e > this.d.length - 2;
};
X.isNegative = X.isneg = function() {
  return this.s < 0;
};
X.isPositive = X.ispos = function() {
  return this.s > 0;
};
X.isZero = function() {
  return this.s === 0;
};
X.lessThan = X.lt = function(e) {
  return this.cmp(e) < 0;
};
X.lessThanOrEqualTo = X.lte = function(e) {
  return this.cmp(e) < 1;
};
X.logarithm = X.log = function(e) {
  var t, r = this, n = r.constructor, o = n.precision, i = o + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(kt)) throw Error(Gt + "NaN");
  if (r.s < 1) throw Error(Gt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(kt) ? new n(0) : (ke = !1, t = Cr(yi(r, i), yi(e, i), i), ke = !0, Pe(t, o));
};
X.minus = X.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? PA(t, e) : EA(t, (e.s = -e.s, e));
};
X.modulo = X.mod = function(e) {
  var t, r = this, n = r.constructor, o = n.precision;
  if (e = new n(e), !e.s) throw Error(Gt + "NaN");
  return r.s ? (ke = !1, t = Cr(r, e, 0, 1).times(e), ke = !0, r.minus(t)) : Pe(new n(r), o);
};
X.naturalExponential = X.exp = function() {
  return SA(this);
};
X.naturalLogarithm = X.ln = function() {
  return yi(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
X.plus = X.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? EA(t, e) : PA(t, (e.s = -e.s, e));
};
X.precision = X.sd = function(e) {
  var t, r, n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(An + e);
  if (t = Ue(o) + 1, n = o.d.length - 1, r = n * Ae + 1, n = o.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = o.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
X.squareRoot = X.sqrt = function() {
  var e, t, r, n, o, i, a, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Gt + "NaN");
  }
  for (e = Ue(s), ke = !1, o = Math.sqrt(+s), o == 0 || o == 1 / 0 ? (t = lr(s.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = No((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(o.toString()), r = c.precision, o = a = r + 3; ; )
    if (i = n, n = i.plus(Cr(s, i, a + 2)).times(0.5), lr(i.d).slice(0, a) === (t = lr(n.d)).slice(0, a)) {
      if (t = t.slice(a - 3, a + 1), o == a && t == "4999") {
        if (Pe(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      a += 4;
    }
  return ke = !0, Pe(n, r);
};
X.times = X.mul = function(e) {
  var t, r, n, o, i, a, s, c, u, l = this, d = l.constructor, p = l.d, f = (e = new d(e)).d;
  if (!l.s || !e.s) return new d(0);
  for (e.s *= l.s, r = l.e + e.e, c = p.length, u = f.length, c < u && (i = p, p = f, f = i, a = c, c = u, u = a), i = [], a = c + u, n = a; n--; ) i.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, o = c + n; o > n; )
      s = i[o] + f[n] * p[o - n - 1] + t, i[o--] = s % Je | 0, t = s / Je | 0;
    i[o] = (i[o] + t) % Je | 0;
  }
  for (; !i[--a]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, ke ? Pe(e, d.precision) : e;
};
X.toDecimalPlaces = X.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (mr(e, 0, ko), t === void 0 ? t = n.rounding : mr(t, 0, 8), Pe(r, e + Ue(r) + 1, t));
};
X.toExponential = function(e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0 ? r = Bn(n, !0) : (mr(e, 0, ko), t === void 0 ? t = o.rounding : mr(t, 0, 8), n = Pe(new o(n), e + 1, t), r = Bn(n, !0, e + 1)), r;
};
X.toFixed = function(e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0 ? Bn(o) : (mr(e, 0, ko), t === void 0 ? t = i.rounding : mr(t, 0, 8), n = Pe(new i(o), e + Ue(o) + 1, t), r = Bn(n.abs(), !1, e + Ue(n) + 1), o.isneg() && !o.isZero() ? "-" + r : r);
};
X.toInteger = X.toint = function() {
  var e = this, t = e.constructor;
  return Pe(new t(e), Ue(e) + 1, t.rounding);
};
X.toNumber = function() {
  return +this;
};
X.toPower = X.pow = function(e) {
  var t, r, n, o, i, a, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(kt);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(Gt + "Infinity");
    return s;
  }
  if (s.eq(kt)) return s;
  if (n = c.precision, e.eq(kt)) return Pe(s, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, i = s.s, a) {
    if ((r = l < 0 ? -l : l) <= xA) {
      for (o = new c(kt), t = Math.ceil(n / Ae + 4), ke = !1; r % 2 && (o = o.times(s), bb(o.d, t)), r = No(r / 2), r !== 0; )
        s = s.times(s), bb(s.d, t);
      return ke = !0, e.s < 0 ? new c(kt).div(o) : Pe(o, n);
    }
  } else if (i < 0) throw Error(Gt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, ke = !1, o = e.times(yi(s, n + u)), ke = !0, o = SA(o), o.s = i, o;
};
X.toPrecision = function(e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0 ? (r = Ue(o), n = Bn(o, r <= i.toExpNeg || r >= i.toExpPos)) : (mr(e, 1, ko), t === void 0 ? t = i.rounding : mr(t, 0, 8), o = Pe(new i(o), e, t), r = Ue(o), n = Bn(o, e <= r || r <= i.toExpNeg, e)), n;
};
X.toSignificantDigits = X.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (mr(e, 1, ko), t === void 0 ? t = n.rounding : mr(t, 0, 8)), Pe(new n(r), e, t);
};
X.toString = X.valueOf = X.val = X.toJSON = X[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Ue(e), r = e.constructor;
  return Bn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function EA(e, t) {
  var r, n, o, i, a, s, c, u, l = e.constructor, d = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), ke ? Pe(t, d) : t;
  if (c = e.d, u = t.d, a = e.e, o = t.e, c = c.slice(), i = a - o, i) {
    for (i < 0 ? (n = c, i = -i, s = u.length) : (n = u, o = a, s = c.length), a = Math.ceil(d / Ae), s = a > s ? a + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, i = u.length, s - i < 0 && (i = s, n = u, u = c, c = n), r = 0; i; )
    r = (c[--i] = c[i] + u[i] + r) / Je | 0, c[i] %= Je;
  for (r && (c.unshift(r), ++o), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = o, ke ? Pe(t, d) : t;
}
function mr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(An + e);
}
function lr(e) {
  var t, r, n, o = e.length - 1, i = "", a = e[0];
  if (o > 0) {
    for (i += a, t = 1; t < o; t++)
      n = e[t] + "", r = Ae - n.length, r && (i += qr(r)), i += n;
    a = e[t], n = a + "", r = Ae - n.length, r && (i += qr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return i + a;
}
var Cr = /* @__PURE__ */ (function() {
  function e(n, o) {
    var i, a = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * o + a, n[s] = i % Je | 0, a = i / Je | 0;
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
      n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * Je + n[i] - o[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, o, i, a) {
    var s, c, u, l, d, p, f, v, h, g, y, w, x, S, E, P, O, A, _ = n.constructor, N = n.s == o.s ? 1 : -1, T = n.d, I = o.d;
    if (!n.s) return new _(n);
    if (!o.s) throw Error(Gt + "Division by zero");
    for (c = n.e - o.e, O = I.length, E = T.length, f = new _(N), v = f.d = [], u = 0; I[u] == (T[u] || 0); ) ++u;
    if (I[u] > (T[u] || 0) && --c, i == null ? w = i = _.precision : a ? w = i + (Ue(n) - Ue(o)) + 1 : w = i, w < 0) return new _(0);
    if (w = w / Ae + 2 | 0, u = 0, O == 1)
      for (l = 0, I = I[0], w++; (u < E || l) && w--; u++)
        x = l * Je + (T[u] || 0), v[u] = x / I | 0, l = x % I | 0;
    else {
      for (l = Je / (I[0] + 1) | 0, l > 1 && (I = e(I, l), T = e(T, l), O = I.length, E = T.length), S = O, h = T.slice(0, O), g = h.length; g < O; ) h[g++] = 0;
      A = I.slice(), A.unshift(0), P = I[0], I[1] >= Je / 2 && ++P;
      do
        l = 0, s = t(I, h, O, g), s < 0 ? (y = h[0], O != g && (y = y * Je + (h[1] || 0)), l = y / P | 0, l > 1 ? (l >= Je && (l = Je - 1), d = e(I, l), p = d.length, g = h.length, s = t(d, h, p, g), s == 1 && (l--, r(d, O < p ? A : I, p))) : (l == 0 && (s = l = 1), d = I.slice()), p = d.length, p < g && d.unshift(0), r(h, d, g), s == -1 && (g = h.length, s = t(I, h, O, g), s < 1 && (l++, r(h, O < g ? A : I, g))), g = h.length) : s === 0 && (l++, h = [0]), v[u++] = l, s && h[0] ? h[g++] = T[S] || 0 : (h = [T[S]], g = 1);
      while ((S++ < E || h[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), f.e = c, Pe(f, a ? i + Ue(f) + 1 : i);
  };
})();
function SA(e, t) {
  var r, n, o, i, a, s, c = 0, u = 0, l = e.constructor, d = l.precision;
  if (Ue(e) > 16) throw Error(Ph + Ue(e));
  if (!e.s) return new l(kt);
  for (ke = !1, s = d, a = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(a), u += 5;
  for (n = Math.log(vn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = o = i = new l(kt), l.precision = s; ; ) {
    if (o = Pe(o.times(e), s), r = r.times(++c), a = i.plus(Cr(o, r, s)), lr(a.d).slice(0, s) === lr(i.d).slice(0, s)) {
      for (; u--; ) i = Pe(i.times(i), s);
      return l.precision = d, t == null ? (ke = !0, Pe(i, d)) : i;
    }
    i = a;
  }
}
function Ue(e) {
  for (var t = e.e * Ae, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function rd(e, t, r) {
  if (t > e.LN10.sd())
    throw ke = !0, r && (e.precision = r), Error(Gt + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function qr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function yi(e, t) {
  var r, n, o, i, a, s, c, u, l, d = 1, p = 10, f = e, v = f.d, h = f.constructor, g = h.precision;
  if (f.s < 1) throw Error(Gt + (f.s ? "NaN" : "-Infinity"));
  if (f.eq(kt)) return new h(0);
  if (t == null ? (ke = !1, u = g) : u = t, f.eq(10))
    return t == null && (ke = !0), rd(h, u);
  if (u += p, h.precision = u, r = lr(v), n = r.charAt(0), i = Ue(f), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      f = f.times(e), r = lr(f.d), n = r.charAt(0), d++;
    i = Ue(f), n > 1 ? (f = new h("0." + r), i++) : f = new h(n + "." + r.slice(1));
  } else
    return c = rd(h, u + 2, g).times(i + ""), f = yi(new h(n + "." + r.slice(1)), u - p).plus(c), h.precision = g, t == null ? (ke = !0, Pe(f, g)) : f;
  for (s = a = f = Cr(f.minus(kt), f.plus(kt), u), l = Pe(f.times(f), u), o = 3; ; ) {
    if (a = Pe(a.times(l), u), c = s.plus(Cr(a, new h(o), u)), lr(c.d).slice(0, u) === lr(s.d).slice(0, u))
      return s = s.times(2), i !== 0 && (s = s.plus(rd(h, u + 2, g).times(i + ""))), s = Cr(s, new h(d), u), h.precision = g, t == null ? (ke = !0, Pe(s, g)) : s;
    s = c, o += 2;
  }
}
function yb(e, t) {
  var r, n, o;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (t = t.slice(n, o), t) {
    if (o -= n, r = r - n - 1, e.e = No(r / Ae), e.d = [], n = (r + 1) % Ae, r < 0 && (n += Ae), n < o) {
      for (n && e.d.push(+t.slice(0, n)), o -= Ae; n < o; ) e.d.push(+t.slice(n, n += Ae));
      t = t.slice(n), n = Ae - t.length;
    } else
      n -= o;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ke && (e.e > _s || e.e < -_s)) throw Error(Ph + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Pe(e, t, r) {
  var n, o, i, a, s, c, u, l, d = e.d;
  for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
  if (n = t - a, n < 0)
    n += Ae, o = t, u = d[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Ae), i = d.length, l >= i) return e;
    for (u = i = d[l], a = 1; i >= 10; i /= 10) a++;
    n %= Ae, o = n - Ae + a;
  }
  if (r !== void 0 && (i = vn(10, a - o - 1), s = u / i % 10 | 0, c = t < 0 || d[l + 1] !== void 0 || u % i, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? o > 0 ? u / vn(10, a - o) : 0 : d[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return c ? (i = Ue(e), d.length = 1, t = t - i - 1, d[0] = vn(10, (Ae - t % Ae) % Ae), e.e = No(-t / Ae) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = l, i = 1, l--) : (d.length = l + 1, i = vn(10, Ae - n), d[l] = o > 0 ? (u / vn(10, a - o) % vn(10, o) | 0) * i : 0), c)
    for (; ; )
      if (l == 0) {
        (d[0] += i) == Je && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[l] += i, d[l] != Je) break;
        d[l--] = 0, i = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (ke && (e.e > _s || e.e < -_s))
    throw Error(Ph + Ue(e));
  return e;
}
function PA(e, t) {
  var r, n, o, i, a, s, c, u, l, d, p = e.constructor, f = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), ke ? Pe(t, f) : t;
  if (c = e.d, d = t.d, n = t.e, u = e.e, c = c.slice(), a = u - n, a) {
    for (l = a < 0, l ? (r = c, a = -a, s = d.length) : (r = d, n = u, s = c.length), o = Math.max(Math.ceil(f / Ae), s) + 2, a > o && (a = o, r.length = 1), r.reverse(), o = a; o--; ) r.push(0);
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
      for (i = o; i && c[--i] === 0; ) c[i] = Je - 1;
      --c[i], c[o] += Je;
    }
    c[o] -= d[o];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, ke ? Pe(t, f) : t) : new p(0);
}
function Bn(e, t, r) {
  var n, o = Ue(e), i = lr(e.d), a = i.length;
  return t ? (r && (n = r - a) > 0 ? i = i.charAt(0) + "." + i.slice(1) + qr(n) : a > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (o < 0 ? "e" : "e+") + o) : o < 0 ? (i = "0." + qr(-o - 1) + i, r && (n = r - a) > 0 && (i += qr(n))) : o >= a ? (i += qr(o + 1 - a), r && (n = r - o - 1) > 0 && (i = i + "." + qr(n))) : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - a) > 0 && (o + 1 === a && (i += "."), i += qr(n))), e.s < 0 ? "-" + i : i;
}
function bb(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function OA(e) {
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
        throw Error(An + i);
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
      return yb(a, i.toString());
    } else if (typeof i != "string")
      throw Error(An + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), a.s = -1) : a.s = 1, PK.test(i)) yb(a, i);
    else throw Error(An + i);
  }
  if (o.prototype = X, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = OA, o.config = o.set = OK, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return o.config(e), o;
}
function OK(e) {
  if (!e || typeof e != "object")
    throw Error(Gt + "Object expected");
  var t, r, n, o = [
    "precision",
    1,
    ko,
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
      if (No(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(An + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(An + r + ": " + n);
  return this;
}
var Oh = OA(SK);
kt = new Oh(1);
const be = Oh;
var AK = (e) => e, AA = {}, CA = (e) => e === AA, wb = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && CA(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, TA = (e, t) => e === 1 ? t : wb(function() {
  for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  var i = n.filter((a) => a !== AA).length;
  return i >= e ? t(...n) : TA(e - i, wb(function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = n.map((l) => CA(l) ? s.shift() : l);
    return t(...u, ...s);
  }));
}), Xc = (e) => TA(e.length, e), Sf = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, CK = Xc((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), TK = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return AK;
  var o = r.reverse(), i = o[0], a = o.slice(1);
  return function() {
    return a.reduce((s, c) => c(s), i(...arguments));
  };
}, Pf = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), _A = (e) => {
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
function kA(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new be(e).abs().log(10).toNumber()) + 1, t;
}
function NA(e, t, r) {
  for (var n = new be(e), o = 0, i = []; n.lt(t) && o < 1e5; )
    i.push(n.toNumber()), n = n.add(r), o++;
  return i;
}
Xc((e, t, r) => {
  var n = +e, o = +t;
  return n + r * (o - n);
});
Xc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
});
Xc((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
var IA = (e) => {
  var [t, r] = e, [n, o] = [t, r];
  return t > r && ([n, o] = [r, t]), [n, o];
}, RA = (e, t, r) => {
  if (e.lte(0))
    return new be(0);
  var n = kA(e.toNumber()), o = new be(10).pow(n), i = e.div(o), a = n !== 1 ? 0.05 : 0.1, s = new be(Math.ceil(i.div(a).toNumber())).add(r).mul(a), c = s.mul(o);
  return t ? new be(c.toNumber()) : new be(Math.ceil(c.toNumber()));
}, _K = (e, t, r) => {
  var n = new be(1), o = new be(e);
  if (!o.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new be(10).pow(kA(e) - 1), o = new be(Math.floor(o.div(n).toNumber())).mul(n)) : i > 1 && (o = new be(Math.floor(e)));
  } else e === 0 ? o = new be(Math.floor((t - 1) / 2)) : r || (o = new be(Math.floor(e)));
  var a = Math.floor((t - 1) / 2), s = TK(CK((c) => o.add(new be(c - a).mul(n)).toNumber()), Sf);
  return s(0, t);
}, MA = function(t, r, n, o) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new be(0),
      tickMin: new be(0),
      tickMax: new be(0)
    };
  var a = RA(new be(r).sub(t).div(n - 1), o, i), s;
  t <= 0 && r >= 0 ? s = new be(0) : (s = new be(t).add(r).div(2), s = s.sub(new be(s).mod(a)));
  var c = Math.ceil(s.sub(t).div(a).toNumber()), u = Math.ceil(new be(r).sub(s).div(a).toNumber()), l = c + u + 1;
  return l > n ? MA(t, r, n, o, i + 1) : (l < n && (u = r > 0 ? u + (n - l) : u, c = r > 0 ? c : c + (n - l)), {
    step: a,
    tickMin: s.sub(new be(c).mul(a)),
    tickMax: s.add(new be(u).mul(a))
  });
};
function kK(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, i = Math.max(n, 2), [a, s] = IA([t, r]);
  if (a === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [a, ...Sf(0, n - 1).map(() => 1 / 0)] : [...Sf(0, n - 1).map(() => -1 / 0), s];
    return t > r ? Pf(c) : c;
  }
  if (a === s)
    return _K(a, n, o);
  var {
    step: u,
    tickMin: l,
    tickMax: d
  } = MA(a, s, i, o, 0), p = NA(l, d.add(new be(0.1).mul(u)), u);
  return t > r ? Pf(p) : p;
}
function NK(e, t) {
  var [r, n] = e, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [i, a] = IA([r, n]);
  if (i === -1 / 0 || a === 1 / 0)
    return [r, n];
  if (i === a)
    return [i];
  var s = Math.max(t, 2), c = RA(new be(a).sub(i).div(s - 1), o, 0), u = [...NA(new be(i), new be(a), c), a];
  return o === !1 && (u = u.map((l) => Math.round(l))), r > n ? Pf(u) : u;
}
var IK = _A(kK), RK = _A(NK), DA = (e) => e.rootProps.maxBarSize, MK = (e) => e.rootProps.barGap, jA = (e) => e.rootProps.barCategoryGap, DK = (e) => e.rootProps.barSize, Yi = (e) => e.rootProps.stackOffset, Ah = (e) => e.options.chartName, Ch = (e) => e.rootProps.syncId, LA = (e) => e.rootProps.syncMethod, Th = (e) => e.options.eventEmitter, xr = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, Ct = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, Zc = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, jK = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: xr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: xr.reversed,
  scale: xr.scale,
  tick: xr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: xr.type,
  unit: void 0
}, LK = {
  allowDataOverflow: Ct.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ct.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ct.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ct.scale,
  tick: Ct.tick,
  tickCount: Ct.tickCount,
  ticks: void 0,
  type: Ct.type,
  unit: void 0
}, $K = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: xr.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: xr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: xr.scale,
  tick: xr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, BK = {
  allowDataOverflow: Ct.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ct.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ct.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ct.scale,
  tick: Ct.tick,
  tickCount: Ct.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, _h = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? $K : jK, kh = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? BK : LK, Jc = (e) => e.polarOptions, Nh = k([jr, Lr, He], m1), $A = k([Jc, Nh], (e, t) => {
  if (e != null)
    return ct(e.innerRadius, t, 0);
}), BA = k([Jc, Nh], (e, t) => {
  if (e != null)
    return ct(e.outerRadius, t, t * 0.8);
}), FK = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, FA = k([Jc], FK);
k([_h, FA], Zc);
var zA = k([Nh, $A, BA], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
k([kh, zA], Zc);
var UA = k([fe, Jc, $A, BA, jr, Lr], (e, t, r, n, o, i) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: s,
      startAngle: c,
      endAngle: u
    } = t;
    return {
      cx: ct(a, o, o / 2),
      cy: ct(s, i, i / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: c,
      endAngle: u,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), Me = (e, t) => t, Xi = (e, t, r) => r;
function Qc(e) {
  return e?.id;
}
var Xe = (e) => {
  var t = fe(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, Io = (e) => e.tooltip.settings.axisId, Ze = (e) => {
  var t = Xe(e), r = Io(e);
  return Zi(e, t, r);
}, WA = k([Ze], (e) => e?.dataKey);
function KA(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: o,
    dataKey: i
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((s) => {
    var c, u = (c = s.data) !== null && c !== void 0 ? c : n;
    if (!(u == null || u.length === 0)) {
      var l = Qc(s);
      u.forEach((d, p) => {
        var f = i == null || o ? p : String(Se(d, i, null)), v = Se(d, s.dataKey, 0), h;
        a.has(f) ? h = a.get(f) : h = {}, Object.assign(h, {
          [l]: v
        }), a.set(f, h);
      });
    }
  }), Array.from(a.values());
}
function el(e) {
  return e.stackId != null && e.dataKey != null;
}
var tl = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function rl(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
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
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xb(Object(r), !0).forEach(function(n) {
      zK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zK(e, t, r) {
  return (t = UK(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UK(e) {
  var t = WK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WK(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Of = [0, "auto"], Pt = {
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
}, VA = (e, t) => e.cartesianAxis.xAxis[t], Fr = (e, t) => {
  var r = VA(e, t);
  return r ?? Pt;
}, Ot = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: Of,
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
  width: Ui
}, qA = (e, t) => e.cartesianAxis.yAxis[t], zr = (e, t) => {
  var r = qA(e, t);
  return r ?? Ot;
}, KK = {
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
}, Ih = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? KK;
}, De = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
    case "yAxis":
      return zr(e, r);
    case "zAxis":
      return Ih(e, r);
    case "angleAxis":
      return _h(e, r);
    case "radiusAxis":
      return kh(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, VK = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
    case "yAxis":
      return zr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Zi = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Fr(e, r);
    case "yAxis":
      return zr(e, r);
    case "angleAxis":
      return _h(e, r);
    case "radiusAxis":
      return kh(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, HA = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Rh(e, t) {
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
var Ji = (e) => e.graphicalItems.cartesianItems, qK = k([Me, Xi], Rh), Mh = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), Qi = k([Ji, De, qK], Mh, {
  memoizeOptions: {
    resultEqualityCheck: rl
  }
}), GA = k([Qi], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(el)), YA = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), HK = k([Qi], YA), Dh = (e) => e.map((t) => t.data).filter(Boolean).flat(1), GK = k([Qi], Dh, {
  memoizeOptions: {
    resultEqualityCheck: rl
  }
}), jh = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: o
  } = t;
  return e.length > 0 ? e : r.slice(n, o + 1);
}, Lh = k([GK, Gi], jh), $h = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: Se(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((o) => ({
  value: Se(o, n)
}))) : e.map((n) => ({
  value: n
})), nl = k([Lh, De, Qi], $h);
function XA(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function qa(e) {
  if (hr(e) || e instanceof Date) {
    var t = Number(e);
    if (We(t))
      return t;
  }
}
function Eb(e) {
  if (Array.isArray(e)) {
    var t = [qa(e[0]), qa(e[1])];
    return $n(t) ? t : void 0;
  }
  var r = qa(e);
  if (r != null)
    return [r, r];
}
function Ro(e) {
  return e.map(qa).filter(d4);
}
function YK(e, t, r) {
  return !r || typeof t != "number" || Rt(t) ? [] : r.length ? Ro(r.flatMap((n) => {
    var o = Se(e, n.dataKey), i, a;
    if (Array.isArray(o) ? [i, a] = o : i = a = o, !(!We(i) || !We(a)))
      return [t - i, t + a];
  })) : [];
}
var XK = k([GA, Gi, Ze], KA), ZA = (e, t, r) => {
  var n = {}, o = t.reduce((i, a) => (a.stackId == null || (i[a.stackId] == null && (i[a.stackId] = []), i[a.stackId].push(a)), i), n);
  return Object.fromEntries(Object.entries(o).map((i) => {
    var [a, s] = i, c = s.map(Qc);
    return [a, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: Mz(e, c, r),
      graphicalItems: s
    }];
  }));
}, bi = k([XK, GA, Yi], ZA), JA = (e, t, r, n) => {
  var {
    dataStartIndex: o,
    dataEndIndex: i
  } = t;
  if (n == null && r !== "zAxis") {
    var a = $z(e, o, i);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, ZK = k([De], (e) => e.allowDataOverflow), Bh = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return Of;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = Ro(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : Of;
}, Fh = k([De], Bh), zh = k([Fh, ZK], wA), JK = k([bi, dn, Me, zh], JA, {
  memoizeOptions: {
    resultEqualityCheck: tl
  }
}), ol = (e) => e.errorBars, QK = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => XA(r, n)), Ns = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  if (o.length !== 0) {
    var i = o.flat(), a = Math.min(...i), s = Math.max(...i);
    return [a, s];
  }
}, Uh = (e, t, r, n, o) => {
  var i, a;
  if (r.length > 0 && e.forEach((s) => {
    r.forEach((c) => {
      var u, l, d = (u = n[c.id]) === null || u === void 0 ? void 0 : u.filter((y) => XA(o, y)), p = Se(s, (l = t.dataKey) !== null && l !== void 0 ? l : c.dataKey), f = YK(s, p, d);
      if (f.length >= 2) {
        var v = Math.min(...f), h = Math.max(...f);
        (i == null || v < i) && (i = v), (a == null || h > a) && (a = h);
      }
      var g = Eb(p);
      g != null && (i = i == null ? g[0] : Math.min(i, g[0]), a = a == null ? g[1] : Math.max(a, g[1]));
    });
  }), t?.dataKey != null && e.forEach((s) => {
    var c = Eb(Se(s, t.dataKey));
    c != null && (i = i == null ? c[0] : Math.min(i, c[0]), a = a == null ? c[1] : Math.max(a, c[1]));
  }), We(i) && We(a))
    return [i, a];
}, e5 = k([Lh, De, HK, ol, Me], Uh, {
  memoizeOptions: {
    resultEqualityCheck: tl
  }
});
function t5(e) {
  var {
    value: t
  } = e;
  if (hr(t) || t instanceof Date)
    return t;
}
var r5 = (e, t, r) => {
  var n = e.map(t5).filter((o) => o != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && wO(n)) ? B1(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, QA = (e) => e.referenceElements.dots, Mo = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), n5 = k([QA, Me, Xi], Mo), eC = (e) => e.referenceElements.areas, o5 = k([eC, Me, Xi], Mo), tC = (e) => e.referenceElements.lines, i5 = k([tC, Me, Xi], Mo), rC = (e, t) => {
  var r = Ro(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, a5 = k(n5, Me, rC), nC = (e, t) => {
  var r = Ro(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, s5 = k([o5, Me], nC), oC = (e, t) => {
  var r = Ro(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, c5 = k(i5, Me, oC), l5 = k(a5, c5, s5, (e, t, r) => Ns(e, r, t)), Wh = (e, t, r, n, o, i, a, s) => {
  if (r != null)
    return r;
  var c = a === "vertical" && s === "xAxis" || a === "horizontal" && s === "yAxis", u = c ? Ns(n, i, o) : Ns(i, o);
  return EK(t, u, e.allowDataOverflow);
}, u5 = k([De, Fh, zh, JK, e5, l5, fe, Me], Wh, {
  memoizeOptions: {
    resultEqualityCheck: tl
  }
}), d5 = [0, 1], Kh = (e, t, r, n, o, i, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: s,
      type: c
    } = e, u = br(t, i);
    return u && s == null ? B1(0, r.length) : c === "category" ? r5(n, e, u) : o === "expand" ? d5 : a;
  }
}, Vh = k([De, fe, Lh, nl, Yi, Me, u5], Kh), iC = (e, t, r, n, o) => {
  if (e != null) {
    var {
      scale: i,
      type: a
    } = e;
    if (i === "auto")
      return t === "radial" && o === "radiusAxis" ? "band" : t === "radial" && o === "angleAxis" ? "linear" : a === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : a === "category" ? "band" : "linear";
    if (typeof i == "string") {
      var s = "scale".concat(ji(i));
      return s in Qo ? s : "point";
    }
  }
}, Do = k([De, fe, HA, Ah, Me], iC);
function f5(e) {
  if (e != null) {
    if (e in Qo)
      return Qo[e]();
    var t = "scale".concat(ji(e));
    if (t in Qo)
      return Qo[t]();
  }
}
function qh(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var o = f5(t);
    if (o != null) {
      var i = o.domain(r).range(n);
      return _z(i), i;
    }
  }
}
var Hh = (e, t, r) => {
  var n = Bh(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && $n(e))
      return IK(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && $n(e))
      return RK(e, t.tickCount, t.allowDecimals);
  }
}, Gh = k([Vh, Zi, Do], Hh), Yh = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && $n(t) && Array.isArray(r) && r.length > 0
  ) {
    var o = t[0], i = r[0], a = t[1], s = r[r.length - 1];
    return [Math.min(o, i), Math.max(a, s)];
  }
  return t;
}, p5 = k([De, Vh, Gh, Me], Yh), h5 = k(nl, De, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(Ro(e.map((s) => s.value))).sort((s, c) => s - c);
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
}), aC = k(h5, fe, jA, He, (e, t, r, n) => n, (e, t, r, n, o) => {
  if (!We(e))
    return 0;
  var i = t === "vertical" ? n.height : n.width;
  if (o === "gap")
    return e * i / 2;
  if (o === "no-gap") {
    var a = ct(r, e * i), s = e * i / 2;
    return s - a - (s - a) / i * a;
  }
  return 0;
}), m5 = (e, t) => {
  var r = Fr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : aC(e, "xAxis", t, r.padding);
}, v5 = (e, t) => {
  var r = zr(e, t);
  return r == null || typeof r.padding != "string" ? 0 : aC(e, "yAxis", t, r.padding);
}, g5 = k(Fr, m5, (e, t) => {
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
}), y5 = k(zr, v5, (e, t) => {
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
}), b5 = k([He, g5, Fc, Bc, (e, t, r) => r], (e, t, r, n, o) => {
  var {
    padding: i
  } = n;
  return o ? [i.left, r.width - i.right] : [e.left + t.left, e.left + e.width - t.right];
}), w5 = k([He, fe, y5, Fc, Bc, (e, t, r) => r], (e, t, r, n, o, i) => {
  var {
    padding: a
  } = o;
  return i ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), ea = (e, t, r, n) => {
  var o;
  switch (t) {
    case "xAxis":
      return b5(e, r, n);
    case "yAxis":
      return w5(e, r, n);
    case "zAxis":
      return (o = Ih(e, r)) === null || o === void 0 ? void 0 : o.range;
    case "angleAxis":
      return FA(e);
    case "radiusAxis":
      return zA(e, r);
    default:
      return;
  }
}, sC = k([De, ea], Zc), jo = k([De, Do, p5, sC], qh);
k([Qi, ol, Me], QK);
function cC(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var il = (e, t) => t, al = (e, t, r) => r, x5 = k(Lc, il, al, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(cC)), E5 = k($c, il, al, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(cC)), lC = (e, t) => ({
  width: e.width,
  height: t.height
}), S5 = (e, t) => {
  var r = typeof t.width == "number" ? t.width : Ui;
  return {
    width: r,
    height: e.height
  };
}, uC = k(He, Fr, lC), P5 = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, O5 = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, A5 = k(Lr, He, x5, il, al, (e, t, r, n, o) => {
  var i = {}, a;
  return r.forEach((s) => {
    var c = lC(t, s);
    a == null && (a = P5(t, n, e));
    var u = n === "top" && !o || n === "bottom" && o;
    i[s.id] = a - Number(u) * c.height, a += (u ? -1 : 1) * c.height;
  }), i;
}), C5 = k(jr, He, E5, il, al, (e, t, r, n, o) => {
  var i = {}, a;
  return r.forEach((s) => {
    var c = S5(t, s);
    a == null && (a = O5(t, n, e));
    var u = n === "left" && !o || n === "right" && o;
    i[s.id] = a - Number(u) * c.width, a += (u ? -1 : 1) * c.width;
  }), i;
}), T5 = (e, t) => {
  var r = Fr(e, t);
  if (r != null)
    return A5(e, r.orientation, r.mirror);
}, _5 = k([He, Fr, T5, (e, t) => t], (e, t, r, n) => {
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
}), k5 = (e, t) => {
  var r = zr(e, t);
  if (r != null)
    return C5(e, r.orientation, r.mirror);
}, N5 = k([He, zr, k5, (e, t) => t], (e, t, r, n) => {
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
}), dC = k(He, zr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : Ui;
  return {
    width: r,
    height: e.height
  };
}), Sb = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return uC(e, r).width;
    case "yAxis":
      return dC(e, r).height;
    default:
      return;
  }
}, fC = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: o,
      type: i,
      dataKey: a
    } = r, s = br(e, n), c = t.map((u) => u.value);
    if (a && s && i === "category" && o && wO(c))
      return c;
  }
}, Xh = k([fe, nl, De, Me], fC), pC = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: o,
      scale: i
    } = r, a = br(e, n);
    if (a && (o === "number" || i !== "auto"))
      return t.map((s) => s.value);
  }
}, Zh = k([fe, nl, Zi, Me], pC), Pb = k([fe, VK, Do, jo, Xh, Zh, ea, Gh, Me], (e, t, r, n, o, i, a, s, c) => {
  if (t == null)
    return null;
  var u = br(e, c);
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
}), I5 = (e, t, r, n, o, i, a, s, c) => {
  if (!(t == null || n == null)) {
    var u = br(e, c), {
      type: l,
      ticks: d,
      tickCount: p
    } = t, f = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = l === "category" && n.bandwidth ? n.bandwidth() / f : 0;
    v = c === "angleAxis" && i != null && i.length >= 2 ? Qe(i[0] - i[1]) * 2 * v : v;
    var h = d || o;
    if (h) {
      var g = h.map((y, w) => {
        var x = a ? a.indexOf(y) : y;
        return {
          index: w,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(x) + v,
          value: y,
          offset: v
        };
      });
      return g.filter((y) => !Rt(y.coordinate));
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
}, hC = k([fe, Zi, Do, jo, Gh, ea, Xh, Zh, Me], I5), R5 = (e, t, r, n, o, i, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var s = br(e, a), {
      tickCount: c
    } = t, u = 0;
    return u = a === "angleAxis" && n?.length >= 2 ? Qe(n[0] - n[1]) * 2 * u : u, s && i ? i.map((l, d) => ({
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
}, vr = k([fe, Zi, jo, ea, Xh, Zh, Me], R5), gr = k(De, jo, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
}), M5 = k([De, Do, Vh, sC], qh);
k((e, t, r) => Ih(e, r), M5, (e, t) => {
  if (!(e == null || t == null))
    return ks(ks({}, e), {}, {
      scale: t
    });
});
var D5 = k([fe, Lc, $c], (e, t, r) => {
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
}), mC = (e) => e.options.defaultTooltipEventType, vC = (e) => e.options.validateTooltipEventTypes;
function gC(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Jh(e, t) {
  var r = mC(e), n = vC(e);
  return gC(t, r, n);
}
function j5(e) {
  return ee((t) => Jh(t, e));
}
var yC = (e, t) => {
  var r, n = Number(t);
  if (!(Rt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, L5 = (e) => e.tooltip.settings, Gr = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, $5 = {
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
}, bC = Lt({
  name: "tooltip",
  initialState: $5,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ut()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Ar(e).tooltipItemPayloads.indexOf(t.payload);
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
  addTooltipEntrySettings: B5,
  removeTooltipEntrySettings: F5,
  setTooltipSettingsState: z5,
  setActiveMouseOverItemIndex: wC,
  mouseLeaveItem: U5,
  mouseLeaveChart: xC,
  setActiveClickItemIndex: W5,
  setMouseOverAxisIndex: EC,
  setMouseClickAxisIndex: K5,
  setSyncInteraction: Af,
  setKeyboardInteraction: Cf
} = bC.actions, V5 = bC.reducer;
function Ob(e, t) {
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
    t % 2 ? Ob(Object(r), !0).forEach(function(n) {
      q5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ob(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q5(e, t, r) {
  return (t = H5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H5(e) {
  var t = G5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function G5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y5(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function X5(e) {
  return e.index != null;
}
var SC = (e, t, r, n) => {
  if (t == null)
    return Gr;
  var o = Y5(e, t, r);
  if (o == null)
    return Gr;
  if (o.active)
    return o;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var i = e.settings.active === !0;
  if (X5(o)) {
    if (i)
      return Na(Na({}, o), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return Na(Na({}, Gr), {}, {
    coordinate: o.coordinate
  });
}, Qh = (e, t) => {
  var r = e?.index;
  if (r == null)
    return null;
  var n = Number(r);
  if (!We(n))
    return r;
  var o = 0, i = 1 / 0;
  return t.length > 0 && (i = t.length - 1), String(Math.max(o, Math.min(n, i)));
}, PC = (e, t, r, n, o, i, a, s) => {
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
}, OC = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var o;
  return r === "hover" ? o = e.itemInteraction.hover.dataKey : o = e.itemInteraction.click.dataKey, o == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((i) => {
    var a;
    return ((a = i.settings) === null || a === void 0 ? void 0 : a.dataKey) === o;
  });
}, ta = (e) => e.options.tooltipPayloadSearcher, Lo = (e) => e.tooltip;
function Ab(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ab(Object(r), !0).forEach(function(n) {
      Z5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z5(e, t, r) {
  return (t = J5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J5(e) {
  var t = Q5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Q5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eV(e, t) {
  return e ?? t;
}
var AC = (e, t, r, n, o, i, a) => {
  if (!(t == null || i == null)) {
    var {
      chartData: s,
      computedData: c,
      dataStartIndex: u,
      dataEndIndex: l
    } = r, d = [];
    return e.reduce((p, f) => {
      var v, {
        dataDefinedOnItem: h,
        settings: g
      } = f, y = eV(h, s), w = Array.isArray(y) ? v1(y, u, l) : y, x = (v = g?.dataKey) !== null && v !== void 0 ? v : n, S = g?.nameKey, E;
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
      a === "axis" ? E = xO(w, n, o) : E = i(w, t, c, S), Array.isArray(E))
        E.forEach((O) => {
          var A = Cb(Cb({}, g), {}, {
            name: O.name,
            unit: O.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          p.push(ry({
            tooltipEntrySettings: A,
            dataKey: O.dataKey,
            payload: O.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: Se(O.payload, O.dataKey),
            name: O.name
          }));
        });
      else {
        var P;
        p.push(ry({
          tooltipEntrySettings: g,
          dataKey: x,
          payload: E,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: Se(E, x),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (P = Se(E, S)) !== null && P !== void 0 ? P : g?.name
        }));
      }
      return p;
    }, d);
  }
}, em = k([Ze, fe, HA, Ah, Xe], iC), tV = k([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), rV = k([Xe, Io], Rh), ra = k([tV, Ze, rV], Mh, {
  memoizeOptions: {
    resultEqualityCheck: rl
  }
}), nV = k([ra], (e) => e.filter(el)), oV = k([ra], Dh, {
  memoizeOptions: {
    resultEqualityCheck: rl
  }
}), $o = k([oV, dn], jh), iV = k([nV, dn, Ze], KA), tm = k([$o, Ze, ra], $h), CC = k([Ze], Bh), aV = k([Ze], (e) => e.allowDataOverflow), TC = k([CC, aV], wA), sV = k([ra], (e) => e.filter(el)), cV = k([iV, sV, Yi], ZA), lV = k([cV, dn, Xe, TC], JA), uV = k([ra], YA), dV = k([$o, Ze, uV, ol, Xe], Uh, {
  memoizeOptions: {
    resultEqualityCheck: tl
  }
}), fV = k([QA, Xe, Io], Mo), pV = k([fV, Xe], rC), hV = k([eC, Xe, Io], Mo), mV = k([hV, Xe], nC), vV = k([tC, Xe, Io], Mo), gV = k([vV, Xe], oC), yV = k([pV, gV, mV], Ns), bV = k([Ze, CC, TC, lV, dV, yV, fe, Xe], Wh), _C = k([Ze, fe, $o, tm, Yi, Xe, bV], Kh), wV = k([_C, Ze, em], Hh), xV = k([Ze, _C, wV, Xe], Yh), kC = (e) => {
  var t = Xe(e), r = Io(e), n = !1;
  return ea(e, t, r, n);
}, NC = k([Ze, kC], Zc), IC = k([Ze, em, xV, NC], qh), EV = k([fe, tm, Ze, Xe], fC), SV = k([fe, tm, Ze, Xe], pC), PV = (e, t, r, n, o, i, a, s) => {
  if (t) {
    var {
      type: c
    } = t, u = br(e, s);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, d = c === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return d = s === "angleAxis" && o != null && o?.length >= 2 ? Qe(o[0] - o[1]) * 2 * d : d, u && a ? a.map((p, f) => ({
        coordinate: n(p) + d,
        value: p,
        index: f,
        offset: d
      })) : n.domain().map((p, f) => ({
        coordinate: n(p) + d,
        value: i ? i[p] : p,
        index: f,
        offset: d
      }));
    }
  }
}, Ur = k([fe, Ze, em, IC, kC, EV, SV, Xe], PV), rm = k([mC, vC, L5], (e, t, r) => gC(r.shared, e, t)), RC = (e) => e.tooltip.settings.trigger, nm = (e) => e.tooltip.settings.defaultIndex, sl = k([Lo, rm, RC, nm], SC), en = k([sl, $o], Qh), MC = k([Ur, en], yC), DC = k([sl], (e) => {
  if (e)
    return e.dataKey;
}), jC = k([Lo, rm, RC, nm], OC), OV = k([jr, Lr, fe, He, Ur, nm, jC, ta], PC), AV = k([sl, OV], (e, t) => e != null && e.coordinate ? e.coordinate : t), CV = k([sl], (e) => e.active), TV = k([jC, en, dn, WA, MC, ta, rm], AC), _V = k([TV], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
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
function _b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tb(Object(r), !0).forEach(function(n) {
      kV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kV(e, t, r) {
  return (t = NV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NV(e) {
  var t = IV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RV = () => ee(Ze), MV = () => {
  var e = RV(), t = ee(Ur), r = ee(IC);
  return Ln(_b(_b({}, e), {}, {
    scale: r
  }), t);
}, LC = () => ee(Ah), om = (e, t) => t, $C = (e, t, r) => r, im = (e, t, r, n) => n, DV = k(Ur, (e) => Ic(e, (t) => t.coordinate)), am = k([Lo, om, $C, im], SC), BC = k([am, $o], Qh), jV = (e, t, r) => {
  if (t != null) {
    var n = Lo(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, FC = k([Lo, om, $C, im], OC), Is = k([jr, Lr, fe, He, Ur, im, FC, ta], PC), LV = k([am, Is], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), zC = k(Ur, BC, yC), $V = k([FC, BC, dn, WA, zC, ta, om], AC), BV = k([am], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), FV = (e, t, r, n, o, i, a, s) => {
  if (!(!e || !t || !n || !o || !i)) {
    var c = Bz(e.chartX, e.chartY, t, r, s);
    if (c) {
      var u = zz(c, t), l = Cz(u, a, i, n, o), d = Fz(t, i, l, c);
      return {
        activeIndex: String(l),
        activeCoordinate: d
      };
    }
  }
};
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(null, arguments);
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
function Ia(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kb(Object(r), !0).forEach(function(n) {
      zV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zV(e, t, r) {
  return (t = UV(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UV(e) {
  var t = WV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WV(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KV(e) {
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
  var f, v;
  if (u === "ScatterChart")
    f = l, v = o4;
  else if (u === "BarChart")
    f = i4(a, l, o, i), v = D1;
  else if (a === "radial") {
    var {
      cx: h,
      cy: g,
      radius: y,
      startAngle: w,
      endAngle: x
    } = j1(l);
    f = {
      cx: h,
      cy: g,
      startAngle: w,
      endAngle: x,
      innerRadius: y,
      outerRadius: y
    }, v = $1;
  } else
    f = {
      points: U4(a, l, o)
    }, v = no;
  var S = typeof s == "object" && "className" in s ? s.className : void 0, E = Ia(Ia(Ia(Ia({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), f), Rn(s)), {}, {
    payload: d,
    payloadIndex: p,
    className: pe("recharts-tooltip-cursor", S)
  });
  return /* @__PURE__ */ Kt(s) ? /* @__PURE__ */ Ei(s, E) : /* @__PURE__ */ ri(v, E);
}
function VV(e) {
  var t = MV(), r = A1(), n = Wi(), o = LC();
  return /* @__PURE__ */ m.createElement(KV, Tf({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: o
  }));
}
var UC = /* @__PURE__ */ Dt(null), qV = () => tr(UC), nd = { exports: {} }, Nb;
function HV() {
  return Nb || (Nb = 1, (function(e) {
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
      var f = new o(l, d || c, p), v = r ? r + u : u;
      return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], f] : c._events[v].push(f) : (c._events[v] = f, c._eventsCount++), c;
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
      for (var p = 0, f = d.length, v = new Array(f); p < f; p++)
        v[p] = d[p].fn;
      return v;
    }, s.prototype.listenerCount = function(u) {
      var l = r ? r + u : u, d = this._events[l];
      return d ? d.fn ? 1 : d.length : 0;
    }, s.prototype.emit = function(u, l, d, p, f, v) {
      var h = r ? r + u : u;
      if (!this._events[h]) return !1;
      var g = this._events[h], y = arguments.length, w, x;
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
            return g.fn.call(g.context, l, d, p, f), !0;
          case 6:
            return g.fn.call(g.context, l, d, p, f, v), !0;
        }
        for (x = 1, w = new Array(y - 1); x < y; x++)
          w[x - 1] = arguments[x];
        g.fn.apply(g.context, w);
      } else {
        var S = g.length, E;
        for (x = 0; x < S; x++)
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
              if (!w) for (E = 1, w = new Array(y - 1); E < y; E++)
                w[E - 1] = arguments[E];
              g[x].fn.apply(g[x].context, w);
          }
      }
      return !0;
    }, s.prototype.on = function(u, l, d) {
      return i(this, u, l, d, !1);
    }, s.prototype.once = function(u, l, d) {
      return i(this, u, l, d, !0);
    }, s.prototype.removeListener = function(u, l, d, p) {
      var f = r ? r + u : u;
      if (!this._events[f]) return this;
      if (!l)
        return a(this, f), this;
      var v = this._events[f];
      if (v.fn)
        v.fn === l && (!p || v.once) && (!d || v.context === d) && a(this, f);
      else {
        for (var h = 0, g = [], y = v.length; h < y; h++)
          (v[h].fn !== l || p && !v[h].once || d && v[h].context !== d) && g.push(v[h]);
        g.length ? this._events[f] = g.length === 1 ? g[0] : g : a(this, f);
      }
      return this;
    }, s.prototype.removeAllListeners = function(u) {
      var l;
      return u ? (l = r ? r + u : u, this._events[l] && a(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  })(nd)), nd.exports;
}
var GV = HV();
const YV = /* @__PURE__ */ sn(GV);
var wi = new YV(), _f = "recharts.syncEvent.tooltip", Ib = "recharts.syncEvent.brush";
function cl(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!Rt(r))
      return e?.[r];
  }
}
var XV = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, WC = Lt({
  name: "options",
  initialState: XV,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), ZV = WC.reducer, {
  createEventEmitter: JV
} = WC.actions;
function QV(e) {
  return e.tooltip.syncInteraction;
}
var eq = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, KC = Lt({
  name: "chartData",
  initialState: eq,
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
  setChartData: Rb,
  setDataStartEndIndexes: tq,
  setComputedData: G7
} = KC.actions, rq = KC.reducer, nq = ["x", "y"];
function Mb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mb(Object(r), !0).forEach(function(n) {
      oq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oq(e, t, r) {
  return (t = iq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iq(e) {
  var t = aq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sq(e, t) {
  if (e == null) return {};
  var r, n, o = cq(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function cq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var VC = () => {
};
function lq() {
  var e = ee(Ch), t = ee(Th), r = Re(), n = ee(LA), o = ee(Ur), i = Wi(), a = Uc(), s = ee((c) => c.rootProps.className);
  Le(() => {
    if (e == null)
      return VC;
    var c = (u, l, d) => {
      if (t !== d && e === u) {
        if (n === "index") {
          var p;
          if (a && l !== null && l !== void 0 && (p = l.payload) !== null && p !== void 0 && p.coordinate && l.payload.sourceViewBox) {
            var f = l.payload.coordinate, {
              x: v,
              y: h
            } = f, g = sq(f, nq), {
              x: y,
              y: w,
              width: x,
              height: S
            } = l.payload.sourceViewBox, E = Jn(Jn({}, g), {}, {
              x: a.x + (x ? (v - y) / x : 0) * a.width,
              y: a.y + (S ? (h - w) / S : 0) * a.height
            });
            r(Jn(Jn({}, l), {}, {
              payload: Jn(Jn({}, l.payload), {}, {
                coordinate: E
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
          } else n === "value" && (P = o.find(($) => String($.value) === l.payload.label));
          var {
            coordinate: _
          } = l.payload;
          if (P == null || l.payload.active === !1 || _ == null || a == null) {
            r(Af({
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
            y: T
          } = _, I = Math.min(N, a.x + a.width), j = Math.min(T, a.y + a.height), C = {
            x: i === "horizontal" ? P.coordinate : I,
            y: i === "horizontal" ? j : P.coordinate
          }, D = Af({
            active: l.payload.active,
            coordinate: C,
            dataKey: l.payload.dataKey,
            index: String(P.index),
            label: l.payload.label,
            sourceViewBox: l.payload.sourceViewBox
          });
          r(D);
        }
      }
    };
    return wi.on(_f, c), () => {
      wi.off(_f, c);
    };
  }, [s, r, t, e, n, o, i, a]);
}
function uq() {
  var e = ee(Ch), t = ee(Th), r = Re();
  Le(() => {
    if (e == null)
      return VC;
    var n = (o, i, a) => {
      t !== a && e === o && r(tq(i));
    };
    return wi.on(Ib, n), () => {
      wi.off(Ib, n);
    };
  }, [r, t, e]);
}
function dq() {
  var e = Re();
  Le(() => {
    e(JV());
  }, [e]), lq(), uq();
}
function fq(e, t, r, n, o, i) {
  var a = ee((f) => jV(f, e, t)), s = ee(Th), c = ee(Ch), u = ee(LA), l = ee(QV), d = l?.active, p = Uc();
  Le(() => {
    if (!d && c != null && s != null) {
      var f = Af({
        active: i,
        coordinate: r,
        dataKey: a,
        index: o,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: p
      });
      wi.emit(_f, c, f, s);
    }
  }, [d, r, a, o, n, s, c, u, i, p]);
}
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
      pq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Db(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pq(e, t, r) {
  return (t = hq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hq(e) {
  var t = mq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vq(e) {
  return e.dataKey;
}
function gq(e, t) {
  return /* @__PURE__ */ m.isValidElement(e) ? /* @__PURE__ */ m.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ m.createElement(e, t) : /* @__PURE__ */ m.createElement(jU, t);
}
var Lb = [], yq = {
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
function ll(e) {
  var t = Ge(e, yq), {
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
    useTranslate3d: f,
    wrapperStyle: v,
    cursor: h,
    shared: g,
    trigger: y,
    defaultIndex: w,
    portal: x,
    axisId: S
  } = t, E = Re(), P = typeof w == "number" ? String(w) : w;
  Le(() => {
    E(z5({
      shared: g,
      trigger: y,
      axisId: S,
      active: r,
      defaultIndex: P
    }));
  }, [E, g, y, S, r, P]);
  var O = Uc(), A = k1(), _ = j5(g), {
    activeIndex: N,
    isActive: T
  } = ee((te) => BV(te, _, y, P)), I = ee((te) => $V(te, _, y, P)), j = ee((te) => zC(te, _, y, P)), C = ee((te) => LV(te, _, y, P)), D = I, $ = qV(), z = r ?? T, [M, F] = $O([D, z]), oe = _ === "axis" ? j : void 0;
  fq(_, y, C, oe, N, z);
  var H = x ?? $;
  if (H == null)
    return null;
  var ae = D ?? Lb;
  z || (ae = Lb), s && ae.length && (ae = IO(D.filter((te) => te.value != null && (te.hide !== !0 || t.includeHidden)), l, vq));
  var ie = ae.length > 0, W = /* @__PURE__ */ m.createElement(WU, {
    allowEscapeViewBox: n,
    animationDuration: o,
    animationEasing: i,
    isAnimationActive: c,
    active: z,
    coordinate: C,
    hasPayload: ie,
    offset: u,
    position: d,
    reverseDirection: p,
    useTranslate3d: f,
    viewBox: O,
    wrapperStyle: v,
    lastBoundingBox: M,
    innerRef: F,
    hasPortalFromProps: !!x
  }, gq(a, jb(jb({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: ae,
    label: oe,
    active: z,
    coordinate: C,
    accessibilityLayer: A
  })));
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ zw(W, H), z && /* @__PURE__ */ m.createElement(VV, {
    cursor: h,
    tooltipEventType: _,
    coordinate: C,
    payload: D,
    index: N
  }));
}
var na = (e) => null;
na.displayName = "Cell";
function bq(e, t, r) {
  return (t = wq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wq(e) {
  var t = xq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class Eq {
  constructor(t) {
    bq(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function Sq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $b(Object(r), !0).forEach(function(n) {
      Pq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $b(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pq(e, t, r) {
  return (t = Oq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Oq(e) {
  var t = Aq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Aq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cq = {
  cacheSize: 2e3,
  enableCache: !0
}, qC = Sq({}, Cq), Bb = new Eq(qC.cacheSize), Tq = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Fb = "recharts_measurement_span";
function _q(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", o = t.fontWeight || "", i = t.fontStyle || "", a = t.letterSpacing || "", s = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(o, "|").concat(i, "|").concat(a, "|").concat(s);
}
var zb = (e, t) => {
  try {
    var r = document.getElementById(Fb);
    r || (r = document.createElement("span"), r.setAttribute("id", Fb), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, Tq, t), r.textContent = "".concat(e);
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
}, ti = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || $r.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!qC.enableCache)
    return zb(t, r);
  var n = _q(t, r), o = Bb.get(n);
  if (o)
    return o;
  var i = zb(t, r);
  return Bb.set(n, i), i;
}, Ub = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Wb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, kq = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, Nq = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, HC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, Iq = Object.keys(HC), Qn = "NaN";
function Rq(e, t) {
  return e * HC[t];
}
class vt {
  static parse(t) {
    var r, [, n, o] = (r = Nq.exec(t)) !== null && r !== void 0 ? r : [];
    return new vt(parseFloat(n), o ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Rt(t) && (this.unit = ""), r !== "" && !kq.test(r) && (this.num = NaN, this.unit = ""), Iq.includes(r) && (this.num = Rq(t, r), this.unit = "px");
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
    return Rt(this.num);
  }
}
function GC(e) {
  if (e.includes(Qn))
    return Qn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, o, i] = (r = Ub.exec(t)) !== null && r !== void 0 ? r : [], a = vt.parse(n ?? ""), s = vt.parse(i ?? ""), c = o === "*" ? a.multiply(s) : a.divide(s);
    if (c.isNaN())
      return Qn;
    t = t.replace(Ub, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, l, d, p] = (u = Wb.exec(t)) !== null && u !== void 0 ? u : [], f = vt.parse(l ?? ""), v = vt.parse(p ?? ""), h = d === "+" ? f.add(v) : f.subtract(v);
    if (h.isNaN())
      return Qn;
    t = t.replace(Wb, h.toString());
  }
  return t;
}
var Kb = /\(([^()]*)\)/;
function Mq(e) {
  for (var t = e, r; (r = Kb.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Kb, GC(n));
  }
  return t;
}
function Dq(e) {
  var t = e.replace(/\s+/g, "");
  return t = Mq(t), t = GC(t), t;
}
function jq(e) {
  try {
    return Dq(e);
  } catch {
    return Qn;
  }
}
function od(e) {
  var t = jq(e.slice(5, -1));
  return t === Qn ? "" : t;
}
var Lq = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], $q = ["dx", "dy", "angle", "className", "breakAll"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kf.apply(null, arguments);
}
function Vb(e, t) {
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
var YC = /[ \f\n\r\t\v\u2028\u2029]+/, XC = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var o = [];
    Ce(t) || (r ? o = t.toString().split("") : o = t.toString().split(YC));
    var i = o.map((s) => ({
      word: s,
      width: ti(s, n).width
    })), a = r ? 0 : ti(" ", n).width;
    return {
      wordsWithComputedWidth: i,
      spaceWidth: a
    };
  } catch {
    return null;
  }
}, Fq = (e, t, r, n, o) => {
  var {
    maxLines: i,
    children: a,
    style: s,
    breakAll: c
  } = e, u = Q(i), l = a, d = function() {
    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return T.reduce((I, j) => {
      var {
        word: C,
        width: D
      } = j, $ = I[I.length - 1];
      if ($ && (n == null || o || $.width + D + r < Number(n)))
        $.words.push(C), $.width += D + r;
      else {
        var z = {
          words: [C],
          width: D
        };
        I.push(z);
      }
      return I;
    }, []);
  }, p = d(t), f = (N) => N.reduce((T, I) => T.width > I.width ? T : I);
  if (!u || o)
    return p;
  var v = p.length > i || f(p).width > Number(n);
  if (!v)
    return p;
  for (var h = "…", g = (N) => {
    var T = l.slice(0, N), I = XC({
      breakAll: c,
      style: s,
      children: T + h
    }).wordsWithComputedWidth, j = d(I), C = j.length > i || f(j).width > Number(n);
    return [C, j];
  }, y = 0, w = l.length - 1, x = 0, S; y <= w && x <= l.length - 1; ) {
    var E = Math.floor((y + w) / 2), P = E - 1, [O, A] = g(P), [_] = g(E);
    if (!O && !_ && (y = E + 1), O && _ && (w = E - 1), !O && _) {
      S = A;
      break;
    }
    x++;
  }
  return S || p;
}, qb = (e) => {
  var t = Ce(e) ? [] : e.toString().split(YC);
  return [{
    words: t
  }];
}, zq = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: o,
    breakAll: i,
    maxLines: a
  } = e;
  if ((t || r) && !$r.isSsr) {
    var s, c, u = XC({
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
      return qb(n);
    return Fq({
      breakAll: i,
      children: n,
      maxLines: a,
      style: o
    }, s, c, t, r);
  }
  return qb(n);
}, Hb = "#808080", ul = /* @__PURE__ */ Fe((e, t) => {
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
    fill: u = Hb
  } = e, l = Vb(e, Lq), d = rr(() => zq({
    breakAll: l.breakAll,
    children: l.children,
    maxLines: l.maxLines,
    scaleToFit: a,
    style: l.style,
    width: l.width
  }), [l.breakAll, l.children, l.maxLines, a, l.style, l.width]), {
    dx: p,
    dy: f,
    angle: v,
    className: h,
    breakAll: g
  } = l, y = Vb(l, $q);
  if (!hr(r) || !hr(n) || d.length === 0)
    return null;
  var w = r + (Q(p) ? p : 0), x = n + (Q(f) ? f : 0), S;
  switch (c) {
    case "start":
      S = od("calc(".concat(i, ")"));
      break;
    case "middle":
      S = od("calc(".concat((d.length - 1) / 2, " * -").concat(o, " + (").concat(i, " / 2))"));
      break;
    default:
      S = od("calc(".concat(d.length - 1, " * -").concat(o, ")"));
      break;
  }
  var E = [];
  if (a) {
    var P = d[0].width, {
      width: O
    } = l;
    E.push("scale(".concat(Q(O) ? O / P : 1, ")"));
  }
  return v && E.push("rotate(".concat(v, ", ").concat(w, ", ").concat(x, ")")), E.length && (y.transform = E.join(" ")), /* @__PURE__ */ m.createElement("text", kf({}, mt(y), {
    ref: t,
    x: w,
    y: x,
    className: pe("recharts-text", h),
    textAnchor: s,
    fill: u.includes("url") ? Hb : u
  }), d.map((A, _) => {
    var N = A.words.join(g ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement("tspan", {
        x: w,
        dy: _ === 0 ? S : o,
        key: "".concat(N, "-").concat(_)
      }, N)
    );
  }));
});
ul.displayName = "Text";
var Uq = ["labelRef"];
function Wq(e, t) {
  if (e == null) return {};
  var r, n, o = Kq(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Kq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Gb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gb(Object(r), !0).forEach(function(n) {
      Vq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vq(e, t, r) {
  return (t = qq(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qq(e) {
  var t = Hq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hq(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(null, arguments);
}
var ZC = /* @__PURE__ */ Dt(null), Gq = (e) => {
  var {
    x: t,
    y: r,
    width: n,
    height: o,
    children: i
  } = e, a = rr(() => ({
    x: t,
    y: r,
    width: n,
    height: o
  }), [t, r, n, o]);
  return /* @__PURE__ */ m.createElement(ZC.Provider, {
    value: a
  }, i);
}, JC = () => {
  var e = tr(ZC), t = Uc();
  return e || t;
}, Yq = /* @__PURE__ */ Dt(null), Xq = () => {
  var e = tr(Yq), t = ee(UA);
  return e || t;
}, Zq = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Ce(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, sm = (e) => e != null && typeof e == "function", Jq = (e, t) => {
  var r = Qe(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, Qq = (e, t, r, n, o) => {
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
    clockWise: f
  } = o, v = (u + l) / 2, h = Jq(d, p), g = h >= 0 ? 1 : -1, y, w;
  switch (t) {
    case "insideStart":
      y = d + g * i, w = f;
      break;
    case "insideEnd":
      y = p - g * i, w = !f;
      break;
    case "end":
      y = p + g * i, w = f;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = h <= 0 ? w : !w;
  var x = ze(s, c, v, y), S = ze(s, c, v, y + (w ? 1 : -1) * 359), E = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(S.x, ",").concat(S.y), P = Ce(e.id) ? li("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ m.createElement("text", Er({}, n, {
    dominantBaseline: "central",
    className: pe("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("path", {
    id: P,
    d: E
  })), /* @__PURE__ */ m.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, eH = (e, t, r) => {
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
    } = ze(n, o, a + t, u);
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
    x: f,
    y: v
  } = ze(n, o, p, u);
  return {
    x: f,
    y: v,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, QC = (e) => "cx" in e && Q(e.cx), tH = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: o
  } = e, i;
  r != null && !QC(r) && (i = r);
  var {
    x: a,
    y: s,
    width: c,
    height: u
  } = t, l = u >= 0 ? 1 : -1, d = l * n, p = l > 0 ? "end" : "start", f = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, h = v * n, g = v > 0 ? "end" : "start", y = v > 0 ? "start" : "end";
  if (o === "top") {
    var w = {
      x: a + c / 2,
      y: s - l * n,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Be(Be({}, w), i ? {
      height: Math.max(s - i.y, 0),
      width: c
    } : {});
  }
  if (o === "bottom") {
    var x = {
      x: a + c / 2,
      y: s + u + d,
      textAnchor: "middle",
      verticalAnchor: f
    };
    return Be(Be({}, x), i ? {
      height: Math.max(i.y + i.height - (s + u), 0),
      width: c
    } : {});
  }
  if (o === "left") {
    var S = {
      x: a - h,
      y: s + u / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Be(Be({}, S), i ? {
      width: Math.max(S.x - i.x, 0),
      height: u
    } : {});
  }
  if (o === "right") {
    var E = {
      x: a + c + h,
      y: s + u / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return Be(Be({}, E), i ? {
      width: Math.max(i.x + i.width - E.x, 0),
      height: u
    } : {});
  }
  var P = i ? {
    width: c,
    height: u
  } : {};
  return o === "insideLeft" ? Be({
    x: a + h,
    y: s + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, P) : o === "insideRight" ? Be({
    x: a + c - h,
    y: s + u / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, P) : o === "insideTop" ? Be({
    x: a + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: f
  }, P) : o === "insideBottom" ? Be({
    x: a + c / 2,
    y: s + u - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, P) : o === "insideTopLeft" ? Be({
    x: a + h,
    y: s + d,
    textAnchor: y,
    verticalAnchor: f
  }, P) : o === "insideTopRight" ? Be({
    x: a + c - h,
    y: s + d,
    textAnchor: g,
    verticalAnchor: f
  }, P) : o === "insideBottomLeft" ? Be({
    x: a + h,
    y: s + u - d,
    textAnchor: y,
    verticalAnchor: p
  }, P) : o === "insideBottomRight" ? Be({
    x: a + c - h,
    y: s + u - d,
    textAnchor: g,
    verticalAnchor: p
  }, P) : o && typeof o == "object" && (Q(o.x) || Nr(o.x)) && (Q(o.y) || Nr(o.y)) ? Be({
    x: a + ct(o.x, c),
    y: s + ct(o.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, P) : Be({
    x: a + c / 2,
    y: s + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, P);
}, rH = {
  offset: 5
};
function Hr(e) {
  var t = Ge(e, rH), {
    viewBox: r,
    position: n,
    value: o,
    children: i,
    content: a,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, l = Xq(), d = JC(), p = n === "center" ? d : l ?? d, f = r || p;
  if (!f || Ce(o) && Ce(i) && !/* @__PURE__ */ Kt(a) && typeof a != "function")
    return null;
  var v = Be(Be({}, t), {}, {
    viewBox: f
  });
  if (/* @__PURE__ */ Kt(a)) {
    var {
      labelRef: h
    } = v, g = Wq(v, Uq);
    return /* @__PURE__ */ Ei(a, g);
  }
  var y;
  if (typeof a == "function") {
    if (y = /* @__PURE__ */ ri(a, v), /* @__PURE__ */ Kt(y))
      return y;
  } else
    y = Zq(t);
  var w = QC(f), x = mt(t);
  if (w && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return Qq(t, n, y, x, f);
  var S = w ? eH(f, t.offset, t.position) : tH(t, f);
  return /* @__PURE__ */ m.createElement(ul, Er({
    ref: u,
    className: pe("recharts-label", s)
  }, x, S, {
    breakAll: c
  }), y);
}
Hr.displayName = "Label";
var nH = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ m.createElement(Hr, Er({
    key: "label-implicit"
  }, n)) : hr(e) ? /* @__PURE__ */ m.createElement(Hr, Er({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Kt(e) ? e.type === Hr ? /* @__PURE__ */ Ei(e, Be({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ m.createElement(Hr, Er({
    key: "label-implicit",
    content: e
  }, n)) : sm(e) ? /* @__PURE__ */ m.createElement(Hr, Er({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ m.createElement(Hr, Er({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function oH(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = JC();
  return nH(t, n, r) || null;
}
var id = {}, ad = {}, Yb;
function iH() {
  return Yb || (Yb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(ad)), ad;
}
var sd = {}, Xb;
function aH() {
  return Xb || (Xb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(sd)), sd;
}
var Zb;
function sH() {
  return Zb || (Zb = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iH(), r = /* @__PURE__ */ aH(), n = /* @__PURE__ */ Up();
    function o(i) {
      if (n.isArrayLike(i))
        return t.last(r.toArray(i));
    }
    e.last = o;
  })(id)), id;
}
var cd, Jb;
function cH() {
  return Jb || (Jb = 1, cd = sH().last), cd;
}
var lH = /* @__PURE__ */ cH();
const uH = /* @__PURE__ */ sn(lH);
var dH = ["valueAccessor"], fH = ["dataKey", "clockWise", "id", "textBreakAll"];
function Rs() {
  return Rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rs.apply(null, arguments);
}
function Qb(e, t) {
  if (e == null) return {};
  var r, n, o = pH(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function pH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var hH = (e) => Array.isArray(e.value) ? uH(e.value) : e.value, eT = /* @__PURE__ */ Dt(void 0), cm = eT.Provider, tT = /* @__PURE__ */ Dt(void 0), mH = tT.Provider;
function vH() {
  return tr(eT);
}
function gH() {
  return tr(tT);
}
function Ha(e) {
  var {
    valueAccessor: t = hH
  } = e, r = Qb(e, dH), {
    dataKey: n,
    clockWise: o,
    id: i,
    textBreakAll: a
  } = r, s = Qb(r, fH), c = vH(), u = gH(), l = c || u;
  return !l || !l.length ? null : /* @__PURE__ */ m.createElement($e, {
    className: "recharts-label-list"
  }, l.map((d, p) => {
    var f, v = Ce(n) ? t(d, p) : Se(d && d.payload, n), h = Ce(i) ? {} : {
      id: "".concat(i, "-").concat(p)
    };
    return /* @__PURE__ */ m.createElement(Hr, Rs({
      key: "label-".concat(p)
      // eslint-disable-line react/no-array-index-key
    }, mt(d), s, h, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (f = r.fill) !== null && f !== void 0 ? f : d.fill,
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: a,
      viewBox: d.viewBox,
      index: p
    }));
  }));
}
Ha.displayName = "LabelList";
function dl(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ m.createElement(Ha, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ m.isValidElement(t) || sm(t) ? /* @__PURE__ */ m.createElement(Ha, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ m.createElement(Ha, Rs({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nf.apply(null, arguments);
}
var lm = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: o
  } = e, i = pe("recharts-dot", o);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ m.createElement("circle", Nf({}, ht(e), Bp(e), {
    className: i,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, rT = (e) => e.graphicalItems.polarItems, yH = k([Me, Xi], Rh), fl = k([rT, De, yH], Mh), bH = k([fl], Dh), pl = k([bH, Sh], jh), wH = k([pl, De, fl], $h);
k([pl, De, fl], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((o) => {
  var i, a = Se(n, (i = t.dataKey) !== null && i !== void 0 ? i : o.dataKey);
  return {
    value: a,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: Se(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var ew = () => {
}, xH = k([pl, De, fl, ol, Me], Uh), EH = k([De, Fh, zh, ew, xH, ew, fe, Me], Wh), nT = k([De, fe, pl, wH, Yi, Me, EH], Kh), SH = k([nT, De, Do], Hh);
k([De, nT, SH, Me], Yh);
var PH = {
  radiusAxis: {},
  angleAxis: {}
}, oT = Lt({
  name: "polarAxis",
  initialState: PH,
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
  addRadiusAxis: Y7,
  removeRadiusAxis: X7,
  addAngleAxis: Z7,
  removeAngleAxis: J7
} = oT.actions, OH = oT.reducer;
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
      AH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AH(e, t, r) {
  return (t = CH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CH(e) {
  var t = TH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _H = (e, t) => t, um = k([rT, _H], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), kH = [], dm = (e, t, r) => r?.length === 0 ? kH : r, iT = k([Sh, um, dm], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var o;
    if (t?.data != null && t.data.length > 0 ? o = t.data : o = n, (!o || !o.length) && r != null && (o = r.map((i) => rw(rw({}, t.presentationProps), i.props))), o != null)
      return o;
  }
}), NH = k([iT, um, dm], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, o) => {
      var i, a = Se(n, t.nameKey, t.name), s;
      return r != null && (i = r[o]) !== null && i !== void 0 && (i = i.props) !== null && i !== void 0 && i.fill ? s = r[o].props.fill : typeof n == "object" && n != null && "fill" in n ? s = n.fill : s = t.fill, {
        value: cn(a, t.dataKey),
        color: s,
        payload: n,
        type: t.legendType
      };
    });
}), IH = k([iT, um, dm, He], (e, t, r, n) => {
  if (!(t == null || e == null))
    return R8({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Ra = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nw;
function RH() {
  if (nw) return we;
  nw = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), f = Symbol.for("react.client.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case c:
            case u:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case d:
                case l:
                  return h;
                case i:
                  return h;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return we.ContextConsumer = i, we.ContextProvider = a, we.Element = e, we.ForwardRef = s, we.Fragment = r, we.Lazy = d, we.Memo = l, we.Portal = t, we.Profiler = o, we.StrictMode = n, we.Suspense = c, we.SuspenseList = u, we.isContextConsumer = function(h) {
    return v(h) === i;
  }, we.isContextProvider = function(h) {
    return v(h) === a;
  }, we.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, we.isForwardRef = function(h) {
    return v(h) === s;
  }, we.isFragment = function(h) {
    return v(h) === r;
  }, we.isLazy = function(h) {
    return v(h) === d;
  }, we.isMemo = function(h) {
    return v(h) === l;
  }, we.isPortal = function(h) {
    return v(h) === t;
  }, we.isProfiler = function(h) {
    return v(h) === o;
  }, we.isStrictMode = function(h) {
    return v(h) === n;
  }, we.isSuspense = function(h) {
    return v(h) === c;
  }, we.isSuspenseList = function(h) {
    return v(h) === u;
  }, we.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === c || h === u || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === l || h.$$typeof === a || h.$$typeof === i || h.$$typeof === s || h.$$typeof === f || h.getModuleId !== void 0);
  }, we.typeOf = v, we;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ow;
function MH() {
  return ow || (ow = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (typeof h == "object" && h !== null) {
        var g = h.$$typeof;
        switch (g) {
          case t:
            switch (h = h.type, h) {
              case n:
              case i:
              case o:
              case u:
              case l:
              case f:
                return h;
              default:
                switch (h = h && h.$$typeof, h) {
                  case s:
                  case c:
                  case p:
                  case d:
                    return h;
                  case a:
                    return h;
                  default:
                    return g;
                }
            }
          case r:
            return g;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    xe.ContextConsumer = a, xe.ContextProvider = s, xe.Element = t, xe.ForwardRef = c, xe.Fragment = n, xe.Lazy = p, xe.Memo = d, xe.Portal = r, xe.Profiler = i, xe.StrictMode = o, xe.Suspense = u, xe.SuspenseList = l, xe.isContextConsumer = function(h) {
      return e(h) === a;
    }, xe.isContextProvider = function(h) {
      return e(h) === s;
    }, xe.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, xe.isForwardRef = function(h) {
      return e(h) === c;
    }, xe.isFragment = function(h) {
      return e(h) === n;
    }, xe.isLazy = function(h) {
      return e(h) === p;
    }, xe.isMemo = function(h) {
      return e(h) === d;
    }, xe.isPortal = function(h) {
      return e(h) === r;
    }, xe.isProfiler = function(h) {
      return e(h) === i;
    }, xe.isStrictMode = function(h) {
      return e(h) === o;
    }, xe.isSuspense = function(h) {
      return e(h) === u;
    }, xe.isSuspenseList = function(h) {
      return e(h) === l;
    }, xe.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === n || h === i || h === o || h === u || h === l || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === d || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || h.$$typeof === v || h.getModuleId !== void 0);
    }, xe.typeOf = e;
  })()), xe;
}
var iw;
function DH() {
  return iw || (iw = 1, process.env.NODE_ENV === "production" ? Ra.exports = /* @__PURE__ */ RH() : Ra.exports = /* @__PURE__ */ MH()), Ra.exports;
}
var jH = /* @__PURE__ */ DH(), aw = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", sw = null, ld = null, aT = (e) => {
  if (e === sw && Array.isArray(ld))
    return ld;
  var t = [];
  return t_.forEach(e, (r) => {
    Ce(r) || (jH.isFragment(r) ? t = t.concat(aT(r.props.children)) : t.push(r));
  }), ld = t, sw = e, t;
};
function fm(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((o) => aw(o)) : n = [aw(t)], aT(e).forEach((o) => {
    var i = Mn(o, "type.displayName") || Mn(o, "type.name");
    n.indexOf(i) !== -1 && r.push(o);
  }), r;
}
var hl = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, ud = {}, cw;
function LH() {
  return cw || (cw = 1, (function(e) {
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
  })(ud)), ud;
}
var dd, lw;
function $H() {
  return lw || (lw = 1, dd = LH().isPlainObject), dd;
}
var BH = /* @__PURE__ */ $H();
const FH = /* @__PURE__ */ sn(BH);
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
function dw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uw(Object(r), !0).forEach(function(n) {
      zH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uw(Object(r)).forEach(function(n) {
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
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ms.apply(null, arguments);
}
var fw = (e, t, r, n, o) => {
  var i = r - n, a;
  return a = "M ".concat(e, ",").concat(t), a += "L ".concat(e + r, ",").concat(t), a += "L ".concat(e + r - i / 2, ",").concat(t + o), a += "L ".concat(e + r - i / 2 - n, ",").concat(t + o), a += "L ".concat(e, ",").concat(t, " Z"), a;
}, KH = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, VH = (e) => {
  var t = Ge(e, KH), {
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
  } = t, p = ye(null), [f, v] = je(-1), h = ye(o), g = ye(i), y = ye(a), w = ye(r), x = ye(n), S = To(e, "trapezoid-");
  if (Le(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var C = p.current.getTotalLength();
        C && v(C);
      } catch {
      }
  }, []), r !== +r || n !== +n || o !== +o || i !== +i || a !== +a || o === 0 && i === 0 || a === 0)
    return null;
  var E = pe("recharts-trapezoid", s);
  if (!d)
    return /* @__PURE__ */ m.createElement("g", null, /* @__PURE__ */ m.createElement("path", Ms({}, mt(t), {
      className: E,
      d: fw(r, n, o, i, a)
    })));
  var P = h.current, O = g.current, A = y.current, _ = w.current, N = x.current, T = "0px ".concat(f === -1 ? 1 : f, "px"), I = "".concat(f, "px 0px"), j = N1(["strokeDasharray"], u, c);
  return /* @__PURE__ */ m.createElement(Co, {
    animationId: S,
    key: S,
    canBegin: f > 0,
    duration: u,
    easing: c,
    isActive: d,
    begin: l
  }, (C) => {
    var D = Ee(P, o, C), $ = Ee(O, i, C), z = Ee(A, a, C), M = Ee(_, r, C), F = Ee(N, n, C);
    p.current && (h.current = D, g.current = $, y.current = z, w.current = M, x.current = F);
    var oe = C > 0 ? {
      transition: j,
      strokeDasharray: I
    } : {
      strokeDasharray: T
    };
    return /* @__PURE__ */ m.createElement("path", Ms({}, mt(t), {
      className: E,
      d: fw(M, F, D, $, z),
      ref: p,
      style: dw(dw({}, oe), t.style)
    }));
  });
}, qH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function HH(e, t) {
  if (e == null) return {};
  var r, n, o = GH(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function GH(e, t) {
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
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pw(Object(r), !0).forEach(function(n) {
      YH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YH(e, t, r) {
  return (t = XH(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XH(e) {
  var t = ZH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZH(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JH(e, t) {
  return Ds(Ds({}, t), e);
}
function QH(e, t) {
  return e === "symbols";
}
function hw(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ m.createElement(D1, r);
    case "trapezoid":
      return /* @__PURE__ */ m.createElement(VH, r);
    case "sector":
      return /* @__PURE__ */ m.createElement($1, r);
    case "symbols":
      if (QH(t))
        return /* @__PURE__ */ m.createElement($p, r);
      break;
    default:
      return null;
  }
}
function e8(e) {
  return /* @__PURE__ */ Kt(e) ? e.props : e;
}
function sT(e) {
  var {
    option: t,
    shapeType: r,
    propTransformer: n = JH,
    activeClassName: o = "recharts-active-shape",
    isActive: i
  } = e, a = HH(e, qH), s;
  if (/* @__PURE__ */ Kt(t))
    s = /* @__PURE__ */ Ei(t, Ds(Ds({}, a), e8(t)));
  else if (typeof t == "function")
    s = t(a);
  else if (FH(t) && typeof t != "boolean") {
    var c = n(t, a);
    s = /* @__PURE__ */ m.createElement(hw, {
      shapeType: r,
      elementProps: c
    });
  } else {
    var u = a;
    s = /* @__PURE__ */ m.createElement(hw, {
      shapeType: r,
      elementProps: u
    });
  }
  return i ? /* @__PURE__ */ m.createElement($e, {
    className: o
  }, s) : s;
}
var pm = (e, t) => {
  var r = Re();
  return (n, o) => (i) => {
    e?.(n, o, i), r(wC({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
}, hm = (e) => {
  var t = Re();
  return (r, n) => (o) => {
    e?.(r, n, o), t(U5());
  };
}, mm = (e, t) => {
  var r = Re();
  return (n, o) => (i) => {
    e?.(n, o, i), r(W5({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
};
function ml(e) {
  var {
    fn: t,
    args: r
  } = e, n = Re(), o = ot();
  return fr(() => {
    if (!o) {
      var i = t(r);
      return n(B5(i)), () => {
        n(F5(i));
      };
    }
  }, [t, r, n, o]), null;
}
var cT = () => {
};
function vm(e) {
  var {
    legendPayload: t
  } = e, r = Re(), n = ot();
  return fr(() => n ? cT : (r(T1(t)), () => {
    r(_1(t));
  }), [r, n, t]), null;
}
function t8(e) {
  var {
    legendPayload: t
  } = e, r = Re(), n = ee(fe);
  return fr(() => n !== "centric" && n !== "radial" ? cT : (r(T1(t)), () => {
    r(_1(t));
  }), [r, n, t]), null;
}
var fd, r8 = () => {
  var [e] = m.useState(() => li("uid-"));
  return e;
}, n8 = (fd = m.useId) !== null && fd !== void 0 ? fd : r8;
function o8(e, t) {
  var r = n8();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var i8 = /* @__PURE__ */ Dt(void 0), vl = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, o = o8("recharts-".concat(r), t);
  return /* @__PURE__ */ m.createElement(i8.Provider, {
    value: o
  }, n(o));
}, a8 = {
  cartesianItems: [],
  polarItems: []
}, lT = Lt({
  name: "graphicalItems",
  initialState: a8,
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
        } = t.payload, o = Ar(e).cartesianItems.indexOf(r);
        o > -1 && (e.cartesianItems[o] = n);
      },
      prepare: ut()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Ar(e).cartesianItems.indexOf(t.payload);
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
        var r = Ar(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ut()
    }
  }
}), {
  addCartesianGraphicalItem: s8,
  replaceCartesianGraphicalItem: c8,
  removeCartesianGraphicalItem: l8,
  addPolarGraphicalItem: u8,
  removePolarGraphicalItem: d8
} = lT.actions, f8 = lT.reducer;
function gm(e) {
  var t = Re(), r = ye(null);
  return fr(() => {
    r.current === null ? t(s8(e)) : r.current !== e && t(c8({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), fr(() => () => {
    r.current && (t(l8(r.current)), r.current = null);
  }, [t]), null;
}
function p8(e) {
  var t = Re();
  return fr(() => (t(u8(e)), () => {
    t(d8(e));
  }), [t, e]), null;
}
var h8 = ["onMouseEnter", "onClick", "onMouseLeave"], m8 = ["id"], v8 = ["id"];
function ym(e, t) {
  if (e == null) return {};
  var r, n, o = g8(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function g8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function mw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mw(Object(r), !0).forEach(function(n) {
      y8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mw(Object(r)).forEach(function(n) {
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
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tn.apply(null, arguments);
}
function x8(e) {
  var t = rr(() => fm(e.children, na), [e.children]), r = ee((n) => NH(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ m.createElement(t8, {
    legendPayload: r
  });
}
function E8(e) {
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
      name: cn(s, t),
      hide: c,
      type: u,
      color: a,
      unit: ""
      // why doesn't Pie support unit?
    }
  };
}
var S8 = (e, t) => e > t ? "start" : e < t ? "end" : "middle", P8 = (e, t, r) => ct(typeof t == "function" ? t(e) : t, r, r * 0.8), O8 = (e, t, r) => {
  var {
    top: n,
    left: o,
    width: i,
    height: a
  } = t, s = m1(i, a), c = o + ct(e.cx, i, i / 2), u = n + ct(e.cy, a, a / 2), l = ct(e.innerRadius, s, 0), d = P8(r, e.outerRadius, s), p = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: c,
    cy: u,
    innerRadius: l,
    outerRadius: d,
    maxRadius: p
  };
}, A8 = (e, t) => {
  var r = Qe(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function C8(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var T8 = (e, t) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = pe("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
  return /* @__PURE__ */ m.createElement(no, tn({}, t, {
    type: "linear",
    className: r
  }));
}, _8 = (e, t, r) => {
  if (/* @__PURE__ */ m.isValidElement(e))
    return /* @__PURE__ */ m.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ m.isValidElement(n)))
    return n;
  var o = pe("recharts-pie-label-text", C8(e));
  return /* @__PURE__ */ m.createElement(ul, tn({}, t, {
    alignmentBaseline: "middle",
    className: o
  }), n);
};
function k8(e) {
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
  var s = ht(r), c = Rn(o), u = Rn(i), l = typeof o == "object" && "offsetRadius" in o && typeof o.offsetRadius == "number" && o.offsetRadius || 20, d = t.map((p, f) => {
    var v = (p.startAngle + p.endAngle) / 2, h = ze(p.cx, p.cy, p.outerRadius + l, v), g = _e(_e(_e(_e({}, s), p), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, c), {}, {
      index: f,
      textAnchor: S8(h.x, p.cx)
    }, h), y = _e(_e(_e(_e({}, s), p), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: p.fill
    }, u), {}, {
      index: f,
      points: [ze(p.cx, p.cy, p.outerRadius, v), h],
      key: "line"
    });
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ m.createElement($e, {
        key: "label-".concat(p.startAngle, "-").concat(p.endAngle, "-").concat(p.midAngle, "-").concat(f)
      }, i && T8(i, y), _8(o, g, Se(p, a)))
    );
  });
  return /* @__PURE__ */ m.createElement($e, {
    className: "recharts-pie-labels"
  }, d);
}
function N8(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: o
  } = r;
  return typeof o == "object" && o != null && "position" in o ? /* @__PURE__ */ m.createElement(dl, {
    label: o
  }) : /* @__PURE__ */ m.createElement(k8, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function I8(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: o
  } = e, i = ee(en), {
    onMouseEnter: a,
    onClick: s,
    onMouseLeave: c
  } = o, u = ym(o, h8), l = pm(a, o.dataKey), d = hm(c), p = mm(s, o.dataKey);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((f, v) => {
    if (f?.startAngle === 0 && f?.endAngle === 0 && t.length !== 1) return null;
    var h = r && String(v) === i, g = i ? n : null, y = h ? r : g, w = _e(_e({}, f), {}, {
      stroke: f.stroke,
      tabIndex: -1,
      [x1]: v,
      [E1]: o.dataKey
    });
    return /* @__PURE__ */ m.createElement(
      $e,
      tn({
        key: "sector-".concat(f?.startAngle, "-").concat(f?.endAngle, "-").concat(f.midAngle, "-").concat(v),
        tabIndex: -1,
        className: "recharts-pie-sector"
      }, Li(u, f, v), {
        // @ts-expect-error the types need a bit of attention
        onMouseEnter: l(f, v),
        onMouseLeave: d(f, v),
        onClick: p(f, v)
      }),
      /* @__PURE__ */ m.createElement(sT, tn({
        option: y,
        isActive: h,
        shapeType: "sector"
      }, w))
    );
  }));
}
function R8(e) {
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
  } = r, p = Math.abs(r.minAngle), f = A8(s, c), v = Math.abs(f), h = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, g = n.filter((P) => Se(P, u, 0) !== 0).length, y = (v >= 360 ? g : g - 1) * h, w = v - g * p - y, x = n.reduce((P, O) => {
    var A = Se(O, u, 0);
    return P + (Q(A) ? A : 0);
  }, 0), S;
  if (x > 0) {
    var E;
    S = n.map((P, O) => {
      var A = Se(P, u, 0), _ = Se(P, l, O), N = O8(r, i, P), T = (Q(A) ? A : 0) / x, I, j = _e(_e({}, P), o && o[O] && o[O].props);
      O ? I = E.endAngle + Qe(f) * h * (A !== 0 ? 1 : 0) : I = s;
      var C = I + Qe(f) * ((A !== 0 ? p : 0) + T * w), D = (I + C) / 2, $ = (N.innerRadius + N.outerRadius) / 2, z = [{
        name: _,
        value: A,
        payload: j,
        dataKey: u,
        type: d
      }], M = ze(N.cx, N.cy, $, D);
      return E = _e(_e(_e(_e({}, r.presentationProps), {}, {
        percent: T,
        cornerRadius: a,
        name: _,
        tooltipPayload: z,
        midAngle: D,
        middleRadius: $,
        tooltipPosition: M
      }, j), N), {}, {
        value: A,
        startAngle: I,
        endAngle: C,
        payload: j,
        paddingAngle: Qe(f) * h
      }), E;
    });
  }
  return S;
}
function M8(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, o = rr(() => !t || !r ? [] : r.map((i) => ({
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
  return /* @__PURE__ */ m.createElement(mH, {
    value: t ? o : void 0
  }, n);
}
function D8(e) {
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
  } = t, p = To(t, "recharts-pie-"), f = r.current, [v, h] = je(!1), g = he(() => {
    typeof d == "function" && d(), h(!1);
  }, [d]), y = he(() => {
    typeof l == "function" && l(), h(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(M8, {
    showLabels: !v,
    sectors: n
  }, /* @__PURE__ */ m.createElement(Co, {
    animationId: p,
    begin: i,
    duration: a,
    isActive: o,
    easing: s,
    onAnimationStart: y,
    onAnimationEnd: g,
    key: p
  }, (w) => {
    var x = [], S = n && n[0], E = S?.startAngle;
    return n?.forEach((P, O) => {
      var A = f && f[O], _ = O > 0 ? Mn(P, "paddingAngle", 0) : 0;
      if (A) {
        var N = Ee(A.endAngle - A.startAngle, P.endAngle - P.startAngle, w), T = _e(_e({}, P), {}, {
          startAngle: E + _,
          endAngle: E + N + _
        });
        x.push(T), E = T.endAngle;
      } else {
        var {
          endAngle: I,
          startAngle: j
        } = P, C = Ee(0, I - j, w), D = _e(_e({}, P), {}, {
          startAngle: E + _,
          endAngle: E + C + _
        });
        x.push(D), E = D.endAngle;
      }
    }), r.current = x, /* @__PURE__ */ m.createElement($e, null, /* @__PURE__ */ m.createElement(I8, {
      sectors: x,
      activeShape: c,
      inactiveShape: u,
      allOtherPieProps: t
    }));
  }), /* @__PURE__ */ m.createElement(N8, {
    showLabels: !v,
    sectors: n,
    props: t
  }), t.children);
}
var j8 = {
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
function L8(e) {
  var {
    id: t
  } = e, r = ym(e, m8), {
    hide: n,
    className: o,
    rootTabIndex: i
  } = e, a = rr(() => fm(e.children, na), [e.children]), s = ee((l) => IH(l, t, a)), c = ye(null), u = pe("recharts-pie", o);
  return n || s == null ? (c.current = null, /* @__PURE__ */ m.createElement($e, {
    tabIndex: i,
    className: u
  })) : /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ml, {
    fn: E8,
    args: _e(_e({}, e), {}, {
      sectors: s
    })
  }), /* @__PURE__ */ m.createElement($e, {
    tabIndex: i,
    className: u
  }, /* @__PURE__ */ m.createElement(D8, {
    props: _e(_e({}, r), {}, {
      sectors: s
    }),
    previousSectorsRef: c
  })));
}
function uT(e) {
  var t = Ge(e, j8), {
    id: r
  } = t, n = ym(t, v8), o = ht(n);
  return /* @__PURE__ */ m.createElement(vl, {
    id: r,
    type: "pie"
  }, (i) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(p8, {
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
  }), /* @__PURE__ */ m.createElement(x8, tn({}, n, {
    id: i
  })), /* @__PURE__ */ m.createElement(L8, tn({}, n, {
    id: i
  }))));
}
uT.displayName = "Pie";
function vw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vw(Object(r), !0).forEach(function(n) {
      $8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $8(e, t, r) {
  return (t = B8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B8(e) {
  var t = F8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var z8 = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, dT = Lt({
  name: "cartesianAxis",
  initialState: z8,
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
        e.yAxis[r] = gw(gw({}, e.yAxis[r]), {}, {
          width: n,
          widthHistory: a
        });
      }
    }
  }
}), {
  addXAxis: U8,
  removeXAxis: W8,
  addYAxis: K8,
  removeYAxis: V8,
  addZAxis: Q7,
  removeZAxis: eZ,
  updateYAxisWidth: q8
} = dT.actions, H8 = dT.reducer, G8 = k([He], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), Y8 = k([G8, jr, Lr], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), gl = () => ee(Y8), X8 = () => ee(_V);
function yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      Z8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z8(e, t, r) {
  return (t = J8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J8(e) {
  var t = Q8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var e6 = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: o,
    dataKey: i
  } = e;
  if (o === !1 || t.x == null || t.y == null)
    return null;
  var a = bw(bw({
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
  }, Rn(o)), Bp(o)), s;
  return /* @__PURE__ */ Kt(o) ? s = /* @__PURE__ */ Ei(o, a) : typeof o == "function" ? s = o(a) : s = /* @__PURE__ */ m.createElement(lm, a), /* @__PURE__ */ m.createElement($e, {
    className: "recharts-active-dot"
  }, s);
};
function If(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: o
  } = e, i = ee(en), a = X8();
  if (t == null || a == null)
    return null;
  var s = t.find((c) => a.includes(c.payload));
  return Ce(s) ? null : e6({
    point: s,
    childIndex: Number(i),
    mainColor: r,
    dataKey: o,
    activeDot: n
  });
}
var t6 = process.env.NODE_ENV === "production", pd = "Invariant failed";
function ww(e, t) {
  if (t6)
    throw new Error(pd);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(pd, ": ").concat(r) : pd;
  throw new Error(n);
}
var r6 = ["x", "y"];
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rf.apply(null, arguments);
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
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      n6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n6(e, t, r) {
  return (t = o6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o6(e) {
  var t = i6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function i6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a6(e, t) {
  if (e == null) return {};
  var r, n, o = s6(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function s6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function c6(e, t) {
  var {
    x: r,
    y: n
  } = e, o = a6(e, r6), i = "".concat(r), a = parseInt(i, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || o.height), l = parseInt(u, 10), d = "".concat(t.width || o.width), p = parseInt(d, 10);
  return Go(Go(Go(Go(Go({}, t), o), a ? {
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
function bm(e) {
  return /* @__PURE__ */ m.createElement(sT, Rf({
    shapeType: "rectangle",
    propTransformer: c6,
    activeClassName: "recharts-active-bar"
  }, e));
}
var l6 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, o) => {
    if (Q(t)) return t;
    var i = Q(n) || Ce(n);
    return i ? t(n, o) : (i || (process.env.NODE_ENV !== "production" ? ww(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")) : ww()), r);
  };
}, u6 = {}, fT = Lt({
  name: "errorBars",
  initialState: u6,
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
  addErrorBar: tZ,
  replaceErrorBar: rZ,
  removeErrorBar: nZ
} = fT.actions, d6 = fT.reducer, f6 = ["children"];
function p6(e, t) {
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
var m6 = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, v6 = /* @__PURE__ */ Dt(m6);
function pT(e) {
  var {
    children: t
  } = e, r = p6(e, f6);
  return /* @__PURE__ */ m.createElement(v6.Provider, {
    value: r
  }, t);
}
function yl(e, t) {
  var r, n, o = ee((u) => Fr(u, e)), i = ee((u) => zr(u, t)), a = (r = o?.allowDataOverflow) !== null && r !== void 0 ? r : Pt.allowDataOverflow, s = (n = i?.allowDataOverflow) !== null && n !== void 0 ? n : Ot.allowDataOverflow, c = a || s;
  return {
    needClip: c,
    needClipX: a,
    needClipY: s
  };
}
function wm(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, o = gl(), {
    needClipX: i,
    needClipY: a,
    needClip: s
  } = yl(t, r);
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
var g6 = ["onMouseEnter", "onMouseLeave", "onClick"], y6 = ["value", "background", "tooltipPosition"], b6 = ["id"], w6 = ["onMouseEnter", "onClick", "onMouseLeave"];
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rn.apply(null, arguments);
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
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ew(Object(r), !0).forEach(function(n) {
      x6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x6(e, t, r) {
  return (t = E6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E6(e) {
  var t = S6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function S6(e, t) {
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
var O6 = (e) => {
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
    value: cn(r, t),
    payload: e
  }];
};
function A6(e) {
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
      name: cn(i, t),
      hide: a,
      type: e.tooltipType,
      color: e.fill,
      unit: s
    }
  };
}
function C6(e) {
  var t = ee(en), {
    data: r,
    dataKey: n,
    background: o,
    allOtherBarProps: i
  } = e, {
    onMouseEnter: a,
    onMouseLeave: s,
    onClick: c
  } = i, u = js(i, g6), l = pm(a, n), d = hm(s), p = mm(c, n);
  if (!o || r == null)
    return null;
  var f = Rn(o);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, r.map((v, h) => {
    var {
      value: g,
      background: y,
      tooltipPosition: w
    } = v, x = js(v, y6);
    if (!y)
      return null;
    var S = l(v, h), E = d(v, h), P = p(v, h), O = dt(dt(dt(dt(dt({
      option: o,
      isActive: String(h) === t
    }, x), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), f), Li(u, v, h)), {}, {
      onMouseEnter: S,
      onMouseLeave: E,
      onClick: P,
      dataKey: n,
      index: h,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ m.createElement(bm, rn({
      key: "background-bar-".concat(h)
    }, O));
  }));
}
function T6(e) {
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
  return /* @__PURE__ */ m.createElement(cm, {
    value: t ? o : void 0
  }, r);
}
function _6(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: o,
    index: i,
    dataKey: a
  } = e, s = ee(en), c = ee(DC), u = r && String(i) === s && (c == null || a === c), l = u ? r : t;
  return /* @__PURE__ */ m.createElement(bm, rn({}, n, {
    name: String(n.name)
  }, o, {
    isActive: u,
    option: l,
    index: i,
    dataKey: a
  }));
}
function k6(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: o,
    dataKey: i
  } = e;
  return /* @__PURE__ */ m.createElement(bm, rn({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: o,
    dataKey: i
  }));
}
function N6(e) {
  var {
    data: t,
    props: r
  } = e, n = ht(r), {
    id: o
  } = n, i = js(n, b6), {
    shape: a,
    dataKey: s,
    activeBar: c
  } = r, {
    onMouseEnter: u,
    onClick: l,
    onMouseLeave: d
  } = r, p = js(r, w6), f = pm(u, s), v = hm(d), h = mm(l, s);
  return t ? /* @__PURE__ */ m.createElement(m.Fragment, null, t.map((g, y) => /* @__PURE__ */ m.createElement(
    $e,
    rn({
      key: "rectangle-".concat(g?.x, "-").concat(g?.y, "-").concat(g?.value, "-").concat(y),
      className: "recharts-bar-rectangle"
    }, Li(p, g, y), {
      // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
      onMouseEnter: f(g, y),
      onMouseLeave: v(g, y),
      onClick: h(g, y)
    }),
    c ? /* @__PURE__ */ m.createElement(_6, {
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
      /* @__PURE__ */ m.createElement(k6, {
        shape: a,
        baseProps: i,
        entry: g,
        index: y,
        dataKey: s
      })
    )
  ))) : null;
}
function I6(e) {
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
  } = t, d = r.current, p = To(t, "recharts-bar-"), [f, v] = je(!1), h = !f, g = he(() => {
    typeof u == "function" && u(), v(!1);
  }, [u]), y = he(() => {
    typeof l == "function" && l(), v(!0);
  }, [l]);
  return /* @__PURE__ */ m.createElement(T6, {
    showLabels: h,
    rects: n
  }, /* @__PURE__ */ m.createElement(Co, {
    animationId: p,
    begin: a,
    duration: s,
    isActive: i,
    easing: c,
    onAnimationEnd: g,
    onAnimationStart: y,
    key: p
  }, (w) => {
    var x = w === 1 ? n : n?.map((S, E) => {
      var P = d && d[E];
      if (P)
        return dt(dt({}, S), {}, {
          x: Ee(P.x, S.x, w),
          y: Ee(P.y, S.y, w),
          width: Ee(P.width, S.width, w),
          height: Ee(P.height, S.height, w)
        });
      if (o === "horizontal") {
        var O = Ee(0, S.height, w);
        return dt(dt({}, S), {}, {
          y: S.y + S.height - O,
          height: O
        });
      }
      var A = Ee(0, S.width, w);
      return dt(dt({}, S), {}, {
        width: A
      });
    });
    return w > 0 && (r.current = x ?? null), x == null ? null : /* @__PURE__ */ m.createElement($e, null, /* @__PURE__ */ m.createElement(N6, {
      props: t,
      data: x
    }));
  }), /* @__PURE__ */ m.createElement(dl, {
    label: t.label
  }), t.children);
}
function R6(e) {
  var t = ye(null);
  return /* @__PURE__ */ m.createElement(I6, {
    previousRectanglesRef: t,
    props: e
  });
}
var hT = 0, M6 = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: Se(e, t)
  };
};
class D6 extends xi {
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
    var l = pe("recharts-bar", o), d = u;
    return /* @__PURE__ */ m.createElement($e, {
      className: l,
      id: u
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(wm, {
      clipPathId: d,
      xAxisId: i,
      yAxisId: a
    })), /* @__PURE__ */ m.createElement($e, {
      className: "recharts-bar-rectangles",
      clipPath: s ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ m.createElement(C6, {
      data: r,
      dataKey: n,
      background: c,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ m.createElement(R6, this.props)));
  }
}
var j6 = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  hide: !1,
  isAnimationActive: !$r.isSsr,
  legendType: "rect",
  minPointSize: hT,
  xAxisId: 0,
  yAxisId: 0
};
function L6(e) {
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
  } = yl(t, r), p = Wi(), f = ot(), v = fm(e.children, na), h = ee((w) => dG(w, t, r, f, e.id, v));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var g, y = h?.[0];
  return y == null || y.height == null || y.width == null ? g = 0 : g = p === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ m.createElement(pT, {
    xAxisId: t,
    yAxisId: r,
    data: h,
    dataPointFormatter: M6,
    errorBarOffset: g
  }, /* @__PURE__ */ m.createElement(D6, rn({}, e, {
    layout: p,
    needClip: d,
    data: h,
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
function $6(e) {
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
    cells: f,
    parentViewBox: v
  } = e, h = t === "horizontal" ? s : a, g = l ? h.scale.domain() : null, y = Dz({
    numericAxis: h
  });
  return d.map((w, x) => {
    var S, E, P, O, A, _;
    l ? S = kz(l[x], g) : (S = Se(w, r), Array.isArray(S) || (S = [y, S]));
    var N = l6(n, hT)(S[1], x);
    if (t === "horizontal") {
      var T, [I, j] = [s.scale(S[0]), s.scale(S[1])];
      E = Qg({
        axis: a,
        ticks: c,
        bandSize: i,
        offset: o.offset,
        entry: w,
        index: x
      }), P = (T = j ?? I) !== null && T !== void 0 ? T : void 0, O = o.size;
      var C = I - j;
      if (A = Rt(C) ? 0 : C, _ = {
        x: E,
        y: p.top,
        width: O,
        height: p.height
      }, Math.abs(N) > 0 && Math.abs(A) < Math.abs(N)) {
        var D = Qe(A || N) * (Math.abs(N) - Math.abs(A));
        P -= D, A += D;
      }
    } else {
      var [$, z] = [a.scale(S[0]), a.scale(S[1])];
      if (E = $, P = Qg({
        axis: s,
        ticks: u,
        bandSize: i,
        offset: o.offset,
        entry: w,
        index: x
      }), O = z - $, A = o.size, _ = {
        x: p.left,
        y: P,
        width: p.width,
        height: A
      }, Math.abs(N) > 0 && Math.abs(O) < Math.abs(N)) {
        var M = Qe(O || N) * (Math.abs(N) - Math.abs(O));
        O += M;
      }
    }
    if (E == null || P == null || O == null || A == null)
      return null;
    var F = dt(dt({}, w), {}, {
      x: E,
      y: P,
      width: O,
      height: A,
      value: l ? S : S[1],
      payload: w,
      background: _,
      tooltipPosition: {
        x: E + O / 2,
        y: P + A / 2
      },
      parentViewBox: v
    }, f && f[x] && f[x].props);
    return F;
  }).filter(Boolean);
}
function B6(e) {
  var t = Ge(e, j6), r = ot();
  return /* @__PURE__ */ m.createElement(vl, {
    id: t.id,
    type: "bar"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(vm, {
    legendPayload: O6(t)
  }), /* @__PURE__ */ m.createElement(ml, {
    fn: A6,
    args: t
  }), /* @__PURE__ */ m.createElement(gm, {
    type: "bar",
    id: n,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: b1(t.stackId),
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(L6, rn({}, t, {
    id: n
  }))));
}
var mT = /* @__PURE__ */ m.memo(B6);
mT.displayName = "Bar";
function Sw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), !0).forEach(function(n) {
      F6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F6(e, t, r) {
  return (t = z6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z6(e) {
  var t = U6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function U6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var W6 = (e, t) => t, K6 = (e, t, r) => r, V6 = (e, t, r, n) => n, q6 = (e, t, r, n, o) => o, oa = k([Ji, q6], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), H6 = k([oa], (e) => e?.maxBarSize), G6 = (e, t, r, n, o, i) => i, Pw = (e, t, r) => {
  var n = r ?? e;
  if (!Ce(n))
    return ct(n, t, 0);
}, Y6 = k([fe, Ji, W6, K6, V6], (e, t, r, n, o) => t.filter((i) => e === "horizontal" ? i.xAxisId === r : i.yAxisId === n).filter((i) => i.isPanorama === o).filter((i) => i.hide === !1).filter((i) => i.type === "bar")), X6 = (e, t, r, n) => {
  var o = fe(e);
  return o === "horizontal" ? bi(e, "yAxis", r, n) : bi(e, "xAxis", t, n);
}, Z6 = (e, t, r) => {
  var n = fe(e);
  return n === "horizontal" ? Sb(e, "xAxis", t) : Sb(e, "yAxis", r);
}, J6 = (e, t, r) => {
  var n = {}, o = e.filter(el), i = e.filter((u) => u.stackId == null), a = o.reduce((u, l) => (u[l.stackId] || (u[l.stackId] = []), u[l.stackId].push(l), u), n), s = Object.entries(a).map((u) => {
    var [l, d] = u, p = d.map((v) => v.dataKey), f = Pw(t, r, d[0].barSize);
    return {
      stackId: l,
      dataKeys: p,
      barSize: f
    };
  }), c = i.map((u) => {
    var l = [u.dataKey].filter((p) => p != null), d = Pw(t, r, u.barSize);
    return {
      stackId: void 0,
      dataKeys: l,
      barSize: d
    };
  });
  return [...s, ...c];
}, Q6 = k([Y6, DK, Z6], J6), eG = (e, t, r, n, o) => {
  var i, a, s = oa(e, t, r, n, o);
  if (s != null) {
    var c = fe(e), u = DA(e), {
      maxBarSize: l
    } = s, d = Ce(l) ? u : l, p, f;
    return c === "horizontal" ? (p = gr(e, "xAxis", t, n), f = vr(e, "xAxis", t, n)) : (p = gr(e, "yAxis", r, n), f = vr(e, "yAxis", r, n)), (i = (a = Ln(p, f, !0)) !== null && a !== void 0 ? a : d) !== null && i !== void 0 ? i : 0;
  }
}, vT = (e, t, r, n) => {
  var o = fe(e), i, a;
  return o === "horizontal" ? (i = gr(e, "xAxis", t, n), a = vr(e, "xAxis", t, n)) : (i = gr(e, "yAxis", r, n), a = vr(e, "yAxis", r, n)), Ln(i, a);
};
function tG(e, t, r, n, o) {
  var i = n.length;
  if (!(i < 1)) {
    var a = ct(e, r, 0, !0), s, c = [];
    if (We(n[0].barSize)) {
      var u = !1, l = r / i, d = n.reduce((y, w) => y + (w.barSize || 0), 0);
      d += (i - 1) * a, d >= r && (d -= (i - 1) * a, a = 0), d >= r && l > 0 && (u = !0, l *= 0.9, d = i * l);
      var p = (r - d) / 2 >> 0, f = {
        offset: p - a,
        size: 0
      };
      s = n.reduce((y, w) => {
        var x, S = {
          stackId: w.stackId,
          dataKeys: w.dataKeys,
          position: {
            offset: f.offset + f.size + a,
            size: u ? l : (x = w.barSize) !== null && x !== void 0 ? x : 0
          }
        }, E = [...y, S];
        return f = E[E.length - 1].position, E;
      }, c);
    } else {
      var v = ct(t, r, 0, !0);
      r - 2 * v - (i - 1) * a <= 0 && (a = 0);
      var h = (r - 2 * v - (i - 1) * a) / i;
      h > 1 && (h >>= 0);
      var g = We(o) ? Math.min(h, o) : h;
      s = n.reduce((y, w, x) => [...y, {
        stackId: w.stackId,
        dataKeys: w.dataKeys,
        position: {
          offset: v + (h + a) * x + (h - g) / 2,
          size: g
        }
      }], c);
    }
    return s;
  }
}
var rG = (e, t, r, n, o, i, a) => {
  var s = Ce(a) ? t : a, c = tG(r, n, o !== i ? o : i, e, s);
  return o !== i && c != null && (c = c.map((u) => Ma(Ma({}, u), {}, {
    position: Ma(Ma({}, u.position), {}, {
      offset: u.position.offset - o / 2
    })
  }))), c;
}, nG = k([Q6, DA, MK, jA, eG, vT, H6], rG), oG = (e, t, r, n) => gr(e, "xAxis", t, n), iG = (e, t, r, n) => gr(e, "yAxis", r, n), aG = (e, t, r, n) => vr(e, "xAxis", t, n), sG = (e, t, r, n) => vr(e, "yAxis", r, n), cG = k([nG, oa], (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
}), lG = (e, t) => {
  var r = Qc(t);
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
}, uG = k([X6, oa], lG), dG = k([He, Yp, oG, iG, aG, sG, cG, fe, Gi, vT, uG, oa, G6], (e, t, r, n, o, i, a, s, c, u, l, d, p) => {
  var {
    chartData: f,
    dataStartIndex: v,
    dataEndIndex: h
  } = c;
  if (!(d == null || a == null || t == null || s !== "horizontal" && s !== "vertical" || r == null || n == null || o == null || i == null || u == null)) {
    var {
      data: g
    } = d, y;
    if (g != null && g.length > 0 ? y = g : y = f?.slice(v, h + 1), y != null)
      return $6({
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
}), gT = (e) => {
  var {
    chartData: t
  } = e, r = Re(), n = ot();
  return Le(() => n ? () => {
  } : (r(Rb(t)), () => {
    r(Rb(void 0));
  }), [t, r, n]), null;
}, Ow = {
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
}, yT = Lt({
  name: "brush",
  initialState: Ow,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? Ow : t.payload;
    }
  }
}), {
  setBrushSettings: oZ
} = yT.actions, fG = yT.reducer;
function pG(e, t, r) {
  return (t = hG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hG(e) {
  var t = mG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class xm {
  static create(t) {
    return new xm(t);
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
pG(xm, "EPS", 1e-4);
function vG(e) {
  return (e % 180 + 180) % 180;
}
var gG = function(t) {
  var {
    width: r,
    height: n
  } = t, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = vG(o), a = i * Math.PI / 180, s = Math.atan(n / r), c = a > s && a < Math.PI - s ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(c);
}, yG = {
  dots: [],
  areas: [],
  lines: []
}, bT = Lt({
  name: "referenceElements",
  initialState: yG,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Ar(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Ar(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Ar(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: iZ,
  removeDot: aZ,
  addArea: sZ,
  removeArea: cZ,
  addLine: lZ,
  removeLine: uZ
} = bT.actions, bG = bT.reducer, wG = /* @__PURE__ */ Dt(void 0), xG = (e) => {
  var {
    children: t
  } = e, [r] = je("".concat(li("recharts"), "-clip")), n = gl();
  if (n == null)
    return null;
  var {
    x: o,
    y: i,
    width: a,
    height: s
  } = n;
  return /* @__PURE__ */ m.createElement(wG.Provider, {
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
function mo(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function wT(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], o = 0; o < e.length; o += t)
    n.push(e[o]);
  return n;
}
function EG(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return gG(n, r);
}
function SG(e, t, r) {
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
function Ls(e, t, r, n, o) {
  if (e * t < e * n || e * t > e * o)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - o) <= 0;
}
function PG(e, t) {
  return wT(e, t + 1);
}
function OG(e, t, r, n, o) {
  for (var i = (n || []).slice(), {
    start: a,
    end: s
  } = t, c = 0, u = 1, l = a, d = function() {
    var v = n?.[c];
    if (v === void 0)
      return {
        v: wT(n, u)
      };
    var h = c, g, y = () => (g === void 0 && (g = r(v, h)), g), w = v.coordinate, x = c === 0 || Ls(e, w, y, l, s);
    x || (c = 0, l = a, u += 1), x && (l = w + e * (y() / 2 + o), c += u);
  }, p; u <= i.length; )
    if (p = d(), p) return p.v;
  return [];
}
function Aw(e, t) {
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
    t % 2 ? Aw(Object(r), !0).forEach(function(n) {
      AG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
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
function _G(e, t, r, n, o) {
  for (var i = (n || []).slice(), a = i.length, {
    start: s
  } = t, {
    end: c
  } = t, u = function(p) {
    var f = i[p], v, h = () => (v === void 0 && (v = r(f, p)), v);
    if (p === a - 1) {
      var g = e * (f.coordinate + e * h() / 2 - c);
      i[p] = f = it(it({}, f), {}, {
        tickCoord: g > 0 ? f.coordinate - g * e : f.coordinate
      });
    } else
      i[p] = f = it(it({}, f), {}, {
        tickCoord: f.coordinate
      });
    var y = Ls(e, f.tickCoord, h, s, c);
    y && (c = f.tickCoord - e * (h() / 2 + o), i[p] = it(it({}, f), {}, {
      isShow: !0
    }));
  }, l = a - 1; l >= 0; l--)
    u(l);
  return i;
}
function kG(e, t, r, n, o, i) {
  var a = (n || []).slice(), s = a.length, {
    start: c,
    end: u
  } = t;
  if (i) {
    var l = n[s - 1], d = r(l, s - 1), p = e * (l.coordinate + e * d / 2 - u);
    a[s - 1] = l = it(it({}, l), {}, {
      tickCoord: p > 0 ? l.coordinate - p * e : l.coordinate
    });
    var f = Ls(e, l.tickCoord, () => d, c, u);
    f && (u = l.tickCoord - e * (d / 2 + o), a[s - 1] = it(it({}, l), {}, {
      isShow: !0
    }));
  }
  for (var v = i ? s - 1 : s, h = function(w) {
    var x = a[w], S, E = () => (S === void 0 && (S = r(x, w)), S);
    if (w === 0) {
      var P = e * (x.coordinate - e * E() / 2 - c);
      a[w] = x = it(it({}, x), {}, {
        tickCoord: P < 0 ? x.coordinate - P * e : x.coordinate
      });
    } else
      a[w] = x = it(it({}, x), {}, {
        tickCoord: x.coordinate
      });
    var O = Ls(e, x.tickCoord, E, c, u);
    O && (c = x.tickCoord + e * (E() / 2 + o), a[w] = it(it({}, x), {}, {
      isShow: !0
    }));
  }, g = 0; g < v; g++)
    h(g);
  return a;
}
function Em(e, t, r) {
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
  if (Q(c) || $r.isSsr) {
    var p;
    return (p = PG(o, Q(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var f = [], v = s === "top" || s === "bottom" ? "width" : "height", h = l && v === "width" ? ti(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, g = (x, S) => {
    var E = typeof u == "function" ? u(x.value, S) : x.value;
    return v === "width" ? EG(ti(E, {
      fontSize: t,
      letterSpacing: r
    }), h, d) : ti(E, {
      fontSize: t,
      letterSpacing: r
    })[v];
  }, y = o.length >= 2 ? Qe(o[1].coordinate - o[0].coordinate) : 1, w = SG(i, y, v);
  return c === "equidistantPreserveStart" ? OG(y, w, g, o, a) : (c === "preserveStart" || c === "preserveStartEnd" ? f = kG(y, w, g, o, a, c === "preserveStartEnd") : f = _G(y, w, g, o, a), f.filter((x) => x.isShow));
}
var NG = (e) => {
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
}, IG = ["axisLine", "width", "height", "className", "hide", "ticks"], RG = ["viewBox"], MG = ["viewBox"];
function Mf(e, t) {
  if (e == null) return {};
  var r, n, o = DG(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function DG(e, t) {
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
function Cw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cw(Object(r), !0).forEach(function(n) {
      jG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jG(e, t, r) {
  return (t = LG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LG(e) {
  var t = $G(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $G(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sm = {
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
  var u = qe(qe(qe({}, c), ht(s)), {}, {
    fill: "none"
  });
  if (i === "top" || i === "bottom") {
    var l = +(i === "top" && !a || i === "bottom" && a);
    u = qe(qe({}, u), {}, {
      x1: t,
      y1: r + l * o,
      x2: t + n,
      y2: r + l * o
    });
  } else {
    var d = +(i === "left" && !a || i === "right" && a);
    u = qe(qe({}, u), {}, {
      x1: t + d * n,
      y1: r,
      x2: t + d * n,
      y2: r + o
    });
  }
  return /* @__PURE__ */ m.createElement("line", Fn({}, u, {
    className: pe("recharts-cartesian-axis-line", Mn(s, "className"))
  }));
}
function FG(e, t, r, n, o, i, a, s, c) {
  var u, l, d, p, f, v, h = s ? -1 : 1, g = e.tickSize || a, y = Q(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (i) {
    case "top":
      u = l = e.coordinate, p = r + +!s * o, d = p - h * g, v = d - h * c, f = y;
      break;
    case "left":
      d = p = e.coordinate, l = t + +!s * n, u = l - h * g, f = u - h * c, v = y;
      break;
    case "right":
      d = p = e.coordinate, l = t + +s * n, u = l + h * g, f = u + h * c, v = y;
      break;
    default:
      u = l = e.coordinate, p = r + +s * o, d = p + h * g, v = d + h * c, f = y;
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
      x: f,
      y: v
    }
  };
}
function zG(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function UG(e, t) {
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
function WG(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, o, i = pe(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ m.isValidElement(t))
    o = /* @__PURE__ */ m.cloneElement(t, qe(qe({}, r), {}, {
      className: i
    }));
  else if (typeof t == "function")
    o = t(qe(qe({}, r), {}, {
      className: i
    }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = pe(a, t?.className)), o = /* @__PURE__ */ m.createElement(ul, Fn({}, r, {
      className: a
    }), n);
  }
  return o;
}
function KG(e) {
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
    width: f,
    height: v,
    tickSize: h,
    tickMargin: g,
    fontSize: y,
    letterSpacing: w,
    getTicksConfig: x,
    events: S
  } = e, E = Em(qe(qe({}, x), {}, {
    ticks: t
  }), y, w), P = zG(u, l), O = UG(u, l), A = ht(x), _ = Rn(r), N = {};
  typeof n == "object" && (N = n);
  var T = qe(qe({}, A), {}, {
    fill: "none"
  }, N), I = E.map((j, C) => {
    var {
      line: D,
      tick: $
    } = FG(j, d, p, f, v, u, h, l, g), z = qe(qe(qe(qe({
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor: P,
      verticalAnchor: O
    }, A), {}, {
      // @ts-expect-error customTickProps is contributing unknown props
      stroke: "none",
      // @ts-expect-error customTickProps is contributing unknown props
      fill: o
    }, _), $), {}, {
      index: C,
      payload: j,
      visibleTicksCount: E.length,
      tickFormatter: i,
      padding: s
    }, c);
    return /* @__PURE__ */ m.createElement($e, Fn({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(j.value, "-").concat(j.coordinate, "-").concat(j.tickCoord)
    }, Li(S, j, C)), n && /* @__PURE__ */ m.createElement("line", Fn({}, T, D, {
      className: pe("recharts-cartesian-axis-tick-line", Mn(n, "className"))
    })), r && /* @__PURE__ */ m.createElement(WG, {
      option: r,
      tickProps: z,
      value: "".concat(typeof i == "function" ? i(j.value, C) : j.value).concat(a || "")
    }));
  });
  return I.length > 0 ? /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, I) : null;
}
var VG = /* @__PURE__ */ Fe((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: o,
    className: i,
    hide: a,
    ticks: s
  } = e, c = Mf(e, IG), [u, l] = je(""), [d, p] = je(""), f = ye(null);
  Fw(t, () => ({
    getCalculatedWidth: () => {
      var h;
      return NG({
        ticks: f.current,
        label: (h = e.labelRef) === null || h === void 0 ? void 0 : h.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var v = he((h) => {
    if (h) {
      var g = h.getElementsByClassName("recharts-cartesian-axis-tick-value");
      f.current = g;
      var y = g[0];
      if (y) {
        var w = window.getComputedStyle(y), x = w.fontSize, S = w.letterSpacing;
        (x !== u || S !== d) && (l(x), p(S));
      }
    }
  }, [u, d]);
  return a || n != null && n <= 0 || o != null && o <= 0 ? null : /* @__PURE__ */ m.createElement($e, {
    className: pe("recharts-cartesian-axis", i),
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
  }), /* @__PURE__ */ m.createElement(KG, {
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
  }), /* @__PURE__ */ m.createElement(Gq, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ m.createElement(oH, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children));
}), qG = /* @__PURE__ */ m.memo(VG, (e, t) => {
  var {
    viewBox: r
  } = e, n = Mf(e, RG), {
    viewBox: o
  } = t, i = Mf(t, MG);
  return mo(r, o) && mo(n, i);
}), Pm = /* @__PURE__ */ m.forwardRef((e, t) => {
  var r = Ge(e, Sm);
  return /* @__PURE__ */ m.createElement(qG, Fn({}, r, {
    ref: t
  }));
});
Pm.displayName = "CartesianAxis";
var HG = ["x1", "y1", "x2", "y2", "key"], GG = ["offset"], YG = ["xAxisId", "yAxisId"], XG = ["xAxisId", "yAxisId"];
function Tw(e, t) {
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
    t % 2 ? Tw(Object(r), !0).forEach(function(n) {
      ZG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZG(e, t, r) {
  return (t = JG(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JG(e) {
  var t = QG(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function QG(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wn.apply(null, arguments);
}
function $s(e, t) {
  if (e == null) return {};
  var r, n, o = e9(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function e9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var t9 = (e) => {
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
function xT(e, t) {
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
    } = t, c = $s(t, HG), u = ht(c), {
      offset: l
    } = u, d = $s(u, GG);
    r = /* @__PURE__ */ m.createElement("line", wn({}, d, {
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
function r9(e) {
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
  } = e, s = $s(e, YG), c = o.map((u, l) => {
    var d = at(at({}, s), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(l),
      index: l
    });
    return xT(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function n9(e) {
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
  } = e, s = $s(e, XG), c = o.map((u, l) => {
    var d = at(at({}, s), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return xT(n, d);
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function o9(e) {
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
    var f = !u[p + 1], v = f ? o + a - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var h = p % t.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: v,
      width: i,
      stroke: "none",
      fill: t[h],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function i9(e) {
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
    var f = !u[p + 1], v = f ? o + a - d : u[p + 1] - d;
    if (v <= 0)
      return null;
    var h = p % r.length;
    return /* @__PURE__ */ m.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: i,
      width: v,
      height: s,
      stroke: "none",
      fill: r[h],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var a9 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: o,
    offset: i
  } = e;
  return g1(Em(at(at(at({}, Sm), r), {}, {
    ticks: y1(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), i.left, i.left + i.width, t);
}, s9 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: o,
    offset: i
  } = e;
  return g1(Em(at(at(at({}, Sm), r), {}, {
    ticks: y1(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), i.top, i.top + i.height, t);
}, c9 = {
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
function bl(e) {
  var t = Zp(), r = Jp(), n = A1(), o = at(at({}, Ge(e, c9)), {}, {
    x: Q(e.x) ? e.x : n.left,
    y: Q(e.y) ? e.y : n.top,
    width: Q(e.width) ? e.width : n.width,
    height: Q(e.height) ? e.height : n.height
  }), {
    xAxisId: i,
    yAxisId: a,
    x: s,
    y: c,
    width: u,
    height: l,
    syncWithTicks: d,
    horizontalValues: p,
    verticalValues: f
  } = o, v = ot(), h = ee((_) => Pb(_, "xAxis", i, v)), g = ee((_) => Pb(_, "yAxis", a, v));
  if (!Q(u) || u <= 0 || !Q(l) || l <= 0 || !Q(s) || s !== +s || !Q(c) || c !== +c)
    return null;
  var y = o.verticalCoordinatesGenerator || a9, w = o.horizontalCoordinatesGenerator || s9, {
    horizontalPoints: x,
    verticalPoints: S
  } = o;
  if ((!x || !x.length) && typeof w == "function") {
    var E = p && p.length, P = w({
      yAxis: g ? at(at({}, g), {}, {
        ticks: E ? p : g.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, E ? !0 : d);
    vs(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (x = P);
  }
  if ((!S || !S.length) && typeof y == "function") {
    var O = f && f.length, A = y({
      xAxis: h ? at(at({}, h), {}, {
        ticks: O ? f : h.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, O ? !0 : d);
    vs(Array.isArray(A), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A, "]")), Array.isArray(A) && (S = A);
  }
  return /* @__PURE__ */ m.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ m.createElement(t9, {
    fill: o.fill,
    fillOpacity: o.fillOpacity,
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height,
    ry: o.ry
  }), /* @__PURE__ */ m.createElement(o9, wn({}, o, {
    horizontalPoints: x
  })), /* @__PURE__ */ m.createElement(i9, wn({}, o, {
    verticalPoints: S
  })), /* @__PURE__ */ m.createElement(r9, wn({}, o, {
    offset: n,
    horizontalPoints: x,
    xAxis: h,
    yAxis: g
  })), /* @__PURE__ */ m.createElement(n9, wn({}, o, {
    offset: n,
    verticalPoints: S,
    xAxis: h,
    yAxis: g
  })));
}
bl.displayName = "CartesianGrid";
var ET = (e, t, r, n) => gr(e, "xAxis", t, n), ST = (e, t, r, n) => vr(e, "xAxis", t, n), PT = (e, t, r, n) => gr(e, "yAxis", r, n), OT = (e, t, r, n) => vr(e, "yAxis", r, n), l9 = k([fe, ET, PT, ST, OT], (e, t, r, n, o) => br(e, "xAxis") ? Ln(t, n, !1) : Ln(r, o, !1)), u9 = (e, t, r, n, o) => o;
function d9(e) {
  return e.type === "line";
}
var f9 = k([Ji, u9], (e, t) => e.filter(d9).find((r) => r.id === t)), p9 = k([fe, ET, PT, ST, OT, f9, l9, Gi], (e, t, r, n, o, i, a, s) => {
  var {
    chartData: c,
    dataStartIndex: u,
    dataEndIndex: l
  } = s;
  if (!(i == null || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || a == null)) {
    var {
      dataKey: d,
      data: p
    } = i, f;
    if (p != null && p.length > 0 ? f = p : f = c?.slice(u, l + 1), f != null)
      return D9({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataKey: d,
        bandSize: a,
        displayedData: f
      });
  }
});
function AT(e) {
  var t = Rn(e), r = 3, n = 2;
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
var h9 = ["id"], m9 = ["type", "layout", "connectNulls", "needClip"], v9 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function _w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _w(Object(r), !0).forEach(function(n) {
      g9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g9(e, t, r) {
  return (t = y9(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y9(e) {
  var t = b9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function b9(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Om(e, t) {
  if (e == null) return {};
  var r, n, o = w9(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function w9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zn.apply(null, arguments);
}
var x9 = (e) => {
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
    value: cn(r, t),
    payload: e
  }];
};
function E9(e) {
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
      name: cn(a, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c
    }
  };
}
var CT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function S9(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], o = 0; o < t; ++o)
    n = [...n, ...r];
  return n;
}
var P9 = (e, t, r) => {
  var n = r.reduce((d, p) => d + p);
  if (!n)
    return CT(t, e);
  for (var o = Math.floor(e / n), i = e % n, a = t - e, s = [], c = 0, u = 0; c < r.length; u += r[c], ++c)
    if (u + r[c] > i) {
      s = [...r.slice(0, c), i - u];
      break;
    }
  var l = s.length % 2 === 0 ? [0, a] : [a];
  return [...S9(r, o), ...s, ...l].map((d) => "".concat(d, "px")).join(", ");
};
function O9(e, t) {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = pe("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(lm, zn({}, t, {
      className: n
    }));
  }
  return r;
}
function A9(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function C9(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: o,
    dataKey: i,
    needClip: a
  } = n;
  if (!A9(r, o))
    return null;
  var {
    id: s
  } = n, c = Om(n, h9), u = hl(o), l = ht(c), d = tO(o), p = r.map((v, h) => {
    var g = _t(_t(_t({
      key: "dot-".concat(h),
      r: 3
    }, l), d), {}, {
      index: h,
      cx: v.x,
      cy: v.y,
      dataKey: i,
      value: v.value,
      payload: v.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return O9(o, g);
  }), f = {
    clipPath: a ? "url(#clipPath-".concat(u ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement($e, zn({
    className: "recharts-line-dots",
    key: "dots"
  }, f), p);
}
function T9(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, o = rr(() => n?.map((i) => {
    var a = {
      x: i.x,
      y: i.y,
      width: 0,
      height: 0
    };
    return _t(_t({}, a), {}, {
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
  return /* @__PURE__ */ m.createElement(cm, {
    value: t ? o : null
  }, r);
}
function kw(e) {
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
  } = i, l = Om(i, m9), d = _t(_t({}, mt(l)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: a,
    layout: s,
    connectNulls: c,
    strokeDasharray: o ?? i.strokeDasharray
  });
  return /* @__PURE__ */ m.createElement(m.Fragment, null, n?.length > 1 && /* @__PURE__ */ m.createElement(no, zn({}, d, {
    pathRef: r
  })), /* @__PURE__ */ m.createElement(C9, {
    points: n,
    clipPathId: t,
    props: i
  }));
}
function _9(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function k9(e) {
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
    width: f,
    height: v,
    onAnimationEnd: h,
    onAnimationStart: g
  } = r, y = o.current, w = To(r, "recharts-line-"), [x, S] = je(!1), E = !x, P = he(() => {
    typeof h == "function" && h(), S(!1);
  }, [h]), O = he(() => {
    typeof g == "function" && g(), S(!0);
  }, [g]), A = _9(n.current), _ = i.current;
  return /* @__PURE__ */ m.createElement(T9, {
    points: a,
    showLabels: E
  }, r.children, /* @__PURE__ */ m.createElement(Co, {
    animationId: w,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: P,
    onAnimationStart: O,
    key: w
  }, (N) => {
    var T = Ee(_, A + _, N), I = Math.min(T, A), j;
    if (c)
      if (s) {
        var C = "".concat(s).split(/[,\s]+/gim).map((z) => parseFloat(z));
        j = P9(I, A, C);
      } else
        j = CT(A, I);
    else
      j = s == null ? void 0 : String(s);
    if (y) {
      var D = y.length / a.length, $ = N === 1 ? a : a.map((z, M) => {
        var F = Math.floor(M * D);
        if (y[F]) {
          var oe = y[F];
          return _t(_t({}, z), {}, {
            x: Ee(oe.x, z.x, N),
            y: Ee(oe.y, z.y, N)
          });
        }
        return p ? _t(_t({}, z), {}, {
          x: Ee(f * 2, z.x, N),
          y: Ee(v / 2, z.y, N)
        }) : _t(_t({}, z), {}, {
          x: z.x,
          y: z.y
        });
      });
      return o.current = $, /* @__PURE__ */ m.createElement(kw, {
        props: r,
        points: $,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: j
      });
    }
    return N > 0 && A > 0 && (o.current = a, i.current = I), /* @__PURE__ */ m.createElement(kw, {
      props: r,
      points: a,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: j
    });
  }), /* @__PURE__ */ m.createElement(dl, {
    label: r.label
  }));
}
function N9(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = ye(null), o = ye(0), i = ye(null);
  return /* @__PURE__ */ m.createElement(k9, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: o,
    pathRef: i
  });
}
var I9 = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: Se(e.payload, t)
});
class R9 extends r_ {
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
    var f = pe("recharts-line", o), v = d, {
      r: h,
      strokeWidth: g
    } = AT(r), y = hl(r), w = h * 2 + g;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($e, {
      className: f
    }, p && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(wm, {
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
    }))), /* @__PURE__ */ m.createElement(pT, {
      xAxisId: i,
      yAxisId: a,
      data: n,
      dataPointFormatter: I9,
      errorBarOffset: 0
    }, /* @__PURE__ */ m.createElement(N9, {
      props: this.props,
      clipPathId: v
    }))), /* @__PURE__ */ m.createElement(If, {
      activeDot: this.props.activeDot,
      points: n,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey
    }));
  }
}
var TT = {
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
function M9(e) {
  var t = Ge(e, TT), {
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
    xAxisId: f,
    yAxisId: v,
    id: h
  } = t, g = Om(t, v9), {
    needClip: y
  } = yl(f, v), w = gl(), x = Wi(), S = ot(), E = ee((N) => p9(N, f, v, S, h));
  if (x !== "horizontal" && x !== "vertical" || E == null || w == null)
    return null;
  var {
    height: P,
    width: O,
    x: A,
    y: _
  } = w;
  return /* @__PURE__ */ m.createElement(R9, zn({}, g, {
    id: h,
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
    xAxisId: f,
    yAxisId: v,
    points: E,
    layout: x,
    height: P,
    width: O,
    left: A,
    top: _,
    needClip: y
  }));
}
function D9(e) {
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
    var d = Se(u, a);
    if (t === "horizontal") {
      var p = ms({
        axis: r,
        ticks: o,
        bandSize: s,
        entry: u,
        index: l
      }), f = Ce(d) ? null : n.scale(d);
      return {
        x: p,
        y: f,
        value: d,
        payload: u
      };
    }
    var v = Ce(d) ? null : r.scale(d), h = ms({
      axis: n,
      ticks: i,
      bandSize: s,
      entry: u,
      index: l
    });
    return v == null || h == null ? null : {
      x: v,
      y: h,
      value: d,
      payload: u
    };
  }).filter(Boolean);
}
function j9(e) {
  var t = Ge(e, TT), r = ot();
  return /* @__PURE__ */ m.createElement(vl, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(vm, {
    legendPayload: x9(t)
  }), /* @__PURE__ */ m.createElement(ml, {
    fn: E9,
    args: t
  }), /* @__PURE__ */ m.createElement(gm, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ m.createElement(M9, zn({}, t, {
    id: n
  }))));
}
var _T = /* @__PURE__ */ m.memo(j9);
_T.displayName = "Line";
var kT = (e, t, r, n) => gr(e, "xAxis", t, n), NT = (e, t, r, n) => vr(e, "xAxis", t, n), IT = (e, t, r, n) => gr(e, "yAxis", r, n), RT = (e, t, r, n) => vr(e, "yAxis", r, n), L9 = k([fe, kT, IT, NT, RT], (e, t, r, n, o) => br(e, "xAxis") ? Ln(t, n, !1) : Ln(r, o, !1)), $9 = (e, t, r, n, o) => o, MT = k([Ji, $9], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), B9 = (e, t, r, n, o) => {
  var i, a = MT(e, t, r, n, o);
  if (a != null) {
    var s = fe(e), c = br(s, "xAxis"), u;
    if (c ? u = bi(e, "yAxis", r, n) : u = bi(e, "xAxis", t, n), u != null) {
      var {
        stackId: l
      } = a, d = Qc(a);
      if (!(l == null || d == null)) {
        var p = (i = u[l]) === null || i === void 0 ? void 0 : i.stackedData;
        return p?.find((f) => f.key === d);
      }
    }
  }
}, F9 = k([fe, kT, IT, NT, RT, B9, Gi, L9, MT], (e, t, r, n, o, i, a, s, c) => {
  var {
    chartData: u,
    dataStartIndex: l,
    dataEndIndex: d
  } = a;
  if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || o == null || n.length === 0 || o.length === 0 || s == null)) {
    var {
      data: p
    } = c, f;
    if (p && p.length > 0 ? f = p : f = u?.slice(l, d + 1), f != null) {
      var v = void 0;
      return sY({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: o,
        dataStartIndex: l,
        areaSettings: c,
        stackedData: i,
        displayedData: f,
        chartBaseValue: v,
        bandSize: s
      });
    }
  }
}), z9 = ["id"], U9 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function DT(e, t) {
  if (e == null) return {};
  var r, n, o = W9(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function W9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Nw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nw(Object(r), !0).forEach(function(n) {
      K9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K9(e, t, r) {
  return (t = V9(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V9(e) {
  var t = q9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q9(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tr.apply(null, arguments);
}
function Bs(e, t) {
  return e && e !== "none" ? e : t;
}
var H9 = (e) => {
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
    color: Bs(n, o),
    value: cn(r, t),
    payload: e
  }];
};
function G9(e) {
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
      name: cn(a, t),
      hide: s,
      type: e.tooltipType,
      color: Bs(n, i),
      unit: c
    }
  };
}
var Y9 = (e, t) => {
  var r;
  if (/* @__PURE__ */ m.isValidElement(e))
    r = /* @__PURE__ */ m.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = pe("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ m.createElement(lm, Tr({}, t, {
      className: n
    }));
  }
  return r;
};
function X9(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function Z9(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: o,
    dot: i,
    dataKey: a
  } = n;
  if (!X9(r, i))
    return null;
  var s = hl(i), c = ht(n), u = tO(i), l = r.map((p, f) => {
    var v = Or(Or(Or({
      key: "dot-".concat(f),
      r: 3
    }, c), u), {}, {
      index: f,
      cx: p.x,
      cy: p.y,
      dataKey: a,
      value: p.value,
      payload: p.payload,
      // @ts-expect-error we're passing extra property 'points' that the props are not expecting
      points: r
    });
    return Y9(i, v);
  }), d = {
    clipPath: o ? "url(#clipPath-".concat(s ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ m.createElement($e, Tr({
    className: "recharts-area-dots"
  }, d), l);
}
function J9(e) {
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
    return Or(Or({}, a), {}, {
      value: i.value,
      payload: i.payload,
      parentViewBox: void 0,
      viewBox: a,
      fill: void 0
    });
  });
  return /* @__PURE__ */ m.createElement(cm, {
    value: t ? o : null
  }, r);
}
function Iw(e) {
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
  } = i, p = DT(i, z9), f = ht(p);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, t?.length > 1 && /* @__PURE__ */ m.createElement($e, {
    clipPath: n ? "url(#clipPath-".concat(o, ")") : void 0
  }, /* @__PURE__ */ m.createElement(no, Tr({}, f, {
    id: d,
    points: t,
    connectNulls: u,
    type: s,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ m.createElement(no, Tr({}, f, {
    className: "recharts-area-curve",
    layout: a,
    type: s,
    connectNulls: u,
    fill: "none",
    points: t
  })), c !== "none" && l && /* @__PURE__ */ m.createElement(no, Tr({}, f, {
    className: "recharts-area-curve",
    layout: a,
    type: s,
    connectNulls: u,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ m.createElement(Z9, {
    points: t,
    props: p,
    clipPathId: o
  }));
}
function Q9(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, i = n[0].y, a = n[n.length - 1].y;
  if (!We(i) || !We(a))
    return null;
  var s = t * Math.abs(i - a), c = Math.max(...n.map((u) => u.x || 0));
  return Q(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.x || 0), c)), Q(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: 0,
    y: i < a ? i : i - s,
    width: c + (o ? parseInt("".concat(o), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function eY(e) {
  var {
    alpha: t,
    baseLine: r,
    points: n,
    strokeWidth: o
  } = e, i = n[0].x, a = n[n.length - 1].x;
  if (!We(i) || !We(a))
    return null;
  var s = t * Math.abs(i - a), c = Math.max(...n.map((u) => u.y || 0));
  return Q(r) ? c = Math.max(r, c) : r && Array.isArray(r) && r.length && (c = Math.max(...r.map((u) => u.y || 0), c)), Q(c) ? /* @__PURE__ */ m.createElement("rect", {
    x: i < a ? i : i - s,
    y: 0,
    width: s,
    height: Math.floor(c + (o ? parseInt("".concat(o), 10) : 1))
  }) : null;
}
function tY(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: o,
    strokeWidth: i
  } = e;
  return r === "vertical" ? /* @__PURE__ */ m.createElement(Q9, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: i
  }) : /* @__PURE__ */ m.createElement(eY, {
    alpha: t,
    points: n,
    baseLine: o,
    strokeWidth: i
  });
}
function rY(e) {
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
    onAnimationEnd: f
  } = n, v = To(n, "recharts-area-"), [h, g] = je(!1), y = !h, w = he(() => {
    typeof f == "function" && f(), g(!1);
  }, [f]), x = he(() => {
    typeof p == "function" && p(), g(!0);
  }, [p]), S = o.current, E = i.current;
  return /* @__PURE__ */ m.createElement(J9, {
    showLabels: y,
    points: a
  }, n.children, /* @__PURE__ */ m.createElement(Co, {
    animationId: v,
    begin: u,
    duration: l,
    isActive: c,
    easing: d,
    onAnimationEnd: w,
    onAnimationStart: x,
    key: v
  }, (P) => {
    if (S) {
      var O = S.length / a.length, A = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        P === 1 ? a : a.map((N, T) => {
          var I = Math.floor(T * O);
          if (S[I]) {
            var j = S[I];
            return Or(Or({}, N), {}, {
              x: Ee(j.x, N.x, P),
              y: Ee(j.y, N.y, P)
            });
          }
          return N;
        })
      ), _;
      return Q(s) ? _ = Ee(E, s, P) : Ce(s) || Rt(s) ? _ = Ee(E, 0, P) : _ = s.map((N, T) => {
        var I = Math.floor(T * O);
        if (Array.isArray(E) && E[I]) {
          var j = E[I];
          return Or(Or({}, N), {}, {
            x: Ee(j.x, N.x, P),
            y: Ee(j.y, N.y, P)
          });
        }
        return N;
      }), P > 0 && (o.current = A, i.current = _), /* @__PURE__ */ m.createElement(Iw, {
        points: A,
        baseLine: _,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return P > 0 && (o.current = a, i.current = s), /* @__PURE__ */ m.createElement($e, null, c && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ m.createElement(tY, {
      alpha: P,
      points: a,
      baseLine: s,
      layout: n.layout,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ m.createElement($e, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ m.createElement(Iw, {
      points: a,
      baseLine: s,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ m.createElement(dl, {
    label: n.label
  }));
}
function nY(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, o = ye(null), i = ye();
  return /* @__PURE__ */ m.createElement(rY, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: o,
    previousBaselineRef: i
  });
}
class oY extends xi {
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
      baseLine: f
    } = this.props;
    if (t)
      return null;
    var v = pe("recharts-area", o), h = p, {
      r: g,
      strokeWidth: y
    } = AT(r), w = hl(r), x = g * 2 + y;
    return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement($e, {
      className: v
    }, s && /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement(wm, {
      clipPathId: h,
      xAxisId: c,
      yAxisId: u
    }), !w && /* @__PURE__ */ m.createElement("clipPath", {
      id: "clipPath-dots-".concat(h)
    }, /* @__PURE__ */ m.createElement("rect", {
      x: a - x / 2,
      y: i - x / 2,
      width: l + x,
      height: d + x
    }))), /* @__PURE__ */ m.createElement(nY, {
      needClip: s,
      clipPathId: h,
      props: this.props
    })), /* @__PURE__ */ m.createElement(If, {
      points: n,
      mainColor: Bs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }), this.props.isRange && Array.isArray(f) && /* @__PURE__ */ m.createElement(If, {
      points: f,
      mainColor: Bs(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot
    }));
  }
}
var jT = {
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
function iY(e) {
  var t, r = Ge(e, jT), {
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
    legendType: f,
    stroke: v,
    xAxisId: h,
    yAxisId: g
  } = r, y = DT(r, U9), w = Wi(), x = LC(), {
    needClip: S
  } = yl(h, g), E = ot(), {
    points: P,
    isRange: O,
    baseLine: A
  } = (t = ee((C) => F9(C, h, g, E, e.id))) !== null && t !== void 0 ? t : {}, _ = gl();
  if (w !== "horizontal" && w !== "vertical" || _ == null || x !== "AreaChart" && x !== "ComposedChart")
    return null;
  var {
    height: N,
    width: T,
    x: I,
    y: j
  } = _;
  return !P || !P.length ? null : /* @__PURE__ */ m.createElement(oY, Tr({}, y, {
    activeDot: n,
    animationBegin: o,
    animationDuration: i,
    animationEasing: a,
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
    legendType: f,
    needClip: S,
    points: P,
    stroke: v,
    width: T,
    left: I,
    top: j,
    xAxisId: h,
    yAxisId: g
  }));
}
var aY = (e, t, r, n, o) => {
  var i = r ?? t;
  if (Q(i))
    return i;
  var a = e === "horizontal" ? o : n, s = a.scale.domain();
  if (a.type === "number") {
    var c = Math.max(s[0], s[1]), u = Math.min(s[0], s[1]);
    return i === "dataMin" ? u : i === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
  }
  return i === "dataMin" ? s[0] : i === "dataMax" ? s[1] : s[0];
};
function sY(e) {
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
    bandSize: f
  } = e, v = o && o.length, h = aY(i, a, r, s, c), g = i === "horizontal", y = !1, w = u.map((S, E) => {
    var P;
    v ? P = o[l + E] : (P = Se(S, n), Array.isArray(P) ? y = !0 : P = [h, P]);
    var O = P[1] == null || v && !t && Se(S, n) == null;
    return g ? {
      x: ms({
        axis: s,
        ticks: d,
        bandSize: f,
        entry: S,
        index: E
      }),
      y: O ? null : c.scale(P[1]),
      value: P,
      payload: S
    } : {
      x: O ? null : s.scale(P[1]),
      y: ms({
        axis: c,
        ticks: p,
        bandSize: f,
        entry: S,
        index: E
      }),
      value: P,
      payload: S
    };
  }), x;
  return v || y ? x = w.map((S) => {
    var E = Array.isArray(S.value) ? S.value[0] : null;
    return g ? {
      x: S.x,
      y: E != null && S.y != null ? c.scale(E) : null,
      payload: S.payload
    } : {
      x: E != null ? s.scale(E) : null,
      y: S.y,
      payload: S.payload
    };
  }) : x = g ? c.scale(h) : s.scale(h), {
    points: w,
    baseLine: x,
    isRange: y
  };
}
function cY(e) {
  var t = Ge(e, jT), r = ot();
  return /* @__PURE__ */ m.createElement(vl, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(vm, {
    legendPayload: H9(t)
  }), /* @__PURE__ */ m.createElement(ml, {
    fn: G9,
    args: t
  }), /* @__PURE__ */ m.createElement(gm, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: b1(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ m.createElement(iY, Tr({}, t, {
    id: n
  }))));
}
var LT = /* @__PURE__ */ m.memo(cY);
LT.displayName = "Area";
var lY = ["dangerouslySetInnerHTML", "ticks"], uY = ["id"], dY = ["domain"], fY = ["domain"];
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Df.apply(null, arguments);
}
function Fs(e, t) {
  if (e == null) return {};
  var r, n, o = pY(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function pY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function hY(e) {
  var t = Re();
  return fr(() => (t(U8(e)), () => {
    t(W8(e));
  }), [e, t]), null;
}
var mY = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = ee(Yp), o = ot(), i = "xAxis", a = ee((g) => jo(g, i, t, o)), s = ee((g) => hC(g, i, t, o)), c = ee((g) => uC(g, t)), u = ee((g) => _5(g, t)), l = ee((g) => VA(g, t));
  if (c == null || u == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: d,
    ticks: p
  } = e, f = Fs(e, lY), {
    id: v
  } = l, h = Fs(l, uY);
  return /* @__PURE__ */ m.createElement(Pm, Df({}, f, h, {
    scale: a,
    x: u.x,
    y: u.y,
    width: c.width,
    height: c.height,
    className: pe("recharts-".concat(i, " ").concat(i), r),
    viewBox: n,
    ticks: s
  }));
}, vY = {
  allowDataOverflow: Pt.allowDataOverflow,
  allowDecimals: Pt.allowDecimals,
  allowDuplicatedCategory: Pt.allowDuplicatedCategory,
  height: Pt.height,
  hide: !1,
  mirror: Pt.mirror,
  orientation: Pt.orientation,
  padding: Pt.padding,
  reversed: Pt.reversed,
  scale: Pt.scale,
  tickCount: Pt.tickCount,
  type: Pt.type,
  xAxisId: 0
}, gY = (e) => {
  var t, r, n, o, i, a = Ge(e, vY);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(hY, {
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
  }), /* @__PURE__ */ m.createElement(mY, a));
}, yY = (e, t) => {
  var {
    domain: r
  } = e, n = Fs(e, dY), {
    domain: o
  } = t, i = Fs(t, fY);
  return mo(n, i) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : mo({
    domain: r
  }, {
    domain: o
  }) : !1;
}, wl = /* @__PURE__ */ m.memo(gY, yY);
wl.displayName = "XAxis";
var bY = ["dangerouslySetInnerHTML", "ticks"], wY = ["id"], xY = ["domain"], EY = ["domain"];
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jf.apply(null, arguments);
}
function zs(e, t) {
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
function PY(e) {
  var t = Re();
  return fr(() => (t(K8(e)), () => {
    t(V8(e));
  }), [e, t]), null;
}
var OY = (e) => {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: o
  } = e, i = ye(null), a = ye(null), s = ee(Yp), c = ot(), u = Re(), l = "yAxis", d = ee((E) => jo(E, l, t, c)), p = ee((E) => dC(E, t)), f = ee((E) => N5(E, t)), v = ee((E) => hC(E, l, t, c)), h = ee((E) => qA(E, t));
  if (fr(() => {
    if (!(n !== "auto" || !p || sm(o) || /* @__PURE__ */ Kt(o) || h == null)) {
      var E = i.current;
      if (E) {
        var P = E.getCalculatedWidth();
        Math.round(p.width) !== Math.round(P) && u(q8({
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
    h
  ]), p == null || f == null || h == null)
    return null;
  var {
    dangerouslySetInnerHTML: g,
    ticks: y
  } = e, w = zs(e, bY), {
    id: x
  } = h, S = zs(h, wY);
  return /* @__PURE__ */ m.createElement(Pm, jf({}, w, S, {
    ref: i,
    labelRef: a,
    scale: d,
    x: f.x,
    y: f.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: p.width,
    height: p.height,
    className: pe("recharts-".concat(l, " ").concat(l), r),
    viewBox: s,
    ticks: v
  }));
}, AY = {
  allowDataOverflow: Ot.allowDataOverflow,
  allowDecimals: Ot.allowDecimals,
  allowDuplicatedCategory: Ot.allowDuplicatedCategory,
  hide: !1,
  mirror: Ot.mirror,
  orientation: Ot.orientation,
  padding: Ot.padding,
  reversed: Ot.reversed,
  scale: Ot.scale,
  tickCount: Ot.tickCount,
  type: Ot.type,
  width: Ot.width,
  yAxisId: 0
}, CY = (e) => {
  var t, r, n, o, i, a = Ge(e, AY);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(PY, {
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
  }), /* @__PURE__ */ m.createElement(OY, a));
}, TY = (e, t) => {
  var {
    domain: r
  } = e, n = zs(e, xY), {
    domain: o
  } = t, i = zs(t, EY);
  return mo(n, i) ? Array.isArray(r) && r.length === 2 && Array.isArray(o) && o.length === 2 ? r[0] === o[0] && r[1] === o[1] : mo({
    domain: r
  }, {
    domain: o
  }) : !1;
}, xl = /* @__PURE__ */ m.memo(CY, TY);
xl.displayName = "YAxis";
var Da = { exports: {} }, hd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rw;
function _Y() {
  if (Rw) return hd;
  Rw = 1;
  var e = At;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return hd.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
    var f = o(null);
    if (f.current === null) {
      var v = { hasValue: !1, value: null };
      f.current = v;
    } else v = f.current;
    f = a(
      function() {
        function g(E) {
          if (!y) {
            if (y = !0, w = E, E = d(E), p !== void 0 && v.hasValue) {
              var P = v.value;
              if (p(P, E))
                return x = P;
            }
            return x = E;
          }
          if (P = x, r(w, E)) return P;
          var O = d(E);
          return p !== void 0 && p(P, O) ? (w = E, P) : (w = E, x = O);
        }
        var y = !1, w, x, S = l === void 0 ? null : l;
        return [
          function() {
            return g(u());
          },
          S === null ? void 0 : function() {
            return g(S());
          }
        ];
      },
      [u, l, d, p]
    );
    var h = n(c, f[0], f[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), s(h), h;
  }, hd;
}
var md = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mw;
function kY() {
  return Mw || (Mw = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = At, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    md.useSyncExternalStoreWithSelector = function(c, u, l, d, p) {
      var f = o(null);
      if (f.current === null) {
        var v = { hasValue: !1, value: null };
        f.current = v;
      } else v = f.current;
      f = a(
        function() {
          function g(E) {
            if (!y) {
              if (y = !0, w = E, E = d(E), p !== void 0 && v.hasValue) {
                var P = v.value;
                if (p(P, E))
                  return x = P;
              }
              return x = E;
            }
            if (P = x, r(w, E))
              return P;
            var O = d(E);
            return p !== void 0 && p(P, O) ? (w = E, P) : (w = E, x = O);
          }
          var y = !1, w, x, S = l === void 0 ? null : l;
          return [
            function() {
              return g(u());
            },
            S === null ? void 0 : function() {
              return g(S());
            }
          ];
        },
        [u, l, d, p]
      );
      var h = n(c, f[0], f[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), s(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), md;
}
var Dw;
function NY() {
  return Dw || (Dw = 1, process.env.NODE_ENV === "production" ? Da.exports = _Y() : Da.exports = kY()), Da.exports;
}
NY();
function IY(e) {
  e();
}
function RY() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      IY(() => {
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
var jw = {
  notify() {
  },
  get: () => []
};
function MY(e, t) {
  let r, n = jw, o = 0, i = !1;
  function a(h) {
    l();
    const g = n.subscribe(h);
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
    o++, r || (r = e.subscribe(c), n = RY());
  }
  function d() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = jw);
  }
  function p() {
    i || (i = !0, l());
  }
  function f() {
    i && (i = !1, d());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return v;
}
var DY = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jY = /* @__PURE__ */ DY(), LY = () => typeof navigator < "u" && navigator.product === "ReactNative", $Y = /* @__PURE__ */ LY(), BY = () => jY || $Y ? m.useLayoutEffect : m.useEffect, FY = /* @__PURE__ */ BY(), zY = /* @__PURE__ */ Symbol.for("react-redux-context"), UY = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function WY() {
  if (!m.createContext) return {};
  const e = UY[zY] ??= /* @__PURE__ */ new Map();
  let t = e.get(m.createContext);
  return t || (t = m.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(m.createContext, t)), t;
}
var KY = /* @__PURE__ */ WY();
function VY(e) {
  const { children: t, context: r, serverState: n, store: o } = e, i = m.useMemo(() => {
    const c = MY(o), u = {
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
  FY(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = r || KY;
  return /* @__PURE__ */ m.createElement(s.Provider, { value: i }, t);
}
var qY = VY, HY = (e, t) => t, Am = k([HY, fe, UA, Xe, NC, Ur, DV, He], FV), Cm = (e) => {
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
}, $T = Ht("mouseClick"), BT = zi();
BT.startListening({
  actionCreator: $T,
  effect: (e, t) => {
    var r = e.payload, n = Am(t.getState(), Cm(r));
    n?.activeIndex != null && t.dispatch(K5({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var Lf = Ht("mouseMove"), FT = zi();
FT.startListening({
  actionCreator: Lf,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = Jh(n, n.tooltip.settings.shared), i = Am(n, Cm(r));
    o === "axis" && (i?.activeIndex != null ? t.dispatch(EC({
      activeIndex: i.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: i.activeCoordinate
    })) : t.dispatch(xC()));
  }
});
var Lw = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, zT = Lt({
  name: "rootProps",
  initialState: Lw,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Lw.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), GY = zT.reducer, {
  updateOptions: YY
} = zT.actions, UT = Lt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: XY
} = UT.actions, ZY = UT.reducer, WT = Ht("keyDown"), KT = Ht("focus"), Tm = zi();
Tm.startListening({
  actionCreator: WT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip, i = e.payload;
      if (!(i !== "ArrowRight" && i !== "ArrowLeft" && i !== "Enter")) {
        var a = Number(Qh(o, $o(r))), s = Ur(r);
        if (i === "Enter") {
          var c = Is(r, "axis", "hover", String(o.index));
          t.dispatch(Cf({
            active: !o.active,
            activeIndex: o.index,
            activeDataKey: o.dataKey,
            activeCoordinate: c
          }));
          return;
        }
        var u = D5(r), l = u === "left-to-right" ? 1 : -1, d = i === "ArrowRight" ? 1 : -1, p = a + d * l;
        if (!(s == null || p >= s.length || p < 0)) {
          var f = Is(r, "axis", "hover", String(p));
          t.dispatch(Cf({
            active: !0,
            activeIndex: p.toString(),
            activeDataKey: void 0,
            activeCoordinate: f
          }));
        }
      }
    }
  }
});
Tm.startListening({
  actionCreator: KT,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: o
      } = r.tooltip;
      if (!o.active && o.index == null) {
        var i = "0", a = Is(r, "axis", "hover", String(i));
        t.dispatch(Cf({
          activeDataKey: void 0,
          active: !0,
          activeIndex: i,
          activeCoordinate: a
        }));
      }
    }
  }
});
var zt = Ht("externalEvent"), VT = zi();
VT.startListening({
  actionCreator: zt,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: AV(r),
        activeDataKey: DC(r),
        activeIndex: en(r),
        activeLabel: MC(r),
        activeTooltipIndex: en(r),
        isTooltipActive: CV(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var JY = k([Lo], (e) => e.tooltipItemPayloads), QY = k([JY, ta, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
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
}), qT = Ht("touchMove"), HT = zi();
HT.startListening({
  actionCreator: qT,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), o = Jh(n, n.tooltip.settings.shared);
    if (o === "axis") {
      var i = Am(n, Cm({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      i?.activeIndex != null && t.dispatch(EC({
        activeIndex: i.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: i.activeCoordinate
      }));
    } else if (o === "item") {
      var a, s = r.touches[0], c = document.elementFromPoint(s.clientX, s.clientY);
      if (!c || !c.getAttribute)
        return;
      var u = c.getAttribute(x1), l = (a = c.getAttribute(E1)) !== null && a !== void 0 ? a : void 0, d = QY(t.getState(), u, l);
      t.dispatch(wC({
        activeDataKey: l,
        activeIndex: u,
        activeCoordinate: d
      }));
    }
  }
});
var eX = FO({
  brush: fG,
  cartesianAxis: H8,
  chartData: rq,
  errorBars: d6,
  graphicalItems: f8,
  layout: hz,
  legend: wU,
  options: ZV,
  polarAxis: OH,
  polarOptions: ZY,
  referenceElements: bG,
  rootProps: GY,
  tooltip: V5
}), tX = function(t) {
  return BF({
    reducer: eX,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([BT.middleware, FT.middleware, Tm.middleware, VT.middleware, HT.middleware]),
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
      return typeof r == "function" && (n = r()), n.concat(r1({
        type: "raf"
      }));
    },
    devTools: $r.devToolsEnabled
  });
};
function GT(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, o = ot(), i = ye(null);
  if (o)
    return r;
  i.current == null && (i.current = tX(t));
  var a = Wp;
  return /* @__PURE__ */ m.createElement(qY, {
    context: a,
    store: i.current
  }, r);
}
function YT(e) {
  var {
    layout: t,
    margin: r
  } = e, n = Re(), o = ot();
  return Le(() => {
    o || (n(dz(t)), n(uz(r)));
  }, [n, o, t, r]), null;
}
function XT(e) {
  var t = Re();
  return Le(() => {
    t(YY(e));
  }, [t, e]), null;
}
var rX = ["children"];
function nX(e, t) {
  if (e == null) return {};
  var r, n, o = oX(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function oX(e, t) {
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
var iX = {
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
}, aX = /* @__PURE__ */ Fe((e, t) => {
  var r = Zp(), n = Jp(), o = k1();
  if (!lo(r) || !lo(n))
    return null;
  var {
    children: i,
    otherAttributes: a,
    title: s,
    desc: c
  } = e, u, l;
  return typeof a.tabIndex == "number" ? u = a.tabIndex : u = o ? 0 : void 0, typeof a.role == "string" ? l = a.role : l = o ? "application" : void 0, /* @__PURE__ */ m.createElement(Np, Us({}, a, {
    title: s,
    desc: c,
    role: l,
    tabIndex: u,
    width: r,
    height: n,
    style: iX,
    ref: t
  }), i);
}), sX = (e) => {
  var {
    children: t
  } = e, r = ee(Fc);
  if (!r)
    return null;
  var {
    width: n,
    height: o,
    y: i,
    x: a
  } = r;
  return /* @__PURE__ */ m.createElement(Np, {
    width: n,
    height: o,
    x: a,
    y: i
  }, t);
}, $w = /* @__PURE__ */ Fe((e, t) => {
  var {
    children: r
  } = e, n = nX(e, rX), o = ot();
  return o ? /* @__PURE__ */ m.createElement(sX, null, r) : /* @__PURE__ */ m.createElement(aX, Us({
    ref: t
  }, n), r);
});
function cX() {
  var e = Re(), [t, r] = je(null), n = ee(Uz);
  return Le(() => {
    if (t != null) {
      var o = t.getBoundingClientRect(), i = o.width / t.offsetWidth;
      We(i) && i !== n && e(pz(i));
    }
  }, [t, e, n]), r;
}
function Bw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lX(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bw(Object(r), !0).forEach(function(n) {
      uX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uX(e, t, r) {
  return (t = dX(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dX(e) {
  var t = fX(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fX(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Un.apply(null, arguments);
}
var pX = () => (dq(), null);
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
var hX = /* @__PURE__ */ Fe((e, t) => {
  var r, n, o = ye(null), [i, a] = je({
    containerWidth: Ws((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ws((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), s = he((u, l) => {
    a((d) => {
      var p = Math.round(u), f = Math.round(l);
      return d.containerWidth === p && d.containerHeight === f ? d : {
        containerWidth: p,
        containerHeight: f
      };
    });
  }, []), c = he((u) => {
    if (typeof t == "function" && t(u), u != null) {
      var {
        width: l,
        height: d
      } = u.getBoundingClientRect();
      s(l, d);
      var p = (v) => {
        var {
          width: h,
          height: g
        } = v[0].contentRect;
        s(h, g);
      }, f = new ResizeObserver(p);
      f.observe(u), o.current = f;
    }
  }, [t, s]);
  return Le(() => () => {
    var u = o.current;
    u?.disconnect();
  }, [s]), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Wc, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Un({
    ref: c
  }, e)));
}), mX = /* @__PURE__ */ Fe((e, t) => {
  var {
    width: r,
    height: n
  } = e, [o, i] = je({
    containerWidth: Ws(r),
    containerHeight: Ws(n)
  }), a = he((c, u) => {
    i((l) => {
      var d = Math.round(c), p = Math.round(u);
      return l.containerWidth === d && l.containerHeight === p ? l : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), s = he((c) => {
    if (typeof t == "function" && t(c), c != null) {
      var {
        width: u,
        height: l
      } = c.getBoundingClientRect();
      a(u, l);
    }
  }, [t, a]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Wc, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ m.createElement("div", Un({
    ref: s
  }, e)));
}), vX = /* @__PURE__ */ Fe((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Wc, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement("div", Un({
    ref: t
  }, e)));
}), gX = /* @__PURE__ */ Fe((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return Nr(r) || Nr(n) ? /* @__PURE__ */ m.createElement(mX, Un({}, e, {
    ref: t
  })) : /* @__PURE__ */ m.createElement(vX, Un({}, e, {
    ref: t
  }));
});
function yX(e) {
  return e === !0 ? hX : gX;
}
var bX = /* @__PURE__ */ Fe((e, t) => {
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
    onTouchEnd: f,
    onTouchMove: v,
    onTouchStart: h,
    style: g,
    width: y,
    responsive: w,
    dispatchTouchEvents: x = !0
  } = e, S = ye(null), E = Re(), [P, O] = je(null), [A, _] = je(null), N = cX(), T = Xp(), I = T?.width > 0 ? T.width : y, j = T?.height > 0 ? T.height : o, C = he((L) => {
    N(L), typeof t == "function" && t(L), O(L), _(L), L != null && (S.current = L);
  }, [N, t, O, _]), D = he((L) => {
    E($T(L)), E(zt({
      handler: i,
      reactEvent: L
    }));
  }, [E, i]), $ = he((L) => {
    E(Lf(L)), E(zt({
      handler: u,
      reactEvent: L
    }));
  }, [E, u]), z = he((L) => {
    E(xC()), E(zt({
      handler: l,
      reactEvent: L
    }));
  }, [E, l]), M = he((L) => {
    E(Lf(L)), E(zt({
      handler: d,
      reactEvent: L
    }));
  }, [E, d]), F = he(() => {
    E(KT());
  }, [E]), oe = he((L) => {
    E(WT(L.key));
  }, [E]), H = he((L) => {
    E(zt({
      handler: a,
      reactEvent: L
    }));
  }, [E, a]), ae = he((L) => {
    E(zt({
      handler: s,
      reactEvent: L
    }));
  }, [E, s]), ie = he((L) => {
    E(zt({
      handler: c,
      reactEvent: L
    }));
  }, [E, c]), W = he((L) => {
    E(zt({
      handler: p,
      reactEvent: L
    }));
  }, [E, p]), te = he((L) => {
    E(zt({
      handler: h,
      reactEvent: L
    }));
  }, [E, h]), se = he((L) => {
    x && E(qT(L)), E(zt({
      handler: v,
      reactEvent: L
    }));
  }, [E, x, v]), K = he((L) => {
    E(zt({
      handler: f,
      reactEvent: L
    }));
  }, [E, f]), re = yX(w);
  return /* @__PURE__ */ m.createElement(UC.Provider, {
    value: P
  }, /* @__PURE__ */ m.createElement(rO.Provider, {
    value: A
  }, /* @__PURE__ */ m.createElement(re, {
    width: I ?? g?.width,
    height: j ?? g?.height,
    className: pe("recharts-wrapper", n),
    style: lX({
      position: "relative",
      cursor: "default",
      width: I,
      height: j
    }, g),
    onClick: D,
    onContextMenu: H,
    onDoubleClick: ae,
    onFocus: F,
    onKeyDown: oe,
    onMouseDown: ie,
    onMouseEnter: $,
    onMouseLeave: z,
    onMouseMove: M,
    onMouseUp: W,
    onTouchEnd: K,
    onTouchMove: se,
    onTouchStart: te,
    ref: C
  }, /* @__PURE__ */ m.createElement(pX, null), r)));
}), wX = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function xX(e, t) {
  if (e == null) return {};
  var r, n, o = EX(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function EX(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ZT = /* @__PURE__ */ Fe((e, t) => {
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
  } = e, d = xX(e, wX), p = ht(d);
  return c ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Wc, {
    width: r,
    height: n
  }), /* @__PURE__ */ m.createElement($w, {
    otherAttributes: p,
    title: u,
    desc: l
  }, i)) : /* @__PURE__ */ m.createElement(bX, {
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
  }, /* @__PURE__ */ m.createElement($w, {
    otherAttributes: p,
    title: u,
    desc: l,
    ref: t
  }, /* @__PURE__ */ m.createElement(xG, null, i)));
});
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $f.apply(null, arguments);
}
var SX = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, PX = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: SX,
  reverseStackOrder: !1,
  syncMethod: "index",
  responsive: !1
}, _m = /* @__PURE__ */ Fe(function(t, r) {
  var n, o = Ge(t.categoricalChartProps, PX), {
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
  return /* @__PURE__ */ m.createElement(GT, {
    preloadedState: {
      options: l
    },
    reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : i
  }, /* @__PURE__ */ m.createElement(gT, {
    chartData: u.data
  }), /* @__PURE__ */ m.createElement(YT, {
    layout: o.layout,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(XT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(ZT, $f({}, o, {
    ref: r
  })));
}), OX = ["axis"], AX = /* @__PURE__ */ Fe((e, t) => /* @__PURE__ */ m.createElement(_m, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: OX,
  tooltipPayloadSearcher: cl,
  categoricalChartProps: e,
  ref: t
})), CX = ["axis", "item"], TX = /* @__PURE__ */ Fe((e, t) => /* @__PURE__ */ m.createElement(_m, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: CX,
  tooltipPayloadSearcher: cl,
  categoricalChartProps: e,
  ref: t
}));
function _X(e) {
  var t = Re();
  return Le(() => {
    t(XY(e));
  }, [t, e]), null;
}
var kX = ["layout"];
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bf.apply(null, arguments);
}
function NX(e, t) {
  if (e == null) return {};
  var r, n, o = IX(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function IX(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var RX = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, MX = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: RX,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1
}, DX = /* @__PURE__ */ Fe(function(t, r) {
  var n, o = Ge(t.categoricalChartProps, MX), {
    layout: i
  } = o, a = NX(o, kX), {
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
  return /* @__PURE__ */ m.createElement(GT, {
    preloadedState: {
      options: d
    },
    reduxStoreName: (n = o.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ m.createElement(gT, {
    chartData: o.data
  }), /* @__PURE__ */ m.createElement(YT, {
    layout: i,
    margin: o.margin
  }), /* @__PURE__ */ m.createElement(XT, {
    accessibilityLayer: o.accessibilityLayer,
    barCategoryGap: o.barCategoryGap,
    maxBarSize: o.maxBarSize,
    stackOffset: o.stackOffset,
    barGap: o.barGap,
    barSize: o.barSize,
    syncId: o.syncId,
    syncMethod: o.syncMethod,
    className: o.className
  }), /* @__PURE__ */ m.createElement(_X, {
    cx: o.cx,
    cy: o.cy,
    startAngle: o.startAngle,
    endAngle: o.endAngle,
    innerRadius: o.innerRadius,
    outerRadius: o.outerRadius
  }), /* @__PURE__ */ m.createElement(ZT, Bf({}, a, {
    ref: r
  })));
}), jX = ["item"], LX = {
  layout: "centric",
  startAngle: 0,
  endAngle: 360,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, $X = /* @__PURE__ */ Fe((e, t) => {
  var r = Ge(e, LX);
  return /* @__PURE__ */ m.createElement(DX, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: jX,
    tooltipPayloadSearcher: cl,
    categoricalChartProps: r,
    ref: t
  });
}), BX = ["axis"], FX = /* @__PURE__ */ Fe((e, t) => /* @__PURE__ */ m.createElement(_m, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: BX,
  tooltipPayloadSearcher: cl,
  categoricalChartProps: e,
  ref: t
}));
const zX = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: u, children: /* @__PURE__ */ b(zc, { width: s, height: c, children: /* @__PURE__ */ U(TX, { data: e, layout: d, children: [
      o && /* @__PURE__ */ b(bl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        wl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        xl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ b(ll, {}),
      i && /* @__PURE__ */ b(Kn, {}),
      t.map((h, g) => /* @__PURE__ */ b(
        mT,
        {
          dataKey: h,
          fill: v[g % v.length],
          barSize: l
        },
        h
      ))
    ] }) }) });
  }
);
zX.displayName = "BarChart";
const UX = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: l, children: /* @__PURE__ */ b(zc, { width: c, height: u, children: /* @__PURE__ */ U(AX, { data: e, children: [
      o && /* @__PURE__ */ b(bl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        wl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        xl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ b(ll, {}),
      i && /* @__PURE__ */ b(Kn, {}),
      t.map((h, g) => /* @__PURE__ */ b(
        _T,
        {
          type: "monotone",
          dataKey: h,
          stroke: v[g % v.length],
          strokeWidth: d,
          dot: s
        },
        h
      ))
    ] }) }) });
  }
);
UX.displayName = "LineChart";
const WX = m.forwardRef(
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
    return /* @__PURE__ */ b("div", { ref: p, className: u, children: /* @__PURE__ */ b(zc, { width: s, height: c, children: /* @__PURE__ */ U(FX, { data: e, children: [
      o && /* @__PURE__ */ b(bl, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
      /* @__PURE__ */ b(
        wl,
        {
          dataKey: r,
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      /* @__PURE__ */ b(
        xl,
        {
          stroke: "hsl(var(--muted-foreground))",
          style: { fontSize: "0.875rem" }
        }
      ),
      a && /* @__PURE__ */ b(ll, {}),
      i && /* @__PURE__ */ b(Kn, {}),
      t.map((h, g) => /* @__PURE__ */ b(
        LT,
        {
          type: "monotone",
          dataKey: h,
          stroke: v[g % v.length],
          fill: v[g % v.length],
          strokeWidth: l,
          fillOpacity: d
        },
        h
      ))
    ] }) }) });
  }
);
WX.displayName = "AreaChart";
const KX = m.forwardRef(
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
  }, f) => {
    const h = n || [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(221.2 83.2% 53.3%)",
      "hsl(204 94% 94%)",
      "hsl(142 71% 45%)",
      "hsl(0 84.2% 60.2%)",
      "hsl(210 40% 96.1%)",
      "hsl(220 14.3% 95.9%)"
    ];
    return /* @__PURE__ */ b("div", { ref: f, className: p, children: /* @__PURE__ */ b(zc, { width: l, height: d, children: /* @__PURE__ */ U($X, { children: [
      /* @__PURE__ */ b(
        uT,
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
          children: e.map((y, w) => /* @__PURE__ */ b(na, { fill: h[w % h.length] }, `cell-${w}`))
        }
      ),
      a && /* @__PURE__ */ b(ll, {}),
      i && /* @__PURE__ */ b(Kn, {})
    ] }) }) });
  }
);
KX.displayName = "PieChart";
const dZ = ({
  title: e,
  subtitle: t,
  logo: r,
  user: n,
  menuItems: o = [],
  menuGroups: i = [],
  initialCollapsed: a = !0,
  onLogout: s,
  notifications: c,
  onNotificationRead: u,
  onMarkAllAsRead: l,
  onClearAllNotifications: d,
  onViewAllNotifications: p,
  breadcrumbs: f = [],
  modules: v,
  currentModule: h,
  onModuleChange: g,
  showAboutMenuItem: y = !1,
  renderAboutModal: w,
  onLogoClick: x,
  companyLogo: S,
  headerMode: E,
  headerLogo: P,
  headerLogoCollapsed: O,
  children: A
}) => {
  const [_, N] = m.useState(a), [T, I] = m.useState(!1), [j, C] = m.useState(!1);
  return m.useEffect(() => {
    const D = window.matchMedia("(max-width: 1023px)"), $ = () => {
      I(D.matches), D.matches || C(!1);
    };
    return $(), D.addEventListener("change", $), () => D.removeEventListener("change", $);
  }, []), m.useEffect(() => T && j ? (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "";
  }) : (document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [T, j]), /* @__PURE__ */ U("div", { className: "relative min-h-screen bg-background", children: [
    /* @__PURE__ */ b(
      SP,
      {
        title: e,
        logo: r,
        items: o,
        groups: i,
        isCollapsed: _,
        onToggleCollapse: () => N(!_),
        onLogout: s,
        onLogoClick: x,
        companyLogo: S,
        headerMode: E,
        headerLogo: P,
        headerLogoCollapsed: O,
        isMobile: T,
        isMobileOpen: j,
        onMobileClose: () => C(!1)
      }
    ),
    /* @__PURE__ */ b(
      XP,
      {
        isCollapsed: _,
        isMobile: T,
        onMobileMenuToggle: () => C((D) => !D),
        breadcrumbs: f,
        user: {
          name: n.name,
          role: n.role,
          avatarUrl: n.avatarUrl
        },
        companyName: t,
        notifications: c,
        onNotificationRead: u,
        onMarkAllAsRead: l,
        onClearAllNotifications: d,
        onViewAllNotifications: p,
        modules: v,
        currentModule: h,
        onModuleChange: g,
        showAboutMenuItem: y,
        renderAboutModal: w,
        onLogout: s
      }
    ),
    /* @__PURE__ */ b(
      "main",
      {
        className: V(
          "transition-all duration-300 pt-[52px] min-h-screen",
          T ? "ml-0" : _ ? "ml-[64px]" : "ml-[220px]"
        ),
        children: /* @__PURE__ */ b("div", { className: "w-full h-full p-6", children: A })
      }
    )
  ] });
}, fZ = ({
  title: e,
  subtitle: t,
  icon: r,
  density: n = "default",
  filtersSlot: o,
  actions: i = [],
  showDefaultActions: a = !0,
  onAdd: s,
  onEdit: c,
  onDelete: u,
  onRefresh: l,
  selectedRowsCount: d = 0,
  children: p,
  className: f
}) => {
  const { toast: v } = uP(), [h, g] = m.useState(!1), y = async () => {
    if (!(!l || h)) {
      g(!0);
      try {
        await l();
      } finally {
        setTimeout(() => g(!1), 600);
      }
    }
  }, w = () => {
    if (d === 0) {
      v({
        title: "Atenção",
        description: "Selecione um registro para editar.",
        variant: "warning"
      });
      return;
    }
    if (d > 1) {
      v({
        title: "Atenção",
        description: "Selecione apenas um registro para editar.",
        variant: "warning"
      });
      return;
    }
    c?.();
  }, x = () => {
    if (d === 0) {
      v({
        title: "Atenção",
        description: "Selecione ao menos um registro para excluir.",
        variant: "warning"
      });
      return;
    }
    u?.();
  }, S = [];
  a && (s && S.push({
    key: "add",
    label: "Incluir",
    icon: /* @__PURE__ */ b(W_, { className: "h-4 w-4" }),
    variant: "secondary",
    onClick: s
  }), c && S.push({
    key: "edit",
    label: "Editar",
    icon: /* @__PURE__ */ b(Y_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: w
  }), u && S.push({
    key: "delete",
    label: "Excluir",
    icon: /* @__PURE__ */ b(Q_, { className: "h-4 w-4" }),
    variant: "outline",
    onClick: x
  }));
  const E = [...S, ...i], P = n === "compact";
  return /* @__PURE__ */ U("div", { className: V("flex flex-col h-full w-full", f), children: [
    /* @__PURE__ */ U("div", { className: "mb-4 rounded-lg border bg-muted/30", children: [
      /* @__PURE__ */ U("div", { className: V(
        "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
        P ? "px-3 py-2.5" : "px-4 py-3"
      ), children: [
        /* @__PURE__ */ U("div", { className: "flex items-center gap-3", children: [
          r && /* @__PURE__ */ b("div", { className: "flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 shadow-sm hover:shadow hover:scale-[1.02] transition-all duration-200 cursor-default", children: r }),
          /* @__PURE__ */ U("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ U("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ b("h1", { className: V(
                "font-bold text-foreground tracking-tight",
                P ? "text-xl" : "text-2xl"
              ), children: e }),
              l && /* @__PURE__ */ b(
                "button",
                {
                  onClick: y,
                  disabled: h,
                  className: V(
                    "p-1.5 rounded-md transition-all hover:bg-accent text-muted-foreground hover:text-foreground",
                    h && "text-primary"
                  ),
                  title: "Atualizar",
                  children: /* @__PURE__ */ b(V_, { className: V("h-4 w-4 transition-transform", h && "animate-spin") })
                }
              )
            ] }),
            t && /* @__PURE__ */ b("p", { className: V(
              "text-muted-foreground mt-0.5",
              P ? "text-xs" : "text-sm"
            ), children: t })
          ] })
        ] }),
        E.length > 0 && /* @__PURE__ */ b("div", { className: "flex flex-wrap items-center gap-2 md:justify-end", children: E.map((O) => /* @__PURE__ */ U(
          Yr,
          {
            variant: O.variant || "outline",
            size: "sm",
            onClick: O.onClick,
            disabled: O.disabled,
            className: "gap-2",
            children: [
              O.icon,
              O.label
            ]
          },
          O.key
        )) })
      ] }),
      o && /* @__PURE__ */ b("div", { className: V(
        "border-t bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        P ? "px-3 py-2" : "px-4 py-2.5"
      ), children: o })
    ] }),
    /* @__PURE__ */ b("div", { className: "overflow-auto", children: p })
  ] });
};
function pZ({
  columns: e,
  data: t,
  loading: r = !1,
  rowKey: n,
  selectable: o,
  selectedRows: i = [],
  onSelectionChange: a,
  onRowClick: s,
  onRowDoubleClick: c,
  className: u,
  emptyText: l = "Nenhum registro encontrado",
  dragSelect: d = !0,
  pageSize: p = 10,
  pageSizeOptions: f = [5, 10, 20, 50]
}) {
  const v = o !== void 0 ? o : !!a, h = m.useRef(null), g = m.useRef(/* @__PURE__ */ new Map()), [y, w] = m.useState(null), [x, S] = m.useState(!1), E = m.useRef(null), P = m.useRef(!1), [O, A] = m.useState(1), [_, N] = m.useState(p), T = Math.ceil(t.length / _), I = (O - 1) * _, j = I + _, C = t.slice(I, j);
  m.useEffect(() => {
    A(1);
  }, [t.length, _]);
  const D = (W) => typeof n == "function" ? n(W) : W[n], $ = (W) => {
    const te = D(W);
    return i.some((se) => D(se) === te);
  }, z = m.useCallback((W) => {
    if (!h.current) return [];
    const te = h.current.getBoundingClientRect(), se = Math.min(W.startY, W.endY), K = Math.max(W.startY, W.endY), re = [];
    return C.forEach((L) => {
      const G = D(L), Y = g.current.get(G);
      if (!Y) return;
      const B = Y.getBoundingClientRect(), me = B.top - te.top + h.current.scrollTop;
      me + B.height >= se && me <= K && re.push(L);
    }), re;
  }, [C, D]), M = (W) => {
    if (!v || !a || !d || W.button !== 0) return;
    const te = h.current;
    if (!te) return;
    const se = te.getBoundingClientRect(), K = W.clientX - se.left + te.scrollLeft, re = W.clientY - se.top + te.scrollTop;
    E.current = { x: K, y: re, clientX: W.clientX, clientY: W.clientY }, P.current = !1;
  }, F = m.useCallback((W) => {
    if (!E.current || !h.current || !a) return;
    const te = Math.abs(W.clientX - E.current.clientX), se = Math.abs(W.clientY - E.current.clientY);
    if (!P.current && (te > 5 || se > 5) && (P.current = !0, S(!0), !W.ctrlKey && !W.metaKey && !W.shiftKey && a([])), P.current) {
      const K = h.current.getBoundingClientRect(), re = W.clientX - K.left + h.current.scrollLeft, L = W.clientY - K.top + h.current.scrollTop, G = {
        startX: E.current.x,
        startY: E.current.y,
        endX: re,
        endY: L
      };
      w(G);
      const Y = z(G);
      a(Y);
    }
  }, [z, a]), oe = m.useCallback(() => {
    P.current = !1, E.current = null, S(!1), w(null);
  }, []);
  m.useEffect(() => (window.addEventListener("mousemove", F), window.addEventListener("mouseup", oe), () => {
    window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", oe);
  }), [F, oe]);
  const H = (W, te) => {
    if (!v || !a) return;
    const se = D(W), K = $(W);
    if (te.ctrlKey || te.metaKey)
      a(K ? i.filter((re) => D(re) !== se) : [...i, W]);
    else if (te.shiftKey && i.length > 0) {
      const re = D(i[i.length - 1]), L = t.findIndex((Te) => D(Te) === se), G = t.findIndex((Te) => D(Te) === re), Y = Math.min(L, G), B = Math.max(L, G), me = t.slice(Y, B + 1), le = [...i];
      me.forEach((Te) => {
        const Ke = D(Te);
        le.some((St) => D(St) === Ke) || le.push(Te);
      }), a(le);
    } else
      a(K ? [] : [W]);
  }, ae = (W) => {
    W.target === W.currentTarget && v && a && a([]);
  }, ie = () => {
    if (!y) return;
    const W = Math.min(y.startX, y.endX), te = Math.min(y.startY, y.endY), se = Math.abs(y.endX - y.startX), K = Math.abs(y.endY - y.startY);
    return {
      position: "absolute",
      left: W,
      top: te,
      width: se,
      height: K,
      backgroundColor: "hsl(var(--primary) / 0.1)",
      border: "1px solid hsl(var(--primary) / 0.5)",
      borderRadius: "2px",
      pointerEvents: "none",
      zIndex: 10
    };
  };
  return /* @__PURE__ */ U("div", { className: V("flex flex-col", u), children: [
    /* @__PURE__ */ U(
      "div",
      {
        ref: h,
        className: "rounded-md border relative",
        onClick: ae,
        onMouseDown: M,
        children: [
          x && y && /* @__PURE__ */ b("div", { style: ie() }),
          /* @__PURE__ */ U(bP, { children: [
            /* @__PURE__ */ b(wP, { children: /* @__PURE__ */ b(Zo, { children: e.map((W) => /* @__PURE__ */ b(
              EP,
              {
                style: W.width ? { width: W.width } : void 0,
                children: W.title
              },
              W.key
            )) }) }),
            /* @__PURE__ */ b(xP, { children: r ? Array.from({ length: 5 }).map((W, te) => /* @__PURE__ */ b(Zo, { children: e.map((se) => /* @__PURE__ */ b(za, { children: /* @__PURE__ */ b("div", { className: "h-4 bg-muted animate-pulse rounded" }) }, se.key)) }, `skeleton-${te}`)) : t.length === 0 ? /* @__PURE__ */ b(Zo, { children: /* @__PURE__ */ b(
              za,
              {
                colSpan: e.length + (v ? 1 : 0),
                className: "text-center py-8 text-muted-foreground",
                children: l
              }
            ) }) : C.map((W, te) => {
              const se = D(W), K = $(W);
              return /* @__PURE__ */ b(
                Zo,
                {
                  ref: (re) => {
                    re && g.current.set(se, re);
                  },
                  "data-row": "true",
                  "data-state": K ? "selected" : "",
                  onClick: (re) => {
                    v ? H(W, re) : s?.(W);
                  },
                  onDoubleClick: () => c?.(W),
                  className: V(
                    v || s || c ? "cursor-pointer" : "",
                    v && "select-none",
                    K && "!bg-secondary/20"
                  ),
                  children: e.map((re) => {
                    const L = re.dataIndex ? W[re.dataIndex] : void 0;
                    return /* @__PURE__ */ b(za, { children: re.render ? re.render(L, W, te) : L || "-" }, re.key);
                  })
                },
                se
              );
            }) })
          ] })
        ]
      }
    ),
    t.length > 0 && /* @__PURE__ */ U("div", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ U("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ b("span", { children: "Linhas por página:" }),
        /* @__PURE__ */ b(
          "select",
          {
            value: _,
            onChange: (W) => N(Number(W.target.value)),
            className: "h-8 rounded border border-input bg-background px-2 text-sm",
            children: f.map((W) => /* @__PURE__ */ b("option", { value: W, children: W }, W))
          }
        )
      ] }),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: /* @__PURE__ */ U("span", { children: [
        I + 1,
        "-",
        Math.min(j, t.length),
        " de ",
        t.length
      ] }) }),
      /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ b(
          Yr,
          {
            variant: "outline",
            size: "sm",
            onClick: () => A(1),
            disabled: O === 1,
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ b(P_, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ b(
          Yr,
          {
            variant: "outline",
            size: "sm",
            onClick: () => A((W) => Math.max(1, W - 1)),
            disabled: O === 1,
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ b(Hw, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ U("span", { className: "px-2 text-sm", children: [
          O,
          " / ",
          T || 1
        ] }),
        /* @__PURE__ */ b(
          Yr,
          {
            variant: "outline",
            size: "sm",
            onClick: () => A((W) => Math.min(T, W + 1)),
            disabled: O === T || T === 0,
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ b(qs, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ b(
          Yr,
          {
            variant: "outline",
            size: "sm",
            onClick: () => A(T),
            disabled: O === T || T === 0,
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ b(A_, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
function hZ({
  columns: e,
  data: t,
  rowKey: r,
  selectedRow: n,
  onRowSelect: o,
  renderDetail: i,
  renderPagination: a,
  className: s,
  tableClassName: c,
  detailClassName: u,
  gridRatio: l = [7, 5]
}) {
  const d = (f) => typeof r == "function" ? r(f) : f[r], p = (f) => {
    if (o) {
      const v = n && d(n) === d(f);
      o(v ? null : f);
    }
  };
  return /* @__PURE__ */ U("div", { className: V("flex gap-6", s), children: [
    /* @__PURE__ */ b(
      "div",
      {
        className: V("min-w-0 shrink-0", c),
        style: { flex: `${l[0]} 0 0%` },
        children: /* @__PURE__ */ U(wd, { className: "overflow-hidden", children: [
          /* @__PURE__ */ b("div", { className: "overflow-x-auto", children: /* @__PURE__ */ U("table", { className: "w-full", children: [
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
              const v = d(f), h = n && d(n) === v;
              return /* @__PURE__ */ b(
                "tr",
                {
                  onClick: () => p(f),
                  className: V(
                    "border-b transition-colors cursor-pointer",
                    h ? "bg-secondary/20" : "hover:bg-muted/50"
                  ),
                  children: e.map((g) => {
                    const y = g.dataIndex ? f[g.dataIndex] : void 0;
                    return /* @__PURE__ */ b("td", { className: "px-4 py-2 align-middle", children: g.render ? g.render(y, f) : y || "-" }, g.key);
                  })
                },
                v
              );
            }) })
          ] }) }),
          a && /* @__PURE__ */ b("div", { className: "border-t", children: a() })
        ] })
      }
    ),
    /* @__PURE__ */ b(
      "div",
      {
        className: V("min-w-0", u),
        style: { flex: `${l[1]} 1 0%` },
        children: n && i && /* @__PURE__ */ b(wd, { className: "sticky top-6", children: i(n) })
      }
    )
  ] });
}
const mZ = U0, vZ = W0, gZ = oc, VX = K0, JT = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  ec,
  {
    className: V(
      "fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
JT.displayName = ec.displayName;
const qX = vo(
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
), HX = m.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ U(VX, { children: [
  /* @__PURE__ */ b(JT, {}),
  /* @__PURE__ */ U(
    tc,
    {
      ref: o,
      className: V(qX({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ U(oc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b(Ff, { className: "h-4 w-4" }),
          /* @__PURE__ */ b("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
HX.displayName = tc.displayName;
const GX = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: V(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
GX.displayName = "SheetHeader";
const YX = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: V(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
YX.displayName = "SheetFooter";
const XX = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  rc,
  {
    ref: r,
    className: V("text-lg font-semibold text-foreground", e),
    ...t
  }
));
XX.displayName = rc.displayName;
const ZX = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ b(
  nc,
  {
    ref: r,
    className: V("text-sm text-muted-foreground", e),
    ...t
  }
));
ZX.displayName = nc.displayName;
const yZ = ({
  children: e,
  isAuthenticated: t,
  redirectTo: r = "/",
  externalRedirect: n = !1
}) => {
  const o = Uw();
  return t ? e : n && r ? (window.location.href = r, null) : /* @__PURE__ */ b(o_, { to: r, state: { from: o }, replace: !0 });
};
class vd {
  static async identify(t) {
    return (await Zt.post("/auth/IdentifyUser", {
      username: t.username,
      password: t.password
    })).data;
  }
  static async loginWithContract(t) {
    const n = (await Zt.post("/auth/LoginWithContract", t)).data, { accessToken: o, refreshToken: i, user: a, contract: s } = n;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", i), localStorage.setItem("@IdentityProvider:user", JSON.stringify(a)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(s)), n;
  }
  static async login(t) {
    const n = (await Zt.post("/auth/login", {
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
      const t = this.getRefreshToken();
      t && await Ne.post(
        `${_v()}/auth/Logout`,
        { refreshToken: t },
        { headers: { "Content-Type": "application/json" } }
      );
    } finally {
      this.logout();
    }
  }
  static async logoutAllDevices() {
    try {
      const t = this.getRefreshToken();
      t && await Ne.post(
        `${_v()}/auth/LogoutAllDevices`,
        { refreshToken: t },
        { headers: { "Content-Type": "application/json" } }
      );
    } finally {
      this.logout();
    }
  }
  static async refreshAccessToken() {
    const t = this.getRefreshToken();
    if (!t)
      throw new Error("Refresh token não encontrado");
    try {
      const n = (await Zt.post("/auth/RefreshToken", {
        refreshToken: t
      })).data, { accessToken: o, refreshToken: i } = n;
      return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", i), n;
    } catch (r) {
      throw this.logout(), r;
    }
  }
  static async revokeRefreshToken(t) {
    const r = t || this.getRefreshToken();
    r && await Zt.post("/auth/RevokeRefreshToken", {
      refreshToken: r
    });
  }
  static async getActiveSessions() {
    return (await Zt.get("/auth/GetActiveSessions")).data;
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
const QT = m.createContext(null), e_ = () => {
  const e = m.useContext(QT);
  if (!e)
    throw new Error("useAuth must be used within AuthProvider");
  return e;
}, bZ = ({ children: e, onLogout: t }) => {
  const [r, n] = m.useState(() => {
    const w = localStorage.getItem("@IdentityProvider:user");
    return w ? JSON.parse(w) : null;
  }), [o, i] = m.useState(() => {
    const w = localStorage.getItem("@IdentityProvider:contract");
    return w ? JSON.parse(w) : null;
  }), [a, s] = m.useState(() => localStorage.getItem("@IdentityProvider:accessToken")), [c, u] = m.useState(() => localStorage.getItem("@IdentityProvider:refreshToken")), l = m.useCallback((w) => {
    n(w.user), i(w.contract), s(w.accessToken), u(w.refreshToken);
    const { criadoEm: x, ultimaAlteracao: S, lastLoginAt: E, ...P } = w.user;
    localStorage.setItem("@IdentityProvider:user", JSON.stringify(P)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(w.contract)), localStorage.setItem("@IdentityProvider:accessToken", w.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", w.refreshToken);
  }, []), d = m.useCallback(() => {
    n(null), i(null), s(null), u(null), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), t?.();
  }, [t]), p = m.useCallback(async () => {
    await vd.logoutAllDevices(), d();
  }, [d]), f = m.useCallback(async () => {
    try {
      const w = await vd.refreshAccessToken();
      w && (s(w.accessToken), u(w.refreshToken), localStorage.setItem("@IdentityProvider:accessToken", w.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", w.refreshToken));
    } catch {
      d();
    }
  }, [d]), v = m.useCallback(async () => {
    try {
      return await vd.getActiveSessions();
    } catch {
      return [];
    }
  }, []), h = m.useCallback(
    (w) => {
      if (r) {
        const x = { ...r, ...w };
        n(x);
        const { criadoEm: S, ultimaAlteracao: E, lastLoginAt: P, ...O } = x;
        localStorage.setItem("@IdentityProvider:user", JSON.stringify(O));
      }
    },
    [r]
  ), g = !!r && !!a, y = m.useMemo(
    () => ({
      user: r,
      contract: o,
      accessToken: a,
      refreshToken: c,
      isAuthenticated: g,
      login: l,
      logout: d,
      logoutAllDevices: p,
      refreshAccessToken: f,
      getActiveSessions: v,
      updateUser: h
    }),
    [
      r,
      o,
      a,
      c,
      g,
      l,
      d,
      p,
      f,
      v,
      h
    ]
  );
  return /* @__PURE__ */ b(QT.Provider, { value: y, children: e });
}, JX = (e) => {
  try {
    const r = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(
      atob(r).split("").map((o) => "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2)).join("")
    );
    return JSON.parse(n);
  } catch {
    return null;
  }
}, wZ = ({
  redirectTo: e = "/",
  identityProviderUrl: t,
  onSuccess: r,
  onError: n
}) => {
  const o = Ww(), [i] = i_(), { login: a } = e_();
  return Le(() => {
    (async () => {
      try {
        const c = i.get("accessToken"), u = i.get("refreshToken");
        if (!c || !u)
          throw new Error("Tokens não encontrados na URL");
        const l = JX(c), d = l?.email, p = Array.isArray(d) ? d[0] : d || "", f = {
          accessToken: c,
          refreshToken: u,
          user: {
            id: Number(l?.user_id || l?.nameid || 0),
            username: l?.username || l?.unique_name || "",
            email: p,
            name: l?.name || l?.given_name || ""
          },
          contract: {
            contratoId: Number(l?.contrato_id || 0),
            sistemaName: l?.sistema_name || "",
            empresaName: l?.empresa_name || "",
            redirectUris: [],
            perfilName: l?.perfil_name || ""
          }
        };
        a(f), r && r(), o(e, { replace: !0 });
      } catch (c) {
        n && n(c);
        const u = t || void 0;
        u && (window.location.href = u);
      }
    })();
  }, [i, a, o, e, t, r, n]), /* @__PURE__ */ b("div", { className: "flex flex-col items-center justify-center min-h-screen bg-background gap-6", children: /* @__PURE__ */ b("div", { className: "w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" }) });
}, xZ = () => {
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
function EZ(e = {}) {
  const [t, r] = je({
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
        }), e.onSuccess && e.onSuccess(s), e.showSuccessMessage && a.message && jd({
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
        }), e.onError && e.onError(s), e.showErrorMessage !== !1 && jd({
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
const SZ = (e) => {
  const t = Ww(), r = Uw(), n = e.basePath || "", o = (c) => {
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
function PZ(e) {
  const { pathname: t, navigate: r, home: n = { label: "Dashboard", path: "/" }, menuItems: o = [], menuGroups: i = [] } = e;
  return rr(() => {
    const a = [];
    t !== n.path && a.push({ label: n.label, onClick: () => r(n.path) });
    for (const s of o)
      if (s.path === t)
        return a.push({ label: s.label }), a;
    for (const s of i)
      for (const c of s.items)
        if (c.path === t)
          return a.push({ label: c.label }), a;
    return a;
  }, [t, r, n, o, i]);
}
function QX(e) {
  try {
    const r = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(
      atob(r).split("").map((o) => "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2)).join("")
    );
    return JSON.parse(n);
  } catch {
    return {};
  }
}
function OZ() {
  const { accessToken: e } = e_(), { permissions: t, isSuperUser: r } = rr(() => {
    if (!e)
      return { permissions: [], isSuperUser: !1 };
    const a = QX(e);
    let s = [];
    return a.permission && (s = Array.isArray(a.permission) ? a.permission : [a.permission]), {
      permissions: s,
      isSuperUser: a.super_user === "true"
    };
  }, [e]);
  return {
    permissions: t,
    isSuperUser: r,
    hasPermission: (a) => r ? !0 : t.includes(a),
    hasAnyPermission: (a) => r ? !0 : a.some((s) => t.includes(s)),
    hasAllPermissions: (a) => r ? !0 : a.every((s) => t.includes(s))
  };
}
const e7 = (e) => {
  switch (e) {
    case 1:
      return "success";
    case 2:
      return "warning";
    case 3:
      return "error";
    default:
      return "info";
  }
}, t7 = (e) => ({
  id: e.id.toString(),
  title: e.titulo,
  message: e.mensagem || "",
  timestamp: new Date(e.criadoEm),
  read: e.lida,
  type: e7(e.tipo)
});
function AZ(e = {}) {
  const { pollingInterval: t = 3e4, enabled: r = !0 } = e, [n, o] = je([]), [i, a] = je(!1), [s, c] = je(null), u = he(async () => {
    if (r)
      try {
        a(!0), c(null);
        const h = (await Zt.get("/Notificacao/GetMinhas")).data.map(t7);
        o(h);
      } catch {
        c("Erro ao carregar notificações");
      } finally {
        a(!1);
      }
  }, [r]), l = he(async (v) => {
    try {
      await Zt.put(`/Notificacao/${v}/marcar-lida`), o(
        (h) => h.map((g) => g.id === v ? { ...g, read: !0 } : g)
      );
    } catch {
    }
  }, []), d = he(async () => {
    try {
      await Zt.put("/Notificacao/marcar-todas-lidas"), o((v) => v.map((h) => ({ ...h, read: !0 })));
    } catch {
    }
  }, []), p = he(async () => {
    try {
      await Zt.delete("/Notificacao/limpar-todas"), o([]);
    } catch {
    }
  }, []);
  Le(() => {
    u();
  }, [u]), Le(() => {
    if (!r || t <= 0) return;
    const v = setInterval(u, t);
    return () => clearInterval(v);
  }, [r, t, u]);
  const f = n.filter((v) => !v.read).length;
  return {
    notifications: n,
    unreadCount: f,
    loading: i,
    error: s,
    refresh: u,
    markAsRead: l,
    markAllAsRead: d,
    clearAll: p
  };
}
export {
  dZ as AppLayout,
  WX as AreaChart,
  bZ as AuthProvider,
  vd as AuthService,
  s7 as Badge,
  zX as BarChart,
  PP as Breadcrumb,
  Yr as Button,
  wZ as Callback,
  wd as Card,
  Uk as CardContent,
  zk as CardDescription,
  Wk as CardFooter,
  Bk as CardHeader,
  Fk as CardTitle,
  e$ as ChartContainer,
  oN as Checkbox,
  xI as ConfirmModal,
  pZ as DataTable,
  hZ as DataTableWithDetail,
  d7 as Dropdown,
  dD as DropdownCheckboxItem,
  lD as DropdownContent,
  p7 as DropdownGroup,
  uD as DropdownItem,
  pD as DropdownLabel,
  h7 as DropdownPortal,
  v7 as DropdownRadioGroup,
  fD as DropdownRadioItem,
  hD as DropdownSeparator,
  mD as DropdownShortcut,
  m7 as DropdownSub,
  cD as DropdownSubContent,
  sD as DropdownSubTrigger,
  f7 as DropdownTrigger,
  ZP as GlobalLoader,
  H7 as GlobalLoaderProvider,
  a0 as Input,
  UX as LineChart,
  yI as Modal,
  u7 as ModalClose,
  q0 as ModalContent,
  X0 as ModalDescription,
  G0 as ModalFooter,
  H0 as ModalHeader,
  V0 as ModalOverlay,
  bI as ModalPortal,
  Y0 as ModalTitle,
  l7 as ModalTrigger,
  XP as Navbar,
  a7 as ODataHelper,
  fZ as PageLayout,
  KX as PieChart,
  yZ as ProtectedRoute,
  sj as RadioGroup,
  cj as RadioGroupItem,
  XD as SearchableSelect,
  qD as Select,
  sS as SelectContent,
  g7 as SelectGroup,
  cS as SelectItem,
  GD as SelectLabel,
  aS as SelectScrollDownButton,
  iS as SelectScrollUpButton,
  YD as SelectSeparator,
  oS as SelectTrigger,
  HD as SelectValue,
  mZ as Sheet,
  gZ as SheetClose,
  HX as SheetContent,
  ZX as SheetDescription,
  YX as SheetFooter,
  GX as SheetHeader,
  JT as SheetOverlay,
  VX as SheetPortal,
  XX as SheetTitle,
  vZ as SheetTrigger,
  SP as Sidebar,
  y2 as SidebarContent,
  b2 as SidebarFooter,
  g2 as SidebarHeader,
  w2 as SidebarNav,
  x2 as SidebarNavItem,
  hj as Switch,
  bP as Table,
  xP as TableBody,
  v2 as TableCaption,
  za as TableCell,
  m2 as TableFooter,
  EP as TableHead,
  wP as TableHeader,
  Zo as TableRow,
  y7 as Tabs,
  wj as TabsContent,
  yj as TabsList,
  bj as TabsTrigger,
  V7 as ThemeProvider,
  sP as Toast,
  Kj as ToastAction,
  lP as ToastDescription,
  zj as ToastProvider,
  cP as ToastTitle,
  aP as ToastViewport,
  b7 as Toaster,
  E7 as Tooltip,
  h2 as TooltipContent,
  x7 as TooltipProvider,
  S7 as TooltipTrigger,
  Kk as badgeVariants,
  $k as buttonVariants,
  V as cn,
  ZL as getApiBaseURL,
  _v as getIdentityProviderURL,
  Lk as getInitials,
  Zt as httpClient,
  Gj as reducer,
  W7 as setApiBaseURL,
  U7 as setGlobalLoaderContext,
  K7 as setIdentityProviderURL,
  jd as toast,
  Fj as toastIcons,
  EZ as useApi,
  SZ as useAppNavigation,
  e_ as useAuth,
  PZ as useBreadcrumbs,
  xZ as useFormErrors,
  q7 as useGlobalLoader,
  AZ as useNotifications,
  OZ as usePermissions,
  QL as useTheme,
  uP as useToast
};
