
import '@/base/stylus/index.styl'
<script>
export default {
  created () {
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
      }
    })
  }
}
</script>

<style>
</style>
