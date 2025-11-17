import { headOfFamilyListOptions } from '@/lib/queries/head-of-family/headOfFamilyListOptions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { HeadOfFamilyList } from './HeadOfFamilyList';
import { useMemo } from 'react';
import { DataNotfound } from '../DataNotFound';
import { RowHeadOfFamilySkeleton } from '../skeleton/RowHeadOfFamilySkeleton';

export const HeadOfFamilyTable = () => {
	const [searchParams] = useSearchParams();

	const queryOptions = useMemo(() => headOfFamilyListOptions(searchParams.toString()), [searchParams])
	const { data, isLoading, isError } = useQuery(queryOptions);

	if (isLoading) return <RowHeadOfFamilySkeleton />;
	if (isError) return <p>Error</p>;

	const headOfFamilyData = data.data;
	const headOfFamilyPagination = data.pagination
	const isKeywordSearching = searchParams.get("keyword")

	if (headOfFamilyData.length <= 0) {
		if (isKeywordSearching) return <DataNotfound message={`Hasil pencarian untuk ${isKeywordSearching.toString()}`} />

		return <DataNotfound message='Data tidak ditemukan.' />
	}

	return <HeadOfFamilyList data={headOfFamilyData} pagination={headOfFamilyPagination} />;
};
