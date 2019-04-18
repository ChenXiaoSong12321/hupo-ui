"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HButtonMixins = function HButtonMixins() {
  _classCallCheck(this, HButtonMixins);

  _defineProperty(this, "props", {
    customClass: String,
    customStyle: String,
    radius: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large'
    },
    plain: {
      type: Boolean,
      default: false
    },
    throttle: {
      type: Number,
      default: 500 // 当throttle <= 0，无防暴力点击

    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    openType: String,
    opacity: {
      type: Boolean,
      default: false
    }
  });

  _defineProperty(this, "computed", {
    stateClass: function stateClass() {
      var _this = this;

      var classes = ['group', 'plain', 'disabled', 'opacity'];
      var stateClass = '';
      classes.forEach(function (item) {
        if (_this[item] && (item != 'radius' || !_this.group)) {
          stateClass += "is-".concat(item, " ");
        }
      });
      return stateClass;
    }
  });

  _defineProperty(this, "methods", {
    __emit__: async function __emit__(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.log(data);

      if (this.throttle > 0) {
        await this.$throttle(this.throttle);
      }

      this.$cmlEmit(type, data);
    }
  });
};

var _default = HButtonMixins;
exports.default = _default;