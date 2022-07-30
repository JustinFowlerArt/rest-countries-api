import { CountryLookup } from './countryLookup';
import { RegionFilter } from './regionFilter';
import { iCountry, iError } from './interfaces';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Country } from './country';

export const CountryList = () => {
	const [lookup, setLookup] = useState({
		search: '',
		region: '',
	});

	const handleChange = (name: string, value: string) => {
		setLookup({ ...lookup, [name]: value });
	};

	// const endpoint = 'https://restcountries.com/v3.1/all'

	const endpoint = 'https://restcountries.com/v3.1/alpha/DEU';

	const { data, error, loading, getData } = useFetch<iCountry[], iError>(
		endpoint,
		{
			immediate: false,
		}
	);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<main className='min-h-screen p-6 lg:py-12'>
			<div className='space-y-12'>
				<div className='flex flex-col sm:flex-row sm:justify-between lg:px-6 xl:px-14'>
					<CountryLookup search={lookup.search} handleChange={handleChange} />
					<RegionFilter region={lookup.region} handleChange={handleChange} />
				</div>
				{loading && <h2 className='text-lg font-extrabold'>Loading...</h2>}
				{error ? (
					<h2 className='text-red-500 text-lg font-extrabold'>
						Error loading countries
					</h2>
				) : (
					<div className='grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:px-14'>
						{data?.map(country => (
							<Country key={country.cca3} country={country} />
						))}
					</div>
				)}
			</div>
		</main>
	);
};
