# gutenberg-blocks-sample

A few samples of WordPress Gutenberg blocks.

## Requirements

* NPM
* Babel

## Compatibility

* WordPress 4.0+
* Gutenberg 2.2+

## Getting started

Every block has its own folder and they're all coded using JSX markup, so to build your block, you'll need to access the block folder and install all dependencies with NPM.

``
npm install
``

After that, you just need to start the builder, that you'll listen to whatever changes on your block.js

``
npm run dev
``

This will generate your block.build.js that is the script that has to be uploaded.

## block-simple

Block simple provides a sample of a basic non-editable block.

## block-editable

A sample of an editable block.

## block-inspected

A sample of an editable block with sidebar inspected controls.
