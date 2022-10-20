<script setup lang="ts">
import { ref, computed } from 'vue';

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, { id: 2345, name: 'ホワイトレディ', price: 1200 });
cocktailDataListInit.set(4412, { id: 4412, name: 'ブルーハワイ', price: 1500 });
cocktailDataListInit.set(6792, { id: 6792, name: 'ニューヨーク', price: 1100 });
cocktailDataListInit.set(8429, { id: 8429, name: 'マティーニ', price: 1500 });
const cocktailDataList = ref(cocktailDataListInit);

const cocktail1500 = computed(
  (): Map<number, Cocktail> => {
    const newList = new Map<number, Cocktail>();
    cocktailDataList.value.forEach(
      (value: Cocktail, key: number): void => {
        if (value.price == 1500) {
          newList.set(key, value);
        }
      }
    );
    return newList;
  }
);

const changeWhiteLadyPrice = (): void => {
  const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
  whiteLady.price = 1500;
}

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <ul>
    全てのカクテルリスト
    <li
      v-for="[id, cocktailItem] in cocktailDataList"
      v-bind:key="'cocktailDataList' + id"
    >{{ cocktailItem.name + cocktailItem.price}}</li>
  </ul>
  <ul>
    値段が1500円のカクテルリスト
    <li
      v-for="[id, cocktailItem] in cocktail1500"
      v-bind:key="'cocktail1500' + id"
    >{{ cocktailItem.name + cocktailItem.price}}</li>
  </ul>
  <p>whiteLadyを<button v-on:click="changeWhiteLadyPrice">変更</button></p>
</template>