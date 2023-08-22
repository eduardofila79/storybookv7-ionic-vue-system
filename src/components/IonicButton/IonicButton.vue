<template>
  <ion-button :class="classes" @click="onClick">{{ label }} </ion-button>
</template>

<script lang="ts" setup>
import './ionicButton.scss';
import { IonButton } from "@ionic/vue";
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    variant?: 'primary' | 'secondary' | 'tertiary',
    size?: 'small' | 'large',
  }>(),
  { label: "test button" }
);

console.log(props.size);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const classes = computed(() => ({
  'ion-color': true,
  'storybook-button': true,
  'storybook-button--primary': (props.variant === 'primary') || (props.variant === undefined),
  'storybook-button--secondary': props.variant === 'secondary',
  'storybook-button--large': (props.size === 'large') || (props.size === undefined),
}));

const onClick = () => {
  emit("click");
};
</script>
