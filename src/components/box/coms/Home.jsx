import React , {Component} from "react";
import {Link,withRouter} from 'react-router-dom';
import {Button,Modal} from "antd-mobile";
import {connect} from 'react-redux';
import axios from 'axios';
import '../../../mock';
import {toDetail,login,getAllUsers} from '../../../store/actions';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            IsVal:false,
            all:0
        }
    }
    render(){
        let {all}=this.state;
        let {isShow,userdata}=this.props;
        return <div className='home'>
            <div className='title'>
                <p>{all}</p>
            </div>
            <div type="primary" className='text'>
                <input type="text" placeholder='请输入管理员密码' 
                        onKeyUp={this.change.bind(this)}
                        style={{display:isShow?"block":"none"}}/>
                <Link to='/manger'>
                    <span style={{display:!isShow?"block":"none"}}>管理用户</span>
                </Link> 
            </div>
            <ul className='list'>
                {
                    userdata&&userdata.map((item,key)=>{
                        return <li key={key} onClick={this.toDetail.bind(this,item.userId)}>
                                    <span>{item.user}</span>
                                    <span>{item.moneyBase}</span>
                            </li>
                        
                    })
                }
            </ul>
            <Modal
                visible={this.state.IsVal}
                transparent
                maskClosable={false}
                title="提示"
                footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.setState({IsVal:false}); } }]}>
                <div>密码错误!</div>
            </Modal>
        </div>
    }
    change(ev){
       if(ev.keyCode===13){
           let pwd=ev.target.value;
           this.props.login(pwd)
       }
    }
    toDetail(userId){
        this.props.history.push('/box/detail',{data:{userId}});
        this.props.toDetail(userId)
    }
    componentDidMount(){
        let money=this.props.userdata.reduce((prevmoney,val)=>{
            return prevmoney+val.moneyBase*1
        },0)
        this.setState({all:money})
        this.props.getAllUsers();
    }
}
Home=withRouter(Home)
let mapState=(state)=>{
    return {
        userdata:state.test.userdata,
        isShow:state.test.isShow
    }
}
let mapDispatch=(dispatch)=>{
    return {
        toDetail(userId){
            dispatch(toDetail(userId))
        },
        login(pwd){
            dispatch(login(pwd))
        },
        getAllUsers(){
            dispatch(getAllUsers())
        }
    }
}
Home=connect(mapState,mapDispatch)(Home)
export default Home;