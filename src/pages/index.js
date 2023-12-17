import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Legend from '@/components/Legend';
import SpaceContainer from '@/components/SpaceContainer';

// Modals
import WelcomeModal from '@/components/modals/WelcomeModal';
import ContactModal from '@/components/modals/ContactModal';
import AboutModal from '@/components/modals/AboutModal';
import SolutionsModal from '@/components/modals/SolutionsModal';

export default function Home() {
  const [activeModalComponent, setActiveModalComponent] = useState('Welcome');
  const [showModal, setShowModal] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // display welcome modal on page load if its first page load
    if (!parseInt(localStorage.getItem('pageNum') || "0")) {
      openModal(WelcomeModal, 6, 'Welcome');
      localStorage.setItem('pageNum', 1);
    }
  }, [])

  const openModal = (modal, countdownTimer = 0, modalName = '') => { // pass "countdownTimer = 6" for 6 seconds
    if (countdownTimer === 0) setIsFirstLoad(false);
    setActiveModalComponent(modalName);
    setShowModal(true);
    if (countdownTimer) {
      setTimeout(() => { closeModal(); setIsFirstLoad(false); }, countdownTimer * 1000);
    }
  };
  
  const closeModal = () => {
    setActiveModalComponent('');
    setShowModal(false);
  };

  const handleNavLinkClick = (component) => {
    switch (component) {
      case 'Welcome':
        openModal(WelcomeModal, 0, component);
        break;
      case 'Solutions':
        openModal(SolutionsModal, 0, component);
        break;
      case 'About':
        openModal(AboutModal, 0, component);
        break;
      case 'Contact':
        openModal(ContactModal, 0, component);
        break;
    
      default:
        break;
    }
  }

  const getModal = () => {
    switch (activeModalComponent) {
      case "Welcome":
        return <WelcomeModal />;
      case "Contact":
        return <ContactModal />;
      case "About":
        return <AboutModal />;
      case "Solutions":
        return <SolutionsModal />;
    
      default:
        break;
    }
  }

  return (
    <>
      <Head>
        <title>SimplifySpaceJunk</title>
        <meta name="description" content="A simpler way to view the junk orbiting our pale blue dot." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="title" property="og:title" content="SimplifySpaceJunk" />
        <meta property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://elijahally.github.io/SimplifySpaceJunk/" />
      </Head>
      <main>
        <Navbar handleNavLinkClick={ handleNavLinkClick } />
        <Legend />
        <SpaceContainer />
        <>
          <section className={ `modal-background ${showModal && 'modal-background-show'}` } onClick={ closeModal }></section>
          <section className={ `modal-foreground ${showModal && 'modal-foreground-show'}` }>
            { getModal() }
            { isFirstLoad ? (
              <>
                <div className="stage">
                  <div className="dot-flashing"></div>
                </div>
                <div className='countdown'>
                  <div>Launching site</div>
                </div>
              </>
            ) : (
              <div className="close-modal" onClick={closeModal}>CLOSE</div>
            )}
          </section>
        </>
      </main>
    </>
  )
}
