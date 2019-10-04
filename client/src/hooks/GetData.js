import { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = (url) => {
	const [ data, setData ] = useState([ { name: '' }, { name: '' } ]);

	useEffect(
		() => {
			axios.get(url).then((response) => {
				console.log('Get data response', response);
				setData(response.data);
			});
		},
		[ url ]
	);

	return data;
};

export default GetData;
