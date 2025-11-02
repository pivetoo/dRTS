import { jsx as p, Fragment as Fe, jsxs as W } from "react/jsx-runtime";
import * as c from "react";
import Xe, { forwardRef as Bs, createElement as Er, useState as Vu, useLayoutEffect as Hu } from "react";
import * as Lt from "react-dom";
import zu from "react-dom";
function Ho(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Sn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ho(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ho(e[o], null);
        }
      };
  };
}
function q(...e) {
  return c.useCallback(Sn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  const t = /* @__PURE__ */ Wu(e), n = c.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = c.Children.toArray(s), l = i.find(Ku);
    if (l) {
      const u = l.props.children, d = i.map((f) => f === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...a, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ju = /* @__PURE__ */ et("Slot");
// @__NO_SIDE_EFFECTS__
function Wu(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const a = Xu(o), i = qu(s, o.props);
      return o.type !== c.Fragment && (i.ref = r ? Sn(r, a) : a), c.cloneElement(o, i);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Us = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p(Fe, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Us, t;
}
function Ku(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Us;
}
function qu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const l = s(...i);
      return o(...i), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Xu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Vs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vs(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Hs() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vs(e)) && (r && (r += " "), r += t);
  return r;
}
const zo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, jo = Hs, En = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return jo(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((u) => {
    const d = n?.[u], f = s?.[u];
    if (d === null) return null;
    const v = zo(d) || zo(f);
    return o[u][v];
  }), i = n && Object.entries(n).reduce((u, d) => {
    let [f, v] = d;
    return v === void 0 || (u[f] = v), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: f, className: v, ...b } = d;
    return Object.entries(b).every((g) => {
      let [m, h] = g;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === h;
    }) ? [
      ...u,
      f,
      v
    ] : u;
  }, []);
  return jo(e, a, l, n?.class, n?.className);
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ju = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Wo = (e) => {
  const t = Ju(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, zs = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Zu = (e) => {
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
var Qu = {
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
const ed = Bs(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: a,
    ...i
  }, l) => Er(
    "svg",
    {
      ref: l,
      ...Qu,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: zs("lucide", o),
      ...!s && !Zu(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([u, d]) => Er(u, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (e, t) => {
  const n = Bs(
    ({ className: r, ...o }, s) => Er(ed, {
      ref: s,
      iconNode: t,
      className: zs(
        `lucide-${Yu(Wo(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Wo(e), n;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], nd = Oe("bell", td);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jr = Oe("check", rd);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Zr = Oe("chevron-down", od);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ad = Oe("chevron-left", sd);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qr = Oe("chevron-right", id);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ld = Oe("chevron-up", cd);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], js = Oe("circle", ud);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], fd = Oe("loader-circle", dd);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], md = Oe("log-out", pd);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ws = Oe("x", hd), eo = "-", gd = (e) => {
  const t = bd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(eo);
      return i[0] === "" && i.length !== 1 && i.shift(), Gs(i, t) || vd(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = n[a] || [];
      return i && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, Gs = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Gs(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(eo);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}, Go = /^\[(.+)\]$/, vd = (e) => {
  if (Go.test(e)) {
    const t = Go.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, bd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Rr(n[o], r, o, t);
  return r;
}, Rr = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ko(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (yd(o)) {
        Rr(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Rr(a, Ko(t, s), n, r);
    });
  });
}, Ko = (e, t) => {
  let n = e;
  return t.split(eo).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, yd = (e) => e.isThemeGetter, wd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    }
  };
}, Tr = "!", Nr = ":", xd = Nr.length, Cd = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, l = 0, u;
    for (let g = 0; g < o.length; g++) {
      let m = o[g];
      if (a === 0 && i === 0) {
        if (m === Nr) {
          s.push(o.slice(l, g)), l = g + xd;
          continue;
        }
        if (m === "/") {
          u = g;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--;
    }
    const d = s.length === 0 ? o : o.substring(l), f = Sd(d), v = f !== d, b = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
  if (t) {
    const o = t + Nr, s = r;
    r = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Sd = (e) => e.endsWith(Tr) ? e.substring(0, e.length - 1) : e.startsWith(Tr) ? e.substring(1) : e, Ed = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let s = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, Rd = (e) => ({
  cache: wd(e.cacheSize),
  parseClassName: Cd(e),
  sortModifiers: Ed(e),
  ...gd(e)
}), Td = /\s+/, Nd = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(Td);
  let l = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const d = i[u], {
      isExternal: f,
      modifiers: v,
      hasImportantModifier: b,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let h = !!m, y = r(h ? g.substring(0, m) : g);
    if (!y) {
      if (!h) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(g), !y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const w = s(v).join(":"), x = b ? w + Tr : w, C = x + y;
    if (a.includes(C))
      continue;
    a.push(C);
    const E = o(y, h);
    for (let P = 0; P < E.length; ++P) {
      const T = E[P];
      a.push(x + T);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Pd() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ks(t)) && (r && (r += " "), r += n);
  return r;
}
const Ks = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ks(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ad(e, ...t) {
  let n, r, o, s = a;
  function a(l) {
    const u = t.reduce((d, f) => f(d), e());
    return n = Rd(u), r = n.cache.get, o = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const u = r(l);
    if (u)
      return u;
    const d = Nd(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(Pd.apply(null, arguments));
  };
}
const ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, qs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, kd = /^\d+\/\d+$/, Id = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _d = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Od = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Md = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Dd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, it = (e) => kd.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), sr = (e) => e.endsWith("%") && K(e.slice(0, -1)), De = (e) => Id.test(e), Ld = () => !0, Fd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _d.test(e) && !Od.test(e)
), Ys = () => !1, $d = (e) => Md.test(e), Bd = (e) => Dd.test(e), Ud = (e) => !D(e) && !L(e), Vd = (e) => gt(e, Qs, Ys), D = (e) => qs.test(e), Ye = (e) => gt(e, ea, Fd), ar = (e) => gt(e, Gd, K), qo = (e) => gt(e, Js, Ys), Hd = (e) => gt(e, Zs, Bd), Xt = (e) => gt(e, ta, $d), L = (e) => Xs.test(e), Tt = (e) => vt(e, ea), zd = (e) => vt(e, Kd), Xo = (e) => vt(e, Js), jd = (e) => vt(e, Qs), Wd = (e) => vt(e, Zs), Yt = (e) => vt(e, ta, !0), gt = (e, t, n) => {
  const r = qs.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, vt = (e, t, n = !1) => {
  const r = Xs.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Js = (e) => e === "position" || e === "percentage", Zs = (e) => e === "image" || e === "url", Qs = (e) => e === "length" || e === "size" || e === "bg-size", ea = (e) => e === "length", Gd = (e) => e === "number", Kd = (e) => e === "family-name", ta = (e) => e === "shadow", qd = () => {
  const e = ae("color"), t = ae("font"), n = ae("text"), r = ae("font-weight"), o = ae("tracking"), s = ae("leading"), a = ae("breakpoint"), i = ae("container"), l = ae("spacing"), u = ae("radius"), d = ae("shadow"), f = ae("inset-shadow"), v = ae("text-shadow"), b = ae("drop-shadow"), g = ae("blur"), m = ae("perspective"), h = ae("aspect"), y = ae("ease"), w = ae("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], E = () => [...C(), L, D], P = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], N = () => [L, D, l], F = () => [it, "full", "auto", ...N()], B = () => [Ue, "none", "subgrid", L, D], z = () => ["auto", {
    span: ["full", Ue, L, D]
  }, Ue, L, D], H = () => [Ue, "auto", L, D], j = () => ["auto", "min", "max", "fr", L, D], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...N()], U = () => [it, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], R = () => [e, L, D], _ = () => [...C(), Xo, qo, {
    position: [L, D]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Z = () => ["auto", "cover", "contain", jd, Vd, {
    size: [L, D]
  }], ne = () => [sr, Tt, Ye], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    L,
    D
  ], Y = () => ["", K, Tt, Ye], ie = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [K, sr, Xo, qo], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    L,
    D
  ], se = () => ["none", K, L, D], J = () => ["none", K, L, D], te = () => [K, L, D], re = () => [it, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [De],
      breakpoint: [De],
      color: [Ld],
      container: [De],
      "drop-shadow": [De],
      ease: ["in", "out", "in-out"],
      font: [Ud],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [De],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [De],
      shadow: [De],
      spacing: ["px", K],
      text: [De],
      "text-shadow": [De],
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
        aspect: ["auto", "square", it, D, L, h]
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
        columns: [K, D, L, i]
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
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [Ue, "auto", L, D]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [it, "full", "auto", i, ...N()]
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
        flex: [K, it, "auto", "initial", "none", D]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", K, L, D]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", K, L, D]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", L, D]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...A(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...A()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": A()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Tt, Ye]
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
        font: [r, L, ar]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sr, D]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zd, D, t]
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
        tracking: [o, L, D]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [K, "none", L, ar]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L, D]
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
        list: ["disc", "decimal", "none", L, D]
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
        decoration: [...ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [K, "from-font", "auto", L, Ye]
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
        "underline-offset": [K, "auto", L, D]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L, D]
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
        content: ["none", L, D]
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
        bg: _()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Q()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, L, D],
          radial: ["", L, D],
          conic: [Ue, L, D]
        }, Wd, Hd]
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
        rounded: X()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": X()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": X()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": X()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": X()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": X()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": X()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": X()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": X()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": X()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Y()
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
        "divide-y": Y()
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
        border: [...ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ie(), "hidden", "none"]
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
        outline: [...ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [K, L, D]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", K, Tt, Ye]
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
          d,
          Yt,
          Xt
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
        "inset-shadow": ["none", f, Yt, Xt]
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
        ring: Y()
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
        "ring-offset": [K, Ye]
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
        "inset-ring": Y()
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
        "text-shadow": ["none", v, Yt, Xt]
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
        opacity: [K, L, D]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "mask-linear": [K]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [L, D]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [K]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": I()
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
        mask: _()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Q()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Z()
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
        mask: ["none", L, D]
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
          L,
          D
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ee()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [K, L, D]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [K, L, D]
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
          b,
          Yt,
          Xt
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
        grayscale: ["", K, L, D]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [K, L, D]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", K, L, D]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [K, L, D]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", K, L, D]
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
          L,
          D
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ee()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [K, L, D]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [K, L, D]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", K, L, D]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [K, L, D]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", K, L, D]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [K, L, D]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [K, L, D]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", K, L, D]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", L, D]
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
        duration: [K, "initial", L, D]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, L, D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [K, L, D]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, L, D]
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
        perspective: [m, L, D]
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
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
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
        skew: te()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": te()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": te()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [L, D, "", "none", "gpu", "cpu"]
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
        translate: re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": re()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L, D]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", L, D]
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
        stroke: [K, Tt, Ye, ar]
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
}, Xd = /* @__PURE__ */ Ad(qd);
function M(...e) {
  return Xd(Hs(e));
}
const Yd = En(
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
), Pr = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, loading: o = !1, fullWidth: s = !1, icon: a, iconPosition: i = "left", children: l, disabled: u, ...d }, f) => {
    const v = r ? ju : "button", b = u || o;
    return /* @__PURE__ */ W(
      v,
      {
        className: M(
          Yd({ variant: t, size: n, className: e }),
          s && "w-full"
        ),
        ref: f,
        disabled: b,
        ...d,
        children: [
          o && /* @__PURE__ */ p(fd, { className: "animate-spin" }),
          !o && a && i === "left" && a,
          l,
          !o && a && i === "right" && a
        ]
      }
    );
  }
);
Pr.displayName = "Button";
const Jd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    className: M(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Jd.displayName = "Card";
const Zd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Zd.displayName = "CardHeader";
const Qd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    className: M(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Qd.displayName = "CardTitle";
const ef = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
ef.displayName = "CardDescription";
const tf = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: M("p-6 pt-0", e), ...t }));
tf.displayName = "CardContent";
const nf = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    className: M("flex items-center p-6 pt-0", e),
    ...t
  }
));
nf.displayName = "CardFooter";
const rf = c.forwardRef(
  ({ className: e, type: t, error: n, helperText: r, ...o }, s) => /* @__PURE__ */ W("div", { className: "w-full", children: [
    /* @__PURE__ */ p(
      "input",
      {
        type: t,
        className: M(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          n && "border-destructive focus-visible:ring-destructive",
          e
        ),
        ref: s,
        ...o
      }
    ),
    r && /* @__PURE__ */ p("p", { className: M(
      "mt-1 text-xs",
      n ? "text-destructive" : "text-muted-foreground"
    ), children: r })
  ] })
);
rf.displayName = "Input";
const of = En(
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
function Nw({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p("div", { className: M(of({ variant: t }), e), ...n });
}
function sf(e, t) {
  const n = c.createContext(t), r = (s) => {
    const { children: a, ...i } = s, l = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ p(n.Provider, { value: l, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = c.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function he(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = c.createContext(a), l = n.length;
    n = [...n, a];
    const u = (f) => {
      const { scope: v, children: b, ...g } = f, m = v?.[e]?.[l] || i, h = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ p(m.Provider, { value: h, children: b });
    };
    u.displayName = s + "Provider";
    function d(f, v) {
      const b = v?.[e]?.[l] || i, g = c.useContext(b);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((a) => c.createContext(a));
    return function(i) {
      const l = i?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, af(o, ...t)];
}
function af(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ce = globalThis?.document ? c.useLayoutEffect : () => {
}, cf = c[" useInsertionEffect ".trim().toString()] || ce;
function Ce({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = lf({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const u = c.useCallback(
    (d) => {
      if (i) {
        const f = uf(d) ? d(e) : d;
        f !== e && a.current?.(f);
      } else
        s(d);
    },
    [i, e, s, a]
  );
  return [l, u];
}
function lf({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return cf(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function uf(e) {
  return typeof e == "function";
}
function Rn(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Tn(e) {
  const [t, n] = c.useState(void 0);
  return ce(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          a = u.inlineSize, i = u.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function df(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var ye = (e) => {
  const { present: t, children: n } = e, r = ff(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = q(r.ref, pf(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
ye.displayName = "Presence";
function ff(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = df(a, {
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
  return c.useEffect(() => {
    const u = Jt(r.current);
    s.current = i === "mounted" ? u : "none";
  }, [i]), ce(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const v = s.current, b = Jt(u);
      e ? l("MOUNT") : b === "none" || u?.display === "none" ? l("UNMOUNT") : l(d && v !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ce(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (b) => {
        const m = Jt(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, v = (b) => {
        b.target === t && (s.current = Jt(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Jt(e) {
  return e?.animationName || "none";
}
function pf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var mf = [
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
], $ = mf.reduce((e, t) => {
  const n = /* @__PURE__ */ et(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function to(e, t) {
  e && Lt.flushSync(() => e.dispatchEvent(t));
}
var Nn = "Checkbox", [hf] = he(Nn), [gf, no] = hf(Nn);
function vf(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: l,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [v, b] = Ce({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: Nn
  }), [g, m] = c.useState(null), [h, y] = c.useState(null), w = c.useRef(!1), x = g ? !!a || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: v,
    disabled: s,
    setChecked: b,
    control: g,
    setControl: m,
    name: i,
    form: a,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: He(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: h,
    setBubbleInput: y
  };
  return /* @__PURE__ */ p(
    gf,
    {
      scope: t,
      ...C,
      children: bf(f) ? f(C) : r
    }
  );
}
var na = "CheckboxTrigger", ra = c.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: l,
      required: u,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: v,
      isFormControl: b,
      bubbleInput: g
    } = no(na, e), m = q(o, d), h = c.useRef(l);
    return c.useEffect(() => {
      const y = s?.form;
      if (y) {
        const w = () => f(h.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [s, f]), /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": He(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": ca(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: m,
        onKeyDown: k(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: k(n, (y) => {
          f((w) => He(w) ? !0 : !w), g && b && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
        })
      }
    );
  }
);
ra.displayName = na;
var ro = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p(
      vf,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: u,
        name: r,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: v }) => /* @__PURE__ */ W(Fe, { children: [
          /* @__PURE__ */ p(
            ra,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          v && /* @__PURE__ */ p(
            ia,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ro.displayName = Nn;
var oa = "CheckboxIndicator", sa = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = no(oa, n);
    return /* @__PURE__ */ p(
      ye,
      {
        present: r || He(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ p(
          $.span,
          {
            "data-state": ca(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
sa.displayName = oa;
var aa = "CheckboxBubbleInput", ia = c.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: l,
      name: u,
      value: d,
      form: f,
      bubbleInput: v,
      setBubbleInput: b
    } = no(aa, e), g = q(n, b), m = Rn(s), h = Tn(r);
    c.useEffect(() => {
      const w = v;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, P = !o.current;
      if (m !== s && E) {
        const T = new Event("click", { bubbles: P });
        w.indeterminate = He(s), E.call(w, He(s) ? !1 : s), w.dispatchEvent(T);
      }
    }, [v, m, s, o]);
    const y = c.useRef(He(s) ? !1 : s);
    return /* @__PURE__ */ p(
      $.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? y.current,
        required: i,
        disabled: l,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...h,
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
ia.displayName = aa;
function bf(e) {
  return typeof e == "function";
}
function He(e) {
  return e === "indeterminate";
}
function ca(e) {
  return He(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const yf = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ro,
  {
    ref: n,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      sa,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p(Jr, { className: "h-4 w-4" })
      }
    )
  }
));
yf.displayName = ro.displayName;
var wf = c[" useId ".trim().toString()] || (() => {
}), xf = 0;
function ve(e) {
  const [t, n] = c.useState(wf());
  return ce(() => {
    n((r) => r ?? String(xf++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function fe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function Cf(e, t = globalThis?.document) {
  const n = fe(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Sf = "DismissableLayer", Ar = "dismissableLayer.update", Ef = "dismissableLayer.pointerDownOutside", Rf = "dismissableLayer.focusOutside", Yo, la = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, u = c.useContext(la), [d, f] = c.useState(null), v = d?.ownerDocument ?? globalThis?.document, [, b] = c.useState({}), g = q(t, (T) => f(T)), m = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(h), w = d ? m.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= y, E = Nf((T) => {
      const N = T.target, F = [...u.branches].some((B) => B.contains(N));
      !C || F || (o?.(T), a?.(T), T.defaultPrevented || i?.());
    }, v), P = Pf((T) => {
      const N = T.target;
      [...u.branches].some((B) => B.contains(N)) || (s?.(T), a?.(T), T.defaultPrevented || i?.());
    }, v);
    return Cf((T) => {
      w === u.layers.size - 1 && (r?.(T), !T.defaultPrevented && i && (T.preventDefault(), i()));
    }, v), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Yo = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Jo(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Yo);
        };
    }, [d, v, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Jo());
    }, [d, u]), c.useEffect(() => {
      const T = () => b({});
      return document.addEventListener(Ar, T), () => document.removeEventListener(Ar, T);
    }, []), /* @__PURE__ */ p(
      $.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: k(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: k(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: k(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
bt.displayName = Sf;
var Tf = "DismissableLayerBranch", ua = c.forwardRef((e, t) => {
  const n = c.useContext(la), r = c.useRef(null), o = q(t, r);
  return c.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p($.div, { ...e, ref: o });
});
ua.displayName = Tf;
function Nf(e, t = globalThis?.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          da(
            Ef,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Pf(e, t = globalThis?.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && da(Rf, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Jo() {
  const e = new CustomEvent(Ar);
  document.dispatchEvent(e);
}
function da(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? to(o, s) : o.dispatchEvent(s);
}
var Af = bt, kf = ua, ir = "focusScope.autoFocusOnMount", cr = "focusScope.autoFocusOnUnmount", Zo = { bubbles: !1, cancelable: !0 }, If = "FocusScope", Pn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = c.useState(null), u = fe(o), d = fe(s), f = c.useRef(null), v = q(t, (m) => l(m)), b = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let m = function(x) {
        if (b.paused || !i) return;
        const C = x.target;
        i.contains(C) ? f.current = C : Ve(f.current, { select: !0 });
      }, h = function(x) {
        if (b.paused || !i) return;
        const C = x.relatedTarget;
        C !== null && (i.contains(C) || Ve(f.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && Ve(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", h);
      const w = new MutationObserver(y);
      return i && w.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", h), w.disconnect();
      };
    }
  }, [r, i, b.paused]), c.useEffect(() => {
    if (i) {
      es.add(b);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const y = new CustomEvent(ir, Zo);
        i.addEventListener(ir, u), i.dispatchEvent(y), y.defaultPrevented || (_f(Ff(fa(i)), { select: !0 }), document.activeElement === m && Ve(i));
      }
      return () => {
        i.removeEventListener(ir, u), setTimeout(() => {
          const y = new CustomEvent(cr, Zo);
          i.addEventListener(cr, d), i.dispatchEvent(y), y.defaultPrevented || Ve(m ?? document.body, { select: !0 }), i.removeEventListener(cr, d), es.remove(b);
        }, 0);
      };
    }
  }, [i, u, d, b]);
  const g = c.useCallback(
    (m) => {
      if (!n && !r || b.paused) return;
      const h = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (h && y) {
        const w = m.currentTarget, [x, C] = Of(w);
        x && C ? !m.shiftKey && y === C ? (m.preventDefault(), n && Ve(x, { select: !0 })) : m.shiftKey && y === x && (m.preventDefault(), n && Ve(C, { select: !0 })) : y === w && m.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ p($.div, { tabIndex: -1, ...a, ref: v, onKeyDown: g });
});
Pn.displayName = If;
function _f(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ve(r, { select: t }), document.activeElement !== n) return;
}
function Of(e) {
  const t = fa(e), n = Qo(t, e), r = Qo(t.reverse(), e);
  return [n, r];
}
function fa(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qo(e, t) {
  for (const n of e)
    if (!Mf(n, { upTo: t })) return n;
}
function Mf(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Df(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Df(e) && t && e.select();
  }
}
var es = Lf();
function Lf() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = ts(e, t), e.unshift(t);
    },
    remove(t) {
      e = ts(e, t), e[0]?.resume();
    }
  };
}
function ts(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ff(e) {
  return e.filter((t) => t.tagName !== "A");
}
var $f = "Portal", Ft = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = c.useState(!1);
  ce(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? zu.createPortal(/* @__PURE__ */ p($.div, { ...r, ref: t }), a) : null;
});
Ft.displayName = $f;
var lr = 0;
function oo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ns()), document.body.insertAdjacentElement("beforeend", e[1] ?? ns()), lr++, () => {
      lr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), lr--;
    };
  }, []);
}
function ns() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ae = function() {
  return Ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ae.apply(this, arguments);
};
function pa(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bf(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var sn = "right-scroll-bar-position", an = "width-before-scroll-bar", Uf = "with-scroll-bars-hidden", Vf = "--removed-body-scroll-bar-size";
function ur(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Hf(e, t) {
  var n = Vu(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var zf = typeof window < "u" ? c.useLayoutEffect : c.useEffect, rs = /* @__PURE__ */ new WeakMap();
function jf(e, t) {
  var n = Hf(null, function(r) {
    return e.forEach(function(o) {
      return ur(o, r);
    });
  });
  return zf(function() {
    var r = rs.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || ur(i, null);
      }), s.forEach(function(i) {
        o.has(i) || ur(i, a);
      });
    }
    rs.set(n, e);
  }, [e]), n;
}
function Wf(e) {
  return e;
}
function Gf(e, t) {
  t === void 0 && (t = Wf);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var l = function() {
        var d = a;
        a = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          a.push(d), u();
        },
        filter: function(d) {
          return a = a.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Kf(e) {
  e === void 0 && (e = {});
  var t = Gf(null);
  return t.options = Ae({ async: !0, ssr: !1 }, e), t;
}
var ma = function(e) {
  var t = e.sideCar, n = pa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, Ae({}, n));
};
ma.isSideCarExport = !0;
function qf(e, t) {
  return e.useMedium(t), ma;
}
var ha = Kf(), dr = function() {
}, An = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: dr,
    onWheelCapture: dr,
    onTouchMoveCapture: dr
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, v = e.sideCar, b = e.noRelative, g = e.noIsolation, m = e.inert, h = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, C = pa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = v, P = jf([n, t]), T = Ae(Ae({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: ha, removeScrollBar: u, shards: f, noRelative: b, noIsolation: g, inert: m, setCallbacks: s, allowPinchZoom: !!h, lockRef: n, gapMode: x }),
    a ? c.cloneElement(c.Children.only(i), Ae(Ae({}, T), { ref: P })) : c.createElement(w, Ae({}, T, { className: l, ref: P }), i)
  );
});
An.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
An.classNames = {
  fullWidth: an,
  zeroRight: sn
};
var Xf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Yf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Xf();
  return t && e.setAttribute("nonce", t), e;
}
function Jf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Zf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Qf = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Yf()) && (Jf(t, n), Zf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ep = function() {
  var e = Qf();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ga = function() {
  var e = ep(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, tp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, fr = function(e) {
  return parseInt(e || "", 10) || 0;
}, np = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [fr(n), fr(r), fr(o)];
}, rp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tp;
  var t = np(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, op = ga(), dt = "data-scroll-locked", sp = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Uf, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(dt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(sn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(an, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(sn, " .").concat(sn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(an, " .").concat(an, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(dt, `] {
    `).concat(Vf, ": ").concat(i, `px;
  }
`);
}, os = function() {
  var e = parseInt(document.body.getAttribute(dt) || "0", 10);
  return isFinite(e) ? e : 0;
}, ap = function() {
  c.useEffect(function() {
    return document.body.setAttribute(dt, (os() + 1).toString()), function() {
      var e = os() - 1;
      e <= 0 ? document.body.removeAttribute(dt) : document.body.setAttribute(dt, e.toString());
    };
  }, []);
}, ip = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ap();
  var s = c.useMemo(function() {
    return rp(o);
  }, [o]);
  return c.createElement(op, { styles: sp(s, !t, o, n ? "" : "!important") });
}, kr = !1;
if (typeof window < "u")
  try {
    var Zt = Object.defineProperty({}, "passive", {
      get: function() {
        return kr = !0, !0;
      }
    });
    window.addEventListener("test", Zt, Zt), window.removeEventListener("test", Zt, Zt);
  } catch {
    kr = !1;
  }
var ct = kr ? { passive: !1 } : !1, cp = function(e) {
  return e.tagName === "TEXTAREA";
}, va = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !cp(e) && n[t] === "visible")
  );
}, lp = function(e) {
  return va(e, "overflowY");
}, up = function(e) {
  return va(e, "overflowX");
}, ss = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ba(e, r);
    if (o) {
      var s = ya(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, dp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, fp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ba = function(e, t) {
  return e === "v" ? lp(t) : up(t);
}, ya = function(e, t) {
  return e === "v" ? dp(t) : fp(t);
}, pp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, mp = function(e, t, n, r, o) {
  var s = pp(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, l = t.contains(i), u = !1, d = a > 0, f = 0, v = 0;
  do {
    if (!i)
      break;
    var b = ya(e, i), g = b[0], m = b[1], h = b[2], y = m - h - s * g;
    (g || y) && ba(e, i) && (f += y, v += g);
    var w = i.parentNode;
    i = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(v) < 1) && (u = !0), u;
}, Qt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, as = function(e) {
  return [e.deltaX, e.deltaY];
}, is = function(e) {
  return e && "current" in e ? e.current : e;
}, hp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, gp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, vp = 0, lt = [];
function bp(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(vp++)[0], s = c.useState(ga)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Bf([e.lockRef.current], (e.shards || []).map(is), !0).filter(Boolean);
      return m.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(m, h) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = Qt(m), w = n.current, x = "deltaX" in m ? m.deltaX : w[0] - y[0], C = "deltaY" in m ? m.deltaY : w[1] - y[1], E, P = m.target, T = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && T === "h" && P.type === "range")
      return !1;
    var N = ss(T, P);
    if (!N)
      return !0;
    if (N ? E = T : (E = T === "v" ? "h" : "v", N = ss(T, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in m && (x || C) && (r.current = E), !E)
      return !0;
    var F = r.current || E;
    return mp(F, h, m, F === "h" ? x : C);
  }, []), l = c.useCallback(function(m) {
    var h = m;
    if (!(!lt.length || lt[lt.length - 1] !== s)) {
      var y = "deltaY" in h ? as(h) : Qt(h), w = t.current.filter(function(E) {
        return E.name === h.type && (E.target === h.target || h.target === E.shadowParent) && hp(E.delta, y);
      })[0];
      if (w && w.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!w) {
        var x = (a.current.shards || []).map(is).filter(Boolean).filter(function(E) {
          return E.contains(h.target);
        }), C = x.length > 0 ? i(h, x[0]) : !a.current.noIsolation;
        C && h.cancelable && h.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(m, h, y, w) {
    var x = { name: m, delta: h, target: y, should: w, shadowParent: yp(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), d = c.useCallback(function(m) {
    n.current = Qt(m), r.current = void 0;
  }, []), f = c.useCallback(function(m) {
    u(m.type, as(m), m.target, i(m, e.lockRef.current));
  }, []), v = c.useCallback(function(m) {
    u(m.type, Qt(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return lt.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, ct), document.addEventListener("touchmove", l, ct), document.addEventListener("touchstart", d, ct), function() {
      lt = lt.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, ct), document.removeEventListener("touchmove", l, ct), document.removeEventListener("touchstart", d, ct);
    };
  }, []);
  var b = e.removeScrollBar, g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(s, { styles: gp(o) }) : null,
    b ? c.createElement(ip, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function yp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wp = qf(ha, bp);
var kn = c.forwardRef(function(e, t) {
  return c.createElement(An, Ae({}, e, { ref: t, sideCar: wp }));
});
kn.classNames = An.classNames;
var xp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ut = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), tn = {}, pr = 0, wa = function(e) {
  return e && (e.host || wa(e.parentNode));
}, Cp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = wa(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Sp = function(e, t, n, r) {
  var o = Cp(t, Array.isArray(e) ? e : [e]);
  tn[n] || (tn[n] = /* @__PURE__ */ new WeakMap());
  var s = tn[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || i.has(f) || (i.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (i.has(v))
        d(v);
      else
        try {
          var b = v.getAttribute(r), g = b !== null && b !== "false", m = (ut.get(v) || 0) + 1, h = (s.get(v) || 0) + 1;
          ut.set(v, m), s.set(v, h), a.push(v), m === 1 && g && en.set(v, !0), h === 1 && v.setAttribute(n, "true"), g || v.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", v, y);
        }
    });
  };
  return d(t), i.clear(), pr++, function() {
    a.forEach(function(f) {
      var v = ut.get(f) - 1, b = s.get(f) - 1;
      ut.set(f, v), s.set(f, b), v || (en.has(f) || f.removeAttribute(r), en.delete(f)), b || f.removeAttribute(n);
    }), pr--, pr || (ut = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), tn = {});
  };
}, so = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = xp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Sp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, In = "Dialog", [xa] = he(In), [Ep, Te] = xa(In), Ca = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = c.useRef(null), l = c.useRef(null), [u, d] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: In
  });
  return /* @__PURE__ */ p(
    Ep,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: ve(),
      titleId: ve(),
      descriptionId: ve(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: n
    }
  );
};
Ca.displayName = In;
var Sa = "DialogTrigger", Ea = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Sa, n), s = q(t, o.triggerRef);
    return /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": co(o.open),
        ...r,
        ref: s,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ea.displayName = Sa;
var ao = "DialogPortal", [Rp, Ra] = xa(ao, {
  forceMount: void 0
}), Ta = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Te(ao, t);
  return /* @__PURE__ */ p(Rp, { scope: t, forceMount: n, children: c.Children.map(r, (a) => /* @__PURE__ */ p(ye, { present: n || s.open, children: /* @__PURE__ */ p(Ft, { asChild: !0, container: o, children: a }) })) });
};
Ta.displayName = ao;
var mn = "DialogOverlay", Na = c.forwardRef(
  (e, t) => {
    const n = Ra(mn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Te(mn, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p(ye, { present: r || s.open, children: /* @__PURE__ */ p(Np, { ...o, ref: t }) }) : null;
  }
);
Na.displayName = mn;
var Tp = /* @__PURE__ */ et("DialogOverlay.RemoveScroll"), Np = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(mn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(kn, { as: Tp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p(
        $.div,
        {
          "data-state": co(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), tt = "DialogContent", Pa = c.forwardRef(
  (e, t) => {
    const n = Ra(tt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Te(tt, e.__scopeDialog);
    return /* @__PURE__ */ p(ye, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p(Pp, { ...o, ref: t }) : /* @__PURE__ */ p(Ap, { ...o, ref: t }) });
  }
);
Pa.displayName = tt;
var Pp = c.forwardRef(
  (e, t) => {
    const n = Te(tt, e.__scopeDialog), r = c.useRef(null), o = q(t, n.contentRef, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return so(s);
    }, []), /* @__PURE__ */ p(
      Aa,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: k(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: k(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Ap = c.forwardRef(
  (e, t) => {
    const n = Te(tt, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ p(
      Aa,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Aa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Te(tt, n), l = c.useRef(null), u = q(t, l);
    return oo(), /* @__PURE__ */ W(Fe, { children: [
      /* @__PURE__ */ p(
        Pn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p(
            bt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": co(i.open),
              ...a,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ W(Fe, { children: [
        /* @__PURE__ */ p(kp, { titleId: i.titleId }),
        /* @__PURE__ */ p(_p, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), io = "DialogTitle", ka = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(io, n);
    return /* @__PURE__ */ p($.h2, { id: o.titleId, ...r, ref: t });
  }
);
ka.displayName = io;
var Ia = "DialogDescription", _a = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Ia, n);
    return /* @__PURE__ */ p($.p, { id: o.descriptionId, ...r, ref: t });
  }
);
_a.displayName = Ia;
var Oa = "DialogClose", Ma = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Oa, n);
    return /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ma.displayName = Oa;
function co(e) {
  return e ? "open" : "closed";
}
var Da = "DialogTitleWarning", [Pw, La] = sf(Da, {
  contentName: tt,
  titleName: io,
  docsSlug: "dialog"
}), kp = ({ titleId: e }) => {
  const t = La(Da), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Ip = "DialogDescriptionWarning", _p = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${La(Ip).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Op = Ca, Mp = Ea, Dp = Ta, Fa = Na, $a = Pa, Ba = ka, Ua = _a, Va = Ma;
const Lp = Op, Aw = Mp, Fp = Dp, kw = Va, Ha = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Fa,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ha.displayName = Fa.displayName;
const $p = En(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
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
), za = c.forwardRef(({ className: e, children: t, size: n, ...r }, o) => /* @__PURE__ */ W(Fp, { children: [
  /* @__PURE__ */ p(Ha, {}),
  /* @__PURE__ */ W(
    $a,
    {
      ref: o,
      className: M($p({ size: n }), e),
      ...r,
      children: [
        t,
        /* @__PURE__ */ W(Va, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p(Ws, { className: "h-4 w-4" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
za.displayName = $a.displayName;
const ja = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ja.displayName = "ModalHeader";
const Wa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Wa.displayName = "ModalFooter";
const Ga = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ba,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ga.displayName = Ba.displayName;
const Ka = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ua,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Ka.displayName = Ua.displayName;
const Bp = c.forwardRef(
  ({
    open: e,
    onOpenChange: t,
    title: n = "Confirmar ação",
    description: r = "Tem certeza que deseja continuar?",
    confirmText: o = "Confirmar",
    cancelText: s = "Cancelar",
    onConfirm: a,
    onCancel: i,
    variant: l = "primary",
    loading: u = !1
  }, d) => /* @__PURE__ */ p(Lp, { open: e, onOpenChange: t, children: /* @__PURE__ */ W(za, { ref: d, children: [
    /* @__PURE__ */ W(ja, { children: [
      /* @__PURE__ */ p(Ga, { children: n }),
      r && /* @__PURE__ */ p(Ka, { children: r })
    ] }),
    /* @__PURE__ */ W(Wa, { children: [
      /* @__PURE__ */ p(Pr, { variant: "outline", onClick: () => {
        i?.(), t?.(!1);
      }, disabled: u, children: s }),
      /* @__PURE__ */ p(Pr, { variant: l, onClick: () => {
        a?.();
      }, loading: u, children: o })
    ] })
  ] }) })
);
Bp.displayName = "ConfirmModal";
function _n(e) {
  const t = e + "CollectionProvider", [n, r] = he(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: h, children: y } = m, w = Xe.useRef(null), x = Xe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: h, itemMap: x, collectionRef: w, children: y });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ et(i), u = Xe.forwardRef(
    (m, h) => {
      const { scope: y, children: w } = m, x = s(i, y), C = q(h, x.collectionRef);
      return /* @__PURE__ */ p(l, { ref: C, children: w });
    }
  );
  u.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", v = /* @__PURE__ */ et(d), b = Xe.forwardRef(
    (m, h) => {
      const { scope: y, children: w, ...x } = m, C = Xe.useRef(null), E = q(h, C), P = s(d, y);
      return Xe.useEffect(() => (P.itemMap.set(C, { ref: C, ...x }), () => void P.itemMap.delete(C))), /* @__PURE__ */ p(v, { [f]: "", ref: E, children: w });
    }
  );
  b.displayName = d;
  function g(m) {
    const h = s(e + "CollectionConsumer", m);
    return Xe.useCallback(() => {
      const w = h.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (P, T) => x.indexOf(P.ref.current) - x.indexOf(T.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: b },
    g,
    r
  ];
}
var Up = c.createContext(void 0);
function $t(e) {
  const t = c.useContext(Up);
  return e || t || "ltr";
}
const Vp = ["top", "right", "bottom", "left"], ze = Math.min, ge = Math.max, hn = Math.round, nn = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), Hp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zp = {
  start: "end",
  end: "start"
};
function Ir(e, t, n) {
  return ge(e, ze(t, n));
}
function $e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function lo(e) {
  return e === "x" ? "y" : "x";
}
function uo(e) {
  return e === "y" ? "height" : "width";
}
const jp = /* @__PURE__ */ new Set(["top", "bottom"]);
function ke(e) {
  return jp.has(Be(e)) ? "y" : "x";
}
function fo(e) {
  return lo(ke(e));
}
function Wp(e, t, n) {
  n === void 0 && (n = !1);
  const r = yt(e), o = fo(e), s = uo(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = gn(a)), [a, gn(a)];
}
function Gp(e) {
  const t = gn(e);
  return [_r(e), t, _r(t)];
}
function _r(e) {
  return e.replace(/start|end/g, (t) => zp[t]);
}
const cs = ["left", "right"], ls = ["right", "left"], Kp = ["top", "bottom"], qp = ["bottom", "top"];
function Xp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ls : cs : t ? cs : ls;
    case "left":
    case "right":
      return t ? Kp : qp;
    default:
      return [];
  }
}
function Yp(e, t, n, r) {
  const o = yt(e);
  let s = Xp(Be(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(_r)))), s;
}
function gn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hp[t]);
}
function Jp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qa(e) {
  return typeof e != "number" ? Jp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function us(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ke(t), a = fo(t), i = uo(a), l = Be(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[i] / 2 - o[i] / 2;
  let b;
  switch (l) {
    case "top":
      b = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      b = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      b = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      };
  }
  switch (yt(t)) {
    case "start":
      b[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      b[a] += v * (n && u ? -1 : 1);
      break;
  }
  return b;
}
const Zp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = us(u, r, l), v = r, b = {}, g = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: h,
      fn: y
    } = i[m], {
      x: w,
      y: x,
      data: C,
      reset: E
    } = await y({
      x: d,
      y: f,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: b,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = x ?? f, b = {
      ...b,
      [h]: {
        ...b[h],
        ...C
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (v = E.placement), E.rects && (u = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = us(u, v, l)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: b
  };
};
async function It(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: b = 0
  } = $e(t, e), g = qa(b), h = i[v ? f === "floating" ? "reference" : "floating" : f], y = vn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(h))) == null || n ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = vn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (y.top - E.top + g.top) / C.y,
    bottom: (E.bottom - y.bottom + g.bottom) / C.y,
    left: (y.left - E.left + g.left) / C.x,
    right: (E.right - y.right + g.right) / C.x
  };
}
const Qp = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = $e(e, t) || {};
    if (u == null)
      return {};
    const f = qa(d), v = {
      x: n,
      y: r
    }, b = fo(o), g = uo(b), m = await a.getDimensions(u), h = b === "y", y = h ? "top" : "left", w = h ? "bottom" : "right", x = h ? "clientHeight" : "clientWidth", C = s.reference[g] + s.reference[b] - v[b] - s.floating[g], E = v[b] - s.reference[b], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let T = P ? P[x] : 0;
    (!T || !await (a.isElement == null ? void 0 : a.isElement(P))) && (T = i.floating[x] || s.floating[g]);
    const N = C / 2 - E / 2, F = T / 2 - m[g] / 2 - 1, B = ze(f[y], F), z = ze(f[w], F), H = B, j = T - m[g] - z, A = T / 2 - m[g] / 2 + N, V = Ir(H, A, j), O = !l.arrow && yt(o) != null && A !== V && s.reference[g] / 2 - (A < H ? B : z) - m[g] / 2 < 0, U = O ? A < H ? A - H : A - j : 0;
    return {
      [b]: v[b] + U,
      data: {
        [b]: V,
        centerOffset: A - V - U,
        ...O && {
          alignmentOffset: U
        }
      },
      reset: O
    };
  }
}), em = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...h
      } = $e(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Be(o), w = ke(i), x = Be(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = v || (x || !m ? [gn(i)] : Gp(i)), P = g !== "none";
      !v && P && E.push(...Yp(i, m, g, C));
      const T = [i, ...E], N = await It(t, h), F = [];
      let B = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(N[y]), f) {
        const A = Wp(o, a, C);
        F.push(N[A[0]], N[A[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: F
      }], !F.every((A) => A <= 0)) {
        var z, H;
        const A = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1, V = T[A];
        if (V && (!(f === "alignment" ? w !== ke(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((R) => ke(R.placement) === w ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: A,
              overflows: B
            },
            reset: {
              placement: V
            }
          };
        let O = (H = B.filter((U) => U.overflows[0] <= 0).sort((U, R) => U.overflows[1] - R.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!O)
          switch (b) {
            case "bestFit": {
              var j;
              const U = (j = B.filter((R) => {
                if (P) {
                  const _ = ke(R.placement);
                  return _ === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((_) => _ > 0).reduce((_, Q) => _ + Q, 0)]).sort((R, _) => R[1] - _[1])[0]) == null ? void 0 : j[0];
              U && (O = U);
              break;
            }
            case "initialPlacement":
              O = i;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function ds(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function fs(e) {
  return Vp.some((t) => e[t] >= 0);
}
const tm = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = $e(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await It(t, {
            ...o,
            elementContext: "reference"
          }), a = ds(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: fs(a)
            }
          };
        }
        case "escaped": {
          const s = await It(t, {
            ...o,
            altBoundary: !0
          }), a = ds(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: fs(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Xa = /* @__PURE__ */ new Set(["left", "top"]);
async function nm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Be(n), i = yt(n), l = ke(n) === "y", u = Xa.has(a) ? -1 : 1, d = s && l ? -1 : 1, f = $e(t, e);
  let {
    mainAxis: v,
    crossAxis: b,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof g == "number" && (b = i === "end" ? g * -1 : g), l ? {
    x: b * d,
    y: v * u
  } : {
    x: v * u,
    y: b * d
  };
}
const rm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, l = await nm(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, om = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: y,
              y: w
            } = h;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = $e(e, t), u = {
        x: n,
        y: r
      }, d = await It(t, l), f = ke(Be(o)), v = lo(f);
      let b = u[v], g = u[f];
      if (s) {
        const h = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", w = b + d[h], x = b - d[y];
        b = Ir(w, b, x);
      }
      if (a) {
        const h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = g + d[h], x = g - d[y];
        g = Ir(w, g, x);
      }
      const m = i.fn({
        ...t,
        [v]: b,
        [f]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [v]: s,
            [f]: a
          }
        }
      };
    }
  };
}, sm = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = $e(e, t), d = {
        x: n,
        y: r
      }, f = ke(o), v = lo(f);
      let b = d[v], g = d[f];
      const m = $e(i, t), h = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const x = v === "y" ? "height" : "width", C = s.reference[v] - s.floating[x] + h.mainAxis, E = s.reference[v] + s.reference[x] - h.mainAxis;
        b < C ? b = C : b > E && (b = E);
      }
      if (u) {
        var y, w;
        const x = v === "y" ? "width" : "height", C = Xa.has(Be(o)), E = s.reference[f] - s.floating[x] + (C && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (C ? 0 : h.crossAxis), P = s.reference[f] + s.reference[x] + (C ? 0 : ((w = a.offset) == null ? void 0 : w[f]) || 0) - (C ? h.crossAxis : 0);
        g < E ? g = E : g > P && (g = P);
      }
      return {
        [v]: b,
        [f]: g
      };
    }
  };
}, am = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...u
      } = $e(e, t), d = await It(t, u), f = Be(o), v = yt(o), b = ke(o) === "y", {
        width: g,
        height: m
      } = s.floating;
      let h, y;
      f === "top" || f === "bottom" ? (h = f, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = f, h = v === "end" ? "top" : "bottom");
      const w = m - d.top - d.bottom, x = g - d.left - d.right, C = ze(m - d[h], w), E = ze(g - d[y], x), P = !t.middlewareData.shift;
      let T = C, N = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = x), (r = t.middlewareData.shift) != null && r.enabled.y && (T = w), P && !v) {
        const B = ge(d.left, 0), z = ge(d.right, 0), H = ge(d.top, 0), j = ge(d.bottom, 0);
        b ? N = g - 2 * (B !== 0 || z !== 0 ? B + z : ge(d.left, d.right)) : T = m - 2 * (H !== 0 || j !== 0 ? H + j : ge(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: N,
        availableHeight: T
      });
      const F = await a.getDimensions(i.floating);
      return g !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function On() {
  return typeof window < "u";
}
function wt(e) {
  return Ya(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Me(e) {
  var t;
  return (t = (Ya(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ya(e) {
  return On() ? e instanceof Node || e instanceof be(e).Node : !1;
}
function Ee(e) {
  return On() ? e instanceof Element || e instanceof be(e).Element : !1;
}
function _e(e) {
  return On() ? e instanceof HTMLElement || e instanceof be(e).HTMLElement : !1;
}
function ps(e) {
  return !On() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof be(e).ShadowRoot;
}
const im = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !im.has(o);
}
const cm = /* @__PURE__ */ new Set(["table", "td", "th"]);
function lm(e) {
  return cm.has(wt(e));
}
const um = [":popover-open", ":modal"];
function Mn(e) {
  return um.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const dm = ["transform", "translate", "scale", "rotate", "perspective"], fm = ["transform", "translate", "scale", "rotate", "perspective", "filter"], pm = ["paint", "layout", "strict", "content"];
function po(e) {
  const t = mo(), n = Ee(e) ? Re(e) : e;
  return dm.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || fm.some((r) => (n.willChange || "").includes(r)) || pm.some((r) => (n.contain || "").includes(r));
}
function mm(e) {
  let t = je(e);
  for (; _e(t) && !pt(t); ) {
    if (po(t))
      return t;
    if (Mn(t))
      return null;
    t = je(t);
  }
  return null;
}
function mo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const hm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function pt(e) {
  return hm.has(wt(e));
}
function Re(e) {
  return be(e).getComputedStyle(e);
}
function Dn(e) {
  return Ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function je(e) {
  if (wt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ps(e) && e.host || // Fallback.
    Me(e)
  );
  return ps(t) ? t.host : t;
}
function Ja(e) {
  const t = je(e);
  return pt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _e(t) && Bt(t) ? t : Ja(t);
}
function _t(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ja(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = be(o);
  if (s) {
    const i = Or(a);
    return t.concat(a, a.visualViewport || [], Bt(o) ? o : [], i && n ? _t(i) : []);
  }
  return t.concat(o, _t(o, [], n));
}
function Or(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Za(e) {
  const t = Re(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _e(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = hn(n) !== s || hn(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function ho(e) {
  return Ee(e) ? e : e.contextElement;
}
function ft(e) {
  const t = ho(e);
  if (!_e(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Za(t);
  let a = (s ? hn(n.width) : n.width) / r, i = (s ? hn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const gm = /* @__PURE__ */ Ie(0);
function Qa(e) {
  const t = be(e);
  return !mo() || !t.visualViewport ? gm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== be(e) ? !1 : t;
}
function nt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ho(e);
  let a = Ie(1);
  t && (r ? Ee(r) && (a = ft(r)) : a = ft(e));
  const i = vm(s, n, r) ? Qa(s) : Ie(0);
  let l = (o.left + i.x) / a.x, u = (o.top + i.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (s) {
    const v = be(s), b = r && Ee(r) ? be(r) : r;
    let g = v, m = Or(g);
    for (; m && r && b !== g; ) {
      const h = ft(m), y = m.getBoundingClientRect(), w = Re(m), x = y.left + (m.clientLeft + parseFloat(w.paddingLeft)) * h.x, C = y.top + (m.clientTop + parseFloat(w.paddingTop)) * h.y;
      l *= h.x, u *= h.y, d *= h.x, f *= h.y, l += x, u += C, g = be(m), m = Or(g);
    }
  }
  return vn({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Ln(e, t) {
  const n = Dn(e).scrollLeft;
  return t ? t.left + n : nt(Me(e)).left + n;
}
function ei(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Ln(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function bm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Me(r), i = t ? Mn(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ie(1);
  const d = Ie(0), f = _e(r);
  if ((f || !f && !s) && ((wt(r) !== "body" || Bt(a)) && (l = Dn(r)), _e(r))) {
    const b = nt(r);
    u = ft(r), d.x = b.x + r.clientLeft, d.y = b.y + r.clientTop;
  }
  const v = a && !f && !s ? ei(a, l) : Ie(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + v.y
  };
}
function ym(e) {
  return Array.from(e.getClientRects());
}
function wm(e) {
  const t = Me(e), n = Dn(e), r = e.ownerDocument.body, o = ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ln(e);
  const i = -n.scrollTop;
  return Re(r).direction === "rtl" && (a += ge(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const ms = 25;
function xm(e, t) {
  const n = be(e), r = Me(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    const d = mo();
    (!d || d && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const u = Ln(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, v = getComputedStyle(f), b = d.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - b);
    g <= ms && (s -= g);
  } else u <= ms && (s += u);
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
const Cm = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Sm(e, t) {
  const n = nt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = _e(e) ? ft(e) : Ie(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: u
  };
}
function hs(e, t, n) {
  let r;
  if (t === "viewport")
    r = xm(e, n);
  else if (t === "document")
    r = wm(Me(e));
  else if (Ee(t))
    r = Sm(t, n);
  else {
    const o = Qa(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return vn(r);
}
function ti(e, t) {
  const n = je(e);
  return n === t || !Ee(n) || pt(n) ? !1 : Re(n).position === "fixed" || ti(n, t);
}
function Em(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = _t(e, [], !1).filter((i) => Ee(i) && wt(i) !== "body"), o = null;
  const s = Re(e).position === "fixed";
  let a = s ? je(e) : e;
  for (; Ee(a) && !pt(a); ) {
    const i = Re(a), l = po(a);
    !l && i.position === "fixed" && (o = null), (s ? !l && !o : !l && i.position === "static" && !!o && Cm.has(o.position) || Bt(a) && !l && ti(e, a)) ? r = r.filter((d) => d !== a) : o = i, a = je(a);
  }
  return t.set(e, r), r;
}
function Rm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Mn(t) ? [] : Em(t, this._c) : [].concat(n), r], i = a[0], l = a.reduce((u, d) => {
    const f = hs(t, d, o);
    return u.top = ge(f.top, u.top), u.right = ze(f.right, u.right), u.bottom = ze(f.bottom, u.bottom), u.left = ge(f.left, u.left), u;
  }, hs(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Tm(e) {
  const {
    width: t,
    height: n
  } = Za(e);
  return {
    width: t,
    height: n
  };
}
function Nm(e, t, n) {
  const r = _e(t), o = Me(t), s = n === "fixed", a = nt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  function u() {
    l.x = Ln(o);
  }
  if (r || !r && !s)
    if ((wt(t) !== "body" || Bt(o)) && (i = Dn(t)), r) {
      const b = nt(t, !0, s, t);
      l.x = b.x + t.clientLeft, l.y = b.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? ei(o, i) : Ie(0), f = a.left + i.scrollLeft - l.x - d.x, v = a.top + i.scrollTop - l.y - d.y;
  return {
    x: f,
    y: v,
    width: a.width,
    height: a.height
  };
}
function mr(e) {
  return Re(e).position === "static";
}
function gs(e, t) {
  if (!_e(e) || Re(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Me(e) === n && (n = n.ownerDocument.body), n;
}
function ni(e, t) {
  const n = be(e);
  if (Mn(e))
    return n;
  if (!_e(e)) {
    let o = je(e);
    for (; o && !pt(o); ) {
      if (Ee(o) && !mr(o))
        return o;
      o = je(o);
    }
    return n;
  }
  let r = gs(e, t);
  for (; r && lm(r) && mr(r); )
    r = gs(r, t);
  return r && pt(r) && mr(r) && !po(r) ? n : r || mm(e) || n;
}
const Pm = async function(e) {
  const t = this.getOffsetParent || ni, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Am(e) {
  return Re(e).direction === "rtl";
}
const km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bm,
  getDocumentElement: Me,
  getClippingRect: Rm,
  getOffsetParent: ni,
  getElementRects: Pm,
  getClientRects: ym,
  getDimensions: Tm,
  getScale: ft,
  isElement: Ee,
  isRTL: Am
};
function ri(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Im(e, t) {
  let n = null, r;
  const o = Me(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: v,
      height: b
    } = u;
    if (i || t(), !v || !b)
      return;
    const g = nn(f), m = nn(o.clientWidth - (d + v)), h = nn(o.clientHeight - (f + b)), y = nn(d), x = {
      rootMargin: -g + "px " + -m + "px " + -h + "px " + -y + "px",
      threshold: ge(0, ze(1, l)) || 1
    };
    let C = !0;
    function E(P) {
      const T = P[0].intersectionRatio;
      if (T !== l) {
        if (!C)
          return a();
        T ? a(!1, T) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !ri(u, e.getBoundingClientRect()) && a(), C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function _m(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = ho(e), d = o || s ? [...u ? _t(u) : [], ..._t(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const f = u && i ? Im(u, n) : null;
  let v = -1, b = null;
  a && (b = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var x;
      (x = b) == null || x.observe(t);
    })), n();
  }), u && !l && b.observe(u), b.observe(t));
  let g, m = l ? nt(e) : null;
  l && h();
  function h() {
    const y = nt(e);
    m && !ri(m, y) && n(), m = y, g = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (y = b) == null || y.disconnect(), b = null, l && cancelAnimationFrame(g);
  };
}
const Om = rm, Mm = om, Dm = em, Lm = am, Fm = tm, vs = Qp, $m = sm, Bm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: km,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Zp(e, t, {
    ...o,
    platform: s
  });
};
var Um = typeof document < "u", Vm = function() {
}, cn = Um ? Hu : Vm;
function bn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!bn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !bn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function oi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bs(e, t) {
  const n = oi(e);
  return Math.round(t * n) / n;
}
function hr(e) {
  const t = c.useRef(e);
  return cn(() => {
    t.current = e;
  }), t;
}
function Hm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, f] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, b] = c.useState(r);
  bn(v, r) || b(r);
  const [g, m] = c.useState(null), [h, y] = c.useState(null), w = c.useCallback((R) => {
    R !== P.current && (P.current = R, m(R));
  }, []), x = c.useCallback((R) => {
    R !== T.current && (T.current = R, y(R));
  }, []), C = s || g, E = a || h, P = c.useRef(null), T = c.useRef(null), N = c.useRef(d), F = l != null, B = hr(l), z = hr(o), H = hr(u), j = c.useCallback(() => {
    if (!P.current || !T.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: v
    };
    z.current && (R.platform = z.current), Bm(P.current, T.current, R).then((_) => {
      const Q = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      A.current && !bn(N.current, Q) && (N.current = Q, Lt.flushSync(() => {
        f(Q);
      }));
    });
  }, [v, t, n, z, H]);
  cn(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const A = c.useRef(!1);
  cn(() => (A.current = !0, () => {
    A.current = !1;
  }), []), cn(() => {
    if (C && (P.current = C), E && (T.current = E), C && E) {
      if (B.current)
        return B.current(C, E, j);
      j();
    }
  }, [C, E, j, B, F]);
  const V = c.useMemo(() => ({
    reference: P,
    floating: T,
    setReference: w,
    setFloating: x
  }), [w, x]), O = c.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), U = c.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return R;
    const _ = bs(O.floating, d.x), Q = bs(O.floating, d.y);
    return i ? {
      ...R,
      transform: "translate(" + _ + "px, " + Q + "px)",
      ...oi(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: Q
    };
  }, [n, i, O.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: j,
    refs: V,
    elements: O,
    floatingStyles: U
  }), [d, j, V, O, U]);
}
const zm = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? vs({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? vs({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, jm = (e, t) => ({
  ...Om(e),
  options: [e, t]
}), Wm = (e, t) => ({
  ...Mm(e),
  options: [e, t]
}), Gm = (e, t) => ({
  ...$m(e),
  options: [e, t]
}), Km = (e, t) => ({
  ...Dm(e),
  options: [e, t]
}), qm = (e, t) => ({
  ...Lm(e),
  options: [e, t]
}), Xm = (e, t) => ({
  ...Fm(e),
  options: [e, t]
}), Ym = (e, t) => ({
  ...zm(e),
  options: [e, t]
});
var Jm = "Arrow", si = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p(
    $.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
si.displayName = Jm;
var Zm = si, go = "Popper", [ai, xt] = he(go), [Qm, ii] = ai(go), ci = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ p(Qm, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ci.displayName = go;
var li = "PopperAnchor", ui = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = ii(li, n), a = c.useRef(null), i = q(t, a), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = r?.current || a.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p($.div, { ...o, ref: i });
  }
);
ui.displayName = li;
var vo = "PopperContent", [eh, th] = ai(vo), di = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: g,
      ...m
    } = e, h = ii(vo, n), [y, w] = c.useState(null), x = q(t, (I) => w(I)), [C, E] = c.useState(null), P = Tn(C), T = P?.width ?? 0, N = P?.height ?? 0, F = r + (s !== "center" ? "-" + s : ""), B = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, z = Array.isArray(u) ? u : [u], H = z.length > 0, j = {
      padding: B,
      boundary: z.filter(rh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: A, floatingStyles: V, placement: O, isPositioned: U, middlewareData: R } = Hm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...I) => _m(...I, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        jm({ mainAxis: o + N, alignmentAxis: a }),
        l && Wm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Gm() : void 0,
          ...j
        }),
        l && Km({ ...j }),
        qm({
          ...j,
          apply: ({ elements: I, rects: ee, availableWidth: se, availableHeight: J }) => {
            const { width: te, height: re } = ee.reference, we = I.floating.style;
            we.setProperty("--radix-popper-available-width", `${se}px`), we.setProperty("--radix-popper-available-height", `${J}px`), we.setProperty("--radix-popper-anchor-width", `${te}px`), we.setProperty("--radix-popper-anchor-height", `${re}px`);
          }
        }),
        C && Ym({ element: C, padding: i }),
        oh({ arrowWidth: T, arrowHeight: N }),
        v && Xm({ strategy: "referenceHidden", ...j })
      ]
    }), [_, Q] = mi(O), Z = fe(g);
    ce(() => {
      U && Z?.();
    }, [U, Z]);
    const ne = R.arrow?.x, X = R.arrow?.y, Y = R.arrow?.centerOffset !== 0, [ie, le] = c.useState();
    return ce(() => {
      y && le(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p(
      "div",
      {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: U ? V.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ie,
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
        children: /* @__PURE__ */ p(
          eh,
          {
            scope: n,
            placedSide: _,
            onArrowChange: E,
            arrowX: ne,
            arrowY: X,
            shouldHideArrow: Y,
            children: /* @__PURE__ */ p(
              $.div,
              {
                "data-side": _,
                "data-align": Q,
                ...m,
                ref: x,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
di.displayName = vo;
var fi = "PopperArrow", nh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, pi = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = th(fi, r), a = nh[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p(
          Zm,
          {
            ...o,
            ref: n,
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
pi.displayName = fi;
function rh(e) {
  return e !== null;
}
var oh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, d] = mi(n), f = { start: "0%", center: "50%", end: "100%" }[d], v = (o.arrow?.x ?? 0) + i / 2, b = (o.arrow?.y ?? 0) + l / 2;
    let g = "", m = "";
    return u === "bottom" ? (g = a ? f : `${v}px`, m = `${-l}px`) : u === "top" ? (g = a ? f : `${v}px`, m = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, m = a ? f : `${b}px`) : u === "left" && (g = `${r.floating.width + l}px`, m = a ? f : `${b}px`), { data: { x: g, y: m } };
  }
});
function mi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Fn = ci, bo = ui, yo = di, wo = pi, gr = "rovingFocusGroup.onEntryFocus", sh = { bubbles: !1, cancelable: !0 }, Ut = "RovingFocusGroup", [Mr, hi, ah] = _n(Ut), [ih, Ct] = he(
  Ut,
  [ah]
), [ch, lh] = ih(Ut), gi = c.forwardRef(
  (e, t) => /* @__PURE__ */ p(Mr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Mr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(uh, { ...e, ref: t }) }) })
);
gi.displayName = Ut;
var uh = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, v = c.useRef(null), b = q(t, v), g = $t(s), [m, h] = Ce({
    prop: a,
    defaultProp: i ?? null,
    onChange: l,
    caller: Ut
  }), [y, w] = c.useState(!1), x = fe(u), C = hi(n), E = c.useRef(!1), [P, T] = c.useState(0);
  return c.useEffect(() => {
    const N = v.current;
    if (N)
      return N.addEventListener(gr, x), () => N.removeEventListener(gr, x);
  }, [x]), /* @__PURE__ */ p(
    ch,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: m,
      onItemFocus: c.useCallback(
        (N) => h(N),
        [h]
      ),
      onItemShiftTab: c.useCallback(() => w(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => T((N) => N + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => T((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        $.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: k(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: k(e.onFocus, (N) => {
            const F = !E.current;
            if (N.target === N.currentTarget && F && !y) {
              const B = new CustomEvent(gr, sh);
              if (N.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const z = C().filter((O) => O.focusable), H = z.find((O) => O.active), j = z.find((O) => O.id === m), V = [H, j, ...z].filter(
                  Boolean
                ).map((O) => O.ref.current);
                yi(V, d);
              }
            }
            E.current = !1;
          }),
          onBlur: k(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), vi = "RovingFocusGroupItem", bi = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, l = ve(), u = s || l, d = lh(vi, n), f = d.currentTabStopId === u, v = hi(n), { onFocusableItemAdd: b, onFocusableItemRemove: g, currentTabStopId: m } = d;
    return c.useEffect(() => {
      if (r)
        return b(), () => g();
    }, [r, b, g]), /* @__PURE__ */ p(
      Mr.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p(
          $.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...i,
            ref: t,
            onMouseDown: k(e.onMouseDown, (h) => {
              r ? d.onItemFocus(u) : h.preventDefault();
            }),
            onFocus: k(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: k(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const y = ph(h, d.orientation, d.dir);
              if (y !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let x = v().filter((C) => C.focusable).map((C) => C.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const C = x.indexOf(h.currentTarget);
                  x = d.loop ? mh(x, C + 1) : x.slice(C + 1);
                }
                setTimeout(() => yi(x));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
bi.displayName = vi;
var dh = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fh(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ph(e, t, n) {
  const r = fh(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return dh[r];
}
function yi(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function mh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var xo = gi, Co = bi, Dr = ["Enter", " "], hh = ["ArrowDown", "PageUp", "Home"], wi = ["ArrowUp", "PageDown", "End"], gh = [...hh, ...wi], vh = {
  ltr: [...Dr, "ArrowRight"],
  rtl: [...Dr, "ArrowLeft"]
}, bh = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Vt = "Menu", [Ot, yh, wh] = _n(Vt), [at, xi] = he(Vt, [
  wh,
  xt,
  Ct
]), Ht = xt(), Ci = Ct(), [Si, We] = at(Vt), [xh, zt] = at(Vt), Ei = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = Ht(t), [l, u] = c.useState(null), d = c.useRef(!1), f = fe(s), v = $t(o);
  return c.useEffect(() => {
    const b = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", b, { capture: !0 }), () => {
      document.removeEventListener("keydown", b, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p(Fn, { ...i, children: /* @__PURE__ */ p(
    Si,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ p(
        xh,
        {
          scope: t,
          onClose: c.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: v,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Ei.displayName = Vt;
var Ch = "MenuAnchor", So = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ht(n);
    return /* @__PURE__ */ p(bo, { ...o, ...r, ref: t });
  }
);
So.displayName = Ch;
var Eo = "MenuPortal", [Sh, Ri] = at(Eo, {
  forceMount: void 0
}), Ti = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = We(Eo, t);
  return /* @__PURE__ */ p(Sh, { scope: t, forceMount: n, children: /* @__PURE__ */ p(ye, { present: n || s.open, children: /* @__PURE__ */ p(Ft, { asChild: !0, container: o, children: r }) }) });
};
Ti.displayName = Eo;
var xe = "MenuContent", [Eh, Ro] = at(xe), Ni = c.forwardRef(
  (e, t) => {
    const n = Ri(xe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = We(xe, e.__scopeMenu), a = zt(xe, e.__scopeMenu);
    return /* @__PURE__ */ p(Ot.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(ye, { present: r || s.open, children: /* @__PURE__ */ p(Ot.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ p(Rh, { ...o, ref: t }) : /* @__PURE__ */ p(Th, { ...o, ref: t }) }) }) });
  }
), Rh = c.forwardRef(
  (e, t) => {
    const n = We(xe, e.__scopeMenu), r = c.useRef(null), o = q(t, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return so(s);
    }, []), /* @__PURE__ */ p(
      To,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: k(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Th = c.forwardRef((e, t) => {
  const n = We(xe, e.__scopeMenu);
  return /* @__PURE__ */ p(
    To,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Nh = /* @__PURE__ */ et("MenuContent.ScrollLock"), To = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: v,
      onDismiss: b,
      disableOutsideScroll: g,
      ...m
    } = e, h = We(xe, n), y = zt(xe, n), w = Ht(n), x = Ci(n), C = yh(n), [E, P] = c.useState(null), T = c.useRef(null), N = q(t, T, h.onContentChange), F = c.useRef(0), B = c.useRef(""), z = c.useRef(0), H = c.useRef(null), j = c.useRef("right"), A = c.useRef(0), V = g ? kn : c.Fragment, O = g ? { as: Nh, allowPinchZoom: !0 } : void 0, U = (_) => {
      const Q = B.current + _, Z = C().filter((I) => !I.disabled), ne = document.activeElement, X = Z.find((I) => I.ref.current === ne)?.textValue, Y = Z.map((I) => I.textValue), ie = Bh(Y, Q, X), le = Z.find((I) => I.textValue === ie)?.ref.current;
      (function I(ee) {
        B.current = ee, window.clearTimeout(F.current), ee !== "" && (F.current = window.setTimeout(() => I(""), 1e3));
      })(Q), le && setTimeout(() => le.focus());
    };
    c.useEffect(() => () => window.clearTimeout(F.current), []), oo();
    const R = c.useCallback((_) => j.current === H.current?.side && Vh(_, H.current?.area), []);
    return /* @__PURE__ */ p(
      Eh,
      {
        scope: n,
        searchRef: B,
        onItemEnter: c.useCallback(
          (_) => {
            R(_) && _.preventDefault();
          },
          [R]
        ),
        onItemLeave: c.useCallback(
          (_) => {
            R(_) || (T.current?.focus(), P(null));
          },
          [R]
        ),
        onTriggerLeave: c.useCallback(
          (_) => {
            R(_) && _.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: z,
        onPointerGraceIntentChange: c.useCallback((_) => {
          H.current = _;
        }, []),
        children: /* @__PURE__ */ p(V, { ...O, children: /* @__PURE__ */ p(
          Pn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: k(s, (_) => {
              _.preventDefault(), T.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ p(
              bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: v,
                onDismiss: b,
                children: /* @__PURE__ */ p(
                  xo,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: k(l, (_) => {
                      y.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      yo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ji(h.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...m,
                        ref: N,
                        style: { outline: "none", ...m.style },
                        onKeyDown: k(m.onKeyDown, (_) => {
                          const Z = _.target.closest("[data-radix-menu-content]") === _.currentTarget, ne = _.ctrlKey || _.altKey || _.metaKey, X = _.key.length === 1;
                          Z && (_.key === "Tab" && _.preventDefault(), !ne && X && U(_.key));
                          const Y = T.current;
                          if (_.target !== Y || !gh.includes(_.key)) return;
                          _.preventDefault();
                          const le = C().filter((I) => !I.disabled).map((I) => I.ref.current);
                          wi.includes(_.key) && le.reverse(), Fh(le);
                        }),
                        onBlur: k(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(F.current), B.current = "");
                        }),
                        onPointerMove: k(
                          e.onPointerMove,
                          Mt((_) => {
                            const Q = _.target, Z = A.current !== _.clientX;
                            if (_.currentTarget.contains(Q) && Z) {
                              const ne = _.clientX > A.current ? "right" : "left";
                              j.current = ne, A.current = _.clientX;
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
Ni.displayName = xe;
var Ph = "MenuGroup", No = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p($.div, { role: "group", ...r, ref: t });
  }
);
No.displayName = Ph;
var Ah = "MenuLabel", Pi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p($.div, { ...r, ref: t });
  }
);
Pi.displayName = Ah;
var yn = "MenuItem", ys = "menu.itemSelect", $n = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = c.useRef(null), a = zt(yn, e.__scopeMenu), i = Ro(yn, e.__scopeMenu), l = q(t, s), u = c.useRef(!1), d = () => {
      const f = s.current;
      if (!n && f) {
        const v = new CustomEvent(ys, { bubbles: !0, cancelable: !0 });
        f.addEventListener(ys, (b) => r?.(b), { once: !0 }), to(f, v), v.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ p(
      Ai,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: k(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), u.current = !0;
        },
        onPointerUp: k(e.onPointerUp, (f) => {
          u.current || f.currentTarget?.click();
        }),
        onKeyDown: k(e.onKeyDown, (f) => {
          const v = i.searchRef.current !== "";
          n || v && f.key === " " || Dr.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
$n.displayName = yn;
var Ai = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = Ro(yn, n), i = Ci(n), l = c.useRef(null), u = q(t, l), [d, f] = c.useState(!1), [v, b] = c.useState("");
    return c.useEffect(() => {
      const g = l.current;
      g && b((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ p(
      Ot.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? v,
        children: /* @__PURE__ */ p(Co, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ p(
          $.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: k(
              e.onPointerMove,
              Mt((g) => {
                r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: k(
              e.onPointerLeave,
              Mt((g) => a.onItemLeave(g))
            ),
            onFocus: k(e.onFocus, () => f(!0)),
            onBlur: k(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), kh = "MenuCheckboxItem", ki = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p(Di, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p(
      $n,
      {
        role: "menuitemcheckbox",
        "aria-checked": wn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ko(n),
        onSelect: k(
          o.onSelect,
          () => r?.(wn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ki.displayName = kh;
var Ii = "MenuRadioGroup", [Ih, _h] = at(
  Ii,
  { value: void 0, onValueChange: () => {
  } }
), _i = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = fe(r);
    return /* @__PURE__ */ p(Ih, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ p(No, { ...o, ref: t }) });
  }
);
_i.displayName = Ii;
var Oi = "MenuRadioItem", Mi = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = _h(Oi, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ p(Di, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ p(
      $n,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": ko(s),
        onSelect: k(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Mi.displayName = Oi;
var Po = "MenuItemIndicator", [Di, Oh] = at(
  Po,
  { checked: !1 }
), Li = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = Oh(Po, n);
    return /* @__PURE__ */ p(
      ye,
      {
        present: r || wn(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ p(
          $.span,
          {
            ...o,
            ref: t,
            "data-state": ko(s.checked)
          }
        )
      }
    );
  }
);
Li.displayName = Po;
var Mh = "MenuSeparator", Fi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(
      $.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Fi.displayName = Mh;
var Dh = "MenuArrow", $i = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ht(n);
    return /* @__PURE__ */ p(wo, { ...o, ...r, ref: t });
  }
);
$i.displayName = Dh;
var Ao = "MenuSub", [Lh, Bi] = at(Ao), Ui = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = We(Ao, t), a = Ht(t), [i, l] = c.useState(null), [u, d] = c.useState(null), f = fe(o);
  return c.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ p(Fn, { ...a, children: /* @__PURE__ */ p(
    Si,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ p(
        Lh,
        {
          scope: t,
          contentId: ve(),
          triggerId: ve(),
          trigger: i,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Ui.displayName = Ao;
var Pt = "MenuSubTrigger", Vi = c.forwardRef(
  (e, t) => {
    const n = We(Pt, e.__scopeMenu), r = zt(Pt, e.__scopeMenu), o = Bi(Pt, e.__scopeMenu), s = Ro(Pt, e.__scopeMenu), a = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = s, u = { __scopeMenu: e.__scopeMenu }, d = c.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return c.useEffect(() => d, [d]), c.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [i, l]), /* @__PURE__ */ p(So, { asChild: !0, ...u, children: /* @__PURE__ */ p(
      Ai,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": ji(n.open),
        ...e,
        ref: Sn(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: k(
          e.onPointerMove,
          Mt((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: k(
          e.onPointerLeave,
          Mt((f) => {
            d();
            const v = n.content?.getBoundingClientRect();
            if (v) {
              const b = n.content?.dataset.side, g = b === "right", m = g ? -5 : 5, h = v[g ? "left" : "right"], y = v[g ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + m, y: f.clientY },
                  { x: h, y: v.top },
                  { x: y, y: v.top },
                  { x: y, y: v.bottom },
                  { x: h, y: v.bottom }
                ],
                side: b
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(f), f.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: k(e.onKeyDown, (f) => {
          const v = s.searchRef.current !== "";
          e.disabled || v && f.key === " " || vh[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Vi.displayName = Pt;
var Hi = "MenuSubContent", zi = c.forwardRef(
  (e, t) => {
    const n = Ri(xe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = We(xe, e.__scopeMenu), a = zt(xe, e.__scopeMenu), i = Bi(Hi, e.__scopeMenu), l = c.useRef(null), u = q(t, l);
    return /* @__PURE__ */ p(Ot.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(ye, { present: r || s.open, children: /* @__PURE__ */ p(Ot.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(
      To,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          a.isUsingKeyboardRef.current && l.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: k(e.onFocusOutside, (d) => {
          d.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: k(e.onEscapeKeyDown, (d) => {
          a.onClose(), d.preventDefault();
        }),
        onKeyDown: k(e.onKeyDown, (d) => {
          const f = d.currentTarget.contains(d.target), v = bh[a.dir].includes(d.key);
          f && v && (s.onOpenChange(!1), i.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
zi.displayName = Hi;
function ji(e) {
  return e ? "open" : "closed";
}
function wn(e) {
  return e === "indeterminate";
}
function ko(e) {
  return wn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Fh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function $h(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Bh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = $h(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Uh(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], l = t[a], u = i.x, d = i.y, f = l.x, v = l.y;
    d > r != v > r && n < (f - u) * (r - d) / (v - d) + u && (o = !o);
  }
  return o;
}
function Vh(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Uh(n, t);
}
function Mt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Hh = Ei, zh = So, jh = Ti, Wh = Ni, Gh = No, Kh = Pi, qh = $n, Xh = ki, Yh = _i, Jh = Mi, Zh = Li, Qh = Fi, eg = $i, tg = Ui, ng = Vi, rg = zi, Bn = "DropdownMenu", [og] = he(
  Bn,
  [xi]
), de = xi(), [sg, Wi] = og(Bn), Gi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, l = de(t), u = c.useRef(null), [d, f] = Ce({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: Bn
  });
  return /* @__PURE__ */ p(
    sg,
    {
      scope: t,
      triggerId: ve(),
      triggerRef: u,
      contentId: ve(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((v) => !v), [f]),
      modal: i,
      children: /* @__PURE__ */ p(Hh, { ...l, open: d, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
Gi.displayName = Bn;
var Ki = "DropdownMenuTrigger", qi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Wi(Ki, n), a = de(n);
    return /* @__PURE__ */ p(zh, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Sn(t, s.triggerRef),
        onPointerDown: k(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: k(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
qi.displayName = Ki;
var ag = "DropdownMenuPortal", Xi = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = de(t);
  return /* @__PURE__ */ p(jh, { ...r, ...n });
};
Xi.displayName = ag;
var Yi = "DropdownMenuContent", Ji = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Wi(Yi, n), s = de(n), a = c.useRef(!1);
    return /* @__PURE__ */ p(
      Wh,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (i) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: k(e.onInteractOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || u;
          (!o.modal || d) && (a.current = !0);
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
Ji.displayName = Yi;
var ig = "DropdownMenuGroup", Zi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ p(Gh, { ...o, ...r, ref: t });
  }
);
Zi.displayName = ig;
var cg = "DropdownMenuLabel", Qi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ p(Kh, { ...o, ...r, ref: t });
  }
);
Qi.displayName = cg;
var lg = "DropdownMenuItem", ec = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ p(qh, { ...o, ...r, ref: t });
  }
);
ec.displayName = lg;
var ug = "DropdownMenuCheckboxItem", tc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(Xh, { ...o, ...r, ref: t });
});
tc.displayName = ug;
var dg = "DropdownMenuRadioGroup", nc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(Yh, { ...o, ...r, ref: t });
});
nc.displayName = dg;
var fg = "DropdownMenuRadioItem", rc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(Jh, { ...o, ...r, ref: t });
});
rc.displayName = fg;
var pg = "DropdownMenuItemIndicator", oc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(Zh, { ...o, ...r, ref: t });
});
oc.displayName = pg;
var mg = "DropdownMenuSeparator", sc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(Qh, { ...o, ...r, ref: t });
});
sc.displayName = mg;
var hg = "DropdownMenuArrow", gg = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
    return /* @__PURE__ */ p(eg, { ...o, ...r, ref: t });
  }
);
gg.displayName = hg;
var vg = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, a = de(t), [i, l] = Ce({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ p(tg, { ...a, open: i, onOpenChange: l, children: n });
}, bg = "DropdownMenuSubTrigger", ac = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(ng, { ...o, ...r, ref: t });
});
ac.displayName = bg;
var yg = "DropdownMenuSubContent", ic = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = de(n);
  return /* @__PURE__ */ p(
    rg,
    {
      ...o,
      ...r,
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
ic.displayName = yg;
var wg = Gi, xg = qi, cc = Xi, lc = Ji, Cg = Zi, uc = Qi, dc = ec, fc = tc, Sg = nc, pc = rc, mc = oc, hc = sc, Eg = vg, gc = ac, vc = ic;
const Iw = wg, _w = xg, Ow = Cg, Mw = cc, Dw = Eg, Lw = Sg, Rg = c.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ W(
  gc,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p(Qr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Rg.displayName = gc.displayName;
const Tg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  vc,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Tg.displayName = vc.displayName;
const Ng = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p(cc, { children: /* @__PURE__ */ p(
  lc,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Ng.displayName = lc.displayName;
const Pg = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  dc,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Pg.displayName = dc.displayName;
const Ag = c.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ W(
  fc,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(mc, { children: /* @__PURE__ */ p(Jr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ag.displayName = fc.displayName;
const kg = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  pc,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(mc, { children: /* @__PURE__ */ p(js, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
kg.displayName = pc.displayName;
const Ig = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  uc,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ig.displayName = uc.displayName;
const _g = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  hc,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_g.displayName = hc.displayName;
const Og = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Og.displayName = "DropdownShortcut";
function ws(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var bc = Object.freeze({
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
}), Mg = "VisuallyHidden", Un = c.forwardRef(
  (e, t) => /* @__PURE__ */ p(
    $.span,
    {
      ...e,
      ref: t,
      style: { ...bc, ...e.style }
    }
  )
);
Un.displayName = Mg;
var Dg = Un, Lg = [" ", "Enter", "ArrowUp", "ArrowDown"], Fg = [" ", "Enter"], rt = "Select", [Vn, Hn, $g] = _n(rt), [St] = he(rt, [
  $g,
  xt
]), zn = xt(), [Bg, Ge] = St(rt), [Ug, Vg] = St(rt), yc = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: l,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: v,
    required: b,
    form: g
  } = e, m = zn(t), [h, y] = c.useState(null), [w, x] = c.useState(null), [C, E] = c.useState(!1), P = $t(u), [T, N] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: rt
  }), [F, B] = Ce({
    prop: a,
    defaultProp: i,
    onChange: l,
    caller: rt
  }), z = c.useRef(null), H = h ? g || !!h.closest("form") : !0, [j, A] = c.useState(/* @__PURE__ */ new Set()), V = Array.from(j).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ p(Fn, { ...m, children: /* @__PURE__ */ W(
    Bg,
    {
      required: b,
      scope: t,
      trigger: h,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: E,
      contentId: ve(),
      value: F,
      onValueChange: B,
      open: T,
      onOpenChange: N,
      dir: P,
      triggerPointerDownPosRef: z,
      disabled: v,
      children: [
        /* @__PURE__ */ p(Vn.Provider, { scope: t, children: /* @__PURE__ */ p(
          Ug,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((O) => {
              A((U) => new Set(U).add(O));
            }, []),
            onNativeOptionRemove: c.useCallback((O) => {
              A((U) => {
                const R = new Set(U);
                return R.delete(O), R;
              });
            }, []),
            children: n
          }
        ) }),
        H ? /* @__PURE__ */ W(
          jc,
          {
            "aria-hidden": !0,
            required: b,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: F,
            onChange: (O) => B(O.target.value),
            disabled: v,
            form: g,
            children: [
              F === void 0 ? /* @__PURE__ */ p("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          V
        ) : null
      ]
    }
  ) });
};
yc.displayName = rt;
var wc = "SelectTrigger", xc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = zn(n), a = Ge(wc, n), i = a.disabled || r, l = q(t, a.onTriggerChange), u = Hn(n), d = c.useRef("touch"), [f, v, b] = Gc((m) => {
      const h = u().filter((x) => !x.disabled), y = h.find((x) => x.value === a.value), w = Kc(h, m, y);
      w !== void 0 && a.onValueChange(w.value);
    }), g = (m) => {
      i || (a.onOpenChange(!0), b()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ p(bo, { asChild: !0, ...s, children: /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Wc(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: k(o.onClick, (m) => {
          m.currentTarget.focus(), d.current !== "mouse" && g(m);
        }),
        onPointerDown: k(o.onPointerDown, (m) => {
          d.current = m.pointerType;
          const h = m.target;
          h.hasPointerCapture(m.pointerId) && h.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (g(m), m.preventDefault());
        }),
        onKeyDown: k(o.onKeyDown, (m) => {
          const h = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && v(m.key), !(h && m.key === " ") && Lg.includes(m.key) && (g(), m.preventDefault());
        })
      }
    ) });
  }
);
xc.displayName = wc;
var Cc = "SelectValue", Sc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, l = Ge(Cc, n), { onValueNodeHasChildrenChange: u } = l, d = s !== void 0, f = q(t, l.onValueNodeChange);
    return ce(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ p(
      $.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Wc(l.value) ? /* @__PURE__ */ p(Fe, { children: a }) : s
      }
    );
  }
);
Sc.displayName = Cc;
var Hg = "SelectIcon", Ec = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p($.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ec.displayName = Hg;
var zg = "SelectPortal", Rc = (e) => /* @__PURE__ */ p(Ft, { asChild: !0, ...e });
Rc.displayName = zg;
var ot = "SelectContent", Tc = c.forwardRef(
  (e, t) => {
    const n = Ge(ot, e.__scopeSelect), [r, o] = c.useState();
    if (ce(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Lt.createPortal(
        /* @__PURE__ */ p(Nc, { scope: e.__scopeSelect, children: /* @__PURE__ */ p(Vn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p(Pc, { ...e, ref: t });
  }
);
Tc.displayName = ot;
var Se = 10, [Nc, Ke] = St(ot), jg = "SelectContentImpl", Wg = /* @__PURE__ */ et("SelectContent.RemoveScroll"), Pc = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: h,
      //
      ...y
    } = e, w = Ge(ot, n), [x, C] = c.useState(null), [E, P] = c.useState(null), T = q(t, (I) => C(I)), [N, F] = c.useState(null), [B, z] = c.useState(
      null
    ), H = Hn(n), [j, A] = c.useState(!1), V = c.useRef(!1);
    c.useEffect(() => {
      if (x) return so(x);
    }, [x]), oo();
    const O = c.useCallback(
      (I) => {
        const [ee, ...se] = H().map((re) => re.ref.current), [J] = se.slice(-1), te = document.activeElement;
        for (const re of I)
          if (re === te || (re?.scrollIntoView({ block: "nearest" }), re === ee && E && (E.scrollTop = 0), re === J && E && (E.scrollTop = E.scrollHeight), re?.focus(), document.activeElement !== te)) return;
      },
      [H, E]
    ), U = c.useCallback(
      () => O([N, x]),
      [O, N, x]
    );
    c.useEffect(() => {
      j && U();
    }, [j, U]);
    const { onOpenChange: R, triggerPointerDownPosRef: _ } = w;
    c.useEffect(() => {
      if (x) {
        let I = { x: 0, y: 0 };
        const ee = (J) => {
          I = {
            x: Math.abs(Math.round(J.pageX) - (_.current?.x ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (_.current?.y ?? 0))
          };
        }, se = (J) => {
          I.x <= 10 && I.y <= 10 ? J.preventDefault() : x.contains(J.target) || R(!1), document.removeEventListener("pointermove", ee), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [x, R, _]), c.useEffect(() => {
      const I = () => R(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [R]);
    const [Q, Z] = Gc((I) => {
      const ee = H().filter((te) => !te.disabled), se = ee.find((te) => te.ref.current === document.activeElement), J = Kc(ee, I, se);
      J && setTimeout(() => J.ref.current.focus());
    }), ne = c.useCallback(
      (I, ee, se) => {
        const J = !V.current && !se;
        (w.value !== void 0 && w.value === ee || J) && (F(I), J && (V.current = !0));
      },
      [w.value]
    ), X = c.useCallback(() => x?.focus(), [x]), Y = c.useCallback(
      (I, ee, se) => {
        const J = !V.current && !se;
        (w.value !== void 0 && w.value === ee || J) && z(I);
      },
      [w.value]
    ), ie = r === "popper" ? Lr : Ac, le = ie === Lr ? {
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: h
    } : {};
    return /* @__PURE__ */ p(
      Nc,
      {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: ne,
        selectedItem: N,
        onItemLeave: X,
        itemTextRefCallback: Y,
        focusSelectedItem: U,
        selectedItemText: B,
        position: r,
        isPositioned: j,
        searchRef: Q,
        children: /* @__PURE__ */ p(kn, { as: Wg, allowPinchZoom: !0, children: /* @__PURE__ */ p(
          Pn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: k(o, (I) => {
              w.trigger?.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ p(
              bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p(
                  ie,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...y,
                    ...le,
                    onPlaced: () => A(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: k(y.onKeyDown, (I) => {
                      const ee = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !ee && I.key.length === 1 && Z(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let J = H().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const te = I.target, re = J.indexOf(te);
                          J = J.slice(re + 1);
                        }
                        setTimeout(() => O(J)), I.preventDefault();
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
Pc.displayName = jg;
var Gg = "SelectItemAlignedPosition", Ac = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Ge(ot, n), a = Ke(ot, n), [i, l] = c.useState(null), [u, d] = c.useState(null), f = q(t, (T) => d(T)), v = Hn(n), b = c.useRef(!1), g = c.useRef(!0), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: w } = a, x = c.useCallback(() => {
    if (s.trigger && s.valueNode && i && u && m && h && y) {
      const T = s.trigger.getBoundingClientRect(), N = u.getBoundingClientRect(), F = s.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const te = B.left - N.left, re = F.left - te, we = T.left - re, qe = T.width + we, nr = Math.max(qe, N.width), rr = window.innerWidth - Se, or = ws(re, [
          Se,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Se, rr - nr)
        ]);
        i.style.minWidth = qe + "px", i.style.left = or + "px";
      } else {
        const te = N.right - B.right, re = window.innerWidth - F.right - te, we = window.innerWidth - T.right - re, qe = T.width + we, nr = Math.max(qe, N.width), rr = window.innerWidth - Se, or = ws(re, [
          Se,
          Math.max(Se, rr - nr)
        ]);
        i.style.minWidth = qe + "px", i.style.right = or + "px";
      }
      const z = v(), H = window.innerHeight - Se * 2, j = m.scrollHeight, A = window.getComputedStyle(u), V = parseInt(A.borderTopWidth, 10), O = parseInt(A.paddingTop, 10), U = parseInt(A.borderBottomWidth, 10), R = parseInt(A.paddingBottom, 10), _ = V + O + j + R + U, Q = Math.min(h.offsetHeight * 5, _), Z = window.getComputedStyle(m), ne = parseInt(Z.paddingTop, 10), X = parseInt(Z.paddingBottom, 10), Y = T.top + T.height / 2 - Se, ie = H - Y, le = h.offsetHeight / 2, I = h.offsetTop + le, ee = V + O + I, se = _ - ee;
      if (ee <= Y) {
        const te = z.length > 0 && h === z[z.length - 1].ref.current;
        i.style.bottom = "0px";
        const re = u.clientHeight - m.offsetTop - m.offsetHeight, we = Math.max(
          ie,
          le + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? X : 0) + re + U
        ), qe = ee + we;
        i.style.height = qe + "px";
      } else {
        const te = z.length > 0 && h === z[0].ref.current;
        i.style.top = "0px";
        const we = Math.max(
          Y,
          V + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? ne : 0) + le
        ) + se;
        i.style.height = we + "px", m.scrollTop = ee - Y + m.offsetTop;
      }
      i.style.margin = `${Se}px 0`, i.style.minHeight = Q + "px", i.style.maxHeight = H + "px", r?.(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    v,
    s.trigger,
    s.valueNode,
    i,
    u,
    m,
    h,
    y,
    s.dir,
    r
  ]);
  ce(() => x(), [x]);
  const [C, E] = c.useState();
  ce(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = c.useCallback(
    (T) => {
      T && g.current === !0 && (x(), w?.(), g.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ p(
    qg,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ p(
            $.div,
            {
              ...o,
              ref: f,
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
Ac.displayName = Gg;
var Kg = "SelectPopperPosition", Lr = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Se,
    ...s
  } = e, a = zn(n);
  return /* @__PURE__ */ p(
    yo,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Lr.displayName = Kg;
var [qg, Io] = St(ot, {}), Fr = "SelectViewport", kc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Ke(Fr, n), a = Io(Fr, n), i = q(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ W(Fe, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p(Vn.Slot, { scope: n, children: /* @__PURE__ */ p(
        $.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
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
          onScroll: k(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: v } = a;
            if (v?.current && f) {
              const b = Math.abs(l.current - d.scrollTop);
              if (b > 0) {
                const g = window.innerHeight - Se * 2, m = parseFloat(f.style.minHeight), h = parseFloat(f.style.height), y = Math.max(m, h);
                if (y < g) {
                  const w = y + b, x = Math.min(g, w), C = w - x;
                  f.style.height = x + "px", f.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
kc.displayName = Fr;
var Ic = "SelectGroup", [Xg, Yg] = St(Ic), _c = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ve();
    return /* @__PURE__ */ p(Xg, { scope: n, id: o, children: /* @__PURE__ */ p($.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
_c.displayName = Ic;
var Oc = "SelectLabel", Mc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Yg(Oc, n);
    return /* @__PURE__ */ p($.div, { id: o.id, ...r, ref: t });
  }
);
Mc.displayName = Oc;
var xn = "SelectItem", [Jg, Dc] = St(xn), Lc = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Ge(xn, n), l = Ke(xn, n), u = i.value === r, [d, f] = c.useState(s ?? ""), [v, b] = c.useState(!1), g = q(
      t,
      (w) => l.itemRefCallback?.(w, r, o)
    ), m = ve(), h = c.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p(
      Jg,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: u,
        onItemTextChange: c.useCallback((w) => {
          f((x) => x || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p(
          Vn.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ p(
              $.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": u && v,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: k(a.onFocus, () => b(!0)),
                onBlur: k(a.onBlur, () => b(!1)),
                onClick: k(a.onClick, () => {
                  h.current !== "mouse" && y();
                }),
                onPointerUp: k(a.onPointerUp, () => {
                  h.current === "mouse" && y();
                }),
                onPointerDown: k(a.onPointerDown, (w) => {
                  h.current = w.pointerType;
                }),
                onPointerMove: k(a.onPointerMove, (w) => {
                  h.current = w.pointerType, o ? l.onItemLeave?.() : h.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: k(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: k(a.onKeyDown, (w) => {
                  l.searchRef?.current !== "" && w.key === " " || (Fg.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Lc.displayName = xn;
var At = "SelectItemText", Fc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = Ge(At, n), i = Ke(At, n), l = Dc(At, n), u = Vg(At, n), [d, f] = c.useState(null), v = q(
      t,
      (y) => f(y),
      l.onItemTextChange,
      (y) => i.itemTextRefCallback?.(y, l.value, l.disabled)
    ), b = d?.textContent, g = c.useMemo(
      () => /* @__PURE__ */ p("option", { value: l.value, disabled: l.disabled, children: b }, l.value),
      [l.disabled, l.value, b]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: h } = u;
    return ce(() => (m(g), () => h(g)), [m, h, g]), /* @__PURE__ */ W(Fe, { children: [
      /* @__PURE__ */ p($.span, { id: l.textId, ...s, ref: v }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Lt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Fc.displayName = At;
var $c = "SelectItemIndicator", Bc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Dc($c, n).isSelected ? /* @__PURE__ */ p($.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Bc.displayName = $c;
var $r = "SelectScrollUpButton", Uc = c.forwardRef((e, t) => {
  const n = Ke($r, e.__scopeSelect), r = Io($r, e.__scopeSelect), [o, s] = c.useState(!1), a = q(t, r.onScrollButtonChange);
  return ce(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Hc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Uc.displayName = $r;
var Br = "SelectScrollDownButton", Vc = c.forwardRef((e, t) => {
  const n = Ke(Br, e.__scopeSelect), r = Io(Br, e.__scopeSelect), [o, s] = c.useState(!1), a = q(t, r.onScrollButtonChange);
  return ce(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < u;
        s(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Hc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Vc.displayName = Br;
var Hc = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Ke("SelectScrollButton", n), a = c.useRef(null), i = Hn(n), l = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), ce(() => {
    i().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ p(
    $.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: k(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: k(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: k(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Zg = "SelectSeparator", zc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p($.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
zc.displayName = Zg;
var Ur = "SelectArrow", Qg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = zn(n), s = Ge(Ur, n), a = Ke(Ur, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ p(wo, { ...o, ...r, ref: t }) : null;
  }
);
Qg.displayName = Ur;
var ev = "SelectBubbleInput", jc = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = c.useRef(null), s = q(r, o), a = Rn(t);
    return c.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== t && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(i, t), i.dispatchEvent(f);
      }
    }, [a, t]), /* @__PURE__ */ p(
      $.select,
      {
        ...n,
        style: { ...bc, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
jc.displayName = ev;
function Wc(e) {
  return e === "" || e === void 0;
}
function Gc(e) {
  const t = fe(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(i);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Kc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = tv(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function tv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var nv = yc, qc = xc, rv = Sc, ov = Ec, sv = Rc, Xc = Tc, av = kc, iv = _c, Yc = Mc, Jc = Lc, cv = Fc, lv = Bc, Zc = Uc, Qc = Vc, el = zc;
const Fw = nv, $w = iv, Bw = rv, uv = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  qc,
  {
    ref: r,
    className: M(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p(ov, { asChild: !0, children: /* @__PURE__ */ p(Zr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
uv.displayName = qc.displayName;
const tl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Zc,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(ld, { className: "h-4 w-4" })
  }
));
tl.displayName = Zc.displayName;
const nl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Qc,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(Zr, { className: "h-4 w-4" })
  }
));
nl.displayName = Qc.displayName;
const dv = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ p(sv, { children: /* @__PURE__ */ W(
  Xc,
  {
    ref: o,
    className: M(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ p(tl, {}),
      /* @__PURE__ */ p(
        av,
        {
          className: M(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ p(nl, {})
    ]
  }
) }));
dv.displayName = Xc.displayName;
const fv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Yc,
  {
    ref: n,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
fv.displayName = Yc.displayName;
const pv = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  Jc,
  {
    ref: r,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(lv, { children: /* @__PURE__ */ p(Jr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p(cv, { children: t })
    ]
  }
));
pv.displayName = Jc.displayName;
const mv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  el,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
mv.displayName = el.displayName;
var _o = "Radio", [hv, rl] = he(_o), [gv, vv] = hv(_o), ol = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: l,
      form: u,
      ...d
    } = e, [f, v] = c.useState(null), b = q(t, (h) => v(h)), g = c.useRef(!1), m = f ? u || !!f.closest("form") : !0;
    return /* @__PURE__ */ W(gv, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ p(
        $.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": cl(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...d,
          ref: b,
          onClick: k(e.onClick, (h) => {
            o || l?.(), m && (g.current = h.isPropagationStopped(), g.current || h.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ p(
        il,
        {
          control: f,
          bubbles: !g.current,
          name: r,
          value: i,
          checked: o,
          required: s,
          disabled: a,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ol.displayName = _o;
var sl = "RadioIndicator", al = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = vv(sl, n);
    return /* @__PURE__ */ p(ye, { present: r || s.checked, children: /* @__PURE__ */ p(
      $.span,
      {
        "data-state": cl(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
al.displayName = sl;
var bv = "RadioBubbleInput", il = c.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = c.useRef(null), i = q(a, s), l = Rn(n), u = Tn(t);
    return c.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && b) {
        const g = new Event("click", { bubbles: r });
        b.call(d, n), d.dispatchEvent(g);
      }
    }, [l, n, r]), /* @__PURE__ */ p(
      $.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
il.displayName = bv;
function cl(e) {
  return e ? "checked" : "unchecked";
}
var yv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], jn = "RadioGroup", [wv] = he(jn, [
  Ct,
  rl
]), ll = Ct(), ul = rl(), [xv, Cv] = wv(jn), dl = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: l,
      dir: u,
      loop: d = !0,
      onValueChange: f,
      ...v
    } = e, b = ll(n), g = $t(u), [m, h] = Ce({
      prop: s,
      defaultProp: o ?? null,
      onChange: f,
      caller: jn
    });
    return /* @__PURE__ */ p(
      xv,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: m,
        onValueChange: h,
        children: /* @__PURE__ */ p(
          xo,
          {
            asChild: !0,
            ...b,
            orientation: l,
            dir: g,
            loop: d,
            children: /* @__PURE__ */ p(
              $.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: g,
                ...v,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
dl.displayName = jn;
var fl = "RadioGroupItem", pl = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = Cv(fl, n), a = s.disabled || r, i = ll(n), l = ul(n), u = c.useRef(null), d = q(t, u), f = s.value === o.value, v = c.useRef(!1);
    return c.useEffect(() => {
      const b = (m) => {
        yv.includes(m.key) && (v.current = !0);
      }, g = () => v.current = !1;
      return document.addEventListener("keydown", b), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", b), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ p(
      Co,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ p(
          ol,
          {
            disabled: a,
            required: s.required,
            checked: f,
            ...l,
            ...o,
            name: s.name,
            ref: d,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: k((b) => {
              b.key === "Enter" && b.preventDefault();
            }),
            onFocus: k(o.onFocus, () => {
              v.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
pl.displayName = fl;
var Sv = "RadioGroupIndicator", ml = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = ul(n);
    return /* @__PURE__ */ p(al, { ...o, ...r, ref: t });
  }
);
ml.displayName = Sv;
var hl = dl, gl = pl, Ev = ml;
const Rv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  hl,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: n
  }
));
Rv.displayName = hl.displayName;
const Tv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  gl,
  {
    ref: n,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(Ev, { className: "flex items-center justify-center", children: /* @__PURE__ */ p(js, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Tv.displayName = gl.displayName;
var Wn = "Switch", [Nv] = he(Wn), [Pv, Av] = Nv(Wn), vl = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l = "on",
      onCheckedChange: u,
      form: d,
      ...f
    } = e, [v, b] = c.useState(null), g = q(t, (x) => b(x)), m = c.useRef(!1), h = v ? d || !!v.closest("form") : !0, [y, w] = Ce({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: Wn
    });
    return /* @__PURE__ */ W(Pv, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ p(
        $.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": a,
          "data-state": xl(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: g,
          onClick: k(e.onClick, (x) => {
            w((C) => !C), h && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ p(
        wl,
        {
          control: v,
          bubbles: !m.current,
          name: r,
          value: l,
          checked: y,
          required: a,
          disabled: i,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
vl.displayName = Wn;
var bl = "SwitchThumb", yl = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Av(bl, n);
    return /* @__PURE__ */ p(
      $.span,
      {
        "data-state": xl(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
yl.displayName = bl;
var kv = "SwitchBubbleInput", wl = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = c.useRef(null), i = q(a, s), l = Rn(n), u = Tn(t);
    return c.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && b) {
        const g = new Event("click", { bubbles: r });
        b.call(d, n), d.dispatchEvent(g);
      }
    }, [l, n, r]), /* @__PURE__ */ p(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
wl.displayName = kv;
function xl(e) {
  return e ? "checked" : "unchecked";
}
var Cl = vl, Iv = yl;
const _v = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Cl,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ p(
      Iv,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
_v.displayName = Cl.displayName;
var Gn = "Tabs", [Ov] = he(Gn, [
  Ct
]), Sl = Ct(), [Mv, Oo] = Ov(Gn), El = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: l = "automatic",
      ...u
    } = e, d = $t(i), [f, v] = Ce({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Gn
    });
    return /* @__PURE__ */ p(
      Mv,
      {
        scope: n,
        baseId: ve(),
        value: f,
        onValueChange: v,
        orientation: a,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ p(
          $.div,
          {
            dir: d,
            "data-orientation": a,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
El.displayName = Gn;
var Rl = "TabsList", Tl = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Oo(Rl, n), a = Sl(n);
    return /* @__PURE__ */ p(
      xo,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p(
          $.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Tl.displayName = Rl;
var Nl = "TabsTrigger", Pl = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Oo(Nl, n), i = Sl(n), l = Il(a.baseId, r), u = _l(a.baseId, r), d = r === a.value;
    return /* @__PURE__ */ p(
      Co,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ p(
          $.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: k(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: k(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && a.onValueChange(r);
            }),
            onFocus: k(e.onFocus, () => {
              const f = a.activationMode !== "manual";
              !d && !o && f && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Pl.displayName = Nl;
var Al = "TabsContent", kl = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Oo(Al, n), l = Il(i.baseId, r), u = _l(i.baseId, r), d = r === i.value, f = c.useRef(d);
    return c.useEffect(() => {
      const v = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(v);
    }, []), /* @__PURE__ */ p(ye, { present: o || d, children: ({ present: v }) => /* @__PURE__ */ p(
      $.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !v,
        id: u,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: v && s
      }
    ) });
  }
);
kl.displayName = Al;
function Il(e, t) {
  return `${e}-trigger-${t}`;
}
function _l(e, t) {
  return `${e}-content-${t}`;
}
var Dv = El, Ol = Tl, Ml = Pl, Dl = kl;
const Uw = Dv, Lv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ol,
  {
    ref: n,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Lv.displayName = Ol.displayName;
const Fv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ml,
  {
    ref: n,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
Fv.displayName = Ml.displayName;
const $v = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Dl,
  {
    ref: n,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
$v.displayName = Dl.displayName;
var Mo = "ToastProvider", [Do, Bv, Uv] = _n("Toast"), [Ll] = he("Toast", [Uv]), [Vv, Kn] = Ll(Mo), Fl = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, l] = c.useState(null), [u, d] = c.useState(0), f = c.useRef(!1), v = c.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Mo}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ p(Do.Provider, { scope: t, children: /* @__PURE__ */ p(
    Vv,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: u,
      viewport: i,
      onViewportChange: l,
      onToastAdd: c.useCallback(() => d((b) => b + 1), []),
      onToastRemove: c.useCallback(() => d((b) => b - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: v,
      children: a
    }
  ) });
};
Fl.displayName = Mo;
var $l = "ToastViewport", Hv = ["F8"], Vr = "toast.viewportPause", Hr = "toast.viewportResume", Bl = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Hv,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = Kn($l, n), i = Bv(n), l = c.useRef(null), u = c.useRef(null), d = c.useRef(null), f = c.useRef(null), v = q(t, f, a.onViewportChange), b = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = a.toastCount > 0;
    c.useEffect(() => {
      const h = (y) => {
        r.length !== 0 && r.every((x) => y[x] || y.code === x) && f.current?.focus();
      };
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, [r]), c.useEffect(() => {
      const h = l.current, y = f.current;
      if (g && h && y) {
        const w = () => {
          if (!a.isClosePausedRef.current) {
            const P = new CustomEvent(Vr);
            y.dispatchEvent(P), a.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (a.isClosePausedRef.current) {
            const P = new CustomEvent(Hr);
            y.dispatchEvent(P), a.isClosePausedRef.current = !1;
          }
        }, C = (P) => {
          !h.contains(P.relatedTarget) && x();
        }, E = () => {
          h.contains(document.activeElement) || x();
        };
        return h.addEventListener("focusin", w), h.addEventListener("focusout", C), h.addEventListener("pointermove", w), h.addEventListener("pointerleave", E), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          h.removeEventListener("focusin", w), h.removeEventListener("focusout", C), h.removeEventListener("pointermove", w), h.removeEventListener("pointerleave", E), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [g, a.isClosePausedRef]);
    const m = c.useCallback(
      ({ tabbingDirection: h }) => {
        const w = i().map((x) => {
          const C = x.ref.current, E = [C, ...tb(C)];
          return h === "forwards" ? E : E.reverse();
        });
        return (h === "forwards" ? w.reverse() : w).flat();
      },
      [i]
    );
    return c.useEffect(() => {
      const h = f.current;
      if (h) {
        const y = (w) => {
          const x = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !x) {
            const E = document.activeElement, P = w.shiftKey;
            if (w.target === h && P) {
              u.current?.focus();
              return;
            }
            const F = m({ tabbingDirection: P ? "backwards" : "forwards" }), B = F.findIndex((z) => z === E);
            vr(F.slice(B + 1)) ? w.preventDefault() : P ? u.current?.focus() : d.current?.focus();
          }
        };
        return h.addEventListener("keydown", y), () => h.removeEventListener("keydown", y);
      }
    }, [i, m]), /* @__PURE__ */ W(
      kf,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", b),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ p(
            zr,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const h = m({
                  tabbingDirection: "forwards"
                });
                vr(h);
              }
            }
          ),
          /* @__PURE__ */ p(Do.Slot, { scope: n, children: /* @__PURE__ */ p($.ol, { tabIndex: -1, ...s, ref: v }) }),
          g && /* @__PURE__ */ p(
            zr,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const h = m({
                  tabbingDirection: "backwards"
                });
                vr(h);
              }
            }
          )
        ]
      }
    );
  }
);
Bl.displayName = $l;
var Ul = "ToastFocusProxy", zr = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = Kn(Ul, n);
    return /* @__PURE__ */ p(
      Un,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          const i = a.relatedTarget;
          !s.viewport?.contains(i) && r();
        }
      }
    );
  }
);
zr.displayName = Ul;
var jt = "Toast", zv = "toast.swipeStart", jv = "toast.swipeMove", Wv = "toast.swipeCancel", Gv = "toast.swipeEnd", Vl = c.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, l] = Ce({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: jt
    });
    return /* @__PURE__ */ p(ye, { present: n || i, children: /* @__PURE__ */ p(
      Xv,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => l(!1),
        onPause: fe(e.onPause),
        onResume: fe(e.onResume),
        onSwipeStart: k(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: k(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: k(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: k(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1);
        })
      }
    ) });
  }
);
Vl.displayName = jt;
var [Kv, qv] = Ll(jt, {
  onClose() {
  }
}), Xv = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: s,
      onClose: a,
      onEscapeKeyDown: i,
      onPause: l,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: f,
      onSwipeCancel: v,
      onSwipeEnd: b,
      ...g
    } = e, m = Kn(jt, n), [h, y] = c.useState(null), w = q(t, (A) => y(A)), x = c.useRef(null), C = c.useRef(null), E = o || m.duration, P = c.useRef(0), T = c.useRef(E), N = c.useRef(0), { onToastAdd: F, onToastRemove: B } = m, z = fe(() => {
      h?.contains(document.activeElement) && m.viewport?.focus(), a();
    }), H = c.useCallback(
      (A) => {
        !A || A === 1 / 0 || (window.clearTimeout(N.current), P.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(z, A));
      },
      [z]
    );
    c.useEffect(() => {
      const A = m.viewport;
      if (A) {
        const V = () => {
          H(T.current), u?.();
        }, O = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - P.current;
          T.current = T.current - U, window.clearTimeout(N.current), l?.();
        };
        return A.addEventListener(Vr, O), A.addEventListener(Hr, V), () => {
          A.removeEventListener(Vr, O), A.removeEventListener(Hr, V);
        };
      }
    }, [m.viewport, E, l, u, H]), c.useEffect(() => {
      s && !m.isClosePausedRef.current && H(E);
    }, [s, E, m.isClosePausedRef, H]), c.useEffect(() => (F(), () => B()), [F, B]);
    const j = c.useMemo(() => h ? ql(h) : null, [h]);
    return m.viewport ? /* @__PURE__ */ W(Fe, { children: [
      j && /* @__PURE__ */ p(
        Yv,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: j
        }
      ),
      /* @__PURE__ */ p(Kv, { scope: n, onClose: z, children: Lt.createPortal(
        /* @__PURE__ */ p(Do.ItemSlot, { scope: n, children: /* @__PURE__ */ p(
          Af,
          {
            asChild: !0,
            onEscapeKeyDown: k(i, () => {
              m.isFocusedToastEscapeKeyDownRef.current || z(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ p(
              $.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: k(e.onKeyDown, (A) => {
                  A.key === "Escape" && (i?.(A.nativeEvent), A.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, z()));
                }),
                onPointerDown: k(e.onPointerDown, (A) => {
                  A.button === 0 && (x.current = { x: A.clientX, y: A.clientY });
                }),
                onPointerMove: k(e.onPointerMove, (A) => {
                  if (!x.current) return;
                  const V = A.clientX - x.current.x, O = A.clientY - x.current.y, U = !!C.current, R = ["left", "right"].includes(m.swipeDirection), _ = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, Q = R ? _(0, V) : 0, Z = R ? 0 : _(0, O), ne = A.pointerType === "touch" ? 10 : 2, X = { x: Q, y: Z }, Y = { originalEvent: A, delta: X };
                  U ? (C.current = X, rn(jv, f, Y, {
                    discrete: !1
                  })) : xs(X, m.swipeDirection, ne) ? (C.current = X, rn(zv, d, Y, {
                    discrete: !1
                  }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(V) > ne || Math.abs(O) > ne) && (x.current = null);
                }),
                onPointerUp: k(e.onPointerUp, (A) => {
                  const V = C.current, O = A.target;
                  if (O.hasPointerCapture(A.pointerId) && O.releasePointerCapture(A.pointerId), C.current = null, x.current = null, V) {
                    const U = A.currentTarget, R = { originalEvent: A, delta: V };
                    xs(V, m.swipeDirection, m.swipeThreshold) ? rn(Gv, b, R, {
                      discrete: !0
                    }) : rn(
                      Wv,
                      v,
                      R,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", (_) => _.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        m.viewport
      ) })
    ] }) : null;
  }
), Yv = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Kn(jt, t), [s, a] = c.useState(!1), [i, l] = c.useState(!1);
  return Qv(() => a(!0)), c.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), i ? null : /* @__PURE__ */ p(Ft, { asChild: !0, children: /* @__PURE__ */ p(Un, { ...r, children: s && /* @__PURE__ */ W(Fe, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, Jv = "ToastTitle", Hl = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p($.div, { ...r, ref: t });
  }
);
Hl.displayName = Jv;
var Zv = "ToastDescription", zl = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p($.div, { ...r, ref: t });
  }
);
zl.displayName = Zv;
var jl = "ToastAction", Wl = c.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ p(Kl, { altText: n, asChild: !0, children: /* @__PURE__ */ p(Lo, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${jl}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Wl.displayName = jl;
var Gl = "ToastClose", Lo = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = qv(Gl, n);
    return /* @__PURE__ */ p(Kl, { asChild: !0, children: /* @__PURE__ */ p(
      $.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, o.onClose)
      }
    ) });
  }
);
Lo.displayName = Gl;
var Kl = c.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ p(
    $.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function ql(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), eb(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...ql(r));
    }
  }), t;
}
function rn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? to(o, s) : o.dispatchEvent(s);
}
var xs = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function Qv(e = () => {
}) {
  const t = fe(e);
  ce(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function eb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function tb(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function vr(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var nb = Fl, Xl = Bl, Yl = Vl, Jl = Hl, Zl = zl, Ql = Wl, eu = Lo;
const rb = nb, tu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Xl,
  {
    ref: n,
    className: M(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
tu.displayName = Xl.displayName;
const ob = En(
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
), nu = c.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ p(
  Yl,
  {
    ref: r,
    className: M(ob({ variant: t }), e),
    ...n
  }
));
nu.displayName = Yl.displayName;
const sb = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ql,
  {
    ref: n,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
sb.displayName = Ql.displayName;
const ru = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  eu,
  {
    ref: n,
    className: M(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ p(Ws, { className: "h-4 w-4" })
  }
));
ru.displayName = eu.displayName;
const ou = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Jl,
  {
    ref: n,
    className: M("text-sm font-semibold [&+div]:text-xs", e),
    ...t
  }
));
ou.displayName = Jl.displayName;
const su = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Zl,
  {
    ref: n,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
su.displayName = Zl.displayName;
const ab = 1, ib = 1e6;
let br = 0;
function cb() {
  return br = (br + 1) % Number.MAX_SAFE_INTEGER, br.toString();
}
const yr = /* @__PURE__ */ new Map(), Cs = (e) => {
  if (yr.has(e))
    return;
  const t = setTimeout(() => {
    yr.delete(e), kt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, ib);
  yr.set(e, t);
}, lb = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, ab)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? Cs(n) : e.toasts.forEach((r) => {
        Cs(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, ln = [];
let un = { toasts: [] };
function kt(e) {
  un = lb(un, e), ln.forEach((t) => {
    t(un);
  });
}
function ub({ ...e }) {
  const t = cb(), n = (o) => kt({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => kt({ type: "DISMISS_TOAST", toastId: t });
  return kt({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function db() {
  const [e, t] = c.useState(un);
  return c.useEffect(() => (ln.push(t), () => {
    const n = ln.indexOf(t);
    n > -1 && ln.splice(n, 1);
  }), [e]), {
    ...e,
    toast: ub,
    dismiss: (n) => kt({ type: "DISMISS_TOAST", toastId: n })
  };
}
function Vw() {
  const { toasts: e } = db();
  return /* @__PURE__ */ W(rb, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...s }) {
      return /* @__PURE__ */ W(nu, { ...s, children: [
        /* @__PURE__ */ W("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ p(ou, { children: n }),
          r && /* @__PURE__ */ p(su, { children: r })
        ] }),
        o,
        /* @__PURE__ */ p(ru, {})
      ] }, t);
    }),
    /* @__PURE__ */ p(tu, {})
  ] });
}
var [qn] = he("Tooltip", [
  xt
]), Xn = xt(), au = "TooltipProvider", fb = 700, jr = "tooltip.open", [pb, Fo] = qn(au), iu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = fb,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = c.useRef(!0), i = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ p(
    pb,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(l.current), a.current = !1;
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: c.useCallback((u) => {
        i.current = u;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
iu.displayName = au;
var Dt = "Tooltip", [mb, Yn] = qn(Dt), cu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, l = Fo(Dt, e.__scopeTooltip), u = Xn(t), [d, f] = c.useState(null), v = ve(), b = c.useRef(0), g = a ?? l.disableHoverableContent, m = i ?? l.delayDuration, h = c.useRef(!1), [y, w] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(jr))) : l.onClose(), s?.(T);
    },
    caller: Dt
  }), x = c.useMemo(() => y ? h.current ? "delayed-open" : "instant-open" : "closed", [y]), C = c.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, h.current = !1, w(!0);
  }, [w]), E = c.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, w(!1);
  }, [w]), P = c.useCallback(() => {
    window.clearTimeout(b.current), b.current = window.setTimeout(() => {
      h.current = !0, w(!0), b.current = 0;
    }, m);
  }, [m, w]);
  return c.useEffect(() => () => {
    b.current && (window.clearTimeout(b.current), b.current = 0);
  }, []), /* @__PURE__ */ p(Fn, { ...u, children: /* @__PURE__ */ p(
    mb,
    {
      scope: t,
      contentId: v,
      open: y,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : C();
      }, [l.isOpenDelayedRef, P, C]),
      onTriggerLeave: c.useCallback(() => {
        g ? E() : (window.clearTimeout(b.current), b.current = 0);
      }, [E, g]),
      onOpen: C,
      onClose: E,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
cu.displayName = Dt;
var Wr = "TooltipTrigger", lu = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Yn(Wr, n), s = Fo(Wr, n), a = Xn(n), i = c.useRef(null), l = q(t, i, o.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p(bo, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      $.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: k(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: k(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: k(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: k(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: k(e.onBlur, o.onClose),
        onClick: k(e.onClick, o.onClose)
      }
    ) });
  }
);
lu.displayName = Wr;
var hb = "TooltipPortal", [Hw, gb] = qn(hb, {
  forceMount: void 0
}), mt = "TooltipContent", uu = c.forwardRef(
  (e, t) => {
    const n = gb(mt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = Yn(mt, e.__scopeTooltip);
    return /* @__PURE__ */ p(ye, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ p(du, { side: o, ...s, ref: t }) : /* @__PURE__ */ p(vb, { side: o, ...s, ref: t }) });
  }
), vb = c.forwardRef((e, t) => {
  const n = Yn(mt, e.__scopeTooltip), r = Fo(mt, e.__scopeTooltip), o = c.useRef(null), s = q(t, o), [a, i] = c.useState(null), { trigger: l, onClose: u } = n, d = o.current, { onPointerInTransitChange: f } = r, v = c.useCallback(() => {
    i(null), f(!1);
  }, [f]), b = c.useCallback(
    (g, m) => {
      const h = g.currentTarget, y = { x: g.clientX, y: g.clientY }, w = Cb(y, h.getBoundingClientRect()), x = Sb(y, w), C = Eb(m.getBoundingClientRect()), E = Tb([...x, ...C]);
      i(E), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => v(), [v]), c.useEffect(() => {
    if (l && d) {
      const g = (h) => b(h, d), m = (h) => b(h, l);
      return l.addEventListener("pointerleave", g), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, b, v]), c.useEffect(() => {
    if (a) {
      const g = (m) => {
        const h = m.target, y = { x: m.clientX, y: m.clientY }, w = l?.contains(h) || d?.contains(h), x = !Rb(y, a);
        w ? v() : x && (v(), u());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, d, a, u, v]), /* @__PURE__ */ p(du, { ...e, ref: s });
}), [bb, yb] = qn(Dt, { isInside: !1 }), wb = /* @__PURE__ */ Gu("TooltipContent"), du = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, l = Yn(mt, n), u = Xn(n), { onClose: d } = l;
    return c.useEffect(() => (document.addEventListener(jr, d), () => document.removeEventListener(jr, d)), [d]), c.useEffect(() => {
      if (l.trigger) {
        const f = (v) => {
          v.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ p(
      bt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ W(
          yo,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p(wb, { children: r }),
              /* @__PURE__ */ p(bb, { scope: n, isInside: !0, children: /* @__PURE__ */ p(Dg, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
uu.displayName = mt;
var fu = "TooltipArrow", xb = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Xn(n);
    return yb(
      fu,
      n
    ).isInside ? null : /* @__PURE__ */ p(wo, { ...o, ...r, ref: t });
  }
);
xb.displayName = fu;
function Cb(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Sb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function Eb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Rb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], l = t[a], u = i.x, d = i.y, f = l.x, v = l.y;
    d > r != v > r && n < (f - u) * (r - d) / (v - d) + u && (o = !o);
  }
  return o;
}
function Tb(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Nb(t);
}
function Nb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Pb = iu, Ab = cu, kb = lu, pu = uu;
const zw = Pb, jw = Ab, Ww = kb, Ib = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p(
  pu,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Ib.displayName = pu.displayName;
const _b = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ p(
  "table",
  {
    ref: n,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
_b.displayName = "Table";
const Ob = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p("thead", { ref: n, className: M("[&_tr]:border-b", e), ...t }));
Ob.displayName = "TableHeader";
const Mb = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "tbody",
  {
    ref: n,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Mb.displayName = "TableBody";
const Db = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "tfoot",
  {
    ref: n,
    className: M(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
Db.displayName = "TableFooter";
const Lb = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "tr",
  {
    ref: n,
    className: M(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Lb.displayName = "TableRow";
const Fb = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "th",
  {
    ref: n,
    className: M(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Fb.displayName = "TableHead";
const $b = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "td",
  {
    ref: n,
    className: M(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
$b.displayName = "TableCell";
const Bb = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "caption",
  {
    ref: n,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Bb.displayName = "TableCaption";
const Ub = c.forwardRef(
  ({
    className: e,
    title: t,
    subtitle: n,
    logo: r,
    items: o = [],
    groups: s = [],
    isCollapsed: a = !1,
    onToggleCollapse: i,
    width: l = 260,
    collapsedWidth: u = 80,
    showCollapseButton: d = !0,
    onLogout: f,
    ...v
  }, b) => {
    const [g, m] = c.useState(!1), h = i ? a : g, y = i || (() => m(!g)), w = (x) => x.map((C) => /* @__PURE__ */ W(
      "div",
      {
        onClick: C.onClick,
        className: M(
          "relative flex items-center cursor-pointer transition-all my-0.5 font-medium text-muted-foreground",
          h ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
          C.active && "bg-primary/5 text-primary font-semibold",
          "hover:bg-accent hover:text-primary",
          C.active && "hover:bg-primary/10"
        ),
        children: [
          C.active && /* @__PURE__ */ p("div", { className: "absolute left-0 top-0 bottom-0 w-[3px] bg-primary" }),
          C.icon && /* @__PURE__ */ p("div", { className: M("flex items-center justify-center w-5 h-5", !h && "mr-3"), children: C.icon }),
          !h && /* @__PURE__ */ p("span", { className: "text-sm whitespace-nowrap overflow-hidden text-ellipsis", children: C.label })
        ]
      },
      C.key
    ));
    return /* @__PURE__ */ W(
      "aside",
      {
        ref: b,
        className: M("fixed left-0 top-0 h-screen bg-card flex flex-col z-40 transition-all duration-300 overflow-visible shadow-sm", e),
        style: {
          width: h ? `${u}px` : `${l}px`
        },
        ...v,
        children: [
          (t || n || r) && /* @__PURE__ */ W(
            "div",
            {
              className: M(
                "flex items-center min-h-[72px] bg-card mb-1",
                h ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5"
              ),
              children: [
                r,
                !h && /* @__PURE__ */ W("div", { className: "flex-1 overflow-hidden", children: [
                  t && /* @__PURE__ */ p("div", { className: "font-bold text-base text-foreground leading-tight tracking-tight", children: t }),
                  n && /* @__PURE__ */ p("div", { className: "text-xs text-secondary font-medium leading-tight mt-1", children: n })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ W("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4", children: [
            o.length > 0 && w(o),
            s.map((x) => /* @__PURE__ */ W("div", { className: "mb-6", children: [
              !h && /* @__PURE__ */ p("div", { className: "px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1", children: x.label }),
              w(x.items)
            ] }, x.label))
          ] }),
          f && /* @__PURE__ */ p("div", { className: M("mt-auto", h ? "p-2" : "p-4"), children: /* @__PURE__ */ W(
            "div",
            {
              onClick: f,
              className: M(
                "flex items-center cursor-pointer rounded-md p-3 text-destructive text-sm font-medium transition-colors hover:bg-destructive/10",
                h ? "justify-center" : "justify-start gap-3"
              ),
              children: [
                /* @__PURE__ */ p(md, { className: "h-4 w-4" }),
                !h && /* @__PURE__ */ p("span", { children: "Sair" })
              ]
            }
          ) }),
          d && /* @__PURE__ */ p(
            "button",
            {
              onClick: y,
              className: "absolute bottom-4 -right-3.5 bg-card border border-border rounded-sm p-1.5 cursor-pointer flex items-center justify-center transition-all w-7 h-7 shadow-sm hover:bg-accent hover:shadow-md active:scale-95",
              children: /* @__PURE__ */ p("div", { className: "w-4 h-4 text-muted-foreground flex items-center justify-center", children: h ? /* @__PURE__ */ p(Qr, { className: "w-4 h-4" }) : /* @__PURE__ */ p(ad, { className: "w-4 h-4" }) })
            }
          )
        ]
      }
    );
  }
);
Ub.displayName = "Sidebar";
const Vb = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: M("flex items-center border-b p-4", e), ...t })
);
Vb.displayName = "SidebarHeader";
const Hb = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: M("flex-1 overflow-y-auto p-4", e), ...t })
);
Hb.displayName = "SidebarContent";
const zb = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: M("border-t p-4", e), ...t })
);
zb.displayName = "SidebarFooter";
const jb = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p("nav", { ref: n, className: M("flex flex-col space-y-1", e), ...t })
);
jb.displayName = "SidebarNav";
const Wb = c.forwardRef(
  ({ className: e, active: t, icon: n, children: r, ...o }, s) => /* @__PURE__ */ W(
    "a",
    {
      ref: s,
      className: M(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        t && "bg-accent text-accent-foreground",
        e
      ),
      ...o,
      children: [
        n && /* @__PURE__ */ p("span", { className: "flex-shrink-0", children: n }),
        /* @__PURE__ */ p("span", { className: "flex-1", children: r })
      ]
    }
  )
);
Wb.displayName = "SidebarNavItem";
const mu = c.forwardRef(
  ({ className: e, items: t, separator: n, ...r }, o) => t.length === 0 ? null : /* @__PURE__ */ p(
    "nav",
    {
      ref: o,
      className: M("flex items-center gap-2 text-sm", e),
      "aria-label": "Breadcrumb",
      ...r,
      children: t.map((s, a) => /* @__PURE__ */ W(c.Fragment, { children: [
        /* @__PURE__ */ p(
          "span",
          {
            className: M(
              "font-medium transition-colors",
              a === 0 && "text-primary",
              a === 1 && "text-secondary",
              a === t.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground",
              s.onClick && "cursor-pointer hover:text-primary"
            ),
            onClick: s.onClick,
            children: s.label
          }
        ),
        a < t.length - 1 && /* @__PURE__ */ p("span", { className: "text-border flex items-center select-none", children: n || /* @__PURE__ */ p(Qr, { className: "h-3.5 w-3.5" }) })
      ] }, a))
    }
  )
);
mu.displayName = "Breadcrumb";
const Gb = c.forwardRef(
  ({
    className: e,
    isCollapsed: t = !1,
    breadcrumbs: n = [],
    user: r,
    onNotificationClick: o,
    hasNotifications: s = !1,
    userMenuTrigger: a,
    actions: i,
    ...l
  }, u) => /* @__PURE__ */ W(
    "nav",
    {
      ref: u,
      className: M(
        "fixed top-0 right-0 h-[60px] bg-card flex items-center justify-between px-6 transition-all duration-300 z-[100] shadow-sm",
        e
      ),
      style: {
        left: t ? "80px" : "260px"
      },
      ...l,
      children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-4", children: n && n.length > 0 && /* @__PURE__ */ p(mu, { items: n }) }),
        /* @__PURE__ */ W("div", { className: "flex items-center gap-4", children: [
          i,
          o && /* @__PURE__ */ W(
            "button",
            {
              onClick: o,
              className: "relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95",
              children: [
                /* @__PURE__ */ p(nd, { className: "h-5 w-5" }),
                s && /* @__PURE__ */ p("span", { className: "absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" })
              ]
            }
          ),
          a,
          r && !a && /* @__PURE__ */ W("button", { className: "flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]", children: [
            /* @__PURE__ */ p("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-xs font-semibold overflow-hidden border-2 border-background", children: r.avatar || r.name.charAt(0).toUpperCase() }),
            /* @__PURE__ */ W("div", { className: "hidden md:flex flex-col items-start", children: [
              /* @__PURE__ */ p("span", { className: "text-sm font-semibold text-foreground leading-tight", children: r.name }),
              /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground leading-tight font-medium", children: r.role })
            ] }),
            /* @__PURE__ */ p(Zr, { className: "h-4 w-4 text-muted-foreground" })
          ] })
        ] })
      ]
    }
  )
);
Gb.displayName = "Navbar";
const Kb = ({ isVisible: e, className: t }) => e ? /* @__PURE__ */ p(
  "div",
  {
    className: M(
      "fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]",
      t
    ),
    children: /* @__PURE__ */ p("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ p("div", { className: "relative w-[200px] h-[200px] rounded-full border-[12px] border-border border-t-primary animate-spin" }) })
  }
) : null;
Kb.displayName = "GlobalLoader";
const hu = c.createContext(null), Gw = () => {
  const e = c.useContext(hu);
  if (!e)
    throw new Error("useGlobalLoader must be used within GlobalLoaderProvider");
  return e;
}, Kw = ({ children: e }) => {
  const [t, n] = c.useState(0), r = c.useCallback(() => {
    n((a) => a + 1);
  }, []), o = c.useCallback(() => {
    n((a) => Math.max(0, a - 1));
  }, []), s = t > 0;
  return /* @__PURE__ */ p(hu.Provider, { value: { isLoading: s, showLoader: r, hideLoader: o }, children: e });
};
function gu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qb } = Object.prototype, { getPrototypeOf: $o } = Object, { iterator: Jn, toStringTag: vu } = Symbol, Zn = /* @__PURE__ */ ((e) => (t) => {
  const n = qb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ne = (e) => (e = e.toLowerCase(), (t) => Zn(t) === e), Qn = (e) => (t) => typeof t === e, { isArray: Et } = Array, ht = Qn("undefined");
function Wt(e) {
  return e !== null && !ht(e) && e.constructor !== null && !ht(e.constructor) && pe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bu = Ne("ArrayBuffer");
function Xb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bu(e.buffer), t;
}
const Yb = Qn("string"), pe = Qn("function"), yu = Qn("number"), Gt = (e) => e !== null && typeof e == "object", Jb = (e) => e === !0 || e === !1, dn = (e) => {
  if (Zn(e) !== "object")
    return !1;
  const t = $o(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(vu in e) && !(Jn in e);
}, Zb = (e) => {
  if (!Gt(e) || Wt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Qb = Ne("Date"), ey = Ne("File"), ty = Ne("Blob"), ny = Ne("FileList"), ry = (e) => Gt(e) && pe(e.pipe), oy = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pe(e.append) && ((t = Zn(e)) === "formdata" || // detect form-data instance
  t === "object" && pe(e.toString) && e.toString() === "[object FormData]"));
}, sy = Ne("URLSearchParams"), [ay, iy, cy, ly] = ["ReadableStream", "Request", "Response", "Headers"].map(Ne), uy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Et(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Wt(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let i;
    for (r = 0; r < a; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function wu(e, t) {
  if (Wt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Ze = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xu = (e) => !ht(e) && e !== Ze;
function Gr() {
  const { caseless: e, skipUndefined: t } = xu(this) && this || {}, n = {}, r = (o, s) => {
    const a = e && wu(n, s) || s;
    dn(n[a]) && dn(o) ? n[a] = Gr(n[a], o) : dn(o) ? n[a] = Gr({}, o) : Et(o) ? n[a] = o.slice() : (!t || !ht(o)) && (n[a] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Kt(arguments[o], r);
  return n;
}
const dy = (e, t, n, { allOwnKeys: r } = {}) => (Kt(t, (o, s) => {
  n && pe(o) ? e[s] = gu(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), fy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), py = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, my = (e, t, n, r) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && $o(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, hy = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, gy = (e) => {
  if (!e) return null;
  if (Et(e)) return e;
  let t = e.length;
  if (!yu(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, vy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $o(Uint8Array)), by = (e, t) => {
  const r = (e && e[Jn]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, yy = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, wy = Ne("HTMLFormElement"), xy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ss = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Cy = Ne("RegExp"), Cu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Kt(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, Sy = (e) => {
  Cu(e, (t, n) => {
    if (pe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (pe(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ey = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Et(e) ? r(e) : r(String(e).split(t)), n;
}, Ry = () => {
}, Ty = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ny(e) {
  return !!(e && pe(e.append) && e[vu] === "FormData" && e[Jn]);
}
const Py = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Gt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Wt(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Et(r) ? [] : {};
        return Kt(r, (a, i) => {
          const l = n(a, o + 1);
          !ht(l) && (s[i] = l);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ay = Ne("AsyncFunction"), ky = (e) => e && (Gt(e) || pe(e)) && pe(e.then) && pe(e.catch), Su = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ze.addEventListener("message", ({ source: o, data: s }) => {
  o === Ze && s === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Ze.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  pe(Ze.postMessage)
), Iy = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ze) : typeof process < "u" && process.nextTick || Su, _y = (e) => e != null && pe(e[Jn]), S = {
  isArray: Et,
  isArrayBuffer: bu,
  isBuffer: Wt,
  isFormData: oy,
  isArrayBufferView: Xb,
  isString: Yb,
  isNumber: yu,
  isBoolean: Jb,
  isObject: Gt,
  isPlainObject: dn,
  isEmptyObject: Zb,
  isReadableStream: ay,
  isRequest: iy,
  isResponse: cy,
  isHeaders: ly,
  isUndefined: ht,
  isDate: Qb,
  isFile: ey,
  isBlob: ty,
  isRegExp: Cy,
  isFunction: pe,
  isStream: ry,
  isURLSearchParams: sy,
  isTypedArray: vy,
  isFileList: ny,
  forEach: Kt,
  merge: Gr,
  extend: dy,
  trim: uy,
  stripBOM: fy,
  inherits: py,
  toFlatObject: my,
  kindOf: Zn,
  kindOfTest: Ne,
  endsWith: hy,
  toArray: gy,
  forEachEntry: by,
  matchAll: yy,
  isHTMLForm: wy,
  hasOwnProperty: Ss,
  hasOwnProp: Ss,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cu,
  freezeMethods: Sy,
  toObjectSet: Ey,
  toCamelCase: xy,
  noop: Ry,
  toFiniteNumber: Ty,
  findKey: wu,
  global: Ze,
  isContextDefined: xu,
  isSpecCompliantForm: Ny,
  toJSONObject: Py,
  isAsyncFn: Ay,
  isThenable: ky,
  setImmediate: Su,
  asap: Iy,
  isIterable: _y
};
function G(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
S.inherits(G, Error, {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Eu = G.prototype, Ru = {};
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
  Ru[e] = { value: e };
});
Object.defineProperties(G, Ru);
Object.defineProperty(Eu, "isAxiosError", { value: !0 });
G.from = (e, t, n, r, o, s) => {
  const a = Object.create(Eu);
  S.toFlatObject(e, a, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const i = e && e.message ? e.message : "Error", l = t == null && e ? e.code : t;
  return G.call(a, i, l, n, r, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", s && Object.assign(a, s), a;
};
const Oy = null;
function Kr(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Tu(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Es(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Tu(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function My(e) {
  return S.isArray(e) && !e.some(Kr);
}
const Dy = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function er(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !S.isUndefined(h[m]);
  });
  const r = n.metaTokens, o = n.visitor || d, s = n.dots, a = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (S.isDate(g))
      return g.toISOString();
    if (S.isBoolean(g))
      return g.toString();
    if (!l && S.isBlob(g))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(g) || S.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, m, h) {
    let y = g;
    if (g && !h && typeof g == "object") {
      if (S.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (S.isArray(g) && My(g) || (S.isFileList(g) || S.endsWith(m, "[]")) && (y = S.toArray(g)))
        return m = Tu(m), y.forEach(function(x, C) {
          !(S.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Es([m], C, s) : a === null ? m : m + "[]",
            u(x)
          );
        }), !1;
    }
    return Kr(g) ? !0 : (t.append(Es(h, m, s), u(g)), !1);
  }
  const f = [], v = Object.assign(Dy, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Kr
  });
  function b(g, m) {
    if (!S.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), S.forEach(g, function(y, w) {
        (!(S.isUndefined(y) || y === null) && o.call(
          t,
          y,
          S.isString(w) ? w.trim() : w,
          m,
          v
        )) === !0 && b(y, m ? m.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Rs(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Bo(e, t) {
  this._pairs = [], e && er(e, this, t);
}
const Nu = Bo.prototype;
Nu.append = function(t, n) {
  this._pairs.push([t, n]);
};
Nu.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Rs);
  } : Rs;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Ly(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Pu(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ly;
  S.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = S.isURLSearchParams(t) ? t.toString() : new Bo(t, n).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Ts {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    S.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Au = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Fy = typeof URLSearchParams < "u" ? URLSearchParams : Bo, $y = typeof FormData < "u" ? FormData : null, By = typeof Blob < "u" ? Blob : null, Uy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Fy,
    FormData: $y,
    Blob: By
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Uo = typeof window < "u" && typeof document < "u", qr = typeof navigator == "object" && navigator || void 0, Vy = Uo && (!qr || ["ReactNative", "NativeScript", "NS"].indexOf(qr.product) < 0), Hy = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zy = Uo && window.location.href || "http://localhost", jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Uo,
  hasStandardBrowserEnv: Vy,
  hasStandardBrowserWebWorkerEnv: Hy,
  navigator: qr,
  origin: zy
}, Symbol.toStringTag, { value: "Module" })), ue = {
  ...jy,
  ...Uy
};
function Wy(e, t) {
  return er(e, new ue.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return ue.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Gy(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ky(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function ku(e) {
  function t(n, r, o, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = s >= n.length;
    return a = !a && S.isArray(o) ? o.length : a, l ? (S.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !i) : ((!o[a] || !S.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && S.isArray(o[a]) && (o[a] = Ky(o[a])), !i);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, o) => {
      t(Gy(r), o, n, 0);
    }), n;
  }
  return null;
}
function qy(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const qt = {
  transitional: Au,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = S.isObject(t);
    if (s && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return o ? JSON.stringify(ku(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Wy(t, this.formSerializer).toString();
      if ((i = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return er(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), qy(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || qt.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (S.isResponse(t) || S.isReadableStream(t))
      return t;
    if (t && S.isString(t) && (r && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? G.from(i, G.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: ue.classes.FormData,
    Blob: ue.classes.Blob
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
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  qt.headers[e] = {};
});
const Xy = S.toObjectSet([
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
]), Yy = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && Xy[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ns = Symbol("internals");
function Nt(e) {
  return e && String(e).trim().toLowerCase();
}
function fn(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(fn) : String(e);
}
function Jy(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Zy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function wr(e, t, n, r, o) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function Qy(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ew(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, a) {
        return this[r].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
let me = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(i, l, u) {
      const d = Nt(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = S.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || l] = fn(i));
    }
    const a = (i, l) => S.forEach(i, (u, d) => s(u, d, l));
    if (S.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (S.isString(t) && (t = t.trim()) && !Zy(t))
      a(Yy(t), n);
    else if (S.isObject(t) && S.isIterable(t)) {
      let i = {}, l, u;
      for (const d of t) {
        if (!S.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        i[u = d[0]] = (l = i[u]) ? S.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      a(i, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Nt(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Jy(o);
        if (S.isFunction(n))
          return n.call(this, o, r);
        if (S.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Nt(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || wr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = Nt(a), a) {
        const i = S.findKey(r, a);
        i && (!n || wr(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return S.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || wr(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (o, s) => {
      const a = S.findKey(r, s);
      if (a) {
        n[a] = fn(o), delete n[s];
        return;
      }
      const i = t ? Qy(s) : String(s).trim();
      i !== s && delete n[s], n[i] = fn(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && S.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Ns] = this[Ns] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = Nt(a);
      r[i] || (ew(o, a), r[i] = !0);
    }
    return S.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(me.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(me);
function xr(e, t) {
  const n = this || qt, r = t || n, o = me.from(r.headers);
  let s = r.data;
  return S.forEach(e, function(i) {
    s = i.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Iu(e) {
  return !!(e && e.__CANCEL__);
}
function Rt(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError";
}
S.inherits(Rt, G, {
  __CANCEL__: !0
});
function _u(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new G(
    "Request failed with status code " + n.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function tw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nw(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), d = r[s];
    a || (a = u), n[o] = l, r[o] = u;
    let f = s, v = 0;
    for (; f !== o; )
      v += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const b = d && u - d;
    return b ? Math.round(v * 1e3 / b) : void 0;
  };
}
function rw(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const a = (u, d = Date.now()) => {
    n = d, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? a(u, d) : (o = u, s || (s = setTimeout(() => {
      s = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const Cn = (e, t, n = 3) => {
  let r = 0;
  const o = nw(50, 250);
  return rw((s) => {
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, l = a - r, u = o(l), d = a <= i;
    r = a;
    const f = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && d ? (i - a) / u : void 0,
      event: s,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Ps = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, As = (e) => (...t) => S.asap(() => e(...t)), ow = ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ue.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ue.origin),
  ue.navigator && /(msie|trident)/i.test(ue.navigator.userAgent)
) : () => !0, sw = ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      S.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), S.isString(r) && i.push(`path=${r}`), S.isString(o) && i.push(`domain=${o}`), s === !0 && i.push("secure"), S.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function aw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function iw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ou(e, t, n) {
  let r = !aw(t);
  return e && (r || n == !1) ? iw(e, t) : t;
}
const ks = (e) => e instanceof me ? { ...e } : e;
function st(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, v) {
    return S.isPlainObject(u) && S.isPlainObject(d) ? S.merge.call({ caseless: v }, u, d) : S.isPlainObject(d) ? S.merge({}, d) : S.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f, v) {
    if (S.isUndefined(d)) {
      if (!S.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, d, f, v);
  }
  function s(u, d) {
    if (!S.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (S.isUndefined(d)) {
      if (!S.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function i(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
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
    validateStatus: i,
    headers: (u, d, f) => o(ks(u), ks(d), f, !0)
  };
  return S.forEach(Object.keys({ ...e, ...t }), function(d) {
    const f = l[d] || o, v = f(e[d], t[d], d);
    S.isUndefined(v) && f !== i || (n[d] = v);
  }), n;
}
const Mu = (e) => {
  const t = st({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: i } = t;
  if (t.headers = a = me.from(a), t.url = Pu(Ou(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  ), S.isFormData(n)) {
    if (ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (S.isFunction(n.getHeaders)) {
      const l = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, f]) => {
        u.includes(d.toLowerCase()) && a.set(d, f);
      });
    }
  }
  if (ue.hasStandardBrowserEnv && (r && S.isFunction(r) && (r = r(t)), r || r !== !1 && ow(t.url))) {
    const l = o && s && sw.read(s);
    l && a.set(o, l);
  }
  return t;
}, cw = typeof XMLHttpRequest < "u", lw = cw && function(e) {
  return new Promise(function(n, r) {
    const o = Mu(e);
    let s = o.data;
    const a = me.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = o, d, f, v, b, g;
    function m() {
      b && b(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function y() {
      if (!h)
        return;
      const x = me.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: x,
        config: e,
        request: h
      };
      _u(function(T) {
        n(T), m();
      }, function(T) {
        r(T), m();
      }, E), h = null;
    }
    "onloadend" in h ? h.onloadend = y : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, h.onabort = function() {
      h && (r(new G("Request aborted", G.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(C) {
      const E = C && C.message ? C.message : "Network Error", P = new G(E, G.ERR_NETWORK, e, h);
      P.event = C || null, r(P), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const E = o.transitional || Au;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new G(
        C,
        E.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        e,
        h
      )), h = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in h && S.forEach(a.toJSON(), function(C, E) {
      h.setRequestHeader(E, C);
    }), S.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), i && i !== "json" && (h.responseType = o.responseType), u && ([v, g] = Cn(u, !0), h.addEventListener("progress", v)), l && h.upload && ([f, b] = Cn(l), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (d = (x) => {
      h && (r(!x || x.type ? new Rt(null, e, h) : x), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const w = tw(o.url);
    if (w && ue.protocols.indexOf(w) === -1) {
      r(new G("Unsupported protocol " + w + ":", G.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
}, uw = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, i();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof G ? d : new Rt(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: l } = r;
    return l.unsubscribe = () => S.asap(i), l;
  }
}, dw = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, fw = async function* (e, t) {
  for await (const n of pw(e))
    yield* dw(n, t);
}, pw = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Is = (e, t, n, r) => {
  const o = fw(e, t);
  let s = 0, a, i = (l) => {
    a || (a = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: d } = await o.next();
        if (u) {
          i(), l.close();
          return;
        }
        let f = d.byteLength;
        if (n) {
          let v = s += f;
          n(v);
        }
        l.enqueue(new Uint8Array(d));
      } catch (u) {
        throw i(u), u;
      }
    },
    cancel(l) {
      return i(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, _s = 64 * 1024, { isFunction: on } = S, mw = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(S.global), {
  ReadableStream: Os,
  TextEncoder: Ms
} = S.global, Ds = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, hw = (e) => {
  e = S.merge.call({
    skipUndefined: !0
  }, mw, e);
  const { fetch: t, Request: n, Response: r } = e, o = t ? on(t) : typeof fetch == "function", s = on(n), a = on(r);
  if (!o)
    return !1;
  const i = o && on(Os), l = o && (typeof Ms == "function" ? /* @__PURE__ */ ((g) => (m) => g.encode(m))(new Ms()) : async (g) => new Uint8Array(await new n(g).arrayBuffer())), u = s && i && Ds(() => {
    let g = !1;
    const m = new n(ue.origin, {
      body: new Os(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !m;
  }), d = a && i && Ds(() => S.isReadableStream(new r("").body)), f = {
    stream: d && ((g) => g.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !f[g] && (f[g] = (m, h) => {
      let y = m && m[g];
      if (y)
        return y.call(m);
      throw new G(`Response type '${g}' is not supported`, G.ERR_NOT_SUPPORT, h);
    });
  });
  const v = async (g) => {
    if (g == null)
      return 0;
    if (S.isBlob(g))
      return g.size;
    if (S.isSpecCompliantForm(g))
      return (await new n(ue.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(g) || S.isArrayBuffer(g))
      return g.byteLength;
    if (S.isURLSearchParams(g) && (g = g + ""), S.isString(g))
      return (await l(g)).byteLength;
  }, b = async (g, m) => {
    const h = S.toFiniteNumber(g.getContentLength());
    return h ?? v(m);
  };
  return async (g) => {
    let {
      url: m,
      method: h,
      data: y,
      signal: w,
      cancelToken: x,
      timeout: C,
      onDownloadProgress: E,
      onUploadProgress: P,
      responseType: T,
      headers: N,
      withCredentials: F = "same-origin",
      fetchOptions: B
    } = Mu(g), z = t || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let H = uw([w, x && x.toAbortSignal()], C), j = null;
    const A = H && H.unsubscribe && (() => {
      H.unsubscribe();
    });
    let V;
    try {
      if (P && u && h !== "get" && h !== "head" && (V = await b(N, y)) !== 0) {
        let Z = new n(m, {
          method: "POST",
          body: y,
          duplex: "half"
        }), ne;
        if (S.isFormData(y) && (ne = Z.headers.get("content-type")) && N.setContentType(ne), Z.body) {
          const [X, Y] = Ps(
            V,
            Cn(As(P))
          );
          y = Is(Z.body, _s, X, Y);
        }
      }
      S.isString(F) || (F = F ? "include" : "omit");
      const O = s && "credentials" in n.prototype, U = {
        ...B,
        signal: H,
        method: h.toUpperCase(),
        headers: N.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: O ? F : void 0
      };
      j = s && new n(m, U);
      let R = await (s ? z(j, B) : z(m, U));
      const _ = d && (T === "stream" || T === "response");
      if (d && (E || _ && A)) {
        const Z = {};
        ["status", "statusText", "headers"].forEach((ie) => {
          Z[ie] = R[ie];
        });
        const ne = S.toFiniteNumber(R.headers.get("content-length")), [X, Y] = E && Ps(
          ne,
          Cn(As(E), !0)
        ) || [];
        R = new r(
          Is(R.body, _s, X, () => {
            Y && Y(), A && A();
          }),
          Z
        );
      }
      T = T || "text";
      let Q = await f[S.findKey(f, T) || "text"](R, g);
      return !_ && A && A(), await new Promise((Z, ne) => {
        _u(Z, ne, {
          data: Q,
          headers: me.from(R.headers),
          status: R.status,
          statusText: R.statusText,
          config: g,
          request: j
        });
      });
    } catch (O) {
      throw A && A(), O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message) ? Object.assign(
        new G("Network Error", G.ERR_NETWORK, g, j),
        {
          cause: O.cause || O
        }
      ) : G.from(O, O && O.code, g, j);
    }
  };
}, gw = /* @__PURE__ */ new Map(), Du = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [
    r,
    o,
    n
  ];
  let a = s.length, i = a, l, u, d = gw;
  for (; i--; )
    l = s[i], u = d.get(l), u === void 0 && d.set(l, u = i ? /* @__PURE__ */ new Map() : hw(t)), d = u;
  return u;
};
Du();
const Vo = {
  http: Oy,
  xhr: lw,
  fetch: {
    get: Du
  }
};
S.forEach(Vo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ls = (e) => `- ${e}`, vw = (e) => S.isFunction(e) || e === null || e === !1;
function bw(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let i;
    if (o = r, !vw(r) && (o = Vo[(i = String(r)).toLowerCase()], o === void 0))
      throw new G(`Unknown adapter '${i}'`);
    if (o && (S.isFunction(o) || (o = o.get(t))))
      break;
    s[i || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(Ls).join(`
`) : " " + Ls(a[0]) : "as no adapter specified";
    throw new G(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Lu = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: bw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Vo
};
function Cr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Rt(null, e);
}
function Fs(e) {
  return Cr(e), e.headers = me.from(e.headers), e.data = xr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Lu.getAdapter(e.adapter || qt.adapter, e)(e).then(function(r) {
    return Cr(e), r.data = xr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = me.from(r.headers), r;
  }, function(r) {
    return Iu(r) || (Cr(e), r && r.response && (r.response.data = xr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = me.from(r.response.headers))), Promise.reject(r);
  });
}
const Fu = "1.13.1", tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $s = {};
tr.transitional = function(t, n, r) {
  function o(s, a) {
    return "[Axios v" + Fu + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (t === !1)
      throw new G(
        o(a, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !$s[a] && ($s[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, i) : !0;
  };
};
tr.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function yw(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], a = t[s];
    if (a) {
      const i = e[s], l = i === void 0 || a(i, s, e);
      if (l !== !0)
        throw new G("option " + s + " must be " + l, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + s, G.ERR_BAD_OPTION);
  }
}
const pn = {
  assertOptions: yw,
  validators: tr
}, Pe = pn.validators;
let Qe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ts(),
      response: new Ts()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = st(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && pn.assertOptions(r, {
      silentJSONParsing: Pe.transitional(Pe.boolean),
      forcedJSONParsing: Pe.transitional(Pe.boolean),
      clarifyTimeoutError: Pe.transitional(Pe.boolean)
    }, !1), o != null && (S.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : pn.assertOptions(o, {
      encode: Pe.function,
      serialize: Pe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), pn.assertOptions(n, {
      baseUrl: Pe.spelling("baseURL"),
      withXsrfToken: Pe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && S.merge(
      s.common,
      s[n.method]
    );
    s && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = me.concat(a, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, i.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let d, f = 0, v;
    if (!l) {
      const g = [Fs.bind(this), void 0];
      for (g.unshift(...i), g.push(...u), v = g.length, d = Promise.resolve(n); f < v; )
        d = d.then(g[f++], g[f++]);
      return d;
    }
    v = i.length;
    let b = n;
    for (; f < v; ) {
      const g = i[f++], m = i[f++];
      try {
        b = g(b);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      d = Fs.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, v = u.length; f < v; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = st(this.defaults, t);
    const n = Ou(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Pu(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(t) {
  Qe.prototype[t] = function(n, r) {
    return this.request(st(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, a, i) {
      return this.request(st(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  Qe.prototype[t] = n(), Qe.prototype[t + "Form"] = n(!0);
});
let ww = class $u {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((i) => {
        r.subscribe(i), s = i;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(s);
      }, a;
    }, t(function(s, a, i) {
      r.reason || (r.reason = new Rt(s, a, i), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new $u(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function xw(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Cw(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Xr = {
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
Object.entries(Xr).forEach(([e, t]) => {
  Xr[t] = e;
});
function Bu(e) {
  const t = new Qe(e), n = gu(Qe.prototype.request, t);
  return S.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Bu(st(e, o));
  }, n;
}
const oe = Bu(qt);
oe.Axios = Qe;
oe.CanceledError = Rt;
oe.CancelToken = ww;
oe.isCancel = Iu;
oe.VERSION = Fu;
oe.toFormData = er;
oe.AxiosError = G;
oe.Cancel = oe.CanceledError;
oe.all = function(t) {
  return Promise.all(t);
};
oe.spread = xw;
oe.isAxiosError = Cw;
oe.mergeConfig = st;
oe.AxiosHeaders = me;
oe.formToJSON = (e) => ku(S.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = Lu.getAdapter;
oe.HttpStatusCode = Xr;
oe.default = oe;
const {
  Axios: Yw,
  AxiosError: Jw,
  CanceledError: Zw,
  isCancel: Qw,
  CancelToken: ex,
  VERSION: tx,
  all: nx,
  Cancel: rx,
  isAxiosError: ox,
  spread: sx,
  toFormData: ax,
  AxiosHeaders: ix,
  HttpStatusCode: cx,
  formToJSON: lx,
  getAdapter: ux,
  mergeConfig: dx
} = oe;
let Je = null, Yr = "";
const fx = (e) => {
  Je = e;
}, px = (e) => {
  Yr = e, Le.updateBaseURL(e);
};
class Sw {
  instance;
  constructor() {
    this.instance = oe.create({
      baseURL: Yr,
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
      const n = localStorage.getItem("@IdentityProvider:accessToken");
      return n && (t.headers.Authorization = `Bearer ${n}`), Je && Je.showLoader(), t;
    }), this.instance.interceptors.response.use(
      (t) => (Je && Je.hideLoader(), t),
      async (t) => {
        Je && Je.hideLoader();
        const n = t.config;
        if (t.response?.status === 401 && !n._retry) {
          n._retry = !0;
          const o = localStorage.getItem("@IdentityProvider:refreshToken");
          if (o)
            try {
              const s = await oe.post(
                `${Yr}/auth/RefreshToken`,
                { refreshToken: o },
                {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ), { accessToken: a, refreshToken: i } = s.data;
              return localStorage.setItem("@IdentityProvider:accessToken", a), i && localStorage.setItem("@IdentityProvider:refreshToken", i), n.headers.Authorization = `Bearer ${a}`, this.instance(n);
            } catch (s) {
              return localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), Promise.reject(s);
            }
          else
            n.url?.includes("/auth/") || n.url?.includes("IdentifyUser") || n.url?.includes("LoginWithContract") || (window.location.href = "/");
        }
        const r = this.transformError(t);
        return Promise.reject(r);
      }
    );
  }
  transformError(t) {
    if (t.response) {
      const { status: n, data: r } = t.response;
      let o = r.message || r.title, s = r.errors;
      if (!s && typeof r == "object" && !o) {
        const a = Object.keys(r);
        if (a.length > 0 && a.every((l) => Array.isArray(r[l]))) {
          s = r;
          const l = a.length;
          o = l === 1 ? "Erro de validação no formulário" : `${l} erros de validação no formulário`;
        }
      }
      if (!o && s) {
        const a = Object.keys(s).length;
        o = a === 1 ? "Erro de validação no formulário" : `${a} erros de validação no formulário`;
      }
      return o || (o = "Erro na requisição"), {
        message: o,
        status: n,
        errors: s,
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
  async get(t, n) {
    const r = await this.instance.get(t, n);
    return r.data && typeof r.data == "object" && "data" in r.data ? r.data : {
      data: r.data,
      success: !0,
      statusCode: r.status
    };
  }
  async post(t, n, r) {
    const o = await this.instance.post(t, n, r);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
  async put(t, n, r) {
    const o = await this.instance.put(t, n, r);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
  async delete(t, n) {
    const r = await this.instance.delete(t, n);
    return r.data && typeof r.data == "object" && "data" in r.data ? r.data : {
      data: r.data,
      success: !0,
      statusCode: r.status
    };
  }
  async patch(t, n, r) {
    const o = await this.instance.patch(t, n, r);
    return o.data && typeof o.data == "object" && "data" in o.data ? o.data : {
      data: o.data,
      success: !0,
      statusCode: o.status
    };
  }
}
const Le = new Sw();
class Sr {
  static async identify(t) {
    return (await Le.post("/auth/IdentifyUser", {
      username: t.username,
      password: t.password
    })).data;
  }
  static async loginWithContract(t) {
    const r = (await Le.post("/auth/LoginWithContract", t)).data, { accessToken: o, refreshToken: s, user: a, contract: i } = r;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", s), localStorage.setItem("@IdentityProvider:user", JSON.stringify(a)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(i)), r;
  }
  static async login(t) {
    const r = (await Le.post("/auth/login", {
      username: t.username,
      password: t.password
    })).data, { accessToken: o, refreshToken: s, user: a } = r;
    return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", s), localStorage.setItem("@IdentityProvider:user", JSON.stringify(a)), r;
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
      await Le.post("/auth/Logout");
    } finally {
      this.logout();
    }
  }
  static async logoutAllDevices() {
    try {
      await Le.post("/auth/LogoutAllDevices");
    } finally {
      this.logout();
    }
  }
  static async refreshAccessToken() {
    const t = this.getRefreshToken();
    if (!t)
      throw new Error("Refresh token não encontrado");
    try {
      const r = (await Le.post("/auth/RefreshToken", {
        refreshToken: t
      })).data, { accessToken: o, refreshToken: s } = r;
      return localStorage.setItem("@IdentityProvider:accessToken", o), localStorage.setItem("@IdentityProvider:refreshToken", s), r;
    } catch (n) {
      throw this.logout(), n;
    }
  }
  static async revokeRefreshToken(t) {
    const n = t || this.getRefreshToken();
    n && await Le.post("/auth/RevokeRefreshToken", {
      refreshToken: n
    });
  }
  static async getActiveSessions() {
    return (await Le.get("/auth/GetActiveSessions")).data;
  }
  static isTokenExpiringSoon(t, n = 5) {
    try {
      const o = JSON.parse(atob(t.split(".")[1])).exp * 1e3, s = Date.now();
      return (o - s) / (1e3 * 60) <= n;
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
const Uu = c.createContext(null), mx = () => {
  const e = c.useContext(Uu);
  if (!e)
    throw new Error("useAuth must be used within AuthProvider");
  return e;
}, hx = ({ children: e, onLogout: t }) => {
  const [n, r] = c.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:user");
    return y ? JSON.parse(y) : null;
  }), [o, s] = c.useState(() => {
    const y = localStorage.getItem("@IdentityProvider:contract");
    return y ? JSON.parse(y) : null;
  }), [a, i] = c.useState(() => localStorage.getItem("@IdentityProvider:accessToken")), [l, u] = c.useState(() => localStorage.getItem("@IdentityProvider:refreshToken")), d = c.useCallback((y) => {
    r(y.user), s(y.contract), i(y.accessToken), u(y.refreshToken), localStorage.setItem("@IdentityProvider:user", JSON.stringify(y.user)), localStorage.setItem("@IdentityProvider:contract", JSON.stringify(y.contract)), localStorage.setItem("@IdentityProvider:accessToken", y.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", y.refreshToken);
  }, []), f = c.useCallback(() => {
    r(null), s(null), i(null), u(null), localStorage.removeItem("@IdentityProvider:user"), localStorage.removeItem("@IdentityProvider:contract"), localStorage.removeItem("@IdentityProvider:accessToken"), localStorage.removeItem("@IdentityProvider:refreshToken"), t?.();
  }, [t]), v = c.useCallback(async () => {
    await Sr.logoutAllDevices(), f();
  }, [f]), b = c.useCallback(async () => {
    try {
      const y = await Sr.refreshAccessToken();
      y && (i(y.accessToken), u(y.refreshToken), localStorage.setItem("@IdentityProvider:accessToken", y.accessToken), localStorage.setItem("@IdentityProvider:refreshToken", y.refreshToken));
    } catch {
      f();
    }
  }, [f]), g = c.useCallback(async () => {
    try {
      return await Sr.getActiveSessions();
    } catch {
      return [];
    }
  }, []), m = c.useCallback(
    (y) => {
      if (n) {
        const w = { ...n, ...y };
        r(w), localStorage.setItem("@IdentityProvider:user", JSON.stringify(w));
      }
    },
    [n]
  ), h = !!n && !!a;
  return /* @__PURE__ */ p(
    Uu.Provider,
    {
      value: {
        user: n,
        contract: o,
        accessToken: a,
        refreshToken: l,
        isAuthenticated: h,
        login: d,
        logout: f,
        logoutAllDevices: v,
        refreshAccessToken: b,
        getActiveSessions: g,
        updateUser: m
      },
      children: e
    }
  );
}, gx = () => {
  const [e, t] = c.useState({});
  return {
    fieldErrors: e,
    setErrors: (s) => {
      if (s.errors) {
        const a = {};
        Object.keys(s.errors).forEach((i) => {
          const l = i.charAt(0).toLowerCase() + i.slice(1);
          a[l] = s.errors[i][0];
        }), t(a);
      }
    },
    clearErrors: () => {
      t({});
    },
    getError: (s) => e[s] || ""
  };
};
export {
  hx as AuthProvider,
  Sr as AuthService,
  Nw as Badge,
  mu as Breadcrumb,
  Pr as Button,
  Jd as Card,
  tf as CardContent,
  ef as CardDescription,
  nf as CardFooter,
  Zd as CardHeader,
  Qd as CardTitle,
  yf as Checkbox,
  Bp as ConfirmModal,
  Iw as Dropdown,
  Ag as DropdownCheckboxItem,
  Ng as DropdownContent,
  Ow as DropdownGroup,
  Pg as DropdownItem,
  Ig as DropdownLabel,
  Mw as DropdownPortal,
  Lw as DropdownRadioGroup,
  kg as DropdownRadioItem,
  _g as DropdownSeparator,
  Og as DropdownShortcut,
  Dw as DropdownSub,
  Tg as DropdownSubContent,
  Rg as DropdownSubTrigger,
  _w as DropdownTrigger,
  Kb as GlobalLoader,
  Kw as GlobalLoaderProvider,
  rf as Input,
  Lp as Modal,
  kw as ModalClose,
  za as ModalContent,
  Ka as ModalDescription,
  Wa as ModalFooter,
  ja as ModalHeader,
  Ha as ModalOverlay,
  Fp as ModalPortal,
  Ga as ModalTitle,
  Aw as ModalTrigger,
  Gb as Navbar,
  Rv as RadioGroup,
  Tv as RadioGroupItem,
  Fw as Select,
  dv as SelectContent,
  $w as SelectGroup,
  pv as SelectItem,
  fv as SelectLabel,
  nl as SelectScrollDownButton,
  tl as SelectScrollUpButton,
  mv as SelectSeparator,
  uv as SelectTrigger,
  Bw as SelectValue,
  Ub as Sidebar,
  Hb as SidebarContent,
  zb as SidebarFooter,
  Vb as SidebarHeader,
  jb as SidebarNav,
  Wb as SidebarNavItem,
  _v as Switch,
  _b as Table,
  Mb as TableBody,
  Bb as TableCaption,
  $b as TableCell,
  Db as TableFooter,
  Fb as TableHead,
  Ob as TableHeader,
  Lb as TableRow,
  Uw as Tabs,
  $v as TabsContent,
  Lv as TabsList,
  Fv as TabsTrigger,
  nu as Toast,
  sb as ToastAction,
  ru as ToastClose,
  su as ToastDescription,
  rb as ToastProvider,
  ou as ToastTitle,
  tu as ToastViewport,
  Vw as Toaster,
  jw as Tooltip,
  Ib as TooltipContent,
  zw as TooltipProvider,
  Ww as TooltipTrigger,
  of as badgeVariants,
  Yd as buttonVariants,
  M as cn,
  Le as httpClient,
  lb as reducer,
  px as setApiBaseURL,
  fx as setGlobalLoaderContext,
  ub as toast,
  mx as useAuth,
  gx as useFormErrors,
  Gw as useGlobalLoader,
  db as useToast
};
