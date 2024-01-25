import { useTranslation } from "react-i18next"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./index.module.scss"

export const CodeErrorComponent = () => {
	const { t } = useTranslation()
	const reload = () => {
		location.reload()
	}
	return (
		<div className={s.errorPage}>
			<div>{t("error_occured")}</div>
			<FilledButton onClick={reload}>{t("reload_page")}</FilledButton>
		</div>
	)
}
