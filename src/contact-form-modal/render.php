<?php
/**
 * Staff Contact Form Block
 *
 * @package ChoctawNation
 */

wp_interactivity_state(
	'staffContactForm',
	array(
		'isModalOpen'   => false,
		'staffEmail'    => '',
		'formSubmitted' => false,
	)
);
?>
<span hidden data-wp-interactive="staffContactForm" data-wp-watch="callbacks.syncDialog" data-wp-on-document--ready="callbacks.initModal"></span>
<dialog id="contactFormModal" <?php echo get_block_wrapper_attributes(); ?>>
    <div class="wp-block-cno-staff-contact-modal__header">
        <h1 class="wp-block-cno-staff-contact-modal__title fs-5" id="contactFormModalLabel">Contact Us</h1>
        <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="wp-block-cno-staff-contact-modal__body">
        <?php echo $content; ?>
    </div>
</dialog>