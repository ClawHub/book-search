





### 失败返回结果
    {
        "code":0,
        "data":{},
        "msg":'失败'
    }
### 搜索页面
1. 推荐书籍（该接口做成后台分页，可以让客户点击’换一批‘按钮切换推荐

    接口：/ recommend
    
    入参：
    
        params: {
            'pageNum':1,
            'pageSize':10
        }
        
    请求方式：post
    
    返回结果：
    
        {
            code: 1,
            data: {
                total: 100,
                rows: [{
                  boodId: 书籍id,
                  bookName: 书名,
                  bookUrl: 小说链接
                },{
                  boodId: 书籍id,
                  bookName: 书名,
                  bookUrl: 小说链接,
                }]
            },
            msg: '成功'
        }
        
2、 查询书籍

    接口：/ search
    
    入参：
    
        params: {
            'pageNum':1,
            'pageSize':10,
            'bookName': '大唐盛世',
            'boodId': '100'
        }
        
    请求方式：post
    
    返回结果：
    
        {
            code: 1,
            data: {
                total: 100,
                rows: [{
                  boodId: 书籍id,
                  bookName: 书名,
                  bookUrl: 小说链接,
                  class: 小说分类,
                  author: 作者,
                  publishing: '新华属性',
                  size: 字数,
                  imgUrl: 图片链接,
                  bookUpdate: 更新时间,
                  chapterName: '202章',
                  chapterUrl: '202章',
                  chapterId: '202章',
                },{
                  boodId: 书籍id,
                  bookName: 书名,
                  author: 作者,
                  publishing: '新华属性',
                  bookUrl: 小说链接,
                  class: 小说分类,
                  size: 字数,
                  imgUrl: 图片链接,
                  bookUpdate: 更新时间,
                  chapterName: '202章',
                  chapterUrl: '202章',
                  chapterId: '202章',
                }]
            },
            msg: '成功'
        }
    
3、查询历史
    
    接口：/history
    
    入参：
    
        params: {
            'pageNum':1,
            'pageSize':10,
            'openId': ''
        }
        
    请求方式：post
    
    返回结果：
    
        {
            code: 1,
            data: {
                total: 100,
                rows: [{
                  boodId: 书籍id,
                  bookName: 书名,
                  bookUrl: 小说链接,
                  imgUrl: 图片链接
                },{
                  boodId: 书籍id,
                  bookName: 书名,
                  bookUrl: 小说链接,
                  imgUrl: 图片链接
                }]
            },
            msg: '成功'
        }
    
4、删除历史记录
    
    接口：/deleteHistory
    
    入参：
    
        params: {
            'openId': ''
        }
        
    请求方式：post
    
    返回结果：
    
        {
            code: 1,
            data: {
                message:'操作成功'
            },
            msg: '成功'
        }