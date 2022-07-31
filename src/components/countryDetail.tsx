import { useParams } from 'react-router-dom';

export const CountryDetail = () => {
	const {slug} = useParams()
    console.log(slug)
	return <h1>Detail Page</h1>;
};
