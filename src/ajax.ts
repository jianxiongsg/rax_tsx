import mu from "jxtool"
import MX from "jx-mx";
console.log(mu.getHrefParamAll(location.href))
console.log(mu.getHrefParam("jian"))
console.log(mu.getUrlInfo(location.href))
console.log(mu.getBottomBarHeight(),mu.getStatusBarHeight(),mu.isIPhoneX(),mu.isIos(),mu.isAndroid())
console.log(mu.shortNick("你说的是的非官方的",6));
mu.watch((v:string)=>{
    console.log(".................",v)
})
let queueFunc = new mu.QueueFunc();
queueFunc.add((next)=>{
    setTimeout(()=>{
        console.log("...................1");
        next();
    },2000)
})
queueFunc.add((next)=>{
    setTimeout(()=>{
        console.log("...................2");
        next();
    },2000)
})
queueFunc.add((next)=>{
    setTimeout(()=>{
        console.log("...................3");
        next();
    },2000)
})
queueFunc.next();
mu.ajax({
    type:'post',
    url:'http://localhost:8080/p',
    data:{
        username:"zhangsan",
        id:"12345"
    },
    header:{
        'Content-Type':'application/json'
    },
    success:function(data,xhr){
        console.log("成功",data)
    },
    error:function(data,xhr){
        console.log("error",data)
    }
})

setTimeout(()=>{
    mu.ajax({
        type:'get',
        url:'http://localhost:8080/get',
        data:{
            username:"jx",
            id:"getid"
        },
        header:{
            'Content-Type':'application/json'
        },
        success:function(data,xhr){
            console.log("成功",data)
        },
        error:function(data,xhr){
            console.log("error",data)
        }
    })
},2000)

setTimeout(()=>{
    mu.ajax({
        type:'get',
        url:'http://localhost:8080/html',
        data:{
            username:"zhangsan1",
            id:"gethtm"
        },
        header:{
            'Content-Type':'application/json'
        },
        success:function(data,xhr){
            console.log("成功",data)
        },
        error:function(data,xhr){
            console.log("error",data)
        }
    })
},2000)

let mx = new MX();
let testfun = (a,b,c)=>{
    console.log(".......testfun",a,b,c)
}
let testfun1 = (a,b,c)=>{
    console.log(".......testfun1",a,b,c)
}
mx.on("test",testfun)
mx.on("test",testfun1)

console.log("...........hasmx",mx.has("test"))
console.log("...........hasmx1",mx.has("test1"))

mx.emit("test",1,2,3,4);
mx.emit("test",1,2);
setTimeout(()=>{
    mx.emit("test");
    mx.off("test",testfun)
},1000)

setTimeout(()=>{
    mx.emit("test",5,6,7);
},2000)