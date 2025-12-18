import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, Tip } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit( { attributes: { isVisible }, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Visible"
						checked={ isVisible }
						onChange={ ( value ) =>
							setAttributes( { isVisible: value } )
						}
						help="Toggle the visibility of the staff contact modal in the editor."
					/>
					<Tip>
						This block (and the related staff contact form block)
						are directly tied to this gravity form. Do not switch
						it!
					</Tip>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ isVisible ? (
					<InnerBlocks allowedBlocks={ [ 'gravityforms/form' ] } />
				) : (
					<Fragment>
						<h3
							style={ {
								fontSize: 'var(--wp--preset--font-size--sm)',
							} }
						>
							Staff Contact Form Modal
						</h3>
						<Tip>
							This block (and the related staff contact form
							block) are directly tied to this gravity form. Do
							not switch it!
						</Tip>
					</Fragment>
				) }
			</div>
		</Fragment>
	);
}
