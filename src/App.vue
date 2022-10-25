<script setup lang="ts">
import OneInfo from './components/OneInfo.vue';
</script>

<template>
  <h2>属性に直接記述</h2>
  <OneInfo
    title="Propsの利用"
    content="子コンポーネントにデータを渡すにはPropsを利用する。"
  />
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>