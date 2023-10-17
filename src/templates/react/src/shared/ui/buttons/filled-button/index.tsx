import { Button } from "@mantine/core"
import cx from "clsx"
import { FC } from "react"

import s from "./styles.module.scss"
import { IStyledButton } from "./types"

export const FilledButton: FC<IStyledButton> = ({
	children,
	className,
	...props
}) => {
	return (
		<Button className={cx(s.button, className)} radius="8px" {...props}>
			{children}
		</Button>
	)
}
