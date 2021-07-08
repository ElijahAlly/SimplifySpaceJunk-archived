export const handleModals = () => {
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

    // display welcome modal on page load
    modalBackground.style.display = 'block'
    modalForeground.style.display = 'flex'
    welcomeModal.style.display = 'flex'

    countdown.style.display = 'flex'

    //close welcome modal after 7 seconds
    setTimeout(() => {
        if (modalBackground.style.display === 'block') {
            modalBackground.style.display = 'none'
            modalForeground.style.display = 'none'
        
            welcomeModal.style.display = 'none'
            aboutModal.style.display = 'none'
            solutionsModal.style.display = 'none'
            contactModal.style.display = 'none'
            countdown.style.display = 'none'
        }
    }, 7000);

    // open modal logic
    aboutLink.addEventListener('click', () => {
        modalBackground.style.display = 'block'
        modalForeground.style.display = 'flex'
        aboutModal.style.display = 'flex'
        closeModal.style.display = 'flex'
    })

    solutionsLink.addEventListener('click', () => {
        modalBackground.style.display = 'block'
        modalForeground.style.display = 'flex'
        solutionsModal.style.display = 'flex'
        closeModal.style.display = 'flex'
    })

    contactLink.addEventListener('click', () => {
        modalBackground.style.display = 'block'
        modalForeground.style.display = 'flex'
        contactModal.style.display = 'flex'
        closeModal.style.display = 'flex'
    })

    // closing modal logic
    modalBackground.addEventListener('click', () => {
        if (modalBackground.style.display === 'block') {
            modalBackground.style.display = 'none'
            modalForeground.style.display = 'none'
        
            welcomeModal.style.display = 'none'
            aboutModal.style.display = 'none'
            solutionsModal.style.display = 'none'
            contactModal.style.display = 'none'
            closeModal.style.display = 'none'
        }
    })

    closeModal.addEventListener('click', () => {
        if (modalBackground.style.display === 'block') {
            modalBackground.style.display = 'none'
            modalForeground.style.display = 'none'
        
            welcomeModal.style.display = 'none'
            aboutModal.style.display = 'none'
            solutionsModal.style.display = 'none'
            contactModal.style.display = 'none'
            closeModal.style.display = 'none'
        }
    })
}

    