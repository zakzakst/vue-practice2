<script setup lang="ts">
import OneSection from './components/OneSection.vue';
</script>

<template>
  <h2>Slotの利用</h2>
  <OneSection :name="taro">
    <template v-slot:default="slotProps">
      <dl>
        <dt>名前</dt>
        <dd>{{ slotProps.memberInfo.name }}</dd>
        <dt>状況</dt>
        <dd>{{ slotProps.memberInfo.state }}</dd>
      </dl>
    </template>
  </OneSection>
</template>