import React , {Component} from "react";
import "./header.css";
import {Icon,Modal,List, InputItem,Button} from "antd-mobile";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {adduser} from '../../../store/actions';
import AlertModal from '../../AlertModal';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            add:false,
            userId:'',
            user:'',
            moneyBase:'',
            put:false,
            text:''
        }
    }
    render(){
        let {type,userdata}=this.props;
        return <header>
            <div style={{display:type==="manger"?"block":"none"}} className='title'>
                <div>
                    <Icon type='left' onClick={()=>{
                        this.props.history.push("/box/home")
                    }}/>
                    用户管理
                    <p onClick={()=>{this.setState({add:true})}}>+</p>
                </div>
            </div>
            <Icon type='ellipsis' style={{display:type==="box"?"block":"none"}} />
            <Modal
                visible={this.state.add}
                transparent
                maskClosable={false}
                >
                <div>
                    <List className='submit-list'>
                        <InputItem placeholder='请输入用户ID' onBlur={(val)=>{this.setState({userId:val})}}>用户ID</InputItem>
                        <InputItem placeholder='请输入姓名' onBlur={(val)=>{this.setState({user:val})}}>姓名</InputItem>
                        <InputItem placeholder='请输入金钱基数' onBlur={(val)=>{this.setState({moneyBase:val})}}>金钱基数</InputItem>
                    </List>
                    <div className='btns'>
                        <Button type="primary" className='text' onClick={this.add.bind(this)}>提交</Button>
                        <Button type="warning" className='text' onClick={this.add.bind(this)}>清空</Button>
                    </div>
                </div>
            </Modal>
            <AlertModal isshow={this.state.put} change={(val)=>{this.setState({put:val})}} text={this.state.text} />
        </header>
    }
    add(){
        let {userdata}=this.props;
        this.setState({add:false});
        let children=[];
        let {userId,user,moneyBase}=this.state;
        if(!userId||!user||!moneyBase){console.log(1)
            this.setState({put:true,text:'用户名/用户ID/金额基数不能为空'})
            this.setState({userId:'',user:'',moneyBase:''})
        }else{
            if(userdata[0]===undefined){
                this.props.getuser(userId,user,moneyBase,children)
                this.setState({userId:'',user:'',moneyBase:''})
            }else{
                let obj=userdata.find(item=>item.userId===userId||item.user===user)
                if(obj){
                    this.setState({put:true,text:'用户名/用户ID重复'})
                }else{
                    this.props.getuser(userId,user,moneyBase,children)
                }
            }
        }
        
    }
}
Header=withRouter(Header);
let mapState=(state)=>{
    return {
        userdata:state.test.userdata
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getuser(userId,user,moneyBase,children){
            dispatch(adduser(userId,user,moneyBase,children))
        }
    }
}
Header=connect(mapState,mapDispatch)(Header)
export default Header;