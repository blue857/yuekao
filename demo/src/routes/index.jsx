import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

const RouteView = (props)=>{
    return <Switch>
        {
            props.routes.map((item,index)=>item.path?
            <Route
              key={index}
              path={item.path}
              render={(pro)=><item.component {...pro} routes={item.children?item.children:[]}>
                  <RouteView routes={item.children}></RouteView>
              </item.component>}
            ></Route>
            :<Redirect {...item} key={index} />)
        }
    </Switch>
}
export default RouteView