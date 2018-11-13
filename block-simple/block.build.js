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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/** 
 * Simple block 
 * 
 * Creates a simple block that makes a red title
 */

// Required components
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Registers and creates block
 * 
 * Compatible with Gutenberg 2.8
 * 
 */

registerBlockType('gutenberg-blocks-sample/block-simple', // Name of the block with a required name space
{
    title: __('GB Sample - Simple Red Title'), // Title, displayed in the editor
    icon: 'universal-access-alt', // Icon, from WP icons
    category: 'common', // Block category, where the block will be added in the editor

    /**
     * edit function
     * 
     * Makes the markup for the editor interface.
     * 
     * @param {object} className 
     *  Automatic CSS class. Based on the block name:
     *  gutenberg-block-samples-block-simple
     * 
     * @return JSX ECMAScript Markup for the editor 
     */
    edit: function edit(_ref) {
        var className = _ref.className;

        return (// This will be displayed on the editor
            wp.element.createElement(
                'p',
                { className: className },
                'This custom block will create a red title'
            )
        );
    },


    /**
     * save function
     * 
     * Makes the markup that will be rendered on the site page
     * 
     * @return JSX ECMAScript Markup for the site
     */
    save: function save() {
        return (// This will be displayed on the website page
            wp.element.createElement(
                'h1',
                null,
                'The custom red title :)'
            )
        );
    }
});

/***/ })
/******/ ]);