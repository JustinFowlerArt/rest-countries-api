import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { CountryList } from './components/countryList';
import { Route, Routes } from 'react-router-dom';
import { CountryDetail } from './components/countryDetail';
import { iCountry, iError } from './components/interfaces';
import { useFetch } from './hooks/useFetch';

export const App = () => {
	const [theme, setTheme] = useState('');

	const [countries, setCountries] = useState<iCountry[]>([]);

	const endpoint = 'https://restcountries.com/v3.1/all'

	const { data, error, loading, getData } = useFetch<iCountry[], iError>(
		endpoint,
		{
			immediate: false,
		}
	);

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

	useEffect(() => {
		getData();
	}, [getData]);

	useEffect(() => {
		if (data && !loading) {
			if (data === countries) return;
			setCountries(data);
		}
	}, [data, countries, loading]);

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
					<Route
						path='/'
						element={
							<CountryList
								countries={countries}
								loading={loading}
								error={error}
							/>
						}
					/>
					<Route
						path='country/:slug'
						element={
							<CountryDetail
								countries={countries}
								loading={loading}
								error={error}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
};
