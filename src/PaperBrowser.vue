<script setup lang="ts">


import Card from "primevue/card";
import DataTable from "primevue/datatable";


import Column from 'primevue/column';
import Button from "primevue/button";


</script>


<script lang="ts">

import {api_server_url} from "./constants";
import axios from "axios";
import {ref} from "vue";
import {Paper} from "./paper_def.ts";

const paper_uri = api_server_url + 'papers.json'
console.debug('uri:' + paper_uri);

async function getPapers() {
  return axios.get(paper_uri, {
    responseType: "json"
  }).catch(function (error) {
    if (error.response) {
      //response from the server with status code out of 2xx
      console.error(error.statusCode)
      console.error("failed when fetching papers")
    } else if (error.request) {
      //request was at least sent
      console.log("request sent but no response from endpoint");
      console.error(error)
    } else {
      console.error("Error critical: " + error);
    }
  })
}

const paper_result = ref<Paper[]>();
getPapers().then(function (response) {
  if (typeof response == "undefined") return;

  console.log(response);
  console.log(response.data);
  if (response.data instanceof Array) {
    paper_result.value = response.data;
  } else {
    console.error("illegally formatted paper array...");
  }

});

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

  <div class="card">
    <DataTable :value="paper_result" tableStyle="min-width: 50rem" paginator :rows="5"
               :rowsPerPageOptions="[5, 10, 20, 50]">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Papers</span>
          <Button icon="pi pi-refresh" rounded raised/>
        </div>
      </template>

      <Column field="name" header="Name"></Column>
      <Column field="authors" header="Author(s)">
      </Column>
      <Column field="download_url" header="Actions">
        <template #body="slotProps">
          <a :href="slotProps.data.download_url">Download</a>
        </template>
      </Column>
      <Column field="publish_timestamp" header="Upload Timestamp"></Column>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/primeicons/3.0.0/primeicons.min.css';

.para1 {
  font-family: "JetBrains Mono", monospace;
  font-size: medium;
}

.para2 {
  font-family: Consolas, monospace;
  font-size: larger;
}
</style>
