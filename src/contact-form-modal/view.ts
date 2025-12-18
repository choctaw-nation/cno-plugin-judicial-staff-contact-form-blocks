import { store, getContext } from '@wordpress/interactivity';

type ServerState = {
	isModalOpen: boolean;
	staffEmail: string;
	formSubmitted: boolean;
	modal: HTMLDialogElement | null;
};

const { state, actions } = store( 'staffContactForm', {
	state: {
		modal: null as HTMLDialogElement | null,
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
		initModal() {
			const dialog = document.getElementById(
				'contactFormModal'
			) as HTMLDialogElement;
			if ( dialog ) {
				state.modal = dialog;
			}
		},
		syncDialog() {
			if ( ! state.modal ) {
				return;
			}
			const dialog = state.modal;
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
