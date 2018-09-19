// let str = require("./commonJS");
// console.log(str);

let fs = require("fs");

function req(path) {
    let content = fs.readFileSync(path, 'utf8');
    let module = {
        exports: {}
    };

    /**
     * 与下面用函数表达式定义的作用相同
     */
    return (function (exports, module, require, __dirname, __filename) {
        eval(content);
        return module.exports;
    })(module.exports, module, req, __dirname, __filename);

    /**
     * 等价于
     * 最后一个参数表示函数体内容
     * @type {Function}
     */
    // let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + "\n return module.exports;");
    // return fn(module.exports, module, req, __dirname, __filename);
}

let str = req("./commonJS.js");
console.log(str);