import Mock from 'mockjs';


// Mock.mock('/pwd',(req,res)=>{
//     const pwd=JSON.parse(req.body).pwd
//     if(pwd==="123"){
//        return {msg:'ok'}
//     }
// })
//用户信息
 let userdata=[];
//每一次提交的信息
let descData=[];
//添加用户
// Mock.mock('/adduser',(req,res)=>{
//     let {userId,user,moneyBase,children}=JSON.parse(req.body)
//     userdata.push({userId,user,moneyBase});
//     descData.push({userId,user,allPrice:0,children});
//     return {code:1,userdata}
// })
//获取所有用户名
// Mock.mock('/getAllUsers',(req,res)=>{
//     return {code:1,userdata}
// })
//删除用户
// Mock.mock('/deluser',(req,res)=>{
//     let id=JSON.parse(req.body).userId;
//     userdata.forEach((item)=>{
//         if(item.userId===id){
//             userdata.splice(userdata.indexOf(item),1);
//         }
//     })
//     return {code:1,userdata}
// })
//改变用户名
// Mock.mock('/changeuser',(req,res)=>{
//     let {userId,user}=JSON.parse(req.body);
//     userdata.forEach((item)=>{
//         if(item.userId===userId){
//             item.user=user;
//         }
//     })
//     return {code:1,userdata}
// })
//进入其中一名用户的详情
// Mock.mock('/box/detail',(req,res)=>{
//     let {userId}=JSON.parse(req.body);
//     let detail=[]
//     descData.forEach((item,key)=>{
//         if(item.userId===userId){
//             detail=item.children;
//         }
//     });
//     return {code:1,detail}
// })

//每一次提交的信息
// Mock.mock('/addDesc',(req,res)=>{
//     let {descItem}=JSON.parse(req.body);
//     descData.map((item,key)=>{
//         if(item.userId===descItem.userId){
//            item.children.push(descItem);
//            allprice(descData);
//         }
//     })
//     return {code:1,descData,userdata}
// })
// function allprice(descData){
//     descData.forEach((item,index)=>{
//         let a=item.children.reduce((prevmoney,val)=>{
//             return prevmoney+val.price*1
//         },0)
//         item.allPrice=a;
//         userdata[index].moneyBase=a;
//     })  
// }