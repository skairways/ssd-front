import { FC } from "react"

import { Article } from "@/entities/article"
import { useArticleQuery } from "@/entities/article/api/query"

export interface IExampleArticle {
	id: string
}

export const UserArticle: FC<IExampleArticle> = ({ id }) => {
	const { data: article } = useArticleQuery(id)

	return <>{article && <Article article={article} />}</>
}
