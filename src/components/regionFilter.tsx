interface Props {
	region: string;
    handleChange: (name: string, value: string) => void}

export const RegionFilter = ({ region, handleChange }: Props) => {
	return (
		<select
			value={region}
            name='region'
			onChange={e => handleChange(e.target.name, e.target.value)}
			className='w-3/5 dark:bg-dark-blue dark:placeholder:text-white px-6 py-4 text-sm shadow rounded-md sm:w-1/3 md:w-1/4 xl:w-1/6'
		>
			<option value=''>Filter by Region</option>
			<option value='africa'>Africa</option>
			<option value='america'>America</option>
			<option value='asia'>Asia</option>
			<option value='europe'>Europe</option>
			<option value='oceania'>Oceania</option>
		</select>
	);
};
