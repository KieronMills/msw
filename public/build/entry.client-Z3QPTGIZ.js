import {
  require_client
} from "/build/_shared/chunk-ZWGWGGVF.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-HVQY2JRW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-TT2QRQMT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1701823241184.196";
}
async function enableApiMocking() {
  if (false) {
    return;
  }
  const { worker } = await import("/build/_shared/browser-M7GYCDSS.js");
  await worker.start();
}
enableApiMocking().then(() => {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 26,
      columnNumber: 27
    }, this));
  });
});
//# sourceMappingURL=/build/entry.client-Z3QPTGIZ.js.map
