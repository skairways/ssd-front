import { FC } from "react"
import { useParams } from "react-router-dom"

import { ArticleList } from "@/widgets/article-list"
import { UserArticle } from "@/widgets/user-article"

import s from "./styles.module.scss"

const ArticlePage: FC = () => {
	const { id } = useParams()

	return (
		<div className="container">
			<div className={s.wrapper}>
				<div className={s.article}>
					<UserArticle id={id!} />
				</div>

				<ArticleList />
			</div>
		</div>
	)
}

export default ArticlePage
