import React, { useState } from "react"

import { FilledButton } from "@/shared/ui/buttons"

import { useCreateUserQuery } from "../api/query"
import s from "./styles.module.scss"

export const CreateUser = () => {
	const [userName, setUserName] = useState<string>("")
	const { mutate: createUserFn } = useCreateUserQuery()

	const submitUser = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		createUserFn({ name: userName })
		setUserName("")
	}

	return (
		<form className={s.wrapper}>
			<input
				type="text"
				placeholder="username"
				className={s.userInput}
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<FilledButton
				type="submit"
				onClick={submitUser}
				disabled={!userName.length}
			>
				Create
			</FilledButton>
		</form>
	)
}
