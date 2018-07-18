import React , {Component} from "react";
import Header from '../box/coms/Header';
import {Icon,Modal,List, InputItem, WhiteSpace ,Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {deluser,changeuser,getAllUsers} from '../../store/actions';
class Manger extends Component{
    constructor(props){
        super(props)
        this.state={
            del:false,
            userID:'',
            changeuser:false,
            user:'1'
        }
    }
    render(){
        let {data}=this.props;
        data=data.userdata;
        return <div className='manger'>
            <Header type={"manger"} />
            <List>
                {
                    data&&data.map((item,key)=>{
                        return <List.Item key={key}>
                            <Icon type='check-circle' onClick={this.changeUser.bind(this,item.userId,item.user)} />
                            <span>{item.userId}</span>
                            <span>{item.user}</span>
                            <Icon type='cross' onClick={this.deluser.bind(this,item.userId)} />
                        </List.Item>
                    })
                }
            </List>
            <Modal
                visible={this.state.del}
                transparent
                maskClosable={false}
                title="警告"
                footer={[{ text: 'Cancle', onPress: () => { console.log('cancle'); this.setState({del:false}); } },
                        {
                            text: 'Ok',
                            onPress: () =>
                            new Promise((resolve) => {
                                setTimeout(resolve, 1000);
                                this.setState({del:false});
                                this.props.deluser(this.state.userID);
                            }),
                        }]}>
                <div>确认删除？</div>
            </Modal>
            <Modal
                visible={this.state.changeuser}
                transparent
                maskClosable={false}
                >
                <div>
                    <List className='submit-list'>
                        <InputItem value={this.state.user} onChange={(val)=>{this.setState({user:val})}}>姓名</InputItem>
                    </List>
                    <div className='btns'>
                        <Button type="primary" className='text' onClick={this.add.bind(this)}>提交</Button>
                        <Button type="warning" className='text' onClick={this.clear.bind(this)}>清空</Button>
                    </div>
                </div>
            </Modal>
        </div>
    }
    deluser(userID){
        this.setState({del:true,userID});
    }
    changeUser(userId,user){
        this.setState({changeuser:true});
        this.setState({userId,user});
    }
    add(){
        this.setState({changeuser:false})
        this.props.changeuser(this.state.userId,this.state.user);
    }
    clear(){
        this.setState({changeuser:false})
    }
    componentDidMount(){
        this.props.getusers()
    }
}
let mapState=(state)=>{
    return {
        data:state.test
    }
}
let mapDIspatch=(dispatch)=>{
    return {
        deluser(userId){
            dispatch(deluser(userId))
        },
        changeuser(userId,user){
            dispatch(changeuser(userId,user))
        },
        getusers(){
            dispatch(getAllUsers())
        }
    }
}
Manger=connect(mapState,mapDIspatch)(Manger)
export default Manger;