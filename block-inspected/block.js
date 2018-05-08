/** 
 * Simple editable block with inspection controls
 * 
 * Creates an editable block to make a link button, but with inspection controlls on the sidebar
 */


/**
 * Required components
 */
const { __ } = wp.i18n;
const { 
    registerBlockType,  // Basic block register function
    RichText,           // Element Tag for all editable inputs
    InspectorControls,  // Element Tag for sidebar view
    ColorPalette,       // Element Tag for Gutenberg standard Palette selector
    source              // For attribute sources
} = wp.blocks;


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
    'gutenberg-blocks-sample/block-inspected', // Name of the block with a required name space
    {
	    title: __('Editable Inspected Button (Sample)'), // Title, displayed in the editor
	    icon: 'universal-access-alt', // Icon, from WP icons
        category: 'common', // Block category, where the block will be added in the editor
    
        /**
         * Object with all binding elements between the view HTML and the functions
         * Let's you bind data from DOM elements and storage attributes
         */
        attributes: {
            // Text of the link-button
            link_text: { 
                selector: 'a', // From tag a
                source: 'children',  // binds children of a: the link text
            },
            // URL of the link-button
            link_url: { 
                selector: 'a', // From tag a
                source: 'attribute', // binds an attribute of the tag
                attribute: 'href', // binds href of a: the link url
            },
            // To storage background colour of the button
            button_color: { 
                type: 'string', 
                default: 'red', // Default value for newly added block
            },
            // To storage text colour of the button
            text_color: { 
                type: 'string',
                default: 'white', // Default value for newly added block
            },            
            // To storage the complete style of the button that will be 'merged' with the selected colours
            button_style: { 
                selector: 'a', // From tag a
                source: 'attribute', // binds an attribute of the tag
                attribute: 'style', // binds style of a: the dynamic colours
            }
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
            
            var link_text = props.attributes.link_text // To bind attribute link_text
            var link_url = props.attributes.link_url // To bind attribute link_url
            var text_color = props.attributes.text_color // To bind text colour
            var button_color = props.attributes.button_color // To bind button background colour

            // Style object for the button
            // I created a style in JSX sintax to keep it here for
            // the dynamic changes
            var button_style = props.attributes.button_style // To bind the style of the button
            button_style = {
                backgroundColor: button_color,
                color: text_color,
                padding: '14px 25px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',   
            }

            //
            // onChange event functions
            //
            function onChangeContentURL ( content ) {
                props.setAttributes({link_url: content})
            } 
            
            function onChangeContentName ( content ) {
                props.setAttributes({link_text: content})
            } 

            function onChangeButtonColor ( content ) {
                props.setAttributes({button_color: content})
            }   

            function onChangeTextColor ( content ) {
                props.setAttributes({text_color: content})
            }

            return [
                <InspectorControls> {/* Whatever is inside this block will be displayed on the sidebar */}
                    <div id="gbs-block-inspected-inspector-control-wrapper">
                        <label class="blocks-base-control__label" for="mce_2">URL</label>  {/* WordPress class for labels */}
                        <RichText
                            format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                            className="gbs-block-inspected-inspector-control-field"
                            onChange={onChangeContentURL} // onChange event callback
                            value={link_url} // Input Binding
                        />               
                        <label class="blocks-base-control__label">Button colour</label>  
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={onChangeButtonColor} // onChange event callback
                        />
                        <label class="blocks-base-control__label">Text colour</label>  
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={onChangeTextColor} // onChange event callback
                        />    
                    </div>
                </InspectorControls>
                ,
                <div id="gbs-block-inspected-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                    <a style={button_style}>
                        <RichText
                            onChange={onChangeContentName} // onChange event callback
                            value={link_text} // Input Binding
                            placeholder="Name of the link"
                        />
                    </a>
                </div>
            ]
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

            var button_style = {
                backgroundColor: props.attributes.button_color,
                color:  props.attributes.text_color,
            }

            return (
                <a style={button_style} href={props.attributes.link_url}>{props.attributes.link_text}</a>
            )
        },
    } 
);