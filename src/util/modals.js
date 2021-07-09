// modal constants
const modalBackground = document.getElementsByClassName('modal-background')[0];
const modalForeground = document.getElementsByClassName('modal-foreground')[0];

// modal content
const welcomeModal = document.getElementById('welcome-modal')
const aboutModal = document.getElementById('about-modal')
const solutionsModal = document.getElementById('solutions-modal')
const contactModal = document.getElementById('contact-modal')
const closeModal = document.getElementById('close-modal')
const countdown = document.getElementById('countdown')

// modal nav links
const modalLinks = document.getElementsByClassName('modal-links');
const aboutLink = modalLinks[0];
const solutionsLink = modalLinks[1];
const contactLink = modalLinks[2];

export const handleModals = () => {
    // display welcome modal on page load
    modalBackground.style.display = 'block'
    modalForeground.style.display = 'flex'
    welcomeModal.style.display = 'flex'

    countdown.style.display = 'flex'

    
    // open modal logic
    aboutLink.addEventListener('click', () => openModal(aboutModal))
    solutionsLink.addEventListener('click', () => openModal(solutionsModal))
    contactLink.addEventListener('click', () =>  openModal(contactModal))
    
    // closing modal logic
    modalBackground.addEventListener('click', () => closeAllModals())
    closeModal.addEventListener('click', () => closeAllModals())
    //close welcome modal after 7 seconds
    setTimeout(() => closeAllModals(), 7000);
}

const openModal = (modal) => {
    modal.style.display = 'flex'

    modalBackground.style.display = 'block'
    modalForeground.style.display = 'flex'
    closeModal.style.display = 'flex'
}

const closeAllModals = () => {
    if (modalBackground.style.display === 'block') {
        modalBackground.style.display = 'none'
        modalForeground.style.display = 'none'
    
        welcomeModal.style.display = 'none'
        aboutModal.style.display = 'none'
        solutionsModal.style.display = 'none'
        contactModal.style.display = 'none'
        closeModal.style.display = 'none'
    }
}