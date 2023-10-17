import { UserArticle } from "@/widgets/user-article"
import { UserInfoWithArticle } from "@/widgets/user-info-with-article"
import { UsersList } from "@/widgets/users-list"

import { CreateUser } from "@/features/user/create"
import { useSelectedUserSlice } from "@/features/user/select/model"

import s from "./styles.module.scss"

const ExamplePage = () => {
	const [selectedUserId] = useSelectedUserSlice((state) => [
		state.selectedUserId,
	])

	return (
		<div className="container">
			<div className={s.wrapper}>
				<div className={s.item}>
					<UsersList />
				</div>
				<div className={s.item}>
					<CreateUser />
				</div>
				<div className={s.item}>
					<UserInfoWithArticle />
				</div>
				<div className={s.item}>
					{selectedUserId && <UserArticle id={selectedUserId} />}
				</div>
			</div>
		</div>
	)
}

export default ExamplePage
