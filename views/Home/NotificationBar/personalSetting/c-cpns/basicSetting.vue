<template>
  <a-form
    disabled
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="loginAccount" label="登入账号" name="loginAccount">
      <a-input v-model:value="formState.loginAccount" />
    </a-form-item>
    <a-form-item label="成员姓名" name="userName">
      <a-input v-model:value="formState.userName"> </a-input>
    </a-form-item>
    <a-form-item label="主要职务" name="majorJob">
      <a-select
        style="width: 120px"
        v-model:value="department"
        :options="departmentData.map((pro) => ({ value: pro }))"
      ></a-select>
      <a-form-item-rest>
        <a-select
          v-model:value="job"
          style="width: 120px"
          :options="jobs.map((city) => ({ value: city }))"
        ></a-select>
      </a-form-item-rest>
    </a-form-item>
    <a-form-item label="电子邮件" name="email">
      <a-input v-model:value="formState.email"> </a-input>
    </a-form-item>
    <a-form-item label="性别" name="gender">
      <a-radio-group v-model:value="formState.gender">
        <a-radio value="男">男</a-radio>
        <a-radio value="女">女</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item name="date-picker" label="DatePicker">
      <a-date-picker
        v-model:value="formState.arriveTime"
        value-format="YYYY-MM-DD"
      />
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive, ref, toRaw, computed, watch } from "vue";
const formRef = ref();
const serverJob = ["系统资讯部", "助理1"];
const departmentData = ["系统资讯部", "人事部"];
const jobTitles = {
  系统资讯部: ["助理1", "助理2", "助理3"],
  人事部: ["人事专员1", "人事专员2", "人事专员3"],
};
const department = ref(serverJob[0]);
const job = ref(serverJob[1]);
const jobs = computed(() => {
  return jobTitles[department.value];
});
watch(department, (val) => {
  job.value = jobTitles[val][0];
});
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  loginAccount: "CN/noey.lu",
  userName: "陆倪昊",
  majorJob: `${serverJob[0]}-${serverJob[1]}`,
  email: "noey.lu@gigabyte.com.cn",
  gender: "男",
  arriveTime: "2019/07/18",
});
const rules = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  date1: [
    {
      required: true,
      message: "Please pick a date",
      trigger: "change",
      type: "object",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "Please input activity form",
      trigger: "blur",
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>
<style scoped>
.ant-form-item {
  margin-bottom: 1rem;
}
</style>
