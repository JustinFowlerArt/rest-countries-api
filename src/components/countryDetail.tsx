import { useLocation, useParams, Link } from 'react-router-dom';
import { iCountry } from './interfaces';

export const CountryDetail = () => {
	// const { slug } = useParams();
	const location = useLocation();
	const state = location.state as iCountry;

	return (
		<div className='lg:px-6 xl:px-14'>
			<Link
				className='shadow px-6 py-2 text-xs bg-white dark:bg-dark-blue'
				to='/'
			>
				<i className='fa-solid fa-arrow-left mr-3'></i>Back
			</Link>
			<div className='lg:flex items-center mt-14 '>
				<img
					src={`${state.flags.png}`}
					className='w-full mb-8 lg:w-1/2 lg:mr-24 lg:mb-0'
				></img>

				<div className='pb-9 lg:w-1/2 lg:pb-0'>
					<h2 className='text-sm font-extrabold pb-2 lg:text-2xl lg:pb-0'>
						{state.name.common}
					</h2>
					<div className='text-xs lg:flex lg:justify-between mb-6 lg:mb-12 lg:mt-6 lg:text-base'>
						<div className='space-y-2'>
							<h3>
								<span className='font-semibold'>
									Native Name: {state.name.nativeName.official}
								</span>
							</h3>
							<h3>
								<span className='font-semibold'>Population: </span>
								{state.population.toLocaleString()}
							</h3>
							<h3>
								<span className='font-semibold'>Region: </span>
								{state.region}
							</h3>
							<h3>
								<span className='font-semibold'>Sub Region: </span>
								{state.subregion}
							</h3>
							<h3>
								<span className='font-semibold'>Capital: </span>
								{state.capital}
							</h3>
						</div>

						<div className='space-y-2'>
							<h3>
								<span className='font-semibold'>
									Top Level Domain:{' '}
									{state.tld.map(domain => (
										<span key={domain}>{domain}</span>
									))}
								</span>
							</h3>
							<h3>
								<span className='font-semibold'>Currency: </span>
								{state.currencies.name}
							</h3>
							<h3>
								<span className='font-semibold'>Languages: </span>
								{state.languages.name}
							</h3>
						</div>
					</div>

					<div className='lg:flex'>
						<h2 className='text-sm font-extrabold pb-2 mb-2 lg:mb-0 lg:mr-3 lg:whitespace-nowrap'>
							Border Countries:
						</h2>
						<div className='flex flex-wrap space-around gap-2'>
							{state.borders?.map(country => (
								<Link
									className='shadow px-6 py-1 text-xs bg-white dark:bg-dark-blue'
									key={country}
									to='/'
								>
									{country}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
