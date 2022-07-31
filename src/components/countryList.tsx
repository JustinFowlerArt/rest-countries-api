import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountryLookup } from './countryLookup';
import { RegionFilter } from './regionFilter';
import { iCountry, iError } from './interfaces';
import { useFetch } from '../hooks/useFetch';
import { Country } from './country';

export const CountryList = () => {
	const [lookup, setLookup] = useState({
		search: '',
		region: '',
	});
	const [countries, setCountries] = useState<iCountry[]>([]);

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

	useEffect(() => {
		if (data && !loading) {
			if (data === countries) return;
			setCountries(data);
		}
	}, [data, countries, loading]);

	const filterResults = () => {
		let results = countries;
		if (lookup.search) {
			results = results.filter(country => {
				return country.name.common
					.toLowerCase()
					.includes(lookup.search.toLowerCase());
			});
		}
		if (lookup.region) {
			results = results.filter(country => {
				return country.region
					.toLowerCase()
					.includes(lookup.region.toLowerCase());
			});
		}
		return results;
	};

	return (
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
					{countries &&
						filterResults().map(country => (
							<Link key={country.cca3} to={`/country/${country.cca3}`}>
								<Country country={country} />
							</Link>
						))}
				</div>
			)}
		</div>
	);
};
