<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import {RouterLink} from "vue-router";


</script>

<template>
  <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem" class="blue-bg">
    <template #start>
      <div class="flex items-center gap-2">
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="..." fill="var(--p-text-color)"/>
          <path d="..." fill="transparent"/>
        </svg>
        <RouterLink to="/"><Button label="Home" text plain id="home-btn"/></RouterLink>
        <RouterLink to="papers"><Button label="Papers" text plain id="paper-btn"/></RouterLink>
        <RouterLink to="/share"><Button label="Share" text plain id="share-btn"/></RouterLink>
        <RouterLink to="/projects"><Button label="Projects" text plain id="projects-btn"/></RouterLink>
        <RouterLink to="/contribute"><Button label="Contribute" text plain id="contribute-btn"/></RouterLink>
      </div>
    </template>

    <template #end>
      <div class="flex items-center gap-2">
        <Button label="Contact Us" severity="contrast" size="small"/>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
.blue-bg{
  background-color: #dadafc;
}
</style>
