import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import CircleButton from './CircleButton.vue'

const meta = {
  title: "Components/CircleButton",
  component: CircleButton,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  // tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: { label: "test button" }, // default value
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button"
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary"
  },
};