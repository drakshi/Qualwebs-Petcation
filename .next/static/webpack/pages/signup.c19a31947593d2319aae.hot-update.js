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
    alert("Logged in successfully welcome See console for full profile object."); // setSuccess(false)

    success === true && router.push({
      pathname: '/'
    });
  };

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var navigate = function navigate() {
    success === true && router.push('/');
  };

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
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row social-icns",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-auto my-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "social-img",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 35
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                    src: "images/facebook.png",
                    className: "img-fluid"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 35
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col pl-0 my-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
                className: "mb-0",
                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.ContinuewithFacebook
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    },
    autoLoad: true,
    fields: "name,email,picture",
    callback: onSuccess,
    onFailure: onFailure
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmMxOWEzMTk0NzU5M2QyMzE5YWFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUN6QyxrQkFBOEJMLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCRixJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBRUFHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDRixHQUEzQztBQUNBRyxJQUFBQSxLQUFLLHVFQUFMLENBSnNCLENBT3ZCOztBQUNDTixJQUFBQSxPQUFPLEtBQUssSUFBWixJQUFvQk8sTUFBTSxDQUFDQyxJQUFQLENBQVk7QUFBQ0MsTUFBQUEsUUFBUSxFQUFDO0FBQVYsS0FBWixDQUFwQjtBQUVILEdBVkQ7O0FBWUEsTUFBTUYsTUFBTSxHQUFHVixzREFBUyxFQUF4Qjs7QUFFQSxNQUFNYSxRQUFRLEdBQUUsU0FBVkEsUUFBVSxHQUFJO0FBQ2hCVixJQUFBQSxPQUFPLEtBQUssSUFBWixJQUFvQk8sTUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFwQjtBQUNILEdBRkQ7O0FBR0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1IsR0FBRCxFQUFTO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsR0FBbEM7QUFDQUYsSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsTUFBTVcsS0FBSyxHQUFHLGtCQUFkO0FBQ0Esc0JBQ0ksOERBQUMsOEZBQUQ7QUFDSSxTQUFLLEVBQUVBLEtBRFgsQ0FDa0I7QUFEbEI7QUFFSSxVQUFNLEVBQUUsZ0JBQUFDLFdBQVc7QUFBQSwwQkFDZjtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBbUQsZUFBTyxFQUFFQSxXQUFXLENBQUNDLE9BQXhFO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNJO0FBQUcsa0JBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxzQ0FDSTtBQUFHLG9CQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLFlBQWY7QUFBQSx3Q0FDRTtBQUFHLHNCQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSx5Q0FDRTtBQUNFLHVCQUFHLEVBQUMscUJBRE47QUFFRSw2QkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQWNJO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHFDQUNJO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUEsMEJBQ0dsQiw4RUFBNEJtQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FGdkI7QUE4QkksWUFBUSxFQUFFLElBOUJkO0FBK0JJLFVBQU0sRUFBQyxvQkEvQlg7QUFnQ0ksWUFBUSxFQUFFYixTQWhDZDtBQWlDSSxhQUFTLEVBQUVTO0FBakNmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0E5RHVCYjtVQWNMRDs7O0tBZEtDO0FBK0R4QjtBQUFDO0FBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ZhY2Vib29rTG9naW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi1yZW5kZXItcHJvcHMnXHJcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vcHVibGljL2xhbmcvU3RyaW5nc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5GYWNlYm9vayhwcm9wcykge1xyXG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25TdWNjZXNzPSAocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIFN1Y2Nlc3M6IGN1cnJlbnRVc2VyOicsIHJlcyk7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgIGBMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5IHdlbGNvbWUgU2VlIGNvbnNvbGUgZm9yIGZ1bGwgcHJvZmlsZSBvYmplY3QuYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAvLyBzZXRTdWNjZXNzKGZhbHNlKVxyXG4gICAgICAgIHN1Y2Nlc3MgPT09IHRydWUgJiYgcm91dGVyLnB1c2goe3BhdGhuYW1lOicvJ30pXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9KCk9PntcclxuICAgICAgICBzdWNjZXNzID09PSB0cnVlICYmIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkOiByZXM6JywgcmVzKTtcclxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcHBJZCA9IFwiNTU1NzAxMDM1MDk3Njk5OVwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmFjZWJvb2tMb2dpblxyXG4gICAgICAgICAgICBhcHBJZD17YXBwSWR9IC8vIHdlIGNyZWF0ZWQgdGhpcywgcmVtZW1iZXI/XHJcbiAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzb2NpYWwtaWNuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwbC0wIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuQ29udGludWV3aXRoRmFjZWJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgY2FsbGJhY2s9e29uU3VjY2Vzc31cclxuICAgICAgICAgICAgb25GYWlsdXJlPXtvbkZhaWx1cmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxufVxyXG57LypvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfSovfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhY2Vib29rTG9naW4iLCJzdHJpbmdzIiwidXNlUm91dGVyIiwiTG9naW5GYWNlYm9vayIsInByb3BzIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJvblN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJyb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJuYXZpZ2F0ZSIsIm9uRmFpbHVyZSIsImFwcElkIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiQ29udGludWV3aXRoRmFjZWJvb2siXSwic291cmNlUm9vdCI6IiJ9