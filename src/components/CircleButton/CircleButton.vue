<template>
  <ion-button fill="clear" shape="round" class="pe-circle-button">
    <ion-icon :src=iconPath></ion-icon>
  </ion-button>

</template>

<script lang="ts" setup>
import './circleButton.scss';
import { IonButton } from "@ionic/vue";
import { computed } from 'vue';

export interface CircleButtonInfo {
  icon: string,
}

const props = defineProps<CircleButtonInfo>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};

const iconPath = computed(() => {
    return "icons/" + props.icon + ".svg";
 });

</script>
