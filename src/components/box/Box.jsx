import React , {Component} from "react";
import {Route,NavLink} from 'react-router-dom';
import './box.css';
import Header from './coms/Header';
class Box extends Component{
    render(){
        let {child,match}=this.props;
        return <div className='box'>
            <Header type={"box"} />
            <section>
            {
                child.map((item,key)=>{
                    return <Route key={key} path={match.url+item.path} component={item.component}></Route>
                })
            }
            </section>
            <footer className='footer'>
            {
                child.map((item,key)=>{
                    return <NavLink key={key} to={match.url+item.path}>{item.title}</NavLink>
                })
            }
            </footer>
        </div>
    }
}
export default Box;