import {
  Link
} from "/build/_shared/chunk-HVQY2JRW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-TT2QRQMT.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/errorBanner.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/errorBanner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/errorBanner.tsx"
  );
  import.meta.hot.lastModified = "1701808081010.7534";
}
function ErrorBanner({
  displayText,
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5 bg-red-500 text-red-200 bg-opacity-20 rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { role: "alert", className: "mb-1 text-white font-bold", children: displayText }, void 0, false, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "max-w-full text-sm whitespace-pre-wrap break-words", children: [
      error.name,
      ": ",
      error.message
    ] }, void 0, true, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "button button-ghost mt-5 w-full", children: "Report an issue" }, void 0, false, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/errorBanner.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ErrorBanner;
var _c;
$RefreshReg$(_c, "ErrorBanner");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/movieThumbnail.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movieThumbnail.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movieThumbnail.tsx"
  );
  import.meta.hot.lastModified = "1701808081011.9717";
}
function MovieThumbnail({
  title,
  url,
  category,
  imageUrl,
  releasedAt
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("figure", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: imageUrl, alt: title, className: "object-cover aspect-[9/16] rounded-md shadow-lg" }, void 0, false, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: url, className: "text-lg font-semibold leading-6 hover:underline", children: title }, void 0, false, {
        fileName: "app/components/movieThumbnail.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-neutral-500 font-medium text-sm", children: [
        category,
        " \u2022 ",
        releasedAt.getFullYear()
      ] }, void 0, true, {
        fileName: "app/components/movieThumbnail.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/movieThumbnail.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = MovieThumbnail;
var _c2;
$RefreshReg$(_c2, "MovieThumbnail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ErrorBanner,
  MovieThumbnail
};
//# sourceMappingURL=/build/_shared/chunk-RUEUF7EI.js.map
