import { FC } from "react"
import { Button } from "@mantine/core"
import clsx from 'clsx'
import { IStyledButton } from "./types"

import styles from "./index.module.scss"

export const OutlineButton: FC<IStyledButton> = ({ children, className, ...props }) => {
	return (
		<Button variant="outline" radius="8px" className={clsx(styles.button, className)} {...props}>
			{children}
		</Button>
	)
}
