import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// util imports
import { handleModals } from './util/modals';

// css imports
import './css/navbar.css';
import './css/reset.css';
import './css/main.css';
import './css/modals.css';
import './css/contact-modal.css';
import './css/welcome-modal.css';
import './css/solutions-modal.css';
import './css/about-modal.css';

handleModals();

if (!localStorage.getItem('pageNum')) {
	localStorage.setItem('pageNum', '1');
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	ReactDOM.render(<App />, root);
});
