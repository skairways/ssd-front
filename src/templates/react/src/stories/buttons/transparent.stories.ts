import type { Meta, StoryObj } from "@storybook/react"

import { TransparentButton } from "@/shared/ui/buttons"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "ui-kit/Buttons",
	component: TransparentButton,
	parameters: {
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof TransparentButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Transparent: Story = {
	args: {
		children: "Button",
	},
}
