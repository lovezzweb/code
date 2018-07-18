
let obj={
    ["LOGIN"](state,action){
        state.isShow=action.isShow;
    },
    ['ADD_USER'](state,action){
        state.userdata=action.userdata;
    },
    ['DEL_USER'](state,action){
        state.userdata=action.userdata;
    },
    ['CHANGE_USER'](state,action){
        state.userdata=action.userdata;
    },
    ['TO_DETAIL'](state,action){
        state.detail=action.detail
    },
    ['GET_ALL_USERS'](state,action){
        state.userdata=action.userdata;
        state.userInfo=[];
        action.userdata.forEach(item=>{
            state.userInfo.push({label:item.user,value:item.userId})
        })
    },
    ['ADD_DESC'](state,action){
        state.userdata=action.userdata;
    }
}
let test=(state={userdata:[],detail:[],userInfo:[],isShow:true},action)=>{
    obj[action.type]&&obj[action.type](state,action);
    return {...state}
}
export default test;