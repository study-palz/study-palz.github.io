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
exports.id = "app/api/courses/[code]/sessions/[sessionId]/join/route";
exports.ids = ["app/api/courses/[code]/sessions/[sessionId]/join/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute.ts&appDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute.ts&appDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_A_Documents_GitHub_study_palz_github_io_src_app_api_courses_code_sessions_sessionId_join_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts */ \"(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/courses/[code]/sessions/[sessionId]/join/route\",\n        pathname: \"/api/courses/[code]/sessions/[sessionId]/join\",\n        filename: \"route\",\n        bundlePath: \"app/api/courses/[code]/sessions/[sessionId]/join/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\A\\\\Documents\\\\GitHub\\\\study-palz.github.io\\\\src\\\\app\\\\api\\\\courses\\\\[code]\\\\sessions\\\\[sessionId]\\\\join\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_A_Documents_GitHub_study_palz_github_io_src_app_api_courses_code_sessions_sessionId_join_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/courses/[code]/sessions/[sessionId]/join/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2VzJTJGJTVCY29kZSU1RCUyRnNlc3Npb25zJTJGJTVCc2Vzc2lvbklkJTVEJTJGam9pbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY291cnNlcyUyRiU1QmNvZGUlNUQlMkZzZXNzaW9ucyUyRiU1QnNlc3Npb25JZCU1RCUyRmpvaW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjb3Vyc2VzJTJGJTVCY29kZSU1RCUyRnNlc3Npb25zJTJGJTVCc2Vzc2lvbklkJTVEJTJGam9pbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBJTVDRG9jdW1lbnRzJTVDR2l0SHViJTVDc3R1ZHktcGFsei5naXRodWIuaW8lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0ElNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNzdHVkeS1wYWx6LmdpdGh1Yi5pbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEU7QUFDeko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvPzkzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXHN0dWR5LXBhbHouZ2l0aHViLmlvXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvdXJzZXNcXFxcW2NvZGVdXFxcXHNlc3Npb25zXFxcXFtzZXNzaW9uSWRdXFxcXGpvaW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvdXJzZXMvW2NvZGVdL3Nlc3Npb25zL1tzZXNzaW9uSWRdL2pvaW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9qb2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9qb2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXHN0dWR5LXBhbHouZ2l0aHViLmlvXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvdXJzZXNcXFxcW2NvZGVdXFxcXHNlc3Npb25zXFxcXFtzZXNzaW9uSWRdXFxcXGpvaW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvdXJzZXMvW2NvZGVdL3Nlc3Npb25zL1tzZXNzaW9uSWRdL2pvaW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute.ts&appDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts":
/*!***********************************************************************!*\
  !*** ./src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./src/lib/authOptions.ts\");\n// src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts\n\n\n\n\nasync function POST(_req, { params }) {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const userId = Number(session.user.id);\n    const sid = Number(params.sessionId);\n    try {\n        // check if already joined\n        const already = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.studySession.findFirst({\n            where: {\n                id: sid,\n                attendees: {\n                    some: {\n                        id: userId\n                    }\n                }\n            }\n        });\n        if (already) {\n            // leave\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.studySession.update({\n                where: {\n                    id: sid\n                },\n                data: {\n                    attendees: {\n                        disconnect: {\n                            id: userId\n                        }\n                    }\n                }\n            });\n        } else {\n            // join\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.studySession.update({\n                where: {\n                    id: sid\n                },\n                data: {\n                    attendees: {\n                        connect: {\n                            id: userId\n                        }\n                    }\n                }\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            joined: !already\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9qb2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0VBQWdFO0FBQ3RCO0FBQ087QUFDWjtBQUNXO0FBQ3pDLGVBQWVJLEtBQ3BCQyxJQUFhLEVBQ2IsRUFBRUMsTUFBTSxFQUFtRDtJQUUzRCxNQUFNQyxVQUFVLE1BQU1OLGdFQUFnQkEsQ0FBQ0UseURBQVdBO0lBQ2xELElBQUksQ0FBQ0ksU0FBU0MsTUFBTUMsSUFBSTtRQUN0QixPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtJQUVBLE1BQU1DLFNBQVNDLE9BQU9QLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtJQUNyQyxNQUFNTSxNQUFTRCxPQUFPUixPQUFPVSxTQUFTO0lBRXRDLElBQUk7UUFDRiwwQkFBMEI7UUFDMUIsTUFBTUMsVUFBVSxNQUFNZiwrQ0FBTUEsQ0FBQ2dCLFlBQVksQ0FBQ0MsU0FBUyxDQUFDO1lBQ2xEQyxPQUFPO2dCQUFFWCxJQUFJTTtnQkFBS00sV0FBVztvQkFBRUMsTUFBTTt3QkFBRWIsSUFBSUk7b0JBQU87Z0JBQUU7WUFBRTtRQUN4RDtRQUVBLElBQUlJLFNBQVM7WUFDWCxRQUFRO1lBQ1IsTUFBTWYsK0NBQU1BLENBQUNnQixZQUFZLENBQUNLLE1BQU0sQ0FBQztnQkFDL0JILE9BQU87b0JBQUVYLElBQUlNO2dCQUFJO2dCQUNqQlMsTUFBTztvQkFBRUgsV0FBVzt3QkFBRUksWUFBWTs0QkFBRWhCLElBQUlJO3dCQUFPO29CQUFFO2dCQUFFO1lBQ3JEO1FBQ0YsT0FBTztZQUNMLE9BQU87WUFDUCxNQUFNWCwrQ0FBTUEsQ0FBQ2dCLFlBQVksQ0FBQ0ssTUFBTSxDQUFDO2dCQUMvQkgsT0FBTztvQkFBRVgsSUFBSU07Z0JBQUk7Z0JBQ2pCUyxNQUFPO29CQUFFSCxXQUFXO3dCQUFFSyxTQUFTOzRCQUFFakIsSUFBSUk7d0JBQU87b0JBQUU7Z0JBQUU7WUFDbEQ7UUFDRjtRQUVBLE9BQU9iLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRWlCLFFBQVEsQ0FBQ1Y7UUFBUTtJQUM5QyxFQUFFLE9BQU9XLEtBQVU7UUFDakJDLFFBQVFsQixLQUFLLENBQUNpQjtRQUNkLE9BQU81QixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU9pQixJQUFJRSxPQUFPO1FBQUMsR0FBRztZQUFFbEIsUUFBUTtRQUFJO0lBQ2pFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvLi9zcmMvYXBwL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9qb2luL3JvdXRlLnRzPzNlMGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvY291cnNlcy9bY29kZV0vc2Vzc2lvbnMvW3Nlc3Npb25JZF0vam9pbi9yb3V0ZS50c1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9uZXh0J1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aE9wdGlvbnMnO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcclxuICBfcmVxOiBSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGNvZGU6IHN0cmluZzsgc2Vzc2lvbklkOiBzdHJpbmcgfSB9XHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvbi51c2VyLmlkKVxyXG4gIGNvbnN0IHNpZCAgICA9IE51bWJlcihwYXJhbXMuc2Vzc2lvbklkKVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gY2hlY2sgaWYgYWxyZWFkeSBqb2luZWRcclxuICAgIGNvbnN0IGFscmVhZHkgPSBhd2FpdCBwcmlzbWEuc3R1ZHlTZXNzaW9uLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzaWQsIGF0dGVuZGVlczogeyBzb21lOiB7IGlkOiB1c2VySWQgfSB9IH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGFscmVhZHkpIHtcclxuICAgICAgLy8gbGVhdmVcclxuICAgICAgYXdhaXQgcHJpc21hLnN0dWR5U2Vzc2lvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBzaWQgfSxcclxuICAgICAgICBkYXRhOiAgeyBhdHRlbmRlZXM6IHsgZGlzY29ubmVjdDogeyBpZDogdXNlcklkIH0gfSB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBqb2luXHJcbiAgICAgIGF3YWl0IHByaXNtYS5zdHVkeVNlc3Npb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogc2lkIH0sXHJcbiAgICAgICAgZGF0YTogIHsgYXR0ZW5kZWVzOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXJJZCB9IH0gfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGpvaW5lZDogIWFscmVhZHkgfSlcclxuICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiUE9TVCIsIl9yZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwidXNlciIsImlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlcklkIiwiTnVtYmVyIiwic2lkIiwic2Vzc2lvbklkIiwiYWxyZWFkeSIsInN0dWR5U2Vzc2lvbiIsImZpbmRGaXJzdCIsIndoZXJlIiwiYXR0ZW5kZWVzIiwic29tZSIsInVwZGF0ZSIsImRhdGEiLCJkaXNjb25uZWN0IiwiY29ubmVjdCIsImpvaW5lZCIsImVyciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/join/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/authOptions.ts":
/*!********************************!*\
  !*** ./src/lib/authOptions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* eslint-disable arrow-body-style */ \n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Email and Password\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"john@foo.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.compare)(credentials.password, user.password);\n                if (!isPasswordValid) return null;\n                return {\n                    id: `${user.id}`,\n                    email: user.email,\n                    randomKey: user.role\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\"\n    },\n    callbacks: {\n        session: ({ session, token })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    randomKey: token.randomKey\n                }\n            }),\n        jwt: ({ token, user })=>{\n            if (user) {\n                const u = user;\n                return {\n                    ...token,\n                    id: u.id,\n                    randomKey: u.randomKey\n                };\n            }\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGhPcHRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFtQyxHQUNGO0FBRWlDO0FBQzVCO0FBRS9CLE1BQU1HLGNBQStCO0lBQzFDQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUUzQkMsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBWUMsYUFBYTtnQkFBZTtnQkFDN0VDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsWUFBWUssUUFBUSxFQUFFLE9BQU87Z0JBRXpELE1BQU1FLE9BQU8sTUFBTWIsK0NBQU1BLENBQUNhLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFBRVIsT0FBT0QsWUFBWUMsS0FBSztvQkFBQztnQkFDcEM7Z0JBQ0EsSUFBSSxDQUFDTSxNQUFNLE9BQU87Z0JBRWxCLE1BQU1HLGtCQUFrQixNQUFNbEIsK0NBQU9BLENBQUNRLFlBQVlLLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDekUsSUFBSSxDQUFDSyxpQkFBaUIsT0FBTztnQkFFN0IsT0FBTztvQkFDTEMsSUFBSSxDQUFDLEVBQUVKLEtBQUtJLEVBQUUsQ0FBQyxDQUFDO29CQUNoQlYsT0FBT00sS0FBS04sS0FBSztvQkFDakJXLFdBQVdMLEtBQUtNLElBQUk7Z0JBQ3RCO1lBQ0Y7UUFDRjtLQUNEO0lBRURDLE9BQU87UUFDTEMsUUFBUztRQUNUQyxTQUFTO0lBQ1g7SUFFQUMsV0FBVztRQUNUckIsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRXNCLEtBQUssRUFBRSxHQUFNO2dCQUNoQyxHQUFHdEIsT0FBTztnQkFDVlcsTUFBTTtvQkFDSixHQUFHWCxRQUFRVyxJQUFJO29CQUNmSSxJQUFXTyxNQUFNUCxFQUFFO29CQUNuQkMsV0FBV00sTUFBTU4sU0FBUztnQkFDNUI7WUFDRjtRQUVBTyxLQUFLLENBQUMsRUFBRUQsS0FBSyxFQUFFWCxJQUFJLEVBQUU7WUFDbkIsSUFBSUEsTUFBTTtnQkFDUixNQUFNYSxJQUFJYjtnQkFDVixPQUFPO29CQUFFLEdBQUdXLEtBQUs7b0JBQUVQLElBQUlTLEVBQUVULEVBQUU7b0JBQUVDLFdBQVdRLEVBQUVSLFNBQVM7Z0JBQUM7WUFDdEQ7WUFDQSxPQUFPTTtRQUNUO0lBQ0Y7SUFFQUcsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixpRUFBZTdCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvLi9zcmMvbGliL2F1dGhPcHRpb25zLnRzP2MzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdFbWFpbCBhbmQgUGFzc3dvcmQnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiAgICB7IGxhYmVsOiAnRW1haWwnLCAgICB0eXBlOiAnZW1haWwnLCAgICBwbGFjZWhvbGRlcjogJ2pvaG5AZm9vLmNvbScgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogYCR7dXNlci5pZH1gLFxyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICByYW5kb21LZXk6IHVzZXIucm9sZSwgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogICcvYXV0aC9zaWduaW4nLFxyXG4gICAgc2lnbk91dDogJy9hdXRoL3NpZ25vdXQnLFxyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4gKHtcclxuICAgICAgLi4uc2Vzc2lvbixcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIC4uLnNlc3Npb24udXNlcixcclxuICAgICAgICBpZDogICAgICAgIHRva2VuLmlkLFxyXG4gICAgICAgIHJhbmRvbUtleTogdG9rZW4ucmFuZG9tS2V5LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgand0OiAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgY29uc3QgdSA9IHVzZXIgYXMgYW55O1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRva2VuLCBpZDogdS5pZCwgcmFuZG9tS2V5OiB1LnJhbmRvbUtleSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoT3B0aW9ucztcclxuIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNQYXNzd29yZFZhbGlkIiwiaWQiLCJyYW5kb21LZXkiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJzaWduT3V0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJqd3QiLCJ1Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ],\n    // ✅ Disable prepared statements (avoids \"$x already exists\" error)\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL + \"?pgbouncer=true\"\n        }\n    }\n});\nif (true) globalForPrisma.prisma = prisma;\nprocess.on(\"SIGINT\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\nprocess.on(\"SIGTERM\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFHOUMsTUFBTUMsa0JBQWtCQztBQUl4QixNQUFNQyxTQUNKRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7SUFDZCxtRUFBbUU7SUFDbkVDLGFBQWE7UUFDWEMsSUFBSTtZQUNGQyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksR0FBRztRQUNsQztJQUNGO0FBQ0Y7QUFFRixJQUFJRixJQUF5QixFQUFjUCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEVLLFFBQVFHLEVBQUUsQ0FBQyxVQUFVO0lBQ25CLE1BQU1SLE9BQU9TLFdBQVc7SUFDeEJKLFFBQVFLLElBQUksQ0FBQztBQUNmO0FBRUFMLFFBQVFHLEVBQUUsQ0FBQyxXQUFXO0lBQ3BCLE1BQU1SLE9BQU9TLFdBQVc7SUFDeEJKLFFBQVFLLElBQUksQ0FBQztBQUNmO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlwYWx6LWFwcGxpY2F0aW9uLXRlbXBsYXRlLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuY29uc3QgcHJpc21hID1cclxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XHJcbiAgbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgICBsb2c6IFsncXVlcnknXSxcclxuICAgIC8vIOKchSBEaXNhYmxlIHByZXBhcmVkIHN0YXRlbWVudHMgKGF2b2lkcyBcIiR4IGFscmVhZHkgZXhpc3RzXCIgZXJyb3IpXHJcbiAgICBkYXRhc291cmNlczoge1xyXG4gICAgICBkYjoge1xyXG4gICAgICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMICsgJz9wZ2JvdW5jZXI9dHJ1ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgcHJvY2Vzcy5leGl0KDApO1xyXG59KTtcclxuXHJcbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgcHJvY2Vzcy5leGl0KDApO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IHByaXNtYSB9O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsImRhdGFzb3VyY2VzIiwiZGIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwib24iLCIkZGlzY29ubmVjdCIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Fjoin%2Froute.ts&appDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CA%5CDocuments%5CGitHub%5Cstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();