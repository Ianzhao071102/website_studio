<script setup lang="ts">
import Card from "primevue/card";


</script>

<template>
  <Card>
    <template #title>
      Help us with the website
    </template>
    <template #content>
      <div class="m-0 n_text">
        Our website is not finished, some parts are still not functional <br/>
        And the site itself is still not optimized yet, and we're actively working on it <br/>
        But we really appreciate support in any form, and everyone who helped us in the past
      </div>
    </template>
  </Card>
</template>

<style scoped>
.n_text{
  font-family: "JetBrains Mono",monospace;
  font-size: 15px;
  color: teal;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
}
</style>