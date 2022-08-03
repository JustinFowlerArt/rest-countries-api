import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { iCountry, iError } from './interfaces';

interface Props {
	countries: iCountry[];
	loading: boolean;
	error: iError | null;
}

export const CountryDetail = ({ countries, loading, error }: Props) => {
	const { slug } = useParams();

	const [country, setCountry] = useState<iCountry>();

	useEffect(() => {
		if (slug) {
			if (country?.cca3 === slug) return;
			setCountry(
				countries.find(country => {
					return country.cca3.toLowerCase().includes(slug.toLowerCase());
				})
			);
		}
	}, [countries, slug, country]);

	const mapObject = <T,>(object: T, prop: string, subObject = false) => {
		const property = object[prop as keyof T];
		const end = Object.keys(property).length - 1;
		return Object.keys(property).map((k, index) => {
			const keyedProperty = property[k as keyof typeof property];
			let value = '';
			subObject
				? (value = `${keyedProperty[Object.keys(keyedProperty)[0]]}`)
				: (value = `${keyedProperty}`);
			return (value += index !== end ? ', ' : '');
		});
	};

	return (
		<div className='lg:px-6 xl:px-14'>
			{loading ? (
				<h2 className='text-lg font-extrabold'>Loading...</h2>
			) : error ? (
				<h2 className='text-red-500 text-lg font-extrabold'>
					Error loading countries
				</h2>
			) : country ? (
				<>
					<Link
						className='shadow px-6 py-2 text-xs bg-white dark:bg-dark-blue'
						to='/'
					>
						<i className='fa-solid fa-arrow-left mr-3'></i>Back
					</Link>
					<div className='lg:flex items-center mt-14 '>
						<img
							src={`${country.flags.png}`}
							className='w-full mb-8 lg:w-1/2 lg:mr-24 lg:mb-0'
						></img>

						<div className='pb-9 lg:w-1/2 lg:pb-0'>
							<h2 className='text-sm font-extrabold pb-2 lg:text-2xl lg:pb-0'>
								{country.name.common}
							</h2>
							<div className='text-xs lg:flex lg:justify-between mb-6 lg:mb-12 lg:mt-6 lg:text-base'>
								<div className='space-y-2'>
									<h3>
										<span className='font-semibold'>Native Name: </span>
										<span>
											{
												country.name.nativeName[
													Object.keys(country.name.nativeName)[0]
												].common
											}
										</span>
									</h3>
									<h3>
										<span className='font-semibold'>Population: </span>
										{country.population.toLocaleString()}
									</h3>
									<h3>
										<span className='font-semibold'>Region: </span>
										{country.region}
									</h3>
									<h3>
										<span className='font-semibold'>Sub Region: </span>
										{country.subregion}
									</h3>
									<h3>
										<span className='font-semibold'>Capital: </span>
										{country.capital.map((capital, index) => (
											<span key={index}>
												{capital}
												{index !== country.capital.length - 1 && ', '}
											</span>
										))}
									</h3>
								</div>

								<div className='space-y-2'>
									<h3>
										<span className='font-semibold'>Top Level Domain: </span>
										{country.tld.map((domain, index) => (
											<span key={index}>
												{domain}
												{index !== country.tld.length - 1 && ', '}
											</span>
										))}
									</h3>
									<h3>
										<span className='font-semibold'>Currency: </span>
										{mapObject<iCountry>(country, 'currencies', true).map(
											currency => (
												<span key={currency}>{currency}</span>
											)
										)}
									</h3>
									<h3>
										<span className='font-semibold'>Languages: </span>
										{mapObject<iCountry>(country, 'languages').map(language => (
											<span key={language}>{language}</span>
										))}
									</h3>
								</div>
							</div>

							<div className='lg:flex'>
								<h2 className='text-sm font-extrabold pb-2 mb-2 lg:mb-0 lg:mr-3 lg:whitespace-nowrap'>
									Border Countries:
								</h2>
								<div className='flex flex-wrap space-around gap-2'>
									{country.borders?.map(countryCode => (
										<Link
											className='shadow px-6 py-1 text-xs bg-white dark:bg-dark-blue'
											key={countryCode}
											to={`/country/${countryCode}`}
										>
											{
												countries.find(country => country.cca3 === countryCode)
													?.name.common
											}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<h2 className='text-lg font-extrabold'>Country not found</h2>
			)}
		</div>
	);
};
