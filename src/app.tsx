import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { CountryList } from './components/countryList';

export const App = () => {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			localStorage.theme = 'dark';
		} else {
			setTheme('light');
			localStorage.theme = 'light';
		}
	};

	return (
		<div
			className={
				theme === 'dark'
					? 'dark bg-darker-blue text-white'
					: 'bg-light-gray text-darkest-blue'
			}
		>
			<Header changeTheme={changeTheme} theme={theme} />
			<CountryList />
		</div>
	);
};
