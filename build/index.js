'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactNativeShorthand;
function parseStyles(styles) {
  var supportedShorthand = ['margin', 'padding'];
  var directionX = ['left', 'right'];
  var directionY = ['top', 'bottom'];
  var result = {};

  for (var rule in this.styles) {
    result[rule] = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var selector = _step.value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

function ReactNativeShorthand() {
  var styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return parseStyles(styles);
}