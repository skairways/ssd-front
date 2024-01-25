import { Avatar } from "@mantine/core"
import { FC } from "react"

import { formatDate } from "@/shared/libs/format-date"

import { IUserCard } from "../types"
import s from "./styles.module.scss"

export const UserCard: FC<IUserCard> = ({ user, onClick }) => {
	return (
		<div className={s.wrapper} onClick={onClick}>
			<Avatar src={user.avatar} alt={user.name} radius="50%" size={54} />

			<div className={s.info}>
				<span className={s.name}>{user.name}</span>
				<span>{formatDate(user.createdAt)}</span>
			</div>
		</div>
	)
}
