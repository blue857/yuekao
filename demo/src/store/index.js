/*
 * @Author: your name
 * @Date: 2020-11-30 15:11:46
 * @LastEditTime: 2020-11-30 20:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux月考\demo\src\store\index.js
 */
import {createStore} from "redux"
import reducer from "./reducer"
const store=createStore(reducer)
export default store

