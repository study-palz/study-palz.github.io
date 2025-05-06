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
exports.id = "app/api/courses/[code]/sessions/[sessionId]/route";
exports.ids = ["app/api/courses/[code]/sessions/[sessionId]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_courses_code_sessions_sessionId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/courses/[code]/sessions/[sessionId]/route.ts */ \"(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/courses/[code]/sessions/[sessionId]/route\",\n        pathname: \"/api/courses/[code]/sessions/[sessionId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/courses/[code]/sessions/[sessionId]/route\"\n    },\n    resolvedPagePath: \"/Users/dominicmolina/Desktop/github/study-palz.github.io/src/app/api/courses/[code]/sessions/[sessionId]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dominicmolina_Desktop_github_study_palz_github_io_src_app_api_courses_code_sessions_sessionId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/courses/[code]/sessions/[sessionId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2VzJTJGJTVCY29kZSU1RCUyRnNlc3Npb25zJTJGJTVCc2Vzc2lvbklkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb3Vyc2VzJTJGJTVCY29kZSU1RCUyRnNlc3Npb25zJTJGJTVCc2Vzc2lvbklkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY291cnNlcyUyRiU1QmNvZGUlNUQlMkZzZXNzaW9ucyUyRiU1QnNlc3Npb25JZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRvbWluaWNtb2xpbmElMkZEZXNrdG9wJTJGZ2l0aHViJTJGc3R1ZHktcGFsei5naXRodWIuaW8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZG9taW5pY21vbGluYSUyRkRlc2t0b3AlMkZnaXRodWIlMkZzdHVkeS1wYWx6LmdpdGh1Yi5pbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUU7QUFDOUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeXBhbHotYXBwbGljYXRpb24tdGVtcGxhdGUvP2UwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2RvbWluaWNtb2xpbmEvRGVza3RvcC9naXRodWIvc3R1ZHktcGFsei5naXRodWIuaW8vc3JjL2FwcC9hcGkvY291cnNlcy9bY29kZV0vc2Vzc2lvbnMvW3Nlc3Npb25JZF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvdXJzZXMvW2NvZGVdL3Nlc3Npb25zL1tzZXNzaW9uSWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY291cnNlcy9bY29kZV0vc2Vzc2lvbnMvW3Nlc3Npb25JZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvdXJzZXMvW2NvZGVdL3Nlc3Npb25zL1tzZXNzaW9uSWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2RvbWluaWNtb2xpbmEvRGVza3RvcC9naXRodWIvc3R1ZHktcGFsei5naXRodWIuaW8vc3JjL2FwcC9hcGkvY291cnNlcy9bY29kZV0vc2Vzc2lvbnMvW3Nlc3Npb25JZF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvdXJzZXMvW2NvZGVdL3Nlc3Npb25zL1tzZXNzaW9uSWRdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n// src/app/api/auth/[...nextauth]/route.ts\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) throw new Error(\"No user found\");\n                const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!isValid) throw new Error(\"Invalid password\");\n                // Returning these props becomes `user` in our callbacks\n                return {\n                    id: String(user.id),\n                    email: user.email\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/error\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        /**\n     * jwt() runs when a JWT is created or updated.\n     * On initial sign in, `account` is populated, so we stash those tokens.\n     * We also put `user.id` onto the token so we can retrieve it later.\n     */ async jwt ({ token, user, account }) {\n            if (account) {\n                token.accessToken = account.access_token;\n                token.refreshToken = account.refresh_token;\n            }\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n            }\n            return token;\n        },\n        /**\n     * session() runs whenever `useSession()` or `getSession()` is called.\n     * Here we pull our values off the JWT (`token`) and onto `session`.\n     */ async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.accessToken = token.accessToken;\n                session.refreshToken = token.refreshToken;\n            }\n            return session;\n        }\n    },\n    // ensure you have NEXTAUTH_SECRET in your env\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQ1k7QUFDWTtBQUM1QjtBQUNWO0FBRXJCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYSxPQUFPO2dCQUN6QixNQUFNTSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUNBLElBQUksQ0FBQ0ssTUFBTSxNQUFNLElBQUlHLE1BQU07Z0JBQzNCLE1BQU1DLFVBQVUsTUFBTWQscURBQWMsQ0FBQ0ksWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUN4RSxJQUFJLENBQUNNLFNBQVMsTUFBTSxJQUFJRCxNQUFNO2dCQUM5Qix3REFBd0Q7Z0JBQ3hELE9BQU87b0JBQUVHLElBQUlDLE9BQU9QLEtBQUtNLEVBQUU7b0JBQUdYLE9BQU9LLEtBQUtMLEtBQUs7Z0JBQUM7WUFDbEQ7UUFDRjtLQUVEO0lBRURhLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFRO0lBQ1Y7SUFFQUMsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFFM0JDLFdBQVc7UUFDVDs7OztLQUlDLEdBQ0QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVmLElBQUksRUFBRWdCLE9BQU8sRUFBRTtZQUNoQyxJQUFJQSxTQUFTO2dCQUNYRCxNQUFNRSxXQUFXLEdBQUlELFFBQVFFLFlBQVk7Z0JBQ3pDSCxNQUFNSSxZQUFZLEdBQUdILFFBQVFJLGFBQWE7WUFDNUM7WUFDQSxJQUFJcEIsTUFBTTtnQkFDUmUsTUFBTVQsRUFBRSxHQUFNTixLQUFLTSxFQUFFO2dCQUNyQlMsTUFBTXBCLEtBQUssR0FBR0ssS0FBS0wsS0FBSztZQUMxQjtZQUNBLE9BQU9vQjtRQUNUO1FBRUE7OztLQUdDLEdBQ0QsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVJLEtBQUssRUFBRTtZQUM5QixJQUFJSixRQUFRWCxJQUFJLEVBQUU7Z0JBQ2hCVyxRQUFRWCxJQUFJLENBQUNNLEVBQUUsR0FBYVMsTUFBTVQsRUFBRTtnQkFDcENLLFFBQVFNLFdBQVcsR0FBU0YsTUFBTUUsV0FBVztnQkFDN0NOLFFBQVFRLFlBQVksR0FBUUosTUFBTUksWUFBWTtZQUNoRDtZQUNBLE9BQU9SO1FBQ1Q7SUFDRjtJQUVBLDhDQUE4QztJQUM5Q1UsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixNQUFNQyxVQUFVdEMsZ0RBQVFBLENBQUNJO0FBQ2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlwYWx6LWFwcGxpY2F0aW9uLXRlbXBsYXRlLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHMpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCcpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXNzd29yZCcpO1xuICAgICAgICAvLyBSZXR1cm5pbmcgdGhlc2UgcHJvcHMgYmVjb21lcyBgdXNlcmAgaW4gb3VyIGNhbGxiYWNrc1xuICAgICAgICByZXR1cm4geyBpZDogU3RyaW5nKHVzZXIuaWQpLCBlbWFpbDogdXNlci5lbWFpbCB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyDigKZhZGQgb3RoZXIgcHJvdmlkZXJzIGhlcmUgaWYgYW554oCmXG4gIF0sXG5cbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICAgIGVycm9yOiAgJy9hdXRoL2Vycm9yJyxcbiAgfSxcblxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuXG4gIGNhbGxiYWNrczoge1xuICAgIC8qKlxuICAgICAqIGp3dCgpIHJ1bnMgd2hlbiBhIEpXVCBpcyBjcmVhdGVkIG9yIHVwZGF0ZWQuXG4gICAgICogT24gaW5pdGlhbCBzaWduIGluLCBgYWNjb3VudGAgaXMgcG9wdWxhdGVkLCBzbyB3ZSBzdGFzaCB0aG9zZSB0b2tlbnMuXG4gICAgICogV2UgYWxzbyBwdXQgYHVzZXIuaWRgIG9udG8gdGhlIHRva2VuIHNvIHdlIGNhbiByZXRyaWV2ZSBpdCBsYXRlci5cbiAgICAgKi9cbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9KSB7XG4gICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiAgPSBhY2NvdW50LmFjY2Vzc190b2tlbiE7XG4gICAgICAgIHRva2VuLnJlZnJlc2hUb2tlbiA9IGFjY291bnQucmVmcmVzaF90b2tlbiE7XG4gICAgICB9XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCAgICA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbCE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHNlc3Npb24oKSBydW5zIHdoZW5ldmVyIGB1c2VTZXNzaW9uKClgIG9yIGBnZXRTZXNzaW9uKClgIGlzIGNhbGxlZC5cbiAgICAgKiBIZXJlIHdlIHB1bGwgb3VyIHZhbHVlcyBvZmYgdGhlIEpXVCAoYHRva2VuYCkgYW5kIG9udG8gYHNlc3Npb25gLlxuICAgICAqL1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCAgICAgICAgICAgPSB0b2tlbi5pZCBhcyBzdHJpbmc7XG4gICAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gICAgICAgPSB0b2tlbi5hY2Nlc3NUb2tlbiBhcyBzdHJpbmc7XG4gICAgICAgIHNlc3Npb24ucmVmcmVzaFRva2VuICAgICAgPSB0b2tlbi5yZWZyZXNoVG9rZW4gYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcblxuICAvLyBlbnN1cmUgeW91IGhhdmUgTkVYVEFVVEhfU0VDUkVUIGluIHlvdXIgZW52XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiRXJyb3IiLCJpc1ZhbGlkIiwiY29tcGFyZSIsImlkIiwiU3RyaW5nIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/route.ts":
/*!******************************************************************!*\
  !*** ./src/app/api/courses/[code]/sessions/[sessionId]/route.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n// src/app/api/courses/[code]/sessions/[sessionId]/route.ts\n\n\n\n\nasync function DELETE(_req, { params }) {\n    // 1) only the session owner can delete\n    const nextAuth = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    const userId = Number(nextAuth?.user?.id);\n    const sid = Number(params.sessionId);\n    // make sure it exists and belongs to you\n    const ss = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.studySession.findUnique({\n        where: {\n            id: sid\n        },\n        select: {\n            ownerId: true\n        }\n    });\n    if (!ss) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Not found\"\n        }, {\n            status: 404\n        });\n    }\n    if (ss.ownerId !== userId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    // 2) actually delete it\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.studySession.delete({\n        where: {\n            id: sid\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        deleted: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJEQUEyRDtBQUNoQjtBQUNMO0FBQ1k7QUFDZTtBQUUxRCxlQUFlSSxPQUNwQkMsSUFBYSxFQUNiLEVBQUVDLE1BQU0sRUFBbUQ7SUFFM0QsdUNBQXVDO0lBQ3ZDLE1BQU1DLFdBQVcsTUFBTUwsZ0VBQWdCQSxDQUFDQyxxRUFBV0E7SUFDbkQsTUFBTUssU0FBU0MsT0FBT0YsVUFBVUcsTUFBTUM7SUFDdEMsTUFBTUMsTUFBU0gsT0FBT0gsT0FBT08sU0FBUztJQUV0Qyx5Q0FBeUM7SUFDekMsTUFBTUMsS0FBSyxNQUFNYiwrQ0FBTUEsQ0FBQ2MsWUFBWSxDQUFDQyxVQUFVLENBQUM7UUFDOUNDLE9BQU87WUFBRU4sSUFBSUM7UUFBSTtRQUNqQk0sUUFBUTtZQUFFQyxTQUFTO1FBQUs7SUFDMUI7SUFDQSxJQUFJLENBQUNMLElBQUk7UUFDUCxPQUFPZCxxREFBWUEsQ0FBQ29CLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQVksR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDakU7SUFDQSxJQUFJUixHQUFHSyxPQUFPLEtBQUtYLFFBQVE7UUFDekIsT0FBT1IscURBQVlBLENBQUNvQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFZLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsd0JBQXdCO0lBQ3hCLE1BQU1yQiwrQ0FBTUEsQ0FBQ2MsWUFBWSxDQUFDUSxNQUFNLENBQUM7UUFBRU4sT0FBTztZQUFFTixJQUFJQztRQUFJO0lBQUU7SUFFdEQsT0FBT1oscURBQVlBLENBQUNvQixJQUFJLENBQUM7UUFBRUksU0FBUztJQUFLO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlwYWx6LWFwcGxpY2F0aW9uLXRlbXBsYXRlLy4vc3JjL2FwcC9hcGkvY291cnNlcy9bY29kZV0vc2Vzc2lvbnMvW3Nlc3Npb25JZF0vcm91dGUudHM/NjJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9jb3Vyc2VzL1tjb2RlXS9zZXNzaW9ucy9bc2Vzc2lvbklkXS9yb3V0ZS50c1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKFxuICBfcmVxOiBSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBjb2RlOiBzdHJpbmc7IHNlc3Npb25JZDogc3RyaW5nIH0gfVxuKSB7XG4gIC8vIDEpIG9ubHkgdGhlIHNlc3Npb24gb3duZXIgY2FuIGRlbGV0ZVxuICBjb25zdCBuZXh0QXV0aCA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBjb25zdCB1c2VySWQgPSBOdW1iZXIobmV4dEF1dGg/LnVzZXI/LmlkKTtcbiAgY29uc3Qgc2lkICAgID0gTnVtYmVyKHBhcmFtcy5zZXNzaW9uSWQpO1xuXG4gIC8vIG1ha2Ugc3VyZSBpdCBleGlzdHMgYW5kIGJlbG9uZ3MgdG8geW91XG4gIGNvbnN0IHNzID0gYXdhaXQgcHJpc21hLnN0dWR5U2Vzc2lvbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2lkIH0sXG4gICAgc2VsZWN0OiB7IG93bmVySWQ6IHRydWUgfVxuICB9KTtcbiAgaWYgKCFzcykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG4gIGlmIChzcy5vd25lcklkICE9PSB1c2VySWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZvcmJpZGRlbicgfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuXG4gIC8vIDIpIGFjdHVhbGx5IGRlbGV0ZSBpdFxuICBhd2FpdCBwcmlzbWEuc3R1ZHlTZXNzaW9uLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBzaWQgfSB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBkZWxldGVkOiB0cnVlIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkRFTEVURSIsIl9yZXEiLCJwYXJhbXMiLCJuZXh0QXV0aCIsInVzZXJJZCIsIk51bWJlciIsInVzZXIiLCJpZCIsInNpZCIsInNlc3Npb25JZCIsInNzIiwic3R1ZHlTZXNzaW9uIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0Iiwib3duZXJJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRlbGV0ZSIsImRlbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/courses/[code]/sessions/[sessionId]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ],\n    // ✅ Disable prepared statements (avoids \"$x already exists\" error)\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL + \"?pgbouncer=true\"\n        }\n    }\n});\nif (true) globalForPrisma.prisma = prisma;\nprocess.on(\"SIGINT\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\nprocess.on(\"SIGTERM\", async ()=>{\n    await prisma.$disconnect();\n    process.exit(0);\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUl4QixNQUFNQyxTQUNKRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7SUFDZCxtRUFBbUU7SUFDbkVDLGFBQWE7UUFDWEMsSUFBSTtZQUNGQyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksR0FBRztRQUNsQztJQUNGO0FBQ0Y7QUFFRixJQUFJRixJQUF5QixFQUFjUCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEVLLFFBQVFHLEVBQUUsQ0FBQyxVQUFVO0lBQ25CLE1BQU1SLE9BQU9TLFdBQVc7SUFDeEJKLFFBQVFLLElBQUksQ0FBQztBQUNmO0FBRUFMLFFBQVFHLEVBQUUsQ0FBQyxXQUFXO0lBQ3BCLE1BQU1SLE9BQU9TLFdBQVc7SUFDeEJKLFFBQVFLLElBQUksQ0FBQztBQUNmO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlwYWx6LWFwcGxpY2F0aW9uLXRlbXBsYXRlLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufTtcblxuY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgICAvLyDinIUgRGlzYWJsZSBwcmVwYXJlZCBzdGF0ZW1lbnRzIChhdm9pZHMgXCIkeCBhbHJlYWR5IGV4aXN0c1wiIGVycm9yKVxuICAgIGRhdGFzb3VyY2VzOiB7XG4gICAgICBkYjoge1xuICAgICAgICB1cmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCArICc/cGdib3VuY2VyPXRydWUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIHByb2Nlc3MuZXhpdCgwKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdTSUdURVJNJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgcHJvY2Vzcy5leGl0KDApO1xufSk7XG5cbmV4cG9ydCB7IHByaXNtYSB9O1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJkYXRhc291cmNlcyIsImRiIiwidXJsIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsIm9uIiwiJGRpc2Nvbm5lY3QiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bcode%5D%2Fsessions%2F%5BsessionId%5D%2Froute.ts&appDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdominicmolina%2FDesktop%2Fgithub%2Fstudy-palz.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();