interface Props {
	search: string;
	handleChange: (name: string, value: string) => void
}

export const CountryLookup = ({ search, handleChange }: Props) => {
	return (
		<form className='flex items-center mb-10 bg-white text-dark-gray dark:text-white dark:bg-dark-blue shadow rounded-md sm:mb-0 sm:w-1/2 md:w-2/5 xl:w-1/3'>
			<i className='fa-solid fa-magnifying-glass pl-9 pr-2 py-4'></i>
			<input
				type='text'
                name='search'
				value={search}
				onChange={e => handleChange(e.target.name, e.target.value)}
				placeholder='Search for a country...'
				className='w-full dark:bg-dark-blue dark:placeholder:text-white px-6 py-4 text-sm'
			></input>
		</form>
	);
};
