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
 * Simple editable block sample
 * 
 * Creates an editable block to make a link
 * 
 * @requires Gutenberg 4.3
 */

// Required components from WordPress
var registerBlockType = wp.blocks.registerBlockType; // registerBlockType function that creates a block

var RichText = wp.editor.RichText; // RichText component for editable inputs

// Other components

var __ = wp.i18n.__; // Internationalisation


/**
 * Registers and creates block
 * 
 * @param {string} Name Name of the block with a required name space
 * @param {object} ObjectArgs Block configuration {
 *      title - Title, displayed in the editor
 *      icon - Icon, from WP icons
 *      category - Block category, where the block will be added in the editor
 *      attributes - Object with all binding elements between the view HTML and the functions 
 *      edit function - Returns the markup for the editor interface.
 *      save function - Returns the markup that will be rendered on the site page
 * }
 * 
 */

registerBlockType('gutenberg-blocks-sample/block-editable', // Name of the block with a required name space
{
    title: __('GB Sample - Editable Link'), // Title, displayed in the editor
    icon: 'universal-access-alt', // Icon, from WP icons
    category: 'common', // Block category, where the block will be added in the editor

    /**
     * Object with all binding elements between the view HTML and the functions
     * Let's you bind data from DOM elements and storage attributes
     * To make things editable, you'll need them mapped as those attributes
     */
    attributes: {
        link_text: {
            selector: 'a', // tag a
            source: 'children' // children of a, to bind the link text
        },
        link_url: {
            selector: 'a', // tag a
            source: 'attribute', // attribute of the tag
            attribute: 'href' // attribute href, to bind the href of the link
        }
    },

    /**
     * edit function
     * 
     * Makes the markup for the editor interface.
     * 
     * @param {object} Props {
     *      attributes - Attribute values
     *      className - Automatic class: gutenberg-blocks-sample-block-editable
     *      setAttributes - Function that bind the values to the interface
     * }
     * 
     * @return {JSX object} ECMAScript Markup for the editor 
     */
    edit: function edit(props) {
        var attributes = props.attributes,
            className = props.className,
            setAttributes = props.setAttributes;


        var link_text = attributes.link_text; // To bind attribute link_text
        var link_url = attributes.link_url; // To bind attribute link_url

        function onChangeContentURL(content) {
            setAttributes({ link_url: content });
        }

        function onChangeContentName(content) {
            setAttributes({ link_text: content });
        }

        return wp.element.createElement(
            'div',
            { id: 'block-editable-box' },
            ' ',
            wp.element.createElement(
                'p',
                null,
                'GB Sample - Editable link block'
            ),
            wp.element.createElement(
                'label',
                null,
                'Name:'
            ),
            wp.element.createElement(RichText, {
                className: className // Automatic class: gutenberg-blocks-sample-block-editable
                , onChange: onChangeContentName // onChange event callback
                , value: link_text // Binding
                , placeholder: 'Name of the link'
            }),
            wp.element.createElement(
                'label',
                null,
                'URL:'
            ),
            wp.element.createElement(RichText, {
                format: 'string' // Default is 'element'. Wouldn't work for a tag attribute
                , className: className // Automatic class: gutenberg-blocks-sample-block-editable
                , onChange: onChangeContentURL // onChange event callback
                , value: link_url // Binding
                , placeholder: 'URL of the link'
            }),
            wp.element.createElement(
                'p',
                null,
                wp.element.createElement(
                    'a',
                    { href: 'https://github.com/eudesgit/gutenberg-blocks-sample' },
                    'Find out more'
                )
            )
        );
    },


    /**
     * save function
     * 
     * Makes the markup that will be rendered on the site page
     * 
     * @param {object} Props {
     *      attributes - Attribute values
     *      className - Automatic class: gutenberg-blocks-sample-block-editable
     *      setAttributes - Function that bind the values to the interface
     * }
     * @return {JSX object} ECMAScript Markup for the site
     */
    save: function save(props) {
        var attributes = props.attributes;


        return wp.element.createElement(
            'a',
            { href: attributes.link_url },
            attributes.link_text
        );
    }
});

/***/ })
/******/ ]);