<script setup lang="ts">
import Card from "primevue/card";

</script>

<template>
  <Card>
    <template #title>Paper Browser</template>
    <template #content>
      <p class="para1">
        We publish papers via this section. <br/>
        We share our experiences on running clusters and developing products on this page. <br/>
        These opinions(views) don't necessarily reflect the ones of our team. <br/>
        Please be careful with these papers, <br/>
        they may contain errors and should be respectfully checked for errors. <br/>
        Please do not consider this section as our blog. <br/>
      </p>

      <p class="para2">
        The paper is free and is allowed to distribute freely without a fee. <br/>
        All the contents are freely available to be used anywhere by any means <br/>
        Following CC0 ZERO 1.0
        <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt">View Licence</a> <br/>
      </p>
    </template>
  </Card>
</template>

<style scoped>
.para1{
  font-family: "JetBrains Mono", monospace;
  font-size: medium;
}
.para2{
  font-family: Consolas,monospace;
  font-size: larger;
}
</style>
