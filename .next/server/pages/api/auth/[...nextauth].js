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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// This is a mock user database. In a real application, you'd use a proper database.\nconst users = [\n    {\n        id: \"1\",\n        name: \"User 1\",\n        email: \"user1@example.com\",\n        password: \"$2b$10$Gg8Aw9Xj9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9\"\n    },\n    {\n        id: \"2\",\n        name: \"User 2\",\n        email: \"user2@example.com\",\n        password: \"$2b$10$Gg8Aw9Xj9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9\"\n    }, \n];\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials) return null;\n                const user = users.find((user)=>user.email === credentials.email);\n                if (user && await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password)) {\n                    return {\n                        id: user.id,\n                        name: user.name,\n                        email: user.email\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst authHandler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\nasync function handler(req, res) {\n    // Add logging to help diagnose the issue\n    console.log(\"NextAuth API route hit:\", req.method, req.url);\n    try {\n        await authHandler(req, res);\n    } catch (error) {\n        console.error(\"NextAuth error:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRDtBQUNZO0FBQ2pDO0FBRWpDLG9GQUFvRjtBQUNwRixNQUFNRyxLQUFLLEdBQUc7SUFDWjtRQUFFQyxFQUFFLEVBQUUsR0FBRztRQUFFQyxJQUFJLEVBQUUsUUFBUTtRQUFFQyxLQUFLLEVBQUUsbUJBQW1CO1FBQUVDLFFBQVEsRUFBRSw0REFBNEQ7S0FBRTtJQUMvSDtRQUFFSCxFQUFFLEVBQUUsR0FBRztRQUFFQyxJQUFJLEVBQUUsUUFBUTtRQUFFQyxLQUFLLEVBQUUsbUJBQW1CO1FBQUVDLFFBQVEsRUFBRSx5REFBeUQ7S0FBRTtDQUM3SDtBQUVNLE1BQU1DLFdBQVcsR0FBb0I7SUFDMUNDLFNBQVMsRUFBRTtRQUNUUixzRUFBbUIsQ0FBQztZQUNsQkksSUFBSSxFQUFFLGFBQWE7WUFDbkJLLFdBQVcsRUFBRTtnQkFDWEosS0FBSyxFQUFFO29CQUFFSyxLQUFLLEVBQUUsT0FBTztvQkFBRUMsSUFBSSxFQUFFLE1BQU07aUJBQUU7Z0JBQ3ZDTCxRQUFRLEVBQUU7b0JBQUVJLEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsVUFBVTtpQkFBRTthQUNsRDtZQUNELE1BQU1DLFNBQVMsRUFBQ0gsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUNBLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQztnQkFFOUIsTUFBTUksSUFBSSxHQUFHWCxLQUFLLENBQUNZLElBQUksQ0FBQ0QsQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLENBQUNSLEtBQUssS0FBS0ksV0FBVyxDQUFDSixLQUFLLENBQUM7Z0JBQ2pFLElBQUlRLElBQUksSUFBSSxNQUFNWiwrQ0FBTyxDQUFDUSxXQUFXLENBQUNILFFBQVEsRUFBRU8sSUFBSSxDQUFDUCxRQUFRLENBQUMsRUFBRTtvQkFDOUQsT0FBTzt3QkFBRUgsRUFBRSxFQUFFVSxJQUFJLENBQUNWLEVBQUU7d0JBQUVDLElBQUksRUFBRVMsSUFBSSxDQUFDVCxJQUFJO3dCQUFFQyxLQUFLLEVBQUVRLElBQUksQ0FBQ1IsS0FBSztxQkFBRSxDQUFDO2dCQUM3RCxDQUFDO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLENBQUM7S0FDSDtJQUNEVSxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFSixJQUFJLEdBQUUsRUFBRTtZQUN6QixJQUFJQSxJQUFJLEVBQUU7Z0JBQ1JJLEtBQUssQ0FBQ2QsRUFBRSxHQUFHVSxJQUFJLENBQUNWLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQ0QsT0FBT2MsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELE1BQU1DLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVELEtBQUssR0FBRSxFQUFFO1lBQ2hDLElBQUlBLEtBQUssSUFBSUMsT0FBTyxDQUFDTCxJQUFJLEVBQUU7Z0JBQ3pCSyxPQUFPLENBQUNMLElBQUksQ0FBQ1YsRUFBRSxHQUFHYyxLQUFLLENBQUNkLEVBQUUsQ0FBVztZQUN2QyxDQUFDO1lBQ0QsT0FBT2UsT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FDRjtJQUNEQyxLQUFLLEVBQUU7UUFDTEMsTUFBTSxFQUFFLFFBQVE7S0FDakI7SUFDREMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtDQUNwQyxDQUFDO0FBRUYsTUFBTUMsV0FBVyxHQUFHMUIsZ0RBQVEsQ0FBQ1EsV0FBVyxDQUFDO0FBRTFCLGVBQWVtQixPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLHlDQUF5QztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUVILEdBQUcsQ0FBQ0ksTUFBTSxFQUFFSixHQUFHLENBQUNLLEdBQUcsQ0FBQyxDQUFDO0lBRTVELElBQUk7UUFDRixNQUFNUCxXQUFXLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsRUFBRSxPQUFPSyxLQUFLLEVBQUU7UUFDZEosT0FBTyxDQUFDSSxLQUFLLENBQUMsaUJBQWlCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ3hDTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVGLEtBQUssRUFBRSx1QkFBdUI7U0FBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYWNjb3VudGluZy1hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcblxuLy8gVGhpcyBpcyBhIG1vY2sgdXNlciBkYXRhYmFzZS4gSW4gYSByZWFsIGFwcGxpY2F0aW9uLCB5b3UnZCB1c2UgYSBwcm9wZXIgZGF0YWJhc2UuXG5jb25zdCB1c2VycyA9IFtcbiAgeyBpZDogJzEnLCBuYW1lOiAnVXNlciAxJywgZW1haWw6ICd1c2VyMUBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAnJDJiJDEwJEdnOEF3OVhqOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOScgfSxcbiAgeyBpZDogJzInLCBuYW1lOiAnVXNlciAyJywgZW1haWw6ICd1c2VyMkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAnJDJiJDEwJEdnOEF3OVhqOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOUliOScgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5lbWFpbCA9PT0gY3JlZGVudGlhbHMuZW1haWwpO1xuICAgICAgICBpZiAodXNlciAmJiBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgICAgIHJldHVybiB7IGlkOiB1c2VyLmlkLCBuYW1lOiB1c2VyLm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuY29uc3QgYXV0aEhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gQWRkIGxvZ2dpbmcgdG8gaGVscCBkaWFnbm9zZSB0aGUgaXNzdWVcbiAgY29uc29sZS5sb2coJ05leHRBdXRoIEFQSSByb3V0ZSBoaXQ6JywgcmVxLm1ldGhvZCwgcmVxLnVybCk7XG4gIFxuICB0cnkge1xuICAgIGF3YWl0IGF1dGhIYW5kbGVyKHJlcSwgcmVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdOZXh0QXV0aCBlcnJvcjonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29tcGFyZSIsInVzZXJzIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImF1dGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJ1cmwiLCJlcnJvciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();