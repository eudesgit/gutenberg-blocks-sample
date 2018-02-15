const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('gutenberg-block-samples/block-simple', {
	title: __('Simple Red Title (Sample)'),
	icon: 'universal-access-alt',
	category: 'common',
	edit ( {className} ) {
		return <p className={className}>This custom block will create a red title</p>;
	},
	save ( ) {
		return <h1>The custom red title :)</h1>;
	},
} );