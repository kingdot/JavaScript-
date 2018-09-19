Array.prototype.map = function (func) {
    console.log(this);
    var res = [];
    this.forEach((item,index)=>{
        res[index] = func.call(this, item);
    });
    return res;
};

function double(x) {
    return x*2;
}

console.log([1,2,3,4,5,6].map(double));
