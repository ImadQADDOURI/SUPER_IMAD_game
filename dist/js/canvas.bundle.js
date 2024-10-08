/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/flag.png":
/*!*****************************!*\
  !*** ./src/images/flag.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "39d4c9477465e8e80990b80a2560942c.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/images/spriteRunLeft.png":
/*!**************************************!*\
  !*** ./src/images/spriteRunLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/images/spriteRunRight.png":
/*!***************************************!*\
  !*** ./src/images/spriteRunRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/images/spriteStandLeft.png":
/*!****************************************!*\
  !*** ./src/images/spriteStandLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/images/spriteStandRight.png":
/*!*****************************************!*\
  !*** ./src/images/spriteStandRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
/* harmony import */ var _images_flag_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/flag.png */ "./src/images/flag.png");
/* harmony import */ var _images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/spriteRunLeft.png */ "./src/images/spriteRunLeft.png");
/* harmony import */ var _images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/spriteRunRight.png */ "./src/images/spriteRunRight.png");
/* harmony import */ var _images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/spriteStandLeft.png */ "./src/images/spriteStandLeft.png");
/* harmony import */ var _images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/spriteStandRight.png */ "./src/images/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 80
    };
    this.speed = 10;
    this.width = 66;
    this.height = 150;
    this.velocity = {
      x: 0,
      y: 1
    };
    this.gravity = 0.5;
    this.frames = 0;
    this.image = createImage(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.sprites = {
      stand: {
        right: createImage(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 30 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += this.gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imgsrc) {
  var image = new Image();
  image.src = imgsrc;
  return image;
}

function init() {
  player = new Player();
  platformimage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  splatformimage = createImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  platforms = [new Platform({
    x: -1,
    y: 470,
    image: platformimage
  }), new Platform({
    x: platformimage.width + 100,
    y: 200,
    image: platformimage
  }), new Platform({
    x: platformimage.width * 2 + 200,
    y: 400,
    image: platformimage
  }), new Platform({
    x: platformimage.width * 3 + 300,
    y: 100,
    image: platformimage
  }), new Platform({
    x: platformimage.width * 4 + 100,
    y: 350,
    image: platformimage
  }), new Platform({
    x: platformimage.width * 5 + 200,
    y: 500,
    image: platformimage
  }), new Platform({
    x: platformimage.width * 6 + 400,
    y: 300,
    image: splatformimage
  }), new Platform({
    x: platformimage.width * 6 + 400,
    y: -49,
    image: createImage(_images_flag_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

var player = new Player();
var platforms = [];
var genericObjects = [];
var platformimage;
var splatformimage;
var scrollOffset = 0;
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) player.velocity.x = player.speed;else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) player.velocity.x = -player.speed;else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) player.velocity.y = 0;
  });

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } //win condition


  if (scrollOffset >= platformimage.width * 6 + 150 && player.position.y + player.height <= platforms[6].position.y) {
    alert('YOU WIN 😃 \n 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'), location.reload(), console.log('You win :)'), init();
  } //lose condition


  if (player.position.y > canvas.height) {
    alert('YOU LOSE 😧'), location.reload(), console.log('You lose :('), init();
  }
}

alert('USE  🢂 🢃 🢁 🢀  to play');
init();
animate();
window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 38:
      console.log('up');
      player.velocity.y -= 20;
      break;

    case 40:
      console.log('down');
      player.velocity.y += 1;
      break;

    case 39:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 37:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 38:
      console.log('up');
      break;

    case 40:
      console.log('down');
      break;

    case 39:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 37:
      console.log('left');
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map