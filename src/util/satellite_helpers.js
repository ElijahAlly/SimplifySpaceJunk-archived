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

export const chooseColor = () => {
	const colors = ['#989494', '#a29f9f', '#6a6868', '#7a7676', '#c1bfbf']
	let color = colors[Math.floor(Math.random()*colors.length)];
	return color;
}