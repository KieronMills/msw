import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EPYDF223.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/avatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/avatar.tsx"
  );
  import.meta.hot.lastModified = "1701808081010.4485";
}
function Avatar({
  url,
  alt
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: url, alt, className: "h-10 w-10 rounded-full border border-neutral-700 p-1" }, void 0, false, {
    fileName: "app/components/avatar.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Avatar;
var _c;
$RefreshReg$(_c, "Avatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Avatar
};
//# sourceMappingURL=/build/_shared/chunk-RW6SUW26.js.map
