import { FC } from "react"
import { Link } from "react-router-dom"

import { AppPages } from "@/shared/constants/routes"
import { FilledButton } from "@/shared/ui/buttons"

export const ReadArticle: FC<{ id: string }> = ({ id }) => {
	return (
		<Link to={`${AppPages.ExamplePage}/${id}`}>
			<FilledButton>Read Article</FilledButton>
		</Link>
	)
}
