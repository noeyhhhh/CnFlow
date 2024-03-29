<template>
  <div class="container">
    <div class="left">
      <div class="leftTitle">
        <h3>快速启动流程/应用程序</h3>
        <a-button @click="switchShowTabs">显示</a-button>
      </div>
      <a-tabs v-if="showTabs" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="我的最爱">
          <ul>
            <li
              @click="clickFavouriteTable"
              v-for="(item, index) in userInfo.favouriteTable"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </a-tab-pane>
        <a-tab-pane key="2" tab="最近启动" force-render>
          <ul>
            <li
              @click="clickFavouriteTable"
              v-for="(item, index) in userInfo.recentTable"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </a-tab-pane>
        <a-tab-pane key="3" tab="所有流程">
          <a-collapse v-model:collapseActiveKey="collapseActiveKey" accordion>
            <a-collapse-panel key="1" header="总务">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '总务')">
                  {{ item.name }}
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="考勤">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '考勤')">
                  {{ item.name }}
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="财务">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '财务')">
                  {{ item.name }}
                </li>
              </ul></a-collapse-panel
            >
            <a-collapse-panel key="4" header="人事">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '人事')">
                  {{ item.name }}
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel key="5" header="资讯">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '资讯')">
                  {{ item.name }}
                </li>
              </ul></a-collapse-panel
            >
            <a-collapse-panel key="6" header="采购">
              <ul>
                <li v-for="item in tables.filter((i) => i.type === '采购')">
                  {{ item.name }}
                </li>
              </ul>
            </a-collapse-panel></a-collapse
          ></a-tab-pane
        >
      </a-tabs>
    </div>
    <div class="center">
      <h2>to do list</h2>
      <p>You have 2 pending tasks</p>
      <a-table :columns="columns" :data-source="data"> </a-table>
      <div class="bulletinBoard">
        <h2>bulletin board</h2>
        <vueScroll>
          <ul>
            <li v-for="item in bulletinBoard">
              [{{ item.date }}]---{{ item.title }})
            </li>
          </ul>
        </vueScroll>
      </div>
    </div>
    <div class="right">
      <div class="rightTitle">
        <h3>单位资料查询</h3>
        <a-input v-model:value="searchNumber"></a-input>
        <a-button @click="switchIsShowSearchInfo">开始搜寻</a-button>
        <a-button @click="resetSeachInfo">重置</a-button>
        <div v-if="isShowSearchInfo" class="searchInfo">
          <ul>
            <li>
              <span>申请日：</span><span> {{ searchForm.applyTime }}</span>
            </li>
            <li>
              <span>申请人：</span><span> {{ searchForm.applyName }}</span>
            </li>
            <li>
              <span>工作主题：</span><span> {{ searchForm.formTheme }}</span>
            </li>
            <li>
              <span>签核状态：</span
              ><span> {{ searchForm.signOffStatus }}</span>
            </li>
            <li>
              <span>签核人：</span><span> {{ searchForm.Signer }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import useUserStore from "@/store/user";
import useMainStore from "@/store/main";
import vueScroll from "@/components/scroll/index.vue";
const userStore = useUserStore();
userStore.getUserInfo();
const { userInfo } = userStore;

const mainStore = useMainStore();
mainStore.getMainData();
const { tables, bulletinBoard, searchForm } = useMainStore();

const showTabs = ref(true);
const activeKey = ref("1");
let searchNumber = ref("aa");
let isShowSearchInfo = ref(false);
const switchIsShowSearchInfo = () => {
  isShowSearchInfo.value = true;
};
const resetSeachInfo = () => {
  isShowSearchInfo.value = false;
};
const switchShowTabs = () => {
  showTabs.value = !showTabs.value;
};
const clickFavouriteTable = () => {};
const collapseActiveKey = ref([]);
const columns = [
  {
    title: "编号",
    customRender: ({ text, record, index }) => {
      return `${index + 1}`;
    },
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
];
const data = userInfo.pendingTask;
</script>

<style scoped>
div {
  height: 100%;
}
.container {
  display: flex;
}
.center {
  flex: 1;
}
.left,
.right {
}

.leftTitle {
  background-color: #efefef;
  height: 2rem;
  line-height: 2rem;
  display: flex;
  justify-content: center;
}
.seamless-warp {
  height: 229px;
  overflow: hidden;
}
.notice-box {
  width: 500px;
  height: 30px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
  border: 1px solid red;
}
.notice-item {
  width: 100%;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
}
.notice-slide-enter-active,
.notice-slide-leave-active {
  transition: all 0.8s linear;
}
.notice-slide-enter {
  top: 30px;
}
.notice-slide-leave-to {
  top: -30px;
}
.bulletinBoard {
  height: 200px;
}
li {
  padding: 10px;
}
</style>
