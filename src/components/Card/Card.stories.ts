import type { Meta, StoryObj } from "@storybook/vue3";

import { IonApp } from "@ionic/vue";
import Card, { CardInfo } from "./Card.vue";

const meta = {
  title: "Components/Card",
  component: Card,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  tags: ["autodocs"],
  argTypes: {
    onSocialClicked: { action: "social-clicked" },
  },
  args: {
  }, // default value
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardInfo: {
      title: "Finance: Introduction to Accountancy and Finance",
      description: 'Its all too easy to forget that the finance function of any business or organisation is an absolute linchpin to its success and the state of any business is shown by effective accounting. The Skillshub "An Introduction To Accountancy & Finance" course explains how the financial accounting side of the business is more than spreadsheets and invoices, part of the role is to report the financial performance of the company to the outside world. Once the course is complete you will know that management accountants are more focused on the future financial performance and how this can help with the business strategy.',
      buttonLabel: "Launch",
      rating: 2.5,
      reviews: 413,
      descriptionCharacters: 100
    },
  },
};

