<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button @click="showModal">新建</a-button>
      <a-button @click="deleteRuleData">删除</a-button>

      <a-button>激活/取消</a-button>
      <a-modal
        @ok="handleOk"
        destroyOnClose
        title="代理规则设置"
        v-model:open="open"
        centered
      >
        <a-form :model="agentRule">
          <a-form-item label="当项目名称为：">
            <a-select v-model:value="agentRule.formName">
              <a-select-option value="表单1">表单1</a-select-option>
              <a-select-option value="表单2">表单2</a-select-option>
              <a-select-option value="表单3">表单3</a-select-option>
              <a-select-option value="表单4">表单4</a-select-option>
              <a-select-option value="表单5">表单5</a-select-option>
              <a-select-option value="表单6">表单6</a-select-option>
              <a-select-option value="表单7">表单7</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="设定代理人为：">
            <a-input v-model:value="agentRule.agentName"></a-input>
            <a-button @click="chooseSomeone">选择代理人</a-button>
            <agentChoose
              ref="agentChooseRef"
              :isRule="true"
              @confirm-choose-agent-rule="printAgentName"
            />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <a-table
      :row-selection="rowSelection"
      :columns="columns"
      :data-source="agentRuleList"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.dataIndex === 'action'">
          <a-button @click="upGo(index)">上移</a-button>
          <a-button @click="downGo(index)">下移</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup>
import useAgentStore from "@/store/agent";
import agentChoose from "./agentChoose.vue";
import { ref, reactive } from "vue";
const agentStore = useAgentStore();
let { agentRuleList } = agentStore;

// modal框是否可见
const open = ref(false);
const showModal = () => {
  open.value = true;
};
//获取子modal组件获取姓名列表
const agentChooseRef = ref();
function chooseSomeone() {
  agentChooseRef.value.showModal();
}
// modal组件表单名字对应代理人的数据维护
const agentRule = reactive({});
// 子组件选择对应姓名emit到当前组件回调
function printAgentName(val) {
  agentRule.agentName = val;
}
//代理规则表单的数据维护
const columns = [
  {
    title: "代理人姓名",
    dataIndex: "agentName",
  },
  {
    title: "表单",
    dataIndex: "formName",
  },
  {
    title: "状态",
    dataIndex: "acitve",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];
// 规则modal点击确定的回调，把输入写入外部table
function handleOk() {
  const isExist = agentRuleList.some((item) => {
    return item.formName == agentRule.formName;
  });

  if (!isExist) {
    // 使用第一层深拷贝方法避免直接Push响应式reactive
    let newObj = Object.assign({}, agentRule);
    newObj.key = agentRuleList.length;
    agentRuleList.push(newObj);
    open.value = false;
  } else {
    alert("此表单已分配代理人");
  }
}
// 维护table选中项key数据
let selectedArr = reactive([]);
// table可选择rowselection配置
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    selectedArr = selectedRowKeys;
  },
  onSelect: (record, selected, selectedRows, nativeEvent) => {
    // console.log(
    //   "record:",
    //   record,
    //   "selected:",
    //   selected,
    //   "selectedRows:",
    //   selectedRows,
    //   "nativeEvent:",
    //   nativeEvent
    // );
  },
};
// 删除规则选中数据
function deleteRuleData() {
  agentRuleList = agentRuleList.filter((item) => {
    return !selectedArr.includes(item.key);
  });
}
// 向上移动操作
function upGo(index) {
  if (index != 0) {
    agentRuleList[index] = agentRuleList.splice(
      index - 1,
      1,
      agentRuleList[index]
    )[0];
  } else {
    alert("无法上移");
  }
}
// 向下移动操作
function downGo(index) {
  console.log(index, agentRuleList.length);
  if (index < agentRuleList.length - 1) {
    agentRuleList[index] = agentRuleList.splice(
      index + 1,
      1,
      agentRuleList[index]
    )[0];
  } else {
    alert("无法下移");
  }
}
defineExpose({
  agentRuleList,
});
</script>
