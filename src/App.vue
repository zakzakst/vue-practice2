<script setup lang="ts">
import { ref } from 'vue';
import OneSection from './components/OneSection.vue';

const taroProblemsInit: string[] = ['電話が通じません', '留守です'];
const taro = ref('田中太郎');
const taroProblems = ref(taroProblemsInit);
const jiro = ref('鈴木二郎');
</script>

<template>
  <h2>Slotの利用</h2>
  <OneSection :name="taro">
    <template v-slot:default>
      <p>問題発生</p>
    </template>
    <template v-slot:detail>
      <ul>
        <li v-for="problem in taroProblems" :key="problem">{{ problem }}</li>
      </ul>
    </template>
  </OneSection>
  <OneSection :name="jiro" />
</template>