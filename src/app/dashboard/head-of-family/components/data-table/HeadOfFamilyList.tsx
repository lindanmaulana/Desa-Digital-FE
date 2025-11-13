import { getImageUrlHandler } from '@/lib/helpers/getImageUrl';
import type { User } from '@/types/users/user.types';
import { HeadOfFamilyRow } from './HeadOfFamilyRow';

interface HeadOfFamilyListProps {
	data: User[];
}

export const HeadOfFamilyList = ({ data }: HeadOfFamilyListProps) => {
	return (
		<div className="space-y-4">
			{data.map((user) => {
				let imageUrl = '/images/default/profile.png';

				if (!user.head_of_family) return <p>Error Data invalid</p>;
				if (user.head_of_family.image) imageUrl = getImageUrlHandler({ path: user.head_of_family.image.path, filename: user.head_of_family.image.filename });

				return <HeadOfFamilyRow key={user.id} name={user.name} imageUrl={imageUrl} nik={user.head_of_family.identity_number} numbersOfFamilyMembers={5} occupation={user.head_of_family.occupation} />;
			})}
		</div>
	);
};
