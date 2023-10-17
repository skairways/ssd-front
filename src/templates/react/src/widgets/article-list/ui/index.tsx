import { FC } from "react"
import { Else, If, Then } from "react-if"

import { ReadArticle } from "@/features/article"

import { Article } from "@/entities/article"

import { RocketLoader } from "@/shared/ui/loaders"

import { useArticlesQuery } from "../api/query"
import s from "./styles.module.scss"

export const ArticleList: FC = () => {
	const { data: articles } = useArticlesQuery()

	return (
		<If condition={Boolean(articles)}>
			<Then>
				<div className={s.articles}>
					{articles?.map((article) => (
						<div key={article.id} className={s.article}>
							<Article key={article.id} article={article} />
							<ReadArticle id={article.id} />
						</div>
					))}
				</div>
			</Then>
			<Else>
				<RocketLoader />
			</Else>
		</If>
	)
}
