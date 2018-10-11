<template>
  <div>
    <button open-type='getUserInfo' bindgetuserinfo="bindGetUserInfo" class="zan-btn zan-btn--primary">授权登录</button>
    <button bindtap='navigateBack' class="zan-btn">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    bindGetUserInfo: function (e) {
      // let backtype = this.data.backType
      console.log(e)
    }
  }
}
</script>

<style>
</style>
