import {
  ErrorBanner,
  MovieThumbnail
} from "/build/_shared/chunk-UULSYYG4.js";
import {
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-SQYBBOI6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EPYDF223.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_grid._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_grid._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_grid._index.tsx"
  );
  import.meta.hot.lastModified = "1701808081014.5137";
}
function Homepage() {
  _s();
  const {
    featuredMovies
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl font-extrabold mb-10", children: "Featured movies" }, void 0, false, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    featuredMovies.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0px,_250px))] gap-x-6 gap-y-16", children: featuredMovies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MovieThumbnail, { title: movie.title, url: `/movies/${movie.slug}`, category: movie.category, imageUrl: movie.imageUrl, releasedAt: new Date(movie.releasedAt) }, void 0, false, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this) }, movie.id, false, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 40,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 39,
      columnNumber: 36
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-400", children: "No featured movies yet." }, void 0, false, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_grid._index.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(Homepage, "sSLyeNmlaDuqf1Hcp2PzOBIradg=", false, function() {
  return [useLoaderData];
});
_c = Homepage;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBanner, { displayText: "Failed to fetch", error }, void 0, false, {
    fileName: "app/routes/_grid._index.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "YDkf/bojC730qvJxOiv5VT1rhKY=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "Homepage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Homepage as default
};
//# sourceMappingURL=/build/routes/_grid._index-R7VTMV2U.js.map
