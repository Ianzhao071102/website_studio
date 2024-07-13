<script setup lang="ts">
import TabNavBar from "./components/TabNavBar.vue";
import {RouterView} from "vue-router";
import Banner from "./Banner.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <TabNavBar></TabNavBar>
  <Banner text="Check out our new Papers" header="Welcome"></Banner>
  <SpeedInsights/>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "primeflex/primeflex.css";
</style>
