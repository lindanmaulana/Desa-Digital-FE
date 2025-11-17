import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToolbar } from '../../hooks/useToolbar';
import { useSearchParams } from 'react-router';

export const SortFilter = () => {
	const [searchParams] = useSearchParams()
	const {handleSortFilter} = useToolbar();

	const defaultSort = searchParams.get("sort")
	const valueSort = defaultSort ? defaultSort.toString() : ""

	return (
		<Select onValueChange={(value) => handleSortFilter(value)} defaultValue={valueSort}>
			<SelectTrigger className="bg-white border-none px-8 py-7 rounded-xl text-base">
				<SelectValue placeholder="Sort" />
			</SelectTrigger>

			<SelectContent className="*:text-base">
				<SelectItem value="example">Normal</SelectItem>
				<SelectItem value="asc">A - Z</SelectItem>
				<SelectItem value="desc">Z - A</SelectItem>
			</SelectContent>
		</Select>
	);
};
