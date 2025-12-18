import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { button } from '@wordpress/icons';
import metadata from './block.json';

import Edit from './Edit';
import './style.scss';

registerBlockType( metadata.name, {
	icon: button,
	edit: Edit,
	save: () => (
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName="button"
			type="button"
		/>
	),
} );
