import { LimitFilter } from "./LimitFilter"
import { SearchFilter } from "./SearchFilter"
import { SortFilter } from "./SortFilter"

export const ListToolbar = () => {
	return (
		<div className="flex items-center justify-between">
			<SearchFilter />

			<div className="flex items-center gap-4">
				<LimitFilter />
				<SortFilter />
			</div>
		</div>
	)
}
