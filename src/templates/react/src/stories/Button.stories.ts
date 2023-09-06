import type { Meta, StoryObj } from "@storybook/react"

import { StyledButton } from "@shared/ui/button"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Example/Button",
	component: StyledButton,
	parameters: {
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof StyledButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		children: 'Primary Button',
    color: 'violet',
    radius: "25px"
    
	},
}
export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
    color: 'yellow',
    radius: "15px",
    compact: true,
	},
}