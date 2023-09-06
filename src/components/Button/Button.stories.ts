import type { Meta, Story } from "@storybook/vue3";

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // wrap component in ion-app
  decorators: [() => ({ template: "<ion-app><story /></ion-app>" })],
  // tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    size: { control: 'select', options: ['small', 'large'] },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
  args: { label: "Launch", isDisabled: false }, // default value
};

export default meta;

export const Primary: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
Primary.args = {
  label: "Primary Button"
};

export const Secondary: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary"
};

export const Tertiary: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
Tertiary.args = {
  label: "Tertiary Button",
  variant: "tertiary"
};

export const Sizes: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
      <Button v-bind="args" size="large" label="Large Button" />
      <Button v-bind="args" size="small" label="Small Button" />
  `,
});

export const Disabled: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
Disabled.args = {
  label: "Disabled Button",
  isDisabled: true
};