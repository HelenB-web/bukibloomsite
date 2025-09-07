(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = Symbol.for("react.element");
      var n3 = Symbol.for("react.portal");
      var p2 = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t2 = Symbol.for("react.provider");
      var u2 = Symbol.for("react.context");
      var v2 = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x2 = Symbol.for("react.memo");
      var y2 = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A2(a2) {
        if (null === a2 || "object" !== typeof a2) return null;
        a2 = z && a2[z] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D = {};
      function E2(a2, b3, e2) {
        this.props = a2;
        this.context = b3;
        this.refs = D;
        this.updater = e2 || B;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a2, b3) {
        if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a2, b3, "setState");
      };
      E2.prototype.forceUpdate = function(a2) {
        this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E2.prototype;
      function G(a2, b3, e2) {
        this.props = a2;
        this.context = b3;
        this.refs = D;
        this.updater = e2 || B;
      }
      var H2 = G.prototype = new F2();
      H2.constructor = G;
      C2(H2, E2.prototype);
      H2.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M(a2, b3, e2) {
        var d2, c2 = {}, k2 = null, h3 = null;
        if (null != b3) for (d2 in void 0 !== b3.ref && (h3 = b3.ref), void 0 !== b3.key && (k2 = "" + b3.key), b3) J.call(b3, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b3[d2]);
        var g2 = arguments.length - 2;
        if (1 === g2) c2.children = e2;
        else if (1 < g2) {
          for (var f3 = Array(g2), m2 = 0; m2 < g2; m2++) f3[m2] = arguments[m2 + 2];
          c2.children = f3;
        }
        if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
        return { $$typeof: l2, type: a2, key: k2, ref: h3, props: c2, _owner: K.current };
      }
      function N2(a2, b3) {
        return { $$typeof: l2, type: a2.type, key: b3, ref: a2.ref, props: a2.props, _owner: a2._owner };
      }
      function O(a2) {
        return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
      }
      function escape(a2) {
        var b3 = { "=": "=0", ":": "=2" };
        return "$" + a2.replace(/[=:]/g, function(a3) {
          return b3[a3];
        });
      }
      var P2 = /\/+/g;
      function Q2(a2, b3) {
        return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b3.toString(36);
      }
      function R(a2, b3, e2, d2, c2) {
        var k2 = typeof a2;
        if ("undefined" === k2 || "boolean" === k2) a2 = null;
        var h3 = false;
        if (null === a2) h3 = true;
        else switch (k2) {
          case "string":
          case "number":
            h3 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case l2:
              case n3:
                h3 = true;
            }
        }
        if (h3) return h3 = a2, c2 = c2(h3), a2 = "" === d2 ? "." + Q2(h3, 0) : d2, I(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P2, "$&/") + "/"), R(c2, b3, e2, "", function(a3) {
          return a3;
        })) : null != c2 && (O(c2) && (c2 = N2(c2, e2 + (!c2.key || h3 && h3.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b3.push(c2)), 1;
        h3 = 0;
        d2 = "" === d2 ? "." : d2 + ":";
        if (I(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
          k2 = a2[g2];
          var f3 = d2 + Q2(k2, g2);
          h3 += R(k2, b3, e2, f3, c2);
        }
        else if (f3 = A2(a2), "function" === typeof f3) for (a2 = f3.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f3 = d2 + Q2(k2, g2++), h3 += R(k2, b3, e2, f3, c2);
        else if ("object" === k2) throw b3 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b3 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
        return h3;
      }
      function S2(a2, b3, e2) {
        if (null == a2) return a2;
        var d2 = [], c2 = 0;
        R(a2, d2, "", "", function(a3) {
          return b3.call(e2, a3, c2++);
        });
        return d2;
      }
      function T(a2) {
        if (-1 === a2._status) {
          var b3 = a2._result;
          b3 = b3();
          b3.then(function(b4) {
            if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b4;
          }, function(b4) {
            if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b4;
          });
          -1 === a2._status && (a2._status = 0, a2._result = b3);
        }
        if (1 === a2._status) return a2._result.default;
        throw a2._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W2 = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X3() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a2, b3, e2) {
        S2(a2, function() {
          b3.apply(this, arguments);
        }, e2);
      }, count: function(a2) {
        var b3 = 0;
        S2(a2, function() {
          b3++;
        });
        return b3;
      }, toArray: function(a2) {
        return S2(a2, function(a3) {
          return a3;
        }) || [];
      }, only: function(a2) {
        if (!O(a2)) throw Error("React.Children.only expected to receive a single React element child.");
        return a2;
      } };
      exports.Component = E2;
      exports.Fragment = p2;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X3;
      exports.cloneElement = function(a2, b3, e2) {
        if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
        var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h3 = a2._owner;
        if (null != b3) {
          void 0 !== b3.ref && (k2 = b3.ref, h3 = K.current);
          void 0 !== b3.key && (c2 = "" + b3.key);
          if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
          for (f3 in b3) J.call(b3, f3) && !L2.hasOwnProperty(f3) && (d2[f3] = void 0 === b3[f3] && void 0 !== g2 ? g2[f3] : b3[f3]);
        }
        var f3 = arguments.length - 2;
        if (1 === f3) d2.children = e2;
        else if (1 < f3) {
          g2 = Array(f3);
          for (var m2 = 0; m2 < f3; m2++) g2[m2] = arguments[m2 + 2];
          d2.children = g2;
        }
        return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h3 };
      };
      exports.createContext = function(a2) {
        a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a2.Provider = { $$typeof: t2, _context: a2 };
        return a2.Consumer = a2;
      };
      exports.createElement = M;
      exports.createFactory = function(a2) {
        var b3 = M.bind(null, a2);
        b3.type = a2;
        return b3;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a2) {
        return { $$typeof: v2, render: a2 };
      };
      exports.isValidElement = O;
      exports.lazy = function(a2) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T };
      };
      exports.memo = function(a2, b3) {
        return { $$typeof: x2, type: a2, compare: void 0 === b3 ? null : b3 };
      };
      exports.startTransition = function(a2) {
        var b3 = V.transition;
        V.transition = {};
        try {
          a2();
        } finally {
          V.transition = b3;
        }
      };
      exports.unstable_act = X3;
      exports.useCallback = function(a2, b3) {
        return U.current.useCallback(a2, b3);
      };
      exports.useContext = function(a2) {
        return U.current.useContext(a2);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a2) {
        return U.current.useDeferredValue(a2);
      };
      exports.useEffect = function(a2, b3) {
        return U.current.useEffect(a2, b3);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a2, b3, e2) {
        return U.current.useImperativeHandle(a2, b3, e2);
      };
      exports.useInsertionEffect = function(a2, b3) {
        return U.current.useInsertionEffect(a2, b3);
      };
      exports.useLayoutEffect = function(a2, b3) {
        return U.current.useLayoutEffect(a2, b3);
      };
      exports.useMemo = function(a2, b3) {
        return U.current.useMemo(a2, b3);
      };
      exports.useReducer = function(a2, b3, e2) {
        return U.current.useReducer(a2, b3, e2);
      };
      exports.useRef = function(a2) {
        return U.current.useRef(a2);
      };
      exports.useState = function(a2) {
        return U.current.useState(a2);
      };
      exports.useSyncExternalStore = function(a2, b3, e2) {
        return U.current.useSyncExternalStore(a2, b3, e2);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f3(a2, b3) {
        var c2 = a2.length;
        a2.push(b3);
        a: for (; 0 < c2; ) {
          var d2 = c2 - 1 >>> 1, e2 = a2[d2];
          if (0 < g2(e2, b3)) a2[d2] = b3, a2[c2] = e2, c2 = d2;
          else break a;
        }
      }
      function h3(a2) {
        return 0 === a2.length ? null : a2[0];
      }
      function k2(a2) {
        if (0 === a2.length) return null;
        var b3 = a2[0], c2 = a2.pop();
        if (c2 !== b3) {
          a2[0] = c2;
          a: for (var d2 = 0, e2 = a2.length, w = e2 >>> 1; d2 < w; ) {
            var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n3 = m2 + 1, x2 = a2[n3];
            if (0 > g2(C2, c2)) n3 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n3] = c2, d2 = n3) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
            else if (n3 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n3] = c2, d2 = n3;
            else break a;
          }
        }
        return b3;
      }
      function g2(a2, b3) {
        var c2 = a2.sortIndex - b3.sortIndex;
        return 0 !== c2 ? c2 : a2.id - b3.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p2 = Date, q = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q;
        };
      }
      var l2;
      var p2;
      var q;
      var r = [];
      var t2 = [];
      var u2 = 1;
      var v2 = null;
      var y2 = 3;
      var z = false;
      var A2 = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a2) {
        for (var b3 = h3(t2); null !== b3; ) {
          if (null === b3.callback) k2(t2);
          else if (b3.startTime <= a2) k2(t2), b3.sortIndex = b3.expirationTime, f3(r, b3);
          else break;
          b3 = h3(t2);
        }
      }
      function H2(a2) {
        B = false;
        G(a2);
        if (!A2) if (null !== h3(r)) A2 = true, I(J);
        else {
          var b3 = h3(t2);
          null !== b3 && K(H2, b3.startTime - a2);
        }
      }
      function J(a2, b3) {
        A2 = false;
        B && (B = false, E2(L2), L2 = -1);
        z = true;
        var c2 = y2;
        try {
          G(b3);
          for (v2 = h3(r); null !== v2 && (!(v2.expirationTime > b3) || a2 && !M()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b3);
              b3 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h3(r) && k2(r);
              G(b3);
            } else k2(r);
            v2 = h3(r);
          }
          if (null !== v2) var w = true;
          else {
            var m2 = h3(t2);
            null !== m2 && K(H2, m2.startTime - b3);
            w = false;
          }
          return w;
        } finally {
          v2 = null, y2 = c2, z = false;
        }
      }
      var N2 = false;
      var O = null;
      var L2 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R() {
        if (null !== O) {
          var a2 = exports.unstable_now();
          Q2 = a2;
          var b3 = true;
          try {
            b3 = O(true, a2);
          } finally {
            b3 ? S2() : (N2 = false, O = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S2 = function() {
          U.postMessage(null);
        };
      } else S2 = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a2) {
        O = a2;
        N2 || (N2 = true, S2());
      }
      function K(a2, b3) {
        L2 = D(function() {
          a2(exports.unstable_now());
        }, b3);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a2) {
        a2.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z || (A2 = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h3(r);
      };
      exports.unstable_next = function(a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b3 = 3;
            break;
          default:
            b3 = y2;
        }
        var c2 = y2;
        y2 = b3;
        try {
          return a2();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a2, b3) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c2 = y2;
        y2 = a2;
        try {
          return b3();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_scheduleCallback = function(a2, b3, c2) {
        var d2 = exports.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a2) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a2 = { id: u2++, callback: b3, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a2.sortIndex = c2, f3(t2, a2), null === h3(r) && a2 === h3(t2) && (B ? (E2(L2), L2 = -1) : B = true, K(H2, c2 - d2))) : (a2.sortIndex = e2, f3(r, a2), A2 || z || (A2 = true, I(J)));
        return a2;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a2) {
        var b3 = y2;
        return function() {
          var c2 = y2;
          y2 = b3;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p2(a2) {
        for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b3 += "&args[]=" + encodeURIComponent(arguments[c2]);
        return "Minified React error #" + a2 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a2, b3) {
        ha(a2, b3);
        ha(a2 + "Capture", b3);
      }
      function ha(a2, b3) {
        ea[a2] = b3;
        for (a2 = 0; a2 < b3.length; a2++) da.add(b3[a2]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a2) {
        if (ja.call(ma, a2)) return true;
        if (ja.call(la, a2)) return false;
        if (ka.test(a2)) return ma[a2] = true;
        la[a2] = true;
        return false;
      }
      function pa(a2, b3, c2, d2) {
        if (null !== c2 && 0 === c2.type) return false;
        switch (typeof b3) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d2) return false;
            if (null !== c2) return !c2.acceptsBooleans;
            a2 = a2.toLowerCase().slice(0, 5);
            return "data-" !== a2 && "aria-" !== a2;
          default:
            return false;
        }
      }
      function qa(a2, b3, c2, d2) {
        if (null === b3 || "undefined" === typeof b3 || pa(a2, b3, c2, d2)) return true;
        if (d2) return false;
        if (null !== c2) switch (c2.type) {
          case 3:
            return !b3;
          case 4:
            return false === b3;
          case 5:
            return isNaN(b3);
          case 6:
            return isNaN(b3) || 1 > b3;
        }
        return false;
      }
      function v2(a2, b3, c2, d2, e2, f3, g2) {
        this.acceptsBooleans = 2 === b3 || 3 === b3 || 4 === b3;
        this.attributeName = d2;
        this.attributeNamespace = e2;
        this.mustUseProperty = c2;
        this.propertyName = a2;
        this.type = b3;
        this.sanitizeURL = f3;
        this.removeEmptyString = g2;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
        z[a2] = new v2(a2, 0, false, a2, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
        var b3 = a2[0];
        z[b3] = new v2(b3, 1, false, a2[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
        z[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
        z[a2] = new v2(a2, 2, false, a2, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
        z[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
        z[a2] = new v2(a2, 3, true, a2, null, false, false);
      });
      ["capture", "download"].forEach(function(a2) {
        z[a2] = new v2(a2, 4, false, a2, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a2) {
        z[a2] = new v2(a2, 6, false, a2, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a2) {
        z[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a2) {
        return a2[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
        var b3 = a2.replace(
          ra,
          sa
        );
        z[b3] = new v2(b3, 1, false, a2, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
        var b3 = a2.replace(ra, sa);
        z[b3] = new v2(b3, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
        var b3 = a2.replace(ra, sa);
        z[b3] = new v2(b3, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a2) {
        z[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a2) {
        z[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
      });
      function ta(a2, b3, c2, d2) {
        var e2 = z.hasOwnProperty(b3) ? z[b3] : null;
        if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b3.length) || "o" !== b3[0] && "O" !== b3[0] || "n" !== b3[1] && "N" !== b3[1]) qa(b3, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b3) && (null === c2 ? a2.removeAttribute(b3) : a2.setAttribute(b3, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b3 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b3) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b3, c2) : a2.setAttribute(b3, c2)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a2) {
        if (null === a2 || "object" !== typeof a2) return null;
        a2 = Ja && a2[Ja] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var A2 = Object.assign;
      var La;
      function Ma(a2) {
        if (void 0 === La) try {
          throw Error();
        } catch (c2) {
          var b3 = c2.stack.trim().match(/\n( *(at )?)/);
          La = b3 && b3[1] || "";
        }
        return "\n" + La + a2;
      }
      var Na = false;
      function Oa(a2, b3) {
        if (!a2 || Na) return "";
        Na = true;
        var c2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b3) if (b3 = function() {
            throw Error();
          }, Object.defineProperty(b3.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b3, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a2, [], b3);
          } else {
            try {
              b3.call();
            } catch (l2) {
              d2 = l2;
            }
            a2.call(b3.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d2 = l2;
            }
            a2();
          }
        } catch (l2) {
          if (l2 && d2 && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f3 = d2.stack.split("\n"), g2 = e2.length - 1, h3 = f3.length - 1; 1 <= g2 && 0 <= h3 && e2[g2] !== f3[h3]; ) h3--;
            for (; 1 <= g2 && 0 <= h3; g2--, h3--) if (e2[g2] !== f3[h3]) {
              if (1 !== g2 || 1 !== h3) {
                do
                  if (g2--, h3--, 0 > h3 || e2[g2] !== f3[h3]) {
                    var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                    a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                    return k2;
                  }
                while (1 <= g2 && 0 <= h3);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c2;
        }
        return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
      }
      function Pa(a2) {
        switch (a2.tag) {
          case 5:
            return Ma(a2.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a2 = Oa(a2.type, false), a2;
          case 11:
            return a2 = Oa(a2.type.render, false), a2;
          case 1:
            return a2 = Oa(a2.type, true), a2;
          default:
            return "";
        }
      }
      function Qa(a2) {
        if (null == a2) return null;
        if ("function" === typeof a2) return a2.displayName || a2.name || null;
        if ("string" === typeof a2) return a2;
        switch (a2) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a2) switch (a2.$$typeof) {
          case Ca:
            return (a2.displayName || "Context") + ".Consumer";
          case Ba:
            return (a2._context.displayName || "Context") + ".Provider";
          case Da:
            var b3 = a2.render;
            a2 = a2.displayName;
            a2 || (a2 = b3.displayName || b3.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
            return a2;
          case Ga:
            return b3 = a2.displayName || null, null !== b3 ? b3 : Qa(a2.type) || "Memo";
          case Ha:
            b3 = a2._payload;
            a2 = a2._init;
            try {
              return Qa(a2(b3));
            } catch (c2) {
            }
        }
        return null;
      }
      function Ra(a2) {
        var b3 = a2.type;
        switch (a2.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b3.displayName || "Context") + ".Consumer";
          case 10:
            return (b3._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a2 = b3.render, a2 = a2.displayName || a2.name || "", b3.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b3;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b3);
          case 8:
            return b3 === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b3) return b3.displayName || b3.name || null;
            if ("string" === typeof b3) return b3;
        }
        return null;
      }
      function Sa(a2) {
        switch (typeof a2) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a2;
          case "object":
            return a2;
          default:
            return "";
        }
      }
      function Ta(a2) {
        var b3 = a2.type;
        return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b3 || "radio" === b3);
      }
      function Ua(a2) {
        var b3 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b3), d2 = "" + a2[b3];
        if (!a2.hasOwnProperty(b3) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
          var e2 = c2.get, f3 = c2.set;
          Object.defineProperty(a2, b3, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a3) {
            d2 = "" + a3;
            f3.call(this, a3);
          } });
          Object.defineProperty(a2, b3, { enumerable: c2.enumerable });
          return { getValue: function() {
            return d2;
          }, setValue: function(a3) {
            d2 = "" + a3;
          }, stopTracking: function() {
            a2._valueTracker = null;
            delete a2[b3];
          } };
        }
      }
      function Va(a2) {
        a2._valueTracker || (a2._valueTracker = Ua(a2));
      }
      function Wa(a2) {
        if (!a2) return false;
        var b3 = a2._valueTracker;
        if (!b3) return true;
        var c2 = b3.getValue();
        var d2 = "";
        a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
        a2 = d2;
        return a2 !== c2 ? (b3.setValue(a2), true) : false;
      }
      function Xa(a2) {
        a2 = a2 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a2) return null;
        try {
          return a2.activeElement || a2.body;
        } catch (b3) {
          return a2.body;
        }
      }
      function Ya(a2, b3) {
        var c2 = b3.checked;
        return A2({}, b3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
      }
      function Za(a2, b3) {
        var c2 = null == b3.defaultValue ? "" : b3.defaultValue, d2 = null != b3.checked ? b3.checked : b3.defaultChecked;
        c2 = Sa(null != b3.value ? b3.value : c2);
        a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b3.type || "radio" === b3.type ? null != b3.checked : null != b3.value };
      }
      function ab(a2, b3) {
        b3 = b3.checked;
        null != b3 && ta(a2, "checked", b3, false);
      }
      function bb(a2, b3) {
        ab(a2, b3);
        var c2 = Sa(b3.value), d2 = b3.type;
        if (null != c2) if ("number" === d2) {
          if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
        } else a2.value !== "" + c2 && (a2.value = "" + c2);
        else if ("submit" === d2 || "reset" === d2) {
          a2.removeAttribute("value");
          return;
        }
        b3.hasOwnProperty("value") ? cb(a2, b3.type, c2) : b3.hasOwnProperty("defaultValue") && cb(a2, b3.type, Sa(b3.defaultValue));
        null == b3.checked && null != b3.defaultChecked && (a2.defaultChecked = !!b3.defaultChecked);
      }
      function db(a2, b3, c2) {
        if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
          var d2 = b3.type;
          if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b3.value && null !== b3.value)) return;
          b3 = "" + a2._wrapperState.initialValue;
          c2 || b3 === a2.value || (a2.value = b3);
          a2.defaultValue = b3;
        }
        c2 = a2.name;
        "" !== c2 && (a2.name = "");
        a2.defaultChecked = !!a2._wrapperState.initialChecked;
        "" !== c2 && (a2.name = c2);
      }
      function cb(a2, b3, c2) {
        if ("number" !== b3 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
      }
      var eb = Array.isArray;
      function fb(a2, b3, c2, d2) {
        a2 = a2.options;
        if (b3) {
          b3 = {};
          for (var e2 = 0; e2 < c2.length; e2++) b3["$" + c2[e2]] = true;
          for (c2 = 0; c2 < a2.length; c2++) e2 = b3.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
        } else {
          c2 = "" + Sa(c2);
          b3 = null;
          for (e2 = 0; e2 < a2.length; e2++) {
            if (a2[e2].value === c2) {
              a2[e2].selected = true;
              d2 && (a2[e2].defaultSelected = true);
              return;
            }
            null !== b3 || a2[e2].disabled || (b3 = a2[e2]);
          }
          null !== b3 && (b3.selected = true);
        }
      }
      function gb(a2, b3) {
        if (null != b3.dangerouslySetInnerHTML) throw Error(p2(91));
        return A2({}, b3, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
      }
      function hb(a2, b3) {
        var c2 = b3.value;
        if (null == c2) {
          c2 = b3.children;
          b3 = b3.defaultValue;
          if (null != c2) {
            if (null != b3) throw Error(p2(92));
            if (eb(c2)) {
              if (1 < c2.length) throw Error(p2(93));
              c2 = c2[0];
            }
            b3 = c2;
          }
          null == b3 && (b3 = "");
          c2 = b3;
        }
        a2._wrapperState = { initialValue: Sa(c2) };
      }
      function ib(a2, b3) {
        var c2 = Sa(b3.value), d2 = Sa(b3.defaultValue);
        null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b3.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
        null != d2 && (a2.defaultValue = "" + d2);
      }
      function jb(a2) {
        var b3 = a2.textContent;
        b3 === a2._wrapperState.initialValue && "" !== b3 && null !== b3 && (a2.value = b3);
      }
      function kb(a2) {
        switch (a2) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a2, b3) {
        return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b3) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : a2;
      }
      var mb;
      var nb = (function(a2) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b3, c2, d2, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a2(b3, c2, d2, e2);
          });
        } : a2;
      })(function(a2, b3) {
        if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b3;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
          for (b3 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
          for (; b3.firstChild; ) a2.appendChild(b3.firstChild);
        }
      });
      function ob(a2, b3) {
        if (b3) {
          var c2 = a2.firstChild;
          if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
            c2.nodeValue = b3;
            return;
          }
        }
        a2.textContent = b3;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a2) {
        qb.forEach(function(b3) {
          b3 = b3 + a2.charAt(0).toUpperCase() + a2.substring(1);
          pb[b3] = pb[a2];
        });
      });
      function rb(a2, b3, c2) {
        return null == b3 || "boolean" === typeof b3 || "" === b3 ? "" : c2 || "number" !== typeof b3 || 0 === b3 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b3).trim() : b3 + "px";
      }
      function sb(a2, b3) {
        a2 = a2.style;
        for (var c2 in b3) if (b3.hasOwnProperty(c2)) {
          var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b3[c2], d2);
          "float" === c2 && (c2 = "cssFloat");
          d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a2, b3) {
        if (b3) {
          if (tb[a2] && (null != b3.children || null != b3.dangerouslySetInnerHTML)) throw Error(p2(137, a2));
          if (null != b3.dangerouslySetInnerHTML) {
            if (null != b3.children) throw Error(p2(60));
            if ("object" !== typeof b3.dangerouslySetInnerHTML || !("__html" in b3.dangerouslySetInnerHTML)) throw Error(p2(61));
          }
          if (null != b3.style && "object" !== typeof b3.style) throw Error(p2(62));
        }
      }
      function vb(a2, b3) {
        if (-1 === a2.indexOf("-")) return "string" === typeof b3.is;
        switch (a2) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a2) {
        a2 = a2.target || a2.srcElement || window;
        a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
        return 3 === a2.nodeType ? a2.parentNode : a2;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a2) {
        if (a2 = Cb(a2)) {
          if ("function" !== typeof yb) throw Error(p2(280));
          var b3 = a2.stateNode;
          b3 && (b3 = Db(b3), yb(a2.stateNode, a2.type, b3));
        }
      }
      function Eb(a2) {
        zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
      }
      function Fb() {
        if (zb) {
          var a2 = zb, b3 = Ab;
          Ab = zb = null;
          Bb(a2);
          if (b3) for (a2 = 0; a2 < b3.length; a2++) Bb(b3[a2]);
        }
      }
      function Gb(a2, b3) {
        return a2(b3);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a2, b3, c2) {
        if (Ib) return a2(b3, c2);
        Ib = true;
        try {
          return Gb(a2, b3, c2);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a2, b3) {
        var c2 = a2.stateNode;
        if (null === c2) return null;
        var d2 = Db(c2);
        if (null === d2) return null;
        c2 = d2[b3];
        a: switch (b3) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
            a2 = !d2;
            break a;
          default:
            a2 = false;
        }
        if (a2) return null;
        if (c2 && "function" !== typeof c2) throw Error(p2(231, b3, typeof c2));
        return c2;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a2) {
        Lb = false;
      }
      var Mb;
      function Nb(a2, b3, c2, d2, e2, f3, g2, h3, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b3.apply(c2, l2);
        } catch (m2) {
          this.onError(m2);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a2) {
        Ob = true;
        Pb = a2;
      } };
      function Tb(a2, b3, c2, d2, e2, f3, g2, h3, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a2, b3, c2, d2, e2, f3, g2, h3, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p2(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a2) {
        var b3 = a2, c2 = a2;
        if (a2.alternate) for (; b3.return; ) b3 = b3.return;
        else {
          a2 = b3;
          do
            b3 = a2, 0 !== (b3.flags & 4098) && (c2 = b3.return), a2 = b3.return;
          while (a2);
        }
        return 3 === b3.tag ? c2 : null;
      }
      function Wb(a2) {
        if (13 === a2.tag) {
          var b3 = a2.memoizedState;
          null === b3 && (a2 = a2.alternate, null !== a2 && (b3 = a2.memoizedState));
          if (null !== b3) return b3.dehydrated;
        }
        return null;
      }
      function Xb(a2) {
        if (Vb(a2) !== a2) throw Error(p2(188));
      }
      function Yb(a2) {
        var b3 = a2.alternate;
        if (!b3) {
          b3 = Vb(a2);
          if (null === b3) throw Error(p2(188));
          return b3 !== a2 ? null : a2;
        }
        for (var c2 = a2, d2 = b3; ; ) {
          var e2 = c2.return;
          if (null === e2) break;
          var f3 = e2.alternate;
          if (null === f3) {
            d2 = e2.return;
            if (null !== d2) {
              c2 = d2;
              continue;
            }
            break;
          }
          if (e2.child === f3.child) {
            for (f3 = e2.child; f3; ) {
              if (f3 === c2) return Xb(e2), a2;
              if (f3 === d2) return Xb(e2), b3;
              f3 = f3.sibling;
            }
            throw Error(p2(188));
          }
          if (c2.return !== d2.return) c2 = e2, d2 = f3;
          else {
            for (var g2 = false, h3 = e2.child; h3; ) {
              if (h3 === c2) {
                g2 = true;
                c2 = e2;
                d2 = f3;
                break;
              }
              if (h3 === d2) {
                g2 = true;
                d2 = e2;
                c2 = f3;
                break;
              }
              h3 = h3.sibling;
            }
            if (!g2) {
              for (h3 = f3.child; h3; ) {
                if (h3 === c2) {
                  g2 = true;
                  c2 = f3;
                  d2 = e2;
                  break;
                }
                if (h3 === d2) {
                  g2 = true;
                  d2 = f3;
                  c2 = e2;
                  break;
                }
                h3 = h3.sibling;
              }
              if (!g2) throw Error(p2(189));
            }
          }
          if (c2.alternate !== d2) throw Error(p2(190));
        }
        if (3 !== c2.tag) throw Error(p2(188));
        return c2.stateNode.current === c2 ? a2 : b3;
      }
      function Zb(a2) {
        a2 = Yb(a2);
        return null !== a2 ? $b(a2) : null;
      }
      function $b(a2) {
        if (5 === a2.tag || 6 === a2.tag) return a2;
        for (a2 = a2.child; null !== a2; ) {
          var b3 = $b(a2);
          if (null !== b3) return b3;
          a2 = a2.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a2) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
        } catch (b3) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a2) {
        a2 >>>= 0;
        return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a2) {
        switch (a2 & -a2) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a2 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a2 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a2;
        }
      }
      function uc(a2, b3) {
        var c2 = a2.pendingLanes;
        if (0 === c2) return 0;
        var d2 = 0, e2 = a2.suspendedLanes, f3 = a2.pingedLanes, g2 = c2 & 268435455;
        if (0 !== g2) {
          var h3 = g2 & ~e2;
          0 !== h3 ? d2 = tc(h3) : (f3 &= g2, 0 !== f3 && (d2 = tc(f3)));
        } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f3 && (d2 = tc(f3));
        if (0 === d2) return 0;
        if (0 !== b3 && b3 !== d2 && 0 === (b3 & e2) && (e2 = d2 & -d2, f3 = b3 & -b3, e2 >= f3 || 16 === e2 && 0 !== (f3 & 4194240))) return b3;
        0 !== (d2 & 4) && (d2 |= c2 & 16);
        b3 = a2.entangledLanes;
        if (0 !== b3) for (a2 = a2.entanglements, b3 &= d2; 0 < b3; ) c2 = 31 - oc(b3), e2 = 1 << c2, d2 |= a2[c2], b3 &= ~e2;
        return d2;
      }
      function vc(a2, b3) {
        switch (a2) {
          case 1:
          case 2:
          case 4:
            return b3 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b3 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a2, b3) {
        for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f3 = a2.pendingLanes; 0 < f3; ) {
          var g2 = 31 - oc(f3), h3 = 1 << g2, k2 = e2[g2];
          if (-1 === k2) {
            if (0 === (h3 & c2) || 0 !== (h3 & d2)) e2[g2] = vc(h3, b3);
          } else k2 <= b3 && (a2.expiredLanes |= h3);
          f3 &= ~h3;
        }
      }
      function xc(a2) {
        a2 = a2.pendingLanes & -1073741825;
        return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a2 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a2;
      }
      function zc(a2) {
        for (var b3 = [], c2 = 0; 31 > c2; c2++) b3.push(a2);
        return b3;
      }
      function Ac(a2, b3, c2) {
        a2.pendingLanes |= b3;
        536870912 !== b3 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
        a2 = a2.eventTimes;
        b3 = 31 - oc(b3);
        a2[b3] = c2;
      }
      function Bc(a2, b3) {
        var c2 = a2.pendingLanes & ~b3;
        a2.pendingLanes = b3;
        a2.suspendedLanes = 0;
        a2.pingedLanes = 0;
        a2.expiredLanes &= b3;
        a2.mutableReadLanes &= b3;
        a2.entangledLanes &= b3;
        b3 = a2.entanglements;
        var d2 = a2.eventTimes;
        for (a2 = a2.expirationTimes; 0 < c2; ) {
          var e2 = 31 - oc(c2), f3 = 1 << e2;
          b3[e2] = 0;
          d2[e2] = -1;
          a2[e2] = -1;
          c2 &= ~f3;
        }
      }
      function Cc(a2, b3) {
        var c2 = a2.entangledLanes |= b3;
        for (a2 = a2.entanglements; c2; ) {
          var d2 = 31 - oc(c2), e2 = 1 << d2;
          e2 & b3 | a2[d2] & b3 && (a2[d2] |= b3);
          c2 &= ~e2;
        }
      }
      var C2 = 0;
      function Dc(a2) {
        a2 &= -a2;
        return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a2, b3) {
        switch (a2) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b3.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b3.pointerId);
        }
      }
      function Tc(a2, b3, c2, d2, e2, f3) {
        if (null === a2 || a2.nativeEvent !== f3) return a2 = { blockedOn: b3, domEventName: c2, eventSystemFlags: d2, nativeEvent: f3, targetContainers: [e2] }, null !== b3 && (b3 = Cb(b3), null !== b3 && Fc(b3)), a2;
        a2.eventSystemFlags |= d2;
        b3 = a2.targetContainers;
        null !== e2 && -1 === b3.indexOf(e2) && b3.push(e2);
        return a2;
      }
      function Uc(a2, b3, c2, d2, e2) {
        switch (b3) {
          case "focusin":
            return Lc = Tc(Lc, a2, b3, c2, d2, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a2, b3, c2, d2, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a2, b3, c2, d2, e2), true;
          case "pointerover":
            var f3 = e2.pointerId;
            Oc.set(f3, Tc(Oc.get(f3) || null, a2, b3, c2, d2, e2));
            return true;
          case "gotpointercapture":
            return f3 = e2.pointerId, Pc.set(f3, Tc(Pc.get(f3) || null, a2, b3, c2, d2, e2)), true;
        }
        return false;
      }
      function Vc(a2) {
        var b3 = Wc(a2.target);
        if (null !== b3) {
          var c2 = Vb(b3);
          if (null !== c2) {
            if (b3 = c2.tag, 13 === b3) {
              if (b3 = Wb(c2), null !== b3) {
                a2.blockedOn = b3;
                Ic(a2.priority, function() {
                  Gc(c2);
                });
                return;
              }
            } else if (3 === b3 && c2.stateNode.current.memoizedState.isDehydrated) {
              a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a2.blockedOn = null;
      }
      function Xc(a2) {
        if (null !== a2.blockedOn) return false;
        for (var b3 = a2.targetContainers; 0 < b3.length; ) {
          var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b3[0], a2.nativeEvent);
          if (null === c2) {
            c2 = a2.nativeEvent;
            var d2 = new c2.constructor(c2.type, c2);
            wb = d2;
            c2.target.dispatchEvent(d2);
            wb = null;
          } else return b3 = Cb(c2), null !== b3 && Fc(b3), a2.blockedOn = c2, false;
          b3.shift();
        }
        return true;
      }
      function Zc(a2, b3, c2) {
        Xc(a2) && c2.delete(b3);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a2, b3) {
        a2.blockedOn === b3 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a2) {
        function b3(b4) {
          return ad(b4, a2);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a2);
          for (var c2 = 1; c2 < Kc.length; c2++) {
            var d2 = Kc[c2];
            d2.blockedOn === a2 && (d2.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a2);
        null !== Mc && ad(Mc, a2);
        null !== Nc && ad(Nc, a2);
        Oc.forEach(b3);
        Pc.forEach(b3);
        for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
        for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a2, b3, c2, d2) {
        var e2 = C2, f3 = cd.transition;
        cd.transition = null;
        try {
          C2 = 1, fd(a2, b3, c2, d2);
        } finally {
          C2 = e2, cd.transition = f3;
        }
      }
      function gd(a2, b3, c2, d2) {
        var e2 = C2, f3 = cd.transition;
        cd.transition = null;
        try {
          C2 = 4, fd(a2, b3, c2, d2);
        } finally {
          C2 = e2, cd.transition = f3;
        }
      }
      function fd(a2, b3, c2, d2) {
        if (dd) {
          var e2 = Yc(a2, b3, c2, d2);
          if (null === e2) hd(a2, b3, d2, id, c2), Sc(a2, d2);
          else if (Uc(e2, a2, b3, c2, d2)) d2.stopPropagation();
          else if (Sc(a2, d2), b3 & 4 && -1 < Rc.indexOf(a2)) {
            for (; null !== e2; ) {
              var f3 = Cb(e2);
              null !== f3 && Ec(f3);
              f3 = Yc(a2, b3, c2, d2);
              null === f3 && hd(a2, b3, d2, id, c2);
              if (f3 === e2) break;
              e2 = f3;
            }
            null !== e2 && d2.stopPropagation();
          } else hd(a2, b3, d2, null, c2);
        }
      }
      var id = null;
      function Yc(a2, b3, c2, d2) {
        id = null;
        a2 = xb(d2);
        a2 = Wc(a2);
        if (null !== a2) if (b3 = Vb(a2), null === b3) a2 = null;
        else if (c2 = b3.tag, 13 === c2) {
          a2 = Wb(b3);
          if (null !== a2) return a2;
          a2 = null;
        } else if (3 === c2) {
          if (b3.stateNode.current.memoizedState.isDehydrated) return 3 === b3.tag ? b3.stateNode.containerInfo : null;
          a2 = null;
        } else b3 !== a2 && (a2 = null);
        id = a2;
        return null;
      }
      function jd(a2) {
        switch (a2) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a2, b3 = ld, c2 = b3.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f3 = e2.length;
        for (a2 = 0; a2 < c2 && b3[a2] === e2[a2]; a2++) ;
        var g2 = c2 - a2;
        for (d2 = 1; d2 <= g2 && b3[c2 - d2] === e2[f3 - d2]; d2++) ;
        return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
      }
      function od(a2) {
        var b3 = a2.keyCode;
        "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b3 && (a2 = 13)) : a2 = b3;
        10 === a2 && (a2 = 13);
        return 32 <= a2 || 13 === a2 ? a2 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a2) {
        function b3(b4, d2, e2, f3, g2) {
          this._reactName = b4;
          this._targetInst = e2;
          this.type = d2;
          this.nativeEvent = f3;
          this.target = g2;
          this.currentTarget = null;
          for (var c2 in a2) a2.hasOwnProperty(c2) && (b4 = a2[c2], this[c2] = b4 ? b4(f3) : f3[c2]);
          this.isDefaultPrevented = (null != f3.defaultPrevented ? f3.defaultPrevented : false === f3.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b3.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a3 = this.nativeEvent;
          a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a3 = this.nativeEvent;
          a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b3;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
        return a2.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
        return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
      }, movementX: function(a2) {
        if ("movementX" in a2) return a2.movementX;
        a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
        return wd;
      }, movementY: function(a2) {
        return "movementY" in a2 ? a2.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd, { clipboardData: function(a2) {
        return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a2) {
        var b3 = this.nativeEvent;
        return b3.getModifierState ? b3.getModifierState(a2) : (a2 = Od[a2]) ? !!b3[a2] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A2({}, ud, { key: function(a2) {
        if (a2.key) {
          var b3 = Md[a2.key] || a2.key;
          if ("Unidentified" !== b3) return b3;
        }
        return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
        return "keypress" === a2.type ? od(a2) : 0;
      }, keyCode: function(a2) {
        return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      }, which: function(a2) {
        return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad, {
        deltaX: function(a2) {
          return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
        },
        deltaY: function(a2) {
          return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be2 = null;
      ia && "documentMode" in document && (be2 = document.documentMode);
      var ce = ia && "TextEvent" in window && !be2;
      var de2 = ia && (!ae || be2 && 8 < be2 && 11 >= be2);
      var ee2 = String.fromCharCode(32);
      var fe = false;
      function ge2(a2, b3) {
        switch (a2) {
          case "keyup":
            return -1 !== $d.indexOf(b3.keyCode);
          case "keydown":
            return 229 !== b3.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a2) {
        a2 = a2.detail;
        return "object" === typeof a2 && "data" in a2 ? a2.data : null;
      }
      var ie2 = false;
      function je(a2, b3) {
        switch (a2) {
          case "compositionend":
            return he2(b3);
          case "keypress":
            if (32 !== b3.which) return null;
            fe = true;
            return ee2;
          case "textInput":
            return a2 = b3.data, a2 === ee2 && fe ? null : a2;
          default:
            return null;
        }
      }
      function ke2(a2, b3) {
        if (ie2) return "compositionend" === a2 || !ae && ge2(a2, b3) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
        switch (a2) {
          case "paste":
            return null;
          case "keypress":
            if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
              if (b3.char && 1 < b3.char.length) return b3.char;
              if (b3.which) return String.fromCharCode(b3.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b3.locale ? null : b3.data;
          default:
            return null;
        }
      }
      var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a2) {
        var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return "input" === b3 ? !!le2[a2.type] : "textarea" === b3 ? true : false;
      }
      function ne2(a2, b3, c2, d2) {
        Eb(d2);
        b3 = oe2(b3, "onChange");
        0 < b3.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b3 }));
      }
      var pe = null;
      var qe = null;
      function re2(a2) {
        se2(a2, 0);
      }
      function te2(a2) {
        var b3 = ue(a2);
        if (Wa(b3)) return a2;
      }
      function ve2(a2, b3) {
        if ("change" === a2) return b3;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae2() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a2) {
        if ("value" === a2.propertyName && te2(qe)) {
          var b3 = [];
          ne2(b3, qe, a2, xb(a2));
          Jb(re2, b3);
        }
      }
      function Ce2(a2, b3, c2) {
        "focusin" === a2 ? (Ae2(), pe = b3, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae2();
      }
      function De2(a2) {
        if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te2(qe);
      }
      function Ee2(a2, b3) {
        if ("click" === a2) return te2(b3);
      }
      function Fe(a2, b3) {
        if ("input" === a2 || "change" === a2) return te2(b3);
      }
      function Ge(a2, b3) {
        return a2 === b3 && (0 !== a2 || 1 / a2 === 1 / b3) || a2 !== a2 && b3 !== b3;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie2(a2, b3) {
        if (He(a2, b3)) return true;
        if ("object" !== typeof a2 || null === a2 || "object" !== typeof b3 || null === b3) return false;
        var c2 = Object.keys(a2), d2 = Object.keys(b3);
        if (c2.length !== d2.length) return false;
        for (d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          if (!ja.call(b3, e2) || !He(a2[e2], b3[e2])) return false;
        }
        return true;
      }
      function Je(a2) {
        for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
        return a2;
      }
      function Ke(a2, b3) {
        var c2 = Je(a2);
        a2 = 0;
        for (var d2; c2; ) {
          if (3 === c2.nodeType) {
            d2 = a2 + c2.textContent.length;
            if (a2 <= b3 && d2 >= b3) return { node: c2, offset: b3 - a2 };
            a2 = d2;
          }
          a: {
            for (; c2; ) {
              if (c2.nextSibling) {
                c2 = c2.nextSibling;
                break a;
              }
              c2 = c2.parentNode;
            }
            c2 = void 0;
          }
          c2 = Je(c2);
        }
      }
      function Le(a2, b3) {
        return a2 && b3 ? a2 === b3 ? true : a2 && 3 === a2.nodeType ? false : b3 && 3 === b3.nodeType ? Le(a2, b3.parentNode) : "contains" in a2 ? a2.contains(b3) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b3) & 16) : false : false;
      }
      function Me() {
        for (var a2 = window, b3 = Xa(); b3 instanceof a2.HTMLIFrameElement; ) {
          try {
            var c2 = "string" === typeof b3.contentWindow.location.href;
          } catch (d2) {
            c2 = false;
          }
          if (c2) a2 = b3.contentWindow;
          else break;
          b3 = Xa(a2.document);
        }
        return b3;
      }
      function Ne(a2) {
        var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return b3 && ("input" === b3 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b3 || "true" === a2.contentEditable);
      }
      function Oe2(a2) {
        var b3 = Me(), c2 = a2.focusedElem, d2 = a2.selectionRange;
        if (b3 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
          if (null !== d2 && Ne(c2)) {
            if (b3 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b3), "selectionStart" in c2) c2.selectionStart = b3, c2.selectionEnd = Math.min(a2, c2.value.length);
            else if (a2 = (b3 = c2.ownerDocument || document) && b3.defaultView || window, a2.getSelection) {
              a2 = a2.getSelection();
              var e2 = c2.textContent.length, f3 = Math.min(d2.start, e2);
              d2 = void 0 === d2.end ? f3 : Math.min(d2.end, e2);
              !a2.extend && f3 > d2 && (e2 = d2, d2 = f3, f3 = e2);
              e2 = Ke(c2, f3);
              var g2 = Ke(
                c2,
                d2
              );
              e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b3 = b3.createRange(), b3.setStart(e2.node, e2.offset), a2.removeAllRanges(), f3 > d2 ? (a2.addRange(b3), a2.extend(g2.node, g2.offset)) : (b3.setEnd(g2.node, g2.offset), a2.addRange(b3)));
            }
          }
          b3 = [];
          for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b3.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
          "function" === typeof c2.focus && c2.focus();
          for (c2 = 0; c2 < b3.length; c2++) a2 = b3[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
        }
      }
      var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re2 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue(a2, b3, c2) {
        var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
        Te2 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Ie2(Se2, d2) || (Se2 = d2, d2 = oe2(Re2, "onSelect"), 0 < d2.length && (b3 = new td("onSelect", "select", null, b3, c2), a2.push({ event: b3, listeners: d2 }), b3.target = Qe)));
      }
      function Ve(a2, b3) {
        var c2 = {};
        c2[a2.toLowerCase()] = b3.toLowerCase();
        c2["Webkit" + a2] = "webkit" + b3;
        c2["Moz" + a2] = "moz" + b3;
        return c2;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a2) {
        if (Xe[a2]) return Xe[a2];
        if (!We[a2]) return a2;
        var b3 = We[a2], c2;
        for (c2 in b3) if (b3.hasOwnProperty(c2) && c2 in Ye) return Xe[a2] = b3[c2];
        return a2;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a2, b3) {
        df.set(a2, b3);
        fa(b3, [a2]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a2, b3, c2) {
        var d2 = a2.type || "unknown-event";
        a2.currentTarget = c2;
        Ub(d2, b3, void 0, a2);
        a2.currentTarget = null;
      }
      function se2(a2, b3) {
        b3 = 0 !== (b3 & 4);
        for (var c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2[c2], e2 = d2.event;
          d2 = d2.listeners;
          a: {
            var f3 = void 0;
            if (b3) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h3 = d2[g2], k2 = h3.instance, l2 = h3.currentTarget;
              h3 = h3.listener;
              if (k2 !== f3 && e2.isPropagationStopped()) break a;
              nf(e2, h3, l2);
              f3 = k2;
            }
            else for (g2 = 0; g2 < d2.length; g2++) {
              h3 = d2[g2];
              k2 = h3.instance;
              l2 = h3.currentTarget;
              h3 = h3.listener;
              if (k2 !== f3 && e2.isPropagationStopped()) break a;
              nf(e2, h3, l2);
              f3 = k2;
            }
          }
        }
        if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
      }
      function D(a2, b3) {
        var c2 = b3[of];
        void 0 === c2 && (c2 = b3[of] = /* @__PURE__ */ new Set());
        var d2 = a2 + "__bubble";
        c2.has(d2) || (pf(b3, a2, 2, false), c2.add(d2));
      }
      function qf(a2, b3, c2) {
        var d2 = 0;
        b3 && (d2 |= 4);
        pf(c2, a2, d2, b3);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a2) {
        if (!a2[rf]) {
          a2[rf] = true;
          da.forEach(function(b4) {
            "selectionchange" !== b4 && (mf.has(b4) || qf(b4, false, a2), qf(b4, true, a2));
          });
          var b3 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
          null === b3 || b3[rf] || (b3[rf] = true, qf("selectionchange", false, b3));
        }
      }
      function pf(a2, b3, c2, d2) {
        switch (jd(b3)) {
          case 1:
            var e2 = ed;
            break;
          case 4:
            e2 = gd;
            break;
          default:
            e2 = fd;
        }
        c2 = e2.bind(null, b3, c2, a2);
        e2 = void 0;
        !Lb || "touchstart" !== b3 && "touchmove" !== b3 && "wheel" !== b3 || (e2 = true);
        d2 ? void 0 !== e2 ? a2.addEventListener(b3, c2, { capture: true, passive: e2 }) : a2.addEventListener(b3, c2, true) : void 0 !== e2 ? a2.addEventListener(b3, c2, { passive: e2 }) : a2.addEventListener(b3, c2, false);
      }
      function hd(a2, b3, c2, d2, e2) {
        var f3 = d2;
        if (0 === (b3 & 1) && 0 === (b3 & 2) && null !== d2) a: for (; ; ) {
          if (null === d2) return;
          var g2 = d2.tag;
          if (3 === g2 || 4 === g2) {
            var h3 = d2.stateNode.containerInfo;
            if (h3 === e2 || 8 === h3.nodeType && h3.parentNode === e2) break;
            if (4 === g2) for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
              }
              g2 = g2.return;
            }
            for (; null !== h3; ) {
              g2 = Wc(h3);
              if (null === g2) return;
              k2 = g2.tag;
              if (5 === k2 || 6 === k2) {
                d2 = f3 = g2;
                continue a;
              }
              h3 = h3.parentNode;
            }
          }
          d2 = d2.return;
        }
        Jb(function() {
          var d3 = f3, e3 = xb(c2), g3 = [];
          a: {
            var h4 = df.get(a2);
            if (void 0 !== h4) {
              var k3 = td, n3 = a2;
              switch (a2) {
                case "keypress":
                  if (0 === od(c2)) break a;
                case "keydown":
                case "keyup":
                  k3 = Rd;
                  break;
                case "focusin":
                  n3 = "focus";
                  k3 = Fd;
                  break;
                case "focusout":
                  n3 = "blur";
                  k3 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd;
                  break;
                case "click":
                  if (2 === c2.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k3 = Hd;
                  break;
                case cf:
                  k3 = Xd;
                  break;
                case "scroll":
                  k3 = vd;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td;
              }
              var t2 = 0 !== (b3 & 4), J = !t2 && "scroll" === a2, x2 = t2 ? null !== h4 ? h4 + "Capture" : null : h4;
              t2 = [];
              for (var w = d3, u2; null !== w; ) {
                u2 = w;
                var F2 = u2.stateNode;
                5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w, x2), null != F2 && t2.push(tf(w, F2, u2))));
                if (J) break;
                w = w.return;
              }
              0 < t2.length && (h4 = new k3(h4, n3, null, c2, e3), g3.push({ event: h4, listeners: t2 }));
            }
          }
          if (0 === (b3 & 7)) {
            a: {
              h4 = "mouseover" === a2 || "pointerover" === a2;
              k3 = "mouseout" === a2 || "pointerout" === a2;
              if (h4 && c2 !== wb && (n3 = c2.relatedTarget || c2.fromElement) && (Wc(n3) || n3[uf])) break a;
              if (k3 || h4) {
                h4 = e3.window === e3 ? e3 : (h4 = e3.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
                if (k3) {
                  if (n3 = c2.relatedTarget || c2.toElement, k3 = d3, n3 = n3 ? Wc(n3) : null, null !== n3 && (J = Vb(n3), n3 !== J || 5 !== n3.tag && 6 !== n3.tag)) n3 = null;
                } else k3 = null, n3 = d3;
                if (k3 !== n3) {
                  t2 = Bd;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w = "pointer";
                  J = null == k3 ? h4 : ue(k3);
                  u2 = null == n3 ? h4 : ue(n3);
                  h4 = new t2(F2, w + "leave", k3, c2, e3);
                  h4.target = J;
                  h4.relatedTarget = u2;
                  F2 = null;
                  Wc(e3) === d3 && (t2 = new t2(x2, w + "enter", n3, c2, e3), t2.target = u2, t2.relatedTarget = J, F2 = t2);
                  J = F2;
                  if (k3 && n3) b: {
                    t2 = k3;
                    x2 = n3;
                    w = 0;
                    for (u2 = t2; u2; u2 = vf(u2)) w++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2)) u2++;
                    for (; 0 < w - u2; ) t2 = vf(t2), w--;
                    for (; 0 < u2 - w; ) x2 = vf(x2), u2--;
                    for (; w--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                  else t2 = null;
                  null !== k3 && wf(g3, h4, k3, t2, false);
                  null !== n3 && null !== J && wf(g3, J, n3, t2, true);
                }
              }
            }
            a: {
              h4 = d3 ? ue(d3) : window;
              k3 = h4.nodeName && h4.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h4.type) var na = ve2;
              else if (me2(h4)) if (we) na = Fe;
              else {
                na = De2;
                var xa = Ce2;
              }
              else (k3 = h4.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h4.type || "radio" === h4.type) && (na = Ee2);
              if (na && (na = na(a2, d3))) {
                ne2(g3, na, c2, e3);
                break a;
              }
              xa && xa(a2, h4, d3);
              "focusout" === a2 && (xa = h4._wrapperState) && xa.controlled && "number" === h4.type && cb(h4, "number", h4.value);
            }
            xa = d3 ? ue(d3) : window;
            switch (a2) {
              case "focusin":
                if (me2(xa) || "true" === xa.contentEditable) Qe = xa, Re2 = d3, Se2 = null;
                break;
              case "focusout":
                Se2 = Re2 = Qe = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue(g3, c2, e3);
                break;
              case "selectionchange":
                if (Pe2) break;
              case "keydown":
              case "keyup":
                Ue(g3, c2, e3);
            }
            var $a;
            if (ae) b: {
              switch (a2) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie2 ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
            ba && (de2 && "ko" !== c2.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa = oe2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a2, c2) : ke2(a2, c2)) d3 = oe2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
          }
          se2(g3, b3);
        });
      }
      function tf(a2, b3, c2) {
        return { instance: a2, listener: b3, currentTarget: c2 };
      }
      function oe2(a2, b3) {
        for (var c2 = b3 + "Capture", d2 = []; null !== a2; ) {
          var e2 = a2, f3 = e2.stateNode;
          5 === e2.tag && null !== f3 && (e2 = f3, f3 = Kb(a2, c2), null != f3 && d2.unshift(tf(a2, f3, e2)), f3 = Kb(a2, b3), null != f3 && d2.push(tf(a2, f3, e2)));
          a2 = a2.return;
        }
        return d2;
      }
      function vf(a2) {
        if (null === a2) return null;
        do
          a2 = a2.return;
        while (a2 && 5 !== a2.tag);
        return a2 ? a2 : null;
      }
      function wf(a2, b3, c2, d2, e2) {
        for (var f3 = b3._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
          var h3 = c2, k2 = h3.alternate, l2 = h3.stateNode;
          if (null !== k2 && k2 === d2) break;
          5 === h3.tag && null !== l2 && (h3 = l2, e2 ? (k2 = Kb(c2, f3), null != k2 && g2.unshift(tf(c2, k2, h3))) : e2 || (k2 = Kb(c2, f3), null != k2 && g2.push(tf(c2, k2, h3))));
          c2 = c2.return;
        }
        0 !== g2.length && a2.push({ event: b3, listeners: g2 });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a2) {
        return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
      }
      function Af(a2, b3, c2) {
        b3 = zf(b3);
        if (zf(a2) !== b3 && c2) throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a2, b3) {
        return "textarea" === a2 || "noscript" === a2 || "string" === typeof b3.children || "number" === typeof b3.children || "object" === typeof b3.dangerouslySetInnerHTML && null !== b3.dangerouslySetInnerHTML && null != b3.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
        return Hf.resolve(null).then(a2).catch(If);
      } : Ff;
      function If(a2) {
        setTimeout(function() {
          throw a2;
        });
      }
      function Kf(a2, b3) {
        var c2 = b3, d2 = 0;
        do {
          var e2 = c2.nextSibling;
          a2.removeChild(c2);
          if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
            if (0 === d2) {
              a2.removeChild(e2);
              bd(b3);
              return;
            }
            d2--;
          } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
          c2 = e2;
        } while (c2);
        bd(b3);
      }
      function Lf(a2) {
        for (; null != a2; a2 = a2.nextSibling) {
          var b3 = a2.nodeType;
          if (1 === b3 || 3 === b3) break;
          if (8 === b3) {
            b3 = a2.data;
            if ("$" === b3 || "$!" === b3 || "$?" === b3) break;
            if ("/$" === b3) return null;
          }
        }
        return a2;
      }
      function Mf(a2) {
        a2 = a2.previousSibling;
        for (var b3 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("$" === c2 || "$!" === c2 || "$?" === c2) {
              if (0 === b3) return a2;
              b3--;
            } else "/$" === c2 && b3++;
          }
          a2 = a2.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a2) {
        var b3 = a2[Of];
        if (b3) return b3;
        for (var c2 = a2.parentNode; c2; ) {
          if (b3 = c2[uf] || c2[Of]) {
            c2 = b3.alternate;
            if (null !== b3.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
              if (c2 = a2[Of]) return c2;
              a2 = Mf(a2);
            }
            return b3;
          }
          a2 = c2;
          c2 = a2.parentNode;
        }
        return null;
      }
      function Cb(a2) {
        a2 = a2[Of] || a2[uf];
        return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
      }
      function ue(a2) {
        if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
        throw Error(p2(33));
      }
      function Db(a2) {
        return a2[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a2) {
        return { current: a2 };
      }
      function E2(a2) {
        0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a2, b3) {
        Tf++;
        Sf[Tf] = a2.current;
        a2.current = b3;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a2, b3) {
        var c2 = a2.type.contextTypes;
        if (!c2) return Vf;
        var d2 = a2.stateNode;
        if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b3) return d2.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f3;
        for (f3 in c2) e2[f3] = b3[f3];
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b3, a2.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a2) {
        a2 = a2.childContextTypes;
        return null !== a2 && void 0 !== a2;
      }
      function $f() {
        E2(Wf);
        E2(H2);
      }
      function ag(a2, b3, c2) {
        if (H2.current !== Vf) throw Error(p2(168));
        G(H2, b3);
        G(Wf, c2);
      }
      function bg(a2, b3, c2) {
        var d2 = a2.stateNode;
        b3 = b3.childContextTypes;
        if ("function" !== typeof d2.getChildContext) return c2;
        d2 = d2.getChildContext();
        for (var e2 in d2) if (!(e2 in b3)) throw Error(p2(108, Ra(a2) || "Unknown", e2));
        return A2({}, c2, d2);
      }
      function cg(a2) {
        a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G(H2, a2);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a2, b3, c2) {
        var d2 = a2.stateNode;
        if (!d2) throw Error(p2(169));
        c2 ? (a2 = bg(a2, b3, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G(H2, a2)) : E2(Wf);
        G(Wf, c2);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a2) {
        null === eg ? eg = [a2] : eg.push(a2);
      }
      function ig(a2) {
        fg = true;
        hg(a2);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a2 = 0, b3 = C2;
          try {
            var c2 = eg;
            for (C2 = 1; a2 < c2.length; a2++) {
              var d2 = c2[a2];
              do
                d2 = d2(true);
              while (null !== d2);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
          } finally {
            C2 = b3, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a2, b3) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a2;
        ng = b3;
      }
      function ug(a2, b3, c2) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a2;
        var d2 = rg;
        a2 = sg;
        var e2 = 32 - oc(d2) - 1;
        d2 &= ~(1 << e2);
        c2 += 1;
        var f3 = 32 - oc(b3) + e2;
        if (30 < f3) {
          var g2 = e2 - e2 % 5;
          f3 = (d2 & (1 << g2) - 1).toString(32);
          d2 >>= g2;
          e2 -= g2;
          rg = 1 << 32 - oc(b3) + e2 | c2 << e2 | d2;
          sg = f3 + a2;
        } else rg = 1 << f3 | c2 << e2 | d2, sg = a2;
      }
      function vg(a2) {
        null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
      }
      function wg(a2) {
        for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a2, b3) {
        var c2 = Bg(5, null, null, 0);
        c2.elementType = "DELETED";
        c2.stateNode = b3;
        c2.return = a2;
        b3 = a2.deletions;
        null === b3 ? (a2.deletions = [c2], a2.flags |= 16) : b3.push(c2);
      }
      function Cg(a2, b3) {
        switch (a2.tag) {
          case 5:
            var c2 = a2.type;
            b3 = 1 !== b3.nodeType || c2.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
            return null !== b3 ? (a2.stateNode = b3, xg = a2, yg = Lf(b3.firstChild), true) : false;
          case 6:
            return b3 = "" === a2.pendingProps || 3 !== b3.nodeType ? null : b3, null !== b3 ? (a2.stateNode = b3, xg = a2, yg = null, true) : false;
          case 13:
            return b3 = 8 !== b3.nodeType ? null : b3, null !== b3 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b3, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b3, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a2) {
        return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
      }
      function Eg(a2) {
        if (I) {
          var b3 = yg;
          if (b3) {
            var c2 = b3;
            if (!Cg(a2, b3)) {
              if (Dg(a2)) throw Error(p2(418));
              b3 = Lf(c2.nextSibling);
              var d2 = xg;
              b3 && Cg(a2, b3) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I = false, xg = a2);
            }
          } else {
            if (Dg(a2)) throw Error(p2(418));
            a2.flags = a2.flags & -4097 | 2;
            I = false;
            xg = a2;
          }
        }
      }
      function Fg(a2) {
        for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
        xg = a2;
      }
      function Gg(a2) {
        if (a2 !== xg) return false;
        if (!I) return Fg(a2), I = true, false;
        var b3;
        (b3 = 3 !== a2.tag) && !(b3 = 5 !== a2.tag) && (b3 = a2.type, b3 = "head" !== b3 && "body" !== b3 && !Ef(a2.type, a2.memoizedProps));
        if (b3 && (b3 = yg)) {
          if (Dg(a2)) throw Hg(), Error(p2(418));
          for (; b3; ) Ag(a2, b3), b3 = Lf(b3.nextSibling);
        }
        Fg(a2);
        if (13 === a2.tag) {
          a2 = a2.memoizedState;
          a2 = null !== a2 ? a2.dehydrated : null;
          if (!a2) throw Error(p2(317));
          a: {
            a2 = a2.nextSibling;
            for (b3 = 0; a2; ) {
              if (8 === a2.nodeType) {
                var c2 = a2.data;
                if ("/$" === c2) {
                  if (0 === b3) {
                    yg = Lf(a2.nextSibling);
                    break a;
                  }
                  b3--;
                } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b3++;
              }
              a2 = a2.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a2) {
        null === zg ? zg = [a2] : zg.push(a2);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a2, b3, c2) {
        a2 = c2.ref;
        if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
          if (c2._owner) {
            c2 = c2._owner;
            if (c2) {
              if (1 !== c2.tag) throw Error(p2(309));
              var d2 = c2.stateNode;
            }
            if (!d2) throw Error(p2(147, a2));
            var e2 = d2, f3 = "" + a2;
            if (null !== b3 && null !== b3.ref && "function" === typeof b3.ref && b3.ref._stringRef === f3) return b3.ref;
            b3 = function(a3) {
              var b4 = e2.refs;
              null === a3 ? delete b4[f3] : b4[f3] = a3;
            };
            b3._stringRef = f3;
            return b3;
          }
          if ("string" !== typeof a2) throw Error(p2(284));
          if (!c2._owner) throw Error(p2(290, a2));
        }
        return a2;
      }
      function Mg(a2, b3) {
        a2 = Object.prototype.toString.call(b3);
        throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b3).join(", ") + "}" : a2));
      }
      function Ng(a2) {
        var b3 = a2._init;
        return b3(a2._payload);
      }
      function Og(a2) {
        function b3(b4, c3) {
          if (a2) {
            var d3 = b4.deletions;
            null === d3 ? (b4.deletions = [c3], b4.flags |= 16) : d3.push(c3);
          }
        }
        function c2(c3, d3) {
          if (!a2) return null;
          for (; null !== d3; ) b3(c3, d3), d3 = d3.sibling;
          return null;
        }
        function d2(a3, b4) {
          for (a3 = /* @__PURE__ */ new Map(); null !== b4; ) null !== b4.key ? a3.set(b4.key, b4) : a3.set(b4.index, b4), b4 = b4.sibling;
          return a3;
        }
        function e2(a3, b4) {
          a3 = Pg(a3, b4);
          a3.index = 0;
          a3.sibling = null;
          return a3;
        }
        function f3(b4, c3, d3) {
          b4.index = d3;
          if (!a2) return b4.flags |= 1048576, c3;
          d3 = b4.alternate;
          if (null !== d3) return d3 = d3.index, d3 < c3 ? (b4.flags |= 2, c3) : d3;
          b4.flags |= 2;
          return c3;
        }
        function g2(b4) {
          a2 && null === b4.alternate && (b4.flags |= 2);
          return b4;
        }
        function h3(a3, b4, c3, d3) {
          if (null === b4 || 6 !== b4.tag) return b4 = Qg(c3, a3.mode, d3), b4.return = a3, b4;
          b4 = e2(b4, c3);
          b4.return = a3;
          return b4;
        }
        function k2(a3, b4, c3, d3) {
          var f4 = c3.type;
          if (f4 === ya) return m2(a3, b4, c3.props.children, d3, c3.key);
          if (null !== b4 && (b4.elementType === f4 || "object" === typeof f4 && null !== f4 && f4.$$typeof === Ha && Ng(f4) === b4.type)) return d3 = e2(b4, c3.props), d3.ref = Lg(a3, b4, c3), d3.return = a3, d3;
          d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
          d3.ref = Lg(a3, b4, c3);
          d3.return = a3;
          return d3;
        }
        function l2(a3, b4, c3, d3) {
          if (null === b4 || 4 !== b4.tag || b4.stateNode.containerInfo !== c3.containerInfo || b4.stateNode.implementation !== c3.implementation) return b4 = Sg(c3, a3.mode, d3), b4.return = a3, b4;
          b4 = e2(b4, c3.children || []);
          b4.return = a3;
          return b4;
        }
        function m2(a3, b4, c3, d3, f4) {
          if (null === b4 || 7 !== b4.tag) return b4 = Tg(c3, a3.mode, d3, f4), b4.return = a3, b4;
          b4 = e2(b4, c3);
          b4.return = a3;
          return b4;
        }
        function q(a3, b4, c3) {
          if ("string" === typeof b4 && "" !== b4 || "number" === typeof b4) return b4 = Qg("" + b4, a3.mode, c3), b4.return = a3, b4;
          if ("object" === typeof b4 && null !== b4) {
            switch (b4.$$typeof) {
              case va:
                return c3 = Rg(b4.type, b4.key, b4.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b4), c3.return = a3, c3;
              case wa:
                return b4 = Sg(b4, a3.mode, c3), b4.return = a3, b4;
              case Ha:
                var d3 = b4._init;
                return q(a3, d3(b4._payload), c3);
            }
            if (eb(b4) || Ka(b4)) return b4 = Tg(b4, a3.mode, c3, null), b4.return = a3, b4;
            Mg(a3, b4);
          }
          return null;
        }
        function r(a3, b4, c3, d3) {
          var e3 = null !== b4 ? b4.key : null;
          if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h3(a3, b4, "" + c3, d3);
          if ("object" === typeof c3 && null !== c3) {
            switch (c3.$$typeof) {
              case va:
                return c3.key === e3 ? k2(a3, b4, c3, d3) : null;
              case wa:
                return c3.key === e3 ? l2(a3, b4, c3, d3) : null;
              case Ha:
                return e3 = c3._init, r(
                  a3,
                  b4,
                  e3(c3._payload),
                  d3
                );
            }
            if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b4, c3, d3, null);
            Mg(a3, c3);
          }
          return null;
        }
        function y2(a3, b4, c3, d3, e3) {
          if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h3(b4, a3, "" + d3, e3);
          if ("object" === typeof d3 && null !== d3) {
            switch (d3.$$typeof) {
              case va:
                return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b4, a3, d3, e3);
              case wa:
                return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b4, a3, d3, e3);
              case Ha:
                var f4 = d3._init;
                return y2(a3, b4, c3, f4(d3._payload), e3);
            }
            if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b4, a3, d3, e3, null);
            Mg(b4, d3);
          }
          return null;
        }
        function n3(e3, g3, h4, k3) {
          for (var l3 = null, m3 = null, u2 = g3, w = g3 = 0, x2 = null; null !== u2 && w < h4.length; w++) {
            u2.index > w ? (x2 = u2, u2 = null) : x2 = u2.sibling;
            var n4 = r(e3, u2, h4[w], k3);
            if (null === n4) {
              null === u2 && (u2 = x2);
              break;
            }
            a2 && u2 && null === n4.alternate && b3(e3, u2);
            g3 = f3(n4, g3, w);
            null === m3 ? l3 = n4 : m3.sibling = n4;
            m3 = n4;
            u2 = x2;
          }
          if (w === h4.length) return c2(e3, u2), I && tg(e3, w), l3;
          if (null === u2) {
            for (; w < h4.length; w++) u2 = q(e3, h4[w], k3), null !== u2 && (g3 = f3(u2, g3, w), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
            I && tg(e3, w);
            return l3;
          }
          for (u2 = d2(e3, u2); w < h4.length; w++) x2 = y2(u2, e3, w, h4[w], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w : x2.key), g3 = f3(x2, g3, w), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
          a2 && u2.forEach(function(a3) {
            return b3(e3, a3);
          });
          I && tg(e3, w);
          return l3;
        }
        function t2(e3, g3, h4, k3) {
          var l3 = Ka(h4);
          if ("function" !== typeof l3) throw Error(p2(150));
          h4 = l3.call(h4);
          if (null == h4) throw Error(p2(151));
          for (var u2 = l3 = null, m3 = g3, w = g3 = 0, x2 = null, n4 = h4.next(); null !== m3 && !n4.done; w++, n4 = h4.next()) {
            m3.index > w ? (x2 = m3, m3 = null) : x2 = m3.sibling;
            var t3 = r(e3, m3, n4.value, k3);
            if (null === t3) {
              null === m3 && (m3 = x2);
              break;
            }
            a2 && m3 && null === t3.alternate && b3(e3, m3);
            g3 = f3(t3, g3, w);
            null === u2 ? l3 = t3 : u2.sibling = t3;
            u2 = t3;
            m3 = x2;
          }
          if (n4.done) return c2(
            e3,
            m3
          ), I && tg(e3, w), l3;
          if (null === m3) {
            for (; !n4.done; w++, n4 = h4.next()) n4 = q(e3, n4.value, k3), null !== n4 && (g3 = f3(n4, g3, w), null === u2 ? l3 = n4 : u2.sibling = n4, u2 = n4);
            I && tg(e3, w);
            return l3;
          }
          for (m3 = d2(e3, m3); !n4.done; w++, n4 = h4.next()) n4 = y2(m3, e3, w, n4.value, k3), null !== n4 && (a2 && null !== n4.alternate && m3.delete(null === n4.key ? w : n4.key), g3 = f3(n4, g3, w), null === u2 ? l3 = n4 : u2.sibling = n4, u2 = n4);
          a2 && m3.forEach(function(a3) {
            return b3(e3, a3);
          });
          I && tg(e3, w);
          return l3;
        }
        function J(a3, d3, f4, h4) {
          "object" === typeof f4 && null !== f4 && f4.type === ya && null === f4.key && (f4 = f4.props.children);
          if ("object" === typeof f4 && null !== f4) {
            switch (f4.$$typeof) {
              case va:
                a: {
                  for (var k3 = f4.key, l3 = d3; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f4.type;
                      if (k3 === ya) {
                        if (7 === l3.tag) {
                          c2(a3, l3.sibling);
                          d3 = e2(l3, f4.props.children);
                          d3.return = a3;
                          a3 = d3;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                        c2(a3, l3.sibling);
                        d3 = e2(l3, f4.props);
                        d3.ref = Lg(a3, l3, f4);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      }
                      c2(a3, l3);
                      break;
                    } else b3(a3, l3);
                    l3 = l3.sibling;
                  }
                  f4.type === ya ? (d3 = Tg(f4.props.children, a3.mode, h4, f4.key), d3.return = a3, a3 = d3) : (h4 = Rg(f4.type, f4.key, f4.props, null, a3.mode, h4), h4.ref = Lg(a3, d3, f4), h4.return = a3, a3 = h4);
                }
                return g2(a3);
              case wa:
                a: {
                  for (l3 = f4.key; null !== d3; ) {
                    if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f4.containerInfo && d3.stateNode.implementation === f4.implementation) {
                      c2(a3, d3.sibling);
                      d3 = e2(d3, f4.children || []);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    } else {
                      c2(a3, d3);
                      break;
                    }
                    else b3(a3, d3);
                    d3 = d3.sibling;
                  }
                  d3 = Sg(f4, a3.mode, h4);
                  d3.return = a3;
                  a3 = d3;
                }
                return g2(a3);
              case Ha:
                return l3 = f4._init, J(a3, d3, l3(f4._payload), h4);
            }
            if (eb(f4)) return n3(a3, d3, f4, h4);
            if (Ka(f4)) return t2(a3, d3, f4, h4);
            Mg(a3, f4);
          }
          return "string" === typeof f4 && "" !== f4 || "number" === typeof f4 ? (f4 = "" + f4, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f4), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f4, a3.mode, h4), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a2) {
        var b3 = Wg.current;
        E2(Wg);
        a2._currentValue = b3;
      }
      function bh(a2, b3, c2) {
        for (; null !== a2; ) {
          var d2 = a2.alternate;
          (a2.childLanes & b3) !== b3 ? (a2.childLanes |= b3, null !== d2 && (d2.childLanes |= b3)) : null !== d2 && (d2.childLanes & b3) !== b3 && (d2.childLanes |= b3);
          if (a2 === c2) break;
          a2 = a2.return;
        }
      }
      function ch(a2, b3) {
        Xg = a2;
        Zg = Yg = null;
        a2 = a2.dependencies;
        null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b3) && (dh = true), a2.firstContext = null);
      }
      function eh(a2) {
        var b3 = a2._currentValue;
        if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b3, next: null }, null === Yg) {
          if (null === Xg) throw Error(p2(308));
          Yg = a2;
          Xg.dependencies = { lanes: 0, firstContext: a2 };
        } else Yg = Yg.next = a2;
        return b3;
      }
      var fh = null;
      function gh(a2) {
        null === fh ? fh = [a2] : fh.push(a2);
      }
      function hh(a2, b3, c2, d2) {
        var e2 = b3.interleaved;
        null === e2 ? (c2.next = c2, gh(b3)) : (c2.next = e2.next, e2.next = c2);
        b3.interleaved = c2;
        return ih(a2, d2);
      }
      function ih(a2, b3) {
        a2.lanes |= b3;
        var c2 = a2.alternate;
        null !== c2 && (c2.lanes |= b3);
        c2 = a2;
        for (a2 = a2.return; null !== a2; ) a2.childLanes |= b3, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b3), c2 = a2, a2 = a2.return;
        return 3 === c2.tag ? c2.stateNode : null;
      }
      var jh = false;
      function kh(a2) {
        a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a2, b3) {
        a2 = a2.updateQueue;
        b3.updateQueue === a2 && (b3.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
      }
      function mh(a2, b3) {
        return { eventTime: a2, lane: b3, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a2, b3, c2) {
        var d2 = a2.updateQueue;
        if (null === d2) return null;
        d2 = d2.shared;
        if (0 !== (K & 2)) {
          var e2 = d2.pending;
          null === e2 ? b3.next = b3 : (b3.next = e2.next, e2.next = b3);
          d2.pending = b3;
          return ih(a2, c2);
        }
        e2 = d2.interleaved;
        null === e2 ? (b3.next = b3, gh(d2)) : (b3.next = e2.next, e2.next = b3);
        d2.interleaved = b3;
        return ih(a2, c2);
      }
      function oh(a2, b3, c2) {
        b3 = b3.updateQueue;
        if (null !== b3 && (b3 = b3.shared, 0 !== (c2 & 4194240))) {
          var d2 = b3.lanes;
          d2 &= a2.pendingLanes;
          c2 |= d2;
          b3.lanes = c2;
          Cc(a2, c2);
        }
      }
      function ph(a2, b3) {
        var c2 = a2.updateQueue, d2 = a2.alternate;
        if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
          var e2 = null, f3 = null;
          c2 = c2.firstBaseUpdate;
          if (null !== c2) {
            do {
              var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
              null === f3 ? e2 = f3 = g2 : f3 = f3.next = g2;
              c2 = c2.next;
            } while (null !== c2);
            null === f3 ? e2 = f3 = b3 : f3 = f3.next = b3;
          } else e2 = f3 = b3;
          c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f3, shared: d2.shared, effects: d2.effects };
          a2.updateQueue = c2;
          return;
        }
        a2 = c2.lastBaseUpdate;
        null === a2 ? c2.firstBaseUpdate = b3 : a2.next = b3;
        c2.lastBaseUpdate = b3;
      }
      function qh(a2, b3, c2, d2) {
        var e2 = a2.updateQueue;
        jh = false;
        var f3 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h3 = e2.shared.pending;
        if (null !== h3) {
          e2.shared.pending = null;
          var k2 = h3, l2 = k2.next;
          k2.next = null;
          null === g2 ? f3 = l2 : g2.next = l2;
          g2 = k2;
          var m2 = a2.alternate;
          null !== m2 && (m2 = m2.updateQueue, h3 = m2.lastBaseUpdate, h3 !== g2 && (null === h3 ? m2.firstBaseUpdate = l2 : h3.next = l2, m2.lastBaseUpdate = k2));
        }
        if (null !== f3) {
          var q = e2.baseState;
          g2 = 0;
          m2 = l2 = k2 = null;
          h3 = f3;
          do {
            var r = h3.lane, y2 = h3.eventTime;
            if ((d2 & r) === r) {
              null !== m2 && (m2 = m2.next = {
                eventTime: y2,
                lane: 0,
                tag: h3.tag,
                payload: h3.payload,
                callback: h3.callback,
                next: null
              });
              a: {
                var n3 = a2, t2 = h3;
                r = b3;
                y2 = c2;
                switch (t2.tag) {
                  case 1:
                    n3 = t2.payload;
                    if ("function" === typeof n3) {
                      q = n3.call(y2, q, r);
                      break a;
                    }
                    q = n3;
                    break a;
                  case 3:
                    n3.flags = n3.flags & -65537 | 128;
                  case 0:
                    n3 = t2.payload;
                    r = "function" === typeof n3 ? n3.call(y2, q, r) : n3;
                    if (null === r || void 0 === r) break a;
                    q = A2({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h3.callback && 0 !== h3.lane && (a2.flags |= 64, r = e2.effects, null === r ? e2.effects = [h3] : r.push(h3));
            } else y2 = { eventTime: y2, lane: r, tag: h3.tag, payload: h3.payload, callback: h3.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q) : m2 = m2.next = y2, g2 |= r;
            h3 = h3.next;
            if (null === h3) if (h3 = e2.shared.pending, null === h3) break;
            else r = h3, h3 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m2 && (k2 = q);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m2;
          b3 = e2.shared.interleaved;
          if (null !== b3) {
            e2 = b3;
            do
              g2 |= e2.lane, e2 = e2.next;
            while (e2 !== b3);
          } else null === f3 && (e2.shared.lanes = 0);
          rh |= g2;
          a2.lanes = g2;
          a2.memoizedState = q;
        }
      }
      function sh(a2, b3, c2) {
        a2 = b3.effects;
        b3.effects = null;
        if (null !== a2) for (b3 = 0; b3 < a2.length; b3++) {
          var d2 = a2[b3], e2 = d2.callback;
          if (null !== e2) {
            d2.callback = null;
            d2 = c2;
            if ("function" !== typeof e2) throw Error(p2(191, e2));
            e2.call(d2);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a2) {
        if (a2 === th) throw Error(p2(174));
        return a2;
      }
      function yh(a2, b3) {
        G(wh, b3);
        G(vh, a2);
        G(uh, th);
        a2 = b3.nodeType;
        switch (a2) {
          case 9:
          case 11:
            b3 = (b3 = b3.documentElement) ? b3.namespaceURI : lb(null, "");
            break;
          default:
            a2 = 8 === a2 ? b3.parentNode : b3, b3 = a2.namespaceURI || null, a2 = a2.tagName, b3 = lb(b3, a2);
        }
        E2(uh);
        G(uh, b3);
      }
      function zh() {
        E2(uh);
        E2(vh);
        E2(wh);
      }
      function Ah(a2) {
        xh(wh.current);
        var b3 = xh(uh.current);
        var c2 = lb(b3, a2.type);
        b3 !== c2 && (G(vh, a2), G(uh, c2));
      }
      function Bh(a2) {
        vh.current === a2 && (E2(uh), E2(vh));
      }
      var L2 = Uf(0);
      function Ch(a2) {
        for (var b3 = a2; null !== b3; ) {
          if (13 === b3.tag) {
            var c2 = b3.memoizedState;
            if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b3;
          } else if (19 === b3.tag && void 0 !== b3.memoizedProps.revealOrder) {
            if (0 !== (b3.flags & 128)) return b3;
          } else if (null !== b3.child) {
            b3.child.return = b3;
            b3 = b3.child;
            continue;
          }
          if (b3 === a2) break;
          for (; null === b3.sibling; ) {
            if (null === b3.return || b3.return === a2) return null;
            b3 = b3.return;
          }
          b3.sibling.return = b3.return;
          b3 = b3.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N2 = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P2() {
        throw Error(p2(321));
      }
      function Mh(a2, b3) {
        if (null === b3) return false;
        for (var c2 = 0; c2 < b3.length && c2 < a2.length; c2++) if (!He(a2[c2], b3[c2])) return false;
        return true;
      }
      function Nh(a2, b3, c2, d2, e2, f3) {
        Hh = f3;
        M = b3;
        b3.memoizedState = null;
        b3.updateQueue = null;
        b3.lanes = 0;
        Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
        a2 = c2(d2, e2);
        if (Jh) {
          f3 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f3) throw Error(p2(301));
            f3 += 1;
            O = N2 = null;
            b3.updateQueue = null;
            Fh.current = Qh;
            a2 = c2(d2, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b3 = null !== N2 && null !== N2.next;
        Hh = 0;
        O = N2 = M = null;
        Ih = false;
        if (b3) throw Error(p2(300));
        return a2;
      }
      function Sh() {
        var a2 = 0 !== Kh;
        Kh = 0;
        return a2;
      }
      function Th() {
        var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a2 : O = O.next = a2;
        return O;
      }
      function Uh() {
        if (null === N2) {
          var a2 = M.alternate;
          a2 = null !== a2 ? a2.memoizedState : null;
        } else a2 = N2.next;
        var b3 = null === O ? M.memoizedState : O.next;
        if (null !== b3) O = b3, N2 = a2;
        else {
          if (null === a2) throw Error(p2(310));
          N2 = a2;
          a2 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O ? M.memoizedState = O = a2 : O = O.next = a2;
        }
        return O;
      }
      function Vh(a2, b3) {
        return "function" === typeof b3 ? b3(a2) : b3;
      }
      function Wh(a2) {
        var b3 = Uh(), c2 = b3.queue;
        if (null === c2) throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d2 = N2, e2 = d2.baseQueue, f3 = c2.pending;
        if (null !== f3) {
          if (null !== e2) {
            var g2 = e2.next;
            e2.next = f3.next;
            f3.next = g2;
          }
          d2.baseQueue = e2 = f3;
          c2.pending = null;
        }
        if (null !== e2) {
          f3 = e2.next;
          d2 = d2.baseState;
          var h3 = g2 = null, k2 = null, l2 = f3;
          do {
            var m2 = l2.lane;
            if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
            else {
              var q = {
                lane: m2,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h3 = k2 = q, g2 = d2) : k2 = k2.next = q;
              M.lanes |= m2;
              rh |= m2;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f3);
          null === k2 ? g2 = d2 : k2.next = h3;
          He(d2, b3.memoizedState) || (dh = true);
          b3.memoizedState = d2;
          b3.baseState = g2;
          b3.baseQueue = k2;
          c2.lastRenderedState = d2;
        }
        a2 = c2.interleaved;
        if (null !== a2) {
          e2 = a2;
          do
            f3 = e2.lane, M.lanes |= f3, rh |= f3, e2 = e2.next;
          while (e2 !== a2);
        } else null === e2 && (c2.lanes = 0);
        return [b3.memoizedState, c2.dispatch];
      }
      function Xh(a2) {
        var b3 = Uh(), c2 = b3.queue;
        if (null === c2) throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d2 = c2.dispatch, e2 = c2.pending, f3 = b3.memoizedState;
        if (null !== e2) {
          c2.pending = null;
          var g2 = e2 = e2.next;
          do
            f3 = a2(f3, g2.action), g2 = g2.next;
          while (g2 !== e2);
          He(f3, b3.memoizedState) || (dh = true);
          b3.memoizedState = f3;
          null === b3.baseQueue && (b3.baseState = f3);
          c2.lastRenderedState = f3;
        }
        return [f3, d2];
      }
      function Yh() {
      }
      function Zh(a2, b3) {
        var c2 = M, d2 = Uh(), e2 = b3(), f3 = !He(d2.memoizedState, e2);
        f3 && (d2.memoizedState = e2, dh = true);
        d2 = d2.queue;
        $h(ai.bind(null, c2, d2, a2), [a2]);
        if (d2.getSnapshot !== b3 || f3 || null !== O && O.memoizedState.tag & 1) {
          c2.flags |= 2048;
          bi(9, ci.bind(null, c2, d2, e2, b3), void 0, null);
          if (null === Q2) throw Error(p2(349));
          0 !== (Hh & 30) || di(c2, b3, e2);
        }
        return e2;
      }
      function di(a2, b3, c2) {
        a2.flags |= 16384;
        a2 = { getSnapshot: b3, value: c2 };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.stores = [a2]) : (c2 = b3.stores, null === c2 ? b3.stores = [a2] : c2.push(a2));
      }
      function ci(a2, b3, c2, d2) {
        b3.value = c2;
        b3.getSnapshot = d2;
        ei(b3) && fi(a2);
      }
      function ai(a2, b3, c2) {
        return c2(function() {
          ei(b3) && fi(a2);
        });
      }
      function ei(a2) {
        var b3 = a2.getSnapshot;
        a2 = a2.value;
        try {
          var c2 = b3();
          return !He(a2, c2);
        } catch (d2) {
          return true;
        }
      }
      function fi(a2) {
        var b3 = ih(a2, 1);
        null !== b3 && gi(b3, a2, 1, -1);
      }
      function hi(a2) {
        var b3 = Th();
        "function" === typeof a2 && (a2 = a2());
        b3.memoizedState = b3.baseState = a2;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
        b3.queue = a2;
        a2 = a2.dispatch = ii.bind(null, M, a2);
        return [b3.memoizedState, a2];
      }
      function bi(a2, b3, c2, d2) {
        a2 = { tag: a2, create: b3, destroy: c2, deps: d2, next: null };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.lastEffect = a2.next = a2) : (c2 = b3.lastEffect, null === c2 ? b3.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b3.lastEffect = a2));
        return a2;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a2, b3, c2, d2) {
        var e2 = Th();
        M.flags |= a2;
        e2.memoizedState = bi(1 | b3, c2, void 0, void 0 === d2 ? null : d2);
      }
      function li(a2, b3, c2, d2) {
        var e2 = Uh();
        d2 = void 0 === d2 ? null : d2;
        var f3 = void 0;
        if (null !== N2) {
          var g2 = N2.memoizedState;
          f3 = g2.destroy;
          if (null !== d2 && Mh(d2, g2.deps)) {
            e2.memoizedState = bi(b3, c2, f3, d2);
            return;
          }
        }
        M.flags |= a2;
        e2.memoizedState = bi(1 | b3, c2, f3, d2);
      }
      function mi(a2, b3) {
        return ki(8390656, 8, a2, b3);
      }
      function $h(a2, b3) {
        return li(2048, 8, a2, b3);
      }
      function ni(a2, b3) {
        return li(4, 2, a2, b3);
      }
      function oi(a2, b3) {
        return li(4, 4, a2, b3);
      }
      function pi(a2, b3) {
        if ("function" === typeof b3) return a2 = a2(), b3(a2), function() {
          b3(null);
        };
        if (null !== b3 && void 0 !== b3) return a2 = a2(), b3.current = a2, function() {
          b3.current = null;
        };
      }
      function qi(a2, b3, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return li(4, 4, pi.bind(null, b3, a2), c2);
      }
      function ri() {
      }
      function si(a2, b3) {
        var c2 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d2 = c2.memoizedState;
        if (null !== d2 && null !== b3 && Mh(b3, d2[1])) return d2[0];
        c2.memoizedState = [a2, b3];
        return a2;
      }
      function ti(a2, b3) {
        var c2 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d2 = c2.memoizedState;
        if (null !== d2 && null !== b3 && Mh(b3, d2[1])) return d2[0];
        a2 = a2();
        c2.memoizedState = [a2, b3];
        return a2;
      }
      function ui(a2, b3, c2) {
        if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
        He(c2, b3) || (c2 = yc(), M.lanes |= c2, rh |= c2, a2.baseState = true);
        return b3;
      }
      function vi(a2, b3) {
        var c2 = C2;
        C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
        a2(true);
        var d2 = Gh.transition;
        Gh.transition = {};
        try {
          a2(false), b3();
        } finally {
          C2 = c2, Gh.transition = d2;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a2, b3, c2) {
        var d2 = yi(a2);
        c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (zi(a2)) Ai(b3, c2);
        else if (c2 = hh(a2, b3, c2, d2), null !== c2) {
          var e2 = R();
          gi(c2, a2, d2, e2);
          Bi(c2, b3, d2);
        }
      }
      function ii(a2, b3, c2) {
        var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (zi(a2)) Ai(b3, e2);
        else {
          var f3 = a2.alternate;
          if (0 === a2.lanes && (null === f3 || 0 === f3.lanes) && (f3 = b3.lastRenderedReducer, null !== f3)) try {
            var g2 = b3.lastRenderedState, h3 = f3(g2, c2);
            e2.hasEagerState = true;
            e2.eagerState = h3;
            if (He(h3, g2)) {
              var k2 = b3.interleaved;
              null === k2 ? (e2.next = e2, gh(b3)) : (e2.next = k2.next, k2.next = e2);
              b3.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c2 = hh(a2, b3, e2, d2);
          null !== c2 && (e2 = R(), gi(c2, a2, d2, e2), Bi(c2, b3, d2));
        }
      }
      function zi(a2) {
        var b3 = a2.alternate;
        return a2 === M || null !== b3 && b3 === M;
      }
      function Ai(a2, b3) {
        Jh = Ih = true;
        var c2 = a2.pending;
        null === c2 ? b3.next = b3 : (b3.next = c2.next, c2.next = b3);
        a2.pending = b3;
      }
      function Bi(a2, b3, c2) {
        if (0 !== (c2 & 4194240)) {
          var d2 = b3.lanes;
          d2 &= a2.pendingLanes;
          c2 |= d2;
          b3.lanes = c2;
          Cc(a2, c2);
        }
      }
      var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a2, b3) {
        Th().memoizedState = [a2, void 0 === b3 ? null : b3];
        return a2;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b3, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b3, a2),
          c2
        );
      }, useLayoutEffect: function(a2, b3) {
        return ki(4194308, 4, a2, b3);
      }, useInsertionEffect: function(a2, b3) {
        return ki(4, 2, a2, b3);
      }, useMemo: function(a2, b3) {
        var c2 = Th();
        b3 = void 0 === b3 ? null : b3;
        a2 = a2();
        c2.memoizedState = [a2, b3];
        return a2;
      }, useReducer: function(a2, b3, c2) {
        var d2 = Th();
        b3 = void 0 !== c2 ? c2(b3) : b3;
        d2.memoizedState = d2.baseState = b3;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b3 };
        d2.queue = a2;
        a2 = a2.dispatch = xi.bind(null, M, a2);
        return [d2.memoizedState, a2];
      }, useRef: function(a2) {
        var b3 = Th();
        a2 = { current: a2 };
        return b3.memoizedState = a2;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
        return Th().memoizedState = a2;
      }, useTransition: function() {
        var a2 = hi(false), b3 = a2[0];
        a2 = vi.bind(null, a2[1]);
        Th().memoizedState = a2;
        return [b3, a2];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a2, b3, c2) {
        var d2 = M, e2 = Th();
        if (I) {
          if (void 0 === c2) throw Error(p2(407));
          c2 = c2();
        } else {
          c2 = b3();
          if (null === Q2) throw Error(p2(349));
          0 !== (Hh & 30) || di(d2, b3, c2);
        }
        e2.memoizedState = c2;
        var f3 = { value: c2, getSnapshot: b3 };
        e2.queue = f3;
        mi(ai.bind(
          null,
          d2,
          f3,
          a2
        ), [a2]);
        d2.flags |= 2048;
        bi(9, ci.bind(null, d2, f3, c2, b3), void 0, null);
        return c2;
      }, useId: function() {
        var a2 = Th(), b3 = Q2.identifierPrefix;
        if (I) {
          var c2 = sg;
          var d2 = rg;
          c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
          b3 = ":" + b3 + "R" + c2;
          c2 = Kh++;
          0 < c2 && (b3 += "H" + c2.toString(32));
          b3 += ":";
        } else c2 = Lh++, b3 = ":" + b3 + "r" + c2.toString(32) + ":";
        return a2.memoizedState = b3;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a2) {
          var b3 = Uh();
          return ui(b3, N2.memoizedState, a2);
        },
        useTransition: function() {
          var a2 = Wh(Vh)[0], b3 = Uh().memoizedState;
          return [a2, b3];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a2) {
        var b3 = Uh();
        return null === N2 ? b3.memoizedState = a2 : ui(b3, N2.memoizedState, a2);
      }, useTransition: function() {
        var a2 = Xh(Vh)[0], b3 = Uh().memoizedState;
        return [a2, b3];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a2, b3) {
        if (a2 && a2.defaultProps) {
          b3 = A2({}, b3);
          a2 = a2.defaultProps;
          for (var c2 in a2) void 0 === b3[c2] && (b3[c2] = a2[c2]);
          return b3;
        }
        return b3;
      }
      function Di(a2, b3, c2, d2) {
        b3 = a2.memoizedState;
        c2 = c2(d2, b3);
        c2 = null === c2 || void 0 === c2 ? b3 : A2({}, b3, c2);
        a2.memoizedState = c2;
        0 === a2.lanes && (a2.updateQueue.baseState = c2);
      }
      var Ei = { isMounted: function(a2) {
        return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
      }, enqueueSetState: function(a2, b3, c2) {
        a2 = a2._reactInternals;
        var d2 = R(), e2 = yi(a2), f3 = mh(d2, e2);
        f3.payload = b3;
        void 0 !== c2 && null !== c2 && (f3.callback = c2);
        b3 = nh(a2, f3, e2);
        null !== b3 && (gi(b3, a2, e2, d2), oh(b3, a2, e2));
      }, enqueueReplaceState: function(a2, b3, c2) {
        a2 = a2._reactInternals;
        var d2 = R(), e2 = yi(a2), f3 = mh(d2, e2);
        f3.tag = 1;
        f3.payload = b3;
        void 0 !== c2 && null !== c2 && (f3.callback = c2);
        b3 = nh(a2, f3, e2);
        null !== b3 && (gi(b3, a2, e2, d2), oh(b3, a2, e2));
      }, enqueueForceUpdate: function(a2, b3) {
        a2 = a2._reactInternals;
        var c2 = R(), d2 = yi(a2), e2 = mh(c2, d2);
        e2.tag = 2;
        void 0 !== b3 && null !== b3 && (e2.callback = b3);
        b3 = nh(a2, e2, d2);
        null !== b3 && (gi(b3, a2, d2, c2), oh(b3, a2, d2));
      } };
      function Fi(a2, b3, c2, d2, e2, f3, g2) {
        a2 = a2.stateNode;
        return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f3, g2) : b3.prototype && b3.prototype.isPureReactComponent ? !Ie2(c2, d2) || !Ie2(e2, f3) : true;
      }
      function Gi(a2, b3, c2) {
        var d2 = false, e2 = Vf;
        var f3 = b3.contextType;
        "object" === typeof f3 && null !== f3 ? f3 = eh(f3) : (e2 = Zf(b3) ? Xf : H2.current, d2 = b3.contextTypes, f3 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
        b3 = new b3(c2, f3);
        a2.memoizedState = null !== b3.state && void 0 !== b3.state ? b3.state : null;
        b3.updater = Ei;
        a2.stateNode = b3;
        b3._reactInternals = a2;
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f3);
        return b3;
      }
      function Hi(a2, b3, c2, d2) {
        a2 = b3.state;
        "function" === typeof b3.componentWillReceiveProps && b3.componentWillReceiveProps(c2, d2);
        "function" === typeof b3.UNSAFE_componentWillReceiveProps && b3.UNSAFE_componentWillReceiveProps(c2, d2);
        b3.state !== a2 && Ei.enqueueReplaceState(b3, b3.state, null);
      }
      function Ii(a2, b3, c2, d2) {
        var e2 = a2.stateNode;
        e2.props = c2;
        e2.state = a2.memoizedState;
        e2.refs = {};
        kh(a2);
        var f3 = b3.contextType;
        "object" === typeof f3 && null !== f3 ? e2.context = eh(f3) : (f3 = Zf(b3) ? Xf : H2.current, e2.context = Yf(a2, f3));
        e2.state = a2.memoizedState;
        f3 = b3.getDerivedStateFromProps;
        "function" === typeof f3 && (Di(a2, b3, f3, c2), e2.state = a2.memoizedState);
        "function" === typeof b3.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b3 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b3 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
        "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
      }
      function Ji(a2, b3) {
        try {
          var c2 = "", d2 = b3;
          do
            c2 += Pa(d2), d2 = d2.return;
          while (d2);
          var e2 = c2;
        } catch (f3) {
          e2 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
        }
        return { value: a2, source: b3, stack: e2, digest: null };
      }
      function Ki(a2, b3, c2) {
        return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b3 ? b3 : null };
      }
      function Li(a2, b3) {
        try {
          console.error(b3.value);
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a2, b3, c2) {
        c2 = mh(-1, c2);
        c2.tag = 3;
        c2.payload = { element: null };
        var d2 = b3.value;
        c2.callback = function() {
          Oi || (Oi = true, Pi = d2);
          Li(a2, b3);
        };
        return c2;
      }
      function Qi(a2, b3, c2) {
        c2 = mh(-1, c2);
        c2.tag = 3;
        var d2 = a2.type.getDerivedStateFromError;
        if ("function" === typeof d2) {
          var e2 = b3.value;
          c2.payload = function() {
            return d2(e2);
          };
          c2.callback = function() {
            Li(a2, b3);
          };
        }
        var f3 = a2.stateNode;
        null !== f3 && "function" === typeof f3.componentDidCatch && (c2.callback = function() {
          Li(a2, b3);
          "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c3 = b3.stack;
          this.componentDidCatch(b3.value, { componentStack: null !== c3 ? c3 : "" });
        });
        return c2;
      }
      function Si(a2, b3, c2) {
        var d2 = a2.pingCache;
        if (null === d2) {
          d2 = a2.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d2.set(b3, e2);
        } else e2 = d2.get(b3), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b3, e2));
        e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b3, c2), b3.then(a2, a2));
      }
      function Ui(a2) {
        do {
          var b3;
          if (b3 = 13 === a2.tag) b3 = a2.memoizedState, b3 = null !== b3 ? null !== b3.dehydrated ? true : false : true;
          if (b3) return a2;
          a2 = a2.return;
        } while (null !== a2);
        return null;
      }
      function Vi(a2, b3, c2, d2, e2) {
        if (0 === (a2.mode & 1)) return a2 === b3 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b3 = mh(-1, 1), b3.tag = 2, nh(c2, b3, 1))), c2.lanes |= 1), a2;
        a2.flags |= 65536;
        a2.lanes = e2;
        return a2;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a2, b3, c2, d2) {
        b3.child = null === a2 ? Vg(b3, null, c2, d2) : Ug(b3, a2.child, c2, d2);
      }
      function Yi(a2, b3, c2, d2, e2) {
        c2 = c2.render;
        var f3 = b3.ref;
        ch(b3, e2);
        d2 = Nh(a2, b3, c2, d2, f3, e2);
        c2 = Sh();
        if (null !== a2 && !dh) return b3.updateQueue = a2.updateQueue, b3.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b3, e2);
        I && c2 && vg(b3);
        b3.flags |= 1;
        Xi(a2, b3, d2, e2);
        return b3.child;
      }
      function $i(a2, b3, c2, d2, e2) {
        if (null === a2) {
          var f3 = c2.type;
          if ("function" === typeof f3 && !aj(f3) && void 0 === f3.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b3.tag = 15, b3.type = f3, bj(a2, b3, f3, d2, e2);
          a2 = Rg(c2.type, null, d2, b3, b3.mode, e2);
          a2.ref = b3.ref;
          a2.return = b3;
          return b3.child = a2;
        }
        f3 = a2.child;
        if (0 === (a2.lanes & e2)) {
          var g2 = f3.memoizedProps;
          c2 = c2.compare;
          c2 = null !== c2 ? c2 : Ie2;
          if (c2(g2, d2) && a2.ref === b3.ref) return Zi(a2, b3, e2);
        }
        b3.flags |= 1;
        a2 = Pg(f3, d2);
        a2.ref = b3.ref;
        a2.return = b3;
        return b3.child = a2;
      }
      function bj(a2, b3, c2, d2, e2) {
        if (null !== a2) {
          var f3 = a2.memoizedProps;
          if (Ie2(f3, d2) && a2.ref === b3.ref) if (dh = false, b3.pendingProps = d2 = f3, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
          else return b3.lanes = a2.lanes, Zi(a2, b3, e2);
        }
        return cj(a2, b3, c2, d2, e2);
      }
      function dj(a2, b3, c2) {
        var d2 = b3.pendingProps, e2 = d2.children, f3 = null !== a2 ? a2.memoizedState : null;
        if ("hidden" === d2.mode) if (0 === (b3.mode & 1)) b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
        else {
          if (0 === (c2 & 1073741824)) return a2 = null !== f3 ? f3.baseLanes | c2 : c2, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b3.updateQueue = null, G(ej, fj), fj |= a2, null;
          b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f3 ? f3.baseLanes : c2;
          G(ej, fj);
          fj |= d2;
        }
        else null !== f3 ? (d2 = f3.baseLanes | c2, b3.memoizedState = null) : d2 = c2, G(ej, fj), fj |= d2;
        Xi(a2, b3, e2, c2);
        return b3.child;
      }
      function gj(a2, b3) {
        var c2 = b3.ref;
        if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b3.flags |= 512, b3.flags |= 2097152;
      }
      function cj(a2, b3, c2, d2, e2) {
        var f3 = Zf(c2) ? Xf : H2.current;
        f3 = Yf(b3, f3);
        ch(b3, e2);
        c2 = Nh(a2, b3, c2, d2, f3, e2);
        d2 = Sh();
        if (null !== a2 && !dh) return b3.updateQueue = a2.updateQueue, b3.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b3, e2);
        I && d2 && vg(b3);
        b3.flags |= 1;
        Xi(a2, b3, c2, e2);
        return b3.child;
      }
      function hj(a2, b3, c2, d2, e2) {
        if (Zf(c2)) {
          var f3 = true;
          cg(b3);
        } else f3 = false;
        ch(b3, e2);
        if (null === b3.stateNode) ij(a2, b3), Gi(b3, c2, d2), Ii(b3, c2, d2, e2), d2 = true;
        else if (null === a2) {
          var g2 = b3.stateNode, h3 = b3.memoizedProps;
          g2.props = h3;
          var k2 = g2.context, l2 = c2.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b3, l2));
          var m2 = c2.getDerivedStateFromProps, q = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
          q || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h3 !== d2 || k2 !== l2) && Hi(b3, g2, d2, l2);
          jh = false;
          var r = b3.memoizedState;
          g2.state = r;
          qh(b3, d2, g2, e2);
          k2 = b3.memoizedState;
          h3 !== d2 || r !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b3, c2, m2, d2), k2 = b3.memoizedState), (h3 = jh || Fi(b3, c2, h3, d2, r, k2, l2)) ? (q || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b3.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b3.flags |= 4194308), b3.memoizedProps = d2, b3.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h3) : ("function" === typeof g2.componentDidMount && (b3.flags |= 4194308), d2 = false);
        } else {
          g2 = b3.stateNode;
          lh(a2, b3);
          h3 = b3.memoizedProps;
          l2 = b3.type === b3.elementType ? h3 : Ci(b3.type, h3);
          g2.props = l2;
          q = b3.pendingProps;
          r = g2.context;
          k2 = c2.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b3, k2));
          var y2 = c2.getDerivedStateFromProps;
          (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h3 !== q || r !== k2) && Hi(b3, g2, d2, k2);
          jh = false;
          r = b3.memoizedState;
          g2.state = r;
          qh(b3, d2, g2, e2);
          var n3 = b3.memoizedState;
          h3 !== q || r !== n3 || Wf.current || jh ? ("function" === typeof y2 && (Di(b3, c2, y2, d2), n3 = b3.memoizedState), (l2 = jh || Fi(b3, c2, l2, d2, r, n3, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n3, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n3, k2)), "function" === typeof g2.componentDidUpdate && (b3.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b3.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h3 === a2.memoizedProps && r === a2.memoizedState || (b3.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h3 === a2.memoizedProps && r === a2.memoizedState || (b3.flags |= 1024), b3.memoizedProps = d2, b3.memoizedState = n3), g2.props = d2, g2.state = n3, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h3 === a2.memoizedProps && r === a2.memoizedState || (b3.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h3 === a2.memoizedProps && r === a2.memoizedState || (b3.flags |= 1024), d2 = false);
        }
        return jj(a2, b3, c2, d2, f3, e2);
      }
      function jj(a2, b3, c2, d2, e2, f3) {
        gj(a2, b3);
        var g2 = 0 !== (b3.flags & 128);
        if (!d2 && !g2) return e2 && dg(b3, c2, false), Zi(a2, b3, f3);
        d2 = b3.stateNode;
        Wi.current = b3;
        var h3 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
        b3.flags |= 1;
        null !== a2 && g2 ? (b3.child = Ug(b3, a2.child, null, f3), b3.child = Ug(b3, null, h3, f3)) : Xi(a2, b3, h3, f3);
        b3.memoizedState = d2.state;
        e2 && dg(b3, c2, true);
        return b3.child;
      }
      function kj(a2) {
        var b3 = a2.stateNode;
        b3.pendingContext ? ag(a2, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && ag(a2, b3.context, false);
        yh(a2, b3.containerInfo);
      }
      function lj(a2, b3, c2, d2, e2) {
        Ig();
        Jg(e2);
        b3.flags |= 256;
        Xi(a2, b3, c2, d2);
        return b3.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a2) {
        return { baseLanes: a2, cachePool: null, transitions: null };
      }
      function oj(a2, b3, c2) {
        var d2 = b3.pendingProps, e2 = L2.current, f3 = false, g2 = 0 !== (b3.flags & 128), h3;
        (h3 = g2) || (h3 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
        if (h3) f3 = true, b3.flags &= -129;
        else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
        G(L2, e2 & 1);
        if (null === a2) {
          Eg(b3);
          a2 = b3.memoizedState;
          if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b3.mode & 1) ? b3.lanes = 1 : "$!" === a2.data ? b3.lanes = 8 : b3.lanes = 1073741824, null;
          g2 = d2.children;
          a2 = d2.fallback;
          return f3 ? (d2 = b3.mode, f3 = b3.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f3 ? (f3.childLanes = 0, f3.pendingProps = g2) : f3 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f3.return = b3, a2.return = b3, f3.sibling = a2, b3.child = f3, b3.child.memoizedState = nj(c2), b3.memoizedState = mj, a2) : qj(b3, g2);
        }
        e2 = a2.memoizedState;
        if (null !== e2 && (h3 = e2.dehydrated, null !== h3)) return rj(a2, b3, g2, d2, h3, e2, c2);
        if (f3) {
          f3 = d2.fallback;
          g2 = b3.mode;
          e2 = a2.child;
          h3 = e2.sibling;
          var k2 = { mode: "hidden", children: d2.children };
          0 === (g2 & 1) && b3.child !== e2 ? (d2 = b3.child, d2.childLanes = 0, d2.pendingProps = k2, b3.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h3 ? f3 = Pg(h3, f3) : (f3 = Tg(f3, g2, c2, null), f3.flags |= 2);
          f3.return = b3;
          d2.return = b3;
          d2.sibling = f3;
          b3.child = d2;
          d2 = f3;
          f3 = b3.child;
          g2 = a2.child.memoizedState;
          g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
          f3.memoizedState = g2;
          f3.childLanes = a2.childLanes & ~c2;
          b3.memoizedState = mj;
          return d2;
        }
        f3 = a2.child;
        a2 = f3.sibling;
        d2 = Pg(f3, { mode: "visible", children: d2.children });
        0 === (b3.mode & 1) && (d2.lanes = c2);
        d2.return = b3;
        d2.sibling = null;
        null !== a2 && (c2 = b3.deletions, null === c2 ? (b3.deletions = [a2], b3.flags |= 16) : c2.push(a2));
        b3.child = d2;
        b3.memoizedState = null;
        return d2;
      }
      function qj(a2, b3) {
        b3 = pj({ mode: "visible", children: b3 }, a2.mode, 0, null);
        b3.return = a2;
        return a2.child = b3;
      }
      function sj(a2, b3, c2, d2) {
        null !== d2 && Jg(d2);
        Ug(b3, a2.child, null, c2);
        a2 = qj(b3, b3.pendingProps.children);
        a2.flags |= 2;
        b3.memoizedState = null;
        return a2;
      }
      function rj(a2, b3, c2, d2, e2, f3, g2) {
        if (c2) {
          if (b3.flags & 256) return b3.flags &= -257, d2 = Ki(Error(p2(422))), sj(a2, b3, g2, d2);
          if (null !== b3.memoizedState) return b3.child = a2.child, b3.flags |= 128, null;
          f3 = d2.fallback;
          e2 = b3.mode;
          d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
          f3 = Tg(f3, e2, g2, null);
          f3.flags |= 2;
          d2.return = b3;
          f3.return = b3;
          d2.sibling = f3;
          b3.child = d2;
          0 !== (b3.mode & 1) && Ug(b3, a2.child, null, g2);
          b3.child.memoizedState = nj(g2);
          b3.memoizedState = mj;
          return f3;
        }
        if (0 === (b3.mode & 1)) return sj(a2, b3, g2, null);
        if ("$!" === e2.data) {
          d2 = e2.nextSibling && e2.nextSibling.dataset;
          if (d2) var h3 = d2.dgst;
          d2 = h3;
          f3 = Error(p2(419));
          d2 = Ki(f3, d2, void 0);
          return sj(a2, b3, g2, d2);
        }
        h3 = 0 !== (g2 & a2.childLanes);
        if (dh || h3) {
          d2 = Q2;
          if (null !== d2) {
            switch (g2 & -g2) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
            0 !== e2 && e2 !== f3.retryLane && (f3.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
          }
          tj();
          d2 = Ki(Error(p2(421)));
          return sj(a2, b3, g2, d2);
        }
        if ("$?" === e2.data) return b3.flags |= 128, b3.child = a2.child, b3 = uj.bind(null, a2), e2._reactRetry = b3, null;
        a2 = f3.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b3;
        I = true;
        zg = null;
        null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b3);
        b3 = qj(b3, d2.children);
        b3.flags |= 4096;
        return b3;
      }
      function vj(a2, b3, c2) {
        a2.lanes |= b3;
        var d2 = a2.alternate;
        null !== d2 && (d2.lanes |= b3);
        bh(a2.return, b3, c2);
      }
      function wj(a2, b3, c2, d2, e2) {
        var f3 = a2.memoizedState;
        null === f3 ? a2.memoizedState = { isBackwards: b3, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f3.isBackwards = b3, f3.rendering = null, f3.renderingStartTime = 0, f3.last = d2, f3.tail = c2, f3.tailMode = e2);
      }
      function xj(a2, b3, c2) {
        var d2 = b3.pendingProps, e2 = d2.revealOrder, f3 = d2.tail;
        Xi(a2, b3, d2.children, c2);
        d2 = L2.current;
        if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b3.flags |= 128;
        else {
          if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b3.child; null !== a2; ) {
            if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b3);
            else if (19 === a2.tag) vj(a2, c2, b3);
            else if (null !== a2.child) {
              a2.child.return = a2;
              a2 = a2.child;
              continue;
            }
            if (a2 === b3) break a;
            for (; null === a2.sibling; ) {
              if (null === a2.return || a2.return === b3) break a;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            a2 = a2.sibling;
          }
          d2 &= 1;
        }
        G(L2, d2);
        if (0 === (b3.mode & 1)) b3.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c2 = b3.child;
            for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            null === c2 ? (e2 = b3.child, b3.child = null) : (e2 = c2.sibling, c2.sibling = null);
            wj(b3, false, e2, c2, f3);
            break;
          case "backwards":
            c2 = null;
            e2 = b3.child;
            for (b3.child = null; null !== e2; ) {
              a2 = e2.alternate;
              if (null !== a2 && null === Ch(a2)) {
                b3.child = e2;
                break;
              }
              a2 = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a2;
            }
            wj(b3, true, c2, null, f3);
            break;
          case "together":
            wj(b3, false, null, null, void 0);
            break;
          default:
            b3.memoizedState = null;
        }
        return b3.child;
      }
      function ij(a2, b3) {
        0 === (b3.mode & 1) && null !== a2 && (a2.alternate = null, b3.alternate = null, b3.flags |= 2);
      }
      function Zi(a2, b3, c2) {
        null !== a2 && (b3.dependencies = a2.dependencies);
        rh |= b3.lanes;
        if (0 === (c2 & b3.childLanes)) return null;
        if (null !== a2 && b3.child !== a2.child) throw Error(p2(153));
        if (null !== b3.child) {
          a2 = b3.child;
          c2 = Pg(a2, a2.pendingProps);
          b3.child = c2;
          for (c2.return = b3; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b3;
          c2.sibling = null;
        }
        return b3.child;
      }
      function yj(a2, b3, c2) {
        switch (b3.tag) {
          case 3:
            kj(b3);
            Ig();
            break;
          case 5:
            Ah(b3);
            break;
          case 1:
            Zf(b3.type) && cg(b3);
            break;
          case 4:
            yh(b3, b3.stateNode.containerInfo);
            break;
          case 10:
            var d2 = b3.type._context, e2 = b3.memoizedProps.value;
            G(Wg, d2._currentValue);
            d2._currentValue = e2;
            break;
          case 13:
            d2 = b3.memoizedState;
            if (null !== d2) {
              if (null !== d2.dehydrated) return G(L2, L2.current & 1), b3.flags |= 128, null;
              if (0 !== (c2 & b3.child.childLanes)) return oj(a2, b3, c2);
              G(L2, L2.current & 1);
              a2 = Zi(a2, b3, c2);
              return null !== a2 ? a2.sibling : null;
            }
            G(L2, L2.current & 1);
            break;
          case 19:
            d2 = 0 !== (c2 & b3.childLanes);
            if (0 !== (a2.flags & 128)) {
              if (d2) return xj(a2, b3, c2);
              b3.flags |= 128;
            }
            e2 = b3.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G(L2, L2.current);
            if (d2) break;
            else return null;
          case 22:
          case 23:
            return b3.lanes = 0, dj(a2, b3, c2);
        }
        return Zi(a2, b3, c2);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a2, b3) {
        for (var c2 = b3.child; null !== c2; ) {
          if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
          else if (4 !== c2.tag && null !== c2.child) {
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
          if (c2 === b3) break;
          for (; null === c2.sibling; ) {
            if (null === c2.return || c2.return === b3) return;
            c2 = c2.return;
          }
          c2.sibling.return = c2.return;
          c2 = c2.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a2, b3, c2, d2) {
        var e2 = a2.memoizedProps;
        if (e2 !== d2) {
          a2 = b3.stateNode;
          xh(uh.current);
          var f3 = null;
          switch (c2) {
            case "input":
              e2 = Ya(a2, e2);
              d2 = Ya(a2, d2);
              f3 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d2 = A2({}, d2, { value: void 0 });
              f3 = [];
              break;
            case "textarea":
              e2 = gb(a2, e2);
              d2 = gb(a2, d2);
              f3 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
          }
          ub(c2, d2);
          var g2;
          c2 = null;
          for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h3 = e2[l2];
            for (g2 in h3) h3.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f3 || (f3 = []) : (f3 = f3 || []).push(l2, null));
          for (l2 in d2) {
            var k2 = d2[l2];
            h3 = null != e2 ? e2[l2] : void 0;
            if (d2.hasOwnProperty(l2) && k2 !== h3 && (null != k2 || null != h3)) if ("style" === l2) if (h3) {
              for (g2 in h3) !h3.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
              for (g2 in k2) k2.hasOwnProperty(g2) && h3[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
            } else c2 || (f3 || (f3 = []), f3.push(
              l2,
              c2
            )), c2 = k2;
            else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h3 = h3 ? h3.__html : void 0, null != k2 && h3 !== k2 && (f3 = f3 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f3 = f3 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a2), f3 || h3 === k2 || (f3 = [])) : (f3 = f3 || []).push(l2, k2));
          }
          c2 && (f3 = f3 || []).push("style", c2);
          var l2 = f3;
          if (b3.updateQueue = l2) b3.flags |= 4;
        }
      };
      Cj = function(a2, b3, c2, d2) {
        c2 !== d2 && (b3.flags |= 4);
      };
      function Dj(a2, b3) {
        if (!I) switch (a2.tailMode) {
          case "hidden":
            b3 = a2.tail;
            for (var c2 = null; null !== b3; ) null !== b3.alternate && (c2 = b3), b3 = b3.sibling;
            null === c2 ? a2.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a2.tail;
            for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
            null === d2 ? b3 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
        }
      }
      function S2(a2) {
        var b3 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
        if (b3) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
        else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
        a2.subtreeFlags |= d2;
        a2.childLanes = c2;
        return b3;
      }
      function Ej(a2, b3, c2) {
        var d2 = b3.pendingProps;
        wg(b3);
        switch (b3.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S2(b3), null;
          case 1:
            return Zf(b3.type) && $f(), S2(b3), null;
          case 3:
            d2 = b3.stateNode;
            zh();
            E2(Wf);
            E2(H2);
            Eh();
            d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
            if (null === a2 || null === a2.child) Gg(b3) ? b3.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b3.flags & 256) || (b3.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a2, b3);
            S2(b3);
            return null;
          case 5:
            Bh(b3);
            var e2 = xh(wh.current);
            c2 = b3.type;
            if (null !== a2 && null != b3.stateNode) Bj(a2, b3, c2, d2, e2), a2.ref !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            else {
              if (!d2) {
                if (null === b3.stateNode) throw Error(p2(166));
                S2(b3);
                return null;
              }
              a2 = xh(uh.current);
              if (Gg(b3)) {
                d2 = b3.stateNode;
                c2 = b3.type;
                var f3 = b3.memoizedProps;
                d2[Of] = b3;
                d2[Pf] = f3;
                a2 = 0 !== (b3.mode & 1);
                switch (c2) {
                  case "dialog":
                    D("cancel", d2);
                    D("close", d2);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d2);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], d2);
                    break;
                  case "source":
                    D("error", d2);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d2
                    );
                    D("load", d2);
                    break;
                  case "details":
                    D("toggle", d2);
                    break;
                  case "input":
                    Za(d2, f3);
                    D("invalid", d2);
                    break;
                  case "select":
                    d2._wrapperState = { wasMultiple: !!f3.multiple };
                    D("invalid", d2);
                    break;
                  case "textarea":
                    hb(d2, f3), D("invalid", d2);
                }
                ub(c2, f3);
                e2 = null;
                for (var g2 in f3) if (f3.hasOwnProperty(g2)) {
                  var h3 = f3[g2];
                  "children" === g2 ? "string" === typeof h3 ? d2.textContent !== h3 && (true !== f3.suppressHydrationWarning && Af(d2.textContent, h3, a2), e2 = ["children", h3]) : "number" === typeof h3 && d2.textContent !== "" + h3 && (true !== f3.suppressHydrationWarning && Af(
                    d2.textContent,
                    h3,
                    a2
                  ), e2 = ["children", "" + h3]) : ea.hasOwnProperty(g2) && null != h3 && "onScroll" === g2 && D("scroll", d2);
                }
                switch (c2) {
                  case "input":
                    Va(d2);
                    db(d2, f3, true);
                    break;
                  case "textarea":
                    Va(d2);
                    jb(d2);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f3.onClick && (d2.onclick = Bf);
                }
                d2 = e2;
                b3.updateQueue = d2;
                null !== d2 && (b3.flags |= 4);
              } else {
                g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
                "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
                a2[Of] = b3;
                a2[Pf] = d2;
                zj(a2, b3, false, false);
                b3.stateNode = a2;
                a: {
                  g2 = vb(c2, d2);
                  switch (c2) {
                    case "dialog":
                      D("cancel", a2);
                      D("close", a2);
                      e2 = d2;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a2);
                      e2 = d2;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], a2);
                      e2 = d2;
                      break;
                    case "source":
                      D("error", a2);
                      e2 = d2;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a2
                      );
                      D("load", a2);
                      e2 = d2;
                      break;
                    case "details":
                      D("toggle", a2);
                      e2 = d2;
                      break;
                    case "input":
                      Za(a2, d2);
                      e2 = Ya(a2, d2);
                      D("invalid", a2);
                      break;
                    case "option":
                      e2 = d2;
                      break;
                    case "select":
                      a2._wrapperState = { wasMultiple: !!d2.multiple };
                      e2 = A2({}, d2, { value: void 0 });
                      D("invalid", a2);
                      break;
                    case "textarea":
                      hb(a2, d2);
                      e2 = gb(a2, d2);
                      D("invalid", a2);
                      break;
                    default:
                      e2 = d2;
                  }
                  ub(c2, e2);
                  h3 = e2;
                  for (f3 in h3) if (h3.hasOwnProperty(f3)) {
                    var k2 = h3[f3];
                    "style" === f3 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f3 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f3 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f3 && "suppressHydrationWarning" !== f3 && "autoFocus" !== f3 && (ea.hasOwnProperty(f3) ? null != k2 && "onScroll" === f3 && D("scroll", a2) : null != k2 && ta(a2, f3, k2, g2));
                  }
                  switch (c2) {
                    case "input":
                      Va(a2);
                      db(a2, d2, false);
                      break;
                    case "textarea":
                      Va(a2);
                      jb(a2);
                      break;
                    case "option":
                      null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                      break;
                    case "select":
                      a2.multiple = !!d2.multiple;
                      f3 = d2.value;
                      null != f3 ? fb(a2, !!d2.multiple, f3, false) : null != d2.defaultValue && fb(
                        a2,
                        !!d2.multiple,
                        d2.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a2.onclick = Bf);
                  }
                  switch (c2) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d2 = !!d2.autoFocus;
                      break a;
                    case "img":
                      d2 = true;
                      break a;
                    default:
                      d2 = false;
                  }
                }
                d2 && (b3.flags |= 4);
              }
              null !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            }
            S2(b3);
            return null;
          case 6:
            if (a2 && null != b3.stateNode) Cj(a2, b3, a2.memoizedProps, d2);
            else {
              if ("string" !== typeof d2 && null === b3.stateNode) throw Error(p2(166));
              c2 = xh(wh.current);
              xh(uh.current);
              if (Gg(b3)) {
                d2 = b3.stateNode;
                c2 = b3.memoizedProps;
                d2[Of] = b3;
                if (f3 = d2.nodeValue !== c2) {
                  if (a2 = xg, null !== a2) switch (a2.tag) {
                    case 3:
                      Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                      break;
                    case 5:
                      true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  }
                }
                f3 && (b3.flags |= 4);
              } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b3, b3.stateNode = d2;
            }
            S2(b3);
            return null;
          case 13:
            E2(L2);
            d2 = b3.memoizedState;
            if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b3.mode & 1) && 0 === (b3.flags & 128)) Hg(), Ig(), b3.flags |= 98560, f3 = false;
              else if (f3 = Gg(b3), null !== d2 && null !== d2.dehydrated) {
                if (null === a2) {
                  if (!f3) throw Error(p2(318));
                  f3 = b3.memoizedState;
                  f3 = null !== f3 ? f3.dehydrated : null;
                  if (!f3) throw Error(p2(317));
                  f3[Of] = b3;
                } else Ig(), 0 === (b3.flags & 128) && (b3.memoizedState = null), b3.flags |= 4;
                S2(b3);
                f3 = false;
              } else null !== zg && (Fj(zg), zg = null), f3 = true;
              if (!f3) return b3.flags & 65536 ? b3 : null;
            }
            if (0 !== (b3.flags & 128)) return b3.lanes = c2, b3;
            d2 = null !== d2;
            d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b3.child.flags |= 8192, 0 !== (b3.mode & 1) && (null === a2 || 0 !== (L2.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b3.updateQueue && (b3.flags |= 4);
            S2(b3);
            return null;
          case 4:
            return zh(), Aj(a2, b3), null === a2 && sf(b3.stateNode.containerInfo), S2(b3), null;
          case 10:
            return ah(b3.type._context), S2(b3), null;
          case 17:
            return Zf(b3.type) && $f(), S2(b3), null;
          case 19:
            E2(L2);
            f3 = b3.memoizedState;
            if (null === f3) return S2(b3), null;
            d2 = 0 !== (b3.flags & 128);
            g2 = f3.rendering;
            if (null === g2) if (d2) Dj(f3, false);
            else {
              if (0 !== T || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b3.child; null !== a2; ) {
                g2 = Ch(a2);
                if (null !== g2) {
                  b3.flags |= 128;
                  Dj(f3, false);
                  d2 = g2.updateQueue;
                  null !== d2 && (b3.updateQueue = d2, b3.flags |= 4);
                  b3.subtreeFlags = 0;
                  d2 = c2;
                  for (c2 = b3.child; null !== c2; ) f3 = c2, a2 = d2, f3.flags &= 14680066, g2 = f3.alternate, null === g2 ? (f3.childLanes = 0, f3.lanes = a2, f3.child = null, f3.subtreeFlags = 0, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g2.childLanes, f3.lanes = g2.lanes, f3.child = g2.child, f3.subtreeFlags = 0, f3.deletions = null, f3.memoizedProps = g2.memoizedProps, f3.memoizedState = g2.memoizedState, f3.updateQueue = g2.updateQueue, f3.type = g2.type, a2 = g2.dependencies, f3.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                  G(L2, L2.current & 1 | 2);
                  return b3.child;
                }
                a2 = a2.sibling;
              }
              null !== f3.tail && B() > Gj && (b3.flags |= 128, d2 = true, Dj(f3, false), b3.lanes = 4194304);
            }
            else {
              if (!d2) if (a2 = Ch(g2), null !== a2) {
                if (b3.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b3.updateQueue = c2, b3.flags |= 4), Dj(f3, true), null === f3.tail && "hidden" === f3.tailMode && !g2.alternate && !I) return S2(b3), null;
              } else 2 * B() - f3.renderingStartTime > Gj && 1073741824 !== c2 && (b3.flags |= 128, d2 = true, Dj(f3, false), b3.lanes = 4194304);
              f3.isBackwards ? (g2.sibling = b3.child, b3.child = g2) : (c2 = f3.last, null !== c2 ? c2.sibling = g2 : b3.child = g2, f3.last = g2);
            }
            if (null !== f3.tail) return b3 = f3.tail, f3.rendering = b3, f3.tail = b3.sibling, f3.renderingStartTime = B(), b3.sibling = null, c2 = L2.current, G(L2, d2 ? c2 & 1 | 2 : c2 & 1), b3;
            S2(b3);
            return null;
          case 22:
          case 23:
            return Hj(), d2 = null !== b3.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b3.flags |= 8192), d2 && 0 !== (b3.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b3), b3.subtreeFlags & 6 && (b3.flags |= 8192)) : S2(b3), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b3.tag));
      }
      function Ij(a2, b3) {
        wg(b3);
        switch (b3.tag) {
          case 1:
            return Zf(b3.type) && $f(), a2 = b3.flags, a2 & 65536 ? (b3.flags = a2 & -65537 | 128, b3) : null;
          case 3:
            return zh(), E2(Wf), E2(H2), Eh(), a2 = b3.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b3.flags = a2 & -65537 | 128, b3) : null;
          case 5:
            return Bh(b3), null;
          case 13:
            E2(L2);
            a2 = b3.memoizedState;
            if (null !== a2 && null !== a2.dehydrated) {
              if (null === b3.alternate) throw Error(p2(340));
              Ig();
            }
            a2 = b3.flags;
            return a2 & 65536 ? (b3.flags = a2 & -65537 | 128, b3) : null;
          case 19:
            return E2(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b3.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a2, b3) {
        var c2 = a2.ref;
        if (null !== c2) if ("function" === typeof c2) try {
          c2(null);
        } catch (d2) {
          W2(a2, b3, d2);
        }
        else c2.current = null;
      }
      function Mj(a2, b3, c2) {
        try {
          c2();
        } catch (d2) {
          W2(a2, b3, d2);
        }
      }
      var Nj = false;
      function Oj(a2, b3) {
        Cf = dd;
        a2 = Me();
        if (Ne(a2)) {
          if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
          else a: {
            c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
            var d2 = c2.getSelection && c2.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c2 = d2.anchorNode;
              var e2 = d2.anchorOffset, f3 = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c2.nodeType, f3.nodeType;
              } catch (F2) {
                c2 = null;
                break a;
              }
              var g2 = 0, h3 = -1, k2 = -1, l2 = 0, m2 = 0, q = a2, r = null;
              b: for (; ; ) {
                for (var y2; ; ) {
                  q !== c2 || 0 !== e2 && 3 !== q.nodeType || (h3 = g2 + e2);
                  q !== f3 || 0 !== d2 && 3 !== q.nodeType || (k2 = g2 + d2);
                  3 === q.nodeType && (g2 += q.nodeValue.length);
                  if (null === (y2 = q.firstChild)) break;
                  r = q;
                  q = y2;
                }
                for (; ; ) {
                  if (q === a2) break b;
                  r === c2 && ++l2 === e2 && (h3 = g2);
                  r === f3 && ++m2 === d2 && (k2 = g2);
                  if (null !== (y2 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y2;
              }
              c2 = -1 === h3 || -1 === k2 ? null : { start: h3, end: k2 };
            } else c2 = null;
          }
          c2 = c2 || { start: 0, end: 0 };
        } else c2 = null;
        Df = { focusedElem: a2, selectionRange: c2 };
        dd = false;
        for (V = b3; null !== V; ) if (b3 = V, a2 = b3.child, 0 !== (b3.subtreeFlags & 1028) && null !== a2) a2.return = b3, V = a2;
        else for (; null !== V; ) {
          b3 = V;
          try {
            var n3 = b3.alternate;
            if (0 !== (b3.flags & 1024)) switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n3) {
                  var t2 = n3.memoizedProps, J = n3.memoizedState, x2 = b3.stateNode, w = x2.getSnapshotBeforeUpdate(b3.elementType === b3.type ? t2 : Ci(b3.type, t2), J);
                  x2.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u2 = b3.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
          } catch (F2) {
            W2(b3, b3.return, F2);
          }
          a2 = b3.sibling;
          if (null !== a2) {
            a2.return = b3.return;
            V = a2;
            break;
          }
          V = b3.return;
        }
        n3 = Nj;
        Nj = false;
        return n3;
      }
      function Pj(a2, b3, c2) {
        var d2 = b3.updateQueue;
        d2 = null !== d2 ? d2.lastEffect : null;
        if (null !== d2) {
          var e2 = d2 = d2.next;
          do {
            if ((e2.tag & a2) === a2) {
              var f3 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f3 && Mj(b3, c2, f3);
            }
            e2 = e2.next;
          } while (e2 !== d2);
        }
      }
      function Qj(a2, b3) {
        b3 = b3.updateQueue;
        b3 = null !== b3 ? b3.lastEffect : null;
        if (null !== b3) {
          var c2 = b3 = b3.next;
          do {
            if ((c2.tag & a2) === a2) {
              var d2 = c2.create;
              c2.destroy = d2();
            }
            c2 = c2.next;
          } while (c2 !== b3);
        }
      }
      function Rj(a2) {
        var b3 = a2.ref;
        if (null !== b3) {
          var c2 = a2.stateNode;
          switch (a2.tag) {
            case 5:
              a2 = c2;
              break;
            default:
              a2 = c2;
          }
          "function" === typeof b3 ? b3(a2) : b3.current = a2;
        }
      }
      function Sj(a2) {
        var b3 = a2.alternate;
        null !== b3 && (a2.alternate = null, Sj(b3));
        a2.child = null;
        a2.deletions = null;
        a2.sibling = null;
        5 === a2.tag && (b3 = a2.stateNode, null !== b3 && (delete b3[Of], delete b3[Pf], delete b3[of], delete b3[Qf], delete b3[Rf]));
        a2.stateNode = null;
        a2.return = null;
        a2.dependencies = null;
        a2.memoizedProps = null;
        a2.memoizedState = null;
        a2.pendingProps = null;
        a2.stateNode = null;
        a2.updateQueue = null;
      }
      function Tj(a2) {
        return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
      }
      function Uj(a2) {
        a: for (; ; ) {
          for (; null === a2.sibling; ) {
            if (null === a2.return || Tj(a2.return)) return null;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
            if (a2.flags & 2) continue a;
            if (null === a2.child || 4 === a2.tag) continue a;
            else a2.child.return = a2, a2 = a2.child;
          }
          if (!(a2.flags & 2)) return a2.stateNode;
        }
      }
      function Vj(a2, b3, c2) {
        var d2 = a2.tag;
        if (5 === d2 || 6 === d2) a2 = a2.stateNode, b3 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b3) : c2.insertBefore(a2, b3) : (8 === c2.nodeType ? (b3 = c2.parentNode, b3.insertBefore(a2, c2)) : (b3 = c2, b3.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b3.onclick || (b3.onclick = Bf));
        else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b3, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b3, c2), a2 = a2.sibling;
      }
      function Wj(a2, b3, c2) {
        var d2 = a2.tag;
        if (5 === d2 || 6 === d2) a2 = a2.stateNode, b3 ? c2.insertBefore(a2, b3) : c2.appendChild(a2);
        else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b3, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b3, c2), a2 = a2.sibling;
      }
      var X3 = null;
      var Xj = false;
      function Yj(a2, b3, c2) {
        for (c2 = c2.child; null !== c2; ) Zj(a2, b3, c2), c2 = c2.sibling;
      }
      function Zj(a2, b3, c2) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h3) {
        }
        switch (c2.tag) {
          case 5:
            U || Lj(c2, b3);
          case 6:
            var d2 = X3, e2 = Xj;
            X3 = null;
            Yj(a2, b3, c2);
            X3 = d2;
            Xj = e2;
            null !== X3 && (Xj ? (a2 = X3, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X3.removeChild(c2.stateNode));
            break;
          case 18:
            null !== X3 && (Xj ? (a2 = X3, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X3, c2.stateNode));
            break;
          case 4:
            d2 = X3;
            e2 = Xj;
            X3 = c2.stateNode.containerInfo;
            Xj = true;
            Yj(a2, b3, c2);
            X3 = d2;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
              e2 = d2 = d2.next;
              do {
                var f3 = e2, g2 = f3.destroy;
                f3 = f3.tag;
                void 0 !== g2 && (0 !== (f3 & 2) ? Mj(c2, b3, g2) : 0 !== (f3 & 4) && Mj(c2, b3, g2));
                e2 = e2.next;
              } while (e2 !== d2);
            }
            Yj(a2, b3, c2);
            break;
          case 1:
            if (!U && (Lj(c2, b3), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
              d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
            } catch (h3) {
              W2(c2, b3, h3);
            }
            Yj(a2, b3, c2);
            break;
          case 21:
            Yj(a2, b3, c2);
            break;
          case 22:
            c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Yj(a2, b3, c2), U = d2) : Yj(a2, b3, c2);
            break;
          default:
            Yj(a2, b3, c2);
        }
      }
      function ak(a2) {
        var b3 = a2.updateQueue;
        if (null !== b3) {
          a2.updateQueue = null;
          var c2 = a2.stateNode;
          null === c2 && (c2 = a2.stateNode = new Kj());
          b3.forEach(function(b4) {
            var d2 = bk.bind(null, a2, b4);
            c2.has(b4) || (c2.add(b4), b4.then(d2, d2));
          });
        }
      }
      function ck(a2, b3) {
        var c2 = b3.deletions;
        if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          try {
            var f3 = a2, g2 = b3, h3 = g2;
            a: for (; null !== h3; ) {
              switch (h3.tag) {
                case 5:
                  X3 = h3.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X3 = h3.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X3 = h3.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h3 = h3.return;
            }
            if (null === X3) throw Error(p2(160));
            Zj(f3, g2, e2);
            X3 = null;
            Xj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b3, l2);
          }
        }
        if (b3.subtreeFlags & 12854) for (b3 = b3.child; null !== b3; ) dk(b3, a2), b3 = b3.sibling;
      }
      function dk(a2, b3) {
        var c2 = a2.alternate, d2 = a2.flags;
        switch (a2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b3, a2);
            ek(a2);
            if (d2 & 4) {
              try {
                Pj(3, a2, a2.return), Qj(3, a2);
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
              try {
                Pj(5, a2, a2.return);
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            }
            break;
          case 1:
            ck(b3, a2);
            ek(a2);
            d2 & 512 && null !== c2 && Lj(c2, c2.return);
            break;
          case 5:
            ck(b3, a2);
            ek(a2);
            d2 & 512 && null !== c2 && Lj(c2, c2.return);
            if (a2.flags & 32) {
              var e2 = a2.stateNode;
              try {
                ob(e2, "");
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            }
            if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
              var f3 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f3, h3 = a2.type, k2 = a2.updateQueue;
              a2.updateQueue = null;
              if (null !== k2) try {
                "input" === h3 && "radio" === f3.type && null != f3.name && ab(e2, f3);
                vb(h3, g2);
                var l2 = vb(h3, f3);
                for (g2 = 0; g2 < k2.length; g2 += 2) {
                  var m2 = k2[g2], q = k2[g2 + 1];
                  "style" === m2 ? sb(e2, q) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q) : "children" === m2 ? ob(e2, q) : ta(e2, m2, q, l2);
                }
                switch (h3) {
                  case "input":
                    bb(e2, f3);
                    break;
                  case "textarea":
                    ib(e2, f3);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f3.multiple;
                    var y2 = f3.value;
                    null != y2 ? fb(e2, !!f3.multiple, y2, false) : r !== !!f3.multiple && (null != f3.defaultValue ? fb(
                      e2,
                      !!f3.multiple,
                      f3.defaultValue,
                      true
                    ) : fb(e2, !!f3.multiple, f3.multiple ? [] : "", false));
                }
                e2[Pf] = f3;
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            }
            break;
          case 6:
            ck(b3, a2);
            ek(a2);
            if (d2 & 4) {
              if (null === a2.stateNode) throw Error(p2(162));
              e2 = a2.stateNode;
              f3 = a2.memoizedProps;
              try {
                e2.nodeValue = f3;
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            }
            break;
          case 3:
            ck(b3, a2);
            ek(a2);
            if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
              bd(b3.containerInfo);
            } catch (t2) {
              W2(a2, a2.return, t2);
            }
            break;
          case 4:
            ck(b3, a2);
            ek(a2);
            break;
          case 13:
            ck(b3, a2);
            ek(a2);
            e2 = a2.child;
            e2.flags & 8192 && (f3 = null !== e2.memoizedState, e2.stateNode.isHidden = f3, !f3 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B()));
            d2 & 4 && ak(a2);
            break;
          case 22:
            m2 = null !== c2 && null !== c2.memoizedState;
            a2.mode & 1 ? (U = (l2 = U) || m2, ck(b3, a2), U = l2) : ck(b3, a2);
            ek(a2);
            if (d2 & 8192) {
              l2 = null !== a2.memoizedState;
              if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V = a2, m2 = a2.child; null !== m2; ) {
                for (q = V = m2; null !== V; ) {
                  r = V;
                  y2 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n3 = r.stateNode;
                      if ("function" === typeof n3.componentWillUnmount) {
                        d2 = r;
                        c2 = r.return;
                        try {
                          b3 = d2, n3.props = b3.memoizedProps, n3.state = b3.memoizedState, n3.componentWillUnmount();
                        } catch (t2) {
                          W2(d2, c2, t2);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r, V = y2) : gk(q);
                }
                m2 = m2.sibling;
              }
              a: for (m2 = null, q = a2; ; ) {
                if (5 === q.tag) {
                  if (null === m2) {
                    m2 = q;
                    try {
                      e2 = q.stateNode, l2 ? (f3 = e2.style, "function" === typeof f3.setProperty ? f3.setProperty("display", "none", "important") : f3.display = "none") : (h3 = q.stateNode, k2 = q.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h3.style.display = rb("display", g2));
                    } catch (t2) {
                      W2(a2, a2.return, t2);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m2) try {
                    q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                  } catch (t2) {
                    W2(a2, a2.return, t2);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a2) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a2) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a2) break a;
                  m2 === q && (m2 = null);
                  q = q.return;
                }
                m2 === q && (m2 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b3, a2);
            ek(a2);
            d2 & 4 && ak(a2);
            break;
          case 21:
            break;
          default:
            ck(
              b3,
              a2
            ), ek(a2);
        }
      }
      function ek(a2) {
        var b3 = a2.flags;
        if (b3 & 2) {
          try {
            a: {
              for (var c2 = a2.return; null !== c2; ) {
                if (Tj(c2)) {
                  var d2 = c2;
                  break a;
                }
                c2 = c2.return;
              }
              throw Error(p2(160));
            }
            switch (d2.tag) {
              case 5:
                var e2 = d2.stateNode;
                d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
                var f3 = Uj(a2);
                Wj(a2, f3, e2);
                break;
              case 3:
              case 4:
                var g2 = d2.stateNode.containerInfo, h3 = Uj(a2);
                Vj(a2, h3, g2);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k2) {
            W2(a2, a2.return, k2);
          }
          a2.flags &= -3;
        }
        b3 & 4096 && (a2.flags &= -4097);
      }
      function hk(a2, b3, c2) {
        V = a2;
        ik(a2, b3, c2);
      }
      function ik(a2, b3, c2) {
        for (var d2 = 0 !== (a2.mode & 1); null !== V; ) {
          var e2 = V, f3 = e2.child;
          if (22 === e2.tag && d2) {
            var g2 = null !== e2.memoizedState || Jj;
            if (!g2) {
              var h3 = e2.alternate, k2 = null !== h3 && null !== h3.memoizedState || U;
              h3 = Jj;
              var l2 = U;
              Jj = g2;
              if ((U = k2) && !l2) for (V = e2; null !== V; ) g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V = k2) : jk(e2);
              for (; null !== f3; ) V = f3, ik(f3, b3, c2), f3 = f3.sibling;
              V = e2;
              Jj = h3;
              U = l2;
            }
            kk(a2, b3, c2);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f3 ? (f3.return = e2, V = f3) : kk(a2, b3, c2);
        }
      }
      function kk(a2) {
        for (; null !== V; ) {
          var b3 = V;
          if (0 !== (b3.flags & 8772)) {
            var c2 = b3.alternate;
            try {
              if (0 !== (b3.flags & 8772)) switch (b3.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b3);
                  break;
                case 1:
                  var d2 = b3.stateNode;
                  if (b3.flags & 4 && !U) if (null === c2) d2.componentDidMount();
                  else {
                    var e2 = b3.elementType === b3.type ? c2.memoizedProps : Ci(b3.type, c2.memoizedProps);
                    d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f3 = b3.updateQueue;
                  null !== f3 && sh(b3, f3, d2);
                  break;
                case 3:
                  var g2 = b3.updateQueue;
                  if (null !== g2) {
                    c2 = null;
                    if (null !== b3.child) switch (b3.child.tag) {
                      case 5:
                        c2 = b3.child.stateNode;
                        break;
                      case 1:
                        c2 = b3.child.stateNode;
                    }
                    sh(b3, g2, c2);
                  }
                  break;
                case 5:
                  var h3 = b3.stateNode;
                  if (null === c2 && b3.flags & 4) {
                    c2 = h3;
                    var k2 = b3.memoizedProps;
                    switch (b3.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c2.focus();
                        break;
                      case "img":
                        k2.src && (c2.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b3.memoizedState) {
                    var l2 = b3.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q = m2.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p2(163));
              }
              U || b3.flags & 512 && Rj(b3);
            } catch (r) {
              W2(b3, b3.return, r);
            }
          }
          if (b3 === a2) {
            V = null;
            break;
          }
          c2 = b3.sibling;
          if (null !== c2) {
            c2.return = b3.return;
            V = c2;
            break;
          }
          V = b3.return;
        }
      }
      function gk(a2) {
        for (; null !== V; ) {
          var b3 = V;
          if (b3 === a2) {
            V = null;
            break;
          }
          var c2 = b3.sibling;
          if (null !== c2) {
            c2.return = b3.return;
            V = c2;
            break;
          }
          V = b3.return;
        }
      }
      function jk(a2) {
        for (; null !== V; ) {
          var b3 = V;
          try {
            switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                var c2 = b3.return;
                try {
                  Qj(4, b3);
                } catch (k2) {
                  W2(b3, c2, k2);
                }
                break;
              case 1:
                var d2 = b3.stateNode;
                if ("function" === typeof d2.componentDidMount) {
                  var e2 = b3.return;
                  try {
                    d2.componentDidMount();
                  } catch (k2) {
                    W2(b3, e2, k2);
                  }
                }
                var f3 = b3.return;
                try {
                  Rj(b3);
                } catch (k2) {
                  W2(b3, f3, k2);
                }
                break;
              case 5:
                var g2 = b3.return;
                try {
                  Rj(b3);
                } catch (k2) {
                  W2(b3, g2, k2);
                }
            }
          } catch (k2) {
            W2(b3, b3.return, k2);
          }
          if (b3 === a2) {
            V = null;
            break;
          }
          var h3 = b3.sibling;
          if (null !== h3) {
            h3.return = b3.return;
            V = h3;
            break;
          }
          V = b3.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q2 = null;
      var Y2 = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a2) {
        if (0 === (a2.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a2 = C2;
        if (0 !== a2) return a2;
        a2 = window.event;
        a2 = void 0 === a2 ? 16 : jd(a2.type);
        return a2;
      }
      function gi(a2, b3, c2, d2) {
        if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
        Ac(a2, c2, d2);
        if (0 === (K & 2) || a2 !== Q2) a2 === Q2 && (0 === (K & 2) && (qk |= c2), 4 === T && Ck(a2, Z2)), Dk(a2, d2), 1 === c2 && 0 === K && 0 === (b3.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a2, b3) {
        var c2 = a2.callbackNode;
        wc(a2, b3);
        var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
        if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
        else if (b3 = d2 & -d2, a2.callbackPriority !== b3) {
          null != c2 && bc(c2);
          if (1 === b3) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
          else {
            switch (Dc(d2)) {
              case 1:
                c2 = fc;
                break;
              case 4:
                c2 = gc;
                break;
              case 16:
                c2 = hc;
                break;
              case 536870912:
                c2 = jc;
                break;
              default:
                c2 = hc;
            }
            c2 = Fk(c2, Gk.bind(null, a2));
          }
          a2.callbackPriority = b3;
          a2.callbackNode = c2;
        }
      }
      function Gk(a2, b3) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p2(327));
        var c2 = a2.callbackNode;
        if (Hk() && a2.callbackNode !== c2) return null;
        var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
        if (0 === d2) return null;
        if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b3) b3 = Ik(a2, d2);
        else {
          b3 = d2;
          var e2 = K;
          K |= 2;
          var f3 = Jk();
          if (Q2 !== a2 || Z2 !== b3) uk = null, Gj = B() + 500, Kk(a2, b3);
          do
            try {
              Lk();
              break;
            } catch (h3) {
              Mk(a2, h3);
            }
          while (1);
          $g();
          mk.current = f3;
          K = e2;
          null !== Y2 ? b3 = 0 : (Q2 = null, Z2 = 0, b3 = T);
        }
        if (0 !== b3) {
          2 === b3 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b3 = Nk(a2, e2)));
          if (1 === b3) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B()), c2;
          if (6 === b3) Ck(a2, d2);
          else {
            e2 = a2.current.alternate;
            if (0 === (d2 & 30) && !Ok(e2) && (b3 = Ik(a2, d2), 2 === b3 && (f3 = xc(a2), 0 !== f3 && (d2 = f3, b3 = Nk(a2, f3))), 1 === b3)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B()), c2;
            a2.finishedWork = e2;
            a2.finishedLanes = d2;
            switch (b3) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Pk(a2, tk, uk);
                break;
              case 3:
                Ck(a2, d2);
                if ((d2 & 130023424) === d2 && (b3 = fk + 500 - B(), 10 < b3)) {
                  if (0 !== uc(a2, 0)) break;
                  e2 = a2.suspendedLanes;
                  if ((e2 & d2) !== d2) {
                    R();
                    a2.pingedLanes |= a2.suspendedLanes & e2;
                    break;
                  }
                  a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b3);
                  break;
                }
                Pk(a2, tk, uk);
                break;
              case 4:
                Ck(a2, d2);
                if ((d2 & 4194240) === d2) break;
                b3 = a2.eventTimes;
                for (e2 = -1; 0 < d2; ) {
                  var g2 = 31 - oc(d2);
                  f3 = 1 << g2;
                  g2 = b3[g2];
                  g2 > e2 && (e2 = g2);
                  d2 &= ~f3;
                }
                d2 = e2;
                d2 = B() - d2;
                d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
                if (10 < d2) {
                  a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
                  break;
                }
                Pk(a2, tk, uk);
                break;
              case 5:
                Pk(a2, tk, uk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Dk(a2, B());
        return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
      }
      function Nk(a2, b3) {
        var c2 = sk;
        a2.current.memoizedState.isDehydrated && (Kk(a2, b3).flags |= 256);
        a2 = Ik(a2, b3);
        2 !== a2 && (b3 = tk, tk = c2, null !== b3 && Fj(b3));
        return a2;
      }
      function Fj(a2) {
        null === tk ? tk = a2 : tk.push.apply(tk, a2);
      }
      function Ok(a2) {
        for (var b3 = a2; ; ) {
          if (b3.flags & 16384) {
            var c2 = b3.updateQueue;
            if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
              var e2 = c2[d2], f3 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He(f3(), e2)) return false;
              } catch (g2) {
                return false;
              }
            }
          }
          c2 = b3.child;
          if (b3.subtreeFlags & 16384 && null !== c2) c2.return = b3, b3 = c2;
          else {
            if (b3 === a2) break;
            for (; null === b3.sibling; ) {
              if (null === b3.return || b3.return === a2) return true;
              b3 = b3.return;
            }
            b3.sibling.return = b3.return;
            b3 = b3.sibling;
          }
        }
        return true;
      }
      function Ck(a2, b3) {
        b3 &= ~rk;
        b3 &= ~qk;
        a2.suspendedLanes |= b3;
        a2.pingedLanes &= ~b3;
        for (a2 = a2.expirationTimes; 0 < b3; ) {
          var c2 = 31 - oc(b3), d2 = 1 << c2;
          a2[c2] = -1;
          b3 &= ~d2;
        }
      }
      function Ek(a2) {
        if (0 !== (K & 6)) throw Error(p2(327));
        Hk();
        var b3 = uc(a2, 0);
        if (0 === (b3 & 1)) return Dk(a2, B()), null;
        var c2 = Ik(a2, b3);
        if (0 !== a2.tag && 2 === c2) {
          var d2 = xc(a2);
          0 !== d2 && (b3 = d2, c2 = Nk(a2, d2));
        }
        if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b3), Dk(a2, B()), c2;
        if (6 === c2) throw Error(p2(345));
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = b3;
        Pk(a2, tk, uk);
        Dk(a2, B());
        return null;
      }
      function Qk(a2, b3) {
        var c2 = K;
        K |= 1;
        try {
          return a2(b3);
        } finally {
          K = c2, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a2) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b3 = K;
        K |= 1;
        var c2 = ok.transition, d2 = C2;
        try {
          if (ok.transition = null, C2 = 1, a2) return a2();
        } finally {
          C2 = d2, ok.transition = c2, K = b3, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E2(ej);
      }
      function Kk(a2, b3) {
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        var c2 = a2.timeoutHandle;
        -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
        if (null !== Y2) for (c2 = Y2.return; null !== c2; ) {
          var d2 = c2;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              zh();
              E2(Wf);
              E2(H2);
              Eh();
              break;
            case 5:
              Bh(d2);
              break;
            case 4:
              zh();
              break;
            case 13:
              E2(L2);
              break;
            case 19:
              E2(L2);
              break;
            case 10:
              ah(d2.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c2 = c2.return;
        }
        Q2 = a2;
        Y2 = a2 = Pg(a2.current, null);
        Z2 = fj = b3;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b3 = 0; b3 < fh.length; b3++) if (c2 = fh[b3], d2 = c2.interleaved, null !== d2) {
            c2.interleaved = null;
            var e2 = d2.next, f3 = c2.pending;
            if (null !== f3) {
              var g2 = f3.next;
              f3.next = e2;
              d2.next = g2;
            }
            c2.pending = d2;
          }
          fh = null;
        }
        return a2;
      }
      function Mk(a2, b3) {
        do {
          var c2 = Y2;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d2 = M.memoizedState; null !== d2; ) {
                var e2 = d2.queue;
                null !== e2 && (e2.pending = null);
                d2 = d2.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N2 = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c2 || null === c2.return) {
              T = 1;
              pk = b3;
              Y2 = null;
              break;
            }
            a: {
              var f3 = a2, g2 = c2.return, h3 = c2, k2 = b3;
              b3 = Z2;
              h3.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m2 = h3, q = m2.tag;
                if (0 === (m2.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m2.alternate;
                  r ? (m2.updateQueue = r.updateQueue, m2.memoizedState = r.memoizedState, m2.lanes = r.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
                }
                var y2 = Ui(g2);
                if (null !== y2) {
                  y2.flags &= -257;
                  Vi(y2, g2, h3, f3, b3);
                  y2.mode & 1 && Si(f3, l2, b3);
                  b3 = y2;
                  k2 = l2;
                  var n3 = b3.updateQueue;
                  if (null === n3) {
                    var t2 = /* @__PURE__ */ new Set();
                    t2.add(k2);
                    b3.updateQueue = t2;
                  } else n3.add(k2);
                  break a;
                } else {
                  if (0 === (b3 & 1)) {
                    Si(f3, l2, b3);
                    tj();
                    break a;
                  }
                  k2 = Error(p2(426));
                }
              } else if (I && h3.mode & 1) {
                var J = Ui(g2);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g2, h3, f3, b3);
                  Jg(Ji(k2, h3));
                  break a;
                }
              }
              f3 = k2 = Ji(k2, h3);
              4 !== T && (T = 2);
              null === sk ? sk = [f3] : sk.push(f3);
              f3 = g2;
              do {
                switch (f3.tag) {
                  case 3:
                    f3.flags |= 65536;
                    b3 &= -b3;
                    f3.lanes |= b3;
                    var x2 = Ni(f3, k2, b3);
                    ph(f3, x2);
                    break a;
                  case 1:
                    h3 = k2;
                    var w = f3.type, u2 = f3.stateNode;
                    if (0 === (f3.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                      f3.flags |= 65536;
                      b3 &= -b3;
                      f3.lanes |= b3;
                      var F2 = Qi(f3, h3, b3);
                      ph(f3, F2);
                      break a;
                    }
                }
                f3 = f3.return;
              } while (null !== f3);
            }
            Sk(c2);
          } catch (na) {
            b3 = na;
            Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a2 = mk.current;
        mk.current = Rh;
        return null === a2 ? Rh : a2;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
      }
      function Ik(a2, b3) {
        var c2 = K;
        K |= 2;
        var d2 = Jk();
        if (Q2 !== a2 || Z2 !== b3) uk = null, Kk(a2, b3);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a2, e2);
          }
        while (1);
        $g();
        K = c2;
        mk.current = d2;
        if (null !== Y2) throw Error(p2(261));
        Q2 = null;
        Z2 = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y2; ) Uk(Y2);
      }
      function Lk() {
        for (; null !== Y2 && !cc(); ) Uk(Y2);
      }
      function Uk(a2) {
        var b3 = Vk(a2.alternate, a2, fj);
        a2.memoizedProps = a2.pendingProps;
        null === b3 ? Sk(a2) : Y2 = b3;
        nk.current = null;
      }
      function Sk(a2) {
        var b3 = a2;
        do {
          var c2 = b3.alternate;
          a2 = b3.return;
          if (0 === (b3.flags & 32768)) {
            if (c2 = Ej(c2, b3, fj), null !== c2) {
              Y2 = c2;
              return;
            }
          } else {
            c2 = Ij(c2, b3);
            if (null !== c2) {
              c2.flags &= 32767;
              Y2 = c2;
              return;
            }
            if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
            else {
              T = 6;
              Y2 = null;
              return;
            }
          }
          b3 = b3.sibling;
          if (null !== b3) {
            Y2 = b3;
            return;
          }
          Y2 = b3 = a2;
        } while (null !== b3);
        0 === T && (T = 5);
      }
      function Pk(a2, b3, c2) {
        var d2 = C2, e2 = ok.transition;
        try {
          ok.transition = null, C2 = 1, Wk(a2, b3, c2, d2);
        } finally {
          ok.transition = e2, C2 = d2;
        }
        return null;
      }
      function Wk(a2, b3, c2, d2) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p2(327));
        c2 = a2.finishedWork;
        var e2 = a2.finishedLanes;
        if (null === c2) return null;
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        if (c2 === a2.current) throw Error(p2(177));
        a2.callbackNode = null;
        a2.callbackPriority = 0;
        var f3 = c2.lanes | c2.childLanes;
        Bc(a2, f3);
        a2 === Q2 && (Y2 = Q2 = null, Z2 = 0);
        0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f3 = 0 !== (c2.flags & 15990);
        if (0 !== (c2.subtreeFlags & 15990) || f3) {
          f3 = ok.transition;
          ok.transition = null;
          var g2 = C2;
          C2 = 1;
          var h3 = K;
          K |= 4;
          nk.current = null;
          Oj(a2, c2);
          dk(c2, a2);
          Oe2(Df);
          dd = !!Cf;
          Df = Cf = null;
          a2.current = c2;
          hk(c2, a2, e2);
          dc();
          K = h3;
          C2 = g2;
          ok.transition = f3;
        } else a2.current = c2;
        vk && (vk = false, wk = a2, xk = e2);
        f3 = a2.pendingLanes;
        0 === f3 && (Ri = null);
        mc(c2.stateNode, d2);
        Dk(a2, B());
        if (null !== b3) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b3.length; c2++) e2 = b3[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
        0 !== (xk & 1) && 0 !== a2.tag && Hk();
        f3 = a2.pendingLanes;
        0 !== (f3 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a2 = Dc(xk), b3 = ok.transition, c2 = C2;
          try {
            ok.transition = null;
            C2 = 16 > a2 ? 16 : a2;
            if (null === wk) var d2 = false;
            else {
              a2 = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p2(331));
              var e2 = K;
              K |= 4;
              for (V = a2.current; null !== V; ) {
                var f3 = V, g2 = f3.child;
                if (0 !== (V.flags & 16)) {
                  var h3 = f3.deletions;
                  if (null !== h3) {
                    for (var k2 = 0; k2 < h3.length; k2++) {
                      var l2 = h3[k2];
                      for (V = l2; null !== V; ) {
                        var m2 = V;
                        switch (m2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m2, f3);
                        }
                        var q = m2.child;
                        if (null !== q) q.return = m2, V = q;
                        else for (; null !== V; ) {
                          m2 = V;
                          var r = m2.sibling, y2 = m2.return;
                          Sj(m2);
                          if (m2 === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y2;
                            V = r;
                            break;
                          }
                          V = y2;
                        }
                      }
                    }
                    var n3 = f3.alternate;
                    if (null !== n3) {
                      var t2 = n3.child;
                      if (null !== t2) {
                        n3.child = null;
                        do {
                          var J = t2.sibling;
                          t2.sibling = null;
                          t2 = J;
                        } while (null !== t2);
                      }
                    }
                    V = f3;
                  }
                }
                if (0 !== (f3.subtreeFlags & 2064) && null !== g2) g2.return = f3, V = g2;
                else b: for (; null !== V; ) {
                  f3 = V;
                  if (0 !== (f3.flags & 2048)) switch (f3.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f3, f3.return);
                  }
                  var x2 = f3.sibling;
                  if (null !== x2) {
                    x2.return = f3.return;
                    V = x2;
                    break b;
                  }
                  V = f3.return;
                }
              }
              var w = a2.current;
              for (V = w; null !== V; ) {
                g2 = V;
                var u2 = g2.child;
                if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V = u2;
                else b: for (g2 = w; null !== V; ) {
                  h3 = V;
                  if (0 !== (h3.flags & 2048)) try {
                    switch (h3.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h3);
                    }
                  } catch (na) {
                    W2(h3, h3.return, na);
                  }
                  if (h3 === g2) {
                    V = null;
                    break b;
                  }
                  var F2 = h3.sibling;
                  if (null !== F2) {
                    F2.return = h3.return;
                    V = F2;
                    break b;
                  }
                  V = h3.return;
                }
              }
              K = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a2);
              } catch (na) {
              }
              d2 = true;
            }
            return d2;
          } finally {
            C2 = c2, ok.transition = b3;
          }
        }
        return false;
      }
      function Xk(a2, b3, c2) {
        b3 = Ji(c2, b3);
        b3 = Ni(a2, b3, 1);
        a2 = nh(a2, b3, 1);
        b3 = R();
        null !== a2 && (Ac(a2, 1, b3), Dk(a2, b3));
      }
      function W2(a2, b3, c2) {
        if (3 === a2.tag) Xk(a2, a2, c2);
        else for (; null !== b3; ) {
          if (3 === b3.tag) {
            Xk(b3, a2, c2);
            break;
          } else if (1 === b3.tag) {
            var d2 = b3.stateNode;
            if ("function" === typeof b3.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
              a2 = Ji(c2, a2);
              a2 = Qi(b3, a2, 1);
              b3 = nh(b3, a2, 1);
              a2 = R();
              null !== b3 && (Ac(b3, 1, a2), Dk(b3, a2));
              break;
            }
          }
          b3 = b3.return;
        }
      }
      function Ti(a2, b3, c2) {
        var d2 = a2.pingCache;
        null !== d2 && d2.delete(b3);
        b3 = R();
        a2.pingedLanes |= a2.suspendedLanes & c2;
        Q2 === a2 && (Z2 & c2) === c2 && (4 === T || 3 === T && (Z2 & 130023424) === Z2 && 500 > B() - fk ? Kk(a2, 0) : rk |= c2);
        Dk(a2, b3);
      }
      function Yk(a2, b3) {
        0 === b3 && (0 === (a2.mode & 1) ? b3 = 1 : (b3 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c2 = R();
        a2 = ih(a2, b3);
        null !== a2 && (Ac(a2, b3, c2), Dk(a2, c2));
      }
      function uj(a2) {
        var b3 = a2.memoizedState, c2 = 0;
        null !== b3 && (c2 = b3.retryLane);
        Yk(a2, c2);
      }
      function bk(a2, b3) {
        var c2 = 0;
        switch (a2.tag) {
          case 13:
            var d2 = a2.stateNode;
            var e2 = a2.memoizedState;
            null !== e2 && (c2 = e2.retryLane);
            break;
          case 19:
            d2 = a2.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d2 && d2.delete(b3);
        Yk(a2, c2);
      }
      var Vk;
      Vk = function(a2, b3, c2) {
        if (null !== a2) if (a2.memoizedProps !== b3.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a2.lanes & c2) && 0 === (b3.flags & 128)) return dh = false, yj(a2, b3, c2);
          dh = 0 !== (a2.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b3.flags & 1048576) && ug(b3, ng, b3.index);
        b3.lanes = 0;
        switch (b3.tag) {
          case 2:
            var d2 = b3.type;
            ij(a2, b3);
            a2 = b3.pendingProps;
            var e2 = Yf(b3, H2.current);
            ch(b3, c2);
            e2 = Nh(null, b3, d2, a2, e2, c2);
            var f3 = Sh();
            b3.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b3.tag = 1, b3.memoizedState = null, b3.updateQueue = null, Zf(d2) ? (f3 = true, cg(b3)) : f3 = false, b3.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b3), e2.updater = Ei, b3.stateNode = e2, e2._reactInternals = b3, Ii(b3, d2, a2, c2), b3 = jj(null, b3, d2, true, f3, c2)) : (b3.tag = 0, I && f3 && vg(b3), Xi(null, b3, e2, c2), b3 = b3.child);
            return b3;
          case 16:
            d2 = b3.elementType;
            a: {
              ij(a2, b3);
              a2 = b3.pendingProps;
              e2 = d2._init;
              d2 = e2(d2._payload);
              b3.type = d2;
              e2 = b3.tag = Zk(d2);
              a2 = Ci(d2, a2);
              switch (e2) {
                case 0:
                  b3 = cj(null, b3, d2, a2, c2);
                  break a;
                case 1:
                  b3 = hj(null, b3, d2, a2, c2);
                  break a;
                case 11:
                  b3 = Yi(null, b3, d2, a2, c2);
                  break a;
                case 14:
                  b3 = $i(null, b3, d2, Ci(d2.type, a2), c2);
                  break a;
              }
              throw Error(p2(
                306,
                d2,
                ""
              ));
            }
            return b3;
          case 0:
            return d2 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b3, d2, e2, c2);
          case 1:
            return d2 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b3, d2, e2, c2);
          case 3:
            a: {
              kj(b3);
              if (null === a2) throw Error(p2(387));
              d2 = b3.pendingProps;
              f3 = b3.memoizedState;
              e2 = f3.element;
              lh(a2, b3);
              qh(b3, d2, null, c2);
              var g2 = b3.memoizedState;
              d2 = g2.element;
              if (f3.isDehydrated) if (f3 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b3.updateQueue.baseState = f3, b3.memoizedState = f3, b3.flags & 256) {
                e2 = Ji(Error(p2(423)), b3);
                b3 = lj(a2, b3, d2, c2, e2);
                break a;
              } else if (d2 !== e2) {
                e2 = Ji(Error(p2(424)), b3);
                b3 = lj(a2, b3, d2, c2, e2);
                break a;
              } else for (yg = Lf(b3.stateNode.containerInfo.firstChild), xg = b3, I = true, zg = null, c2 = Vg(b3, null, d2, c2), b3.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
              else {
                Ig();
                if (d2 === e2) {
                  b3 = Zi(a2, b3, c2);
                  break a;
                }
                Xi(a2, b3, d2, c2);
              }
              b3 = b3.child;
            }
            return b3;
          case 5:
            return Ah(b3), null === a2 && Eg(b3), d2 = b3.type, e2 = b3.pendingProps, f3 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f3 && Ef(d2, f3) && (b3.flags |= 32), gj(a2, b3), Xi(a2, b3, g2, c2), b3.child;
          case 6:
            return null === a2 && Eg(b3), null;
          case 13:
            return oj(a2, b3, c2);
          case 4:
            return yh(b3, b3.stateNode.containerInfo), d2 = b3.pendingProps, null === a2 ? b3.child = Ug(b3, null, d2, c2) : Xi(a2, b3, d2, c2), b3.child;
          case 11:
            return d2 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b3, d2, e2, c2);
          case 7:
            return Xi(a2, b3, b3.pendingProps, c2), b3.child;
          case 8:
            return Xi(a2, b3, b3.pendingProps.children, c2), b3.child;
          case 12:
            return Xi(a2, b3, b3.pendingProps.children, c2), b3.child;
          case 10:
            a: {
              d2 = b3.type._context;
              e2 = b3.pendingProps;
              f3 = b3.memoizedProps;
              g2 = e2.value;
              G(Wg, d2._currentValue);
              d2._currentValue = g2;
              if (null !== f3) if (He(f3.value, g2)) {
                if (f3.children === e2.children && !Wf.current) {
                  b3 = Zi(a2, b3, c2);
                  break a;
                }
              } else for (f3 = b3.child, null !== f3 && (f3.return = b3); null !== f3; ) {
                var h3 = f3.dependencies;
                if (null !== h3) {
                  g2 = f3.child;
                  for (var k2 = h3.firstContext; null !== k2; ) {
                    if (k2.context === d2) {
                      if (1 === f3.tag) {
                        k2 = mh(-1, c2 & -c2);
                        k2.tag = 2;
                        var l2 = f3.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f3.lanes |= c2;
                      k2 = f3.alternate;
                      null !== k2 && (k2.lanes |= c2);
                      bh(
                        f3.return,
                        c2,
                        b3
                      );
                      h3.lanes |= c2;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f3.tag) g2 = f3.type === b3.type ? null : f3.child;
                else if (18 === f3.tag) {
                  g2 = f3.return;
                  if (null === g2) throw Error(p2(341));
                  g2.lanes |= c2;
                  h3 = g2.alternate;
                  null !== h3 && (h3.lanes |= c2);
                  bh(g2, c2, b3);
                  g2 = f3.sibling;
                } else g2 = f3.child;
                if (null !== g2) g2.return = f3;
                else for (g2 = f3; null !== g2; ) {
                  if (g2 === b3) {
                    g2 = null;
                    break;
                  }
                  f3 = g2.sibling;
                  if (null !== f3) {
                    f3.return = g2.return;
                    g2 = f3;
                    break;
                  }
                  g2 = g2.return;
                }
                f3 = g2;
              }
              Xi(a2, b3, e2.children, c2);
              b3 = b3.child;
            }
            return b3;
          case 9:
            return e2 = b3.type, d2 = b3.pendingProps.children, ch(b3, c2), e2 = eh(e2), d2 = d2(e2), b3.flags |= 1, Xi(a2, b3, d2, c2), b3.child;
          case 14:
            return d2 = b3.type, e2 = Ci(d2, b3.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b3, d2, e2, c2);
          case 15:
            return bj(a2, b3, b3.type, b3.pendingProps, c2);
          case 17:
            return d2 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b3), b3.tag = 1, Zf(d2) ? (a2 = true, cg(b3)) : a2 = false, ch(b3, c2), Gi(b3, d2, e2), Ii(b3, d2, e2, c2), jj(null, b3, d2, true, a2, c2);
          case 19:
            return xj(a2, b3, c2);
          case 22:
            return dj(a2, b3, c2);
        }
        throw Error(p2(156, b3.tag));
      };
      function Fk(a2, b3) {
        return ac(a2, b3);
      }
      function $k(a2, b3, c2, d2) {
        this.tag = a2;
        this.key = c2;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b3;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d2;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a2, b3, c2, d2) {
        return new $k(a2, b3, c2, d2);
      }
      function aj(a2) {
        a2 = a2.prototype;
        return !(!a2 || !a2.isReactComponent);
      }
      function Zk(a2) {
        if ("function" === typeof a2) return aj(a2) ? 1 : 0;
        if (void 0 !== a2 && null !== a2) {
          a2 = a2.$$typeof;
          if (a2 === Da) return 11;
          if (a2 === Ga) return 14;
        }
        return 2;
      }
      function Pg(a2, b3) {
        var c2 = a2.alternate;
        null === c2 ? (c2 = Bg(a2.tag, b3, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b3, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
        c2.flags = a2.flags & 14680064;
        c2.childLanes = a2.childLanes;
        c2.lanes = a2.lanes;
        c2.child = a2.child;
        c2.memoizedProps = a2.memoizedProps;
        c2.memoizedState = a2.memoizedState;
        c2.updateQueue = a2.updateQueue;
        b3 = a2.dependencies;
        c2.dependencies = null === b3 ? null : { lanes: b3.lanes, firstContext: b3.firstContext };
        c2.sibling = a2.sibling;
        c2.index = a2.index;
        c2.ref = a2.ref;
        return c2;
      }
      function Rg(a2, b3, c2, d2, e2, f3) {
        var g2 = 2;
        d2 = a2;
        if ("function" === typeof a2) aj(a2) && (g2 = 1);
        else if ("string" === typeof a2) g2 = 5;
        else a: switch (a2) {
          case ya:
            return Tg(c2.children, e2, f3, b3);
          case za:
            g2 = 8;
            e2 |= 8;
            break;
          case Aa:
            return a2 = Bg(12, c2, b3, e2 | 2), a2.elementType = Aa, a2.lanes = f3, a2;
          case Ea:
            return a2 = Bg(13, c2, b3, e2), a2.elementType = Ea, a2.lanes = f3, a2;
          case Fa:
            return a2 = Bg(19, c2, b3, e2), a2.elementType = Fa, a2.lanes = f3, a2;
          case Ia:
            return pj(c2, e2, f3, b3);
          default:
            if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
            throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
        }
        b3 = Bg(g2, c2, b3, e2);
        b3.elementType = a2;
        b3.type = d2;
        b3.lanes = f3;
        return b3;
      }
      function Tg(a2, b3, c2, d2) {
        a2 = Bg(7, a2, d2, b3);
        a2.lanes = c2;
        return a2;
      }
      function pj(a2, b3, c2, d2) {
        a2 = Bg(22, a2, d2, b3);
        a2.elementType = Ia;
        a2.lanes = c2;
        a2.stateNode = { isHidden: false };
        return a2;
      }
      function Qg(a2, b3, c2) {
        a2 = Bg(6, a2, null, b3);
        a2.lanes = c2;
        return a2;
      }
      function Sg(a2, b3, c2) {
        b3 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b3);
        b3.lanes = c2;
        b3.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
        return b3;
      }
      function al(a2, b3, c2, d2, e2) {
        this.tag = b3;
        this.containerInfo = a2;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d2;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a2, b3, c2, d2, e2, f3, g2, h3, k2) {
        a2 = new al(a2, b3, c2, h3, k2);
        1 === b3 ? (b3 = 1, true === f3 && (b3 |= 8)) : b3 = 0;
        f3 = Bg(3, null, null, b3);
        a2.current = f3;
        f3.stateNode = a2;
        f3.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f3);
        return a2;
      }
      function cl(a2, b3, c2) {
        var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b3, implementation: c2 };
      }
      function dl(a2) {
        if (!a2) return Vf;
        a2 = a2._reactInternals;
        a: {
          if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p2(170));
          var b3 = a2;
          do {
            switch (b3.tag) {
              case 3:
                b3 = b3.stateNode.context;
                break a;
              case 1:
                if (Zf(b3.type)) {
                  b3 = b3.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b3 = b3.return;
          } while (null !== b3);
          throw Error(p2(171));
        }
        if (1 === a2.tag) {
          var c2 = a2.type;
          if (Zf(c2)) return bg(a2, c2, b3);
        }
        return b3;
      }
      function el(a2, b3, c2, d2, e2, f3, g2, h3, k2) {
        a2 = bl(c2, d2, true, a2, e2, f3, g2, h3, k2);
        a2.context = dl(null);
        c2 = a2.current;
        d2 = R();
        e2 = yi(c2);
        f3 = mh(d2, e2);
        f3.callback = void 0 !== b3 && null !== b3 ? b3 : null;
        nh(c2, f3, e2);
        a2.current.lanes = e2;
        Ac(a2, e2, d2);
        Dk(a2, d2);
        return a2;
      }
      function fl(a2, b3, c2, d2) {
        var e2 = b3.current, f3 = R(), g2 = yi(e2);
        c2 = dl(c2);
        null === b3.context ? b3.context = c2 : b3.pendingContext = c2;
        b3 = mh(f3, g2);
        b3.payload = { element: a2 };
        d2 = void 0 === d2 ? null : d2;
        null !== d2 && (b3.callback = d2);
        a2 = nh(e2, b3, g2);
        null !== a2 && (gi(a2, e2, g2, f3), oh(a2, e2, g2));
        return g2;
      }
      function gl(a2) {
        a2 = a2.current;
        if (!a2.child) return null;
        switch (a2.child.tag) {
          case 5:
            return a2.child.stateNode;
          default:
            return a2.child.stateNode;
        }
      }
      function hl(a2, b3) {
        a2 = a2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          var c2 = a2.retryLane;
          a2.retryLane = 0 !== c2 && c2 < b3 ? c2 : b3;
        }
      }
      function il(a2, b3) {
        hl(a2, b3);
        (a2 = a2.alternate) && hl(a2, b3);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a2) {
        console.error(a2);
      };
      function ll(a2) {
        this._internalRoot = a2;
      }
      ml.prototype.render = ll.prototype.render = function(a2) {
        var b3 = this._internalRoot;
        if (null === b3) throw Error(p2(409));
        fl(a2, b3, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a2 = this._internalRoot;
        if (null !== a2) {
          this._internalRoot = null;
          var b3 = a2.containerInfo;
          Rk(function() {
            fl(null, a2, null, null);
          });
          b3[uf] = null;
        }
      };
      function ml(a2) {
        this._internalRoot = a2;
      }
      ml.prototype.unstable_scheduleHydration = function(a2) {
        if (a2) {
          var b3 = Hc();
          a2 = { blockedOn: null, target: a2, priority: b3 };
          for (var c2 = 0; c2 < Qc.length && 0 !== b3 && b3 < Qc[c2].priority; c2++) ;
          Qc.splice(c2, 0, a2);
          0 === c2 && Vc(a2);
        }
      };
      function nl(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
      }
      function ol(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
      }
      function pl() {
      }
      function ql(a2, b3, c2, d2, e2) {
        if (e2) {
          if ("function" === typeof d2) {
            var f3 = d2;
            d2 = function() {
              var a3 = gl(g2);
              f3.call(a3);
            };
          }
          var g2 = el(b3, d2, a2, 0, null, false, false, "", pl);
          a2._reactRootContainer = g2;
          a2[uf] = g2.current;
          sf(8 === a2.nodeType ? a2.parentNode : a2);
          Rk();
          return g2;
        }
        for (; e2 = a2.lastChild; ) a2.removeChild(e2);
        if ("function" === typeof d2) {
          var h3 = d2;
          d2 = function() {
            var a3 = gl(k2);
            h3.call(a3);
          };
        }
        var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
        a2._reactRootContainer = k2;
        a2[uf] = k2.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        Rk(function() {
          fl(b3, k2, c2, d2);
        });
        return k2;
      }
      function rl(a2, b3, c2, d2, e2) {
        var f3 = c2._reactRootContainer;
        if (f3) {
          var g2 = f3;
          if ("function" === typeof e2) {
            var h3 = e2;
            e2 = function() {
              var a3 = gl(g2);
              h3.call(a3);
            };
          }
          fl(b3, g2, a2, e2);
        } else g2 = ql(c2, b3, a2, e2, d2);
        return gl(g2);
      }
      Ec = function(a2) {
        switch (a2.tag) {
          case 3:
            var b3 = a2.stateNode;
            if (b3.current.memoizedState.isDehydrated) {
              var c2 = tc(b3.pendingLanes);
              0 !== c2 && (Cc(b3, c2 | 1), Dk(b3, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b4 = ih(a2, 1);
              if (null !== b4) {
                var c3 = R();
                gi(b4, a2, 1, c3);
              }
            }), il(a2, 1);
        }
      };
      Fc = function(a2) {
        if (13 === a2.tag) {
          var b3 = ih(a2, 134217728);
          if (null !== b3) {
            var c2 = R();
            gi(b3, a2, 134217728, c2);
          }
          il(a2, 134217728);
        }
      };
      Gc = function(a2) {
        if (13 === a2.tag) {
          var b3 = yi(a2), c2 = ih(a2, b3);
          if (null !== c2) {
            var d2 = R();
            gi(c2, a2, b3, d2);
          }
          il(a2, b3);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a2, b3) {
        var c2 = C2;
        try {
          return C2 = a2, b3();
        } finally {
          C2 = c2;
        }
      };
      yb = function(a2, b3, c2) {
        switch (b3) {
          case "input":
            bb(a2, c2);
            b3 = c2.name;
            if ("radio" === c2.type && null != b3) {
              for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
              c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
              for (b3 = 0; b3 < c2.length; b3++) {
                var d2 = c2[b3];
                if (d2 !== a2 && d2.form === a2.form) {
                  var e2 = Db(d2);
                  if (!e2) throw Error(p2(90));
                  Wa(d2);
                  bb(d2, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a2, c2);
            break;
          case "select":
            b3 = c2.value, null != b3 && fb(a2, !!c2.multiple, b3, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
        a2 = Zb(a2);
        return null === a2 ? null : a2.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a2) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a2, b3) {
        var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b3)) throw Error(p2(200));
        return cl(a2, b3, null, c2);
      };
      exports.createRoot = function(a2, b3) {
        if (!nl(a2)) throw Error(p2(299));
        var c2 = false, d2 = "", e2 = kl;
        null !== b3 && void 0 !== b3 && (true === b3.unstable_strictMode && (c2 = true), void 0 !== b3.identifierPrefix && (d2 = b3.identifierPrefix), void 0 !== b3.onRecoverableError && (e2 = b3.onRecoverableError));
        b3 = bl(a2, 1, false, null, null, c2, false, d2, e2);
        a2[uf] = b3.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        return new ll(b3);
      };
      exports.findDOMNode = function(a2) {
        if (null == a2) return null;
        if (1 === a2.nodeType) return a2;
        var b3 = a2._reactInternals;
        if (void 0 === b3) {
          if ("function" === typeof a2.render) throw Error(p2(188));
          a2 = Object.keys(a2).join(",");
          throw Error(p2(268, a2));
        }
        a2 = Zb(b3);
        a2 = null === a2 ? null : a2.stateNode;
        return a2;
      };
      exports.flushSync = function(a2) {
        return Rk(a2);
      };
      exports.hydrate = function(a2, b3, c2) {
        if (!ol(b3)) throw Error(p2(200));
        return rl(null, a2, b3, true, c2);
      };
      exports.hydrateRoot = function(a2, b3, c2) {
        if (!nl(a2)) throw Error(p2(405));
        var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f3 = "", g2 = kl;
        null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f3 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
        b3 = el(b3, null, a2, 1, null != c2 ? c2 : null, e2, false, f3, g2);
        a2[uf] = b3.current;
        sf(a2);
        if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b3.mutableSourceEagerHydrationData ? b3.mutableSourceEagerHydrationData = [c2, e2] : b3.mutableSourceEagerHydrationData.push(
          c2,
          e2
        );
        return new ml(b3);
      };
      exports.render = function(a2, b3, c2) {
        if (!ol(b3)) throw Error(p2(200));
        return rl(null, a2, b3, false, c2);
      };
      exports.unmountComponentAtNode = function(a2) {
        if (!ol(a2)) throw Error(p2(40));
        return a2._reactRootContainer ? (Rk(function() {
          rl(null, null, a2, false, function() {
            a2._reactRootContainer = null;
            a2[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a2, b3, c2, d2) {
        if (!ol(c2)) throw Error(p2(200));
        if (null == a2 || void 0 === a2._reactInternals) throw Error(p2(38));
        return rl(a2, b3, c2, false, d2);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m2 = require_react_dom();
      if (true) {
        exports.createRoot = m2.createRoot;
        exports.hydrateRoot = m2.hydrateRoot;
      } else {
        i2 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c2, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m2.createRoot(c2, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c2, h3, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m2.hydrateRoot(c2, h3, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
      }
      var i2;
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/factoryWithThrowingShims.js
  var require_factoryWithThrowingShims = __commonJS({
    "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bigint: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (false) {
        ReactIs = null;
        throwOnDirectAccess = true;
        module.exports = null(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = require_factoryWithThrowingShims()();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase, toCamelCase, toPascalCase, mergeClasses, hasA11yProp;
  var init_utils = __esm({
    "node_modules/lucide-react/dist/esm/shared/src/utils.js"() {
      toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      toCamelCase = (string) => string.replace(
        /^([A-Z])|[\s-_]+(\w)/g,
        (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
      );
      toPascalCase = (string) => {
        const camelCase = toCamelCase(string);
        return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
      };
      mergeClasses = (...classes) => classes.filter((className, index, array) => {
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
      }).join(" ").trim();
      hasA11yProp = (props) => {
        for (const prop in props) {
          if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
          }
        }
      };
    }
  });

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes;
  var init_defaultAttributes = __esm({
    "node_modules/lucide-react/dist/esm/defaultAttributes.js"() {
      defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };
    }
  });

  // node_modules/lucide-react/dist/esm/Icon.js
  var import_react, Icon;
  var init_Icon = __esm({
    "node_modules/lucide-react/dist/esm/Icon.js"() {
      import_react = __toESM(require_react());
      init_defaultAttributes();
      init_utils();
      Icon = (0, import_react.forwardRef)(
        ({
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          iconNode,
          ...rest
        }, ref) => (0, import_react.createElement)(
          "svg",
          {
            ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: mergeClasses("lucide", className),
            ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
            ...rest
          },
          [
            ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        )
      );
    }
  });

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react2, createLucideIcon;
  var init_createLucideIcon = __esm({
    "node_modules/lucide-react/dist/esm/createLucideIcon.js"() {
      import_react2 = __toESM(require_react());
      init_utils();
      init_Icon();
      createLucideIcon = (iconName, iconNode) => {
        const Component4 = (0, import_react2.forwardRef)(
          ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(
              `lucide-${toKebabCase(toPascalCase(iconName))}`,
              `lucide-${iconName}`,
              className
            ),
            ...props
          })
        );
        Component4.displayName = toPascalCase(iconName);
        return Component4;
      };
    }
  });

  // node_modules/lucide-react/dist/esm/icons/calendar-check.js
  var __iconNode, CalendarCheck;
  var init_calendar_check = __esm({
    "node_modules/lucide-react/dist/esm/icons/calendar-check.js"() {
      init_createLucideIcon();
      __iconNode = [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
        ["path", { d: "M3 10h18", key: "8toen8" }],
        ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
      ];
      CalendarCheck = createLucideIcon("calendar-check", __iconNode);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/circle-check-big.js
  var __iconNode2, CircleCheckBig;
  var init_circle_check_big = __esm({
    "node_modules/lucide-react/dist/esm/icons/circle-check-big.js"() {
      init_createLucideIcon();
      __iconNode2 = [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
      ];
      CircleCheckBig = createLucideIcon("circle-check-big", __iconNode2);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/circle-minus.js
  var __iconNode3, CircleMinus;
  var init_circle_minus = __esm({
    "node_modules/lucide-react/dist/esm/icons/circle-minus.js"() {
      init_createLucideIcon();
      __iconNode3 = [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 12h8", key: "1wcyev" }]
      ];
      CircleMinus = createLucideIcon("circle-minus", __iconNode3);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/circle-plus.js
  var __iconNode4, CirclePlus;
  var init_circle_plus = __esm({
    "node_modules/lucide-react/dist/esm/icons/circle-plus.js"() {
      init_createLucideIcon();
      __iconNode4 = [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 12h8", key: "1wcyev" }],
        ["path", { d: "M12 8v8", key: "napkw2" }]
      ];
      CirclePlus = createLucideIcon("circle-plus", __iconNode4);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/circle-x.js
  var __iconNode5, CircleX;
  var init_circle_x = __esm({
    "node_modules/lucide-react/dist/esm/icons/circle-x.js"() {
      init_createLucideIcon();
      __iconNode5 = [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }]
      ];
      CircleX = createLucideIcon("circle-x", __iconNode5);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/cloud-upload.js
  var __iconNode6, CloudUpload;
  var init_cloud_upload = __esm({
    "node_modules/lucide-react/dist/esm/icons/cloud-upload.js"() {
      init_createLucideIcon();
      __iconNode6 = [
        ["path", { d: "M12 13v8", key: "1l5pq0" }],
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
        ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
      ];
      CloudUpload = createLucideIcon("cloud-upload", __iconNode6);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/credit-card.js
  var __iconNode7, CreditCard;
  var init_credit_card = __esm({
    "node_modules/lucide-react/dist/esm/icons/credit-card.js"() {
      init_createLucideIcon();
      __iconNode7 = [
        ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
      ];
      CreditCard = createLucideIcon("credit-card", __iconNode7);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/dollar-sign.js
  var __iconNode8, DollarSign;
  var init_dollar_sign = __esm({
    "node_modules/lucide-react/dist/esm/icons/dollar-sign.js"() {
      init_createLucideIcon();
      __iconNode8 = [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
      ];
      DollarSign = createLucideIcon("dollar-sign", __iconNode8);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/facebook.js
  var __iconNode9, Facebook;
  var init_facebook = __esm({
    "node_modules/lucide-react/dist/esm/icons/facebook.js"() {
      init_createLucideIcon();
      __iconNode9 = [
        [
          "path",
          { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
        ]
      ];
      Facebook = createLucideIcon("facebook", __iconNode9);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/house.js
  var __iconNode10, House;
  var init_house = __esm({
    "node_modules/lucide-react/dist/esm/icons/house.js"() {
      init_createLucideIcon();
      __iconNode10 = [
        ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
          }
        ]
      ];
      House = createLucideIcon("house", __iconNode10);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/image.js
  var __iconNode11, Image;
  var init_image = __esm({
    "node_modules/lucide-react/dist/esm/icons/image.js"() {
      init_createLucideIcon();
      __iconNode11 = [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
        ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
      ];
      Image = createLucideIcon("image", __iconNode11);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/instagram.js
  var __iconNode12, Instagram;
  var init_instagram = __esm({
    "node_modules/lucide-react/dist/esm/icons/instagram.js"() {
      init_createLucideIcon();
      __iconNode12 = [
        ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
        ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
        ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
      ];
      Instagram = createLucideIcon("instagram", __iconNode12);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
  var __iconNode13, LayoutDashboard;
  var init_layout_dashboard = __esm({
    "node_modules/lucide-react/dist/esm/icons/layout-dashboard.js"() {
      init_createLucideIcon();
      __iconNode13 = [
        ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
        ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
        ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
        ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
      ];
      LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode13);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/log-in.js
  var __iconNode14, LogIn;
  var init_log_in = __esm({
    "node_modules/lucide-react/dist/esm/icons/log-in.js"() {
      init_createLucideIcon();
      __iconNode14 = [
        ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
        ["path", { d: "M15 12H3", key: "6jk70r" }],
        ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
      ];
      LogIn = createLucideIcon("log-in", __iconNode14);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/log-out.js
  var __iconNode15, LogOut;
  var init_log_out = __esm({
    "node_modules/lucide-react/dist/esm/icons/log-out.js"() {
      init_createLucideIcon();
      __iconNode15 = [
        ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
        ["path", { d: "M21 12H9", key: "dn1m92" }],
        ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
      ];
      LogOut = createLucideIcon("log-out", __iconNode15);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/menu.js
  var __iconNode16, Menu;
  var init_menu = __esm({
    "node_modules/lucide-react/dist/esm/icons/menu.js"() {
      init_createLucideIcon();
      __iconNode16 = [
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 18h16", key: "19g7jn" }],
        ["path", { d: "M4 6h16", key: "1o0s65" }]
      ];
      Menu = createLucideIcon("menu", __iconNode16);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/message-square.js
  var __iconNode17, MessageSquare;
  var init_message_square = __esm({
    "node_modules/lucide-react/dist/esm/icons/message-square.js"() {
      init_createLucideIcon();
      __iconNode17 = [
        [
          "path",
          {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
          }
        ]
      ];
      MessageSquare = createLucideIcon("message-square", __iconNode17);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/package-check.js
  var __iconNode18, PackageCheck;
  var init_package_check = __esm({
    "node_modules/lucide-react/dist/esm/icons/package-check.js"() {
      init_createLucideIcon();
      __iconNode18 = [
        ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
      ];
      PackageCheck = createLucideIcon("package-check", __iconNode18);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/package.js
  var __iconNode19, Package;
  var init_package = __esm({
    "node_modules/lucide-react/dist/esm/icons/package.js"() {
      init_createLucideIcon();
      __iconNode19 = [
        [
          "path",
          {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
          }
        ],
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
        ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
      ];
      Package = createLucideIcon("package", __iconNode19);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/shopping-cart.js
  var __iconNode20, ShoppingCart;
  var init_shopping_cart = __esm({
    "node_modules/lucide-react/dist/esm/icons/shopping-cart.js"() {
      init_createLucideIcon();
      __iconNode20 = [
        ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
        ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
        [
          "path",
          {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
          }
        ]
      ];
      ShoppingCart = createLucideIcon("shopping-cart", __iconNode20);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/twitter.js
  var __iconNode21, Twitter;
  var init_twitter = __esm({
    "node_modules/lucide-react/dist/esm/icons/twitter.js"() {
      init_createLucideIcon();
      __iconNode21 = [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
          }
        ]
      ];
      Twitter = createLucideIcon("twitter", __iconNode21);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/user-plus.js
  var __iconNode22, UserPlus;
  var init_user_plus = __esm({
    "node_modules/lucide-react/dist/esm/icons/user-plus.js"() {
      init_createLucideIcon();
      __iconNode22 = [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
      ];
      UserPlus = createLucideIcon("user-plus", __iconNode22);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/user.js
  var __iconNode23, User;
  var init_user = __esm({
    "node_modules/lucide-react/dist/esm/icons/user.js"() {
      init_createLucideIcon();
      __iconNode23 = [
        ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
      ];
      User = createLucideIcon("user", __iconNode23);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/x.js
  var __iconNode24, X;
  var init_x = __esm({
    "node_modules/lucide-react/dist/esm/icons/x.js"() {
      init_createLucideIcon();
      __iconNode24 = [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
      ];
      X = createLucideIcon("x", __iconNode24);
    }
  });

  // node_modules/lucide-react/dist/esm/lucide-react.js
  var init_lucide_react = __esm({
    "node_modules/lucide-react/dist/esm/lucide-react.js"() {
      init_circle_check_big();
      init_circle_minus();
      init_circle_plus();
      init_circle_x();
      init_cloud_upload();
      init_house();
      init_calendar_check();
      init_credit_card();
      init_dollar_sign();
      init_facebook();
      init_image();
      init_instagram();
      init_layout_dashboard();
      init_log_in();
      init_log_out();
      init_menu();
      init_message_square();
      init_package_check();
      init_package();
      init_shopping_cart();
      init_twitter();
      init_user_plus();
      init_user();
      init_x();
    }
  });

  // src/context/AuthContext.js
  var import_react7, import_prop_types3, AuthContext, useAppwrite, AuthProvider, useAuth;
  var init_AuthContext = __esm({
    "src/context/AuthContext.js"() {
      import_react7 = __toESM(require_react());
      import_prop_types3 = __toESM(require_prop_types());
      AuthContext = (0, import_react7.createContext)(null);
      useAppwrite = () => {
        const [client, setClient] = (0, import_react7.useState)(null);
        const [account, setAccount] = (0, import_react7.useState)(null);
        const [database, setDatabase] = (0, import_react7.useState)(null);
        const [storage2, setStorage] = (0, import_react7.useState)(null);
        const [currentUser, setCurrentUser] = (0, import_react7.useState)(null);
        const [isLoading, setIsLoading] = (0, import_react7.useState)(true);
        const [error, setError] = (0, import_react7.useState)(null);
        const APPWRITE_PROJECT_ID = process.env.REACT_APP_APPWRITE_PROJECT_ID;
        const APPWRITE_ENDPOINT = process.env.REACT_APP_APPWRITE_ENDPOINT;
        (0, import_react7.useEffect)(() => {
          if (typeof window.Appwrite === "undefined" || !APPWRITE_PROJECT_ID || !APPWRITE_ENDPOINT) {
            console.error("Appwrite SDK or environment variables are not set. Please ensure the Appwrite SDK is loaded via a script tag and check your .env file.");
            setIsLoading(false);
            return;
          }
          try {
            const appwriteClient = new window.Appwrite.Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);
            const appwriteAccount = new window.Appwrite.Account(appwriteClient);
            const appwriteDatabase = new window.Appwrite.Databases(appwriteClient);
            const appwriteStorage = new window.Appwrite.Storage(appwriteClient);
            setClient(appwriteClient);
            setAccount(appwriteAccount);
            setDatabase(appwriteDatabase);
            setStorage(appwriteStorage);
            const checkUserSession = async () => {
              try {
                const loggedInUser = await appwriteAccount.get();
                setCurrentUser(loggedInUser);
              } catch (err) {
                console.log("No active Appwrite session:", err.message);
                setCurrentUser(null);
              } finally {
                setIsLoading(false);
              }
            };
            checkUserSession();
          } catch (err) {
            console.error("Error initializing Appwrite services:", err);
            setIsLoading(false);
          }
        }, [APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID]);
        const handleAuthAction = (0, import_react7.useCallback)(async (action) => {
          setError(null);
          setIsLoading(true);
          try {
            const result = await action();
            setIsLoading(false);
            return result;
          } catch (err) {
            console.error("Appwrite auth error:", err);
            setError(err.message || "An unknown error occurred.");
            setIsLoading(false);
            throw err;
          }
        }, []);
        const signUp = (0, import_react7.useCallback)(async (email, password, name) => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            const user = await account.create(window.Appwrite.ID.unique(), email, password, name);
            await account.createEmailSession(email, password);
            const loggedInUser = await account.get();
            setCurrentUser(loggedInUser);
            return loggedInUser;
          });
        }, [account, handleAuthAction]);
        const signIn = (0, import_react7.useCallback)(async (email, password) => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            await account.createEmailSession(email, password);
            const loggedInUser = await account.get();
            setCurrentUser(loggedInUser);
            return loggedInUser;
          });
        }, [account, handleAuthAction]);
        const signOut = (0, import_react7.useCallback)(async () => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            await account.deleteSession("current");
            setCurrentUser(null);
          });
        }, [account, handleAuthAction]);
        const value = (0, import_react7.useMemo)(() => ({
          client,
          account,
          database,
          storage: storage2,
          currentUser,
          userId: currentUser ? currentUser.$id : null,
          isLoading,
          error,
          signIn,
          signUp,
          signOut,
          ID: window.Appwrite.ID,
          // userRole would need to be fetched separately, for now it's a placeholder
          userRole: null
        }), [client, account, database, storage2, currentUser, isLoading, error, signIn, signUp, signOut]);
        return value;
      };
      AuthProvider = ({ children }) => {
        const {
          currentUser,
          userId,
          isLoading,
          error,
          signIn,
          signUp,
          signOut,
          userRole
        } = useAppwrite();
        const contextValue = (0, import_react7.useMemo)(() => ({
          currentUser,
          userId,
          isLoading,
          error,
          signIn,
          signUp,
          signOut,
          userRole,
          // Helper for role-based access control
          isAdmin: userRole === "admin"
        }), [currentUser, userId, isLoading, error, signIn, signUp, signOut, userRole]);
        return /* @__PURE__ */ import_react7.default.createElement(AuthContext.Provider, { value: contextValue }, children);
      };
      AuthProvider.propTypes = {
        children: import_prop_types3.default.node.isRequired
      };
      useAuth = () => {
        const context = (0, import_react7.useContext)(AuthContext);
        if (context === void 0) {
          throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
      };
    }
  });

  // src/hooks/useAppwrite.js
  var import_react10, AppwriteContext, useAppwrite2, AppwriteProvider, useAppwriteContext;
  var init_useAppwrite = __esm({
    "src/hooks/useAppwrite.js"() {
      import_react10 = __toESM(require_react());
      AppwriteContext = (0, import_react10.createContext)(null);
      useAppwrite2 = () => {
        const [client, setClient] = (0, import_react10.useState)(null);
        const [account, setAccount] = (0, import_react10.useState)(null);
        const [database, setDatabase] = (0, import_react10.useState)(null);
        const [storage2, setStorage] = (0, import_react10.useState)(null);
        const [currentUser, setCurrentUser] = (0, import_react10.useState)(null);
        const [isLoading, setIsLoading] = (0, import_react10.useState)(true);
        const [error, setError] = (0, import_react10.useState)(null);
        const APPWRITE_PROJECT_ID = process.env.REACT_APP_APPWRITE_PROJECT_ID;
        const APPWRITE_ENDPOINT = process.env.REACT_APP_APPWRITE_ENDPOINT;
        (0, import_react10.useEffect)(() => {
          if (typeof window.Appwrite === "undefined" || !APPWRITE_PROJECT_ID || !APPWRITE_ENDPOINT) {
            console.error("Appwrite SDK or environment variables are not set. Please ensure the Appwrite SDK is loaded via a script tag and check your .env file.");
            setIsLoading(false);
            return;
          }
          try {
            const appwriteClient = new window.Appwrite.Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);
            const appwriteAccount = new window.Appwrite.Account(appwriteClient);
            const appwriteDatabase = new window.Appwrite.Databases(appwriteClient);
            const appwriteStorage = new window.Appwrite.Storage(appwriteClient);
            setClient(appwriteClient);
            setAccount(appwriteAccount);
            setDatabase(appwriteDatabase);
            setStorage(appwriteStorage);
            const checkUserSession = async () => {
              try {
                const loggedInUser = await appwriteAccount.get();
                setCurrentUser(loggedInUser);
              } catch (err) {
                console.log("No active Appwrite session:", err.message);
                setCurrentUser(null);
              } finally {
                setIsLoading(false);
              }
            };
            checkUserSession();
          } catch (err) {
            console.error("Error initializing Appwrite services:", err);
            setIsLoading(false);
          }
        }, [APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID]);
        const handleAuthAction = (0, import_react10.useCallback)(async (action) => {
          setError(null);
          setIsLoading(true);
          try {
            const result = await action();
            setIsLoading(false);
            return result;
          } catch (err) {
            console.error("Appwrite auth error:", err);
            setError(err.message || "An unknown error occurred.");
            setIsLoading(false);
            throw err;
          }
        }, []);
        const signUp = (0, import_react10.useCallback)(async (email, password, name) => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            const user = await account.create(window.Appwrite.ID.unique(), email, password, name);
            await account.createEmailSession(email, password);
            const loggedInUser = await account.get();
            setCurrentUser(loggedInUser);
            return loggedInUser;
          });
        }, [account, handleAuthAction]);
        const signIn = (0, import_react10.useCallback)(async (email, password) => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            await account.createEmailSession(email, password);
            const loggedInUser = await account.get();
            setCurrentUser(loggedInUser);
            return loggedInUser;
          });
        }, [account, handleAuthAction]);
        const signOut = (0, import_react10.useCallback)(async () => {
          if (!account) {
            throw new Error("Appwrite Account not initialized.");
          }
          return handleAuthAction(async () => {
            await account.deleteSession("current");
            setCurrentUser(null);
          });
        }, [account, handleAuthAction]);
        const value = (0, import_react10.useMemo)(() => ({
          client,
          account,
          database,
          storage: storage2,
          currentUser,
          userId: currentUser ? currentUser.$id : null,
          isLoading,
          error,
          signIn,
          signUp,
          signOut,
          ID: window.Appwrite.ID
        }), [client, account, database, storage2, currentUser, isLoading, error, signIn, signUp, signOut]);
        return value;
      };
      AppwriteProvider = ({ children }) => {
        const appwrite = useAppwrite2();
        return /* @__PURE__ */ import_react10.default.createElement(AppwriteContext.Provider, { value: appwrite }, children);
      };
      useAppwriteContext = () => {
        const context = (0, import_react10.useContext)(AppwriteContext);
        if (context === void 0) {
          throw new Error("useAppwriteContext must be used within an AppwriteProvider");
        }
        return context;
      };
    }
  });

  // node_modules/appwrite/dist/esm/sdk.js
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __classPrivateFieldGet(receiver, state, kind, f3) {
    if (kind === "a" && !f3) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
  }
  var Query, AppwriteException, Client, Service, Permission, Role, _a, _ID_hexTimestamp, ID2, AuthenticatorType, AuthenticationFactor, OAuthProvider, Browser, CreditCard2, Flag, ExecutionMethod, ImageGravity, ImageFormat;
  var init_sdk = __esm({
    "node_modules/appwrite/dist/esm/sdk.js"() {
      Query = class {
        /**
         * Constructor for Query class.
         *
         * @param {string} method
         * @param {AttributesTypes} attribute
         * @param {QueryTypes} values
         */
        constructor(method, attribute, values) {
          this.method = method;
          this.attribute = attribute;
          if (values !== void 0) {
            if (Array.isArray(values)) {
              this.values = values;
            } else {
              this.values = [values];
            }
          }
        }
        /**
         * Convert the query object to a JSON string.
         *
         * @returns {string}
         */
        toString() {
          return JSON.stringify({
            method: this.method,
            attribute: this.attribute,
            values: this.values
          });
        }
      };
      Query.equal = (attribute, value) => new Query("equal", attribute, value).toString();
      Query.notEqual = (attribute, value) => new Query("notEqual", attribute, value).toString();
      Query.lessThan = (attribute, value) => new Query("lessThan", attribute, value).toString();
      Query.lessThanEqual = (attribute, value) => new Query("lessThanEqual", attribute, value).toString();
      Query.greaterThan = (attribute, value) => new Query("greaterThan", attribute, value).toString();
      Query.greaterThanEqual = (attribute, value) => new Query("greaterThanEqual", attribute, value).toString();
      Query.isNull = (attribute) => new Query("isNull", attribute).toString();
      Query.isNotNull = (attribute) => new Query("isNotNull", attribute).toString();
      Query.between = (attribute, start, end) => new Query("between", attribute, [start, end]).toString();
      Query.startsWith = (attribute, value) => new Query("startsWith", attribute, value).toString();
      Query.endsWith = (attribute, value) => new Query("endsWith", attribute, value).toString();
      Query.select = (attributes) => new Query("select", void 0, attributes).toString();
      Query.search = (attribute, value) => new Query("search", attribute, value).toString();
      Query.orderDesc = (attribute) => new Query("orderDesc", attribute).toString();
      Query.orderAsc = (attribute) => new Query("orderAsc", attribute).toString();
      Query.cursorAfter = (documentId) => new Query("cursorAfter", void 0, documentId).toString();
      Query.cursorBefore = (documentId) => new Query("cursorBefore", void 0, documentId).toString();
      Query.limit = (limit) => new Query("limit", void 0, limit).toString();
      Query.offset = (offset) => new Query("offset", void 0, offset).toString();
      Query.contains = (attribute, value) => new Query("contains", attribute, value).toString();
      Query.or = (queries) => new Query("or", void 0, queries.map((query) => JSON.parse(query))).toString();
      Query.and = (queries) => new Query("and", void 0, queries.map((query) => JSON.parse(query))).toString();
      AppwriteException = class extends Error {
        /**
         * Initializes a Appwrite Exception.
         *
         * @param {string} message - The error message.
         * @param {number} code - The error code. Default is 0.
         * @param {string} type - The error type. Default is an empty string.
         * @param {string} response - The response string. Default is an empty string.
         */
        constructor(message, code = 0, type = "", response = "") {
          super(message);
          this.name = "AppwriteException";
          this.message = message;
          this.code = code;
          this.type = type;
          this.response = response;
        }
      };
      Client = class _Client {
        constructor() {
          this.config = {
            endpoint: "https://cloud.appwrite.io/v1",
            endpointRealtime: "",
            project: "",
            jwt: "",
            locale: "",
            session: "",
            devkey: ""
          };
          this.headers = {
            "x-sdk-name": "Web",
            "x-sdk-platform": "client",
            "x-sdk-language": "web",
            "x-sdk-version": "18.1.1",
            "X-Appwrite-Response-Format": "1.7.0"
          };
          this.realtime = {
            socket: void 0,
            timeout: void 0,
            heartbeat: void 0,
            url: "",
            channels: /* @__PURE__ */ new Set(),
            subscriptions: /* @__PURE__ */ new Map(),
            subscriptionsCounter: 0,
            reconnect: true,
            reconnectAttempts: 0,
            lastMessage: void 0,
            connect: () => {
              clearTimeout(this.realtime.timeout);
              this.realtime.timeout = window === null || window === void 0 ? void 0 : window.setTimeout(() => {
                this.realtime.createSocket();
              }, 50);
            },
            getTimeout: () => {
              switch (true) {
                case this.realtime.reconnectAttempts < 5:
                  return 1e3;
                case this.realtime.reconnectAttempts < 15:
                  return 5e3;
                case this.realtime.reconnectAttempts < 100:
                  return 1e4;
                default:
                  return 6e4;
              }
            },
            createHeartbeat: () => {
              if (this.realtime.heartbeat) {
                clearTimeout(this.realtime.heartbeat);
              }
              this.realtime.heartbeat = window === null || window === void 0 ? void 0 : window.setInterval(() => {
                var _a2;
                (_a2 = this.realtime.socket) === null || _a2 === void 0 ? void 0 : _a2.send(JSON.stringify({
                  type: "ping"
                }));
              }, 2e4);
            },
            createSocket: () => {
              var _a2, _b, _c;
              if (this.realtime.channels.size < 1) {
                this.realtime.reconnect = false;
                (_a2 = this.realtime.socket) === null || _a2 === void 0 ? void 0 : _a2.close();
                return;
              }
              const channels = new URLSearchParams();
              channels.set("project", this.config.project);
              this.realtime.channels.forEach((channel) => {
                channels.append("channels[]", channel);
              });
              const url = this.config.endpointRealtime + "/realtime?" + channels.toString();
              if (url !== this.realtime.url || // Check if URL is present
              !this.realtime.socket || // Check if WebSocket has not been created
              ((_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.readyState) > WebSocket.OPEN) {
                if (this.realtime.socket && ((_c = this.realtime.socket) === null || _c === void 0 ? void 0 : _c.readyState) < WebSocket.CLOSING) {
                  this.realtime.reconnect = false;
                  this.realtime.socket.close();
                }
                this.realtime.url = url;
                this.realtime.socket = new WebSocket(url);
                this.realtime.socket.addEventListener("message", this.realtime.onMessage);
                this.realtime.socket.addEventListener("open", (_event) => {
                  this.realtime.reconnectAttempts = 0;
                  this.realtime.createHeartbeat();
                });
                this.realtime.socket.addEventListener("close", (event) => {
                  var _a3, _b2, _c2;
                  if (!this.realtime.reconnect || ((_b2 = (_a3 = this.realtime) === null || _a3 === void 0 ? void 0 : _a3.lastMessage) === null || _b2 === void 0 ? void 0 : _b2.type) === "error" && // Check if last message was of type error
                  ((_c2 = this.realtime) === null || _c2 === void 0 ? void 0 : _c2.lastMessage.data).code === 1008) {
                    this.realtime.reconnect = true;
                    return;
                  }
                  const timeout = this.realtime.getTimeout();
                  console.error(`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1e3} seconds.`, event.reason);
                  setTimeout(() => {
                    this.realtime.reconnectAttempts++;
                    this.realtime.createSocket();
                  }, timeout);
                });
              }
            },
            onMessage: (event) => {
              var _a2, _b;
              try {
                const message = JSON.parse(event.data);
                this.realtime.lastMessage = message;
                switch (message.type) {
                  case "connected":
                    const cookie = JSON.parse((_a2 = window.localStorage.getItem("cookieFallback")) !== null && _a2 !== void 0 ? _a2 : "{}");
                    const session = cookie === null || cookie === void 0 ? void 0 : cookie[`a_session_${this.config.project}`];
                    const messageData = message.data;
                    if (session && !messageData.user) {
                      (_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.send(JSON.stringify({
                        type: "authentication",
                        data: {
                          session
                        }
                      }));
                    }
                    break;
                  case "event":
                    let data2 = message.data;
                    if (data2 === null || data2 === void 0 ? void 0 : data2.channels) {
                      const isSubscribed = data2.channels.some((channel) => this.realtime.channels.has(channel));
                      if (!isSubscribed)
                        return;
                      this.realtime.subscriptions.forEach((subscription) => {
                        if (data2.channels.some((channel) => subscription.channels.includes(channel))) {
                          setTimeout(() => subscription.callback(data2));
                        }
                      });
                    }
                    break;
                  case "pong":
                    break;
                  // Handle pong response if needed
                  case "error":
                    throw message.data;
                  default:
                    break;
                }
              } catch (e2) {
                console.error(e2);
              }
            },
            cleanUp: (channels) => {
              this.realtime.channels.forEach((channel) => {
                if (channels.includes(channel)) {
                  let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
                    return subscription.channels.includes(channel);
                  });
                  if (!found) {
                    this.realtime.channels.delete(channel);
                  }
                }
              });
            }
          };
        }
        /**
         * Set Endpoint
         *
         * Your project endpoint
         *
         * @param {string} endpoint
         *
         * @returns {this}
         */
        setEndpoint(endpoint) {
          if (!endpoint.startsWith("http://") && !endpoint.startsWith("https://")) {
            throw new AppwriteException("Invalid endpoint URL: " + endpoint);
          }
          this.config.endpoint = endpoint;
          this.config.endpointRealtime = endpoint.replace("https://", "wss://").replace("http://", "ws://");
          return this;
        }
        /**
         * Set Realtime Endpoint
         *
         * @param {string} endpointRealtime
         *
         * @returns {this}
         */
        setEndpointRealtime(endpointRealtime) {
          if (!endpointRealtime.startsWith("ws://") && !endpointRealtime.startsWith("wss://")) {
            throw new AppwriteException("Invalid realtime endpoint URL: " + endpointRealtime);
          }
          this.config.endpointRealtime = endpointRealtime;
          return this;
        }
        /**
         * Set Project
         *
         * Your project ID
         *
         * @param value string
         *
         * @return {this}
         */
        setProject(value) {
          this.headers["X-Appwrite-Project"] = value;
          this.config.project = value;
          return this;
        }
        /**
         * Set JWT
         *
         * Your secret JSON Web Token
         *
         * @param value string
         *
         * @return {this}
         */
        setJWT(value) {
          this.headers["X-Appwrite-JWT"] = value;
          this.config.jwt = value;
          return this;
        }
        /**
         * Set Locale
         *
         * @param value string
         *
         * @return {this}
         */
        setLocale(value) {
          this.headers["X-Appwrite-Locale"] = value;
          this.config.locale = value;
          return this;
        }
        /**
         * Set Session
         *
         * The user session to authenticate with
         *
         * @param value string
         *
         * @return {this}
         */
        setSession(value) {
          this.headers["X-Appwrite-Session"] = value;
          this.config.session = value;
          return this;
        }
        /**
         * Set DevKey
         *
         * Your secret dev API key
         *
         * @param value string
         *
         * @return {this}
         */
        setDevKey(value) {
          this.headers["X-Appwrite-Dev-Key"] = value;
          this.config.devkey = value;
          return this;
        }
        /**
         * Subscribes to Appwrite events and passes you the payload in realtime.
         *
         * @param {string|string[]} channels
         * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
         *
         * Possible channels are:
         * - account
         * - collections
         * - collections.[ID]
         * - collections.[ID].documents
         * - documents
         * - documents.[ID]
         * - files
         * - files.[ID]
         * - executions
         * - executions.[ID]
         * - functions.[ID]
         * - teams
         * - teams.[ID]
         * - memberships
         * - memberships.[ID]
         * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
         * @returns {() => void} Unsubscribes from events.
         */
        subscribe(channels, callback) {
          let channelArray = typeof channels === "string" ? [channels] : channels;
          channelArray.forEach((channel) => this.realtime.channels.add(channel));
          const counter = this.realtime.subscriptionsCounter++;
          this.realtime.subscriptions.set(counter, {
            channels: channelArray,
            callback
          });
          this.realtime.connect();
          return () => {
            this.realtime.subscriptions.delete(counter);
            this.realtime.cleanUp(channelArray);
            this.realtime.connect();
          };
        }
        prepareRequest(method, url, headers = {}, params = {}) {
          method = method.toUpperCase();
          headers = Object.assign({}, this.headers, headers);
          if (typeof window !== "undefined" && window.localStorage) {
            const cookieFallback = window.localStorage.getItem("cookieFallback");
            if (cookieFallback) {
              headers["X-Fallback-Cookies"] = cookieFallback;
            }
          }
          let options = {
            method,
            headers
          };
          if (headers["X-Appwrite-Dev-Key"] === void 0) {
            options.credentials = "include";
          }
          if (method === "GET") {
            for (const [key, value] of Object.entries(_Client.flatten(params))) {
              url.searchParams.append(key, value);
            }
          } else {
            switch (headers["content-type"]) {
              case "application/json":
                options.body = JSON.stringify(params);
                break;
              case "multipart/form-data":
                const formData = new FormData();
                for (const [key, value] of Object.entries(params)) {
                  if (value instanceof File) {
                    formData.append(key, value, value.name);
                  } else if (Array.isArray(value)) {
                    for (const nestedValue of value) {
                      formData.append(`${key}[]`, nestedValue);
                    }
                  } else {
                    formData.append(key, value);
                  }
                }
                options.body = formData;
                delete headers["content-type"];
                break;
            }
          }
          return { uri: url.toString(), options };
        }
        chunkedUpload(method, url, headers = {}, originalPayload = {}, onProgress) {
          return __awaiter(this, void 0, void 0, function* () {
            const file = Object.values(originalPayload).find((value) => value instanceof File);
            if (!file) {
              throw new Error("File not found in payload");
            }
            if (file.size <= _Client.CHUNK_SIZE) {
              return yield this.call(method, url, headers, originalPayload);
            }
            let start = 0;
            let response = null;
            while (start < file.size) {
              let end = start + _Client.CHUNK_SIZE;
              if (end >= file.size) {
                end = file.size;
              }
              headers["content-range"] = `bytes ${start}-${end - 1}/${file.size}`;
              const chunk = file.slice(start, end);
              let payload = Object.assign(Object.assign({}, originalPayload), { file: new File([chunk], file.name) });
              response = yield this.call(method, url, headers, payload);
              if (onProgress && typeof onProgress === "function") {
                onProgress({
                  $id: response.$id,
                  progress: Math.round(end / file.size * 100),
                  sizeUploaded: end,
                  chunksTotal: Math.ceil(file.size / _Client.CHUNK_SIZE),
                  chunksUploaded: Math.ceil(end / _Client.CHUNK_SIZE)
                });
              }
              if (response && response.$id) {
                headers["x-appwrite-id"] = response.$id;
              }
              start = end;
            }
            return response;
          });
        }
        ping() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.call("GET", new URL(this.config.endpoint + "/ping"));
          });
        }
        call(method, url, headers = {}, params = {}, responseType = "json") {
          var _a2, _b;
          return __awaiter(this, void 0, void 0, function* () {
            const { uri, options } = this.prepareRequest(method, url, headers, params);
            let data2 = null;
            const response = yield fetch(uri, options);
            if (response.type === "opaque") {
              throw new AppwriteException(`Invalid Origin. Register your new client (${window.location.host}) as a new Web platform on your project console dashboard`, 403, "forbidden", "");
            }
            const warnings = response.headers.get("x-appwrite-warning");
            if (warnings) {
              warnings.split(";").forEach((warning2) => console.warn("Warning: " + warning2));
            }
            if ((_a2 = response.headers.get("content-type")) === null || _a2 === void 0 ? void 0 : _a2.includes("application/json")) {
              data2 = yield response.json();
            } else if (responseType === "arrayBuffer") {
              data2 = yield response.arrayBuffer();
            } else {
              data2 = {
                message: yield response.text()
              };
            }
            if (400 <= response.status) {
              let responseText = "";
              if (((_b = response.headers.get("content-type")) === null || _b === void 0 ? void 0 : _b.includes("application/json")) || responseType === "arrayBuffer") {
                responseText = JSON.stringify(data2);
              } else {
                responseText = data2 === null || data2 === void 0 ? void 0 : data2.message;
              }
              throw new AppwriteException(data2 === null || data2 === void 0 ? void 0 : data2.message, response.status, data2 === null || data2 === void 0 ? void 0 : data2.type, responseText);
            }
            const cookieFallback = response.headers.get("X-Fallback-Cookies");
            if (typeof window !== "undefined" && window.localStorage && cookieFallback) {
              window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.");
              window.localStorage.setItem("cookieFallback", cookieFallback);
            }
            return data2;
          });
        }
        static flatten(data2, prefix = "") {
          let output = {};
          for (const [key, value] of Object.entries(data2)) {
            let finalKey = prefix ? prefix + "[" + key + "]" : key;
            if (Array.isArray(value)) {
              output = Object.assign(Object.assign({}, output), _Client.flatten(value, finalKey));
            } else {
              output[finalKey] = value;
            }
          }
          return output;
        }
      };
      Client.CHUNK_SIZE = 1024 * 1024 * 5;
      Service = class _Service {
        constructor(client) {
          this.client = client;
        }
        static flatten(data2, prefix = "") {
          let output = {};
          for (const [key, value] of Object.entries(data2)) {
            let finalKey = prefix ? prefix + "[" + key + "]" : key;
            if (Array.isArray(value)) {
              output = Object.assign(Object.assign({}, output), _Service.flatten(value, finalKey));
            } else {
              output[finalKey] = value;
            }
          }
          return output;
        }
      };
      Service.CHUNK_SIZE = 5 * 1024 * 1024;
      Permission = class {
      };
      Permission.read = (role) => {
        return `read("${role}")`;
      };
      Permission.write = (role) => {
        return `write("${role}")`;
      };
      Permission.create = (role) => {
        return `create("${role}")`;
      };
      Permission.update = (role) => {
        return `update("${role}")`;
      };
      Permission.delete = (role) => {
        return `delete("${role}")`;
      };
      Role = class {
        /**
         * Grants access to anyone.
         *
         * This includes authenticated and unauthenticated users.
         *
         * @returns {string}
         */
        static any() {
          return "any";
        }
        /**
         * Grants access to a specific user by user ID.
         *
         * You can optionally pass verified or unverified for
         * `status` to target specific types of users.
         *
         * @param {string} id
         * @param {string} status
         * @returns {string}
         */
        static user(id, status = "") {
          if (status === "") {
            return `user:${id}`;
          }
          return `user:${id}/${status}`;
        }
        /**
         * Grants access to any authenticated or anonymous user.
         *
         * You can optionally pass verified or unverified for
         * `status` to target specific types of users.
         *
         * @param {string} status
         * @returns {string}
         */
        static users(status = "") {
          if (status === "") {
            return "users";
          }
          return `users/${status}`;
        }
        /**
         * Grants access to any guest user without a session.
         *
         * Authenticated users don't have access to this role.
         *
         * @returns {string}
         */
        static guests() {
          return "guests";
        }
        /**
         * Grants access to a team by team ID.
         *
         * You can optionally pass a role for `role` to target
         * team members with the specified role.
         *
         * @param {string} id
         * @param {string} role
         * @returns {string}
         */
        static team(id, role = "") {
          if (role === "") {
            return `team:${id}`;
          }
          return `team:${id}/${role}`;
        }
        /**
         * Grants access to a specific member of a team.
         *
         * When the member is removed from the team, they will
         * no longer have access.
         *
         * @param {string} id
         * @returns {string}
         */
        static member(id) {
          return `member:${id}`;
        }
        /**
         * Grants access to a user with the specified label.
         *
         * @param {string} name
         * @returns  {string}
         */
        static label(name) {
          return `label:${name}`;
        }
      };
      ID2 = class _ID {
        /**
         * Uses the provided ID as the ID for the resource.
         *
         * @param {string} id
         * @returns {string}
         */
        static custom(id) {
          return id;
        }
        /**
         * Have Appwrite generate a unique ID for you.
         *
         * @param {number} padding. Default is 7.
         * @returns {string}
         */
        static unique(padding = 7) {
          const baseId = __classPrivateFieldGet(_ID, _a, "m", _ID_hexTimestamp).call(_ID);
          let randomPadding = "";
          for (let i2 = 0; i2 < padding; i2++) {
            const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
            randomPadding += randomHexDigit;
          }
          return baseId + randomPadding;
        }
      };
      _a = ID2, _ID_hexTimestamp = function _ID_hexTimestamp2() {
        const now = /* @__PURE__ */ new Date();
        const sec = Math.floor(now.getTime() / 1e3);
        const msec = now.getMilliseconds();
        const hexTimestamp = sec.toString(16) + msec.toString(16).padStart(5, "0");
        return hexTimestamp;
      };
      (function(AuthenticatorType2) {
        AuthenticatorType2["Totp"] = "totp";
      })(AuthenticatorType || (AuthenticatorType = {}));
      (function(AuthenticationFactor2) {
        AuthenticationFactor2["Email"] = "email";
        AuthenticationFactor2["Phone"] = "phone";
        AuthenticationFactor2["Totp"] = "totp";
        AuthenticationFactor2["Recoverycode"] = "recoverycode";
      })(AuthenticationFactor || (AuthenticationFactor = {}));
      (function(OAuthProvider2) {
        OAuthProvider2["Amazon"] = "amazon";
        OAuthProvider2["Apple"] = "apple";
        OAuthProvider2["Auth0"] = "auth0";
        OAuthProvider2["Authentik"] = "authentik";
        OAuthProvider2["Autodesk"] = "autodesk";
        OAuthProvider2["Bitbucket"] = "bitbucket";
        OAuthProvider2["Bitly"] = "bitly";
        OAuthProvider2["Box"] = "box";
        OAuthProvider2["Dailymotion"] = "dailymotion";
        OAuthProvider2["Discord"] = "discord";
        OAuthProvider2["Disqus"] = "disqus";
        OAuthProvider2["Dropbox"] = "dropbox";
        OAuthProvider2["Etsy"] = "etsy";
        OAuthProvider2["Facebook"] = "facebook";
        OAuthProvider2["Figma"] = "figma";
        OAuthProvider2["Github"] = "github";
        OAuthProvider2["Gitlab"] = "gitlab";
        OAuthProvider2["Google"] = "google";
        OAuthProvider2["Linkedin"] = "linkedin";
        OAuthProvider2["Microsoft"] = "microsoft";
        OAuthProvider2["Notion"] = "notion";
        OAuthProvider2["Oidc"] = "oidc";
        OAuthProvider2["Okta"] = "okta";
        OAuthProvider2["Paypal"] = "paypal";
        OAuthProvider2["PaypalSandbox"] = "paypalSandbox";
        OAuthProvider2["Podio"] = "podio";
        OAuthProvider2["Salesforce"] = "salesforce";
        OAuthProvider2["Slack"] = "slack";
        OAuthProvider2["Spotify"] = "spotify";
        OAuthProvider2["Stripe"] = "stripe";
        OAuthProvider2["Tradeshift"] = "tradeshift";
        OAuthProvider2["TradeshiftBox"] = "tradeshiftBox";
        OAuthProvider2["Twitch"] = "twitch";
        OAuthProvider2["Wordpress"] = "wordpress";
        OAuthProvider2["Yahoo"] = "yahoo";
        OAuthProvider2["Yammer"] = "yammer";
        OAuthProvider2["Yandex"] = "yandex";
        OAuthProvider2["Zoho"] = "zoho";
        OAuthProvider2["Zoom"] = "zoom";
        OAuthProvider2["Mock"] = "mock";
      })(OAuthProvider || (OAuthProvider = {}));
      (function(Browser2) {
        Browser2["AvantBrowser"] = "aa";
        Browser2["AndroidWebViewBeta"] = "an";
        Browser2["GoogleChrome"] = "ch";
        Browser2["GoogleChromeIOS"] = "ci";
        Browser2["GoogleChromeMobile"] = "cm";
        Browser2["Chromium"] = "cr";
        Browser2["MozillaFirefox"] = "ff";
        Browser2["Safari"] = "sf";
        Browser2["MobileSafari"] = "mf";
        Browser2["MicrosoftEdge"] = "ps";
        Browser2["MicrosoftEdgeIOS"] = "oi";
        Browser2["OperaMini"] = "om";
        Browser2["Opera"] = "op";
        Browser2["OperaNext"] = "on";
      })(Browser || (Browser = {}));
      (function(CreditCard3) {
        CreditCard3["AmericanExpress"] = "amex";
        CreditCard3["Argencard"] = "argencard";
        CreditCard3["Cabal"] = "cabal";
        CreditCard3["Cencosud"] = "cencosud";
        CreditCard3["DinersClub"] = "diners";
        CreditCard3["Discover"] = "discover";
        CreditCard3["Elo"] = "elo";
        CreditCard3["Hipercard"] = "hipercard";
        CreditCard3["JCB"] = "jcb";
        CreditCard3["Mastercard"] = "mastercard";
        CreditCard3["Naranja"] = "naranja";
        CreditCard3["TarjetaShopping"] = "targeta-shopping";
        CreditCard3["UnionChinaPay"] = "union-china-pay";
        CreditCard3["Visa"] = "visa";
        CreditCard3["MIR"] = "mir";
        CreditCard3["Maestro"] = "maestro";
        CreditCard3["Rupay"] = "rupay";
      })(CreditCard2 || (CreditCard2 = {}));
      (function(Flag2) {
        Flag2["Afghanistan"] = "af";
        Flag2["Angola"] = "ao";
        Flag2["Albania"] = "al";
        Flag2["Andorra"] = "ad";
        Flag2["UnitedArabEmirates"] = "ae";
        Flag2["Argentina"] = "ar";
        Flag2["Armenia"] = "am";
        Flag2["AntiguaAndBarbuda"] = "ag";
        Flag2["Australia"] = "au";
        Flag2["Austria"] = "at";
        Flag2["Azerbaijan"] = "az";
        Flag2["Burundi"] = "bi";
        Flag2["Belgium"] = "be";
        Flag2["Benin"] = "bj";
        Flag2["BurkinaFaso"] = "bf";
        Flag2["Bangladesh"] = "bd";
        Flag2["Bulgaria"] = "bg";
        Flag2["Bahrain"] = "bh";
        Flag2["Bahamas"] = "bs";
        Flag2["BosniaAndHerzegovina"] = "ba";
        Flag2["Belarus"] = "by";
        Flag2["Belize"] = "bz";
        Flag2["Bolivia"] = "bo";
        Flag2["Brazil"] = "br";
        Flag2["Barbados"] = "bb";
        Flag2["BruneiDarussalam"] = "bn";
        Flag2["Bhutan"] = "bt";
        Flag2["Botswana"] = "bw";
        Flag2["CentralAfricanRepublic"] = "cf";
        Flag2["Canada"] = "ca";
        Flag2["Switzerland"] = "ch";
        Flag2["Chile"] = "cl";
        Flag2["China"] = "cn";
        Flag2["CoteDIvoire"] = "ci";
        Flag2["Cameroon"] = "cm";
        Flag2["DemocraticRepublicOfTheCongo"] = "cd";
        Flag2["RepublicOfTheCongo"] = "cg";
        Flag2["Colombia"] = "co";
        Flag2["Comoros"] = "km";
        Flag2["CapeVerde"] = "cv";
        Flag2["CostaRica"] = "cr";
        Flag2["Cuba"] = "cu";
        Flag2["Cyprus"] = "cy";
        Flag2["CzechRepublic"] = "cz";
        Flag2["Germany"] = "de";
        Flag2["Djibouti"] = "dj";
        Flag2["Dominica"] = "dm";
        Flag2["Denmark"] = "dk";
        Flag2["DominicanRepublic"] = "do";
        Flag2["Algeria"] = "dz";
        Flag2["Ecuador"] = "ec";
        Flag2["Egypt"] = "eg";
        Flag2["Eritrea"] = "er";
        Flag2["Spain"] = "es";
        Flag2["Estonia"] = "ee";
        Flag2["Ethiopia"] = "et";
        Flag2["Finland"] = "fi";
        Flag2["Fiji"] = "fj";
        Flag2["France"] = "fr";
        Flag2["MicronesiaFederatedStatesOf"] = "fm";
        Flag2["Gabon"] = "ga";
        Flag2["UnitedKingdom"] = "gb";
        Flag2["Georgia"] = "ge";
        Flag2["Ghana"] = "gh";
        Flag2["Guinea"] = "gn";
        Flag2["Gambia"] = "gm";
        Flag2["GuineaBissau"] = "gw";
        Flag2["EquatorialGuinea"] = "gq";
        Flag2["Greece"] = "gr";
        Flag2["Grenada"] = "gd";
        Flag2["Guatemala"] = "gt";
        Flag2["Guyana"] = "gy";
        Flag2["Honduras"] = "hn";
        Flag2["Croatia"] = "hr";
        Flag2["Haiti"] = "ht";
        Flag2["Hungary"] = "hu";
        Flag2["Indonesia"] = "id";
        Flag2["India"] = "in";
        Flag2["Ireland"] = "ie";
        Flag2["IranIslamicRepublicOf"] = "ir";
        Flag2["Iraq"] = "iq";
        Flag2["Iceland"] = "is";
        Flag2["Israel"] = "il";
        Flag2["Italy"] = "it";
        Flag2["Jamaica"] = "jm";
        Flag2["Jordan"] = "jo";
        Flag2["Japan"] = "jp";
        Flag2["Kazakhstan"] = "kz";
        Flag2["Kenya"] = "ke";
        Flag2["Kyrgyzstan"] = "kg";
        Flag2["Cambodia"] = "kh";
        Flag2["Kiribati"] = "ki";
        Flag2["SaintKittsAndNevis"] = "kn";
        Flag2["SouthKorea"] = "kr";
        Flag2["Kuwait"] = "kw";
        Flag2["LaoPeopleSDemocraticRepublic"] = "la";
        Flag2["Lebanon"] = "lb";
        Flag2["Liberia"] = "lr";
        Flag2["Libya"] = "ly";
        Flag2["SaintLucia"] = "lc";
        Flag2["Liechtenstein"] = "li";
        Flag2["SriLanka"] = "lk";
        Flag2["Lesotho"] = "ls";
        Flag2["Lithuania"] = "lt";
        Flag2["Luxembourg"] = "lu";
        Flag2["Latvia"] = "lv";
        Flag2["Morocco"] = "ma";
        Flag2["Monaco"] = "mc";
        Flag2["Moldova"] = "md";
        Flag2["Madagascar"] = "mg";
        Flag2["Maldives"] = "mv";
        Flag2["Mexico"] = "mx";
        Flag2["MarshallIslands"] = "mh";
        Flag2["NorthMacedonia"] = "mk";
        Flag2["Mali"] = "ml";
        Flag2["Malta"] = "mt";
        Flag2["Myanmar"] = "mm";
        Flag2["Montenegro"] = "me";
        Flag2["Mongolia"] = "mn";
        Flag2["Mozambique"] = "mz";
        Flag2["Mauritania"] = "mr";
        Flag2["Mauritius"] = "mu";
        Flag2["Malawi"] = "mw";
        Flag2["Malaysia"] = "my";
        Flag2["Namibia"] = "na";
        Flag2["Niger"] = "ne";
        Flag2["Nigeria"] = "ng";
        Flag2["Nicaragua"] = "ni";
        Flag2["Netherlands"] = "nl";
        Flag2["Norway"] = "no";
        Flag2["Nepal"] = "np";
        Flag2["Nauru"] = "nr";
        Flag2["NewZealand"] = "nz";
        Flag2["Oman"] = "om";
        Flag2["Pakistan"] = "pk";
        Flag2["Panama"] = "pa";
        Flag2["Peru"] = "pe";
        Flag2["Philippines"] = "ph";
        Flag2["Palau"] = "pw";
        Flag2["PapuaNewGuinea"] = "pg";
        Flag2["Poland"] = "pl";
        Flag2["FrenchPolynesia"] = "pf";
        Flag2["NorthKorea"] = "kp";
        Flag2["Portugal"] = "pt";
        Flag2["Paraguay"] = "py";
        Flag2["Qatar"] = "qa";
        Flag2["Romania"] = "ro";
        Flag2["Russia"] = "ru";
        Flag2["Rwanda"] = "rw";
        Flag2["SaudiArabia"] = "sa";
        Flag2["Sudan"] = "sd";
        Flag2["Senegal"] = "sn";
        Flag2["Singapore"] = "sg";
        Flag2["SolomonIslands"] = "sb";
        Flag2["SierraLeone"] = "sl";
        Flag2["ElSalvador"] = "sv";
        Flag2["SanMarino"] = "sm";
        Flag2["Somalia"] = "so";
        Flag2["Serbia"] = "rs";
        Flag2["SouthSudan"] = "ss";
        Flag2["SaoTomeAndPrincipe"] = "st";
        Flag2["Suriname"] = "sr";
        Flag2["Slovakia"] = "sk";
        Flag2["Slovenia"] = "si";
        Flag2["Sweden"] = "se";
        Flag2["Eswatini"] = "sz";
        Flag2["Seychelles"] = "sc";
        Flag2["Syria"] = "sy";
        Flag2["Chad"] = "td";
        Flag2["Togo"] = "tg";
        Flag2["Thailand"] = "th";
        Flag2["Tajikistan"] = "tj";
        Flag2["Turkmenistan"] = "tm";
        Flag2["TimorLeste"] = "tl";
        Flag2["Tonga"] = "to";
        Flag2["TrinidadAndTobago"] = "tt";
        Flag2["Tunisia"] = "tn";
        Flag2["Turkey"] = "tr";
        Flag2["Tuvalu"] = "tv";
        Flag2["Tanzania"] = "tz";
        Flag2["Uganda"] = "ug";
        Flag2["Ukraine"] = "ua";
        Flag2["Uruguay"] = "uy";
        Flag2["UnitedStates"] = "us";
        Flag2["Uzbekistan"] = "uz";
        Flag2["VaticanCity"] = "va";
        Flag2["SaintVincentAndTheGrenadines"] = "vc";
        Flag2["Venezuela"] = "ve";
        Flag2["Vietnam"] = "vn";
        Flag2["Vanuatu"] = "vu";
        Flag2["Samoa"] = "ws";
        Flag2["Yemen"] = "ye";
        Flag2["SouthAfrica"] = "za";
        Flag2["Zambia"] = "zm";
        Flag2["Zimbabwe"] = "zw";
      })(Flag || (Flag = {}));
      (function(ExecutionMethod2) {
        ExecutionMethod2["GET"] = "GET";
        ExecutionMethod2["POST"] = "POST";
        ExecutionMethod2["PUT"] = "PUT";
        ExecutionMethod2["PATCH"] = "PATCH";
        ExecutionMethod2["DELETE"] = "DELETE";
        ExecutionMethod2["OPTIONS"] = "OPTIONS";
      })(ExecutionMethod || (ExecutionMethod = {}));
      (function(ImageGravity2) {
        ImageGravity2["Center"] = "center";
        ImageGravity2["Topleft"] = "top-left";
        ImageGravity2["Top"] = "top";
        ImageGravity2["Topright"] = "top-right";
        ImageGravity2["Left"] = "left";
        ImageGravity2["Right"] = "right";
        ImageGravity2["Bottomleft"] = "bottom-left";
        ImageGravity2["Bottom"] = "bottom";
        ImageGravity2["Bottomright"] = "bottom-right";
      })(ImageGravity || (ImageGravity = {}));
      (function(ImageFormat2) {
        ImageFormat2["Jpg"] = "jpg";
        ImageFormat2["Jpeg"] = "jpeg";
        ImageFormat2["Png"] = "png";
        ImageFormat2["Webp"] = "webp";
        ImageFormat2["Heic"] = "heic";
        ImageFormat2["Avif"] = "avif";
      })(ImageFormat || (ImageFormat = {}));
    }
  });

  // src/context/BookingContext.js
  var import_react12, import_prop_types5, BookingContext, BookingProvider, useBooking;
  var init_BookingContext = __esm({
    "src/context/BookingContext.js"() {
      import_react12 = __toESM(require_react());
      init_useAppwrite();
      init_sdk();
      init_AuthContext();
      import_prop_types5 = __toESM(require_prop_types());
      BookingContext = (0, import_react12.createContext)();
      BookingProvider = ({ children }) => {
        const { database, client, isAuthReady } = useAppwriteContext();
        const { currentUser, isAuthReady: isAuthReadyAuth } = useAuth();
        const APPWRITE_DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
        const APPWRITE_BOOKINGS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_BOOKINGS_COLLECTION_ID;
        const APPWRITE_SERVICES_COLLECTION_ID = process.env.REACT_APP_APPWRITE_SERVICES_COLLECTION_ID;
        const APPWRITE_STAFF_COLLECTION_ID = process.env.REACT_APP_APPWRITE_STAFF_COLLECTION_ID;
        const [services, setServices] = (0, import_react12.useState)([]);
        const [staff, setStaff] = (0, import_react12.useState)([]);
        const [bookings, setBookings] = (0, import_react12.useState)([]);
        const [error, setError] = (0, import_react12.useState)(null);
        const [isFetchingBookings, setIsFetchingBookings] = (0, import_react12.useState)(false);
        const [isFetchingServices, setIsFetchingServices] = (0, import_react12.useState)(false);
        const [isFetchingStaff, setIsFetchingStaff] = (0, import_react12.useState)(false);
        const [isBookingService, setIsBookingService] = (0, import_react12.useState)(false);
        const [isCancellingBooking, setIsCancellingBooking] = (0, import_react12.useState)(false);
        const handleBookingError = (err, message) => {
          console.error(message, err);
          setError(`Failed to complete action: ${err.message || "An unknown error occurred."}`);
        };
        const mapBookingDocument = (0, import_react12.useCallback)((doc) => {
          const service = services.find((s2) => s2.id === doc.serviceId);
          const staffMember = staff.find((s2) => s2.id === doc.staffId);
          return {
            id: doc.$id,
            ...doc,
            serviceName: service ? service.name : "Unknown Service",
            staffName: staffMember ? staffMember.name : "Unknown Staff",
            clientName: doc.clientName,
            clientEmail: doc.clientEmail,
            bookingDate: doc.bookingDate
          };
        }, [services, staff]);
        const fetchServices = (0, import_react12.useCallback)(async () => {
          if (!database || !isAuthReady) return;
          setIsFetchingServices(true);
          setError(null);
          try {
            const response = await database.listDocuments(
              APPWRITE_DATABASE_ID,
              APPWRITE_SERVICES_COLLECTION_ID,
              [Query.limit(100)]
            );
            setServices(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
          } catch (err) {
            handleBookingError(err, "Error fetching services:");
          } finally {
            setIsFetchingServices(false);
          }
        }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_SERVICES_COLLECTION_ID]);
        const fetchStaff = (0, import_react12.useCallback)(async () => {
          if (!database || !isAuthReady) return;
          setIsFetchingStaff(true);
          setError(null);
          try {
            const response = await database.listDocuments(
              APPWRITE_DATABASE_ID,
              APPWRITE_STAFF_COLLECTION_ID,
              [Query.limit(100)]
            );
            setStaff(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
          } catch (err) {
            handleBookingError(err, "Error fetching staff:");
          } finally {
            setIsFetchingStaff(false);
          }
        }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_STAFF_COLLECTION_ID]);
        const fetchBookings = (0, import_react12.useCallback)(async () => {
          if (!database || !isAuthReady || !currentUser) return;
          setIsFetchingBookings(true);
          setError(null);
          try {
            const response = await database.listDocuments(
              APPWRITE_DATABASE_ID,
              APPWRITE_BOOKINGS_COLLECTION_ID,
              [
                Query.equal("userId", currentUser.$id),
                Query.orderDesc("bookingDate"),
                Query.limit(100)
              ]
            );
            setBookings(response.documents.map((doc) => mapBookingDocument(doc)));
          } catch (err) {
            handleBookingError(err, "Error fetching user bookings:");
          } finally {
            setIsFetchingBookings(false);
          }
        }, [database, isAuthReady, currentUser, mapBookingDocument, APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID]);
        const bookService = (0, import_react12.useCallback)(
          async (serviceId, staffId, bookingDate) => {
            if (!database || !isAuthReady || !currentUser) {
              setError("Appwrite not ready or user not logged in.");
              return false;
            }
            setIsBookingService(true);
            setError(null);
            try {
              const payload = {
                serviceId,
                staffId,
                bookingDate,
                userId: currentUser.$id,
                clientName: currentUser.name,
                clientEmail: currentUser.email,
                status: "pending"
              };
              await database.createDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_BOOKINGS_COLLECTION_ID,
                ID2.unique(),
                payload
              );
              return true;
            } catch (err) {
              handleBookingError(err, "Error booking service:");
              return false;
            } finally {
              setIsBookingService(false);
            }
          },
          [database, isAuthReady, currentUser, APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID]
        );
        const cancelBooking = (0, import_react12.useCallback)(
          async (bookingId) => {
            if (!database || !isAuthReady) {
              setError("Appwrite not ready.");
              return false;
            }
            setIsCancellingBooking(true);
            setError(null);
            try {
              await database.deleteDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_BOOKINGS_COLLECTION_ID,
                bookingId
              );
              return true;
            } catch (err) {
              handleBookingError(err, "Error cancelling booking:");
              return false;
            } finally {
              setIsCancellingBooking(false);
            }
          },
          [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID]
        );
        (0, import_react12.useEffect)(() => {
          if (isAuthReady && isAuthReadyAuth) {
            fetchServices();
            fetchStaff();
            if (currentUser) {
              fetchBookings();
            }
            const unsubscribeServices = client.subscribe(
              `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_SERVICES_COLLECTION_ID}.documents`,
              () => fetchServices()
            );
            const unsubscribeStaff = client.subscribe(
              `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_STAFF_COLLECTION_ID}.documents`,
              () => fetchStaff()
            );
            const unsubscribeBookings = client.subscribe(
              `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_BOOKINGS_COLLECTION_ID}.documents`,
              () => {
                if (currentUser) {
                  fetchBookings();
                }
              }
            );
            return () => {
              unsubscribeServices();
              unsubscribeStaff();
              unsubscribeBookings();
            };
          }
        }, [
          isAuthReady,
          isAuthReadyAuth,
          currentUser,
          client,
          fetchServices,
          fetchStaff,
          fetchBookings,
          APPWRITE_DATABASE_ID,
          APPWRITE_SERVICES_COLLECTION_ID,
          APPWRITE_STAFF_COLLECTION_ID,
          APPWRITE_BOOKINGS_COLLECTION_ID
        ]);
        const contextValue = (0, import_react12.useMemo)(
          () => ({
            services,
            staff,
            bookings,
            error,
            fetchServices,
            fetchStaff,
            fetchBookings,
            bookService,
            cancelBooking,
            isFetchingBookings,
            isFetchingServices,
            isFetchingStaff,
            isBookingService,
            isCancellingBooking,
            isLoading: isFetchingBookings || isFetchingServices || isFetchingStaff || isBookingService || isCancellingBooking
          }),
          [
            services,
            staff,
            bookings,
            error,
            fetchServices,
            fetchStaff,
            fetchBookings,
            bookService,
            cancelBooking,
            isFetchingBookings,
            isFetchingServices,
            isFetchingStaff,
            isBookingService,
            isCancellingBooking
          ]
        );
        return /* @__PURE__ */ import_react12.default.createElement(BookingContext.Provider, { value: contextValue }, children);
      };
      BookingProvider.propTypes = {
        children: import_prop_types5.default.node.isRequired
      };
      useBooking = () => {
        const context = (0, import_react12.useContext)(BookingContext);
        if (context === void 0) {
          throw new Error("useBooking must be used within a BookingProvider");
        }
        return context;
      };
    }
  });

  // node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js
  var require_react_stripe_umd = __commonJS({
    "node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ReactStripe = {}, global.React));
      })(exports, (function(exports2, React41) {
        "use strict";
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2] != null ? arguments[i2] : {};
            if (i2 % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i2;
          for (i2 = 0; i2 < sourceKeys.length; i2++) {
            key = sourceKeys[i2];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i2;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
              key = sourceSymbolKeys[i2];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _slicedToArray(arr, i2) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i2) {
          var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i2 && _arr.length === i2) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o2, minLen) {
          if (!o2) return;
          if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
          var n3 = Object.prototype.toString.call(o2).slice(8, -1);
          if (n3 === "Object" && o2.constructor) n3 = o2.constructor.name;
          if (n3 === "Map" || n3 === "Set") return Array.from(o2);
          if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return _arrayLikeToArray(o2, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function getDefaultExportFromCjs(x2) {
          return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
        }
        var propTypes = { exports: {} };
        var ReactPropTypesSecret_1;
        var hasRequiredReactPropTypesSecret;
        function requireReactPropTypesSecret() {
          if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
          hasRequiredReactPropTypesSecret = 1;
          var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          ReactPropTypesSecret_1 = ReactPropTypesSecret;
          return ReactPropTypesSecret_1;
        }
        var factoryWithThrowingShims;
        var hasRequiredFactoryWithThrowingShims;
        function requireFactoryWithThrowingShims() {
          if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
          hasRequiredFactoryWithThrowingShims = 1;
          var ReactPropTypesSecret = requireReactPropTypesSecret();
          function emptyFunction() {
          }
          function emptyFunctionWithReset() {
          }
          emptyFunctionWithReset.resetWarningCache = emptyFunction;
          factoryWithThrowingShims = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
              if (secret === ReactPropTypesSecret) {
                return;
              }
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            }
            shim.isRequired = shim;
            function getShim() {
              return shim;
            }
            var ReactPropTypes = {
              array: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,
              any: shim,
              arrayOf: getShim,
              element: shim,
              elementType: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim,
              checkPropTypes: emptyFunctionWithReset,
              resetWarningCache: emptyFunction
            };
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
          return factoryWithThrowingShims;
        }
        {
          propTypes.exports = requireFactoryWithThrowingShims()();
        }
        var propTypesExports = propTypes.exports;
        var PropTypes9 = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
        var useAttachEvent = function useAttachEvent2(element, event, cb) {
          var cbDefined = !!cb;
          var cbRef = React41.useRef(cb);
          React41.useEffect(function() {
            cbRef.current = cb;
          }, [cb]);
          React41.useEffect(function() {
            if (!cbDefined || !element) {
              return function() {
              };
            }
            var decoratedCb = function decoratedCb2() {
              if (cbRef.current) {
                cbRef.current.apply(cbRef, arguments);
              }
            };
            element.on(event, decoratedCb);
            return function() {
              element.off(event, decoratedCb);
            };
          }, [cbDefined, event, element, cbRef]);
        };
        var usePrevious = function usePrevious2(value) {
          var ref = React41.useRef(value);
          React41.useEffect(function() {
            ref.current = value;
          }, [value]);
          return ref.current;
        };
        var isUnknownObject = function isUnknownObject2(raw) {
          return raw !== null && _typeof(raw) === "object";
        };
        var isPromise = function isPromise2(raw) {
          return isUnknownObject(raw) && typeof raw.then === "function";
        };
        var isStripe = function isStripe2(raw) {
          return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
        };
        var PLAIN_OBJECT_STR = "[object Object]";
        var isEqual = function isEqual2(left, right) {
          if (!isUnknownObject(left) || !isUnknownObject(right)) {
            return left === right;
          }
          var leftArray = Array.isArray(left);
          var rightArray = Array.isArray(right);
          if (leftArray !== rightArray) return false;
          var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
          var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
          if (leftPlainObject !== rightPlainObject) return false;
          if (!leftPlainObject && !leftArray) return left === right;
          var leftKeys = Object.keys(left);
          var rightKeys = Object.keys(right);
          if (leftKeys.length !== rightKeys.length) return false;
          var keySet = {};
          for (var i2 = 0; i2 < leftKeys.length; i2 += 1) {
            keySet[leftKeys[i2]] = true;
          }
          for (var _i = 0; _i < rightKeys.length; _i += 1) {
            keySet[rightKeys[_i]] = true;
          }
          var allKeys = Object.keys(keySet);
          if (allKeys.length !== leftKeys.length) {
            return false;
          }
          var l2 = left;
          var r = right;
          var pred = function pred2(key) {
            return isEqual2(l2[key], r[key]);
          };
          return allKeys.every(pred);
        };
        var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
          if (!isUnknownObject(options)) {
            return null;
          }
          return Object.keys(options).reduce(function(newOptions, key) {
            var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
            if (immutableKeys.includes(key)) {
              if (isUpdated) {
                console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
              }
              return newOptions;
            }
            if (!isUpdated) {
              return newOptions;
            }
            return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
          }, null);
        };
        var INVALID_STRIPE_ERROR$2 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
        var validateStripe = function validateStripe2(maybeStripe) {
          var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
          if (maybeStripe === null || isStripe(maybeStripe)) {
            return maybeStripe;
          }
          throw new Error(errorMsg);
        };
        var parseStripeProp = function parseStripeProp2(raw) {
          var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
          if (isPromise(raw)) {
            return {
              tag: "async",
              stripePromise: Promise.resolve(raw).then(function(result) {
                return validateStripe(result, errorMsg);
              })
            };
          }
          var stripe = validateStripe(raw, errorMsg);
          if (stripe === null) {
            return {
              tag: "empty"
            };
          }
          return {
            tag: "sync",
            stripe
          };
        };
        var registerWithStripeJs = function registerWithStripeJs2(stripe) {
          if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
            return;
          }
          stripe._registerWrapper({
            name: "react-stripe-js",
            version: "3.9.0"
          });
          stripe.registerAppInfo({
            name: "react-stripe-js",
            version: "3.9.0",
            url: "https://stripe.com/docs/stripe-js/react"
          });
        };
        var ElementsContext = /* @__PURE__ */ React41.createContext(null);
        ElementsContext.displayName = "ElementsContext";
        var parseElementsContext = function parseElementsContext2(ctx, useCase) {
          if (!ctx) {
            throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
          }
          return ctx;
        };
        var Elements3 = function Elements4(_ref) {
          var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
          var parsed = React41.useMemo(function() {
            return parseStripeProp(rawStripeProp);
          }, [rawStripeProp]);
          var _React$useState = React41.useState(function() {
            return {
              stripe: parsed.tag === "sync" ? parsed.stripe : null,
              elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
            };
          }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
          React41.useEffect(function() {
            var isMounted = true;
            var safeSetContext = function safeSetContext2(stripe) {
              setContext(function(ctx2) {
                if (ctx2.stripe) return ctx2;
                return {
                  stripe,
                  elements: stripe.elements(options)
                };
              });
            };
            if (parsed.tag === "async" && !ctx.stripe) {
              parsed.stripePromise.then(function(stripe) {
                if (stripe && isMounted) {
                  safeSetContext(stripe);
                }
              });
            } else if (parsed.tag === "sync" && !ctx.stripe) {
              safeSetContext(parsed.stripe);
            }
            return function() {
              isMounted = false;
            };
          }, [parsed, ctx, options]);
          var prevStripe = usePrevious(rawStripeProp);
          React41.useEffect(function() {
            if (prevStripe !== null && prevStripe !== rawStripeProp) {
              console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
            }
          }, [prevStripe, rawStripeProp]);
          var prevOptions = usePrevious(options);
          React41.useEffect(function() {
            if (!ctx.elements) {
              return;
            }
            var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
            if (updates) {
              ctx.elements.update(updates);
            }
          }, [options, prevOptions, ctx.elements]);
          React41.useEffect(function() {
            registerWithStripeJs(ctx.stripe);
          }, [ctx.stripe]);
          return /* @__PURE__ */ React41.createElement(ElementsContext.Provider, {
            value: ctx
          }, children);
        };
        Elements3.propTypes = {
          stripe: PropTypes9.any,
          options: PropTypes9.object
        };
        var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
          var ctx = React41.useContext(ElementsContext);
          return parseElementsContext(ctx, useCaseMessage);
        };
        var useElements3 = function useElements4() {
          var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
          return elements;
        };
        var ElementsConsumer = function ElementsConsumer2(_ref2) {
          var children = _ref2.children;
          var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
          return children(ctx);
        };
        ElementsConsumer.propTypes = {
          children: PropTypes9.func.isRequired
        };
        var _excluded$1 = ["on", "session"];
        var CheckoutSdkContext = /* @__PURE__ */ React41.createContext(null);
        CheckoutSdkContext.displayName = "CheckoutSdkContext";
        var parseCheckoutSdkContext = function parseCheckoutSdkContext2(ctx, useCase) {
          if (!ctx) {
            throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CheckoutProvider> provider."));
          }
          return ctx;
        };
        var CheckoutContext = /* @__PURE__ */ React41.createContext(null);
        CheckoutContext.displayName = "CheckoutContext";
        var extractCheckoutContextValue = function extractCheckoutContextValue2(checkoutSdk, sessionState) {
          if (!checkoutSdk) {
            return null;
          }
          checkoutSdk.on;
          checkoutSdk.session;
          var actions = _objectWithoutProperties(checkoutSdk, _excluded$1);
          if (!sessionState) {
            return Object.assign(checkoutSdk.session(), actions);
          }
          return Object.assign(sessionState, actions);
        };
        var INVALID_STRIPE_ERROR$1 = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
        var CheckoutProvider = function CheckoutProvider2(_ref) {
          var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
          var parsed = React41.useMemo(function() {
            return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
          }, [rawStripeProp]);
          var _React$useState = React41.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), session = _React$useState2[0], setSession = _React$useState2[1];
          var _React$useState3 = React41.useState(function() {
            return {
              stripe: parsed.tag === "sync" ? parsed.stripe : null,
              checkoutSdk: null
            };
          }), _React$useState4 = _slicedToArray(_React$useState3, 2), ctx = _React$useState4[0], setContext = _React$useState4[1];
          var safeSetContext = function safeSetContext2(stripe, checkoutSdk) {
            setContext(function(ctx2) {
              if (ctx2.stripe && ctx2.checkoutSdk) {
                return ctx2;
              }
              return {
                stripe,
                checkoutSdk
              };
            });
          };
          var initCheckoutCalledRef = React41.useRef(false);
          React41.useEffect(function() {
            var isMounted = true;
            if (parsed.tag === "async" && !ctx.stripe) {
              parsed.stripePromise.then(function(stripe) {
                if (stripe && isMounted && !initCheckoutCalledRef.current) {
                  initCheckoutCalledRef.current = true;
                  stripe.initCheckout(options).then(function(checkoutSdk) {
                    if (checkoutSdk) {
                      safeSetContext(stripe, checkoutSdk);
                      checkoutSdk.on("change", setSession);
                    }
                  });
                }
              });
            } else if (parsed.tag === "sync" && parsed.stripe && !initCheckoutCalledRef.current) {
              initCheckoutCalledRef.current = true;
              parsed.stripe.initCheckout(options).then(function(checkoutSdk) {
                if (checkoutSdk) {
                  safeSetContext(parsed.stripe, checkoutSdk);
                  checkoutSdk.on("change", setSession);
                }
              });
            }
            return function() {
              isMounted = false;
            };
          }, [parsed, ctx, options, setSession]);
          var prevStripe = usePrevious(rawStripeProp);
          React41.useEffect(function() {
            if (prevStripe !== null && prevStripe !== rawStripeProp) {
              console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.");
            }
          }, [prevStripe, rawStripeProp]);
          var prevOptions = usePrevious(options);
          var prevCheckoutSdk = usePrevious(ctx.checkoutSdk);
          React41.useEffect(function() {
            var _prevOptions$elements, _options$elementsOpti, _prevOptions$elements2, _options$elementsOpti2;
            if (!ctx.checkoutSdk) {
              return;
            }
            var hasSdkLoaded = Boolean(!prevCheckoutSdk && ctx.checkoutSdk);
            var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
            var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;
            var hasAppearanceChanged = !isEqual(currentAppearance, previousAppearance);
            if (currentAppearance && (hasAppearanceChanged || hasSdkLoaded)) {
              ctx.checkoutSdk.changeAppearance(currentAppearance);
            }
            var previousFonts = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements2 = prevOptions.elementsOptions) === null || _prevOptions$elements2 === void 0 ? void 0 : _prevOptions$elements2.fonts;
            var currentFonts = options === null || options === void 0 ? void 0 : (_options$elementsOpti2 = options.elementsOptions) === null || _options$elementsOpti2 === void 0 ? void 0 : _options$elementsOpti2.fonts;
            var hasFontsChanged = !isEqual(previousFonts, currentFonts);
            if (currentFonts && (hasFontsChanged || hasSdkLoaded)) {
              ctx.checkoutSdk.loadFonts(currentFonts);
            }
          }, [options, prevOptions, ctx.checkoutSdk, prevCheckoutSdk]);
          React41.useEffect(function() {
            registerWithStripeJs(ctx.stripe);
          }, [ctx.stripe]);
          var checkoutContextValue = React41.useMemo(function() {
            return extractCheckoutContextValue(ctx.checkoutSdk, session);
          }, [ctx.checkoutSdk, session]);
          if (!ctx.checkoutSdk) {
            return null;
          }
          return /* @__PURE__ */ React41.createElement(CheckoutSdkContext.Provider, {
            value: ctx
          }, /* @__PURE__ */ React41.createElement(CheckoutContext.Provider, {
            value: checkoutContextValue
          }, children));
        };
        CheckoutProvider.propTypes = {
          stripe: PropTypes9.any,
          options: PropTypes9.shape({
            fetchClientSecret: PropTypes9.func.isRequired,
            elementsOptions: PropTypes9.object
          }).isRequired
        };
        var useCheckoutSdkContextWithUseCase = function useCheckoutSdkContextWithUseCase2(useCaseString) {
          var ctx = React41.useContext(CheckoutSdkContext);
          return parseCheckoutSdkContext(ctx, useCaseString);
        };
        var useElementsOrCheckoutSdkContextWithUseCase = function useElementsOrCheckoutSdkContextWithUseCase2(useCaseString) {
          var checkoutSdkContext = React41.useContext(CheckoutSdkContext);
          var elementsContext = React41.useContext(ElementsContext);
          if (checkoutSdkContext && elementsContext) {
            throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CheckoutProvider> and <Elements> providers."));
          }
          if (checkoutSdkContext) {
            return parseCheckoutSdkContext(checkoutSdkContext, useCaseString);
          }
          return parseElementsContext(elementsContext, useCaseString);
        };
        var useCheckout = function useCheckout2() {
          useCheckoutSdkContextWithUseCase("calls useCheckout()");
          var ctx = React41.useContext(CheckoutContext);
          if (!ctx) {
            throw new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
          }
          return ctx;
        };
        var _excluded = ["mode"];
        var capitalized = function capitalized2(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        var createElementComponent = function createElementComponent2(type, isServer2) {
          var displayName = "".concat(capitalized(type), "Element");
          var ClientElement = function ClientElement2(_ref) {
            var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
            var ctx = useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
            var elements = "elements" in ctx ? ctx.elements : null;
            var checkoutSdk = "checkoutSdk" in ctx ? ctx.checkoutSdk : null;
            var _React$useState = React41.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
            var elementRef = React41.useRef(null);
            var domNode = React41.useRef(null);
            useAttachEvent(element, "blur", onBlur);
            useAttachEvent(element, "focus", onFocus);
            useAttachEvent(element, "escape", onEscape);
            useAttachEvent(element, "click", onClick);
            useAttachEvent(element, "loaderror", onLoadError);
            useAttachEvent(element, "loaderstart", onLoaderStart);
            useAttachEvent(element, "networkschange", onNetworksChange);
            useAttachEvent(element, "confirm", onConfirm);
            useAttachEvent(element, "cancel", onCancel);
            useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
            useAttachEvent(element, "shippingratechange", onShippingRateChange);
            useAttachEvent(element, "change", onChange);
            var readyCallback;
            if (onReady) {
              if (type === "expressCheckout") {
                readyCallback = onReady;
              } else {
                readyCallback = function readyCallback2() {
                  onReady(element);
                };
              }
            }
            useAttachEvent(element, "ready", readyCallback);
            React41.useLayoutEffect(function() {
              if (elementRef.current === null && domNode.current !== null && (elements || checkoutSdk)) {
                var newElement = null;
                if (checkoutSdk) {
                  switch (type) {
                    case "payment":
                      newElement = checkoutSdk.createPaymentElement(options);
                      break;
                    case "address":
                      if ("mode" in options) {
                        var mode = options.mode, restOptions = _objectWithoutProperties(options, _excluded);
                        if (mode === "shipping") {
                          newElement = checkoutSdk.createShippingAddressElement(restOptions);
                        } else if (mode === "billing") {
                          newElement = checkoutSdk.createBillingAddressElement(restOptions);
                        } else {
                          throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                        }
                      } else {
                        throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                      }
                      break;
                    case "expressCheckout":
                      newElement = checkoutSdk.createExpressCheckoutElement(options);
                      break;
                    case "currencySelector":
                      newElement = checkoutSdk.createCurrencySelectorElement();
                      break;
                    case "taxId":
                      newElement = checkoutSdk.createTaxIdElement(options);
                      break;
                    default:
                      throw new Error("Invalid Element type ".concat(displayName, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                  }
                } else if (elements) {
                  newElement = elements.create(type, options);
                }
                elementRef.current = newElement;
                setElement(newElement);
                if (newElement) {
                  newElement.mount(domNode.current);
                }
              }
            }, [elements, checkoutSdk, options]);
            var prevOptions = usePrevious(options);
            React41.useEffect(function() {
              if (!elementRef.current) {
                return;
              }
              var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
              if (updates && "update" in elementRef.current) {
                elementRef.current.update(updates);
              }
            }, [options, prevOptions]);
            React41.useLayoutEffect(function() {
              return function() {
                if (elementRef.current && typeof elementRef.current.destroy === "function") {
                  try {
                    elementRef.current.destroy();
                    elementRef.current = null;
                  } catch (error) {
                  }
                }
              };
            }, []);
            return /* @__PURE__ */ React41.createElement("div", {
              id,
              className,
              ref: domNode
            });
          };
          var ServerElement = function ServerElement2(props) {
            useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
            var id = props.id, className = props.className;
            return /* @__PURE__ */ React41.createElement("div", {
              id,
              className
            });
          };
          var Element = isServer2 ? ServerElement : ClientElement;
          Element.propTypes = {
            id: PropTypes9.string,
            className: PropTypes9.string,
            onChange: PropTypes9.func,
            onBlur: PropTypes9.func,
            onFocus: PropTypes9.func,
            onReady: PropTypes9.func,
            onEscape: PropTypes9.func,
            onClick: PropTypes9.func,
            onLoadError: PropTypes9.func,
            onLoaderStart: PropTypes9.func,
            onNetworksChange: PropTypes9.func,
            onConfirm: PropTypes9.func,
            onCancel: PropTypes9.func,
            onShippingAddressChange: PropTypes9.func,
            onShippingRateChange: PropTypes9.func,
            options: PropTypes9.object
          };
          Element.displayName = displayName;
          Element.__elementType = type;
          return Element;
        };
        var isServer = typeof window === "undefined";
        var EmbeddedCheckoutContext = /* @__PURE__ */ React41.createContext(null);
        EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
        var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext2() {
          var ctx = React41.useContext(EmbeddedCheckoutContext);
          if (!ctx) {
            throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
          }
          return ctx;
        };
        var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
        var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider2(_ref) {
          var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
          var parsed = React41.useMemo(function() {
            return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR);
          }, [rawStripeProp]);
          var embeddedCheckoutPromise = React41.useRef(null);
          var loadedStripe = React41.useRef(null);
          var _React$useState = React41.useState({
            embeddedCheckout: null
          }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
          React41.useEffect(function() {
            if (loadedStripe.current || embeddedCheckoutPromise.current) {
              return;
            }
            var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout2(stripe) {
              if (loadedStripe.current || embeddedCheckoutPromise.current) return;
              loadedStripe.current = stripe;
              embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then(function(embeddedCheckout) {
                setContext({
                  embeddedCheckout
                });
              });
            };
            if (parsed.tag === "async" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
              parsed.stripePromise.then(function(stripe) {
                if (stripe) {
                  setStripeAndInitEmbeddedCheckout(stripe);
                }
              });
            } else if (parsed.tag === "sync" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
              setStripeAndInitEmbeddedCheckout(parsed.stripe);
            }
          }, [parsed, options, ctx, loadedStripe]);
          React41.useEffect(function() {
            return function() {
              if (ctx.embeddedCheckout) {
                embeddedCheckoutPromise.current = null;
                ctx.embeddedCheckout.destroy();
              } else if (embeddedCheckoutPromise.current) {
                embeddedCheckoutPromise.current.then(function() {
                  embeddedCheckoutPromise.current = null;
                  if (ctx.embeddedCheckout) {
                    ctx.embeddedCheckout.destroy();
                  }
                });
              }
            };
          }, [ctx.embeddedCheckout]);
          React41.useEffect(function() {
            registerWithStripeJs(loadedStripe);
          }, [loadedStripe]);
          var prevStripe = usePrevious(rawStripeProp);
          React41.useEffect(function() {
            if (prevStripe !== null && prevStripe !== rawStripeProp) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
            }
          }, [prevStripe, rawStripeProp]);
          var prevOptions = usePrevious(options);
          React41.useEffect(function() {
            if (prevOptions == null) {
              return;
            }
            if (options == null) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
              return;
            }
            if (options.clientSecret === void 0 && options.fetchClientSecret === void 0) {
              console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.");
            }
            if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
            }
            if (prevOptions.fetchClientSecret != null && options.fetchClientSecret !== prevOptions.fetchClientSecret) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
            }
            if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
            }
            if (prevOptions.onShippingDetailsChange != null && options.onShippingDetailsChange !== prevOptions.onShippingDetailsChange) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.");
            }
            if (prevOptions.onLineItemsChange != null && options.onLineItemsChange !== prevOptions.onLineItemsChange) {
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.");
            }
          }, [prevOptions, options]);
          return /* @__PURE__ */ React41.createElement(EmbeddedCheckoutContext.Provider, {
            value: ctx
          }, children);
        };
        var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement2(_ref) {
          var id = _ref.id, className = _ref.className;
          var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(), embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;
          var isMounted = React41.useRef(false);
          var domNode = React41.useRef(null);
          React41.useLayoutEffect(function() {
            if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
              embeddedCheckout.mount(domNode.current);
              isMounted.current = true;
            }
            return function() {
              if (isMounted.current && embeddedCheckout) {
                try {
                  embeddedCheckout.unmount();
                  isMounted.current = false;
                } catch (e2) {
                }
              }
            };
          }, [embeddedCheckout]);
          return /* @__PURE__ */ React41.createElement("div", {
            ref: domNode,
            id,
            className
          });
        };
        var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement2(_ref2) {
          var id = _ref2.id, className = _ref2.className;
          useEmbeddedCheckoutContext();
          return /* @__PURE__ */ React41.createElement("div", {
            id,
            className
          });
        };
        var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;
        var useStripe3 = function useStripe4() {
          var _useElementsOrCheckou = useElementsOrCheckoutSdkContextWithUseCase("calls useStripe()"), stripe = _useElementsOrCheckou.stripe;
          return stripe;
        };
        var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
        var CardElement2 = createElementComponent("card", isServer);
        var CardNumberElement = createElementComponent("cardNumber", isServer);
        var CardExpiryElement = createElementComponent("cardExpiry", isServer);
        var CardCvcElement = createElementComponent("cardCvc", isServer);
        var FpxBankElement = createElementComponent("fpxBank", isServer);
        var IbanElement = createElementComponent("iban", isServer);
        var IdealBankElement = createElementComponent("idealBank", isServer);
        var P24BankElement = createElementComponent("p24Bank", isServer);
        var EpsBankElement = createElementComponent("epsBank", isServer);
        var PaymentElement2 = createElementComponent("payment", isServer);
        var ExpressCheckoutElement = createElementComponent("expressCheckout", isServer);
        var CurrencySelectorElement = createElementComponent("currencySelector", isServer);
        var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
        var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
        var AddressElement = createElementComponent("address", isServer);
        var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
        var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
        var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
        var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
        var TaxIdElement = createElementComponent("taxId", isServer);
        exports2.AddressElement = AddressElement;
        exports2.AffirmMessageElement = AffirmMessageElement;
        exports2.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
        exports2.AuBankAccountElement = AuBankAccountElement;
        exports2.CardCvcElement = CardCvcElement;
        exports2.CardElement = CardElement2;
        exports2.CardExpiryElement = CardExpiryElement;
        exports2.CardNumberElement = CardNumberElement;
        exports2.CheckoutProvider = CheckoutProvider;
        exports2.CurrencySelectorElement = CurrencySelectorElement;
        exports2.Elements = Elements3;
        exports2.ElementsConsumer = ElementsConsumer;
        exports2.EmbeddedCheckout = EmbeddedCheckout;
        exports2.EmbeddedCheckoutProvider = EmbeddedCheckoutProvider;
        exports2.EpsBankElement = EpsBankElement;
        exports2.ExpressCheckoutElement = ExpressCheckoutElement;
        exports2.FpxBankElement = FpxBankElement;
        exports2.IbanElement = IbanElement;
        exports2.IdealBankElement = IdealBankElement;
        exports2.LinkAuthenticationElement = LinkAuthenticationElement;
        exports2.P24BankElement = P24BankElement;
        exports2.PaymentElement = PaymentElement2;
        exports2.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
        exports2.PaymentRequestButtonElement = PaymentRequestButtonElement;
        exports2.ShippingAddressElement = ShippingAddressElement;
        exports2.TaxIdElement = TaxIdElement;
        exports2.useCheckout = useCheckout;
        exports2.useElements = useElements3;
        exports2.useStripe = useStripe3;
      }));
    }
  });

  // src/views/UserDashboardView.js
  var UserDashboardView_exports = {};
  __export(UserDashboardView_exports, {
    default: () => UserDashboardView_default
  });
  var import_react26, import_prop_types8, formatDateTime2, UserDashboardView, UserDashboardView_default;
  var init_UserDashboardView = __esm({
    "src/views/UserDashboardView.js"() {
      import_react26 = __toESM(require_react());
      import_prop_types8 = __toESM(require_prop_types());
      init_AuthContext();
      init_BookingContext();
      init_lucide_react();
      formatDateTime2 = (isoString) => {
        const date = new Date(isoString);
        return {
          date: date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
        };
      };
      UserDashboardView = ({ setView: setView2 }) => {
        const { currentUser, userId } = useAuth();
        const { bookings, cancelBooking, isLoading, bookingMessage } = useBooking();
        const handleCancelBooking = async (bookingId) => {
          if (window.confirm("Are you sure you want to cancel this booking?")) {
            await cancelBooking(bookingId);
          }
        };
        if (!currentUser) {
          return /* @__PURE__ */ import_react26.default.createElement("div", { className: "container mx-auto p-8 text-center animate-fade-in" }, /* @__PURE__ */ import_react26.default.createElement(User, { className: "w-24 h-24 text-gray-400 mx-auto mb-6" }), /* @__PURE__ */ import_react26.default.createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-4" }, "Access Denied"), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600 mb-6" }, "Please log in to view your dashboard."), /* @__PURE__ */ import_react26.default.createElement(
            "button",
            {
              onClick: () => setView2("login"),
              className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
            },
            "Log In"
          ));
        }
        return /* @__PURE__ */ import_react26.default.createElement("div", { className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react26.default.createElement("h2", { className: "text-4xl font-bold text-center text-gray-800 mb-8" }, "Your Dashboard"), /* @__PURE__ */ import_react26.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6 mb-8 flex items-center space-x-6" }, /* @__PURE__ */ import_react26.default.createElement("div", { className: "w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ import_react26.default.createElement(User, { className: "w-10 h-10 text-purple-500" })), /* @__PURE__ */ import_react26.default.createElement("div", null, /* @__PURE__ */ import_react26.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-2" }, "Welcome, ", currentUser.name || currentUser.email.split("@")[0], "!"), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600" }, "Email: ", /* @__PURE__ */ import_react26.default.createElement("span", { className: "font-semibold" }, currentUser.email)), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600" }, "User ID: ", /* @__PURE__ */ import_react26.default.createElement("span", { className: "font-mono text-sm" }, userId)), /* @__PURE__ */ import_react26.default.createElement("button", { className: "mt-4 bg-purple-100 text-purple-700 py-2 px-4 rounded-full hover:bg-purple-200 transition duration-300" }, "Edit Profile"))), /* @__PURE__ */ import_react26.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ import_react26.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react26.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react26.default.createElement(CalendarCheck, { className: "mr-3 text-pink-500" }), " My Bookings"), isLoading ? /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-center text-gray-500" }, "Loading bookings...") : bookings.length === 0 ? /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600 text-center" }, "You have no upcoming bookings.") : /* @__PURE__ */ import_react26.default.createElement("div", { className: "divide-y divide-gray-200" }, bookings.map((booking) => {
          const { date, time } = formatDateTime2(booking.dateTime);
          return /* @__PURE__ */ import_react26.default.createElement("div", { key: booking.id, className: "py-4" }, /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-lg font-semibold text-gray-800" }, booking.serviceName), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600" }, "Staff: ", booking.staffName), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600" }, "Date: ", date), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600" }, "Time: ", time), /* @__PURE__ */ import_react26.default.createElement("p", { className: `font-semibold ${booking.status === "confirmed" ? "text-green-600" : booking.status === "pending" ? "text-orange-500" : "text-red-600"}` }, "Status: ", booking.status.charAt(0).toUpperCase() + booking.status.slice(1)), /* @__PURE__ */ import_react26.default.createElement(
            "button",
            {
              onClick: () => handleCancelBooking(booking.id),
              className: "mt-2 bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded-lg transition duration-300",
              disabled: isLoading
            },
            isLoading ? "Cancelling..." : "Cancel Booking"
          ));
        })), bookingMessage && /* @__PURE__ */ import_react26.default.createElement("p", { className: `mt-4 text-center ${bookingMessage.includes("successful") ? "text-green-600" : "text-red-600"} font-semibold` }, bookingMessage)), /* @__PURE__ */ import_react26.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react26.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react26.default.createElement(Package, { className: "mr-3 text-blue-500" }), " My Orders"), /* @__PURE__ */ import_react26.default.createElement("p", { className: "text-gray-600 text-center mb-4" }, "This section will display your past product orders.", /* @__PURE__ */ import_react26.default.createElement("br", null), " (Feature coming soon!)"), /* @__PURE__ */ import_react26.default.createElement(
          "button",
          {
            onClick: () => setView2("products"),
            className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
          },
          "Browse Products"
        ))));
      };
      UserDashboardView.propTypes = {
        setView: import_prop_types8.default.func.isRequired
      };
      UserDashboardView_default = UserDashboardView;
    }
  });

  // src/components/HomePage.js
  var require_HomePage = __commonJS({
    "src/components/HomePage.js"() {
    }
  });

  // src/main.js
  var import_react34 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // node_modules/react-router/dist/development/chunk-PVWAREVJ.mjs
  var React2 = __toESM(require_react(), 1);
  var React22 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var PopStateEventType = "popstate";
  function createBrowserHistory(options = {}) {
    function createBrowserLocation(window2, globalHistory) {
      let { pathname, search, hash } = window2.location;
      return createLocation(
        "",
        { pathname, search, hash },
        // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null,
        globalHistory.state && globalHistory.state.key || "default"
      );
    }
    function createBrowserHref(window2, to) {
      return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(
      createBrowserLocation,
      createBrowserHref,
      null,
      options
    );
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function getHistoryState(location, index) {
    return {
      usr: location.state,
      key: location.key,
      idx: index
    };
  }
  function createLocation(current, to, state = null, key) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey()
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
    let { window: window2 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window2.history;
    let action = "POP";
    let listener = null;
    let index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
    }
    function getIndex() {
      let state = globalHistory.state || { idx: null };
      return state.idx;
    }
    function handlePop() {
      action = "POP";
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({ action, location: history.location, delta });
      }
    }
    function push(to, state) {
      action = "PUSH";
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex() + 1;
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 1 });
      }
    }
    function replace2(to, state) {
      action = "REPLACE";
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex();
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 0 });
      }
    }
    function createURL(to) {
      return createBrowserURLImpl(to);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref2(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n3) {
        return globalHistory.go(n3);
      }
    };
    return history;
  }
  function createBrowserURLImpl(to, isAbsolute = false) {
    let base = "http://localhost";
    if (typeof window !== "undefined") {
      base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    }
    invariant(base, "No window.location.(origin|href) available to create URL");
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    if (!isAbsolute && href.startsWith("//")) {
      href = base + href;
    }
    return new URL(href, base);
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(
        branches[i2],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a2, b3) => a2.score !== b3.score ? b3.score - a2.score : compareIndexes(
        a2.routesMeta.map((meta) => meta.childrenIndex),
        b3.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s2) => s2 === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s2) => !isSplat(s2)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a2, b3) {
    let siblings = a2.length === b3.length && a2.slice(0, -1).every((n3, i2) => n3 === b3[i2]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a2[a2.length - 1] - b3[b3.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i2 = 0; i2 < routesMeta.length; ++i2) {
      let meta = routesMeta[i2];
      let end = i2 === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath(
        { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
        remainingPathname
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo22, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo22[paramName] = void 0;
        } else {
          memo22[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo22;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (_2, paramName, isOptional) => {
        params.push({ paramName, isOptional: isOptional != null });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
  var DataRouterContext = React2.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React2.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React2.createContext(false);
  var ViewTransitionContext = React2.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React2.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React2.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React2.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React2.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React2.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React2.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React22.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React22.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React22.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React22.useContext(NavigationContext).static;
    if (!isStatic) {
      React22.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React22.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React22.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React22.useContext(NavigationContext);
    let { matches } = React22.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React22.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React22.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React22.createContext(null);
  function useOutlet(context) {
    let outlet = React22.useContext(RouteContext).outlet;
    if (outlet) {
      return /* @__PURE__ */ React22.createElement(OutletContext.Provider, { value: context }, outlet);
    }
    return outlet;
  }
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React22.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React22.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterState, unstable_onError, future) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React22.useContext(NavigationContext);
    let { matches: parentMatches } = React22.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterState,
      unstable_onError,
      future
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React22.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React22.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React22.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React22.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React22.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React22.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.unstable_onError) {
        this.props.unstable_onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      return this.state.error !== void 0 ? /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React22.createElement(
        RouteErrorContext.Provider,
        {
          value: this.state.error,
          children: this.props.component
        }
      )) : this.props.children;
    }
  };
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React22.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterState = null, unstable_onError = null, future = null) {
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors2 = dataRouterState?.errors;
    if (errors2 != null) {
      let errorIndex = renderedMatches.findIndex(
        (m2) => m2.route.id && errors2?.[m2.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors2
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState) {
      for (let i2 = 0; i2 < renderedMatches.length; i2++) {
        let match = renderedMatches[i2];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i2;
        }
        if (match.route.id) {
          let { loaderData, errors: errors22 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors22 || errors22[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            renderFallback = true;
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors2 && match.route.id ? errors2[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React22.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React22.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React22.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            unstable_onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React22.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React22.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React22.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return state.navigation;
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React22.useMemo(
      () => matches.map((m2) => convertRouteMatchToUiMatch(m2, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React22.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React22.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React22.useCallback(
      async (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          router.navigate(to);
        } else {
          await router.navigate(to, { fromRouteId: id, ...options });
        }
      },
      [router, id]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var MemoizedDataRoutes = React3.memo(DataRoutes);
  function DataRoutes({
    routes,
    future,
    state,
    unstable_onError
  }) {
    return useRoutesImpl(routes, void 0, state, unstable_onError, future);
  }
  function Navigate({
    to,
    replace: replace2,
    state,
    relative
  }) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of
      // the router loaded. We can help them understand how to avoid that.
      `<Navigate> may be used only in the context of a <Router> component.`
    );
    let { static: isStatic } = React3.useContext(NavigationContext);
    warning(
      !isStatic,
      `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
    );
    let { matches } = React3.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let navigate = useNavigate();
    let path = resolveTo(
      to,
      getResolveToMatches(matches),
      locationPathname,
      relative === "path"
    );
    let jsonPath = JSON.stringify(path);
    React3.useEffect(() => {
      navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
    }, [navigate, jsonPath, relative, replace2, state]);
    return null;
  }
  function Outlet(props) {
    return useOutlet(props.context);
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        future: {}
      }),
      [basename, navigator2, staticProp]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
  function singleFetchUrl(reqUrl, basename, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (url.pathname === "/") {
      url.pathname = `_root.${extension}`;
    } else if (basename && stripBasename(url.pathname, basename) === "/") {
      url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
    } else {
      url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m2) => {
        let manifestRoute = manifest.routes[m2.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && routeModules[m2.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m2.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(page, basename, "data");
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement("link", { key, nonce: linkProps.nonce, ...link })
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.8.2";
    }
  } catch (e2) {
  }
  function BrowserRouter({
    basename,
    children,
    window: window2
  }) {
    let historyRef = React10.useRef();
    if (historyRef.current == null) {
      historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        React10.startTransition(() => setStateImpl(newState));
      },
      [setStateImpl]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
      }
    );
  }
  function HistoryRouter({
    basename,
    children,
    history
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        React10.startTransition(() => setStateImpl(newState));
      },
      [setStateImpl]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition,
      ...rest
    }, forwardedRef) {
      let { basename } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
      let absoluteHref;
      let isExternal = false;
      if (typeof to === "string" && isAbsolute) {
        absoluteHref = to;
        if (isBrowser) {
          try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = stripBasename(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) {
              to = path + targetUrl.search + targetUrl.hash;
            } else {
              isExternal = true;
            }
          } catch (e2) {
            warning(
              false,
              `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
            );
          }
        }
      }
      let href = useHref(to, { relative });
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: absoluteHref || href,
            onClick: isExternal || reloadDocument ? onClick : handleClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      ...props
    }, forwardedRef) => {
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition
        });
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${JSON.stringify(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          )}, ${JSON.stringify(ssrKey)})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          navigate(to, {
            replace: replace2,
            state,
            preventScrollReset,
            relative,
            viewTransition
          });
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await router.fetch(key, currentRouteId, options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [router, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // src/App.js
  var import_react30 = __toESM(require_react());

  // src/components/Header.js
  var import_react3 = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());
  init_lucide_react();

  // src/assets/Images/logo.png
  var logo_default = "./logo-55DNWN2R.png";

  // src/components/Header.js
  var Header = ({ cartItemCount, currentUser, onAuthClick, onSignOut, onCartClick, setView: setView2 }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react3.useState)(false);
    const [isScrolled, setIsScrolled] = (0, import_react3.useState)(false);
    (0, import_react3.useEffect)(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleNavigationClick = (viewName) => {
      setView2(viewName);
      setIsMobileMenuOpen(false);
    };
    return /* @__PURE__ */ import_react3.default.createElement(
      "header",
      {
        className: `bg-white px-4 py-4 z-50 rounded-b-xl transition-all duration-300 ${isScrolled ? "sticky top-0 shadow-md" : "relative"}`
      },
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "container mx-auto max-w-screen-xl flex justify-between items-center" }, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => handleNavigationClick("home"),
          className: "flex items-center space-x-2 focus:outline-none",
          "aria-label": "Go to home page"
        },
        /* @__PURE__ */ import_react3.default.createElement(
          "img",
          {
            src: logo_default,
            alt: "Bukibloom Logo",
            className: `h-10 sm:h-12 w-auto transition-all duration-300 ${isScrolled ? "opacity-90 scale-95" : "opacity-100 scale-100"}`,
            title: "Bukibloom"
          }
        ),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-2xl sm:text-3xl font-bold text-purple-700" }, "BUKIBLOOM")
      ), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "hidden md:flex flex-wrap space-x-6 items-center" }, ["home", "services", "products", "booking", "contact", "cart", "login", "register"].map((view) => /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: view,
          onClick: () => handleNavigationClick(view),
          className: "text-gray-600 hover:text-purple-700 font-medium transition duration-300 capitalize"
        },
        view === "booking" ? "Book Now" : view
      )), currentUser ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => handleNavigationClick("dashboard"),
          className: "text-gray-700 hover:text-purple-600 transition duration-300 flex items-center"
        },
        /* @__PURE__ */ import_react3.default.createElement(LayoutDashboard, { size: 18, className: "mr-1" }),
        " Dashboard"
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onSignOut,
          className: "text-red-500 hover:text-red-600 transition duration-300 flex items-center"
        },
        /* @__PURE__ */ import_react3.default.createElement(LogOut, { size: 18, className: "mr-1" }),
        " Sign Out"
      )) : /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onAuthClick,
          className: "bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
        },
        /* @__PURE__ */ import_react3.default.createElement(User, { size: 18, className: "mr-1" }),
        " Sign In / Sign Up"
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onCartClick,
          className: "relative p-2 rounded-full hover:bg-gray-100 transition duration-300",
          "aria-label": "View shopping cart"
        },
        /* @__PURE__ */ import_react3.default.createElement(ShoppingCart, { className: "h-7 w-7 text-gray-600 hover:text-purple-700" }),
        cartItemCount > 0 && /* @__PURE__ */ import_react3.default.createElement("span", { className: "absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-ping-once" }, cartItemCount)
      )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "md:hidden flex items-center space-x-4" }, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onCartClick,
          className: "relative p-2 rounded-full hover:bg-gray-100 transition duration-300",
          "aria-label": "View shopping cart"
        },
        /* @__PURE__ */ import_react3.default.createElement(ShoppingCart, { className: "h-7 w-7 text-gray-600 hover:text-purple-700" }),
        cartItemCount > 0 && /* @__PURE__ */ import_react3.default.createElement("span", { className: "absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-ping-once" }, cartItemCount)
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: toggleMobileMenu,
          className: "text-gray-600 hover:text-purple-700 focus:outline-none",
          "aria-label": "Toggle mobile menu"
        },
        isMobileMenuOpen ? /* @__PURE__ */ import_react3.default.createElement(X, { className: "w-6 h-6" }) : /* @__PURE__ */ import_react3.default.createElement(Menu, { className: "w-6 h-6" })
      ))),
      isMobileMenuOpen && /* @__PURE__ */ import_react3.default.createElement("div", { className: "md:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-4 animate-slide-down" }, /* @__PURE__ */ import_react3.default.createElement("nav", { className: "flex flex-col space-y-4" }, ["home", "services", "products", "booking", "contact"].map((view) => /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          key: view,
          onClick: () => handleNavigationClick(view),
          className: "w-full text-gray-600 hover:bg-gray-100 py-2 text-base text-left"
        },
        view === "booking" ? "Book Now" : view
      )), currentUser ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => handleNavigationClick("dashboard"),
          className: "w-full text-gray-700 hover:bg-gray-100 py-2 text-left"
        },
        /* @__PURE__ */ import_react3.default.createElement(LayoutDashboard, { size: 18, className: "mr-2 inline-block" }),
        " Dashboard"
      ), /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onSignOut,
          className: "w-full text-red-500 hover:bg-gray-100 py-2 text-left"
        },
        /* @__PURE__ */ import_react3.default.createElement(LogOut, { size: 18, className: "mr-2 inline-block" }),
        " Sign Out"
      )) : /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: onAuthClick,
          className: "w-full bg-purple-600 text-white py-2 px-4 rounded-full mt-2"
        },
        /* @__PURE__ */ import_react3.default.createElement(User, { size: 18, className: "mr-2 inline-block" }),
        " Sign In / Sign Up"
      )))
    );
  };
  Header.propTypes = {
    cartItemCount: import_prop_types.default.number.isRequired,
    currentUser: import_prop_types.default.object,
    onAuthClick: import_prop_types.default.func.isRequired,
    onSignOut: import_prop_types.default.func.isRequired,
    onCartClick: import_prop_types.default.func.isRequired,
    setView: import_prop_types.default.func.isRequired
  };
  var Header_default = Header;

  // src/components/HeroSection.js
  var import_react4 = __toESM(require_react());
  var import_prop_types2 = __toESM(require_prop_types());
  var HeroSection = ({
    heading,
    subheading,
    bookButtonText,
    onBookClick,
    shopButtonText,
    onShopClick,
    backgroundImage
  }) => {
    return /* @__PURE__ */ import_react4.default.createElement(
      "div",
      {
        className: "relative text-center py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center rounded-lg shadow-xl mb-12 overflow-hidden",
        style: { backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none" }
      },
      backgroundImage && /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0 bg-black opacity-50" }),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "relative z-10 text-white flex flex-col items-center justify-center" }, /* @__PURE__ */ import_react4.default.createElement(
        "img",
        {
          src: logo_default,
          alt: "Bukibloom Logo",
          className: "h-12 md:h-16 w-auto mb-6",
          title: "Bukibloom"
        }
      ), /* @__PURE__ */ import_react4.default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight" }, heading), /* @__PURE__ */ import_react4.default.createElement("p", { className: "text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-2" }, subheading), /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex flex-wrap justify-center gap-4" }, /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          onClick: onBookClick,
          title: "Book your appointment",
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        },
        bookButtonText
      ), /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          onClick: onShopClick,
          title: "Browse our products",
          className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        },
        shopButtonText
      )))
    );
  };
  HeroSection.propTypes = {
    heading: import_prop_types2.default.string.isRequired,
    subheading: import_prop_types2.default.string.isRequired,
    bookButtonText: import_prop_types2.default.string,
    onBookClick: import_prop_types2.default.func,
    shopButtonText: import_prop_types2.default.string,
    onShopClick: import_prop_types2.default.func,
    backgroundImage: import_prop_types2.default.string
  };
  HeroSection.defaultProps = {
    bookButtonText: "Book Now",
    shopButtonText: "Shop Products"
  };
  var HeroSection_default = HeroSection;

  // src/components/Footer.js
  var import_react5 = __toESM(require_react());
  init_lucide_react();
  var Footer = () => {
    const socialLinks = [
      { name: "Facebook", href: "https://facebook.com/bukibloom", Icon: Facebook },
      { name: "Instagram", href: "https://instagram.com/bukibloom", Icon: Instagram },
      { name: "Twitter", href: "https://twitter.com/bukibloom", Icon: Twitter }
    ];
    return /* @__PURE__ */ import_react5.default.createElement("footer", { className: "bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12 rounded-t-xl" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "container mx-auto flex flex-col items-center text-center space-y-6 md:space-y-4" }, /* @__PURE__ */ import_react5.default.createElement(
      "img",
      {
        src: logo_default,
        alt: "Bukibloom Logo",
        className: "h-12 md:h-14 w-auto",
        title: "Bukibloom"
      }
    ), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-base md:text-lg font-semibold" }, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " BukiBloom. All rights reserved."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-wrap justify-center gap-6" }, socialLinks.map(({ name, href, Icon: Icon2 }) => /* @__PURE__ */ import_react5.default.createElement(
      "a",
      {
        key: name,
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        title: name,
        className: "text-gray-400 hover:text-white transition duration-300 transform hover:scale-110",
        "aria-label": name
      },
      /* @__PURE__ */ import_react5.default.createElement(Icon2, { size: 24 }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "sr-only" }, name)
    ))), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-sm text-gray-400 px-2" }, "Designed with ", /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-red-400" }, "\u2665"), " for your beauty needs.")));
  };
  var Footer_default = Footer;

  // src/components/AuthModal.js
  var import_react8 = __toESM(require_react());
  init_lucide_react();

  // src/components/InputField.js
  var import_react6 = __toESM(require_react());
  var InputField = ({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    error = "",
    required = false,
    disabled = false
  }) => {
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react6.default.createElement("label", { htmlFor: id, className: "block text-gray-700 text-sm font-bold mb-2" }, label, " ", required && /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react6.default.createElement(
      "input",
      {
        type,
        id,
        value,
        onChange,
        placeholder,
        required,
        disabled,
        className: `shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out
                    ${error ? "border-red-500" : "border-gray-300"}`
      }
    ), error && /* @__PURE__ */ import_react6.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, error));
  };
  var InputField_default = InputField;

  // src/utils/showMessage.js
  var showMessage = (message, type = "info") => {
    let messageBox = document.getElementById("message-box");
    if (!messageBox) {
      messageBox = document.createElement("div");
      messageBox.id = "message-box";
      document.body.appendChild(messageBox);
    }
    messageBox.textContent = message;
    messageBox.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-opacity duration-300 `;
    if (type === "success") {
      messageBox.classList.add("bg-green-500");
    } else if (type === "error") {
      messageBox.classList.add("bg-red-500");
    } else {
      messageBox.classList.add("bg-blue-500");
    }
    messageBox.classList.remove("opacity-0");
    messageBox.classList.add("opacity-100");
    setTimeout(() => {
      messageBox.classList.remove("opacity-100");
      messageBox.classList.add("opacity-0");
    }, 3e3);
  };
  var showMessage_default = showMessage;

  // src/components/AuthModal.js
  init_AuthContext();
  var AuthModal = ({ isOpen, onClose }) => {
    const { signIn, signUp, currentUser, isAuthReady } = useAuth();
    const [isLogin, setIsLogin] = (0, import_react8.useState)(true);
    const [formState, setFormState] = (0, import_react8.useState)({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    const [errors2, setErrors] = (0, import_react8.useState)({});
    const [isLoading, setIsLoading] = (0, import_react8.useState)(false);
    const modalRef = (0, import_react8.useRef)(null);
    const handleChange = (e2) => {
      const { name, value } = e2.target;
      setFormState((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };
    const resetForm = () => {
      setFormState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      setErrors({});
      setIsLogin(true);
      setIsLoading(false);
    };
    (0, import_react8.useEffect)(() => {
      if (isAuthReady && currentUser && isOpen) {
        onClose();
        resetForm();
        showMessage_default(`Welcome, ${currentUser.name || currentUser.email}!`, "success");
      }
    }, [currentUser, isAuthReady, isOpen, onClose]);
    (0, import_react8.useEffect)(() => {
      if (isOpen && modalRef.current) {
        modalRef.current.focus();
        const handleKeyDown = (event) => {
          if (event.key === "Tab") {
            const focusableElements = modalRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
              }
            }
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }
    }, [isOpen]);
    const validateForm = () => {
      const { name, email, password, confirmPassword } = formState;
      let newErrors = {};
      let isValid = true;
      if (!email.trim()) {
        newErrors.email = "Email is required.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email address is invalid.";
        isValid = false;
      }
      if (!password.trim()) {
        newErrors.password = "Password is required.";
        isValid = false;
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long.";
        isValid = false;
      }
      if (!isLogin) {
        if (!name.trim()) {
          newErrors.name = "Name is required.";
          isValid = false;
        }
        if (password !== confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match.";
          isValid = false;
        }
      }
      setErrors(newErrors);
      return isValid;
    };
    const handleSubmit = async (e2) => {
      e2.preventDefault();
      if (!validateForm()) {
        showMessage_default("Please correct the errors in the form.", "error");
        return;
      }
      setIsLoading(true);
      try {
        if (isLogin) {
          await signIn(formState.email, formState.password);
        } else {
          await signUp(formState.email, formState.password, formState.name);
        }
      } catch (error) {
        console.error("Auth error:", error);
        showMessage_default(error.message || "An authentication error occurred.", "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (!isOpen) return null;
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 animate-fade-in",
        "aria-labelledby": "auth-modal-title",
        role: "dialog",
        "aria-modal": "true",
        onClick: onClose
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          ref: modalRef,
          className: "bg-white rounded-lg shadow-2xl p-8 w-full max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100",
          onClick: (e2) => e2.stopPropagation(),
          tabIndex: "-1"
        },
        /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ import_react8.default.createElement("h2", { id: "auth-modal-title", className: "text-3xl font-bold text-gray-800" }, isLogin ? "Login" : "Sign Up"), /* @__PURE__ */ import_react8.default.createElement("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700 transition duration-200", "aria-label": "Close modal" }, /* @__PURE__ */ import_react8.default.createElement(X, { className: "w-7 h-7" }))),
        /* @__PURE__ */ import_react8.default.createElement("form", { onSubmit: handleSubmit }, !isLogin && /* @__PURE__ */ import_react8.default.createElement(
          InputField_default,
          {
            id: "name",
            name: "name",
            label: "Full Name",
            type: "text",
            value: formState.name,
            onChange: handleChange,
            error: errors2.name,
            required: true,
            disabled: isLoading
          }
        ), /* @__PURE__ */ import_react8.default.createElement(
          InputField_default,
          {
            id: "email",
            name: "email",
            label: "Email",
            type: "email",
            value: formState.email,
            onChange: handleChange,
            error: errors2.email,
            required: true,
            disabled: isLoading
          }
        ), /* @__PURE__ */ import_react8.default.createElement(
          InputField_default,
          {
            id: "password",
            name: "password",
            label: "Password",
            type: "password",
            value: formState.password,
            onChange: handleChange,
            error: errors2.password,
            required: true,
            disabled: isLoading
          }
        ), !isLogin && /* @__PURE__ */ import_react8.default.createElement(
          InputField_default,
          {
            id: "confirmPassword",
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            value: formState.confirmPassword,
            onChange: handleChange,
            error: errors2.confirmPassword,
            required: true,
            disabled: isLoading
          }
        ), /* @__PURE__ */ import_react8.default.createElement(
          "button",
          {
            type: "submit",
            className: `w-full flex items-center justify-center mt-6 py-3 px-4 rounded-lg font-bold text-white transition duration-300 transform hover:scale-105
                            ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`,
            disabled: isLoading
          },
          isLoading ? /* @__PURE__ */ import_react8.default.createElement("svg", { className: "animate-spin h-5 w-5 text-white mr-3", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react8.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react8.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })) : isLogin ? /* @__PURE__ */ import_react8.default.createElement(LogIn, { className: "mr-2", size: 20 }) : /* @__PURE__ */ import_react8.default.createElement(UserPlus, { className: "mr-2", size: 20 }),
          isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"
        )),
        /* @__PURE__ */ import_react8.default.createElement("p", { className: "text-center text-gray-600 text-sm mt-6" }, isLogin ? "Don't have an account?" : "Already have an account?", /* @__PURE__ */ import_react8.default.createElement(
          "button",
          {
            onClick: () => setIsLogin(!isLogin),
            className: "text-purple-600 hover:text-purple-800 font-semibold ml-1 transition duration-200",
            disabled: isLoading
          },
          isLogin ? "Sign Up" : "Login"
        ))
      )
    );
  };
  var AuthModal_default = AuthModal;

  // src/views/ProductsView.js
  var import_react11 = __toESM(require_react());

  // src/context/CartContext.js
  var import_react9 = __toESM(require_react());
  var import_prop_types4 = __toESM(require_prop_types());
  var CartContext = (0, import_react9.createContext)();
  var CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = (0, import_react9.useState)([]);
    const [error, setError] = (0, import_react9.useState)(null);
    const handleCartError = (0, import_react9.useCallback)((message) => {
      setError(message);
      showMessage_default(message, "error");
    }, []);
    const handleAddToCart = (0, import_react9.useCallback)((product) => {
      try {
        setCartItems((prevItems) => {
          const existingItem = prevItems.find((item) => item.id === product.id);
          if (existingItem) {
            return prevItems.map(
              (item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevItems, { ...product, quantity: 1 }];
          }
        });
        showMessage_default(`${product.name} added to cart!`, "success");
      } catch (err) {
        handleCartError(err.message);
      }
    }, [handleCartError]);
    const handleRemoveFromCart = (0, import_react9.useCallback)((productId) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
      showMessage_default("Item removed from cart.", "info");
    }, []);
    const handleUpdateQuantity = (0, import_react9.useCallback)((productId, quantity) => {
      setCartItems(
        (prevItems) => prevItems.map(
          (item) => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      );
    }, []);
    const clearCart = (0, import_react9.useCallback)(() => {
      setCartItems([]);
      showMessage_default("Cart cleared.", "info");
    }, []);
    const handleCheckout = (0, import_react9.useCallback)(() => {
      showMessage_default("Proceeding to checkout!", "info");
      clearCart();
    }, [clearCart]);
    const getTotalPrice = (0, import_react9.useCallback)(() => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);
    const contextValue = (0, import_react9.useMemo)(() => ({
      cartItems,
      cartItemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
      cartTotal: getTotalPrice(),
      handleAddToCart,
      handleRemoveFromCart,
      handleUpdateQuantity,
      handleCheckout,
      clearCart,
      getTotalPrice,
      error
    }), [
      cartItems,
      handleAddToCart,
      handleRemoveFromCart,
      handleUpdateQuantity,
      handleCheckout,
      clearCart,
      getTotalPrice,
      error
    ]);
    return /* @__PURE__ */ import_react9.default.createElement(CartContext.Provider, { value: contextValue }, children);
  };
  CartProvider.propTypes = {
    children: import_prop_types4.default.node.isRequired
  };
  var useCart = () => {
    const context = (0, import_react9.useContext)(CartContext);
    if (context === void 0) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };

  // src/views/ProductsView.js
  init_useAppwrite();
  init_sdk();
  var ProductsView = ({ setView: setView2 }) => {
    const { handleAddToCart } = useCart();
    const { database, isAuthReady } = useAppwriteContext();
    const APPWRITE_DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
    const APPWRITE_PRODUCTS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_PRODUCTS_COLLECTION_ID;
    const [products, setProducts] = (0, import_react11.useState)([]);
    const [isLoadingProducts, setIsLoadingProducts] = (0, import_react11.useState)(true);
    const [error, setError] = (0, import_react11.useState)(null);
    (0, import_react11.useEffect)(() => {
      const fetchProducts = async () => {
        if (!database || !isAuthReady || !APPWRITE_PRODUCTS_COLLECTION_ID) {
          console.log("ProductsView: Products collection ID not configured or DB not ready. Cannot fetch products.");
          setIsLoadingProducts(false);
          return;
        }
        setIsLoadingProducts(true);
        setError(null);
        try {
          const response = await database.listDocuments(
            APPWRITE_DATABASE_ID,
            APPWRITE_PRODUCTS_COLLECTION_ID,
            [Query.orderAsc("name")]
          );
          setProducts(response.documents.map((doc) => ({
            id: doc.$id,
            name: doc.name,
            price: doc.price,
            imageUrl: doc.imageUrl,
            description: doc.description,
            inventory: doc.inventory,
            ...doc
          })));
          console.log("Fetched products:", response.documents);
        } catch (err) {
          console.error("Error fetching products:", err);
          setError("Failed to load products. Please try again later.");
        } finally {
          setIsLoadingProducts(false);
        }
      };
      fetchProducts();
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_PRODUCTS_COLLECTION_ID]);
    return /* @__PURE__ */ import_react11.default.createElement("section", { id: "products", className: "bg-purple-50 py-16 px-4 rounded-xl m-4 shadow-lg" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "container mx-auto text-center" }, /* @__PURE__ */ import_react11.default.createElement("h2", { className: "text-4xl font-bold text-purple-800 mb-8" }, "Our Premium Products"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-lg text-gray-700 mb-8 max-w-3xl mx-auto" }, "Discover our exclusive range of salon-quality products designed to maintain and enhance your beauty at home."), isLoadingProducts ? /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-center text-gray-500" }, "Loading products...") : error ? /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-center text-red-500" }, error) : products.length === 0 ? /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-center text-gray-600" }, "No products available at the moment.") : /* @__PURE__ */ import_react11.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" }, products.map((product) => /* @__PURE__ */ import_react11.default.createElement("div", { key: product.id, className: "bg-white p-4 rounded-xl shadow-md animate-fade-in-up transform hover:-translate-y-1 transition duration-300" }, /* @__PURE__ */ import_react11.default.createElement(
      "img",
      {
        src: product.imageUrl || `https://placehold.co/300x200/e0cffc/6a0dad?text=${product.name.replace(/\s/g, "+")}`,
        alt: product.name,
        onError: (e2) => {
          e2.target.onerror = null;
          e2.target.src = `https://placehold.co/300x200/e0cffc/6a0dad?text=${product.name.replace(/\s/g, "+")}`;
        },
        className: "w-full h-48 object-cover rounded-lg mb-4"
      }
    ), /* @__PURE__ */ import_react11.default.createElement("h3", { className: "text-xl font-semibold text-purple-700 mb-2" }, product.name), /* @__PURE__ */ import_react11.default.createElement("p", { className: "text-gray-600 mb-3" }, product.description || "High-quality ingredients for professional results."), /* @__PURE__ */ import_react11.default.createElement("span", { className: "text-lg font-bold text-pink-600" }, "$", product.price?.toFixed(2)), /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        onClick: () => handleAddToCart(product),
        className: "mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
      },
      "Add to Cart"
    ))))));
  };
  var ProductsView_default = ProductsView;

  // src/views/ServicesView.js
  var import_react13 = __toESM(require_react());
  init_BookingContext();
  var ServicesView = ({ setView: setView2 }) => {
    const { services, setSelectedService } = useBooking();
    return /* @__PURE__ */ import_react13.default.createElement("section", { id: "services", className: "container mx-auto py-16 px-4" }, /* @__PURE__ */ import_react13.default.createElement("h2", { className: "text-4xl font-bold text-center text-purple-800 mb-12" }, "Our Services"), /* @__PURE__ */ import_react13.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, services.length === 0 ? /* @__PURE__ */ import_react13.default.createElement("p", { className: "col-span-full text-center text-gray-500" }, "Loading services...") : services.map((service) => (
      // Iterate over the 'services' array from context
      /* @__PURE__ */ import_react13.default.createElement("div", { key: service.id, className: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in-up" }, /* @__PURE__ */ import_react13.default.createElement("h3", { className: "text-2xl font-semibold text-purple-700 mb-3" }, service.name), " ", /* @__PURE__ */ import_react13.default.createElement("p", { className: "text-gray-600 mb-4" }, service.description || (service.name === "Haircut" && "Achieve your perfect look with our expert stylists, specializing in modern cuts and classic styles." || service.name === "Coloring" && "Vibrant colors, stunning highlights, and balayage tailored to enhance your natural beauty." || service.name === "Manicure" && "Indulge in luxurious nail care, including gel, acrylic, and classic manicures." || "A professional beauty service tailored to your needs."), /* @__PURE__ */ import_react13.default.createElement("br", null), /* @__PURE__ */ import_react13.default.createElement("span", { className: "font-bold text-pink-600" }, "Price: $", service.price?.toFixed(2)), /* @__PURE__ */ import_react13.default.createElement("br", null), /* @__PURE__ */ import_react13.default.createElement("span", { className: "text-sm text-gray-500" }, "Duration: ", service.duration, " minutes")), /* @__PURE__ */ import_react13.default.createElement(
        "button",
        {
          onClick: () => {
            setSelectedService(service.id);
            setView2("booking");
          },
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
        },
        "Learn More & Book"
      ))
    ))));
  };
  var ServicesView_default = ServicesView;

  // src/views/BookingView.js
  var import_react18 = __toESM(require_react());
  init_AuthContext();
  init_BookingContext();

  // src/context/MessageContext.js
  var import_react16 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // src/components/MessageContainer.js
  var import_react15 = __toESM(require_react());

  // src/components/MessageItem.js
  var import_react14 = __toESM(require_react());

  // src/context/MessageContext.js
  var MessageContext = (0, import_react16.createContext)();
  var useMessage = () => {
    const context = (0, import_react16.useContext)(MessageContext);
    if (!context) {
      throw new Error("useMessage must be used within a MessageProvider");
    }
    return context;
  };

  // src/components/icons/CalendarCheck.js
  var import_react17 = __toESM(require_react());
  var CalendarCheck2 = (props) => /* @__PURE__ */ import_react17.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    /* @__PURE__ */ import_react17.default.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ import_react17.default.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ import_react17.default.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ import_react17.default.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
    /* @__PURE__ */ import_react17.default.createElement("polyline", { points: "9 14 12 17 19 10" })
  );
  var CalendarCheck_default = CalendarCheck2;

  // src/views/BookingView.js
  var BookingView = ({ setView: setView2 }) => {
    const { userId } = useAuth();
    const { showMessage: showMessage2 } = useMessage();
    const {
      services,
      staffMembers,
      bookings,
      selectedService,
      setSelectedService,
      selectedStaff,
      setSelectedStaff: setSelectedStaff2,
      selectedDate,
      setSelectedDate: setSelectedDate2,
      selectedTime,
      setSelectedTime: setSelectedTime2,
      isFetchingBookings,
      isBookingService,
      isCancellingBooking,
      getMinDate,
      getStaffForService,
      generateAvailableTimeSlots,
      bookService,
      cancelBooking
    } = useBooking();
    const [serviceError, setServiceError] = (0, import_react18.useState)("");
    const [staffError, setStaffError] = (0, import_react18.useState)("");
    const [dateError, setDateError] = (0, import_react18.useState)("");
    const [timeError, setTimeError] = (0, import_react18.useState)("");
    const [isCancelModalOpen, setIsCancelModalOpen] = (0, import_react18.useState)(false);
    const [bookingToCancelId, setBookingToCancelId] = (0, import_react18.useState)(null);
    const selectedServiceObj = services.find((s2) => s2.id === selectedService);
    const selectedStaffObj = staffMembers.find((s2) => s2.id === selectedStaff);
    const availableStaff = selectedService ? getStaffForService(staffMembers, selectedService) : [];
    const availableTimeSlots = selectedServiceObj && selectedStaffObj && selectedDate ? generateAvailableTimeSlots(selectedDate, selectedServiceObj, selectedStaffObj, bookings) : [];
    (0, import_react18.useEffect)(() => {
      if (selectedTime && !availableTimeSlots.includes(selectedTime)) {
        setSelectedTime2("");
      }
    }, [selectedDate, selectedStaff, availableTimeSlots, selectedTime, setSelectedTime2]);
    const validateBookingForm = () => {
      let isValid = true;
      setServiceError("");
      setStaffError("");
      setDateError("");
      setTimeError("");
      if (!selectedService) {
        setServiceError("Please select a service.");
        isValid = false;
      }
      if (!selectedStaff) {
        setStaffError("Please select a staff member.");
        isValid = false;
      }
      if (!selectedDate) {
        setDateError("Please select a date.");
        isValid = false;
      }
      if (!selectedTime) {
        setTimeError("Please select a time.");
        isValid = false;
      } else if (!availableTimeSlots.includes(selectedTime)) {
        setTimeError("Selected time is not available.");
        isValid = false;
      }
      return isValid;
    };
    const handleProceedToPayment = () => {
      if (!userId) {
        showMessage2("You must be logged in to book a service.", "error");
        return;
      }
      if (validateBookingForm()) {
        if (selectedServiceObj) {
          const calculatedDeposit = selectedServiceObj.price * 0.1;
          handlePaymentSuccessAndFinalizeBooking();
        } else {
          showMessage2("Selected service not found.", "error");
        }
      }
    };
    const handlePaymentSuccessAndFinalizeBooking = async () => {
      const dateTime = /* @__PURE__ */ new Date(`${selectedDate}T${selectedTime}`);
      const success = await bookService(selectedService, selectedStaff, dateTime);
      if (success) {
        setSelectedService("");
        setSelectedStaff2("");
        setSelectedDate2("");
        setSelectedTime2("");
        setView2("dashboard");
        showMessage2("Your service has been successfully booked!", "success");
      } else {
        showMessage2("Payment was successful but booking could not be finalized. Please contact support.", "error");
      }
    };
    const handleCancelBooking = (bookingId) => {
      setBookingToCancelId(bookingId);
      setIsCancelModalOpen(true);
    };
    const handleConfirmCancel = async () => {
      setIsCancelModalOpen(false);
      if (bookingToCancelId) {
        const success = await cancelBooking(bookingToCancelId);
        if (success) {
          showMessage2("Booking successfully cancelled.", "success");
        } else {
          showMessage2("Failed to cancel booking. Please try again.", "error");
        }
        setBookingToCancelId(null);
      }
    };
    const handleCloseCancelModal = () => {
      setIsCancelModalOpen(false);
      setBookingToCancelId(null);
    };
    return /* @__PURE__ */ import_react18.default.createElement("section", { id: "booking", className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react18.default.createElement("h2", { className: "text-4xl font-bold text-center text-gray-800 mb-8" }, "Book Your Service"), /* @__PURE__ */ import_react18.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react18.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6" }, "New Appointment"), /* @__PURE__ */ import_react18.default.createElement("form", { onSubmit: (e2) => {
      e2.preventDefault();
      handleProceedToPayment();
    } }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react18.default.createElement("label", { htmlFor: "service-select", className: "block text-gray-700 text-sm font-bold mb-2" }, "Select Service ", /* @__PURE__ */ import_react18.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react18.default.createElement(
      "select",
      {
        id: "service-select",
        value: selectedService,
        onChange: (e2) => {
          setSelectedService(e2.target.value);
          setSelectedStaff2("");
          setServiceError("");
        },
        className: `shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${serviceError ? "border-red-500" : ""}`,
        required: true
      },
      /* @__PURE__ */ import_react18.default.createElement("option", { value: "" }, "-- Choose a Service --"),
      services.length === 0 ? /* @__PURE__ */ import_react18.default.createElement("option", { value: "", disabled: true }, "Loading services...") : services.map((service) => /* @__PURE__ */ import_react18.default.createElement("option", { key: service.id, value: service.id }, service.name, " ($", service.price?.toFixed(2), ")"))
    ), serviceError && /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, serviceError)), /* @__PURE__ */ import_react18.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react18.default.createElement("label", { htmlFor: "staff-select", className: "block text-gray-700 text-sm font-bold mb-2" }, "Select Staff Member ", /* @__PURE__ */ import_react18.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react18.default.createElement(
      "select",
      {
        id: "staff-select",
        value: selectedStaff,
        onChange: (e2) => {
          setSelectedStaff2(e2.target.value);
          setSelectedDate2("");
          setStaffError("");
        },
        className: `shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${staffError ? "border-red-500" : ""}`,
        required: true,
        disabled: !selectedService || availableStaff.length === 0
      },
      /* @__PURE__ */ import_react18.default.createElement("option", { value: "" }, "-- Choose a Staff Member --"),
      availableStaff.length === 0 && selectedService ? /* @__PURE__ */ import_react18.default.createElement("option", { value: "", disabled: true }, "No staff available for this service") : availableStaff.map((staff) => /* @__PURE__ */ import_react18.default.createElement("option", { key: staff.id, value: staff.id }, staff.name, " (", staff.specialty, ")"))
    ), staffError && /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, staffError)), /* @__PURE__ */ import_react18.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react18.default.createElement("label", { htmlFor: "booking-date", className: "block text-gray-700 text-sm font-bold mb-2" }, "Select Date ", /* @__PURE__ */ import_react18.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react18.default.createElement(
      "input",
      {
        type: "date",
        id: "booking-date",
        value: selectedDate,
        onChange: (e2) => {
          setSelectedDate2(e2.target.value);
          setSelectedTime2("");
          setDateError("");
        },
        min: getMinDate(),
        className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${dateError ? "border-red-500" : ""}`,
        required: true,
        disabled: !selectedStaff
      }
    ), dateError && /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, dateError)), /* @__PURE__ */ import_react18.default.createElement("div", { className: "mb-6" }, /* @__PURE__ */ import_react18.default.createElement("label", { htmlFor: "booking-time", className: "block text-gray-700 text-sm font-bold mb-2" }, "Select Time ", /* @__PURE__ */ import_react18.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react18.default.createElement(
      "select",
      {
        id: "booking-time",
        value: selectedTime,
        onChange: (e2) => {
          setSelectedTime2(e2.target.value);
          setTimeError("");
        },
        className: `shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${timeError ? "border-red-500" : ""}`,
        required: true,
        disabled: availableTimeSlots.length === 0 || !selectedDate
      },
      /* @__PURE__ */ import_react18.default.createElement("option", { value: "" }, "-- Choose a Time --"),
      availableTimeSlots.length > 0 ? availableTimeSlots.map((time) => /* @__PURE__ */ import_react18.default.createElement("option", { key: time, value: time }, time)) : /* @__PURE__ */ import_react18.default.createElement("option", { value: "", disabled: true }, "No slots available for this staff/date")
    ), timeError && /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, timeError)), /* @__PURE__ */ import_react18.default.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105",
        disabled: isBookingService || !selectedService || !selectedStaff || !selectedDate || !selectedTime
      },
      isBookingService ? /* @__PURE__ */ import_react18.default.createElement("svg", { className: "animate-spin h-5 w-5 text-white mx-auto", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react18.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react18.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })) : "Proceed to Payment"
    ))), /* @__PURE__ */ import_react18.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react18.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react18.default.createElement(CalendarCheck_default, { className: "mr-3 text-pink-500" }), " My Bookings"), isFetchingBookings ? /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-center text-gray-500" }, "Loading bookings...") : bookings.length === 0 ? /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-gray-600 text-center" }, "You have no upcoming bookings.") : /* @__PURE__ */ import_react18.default.createElement("div", { className: "divide-y divide-gray-200" }, bookings.map((booking) => {
      const { date, time } = formatDateTime(booking.dateTime);
      return /* @__PURE__ */ import_react18.default.createElement("div", { key: booking.id, className: "py-4" }, /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-lg font-semibold text-gray-800" }, booking.serviceName), /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-gray-600" }, "Staff: ", booking.staffName), /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-gray-600" }, "Date: ", date), /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-gray-600" }, "Time: ", time), /* @__PURE__ */ import_react18.default.createElement("p", { className: `font-semibold ${booking.status === "confirmed" ? "text-green-600" : booking.status === "pending" ? "text-orange-500" : "text-red-600"}` }, "Status: ", booking.status.charAt(0).toUpperCase() + booking.status.slice(1)), /* @__PURE__ */ import_react18.default.createElement(
        "button",
        {
          onClick: () => handleCancelBooking(booking.id),
          className: "mt-2 bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded-lg transition duration-300",
          disabled: isCancellingBooking
        },
        isCancellingBooking && bookingToCancelId === booking.id ? "Cancelling..." : "Cancel Booking"
      ));
    })))), isCancelModalOpen && /* @__PURE__ */ import_react18.default.createElement("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full" }, /* @__PURE__ */ import_react18.default.createElement("h3", { className: "text-xl font-bold mb-4 text-gray-800" }, "Confirm Cancellation"), /* @__PURE__ */ import_react18.default.createElement("p", { className: "text-gray-600 mb-6" }, "Are you sure you want to cancel this booking? This action cannot be undone."), /* @__PURE__ */ import_react18.default.createElement("div", { className: "flex justify-around" }, /* @__PURE__ */ import_react18.default.createElement(
      "button",
      {
        onClick: handleCloseCancelModal,
        className: "bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        disabled: isCancellingBooking
      },
      "No, Keep Booking"
    ), /* @__PURE__ */ import_react18.default.createElement(
      "button",
      {
        onClick: handleConfirmCancel,
        className: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        disabled: isCancellingBooking
      },
      isCancellingBooking ? "Cancelling..." : "Yes, Cancel"
    )))));
  };
  var BookingView_default = BookingView;

  // src/views/OrderConfirmationView.js
  var import_react19 = __toESM(require_react());
  var import_prop_types6 = __toESM(require_prop_types());
  init_lucide_react();
  var OrderConfirmationView = ({ setView: setView2, transactionDetails }) => {
    if (!transactionDetails || !transactionDetails.orderDetails) {
      return /* @__PURE__ */ import_react19.default.createElement("div", { className: "container mx-auto p-8 text-center animate-fade-in" }, /* @__PURE__ */ import_react19.default.createElement("p", { className: "text-gray-600 text-lg mb-4" }, "No order details found. This page is typically displayed after a successful checkout."), /* @__PURE__ */ import_react19.default.createElement(
        "button",
        {
          onClick: () => setView2("home"),
          className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-105 flex items-center justify-center mx-auto"
        },
        /* @__PURE__ */ import_react19.default.createElement(House, { className: "mr-2", size: 20 }),
        " Back to Home"
      ));
    }
    const { orderDetails, transactionId, paymentStatus } = transactionDetails;
    const { orderId, items, amount, shippingInfo, email, paymentGateway } = orderDetails;
    return /* @__PURE__ */ import_react19.default.createElement("div", { className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react19.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto my-8" }, /* @__PURE__ */ import_react19.default.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ import_react19.default.createElement(CircleCheckBig, { className: "w-20 h-20 text-green-500 mx-auto mb-4" }), /* @__PURE__ */ import_react19.default.createElement("h2", { className: "text-4xl font-bold text-gray-800 mb-2" }, "Order Confirmed!"), /* @__PURE__ */ import_react19.default.createElement("p", { className: "text-gray-600 text-lg" }, "Thank you for your purchase!")), /* @__PURE__ */ import_react19.default.createElement("div", { className: "mb-8 p-6 bg-green-50 bg-opacity-70 rounded-md border border-green-200" }, /* @__PURE__ */ import_react19.default.createElement("h3", { className: "text-xl font-semibold text-gray-700 mb-4" }, "Order Details Summary"), /* @__PURE__ */ import_react19.default.createElement("p", { className: "mb-2" }, /* @__PURE__ */ import_react19.default.createElement("strong", null, "Order ID:"), " ", /* @__PURE__ */ import_react19.default.createElement("span", { className: "font-mono text-purple-700" }, orderId)), /* @__PURE__ */ import_react19.default.createElement("p", { className: "mb-2" }, /* @__PURE__ */ import_react19.default.createElement("strong", null, "Total Amount:"), " ", /* @__PURE__ */ import_react19.default.createElement("span", { className: "font-bold text-pink-600" }, "$", amount.toFixed(2))), /* @__PURE__ */ import_react19.default.createElement("p", { className: "mb-2" }, /* @__PURE__ */ import_react19.default.createElement("strong", null, "Payment Status:"), " ", /* @__PURE__ */ import_react19.default.createElement("span", { className: "capitalize text-green-700" }, paymentStatus)), /* @__PURE__ */ import_react19.default.createElement("p", { className: "mb-2" }, /* @__PURE__ */ import_react19.default.createElement("strong", null, "Payment Method:"), " ", /* @__PURE__ */ import_react19.default.createElement("span", { className: "capitalize" }, paymentGateway)), email && /* @__PURE__ */ import_react19.default.createElement("p", null, /* @__PURE__ */ import_react19.default.createElement("strong", null, "Confirmation sent to:"), " ", email)), /* @__PURE__ */ import_react19.default.createElement("div", { className: "mb-8 p-6 bg-blue-50 bg-opacity-70 rounded-md border border-blue-200" }, /* @__PURE__ */ import_react19.default.createElement("h3", { className: "text-xl font-semibold text-gray-700 mb-4" }, "Shipping Information"), /* @__PURE__ */ import_react19.default.createElement("p", null, shippingInfo.fullName), /* @__PURE__ */ import_react19.default.createElement("p", null, shippingInfo.addressLine1), shippingInfo.addressLine2 && /* @__PURE__ */ import_react19.default.createElement("p", null, shippingInfo.addressLine2), /* @__PURE__ */ import_react19.default.createElement("p", null, shippingInfo.city, ", ", shippingInfo.state, " ", shippingInfo.zipCode), /* @__PURE__ */ import_react19.default.createElement("p", null, shippingInfo.country)), /* @__PURE__ */ import_react19.default.createElement("div", { className: "mb-8 p-6 bg-gray-50 bg-opacity-70 rounded-md border border-gray-200" }, /* @__PURE__ */ import_react19.default.createElement("h3", { className: "text-xl font-semibold text-gray-700 mb-4" }, "Items Ordered"), /* @__PURE__ */ import_react19.default.createElement("ul", { className: "list-disc list-inside space-y-2" }, items.map((item) => /* @__PURE__ */ import_react19.default.createElement("li", { key: item.id, className: "text-gray-700" }, item.name, " (x", item.quantity, ") - $", item.price.toFixed(2), " each")))), /* @__PURE__ */ import_react19.default.createElement("div", { className: "text-center" }, /* @__PURE__ */ import_react19.default.createElement(
      "button",
      {
        onClick: () => setView2("products"),
        className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-105 flex items-center justify-center mx-auto"
      },
      /* @__PURE__ */ import_react19.default.createElement(House, { className: "mr-2", size: 20 }),
      " Continue Shopping"
    ), /* @__PURE__ */ import_react19.default.createElement("p", { className: "text-gray-500 text-sm mt-4" }, "A detailed receipt has been sent to your email address."))));
  };
  OrderConfirmationView.propTypes = {
    setView: import_prop_types6.default.func.isRequired,
    transactionDetails: import_prop_types6.default.shape({
      transactionId: import_prop_types6.default.string.isRequired,
      paymentStatus: import_prop_types6.default.string.isRequired,
      orderDetails: import_prop_types6.default.shape({
        orderId: import_prop_types6.default.string.isRequired,
        items: import_prop_types6.default.arrayOf(import_prop_types6.default.shape({
          id: import_prop_types6.default.string,
          name: import_prop_types6.default.string.isRequired,
          quantity: import_prop_types6.default.number.isRequired,
          price: import_prop_types6.default.number.isRequired
        })).isRequired,
        amount: import_prop_types6.default.number.isRequired,
        shippingInfo: import_prop_types6.default.shape({
          fullName: import_prop_types6.default.string.isRequired,
          addressLine1: import_prop_types6.default.string.isRequired,
          addressLine2: import_prop_types6.default.string,
          city: import_prop_types6.default.string.isRequired,
          state: import_prop_types6.default.string.isRequired,
          zipCode: import_prop_types6.default.string.isRequired,
          country: import_prop_types6.default.string.isRequired
        }).isRequired,
        paymentGateway: import_prop_types6.default.string.isRequired,
        email: import_prop_types6.default.string
      }).isRequired
    })
  };

  // src/components/CartView.js
  var import_react22 = __toESM(require_react());
  var import_prop_types7 = __toESM(require_prop_types());
  init_lucide_react();

  // node_modules/react-hot-toast/dist/index.mjs
  var import_react20 = __toESM(require_react(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var y = __toESM(require_react(), 1);

  // node_modules/goober/dist/goober.modern.js
  var e = { data: "" };
  var t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e;
  var l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
  var a = /\/\*[^]*?\*\/|  +/g;
  var n = /\n+/g;
  var o = (e2, t2) => {
    let r = "", l2 = "", a2 = "";
    for (let n3 in e2) {
      let c2 = e2[n3];
      "@" == n3[0] ? "i" == n3[1] ? r = n3 + " " + c2 + ";" : l2 += "f" == n3[1] ? o(c2, n3) : n3 + "{" + o(c2, "k" == n3[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n3.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n3) : null != c2 && (n3 = /^--/.test(n3) ? n3 : n3.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n3, c2) : n3 + ":" + c2 + ";");
    }
    return r + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
  };
  var c = {};
  var s = (e2) => {
    if ("object" == typeof e2) {
      let t2 = "";
      for (let r in e2) t2 += r + s(e2[r]);
      return t2;
    }
    return e2;
  };
  var i = (e2, t2, r, i2, p2) => {
    let u2 = s(e2), d2 = c[u2] || (c[u2] = ((e3) => {
      let t3 = 0, r2 = 11;
      for (; t3 < e3.length; ) r2 = 101 * r2 + e3.charCodeAt(t3++) >>> 0;
      return "go" + r2;
    })(u2));
    if (!c[d2]) {
      let t3 = u2 !== e2 ? e2 : ((e3) => {
        let t4, r2, o2 = [{}];
        for (; t4 = l.exec(e3.replace(a, "")); ) t4[4] ? o2.shift() : t4[3] ? (r2 = t4[3].replace(n, " ").trim(), o2.unshift(o2[0][r2] = o2[0][r2] || {})) : o2[0][t4[1]] = t4[2].replace(n, " ").trim();
        return o2[0];
      })(e2);
      c[d2] = o(p2 ? { ["@keyframes " + d2]: t3 } : t3, r ? "" : "." + d2);
    }
    let f3 = r && c.g ? c.g : null;
    return r && (c.g = c[d2]), ((e3, t3, r2, l2) => {
      l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r2 ? e3 + t3.data : t3.data + e3);
    })(c[d2], t2, i2, f3), d2;
  };
  var p = (e2, t2, r) => e2.reduce((e3, l2, a2) => {
    let n3 = t2[a2];
    if (n3 && n3.call) {
      let e4 = n3(r), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
      n3 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
    }
    return e3 + l2 + (null == n3 ? "" : n3);
  }, "");
  function u(e2) {
    let r = this || {}, l2 = e2.call ? e2(r.p) : e2;
    return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r.p) : t2), {}) : l2, t(r.target), r.g, r.o, r.k);
  }
  var d;
  var f;
  var g;
  var b = u.bind({ g: 1 });
  var h = u.bind({ k: 1 });
  function m(e2, t2, r, l2) {
    o.p = t2, d = e2, f = r, g = l2;
  }
  function j(e2, t2) {
    let r = this || {};
    return function() {
      let l2 = arguments;
      function a2(n3, o2) {
        let c2 = Object.assign({}, n3), s2 = c2.className || a2.className;
        r.p = Object.assign({ theme: f && f() }, c2), r.o = / *go\d+/.test(s2), c2.className = u.apply(r, l2) + (s2 ? " " + s2 : ""), t2 && (c2.ref = o2);
        let i2 = e2;
        return e2[0] && (i2 = c2.as || e2, delete c2.as), g && i2[0] && g(c2), d(i2, c2);
      }
      return t2 ? t2(a2) : a2;
    };
  }

  // node_modules/react-hot-toast/dist/index.mjs
  var b2 = __toESM(require_react(), 1);
  var x = __toESM(require_react(), 1);
  var Z = (e2) => typeof e2 == "function";
  var h2 = (e2, t2) => Z(e2) ? e2(t2) : e2;
  var W = /* @__PURE__ */ (() => {
    let e2 = 0;
    return () => (++e2).toString();
  })();
  var E = /* @__PURE__ */ (() => {
    let e2;
    return () => {
      if (e2 === void 0 && typeof window < "u") {
        let t2 = matchMedia("(prefers-reduced-motion: reduce)");
        e2 = !t2 || t2.matches;
      }
      return e2;
    };
  })();
  var re = 20;
  var k = "default";
  var H = (e2, t2) => {
    let { toastLimit: o2 } = e2.settings;
    switch (t2.type) {
      case 0:
        return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, o2) };
      case 1:
        return { ...e2, toasts: e2.toasts.map((r) => r.id === t2.toast.id ? { ...r, ...t2.toast } : r) };
      case 2:
        let { toast: s2 } = t2;
        return H(e2, { type: e2.toasts.find((r) => r.id === s2.id) ? 1 : 0, toast: s2 });
      case 3:
        let { toastId: a2 } = t2;
        return { ...e2, toasts: e2.toasts.map((r) => r.id === a2 || a2 === void 0 ? { ...r, dismissed: true, visible: false } : r) };
      case 4:
        return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((r) => r.id !== t2.toastId) };
      case 5:
        return { ...e2, pausedAt: t2.time };
      case 6:
        let i2 = t2.time - (e2.pausedAt || 0);
        return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((r) => ({ ...r, pauseDuration: r.pauseDuration + i2 })) };
    }
  };
  var v = [];
  var j2 = { toasts: [], pausedAt: void 0, settings: { toastLimit: re } };
  var f2 = {};
  var Y = (e2, t2 = k) => {
    f2[t2] = H(f2[t2] || j2, e2), v.forEach(([o2, s2]) => {
      o2 === t2 && s2(f2[t2]);
    });
  };
  var _ = (e2) => Object.keys(f2).forEach((t2) => Y(e2, t2));
  var Q = (e2) => Object.keys(f2).find((t2) => f2[t2].toasts.some((o2) => o2.id === e2));
  var S = (e2 = k) => (t2) => {
    Y(t2, e2);
  };
  var se = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 };
  var ie = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, dismissed: false, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || W() });
  var P = (e2) => (t2, o2) => {
    let s2 = ie(t2, e2, o2);
    return S(s2.toasterId || Q(s2.id))({ type: 2, toast: s2 }), s2.id;
  };
  var n2 = (e2, t2) => P("blank")(e2, t2);
  n2.error = P("error");
  n2.success = P("success");
  n2.loading = P("loading");
  n2.custom = P("custom");
  n2.dismiss = (e2, t2) => {
    let o2 = { type: 3, toastId: e2 };
    t2 ? S(t2)(o2) : _(o2);
  };
  n2.dismissAll = (e2) => n2.dismiss(void 0, e2);
  n2.remove = (e2, t2) => {
    let o2 = { type: 4, toastId: e2 };
    t2 ? S(t2)(o2) : _(o2);
  };
  n2.removeAll = (e2) => n2.remove(void 0, e2);
  n2.promise = (e2, t2, o2) => {
    let s2 = n2.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
    return typeof e2 == "function" && (e2 = e2()), e2.then((a2) => {
      let i2 = t2.success ? h2(t2.success, a2) : void 0;
      return i2 ? n2.success(i2, { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }) : n2.dismiss(s2), a2;
    }).catch((a2) => {
      let i2 = t2.error ? h2(t2.error, a2) : void 0;
      i2 ? n2.error(i2, { id: s2, ...o2, ...o2 == null ? void 0 : o2.error }) : n2.dismiss(s2);
    }), e2;
  };
  var de = h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`;
  var me = h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
  var le = h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;
  var C = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
  var Te = h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  var F = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${Te} 1s linear infinite;
`;
  var ge = h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`;
  var he = h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`;
  var L = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
  var be = j("div")`
  position: absolute;
`;
  var Se = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;
  var Ae = h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
  var Pe = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ae} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`;
  var $ = ({ toast: e2 }) => {
    let { icon: t2, type: o2, iconTheme: s2 } = e2;
    return t2 !== void 0 ? typeof t2 == "string" ? b2.createElement(Pe, null, t2) : t2 : o2 === "blank" ? null : b2.createElement(Se, null, b2.createElement(F, { ...s2 }), o2 !== "loading" && b2.createElement(be, null, o2 === "error" ? b2.createElement(C, { ...s2 }) : b2.createElement(L, { ...s2 })));
  };
  var Re = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;
  var Ee = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`;
  var ve = "0%{opacity:0;} 100%{opacity:1;}";
  var De = "0%{opacity:1;} 100%{opacity:0;}";
  var Oe = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`;
  var Ie = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;
  var ke = (e2, t2) => {
    let s2 = e2.includes("top") ? 1 : -1, [a2, i2] = E() ? [ve, De] : [Re(s2), Ee(s2)];
    return { animation: t2 ? `${h(a2)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h(i2)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
  };
  var N = y.memo(({ toast: e2, position: t2, style: o2, children: s2 }) => {
    let a2 = e2.height ? ke(e2.position || t2 || "top-center", e2.visible) : { opacity: 0 }, i2 = y.createElement($, { toast: e2 }), r = y.createElement(Ie, { ...e2.ariaProps }, h2(e2.message, e2));
    return y.createElement(Oe, { className: e2.className, style: { ...a2, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: i2, message: r }) : y.createElement(y.Fragment, null, i2, r));
  });
  m(x.createElement);
  var Ce = u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
  var zt = n2;

  // src/components/CartView.js
  var CartView = ({ setView: setView2 }) => {
    const { cartItems, updateCartItemQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
    const [isLoading, setIsLoading] = (0, import_react22.useState)(false);
    const handleCheckout = async () => {
      setIsLoading(true);
      try {
        const userToken = "your-auth-token";
        const checkoutData = {
          items: cartItems.map((item) => ({ id: item.id, quantity: item.quantity, price: item.price })),
          total: getTotalPrice()
        };
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Pass the user token for authentication and user-specific logic
            "Authorization": `Bearer ${userToken}`
          },
          body: JSON.stringify(checkoutData)
        });
        const responseData = await response.json();
        if (!response.ok) {
          console.error("Checkout API Error:", responseData);
          throw new Error(responseData.message || "An unknown error occurred during checkout.");
        }
        console.log("Checkout API success:", responseData);
        zt.success("Proceeding to checkout...");
        setView2("checkout");
      } catch (error) {
        console.error("Checkout failed:", error);
        zt.error(`Checkout failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    if (cartItems.length === 0) {
      return /* @__PURE__ */ import_react22.default.createElement("div", { className: "container mx-auto p-8 text-center animate-fade-in" }, /* @__PURE__ */ import_react22.default.createElement(ShoppingCart, { className: "w-24 h-24 text-gray-400 mx-auto mb-6" }), /* @__PURE__ */ import_react22.default.createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-4" }, "Your Cart is Empty"), /* @__PURE__ */ import_react22.default.createElement("p", { className: "text-gray-600 mb-6" }, "Looks like you haven't added anything to your cart yet."), /* @__PURE__ */ import_react22.default.createElement(
        "button",
        {
          onClick: () => setView2("products"),
          className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        },
        "Start Shopping"
      ));
    }
    return /* @__PURE__ */ import_react22.default.createElement("div", { className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react22.default.createElement("h2", { className: "text-4xl font-bold text-center text-gray-800 mb-8" }, "Your Shopping Cart"), /* @__PURE__ */ import_react22.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: "divide-y divide-gray-200" }, cartItems.map((item) => /* @__PURE__ */ import_react22.default.createElement("div", { key: item.id, className: "flex items-center py-4" }, /* @__PURE__ */ import_react22.default.createElement(
      "img",
      {
        src: item.imageUrl || `https://placehold.co/100x100/E0FFFF/333333?text=${item.name.replace(/\s/g, "+")}`,
        alt: item.name,
        onError: (e2) => {
          e2.target.onerror = null;
          e2.target.src = `https://placehold.co/100x100/E0FFFF/333333?text=${item.name.replace(/\s/g, "+")}`;
        },
        className: "w-24 h-24 object-cover rounded-lg mr-6 shadow-md"
      }
    ), /* @__PURE__ */ import_react22.default.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ import_react22.default.createElement("h3", { className: "text-xl font-semibold text-gray-800" }, item.name), /* @__PURE__ */ import_react22.default.createElement("p", { className: "text-gray-600" }, "$", item.price?.toFixed(2))), /* @__PURE__ */ import_react22.default.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        onClick: () => updateCartItemQuantity(item.id, item.quantity - 1),
        disabled: item.quantity <= 1,
        className: "bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      },
      /* @__PURE__ */ import_react22.default.createElement(CircleMinus, { className: "w-5 h-5" })
    ), /* @__PURE__ */ import_react22.default.createElement("span", { className: "text-lg font-semibold text-gray-800" }, item.quantity), /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        onClick: () => updateCartItemQuantity(item.id, item.quantity + 1),
        className: "bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-200"
      },
      /* @__PURE__ */ import_react22.default.createElement(CirclePlus, { className: "w-5 h-5" })
    )), /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        onClick: () => removeFromCart(item.id),
        className: "ml-8 text-red-500 hover:text-red-700 transition duration-200"
      },
      /* @__PURE__ */ import_react22.default.createElement(CircleX, { className: "w-6 h-6" })
    )))), /* @__PURE__ */ import_react22.default.createElement("div", { className: "flex justify-between items-center border-t border-gray-200 pt-6 mt-6" }, /* @__PURE__ */ import_react22.default.createElement("span", { className: "text-2xl font-bold text-gray-800" }, "Total:"), /* @__PURE__ */ import_react22.default.createElement("span", { className: "text-3xl font-bold text-pink-600" }, "$", getTotalPrice()?.toFixed(2))), /* @__PURE__ */ import_react22.default.createElement("div", { className: "mt-8 flex justify-end space-x-4" }, /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        onClick: clearCart,
        className: "bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-300"
      },
      "Clear Cart"
    ), /* @__PURE__ */ import_react22.default.createElement(
      "button",
      {
        onClick: handleCheckout,
        disabled: isLoading,
        className: `bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`
      },
      isLoading ? "Processing..." : "Proceed to Checkout"
    ))));
  };
  CartView.propTypes = {
    setView: import_prop_types7.default.func.isRequired
  };
  var CartView_default = CartView;

  // src/components/Checkout.js
  var import_react24 = __toESM(require_react());
  init_AuthContext();
  init_lucide_react();

  // node_modules/@stripe/stripe-js/dist/index.mjs
  var RELEASE_TRAIN = "basil";
  var runtimeVersionToUrlVersion = function runtimeVersionToUrlVersion2(version) {
    return version === 3 ? "v3" : version;
  };
  var ORIGIN = "https://js.stripe.com";
  var STRIPE_JS_URL = "".concat(ORIGIN, "/").concat(RELEASE_TRAIN, "/stripe.js");
  var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
  var STRIPE_JS_URL_REGEX = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
  var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
  var isStripeJSURL = function isStripeJSURL2(url) {
    return V3_URL_REGEX.test(url) || STRIPE_JS_URL_REGEX.test(url);
  };
  var findScript = function findScript2() {
    var scripts = document.querySelectorAll('script[src^="'.concat(ORIGIN, '"]'));
    for (var i2 = 0; i2 < scripts.length; i2++) {
      var script = scripts[i2];
      if (!isStripeJSURL(script.src)) {
        continue;
      }
      return script;
    }
    return null;
  };
  var injectScript = function injectScript2(params) {
    var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
    var script = document.createElement("script");
    script.src = "".concat(STRIPE_JS_URL).concat(queryString);
    var headOrBody = document.head || document.body;
    if (!headOrBody) {
      throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    }
    headOrBody.appendChild(script);
    return script;
  };
  var registerWrapper = function registerWrapper2(stripe, startTime) {
    if (!stripe || !stripe._registerWrapper) {
      return;
    }
    stripe._registerWrapper({
      name: "stripe-js",
      version: "7.8.0",
      startTime
    });
  };
  var stripePromise$1 = null;
  var onErrorListener = null;
  var onLoadListener = null;
  var onError = function onError2(reject) {
    return function(cause) {
      reject(new Error("Failed to load Stripe.js", {
        cause
      }));
    };
  };
  var onLoad = function onLoad2(resolve, reject) {
    return function() {
      if (window.Stripe) {
        resolve(window.Stripe);
      } else {
        reject(new Error("Stripe.js not available"));
      }
    };
  };
  var loadScript = function loadScript2(params) {
    if (stripePromise$1 !== null) {
      return stripePromise$1;
    }
    stripePromise$1 = new Promise(function(resolve, reject) {
      if (typeof window === "undefined" || typeof document === "undefined") {
        resolve(null);
        return;
      }
      if (window.Stripe && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      }
      if (window.Stripe) {
        resolve(window.Stripe);
        return;
      }
      try {
        var script = findScript();
        if (script && params) {
          console.warn(EXISTING_SCRIPT_MESSAGE);
        } else if (!script) {
          script = injectScript(params);
        } else if (script && onLoadListener !== null && onErrorListener !== null) {
          var _script$parentNode;
          script.removeEventListener("load", onLoadListener);
          script.removeEventListener("error", onErrorListener);
          (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
          script = injectScript(params);
        }
        onLoadListener = onLoad(resolve, reject);
        onErrorListener = onError(reject);
        script.addEventListener("load", onLoadListener);
        script.addEventListener("error", onErrorListener);
      } catch (error) {
        reject(error);
        return;
      }
    });
    return stripePromise$1["catch"](function(error) {
      stripePromise$1 = null;
      return Promise.reject(error);
    });
  };
  var initStripe = function initStripe2(maybeStripe, args, startTime) {
    if (maybeStripe === null) {
      return null;
    }
    var pk = args[0];
    var isTestKey = pk.match(/^pk_test/);
    var version = runtimeVersionToUrlVersion(maybeStripe.version);
    var expectedVersion = RELEASE_TRAIN;
    if (isTestKey && version !== expectedVersion) {
      console.warn("Stripe.js@".concat(version, " was loaded on the page, but @stripe/stripe-js@").concat("7.8.0", " expected Stripe.js@").concat(expectedVersion, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
    }
    var stripe = maybeStripe.apply(void 0, args);
    registerWrapper(stripe, startTime);
    return stripe;
  };
  var stripePromise;
  var loadCalled = false;
  var getStripePromise = function getStripePromise2() {
    if (stripePromise) {
      return stripePromise;
    }
    stripePromise = loadScript(null)["catch"](function(error) {
      stripePromise = null;
      return Promise.reject(error);
    });
    return stripePromise;
  };
  Promise.resolve().then(function() {
    return getStripePromise();
  })["catch"](function(error) {
    if (!loadCalled) {
      console.warn(error);
    }
  });
  var loadStripe = function loadStripe2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    loadCalled = true;
    var startTime = Date.now();
    return getStripePromise().then(function(maybeStripe) {
      return initStripe(maybeStripe, args, startTime);
    });
  };

  // src/components/Checkout.js
  var import_react_stripe_js = __toESM(require_react_stripe_umd());

  // node_modules/@paypal/react-paypal-js/dist/esm/react-paypal-js.js
  var import_react23 = __toESM(require_react());
  var SCRIPT_LOADING_STATE;
  (function(SCRIPT_LOADING_STATE2) {
    SCRIPT_LOADING_STATE2["INITIAL"] = "initial";
    SCRIPT_LOADING_STATE2["PENDING"] = "pending";
    SCRIPT_LOADING_STATE2["REJECTED"] = "rejected";
    SCRIPT_LOADING_STATE2["RESOLVED"] = "resolved";
  })(SCRIPT_LOADING_STATE || (SCRIPT_LOADING_STATE = {}));
  var DISPATCH_ACTION;
  (function(DISPATCH_ACTION2) {
    DISPATCH_ACTION2["LOADING_STATUS"] = "setLoadingStatus";
    DISPATCH_ACTION2["RESET_OPTIONS"] = "resetOptions";
    DISPATCH_ACTION2["SET_BRAINTREE_INSTANCE"] = "braintreeInstance";
  })(DISPATCH_ACTION || (DISPATCH_ACTION = {}));
  var PAYPAL_HOSTED_FIELDS_TYPES;
  (function(PAYPAL_HOSTED_FIELDS_TYPES2) {
    PAYPAL_HOSTED_FIELDS_TYPES2["NUMBER"] = "number";
    PAYPAL_HOSTED_FIELDS_TYPES2["CVV"] = "cvv";
    PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_DATE"] = "expirationDate";
    PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_MONTH"] = "expirationMonth";
    PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_YEAR"] = "expirationYear";
    PAYPAL_HOSTED_FIELDS_TYPES2["POSTAL_CODE"] = "postalCode";
  })(PAYPAL_HOSTED_FIELDS_TYPES || (PAYPAL_HOSTED_FIELDS_TYPES = {}));
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  function __rest$1(s2, e2) {
    var t2 = {};
    for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var SCRIPT_ID = "data-react-paypal-script-id";
  var SDK_SETTINGS = {
    DATA_CLIENT_TOKEN: "dataClientToken",
    DATA_JS_SDK_LIBRARY: "dataJsSdkLibrary",
    DATA_LIBRARY_VALUE: "react-paypal-js",
    DATA_NAMESPACE: "dataNamespace",
    DATA_SDK_INTEGRATION_SOURCE: "dataSdkIntegrationSource",
    DATA_USER_ID_TOKEN: "dataUserIdToken"
  };
  var LOAD_SCRIPT_ERROR = "Failed to load the PayPal JS SDK script.";
  var braintreeVersion = "3.117.0";
  var BRAINTREE_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/client.min.js");
  var BRAINTREE_PAYPAL_CHECKOUT_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/paypal-checkout.min.js");
  var DEFAULT_PAYPAL_NAMESPACE = "paypal";
  var SCRIPT_PROVIDER_REDUCER_ERROR = "usePayPalScriptReducer must be used within a PayPalScriptProvider";
  function getPayPalWindowNamespace$1(namespace) {
    if (namespace === void 0) {
      namespace = DEFAULT_PAYPAL_NAMESPACE;
    }
    return window[namespace];
  }
  function hashStr(str) {
    var hash = "";
    for (var i2 = 0; i2 < str.length; i2++) {
      var total = str[i2].charCodeAt(0) * i2;
      if (str[i2 + 1]) {
        total += str[i2 + 1].charCodeAt(0) * (i2 - 1);
      }
      hash += String.fromCharCode(97 + Math.abs(total) % 26);
    }
    return hash;
  }
  function generateErrorMessage(_a2) {
    var reactComponentName = _a2.reactComponentName, sdkComponentKey = _a2.sdkComponentKey, _b = _a2.sdkRequestedComponents, sdkRequestedComponents = _b === void 0 ? "" : _b, _c = _a2.sdkDataNamespace, sdkDataNamespace = _c === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _c;
    var requiredOptionCapitalized = sdkComponentKey.charAt(0).toUpperCase().concat(sdkComponentKey.substring(1));
    var errorMessage = "Unable to render <".concat(reactComponentName, " /> because window.").concat(sdkDataNamespace, ".").concat(requiredOptionCapitalized, " is undefined.");
    var requestedComponents = typeof sdkRequestedComponents === "string" ? sdkRequestedComponents : sdkRequestedComponents.join(",");
    if (!requestedComponents.includes(sdkComponentKey)) {
      var expectedComponents = [requestedComponents, sdkComponentKey].filter(Boolean).join();
      errorMessage += "\nTo fix the issue, add '".concat(sdkComponentKey, "' to the list of components passed to the parent PayPalScriptProvider:") + "\n`<PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>`.");
    }
    return errorMessage;
  }
  function getScriptID(options) {
    var _a2 = options, _b = SCRIPT_ID;
    _a2[_b];
    var paypalScriptOptions = __rest$1(_a2, [_b + ""]);
    return "react-paypal-js-".concat(hashStr(JSON.stringify(paypalScriptOptions)));
  }
  function destroySDKScript(reactPayPalScriptID) {
    var scriptNode = self.document.querySelector("script[".concat(SCRIPT_ID, '="').concat(reactPayPalScriptID, '"]'));
    if (scriptNode === null || scriptNode === void 0 ? void 0 : scriptNode.parentNode) {
      scriptNode.parentNode.removeChild(scriptNode);
    }
  }
  function scriptReducer(state, action) {
    var _a2, _b;
    switch (action.type) {
      case DISPATCH_ACTION.LOADING_STATUS:
        if (typeof action.value === "object") {
          return __assign(__assign({}, state), {
            loadingStatus: action.value.state,
            loadingStatusErrorMessage: action.value.message
          });
        }
        return __assign(__assign({}, state), {
          loadingStatus: action.value
        });
      case DISPATCH_ACTION.RESET_OPTIONS:
        destroySDKScript(state.options[SCRIPT_ID]);
        return __assign(__assign({}, state), {
          loadingStatus: SCRIPT_LOADING_STATE.PENDING,
          options: __assign(__assign((_a2 = {}, _a2[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _a2), action.value), (_b = {}, _b[SCRIPT_ID] = "".concat(getScriptID(action.value)), _b))
        });
      case DISPATCH_ACTION.SET_BRAINTREE_INSTANCE:
        return __assign(__assign({}, state), {
          braintreePayPalCheckoutInstance: action.value
        });
      default: {
        return state;
      }
    }
  }
  var ScriptContext = (0, import_react23.createContext)(null);
  function validateReducer(scriptContext) {
    if (typeof (scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.dispatch) === "function" && scriptContext.dispatch.length !== 0) {
      return scriptContext;
    }
    throw new Error(SCRIPT_PROVIDER_REDUCER_ERROR);
  }
  function usePayPalScriptReducer() {
    var scriptContext = validateReducer((0, import_react23.useContext)(ScriptContext));
    var derivedStatusContext = __assign(__assign({}, scriptContext), {
      isInitial: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.INITIAL,
      isPending: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.PENDING,
      isResolved: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.RESOLVED,
      isRejected: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.REJECTED
    });
    return [derivedStatusContext, scriptContext.dispatch];
  }
  var PayPalHostedFieldsContext = (0, import_react23.createContext)({});
  function useProxyProps(props) {
    var proxyRef = (0, import_react23.useRef)(new Proxy({}, {
      get: function(target, prop, receiver) {
        if (typeof target[prop] === "function") {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return target[prop].apply(target, args);
          };
        }
        return Reflect.get(target, prop, receiver);
      }
    }));
    proxyRef.current = Object.assign(proxyRef.current, props);
    return proxyRef.current;
  }
  var PayPalButtons = function(_a2) {
    var _b;
    var _c = _a2.className, className = _c === void 0 ? "" : _c, _d = _a2.disabled, disabled = _d === void 0 ? false : _d, children = _a2.children, _e = _a2.forceReRender, forceReRender = _e === void 0 ? [] : _e, buttonProps = __rest$1(_a2, ["className", "disabled", "children", "forceReRender"]);
    var isDisabledStyle = disabled ? {
      opacity: 0.38
    } : {};
    var classNames = "".concat(className, " ").concat(disabled ? "paypal-buttons-disabled" : "").trim();
    var buttonsContainerRef = (0, import_react23.useRef)(null);
    var buttons = (0, import_react23.useRef)(null);
    var proxyProps = useProxyProps(buttonProps);
    var _f = usePayPalScriptReducer()[0], isResolved = _f.isResolved, options = _f.options;
    var _g = (0, import_react23.useState)(null), initActions = _g[0], setInitActions = _g[1];
    var _h = (0, import_react23.useState)(true), isEligible = _h[0], setIsEligible = _h[1];
    var _j = (0, import_react23.useState)(null), setErrorState = _j[1];
    function closeButtonsComponent() {
      if (buttons.current !== null) {
        buttons.current.close().catch(function() {
        });
      }
    }
    if ((_b = buttons.current) === null || _b === void 0 ? void 0 : _b.updateProps) {
      buttons.current.updateProps({
        message: buttonProps.message
      });
    }
    (0, import_react23.useEffect)(function() {
      if (isResolved === false) {
        return closeButtonsComponent;
      }
      var paypalWindowNamespace = getPayPalWindowNamespace$1(options.dataNamespace);
      if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Buttons === void 0) {
        setErrorState(function() {
          throw new Error(generateErrorMessage({
            reactComponentName: PayPalButtons.displayName,
            sdkComponentKey: "buttons",
            sdkRequestedComponents: options.components,
            sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
          }));
        });
        return closeButtonsComponent;
      }
      var decoratedOnInit = function(data2, actions) {
        setInitActions(actions);
        if (typeof buttonProps.onInit === "function") {
          buttonProps.onInit(data2, actions);
        }
      };
      try {
        buttons.current = paypalWindowNamespace.Buttons(__assign(__assign({}, proxyProps), {
          onInit: decoratedOnInit
        }));
      } catch (err) {
        return setErrorState(function() {
          throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(err));
        });
      }
      if (buttons.current.isEligible() === false) {
        setIsEligible(false);
        return closeButtonsComponent;
      }
      if (!buttonsContainerRef.current) {
        return closeButtonsComponent;
      }
      buttons.current.render(buttonsContainerRef.current).catch(function(err) {
        if (buttonsContainerRef.current === null || buttonsContainerRef.current.children.length === 0) {
          return;
        }
        setErrorState(function() {
          throw new Error("Failed to render <PayPalButtons /> component. ".concat(err));
        });
      });
      return closeButtonsComponent;
    }, __spreadArray(__spreadArray([isResolved], forceReRender, true), [buttonProps.fundingSource], false));
    (0, import_react23.useEffect)(function() {
      if (initActions === null) {
        return;
      }
      if (disabled === true) {
        initActions.disable().catch(function() {
        });
      } else {
        initActions.enable().catch(function() {
        });
      }
    }, [disabled, initActions]);
    return import_react23.default.createElement(import_react23.default.Fragment, null, isEligible ? import_react23.default.createElement("div", {
      ref: buttonsContainerRef,
      style: isDisabledStyle,
      className: classNames
    }) : children);
  };
  PayPalButtons.displayName = "PayPalButtons";
  function __rest(s2, e2) {
    var t2 = {};
    for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2])) t2[p2[i2]] = s2[p2[i2]];
    }
    return t2;
  }
  function findScript3(url, attributes) {
    var currentScript = document.querySelector('script[src="'.concat(url, '"]'));
    if (currentScript === null) return null;
    var nextScript = createScriptElement(url, attributes);
    var currentScriptClone = currentScript.cloneNode();
    delete currentScriptClone.dataset.uidAuto;
    if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
      return null;
    }
    var isExactMatch = true;
    Object.keys(currentScriptClone.dataset).forEach(function(key) {
      if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
        isExactMatch = false;
      }
    });
    return isExactMatch ? currentScript : null;
  }
  function insertScriptElement(_a2) {
    var url = _a2.url, attributes = _a2.attributes, onSuccess = _a2.onSuccess, onError3 = _a2.onError;
    var newScript = createScriptElement(url, attributes);
    newScript.onerror = onError3;
    newScript.onload = onSuccess;
    document.head.insertBefore(newScript, document.head.firstElementChild);
  }
  function processOptions(_a2) {
    var customSdkBaseUrl = _a2.sdkBaseUrl, environment = _a2.environment, options = __rest(_a2, ["sdkBaseUrl", "environment"]);
    var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
    var optionsWithStringIndex = options;
    var _b = Object.keys(optionsWithStringIndex).filter(function(key) {
      return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
    }).reduce(function(accumulator, key) {
      var value = optionsWithStringIndex[key].toString();
      key = camelCaseToKebabCase(key);
      if (key.substring(0, 4) === "data" || key === "crossorigin") {
        accumulator.attributes[key] = value;
      } else {
        accumulator.queryParams[key] = value;
      }
      return accumulator;
    }, {
      queryParams: {},
      attributes: {}
    }), queryParams = _b.queryParams, attributes = _b.attributes;
    if (queryParams["merchant-id"] && queryParams["merchant-id"].indexOf(",") !== -1) {
      attributes["data-merchant-id"] = queryParams["merchant-id"];
      queryParams["merchant-id"] = "*";
    }
    return {
      url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
      attributes
    };
  }
  function camelCaseToKebabCase(str) {
    var replacer = function(match, indexOfMatch) {
      return (indexOfMatch ? "-" : "") + match.toLowerCase();
    };
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
  }
  function objectToQueryString(params) {
    var queryString = "";
    Object.keys(params).forEach(function(key) {
      if (queryString.length !== 0) queryString += "&";
      queryString += key + "=" + params[key];
    });
    return queryString;
  }
  function processSdkBaseUrl(environment) {
    return environment === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
  }
  function createScriptElement(url, attributes) {
    if (attributes === void 0) {
      attributes = {};
    }
    var newScript = document.createElement("script");
    newScript.src = url;
    Object.keys(attributes).forEach(function(key) {
      newScript.setAttribute(key, attributes[key]);
      if (key === "data-csp-nonce") {
        newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
      }
    });
    return newScript;
  }
  function loadScript3(options, PromisePonyfill) {
    if (PromisePonyfill === void 0) {
      PromisePonyfill = Promise;
    }
    validateArguments(options, PromisePonyfill);
    if (typeof document === "undefined") return PromisePonyfill.resolve(null);
    var _a2 = processOptions(options), url = _a2.url, attributes = _a2.attributes;
    var namespace = attributes["data-namespace"] || "paypal";
    var existingWindowNamespace = getPayPalWindowNamespace(namespace);
    if (!attributes["data-js-sdk-library"]) {
      attributes["data-js-sdk-library"] = "paypal-js";
    }
    if (findScript3(url, attributes) && existingWindowNamespace) {
      return PromisePonyfill.resolve(existingWindowNamespace);
    }
    return loadCustomScript({
      url,
      attributes
    }, PromisePonyfill).then(function() {
      var newWindowNamespace = getPayPalWindowNamespace(namespace);
      if (newWindowNamespace) {
        return newWindowNamespace;
      }
      throw new Error("The window.".concat(namespace, " global variable is not available."));
    });
  }
  function loadCustomScript(options, PromisePonyfill) {
    if (PromisePonyfill === void 0) {
      PromisePonyfill = Promise;
    }
    validateArguments(options, PromisePonyfill);
    var url = options.url, attributes = options.attributes;
    if (typeof url !== "string" || url.length === 0) {
      throw new Error("Invalid url.");
    }
    if (typeof attributes !== "undefined" && typeof attributes !== "object") {
      throw new Error("Expected attributes to be an object.");
    }
    return new PromisePonyfill(function(resolve, reject) {
      if (typeof document === "undefined") return resolve();
      insertScriptElement({
        url,
        attributes,
        onSuccess: function() {
          return resolve();
        },
        onError: function() {
          var defaultError = new Error('The script "'.concat(url, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
          return reject(defaultError);
        }
      });
    });
  }
  function getPayPalWindowNamespace(namespace) {
    return window[namespace];
  }
  function validateArguments(options, PromisePonyfill) {
    if (typeof options !== "object" || options === null) {
      throw new Error("Expected an options object.");
    }
    var environment = options.environment;
    if (environment && environment !== "production" && environment !== "sandbox") {
      throw new Error('The `environment` option must be either "production" or "sandbox".');
    }
    if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
      throw new Error("Expected PromisePonyfill to be a function.");
    }
  }
  var PayPalMarks = function(_a2) {
    var _b = _a2.className, className = _b === void 0 ? "" : _b, children = _a2.children, markProps = __rest$1(_a2, ["className", "children"]);
    var _c = usePayPalScriptReducer()[0], isResolved = _c.isResolved, options = _c.options;
    var markContainerRef = (0, import_react23.useRef)(null);
    var _d = (0, import_react23.useState)(true), isEligible = _d[0], setIsEligible = _d[1];
    var _e = (0, import_react23.useState)(null), setErrorState = _e[1];
    var renderPayPalMark = function(mark) {
      var current = markContainerRef.current;
      if (!current || !mark.isEligible()) {
        return setIsEligible(false);
      }
      if (current.firstChild) {
        current.removeChild(current.firstChild);
      }
      mark.render(current).catch(function(err) {
        if (current === null || current.children.length === 0) {
          return;
        }
        setErrorState(function() {
          throw new Error("Failed to render <PayPalMarks /> component. ".concat(err));
        });
      });
    };
    (0, import_react23.useEffect)(function() {
      if (isResolved === false) {
        return;
      }
      var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
      if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Marks === void 0) {
        return setErrorState(function() {
          throw new Error(generateErrorMessage({
            reactComponentName: PayPalMarks.displayName,
            sdkComponentKey: "marks",
            sdkRequestedComponents: options.components,
            sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
          }));
        });
      }
      renderPayPalMark(paypalWindowNamespace.Marks(__assign({}, markProps)));
    }, [isResolved, markProps.fundingSource]);
    return import_react23.default.createElement(import_react23.default.Fragment, null, isEligible ? import_react23.default.createElement("div", {
      ref: markContainerRef,
      className
    }) : children);
  };
  PayPalMarks.displayName = "PayPalMarks";
  var PayPalMessages = function(_a2) {
    var _b = _a2.className, className = _b === void 0 ? "" : _b, _c = _a2.forceReRender, forceReRender = _c === void 0 ? [] : _c, messageProps = __rest$1(_a2, ["className", "forceReRender"]);
    var _d = usePayPalScriptReducer()[0], isResolved = _d.isResolved, options = _d.options;
    var messagesContainerRef = (0, import_react23.useRef)(null);
    var messages = (0, import_react23.useRef)(null);
    var _e = (0, import_react23.useState)(null), setErrorState = _e[1];
    (0, import_react23.useEffect)(function() {
      if (isResolved === false) {
        return;
      }
      var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
      if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Messages === void 0) {
        return setErrorState(function() {
          throw new Error(generateErrorMessage({
            reactComponentName: PayPalMessages.displayName,
            sdkComponentKey: "messages",
            sdkRequestedComponents: options.components,
            sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
          }));
        });
      }
      messages.current = paypalWindowNamespace.Messages(__assign({}, messageProps));
      messages.current.render(messagesContainerRef.current).catch(function(err) {
        if (messagesContainerRef.current === null || messagesContainerRef.current.children.length === 0) {
          return;
        }
        setErrorState(function() {
          throw new Error("Failed to render <PayPalMessages /> component. ".concat(err));
        });
      });
    }, __spreadArray([isResolved], forceReRender, true));
    return import_react23.default.createElement("div", {
      ref: messagesContainerRef,
      className
    });
  };
  PayPalMessages.displayName = "PayPalMessages";
  var PayPalScriptProvider = function(_a2) {
    var _b;
    var _c = _a2.options, options = _c === void 0 ? {
      clientId: "test"
    } : _c, children = _a2.children, _d = _a2.deferLoading, deferLoading = _d === void 0 ? false : _d;
    var _e = (0, import_react23.useReducer)(scriptReducer, {
      options: __assign(__assign({}, options), (_b = {}, _b[SDK_SETTINGS.DATA_JS_SDK_LIBRARY] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SCRIPT_ID] = "".concat(getScriptID(options)), _b)),
      loadingStatus: deferLoading ? SCRIPT_LOADING_STATE.INITIAL : SCRIPT_LOADING_STATE.PENDING
    }), state = _e[0], dispatch = _e[1];
    (0, import_react23.useEffect)(function() {
      if (deferLoading === false && state.loadingStatus === SCRIPT_LOADING_STATE.INITIAL) {
        return dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.PENDING
        });
      }
      if (state.loadingStatus !== SCRIPT_LOADING_STATE.PENDING) {
        return;
      }
      var isSubscribed = true;
      loadScript3(state.options).then(function() {
        if (isSubscribed) {
          dispatch({
            type: DISPATCH_ACTION.LOADING_STATUS,
            value: SCRIPT_LOADING_STATE.RESOLVED
          });
        }
      }).catch(function(err) {
        console.error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
        if (isSubscribed) {
          dispatch({
            type: DISPATCH_ACTION.LOADING_STATUS,
            value: {
              state: SCRIPT_LOADING_STATE.REJECTED,
              message: String(err)
            }
          });
        }
      });
      return function() {
        isSubscribed = false;
      };
    }, [state.options, deferLoading, state.loadingStatus]);
    return import_react23.default.createElement(ScriptContext.Provider, {
      value: __assign(__assign({}, state), {
        dispatch
      })
    }, children);
  };
  function ignore() {
    return;
  }
  var PayPalCardFieldsContext = (0, import_react23.createContext)({
    cardFieldsForm: null,
    fields: {},
    registerField: ignore,
    unregisterField: ignore
    // implementation is inside hook and passed through the provider
  });
  var FUNDING$1 = {
    PAYPAL: "paypal",
    VENMO: "venmo",
    APPLEPAY: "applepay",
    ITAU: "itau",
    CREDIT: "credit",
    PAYLATER: "paylater",
    CARD: "card",
    IDEAL: "ideal",
    SEPA: "sepa",
    BANCONTACT: "bancontact",
    GIROPAY: "giropay",
    SOFORT: "sofort",
    EPS: "eps",
    MYBANK: "mybank",
    P24: "p24",
    PAYU: "payu",
    BLIK: "blik",
    TRUSTLY: "trustly",
    OXXO: "oxxo",
    BOLETO: "boleto",
    BOLETOBANCARIO: "boletobancario",
    WECHATPAY: "wechatpay",
    MERCADOPAGO: "mercadopago",
    MULTIBANCO: "multibanco",
    SATISPAY: "satispay",
    PAIDY: "paidy",
    ZIMPLER: "zimpler",
    MAXIMA: "maxima"
  };
  [FUNDING$1.IDEAL, FUNDING$1.BANCONTACT, FUNDING$1.GIROPAY, FUNDING$1.SOFORT, FUNDING$1.EPS, FUNDING$1.MYBANK, FUNDING$1.P24, FUNDING$1.PAYU, FUNDING$1.BLIK, FUNDING$1.TRUSTLY, FUNDING$1.OXXO, FUNDING$1.BOLETO, FUNDING$1.BOLETOBANCARIO, FUNDING$1.WECHATPAY, FUNDING$1.MERCADOPAGO, FUNDING$1.MULTIBANCO, FUNDING$1.SATISPAY, FUNDING$1.PAIDY, FUNDING$1.MAXIMA, FUNDING$1.ZIMPLER];

  // src/components/Checkout.js
  var stripePromise2 = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  var PaymentSection = ({ orderDetails, onPaymentSuccess, onPaymentError }) => {
    const stripe = (0, import_react_stripe_js.useStripe)();
    const elements = (0, import_react_stripe_js.useElements)();
    const [errorMessage, setErrorMessage] = (0, import_react24.useState)(null);
    const [isLoading, setIsLoading] = (0, import_react24.useState)(false);
    const [paymentGateway, setPaymentGateway] = (0, import_react24.useState)("stripe");
    const paypalInitialOptions = {
      clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
      currency: "USD",
      intent: "capture"
    };
    const handleStripeSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      setErrorMessage(null);
      if (!stripe || !elements) {
        setErrorMessage("Stripe payment system not loaded. Please try again.");
        setIsLoading(false);
        return;
      }
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        setIsLoading(false);
        return;
      }
      const { paymentMethod: stripePaymentMethod, error: createError } = await stripe.createPaymentMethod({
        elements,
        params: {}
      });
      if (createError) {
        setErrorMessage(createError.message);
        setIsLoading(false);
        return;
      }
      const paymentMethod = stripePaymentMethod;
      const finalOrderDetails = { ...orderDetails, paymentGateway: "stripe" };
      try {
        const response = await fetch(process.env.REACT_APP_APPWRITE_FUNCTION_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentGateway: "stripe",
            paymentMethod: { id: paymentMethod.id },
            amount: orderDetails.amount,
            orderDetails: finalOrderDetails
          })
        });
        const data2 = await response.json();
        if (!response.ok || !data2.success) {
          const message = data2.message || `HTTP error! Status: ${response.status}. Payment processing failed on server.`;
          throw new Error(message);
        }
        onPaymentSuccess({
          transactionId: data2.transactionId,
          paymentStatus: data2.paymentStatus,
          orderDetails: finalOrderDetails
        });
      } catch (error) {
        setErrorMessage(`Payment failed: ${error.message}`);
        onPaymentError(`Payment failed: ${error.message}`);
        console.error("Fetch error during Stripe payment processing:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const createPayPalOrder = (data2, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: orderDetails.amount.toFixed(2),
            currency_code: "USD"
          }
        }]
      });
    };
    const onApprovePayPalOrder = async (data2, actions) => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const finalOrderDetails = { ...orderDetails, paymentGateway: "paypal" };
        const response = await fetch(process.env.REACT_APP_APPWRITE_FUNCTION_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentGateway: "paypal",
            paymentMethod: { orderID: data2.orderID },
            amount: orderDetails.amount,
            orderDetails: finalOrderDetails
          })
        });
        const backendData = await response.json();
        if (!response.ok || !backendData.success) {
          const message = backendData.message || `HTTP error! Status: ${response.status}. PayPal capture failed on server.`;
          throw new Error(message);
        }
        onPaymentSuccess({
          transactionId: backendData.transactionId,
          paymentStatus: backendData.paymentStatus,
          orderDetails: finalOrderDetails
        });
      } catch (error) {
        setErrorMessage(`Payment failed: ${error.message}`);
        onPaymentError(`Payment failed: ${error.message}`);
        console.error("Fetch error during PayPal capture:", error);
      } finally {
        setIsLoading(false);
      }
    };
    return /* @__PURE__ */ import_react24.default.createElement("div", { className: "p-4 bg-white rounded-lg shadow-md" }, /* @__PURE__ */ import_react24.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react24.default.createElement(CreditCard, { className: "mr-3 text-green-500" }), " Payment Details"), /* @__PURE__ */ import_react24.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react24.default.createElement("label", { htmlFor: "gateway-select", className: "block text-gray-700 text-sm font-bold mb-2" }, "Select Payment Method:"), /* @__PURE__ */ import_react24.default.createElement(
      "select",
      {
        id: "gateway-select",
        value: paymentGateway,
        onChange: (e2) => {
          setPaymentGateway(e2.target.value);
          setErrorMessage(null);
        },
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      },
      /* @__PURE__ */ import_react24.default.createElement("option", { value: "stripe" }, "Credit/Debit Card (Stripe)"),
      /* @__PURE__ */ import_react24.default.createElement("option", { value: "paypal" }, "PayPal")
    )), paymentGateway === "stripe" && /* @__PURE__ */ import_react24.default.createElement("form", { onSubmit: handleStripeSubmit }, /* @__PURE__ */ import_react24.default.createElement("div", { className: "mb-6" }, /* @__PURE__ */ import_react24.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, "Card Information:"), /* @__PURE__ */ import_react24.default.createElement(import_react_stripe_js.PaymentElement, { options: { layout: "tabs" } })), errorMessage && /* @__PURE__ */ import_react24.default.createElement("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert" }, /* @__PURE__ */ import_react24.default.createElement("p", { className: "font-bold" }, "Error!"), /* @__PURE__ */ import_react24.default.createElement("p", { className: "text-sm" }, errorMessage)), /* @__PURE__ */ import_react24.default.createElement(
      "button",
      {
        type: "submit",
        disabled: isLoading || !stripe || !elements,
        className: "w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
      },
      isLoading ? "Processing..." : `Pay $${orderDetails.amount.toFixed(2)} with Card`
    )), paymentGateway === "paypal" && /* @__PURE__ */ import_react24.default.createElement("div", { className: "mb-6 text-center" }, /* @__PURE__ */ import_react24.default.createElement("p", { className: "text-gray-600 mb-4" }, "Click the PayPal button below to complete your order."), errorMessage && /* @__PURE__ */ import_react24.default.createElement("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert" }, /* @__PURE__ */ import_react24.default.createElement("p", { className: "font-bold" }, "Error!"), /* @__PURE__ */ import_react24.default.createElement("p", { className: "text-sm" }, errorMessage)), /* @__PURE__ */ import_react24.default.createElement(PayPalScriptProvider, { options: paypalInitialOptions }, /* @__PURE__ */ import_react24.default.createElement(
      PayPalButtons,
      {
        style: { layout: "vertical", color: "blue", shape: "pill", label: "pay" },
        createOrder: createPayPalOrder,
        onApprove: onApprovePayPalOrder,
        onError: (err) => {
          console.error("PayPal Buttons Error:", err);
          setErrorMessage("An error occurred with PayPal. Please try again.");
          setIsLoading(false);
          onPaymentError("An error occurred with PayPal buttons.");
        },
        onCancel: () => {
          setErrorMessage("PayPal payment was cancelled.");
          setIsLoading(false);
          onPaymentError("PayPal payment cancelled by user.");
        },
        forceReRender: [orderDetails.amount]
      }
    ), isLoading && /* @__PURE__ */ import_react24.default.createElement("div", { className: "flex items-center justify-center mt-4" }, /* @__PURE__ */ import_react24.default.createElement("svg", { className: "animate-spin h-5 w-5 text-gray-600 mr-3", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react24.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react24.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })), /* @__PURE__ */ import_react24.default.createElement("span", { className: "text-gray-600" }, "Processing PayPal...")))));
  };
  var Checkout = ({ setView: setView2 }) => {
    const { cartItems, getTotalPrice, clearCart } = useCart();
    const { currentUser } = useAuth();
    const [shippingInfo, setShippingInfo] = (0, import_react24.useState)({
      fullName: currentUser?.displayName || "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "USA"
    });
    const [errors2, setErrors] = (0, import_react24.useState)({});
    const [showPaymentSection, setShowPaymentSection] = (0, import_react24.useState)(false);
    const [paymentStatusMessage, setPaymentStatusMessage] = (0, import_react24.useState)("");
    const [transactionDetails, setTransactionDetails] = (0, import_react24.useState)(null);
    const [orderId, setOrderId] = (0, import_react24.useState)(null);
    (0, import_react24.useEffect)(() => {
      if (currentUser) {
        setShippingInfo((prev) => ({
          ...prev,
          fullName: currentUser.displayName || prev.fullName
        }));
      }
    }, [currentUser]);
    const handleInputChange = (e2) => {
      const { id, value } = e2.target;
      setShippingInfo((prev) => ({ ...prev, [id]: value }));
      if (errors2[id]) {
        setErrors((prev) => ({ ...prev, [id]: "" }));
      }
    };
    const validateForm = () => {
      let newErrors = {};
      let isValid = true;
      if (!shippingInfo.fullName.trim()) {
        newErrors.fullName = "Full Name is required.";
        isValid = false;
      }
      if (!shippingInfo.addressLine1.trim()) {
        newErrors.addressLine1 = "Address Line 1 is required.";
        isValid = false;
      }
      if (!shippingInfo.city.trim()) {
        newErrors.city = "City is required.";
        isValid = false;
      }
      if (!shippingInfo.state.trim()) {
        newErrors.state = "State/Province/Region is required.";
        isValid = false;
      }
      if (!shippingInfo.zipCode.trim()) {
        newErrors.zipCode = "Zip Code is required.";
        isValid = false;
      } else if (!/^\d{5}(-\d{4})?$/.test(shippingInfo.zipCode)) {
        newErrors.zipCode = "Invalid Zip Code format (e.g., 12345 or 12345-6789).";
        isValid = false;
      }
      if (!shippingInfo.country.trim()) {
        newErrors.country = "Country is required.";
        isValid = false;
      }
      setErrors(newErrors);
      return isValid;
    };
    const handleProceedToPayment = () => {
      if (validateForm()) {
        if (cartItems.length === 0) {
          showMessage_default("Your cart is empty. Please add products before checking out.", "error");
          setView2("products");
          return;
        }
        setOrderId(ID.unique());
        setShowPaymentSection(true);
        setPaymentStatusMessage("");
        setTransactionDetails(null);
        showMessage_default("Shipping information validated. Proceed to payment.", "success");
      } else {
        showMessage_default("Please correct the errors in your shipping information.", "error");
      }
    };
    const handlePaymentSuccess = async (data2) => {
      setPaymentStatusMessage("Payment Successful! \u{1F389}");
      setTransactionDetails(data2);
      console.log("Payment Success:", data2);
      try {
        const orderData = {
          orderId,
          userId: currentUser?.$id || "guest",
          items: JSON.stringify(cartItems.map((item) => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity }))),
          shippingInfo: JSON.stringify(shippingInfo),
          totalAmount: parseFloat(getTotalPrice().toFixed(2)),
          paymentGateway: data2.orderDetails.paymentGateway,
          transactionId: data2.transactionId,
          paymentStatus: data2.paymentStatus,
          status: "processing",
          orderDate: (/* @__PURE__ */ new Date()).toISOString()
        };
        const DATABASE_ID2 = process.env.REACT_APP_APPWRITE_DATABASE_ID;
        const ORDERS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_ORDERS_COLLECTION_ID;
        await databases.createDocument(
          DATABASE_ID2,
          ORDERS_COLLECTION_ID,
          orderId,
          orderData
        );
        await clearCart();
        showMessage_default("Your order has been placed successfully!", "success");
        setView2("order-confirmation");
      } catch (error) {
        console.error("Error saving order to Appwrite database after payment:", error);
        showMessage_default("Payment was successful, but there was an issue recording your order. Please contact support.", "error");
      }
    };
    const handlePaymentError = (message) => {
      setPaymentStatusMessage(`Payment Failed: ${message} \u{1F614}`);
      setTransactionDetails(null);
      console.error("Payment Error:", message);
      showMessage_default(`Payment Failed: ${message}`, "error");
    };
    const totalPrice = getTotalPrice();
    if (cartItems.length === 0) {
      return /* @__PURE__ */ import_react24.default.createElement("div", { className: "container mx-auto p-8 text-center animate-fade-in" }, /* @__PURE__ */ import_react24.default.createElement(ShoppingCart, { className: "w-24 h-24 text-gray-400 mx-auto mb-6" }), /* @__PURE__ */ import_react24.default.createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-4" }, "Your Cart is Empty"), /* @__PURE__ */ import_react24.default.createElement("p", { className: "text-gray-600 mb-6" }, "Looks like you haven't added anything to your cart yet."), /* @__PURE__ */ import_react24.default.createElement(
        "button",
        {
          onClick: () => setView2("products"),
          className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        },
        "Start Shopping"
      ));
    }
    const currentOrderId = orderId || ID.unique();
    const comprehensiveOrderDetails = {
      userId: currentUser?.$id || "guest",
      orderId: currentOrderId,
      items: cartItems.map((item) => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
      amount: totalPrice,
      currency: "USD",
      shippingInfo,
      email: currentUser?.email
    };
    return /* @__PURE__ */ import_react24.default.createElement("div", { className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react24.default.createElement("h2", { className: "text-4xl font-bold text-center text-gray-800 mb-8" }, "Checkout"), /* @__PURE__ */ import_react24.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ import_react24.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6 h-fit" }, /* @__PURE__ */ import_react24.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react24.default.createElement(PackageCheck, { className: "mr-3 text-pink-500" }), " Order Summary"), /* @__PURE__ */ import_react24.default.createElement("div", { className: "divide-y divide-gray-200" }, cartItems.map((item) => /* @__PURE__ */ import_react24.default.createElement("div", { key: item.id, className: "flex justify-between items-center py-3" }, /* @__PURE__ */ import_react24.default.createElement("span", { className: "text-gray-700" }, item.name, " (x", item.quantity, ")"), /* @__PURE__ */ import_react24.default.createElement("span", { className: "font-semibold" }, "$", (item.price * item.quantity).toFixed(2))))), /* @__PURE__ */ import_react24.default.createElement("div", { className: "flex justify-between items-center border-t border-gray-200 pt-4 mt-4" }, /* @__PURE__ */ import_react24.default.createElement("span", { className: "text-xl font-bold text-gray-800" }, "Total:"), /* @__PURE__ */ import_react24.default.createElement("span", { className: "text-2xl font-bold text-pink-600" }, "$", totalPrice.toFixed(2)))), /* @__PURE__ */ import_react24.default.createElement("div", null, !showPaymentSection ? /* @__PURE__ */ import_react24.default.createElement("div", { className: "bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react24.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react24.default.createElement(CreditCard, { className: "mr-3 text-purple-500" }), " Shipping Information"), /* @__PURE__ */ import_react24.default.createElement("form", { onSubmit: (e2) => {
      e2.preventDefault();
      handleProceedToPayment();
    } }, /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "fullName", label: "Full Name", value: shippingInfo.fullName, onChange: handleInputChange, error: errors2.fullName, required: true }), /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "addressLine1", label: "Address Line 1", value: shippingInfo.addressLine1, onChange: handleInputChange, placeholder: "Street address, P.O. Box", error: errors2.addressLine1, required: true }), /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "addressLine2", label: "Address Line 2 (Optional)", value: shippingInfo.addressLine2, onChange: handleInputChange, placeholder: "Apartment, suite, unit, building, floor, etc." }), /* @__PURE__ */ import_react24.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "city", label: "City", value: shippingInfo.city, onChange: handleInputChange, error: errors2.city, required: true }), /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "state", label: "State/Province/Region", value: shippingInfo.state, onChange: handleInputChange, error: errors2.state, required: true })), /* @__PURE__ */ import_react24.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "zipCode", label: "Zip/Postal Code", value: shippingInfo.zipCode, onChange: handleInputChange, error: errors2.zipCode, required: true }), /* @__PURE__ */ import_react24.default.createElement(InputField_default, { id: "country", label: "Country", value: shippingInfo.country, onChange: handleInputChange, error: errors2.country, required: true })), /* @__PURE__ */ import_react24.default.createElement("p", { className: "text-gray-600 text-sm mt-6 mb-4 font-semibold" }, "* Payment processing will be handled securely after shipping details."), /* @__PURE__ */ import_react24.default.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
      },
      "Proceed to Payment"
    ))) : /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, stripePromise2 && /* @__PURE__ */ import_react24.default.createElement(import_react_stripe_js.Elements, { stripe: stripePromise2 }, /* @__PURE__ */ import_react24.default.createElement(
      PaymentSection,
      {
        orderDetails: comprehensiveOrderDetails,
        onPaymentSuccess: handlePaymentSuccess,
        onPaymentError: handlePaymentError
      }
    )), paymentStatusMessage && /* @__PURE__ */ import_react24.default.createElement("div", { className: "mt-8 p-6 bg-white rounded-lg shadow-md text-center" }, /* @__PURE__ */ import_react24.default.createElement("p", { className: `text-xl font-semibold ${paymentStatusMessage.includes("Successful") ? "text-green-600" : "text-red-600"}` }, paymentStatusMessage), transactionDetails && /* @__PURE__ */ import_react24.default.createElement("div", { className: "mt-4 text-left inline-block" }, /* @__PURE__ */ import_react24.default.createElement("h3", { className: "text-lg font-medium text-gray-700 mb-2" }, "Transaction Details:"), /* @__PURE__ */ import_react24.default.createElement("p", null, /* @__PURE__ */ import_react24.default.createElement("strong", null, "Transaction ID:"), " ", transactionDetails.transactionId), /* @__PURE__ */ import_react24.default.createElement("p", null, /* @__PURE__ */ import_react24.default.createElement("strong", null, "Status:"), " ", transactionDetails.paymentStatus), /* @__PURE__ */ import_react24.default.createElement("p", null, /* @__PURE__ */ import_react24.default.createElement("strong", null, "Order ID:"), " ", transactionDetails.orderDetails.orderId)), /* @__PURE__ */ import_react24.default.createElement(
      "button",
      {
        onClick: () => setView2("home"),
        className: "mt-6 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 hover:scale-105"
      },
      "Back to Home"
    ))))));
  };
  var Checkout_default = Checkout;

  // src/components/ContactSection.js
  var import_react25 = __toESM(require_react());
  init_sdk();
  init_lucide_react();
  init_AuthContext();
  var DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
  var CONTACT_COLLECTION_ID = process.env.REACT_APP_APPWRITE_CONTACT_COLLECTION_ID;
  var GALLERY_COLLECTION_ID = process.env.REACT_APP_APPWRITE_GALLERY_COLLECTION_ID;
  var BUCKET_ID = process.env.REACT_APP_APPWRITE_BUCKET_ID;
  var ImageUploadModal = ({ onClose, onUploadSuccess }) => {
    const { currentUser } = useAuth();
    const [file, setFile] = (0, import_react25.useState)(null);
    const [uploading, setUploading] = (0, import_react25.useState)(false);
    const [progress, setProgress] = (0, import_react25.useState)(0);
    const [error, setError] = (0, import_react25.useState)("");
    const handleFileChange = (e2) => {
      if (e2.target.files && e2.target.files[0]) {
        setFile(e2.target.files[0]);
        setError("");
      }
    };
    const handleUpload = async () => {
      if (!file) {
        setError("Please select a file to upload.");
        return;
      }
      if (!currentUser) {
        setError("You must be logged in to upload a photo.");
        return;
      }
      setUploading(true);
      setError("");
      try {
        const uploadedFile = await storage.createFile(
          BUCKET_ID,
          ID2.unique(),
          file,
          [
            Permission.read(Role.any()),
            // Public read access for the file
            Permission.update(Role.user(currentUser.$id)),
            Permission.delete(Role.user(currentUser.$id))
          ]
        );
        const newImageMetadata = {
          imageId: uploadedFile.$id,
          userId: currentUser.$id,
          userName: currentUser.name,
          status: "pending"
          // Status is 'pending' by default, waiting for moderator approval
        };
        await databases.createDocument(
          DATABASE_ID,
          GALLERY_COLLECTION_ID,
          ID2.unique(),
          newImageMetadata,
          [
            Permission.read(Role.team("admins")),
            // Only admins can read this metadata
            Permission.write(Role.team("admins"))
            // Only admins can update this metadata
          ]
        );
        showMessage_default("Image uploaded successfully! It will appear in the gallery after a quick review.", "success");
        onUploadSuccess();
        onClose();
      } catch (error2) {
        console.error("Appwrite Upload Error:", error2);
        const appwriteError = error2.response?.message || "Failed to upload image. Please try again.";
        setError(appwriteError);
      } finally {
        setUploading(false);
        setProgress(0);
      }
    };
    return /* @__PURE__ */ import_react25.default.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative" }, /* @__PURE__ */ import_react25.default.createElement("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800" }, /* @__PURE__ */ import_react25.default.createElement(X, { size: 24 })), /* @__PURE__ */ import_react25.default.createElement("h3", { className: "text-2xl font-bold text-purple-800 mb-6 flex items-center" }, /* @__PURE__ */ import_react25.default.createElement(CloudUpload, { className: "mr-2" }), " Upload Your Photo"), /* @__PURE__ */ import_react25.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react25.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleFileChange,
        className: "w-full text-gray-700 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
      }
    )), file && !uploading && /* @__PURE__ */ import_react25.default.createElement("div", { className: "mb-4 text-gray-600" }, "Selected: ", file.name), uploading && /* @__PURE__ */ import_react25.default.createElement("div", { className: "w-full bg-gray-200 rounded-full h-2.5 mb-4" }, /* @__PURE__ */ import_react25.default.createElement(
      "div",
      {
        className: "bg-purple-600 h-2.5 rounded-full",
        style: { width: `${progress}%` }
      }
    )), error && /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert" }, /* @__PURE__ */ import_react25.default.createElement("span", { className: "block sm:inline" }, error)), /* @__PURE__ */ import_react25.default.createElement(
      "button",
      {
        onClick: handleUpload,
        disabled: uploading || !file || !currentUser,
        className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 disabled:bg-gray-400"
      },
      uploading ? "Uploading..." : "Submit Photo"
    ), !currentUser && /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-sm text-center text-gray-500 mt-2" }, "You must be logged in to upload.")));
  };
  var ContactForm = () => {
    const [formData, setFormData] = (0, import_react25.useState)({ name: "", email: "", message: "" });
    const [loading, setLoading] = (0, import_react25.useState)(false);
    const [error, setError] = (0, import_react25.useState)("");
    const handleChange = (e2) => {
      const { id, value } = e2.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      setError("");
    };
    const handleSubmit = async (e2) => {
      e2.preventDefault();
      setLoading(true);
      setError("");
      try {
        await databases.createDocument(
          DATABASE_ID,
          CONTACT_COLLECTION_ID,
          ID2.unique(),
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          },
          [
            Permission.read(Role.team("admins")),
            Permission.write(Role.team("admins"))
          ]
        );
        showMessage_default("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      } catch (error2) {
        console.error("Appwrite Database Error:", error2);
        const appwriteError = error2.response?.message || "Failed to send message. Please try again.";
        setError(appwriteError);
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md w-full md:w-1/2 lg:w-2/5 animate-fade-in-up delay-200" }, /* @__PURE__ */ import_react25.default.createElement("h3", { className: "text-2xl font-semibold text-purple-700 mb-3 flex items-center" }, /* @__PURE__ */ import_react25.default.createElement(MessageSquare, { className: "mr-2" }), " Send Us a Message"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-gray-600 mb-4" }, "We'll get back to you as soon as possible."), /* @__PURE__ */ import_react25.default.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ import_react25.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react25.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "name" }, "Name"), /* @__PURE__ */ import_react25.default.createElement(
      "input",
      {
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "name",
        type: "text",
        value: formData.name,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ import_react25.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react25.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "email" }, "Email"), /* @__PURE__ */ import_react25.default.createElement(
      "input",
      {
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        id: "email",
        type: "email",
        value: formData.email,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ import_react25.default.createElement("div", { className: "mb-6" }, /* @__PURE__ */ import_react25.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "message" }, "Message"), /* @__PURE__ */ import_react25.default.createElement(
      "textarea",
      {
        className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none",
        id: "message",
        value: formData.message,
        onChange: handleChange,
        required: true
      }
    )), error && /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert" }, /* @__PURE__ */ import_react25.default.createElement("span", { className: "block sm:inline" }, error)), /* @__PURE__ */ import_react25.default.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 disabled:bg-gray-400",
        disabled: loading
      },
      loading ? "Sending..." : "Send Message"
    )));
  };
  var ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = (0, import_react25.useState)(false);
    const [images, setImages] = (0, import_react25.useState)([]);
    const [loadingImages, setLoadingImages] = (0, import_react25.useState)(true);
    const fetchImages = async () => {
      setLoadingImages(true);
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          GALLERY_COLLECTION_ID,
          [Query.equal("status", "approved")]
        );
        const galleryImages = response.documents.map((doc) => ({
          id: doc.imageId,
          userName: doc.userName,
          url: storage.getFilePreview(BUCKET_ID, doc.imageId, 0, 0, 100, 100, "webp").href
          // Optimized preview
        }));
        setImages(galleryImages);
      } catch (error) {
        console.error("Failed to fetch images from gallery:", error);
        showMessage_default("Failed to load images from the gallery.", "error");
      } finally {
        setLoadingImages(false);
      }
    };
    (0, import_react25.useEffect)(() => {
      fetchImages();
    }, []);
    const handleUploadSuccess = () => {
      fetchImages();
    };
    return /* @__PURE__ */ import_react25.default.createElement("section", { id: "contact", className: "bg-pink-50 py-16 px-4 rounded-xl m-4 shadow-lg" }, /* @__PURE__ */ import_react25.default.createElement("div", { className: "container mx-auto text-center" }, /* @__PURE__ */ import_react25.default.createElement("h2", { className: "text-4xl font-bold text-purple-800 mb-8" }, "Get in Touch"), /* @__PURE__ */ import_react25.default.createElement("div", { className: "flex flex-col md:flex-row justify-center items-start gap-8" }, /* @__PURE__ */ import_react25.default.createElement(ContactForm, null), /* @__PURE__ */ import_react25.default.createElement("div", { className: "flex flex-col gap-8 w-full md:w-1/2 lg:w-2/5" }, /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md animate-fade-in-up delay-100" }, /* @__PURE__ */ import_react25.default.createElement("h3", { className: "text-2xl font-semibold text-purple-700 mb-3" }, "Location"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-gray-600" }, "123 Beauty Blvd, Salon City, ST 12345")), /* @__PURE__ */ import_react25.default.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md animate-fade-in-up delay-100" }, /* @__PURE__ */ import_react25.default.createElement("h3", { className: "text-2xl font-semibold text-purple-700 mb-3" }, "Hours"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-gray-600" }, "Mon - Fri: 9:00 AM - 7:00 PM"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-gray-600" }, "Sat: 10:00 AM - 5:00 PM"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-gray-600" }, "Sun: Closed")))), /* @__PURE__ */ import_react25.default.createElement("div", { className: "mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in-up delay-400" }, /* @__PURE__ */ import_react25.default.createElement("h2", { className: "text-4xl font-bold text-purple-800 mb-8 flex items-center justify-center" }, /* @__PURE__ */ import_react25.default.createElement(Image, { className: "mr-2" }), " Bukibloom Gallery"), /* @__PURE__ */ import_react25.default.createElement("p", { className: "text-lg text-gray-700 mb-6 max-w-2xl mx-auto" }, "Share your beautiful transformations with our community!"), /* @__PURE__ */ import_react25.default.createElement(
      "button",
      {
        onClick: () => setIsModalOpen(true),
        className: "bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 mb-8"
      },
      "Upload Your Photo"
    ), loadingImages ? /* @__PURE__ */ import_react25.default.createElement("div", { className: "flex items-center justify-center text-gray-500" }, "Loading gallery...") : images.length > 0 ? /* @__PURE__ */ import_react25.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" }, images.map((image) => /* @__PURE__ */ import_react25.default.createElement("div", { key: image.id, className: "relative" }, /* @__PURE__ */ import_react25.default.createElement(
      "img",
      {
        src: image.url,
        alt: `Gallery photo uploaded by ${image.userName}`,
        className: "w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
      }
    ), /* @__PURE__ */ import_react25.default.createElement("p", { className: "absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center" }, /* @__PURE__ */ import_react25.default.createElement(User, { size: 12, className: "mr-1" }), image.userName)))) : /* @__PURE__ */ import_react25.default.createElement("div", { className: "text-center text-gray-500" }, "No photos in the gallery yet. Be the first to upload one!")), isModalOpen && /* @__PURE__ */ import_react25.default.createElement(ImageUploadModal, { onClose: () => setIsModalOpen(false), onUploadSuccess: handleUploadSuccess })));
  };
  var ContactSection_default = ContactSection;

  // src/App.js
  init_UserDashboardView();

  // src/components/PaymentView.js
  var import_react27 = __toESM(require_react());
  init_lucide_react();
  var import_react_stripe_js2 = __toESM(require_react_stripe_umd());
  var stripePromise3 = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  var PayPalPaymentButtons = ({ depositAmount, onPaymentSuccess, setPaymentProcessing, showMessage: showMessage2, serviceToBook }) => {
    const initialOptions = {
      "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      // Your PayPal client ID (NOT secret)
      currency: "USD",
      intent: "capture"
    };
    const createOrder = async (data2, actions) => {
      setPaymentProcessing(true);
      showMessage2("Creating PayPal order...", "info");
      try {
        const order = await actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: depositAmount.toFixed(2)
                // Amount for PayPal
              },
              description: `Deposit for ${serviceToBook.name}`
            }
          ]
        });
        return order;
      } catch (error) {
        console.error("Error creating PayPal order:", error);
        showMessage2("Failed to create PayPal order.", "error");
        setPaymentProcessing(false);
        throw error;
      }
    };
    const onApprove = async (data2, actions) => {
      showMessage2("Confirming PayPal payment...", "info");
      try {
        const response = await fetch("/v1/functions/YOUR_APPWRITE_FUNCTION_ID/executions", {
          // Replace with your Appwrite Function endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            paymentGateway: "paypal",
            paymentMethod: { orderID: data2.orderID },
            // Send PayPal's order ID
            amount: depositAmount,
            orderDetails: {
              serviceId: serviceToBook.id,
              serviceName: serviceToBook.name,
              depositAmount
              // Add other necessary order details for your backend
            }
          })
        });
        const result = await response.json();
        if (result.success) {
          showMessage2("PayPal payment successful! Your booking is confirmed.", "success");
          onPaymentSuccess();
        } else {
          showMessage2(result.message || "PayPal payment failed. Please try again.", "error");
        }
      } catch (error) {
        console.error("Error capturing PayPal payment:", error);
        showMessage2("An error occurred during PayPal payment. Please try again.", "error");
      } finally {
        setPaymentProcessing(false);
      }
    };
    const onError3 = (err) => {
      console.error("PayPal error:", err);
      showMessage2("PayPal payment encountered an error.", "error");
      setPaymentProcessing(false);
    };
    const onCancel = (data2) => {
      showMessage2("PayPal payment cancelled.", "info");
      setPaymentProcessing(false);
    };
    return /* @__PURE__ */ import_react27.default.createElement(PayPalScriptProvider, { options: initialOptions }, /* @__PURE__ */ import_react27.default.createElement(
      PayPalButtons,
      {
        style: { layout: "vertical", color: "blue", shape: "pill", label: "pay" },
        createOrder,
        onApprove,
        onError: onError3,
        onCancel
      }
    ));
  };
  var StripeCheckoutForm = ({ serviceToBook, depositAmount, onPaymentSuccess, setPaymentProcessing, setErrors, showMessage: showMessage2 }) => {
    const stripe = (0, import_react_stripe_js2.useStripe)();
    const elements = (0, import_react_stripe_js2.useElements)();
    const [cardName, setCardName] = (0, import_react27.useState)("");
    const [isLoading, setIsLoading] = (0, import_react27.useState)(false);
    const validateForm = () => {
      let newErrors = {};
      let isValid = true;
      if (!cardName.trim()) {
        newErrors.cardName = "Name on card is required.";
        isValid = false;
      }
      setErrors(newErrors);
      return isValid;
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrors({});
      setPaymentProcessing(true);
      setIsLoading(true);
      if (!stripe || !elements) {
        showMessage2("Payment system not ready. Please try again.", "error");
        setPaymentProcessing(false);
        setIsLoading(false);
        return;
      }
      if (!validateForm()) {
        showMessage2("Please correct the payment information.", "error");
        setPaymentProcessing(false);
        setIsLoading(false);
        return;
      }
      showMessage2("Initiating payment...", "info");
      try {
        const cardElement = elements.getElement(import_react_stripe_js2.CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: cardName
          }
        });
        if (error) {
          console.error("[Stripe error]", error);
          setErrors({ general: error.message });
          showMessage2(error.message, "error");
          setPaymentProcessing(false);
          setIsLoading(false);
          return;
        }
        showMessage2("Sending payment details to server...", "info");
        const response = await fetch("/v1/functions/YOUR_APPWRITE_FUNCTION_ID/executions", {
          // Replace with your Appwrite Function endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            paymentGateway: "stripe",
            paymentMethod: { id: paymentMethod.id },
            amount: depositAmount,
            orderDetails: {
              serviceId: serviceToBook.id,
              serviceName: serviceToBook.name,
              depositAmount
              // Add other necessary order details for your backend
            }
          })
        });
        const data2 = await response.json();
        if (data2.success) {
          showMessage2("Stripe payment successful! Your booking is confirmed.", "success");
          onPaymentSuccess();
        } else {
          setErrors({ general: data2.message || "Stripe payment failed. Please try again." });
          showMessage2(data2.message || "Stripe payment failed. Please try again.", "error");
        }
      } catch (error) {
        console.error("Error during Stripe payment submission:", error);
        setErrors({ general: error.message || "An unexpected error occurred." });
        showMessage2("An unexpected error occurred during Stripe payment. Please try again.", "error");
      } finally {
        setPaymentProcessing(false);
        setIsLoading(false);
      }
    };
    return /* @__PURE__ */ import_react27.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, /* @__PURE__ */ import_react27.default.createElement(
      InputField_default,
      {
        id: "cardName",
        label: "Name on Card",
        value: cardName,
        onChange: (e2) => setCardName(e2.target.value),
        placeholder: "John Doe",
        error: errors.cardName,
        required: true
      }
    ), /* @__PURE__ */ import_react27.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react27.default.createElement("label", { htmlFor: "card-element", className: "block text-gray-700 text-sm font-bold mb-2" }, "Card Details"), /* @__PURE__ */ import_react27.default.createElement("div", { className: "shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out" }, /* @__PURE__ */ import_react27.default.createElement(
      import_react_stripe_js2.CardElement,
      {
        id: "card-element",
        options: {
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#9e2146"
            }
          }
        }
      }
    )), errors.general && /* @__PURE__ */ import_react27.default.createElement("p", { className: "text-red-500 text-xs italic mt-1" }, errors.general)), /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 mt-6",
        disabled: !stripe || !elements || isLoading
      },
      isLoading ? /* @__PURE__ */ import_react27.default.createElement("span", { className: "flex items-center justify-center" }, /* @__PURE__ */ import_react27.default.createElement("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react27.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react27.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })), "Processing...") : /* @__PURE__ */ import_react27.default.createElement("span", { className: "flex items-center justify-center" }, /* @__PURE__ */ import_react27.default.createElement(CreditCard, { className: "mr-2", size: 20 }), " Pay with Card ($", depositAmount?.toFixed(2), ")")
    ), /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setView("booking"),
        className: "w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-4 rounded-lg mt-3 transition duration-300",
        disabled: isLoading
      },
      "Cancel"
    ));
  };
  var PaymentView = ({ setView: setView2, serviceToBook, depositAmount, onPaymentSuccess }) => {
    const [paymentMethod, setPaymentMethod] = (0, import_react27.useState)("stripe");
    const [paymentProcessing, setPaymentProcessing] = (0, import_react27.useState)(false);
    const [errors2, setErrors] = (0, import_react27.useState)({});
    (0, import_react27.useEffect)(() => {
      if (!serviceToBook || !depositAmount) {
        showMessage_default("No service selected for payment. Redirecting to services.", "error");
        setView2("services");
      }
    }, [serviceToBook, depositAmount, setView2]);
    if (!serviceToBook) {
      return /* @__PURE__ */ import_react27.default.createElement("div", { className: "container mx-auto p-8 text-center animate-fade-in" }, /* @__PURE__ */ import_react27.default.createElement(DollarSign, { className: "w-24 h-24 text-gray-400 mx-auto mb-6" }), /* @__PURE__ */ import_react27.default.createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-4" }, "Payment Required"), /* @__PURE__ */ import_react27.default.createElement("p", { className: "text-gray-600 mb-6" }, "Please select a service to proceed with payment."), /* @__PURE__ */ import_react27.default.createElement(
        "button",
        {
          onClick: () => setView2("services"),
          className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        },
        "View Services"
      ));
    }
    return /* @__PURE__ */ import_react27.default.createElement("div", { className: "container mx-auto p-4 animate-fade-in" }, /* @__PURE__ */ import_react27.default.createElement("h2", { className: "text-4xl font-bold text-center text-gray-800 mb-8" }, "Confirm Booking & Pay Deposit"), /* @__PURE__ */ import_react27.default.createElement("div", { className: "max-w-md mx-auto bg-white rounded-lg shadow-xl p-6" }, /* @__PURE__ */ import_react27.default.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ import_react27.default.createElement("h3", { className: "text-2xl font-bold text-gray-800 mb-2" }, serviceToBook.name), /* @__PURE__ */ import_react27.default.createElement("p", { className: "text-gray-600 mb-1" }, "Total Service Price: ", /* @__PURE__ */ import_react27.default.createElement("span", { className: "font-semibold" }, "$", serviceToBook.price?.toFixed(2))), /* @__PURE__ */ import_react27.default.createElement("p", { className: "text-lg font-bold text-pink-600" }, "Deposit Required: ", /* @__PURE__ */ import_react27.default.createElement("span", { className: "text-3xl" }, "$", depositAmount?.toFixed(2))), /* @__PURE__ */ import_react27.default.createElement("p", { className: "text-sm text-gray-500 mt-2" }, "This 10% deposit is non-refundable if the client doesn't show up.")), /* @__PURE__ */ import_react27.default.createElement("div", { className: "mb-6 flex justify-center space-x-4" }, /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setPaymentMethod("stripe"),
        className: `py-2 px-4 rounded-full font-bold transition duration-300 ${paymentMethod === "stripe" ? "bg-purple-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
        disabled: paymentProcessing
      },
      /* @__PURE__ */ import_react27.default.createElement(CreditCard, { className: "inline-block mr-2", size: 18 }),
      " Pay with Card"
    ), /* @__PURE__ */ import_react27.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setPaymentMethod("paypal"),
        className: `py-2 px-4 rounded-full font-bold transition duration-300 ${paymentMethod === "paypal" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
        disabled: paymentProcessing
      },
      /* @__PURE__ */ import_react27.default.createElement(Paypal, { className: "inline-block mr-2", size: 18 }),
      " Pay with PayPal"
    )), paymentMethod === "stripe" && /* @__PURE__ */ import_react27.default.createElement(import_react_stripe_js2.Elements, { stripe: stripePromise3 }, /* @__PURE__ */ import_react27.default.createElement(
      StripeCheckoutForm,
      {
        serviceToBook,
        depositAmount,
        onPaymentSuccess,
        setPaymentProcessing,
        setErrors,
        showMessage: showMessage_default
      }
    )), paymentMethod === "paypal" && /* @__PURE__ */ import_react27.default.createElement(
      PayPalPaymentButtons,
      {
        depositAmount,
        onPaymentSuccess,
        setPaymentProcessing,
        showMessage: showMessage_default,
        serviceToBook
      }
    )));
  };
  var PaymentView_default = PaymentView;

  // src/components/ServiceCard.js
  var import_react28 = __toESM(require_react());

  // src/App.js
  init_AuthContext();
  init_BookingContext();

  // src/context/AdminContext.js
  var import_react29 = __toESM(require_react());
  init_useAppwrite();
  init_sdk();
  var AdminContext = (0, import_react29.createContext)();
  var AdminProvider = ({ children }) => {
    const { database, client, isAuthReady } = useAppwriteContext();
    const APPWRITE_DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
    const APPWRITE_BOOKINGS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_BOOKINGS_COLLECTION_ID;
    const APPWRITE_PRODUCTS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_PRODUCTS_COLLECTION_ID;
    const APPWRITE_SERVICES_COLLECTION_ID = process.env.REACT_APP_APPWRITE_SERVICES_COLLECTION_ID;
    const APPWRITE_STAFF_COLLECTION_ID = process.env.REACT_APP_APPWRITE_STAFF_COLLECTION_ID;
    const APPWRITE_USERS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_USERS_COLLECTION_ID;
    const APPWRITE_ORDERS_COLLECTION_ID = process.env.REACT_APP_APPWRITE_ORDERS_COLLECTION_ID;
    const [allBookings, setAllBookings] = (0, import_react29.useState)([]);
    const [allProducts, setAllProducts] = (0, import_react29.useState)([]);
    const [allOrders, setAllOrders] = (0, import_react29.useState)([]);
    const [allServices, setAllServices] = (0, import_react29.useState)([]);
    const [allStaff, setAllStaff] = (0, import_react29.useState)([]);
    const [allUsers, setAllUsers] = (0, import_react29.useState)([]);
    const [adminLoading, setAdminLoading] = (0, import_react29.useState)(false);
    const [adminError, setAdminError] = (0, import_react29.useState)(null);
    const handleAppwriteError = (error, message) => {
      console.error(message, error);
      setAdminError(`Failed to complete action: ${error.message || "An unknown error occurred."}`);
    };
    const mapBookingDocument = (doc) => {
      const service = allServices.find((s2) => s2.id === doc.service);
      const staffMember = allStaff.find((s2) => s2.id === doc.staffId);
      return {
        id: doc.$id,
        serviceId: doc.service,
        serviceName: service ? service.name : "Unknown Service",
        staffId: doc.staffId,
        staffName: staffMember ? staffMember.name : "Unknown Staff",
        dateTime: doc.bookingDate,
        status: doc.status || "pending",
        clientName: doc.clientName,
        clientEmail: doc.clientEmail,
        clientPhone: doc.clientPhone,
        userId: doc.userId,
        ...doc
      };
    };
    const fetchAllBookings = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_BOOKINGS_COLLECTION_ID) {
        console.warn("AdminContext: Bookings collection ID not configured or DB not ready. Cannot fetch bookings.");
        setAllBookings([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_BOOKINGS_COLLECTION_ID,
          [Query.orderDesc("bookingDate"), Query.limit(100)]
        );
        setAllBookings(response.documents.map(mapBookingDocument));
        console.log("Fetched all bookings for admin:", response.documents);
      } catch (error) {
        handleAppwriteError(error, "Error fetching all bookings for admin (check Appwrite security rules):");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID, allServices, allStaff]);
    const fetchAllProducts = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_PRODUCTS_COLLECTION_ID) {
        console.warn("AdminContext: Products collection ID not configured or DB not ready. Cannot fetch products.");
        setAllProducts([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_PRODUCTS_COLLECTION_ID,
          [Query.limit(100)]
        );
        setAllProducts(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
      } catch (error) {
        handleAppwriteError(error, "Error fetching all products for admin:");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_PRODUCTS_COLLECTION_ID]);
    const fetchAllServices = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_SERVICES_COLLECTION_ID) {
        console.warn("AdminContext: Services collection ID not configured or DB not ready. Cannot fetch services.");
        setAllServices([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_SERVICES_COLLECTION_ID,
          [Query.limit(100)]
        );
        setAllServices(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
      } catch (error) {
        handleAppwriteError(error, "Error fetching all services for admin:");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_SERVICES_COLLECTION_ID]);
    const fetchAllStaff = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_STAFF_COLLECTION_ID) {
        console.warn("AdminContext: Staff collection ID not configured or DB not ready. Cannot fetch staff.");
        setAllStaff([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_STAFF_COLLECTION_ID,
          [Query.limit(100)]
        );
        setAllStaff(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
      } catch (error) {
        handleAppwriteError(error, "Error fetching all staff for admin:");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_STAFF_COLLECTION_ID]);
    const fetchAllUsers = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_USERS_COLLECTION_ID) {
        console.warn("AdminContext: Users collection ID not set or is default. Cannot fetch user profiles from custom collection.");
        setAllUsers([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_USERS_COLLECTION_ID,
          [Query.limit(100)]
        );
        setAllUsers(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
        console.log("Fetched users for admin:", response.documents);
      } catch (error) {
        handleAppwriteError(error, "Error fetching users for admin:");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_USERS_COLLECTION_ID]);
    const fetchAllOrders = (0, import_react29.useCallback)(async () => {
      if (!database || !isAuthReady || !APPWRITE_ORDERS_COLLECTION_ID) {
        console.warn("AdminContext: Orders collection ID not configured or DB not ready. Cannot fetch orders.");
        setAllOrders([]);
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        const response = await database.listDocuments(
          APPWRITE_DATABASE_ID,
          APPWRITE_ORDERS_COLLECTION_ID,
          [Query.orderDesc("$createdAt"), Query.limit(100)]
        );
        setAllOrders(response.documents.map((doc) => ({ id: doc.$id, ...doc })));
        console.log("Fetched all orders for admin:", response.documents);
      } catch (error) {
        handleAppwriteError(error, "Error fetching all orders for admin:");
      } finally {
        setAdminLoading(false);
      }
    }, [database, isAuthReady, APPWRITE_DATABASE_ID, APPWRITE_ORDERS_COLLECTION_ID]);
    const updateBookingStatus = async (bookingId, newStatus) => {
      if (!database || !isAuthReady || !APPWRITE_BOOKINGS_COLLECTION_ID) {
        setAdminError("Application not ready or Booking collection not configured.");
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID, bookingId, { status: newStatus });
        console.log(`Booking ${bookingId} updated to status: ${newStatus}`);
      } catch (error) {
        handleAppwriteError(error, "Error updating booking status:");
      } finally {
        setAdminLoading(false);
      }
    };
    const deleteBooking = async (bookingId) => {
      if (!database || !isAuthReady || !APPWRITE_BOOKINGS_COLLECTION_ID) {
        setAdminError("Application not ready or Booking collection not configured.");
        return;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.deleteDocument(APPWRITE_DATABASE_ID, APPWRITE_BOOKINGS_COLLECTION_ID, bookingId);
        console.log(`Booking ${bookingId} deleted.`);
      } catch (error) {
        handleAppwriteError(error, "Error deleting booking:");
      } finally {
        setAdminLoading(false);
      }
    };
    const addProduct = async (productData) => {
      if (!database || !isAuthReady || !APPWRITE_PRODUCTS_COLLECTION_ID) {
        setAdminError("Products collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.createDocument(APPWRITE_DATABASE_ID, APPWRITE_PRODUCTS_COLLECTION_ID, ID2.unique(), productData);
        console.log("Product added successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error adding product:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const updateProduct = async (productId, productData) => {
      if (!database || !isAuthReady || !APPWRITE_PRODUCTS_COLLECTION_ID) {
        setAdminError("Products collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_PRODUCTS_COLLECTION_ID, productId, productData);
        console.log("Product updated successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error updating product:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const deleteProduct = async (productId) => {
      if (!database || !isAuthReady || !APPWRITE_PRODUCTS_COLLECTION_ID) {
        setAdminError("Products collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.deleteDocument(APPWRITE_DATABASE_ID, APPWRITE_PRODUCTS_COLLECTION_ID, productId);
        console.log("Product deleted successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error deleting product:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const addService = async (serviceData) => {
      if (!database || !isAuthReady || !APPWRITE_SERVICES_COLLECTION_ID) {
        setAdminError("Services collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.createDocument(APPWRITE_DATABASE_ID, APPWRITE_SERVICES_COLLECTION_ID, ID2.unique(), serviceData);
        console.log("Service added successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error adding service:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const updateService = async (serviceId, serviceData) => {
      if (!database || !isAuthReady || !APPWRITE_SERVICES_COLLECTION_ID) {
        setAdminError("Services collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_SERVICES_COLLECTION_ID, serviceId, serviceData);
        console.log("Service updated successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error updating service:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const deleteService = async (serviceId) => {
      if (!database || !isAuthReady || !APPWRITE_SERVICES_COLLECTION_ID) {
        setAdminError("Services collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.deleteDocument(APPWRITE_DATABASE_ID, APPWRITE_SERVICES_COLLECTION_ID, serviceId);
        console.log("Service deleted successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error deleting service:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const addStaff = async (staffData) => {
      if (!database || !isAuthReady || !APPWRITE_STAFF_COLLECTION_ID) {
        setAdminError("Staff collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.createDocument(APPWRITE_DATABASE_ID, APPWRITE_STAFF_COLLECTION_ID, ID2.unique(), staffData);
        console.log("Staff member added successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error adding staff:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const updateStaff = async (staffId, staffData) => {
      if (!database || !isAuthReady || !APPWRITE_STAFF_COLLECTION_ID) {
        setAdminError("Staff collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_STAFF_COLLECTION_ID, staffId, staffData);
        console.log("Staff member updated successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error updating staff:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    const deleteStaff = async (staffId) => {
      if (!database || !isAuthReady || !APPWRITE_STAFF_COLLECTION_ID) {
        setAdminError("Staff collection not configured.");
        return false;
      }
      setAdminLoading(true);
      setAdminError(null);
      try {
        await database.deleteDocument(APPWRITE_DATABASE_ID, APPWRITE_STAFF_COLLECTION_ID, staffId);
        console.log("Staff member deleted successfully!");
        return true;
      } catch (error) {
        handleAppwriteError(error, "Error deleting staff:");
        return false;
      } finally {
        setAdminLoading(false);
      }
    };
    (0, import_react29.useEffect)(() => {
      if (isAuthReady && database && client) {
        fetchAllServices();
        fetchAllStaff();
        fetchAllBookings();
        fetchAllProducts();
        fetchAllUsers();
        fetchAllOrders();
        const unsubscribeBookings = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_BOOKINGS_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_BOOKINGS_COLLECTION_ID}.documents.`))) {
              fetchAllBookings();
            }
          }
        );
        const unsubscribeProducts = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_PRODUCTS_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_PRODUCTS_COLLECTION_ID}.documents.`))) {
              fetchAllProducts();
            }
          }
        );
        const unsubscribeServices = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_SERVICES_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_SERVICES_COLLECTION_ID}.documents.`))) {
              fetchAllServices();
            }
          }
        );
        const unsubscribeStaff = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_STAFF_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_STAFF_COLLECTION_ID}.documents.`))) {
              fetchAllStaff();
            }
          }
        );
        const unsubscribeUsers = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_USERS_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_USERS_COLLECTION_ID}.documents.`))) {
              fetchAllUsers();
            }
          }
        );
        const unsubscribeOrders = client.subscribe(
          `databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_ORDERS_COLLECTION_ID}.documents`,
          (response) => {
            if (response.events.some((event) => event.startsWith(`databases.${APPWRITE_DATABASE_ID}.collections.${APPWRITE_ORDERS_COLLECTION_ID}.documents.`))) {
              fetchAllOrders();
            }
          }
        );
        return () => {
          unsubscribeBookings();
          unsubscribeProducts();
          unsubscribeServices();
          unsubscribeStaff();
          unsubscribeUsers();
          unsubscribeOrders();
        };
      }
    }, [
      isAuthReady,
      database,
      client,
      fetchAllBookings,
      fetchAllProducts,
      fetchAllServices,
      fetchAllStaff,
      fetchAllUsers,
      fetchAllOrders,
      APPWRITE_BOOKINGS_COLLECTION_ID,
      APPWRITE_PRODUCTS_COLLECTION_ID,
      APPWRITE_SERVICES_COLLECTION_ID,
      APPWRITE_STAFF_COLLECTION_ID,
      APPWRITE_USERS_COLLECTION_ID,
      APPWRITE_ORDERS_COLLECTION_ID,
      APPWRITE_DATABASE_ID
    ]);
    const contextValue = {
      allBookings,
      allProducts,
      allServices,
      allStaff,
      allUsers,
      allOrders,
      // NEW: Include orders in context
      adminLoading,
      adminError,
      fetchAllBookings,
      fetchAllProducts,
      fetchAllServices,
      fetchAllStaff,
      fetchAllUsers,
      fetchAllOrders,
      // NEW: Include fetch function
      updateBookingStatus,
      deleteBooking,
      addProduct,
      updateProduct,
      deleteProduct,
      addService,
      updateService,
      deleteService,
      addStaff,
      updateStaff,
      deleteStaff
    };
    return /* @__PURE__ */ import_react29.default.createElement(AdminContext.Provider, { value: contextValue }, children);
  };

  // src/App.js
  init_useAppwrite();

  // src/components/PrivateRoute.js
  init_AuthContext();
  var PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? /* @__PURE__ */ React.createElement(Outlet, null) : /* @__PURE__ */ React.createElement(Navigate, { to: "/login" });
  };
  var PrivateRoute_default = PrivateRoute;

  // src/App.js
  var import_react31 = __toESM(require_react());
  var HomePage = (0, import_react31.lazy)(() => Promise.resolve().then(() => __toESM(require_HomePage())));
  var Dashboard = (0, import_react31.lazy)(() => Promise.resolve().then(() => (init_UserDashboardView(), UserDashboardView_exports)));
  /* @__PURE__ */ import_react30.default.createElement(import_react31.Suspense, { fallback: /* @__PURE__ */ import_react30.default.createElement("div", null, "Loading...") }, /* @__PURE__ */ import_react30.default.createElement(Routes, null, /* @__PURE__ */ import_react30.default.createElement(Route, { path: "/", element: /* @__PURE__ */ import_react30.default.createElement(HomePage, null) }), "``", /* @__PURE__ */ import_react30.default.createElement(Route, { element: /* @__PURE__ */ import_react30.default.createElement(PrivateRoute_default, null) }), "``", /* @__PURE__ */ import_react30.default.createElement(Route, { path: "/dashboard", element: /* @__PURE__ */ import_react30.default.createElement(Dashboard, null) }), /* @__PURE__ */ import_react30.default.createElement(Route, { path: "/settings", element: /* @__PURE__ */ import_react30.default.createElement(Settings, null) })));
  var AppContent = () => {
    const { currentUser, isAuthReady } = useAuth();
    const { cartItemCount, showCartModal, setShowCartModal } = useCart();
    const { services, selectedService, setSelectedService, selectedStaff, selectedDate, selectedTime, bookService } = useBooking();
    const [view, setView2] = (0, import_react30.useState)("home");
    const [showAuthModal, setShowAuthModal] = (0, import_react30.useState)(false);
    const [serviceToPayDeposit, setServiceToPayDeposit] = (0, import_react30.useState)(null);
    const [depositAmount, setDepositAmount] = (0, import_react30.useState)(0);
    const handleSignOut = async () => {
      try {
        showMessage_default("Logged out successfully.", "success");
        setView2("home");
      } catch (error) {
        console.error("Error signing out:", error);
        showMessage_default("Failed to log out.", "error");
      }
    };
    const handlePaymentSuccessAndFinalizeBooking = async () => {
      if (!selectedService || !selectedStaff || !selectedDate || !selectedTime) {
        showMessage_default("Booking details missing. Cannot finalize booking.", "error");
        setView2("booking");
        return;
      }
      const dateTime = /* @__PURE__ */ new Date(`${selectedDate}T${selectedTime}`);
      const success = await bookService(selectedService, selectedStaff, dateTime);
      if (success) {
        setSelectedService("");
        setSelectedStaff("");
        setSelectedDate("");
        setSelectedTime("");
        setServiceToPayDeposit(null);
        setDepositAmount(0);
        setView2("dashboard");
      } else {
        showMessage_default("Booking could not be finalized after payment. Please contact support.", "error");
      }
    };
    const renderView = () => {
      switch (view) {
        case "home":
          return /* @__PURE__ */ import_react30.default.createElement(HeroSection_default, { setView: setView2 });
        // HeroSection needs setView to navigate
        case "services":
          return /* @__PURE__ */ import_react30.default.createElement(ServicesView_default, { setView: setView2 });
        case "products":
          return /* @__PURE__ */ import_react30.default.createElement(ProductsView_default, { setView: setView2 });
        case "booking":
          return /* @__PURE__ */ import_react30.default.createElement(BookingView_default, { setView: setView2 });
        case "cart":
          return /* @__PURE__ */ import_react30.default.createElement(CartView_default, { setView: setView2 });
        case "checkout":
          return /* @__PURE__ */ import_react30.default.createElement(Checkout_default, { setView: setView2 });
        case "dashboard":
          return /* @__PURE__ */ import_react30.default.createElement(UserDashboardView_default, { setView: setView2 });
        case "payment":
          return /* @__PURE__ */ import_react30.default.createElement(
            PaymentView_default,
            {
              setView: setView2,
              serviceToBook: services.find((s2) => s2.id === selectedService),
              depositAmount: selectedService ? services.find((s2) => s2.id === selectedService)?.price * 0.1 : 0,
              onPaymentSuccess: handlePaymentSuccessAndFinalizeBooking
            }
          );
        case "contact":
          return /* @__PURE__ */ import_react30.default.createElement(ContactSection_default, null);
        default:
          return /* @__PURE__ */ import_react30.default.createElement("p", null, "Page Not Found");
      }
    };
    (0, import_react30.useEffect)(() => {
      if (isAuthReady && currentUser) {
        setShowAuthModal(false);
      }
    }, [currentUser, isAuthReady]);
    (0, import_react30.useEffect)(() => {
      if (isAuthReady && !currentUser && (view === "dashboard" || view === "checkout" || view === "payment")) {
        showMessage_default("Please log in to access this page.", "info");
        setView2("home");
      }
    }, [view, currentUser, isAuthReady, setView2]);
    return /* @__PURE__ */ import_react30.default.createElement("div", { className: "flex flex-col min-h-screen" }, /* @__PURE__ */ import_react30.default.createElement(
      Header_default,
      {
        cartItemCount,
        currentUser,
        onAuthClick: () => setShowAuthModal(true),
        onSignOut: handleSignOut,
        onCartClick: () => setView2("cart"),
        setView: setView2
      }
    ), /* @__PURE__ */ import_react30.default.createElement("main", { className: "flex-grow" }, renderView()), /* @__PURE__ */ import_react30.default.createElement(Footer_default, null), showAuthModal && /* @__PURE__ */ import_react30.default.createElement(
      AuthModal_default,
      {
        onClose: () => setShowAuthModal(false),
        onRegisterSuccess: () => {
          setView2("home");
          setShowAuthModal(false);
          showMessage_default("Registration successful! You are now logged in.", "success");
        },
        onLoginSuccess: () => {
          setView2("home");
          setShowAuthModal(false);
          showMessage_default("Login successful!", "success");
        }
      }
    ));
  };
  var App = () => {
    return /* @__PURE__ */ import_react30.default.createElement(AppwriteProvider, null, /* @__PURE__ */ import_react30.default.createElement(AuthProvider, null, /* @__PURE__ */ import_react30.default.createElement(BookingProvider, null, /* @__PURE__ */ import_react30.default.createElement(CartProvider, null, /* @__PURE__ */ import_react30.default.createElement(AdminProvider, null, /* @__PURE__ */ import_react30.default.createElement(BrowserRouter, { basename: "/bukibloomsite" }, /* @__PURE__ */ import_react30.default.createElement(AppContent, null)))))));
  };
  var App_default = App;

  // src/components/ErrorBoundary.js
  var import_react32 = __toESM(require_react());
  var ErrorBoundary = class extends import_react32.default.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      console.error("Error caught by ErrorBoundary:", error, info);
    }
    render() {
      if (this.state.hasError) {
        return /* @__PURE__ */ import_react32.default.createElement("h1", null, "Something went wrong.");
      }
      return this.props.children;
    }
  };
  var ErrorBoundary_default = ErrorBoundary;

  // src/main.js
  init_AuthContext();
  init_useAppwrite();

  // src/context/ThemeContext.js
  var import_react33 = __toESM(require_react());
  var ThemeContext = (0, import_react33.createContext)();
  var ThemeProvider = ({ children }) => {
    const [theme, setTheme] = (0, import_react33.useState)("light");
    const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");
    return /* @__PURE__ */ React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
  };

  // src/main.js
  init_BookingContext();
  var rootElement = document.getElementById("root");
  if (false) {
    console.log("Running in development mode");
  }
  if (rootElement) {
    const root = import_client.default.createRoot(rootElement);
    root.render(
      /* @__PURE__ */ import_react34.default.createElement(import_react34.default.StrictMode, null, /* @__PURE__ */ import_react34.default.createElement(ErrorBoundary_default, null, /* @__PURE__ */ import_react34.default.createElement(AppwriteProvider, null, /* @__PURE__ */ import_react34.default.createElement(AuthProvider, null, /* @__PURE__ */ import_react34.default.createElement(ThemeProvider, null, /* @__PURE__ */ import_react34.default.createElement(BookingProvider, null, /* @__PURE__ */ import_react34.default.createElement(CartProvider, null, /* @__PURE__ */ import_react34.default.createElement(AdminProvider, null, /* @__PURE__ */ import_react34.default.createElement(BrowserRouter, { basename: "/bukibloomsite" }, /* @__PURE__ */ import_react34.default.createElement(App_default, null))))))))))
    );
  } else {
    console.error('Root element with ID "root" not found in the document.');
  }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/calendar-check.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-minus.js:
lucide-react/dist/esm/icons/circle-plus.js:
lucide-react/dist/esm/icons/circle-x.js:
lucide-react/dist/esm/icons/cloud-upload.js:
lucide-react/dist/esm/icons/credit-card.js:
lucide-react/dist/esm/icons/dollar-sign.js:
lucide-react/dist/esm/icons/facebook.js:
lucide-react/dist/esm/icons/house.js:
lucide-react/dist/esm/icons/image.js:
lucide-react/dist/esm/icons/instagram.js:
lucide-react/dist/esm/icons/layout-dashboard.js:
lucide-react/dist/esm/icons/log-in.js:
lucide-react/dist/esm/icons/log-out.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/package-check.js:
lucide-react/dist/esm/icons/package.js:
lucide-react/dist/esm/icons/shopping-cart.js:
lucide-react/dist/esm/icons/twitter.js:
lucide-react/dist/esm/icons/user-plus.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.542.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-PVWAREVJ.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.8.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@paypal/react-paypal-js/dist/esm/react-paypal-js.js:
  (*!
   * react-paypal-js v8.8.3 (2025-04-11T19:50:46.506Z)
   * Copyright 2020-present, PayPal, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
