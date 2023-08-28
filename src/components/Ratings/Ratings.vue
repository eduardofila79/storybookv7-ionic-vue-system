<template>
  <star-rating 
    star-size="12"
    active-color="#CC9425"
    border-color="#CC9425"
    inactive-color="#FFF"
    border-width="2"
    :show-rating="false"
    :rounded-corners="true"
    :read-only="true"
    :rating="rating"
    :increment="0.5"
  ></star-rating>
  <span class="pe-reviews">({{reviews}})</span>

</template>

<script lang="ts" setup>
import './ratings.scss';

const props = defineProps<{
    rating: number,
    reviews: number,
  }>();

</script>
