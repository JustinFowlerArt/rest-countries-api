import { Link } from 'react-router-dom';

interface Props {
	changeTheme: () => void;
	theme: string;
}

export const Header = ({ changeTheme, theme }: Props) => {
	return (
		<header className='flex justify-between items-center bg-white h-min dark:bg-dark-blue px-6 py-9 shadow md:py-6 lg:px-12 xl:px-20'>
			<Link to='/'>
				<h1 className='font-extrabold'>Where in the world?</h1>
			</Link>
			<div onClick={() => changeTheme()}>
				{theme === 'dark' ? (
					<i className='fa-solid fa-moon'></i>
				) : (
					<i className='fa-regular fa-moon'></i>
				)}
				<button className='font-semibold text-sm pl-2'>Dark Mode</button>
			</div>
		</header>
	);
};
