<template>
  <div>
    <ion-card>
      <ion-card-header>
        <div class="img-wrapper">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        <ion-list class="ion-no-padding">
          <ion-item class="card-header-list-item">
            <ion-label class="ion-no-margin">Online course</ion-label>
          </ion-item>
          <ion-item class="card-header-list-item">
            <ion-label>PricewaterhouseCoopers</ion-label>
          </ion-item>

        </ion-list>
      </div>
        <ion-card-subtitle>
          <!-- <span v-if="cardInfo?.companyName">{{ cardInfo?.companyName }} : </span>
          {{ cardInfo?.title }} -->

        </ion-card-subtitle>
        <ion-card-title>{{ cardInfo?.name }}</ion-card-title>
        
      </ion-card-header>
      <ion-card-content>
        <div class="ion-margin-bottom">{{ cardInfo?.bio }}</div>
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="6">
              <Ratings
                :ratings=cardInfo?.rating
                :reviews=cardInfo?.reviews
              
              ></Ratings> 
            </ion-col>
            
            <ion-col size="2">2hrs</ion-col>
            <ion-col size="3">Foundational</ion-col>
          </ion-row>
          <ion-row class="ion-margin-top">
            <ion-col size="6"></ion-col>
            <ion-col size="6"><Button class="ion-float-right" :label=cardInfo.buttonLabel @click="$emit('launch-clicked')"></Button></ion-col>
          </ion-row>
        </ion-grid>
          
          <!-- <ion-button
            v-if="cardInfo?.twitter"
            @click="handleClick('social-clicked', cardInfo?.twitter)"
          >
            <ion-icon :icon="logoTwitter" slot="start"></ion-icon>Twitter
          </ion-button>
          <ion-button
            v-if="cardInfo?.website"
            @click="handleClick('social-clicked', cardInfo?.website)"
          >
            <ion-icon :icon="globe" slot="start"></ion-icon>Web Site
          </ion-button> -->
          
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonItem,
} from "@ionic/vue";
import { logoTwitter, logoLinkedin, globe } from "ionicons/icons";
import './card.scss';

import Button from '../../components/Button/Button.vue'
import Ratings from '../../components/Ratings/Ratings.vue'


export interface CardInfo {
  name: string;
  title: string;
  companyName?: string;
  bio: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
  buttonLabel?: string;
  buttonVariant?: string;
  rating?: number,
  reviews?: number,
}

const props = defineProps<{
  cardInfo: CardInfo;
}>();

const emit = defineEmits<{
  (e: "launch-clicked", value: string | undefined): void;
}>();


const handleClick = (event: string, value: string | undefined) => {
  emit("launch-clicked", value);
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
