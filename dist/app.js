"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _database = require("./config/database");

var _indexRoutes = require("./routes/index.routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var app = (0, _express.default)();
(0, _database.conn)(); //config port

app.set("port", process.env.PORT); //middleware

app.use((0, _helmet.default)());
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.json()); // Routes

app.use("/api", _indexRoutes.startRoutes);
app.use("/api/auth", _indexRoutes.authRoutes);
app.use("/api/colaborador", _indexRoutes.collaboratorRoutes); // error middleware

app.use((error, req, res, next) => {
  console.log(error + "--------------------------");
  var statusCode = error.statusCode || 500;
  var message = error.message;
  var errorsPresent;

  if (error.errors) {
    errorsPresent = error.errors;
  }

  res.status(statusCode).json({
    msg: message,
    errors: errorsPresent
  });
});
var _default = app;
exports.default = _default;