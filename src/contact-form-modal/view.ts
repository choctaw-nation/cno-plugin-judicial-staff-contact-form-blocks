import { store, getContext, getElement } from '@wordpress/interactivity';

export type ServerState = {
	state: {
		isModalOpen: boolean;
		staffEmail: string;
		formSubmitted: boolean;
		modal: HTMLDialogElement;
	};
};

const { state, actions } = store( 'staffContactForm', {
	state: {
		get modal() {
			return document.getElementById(
				'contactFormModal'
			) as HTMLDialogElement;
		},
	},
	actions: {
		openModal() {
			state.isModalOpen = true;
			state.modal.showModal();
			const context = getContext();
			if ( context?.staffEmail ) {
				state.staffEmail = context.staffEmail;
				const staffInputField = state.modal.querySelector(
					'#input_2_4'
				) as HTMLInputElement;
				if ( staffInputField ) {
					staffInputField.value = state.staffEmail;
				}
			}
			document.body.style.overflow = 'hidden';
		},
		closeModal() {
			state.isModalOpen = false;
			state.modal.close();
			document.body.style.overflow = '';
			const form = state.modal.querySelector(
				'#gform_2'
			) as HTMLFormElement;
			if ( form ) {
				form.reset();
			}
		},
	},
	callbacks: {
		syncDialog() {
			const dialog = document.getElementById(
				'contactFormModal'
			) as HTMLDialogElement;
			if ( ! dialog ) {
				return;
			}
			if ( state.isModalOpen ) {
				actions.openModal();
				const closeButton = dialog.querySelector(
					'.btn-close'
				) as HTMLButtonElement;
				if ( ! closeButton ) {
					return;
				}
				closeButton.addEventListener( 'click', () => {
					actions.closeModal();
				} );
			} else {
				actions.closeModal();
			}
		},
	},
} );
