<?php
/**
 * Staff Contact Form Block
 *
 * @package ChoctawNation
 */

$block_props = get_block_wrapper_attributes(
	array(
		'type' => 'button',
	)
);
$context     = wp_interactivity_data_wp_context(
	array(
		'staffEmail' => $attributes['emailAddress'] ?? '',
	)
);
?>
<button data-wp-interactive="staffContactForm" <?php echo $block_props . $context; ?> data-wp-on--click="actions.openModal">
	<?php echo $attributes['buttonText'] ?? 'Contact Form'; ?>
</button>
