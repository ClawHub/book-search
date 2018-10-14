import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)

app.$mount()

export default {
  config: {
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    pages: [
      'pages/search/main',
      'pages/read/main',
      'pages/me/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#EA5149',
      navigationBarTitleText: '免费小说阅读搜索',
      navigationBarTextStyle: 'light',
      background: '#222',
      onReachBottomDistance: 20
    },
    tabBar: {
      selectedColor: '#EA5149',
      list: [{
        pagePath: 'pages/search/main',
        iconPath: 'static/img/room.png',
        selectedIconPath: 'static/img/room-active.png',
        text: '搜索'
      }, {
        pagePath: 'pages/read/main',
        iconPath: 'static/img/book.png',
        selectedIconPath: 'static/img/book-active.png',
        text: '阅读'
      }, {
        pagePath: 'pages/me/main',
        iconPath: 'static/img/me.png',
        selectedIconPath: 'static/img/me-active.png',
        text: '我'
      }]
    }
  }
}
