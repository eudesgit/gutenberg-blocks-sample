/** 
 * Simple block 
 * 
 * Creates a simple block that makes a red title
 * 
 * @requires Gutenberg 4.3
 */

// Required components
const { registerBlockType } = wp.blocks;        // registerBlockType function that creates a block

// Other components
const { __ } = wp.i18n;     // Internationalisation

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
 */
registerBlockType(
    'gutenberg-blocks-sample/block-simple', // Name of the block with a required name space
    {
	    title: __('GB Sample - Simple Red Title'), // Title, displayed in the editor
	    icon: 'universal-access-alt', // Icon, from WP icons
	    category: 'common', // Block category, where the block will be added in the editor
    
        /**
         * edit function
         * 
         * Makes the markup for the editor interface.
         * 
         * @param {object} ObjectArgs {
         *      className - Automatic CSS class. Based on the block name: gutenberg-block-samples-block-simple
         * }
         * 
         * @return {JSX object} ECMAScript JSX Markup for the editor 
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
         * @return {JSX object} ECMAScript JSX Markup for the site
         */
        save ( ) {
            return ( // This will be displayed on the website page
                <h1>The custom red title :)</h1>
            );
        },
    } 
);