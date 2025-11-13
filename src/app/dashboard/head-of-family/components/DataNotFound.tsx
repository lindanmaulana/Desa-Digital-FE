
interface DataNotfoundProps {
	message: string
}

export const DataNotfound = ({message}: DataNotfoundProps) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<img src="/images/icons/user-remove-secondary-green.svg" alt="not found" />
			<p className="text-village-secondary font-semibold">{message}</p>
		</div>
	)
}
