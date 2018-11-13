/** 
 * Simple editable block sample
 * 
 * Creates an editable block to make a link
 * 
 * @requires Gutenberg 4.3
 */

// Required components from WordPress
const { registerBlockType } = wp.blocks     // registerBlockType function that creates a block
const { RichText } = wp.editor              // RichText component for editable inputs

// Other components
const { __ } = wp.i18n // Internationalisation


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
registerBlockType(
    'gutenberg-blocks-sample/block-editable', // Name of the block with a required name space
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
                source: 'children',  // children of a, to bind the link text
            },
            link_url: {
                selector: 'a',  // tag a
                source: 'attribute', // attribute of the tag
                attribute: 'href', // attribute href, to bind the href of the link
            },
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
        edit ( props ) {
            
            let { attributes, className, setAttributes } = props

            let link_text = attributes.link_text // To bind attribute link_text
            let link_url = attributes.link_url // To bind attribute link_url
            
            function onChangeContentURL ( content ) {
                setAttributes({link_url: content})
            }

            function onChangeContentName ( content ) {
                setAttributes({link_text: content})
            }              
              
            return (
                <div id="block-editable-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                    <p>GB Sample - Editable link block</p>
                    <label>Name:</label>
                    <RichText
                        className={className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeContentName} // onChange event callback
                        value={link_text} // Binding
                        placeholder="Name of the link"
                    />
                    <label>URL:</label>
                    <RichText
                        format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                        className={className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeContentURL} // onChange event callback
                        value={link_url} // Binding
                        placeholder="URL of the link"
                    />                
                    <p><a href="https://github.com/eudesgit/gutenberg-blocks-sample">Find out more</a></p>
                </div>
            )
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
        save ( props ) {

            let { attributes } = props

            return (
                <a href={attributes.link_url}>{attributes.link_text}</a>
            )
        },
    } 
);