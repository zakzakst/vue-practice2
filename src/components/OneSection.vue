<script setup lang="ts">
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <section class="box">
    <h1>{{ name }}さんの状況</h1>
    <slot>
      <p>問題ありません</p>
    </slot>
    <h4>内容詳細</h4>
    <slot name="detail">
      <p>問題ありません</p>
    </slot>
  </section>
</template>

<style>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>
