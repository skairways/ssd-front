import { Avatar } from "@mantine/core"
import { FC } from "react"

import s from "./styles.module.scss"
import { IUserInfo } from "./types"

export const UserInfo: FC<IUserInfo> = ({ user }) => {
	return (
		<div className={s.wrapper}>
			<Avatar src={user.avatar} alt={user.name} radius="50%" size={70} />
			<div className={s.info}>
				<div className={s.field}>
					<span>name:</span> {user.name}
				</div>
				<div className={s.field}>
					<span>city:</span> {user.city}
				</div>
				<div className={s.field}>
					<span>street:</span> {user.street}
				</div>
				<div className={s.field}>
					<span>finance:</span> {user.finance}$
				</div>
			</div>
		</div>
	)
}
