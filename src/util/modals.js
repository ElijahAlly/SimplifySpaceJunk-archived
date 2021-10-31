// modal constants
const modalBackground = document.getElementsByClassName('modal-background')[0];
const modalForeground = document.getElementsByClassName('modal-foreground')[0];

// modal content
const welcomeModal = document.getElementById('welcome-modal');
const aboutModal = document.getElementById('about-modal');
const solutionsModal = document.getElementById('solutions-modal');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');
const countdown = document.getElementById('countdown');

// modal nav links
const modalLinks = document.getElementsByClassName('nav-links');
const welcomeLink = modalLinks[0];
const aboutLink = modalLinks[1];
const solutionsLink = modalLinks[2];
const contactLink = modalLinks[3];

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

const openModal = (modal, countdownTimer = null) => {
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
