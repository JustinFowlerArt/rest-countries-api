import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { CountryList } from './components/countryList';
import { Route, Routes } from 'react-router-dom';
import { CountryDetail } from './components/countryDetail';

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
			className={`min-h-screen ${
				theme === 'dark'
					? 'dark bg-darker-blue text-white'
					: 'bg-light-gray text-darkest-blue'
			}`}
		>
			<Header changeTheme={changeTheme} theme={theme} />
			<main className='p-6 lg:py-12'>
				<Routes>
					<Route path='/' element={<CountryList />} />
					<Route path='country/:slug' element={<CountryDetail />} />
				</Routes>
			</main>
		</div>
	);
};
