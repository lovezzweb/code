import React , {Component} from 'react';
import {Modal} from 'antd-mobile';
class AlertModal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Modal
            visible={this.props.isshow}
            transparent
            maskClosable={false}
            title="提示"
            footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.props.change(false)}}]}>
            <div>{this.props.text}</div>
        </Modal>
    }
}
export default AlertModal;