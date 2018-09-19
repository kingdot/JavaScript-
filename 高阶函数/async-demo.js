function after(times, callback){
    let funcArr = [];
    return function (asyncFunc) {
        funcArr.push(asyncFunc);
        if (--times === 0){
            callback(funcArr);
        }
    }
}

let fn = after(3, (data)=>{console.log(data)});
// fn(9);
// fn(8);
// fn(7);

setTimeout(fn,1000,9);
setTimeout(fn,2000,8);
setTimeout(fn,3000,7);
