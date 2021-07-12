export const formatPostion = (position) => {
    if (position < 0 && position < -150) {
		position = `${position}`;
		position = position.slice(0, 3);
		position = parseInt(position)
	} else if (position > 0 && position > 150) {
		position = `${position}`;
		position = position.slice(0, 2);
		position = parseInt(position)
	}

    return position;
}

export const displaySatInfo = ({satelliteId, name}) => {
	const satInfoModal = document.getElementsByClassName('satellite-modal')[0];
	satInfoModal.style.display = 'flex'
	document.body.style.cursor = 'pointer';
	
	const satId = document.getElementById("sat-id");
	const satName = document.getElementById("sat-name");
	if (satId.innerText !== satelliteId) pulseGreen()

	satId.innerText =''
	satName.innerText =''
	let id = document.createTextNode(`Sat Id: ${satelliteId}`);
	name = document.createTextNode(`Name: ${name}`);
	satId.appendChild(id);
	satName.appendChild(name);
}

export const closeSatInfo = () => {
	const satInfoModal = document.getElementsByClassName('satellite-modal')[0];
	satInfoModal.style.display = 'none'
	document.body.style.cursor = 'auto';

	const satId = document.getElementById("sat-id");
	const satName = document.getElementById("sat-name");
	satId.innerText = 'Sat Id: ';
	satName.innerText = 'Name: ';
}

export const toggleMount = () => {
	const satInfoModal = document.getElementsByClassName('satellite-modal')[0];

	if (Array.from(satInfoModal.classList).includes('mounted')) {
		satInfoModal.classList.remove('mounted');
		return;
	}

	satInfoModal.classList.add('mounted');
	pulseGreen()
}

export const isMounted = () => {
	const satInfoModal = document.getElementsByClassName('satellite-modal')[0];
	if (Array.from(satInfoModal.classList).includes('mounted')) return true;
	return false;
}

export const pulseGreen = () => {
	const satInfoModal = document.getElementsByClassName('satellite-modal')[0];
	satInfoModal.style.backgroundColor = '#451728'
	setTimeout(() => satInfoModal.style.backgroundColor = ' #31344e', 400)
}

