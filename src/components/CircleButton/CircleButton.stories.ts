import type { Meta, StoryObj } from "@storybook/vue3"

import CircleButton from './CircleButton.vue'

import { circleButtons } from '../../data/circleButtons'

const meta = {
  title: "Components/CircleButton",
  component: CircleButton,
  // tags: ["autodocs"], 
  args: {
    ...circleButtons[0],
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
