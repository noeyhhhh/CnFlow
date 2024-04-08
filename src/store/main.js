import { defineStore } from "pinia"
const useMainStore = defineStore("main",{
  state: () => ({
    tables: [],
    bulletinBoard: [],
    searchForm: {}
  }),
  actions: {
    getMainData() {
      console.log('向后端请求了main页面数据')
      this.tables = [  { name: '固定列管资产异动单', type: '总务', id: 'CNAMD001' },
      { name: '资产增加单', type: '总务', id: 'CNAMD002' },
      { name: '	庶务用品申请单', type: '总务', id: 'CNAMD003' },
      { name: '名片印制申请单', type: '总务', id: 'CNAMD004' },
      { name: '派车申请单', type: '总务', id: 'CNAMD005' },
      { name: '手机话费额度申请单', type: '总务', id: 'CNAMD006' },
      { name: '请假单', type: '考勤', id: 'CNATT005' },
      { name: '销假单', type: '考勤', id: 'CNATT006' },
      { name: '未打卡单', type: '考勤', id: 'CNATT007' },
      { name: '加班单', type: '考勤', id: 'CNATT008' },
      { name: '出差旅费报销单', type: '财务', id: 'CNFIN001' },
      { name: '付款申请单', type: '财务', id: 'CNFIN002' },
      { name: '用印及证照申请单', type: '财务', id: 'CNFIN003' },
      { name: '费用转移单', type: '财务', id: 'CNFIN004' },
      { name: '缴款票据明细表', type: '财务', id: 'CNFIN005' },
      { name: '私车公用申请单', type: '财务', id: 'CNFIN006' },
      { name: '出差申请单', type: '人事', id: 'CNHRM001' },
      { name: '离职申请及交接单', type: '人事', id: 'CNHRM002' },
      { name: '部门人员需求申请单', type: '人事', id: 'CNHRM003' },
      { name: '部门异动申请单', type: '人事', id: 'CNHRM004' },
      { name: '奖惩通知单', type: '人事', id: 'CNHRM005' },
      { name: '内部事务意见协调确认单', type: '人事', id: 'CNHRM006' },
      { name: '签呈单', type: '人事', id: 'CNHRM007' },
      { name: '员工训练申请单', type: '人事', id: 'CNHRM008' },
      { name: '人员录用单', type: '人事', id: 'CNHRM009' },
      { name: 'MIS需求权限申请单', type: '资讯', id: 'CNITD001' },
      { name: '电子邮件申请单', type: '资讯', id: 'CNITD002' },
      { name: '资讯设备及办公电脑申请单', type: '资讯', id: 'CNITD002' },
      { name: '采购请购单', type: '采购', id: 'CNPCM001' }]
      this.bulletinBoard = [ {'title': '无缝滚动第一行无缝滚动第一行', 'date': '2017-12-16' },
      {'title': '无缝滚动第二行无缝滚动第二行', 'date': '2017-12-16' },
      {'title': '无缝滚动第三行无缝滚动第三行', 'date': '2017-12-16' },
      {'title': '无缝滚动第四行无缝滚动第四行', 'date': '2017-12-16' },
      {'title': '无缝滚动第五行无缝滚动第五行', 'date': '2017-12-16' },
      {'title': '无缝滚动第六行无缝滚动第六行', 'date': '2017-12-16' },
      {'title': '无缝滚动第七行无缝滚动第七行', 'date': '2017-12-16' },
      {'title': '无缝滚动第八行无缝滚动第八行', 'date': '2017-12-16' },
      {'title': '无缝滚动第九行无缝滚动第九行', 'date': '2017-12-16' }]
      this.searchForm = {
        applyTime: '	2023/10/27',
        applyName: '陆倪昊',
        formTheme: '付款申请单: 陆倪昊(CN190040) 2023/10/27 申请[9月份电话费用报销] (Ans000002646107)',
        signOffStatus: 'completed',
        Signer: ''
      }
    }
  }
})
export default useMainStore
