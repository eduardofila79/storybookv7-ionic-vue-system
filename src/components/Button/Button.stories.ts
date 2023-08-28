import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import Button from './Button.vue'

const meta = {
  title: "Components/Button",
  component: Button,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  // tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: { label: "test button" }, // default value
} satisfies Meta<typeof Button>;

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