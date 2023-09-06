import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import Card from "./Card.vue";

import { cards } from '../../data/cards'

const meta = {
  title: "Components/Card",
  component: Card,
  // tags: ["autodocs"],
  args: {
    ...cards[0],
  },
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },  
    // onLaunchClicked: { action: "launch-clicked" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};