import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const LimitFilter = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="font-medium">Show</div>
			<Select>
				<SelectTrigger className="bg-white border-none px-8 py-7 rounded-xl text-base">
					<SelectValue placeholder="Entries" />
				</SelectTrigger>

				<SelectContent className="*:text-base">
					<SelectItem value="5">5 Entries</SelectItem>
					<SelectItem value="15">15 Entries</SelectItem>
					<SelectItem value="20">20 Entries</SelectItem>
					<SelectItem value="25">25 Entries</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
