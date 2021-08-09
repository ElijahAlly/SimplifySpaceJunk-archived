import React, { Component } from 'react';
import '../css/satellite-info-modal.css';

const SatelliteInfoModal = () => {
	const moreSatInfoNewTab = () => {
		let satId: any = document.getElementById('sat-id');
		if (!satId) return;
		satId = satId.innerText;
		satId = satId.slice(8);
		window.open(`https://www.n2yo.com/satellite/?s=${satId}#results`, '_blank');
	};

	return (
		<div
			className='satellite-modal'>
			<h1 id='sat-header'>Satellite Info</h1>
			<h3 id='sat-name'>Name: </h3>
			<h3 id='sat-id'>Sat Id: </h3>
			<div id='modal-footer'>
				<h3></h3>
				<h3 id='read-more' onClick={() => moreSatInfoNewTab()}>
					Read More
				</h3>
			</div>
		</div>
	);
};

export default SatelliteInfoModal;
