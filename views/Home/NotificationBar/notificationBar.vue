<template>
  <div class="notificationBar">
    <span>通知资料夹</span>
    <span @click="clickShowPersonalSettingModal">个人设定</span>
    <span @click="clickShowAgentSettingsModal">代理人设定</span>
    <span>关于</span>
    <span>企业流程管理中心</span>
    <a-modal v-model:open="personalSettingOpen"><personalSetting /></a-modal>
    <a-modal destroyOnClose v-model:open="agentSettingOpen"
      ><agentSetting></agentSetting
    ></a-modal>
  </div>
</template>
<script setup>
import personalSetting from "./personalSetting/personalSetting";
import agentSetting from "./agentSetting/agentSetting";
import { ref } from "vue";
const personalSettingOpen = ref(false);
const clickShowPersonalSettingModal = () => {
  personalSettingOpen.value = true;
};
const agentSettingOpen = ref(false);
const clickShowAgentSettingsModal = () => {
  agentSettingOpen.value = true;
};
function handleCancel() {
  console.log(123);
}
</script>
<style scoped>
.notificationBar > span {
  padding: 10px;
  cursor: pointer;
}
</style>
