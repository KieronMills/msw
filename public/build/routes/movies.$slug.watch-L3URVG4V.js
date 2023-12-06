import {
  HiPause,
  HiPlay,
  HiXCircle
} from "/build/_shared/chunk-YDY4XXVM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData,
  useNavigate
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/movies.$slug.watch.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/movies.$slug.watch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/movies.$slug.watch.tsx"
  );
  import.meta.hot.lastModified = "1701808081017.0247";
}
function meta({
  data
}) {
  const {
    movie
  } = data || {};
  if (movie == null) {
    throw new Response("Missing movie", {
      status: 400
    });
  }
  return [{
    title: `${movie.title} - Movie App`
  }];
}
function MoviePlayer() {
  _s();
  const {
    movie
  } = useLoaderData();
  const videoRef = (0, import_react2.useRef)(null);
  const controls = useVideoControls(videoRef);
  const navigate = useNavigate();
  const mediaSourceUrl = useMediaSource(movie.slug);
  (0, import_react2.useEffect)(() => {
    const goBackOnEscape = (event) => {
      if (event.key === "Escape") {
        navigate(`/movies/${movie.slug}`);
      }
    };
    document.addEventListener("keydown", goBackOnEscape);
    return () => {
      document.removeEventListener("keydown", goBackOnEscape);
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center bg-black h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "fixed top-0 left-0 right-0 p-10 flex bg-gradient-to-b from-black via-black to-transparent z-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl font-extrabold mb-8", children: movie.title }, void 0, false, {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-500 text-2xl", children: movie.description }, void 0, false, {
          fileName: "app/routes/movies.$slug.watch.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/movies/${movie.slug}`, className: "text-5xl opacity-50 hover:opacity-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiXCircle, {}, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/movies.$slug.watch.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { ref: videoRef, autoPlay: true, preload: "metadata", className: "w-full", src: mediaSourceUrl }, void 0, false, {
      fileName: "app/routes/movies.$slug.watch.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "fixed left-0 bottom-0 right-0 p-10 flex items-center gap-10 bg-gradient-to-t from-black via-black to-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "button-primary", onClick: controls.togglePlay, children: controls.isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiPause, {}, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 97,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiPlay, {}, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 97,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "timeline", type: "range", step: 0.1, min: 0, max: 100, value: controls.timeElapsed, className: "w-full", onChange: (event) => {
        controls.updateTime(event.currentTarget.valueAsNumber);
      }, onMouseDown: () => {
        controls.pause();
      }, onMouseUp: () => {
        controls.play();
      } }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "timeline", hidden: true, children: "Timeline" }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "volume", type: "range", step: 0.1, min: 0, max: 1, value: controls.volume, onChange: (event) => {
        controls.updateVolume(event.currentTarget.valueAsNumber);
      } }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "volume", hidden: true, children: "Volume" }, void 0, false, {
        fileName: "app/routes/movies.$slug.watch.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/movies.$slug.watch.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/movies.$slug.watch.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(MoviePlayer, "z9+i6eF59j7HJUrR+t+iCJcAkmk=", false, function() {
  return [useLoaderData, useVideoControls, useNavigate, useMediaSource];
});
_c = MoviePlayer;
function useMediaSource(slug) {
  _s2();
  const [url, setUrl] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    if (typeof MediaSource === "undefined") {
      return;
    }
    const mediaSource = new MediaSource();
    const mediaSourceUrl = URL.createObjectURL(mediaSource);
    setUrl(mediaSourceUrl);
    const fetchRemoteStream = async () => {
      const buffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
      const response = await fetch(`https://api.example.com/movies/${slug}/stream`);
      if (!response.body) {
        return;
      }
      if (!response.ok) {
        mediaSource.endOfStream("network");
        return;
      }
      const reader = response.body.getReader();
      async function readChunk() {
        const {
          value,
          done
        } = await reader.read();
        if (done) {
          return;
        }
        await new Promise((resolve, reject) => {
          buffer.addEventListener("updateend", resolve, {
            once: true
          });
          buffer.addEventListener("error", reject, {
            once: true
          });
          buffer.appendBuffer(value);
        });
        return readChunk();
      }
      await readChunk();
    };
    mediaSource.addEventListener("sourceopen", fetchRemoteStream);
    return () => {
      mediaSource.removeEventListener("sourceopen", fetchRemoteStream);
      if (mediaSource.readyState === "open") {
        mediaSource.endOfStream();
      }
    };
  }, [slug]);
  return url;
}
_s2(useMediaSource, "h+YUGVX5DsH7gM5V1u06RlVk/XQ=");
function useVideoControls(videoRef) {
  _s3();
  const [isPlaying, setIsPlaying] = (0, import_react2.useState)(false);
  const [timeElapsed, setTimeElapsed] = (0, import_react2.useState)(0);
  const [volume, setVolume] = (0, import_react2.useState)(1);
  (0, import_react2.useEffect)(() => {
    const {
      current: player
    } = videoRef;
    if (!player) {
      return;
    }
    player.addEventListener("play", () => setIsPlaying(true));
    player.addEventListener("pause", () => setIsPlaying(false));
    player.addEventListener("timeupdate", () => {
      const timeElapsedPercent = Math.floor((100 / player.duration || 0) * player.currentTime);
      setTimeElapsed(timeElapsedPercent);
    });
    player.addEventListener("volumechange", () => {
      setVolume(player.volume);
    });
  }, [videoRef]);
  const play = () => {
    var _a;
    (_a = videoRef.current) == null ? void 0 : _a.play();
  };
  const pause = () => {
    var _a;
    (_a = videoRef.current) == null ? void 0 : _a.pause();
  };
  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };
  const updateTime = (timeElapsedPercent) => {
    const player = videoRef.current;
    if (!player) {
      return;
    }
    const nextTime = player.duration / 100 * timeElapsedPercent;
    player.currentTime = nextTime;
  };
  const updateVolume = (nextVolume) => {
    const player = videoRef.current;
    if (!player) {
      return;
    }
    player.volume = nextVolume;
  };
  return {
    isPlaying,
    timeElapsed,
    volume,
    play,
    pause,
    togglePlay,
    updateTime,
    updateVolume
  };
}
_s3(useVideoControls, "4o0lh4sJe/tBmPZWAWZjQWgh0K8=");
var _c;
$RefreshReg$(_c, "MoviePlayer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MoviePlayer as default,
  meta
};
//# sourceMappingURL=/build/routes/movies.$slug.watch-L3URVG4V.js.map
