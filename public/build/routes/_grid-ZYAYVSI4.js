import {
  Avatar
} from "/build/_shared/chunk-APAMIOVW.js";
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
  HiHome,
  HiMagnifyingGlass,
  HiTicket,
  HiVideoCamera
} from "/build/_shared/chunk-YDY4XXVM.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-HVQY2JRW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-TT2QRQMT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/outerGrid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/outerGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/outerGrid.tsx"
  );
  import.meta.hot.lastModified = "1701808081012.2732";
}
function OuterGrid({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `grid grid-cols-[100px_1fr_0px] md:grid-cols-[300px_1fr] gap-10 ${className}`, children }, void 0, false, {
    fileName: "app/components/outerGrid.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = OuterGrid;
var _c;
$RefreshReg$(_c, "OuterGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header.tsx"
  );
  import.meta.hot.lastModified = "1701808081011.2676";
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OuterGrid, { className: "items-center text-neutral-400 bg-black bg-opacity-20 border-b border-neutral-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "text-2xl outline-0 hover:opacity-60 focus:ring-4", children: "\u{1F37F}" }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex items-center gap-1 border border-neutral-700 md:w-96 max-w-full rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HiMagnifyingGlass, { className: "absolute top-2.5 left-2.5 text-neutral-500" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "search", className: "px-5 pl-9 py-1.5 w-full bg-transparent border-0 font-medium", placeholder: "Search movies..." }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navbar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/navbar.tsx"
  );
  import.meta.hot.lastModified = "1701808081012.1323";
}
function Navbar() {
  _s();
  const {
    user
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "sticky top-0 text-neutral-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "px-6 py-10 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBarLink, { to: "/", icon: HiHome, children: "Home" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBarLink, { to: "/movies", icon: HiTicket, children: "Movies" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBarLink, { to: "/series", icon: HiVideoCamera, children: "TV series" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "px-6 py-10 border-t border-neutral-800", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Avatar, { url: user.avatarUrl, alt: user.firstName }, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { className: "hidden md:inline text-white", children: [
          user.firstName,
          " ",
          user.lastName
        ] }, void 0, true, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", action: "/sign-out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "flex items-center gap-4 px-4 py-3 w-full text-current hover:bg-neutral-800 hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HiArrowRightOnRectangle, {}, void 0, false, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        "Sign out"
      ] }, void 0, true, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBarLink, { to: "/sign-in", icon: HiArrowLeftOnRectangle, children: "Sign in" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 63,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Navbar, "FpjQZylbefWQChk+MjGNfSb2jDo=", false, function() {
  return [useLoaderData];
});
_c3 = Navbar;
function NavBarLink({
  icon: Icon,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { ...props, className: ({
    isActive
  }) => ["flex items-center gap-4 px-4 py-3 font-bold rounded-md", "outline-0 focus:ring-4", isActive ? "bg-stone-700 text-white" : "hover:bg-neutral-800 hover:text-white"].filter(Boolean).join(" "), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { className: "text-xl" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden md:inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: props.children }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_c22 = NavBarLink;
var _c3;
var _c22;
$RefreshReg$(_c3, "Navbar");
$RefreshReg$(_c22, "NavBarLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/footer.tsx"
  );
  import.meta.hot.lastModified = "1701808081010.9888";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "border-t border-neutral-800 py-10 text-sm text-neutral-500 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "\xA9 2023 Movie App." }, void 0, false, {
    fileName: "app/components/footer.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c4 = Footer;
var _c4;
$RefreshReg$(_c4, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_grid.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_grid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_grid.tsx"
  );
  import.meta.hot.lastModified = "1701808081016.652";
}
var meta = () => {
  return [{
    title: "Movies App"
  }];
};
function GridLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/_grid.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(OuterGrid, { className: "flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-r border-neutral-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-1 min-w-0 md:pr-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_grid.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_grid.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c5 = GridLayout;
var _c5;
$RefreshReg$(_c5, "GridLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GridLayout as default,
  meta
};
//# sourceMappingURL=/build/routes/_grid-ZYAYVSI4.js.map
