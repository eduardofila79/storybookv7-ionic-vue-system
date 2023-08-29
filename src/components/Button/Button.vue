<template>
  <ion-button :class="classes" :disabled="isDisabled" @click="onClick">{{ label }} </ion-button>
</template>

<script lang="ts" setup>
import './button.scss';
import { IonButton } from "@ionic/vue";
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    isDisabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary',
    size?: 'small' | 'large',
  }>(),
  { label: "test button" }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const classes = computed(() => ({
  'ion-color': true,
  'pe-button': true,
  'pe-button--primary': (props.variant === 'primary') || (props.variant === undefined),
  'pe-button--secondary': props.variant === 'secondary',
  'pe-button--large': (props.size === 'large') || (props.size === undefined),
}));

const onClick = () => {
  emit("click");
};
</script>
