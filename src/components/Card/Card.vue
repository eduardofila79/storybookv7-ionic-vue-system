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
      
      <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div class="ion-margin-bottom" v-html=cardDescriptionTruncate></div>
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="6">
              <Ratings
                :rating=rating
                :reviews=reviews
              
              ></Ratings> 
            </ion-col>
            
            <ion-col size="2">2hrs</ion-col>
            <ion-col size="3">Foundational</ion-col>
          </ion-row>
          <ion-row class="ion-margin-top">
            <ion-col>
              <ion-row class="ion-no-padding">
                <ion-col size="3.5" v-for="item in iconButtons">
                  <CircleButton :icon=item.icon />
                </ion-col>
              </ion-row>
            </ion-col>  
            <ion-col>
              <Button class="ion-float-right" :label=buttonLabel @click="$emit('launch-clicked')"></Button>
            </ion-col>
          </ion-row>
        </ion-grid>
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

import { computed } from 'vue';
import Button from '../../components/Button/Button.vue'
import Ratings from '../../components/Ratings/Ratings.vue'
import CircleButton from '../../components/CircleButton/CircleButton.vue'
import { CircleButtonInfo } from "@/types";


export interface CardInfo {
  id: number,
  title: string,
  description: string,
  buttonLabel?: string;
  rating?: number,
  reviews?: number,
  descriptionCharacters: number,
  iconButtons: CircleButtonInfo[],
}

const props = defineProps<CardInfo>();

const emit = defineEmits<{
  (e: "launch-clicked", value: string | undefined): void;
}>();

const cardDescriptionTruncate = computed(() => {
  return (props.description.length > props.descriptionCharacters) ? props.description.slice(0, props.descriptionCharacters-1) + '&hellip;' : props.description;
})

const handleClick = (event: string, value: string | undefined) => {
  emit("launch-clicked", value);
};

</script>