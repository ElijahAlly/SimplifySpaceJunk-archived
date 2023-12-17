
export const getSatellites = async (i) => {
	return fetch(`https://tle.ivanstanojevic.me/api/tle?page-size=100&page=${i}&api_key=zfCLNrBegtOnEVufO9WRFjfHAi0kM3QgImp0q9Fx`,
			{
				method: 'GET',
			}
		)
		.then((res) => res.json())
		.then((data) => {
			console.log('parsed data', data);
			if (!data || !data.member) return null;
			return data.member;
		})
		.catch((err) => console.log(err));
};

