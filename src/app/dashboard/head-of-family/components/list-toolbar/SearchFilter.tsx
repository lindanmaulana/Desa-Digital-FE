import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { UserRoundSearch } from 'lucide-react';

export const SearchFilter = () => {
	return (
		<InputGroup className="w-full max-w-1/3 rounded-xl py-6 bg-white border-none">
			<InputGroupInput placeholder="Cari nama Kepala Rumah atau NIK" className="placeholder:text-village-secondary placeholder:text-base font-medium " />
			<InputGroupAddon className="pl-6 pr-2">
				<UserRoundSearch className="size-6 text-village-secondary" />
			</InputGroupAddon>
		</InputGroup>
	);
};
