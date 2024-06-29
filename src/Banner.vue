<script setup lang="ts">

import Card from "primevue/card";

const text = defineModel('text')
const header = defineModel('header')

</script>

<template>
  <Card>
    <template #content>
      <div
          class="text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center teal-bg">
        <div class="font-bold mr-8">{{ header }}</div>
        <div class="align-items-center lg:flex">
          <span class="line-height-3">{{ text }}</span>
        </div>
        <a class="flex align-items-center ml-2 mr-8">
          <a class="text-green-900" href="#"><span class="underline font-bold">Learn More</span></a>
        </a>
        <a
            class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
            style="width:2rem; height: 2rem">
          <i class="pi pi-times"></i>
        </a>
      </div>
    </template>
  </Card>

</template>

<style scoped>
.teal-bg {
  background-color: #9ae0d9;
}
</style>