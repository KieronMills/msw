var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server");

// app/mocks/node.ts
var import_node = require("msw/node");

// app/mocks/handlers.ts
var import_msw = require("msw"), handlers = [
  import_msw.http.get("https://api.example.com/movies/featured", () => import_msw.HttpResponse.json([
    {
      id: "8061539f-f0d6-4187-843f-a25aadf948eb",
      slug: "the-shawshank-redemption",
      title: "The Shawshank Redemption",
      category: "Drama",
      releasedAt: /* @__PURE__ */ new Date("1994-10-14"),
      description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg"
    },
    {
      id: "3342a4f2-144b-4cef-8041-676affedfbb8",
      slug: "the-godfather",
      title: "The Godfather",
      category: "Drama",
      releasedAt: /* @__PURE__ */ new Date("1972-03-24"),
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg"
    },
    {
      id: "b2b7e2d9-8b2e-4b7a-9b8a-7f9a0d7f7e0e",
      title: "The Dark Knight",
      slug: "the-dark-knight",
      category: "Action",
      releasedAt: /* @__PURE__ */ new Date("2008-07-18"),
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg"
    }
  ]))
];

// app/mocks/node.ts
var server = (0, import_node.setupServer)(...handlers);

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
server.listen();
function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request2.headers.get("user-agent")) ? handleBotRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request2.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 44,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request2.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 86,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-L2YHBXGV.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "icon", type: "image/png", sizes: "any", href: "/icon.png" },
  { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
  { rel: "apple-touch-icon", href: "/icon-apple.png" },
  { rel: "manifest", href: "/manifest.json" },
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_grid.movies._index.tsx
var grid_movies_index_exports = {};
__export(grid_movies_index_exports, {
  default: () => MoviesPage,
  meta: () => meta
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Movies - Movies App" }];
function MoviesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-4xl font-extrabold mb-10", children: "Movies" }, void 0, !1, {
      fileName: "app/routes/_grid.movies._index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-neutral-400", children: [
      "Practice what you've learned and implement a request handler that returns a list of all existing movies on this page. Reuse the same",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children: "movies" }, void 0, !1, {
        fileName: "app/routes/_grid.movies._index.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      " array for data and the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children: "MovieThumbnail" }, void 0, !1, {
        fileName: "app/routes/_grid.movies._index.tsx",
        lineNumber: 14,
        columnNumber: 52
      }, this),
      " ",
      "component for the UI."
    ] }, void 0, !0, {
      fileName: "app/routes/_grid.movies._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid.movies._index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_grid.movies.$slug.tsx
var grid_movies_slug_exports = {};
__export(grid_movies_slug_exports, {
  action: () => action,
  default: () => MovieDetailPage,
  loader: () => loader,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_graphql_request3 = require("graphql-request"), import_hi23 = require("react-icons/hi2");

// app/hooks/useQuery.ts
var import_react3 = require("react"), import_graphql_request = require("graphql-request");
function useQuery(query, options) {
  let [state, setState] = (0, import_react3.useState)({
    loading: !0,
    data: null,
    error: null
  });
  return (0, import_react3.useEffect)(() => {
    (0, import_graphql_request.request)({
      url: "http://localhost:3000",
      document: query,
      variables: options == null ? void 0 : options.variables
    }).then(
      (data) => {
        setState({
          loading: !1,
          data,
          error: null
        });
      },
      (error) => {
        setState({
          loading: !1,
          error: error.response.errors[0],
          data: null
        });
      }
    );
  }, []), [
    state,
    {
      updateCache(updateFn) {
        !state.loading && !state.error && setState({ ...state, data: updateFn(state.data) });
      }
    }
  ];
}
function mutate(mutation) {
  return (options) => (0, import_graphql_request.request)({
    url: "http://localhost:3000",
    document: mutation,
    variables: options == null ? void 0 : options.variables
  }).then(
    (data) => ({ data, error: null }),
    (error) => ({ data: null, error })
  );
}

// app/components/movieReviewsList.tsx
var import_react7 = require("react"), import_react8 = require("@remix-run/react"), import_graphql_request2 = require("graphql-request");

// app/utils/getOptimisticData.ts
function getOptimisticData(fetcher) {
  if (!(typeof fetcher > "u") && fetcher.state === "idle")
    return fetcher.data;
}

// app/components/movieReviewItem.tsx
var import_hi2 = require("react-icons/hi2");

// app/components/avatar.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Avatar({ url, alt }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "img",
    {
      src: url,
      alt,
      className: "h-10 w-10 rounded-full border border-neutral-700 p-1"
    },
    void 0,
    !1,
    {
      fileName: "app/components/avatar.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/movieReviewItem.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function MovieReviewItem({ review }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-3 flex gap-3 bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Avatar, { url: review.author.avatarUrl, alt: review.author.firstName }, void 0, !1, {
      fileName: "app/components/movieReviewItem.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: review.author.firstName }, void 0, !1, {
          fileName: "app/components/movieReviewItem.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "ml-2 text-sm text-neutral-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-amber-400 font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_hi2.HiStar, { className: "inline -mt-[0.25rem] mr-0.5 text-sm" }, void 0, !1, {
              fileName: "app/components/movieReviewItem.tsx",
              lineNumber: 18,
              columnNumber: 15
            }, this),
            review.rating
          ] }, void 0, !0, {
            fileName: "app/components/movieReviewItem.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "mx-0.5", children: "/" }, void 0, !1, {
            fileName: "app/components/movieReviewItem.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          "5"
        ] }, void 0, !0, {
          fileName: "app/components/movieReviewItem.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-bold" }, void 0, !1, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "italic text-neutral-400", children: review.text }, void 0, !1, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/movieReviewItem.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/movieReviewItem.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/movieReviewForm.tsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/components/ratingInput.tsx
var import_react4 = require("react"), import_hi22 = require("react-icons/hi2"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function RatingInput(props) {
  let [internalValue, setInternalValue] = (0, import_react4.useState)(props.value ?? 0), value = props.value == null ? internalValue : props.value, starsCount = 5, handleRatingChange = (nextRating) => {
    var _a;
    if (props.value != null)
      return (_a = props.onChange) == null ? void 0 : _a.call(props, nextRating);
    setInternalValue(nextRating);
  }, handleReset = (event) => {
    let nextValue = Number(event.currentTarget.value);
    setInternalValue(nextValue);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "input",
      {
        ...props,
        id: props.name,
        min: "1",
        max: "5",
        value,
        className: "hidden",
        onChange: () => {
        },
        onReset: handleReset
      },
      void 0,
      !1,
      {
        fileName: "app/components/ratingInput.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: props.name, children: [
      props.label,
      ":"
    ] }, void 0, !0, {
      fileName: "app/components/ratingInput.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "flex items-center gap-0.5", children: Array.from({ length: starsCount }, (_, index) => {
      let isFilled = index < value, currentStartValue = index + 1;
      return isFilled ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_hi22.HiStar,
        {
          className: "text-yellow-500",
          onClick: handleRatingChange.bind(null, currentStartValue)
        },
        index,
        !1,
        {
          fileName: "app/components/ratingInput.tsx",
          lineNumber: 55,
          columnNumber: 15
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_hi22.HiOutlineStar,
        {
          onClick: handleRatingChange.bind(null, currentStartValue)
        },
        index,
        !1,
        {
          fileName: "app/components/ratingInput.tsx",
          lineNumber: 64,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/ratingInput.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ratingInput.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/movieReviewForm.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function MovieReviewForm({ movieId }) {
  let location = (0, import_react6.useLocation)(), { isAuthenticated } = (0, import_react6.useLoaderData)(), fetcher = (0, import_react6.useFetcher)(), [rating, setRating] = (0, import_react5.useState)(0), [reviewText, setReviewText] = (0, import_react5.useState)("");
  return (0, import_react5.useEffect)(() => {
    var _a;
    fetcher.state === "idle" && ((_a = fetcher.data) != null && _a.id) && (setRating(0), setReviewText(""));
  }, [fetcher.state, fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-8 md:items-center md:flex-row md:gap-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-xl font-bold mb-5", children: "Create new review" }, void 0, !1, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        fetcher.Form,
        {
          method: "post",
          action: "?index",
          className: "flex flex-col gap-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { name: "_operation", value: "add-review", type: "hidden" }, void 0, !1, {
              fileName: "app/components/movieReviewForm.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { name: "movieId", value: movieId, type: "hidden" }, void 0, !1, {
              fileName: "app/components/movieReviewForm.tsx",
              lineNumber: 31,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              RatingInput,
              {
                name: "reviewRating",
                label: "Rating",
                value: rating,
                onChange: (nextRating) => setRating(nextRating)
              },
              void 0,
              !1,
              {
                fileName: "app/components/movieReviewForm.tsx",
                lineNumber: 33,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "textarea",
              {
                name: "reviewText",
                rows: 3,
                placeholder: "Tell us what you think...",
                value: reviewText,
                onChange: (e) => setReviewText(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/components/movieReviewForm.tsx",
                lineNumber: 39,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "bg-neutral-700", children: "Post review" }, void 0, !1, {
              fileName: "app/components/movieReviewForm.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "flex-grow-1 -mt-2 text-neutral-400", children: "Please sign in to review this movie." }, void 0, !1, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/movieReviewForm.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    isAuthenticated ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react6.Link,
      {
        to: "/sign-in",
        className: "button flex-shrink-0 w-full md:w-auto",
        state: { redirectUrl: location.pathname },
        children: "Sign in"
      },
      void 0,
      !1,
      {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/movieReviewForm.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/errorBanner.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ErrorBanner({ displayText, error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-5 bg-red-500 text-red-200 bg-opacity-20 rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { role: "alert", className: "mb-1 text-white font-bold", children: displayText }, void 0, !1, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("pre", { className: "max-w-full text-sm whitespace-pre-wrap break-words", children: [
      error.name,
      ": ",
      error.message
    ] }, void 0, !0, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "button button-ghost mt-5 w-full", children: "Report an issue" }, void 0, !1, {
      fileName: "app/components/errorBanner.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/errorBanner.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/movieReviewsList.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function MovieReviewsList({ movieId }) {
  var _a;
  let [{ loading, data, error }, { updateCache }] = useQuery(
    import_graphql_request2.gql`
      query ListReviews($movieId: ID!) {
        reviews(movieId: $movieId) {
          id
          text
          rating
          author {
            firstName
            avatarUrl
          }
        }
      }
    `,
    {
      variables: {
        movieId
      }
    }
  ), fetchers = (0, import_react8.useFetchers)(), pendingReview = getOptimisticData(fetchers[0]);
  return (0, import_react7.useEffect)(() => {
    pendingReview && updateCache((cache) => (cache.reviews.push(pendingReview), cache));
  }, [pendingReview]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-2xl font-extrabold mb-5", children: "Reviews" }, void 0, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid xl:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-[74px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, !1, {
          fileName: "app/components/movieReviewsList.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-[74px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, !1, {
          fileName: "app/components/movieReviewsList.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorBanner, { displayText: "Failed to fetch reviews", error }, void 0, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) : (_a = data == null ? void 0 : data.reviews) != null && _a.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { className: "grid xl:grid-cols-2 gap-5", children: data == null ? void 0 : data.reviews.map((review) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MovieReviewItem, { review }, void 0, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this) }, review.id, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-neutral-500", children: "No reviews for this movie yet." }, void 0, !1, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-6 border border-neutral-800 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MovieReviewForm, { movieId }, void 0, !1, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/movieReviewsList.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/session.ts
var import_node4 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node4.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secure: !0,
    secrets: [process.env.SESSION_COOKIE_SECRET]
  }
});
async function requireAuthenticatedUser(request2) {
  let user = (await getSession(request2.headers.get("Cookie"))).get("user");
  if (!user)
    throw new Response(null, { status: 401 });
  return user;
}

// app/components/movieThumbnail.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function MovieThumbnail({
  title,
  url,
  category,
  imageUrl,
  releasedAt
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("figure", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "img",
      {
        src: imageUrl,
        alt: title,
        className: "object-cover aspect-[9/16] rounded-md shadow-lg"
      },
      void 0,
      !1,
      {
        fileName: "app/components/movieThumbnail.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react9.Link,
        {
          to: url,
          className: "text-lg font-semibold leading-6 hover:underline",
          children: title
        },
        void 0,
        !1,
        {
          fileName: "app/components/movieThumbnail.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mt-1 text-neutral-500 font-medium text-sm", children: [
        category,
        " \u2022 ",
        releasedAt.getFullYear()
      ] }, void 0, !0, {
        fileName: "app/components/movieThumbnail.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/movieThumbnail.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/movieThumbnail.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/hooks/useRequest.ts
var import_react10 = require("react");
function useRequest(info, init) {
  let [state, setState] = (0, import_react10.useState)({
    state: "idle",
    data: null,
    error: null
  });
  return (0, import_react10.useEffect)(() => {
    setState({ state: "idle", data: null, error: null }), fetch(info, init).then((response) => response.json()).then((data) => {
      setState({ state: "done", data, error: null });
    }).catch((error) => {
      setState({ state: "done", data: null, error });
    });
  }, []), state;
}

// app/components/recommendedMovies.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function RecommendedMovies() {
  let { state, error, data } = useRequest("/api/recommendations");
  return state === "idle" || state === "done" && data == null && error == null ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-2xl font-bold mb-5", children: "Recommended" }, void 0, !1, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "grid grid-cols-3 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-[165px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, !1, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-[165px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, !1, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ErrorBanner, { displayText: "Recommendations error", error }, void 0, !1, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) : (data == null ? void 0 : data.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "grid grid-cols-3 gap-5", children: data == null ? void 0 : data.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      MovieThumbnail,
      {
        url: `/movies/${movie.slug}`,
        title: movie.title,
        category: movie.category,
        imageUrl: movie.imageUrl,
        releasedAt: new Date(movie.releasedAt)
      },
      void 0,
      !1,
      {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 32,
        columnNumber: 15
      },
      this
    ) }, movie.id, !1, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-neutral-500", children: "No recommendations found." }, void 0, !1, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/recommendedMovies.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_grid.movies.$slug.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader({ request: request2, params }) {
  let user = (await getSession(request2.headers.get("Cookie"))).get("user"), { slug } = params;
  if (typeof slug > "u")
    throw (0, import_node5.redirect)("/movies");
  let response = await fetch(
    // Fetch a single movie detail by its slug.
    `https://api.example.com/movies/${slug}`
  ).catch((error) => {
    throw (0, import_node5.redirect)("/movies");
  });
  if (!response.ok)
    throw (0, import_node5.redirect)("/movies");
  return {
    movie: await response.json(),
    isAuthenticated: user != null
  };
}
var meta2 = ({ data }) => [
  {
    title: `${data.movie.title} - Movie App`
  }
];
async function action({ request: request2 }) {
  let user = await requireAuthenticatedUser(request2), payload = await request2.formData(), movieId = payload.get("movieId"), reviewRating = Number(payload.get("reviewRating")), reviewText = payload.get("reviewText"), addReviewResponse = await mutate(import_graphql_request3.gql`
    mutation AddReview($author: UserInput!, $reviewInput: ReviewInput!) {
      addReview(author: $author, reviewInput: $reviewInput) {
        id
        text
        author {
          id
          firstName
          avatarUrl
        }
      }
    }
  `)({
    variables: {
      author: {
        id: user.id,
        firstName: user.firstName,
        avatarUrl: user.avatarUrl
      },
      reviewInput: {
        movieId,
        text: reviewText,
        rating: reviewRating
      }
    }
  });
  if (addReviewResponse.error)
    throw addReviewResponse.error;
  return (0, import_node5.json)(addReviewResponse.data.addReview);
}
function MovieDetailPage() {
  let { movie } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid lg:grid-cols-[350px_1fr] gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "img",
        {
          src: movie.imageUrl,
          alt: movie.title,
          className: "rounded-md shadow-lg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_grid.movies.$slug.tsx",
          lineNumber: 109,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react11.Link,
        {
          to: "./watch",
          className: "flex items-center justify-center gap-1.5 button button-primary w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_hi23.HiPlayCircle, { className: "text-xl" }, void 0, !1, {
              fileName: "app/routes/_grid.movies.$slug.tsx",
              lineNumber: 119,
              columnNumber: 13
            }, this),
            "Watch now"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_grid.movies.$slug.tsx",
          lineNumber: 115,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-4xl font-extrabold mb-3", children: movie.title }, void 0, !1, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-neutral-400", children: [
        movie.category,
        " \u2022 ",
        new Date(movie.releasedAt).getFullYear()
      ] }, void 0, !0, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "my-5", children: movie.description }, void 0, !1, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(MovieReviewsList, { movieId: movie.id }, void 0, !1, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "col-span-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RecommendedMovies, {}, void 0, !1, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid.movies.$slug.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

// app/routes/movies.$slug.watch.tsx
var movies_slug_watch_exports = {};
__export(movies_slug_watch_exports, {
  default: () => MoviePlayer,
  loader: () => loader2,
  meta: () => meta3
});
var import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_hi24 = require("react-icons/hi2"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader2({ params }) {
  let { slug } = params;
  if (!slug)
    throw (0, import_node6.redirect)("/movies");
  return {
    movie: await (await fetch(
      `https://api.example.com/movies/${slug}`
    ).catch((error) => {
      throw (0, import_node6.redirect)("/movies");
    })).json()
  };
}
function meta3({ data }) {
  let { movie } = data || {};
  if (movie == null)
    throw new Response("Missing movie", { status: 400 });
  return [
    {
      title: `${movie.title} - Movie App`
    }
  ];
}
function MoviePlayer() {
  let { movie } = (0, import_react12.useLoaderData)(), videoRef = (0, import_react13.useRef)(null), controls = useVideoControls(videoRef), navigate = (0, import_react12.useNavigate)(), mediaSourceUrl = useMediaSource(movie.slug);
  return (0, import_react13.useEffect)(() => {
    let goBackOnEscape = (event) => {
      event.key === "Escape" && navigate(`/movies/${movie.slug}`);
    };
    return document.addEventListener("keydown", goBackOnEscape), () => {
      document.removeEventListener("keydown", goBackOnEscape);
    };
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative flex items-center bg-black h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "fixed top-0 left-0 right-0 p-10 flex bg-gradient-to-b from-black via-black to-transparent z-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-6xl font-extrabold mb-8", children: movie.title }, void 0, !1, {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-neutral-500 text-2xl", children: movie.description }, void 0, !1, {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-1/2 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react12.Link,
        {
          to: `/movies/${movie.slug}`,
          className: "text-5xl opacity-50 hover:opacity-100",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_hi24.HiXCircle, {}, void 0, !1, {
            fileName: "app/routes/movies.$slug.watch.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 74,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movies.$slug.watch.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "video",
      {
        ref: videoRef,
        autoPlay: !0,
        preload: "metadata",
        className: "w-full",
        src: mediaSourceUrl
      },
      void 0,
      !1,
      {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "fixed left-0 bottom-0 right-0 p-10 flex items-center gap-10 bg-gradient-to-t from-black via-black to-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "button-primary", onClick: controls.togglePlay, children: controls.isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_hi24.HiPause, {}, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 93,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_hi24.HiPlay, {}, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 93,
        columnNumber: 49
      }, this) }, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          id: "timeline",
          type: "range",
          step: 0.1,
          min: 0,
          max: 100,
          value: controls.timeElapsed,
          className: "w-full",
          onChange: (event) => {
            controls.updateTime(event.currentTarget.valueAsNumber);
          },
          onMouseDown: () => {
            controls.pause();
          },
          onMouseUp: () => {
            controls.play();
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 96,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "timeline", hidden: !0, children: "Timeline" }, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          id: "volume",
          type: "range",
          step: 0.1,
          min: 0,
          max: 1,
          value: controls.volume,
          onChange: (event) => {
            controls.updateVolume(event.currentTarget.valueAsNumber);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 118,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "volume", hidden: !0, children: "Volume" }, void 0, !1, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movies.$slug.watch.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movies.$slug.watch.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function useMediaSource(slug) {
  let [url, setUrl] = (0, import_react13.useState)("");
  return (0, import_react13.useEffect)(() => {
    if (typeof MediaSource > "u")
      return;
    let mediaSource = new MediaSource(), mediaSourceUrl = URL.createObjectURL(mediaSource);
    setUrl(mediaSourceUrl);
    let fetchRemoteStream = async () => {
      let buffer = mediaSource.addSourceBuffer(
        'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      ), response = await fetch(
        `https://api.example.com/movies/${slug}/stream`
      );
      if (!response.body)
        return;
      if (!response.ok) {
        mediaSource.endOfStream("network");
        return;
      }
      let reader = response.body.getReader();
      async function readChunk() {
        let { value, done } = await reader.read();
        if (!done)
          return await new Promise((resolve, reject) => {
            buffer.addEventListener("updateend", resolve, { once: !0 }), buffer.addEventListener("error", reject, { once: !0 }), buffer.appendBuffer(value);
          }), readChunk();
      }
      await readChunk();
    };
    return mediaSource.addEventListener("sourceopen", fetchRemoteStream), () => {
      mediaSource.removeEventListener("sourceopen", fetchRemoteStream), mediaSource.readyState === "open" && mediaSource.endOfStream();
    };
  }, [slug]), url;
}
function useVideoControls(videoRef) {
  let [isPlaying, setIsPlaying] = (0, import_react13.useState)(!1), [timeElapsed, setTimeElapsed] = (0, import_react13.useState)(0), [volume, setVolume] = (0, import_react13.useState)(1);
  (0, import_react13.useEffect)(() => {
    let { current: player } = videoRef;
    player && (player.addEventListener("play", () => setIsPlaying(!0)), player.addEventListener("pause", () => setIsPlaying(!1)), player.addEventListener("timeupdate", () => {
      let timeElapsedPercent = Math.floor(
        (100 / player.duration || 0) * player.currentTime
      );
      setTimeElapsed(timeElapsedPercent);
    }), player.addEventListener("volumechange", () => {
      setVolume(player.volume);
    }));
  }, [videoRef]);
  let play = () => {
    var _a;
    (_a = videoRef.current) == null || _a.play();
  }, pause = () => {
    var _a;
    (_a = videoRef.current) == null || _a.pause();
  };
  return {
    isPlaying,
    timeElapsed,
    volume,
    play,
    pause,
    togglePlay: () => {
      isPlaying ? pause() : play();
    },
    updateTime: (timeElapsedPercent) => {
      let player = videoRef.current;
      if (!player)
        return;
      let nextTime = player.duration / 100 * timeElapsedPercent;
      player.currentTime = nextTime;
    },
    updateVolume: (nextVolume) => {
      let player = videoRef.current;
      player && (player.volume = nextVolume);
    }
  };
}

// app/routes/_grid.sign-in.tsx
var grid_sign_in_exports = {};
__export(grid_sign_in_exports, {
  action: () => action2,
  default: () => SignInPage,
  meta: () => meta4
});
var import_react14 = require("@remix-run/react"), import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta4 = () => [
  {
    title: "Sign in - Movie App"
  }
];
async function action2({ request: request2 }) {
  let session = await getSession(request2.headers.get("Cookie"));
  if (session.has("user"))
    return (0, import_node7.redirect)("/");
  let data = await request2.formData(), redirectUrl = data.get("redirectUrl") || "/", user = await fetch("https://auth.provider.com/validate", {
    method: "POST",
    body: data
  }).then(
    (response) => response.json(),
    () => null
  );
  return user != null && session.set("user", user), session.has("user") || session.flash("error", "Failed to sign in: invalid credentials."), session.has("user") ? (0, import_node7.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }) : (0, import_node7.redirect)("/sign-in", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
function SignInPage() {
  let { state } = (0, import_react14.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react14.Form, { method: "post", className: "space-y-5 md:max-w-sm mx-auto my-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-4xl font-extrabold mb-8 text-center", children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "redirectUrl", value: state == null ? void 0 : state.redirectUrl }, void 0, !1, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "input",
      {
        name: "email",
        type: "email",
        placeholder: "E-mail address",
        autoComplete: "email",
        className: "w-full",
        tabIndex: 1,
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_grid.sign-in.tsx",
        lineNumber: 68,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "input",
      {
        name: "password",
        type: "password",
        placeholder: "Password",
        autoComplete: "current-password",
        className: "w-full",
        tabIndex: 1,
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_grid.sign-in.tsx",
        lineNumber: 79,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { type: "submit", className: "bg-neutral-700 w-full", tabIndex: 1, children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/_grid.sign-in.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid.sign-in.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_grid.sign-in.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/_grid._index.tsx
var grid_index_exports = {};
__export(grid_index_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Homepage,
  loader: () => loader3
});
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader3() {
  return {
    featuredMovies: await fetch(
      "https://api.example.com/movies/featured"
    ).then((response) => response.json())
  };
}
function Homepage() {
  let { featuredMovies } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-4xl font-extrabold mb-10", children: "Featured movies" }, void 0, !1, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    featuredMovies.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "grid grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0px,_250px))] gap-x-6 gap-y-16", children: featuredMovies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      MovieThumbnail,
      {
        title: movie.title,
        url: `/movies/${movie.slug}`,
        category: movie.category,
        imageUrl: movie.imageUrl,
        releasedAt: new Date(movie.releasedAt)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_grid._index.tsx",
        lineNumber: 26,
        columnNumber: 15
      },
      this
    ) }, movie.id, !1, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-neutral-400", children: "No featured movies yet." }, void 0, !1, {
      fileName: "app/routes/_grid._index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid._index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react15.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ErrorBanner, { displayText: "Failed to fetch", error }, void 0, !1, {
    fileName: "app/routes/_grid._index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}

// app/routes/_grid.series.tsx
var grid_series_exports = {};
__export(grid_series_exports, {
  default: () => SeriesPage,
  meta: () => meta5
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta5 = () => [{ title: "Series - Movies App" }];
function SeriesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-4xl font-extrabold mb-10", children: "TV Series" }, void 0, !1, {
      fileName: "app/routes/_grid.series.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-neutral-400", children: 'Apply what you learn from this course to implement a "TV Series" page how you see fit!' }, void 0, !1, {
      fileName: "app/routes/_grid.series.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid.series.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/sign-out.tsx
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action3
});
var import_node8 = require("@remix-run/node");
async function action3({ request: request2 }) {
  let session = await getSession(request2.headers.get("Cookie"));
  return (0, import_node8.redirect)("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/_grid.tsx
var grid_exports = {};
__export(grid_exports, {
  default: () => GridLayout,
  loader: () => loader4,
  meta: () => meta6
});
var import_react18 = require("@remix-run/react");

// app/components/header.tsx
var import_react16 = require("@remix-run/react"), import_hi25 = require("react-icons/hi2");

// app/components/outerGrid.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function OuterGrid({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "div",
    {
      className: `grid grid-cols-[100px_1fr_0px] md:grid-cols-[300px_1fr] gap-10 ${className}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/outerGrid.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/components/header.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(OuterGrid, { className: "items-center text-neutral-400 bg-black bg-opacity-20 border-b border-neutral-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-center p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_react16.Link,
      {
        to: "/",
        className: "text-2xl outline-0 hover:opacity-60 focus:ring-4",
        children: "\u{1F37F}"
      },
      void 0,
      !1,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative flex items-center gap-1 border border-neutral-700 md:w-96 max-w-full rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_hi25.HiMagnifyingGlass, { className: "absolute top-2.5 left-2.5 text-neutral-500" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "input",
        {
          name: "search",
          className: "px-5 pl-9 py-1.5 w-full bg-transparent border-0 font-medium",
          placeholder: "Search movies..."
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/navbar.tsx
var import_react17 = require("@remix-run/react"), import_hi26 = require("react-icons/hi2");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Navbar() {
  let { user } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("nav", { className: "sticky top-0 text-neutral-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "px-6 py-10 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NavBarLink, { to: "/", icon: import_hi26.HiHome, children: "Home" }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NavBarLink, { to: "/movies", icon: import_hi26.HiTicket, children: "Movies" }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NavBarLink, { to: "/series", icon: import_hi26.HiVideoCamera, children: "TV series" }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "px-6 py-10 border-t border-neutral-800", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Avatar, { url: user.avatarUrl, alt: user.firstName }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("strong", { className: "hidden md:inline text-white", children: [
          user.firstName,
          " ",
          user.lastName
        ] }, void 0, !0, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react17.Form, { method: "post", action: "/sign-out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "flex items-center gap-4 px-4 py-3 w-full text-current hover:bg-neutral-800 hover:text-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_hi26.HiArrowRightOnRectangle, {}, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this),
            "Sign out"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 51,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NavBarLink, { to: "/sign-in", icon: import_hi26.HiArrowLeftOnRectangle, children: "Sign in" }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function NavBarLink({ icon: Icon, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react17.NavLink,
    {
      ...props,
      className: ({ isActive }) => [
        "flex items-center gap-4 px-4 py-3 font-bold rounded-md",
        "outline-0 focus:ring-4",
        isActive ? "bg-stone-700 text-white" : "hover:bg-neutral-800 hover:text-white"
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Icon, { className: "text-xl" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "hidden md:inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: props.children }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/navbar.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    this
  );
}

// app/components/footer.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("footer", { className: "border-t border-neutral-800 py-10 text-sm text-neutral-500 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "\xA9 2023 Movie App." }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_grid.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta6 = () => [
  {
    title: "Movies App"
  }
];
async function loader4({ request: request2 }) {
  return {
    user: (await getSession(request2.headers.get("Cookie"))).get("user")
  };
}
function GridLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_grid.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(OuterGrid, { className: "flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "border-r border-neutral-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Navbar, {}, void 0, !1, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "col-span-1 min-w-0 md:pr-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_grid.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_grid.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_grid.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_grid.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RN55WQAZ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HVQY2JRW.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-TT2QRQMT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-63JM5XQE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_grid": { id: "routes/_grid", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_grid-ZYAYVSI4.js", imports: ["/build/_shared/chunk-APAMIOVW.js", "/build/_shared/chunk-YDY4XXVM.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_grid._index": { id: "routes/_grid._index", parentId: "routes/_grid", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_grid._index-JCHNOALY.js", imports: ["/build/_shared/chunk-RUEUF7EI.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_grid.movies.$slug": { id: "routes/_grid.movies.$slug", parentId: "routes/_grid", path: "movies/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/_grid.movies.$slug-FCTBJXM4.js", imports: ["/build/_shared/chunk-L2YQYUIK.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-RUEUF7EI.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_grid.movies._index": { id: "routes/_grid.movies._index", parentId: "routes/_grid", path: "movies", index: !0, caseSensitive: void 0, module: "/build/routes/_grid.movies._index-QUL3QDV3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_grid.series": { id: "routes/_grid.series", parentId: "routes/_grid", path: "series", index: void 0, caseSensitive: void 0, module: "/build/routes/_grid.series-YN4A3SMN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_grid.sign-in": { id: "routes/_grid.sign-in", parentId: "routes/_grid", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/_grid.sign-in-EVITWNFI.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/movies.$slug.watch": { id: "routes/movies.$slug.watch", parentId: "root", path: "movies/:slug/watch", index: void 0, caseSensitive: void 0, module: "/build/routes/movies.$slug.watch-HV3LN5PG.js", imports: ["/build/_shared/chunk-YDY4XXVM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/sign-out": { id: "routes/sign-out", parentId: "root", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-out-HSK2T35Q.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "6d2492b0", hmr: { runtime: "/build/_shared/chunk-TT2QRQMT.js", timestamp: 1701826358198 }, url: "/build/manifest-6D2492B0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_grid.movies._index": {
    id: "routes/_grid.movies._index",
    parentId: "routes/_grid",
    path: "movies",
    index: !0,
    caseSensitive: void 0,
    module: grid_movies_index_exports
  },
  "routes/_grid.movies.$slug": {
    id: "routes/_grid.movies.$slug",
    parentId: "routes/_grid",
    path: "movies/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: grid_movies_slug_exports
  },
  "routes/movies.$slug.watch": {
    id: "routes/movies.$slug.watch",
    parentId: "root",
    path: "movies/:slug/watch",
    index: void 0,
    caseSensitive: void 0,
    module: movies_slug_watch_exports
  },
  "routes/_grid.sign-in": {
    id: "routes/_grid.sign-in",
    parentId: "routes/_grid",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: grid_sign_in_exports
  },
  "routes/_grid._index": {
    id: "routes/_grid._index",
    parentId: "routes/_grid",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: grid_index_exports
  },
  "routes/_grid.series": {
    id: "routes/_grid.series",
    parentId: "routes/_grid",
    path: "series",
    index: void 0,
    caseSensitive: void 0,
    module: grid_series_exports
  },
  "routes/sign-out": {
    id: "routes/sign-out",
    parentId: "root",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: sign_out_exports
  },
  "routes/_grid": {
    id: "routes/_grid",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: grid_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
