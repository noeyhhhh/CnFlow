import { defineStore } from "pinia"
const useUserStore = defineStore("user",{
  state: () => ({
    userInfo: {}
  }),
  actions: {
    getUserInfo() {
      console.log('向后端请求了userinfo数据')
      this.userInfo={
      name: 'lll',
      password: 'qwe',
      favouriteTable: ['请假单', '未打卡单', '付款申请单', 'MIS需求权限申请单', '固定列管资产异动单'],
      recentTable: ['付款申请单', '离职单', '出差旅费报销单'],
      pendingTask: [
        {
          tableName: '请假单', priority: 'normal', workName: '申请人填单', sendName: '陆倪昊',applyName:'陆倪昊', arriveTime: '2023/10/29 16:39', status: 'draft'
        },
        {
          tableName: '未打卡单', priority: 'normal', workName: '申请人填单', sendName: '陆倪昊',applyName:'陆倪昊', arriveTime: '2023/10/29 16:39', status: 'processing',mark:'red'
        },
        {
          tableName: '付款申请单', priority: 'normal', workName: '申请人填单', sendName: '陆倪昊',applyName:'陆倪昊', arriveTime: '2023/10/29 16:39', status: 'agent',mark:'blue'
        },
        {
          tableName: 'MIS需求申请单', priority: 'normal', workName: '申请人填单', sendName: '陆倪昊', applyName:'陆倪昊',arriveTime: '2023/10/29 16:39', status: 'processing'
        },
        {
          tableName: '固定资产异动单', priority: 'normal', workName: '申请人填单', sendName: '陆倪昊',applyName:'陆倪昊', arriveTime: '2023/10/29 16:39', status: 'pending'
        },
      ]
    }
    },
    deletePendingTask() {
      
    }
  }
})
export default useUserStore
