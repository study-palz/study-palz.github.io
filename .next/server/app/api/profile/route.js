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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.ts */ \"(rsc)/./src/app/api/profile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"/Users/dominicmolina/Desktop/github/study-palz.github.io/src/app/api/profile/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRvbWluaWNtb2xpbmElMkZEZXNrdG9wJTJGZ2l0aHViJTJGc3R1ZHktcGFsei5naXRodWIuaW8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZG9taW5pY21vbGluYSUyRkRlc2t0b3AlMkZnaXRodWIlMkZzdHVkeS1wYWx6LmdpdGh1Yi5pbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvPzNlNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2RvbWluaWNtb2xpbmEvRGVza3RvcC9naXRodWIvc3R1ZHktcGFsei5naXRodWIuaW8vc3JjL2FwcC9hcGkvcHJvZmlsZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZmlsZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2ZpbGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2ZpbGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZG9taW5pY21vbGluYS9EZXNrdG9wL2dpdGh1Yi9zdHVkeS1wYWx6LmdpdGh1Yi5pby9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9maWxlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./src/lib/authOptions.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n// app/api/profile/route.ts\n\n\n\n\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)({\n        req,\n        ..._lib_authOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    if (!session || !session.user?.email) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"User not found\"\n        }, {\n            status: 404\n        });\n    }\n    const profile = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.userProfile.findUnique({\n        where: {\n            userId: user.id\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(profile);\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)({\n        req,\n        ..._lib_authOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    if (!session || !session.user?.email) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"User not found\"\n        }, {\n            status: 404\n        });\n    }\n    const { firstName, lastName, profileImage, coursesTaken, coursesHelped } = await req.json();\n    const profile = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.userProfile.upsert({\n        where: {\n            userId: user.id\n        },\n        update: {\n            firstName,\n            lastName,\n            profileImage,\n            coursesTaken,\n            coursesHelped\n        },\n        create: {\n            userId: user.id,\n            firstName,\n            lastName,\n            profileImage,\n            coursesTaken,\n            coursesHelped\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(profile);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkI7QUFDZ0I7QUFDRTtBQUNEO0FBQ047QUFHL0IsZUFBZUksSUFBSUMsR0FBZ0I7SUFDeEMsTUFBTUMsVUFBVSxNQUFNTCwyREFBZ0JBLENBQUM7UUFBRUk7UUFBSyxHQUFHSCx3REFBVztJQUFDO0lBRTdELElBQUksQ0FBQ0ksV0FBVyxDQUFDQSxRQUFRQyxJQUFJLEVBQUVDLE9BQU87UUFDcEMsT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxNQUFNSixPQUFPLE1BQU1KLCtDQUFNQSxDQUFDSSxJQUFJLENBQUNLLFVBQVUsQ0FBQztRQUN4Q0MsT0FBTztZQUFFTCxPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7UUFBQztJQUNyQztJQUVBLElBQUksQ0FBQ0QsTUFBTTtRQUNULE9BQU9QLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFpQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN0RTtJQUVBLE1BQU1HLFVBQVUsTUFBTVgsK0NBQU1BLENBQUNZLFdBQVcsQ0FBQ0gsVUFBVSxDQUFDO1FBQ2xEQyxPQUFPO1lBQUVHLFFBQVFULEtBQUtVLEVBQUU7UUFBQztJQUMzQjtJQUVBLE9BQU9qQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDSztBQUMzQjtBQUVPLGVBQWVJLEtBQUtiLEdBQWdCO0lBQ3pDLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDO1FBQUVJO1FBQUssR0FBR0gsd0RBQVc7SUFBQztJQUU3RCxJQUFJLENBQUNJLFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxFQUFFQyxPQUFPO1FBQ3BDLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTUosT0FBTyxNQUFNSiwrQ0FBTUEsQ0FBQ0ksSUFBSSxDQUFDSyxVQUFVLENBQUM7UUFDeENDLE9BQU87WUFBRUwsT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQUM7SUFDckM7SUFFQSxJQUFJLENBQUNELE1BQU07UUFDVCxPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEU7SUFFQSxNQUFNLEVBQUVRLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFLEdBQUcsTUFBTWxCLElBQUlJLElBQUk7SUFFekYsTUFBTUssVUFBVSxNQUFNWCwrQ0FBTUEsQ0FBQ1ksV0FBVyxDQUFDUyxNQUFNLENBQUM7UUFDOUNYLE9BQU87WUFBRUcsUUFBUVQsS0FBS1UsRUFBRTtRQUFDO1FBQ3pCUSxRQUFRO1lBQ05OO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFDQUcsUUFBUTtZQUNOVixRQUFRVCxLQUFLVSxFQUFFO1lBQ2ZFO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7SUFDRjtJQUVBLE9BQU92QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDSztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5cGFsei1hcHBsaWNhdGlvbi10ZW1wbGF0ZS8uL3NyYy9hcHAvYXBpL3Byb2ZpbGUvcm91dGUudHM/ZmI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL3Byb2ZpbGUvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IGF1dGhPcHRpb25zIGZyb20gJ0AvbGliL2F1dGhPcHRpb25zJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHsgcmVxLCAuLi5hdXRoT3B0aW9ucyB9KTtcblxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcj8uZW1haWwpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXG4gIH0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnVzZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZmlsZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oeyByZXEsIC4uLmF1dGhPcHRpb25zIH0pO1xuXG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyPy5lbWFpbCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcHJvZmlsZUltYWdlLCBjb3Vyc2VzVGFrZW4sIGNvdXJzZXNIZWxwZWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHByaXNtYS51c2VyUHJvZmlsZS51cHNlcnQoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxuICAgIHVwZGF0ZToge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICBwcm9maWxlSW1hZ2UsXG4gICAgICBjb3Vyc2VzVGFrZW4sXG4gICAgICBjb3Vyc2VzSGVscGVkLFxuICAgIH0sXG4gICAgY3JlYXRlOiB7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHByb2ZpbGVJbWFnZSxcbiAgICAgIGNvdXJzZXNUYWtlbixcbiAgICAgIGNvdXJzZXNIZWxwZWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2ZpbGUpO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJHRVQiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicHJvZmlsZSIsInVzZXJQcm9maWxlIiwidXNlcklkIiwiaWQiLCJQT1NUIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwcm9maWxlSW1hZ2UiLCJjb3Vyc2VzVGFrZW4iLCJjb3Vyc2VzSGVscGVkIiwidXBzZXJ0IiwidXBkYXRlIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/authOptions.ts":
/*!********************************!*\
  !*** ./src/lib/authOptions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* eslint-disable arrow-body-style */ \n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Email and Password\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"john@foo.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.compare)(credentials.password, user.password);\n                if (!isPasswordValid) return null;\n                return {\n                    id: `${user.id}`,\n                    email: user.email,\n                    randomKey: user.role\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\"\n    },\n    callbacks: {\n        session: ({ session, token })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    randomKey: token.randomKey\n                }\n            }),\n        jwt: ({ token, user })=>{\n            if (user) {\n                const u = user;\n                return {\n                    ...token,\n                    id: u.id,\n                    randomKey: u.randomKey\n                };\n            }\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGhPcHRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFtQyxHQUNGO0FBRWlDO0FBQzVCO0FBRS9CLE1BQU1HLGNBQStCO0lBQzFDQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUUzQkMsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBWUMsYUFBYTtnQkFBZTtnQkFDN0VDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsWUFBWUssUUFBUSxFQUFFLE9BQU87Z0JBRXpELE1BQU1FLE9BQU8sTUFBTWIsK0NBQU1BLENBQUNhLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFBRVIsT0FBT0QsWUFBWUMsS0FBSztvQkFBQztnQkFDcEM7Z0JBQ0EsSUFBSSxDQUFDTSxNQUFNLE9BQU87Z0JBRWxCLE1BQU1HLGtCQUFrQixNQUFNbEIsK0NBQU9BLENBQUNRLFlBQVlLLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDekUsSUFBSSxDQUFDSyxpQkFBaUIsT0FBTztnQkFFN0IsT0FBTztvQkFDTEMsSUFBSSxDQUFDLEVBQUVKLEtBQUtJLEVBQUUsQ0FBQyxDQUFDO29CQUNoQlYsT0FBT00sS0FBS04sS0FBSztvQkFDakJXLFdBQVdMLEtBQUtNLElBQUk7Z0JBQ3RCO1lBQ0Y7UUFDRjtLQUNEO0lBRURDLE9BQU87UUFDTEMsUUFBUztRQUNUQyxTQUFTO0lBQ1g7SUFFQUMsV0FBVztRQUNUckIsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRXNCLEtBQUssRUFBRSxHQUFNO2dCQUNoQyxHQUFHdEIsT0FBTztnQkFDVlcsTUFBTTtvQkFDSixHQUFHWCxRQUFRVyxJQUFJO29CQUNmSSxJQUFXTyxNQUFNUCxFQUFFO29CQUNuQkMsV0FBV00sTUFBTU4sU0FBUztnQkFDNUI7WUFDRjtRQUVBTyxLQUFLLENBQUMsRUFBRUQsS0FBSyxFQUFFWCxJQUFJLEVBQUU7WUFDbkIsSUFBSUEsTUFBTTtnQkFDUixNQUFNYSxJQUFJYjtnQkFDVixPQUFPO29CQUFFLEdBQUdXLEtBQUs7b0JBQUVQLElBQUlTLEVBQUVULEVBQUU7b0JBQUVDLFdBQVdRLEVBQUVSLFNBQVM7Z0JBQUM7WUFDdEQ7WUFDQSxPQUFPTTtRQUNUO0lBQ0Y7SUFFQUcsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixpRUFBZTdCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvLi9zcmMvbGliL2F1dGhPcHRpb25zLnRzP2MzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0VtYWlsIGFuZCBQYXNzd29yZCcsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogICAgeyBsYWJlbDogJ0VtYWlsJywgICAgdHlwZTogJ2VtYWlsJywgICAgcGxhY2Vob2xkZXI6ICdqb2huQGZvby5jb20nIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscy5wYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGAke3VzZXIuaWR9YCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICByYW5kb21LZXk6IHVzZXIucm9sZSwgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICAnL2F1dGgvc2lnbmluJyxcbiAgICBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCcsXG4gIH0sXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4gKHtcbiAgICAgIC4uLnNlc3Npb24sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgaWQ6ICAgICAgICB0b2tlbi5pZCxcbiAgICAgICAgcmFuZG9tS2V5OiB0b2tlbi5yYW5kb21LZXksXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgand0OiAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zdCB1ID0gdXNlciBhcyBhbnk7XG4gICAgICAgIHJldHVybiB7IC4uLnRva2VuLCBpZDogdS5pZCwgcmFuZG9tS2V5OiB1LnJhbmRvbUtleSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gIH0sXG5cbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoT3B0aW9ucztcbiJdLCJuYW1lcyI6WyJjb21wYXJlIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzUGFzc3dvcmRWYWxpZCIsImlkIiwicmFuZG9tS2V5Iiwicm9sZSIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImNhbGxiYWNrcyIsInRva2VuIiwiand0IiwidSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ],\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL + \"?pgbouncer=true\"\n        }\n    }\n});\nif (true) globalForPrisma.prisma = prisma;\nprocess.on(\"SIGINT\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\nprocess.on(\"SIGTERM\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFHOUMsTUFBTUMsa0JBQWtCQztBQUl4QixNQUFNQyxTQUNKRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7SUFDZEMsYUFBYTtRQUNYQyxJQUFJO1lBQ0ZDLEtBQUtDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHO1FBQ2xDO0lBQ0Y7QUFDRjtBQUVGLElBQUlGLElBQXlCLEVBQWNQLGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRUssUUFBUUcsRUFBRSxDQUFDLFVBQVU7SUFDbkIsTUFBTVIsT0FBT1MsV0FBVztJQUN4QkosUUFBUUssSUFBSSxDQUFDO0FBQ2Y7QUFFQUwsUUFBUUcsRUFBRSxDQUFDLFdBQVc7SUFDcEIsTUFBTVIsT0FBT1MsV0FBVztJQUN4QkosUUFBUUssSUFBSSxDQUFDO0FBQ2Y7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufTtcblxuY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgICBkYXRhc291cmNlczoge1xuICAgICAgZGI6IHtcbiAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgKyAnP3BnYm91bmNlcj10cnVlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICBwcm9jZXNzLmV4aXQoMCk7XG59KTtcblxucHJvY2Vzcy5vbignU0lHVEVSTScsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIHByb2Nlc3MuZXhpdCgwKTtcbn0pO1xuXG5leHBvcnQgeyBwcmlzbWEgfTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwiZGF0YXNvdXJjZXMiLCJkYiIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJvbiIsIiRkaXNjb25uZWN0IiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();