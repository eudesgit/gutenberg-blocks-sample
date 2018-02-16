/** 
 * Simple editable block 
 * 
 * Creates an editable block to make a link
 */

// Required components
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// The function that registers and creates a block
registerBlockType(
    'gutenberg-blocks-sample/block-editable', // Name of the block with a required name space
    {
	    title: __('Editable Link (Sample)'), // Title, displayed in the editor
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
        edit ( {className} ) {
		    return (
                <p className={className}>This custom block will create a red title</p>
            );
        },
 
        /**
         * save function
         * 
         * Makes the markup that will be rendered on the site page
         * 
         * @return JSX ECMAScript Markup for the site
         */
        save ( ) {
            return (
                <h1>The custom red title :)</h1>
            );
        },
    } 
);