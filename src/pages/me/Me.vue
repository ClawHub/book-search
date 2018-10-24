
<template>
  <div class="container">
    <button class="userinfo" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
      <img :src="userinfo.avatarUrl">
      <p>{{userinfo.nickName}}</p>
    </button>
  </div>
</template>

<script>
  import { showSuccess } from '@/utils'
  export default {
    data () {
      return {
        userinfo: {
          avatarUrl: '../../../static/img/unlogin.png',
          nickName: '点击登录'
        },
        openid: ''
      }
    },
    methods: {
      onGotUserInfo (e) {
        let user = wx.getStorageSync('userinfo')
        let that = this
        if (!user) {
          wx.login({
            success (res) {
              let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx5dde15807d131ea7&secret=3604292493253da6c88521c54c4f5072&js_code=${res.code}&grant_type=authorization_code`
              wx.request({
                url,
                success (res) {
                  wx.setStorageSync('openid', res.data.openid)
                  wx.setStorageSync('userinfo', e.mp.detail.userInfo)
                  that.userinfo = e.mp.detail.userInfo
                  showSuccess('登录成功')
                }
              })
            }
          })
        }
      }
    },
    onShow () {
      let userinfo = wx.getStorageSync('userinfo')
      this.openid = wx.getStorageSync('openid')
      if (userinfo) {
        this.userinfo = userinfo
      }
    }
  }
</script>

<style lang="stylus">
  .container
    padding: 0 30rpx
    .userinfo
      text-align: center
      margin-top: 10px
      margin-bottom: 10px
      background: #fff
      border: none
      img
        width: 128rpx
        height: 128rpx
        margin: 20rpx
        border-radius: 50%
    .btn
      margin-top: 50rpx;
</style>