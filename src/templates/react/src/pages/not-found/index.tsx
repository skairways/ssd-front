import { useNavigate } from "react-router-dom"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./styles.module.scss"
import { BurgerIcon } from "./ui"

const NotFoundPage = () => {
	const navigate = useNavigate()
	const handleReturn = () => {
		navigate(-1)
	}

	return (
		<div className={s.wrapper}>
			<BurgerIcon />
			<div className={s.text}>404 Page Not Found</div>
			<FilledButton onClick={handleReturn}>Return Back</FilledButton>
		</div>
	)
}

export default NotFoundPage
