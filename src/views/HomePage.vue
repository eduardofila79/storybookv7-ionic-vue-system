<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <p>storybook vue</p>
      <ionic-button label="button in component"></ionic-button>
      <card-card :member-info="cards" @social-clicked="doHandleClick"></card-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import MemberCard, { CardInfo } from "@/components/Card/Card.vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { cards } from '../data/cards'


const doHandleClick = (value: string | undefined) => {
  alert(value + " was clicked");
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>