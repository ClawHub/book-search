import { address } from './config'

export default function http (url, data, method = 'post') {
  wx.showLoading({
    title: '加载中...'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: address.protocol + address.url + url,
      data,
      method: method,
      success: function (res) {
        if (res.data.status) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.msg.msgText,
            icon: 'none'
          })
          setTimeout(() => {
            wx.navigateBack(1)
          }, 1000)
        }
      },
      fail: function (error) {
        reject(error)
        wx.showToast({
          title: '网络不给力啊',
          icon: 'none'
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
