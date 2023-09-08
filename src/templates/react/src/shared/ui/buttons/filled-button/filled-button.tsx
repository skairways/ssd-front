import { FC } from "react"
import { Button } from "@mantine/core"
import clsx from 'clsx'
import { IStyledButton } from "./types"

import styles from "./index.module.scss"

export const FilledButton: FC<IStyledButton> = ({ children, className, ...props }) => {
	return (
		<Button className={clsx(styles.button, className)} radius="8px" {...props}>
			{children}
		</Button>
	)
}
