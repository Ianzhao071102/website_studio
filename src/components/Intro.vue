<script setup lang="ts">
import Panel from "primevue/panel";

</script>

<template>
  <Panel>
    <p class="m-0 intro_txt">
      We are a group of developers working together to make Minecraft a better place.
    </p>
    <p class="intro_main">
      We develop Plugins, Server cores and design architectures that is suitable for modern Minecraft.
    </p>
    <p class="intro_main">
      You can read our papers and download the source code of our projects on github.<br/>
      Contributing to our projects is welcomed.<br/>
    </p>
  </Panel>
</template>

<style scoped lang="scss">

.intro_txt{
  font-family: "JetBrains Mono",monospace;
  font-size: 30px;
  color: #d62293;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
}
.intro_main{
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
