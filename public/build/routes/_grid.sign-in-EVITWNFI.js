import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLocation
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

// app/routes/_grid.sign-in.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_grid.sign-in.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_grid.sign-in.tsx"
  );
  import.meta.hot.lastModified = "1701808081016.2646";
}
var meta = () => {
  return [{
    title: "Sign in - Movie App"
  }];
};
function SignInPage() {
  _s();
  const {
    state
  } = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-5 md:max-w-sm mx-auto my-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold mb-8 text-center", children: "Sign in" }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: state == null ? void 0 : state.redirectUrl }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", placeholder: "E-mail address", autoComplete: "email", className: "w-full", tabIndex: 1, required: true }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", placeholder: "Password", autoComplete: "current-password", className: "w-full", tabIndex: 1, required: true }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-neutral-700 w-full", tabIndex: 1, children: "Sign in" }, void 0, false, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_grid.sign-in.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_grid.sign-in.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s(SignInPage, "FO3uhfHQFxifE5/pZVC1vAVIA9s=", false, function() {
  return [useLocation];
});
_c = SignInPage;
var _c;
$RefreshReg$(_c, "SignInPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignInPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_grid.sign-in-EVITWNFI.js.map
