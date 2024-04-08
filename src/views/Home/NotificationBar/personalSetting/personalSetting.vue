<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="基本资料">
        <basicSetting />
      </a-tab-pane>
      <a-tab-pane key="2" tab="面板设定">
        <tabSetting />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup>
import basicSetting from "./c-cpns/basicSetting";
import tabSetting from "./c-cpns/tabSetting";
import { ref } from "vue";
const activeKey = ref("1");
</script>
<script setup></script>
<style scoped></style>
