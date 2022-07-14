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
    alert("Logged in successfully".concat(name, " welcome See console for full profile object.")); // setSuccess(false)

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
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row social-icns",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-auto my-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "social-img",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 35
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                    src: "images/facebook.png",
                    className: "img-fluid"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 35
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col pl-0 my-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
                className: "mb-0",
                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.ContinuewithFacebook
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this);
    },
    autoLoad: true,
    fields: "name,email,picture",
    callback: onSuccess,
    onFailure: onFailure
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjMxNTJjNWE3MDU4NDgyNWRkNzE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUN6QyxrQkFBOEJMLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCRixJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBRUFHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDRixHQUEzQztBQUNBSCxJQUFBQSxPQUFPLEtBQUssSUFBWixJQUFvQk0sTUFBTSxDQUFDQyxJQUFQLENBQVk7QUFBQ0MsTUFBQUEsUUFBUSxFQUFDO0FBQVYsS0FBWixDQUFwQjtBQUVBQyxJQUFBQSxLQUFLLGlDQUN3QkMsSUFEeEIsbURBQUwsQ0FOc0IsQ0FTdkI7O0FBQ0NWLElBQUFBLE9BQU8sS0FBSyxJQUFaLElBQW9CTSxNQUFNLENBQUNDLElBQVAsQ0FBWTtBQUFDQyxNQUFBQSxRQUFRLEVBQUM7QUFBVixLQUFaLENBQXBCO0FBRUgsR0FaRDs7QUFjQSxNQUFNRixNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUVBLE1BQU1jLFFBQVEsR0FBRSxTQUFWQSxRQUFVLEdBQUk7QUFDaEJYLElBQUFBLE9BQU8sS0FBSyxJQUFaLElBQW9CTSxNQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQXBCO0FBQ0gsR0FGRDs7QUFHQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVCxHQUFELEVBQVM7QUFDdkJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixHQUFsQztBQUNBRixJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FIRDs7QUFLQSxNQUFNWSxLQUFLLEdBQUcsa0JBQWQ7QUFDQSxzQkFDSSw4REFBQyw4RkFBRDtBQUNJLFNBQUssRUFBRUEsS0FEWCxDQUNrQjtBQURsQjtBQUVJLFVBQU0sRUFBRSxnQkFBQUMsV0FBVztBQUFBLDBCQUNmO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFtRCxlQUFPLEVBQUVBLFdBQVcsQ0FBQ0MsT0FBeEU7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0NBQ0k7QUFBRyxrQkFBSSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNJO0FBQUcsb0JBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNFO0FBQUcsc0JBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLHlDQUNFO0FBQ0UsdUJBQUcsRUFBQyxxQkFETjtBQUVFLDZCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBY0k7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQ0k7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSwwQkFDR25CLDhFQUE0Qm9CO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGU7QUFBQSxLQUZ2QjtBQThCSSxZQUFRLEVBQUUsSUE5QmQ7QUErQkksVUFBTSxFQUFDLG9CQS9CWDtBQWdDSSxZQUFRLEVBQUVkLFNBaENkO0FBaUNJLGFBQVMsRUFBRVU7QUFqQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQWhFdUJkO1VBZ0JMRDs7O0tBaEJLQztBQWlFeEI7QUFBQztBQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9GYWNlYm9va0xvZ2luLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzJ1xyXG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRmFjZWJvb2socHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uU3VjY2Vzcz0gKHJlcykgPT4ge1xyXG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBTdWNjZXNzOiBjdXJyZW50VXNlcjonLCByZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3MgPT09IHRydWUgJiYgcm91dGVyLnB1c2goe3BhdGhuYW1lOicvJ30pXHJcblxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICBgTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSR7bmFtZX0gd2VsY29tZSBTZWUgY29uc29sZSBmb3IgZnVsbCBwcm9maWxlIG9iamVjdC5gXHJcbiAgICAgICAgKTtcclxuICAgICAgIC8vIHNldFN1Y2Nlc3MoZmFsc2UpXHJcbiAgICAgICAgc3VjY2VzcyA9PT0gdHJ1ZSAmJiByb3V0ZXIucHVzaCh7cGF0aG5hbWU6Jy8nfSlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRlID0oKT0+e1xyXG4gICAgICAgIHN1Y2Nlc3MgPT09IHRydWUgJiYgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25GYWlsdXJlID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQ6IHJlczonLCByZXMpO1xyXG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFwcElkID0gXCI1NTU3MDEwMzUwOTc2OTk5XCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgICAgIGFwcElkPXthcHBJZH0gLy8gd2UgY3JlYXRlZCB0aGlzLCByZW1lbWJlcj9cclxuICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCIgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNvY2lhbC1pY25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9mYWNlYm9vay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBsLTAgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5Db250aW51ZXdpdGhGYWNlYm9va31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgICAgICBjYWxsYmFjaz17b25TdWNjZXNzfVxyXG4gICAgICAgICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG59XHJcbnsvKm9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9Ki99XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFjZWJvb2tMb2dpbiIsInN0cmluZ3MiLCJ1c2VSb3V0ZXIiLCJMb2dpbkZhY2Vib29rIiwicHJvcHMiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIm9uU3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsIm5hbWUiLCJuYXZpZ2F0ZSIsIm9uRmFpbHVyZSIsImFwcElkIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiQ29udGludWV3aXRoRmFjZWJvb2siXSwic291cmNlUm9vdCI6IiJ9