import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class index extends Component {
    render() {
        return (
            <div className="my">
                <div className="main">
                   我的
                </div>
                <div className="footer">
                    <NavLink to="/home/list">首页</NavLink>
                    <NavLink to="/shopcar">购物车</NavLink>
                    <NavLink to="/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
