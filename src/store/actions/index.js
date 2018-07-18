import axios from 'axios';
import mock from '../../mock';
let PORT='http://localhost:3366';
//登录
export function login(pwd){
    return (dispatch)=>{
        axios.get(PORT+'/pwd?pwd='+pwd).then(res=>{
            if(res.data.msg==="ok"){
                dispatch({type:"LOGIN",isShow:false})
            }else{
                dispatch({type:"LOGIN",isShow:true})
            }
        })
    }
}
//添加用户
export function adduser(userId,user,moneyBase,children){
    return (dispatch)=>{
        axios.get(PORT+'/adduser?userId='+userId+'&user='+user+'&moneyBase='+moneyBase+'&children='+children).then(res=>{
            if(res.data.code===1){
                dispatch({type:"ADD_USER",userdata:res.data.userdata})
            }  
        })
    }
}
//获取所有的用户名
export function getAllUsers(){
    return (dispatch)=>{
        axios.get(PORT+'/getAllUsers').then(res=>{
            if(res.data.code===1){
                dispatch({type:"GET_ALL_USERS",userdata:res.data.userdata})
            }
        })
    }
}
//删除用户
export function deluser(userId){
    return (dispatch)=>{
        axios.get(PORT+'/deluser?userId='+userId).then(res=>{
            console.log(res)
            if(res.data.code===1){
                dispatch({type:"DEL_USER",userdata:res.data.userdata})
            }
        })
    }
}
//改变用户
export function changeuser(userId,user){
    return (dispatch)=>{
        axios.get(PORT+'/changeuser?userId='+userId+'&user='+user).then(res=>{
            dispatch({type:'CHANGE_USER',userdata:res.data.userdata})
        })
    }
}
//进入某一用户的详情
export function toDetail(userId){
    return (dispatch)=>{
        axios.get(PORT+'/box/detail?userId='+userId).then(res=>{
            if(res.data.code===1){
                dispatch({type:"TO_DETAIL",detail:res.data.detail})
            }
            
        })
    }
}

//每一次提交的信息
export function addDesc(descItem){
    return (dispatch)=>{
        let {date,userId,price,desc}=descItem
        axios.get(PORT+'/addDesc?date='+date+'&userId='+userId+'&price='+price+'&log='+desc).then(res=>{
            if(res.data.code===1){
                dispatch({type:"ADD_DESC",userdata:res.data.userdata})
            }
        })
    }
}