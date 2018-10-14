import Vue from 'vue'
import Read from './Read'

const app = new Vue(Read)
app.$mount()

export default {
  config: {
    enablePullDownRefresh: true
  }
}
