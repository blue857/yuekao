import React, { Component } from 'react'
import axios from "axios"
import {connect} from "react-redux"
class List extends Component {
    componentDidMount(){
        const {dispatch}=this.props
        axios({url:"./api/getlist"}).then(res=>{
            console.log(res);
            dispatch({
                type:"list",
                payload:{ 
                    list:res.data.list
                }
            })
        })
    }
    handleClickDetails=(item)=>{
        this.props.history.push("/details")
        window.localStorage.setItem("obj",JSON.stringify(item))
    }
    render() {
        const { list } = this.props
        return (
            <div className="list">
                {
                    list.map((item,index)=><dl key={index} onClick={()=>{this.handleClickDetails(item)}}>
                        <dt>
                            <img src={item.img} alt=""/>
                        </dt>
                        <dd>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <p>{item.price}元</p>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
}
export default connect((state)=>{
   return {
       list:state.list
   } 
})(List)
