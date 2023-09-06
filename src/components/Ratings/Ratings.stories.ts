import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import Ratings from './Ratings.vue'

const meta = {
  title: "Components/Ratings",
  component: Ratings,
  // wrap component in ion-app
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
  },
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 2,
    reviews: 322
  },
};
