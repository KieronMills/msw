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

// app/routes/_grid.movies._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_grid.movies._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_grid.movies._index.tsx"
  );
  import.meta.hot.lastModified = "1701808081015.3193";
}
var meta = () => {
  return [{
    title: "Movies - Movies App"
  }];
};
function MoviesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl font-extrabold mb-10", children: "Movies" }, void 0, false, {
      fileName: "app/routes/_grid.movies._index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-400", children: [
      "Practice what you've learned and implement a request handler that returns a list of all existing movies on this page. Reuse the same",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "movies" }, void 0, false, {
        fileName: "app/routes/_grid.movies._index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      " array for data and the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "MovieThumbnail" }, void 0, false, {
        fileName: "app/routes/_grid.movies._index.tsx",
        lineNumber: 32,
        columnNumber: 52
      }, this),
      " ",
      "component for the UI."
    ] }, void 0, true, {
      fileName: "app/routes/_grid.movies._index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_grid.movies._index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = MoviesPage;
var _c;
$RefreshReg$(_c, "MoviesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MoviesPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_grid.movies._index-QUL3QDV3.js.map
