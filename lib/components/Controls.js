"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = function Controls() {
  return _react2.default.createElement(
    "div",
    { className: "Controls" },
    _react2.default.createElement("span", { className: "prev", onClick: function onClick() {
        return console.log("prev");
      } }),
    _react2.default.createElement("span", { className: "next", onClick: function onClick() {
        return console.log("next");
      } })
  );
};

exports.default = Controls;
module.exports = exports["default"];