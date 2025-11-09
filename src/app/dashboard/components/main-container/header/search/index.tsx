import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';


export const SearchProfile = () => {
	return (
		<form action="" className="w-full">
			<InputGroup className="w-full rounded-full py-6">
				<InputGroupInput placeholder="Cari nama penduduk, pengajuan, events, dll" className="placeholder:text-village-dark-green font-medium" />
				<InputGroupAddon className='pl-6 pr-2'>
					<SearchIcon className="text-village-dark-green" />
				</InputGroupAddon>
			</InputGroup>
		</form>
	);
};
