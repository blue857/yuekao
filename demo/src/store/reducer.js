/*
 * @Author: your name
 * @Date: 2020-11-30 15:12:15
 * @LastEditTime: 2020-11-30 20:25:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux月考\demo\src\store\reducer.js
 */
const defaultState={
    list:[],
}

 const reducer=(state=defaultState,action)=>{
    const {type,payload}=action 
    switch(type){
        case "list":
            return {
                ...state,
                list:payload.list
            }
        default :
            return {
                ...state,
            }
    }
 }
 export default reducer