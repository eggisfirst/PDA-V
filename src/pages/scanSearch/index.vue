<!-- <keep-alive> -->
<template>
  <div class="scanSearch" v-bind:style="{height: height+'px'}">
    <h2>扫描查询页面</h2>
  </div>
</template>
<!-- </keep-alive> -->

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import {pathOA} from '../../js/variable.js'
Vue.use(VueRouter)
Vue.use(Vuex)

export default {
  name: 'ScanSearch',
  data () {
    return {
      height: document.documentElement.clientHeight
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
