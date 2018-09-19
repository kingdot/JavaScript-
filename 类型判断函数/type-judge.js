// function isType(obj) {
//     return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
// }
// console.log(isType(null));

//====================================

function isTypeTop(type) {
    return function (content) {
        let result = Object.prototype.toString.call(content).replace(/\[object\s|\]/g, '');
        return type === result;
    }
}

let types = ['String', 'Undefined', 'Function', 'Number', 'Null'];
let utils = {};
types.forEach((item)=>{
    utils['is'+item] = isTypeTop(item);
});

console.log(utils.isString(''));
console.log(utils.isString(1));
console.log(utils.isNull(null));