import { u as ce, a as ie, c as s, j as e, H as P, b as de, B as D, d as ee, e as me, f as U, g as K, N as B, h as X, i as se, k as ue, s as xe, l as pe, L as te, m as oe, n as G, A as ae, o as be, p as fe } from "./index-adf6f50d.mjs";
const ge = ({
  type: o = "text",
  inputRef: l,
  title: t,
  hideTitle: r,
  value: a,
  error: u,
  placeholder: x,
  rightPlaceholder: c,
  hint: d,
  onChange: p,
  onFocus: w,
  onBlur: f,
  clearBg: j = !1,
  className: g = "",
  maxLength: _,
  containerClassName: v = "",
  hintClassName: h = "",
  unstyled: L = !1,
  disabled: k,
  ...V
}) => {
  const H = ce(), { setFocusState: T } = ie(), I = (E) => {
    w == null || w(E), T(!0);
  }, O = (E) => {
    f == null || f(E), T(!1);
  }, Q = s(
    "relative order-2 flex w-full items-center",
    t && !r && "mt-1.5"
  ), F = !L && s(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    u ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    k && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), q = !L && s(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    k ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    c ? "w-0 grow rounded-l-lg" : "rounded-lg",
    g
  ), C = !L && s(
    "z-[1] order-3 rounded-r-lg",
    c ? typeof c == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let z = /* @__PURE__ */ e.jsx(e.Fragment, {});
  const A = /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      className: q || g,
      disabled: k,
      id: H,
      maxLength: _,
      placeholder: x,
      type: o,
      value: a,
      onBlur: O,
      onChange: p,
      onFocus: I,
      ...V
    }
  );
  return z = /* @__PURE__ */ e.jsxs("div", { className: Q, children: [
    A,
    !L && !j && /* @__PURE__ */ e.jsx("div", { className: F || "" }),
    c && /* @__PURE__ */ e.jsx("span", { className: C || "", children: c })
  ] }), h = s(
    "order-3",
    h
  ), v = s(
    "flex flex-col",
    v
  ), t || d ? /* @__PURE__ */ e.jsxs("div", { className: v, children: [
    z,
    t && /* @__PURE__ */ e.jsx(P, { className: r ? "sr-only" : "order-1", htmlFor: H, useLabelTag: !0, children: t }),
    d && /* @__PURE__ */ e.jsx(de, { className: h, color: u ? "red" : "default", children: d })
  ] }) : z;
}, he = ({ size: o = "md", buttons: l, link: t, linkWithPadding: r, clearBg: a = !0, outlineOnMobile: u, className: x }) => {
  let c = s(
    "flex items-center justify-start rounded",
    t ? "gap-4" : "gap-2",
    x
  );
  return t && !a && (c = s(
    "transition-all hover:bg-grey-200 dark:hover:bg-grey-900",
    o === "sm" ? "h-7 px-3" : "h-[34px] px-4",
    u && "border border-grey-300 hover:border-transparent md:border-transparent",
    c
  )), /* @__PURE__ */ e.jsx("div", { className: c, children: l.map(({ key: d, ...p }) => /* @__PURE__ */ e.jsx(D, { link: t, linkWithPadding: r, size: o, ...p }, d)) });
}, ye = ({
  shiftY: o,
  footerBgColorClass: l = "bg-white dark:bg-black",
  contentBgColorClass: t = "bg-white dark:bg-black",
  height: r = 96,
  children: a
}) => {
  const u = s(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), x = o ? `calc(${o} - 24px)` : "-24px", c = `${r + 24}px`, d = s(
    "sticky z-[298] block h-[24px]",
    t
  ), p = "0", w = s(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    l
  ), f = "0", j = `${r}px`, g = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", _ = o ? `calc(${o} + ${r - 24}px)` : `${r - 24}px`;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: u,
      style: {
        bottom: x,
        height: c
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: d,
            style: {
              bottom: p
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: w,
            style: {
              bottom: f,
              height: j
            },
            children: a
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: g,
            style: {
              bottom: _
            }
          }
        )
      ]
    }
  );
};
function Y(o, l, t = {}) {
  o ? B.show(ke, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ e.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (r) => {
      l(), r == null || r.remove();
    },
    ...t
  }) : l();
}
const we = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", R = ({
  size: o = "md",
  width: l,
  height: t,
  testId: r,
  title: a,
  okLabel: u = "OK",
  okLoading: x = !1,
  cancelLabel: c = "Cancel",
  footer: d,
  header: p,
  leftButtonProps: w,
  buttonsDisabled: f,
  padding: j = !0,
  onOk: g,
  okColor: _ = "black",
  onCancel: v,
  topRightContent: h,
  hideXOnMobile: L = !1,
  afterClose: k,
  children: V,
  backDrop: H = !0,
  backDropClick: T = !0,
  stickyFooter: I = !1,
  stickyHeader: O = !1,
  scrolling: Q = !0,
  dirty: F = !1,
  animate: q = !0,
  formSheet: C = !1,
  enableCMDS: z = !0
}) => {
  const A = ee(), { setGlobalDirtyState: E } = me(), [Z, le] = U(!1);
  K(() => {
    E(F);
  }, [F, E]), K(() => {
    const y = (N) => {
      N.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        v ? v() : Y(F, () => {
          A.remove(), k == null || k();
        });
      }), N.stopPropagation());
    };
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [A, F, k, v]), K(() => {
    const y = setTimeout(() => {
      le(!0);
    }, 250);
    return () => clearTimeout(y);
  }, []), K(() => {
    if (g) {
      const y = (N) => {
        (N.metaKey || N.ctrlKey) && N.key === "s" && (N.preventDefault(), g());
      };
      if (z)
        return window.addEventListener("keydown", y), () => {
          window.removeEventListener("keydown", y);
        };
    }
  });
  const W = [];
  let $;
  const J = () => {
    Y(F, () => {
      A.remove(), k == null || k();
    });
  };
  d || (c && W.push({
    key: "cancel-modal",
    label: c,
    color: "outline",
    onClick: v || (() => {
      J();
    }),
    disabled: f
  }), u && W.push({
    key: "ok-modal",
    label: u,
    color: _,
    className: "min-w-[80px]",
    onClick: g,
    disabled: f,
    loading: x
  }));
  let i = s(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    o !== "bleed" && "rounded",
    C ? "shadow-md" : "shadow-xl",
    q && !C && !Z && "animate-modal-in",
    C && !Z && "animate-modal-in-reverse",
    Q ? "overflow-y-auto" : "overflow-y-hidden"
  ), m = s(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), b = "", n = s(
    !h || h === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (O && (n = s(
    n,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), o) {
    case "sm":
      i = s(
        i,
        "max-w-[480px]"
      ), m = s(
        m,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "md":
      i = s(
        i,
        "max-w-[720px]"
      ), m = s(
        m,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "lg":
      i = s(
        i,
        "max-w-[1020px]"
      ), m = s(
        m,
        "p-4 md:p-[4vmin]"
      ), b = "p-7", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "xl":
      i = s(
        i,
        "max-w-[1240px]0"
      ), m = s(
        m,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", n = s(
        n,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      i = s(
        i,
        "h-full"
      ), m = s(
        m,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", n = s(
        n,
        "-inset-x-10"
      );
      break;
    case "bleed":
      i = s(
        i,
        "h-full"
      ), b = "p-10", n = s(
        n,
        "-inset-x-10"
      );
      break;
    default:
      m = s(
        m,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
  }
  j || (b = "p-0"), i = s(
    i
  ), n = s(
    n,
    b,
    "pb-0"
  ), $ = s(
    b,
    "py-0"
  ), m = s(
    m,
    "max-[800px]:!pb-20"
  );
  const re = s(
    `${b} ${I ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  $ = s(
    $,
    (o === "full" || o === "bleed" || t === "full" || typeof t == "number") && "grow"
  );
  const ne = (y) => {
    y.target === y.currentTarget && T && J();
  }, S = {};
  typeof l == "number" ? (S.width = "100%", S.maxWidth = l + "px") : l === "full" && (i = s(
    i,
    "w-full"
  )), typeof t == "number" ? (S.height = "100%", S.maxHeight = t + "px") : t === "full" && (i = s(
    i,
    "h-full"
  ));
  let M;
  return d ? M = d : d === !1 ? $ += " pb-0 " : M = /* @__PURE__ */ e.jsxs("div", { className: re, children: [
    /* @__PURE__ */ e.jsx("div", { children: w && /* @__PURE__ */ e.jsx(D, { ...w }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ e.jsx(he, { buttons: W }) })
  ] }), M = I ? /* @__PURE__ */ e.jsx(ye, { height: 84, children: M }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: M }), /* @__PURE__ */ e.jsxs("div", { className: m, id: "modal-backdrop", onMouseDown: ne, children: [
    /* @__PURE__ */ e.jsx("div", { className: s(
      "pointer-events-none fixed inset-0 z-0",
      H && !C && we,
      C && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ e.jsxs("section", { className: i, "data-testid": r, style: S, children: [
      p === !1 ? "" : !h || h === "close" ? /* @__PURE__ */ e.jsxs("header", { className: n, children: [
        a && /* @__PURE__ */ e.jsx(P, { level: 3, children: a }),
        /* @__PURE__ */ e.jsx("div", { className: `${h !== "close" && "md:!invisible md:!hidden"} ${L && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ e.jsx(D, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: J }) })
      ] }) : /* @__PURE__ */ e.jsxs("header", { className: n, children: [
        a && /* @__PURE__ */ e.jsx(P, { level: 3, children: a }),
        h
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: $, children: V }),
      M
    ] })
  ] });
}, ve = ({
  title: o = "Are you sure?",
  prompt: l,
  cancelLabel: t = "Cancel",
  okLabel: r = "OK",
  okRunningLabel: a = "...",
  okColor: u = "black",
  onCancel: x,
  onOk: c,
  customFooter: d,
  formSheet: p = !0
}) => {
  const w = ee(), [f, j] = U("");
  return /* @__PURE__ */ e.jsx(
    R,
    {
      backDropClick: !1,
      buttonsDisabled: f === "running",
      cancelLabel: t,
      footer: d,
      formSheet: p,
      okColor: u,
      okLabel: f === "running" ? a : r,
      testId: "confirmation-modal",
      title: o,
      width: 540,
      onCancel: x,
      onOk: async () => {
        j("running");
        try {
          await (c == null ? void 0 : c(w));
        } catch (g) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", g);
        }
        j("");
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "py-4 leading-9", children: l })
    }
  );
}, ke = B.create(ve), je = B.create(() => {
  const { updateRoute: o } = X(), l = B.useModal(), t = se(), r = ue(), [a, u] = U(""), [x, c] = U(null), d = async () => {
    try {
      await t.mutateAsync({ username: a }), xe({
        message: "Site followed",
        type: "success"
      }), l.remove(), await r.refetchQueries({ queryKey: ["FollowingResponseData"], type: "active" }), o("");
    } catch {
      c(x);
    }
  };
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        t.reset(), o("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: d,
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ e.jsx(
        ge,
        {
          autoFocus: !0,
          error: !!x,
          hint: x,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: a,
          "data-test-new-follower": !0,
          onChange: (p) => u(p.target.value)
        }
      ) })
    }
  );
}), Fe = ({}) => {
  const { updateRoute: o } = X(), l = se(), { data: { items: t = [] } = {} } = pe("inbox"), r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        l.reset(), o("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(te, { children: r.map((a) => /* @__PURE__ */ e.jsx(oe, { action: /* @__PURE__ */ e.jsx(D, { color: "grey", label: "Follow back", link: !0, onClick: () => l.mutate({ username: G(a) }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: a.icon, size: "sm" }), detail: G(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Ce = B.create(Fe), Ne = ({}) => {
  const { updateRoute: o } = X(), l = be(), { data: { items: t = [] } = {} } = fe("inbox"), r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e.jsx(
    R,
    {
      afterClose: () => {
        l.reset(), o("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(te, { children: r.map((a) => /* @__PURE__ */ e.jsx(oe, { action: /* @__PURE__ */ e.jsx(D, { color: "grey", label: "Unfollow", link: !0, onClick: () => l.mutate({ username: G(a) }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: a.icon, size: "sm" }), detail: G(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Le = B.create(Ne), Me = { FollowSite: je, ViewFollowing: Le, ViewFollowers: Ce };
export {
  Me as default
};
//# sourceMappingURL=modals-c796922a.mjs.map
