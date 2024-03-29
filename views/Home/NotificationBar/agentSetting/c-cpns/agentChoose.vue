<template>
  <div>
    <a-modal
      destroyOnClose
      v-model:open="open"
      title="选择通知人"
      width="60%"
      footer
    >
      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'"
            >{{ text.first }} {{ text.last }}</template
          >
          <template v-else-if="column.dataIndex === 'choose'">
            <button @click="confirmChooseAgent(record)">确定</button>
          </template>
        </template>
      </a-table>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, reactive, defineExpose, defineEmits } from "vue";
import { computed } from "vue";
import axios from "axios";
const open = ref(false);
const emit = defineEmits(["confirm-choose-agent", "confirm-choose-agent-rule"]);
const props = defineProps({
  isRule: {
    type: Boolean,
  },
});
const data = ref();
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
  },
  {
    title: "department",
    dataIndex: "gender",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "choose",
    dataIndex: "choose",
  },
];
axios({
  method: "get",
  url: "https://randomuser.me/api/?results=50",
}).then((res) => {
  data.value = res.data.results;
});

function confirmChooseAgent(record) {
  const chooseName = `${record.name.first}${record.name.last}`;
  if (props.isRule) {
    emit("confirm-choose-agent-rule", chooseName);
  } else {
    emit("confirm-choose-agent", chooseName);
  }

  open.value = false;
}
const showModal = () => {
  open.value = true;
};

defineExpose({
  showModal,
});
</script>
<style scoped></style>
