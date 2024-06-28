<script setup lang="ts">
import Title from "./components/Title.vue";
import TabNavBar from "./components/TabNavBar.vue";
import {RouterView} from "vue-router";


</script>

<template>
  <Title></Title>
  <TabNavBar></TabNavBar>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
