import { useTranslation } from "react-i18next"

import { FilledButton } from "@/shared/ui/buttons"
import image3d from './assets/3d-erorr.png'
import s from "./index.module.scss"

export const CodeErrorComponent = () => {
	const { t } = useTranslation()
	const reload = () => {
		location.reload()
	}
	return (
		<div className={s.errorPage}>
			<img src={image3d} alt="3d error image" />
			<div>{t("there is an error in the code")}</div>
			<FilledButton onClick={reload}>{t("reload_page")}</FilledButton>
		</div>
	)
}
