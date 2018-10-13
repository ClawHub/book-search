import Vue from 'vue'
import Search from './Search'

export default {
  config: {
    window: {
      'onReachBottomDistance': 10
    }
  }
}
const app = new Vue(Search)
app.$mount()
