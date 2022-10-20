<script setup lang="ts">
import { ref } from 'vue';

const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 2345,
  name: 'ホワイトレディ',
  price: 1200,
  recipe: 'text'
};
const whiteLady = ref(whiteLadyInit);

const changeWhiteLadyPrice = (): void => {
  whiteLady.value.price = 1500;
}
</script>

<template>
  <dl>
    <template
      v-for="(value, key) in whiteLady"
      v-bind:key="key"
    >
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <p>whiteLadyを<button v-on:click="changeWhiteLadyPrice">変更</button></p>
</template>