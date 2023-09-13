import { FC } from "react"
import { Button } from "@mantine/core"
import cx from "clsx"
import { IStyledButton } from "./types"

import styles from "./index.module.scss"

export const FilledButton: FC<IStyledButton> = ({
	children,
	className,
	...props
}) => {
	return (
		<Button className={cx(styles.button, className)} radius="8px" {...props}>
			{children}
		</Button>
	)
}
