exports.id = "server";
exports.modules = {

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
function template(body) {
  return `<!DOCTYPE HTML>
  <html>

    <head>
      <meta charset="utf-8">
      <title>Pro MERN Stack</title>
      <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        table.table-hover tr {cursor: pointer;}
        .panel-title a {display: block; width: 100%; cursor: pointer;}
      </style>
    </head>
    <body>
      <!-- Page generated from template. -->
      <div id="content">${body}</div>


    </body>
</html>`;
}

/***/ })

};
//# sourceMappingURL=server.86c0fc369b3082c9c09a.hot-update.js.map