<script setup lang="ts">
import Card from "primevue/card";
</script>

<template>
  <Card class="align-content-center font-bold font-bold text-indigo-900 card-bg" >
    <template #header>
      <a class="big-font">SERENITY DEVELOPMENT</a>
    </template>
    <template #content>
      <a>Develop Something Great</a>
    </template>
  </Card>
</template>

<style scoped>
.big-font{
  font-size: 300%;
  font-family: Consolas,serif;
}
.card-bg{
  background-color: #abc9fb;
}
</style>
