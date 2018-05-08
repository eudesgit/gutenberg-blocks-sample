/** 
 * Simple editable block sample
 * 
 * Creates an editable block to make a link
 */

// Required components
const { __ } = wp.i18n;
const { registerBlockType, RichText, source } = wp.blocks;

/**
 * Registers and creates block
 * 
 * Compatible with Gutenberg 2.8
 * 
 * @param Name Name of the block with a required name space
 * @param ObjectArgs Block configuration {
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
	    title: __('Editable Link (Sample)'), // Title, displayed in the editor
	    icon: 'universal-access-alt', // Icon, from WP icons
	    category: 'common', // Block category, where the block will be added in the editor
    
        /**
         * Object with all binding elements between the view HTML and the functions
         * Let's you bind data from DOM elements and storage attributes
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
         * @param object props Let's you bind markup and attributes as well as other controls
         * 
         * @return JSX ECMAScript Markup for the editor 
         */
        edit ( props ) {
            
            let link_text = props.attributes.link_text // To bind attribute link_text
            let link_url = props.attributes.link_url // To bind attribute link_url
            
            function onChangeContentURL ( content ) {
                props.setAttributes({link_url: content})
            }

            function onChangeContentName ( content ) {
                props.setAttributes({link_text: content})
            }              
              
            return (
                <div id="block-editable-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                    <p>Sample Link Block</p>
                    <label>Name:</label>
                    <RichText
                        className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeContentName} // onChange event callback
                        value={link_text} // Binding
                        placeholder="Name of the link"
                    />
                    <label>URL:</label>
                    <RichText
                        format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                        className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeContentURL} // onChange event callback
                        value={link_url} // Binding
                        placeholder="URL of the link"
                    />                
                </div>
            )
        },
 
        /**
         * save function
         * 
         * Makes the markup that will be rendered on the site page
         * 
         * @param object props Let's you bind markup and attributes as well as other controls
         * @return JSX ECMAScript Markup for the site
         */
        save ( props ) {
            return (
                <a href={props.attributes.link_url}>{props.attributes.link_text}</a>
            )
        },
    } 
);