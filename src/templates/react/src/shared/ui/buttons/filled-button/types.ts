import { PropsWithChildren } from "react"
import { ButtonProps } from "@mantine/core"

type DefaultProps = PropsWithChildren & ButtonProps

export interface IStyledButton extends DefaultProps {}
