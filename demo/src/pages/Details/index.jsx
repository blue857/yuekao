import React, { Component } from 'react'

export default class index extends Component {
    state={
        obj:JSON.parse(window.localStorage.getItem("obj"))||{}
    }
    handleClick=()=>{
        const obj=JSON.parse(window.localStorage.getItem("shopcar"))||[]
        obj.push(this.state.obj)
        window.localStorage.setItem("shopcar",JSON.stringify(obj))
    }
    handlereturn=()=>{
        this.props.history.go(-1)
    }
    render() {
        const { obj } = this.state
        return (
            <div className="details">
                详情页
                <button onClick={this.handlereturn}>返回</button>
                {
                    <dl>
                        <dt>
                           <img src={obj.img} alt=""/>
                        </dt>
                        <dd>
                           <h3>{obj.title}</h3>
                           <p>{obj.desc}</p>
                           <p>{obj.price}元</p>
                        </dd>
                    </dl>
                }
                <button onClick={this.handleClick}>加入购物车</button>
            </div>
        )
    }
}
