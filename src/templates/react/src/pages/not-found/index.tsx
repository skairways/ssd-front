import { FilledButton } from "@src/shared/ui/buttons"
import { useNavigate } from "react-router-dom"

import styles from "./index.module.scss"
import { BurgerIcon } from "./ui"

const NotFoundPage = () => {
	const navigate = useNavigate()
	const handleReturn = () => {
		navigate(-1)
	}

	return (
		<div className={styles.wrapper}>
			<BurgerIcon />
			<div className={styles.text}>404 Page Not Found</div>
			<FilledButton onClick={handleReturn}>Return Back</FilledButton>
		</div>
	)
}

export default NotFoundPage
