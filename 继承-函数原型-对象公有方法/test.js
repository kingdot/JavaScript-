function Supper(name, age) {
    this.name = name;
    this.age = age;
}

Supper.prototype.getName = function () {
    return this.name;
};
Supper.prototype.tall = 170;


console.log(Supper.prototype);
//=========================  组合继承 ====================
// 子类的所有属性都是自己的
function Subber(name, age, sex) {
    Supper.call(this, name , age);
    // 如果这样写的话 子类实例化后拿不到name和age
    // Supper(name , age);
    this.sex = sex;
}

// 这样是不行的，因为Supper.prototype的__proto__并不指向Super.prototype,因此子类Subber的实例其实是和父类共享一个原型对象。并非是继承关系。
// Subber.prototype = Supper.prototype;
Subber.prototype = Object.create(Supper.prototype);
var sub1 = new Subber('wangdian', 20, 'male');
console.log(sub1.tall);
console.log(sub1.getName());
console.log(sub1.sex, sub1.name, sub1.age);
console.log(sub1.__proto__);
console.log(Subber.prototype);

//========================  原型继承  ======================
// 子类从原型链上拿到的属性都是父类的,而不是自己的
// function Subber(sex) {
//     this.sex = sex;
// }
//
// Subber.prototype = new Supper('wangdian', 20);
// var sub2 = new Subber('male');
//
// console.log(sub2.sex, sub2.age, sub2.name, sub2.getName());
// console.log(sub2.__proto__);


