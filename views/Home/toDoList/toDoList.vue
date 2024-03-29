<template>
  <div class="toDoList">
    <div class="left">
      <ul>
        <li>全部</li>
        <li>草稿</li>
        <li>待处理</li>
        <li>批次处理</li>
        <li>处理</li>
        <li>进行中</li>
      </ul>
    </div>
    <div class="right">
      <h2>您有3笔未完成任务</h2>
      <a-table
        class="toDoListTable"
        :data-source="userInfo.pendingTask"
        :columns="columns"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'mark'">
            <div
              class="mark"
              :style="{ backgroundColor: text || '#fff' }"
            ></div>
          </template>
          <template v-else-if="column.dataIndex === 'status'">
            <span>{{ text }}</span
            >---<a @click="onDelete(record)" style="color: blue">delete</a>
          </template>
        </template>
      </a-table>
      <markClickChoice class="markClickChoice"></markClickChoice>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";
import markClickChoice from "./c-cpns/markClickChoice.vue";
import useUserStore from "@/store/user";
const userStore = useUserStore();
userStore.getUserInfo();
const { userInfo } = storeToRefs(userStore);
console.log(userInfo);

const columns = [
  {
    title: "编号",
    customRender: ({ text, record, index }) => {
      return `${index + 1}`;
    },
  },
  {
    title: "标记",
    dataIndex: "mark",
    key: "mark",
  },
  {
    title: "优先权",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "流程名称",
    dataIndex: "tableName",
    key: "tableName",
    ellipsis: true,
  },
  {
    title: "工作名称",
    dataIndex: "workName",
    key: "workName",
    ellipsis: true,
  },
  {
    title: "申请者",
    dataIndex: "applyName",
    key: "applyName",
    ellipsis: true,
  },
  {
    title: "送出人",
    dataIndex: "sendName",
    key: "sendName",
    ellipsis: true,
  },
  {
    title: "送达时间",
    dataIndex: "arriveTime",
    key: "arriveTime",
    ellipsis: true,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    ellipsis: true,
  },
];
function onDelete(key) {}
</script>
<style scoped>
.toDoList {
  display: flex;
}
.left {
  width: 300px;
}
.right {
  height: 200px;
  flex: 1; /* 自动填充满容器  */
}

.mark {
  width: 15px;
  height: 15px;
  background-color: wheat;
}
.markClickChoice {
  position: relative;
}
</style>
