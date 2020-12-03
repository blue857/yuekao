import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class index extends Component {
    render() {
        return (
            <div className="home">
                主页
                <div className="main">
                    {this.props.children}
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
