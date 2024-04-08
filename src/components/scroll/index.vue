<template>
  <div ref="wrap" class="wrap" style="overflow: hidden">
    <div
      ref="realBox"
      :style="pos"
      @mouseenter="enter"
      @mouseleave="leave"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div ref="slotList" :style="float">
        <slot></slot>
      </div>
      <div v-html="copyHtml" :style="float"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onBeforeMount, onMounted, defineProps } from "vue";
const xPos = ref(0);
const yPos = ref(0);
const delay = ref(0);
const ease = ref("ease-in");
const copyHtml = ref("");
const width = ref(0); // 外容器宽度
const height = ref(0);
const realBoxWidth = ref(0); // 内容实际宽度
const realBoxHeight = ref(0);
const slotList = ref();
const realBox = ref();
let reframe = ref();
const props = defineProps({
  data: {
    type: Array,
  },
  classOption: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
// 方法属性
// 开始移动方法
const _move = () => {
  reframe = requestAnimationFrame(function () {
    const h = realBoxHeight.value / 2; //实际高度
    const w = realBoxWidth.value / 2; //宽度
    let { direction } = defaultOption.value;
    // 1-向上滚动
    if (direction === 1) {
      if (Math.abs(yPos.value) >= h) {
        yPos.value = 0;
      }
      yPos.value -= step.value;
    } else if (direction === 2) {
    }
    _move();
  });
};
// 初始移动的数据
const _initMove = () => {
  copyHtml.value = slotList.value.innerHTML;
  setTimeout(() => {
    realBoxHeight.value = realBox.value.offsetHeight;
    _move();
  }, 0);
};
// 停止移动方法
const _stopMove = () => {
  cancelAnimationFrame(reframe);
};
const _startMove = () => {
  _move();
};
function enter() {
  _stopMove();
}
function leave() {
  _startMove();
}
// 计算属性
// move移动样式
let pos = computed(() => {
  return {
    transform: `translate(${xPos.value}px,${yPos.value}px)`,
    transition: `all ${ease.value} ${delay.value}ms`,
    overflow: "hidden",
  };
});
// step速度
let step = computed(() => {
  return defaultOption.value.step;
});
let float = computed(() => {
  return { overflow: "hidden" };
});
// 默认配置选项
let defaultOption = computed(() => {
  return {
    step: 0.3, //步长
    limitMoveNum: 5, //启动无缝滚动最小数据数
    hoverStop: true, //是否启用鼠标hover控制
    direction: 1, // 0 往下 1 往上 2向左 3向右
    openTouch: true, //开启移动端touch
    singleHeight: 0, //单条数据高度有值hoverStop关闭
    singleWidth: 0, //单条数据宽度有值hoverStop关闭
    waitTime: 1000, //单步停止等待时间
    switchOffset: 30,
    autoPlay: true,
    navigation: false,
    switchSingleStep: 134,
    switchDelay: 400,
    switchDisabledClass: "disabled",
    isSingleRemUnit: false, // singleWidth/singleHeight 是否开启rem度量
  };
});
onBeforeMount(() => {});
onMounted(() => {
  _initMove();
});
</script>
<style>
ul {
  margin-bottom: 0;
}
</style>
