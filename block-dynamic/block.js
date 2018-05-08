/** 
 * Simple dynamic block sample
 * 
 * Creates a block that doesn't render the save side, because it's rendered on PHP
 */

// Required components
const { __ } = wp.i18n;
const { registerBlockType, RichText } = wp.blocks;

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
    'gutenberg-blocks-sample/block-dynamic', // Name of the block with a required name space
    {
	    title: __('Dynamic Sum Block (Sample)'), // Title, displayed in the editor
	    icon: 'universal-access-alt', // Icon, from WP icons
	    category: 'common', // Block category, where the block will be added in the editor
    
        /**
         * Object with all binding elements between the view HTML and the functions
         * It lets you bind data from DOM elements and storage attributes
         */
        attributes: {
            // Number 1
            // It doesn't use source attribute, so it doesn't come from save() rendered DOM
            // They'll be saved on the block's source code as a JSON
            number1: {
                type: 'string',
            },
            // Number 2
            // It doesn't use source attribute, so it doesn't come from save() rendered DOM
            // They'll be saved on the block's source code as a JSON
            number2: {
                type: 'string',
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
            
            var number1 = props.attributes.number1 // To bind attribute number 1
            var number2 = props.attributes.number2 // To bind attribute number 2
            
            function onChangeNumber1 ( content ) {
                props.setAttributes({number1: content})
            }

            function onChangeNumber2 ( content ) {
                props.setAttributes({number2: content})
            }              
              
            return (
                <div id="block-dynamic-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                    <h1>Sample dynamic PHP server-side block</h1>
                    <p>This block will sum the numbers and render HTML on the server side</p>
                    <label>Number 1:</label>
                    <RichText
                        className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeNumber1} // onChange event callback
                        value={number1} // Binding
                        placeholder="First number"
                    />
                    <label>Number 2:</label>
                    <RichText
                        className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeNumber2} // onChange event callback
                        value={number2} // Binding
                        placeholder="Second number"
                    />                
                </div>
            )
        },
 
        /**
         * save function
         * 
         * Makes the markup that will be rendered on the site page
         * 
         * In this case, it does not render, because this block is rendered on server side
         * 
         * @param object props Let's you bind markup and attributes as well as other controls
         * @return JSX ECMAScript Markup for the site
         */
        save ( props ) {
            return null // See PHP side. This block is rendered on PHP.
        },
    } 
);