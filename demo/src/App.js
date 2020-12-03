/*
 * @Author: your name
 * @Date: 2020-10-23 10:05:40
 * @LastEditTime: 2020-11-30 14:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \课堂练习\demo\src\App.js
 */
import React from 'react';
import './App.css';
import RouteView from "./routes/index.jsx"
import {routes} from "./routes/config"
       
function App() {
  return (
    <div className="App">
        <RouteView routes={routes}></RouteView>
    </div>
  );
}

export default App;
