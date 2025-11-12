import { headOfFamilyListOptions } from '@/lib/queries/head-of-family/headOfFamilyListOptions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { HeadOfFamilyList } from './HeadOfFamilyList';

export const HeadOfFamilyTable = () => {
	const [searchParams] = useSearchParams();

	const { data, isLoading, isError } = useQuery(headOfFamilyListOptions(searchParams.toString()));

	if (isLoading) return <p>Loading Please waitt...</p>;
	if (isError) return <p>Error</p>;

	const headOfFamilyData = data.data;

	return <HeadOfFamilyList data={headOfFamilyData} />;
};
