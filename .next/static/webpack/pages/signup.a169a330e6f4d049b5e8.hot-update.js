"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/FacebookLogin.jsx":
/*!*********************************!*\
  !*** ./pages/FacebookLogin.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginFacebook; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\FacebookLogin.jsx",
    _s = $RefreshSig$();






function LoginFacebook(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      success = _useState[0],
      setSuccess = _useState[1];

  var onSuccess = function onSuccess(res) {
    setSuccess(true);
    console.log('Login Success: currentUser:', res);
    success === true && router.push({
      pathname: '/'
    });
    alert("Logged in successfully ".concat(res.name, " welcome See console for full profile object."));
    success === true && router.push({
      pathname: '/'
    });
  };

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var onFailure = function onFailure(res) {
    console.log('Login failed: res:', res);
    setSuccess(false);
  };

  var appId = "5557010350976999";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default()), {
    appId: appId // we created this, remember?
    ,
    render: function render(renderProps) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "col-12 col-md-6 col-lg-6 col-xl-6",
        onClick: renderProps.onClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "signup-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row social-icns",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-auto my-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "social-img",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 35
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                    src: "images/facebook.png",
                    className: "img-fluid"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 35
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col pl-0 my-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
                className: "mb-0",
                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.ContinuewithFacebook
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this);
    },
    autoLoad: true,
    fields: "name,email,picture",
    callback: onSuccess,
    onFailure: onFailure
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(LoginFacebook, "nVua9BXZVWUD5kg+WCFINqZJIDU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = LoginFacebook;
{
  /*onClick={renderProps.onClick}*/
}

var _c;

$RefreshReg$(_c, "LoginFacebook");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmExNjlhMzMwZTZmNGQwNDliNWU4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUN6QyxrQkFBOEJMLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCRixJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBRUFHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDRixHQUEzQztBQUNBSCxJQUFBQSxPQUFPLEtBQUssSUFBWixJQUFvQk0sTUFBTSxDQUFDQyxJQUFQLENBQVk7QUFBQ0MsTUFBQUEsUUFBUSxFQUFDO0FBQVYsS0FBWixDQUFwQjtBQUNBQyxJQUFBQSxLQUFLLGtDQUN5Qk4sR0FBRyxDQUFDTyxJQUQ3QixtREFBTDtBQUdBVixJQUFBQSxPQUFPLEtBQUssSUFBWixJQUFvQk0sTUFBTSxDQUFDQyxJQUFQLENBQVk7QUFBQ0MsTUFBQUEsUUFBUSxFQUFDO0FBQVYsS0FBWixDQUFwQjtBQUNILEdBVEQ7O0FBV0EsTUFBTUYsTUFBTSxHQUFHVCxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNYyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixHQUFELEVBQVM7QUFDdkJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixHQUFsQztBQUNBRixJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVyxLQUFLLEdBQUcsa0JBQWQ7QUFDQSxzQkFDSSw4REFBQyw4RkFBRDtBQUNJLFNBQUssRUFBRUEsS0FEWCxDQUNrQjtBQURsQjtBQUVJLFVBQU0sRUFBRSxnQkFBQUMsV0FBVztBQUFBLDBCQUNmO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFtRCxlQUFPLEVBQUVBLFdBQVcsQ0FBQ0MsT0FBeEU7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0NBQ0k7QUFBRyxrQkFBSSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNJO0FBQUcsb0JBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNFO0FBQUcsc0JBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLHlDQUNFO0FBQ0UsdUJBQUcsRUFBQyxxQkFETjtBQUVFLDZCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBY0k7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQ0k7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSwwQkFDR2xCLDhFQUE0Qm1CO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGU7QUFBQSxLQUZ2QjtBQThCSSxZQUFRLEVBQUUsSUE5QmQ7QUErQkksVUFBTSxFQUFDLG9CQS9CWDtBQWdDSSxZQUFRLEVBQUViLFNBaENkO0FBaUNJLGFBQVMsRUFBRVM7QUFqQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQTFEdUJiO1VBYUxEOzs7S0FiS0M7QUEyRHhCO0FBQUM7QUFBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRmFjZWJvb2tMb2dpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbi9kaXN0L2ZhY2Vib29rLWxvZ2luLXJlbmRlci1wcm9wcydcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZhY2Vib29rKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvblN1Y2Nlc3M9IChyZXMpID0+IHtcclxuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gU3VjY2VzczogY3VycmVudFVzZXI6JywgcmVzKTtcclxuICAgICAgICBzdWNjZXNzID09PSB0cnVlICYmIHJvdXRlci5wdXNoKHtwYXRobmFtZTonLyd9KVxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICBgTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSAke3Jlcy5uYW1lfSB3ZWxjb21lIFNlZSBjb25zb2xlIGZvciBmdWxsIHByb2ZpbGUgb2JqZWN0LmBcclxuICAgICAgICApO1xyXG4gICAgICAgIHN1Y2Nlc3MgPT09IHRydWUgJiYgcm91dGVyLnB1c2goe3BhdGhuYW1lOicvJ30pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkOiByZXM6JywgcmVzKTtcclxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcHBJZCA9IFwiNTU1NzAxMDM1MDk3Njk5OVwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmFjZWJvb2tMb2dpblxyXG4gICAgICAgICAgICBhcHBJZD17YXBwSWR9IC8vIHdlIGNyZWF0ZWQgdGhpcywgcmVtZW1iZXI/XHJcbiAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzb2NpYWwtaWNuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwbC0wIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuQ29udGludWV3aXRoRmFjZWJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgY2FsbGJhY2s9e29uU3VjY2Vzc31cclxuICAgICAgICAgICAgb25GYWlsdXJlPXtvbkZhaWx1cmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxufVxyXG57LypvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfSovfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhY2Vib29rTG9naW4iLCJzdHJpbmdzIiwidXNlUm91dGVyIiwiTG9naW5GYWNlYm9vayIsInByb3BzIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJvblN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJuYW1lIiwib25GYWlsdXJlIiwiYXBwSWQiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJDb250aW51ZXdpdGhGYWNlYm9vayJdLCJzb3VyY2VSb290IjoiIn0=