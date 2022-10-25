<script setup lang="ts">
import { ref } from 'vue';
import OneInfo from './components/OneInfo.vue';

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, { id: 1, title: '今日の天気', content: '晴れ'});
weatherListInit.set(2, { id: 2, title: '明日の天気', content: '雨'});
weatherListInit.set(3, { id: 3, title: '明後日の天気', content: '雪'});
const weatherList = ref(weatherListInit);

interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <OneInfo
    v-for="[id, weather] in weatherList"
    :key="id"
    :title="weather.title"
    :content="weather.content"
  />
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>