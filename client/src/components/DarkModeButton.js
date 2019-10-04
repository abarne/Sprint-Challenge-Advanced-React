import React, { useState } from 'react';
import { useDarkMode } from './useDarkMode';

const DarkModeButton = () => {
	// const [darkMode, setDarkMode] = useState(false);
	const [ darkMode, setDarkMode ] = useDarkMode('dark', false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
			<div className="dark-mode__toggle">
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default DarkModeButton;
