import { defineStore } from "pinia"
const useAgentStore = defineStore("agent",{
  state: () => ({
    agentSettingData: {},
    agentRuleList: []
  }),
  actions: {
    getAgentSettingAction() {
      console.log('向后端请求了agent数据')
      this.agentSettingData = {
        isActive: true,
        isTimeAcitve: false,
        rangeTimePicker: [],
        isCompeleteNotice: false,
        isHandleByRule: false,
        noticeAgent: 'eight'
      }
       this.agentRuleList = [
          { formName: "表单1", agentName: "1", key: 0 },
          { formName: "表单2", agentName: "2", key: 1 },
          { formName: "表单3", agentName: "3", key: 2 },
          { formName: "表单4", agentName: "34", key: 3 },
      ]
    },
    updataAgentSettingAction(agentSettingData, agentRuleList) {
     console.log('向后端发送了接口，数据为',agentSettingData,agentRuleList)
    }
  }
})
export default useAgentStore
