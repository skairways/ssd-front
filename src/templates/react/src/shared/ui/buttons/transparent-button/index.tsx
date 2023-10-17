import { Button } from "@mantine/core"
import cx from "clsx"
import { FC } from "react"

import s from "./styles.module.scss"
import { IStyledButton } from "./types"

export const TransparentButton: FC<IStyledButton> = ({
	children,
	className,
	...props
}) => {
	return (
		<Button
			variant="transparent"
			className={cx(s.button, className)}
			{...props}
		>
			{children}
		</Button>
	)
}
