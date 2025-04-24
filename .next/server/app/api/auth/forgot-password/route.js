"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/forgot-password/route";
exports.ids = ["app/api/auth/forgot-password/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_auth_forgot_password_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/forgot-password/route.ts */ \"(rsc)/./src/app/api/auth/forgot-password/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/forgot-password/route\",\n        pathname: \"/api/auth/forgot-password\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/forgot-password/route\"\n    },\n    resolvedPagePath: \"/Users/dominicmolina/Desktop/github/study-palz.github.io/src/app/api/auth/forgot-password/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_auth_forgot_password_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/forgot-password/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGZm9yZ290LXBhc3N3b3JkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGZm9yZ290LXBhc3N3b3JkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmZvcmdvdC1wYXNzd29yZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRvbWluaWNtb2xpbmElMkZEZXNrdG9wJTJGZ2l0aHViJTJGc3R1ZHktcGFsei5naXRodWIuaW8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZG9taW5pY21vbGluYSUyRkRlc2t0b3AlMkZnaXRodWIlMkZzdHVkeS1wYWx6LmdpdGh1Yi5pbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBwbGljYXRpb24tdGVtcGxhdGUtMS8/NTU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZG9taW5pY21vbGluYS9EZXNrdG9wL2dpdGh1Yi9zdHVkeS1wYWx6LmdpdGh1Yi5pby9zcmMvYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZG9taW5pY21vbGluYS9EZXNrdG9wL2dpdGh1Yi9zdHVkeS1wYWx6LmdpdGh1Yi5pby9zcmMvYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/forgot-password/route.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/forgot-password/route.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_addHours_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=addHours!=!date-fns */ \"(rsc)/./node_modules/date-fns/addHours.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const { email } = await req.json();\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user) {\n            const token = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(32).toString(\"hex\");\n            const expiresAt = (0,_barrel_optimize_names_addHours_date_fns__WEBPACK_IMPORTED_MODULE_4__.addHours)(new Date(), 1);\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.update({\n                where: {\n                    email\n                },\n                data: {\n                    resetToken: token,\n                    resetTokenExpiresAt: expiresAt\n                }\n            });\n            const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3__.createTransport({\n                host: process.env.SMTP_HOST,\n                port: +(process.env.SMTP_PORT ?? 587),\n                auth: {\n                    user: process.env.SMTP_USER,\n                    pass: process.env.SMTP_PASS\n                }\n            });\n            const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;\n            await transporter.sendMail({\n                to: email,\n                from: process.env.SMTP_FROM,\n                subject: \"Study Palz Password Reset\",\n                html: `<p>Click <a href=\"${resetUrl}\">here</a> to reset your password. This link expires in 1 hour.</p>`\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: true\n        });\n    } catch (err) {\n        console.error(\"Forgot-password error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: false\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ047QUFDRDtBQUNFO0FBQ0Y7QUFFN0IsZUFBZUssS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBQ2hDLE1BQU1DLE9BQU8sTUFBTU4sK0NBQU1BLENBQUNNLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVKO1lBQU07UUFBRTtRQUU3RCxJQUFJRSxNQUFNO1lBQ1IsTUFBTUcsUUFBUVgsbURBQVdBLENBQUMsSUFBSVksUUFBUSxDQUFDO1lBQ3ZDLE1BQU1DLFlBQVlaLGtGQUFRQSxDQUFDLElBQUlhLFFBQVE7WUFFdkMsTUFBTVosK0NBQU1BLENBQUNNLElBQUksQ0FBQ08sTUFBTSxDQUFDO2dCQUN2QkwsT0FBTztvQkFBRUo7Z0JBQU07Z0JBQ2ZVLE1BQU07b0JBQUVDLFlBQVlOO29CQUFPTyxxQkFBcUJMO2dCQUFVO1lBQzVEO1lBRUEsTUFBTU0sY0FBY2hCLHVEQUEwQixDQUFDO2dCQUM3Q2tCLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztnQkFDM0JDLE1BQU0sQ0FBRUgsQ0FBQUEsUUFBUUMsR0FBRyxDQUFDRyxTQUFTLElBQUksR0FBRTtnQkFDbkNDLE1BQU07b0JBQ0puQixNQUFNYyxRQUFRQyxHQUFHLENBQUNLLFNBQVM7b0JBQzNCQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLFNBQVM7Z0JBQzdCO1lBQ0Y7WUFFQSxNQUFNQyxXQUFXLENBQUMsRUFBRVQsUUFBUUMsR0FBRyxDQUFDUyxZQUFZLENBQUMsMkJBQTJCLEVBQUVyQixNQUFNLENBQUM7WUFDakYsTUFBTVEsWUFBWWMsUUFBUSxDQUFDO2dCQUN6QkMsSUFBSTVCO2dCQUNKNkIsTUFBTWIsUUFBUUMsR0FBRyxDQUFDYSxTQUFTO2dCQUMzQkMsU0FBUztnQkFDVEMsTUFBTSxDQUFDLGtCQUFrQixFQUFFUCxTQUFTLG1FQUFtRSxDQUFDO1lBQzFHO1FBQ0Y7UUFFQSxPQUFPaEMscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFZ0MsSUFBSTtRQUFLO0lBQ3RDLEVBQUUsT0FBT0MsS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCRjtRQUN4QyxPQUFPekMscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFZ0MsSUFBSTtRQUFNLEdBQUc7WUFBRUksUUFBUTtRQUFJO0lBQ3hEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBwbGljYXRpb24tdGVtcGxhdGUtMS8uL3NyYy9hcHAvYXBpL2F1dGgvZm9yZ290LXBhc3N3b3JkL3JvdXRlLnRzPzkxNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgYWRkSG91cnMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gcmFuZG9tQnl0ZXMoMzIpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGFkZEhvdXJzKG5ldyBEYXRlKCksIDEpO1xuXG4gICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgICAgICBkYXRhOiB7IHJlc2V0VG9rZW46IHRva2VuLCByZXNldFRva2VuRXhwaXJlc0F0OiBleHBpcmVzQXQgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuU01UUF9IT1NULFxuICAgICAgICBwb3J0OiArKHByb2Nlc3MuZW52LlNNVFBfUE9SVCA/PyA1ODcpLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU01UUF9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNNVFBfUEFTUyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNldFVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTH0vYXV0aC9yZXNldC1wYXNzd29yZD90b2tlbj0ke3Rva2VufWA7XG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgIHRvOiBlbWFpbCxcbiAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuU01UUF9GUk9NLFxuICAgICAgICBzdWJqZWN0OiAnU3R1ZHkgUGFseiBQYXNzd29yZCBSZXNldCcsXG4gICAgICAgIGh0bWw6IGA8cD5DbGljayA8YSBocmVmPVwiJHtyZXNldFVybH1cIj5oZXJlPC9hPiB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGlzIGxpbmsgZXhwaXJlcyBpbiAxIGhvdXIuPC9wPmAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRm9yZ290LXBhc3N3b3JkIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IGZhbHNlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJyYW5kb21CeXRlcyIsImFkZEhvdXJzIiwicHJpc21hIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXEiLCJlbWFpbCIsImpzb24iLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidG9rZW4iLCJ0b1N0cmluZyIsImV4cGlyZXNBdCIsIkRhdGUiLCJ1cGRhdGUiLCJkYXRhIiwicmVzZXRUb2tlbiIsInJlc2V0VG9rZW5FeHBpcmVzQXQiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiU01UUF9IT1NUIiwicG9ydCIsIlNNVFBfUE9SVCIsImF1dGgiLCJTTVRQX1VTRVIiLCJwYXNzIiwiU01UUF9QQVNTIiwicmVzZXRVcmwiLCJORVhUQVVUSF9VUkwiLCJzZW5kTWFpbCIsInRvIiwiZnJvbSIsIlNNVFBfRlJPTSIsInN1YmplY3QiLCJodG1sIiwib2siLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/forgot-password/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\nprocess.on(\"SIGINT\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\nprocess.on(\"SIGTERM\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFDdkMsSUFBSUgsd0RBQVlBLENBQUM7SUFDbEJJLEtBQUs7UUFBQztLQUFRO0FBQ2hCLEdBQUc7QUFFTCxJQUFJQyxJQUF5QixFQUFjSixnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEVFLFFBQVFDLEVBQUUsQ0FBQyxVQUFVO0lBQ25CLE1BQU1ILE9BQU9JLFdBQVc7SUFDeEJGLFFBQVFHLElBQUksQ0FBQztBQUNmO0FBRUFILFFBQVFDLEVBQUUsQ0FBQyxXQUFXO0lBQ3BCLE1BQU1ILE9BQU9JLFdBQVc7SUFDeEJGLFFBQVFHLElBQUksQ0FBQztBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcGxpY2F0aW9uLXRlbXBsYXRlLTEvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYVxuICA/PyBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICBwcm9jZXNzLmV4aXQoMCk7XG59KTtcblxucHJvY2Vzcy5vbignU0lHVEVSTScsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIHByb2Nlc3MuZXhpdCgwKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIiwib24iLCIkZGlzY29ubmVjdCIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/date-fns"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();