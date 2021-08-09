// modal constants
const modalBackground: any = document.getElementsByClassName('modal-background')[0];
const modalForeground: any = document.getElementsByClassName('modal-foreground')[0];

// modal content
const welcomeModal: any = document.getElementById('welcome-modal');
const aboutModal: any = document.getElementById('about-modal');
const solutionsModal: any = document.getElementById('solutions-modal');
const contactModal: any = document.getElementById('contact-modal');
const closeModal: any = document.getElementById('close-modal');
const countdown: any = document.getElementById('countdown');

// modal nav links
const modalLinks: any = document.getElementsByClassName('nav-links');
const welcomeLink: any = modalLinks[0];
const aboutLink: any = modalLinks[1];
const solutionsLink: any = modalLinks[2];
const contactLink: any = modalLinks[3];

export const handleModals = () => {
	let openedWelcomeModal = false;
	// display welcome modal on page load if its first page load
	if (!parseInt(localStorage.getItem('pageNum') || "1")) {
		openedWelcomeModal = true;
		modalBackground.style.display = 'block';
		modalForeground.style.display = 'flex';
		welcomeModal.style.display = 'flex';

		countdown.style.display = 'flex';
	}

	// open modal logic
	welcomeLink.addEventListener('click', () =>
		openModal(welcomeModal, countdown)
	);
	aboutLink.addEventListener('click', () => openModal(aboutModal));
	solutionsLink.addEventListener('click', () => openModal(solutionsModal));
	contactLink.addEventListener('click', () => openModal(contactModal));

	// closing modal logic
	modalBackground.addEventListener('click', () => closeAllModals());
	closeModal.addEventListener('click', () => closeAllModals());

	//close welcome modal after 7 seconds
	if (openedWelcomeModal) setTimeout(() => closeAllModals(), 7000);
};

const openModal = (modal: any, countdownTimer = null) => {
	welcomeModal.style.display = 'none';

	modal.style.display = 'flex';
	modalBackground.style.display = 'block';
	modalForeground.style.display = 'flex';

	if (countdownTimer) {
		countdown.style.display = 'flex';
		return;
	}

	countdown.style.display = 'none';
	closeModal.style.display = 'flex';
};

const closeAllModals = () => {
	if (modalBackground.style.display === 'block') {
		modalBackground.style.display = 'none';
		modalForeground.style.display = 'none';

		welcomeModal.style.display = 'none';
		aboutModal.style.display = 'none';
		solutionsModal.style.display = 'none';
		contactModal.style.display = 'none';
		closeModal.style.display = 'none';
	}
};
