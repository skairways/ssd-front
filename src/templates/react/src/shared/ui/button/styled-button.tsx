import { FC } from "react"
import { Button } from "@mantine/core"
import { IStyledButton } from "./types"

import styles from "./index.module.scss"

export const StyledButton: FC<IStyledButton> = ({ children, ...props }) => {
	return (
		<Button className={styles.button} {...props}>
			{children}
		</Button>
	)
}
