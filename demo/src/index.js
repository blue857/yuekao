/*
 * @Author: your name
 * @Date: 2020-10-23 10:05:40
 * @LastEditTime: 2020-11-30 15:36:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \课堂练习\demo\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./Mock/data";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

