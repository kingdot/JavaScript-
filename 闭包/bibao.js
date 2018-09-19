var TestConst = function (params) {
    var a = 1;
    return function () {
        a;
    }
};

TestConst.prototype.prints = function (params) {
    console.log(params);
};

new TestConst();

