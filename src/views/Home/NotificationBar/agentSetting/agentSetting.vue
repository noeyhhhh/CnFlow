<template>
  <div class="agentSetting">
    <a-form :model="agentSettingData">
      <a-form-item label="启动状态" :labelCol="labelCol">
        <a-checkbox v-model:checked="agentSettingData.isActive"
          >激活</a-checkbox
        >
      </a-form-item>
      <a-form-item label="设定" :labelCol="labelCol">
        <a-checkbox v-model:checked="agentSettingData.isTimeAcitve"
          >特定时间生效</a-checkbox
        >
      </a-form-item>
      <a-form-item label="特定时间设定" :labelCol="labelCol">
        <a-range-picker
          :disabled="agentSettingData.isTimeAcitve ? false : true"
          v-model:value="agentSettingData.rangeTimePicker"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
      /></a-form-item>
      <a-form-item label="激活代理工作完成通知" :labelCol="labelCol">
        <a-checkbox
          v-model:checked="agentSettingData.isCompeleteNotice"
        ></a-checkbox>
      </a-form-item>
      <a-form-item
        v-if="agentSettingData.isCompeleteNotice"
        label="通知对象"
        :labelCol="labelCol"
      >
        <a-input v-model:value="agentSettingData.noticeAgent"></a-input>

        <button @click="chooseSomeone">选择</button>
        <agentChoose
          @confirm-choose-agent="printAgentName"
          ref="agentChooseRef"
        />
      </a-form-item>
      <a-form-item label="依规则处理" :labelCol="labelCol">
        <a-checkbox
          v-model:checked="agentSettingData.isHandleByRule"
        ></a-checkbox>
      </a-form-item>
      <agentRuleTable
        ref="agentRuleTableRef"
        v-show="agentSettingData.isHandleByRule"
      />
    </a-form>
    <a-button @click="commit">提交</a-button>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import useAgentStore from "@/store/agent";
import agentChoose from "./c-cpns/agentChoose";
import agentRuleTable from "./c-cpns/agentRuleTable";
// 拿到store的保存数据
const agentStore = useAgentStore();
agentStore.getAgentSettingAction();
const { agentSettingData } = agentStore;

const agentChooseRef = ref();
function chooseSomeone() {
  agentChooseRef.value.showModal();
}
function printAgentName(val) {
  agentSettingData.noticeAgent = val;
}
const labelCol = reactive({
  span: 6,
});
// 提交表格数据
const agentRuleTableRef = ref();
function commit() {
  console.log(agentRuleTableRef.value.agentRuleList);
  agentStore.updataAgentSettingAction(
    agentSettingData,
    agentRuleTableRef.value.agentRuleList
  );
}
// 代理人设定表格的数据维护
</script>
<style scoped></style>
