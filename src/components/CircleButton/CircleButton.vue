<template>
  <ion-button fill="clear" shape="round" class="pe-circle-button">
    <ion-icon src="icons/share.svg"></ion-icon>
  </ion-button>

</template>

<script lang="ts" setup>
import './circleButton.scss';
import { IonButton } from "@ionic/vue";
import { computed } from 'vue';

const myCustomIcon = "/assets/share.svg";

const props = withDefaults(
  
  defineProps<{
    /**
     * The label of the button
     */
  }>(),
  { label: "test button" }
);


const emit = defineEmits<{
  (e: "click"): void;
}>();


const onClick = () => {
  emit("click");
};
</script>
