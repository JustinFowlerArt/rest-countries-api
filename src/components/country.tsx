import { iCountry } from './interfaces';

export const Country = ({ country }: { country: iCountry }) => {
	return (
		<div className='bg-white dark:bg-dark-blue'>
			<img src={`${country.flags.png}`} className='w-full'></img>
			<div className='p-6 pb-9 space-y-2'>
				<h2 className='text-sm font-extrabold pb-2'>{country.name.common}</h2>
				<h3 className='text-xs'>
					<span className='font-semibold'>Population: </span>
                    {country.population}
				</h3>
				<h3 className='text-xs'>
					<span className='font-semibold'>Region: </span>
					{country.region}
				</h3>
				<h3 className='text-xs'>
					<span className='font-semibold'>Capital: </span>
					{country.capital}
				</h3>
			</div>
		</div>
	);
};
