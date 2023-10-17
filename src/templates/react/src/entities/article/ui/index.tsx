import { FC } from "react"

import { formatDate } from "@/shared/libs/format-date"

import { IArticle } from "../types"
import s from "./styles.module.scss"

export const Article: FC<{ article: IArticle }> = ({ article }) => {
	return (
		<div className={s.wrapper}>
			<h3>Article-{article?.id}:</h3>
			<div className={s.content}>
				<div className={s.author}>{article?.author}</div>
				<div className={s.text}>{article?.text}</div>
				<div>{formatDate(article?.createdAt!)}</div>
			</div>
		</div>
	)
}
