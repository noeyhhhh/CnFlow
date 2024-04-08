<template>
  <div class="homeMenu">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="light"
      :style="{ lineHeight: '64px' }"
      :items="items"
      @click="toMenuRouter"
      mode="horizontal "
    >
    </a-menu>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router";
const selectedKeys = ref(["1"]);
const items = ref([
  {
    key: "main",
    label: "首页",
  },
  {
    key: "toDoList",
    label: "待办事项",
  },
  {
    key: "flowTracing",
    label: "流程追踪",
  },
  {
    key: "newForm",
    label: "开新表单",
  },
  {
    key: "applicationProgram",
    label: "应用程序",
  },
  {
    key: "historicalQuery",
    label: "历史查询",
  },
  {
    key: "bulletinBoard",
    label: "公告栏",
  },
]);
function toMenuRouter(item) {
  router.push(`/home/${item.key}`);
}
const personalSettingModalRef = ref();
function clickShowPersonalSettingModal() {
  personalSettingModalRef.value.showModal();
}
const agentSettingsModalRef = ref();
function clickShowAgentSettingsModal() {
  agentSettingsModalRef.value.showModal();
}
</script>
<style scoped>
@media screen and (max-width: 300px) {
  .homeMenu {
    display: none;
  }
}
.homeMenu > ul {
  display: flex;
}
</style>
