'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = _vue2.default.component('HelloWorld', {
  render: function render(h) {
    return h('h1', ['Hello, World!']);
  }
});