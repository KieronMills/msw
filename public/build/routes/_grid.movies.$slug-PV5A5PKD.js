import {
  parse,
  print
} from "/build/_shared/chunk-L2YQYUIK.js";
import {
  Avatar
} from "/build/_shared/chunk-RW6SUW26.js";
import {
  HiOutlineStar,
  HiPlayCircle,
  HiStar
} from "/build/_shared/chunk-YDY4XXVM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  ErrorBanner,
  MovieThumbnail
} from "/build/_shared/chunk-UULSYYG4.js";
import {
  Link,
  useFetcher,
  useFetchers,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-SQYBBOI6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EPYDF223.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var global = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
      }
      F.prototype = global;
      return new F();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers3(headers) {
          this.map = {};
          if (headers instanceof Headers3) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers3.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers3.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers3.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers3.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers3.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers3.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers3.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers3.prototype[Symbol.iterator] = Headers3.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers3(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers3(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers3();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers3(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers3(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request2 = new Request(input, init);
            if (request2.signal && request2.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request2.method, request2.url, true);
            if (request2.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request2.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request2.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request2.signal) {
              request2.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request2.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request2._bodyInit === "undefined" ? null : request2._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers3;
          self2.Request = Request;
          self2.Response = Response;
        }
        exports2.Headers = Headers3;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// app/routes/_grid.movies.$slug.tsx
var import_node = __toESM(require_node());

// node_modules/graphql-request/build/esm/defaultJsonSerializer.js
var defaultJsonSerializer = JSON;

// node_modules/graphql-request/build/esm/helpers.js
var uppercase = (str) => str.toUpperCase();
var HeadersInstanceToPlainObject = (headers) => {
  const o = {};
  headers.forEach((v, k) => {
    o[k] = v;
  });
  return o;
};

// node_modules/graphql-request/build/esm/parseArgs.js
var parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
  return documentOrOptions.document ? documentOrOptions : {
    document: documentOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
var parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
  return queryOrOptions.query ? queryOrOptions : {
    query: queryOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
var parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
  return documentsOrOptions.documents ? documentsOrOptions : {
    documents: documentsOrOptions,
    requestHeaders,
    signal: void 0
  };
};
var parseRequestExtendedArgs = (urlOrOptions, document, ...variablesAndRequestHeaders) => {
  const [variables, requestHeaders] = variablesAndRequestHeaders;
  return urlOrOptions.document ? urlOrOptions : {
    url: urlOrOptions,
    document,
    variables,
    requestHeaders,
    signal: void 0
  };
};

// node_modules/graphql-request/build/esm/resolveRequestDocument.js
var extractOperationName = (document) => {
  let operationName = void 0;
  const operationDefinitions = document.definitions.filter((definition) => definition.kind === `OperationDefinition`);
  if (operationDefinitions.length === 1) {
    operationName = operationDefinitions[0]?.name?.value;
  }
  return operationName;
};
var resolveRequestDocument = (document) => {
  if (typeof document === `string`) {
    let operationName2 = void 0;
    try {
      const parsedDocument = parse(document);
      operationName2 = extractOperationName(parsedDocument);
    } catch (err) {
    }
    return { query: document, operationName: operationName2 };
  }
  const operationName = extractOperationName(document);
  return { query: print(document), operationName };
};

// node_modules/graphql-request/build/esm/types.js
var ClientError = class extends Error {
  constructor(response, request2) {
    const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
      response,
      request: request2
    })}`;
    super(message);
    Object.setPrototypeOf(this, ClientError.prototype);
    this.response = response;
    this.request = request2;
    if (typeof Error.captureStackTrace === `function`) {
      Error.captureStackTrace(this, ClientError);
    }
  }
  static extractMessage(response) {
    return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
  }
};

// node_modules/graphql-request/build/esm/index.js
var CrossFetch = __toESM(require_browser_ponyfill(), 1);

// node_modules/graphql-request/build/esm/graphql-ws.js
var CONNECTION_INIT = `connection_init`;
var CONNECTION_ACK = `connection_ack`;
var PING = `ping`;
var PONG = `pong`;
var SUBSCRIBE = `subscribe`;
var NEXT = `next`;
var ERROR = `error`;
var COMPLETE = `complete`;
var GraphQLWebSocketMessage = class {
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  get payload() {
    return this._payload;
  }
  constructor(type, payload, id) {
    this._type = type;
    this._payload = payload;
    this._id = id;
  }
  get text() {
    const result = { type: this.type };
    if (this.id != null && this.id != void 0)
      result.id = this.id;
    if (this.payload != null && this.payload != void 0)
      result.payload = this.payload;
    return JSON.stringify(result);
  }
  static parse(data, f) {
    const { type, payload, id } = JSON.parse(data);
    return new GraphQLWebSocketMessage(type, f(payload), id);
  }
};
var GraphQLWebSocketClient = class {
  constructor(socket, { onInit, onAcknowledged, onPing, onPong }) {
    this.socketState = { acknowledged: false, lastRequestId: 0, subscriptions: {} };
    this.socket = socket;
    socket.addEventListener(`open`, async (e) => {
      this.socketState.acknowledged = false;
      this.socketState.subscriptions = {};
      socket.send(ConnectionInit(onInit ? await onInit() : null).text);
    });
    socket.addEventListener(`close`, (e) => {
      this.socketState.acknowledged = false;
      this.socketState.subscriptions = {};
    });
    socket.addEventListener(`error`, (e) => {
      console.error(e);
    });
    socket.addEventListener(`message`, (e) => {
      try {
        const message = parseMessage(e.data);
        switch (message.type) {
          case CONNECTION_ACK: {
            if (this.socketState.acknowledged) {
              console.warn(`Duplicate CONNECTION_ACK message ignored`);
            } else {
              this.socketState.acknowledged = true;
              if (onAcknowledged)
                onAcknowledged(message.payload);
            }
            return;
          }
          case PING: {
            if (onPing)
              onPing(message.payload).then((r) => socket.send(Pong(r).text));
            else
              socket.send(Pong(null).text);
            return;
          }
          case PONG: {
            if (onPong)
              onPong(message.payload);
            return;
          }
        }
        if (!this.socketState.acknowledged) {
          return;
        }
        if (message.id === void 0 || message.id === null || !this.socketState.subscriptions[message.id]) {
          return;
        }
        const { query, variables, subscriber } = this.socketState.subscriptions[message.id];
        switch (message.type) {
          case NEXT: {
            if (!message.payload.errors && message.payload.data) {
              subscriber.next && subscriber.next(message.payload.data);
            }
            if (message.payload.errors) {
              subscriber.error && subscriber.error(new ClientError({ ...message.payload, status: 200 }, { query, variables }));
            } else {
            }
            return;
          }
          case ERROR: {
            subscriber.error && subscriber.error(new ClientError({ errors: message.payload, status: 200 }, { query, variables }));
            return;
          }
          case COMPLETE: {
            subscriber.complete && subscriber.complete();
            delete this.socketState.subscriptions[message.id];
            return;
          }
        }
      } catch (e2) {
        console.error(e2);
        socket.close(1006);
      }
      socket.close(4400, `Unknown graphql-ws message.`);
    });
  }
  makeSubscribe(query, operationName, subscriber, variables) {
    const subscriptionId = (this.socketState.lastRequestId++).toString();
    this.socketState.subscriptions[subscriptionId] = { query, variables, subscriber };
    this.socket.send(Subscribe(subscriptionId, { query, operationName, variables }).text);
    return () => {
      this.socket.send(Complete(subscriptionId).text);
      delete this.socketState.subscriptions[subscriptionId];
    };
  }
  rawRequest(query, variables) {
    return new Promise((resolve, reject) => {
      let result;
      this.rawSubscribe(query, {
        next: (data, extensions) => result = { data, extensions },
        error: reject,
        complete: () => resolve(result)
      }, variables);
    });
  }
  request(document, variables) {
    return new Promise((resolve, reject) => {
      let result;
      this.subscribe(document, {
        next: (data) => result = data,
        error: reject,
        complete: () => resolve(result)
      }, variables);
    });
  }
  subscribe(document, subscriber, variables) {
    const { query, operationName } = resolveRequestDocument(document);
    return this.makeSubscribe(query, operationName, subscriber, variables);
  }
  rawSubscribe(query, subscriber, variables) {
    return this.makeSubscribe(query, void 0, subscriber, variables);
  }
  ping(payload) {
    this.socket.send(Ping(payload).text);
  }
  close() {
    this.socket.close(1e3);
  }
};
GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
function parseMessage(data, f = (a) => a) {
  const m = GraphQLWebSocketMessage.parse(data, f);
  return m;
}
function ConnectionInit(payload) {
  return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
  return new GraphQLWebSocketMessage(PING, payload, void 0);
}
function Pong(payload) {
  return new GraphQLWebSocketMessage(PONG, payload, void 0);
}
function Subscribe(id, payload) {
  return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
  return new GraphQLWebSocketMessage(COMPLETE, void 0, id);
}

// node_modules/graphql-request/build/esm/index.js
var resolveHeaders = (headers) => {
  let oHeaders = {};
  if (headers) {
    if (typeof Headers !== `undefined` && headers instanceof Headers || CrossFetch && CrossFetch.Headers && headers instanceof CrossFetch.Headers) {
      oHeaders = HeadersInstanceToPlainObject(headers);
    } else if (Array.isArray(headers)) {
      headers.forEach(([name, value]) => {
        if (name && value !== void 0) {
          oHeaders[name] = value;
        }
      });
    } else {
      oHeaders = headers;
    }
  }
  return oHeaders;
};
var cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
var buildRequestConfig = (params) => {
  if (!Array.isArray(params.query)) {
    const params_2 = params;
    const search = [`query=${encodeURIComponent(cleanQuery(params_2.query))}`];
    if (params.variables) {
      search.push(`variables=${encodeURIComponent(params_2.jsonSerializer.stringify(params_2.variables))}`);
    }
    if (params_2.operationName) {
      search.push(`operationName=${encodeURIComponent(params_2.operationName)}`);
    }
    return search.join(`&`);
  }
  if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) {
    throw new Error(`Cannot create query with given variable type, array expected`);
  }
  const params_ = params;
  const payload = params.query.reduce((acc, currentQuery, index) => {
    acc.push({
      query: cleanQuery(currentQuery),
      variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : void 0
    });
    return acc;
  }, []);
  return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
};
var createHttpMethodFetcher = (method) => async (params) => {
  const { url, query, variables, operationName, fetch: fetch2, fetchOptions, middleware } = params;
  const headers = { ...params.headers };
  let queryParams = ``;
  let body = void 0;
  if (method === `POST`) {
    body = createRequestBody(query, variables, operationName, fetchOptions.jsonSerializer);
    if (typeof body === `string`) {
      headers[`Content-Type`] = `application/json`;
    }
  } else {
    queryParams = buildRequestConfig({
      query,
      variables,
      operationName,
      jsonSerializer: fetchOptions.jsonSerializer ?? defaultJsonSerializer
    });
  }
  const init = {
    method,
    headers,
    body,
    ...fetchOptions
  };
  let urlResolved = url;
  let initResolved = init;
  if (middleware) {
    const result = await Promise.resolve(middleware({ ...init, url, operationName, variables }));
    const { url: urlNew, ...initNew } = result;
    urlResolved = urlNew;
    initResolved = initNew;
  }
  if (queryParams) {
    urlResolved = `${urlResolved}?${queryParams}`;
  }
  return await fetch2(urlResolved, initResolved);
};
var GraphQLClient = class {
  constructor(url, requestConfig = {}) {
    this.url = url;
    this.requestConfig = requestConfig;
    this.rawRequest = async (...args) => {
      const [queryOrOptions, variables, requestHeaders] = args;
      const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
      const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
      const { url: url2 } = this;
      if (rawRequestOptions.signal !== void 0) {
        fetchOptions.signal = rawRequestOptions.signal;
      }
      const { operationName } = resolveRequestDocument(rawRequestOptions.query);
      return makeRequest({
        url: url2,
        query: rawRequestOptions.query,
        variables: rawRequestOptions.variables,
        headers: {
          ...resolveHeaders(callOrIdentity(headers)),
          ...resolveHeaders(rawRequestOptions.requestHeaders)
        },
        operationName,
        fetch: fetch2,
        method,
        fetchOptions,
        middleware: requestMiddleware
      }).then((response) => {
        if (responseMiddleware) {
          responseMiddleware(response);
        }
        return response;
      }).catch((error) => {
        if (responseMiddleware) {
          responseMiddleware(error);
        }
        throw error;
      });
    };
  }
  async request(documentOrOptions, ...variablesAndRequestHeaders) {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (requestOptions.signal !== void 0) {
      fetchOptions.signal = requestOptions.signal;
    }
    const { query, operationName } = resolveRequestDocument(requestOptions.document);
    return makeRequest({
      url,
      query,
      variables: requestOptions.variables,
      headers: {
        ...resolveHeaders(callOrIdentity(headers)),
        ...resolveHeaders(requestOptions.requestHeaders)
      },
      operationName,
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    }).then((response) => {
      if (responseMiddleware) {
        responseMiddleware(response);
      }
      return response.data;
    }).catch((error) => {
      if (responseMiddleware) {
        responseMiddleware(error);
      }
      throw error;
    });
  }
  // prettier-ignore
  batchRequests(documentsOrOptions, requestHeaders) {
    const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
    const { headers, ...fetchOptions } = this.requestConfig;
    if (batchRequestOptions.signal !== void 0) {
      fetchOptions.signal = batchRequestOptions.signal;
    }
    const queries = batchRequestOptions.documents.map(({ document }) => resolveRequestDocument(document).query);
    const variables = batchRequestOptions.documents.map(({ variables: variables2 }) => variables2);
    return makeRequest({
      url: this.url,
      query: queries,
      // @ts-expect-error TODO reconcile batch variables into system.
      variables,
      headers: {
        ...resolveHeaders(callOrIdentity(headers)),
        ...resolveHeaders(batchRequestOptions.requestHeaders)
      },
      operationName: void 0,
      fetch: this.requestConfig.fetch ?? CrossFetch.default,
      method: this.requestConfig.method || `POST`,
      fetchOptions,
      middleware: this.requestConfig.requestMiddleware
    }).then((response) => {
      if (this.requestConfig.responseMiddleware) {
        this.requestConfig.responseMiddleware(response);
      }
      return response.data;
    }).catch((error) => {
      if (this.requestConfig.responseMiddleware) {
        this.requestConfig.responseMiddleware(error);
      }
      throw error;
    });
  }
  setHeaders(headers) {
    this.requestConfig.headers = headers;
    return this;
  }
  /**
   * Attach a header to the client. All subsequent requests will have this header.
   */
  setHeader(key, value) {
    const { headers } = this.requestConfig;
    if (headers) {
      headers[key] = value;
    } else {
      this.requestConfig.headers = { [key]: value };
    }
    return this;
  }
  /**
   * Change the client endpoint. All subsequent requests will send to this endpoint.
   */
  setEndpoint(value) {
    this.url = value;
    return this;
  }
};
var makeRequest = async (params) => {
  const { query, variables, fetchOptions } = params;
  const fetcher = createHttpMethodFetcher(uppercase(params.method ?? `post`));
  const isBatchingQuery = Array.isArray(params.query);
  const response = await fetcher(params);
  const result = await getResult(response, fetchOptions.jsonSerializer ?? defaultJsonSerializer);
  const successfullyReceivedData = Array.isArray(result) ? !result.some(({ data }) => !data) : Boolean(result.data);
  const successfullyPassedErrorPolicy = Array.isArray(result) || !result.errors || Array.isArray(result.errors) && !result.errors.length || fetchOptions.errorPolicy === `all` || fetchOptions.errorPolicy === `ignore`;
  if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
    const { errors: _, ...rest } = Array.isArray(result) ? result : result;
    const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
    const dataEnvelope = isBatchingQuery ? { data } : data;
    return {
      ...dataEnvelope,
      headers: response.headers,
      status: response.status
    };
  } else {
    const errorResult = typeof result === `string` ? {
      error: result
    } : result;
    throw new ClientError(
      // @ts-expect-error TODO
      { ...errorResult, status: response.status, headers: response.headers },
      { query, variables }
    );
  }
};
async function request(urlOrOptions, document, ...variablesAndRequestHeaders) {
  const requestOptions = parseRequestExtendedArgs(urlOrOptions, document, ...variablesAndRequestHeaders);
  const client = new GraphQLClient(requestOptions.url);
  return client.request({
    ...requestOptions
  });
}
var createRequestBody = (query, variables, operationName, jsonSerializer) => {
  const jsonSerializer_ = jsonSerializer ?? defaultJsonSerializer;
  if (!Array.isArray(query)) {
    return jsonSerializer_.stringify({ query, variables, operationName });
  }
  if (typeof variables !== `undefined` && !Array.isArray(variables)) {
    throw new Error(`Cannot create request body with given variable type, array expected`);
  }
  const payload = query.reduce((acc, currentQuery, index) => {
    acc.push({ query: currentQuery, variables: variables ? variables[index] : void 0 });
    return acc;
  }, []);
  return jsonSerializer_.stringify(payload);
};
var getResult = async (response, jsonSerializer) => {
  let contentType;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === `content-type`) {
      contentType = value;
    }
  });
  if (contentType && (contentType.toLowerCase().startsWith(`application/json`) || contentType.toLowerCase().startsWith(`application/graphql+json`) || contentType.toLowerCase().startsWith(`application/graphql-response+json`))) {
    return jsonSerializer.parse(await response.text());
  } else {
    return response.text();
  }
};
var callOrIdentity = (value) => {
  return typeof value === `function` ? value() : value;
};
var gql = (chunks, ...variables) => {
  return chunks.reduce((acc, chunk, index) => `${acc}${chunk}${index in variables ? String(variables[index]) : ``}`, ``);
};

// app/hooks/useQuery.ts
var import_react = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useQuery.ts"
  );
  import.meta.hot.lastModified = "1701808081013.4714";
}
function useQuery(query, options) {
  const [state, setState] = (0, import_react.useState)({
    loading: true,
    data: null,
    error: null
  });
  (0, import_react.useEffect)(() => {
    request({
      url: "http://localhost:3000",
      document: query,
      variables: options == null ? void 0 : options.variables
    }).then(
      (data) => {
        setState({
          loading: false,
          data,
          error: null
        });
      },
      (error) => {
        setState({
          loading: false,
          error: error.response.errors[0],
          data: null
        });
      }
    );
  }, []);
  return [
    state,
    {
      updateCache(updateFn) {
        if (!state.loading && !state.error) {
          setState({ ...state, data: updateFn(state.data) });
        }
      }
    }
  ];
}

// app/components/movieReviewsList.tsx
var import_react5 = __toESM(require_react());

// app/utils/getOptimisticData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/getOptimisticData.ts"
  );
  import.meta.hot.lastModified = "1701808081018.687";
}
function getOptimisticData(fetcher) {
  if (typeof fetcher === "undefined") {
    return;
  }
  if (fetcher.state === "idle") {
    return fetcher.data;
  }
  return;
}

// app/components/movieReviewItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movieReviewItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movieReviewItem.tsx"
  );
  import.meta.hot.lastModified = "1701808081011.6416";
}
function MovieReviewItem({
  review
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 flex gap-3 bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { url: review.author.avatarUrl, alt: review.author.firstName }, void 0, false, {
      fileName: "app/components/movieReviewItem.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: review.author.firstName }, void 0, false, {
          fileName: "app/components/movieReviewItem.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm text-neutral-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-amber-400 font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiStar, { className: "inline -mt-[0.25rem] mr-0.5 text-sm" }, void 0, false, {
              fileName: "app/components/movieReviewItem.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this),
            review.rating
          ] }, void 0, true, {
            fileName: "app/components/movieReviewItem.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-0.5", children: "/" }, void 0, false, {
            fileName: "app/components/movieReviewItem.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this),
          "5"
        ] }, void 0, true, {
          fileName: "app/components/movieReviewItem.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold" }, void 0, false, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "italic text-neutral-400", children: review.text }, void 0, false, {
        fileName: "app/components/movieReviewItem.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movieReviewItem.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/movieReviewItem.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = MovieReviewItem;
var _c;
$RefreshReg$(_c, "MovieReviewItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/movieReviewForm.tsx
var import_react3 = __toESM(require_react());

// app/components/ratingInput.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ratingInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ratingInput.tsx"
  );
  import.meta.hot.lastModified = "1701808081012.4434";
}
function RatingInput(props) {
  var _a;
  _s();
  const [internalValue, setInternalValue] = (0, import_react2.useState)((_a = props.value) != null ? _a : 0);
  const value = props.value == null ? internalValue : props.value;
  const starsCount = 5;
  const handleRatingChange = (nextRating) => {
    var _a2;
    if (props.value != null) {
      return (_a2 = props.onChange) == null ? void 0 : _a2.call(props, nextRating);
    }
    setInternalValue(nextRating);
  };
  const handleReset = (event) => {
    const nextValue = Number(event.currentTarget.value);
    setInternalValue(nextValue);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ...props, id: props.name, min: "1", max: "5", value, className: "hidden", onChange: () => {
    }, onReset: handleReset }, void 0, false, {
      fileName: "app/components/ratingInput.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: props.name, children: [
      props.label,
      ":"
    ] }, void 0, true, {
      fileName: "app/components/ratingInput.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex items-center gap-0.5", children: Array.from({
      length: starsCount
    }, (_, index) => {
      const isFilled = index < value;
      const currentStartValue = index + 1;
      if (isFilled) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HiStar, { className: "text-yellow-500", onClick: handleRatingChange.bind(null, currentStartValue) }, index, false, {
          fileName: "app/components/ratingInput.tsx",
          lineNumber: 50,
          columnNumber: 18
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HiOutlineStar, { onClick: handleRatingChange.bind(null, currentStartValue) }, index, false, {
        fileName: "app/components/ratingInput.tsx",
        lineNumber: 52,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/ratingInput.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ratingInput.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(RatingInput, "G3CX79AiU17Su+4nurDW0Qm3Wi0=");
_c2 = RatingInput;
var _c2;
$RefreshReg$(_c2, "RatingInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/movieReviewForm.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movieReviewForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movieReviewForm.tsx"
  );
  import.meta.hot.lastModified = "1701808081011.4492";
}
function MovieReviewForm({
  movieId
}) {
  _s2();
  const location = useLocation();
  const {
    isAuthenticated
  } = useLoaderData();
  const fetcher = useFetcher();
  const [rating, setRating] = (0, import_react3.useState)(0);
  const [reviewText, setReviewText] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    var _a;
    if (fetcher.state === "idle" && ((_a = fetcher.data) == null ? void 0 : _a.id)) {
      setRating(0);
      setReviewText("");
    }
  }, [fetcher.state, fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-8 md:items-center md:flex-row md:gap-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-bold mb-5", children: "Create new review" }, void 0, false, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "post", action: "?index", className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "_operation", value: "add-review", type: "hidden" }, void 0, false, {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "movieId", value: movieId, type: "hidden" }, void 0, false, {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RatingInput, { name: "reviewRating", label: "Rating", value: rating, onChange: (nextRating) => setRating(nextRating) }, void 0, false, {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { name: "reviewText", rows: 3, placeholder: "Tell us what you think...", value: reviewText, onChange: (e) => setReviewText(e.target.value) }, void 0, false, {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "bg-neutral-700", children: "Post review" }, void 0, false, {
          fileName: "app/components/movieReviewForm.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 45,
        columnNumber: 28
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "flex-grow-1 -mt-2 text-neutral-400", children: "Please sign in to review this movie." }, void 0, false, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/movieReviewForm.tsx",
        lineNumber: 54,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movieReviewForm.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/sign-in", className: "button flex-shrink-0 w-full md:w-auto", state: {
      redirectUrl: location.pathname
    }, children: "Sign in" }, void 0, false, {
      fileName: "app/components/movieReviewForm.tsx",
      lineNumber: 60,
      columnNumber: 27
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/movieReviewForm.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s2(MovieReviewForm, "NUPB1eLZxiy0DtdAjRWiK/zJfIU=", false, function() {
  return [useLocation, useLoaderData, useFetcher];
});
_c3 = MovieReviewForm;
var _c3;
$RefreshReg$(_c3, "MovieReviewForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/movieReviewsList.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movieReviewsList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movieReviewsList.tsx"
  );
  import.meta.hot.lastModified = "1701808081011.8118";
}
function MovieReviewsList({
  movieId
}) {
  var _a;
  _s3();
  const [{
    loading,
    data,
    error
  }, {
    updateCache
  }] = useQuery(gql`
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
    `, {
    variables: {
      movieId
    }
  });
  const fetchers = useFetchers();
  const pendingReview = getOptimisticData(fetchers[0]);
  (0, import_react5.useEffect)(() => {
    if (pendingReview) {
      updateCache((cache) => {
        cache.reviews.push(pendingReview);
        return cache;
      });
    }
  }, [pendingReview]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-extrabold mb-5", children: "Reviews" }, void 0, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid xl:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-[74px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, false, {
          fileName: "app/components/movieReviewsList.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-[74px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, false, {
          fileName: "app/components/movieReviewsList.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 70,
        columnNumber: 20
      }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ErrorBanner, { displayText: "Failed to fetch reviews", error }, void 0, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 73,
        columnNumber: 28
      }, this) : ((_a = data == null ? void 0 : data.reviews) == null ? void 0 : _a.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid xl:grid-cols-2 gap-5", children: data == null ? void 0 : data.reviews.map((review) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MovieReviewItem, { review }, void 0, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this) }, review.id, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 74,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 73,
        columnNumber: 122
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-neutral-500", children: "No reviews for this movie yet." }, void 0, false, {
        fileName: "app/components/movieReviewsList.tsx",
        lineNumber: 77,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-6 border border-neutral-800 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MovieReviewForm, { movieId }, void 0, false, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/movieReviewsList.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/movieReviewsList.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s3(MovieReviewsList, "SNZoC+c5DENAdNFPdie9l4oQtPI=", false, function() {
  return [useQuery, useFetchers];
});
_c4 = MovieReviewsList;
var _c4;
$RefreshReg$(_c4, "MovieReviewsList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useRequest.ts
var import_react7 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useRequest.ts"
  );
  import.meta.hot.lastModified = "1701808081013.6545";
}
function useRequest(info, init) {
  const [state, setState] = (0, import_react7.useState)({
    state: "idle",
    data: null,
    error: null
  });
  (0, import_react7.useEffect)(() => {
    setState({ state: "idle", data: null, error: null });
    fetch(info, init).then((response) => response.json()).then((data) => {
      setState({ state: "done", data, error: null });
    }).catch((error) => {
      setState({ state: "done", data: null, error });
    });
  }, []);
  return state;
}

// app/components/recommendedMovies.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/recommendedMovies.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/recommendedMovies.tsx"
  );
  import.meta.hot.lastModified = "1701808081012.635";
}
function RecommendedMovies() {
  _s4();
  const {
    state,
    error,
    data
  } = useRequest(`/api/recommendations`);
  if (state === "idle" || state === "done" && data == null && error == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-2xl font-bold mb-5", children: "Recommended" }, void 0, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "grid grid-cols-3 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[165px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, false, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[165px] bg-neutral-800 bg-opacity-50 border border-neutral-800 rounded-lg animate-placeholder" }, void 0, false, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/recommendedMovies.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 37,
      columnNumber: 30
    }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorBanner, { displayText: "Recommendations error", error }, void 0, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 44,
      columnNumber: 25
    }, this) : (data == null ? void 0 : data.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "grid grid-cols-3 gap-5", children: data == null ? void 0 : data.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MovieThumbnail, { url: `/movies/${movie.slug}`, title: movie.title, category: movie.category, imageUrl: movie.imageUrl, releasedAt: new Date(movie.releasedAt) }, void 0, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this) }, movie.id, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 45,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 44,
      columnNumber: 112
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-neutral-500", children: "No recommendations found." }, void 0, false, {
      fileName: "app/components/recommendedMovies.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/recommendedMovies.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s4(RecommendedMovies, "k4QP6xyznoTV/YV54/OwxXpypZs=", false, function() {
  return [useRequest];
});
_c5 = RecommendedMovies;
var _c5;
$RefreshReg$(_c5, "RecommendedMovies");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_grid.movies.$slug.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_grid.movies.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_grid.movies.$slug.tsx"
  );
  import.meta.hot.lastModified = "1701808081014.9324";
}
var meta = ({
  data
}) => {
  return [{
    title: `${data.movie.title} - Movie App`
  }];
};
function MovieDetailPage() {
  _s5();
  const {
    movie
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid lg:grid-cols-[350px_1fr] gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: movie.imageUrl, alt: movie.title, className: "rounded-md shadow-lg" }, void 0, false, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "./watch", className: "flex items-center justify-center gap-1.5 button button-primary w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HiPlayCircle, { className: "text-xl" }, void 0, false, {
          fileName: "app/routes/_grid.movies.$slug.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        "Watch now"
      ] }, void 0, true, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-4xl font-extrabold mb-3", children: movie.title }, void 0, false, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-neutral-400", children: [
        movie.category,
        " \u2022 ",
        new Date(movie.releasedAt).getFullYear()
      ] }, void 0, true, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "my-5", children: movie.description }, void 0, false, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MovieReviewsList, { movieId: movie.id }, void 0, false, {
        fileName: "app/routes/_grid.movies.$slug.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "col-span-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecommendedMovies, {}, void 0, false, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_grid.movies.$slug.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_grid.movies.$slug.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s5(MovieDetailPage, "IhPeJEsP8dQsDhwgBWLZpOTCtVQ=", false, function() {
  return [useLoaderData];
});
_c6 = MovieDetailPage;
var _c6;
$RefreshReg$(_c6, "MovieDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MovieDetailPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_grid.movies.$slug-PV5A5PKD.js.map
