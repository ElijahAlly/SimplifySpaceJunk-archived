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
import './css/contact-form.css';
import './css/welcome-modal.css';

document.addEventListener('DOMContentLoaded', () => {
	handleModals();

	const root = document.getElementById('root');
	ReactDOM.render(<App />, root);
});
