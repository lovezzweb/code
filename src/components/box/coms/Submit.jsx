import React , {Component} from "react";
import { List, InputItem, WhiteSpace ,Button, Picker,DatePicker,Modal} from 'antd-mobile';
import AlertModal from '../../AlertModal';
import {connect} from 'react-redux';
import {getAllUsers,addDesc} from '../../../store/actions';
class Submit extends Component{
    constructor(props){
        const nowTimeStamp = Date.now();
        const now = new Date(nowTimeStamp);
        super(props);
        this.state={
            put:false,
            date: now,
            user:[],
            price:'',
            desc:'',
            userId:'',
            adddesc:false
        }
    }
    render(){
        return <div className='submit'>
            <DatePicker
                mode="date"
                title="Select Date"
                extra="Optional"
                value={this.state.date}
                onChange={date => this.setState({ date })}
            >
                <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
            <Picker data={this.props.userInfo} cols={1} className="forss" value={this.state.user} onOk={this.ok.bind(this)}>
                <List.Item arrow="horizontal">姓名</List.Item>
            </Picker>
            <List className='submit-list'>
                <InputItem placeholder='请输入金额' onBlur={(val)=>{this.setState({price:val})}}>金额</InputItem>
                <InputItem placeholder='请输入备注' onBlur={(val)=>{this.setState({desc:val})}}>备注</InputItem>
            </List>
            <div className='btns'>
                <Button type="primary" className='text' onClick={this.addDesc.bind(this)}>提交</Button>
                <Button type="warning" className='text'>清空</Button>
            </div>
            <WhiteSpace />
            <AlertModal isshow={this.state.put} change={(val)=>{this.setState({put:val})}} text={'时间/姓名/金钱/备注不能为空'}/>
            <Modal
                visible={this.state.adddesc}
                transparent
                maskClosable={false}
                title="请确认"
                footer={[{ text: 'Ok', onPress: () => {
                     console.log('ok'); 
                     this.setState({adddesc:false});
                     let {date,user,price,desc,userId}=this.state;
                     let obj={date:date.toISOString().slice(0,10),user,userId,price,desc};
                     this.props.addDesc(obj);
                     this.setState({user:'',price:'',desc:''});
                }}]}>
                <div>
                    <p>{'时间'+this.state.date.toISOString().slice(0,10)}</p>
                    <p>{'金钱'+this.state.price}</p>
                    <p>{'备注'+this.state.desc}</p>
                </div>
            </Modal>
        </div>
    }
    componentDidMount(){
        this.props.getusers()
    }
    addDesc(){
        let {date,user,price,desc,userId}=this.state;
        if(!date||!user||!price||!desc){
            this.setState({put:true})
        }else{
            this.setState({adddesc:true})
        }
    }
    ok(val){
        this.setState({user:val,userId:val[0]}) 
    }
}
let mapState=(state)=>{
    return {
        userInfo:state.test.userInfo
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getusers(){
            dispatch(getAllUsers())
        },
        addDesc(descItem){
            dispatch(addDesc(descItem))
        }
    }
}
Submit=connect(mapState,mapDispatch)(Submit)
export default Submit;