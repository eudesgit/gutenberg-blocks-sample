/** 
 * Simple block 
 * 
 * Creates a simple block that makes a red title
 */

// Required components
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Registers and creates block
 * 
 * Compatible with Gutenberg 2.8
 * 
 */
registerBlockType(
    'gutenberg-blocks-sample/block-simple', // Name of the block with a required name space
    {
	    title: __('Simple Red Title (Sample)'), // Title, displayed in the editor
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
		    return ( // This will be displayed on the editor
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
            return ( // This will be displayed on the website page
                <h1>The custom red title :)</h1>
            );
        },
    } 
);