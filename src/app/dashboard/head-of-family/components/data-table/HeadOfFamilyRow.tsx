import { Button } from "@/components/ui/button";

interface HeadOfFamilyRowProps {
	imageUrl: string
	name: string
	occupation: string
	nik: string
	numbersOfFamilyMembers: number
}

export const HeadOfFamilyRow = ({imageUrl, name, occupation, nik, numbersOfFamilyMembers}: HeadOfFamilyRowProps) => {
	return (
		<div className="flex items-center justify-between bg-white p-6 rounded-3xl">
			<div className="flex items-center gap-4">
				<img src={imageUrl} alt="preview" className="size-14 rounded-full" />
				<div className="space-y-1">
					<h4 className="text-lg font-semibold">{name}</h4>
					<p className="text-sm text-village-secondary flex items-center gap-1">
						<img src="/images/icons/briefcase-secondary-green.svg" className="size-4" />
						<span>{occupation}</span>
					</p>
				</div>
			</div>

			<div className="space-y-1">
				<div className="flex items-center gap-1 text-village-secondary">
					<img src="/images/icons/keyboard-secondary-green.svg" className="size-4" />
					<span className="text-sm font-medium">NIK</span>
				</div>
				<div className="font-semibold">{nik}</div>
			</div>

			<div className="space-y-1 flex items-center gap-1 px-4 py-2 bg-blue-100 rounded-full">
				<img src="/images/icons/profile-2user-blue.svg" alt="family" className="size-4 mt-1" />
				<div className="mt-1 text-village-blue">{numbersOfFamilyMembers}</div>
				<div className="font-medium text-village-blue">Anggota Keluarga</div>
			</div>

			<Button className="font-semibold p-7 rounded-xl text-base cursor-pointer">Manage</Button>
		</div>
	);
};
