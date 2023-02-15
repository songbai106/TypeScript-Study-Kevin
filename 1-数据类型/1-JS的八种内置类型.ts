/**
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types: 7）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。
 */
let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let big: bigint = 100n;
let sym: symbol = Symbol("me"); 
let obj: object = {x: 1};

// Number、String、Boolean、Symbol
// 首先，我们来回顾一下初学 TypeScript 时，很容易和原始类型 number、string、boolean、symbol 混淆的首字母大写的 Number、String、Boolean、Symbol 类型，
// 后者是相应原始类型的包装对象，姑且把它们称之为对象类型。
let num1: number = 1;
let Num: Number = 2;
Num = num1; // ok
num1 = Num; // ts(2322)报错
// 因此，我们需要铭记不要使用对象类型来注解值的类型，因为这没有任何意义。


// object、Object 和 {}
// 小 object 代表的是所有非原始类型，也就是说我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。
// 在严格模式下，null 和 undefined 类型也不能赋给 object。
let lowerCaseObject: object;
lowerCaseObject = 1; // ts(2322)
lowerCaseObject = 'a'; // ts(2322)
lowerCaseObject = true; // ts(2322)
lowerCaseObject = null; // ts(2322)
lowerCaseObject = undefined; // ts(2322)
lowerCaseObject = {}; // ok

// 大Object 代表所有拥有 toString、hasOwnProperty 方法的类型，所以所有原始类型、非原始类型都可以赋给 Object。
// 同样，在严格模式下，null 和 undefined 类型也不能赋给 Object。
let upperCaseObject: Object;
upperCaseObject = 1; // ok
upperCaseObject = 'a'; // ok
upperCaseObject = true; // ok
upperCaseObject = null; // ts(2322)
upperCaseObject = undefined; // ts(2322)
upperCaseObject = {}; // ok

// 大 Object 包含原始类型，小 object 仅包含非原始类型，所以大 Object 似乎是小 object 的父类型。
// 实际上，大 Object 不仅是小 object 的父类型，同时也是小 object 的子类型。
type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true : false; // true
type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true : false; // true
upperCaseObject = lowerCaseObject; // ok
lowerCaseObject = upperCaseObject; // ok

// 注意：尽管官方文档说可以使用小 object 代替大 Object，但是我们仍要明白大 Object 并不完全等价于小 object。

// {}空对象类型和大 Object 一样，也是表示原始类型和非原始类型的集合，并且在严格模式下，null 和 undefined 也不能赋给 {} ，示例：
let ObjectLiteral: {};
ObjectLiteral = 1; // ok
ObjectLiteral = 'a'; // ok
ObjectLiteral = true; // ok
ObjectLiteral = null; // ts(2322)
ObjectLiteral = undefined; // ts(2322)
ObjectLiteral = {}; // ok
type isLiteralCaseObjectExtendsUpperCaseObject = {} extends Object ? true : false; // true
type isUpperCaseObjectExtendsLiteralCaseObject = Object extends {} ? true : false; // true
upperCaseObject = ObjectLiteral;
ObjectLiteral = upperCaseObject;


// 综上结论：{}、大 Object 是比小 object 更宽泛的类型（least specific），{} 和大 Object 可以互相代替，
// 用来表示原始类型（null、undefined 除外）和非原始类型；而小 object 则表示非原始类型。


export { };