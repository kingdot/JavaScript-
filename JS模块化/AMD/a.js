let factories = {};
// define函数声明模块
function define(moduleName, dependencies, factory){
    factories[moduleName] = factory;
    factory.dependency = dependencies;
}

function require(modules,callback){
    let result = modules.map((module)=>{
        let factory = factories[module];
        let dependencies = factory.dependency;

        let exports;
        require(dependencies, function () {
            exports = factory.apply(null, arguments);
        });

        return exports;
    });


    callback.apply(null,result);
}

define('moduleA',['moduleB'],function (...data) {
    return 'moduleA'+data
});

define('moduleB',[],function () {
    return 'moduleB'
});


require(['moduleA'],function (...data) {
    console.log(data);
});
