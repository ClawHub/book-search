
import '@/base/stylus/index.styl'
<script>
export default {
  created () {
    wx.switchTab({
      url: './pages/authorization/main'
    })
    // wx.login({
    //   success (res) {
    //     let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx5dde15807d131ea7&secret=3604292493253da6c88521c54c4f5072&js_code=${res.code}&grant_type=authorization_code`
    //     wx.request({
    //       url,
    //       success (res) {
    //         console.log(res)
    //         wx.setStorage({
    //           openid: res.data.openid
    //         })
    //       }
    //     })
    //   }
    // })
  }
}
</script>

<style>
</style>
