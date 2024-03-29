<template>
  <a-layout class="layout">
    <a-layout-header>
      <homeMenu />
      <notificationBar />
    </a-layout-header>
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <RouterView />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import homeMenu from "./Menu/homeMenu.vue";
import notificationBar from "./NotificationBar/notificationBar.vue";
</script>
<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
.layout {
  height: 100%;
  background-color: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
[data-theme="dark"] .site-layout-content {
  background: #141414;
}
.ant-layout-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>
