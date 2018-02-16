/** 
 * Simple editable block 
 * 
 * Creates an editable block to make a link
 */

// Required components
const { __ } = wp.i18n;
const { registerBlockType, Editable, source } = wp.blocks;

// The function that registers and creates a block
registerBlockType(
    'gutenberg-blocks-sample/block-editable', // Name of the block with a required name space
    {
	    title: __('Editable Link (Sample)'), // Title, displayed in the editor
	    icon: 'universal-access-alt', // Icon, from WP icons
	    category: 'common', // Block category, where the block will be added in the editor
    
        /**
         * Object with all DOM elements that will be binded
         * into an attribute
         */
        attributes: {
            link_text: {
                selector: 'a', // tag a
                source: 'children',  // children of a, to bind the link text
                type: 'array', // type array
            },
            link_url: {
                selector: 'a',  // tag a
                source: 'attribute', // attribute of the tag
                attribute: 'href', // attribute href, to bind the href of the link
            },
        },

        /**
         * edit function
         * TODO:
         * Makes the markup for the editor interface.
         * 
         * @param {object} className 
         *  Automatic CSS class. Based on the block name:
         *  gutenberg-block-samples-block-simple
         * 
         * @return JSX ECMAScript Markup for the editor 
         */
        edit ( props ) {
            
            var link_text = props.attributes.link_text
            var link_url = props.attributes.link_url
            
            const onChangeContentURL = newContent => {
                props.setAttributes( { link_url: newContent } );
            };
    
            const onChangeContentName = newContent => {
                props.setAttributes( { link_text: newContent } );
            };      
              
            return (
                <div id="block-editable-box">
                    <p>Sample Link Block</p>
                    <label>Name:</label>
                    <Editable
                        className={ props.className }
                        onChange={ onChangeContentName }
                        value={ link_text }
                        placeholder="Name of the link"
                    />
                    <label>URL:</label>
                    <Editable
                        className={ props.className }
                        onChange={ onChangeContentURL }
                        value={ link_url }
                        placeholder="URL of the link"
                    />                
                </div>
            );
        },
 
        /**
         * save function
         * 
         * // TODO:
         * 
         * Makes the markup that will be rendered on the site page
         * 
         * @return JSX ECMAScript Markup for the site
         */
        save ( props ) {
            return (
                <a href={props.attributes.link_url}>{props.attributes.link_text}</a>
            );
        },
    } 
);