import { FC } from "react"
import { Button } from "@mantine/core"
import cx from "clsx"
import { IStyledButton } from "./types"

import styles from "./index.module.scss"

export const OutlineButton: FC<IStyledButton> = ({
	children,
	className,
	...props
}) => {
	return (
		<Button
			variant="outline"
			radius="8px"
			className={cx(styles.button, className)}
			{...props}
		>
			{children}
		</Button>
	)
}
