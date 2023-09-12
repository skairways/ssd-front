import { PropsWithChildren } from "react"
import { ButtonProps } from "@mantine/core"

type DefaultProps = PropsWithChildren &
	ButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>

export interface IStyledButton extends DefaultProps {}
