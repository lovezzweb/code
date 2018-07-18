import React , {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import config from "./config";
class RootRouter extends Component{
    render(){
        return <Router>
            <Switch>
                {
                    config.map((item,key)=>{
                        return <Route key={key} path={item.path} render={({match})=>{
                            let Com=item.component;
                            return <Com child={item.children} match={match}/>
                        }}></Route>
                    })
                }
                <Redirect from='/' to='/box/home' />
            </Switch>
        </Router>
    }
}
export default RootRouter;