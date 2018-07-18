import React , {Component} from "react";
import {connect} from 'react-redux';
import { List, InputItem, WhiteSpace ,Button, Picker,DatePicker,Modal} from 'antd-mobile';
import {getAllUsers,toDetail} from '../../../store/actions'
class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
            userId:''
        }
    }
    render(){
        let {detail,userdata,userInfo}=this.props;
        return <div>
            <Picker data={userInfo} cols={1} className="forss" value={this.state.user} onOk={this.ok.bind(this)}>
                <List.Item arrow="horizontal">用户</List.Item>
            </Picker>
            <ul className='detail'>
                {
                    detail&&detail.map((item,key)=>{
                        return <li key={key}>
                            <span>{item.date}</span>
                            <span>{item.price}</span>
                            <span>{item.log}</span>
                        </li>
                    })
                }
            </ul>
            
        </div>
    }
    ok(val){
        this.setState({user:val,userId:val[0]}) 
        console.log(val[0])
        this.props.toDetail(val[0])
    }
    componentDidMount(){
        this.props.getusers()
    }
}
let mapState=(state)=>{
    return {
        detail:state.test.detail,
        userdata:state.test.userdata,
        userInfo:state.test.userInfo
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getusers(){
            dispatch(getAllUsers())
        },
        toDetail(userId){
            dispatch(toDetail(userId))
        }
    }
}
Detail=connect(mapState,mapDispatch)(Detail)
export default Detail;