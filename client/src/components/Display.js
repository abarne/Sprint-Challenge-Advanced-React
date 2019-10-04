import React, { useEffect } from 'react';
import GetData from '../hooks/GetData';

export default function Display() {
	const [ data, setData ] = GetData('http://localhost:5000/api/players');

	console.log('display component data', data);
	return (
		<div className="mostSearched">
			<h1>Most Searches</h1>
			{/* {data.foreach((item) => <h1>{item.name}</h1>)} */}
			<h2>{data.name}</h2>
			<h3>Country: {data.country}</h3>
			<h3>Number of Searches: {data.searches}</h3>
		</div>
	);
}
