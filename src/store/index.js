// import Vue from 'vue'
// import Vuex from 'vuex'
// import moduleA from './modules/moduleA'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     moduleA
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    skinCol: 'skinA',
    loadingShow: true,
    detailBoxShow: false,
    checkBoxShow: false,
    orders: [],
    SN: [],
    snCopy: [],
    snDetail: {},
    tableH: [],
    snStatus: [],
    isTr3: true,
    isOP: true,
    snArr: []
  },
  mutations: {
    // 皮肤选择
    changeSkin: (state, skinCol) => state.skinCol = skinCol,
    // 加载动画显示/隐藏
    loadingShow: (state, x) => state.loadingShow = x,
    // 插入订单号数据
    setOrders: (state, arr) => state.orders = arr,
    // 插入SN号数据
    setSN: (state, arr) => state.SN = arr,
    snCopy: (state, arr) => state.snCopy = arr,
    // SN码详情框显示/隐藏  组件table-tr.vue
    detailBoxShow: (state, x) => state.detailBoxShow = x,
    // SN列表页checkbox复选框显示/隐藏   组件table-tr.vue
    checkBoxShow: (state, x) => state.checkBoxShow = x,
    // SN列表页SN详情  组件sn-detail.vue
    snDetail: (state, x) => state.snDetail = x,
    // table表头的标题
    tableH: (state, x) => state.tableH = x,
    // 表是否为三列
    isOP: (state, x) => state.isOP = x,
    isTr3: (state, x) => state.isTr3 = x,
    // sn列表的校验状态数组
    snStatus: (state, x) => state.snStatus = arr,
    // 提交数组到store
    snArr: (state, arr) => state.snArr = arr
  },
  actions: {
    incrementAsync({
      commit
    }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    peopleMsg: state => {
      return state.people[1].name
    }
  }
})

export default store
