import { IMAGEBASEURL } from "@/lib/config";
import { getDisplayRoleHandler } from "@/lib/helpers/displayRole";
import { profileDetailQueryOptions } from "@/lib/queries/profile/profileDetailQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { LoadingProfile } from "./components/LoadingProfile";
import { LogoutProfile } from "./components/LogoutProfile";

export const ProfileHeader = () => {
	const {data, isLoading, isError} = useQuery(profileDetailQueryOptions())

	if (isLoading || !data) return <LoadingProfile />
	if (isError) return <p>Error...</p>

	const profileData = data.data
	if (!profileData) return <p>Data pengguna tidak ditemukan</p>

	const {name, role, image} = profileData
	const displayedRole = getDisplayRoleHandler(role)

	return (
		<div className="shrink-0 flex items-center gap-4">
			<div className="size-14">
				<img src={`${IMAGEBASEURL}/${image.path}/${image.filename}`} alt="preview" className="size-full" />
			</div>
			<div>
				<h3 className="font-semibold">{name}</h3>
				<p className="text-village-secondary">{displayedRole}</p>
			</div>
			<LogoutProfile />
		</div>
	);
};
