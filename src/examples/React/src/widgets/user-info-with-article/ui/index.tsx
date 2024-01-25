import { When } from "react-if"

import { ReadArticle } from "@/features/article"
import { useUserQuery } from "@/features/user/select/api/query"
import { useSelectedUserSlice } from "@/features/user/select/model"

import { UserInfo } from "@/entities/user/info"

import s from "./styles.module.scss"

export const UserInfoWithArticle = () => {
	const [selectedUserId] = useSelectedUserSlice((state) => [
		state.selectedUserId,
	])
	const { data: user } = useUserQuery(selectedUserId)

	return (
		<When condition={Boolean(user) && Boolean(selectedUserId)}>
			<div className={s.usersBlock}>
				<h3>User detailed info:</h3>
				<div className={s.usersWrapper}>
					<div className={s.detailedInfo}>
						<UserInfo user={user!} />
						<ReadArticle id={selectedUserId!} />
					</div>
				</div>
			</div>
		</When>
	)
}
