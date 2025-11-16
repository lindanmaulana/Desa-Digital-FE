import { ContentMainContainer } from "../components/main-container/content"
import { HeadOfFamilyTable } from "./components/data-table"
import { ListToolbar } from "./components/list-toolbar"

const HeadOfFamilyPage = () => {
	return (
		<ContentMainContainer title="Kepala Rumah" to="/dashboard/head-of-family/create">
			<ListToolbar />
			<HeadOfFamilyTable />
		</ContentMainContainer>
	)
}

export default HeadOfFamilyPage
