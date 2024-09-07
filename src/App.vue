<script setup lang="ts">
import TabNavBar from "./components/TabNavBar.vue";
import {RouterView} from "vue-router";
import { SpeedInsights } from "@vercel/speed-insights/vue"
import Notification from "./Notification.vue";
</script>

<template>
  <TabNavBar></TabNavBar>
  <SpeedInsights/>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <Notification></Notification>
</template>

<style lang="scss">
@import "primeflex/primeflex.css";
</style>
