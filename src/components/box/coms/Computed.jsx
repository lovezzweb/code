import React , {Component} from "react";
import {connect} from 'react-redux';
class Computed extends Component{
    constructor(props){
        super(props);
        this.state={
            mean:0
        }
    }
    render(){
        let {userdata}=this.props;
        let {mean}=this.state;
        return <div className='computed'>
            <p></p>
            <table className='table'>
                    <tbody>
                        <tr className='info'>
                            <td>姓名</td>
                            <td>个人总计</td>
                            <td>平均金额</td>
                            <td>应付</td>
                            <td>应收</td>
                        </tr>
                        {
                            userdata&&userdata.map((item,index)=>{
                                return <tr key={index}>
                                        <td>{item.user}</td>
                                        <td>{item.moneyBase}</td>
                                        <td>{mean}</td>
                                        <td>{mean-item.moneyBase>=0?mean-item.moneyBase:0}</td>
                                        <td>{mean-item.moneyBase<0?item.moneyBase-mean:0}</td>
                                    </tr>
                             })
                        }
                    </tbody>
                </table>
        </div>
    }
    componentDidMount(){
        let {mean}=this.state;
        
        let sum=this.props.userdata&&this.props.userdata.reduce((prev,item)=>{
            console.log(prev+item.moneyBase*1 )
            return prev+item.moneyBase*1   
        },0)
        mean=sum/this.props.userdata.length
        this.setState({mean})
    }
}
let mapState=(state)=>{
    return {
        userdata:state.test.userdata
    }
}
let mapDispatch=(dispatch)=>{
    return {

    }
}
Computed=connect(mapState,mapDispatch)(Computed)
export default Computed;