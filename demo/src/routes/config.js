/*
 * @Author: your name
 * @Date: 2020-11-30 14:44:26
 * @LastEditTime: 2020-11-30 14:56:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux月考\demo\src\routes\config.js
 */
import Home from "../pages/Home/index.jsx"
import List from "../pages/Home/view/List.jsx"
import Shopcar from "../pages/Shopcar/index.jsx"
import My from "../pages/My/index.jsx"
import Details from "../pages/Details/index.jsx"
 const routes=[{
     path:"/home",
     component:Home,
     children:[{
         path:"/home/list",
         component:List,
     }]
 },{
     path:"/shopcar",
     component:Shopcar,
 },{
     path:"/my",
     component:My,
 },{
     path:"/details",
     component:Details,
 },{
     from:"/",
     to:"/home/list"
 }]
 export {routes}