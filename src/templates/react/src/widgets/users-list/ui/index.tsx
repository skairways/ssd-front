import { Else, If, Then } from "react-if"

import { useUsersListQuery } from "@/widgets/users-list/api/query"

import { useSelectedUserSlice } from "@/features/user/select/model"

import { UserCard } from "@/entities/user"

import { RocketLoader } from "@/shared/ui/loaders"

import s from "./styles.module.scss"

export const UsersList = () => {
	const { data: users, isLoading } = useUsersListQuery()
	const [selectUser] = useSelectedUserSlice((state) => [state.selectUser])

	return (
		<div className={s.wrapper}>
			<h2 className={s.title}>Example users list</h2>
			<div className={s.listWrapper}>
				<If condition={isLoading}>
					<Then>
						<RocketLoader />
					</Then>
					<Else>
						<div className={s.list}>
							{users?.map((user) => (
								<UserCard
									key={user.id}
									user={user}
									onClick={() => selectUser(user.id)}
								/>
							))}
						</div>
					</Else>
				</If>
			</div>
		</div>
	)
}
