import { ButtonProps } from "@mantine/core"
import { PropsWithChildren } from "react"

type DefaultProps = PropsWithChildren &
	ButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>

export interface IStyledButton extends DefaultProps {}
