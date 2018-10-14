import Vue from 'vue'
import Search from './Search'

const app = new Vue(Search)
app.$mount()

export default {
  config: {
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
}
