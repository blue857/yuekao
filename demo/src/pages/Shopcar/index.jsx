import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class index extends Component {
    state = {
        carList: JSON.parse(window.localStorage.getItem("shopcar")) || {},
        allprice:0,
    }
    handleChange=(index)=>{
        const {carList} =this.state
        carList[index].isChecked=!carList[index].isChecked
        const all=carList[index].price*carList[index].num
        window.localStorage.getItem("shopcar",JSON.stringify(carList))
        this.setState({
            carList,
            allprice:all,
        })
    }
    handleInput=(index,e)=>{
        const { carList }=this.state
        carList[index].num=e.target.value
        window.localStorage.setItem("shopcar",JSON.stringify(carList))
        this.setState({
            carList,
        })
    }
    handleReduce=(index)=>{
        const { carList } =this.state
        const min=carList[index].num*1-1
        carList[index].num=min
        if(min<1){
            carList.splice(index,1)
        }
        window.localStorage.setItem("shopcar",JSON.stringify(carList))
        this.setState({
            carList,
        })
    }
    handleAdd=(index)=>{
        const { carList } = this.state
        carList[index].num=carList[index].num*1+1
        window.localStorage.setItem("shopcar",JSON.stringify(carList))
        this.setState({
            carList,
        })
    }
    handleAllChange=(e)=>{
        const { carList } =this.state
        carList.forEach(item=>{
            item.isChecked=e.target.checked
        })
        window.localStorage.setItem("shopcar" ,JSON.stringify(carList))
        this.setState({
            carList,
        })
    }
    render() {
        const { carList,allprice } = this.state
        return (
            <div className="shopcar">
                <div className="main">
                    购物车
                    {
                        carList.map((item,index)=>{
                            return <dl key={index}>
                                <dt>
                                    <p>
                                        <input 
                                           type="checkbox"
                                           checked={item.isChecked}
                                           onChange={()=>{this.handleChange(index)}}
                                        />
                                    </p>
                                    <img src={item.img} alt=""/>
                                </dt>
                                <dd>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <p>{item.price}元</p>
                                    <li>
                                        <button onClick={()=>{this.handleReduce(index)}}>-</button>
                                        <input type="text" value={item.num} onChange={(e)=>{this.handleInput(index,e)}} />
                                        <button onClick={()=>{this.handleAdd(index)}}>+</button>
                                    </li>
                                </dd> 
                            </dl>
                        })
                    }
                    <ol>
                        <input type="checkbox" onChange={this.handleAllChange} />全选
                        <li>总价: <span style={{color:"red"}} >{allprice}元</span></li>
                    </ol>
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
