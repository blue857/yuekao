/*
 * @Author: your name
 * @Date: 2020-11-30 15:08:49
 * @LastEditTime: 2020-11-30 20:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux月考\demo\src\Mock\data.js
 */
import Mock from "mockjs"

Mock.mock("./api/getlist",()=>{
    return Mock.mock({
        "list|5":[{
            "img":"@image(100x100,@color)",
            "title":'@ctitle',
            "desc":'@cword(10)',
            "isChecked":false,
            "price|55-99":88,
            "num":1,
        }]
    })
})